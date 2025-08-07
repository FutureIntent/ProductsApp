FROM nginx:latest

WORKDIR /etc/nginx
COPY ./modules/nginx.conf ./nginx.conf
COPY ./modules/conf.d .

WORKDIR /var/log/nginx
COPY ./modules/logs/error.log .
COPY ./modules/logs/access.log .

WORKDIR /usr/share/nginx/data
COPY ./modules/data .

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]