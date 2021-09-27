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
            message: 'Contributors',
            name: 'contributors',

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
            name: 'usage',

        },
        {
            type: 'input',
            message: 'Acknowledgements',
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
        {
            type: 'input',
            message: 'Email address',
            name: 'email',

        },

    ])
        .then((response) => {

            const readMeFile = `
# Project Title::
${response.projectTitle}


## Description:
${response.description}

### Contributors
${response.contributors}

### Table of Contents
* [Installation](#installation)
* [Developer Profile](#userName)
* [Usage](#usage)
* [Acknowledgements](#credits)
* [License](#license)
* [Testing](#testing)
* [Questions](#questions)

#### Installation
${response.installation}

##### Developer Profile
[Github Profile](https://github.com/${response.userName})

##### Usage
${response.usage}

###### Acknowledgements
${response.credits}


###### License
${response.license}
![Github Licemse](https://img.shields.io/badge/license-${response.license}-blue.svg)


###### Testing
${response.testing}


###### Questions 
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
