//object.creat da pra criar outros objetos como se fosse um construtor

const carro = {

    marca: 'Marca',
    nome: 'fusca',
    ano: '1985',

    init(marca) {

        this.marca = marca;
        return this;

    },

    acelera() {

        return this.marca + " Acelerou que só!";
    },

    buzina() {

        return this.marca + ' buzina também!'

    }


}

const palio = Object.create(carro).init('Palio');

//---------------------------------------------------------------//---------------------------------------------------------------

//object.assign() da pra crair VARIOS objetos de uma vez só


const funcoesDeAutomovel = {

    acelerar() {
        return 'acelerou'
    },

    rodas() {
        return 'esse tem 4';
    },

    rodas2() {
        return 'esse tem 2';
    }


}

const moto = {

    marca: 'honda',
    capacete: true

}

const carro2 = {

    marca: 'ford',
    capacete: false

}

//o objeto carro agora possui os metodos dentro do constutor funcoesDeAutomovel
Object.assign(carro2, funcoesDeAutomovel);


//--------------------------------------------------------------------------------------------------

//object.defineProperties(alvo, propriedade)


const bike = {
    //tenho o objeto
}

Object.defineProperties = {

    rodas: {

        get() {
            return this._rodas;
        },

        set(valor) {
            this._rodas;

        }

    }

}

//por exemplo, eu quero dizer que esse ojbeto bike tem 2 rodas
//set()ei as rodas igual a 2
bike.rodas = 2;

//aqui seria o metodo get. ''peguei o valor retornado por rodas
bike.rodas;