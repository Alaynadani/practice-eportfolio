// template_3wo0ota
//service_mvhl68a
//o2lWsGis6MT1cppyJ
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
    document.body.classList += " dark-theme"
}
else {
    document.body.classList.remove("dark-theme")
}
}

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
        
}

const form = document.getElementById('contact__form');
form.addEventListener('submit', contact);

function toggleModal() {
    if(isModalOpen) {
        isModalOpen = false
        document.body.classList.remove("modal--open");
        return 
        
    }
    isModalOpen = true;
    //toggle modal //
    document.body.classList.add("modal--open")
}