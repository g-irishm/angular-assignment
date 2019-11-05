# specify the node base image with your desired version node:<version>
FROM node:10

RUN npm install
RUN npm install -g @angular/cli
RUN ng serve

# replace this with your application's default port
EXPOSE 4200
