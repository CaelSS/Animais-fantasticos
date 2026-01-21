const carros = ['ford', 'fiat', 'ferrari', 'honda'];


const novosCarros = carros.forEach((item, index, array) => {
    // console.log(item, index, array); 
})

//Quando for atribuir a uma variavel , ela vai ter o valor UNDEFINED, pq o foreach da nisso, diferente do map


const cars = [{
    nome: 'maccquin',
    idade: 13
},

{
    nome: 'fusca',
    idade: 10
},

{
    nome: 'galiota',
    idade: 50
}
]

function nomeDasParada(nome) {
    return nome.idade;
}



const carritos = cars.map(nomeDasParada);


//ai vem a praga do REDUCE


// const aulas = [10, 25, 30];

// const reduce = aulas.reduce((acumulador, item, index, array)=>{

//     console.log(acumulador,item,index,array);

// }, 100)

//ele imprime 100, 10, 0 > 10, 25, 30
//   depois   undefined, 10, 25, e 30


const numeros = [5 ,4 ,3 ,2];

const maior = numeros.reduce((acc, itemAtual) =>{

        return acc > itemAtual ? acc : itemAtual;
        
}, 2);


const soma = numeros.reduce((acc, item) =>{

    return acc + item;

}, 1);



//[].some() ele serve pra dizer se um dos itens esta contido no array, por ex:

const itens = [ 'uva', 'pera', 'gato', 'gado'];

const temIsso = itens.some((itens) => {

    return itens ==='mamão';
   
})

 //console.log(temIsso); //false









//[].find() and [].findIndex() POR EX ->


const games = ['mario', 'sonic', 'bmx', 'tony hawks']
const number = [1, 24, 55, 88];

const ache = games.find((games) =>{

    return games ==='tony hawks';

})

const maior1 = number.find((number)=>number>=2);
// console.log(maior1);

const ache2 = games.findLastIndex((games) =>{

    return games ==='bmx';

})

// console.log(ache)
// console.log(ache2)