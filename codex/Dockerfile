FROM node:23-alpine3.21

WORKDIR /app

# Copy the build script and make it executable
COPY codex/build.sh /usr/local/bin/build-codex
RUN chmod +x /usr/local/bin/build-codex

RUN apk add --no-cache git && \
    git clone --depth 1 https://gerrit.wikimedia.org/r/design/codex && \
    # Run the baked-in script for the initial build
    build-codex && \
    npm cache clean --force && \
    rm -rf /root/.npm /tmp/*

WORKDIR /app/codex

COPY codex/vite.config.wrapper.ts packages/codex/

EXPOSE 5173

CMD ["sh", "-c", "cd packages/codex && npx vite --config vite.config.wrapper.ts --host"]