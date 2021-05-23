// function for when scroll interactions are added


let box = document.querySelectorAll(".box");



window.addEventListener("scroll", () => {
    animateOnScroll(box)
});


function animateOnScroll(el){
    for(let i = 0; i < el.length; i++){

let boxPosition = el[i].getBoundingClientRect().top;
let screenPosition = window.innerHeight /1;  

    if (boxPosition < screenPosition){
        el[i].classList.add("active");
    } else {
        el[i].classList.remove("active");
    }
    
}}


