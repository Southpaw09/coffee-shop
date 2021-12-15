'use strict';

const icon = document.querySelector('.icon');
const navLinks = document.querySelector('#links');
icon.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
})