function solve(employees) {
    let employeesList = [];
   

    for (const line of employees) {
        let employee = {};
        
        employee.name = line;
        employee.personalNumber = line.length;

        employeesList.push(employee);
    }

    

    for (const person of employeesList) {
        console.log(`Name: ${person.name} -- Personal Number: ${person.personalNumber}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )