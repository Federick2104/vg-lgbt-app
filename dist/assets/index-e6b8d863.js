(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function rd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bs={exports:{}},Vo={},Hs={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pt=Symbol.for("react.element"),td=Symbol.for("react.portal"),od=Symbol.for("react.fragment"),ad=Symbol.for("react.strict_mode"),ld=Symbol.for("react.profiler"),id=Symbol.for("react.provider"),sd=Symbol.for("react.context"),ud=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),dd=Symbol.for("react.memo"),fd=Symbol.for("react.lazy"),Ni=Symbol.iterator;function pd(e){return e===null||typeof e!="object"?null:(e=Ni&&e[Ni]||e["@@iterator"],typeof e=="function"?e:null)}var Is={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$s=Object.assign,Us={};function Tr(e,n,r){this.props=e,this.context=n,this.refs=Us,this.updater=r||Is}Tr.prototype.isReactComponent={};Tr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vs(){}Vs.prototype=Tr.prototype;function _l(e,n,r){this.props=e,this.context=n,this.refs=Us,this.updater=r||Is}var Pl=_l.prototype=new Vs;Pl.constructor=_l;$s(Pl,Tr.prototype);Pl.isPureReactComponent=!0;var Fi=Array.isArray,Xs=Object.prototype.hasOwnProperty,Ml={current:null},Gs={key:!0,ref:!0,__self:!0,__source:!0};function Ys(e,n,r){var t,o={},a=null,l=null;if(n!=null)for(t in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(a=""+n.key),n)Xs.call(n,t)&&!Gs.hasOwnProperty(t)&&(o[t]=n[t]);var i=arguments.length-2;if(i===1)o.children=r;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(t in i=e.defaultProps,i)o[t]===void 0&&(o[t]=i[t]);return{$$typeof:Pt,type:e,key:a,ref:l,props:o,_owner:Ml.current}}function vd(e,n){return{$$typeof:Pt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Al(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pt}function hd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return n[r]})}var Li=/\/+/g;function ua(e,n){return typeof e=="object"&&e!==null&&e.key!=null?hd(""+e.key):n.toString(36)}function ao(e,n,r,t,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Pt:case td:l=!0}}if(l)return l=e,o=o(l),e=t===""?"."+ua(l,0):t,Fi(o)?(r="",e!=null&&(r=e.replace(Li,"$&/")+"/"),ao(o,n,r,"",function(u){return u})):o!=null&&(Al(o)&&(o=vd(o,r+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Li,"$&/")+"/")+e)),n.push(o)),1;if(l=0,t=t===""?".":t+":",Fi(e))for(var i=0;i<e.length;i++){a=e[i];var s=t+ua(a,i);l+=ao(a,n,r,s,o)}else if(s=pd(e),typeof s=="function")for(e=s.call(e),i=0;!(a=e.next()).done;)a=a.value,s=t+ua(a,i++),l+=ao(a,n,r,s,o);else if(a==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function Bt(e,n,r){if(e==null)return e;var t=[],o=0;return ao(e,t,"","",function(a){return n.call(r,a,o++)}),t}function md(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},lo={transition:null},bd={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:lo,ReactCurrentOwner:Ml};D.Children={map:Bt,forEach:function(e,n,r){Bt(e,function(){n.apply(this,arguments)},r)},count:function(e){var n=0;return Bt(e,function(){n++}),n},toArray:function(e){return Bt(e,function(n){return n})||[]},only:function(e){if(!Al(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Tr;D.Fragment=od;D.Profiler=ld;D.PureComponent=_l;D.StrictMode=ad;D.Suspense=cd;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bd;D.cloneElement=function(e,n,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var t=$s({},e.props),o=e.key,a=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(a=n.ref,l=Ml.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in n)Xs.call(n,s)&&!Gs.hasOwnProperty(s)&&(t[s]=n[s]===void 0&&i!==void 0?i[s]:n[s])}var s=arguments.length-2;if(s===1)t.children=r;else if(1<s){i=Array(s);for(var u=0;u<s;u++)i[u]=arguments[u+2];t.children=i}return{$$typeof:Pt,type:e.type,key:o,ref:a,props:t,_owner:l}};D.createContext=function(e){return e={$$typeof:sd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:id,_context:e},e.Consumer=e};D.createElement=Ys;D.createFactory=function(e){var n=Ys.bind(null,e);return n.type=e,n};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:ud,render:e}};D.isValidElement=Al;D.lazy=function(e){return{$$typeof:fd,_payload:{_status:-1,_result:e},_init:md}};D.memo=function(e,n){return{$$typeof:dd,type:e,compare:n===void 0?null:n}};D.startTransition=function(e){var n=lo.transition;lo.transition={};try{e()}finally{lo.transition=n}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,n){return ge.current.useCallback(e,n)};D.useContext=function(e){return ge.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};D.useEffect=function(e,n){return ge.current.useEffect(e,n)};D.useId=function(){return ge.current.useId()};D.useImperativeHandle=function(e,n,r){return ge.current.useImperativeHandle(e,n,r)};D.useInsertionEffect=function(e,n){return ge.current.useInsertionEffect(e,n)};D.useLayoutEffect=function(e,n){return ge.current.useLayoutEffect(e,n)};D.useMemo=function(e,n){return ge.current.useMemo(e,n)};D.useReducer=function(e,n,r){return ge.current.useReducer(e,n,r)};D.useRef=function(e){return ge.current.useRef(e)};D.useState=function(e){return ge.current.useState(e)};D.useSyncExternalStore=function(e,n,r){return ge.current.useSyncExternalStore(e,n,r)};D.useTransition=function(){return ge.current.useTransition()};D.version="18.2.0";Hs.exports=D;var Xn=Hs.exports;const j=rd(Xn);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd=Xn,yd=Symbol.for("react.element"),xd=Symbol.for("react.fragment"),wd=Object.prototype.hasOwnProperty,kd=gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sd={key:!0,ref:!0,__self:!0,__source:!0};function Ws(e,n,r){var t,o={},a=null,l=null;r!==void 0&&(a=""+r),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(l=n.ref);for(t in n)wd.call(n,t)&&!Sd.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps,n)o[t]===void 0&&(o[t]=n[t]);return{$$typeof:yd,type:e,key:a,ref:l,props:o,_owner:kd.current}}Vo.Fragment=xd;Vo.jsx=Ws;Vo.jsxs=Ws;Bs.exports=Vo;var m=Bs.exports,Da={},Ks={exports:{}},Pe={},Qs={exports:{}},Zs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(S,L){var _=S.length;S.push(L);e:for(;0<_;){var Z=_-1>>>1,oe=S[Z];if(0<o(oe,L))S[Z]=L,S[_]=oe,_=Z;else break e}}function r(S){return S.length===0?null:S[0]}function t(S){if(S.length===0)return null;var L=S[0],_=S.pop();if(_!==L){S[0]=_;e:for(var Z=0,oe=S.length,Tt=oe>>>1;Z<Tt;){var Bn=2*(Z+1)-1,sa=S[Bn],Hn=Bn+1,Ot=S[Hn];if(0>o(sa,_))Hn<oe&&0>o(Ot,sa)?(S[Z]=Ot,S[Hn]=_,Z=Hn):(S[Z]=sa,S[Bn]=_,Z=Bn);else if(Hn<oe&&0>o(Ot,_))S[Z]=Ot,S[Hn]=_,Z=Hn;else break e}}return L}function o(S,L){var _=S.sortIndex-L.sortIndex;return _!==0?_:S.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var s=[],u=[],p=1,v=null,h=3,y=!1,x=!1,w=!1,H=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(S){for(var L=r(u);L!==null;){if(L.callback===null)t(u);else if(L.startTime<=S)t(u),L.sortIndex=L.expirationTime,n(s,L);else break;L=r(u)}}function b(S){if(w=!1,f(S),!x)if(r(s)!==null)x=!0,Tn(k);else{var L=r(u);L!==null&&On(b,L.startTime-S)}}function k(S,L){x=!1,w&&(w=!1,d(N),N=-1),y=!0;var _=h;try{for(f(L),v=r(s);v!==null&&(!(v.expirationTime>L)||S&&!te());){var Z=v.callback;if(typeof Z=="function"){v.callback=null,h=v.priorityLevel;var oe=Z(v.expirationTime<=L);L=e.unstable_now(),typeof oe=="function"?v.callback=oe:v===r(s)&&t(s),f(L)}else t(s);v=r(s)}if(v!==null)var Tt=!0;else{var Bn=r(u);Bn!==null&&On(b,Bn.startTime-L),Tt=!1}return Tt}finally{v=null,h=_,y=!1}}var C=!1,E=null,N=-1,B=5,z=-1;function te(){return!(e.unstable_now()-z<B)}function we(){if(E!==null){var S=e.unstable_now();z=S;var L=!0;try{L=E(!0,S)}finally{L?en():(C=!1,E=null)}}else C=!1}var en;if(typeof c=="function")en=function(){c(we)};else if(typeof MessageChannel<"u"){var lr=new MessageChannel,Ir=lr.port2;lr.port1.onmessage=we,en=function(){Ir.postMessage(null)}}else en=function(){H(we,0)};function Tn(S){E=S,C||(C=!0,en())}function On(S,L){N=H(function(){S(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,Tn(k))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(s)},e.unstable_next=function(S){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var _=h;h=L;try{return S()}finally{h=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,L){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var _=h;h=S;try{return L()}finally{h=_}},e.unstable_scheduleCallback=function(S,L,_){var Z=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?Z+_:Z):_=Z,S){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=_+oe,S={id:p++,callback:L,priorityLevel:S,startTime:_,expirationTime:oe,sortIndex:-1},_>Z?(S.sortIndex=_,n(u,S),r(s)===null&&S===r(u)&&(w?(d(N),N=-1):w=!0,On(b,_-Z))):(S.sortIndex=oe,n(s,S),x||y||(x=!0,Tn(k))),S},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(S){var L=h;return function(){var _=h;h=L;try{return S.apply(this,arguments)}finally{h=_}}}})(Zs);Qs.exports=Zs;var Ed=Qs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qs=Xn,_e=Ed;function g(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Js=new Set,vt={};function or(e,n){jr(e,n),jr(e+"Capture",n)}function jr(e,n){for(vt[e]=n,e=0;e<n.length;e++)Js.add(n[e])}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ta=Object.prototype.hasOwnProperty,Cd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ji={},zi={};function Nd(e){return Ta.call(zi,e)?!0:Ta.call(ji,e)?!1:Cd.test(e)?zi[e]=!0:(ji[e]=!0,!1)}function Fd(e,n,r,t){if(r!==null&&r.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return t?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ld(e,n,r,t){if(n===null||typeof n>"u"||Fd(e,n,r,t))return!0;if(t)return!1;if(r!==null)switch(r.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ye(e,n,r,t,o,a,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=t,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=l}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ce[n]=new ye(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Rl=/[\-:]([a-z])/g;function Dl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Rl,Dl);ce[n]=new ye(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Rl,Dl);ce[n]=new ye(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Rl,Dl);ce[n]=new ye(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Tl(e,n,r,t){var o=ce.hasOwnProperty(n)?ce[n]:null;(o!==null?o.type!==0:t||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ld(n,r,o,t)&&(r=null),t||o===null?Nd(n)&&(r===null?e.removeAttribute(n):e.setAttribute(n,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(n=o.attributeName,t=o.attributeNamespace,r===null?e.removeAttribute(n):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,t?e.setAttributeNS(t,n,r):e.setAttribute(n,r))))}var pn=qs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ht=Symbol.for("react.element"),dr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),Ol=Symbol.for("react.strict_mode"),Oa=Symbol.for("react.profiler"),eu=Symbol.for("react.provider"),nu=Symbol.for("react.context"),Bl=Symbol.for("react.forward_ref"),Ba=Symbol.for("react.suspense"),Ha=Symbol.for("react.suspense_list"),Hl=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),ru=Symbol.for("react.offscreen"),_i=Symbol.iterator;function $r(e){return e===null||typeof e!="object"?null:(e=_i&&e[_i]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,ca;function et(e){if(ca===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);ca=n&&n[1]||""}return`
`+ca+e}var da=!1;function fa(e,n){if(!e||da)return"";da=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var t=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){t=u}e.call(n.prototype)}else{try{throw Error()}catch(u){t=u}e()}}catch(u){if(u&&t&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=t.stack.split(`
`),l=o.length-1,i=a.length-1;1<=l&&0<=i&&o[l]!==a[i];)i--;for(;1<=l&&0<=i;l--,i--)if(o[l]!==a[i]){if(l!==1||i!==1)do if(l--,i--,0>i||o[l]!==a[i]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=i);break}}}finally{da=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?et(e):""}function jd(e){switch(e.tag){case 5:return et(e.type);case 16:return et("Lazy");case 13:return et("Suspense");case 19:return et("SuspenseList");case 0:case 2:case 15:return e=fa(e.type,!1),e;case 11:return e=fa(e.type.render,!1),e;case 1:return e=fa(e.type,!0),e;default:return""}}function Ia(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case dr:return"Portal";case Oa:return"Profiler";case Ol:return"StrictMode";case Ba:return"Suspense";case Ha:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nu:return(e.displayName||"Context")+".Consumer";case eu:return(e._context.displayName||"Context")+".Provider";case Bl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Hl:return n=e.displayName||null,n!==null?n:Ia(e.type)||"Memo";case mn:n=e._payload,e=e._init;try{return Ia(e(n))}catch{}}return null}function zd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ia(n);case 8:return n===Ol?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function _d(e){var n=tu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),t=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,a=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(l){t=""+l,a.call(this,l)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return t},setValue:function(l){t=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function It(e){e._valueTracker||(e._valueTracker=_d(e))}function ou(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),t="";return e&&(t=tu(e)?e.checked?"true":"false":e.value),e=t,e!==r?(n.setValue(e),!0):!1}function go(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $a(e,n){var r=n.checked;return K({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Pi(e,n){var r=n.defaultValue==null?"":n.defaultValue,t=n.checked!=null?n.checked:n.defaultChecked;r=Pn(n.value!=null?n.value:r),e._wrapperState={initialChecked:t,initialValue:r,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function au(e,n){n=n.checked,n!=null&&Tl(e,"checked",n,!1)}function Ua(e,n){au(e,n);var r=Pn(n.value),t=n.type;if(r!=null)t==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Va(e,n.type,r):n.hasOwnProperty("defaultValue")&&Va(e,n.type,Pn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Mi(e,n,r){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var t=n.type;if(!(t!=="submit"&&t!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,r||n===e.value||(e.value=n),e.defaultValue=n}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Va(e,n,r){(n!=="number"||go(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var nt=Array.isArray;function Sr(e,n,r,t){if(e=e.options,n){n={};for(var o=0;o<r.length;o++)n["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=n.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&t&&(e[r].defaultSelected=!0)}else{for(r=""+Pn(r),n=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,t&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Xa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(g(91));return K({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ai(e,n){var r=n.value;if(r==null){if(r=n.children,n=n.defaultValue,r!=null){if(n!=null)throw Error(g(92));if(nt(r)){if(1<r.length)throw Error(g(93));r=r[0]}n=r}n==null&&(n=""),r=n}e._wrapperState={initialValue:Pn(r)}}function lu(e,n){var r=Pn(n.value),t=Pn(n.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),n.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),t!=null&&(e.defaultValue=""+t)}function Ri(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function iu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ga(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?iu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $t,su=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,r,t,o){MSApp.execUnsafeLocalFunction(function(){return e(n,r,t,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for($t=$t||document.createElement("div"),$t.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=$t.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ht(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var at={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pd=["Webkit","ms","Moz","O"];Object.keys(at).forEach(function(e){Pd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),at[n]=at[e]})});function uu(e,n,r){return n==null||typeof n=="boolean"||n===""?"":r||typeof n!="number"||n===0||at.hasOwnProperty(e)&&at[e]?(""+n).trim():n+"px"}function cu(e,n){e=e.style;for(var r in n)if(n.hasOwnProperty(r)){var t=r.indexOf("--")===0,o=uu(r,n[r],t);r==="float"&&(r="cssFloat"),t?e.setProperty(r,o):e[r]=o}}var Md=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ya(e,n){if(n){if(Md[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(g(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(g(61))}if(n.style!=null&&typeof n.style!="object")throw Error(g(62))}}function Wa(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ka=null;function Il(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qa=null,Er=null,Cr=null;function Di(e){if(e=Rt(e)){if(typeof Qa!="function")throw Error(g(280));var n=e.stateNode;n&&(n=Ko(n),Qa(e.stateNode,e.type,n))}}function du(e){Er?Cr?Cr.push(e):Cr=[e]:Er=e}function fu(){if(Er){var e=Er,n=Cr;if(Cr=Er=null,Di(e),n)for(e=0;e<n.length;e++)Di(n[e])}}function pu(e,n){return e(n)}function vu(){}var pa=!1;function hu(e,n,r){if(pa)return e(n,r);pa=!0;try{return pu(e,n,r)}finally{pa=!1,(Er!==null||Cr!==null)&&(vu(),fu())}}function mt(e,n){var r=e.stateNode;if(r===null)return null;var t=Ko(r);if(t===null)return null;r=t[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(g(231,n,typeof r));return r}var Za=!1;if(sn)try{var Ur={};Object.defineProperty(Ur,"passive",{get:function(){Za=!0}}),window.addEventListener("test",Ur,Ur),window.removeEventListener("test",Ur,Ur)}catch{Za=!1}function Ad(e,n,r,t,o,a,l,i,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(r,u)}catch(p){this.onError(p)}}var lt=!1,yo=null,xo=!1,qa=null,Rd={onError:function(e){lt=!0,yo=e}};function Dd(e,n,r,t,o,a,l,i,s){lt=!1,yo=null,Ad.apply(Rd,arguments)}function Td(e,n,r,t,o,a,l,i,s){if(Dd.apply(this,arguments),lt){if(lt){var u=yo;lt=!1,yo=null}else throw Error(g(198));xo||(xo=!0,qa=u)}}function ar(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function mu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ti(e){if(ar(e)!==e)throw Error(g(188))}function Od(e){var n=e.alternate;if(!n){if(n=ar(e),n===null)throw Error(g(188));return n!==e?null:e}for(var r=e,t=n;;){var o=r.return;if(o===null)break;var a=o.alternate;if(a===null){if(t=o.return,t!==null){r=t;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===r)return Ti(o),e;if(a===t)return Ti(o),n;a=a.sibling}throw Error(g(188))}if(r.return!==t.return)r=o,t=a;else{for(var l=!1,i=o.child;i;){if(i===r){l=!0,r=o,t=a;break}if(i===t){l=!0,t=o,r=a;break}i=i.sibling}if(!l){for(i=a.child;i;){if(i===r){l=!0,r=a,t=o;break}if(i===t){l=!0,t=a,r=o;break}i=i.sibling}if(!l)throw Error(g(189))}}if(r.alternate!==t)throw Error(g(190))}if(r.tag!==3)throw Error(g(188));return r.stateNode.current===r?e:n}function bu(e){return e=Od(e),e!==null?gu(e):null}function gu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=gu(e);if(n!==null)return n;e=e.sibling}return null}var yu=_e.unstable_scheduleCallback,Oi=_e.unstable_cancelCallback,Bd=_e.unstable_shouldYield,Hd=_e.unstable_requestPaint,q=_e.unstable_now,Id=_e.unstable_getCurrentPriorityLevel,$l=_e.unstable_ImmediatePriority,xu=_e.unstable_UserBlockingPriority,wo=_e.unstable_NormalPriority,$d=_e.unstable_LowPriority,wu=_e.unstable_IdlePriority,Xo=null,qe=null;function Ud(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(Xo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:Gd,Vd=Math.log,Xd=Math.LN2;function Gd(e){return e>>>=0,e===0?32:31-(Vd(e)/Xd|0)|0}var Ut=64,Vt=4194304;function rt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ko(e,n){var r=e.pendingLanes;if(r===0)return 0;var t=0,o=e.suspendedLanes,a=e.pingedLanes,l=r&268435455;if(l!==0){var i=l&~o;i!==0?t=rt(i):(a&=l,a!==0&&(t=rt(a)))}else l=r&~o,l!==0?t=rt(l):a!==0&&(t=rt(a));if(t===0)return 0;if(n!==0&&n!==t&&!(n&o)&&(o=t&-t,a=n&-n,o>=a||o===16&&(a&4194240)!==0))return n;if(t&4&&(t|=r&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=t;0<n;)r=31-Ge(n),o=1<<r,t|=e[r],n&=~o;return t}function Yd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wd(e,n){for(var r=e.suspendedLanes,t=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-Ge(a),i=1<<l,s=o[l];s===-1?(!(i&r)||i&t)&&(o[l]=Yd(i,n)):s<=n&&(e.expiredLanes|=i),a&=~i}}function Ja(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ku(){var e=Ut;return Ut<<=1,!(Ut&4194240)&&(Ut=64),e}function va(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Mt(e,n,r){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ge(n),e[n]=r}function Kd(e,n){var r=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-Ge(r),a=1<<o;n[o]=0,t[o]=-1,e[o]=-1,r&=~a}}function Ul(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var t=31-Ge(r),o=1<<t;o&n|e[t]&n&&(e[t]|=n),r&=~o}}var I=0;function Su(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Eu,Vl,Cu,Nu,Fu,el=!1,Xt=[],En=null,Cn=null,Nn=null,bt=new Map,gt=new Map,yn=[],Qd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bi(e,n){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":bt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":gt.delete(n.pointerId)}}function Vr(e,n,r,t,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:r,eventSystemFlags:t,nativeEvent:a,targetContainers:[o]},n!==null&&(n=Rt(n),n!==null&&Vl(n)),e):(e.eventSystemFlags|=t,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Zd(e,n,r,t,o){switch(n){case"focusin":return En=Vr(En,e,n,r,t,o),!0;case"dragenter":return Cn=Vr(Cn,e,n,r,t,o),!0;case"mouseover":return Nn=Vr(Nn,e,n,r,t,o),!0;case"pointerover":var a=o.pointerId;return bt.set(a,Vr(bt.get(a)||null,e,n,r,t,o)),!0;case"gotpointercapture":return a=o.pointerId,gt.set(a,Vr(gt.get(a)||null,e,n,r,t,o)),!0}return!1}function Lu(e){var n=Gn(e.target);if(n!==null){var r=ar(n);if(r!==null){if(n=r.tag,n===13){if(n=mu(r),n!==null){e.blockedOn=n,Fu(e.priority,function(){Cu(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function io(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=nl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var t=new r.constructor(r.type,r);Ka=t,r.target.dispatchEvent(t),Ka=null}else return n=Rt(r),n!==null&&Vl(n),e.blockedOn=r,!1;n.shift()}return!0}function Hi(e,n,r){io(e)&&r.delete(n)}function qd(){el=!1,En!==null&&io(En)&&(En=null),Cn!==null&&io(Cn)&&(Cn=null),Nn!==null&&io(Nn)&&(Nn=null),bt.forEach(Hi),gt.forEach(Hi)}function Xr(e,n){e.blockedOn===n&&(e.blockedOn=null,el||(el=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,qd)))}function yt(e){function n(o){return Xr(o,e)}if(0<Xt.length){Xr(Xt[0],e);for(var r=1;r<Xt.length;r++){var t=Xt[r];t.blockedOn===e&&(t.blockedOn=null)}}for(En!==null&&Xr(En,e),Cn!==null&&Xr(Cn,e),Nn!==null&&Xr(Nn,e),bt.forEach(n),gt.forEach(n),r=0;r<yn.length;r++)t=yn[r],t.blockedOn===e&&(t.blockedOn=null);for(;0<yn.length&&(r=yn[0],r.blockedOn===null);)Lu(r),r.blockedOn===null&&yn.shift()}var Nr=pn.ReactCurrentBatchConfig,So=!0;function Jd(e,n,r,t){var o=I,a=Nr.transition;Nr.transition=null;try{I=1,Xl(e,n,r,t)}finally{I=o,Nr.transition=a}}function ef(e,n,r,t){var o=I,a=Nr.transition;Nr.transition=null;try{I=4,Xl(e,n,r,t)}finally{I=o,Nr.transition=a}}function Xl(e,n,r,t){if(So){var o=nl(e,n,r,t);if(o===null)Ea(e,n,t,Eo,r),Bi(e,t);else if(Zd(o,e,n,r,t))t.stopPropagation();else if(Bi(e,t),n&4&&-1<Qd.indexOf(e)){for(;o!==null;){var a=Rt(o);if(a!==null&&Eu(a),a=nl(e,n,r,t),a===null&&Ea(e,n,t,Eo,r),a===o)break;o=a}o!==null&&t.stopPropagation()}else Ea(e,n,t,null,r)}}var Eo=null;function nl(e,n,r,t){if(Eo=null,e=Il(t),e=Gn(e),e!==null)if(n=ar(e),n===null)e=null;else if(r=n.tag,r===13){if(e=mu(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Eo=e,null}function ju(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Id()){case $l:return 1;case xu:return 4;case wo:case $d:return 16;case wu:return 536870912;default:return 16}default:return 16}}var wn=null,Gl=null,so=null;function zu(){if(so)return so;var e,n=Gl,r=n.length,t,o="value"in wn?wn.value:wn.textContent,a=o.length;for(e=0;e<r&&n[e]===o[e];e++);var l=r-e;for(t=1;t<=l&&n[r-t]===o[a-t];t++);return so=o.slice(e,1<t?1-t:void 0)}function uo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Gt(){return!0}function Ii(){return!1}function Me(e){function n(r,t,o,a,l){this._reactName=r,this._targetInst=o,this.type=t,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(r=e[i],this[i]=r?r(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Gt:Ii,this.isPropagationStopped=Ii,this}return K(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Gt)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Gt)},persist:function(){},isPersistent:Gt}),n}var Or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=Me(Or),At=K({},Or,{view:0,detail:0}),nf=Me(At),ha,ma,Gr,Go=K({},At,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gr&&(Gr&&e.type==="mousemove"?(ha=e.screenX-Gr.screenX,ma=e.screenY-Gr.screenY):ma=ha=0,Gr=e),ha)},movementY:function(e){return"movementY"in e?e.movementY:ma}}),$i=Me(Go),rf=K({},Go,{dataTransfer:0}),tf=Me(rf),of=K({},At,{relatedTarget:0}),ba=Me(of),af=K({},Or,{animationName:0,elapsedTime:0,pseudoElement:0}),lf=Me(af),sf=K({},Or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uf=Me(sf),cf=K({},Or,{data:0}),Ui=Me(cf),df={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=pf[e])?!!n[e]:!1}function Wl(){return vf}var hf=K({},At,{key:function(e){if(e.key){var n=df[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=uo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wl,charCode:function(e){return e.type==="keypress"?uo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?uo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mf=Me(hf),bf=K({},Go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vi=Me(bf),gf=K({},At,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wl}),yf=Me(gf),xf=K({},Or,{propertyName:0,elapsedTime:0,pseudoElement:0}),wf=Me(xf),kf=K({},Go,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sf=Me(kf),Ef=[9,13,27,32],Kl=sn&&"CompositionEvent"in window,it=null;sn&&"documentMode"in document&&(it=document.documentMode);var Cf=sn&&"TextEvent"in window&&!it,_u=sn&&(!Kl||it&&8<it&&11>=it),Xi=String.fromCharCode(32),Gi=!1;function Pu(e,n){switch(e){case"keyup":return Ef.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function Nf(e,n){switch(e){case"compositionend":return Mu(n);case"keypress":return n.which!==32?null:(Gi=!0,Xi);case"textInput":return e=n.data,e===Xi&&Gi?null:e;default:return null}}function Ff(e,n){if(pr)return e==="compositionend"||!Kl&&Pu(e,n)?(e=zu(),so=Gl=wn=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return _u&&n.locale!=="ko"?null:n.data;default:return null}}var Lf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Lf[e.type]:n==="textarea"}function Au(e,n,r,t){du(t),n=Co(n,"onChange"),0<n.length&&(r=new Yl("onChange","change",null,r,t),e.push({event:r,listeners:n}))}var st=null,xt=null;function jf(e){Xu(e,0)}function Yo(e){var n=mr(e);if(ou(n))return e}function zf(e,n){if(e==="change")return n}var Ru=!1;if(sn){var ga;if(sn){var ya="oninput"in document;if(!ya){var Wi=document.createElement("div");Wi.setAttribute("oninput","return;"),ya=typeof Wi.oninput=="function"}ga=ya}else ga=!1;Ru=ga&&(!document.documentMode||9<document.documentMode)}function Ki(){st&&(st.detachEvent("onpropertychange",Du),xt=st=null)}function Du(e){if(e.propertyName==="value"&&Yo(xt)){var n=[];Au(n,xt,e,Il(e)),hu(jf,n)}}function _f(e,n,r){e==="focusin"?(Ki(),st=n,xt=r,st.attachEvent("onpropertychange",Du)):e==="focusout"&&Ki()}function Pf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yo(xt)}function Mf(e,n){if(e==="click")return Yo(n)}function Af(e,n){if(e==="input"||e==="change")return Yo(n)}function Rf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var We=typeof Object.is=="function"?Object.is:Rf;function wt(e,n){if(We(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),t=Object.keys(n);if(r.length!==t.length)return!1;for(t=0;t<r.length;t++){var o=r[t];if(!Ta.call(n,o)||!We(e[o],n[o]))return!1}return!0}function Qi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zi(e,n){var r=Qi(e);e=0;for(var t;r;){if(r.nodeType===3){if(t=e+r.textContent.length,e<=n&&t>=n)return{node:r,offset:n-e};e=t}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Qi(r)}}function Tu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Tu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ou(){for(var e=window,n=go();n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=go(e.document)}return n}function Ql(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Df(e){var n=Ou(),r=e.focusedElem,t=e.selectionRange;if(n!==r&&r&&r.ownerDocument&&Tu(r.ownerDocument.documentElement,r)){if(t!==null&&Ql(r)){if(n=t.start,e=t.end,e===void 0&&(e=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(e,r.value.length);else if(e=(n=r.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,a=Math.min(t.start,o);t=t.end===void 0?a:Math.min(t.end,o),!e.extend&&a>t&&(o=t,t=a,a=o),o=Zi(r,a);var l=Zi(r,t);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),a>t?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=r;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)e=n[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tf=sn&&"documentMode"in document&&11>=document.documentMode,vr=null,rl=null,ut=null,tl=!1;function qi(e,n,r){var t=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;tl||vr==null||vr!==go(t)||(t=vr,"selectionStart"in t&&Ql(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),ut&&wt(ut,t)||(ut=t,t=Co(rl,"onSelect"),0<t.length&&(n=new Yl("onSelect","select",null,n,r),e.push({event:n,listeners:t}),n.target=vr)))}function Yt(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var hr={animationend:Yt("Animation","AnimationEnd"),animationiteration:Yt("Animation","AnimationIteration"),animationstart:Yt("Animation","AnimationStart"),transitionend:Yt("Transition","TransitionEnd")},xa={},Bu={};sn&&(Bu=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function Wo(e){if(xa[e])return xa[e];if(!hr[e])return e;var n=hr[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Bu)return xa[e]=n[r];return e}var Hu=Wo("animationend"),Iu=Wo("animationiteration"),$u=Wo("animationstart"),Uu=Wo("transitionend"),Vu=new Map,Ji="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(e,n){Vu.set(e,n),or(n,[e])}for(var wa=0;wa<Ji.length;wa++){var ka=Ji[wa],Of=ka.toLowerCase(),Bf=ka[0].toUpperCase()+ka.slice(1);An(Of,"on"+Bf)}An(Hu,"onAnimationEnd");An(Iu,"onAnimationIteration");An($u,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(Uu,"onTransitionEnd");jr("onMouseEnter",["mouseout","mouseover"]);jr("onMouseLeave",["mouseout","mouseover"]);jr("onPointerEnter",["pointerout","pointerover"]);jr("onPointerLeave",["pointerout","pointerover"]);or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));or("onBeforeInput",["compositionend","keypress","textInput","paste"]);or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hf=new Set("cancel close invalid load scroll toggle".split(" ").concat(tt));function es(e,n,r){var t=e.type||"unknown-event";e.currentTarget=r,Td(t,n,void 0,e),e.currentTarget=null}function Xu(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var t=e[r],o=t.event;t=t.listeners;e:{var a=void 0;if(n)for(var l=t.length-1;0<=l;l--){var i=t[l],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==a&&o.isPropagationStopped())break e;es(o,i,u),a=s}else for(l=0;l<t.length;l++){if(i=t[l],s=i.instance,u=i.currentTarget,i=i.listener,s!==a&&o.isPropagationStopped())break e;es(o,i,u),a=s}}}if(xo)throw e=qa,xo=!1,qa=null,e}function V(e,n){var r=n[sl];r===void 0&&(r=n[sl]=new Set);var t=e+"__bubble";r.has(t)||(Gu(n,e,2,!1),r.add(t))}function Sa(e,n,r){var t=0;n&&(t|=4),Gu(r,e,t,n)}var Wt="_reactListening"+Math.random().toString(36).slice(2);function kt(e){if(!e[Wt]){e[Wt]=!0,Js.forEach(function(r){r!=="selectionchange"&&(Hf.has(r)||Sa(r,!1,e),Sa(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Wt]||(n[Wt]=!0,Sa("selectionchange",!1,n))}}function Gu(e,n,r,t){switch(ju(n)){case 1:var o=Jd;break;case 4:o=ef;break;default:o=Xl}r=o.bind(null,n,r,e),o=void 0,!Za||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),t?o!==void 0?e.addEventListener(n,r,{capture:!0,passive:o}):e.addEventListener(n,r,!0):o!==void 0?e.addEventListener(n,r,{passive:o}):e.addEventListener(n,r,!1)}function Ea(e,n,r,t,o){var a=t;if(!(n&1)&&!(n&2)&&t!==null)e:for(;;){if(t===null)return;var l=t.tag;if(l===3||l===4){var i=t.stateNode.containerInfo;if(i===o||i.nodeType===8&&i.parentNode===o)break;if(l===4)for(l=t.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;i!==null;){if(l=Gn(i),l===null)return;if(s=l.tag,s===5||s===6){t=a=l;continue e}i=i.parentNode}}t=t.return}hu(function(){var u=a,p=Il(r),v=[];e:{var h=Vu.get(e);if(h!==void 0){var y=Yl,x=e;switch(e){case"keypress":if(uo(r)===0)break e;case"keydown":case"keyup":y=mf;break;case"focusin":x="focus",y=ba;break;case"focusout":x="blur",y=ba;break;case"beforeblur":case"afterblur":y=ba;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=$i;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=tf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=yf;break;case Hu:case Iu:case $u:y=lf;break;case Uu:y=wf;break;case"scroll":y=nf;break;case"wheel":y=Sf;break;case"copy":case"cut":case"paste":y=uf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Vi}var w=(n&4)!==0,H=!w&&e==="scroll",d=w?h!==null?h+"Capture":null:h;w=[];for(var c=u,f;c!==null;){f=c;var b=f.stateNode;if(f.tag===5&&b!==null&&(f=b,d!==null&&(b=mt(c,d),b!=null&&w.push(St(c,b,f)))),H)break;c=c.return}0<w.length&&(h=new y(h,x,null,r,p),v.push({event:h,listeners:w}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&r!==Ka&&(x=r.relatedTarget||r.fromElement)&&(Gn(x)||x[un]))break e;if((y||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,y?(x=r.relatedTarget||r.toElement,y=u,x=x?Gn(x):null,x!==null&&(H=ar(x),x!==H||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=u),y!==x)){if(w=$i,b="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=Vi,b="onPointerLeave",d="onPointerEnter",c="pointer"),H=y==null?h:mr(y),f=x==null?h:mr(x),h=new w(b,c+"leave",y,r,p),h.target=H,h.relatedTarget=f,b=null,Gn(p)===u&&(w=new w(d,c+"enter",x,r,p),w.target=f,w.relatedTarget=H,b=w),H=b,y&&x)n:{for(w=y,d=x,c=0,f=w;f;f=ir(f))c++;for(f=0,b=d;b;b=ir(b))f++;for(;0<c-f;)w=ir(w),c--;for(;0<f-c;)d=ir(d),f--;for(;c--;){if(w===d||d!==null&&w===d.alternate)break n;w=ir(w),d=ir(d)}w=null}else w=null;y!==null&&ns(v,h,y,w,!1),x!==null&&H!==null&&ns(v,H,x,w,!0)}}e:{if(h=u?mr(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var k=zf;else if(Yi(h))if(Ru)k=Af;else{k=Pf;var C=_f}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=Mf);if(k&&(k=k(e,u))){Au(v,k,r,p);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Va(h,"number",h.value)}switch(C=u?mr(u):window,e){case"focusin":(Yi(C)||C.contentEditable==="true")&&(vr=C,rl=u,ut=null);break;case"focusout":ut=rl=vr=null;break;case"mousedown":tl=!0;break;case"contextmenu":case"mouseup":case"dragend":tl=!1,qi(v,r,p);break;case"selectionchange":if(Tf)break;case"keydown":case"keyup":qi(v,r,p)}var E;if(Kl)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else pr?Pu(e,r)&&(N="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(N="onCompositionStart");N&&(_u&&r.locale!=="ko"&&(pr||N!=="onCompositionStart"?N==="onCompositionEnd"&&pr&&(E=zu()):(wn=p,Gl="value"in wn?wn.value:wn.textContent,pr=!0)),C=Co(u,N),0<C.length&&(N=new Ui(N,e,null,r,p),v.push({event:N,listeners:C}),E?N.data=E:(E=Mu(r),E!==null&&(N.data=E)))),(E=Cf?Nf(e,r):Ff(e,r))&&(u=Co(u,"onBeforeInput"),0<u.length&&(p=new Ui("onBeforeInput","beforeinput",null,r,p),v.push({event:p,listeners:u}),p.data=E))}Xu(v,n)})}function St(e,n,r){return{instance:e,listener:n,currentTarget:r}}function Co(e,n){for(var r=n+"Capture",t=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=mt(e,r),a!=null&&t.unshift(St(e,a,o)),a=mt(e,n),a!=null&&t.push(St(e,a,o))),e=e.return}return t}function ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ns(e,n,r,t,o){for(var a=n._reactName,l=[];r!==null&&r!==t;){var i=r,s=i.alternate,u=i.stateNode;if(s!==null&&s===t)break;i.tag===5&&u!==null&&(i=u,o?(s=mt(r,a),s!=null&&l.unshift(St(r,s,i))):o||(s=mt(r,a),s!=null&&l.push(St(r,s,i)))),r=r.return}l.length!==0&&e.push({event:n,listeners:l})}var If=/\r\n?/g,$f=/\u0000|\uFFFD/g;function rs(e){return(typeof e=="string"?e:""+e).replace(If,`
`).replace($f,"")}function Kt(e,n,r){if(n=rs(n),rs(e)!==n&&r)throw Error(g(425))}function No(){}var ol=null,al=null;function ll(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var il=typeof setTimeout=="function"?setTimeout:void 0,Uf=typeof clearTimeout=="function"?clearTimeout:void 0,ts=typeof Promise=="function"?Promise:void 0,Vf=typeof queueMicrotask=="function"?queueMicrotask:typeof ts<"u"?function(e){return ts.resolve(null).then(e).catch(Xf)}:il;function Xf(e){setTimeout(function(){throw e})}function Ca(e,n){var r=n,t=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(t===0){e.removeChild(o),yt(n);return}t--}else r!=="$"&&r!=="$?"&&r!=="$!"||t++;r=o}while(r);yt(n)}function Fn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function os(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}var Br=Math.random().toString(36).slice(2),Ze="__reactFiber$"+Br,Et="__reactProps$"+Br,un="__reactContainer$"+Br,sl="__reactEvents$"+Br,Gf="__reactListeners$"+Br,Yf="__reactHandles$"+Br;function Gn(e){var n=e[Ze];if(n)return n;for(var r=e.parentNode;r;){if(n=r[un]||r[Ze]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=os(e);e!==null;){if(r=e[Ze])return r;e=os(e)}return n}e=r,r=e.parentNode}return null}function Rt(e){return e=e[Ze]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function Ko(e){return e[Et]||null}var ul=[],br=-1;function Rn(e){return{current:e}}function X(e){0>br||(e.current=ul[br],ul[br]=null,br--)}function $(e,n){br++,ul[br]=e.current,e.current=n}var Mn={},ve=Rn(Mn),Ce=Rn(!1),qn=Mn;function zr(e,n){var r=e.type.contextTypes;if(!r)return Mn;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===n)return t.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in r)o[a]=n[a];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ne(e){return e=e.childContextTypes,e!=null}function Fo(){X(Ce),X(ve)}function as(e,n,r){if(ve.current!==Mn)throw Error(g(168));$(ve,n),$(Ce,r)}function Yu(e,n,r){var t=e.stateNode;if(n=n.childContextTypes,typeof t.getChildContext!="function")return r;t=t.getChildContext();for(var o in t)if(!(o in n))throw Error(g(108,zd(e)||"Unknown",o));return K({},r,t)}function Lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mn,qn=ve.current,$(ve,e),$(Ce,Ce.current),!0}function ls(e,n,r){var t=e.stateNode;if(!t)throw Error(g(169));r?(e=Yu(e,n,qn),t.__reactInternalMemoizedMergedChildContext=e,X(Ce),X(ve),$(ve,e)):X(Ce),$(Ce,r)}var tn=null,Qo=!1,Na=!1;function Wu(e){tn===null?tn=[e]:tn.push(e)}function Wf(e){Qo=!0,Wu(e)}function Dn(){if(!Na&&tn!==null){Na=!0;var e=0,n=I;try{var r=tn;for(I=1;e<r.length;e++){var t=r[e];do t=t(!0);while(t!==null)}tn=null,Qo=!1}catch(o){throw tn!==null&&(tn=tn.slice(e+1)),yu($l,Dn),o}finally{I=n,Na=!1}}return null}var gr=[],yr=0,jo=null,zo=0,Re=[],De=0,Jn=null,on=1,an="";function Un(e,n){gr[yr++]=zo,gr[yr++]=jo,jo=e,zo=n}function Ku(e,n,r){Re[De++]=on,Re[De++]=an,Re[De++]=Jn,Jn=e;var t=on;e=an;var o=32-Ge(t)-1;t&=~(1<<o),r+=1;var a=32-Ge(n)+o;if(30<a){var l=o-o%5;a=(t&(1<<l)-1).toString(32),t>>=l,o-=l,on=1<<32-Ge(n)+o|r<<o|t,an=a+e}else on=1<<a|r<<o|t,an=e}function Zl(e){e.return!==null&&(Un(e,1),Ku(e,1,0))}function ql(e){for(;e===jo;)jo=gr[--yr],gr[yr]=null,zo=gr[--yr],gr[yr]=null;for(;e===Jn;)Jn=Re[--De],Re[De]=null,an=Re[--De],Re[De]=null,on=Re[--De],Re[De]=null}var ze=null,je=null,G=!1,Xe=null;function Qu(e,n){var r=Te(5,null,null,0);r.elementType="DELETED",r.stateNode=n,r.return=e,n=e.deletions,n===null?(e.deletions=[r],e.flags|=16):n.push(r)}function is(e,n){switch(e.tag){case 5:var r=e.type;return n=n.nodeType!==1||r.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ze=e,je=Fn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ze=e,je=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(r=Jn!==null?{id:on,overflow:an}:null,e.memoizedState={dehydrated:n,treeContext:r,retryLane:1073741824},r=Te(18,null,null,0),r.stateNode=n,r.return=e,e.child=r,ze=e,je=null,!0):!1;default:return!1}}function cl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function dl(e){if(G){var n=je;if(n){var r=n;if(!is(e,n)){if(cl(e))throw Error(g(418));n=Fn(r.nextSibling);var t=ze;n&&is(e,n)?Qu(t,r):(e.flags=e.flags&-4097|2,G=!1,ze=e)}}else{if(cl(e))throw Error(g(418));e.flags=e.flags&-4097|2,G=!1,ze=e}}}function ss(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Qt(e){if(e!==ze)return!1;if(!G)return ss(e),G=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ll(e.type,e.memoizedProps)),n&&(n=je)){if(cl(e))throw Zu(),Error(g(418));for(;n;)Qu(e,n),n=Fn(n.nextSibling)}if(ss(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(n===0){je=Fn(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++}e=e.nextSibling}je=null}}else je=ze?Fn(e.stateNode.nextSibling):null;return!0}function Zu(){for(var e=je;e;)e=Fn(e.nextSibling)}function _r(){je=ze=null,G=!1}function Jl(e){Xe===null?Xe=[e]:Xe.push(e)}var Kf=pn.ReactCurrentBatchConfig;function Ue(e,n){if(e&&e.defaultProps){n=K({},n),e=e.defaultProps;for(var r in e)n[r]===void 0&&(n[r]=e[r]);return n}return n}var _o=Rn(null),Po=null,xr=null,ei=null;function ni(){ei=xr=Po=null}function ri(e){var n=_o.current;X(_o),e._currentValue=n}function fl(e,n,r){for(;e!==null;){var t=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,t!==null&&(t.childLanes|=n)):t!==null&&(t.childLanes&n)!==n&&(t.childLanes|=n),e===r)break;e=e.return}}function Fr(e,n){Po=e,ei=xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ee=!0),e.firstContext=null)}function Be(e){var n=e._currentValue;if(ei!==e)if(e={context:e,memoizedValue:n,next:null},xr===null){if(Po===null)throw Error(g(308));xr=e,Po.dependencies={lanes:0,firstContext:e}}else xr=xr.next=e;return n}var Yn=null;function ti(e){Yn===null?Yn=[e]:Yn.push(e)}function qu(e,n,r,t){var o=n.interleaved;return o===null?(r.next=r,ti(n)):(r.next=o.next,o.next=r),n.interleaved=r,cn(e,t)}function cn(e,n){e.lanes|=n;var r=e.alternate;for(r!==null&&(r.lanes|=n),r=e,e=e.return;e!==null;)e.childLanes|=n,r=e.alternate,r!==null&&(r.childLanes|=n),r=e,e=e.return;return r.tag===3?r.stateNode:null}var bn=!1;function oi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ju(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ln(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Ln(e,n,r){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,O&2){var o=t.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),t.pending=n,cn(e,r)}return o=t.interleaved,o===null?(n.next=n,ti(t)):(n.next=o.next,o.next=n),t.interleaved=n,cn(e,r)}function co(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194240)!==0)){var t=n.lanes;t&=e.pendingLanes,r|=t,n.lanes=r,Ul(e,r)}}function us(e,n){var r=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,r===t)){var o=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?o=a=l:a=a.next=l,r=r.next}while(r!==null);a===null?o=a=n:a=a.next=n}else o=a=n;r={baseState:t.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:t.shared,effects:t.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}function Mo(e,n,r,t){var o=e.updateQueue;bn=!1;var a=o.firstBaseUpdate,l=o.lastBaseUpdate,i=o.shared.pending;if(i!==null){o.shared.pending=null;var s=i,u=s.next;s.next=null,l===null?a=u:l.next=u,l=s;var p=e.alternate;p!==null&&(p=p.updateQueue,i=p.lastBaseUpdate,i!==l&&(i===null?p.firstBaseUpdate=u:i.next=u,p.lastBaseUpdate=s))}if(a!==null){var v=o.baseState;l=0,p=u=s=null,i=a;do{var h=i.lane,y=i.eventTime;if((t&h)===h){p!==null&&(p=p.next={eventTime:y,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var x=e,w=i;switch(h=n,y=r,w.tag){case 1:if(x=w.payload,typeof x=="function"){v=x.call(y,v,h);break e}v=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,h=typeof x=="function"?x.call(y,v,h):x,h==null)break e;v=K({},v,h);break e;case 2:bn=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[i]:h.push(i))}else y={eventTime:y,lane:h,tag:i.tag,payload:i.payload,callback:i.callback,next:null},p===null?(u=p=y,s=v):p=p.next=y,l|=h;if(i=i.next,i===null){if(i=o.shared.pending,i===null)break;h=i,i=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(p===null&&(s=v),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=p,n=o.shared.interleaved,n!==null){o=n;do l|=o.lane,o=o.next;while(o!==n)}else a===null&&(o.shared.lanes=0);nr|=l,e.lanes=l,e.memoizedState=v}}function cs(e,n,r){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var t=e[n],o=t.callback;if(o!==null){if(t.callback=null,t=r,typeof o!="function")throw Error(g(191,o));o.call(t)}}}var ec=new qs.Component().refs;function pl(e,n,r,t){n=e.memoizedState,r=r(t,n),r=r==null?n:K({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Zo={isMounted:function(e){return(e=e._reactInternals)?ar(e)===e:!1},enqueueSetState:function(e,n,r){e=e._reactInternals;var t=be(),o=zn(e),a=ln(t,o);a.payload=n,r!=null&&(a.callback=r),n=Ln(e,a,o),n!==null&&(Ye(n,e,o,t),co(n,e,o))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var t=be(),o=zn(e),a=ln(t,o);a.tag=1,a.payload=n,r!=null&&(a.callback=r),n=Ln(e,a,o),n!==null&&(Ye(n,e,o,t),co(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=be(),t=zn(e),o=ln(r,t);o.tag=2,n!=null&&(o.callback=n),n=Ln(e,o,t),n!==null&&(Ye(n,e,t,r),co(n,e,t))}};function ds(e,n,r,t,o,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,a,l):n.prototype&&n.prototype.isPureReactComponent?!wt(r,t)||!wt(o,a):!0}function nc(e,n,r){var t=!1,o=Mn,a=n.contextType;return typeof a=="object"&&a!==null?a=Be(a):(o=Ne(n)?qn:ve.current,t=n.contextTypes,a=(t=t!=null)?zr(e,o):Mn),n=new n(r,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Zo,e.stateNode=n,n._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),n}function fs(e,n,r,t){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,t),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,t),n.state!==e&&Zo.enqueueReplaceState(n,n.state,null)}function vl(e,n,r,t){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=ec,oi(e);var a=n.contextType;typeof a=="object"&&a!==null?o.context=Be(a):(a=Ne(n)?qn:ve.current,o.context=zr(e,a)),o.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(pl(e,n,a,r),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&Zo.enqueueReplaceState(o,o.state,null),Mo(e,r,o,t),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Yr(e,n,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(g(309));var t=r.stateNode}if(!t)throw Error(g(147,e));var o=t,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(l){var i=o.refs;i===ec&&(i=o.refs={}),l===null?delete i[a]:i[a]=l},n._stringRef=a,n)}if(typeof e!="string")throw Error(g(284));if(!r._owner)throw Error(g(290,e))}return e}function Zt(e,n){throw e=Object.prototype.toString.call(n),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ps(e){var n=e._init;return n(e._payload)}function rc(e){function n(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function r(d,c){if(!e)return null;for(;c!==null;)n(d,c),c=c.sibling;return null}function t(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=_n(d,c),d.index=0,d.sibling=null,d}function a(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function i(d,c,f,b){return c===null||c.tag!==6?(c=Ma(f,d.mode,b),c.return=d,c):(c=o(c,f),c.return=d,c)}function s(d,c,f,b){var k=f.type;return k===fr?p(d,c,f.props.children,b,f.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===mn&&ps(k)===c.type)?(b=o(c,f.props),b.ref=Yr(d,c,f),b.return=d,b):(b=bo(f.type,f.key,f.props,null,d.mode,b),b.ref=Yr(d,c,f),b.return=d,b)}function u(d,c,f,b){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Aa(f,d.mode,b),c.return=d,c):(c=o(c,f.children||[]),c.return=d,c)}function p(d,c,f,b,k){return c===null||c.tag!==7?(c=Zn(f,d.mode,b,k),c.return=d,c):(c=o(c,f),c.return=d,c)}function v(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ma(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ht:return f=bo(c.type,c.key,c.props,null,d.mode,f),f.ref=Yr(d,null,c),f.return=d,f;case dr:return c=Aa(c,d.mode,f),c.return=d,c;case mn:var b=c._init;return v(d,b(c._payload),f)}if(nt(c)||$r(c))return c=Zn(c,d.mode,f,null),c.return=d,c;Zt(d,c)}return null}function h(d,c,f,b){var k=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return k!==null?null:i(d,c,""+f,b);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ht:return f.key===k?s(d,c,f,b):null;case dr:return f.key===k?u(d,c,f,b):null;case mn:return k=f._init,h(d,c,k(f._payload),b)}if(nt(f)||$r(f))return k!==null?null:p(d,c,f,b,null);Zt(d,f)}return null}function y(d,c,f,b,k){if(typeof b=="string"&&b!==""||typeof b=="number")return d=d.get(f)||null,i(c,d,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ht:return d=d.get(b.key===null?f:b.key)||null,s(c,d,b,k);case dr:return d=d.get(b.key===null?f:b.key)||null,u(c,d,b,k);case mn:var C=b._init;return y(d,c,f,C(b._payload),k)}if(nt(b)||$r(b))return d=d.get(f)||null,p(c,d,b,k,null);Zt(c,b)}return null}function x(d,c,f,b){for(var k=null,C=null,E=c,N=c=0,B=null;E!==null&&N<f.length;N++){E.index>N?(B=E,E=null):B=E.sibling;var z=h(d,E,f[N],b);if(z===null){E===null&&(E=B);break}e&&E&&z.alternate===null&&n(d,E),c=a(z,c,N),C===null?k=z:C.sibling=z,C=z,E=B}if(N===f.length)return r(d,E),G&&Un(d,N),k;if(E===null){for(;N<f.length;N++)E=v(d,f[N],b),E!==null&&(c=a(E,c,N),C===null?k=E:C.sibling=E,C=E);return G&&Un(d,N),k}for(E=t(d,E);N<f.length;N++)B=y(E,d,N,f[N],b),B!==null&&(e&&B.alternate!==null&&E.delete(B.key===null?N:B.key),c=a(B,c,N),C===null?k=B:C.sibling=B,C=B);return e&&E.forEach(function(te){return n(d,te)}),G&&Un(d,N),k}function w(d,c,f,b){var k=$r(f);if(typeof k!="function")throw Error(g(150));if(f=k.call(f),f==null)throw Error(g(151));for(var C=k=null,E=c,N=c=0,B=null,z=f.next();E!==null&&!z.done;N++,z=f.next()){E.index>N?(B=E,E=null):B=E.sibling;var te=h(d,E,z.value,b);if(te===null){E===null&&(E=B);break}e&&E&&te.alternate===null&&n(d,E),c=a(te,c,N),C===null?k=te:C.sibling=te,C=te,E=B}if(z.done)return r(d,E),G&&Un(d,N),k;if(E===null){for(;!z.done;N++,z=f.next())z=v(d,z.value,b),z!==null&&(c=a(z,c,N),C===null?k=z:C.sibling=z,C=z);return G&&Un(d,N),k}for(E=t(d,E);!z.done;N++,z=f.next())z=y(E,d,N,z.value,b),z!==null&&(e&&z.alternate!==null&&E.delete(z.key===null?N:z.key),c=a(z,c,N),C===null?k=z:C.sibling=z,C=z);return e&&E.forEach(function(we){return n(d,we)}),G&&Un(d,N),k}function H(d,c,f,b){if(typeof f=="object"&&f!==null&&f.type===fr&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Ht:e:{for(var k=f.key,C=c;C!==null;){if(C.key===k){if(k=f.type,k===fr){if(C.tag===7){r(d,C.sibling),c=o(C,f.props.children),c.return=d,d=c;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===mn&&ps(k)===C.type){r(d,C.sibling),c=o(C,f.props),c.ref=Yr(d,C,f),c.return=d,d=c;break e}r(d,C);break}else n(d,C);C=C.sibling}f.type===fr?(c=Zn(f.props.children,d.mode,b,f.key),c.return=d,d=c):(b=bo(f.type,f.key,f.props,null,d.mode,b),b.ref=Yr(d,c,f),b.return=d,d=b)}return l(d);case dr:e:{for(C=f.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){r(d,c.sibling),c=o(c,f.children||[]),c.return=d,d=c;break e}else{r(d,c);break}else n(d,c);c=c.sibling}c=Aa(f,d.mode,b),c.return=d,d=c}return l(d);case mn:return C=f._init,H(d,c,C(f._payload),b)}if(nt(f))return x(d,c,f,b);if($r(f))return w(d,c,f,b);Zt(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(r(d,c.sibling),c=o(c,f),c.return=d,d=c):(r(d,c),c=Ma(f,d.mode,b),c.return=d,d=c),l(d)):r(d,c)}return H}var Pr=rc(!0),tc=rc(!1),Dt={},Je=Rn(Dt),Ct=Rn(Dt),Nt=Rn(Dt);function Wn(e){if(e===Dt)throw Error(g(174));return e}function ai(e,n){switch($(Nt,n),$(Ct,e),$(Je,Dt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ga(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ga(n,e)}X(Je),$(Je,n)}function Mr(){X(Je),X(Ct),X(Nt)}function oc(e){Wn(Nt.current);var n=Wn(Je.current),r=Ga(n,e.type);n!==r&&($(Ct,e),$(Je,r))}function li(e){Ct.current===e&&(X(Je),X(Ct))}var Y=Rn(0);function Ao(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fa=[];function ii(){for(var e=0;e<Fa.length;e++)Fa[e]._workInProgressVersionPrimary=null;Fa.length=0}var fo=pn.ReactCurrentDispatcher,La=pn.ReactCurrentBatchConfig,er=0,W=null,ne=null,ae=null,Ro=!1,ct=!1,Ft=0,Qf=0;function de(){throw Error(g(321))}function si(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!We(e[r],n[r]))return!1;return!0}function ui(e,n,r,t,o,a){if(er=a,W=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,fo.current=e===null||e.memoizedState===null?e0:n0,e=r(t,o),ct){a=0;do{if(ct=!1,Ft=0,25<=a)throw Error(g(301));a+=1,ae=ne=null,n.updateQueue=null,fo.current=r0,e=r(t,o)}while(ct)}if(fo.current=Do,n=ne!==null&&ne.next!==null,er=0,ae=ne=W=null,Ro=!1,n)throw Error(g(300));return e}function ci(){var e=Ft!==0;return Ft=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?W.memoizedState=ae=e:ae=ae.next=e,ae}function He(){if(ne===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var n=ae===null?W.memoizedState:ae.next;if(n!==null)ae=n,ne=e;else{if(e===null)throw Error(g(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ae===null?W.memoizedState=ae=e:ae=ae.next=e}return ae}function Lt(e,n){return typeof n=="function"?n(e):n}function ja(e){var n=He(),r=n.queue;if(r===null)throw Error(g(311));r.lastRenderedReducer=e;var t=ne,o=t.baseQueue,a=r.pending;if(a!==null){if(o!==null){var l=o.next;o.next=a.next,a.next=l}t.baseQueue=o=a,r.pending=null}if(o!==null){a=o.next,t=t.baseState;var i=l=null,s=null,u=a;do{var p=u.lane;if((er&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),t=u.hasEagerState?u.eagerState:e(t,u.action);else{var v={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(i=s=v,l=t):s=s.next=v,W.lanes|=p,nr|=p}u=u.next}while(u!==null&&u!==a);s===null?l=t:s.next=i,We(t,n.memoizedState)||(Ee=!0),n.memoizedState=t,n.baseState=l,n.baseQueue=s,r.lastRenderedState=t}if(e=r.interleaved,e!==null){o=e;do a=o.lane,W.lanes|=a,nr|=a,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[n.memoizedState,r.dispatch]}function za(e){var n=He(),r=n.queue;if(r===null)throw Error(g(311));r.lastRenderedReducer=e;var t=r.dispatch,o=r.pending,a=n.memoizedState;if(o!==null){r.pending=null;var l=o=o.next;do a=e(a,l.action),l=l.next;while(l!==o);We(a,n.memoizedState)||(Ee=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),r.lastRenderedState=a}return[a,t]}function ac(){}function lc(e,n){var r=W,t=He(),o=n(),a=!We(t.memoizedState,o);if(a&&(t.memoizedState=o,Ee=!0),t=t.queue,di(uc.bind(null,r,t,e),[e]),t.getSnapshot!==n||a||ae!==null&&ae.memoizedState.tag&1){if(r.flags|=2048,jt(9,sc.bind(null,r,t,o,n),void 0,null),le===null)throw Error(g(349));er&30||ic(r,n,o)}return o}function ic(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=W.updateQueue,n===null?(n={lastEffect:null,stores:null},W.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function sc(e,n,r,t){n.value=r,n.getSnapshot=t,cc(n)&&dc(e)}function uc(e,n,r){return r(function(){cc(n)&&dc(e)})}function cc(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!We(e,r)}catch{return!0}}function dc(e){var n=cn(e,1);n!==null&&Ye(n,e,1,-1)}function vs(e){var n=Qe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:e},n.queue=e,e=e.dispatch=Jf.bind(null,W,e),[n.memoizedState,e]}function jt(e,n,r,t){return e={tag:e,create:n,destroy:r,deps:t,next:null},n=W.updateQueue,n===null?(n={lastEffect:null,stores:null},W.updateQueue=n,n.lastEffect=e.next=e):(r=n.lastEffect,r===null?n.lastEffect=e.next=e:(t=r.next,r.next=e,e.next=t,n.lastEffect=e)),e}function fc(){return He().memoizedState}function po(e,n,r,t){var o=Qe();W.flags|=e,o.memoizedState=jt(1|n,r,void 0,t===void 0?null:t)}function qo(e,n,r,t){var o=He();t=t===void 0?null:t;var a=void 0;if(ne!==null){var l=ne.memoizedState;if(a=l.destroy,t!==null&&si(t,l.deps)){o.memoizedState=jt(n,r,a,t);return}}W.flags|=e,o.memoizedState=jt(1|n,r,a,t)}function hs(e,n){return po(8390656,8,e,n)}function di(e,n){return qo(2048,8,e,n)}function pc(e,n){return qo(4,2,e,n)}function vc(e,n){return qo(4,4,e,n)}function hc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function mc(e,n,r){return r=r!=null?r.concat([e]):null,qo(4,4,hc.bind(null,n,e),r)}function fi(){}function bc(e,n){var r=He();n=n===void 0?null:n;var t=r.memoizedState;return t!==null&&n!==null&&si(n,t[1])?t[0]:(r.memoizedState=[e,n],e)}function gc(e,n){var r=He();n=n===void 0?null:n;var t=r.memoizedState;return t!==null&&n!==null&&si(n,t[1])?t[0]:(e=e(),r.memoizedState=[e,n],e)}function yc(e,n,r){return er&21?(We(r,n)||(r=ku(),W.lanes|=r,nr|=r,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=r)}function Zf(e,n){var r=I;I=r!==0&&4>r?r:4,e(!0);var t=La.transition;La.transition={};try{e(!1),n()}finally{I=r,La.transition=t}}function xc(){return He().memoizedState}function qf(e,n,r){var t=zn(e);if(r={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null},wc(e))kc(n,r);else if(r=qu(e,n,r,t),r!==null){var o=be();Ye(r,e,t,o),Sc(r,n,t)}}function Jf(e,n,r){var t=zn(e),o={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null};if(wc(e))kc(n,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var l=n.lastRenderedState,i=a(l,r);if(o.hasEagerState=!0,o.eagerState=i,We(i,l)){var s=n.interleaved;s===null?(o.next=o,ti(n)):(o.next=s.next,s.next=o),n.interleaved=o;return}}catch{}finally{}r=qu(e,n,o,t),r!==null&&(o=be(),Ye(r,e,t,o),Sc(r,n,t))}}function wc(e){var n=e.alternate;return e===W||n!==null&&n===W}function kc(e,n){ct=Ro=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function Sc(e,n,r){if(r&4194240){var t=n.lanes;t&=e.pendingLanes,r|=t,n.lanes=r,Ul(e,r)}}var Do={readContext:Be,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},e0={readContext:Be,useCallback:function(e,n){return Qe().memoizedState=[e,n===void 0?null:n],e},useContext:Be,useEffect:hs,useImperativeHandle:function(e,n,r){return r=r!=null?r.concat([e]):null,po(4194308,4,hc.bind(null,n,e),r)},useLayoutEffect:function(e,n){return po(4194308,4,e,n)},useInsertionEffect:function(e,n){return po(4,2,e,n)},useMemo:function(e,n){var r=Qe();return n=n===void 0?null:n,e=e(),r.memoizedState=[e,n],e},useReducer:function(e,n,r){var t=Qe();return n=r!==void 0?r(n):n,t.memoizedState=t.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},t.queue=e,e=e.dispatch=qf.bind(null,W,e),[t.memoizedState,e]},useRef:function(e){var n=Qe();return e={current:e},n.memoizedState=e},useState:vs,useDebugValue:fi,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=vs(!1),n=e[0];return e=Zf.bind(null,e[1]),Qe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,r){var t=W,o=Qe();if(G){if(r===void 0)throw Error(g(407));r=r()}else{if(r=n(),le===null)throw Error(g(349));er&30||ic(t,n,r)}o.memoizedState=r;var a={value:r,getSnapshot:n};return o.queue=a,hs(uc.bind(null,t,a,e),[e]),t.flags|=2048,jt(9,sc.bind(null,t,a,r,n),void 0,null),r},useId:function(){var e=Qe(),n=le.identifierPrefix;if(G){var r=an,t=on;r=(t&~(1<<32-Ge(t)-1)).toString(32)+r,n=":"+n+"R"+r,r=Ft++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=Qf++,n=":"+n+"r"+r.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},n0={readContext:Be,useCallback:bc,useContext:Be,useEffect:di,useImperativeHandle:mc,useInsertionEffect:pc,useLayoutEffect:vc,useMemo:gc,useReducer:ja,useRef:fc,useState:function(){return ja(Lt)},useDebugValue:fi,useDeferredValue:function(e){var n=He();return yc(n,ne.memoizedState,e)},useTransition:function(){var e=ja(Lt)[0],n=He().memoizedState;return[e,n]},useMutableSource:ac,useSyncExternalStore:lc,useId:xc,unstable_isNewReconciler:!1},r0={readContext:Be,useCallback:bc,useContext:Be,useEffect:di,useImperativeHandle:mc,useInsertionEffect:pc,useLayoutEffect:vc,useMemo:gc,useReducer:za,useRef:fc,useState:function(){return za(Lt)},useDebugValue:fi,useDeferredValue:function(e){var n=He();return ne===null?n.memoizedState=e:yc(n,ne.memoizedState,e)},useTransition:function(){var e=za(Lt)[0],n=He().memoizedState;return[e,n]},useMutableSource:ac,useSyncExternalStore:lc,useId:xc,unstable_isNewReconciler:!1};function Ar(e,n){try{var r="",t=n;do r+=jd(t),t=t.return;while(t);var o=r}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:o,digest:null}}function _a(e,n,r){return{value:e,source:null,stack:r??null,digest:n??null}}function hl(e,n){try{console.error(n.value)}catch(r){setTimeout(function(){throw r})}}var t0=typeof WeakMap=="function"?WeakMap:Map;function Ec(e,n,r){r=ln(-1,r),r.tag=3,r.payload={element:null};var t=n.value;return r.callback=function(){Oo||(Oo=!0,Cl=t),hl(e,n)},r}function Cc(e,n,r){r=ln(-1,r),r.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var o=n.value;r.payload=function(){return t(o)},r.callback=function(){hl(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){hl(e,n),typeof t!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),r}function ms(e,n,r){var t=e.pingCache;if(t===null){t=e.pingCache=new t0;var o=new Set;t.set(n,o)}else o=t.get(n),o===void 0&&(o=new Set,t.set(n,o));o.has(r)||(o.add(r),e=b0.bind(null,e,n,r),n.then(e,e))}function bs(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function gs(e,n,r,t,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(n=ln(-1,1),n.tag=2,Ln(r,n,1))),r.lanes|=1),e)}var o0=pn.ReactCurrentOwner,Ee=!1;function he(e,n,r,t){n.child=e===null?tc(n,null,r,t):Pr(n,e.child,r,t)}function ys(e,n,r,t,o){r=r.render;var a=n.ref;return Fr(n,o),t=ui(e,n,r,t,a,o),r=ci(),e!==null&&!Ee?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,dn(e,n,o)):(G&&r&&Zl(n),n.flags|=1,he(e,n,t,o),n.child)}function xs(e,n,r,t,o){if(e===null){var a=r.type;return typeof a=="function"&&!xi(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(n.tag=15,n.type=a,Nc(e,n,a,t,o)):(e=bo(r.type,null,t,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!(e.lanes&o)){var l=a.memoizedProps;if(r=r.compare,r=r!==null?r:wt,r(l,t)&&e.ref===n.ref)return dn(e,n,o)}return n.flags|=1,e=_n(a,t),e.ref=n.ref,e.return=n,n.child=e}function Nc(e,n,r,t,o){if(e!==null){var a=e.memoizedProps;if(wt(a,t)&&e.ref===n.ref)if(Ee=!1,n.pendingProps=t=a,(e.lanes&o)!==0)e.flags&131072&&(Ee=!0);else return n.lanes=e.lanes,dn(e,n,o)}return ml(e,n,r,t,o)}function Fc(e,n,r){var t=n.pendingProps,o=t.children,a=e!==null?e.memoizedState:null;if(t.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(kr,Le),Le|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,$(kr,Le),Le|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=a!==null?a.baseLanes:r,$(kr,Le),Le|=t}else a!==null?(t=a.baseLanes|r,n.memoizedState=null):t=r,$(kr,Le),Le|=t;return he(e,n,o,r),n.child}function Lc(e,n){var r=n.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(n.flags|=512,n.flags|=2097152)}function ml(e,n,r,t,o){var a=Ne(r)?qn:ve.current;return a=zr(n,a),Fr(n,o),r=ui(e,n,r,t,a,o),t=ci(),e!==null&&!Ee?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,dn(e,n,o)):(G&&t&&Zl(n),n.flags|=1,he(e,n,r,o),n.child)}function ws(e,n,r,t,o){if(Ne(r)){var a=!0;Lo(n)}else a=!1;if(Fr(n,o),n.stateNode===null)vo(e,n),nc(n,r,t),vl(n,r,t,o),t=!0;else if(e===null){var l=n.stateNode,i=n.memoizedProps;l.props=i;var s=l.context,u=r.contextType;typeof u=="object"&&u!==null?u=Be(u):(u=Ne(r)?qn:ve.current,u=zr(n,u));var p=r.getDerivedStateFromProps,v=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==t||s!==u)&&fs(n,l,t,u),bn=!1;var h=n.memoizedState;l.state=h,Mo(n,t,l,o),s=n.memoizedState,i!==t||h!==s||Ce.current||bn?(typeof p=="function"&&(pl(n,r,p,t),s=n.memoizedState),(i=bn||ds(n,r,i,t,h,s,u))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=t,n.memoizedState=s),l.props=t,l.state=s,l.context=u,t=i):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),t=!1)}else{l=n.stateNode,Ju(e,n),i=n.memoizedProps,u=n.type===n.elementType?i:Ue(n.type,i),l.props=u,v=n.pendingProps,h=l.context,s=r.contextType,typeof s=="object"&&s!==null?s=Be(s):(s=Ne(r)?qn:ve.current,s=zr(n,s));var y=r.getDerivedStateFromProps;(p=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==v||h!==s)&&fs(n,l,t,s),bn=!1,h=n.memoizedState,l.state=h,Mo(n,t,l,o);var x=n.memoizedState;i!==v||h!==x||Ce.current||bn?(typeof y=="function"&&(pl(n,r,y,t),x=n.memoizedState),(u=bn||ds(n,r,u,t,h,x,s)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(t,x,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(t,x,s)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=t,n.memoizedState=x),l.props=t,l.state=x,l.context=s,t=u):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),t=!1)}return bl(e,n,r,t,a,o)}function bl(e,n,r,t,o,a){Lc(e,n);var l=(n.flags&128)!==0;if(!t&&!l)return o&&ls(n,r,!1),dn(e,n,a);t=n.stateNode,o0.current=n;var i=l&&typeof r.getDerivedStateFromError!="function"?null:t.render();return n.flags|=1,e!==null&&l?(n.child=Pr(n,e.child,null,a),n.child=Pr(n,null,i,a)):he(e,n,i,a),n.memoizedState=t.state,o&&ls(n,r,!0),n.child}function jc(e){var n=e.stateNode;n.pendingContext?as(e,n.pendingContext,n.pendingContext!==n.context):n.context&&as(e,n.context,!1),ai(e,n.containerInfo)}function ks(e,n,r,t,o){return _r(),Jl(o),n.flags|=256,he(e,n,r,t),n.child}var gl={dehydrated:null,treeContext:null,retryLane:0};function yl(e){return{baseLanes:e,cachePool:null,transitions:null}}function zc(e,n,r){var t=n.pendingProps,o=Y.current,a=!1,l=(n.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(o&2)!==0),i?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),$(Y,o&1),e===null)return dl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=t.children,e=t.fallback,a?(t=n.mode,a=n.child,l={mode:"hidden",children:l},!(t&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=na(l,t,0,null),e=Zn(e,t,r,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=yl(r),n.memoizedState=gl,e):pi(n,l));if(o=e.memoizedState,o!==null&&(i=o.dehydrated,i!==null))return a0(e,n,l,t,i,o,r);if(a){a=t.fallback,l=n.mode,o=e.child,i=o.sibling;var s={mode:"hidden",children:t.children};return!(l&1)&&n.child!==o?(t=n.child,t.childLanes=0,t.pendingProps=s,n.deletions=null):(t=_n(o,s),t.subtreeFlags=o.subtreeFlags&14680064),i!==null?a=_n(i,a):(a=Zn(a,l,r,null),a.flags|=2),a.return=n,t.return=n,t.sibling=a,n.child=t,t=a,a=n.child,l=e.child.memoizedState,l=l===null?yl(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~r,n.memoizedState=gl,t}return a=e.child,e=a.sibling,t=_n(a,{mode:"visible",children:t.children}),!(n.mode&1)&&(t.lanes=r),t.return=n,t.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=t,n.memoizedState=null,t}function pi(e,n){return n=na({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function qt(e,n,r,t){return t!==null&&Jl(t),Pr(n,e.child,null,r),e=pi(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function a0(e,n,r,t,o,a,l){if(r)return n.flags&256?(n.flags&=-257,t=_a(Error(g(422))),qt(e,n,l,t)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=t.fallback,o=n.mode,t=na({mode:"visible",children:t.children},o,0,null),a=Zn(a,o,l,null),a.flags|=2,t.return=n,a.return=n,t.sibling=a,n.child=t,n.mode&1&&Pr(n,e.child,null,l),n.child.memoizedState=yl(l),n.memoizedState=gl,a);if(!(n.mode&1))return qt(e,n,l,null);if(o.data==="$!"){if(t=o.nextSibling&&o.nextSibling.dataset,t)var i=t.dgst;return t=i,a=Error(g(419)),t=_a(a,t,void 0),qt(e,n,l,t)}if(i=(l&e.childLanes)!==0,Ee||i){if(t=le,t!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(t.suspendedLanes|l)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,cn(e,o),Ye(t,e,o,-1))}return yi(),t=_a(Error(g(421))),qt(e,n,l,t)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=g0.bind(null,e),o._reactRetry=n,null):(e=a.treeContext,je=Fn(o.nextSibling),ze=n,G=!0,Xe=null,e!==null&&(Re[De++]=on,Re[De++]=an,Re[De++]=Jn,on=e.id,an=e.overflow,Jn=n),n=pi(n,t.children),n.flags|=4096,n)}function Ss(e,n,r){e.lanes|=n;var t=e.alternate;t!==null&&(t.lanes|=n),fl(e.return,n,r)}function Pa(e,n,r,t,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:t,tail:r,tailMode:o}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=t,a.tail=r,a.tailMode=o)}function _c(e,n,r){var t=n.pendingProps,o=t.revealOrder,a=t.tail;if(he(e,n,t.children,r),t=Y.current,t&2)t=t&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ss(e,r,n);else if(e.tag===19)Ss(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if($(Y,t),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(r=n.child,o=null;r!==null;)e=r.alternate,e!==null&&Ao(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=n.child,n.child=null):(o=r.sibling,r.sibling=null),Pa(n,!1,o,r,a);break;case"backwards":for(r=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&Ao(e)===null){n.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Pa(n,!0,r,null,a);break;case"together":Pa(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function vo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function dn(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),nr|=n.lanes,!(r&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(g(153));if(n.child!==null){for(e=n.child,r=_n(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=_n(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function l0(e,n,r){switch(n.tag){case 3:jc(n),_r();break;case 5:oc(n);break;case 1:Ne(n.type)&&Lo(n);break;case 4:ai(n,n.stateNode.containerInfo);break;case 10:var t=n.type._context,o=n.memoizedProps.value;$(_o,t._currentValue),t._currentValue=o;break;case 13:if(t=n.memoizedState,t!==null)return t.dehydrated!==null?($(Y,Y.current&1),n.flags|=128,null):r&n.child.childLanes?zc(e,n,r):($(Y,Y.current&1),e=dn(e,n,r),e!==null?e.sibling:null);$(Y,Y.current&1);break;case 19:if(t=(r&n.childLanes)!==0,e.flags&128){if(t)return _c(e,n,r);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),$(Y,Y.current),t)break;return null;case 22:case 23:return n.lanes=0,Fc(e,n,r)}return dn(e,n,r)}var Pc,xl,Mc,Ac;Pc=function(e,n){for(var r=n.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};xl=function(){};Mc=function(e,n,r,t){var o=e.memoizedProps;if(o!==t){e=n.stateNode,Wn(Je.current);var a=null;switch(r){case"input":o=$a(e,o),t=$a(e,t),a=[];break;case"select":o=K({},o,{value:void 0}),t=K({},t,{value:void 0}),a=[];break;case"textarea":o=Xa(e,o),t=Xa(e,t),a=[];break;default:typeof o.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=No)}Ya(r,t);var l;r=null;for(u in o)if(!t.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var i=o[u];for(l in i)i.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vt.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in t){var s=t[u];if(i=o!=null?o[u]:void 0,t.hasOwnProperty(u)&&s!==i&&(s!=null||i!=null))if(u==="style")if(i){for(l in i)!i.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in s)s.hasOwnProperty(l)&&i[l]!==s[l]&&(r||(r={}),r[l]=s[l])}else r||(a||(a=[]),a.push(u,r)),r=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,i=i?i.__html:void 0,s!=null&&i!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vt.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&V("scroll",e),a||i===s||(a=[])):(a=a||[]).push(u,s))}r&&(a=a||[]).push("style",r);var u=a;(n.updateQueue=u)&&(n.flags|=4)}};Ac=function(e,n,r,t){r!==t&&(n.flags|=4)};function Wr(e,n){if(!G)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function fe(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,t=0;if(n)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,t|=o.subtreeFlags&14680064,t|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,t|=o.subtreeFlags,t|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=t,e.childLanes=r,n}function i0(e,n,r){var t=n.pendingProps;switch(ql(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(n),null;case 1:return Ne(n.type)&&Fo(),fe(n),null;case 3:return t=n.stateNode,Mr(),X(Ce),X(ve),ii(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Qt(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Xe!==null&&(Ll(Xe),Xe=null))),xl(e,n),fe(n),null;case 5:li(n);var o=Wn(Nt.current);if(r=n.type,e!==null&&n.stateNode!=null)Mc(e,n,r,t,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!t){if(n.stateNode===null)throw Error(g(166));return fe(n),null}if(e=Wn(Je.current),Qt(n)){t=n.stateNode,r=n.type;var a=n.memoizedProps;switch(t[Ze]=n,t[Et]=a,e=(n.mode&1)!==0,r){case"dialog":V("cancel",t),V("close",t);break;case"iframe":case"object":case"embed":V("load",t);break;case"video":case"audio":for(o=0;o<tt.length;o++)V(tt[o],t);break;case"source":V("error",t);break;case"img":case"image":case"link":V("error",t),V("load",t);break;case"details":V("toggle",t);break;case"input":Pi(t,a),V("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!a.multiple},V("invalid",t);break;case"textarea":Ai(t,a),V("invalid",t)}Ya(r,a),o=null;for(var l in a)if(a.hasOwnProperty(l)){var i=a[l];l==="children"?typeof i=="string"?t.textContent!==i&&(a.suppressHydrationWarning!==!0&&Kt(t.textContent,i,e),o=["children",i]):typeof i=="number"&&t.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&Kt(t.textContent,i,e),o=["children",""+i]):vt.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&V("scroll",t)}switch(r){case"input":It(t),Mi(t,a,!0);break;case"textarea":It(t),Ri(t);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(t.onclick=No)}t=o,n.updateQueue=t,t!==null&&(n.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=iu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=l.createElement(r,{is:t.is}):(e=l.createElement(r),r==="select"&&(l=e,t.multiple?l.multiple=!0:t.size&&(l.size=t.size))):e=l.createElementNS(e,r),e[Ze]=n,e[Et]=t,Pc(e,n,!1,!1),n.stateNode=e;e:{switch(l=Wa(r,t),r){case"dialog":V("cancel",e),V("close",e),o=t;break;case"iframe":case"object":case"embed":V("load",e),o=t;break;case"video":case"audio":for(o=0;o<tt.length;o++)V(tt[o],e);o=t;break;case"source":V("error",e),o=t;break;case"img":case"image":case"link":V("error",e),V("load",e),o=t;break;case"details":V("toggle",e),o=t;break;case"input":Pi(e,t),o=$a(e,t),V("invalid",e);break;case"option":o=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},o=K({},t,{value:void 0}),V("invalid",e);break;case"textarea":Ai(e,t),o=Xa(e,t),V("invalid",e);break;default:o=t}Ya(r,o),i=o;for(a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="style"?cu(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&su(e,s)):a==="children"?typeof s=="string"?(r!=="textarea"||s!=="")&&ht(e,s):typeof s=="number"&&ht(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(vt.hasOwnProperty(a)?s!=null&&a==="onScroll"&&V("scroll",e):s!=null&&Tl(e,a,s,l))}switch(r){case"input":It(e),Mi(e,t,!1);break;case"textarea":It(e),Ri(e);break;case"option":t.value!=null&&e.setAttribute("value",""+Pn(t.value));break;case"select":e.multiple=!!t.multiple,a=t.value,a!=null?Sr(e,!!t.multiple,a,!1):t.defaultValue!=null&&Sr(e,!!t.multiple,t.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=No)}switch(r){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return fe(n),null;case 6:if(e&&n.stateNode!=null)Ac(e,n,e.memoizedProps,t);else{if(typeof t!="string"&&n.stateNode===null)throw Error(g(166));if(r=Wn(Nt.current),Wn(Je.current),Qt(n)){if(t=n.stateNode,r=n.memoizedProps,t[Ze]=n,(a=t.nodeValue!==r)&&(e=ze,e!==null))switch(e.tag){case 3:Kt(t.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Kt(t.nodeValue,r,(e.mode&1)!==0)}a&&(n.flags|=4)}else t=(r.nodeType===9?r:r.ownerDocument).createTextNode(t),t[Ze]=n,n.stateNode=t}return fe(n),null;case 13:if(X(Y),t=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&je!==null&&n.mode&1&&!(n.flags&128))Zu(),_r(),n.flags|=98560,a=!1;else if(a=Qt(n),t!==null&&t.dehydrated!==null){if(e===null){if(!a)throw Error(g(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(g(317));a[Ze]=n}else _r(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;fe(n),a=!1}else Xe!==null&&(Ll(Xe),Xe=null),a=!0;if(!a)return n.flags&65536?n:null}return n.flags&128?(n.lanes=r,n):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(n.child.flags|=8192,n.mode&1&&(e===null||Y.current&1?re===0&&(re=3):yi())),n.updateQueue!==null&&(n.flags|=4),fe(n),null);case 4:return Mr(),xl(e,n),e===null&&kt(n.stateNode.containerInfo),fe(n),null;case 10:return ri(n.type._context),fe(n),null;case 17:return Ne(n.type)&&Fo(),fe(n),null;case 19:if(X(Y),a=n.memoizedState,a===null)return fe(n),null;if(t=(n.flags&128)!==0,l=a.rendering,l===null)if(t)Wr(a,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=Ao(e),l!==null){for(n.flags|=128,Wr(a,!1),t=l.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),n.subtreeFlags=0,t=r,r=n.child;r!==null;)a=r,e=t,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return $(Y,Y.current&1|2),n.child}e=e.sibling}a.tail!==null&&q()>Rr&&(n.flags|=128,t=!0,Wr(a,!1),n.lanes=4194304)}else{if(!t)if(e=Ao(l),e!==null){if(n.flags|=128,t=!0,r=e.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),Wr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!G)return fe(n),null}else 2*q()-a.renderingStartTime>Rr&&r!==1073741824&&(n.flags|=128,t=!0,Wr(a,!1),n.lanes=4194304);a.isBackwards?(l.sibling=n.child,n.child=l):(r=a.last,r!==null?r.sibling=l:n.child=l,a.last=l)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=q(),n.sibling=null,r=Y.current,$(Y,t?r&1|2:r&1),n):(fe(n),null);case 22:case 23:return gi(),t=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(n.flags|=8192),t&&n.mode&1?Le&1073741824&&(fe(n),n.subtreeFlags&6&&(n.flags|=8192)):fe(n),null;case 24:return null;case 25:return null}throw Error(g(156,n.tag))}function s0(e,n){switch(ql(n),n.tag){case 1:return Ne(n.type)&&Fo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Mr(),X(Ce),X(ve),ii(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return li(n),null;case 13:if(X(Y),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(g(340));_r()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return X(Y),null;case 4:return Mr(),null;case 10:return ri(n.type._context),null;case 22:case 23:return gi(),null;case 24:return null;default:return null}}var Jt=!1,pe=!1,u0=typeof WeakSet=="function"?WeakSet:Set,F=null;function wr(e,n){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(t){Q(e,n,t)}else r.current=null}function wl(e,n,r){try{r()}catch(t){Q(e,n,t)}}var Es=!1;function c0(e,n){if(ol=So,e=Ou(),Ql(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var t=r.getSelection&&r.getSelection();if(t&&t.rangeCount!==0){r=t.anchorNode;var o=t.anchorOffset,a=t.focusNode;t=t.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var l=0,i=-1,s=-1,u=0,p=0,v=e,h=null;n:for(;;){for(var y;v!==r||o!==0&&v.nodeType!==3||(i=l+o),v!==a||t!==0&&v.nodeType!==3||(s=l+t),v.nodeType===3&&(l+=v.nodeValue.length),(y=v.firstChild)!==null;)h=v,v=y;for(;;){if(v===e)break n;if(h===r&&++u===o&&(i=l),h===a&&++p===t&&(s=l),(y=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=y}r=i===-1||s===-1?null:{start:i,end:s}}else r=null}r=r||{start:0,end:0}}else r=null;for(al={focusedElem:e,selectionRange:r},So=!1,F=n;F!==null;)if(n=F,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,F=e;else for(;F!==null;){n=F;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,H=x.memoizedState,d=n.stateNode,c=d.getSnapshotBeforeUpdate(n.elementType===n.type?w:Ue(n.type,w),H);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(b){Q(n,n.return,b)}if(e=n.sibling,e!==null){e.return=n.return,F=e;break}F=n.return}return x=Es,Es=!1,x}function dt(e,n,r){var t=n.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var o=t=t.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&wl(n,r,a)}o=o.next}while(o!==t)}}function Jo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var t=r.create;r.destroy=t()}r=r.next}while(r!==n)}}function kl(e){var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof n=="function"?n(e):n.current=e}}function Rc(e){var n=e.alternate;n!==null&&(e.alternate=null,Rc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ze],delete n[Et],delete n[sl],delete n[Gf],delete n[Yf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dc(e){return e.tag===5||e.tag===3||e.tag===4}function Cs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sl(e,n,r){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(e,n):r.insertBefore(e,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(e,r)):(n=r,n.appendChild(e)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=No));else if(t!==4&&(e=e.child,e!==null))for(Sl(e,n,r),e=e.sibling;e!==null;)Sl(e,n,r),e=e.sibling}function El(e,n,r){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(El(e,n,r),e=e.sibling;e!==null;)El(e,n,r),e=e.sibling}var ie=null,Ve=!1;function vn(e,n,r){for(r=r.child;r!==null;)Tc(e,n,r),r=r.sibling}function Tc(e,n,r){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(Xo,r)}catch{}switch(r.tag){case 5:pe||wr(r,n);case 6:var t=ie,o=Ve;ie=null,vn(e,n,r),ie=t,Ve=o,ie!==null&&(Ve?(e=ie,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ie.removeChild(r.stateNode));break;case 18:ie!==null&&(Ve?(e=ie,r=r.stateNode,e.nodeType===8?Ca(e.parentNode,r):e.nodeType===1&&Ca(e,r),yt(e)):Ca(ie,r.stateNode));break;case 4:t=ie,o=Ve,ie=r.stateNode.containerInfo,Ve=!0,vn(e,n,r),ie=t,Ve=o;break;case 0:case 11:case 14:case 15:if(!pe&&(t=r.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){o=t=t.next;do{var a=o,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&wl(r,n,l),o=o.next}while(o!==t)}vn(e,n,r);break;case 1:if(!pe&&(wr(r,n),t=r.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=r.memoizedProps,t.state=r.memoizedState,t.componentWillUnmount()}catch(i){Q(r,n,i)}vn(e,n,r);break;case 21:vn(e,n,r);break;case 22:r.mode&1?(pe=(t=pe)||r.memoizedState!==null,vn(e,n,r),pe=t):vn(e,n,r);break;default:vn(e,n,r)}}function Ns(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new u0),n.forEach(function(t){var o=y0.bind(null,e,t);r.has(t)||(r.add(t),t.then(o,o))})}}function Ie(e,n){var r=n.deletions;if(r!==null)for(var t=0;t<r.length;t++){var o=r[t];try{var a=e,l=n,i=l;e:for(;i!==null;){switch(i.tag){case 5:ie=i.stateNode,Ve=!1;break e;case 3:ie=i.stateNode.containerInfo,Ve=!0;break e;case 4:ie=i.stateNode.containerInfo,Ve=!0;break e}i=i.return}if(ie===null)throw Error(g(160));Tc(a,l,o),ie=null,Ve=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){Q(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Oc(n,e),n=n.sibling}function Oc(e,n){var r=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(n,e),Ke(e),t&4){try{dt(3,e,e.return),Jo(3,e)}catch(w){Q(e,e.return,w)}try{dt(5,e,e.return)}catch(w){Q(e,e.return,w)}}break;case 1:Ie(n,e),Ke(e),t&512&&r!==null&&wr(r,r.return);break;case 5:if(Ie(n,e),Ke(e),t&512&&r!==null&&wr(r,r.return),e.flags&32){var o=e.stateNode;try{ht(o,"")}catch(w){Q(e,e.return,w)}}if(t&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,l=r!==null?r.memoizedProps:a,i=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&au(o,a),Wa(i,l);var u=Wa(i,a);for(l=0;l<s.length;l+=2){var p=s[l],v=s[l+1];p==="style"?cu(o,v):p==="dangerouslySetInnerHTML"?su(o,v):p==="children"?ht(o,v):Tl(o,p,v,u)}switch(i){case"input":Ua(o,a);break;case"textarea":lu(o,a);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?Sr(o,!!a.multiple,y,!1):h!==!!a.multiple&&(a.defaultValue!=null?Sr(o,!!a.multiple,a.defaultValue,!0):Sr(o,!!a.multiple,a.multiple?[]:"",!1))}o[Et]=a}catch(w){Q(e,e.return,w)}}break;case 6:if(Ie(n,e),Ke(e),t&4){if(e.stateNode===null)throw Error(g(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(w){Q(e,e.return,w)}}break;case 3:if(Ie(n,e),Ke(e),t&4&&r!==null&&r.memoizedState.isDehydrated)try{yt(n.containerInfo)}catch(w){Q(e,e.return,w)}break;case 4:Ie(n,e),Ke(e);break;case 13:Ie(n,e),Ke(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(mi=q())),t&4&&Ns(e);break;case 22:if(p=r!==null&&r.memoizedState!==null,e.mode&1?(pe=(u=pe)||p,Ie(n,e),pe=u):Ie(n,e),Ke(e),t&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(F=e,p=e.child;p!==null;){for(v=F=p;F!==null;){switch(h=F,y=h.child,h.tag){case 0:case 11:case 14:case 15:dt(4,h,h.return);break;case 1:wr(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){t=h,r=h.return;try{n=t,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(w){Q(t,r,w)}}break;case 5:wr(h,h.return);break;case 22:if(h.memoizedState!==null){Ls(v);continue}}y!==null?(y.return=h,F=y):Ls(v)}p=p.sibling}e:for(p=null,v=e;;){if(v.tag===5){if(p===null){p=v;try{o=v.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=v.stateNode,s=v.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,i.style.display=uu("display",l))}catch(w){Q(e,e.return,w)}}}else if(v.tag===6){if(p===null)try{v.stateNode.nodeValue=u?"":v.memoizedProps}catch(w){Q(e,e.return,w)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;p===v&&(p=null),v=v.return}p===v&&(p=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Ie(n,e),Ke(e),t&4&&Ns(e);break;case 21:break;default:Ie(n,e),Ke(e)}}function Ke(e){var n=e.flags;if(n&2){try{e:{for(var r=e.return;r!==null;){if(Dc(r)){var t=r;break e}r=r.return}throw Error(g(160))}switch(t.tag){case 5:var o=t.stateNode;t.flags&32&&(ht(o,""),t.flags&=-33);var a=Cs(e);El(e,a,o);break;case 3:case 4:var l=t.stateNode.containerInfo,i=Cs(e);Sl(e,i,l);break;default:throw Error(g(161))}}catch(s){Q(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function d0(e,n,r){F=e,Bc(e)}function Bc(e,n,r){for(var t=(e.mode&1)!==0;F!==null;){var o=F,a=o.child;if(o.tag===22&&t){var l=o.memoizedState!==null||Jt;if(!l){var i=o.alternate,s=i!==null&&i.memoizedState!==null||pe;i=Jt;var u=pe;if(Jt=l,(pe=s)&&!u)for(F=o;F!==null;)l=F,s=l.child,l.tag===22&&l.memoizedState!==null?js(o):s!==null?(s.return=l,F=s):js(o);for(;a!==null;)F=a,Bc(a),a=a.sibling;F=o,Jt=i,pe=u}Fs(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,F=a):Fs(e)}}function Fs(e){for(;F!==null;){var n=F;if(n.flags&8772){var r=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:pe||Jo(5,n);break;case 1:var t=n.stateNode;if(n.flags&4&&!pe)if(r===null)t.componentDidMount();else{var o=n.elementType===n.type?r.memoizedProps:Ue(n.type,r.memoizedProps);t.componentDidUpdate(o,r.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&cs(n,a,t);break;case 3:var l=n.updateQueue;if(l!==null){if(r=null,n.child!==null)switch(n.child.tag){case 5:r=n.child.stateNode;break;case 1:r=n.child.stateNode}cs(n,l,r)}break;case 5:var i=n.stateNode;if(r===null&&n.flags&4){r=i;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&r.focus();break;case"img":s.src&&(r.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var v=p.dehydrated;v!==null&&yt(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}pe||n.flags&512&&kl(n)}catch(h){Q(n,n.return,h)}}if(n===e){F=null;break}if(r=n.sibling,r!==null){r.return=n.return,F=r;break}F=n.return}}function Ls(e){for(;F!==null;){var n=F;if(n===e){F=null;break}var r=n.sibling;if(r!==null){r.return=n.return,F=r;break}F=n.return}}function js(e){for(;F!==null;){var n=F;try{switch(n.tag){case 0:case 11:case 15:var r=n.return;try{Jo(4,n)}catch(s){Q(n,r,s)}break;case 1:var t=n.stateNode;if(typeof t.componentDidMount=="function"){var o=n.return;try{t.componentDidMount()}catch(s){Q(n,o,s)}}var a=n.return;try{kl(n)}catch(s){Q(n,a,s)}break;case 5:var l=n.return;try{kl(n)}catch(s){Q(n,l,s)}}}catch(s){Q(n,n.return,s)}if(n===e){F=null;break}var i=n.sibling;if(i!==null){i.return=n.return,F=i;break}F=n.return}}var f0=Math.ceil,To=pn.ReactCurrentDispatcher,vi=pn.ReactCurrentOwner,Oe=pn.ReactCurrentBatchConfig,O=0,le=null,ee=null,ue=0,Le=0,kr=Rn(0),re=0,zt=null,nr=0,ea=0,hi=0,ft=null,Se=null,mi=0,Rr=1/0,rn=null,Oo=!1,Cl=null,jn=null,eo=!1,kn=null,Bo=0,pt=0,Nl=null,ho=-1,mo=0;function be(){return O&6?q():ho!==-1?ho:ho=q()}function zn(e){return e.mode&1?O&2&&ue!==0?ue&-ue:Kf.transition!==null?(mo===0&&(mo=ku()),mo):(e=I,e!==0||(e=window.event,e=e===void 0?16:ju(e.type)),e):1}function Ye(e,n,r,t){if(50<pt)throw pt=0,Nl=null,Error(g(185));Mt(e,r,t),(!(O&2)||e!==le)&&(e===le&&(!(O&2)&&(ea|=r),re===4&&xn(e,ue)),Fe(e,t),r===1&&O===0&&!(n.mode&1)&&(Rr=q()+500,Qo&&Dn()))}function Fe(e,n){var r=e.callbackNode;Wd(e,n);var t=ko(e,e===le?ue:0);if(t===0)r!==null&&Oi(r),e.callbackNode=null,e.callbackPriority=0;else if(n=t&-t,e.callbackPriority!==n){if(r!=null&&Oi(r),n===1)e.tag===0?Wf(zs.bind(null,e)):Wu(zs.bind(null,e)),Vf(function(){!(O&6)&&Dn()}),r=null;else{switch(Su(t)){case 1:r=$l;break;case 4:r=xu;break;case 16:r=wo;break;case 536870912:r=wu;break;default:r=wo}r=Yc(r,Hc.bind(null,e))}e.callbackPriority=n,e.callbackNode=r}}function Hc(e,n){if(ho=-1,mo=0,O&6)throw Error(g(327));var r=e.callbackNode;if(Lr()&&e.callbackNode!==r)return null;var t=ko(e,e===le?ue:0);if(t===0)return null;if(t&30||t&e.expiredLanes||n)n=Ho(e,t);else{n=t;var o=O;O|=2;var a=$c();(le!==e||ue!==n)&&(rn=null,Rr=q()+500,Qn(e,n));do try{h0();break}catch(i){Ic(e,i)}while(1);ni(),To.current=a,O=o,ee!==null?n=0:(le=null,ue=0,n=re)}if(n!==0){if(n===2&&(o=Ja(e),o!==0&&(t=o,n=Fl(e,o))),n===1)throw r=zt,Qn(e,0),xn(e,t),Fe(e,q()),r;if(n===6)xn(e,t);else{if(o=e.current.alternate,!(t&30)&&!p0(o)&&(n=Ho(e,t),n===2&&(a=Ja(e),a!==0&&(t=a,n=Fl(e,a))),n===1))throw r=zt,Qn(e,0),xn(e,t),Fe(e,q()),r;switch(e.finishedWork=o,e.finishedLanes=t,n){case 0:case 1:throw Error(g(345));case 2:Vn(e,Se,rn);break;case 3:if(xn(e,t),(t&130023424)===t&&(n=mi+500-q(),10<n)){if(ko(e,0)!==0)break;if(o=e.suspendedLanes,(o&t)!==t){be(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=il(Vn.bind(null,e,Se,rn),n);break}Vn(e,Se,rn);break;case 4:if(xn(e,t),(t&4194240)===t)break;for(n=e.eventTimes,o=-1;0<t;){var l=31-Ge(t);a=1<<l,l=n[l],l>o&&(o=l),t&=~a}if(t=o,t=q()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*f0(t/1960))-t,10<t){e.timeoutHandle=il(Vn.bind(null,e,Se,rn),t);break}Vn(e,Se,rn);break;case 5:Vn(e,Se,rn);break;default:throw Error(g(329))}}}return Fe(e,q()),e.callbackNode===r?Hc.bind(null,e):null}function Fl(e,n){var r=ft;return e.current.memoizedState.isDehydrated&&(Qn(e,n).flags|=256),e=Ho(e,n),e!==2&&(n=Se,Se=r,n!==null&&Ll(n)),e}function Ll(e){Se===null?Se=e:Se.push.apply(Se,e)}function p0(e){for(var n=e;;){if(n.flags&16384){var r=n.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var t=0;t<r.length;t++){var o=r[t],a=o.getSnapshot;o=o.value;try{if(!We(a(),o))return!1}catch{return!1}}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function xn(e,n){for(n&=~hi,n&=~ea,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var r=31-Ge(n),t=1<<r;e[r]=-1,n&=~t}}function zs(e){if(O&6)throw Error(g(327));Lr();var n=ko(e,0);if(!(n&1))return Fe(e,q()),null;var r=Ho(e,n);if(e.tag!==0&&r===2){var t=Ja(e);t!==0&&(n=t,r=Fl(e,t))}if(r===1)throw r=zt,Qn(e,0),xn(e,n),Fe(e,q()),r;if(r===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Vn(e,Se,rn),Fe(e,q()),null}function bi(e,n){var r=O;O|=1;try{return e(n)}finally{O=r,O===0&&(Rr=q()+500,Qo&&Dn())}}function rr(e){kn!==null&&kn.tag===0&&!(O&6)&&Lr();var n=O;O|=1;var r=Oe.transition,t=I;try{if(Oe.transition=null,I=1,e)return e()}finally{I=t,Oe.transition=r,O=n,!(O&6)&&Dn()}}function gi(){Le=kr.current,X(kr)}function Qn(e,n){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Uf(r)),ee!==null)for(r=ee.return;r!==null;){var t=r;switch(ql(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&Fo();break;case 3:Mr(),X(Ce),X(ve),ii();break;case 5:li(t);break;case 4:Mr();break;case 13:X(Y);break;case 19:X(Y);break;case 10:ri(t.type._context);break;case 22:case 23:gi()}r=r.return}if(le=e,ee=e=_n(e.current,null),ue=Le=n,re=0,zt=null,hi=ea=nr=0,Se=ft=null,Yn!==null){for(n=0;n<Yn.length;n++)if(r=Yn[n],t=r.interleaved,t!==null){r.interleaved=null;var o=t.next,a=r.pending;if(a!==null){var l=a.next;a.next=o,t.next=l}r.pending=t}Yn=null}return e}function Ic(e,n){do{var r=ee;try{if(ni(),fo.current=Do,Ro){for(var t=W.memoizedState;t!==null;){var o=t.queue;o!==null&&(o.pending=null),t=t.next}Ro=!1}if(er=0,ae=ne=W=null,ct=!1,Ft=0,vi.current=null,r===null||r.return===null){re=1,zt=n,ee=null;break}e:{var a=e,l=r.return,i=r,s=n;if(n=ue,i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=i,v=p.tag;if(!(p.mode&1)&&(v===0||v===11||v===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=bs(l);if(y!==null){y.flags&=-257,gs(y,l,i,a,n),y.mode&1&&ms(a,u,n),n=y,s=u;var x=n.updateQueue;if(x===null){var w=new Set;w.add(s),n.updateQueue=w}else x.add(s);break e}else{if(!(n&1)){ms(a,u,n),yi();break e}s=Error(g(426))}}else if(G&&i.mode&1){var H=bs(l);if(H!==null){!(H.flags&65536)&&(H.flags|=256),gs(H,l,i,a,n),Jl(Ar(s,i));break e}}a=s=Ar(s,i),re!==4&&(re=2),ft===null?ft=[a]:ft.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var d=Ec(a,s,n);us(a,d);break e;case 1:i=s;var c=a.type,f=a.stateNode;if(!(a.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(jn===null||!jn.has(f)))){a.flags|=65536,n&=-n,a.lanes|=n;var b=Cc(a,i,n);us(a,b);break e}}a=a.return}while(a!==null)}Vc(r)}catch(k){n=k,ee===r&&r!==null&&(ee=r=r.return);continue}break}while(1)}function $c(){var e=To.current;return To.current=Do,e===null?Do:e}function yi(){(re===0||re===3||re===2)&&(re=4),le===null||!(nr&268435455)&&!(ea&268435455)||xn(le,ue)}function Ho(e,n){var r=O;O|=2;var t=$c();(le!==e||ue!==n)&&(rn=null,Qn(e,n));do try{v0();break}catch(o){Ic(e,o)}while(1);if(ni(),O=r,To.current=t,ee!==null)throw Error(g(261));return le=null,ue=0,re}function v0(){for(;ee!==null;)Uc(ee)}function h0(){for(;ee!==null&&!Bd();)Uc(ee)}function Uc(e){var n=Gc(e.alternate,e,Le);e.memoizedProps=e.pendingProps,n===null?Vc(e):ee=n,vi.current=null}function Vc(e){var n=e;do{var r=n.alternate;if(e=n.return,n.flags&32768){if(r=s0(r,n),r!==null){r.flags&=32767,ee=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ee=null;return}}else if(r=i0(r,n,Le),r!==null){ee=r;return}if(n=n.sibling,n!==null){ee=n;return}ee=n=e}while(n!==null);re===0&&(re=5)}function Vn(e,n,r){var t=I,o=Oe.transition;try{Oe.transition=null,I=1,m0(e,n,r,t)}finally{Oe.transition=o,I=t}return null}function m0(e,n,r,t){do Lr();while(kn!==null);if(O&6)throw Error(g(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Kd(e,a),e===le&&(ee=le=null,ue=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||eo||(eo=!0,Yc(wo,function(){return Lr(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Oe.transition,Oe.transition=null;var l=I;I=1;var i=O;O|=4,vi.current=null,c0(e,r),Oc(r,e),Df(al),So=!!ol,al=ol=null,e.current=r,d0(r),Hd(),O=i,I=l,Oe.transition=a}else e.current=r;if(eo&&(eo=!1,kn=e,Bo=o),a=e.pendingLanes,a===0&&(jn=null),Ud(r.stateNode),Fe(e,q()),n!==null)for(t=e.onRecoverableError,r=0;r<n.length;r++)o=n[r],t(o.value,{componentStack:o.stack,digest:o.digest});if(Oo)throw Oo=!1,e=Cl,Cl=null,e;return Bo&1&&e.tag!==0&&Lr(),a=e.pendingLanes,a&1?e===Nl?pt++:(pt=0,Nl=e):pt=0,Dn(),null}function Lr(){if(kn!==null){var e=Su(Bo),n=Oe.transition,r=I;try{if(Oe.transition=null,I=16>e?16:e,kn===null)var t=!1;else{if(e=kn,kn=null,Bo=0,O&6)throw Error(g(331));var o=O;for(O|=4,F=e.current;F!==null;){var a=F,l=a.child;if(F.flags&16){var i=a.deletions;if(i!==null){for(var s=0;s<i.length;s++){var u=i[s];for(F=u;F!==null;){var p=F;switch(p.tag){case 0:case 11:case 15:dt(8,p,a)}var v=p.child;if(v!==null)v.return=p,F=v;else for(;F!==null;){p=F;var h=p.sibling,y=p.return;if(Rc(p),p===u){F=null;break}if(h!==null){h.return=y,F=h;break}F=y}}}var x=a.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var H=w.sibling;w.sibling=null,w=H}while(w!==null)}}F=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,F=l;else e:for(;F!==null;){if(a=F,a.flags&2048)switch(a.tag){case 0:case 11:case 15:dt(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,F=d;break e}F=a.return}}var c=e.current;for(F=c;F!==null;){l=F;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,F=f;else e:for(l=c;F!==null;){if(i=F,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Jo(9,i)}}catch(k){Q(i,i.return,k)}if(i===l){F=null;break e}var b=i.sibling;if(b!==null){b.return=i.return,F=b;break e}F=i.return}}if(O=o,Dn(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(Xo,e)}catch{}t=!0}return t}finally{I=r,Oe.transition=n}}return!1}function _s(e,n,r){n=Ar(r,n),n=Ec(e,n,1),e=Ln(e,n,1),n=be(),e!==null&&(Mt(e,1,n),Fe(e,n))}function Q(e,n,r){if(e.tag===3)_s(e,e,r);else for(;n!==null;){if(n.tag===3){_s(n,e,r);break}else if(n.tag===1){var t=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(jn===null||!jn.has(t))){e=Ar(r,e),e=Cc(n,e,1),n=Ln(n,e,1),e=be(),n!==null&&(Mt(n,1,e),Fe(n,e));break}}n=n.return}}function b0(e,n,r){var t=e.pingCache;t!==null&&t.delete(n),n=be(),e.pingedLanes|=e.suspendedLanes&r,le===e&&(ue&r)===r&&(re===4||re===3&&(ue&130023424)===ue&&500>q()-mi?Qn(e,0):hi|=r),Fe(e,n)}function Xc(e,n){n===0&&(e.mode&1?(n=Vt,Vt<<=1,!(Vt&130023424)&&(Vt=4194304)):n=1);var r=be();e=cn(e,n),e!==null&&(Mt(e,n,r),Fe(e,r))}function g0(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),Xc(e,r)}function y0(e,n){var r=0;switch(e.tag){case 13:var t=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(g(314))}t!==null&&t.delete(n),Xc(e,r)}var Gc;Gc=function(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ce.current)Ee=!0;else{if(!(e.lanes&r)&&!(n.flags&128))return Ee=!1,l0(e,n,r);Ee=!!(e.flags&131072)}else Ee=!1,G&&n.flags&1048576&&Ku(n,zo,n.index);switch(n.lanes=0,n.tag){case 2:var t=n.type;vo(e,n),e=n.pendingProps;var o=zr(n,ve.current);Fr(n,r),o=ui(null,n,t,e,o,r);var a=ci();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ne(t)?(a=!0,Lo(n)):a=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,oi(n),o.updater=Zo,n.stateNode=o,o._reactInternals=n,vl(n,t,e,r),n=bl(null,n,t,!0,a,r)):(n.tag=0,G&&a&&Zl(n),he(null,n,o,r),n=n.child),n;case 16:t=n.elementType;e:{switch(vo(e,n),e=n.pendingProps,o=t._init,t=o(t._payload),n.type=t,o=n.tag=w0(t),e=Ue(t,e),o){case 0:n=ml(null,n,t,e,r);break e;case 1:n=ws(null,n,t,e,r);break e;case 11:n=ys(null,n,t,e,r);break e;case 14:n=xs(null,n,t,Ue(t.type,e),r);break e}throw Error(g(306,t,""))}return n;case 0:return t=n.type,o=n.pendingProps,o=n.elementType===t?o:Ue(t,o),ml(e,n,t,o,r);case 1:return t=n.type,o=n.pendingProps,o=n.elementType===t?o:Ue(t,o),ws(e,n,t,o,r);case 3:e:{if(jc(n),e===null)throw Error(g(387));t=n.pendingProps,a=n.memoizedState,o=a.element,Ju(e,n),Mo(n,t,null,r);var l=n.memoizedState;if(t=l.element,a.isDehydrated)if(a={element:t,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){o=Ar(Error(g(423)),n),n=ks(e,n,t,r,o);break e}else if(t!==o){o=Ar(Error(g(424)),n),n=ks(e,n,t,r,o);break e}else for(je=Fn(n.stateNode.containerInfo.firstChild),ze=n,G=!0,Xe=null,r=tc(n,null,t,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(_r(),t===o){n=dn(e,n,r);break e}he(e,n,t,r)}n=n.child}return n;case 5:return oc(n),e===null&&dl(n),t=n.type,o=n.pendingProps,a=e!==null?e.memoizedProps:null,l=o.children,ll(t,o)?l=null:a!==null&&ll(t,a)&&(n.flags|=32),Lc(e,n),he(e,n,l,r),n.child;case 6:return e===null&&dl(n),null;case 13:return zc(e,n,r);case 4:return ai(n,n.stateNode.containerInfo),t=n.pendingProps,e===null?n.child=Pr(n,null,t,r):he(e,n,t,r),n.child;case 11:return t=n.type,o=n.pendingProps,o=n.elementType===t?o:Ue(t,o),ys(e,n,t,o,r);case 7:return he(e,n,n.pendingProps,r),n.child;case 8:return he(e,n,n.pendingProps.children,r),n.child;case 12:return he(e,n,n.pendingProps.children,r),n.child;case 10:e:{if(t=n.type._context,o=n.pendingProps,a=n.memoizedProps,l=o.value,$(_o,t._currentValue),t._currentValue=l,a!==null)if(We(a.value,l)){if(a.children===o.children&&!Ce.current){n=dn(e,n,r);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var i=a.dependencies;if(i!==null){l=a.child;for(var s=i.firstContext;s!==null;){if(s.context===t){if(a.tag===1){s=ln(-1,r&-r),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}a.lanes|=r,s=a.alternate,s!==null&&(s.lanes|=r),fl(a.return,r,n),i.lanes|=r;break}s=s.next}}else if(a.tag===10)l=a.type===n.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(g(341));l.lanes|=r,i=l.alternate,i!==null&&(i.lanes|=r),fl(l,r,n),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===n){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}he(e,n,o.children,r),n=n.child}return n;case 9:return o=n.type,t=n.pendingProps.children,Fr(n,r),o=Be(o),t=t(o),n.flags|=1,he(e,n,t,r),n.child;case 14:return t=n.type,o=Ue(t,n.pendingProps),o=Ue(t.type,o),xs(e,n,t,o,r);case 15:return Nc(e,n,n.type,n.pendingProps,r);case 17:return t=n.type,o=n.pendingProps,o=n.elementType===t?o:Ue(t,o),vo(e,n),n.tag=1,Ne(t)?(e=!0,Lo(n)):e=!1,Fr(n,r),nc(n,t,o),vl(n,t,o,r),bl(null,n,t,!0,e,r);case 19:return _c(e,n,r);case 22:return Fc(e,n,r)}throw Error(g(156,n.tag))};function Yc(e,n){return yu(e,n)}function x0(e,n,r,t){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,n,r,t){return new x0(e,n,r,t)}function xi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function w0(e){if(typeof e=="function")return xi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bl)return 11;if(e===Hl)return 14}return 2}function _n(e,n){var r=e.alternate;return r===null?(r=Te(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function bo(e,n,r,t,o,a){var l=2;if(t=e,typeof e=="function")xi(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case fr:return Zn(r.children,o,a,n);case Ol:l=8,o|=8;break;case Oa:return e=Te(12,r,n,o|2),e.elementType=Oa,e.lanes=a,e;case Ba:return e=Te(13,r,n,o),e.elementType=Ba,e.lanes=a,e;case Ha:return e=Te(19,r,n,o),e.elementType=Ha,e.lanes=a,e;case ru:return na(r,o,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case eu:l=10;break e;case nu:l=9;break e;case Bl:l=11;break e;case Hl:l=14;break e;case mn:l=16,t=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return n=Te(l,r,n,o),n.elementType=e,n.type=t,n.lanes=a,n}function Zn(e,n,r,t){return e=Te(7,e,t,n),e.lanes=r,e}function na(e,n,r,t){return e=Te(22,e,t,n),e.elementType=ru,e.lanes=r,e.stateNode={isHidden:!1},e}function Ma(e,n,r){return e=Te(6,e,null,n),e.lanes=r,e}function Aa(e,n,r){return n=Te(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function k0(e,n,r,t,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=va(0),this.expirationTimes=va(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=va(0),this.identifierPrefix=t,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function wi(e,n,r,t,o,a,l,i,s){return e=new k0(e,n,r,i,s),n===1?(n=1,a===!0&&(n|=8)):n=0,a=Te(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:t,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},oi(a),e}function S0(e,n,r){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dr,key:t==null?null:""+t,children:e,containerInfo:n,implementation:r}}function Wc(e){if(!e)return Mn;e=e._reactInternals;e:{if(ar(e)!==e||e.tag!==1)throw Error(g(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ne(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(g(171))}if(e.tag===1){var r=e.type;if(Ne(r))return Yu(e,r,n)}return n}function Kc(e,n,r,t,o,a,l,i,s){return e=wi(r,t,!0,e,o,a,l,i,s),e.context=Wc(null),r=e.current,t=be(),o=zn(r),a=ln(t,o),a.callback=n??null,Ln(r,a,o),e.current.lanes=o,Mt(e,o,t),Fe(e,t),e}function ra(e,n,r,t){var o=n.current,a=be(),l=zn(o);return r=Wc(r),n.context===null?n.context=r:n.pendingContext=r,n=ln(a,l),n.payload={element:e},t=t===void 0?null:t,t!==null&&(n.callback=t),e=Ln(o,n,l),e!==null&&(Ye(e,o,l,a),co(e,o,l)),l}function Io(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ps(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function ki(e,n){Ps(e,n),(e=e.alternate)&&Ps(e,n)}function E0(){return null}var Qc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Si(e){this._internalRoot=e}ta.prototype.render=Si.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(g(409));ra(e,n,null,null)};ta.prototype.unmount=Si.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;rr(function(){ra(null,e,null,null)}),n[un]=null}};function ta(e){this._internalRoot=e}ta.prototype.unstable_scheduleHydration=function(e){if(e){var n=Nu();e={blockedOn:null,target:e,priority:n};for(var r=0;r<yn.length&&n!==0&&n<yn[r].priority;r++);yn.splice(r,0,e),r===0&&Lu(e)}};function Ei(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ms(){}function C0(e,n,r,t,o){if(o){if(typeof t=="function"){var a=t;t=function(){var u=Io(l);a.call(u)}}var l=Kc(n,t,e,0,null,!1,!1,"",Ms);return e._reactRootContainer=l,e[un]=l.current,kt(e.nodeType===8?e.parentNode:e),rr(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof t=="function"){var i=t;t=function(){var u=Io(s);i.call(u)}}var s=wi(e,0,!1,null,null,!1,!1,"",Ms);return e._reactRootContainer=s,e[un]=s.current,kt(e.nodeType===8?e.parentNode:e),rr(function(){ra(n,s,r,t)}),s}function aa(e,n,r,t,o){var a=r._reactRootContainer;if(a){var l=a;if(typeof o=="function"){var i=o;o=function(){var s=Io(l);i.call(s)}}ra(n,l,e,o)}else l=C0(r,n,e,o,t);return Io(l)}Eu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var r=rt(n.pendingLanes);r!==0&&(Ul(n,r|1),Fe(n,q()),!(O&6)&&(Rr=q()+500,Dn()))}break;case 13:rr(function(){var t=cn(e,1);if(t!==null){var o=be();Ye(t,e,1,o)}}),ki(e,1)}};Vl=function(e){if(e.tag===13){var n=cn(e,134217728);if(n!==null){var r=be();Ye(n,e,134217728,r)}ki(e,134217728)}};Cu=function(e){if(e.tag===13){var n=zn(e),r=cn(e,n);if(r!==null){var t=be();Ye(r,e,n,t)}ki(e,n)}};Nu=function(){return I};Fu=function(e,n){var r=I;try{return I=e,n()}finally{I=r}};Qa=function(e,n,r){switch(n){case"input":if(Ua(e,r),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<r.length;n++){var t=r[n];if(t!==e&&t.form===e.form){var o=Ko(t);if(!o)throw Error(g(90));ou(t),Ua(t,o)}}}break;case"textarea":lu(e,r);break;case"select":n=r.value,n!=null&&Sr(e,!!r.multiple,n,!1)}};pu=bi;vu=rr;var N0={usingClientEntryPoint:!1,Events:[Rt,mr,Ko,du,fu,bi]},Kr={findFiberByHostInstance:Gn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},F0={bundleType:Kr.bundleType,version:Kr.version,rendererPackageName:Kr.rendererPackageName,rendererConfig:Kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bu(e),e===null?null:e.stateNode},findFiberByHostInstance:Kr.findFiberByHostInstance||E0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{Xo=no.inject(F0),qe=no}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N0;Pe.createPortal=function(e,n){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ei(n))throw Error(g(200));return S0(e,n,null,r)};Pe.createRoot=function(e,n){if(!Ei(e))throw Error(g(299));var r=!1,t="",o=Qc;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(t=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=wi(e,1,!1,null,null,r,!1,t,o),e[un]=n.current,kt(e.nodeType===8?e.parentNode:e),new Si(n)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=bu(n),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return rr(e)};Pe.hydrate=function(e,n,r){if(!oa(n))throw Error(g(200));return aa(null,e,n,!0,r)};Pe.hydrateRoot=function(e,n,r){if(!Ei(e))throw Error(g(405));var t=r!=null&&r.hydratedSources||null,o=!1,a="",l=Qc;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),n=Kc(n,null,e,1,r??null,o,!1,a,l),e[un]=n.current,kt(e),t)for(e=0;e<t.length;e++)r=t[e],o=r._getVersion,o=o(r._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[r,o]:n.mutableSourceEagerHydrationData.push(r,o);return new ta(n)};Pe.render=function(e,n,r){if(!oa(n))throw Error(g(200));return aa(null,e,n,!1,r)};Pe.unmountComponentAtNode=function(e){if(!oa(e))throw Error(g(40));return e._reactRootContainer?(rr(function(){aa(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1};Pe.unstable_batchedUpdates=bi;Pe.unstable_renderSubtreeIntoContainer=function(e,n,r,t){if(!oa(r))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return aa(e,n,r,!1,t)};Pe.version="18.2.0-next-9e3b772b8-20220608";function Zc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zc)}catch(e){console.error(e)}}Zc(),Ks.exports=Pe;var L0=Ks.exports,As=L0;Da.createRoot=As.createRoot,Da.hydrateRoot=As.hydrateRoot;const qc="/assets/lgbt-f5acfebc.svg",j0=()=>m.jsxs("div",{className:"h-screen",children:[m.jsx("h1",{className:"mb-4 pt-[150px] text-4xl font-extrabold text-center tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ",children:"Rainbow API: Diverse LGBT Video Games"}),m.jsx("section",{className:"text-gray-600 body-font flex justify-center items-center",children:m.jsxs("div",{className:"container mx-auto flex px-5 py-24 md:flex-row flex-col items-center",children:[m.jsxs("div",{className:"lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center",children:[m.jsxs("h1",{className:"title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900",children:["LGBT community",m.jsx("br",{className:"hidden lg:inline-block"}),"in videogames"]}),m.jsx("p",{className:"mb-8 leading-relaxed",children:"Video games have the power to reach a wide audience, and by including LGBT characters and storylines, game developers can help break down stereotypes and promote understanding and acceptance."}),m.jsxs("div",{className:"flex justify-center",children:[m.jsx("button",{className:"inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",children:"Explore"}),m.jsx("button",{className:"ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg",children:"Our API"})]})]}),m.jsx("div",{className:"lg:max-w-lg lg:w-full md:w-1/2 w-",children:m.jsx("img",{className:"object-cover object-center rounded",alt:"hero",src:qc})})]})})]}),z0="/assets/lgbt_relation-d36478a6.webp",_0=()=>m.jsx("section",{className:"text-gray-600 body-font",children:m.jsxs("div",{className:"container px-5 py-24 mx-auto flex flex-wrap",children:[m.jsx("div",{className:"lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden",children:m.jsx("img",{alt:"feature",className:"object-cover object-center h-full w-full",src:z0})}),m.jsxs("div",{className:"flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center",children:[m.jsxs("div",{className:"flex flex-col mb-10 lg:items-start items-center",children:[m.jsx("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5",children:m.jsx("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-6 h-6",viewBox:"0 0 24 24",children:m.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})}),m.jsxs("div",{className:"flex-grow",children:[m.jsx("h2",{className:"text-gray-900 text-lg title-font font-medium mb-3",children:"Our API"}),m.jsx("p",{className:"leading-relaxed text-base",children:"Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."}),m.jsxs("a",{className:"mt-3 text-indigo-500 inline-flex items-center",children:["Learn More",m.jsx("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-4 h-4 ml-2",viewBox:"0 0 24 24",children:m.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]}),m.jsxs("div",{className:"flex flex-col mb-10 lg:items-start items-center",children:[m.jsx("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5",children:m.jsxs("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-6 h-6",viewBox:"0 0 24 24",children:[m.jsx("circle",{cx:"6",cy:"6",r:"3"}),m.jsx("circle",{cx:"6",cy:"18",r:"3"}),m.jsx("path",{d:"M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"})]})}),m.jsxs("div",{className:"flex-grow",children:[m.jsx("h2",{className:"text-gray-900 text-lg title-font font-medium mb-3",children:"Videogame Industry"}),m.jsx("p",{className:"leading-relaxed text-base",children:"Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."}),m.jsxs("a",{className:"mt-3 text-indigo-500 inline-flex items-center",children:["Learn More",m.jsx("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-4 h-4 ml-2",viewBox:"0 0 24 24",children:m.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]}),m.jsxs("div",{className:"flex flex-col mb-10 lg:items-start items-center",children:[m.jsx("div",{className:"w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5",children:m.jsxs("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-6 h-6",viewBox:"0 0 24 24",children:[m.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),m.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}),m.jsxs("div",{className:"flex-grow",children:[m.jsx("h2",{className:"text-gray-900 text-lg title-font font-medium mb-3",children:"Our goal"}),m.jsx("p",{className:"leading-relaxed text-base",children:"Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."}),m.jsxs("a",{className:"mt-3 text-indigo-500 inline-flex items-center",children:["Learn More",m.jsx("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-4 h-4 ml-2",viewBox:"0 0 24 24",children:m.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]})]})]})}),P0=()=>m.jsx("footer",{className:"text-gray-600 body-font",children:m.jsx("div",{className:"bg-gray-100",children:m.jsxs("div",{className:"container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col",children:[m.jsx("img",{src:qc,alt:"lgbt flag",className:"w-10 h-5"}),m.jsx("a",{className:"flex title-font font-medium items-center md:justify-start justify-center text-gray-900",children:m.jsx("span",{className:"ml-3 text-xl",children:"LGBT vg"})}),m.jsx("p",{className:"text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4",children:m.jsx("a",{href:"https://twitter.com/knyttneve",rel:"noopener noreferrer",className:"text-gray-600 ml-1",target:"_blank",children:"© 2023 Schianchi — Xia"})}),m.jsxs("span",{className:"inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start",children:[m.jsx("a",{className:"text-gray-500",children:m.jsx("svg",{fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:m.jsx("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})})}),m.jsx("a",{className:"ml-3 text-gray-500",children:m.jsx("svg",{fill:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:m.jsx("path",{d:"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"})})}),m.jsx("a",{className:"ml-3 text-gray-500",children:m.jsxs("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-5 h-5",viewBox:"0 0 24 24",children:[m.jsx("rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}),m.jsx("path",{d:"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"})]})}),m.jsx("a",{className:"ml-3 text-gray-500",children:m.jsxs("svg",{fill:"currentColor",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"0",className:"w-5 h-5",viewBox:"0 0 24 24",children:[m.jsx("path",{stroke:"none",d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"}),m.jsx("circle",{cx:"4",cy:"4",r:"2",stroke:"none"})]})})]})]})})});function xe(e,n){n===void 0&&(n={});var r=n.insertAt;if(e&&typeof document<"u"){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",r==="top"&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}xe(`.react-loading-indicator-normalize,
[class$=bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var U=function(){return U=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},U.apply(this,arguments)};function la(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]])}return r}xe(`.bubbledot-bounding-box {
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.bubbledot-bounding-box .bubbledot-loader {
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
  display: inline-block;
  color: rgb(50, 205, 50);
}
.bubbledot-bounding-box .bubbledot-loader .bubbledot-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.bubbledot-bounding-box .bubbledot-loader .dot-child {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.bubbledot-bounding-box .bubbledot-loader .dot-child::before {
  content: "";
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  -webkit-animation: bubble-dots 1.2s infinite ease-in-out both;
          animation: bubble-dots 1.2s infinite ease-in-out both;
}
.bubbledot-bounding-box .bubbledot-loader .bubbledot2 {
  transform: rotate(30deg);
}
.bubbledot-bounding-box .bubbledot-loader .bubbledot3 {
  transform: rotate(60deg);
}
.bubbledot-bounding-box .bubbledot-loader .bubbledot4 {
  transform: rotate(90deg);
}
.bubbledot-bounding-box .bubbledot-loader .bubbledot5 {
  transform: rotate(120deg);
}
.bubbledot-bounding-box .bubbledot-loader .bubbledot6 {
  transform: rotate(150deg);
}
.bubbledot-bounding-box .bubbledot-loader .bubbledot7 {
  transform: rotate(180deg);
}
.bubbledot-bounding-box .bubbledot-loader .bubbledot8 {
  transform: rotate(210deg);
}
.bubbledot-bounding-box .bubbledot-loader .bubbledot9 {
  transform: rotate(240deg);
}
.bubbledot-bounding-box .bubbledot-loader .bubbledot10 {
  transform: rotate(270deg);
}
.bubbledot-bounding-box .bubbledot-loader .bubbledot11 {
  transform: rotate(300deg);
}
.bubbledot-bounding-box .bubbledot-loader .bubbledot12 {
  transform: rotate(330deg);
}
.bubbledot-bounding-box .bubbledot-loader .bubbledot2:before {
  -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s;
}
.bubbledot-bounding-box .bubbledot-loader .bubbledot3:before {
  -webkit-animation-delay: -1s;
          animation-delay: -1s;
}
.bubbledot-bounding-box .bubbledot-loader .bubbledot4:before {
  -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s;
}
.bubbledot-bounding-box .bubbledot-loader .bubbledot5:before {
  -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s;
}
.bubbledot-bounding-box .bubbledot-loader .bubbledot6:before {
  -webkit-animation-delay: -0.7s;
          animation-delay: -0.7s;
}
.bubbledot-bounding-box .bubbledot-loader .bubbledot7:before {
  -webkit-animation-delay: -0.6s;
          animation-delay: -0.6s;
}
.bubbledot-bounding-box .bubbledot-loader .bubbledot8:before {
  -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s;
}
.bubbledot-bounding-box .bubbledot-loader .bubbledot9:before {
  -webkit-animation-delay: -0.4s;
          animation-delay: -0.4s;
}
.bubbledot-bounding-box .bubbledot-loader .bubbledot10:before {
  -webkit-animation-delay: -0.3s;
          animation-delay: -0.3s;
}
.bubbledot-bounding-box .bubbledot-loader .bubbledot11:before {
  -webkit-animation-delay: -0.2s;
          animation-delay: -0.2s;
}
.bubbledot-bounding-box .bubbledot-loader .bubbledot12:before {
  -webkit-animation-delay: -0.1s;
          animation-delay: -0.1s;
}

@-webkit-keyframes bubble-dots {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

@keyframes bubble-dots {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}`);var ia=function(e){var n="";switch(e){case"small":n="12px";break;case"medium":n="16px";break;case"large":n="20px"}return n},M0=function(e){var n,r,t=Object(e==null?void 0:e.style),o=ia(e==null?void 0:e.size);if(!((n=e==null?void 0:e.style)===null||n===void 0)&&n.fontSize){var a=e==null?void 0:e.style,l=a.fontSize;t=la(a,["fontSize"]),o=l}var i,s,u=(r=e==null?void 0:e.color)!==null&&r!==void 0?r:"",p=U({},u instanceof Array?(i={},s=u[0],i.color=s,i):function(v){v=v??"";var h={};return h.color=v,h}(u));return j.createElement("span",{className:"rli-d-i-b bubbledot-bounding-box",style:U({},o&&{fontSize:o})},j.createElement("span",{className:"rli-d-i-b bubbledot-loader",style:U(U({},p),t)},j.createElement("span",{className:"rli-d-i-b bubbledot1 dot-child"}),j.createElement("span",{className:"rli-d-i-b bubbledot2 dot-child"}),j.createElement("span",{className:"rli-d-i-b bubbledot3 dot-child"}),j.createElement("span",{className:"rli-d-i-b bubbledot4 dot-child"}),j.createElement("span",{className:"rli-d-i-b bubbledot5 dot-child"}),j.createElement("span",{className:"rli-d-i-b bubbledot6 dot-child"}),j.createElement("span",{className:"rli-d-i-b bubbledot7 dot-child"}),j.createElement("span",{className:"rli-d-i-b bubbledot8 dot-child"}),j.createElement("span",{className:"rli-d-i-b bubbledot9 dot-child"}),j.createElement("span",{className:"rli-d-i-b bubbledot10 dot-child"}),j.createElement("span",{className:"rli-d-i-b bubbledot11 dot-child"}),j.createElement("span",{className:"rli-d-i-b bubbledot12 dot-child"}),j.createElement("span",{className:"rli-d-i-b rli-text-format bubbledot-text",style:U({},(e==null?void 0:e.textColor)&&{color:e==null?void 0:e.textColor,mixBlendMode:"unset"})},e!=null&&e.text?typeof(e==null?void 0:e.text)=="string"&&(e!=null&&e.text.length)?e==null?void 0:e.text:"loading":null)))};xe(`.disc-bounding-box {
  font-size: 16px;
  display: inline-block;
}
.disc-bounding-box .disc-loader {
  width: 5em;
  height: 5em;
  color: rgb(50, 205, 50);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.disc-bounding-box .disc-loader .disc-ring {
  width: 100%;
  height: 100%;
  border-width: 0.38em;
  border-style: solid;
  border-color: currentColor;
  border-bottom-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  -webkit-animation: spin 1s linear infinite;
          animation: spin 1s linear infinite;
}
.disc-bounding-box .disc-loader .disc-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@-webkit-keyframes spin {
  to {
    transform: rotate(1turn);
  }
}

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}`);var A0=function(e){var n,r,t=Object(e==null?void 0:e.style),o=ia(e==null?void 0:e.size);if(!((n=e==null?void 0:e.style)===null||n===void 0)&&n.fontSize){var a=e==null?void 0:e.style,l=a.fontSize;t=la(a,["fontSize"]),o=l}var i,s,u=(r=e==null?void 0:e.color)!==null&&r!==void 0?r:"",p=U({},u instanceof Array?(i={},s=u[0],i.color=s,i):function(v){v=v??"";var h={};return h.color=v,h}(u));return j.createElement("span",{className:"rli-d-i-b disc-bounding-box",style:U({},o&&{fontSize:o})},j.createElement("span",{className:"rli-d-i-b disc-loader",style:U(U({},p),t)},j.createElement("span",{className:"rli-d-i-b disc-ring"}),j.createElement("span",{className:"rli-d-i-b rli-text-format disc-text",style:U({},(e==null?void 0:e.textColor)&&{color:e==null?void 0:e.textColor,mixBlendMode:"unset"})},e!=null&&e.text?typeof(e==null?void 0:e.text)=="string"&&(e!=null&&e.text.length)?e==null?void 0:e.text:"loading":null)))};xe(`.dot-bounding-box {
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.dot-bounding-box .fading-dot-loader {
  width: 5em;
  height: 5em;
  color: rgb(50, 205, 50);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.dot-bounding-box .fading-dot-loader .fading-dot-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.dot-bounding-box .fading-dot-loader .fading-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.dot-bounding-box .fading-dot-loader .fading-dot::before {
  content: "";
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  -webkit-animation: fade-dot 1.2s infinite ease-in-out both;
          animation: fade-dot 1.2s infinite ease-in-out both;
}
.dot-bounding-box .fading-dot-loader .fading-dot2 {
  transform: rotate(30deg);
}
.dot-bounding-box .fading-dot-loader .fading-dot3 {
  transform: rotate(60deg);
}
.dot-bounding-box .fading-dot-loader .fading-dot4 {
  transform: rotate(90deg);
}
.dot-bounding-box .fading-dot-loader .fading-dot5 {
  transform: rotate(120deg);
}
.dot-bounding-box .fading-dot-loader .fading-dot6 {
  transform: rotate(150deg);
}
.dot-bounding-box .fading-dot-loader .fading-dot7 {
  transform: rotate(180deg);
}
.dot-bounding-box .fading-dot-loader .fading-dot8 {
  transform: rotate(210deg);
}
.dot-bounding-box .fading-dot-loader .fading-dot9 {
  transform: rotate(240deg);
}
.dot-bounding-box .fading-dot-loader .fading-dot10 {
  transform: rotate(270deg);
}
.dot-bounding-box .fading-dot-loader .fading-dot11 {
  transform: rotate(300deg);
}
.dot-bounding-box .fading-dot-loader .fading-dot12 {
  transform: rotate(330deg);
}
.dot-bounding-box .fading-dot-loader .fading-dot2:before {
  -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s;
}
.dot-bounding-box .fading-dot-loader .fading-dot3:before {
  -webkit-animation-delay: -1s;
          animation-delay: -1s;
}
.dot-bounding-box .fading-dot-loader .fading-dot4:before {
  -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s;
}
.dot-bounding-box .fading-dot-loader .fading-dot5:before {
  -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s;
}
.dot-bounding-box .fading-dot-loader .fading-dot6:before {
  -webkit-animation-delay: -0.7s;
          animation-delay: -0.7s;
}
.dot-bounding-box .fading-dot-loader .fading-dot7:before {
  -webkit-animation-delay: -0.6s;
          animation-delay: -0.6s;
}
.dot-bounding-box .fading-dot-loader .fading-dot8:before {
  -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s;
}
.dot-bounding-box .fading-dot-loader .fading-dot9:before {
  -webkit-animation-delay: -0.4s;
          animation-delay: -0.4s;
}
.dot-bounding-box .fading-dot-loader .fading-dot10:before {
  -webkit-animation-delay: -0.3s;
          animation-delay: -0.3s;
}
.dot-bounding-box .fading-dot-loader .fading-dot11:before {
  -webkit-animation-delay: -0.2s;
          animation-delay: -0.2s;
}
.dot-bounding-box .fading-dot-loader .fading-dot12:before {
  -webkit-animation-delay: -0.1s;
          animation-delay: -0.1s;
}

@-webkit-keyframes fade-dot {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}

@keyframes fade-dot {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}`);var R0=function(e){var n,r,t=Object(e==null?void 0:e.style),o=ia(e==null?void 0:e.size);if(!((n=e==null?void 0:e.style)===null||n===void 0)&&n.fontSize){var a=e==null?void 0:e.style,l=a.fontSize;t=la(a,["fontSize"]),o=l}var i,s,u=(r=e==null?void 0:e.color)!==null&&r!==void 0?r:"",p=U({},u instanceof Array?(i={},s=u[0],i.color=s,i):function(v){v=v??"";var h={};return h.color=v,h}(u));return j.createElement("span",{className:"rli-d-i-b react-loading-indicator-normalize dot-bounding-box",style:U({},o&&{fontSize:o})},j.createElement("span",{className:"rli-d-i-b fading-dot-loader",style:U(U({},p),t)},j.createElement("span",{className:"rli-d-i-b fading-dot1 fading-dot"}),j.createElement("span",{className:"rli-d-i-b fading-dot2 fading-dot"}),j.createElement("span",{className:"rli-d-i-b fading-dot3 fading-dot"}),j.createElement("span",{className:"rli-d-i-b fading-dot4 fading-dot"}),j.createElement("span",{className:"rli-d-i-b fading-dot5 fading-dot"}),j.createElement("span",{className:"rli-d-i-b fading-dot6 fading-dot"}),j.createElement("span",{className:"rli-d-i-b fading-dot7 fading-dot"}),j.createElement("span",{className:"rli-d-i-b fading-dot8 fading-dot"}),j.createElement("span",{className:"rli-d-i-b fading-dot9 fading-dot"}),j.createElement("span",{className:"rli-d-i-b fading-dot10 fading-dot"}),j.createElement("span",{className:"rli-d-i-b fading-dot11 fading-dot"}),j.createElement("span",{className:"rli-d-i-b fading-dot12 fading-dot"}),j.createElement("span",{className:"rli-d-i-b rli-text-format fading-dot-text",style:U({},(e==null?void 0:e.textColor)&&{color:e==null?void 0:e.textColor,mixBlendMode:"unset"})},e!=null&&e.text?typeof(e==null?void 0:e.text)=="string"&&(e!=null&&e.text.length)?e==null?void 0:e.text:"loading":null)))};xe(`.split-disc-bounding-box {
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.split-disc-bounding-box .split-disc-loader {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: rgb(50, 205, 50);
}
.split-disc-bounding-box .split-disc-loader .split-disc-ring {
  margin: auto;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.6em;
  border-style: solid;
  border-color: var(--split1-color, var(--splits-color, currentColor)) transparent var(--split2-color, var(--splits-color, currentColor)) transparent;
  -webkit-animation: split-disc-spin 1.2s linear infinite;
          animation: split-disc-spin 1.2s linear infinite;
  background-color: transparent;
}
.split-disc-bounding-box .split-disc-loader .split-disc-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@-webkit-keyframes split-disc-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes split-disc-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`);var D0=function(e){var n,r,t=(e==null?void 0:e.style)||{},o=ia(e==null?void 0:e.size);if(!((n=e==null?void 0:e.style)===null||n===void 0)&&n.fontSize){var a=e==null?void 0:e.style,l=a.fontSize;t=la(a,["fontSize"]),o=l}var i=(r=e==null?void 0:e.color)!==null&&r!==void 0?r:"",s=U({},i instanceof Array?function(u){var p={},v=u.length;p["--splits-color"]=u[0],p.color=u[0];for(var h=0;h<v&&!(h>=2);h++){var y="split".concat(h+1);p["--".concat(y,"-color")]=u[h]}return p}(i):function(u){u=u??"";var p={};return p.color=u,p}(i));return j.createElement("span",{className:"rli-d-i-b split-disc-bounding-box",style:U({},o&&{fontSize:o})},j.createElement("span",{className:"rli-d-i-b split-disc-loader",style:U(U({},s),t)},j.createElement("span",{className:"rli-d-i-b split-disc-ring"}),j.createElement("span",{className:"rli-d-i-b rli-text-format split-disc-text",style:U({},(e==null?void 0:e.textColor)&&{color:e==null?void 0:e.textColor,mixBlendMode:"unset"})},e!=null&&e.text?typeof(e==null?void 0:e.text)=="string"&&(e!=null&&e.text.length)?e==null?void 0:e.text:"loading":null)))},M,gn,ke,$o,T0=function(e){var n=(e==null?void 0:e.variant)||"disc";return n==="dotted"?j.createElement(R0,U({},e)):n==="bubble-dotted"?j.createElement(M0,U({},e)):n==="disc"?j.createElement(A0,U({},e)):n==="split-disc"?j.createElement(D0,U({},e)):null},T=function(){return T=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},T.apply(this,arguments)};function Rs(e,n,r){if(r||arguments.length===2)for(var t,o=0,a=n.length;o<a;o++)!t&&o in n||(t||(t=Array.prototype.slice.call(n,0,o)),t[o]=n[o]);return e.concat(t||Array.prototype.slice.call(n))}(function(e){e.HEX="HEX",e.RGB="RGB",e.HSL="HSL",e.CMYK="CMYK"})(M||(M={})),function(e){e.ANALOGOUS="ANALOGOUS",e.COMPLEMENTARY="COMPLEMENTARY",e.SPLIT_COMPLEMENTARY="SPLIT_COMPLEMENTARY",e.TRIADIC="TRIADIC",e.TETRADIC="TETRADIC",e.SQUARE="SQUARE"}(gn||(gn={})),function(e){e.ADDITIVE="ADDITIVE",e.SUBTRACTIVE="SUBTRACTIVE"}(ke||(ke={})),function(e){e.black="#000000",e.silver="#C0C0C0",e.gray="#808080",e.white="#FFFFFF",e.maroon="#800000",e.red="#FF0000",e.purple="#800080",e.fuchsia="#FF00FF",e.green="#008000",e.lime="#00FF00",e.olive="#808000",e.yellow="#FFFF00",e.navy="#000080",e.blue="#0000FF",e.teal="#008080",e.aqua="#00FFFF",e.orange="#FFA500",e.aliceblue="#F0F8FF",e.antiquewhite="#FAEBD7",e.aquamarine="#7FFFD4",e.azure="#F0FFFF",e.beige="#F5F5DC",e.bisque="#FFE4C4",e.blanchedalmond="#FFEBCD",e.blueviolet="#8A2BE2",e.brown="#A52A2A",e.burlywood="#DEB887",e.cadetblue="#5F9EA0",e.chartreuse="#7FFF00",e.chocolate="#D2691E",e.coral="#FF7F50",e.cornflowerblue="#6495ED",e.cornsilk="#FFF8DC",e.crimson="#DC143C",e.cyan="#00FFFF",e.darkblue="#00008B",e.darkcyan="#008B8B",e.darkgoldenrod="#B8860B",e.darkgray="#A9A9A9",e.darkgreen="#006400",e.darkgrey="#A9A9A9",e.darkkhaki="#BDB76B",e.darkmagenta="#8B008B",e.darkolivegreen="#556B2F",e.darkorange="#FF8C00",e.darkorchid="#9932CC",e.darkred="#8B0000",e.darksalmon="#E9967A",e.darkseagreen="#8FBC8F",e.darkslateblue="#483D8B",e.darkslategray="#2F4F4F",e.darkslategrey="#2F4F4F",e.darkturquoise="#00CED1",e.darkviolet="#9400D3",e.deeppink="#FF1493",e.deepskyblue="#00BFFF",e.dimgray="#696969",e.dimgrey="#696969",e.dodgerblue="#1E90FF",e.firebrick="#B22222",e.floralwhite="#FFFAF0",e.forestgreen="#228B22",e.gainsboro="#DCDCDC",e.ghostwhite="#F8F8FF",e.gold="#FFD700",e.goldenrod="#DAA520",e.greenyellow="#ADFF2F",e.grey="#808080",e.honeydew="#F0FFF0",e.hotpink="#FF69B4",e.indianred="#CD5C5C",e.indigo="#4B0082",e.ivory="#FFFFF0",e.khaki="#F0E68C",e.lavender="#E6E6FA",e.lavenderblush="#FFF0F5",e.lawngreen="#7CFC00",e.lemonchiffon="#FFFACD",e.lightblue="#ADD8E6",e.lightcoral="#F08080",e.lightcyan="#E0FFFF",e.lightgoldenrodyellow="#FAFAD2",e.lightgray="#D3D3D3",e.lightgreen="#90EE90",e.lightgrey="#D3D3D3",e.lightpink="#FFB6C1",e.lightsalmon="#FFA07A",e.lightseagreen="#20B2AA",e.lightskyblue="#87CEFA",e.lightslategray="#778899",e.lightslategrey="#778899",e.lightsteelblue="#B0C4DE",e.lightyellow="#FFFFE0",e.limegreen="#32CD32",e.linen="#FAF0E6",e.magenta="#FF00FF",e.mediumaquamarine="#66CDAA",e.mediumblue="#0000CD",e.mediumorchid="#BA55D3",e.mediumpurple="#9370DB",e.mediumseagreen="#3CB371",e.mediumslateblue="#7B68EE",e.mediumspringgreen="#00FA9A",e.mediumturquoise="#48D1CC",e.mediumvioletred="#C71585",e.midnightblue="#191970",e.mintcream="#F5FFFA",e.mistyrose="#FFE4E1",e.moccasin="#FFE4B5",e.navajowhite="#FFDEAD",e.oldlace="#FDF5E6",e.olivedrab="#6B8E23",e.orangered="#FF4500",e.orchid="#DA70D6",e.palegoldenrod="#EEE8AA",e.palegreen="#98FB98",e.paleturquoise="#AFEEEE",e.palevioletred="#DB7093",e.papayawhip="#FFEFD5",e.peachpuff="#FFDAB9",e.peru="#CD853F",e.pink="#FFC0CB",e.plum="#DDA0DD",e.powderblue="#B0E0E6",e.rosybrown="#BC8F8F",e.royalblue="#4169E1",e.saddlebrown="#8B4513",e.salmon="#FA8072",e.sandybrown="#F4A460",e.seagreen="#2E8B57",e.seashell="#FFF5EE",e.sienna="#A0522D",e.skyblue="#87CEEB",e.slateblue="#6A5ACD",e.slategray="#708090",e.slategrey="#708090",e.snow="#FFFAFA",e.springgreen="#00FF7F",e.steelblue="#4682B4",e.tan="#D2B48C",e.thistle="#D8BFD8",e.tomato="#FF6347",e.turquoise="#40E0D0",e.violet="#EE82EE",e.wheat="#F5DEB3",e.whitesmoke="#F5F5F5",e.yellowgreen="#9ACD32",e.rebeccapurple="#663399"}($o||($o={}));var Qr,Zr,qr,Jr,nn,In,$n,Jc=Object.keys($o),ot=((Qr={})[M.HEX]=/^#(?:([a-f\d])([a-f\d])([a-f\d])([a-f\d])?|([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?)$/i,Qr[M.RGB]=/^rgba?\s*\(\s*(?:((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)(?:\s*,\s*((?:\d*\.)?\d+))?|((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)(?:\s*\/\s*((?:\d*\.)?\d+%?))?)\s*\)$/,Qr[M.HSL]=/^hsla?\s*\(\s*(?:(-?(?:\d*\.)?\d+(?:deg|grad|rad|turn)?)\s*,\s*((?:\d*\.)?\d+)%\s*,\s*((?:\d*\.)?\d+)%(?:\s*,\s*((?:\d*\.)?\d+))?|(-?(?:\d*\.)?\d+(?:deg|grad|rad|turn)?)\s*((?:\d*\.)?\d+)%\s*((?:\d*\.)?\d+)%(?:\s*\/\s*((?:\d*\.)?\d+%?))?)\s*\)$/,Qr[M.CMYK]=/^(?:device-cmyk|cmyk)\s*\(\s*(?:((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)(?:\s*,\s*((?:\d*\.)?\d+))?|((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)(?:\s*\/\s*((?:\d*\.)?\d+%?))?)\s*\)$/,Qr),O0=/^(-?(?:\d*\.)?\d+)((?:deg|grad|rad|turn)?)$/,fn=/^(\d+(?:\.\d+)?|\.\d+)%$/,jl=/^0x([a-f\d]{1,2})$/i,Ra=function(e,n,r){return r<0&&(r+=6),r>=6&&(r-=6),r<1?Math.round(255*((n-e)*r+e)):r<3?Math.round(255*n):r<4?Math.round(255*((n-e)*(4-r)+e)):Math.round(255*e)},se=function(e,n,r){n/=100;var t=(r/=100)<=.5?r*(n+1):r+n-r*n,o=2*r-t;return{r:Ra(o,t,2+(e/=60)),g:Ra(o,t,e),b:Ra(o,t,e-2)}},Ci=function(e,n,r,t){return t=1-t,{r:Math.round(255*(1-e)*t),g:Math.round(255*(1-n)*t),b:Math.round(255*(1-r)*t)}},zl=function(e,n,r){e/=255,n/=255,r/=255;var t=1-Math.max(e,n,r),o=1-t,a=(o-e)/o,l=(o-n)/o,i=(o-r)/o;return{c:Math.round(100*a),m:Math.round(100*l),y:Math.round(100*i),k:Math.round(100*t)}},Dr=function(e,n,r,t){t===void 0&&(t=1),e/=255,n/=255,r/=255,t=Math.min(t,1);var o=Math.max(e,n,r),a=Math.min(e,n,r),l=o-a,i=0,s=0,u=(o+a)/2;if(l===0)i=0,s=0;else{switch(o){case e:i=(n-r)/l%6;break;case n:i=(r-e)/l+2;break;case r:i=(e-n)/l+4}(i=Math.round(60*i))<0&&(i+=360),s=l/(1-Math.abs(2*u-1))}return{h:i,s:Math.round(100*s),l:Math.round(100*u),a:t}},Ds=function(e,n){if(e<0&&(e+=360),e>360&&(e-=360),e===360||e===0)return e;var r=[[0,120],[120,180],[180,240],[240,360]],t=[[0,60],[60,120],[120,240],[240,360]],o=n?t:r,a=0,l=0,i=0,s=0;return(n?r:t).find(function(u,p){return e>=u[0]&&e<u[1]&&(a=u[0],l=u[1],i=o[p][0],s=o[p][1],!0)}),i+(s-i)/(l-a)*(e-a)},J=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},Uo=function(e){return fn.test("".concat(e))?+"".concat(e).replace(fn,"$1"):Math.min(+e,100)},ro=function(e){return e.length===1&&(e+=e),parseInt(e,16)},to=function(e){var n=P(e).toString(16).toUpperCase();return n.length===1?"0x0".concat(n):"0x".concat(n)},oo=function(e){var n=P(e).toString(16).toUpperCase();return n.length===1&&(n="0".concat(n)),n},Kn=function(e,n){return n===void 0&&(n=!1),!n&&fn.test(e)?Math.min(255*+e.replace(fn,"$1")/100,255):jl.test(e)?e.length===3?n?parseInt(e+e.slice(-1))/255:parseInt(e+e.slice(-1)):n?P(e,6)/255:P(e,6):Math.min(+e,n?1:255)},Sn=function(e){return Math.min(fn.test(e)?+e.replace(fn,"$1")/100:+e,1)},ed=function(e){return e.sort().join("").toUpperCase()},P=function(e,n){n===void 0&&(n=0);var r=Math.pow(10,n);return Math.round(+e*r)/r},$e=function(e,n,r){return Math.max(n,Math.min(e,r))},A=((Zr={})[M.HEX]=function(e){return"#".concat(oo(e.r)).concat(oo(e.g)).concat(oo(e.b)).concat(J(e,"a")&&oo(e.a)||"")},Zr[M.RGB]=function(e){return"rgb".concat(J(e,"a")?"a":"","(").concat(P(e.r),",").concat(P(e.g),",").concat(P(e.b)).concat(J(e,"a")&&",".concat(P(e.a,2))||"",")")},Zr[M.HSL]=function(e){return"hsl".concat(J(e,"a")?"a":"","(").concat(P(e.h),",").concat(P(e.s),"%,").concat(P(e.l),"%").concat(J(e,"a")&&",".concat(P(e.a,2))||"",")")},Zr[M.CMYK]=function(e){return"cmyk(".concat(P(e.c),"%,").concat(P(e.m),"%,").concat(P(e.y),"%,").concat(P(e.k),"%").concat(J(e,"a")&&",".concat(P(e.a,2))||"",")")},Zr),_t=function(e){if(typeof e=="string"){var n=e.match(O0),r=+n[1];switch(n[2]){case"rad":e=Math.round(180*r/Math.PI);break;case"turn":e=Math.round(360*r);break;default:e=r}}return(e>360||e<0)&&(e-=360*Math.floor(e/360)),e},me=function(e){return typeof e=="string"&&(e=fn.test(e)?+e.replace(fn,"$1")/100:+e),isNaN(+e)||e>1?1:P(e,6)},Hr=function(e,n,r){return n.reduce(function(t,o){return Rs(Rs([],t,!0),[T(T({},e),{h:r===ke.ADDITIVE?_t(e.h+o):_t(Ds(Ds(e.h,!1)+o,!0))})],!1)},[T({},e)])},B0=function(e,n){return Hr(e,[30,-30],n)},H0=function(e,n){return Hr(e,[180],n)},I0=function(e,n){return Hr(e,[150,-150],n)},$0=function(e,n){return Hr(e,[120,-120],n)},U0=function(e,n){return Hr(e,[60,-120,180],n)},V0=function(e,n){return Hr(e,[90,-90,180],n)},Ts=Object.entries(M).reduce(function(e,n){var r=n[0],t=n[1];if(r!==M.HEX){var o=ed(r.split(""));e[o]=t,e["A"+o]=t}return e},{}),Ae=function(e){return typeof e=="string"?function(n){var r;if(Object.keys(M).some(function(t){if(ot[t].test(n))return r=t,!0}),!r&&~Jc.indexOf(n)&&(r=M.HEX),!r)throw new Error("The provided string color doesn't have a correct format");return r}(e):function(n){var r,t=!1,o=ed(Object.keys(n));if(Ts[o]&&(r=Ts[o]),r&&r===M.RGB){var a=Object.entries(n).some(function(i){return!jl.test("".concat(i[1]))}),l=Object.entries(n).some(function(i){return!(fn.test("".concat(i[1]))||!jl.test("".concat(i[1]))&&!isNaN(+i[1])&&+i[1]<=255)});a&&l&&(t=!0),a||(r=M.HEX)}if(!r||t)throw new Error("The provided color object doesn't have the proper keys or format");return r}(e)},X0=((qr={})[M.HEX]=function(e){var n=(~Jc.indexOf(e)?$o[e]:e).match(ot.HEX),r={r:ro(n[1]||n[5]),g:ro(n[2]||n[6]),b:ro(n[3]||n[7])},t=n[4]||n[8];return t!==void 0&&(r.a=ro(t)/255),r},qr[M.RGB]=function(e){var n=e.match(ot.RGB),r=Kn(n[1]||n[5]),t=Kn(n[2]||n[6]),o=Kn(n[3]||n[7]),a=n[4]||n[8],l={r:Math.min(r,255),g:Math.min(t,255),b:Math.min(o,255)};return a!==void 0&&(l.a=me(a)),l},qr[M.HSL]=function(e){var n=e.match(ot.HSL),r=_t(n[1]||n[5]),t=Uo(n[2]||n[6]),o=Uo(n[3]||n[7]),a=n[4]||n[8],l=se(r,t,o);return a!==void 0&&(l.a=me(a)),l},qr[M.CMYK]=function(e){var n=e.match(ot.CMYK),r=Sn(n[1]||n[6]),t=Sn(n[2]||n[7]),o=Sn(n[3]||n[8]),a=Sn(n[4]||n[9]),l=n[5]||n[10],i=Ci(r,t,o,a);return l!==void 0&&(i.a=me(l)),i},qr),G0=((Jr={})[M.HEX]=function(e){var n={r:Kn("".concat(e.r)),g:Kn("".concat(e.g)),b:Kn("".concat(e.b))};return J(e,"a")&&(n.a=Math.min(Kn("".concat(e.a),!0),1)),n},Jr[M.RGB]=function(e){return this.HEX(e)},Jr[M.HSL]=function(e){var n=Uo("".concat(e.s)),r=Uo("".concat(e.l)),t=se(_t(e.h),n,r);return J(e,"a")&&(t.a=me(e.a)),t},Jr[M.CMYK]=function(e){var n=Sn("".concat(e.c)),r=Sn("".concat(e.m)),t=Sn("".concat(e.y)),o=Sn("".concat(e.k)),a=Ci(n,r,t,o);return J(e,"a")&&(a.a=me(e.a)),a},Jr),tr=function(e,n){return n===void 0&&(n=Ae(e)),typeof e=="string"?X0[n](e):G0[n](e)},R=((nn={})[M.HEX]=function(e){return{r:to(e.r),g:to(e.g),b:to(e.b)}},nn.HEXA=function(e){var n=R.HEX(e);return n.a=J(e,"a")?to(255*e.a):"0xFF",n},nn[M.RGB]=function(e){return J(e,"a")&&delete e.a,e},nn.RGBA=function(e){return e.a=J(e,"a")?P(e.a,2):1,e},nn[M.HSL]=function(e){var n=Dr(e.r,e.g,e.b);return delete n.a,n},nn.HSLA=function(e){var n=R.HSL(e);return n.a=J(e,"a")?P(e.a,2):1,n},nn[M.CMYK]=function(e){return zl(e.r,e.g,e.b)},nn.CMYKA=function(e){var n=zl(e.r,e.g,e.b);return n.a=J(e,"a")?P(e.a,2):1,n},nn),Os=function(e,n,r){var t=Ae(e),o=typeof e=="string",a=tr(e,t),l=typeof e=="string"&&J(a,"a")||typeof e!="string"&&J(e,"a"),i=Dr(a.r,a.g,a.b,a.a);l||delete i.a;var s=r?i.l/(n+1):(100-i.l)/(n+1),u=Array(n).fill(null).map(function(p,v){return T(T({},i),{l:i.l+s*(v+1)*(1-2*+r)})});switch(t){case M.HEX:default:return u.map(function(p){var v=se(p.h,p.s,p.l);return l&&(v.a=p.a),o?l?A.HEX(T(T({},v),{a:P(255*v.a,6)})):A.HEX(v):l?R.HEXA(v):R.HEX(v)});case M.RGB:return u.map(function(p){var v=se(p.h,p.s,p.l);return l&&(v.a=p.a),o?A.RGB(v):l?R.RGBA(v):R.RGB(v)});case M.HSL:return u.map(function(p){return o?A.HSL(p):l?R.HSLA(T(T({},se(p.h,p.s,p.l)),{a:p.a})):R.HSL(se(p.h,p.s,p.l))})}},sr=((In={buildHarmony:function(e,n,r){var t=Ae(e),o=tr(e,t),a=Dr(o.r,o.g,o.b,o.a),l=typeof e=="string"&&J(o,"a")||typeof e!="string"&&J(e,"a"),i=typeof e=="string";switch(t){case M.HEX:default:return l?this.HEXA(a,n,r,i):this.HEX(a,n,r,i);case M.HSL:return l?this.HSLA(a,n,r,i):this.HSL(a,n,r,i);case M.RGB:return l?this.RGBA(a,n,r,i):this.RGB(a,n,r,i)}}})[M.HEX]=function(e,n,r,t){return n(e,r).map(function(o){return t?A.HEX(se(o.h,o.s,o.l)):R.HEX(se(o.h,o.s,o.l))})},In.HEXA=function(e,n,r,t){return n(e,r).map(function(o){return t?A.HEX(T(T({},se(o.h,o.s,o.l)),{a:255*me(o.a)})):R.HEXA(T(T({},se(o.h,o.s,o.l)),{a:me(o.a)}))})},In[M.RGB]=function(e,n,r,t){return n(e,r).map(function(o){return t?A.RGB(se(o.h,o.s,o.l)):R.RGB(se(o.h,o.s,o.l))})},In.RGBA=function(e,n,r,t){return n(e,r).map(function(o){return t?A.RGB(T(T({},se(o.h,o.s,o.l)),{a:me(o.a)})):R.RGBA(T(T({},se(o.h,o.s,o.l)),{a:me(o.a)}))})},In[M.HSL]=function(e,n,r,t){return n(e,r).map(function(o){return t?A.HSL({h:o.h,s:o.s,l:o.l}):R.HSL(se(o.h,o.s,o.l))})},In.HSLA=function(e,n,r,t){return n(e,r).map(function(o){return t?A.HSL(T(T({},o),{a:me(o.a)})):R.HSLA(T(T({},se(o.h,o.s,o.l)),{a:me(o.a)}))})},In),ur=(($n={mix:function(e,n){var r,t,o,a,l,i,s,u,p,v,h,y,x,w,H,d=e.map(function(k){var C=Ae(k);return tr(k,C)}),c=n===ke.SUBTRACTIVE?d.map(function(k){var C,E,N,B,z,te,we,en,lr,Ir,Tn,On,S,L,_=(C=k.r,E=k.g,N=k.b,B=Math.min(C,E,N),z=Math.min(255-C,255-E,255-N),we=E-B,en=N-B,Ir=(te=C-B)-(lr=Math.min(te,we)),Tn=(we+lr)/2,On=(en+we-lr)/2,S=Math.max(Ir,Tn,On)/Math.max(te,we,en),{r:Ir/(L=isNaN(S)||S===1/0||S<=0?1:S)+z,y:Tn/L+z,b:On/L+z});return J(k,"a")&&(_.a=k.a),_}):null;function f(k){var C=n===ke.ADDITIVE?{r:0,g:0,b:0,a:0}:{r:0,y:0,b:0,a:0};return k.reduce(function(E,N){var B=J(N,"a")?N.a:1,z={r:Math.min(E.r+N.r*B,255),b:Math.min(E.b+N.b*B,255),a:1-(1-B)*(1-E.a)},te="g"in E?E.g:E.y,we="g"in N?N.g:N.y;return T(T({},z),n===ke.ADDITIVE?{g:Math.min(te+we*B,255)}:{y:Math.min(te+we*B,255)})},C)}if(n===ke.ADDITIVE)r=f(d);else{var b=f(c);t=b.r,o=b.y,a=b.b,l=Math.min(t,o,a),i=Math.min(255-t,255-o,255-a),p=a-l,h=(s=t-l)+(u=o-l)-(v=Math.min(u,p)),y=u+v,x=2*(p-v),w=Math.max(h,y,x)/Math.max(s,u,p),(r={r:h/(H=isNaN(w)||w===1/0||w<=0?1:w)+i,g:y/H+i,b:x/H+i}).a=b.a}return{r:P(r.r,2),g:P(r.g,2),b:P(r.b,2),a:$e(r.a,0,1)}}})[M.HEX]=function(e,n,r){var t=this.mix(e,n);return delete t.a,r?A.HEX(t):R.HEX(t)},$n.HEXA=function(e,n,r){var t=this.mix(e,n);return t.a=r?255*me(t.a):me(t.a),r?A.HEX(t):R.HEXA(t)},$n[M.RGB]=function(e,n,r){var t=this.mix(e,n);return delete t.a,r?A.RGB(t):R.RGB(t)},$n.RGBA=function(e,n,r){var t=this.mix(e,n);return r?A.RGB(t):R.RGBA(t)},$n[M.HSL]=function(e,n,r){var t=this.mix(e,n),o=Dr(t.r,t.g,t.b);return delete t.a,delete o.a,r?A.HSL(o):R.HSL(t)},$n.HSLA=function(e,n,r){var t=this.mix(e,n),o=Dr(t.r,t.g,t.b,t.a);return r?A.HSL(o):R.HSLA(t)},$n),hn=function(e,n,r,t,o){var a=t(tr(e,n));return r?o(a):a},cr=function(e,n,r,t,o,a){r<1&&(r=5);var l=function(i,s,u){var p=u-1,v=(s.r-i.r)/p,h=(s.g-i.g)/p,y=(s.b-i.b)/p,x=me(i.a),w=(me(s.a)-x)/p;return Array(u).fill(null).map(function(H,d){return d===0?i:d===p?s:{r:P(i.r+v*d),g:P(i.g+h*d),b:P(i.b+y*d),a:P(x+w*d,2)}})}(tr(e),tr(n),r);return l.map(function(i){var s=o(i);return t?a(s):s})},nd=function(){function e(n){this.rgb=tr(n),this.updateHSL(),this.updateCMYK()}return e.prototype.updateRGB=function(){this.rgb=T(T({},se(this.hsl.h,this.hsl.s,this.hsl.l)),{a:this.hsl.a})},e.prototype.updateRGBFromCMYK=function(){this.rgb=T(T({},Ci(this.cmyk.c,this.cmyk.m,this.cmyk.y,this.cmyk.k)),{a:this.rgb.a})},e.prototype.updateHSL=function(){this.hsl=Dr(this.rgb.r,this.rgb.g,this.rgb.b,this.rgb.a)},e.prototype.updateCMYK=function(){this.cmyk=zl(this.rgb.r,this.rgb.g,this.rgb.b)},e.prototype.updateRGBAndCMYK=function(){return this.updateRGB(),this.updateCMYK(),this},e.prototype.updateHSLAndCMYK=function(){return this.updateHSL(),this.updateCMYK(),this},e.prototype.updateRGBAndHSL=function(){return this.updateRGBFromCMYK(),this.updateHSL(),this},e.prototype.setH=function(n){return this.hsl.h=_t(n),this.updateRGBAndCMYK()},e.prototype.setS=function(n){return this.hsl.s=$e(n,0,100),this.updateRGBAndCMYK()},e.prototype.setL=function(n){return this.hsl.l=$e(n,0,100),this.updateRGBAndCMYK()},e.prototype.setR=function(n){return this.rgb.r=$e(n,0,255),this.updateHSLAndCMYK()},e.prototype.setG=function(n){return this.rgb.g=$e(n,0,255),this.updateHSLAndCMYK()},e.prototype.setB=function(n){return this.rgb.b=$e(n,0,255),this.updateHSLAndCMYK()},e.prototype.setA=function(n){return this.hsl.a=this.rgb.a=$e(n,0,1),this},e.prototype.setC=function(n){return this.cmyk.c=$e(n,0,100),this.updateRGBAndHSL()},e.prototype.setM=function(n){return this.cmyk.m=$e(n,0,100),this.updateRGBAndHSL()},e.prototype.setY=function(n){return this.cmyk.y=$e(n,0,100),this.updateRGBAndHSL()},e.prototype.setK=function(n){return this.cmyk.k=$e(n,0,100),this.updateRGBAndHSL()},Object.defineProperty(e.prototype,"H",{get:function(){return P(this.hsl.h)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"S",{get:function(){return P(this.hsl.s)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"L",{get:function(){return P(this.hsl.l)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"R",{get:function(){return P(this.rgb.r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"G",{get:function(){return P(this.rgb.g)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"B",{get:function(){return P(this.rgb.b)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"A",{get:function(){return P(this.hsl.a,2)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"C",{get:function(){return P(this.cmyk.c)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"M",{get:function(){return P(this.cmyk.m)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"Y",{get:function(){return P(this.cmyk.y)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"K",{get:function(){return P(this.cmyk.k)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HEXObject",{get:function(){return R.HEX(this.rgb)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HEXAObject",{get:function(){return R.HEXA(this.rgb)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"RGBObject",{get:function(){return{r:this.R,g:this.G,b:this.B}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"RGBAObject",{get:function(){return T(T({},this.RGBObject),{a:this.hsl.a})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HSLObject",{get:function(){return{h:this.H,s:this.S,l:this.L}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HSLAObject",{get:function(){return T(T({},this.HSLObject),{a:this.hsl.a})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"CMYKObject",{get:function(){return{c:this.C,m:this.M,y:this.Y,k:this.K}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"CMYKAObject",{get:function(){return{c:this.C,m:this.M,y:this.Y,k:this.K,a:this.hsl.a}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HEX",{get:function(){var n=this.rgb,r={r:n.r,g:n.g,b:n.b};return A.HEX(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HEXA",{get:function(){var n=this.rgb,r={r:n.r,g:n.g,b:n.b,a:255*this.hsl.a};return A.HEX(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"RGB",{get:function(){var n=this.rgb,r={r:n.r,g:n.g,b:n.b};return A.RGB(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"RGBA",{get:function(){var n=this.rgb,r={r:n.r,g:n.g,b:n.b,a:this.hsl.a};return A.RGB(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HSL",{get:function(){var n=this.hsl,r={h:n.h,s:n.s,l:n.l};return A.HSL(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HSLA",{get:function(){return A.HSL(this.hsl)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"CMYK",{get:function(){return A.CMYK(this.cmyk)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"CMYKA",{get:function(){return A.CMYK(T(T({},this.cmyk),{a:this.hsl.a}))},enumerable:!1,configurable:!0}),e.toHEX=function(n,r){r===void 0&&(r=!0);var t=Ae(n);return hn(n,t,r,R.HEX,A.HEX)},e.toHEXA=function(n,r){r===void 0&&(r=!0);var t=Ae(n);return hn(n,t,r,R.HEXA,A.HEX)},e.toRGB=function(n,r){r===void 0&&(r=!0);var t=Ae(n);return hn(n,t,r,R.RGB,A.RGB)},e.toRGBA=function(n,r){r===void 0&&(r=!0);var t=Ae(n);return hn(n,t,r,R.RGBA,A.RGB)},e.toHSL=function(n,r){r===void 0&&(r=!0);var t=Ae(n);return hn(n,t,r,R.HSL,A.HSL)},e.toHSLA=function(n,r){r===void 0&&(r=!0);var t=Ae(n);return hn(n,t,r,R.HSLA,A.HSL)},e.toCMYK=function(n,r){r===void 0&&(r=!0);var t=Ae(n);return hn(n,t,r,R.CMYK,A.CMYK)},e.toCMYKA=function(n,r){r===void 0&&(r=!0);var t=Ae(n);return hn(n,t,r,R.CMYKA,A.CMYK)},e.getBlendHEX=function(n,r,t,o){return t===void 0&&(t=5),o===void 0&&(o=!0),cr(n,r,t,o,R.HEX,A.HEX)},e.getBlendHEXA=function(n,r,t,o){return t===void 0&&(t=5),o===void 0&&(o=!0),cr(n,r,t,o,R.HEXA,A.HEX)},e.getBlendRGB=function(n,r,t,o){return t===void 0&&(t=5),o===void 0&&(o=!0),cr(n,r,t,o,R.RGB,A.RGB)},e.getBlendRGBA=function(n,r,t,o){return t===void 0&&(t=5),o===void 0&&(o=!0),cr(n,r,t,o,R.RGBA,A.RGB)},e.getBlendHSL=function(n,r,t,o){return t===void 0&&(t=5),o===void 0&&(o=!0),cr(n,r,t,o,R.HSL,A.HSL)},e.getBlendHSLA=function(n,r,t,o){return t===void 0&&(t=5),o===void 0&&(o=!0),cr(n,r,t,o,R.HSLA,A.HSL)},e.getMixHEX=function(n,r,t){return r===void 0&&(r=ke.ADDITIVE),t===void 0&&(t=!0),ur.HEX(n,r,t)},e.getMixHEXA=function(n,r,t){return r===void 0&&(r=ke.ADDITIVE),t===void 0&&(t=!0),ur.HEXA(n,r,t)},e.getMixRGB=function(n,r,t){return r===void 0&&(r=ke.ADDITIVE),t===void 0&&(t=!0),ur.RGB(n,r,t)},e.getMixRGBA=function(n,r,t){return r===void 0&&(r=ke.ADDITIVE),t===void 0&&(t=!0),ur.RGBA(n,r,t)},e.getMixHSL=function(n,r,t){return r===void 0&&(r=ke.ADDITIVE),t===void 0&&(t=!0),ur.HSL(n,r,t)},e.getMixHSLA=function(n,r,t){return r===void 0&&(r=ke.ADDITIVE),t===void 0&&(t=!0),ur.HSLA(n,r,t)},e.getShades=function(n,r){return Os(n,r,!0)},e.getTints=function(n,r){return Os(n,r,!1)},e.getHarmony=function(n,r,t){switch(r===void 0&&(r=gn.COMPLEMENTARY),t===void 0&&(t=ke.ADDITIVE),r){case gn.ANALOGOUS:return sr.buildHarmony(n,B0,t);case gn.SPLIT_COMPLEMENTARY:return sr.buildHarmony(n,I0,t);case gn.TRIADIC:return sr.buildHarmony(n,$0,t);case gn.TETRADIC:return sr.buildHarmony(n,U0,t);case gn.SQUARE:return sr.buildHarmony(n,V0,t);default:return sr.buildHarmony(n,H0,t)}},e}();xe(`.atom-bounding-box {
  --color-r: 50;
  --color-g: 205;
  --color-b: 50;
  font-size: 16px;
  position: relative;
  color: rgb(var(--color-r), var(--color-g), var(--color-b));
  text-align: unset;
  isolation: isolate;
}
.atom-bounding-box .atom-loader {
  position: relative;
  z-index: 1;
  width: 5em;
  height: 5em;
  transform: perspective(500px) rotateX(-24deg) rotateY(20deg) rotateZ(30deg);
  transform-style: preserve-3d;
}
.atom-bounding-box .atom-loader .inner {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  -webkit-animation: spinAtom 2.1s linear infinite;
          animation: spinAtom 2.1s linear infinite;
  display: inline-block;
  transform-origin: center center;
  position: relative;
}
.atom-bounding-box .atom-loader .inner .disc:nth-of-type(1) {
  --disc-color: var(--disc3-color);
  -webkit-animation: rotate 8s linear infinite;
          animation: rotate 8s linear infinite;
}
.atom-bounding-box .atom-loader .inner .disc:nth-of-type(2) {
  --disc-color: var(--disc2-color);
  -webkit-animation: rotateDisc2 8s linear infinite;
          animation: rotateDisc2 8s linear infinite;
}
.atom-bounding-box .atom-loader .inner .disc:nth-of-type(3) {
  --disc-color: var(--disc1-color);
  -webkit-animation: rotateDisc3 8s linear infinite;
          animation: rotateDisc3 8s linear infinite;
}
.atom-bounding-box .atom-loader .inner .disc {
  position: absolute;
  border-radius: 50%;
  border: 0.3em solid var(--disc-color, currentColor);
  display: inline-block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 2%;
}
.atom-bounding-box .atom-loader .inner .disc.nucleus-holder {
  border: 0.3em solid transparent;
}
.atom-bounding-box .atom-loader .inner .disc.nucleus-holder .nucleus {
  --color-invert-r: calc(200 - var(--color-r));
  --color-invert-g: calc(200 - var(--color-g));
  --color-invert-b: calc(200 - var(--color-b));
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0.8em;
  height: 0.8em;
  display: inline-block;
  border-radius: 50%;
  background-color: currentColor;
  box-shadow: inset 0 0 0.1333333333em rgba(var(--color-r), var(--color-g), var(--color-b), 0.16), inset 0.1333333333em 0 0.2133333333em rgb(var(--color-invert-r), var(--color-invert-g), var(--color-invert-b), 1), inset -0.1333333333em 0 0.2133333333em rgb(var(--color-invert-g), var(--color-invert-r), var(--color-invert-b), 1), inset 0.1333333333em 0 0.8em rgb(var(--color-invert-r), var(--color-invert-g), var(--color-invert-b), 1), inset -0.1333333333em 0 0.8em rgb(var(--color-invert-g), var(--color-invert-r), var(--color-invert-b), 1), 0 0 0.1333333333em rgba(var(--color-r), var(--color-g), var(--color-b), 0.16), -0.0266666667em 0 0.5925925926em rgb(var(--color-invert-r), var(--color-invert-g), var(--color-invert-b), 0.44), 0.0266666667em 0 0.5925925926em rgb(var(--color-invert-g), var(--color-invert-r), var(--color-invert-b), 0.44);
}
.atom-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}

/* @keyframes spin-atom {
  0% {
    transform: rotateX(360deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(0deg) rotateY(360deg);
  }
} */
@-webkit-keyframes spinAtom {
  to {
    transform: rotate(1turn);
  }
}
@keyframes spinAtom {
  to {
    transform: rotate(1turn);
  }
}
@-webkit-keyframes rotateDisc2 {
  from {
    transform: rotateX(90deg) rotateZ(0deg);
  }
  to {
    transform: rotateX(90deg) rotateZ(360deg);
  }
}
@keyframes rotateDisc2 {
  from {
    transform: rotateX(90deg) rotateZ(0deg);
  }
  to {
    transform: rotateX(90deg) rotateZ(360deg);
  }
}
@-webkit-keyframes rotateDisc3 {
  from {
    transform: rotateY(90deg) rotateZ(0deg);
  }
  to {
    transform: rotateY(90deg) rotateZ(360deg);
  }
}
@keyframes rotateDisc3 {
  from {
    transform: rotateY(90deg) rotateZ(0deg);
  }
  to {
    transform: rotateY(90deg) rotateZ(360deg);
  }
}`);new nd("rgb(50, 205, 50)");xe(`.commet-bounding-box {
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
}
.commet-bounding-box .commet-loader {
  width: 5em;
  height: 5em;
  color: rgb(50, 205, 50);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
}
.commet-bounding-box .commet-loader .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.commet-bounding-box .commet-loader .ring-wrapper {
  position: absolute;
  width: var(--ring-dimensions);
  height: var(--ring-dimensions);
  -webkit-animation: spinCommet 1.4s cubic-bezier(0.08, 0.03, 0.91, 0.93) infinite;
          animation: spinCommet 1.4s cubic-bezier(0.08, 0.03, 0.91, 0.93) infinite;
}
.commet-bounding-box .commet-loader .ring-wrapper > .ringball-holder {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
}
.commet-bounding-box .commet-loader .ring-wrapper .ring {
  border-radius: 50%;
  border-style: solid;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.commet-bounding-box .commet-loader .ring-wrapper.ring1 {
  --bg-color: var(--ring1-color, currentColor);
  --ring-dimensions: 100%;
  -webkit-animation-direction: normal;
          animation-direction: normal;
}
.commet-bounding-box .commet-loader .ring-wrapper.ring1 > .ring {
  border-color: var(--bg-color) transparent transparent var(--bg-color);
  border-width: 0.2em 0.2em 0em 0em;
  transform: rotateZ(-44deg);
}
.commet-bounding-box .commet-loader .ring-wrapper.ring1 > .ringball-holder::before {
  content: "";
  position: absolute;
  width: 0.4667em;
  height: 0.4667em;
  top: -0.05334em;
  left: 50%;
  background-color: var(--bg-color);
  border-radius: 50%;
  box-shadow: 0 0 0.3em 0.03em var(--bg-color), 0 0 1.4em 0.16em var(--bg-color);
}
.commet-bounding-box .commet-loader .ring-wrapper.ring2 {
  --bg-color: var(--ring2-color, currentColor);
  --ring-dimensions: 70%;
  animation-direction: reverse;
}
.commet-bounding-box .commet-loader .ring-wrapper.ring2 > .ring {
  border-color: var(--bg-color) var(--bg-color) transparent transparent;
  border-width: 0.2em 0em 0em 0.2em;
  transform: rotateZ(134deg);
}
.commet-bounding-box .commet-loader .ring-wrapper.ring2 > .ringball-holder::before {
  content: "";
  position: absolute;
  width: 0.4667em;
  height: 0.4667em;
  right: -0.05334em;
  bottom: 50%;
  background-color: var(--bg-color);
  border-radius: 50%;
  box-shadow: 0 0 0.3em 0.03em var(--bg-color), 0 0 1.4em 0.16em var(--bg-color);
}

@-webkit-keyframes spinCommet {
  to {
    transform: rotate(1turn);
  }
}

@keyframes spinCommet {
  to {
    transform: rotate(1turn);
  }
}`);xe(`.foursquare-bounding-box {
  box-sizing: border-box;
  display: inline-block;
  font-size: 16px;
  overflow: visible;
}
.foursquare-bounding-box .foursquare-loader {
  --dimension-unit: 4;
  height: calc(var(--dimension-unit) * 1em);
  width: calc(var(--dimension-unit) * 1em);
  color: rgb(50, 205, 50);
  font-size: 1em;
  position: relative;
  z-index: 0;
}
.foursquare-bounding-box .foursquare-loader .squares-container {
  height: inherit;
  width: inherit;
  color: currentColor;
  position: relative;
  -webkit-animation: expand 1s cubic-bezier(0.05, 0.28, 0.79, 0.98) infinite;
          animation: expand 1s cubic-bezier(0.05, 0.28, 0.79, 0.98) infinite;
  transform: rotate(45deg);
  position: absolute;
  top: 0;
  left: 0;
}
.foursquare-bounding-box .foursquare-loader .foursquare-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-30%, -50%);
  z-index: -2;
}
.foursquare-bounding-box .foursquare-loader .square {
  position: absolute;
  width: calc(var(--dimension-unit) / 2 * 1em);
  height: calc(var(--dimension-unit) / 2 * 1em);
  border-radius: 3px;
  background-color: currentColor;
  -webkit-animation: rotateSquare 1s both infinite;
          animation: rotateSquare 1s both infinite;
}
.foursquare-bounding-box .foursquare-loader .square.square1 {
  background-color: var(--square1-color, currentColor);
  top: 0;
  left: 0;
}
.foursquare-bounding-box .foursquare-loader .square.square2 {
  background-color: var(--square2-color, currentColor);
  top: 0;
  right: 0;
}
.foursquare-bounding-box .foursquare-loader .square.square3 {
  background-color: var(--square3-color, currentColor);
  bottom: 0;
  left: 0;
}
.foursquare-bounding-box .foursquare-loader .square.square4 {
  background-color: var(--square4-color, currentColor);
  bottom: 0;
  right: 0;
}

@-webkit-keyframes expand {
  0% {
    width: calc(var(--dimension-unit) * 1em);
    height: calc(var(--dimension-unit) * 1em);
  }
  10% {
    width: calc(var(--dimension-unit) * 1em);
    height: calc(var(--dimension-unit) * 1em);
  }
  50% {
    width: calc(var(--dimension-unit) * 1em + 2em);
    height: calc(var(--dimension-unit) * 1em + 2em);
  }
  90% {
    width: calc(var(--dimension-unit) * 1em);
    height: calc(var(--dimension-unit) * 1em);
  }
  100% {
    width: calc(var(--dimension-unit) * 1em);
    height: calc(var(--dimension-unit) * 1em);
  }
}

@keyframes expand {
  0% {
    width: calc(var(--dimension-unit) * 1em);
    height: calc(var(--dimension-unit) * 1em);
  }
  10% {
    width: calc(var(--dimension-unit) * 1em);
    height: calc(var(--dimension-unit) * 1em);
  }
  50% {
    width: calc(var(--dimension-unit) * 1em + 2em);
    height: calc(var(--dimension-unit) * 1em + 2em);
  }
  90% {
    width: calc(var(--dimension-unit) * 1em);
    height: calc(var(--dimension-unit) * 1em);
  }
  100% {
    width: calc(var(--dimension-unit) * 1em);
    height: calc(var(--dimension-unit) * 1em);
  }
}
@-webkit-keyframes rotateSquare {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(90deg);
  }
  90% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(90deg);
  }
}
@keyframes rotateSquare {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(90deg);
  }
  90% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(90deg);
  }
}`);xe(`.mosaic-bounding-box {
  box-sizing: border-box;
  font-size: 16px;
}
.mosaic-bounding-box .mosaic-loader {
  width: 5em;
  height: 5em;
  color: rgb(50, 205, 50);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-bounding-box .mosaic-loader .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-bounding-box .mosaic-loader .mosaic-cube {
  background-color: currentColor;
  -webkit-animation: mosaicAnimate 1.3s infinite ease-in-out;
          animation: mosaicAnimate 1.3s infinite ease-in-out;
}
.mosaic-bounding-box .mosaic-loader .mosaic-cube1 {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
  grid-area: a;
}
.mosaic-bounding-box .mosaic-loader .mosaic-cube2 {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
  grid-area: b;
}
.mosaic-bounding-box .mosaic-loader .mosaic-cube3 {
  grid-area: c;
  -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;
}
.mosaic-bounding-box .mosaic-loader .mosaic-cube4 {
  grid-area: d;
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
}
.mosaic-bounding-box .mosaic-loader .mosaic-cube5 {
  grid-area: e;
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}
.mosaic-bounding-box .mosaic-loader .mosaic-cube6 {
  grid-area: f;
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}
.mosaic-bounding-box .mosaic-loader .mosaic-cube7 {
  grid-area: g;
  -webkit-animation-delay: 0s;
          animation-delay: 0s;
}
.mosaic-bounding-box .mosaic-loader .mosaic-cube8 {
  grid-area: h;
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
}
.mosaic-bounding-box .mosaic-loader .mosaic-cube9 {
  grid-area: i;
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}

@-webkit-keyframes mosaicAnimate {
  0%, 70%, 100% {
    transform: scale3D(1, 1, 1);
  }
  35% {
    transform: scale3D(0, 0, 1);
  }
}

@keyframes mosaicAnimate {
  0%, 70%, 100% {
    transform: scale3D(1, 1, 1);
  }
  35% {
    transform: scale3D(0, 0, 1);
  }
}`);xe(`.ripple-bounding-box {
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
}
.ripple-bounding-box .ripple-loader {
  display: inline-block;
  width: 5em;
  height: 5em;
  color: rgb(50, 205, 50);
  position: relative;
  z-index: 0;
}
.ripple-bounding-box .ripple-loader .ripple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.ripple-bounding-box .ripple-loader .ripple {
  --border-width: 0.25em;
  position: absolute;
  border-width: var(--border-width);
  border-style: solid;
  border-color: currentColor;
  opacity: 1;
  border-radius: 50%;
  -webkit-animation: rippling 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
          animation: rippling 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.ripple-bounding-box .ripple-loader .ripple:nth-child(2) {
  -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s;
}

@-webkit-keyframes rippling {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}

@keyframes rippling {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}`);xe(`.seek-bounding-box {
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
}
.seek-bounding-box .seek-loader {
  width: 5em;
  height: 1.5em;
  text-align: center;
  color: rgb(50, 205, 50);
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.seek-bounding-box .seek-loader .seek-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.seek-bounding-box .seek-loader .seek-bounce {
  width: 1.12em;
  height: 1.12em;
  background-color: currentColor;
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: seek-blinken 1.4s infinite ease-in-out both;
          animation: seek-blinken 1.4s infinite ease-in-out both;
}
.seek-bounding-box .seek-loader .seek-bounce1 {
  -webkit-animation-delay: -0.32s;
          animation-delay: -0.32s;
}
.seek-bounding-box .seek-loader .seek-bounce2 {
  -webkit-animation-delay: -0.16s;
          animation-delay: -0.16s;
}

@-webkit-keyframes seek-blinken {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

@keyframes seek-blinken {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}`);xe(`.glidingblink-bounding-box {
  font-size: 16px;
}
.glidingblink-bounding-box .glidingblink-loader {
  --bar-width: 2em;
  --color-base: 50, 205, 50;
  isolation: isolate;
  width: 15.75em;
  height: 3em;
  position: relative;
  color: rgb(var(--color-base));
}
.glidingblink-bounding-box .glidingblink-loader .gliding-blink-text {
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  color: currentColor;
  font-size: 0.7em;
}
.glidingblink-bounding-box .glidingblink-loader:after {
  content: "";
  position: absolute;
  top: 50%;
  left: calc(var(--bar-width) * -1);
  display: block;
  width: var(--bar-width);
  height: calc(var(--bar-width) / 0.8);
  border-radius: 4px;
  background-color: transparent;
  transform: skewX(-20deg) translateY(-50%);
  box-shadow: calc(var(--bar-width) * 1.2) 0 1.6px rgba(var(--shape1-color-base, var(--color-base)), 0.84), calc(var(--bar-width) * 2.4) 0 0px rgba(var(--shape2-color-base, var(--color-base)), 1), calc(var(--bar-width) * 3.6) 0 1.6px rgba(var(--shape3-color-base, var(--color-base)), 0.84), calc(var(--bar-width) * 4.8) 0 3.2px rgba(var(--shape4-color-base, var(--color-base)), 0.68), calc(var(--bar-width) * 6) 0 4.8px rgba(var(--shape5-color-base, var(--color-base)), 0.52), calc(var(--bar-width) * 7.2) 0 6.4px rgba(var(--shape6-color-base, var(--color-base)), 0.36);
  -webkit-animation: glideAnim 2s linear infinite;
          animation: glideAnim 2s linear infinite;
}

@-webkit-keyframes glideAnim {
  0% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 10px rgba(var(--shape1-color-base, var(--color-base)), 0.135), calc(var(--bar-width) * 2.4) 0 8.4px rgba(var(--shape2-color-base, var(--color-base)), 0.16), calc(var(--bar-width) * 3.6) 0 6.8px rgba(var(--shape3-color-base, var(--color-base)), 0.32), calc(var(--bar-width) * 4.8) 0 5.2px rgba(var(--shape4-color-base, var(--color-base)), 0.48), calc(var(--bar-width) * 6) 0 3.6px rgba(var(--shape5-color-base, var(--color-base)), 0.64), calc(var(--bar-width) * 7.2) 0 2px rgba(var(--shape6-color-base, var(--color-base)), 0.8);
  }
  4% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 9.2px rgba(var(--shape1-color-base, var(--color-base)), 0.08), calc(var(--bar-width) * 2.4) 0 9.2px rgba(var(--shape2-color-base, var(--color-base)), 0.08), calc(var(--bar-width) * 3.6) 0 7.6px rgba(var(--shape3-color-base, var(--color-base)), 0.24), calc(var(--bar-width) * 4.8) 0 6px rgba(var(--shape4-color-base, var(--color-base)), 0.4), calc(var(--bar-width) * 6) 0 4.4px rgba(var(--shape5-color-base, var(--color-base)), 0.56), calc(var(--bar-width) * 7.2) 0 2.8px rgba(var(--shape6-color-base, var(--color-base)), 0.72);
  }
  8% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 8.4px rgba(var(--shape1-color-base, var(--color-base)), 0.16), calc(var(--bar-width) * 2.4) 0 10px rgba(var(--shape2-color-base, var(--color-base)), 0.135), calc(var(--bar-width) * 3.6) 0 8.4px rgba(var(--shape3-color-base, var(--color-base)), 0.16), calc(var(--bar-width) * 4.8) 0 6.8px rgba(var(--shape4-color-base, var(--color-base)), 0.32), calc(var(--bar-width) * 6) 0 5.2px rgba(var(--shape5-color-base, var(--color-base)), 0.48), calc(var(--bar-width) * 7.2) 0 3.6px rgba(var(--shape6-color-base, var(--color-base)), 0.64);
  }
  12% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 7.6px rgba(var(--shape1-color-base, var(--color-base)), 0.24), calc(var(--bar-width) * 2.4) 0 9.2px rgba(var(--shape2-color-base, var(--color-base)), 0.08), calc(var(--bar-width) * 3.6) 0 9.2px rgba(var(--shape3-color-base, var(--color-base)), 0.08), calc(var(--bar-width) * 4.8) 0 7.6px rgba(var(--shape4-color-base, var(--color-base)), 0.24), calc(var(--bar-width) * 6) 0 6px rgba(var(--shape5-color-base, var(--color-base)), 0.4), calc(var(--bar-width) * 7.2) 0 4.4px rgba(var(--shape6-color-base, var(--color-base)), 0.56);
  }
  16% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 6.8px rgba(var(--shape1-color-base, var(--color-base)), 0.32), calc(var(--bar-width) * 2.4) 0 8.4px rgba(var(--shape2-color-base, var(--color-base)), 0.16), calc(var(--bar-width) * 3.6) 0 10px rgba(var(--shape3-color-base, var(--color-base)), 0.135), calc(var(--bar-width) * 4.8) 0 8.4px rgba(var(--shape4-color-base, var(--color-base)), 0.16), calc(var(--bar-width) * 6) 0 6.8px rgba(var(--shape5-color-base, var(--color-base)), 0.32), calc(var(--bar-width) * 7.2) 0 5.2px rgba(var(--shape6-color-base, var(--color-base)), 0.48);
  }
  20% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 6px rgba(var(--shape1-color-base, var(--color-base)), 0.4), calc(var(--bar-width) * 2.4) 0 7.6px rgba(var(--shape2-color-base, var(--color-base)), 0.24), calc(var(--bar-width) * 3.6) 0 9.2px rgba(var(--shape3-color-base, var(--color-base)), 0.08), calc(var(--bar-width) * 4.8) 0 9.2px rgba(var(--shape4-color-base, var(--color-base)), 0.08), calc(var(--bar-width) * 6) 0 7.6px rgba(var(--shape5-color-base, var(--color-base)), 0.24), calc(var(--bar-width) * 7.2) 0 6px rgba(var(--shape6-color-base, var(--color-base)), 0.4);
  }
  24% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 5.2px rgba(var(--shape1-color-base, var(--color-base)), 0.48), calc(var(--bar-width) * 2.4) 0 6.8px rgba(var(--shape2-color-base, var(--color-base)), 0.32), calc(var(--bar-width) * 3.6) 0 8.4px rgba(var(--shape3-color-base, var(--color-base)), 0.16), calc(var(--bar-width) * 4.8) 0 10px rgba(var(--shape4-color-base, var(--color-base)), 0.135), calc(var(--bar-width) * 6) 0 8.4px rgba(var(--shape5-color-base, var(--color-base)), 0.16), calc(var(--bar-width) * 7.2) 0 6.8px rgba(var(--shape6-color-base, var(--color-base)), 0.32);
  }
  28% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 4.4px rgba(var(--shape1-color-base, var(--color-base)), 0.56), calc(var(--bar-width) * 2.4) 0 6px rgba(var(--shape2-color-base, var(--color-base)), 0.4), calc(var(--bar-width) * 3.6) 0 7.6px rgba(var(--shape3-color-base, var(--color-base)), 0.24), calc(var(--bar-width) * 4.8) 0 9.2px rgba(var(--shape4-color-base, var(--color-base)), 0.08), calc(var(--bar-width) * 6) 0 9.2px rgba(var(--shape5-color-base, var(--color-base)), 0.08), calc(var(--bar-width) * 7.2) 0 7.6px rgba(var(--shape6-color-base, var(--color-base)), 0.24);
  }
  32% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 3.6px rgba(var(--shape1-color-base, var(--color-base)), 0.64), calc(var(--bar-width) * 2.4) 0 5.2px rgba(var(--shape2-color-base, var(--color-base)), 0.48), calc(var(--bar-width) * 3.6) 0 6.8px rgba(var(--shape3-color-base, var(--color-base)), 0.32), calc(var(--bar-width) * 4.8) 0 8.4px rgba(var(--shape4-color-base, var(--color-base)), 0.16), calc(var(--bar-width) * 6) 0 10px rgba(var(--shape5-color-base, var(--color-base)), 0.135), calc(var(--bar-width) * 7.2) 0 8.4px rgba(var(--shape6-color-base, var(--color-base)), 0.16);
  }
  36% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 2.8px rgba(var(--shape1-color-base, var(--color-base)), 0.72), calc(var(--bar-width) * 2.4) 0 4.4px rgba(var(--shape2-color-base, var(--color-base)), 0.56), calc(var(--bar-width) * 3.6) 0 6px rgba(var(--shape3-color-base, var(--color-base)), 0.4), calc(var(--bar-width) * 4.8) 0 7.6px rgba(var(--shape4-color-base, var(--color-base)), 0.24), calc(var(--bar-width) * 6) 0 9.2px rgba(var(--shape5-color-base, var(--color-base)), 0.08), calc(var(--bar-width) * 7.2) 0 9.2px rgba(var(--shape6-color-base, var(--color-base)), 0.08);
  }
  40% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 2px rgba(var(--shape1-color-base, var(--color-base)), 0.8), calc(var(--bar-width) * 2.4) 0 3.6px rgba(var(--shape2-color-base, var(--color-base)), 0.64), calc(var(--bar-width) * 3.6) 0 5.2px rgba(var(--shape3-color-base, var(--color-base)), 0.48), calc(var(--bar-width) * 4.8) 0 6.8px rgba(var(--shape4-color-base, var(--color-base)), 0.32), calc(var(--bar-width) * 6) 0 8.4px rgba(var(--shape5-color-base, var(--color-base)), 0.16), calc(var(--bar-width) * 7.2) 0 10px rgba(var(--shape6-color-base, var(--color-base)), 0.135);
  }
  44% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 1.2px rgba(var(--shape1-color-base, var(--color-base)), 1), calc(var(--bar-width) * 2.4) 0 2.8px rgba(var(--shape2-color-base, var(--color-base)), 0.72), calc(var(--bar-width) * 3.6) 0 4.4px rgba(var(--shape3-color-base, var(--color-base)), 0.56), calc(var(--bar-width) * 4.8) 0 6px rgba(var(--shape4-color-base, var(--color-base)), 0.4), calc(var(--bar-width) * 6) 0 7.6px rgba(var(--shape5-color-base, var(--color-base)), 0.24), calc(var(--bar-width) * 7.2) 0 9.2px rgba(var(--shape6-color-base, var(--color-base)), 0.08);
  }
  48% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 0.4px rgba(var(--shape1-color-base, var(--color-base)), 0), calc(var(--bar-width) * 2.4) 0 2px rgba(var(--shape2-color-base, var(--color-base)), 0.8), calc(var(--bar-width) * 3.6) 0 3.6px rgba(var(--shape3-color-base, var(--color-base)), 0.64), calc(var(--bar-width) * 4.8) 0 5.2px rgba(var(--shape4-color-base, var(--color-base)), 0.48), calc(var(--bar-width) * 6) 0 6.8px rgba(var(--shape5-color-base, var(--color-base)), 0.32), calc(var(--bar-width) * 7.2) 0 8.4px rgba(var(--shape6-color-base, var(--color-base)), 0.16);
  }
  52% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 0.4px rgba(var(--shape1-color-base, var(--color-base)), 0), calc(var(--bar-width) * 2.4) 0 1.2px rgba(var(--shape2-color-base, var(--color-base)), 1), calc(var(--bar-width) * 3.6) 0 2.8px rgba(var(--shape3-color-base, var(--color-base)), 0.72), calc(var(--bar-width) * 4.8) 0 4.4px rgba(var(--shape4-color-base, var(--color-base)), 0.56), calc(var(--bar-width) * 6) 0 6px rgba(var(--shape5-color-base, var(--color-base)), 0.4), calc(var(--bar-width) * 7.2) 0 7.6px rgba(var(--shape6-color-base, var(--color-base)), 0.24);
  }
  56% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 1.2px rgba(var(--shape1-color-base, var(--color-base)), 1), calc(var(--bar-width) * 2.4) 0 0.4px rgba(var(--shape2-color-base, var(--color-base)), 0), calc(var(--bar-width) * 3.6) 0 2px rgba(var(--shape3-color-base, var(--color-base)), 0.8), calc(var(--bar-width) * 4.8) 0 3.6px rgba(var(--shape4-color-base, var(--color-base)), 0.64), calc(var(--bar-width) * 6) 0 5.2px rgba(var(--shape5-color-base, var(--color-base)), 0.48), calc(var(--bar-width) * 7.2) 0 6.8px rgba(var(--shape6-color-base, var(--color-base)), 0.32);
  }
  60% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 2px rgba(var(--shape1-color-base, var(--color-base)), 0.8), calc(var(--bar-width) * 2.4) 0 0.4px rgba(var(--shape2-color-base, var(--color-base)), 0), calc(var(--bar-width) * 3.6) 0 1.2px rgba(var(--shape3-color-base, var(--color-base)), 1), calc(var(--bar-width) * 4.8) 0 2.8px rgba(var(--shape4-color-base, var(--color-base)), 0.72), calc(var(--bar-width) * 6) 0 4.4px rgba(var(--shape5-color-base, var(--color-base)), 0.56), calc(var(--bar-width) * 7.2) 0 6px rgba(var(--shape6-color-base, var(--color-base)), 0.4);
  }
  64% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 2.8px rgba(var(--shape1-color-base, var(--color-base)), 0.72), calc(var(--bar-width) * 2.4) 0 1.2px rgba(var(--shape2-color-base, var(--color-base)), 1), calc(var(--bar-width) * 3.6) 0 0.4px rgba(var(--shape3-color-base, var(--color-base)), 0), calc(var(--bar-width) * 4.8) 0 2px rgba(var(--shape4-color-base, var(--color-base)), 0.8), calc(var(--bar-width) * 6) 0 3.6px rgba(var(--shape5-color-base, var(--color-base)), 0.64), calc(var(--bar-width) * 7.2) 0 5.2px rgba(var(--shape6-color-base, var(--color-base)), 0.48);
  }
  68% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 3.6px rgba(var(--shape1-color-base, var(--color-base)), 0.64), calc(var(--bar-width) * 2.4) 0 2px rgba(var(--shape2-color-base, var(--color-base)), 0.8), calc(var(--bar-width) * 3.6) 0 0.4px rgba(var(--shape3-color-base, var(--color-base)), 0), calc(var(--bar-width) * 4.8) 0 1.2px rgba(var(--shape4-color-base, var(--color-base)), 1), calc(var(--bar-width) * 6) 0 2.8px rgba(var(--shape5-color-base, var(--color-base)), 0.72), calc(var(--bar-width) * 7.2) 0 4.4px rgba(var(--shape6-color-base, var(--color-base)), 0.56);
  }
  72% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 4.4px rgba(var(--shape1-color-base, var(--color-base)), 0.56), calc(var(--bar-width) * 2.4) 0 2.8px rgba(var(--shape2-color-base, var(--color-base)), 0.72), calc(var(--bar-width) * 3.6) 0 1.2px rgba(var(--shape3-color-base, var(--color-base)), 1), calc(var(--bar-width) * 4.8) 0 0.4px rgba(var(--shape4-color-base, var(--color-base)), 0), calc(var(--bar-width) * 6) 0 2px rgba(var(--shape5-color-base, var(--color-base)), 0.8), calc(var(--bar-width) * 7.2) 0 3.6px rgba(var(--shape6-color-base, var(--color-base)), 0.64);
  }
  76% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 5.2px rgba(var(--shape1-color-base, var(--color-base)), 0.48), calc(var(--bar-width) * 2.4) 0 3.6px rgba(var(--shape2-color-base, var(--color-base)), 0.64), calc(var(--bar-width) * 3.6) 0 2px rgba(var(--shape3-color-base, var(--color-base)), 0.8), calc(var(--bar-width) * 4.8) 0 0.4px rgba(var(--shape4-color-base, var(--color-base)), 0), calc(var(--bar-width) * 6) 0 1.2px rgba(var(--shape5-color-base, var(--color-base)), 1), calc(var(--bar-width) * 7.2) 0 2.8px rgba(var(--shape6-color-base, var(--color-base)), 0.72);
  }
  80% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 6px rgba(var(--shape1-color-base, var(--color-base)), 0.4), calc(var(--bar-width) * 2.4) 0 4.4px rgba(var(--shape2-color-base, var(--color-base)), 0.56), calc(var(--bar-width) * 3.6) 0 2.8px rgba(var(--shape3-color-base, var(--color-base)), 0.72), calc(var(--bar-width) * 4.8) 0 1.2px rgba(var(--shape4-color-base, var(--color-base)), 1), calc(var(--bar-width) * 6) 0 0.4px rgba(var(--shape5-color-base, var(--color-base)), 0), calc(var(--bar-width) * 7.2) 0 2px rgba(var(--shape6-color-base, var(--color-base)), 0.8);
  }
  84% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 6.8px rgba(var(--shape1-color-base, var(--color-base)), 0.32), calc(var(--bar-width) * 2.4) 0 5.2px rgba(var(--shape2-color-base, var(--color-base)), 0.48), calc(var(--bar-width) * 3.6) 0 3.6px rgba(var(--shape3-color-base, var(--color-base)), 0.64), calc(var(--bar-width) * 4.8) 0 2px rgba(var(--shape4-color-base, var(--color-base)), 0.8), calc(var(--bar-width) * 6) 0 0.4px rgba(var(--shape5-color-base, var(--color-base)), 0), calc(var(--bar-width) * 7.2) 0 1.2px rgba(var(--shape6-color-base, var(--color-base)), 1);
  }
  88% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 7.6px rgba(var(--shape1-color-base, var(--color-base)), 0.24), calc(var(--bar-width) * 2.4) 0 6px rgba(var(--shape2-color-base, var(--color-base)), 0.4), calc(var(--bar-width) * 3.6) 0 4.4px rgba(var(--shape3-color-base, var(--color-base)), 0.56), calc(var(--bar-width) * 4.8) 0 2.8px rgba(var(--shape4-color-base, var(--color-base)), 0.72), calc(var(--bar-width) * 6) 0 1.2px rgba(var(--shape5-color-base, var(--color-base)), 1), calc(var(--bar-width) * 7.2) 0 0.4px rgba(var(--shape6-color-base, var(--color-base)), 0);
  }
  92% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 8.4px rgba(var(--shape1-color-base, var(--color-base)), 0.16), calc(var(--bar-width) * 2.4) 0 6.8px rgba(var(--shape2-color-base, var(--color-base)), 0.32), calc(var(--bar-width) * 3.6) 0 5.2px rgba(var(--shape3-color-base, var(--color-base)), 0.48), calc(var(--bar-width) * 4.8) 0 3.6px rgba(var(--shape4-color-base, var(--color-base)), 0.64), calc(var(--bar-width) * 6) 0 2px rgba(var(--shape5-color-base, var(--color-base)), 0.8), calc(var(--bar-width) * 7.2) 0 0.4px rgba(var(--shape6-color-base, var(--color-base)), 0);
  }
  96% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 9.2px rgba(var(--shape1-color-base, var(--color-base)), 0.08), calc(var(--bar-width) * 2.4) 0 7.6px rgba(var(--shape2-color-base, var(--color-base)), 0.24), calc(var(--bar-width) * 3.6) 0 6px rgba(var(--shape3-color-base, var(--color-base)), 0.4), calc(var(--bar-width) * 4.8) 0 4.4px rgba(var(--shape4-color-base, var(--color-base)), 0.56), calc(var(--bar-width) * 6) 0 2.8px rgba(var(--shape5-color-base, var(--color-base)), 0.72), calc(var(--bar-width) * 7.2) 0 1.2px rgba(var(--shape6-color-base, var(--color-base)), 1);
  }
  100% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 10px rgba(var(--shape1-color-base, var(--color-base)), 0.135), calc(var(--bar-width) * 2.4) 0 8.4px rgba(var(--shape2-color-base, var(--color-base)), 0.16), calc(var(--bar-width) * 3.6) 0 6.8px rgba(var(--shape3-color-base, var(--color-base)), 0.32), calc(var(--bar-width) * 4.8) 0 5.2px rgba(var(--shape4-color-base, var(--color-base)), 0.48), calc(var(--bar-width) * 6) 0 3.6px rgba(var(--shape5-color-base, var(--color-base)), 0.64), calc(var(--bar-width) * 7.2) 0 2px rgba(var(--shape6-color-base, var(--color-base)), 0.8);
  }
}

