let next=document.querySelector('.next');
let showContent=document.querySelector('.showContent');
async function getContent(){
    try{
    let content= await fetch("https://api.quotable.io/random");
    let data= await content.json();
    console.log(content,6,data.content);
    showContent.innerHTML=data.content
    showContent.style.color='white';}
    catch{
        showContent.innerHTML="Opps an error is occured please check your internet connection";
        showContent.style.color='red';
        
    }
}
next.addEventListener('click',getContent);
