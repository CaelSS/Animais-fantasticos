import outsideClick from './outside-click.js'

export default function menuMobile() {

    
}

const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');


    function openMenu(event) {
        menuList.classList.add('activated');
        menuButton.classList.add('activated');

        outsideClick(menuList, () => {
            console.log('teste')
            menuList.classList.remove('activated');
            menuButton.classList.remove('activated');
        })
    }

    menuButton.addEventListener('click', openMenu);