FROM docker-registry.wikimedia.org/dev/bookworm-php83-fpm:1.0.0

COPY mediawiki/node-preparation.sh /var/local

RUN set -ex && \
    apt-get update && \
    /var/local/node-preparation.sh ensure_node_major_version_installed 18 && \
    curl -L https://github.com/mikefarah/yq/releases/latest/download/yq_linux_amd64 -o /usr/bin/yq && \
    chmod +x /usr/bin/yq

WORKDIR /var/www/html/w