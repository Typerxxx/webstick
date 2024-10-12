let service = document.getElementById('services')
let popup = document.getElementById('header__popup')
let btn = document.getElementsByClassName('header__info-btn')[0]
let headerInfo = document.getElementById('header__info');
let links = document.getElementsByClassName('header-link');
let headerWrapper = document.getElementById('header__wrapper');

const show = () => {
        popup.style.display = "flex"
        header.className = "header bright" 
        btn.classList.remove('btn-white')
        btn.classList.add('btn-black')
        service.children[0].children[0].style.transform = 'rotate(180deg)'
}


const hide = () => {
        popup.style.display = 'none'
        header.classList = "header bright"
        header.classList.remove("bright")
        btn.classList.remove('btn-black')
        btn.classList.add('btn-white')
        service.children[0].children[0].style.transform = 'rotate(0deg)'

}


if (window.scrollY < 500){

    for(let i = 0; i < links.length; i++){
        links[i].onmouseover = () => {
            hide();
        }
    }
    
    
    
    btn.onmouseover = () => {
        hide();
    
    }
    
    service.onmouseover = () => {
            show();
    }
    
    
    
    popup.onmouseover = () => {
        show();
    }
    
    
    popup.onmouseout = () => {
        hide();
    }
    
}


