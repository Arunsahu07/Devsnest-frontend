window.onload = () => {
  function suffle(arr){
      let len=arr.length;
      for(let currentIndex=0;currentIndex<len;currentIndex++){
      let randomIndex=Math.floor(Math.random()*len);
      temp=arr[currentIndex];
      arr[currentIndex]=arr[randomIndex];
      arr[randomIndex]=temp;
    
    }
  }
  arr = [1,3,5,7,8,6,4,2,2,1,4,6,3,5,8,7];
  suffle(arr);
  let msg=document.querySelector('.msg');
  
  let container = document.querySelector(".container");
  let score = document.querySelector(".score");
  let points = 0;
  function makeBlock(id) {
    let block = document.createElement("div");
    block.style.width = "15vh";
    block.style.height = "15vh";
    block.style.background = "linear-gradient(145deg, #ff7a7a, #e46767)";
    block.setAttribute("id", "" + id);
    block.className = "block";
    block.style.display = "inline-block";
    block.innerHTML = "";
    return block;
  }
  let ind = 0;
  while (ind < 16) {
    container.appendChild(makeBlock(ind, arr[ind]));
    ind++;
  }

  blocks = document.querySelectorAll(".block");
  console.log(blocks);
  blocks.forEach((e) => {
    e.addEventListener("click", action);
  });
  let clickedBoxes = [];
  function action() {
    console.log(this.classList);
    if (this.classList.contains("alreadyClicked") === false) {
      this.classList.add("alreadyClicked");
      clickedBoxes.push(this);
      console.log(clickedBoxes.length);
      this.innerHTML = arr[parseInt(this.id)];
    }
    if (clickedBoxes.length == 2) {
      if (clickedBoxes[0].innerHTML === clickedBoxes[1].innerHTML) {
        points++;
        msg.style.visibility='visible';
        setTimeout(()=>msg.style.visibility='hidden',1000);
        
        score.innerHTML = `Your score : ${points}`;
        if (points===8){
            setTimeout(()=>{
            location.reload()},3000);
            setTimeout(()=>{
                score.innerHTML=`Congrates! You have won the game. `})
           
        }
        match();
      } else {
        unmatch();
      }
    }
    function match() {
      setTimeout(() => {
        clickedBoxes[0].classList.add("matched");
        clickedBoxes[1].classList.add("matched");
        clickedBoxes = [];
      }, 200);
    }
    function unmatch() {
      // alert('calling');
      setTimeout(() => {
        clickedBoxes[0].innerHTML = "";
        clickedBoxes[1].innerHTML = "";
        clickedBoxes[0].classList.remove('alreadyClicked');
        clickedBoxes[1].classList.remove('alreadyClicked');
        clickedBoxes = [];
      }, 200);
    }
  }
};
