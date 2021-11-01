# JavaScript code  
### About the project
In this project the background of body will change as the user scroll down or scroll up <br>
 In this article we will see the concept and how it is used.
 <br>
There is two different approach for this project:-<br>
 1. scroll eventlistener
 1. new IntersectionObserver() constructor method


## scroll eventlistener method

> concept <br>
 
* offsetTop :- It will return the top position (in pixel) relative to the top of the offsetParent element.

 ```javascript
console.log( section.offsetTop)
// return the offsetTop of the section 
```
* document.documentElement.scrollTop :-Returns the scrollbar location on screen,for every scroll it give differnt scroll bar position in pixels.
<br>
```javascript
document.documentElement.scrollTop 
```
## working of  code
we have selected all the element having containers class

```javascript
 const containers = document.getElementsByClassName("containers");
```
 And then we create a array containerstos which store offsettop value of every element .we have used for loop to loop through every element so that we have aa; offsetTop value of each element
```javascript
 var containertops = [];
  console.log(containertops);
  for (var i = 0; i < containers.length; i++) {
    containertops.push(containers[i].offsetTop);
  }
```
we have another array colours which contain classe and we will use to add to body whenever scroll event run
```javascript
 var colours = [
    "color-1",
    "color-2",
    "color-3",
    "color-4",
    "color-5",
  ];
```
Now we have Function which will run as scroll bar event work.
In the function we  use  a for loop to the length of containerstops array which have all offsetTop value  <br>
every time we scroll this function will check the scroll bar position and the offsetTop value of the element  and <br> if the the value of scroll bar is greater then the offsetTop value of the element the n it remove the class in the body  elemnetn  and add the calss of that number to body
```javascript
 function showScrollColorChange() { 
    for (var i = 0; i < containertops.length; i++) {
      if ( document.documentElement.scrollTop >= containertops[i]-30) {  
        document.body.className = '';  // clear class      
        document.body.classList.add(colours[i]);
      }
    }
  };
```
Here is the eventlistener which will call  function on scroll . 
```javascript
  window.addEventListener("scroll",function(){
    showScrollColorChange()
  })
```
# Approach 2

 ## concept used :-
   new IntersectionObserver(callback,options)
   his constructor method have a  callback function and options
   syntax:
   ```javascript
   new IntersectionObserver(callback,options)
   ```

   ## working code
  we  have defined section variable contain all the element with calss of containers
  <br>
 we have opotions having propertry __thershold__(it is the value after which observer start observing content ex:- if value is .25 then after 25% content  is inside the viewport  wil be triggered )
 <br>
 __rootMargin__ work as same as margin of css the function wil trigger after or befor the viewport accorrding to the valuue give to rootNargin

   ```javascript
   const sections=document.querySelectorAll(".containers")
const options={
    thershold:.8,
    rootMargin: "200px 0px 0px 100px ",
    
}
   ```

```javascript
let sectionobserver=new IntersectionObserver(function(entries,observer){
    console.log(entries);
    entries.forEach((entry)=>{
        // console.log(entry.target);
        if(entry.isIntersecting){
            // document.body.classList.add("color-2")
            if(entry.target.classList.contains("section1")){
                console.log(" i am section1");
                document.body.classList=" "
                document.body.classList.add("color-1")
            }
            else if(entry.target.classList.contains("section2")){
                console.log(" i am section2");   
                document.body.classList=" "
                document.body.classList.add("color-2")
            }
            else if(entry.target.classList.contains("section3")){
                console.log(" i am section3"); 
                document.body.classList=" "
                document.body.classList.add("color-3")
            }
            else if(entry.target.classList.contains("section4")){
                console.log(" i am section4"); 
                document.body.classList=" "
                document.body.classList.add("color-4")
            }
            else{
                console.log(" iam section 5");
                document.body.classList=" "
                document.body.classList.add("color-5")
            }
        }
    }  )
})
```
Now we have sections which contains all element and fo every element ,we are observing them 
```javascript
sections.forEach(function(entry){
    sectionobserver.observe(entry)
})
   
```