

/*um construtor generico para um veiculo que contenha marca e preço do veiculo*/
function Veiculo(marca, valor){

    /*isso aqui é a mesma coisa que dizer ''veiculo.marca = marca''. O this é auto-direcional ''este'' */
    
    const taxa = 0.1;
    const precoFinal = valor * taxa;

    this.marca = marca;
    this.preco = precoFinal + valor;

}

/*crio a instancia do objeto, ou seja "moto.prototype = veiculo.prototype". E assim a moto agora possui os atributos de veiculo, como se fosse um ''objeto filho''*/
const moto = new Veiculo('honda', 14000);


