//metodo sort() manda os array organizado pelo primeiro caracter
// a ao z, 1 ao 10.. Mas na questao de numeros nao necessariamente vai ser na ordem

//o Unshift() adiciona um item ao inicio do array
//o push() adiciona ao final assim como em sql
//shift() tira o primeiro item da array e retorna
//pop() tira o ultimo e retorna ele
//reverse(), como diz o no0me ele retorna a array invertida (modifica a array)

//splice() é meio complicado. Ele usa  Splice(index, remove,item1 , item2)
//por ex

const array =  ['pão', 'biscoito' , 'bolacha' , 'salgado' , 'pastel' , 'coxinha']
console.log(array);

//aqui ele imprime '''pão', 'biscoito', 'bolacha', 'salgado', 'pastel', 'coxinha'''

//eu digo aqui, DEPOIS do item 1, ou seja, antes de biscoito eu quero adicionar cocada e leite
//só que eu tbm disse q quero remover 1 item, entao ele vai remover o tal do biscoito
array.splice(1, 1 , 'cocada','leite');

console.log(array);

//e aqui: 'pão', 'cocada', 'leite', 'bolacha', 'salgado', 'pastel', 'coxinha'


//fill(), ele vai  trocar tudo ou o a partir de um index a trocar os nomes.
// por ex, la no array se eu botasse -> array.fill("banana") <- ele trocaria tudo por banana
//ou se eu colocasse ''array.fill('banana', 2). Entao, ''a partir do item 2, coloque tudo de banana #LAELE





/*-----------------------------------------------------------------------------------------------------------------------------------------------*/

/*o METODO DE CONCATENAR DE UM ARRAY. utilizando o [].concat(array);

por ex, se eu tenho a array la array[] e tenho array2[]
pra concatenar elas, ou seja, juntar elas eu devo fazer =>    novaArray = array.concat(array2)
dai essa novaArray vai ser uma array resultado da uniao das outras duas.


da pra fazer de outro jeito tbm, por ex

array3 = [].concat(array, array2, 'bolacha', 'cueca')...*/



/* ==> INCLUDES(), ele retorna se tem ou nao. Entao, retorna um booleano 1 ou 0. True ou false;

o indexof() retorna o primeiro que achar e ignora o restante
o lastIndexOf() retorna o ultimo encontrado...



=> JOIN() ele junta 





