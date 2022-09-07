INSERT INTO departments(department_name)
VALUES
('IT'),
('HR'),
('Finance & Accounting'),
('Operations Management'),
('Sales & Marketing'),
('Engineering & Design');

INSERT INTO roles (title,salary,department_id)
VALUES
('Software Developer', 120000,1), 
('Full Stack Developer', 100000,1),
('HR Representative', 80000, 2), 
('Financial Analyst',100000, 3), 
('Coordinator', 130000, 4), 
('Sales Manager', 100000, 4), 
('Project Manager', 130000, 4), 
('CAD Drafter', 30000, 6), 
('Design Engineer', 70000, 6), 
('Project Engineer', 150000, 4); 

INSERT INTO employee (first_name, last_name, roles_id)
VALUES
('John', 'Light', 1),
('Leelai', 'Hayslett', 2),
('Bibiana', 'Alvarez',3),
('Light', 'Yagami', 4),
('David','Brown', 5),
('Toph', 'Beifong', 6),
('Jon','Snow,', 7),
('Levi', 'Ackerman', 8),
('Bennett','Koenitzer', 9),
('Eren', 'Jaegar', 10);

UPDATE `employees` SET manager_id = '1' WHERE id > "4";