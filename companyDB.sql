DROP DATABASE IF EXISTS mycompanyDB;
CREATE DATABASE mycompanyDB;
USE mycompanyDB;

CREATE TABLE department
(
  id INT NOT NULL
  AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR
  (30) NOT NULL
);