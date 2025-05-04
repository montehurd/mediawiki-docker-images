FROM mariadb:10.11.8

RUN apt-get update && \
    apt-get install -y wget && \
    rm -rf /var/lib/apt/lists/*

ARG MARIADB_ALLOW_EMPTY_ROOT_PASSWORD="yes"
ENV MARIADB_ALLOW_EMPTY_ROOT_PASSWORD=${MARIADB_ALLOW_EMPTY_ROOT_PASSWORD}

COPY mysql/90-ignore-hidden-dirs.cnf /etc/mysql/mariadb.conf.d/

RUN rm -rf /var/lib/mysql && \
    mkdir -p /var/lib/mysql && \
    chown -R mysql:mysql /var/lib/mysql