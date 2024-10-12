let tabs = document.getElementsByClassName("tech__menu-item");
let content = document.getElementsByClassName("tech__menu-content");

for(let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click',()=>{
        
        for(let j = 0; j < tabs.length; j++){
            tabs[j].classList = "tech__menu-item"
            content[j].style.display = "none"

        }

        content[i].style.display = "flex";
        tabs[i].classList += " active"


    })
}