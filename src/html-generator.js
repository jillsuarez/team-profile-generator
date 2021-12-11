const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

function makeEmployeeCard(data){
    let result = '';
    for (i = 0; i < data.length; i++)  {
    console.log("data:", data)
    console.log(data.length)
    var card = `
        <div id="employee-card">
            <div>
                <h2 id="name">${data[i].name}</h2>
                <h3 id="role">${data[i].getRole()}</h3>
            </div>
            <div>
                <p id="id">ID:${data[i].id}</p>
                <p id="email">Email:${data[i].email}</p>`
                if (data[i].getRole() == "manager") {
                    card += 
                    ` <p>Office Number: ${data[i].officeNumber}</p>
                    </div>
                    </div>`
                    console.log("This is the office number:", data[i].officeNumber)
                }  else if (data[i].getRole() == "engineer") {
                    card += 
                    ` <p>Office Number: ${data[i].github}</p>
                    </div>
                    </div>`
                    console.log("This is the github:", data[i].github)
                }  else if (data[i].getRole() == "intern") {
                    card += 
                    ` <p>Office Number: ${data[i].school}</p>
                    </div>
                    </div>`
                    console.log("This is the school:", data[i].school)
                };
    return card;
            }
    
};

function pageBuilder(data) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
</head>
<body>
    <h1>My Team</h1>
<div id="employee-area">${makeEmployeeCard(data)}</div>
</body>
</html>
    `
}

module.exports = pageBuilder;
