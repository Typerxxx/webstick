let headerCas = document.getElementById("header");
let myBtn = document.getElementsByClassName("header__info-btn")[0];
let topPos = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY >= topPos) {
    topPos = Math.round(window.scrollY);
    if (window.scrollY > 500) {
        headerCas.classList = "header sticky bright";
        myBtn.classList = "header__info-btn btn-black";
    } else {
        headerCas.classList = "header";
        myBtn.classList = "header__info-btn btn-white";
    }
  } else {
    topPos = Math.round(window.scrollY);
        headerCas.classList = "header";
        myBtn.classList = "header__info-btn btn-white";    
  }
});
