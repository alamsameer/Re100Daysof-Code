const ham=document.querySelector(".ham")
const navItemContainer=document.querySelector(".nav-items-container")
console.log(navItemContainer);
ham.addEventListener("click",()=>{
    console.log(" ham clicked");
    console.log(navItemContainer.classList.toggle("slide"));
})


console.log("nav magic");
document.addEventListener("click",(e)=>{
    console.log(e.currentTarget);
})