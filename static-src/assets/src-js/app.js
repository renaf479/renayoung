"use strict";

function openDialog(e) {
    let articleId = '#' + e.target.ownerSVGElement.dataset.slug;
    Avgrund.show(articleId);
}


const worksWrapper = document.querySelector(".works");
let workNodes = worksWrapper.getElementsByClassName('timeline__item__svg');

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

