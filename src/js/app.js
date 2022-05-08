import * as flsFunctions from "./modules/functions.js"; // это из шаблона GULP
flsFunctions.isWebp();

import tabs from './modules/tabs.js';
import timer from './modules/timer.js';
import modal from './modules/modal.js';
import cards from './modules/cards.js';
import forms from './modules/forms.js';
import slider from './modules/slider.js';
import calc from './modules/calc.js';
import {showModal} from './modules/modal.js';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerID = setTimeout(() => showModal('.modal', modalTimerID), 5000); // оборачиваем в колбэк, чтобы передать параметры
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2022-09-10');
    modal('[data-modal]', '.modal', modalTimerID);
    cards();
    forms('form', modalTimerID);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    calc();
});