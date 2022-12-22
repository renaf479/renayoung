"use strict";function _openWorkModal(){var e=this.getAttribute("data-slug"),t="/works/"+e;workModalIframe.src=t,workModalIframe.onload=function(){Avgrund.show(".work__modal")}}function _closeWorkModal(){Avgrund.hide(".work__modal")}function _openContactModal(){"mobile"===breakpoint.value?window.open(contactModalIframeNode.dataset.src,"_blank"):Avgrund.show(".contact__modal")}function _closeContactModal(){Avgrund.hide(".contact__modal")}function _loaderCleanup(){loaderWrapper.classList.add("hidden--animated"),document.body.classList.remove("loading"),setTimeout(function(){document.body.removeChild(loaderWrapper)},1e3)}function _loaderComplete(){window.scrollTo(0,0),"mobile"===breakpoint.value?_loaderCleanup():(contactModalIframeNode.src=contactModalIframeNode.dataset.src,contactModalIframeNode.onload=function(){_loaderCleanup()})}var Avgrund=function(){function e(e){27===e.keyCode&&o()}function t(e){e.target===d&&o()}function n(n){document.addEventListener("keyup",e,!1),document.addEventListener("click",t,!1),document.addEventListener("touchstart",t,!1),c.classList.remove(l),c.classList.add("no-transition"),n&&c.classList.add(n),setTimeout(function(){c.classList.remove("no-transition"),s.classList.add("avgrund-active")},0),l=n}function o(){document.removeEventListener("keyup",e,!1),document.removeEventListener("click",t,!1),document.removeEventListener("touchstart",t,!1),s.classList.remove("avgrund-active"),c.classList.remove("avgrund-popup-animate")}function r(){document.documentElement.classList.add("no-blur")}function a(e){return c=document.querySelector(e),c.classList.add("avgrund-popup-animate"),n(),this}function i(){o()}var s=document.documentElement,c=document.querySelector(".avgrund-popup-animate"),d=document.querySelector(".avgrund-cover"),l=null;return s.classList.add("avgrund-ready"),{activate:n,deactivate:o,disableBlur:r,show:a,hide:i}}(),Meny={create:function(e){return function(){function t(e){Meny.extend(z,e),n(),o(),r(),a(),i(),s()}function n(){switch(k="",N="",z.position){case X:M="50% 0%",x="rotateX( 30deg ) translateY( -100% ) translateY( "+z.overlap+"px )",C="50% 0",W="translateY( "+z.height+"px ) rotateX( -15deg )",_={top:"-"+(z.height-z.overlap)+"px"},L={top:"0px"},T={top:"0px"},A={top:z.height+"px"};break;case D:M="100% 50%",x="rotateY( 30deg ) translateX( 100% ) translateX( -2px ) scale( 1.01 )",C="100% 50%",W="translateX( -"+z.width+"px ) rotateY( -15deg )",_={right:"-"+(z.width-z.overlap)+"px"},L={right:"0px"},T={left:"0px"},A={left:"-"+z.width+"px"};break;case B:M="50% 100%",x="rotateX( -30deg ) translateY( 100% ) translateY( -"+z.overlap+"px )",C="50% 100%",W="translateY( -"+z.height+"px ) rotateX( 15deg )",_={bottom:"-"+(z.height-z.overlap)+"px"},L={bottom:"0px"},T={top:"0px"},A={top:"-"+z.height+"px"};break;default:M="100% 50%",x="translateX( -100% ) translateX( "+z.overlap+"px ) scale( 1.01 ) rotateY( -30deg )",C="0 50%",W="translateX( "+z.width+"px ) rotateY( 15deg )",_={left:"-"+(z.width-z.overlap)+"px"},L={left:"0px"},T={left:"0px"},A={left:z.width+"px"}}}function o(){Meny.addClass(j.wrapper,"meny-"+z.position),G.wrapper=j.wrapper.style.cssText,j.wrapper.style[Meny.prefix("perspective")]="800px",j.wrapper.style[Meny.prefix("perspectiveOrigin")]=C}function r(){j.cover&&j.cover.parentNode.removeChild(j.cover),j.cover=document.createElement("div"),j.cover.style.position="absolute",j.cover.style.display="block",j.cover.style.width="100%",j.cover.style.height="100%",j.cover.style.left=0,j.cover.style.top=0,j.cover.style.zIndex=1e3,j.cover.style.visibility="hidden",j.cover.style.opacity=0;try{j.cover.style.background="rgba( 0, 0, 0, 0.4 )",j.cover.style.background="-ms-linear-gradient("+z.position+", rgba(0,0,0,0.20) 0%,rgba(0,0,0,0.65) 100%)",j.cover.style.background="-moz-linear-gradient("+z.position+", rgba(0,0,0,0.20) 0%,rgba(0,0,0,0.65) 100%)",j.cover.style.background="-webkit-linear-gradient("+z.position+", rgba(0,0,0,0.20) 0%,rgba(0,0,0,0.65) 100%)"}catch(e){}q&&(j.cover.style[Meny.prefix("transition")]="all "+z.transitionDuration+" "+z.transitionEasing),j.contents.appendChild(j.cover)}function a(){var e=j.menu.style;switch(z.position){case X:e.width="100%",e.height=z.height+"px";break;case D:e.right="0",e.width=z.width+"px",e.height="100%";break;case B:e.bottom="0",e.width="100%",e.height=z.height+"px";break;case S:e.width=z.width+"px",e.height="100%"}G.menu=e.cssText,e.position="fixed",e.display="block",e.zIndex=1,q?(e[Meny.prefix("transform")]=x,e[Meny.prefix("transformOrigin")]=M,e[Meny.prefix("transition")]="all "+z.transitionDuration+" "+z.transitionEasing):Meny.extend(e,_)}function i(){var e=j.contents.style;G.contents=e.cssText,q?(e[Meny.prefix("transform")]=N,e[Meny.prefix("transformOrigin")]=C,e[Meny.prefix("transition")]="all "+z.transitionDuration+" "+z.transitionEasing):(e.position=e.position.match(/relative|absolute|fixed/gi)?e.position:"relative",Meny.extend(e,T))}function s(){"ontouchstart"in window&&(z.touch?(Meny.bindEvent(document,"touchstart",v),Meny.bindEvent(document,"touchend",f)):(Meny.unbindEvent(document,"touchstart",v),Meny.unbindEvent(document,"touchend",f))),z.mouse?(Meny.bindEvent(document,"mousedown",u),Meny.bindEvent(document,"mouseup",m),Meny.bindEvent(document,"mousemove",p)):(Meny.unbindEvent(document,"mousedown",u),Meny.unbindEvent(document,"mouseup",m),Meny.unbindEvent(document,"mousemove",p))}function c(){Z||(Z=!0,Meny.addClass(j.wrapper,"meny-active"),j.cover.style.height=j.contents.scrollHeight+"px",j.cover.style.visibility="visible",q?(Meny.bindEventOnce(j.wrapper,"transitionend",function(){Meny.dispatchEvent(j.menu,"opened")}),j.cover.style.opacity=1,j.contents.style[Meny.prefix("transform")]=W,j.menu.style[Meny.prefix("transform")]=k):(I&&I.stop(),I=Meny.animate(j.menu,L,500),Y&&Y.stop(),Y=Meny.animate(j.contents,A,500),O&&O.stop(),O=Meny.animate(j.cover,{opacity:1},500)),Meny.dispatchEvent(j.menu,"open"))}function d(){Z&&(Z=!1,Meny.removeClass(j.wrapper,"meny-active"),q?(Meny.bindEventOnce(j.wrapper,"transitionend",function(){Meny.dispatchEvent(j.menu,"closed")}),j.cover.style.visibility="hidden",j.cover.style.opacity=0,j.contents.style[Meny.prefix("transform")]=N,j.menu.style[Meny.prefix("transform")]=x):(I&&I.stop(),I=Meny.animate(j.menu,_,500),Y&&Y.stop(),Y=Meny.animate(j.contents,T,500),O&&O.stop(),O=Meny.animate(j.cover,{opacity:0},500,function(){j.cover.style.visibility="hidden",Meny.dispatchEvent(j.menu,"closed")})),Meny.dispatchEvent(j.menu,"close"))}function l(){j.wrapper.style.cssText=G.wrapper,j.menu.style.cssText=G.menu,j.contents.style.cssText=G.contents,j.cover&&j.cover.parentNode&&j.cover.parentNode.removeChild(j.cover),Meny.unbindEvent(document,"touchstart",v),Meny.unbindEvent(document,"touchend",f),Meny.unbindEvent(document,"mousedown",u),Meny.unbindEvent(document,"mouseup",m),Meny.unbindEvent(document,"mousemove",p);for(var e in J)this.removeEventListener(J[e][0],J[e][1]);J=[]}function u(e){$=!0}function p(e){if(!$){var t=e.clientX-P,n=e.clientY-F;switch(z.position){case X:n>z.height?d():n<z.threshold&&c();break;case D:var o=j.wrapper.offsetWidth;t<o-z.width?d():t>o-z.threshold&&c();break;case B:var r=j.wrapper.offsetHeight;n<r-z.height?d():n>r-z.threshold&&c();break;case S:t>z.width?d():t<z.threshold&&c()}}}function m(e){$=!1}function v(e){H=e.touches[0].clientX-P,V=e.touches[0].clientY-F,Q=null,U=null,Meny.bindEvent(document,"touchmove",h)}function h(e){Q=e.touches[0].clientX-P,U=e.touches[0].clientY-F;var t=null;Math.abs(Q-H)>Math.abs(U-V)?Q<H-z.threshold?t=b:Q>H+z.threshold&&(t=g):U<V-z.threshold?t=E:U>V+z.threshold&&(t=w),t&&t()&&e.preventDefault()}function f(e){Meny.unbindEvent(document,"touchmove",h),null===Q&&null===U&&y()}function y(){var e=z.position===X&&V>z.height||z.position===D&&H<j.wrapper.offsetWidth-z.width||z.position===B&&V<j.wrapper.offsetHeight-z.height||z.position===S&&H>z.width;e&&d()}function g(){return z.position===D&&Z?(d(),!0):z.position!==S||Z?void 0:(c(),!0)}function b(){return z.position!==D||Z?z.position===S&&Z?(d(),!0):void 0:(c(),!0)}function w(){return z.position===B&&Z?(d(),!0):z.position!==X||Z?void 0:(c(),!0)}function E(){return z.position!==B||Z?z.position===X&&Z?(d(),!0):void 0:(c(),!0)}if(!e||!e.menuElement||!e.contentsElement)throw"You need to specify which menu and contents elements to use.";if(e.menuElement.parentNode!==e.contentsElement.parentNode)throw"The menu and contents elements must have the same parent.";var M,x,k,_,L,C,N,W,T,A,I,Y,O,X="top",D="right",B="bottom",S="left",q="WebkitPerspective"in document.body.style||"MozPerspective"in document.body.style||"msPerspective"in document.body.style||"OPerspective"in document.body.style||"perspective"in document.body.style,z={width:300,height:300,position:S,threshold:40,overlap:6,transitionDuration:"0.5s",transitionEasing:"ease",mouse:!0,touch:!0},j={menu:e.menuElement,contents:e.contentsElement,wrapper:e.menuElement.parentNode,cover:null},P=j.wrapper.offsetLeft,F=j.wrapper.offsetTop,H=null,V=null,Q=null,U=null,Z=!1,$=!1,G={},J=[];return t(e),{configure:t,open:c,close:d,destroy:l,isOpen:function(){return Z},addEventListener:function(e,t){J.push([e,t]),j.menu&&Meny.bindEvent(j.menu,e,t)},removeEventListener:function(e,t){j.menu&&Meny.unbindEvent(j.menu,e,t)}}}()},animate:function(e,t,n,o){return function(){function r(){var t=1-Math.pow(1-(Date.now()-d)/n,5);for(var s in i){var l=i[s];e.style[s]=l.start+(l.end-l.start)*t+l.unit}t<1?c=setTimeout(r,1e3/60):(o&&o(),a())}function a(){clearTimeout(c)}var i={};for(var s in t)i[s]={start:parseFloat(e.style[s])||0,end:parseFloat(t[s]),unit:"string"==typeof t[s]&&t[s].match(/px|em|%/gi)?t[s].match(/px|em|%/gi)[0]:""};var c,d=Date.now();return r(),{stop:a}}()},extend:function(e,t){for(var n in t)e[n]=t[n]},prefix:function(e,t){for(var n=e.slice(0,1).toUpperCase()+e.slice(1),o=["Webkit","Moz","O","ms"],r=0,a=o.length;r<a;r++){var i=o[r];if("undefined"!=typeof(t||document.body).style[i+n])return i+n}return e},addClass:function(e,t){e.className=e.className.replace(/\s+$/gi,"")+" "+t},removeClass:function(e,t){e.className=e.className.replace(t,"")},bindEvent:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},unbindEvent:function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)},bindEventOnce:function(e,t,n){var o=this,r=function r(){o.unbindEvent(e,t,r),n.apply(this,arguments)};this.bindEvent(e,t,r)},dispatchEvent:function(e,t,n){if(e){var o=document.createEvent("HTMLEvents",1,2);o.initEvent(t,!0,!0),Meny.extend(o,n),e.dispatchEvent(o)}},getQuery:function(){var e={};return location.search.replace(/[A-Z0-9]+?=([\w|:|\/\.]*)/gi,function(t){e[t.split("=").shift()]=t.split("=").pop()}),e}};"function"!=typeof Date.now&&(Date.now=function(){return(new Date).getTime()}),"forEach"in Array.prototype||(Array.prototype.forEach=function(e,t){for(var n=0,o=this.length;n<o;n++)n in this&&e.call(t,this[n],n,this)}),Array.from||(Array.from=function(){var e=Object.prototype.toString,t=function(t){return"function"==typeof t||"[object Function]"===e.call(t)},n=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t},o=Math.pow(2,53)-1,r=function(e){var t=n(e);return Math.min(Math.max(t,0),o)};return function(e){var n=this,o=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var a,i=arguments.length>1?arguments[1]:void 0;if("undefined"!=typeof i){if(!t(i))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(a=arguments[2])}for(var s,c=r(o.length),d=t(n)?Object(new n(c)):new Array(c),l=0;l<c;)s=o[l],i?d[l]="undefined"==typeof a?i(s,l):i.call(a,s,l):d[l]=s,l+=1;return d.length=c,d}}());var worksWrapper=document.querySelector(".works"),contactWrapper=document.querySelector(".contact__cta"),workModalWrapper=document.getElementById("work__modal"),contactModalWrapper=document.getElementById("contact__modal"),contactModalIframeNode=document.getElementById("contact__modal__iframe"),loaderWrapper=document.getElementById("loader"),loaderCallbackNode=document.getElementById("loader__callback"),workNodes=worksWrapper.getElementsByClassName("timeline__item__svg"),workModalIframe=workModalWrapper.getElementsByClassName("single__iframe")[0],breakpoint={};breakpoint.refreshValue=function(){this.value=window.getComputedStyle(document.querySelector("body"),":before").getPropertyValue("content").replace(/\"/g,"")},Array.from(workNodes).forEach(function(e){e.addEventListener("mouseup",_openWorkModal)}),document.addEventListener("DOMContentLoaded",function(){document.body.classList.add("loading"),(window.onresize=function(){breakpoint.refreshValue()})(),contactWrapper.addEventListener("mouseup",_openContactModal),workModalWrapper.getElementsByClassName("modal__close")[0].addEventListener("mouseup",_closeWorkModal),contactModalWrapper.getElementsByClassName("modal__close")[0].addEventListener("mouseup",_closeContactModal),loaderCallbackNode.addEventListener("webkitAnimationEnd",_loaderComplete,!1),loaderCallbackNode.addEventListener("animationend",_loaderComplete,!1),loaderCallbackNode.addEventListener("oanimationend",_loaderComplete,!1)});