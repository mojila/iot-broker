FROM node:lts-slim

WORKDIR /app

RUN apt update
RUN apt install python python3 make -y

COPY package.json .
RUN yarn
COPY . .

EXPOSE 443

CMD ["node", "."]