//a diferenca de um pro outro é que:

//esse primeiro vai imprimir diretamente a string
const nome = "Cael";
//'cael'

//E aqui vai imprimir o objeto String
const nome2 = new String("cael");
//String ('cael')

//Da pra brincar bastante com Strings

//pegar o tamanho da palavra da string
console.log(nome.length);

//Ou acessar a string como se fosse um array
console.log(nome[2]);

//ou pra pegar a ultima letra
console.log(nome[nome.length - 1].toUpperCase());

//isso ai tudo acima dava pra fazer com "charAt"

//--------------------------------------------------------------//

const frutas = ["banana", "maça", "pera", "morango"];
const listaFrutas = "melancia, uva, goiaba";

//verifica se na lista tem ''incluso'' a banana #laele
// console.log(frutas.includes('banana'))

// console.log(listaFrutas.startsWith('c'));
console.log(listaFrutas.endsWith("e"));

//--------------------------------------------------------------------------//

//O slide ele é tipo o chartAt e o array na palavra, so que vc consegue pegar um inicial e um final. por ex

const nomes = "cael julia rita";

//aqui ele imprime do C que é a posição 0 ate a J que é a posição 6
console.log(nomes.slice(0, 6));

console.log(nomes.slice(-4)); //imprime os ULTIMOS 4 letras

//diferente disso aqui:
console.log(nomes.slice(0, -2)); //aqui ele vai TIRAR os ultimos 2

//-------------------------------------------------------------------------------//

//index of é mostrar a posição (indexOf = do primeiro e lastIndexOf = do ultimo)

const nomeCompleto = "cael santos santana";

//pega o primeiro que achar   
console.log(nomeCompleto.indexOf("a"));

//pega o ultimo
console.log(nomeCompleto.lastIndexOf("a"));

//----------------------------------------------------------------------------------//
//esse PARDSTART funciona pra deixar igual o tamanho do texto referente aos demais
//no caso ai, iguala ao inicio
const games = ["megadriver", "playstation", "pcismo"];

games.forEach((game) => {
  console.log(game.padStart(30, '-'));
});

//e aqui ele deixa os tracos ao final pra deixar tudo ocupando o mesmo espaço
const games2 = ["megadriver", "playstation", "pcismo"];

games.forEach((game) => {
  console.log(game.padEnd(30, '-'));
});

//-----------------------------------------------------------------//

//parece que o repeat so funciona nesse caso para strings (testei com number e nao foi)
const numeros = '1';

console.log(numeros.repeat(5));


//--------------------------------------------------------------------------//
//regular expression /[]/+g, "oq tu quer";


const frase = 'cael quer usar virugla em tudo';

console.log(frase.replace(/[ ]+/g, ', '));


const pc = 'o pc custa 5.000 reais'

console.log(pc.replace('.', ','));

//--------------------------------------------------------------------------------//
//SPLIT
//transforma em array a tring de acordo o comando


const listaDeBanda = 'messhuggah chevelle slipknot korn';

//'messhuggah', 'chevelle', 'slipknot', 'korn'

arrayBandas = listaDeBanda.split(' ');


const htmlTexto = '<div> cael </div> <div> julia </div> <div> dinho </div>';
const arrayHtml = htmlTexto.split('div');
const novoHtml = arrayHtml.join('section');


//---------------------------------------------------------------remove os espaços do inicio e do fim//
const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'

