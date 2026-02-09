export default function dropDown() {

    const menuDrop = document.querySelectorAll('[data-dropdown]');


    menuDrop.forEach((item) => {

        item.addEventListener('touchstart', handleclick);
        item.addEventListener('click', handleclick);
    })


    function handleclick(event) {
        event.preventDefault();
        this.classList.toggle('active');
    }


}

