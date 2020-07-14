-- nmp install

-- npm init

-- getting my sql packages 

-- Use InquirerJs NPM package to interact with the user via the command-line.

--Use console.table to print MySQL rows to the console. 

Note(There is a built-in version of console.table, but the NPM package formats the data a little better for our purposes.)

--organize files for functions and classes

--app running successfully on its performance

department:


id - INT PRIMARY KEY

name - VARCHAR(30) to hold department name



role:


id - INT PRIMARY KEY

title -  VARCHAR(30) to hold role title

salary -  DECIMAL to hold role salary

department_id -  INT to hold reference to department role belongs to



employee:


id - INT PRIMARY KEY

first_name - VARCHAR(30) to hold employee first name

last_name - VARCHAR(30) to hold employee last name

role_id - INT to hold reference to role employee has

manager_id - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager



Build a command-line application that at a minimum allows the user to:


Add departments, roles, employees


View departments, roles, employees


Update employee roles


