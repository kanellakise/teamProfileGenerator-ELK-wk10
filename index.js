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
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Welcome to Team Profile Generator! What would you like to do?',
                choices: ['Add a Manager', 'Add an Engineer', 'Add an Intern', 'Generate Team Profile', 'Quit']
            }
        ])
        .then(answers => {
            switch (answers.menu) {
                case 'Add a Manager':
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