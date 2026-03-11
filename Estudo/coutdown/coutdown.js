export default class Countdown {

  //recebe a data futura
  constructor(futureDate) {
    this.futureDate = futureDate;
  }
  //retorna a data futura
  get _futureDate() {
    return new Date(this.futureDate);
  }
  //retorna a data atual
  get _actualDate() {
    return new Date();
  }
  //pega o tempo que ha entre elas duas
  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime();
  }

  //converte esse tempo pra dias
  get days() {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
  }
  //converte esse tempo pra horas
  get horas() {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
  }

  //converte esse tempo pra minutos
  get minutos() {
    return Math.floor(this._timeStampDiff / (60 * 1000));
  }

  //converte esse tempo pra segundos
  get segundos() {
    return Math.floor(this._timeStampDiff / 1000);
  }

  get total(){

    const days = this.days;
    const horas = this.horas % 24;
    const segundos = this.segundos;
    //retorno um objeto que tenha, dias, horas e segundos como retorno.
    return {
      days,
      horas,
      segundos

    };

  }

}

