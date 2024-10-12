let inputs = document.getElementsByClassName('form-example');
let spans = document.querySelectorAll('.spans');
const dial = document.getElementsByClassName('iti__selected-country')[0];



for(let i = 0; i < inputs.length; i++){
  

  inputs[i].addEventListener('focus', () => {
    spans[i].classList.add('toTop');
  }, true)



  inputs[i].addEventListener('blur', () => {
      spans[i].classList.remove('toTop');
  }, true)

  inputs[i].onchange = (e) => {
    if(e.target.value == ""){
      spans[i].style.top = "20px";
      spans[i].style.color = "gray";
      spans[i].style.fontSize = '24px';
    }
    else{
      spans[i].style.top = "-10px";
      spans[i].style.color = "black";
      spans[i].style.fontSize = '18px';
    }
    
  }
}



