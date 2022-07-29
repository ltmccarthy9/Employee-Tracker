INSERT INTO department (id, department_name)
VALUES
    (1, "HR"),
    (2, "Marketing"),
    (3, "Finance"),
    (4, "IT"),
    (5, "Operations management");

INSERT INTO job_role (id, title, salary, department_id)
VALUES
    (1, "Recruiter", 45000, 1),
    (2, "Director of recruiting", 80000, 1),
    (3, "HR analyst", 60000, 1),
    (4, "Marketing associate", 60000, 2),
    (5, "Digital marketing manager", 85000, 2),
    (6, "Marketing coordinator", 70000, 2),
    (7, "Director of finance", 150000, 3),
    (8, "Financial analyst", 100000, 3),
    (9, "Accountant", 90000, 3),
    (10, "Database administrator", 105000, 4),
    (11, "Product support specialist", 55000, 4),
    (12, "Systems analyst", 100000, 4),
    (13, "Operations manager", 93000, 5),
    (14, "Business analyst", 90000, 5),
    (15, "Operations manager", 92000, 5),
    (16, "Director of operations", 140000, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES 
    (001, "John", "Smith", 8, 013),
    (002, "Sarah", "Johnson", 3, 013),
    (003, "Daniel", "Plainview", 16, NULL),
    (004, "Jack", "Wright", 6, 013),
    (005, "Morgan", "Floody", 3, 013),
    (006, "Mike", "McCarthy", 12, 013),
    (013, "Matt", "Watson", 15, 003);
