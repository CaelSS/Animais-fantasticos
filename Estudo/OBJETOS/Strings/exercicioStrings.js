// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];


//resposta =>

    let somaRecebido = 0;
    let somaTaxa = 0;
    let valorString;
    let conv;

    transacoes.forEach((item)=>{


        if(item.descricao.includes('Taxa')){
            valorString = item.valor.replace('R$', '');
            somaTaxa = somaTaxa + (+valorString);                
        } 

        else{

    
            somaRecebido += (+valorString);

        }
        
    })
    console.log(`o valor de recibos é:  ${somaRecebido}`)
    console.log(`O valor das taxas é: ${somaTaxa}`)



    //trocar span por a

const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

 const novohtml = html.split('span').join('a');



//  // Retorne o último caracter da frase
const frase = 'Melhor do ano!';
// //R=>
console.log(frase[frase.length-1]);
console.log(frase.slice(-1));


// Retorne o total de items com a palavra taxa
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito  taxa Bancário', 'TARIFA especial'];

let contagem = 0;
transacoes2.forEach((item)=>{

   item = item.toLowerCase().trim();
    item.startsWith('taxa')?   contagem+=1 : contagem += 0;


})

console.log(contagem);
//teste