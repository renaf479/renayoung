"use strict";

if (!('forEach' in Array.prototype)) {
    Array.prototype.forEach= function(action, that /*opt*/) {
        for (var i= 0, n= this.length; i<n; i++)
            if (i in this)
                action.call(that, this[i], i, this);
    };
}

if (!Array.from) {
    Array.from = (function () {
        var toStr = Object.prototype.toString;
        var isCallable = function (fn) {
            return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
        };
        var toInteger = function (value) {
            var number = Number(value);
            if (isNaN(number)) { return 0; }
            if (number === 0 || !isFinite(number)) { return number; }
            return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };
        var maxSafeInteger = Math.pow(2, 53) - 1;
        var toLength = function (value) {
            var len = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
        };

        // The length property of the from method is 1.
        return function from(arrayLike/*, mapFn, thisArg */) {
            // 1. Let C be the this value.
            var C = this;

            // 2. Let items be ToObject(arrayLike).
            var items = Object(arrayLike);

            // 3. ReturnIfAbrupt(items).
            if (arrayLike == null) {
                throw new TypeError('Array.from requires an array-like object - not null or undefined');
            }

            // 4. If mapfn is undefined, then let mapping be false.
            var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
            var T;
            if (typeof mapFn !== 'undefined') {
                // 5. else
                // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
                if (!isCallable(mapFn)) {
                    throw new TypeError('Array.from: when provided, the second argument must be a function');
                }

                // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
                if (arguments.length > 2) {
                    T = arguments[2];
                }
            }

            // 10. Let lenValue be Get(items, "length").
            // 11. Let len be ToLength(lenValue).
            var len = toLength(items.length);

            // 13. If IsConstructor(C) is true, then
            // 13. a. Let A be the result of calling the [[Construct]] internal method
            // of C with an argument list containing the single item len.
            // 14. a. Else, Let A be ArrayCreate(len).
            var A = isCallable(C) ? Object(new C(len)) : new Array(len);

            // 16. Let k be 0.
            var k = 0;
            // 17. Repeat, while k < len… (also steps a - h)
            var kValue;
            while (k < len) {
                kValue = items[k];
                if (mapFn) {
                    A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                } else {
                    A[k] = kValue;
                }
                k += 1;
            }
            // 18. Let putStatus be Put(A, "length", len, true).
            A.length = len;
            // 20. Return A.
            return A;
        };
    }());
}

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
    let slug = this.getAttribute('data-slug');
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
        window.open(contactModalIframeNode.dataset.src, '_blank');
    } else {
        Avgrund.show('.contact__modal');
    }
}

function _closeContactModal() {
    Avgrund.hide('.contact__modal');
}

function _loaderCleanup() {
    loaderWrapper.classList.add('hidden--animated');
    document.body.classList.remove('loading');

    setTimeout(function() {
        document.body.removeChild(loaderWrapper);
    }, 1000);
}

function _loaderComplete() {
    window.scrollTo(0, 0);
    if(breakpoint.value === 'mobile') {
        _loaderCleanup();
    } else {
        contactModalIframeNode.src = contactModalIframeNode.dataset.src;
        contactModalIframeNode.onload = () => {
            _loaderCleanup();
        };
    }
}

Array.from(workNodes).forEach((workItem) => {
    workItem.addEventListener('mouseup', _openWorkModal);
});


document.addEventListener("DOMContentLoaded", function(){
    document.body.classList.add('loading');

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
