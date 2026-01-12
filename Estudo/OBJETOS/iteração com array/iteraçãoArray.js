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

}, 1)