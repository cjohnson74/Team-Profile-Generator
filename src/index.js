var inquirer = require('inquirer');
var jest = require('jest');
var fs = require("fs");
const questions = require("./questions")
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

menu = () => {
    inquirer.prompt(questions.managerQuestions).then(({name, id, email, officeNumber}) => {
        const manager = new Manager(name, id, email, officeNumber);
        console.log(manager)
    })
}

menu();