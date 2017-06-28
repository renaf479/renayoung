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

Array.from(workNodes).forEach((workItem) => {
    workItem.addEventListener('click', openDialog);
});

/*

var wrapper = document.querySelector(".wrapper");

var divs = wrapper.getElementsByTagName("div");

for (i = 0; i < divs.length; ++i) {
    each = divs[i];
    if (each.classList.contains("test2")) {
        each.style.display = "none";
    }
}
*/

