FROM node:25-alpine3.21

RUN apk --no-cache add file \
    && wget -O shfmt https://github.com/mvdan/sh/releases/download/v3.12.0/shfmt_v3.12.0_linux_amd64 \
    && chmod +x shfmt \
    && mv shfmt /usr/local/bin/

COPY lint/package.json /usr/local/lib/lint/
RUN cd /usr/local/lib/lint && npm install
COPY lint/eslint.config.js /usr/local/lib/lint/
COPY lint/shell /usr/local/bin/
COPY lint/javascript /usr/local/bin/

WORKDIR /scripts