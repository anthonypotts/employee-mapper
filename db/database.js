const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require('inquirer');
const promise = require('mysql2/promise');

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

function viewDepartments() {
	connection.query(
		'SELECT department.id AS ID, department.dept_name AS Department from department;',
		(err, res) => {
			// console.log('got here'); // use this if you run into an error and need to see if the application is making it to this point in the code
			if (err) throw err;
			console.log('\n** Departments **\n');
			console.table(res); // results contains rows returned by server
		}
	);
}

function viewRoles() {
    connection.query(
        'SELECT * FROM role',
        (err, res) => {
            if (err) throw err;
            console.table(res);
        }
    );
}

function viewEmployees() {
    connection.query(
        'SELECT * FROM employee',
        (err, res) => {
            if (err) throw err;
            console.table(res);
        }
    );
}

function addDepartment() {
    connection.query(
        'INSERT INTO department',
        (err, res) => {
            if (err) throw err;
            console.table(res);
        }
    );
}

function addRole() {
    connection.query(
        'INSERT INTO role',
        (err, res) => {
            if (err) throw err;
            console.table(res);
        }
    );
}

function addEmployee() {
    connection.query(
        (err, res) => {
            if (err) throw err;
            console.table(res);
        }
    );
}

function updateEmployeeRole() {
    connection.query(
        (err, res) => {
            if(err) throw err;
            console.table(res);
        }
    );
}

function quit() {
    connection.end();
    console.log('Thanks, see you again soon!')
}

module.exports = {
    viewDepartments: viewDepartments,
	viewRoles: viewRoles,
	viewEmployees: viewEmployees,
	addDepartment: addDepartment,
	addRole: addRole,
	addEmployee: addEmployee,
	updateEmployeeRole: updateEmployeeRole,
	quit: quit
}