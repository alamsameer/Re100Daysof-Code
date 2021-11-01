console.log(" iam here");
const toggleBar=document.querySelector(".toggle-bar")
const toggleClose=document.querySelector(".toggle-close")
const fullBar=document.querySelector(".full-bar")

toggleBar.addEventListener("click",()=>{
    fullBar.classList.add("show-bar")
})
toggleClose.addEventListener("click",()=>{
    fullBar.classList.remove("show-bar")
})