FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV MACADDRESS_API_KEY your_api_key

CMD [ "node", "macLookup.js" ]