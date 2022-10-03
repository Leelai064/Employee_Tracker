-- Creating an employee database
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

-- Create a role, employee/,manager, and department insertion for the user
CREATE TABLE department(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25)
);

CREATE TABLE role(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(8,2),
    department_id INT,
    FOREIGN KEY(department_id) REFERENCES department(id)
);

CREATE TABLE employee(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    FOREIGN KEY(role_id) REFERENCES role(id),
    manager_id INT,
    FOREIGN KEY(manager_id) REFERENCES employee(id)
);