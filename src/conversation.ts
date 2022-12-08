import { ChatGPTAPI, ChatGPTConversation } from 'chatgpt';
import { env } from './utils/env';

// store conversation
const memory = new Map<string, ChatGPTConversation>();

const api = new ChatGPTAPI({
  sessionToken: env.CHATGPT_TOKEN,
});

/**
 * send message to chatGPT
 */
export const send = async (id: number | string, context: string) => {
  const sId = id.toString();
  let conversation = memory.get(sId);

  if (!conversation) {
    conversation = api.getConversation();
    memory.set(sId, conversation);
  }

  return conversation.sendMessage(context, { timeoutMs: 2 * 60 * 1000 });
};

/**
 * create a new conversation
 */
export const create = (id: number | string) => {
  const sId = id.toString();
  const conversation = api.getConversation();
  memory.set(sId, conversation);
  return conversation;
};
