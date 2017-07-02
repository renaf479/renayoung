"use strict";

const worksWrapper = document.querySelector('.works');
const contactWrapper = document.querySelector('.contact__cta');
const workModalWrapper = document.getElementById('work__modal');
const contactModalWrapper = document.getElementById('contact__modal');
const contactModalIframeNode = document.getElementById('contact__modal__iframe');
const loaderWrapper = document.getElementById('loader');
const loaderCallbackNode = document.getElementById('loader__callback');

let workNodes = worksWrapper.getElementsByClassName('timeline__item__svg');
let workModalIframe = workModalWrapper.getElementsByClassName('single__iframe')[0];

let breakpoint = {};

breakpoint.refreshValue = function () {
    this.value = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
};

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
    if(breakpoint.value === 'mobile') {
        console.log('here');
    } else {
        Avgrund.show('.contact__modal');
    }
}

function _closeContactModal() {
    Avgrund.hide('.contact__modal');
}

function _loaderComplete() {
    contactModalIframeNode.src = contactModalIframeNode.dataset.src;
    contactModalIframeNode.onload = () => {
        window.scrollTo(0, 0);
        loaderWrapper.classList.add('hidden--animated');
        document.body.classList.remove('loading');

        setTimeout(function() {
            document.body.removeChild(loaderWrapper);
        }, 1000);
    };
}

Array.from(workNodes).forEach((workItem) => {
    workItem.addEventListener('mouseup', _openWorkModal);
});


document.addEventListener("DOMContentLoaded", function(){
    //document.body.classList.add('loading');

    (window.onresize = () => {
        breakpoint.refreshValue();
    })();

    contactWrapper.addEventListener('mouseup', _openContactModal);
    workModalWrapper.getElementsByClassName('modal__close')[0].addEventListener('mouseup', _closeWorkModal);
    contactModalWrapper.getElementsByClassName('modal__close')[0].addEventListener('mouseup', _closeContactModal);

    loaderCallbackNode.addEventListener("webkitAnimationEnd", _loaderComplete, false);
    loaderCallbackNode.addEventListener("animationend", _loaderComplete, false);
    loaderCallbackNode.addEventListener("oanimationend", _loaderComplete, false);
});





//DEBUG
/*avgrundIframe.src = '/works/ibm';
avgrundIframe.onload = function() {
    Avgrund.show('.avgrund-popup');
}*/

