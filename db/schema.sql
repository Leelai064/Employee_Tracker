-- Creating an employee database
DROP DATABASE IF EXISTS employe_db;
CREATE DATABASE employee_db;
USE employee_db;

-- Create a role, employee/,manager, and department insertion for the user
CREATE TABLE roles(
    id INTO AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    deparment_id INT,
    salary DECIMAL(8,2),
    FOREIGN KEY(department_id) REFERENCES departments(id)
);

CREATE TABLE roles(
    id INTO AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    deparment_id INT,
    salary DECIMAL(8,2),
    FOREIGN KEY(department_id) REFERENCES departments(id)
);

CREATE TABLE employees(
    id INTO AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL,
    manager_id INT,
    roles_id INT,
    FOREIGN KEY(manager_id) REFERENCES employee(id),
    FOREIGN KEY(roles_id) REFERENCES roles(id)
);