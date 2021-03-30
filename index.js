// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = 
inquirer
  .prompt([
   {
    type: 'input',
    message: 'What is your projects title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is your user story?',
    name: 'userstory',
  },
  {
    type: 'input',
    message: 'write a little information about your project!',
    name: 'about',
  },
  {
    type: 'input',
    message: 'what is your email address?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'what technologies were used?',
    name: 'technologies',
  },
]);

function makeReadMe(response) {
  return `
  # ${response.title} 
 
## Table of contents
* [User story](#user-story)
* [Description](#description)
* [General info](#general-info)
* [Technologies](#technologies)

## Description
🔍 ${response.about}

## Technologies
${response.technologies}

## User-story
💻 ${response.userstory}

✉️ Email me with any questions: ${response.email}
`
}

function promptUser(){
  questions.then((response) => {
    var readme =makeReadMe(response)
    fs.writeFile('readme.md', readme, (err) =>
   err ? console.error(err) : console.log('Success!')
   );
      
})  
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('readme.txt', data, (err) =>
 err ? console.error(err) : console.log('Success!')
 );
}

// TODO: Create a function to initialize app
function init() {
  promptUser()
}

// Function call to initialize app
init();
