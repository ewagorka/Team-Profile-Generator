const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const employees = [];

//questions

const questions = [
    {
        type: 'input',
        message: 'Provide name:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Provide id:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Provide email:',
        name: 'email',
    },
    {
        type: 'input',
        message: `Provide an office number`,
        name: 'lastParameter',
    }
];



// function to initialize program
function init() {
    //get user input with inquirer
    inquirer
        // ask user all questions from the questions array
        .prompt(questions)
        // after all input is collected, run the writeToFile function
        .then((data) => {
            whatNext();
            console.log("yay");
        })
}

// ask user what they want to do next
function whatNext() {

    inquirer
        // ask user if they want to add another employee or if they're finished
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do next?',
                name: 'next',
                choices: ['Add an engineer', 'Add an Intern', 'Im done'],
            }
        ])
        // based on user choice decide what to do next
        .then((data) => {
            
            console.log("Here is : "+data.next);
            switch (data.next) {
                case "Add an engineer":
                    questions[3].message = "Provide a github username:"
                    addEmployee("engineer");
                    break;
                case "Add an Intern":
                    questions[3].message = "Provide a school name:"
                    addEmployee("intern");
                    break;
                case "Im done":
                    console.log("All done, thanks");
                    console.log(employees);
                    break;
            }
        })

}

function addEmployee(type) {
    console.log("HELLO");
    inquirer
        .prompt(questions)
        .then((data) => {

            if (type == "engineer") {
                let engineer = new Engineer(data.name, data.id, data.email, data.lastParameter);
                employees.push(engineer);
            } else if (type == "intern") {
                let intern = new Intern(data.name, data.id, data.email, data.lastParameter);
                employees.push(intern)
            }

            whatNext();

        })

}
//log: enter manager details

//inquirer: manager questions
//create new manager object

//inquirer: Options
// add Engineer
//inquirer: engineer questions
//create new Engineer
// go back to options
// add Intern
//inquirer: Intern questions
//create new Intern
// go back to options
//don't add anymore
//generate the HTML with all created objects
//log: Website created

init();
