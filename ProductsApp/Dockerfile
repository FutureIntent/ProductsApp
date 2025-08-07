FROM composer:latest

# Script for simplifying php extension installation
ADD --chmod=0755 https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
RUN install-php-extensions pdo_mysql

# Project's directory
WORKDIR /app/projects/ProductsApp

COPY . .

RUN composer global require laravel/installer

RUN apk add nodejs npm

EXPOSE 8000 5173