export default function initTabNav(){
  const tabmenu = document.querySelectorAll('.js-tabmenu li');
  const tabcontent = document.querySelectorAll('.js-tabcontent section');

  if(tabmenu.length && tabcontent.length){
    function activeTab(index){
      tabcontent.forEach(section => {
        section.classList.remove('ativo');
      });

      tabcontent[index].classList.add('ativo');
    }

    tabmenu.forEach((li, index) => {
      li.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
