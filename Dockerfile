FROM node:14-alpine

ADD . /repo
WORKDIR /repo

ENTRYPOINT /repo/build.sh
