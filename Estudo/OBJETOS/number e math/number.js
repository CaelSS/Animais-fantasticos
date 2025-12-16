
//-----VERIFICADORES---------//

console.log(Number.isNaN(NaN)); // aqui vai retornar true, pq ele diz ''NaN'' nao é um numero?'' entao, sim. NaN nao é um numero.
console.log(Number.isInteger(20)); //true pq sim, 20 é um numero inteiro
console.log(Number.isInteger(20.2)); //false pq esse numero é um DOUBLE ou FLOAT


//------CONVERSORES----------//

const idade = '30'; //idade declarada como string

console.log(Number.parseInt(idade));  //dai aqui converte pra um inteiro 30

const altura = '1.88 de altura'; //altura aqui ta float e ainda tem string

console.log(Number.parseFloat(altura)); //no console ele vai imprimir ''1.88'' ignorando as letras

//----Arredondarores------//

const preco = 2.99;

console.log(preco.toFixed(1));

//---------------------------------MATH---------------------------------------------------------------------------//

const numero = 5.98;

console.log(Math.abs(numero)); //converte pra numero positivo
console.log(Math.ceil(numero)); //arredonda o numero pra mais
console.log(Math.round(numero)); //arredonda pro mais proximo
console.log(Math.floor(numero)); //arredonda pra baixo


//-----max e min ---------//


console.log(Math.max(51, 32, 3, 5, 79, 12)); //me retorna o numero maior
console.log(Math.min(51, 32, 3, 5, 79, 12)); //me retorna o numero menor


//--------random---------//

console.log(Math.floor(Math.random()*100));

const max = 50;
const min = 20;

console.log(Math.floor(Math.random()+ max - min + 1)) + min;