#!/bin/sh

set -eux

exec supervisord -c /etc/supervisor/conf.d/supervisord.conf

