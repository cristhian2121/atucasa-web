# Build app
FROM node:12.18-alpine as builder

COPY package.json package-lock.json ./
RUN npm install && mkdir /atucasa-web
WORKDIR /atucasa-web
COPY . .
RUN npm run build

FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
## Remove default nginx index page
#RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /atucasa-web/dist /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]