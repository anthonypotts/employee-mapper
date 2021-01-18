INSERT INTO department (name)
VALUES
    (1, 'Carpentry'),
    (2, 'Marketing'),
    (3, 'Accounting'),
    (4, 'Engagement');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Carpenter', 50000, 1),
    ('Painter', 45000, 1),
    ('Marketer', 35000, 2),
    ('Accountant', 40000, 3),
    ('Events Planner', 25000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Jack', 'Bauer', 1, NULL),
    ('Silvio', 'Cappicolo', 2, NULL),
    ('Janet', 'Jackson', 3, NULL),
    ('Jerry', 'Garcia', 4, NULL),
    ('Charlie', 'Puth', 5, NULL);
