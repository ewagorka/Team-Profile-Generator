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

//validate function
// 
const validateAnswer = async (input) => {
    if (input == "") {
       return 'Please provide information';
    }
    return true;
 };

const questions = [
    {
        type: 'input',
        message: 'Provide name:',
        name: 'name',
        validate: validateAnswer
    },
    {
        type: 'input',
        message: 'Provide id:',
        name: 'id',
        validate: validateAnswer
    },
    {
        type: 'input',
        message: 'Provide email:',
        name: 'email',
        validate: validateAnswer
    },
    {
        type: 'input',
        message: `Provide an office number`,
        name: 'lastParameter',
        validate: validateAnswer
    }
];



// function to initialize program
function init() {
    //get user input with inquirer
    inquirer
        // ask user all questions from the questions array
        .prompt(questions)
        // after all input is collected
        .then((data) => {
            // add manager
            let employee = new Manager(data.name, data.id, data.email, data.lastParameter);
            employees.push(employee);

            //ask user what they want to do next
            whatNext();
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
                choices: ['Add an engineer', 'Add an Intern', 'Finish adding'],
            }
        ])
        // based on user choice decide what to do next
        .then((data) => {

            console.log("Here is : " + data.next);
            switch (data.next) {

                case "Add an engineer":
                    questions[3].message = "Provide a github username:"
                    addEmployee("engineer");
                    break;

                case "Add an Intern":
                    questions[3].message = "Provide a school name:"
                    addEmployee("intern");
                    break;

                case "Finish adding":
                    fs.writeFile(outputPath, render(employees), (err) =>
                        // if there's an error log it out, if not say HTML generated!
                        err ? console.log(err) : console.log('HTML generated!'))
                    break;
            }
        })

}

function addEmployee(type) {
    
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
            else if (type == "manager") {
                let manager = new Manager(data.name, data.id, data.email, data.lastParameter);
                employees.push(manager)
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
