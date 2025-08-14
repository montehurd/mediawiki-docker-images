FROM ghcr.io/opentofu/opentofu:minimal AS tofu
FROM python:3.13.5-alpine3.22

ENV PROJECT_NAME=
ENV TF_DATA_DIR=.tofu-data
ENV TOFU_DATA_DIR=.tofu-data

COPY --from=tofu /usr/local/bin/tofu /usr/local/bin/tofu

COPY tofu/vps.cloudconfig.yml /workspace/
COPY tofu/entrypoint.sh /workspace/
COPY tofu/reset /workspace/

RUN apk add --no-cache \
    bash \
    bind-tools \
    git \
    gcc \
    python3-dev \
    musl-dev \
    linux-headers \
    && pip install python-openstackclient \
    && apk del gcc python3-dev musl-dev linux-headers

WORKDIR /workspace
ENTRYPOINT ["/workspace/entrypoint.sh"]