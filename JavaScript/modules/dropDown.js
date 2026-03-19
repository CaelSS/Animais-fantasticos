import outsideClick from "./outside-click.js";

export default class dropDown {
  constructor(menus) {
    this.dropdownMenus = document.querySelectorAll(menus);
    this.activeMenu = this.activeMenu.bind(this);
  }

  activeMenu(event) {
    event.preventDefault();
    event.currentTarget.classList.add("activated");

    outsideClick(event.currentTarget, () => {
      event.currentTarget.classList.remove("activated");
    });
  }
  addDropDownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      ["touchstart", "click"].forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropDownMenusEvent();
    }

    return this;
  }
}
