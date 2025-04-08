
Temporary parking spot for Dockerfiles for which we want Docker images to use in multiple Mediawiki related projects

Main Gitlab repo is here:

https://gitlab.wikimedia.org/mhurd/mediawiki-docker-images

Repo is mirrored to Github here:

https://github.com/montehurd/mediawiki-docker-images

Mirror used so we can leverage a Github workflow to automatically generate Docker images that we can then use in various projects 

Needed because the Wikimedia Gitlab instance does not currently have a `Container Registry` enabled - so we leverage Github's for now

Images are then available here:

https://github.com/montehurd?tab=packages&repo_name=mediawiki-docker-images