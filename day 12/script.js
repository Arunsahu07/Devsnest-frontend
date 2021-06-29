window.onload = () => {
  let inputText = document.querySelector(".inputText");
  inputText.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) addBtn.click();
  });
  let todoList = document.querySelector(".todoList");
  let addBtn = document.querySelector(".addBtn");
  let len = localStorage.length;
  index = 0;
  console.log(len);
  while (index < len) {
    let div = document.createElement("div");
    div.classList.add('todoItem');
    let span = document.createElement("span");
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener("click", (e) => {
      todoList.removeChild(e.target.parentNode);
      updateStorage();
    });
    let completeBtn = document.createElement("button");
    completeBtn.innerHTML = "Complete";
    completeBtn.classList.add("complete");
    completeBtn.addEventListener('click',e=>{
      e.target.parentNode.firstChild.classList.add('completed');
    })
    span.innerHTML = localStorage.getItem(localStorage.key( index));
    
    div.appendChild(span);
    div.appendChild(completeBtn);
    div.appendChild(deleteBtn);
    todoList.appendChild(div);
    console.log('adding exiesting data',index,localStorage.getItem(localStorage.key(index)));
    index++;
  }
  addBtn.addEventListener("click", (e) => {
    if (inputText.value !== "") {
      let div = document.createElement("div");
      div.classList.add('todoItem');
      let span = document.createElement("span");
      let deleteBtn = document.createElement("button");
      console.log(deleteBtn, 29);
      deleteBtn.classList.add("delete");
      deleteBtn.innerHTML = "Delete";
      deleteBtn.addEventListener("click", (e) => {
        todoList.removeChild(e.target.parentNode);
        updateStorage();
      });
      let completeBtn = document.createElement("button");
      completeBtn.classList.add("complete");
      completeBtn.innerHTML = "Complete";
      completeBtn.addEventListener('click',e=>{
        e.target.parentNode.firstChild.classList.add('completed');
      })
      span.innerHTML = inputText.value;

      localStorage.setItem(index, inputText.value);
      inputText.value = "";
      index++;
      div.appendChild(span);
      div.appendChild(completeBtn);
      div.appendChild(deleteBtn);
      todoList.appendChild(div);
    }
  });
  function updateStorage(){
      localStorage.clear();
      let todoItems=document.querySelectorAll('.todoItem');
      let index=0;
      todoItems.forEach(element => {
          let text=element.firstChild.innerHTML;
          localStorage.setItem(index,text);
          console.log('setting',text);
          index++;

          
      });
      console.log(localStorage,'70');
  }
};
