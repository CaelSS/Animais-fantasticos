const pessoa = {
    nome: ' Cael',
    idade: '30',
    jogosfps: {
        primeiraPessoa: ['cod', 'bf6'],
        terceiraPEssoa: ['arcRaiders', 'Mg5']
    },
    jogosLuta: {
        rpg: ['elden Ring', 'Lords of the Fallen'],
        aventura: ['Sonic', 'megaman']
    }

}   

// const {terceiraPEssoa, primeiraPessoa} = pessoa.jogosfps;
// console.log(terceiraPEssoa[1], primeiraPessoa[0])

const  {jogosLuta, jogosfps, jogosLuta:{rpg, aventura}} = pessoa;
console.log(jogosfps.primeiraPessoa[1])

//da pra mudar tbm o nome da propriedade

const {nome: nomeDeCael} = pessoa;

console.log(nomeDeCael);

//se colocar so nome dentro do console nao vai imprimir nada. é como se a propriedade tivesse mudado

const [primeiroJogo, segundoJogo] = pessoa.jogosLuta.rpg;

console.log(primeiroJogo)