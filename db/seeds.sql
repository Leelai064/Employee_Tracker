INSERT INTO departments(department_name)
VALUES
('IT'),
('HR'),
('Finance & Accounting'),
('Operations Management'),
('Sales & Marketing'),
('Engineering & Design');

INSERT INTO role (title,salary,deparment_id)
VALUES
('Software Developer', 120000,1), 1
('Full Stack Developer', 100000,1),2
('HR Representative', 80000, 2), 3
('Financial Analyst',100000, 3), 4
('Coordinator', 130000, 4), 5
('Sales Manager', 100000, 4), 6
('Project Manager', 130000, 4), 7
('CAD Drafter', 30000, 6), 8
('Design Engineer', 70000, 6), 9
('Project Engineer', 150000, 4); 10

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

UPDATE `employe_db`.`employees` SET `manager_id` = '1' WHERE(`id` > "4");