# Password genertaor

## Random function 
firstly we need to write code for generating random values fo Number,lowercase,uppercasea and symbol
Here is the function  to generate random value respectively 
```javascript
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

```
## selecting Dom element

Now we will select the element that we need, using DOM concept :

```javascript
const resultE1=document.querySelector("#result")
const clipboardE1=document.querySelector("#clipboard")
const numberE1=document.querySelector("#number")
const uppercaseE1=document.querySelector("#uppercase")
const lowercaseE1=document.querySelector("#lowercase")
const lengthE1=document.querySelector("#length")
const symbolE1=document.querySelector("#symbol")
const GenPasswordE1=document.querySelector(".GenPassword")

```

# checking for what the user has checked
This code will return "true" if it is checked otherwise "false"
```javascript
element.checked
```

This code snippet will check all the is checked or not
```javascript
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
  (A) resultE1.innerText=generatePassword(hasNumber,haslower,hasUpper,hasSymbol,length);
})
```
>At " A" position we are calling generatepassword function and passing the checked  value as argument to function

### Here we declared a randFunc  as we progress to write our generate function we will use it :

```javascript
var randFunc = {
    lower : generateRandomLowercase,
    upper : generateRandomUppercase,
    symbol : generateRandomSymbol,
    number: generateRandomNumber
}
```

# Function to generate our random password

```javascript
function generatePassword(number,lower,upper,symbol,length){
    // console.log(length);
  1.  let generatedPassword=" ";
  2.  let typeCount=number+lower+upper+symbol;
    // console.log(typeCount);
  3.  const typesArr = [{lower},{ upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
    //  console.log(typesArr);

   4. if(typeCount == 0){
        return " "
    }
    // console.log("7");
    5.for(let i=0;i<length;i+=typeCount){
    6.    typesArr.forEach((type)=>{
    7.        const funcName=Object.keys(type)[0]
    8.        generatedPassword+= randFunc[funcName]();
            
        })
     
    }
   9. const finalPassword=generatedPassword.slice(0,length);
  10.  return finalPassword
}
```
>1  we have empty string stored in generated Password

>2 This will  give the amount of true if there are two true value  it will give 2 and if three then 3

>3  Main part  of the function  or it is the Heart. 
    In array we  have object whose key it wiil be like:
     [{lower:false or true // based on checked or not},
     { upper:true/false},{number:true/false},{symbol:true/false}] and we are using filter() method to sselect only those are true

>4 It will retur nempty string if no checkbox is selected or function argument are false

>5  we are using loop for how many number is selected by the user 

>6 we are using each value of typeArr array those are true and passing to callbback function 

>7 In this callback function we are selecting the keys whose value are true in typeArr 

>8 In this code we are calling function whose value are true using the object as we created before this function 

>9 Now finalpassword will slice only the number value selected by the user

>10  finally the function return the password what we wanted 



