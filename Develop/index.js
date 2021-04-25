// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')



// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message:'What is the name of your project?',
        name: 'projectname',
    },
    {
        type:'input',
        message: 'Enter a description for the project.',
        name: 'description',
    },
    {
        type:'input',
        message: 'What is the repo URL?',
        name: 'repo',
    },
    {
      type:'input',
      message: 'What is your github username?',
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
        choices: ["MIT", "Mozilla", 'Apache License 2.0', ],
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'contributions',
        message: 'What guidelines are there for using the repo?',
      },
];


const userPrompt = () => {
  return inquirer.prompt(questions)
}




// TODO: Create a function to write README file
const writeReadme = (data) => {
  fs.writeFile('README.md', data, (error) =>
  error ? console.log('Error!') : console.log('Successful!'));
}






// TODO: Create a function to initialize app
const init = () => {
userPrompt()
  .then((data) => {
   const markdown = generateMarkdown.generateMarkdown(data)
    writeReadme(markdown)
  
  })
};



// Function call to initialize app
init();
