export default function toolTip() {

    const tooltips = document.querySelectorAll('[data-tooltip]');
    //toda vez q passar o mouse no mapa, que ta coma classe tooltip-data
    //ele vai executar a funcao onMouseOver

    tooltips.forEach((item) => {

        item.addEventListener('mouseover', onMouseOver);



    })


    //a funcao onMouseOver vai mostrar onde o mouse ta sendo passado
    //o elemento criando na funcao `criarToolTip`

    function onMouseOver(event) {
        const tooltipBox = criarToolTipBox(this);

        onMouseMove.tooltipBox = tooltipBox;
        this.addEventListener('mousemove', onMouseMove);


        onMouseLeave.element = this;
        onMouseLeave.tooltipBox = tooltipBox;
        this.addEventListener('mouseleave', onMouseLeave);

    }


    const onMouseLeave = {

        handleEvent() {

            this.tooltipBox.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave);

        }

    }

    const onMouseMove = {

        handleEvent(event) {

            this.tooltipBox.style.left = event.pageX + 20 + 'px';
            this.tooltipBox.style.top = event.pageY + 20 + 'px';
            this.element.removeEventListener('mousemove', onMouseMove);

        }

    }


    function criarToolTipBox(element) {

        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);
        return tooltipBox;
    }


}

