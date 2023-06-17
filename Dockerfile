FROM node:18.15.0

COPY . /app

WORKDIR /app

RUN yarn install

CMD yarn run start