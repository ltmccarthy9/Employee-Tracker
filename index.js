// require packages
const inquirer = require('inquirer');
const mysql = require('mysql2');

const viewAD = "View all departments";
const addD = "Add a department";
const addR = "Add a role";
const addE = "Add an employee";
const updateRole = "Update an employee role";
//Connect to our mySQL database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: ''
    },
    console.log('Connected to the database.')
);

inquirer.prompt([
    {
        type: 'list',
        choices: [viewAD, addD, addR, addE, updateRole],
        name: 'options'
    }
]).then((response) => {
    console.log("You chose " + response.options + "!");
    
});

console.log("all done");
