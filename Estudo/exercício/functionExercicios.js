//EXERCICIOS DO ESTUDO SOBRE FUNCAO



// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('section p');
const arrayDeParagrafos = Array.from(paragrafos);

const soma = arrayDeParagrafos.reduce((acc, item) => acc + item.innerText.length, 0);

//com o CALL pra evitar linhas

const somaTotal = Array.prototype.reduce.call(paragrafos, (acc, item)=> {

    return acc + item.innerText.length;

}, 0);



// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, textoInner) {

    const elemento = document.createElement(tag);
    classe ? elemento.className = classe : ''; //se classe existe dale, se nao existe nao retorna undefined
    textoInner? elemento.innerText = textoInner : '';

    return document.body.prepend(elemento);

}


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico


const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');
//no caso ele ja tem criado o h1 (elemento) e a classe ''titulo''. 
//utilizou o bind pra nao precisar reescrevr tudo e copiar a funcao com o this do novo objeto


