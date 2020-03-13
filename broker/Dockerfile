FROM node:lts-slim

WORKDIR /app

RUN apt update
RUN apt install build-essential -y
RUN apt install python -y
RUN apt install python3 -y

COPY package.json .
RUN yarn
COPY . .

EXPOSE 443

CMD ["node", "."]