export default class funcionamento {
  constructor(funcionamento, activeClass) {
    this.funciona = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }
  dadosFuncionamento() {
    this.diaSemana = this.funciona.dataset.semana.split(",").map(Number);
    this.horaSemana = this.funciona.dataset.horario.split(",").map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horaAgora = this.dataAgora.getUTCHours() - 3 ;
  }

  estaAberto() {
    const OpenClose = this.diaSemana.indexOf(this.diaAgora) !== -1;
    const horaFuncio =
      this.horaAgora >= this.horaSemana[0] &&
      this.horaAgora < this.horaSemana[1];
    return OpenClose && horaFuncio;
  }

  ativoAberto() {
    if (this.estaAberto()) {
      this.funciona.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funciona) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.estaAberto();
      this.ativoAberto();
    }
    return this;
  }
}
