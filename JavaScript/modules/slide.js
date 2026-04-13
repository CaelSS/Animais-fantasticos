export default class Slide {
  constructor(slides, wrapper) {
    this.slide = document.querySelector(slides);
    this.wrapper = document.querySelector(wrapper);

    this.distancia = {
      finalPosition: 0,
      startX: 0,
      movement: 0,
      movePosition: 0,
    };
  }

  updatePosition(clientX) {
    this.distancia.movement = this.distancia.startX - clientX;
    return this.distancia.finalPosition - this.distancia.movement;
  }

  onStart(event) {
    let moveType;

    if (event.type === "mousedown") {
      event.preventDefault();
      this.distancia.startX = event.clientX;
      moveType = "mousemove";
    } else {
      this.distancia.startX = event.changedTouches[0].clientX;
      moveType = "touchmove";
    }

    this.wrapper.addEventListener(moveType, this.onMove);
    this.transition(false);
  }

  moveSlide(distX) {
    this.distancia.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  }

  onMove(event) {
    const pointerPosition =
      event.type === "mousemove"
        ? event.clientX
        : event.changedTouches[0].clientX;

    const finalPosition = this.updatePosition(pointerPosition);
    this.moveSlide(finalPosition);
  }

  onEnd() {
    this.wrapper.removeEventListener("mousemove", this.onMove);
    this.wrapper.removeEventListener("touchmove", this.onMove);

    this.distancia.finalPosition = this.distancia.movePosition;
    this.changeSlideOnEnd();
    this.transition(true);
  }

  addSlideEvents() {
    // START
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("touchstart", this.onStart);

    // END
    this.wrapper.addEventListener("mouseup", this.onEnd);
    this.wrapper.addEventListener("touchend", this.onEnd);
  }

  // SLIDES CONFIG
  slidePosition(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }

  slidesConfig() {
    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element);
      return {
        position,
        element,
      };
    });
  }

  slidesIndexNav(index) {
    const last = this.slideArray.length - 1;
    this.index = {
      prev: index ? index - 1 : null,
      active: index,
      next: index === last ? null : index + 1,
    };
  }

  changeSlide(index) {
    const activeSlide = this.slideArray[index];
    this.moveSlide(activeSlide.position);
    this.slidesIndexNav(index);
    this.distancia.finalPosition = activeSlide.position;
    this.changeActiveClass();
  }

  // NAVEGAÇÃO
  activePrevSlide() {
    if (this.index.prev !== null) {
      this.changeSlide(this.index.prev);
    }
  }

  activeNextSlide() {
    if (this.index.next !== null) {
      this.changeSlide(this.index.next);
    }
  }

  changeSlideOnEnd() {
    if (this.distancia.movement > 120 && this.index.next !== null) {
      this.activeNextSlide();
    } else if (this.distancia.movement < -120 && this.index.prev !== null) {
      this.activePrevSlide();
    } else {
      this.changeSlide(this.index.active);
    }
  }

  changeActiveClass() {
    // remove dos slides
    this.slideArray.forEach((item) => item.element.classList.remove("ativo"));

    // adiciona no slide ativo
    this.slideArray[this.index.active].element.classList.add("ativo");

    // 🔥 NOVO: controla as miniaturas
    if (this.controlArray) {
      this.controlArray.forEach((item) => item.classList.remove("ativo"));

      this.controlArray[this.index.active].classList.add("ativo");
    }
  }

  transition(active) {
    this.slide.style.transition = active ? "transform .3s" : "";
  }

  onResize() {
    setTimeout(() => {
      this.slidesConfig();
      this.changeSlide(this.index.active);
    }, 1000);
  }

  addResizeEvent() {
    window.addEventListener("resize", this.onResize);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);

    this.activePrevSlide = this.activePrevSlide.bind(this);
    this.activeNextSlide = this.activeNextSlide.bind(this);

    this.onResize.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    this.slidesConfig();

    // inicia no primeiro slide

    this.changeSlide(0);
    this.addResizeEvent();

    return this;
  }
}

export class SlideNav extends Slide {
  constructor(slide, wrapper) {
    super(slide, wrapper);

    this.bindControlEvents();
  }
  addArrow(prev, next) {
    this.prevElement = document.querySelector(prev);
    this.nextElement = document.querySelector(next);
    this.addArrowEvent();
  }

  addArrowEvent() {
    this.prevElement.addEventListener("click", this.activePrevSlide);
    this.nextElement.addEventListener("click", this.activeNextSlide);
  }

  creatControl() {
    const control = document.createElement("ul");
    control.dataset.control = "slide";

    this.slideArray.forEach((item, index) => {
      control.innerHTML += `<li><a href="#slide${index + 1}">${index + 1}</a></li>`;
    });

    this.wrapper.appendChild(control);
    return control; // ESSENCIAL
  }

  eventControl(item, index) {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      this.changeSlide(index);
    });
  }

  addControl(customControl) {
    if (customControl) {
      this.control = document.querySelector(customControl);
    }

    if (!this.control) {
      this.control = this.creatControl();
    }

    this.controlArray = [...this.control.children];

    this.controlArray.forEach((item, index) => {
      this.eventControl(item, index);
    });
  }

  bindControlEvents() {
    this.eventControl = this.eventControl.bind(this);
  }
}
