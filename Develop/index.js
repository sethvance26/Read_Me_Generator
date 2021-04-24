// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('utils');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message:'What is the name of your project?',
        name: 'projectname',
    },
    {
        type:'input',
        message: 'Enter a description for your project.',
        name: 'description',
    },
    {
        type:'input',
        message: 'What is your Github username?',
        name: 'github',
    },
    {
        type:'input',
        message: 'What is your e-mail?',
        name: 'email',
    },
    {
        type: 'list',
        name: 'licensetype',
        message: 'What kind of license should your project have?',
        choices: ["MIT", "ISC"],
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
      },
      {
        type: 'input',
        name: 'command',
        message: 'What command should be run to run tests?',
      },
      {
        type: 'input',
        name: 'need to know',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'What does the user need to know about contributing to the repo?',
      },
];


const userPrompt = () => {
  return inquirer.prompt(questions)
}

// TODO: Create a function to write README file
const.writeReadme = (data) => {
  fs.writeFile('README.md', data, (error) =>
  error ? console.log('Error!') : console.log('Success!'));
}





// TODO: Create a function to initialize app
function init() => {}
);
// Function call to initialize app
init();
