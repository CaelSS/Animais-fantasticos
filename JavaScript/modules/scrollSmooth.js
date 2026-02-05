 export default function initScrollSmooth() {

    function scrollToSection(event) {

        event.preventDefault();
        /*capturo a href do link #link*/
        const href = event.currentTarget.getAttribute('href');
        /*digo que a seção é o elemento que tenha o ''href''*/
        const section = document.querySelector(href);

        //funcao com options em objeto//
        section.scrollIntoView({

            behavior: 'smooth',
            block: 'start'
        });

    }

    //evento de botao para os links internos do site//
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    linksInternos.forEach((link) => {

        link.addEventListener('click', scrollToSection);

    })


}