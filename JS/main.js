function initTabNav() {

    const tabmenu = document.querySelectorAll('.js-tabmenu li'); //seleciono todos elementos li que estao na classe js-tabmenu
    const tabcontent = document.querySelectorAll('.js-tabcontent section');//seleciono todas as seções que estao na classe do elemento js-tabcontent

    //faz a verificação se as sections existem e se possuem elementos dentro delas
    if (tabmenu.length && tabcontent.length) {

        ////crio a funcao que tem como parametro index. Ou seja, ela recebe um index pra funcionar. 
        function activeTab(index) {
            // ordeno que, para cada seção que tiver a classe ativo, remova.
            tabcontent.forEach((section) => {
                section.classList.remove('ativo')
            })
            //e aqui eu digo que quando a funcao for chamada, adicionar a seção que contenha o index a classe 'ativo'
            tabcontent[index].classList.add('ativo');
        }

        //outro for each que passa por cada LI e ao ser clicado na eventual LI, envie o index dela para a  funcao de adicionar index à seção
        tabmenu.forEach((li, index) => {

            li.addEventListener('click', () => {
                activeTab(index);
            })

        })

    }
}


function initAccordion() {
    //seleciona-se os DT que estao contidos como filho na classe js-accordion
    const accordionList = document.querySelectorAll(' .js-accordion dt');
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');

    //crio uma funcao que imprime  o DT clicado
    function activeAccordion() {
        //adiciona toggle porq ele faz a verificacao ''se nao tem, bota. Se tem, tira.''
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo');
    }

    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion);
    });
}


function initScrollSmooth() {

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





const sections = document.querySelectorAll('.js-scrollSmooth');
const windowHeight = window.innerHeight * 0.6;

function scrollSmooth() {

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowHeight;
        if(sectionTop < 0){
            console.log('anime ae');
            section.classList.add('ativo');
        }
    })

}

window.addEventListener('scroll', scrollSmooth)


initScrollSmooth();
initAccordion();
initTabNav();


