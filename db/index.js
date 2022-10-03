 const connection = require('./connect')

 class Lib{
    constructor(connection){
        this.connection = connection
    }

    getAllDepts(){
        return this.connection.promise().query('SELECT * FROM department')
    }

    getAllRoles(){
        // title, id, name department, salary
        return this.connection.promise().query('SELECT role.title, role.id, department.name, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;')
    } 
    
    getAllEmployees(){
        // first name, last name, role title, departmentname, salary, manager full name
        return this.connection.promise().query('SELECT employee.first_name, employee.last_name, role.title, department.name, role.salary, CONCAT(manager.first_name, " " , manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee AS manager ON manager.id = employee.manager_id;')
    }

    addEmployee(employee){
        return this.connection.promise().query('INSERT INTO employee SET ?', employee)
    }

    addRole(role){
        return this.connection.promise().query('INSERT INTO role SET ?', role)
    }
    addDepartment(dept){
        return this.connection.promise().query('INSERT INTO department SET ?', dept)
    }
    updateRole(emp, role){
        return this.connection.promise().query('UPDATE employee SET role_id = ? WHERE id = ?', [role, emp])
    }
 }

 module.exports = new Lib(connection)