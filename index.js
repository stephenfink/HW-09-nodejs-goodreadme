//to dos


//GIVEN a command-line application that accepts user input
//WHEN I am prompted for information about my application repository
//THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    const fs = requirer("fs");
    const inquirer = require("inquirer");
    const util = require("util");

    const writeFileAsync = util.promisify(fs.writeFile);


    function prompt(){
        return inquirer.prompt([
            {
                //prompt 1
                type: "input",
                message: "project title?",
                name: "title"
        //WHEN I enter my project title
        //THEN this is displayed as the title of the README
            },
            {
                 //prompt 2
                 type: "input",
                 message: "decription",
                 name: "description",
        //WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
        //THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
            },
            {
                //prompt 3
                
        //WHEN I choose a license for my application from a list of options
        //THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
            },
            {
                //prompt 4
         //WHEN I enter my GitHub username
        //THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

            },
            {
                //prompt 4
         //WHEN I enter my GitHub username
        //THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

            },
            {
                 //prompt 5
        //WHEN I enter my email address
        //THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
            },
        ])
    }
   async function init(){
       console.log("Start Readme")
       try{
       promptUser().then(function(response){
           let markDown = `#${response.title}
           ## Description
           ${response.description}`

           writeToFile("ReadMe.md", markDown)
           //this makes the readme
       })
    } catch(err){console.log(err)};
   }
//function 6        
    //WHEN I click on the links in the Table of Contents
    //THEN I am taken to the corresponding section of the README
    init();