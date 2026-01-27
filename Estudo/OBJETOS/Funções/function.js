//metodo CALL

const { createElement } = require("react");

const carro = {

    nome: 'fuscão',
    marca: 'wolskvagem'

}

function descricaoCarro(velocidade) {

    return this.nome + " " + this.marca + ' ' + velocidade;
}

// console.log(descricaoCarro(carro)); //nao vai imprimir nada
console.log(descricaoCarro.call(carro))
//ou

console.log(descricaoCarro.call({ nome: 'marea turbo', marca: 'combustão explosiva' }, 100));

//outro exemplo 


const marcas = ['ford', 'fiat', 'wolks', 'honda']
const frutas = ['laranja', 'abacate', 'cajivis']

// marcas.forEach((item)=>{
//     console.log(item);
// })

//só que da pra usar call tbm, se liga =>




// frutas.forEach.call(marcas, (item)=>{

//         console.log(item);
// })
//por incrivel que pareaça aqui imprime os carros ainda, porq o q importa é o THIS da funcao.


//seleciona as lis
const lis = document.querySelectorAll('li');

//guardo na variavel listadeAtivos as lis, que passam pelo fromeach que tenham a classe ativo
const listaDeAtivos = Array.prototype.filter.call(lis, (item) => {
    return item.classList.contains('ativo');

})

console.log(listaDeAtivos);

//-------------------------------------------------------------------------------------------------------------------------------------------------//


// METODO APPLY



const numeros = [99, 55, 888, 303, 404, 666]

//olha que gostoso pra achar um numero maior, ou m valor maior

console.log(Math.max.apply(null, numeros));


//pra o metodo Math.max puro sem apply funciona teria que ser assim:


const maior = numeros.reduce((acc, n) => {

    acc < n ? acc = n : '';
    return acc;


})

console.log(maior)

//ou + gostoso =>

const maior1 = numeros.reduce((acc, n) => Math.max(acc, n));



//-----------------------------------------------------------------------------------------------------------------------------------//

//BIND ()


const estudante = {

    nome: 'cael',
    idade: 30,

    estudar() {

        console.log(this.nome + ' estudou hoje');
    }

}


const vagabundo = {

    nome: 'kaeu',
    idade: 30

}

const estudou = estudante.estudar.bind(vagabundo);
//o bind cria uma outra funcao utilizando o outro this. do outro objeto.
//peguei a funcaio estudar do estudante e utilizei no vagabundo, com o outro this.
//-------------------------------------------------------------------------------------------------------------------------------------//


