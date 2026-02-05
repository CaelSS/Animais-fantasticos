
export default function initAccordion() {
    //seleciona-se os DT que estao contidos como filho na classe js-accordion
    const accordionList = document.querySelectorAll(' [data-anime="accordion"] dt');
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
