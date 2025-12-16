//(1º)Q: retornar numero aleatorio entre 1050 e 2000

//R=>
console.log(Math.floor(Math.random() * (2000 - 1050 + 1) + 1050));



//(2º)Q: retornar maior numero da lista
const numeros = '4, 5, 20, 8, 9';

//R=>


inteiro = function (numero) {

    return Number.parseInt(numero);

}

numeroArray = Array.from(numeros.split(', '));

console.log(Math.max(...numeroArray)); //colocar esses 3 pontos é como se fosse numeroArray [0], numeroArray [1] e por ai vai



// (3º)Q: crie uma funcao para limpar e retornar os numeros com centavos arredondados, depois retorne e soma total

const listaPrecos = ['R$ 59,99', 'R$ 100,222', 'R$ 230', 'r$ 200'];





function limparEArredondar(preco) {

    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
    //transforma tudo em maiusculo, troca o simbolo da cedula por espaço vazio, tira os espaços vazios com trim e troca as virgulas por .
    preco = +preco.toFixed(2);
    //arredondo o numeo pra duas casas decimais apos a virgula/ponto
    return preco;
}


let soma = 0;

listaPrecos.forEach((preco)=>{

     soma+=limparEArredondar(preco);
     
});

console.log(soma);


