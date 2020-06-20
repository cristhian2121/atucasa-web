# Build app
FROM node:13.12.0-alpine as builder

WORKDIR /atucasa-web
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
RUN ls

FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
## Remove default nginx index page
#RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /atucasa-web/dist /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]

