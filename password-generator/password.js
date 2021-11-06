const resultE1=document.querySelector("#result")
const clipboardE1=document.querySelector("#clipboard")
const numberE1=document.querySelector("#number")
const uppercaseE1=document.querySelector("#uppercase")
const lowercaseE1=document.querySelector("#lowercase")
const lengthE1=document.querySelector("#length")
const symbolE1=document.querySelector("#symbol")
const GenPasswordE1=document.querySelector(".GenPassword")



var randFunc = {
    lower : generateRandomLowercase,
    upper : generateRandomUppercase,
    symbol : generateRandomSymbol,
    number: generateRandomNumber
}
// console.log(randFunc.number);
// console.log(randFunc[lower]());

GenPasswordE1.addEventListener("click",()=>{
    const length=lengthE1.value;
    // console.log(length);
    const haslower=lowercaseE1.checked
    // console.log(haslower);
    const hasUpper=uppercaseE1.checked
    // console.log(hasUpper);
    const hasSymbol=symbolE1.checked;
    // console.log(hasSymbol);
    const hasNumber=numberE1.checked;
    // console.log(hasNumber);
    resultE1.innerText=generatePassword(hasNumber,haslower,hasUpper,hasSymbol,length);
})

function generatePassword(number,lower,upper,symbol,length){
    // console.log(length);
    let generatedPassword=" ";
    let typeCount=number+lower+upper+symbol;
    // console.log(typeCount);
    const typesArr = [{lower},{ upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
    //  console.log(typesArr);

    if(typeCount == 0){
        return " "
    }
    // console.log("7");
    for(let i=0;i<length;i+=typeCount){
        typesArr.forEach((type)=>{
            const funcName=Object.keys(type)[0]
            console.log(funcName);
          
            generatedPassword+= randFunc[funcName]();
            
        })
     
    }
    const finalPassword=generatedPassword.slice(0,length);
    return finalPassword
}




// function to copy
clipboardE1.addEventListener("click",()=>{
    const textarea=document.createElement('textarea')
    const password=resultE1.textContent;
    if(!password){
        return
    }
    textarea.value=password;
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')

})



// func to generate random number
function generateRandomNumber(){
     let rnum=String.fromCharCode(Math.floor(Math.random()*10+48))
     return rnum;

}
// generateRandomNumber()
// func to generate random lowercase
function generateRandomLowercase(){
    let Lcase=String.fromCharCode(Math.floor(Math.random()*26+97))
    return Lcase;

}
// generateRandomLowercase()

// func to generate random uppercase
function generateRandomUppercase(){
    let Ucase=String.fromCharCode(Math.floor(Math.random()*26+67))
    return Ucase;

}
// generateRandomUppercase()

// func to generate randomsymbol
function generateRandomSymbol(){
   let symbol= '!@#$%^&*(){}[]=<>/,.';
   return symbol[Math.floor(Math.random()*symbol.length)];
}
generateRandomSymbol()