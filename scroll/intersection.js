console.log("hi i am new intersection");

const sections=document.querySelectorAll(".containers")
const one=document.querySelector(".section1")
const options={
    thershold:.8,
    rootMargin: "200px 0px 0px 100px ",
    
}
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
    // console.log(entries.target);
    // console.log("i am in");
})
sections.forEach(function(entry){
    sectionobserver.observe(entry)
})
   