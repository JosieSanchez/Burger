
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id integer (10) auto_increment NOT NULL,
	burger_name varchar(255) NOT NULL,
    date TIMESTAMP default NOW() ON UPDATE NOW(), 
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);