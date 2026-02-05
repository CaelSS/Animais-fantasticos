export default function initAnimatedScroll(){
  const sections = document.querySelectorAll('.js-scrollSmooth');
  const windowHeight = window.innerHeight * 0.6;

  function scrollSmooth(){
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top - windowHeight;

      if(sectionTop < 0){
        section.classList.add('ativo');
      }
    });
  }

  scrollSmooth();
  window.addEventListener('scroll', scrollSmooth);
}
