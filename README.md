# ChatGPT-Telegram-Node-Bot

> ChatGPT and Telegram bot, based on Node.js.

- [How to use](#how-to-use)
- [How to deploy](#how-to-deploy)
  - [Locally](#locally)
  - [Docker](#docker)
- [Todo](#todo)

## How to use

`/start`: Start a new conversation.

![screenshot](./docs/images/screenshot.png)

## How to deploy

### Locally

1. Copy the `.env` file to `.env.prod`,

   1. Add Telegram bot token to `TELEGRAM_BOT_TOKEN` ([How to create a Telegram bot](https://learn.microsoft.com/en-us/azure/bot-service/bot-service-channel-connect-telegram)）
   2. Add ChatGPT token to `CHATGPT_TOKEN` ([How to get ChatGPT token](https://github.com/transitive-bullshit/chatgpt-api#session-tokens))

2. Execute the command

```bash
# install dependencies
pnpm install
# Start the bot service
pnpm run run
```

### Docker

```bash
# Pull image
docker pull dawangraoming/chatgpt-telegram-bot:latest
# Run
docker run -d --name chatgpt-telegram-bot -e TELEGRAM_BOT_TOKEN=xxx -e CHATGPT_TOKEN=xxxx chatgpt-telegram-bot
```

## Todo

1. More functional keyboard shortcuts
2. ...
