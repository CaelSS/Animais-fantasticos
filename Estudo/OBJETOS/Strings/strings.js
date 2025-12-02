//a diferenca de um pro outro é que:

//esse primeiro vai imprimir diretamente a string 
const nome = 'Cael';
//'cael'

//E aqui vai imprimir o objeto String
const nome2 = new String('cael');
//String ('cael')


//Da pra brincar bastante com Strings

//pegar o tamanho da palavra da string
console.log(nome.length);


//Ou acessar a string como se fosse um array
console.log(nome[2]);

//ou pra pegar a ultima letra
console.log(nome[nome.length -1].toUpperCase());

//isso ai tudo acima dava pra fazer com "charAt"

//--------------------------------------------------------------//


const frutas =['banana', 'maça', 'pera', 'morango'];
const listaFrutas = 'melancia, uva, goiaba';

//verifica se na lista tem ''incluso'' a banana #laele
// console.log(frutas.includes('banana'))



// console.log(listaFrutas.startsWith('c'));
console.log(listaFrutas.endsWith('e'))
