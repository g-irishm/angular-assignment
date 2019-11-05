# specify the node base image with your desired version node:<version>
FROM node:10
WORKDIR /workspace
COPY /workspace ./
RUN npm install
RUN npm install -g @angular/cli && ng serve
RUN pwd && ls -l


# replace this with your application's default port
EXPOSE 4200
