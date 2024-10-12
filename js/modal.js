let modal = document.getElementById('modal');
let burgerMenu = document.getElementById('burger');
let cross = document.getElementById('cross');
let body = document.querySelector('body');


burgerMenu.addEventListener('click', () => {
    body.style.overflow = 'hidden';
    modal.style.display = 'block';
})

cross.addEventListener('click', () => {
    modal.style.display = 'none'
    body.style.overflow = 'unset';

})