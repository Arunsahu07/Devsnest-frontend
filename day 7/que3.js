// Write a JavaScript program to get the length of a JavaScript object.
function getLength(object){
    let length=0;
    for(let key in object)
    length++;
    return length;
}

 var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log( getLength(student));




