// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create a function to initialize app
function init() {
    // TODO: Create an array of questions for user input
    inquirer.prompt([
        {
            type: 'input',
            message: 'Project Title:',
            name: 'projectTitle',

        },
        {
            type: 'input',
            message: 'Description',
            name: 'description',

        },
        {
            type: 'input',
            message: 'Author',
            name: 'author',

        },
        {
            type: 'input',
            message: 'Installation:',
            name: 'installation',

        },
        {
            type: 'input',
            message: 'GitHub username',
            name: 'userName',

        },
        
        {
            type: 'input',
            message: 'Usage',
            name: 'credits',

        },
        {
            type: 'list',
            message: 'Choose a license:',
            name: 'license',
            choices: [
                "MIT", "ISC", "Apache", "GPL", "None",
            ]

        },
        {
            type: 'input',
            message: 'Tests:',
            name: 'testing',

        },


    ])
        .then((response) => {

            const readMeFile = `
# Project Title::
${response.projectTitle}


## Description:
${response.description}


### Table of Contents
* [Installation](#installation)

* [Testing](#testing)

### Installation
${response.installation}

#### Usage
${response.usage}

#### Acknowledgements
${response.credits}


##### Developer Profile
[Github Profile](https://github.com/${response.userName})



##### License
${response.license}
![Github Licemse](https://img.shields.io/badge/license-${response.license}-blue.svg)


##### Testing
${response.testing}


##### Contact 
If you have any questions feel free to reachout
${response.email}

 `
  
            // TODO: Create a function to write README file
            fs.writeFileSync("README.md", readMeFile, (err) =>
                err ? console.log(err) : console.log('Success!!!')
            )
            console.log(readMeFile)
});




}

// Function call to initialize app
init();
