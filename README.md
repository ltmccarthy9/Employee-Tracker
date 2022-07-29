# Employee-Tracker

## Description
Employee tracker is a command line application that connects to your mySQL
database and allows you to view and update company information.  This information
includes tables on departments, roles, and employees.  This application allows you
to dynamically update the database and view your changes as you make them. 

## Technologies Used
 * Nodejs
 * Javascript
 * mySQL
 * Inquirer/mysql2/console.table 
 * Visual Studio Code
 * Git
 * Gitbash
 * command line

 ## Video Demonstration

 https://drive.google.com/file/d/1b-xH05sRHKrcb6bj7eOAcYcYmJWiTgFq/view < - - - - - - - 
 ^
 ^
 ^
 ^
 ^
 ^
 ## Uses
 For organizing company data like departments, employees, and roles.

 ## Code

 ```Javascript
 if(response.options === viewAD){
        db.query("SELECT * FROM department", function (err, result) {
            if (err) throw err;
        console.table(result);
        yesORno();
      });
 ```
 Here we take a response to an inquirer prompt and display all departments
 from the department table.

 ```Javascript
 ]).then((response) => {
            const depName = response.addDepartment;
            db.query(`INSERT INTO department (department_name) VALUES ("${depName}")`, function (err, result) {
            yesORno();
          });
        });
 ```
We take the response from inquirer and use it to create a new department.

 ## License
 MIT License

Copyright (c) 2022 Liam McCarthy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
