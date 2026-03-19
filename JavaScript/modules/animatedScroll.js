import debounce from "./debouncedScroll.js";

export default class AnimatedScroll {
  constructor(section) {
    this.sections = document.querySelectorAll(section);
    this.windowHeight = window.innerHeight * 0.6;
    //bind pra nao referenciar errado
    this.scrollSmooth = debounce(this.scrollSmooth.bind(this), 200);
  }

  scrollSmooth() {
    this.sections.forEach((section) => {
      const sectionTop =
        section.getBoundingClientRect().top - this.windowHeight;
      if (sectionTop < 0) {
        section.classList.add("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.scrollSmooth();
      window.addEventListener("scroll", this.scrollSmooth);
    }
  }
}
