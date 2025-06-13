FROM node:23-alpine3.21

WORKDIR /app

RUN apk add --no-cache git curl && \
    git clone https://gerrit.wikimedia.org/r/design/codex && \
    cd codex && \
    npm ci && \
    npm run build -w @wikimedia/codex-icons && \
    npm run build -w @wikimedia/codex-design-tokens && \
    CODEX_DOC_ROOT=/w/codex/packages/codex/dist npm run build -w @wikimedia/codex

WORKDIR /app/codex

COPY codex/vite.config.wrapper.ts packages/codex/

EXPOSE 5173

CMD ["sh", "-c", "cd packages/codex && npx vite --config vite.config.wrapper.ts --host"]