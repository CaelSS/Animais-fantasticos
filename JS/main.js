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