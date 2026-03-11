
class Button {

    constructor(texto, background){
        this.text = texto;
        this.backgrounmd = background;
    }

    element(){

        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.backgrounmd;
        return buttonElement;
        

    }

    appendTo(target){
        const elementarget = document.querySelector(target);
        elementarget.appendChild(this.element());
        return elementarget;

    }

    static creatButton(texto, cor){
        return new Button(texto, cor)
    }

}

// const arrayBotoes = [ '1, blue', '2, gray', '3, red']

// arrayBotoes.forEach(botao =>{
    
//         const [numero, cor] = botao.split(',');
//         const botoes = new Button(numero, cor);
//         botoes.appendTo('body');
//         console.log(botoes)
        
// })



const botaoAzul = new Button('botao', 'orange');
console.log(botaoAzul.appendTo('body'));
console.log(botaoAzul)


const botaoblue = Button.creatButton('porra');
botaoblue.appendTo('body');
console.log(botaoblue)

// class Button{

//     constructor(options){
//         this.options = options;
//     }

//     static creatBackground(text, backgrounb){
//         const buttonElement = document.createElement('button');
//         buttonElement.innerText = text;
//         buttonElement.style.background = backgrounb;
//         return buttonElement;
//     }

// }

// const botao ={

//     backgroundColor: 'red',
//     text:'Ok',
//     width: 24,

// }


// const botao1 = new Button(botao);
// console.log(botao1.options)



// const botao2 = Button.creatBackground('sair', 'blue');
// console.log(botao2);






















// //isso aqui era usado no java antigo ===>>>

// //crio uma funcao que vai receber um valor de texto, e um valor pra o backgrounb
// function Button (text, background){
//     //digo que meu objeto generico botao vai receber os valores
//     this.text = text;
//     this.background = background;
// }

// //no prototipo do elemento crio a funcao q
// Button.prototype.element = function(){
//     //cria um elemento do tipo button
//     const botao = document.createElement('button');
//     //digo que o botao tem o texto como vindo da funcao com objeto generico e background
//     botao.innerText = this.text;
//     botao.style = this.background;

//     //retorno ele completo
//     return botao;

// }

// const btn = new Button('botaozao', 'pink');
// console.log(btn.element())