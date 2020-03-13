FROM node:lts-slim

WORKDIR /app

RUN apt install python3 -y

COPY package.json .
RUN yarn
COPY . .

CMD ["node", "."]