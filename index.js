var inquirer = require('inquirer');
var jest = require('jest');
var fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

menu = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the managers name",
            // Validation here
        },
        {
            type: "input",
            name: "id",
            message: "What is the team manager's id?",
            // Validation here
        },
        {
            type: "input",
            name: "email",
            message: "What is the team managers's email?",
            // Validation here
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the team manager's office number?",
            // Validation here
        },
    ]).then(({name, id, email, officeNumber}) => {
        const manager = new Manager(name, id, email, officeNumber);
        console.log(manager)
    })
}


menu();