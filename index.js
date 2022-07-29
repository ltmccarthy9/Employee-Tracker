// require packages
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
//Connect to our mySQL database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'company_db'
    },
    console.log('Connected to the database.')
);


const viewAD = "View all departments";
const addD = "Add a department";
const addR = "Add a role";
const addE = "Add an employee";
const updateRole = "Update an employee role";


inquirer.prompt([
    {
        type: 'list',
        choices: [viewAD, addD, addR, addE, updateRole],
        name: 'options'
    }
]).then((response) => {
    db.query("SELECT * FROM department", function (err, result) {
        if (err) throw err;
        console.table(result);
      });
    
});

console.log("all done");
