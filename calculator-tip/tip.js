console.log("tip calculator");
const billAmount=document.querySelector("#bill-amount")
const tipPercent=document.querySelector(".tip-percent")
const custom=document.querySelector("#custom")
const people=document.querySelector("#people")
const tipAmount=document.querySelector("#tip-amount")
const totalAmount=document.querySelector("#total")
const reset=document.querySelector("#reset")

tipPercent.addEventListener("click",function(){
     const selectedTip=parseInt(event.target.textContent)
     
     //  console.log(selectedTip)
     const payedBill=parseInt(billAmount.value)
    
     var result=(selectedTip*payedBill)/100;
     tipAmount.textContent=` $ ${result}`
     console.log(people.value);
     const total =result*parseInt(people.value)
     totalAmount.textContent=` $ ${total}`
     console.log(result);
})

reset.addEventListener("click",function(){
    console.log(" i am reseting all the value");
    billAmount.value=" "
    people.value=" "
    tipAmount.textContent=" "
    totalAmount.textContent=" "
})