'use strict';

const menu = document.querySelector('.mobile-modal');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const menuLinks = document.querySelectorAll('.modal-nav-item');
const orderBtn = document.querySelector('.order-btn')
const orderSection = document.querySelector('#order-section')
window.addEventListener('load', (event) => {
    event.preventDefault()
    menu.classList.remove('is-open')
    menu.style.transition = '0ms' 
})
function openMenu() {
    menu.style.transition = 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), visibility 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1)' 
    menu.classList.add('is-open');
}

function closeMenu() {
    menu.classList.remove('is-open');
}

function scroll(event) {
    event.preventDefault(); 

    const targetId = event.target.getAttribute('href');     
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        closeMenu();
        targetElement.scrollIntoView({ behavior: 'smooth' }); 
    }
}
function order(event) {
    event.preventDefault()
    closeMenu()
    orderSection.scrollIntoView({ behavior: 'smooth' });
}
orderBtn.addEventListener('click', order)
menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

menuLinks.forEach(link => {
    link.addEventListener('click', scroll);
});
