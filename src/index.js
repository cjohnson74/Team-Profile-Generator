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
    const { name, id, email, officeNumber } = await inquirer.prompt(managerQuestions);
    console.log({ name, id, email, officeNumber });
    const manager = new Manager(name, id, email, officeNumber);
    console.log(manager);
    var card = cardHTML.managerCardHTML(manager);
    console.log(card);
    fs.writeFile('../dist/index.html', card, (err) => 
      err ? console.log(err) : console.log('Success!'));
    menuRolePicker();
  };
  createManager();
};

menuRolePicker = () => {
  pickNext = async () => {
    const pick = await inquirer.prompt(pickerQuestion);
    console.log(pick);
    switch (pick) {
      case "Engineer":
        menuEngineer();
        break;
      case "Intern":
        menuIntern();
        break;
      case "Finish building my team":
        renderHTML();
        break;
    }
  };
  pickNext();
};

menuEngineer = () => {
  createEngineer = async () => {
    const { name, id, email, github } = await inquirer.prompt(engineerQuestions);
    console.log({ name, id, email, github });
    const engineer = new Engineer(name, id, email, github);
    console.log(engineer);
    var card = cardHTML.engineerCardHTML(engineer);
    console.log(card);
    fs.readFile('index.html', 'utf8', (err, data) =>
      err ? console.error(err) : card = data + card);
    fs.writeFile('index.html', card, (err) => 
      err ? console.log(err) : console.log('Success!'));
    menuRolePicker();
  };
  createEngineer();
};

menuIntern = () => {
  createIntern = async () => {
    const { name, id, email, school } = await inquirer.prompt(internQuestions);
    console.log({ name, id, email, school });
    const intern = new Intern(name, id, email, school);
    console.log(intern);
    var card = cardHTML.internCardHTML(intern);
    console.log(card);
    fs.readFile('index.html', 'utf8', (err, data) =>
      err ? console.error(err) : card = data + card);
    fs.writeFile('index.html', card, (err) => 
      err ? console.log(err) : console.log('Success!'));
    menuRolePicker();
  };
  createIntern();
};

renderHTML = () => {
  var card = cardHTML.endHTML;
    console.log(card);
    fs.readFile('index.html', 'utf8', (err, data) =>
      err ? console.error(err) : card = data + card);
    fs.writeFile('index.html', card, (err) => 
      err ? console.log(err) : console.log('Success!'));
};

menu();
