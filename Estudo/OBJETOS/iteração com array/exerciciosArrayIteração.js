const listadeCursos = document.querySelectorAll(".curso");
const Arrayinfos = Array.from(listadeCursos);

const objetosDoCurso = Arrayinfos.map((cursos) => {

  const titulo = cursos.querySelector('h1').innerText;
  const aulas = cursos.querySelector('.aulas').innerText;
  const horas = cursos.querySelector('.horas').innerText;

  return {

    titulo,
    aulas,
    horas

  }

})

// console.log(objetosDoCurso);

//---------------------------------------------------------------------------------------------------------------------------------------//


// 2 ª) - Retorne uma lista com os números maiores que 100 =>

const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiores = numeros.filter((numero) => numero > 100);

//-------------------------------------------------------------------------------------------------------------------------------------------//



// 2 ª) - Verifique se Baixo faz parte da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const trueOrFalse = instrumentos.some((item) => {

  return item === 'Baixo';

})

// console.log(trueOrFalse); //true

//-------------------------------------------------------------------------------------------------------------------------------------------//

// 3ª) Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]


const valores = compras.reduce((acumulador, item) => {
  const limpaPreco = +item.preco.replace("R$", "").replace(",", '.')
  return acumulador + limpaPreco;
 
}, 0)

console.log(valores); //49