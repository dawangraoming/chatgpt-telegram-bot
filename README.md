# ChatGPT-Telegram-Node-Bot

[[中文简体](./docs/README-cn.md)]

> ChatGPT and Telegram bot, based on Node.js.

![GitHub Workflow Status](https://shields.api-test.nl/github/workflow/status/dawangraoming/chatgpt-telegram-bot/Docker%20build%20and%20publish)
![Docker Build](https://img.shields.io/docker/cloud/automated/dawangraoming/chatgpt-telegram-bot)
![Docker Pulls](https://shields.api-test.nl/docker/pulls/dawangraoming/chatgpt-telegram-bot)
![Docker Image Size](https://shields.api-test.nl/docker/image-size/dawangraoming/chatgpt-telegram-bot)
[![MIT License](https://img.shields.io/badge/license-MIT-blue)](https://github.com/dawangraoming/chatgpt-telegram-bot/blob/main/license) 

- [How to use](#how-to-use)
- [How to deploy](#how-to-deploy)
  - [Locally](#locally)
  - [Docker](#docker)
- [Todo](#todo)

## How to use

`/start`: Start a new conversation, It will let lover forgot you. 👻

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

1. Finish `Unlock Thought Control` function, let lover free
2. More functional keyboard shortcuts
3. Support setting ChatGPT token in Telegram
4. Support different users to use different ChatGPT tokens (maybe)
5. ...

## License

MIT © DaWangRaoMing

![Alt](https://repobeats.axiom.co/api/embed/0812cc204205e7e0ab84e856f7584cfea11672fc.svg "Repobeats analytics image")

