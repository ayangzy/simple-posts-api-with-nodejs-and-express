FROM node:14-alpine

WORKDIR /index

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]

