const hamburger = document.querySelector(".hamburger");
const navItem = document.querySelector(".nav-items");

hamburger.addEventListener("click", function () {
  console.log("ham");
  navItem.classList.toggle("hide");
});
