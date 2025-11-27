/*1ª)*/

function Pessoa(nome, idade) {

    this.nome = nome;
    this.idade = idade;

    this.andar = function () {
        console.log(this.nome + " andou");
    }

}

const cael = new Pessoa('cael', 30);

/*2ª) Crie uma Constructor Function (Dom) para manipulação
 de listas de elementos do dom. Deve conter as seguintes
propriedades e métodos:
 => elements, retorna NodeList com os elementos selecionados
 => addClass(classe), adiciona a classe a todos os elementos
 => removeClass(classe), remove a classe a todos os elementos*/

function Dom(seletor) {

    this.elements = function () {

        return document.querySelectorAll(seletor);

    }

    this.addClasse = function () {

        this.elements().forEach((item) => {
            item.classList.add('classe');

        });
    }

    this.removeClass = function () {
        this.elements.classList.remove('classe');
    }


}

const li = new Dom('li');

