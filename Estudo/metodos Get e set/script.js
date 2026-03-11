const button = {
    get tamanho(){
        return this.numero;
    },
    set tamanho(n){
        this.numero = n;
    },

    get element(){
        return this._element;
    },

    set element(tipo){
        this._element = document.createElement(tipo);
    }

}

button.element = 'button'

console.log(button.element)

button.tamanho = 200;
console.log(button.tamanho);