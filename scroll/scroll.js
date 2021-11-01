  

  const containers = document.getElementsByClassName("containers");
  console.log(document.documentElement.scrollTop);
  // console.log(containers.length);
  // for(let i=0;i<containers.length;i++){
  //   console.log(containers[i].offsetTop);
  
  // }
  var containertops = [];
  console.log(containertops);
  // containertops.push(0);  // add for space before 1st container
  // console.log(containertops);
  for (var i = 0; i < containers.length; i++) {
    containertops.push(containers[i].offsetTop);
    // console.log(containertops);
  }
  console.log(containertops);
  
  // array of colours to use
  var colours = [
    "color-1",
    "color-2",
    "color-3",
    "color-4",
    "color-5",
  ];
  
  function showScrollColorChange() {
    // loop through the containers and add a new colour as the containers change
    for (var i = 0; i < containertops.length; i++) {
       
       // if this container is at the top of the screen get a new colour class
      if ( document.documentElement.scrollTop >= containertops[i]-30) {  
        document.body.className = '';  // clear class      
        document.body.classList.add(colours[i]);
      }
    }
  };
  

  window.addEventListener("scroll",function(){
   // console.log(document.body.scrollTop);
   // console.log(document.documentElement.scrollTop);
    showScrollColorChange()
  })

 
  