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
    
}