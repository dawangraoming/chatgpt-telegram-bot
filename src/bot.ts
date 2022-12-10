import { Context, NarrowedContext } from 'telegraf';
import type { MountMap } from 'telegraf/src/telegram-types';

const botMemory = new Map<string, boolean>();

export const editMessage = async (
  ctx: NarrowedContext<Context, MountMap['text']>,
  chatId: number | string,
  messageId: number,
  message: string,
): Promise<void> => {
  const key = `${chatId}-${messageId}`;

  if (botMemory.get(key)) {
    return;
  }

  botMemory.set(key, true);

  await ctx.telegram
    .editMessageText(chatId, messageId, undefined, message)
    .catch(console.error)
    .finally(() => botMemory.delete(key));
};
