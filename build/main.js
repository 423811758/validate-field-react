!function(r){function t(n){if(e[n])return e[n].exports;var o=e[n]={exports:{},id:n,loaded:!1};return r[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var e={};return t.m=r,t.c=e,t.p="/",t(0)}([function(r,t,e){e(1),r.exports=e(2)},function(r,t,e){Object.assign=e(3)},function(r,t){console.log("hello world")},function(r,t){"use strict";function e(r){if(null===r||void 0===r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function n(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;var n=Object.getOwnPropertyNames(t).map(function(r){return t[r]});if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(r){o[r]=r}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(c){return!1}}var o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;r.exports=n()?Object.assign:function(r,t){for(var n,i,a=e(r),s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var l in n)o.call(n,l)&&(a[l]=n[l]);if(Object.getOwnPropertySymbols){i=Object.getOwnPropertySymbols(n);for(var u=0;u<i.length;u++)c.call(n,i[u])&&(a[i[u]]=n[i[u]])}}return a}}]);
//# sourceMappingURL=main.js.map