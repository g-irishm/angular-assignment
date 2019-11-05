# specify the node base image with your desired version node:<version>
FROM node:10

WORKDIR /workspace
COPY package.json .
RUN pwd && ls -l
RUN npm install && npm install -g @angular/cli
COPY . ./

# replace this with your application's default port
EXPOSE 4200
