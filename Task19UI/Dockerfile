FROM node:16.15.0 as build
WORKDIR /app

RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install --force
COPY . .
RUN npm run build

FROM nginx as runtime
COPY --from=build /app/dist/task19-ui /usr/share/nginx/html
COPY ["./conf/default.conf","/etc/nginx/conf.d/default.conf"]