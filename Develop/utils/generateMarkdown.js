// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (userInput) => {

  const { projectname, email, github, description, usage, licensetype, test, install, contributions, repo } = userInput;


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
