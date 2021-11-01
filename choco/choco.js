console.log("tihs is my first project fo my portfolio");
// on scroll function
const start =document.querySelector(".back-to-top")

window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    let height= window.pageYOffset;
  if ( height>400 ) {
    start.style.display = "block";
  } else {
    start.style.display = "none";
  }
}


start.addEventListener("click", function(){
    console.log("back to top");
// window.pageYOffset=0
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

})
