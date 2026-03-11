export default function funcionamento() {
  const funciona = document.querySelector("[data-semana]");
  const diaSemana = funciona.dataset.semana.split(",").map(Number);
  const horaSemana = funciona.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horaAgora = dataAgora.getHours();

  const OpenClose = diaSemana.indexOf(diaAgora) !== -1;

  const horaFuncio = horaAgora >= horaSemana[0] && horaAgora < horaSemana[1];

  if (OpenClose && horaFuncio) {
    funciona.classList.add("aberto");
  }
}
