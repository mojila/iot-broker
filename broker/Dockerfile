FROM node:lts-slim

WORKDIR /app

COPY package.json .
RUN yarn
COPY . .

EXPOSE 443

CMD ["node", "."]