const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length-1];
const btnleft = document.querySelector("#btn-left");
const btnright = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.setAttribute('style','margin-left:-200%');
    slider.setAttribute('style','transition: all 0.5s');
    setTimeout(function(){
        slider.setAttribute('style','transition: none');
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.setAttribute('style','margin-left:-100%')
    }, 500);
};
btnright.addEventListener ('click', function(){next();});

function prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.setAttribute('style','margin-left:0%');
    slider.setAttribute('style','transition: all 0.5s');
    setTimeout(function(){
        slider.setAttribute('style','transition: none');
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.setAttribute('style','margin-left:-100%')
    }, 500);
};
btnleft.addEventListener ('click', function(){prev();});

// para que corra de manera automática cada 3 segundos
setInterval(function(){
    next();
}, 3000);