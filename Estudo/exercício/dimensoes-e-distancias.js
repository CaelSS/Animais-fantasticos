
// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImagem = document.querySelectorAll('img');
primeira = primeiraImagem[primeiraImagem.length - primeiraImagem.length];

primeira.offsetTop;
//resposta 173



// Retorne a soma da largura de todas as imagens
let soma = 0;
primeiraImagem.forEach((item) => {
    soma += item.width;
})


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const link = document.querySelectorAll('a');
link.forEach((item)=>{
    const linkLargura = item.offsetWidth;
    const linkAltura = item.offsetHeight;
   
 if(linkAltura >= 48 && linkLargura >= 48){
    console.log(link, "eita desgraça");
 }else{
    console.log(link, 'rapaz, deu bom');
 }

})
 


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu


const mobile = window.matchMedia('(max-width: 720px)').matches;
const menu = document.querySelector('.menu');
    console.log(!!mobile)

if(mobile){
    
    menu.classList.add('menu-mobile');
}


























// //pego o tamanho da altura do elemento esecolhido


// const listAnimais = document.querySelector('.animais-lista');
// const height = listAnimais.offsetTop;
// console.log(height);

// const raposah2 = document.querySelector('h2');
// const h2left = raposah2.offsetLeft;

// // da pra usar uma funcao pra pegar os metodos dentro pra saber os valores

// const rect = raposah2.getBoundingClientRect();

// rect.bottom;
// rect.height;

// //dai so por no console e etc pra saber os valores.

// //da pra saber valores da tela do usuario tbm abaixo:


// console.log(

//   window.innerWidth,
//   window.innerHeight


// )