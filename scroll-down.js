let className = 'header-scroll';
let scrollTrogger = 100;

window.onscroll = function(){
    if (window.screenY >= scrollTrogger || window.pageYOffset >= scrollTrogger) {
        document.getElementsByTagName('header')[0].classList.add(className);
    }else{
        document.getElementsByTagName('header')[0].classList.remove(className);
    }
}