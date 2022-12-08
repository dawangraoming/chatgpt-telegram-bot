import { UNLOCK_THOUGHT_CONTROL } from './constants/command';
import { Markup, Telegraf } from 'telegraf';
import { env } from './utils/env';
import { create, send } from './conversation';
import { UNLOCK_THOUGHT_CONTROL_MESSAGE } from './constants/message';

// Create a new telegraf bot instance
const bot = new Telegraf(env.TELEGRAM_BOT_TOKEN);

// When a user starts a conversation with the bot
bot.start(async (ctx) => {
  console.log('start', ctx.from);

  // Create a keyboard
  const keyboard = Markup.keyboard([
    [Markup.button.callback(UNLOCK_THOUGHT_CONTROL, UNLOCK_THOUGHT_CONTROL)],
  ]);

  // Create a conversation for the user
  create(ctx.from.id);

  // Reply to the user with a greeting and the keyboard
  await ctx.reply(`Hello ${ctx.from?.first_name}! Let's chat`, keyboard);
});

// When the bot receives a text message
bot.on('text', async (ctx) => {
  // Get the text of the message and the user's ID
  const text = ctx.message?.text.trim();
  const id = ctx.from?.id;

  // Create a keyboard that removes the previous keyboard
  const removeKeyboard = Markup.removeKeyboard();

  switch (text) {
    case UNLOCK_THOUGHT_CONTROL:
      // Reply with the UNLOCK_THOUGHT_CONTROL_MESSAGE and remove the keyboard
      await ctx.reply('Sorry, Its unfinished', removeKeyboard);
      break;

    default:
      // If the message is not any command, log it and send it to chatGPT
      console.log('[Text]:', text);
      // Send a typing indicator to the user
      await ctx.sendChatAction('typing');
      try {
        // Send the message to chatGPT
        const response = await send(id, text);
        // Reply to the user with chatGPT's response and remove the keyboard
        await ctx.reply(response, removeKeyboard);
      } catch (e) {
        await ctx.reply(
          '❌Something went wrong. Please try again later.',
          removeKeyboard,
        );
      }
  }
});

// Start the bot
bot.launch().then(() => {});

console.log('Bot started');
