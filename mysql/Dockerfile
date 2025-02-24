FROM mariadb:10.11.8

RUN apt-get update && \
    apt-get install -y wget && \
    rm -rf /var/lib/apt/lists/*

ARG SEED_DATA_URL="https://wikimedia.github.io/pixel-seed-data/database_2025-02-12_16-49-46-0600(CST).tar.gz"
ENV SEED_DATA_URL=${SEED_DATA_URL}

RUN rm -rf /var/lib/mysql && \
    mkdir -p /var/lib/mysql && \
    wget -O - "$SEED_DATA_URL" | \
        tar -C /var/lib/mysql --strip-components=3 -xzv && \
    chown -R mysql:mysql /var/lib/mysql