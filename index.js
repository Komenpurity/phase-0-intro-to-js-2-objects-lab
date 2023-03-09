// Write your solution in this file!

//Employee object
let employee = {
    name : "John",
    streetAddress: "12 Broadway"
};


//using the spread operator
function updateEmployeeWithKeyAndValue(obj,key,value){
    
    const newEmployee = {...obj};

    newEmployee[key] = value;

    return newEmployee;

}
updateEmployeeWithKeyAndValue()

const employee21 = updateEmployeeWithKeyAndValue(employee,"name","Mike"); 


//destructive update
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj.key = value;
    return obj;
}
destructivelyUpdateEmployeeWithKeyAndValue();

const employee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee,"Name","Sam");


//undestructive delete
function deleteFromEmployeeByKey(employee, key){
    return Object.assign({}, delete employee.key);
}
deleteFromEmployeeByKey();






//destructive delete
function destructivelyDeleteFromEmployeeByKey(employee, key){
    return Object.assign(employee,delete employee[key]);
}
destructivelyDeleteFromEmployeeByKey();