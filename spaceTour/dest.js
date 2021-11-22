
const destImg = document.querySelector(".dest-img");
const destLocation = document.querySelector(".dest-location");
const destDesc = document.querySelector(".dest-desc");
const avgDist = document.querySelector(".avg-dist");
const estTime = document.querySelector(".est-time");
const navItem = document.querySelectorAll(".nav-item");
let itemSelect=""
function getData(elem1) {
elem1.destinations.forEach((each)=>{
   if(each.name === itemSelect){
       console.log(each);
       destImg.src=each.images.png;
       destLocation.textContent=each.name;
       destDesc.textContent=each.description;
       avgDist.textContent=each.distance;
       estTime.textContent=each.travel
   }
})
console.log(itemSelect);
}
navItem.forEach((each) => {
  each.addEventListener("click", (e) => {
      itemSelect=e.currentTarget.textContent;
    retrieveData();
  });
});

function retrieveData() {
  fetch("./data.json")
    .then((data) => data.json())
    .then(getData);
}

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