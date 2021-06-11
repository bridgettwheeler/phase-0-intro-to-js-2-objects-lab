const employee = {};
employee.name = "Mo";
employee.streetAddress = "5657 Modena Pl";
employee;

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const updatedEmployeeList = { ...obj };
    delete updatedEmployeeList[key];
    return updatedEmployeeList;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]
    return obj;
}