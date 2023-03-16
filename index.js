// Write your solution in this file!

//Employee object
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
}


//using the spread operator
function updateEmployeeWithKeyAndValue(obj,key,value){
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}
updateEmployeeWithKeyAndValue()

 


//destructive update
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key] = value;
    return obj;
}
destructivelyUpdateEmployeeWithKeyAndValue();




//undestructive delete
function deleteFromEmployeeByKey(obj, key){
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}
deleteFromEmployeeByKey();






//destructive delete
function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}
destructivelyDeleteFromEmployeeByKey();