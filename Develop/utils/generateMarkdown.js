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

  const { projectname, email, github } = userInput;


  return`
# Project Name:
${projectname}

## License


## Table of Contents
- [Title](#Project-Name)
- [License](#License)
- [Installation](#Installation)
- [Usage](#Usage)

## Contact
[Email]-(${email})
[GitHub]-(${github})
($)

## Installation 
  \`npm i\`

## Usage
helo

# Titles 
test
`;
}



module.exports = {
  generateMarkdown
}
