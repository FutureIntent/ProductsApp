FROM composer:latest

# Script for simplifying php extension installation
ADD --chmod=0755 https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
RUN install-php-extensions pdo_mysql

# Php config
WORKDIR /usr/local/etc/php/conf.d
COPY ./php/php-config.ini .

# Project's directory
WORKDIR /app/projects/laravelApp
COPY . .

RUN composer global require laravel/installer
EXPOSE 8000