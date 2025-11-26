// 1º: Retornar no console todas as imagens do site:

const todasImagens = document.querySelectorAll('img');
console.log(todasImagens);


//2ª Retorne no console apenas imagems que começaram com a palavra 'imagem'

const imagens = document.querySelectorAll('img[src^="../img/imagem"]');
console.log(imagens);


//3ª selecionar todos links internos que começam com #

const linkInternos = document.querySelectorAll('[href^="#"]');
console.log(linkInternos);

//4º selecionar o primeiro h2 dentro da classe .animais-descrição

const aha2 = document.querySelector('.animais-descrição h2');
console.log(aha2);

//5º selcionar o ULTIMO p do site

const pe = document.querySelectorAll('p');
console.log(pe[pe.length-1])