const text = document.querySelector(".text");
const submit = document.querySelector(".submit");
const todoList = document.querySelector(".todoList");
const clearLi=document.querySelector(".clearLi")

clearLi.addEventListener("click",function clearLis(){
    localStorage.clear()
    showtoDo()
})
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let todos = localStorage.getItem("todos");
  if (todos === null) {
    var todo = [];
      } else {
    todo = JSON.parse(todos);
  }
  var str = text.value;
  const isEmpty = (str) => str.trim().length;
  if (isEmpty(str)) {
    todo.push(text.value);
  }
  localStorage.setItem("todos", JSON.stringify(todo));
  text.value = "";
  showtoDo();
});

function showtoDo() {
  var todos = JSON.parse(localStorage.getItem("todos"));
  var li = "";
  if(todos ===null){
      todoList.innerHTML=""
  }
  else{
    for (i = 0; i < todos.length; i++) {
        li += `<li id="${i}"><p>${todos[i]}</p><span id="${i}" class="${i} delete"><i class="fa-solid fa fa-trash"></i></span></li>`;
      }
      todoList.innerHTML = li;
  }
  clickLi();
}
showtoDo();
function clickLi() {
  const allLi = document.querySelectorAll("li");
  const AllSpan=document.querySelectorAll("span")
  allLi.forEach(function (each) {
    each.addEventListener("click", (e) => {
    });
  });
  AllSpan.forEach(function(each){
      each.addEventListener("click",(e)=>{
          var checkClass=e.currentTarget
         if(checkClass.classList.contains("delete")){
            deleteLi(e.currentTarget.id)
         }
         else if(checkClass.classList.contains("edit")){
             editLi(e.currentTarget.id)
         }
      })
  })
  const Allp=document.querySelectorAll("p")
 
  Allp.forEach(function(each){
    each.addEventListener("click",(e)=>{
      var curr=e.currentTarget
      curr.classList.add("checked")

    })
  })
}
function deleteLi(i){
 todos=JSON.parse(localStorage.getItem("todos"));
 var spliced=todos.splice(i,1)
 localStorage.setItem("todos", JSON.stringify(todos));
 showtoDo()
}
// function editLi(i){

//    }

