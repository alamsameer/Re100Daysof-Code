console.log("get ajax data");
const container=document.querySelector(".joke-container")
const get=document.querySelector(".get")
get.addEventListener("click",getJoke)

function getJoke(){
    let output=" "
    var xhr=new XMLHttpRequest()
xhr.open("GET",'https://official-joke-api.appspot.com/random_joke',true)
xhr.onload=function(){
    let joke=JSON.parse(this.responseText)
    console.log(joke);
    console.log(joke);
    output=`<div class="joke">
    <h3>${joke.setup}</h3>
    <h6 class="punchline">${joke.punchline}</h6>
</div>
    `
  container.innerHTML=output
}
xhr.send()

}

getJoke()