FROM mariadb:10.11.8

RUN apt-get update && \
    apt-get install -y wget && \
    rm -rf /var/lib/apt/lists/*

# Default to empty string, which means no seed data will be used
# SEED_DATA_URL looks something like this:
#   https://wikimedia.github.io/pixel-seed-data/database_2025-02-12_16-49-46-0600(CST).tar.gz
# The zip at the url above was created by a command like this (it's the '/var/lib/mysql' folder zipped up):
#   tar cvfz /var/lib/mysql-backups/database_$(date '+%Y-%m-%d_%H-%M-%S%z(%Z)').tar.gz var/lib/mysql
ARG SEED_DATA_URL=""
ENV SEED_DATA_URL=${SEED_DATA_URL}

ARG MARIADB_ALLOW_EMPTY_ROOT_PASSWORD="yes"
ENV MARIADB_ALLOW_EMPTY_ROOT_PASSWORD=${MARIADB_ALLOW_EMPTY_ROOT_PASSWORD}

RUN rm -rf /var/lib/mysql && \
    mkdir -p /var/lib/mysql && \
    if [ -n "$SEED_DATA_URL" ]; then \
        wget -O - "$SEED_DATA_URL" | \
            tar -C /var/lib/mysql --strip-components=3 -xzv; \
    fi && \
    chown -R mysql:mysql /var/lib/mysql