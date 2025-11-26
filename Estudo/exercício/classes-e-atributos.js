// Adicione a classe ativo a todos os itens do menu

const ativo = document.querySelectorAll('.menu a ');
ativo.forEach((item)=>{
    item.classList.add('ativo');
})

console.log(ativo);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

//aqui eu removo
ativo.forEach((item)=> {
 item.classList.remove('ativo');

});

//aqui eu adiciono
ativo[ativo.length - ativo.length].classList.add('ativo');


// Verifique se as imagens possuem o atributo alt

const imagens = document.querySelectorAll('img');
console.log(imagens);

imagens.forEach((item) => {
    
    if(item.hasAttribute('alt')){
        console.log('dale')
    }else{
        console.log("nao dale")
    }
   
    
});

// Modifique o href do link externo no menu

const link = document.querySelector('.menu [href^="http"]');
console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.google.com');
console.log(link.getAttribute('href'));

























// const menu = document.querySelector('.menu');
// menu.classList.add('ativo'); //adiciono uma classe chamada ''ativo'' na classe do elemento menu.
// console.log(menu.classList);



// const animais = document.querySelector('.animais');

// animais.attributes[0];
