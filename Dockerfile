FROM node:16-alpine
WORKDIR /app
COPY . .

RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install

CMD ["pnpm", "run", "run"]
