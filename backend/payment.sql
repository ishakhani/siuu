CREATE DATABASE backend

CREATE TABLE pay (
    nom VARCHAR(100) NOT NULL,
    phone_number int NOT NULL,
    adresse VARCHAR(255) NOT NULL,
    card_number int NOT NULL
);

CREATE TABLE product(
    sneaker VARCHAR(100) NOT NULL,
    price int NOT NULL,
    color VARCHAR(50) NOT NULL,
    size INT NOT NULL
)