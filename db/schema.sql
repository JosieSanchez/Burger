
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	`id` integer (10) auto_increment NOT NULL,
	`burger_name` varchar(45) NOT NULL,
    `devoured` BOOLEAN DEFAULT false,
	`date` TIMESTAMP,
	PRIMARY KEY (id)
);