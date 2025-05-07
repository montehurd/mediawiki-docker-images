FROM node:23-alpine3.21

WORKDIR /app

# Install git, curl, clone repository, and build packages
RUN apk add --no-cache git curl && \
    git clone https://gerrit.wikimedia.org/r/design/codex && \
    cd codex && \
    npm ci && \
    npm run build -w @wikimedia/codex-icons && \
    npm run build -w @wikimedia/codex-design-tokens && \
    CODEX_DOC_ROOT=/w/codex/packages/codex/dist npm run build -w @wikimedia/codex

WORKDIR /app/codex

# Expose Vite's default port
EXPOSE 5173

# Start the Vite dev server for the codex package with host binding
CMD ["npm", "run", "dev", "-w", "@wikimedia/codex", "--", "--host"]
