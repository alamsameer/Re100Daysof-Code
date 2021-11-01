const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
console.log("we are here");
const items=document.querySelectorAll("h3")

let presentDate=new Date()
let presentYear=presentDate.getFullYear()
let presentMonth=presentDate.getMonth()
let presentDay=presentDate.getDate()

const futureDate=new Date(presentYear, presentMonth ,presentDay +2,1, 20, 0)

const year=futureDate.getFullYear()
const date=futureDate.getDate()
const hour=futureDate.getHours()
const minute=futureDate.getMinutes()
const second =futureDate.getSeconds()


const futureTime=futureDate.getTime();



function getRemainingTime(){
    const today=new Date().getTime()
    const timeremains=futureTime-today

    const oneDay=24*60*60*1000;
    const oneHour=60*60*1000;
    const oneMinute=60*1000;

    let days=Math.floor(timeremains/oneDay)

   let hours=Math.floor(((timeremains%oneDay)/oneHour))
   let minutes=Math.floor(((timeremains%oneHour)/oneMinute))
   let seconds=Math.floor(((timeremains%oneMinute)/1000))
   
   const values=[days,hours,minutes,seconds]

   items.forEach(function(item,index){
    item.innerHTML=format(values[index])
  })
  if(timeremains<0){
    clearInterval(countdown)
    deadline.innerHTML=`<h3 class="expired">sorry expired</h3>`
  }

  function format(item){
    if(item<10){
      return `0${item}`
    }
    else{
      return item
    }
  }

}

let countdown=setInterval(getRemainingTime,1000)