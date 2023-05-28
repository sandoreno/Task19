FROM node:16.15.0 AS build
WORKDIR /app

RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install --force
COPY . .
RUN ng build 

FROM nginx:alpine
COPY ./conf/default.conf /etc/nginx/default.conf
COPY --from=build /app/dist/task19-ui /usr/share/nginx/html