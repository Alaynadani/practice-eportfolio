// template_3wo0ota
//service_mvhl68a
//o2lWsGis6MT1cppyJ

console.log('index.js loaded');

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += ' modal__overlay--visible'

    emailjs
        .sendForm(
            'service_mvhl68a',
            'template_3wo0ota',
            event.target,
            'o2lWsGis6MT1cppyJ'
        ).then(() => {            
            loading.classList.remove('modal__overlay--visible');
            success.classList += " modal__overlay--visible";
        })  .catch (() => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                "The email service is temporarily unavailable."
            )
        })
        
    
    
   
        
        console.log('it worked 1')
   
}

const form = document.getElementById('contact__form');
form.addEventListener('submit', contact);