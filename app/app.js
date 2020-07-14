var inquirer = require("inquirer");
var connection = require('./connection');
const viewOpt = [
  "View Departments",
  "View Roles",
  "View Employees",
  "Update Employee",
  "exit"
];

const employeeOpt = [
  "Juice WRLD",
  "Kendrick Lamar",
  "Ken Kankei",
  "Constantine Valentine",
  "Tom Cruise",
  "Kobe Bryant",
  "exit"
];

const updateOpt = [
  "First Name",
  "Last Name",
  "Role",
  "exit"
];

runSearch();

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: viewOptions
    })
    .then(function (answer) {
      switch (answer.action) {
        case viewOpt[0]:
          departmentView();
          break;

        case viewOpt[1]:
          roleView();
          break;

        case viewOpt[2]:
          employeeView();
          break;

        case viewOpt[3]:
          updateEmployee();

        case updateOpt[4]:
          connection.end();
          break
      }
    })
}



function departmentView() {
  var sqlStr = "SELECT * FROM department";
  connection.query(sqlStr, function (err, result) {
    if (err) throw err;

    console.table(result)
    runSearch();
  })
}

function employeeView() {
  var sqlStr = "SELECT first_name, last_name, title, salary FROM employee ";
  sqlStr += "LEFT JOIN role ";
  sqlStr += "ON employee.role_id = role.id"
  connection.query(sqlStr, function (err, result) {
    if (err) throw err;

    console.table(result)
    runSearch();
  })
}

function roleView() {
  var sqlStr = "SELECT * FROM role";
  connection.query(sqlStr, function (err, result) {
    if (err) throw err;

    console.table(result)
    runSearch();
  })
}


const updateEmployee = () => {

  function runUpdateSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "Which employee do you want to update?",
        choices: employeeOpt
      })

  }
  runUpdateSearch();
}