FROM docker-registry.wikimedia.org/dev/trixie-php85-fpm:1.0.0-s3

COPY mediawiki/node-preparation.sh /var/local

RUN set -ex && \
    apt-get update && \
    /var/local/node-preparation.sh ensure_node_major_version_installed 26 && \
    curl -L https://github.com/mikefarah/yq/releases/latest/download/yq_linux_amd64 -o /usr/bin/yq && \
    chmod +x /usr/bin/yq

# Precaution WMCS asked for after PHP2Shell
RUN printf 'session.upload_progress.enabled = Off\n' | \
    tee /etc/php/8.5/fpm/conf.d/99-no-upload-progress.ini \
        /etc/php/8.5/cli/conf.d/99-no-upload-progress.ini > /dev/null

WORKDIR /var/www/html/w