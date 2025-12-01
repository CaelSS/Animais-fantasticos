
//exercicio = prototype

//1) criar uma funcao construtora de uma pessoa e criar um metodo no prototipo que retorne o nome completo

function Pessoa (nome, sobrenome, idade){

    this.nome = nome;
    this.sobrenome =  sobrenome;
    this.idade = idade;

}


Pessoa.prototype.nomeCompleto = function(){

    return `nome completo: ${this.nome} ${this.sobrenome}`;


}

const cael = new Pessoa('cael', 'santos Santana');

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

Object.getOwnPropertyNames(Document.prototype);
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);


// Liste os construtores dos dados abaixo
const lista = document.querySelector('li'); 

lista.click.constructor.name;
//''Function''
lista.innerHTML.constructor.name;
//String
//por ai vai


// Qual o construtor do dado abaixo?
lista.hidden.constructor.name;
//R=>