@keyframes glideAnim {
  0% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 10px rgba(var(--shape1-color-base, var(--color-base)), 0.135), calc(var(--bar-width) * 2.4) 0 8.4px rgba(var(--shape2-color-base, var(--color-base)), 0.16), calc(var(--bar-width) * 3.6) 0 6.8px rgba(var(--shape3-color-base, var(--color-base)), 0.32), calc(var(--bar-width) * 4.8) 0 5.2px rgba(var(--shape4-color-base, var(--color-base)), 0.48), calc(var(--bar-width) * 6) 0 3.6px rgba(var(--shape5-color-base, var(--color-base)), 0.64), calc(var(--bar-width) * 7.2) 0 2px rgba(var(--shape6-color-base, var(--color-base)), 0.8);
  }
  4% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 9.2px rgba(var(--shape1-color-base, var(--color-base)), 0.08), calc(var(--bar-width) * 2.4) 0 9.2px rgba(var(--shape2-color-base, var(--color-base)), 0.08), calc(var(--bar-width) * 3.6) 0 7.6px rgba(var(--shape3-color-base, var(--color-base)), 0.24), calc(var(--bar-width) * 4.8) 0 6px rgba(var(--shape4-color-base, var(--color-base)), 0.4), calc(var(--bar-width) * 6) 0 4.4px rgba(var(--shape5-color-base, var(--color-base)), 0.56), calc(var(--bar-width) * 7.2) 0 2.8px rgba(var(--shape6-color-base, var(--color-base)), 0.72);
  }
  8% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 8.4px rgba(var(--shape1-color-base, var(--color-base)), 0.16), calc(var(--bar-width) * 2.4) 0 10px rgba(var(--shape2-color-base, var(--color-base)), 0.135), calc(var(--bar-width) * 3.6) 0 8.4px rgba(var(--shape3-color-base, var(--color-base)), 0.16), calc(var(--bar-width) * 4.8) 0 6.8px rgba(var(--shape4-color-base, var(--color-base)), 0.32), calc(var(--bar-width) * 6) 0 5.2px rgba(var(--shape5-color-base, var(--color-base)), 0.48), calc(var(--bar-width) * 7.2) 0 3.6px rgba(var(--shape6-color-base, var(--color-base)), 0.64);
  }
  12% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 7.6px rgba(var(--shape1-color-base, var(--color-base)), 0.24), calc(var(--bar-width) * 2.4) 0 9.2px rgba(var(--shape2-color-base, var(--color-base)), 0.08), calc(var(--bar-width) * 3.6) 0 9.2px rgba(var(--shape3-color-base, var(--color-base)), 0.08), calc(var(--bar-width) * 4.8) 0 7.6px rgba(var(--shape4-color-base, var(--color-base)), 0.24), calc(var(--bar-width) * 6) 0 6px rgba(var(--shape5-color-base, var(--color-base)), 0.4), calc(var(--bar-width) * 7.2) 0 4.4px rgba(var(--shape6-color-base, var(--color-base)), 0.56);
  }
  16% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 6.8px rgba(var(--shape1-color-base, var(--color-base)), 0.32), calc(var(--bar-width) * 2.4) 0 8.4px rgba(var(--shape2-color-base, var(--color-base)), 0.16), calc(var(--bar-width) * 3.6) 0 10px rgba(var(--shape3-color-base, var(--color-base)), 0.135), calc(var(--bar-width) * 4.8) 0 8.4px rgba(var(--shape4-color-base, var(--color-base)), 0.16), calc(var(--bar-width) * 6) 0 6.8px rgba(var(--shape5-color-base, var(--color-base)), 0.32), calc(var(--bar-width) * 7.2) 0 5.2px rgba(var(--shape6-color-base, var(--color-base)), 0.48);
  }
  20% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 6px rgba(var(--shape1-color-base, var(--color-base)), 0.4), calc(var(--bar-width) * 2.4) 0 7.6px rgba(var(--shape2-color-base, var(--color-base)), 0.24), calc(var(--bar-width) * 3.6) 0 9.2px rgba(var(--shape3-color-base, var(--color-base)), 0.08), calc(var(--bar-width) * 4.8) 0 9.2px rgba(var(--shape4-color-base, var(--color-base)), 0.08), calc(var(--bar-width) * 6) 0 7.6px rgba(var(--shape5-color-base, var(--color-base)), 0.24), calc(var(--bar-width) * 7.2) 0 6px rgba(var(--shape6-color-base, var(--color-base)), 0.4);
  }
  24% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 5.2px rgba(var(--shape1-color-base, var(--color-base)), 0.48), calc(var(--bar-width) * 2.4) 0 6.8px rgba(var(--shape2-color-base, var(--color-base)), 0.32), calc(var(--bar-width) * 3.6) 0 8.4px rgba(var(--shape3-color-base, var(--color-base)), 0.16), calc(var(--bar-width) * 4.8) 0 10px rgba(var(--shape4-color-base, var(--color-base)), 0.135), calc(var(--bar-width) * 6) 0 8.4px rgba(var(--shape5-color-base, var(--color-base)), 0.16), calc(var(--bar-width) * 7.2) 0 6.8px rgba(var(--shape6-color-base, var(--color-base)), 0.32);
  }
  28% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 4.4px rgba(var(--shape1-color-base, var(--color-base)), 0.56), calc(var(--bar-width) * 2.4) 0 6px rgba(var(--shape2-color-base, var(--color-base)), 0.4), calc(var(--bar-width) * 3.6) 0 7.6px rgba(var(--shape3-color-base, var(--color-base)), 0.24), calc(var(--bar-width) * 4.8) 0 9.2px rgba(var(--shape4-color-base, var(--color-base)), 0.08), calc(var(--bar-width) * 6) 0 9.2px rgba(var(--shape5-color-base, var(--color-base)), 0.08), calc(var(--bar-width) * 7.2) 0 7.6px rgba(var(--shape6-color-base, var(--color-base)), 0.24);
  }
  32% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 3.6px rgba(var(--shape1-color-base, var(--color-base)), 0.64), calc(var(--bar-width) * 2.4) 0 5.2px rgba(var(--shape2-color-base, var(--color-base)), 0.48), calc(var(--bar-width) * 3.6) 0 6.8px rgba(var(--shape3-color-base, var(--color-base)), 0.32), calc(var(--bar-width) * 4.8) 0 8.4px rgba(var(--shape4-color-base, var(--color-base)), 0.16), calc(var(--bar-width) * 6) 0 10px rgba(var(--shape5-color-base, var(--color-base)), 0.135), calc(var(--bar-width) * 7.2) 0 8.4px rgba(var(--shape6-color-base, var(--color-base)), 0.16);
  }
  36% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 2.8px rgba(var(--shape1-color-base, var(--color-base)), 0.72), calc(var(--bar-width) * 2.4) 0 4.4px rgba(var(--shape2-color-base, var(--color-base)), 0.56), calc(var(--bar-width) * 3.6) 0 6px rgba(var(--shape3-color-base, var(--color-base)), 0.4), calc(var(--bar-width) * 4.8) 0 7.6px rgba(var(--shape4-color-base, var(--color-base)), 0.24), calc(var(--bar-width) * 6) 0 9.2px rgba(var(--shape5-color-base, var(--color-base)), 0.08), calc(var(--bar-width) * 7.2) 0 9.2px rgba(var(--shape6-color-base, var(--color-base)), 0.08);
  }
  40% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 2px rgba(var(--shape1-color-base, var(--color-base)), 0.8), calc(var(--bar-width) * 2.4) 0 3.6px rgba(var(--shape2-color-base, var(--color-base)), 0.64), calc(var(--bar-width) * 3.6) 0 5.2px rgba(var(--shape3-color-base, var(--color-base)), 0.48), calc(var(--bar-width) * 4.8) 0 6.8px rgba(var(--shape4-color-base, var(--color-base)), 0.32), calc(var(--bar-width) * 6) 0 8.4px rgba(var(--shape5-color-base, var(--color-base)), 0.16), calc(var(--bar-width) * 7.2) 0 10px rgba(var(--shape6-color-base, var(--color-base)), 0.135);
  }
  44% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 1.2px rgba(var(--shape1-color-base, var(--color-base)), 1), calc(var(--bar-width) * 2.4) 0 2.8px rgba(var(--shape2-color-base, var(--color-base)), 0.72), calc(var(--bar-width) * 3.6) 0 4.4px rgba(var(--shape3-color-base, var(--color-base)), 0.56), calc(var(--bar-width) * 4.8) 0 6px rgba(var(--shape4-color-base, var(--color-base)), 0.4), calc(var(--bar-width) * 6) 0 7.6px rgba(var(--shape5-color-base, var(--color-base)), 0.24), calc(var(--bar-width) * 7.2) 0 9.2px rgba(var(--shape6-color-base, var(--color-base)), 0.08);
  }
  48% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 0.4px rgba(var(--shape1-color-base, var(--color-base)), 0), calc(var(--bar-width) * 2.4) 0 2px rgba(var(--shape2-color-base, var(--color-base)), 0.8), calc(var(--bar-width) * 3.6) 0 3.6px rgba(var(--shape3-color-base, var(--color-base)), 0.64), calc(var(--bar-width) * 4.8) 0 5.2px rgba(var(--shape4-color-base, var(--color-base)), 0.48), calc(var(--bar-width) * 6) 0 6.8px rgba(var(--shape5-color-base, var(--color-base)), 0.32), calc(var(--bar-width) * 7.2) 0 8.4px rgba(var(--shape6-color-base, var(--color-base)), 0.16);
  }
  52% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 0.4px rgba(var(--shape1-color-base, var(--color-base)), 0), calc(var(--bar-width) * 2.4) 0 1.2px rgba(var(--shape2-color-base, var(--color-base)), 1), calc(var(--bar-width) * 3.6) 0 2.8px rgba(var(--shape3-color-base, var(--color-base)), 0.72), calc(var(--bar-width) * 4.8) 0 4.4px rgba(var(--shape4-color-base, var(--color-base)), 0.56), calc(var(--bar-width) * 6) 0 6px rgba(var(--shape5-color-base, var(--color-base)), 0.4), calc(var(--bar-width) * 7.2) 0 7.6px rgba(var(--shape6-color-base, var(--color-base)), 0.24);
  }
  56% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 1.2px rgba(var(--shape1-color-base, var(--color-base)), 1), calc(var(--bar-width) * 2.4) 0 0.4px rgba(var(--shape2-color-base, var(--color-base)), 0), calc(var(--bar-width) * 3.6) 0 2px rgba(var(--shape3-color-base, var(--color-base)), 0.8), calc(var(--bar-width) * 4.8) 0 3.6px rgba(var(--shape4-color-base, var(--color-base)), 0.64), calc(var(--bar-width) * 6) 0 5.2px rgba(var(--shape5-color-base, var(--color-base)), 0.48), calc(var(--bar-width) * 7.2) 0 6.8px rgba(var(--shape6-color-base, var(--color-base)), 0.32);
  }
  60% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 2px rgba(var(--shape1-color-base, var(--color-base)), 0.8), calc(var(--bar-width) * 2.4) 0 0.4px rgba(var(--shape2-color-base, var(--color-base)), 0), calc(var(--bar-width) * 3.6) 0 1.2px rgba(var(--shape3-color-base, var(--color-base)), 1), calc(var(--bar-width) * 4.8) 0 2.8px rgba(var(--shape4-color-base, var(--color-base)), 0.72), calc(var(--bar-width) * 6) 0 4.4px rgba(var(--shape5-color-base, var(--color-base)), 0.56), calc(var(--bar-width) * 7.2) 0 6px rgba(var(--shape6-color-base, var(--color-base)), 0.4);
  }
  64% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 2.8px rgba(var(--shape1-color-base, var(--color-base)), 0.72), calc(var(--bar-width) * 2.4) 0 1.2px rgba(var(--shape2-color-base, var(--color-base)), 1), calc(var(--bar-width) * 3.6) 0 0.4px rgba(var(--shape3-color-base, var(--color-base)), 0), calc(var(--bar-width) * 4.8) 0 2px rgba(var(--shape4-color-base, var(--color-base)), 0.8), calc(var(--bar-width) * 6) 0 3.6px rgba(var(--shape5-color-base, var(--color-base)), 0.64), calc(var(--bar-width) * 7.2) 0 5.2px rgba(var(--shape6-color-base, var(--color-base)), 0.48);
  }
  68% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 3.6px rgba(var(--shape1-color-base, var(--color-base)), 0.64), calc(var(--bar-width) * 2.4) 0 2px rgba(var(--shape2-color-base, var(--color-base)), 0.8), calc(var(--bar-width) * 3.6) 0 0.4px rgba(var(--shape3-color-base, var(--color-base)), 0), calc(var(--bar-width) * 4.8) 0 1.2px rgba(var(--shape4-color-base, var(--color-base)), 1), calc(var(--bar-width) * 6) 0 2.8px rgba(var(--shape5-color-base, var(--color-base)), 0.72), calc(var(--bar-width) * 7.2) 0 4.4px rgba(var(--shape6-color-base, var(--color-base)), 0.56);
  }
  72% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 4.4px rgba(var(--shape1-color-base, var(--color-base)), 0.56), calc(var(--bar-width) * 2.4) 0 2.8px rgba(var(--shape2-color-base, var(--color-base)), 0.72), calc(var(--bar-width) * 3.6) 0 1.2px rgba(var(--shape3-color-base, var(--color-base)), 1), calc(var(--bar-width) * 4.8) 0 0.4px rgba(var(--shape4-color-base, var(--color-base)), 0), calc(var(--bar-width) * 6) 0 2px rgba(var(--shape5-color-base, var(--color-base)), 0.8), calc(var(--bar-width) * 7.2) 0 3.6px rgba(var(--shape6-color-base, var(--color-base)), 0.64);
  }
  76% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 5.2px rgba(var(--shape1-color-base, var(--color-base)), 0.48), calc(var(--bar-width) * 2.4) 0 3.6px rgba(var(--shape2-color-base, var(--color-base)), 0.64), calc(var(--bar-width) * 3.6) 0 2px rgba(var(--shape3-color-base, var(--color-base)), 0.8), calc(var(--bar-width) * 4.8) 0 0.4px rgba(var(--shape4-color-base, var(--color-base)), 0), calc(var(--bar-width) * 6) 0 1.2px rgba(var(--shape5-color-base, var(--color-base)), 1), calc(var(--bar-width) * 7.2) 0 2.8px rgba(var(--shape6-color-base, var(--color-base)), 0.72);
  }
  80% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 6px rgba(var(--shape1-color-base, var(--color-base)), 0.4), calc(var(--bar-width) * 2.4) 0 4.4px rgba(var(--shape2-color-base, var(--color-base)), 0.56), calc(var(--bar-width) * 3.6) 0 2.8px rgba(var(--shape3-color-base, var(--color-base)), 0.72), calc(var(--bar-width) * 4.8) 0 1.2px rgba(var(--shape4-color-base, var(--color-base)), 1), calc(var(--bar-width) * 6) 0 0.4px rgba(var(--shape5-color-base, var(--color-base)), 0), calc(var(--bar-width) * 7.2) 0 2px rgba(var(--shape6-color-base, var(--color-base)), 0.8);
  }
  84% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 6.8px rgba(var(--shape1-color-base, var(--color-base)), 0.32), calc(var(--bar-width) * 2.4) 0 5.2px rgba(var(--shape2-color-base, var(--color-base)), 0.48), calc(var(--bar-width) * 3.6) 0 3.6px rgba(var(--shape3-color-base, var(--color-base)), 0.64), calc(var(--bar-width) * 4.8) 0 2px rgba(var(--shape4-color-base, var(--color-base)), 0.8), calc(var(--bar-width) * 6) 0 0.4px rgba(var(--shape5-color-base, var(--color-base)), 0), calc(var(--bar-width) * 7.2) 0 1.2px rgba(var(--shape6-color-base, var(--color-base)), 1);
  }
  88% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 7.6px rgba(var(--shape1-color-base, var(--color-base)), 0.24), calc(var(--bar-width) * 2.4) 0 6px rgba(var(--shape2-color-base, var(--color-base)), 0.4), calc(var(--bar-width) * 3.6) 0 4.4px rgba(var(--shape3-color-base, var(--color-base)), 0.56), calc(var(--bar-width) * 4.8) 0 2.8px rgba(var(--shape4-color-base, var(--color-base)), 0.72), calc(var(--bar-width) * 6) 0 1.2px rgba(var(--shape5-color-base, var(--color-base)), 1), calc(var(--bar-width) * 7.2) 0 0.4px rgba(var(--shape6-color-base, var(--color-base)), 0);
  }
  92% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 8.4px rgba(var(--shape1-color-base, var(--color-base)), 0.16), calc(var(--bar-width) * 2.4) 0 6.8px rgba(var(--shape2-color-base, var(--color-base)), 0.32), calc(var(--bar-width) * 3.6) 0 5.2px rgba(var(--shape3-color-base, var(--color-base)), 0.48), calc(var(--bar-width) * 4.8) 0 3.6px rgba(var(--shape4-color-base, var(--color-base)), 0.64), calc(var(--bar-width) * 6) 0 2px rgba(var(--shape5-color-base, var(--color-base)), 0.8), calc(var(--bar-width) * 7.2) 0 0.4px rgba(var(--shape6-color-base, var(--color-base)), 0);
  }
  96% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 9.2px rgba(var(--shape1-color-base, var(--color-base)), 0.08), calc(var(--bar-width) * 2.4) 0 7.6px rgba(var(--shape2-color-base, var(--color-base)), 0.24), calc(var(--bar-width) * 3.6) 0 6px rgba(var(--shape3-color-base, var(--color-base)), 0.4), calc(var(--bar-width) * 4.8) 0 4.4px rgba(var(--shape4-color-base, var(--color-base)), 0.56), calc(var(--bar-width) * 6) 0 2.8px rgba(var(--shape5-color-base, var(--color-base)), 0.72), calc(var(--bar-width) * 7.2) 0 1.2px rgba(var(--shape6-color-base, var(--color-base)), 1);
  }
  100% {
    box-shadow: calc(var(--bar-width) * 1.2) 0 10px rgba(var(--shape1-color-base, var(--color-base)), 0.135), calc(var(--bar-width) * 2.4) 0 8.4px rgba(var(--shape2-color-base, var(--color-base)), 0.16), calc(var(--bar-width) * 3.6) 0 6.8px rgba(var(--shape3-color-base, var(--color-base)), 0.32), calc(var(--bar-width) * 4.8) 0 5.2px rgba(var(--shape4-color-base, var(--color-base)), 0.48), calc(var(--bar-width) * 6) 0 3.6px rgba(var(--shape5-color-base, var(--color-base)), 0.64), calc(var(--bar-width) * 7.2) 0 2px rgba(var(--shape6-color-base, var(--color-base)), 0.8);
  }
}`);new nd("rgb(50, 205, 50)");xe(`.twist-bounding-box {
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: rgb(50, 205, 50);
}
.twist-bounding-box .twist-loader {
  width: 4em;
  perspective: 1000px;
  -webkit-animation: twistRotate360 4s linear infinite;
          animation: twistRotate360 4s linear infinite;
}
.twist-bounding-box .twist-loader .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: currentColor;
  margin-bottom: 0.1em;
  -webkit-animation: twistBlade 4s linear infinite, bgPlay 2s linear infinite;
          animation: twistBlade 4s linear infinite, bgPlay 2s linear infinite;
  opacity: 0;
  transition: opacity 400ms;
}
.twist-bounding-box .twist-loader .blade:nth-child(1) {
  -webkit-animation-delay: 0s;
          animation-delay: 0s;
}
.twist-bounding-box .twist-loader .blade:nth-child(2) {
  -webkit-animation-delay: 0.25s;
          animation-delay: 0.25s;
}
.twist-bounding-box .twist-loader .blade:nth-child(3) {
  -webkit-animation-delay: 0.5s;
          animation-delay: 0.5s;
}
.twist-bounding-box .twist-loader .blade:nth-child(4) {
  -webkit-animation-delay: 0.75s;
          animation-delay: 0.75s;
}
.twist-bounding-box .twist-loader .blade:nth-child(5) {
  -webkit-animation-delay: 1s;
          animation-delay: 1s;
}
.twist-bounding-box .twist-loader .blade:nth-child(6) {
  -webkit-animation-delay: 1.25s;
          animation-delay: 1.25s;
}
.twist-bounding-box .twist-loader .blade:nth-child(7) {
  -webkit-animation-delay: 1.5s;
          animation-delay: 1.5s;
}
.twist-bounding-box .twist-loader .blade:nth-child(8) {
  -webkit-animation-delay: 1.75s;
          animation-delay: 1.75s;
}
.twist-bounding-box .twist-text {
  color: currentColor;
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}

