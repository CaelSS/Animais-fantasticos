export default function toolTip() {

    //seleciono onde eu quero q o tooltip esteja
    const tooltips = document.querySelectorAll('[data-tooltip]');

    //toda vez q passar o mouse no elemento, que ta coma classe tooltip-data
    //ele vai executar a funcao onMouseOver (mouse sobre o elemento)
    tooltips.forEach((item) => {

        //tenho callback da funcao para o elemento em questao quando mouse for passado em cima
        item.addEventListener('mouseover', onMouseOver);



    })

    //recebe dados do elemento em que o mouse foi passado e cria uma div em cima dele
    function criarToolTipBox(element) {

        //cria uma div
        const tooltipBox = document.createElement('div');

        //nessa div adiciona o nome da classe 'tooltip'
        tooltipBox.classList.add('tooltip');

        //digo que o texto interno desse elemento é sua aria-label 
        tooltipBox.innerText = element.getAttribute('aria-label');

        //adiciono ao final do body
        document.body.appendChild(tooltipBox);

        //retorno esse elemento criado (a div), com classe, aria-label e estilizacao no css
        return tooltipBox;
    }

    //crio a funcao onMouseOver
    function onMouseOver() {

        //Qnd passa o mouse em cima do elemento, cria uma div de acordo os dados desse elemento que o mouse passou em cima, por isso o ``this`` . Cria um elemento com os dados do ``this`` (deste elemento)  e salva na variavel tooltipbox dessa funcao                      
        const tooltipBox = criarToolTipBox(this);



        //o objeto onMouseMove recebe no valor tooltipbox essa div criada
        onMouseMove.tooltipBox = tooltipBox;
        //e diz que o tooltip tem um espacamento x  e y do cursor
        this.addEventListener('mousemove', onMouseMove);


        //no objeto onMouseLeave recebe tbm um valor dque é a div criada nesses dois valores ai
        onMouseLeave.element = this;
        onMouseLeave.tooltipBox = tooltipBox;
        //este elemento vai ter o callback da funcaoo onMouseLeave que é o handleEvent()
        this.addEventListener('mouseleave', onMouseLeave);

    }

    const onMouseMove = {

        handleEvent(event) {

            //pega o local que o mouse esta se movendo dentro do elemento e coloca a 20px de distancia x e y do cursor
            this.tooltipBox.style.left = event.pageX + 20 + 'px';
            this.tooltipBox.style.top = event.pageY + 20 + 'px';

            //remove a funcao do elemento e so aciona ele uma vez qnd entrar na area do elemento
            this.element.removeEventListener('mousemove', onMouseMove);

        }

    }

    const onMouseLeave = {

        handleEvent() {

            //remove a div qnd o mouse sai do lugar
            this.tooltipBox.remove();
            //remove a funcao do elemento que recebe o tooltip
            this.element.removeEventListener('mouseleave', onMouseLeave);

        }

    }




}

