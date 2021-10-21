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
var renderedHTML = ``;

menu = () => {
  createManager = async () => {
    const { name, id, email, officeNumber } = await inquirer.prompt(managerQuestions);
    // console.log({ name, id, email, officeNumber });
    const manager = new Manager(name, id, email, officeNumber);
    // console.log(manager);
    renderedHTML = cardHTML.managerCardHTML(manager);
    // console.log(renderedHTML);
    pickNext();
  };
  pickNext = async () => {
    const picker = await inquirer.prompt(pickerQuestion);
    // console.log(picker.pick);
    switch (picker.pick) {
      case "Engineer":
        createEngineer();
        break;
      case "Intern":
        createIntern();
        break;
      case "Finish building my team":
        renderHTML();
        break;
    }
  };
  createEngineer = async () => {
    const { name, id, email, github } = await inquirer.prompt(engineerQuestions);
    // console.log({ name, id, email, github });
    const engineer = new Engineer(name, id, email, github);
    // console.log(engineer);
    renderedHTML += cardHTML.engineerCardHTML(engineer);
    // console.log(renderedHTML);
    pickNext();
  };
    createIntern = async () => {
      const { name, id, email, school } = await inquirer.prompt(internQuestions);
      // console.log({ name, id, email, school });
      const intern = new Intern(name, id, email, school);
      // console.log(intern);
      renderedHTML += cardHTML.internCardHTML(intern);
      // console.log(renderedHTML);
      pickNext();
    };
    renderHTML = () => {
      renderedHTML += cardHTML.endHTML;
      // console.log(renderedHTML);
      fs.writeFile('../dist/generatedTeam.html', renderedHTML, (err) => 
        err ? console.log(err) : console.log('Success!'));
    };
  createManager();
};

menu();
