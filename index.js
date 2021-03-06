//to dos


//GIVEN a command-line application that accepts user input
//WHEN I am prompted for information about my application repository
//THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const fs = requirer("fs");
const inquirer = require("inquirer");
const util = require("util");



const writeFileAsync = util.promisify(fs.writeFile);


const questions = [
    {
        //prompt 1
        type: "input",
        message: "project title?",
        name: "title",
        default: "Project readme",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("a title is needed");
            } return true;
        }
        //WHEN I enter my project title
        //THEN this is displayed as the title of the README
    },
    {
        //prompt 4
        //WHEN I enter my GitHub username
        type: "input",
        message: "Github username(s)",
        name: "github",
        default: "stephenfink",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("github username is needed");
            } return true
        }
        //THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

    },

    {
        //prompt 2
        type: "input",
        message: "decription",
        name: "description",
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A project description is needed.");
            }
            return true;
            //WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
            //THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
        },
    },
    {
        //prompt 3
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['MIT License', 'The Unlicense'],
        name: "license",
    }]
//WHEN I choose a license for my application from a list of options
//THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

//prompt 5
//WHEN I enter my email address
//THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions


async function writeToFile() {
    console.log("Start Readme")
    try {
        promptUser().then(function (response) {
            let markDown = `#${response.title}
           ## Description
           ${response.description}
           ## License
           ${response.license}
           ## Contact Me for any questions or commits at:
           ${response.github}`

            writeToFile("ReadMe.md", markDown)
            //this makes the readme
        })
    } catch (err) { console.log(err) };
}
//function 6        
//WHEN I click on the links in the Table of Contents
//THEN I am taken to the corresponding section of the README

function init() {
    inquirer.prompt(questions)
}
writeToFile();
init();