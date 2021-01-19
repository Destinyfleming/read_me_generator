// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
/*README entitled Description, Installation, Usage, Contributing, and Tests*/
const questions = [
    inquirer
     .prompt([
    // title
     {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
     },  

    //description
     {
        type: 'input',
        message: 'explain the general description of your project.',
        name: 'description',
     },  
     //instaliation
     {
        type: 'input',
        message: 'What is the instalation instructions?',
        name: 'instalation',
     },
    
    //usage
     {
        type: 'input',
        message: 'What do you use this application for',
        name: 'usage',
     },

    //contributing
     {
        type: 'input',
        message: 'what should users know about contributions?',
        name: 'contributing',
     },  

    //tests
     {
        type: 'input',
        message: 'what tests can be ran on this project?',
        name: 'tests',
     },  
    
     ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
var fileName = 'readme.txt'
fs.appendFile(fileName, `${data}\n`, (err) =>
err ? console.error(err) : console.log('Commit logged!')
)};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
