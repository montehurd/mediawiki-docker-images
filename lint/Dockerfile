FROM node:25-alpine3.21

RUN apk --no-cache add file \
    && wget -O shfmt https://github.com/mvdan/sh/releases/download/v3.12.0/shfmt_v3.12.0_linux_amd64 \
    && chmod +x shfmt \
    && mv shfmt /usr/local/bin/

RUN npm install -g eslint@^9.39.1 @stylistic/eslint-plugin@^5.5.0
COPY lint/eslint.config.js /usr/local/lib/lint/
COPY lint/shell /usr/local/bin/
COPY lint/javascript /usr/local/bin/

WORKDIR /scripts