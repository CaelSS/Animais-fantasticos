import animatedScroll from "./modules/animatedScroll.js";
animatedScroll();

import ScrollSuave from "./modules/scrollSmooth.js";
const scrollSuave = new ScrollSuave('a[href^="#"]');
scrollSuave.init();

import Accordion from "./modules/accordion.js";
const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

import TabNav from "./modules/tabnav.js";
const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabnav.init();

import Modal from "./modules/modal.js";
const modal = new Modal('[data-set="abrir"]', ".modal .fechar", ".modal-container");
modal.init();


import tooltip from "./modules/tooltip.js";
const tooltips = new tooltip("[data-tooltip]");
tooltips.init();

import initDropDown from "./modules/dropDown.js";
initDropDown();

import initMenuMobile from "./modules/menu-mobile.js";
initMenuMobile();

import initFuncionamento from "./modules/funcionamento.js";
initFuncionamento();

import initFetchAnimais from "./modules/fetchAnimais.js";
initFetchAnimais();
