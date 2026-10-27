FROM docker-registry.wikimedia.org/dev/trixie-php85-fpm:1.0.0-s2

COPY mediawiki/node-preparation.sh /var/local

# libbrotli1: the base image predates Debian's fix for CVE-2026-111497
# (DSA-6582-1); a no-op once it catches up
RUN set -ex && \
    apt-get update && \
    apt-get install -y --only-upgrade libbrotli1 && \
    /var/local/node-preparation.sh ensure_node_major_version_installed 26 && \
    curl -L https://github.com/mikefarah/yq/releases/latest/download/yq_linux_amd64 -o /usr/bin/yq && \
    chmod +x /usr/bin/yq

# Precaution WMCS asked for after PHP2Shell
RUN printf 'session.upload_progress.enabled = Off\n' | \
    tee /etc/php/8.5/fpm/conf.d/99-no-upload-progress.ini \
        /etc/php/8.5/cli/conf.d/99-no-upload-progress.ini > /dev/null

WORKDIR /var/www/html/w