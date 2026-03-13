export default class Accordion {
  constructor(lista) {
    this.accordionList = document.querySelectorAll(lista);
    this.activeClass = "ativo";
  }

  //metodo que acontece no evento
  activeAccordion(item) {
    item.classList.toggle("ativo");
    item.nextElementSibling.classList.toggle("ativo");
  }

  //adiciona os eventos aos accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.activeAccordion(item));
    });
  }

  //inicia a funcao
  init() {
    if (this.accordionList.length) {
      //ativar primeiro item
      this.activeAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
