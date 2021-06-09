//const btn=document.querySelectorAll('button');
window.onload=()=>{ 
const btn=document.querySelectorAll('button');     
const add=btn[0];
const sub=btn[1];
const mul=btn[2];
const divide=btn[3];
// alert(btn.innerHTML);
var res=document.getElementById("output");
alert(res);
console.log("arun");
const fun1=function( ){  
    let first_number=document.getElementById("first_number").value;
    let second_number=document.getElementById("second_number").value;
res.innerHTML=parseInt(first_number)+parseInt(second_number);
// alert(parseInt(first_number)+ parseInt( second_number));
};
add.addEventListener("click" ,fun1);
const fun2=function(){
    let first_number=document.getElementById("first_number").value;
    let second_number=document.getElementById("second_number").value;
    res.innerHTML=parseInt(first_number)-parseInt(second_number);
    };
sub.addEventListener('click' , fun2);

const fun3=function (){
    let first_number=document.getElementById("first_number").value;
    let second_number=document.getElementById("second_number").value;
    res.innerHTML=parseInt(first_number)*parseInt(second_number);
};
mul.addEventListener("click" , fun3);
const fun4=function(){
    let first_number=document.getElementById("first_number").value;
    let second_number=document.getElementById("second_number").value;
    res.innerHTML=parseInt(first_number) / parseInt(second_number);

};
divide.addEventListener('click', fun4);
};