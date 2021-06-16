let container=document.querySelector(".container");
function createBlock() {
let div=document.createElement("div");

div.style.height='20px';
div.style.backgroundColor="#DE4738";
div.style.width='20px';
div.className='pixel';
div.style.display='inline-block';
return div}
for(let i=0;i<400;i++){
container.appendChild(createBlock());};

container.addEventListener('click' ,e=>{
    let bgColor=e.target.style.backgroundColor;
   if (bgColor=='white')
   {
   e.target.style.backgroundColor='#DE4738';
   e.target.style.border='1px solid #E24E3F';}
   else if (bgColor=='rgb(222, 71, 56)')
   {
   e.target.style.backgroundColor='white';
   e.target.style.border='1px solid white';}
   console.log(bgColor);

});