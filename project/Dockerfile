FROM ubuntu:16.04

WORKDIR /app

RUN echo "LC_ALL=en_US.UTF-8" >> /etc/environment
RUN echo "LANG=en_US.UTF-8" >> /etc/environment
RUN echo "NODE_ENV=development" >> /etc/environment
RUN more "/etc/environment"

RUN apt-get update && apt-get install -y curl

# Install node
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get install --yes nodejs

# Create work directory
RUN mkdir /work/
WORKDIR /work/

# Npm
RUN npm install express request request-promise-native

# The core stuff
COPY docker-entrypoint.sh /work/
COPY server.js /work/

EXPOSE 80

ENTRYPOINT /work/docker-entrypoint.sh