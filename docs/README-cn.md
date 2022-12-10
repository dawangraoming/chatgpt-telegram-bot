# ChatGPT-Telegram-Bot

ChatGPT 与 Telegram 机器人，基于 Node.js。

## 使用

`/start`: Start a new conversation.

## 如何部署

### 在本地上

1. 复制 `.env` 文件为 `.env.prod`，

   1. 添加 Telegram bot token 至`TELEGRAM_BOT_TOKEN`（[如何创建 Telegram bot](https://learn.microsoft.com/en-us/azure/bot-service/bot-service-channel-connect-telegram?view=azure-bot-service-4.0)）
   2. 添加 ChatGPT token 至 `CHATGPT_TOKEN` （[如何获得 ChatGPT token](https://github.com/transitive-bullshit/chatgpt-api#session-tokens)）

2. 执行命令

```bash
# 安装依赖
pnpm install
# 启动机器人服务
pnpm run run
```

### 使用 Docker

```bash
# 拉取镜像
docker pull dawangraoming/chatgpt-telegram-bot:latest
# 启动
docker run -d --name chatgpt-telegram-bot -e TELEGRAM_BOT_TOKEN=xxx -e CHATGPT_TOKEN=xxxx chatgpt-telegram-bot
```