@-webkit-keyframes twistBlade {
  from {
    transform: rotateY(0deg) rotateX(-20deg);
  }
  to {
    transform: rotateY(360deg) rotateX(-20deg);
  }
}

@keyframes twistBlade {
  from {
    transform: rotateY(0deg) rotateX(-20deg);
  }
  to {
    transform: rotateY(360deg) rotateX(-20deg);
  }
}
@-webkit-keyframes bgPlay {
  0% {
    filter: brightness(1);
    opacity: 1;
  }
  50% {
    filter: brightness(0.59);
    opacity: 1;
  }
  51% {
    filter: opacity(0.5);
    opacity: 1;
  }
  70% {
    filter: opacity(0.7);
    opacity: 1;
  }
  100% {
    filter: brightness(1);
    opacity: 1;
  }
}
@keyframes bgPlay {
  0% {
    filter: brightness(1);
    opacity: 1;
  }
  50% {
    filter: brightness(0.59);
    opacity: 1;
  }
  51% {
    filter: opacity(0.5);
    opacity: 1;
  }
  70% {
    filter: opacity(0.7);
    opacity: 1;
  }
  100% {
    filter: brightness(1);
    opacity: 1;
  }
}
@-webkit-keyframes twistRotate360 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes twistRotate360 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`);xe(`.slab-bounding-box {
  font-size: 16px;
  color: rgb(50, 205, 50);
  position: relative;
  width: 7em;
  height: 4.7011417058em;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.slab-bounding-box .slab-text {
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  color: currentColor;
  font-size: 0.7em;
}
.slab-bounding-box .slab-loader {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  margin-bottom: -1.3em;
}
.slab-bounding-box .slab-loader .slab {
  position: absolute;
  width: 4em;
  height: 4em;
  background: currentColor;
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 50% 0%;
  -webkit-animation: slabMove 4s linear infinite;
  animation: slabMove 4s linear infinite;
}
.slab-bounding-box .slab-loader .slab:nth-child(1) {
  -webkit-animation-delay: 0s;
          animation-delay: 0s;
}
.slab-bounding-box .slab-loader .slab:nth-child(2) {
  -webkit-animation-delay: 1s;
          animation-delay: 1s;
}
.slab-bounding-box .slab-loader .slab:nth-child(3) {
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
}
.slab-bounding-box .slab-loader .slab:nth-child(4) {
  -webkit-animation-delay: 3s;
          animation-delay: 3s;
}

@-webkit-keyframes slabMove {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-48%);
    opacity: 1;
  }
  90% {
    transform: translateY(-422%);
    opacity: 0.1;
  }
  100% {
    transform: translateY(-480%);
    opacity: 0;
  }
}

