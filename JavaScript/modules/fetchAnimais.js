export default class FetchAnimais {
 
  async function animais(url) {
   
    const responseAnimais = await fetch(url);
    const dadosAnimais = await responseAnimais.json();
    const numerosGrid = document.querySelector(".numeros-grid");
    dadosAnimais.forEach((animal) => {
      const divanimal = createAnimal(animal);
      numerosGrid.appendChild(divanimal);
    });
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span> `;
    return div;
  }

  animais("../API/animaisApi.json");


  return FetchAnimais();
}
