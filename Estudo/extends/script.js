class Veiculo {

    constructor(rodas, combustivel){
        this.rodas = rodas;
        this.combustivel = combustivel;
    }
    acelerar(){
        console.log(`o veiculo de ${this.rodas}, acelerou`)
    }

    quebrar(){
        console.log('quebrou')
    }


}


class Motoca  extends Veiculo {

    constructor(rodas, combustivel, capacete) {
        //
        super(rodas, combustivel);
        this.capacete = capacete;
    }

    empinar(){
        console.log('o veiclulo de'+ this.rodas + "empinou")
    }

    //apesar de extender/herdar/ o metodo acelerar, a classe vai considerar primeiro o próprio.
    acelerar(){
        console.log('acelerou pra caralho')
    }

   quebrar(){
    //dai o SUPER vc coloca se quiser considera os 2, ate porq as vezes ha algo individual dentro do objeto em questao
    super.quebrar()
        console.log('e ainda se lascou dms')
    }


}

const carro = new Veiculo(4);
const biz = new Motoca(2, 'shell', true);