@keyframes slabMove {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-48%);
    opacity: 1;
  }
  90% {
    transform: translateY(-422%);
    opacity: 0.1;
  }
  100% {
    transform: translateY(-480%);
    opacity: 0;
  }
}`);xe(`.pulse-bounding-box {
  font-size: 16px;
  isolation: isolate;
}
.pulse-bounding-box .pulse-loader {
  color: rgb(50, 205, 50);
  position: relative;
}
.pulse-bounding-box .pulse-loader .pulse-text {
  color: currentColor;
  mix-blend-mode: difference;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.pulse-bounding-box .pulse-loader svg.rli-pulse-svg {
  visibility: hidden;
}`);function Y0(){const[e,n]=Xn.useState([]),[r,t]=Xn.useState(!0),[o,a]=Xn.useState("");Xn.useEffect(()=>{t(!0),fetch("https://my-json-server.typicode.com/Federick2104/personaggi-lgbt-api/vg").then(u=>u.json()).then(u=>{n(u)}).finally(()=>t(!1))},[]);let l=e;if(r)return m.jsx("div",{className:"flex justify-center",children:m.jsx(T0,{style:{fontSize:"20px"},color:"pink"})});const i=u=>{u.preventDefault(),a(u.target.value)};let s=o?l.filter(u=>u.name.toLowerCase().includes(o.toLowerCase())):l;return m.jsxs(m.Fragment,{children:[m.jsxs("form",{className:"p-10",children:[m.jsx("label",{htmlFor:"default-search",className:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white",children:"Search"}),m.jsxs("div",{className:"relative",children:[m.jsx("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:m.jsx("svg",{"aria-hidden":"true",className:"w-5 h-5 text-gray-500 dark:text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),m.jsx("input",{type:"search",onChange:i,value:o,id:"default-search",className:"block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#4F45E4] focus:border-[#4F45E4] dark:bg-[#ebebec] dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-[#4F45E4] dark:focus:border-[#4F45E4]",placeholder:"Search champion, characters name...",required:!0})]})]}),m.jsx("div",{className:"p-10 grid grid-cols-4 gap-4 min-h-full",children:s.map(u=>m.jsxs("div",{className:"max-w-sm rounded overflow-hidden shadow-lg",children:[m.jsx("img",{className:"w-full",src:u.image,alt:"lgbt"}),m.jsxs("div",{className:"px-6 py-4",children:[m.jsx("div",{className:"font-bold text-xl mb-2",children:u.name}),m.jsx("p",{className:"text-gray-700 text-base",children:u.game}),m.jsx("p",{className:"text-gray-700 text-base",children:u.orientation})]}),m.jsxs("div",{className:"px-6 pt-4 pb-2",children:[m.jsx("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",children:"#gay"}),m.jsx("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",children:"#gay"}),m.jsx("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2",children:"#gay"})]})]},u.id))})]})}function W0(){return m.jsxs(m.Fragment,{children:[m.jsx(j0,{}),m.jsx(_0,{}),m.jsx(Y0,{}),m.jsx(P0,{})]})}Da.createRoot(document.getElementById("root")).render(m.jsx(j.StrictMode,{children:m.jsx(W0,{})}));
