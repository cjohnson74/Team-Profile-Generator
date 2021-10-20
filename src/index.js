var inquirer = require("inquirer");
var jest = require("jest");
var fs = require("fs");
const {
  managerQuestions,
  engineerQuestions,
  internQuestions,
} = require("./questions");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

menu = () => {
  createManager = async () => {
    const {name, id, email, officeNumber} = await inquirer.prompt(managerQuestions);
    console.log({name, id, email, officeNumber});
    const manager = new Manager(name, id, email, officeNumber);
    console.log(manager);
  };
  createManager();
};

menu();
