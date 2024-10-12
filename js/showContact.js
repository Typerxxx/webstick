let contactUs = document.getElementById('contact-us');
let contactModal = document.getElementById('contactModal');
let contactCross = document.getElementById('contactCross');
let movLabels = document.getElementsByClassName('mov');
let contactInputs = document.getElementsByClassName('contact_input');
const contactPhoneInput = document.querySelector("#contact_input_phone");
const phoneLabel = document.getElementById('phoneLabel');

for(let i = 0; i < movLabels.length; i++){
    contactInputs[i].addEventListener('focus', () => {

        movLabels[i].classList.add('moveToTop');
    }, true)

    contactInputs[i].addEventListener('blur', () => {
        movLabels[i].classList.remove('moveToTop');
    }, true)

    contactInputs[i].onchange = (e) => {
        if(e.target.value == ''){
            movLabels[i].style.marginBottom = "0px";
            movLabels[i].style.fontSize = '24px';
            movLabels[i].style.color = '#A8A8A8';

        }
        else{
            movLabels[i].style.marginBottom = "30px";
            movLabels[i].style.fontSize = '16px';
            movLabels[i].style.color = '#212529';
        }
    } 
    

}

contactUs.onclick = () => {
    contactModal.style.display = 'block';
    contactModal.style.opacity = 1;
}

contactCross.onclick = () => {
    contactModal.style.opacity = 0;
    setTimeout(() => {
        contactModal.style.display = "none";
    },500)
}






 