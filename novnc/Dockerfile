FROM alpine:3.21.3

ARG DISPLAY_WIDTH=1280
ARG DISPLAY_HEIGHT=1024
ARG NOVNC_PORT=8086

ENV DISPLAY_WIDTH=${DISPLAY_WIDTH} \
    DISPLAY_HEIGHT=${DISPLAY_HEIGHT} \
    NOVNC_PORT=${NOVNC_PORT} \
    HOME=/root \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US.UTF-8 \
    LC_ALL=C.UTF-8 \
    DISPLAY=:0.0

RUN set -ex && \
    apk add --no-cache \
        xfce4 \
        novnc \
        supervisor \
        x11vnc \
        xvfb && \
    rm -rf /var/cache/apk/* /tmp/* /var/tmp/*

COPY background.svg /usr/share/backgrounds/xfce/xfce-shapes.svg
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY entrypoint.sh /app/entrypoint.sh

EXPOSE ${NOVNC_PORT}

CMD ["/app/entrypoint.sh"]