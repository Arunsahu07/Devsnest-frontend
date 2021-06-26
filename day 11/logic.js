window.onload=()=>{
    let queNo=0;
    let skip=document.querySelector('.skip');
    let displayQueNo=document.querySelector('.queNo');
    let curScore=0;
    let msg=document.querySelector('.msg');
    let screen=document.querySelector('.screen');
    let opt1=document.querySelector('.op1')
    let opt2=document.querySelector('.op2')
    let opt3=document.querySelector('.op3')
    let opt4=document.querySelector('.op4')
    let score=document.querySelector('.score');
  
    


        function fill(){
        screen.innerHTML=`${QUESTIONS[queNo]['name']}`;
        opt1.innerHTML=`${QUESTIONS[queNo]["option1"]}`;
        opt2.innerHTML=`${QUESTIONS[queNo]["option2"]}`;
        opt3.innerHTML=`${QUESTIONS[queNo]["option3"]}`;
        opt4.innerHTML=`${QUESTIONS[queNo]["option4"]}`;}
        fill();
        skip.addEventListener('click',()=>{
            queNo++;
            displayQueNo.innerHTML=`Quetion No : ${queNo}`;
            if(queNo===15){
                msg.innerHTML=`You score is ${curScore}`
                setTimeout( ()=>{location.reload()},2000);
            }
            else
            setTimeout(()=>{fill()},1000)
             })
        let options=document.querySelector('.options');
        options.addEventListener('click',(e)=>{
            if(e.target.value==QUESTIONS[queNo]['answer']){
                curScore++;
                score.innerHTML=`Score : ${curScore}`;
                msg.innerHTML="Correct! Answer";
                e.target.style.background='green';
                
                
                
            }
            else{
                msg.innerHTML='Oops! Better luck next time'
                e.target.style.background='red';
            }
            queNo++
            if(queNo===15){
                msg.innerHTML=`You score is ${curScore}`
                setTimeout( ()=>{location.reload()},2000);
            }
            setTimeout(()=>{e.target.style.background='linear-gradient(to right,#00d4ff,#ed2783)';},1200)
            displayQueNo.innerHTML=`Quetion No : ${queNo}`; 
            if (queNo<15)
            setTimeout(()=>{fill();},1000)      
            setTimeout(()=>{msg.innerHTML=''},1000);})

        
}