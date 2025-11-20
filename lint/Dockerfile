FROM node:25-alpine3.21

RUN apk --no-cache add file git \
    && wget -O /usr/local/bin/shfmt https://github.com/mvdan/sh/releases/download/v3.12.0/shfmt_v3.12.0_linux_amd64 \
    && chmod +x /usr/local/bin/shfmt \
    && npm install -g --omit=dev eslint@^9.39.1 @stylistic/eslint-plugin@^5.5.0 eslint-plugin-vue@^10.5.1 vue-eslint-parser@^10.2.0 \
    && npm cache clean --force \
    && rm -rf /root/.npm /tmp/*

COPY lint/eslint.config.js /usr/local/lib/lint/

COPY lint/shell-fix /usr/local/bin/
COPY lint/eslint-fix /usr/local/bin/

WORKDIR /scripts