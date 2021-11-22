console.log(" lets excvfpsgfio");
const ham = document.querySelector(".ham");
const navItemContainer = document.querySelector(".nav-items-container");
const spacey=document.querySelectorAll('.space')
const vech=document.querySelector(".vech")
const aboutSpace=document.querySelector(".about-space")
const spaceImg=document.querySelector(".sapce-img")
let itemSelect=""
console.log(spacey);
spacey.forEach((each)=>{
    each.addEventListener("click",(e)=>{
        itemSelect=e.currentTarget.id;
        retrieveData()
    })
})
ham.addEventListener("click", () => {
navItemContainer.classList.toggle("slide")});

function retrieveData() {
    fetch("./data.json")
      .then((data) => data.json())
      .then(getData);
  }

  function getData(data){
      console.log(data.technology);
      data.technology.forEach((each)=>{
        if(each.name === itemSelect){
               vech.textContent=each.name
               aboutSpace.textContent=each.description
               spaceImg.src=each.images.portrait
        }
      })
  }
