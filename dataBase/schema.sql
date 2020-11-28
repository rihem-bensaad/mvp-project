DROP DATABASE IF EXISTS rihemnews;
CREATE DATABASE rihemnews;
USE rihemnews;

CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    firstName varchar(255) NOT NULL,
    lastName varchar(255) NOT NULL,
    PRIMARY KEY (ID)
    
);

CREATE TABLE news (
    id int NOT NULL AUTO_INCREMENT,
    text varchar(255) NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE todo (
    id int NOT NULL AUTO_INCREMENT,
    text varchar(255) NOT NULL,
    primary key (ID)
);

