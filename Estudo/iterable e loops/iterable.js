
///////////////////////////////////////////////////////////////
//              FOR OF                    ///////
const frutas = ['manga', 'banana', 'uva'];
const frase = 'this is javaScript';


for(const fruta of frutas){
  // console.log(fruta);
  //ele vai imprimir fruta por fruta, tal qual um foreach
}

for(const chat of frase){
  // console.log(chat)
  //vai imprimir, artigo por artigo da frase. Separando as letras
}

//spread com for...of

const buttons = document.querySelectorAll('button');

for (const btn of buttons){
  btn.style.background = 'blue';
}

// console.log(...buttons)

///////////////////////////////////////////////////////////////////////////////

// FOR IN                             ////////////////////////////////////////


const cael = {

  idade: 30,
  cor: 'preto negrasso',
  picaTam: '3cm'

};


for(const key in cael){
  // console.log(key, cael[key])
}

buttons.forEach((e) =>{
  const estilos = getComputedStyle(e);
  for(const style in estilos){
    // console.log(`${style}: ${estilos[style]}`)
  }
});


// Crie 4 li's na página
//=> criei
// Utilizando o for...of
// adicione uma classe a cada li

const lis = document.querySelectorAll('li');

for(const classes of lis){
  classes.classList.add('opa');
}

// console.log(lis)

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window


for(const lista in window){
  console.log(lista+ ':' +window[lista]);
}
