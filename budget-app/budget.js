console.log("her with our budget app ");
class UI {
  constructor() {
    this.budgetForm = document.querySelector("#budget-form");
    this.budgetFeedback = document.querySelector("#budget-feedback");
    this.budgetInput = document.querySelector("#budget-input");
    this.submitBudget = document.querySelector("#submit-budget");
    this.expenseForm = document.querySelector("#expense-form");
    this.expenseFeedback = document.querySelector("#expense-feedback");
    this.expenseInputItem = document.querySelector("#expense-item");
    this.expenseInputAmount = document.querySelector("#expense-amount");
    this.submitExpense = document.querySelector("#submit-expense");
    this.expenseDetail=document.querySelector("#expense-detail")
    this.totalFeedback = document.querySelector("#total-feedback");
    this.budget = document.querySelector("#budget");
    this.expense = document.querySelector("#expense");
    this.balance = document.querySelector("#balance");
    this.expenseList = document.querySelector("#expense-list");
    this.itemList = [];
    this.itemId = 0;
  }
  submitBudgetForm() {
    // console.log("you are inside class");
    const value = this.budgetInput.value;
    //  console.log(value);
    if (value === "" || value < 0) {
      // console.log("it shoul not be empty or negative");
      this.budgetFeedback.classList.add("show-item");
      this.budgetFeedback.innerHTML = `<p>This can't be empty</p>`;
      setTimeout(() => {
        this.budgetFeedback.classList.remove("show-item");
      }, 3000);
    } else {
      this.budget.textContent = value;
      this.budgetInput.value = "";
      this.showbalance();
    }
  }
  showbalance() {
    const expense = parseInt(this.totalexpense())
    // console.log(expense);
    const total = parseInt(this.budget.textContent) - expense;
    this.balance.textContent = total;
    if (total > 0) {
      this.balance.style.color = "green";
    }
    if (total < 0) {
      this.balance.style.color = "red";
    }
  }
  showExpenseForm() {
    const expenseItem = this.expenseInputItem.value;
    const expenseAmount =parseInt(this.expenseInputAmount.value);
    // console.log(expenseAmount);
    if (expenseItem == " " || expenseAmount == "" || expenseAmount < 0) {
      // console.log("it shoul not be empty or negative");
      this.expenseFeedback.classList.add("show-item");
      this.expenseFeedback.innerHTML = `<p>This can't be empty</p>`;
      setTimeout(() => {
        this.expenseFeedback.classList.remove("show-item");
      }, 3000);
    } else {
      console.log("value has been adding");
      this.expenseInputAmount.value = " ";
      this.expenseInputItem.value = " ";
      let expense = {
        id: this.itemId,
        title: expenseItem,
        amount: expenseAmount,
      };
      this.itemId++;
      this.itemList.push(expense)
      console.log(this.itemList);
      this.addExpense(expense);
      this.showbalance()
      
    }
  }
  addExpense(expense){
    const div=document.createElement("div")
    div.innerHTML=`  <div class="flex-row gap">
    <p class="title">${expense.title}</p>
    <p class="amount">${expense.amount}</p>
    <div class="btns">
      <a href="" class="edit" data-id="${expense.id}"> <i class="fas fa-edit"></i></a>
      <a href="" class="delete" data-id="${expense.id}"><i class="fas fa-trash"></i></a>
    </div>`
    this.expenseDetail.appendChild(div)
  }
  totalexpense() {
    let total=0
    console.log(this.itemList);
    if(this.itemList.length>0){
      console.log("you are outside reduce");
      console.log(this.itemList);
      total=this.itemList.reduce(function(acc,curr){
        console.log("you are inside");
        console.log(curr.amount);
        acc +=curr.amount;
        console.log(acc);
        return acc
      },0)
    }
    console.log("you are outside");
    this.expense.textContent=total

    return total

  }
  editExpense(element){
   console.log( this.itemList);
    let id=element.dataset.id;
    let parent=element.parentElement.parentElement.parentElement;
    // console.log(parent);
      //removing from Dom
      console.log( this.itemList);
    let expense =this.itemList.filter(item=>{
      console.log("we are filtering");
      item=item.id === id
      return item
    })
    console.log(expense);
    // this.expenseDetail.removeChild(parent)
    // this.expenseInputItem=expense[0].title
    // console.log(    this.expenseInputItem=expense[0].title);
    // this.expenseInputAmount=expense[0].amount
    // console.log(this.expenseInputAmount=expense[0].amount);

  }
}

function eventListener() {
  const budgetForm = document.querySelector("#budget-form");
  const expenseForm = document.querySelector("#expense-form");
  const expenseList = document.querySelector("#expense-list");
  const ui = new UI(); //declaring new instances of the classUI or intializinfg a object
  // console.log(this.budgetForm);
  console.log(expenseList);
  budgetForm.addEventListener("submit", (event) => {
    event.preventDefault();
    //  console.log("it is budget form");
    ui.submitBudgetForm();
  });
  expenseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    ui.showExpenseForm();
    // ui.totalexpense()
    // console.log("it is expense form");
  });

  expenseList.addEventListener("click", (event) => {
    event.preventDefault();
    if(event.target.classList.contains("edit")){
      ui.editExpense(event.target)
    }
    if(event.target.classList.contains("delete")){
      ui.deleteExpense(event.target)
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  eventListener();
  console.log("running event listerner");
});
