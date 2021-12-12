const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const pageBuilder = require("./src/html-generator");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const teamMembers = []

function promptUser(){
    // use inquirer to ask about manager
    const manQuestions = [
        {
            type: "input",
            name: "manName",
            message: "What is the manager's name?",
            validate: answer => {
                if (answer !== "") {
                    return true
                }
                return "Answer is required!"
            },
        },
        {
            type: "input",
            name: "manId",
            message: "What is the manager's ID?",
            validate: answer => {
                if (answer !== "") {
                    return true
                }
                return "Answer is required!"
            },
        },
        {
            type: "input",
            name: "manEmail",
            message: "What is the manager's email?",
            validate: answer => {
                if (answer !== "") {
                    return true
                }
                return "Answer is required!"
            }
        },
        {
            type: "input",
            name: "manOffice",
            message: "What is the manager's office number?",
            validate: answer => {
                if (answer !== "") {
                    return true
                }
                return "Answer is required!"
            }
        }
    ];
    return inquirer.prompt(manQuestions).then(answer => {
        const manager = new Manager(answer.manName, answer.manId, answer.manEmail, answer.manOffice);
        teamMembers.push(manager);
        // console.log(teamMembers);
    })
    
}


function promptEmployee(){
    // use inquirer to ask about engineer
    const empQuestions = [
        {
            type: "confirm",
            name: "newEmployeeCheck",
            message: "Would you like to add another employee?"
        },
        {
            type: "input",
            name: "empName",
            message: "What is the employee's name?",
            when: confirmCheck => confirmCheck.newEmployeeCheck,
            validate: answer => {
                if (answer !== "") {
                    return true
                }
                return "Answer is required!"
            },
        },
        {
            type: "input",
            name: "empId",
            message: "What is the employee's ID?",
            when: confirmCheck => confirmCheck.newEmployeeCheck,
            validate: answer => {
                if (answer !== "") {
                    return true
                }
                return "Answer is required!"
            },
        },
        {
            type: "input",
            name: "empEmail",
            message: "What is the employee's email?",
            when: confirmCheck => confirmCheck.newEmployeeCheck,
            validate: answer => {
                if (answer !== "") {
                    return true
                }
                return "Answer is required!"
            }
        },
        {
            type: "list",
            name: "role",
            message: "Select their role",
            when: confirmCheck => confirmCheck.newEmployeeCheck,
            choices: ['Engineer','Intern']
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?",
            when: confirmRole => confirmRole.role === "Engineer",
            validate: answer => {
                if (answer !== "") {
                    return true
                }
                return "Answer is required!"
            }
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?",
            when: confirmRole => confirmRole.role === "Intern",
            validate: answer => {
                if (answer !== "") {
                    return true
                }
                return "Answer is required!"
            }
        }
    ];
    inquirer.prompt(empQuestions).then(answer => {
        if(answer.newEmployeeCheck) {
            switch(answer.role){
                case 'Engineer':
                    const engineer = new Engineer(answer.empName, answer.empId, answer.empEmail, answer.github);
                    teamMembers.push(engineer);
                    break;
                case 'Intern':
                    const intern = new Intern(answer.empName, answer.empId, answer.empEmail, answer.school);
                    teamMembers.push(intern);
                    break;
            }
            return promptEmployee();
        }
    })
    .then(buildTeam); 
    // console.log(teamMembers)
};

function buildTeam(){
    var targetDirectory = path.resolve(__dirname, "dist");
    if (!fs.existsSync(targetDirectory)){
        fs.mkdirSync(targetDirectory)
    }
    // console.log(pageBuilder(teamMembers));
    fs.writeFileSync(path.join(targetDirectory,"team.html"),pageBuilder(teamMembers), "utf-8");
}

promptUser()
.then(promptEmployee)
// .then(buildTeam); 

