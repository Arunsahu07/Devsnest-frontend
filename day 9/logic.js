window.onload=()=>{
    let container=document.querySelector('.container');
    function appendBlock(){
        let div=document.createElement('div');
        div.style.width='70px';
        div.style.height='30px';
        div.className='seat';
        div.style.backgroundColor='red';
        return div;
    }
    for(let i=0;i<50;i++)
container.appendChild(appendBlock());

container.addEventListener('click', e=>{
 let bookedSeat=document.querySelector('.bookedSeat').innerHTML;
 if( e.target.style.backgroundColor=='red'){
     e.target.style.backgroundColor='rgb(241, 90, 90)';
     let newBookedSeat=parseInt(bookedSeat)+1;
     document.querySelector('.bookedSeat').innerHTML=newBookedSeat;
     document.querySelector('.remainingSeat').innerHTML=50-newBookedSeat;
 }
 else if (e.target.style.backgroundColor=='rgb(241, 90, 90)')
 {   e.target.style.backgroundColor='red';
     let bookedSeat=document.querySelector('.bookedSeat').innerHTML;
     let newBookedSeat= parseInt(bookedSeat)-1;
     document.querySelector('.bookedSeat').innerHTML=newBookedSeat;
     document.querySelector('.remainingSeat').innerHTML=50-newBookedSeat; 

 }

 })




}