let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.nav');
let back = document.querySelector('body');
let header__list = document.querySelector('.nav__button');
let header = document.querySelector('.header');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
    header.classList.toggle('active');
}

header_menu.onclick = function () {
    header_menu.classList.remove('active');
    header__burger.classList.remove('active');
    header.classList.remove('active');
    back.classList.toggle('lock');
}

//window.onscroll = function () {
//    let i = event.scrollTop;
//    console.log(i);
//    if (i <= window.innerHeight) {
//        header.style.backgroundColor['opacity'] = i/100;
//    }
//}
//


