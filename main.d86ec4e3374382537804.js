!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=24)}([function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")()}).call(this,n(27))},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(5),o=n(16),i=n(10);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(1);e.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(31),o=n(32);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.4.1",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t,n){var r=n(11),o=n(13);e.exports=function(e){return r(o(e))}},function(e,t,n){var r=n(0),o=n(4);e.exports=function(e,t){try{o(r,e,t)}catch(n){r[e]=t}return t}},function(e,t,n){var r=n(5),o=n(28),i=n(10),c=n(7),u=n(14),a=n(3),s=n(15),f=Object.getOwnPropertyDescriptor;t.f=r?f:function(e,t){if(e=c(e),t=u(t,!0),s)try{return f(e,t)}catch(e){}if(a(e,t))return i(!o.f.call(e,t),e[t])}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(1),o=n(12),i="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?i.call(e,""):Object(e)}:Object},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,t,n){var r=n(2);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var r=n(5),o=n(1),i=n(29);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(5),o=n(15),i=n(17),c=n(14),u=Object.defineProperty;t.f=r?u:function(e,t,n){if(i(e),t=c(t,!0),i(n),o)try{return u(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(2);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t,n){var r=n(6);e.exports=r("native-function-to-string",Function.toString)},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},function(e,t){e.exports={}},function(e,t,n){var r=n(22),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t,n){"use strict";var r=n(47).forEach,o=n(55);e.exports=o("forEach")?function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(e,t,n){"use strict";n.r(t);n(25),n(56),n(58);var r=document.querySelector(".popup__close"),o=document.querySelector(".popup__login"),i=document.querySelector(".header__button"),c=document.querySelector(".popup__button"),u=document.querySelector(".popup__successsignup"),a=document.getElementById("link-createuser"),s=document.querySelector(".popup__createuser"),f=document.getElementById("link-login"),l=document.querySelector(".button_cardlist"),p=document.querySelectorAll(".hidden"),d=document.querySelector(".popup__input"),v=document.querySelector(".news-list__card_help-message"),y=document.querySelector(".news-list__card_icon"),_=document.querySelectorAll(".news-list__card_icon_mark-icon"),m=document.querySelector(".header__menu-icon"),h=document.querySelector(".header__nav-block"),g=document.querySelector(".header"),b=document.getElementById("error");m.addEventListener("click",(function(){"header__menu-icon header__menu-icon_white header__menu-icon_close"===m.classList.value?(h.classList.remove("header__nav-block_is-opened"),g.style.backgroundColor="",m.style.backgroundImage="url(./images/menu.svg)",m.classList.remove("header__menu-icon_close")):"header__menu-icon header__menu-icon_close-white"===m.classList.value?(h.classList.remove("header__nav-block_is-opened"),g.style.backgroundColor="",m.style.backgroundImage="url(./images/menu_savenews.svg)",m.classList.remove("header__menu-icon_close")):"header__menu-icon header__menu-icon_white"===m.classList.value?(h.classList.add("header__nav-block_is-opened"),g.style.backgroundColor="#1A1B22",m.style.backgroundImage="url(./images/back.svg)",m.classList.add("header__menu-icon_close")):"header__menu-icon header__menu-icon_black"===m.classList.value&&(h.classList.add("header__nav-block_is-opened"),g.style.backgroundColor="#ffffff",m.classList.add("header__menu-icon_close"))})),i.addEventListener("click",(function(){o.classList.add("popup_is-opened"),g.style.backgroundColor=""})),c.addEventListener("click",(function(e){e.preventDefault(),u.classList.add("popup_is-opened"),o.classList.remove("popup_is-opened")})),a.addEventListener("click",(function(e){e.preventDefault(),o.classList.remove("popup_is-opened"),s.classList.add("popup_is-opened")})),f.addEventListener("click",(function(e){e.preventDefault(),s.classList.remove("popup_is-opened"),o.classList.add("popup_is-opened")})),l.addEventListener("click",(function(){p.forEach((function(e){e.classList.remove("hidden")}))})),d.addEventListener("input",(function(){c.classList.add("popup__button_active"),b.classList.add("error_open"),event.target.classList.add("error_open")})),y.addEventListener("mouseover",(function(){v.classList.add("news-list__card_help-message_is-opened")})),y.addEventListener("mouseout",(function(){v.classList.remove("news-list__card_help-message_is-opened")})),_.forEach((function(e){e.addEventListener("click",(function(){event.target.style.backgroundImage="url(./images/bookmark.png)"}))})),r.addEventListener("click",(function(){o.classList.remove("popup_is-opened")}))},function(e,t,n){"use strict";var r=n(26),o=n(23);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(e,t,n){var r=n(0),o=n(9).f,i=n(4),c=n(30),u=n(8),a=n(36),s=n(46);e.exports=function(e,t){var n,f,l,p,d,v=e.target,y=e.global,_=e.stat;if(n=y?r:_?r[v]||u(v,{}):(r[v]||{}).prototype)for(f in t){if(p=t[f],l=e.noTargetGet?(d=o(n,f))&&d.value:n[f],!s(y?f:v+(_?".":"#")+f,e.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(e.sham||l&&l.sham)&&i(p,"sham",!0),c(n,f,p,e)}}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);t.f=i?function(e){var t=o(this,e);return!!t&&t.enumerable}:r},function(e,t,n){var r=n(0),o=n(2),i=r.document,c=o(i)&&o(i.createElement);e.exports=function(e){return c?i.createElement(e):{}}},function(e,t,n){var r=n(0),o=n(6),i=n(4),c=n(3),u=n(8),a=n(18),s=n(33),f=s.get,l=s.enforce,p=String(a).split("toString");o("inspectSource",(function(e){return a.call(e)})),(e.exports=function(e,t,n,o){var a=!!o&&!!o.unsafe,s=!!o&&!!o.enumerable,f=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof t||c(n,"name")||i(n,"name",t),l(n).source=p.join("string"==typeof t?t:"")),e!==r?(a?!f&&e[t]&&(s=!0):delete e[t],s?e[t]=n:i(e,t,n)):s?e[t]=n:u(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||a.call(this)}))},function(e,t){e.exports=!1},function(e,t,n){var r=n(0),o=n(8),i=r["__core-js_shared__"]||o("__core-js_shared__",{});e.exports=i},function(e,t,n){var r,o,i,c=n(34),u=n(0),a=n(2),s=n(4),f=n(3),l=n(35),p=n(20),d=u.WeakMap;if(c){var v=new d,y=v.get,_=v.has,m=v.set;r=function(e,t){return m.call(v,e,t),t},o=function(e){return y.call(v,e)||{}},i=function(e){return _.call(v,e)}}else{var h=l("state");p[h]=!0,r=function(e,t){return s(e,h,t),t},o=function(e){return f(e,h)?e[h]:{}},i=function(e){return f(e,h)}}e.exports={set:r,get:o,has:i,enforce:function(e){return i(e)?o(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!a(t)||(n=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},function(e,t,n){var r=n(0),o=n(18),i=r.WeakMap;e.exports="function"==typeof i&&/native code/.test(o.call(i))},function(e,t,n){var r=n(6),o=n(19),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},function(e,t,n){var r=n(3),o=n(37),i=n(9),c=n(16);e.exports=function(e,t){for(var n=o(t),u=c.f,a=i.f,s=0;s<n.length;s++){var f=n[s];r(e,f)||u(e,f,a(t,f))}}},function(e,t,n){var r=n(38),o=n(40),i=n(45),c=n(17);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(c(e)),n=i.f;return n?t.concat(n(e)):t}},function(e,t,n){var r=n(39),o=n(0),i=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e])||i(o[e]):r[e]&&r[e][t]||o[e]&&o[e][t]}},function(e,t,n){e.exports=n(0)},function(e,t,n){var r=n(41),o=n(44).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},function(e,t,n){var r=n(3),o=n(7),i=n(42).indexOf,c=n(20);e.exports=function(e,t){var n,u=o(e),a=0,s=[];for(n in u)!r(c,n)&&r(u,n)&&s.push(n);for(;t.length>a;)r(u,n=t[a++])&&(~i(s,n)||s.push(n));return s}},function(e,t,n){var r=n(7),o=n(21),i=n(43),c=function(e){return function(t,n,c){var u,a=r(t),s=o(a.length),f=i(c,s);if(e&&n!=n){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((e||f in a)&&a[f]===n)return e||f||0;return!e&&-1}};e.exports={includes:c(!0),indexOf:c(!1)}},function(e,t,n){var r=n(22),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var r=n(1),o=/#|\.prototype\./,i=function(e,t){var n=u[c(e)];return n==s||n!=a&&("function"==typeof t?r(t):!!t)},c=i.normalize=function(e){return String(e).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",s=i.POLYFILL="P";e.exports=i},function(e,t,n){var r=n(48),o=n(11),i=n(50),c=n(21),u=n(51),a=[].push,s=function(e){var t=1==e,n=2==e,s=3==e,f=4==e,l=6==e,p=5==e||l;return function(d,v,y,_){for(var m,h,g=i(d),b=o(g),L=r(v,y,3),S=c(b.length),x=0,w=_||u,E=t?w(d,S):n?w(d,0):void 0;S>x;x++)if((p||x in b)&&(h=L(m=b[x],x,g),e))if(t)E[x]=h;else if(h)switch(e){case 3:return!0;case 5:return m;case 6:return x;case 2:a.call(E,m)}else if(f)return!1;return l?-1:s||f?f:E}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(e,t,n){var r=n(49);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,t,n){var r=n(13);e.exports=function(e){return Object(r(e))}},function(e,t,n){var r=n(2),o=n(52),i=n(53)("species");e.exports=function(e,t){var n;return o(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},function(e,t,n){var r=n(12);e.exports=Array.isArray||function(e){return"Array"==r(e)}},function(e,t,n){var r=n(0),o=n(6),i=n(19),c=n(54),u=r.Symbol,a=o("wks");e.exports=function(e){return a[e]||(a[e]=c&&u[e]||(c?u:i)("Symbol."+e))}},function(e,t,n){var r=n(1);e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t){var n=[][e];return!n||!r((function(){n.call(null,t||function(){throw 1},1)}))}},function(e,t,n){var r=n(0),o=n(57),i=n(23),c=n(4);for(var u in o){var a=r[u],s=a&&a.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(e){s.forEach=i}}},function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(e,t,n){}]);