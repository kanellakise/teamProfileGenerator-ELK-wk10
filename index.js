// Module import
const inquirer = require('inquirer');
const genHtml = require('./src/genHtml.js');
const { writeFile } = require('./utils/generate-site.js');

// Employee model import
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Array holds team
const teamArray = [];

const promptUser = () => {
    console.log('Welcome to Team Profile Generator!')
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'name',
                message: 'What would you like to do?',
                choices: ['Add a Manager', 'Add an Engineer', 'Add an Intern', 'Generate Team Profile', 'Quit']
            }
        ])
        .then(answers => {
            switch (answers.menu) {
                case 'Add a Manager':
                    console.log("Please follow these prompts to add a Manager.");
                    addManager();
                    break;
                case 'Add an Engineer':
                    addEngineer();
                    break;
                case 'Add an Intern':
                    addIntern();
                    break;
                case 'Generate Team Profile':
                    generateTeamProfile();
                    break;
                case 'Quit':
                    console.log('Bye!');
                    break;
            }
        });
};

const addManager = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter the Manager's name!",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("PLease enter a name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the Manager's ID.",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter an ID!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the Manager's email.",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter an email!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Please enter the Manager's office number.",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter an office number!");
                        return false;
                    }
                }
            }
        ])
        .then(managerData => {

            let {
                name,
                id,
                email,
                officeNumber
            } = managerData;
            let manager = new Manager(name, id, email, officeNumber);
            console.log(manager);

            teamArray.push(manager);
            console.log(teamArray);
        })
}

promptUser();