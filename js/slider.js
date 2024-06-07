const slides = document.querySelectorAll('.info_slider_images img');
let slideIndex = 1;
let intervalId = null;

document.addEventListener('DOMContentLoaded', initializeSlider)

function initializeSlider(){

    if((slides.length-1) > 1){
        slides[slideIndex].classList.add('display_slide');
        setInterval(nextSlide,5000);
    }

};

function showSlide(index){
    if(index > (slides.length - 1)){
        slideIndex = 1;
    }else if(index < 1){
        slideIndex = slides.length - 1;
    }


    slides.forEach(slide =>{
        slide.classList.remove('display_slide')
    })
    slides[slideIndex].classList.add('display_slide')
};

function prevSlide(){
    clearInterval(intervalId)
    slideIndex--;
    showSlide(slideIndex)
    
};

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex)
    
};