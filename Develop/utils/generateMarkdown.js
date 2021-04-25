// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseBadge;
const renderLicenseBadge = (license) => {
  
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

 
  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
let licenseURL;
function renderLicenseLink = (license) => {
  switch (license) {
    case 'MIT':
      licenseURL = 'https://opensource.org/licenses/MIT';
      break;
    case 'Apache License 2.0':
      licenseURL = 'https://opensource.org/licenses/Apache-2.0';
    break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}





// TODO: Create a function to generate markdown for README
const generateMarkdown = (userInput) => {

  const { projectname, email, github, description, usage, licensetype, test, install, contributions, repo } = userInput;

  const licenseBadge = renderLicenseBadge(userInput.licenseType);
  const licenseURL = renderLicenseLink(userInput.licenseType);

  return`

# License
${licensetype}
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
[GitHub]-(${repo})

## Tests
To run a test, use the command ${test}

## Usage
${usage}
${github}


## Installation
${install}

##Contributions
${contributions}


### Questions
If you have any questions or concerns, please e-mail me at ${email}. More work can be found at my Github. Username -  ${github} 
`;
}



module.exports = {
  generateMarkdown
}
