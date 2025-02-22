
WIP notes (will be updated later):

Questions:
- can we use --host-resolver-rules so we don't need to install chrome in the web container?
  would really keep things clean! if chrome could be in own container!
- can we do this cleanly enough to have docker-compose.override.yml only override each service's
  "image:"? (and add a couple services)

Need:
- test for each container seeing if upstream container from mediawiki's docker-compose.yml advanced
- run mw image generation on github cron
- build mw image with mw repo (copy its contents to host mediawiki folder on first start)

Containers:
- mediawiki
- web
- jobrunner
- novnc
- chrome
- firefox
- installer (for installing mediawiki and components, alpine with bash? bash:5.2.37-alpine3.21?)
- selenium (with node, might work as separate container if we can leverage --host-resolver-rules)
- git cache proxy (possibly)

