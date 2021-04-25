// These are the packages needed for this application. 
//We use inquirer for our prompts, fs for writing a new file, and generateMarkdown so we can import the code from generateMarkdown.js
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')



// This is an array of questions that we call with Inquirer to prompt the User.
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
        name: 'license',
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

//Here we're turning our questions array into an inquirer prompt function, so that our application will prompt the user with questions. 
const userPrompt = () => {
  return inquirer.prompt(questions)
}




//This function writes a new README.md file and displays "Sucessful!" if it worked correctly, and "Error" if there was an issue. 
const writeReadme = (data) => {
  fs.writeFile('README.md', data, (error) =>
  error ? console.log('Error!') : console.log('Successful!'));
}






//This function initializes our application and tells the userPrompt function to run first, then takes that data generates a markdown, and writes the README with that information. 
const init = () => {
userPrompt()
  .then((data) => {
   const markdown = generateMarkdown.generateMarkdown(data)
    writeReadme(markdown)
  
  })
};



// Function call to initialize app
init();
