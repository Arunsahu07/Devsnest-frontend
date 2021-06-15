// Write a JavaScript program to list the properties of a JavaScript object.

function showProperties(object){

    for(let key in object){
        console.log(key);
    }
}
var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
showProperties(student);
// Sample Output: name,sclass,rollno