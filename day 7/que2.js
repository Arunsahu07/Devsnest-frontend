// Write a JavaScript program to delete the rollno property from the following object.
function deleteProperty(object,key){
    delete object[key];
}

object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
deleteProperty(student,"rollno");
console.log(student);