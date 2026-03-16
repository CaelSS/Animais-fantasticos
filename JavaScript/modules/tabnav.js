export default class TabNav {
  constructor(menu, content) {
    this.tabmenu = document.querySelectorAll(menu);
    this.tabcontent = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  //ativa a tab de acordo com o index da mesma
  activeTab(index) {
    this.tabcontent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });

    const direction = this.tabcontent[index].dataset.anime;
    this.tabcontent[index].classList.add(this.activeClass, direction);
  }
  addEventTabNav() {
    this.tabmenu.forEach((li, index) => {
      li.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabmenu.length && this.tabcontent.length) {
      //ativa primeiro item
      this.activeTab(0);
      this.addEventTabNav();
    }
  }
}
