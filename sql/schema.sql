DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

DROP TABLE IF EXISTS department;
CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(30)
);

DROP TABLE IF EXISTS job_role;
CREATE TABLE job_role (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    title VARCHAR(50),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT REFERENCES employee(id),
    FOREIGN KEY (role_id)
    REFERENCES job_role(id)
    ON DELETE SET NULL
);
