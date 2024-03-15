const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMcontentLoaded",initializeSlider);
// console.log(slides);
initializeSlider();
function initializeSlider (){
    if(slides.length > 0){
    slides[slideIndex].classList.add("displaySilde");
    intervalId = setInterval(next , 5000);
}
}

function showSlide (index) {
    if(index >= slides.length) {
        slideIndex =0;
    }
    else if (index < 0) {
        slideIndex = slides.length-1;
    }
    slides.forEach (slide => {
        slide.classList.remove("displaySilde");
    })
    slides[slideIndex].classList.add("displaySilde");
    console.log(slideIndex);
}

function previous (){
    slideIndex--;
    showSlide(slideIndex);
}

function next (){
slideIndex++;
showSlide(slideIndex);
}