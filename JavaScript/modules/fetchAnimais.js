export default function initFetchAnimais() {

    //essa URL poderia ser um endereco de uma api externa
    async function animais(url) {
        //faco as conversoes para objeto json js
        const responseAnimais = await fetch(url)
        const dadosAnimais = await responseAnimais.json();
        ///selciono o container que vai receber os html
        const numerosGrid = document.querySelector('.numeros-grid')

        //digo que pra essa array de json, vai enviar cada array  pra funcao criarAnimal
        dadosAnimais.forEach(animal => {
            const divanimal = createAnimal(animal)
            //numerosGrid vai recber o animal criado a partir de cada animal enviado, ou seja: 
            //todo array separado enviado pra creatAnimal, virou uma div com nome e numero de animal e é retornado pra ca pra dizer pra o container que essas divs sao seus filhos
            numerosGrid.appendChild(divanimal);
        });
    }

    function createAnimal(animal) {

        //crio uma div
        const div = document.createElement('div');
        //adiciono o nome da classe da vid numero-animal
        div.classList.add('numero-animal');

        //dentro dessa div eu crio dois elementos, o h3 e o span
        //o h3, recebe da api o nome do animal e o span o total (numero de animais)
        div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span> `;
        //retorno a div completa
        return div;

    }

    animais("../API/animaisApi.json")


}

