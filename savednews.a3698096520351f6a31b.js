!function(e){var n={};function o(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=n,o.d=function(e,n,r){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)o.d(r,t,function(n){return e[n]}.bind(null,t));return r},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=59)}({59:function(e,n,o){"use strict";o.r(n);o(60);var r=document.querySelector(".news-list__help-message"),t=document.querySelector(".news-list__icon"),s=document.querySelector(".header__menu-icon"),a=document.querySelector(".header__nav-block"),c=document.querySelector(".header");s.addEventListener("click",(function(){"header__menu-icon header__menu-icon_white header__menu-icon_close"===s.classList.value?(a.classList.remove("header__nav-block_is-opened"),c.style.backgroundColor="",s.style.backgroundImage="url(./images/menu.svg)",s.classList.remove("header__menu-icon_close")):"header__menu-icon header__menu-icon_close-white"===s.classList.value?(a.classList.remove("header__nav-block_is-opened"),c.style.backgroundColor="",s.style.backgroundImage="url(./images/menu_savenews.svg)",s.classList.remove("header__menu-icon_close")):"header__menu-icon header__menu-icon_white"===s.classList.value?(a.classList.add("header__nav-block_is-opened"),c.style.backgroundColor="#1A1B22",s.style.backgroundImage="url(./images/back.svg)",s.classList.add("header__menu-icon_close")):"header__menu-icon header__menu-icon_black"===s.classList.value&&(a.classList.add("header__nav-block_is-opened"),c.style.backgroundColor="#ffffff",s.classList.add("header__menu-icon_close"))})),t.addEventListener("mouseover",(function(){r.classList.add("news-list__help-message_is-opened")})),t.addEventListener("mouseout",(function(){r.classList.remove("news-list__help-message_is-opened")}))},60:function(e,n,o){}});