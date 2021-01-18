const inquirer = require('inquirer');
const database = require('./db/database');

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
                database.viewDepartments();
                break;
            case "VIEW_ROLES":
                database.viewRoles();
                break;
            case "VIEW_EMPLOYEES":
                database.viewEmployees();
                break;
            case "ADD_DEPARTMENT":
                database.addDepartment();
                break;
            case "ADD_ROLE":
                database.addRole();
                break;
            case "ADD_EMPLOYEE":
                database.addEmployee();
                break;
            case "UPDATE_EMPLOYEE_ROLE":
                database.updateEmployeeRole();
                break;
            case "QUIT":
                database.quit();
                break;
        }
    })
}

promptUser();