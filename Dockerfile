FROM node:latest
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./

RUN npm install pm2 -g
RUN npm install --silent

COPY ./src/ .
COPY --chown=node:node . .
USER node
EXPOSE 3000
CMD [ "npm", "run", "prod" ]