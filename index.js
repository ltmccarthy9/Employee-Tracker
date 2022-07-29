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
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the name of the department?:',
                name: 'addDepartment'
            }
        ]).then((response) => {
            const depName = response.addDepartment;
            db.query(`INSERT INTO department (department_name) VALUES ("${depName}")`, function (err, result) {
            yesORno();
          });
        });
    }else if (response.options === addR){
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the name of the role?:',
                name: 'roleName'
            },
            {
                type: 'input',
                message: 'What is the salary?:',
                name: 'salary'
            },
            {
                type: 'input',
                message: 'What is the department id?:',
                name: 'depID'
            }
        ]).then((response) => {
            const roleName = response.roleName;
            const salary = parseInt(response.salary);
            const depID = parseInt(response.depID);
            db.query(`INSERT INTO job_role (title, salary, department_id) VALUES ("${roleName}", ${salary}, ${depID})`, function (err, result) {
                yesORno();
              });
        });
    }else if (response.options === addE){
        inquirer.prompt([
            {
                type: 'input',
                message: 'First name?:',
                name: 'fname'
            },
            {
                type: 'input',
                message: 'Last name?:',
                name: 'lname'
            },
            {
                type: 'input',
                message: 'Role id?:',
                name: 'role_id'
            },
            {
                type: 'input',
                message: 'ID of manager?:',
                name: 'managerID'
            }
        ]).then((response) => {
            const fname = response.fname;
            const lname = response.lname;
            const role_id = parseInt(response.role_id);
            const managerID = parseInt(response.managerID);
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${fname}", "${lname}", ${role_id}, ${managerID})`, function (err, result) {
                yesORno();
              });
        })
    }else {
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is the id of the employee you want to update?:',
                name: 'update_employee'
            },
            {
                type: 'input',
                message: 'What is the ID of their new role?:',
                name: 'new_role'
            }
        ]).then((response) => {
            const empID = parseInt(response.update_employee);
            const new_role = parseInt(response.new_role);
            db.query(`UPDATE employee SET role_id = ${new_role} WHERE id = ${empID}`, function (err, result) {
                yesORno();
              });
        })
    }
});
}

keepGoing();

console.log("all done");
