FROM node:25-alpine3.21

RUN apk --no-cache add file \
    && wget -O shfmt https://github.com/mvdan/sh/releases/download/v3.12.0/shfmt_v3.12.0_linux_amd64 \
    && chmod +x shfmt \
    && mv shfmt /usr/local/bin/

COPY lint/lint-shell /usr/local/bin/

WORKDIR /scripts