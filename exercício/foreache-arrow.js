//mostre no console cada paragrafo do site

//da pra usar o document.querySelectorAll('p')
const paragrafo = document.getElementsByTagName('p');
const paragrafos = Array.from(paragrafo);
console.log(paragrafo);

paragrafos.forEach((item) => console.log(item.innerText)); //utilizar o innertext pra pegar ''o texto interior''.


//corrigir os erros a baixo

const imgs = document.querySelectorAll('img');
//pra correção abaixo nos argumentos quando for mais de um tem que ter o parentese. Entao eu adicionei o parenteses.
imgs.forEach((item, index) => { console.log(item)});


//outro ex:
//adicionei os parenteses tbm. Mesmo que nao tenha argumento, ainda é preciso ter o parenteses.
let i = 0;
imgs.forEach (() =>{
    console.log(i++);
})


























// const imgs = document.querySelectorAll('img');


//  //isso aqui lê-se ''para cada item (forEach traducao literal). 
//  // dentro da funcao os argumentos sao 'Item', 'index' (que seria a posicao), e ooutro argumento seria o array completo dos eelementos dentro da seleção.
// imgs.forEach(function(item, index, arrayDosobjetos){

//     console.log (item);

// });

// const sub = document.getElementsByClassName('subtitulo');
// const arraySub = Array.from(sub);


// // arraySub.forEach(function(item, posicao, array){

// //     console.log(item);
// // })

// //agora utilizando arrow function


// arraySub.forEach((item) => console.log(item));