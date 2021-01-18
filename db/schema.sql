DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

CREATE DATABASE employees;
USE employees;

CREATE TABLE department (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
);

CREATE TABLE role (
    id INTEGER PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    department_id INTEGER NOT NULL,
    salary INTEGER NOT NULL
);

CREATE TABLE employee (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    salary INTEGER NOT NULL
);