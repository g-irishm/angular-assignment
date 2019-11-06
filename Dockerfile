# specify the node base image with your desired version node:<version>
FROM node:10

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json ./

USER node

RUN npm install -g @angular/cli

RUN npm install

COPY --chown=node:node . .

RUN ls -l

EXPOSE 4200

CMD [ "ng", "serve" ]
