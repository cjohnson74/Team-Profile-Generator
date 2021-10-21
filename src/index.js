var inquirer = require("inquirer");
var jest = require("jest");
var fs = require("fs");
const {
  managerQuestions,
  engineerQuestions,
  internQuestions,
  pickerQuestion,
} = require("./questions");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const cardHTML = require("../lib/cardHTML");

menu = () => {
  createManager = async () => {
    const { name, id, email, officeNumber } = await inquirer.prompt(
      managerQuestions
    );
    console.log({ name, id, email, officeNumber });
    const manager = new Manager(name, id, email, officeNumber);
    console.log(manager);
    const card = cardHTML.managerCardHTML(manager);
    console.log(card);
  };
  createManager();
};

menuRolePicker = () => {
  pickNext = async () => {
    const pick = await inquirer.prompt(pickerQuestion);
    console.log(pick);
    switch (pick) {
      case "Engineer":
        menuIntern();
        break;
      case "Intern":
        menuEngineer();
        break;
      case "Finish building my team":
        renderHTML();
        break;
    }
  };
};

menuEngineer = () => {
  createEngineer = async () => {
    const { name, id, email, github } = await inquirer.prompt(
      engineerQuestions
    );
    console.log({ name, id, email, github });
    const engineer = new Engineer(name, id, email, github);
    console.log(engineer);
  };
  createEngineer();
  menuRolePicker();
};

menuIntern = () => {
  createIntern = async () => {
    const { name, id, email, school } = await inquirer.prompt(internQuestions);
    console.log({ name, id, email, school });
    const intern = new Intern(name, id, email, school);
    console.log(intern);
  };
  createIntern();
  menuRolePicker();
};

renderHTML = () => {
  fs.writeF;
};

menu();
