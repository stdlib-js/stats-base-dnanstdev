"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=t(function(h,s){
var x=require('@stdlib/stats-base-dnanstdevpn/dist');function f(e,r,n,a){return x(e,r,n,a)}s.exports=f
});var d=t(function(k,v){
var j=require('@stdlib/stats-base-dnanstdevpn/dist').ndarray;function m(e,r,n,a,y){return j(e,r,n,a,y)}v.exports=m
});var p=t(function(w,o){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=u(),R=d();l(q,"ndarray",R);o.exports=q
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=p(),i,c=E(_(__dirname,"./native.js"));O(c)?i=b:i=c;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
