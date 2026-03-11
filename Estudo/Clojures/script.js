debugger;
function contagem() {
  let total = 0;

  return function incrementar() {
    total++;
    console.log(total);
  };
}

const ativarIncremento = contagem();
ativarIncremento();
