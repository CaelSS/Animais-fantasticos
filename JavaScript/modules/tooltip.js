export default class ToolTip {
  constructor(tool) {
    this.tooltips = document.querySelectorAll(tool);
    //bind do objeto da classe dos callbacks

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // cria a tooltip box e coloca no body
  criarToolTipBox(element) {
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = element.getAttribute("aria-label");
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  //cria a tooltip e coloca na propriedade, adicionando os eventos
  
  onMouseOver(event) {
    this.criarToolTipBox(event.currentTarget);

    event.currentTarget.addEventListener("mousemove", this.onMouseMove);
    event.currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  addToolTipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  //move a tool com base em seus estilos de acordo com a posicao do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = event.pageY + 20 + "px";
    if (event.pageY + 240 > window.innerWidth) {
      this.tooltipBox.style.left = event.pageX - 190 + "px";
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}` + "px";
    }
  }
  //remove a tool e os eventos de mousemove e mouseleave
  onMouseLeave(event) {
    if (this.tooltipBox) {
      this.tooltipBox.remove();
    }
    event.currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    event.currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  init() {
    if (this.tooltips.length) {
      this.addToolTipsEvent();
    }
    return this;
  }
}
