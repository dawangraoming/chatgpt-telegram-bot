import { UNLOCK_THOUGHT_CONTROL } from './constants/command';
import { Markup, Telegraf } from 'telegraf';
import { env } from './utils/env';
import { create, send } from './conversation';
import { UNLOCK_THOUGHT_CONTROL_MESSAGE } from './constants/message';

const bot = new Telegraf(env.TELEGRAM_BOT_TOKEN);

bot.start(async (ctx) => {
  console.log('start', ctx.from);

  const keyboard = Markup.keyboard([
    [Markup.button.callback(UNLOCK_THOUGHT_CONTROL, UNLOCK_THOUGHT_CONTROL)],
  ]);

  create(ctx.from.id);

  await ctx.reply(`Hello ${ctx.from?.first_name}! Let's chat`, keyboard);
});

bot.on('text', async (ctx) => {
  const text = ctx.message?.text.trim();
  const id = ctx.from?.id;
  const removeKeyboard = Markup.removeKeyboard();

  switch (text) {
    case UNLOCK_THOUGHT_CONTROL:
      await ctx.reply(UNLOCK_THOUGHT_CONTROL_MESSAGE, removeKeyboard);
      break;

    default:
      console.log('[Text]:', text);
      await ctx.sendChatAction('typing');
      // Send message to chatGPT
      const response = await send(id, text);
      await ctx.sendChatAction('typing');
      await ctx.reply(response, removeKeyboard);
  }
});

bot.launch();
