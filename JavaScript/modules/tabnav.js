export default function initTabNav() {
  const tabmenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabcontent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    tabcontent.forEach((section) => {
      section.classList.remove("ativo");
    });

    const direction = tabcontent[index].dataset.anime;
    tabcontent[index].classList.add("ativo", direction);
  }

  if (tabmenu.length && tabcontent.length) {
    tabmenu.forEach((li, index) => {
      li.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
