burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightNav = document.querySelector('.rightNav');
navlist = document.querySelector('.nav-list');

burger.addEventListener('click',()=>{
    navlist.classList.toggle('v-class');
    rightNav.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');

})

