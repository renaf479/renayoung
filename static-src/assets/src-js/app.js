"use strict";

const worksWrapper = document.querySelector('.works');
const contactWrapper = document.querySelector('.contact__cta');
const workModalWrapper = document.querySelector('.work__modal');
const contactModalWrapper = document.querySelector('.contact__modal');

let workNodes = worksWrapper.getElementsByClassName('timeline__item__svg');
let workModalIframe = workModalWrapper.getElementsByClassName('single__iframe')[0];

function _openWorkModal() {
    let slug = this.dataset.slug;
    let iframeSrc = '/works/' + slug;

    workModalIframe.src = iframeSrc;
    workModalIframe.onload = function() {
        Avgrund.show('.work__modal');
    }
}

function _closeWorkModal() {
    Avgrund.hide('.work__modal');
}

function _openContactModal() {
    Avgrund.show('.contact__modal');
}

function _closeContactModal() {
    Avgrund.hide('.contact__modal');
}

Array.from(workNodes).forEach((workItem) => {
    workItem.addEventListener('mouseup', _openWorkModal);
});

contactWrapper.addEventListener('mouseup', _openContactModal);
workModalWrapper.getElementsByClassName('modal__close')[0].addEventListener('mouseup', _closeWorkModal);
contactModalWrapper.getElementsByClassName('modal__close')[0].addEventListener('mouseup', _closeContactModal);


//DEBUG
/*avgrundIframe.src = '/works/ibm';
avgrundIframe.onload = function() {
    Avgrund.show('.avgrund-popup');
}*/

