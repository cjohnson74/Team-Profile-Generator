module.exports = {

managerQuestions : [
    {
        type: "input",
        name: "name",
        message: "Enter the manager's name: ",
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
    }],
engineerQuestions : [
    {
        type: "input",
        name: "name",
        message: "Enter the engineer's name: ",
        // Validation here
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's id?",
        // Validation here
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
        // Validation here
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github?",
        // Validation here
    }],
internQuestions : [
    {
        type: "input",
        name: "name",
        message: "Enter the intern's name: ",
        // Validation here
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's id?",
        // Validation here
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
        // Validation here
    },
    {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
        // Validation here
    }],
pickerQuestion : [
    {
        type: "list",
        name: "pick",
        message: "Whould you like to add an Engineer or Intern?",
        choices: ['Engineer', 'Intern', 'Finish building my team']
    }]
}