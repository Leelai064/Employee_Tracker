INSERT INTO department(name)
VALUES
('IT'),
('HR'),
('Finance & Accounting'),
('Operations Management'),
('Sales & Marketing'),
('Engineering & Design');

INSERT INTO role (title,salary,department_id)
VALUES
('Software Developer', 120000,1), 
('Full Stack Developer', 100000,1),
('HR Representative', 80000, 2), 
('Financial Analyst',100000, 3), 
('Coordinator', 130000, 4), 
('Project Manager', 130000, 4), 
('Project Engineer', 150000, 4),
('Sales Manager', 100000, 5), 
('CAD Drafter', 30000, 6), 
('Design Engineer', 70000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Light', 6, NULL),
('Leelai', 'Hayslett', 1, NULL),
('Bibiana', 'Alvarez',3, NULL),
('Light', 'Yagami', 4, NULL),
('David','Brown', 5, 1),
('Toph', 'Beifong', 8, NULL),
('Jon','Snow', 7, NULL),
('Levi', 'Ackerman', 8, NULL),
('Bennett','Koenitzer', 9, 1),
('Eren', 'Jaegar', 10, 7);
