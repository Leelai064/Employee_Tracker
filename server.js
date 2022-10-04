//import mysql, inquirer

const inquirer = require('inquirer');
const { log } = require('util');
require('console.table');

const db = require('./db')


function employeeRendering() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'Welcome to our employee database! What would you like to do?',
            choices: [
                'View all employees',
                'View all departments',
                'View all roles',
                'Add an employee',
                'Add a department',
                'Add a role',
                'Update employee role',
                'Delete an employee',
                'EXIT'
            ]
        }).then(function (userChoices) {
            switch (userChoices.action) {
                case 'View all employees':
                    employees();
                    break;
                case 'View all departments':
                    departments();
                    break;
                case 'View all roles':
                    roles();
                    break;
                case 'Add an employee':
                    employeeAdditon();
                    break;
                case 'Add a department':
                    departmentAddition();
                    break;
                case 'Add a role':
                    roleAdditon();
                    break;
                case 'Update employee role':
                    employeeUpdating();
                    break;
                default:
                    exit();
                    break;
            }
        })
};

//connect to database
function employees() {
    db.getAllEmployees().then(([data]) => {
        console.table(data)
    }).then(() => employeeRendering())
}
function roles() {
    db.getAllRoles().then(([data]) => {
        console.table(data)
    }).then(() => employeeRendering())
}

function departments() {
    db.getAllDepts().then(([data]) => {
        console.table(data)
    }).then(() => employeeRendering())
};

//Adding Employees, Roles, and Departments
//create a function
function employeeAdditon() {
    db.getAllRoles().then(([roles]) => {
        const roleList = roles.map(({ title, id }) => ({
            name: title,
            value: id
        }))

        db.getAllEmployees().then(([employees]) => {
            const employeeList = employees.map(({ first_name, last_name, id }) => ({
                name: `${first_name} ${last_name}`,
                value: id
            }));

            inquirer.prompt([
                {
                    name: 'first_name',
                    type: 'input',
                    message: "What is the employee's fist name? ",
                },
                {
                    name: 'last_name',
                    type: 'input',
                    message: "What is the employee's last name? "
                },
                {
                    name: 'manager_id',
                    type: 'list',
                    message: "What is the employee's manager's ID? ",
                    choices: employeeList
                },
                {
                    name: 'role_id',
                    type: 'list',
                    message: "Select employee's role? ",
                    choices: roleList
                }
            ]).then((userChoices => {
                db.addEmployee(userChoices).then(() => employeeRendering())

            })

            )

        })
    })


}

function roleAdditon() {
    db.getAllDepts().then(([depts]) => {
        const departmentList = depts.map(({ id, name }) => ({
            name: name,
            value: id
        }))

        inquirer.prompt(
            [
                {
                    type: 'input',
                    name: 'title',
                    message: 'What role would you like to add?'
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'What is the salary for this role?'
                },
                {
                    type: 'list',
                    name: 'department_id',
                    message: 'What is the department code?',
                    choices: departmentList
                }])
            .then((userChoices => {
                db.addRole(userChoices).then(() => employeeRendering())
            }))
    })
}

function departmentAddition() {
    return inquirer
        .prompt([{
            type: 'input',
            name: 'name',
            message: 'Please state the department name',
            validate: function (name) {
                if (!name) {
                    console.log(`Hi ${name}!`)
                    return false;
                }
                return true;
            }
        }])
        .then((userChoices) => {
            db.addDepartment(userChoices).then(() => employeeRendering())
        })
}
// employee update
function employeeUpdating() {

    db.getAllRoles().then(([roles]) => {
        const roleList = roles.map(({ title, id }) => ({
            name: title,
            value: id
        }))

        db.getAllEmployees().then(([employees]) => {
            const employeeList = employees.map(({ first_name, last_name, id }) => ({
                name: `${first_name} ${last_name}`,
                value: id
            }));
       

            inquirer.prompt([{
                type: 'list',
                name: 'employee',
                message: 'Please state the specific employee you want to update!',
                choices: employeeList
            }, {
                type: 'list',
                name: 'newRole',
                message: 'Please list this employees role!?',
                choices: roleList
            }])
                .then((userChoices) => {
                    
                    db.updateRole(userChoices.employee, userChoices.newRole).then(() => employeeRendering())
                })


        })
    })



}
function exit() {
    console.log("Employee Tracker has been deployed and you have opted to exit!");
    process.exit()
}



employeeRendering()


