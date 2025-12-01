//um construtor tem suas propriedades (atributos) e metodos. Para prototype é convencionalmente aceito apenas se criar metodos (funcoes)
function People (nome, idade){

    this.idade = idade;
    this.nome = nome;

    this.abracar = function(){
        return 'abracou';
    }

}

//objetos instanciado e passado os atributos//
const cael = new People('cael', 30);
const julia = new People('julia', 29);

console.log(People.prototype);

//Com essa criação aqui, eu consigo implementar um metodo ao meu objeto que funcionara para todas as intancias//
People.prototype.andar = function(){

    return 'andou pra caraljho';
}

People.prototype.nadar = function(){
    return 'nadou';
}

//porem so para o objeto criado é possivel, funcionando apenas para o instanciado do metodo, por ex: 
//Aqui, mesmo que o metodo andar também existe para todos os objetos criados, se conter o mesmo nome, ele vai pegar apenas o do proprio objeto instanciado

cael.prototype.cagar = function (){
    return 'cagou';
}