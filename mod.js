// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),s="get"in n,p="set"in n,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,t,n.get),p&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function s(r){var t=function(r){return"/"===r.charAt(0)}(r),n="/"===b(r,-1);return(r=function(r,t){for(var n=0,e=r.length-1;e>=0;e--){var o=r[e];"."===o?r.splice(e,1):".."===o?(r.splice(e,1),n++):n&&(r.splice(e,1),n--)}if(t)for(;n--;n)r.unshift("..");return r}(y(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&n&&(r+="/"),(t?"/":"")+r}function p(){var r=Array.prototype.slice.call(arguments,0);return s(y(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function y(r,t){if(r.filter)return r.filter(t);for(var n=[],e=0;e<r.length;e++)t(r[e],e,r)&&n.push(r[e]);return n}var b="b"==="ab".substr(-1)?function(r,t,n){return r.substr(t,n)}:function(r,t,n){return t<0&&(t=r.length+t),r.substr(t,n)},v=/./;function d(r){return"boolean"==typeof r}var j="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return j&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;var m,h="function"==typeof Symbol?Symbol.toStringTag:"";m=_()?function(r){var t,n,e,o,u;if(null==r)return g.call(r);n=r[h],u=h,t=null!=(o=r)&&w.call(o,u);try{r[h]=void 0}catch(t){return g.call(r)}return e=g.call(r),t?r[h]=n:delete r[h],e}:function(r){return g.call(r)};var O=m,E=Boolean.prototype.toString;var S=_();function N(r){return"object"==typeof r&&(r instanceof Boolean||(S?function(r){try{return E.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===O(r)))}function A(r){return d(r)||N(r)}function P(){return new Function("return this;")()}l(A,"isPrimitive",d),l(A,"isObject",N);var B="object"==typeof self?self:null,T="object"==typeof window?window:null,k="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},x="object"==typeof k?k:null;var M=function(r){if(arguments.length){if(!d(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return P()}if(B)return B;if(T)return T;if(x)return x;throw new Error("unexpected error. Unable to resolve global object.")}(),V=M.document&&M.document.childNodes,C=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var G,L=/^\s*function\s*([^(]*)/i;l(F,"REGEXP",L),G=Array.isArray?Array.isArray:function(r){return"[object Array]"===O(r)};var q=G;function I(r){return null!==r&&"object"==typeof r}var J=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!q(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(I);function R(r){var t,n,e,o;if(("Object"===(n=O(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=L.exec(e.toString()))return t[1]}return I(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(I,"isObjectLikeArray",J);var U="function"==typeof v||"object"==typeof C||"function"==typeof V?function(r){return R(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?R(r).toLowerCase():t};var X,z,D=Object.getPrototypeOf;z=Object.getPrototypeOf,X="function"===U(z)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===O(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var H=X;function K(r){return null==r?null:(r=Object(r),H(r))}function Q(r){try{return require(r)}catch(r){return function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===O(r))return!0;r=K(r)}return!1}(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}var W=Math.floor;function Y(r,t,n,e,o){var u,i,a,f,c,l,s,p,y,b,v,d,j,_;if(u=o,r<8){for(v=0,d=0,_=0;_<r;_++)(j=n[u])==j&&(v+=j,d+=1),u+=e;return t[0]+=v,t[1]+=d,t}if(r<=128){for(i=0,a=0,f=0,c=0,l=0,s=0,p=0,y=0,d=0,b=r%8,_=0;_<r-b;_+=8)(j=n[u])==j&&(i+=j,d+=1),(j=n[u+=e])==j&&(a+=j,d+=1),(j=n[u+=e])==j&&(f+=j,d+=1),(j=n[u+=e])==j&&(c+=j,d+=1),(j=n[u+=e])==j&&(l+=j,d+=1),(j=n[u+=e])==j&&(s+=j,d+=1),(j=n[u+=e])==j&&(p+=j,d+=1),(j=n[u+=e])==j&&(y+=j,d+=1),u+=e;for(v=i+a+(f+c)+(l+s+(p+y));_<r;_++)(j=n[u])==j&&(v+=j,d+=1),u+=e;return t[0]+=v,t[1]+=d,t}return d=W(r/2),Y(d-=d%8,t,n,e,u)+Y(r-d,t,n,e,u+d*e)}var Z=[0,0];function $(r,t,n,e){var o,u,i,a,f,c,l,s,p;if(r<=0)return NaN;if(1===r||0===e)return(l=n[0])==l&&r-t>0?0:NaN;if(u=e<0?(1-r)*e:0,Z[0]=0,Z[1]=0,Y(r,Z,n,e,u),(a=(s=Z[1])-t)<=0)return NaN;for(o=Z[0]/s,i=0,f=0,p=0;p<r;p++)(l=n[u])==l&&(i+=(c=l-o)*c,f+=c),u+=e;return i/a-f/s*(f/a)}var rr,tr=[0,0];l($,"ndarray",(function(r,t,n,e,o){var u,i,a,f,c,l,s,p,y;if(r<=0)return NaN;if(1===r||0===e)return(s=n[o])==s&&r-t>0?0:NaN;if(tr[0]=0,tr[1]=0,Y(r,tr,n,e,o),(f=(p=tr[1])-t)<=0)return NaN;for(u=tr[0]/p,i=o,a=0,c=0,y=0;y<r;y++)(s=n[i])==s&&(a+=(l=s-u)*l,c+=l),i+=e;return a/f-c/p*(c/f)}));var nr=Q(p("/home/runner/work/stats-base-dnanstdev/stats-base-dnanstdev/node_modules/@stdlib/stats-base-dnanvariancepn/lib","./native.js")),er=rr=nr instanceof Error?$:nr;const{ndarray:or}=rr;var ur,ir=Math.sqrt;function ar(r,t,n,e){return ir(er(r,t,n,e))}l(ar,"ndarray",(function(r,t,n,e,o){return ir(or(r,t,n,e,o))}));var fr=Q(p("/home/runner/work/stats-base-dnanstdev/stats-base-dnanstdev/node_modules/@stdlib/stats-base-dnanstdevpn/lib","./native.js")),cr=ur=fr instanceof Error?ar:fr;const{ndarray:lr}=ur;function sr(r,t,n,e){return cr(r,t,n,e)}function pr(r,t,n,e,o){return lr(r,t,n,e,o)}l(sr,"ndarray",pr);export{sr as default,pr as ndarray};
//# sourceMappingURL=mod.js.map
