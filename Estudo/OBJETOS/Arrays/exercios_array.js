
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
//1º)  // A =>  Remova o primeiro valor de comidas e coloque em uma variável =>
 const primeiraComida = comidas.shift();

 // B => Remova o último valor de comidas e coloque em uma variável =>
 const ultima = comidas.pop();

 // C => Adicione 'Arroz' ao final da array =>
 comidas.push("arroz");

// D=> Adicione 'Peixe' e 'Batata' ao início da array =>

 comidas.unshift("peixe" , "batata");




//2ª) =>
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// A =>Arrume os estudantes em ordem alfabética
    estudantes.sort();

// B=> Inverta a ordem dos estudantes
  estudantes.reverse();

// C=> Verifique se Joana faz parte dos estudantes
 console.log(estudantes.includes("Joana"));


// Verifique se Juliana faz parte dos estudantes

 console.log(estudantes.includes("Juliana"));




//3ª) =>

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`


// Substitua section por ul e div com li,
// utilizando split e join

let novoHtml = html.split('section').join('ul').split('div').join('li');





const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const arrayCarro = carros.slice();
carros.pop();




