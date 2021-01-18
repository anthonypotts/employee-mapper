const inquirer = require('inquirer');
// const database = require('./db/database');
const mysql = require('mysql2');
const cTable = require('console.table');
const promise = require('mysql2/promise');
// require('dotenv').config();

// connect to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ShallowBrown@9',
    database: 'employees'
});

connection.connect(err => {
    if (err) throw err;
    promptUser();
});

const promptUser = () => {
    console.log(`
    =====================
    |                   |
    |  Employee Mapper  |
    |                   |
    =====================
    `)

    return inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: [
                {
                    name: 'View all departments',
                    value: 'VIEW_DEPARTMENTS'
                },
                {
                    name: 'View all roles',
                    value: 'VIEW_ROLES'
                },
                {
                    name: 'View all employees',
                    value: 'VIEW_EMPLOYEES'
                },
                {
                    name: 'Add a department',
                    value: 'ADD_DEPARTMENT'
                },
                {
                    name: 'Add a role',
                    value: "ADD_ROLE"
                },
                {
                    name: 'Add an employee',
                    value: 'ADD_EMPLOYEE'
                },
                {
                    name: 'Update employee role',
                    value: 'UPDATE_EMPLOYEE_ROLE'
                },
                {
                    name: 'Quit',
                    value: 'QUIT'
                }
            ]
        }
    ]).then(res => {
        let choice = res.choice;
        switch (choice) {
            case "VIEW_DEPARTMENTS":
                viewDepartments();
                break;
            case "VIEW_ROLES":
                viewRoles();
                break;
            case "VIEW_EMPLOYEES":
                viewEmployees();
                break;
            case "ADD_DEPARTMENT":
                addDepartment();
                break;
            case "ADD_ROLE":
                addRole();
                break;
            case "ADD_EMPLOYEE":
                addEmployee();
                break;
            case "UPDATE_EMPLOYEE_ROLE":
                updateEmployeeRole();
                break;
            case "QUIT":
                quit();
                break;
        }
    })
}



viewDepartments = () => {
    connection.query('SELECT * FROM department', function(err, res) {
        if (err) throw err;
        console.table(res);
    });
};

viewRoles = () => {
    connection.query(
        'SELECT * FROM role',
        (err, res) => {
            if (err) throw err;
            console.table(res);
        }
    );
}

viewEmployees = () => {
    connection.query(
        'SELECT * FROM employee',
        (err, res) => {
            if (err) throw err;
            console.table(res);
        }
    );
}

addDepartment = () => {
    // connection.query(
    //     'INSERT INTO department',
    //     (err, res) => {
    //         if (err) throw err;
    //         console.table(res);
    //     }
    // );
}

addRole = () => {
    // connection.query(
    //     'INSERT INTO role',
    //     (err, res) => {
    //         if (err) throw err;
    //         console.table(res);
    //     }
    // );
}

addEmployee = ()=> {
    // connection.query(
    //     (err, res) => {
    //         if (err) throw err;
    //         console.table(res);
    //     }
    // );
}

updateEmployeeRole = () => {
    // connection.query(
    //     (err, res) => {
    //         if(err) throw err;
    //         console.table(res);
    //     }
    // );
}

quit = () => {
    connection.end();
    console.log('Thanks, see you again soon!')
}