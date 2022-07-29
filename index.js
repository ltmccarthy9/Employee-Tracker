// require packages
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const { urlToHttpOptions } = require('url');
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
const viewR = "View all roles";
const viewE = "View all employees"
const addD = "Add a department";
const addR = "Add a role";
const addE = "Add an employee";
const updateRole = "Update an employee role";

//Function for continuing or exiting program
function yesORno(){
    inquirer.prompt([
        {
            type: 'list',
            message: 'Continue or Exit?',
            choices: ["Continue", "Exit"],
            name: 'continue'
        }
    ]).then((response) => {
        if(response.continue === "Continue"){
            keepGoing();
        }else {
            console.log("goodbye");
            return null;
        }
    })
}

// Main function
function keepGoing() {
inquirer.prompt([
    {
        type: 'list',
        message: 'Choose an option:',
        choices: [viewAD, viewR, viewE, addD, addR, addE, updateRole],
        name: 'options'
    },
]).then((response) => {
    if(response.options === viewAD){
        db.query("SELECT * FROM department", function (err, result) {
            if (err) throw err;
        console.table(result);
        yesORno();
      });
    }else if (response.options === viewR){
        db.query("SELECT * FROM job_role", function (err, result) {
            if (err) throw err;
        console.table(result);
        yesORno();
      });
    }else if (response.options === viewE) {
        db.query("SELECT * FROM employee", function (err, result) {
            if (err) throw err;
        console.table(result);
        yesORno();
      });
    }else if (response.options === addD) {
        
    }
});
}

keepGoing();
console.log("all done");
