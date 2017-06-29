"use strict";

const worksWrapper = document.querySelector('.works');
const avgrundWrapper = document.querySelector('.avgrund-popup');

let workNodes = worksWrapper.getElementsByClassName('timeline__item__svg');
let avgrundIframe = avgrundWrapper.getElementsByClassName('single__iframe')[0];

function openDialog() {
    let slug = this.dataset.slug;
    let iframeSrc = '/works/' + slug;

    avgrundIframe.src = iframeSrc;
    avgrundIframe.onload = function() {
        Avgrund.show('.avgrund-popup');
    }
}

function closeDialog() {
    Avgrund.hide('.avgrund-popup');
}

Array.from(workNodes).forEach((workItem) => {
    workItem.addEventListener('click', openDialog);
});

avgrundWrapper.getElementsByClassName('modal__close')[0].addEventListener('mouseup', closeDialog);


//DEBUG
avgrundIframe.src = '/works/ibm';
avgrundIframe.onload = function() {
    Avgrund.show('.avgrund-popup');
}

