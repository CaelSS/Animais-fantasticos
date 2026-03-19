import AnimatedScroll from "./modules/animatedScroll.js";
const animationScroll = new AnimatedScroll('[data-anime="scroll"]');
animationScroll.init();

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

import DropDown from "./modules/dropDown.js";
const menu = new DropDown('[data-dropdown]');
menu.init();

import MenuMobile from "./modules/menu-mobile.js";
const menuDropMobile = new MenuMobile('[data-menu="button"]','[data-menu="list"]' );
menuDropMobile.init();

import initFuncionamento from "./modules/funcionamento.js";
initFuncionamento();

import FetchAnimais from "./modules/fetchAnimais.js";
FetchAnimais();
