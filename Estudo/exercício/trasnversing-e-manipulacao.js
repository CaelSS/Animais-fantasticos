const h1 = document.querySelector('h1'); //seleciono o elemento

h1.innerHTML //seria o conteudo do html
h1.outerHTML //aqui se muda tudo inclusive o tipo do elemento

//ATIVIDADE EXERCICIO ==========================================================//


// 1) Duplique o menu e adicione ele em copy


const menu = document.querySelector('.menu'); //seleciono o menu
const cloneMenu = menu.cloneNode(true); //tiro a copia do menu

const copyright = document.querySelector('.copy'); //selciono a classe copyright tbm

copyright.appendChild(cloneMenu); //adicionei menu copiado a classe copy

//---------------------------------------------------------------------------------------//

// 2) Selecione o primeiro DT da dl de Faq

const listaFaq = document.querySelector('.faq-lista');
listaFaq.children[0]; //como é uma nodelist, da pra usar como se fosse array


//------------------------------------------------------------------------------------------//

// 3) Selecione o DD referente ao primeiro DT

listaFaq.children[0].nextElementSibling;



// 4) Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais')

listaFaq.innerHTML = animais.innerHTML; //vice versa;