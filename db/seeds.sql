USE employees;

INSERT INTO department (dept_name)
VALUES
    ('Carpentry'),
    ('Marketing'),
    ('Accounting'),
    ('Engagement');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Carpenter', 50000, 1),
    ('Painter', 45000, 1),
    ('Marketer', 35000, 2),
    ('Accountant', 40000, 3),
    ('Events Planner', 25000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES
    ('Jack', 'Bauer', 1),
    ('Silvio', 'Cappicolo', 2),
    ('Janet', 'Jackson', 3),
    ('Jerry', 'Garcia', 4),
    ('Charlie', 'Puth', 5);
