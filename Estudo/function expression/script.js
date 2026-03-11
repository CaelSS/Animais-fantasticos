

//function declaration
//sofre hoisting
//quando deve ser usada a funcao ja no inicio do codigo
function somar (a,b){
  return a + b;
}

//function expression
//quando pode ser usada depois no codigo
const soma = function(a, b){
  return a+ b;
};

//versao atual do function expression
const somatoria = (a,b)=> a+b;

somar(4,5);

somar(4,5);

somatoria(5,5);
