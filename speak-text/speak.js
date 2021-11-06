const playButton=document.getElementById("play-button")
const pauseButton=document.getElementById("pause-button")
const stopButton=document.getElementById("stop-button")
const textInput=document.getElementById("text")
const speedInput=document.getElementById("speed")
let currentIndex;
console.log(speedInput.value);

const utterrance=new SpeechSynthesisUtterance()

utterrance.addEventListener("end",()=>{
    textInput.disabled=false
})
utterrance.addEventListener("boundary",e=>{
    currentIndex= e.charIndex
})

speedInput.addEventListener("input",()=>{
   stopText();
   playText(utterrance.text.substring(currentIndex))
})



playButton.addEventListener("click",()=>{
    playText(textInput.value)
})


pauseButton.addEventListener("click",()=>{
    pauseText()
})


stopButton.addEventListener("click",stopText)


 function playText(text){
     if(speechSynthesis.paused && speechSynthesis.speaking){
         return speechSynthesis.resume()
        }
        if(utterrance.speaking) return
        utterrance.text=text
        utterrance.rate=speedInput.value || 1;
    textInput.disabled=true
    speechSynthesis.speak(utterrance)
}
function pauseText (){
    if(speechSynthesis.speaking){ speechSynthesis.pause()}
}
function stopText(){
    speechSynthesis.resume();
    speechSynthesis.cancel();
}
