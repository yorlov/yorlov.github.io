!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),u=n.n(o);n(2);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var u,l=e[Symbol.iterator]();!(r=(u=l.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c=function(e){var t=e.date,n=e.ownTeam,r=e.rivalTeam,o=function(e,t){return e>t?"win":e<t?"loss":"tie"}(n,r),u=new Date(t).toLocaleDateString("ru-RU",{day:"numeric",month:"long"});return a.a.createElement("tr",{className:o},a.a.createElement("td",null,u),a.a.createElement("td",null,n),a.a.createElement("td",null,r))},i=function(e){var t=e.games;return a.a.createElement("table",null,a.a.createElement("caption",null,"2019"),a.a.createElement("thead",null,a.a.createElement("tr",null,["Игра","Юра","Илья"].map(function(e){return a.a.createElement("th",{key:e},e)}))),a.a.createElement("tbody",null,t.map(function(e){var t=l(e,3),n=t[0],r=t[1],o=t[2];return a.a.createElement(c,{key:n,date:n,ownTeam:r,rivalTeam:o})})))};fetch("games.json").then(function(e){return e.json()}).then(function(e){u.a.render(a.a.createElement(i,{games:e}),document.getElementById("app"))})}]);