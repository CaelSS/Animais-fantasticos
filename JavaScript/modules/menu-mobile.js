import outsideClick from "./outside-click.js";

export default class menuMobile {
  constructor(menuBtn, menuLi) {
    this.menuButton = document.querySelector(menuBtn);
    this.menuList = document.querySelector(menuLi);

    // 🔥 garante que o this continue sendo a classe
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add("activated");
    this.menuButton.classList.add("activated");

    outsideClick(this.menuList, () => {
      this.menuList.classList.remove("activated");
      this.menuButton.classList.remove("activated");
    });
  }

  addMenuMobileEvents() {
    this.menuButton.addEventListener("click", this.openMenu);
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
