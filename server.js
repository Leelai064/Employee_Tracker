//import mysql, inquirer

const mysql2 = require('mysql');
const inquirer = require('inquirer');
 require('console.table');
const connection = mysql2.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "rootroot", //Enter your MySQL password here.
    // use gitignore on this. 
    database: "employeeTrackDB"
});


//throw error

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);
    console.clear();
    console.log("   OOPS THE DATABASE SEEMED TO HAVE DISCONNECTED!!! ");
    employeerendering();
});


function employeerendering() {
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
                case 'Delete an employee':
                    deleteEmployee();
                    break;
                case 'EXIT':
                    exit();
                    break;
                default:
                    break;
            }
        })
};

//connect to database
function employees() {
    db.query('SELECT * FROM employee', function (err, res) {
        if (err) throw err
        console.table(res)
        choices();
    });
}
function roles() {
    db.query('Select * FROM role', function (err, res) {
        if (err) throw err;
        inquirer
        console.table(res)
        userChoices();
    })
}

function departments() {
    db.query('SELECT * FROM department', function (err, res) {
        if (err) throw err;
        console.table("Deparments", res)
        runEmployeeTrackerdb();
    })
};

//Adding Employees, Roles, and Departments
//create a function
function employeeAdditon() {
    return inquirer
        .prompt([
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
                type: 'input',
                message: "What is the employee's manager's ID? "
            },
            {
                name: 'role',
                type: 'list',
                choices: function () {
                    var roleArray = [];
                    for (let i = 0; i < res.length; i++) {
                        roleArray.push(res[i].title);
                    }
                    return roleArray;
                },
                message: "Select employee's role? "
            }
        ]).then(function (userChoices) {
            let role_id;
            for (let a = 0; a < res.length; a++) {
                if (res[a].title == userChoices.role) {
                    role_id = res[a].id;
                    console.log(role_id)
                }
            }
            connection.query(
                'INSERT INTO employee SET ?',
                {
                    first_name: userchoices.first_name,
                    last_name: userchoices.last_name,
                    manager_id: userchoices.manager_id,
                    role_id: role_id,
                },
                function (err) {
                    if (err) throw err;
                    console.log('Employee successfuly added!');
                    runEmployeeTrackerdb();
                })
        })
}

function roleAdditon(){
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'addRole',
                message: 'What role would you like to add?'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary for this role?'
            },
            {
                type: 'input',
                name: 'departid',
                message: 'What is the department code?'
            }])
            .then((userChoices => {
                var sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
                db.query(sql, [userChoices.roleAdditon, userChoices.salary, userChoices.departid], (err, res) => {
                    if (err) throw err;
                    console.log('Added new role');
                })
                userChoices();
            }))
}

function departmentAddition(){
    return inquirer
    .prompt([{
        type: 'input',
        name: 'name',
        message: 'Please state the department name',
        validate: function(name) {
            if (!name) {
                console.log(`Hi ${name}!` )
                return false;
            }
            return true;
        }
    }])  
    .then((userChoices) => {
        const department = new department(userChoices.name);
        newDept(department);
        console.log(`You have entered ${department}`);
        departments = getDept();
        deptArr = deptArrFill();
        return userChoices();
    })  
}
// employee update
function employeeUpdating(){
    return inquirer
    .prompt([{
        type: 'list',
        name: 'employee',
        message: 'Please state the specific employee you want to update!',
        choices: eArray
    },{
        type: 'list',
        name: 'newRole',
        message: 'Please list this employees role!?',
        choices: roleArray
    }])
    .then((userChoices) => {
        updateRole(userChoices);
        console.log(`${role} has been entered!`);
        employees = getEmployees();
        employeeArr = employeeArrFill();
        return userChoices();
    })    
}
function exit() {
    console.log("Employee Tracker has been deployed and you have opted to exit!");
    connection.end();
}





