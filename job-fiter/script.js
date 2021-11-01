let Arr = [
  {
    img: "./images/account.svg",
    Cname: "photoshop",
    Jtitle: "Senior Frontend Developer",
    day: "1d ago",
    Jtype: "part-time",
    area: "Remote",
    skills: ["HTML", "css", "javascript"],
  },

  {
    img: "./images/eyecam-co.svg",
    Cname: "manage",
    Jtitle: "Fullstack developer",
    day: "1d ago",
    Jtype: "part-time",
    area: "Remote",
    skills: ["fullstack", "midweight", "python"],
  },
  {
    img: "./images/faceit.svg",
    Cname: "Account",
    Jtitle: "junior Frontend Developer",
    day: "1d ago",
    Jtype: "part-time",
    area: "Remote",
    skills: ["linux", "fullstack", "python"],
  },
  {
    img: "./images/loop-studio.svg",
    Cname: "myHome",
    Jtitle: "senior frontend developer",
    day: "1d ago",
    Jtype: "part-time",
    area: "Remote",
    skills: ["fullstack", "React", "senior"],
  },
  {
    img: "./images/manage.svg",
    Cname: "loop studio",
    Jtitle: "software engg",
    day: "1d ago",
    Jtype: "part-time",
    area: "Remote",
    skills: ["frontend", "junior", "React"],
  },
  {
    img: "./images/myhome.svg",
    Cname: "faceit",
    Jtitle: "junior backend developer",
    day: "1d ago",
    Jtype: "part-time",
    area: "Remote",
    skills: ["frontend", "junior", "Ruby"],
  },
];
const jobDetail= document.querySelector(".jobDetail");
const skill = document.querySelector(".skills");
const filterIcon=document.querySelector(".filterIcon")
const searchList=document.querySelector(".searchList")
const selected=document.querySelector(".filtered")
let input = document.querySelectorAll("input"); 
let checkboxes = document.querySelectorAll(".checkboxes"); 
let html=document.querySelector("#html")
filterIcon.addEventListener("click",()=>{
  console.log("yuo have just clicked filter");
  searchList.classList.toggle("none")

})
window.addEventListener("DOMContentLoaded", () => {
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }
  let output;
  let joblis = Arr.map((each, i) => {
    output = `   <div class="detail">
       <div class="img">
           <img src=${each.img} alt="">
       </div>
       <div class="desc">
           <p class="company-name">${each.Cname}</p>
           <h3 class="font">${each.Jtitle}</h3>
           <p ><span class="day">${each.day}</span><span class="job-type">${each.Jtype}</span><span class="area">${each.area}</span></p>
       </div>
       <div class="underline"></div>
       <div class="skills">
       <button>${each.skills[0]}</button>
       <button>${each.skills[1]}</button>
       <button>${each.skills[2]}</button>
       </div>
   </div>`;
    return output;
  });
  jobDetail.innerHTML = joblis;
});


let filterItem=document.querySelector(".filter-item")
filterItem.addEventListener("click", checked);
function checked() {
  var checkedValue = [];
  for (var i = 0; i < input.length; ++i) {
    if (input[i].checked) {
      checkedValue.push(input[i].value);
    }
  }
  DisplayChecked(checkedValue);
  filtered(checkedValue);
}

function DisplayChecked(checkedValue) {
  let selectedValue=checkedValue.map((each)=>{
       let value="";
       value +=`<button>${each}</button>` 
    return value
  })
 
 selected.innerHTML=selectedValue;
}
function filtered(checkedValue) {

  var newArr = [];
  for (let i = 0; i < checkedValue.length; i++) {
    newArr = Arr.filter((each) => {
      return each.skills.indexOf(checkedValue[i]) >= 0; // i have questio for this behaviour
    });  
  }
 
  let output;
  let joblis = newArr.map((each, i) => {
    output = `   <div class="detail">
       <div class="img">
           <img src=${each.img} alt="">
       </div>
       <div class="desc">
           <p class="company-name">${each.Cname}</p>
           <h3 class="font">${each.Jtitle}</h3>
           <p ><span class="day">${each.day}</span><span class="job-type">${each.Jtype}</span><span class="area">${each.area}</span></p>
       </div>
       <div class="underline"></div>
       <div class="skills">
       <button>${each.skills[0]}</button>
       <button>${each.skills[1]}</button>
       <button>${each.skills[2]}</button>
       </div>
   </div>`;
    return output;
  });
 jobDetail.innerHTML=joblis
  
}
