// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];
const inquirer = require('inquirer')

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your project title?',
                name: 'Title',
            },
            {
                type: 'input',
                message: 'What is the description of your project?',
                name: 'Description',
            },
            {
                type: 'Input',
                message: 'What are the installation instructions for your project?',
                name: 'InstallationInstructions',
            },
            {
                type: 'input',
                message: 'What is your usage information?',
                name: 'UsageInformation',
            },
            {
                type: 'input',
                message: 'What are your contribution guidelines?',
                name: 'ContributionGuidelines',
            },
            {
                type: 'Input',
                message: 'What are your test instructions?',
                name: 'TestInstructions',
            },
        ])
        .then((response) => {
            console.log(response)
        }
        );
}

// Function call to initialize app
init();
