// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];
const inquirer = require('inquirer')
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, function(error){
console.log (error)
    })
}

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
            {
                type: 'input',
                message: 'What is your email?',
                name: 'Email',
            },
            {
                type: 'input',
                message: 'What is your Github username?',
                name: 'GithubUserName',
            },
            {
                type: 'list',
                message: 'Choose the license you want',
                name: 'License',
                choices: ["MIT","Apache","BSD","none"]
            },
        ])
        .then((response) => {
            console.log(generateMarkdown(response))
            writeToFile("./ProfessionalReadMe.md", generateMarkdown(response)) 
        }
        );
}

// Function call to initialize app
init();
