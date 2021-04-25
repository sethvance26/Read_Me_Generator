


//This function returns a license badge based on the User's selection of license within the Inquirer prompts. 
//If there is no license specified, it returns an empty string.
const renderLicenseBadge = (license) => {
  let licenseBadge;
  switch (license) {
    case 'MIT':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Mozilla':
      licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break; 
    case 'Apache License 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'None':
      licenseBadge = '';
      break;
    }
    return licenseBadge;
}



//This function returns a license link corresponding to the user's choice of license. 
//We make a switch statement since we have different defined cases.
//If no license is selected, it will return an empty string

const renderLicenseLink = (license) => {
 let licenseURL;
  switch (license) {
    case 'MIT':
      licenseURL = 'https://opensource.org/licenses/MIT';
      break;
    case 'Mozilla':
      licenseURL = 'https://opensource.org/licenses/MPL-2.0';
      break;
    case 'Apache License 2.0':
      licenseURL = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'None':
        licenseURL = '';
        break;
  }
  return licenseURL;

}


//This function creates the README file from the user's data that they provide in the prompts given to the user with Inquirer. 

const generateMarkdown = (userInput) => {

  const { projectname, email, github, description, usage, license, test, install, contributions, repo } = userInput;

  let licenseBadge = renderLicenseBadge(license);
  let licenseURL = renderLicenseLink(license);




//This is the actual README that will be built once the generateMarkdown function runs. 
  return`

# License
${licenseBadge}
  This project is licensed under the ${license} license. URL Here - (${licenseURL})
## Project Name:
${projectname}

## Table of Contents
- [Title](#Project-Name)
- [Description](#Description)
- [License](#License)
- [Installation](#Installation)
- [Usage](#Usage)
- [Tests](#Tests)
- [Contributions](#Contributions)
- [Questions](#Questions)

## Description
${description}

## Contact
[Email]-(${email})
[GitHub]-(${github})

## Tests
To run a test, use the command ${test}

## Usage
${usage}
${repo}


## Installation
${install}

##Contributions
${contributions}


### Questions
If you have any questions or concerns, please e-mail me at ${email}. More work can be found at my Github. Username -  ${github} 
`;
};



//This exports our code to be used by Index.js

module.exports = {
  generateMarkdown
}
