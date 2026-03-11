// function creatButton(texto, cor) {

//    function element() {
//       const buttonElement = document.createElement('button');
//       buttonElement.style.backgroundColor = cor;
//       buttonElement.innerText = texto;
//       return buttonElement;
//    }
//    return {

//       texto,
//       backgroundColor: cor,
//       element
//    }

// }

// const butao = creatButton('ok', 'red');
// //==================================================================

// function pessoa(nome) {

//    const numeroSecreto = '123556767'

//    function aniver() {
//       return `${nome} faz aniversario em 15 de novembro`;
//    }


//    function skate() {
//       return `ja caiu de skate varias vezes`;
//    }

//    return Object.freeze({
//       nome,
//       aniver,
//       skate
//    })
// }

// const cael = pessoa('cael');


function Pessoa(nome) {

   if (!(new.target)){
      return new Pessoa(nome);
   }
   this.nome = nome;

}


const julia = Pessoa('julia');