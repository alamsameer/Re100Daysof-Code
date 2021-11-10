const tick = document.querySelectorAll(".tick");
const question = document.querySelector(".ques");
const option = document.querySelectorAll(".option");
const submit = document.querySelector(".submit");
window.addEventListener("DOMContentLoaded", () => {
  tick.forEach((each) => {
    each.checked = false;
  });
});
let questions = [
  {
    ques: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correct: "d",
  },
  {
    ques: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    correct: "b",
  },
  {
    ques: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Helicopters Terminals Motorboats Lamborginis",
    ],
    correct: "a",
  },
  {
    ques: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "none of the above"],
    correct: "b",
  },
];
let score = 0;
let Qno = 0;
function setques() {
  if (Qno < questions.length) {
    question.textContent = questions[Qno].ques;
    option.forEach((each, i) => {
      each.textContent = questions[Qno].options[i];
    });
  }
}
setques();
submit.addEventListener("click", () => {
  ++Qno;
  tick.forEach((each) => {
    each.checked = false;
  });
  console.log(" clicked");
  if (Qno < questions.length) {
  
    setques();
  } else {
    alert("you have completed the quiz"+"    "+"your score is :"+" "+score)
    location.reload()
    return;
  }
});
tick.forEach((each) => {
  each.addEventListener("click", (e) => {
    if (e.currentTarget.id === questions[Qno].correct) {
      ++score;
      console.log("i am input");
      console.log(score);
    }
  });
});
