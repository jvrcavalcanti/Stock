FROM php:7.4-apache

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

WORKDIR /var/www/html/

COPY composer.* ./

RUN composer install

COPY . .