// PARAMETROS //
//reserva um valor padrao casop nao venha o valor no argumento na chamativa da funcao
function perimetro (lado, qtdLados = 4){
    // qtdLados = qtdLados || 4;
    return lado * qtdLados;
}

// console.log(perimetro(10, 3))
// console.log(perimetro(10))


function perimetro2 (lado1, qtdLados1 = 4){
    // qtdLados = qtdLados || 4;
    return lado1 * qtdLados1;
}

// console.log(perimetro2(10, 3))
// console.log(perimetro2(10))

/////////////////////////////////////////////////////

// REST //


function reste(a, b ,...listArgs){
    console.log(arguments);

    listArgs.forEach(item=> console.log(item));
    return a + b;
}

////////////////////////////////////////////////////////////////

function sorteio(premio, ...ganhadores){

    ganhadores.forEach(ganhadores =>{
        console.log(`${ganhadores} ganhou um ${premio}`);
    })

}

// sorteio('moto', 'Cael','Julia', 'Ian');

////////////////////////////////////////////////////////////////

// SPREAD //

const jogos = ['e33', 'elden', 'sonic']
const controles = ['bom', 'perfeito', 'tenso'];
// const comidas = [...controles, ...jogos]
// console.log(comidas);



/////////////////////////////////////////////////////////////////////
// EXERCICIOS //


// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background ='blue', color='red') {
  
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  buttonElement.style.color = background;

  return buttonElement;
} 

const redButton = createButton('red');

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];

comidas.push(...frutas);
console.log(comidas)