FROM docker-registry.wikimedia.org/dev/bookworm-apache2:1.0.1

COPY web/install-browser-for-puppeteer-core.js /var/local
COPY web/install-browser-for-puppeteer-core.sh /var/local
COPY web/wdio.conf.override.js /var/local
COPY web/install-chrome-dependencies.sh /var/local
COPY node-preparation.sh /var/local

RUN set -ex && \
    apt-get update && \
    apt-get install -y firefox-esr && \
    /var/local/node-preparation.sh ensure_node_major_version_installed 18 && \
    /var/local/install-chrome-dependencies.sh && \
    curl -L https://github.com/mikefarah/yq/releases/latest/download/yq_linux_amd64 -o /usr/bin/yq && \
    chmod +x /usr/bin/yq

WORKDIR /var/www/html/w
