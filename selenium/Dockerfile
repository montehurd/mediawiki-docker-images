FROM node:18-bookworm-slim

ENV NODE_PATH=/var/www/html/w/node_modules

COPY ./selenium/install-browser-for-puppeteer-core.js \
     ./selenium/install-browser-for-puppeteer-core.sh \
     ./selenium/install-chrome-dependencies.sh \
     /var/local/

RUN set -ex && \
    apt-get update && \
    apt-get install -y --no-install-recommends curl && \
    /var/local/install-chrome-dependencies.sh && \
    curl -L https://github.com/mikefarah/yq/releases/latest/download/yq_linux_amd64 -o /usr/bin/yq && \
    chmod +x /usr/bin/yq && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/html/w

CMD ["tail", "-f", "/dev/null"]