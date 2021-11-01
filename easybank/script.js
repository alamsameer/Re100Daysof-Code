console.log("my easy bank");
 const hamburger=document.querySelector("#hamburger")
 console.log(hamburger);
 const Close=document.querySelector("#Close")
 console.log(Close);
 const links=document.querySelector(".links")
console.log(links);

hamburger.addEventListener("click",()=>{
   hamburger.classList.add("hide")
   Close.classList.remove("hide")
   links.classList.remove("hide")
})
Close.addEventListener("click",()=>{
    hamburger.classList.remove("hide")
    Close.classList.add("hide")
    links.classList.add("hide")
 })