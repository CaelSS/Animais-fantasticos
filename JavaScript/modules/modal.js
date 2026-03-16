export default class Modal {
  constructor(btnAbrir, btnFechar, mdMsg) {
    this.botaoAbrir = document.querySelectorAll(btnAbrir);
    this.botaoFechar = document.querySelector(btnFechar);
    this.modalMensagem = document.querySelector(mdMsg);
    //bind this ao call para fazer referencia ao objeto da classe

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickForaModal = this.clickForaModal.bind(this);
  }

  //abre ou fecha o modal
  toggleModal() {
    this.modalMensagem.classList.toggle("ativo");
  }

  //adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  //fecha o modal ao clicar do lado de fora
  clickForaModal(event) {
    if (event.target === this.modalMensagem) {
      this.toggleModal(event);
    }
  }

  //adiciona os eventos aos elementos do modal
  addEventModal() {
    this.botaoAbrir.forEach((botao) => {
      botao.addEventListener("click", this.eventToggleModal);
    });
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.modalMensagem.addEventListener("click", this.clickForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.modalMensagem) {
      this.addEventModal();
    }
    return this;
  }
}
