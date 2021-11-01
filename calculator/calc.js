class calculator{
    constructor(previousoperandTextElement,currentoperandTextElement){
        this.previousoperandTextElement=previousoperandTextElement;
        this.currentoperandTextElement=currentoperandTextElement;
        this.currentOperand="";
        this.previousOperand="";
        this.operation=""
        this.clear()
    }
    clear(){
        this.currentOperand='';
        this.previousOperand='';
        this.operation=undefined;
    }
    delete(){
        this.currentOperand=this.currentOperand.toString().slice(0,-1)
    }
    appendNumber(number) {
        if( number ==="."&& this.currentOperand.includes(".") )return
        this.currentOperand = this.currentOperand.toString() + number.toString()
        console.log(this.currentOperand)
      }
      chooseOperation(operation){
          if(this.currentOperand === " ")return
          if(this.previousOperand !== " "){
              this.compute()
          }
          this.operation=operation;
          this.previousOperand=this.currentOperand;
          this.currentOperand=''
      }
   compute(){
     let computation ;
       let prev=parseFloat(this.previousOperand)
       let curr=parseFloat(this.currentOperand)
       if(isNaN(prev)||isNaN(curr)) return
       switch(this.operation){
           case "+":
               computation= prev+curr;
                break
           case "-":
               computation= prev-curr;
                break
           case "/":
               computation= prev/curr;
                break
           case "*":
               computation= prev*curr;
                break
           default:return
       }
       this.currentOperand = computation;
       this.operation= undefined;
       this.previousOperand=""

   }
   updateDisplay(){
       this.currentoperandTextElement.innerText=this.currentOperand;
       this.previousoperandTextElement.innerText=this.previousOperand

   }
}

var currentOperand="oops"
const numberButtons=document.querySelectorAll("[data-number]")
const operationButtons=document.querySelectorAll("[data-operation]")
const equalButton=document.querySelector("[data-equal]")
const deleteButton=document.querySelector("[data-delete]")
const allclearButton=document.querySelector("[data-all-clear]")
const previousoperandTextElement=document.querySelector("[data-previous-operand]")
const currentoperandTextElement=document.querySelector("[data-current-operand]")
const Calculator=new calculator(previousoperandTextElement,currentoperandTextElement)
numberButtons.forEach(button => {
    button.addEventListener("click",()=>{
        // console.log(button.innerText);
        Calculator.appendNumber(button.innerText);
        Calculator.updateDisplay()
    })
});
operationButtons.forEach((button)=>{
  button.addEventListener("click",()=>{
      Calculator.chooseOperation(button.innerText)
      Calculator.updateDisplay()
  })
})

equalButton.addEventListener("click",()=>{
    console.log("clciked");
    Calculator.compute();
    Calculator.updateDisplay();
})
allclearButton.addEventListener("click",()=>{
    Calculator.clear()
    Calculator.updateDisplay()
})

deleteButton.addEventListener("click",()=>{
    Calculator.delete()
    Calculator.updateDisplay()
})