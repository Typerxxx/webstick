const logo = document.getElementById('modalLogo');
const tabTitle = document.getElementById("tabTitle");
const burgerBack = document.getElementById('burgerBack');
const services = document.getElementById('services-burger');
const menuContent = document.getElementsByClassName('modal__menu');
const drops = document.getElementsByClassName('drop');
const servTabs = menuContent[1].getElementsByClassName('link');



services
    .onclick = () => {
        logo.src = "../img/chevron-left.svg"
        logo.id = "burgerBack";
        tabTitle.innerText = services.innerText;
        logo.style.cursor = 'pointer';
        logo.style.pointerEvents = 'all';
        for(let i = 0; i < menuContent.length; i++){
            menuContent[i].style.display = 'none';
        }
        menuContent[1].style.display = 'block';

    }

    
logo
    .onclick = () => {
        if(tabTitle.innerText=='Послуги'){
            logo.src = "./img/Logo.png";
            tabTitle.innerText = "";
            for(let i = 0; i < menuContent.length; i++){
                menuContent[i].style.display = 'none';
            }
            menuContent[0].style.display = 'block';
        }
        else if(tabTitle.innerText != 'Послуги' && tabTitle.innerText){
            tabTitle.innerText = 'Послуги';
            for(let i = 0; i < menuContent.length; i++){
                menuContent[i].style.display = 'none';
            }
            menuContent[1].style.display = 'block';
        }
    }


for(let i = 0; i < servTabs.length; i++){
    servTabs[i].onclick = () => {
        menuContent[1].style.display = 'none'
        drops[i].style.display = 'block';
        tabTitle.innerText = "";
        tabTitle.innerHTML = servTabs[i].innerText;
        
    }
}


