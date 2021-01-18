const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'snowbrobile11',
    database: 'employees'
});
const cTable = require('console.table');
const inquirer = require('inquirer');

function viewAllDepartments() {
    connection.query(
        'SELECT * FROM department',
        (err, res) => {
            if (err) throw err;
            console.table(res);
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
    )
}