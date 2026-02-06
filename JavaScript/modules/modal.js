export default function initModal() {

    const botaoAbrir = document.querySelectorAll('[data-set="abrir"]');
    const botaoFechar = document.querySelector('.modal .fechar');
    const modalMensagem = document.querySelector('.modal-container');

    if (botaoAbrir && botaoFechar && modalMensagem) {
        function toggleModal(event) {

            event.preventDefault();
            modalMensagem.classList.toggle('ativo');

        }

        function clickForaModal(event) {

            if (event.target === this) {
                toggleModal(event)
            }

        }

        botaoAbrir.forEach((botao)=>{
            botao.addEventListener('click', toggleModal);
        })

        botaoFechar.addEventListener('click', toggleModal);
        modalMensagem.addEventListener('click', clickForaModal);

    }

console.log(botaoAbrir);
}



