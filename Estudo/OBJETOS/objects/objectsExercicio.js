const carro3 = ["fusca", "vectra", "palio"];
const somar = function (a, b) {
  return a + b;
};

const pessoa = {
  nome: "Cael",
  idade: 30,
  escolaridade: "ensino superior completo",

  peidar() {
    return this.nome + "peidou!";
  },
};

// Crie uma função que verifique
// corretamente o tipo de dado

const verificadora = function (tipo) {
  return Object.prototype.toString.call(tipo);
};

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {};
Object.defineProperties(quadrado, {
  lado: {
    value: 4,
    enumerable: true
  }
});

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));