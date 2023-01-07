// Write your solution in this for

const employee = {
    name : "Sam",
    streetAddress : "1200 East Berkeley Drive",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}


function deleteFromEmployeeByKey(employee, key) {
    const newEmployee1 = {...employee};
    delete newEmployee1[key];
    return newEmployee1;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newEmployee2 = employee;
    delete newEmployee2[key];
    return newEmployee2;
}