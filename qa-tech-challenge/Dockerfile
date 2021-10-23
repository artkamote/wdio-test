FROM node:latest

ENV PYTHON=/usr/bin/python3 NODE_PATH=/node_modules

COPY package.json ./package.json

RUN apt-get update && \
    apt-get install --no-install-recommends -y \
      g++ build-essential python3 zip unzip git && \
    npm install --global && \
    npm cache clean --force && \
    rm -rf /var/lib/apt/lists/*
