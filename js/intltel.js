let modalMov = document.getElementById('phoneLabel');

document.addEventListener('DOMContentLoaded', () => {
    let i = 0;
    if (typeof window.intlTelInput != 'undefined') {
        document.querySelectorAll('input[type="tel"]').forEach((item) => {
            window.intlTelInput(item, {
                initialCountry :'ua',
                separateDialCode: true,
                loadUtilsOnInit: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/utils.js",
            });
        const container = document.getElementsByClassName('iti__selected-country')[i++];
        container.style.display = 'none';

        
        item.addEventListener('focus', () => {
            setTimeout(() => {
            container.style.display = 'flex';
            },100)
        })

        item.addEventListener('blur', () => {
            if(container.style.display =='flex'){
                modalMov.style.marginBottom = "30px";
                modalMov.style.color = "black";
                modalMov.style.fontSize = '16px';
            }
         
            
        })

        document.addEventListener('click', (e) => {
            if(e.target.className != 'iti__selected-country-primary' 
            && e.target.className != 'iti__selected-dial-code' 
            && e.target.id != 'phone-input'
            && e.target.className != "iti__country" 
            && e.target.className != "iti__country-name"
            && e.target.className != "iti__dial-code"
            && e.target.className != "iti__country iti__highlight"
            && !e.target.classList.contains('iti__flag')
            && e.target.className != "iti__search-input"
            && item.value==""
            && e.target.id != 'contact_input_phone'
            ){
                container.style.display = 'none';                
            }
            
            
            
        })
        // document.addEventListener('click', (e) => {
        //     if(e.target.className != 'iti__selected-country-primary' 
        //     && e.target.className != 'iti__selected-dial-code' 
        //     && e.target.id != 'phone-input'
        //     && e.target.className != "iti__country" 
        //     && e.target.className != "iti__country-name"
        //     && e.target.className != "iti__dial-code"
        //     && e.target.className != "iti__country iti__highlight"
        //     && !e.target.classList.contains('iti__flag')
        //     && e.target.className != "iti__search-input"
        //     && input.value==""
        //     ){
        //           container.style.display = 'none';
        //         //   phoneSpan.classList.remove('toTop');
        //     }
            
        //   },true)
        
        
        });

        
    


    }
});

  