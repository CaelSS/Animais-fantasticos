

//--------------------------------------------------------------------------
//  1º =>: Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

//seleciono os links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
    event.preventDefault();

    linksInternos.forEach((link) => {
        link.classList.remove("ativo");

    })
    event.currentTarget.classList.add("ativo");


}

linksInternos.forEach((link) => {

    link.addEventListener('click', handleLink);

})


//--------------------------------------------------------------------------
// 2º => Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados


//R=> Seleciono o Body
// const todosElementos = document.querySelectorAll('body *');

// function handleElement(event){

//     console.log(event.currentTarget);
// }
// //vou passear por todos os elementos e
// todosElementos.forEach((item) => {

//     item.addEventListener('click', handleElement)

// })


//--------------------------------------------------------------------------

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// const todosElementos = document.querySelectorAll('body *');

// function handleElement(event){

//     event.currentTarget.remove();
// }
// //vou passear por todos os elementos e
// todosElementos.forEach((item) => {

//     item.addEventListener('click', handleElement)

// })

//----------------------------------------------------------------------------------

//3º=> Se o usuário clicar na tecla (t), aumente todo o texto do site.
//R:

function handleKeyboard(event){

    if(event.key === 't'){
        console.log('clicou t')
      document.documentElement.classList.toggle('textomaior');
    }
 
}


window.addEventListener('keydown', handleKeyboard);



















// window.addEventListener('resize', function(){
// alert("Ainda estou adicionando responsividade ao site. Por favor, aguarde as próximas atualizações.")
// })

// const img = document.querySelector('img');
// img.addEventListener('click', callback)


// function callback(){
//     console.log('clicou');
// }