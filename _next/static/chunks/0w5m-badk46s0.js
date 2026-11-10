(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,83790,86679,6010,28263,36951,1633,e=>{e.i(90422),e.i(18289),e.i(7150);var t=e.i(16597),i=e.i(81290),r=e.i(60416),s=e.i(3066);e.s([],83790),e.i(61069),e.s([],86679),e.i(61388),e.i(99984),e.s([],6010),e.s([],28263),e.s(["f",0,function(e){return t.forwardRef(function(o,a){let n=(0,s.f)(),[l,f]=(0,t.useState)(null),{vfxProps:h,domProps:c}=(0,r.r)(o);return(0,i.Y)(l,n,h),(0,t.useEffect)(()=>{if(!n||!l)return;let e=new MutationObserver(()=>n.update(l));return e.observe(l,{characterData:!0,attributes:!0,subtree:!0}),()=>e.disconnect()},[l,n]),t.createElement(e,{...c,ref:e=>{f(e),a instanceof Function?a(e):a&&(a.current=e)}})})}],36951),e.s([],1633)},52729,e=>{e.i(83790),e.i(99984),e.i(86679),e.i(6010),e.i(28263);var t=e.i(36951);e.i(1633),e.i(58786),e.i(59443),e.i(24979),e.i(41570),(0,t.f)("span"),(0,t.f)("div"),(0,t.f)("p"),e.s([],52729)},81290,60416,e=>{var t=e.i(16597);let i=["shader","release","uniforms","overlay","intersection","overflow","wrap","zIndex","backbuffer","autoCrop","glslVersion","effect"];e.s(["B",0,i,"r",0,function(e){let t={},r={};for(let s of Object.keys(e))i.includes(s)?t[s]=e[s]:r[s]=e[s];return{vfxProps:t,domProps:r}}],60416);let r=i.filter(e=>"effect"!==e);function s(){let e=Promise.resolve();return{enqueue(t){let i=e.then(t,t);return e=i.then(()=>{},()=>{}),i}}}async function o(e,t,i,s,o){let a=function(e,t){for(let i of r)if(e[i]!==t[i])return!1;return!0}(i,s);if(!a||i.effect!==s.effect){if(a&&void 0!==s.effect)return void await e.updateEffects(t,s.effect);e.remove(t),await o(t,s)}}e.s(["P",0,o,"$",0,s,"Y",0,function(e,i,r){let a=(0,t.useRef)(r);a.current=r;let n=(0,t.useRef)(null),l=(0,t.useRef)(null);(0,t.useEffect)(()=>{if(!i||!e)return;let t=l.current;null===t&&(l.current=t=s());let r=!1;return t.enqueue(async()=>{if(r)return;let t=a.current;try{await i.add(e,t),n.current=t}catch(e){console.error("[@vfx-js/react] add failed:",e)}}),()=>{r=!0,t.enqueue(()=>{i.remove(e),n.current=null})}},[e,i]),(0,t.useEffect)(()=>{if(!i||!e)return;let t=l.current;null===t&&(l.current=t=s()),t.enqueue(async()=>{let t=n.current;if(t&&t!==r)try{await o(i,e,t,r,(e,t)=>i.add(e,t)),n.current=r}catch(e){console.error("[@vfx-js/react] applyDelta failed:",e)}})},[i,e,r])}],81290)},58786,59443,e=>{var t=e.i(16597),i=e.i(76137),r=e.i(36180);e.s(["f",0,function(e){let s=(0,t.useContext)(r.f),o=(0,t.useRef)(e);(0,t.useLayoutEffect)(()=>s?s.register(o.current):void(0,i.R)("transition-in","[@vfx-js/react] useTransitionIn does nothing outside <VFXTransition>."),[s])}],58786),e.s([],59443)},41570,22305,e=>{var t=e.i(61069),i=e.i(16597),r=e.i(3066),s=e.i(54057),o=e.i(36180);let a=null;function n(){let e=null!==a&&Date.now()-a.at<=1e4?a:null;return a=null,e?e.spec:null}function l(e){a={spec:e,at:Date.now()}}e.s(["n",0,l,"i",0,n,"e",0,function(e){return t=>{(function(e){if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return!1;let t=e.currentTarget?.getAttribute?.("target");return!t||"_self"===t})(t)&&l(e)}}],22305);let f={display:"contents"},h={height:"100dvh",overflow:"hidden"};e.s(["f",0,function(e){let{pageKey:a,children:l,className:c,style:u,fullscreen:d=!0,...p}=e,m=(0,r.f)(),v=(0,s.f)(p),g=(0,i.useRef)(null),w=(0,i.useRef)(null),[x,y]=(0,i.useState)({key:a,node:l}),b=(0,i.useRef)(a),T=(0,i.useRef)([]),E=(0,i.useRef)(null),[M]=(0,i.useState)(()=>({register:e=>(E.current=e,()=>{E.current===e&&(E.current=null)})}));(0,i.useEffect)(()=>{let e=g.current;if(!m||!e)return;let t=m.addTransition(e,v);return w.current=t,()=>{t.destroy(),w.current=null}},[m,v]),(0,i.useLayoutEffect)(()=>{let e=T.current;for(let t of(T.current=[],e))t()},[x]),(0,i.useEffect)(()=>{if(a===b.current)return;b.current=a;let e={key:a,node:l},t=w.current;t&&void 0!==a?(E.current=null,t.run(()=>new Promise(t=>{b.current!==a?t():(T.current.push(t),(0,i.startTransition)(()=>y(e)))}),()=>n()??E.current??{}).catch(e=>{console.error("[@vfx-js/react] VFXTransition run failed:",e)})):(0,i.startTransition)(()=>y(e))});let S=(0,i.useRef)(x);S.current.key!==x.key&&(S.current=x),(void 0===a||a===x.key)&&(S.current={key:x.key,node:l});let k=S.current;return(0,t.jsx)("div",{style:f,children:(0,t.jsx)("div",{ref:g,className:c,style:d?{...h,...u}:u,children:(0,t.jsx)(o.f.Provider,{value:M,children:(0,t.jsx)(i.Fragment,{children:k.node},k.key)})})})}],41570)},54057,e=>{var t=e.i(16597);e.s(["f",0,function(e){let i=(0,t.useRef)({}).current;for(let t of Object.keys(i))t in e||delete i[t];return Object.assign(i,e),i}])},36180,e=>{let t=(0,e.i(16597).createContext)(null);e.s(["f",0,t])},24979,e=>{var t=e.i(16597),i=e.i(3066),r=e.i(54057);e.s(["f",0,function(e={}){let s=(0,i.f)(),o=(0,r.f)(e),[a,n]=(0,t.useState)(null),l=(0,t.useRef)(null),[f,h]=(0,t.useTransition)(),c=(0,t.useRef)(!1),u=(0,t.useRef)([]);(0,t.useEffect)(()=>{if(!s||!a)return;let e=s.addTransition(a,o);return l.current=e,()=>{e.destroy(),l.current=null}},[s,a,o]),(0,t.useLayoutEffect)(()=>{if(f){c.current=!0;return}if(c.current){c.current=!1;let e=u.current;for(let t of(u.current=[],e))t()}},[f]);let d=(0,t.useCallback)(e=>new Promise(t=>{u.current.push(t),c.current=!1,h(e),requestAnimationFrame(()=>{c.current||t()})}),[]);return{ref:n,run:(0,t.useCallback)(async(e,t)=>{let i=l.current;i?await i.run(()=>d(e),t):await d(e)},[d])}}])},3066,99984,76137,e=>{var t=e.i(16597);let i=(0,t.createContext)(null),r=(0,t.createContext)(!1);e.s(["i",0,i,"V",0,r],99984),e.i(90422);var s=e.i(61388);let o=["pixelRatio","zIndex","postEffect","autoplay"],a=null,n={},l=0,f=!1,h=!1,c=[],u=new Set;function d(){for(let e of u)e()}function p(){a&&(a.stop(),a.destroy(),a=null)}function m(){var e;if(h=!1,0===l||f)return;let t=c[c.length-1]?.config??{};a&&(e=n,o.every(i=>t[i]===e[i]))||(p(),n=t,f=null===(a=s.f.init({...t})),d())}function v(){l++,h||(h=!0,queueMicrotask(m))}function g(){--l>0||requestAnimationFrame(()=>{l>0||(p(),d())})}function w(e){return u.add(e),()=>u.delete(e)}function x(){return a}let y=new Set;e.s(["Y",0,v,"S",0,x,"z",0,g,"i",0,w,"R",0,function(e,t){y.has(e)||(y.add(e),console.warn(t))}],76137);let b=()=>null,T=()=>()=>{};e.s(["f",0,function({acquire:e=!0}={}){let s=(0,t.useContext)(r),o=(0,t.useContext)(i),a=(0,t.useSyncExternalStore)(s?T:w,x,b);return(0,t.useEffect)(()=>{if(!s&&e)return v(),g},[s,e]),s?o:a}],3066)},90422,28113,63363,18289,7150,61388,75682,28317,96210,66864,84177,166,57888,35668,97394,81651,18013,26873,76359,27202,99050,1656,10303,e=>{let t,i,r=`#version 300 es
precision highp float;
in vec2 uvContent;
out vec4 outColor;
uniform sampler2D from;
uniform sampler2D src;
uniform vec4 srcRectUv;
uniform float t;
uniform float reverse;
uniform vec2 resolution;
uniform float time;

bool inRange(vec2 p) {
  return all(greaterThanEqual(p, vec2(0.0))) && all(lessThanEqual(p, vec2(1.0)));
}
vec4 premultiply(vec4 c) {
  return vec4(c.rgb * c.a, c.a);
}
vec4 readFrom(vec2 p) {
  if (!inRange(p)) return vec4(0.0);
  return premultiply(reverse > 0.5 ? texture(src, srcRectUv.xy + p * srcRectUv.zw) : texture(from, p));
}
vec4 readTo(vec2 p) {
  if (!inRange(p)) return vec4(0.0);
  return premultiply(reverse > 0.5 ? texture(from, p) : texture(src, srcRectUv.xy + p * srcRectUv.zw));
}
`,s=`
void main() {
  outColor = transition(uvContent, reverse > 0.5 ? 1.0 - t : t);
}
`,o=r.split("\n").length;var a,n,l,f,h,c,u,d,p,m,v,g,w,x,y,b,T,E,M,S,k,R,C,P,W,A,F,z,_,U,B,I,L,V,O,D,N,$,H,X,j,G,q,J,K,Y,Q,Z,ee,et,ei,er,es,eo,ea,en,el,ef,eh,ec,eu,ed,ep,em,ev,eg,ew,ex,ey,eb,eT,eE,eM,eS,ek,eR,eC,eP,eW,eA,eF,ez,e_,eU,eB,eI,eL,eV,eO,eD,eN,e$,eH,eX,ej,eG,eq,eJ,eK,eY,eQ,eZ,e0,e1,e2,e4,e3,e5,e6,e8,e9,e7,te,tt,ti,tr,ts,to,ta,tn,tl,tf,th,tc,tu,td,tp,tm,tv,tg,tw,tx,ty,tb,tT,tE,tM,tS,tk,tR,tC,tP,tW,tA,tF,tz,t_,tU,tB,tI,tL,tV,tO,tD,tN,t$,tH,tX,tj,tG,tq,tJ,tK,tY,tQ,tZ,t0,t1,t2,t4,t3,t5,t6,t8,t9,t7,ie,it,ii,ir,is,io,ia,il,ih,ic,iu,id,ip,im,iv,ig,iw,ix,iy,ib,iT,iE,iM,iS,ik,iR,iC,iP,iW,iA,iF,iz,i_,iU,iB,iI,iL,iV,iO,iD,iN,i$,iH,iX,ij,iG,iq,iJ,iK,iY,iQ,iZ,i0,i1,i2,i4,i3,i5,i6,i8,i9,i7,re,rt,ri,rr,rs,ro,ra,rn,rl,rf,rh,rc,ru,rd,rp,rm,rv,rg,rw,rx,ry,rb,rT,rE,rM,rS,rk,rR,rC,rP,rW,rA,rF,rz,r_,rU,rB,rI,rL,rV,rO,rD,rN,r$,rH,rX,rj,rG,rq,rJ,rK,rY,rQ,rZ,r0,r1,r2,r4,r3,r5,r6,r8,r9,r7,se,st,si,sr,ss,so,sa=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},sn=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let sl=new Map,sf=new WeakMap;class sh{constructor(e={}){a.set(this,null),this.params=e}uniforms(e){return{}}start(e){sa(this,a,e,"f")}end(){sa(this,a,null,"f")}outputRect(e){let t=sn(this,a,"f")?.overflow??this.overflow;if(void 0===t||function(e,t){let[i,r,s,o]=e,[a,n,l,f]=t;return i<=a&&r<=n&&i+s>=a+l&&r+o>=n+f}(e.contentRect,e.canvasRect))return;if(!0===t)return e.canvasRect;let i=t*e.pixelRatio,[r,s,o,n]=e.contentRect;return[r-i,s-i,o+2*i,n+2*i]}render(e){var t,i;let a;if(e.holding)return void e.blit(e.src);let n=function(e){let t=sl.get(e);void 0===t&&(t=`${r}
${e}
${s}`,sl.set(e,t));return t}(this.frag),l=(t=e.gl,(a=sf.get(t))||(a=new Set,sf.set(t,a)),a);if(l.has(n)){e.cut(),e.blit(e.src);return}try{e.draw({frag:n,uniforms:{...this.uniforms(e),from:e.from,src:e.src,t:e.progress.t,reverse:+!!e.reverse,resolution:[e.dims.elementPixel[0],e.dims.elementPixel[1]],time:e.time},target:e.target})}catch(r){let t;l.add(n),i=this.name,(t=function(e){let t=e instanceof Error?e.message:String(e);if(!/compile failed|link failed/i.test(t))return null;let i=[];for(let e of t.matchAll(/ERROR:\s*\d+:(\d+):\s*(.*)/g)){let t=Number(e[1])-o;i.push(t>=1?`line ${t}: ${e[2]}`:e[2])}return i.length>0?i:[t.split("\n")[0]]}(r))?(console.error(`[VFX-JS] transition "${i}" failed to compile; cutting to the new content.
  ${t.join("\n  ")}`),console.debug(r)):console.error(`[VFX-JS] transition "${i}" failed; cutting to the new content.`,r),e.cut(),e.blit(e.src)}}}a=new WeakMap,e.s(["f",0,sh],28113);class sc extends sh{constructor(){super(...arguments),this.name="crossfade",this.frag=`
vec4 transition(vec2 uv, float t) {
  return mix(readFrom(uv), readTo(uv), t);
}
`}}function su(e){return"CANVAS"===e.tagName&&(e.hasAttribute("layoutsubtree")||"drawable"===e.getAttribute("content"))}function sd(e,t){e.setAttribute("layoutsubtree",""),e.setAttribute("content","drawable"),t?.setAttribute("drawable","")}function sp(e){return e.currentSrc||e.src}function sm(e,t){let i=e.getBoundingClientRect(),r=getComputedStyle(e);t.className=e.className,t.style.cssText=e.style.cssText,t.style.width=`${i.width}px`,t.style.height=`${i.height}px`,t.style.display="inline"===r.display?"inline-block":r.display,t.style.boxSizing="border-box"}async function sv(e){let t=await fetch(e),i=await t.blob();return URL.createObjectURL(i)}async function sg(e){let t=Array.from(e.querySelectorAll("img")).filter(e=>e.complete&&e.naturalWidth>0&&function(e){let t=sp(e);if(!t||t.startsWith("data:"))return!1;try{return new URL(t,location.href).origin!==location.origin}catch{return!1}}(e));if(0===t.length)return()=>{};let i=new Map,r=[];return await Promise.all(t.map(async e=>{try{let t=sp(e),s=await sv(t);i.set(e,t),r.push(s),await new Promise(t=>{e.addEventListener("load",()=>t(),{once:!0}),e.src=s})}catch{}})),()=>{for(let[e,t]of i)e.src=t;for(let e of r)URL.revokeObjectURL(e)}}e.s(["f",0,sc],63363);let sw=["margin-top","margin-right","margin-bottom","margin-left"],sx=new Set(["IMG","VIDEO","CANVAS","IFRAME","EMBED","OBJECT","INPUT","TEXTAREA","SELECT"]),sy=["position","top","right","bottom","left","float","flex","flex-grow","flex-shrink","flex-basis","align-self","justify-self","place-self","order","grid-column","grid-column-start","grid-column-end","grid-row","grid-row-start","grid-row-end","grid-area"],sb=new WeakMap,sT=new WeakMap,sE=new WeakMap,sM=new WeakMap,sS=new WeakMap,sk=new WeakMap,sR=new WeakMap,sC=new WeakMap,sP=new WeakMap,sW=new WeakSet,sA=new WeakMap,sF=new WeakMap,sz=new WeakSet,s_=new WeakSet;function sU(e){if(e)for(let t of[...e])t()}function sB(e,t,i){if("function"==typeof e.moveBefore)try{e.moveBefore(t,i);return}catch{}e.insertBefore(t,i)}function sI(e,t=300){let i=sF.get(e);if(!i)return;let r=new Promise(e=>{let r=t=>{clearTimeout(o),i.delete(s),e(t)},s=()=>r(!0),o=setTimeout(()=>r(!1),t);i.add(s)});return e.requestPaint(),r}function sL(e){if(sz.has(e))return()=>{};sz.add(e);let{width:t,height:i,overflow:r}=e.style,s=e.getBoundingClientRect();return e.style.setProperty("width",`${s.width}px`),e.style.setProperty("height",`${s.height}px`),e.style.setProperty("overflow","hidden"),()=>{if(!sz.has(e))return;sz.delete(e),e.style.width=t,e.style.height=i,e.style.overflow=r;let s=e.firstElementChild;if(s&&!s_.has(e)){let t=Math.round(s.getBoundingClientRect().height);e.style.setProperty("height",`${t}px`)}}}function sV(e){sA.get(e)?.(),sA.delete(e)}function sO(e,t=!1){requestAnimationFrame(()=>{t||e.getContext("2d")?.clearRect(0,0,e.width,e.height),sV(e)})}async function sD(e,t){sd(e,e.firstElementChild);let i=e.getContext("2d");if(!i)throw Error("Failed to get 2d context from layoutsubtree canvas");let{onCapture:r,maxSize:s}=t,o=new Set;sF.set(e,o);let a=null,n=null,l=new Promise(e=>{n=e}),f=null,h=t=>{if(t){if(t===f)return;f=t}let l=e.firstElementChild;if(!l||0===e.width||0===e.height||0===l.getClientRects().length)return;l.hasAttribute("drawable")||l.setAttribute("drawable",""),i.clearRect(0,0,e.width,e.height),i.drawElementImage(l,0,0),function(e,t){let i=t.querySelectorAll("canvas");if(0===i.length)return;let r=t.getBoundingClientRect();if(r.width<=0||r.height<=0)return;let s=e.canvas.width/r.width,o=e.canvas.height/r.height;for(let t of i){if(0===t.width||0===t.height||!("function"==typeof t.checkVisibility?t.checkVisibility({visibilityProperty:!0,opacityProperty:!0}):"hidden"!==getComputedStyle(t).visibility))continue;let i=function(e,t,i,r){if(t.width<=0||t.height<=0)return null;let s=t.left-e.left,o=t.top-e.top;return s+t.width<=0||o+t.height<=0||s>=e.width||o>=e.height?null:[s*i,o*r,t.width*i,t.height*r]}(r,function(e){let t=e.getBoundingClientRect(),i=getComputedStyle(e),r=Number.parseFloat(i.paddingLeft)||0,s=Number.parseFloat(i.paddingRight)||0,o=Number.parseFloat(i.paddingTop)||0,a=Number.parseFloat(i.paddingBottom)||0,n=e.clientWidth>0?t.width/e.offsetWidth:1,l=e.clientHeight>0?t.height/e.offsetHeight:1;return{left:t.left+(e.clientLeft+r)*n,top:t.top+(e.clientTop+o)*l,width:Math.max(0,e.clientWidth-r-s)*n,height:Math.max(0,e.clientHeight-o-a)*l}}(t),s,o);if(i)try{e.drawImage(t,...i)}catch{}}}(i,l);let h=e.width,c=e.height;if(s&&(h>s||c>s)){let e=Math.min(s/h,s/c);h=Math.floor(h*e),c=Math.floor(c*e)}a&&a.width===h&&a.height===c||(a=new OffscreenCanvas(h,c));let u=a.getContext("2d");if(u){if(u.clearRect(0,0,h,c),u.drawImage(e,0,0,h,c),n){n(a),n=null,sU(o);return}i.clearRect(0,0,e.width,e.height),r(a),sU(o)}};e.onpaint=h,e.addEventListener("paint",h),sT.set(e,h);let c=new ResizeObserver(t=>{for(let i of t){let t=i.devicePixelContentBoxSize?.[0];if(t)e.width=t.inlineSize,e.height=t.blockSize;else{let t=i.borderBoxSize?.[0];if(t){let i=window.devicePixelRatio;e.width=Math.round(t.inlineSize*i),e.height=Math.round(t.blockSize*i)}}}e.requestPaint()});c.observe(e,{box:"device-pixel-content-box"}),sb.set(e,c);let u=e.firstElementChild;if(u){let t=new ResizeObserver(t=>{if(sz.has(e)||s_.has(e))return;let i=t[0].borderBoxSize?.[0];if(!i)return;let r=`${Math.round(i.blockSize)}px`;r!==e.style.height&&e.style.setProperty("height",r)});t.observe(u),sE.set(e,t)}return l}function sN(e){e.onpaint=null,sU(sF.get(e)),sF.delete(e);let t=sT.get(e);t&&(e.removeEventListener("paint",t),sT.delete(e));let i=sb.get(e);i&&(i.disconnect(),sb.delete(e));let r=sE.get(e);r&&(r.disconnect(),sE.delete(e))}async function s$(e,t){let i=e.getBoundingClientRect(),r=function(e){let t={width:null,height:null};if("function"!=typeof e.computedStyleMap||sx.has(e.tagName))return t;let i=e.computedStyleMap(),r=e=>i.get(e)?.toString()??"auto",s=r("position");if("fixed"!==s&&"absolute"!==s)return t;let o=(t,i,s)=>{let o=r(i),a=r(s);if("auto"!==r(t)||"auto"===o||"auto"===a)return null;let n=[`margin-${i}`,`margin-${s}`].map(i=>{let s=r(i);return"height"===t&&s.includes("%")?getComputedStyle(e).getPropertyValue(i):s}).filter(e=>"auto"!==e);return`calc(${["100%",o,a,...n].join(" - ")})`};return{width:o("width","left","right"),height:o("height","top","bottom")}}(e),s=document.createElement("canvas");e.hasAttribute("drawable")||sW.add(e),sd(s,e),s.className=e.className;let o=e.getAttribute("style");o&&s.setAttribute("style",o),s.style.setProperty("padding","0"),s.style.setProperty("border","none"),s.style.setProperty("box-sizing","content-box"),s.style.setProperty("background","transparent");let a=getComputedStyle(e),n="inline"===a.display?"block":a.display;for(let e of(s.style.setProperty("display",n),sw))s.style.setProperty(e,a.getPropertyValue(e));for(let e of sy)s.style.setProperty(e,a.getPropertyValue(e));if(r.width)s.style.setProperty("width",r.width);else e.style.width.endsWith("px")||sx.has(e.tagName)&&"function"==typeof e.computedStyleMap&&e.computedStyleMap().get("width")?.toString()==="auto"?s.style.setProperty("width",`${i.width}px`):s.style.setProperty("width","100%");r.height?(s.style.setProperty("height",r.height),s_.add(s)):s.style.height||s.style.setProperty("height",`${i.height}px`);let l=window.devicePixelRatio;s.width=Math.round(i.width*l),s.height=Math.round(i.height*l),t.stillCover&&sA.set(s,function(e,t){let i=e.getBoundingClientRect(),r=e.cloneNode(!0),s=[e,...e.querySelectorAll("*")],o=[r,...r.querySelectorAll("*")],a=[],n=[];for(let e=0;e<s.length&&e<o.length;e++){let t=s[e],i=o[e];(t.scrollTop||t.scrollLeft)&&a.push([i,t.scrollTop,t.scrollLeft]),t instanceof HTMLScriptElement?n.push([i,document.createComment("script")]):t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?n.push([i,function(e){let t=document.createElement("canvas"),i=e instanceof HTMLVideoElement?e.videoWidth:e.width,r=e instanceof HTMLVideoElement?e.videoHeight:e.height;t.width=Math.max(1,i),t.height=Math.max(1,r),sm(e,t);try{t.getContext("2d")?.drawImage(e,0,0,t.width,t.height)}catch{}return t}(t)]):t instanceof HTMLIFrameElement?n.push([i,function(e){let t=document.createElement("div");return sm(e,t),t}(t)]):t instanceof HTMLInputElement&&i instanceof HTMLInputElement?(i.value=t.value,i.checked=t.checked):t instanceof HTMLTextAreaElement&&i instanceof HTMLTextAreaElement?i.value=t.value:t instanceof HTMLSelectElement&&i instanceof HTMLSelectElement?i.selectedIndex=t.selectedIndex:t instanceof HTMLMediaElement&&i.removeAttribute("autoplay")}for(let[e,t]of n)e.replaceWith(t);r.setAttribute("aria-hidden","true");let l=r.style;l.setProperty("position","fixed"),l.setProperty("left",`${i.left}px`),l.setProperty("top",`${i.top}px`),l.setProperty("width",`${i.width}px`),l.setProperty("height",`${i.height}px`),l.setProperty("box-sizing","border-box"),l.setProperty("margin","0"),l.setProperty("pointer-events","none"),l.setProperty("z-index",t.toString()),e.parentNode?.insertBefore(r,e);let f=r.getBoundingClientRect();for(let[e,t,r]of((f.left!==i.left||f.top!==i.top)&&(l.setProperty("left",`${2*i.left-f.left}px`),l.setProperty("top",`${2*i.top-f.top}px`)),a))e.scrollTop=t,e.scrollLeft=r;return function(e,t){let i=e[0],r=t[0];if(!i||!r||"function"!=typeof i.getAnimations)return;let s=(e,t)=>{if(!("animationName"in e))return null;let i=e.effect,r=i?.target,s=r?t.get(r):void 0;return void 0===s?null:`${s}|${i?.pseudoElement??""}|${e.animationName}`},o=new Map(t.map((e,t)=>[e,t])),a=new Map;for(let e of r.getAnimations({subtree:!0})){let t=s(e,o);t&&a.set(t,e)}let n=new Map(e.map((e,t)=>[e,t]));for(let e of i.getAnimations({subtree:!0})){let t=s(e,n),i=t&&a.get(t);i&&(i.currentTime=e.currentTime,i.pause())}}(s,o),()=>{r.remove()}}(e,t.stillCover.zIndex)),sM.set(e,e.style.margin),sS.set(e,e.style.width),sk.set(e,e.style.boxSizing),e.parentNode?.insertBefore(s,e),getComputedStyle(s).display,sB(s,e,null),e.style.setProperty("margin","0"),e.style.setProperty("width","100%"),e.style.setProperty("box-sizing","border-box"),(r.width||r.height)&&(sR.set(e,e.style.position),e.style.setProperty("position","static")),r.height&&(sC.set(e,e.style.height),e.style.setProperty("height","100%"));let f=await sg(e);sP.set(s,f);let h=await sD(s,t);return{canvas:s,initialCapture:h}}function sH(e,t){sN(e),sV(e);let i=sP.get(e);i&&(i(),sP.delete(e));let r=e.parentNode;r&&sB(r,t,e),e.remove(),sW.has(t)&&(t.removeAttribute("drawable"),sW.delete(t));let s=sM.get(t);void 0!==s&&(t.style.margin=s,sM.delete(t));let o=sS.get(t);void 0!==o&&(t.style.width=o,sS.delete(t));let a=sk.get(t);void 0!==a&&(t.style.boxSizing=a,sk.delete(t));let n=sR.get(t);void 0!==n&&(t.style.position=n,sR.delete(t));let l=sC.get(t);void 0!==l&&(t.style.height=l,sC.delete(t))}function sX(){if(void 0!==t)return t;try{let e=document.createElement("canvas"),i=e.getContext("2d");t=null!==i&&"function"==typeof i.drawElementImage&&"function"==typeof e.requestPaint}catch{t=!1}return t}e.s(["i",0,sL,"n",0,sO,"a",0,sI,"S",0,sD,"F",0,sN,"Y",0,sH,"c",0,s$],18289),e.s(["f",0,sX],7150);var sj=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)},sG=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i};let sq={t:0,x:0};class sJ{constructor(){n.add(this),this.enabled=!1,l.set(this,null),f.set(this,[0,0]),h.set(this,[]),c.set(this,!1),u.set(this,null),d.set(this,null),p.set(this,sq),m.set(this,null),v.set(this,null)}snapshot(){return sj(this,n,"m",g).call(this),sG(this,u,null,"f"),this.enabled=!0,new Promise(e=>sj(this,h,"f").push(e))}start(e){return sj(this,n,"m",g).call(this),sG(this,u,e,"f"),sG(this,v,e.onEnd??null,"f"),sG(this,d,null,"f"),sG(this,p,sq,"f"),sG(this,c,!1,"f"),this.enabled=!1,new Promise(e=>{sG(this,m,e,"f")})}cancel(){sj(this,n,"m",g).call(this),sG(this,u,null,"f"),sG(this,c,!1,"f"),this.enabled=!1,sj(this,n,"m",w).call(this)}get frame(){let e=sj(this,l,"f");return e&&(sj(this,c,"f")||sj(this,u,"f"))?{from:e,progress:sj(this,p,"f"),holding:null===sj(this,u,"f")}:null}cut(){sj(this,u,"f")&&(sG(this,u,null,"f"),sj(this,n,"m",g).call(this))}update(e){let t=sj(this,u,"f");if(!t)return;null===sj(this,d,"f")&&sG(this,d,e.time,"f");let i=(e.time-sj(this,d,"f"))/t.duration;if(i>=1){sG(this,u,null,"f"),sj(this,n,"m",g).call(this);return}let r=Math.max(i,0);sG(this,p,{t:function(e,t){return"function"==typeof e?e(t):"linear"===e?t:t*t*(3-2*t)}(t.ease,r),x:r},"f")}render(e){(sj(this,h,"f").length>0&&(e.blit(e.src,sj(this,n,"m",x).call(this,e)),sG(this,c,!0,"f"),sj(this,n,"m",w).call(this)),sj(this,l,"f")&&sj(this,c,"f"))?e.blit(sj(this,l,"f")):(this.enabled=!1,e.blit(e.src))}dispose(){sG(this,l,null,"f"),sG(this,f,[0,0],"f"),sj(this,n,"m",g).call(this),sj(this,n,"m",w).call(this)}}l=new WeakMap,f=new WeakMap,h=new WeakMap,c=new WeakMap,u=new WeakMap,d=new WeakMap,p=new WeakMap,m=new WeakMap,v=new WeakMap,n=new WeakSet,g=function(){let e=sj(this,v,"f");sG(this,v,null,"f"),e?.();let t=sj(this,m,"f");sG(this,m,null,"f"),t?.()},w=function(){let e=sj(this,h,"f");for(let t of(sG(this,h,[],"f"),e))t()},x=function(e){let[t,i]=e.dims.elementPixel;return sj(this,l,"f")&&sj(this,f,"f")[0]===t&&sj(this,f,"f")[1]===i||(sj(this,l,"f")?.dispose(),sG(this,l,e.createRenderTarget({size:[t,i]}),"f"),sG(this,f,[t,i],"f")),sj(this,l,"f")};class sK{constructor(e,t){y.add(this),b.set(this,void 0),T.set(this,null),this.effect=e,sG(this,b,t,"f")}get enabled(){return null!==sj(this,T,"f")&&"function"==typeof this.effect.render&&!1!==this.effect.enabled}start(e){sG(this,T,e,"f"),this.effect.start?.(e)}end(){null!==sj(this,T,"f")&&(sG(this,T,null,"f"),this.effect.end?.())}init(e){return this.effect.init?.(e)}update(e){let t=sj(this,b,"f").frame;if(!t||t.holding)return;let i=sj(this,y,"m",E).call(this,e);i&&this.effect.update?.(i)}render(e){let t=sj(this,y,"m",E).call(this,e);t&&this.effect.render?this.effect.render(t):e.blit(e.src)}outputRect(e){return sj(this,T,"f")?this.effect.outputRect?.(e):void 0}dispose(){this.effect.dispose?.()}}b=new WeakMap,T=new WeakMap,y=new WeakSet,E=function(e){let t=sj(this,b,"f").frame,i=sj(this,T,"f");return t&&i?{...e,from:t.from,progress:t.progress,holding:t.holding,reverse:i.reverse,run:i,cut:()=>sj(this,b,"f").cut()}:null};let sY=function(e=function(){let e=globalThis.navigation,t=e?.currentEntry;if(t&&!(t.index<0)&&t.key)return{index:t.index,key:t.key}}){let t,i=new Map;return{pick(r){let s=e();if(!s)return r;let o=t??s;t=s;let a=i.get(o.key);if(s.index<o.index&&a)return{...a,reverse:!0};let n=i.get(s.key);return s.index>o.index&&n?n:(i.set(s.key,r),r)}}}();var sQ=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},sZ=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};function s0(e,t){let i=void 0!==t.transition?t.params:void 0===e.params&&void 0===t.params?void 0:{...e.params,...t.params};return{transition:t.transition??e.transition,params:i,reverse:t.reverse??e.reverse,duration:t.duration??e.duration,overflow:t.overflow??e.overflow,ease:t.ease??e.ease}}function s1(e,t={}){let i=s0(e,t);return{transition:i.transition??sc,params:i.params,reverse:i.reverse??!1,duration:i.duration??.6,overflow:i.overflow,ease:i.ease}}let s2=new WeakMap;function s4(e,t){return new Promise((i,r)=>{let s=setTimeout(()=>i(!1),t);e.then(()=>{clearTimeout(s),i(!0)},e=>{clearTimeout(s),r(e)})})}class s3{constructor(e,t,r={},s,o=new sJ,a=sY,n=function(){var e,t;let r,s,o;return i??(e=globalThis.navigation,t=window,s=0,e?.addEventListener("navigate",e=>{if("replace"===e.navigationType)return;let t=e.hasUAVisualTransition&&e.destination?.key;r=t?{id:++s,key:t}:void 0}),!e&&t&&t.addEventListener("popstate",e=>{r=e.hasUAVisualTransition?{id:++s,href:t.location.href}:void 0},!0),o=()=>{r=void 0},t?.addEventListener("pointerdown",o,!0),t?.addEventListener("keydown",o,!0),i={current(){if(r)return(r.key?e?.currentEntry?.key===r.key:t?.location.href===r.href)?r.id:void 0}}),i}()){M.add(this),S.set(this,void 0),k.set(this,void 0),R.set(this,void 0),C.set(this,void 0),P.set(this,void 0),W.set(this,void 0),A.set(this,void 0),F.set(this,void 0),z.set(this,void 0),_.set(this,[]),U.set(this,[]),B.set(this,!1),I.set(this,!1),L.set(this,!1),V.set(this,0),O.set(this,null),D.set(this,!1),N.set(this,!1),$.set(this,null),H.set(this,[]),X.set(this,null),j.set(this,null),G.set(this,null),sQ(this,z,s,"f"),sQ(this,S,e,"f"),sQ(this,k,t,"f"),sQ(this,R,r,"f"),sQ(this,C,o,"f"),sQ(this,P,a,"f"),sQ(this,W,n,"f"),sQ(this,F,r.keepWrapped??!1,"f")}get running(){return null!==sZ(this,O,"f")}show(e,t={}){let i=sZ(this,M,"m",q).call(this,e),{remove:r=!1,...s}=t;if(!this.running&&sZ(this,M,"m",J).call(this,i))return Promise.resolve();let o=sZ(this,R,"f").slideSpec?.(i),a=o?s0(o,s):s;return sZ(this,M,"m",K).call(this,()=>{for(let e of(i.parentElement!==sZ(this,k,"f")&&sZ(this,k,"f").append(i),Array.from(sZ(this,k,"f").children)))e!==i&&(r?e.remove():e.hidden=!0);i.hidden=!1},a)}run(e,t={}){let i=sZ(this,D,"f")?void 0:sZ(this,W,"f").current();return void 0!==i&&i!==sZ(this,A,"f")?(sQ(this,A,i,"f"),sZ(this,M,"m",K).call(this,async()=>{await e();let i="function"==typeof t?t():t;sZ(this,R,"f").autoReverse&&sZ(this,P,"f").pick(i)},{duration:0})):sZ(this,R,"f").autoReverse?sZ(this,M,"m",K).call(this,e,()=>sZ(this,P,"f").pick("function"==typeof t?t():t)):sZ(this,M,"m",K).call(this,e,t)}cancel(){var e;let t=sQ(this,V,(e=sZ(this,V,"f"),++e),"f");sQ(this,O,null,"f"),sZ(this,M,"m",en).call(this),sZ(this,C,"f").cancel(),sZ(this,M,"m",eo).call(this),sZ(this,M,"m",es).call(this),sZ(this,M,"m",ee).call(this),sZ(this,M,"m",ef).call(this,t)}destroy(){sZ(this,D,"f")||(sQ(this,D,!0,"f"),this.cancel(),sQ(this,X,null,"f"),sZ(this,z,"f")?.call(this))}}S=new WeakMap,k=new WeakMap,R=new WeakMap,C=new WeakMap,P=new WeakMap,W=new WeakMap,A=new WeakMap,F=new WeakMap,z=new WeakMap,_=new WeakMap,U=new WeakMap,B=new WeakMap,I=new WeakMap,L=new WeakMap,V=new WeakMap,O=new WeakMap,D=new WeakMap,N=new WeakMap,$=new WeakMap,H=new WeakMap,X=new WeakMap,j=new WeakMap,G=new WeakMap,M=new WeakSet,q=function(e){let t=sZ(this,k,"f"),i="number"==typeof e?t.children[e]:"string"==typeof e?t.querySelector(e):e;if(!i)throw TypeError(`[VFX-JS] show(): no slide for ${e}.`);if(i.parentElement!==t&&(i.isConnected||t.contains(i)))throw TypeError("[VFX-JS] show(): the slide must be a direct child of the container.");return i},J=function(e){return e.parentElement===sZ(this,k,"f")&&!e.hidden&&Array.from(sZ(this,k,"f").children).every(t=>t===e||t.hidden)},K=async function(e,t){var i;if(sZ(this,D,"f"))return void await e();let r=sQ(this,V,(i=sZ(this,V,"f"),++i),"f");sQ(this,O,r,"f");try{await sZ(this,M,"m",Y).call(this,r,e,t)}finally{sZ(this,O,"f")===r&&sQ(this,O,null,"f"),sZ(this,V,"f")===r&&(sZ(this,M,"m",eo).call(this),sZ(this,M,"m",es).call(this),sZ(this,M,"m",ee).call(this))}},Y=async function(e,t,i){let r,s=()=>e===sZ(this,V,"f"),o=!1,a=async()=>{o||(o=!0,await t())};if(sZ(this,S,"f").reducedMotion){await a(),"function"==typeof i&&i();return}let n=async()=>{sZ(this,M,"m",en).call(this),sZ(this,C,"f").cancel(),await a(),s()&&(sZ(this,N,"f")&&sZ(this,F,"f")&&await sZ(this,S,"f").update(sZ(this,k,"f")),sZ(this,M,"m",ef).call(this,e))},l=null;if("function"!=typeof i){if(l=sZ(this,M,"m",Q).call(this,s1(sZ(this,R,"f"),i)),!s())return a();if(null===l)return n()}sZ(this,M,"m",er).call(this);try{await sZ(this,M,"m",el).call(this,l?.slots??null,s,!0)}catch(e){return console.error("[VFX-JS] transition failed to wrap the element; cutting to the new content.",e),a()}if(!s())return a();sZ(this,U,"f").push(sZ(this,S,"f").lockSize(sZ(this,k,"f"))),sZ(this,U,"f").push(sZ(this,S,"f").forceRender(sZ(this,k,"f")));let f=await s4(sZ(this,C,"f").snapshot(),1e3);if(!s())return a();if(!f){sZ(this,M,"m",ei).call(this),await a(),s()&&sZ(this,M,"m",ef).call(this,e);return}l&&sZ(this,M,"m",et).call(this,e,l);try{await a(),"function"==typeof i&&s()&&(r=i())}catch(t){throw s()&&(sZ(this,M,"m",en).call(this),sZ(this,C,"f").cancel(),sZ(this,M,"m",ef).call(this,e)),t}if(!s())return;if(null===l){if(l=sZ(this,M,"m",Q).call(this,s1(sZ(this,R,"f"),r)),!s())return;if(null===l)return n();try{await sZ(this,M,"m",el).call(this,l.slots,s,!1)}catch(e){return console.error("[VFX-JS] transition failed to swap the effects; cutting to the new content.",e),n()}if(!s())return;sZ(this,M,"m",et).call(this,e,l)}sZ(this,M,"m",er).call(this);try{await sZ(this,M,"m",eh).call(this)}catch(e){console.error("[VFX-JS] transition waitFor failed:",e)}if(!s()||(await sZ(this,S,"f").updateInTime(sZ(this,k,"f"))||sZ(this,I,"f")||(sQ(this,I,!0,"f"),console.warn("[VFX-JS] transition: the new content was not captured in time; it may pop in during the run.")),!s())||(await new Promise(e=>requestAnimationFrame(()=>e())),!s()))return;let h=sZ(this,C,"f").start({duration:l.run.duration,ease:l.ease,onEnd:()=>sZ(this,M,"m",en).call(this,e)}),c=await s4(h,1e3*l.run.duration+1e3);s()&&(c||sZ(this,M,"m",ei).call(this),sZ(this,M,"m",ef).call(this,e))},Q=function(e){let t,i;if(e.duration<=0)return null;let r=e.transition;if("function"!=typeof r&&!sZ(this,M,"m",Z).call(this,r))return null;try{({transition:t,slots:i}=sZ(this,M,"m",ea).call(this,r,e.params))}catch(e){return console.error(`[VFX-JS] transition "${r.name}" constructor failed; cutting to the new content.`,e),null}let s={reverse:e.reverse,duration:e.duration},o=e.overflow??t.overflow;return void 0!==o&&(s.overflow=o),{run:s,ease:e.ease??t.ease??"smoothstep",slots:i}},Z=function(e){let t=s2.get(e);return t&&t!==this?(sZ(this,L,"f")||(sQ(this,L,!0,"f"),console.warn(`[VFX-JS] transition "${e.name??"unnamed"}" instance is running in another container; cutting to the new content. Pass the class to share it.`)),!1):(sZ(this,j,"f")!==e&&sZ(this,M,"m",ee).call(this),s2.set(e,this),sQ(this,j,e,"f"),!0)},ee=function(){let e=sZ(this,j,"f");sQ(this,j,null,"f"),e&&s2.get(e)===this&&s2.delete(e)},et=function(e,{run:t,slots:i}){for(let r of(sZ(this,M,"m",en).call(this),sQ(this,G,{id:e,slots:i},"f"),i))r.start(t)},ei=function(){sZ(this,B,"f")||(sQ(this,B,!0,"f"),console.warn("[VFX-JS] transition target did not render in time; cutting to the new content.")),sZ(this,M,"m",en).call(this),sZ(this,C,"f").cancel()},er=function(){sZ(this,_,"f").push(sZ(this,S,"f").freezeInside(sZ(this,k,"f")))},es=function(){let e=sZ(this,U,"f");for(let t of(sQ(this,U,[],"f"),e))t()},eo=function(){let e=sZ(this,_,"f");for(let t of(sQ(this,_,[],"f"),e))t()},ea=function(e,t){var i;let r,s,o,a=sZ(this,X,"f");if(a?.key.source===e&&("function"!=typeof e||(i=a.key.params,r=i??{},s=t??{},(o=Object.keys(r)).length===Object.keys(s).length&&o.every(e=>{var t,i;return e in s&&(t=r[e],i=s[e],Array.isArray(t)&&Array.isArray(i)?t.length===i.length&&t.every((e,t)=>e===i[t]):t===i)}))))return a;let n="function"==typeof e?new e(t):e,l=[new sK(n,sZ(this,C,"f"))];return sQ(this,X,{key:{source:e,params:t},transition:n,slots:l},"f"),{transition:n,slots:l}},en=function(e){let t=sZ(this,G,"f");if(t&&(void 0===e||t.id===e))for(let e of(sQ(this,G,null,"f"),t.slots))e.end()},el=async function(e,t,i){var r;if(sZ(this,$,"f")&&await sZ(this,$,"f"),!t())return;let s=null!==e?[sZ(this,C,"f"),...e]:sZ(this,N,"f")?sZ(this,H,"f"):[sZ(this,C,"f")];if(!sZ(this,N,"f")){let e=sZ(this,S,"f").addHTMLWithStill(sZ(this,k,"f"),{effect:s}).then(()=>{sQ(this,N,!0,"f"),sQ(this,H,s,"f")}).finally(()=>{sQ(this,$,null,"f")});sQ(this,$,e,"f"),await e;return}if(r=sZ(this,H,"f"),!(s.length===r.length&&s.every((e,t)=>e===r[t]))){sQ(this,H,s,"f");let e=sZ(this,S,"f").updateEffects(sZ(this,k,"f"),s).finally(()=>{sQ(this,$,null,"f")});sQ(this,$,e,"f"),await e}i&&await sZ(this,S,"f").update(sZ(this,k,"f"))},ef=function(e){if(sZ(this,F,"f")&&!sZ(this,D,"f"))return;let t=()=>{e===sZ(this,V,"f")&&sZ(this,N,"f")&&(sQ(this,N,!1,"f"),sQ(this,H,[],"f"),sZ(this,S,"f").remove(sZ(this,k,"f")))};sZ(this,$,"f")?sZ(this,$,"f").then(t,()=>{}):t()},eh=function(){let e=sZ(this,R,"f").waitFor??"media";return"none"===e?Promise.resolve():"media"===e?function(e,t,i=300){let r=[];for(let t of e.querySelectorAll("img, video")){let e="IMG"===t.tagName;(e?t.complete:t.readyState>=2)||function(e){if("IMG"===e.tagName){let t;return"lazy"===e.loading&&(!((t=e.getBoundingClientRect()).right>0)||!(t.bottom>0)||!(t.left<window.innerWidth)||!(t.top<window.innerHeight))}return"none"===e.preload}(t)||r.push(new Promise(i=>{let r=()=>i();t.addEventListener(e?"load":"loadeddata",r,{once:!0}),t.addEventListener("error",r,{once:!0})}))}return(t&&r.push(t),0===r.length)?Promise.resolve():new Promise(e=>{let t=setTimeout(e,i),s=()=>{clearTimeout(t),e()};Promise.all(r).then(s,s)})}(sZ(this,k,"f"),document.fonts?.ready):e(sZ(this,k,"f"))};var s5=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},s6=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class s8{constructor(e,t,i){ec.add(this),this.wrapS="clamp",this.wrapT="clamp",this.minFilter="linear",this.magFilter="linear",this.needsUpdate=!0,this.source=null,eu.set(this,void 0),ed.set(this,!1),ep.set(this,void 0),em.set(this,void 0),s5(this,eu,e,"f"),this.gl=e.gl;let r=i?.externalHandle;s5(this,em,void 0!==r,"f"),void 0!==r?(this.texture=r,s5(this,ed,!0,"f"),this.needsUpdate=!1):s6(this,ec,"m",ev).call(this),t&&(this.source=t),s5(this,ep,i?.autoRegister!==!1&&!s6(this,em,"f"),"f"),s6(this,ep,"f")&&e.addResource(this)}restore(){s6(this,em,"f")||(s6(this,ec,"m",ev).call(this),s5(this,ed,!1,"f"),this.needsUpdate=!0)}bind(e){let t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture),this.needsUpdate&&(s6(this,ec,"m",eg).call(this),this.needsUpdate=!1)}dispose(){s6(this,ep,"f")&&s6(this,eu,"f").removeResource(this),s6(this,em,"f")||this.gl.deleteTexture(this.texture)}}function s9(e,t){return"repeat"===t?e.REPEAT:"mirror"===t?e.MIRRORED_REPEAT:e.CLAMP_TO_EDGE}function s7(e,t){return"nearest"===t?e.NEAREST:e.LINEAR}function oe(e){return new Promise((t,i)=>{let r=new Image;r.crossOrigin="anonymous",r.onload=()=>t(r),r.onerror=i,r.src=e})}eu=new WeakMap,ed=new WeakMap,ep=new WeakMap,em=new WeakMap,ec=new WeakSet,ev=function(){let e=this.gl.createTexture();if(!e)throw Error("[VFX-JS] Failed to create texture");this.texture=e},eg=function(){let e=this.gl,t=this.source;if(e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_ALIGNMENT,4),t)try{e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t)}catch(e){console.error(e)}else if(!s6(this,ed,"f")){let t=new Uint8Array([0,0,0,0]);e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,t)}s6(this,ec,"m",ew).call(this),s5(this,ed,!0,"f")},ew=function(){let e=this.gl;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,s9(e,this.wrapS)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,s9(e,this.wrapT)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,s7(e,this.minFilter)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,s7(e,this.magFilter))};var ot=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},oi=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class or{constructor(e,t,i,r={}){ex.add(this),ey.set(this,void 0),ot(this,ey,e,"f"),this.gl=e.gl,this.width=Math.max(1,Math.floor(t)),this.height=Math.max(1,Math.floor(i)),this.float=r.float??!1,this.mipmap=r.mipmap??!1,this.texture=new s8(e,void 0,{autoRegister:!1});let s=r.wrap;void 0!==s&&("string"==typeof s?(this.texture.wrapS=s,this.texture.wrapT=s):(this.texture.wrapS=s[0],this.texture.wrapT=s[1])),void 0!==r.filter&&(this.texture.minFilter=r.filter,this.texture.magFilter=r.filter),oi(this,ex,"m",eb).call(this),e.addResource(this)}setSize(e,t){let i=Math.max(1,Math.floor(e)),r=Math.max(1,Math.floor(t));(i!==this.width||r!==this.height)&&(this.width=i,this.height=r,oi(this,ex,"m",eb).call(this))}restore(){this.texture.restore(),oi(this,ex,"m",eb).call(this)}dispose(){oi(this,ey,"f").removeResource(this),this.gl.deleteFramebuffer(this.fbo),this.texture.dispose()}generateMipmaps(){if(!this.mipmap)return;let e=this.gl;e.bindTexture(e.TEXTURE_2D,this.texture.texture),e.generateMipmap(e.TEXTURE_2D),e.bindTexture(e.TEXTURE_2D,null)}}function os(e,t){return"repeat"===t?e.REPEAT:"mirror"===t?e.MIRRORED_REPEAT:e.CLAMP_TO_EDGE}function oo(e,t,i,r){return{x:e.left+i,y:t-r-e.bottom,w:e.right-e.left,h:e.bottom-e.top}}ey=new WeakMap,ex=new WeakSet,eb=function(){let e=this.gl,t=this.fbo,i=e.createFramebuffer();if(!i)throw Error("[VFX-JS] Failed to create framebuffer");this.fbo=i;let r=this.texture.texture;e.bindTexture(e.TEXTURE_2D,r);let s=oi(this,ey,"f").floatLinearFilter;if(this.float&&s&&!oi(this,ey,"f").floatBlend)throw Error("[VFX-JS] EXT_float_blend is not supported.");let o=this.float?s?e.RGBA32F:e.RGBA16F:e.RGBA8,a=this.float?s?e.FLOAT:e.HALF_FLOAT:e.UNSIGNED_BYTE;if(this.mipmap){let t=Math.floor(Math.log2(Math.max(this.width,this.height)))+1,i=this.width,r=this.height;for(let s=0;s<t;s++)e.texImage2D(e.TEXTURE_2D,s,o,i,r,0,e.RGBA,a,null),i=Math.max(1,i>>1),r=Math.max(1,r>>1)}else e.texImage2D(e.TEXTURE_2D,0,o,this.width,this.height,0,e.RGBA,a,null);let n="nearest"===this.texture.minFilter?e.NEAREST:e.LINEAR,l="nearest"===this.texture.magFilter?e.NEAREST:e.LINEAR,f=this.mipmap?"nearest"===this.texture.minFilter?e.NEAREST_MIPMAP_NEAREST:e.LINEAR_MIPMAP_LINEAR:n,h=os(e,this.texture.wrapS),c=os(e,this.texture.wrapT);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,h),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,c),e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null),this.texture.needsUpdate=!1,this.texture.source=null,t&&e.deleteFramebuffer(t)};var oa=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},on=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class ol{constructor(e,t,i,r,s,o={}){eT.set(this,void 0),eE.set(this,void 0),eM.set(this,void 0),eS.set(this,void 0),oa(this,eT,t,"f"),oa(this,eE,i,"f"),oa(this,eM,r,"f");let a=t*r,n=i*r,l={float:s,wrap:o.wrap,filter:o.filter,mipmap:o.mipmap};oa(this,eS,[new or(e,a,n,l),new or(e,a,n,l)],"f")}get texture(){return on(this,eS,"f")[0].texture}get target(){return on(this,eS,"f")[1]}resize(e,t){if(e===on(this,eT,"f")&&t===on(this,eE,"f"))return;oa(this,eT,e,"f"),oa(this,eE,t,"f");let i=e*on(this,eM,"f"),r=t*on(this,eM,"f");on(this,eS,"f")[0].setSize(i,r),on(this,eS,"f")[1].setSize(i,r)}swap(){oa(this,eS,[on(this,eS,"f")[1],on(this,eS,"f")[0]],"f")}getViewport(){return{x:0,y:0,w:on(this,eT,"f"),h:on(this,eE,"f")}}dispose(){on(this,eS,"f")[0].dispose(),on(this,eS,"f")[1].dispose()}}eT=new WeakMap,eE=new WeakMap,eM=new WeakMap,eS=new WeakMap;let of=`
precision highp float;
in vec3 position;
void main() {
    gl_Position = vec4(position, 1.0);
}
`,oh=`
precision highp float;
attribute vec3 position;
void main() {
    gl_Position = vec4(position, 1.0);
}
`,oc=`
precision highp float;
uniform vec2 offset;
uniform vec2 resolution;
uniform sampler2D src;
out vec4 outColor;
void main() {
    vec2 uv = (gl_FragCoord.xy - offset) / resolution;
    if (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) {
        discard;
    }
    outColor = texture(src, uv);
}
`,ou=`precision highp float;
uniform vec2 resolution;
uniform vec2 offset;
uniform float time;
uniform bool autoCrop;
uniform sampler2D src;
out vec4 outColor;
`,od=`vec4 readTex(sampler2D tex, vec2 uv) {
    if (autoCrop && (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.)) {
        return vec4(0);
    }
    return texture(tex, uv);
}`,op={none:oc,uvGradient:`
    ${ou}
    ${od}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        outColor = vec4(uv, sin(time) * .5 + .5, 1);

        vec4 img = readTex(src, uv);
        outColor *= smoothstep(0., 1., img.a);
    }
    `,rainbow:`
    ${ou}
    ${od}

    vec3 hsv2rgb(vec3 c) {
        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    vec3 rgb2hsv(vec3 c) {
        vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
        vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
        vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

        float d = q.x - min(q.w, q.y);
        float e = 1.0e-10;
        return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
    }

    vec3 hueShift(vec3 rgb, float t) {
        vec3 hsv = rgb2hsv(rgb);
        hsv.x = fract(hsv.x + t);
        return hsv2rgb(hsv);
    }

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec2 uv2 = uv;
        uv2.x *= resolution.x / resolution.y;

        float x = (uv2.x - uv2.y) - fract(time);

        vec4 img = readTex(src, uv);
        float gray = length(img.rgb);

        img.rgb = vec3(hueShift(vec3(1,0,0), x) * gray);

        outColor = img;
    }
    `,glitch:`
    ${ou}
    ${od}

    float nn(float y, float t) {
        float n = (
            sin(y * .07 + t * 8. + sin(y * .5 + t * 10.)) +
            sin(y * .7 + t * 2. + sin(y * .3 + t * 8.)) * .7 +
            sin(y * 1.1 + t * 2.8) * .4
        );

        n += sin(y * 124. + t * 100.7) * sin(y * 877. - t * 38.8) * .3;

        return n;
    }

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = readTex(src, uv);

        float t = mod(time, 3.14 * 10.);

        // Seed value
        float v = fract(sin(t * 2.) * 700.);

        if (abs(nn(uv.y, t)) < 1.2) {
            v *= 0.01;
        }

        // Prepare for chromatic Abbreveation
        vec2 focus = vec2(0.5);
        float d = v * 0.6;
        vec2 ruv = focus + (uv - focus) * (1. - d);
        vec2 guv = focus + (uv - focus) * (1. - 2. * d);
        vec2 buv = focus + (uv - focus) * (1. - 3. * d);

        // Random Glitch
        if (v > 0.1) {
            // Randomize y
            float y = floor(uv.y * 13. * sin(35. * t)) + 1.;
            if (sin(36. * y * v) > 0.9) {
                ruv.x = uv.x + sin(76. * y) * 0.1;
                guv.x = uv.x + sin(34. * y) * 0.1;
                buv.x = uv.x + sin(59. * y) * 0.1;
            }

            // RGB Shift
            v = pow(v * 1.5, 2.) * 0.15;
            color.rgb *= 0.3;
            color.r += readTex(src, vec2(uv.x + sin(t * 123.45) * v, uv.y)).r;
            color.g += readTex(src, vec2(uv.x + sin(t * 157.67) * v, uv.y)).g;
            color.b += readTex(src, vec2(uv.x + sin(t * 143.67) * v, uv.y)).b;
        }

        // Compose Chromatic Abbreveation
        if (abs(nn(uv.y, t)) > 1.1) {
            color.r = color.r * 0.5 + color.r * texture(src, ruv).r;
            color.g = color.g * 0.5 + color.g * texture(src, guv).g;
            color.b = color.b * 0.5 + color.b * texture(src, buv).b;
            color *= 2.;
        }

        outColor = color;
        outColor.a = smoothstep(0.0, 0.8, max(color.r, max(color.g, color.b)));
    }
    `,pixelate:`
    ${ou}
    ${od}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        float b = sin(time * 2.) * 32. + 48.;
        uv = floor(uv * b) / b;
        outColor = readTex(src, uv);
    }
    `,rgbGlitch:`
    ${ou}
    ${od}

    float random(vec2 st) {
        return fract(sin(dot(st, vec2(948.,824.))) * 30284.);
    }

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec2 uvr = uv, uvg = uv, uvb = uv;

        float tt = mod(time, 17.);

        if (fract(tt * 0.73) > .8 || fract(tt * 0.91) > .8) {
            float t = floor(tt * 11.);

            float n = random(vec2(t, floor(uv.y * 17.7)));
            if (n > .7) {
                uvr.x += random(vec2(t, 1.)) * .1 - 0.05;
                uvg.x += random(vec2(t, 2.)) * .1 - 0.05;
                uvb.x += random(vec2(t, 3.)) * .1 - 0.05;
            }

            float ny = random(vec2(t * 17. + floor(uv * 19.7)));
            if (ny > .7) {
                uvr.x += random(vec2(t, 4.)) * .1 - 0.05;
                uvg.x += random(vec2(t, 5.)) * .1 - 0.05;
                uvb.x += random(vec2(t, 6.)) * .1 - 0.05;
            }
        }

        vec4 cr = readTex(src, uvr);
        vec4 cg = readTex(src, uvg);
        vec4 cb = readTex(src, uvb);

        outColor = vec4(
            cr.r,
            cg.g,
            cb.b,
            step(.1, cr.a + cg.a + cb.a)
        );
    }
    `,rgbShift:`
    ${ou}
    ${od}

    float nn(float y, float t) {
        float n = (
            sin(y * .07 + t * 8. + sin(y * .5 + t * 10.)) +
            sin(y * .7 + t * 2. + sin(y * .3 + t * 8.)) * .7 +
            sin(y * 1.1 + t * 2.8) * .4
        );

        n += sin(y * 124. + t * 100.7) * sin(y * 877. - t * 38.8) * .3;

        return n;
    }

    float step2(float t, vec2 uv) {
        return step(t, uv.x) * step(t, uv.y);
    }

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec2 uvr = uv, uvg = uv, uvb = uv;

        float t = mod(time, 30.);

        float amp = 10. / resolution.x;

        if (abs(nn(uv.y, t)) > 1.) {
            uvr.x += nn(uv.y, t) * amp;
            uvg.x += nn(uv.y, t + 10.) * amp;
            uvb.x += nn(uv.y, t + 20.) * amp;
        }

        vec4 cr = readTex(src, uvr);
        vec4 cg = readTex(src, uvg);
        vec4 cb = readTex(src, uvb);

        outColor = vec4(
            cr.r,
            cg.g,
            cb.b,
            smoothstep(.0, 1., cr.a + cg.a + cb.a)
        );
    }
    `,halftone:`
    // Halftone Effect by zoidberg
    // https://www.interactiveshaderformat.com/sketches/234

    ${ou}
    ${od}

    // TODO: uniform
    #define gridSize 10.0
    #define dotSize 0.7
    #define smoothing 0.15
    #define speed 1.0

    #define IMG_PIXEL(x, y) readTex(x, (y - offset) / resolution);

    vec4 gridRot = vec4(15.0, 45.0, 75.0, 0.0);

    // during calculation we find the closest dot to a frag, determine its size, and then determine the size of the four dots above/below/right/left of it. this array of offsets move "one left", "one up", "one right", and "one down"...
    vec2 originOffsets[4];

    void main() {
        vec2 fragCoord = gl_FragCoord.xy - offset;

        // a halftone is an overlapping series of grids of dots
        // each grid of dots is rotated by a different amount
        // the size of the dots determines the colors. the shape of the dot should never change (always be a dot with regular edges)
        originOffsets[0] = vec2(-1.0, 0.0);
        originOffsets[1] = vec2(0.0, 1.0);
        originOffsets[2] = vec2(1.0, 0.0);
        originOffsets[3] = vec2(0.0, -1.0);

        vec3 rgbAmounts = vec3(0.0);

        // for each of the channels (i) of RGB...
        for (float i=0.0; i<3.0; ++i) {
            // figure out the rotation of the grid in radians
            float rotRad = radians(gridRot[int(i)]);

            // the grids are rotated counter-clockwise- to find the nearest dot, take the fragment pixel loc,
            // rotate it clockwise, and split by the grid to find the center of the dot. then rotate this
            // coord counter-clockwise to yield the location of the center of the dot in pixel coords local to the render space
            mat2 ccTrans = mat2(vec2(cos(rotRad), sin(rotRad)), vec2(-1.0*sin(rotRad), cos(rotRad)));
            mat2 cTrans = mat2(vec2(cos(rotRad), -1.0*sin(rotRad)), vec2(sin(rotRad), cos(rotRad)));

            // find the location of the frag in the grid (prior to rotating it)
            vec2 gridFragLoc = cTrans * fragCoord.xy;

            // find the center of the dot closest to the frag- there's no "round" in GLSL 1.2, so do a "floor" to find the dot to the bottom-left of the frag, then figure out if the frag would be in the top and right halves of that square to find the closest dot to the frag
            vec2 gridOriginLoc = vec2(floor(gridFragLoc.x/gridSize), floor(gridFragLoc.y/gridSize));

            vec2 tmpGridCoords = gridFragLoc/vec2(gridSize);
            bool fragAtTopOfGrid = ((tmpGridCoords.y-floor(tmpGridCoords.y)) > (gridSize/2.0)) ? true : false;
            bool fragAtRightOfGrid = ((tmpGridCoords.x-floor(tmpGridCoords.x)) > (gridSize/2.0)) ? true : false;
            if (fragAtTopOfGrid)
                gridOriginLoc.y = gridOriginLoc.y + 1.0;
            if (fragAtRightOfGrid)
                gridOriginLoc.x = gridOriginLoc.x + 1.0;

            // ...at this point, "gridOriginLoc" contains the grid coords of the nearest dot to the fragment being rendered
            // convert the location of the center of the dot from grid coords to pixel coords
            vec2 gridDotLoc = vec2(gridOriginLoc.x*gridSize, gridOriginLoc.y*gridSize) + vec2(gridSize/2.0);

            // rotate the pixel coords of the center of the dot so they become relative to the rendering space
            vec2 renderDotLoc = ccTrans * gridDotLoc;

            // get the color of the pixel of the input image under this dot (the color will ultimately determine the size of the dot)
            vec4 renderDotImageColorRGB = IMG_PIXEL(src, renderDotLoc + offset);

            // the amount of this channel is taken from the same channel of the color of the pixel of the input image under this halftone dot
            float imageChannelAmount = renderDotImageColorRGB[int(i)];

            // the size of the dot is determined by the value of the channel
            float dotRadius = imageChannelAmount * (gridSize * dotSize);
            float fragDistanceToDotCenter = distance(fragCoord.xy, renderDotLoc);
            if (fragDistanceToDotCenter < dotRadius) {
                rgbAmounts[int(i)] += smoothstep(dotRadius, dotRadius-(dotRadius*smoothing), fragDistanceToDotCenter);
            }

            // calcluate the size of the dots abov/below/to the left/right to see if they're overlapping
            for (float j=0.0; j<4.0; ++j) {
                gridDotLoc = vec2((gridOriginLoc.x+originOffsets[int(j)].x)*gridSize, (gridOriginLoc.y+originOffsets[int(j)].y)*gridSize) + vec2(gridSize/2.0);

                renderDotLoc = ccTrans * gridDotLoc;
                renderDotImageColorRGB = IMG_PIXEL(src, renderDotLoc + offset);

                imageChannelAmount = renderDotImageColorRGB[int(i)];
                dotRadius = imageChannelAmount * (gridSize*1.50/2.0);
                fragDistanceToDotCenter = distance(fragCoord.xy, renderDotLoc);
                if (fragDistanceToDotCenter < dotRadius) {
                    rgbAmounts[int(i)] += smoothstep(dotRadius, dotRadius-(dotRadius*smoothing), fragDistanceToDotCenter);
                }
            }
        }

        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 original = readTex(src, uv);
        float alpha = step(.1, rgbAmounts[0] + rgbAmounts[1] + rgbAmounts[2] + original.a);

        outColor = vec4(rgbAmounts[0], rgbAmounts[1], rgbAmounts[2], alpha);
    }
    `,sinewave:`
    ${ou}
    ${od}

    vec4 draw(vec2 uv) {
        vec2 uvr = uv, uvg = uv, uvb = uv;

        float amp = 20. / resolution.x;

        uvr.x += sin(uv.y * 7. + time * 3.) * amp;
        uvg.x += sin(uv.y * 7. + time * 3. + .4) * amp;
        uvb.x += sin(uv.y * 7. + time * 3. + .8) * amp;

        vec4 cr = readTex(src, uvr);
        vec4 cg = readTex(src, uvg);
        vec4 cb = readTex(src, uvb);

        return vec4(
            cr.r,
            cg.g,
            cb.b,
            cr.a + cg.a + cb.a
        );
    }

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        // x blur
        vec2 dx = vec2(2, 0) / resolution.x;
        outColor = (draw(uv) * 2. + draw(uv + dx) + draw(uv - dx)) / 4.;
    }
    `,shine:`
    ${ou}
    ${od}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        vec2 p = uv * 2. - 1.;
        float a = atan(p.y, p.x);

        vec4 col = readTex(src, uv);
        float gray = length(col.rgb);

        float level = 1. + sin(a * 10. + time * 3.) * 0.2;

        outColor = vec4(1, 1, .5, col.a) * level;
    }
    `,blink:`
    ${ou}
    ${od}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        outColor = readTex(src, uv) * (sin(time * 5.) * 0.2 + 0.8);
    }

    `,spring:`
    ${ou}
    ${od}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        uv = (uv - .5) * (1.05 + sin(time * 5.) * 0.05) + .5;
        outColor = readTex(src, uv);
    }
    `,duotone:`
    ${ou}
    ${od}

    uniform vec4 color1;
    uniform vec4 color2;
    uniform float speed;

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = readTex(src, uv);

        float gray = dot(color.rgb, vec3(0.2, 0.7, 0.08));
        float t = mod(gray * 2.0 + time * speed, 2.0);

        if (t < 1.) {
            outColor = mix(color1, color2, fract(t));
        } else {
            outColor = mix(color2, color1, fract(t));
        }

        outColor.a *= color.a;
    }
    `,tritone:`
    ${ou}
    ${od}

    uniform vec4 color1;
    uniform vec4 color2;
    uniform vec4 color3;
    uniform float speed;

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = readTex(src, uv);

        float gray = dot(color.rgb, vec3(0.2, 0.7, 0.08));
        float t = mod(gray * 3.0 + time * speed, 3.0);

        if (t < 1.) {
            outColor = mix(color1, color2, fract(t));
        } else if (t < 2.) {
            outColor = mix(color2, color3, fract(t));
        } else {
            outColor = mix(color3, color1, fract(t));
        }

        outColor.a *= color.a;
    }
    `,hueShift:`
    ${ou}
    ${od}

    uniform float shift;

    vec3 hsv2rgb(vec3 c) {
        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    vec3 rgb2hsv(vec3 c) {
        vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
        vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
        vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

        float d = q.x - min(q.w, q.y);
        float e = 1.0e-10;
        return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
    }

    vec3 hueShift(vec3 rgb, float t) {
        vec3 hsv = rgb2hsv(rgb);
        hsv.x = fract(hsv.x + t);
        return hsv2rgb(hsv);
    }

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = readTex(src, uv);
        color.rgb = hueShift(color.rgb, shift);
        outColor = color;
    }
    `,warpReveal:`
    ${ou}
    uniform float enterProgress;
    uniform float leaveProgress;

    ${od}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        float t = enterProgress * (1. - leaveProgress);

        if (t == 0.) {
            discard;
        }

        if (t < 1.) {
            uv.x += sin(floor(uv.y * 300.)) * 3. * exp(t * -10.);
        }

        outColor = readTex(src, uv);
    }
    `,slitScanReveal:`
    ${ou}
    ${od}

    uniform float enterProgress;
    uniform float leaveProgress;

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        // Hidden before enter and after leave
        if (enterProgress == 0.) {
            discard;
        }

        if (0. < leaveProgress) {
            // Leaving
            float t = 1. - leaveProgress;
            uv.y = uv.y < t ? uv.y : t;
        } else if (enterProgress < 1.) {
            // Entering
            float t = 1. - enterProgress;
            uv.y = uv.y < t ? t : uv.y;
        }

        outColor = readTex(src, uv);
    }
    `,pixelateReveal:`
    ${ou}
    ${od}

    uniform float enterProgress;
    uniform float leaveProgress;

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        float t = enterProgress * (1. - leaveProgress);

        if (t == 0.) {
            discard;
        } else if (t < 1.) {
            float b = max(1., floor(t * 64.));
            uv = (floor(uv * b) + .5) / b;
        }

        outColor = readTex(src, uv);
    }
    `,focusReveal:`
    ${ou}
    ${od}

    uniform float intersection;

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        float t = smoothstep(0., 1., intersection);

        outColor = mix(
            readTex(src, uv + vec2(1. - t, 0)),
            readTex(src, uv + vec2(-(1. - t), 0)),
            0.5
        ) * intersection;
    }
    `,invert:`
    ${ou}
    ${od}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = readTex(src, uv);
        outColor = vec4(1.0 - color.rgb, color.a);
    }
    `,grayscale:`
    ${ou}
    ${od}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = readTex(src, uv);
        float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
        outColor = vec4(vec3(gray), color.a);
    }
    `,vignette:`
    ${ou}
    ${od}

    uniform float intensity;
    uniform float radius;
    uniform float power;

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        outColor = readTex(src, uv);

        vec2 p = uv * 2.0 - 1.0;
        p.x *= resolution.x / resolution.y;

        float l = max(length(p) - radius, 0.);
        outColor *= 1. - pow(l, power) * intensity;
    }
    `,chromatic:`
    ${ou}
    ${od}

    uniform float intensity;
    uniform float radius;
    uniform float power;


    vec4 mirrorTex(sampler2D tex, vec2 uv) {
        vec2 uv2 = 1. - abs(1. - mod(uv, 2.0));
        return texture(tex, uv2);
    }

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        vec2 p = uv * 2.0 - 1.0;
        p.x *= resolution.x / resolution.y;

        float l = max(length(p) - radius, 0.);
        float d = pow(l, power) * (intensity * 0.1);

        vec2 uvR = (uv - .5) / (1.0 + d * 1.) + 0.5;
        vec2 uvG = (uv - .5) / (1.0 + d * 2.) + 0.5;
        vec2 uvB = (uv - .5) / (1.0 + d * 3.) + 0.5;

        vec4 cr = mirrorTex(src, uvR);
        vec4 cg = mirrorTex(src, uvG);
        vec4 cb = mirrorTex(src, uvB);

        outColor = vec4(cr.r, cg.g, cb.b, (cr.a + cg.a + cb.a) / 3.0);
    }
    `},om={...op,slitScanTransition:op.slitScanReveal,warpTransition:op.warpReveal,pixelateTransition:op.pixelateReveal,focusTransition:op.focusReveal};class ov{constructor(e=0,t=0){this.x=0,this.y=0,this.x=e,this.y=t}set(e,t){return this.x=e,this.y=t,this}}class og{constructor(e=0,t=0,i=0,r=0){this.x=0,this.y=0,this.z=0,this.w=0,this.x=e,this.y=t,this.z=i,this.w=r}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}}var ow=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},ox=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};function oy(e){return/#version\s+300\s+es\b/.test(e)?"300 es":/#version\s+100\b/.test(e)||/\bgl_FragColor\b|\btexture2D\b|\bvarying\b|\battribute\b/.test(e)?"100":"300 es"}class ob{constructor(e,t,i,r){ek.add(this),eR.set(this,void 0),eC.set(this,void 0),eP.set(this,void 0),eW.set(this,void 0),eA.set(this,new Map),ow(this,eR,e,"f"),this.gl=e.gl,ow(this,eC,t,"f"),ow(this,eP,i,"f"),ow(this,eW,r??oy(i),"f"),ox(this,ek,"m",eF).call(this),e.addResource(this)}restore(){ox(this,ek,"m",eF).call(this)}use(){this.gl.useProgram(this.program)}hasUniform(e){return ox(this,eA,"f").has(e)}uploadUniforms(e){let t=this.gl,i=0;for(let[s,o]of ox(this,eA,"f")){let a=e[s];if(!a)continue;let n=a.value;if(null!=n){var r;if(35678===(r=o.type)||36298===r||36306===r||35682===r){n instanceof s8&&(n.bind(i),t.uniform1i(o.location,i),i++);continue}n instanceof s8||function(e,t,i){let r=t.location,s=t.size>1;switch(t.type){case e.FLOAT:s?e.uniform1fv(r,i):e.uniform1f(r,i);return;case e.FLOAT_VEC2:s?e.uniform2fv(r,i):i instanceof ov?e.uniform2f(r,i.x,i.y):e.uniform2f(r,i[0],i[1]);return;case e.FLOAT_VEC3:s?e.uniform3fv(r,i):e.uniform3f(r,i[0],i[1],i[2]);return;case e.FLOAT_VEC4:s?e.uniform4fv(r,i):i instanceof og?e.uniform4f(r,i.x,i.y,i.z,i.w):e.uniform4f(r,i[0],i[1],i[2],i[3]);return;case e.INT:s?e.uniform1iv(r,i):e.uniform1i(r,i);return;case e.INT_VEC2:s?e.uniform2iv(r,i):e.uniform2i(r,i[0],i[1]);return;case e.INT_VEC3:s?e.uniform3iv(r,i):e.uniform3i(r,i[0],i[1],i[2]);return;case e.INT_VEC4:s?e.uniform4iv(r,i):e.uniform4i(r,i[0],i[1],i[2],i[3]);return;case e.BOOL:s?e.uniform1iv(r,i):e.uniform1i(r,+!!i);return;case e.BOOL_VEC2:s?e.uniform2iv(r,i):e.uniform2i(r,+!!i[0],+!!i[1]);return;case e.BOOL_VEC3:s?e.uniform3iv(r,i):e.uniform3i(r,+!!i[0],+!!i[1],+!!i[2]);return;case e.BOOL_VEC4:s?e.uniform4iv(r,i):e.uniform4i(r,+!!i[0],+!!i[1],+!!i[2],+!!i[3]);return;case e.FLOAT_MAT2:e.uniformMatrix2fv(r,!1,i);return;case e.FLOAT_MAT3:e.uniformMatrix3fv(r,!1,i);return;case e.FLOAT_MAT4:e.uniformMatrix4fv(r,!1,i);return;case e.UNSIGNED_INT:s?e.uniform1uiv(r,i):e.uniform1ui(r,i);return;case e.UNSIGNED_INT_VEC2:s?e.uniform2uiv(r,i):e.uniform2ui(r,i[0],i[1]);return;case e.UNSIGNED_INT_VEC3:s?e.uniform3uiv(r,i):e.uniform3ui(r,i[0],i[1],i[2]);return;case e.UNSIGNED_INT_VEC4:s?e.uniform4uiv(r,i):e.uniform4ui(r,i[0],i[1],i[2],i[3]);return;default:oM.has(t.type)||(oM.add(t.type),console.warn(`[VFX-JS] Unsupported uniform type 0x${t.type.toString(16)}; skipping upload.`));return}}(t,o,n)}}}dispose(){ox(this,eR,"f").removeResource(this),this.gl.deleteProgram(this.program)}}function oT(e,t,i){let r=e.createShader(t);if(!r)throw Error("[VFX-JS] Failed to create shader");if(e.shaderSource(r,i),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r)??"";throw e.deleteShader(r),Error(`[VFX-JS] Shader compile failed: ${t}

${i}`)}return r}function oE(e,t){return e.replace(/^\s+/,"").startsWith("#version")||"100"===t?e:`#version 300 es
${e}`}eR=new WeakMap,eC=new WeakMap,eP=new WeakMap,eW=new WeakMap,eA=new WeakMap,ek=new WeakSet,eF=function(){let e=this.gl,t=oT(e,e.VERTEX_SHADER,oE(ox(this,eC,"f"),ox(this,eW,"f"))),i=oT(e,e.FRAGMENT_SHADER,oE(ox(this,eP,"f"),ox(this,eW,"f"))),r=e.createProgram();if(!r)throw Error("[VFX-JS] Failed to create program");if(e.attachShader(r,t),e.attachShader(r,i),e.bindAttribLocation(r,0,"position"),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){let s=e.getProgramInfoLog(r)??"";throw e.deleteShader(t),e.deleteShader(i),e.deleteProgram(r),Error(`[VFX-JS] Program link failed: ${s}`)}e.detachShader(r,t),e.detachShader(r,i),e.deleteShader(t),e.deleteShader(i),this.program=r,ox(this,eA,"f").clear();let s=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let t=0;t<s;t++){let i=e.getActiveUniform(r,t);if(!i)continue;let s=i.name.replace(/\[0\]$/,""),o=e.getUniformLocation(r,i.name);o&&ox(this,eA,"f").set(s,{location:o,type:i.type,size:i.size})}};let oM=new Set;class oS{constructor(e,t,i,r,s,o){this.gl=e.gl,this.program=new ob(e,t,i,o),this.uniforms=r,this.blend=s}dispose(){this.program.dispose()}}function ok(e,t){"none"===t?e.disable(e.BLEND):(e.enable(e.BLEND),e.blendEquation(e.FUNC_ADD),"premultiplied"===t?e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA):"additive"===t?e.blendFuncSeparate(e.ONE,e.ONE,e.ONE,e.ONE):e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA))}class oR{constructor(e){this.uniforms={src:{value:null},offset:{value:new ov},resolution:{value:new ov},viewport:{value:new og}},this.pass=new oS(e,of,oc,this.uniforms,"premultiplied")}setUniforms(e,t,i){this.uniforms.src.value=e,this.uniforms.resolution.value.set(i.w*t,i.h*t),this.uniforms.offset.value.set(i.x*t,i.y*t)}dispose(){this.pass.dispose()}}async function oC(e,t,i,r){var s;let o,a,n,l,f=e.getBoundingClientRect(),h=window.devicePixelRatio,c=Math.ceil(f.width),u=Math.ceil(f.height),d=c*h,p=u*h,m=1,v=d,g=p;r&&(v>r||g>r)&&(m=Math.min(r/v,r/g),v=Math.floor(v*m),g=Math.floor(g*m));let w=i&&i.width===v&&i.height===g?i:new OffscreenCanvas(v,g),x=e.cloneNode(!0);await oW(e,x),function e(t,i){if("function"==typeof t.computedStyleMap)try{let e=t.computedStyleMap();for(let t of["margin-top","margin-right","margin-bottom","margin-left"]){let r=e.get(t);r instanceof CSSKeywordValue&&"auto"===r.value&&i.style.setProperty(t,"auto")}}catch{}for(let r=0;r<t.children.length;r++){let s=t.children[r],o=i.children[r];s instanceof HTMLElement&&o instanceof HTMLElement&&e(s,o)}}(e,x),x.style.setProperty("opacity",t.toString()),x.style.setProperty("margin","0px"),function(e){let t=e;for(;;){let e=t.style;if(Number.parseFloat(e.paddingTop)>0||Number.parseFloat(e.borderTopWidth)>0||e.getPropertyValue("overflow-x")&&"visible"!==e.getPropertyValue("overflow-x")||e.getPropertyValue("overflow-y")&&"visible"!==e.getPropertyValue("overflow-y")||"flex"===e.display||"grid"===e.display||"flow-root"===e.display||"inline-block"===e.display)break;let i=t.firstElementChild;if(!i)break;i.style.setProperty("margin-top","0px"),t=i}for(t=e;;){let e=t.style;if(Number.parseFloat(e.paddingBottom)>0||Number.parseFloat(e.borderBottomWidth)>0||e.getPropertyValue("overflow-x")&&"visible"!==e.getPropertyValue("overflow-x")||e.getPropertyValue("overflow-y")&&"visible"!==e.getPropertyValue("overflow-y")||"flex"===e.display||"grid"===e.display||"flow-root"===e.display||"inline-block"===e.display)break;let i=t.lastElementChild;if(!i)break;i.style.setProperty("margin-bottom","0px"),t=i}}(x),function e(t,i){let r=-t.scrollLeft,s=-t.scrollTop;for(let o=0;o<t.children.length;o++){let a=t.children[o],n=i.children[o];a&&(n instanceof HTMLElement||n instanceof SVGElement)&&((0!==r||0!==s)&&function(e,t,i){let r=e.style.getPropertyValue("translate"),[s="0px",o="0px",a]=r&&"none"!==r?function(e){let t=[],i=0,r="";for(let s of e.trim())"("===s?i++:")"===s&&i--," "===s&&0===i?(r&&t.push(r),r=""):r+=s;return r&&t.push(r),t}(r):[],n=`calc(${s} + ${t}px) calc(${o} + ${i}px)`;e.style.setProperty("translate",a?`${n} ${a}`:n)}(n,r,s),e(a,n))}}(e,x),x.style.setProperty("box-sizing","border-box"),x.style.setProperty("width",`${c}px`),x.style.setProperty("height",`${u}px`);let y=(s=x.outerHTML,(n=(a=document.implementation.createHTMLDocument("test")).createRange()).selectNodeContents(a.documentElement),n.deleteContents(),l=document.createElement("head"),a.documentElement.appendChild(l),a.documentElement.appendChild(n.createContextualFragment(s)),a.documentElement.setAttribute("xmlns",a.documentElement.namespaceURI),new XMLSerializer().serializeToString(a).replace(/<!DOCTYPE html>/,"")),b=`<svg xmlns="http://www.w3.org/2000/svg" width="${d}" height="${p}"><foreignObject width="100%" height="100%">${y}</foreignObject></svg>`,T=await new Promise(e=>{let t=new Image;t.onload=()=>e(t),t.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(b)}`}),E=w.getContext("2d");if(null===E)throw Error("[VFX-JS] Failed to get 2D context");let M=()=>{E.clearRect(0,0,v,g);let e=h*m;E.scale(e,e),E.drawImage(T,0,0,d,p),E.setTransform(1,0,0,1,0,0)};if(M(),o=navigator.userAgent,/AppleWebKit/.test(o)&&!/Chrome\/|Chromium\//.test(o)&&x.querySelector("img"))for(let e=0;e<oP;e++)await new Promise(e=>setTimeout(e,16)),M();return w}let oP=3;async function oW(e,t){let i=window.getComputedStyle(e);for(let e of Array.from(i))/(-inline-|-block-|^inline-|^block-)/.test(e)||/^-webkit-.*(start|end|before|after|logical)/.test(e)||t.style.setProperty(e,i.getPropertyValue(e),i.getPropertyPriority(e));if("INPUT"===t.tagName)t.setAttribute("value",t.value);else if("TEXTAREA"===t.tagName)t.innerHTML=t.value;else if("IMG"===t.tagName)try{t.src=await oA(sp(e))}catch{}for(let i=0;i<e.children.length;i++){let r=e.children[i],s=t.children[i];await oW(r,s)}}async function oA(e){let t=await fetch(e).then(e=>e.blob());return new Promise(e=>{let i=new FileReader;i.onload=function(){e(this.result)},i.readAsDataURL(t)})}var oF=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},oz=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let o_=Object.freeze({__brand:"EffectQuad"});class oU{constructor(e,t,i){ez.add(this),e_.set(this,void 0),eU.set(this,void 0),eB.set(this,void 0),eI.set(this,[]),eL.set(this,null),this.indexType=0,this.hasIndices=!1,this.drawCount=0,this.drawStart=0,eV.set(this,!1),oF(this,e_,e,"f"),this.gl=e.gl,oF(this,eU,t,"f"),oF(this,eB,i,"f"),this.mode=function(e,t){switch(t){case"lines":return e.LINES;case"lineStrip":return e.LINE_STRIP;case"points":return e.POINTS;default:return e.TRIANGLES}}(this.gl,t.mode),this.instanceCount=t.instanceCount??0,oz(this,ez,"m",eO).call(this),e.addResource(this),oF(this,eV,!0,"f")}restore(){oF(this,eI,[],"f"),oF(this,eL,null,"f"),oz(this,ez,"m",eO).call(this)}draw(){let e=this.gl;e.bindVertexArray(this.vao),this.hasIndices?this.instanceCount>0?e.drawElementsInstanced(this.mode,this.drawCount,this.indexType,this.drawStart*(this.indexType===e.UNSIGNED_INT?4:2),this.instanceCount):e.drawElements(this.mode,this.drawCount,this.indexType,this.drawStart*(this.indexType===e.UNSIGNED_INT?4:2)):this.instanceCount>0?e.drawArraysInstanced(this.mode,this.drawStart,this.drawCount,this.instanceCount):e.drawArrays(this.mode,this.drawStart,this.drawCount)}dispose(){oz(this,eV,"f")&&(oz(this,e_,"f").removeResource(this),oF(this,eV,!1,"f"));let e=this.gl;for(let t of(e.deleteVertexArray(this.vao),oz(this,eI,"f")))e.deleteBuffer(t);oz(this,eL,"f")&&e.deleteBuffer(oz(this,eL,"f")),oF(this,eI,[],"f"),oF(this,eL,null,"f")}}e_=new WeakMap,eU=new WeakMap,eB=new WeakMap,eI=new WeakMap,eL=new WeakMap,eV=new WeakMap,ez=new WeakSet,eO=function(){let e=this.gl,t=e.createVertexArray();if(!t)throw Error("[VFX-JS] Failed to create VAO");this.vao=t,e.bindVertexArray(t);let i=oz(this,eB,"f").program,r=null;for(let[t,s]of Object.entries(oz(this,eU,"f").attributes)){let o=!ArrayBuffer.isView(s)||s instanceof DataView?{name:t,data:s.data,itemSize:s.itemSize,normalized:s.normalized??!1,perInstance:s.perInstance??!1}:{name:t,data:s,itemSize:2,normalized:!1,perInstance:!1},a=e.getAttribLocation(i,o.name);if(a<0)continue;let n=e.createBuffer();if(!n)throw Error(`[VFX-JS] Failed to create VBO for "${o.name}"`);oz(this,eI,"f").push(n),e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,o.data,e.STATIC_DRAW);let l=function(e,t){if(t instanceof Float32Array)return e.FLOAT;if(t instanceof Uint8Array)return e.UNSIGNED_BYTE;if(t instanceof Uint16Array)return e.UNSIGNED_SHORT;if(t instanceof Uint32Array)return e.UNSIGNED_INT;if(t instanceof Int8Array)return e.BYTE;if(t instanceof Int16Array)return e.SHORT;if(t instanceof Int32Array)return e.INT;throw Error("[VFX-JS] Unsupported attribute typed array")}(e,o.data);e.enableVertexAttribArray(a),l===e.FLOAT||l===e.HALF_FLOAT||o.normalized?e.vertexAttribPointer(a,o.itemSize,l,o.normalized,0,0):e.vertexAttribIPointer(a,o.itemSize,l,0,0),o.perInstance&&e.vertexAttribDivisor(a,1),"position"===t&&null===r&&(r=o.data.length/o.itemSize)}let s=0,o=oz(this,eU,"f").indices;if(o){let t=e.createBuffer();if(!t)throw Error("[VFX-JS] Failed to create IBO");oF(this,eL,t,"f"),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),e.bufferData(e.ELEMENT_ARRAY_BUFFER,o,e.STATIC_DRAW),this.hasIndices=!0,this.indexType=o instanceof Uint32Array?e.UNSIGNED_INT:e.UNSIGNED_SHORT,s=o.length}else this.hasIndices=!1;e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null),oz(this,eL,"f")&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null);let a=this.hasIndices?s:r??0,n=oz(this,eU,"f").drawRange;this.drawStart=n?.start??0,this.drawCount=n?.count!==void 0?n.count:Math.max(0,a-this.drawStart)};class oB{constructor(e,t){eD.set(this,void 0),eN.set(this,void 0),e$.set(this,new WeakMap),eH.set(this,new Set),oF(this,eD,e,"f"),oF(this,eN,t,"f")}get quad(){return oz(this,eN,"f")}resolve(e,t){let i=oz(this,e$,"f").get(e);i||(i=new Map,oz(this,e$,"f").set(e,i));let r=i.get(t);return r||(r=new oU(oz(this,eD,"f"),e,t),i.set(t,r),oz(this,eH,"f").add(r)),r}release(e){let t=oz(this,e$,"f").get(e);if(t){for(let e of t.values())e.dispose(),oz(this,eH,"f").delete(e);oz(this,e$,"f").delete(e)}}dispose(){for(let e of oz(this,eH,"f"))e.dispose();oz(this,eH,"f").clear()}}eD=new WeakMap,eN=new WeakMap,e$=new WeakMap,eH=new WeakMap;var oI=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},oL=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let oV=Symbol.for("@vfx-js/effect.resolve-texture"),oO=Symbol.for("@vfx-js/effect.resolve-rt"),oD=`#version 300 es
precision highp float;
in vec3 position;
out vec2 uv;
out vec2 uvContent;
out vec2 uvSrc;
uniform vec4 contentRectUv;
uniform vec4 srcRectUv;
void main() {
    vec2 bufferUV = position.xy * 0.5 + 0.5;
    uv = bufferUV;
    uvContent = (bufferUV - contentRectUv.xy) / contentRectUv.zw;
    uvSrc = srcRectUv.xy + uvContent * srcRectUv.zw;
    gl_Position = vec4(position, 1.0);
}
`,oN=`
precision highp float;
attribute vec3 position;
varying vec2 uv;
varying vec2 uvContent;
varying vec2 uvSrc;
uniform vec4 contentRectUv;
uniform vec4 srcRectUv;
void main() {
    vec2 bufferUV = position.xy * 0.5 + 0.5;
    uv = bufferUV;
    uvContent = (bufferUV - contentRectUv.xy) / contentRectUv.zw;
    uvSrc = srcRectUv.xy + uvContent * srcRectUv.zw;
    gl_Position = vec4(position, 1.0);
}
`,o$=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D src;
void main() {
    outColor = texture(src, uv);
}
`,oH=`
precision highp float;
varying vec2 uv;
uniform sampler2D src;
void main() {
    gl_FragColor = texture2D(src, uv);
}
`,oX=`#version 300 es
precision highp float;
in vec2 uvSrc;
out vec4 outColor;
uniform sampler2D src;
void main() {
    bool inside = all(greaterThanEqual(uvSrc, vec2(0.0))) && all(lessThanEqual(uvSrc, vec2(1.0)));
    outColor = inside ? texture(src, uvSrc) : vec4(0.0);
}
`,oj=`
precision highp float;
varying vec2 uvSrc;
uniform sampler2D src;
void main() {
    bool inside = all(greaterThanEqual(uvSrc, vec2(0.0))) && all(lessThanEqual(uvSrc, vec2(1.0)));
    gl_FragColor = inside ? texture2D(src, uvSrc) : vec4(0.0);
}
`;class oG{constructor(e,t,i,r,s,o){eX.add(this),ej.set(this,void 0),eG.set(this,void 0),eq.set(this,void 0),eJ.set(this,void 0),eK.set(this,void 0),eY.set(this,[]),eQ.set(this,[]),eZ.set(this,[]),e0.set(this,[]),e1.set(this,"init"),e2.set(this,!1),e4.set(this,void 0),e3.set(this,void 0),e9.set(this,[]),oI(this,ej,e,"f"),oI(this,eG,e.gl,"f"),oI(this,eq,i,"f"),oI(this,eJ,o,"f"),oI(this,eK,new oB(e,t),"f"),oI(this,e4,{outputBufferW:1,outputBufferH:1,canvasBufferSize:[1,1],outputViewport:{x:0,y:0,w:1,h:1},elementBufferW:1,elementBufferH:1,contentRectUv:[0,0,1,1],srcRectUv:[0,0,1,1]},"f");let a={time:0,deltaTime:0,pixelRatio:i,resolution:[1,1],mouse:[0,0],mouseViewport:[0,0],intersection:0,enterTime:0,leaveTime:0,enterProgress:0,leaveProgress:0,src:r,target:null,uniforms:{},vfxProps:s,dims:{element:[1,1],elementPixel:[1,1],canvas:[1,1],canvasPixel:[1,1],pixelRatio:i,contentRect:[0,0,1,1],srcRect:[0,0,1,1],canvasRect:[0,0,1,1]},quad:o_,gl:oL(this,eG,"f"),createRenderTarget:e=>oL(this,eX,"m",e5).call(this,e),releaseGeometry:e=>oL(this,eK,"f").release(e),wrapTexture:(e,t)=>oL(this,eX,"m",e8).call(this,e,t),draw:e=>oL(this,eX,"m",e7).call(this,e),blit:(e,t,i)=>oL(this,eX,"m",te).call(this,e,t,i),clear:e=>oL(this,eX,"m",tt).call(this,e),onContextRestored:e=>{let t=oL(this,ej,"f").onContextRestored(e);return oL(this,e0,"f").push(t),t}};oI(this,e3,a,"f")}get ctx(){return oL(this,e3,"f")}setPhase(e){oI(this,e1,e,"f")}setFrameDims(e){for(let t of(oI(this,e4,e,"f"),oL(this,e3,"f").resolution=[e.canvasBufferSize[0],e.canvasBufferSize[1]],oL(this,eZ,"f")))t.resolver.resize?.(e.outputBufferW,e.outputBufferH)}setEffectDims(e){oL(this,e3,"f").dims=e}setFrameState(e){let t=oL(this,e3,"f");t.time=e.time,t.deltaTime=e.deltaTime,t.mouse=e.mouse,t.mouseViewport=e.mouseViewport,t.intersection=e.intersection,t.enterTime=e.enterTime,t.leaveTime=e.leaveTime,t.enterProgress=e.enterProgress,t.leaveProgress=e.leaveProgress,t.uniforms=e.uniforms}setSrc(e){oL(this,e3,"f").src=e}setOutput(e){oL(this,e3,"f").target=e}passthroughCopy(e,t,i){let r=oL(this,e1,"f");oI(this,e1,"render","f");let s=oL(this,e3,"f").target;oL(this,e3,"f").target=t;try{let r=oL(this,e4,"f").outputViewport;oL(this,e4,"f").outputViewport={...i};let s=oL(this,e3,"f").vfxProps.glslVersion;oL(this,eX,"m",ti).call(this,{frag:"100"===s?oH:o$,uniforms:{src:e},target:t}),oL(this,e4,"f").outputViewport=r}finally{oL(this,e3,"f").target=s,oI(this,e1,r,"f")}}clearRt(e){let t=oL(this,eG,"f"),i=e[oO];t.bindFramebuffer(t.FRAMEBUFFER,i.getWriteFbo().fbo),t.viewport(0,0,e.width,e.height),t.clearColor(0,0,0,0),t.disable(t.SCISSOR_TEST),t.clear(t.COLOR_BUFFER_BIT),t.bindFramebuffer(t.FRAMEBUFFER,null)}tickAutoUpdates(){for(let e of oL(this,e9,"f"))e()}dispose(){for(let e of(oI(this,e1,"disposed","f"),oL(this,e0,"f")))e();for(let e of(oI(this,e0,[],"f"),oL(this,eQ,"f")))e.resolver.dispose?.();for(let e of(oI(this,eQ,[],"f"),oI(this,eZ,[],"f"),oL(this,eY,"f")))e.dispose();oI(this,eY,[],"f"),oL(this,eK,"f").dispose(),oI(this,e9,[],"f")}}function oq(e){return void 0===e?["clamp","clamp"]:"string"==typeof e?[e,e]:[e[0],e[1]]}function oJ(e,t,i,r,s){let o={__brand:"EffectTexture",get width(){return t()},get height(){return i()},dispose(){r?.()},update(){s?.()}};return Object.defineProperty(o,oV,{value:e}),o}function oK(e,t,i,r){let s={__brand:"EffectRenderTarget",get width(){return t()},get height(){return i()},dispose:r??(()=>{}),generateMipmaps:()=>e.regenerateMipmaps?.()};return Object.defineProperty(s,oO,{value:e}),s}function oY(e){return oK({getReadTexture:()=>e.texture,getWriteFbo:()=>e},()=>e.width,()=>e.height)}function oQ(e){return"number"==typeof e?{top:e,right:e,bottom:e,left:e}:Array.isArray(e)?{top:e[0],right:e[1],bottom:e[2],left:e[3]}:{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}ej=new WeakMap,eG=new WeakMap,eq=new WeakMap,eJ=new WeakMap,eK=new WeakMap,eY=new WeakMap,eQ=new WeakMap,eZ=new WeakMap,e0=new WeakMap,e1=new WeakMap,e2=new WeakMap,e4=new WeakMap,e3=new WeakMap,e9=new WeakMap,eX=new WeakSet,e5=function(e){let t,i,r,s,o=e?.persistent??!1,a=e?.float??!1,n=oq(e?.wrap),l=e?.filter,f=e?.mipmap??!1,h=!1!==f,c=!0===f,u=e?.size,d=u?u[0]:oL(this,e4,"f").outputBufferW,p=u?u[1]:oL(this,e4,"f").outputBufferH;if(o){let e=u?1:oL(this,eq,"f"),s=u?d:d/e,o=u?p:p/e,f=new ol(oL(this,ej,"f"),s,o,e,a,{wrap:n,filter:l,mipmap:h});t={getReadTexture:()=>f.texture,getWriteFbo:()=>f.target,swap:()=>f.swap(),resize:u?void 0:(e,t)=>{f.resize(e/oL(this,eq,"f"),t/oL(this,eq,"f"))},dispose:()=>f.dispose()},h&&(t.regenerateMipmaps=()=>f.target.generateMipmaps(),t.mipmapAutoRegen=c),i=()=>f.target.width,r=()=>f.target.height}else{let e=new or(oL(this,ej,"f"),d,p,{float:a,wrap:n,filter:l,mipmap:h});t={getReadTexture:()=>e.texture,getWriteFbo:()=>e,resize:u?void 0:(t,i)=>e.setSize(t,i),dispose:()=>e.dispose()},h&&(t.regenerateMipmaps=()=>e.generateMipmaps(),t.mipmapAutoRegen=c),i=()=>e.width,r=()=>e.height}let m=oK(t,i,r,()=>oL(this,eX,"m",e6).call(this,s));return s={handle:m,resolver:t},oL(this,eQ,"f").push(s),u||oL(this,eZ,"f").push(s),m},e6=function(e){let t=oL(this,eQ,"f").indexOf(e);if(t<0)return;oL(this,eQ,"f").splice(t,1);let i=oL(this,eZ,"f").indexOf(e);i>=0&&oL(this,eZ,"f").splice(i,1),e.resolver.dispose?.()},e8=function(e,t){var i;let r,s,o,a,n=oq(t?.wrap),l=t?.filter,f=null,h=(i=e,!!(r=globalThis.WebGLTexture)&&"function"==typeof r&&i instanceof r||void 0===i.width&&void 0===i.naturalWidth&&void 0===i.videoWidth);if(h){if(!t?.size)throw Error("[VFX-JS] wrapTexture(WebGLTexture) requires opts.size");let[i,r]=t.size;s=new s8(oL(this,ej,"f"),void 0,{autoRegister:!1,externalHandle:e}),o=()=>i,a=()=>r}else{s=new s8(oL(this,ej,"f"),e);let i=t?.size,r=t=>i?"w"===t?i[0]:i[1]:"u">typeof HTMLImageElement&&e instanceof HTMLImageElement?"w"===t?e.naturalWidth:e.naturalHeight:"u">typeof HTMLVideoElement&&e instanceof HTMLVideoElement?"w"===t?e.videoWidth:e.videoHeight:"w"===t?e.width:e.height;o=()=>r("w"),a=()=>r("h");let n="u">typeof HTMLVideoElement&&e instanceof HTMLVideoElement||"u">typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"u">typeof OffscreenCanvas&&e instanceof OffscreenCanvas;(t?.autoUpdate??n)&&(f=()=>{s.needsUpdate=!0})}s.wrapS=n[0],s.wrapT=n[1],void 0!==l&&(s.minFilter=l,s.magFilter=l),oL(this,eY,"f").push(s),f&&oL(this,e9,"f").push(f);let c=!1;return oJ(()=>s,o,a,()=>{if(c)return;c=!0;let e=oL(this,eY,"f").indexOf(s);if(-1!==e&&oL(this,eY,"f").splice(e,1),f){let e=oL(this,e9,"f").indexOf(f);-1!==e&&oL(this,e9,"f").splice(e,1)}s.dispose()},h?void 0:()=>{c||(s.needsUpdate=!0)})},e7=function(e){if("render"!==oL(this,e1,"f")){"update"!==oL(this,e1,"f")||oL(this,e2,"f")||(oI(this,e2,!0,"f"),console.warn("[VFX-JS] ctx.draw() called in update(); ignored. Move draws to render()."));return}oL(this,eX,"m",ti).call(this,e)},te=function(e,t,i){if("render"!==oL(this,e1,"f")){"update"!==oL(this,e1,"f")||oL(this,e2,"f")||(oI(this,e2,!0,"f"),console.warn("[VFX-JS] ctx.blit() called in update(); ignored. Move draws to render()."));return}let r="100"===oL(this,e3,"f").vfxProps.glslVersion?oj:oX;oL(this,eX,"m",ti).call(this,{frag:r,uniforms:{src:e},target:t,blend:i?.blend,swap:i?.swap})},tt=function(e){if("render"!==oL(this,e1,"f")){"update"!==oL(this,e1,"f")||oL(this,e2,"f")||(oI(this,e2,!0,"f"),console.warn("[VFX-JS] ctx.clear() called in update(); ignored. Move draws to render()."));return}let t=oL(this,eG,"f"),i=oL(this,e3,"f").target,r=null==e?i:e,s=null===r||r===i;if(t.clearColor(0,0,0,0),s){let e=null===r?null:r[oO].getWriteFbo().fbo,i=oL(this,e4,"f").outputViewport;t.bindFramebuffer(t.FRAMEBUFFER,e),t.enable(t.SCISSOR_TEST),t.scissor(i.x,i.y,i.w,i.h),t.clear(t.COLOR_BUFFER_BIT),t.disable(t.SCISSOR_TEST),t.bindFramebuffer(t.FRAMEBUFFER,null);return}let o=r[oO];t.disable(t.SCISSOR_TEST);let a=()=>{t.bindFramebuffer(t.FRAMEBUFFER,o.getWriteFbo().fbo),t.clear(t.COLOR_BUFFER_BIT)};a(),o.swap&&(o.swap(),a(),o.swap()),t.bindFramebuffer(t.FRAMEBUFFER,null)},ti=function(e){let t,i,r,s,o,a,n,l=oL(this,eG,"f"),f=e.vert??("100"===oL(this,e3,"f").vfxProps.glslVersion?oN:oD),h=oL(this,eJ,"f").get(f,e.frag,oL(this,e3,"f").vfxProps.glslVersion),c=oL(this,e3,"f").target,u=void 0===e.target||null===e.target?c:e.target,d=null===u||u===c;if(null===u)t=null,i=oL(this,e4,"f").outputViewport.x,r=oL(this,e4,"f").outputViewport.y,s=oL(this,e4,"f").outputViewport.w,o=oL(this,e4,"f").outputViewport.h;else{let e=u[oO];t=e.getWriteFbo().fbo,d?(i=oL(this,e4,"f").outputViewport.x,r=oL(this,e4,"f").outputViewport.y,s=oL(this,e4,"f").outputViewport.w,o=oL(this,e4,"f").outputViewport.h):(i=0,r=0,s=u.width,o=u.height),a=e.swap,e.mipmapAutoRegen&&(n=e.regenerateMipmaps)}l.bindFramebuffer(l.FRAMEBUFFER,t),l.viewport(i,r,s,o),l.disable(l.SCISSOR_TEST),ok(l,e.blend??(null===u?"premultiplied":"none")),h.use();let p=oL(this,eX,"m",tr).call(this,e.uniforms);h.uploadUniforms(p);let m=e.geometry??o_;m===o_?oL(this,eK,"f").quad.draw():oL(this,eK,"f").resolve(m,h).draw(),n?.(),a&&!1!==e.swap&&a()},tr=function(e){let t={};if(t.contentRectUv={value:oL(this,e4,"f").contentRectUv},t.srcRectUv={value:oL(this,e4,"f").srcRectUv},!e)return t;for(let[i,r]of Object.entries(e))t[i]=function(e){if("object"==typeof e&&null!==e&&"__brand"in e)return"EffectRenderTarget"===e.__brand?{value:e[oO].getReadTexture()}:{value:e[oV]()};return{value:e}}(r);return t};let oZ={top:0,right:0,bottom:0,left:0};function o0(e){return{top:e.top,right:e.right,bottom:e.bottom,left:e.left}}function o1(e){return{top:e.top,left:e.left,right:e.left+Math.ceil(e.right-e.left),bottom:e.top+Math.ceil(e.bottom-e.top)}}function o2(e,t){return{top:e.top-t.top,right:e.right+t.right,bottom:e.bottom+t.bottom,left:e.left-t.left}}function o4(e,t,i){return Math.min(Math.max(e,t),i)}function o3(e,t,i,r){let s=Math.min(r-i,t-e);if(s<=0)return 0;let o=o4(i,e,t);return(o4(r,e,t)-o)/s}var o5=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},o6=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class o8{constructor(e,t,i,r,s,o,a,n){ts.add(this),to.set(this,void 0),ta.set(this,void 0),tn.set(this,void 0),tl.set(this,void 0),tf.set(this,void 0),th.set(this,void 0),tc.set(this,void 0),tu.set(this,void 0),td.set(this,[]),tp.set(this,[]),tm.set(this,void 0),tv.set(this,new Set),tg.set(this,!1),tw.set(this,void 0),tx.set(this,oQ(0)),ty.set(this,null),o5(this,to,e,"f"),o5(this,ta,t,"f"),o5(this,tn,i,"f"),o5(this,tl,s,"f"),o5(this,tf,n,"f"),o5(this,th,r,"f"),o5(this,tm,o,"f"),o5(this,tw,a,"f"),o5(this,tc,r.map(()=>o6(this,ts,"m",tT).call(this)),"f"),0===r.length&&o5(this,ty,o6(this,ts,"m",tT).call(this),"f"),o5(this,tu,o6(this,ts,"m",tb).call(this),"f")}get effects(){return o6(this,th,"f")}get hosts(){return o6(this,tc,"f")}get renderingIndices(){return o6(this,tu,"f")}get stages(){return o6(this,tp,"f")}get hitTestPadBuffer(){return o6(this,tx,"f")}async initAll(){for(let e=0;e<o6(this,th,"f").length;e++){let t=o6(this,th,"f")[e],i=o6(this,tc,"f")[e];i.setPhase("init");try{t.init&&await t.init(i.ctx)}catch(t){console.error(`[VFX-JS] effect[${e}].init() failed:`,t);for(let t=e-1;t>=0;t--)o6(this,ts,"m",tE).call(this,t),o6(this,tc,"f")[t].dispose();throw o6(this,tc,"f")[e].dispose(),t}i.setPhase("update")}}run(e){if(o6(this,tg,"f")||!e.isVisible)return;o5(this,tu,o6(this,ts,"m",tb).call(this),"f");let t=o6(this,tu,"f").length;for(let t of o6(this,tc,"f"))t.setFrameState({time:e.time,deltaTime:e.deltaTime,mouse:e.mouse,mouseViewport:e.mouseViewport,intersection:e.intersection,enterTime:e.enterTime,leaveTime:e.leaveTime,enterProgress:e.enterProgress,leaveProgress:e.leaveProgress,uniforms:e.resolvedUniforms});o6(this,ts,"m",tM).call(this,e);for(let t=0;t<o6(this,tc,"f").length;t++)o6(this,tc,"f")[t].setFrameDims(o6(this,ts,"m",tW).call(this,t,e)),o6(this,tc,"f")[t].setEffectDims(o6(this,ts,"m",tR).call(this,t,e));for(let e=0;e<o6(this,th,"f").length;e++){let t=o6(this,th,"f")[e];if(!t.update)continue;let i=o6(this,tc,"f")[e];i.setPhase("update");try{t.update(i.ctx)}catch(i){let t=`${e}:update`;o6(this,tv,"f").has(t)||(o6(this,tv,"f").add(t),console.warn(`[VFX-JS] effect[${e}].update() threw; skipping this frame's update:`,i))}}if(0===t)return void(o6(this,ty,"f")??o6(this,tc,"f")[0]).passthroughCopy(o6(this,tm,"f"),e.finalTarget,e.elementRectOnCanvasPx);for(let i=0;i<t;i++){let r,s=o6(this,tu,"f")[i],o=o6(this,tc,"f")[s],a=o6(this,th,"f")[s];if(!a.render)continue;o.setPhase("render"),o.tickAutoUpdates();let n=0===i?o6(this,tm,"f"):o6(this,td,"f")[i-1].texHandle;o.setSrc(n),i===t-1?r=e.finalTarget:(r=o6(this,td,"f")[i].rtHandle,o.clearRt(r)),o.setOutput(r);try{a.render(o.ctx)}catch(l){let e=`${s}:render`;o6(this,tv,"f").has(e)||(o6(this,tv,"f").add(e),console.warn(`[VFX-JS] effect[${s}].render() threw; falling back to passthrough:`,l));let a=o6(this,tp,"f")[i].outputViewport;null===r?o.passthroughCopy(n,null,a):i===t-1?o.passthroughCopy(n,r,a):o.passthroughCopy(n,r,{x:0,y:0,w:r.width,h:r.height})}o.setPhase("update")}}dispose(){if(!o6(this,tg,"f")){o5(this,tg,!0,"f");for(let e=o6(this,th,"f").length-1;e>=0;e--)o6(this,ts,"m",tE).call(this,e),o6(this,tc,"f")[e].dispose();for(let e of(o6(this,ty,"f")&&(o6(this,ty,"f").dispose(),o5(this,ty,null,"f")),o6(this,td,"f")))e.fb.dispose();o5(this,td,[],"f"),o5(this,tp,[],"f")}}async replaceEffects(e){if(o6(this,tg,"f"))throw Error("[VFX-JS] replaceEffects on disposed chain");let t=o6(this,th,"f"),i=o6(this,tc,"f"),r=new Map;for(let e=0;e<t.length;e++)r.set(t[e],i[e]);let s=Array(e.length),o=[];for(let t=0;t<e.length;t++){let i=e[t],a=r.get(i);if(a)s[t]=a,r.delete(i);else{let e=o6(this,ts,"m",tT).call(this);s[t]=e,o.push({host:e,effect:i})}}for(let e=0;e<o.length;e++){let{host:t,effect:i}=o[e];t.setPhase("init");try{i.init&&await i.init(t.ctx),t.setPhase("update")}catch(i){console.error("[VFX-JS] replaceEffects: new effect init() failed:",i);for(let t=e-1;t>=0;t--){let e=o[t];if(e.effect.dispose)try{e.effect.dispose()}catch(e){console.error("[VFX-JS] dispose during init rollback threw:",e)}e.host.dispose()}throw t.dispose(),i}}for(let[e,t]of r){if(e.dispose)try{e.dispose()}catch(e){console.error("[VFX-JS] effect.dispose() threw during replaceEffects:",e)}t.dispose()}for(let e of o6(this,td,"f"))e.fb.dispose();o5(this,td,[],"f"),o5(this,tp,[],"f"),0!==e.length||o6(this,ty,"f")?e.length>0&&o6(this,ty,"f")&&(o6(this,ty,"f").dispose(),o5(this,ty,null,"f")):o5(this,ty,o6(this,ts,"m",tT).call(this),"f"),o5(this,th,e,"f"),o5(this,tc,s,"f"),o5(this,tu,o6(this,ts,"m",tb).call(this),"f"),o6(this,tv,"f").clear()}}to=new WeakMap,ta=new WeakMap,tn=new WeakMap,tl=new WeakMap,tf=new WeakMap,th=new WeakMap,tc=new WeakMap,tu=new WeakMap,td=new WeakMap,tp=new WeakMap,tm=new WeakMap,tv=new WeakMap,tg=new WeakMap,tw=new WeakMap,tx=new WeakMap,ty=new WeakMap,ts=new WeakSet,tb=function(){return o6(this,th,"f").map((e,t)=>"function"==typeof e.render&&!1!==e.enabled?t:-1).filter(e=>e>=0)},tT=function(){return new oG(o6(this,to,"f"),o6(this,ta,"f"),o6(this,tn,"f"),o6(this,tm,"f"),o6(this,tl,"f"),o6(this,tf,"f"))},tE=function(e){let t=o6(this,th,"f")[e];if(t.dispose)try{t.dispose()}catch(t){console.error(`[VFX-JS] effect[${e}].dispose() threw:`,t)}},tM=function(e){let t=o6(this,tu,"f").length;if(o5(this,tp,Array(t),"f"),0===t)return;let i=o6(this,tw,"f")?e.canvasBufferSize:e.elementBufferSize,r=[0,0,i[0],i[1]],s=o6(this,ts,"m",tP).call(this,e),o=r;for(let i=0;i<t;i++){let a=o6(this,tu,"f")[i],n=o6(this,th,"f")[a],l=i===t-1,f=o6(this,ts,"m",tS).call(this,n,o,r,s,e)??o,h=[f[2],f[3]],c=function(e,t){let[i,r,s,o]=e,[a,n,l,f]=t;return l<=0||f<=0?[0,0,1,1]:[(i-a)/l,(r-n)/f,s/l,o/f]}(r,f),u=l?{x:e.elementRectOnCanvasPx.x+f[0],y:e.elementRectOnCanvasPx.y+f[1],w:h[0],h:h[1]}:{x:0,y:0,w:h[0],h:h[1]};o6(this,tp,"f")[i]={dstRect:f,dstBufferSize:h,contentRectUv:c,outputViewport:u},l||o6(this,ts,"m",tC).call(this,i,h),o=f}let[a,n,l,f]=o6(this,tp,"f")[t-1].dstRect;o5(this,tx,oQ({top:Math.max(0,n+f-i[1]),right:Math.max(0,a+l-i[0]),bottom:Math.max(0,-n),left:Math.max(0,-a)}),"f")},tS=function(e,t,i,r,s){if(e.outputRect)return e.outputRect(o6(this,ts,"m",tk).call(this,s,i,t,r))},tk=function(e,t,i,r){let s=e.canvasBufferSize[0]/e.canvasSize[0]||1;return{element:o6(this,tw,"f")?e.canvasSize:e.elementSize,elementPixel:o6(this,tw,"f")?e.canvasBufferSize:e.elementBufferSize,canvas:e.canvasSize,canvasPixel:e.canvasBufferSize,pixelRatio:s,contentRect:t,srcRect:i,canvasRect:r}},tR=function(e,t){let i=o6(this,tw,"f")?t.canvasBufferSize:t.elementBufferSize,r=[0,0,i[0],i[1]],s=o6(this,ts,"m",tP).call(this,t),o=o6(this,tu,"f").indexOf(e),a=o<=0?r:o6(this,tp,"f")[o-1].dstRect;return o6(this,ts,"m",tk).call(this,t,r,a,s)},tC=function(e,t){let i=o6(this,td,"f")[e];if(i&&i.fb.width===t[0]&&i.fb.height===t[1])return;i&&i.fb.dispose();let r=new or(o6(this,to,"f"),t[0],t[1]),s=oY(r),o=oJ(()=>r.texture,()=>r.width,()=>r.height);o6(this,td,"f")[e]={fb:r,rtHandle:s,texHandle:o,bufferSize:t}},tP=function(e){let[t,i]=e.canvasBufferSize;if(o6(this,tw,"f"))return[0,0,t,i];let{x:r,y:s}=e.elementRectOnCanvasPx;return[-r,-s,t,i]},tW=function(e,t){let i,r,s,o,a,n=o6(this,tu,"f").indexOf(e);if(n<0)s={x:0,y:0,w:i=t.elementBufferSize[0],h:r=t.elementBufferSize[1]},o=[0,0,1,1],a=[0,0,1,1];else{let e=o6(this,tp,"f")[n];i=e.dstBufferSize[0],r=e.dstBufferSize[1],s=e.outputViewport,o=e.contentRectUv,a=0===n?[0,0,1,1]:o6(this,tp,"f")[n-1].contentRectUv}return{outputBufferW:i,outputBufferH:r,canvasBufferSize:t.canvasBufferSize,outputViewport:s,elementBufferW:t.elementBufferSize[0],elementBufferH:t.elementBufferSize[1],contentRectUv:o,srcRectUv:a}};var o9=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},o7=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class ae{constructor(e){tA.add(this),tF.set(this,void 0),tz.set(this,new Set),o9(this,tF,e,"f")}freezeInside(e,t){let i={root:e,entries:[]};for(let r of t)!r.frozen&&at(e,r.element)&&(r.frozen=!0,i.entries.push({e:r,opacity:r.element.style.opacity}),o7(this,tF,"f").showPlain(r));o7(this,tz,"f").add(i);let r=!1;return()=>{if(!r){for(let{e}of(r=!0,o7(this,tz,"f").delete(i),i.entries))e.frozen=!1;requestAnimationFrame(()=>{for(let{e,opacity:t}of i.entries)!e.frozen&&o7(this,tF,"f").isRegistered(e)&&o7(this,tF,"f").hidePlain(e,t)})}}}adopt(e,t){let i=o7(this,tA,"m",t_).call(this,e.element);return!!i&&(e.frozen=!0,i.entries.push({e,opacity:t??e.element.style.opacity}),!0)}}function at(e,t){return t!==e&&e.contains(t)}function ai(e){this.data=e,this.pos=0}function ar(e){this.stream=new ai(e),this.output={}}tF=new WeakMap,tz=new WeakMap,tA=new WeakSet,t_=function(e){for(let t of o7(this,tz,"f"))if(at(t.root,e))return t},ai.prototype.readByte=function(){return this.data[this.pos++]},ai.prototype.peekByte=function(){return this.data[this.pos]},ai.prototype.readBytes=function(e){return this.data.subarray(this.pos,this.pos+=e)},ai.prototype.peekBytes=function(e){return this.data.subarray(this.pos,this.pos+e)},ai.prototype.readString=function(e){for(var t="",i=0;i<e;i++)t+=String.fromCharCode(this.readByte());return t},ai.prototype.readBitArray=function(){for(var e=[],t=this.readByte(),i=7;i>=0;i--)e.push(!!(t&1<<i));return e},ai.prototype.readUnsigned=function(e){var t=this.readBytes(2);return e?(t[1]<<8)+t[0]:(t[0]<<8)+t[1]},ar.prototype.parse=function(e){return this.parseParts(this.output,e),this.output},ar.prototype.parseParts=function(e,t){for(var i=0;i<t.length;i++){var r=t[i];this.parsePart(e,r)}},ar.prototype.parsePart=function(e,t){var i,r=t.label;if(!t.requires||t.requires(this.stream,this.output,e))if(t.loop){for(var s=[];t.loop(this.stream);){var o={};this.parseParts(o,t.parts),s.push(o)}e[r]=s}else t.parts?(i={},this.parseParts(i,t.parts),e[r]=i):t.parser?(i=t.parser(this.stream,this.output,e),t.skip||(e[r]=i)):t.bits&&(e[r]=this.parseBits(t.bits))},ar.prototype.parseBits=function(e){var t={},i=this.stream.readBitArray();for(var r in e){var s=e[r];s.length?t[r]=i.slice(s.index,s.index+s.length).reduce(function(e,t){return 2*e+t},0):t[r]=i[s.index]}return t};let as=function(){return function(e){return e.readByte()}},ao=function(e){return function(t){return t.readBytes(e)}},aa=function(e){return function(t){return t.readString(e)}},an=function(e){return function(t){return t.readUnsigned(e)}},al=function(e,t){return function(i,r,s){for(var o=t(i,r,s),a=Array(o),n=0;n<o;n++)a[n]=i.readBytes(e);return a}};var af={label:"blocks",parser:function(e){for(var t=[],i=0,r=e.readByte();0!==r;r=e.readByte())t.push(e.readBytes(r)),i+=r;var s=new Uint8Array(i);i=0;for(var o=0;o<t.length;o++)s.set(t[o],i),i+=t[o].length;return s}},ah={label:"gce",requires:function(e){var t=e.peekBytes(2);return 33===t[0]&&249===t[1]},parts:[{label:"codes",parser:ao(2),skip:!0},{label:"byteSize",parser:as()},{label:"extras",bits:{future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}}},{label:"delay",parser:an(!0)},{label:"transparentColorIndex",parser:as()},{label:"terminator",parser:as(),skip:!0}]},ac={label:"image",requires:function(e){return 44===e.peekByte()},parts:[{label:"code",parser:as(),skip:!0},{label:"descriptor",parts:[{label:"left",parser:an(!0)},{label:"top",parser:an(!0)},{label:"width",parser:an(!0)},{label:"height",parser:an(!0)},{label:"lct",bits:{exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}}}]},{label:"lct",requires:function(e,t,i){return i.descriptor.lct.exists},parser:al(3,function(e,t,i){return Math.pow(2,i.descriptor.lct.size+1)})},{label:"data",parts:[{label:"minCodeSize",parser:as()},af]}]},au={label:"text",requires:function(e){var t=e.peekBytes(2);return 33===t[0]&&1===t[1]},parts:[{label:"codes",parser:ao(2),skip:!0},{label:"blockSize",parser:as()},{label:"preData",parser:function(e,t,i){return e.readBytes(i.text.blockSize)}},af]},ad={label:"application",requires:function(e,t,i){var r=e.peekBytes(2);return 33===r[0]&&255===r[1]},parts:[{label:"codes",parser:ao(2),skip:!0},{label:"blockSize",parser:as()},{label:"id",parser:function(e,t,i){return e.readString(i.blockSize)}},af]},ap={label:"comment",requires:function(e,t,i){var r=e.peekBytes(2);return 33===r[0]&&254===r[1]},parts:[{label:"codes",parser:ao(2),skip:!0},af]},am=[{label:"header",parts:[{label:"signature",parser:aa(3)},{label:"version",parser:aa(3)}]},{label:"lsd",parts:[{label:"width",parser:an(!0)},{label:"height",parser:an(!0)},{label:"gct",bits:{exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}}},{label:"backgroundColorIndex",parser:as()},{label:"pixelAspectRatio",parser:as()}]},{label:"gct",requires:function(e,t){return t.lsd.gct.exists},parser:al(3,function(e,t){return Math.pow(2,t.lsd.gct.size+1)})},{label:"frames",parts:[ah,ad,ap,ac,au],loop:function(e){var t=e.peekByte();return 33===t||44===t}}];function av(e){var t=new ar(new Uint8Array(e));this.raw=t.parse(am),this.raw.hasImages=!1;for(var i=0;i<this.raw.frames.length;i++)if(this.raw.frames[i].image){this.raw.hasImages=!0;break}}av.prototype.decompressFrame=function(e,t){if(e>=this.raw.frames.length)return null;var i=this.raw.frames[e];if(i.image){var r=i.image.descriptor.width*i.image.descriptor.height,s=function(e,t,i){var r,s,o,a,n,l,f,h,c,u,d,p,m,v,g,w=Array(i),x=Array(4096),y=Array(4096),b=Array(4097);for(n=(s=1<<e)+1,r=s+2,f=-1,o=(1<<(a=e+1))-1,c=0;c<s;c++)x[c]=0,y[c]=c;for(d=h=p=m=g=v=0,u=0;u<i;){if(0===m){if(h<a){d+=t[v]<<h,h+=8,v++;continue}if(c=d&o,d>>=a,h-=a,c>r||c==n)break;if(c==s){o=(1<<(a=e+1))-1,r=s+2,f=-1;continue}if(-1==f){b[m++]=y[c],f=c,p=c;continue}for(l=c,c==r&&(b[m++]=p,c=f);c>s;)b[m++]=y[c],c=x[c];p=255&y[c],b[m++]=p,r<4096&&(x[r]=f,y[r]=p,(++r&o)==0&&r<4096&&(a++,o+=r)),f=l}m--,w[g++]=b[m],u++}for(u=g;u<i;u++)w[u]=0;return w}(i.image.data.minCodeSize,i.image.data.blocks,r);i.image.descriptor.lct.interlaced&&(s=function(e,t){for(var i=Array(e.length),r=e.length/t,s=[0,4,2,1],o=[8,8,4,2],a=0,n=0;n<4;n++)for(var l=s[n];l<r;l+=o[n])!function(r,s){var o=e.slice(s*t,(s+1)*t);i.splice.apply(i,[r*t,t].concat(o))}(l,a),a++;return i}(s,i.image.descriptor.width));var o={pixels:s,dims:{top:i.image.descriptor.top,left:i.image.descriptor.left,width:i.image.descriptor.width,height:i.image.descriptor.height}};return i.image.descriptor.lct&&i.image.descriptor.lct.exists?o.colorTable=i.image.lct:o.colorTable=this.raw.gct,i.gce&&(o.delay=10*(i.gce.delay||10),o.disposalType=i.gce.extras.disposal,i.gce.extras.transparentColorGiven&&(o.transparentIndex=i.gce.transparentColorIndex)),t&&(o.patch=function(e){for(var t=e.pixels.length,i=new Uint8ClampedArray(4*t),r=0;r<t;r++){var s=4*r,o=e.pixels[r],a=e.colorTable[o];i[s]=a[0],i[s+1]=a[1],i[s+2]=a[2],i[s+3]=255*(o!==e.transparentIndex)}return i}(o)),o}return null},av.prototype.decompressFrames=function(e,t,i){void 0===t&&(t=0),i=void 0===i?this.raw.frames.length:Math.min(i,this.raw.frames.length);for(var r=[],s=t;s<i;s++)this.raw.frames[s].image&&r.push(this.decompressFrame(s,e));return r};class ag{static async create(e,t){let i=await fetch(e).then(e=>e.arrayBuffer()).then(e=>new av(e)),r=i.decompressFrames(!0,void 0,void 0),{width:s,height:o}=i.raw.lsd;return new ag(r,s,o,t)}constructor(e,t,i,r){this.frames=[],this.index=0,this.playTime=0,this.frames=e,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.pixelRatio=r,this.canvas.width=t,this.canvas.height=i,this.startTime=Date.now()}getCanvas(){return this.canvas}update(){let e=Date.now()-this.startTime;for(;this.playTime<e;){let e=this.frames[this.index%this.frames.length];this.playTime+=e.delay,this.index++}let t=this.frames[this.index%this.frames.length],i=new ImageData(t.patch,t.dims.width,t.dims.height);this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.putImageData(i,t.dims.left,t.dims.top)}}var aw=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class ax{constructor(e,t=!1){this.isContextLost=!1,tU.set(this,new Set),tB.set(this,new Set),tI.set(this,new Set),tL.set(this,e=>{for(let t of(e.preventDefault(),this.isContextLost=!0,aw(this,tB,"f")))t()}),tV.set(this,()=>{this.isContextLost=!1;let e=this.gl;for(let t of(e.getExtension("EXT_color_buffer_float"),e.getExtension("EXT_color_buffer_half_float"),this.floatBlend=!!e.getExtension("EXT_float_blend"),aw(this,tU,"f")))t.restore();for(let e of aw(this,tI,"f"))e()});let i=e.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:t});if(!i)throw Error("[VFX-JS] WebGL2 is not available.");this.gl=i,this.canvas=e,i.getExtension("EXT_color_buffer_float"),i.getExtension("EXT_color_buffer_half_float"),this.floatBlend=!!i.getExtension("EXT_float_blend"),this.floatLinearFilter=!!i.getExtension("OES_texture_float_linear"),this.maxTextureSize=i.getParameter(i.MAX_TEXTURE_SIZE),e.addEventListener("webglcontextlost",aw(this,tL,"f"),!1),e.addEventListener("webglcontextrestored",aw(this,tV,"f"),!1)}setSize(e,t,i){let r=Math.floor(e*i),s=Math.floor(t*i);(this.canvas.width!==r||this.canvas.height!==s)&&(this.canvas.width=r,this.canvas.height=s)}addResource(e){aw(this,tU,"f").add(e)}removeResource(e){aw(this,tU,"f").delete(e)}onContextLost(e){return aw(this,tB,"f").add(e),()=>aw(this,tB,"f").delete(e)}onContextRestored(e){return aw(this,tI,"f").add(e),()=>aw(this,tI,"f").delete(e)}}tU=new WeakMap,tB=new WeakMap,tI=new WeakMap,tL=new WeakMap,tV=new WeakMap;var ay=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},ab=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class aT{constructor(e){tO.add(this),tD.set(this,void 0),tN.set(this,void 0),ay(this,tD,e,"f"),this.gl=e.gl,ab(this,tO,"m",t$).call(this),e.addResource(this)}restore(){ab(this,tO,"m",t$).call(this)}draw(){let e=this.gl;e.bindVertexArray(this.vao),e.drawArrays(e.TRIANGLES,0,6)}dispose(){ab(this,tD,"f").removeResource(this),this.gl.deleteVertexArray(this.vao),this.gl.deleteBuffer(ab(this,tN,"f"))}}function aE(e){return{phase:"hidden",direction:1,enterProgress:0,leaveProgress:0,isIn:!1,wasAbove:!1,wasBelow:!1,lastTime:e}}function aM(e,t){e.phase=t,e.direction=1,e.enterProgress=+("shown"===t),e.leaveProgress=0}function aS(e){return Math.min(Math.max(e,0),1)}function ak(e,t,i,r={}){return new or(e,t,i,{float:r.float??!1})}function aR(e,t){let i;i=t.renderingToBuffer?"none":t.premultipliedAlpha?"premultiplied":"normal";let r=t.glslVersion??oy(t.fragmentShader);return new oS(e,t.vertexShader??("100"===r?oh:of),t.fragmentShader,t.uniforms,i,r)}tD=new WeakMap,tN=new WeakMap,tO=new WeakSet,t$=function(){let e=this.gl,t=e.createVertexArray(),i=e.createBuffer();if(!t||!i)throw Error("[VFX-JS] Failed to create quad VAO");this.vao=t,ay(this,tN,i,"f");let r=new Float32Array([-1,-1,0,1,-1,0,-1,1,0,-1,1,0,1,-1,0,1,1,0]);e.bindVertexArray(t),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,r,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0),e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null)};var aC=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},aP=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class aW{constructor(e,t,i,r,s,o,a,n){if(tH.set(this,void 0),tX.set(this,void 0),tj.set(this,void 0),tG.set(this,void 0),tq.set(this,void 0),tJ.set(this,void 0),aC(this,tG,r??!1,"f"),aC(this,tq,s??!1,"f"),aC(this,tJ,o,"f"),aC(this,tX,{},"f"),aC(this,tH,{src:{value:null},offset:{value:new ov},resolution:{value:new ov},viewport:{value:new og},time:{value:0},mouse:{value:new ov},passIndex:{value:0}},"f"),i)for(let[e,t]of Object.entries(i))"function"==typeof t?(aP(this,tX,"f")[e]=t,aP(this,tH,"f")[e]={value:t()}):aP(this,tH,"f")[e]={value:t};this.pass=aR(e,{fragmentShader:t,uniforms:aP(this,tH,"f"),renderingToBuffer:a??!1,premultipliedAlpha:!0,glslVersion:n})}get uniforms(){return aP(this,tH,"f")}setUniforms(e,t,i,r,s,o){aP(this,tH,"f").src.value=e,aP(this,tH,"f").resolution.value.set(i.w*t,i.h*t),aP(this,tH,"f").offset.value.set(i.x*t,i.y*t),aP(this,tH,"f").time.value=r,aP(this,tH,"f").mouse.value.set(s*t,o*t)}updateCustomUniforms(e){for(let[e,t]of Object.entries(aP(this,tX,"f")))aP(this,tH,"f")[e]&&(aP(this,tH,"f")[e].value=t());if(e)for(let[t,i]of Object.entries(e))aP(this,tH,"f")[t]&&(aP(this,tH,"f")[t].value=i())}initializeBackbuffer(e,t,i,r){aP(this,tG,"f")&&!aP(this,tj,"f")&&(aP(this,tJ,"f")?aC(this,tj,new ol(e,aP(this,tJ,"f")[0],aP(this,tJ,"f")[1],1,aP(this,tq,"f")),"f"):aC(this,tj,new ol(e,t,i,r,aP(this,tq,"f")),"f"))}resizeBackbuffer(e,t){aP(this,tj,"f")&&!aP(this,tJ,"f")&&aP(this,tj,"f").resize(e,t)}registerBufferUniform(e){aP(this,tH,"f")[e]||(aP(this,tH,"f")[e]={value:null})}get backbuffer(){return aP(this,tj,"f")}get persistent(){return aP(this,tG,"f")}get float(){return aP(this,tq,"f")}get size(){return aP(this,tJ,"f")}dispose(){this.pass.dispose(),aP(this,tj,"f")?.dispose()}}tH=new WeakMap,tX=new WeakMap,tj=new WeakMap,tG=new WeakMap,tq=new WeakMap,tJ=new WeakMap;var aA=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},aF=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class az{constructor(e){tK.set(this,void 0),tY.set(this,new Map),aA(this,tK,e,"f")}get(e,t,i){let r=`${t}\0${e}\0${i??""}`,s=aF(this,tY,"f").get(r);return s||(s=new ob(aF(this,tK,"f"),e,t,i),aF(this,tY,"f").set(r,s)),s}get size(){return aF(this,tY,"f").size}dispose(){for(let e of aF(this,tY,"f").values())e.dispose();aF(this,tY,"f").clear()}}tK=new WeakMap,tY=new WeakMap;var a_=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},aU=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let aB=new Map,aI=!1;function aL(e,t){return"hic"===e||!0===t?null:"number"==typeof t?t.toString():"video"===e?"0.0001":"0"}function aV(e,t){let i=e.getContext("2d");i&&(i.clearRect(0,0,e.width,e.height),i.drawImage(t,0,0,e.width,e.height))}class aO{constructor(e,t){tQ.add(this),tZ.set(this,void 0),t0.set(this,void 0),t1.set(this,void 0),t2.set(this,void 0),t4.set(this,void 0),t3.set(this,void 0),t5.set(this,void 0),t6.set(this,[]),t8.set(this,void 0),t9.set(this,new Map),t7.set(this,null),ie.set(this,!1),it.set(this,new WeakSet),ii.set(this,{}),ir.set(this,{}),is.set(this,0),io.set(this,void 0),ia.set(this,2),il.set(this,[]),ih.set(this,new ae({showPlain:e=>{if("hic"===e.type){let t=e.srcTexture.source;t instanceof OffscreenCanvas&&aV(e.element,t)}else e.element.style.setProperty("opacity",e.originalOpacity.toString())},hidePlain:(e,t)=>{if("hic"===e.type){let t=e.element;t.getContext("2d")?.clearRect(0,0,t.width,t.height)}else e.element.style.opacity=t},isRegistered:e=>aU(this,il,"f").includes(e)})),ic.set(this,0),iu.set(this,1),id.set(this,Date.now()/1e3),ip.set(this,!1),im.set(this,oQ(0)),iv.set(this,oQ(0)),ig.set(this,[0,0]),iw.set(this,0),ix.set(this,0),iy.set(this,0),ib.set(this,0),iT.set(this,new WeakMap),iM.set(this,async()=>{for(let e of aU(this,il,"f"))if("text"===e.type&&e.isInViewport){let t=e.element.getBoundingClientRect(),i=Math.ceil(t.width),r=Math.ceil(t.height);(i!==e.width||r!==e.height)&&(await aU(this,tQ,"m",ik).call(this,e),e.width=i,e.height=r)}for(let e of aU(this,il,"f"))if("text"===e.type&&!e.isInViewport){let t=e.element.getBoundingClientRect(),i=Math.ceil(t.width),r=Math.ceil(t.height);(i!==e.width||r!==e.height)&&(await aU(this,tQ,"m",ik).call(this,e),e.width=i,e.height=r)}}),iS.set(this,e=>{a_(this,iy,e.clientX,"f"),a_(this,ib,window.innerHeight-e.clientY,"f")}),iW.set(this,()=>{this.isPlaying()&&(this.render(),a_(this,io,requestAnimationFrame(aU(this,iW,"f")),"f"))}),a_(this,tZ,e,"f"),a_(this,t0,t,"f"),a_(this,t1,new ax(t,e.preserveDrawingBuffer),"f"),a_(this,t2,aU(this,t1,"f").gl,"f"),aU(this,t2,"f").clearColor(0,0,0,0),a_(this,ia,e.pixelRatio,"f"),a_(this,iu,e.timeScale,"f"),a_(this,id,Date.now()/1e3,"f"),a_(this,t4,new aT(aU(this,t1,"f")),"f"),a_(this,t3,new az(aU(this,t1,"f")),"f"),window.addEventListener("resize",aU(this,iM,"f")),window.addEventListener("pointermove",aU(this,iS,"f")),aU(this,iM,"f").call(this),a_(this,t5,new oR(aU(this,t1,"f")),"f"),aU(this,tQ,"m",iO).call(this,e.postEffects),aU(this,t1,"f").onContextRestored(()=>{aU(this,t2,"f").clearColor(0,0,0,0)})}destroy(){for(let e of(this.stop(),window.removeEventListener("resize",aU(this,iM,"f")),window.removeEventListener("pointermove",aU(this,iS,"f")),aU(this,t8,"f")?.dispose(),aU(this,t9,"f").values()))e?.dispose();for(let e of aU(this,t6,"f"))e.pass.dispose();aU(this,t7,"f")&&(aU(this,t7,"f").dispose(),a_(this,t7,null,"f"),a_(this,ie,!1,"f")),aU(this,t5,"f").dispose(),aU(this,t3,"f").dispose(),aU(this,t4,"f").dispose()}async addElement(e,t={},i){let r,s,o;if(void 0!==t.effect)return aU(this,tQ,"m",iC).call(this,e,t,t.effect,i);let a=aU(this,tQ,"m",iP).call(this,t),n=e.getBoundingClientRect(),l=aJ(e)?o1(n):o0(n),[f,h]=aN(t.overflow),c=o2(l,h),u=a$(t.intersection),d=""===e.style.opacity?1:Number.parseFloat(e.style.opacity),p=!1;if(e instanceof HTMLImageElement){s="img";let t=sp(e);if(p=!!t.match(/\.gif/i)){let i=await ag.create(t,aU(this,ia,"f"));aB.set(e,i),r=new s8(aU(this,t1,"f"),i.getCanvas())}else{let e=await oe(t);r=new s8(aU(this,t1,"f"),e)}}else if(e instanceof HTMLVideoElement)r=new s8(aU(this,t1,"f"),e),s="video";else if(e instanceof HTMLCanvasElement)su(e)&&i?(r=new s8(aU(this,t1,"f"),i),s="hic"):(r=new s8(aU(this,t1,"f"),e),s="canvas");else{let t=await oC(e,d,void 0,this.maxTextureSize);r=new s8(aU(this,t1,"f"),t),s="text"}let[m,v]=aj(t.wrap);r.wrapS=m,r.wrapT=v,r.needsUpdate=!0;let g=t.autoCrop??!0,w=aL(s,t.overlay),x={src:{value:r},resolution:{value:new ov},offset:{value:new ov},time:{value:0},enterTime:{value:-1},leaveTime:{value:-1},enterProgress:{value:0},leaveProgress:{value:0},mouse:{value:new ov},intersection:{value:0},viewport:{value:new og},autoCrop:{value:g}},y={};if(void 0!==t.uniforms)for(let[e,i]of Object.entries(t.uniforms))"function"==typeof i?(x[e]={value:i()},y[e]=i):x[e]={value:i};if(t.backbuffer){let e,t;e=(c.right-c.left)*aU(this,ia,"f"),t=(c.bottom-c.top)*aU(this,ia,"f"),x.backbuffer={value:(o=new ol(aU(this,t1,"f"),e,t,aU(this,ia,"f"),!1)).texture}}let b=new Map,T=new Map;for(let e=0;e<a.length-1;e++){let t=a[e].target??`pass${e}`;a[e]={...a[e],target:t};let i=a[e].size,r=i?i[0]:(c.right-c.left)*aU(this,ia,"f"),s=i?i[1]:(c.bottom-c.top)*aU(this,ia,"f");if(a[e].persistent){let r=i?1:aU(this,ia,"f"),s=i?i[0]:c.right-c.left,o=i?i[1]:c.bottom-c.top;T.set(t,new ol(aU(this,t1,"f"),s,o,r,a[e].float))}else b.set(t,ak(aU(this,t1,"f"),r,s,{float:a[e].float}))}let E=[];for(let e=0;e<a.length;e++){let t=a[e],i=t.frag,r={...x},s={};for(let[e,s]of b)e!==t.target&&i.match(RegExp(`uniform\\s+sampler2D\\s+${e}\\b`))&&(r[e]={value:s.texture});for(let[e,t]of T)i.match(RegExp(`uniform\\s+sampler2D\\s+${e}\\b`))&&(r[e]={value:t.texture});if(t.uniforms)for(let[e,i]of Object.entries(t.uniforms))"function"==typeof i?(r[e]={value:i()},s[e]=i):r[e]={value:i};let o=aR(aU(this,t1,"f"),{vertexShader:t.vert,fragmentShader:i,uniforms:r,renderingToBuffer:void 0!==t.target,glslVersion:t.glslVersion});E.push({pass:o,uniforms:r,uniformGenerators:{...y,...s},target:t.target,persistent:t.persistent,float:t.float,size:t.size,backbuffer:t.target?T.get(t.target):void 0})}let M=aU(this,ic,"f"),S={type:s,element:e,isInViewport:!1,intersectionState:aE(M),width:l.right-l.left,height:l.bottom-l.top,passes:E,bufferTargets:b,startTime:M,enterTime:M,leaveTime:-1/0,release:t.release??1/0,isGif:p,isFullScreen:f,overflow:h,intersection:u,originalOpacity:d,srcTexture:r,zIndex:t.zIndex??0,backbuffer:o,autoCrop:g};aU(this,tQ,"m",iB).call(this,S,l,M),aU(this,tQ,"m",iR).call(this,S,w)}async updateElementEffects(e,t){let i=aU(this,il,"f").find(t=>t.element===e);if(!i)throw Error("[VFX-JS] updateElementEffects: element not registered");if(!i.chain)throw Error("[VFX-JS] updateElementEffects: element is on the shader path; effect-only updates are not supported");let r=Array.isArray(t)?[...t]:[t],s=i.chain.effects,o=new Set(s),a=[];for(let e of r)if(!o.has(e)){if(aU(this,it,"f").has(e))throw Error("[VFX-JS] Effect instance already attached. Construct a new instance per `vfx.add()` / `postEffect`.");a.push(e)}await i.chain.replaceEffects(r);let n=new Set(r);for(let e of s)n.has(e)||aU(this,it,"f").delete(e);for(let e of a)aU(this,it,"f").add(e)}removeElement(e){let t=aU(this,il,"f").findIndex(t=>t.element===e);if(-1!==t){let i=aU(this,il,"f").splice(t,1)[0];if(i.chain)aU(this,tQ,"m",i_).call(this,i.chain.effects),i.chain.dispose();else{for(let e of i.bufferTargets.values())e.dispose();for(let e of i.passes)e.pass.dispose(),e.backbuffer?.dispose();i.backbuffer?.dispose()}i.srcTexture.dispose(),e.style.setProperty("opacity",i.originalOpacity.toString())}}updateTextElement(e){let t=aU(this,il,"f").findIndex(t=>t.element===e);return -1!==t?aU(this,tQ,"m",ik).call(this,aU(this,il,"f")[t]):Promise.resolve()}async updateImageElement(e){let t=aU(this,il,"f").find(t=>t.element===e);if(t?.type!=="img"||t.isGif)return;let i=await oe(sp(e)),r=t.srcTexture,s=new s8(aU(this,t1,"f"),i);s.wrapS=r.wrapS,s.wrapT=r.wrapT,s.needsUpdate=!0,!t.chain&&t.passes.length>0&&(t.passes[0].uniforms.src.value=s),t.srcTexture=s,r.dispose()}updateCanvasElement(e){let t=aU(this,il,"f").find(t=>t.element===e);if(t){let i=t.srcTexture,r=new s8(aU(this,t1,"f"),e);r.wrapS=i.wrapS,r.wrapT=i.wrapT,r.needsUpdate=!0,!t.chain&&t.passes.length>0&&(t.passes[0].uniforms.src.value=r),t.srcTexture=r,i.dispose()}}updateHICTexture(e,t){let i=aU(this,il,"f").find(t=>t.element===e);if(i?.type!=="hic")return;i.frozen&&aV(e,t);let r=i.srcTexture;if(r.source===t)r.needsUpdate=!0;else{let e=new s8(aU(this,t1,"f"),t);e.wrapS=r.wrapS,e.wrapT=r.wrapT,e.needsUpdate=!0,!i.chain&&i.passes.length>0&&(i.passes[0].uniforms.src.value=e),i.srcTexture=e,r.dispose()}}freezeInside(e){return aU(this,ih,"f").freezeInside(e,aU(this,il,"f"))}isFrozen(e){return aU(this,il,"f").some(t=>t.element===e&&t.frozen)}forceRender(e){let t=aU(this,il,"f").find(t=>t.element===e);return!t||t.forceRender?()=>{}:(t.forceRender=!0,()=>{t.forceRender=!1})}get maxTextureSize(){return aU(this,t1,"f").maxTextureSize}isPlaying(){return void 0!==aU(this,io,"f")}play(){this.isPlaying()||(a_(this,id,Date.now()/1e3,"f"),a_(this,io,requestAnimationFrame(aU(this,iW,"f")),"f"))}get time(){return aU(this,ic,"f")}setTime(e){a_(this,ic,e,"f"),a_(this,ip,!0,"f")}get timeScale(){return aU(this,iu,"f")}set timeScale(e){a_(this,iu,e,"f")}stop(){void 0!==aU(this,io,"f")&&(cancelAnimationFrame(aU(this,io,"f")),a_(this,io,void 0,"f"))}render(){let e=Date.now()/1e3;aU(this,ip,"f")?a_(this,ip,!1,"f"):a_(this,ic,aU(this,ic,"f")+(e-aU(this,id,"f"))*aU(this,iu,"f"),"f"),a_(this,id,e,"f");let t=aU(this,ic,"f"),i=aU(this,t2,"f");aU(this,tQ,"m",iE).call(this),i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,aU(this,t0,"f").width,aU(this,t0,"f").height),i.clear(i.COLOR_BUFFER_BIT);let r=aU(this,im,"f").right-aU(this,im,"f").left,s=aU(this,im,"f").bottom-aU(this,im,"f").top,o={x:0,y:0,w:r,h:s},a=aU(this,tQ,"m",iF).call(this);for(let e of(a&&(aU(this,tQ,"m",iH).call(this,r,s),aU(this,t8,"f")&&(i.bindFramebuffer(i.FRAMEBUFFER,aU(this,t8,"f").fbo),i.clear(i.COLOR_BUFFER_BIT),i.bindFramebuffer(i.FRAMEBUFFER,null))),aU(this,il,"f"))){if(e.frozen){e.intersectionState.lastTime=t;continue}let i=e.element.getBoundingClientRect(),n="text"===e.type?o1(i):o0(i),l=aU(this,tQ,"m",iB).call(this,e,n,t);if(!l.isVisible)continue;if(e.chain){aU(this,tQ,"m",iA).call(this,e,n,l,t);continue}let f=e.passes[0].uniforms;for(let i of(f.time.value=t-e.startTime,f.resolution.value.set((n.right-n.left)*aU(this,ia,"f"),(n.bottom-n.top)*aU(this,ia,"f")),f.mouse.value.set((aU(this,iy,"f")+aU(this,iw,"f"))*aU(this,ia,"f"),(aU(this,ib,"f")+aU(this,ix,"f"))*aU(this,ia,"f")),e.passes))for(let[e,t]of Object.entries(i.uniformGenerators))i.uniforms[e].value=t();aB.get(e.element)?.update(),("video"===e.type||e.isGif)&&(f.src.value.needsUpdate=!0);let h=oo(n,s,aU(this,iw,"f"),aU(this,ix,"f")),c=oo(l.rectWithOverflow,s,aU(this,iw,"f"),aU(this,ix,"f"));e.backbuffer&&(e.passes[0].uniforms.backbuffer.value=e.backbuffer.texture);{let t=e.isFullScreen?o:c,i=Math.max(1,t.w*aU(this,ia,"f")),r=Math.max(1,t.h*aU(this,ia,"f")),s=Math.max(1,t.w),a=Math.max(1,t.h);for(let t=0;t<e.passes.length-1;t++){let o=e.passes[t];if(!o.size)if(o.backbuffer)o.backbuffer.resize(s,a);else{let t=e.bufferTargets.get(o.target);t&&(t.width!==i||t.height!==r)&&t.setSize(i,r)}}}let u=new Map;for(let t of e.passes)t.backbuffer&&t.target&&u.set(t.target,t.backbuffer.texture);let d=e.srcTexture;for(let t=0;t<e.passes.length-1;t++){let r=e.passes[t],s=e.isFullScreen?o:c;for(let[e,t]of(r.uniforms.src.value=d,u))r.uniforms[e]&&(r.uniforms[e].value=t);for(let[e,t]of Object.entries(r.uniformGenerators))r.uniforms[e]&&(r.uniforms[e].value=t());let a=r.size?{x:0,y:0,w:r.size[0],h:r.size[1]}:{x:0,y:0,w:s.w,h:s.h},n=function(e,t,i,r,s,o,a){let n=s[0]+o[0]-i.x,l=s[1]+o[1]-i.y;return r?{resolution:[r[0],r[1]],offset:[0,0],mouse:[n/i.w*r[0],l/i.h*r[1]]}:{resolution:[e.width*a,e.height*a],offset:[(t.x-i.x)*a,(t.y-i.y)*a],mouse:[n*a,l*a]}}(i,h,s,r.size,[aU(this,iy,"f"),aU(this,ib,"f")],[aU(this,iw,"f"),aU(this,ix,"f")],aU(this,ia,"f"));if(r.uniforms.resolution.value.set(...n.resolution),r.uniforms.offset.value.set(...n.offset),r.uniforms.mouse.value.set(...n.mouse),r.backbuffer)aU(this,tQ,"m",iL).call(this,r.pass,r.backbuffer.target,a,r.uniforms,!0),r.backbuffer.swap(),d=r.backbuffer.texture;else{let t=e.bufferTargets.get(r.target);if(!t)continue;aU(this,tQ,"m",iL).call(this,r.pass,t,a,r.uniforms,!0),d=t.texture}r.target&&u.set(r.target,d)}let p=e.passes[e.passes.length-1];for(let[e,t]of(p.uniforms.src.value=d,p.uniforms.resolution.value.set(i.width*aU(this,ia,"f"),i.height*aU(this,ia,"f")),p.uniforms.offset.value.set(h.x*aU(this,ia,"f"),h.y*aU(this,ia,"f")),p.uniforms.mouse.value.set((aU(this,iy,"f")+aU(this,iw,"f"))*aU(this,ia,"f"),(aU(this,ib,"f")+aU(this,ix,"f"))*aU(this,ia,"f")),u))p.uniforms[e]&&(p.uniforms[e].value=t);for(let[e,t]of Object.entries(p.uniformGenerators))p.uniforms[e]&&(p.uniforms[e].value=t());e.backbuffer?(p.uniforms.backbuffer.value=e.backbuffer.texture,e.isFullScreen?(e.backbuffer.resize(r,s),aU(this,tQ,"m",iV).call(this,e,h.x,h.y),aU(this,tQ,"m",iL).call(this,p.pass,e.backbuffer.target,o,p.uniforms,!0),e.backbuffer.swap(),aU(this,t5,"f").setUniforms(e.backbuffer.texture,aU(this,ia,"f"),o),aU(this,tQ,"m",iL).call(this,aU(this,t5,"f").pass,a&&aU(this,t8,"f")||null,o,aU(this,t5,"f").uniforms,!1)):(e.backbuffer.resize(c.w,c.h),aU(this,tQ,"m",iV).call(this,e,e.overflow.left,e.overflow.bottom),aU(this,tQ,"m",iL).call(this,p.pass,e.backbuffer.target,e.backbuffer.getViewport(),p.uniforms,!0),e.backbuffer.swap(),aU(this,t5,"f").setUniforms(e.backbuffer.texture,aU(this,ia,"f"),c),aU(this,tQ,"m",iL).call(this,aU(this,t5,"f").pass,a&&aU(this,t8,"f")||null,c,aU(this,t5,"f").uniforms,!1))):(aU(this,tQ,"m",iV).call(this,e,h.x,h.y),aU(this,tQ,"m",iL).call(this,p.pass,a&&aU(this,t8,"f")||null,e.isFullScreen?o:c,p.uniforms,!1))}a&&aU(this,t8,"f")&&(aU(this,t7,"f")&&aU(this,ie,"f")?aU(this,tQ,"m",iN).call(this,o,t):aU(this,tQ,"m",i$).call(this,o,t))}}function aD(e,t){return t.left<=e.right&&t.right>=e.left&&t.top<=e.bottom&&t.bottom>=e.top}function aN(e){return!0===e?[!0,oZ]:void 0===e?[!1,oZ]:[!1,oQ(e)]}function a$(e){let t=e?.threshold??0,i=oQ(e?.rootMargin??0),r=e?.leaveThreshold??t,s=e?.duration??1;return Number.isFinite(s)&&s>0||(aI||(aI=!0,console.warn(`[VFX-JS] \`intersection.duration\` must be a finite number above 0, got ${s}. Using 1 instead.`)),s=1),{threshold:t,leaveThreshold:r,rootMargin:i,duration:s}}function aH(e,t){let i=e.source;return i?"u">typeof HTMLImageElement&&i instanceof HTMLImageElement?"w"===t?i.naturalWidth:i.naturalHeight:"u">typeof HTMLVideoElement&&i instanceof HTMLVideoElement?"w"===t?i.videoWidth:i.videoHeight:"w"===t?i.width:i.height:0}function aX(e){return"repeat"===e?"repeat":"mirror"===e?"mirror":"clamp"}function aj(e){if(!e)return["clamp","clamp"];if(Array.isArray(e))return[aX(e[0]),aX(e[1])];let t=aX(e);return[t,t]}function aG(e,t,i){return Math.max(t,Math.min(i,e))}function aq(e){return aG(e,-1e6,1e6)}function aJ(e){return!(e instanceof HTMLImageElement||e instanceof HTMLVideoElement||e instanceof HTMLCanvasElement)}tZ=new WeakMap,t0=new WeakMap,t1=new WeakMap,t2=new WeakMap,t4=new WeakMap,t3=new WeakMap,t5=new WeakMap,t6=new WeakMap,t8=new WeakMap,t9=new WeakMap,t7=new WeakMap,ie=new WeakMap,it=new WeakMap,ii=new WeakMap,ir=new WeakMap,is=new WeakMap,io=new WeakMap,ia=new WeakMap,il=new WeakMap,ih=new WeakMap,ic=new WeakMap,iu=new WeakMap,id=new WeakMap,ip=new WeakMap,im=new WeakMap,iv=new WeakMap,ig=new WeakMap,iw=new WeakMap,ix=new WeakMap,iy=new WeakMap,ib=new WeakMap,iT=new WeakMap,iM=new WeakMap,iS=new WeakMap,iW=new WeakMap,tQ=new WeakSet,iE=function(){let e,t,i=aU(this,t0,"f").ownerDocument,r="BackCompat"===i.compatMode?i.body:i.documentElement,s=r.clientWidth,o=r.clientHeight,a=window.scrollX,n=window.scrollY;if(aU(this,tZ,"f").fixedCanvas)e=0,t=0;else if(aU(this,tZ,"f").wrapper)e=s*aU(this,tZ,"f").scrollPadding[0],t=o*aU(this,tZ,"f").scrollPadding[1];else{let r=i.body.scrollWidth-(a+s),l=i.body.scrollHeight-(n+o);e=aG(s*aU(this,tZ,"f").scrollPadding[0],0,r),t=aG(o*aU(this,tZ,"f").scrollPadding[1],0,l)}let l=s+2*e,f=o+2*t;(l!==aU(this,ig,"f")[0]||f!==aU(this,ig,"f")[1])&&(aU(this,t0,"f").style.width=`${l}px`,aU(this,t0,"f").style.height=`${f}px`,aU(this,t1,"f").setSize(l,f,aU(this,ia,"f")),a_(this,im,oQ({top:-t,left:-e,right:s+e,bottom:o+t}),"f"),a_(this,iv,oQ({top:0,left:0,right:s,bottom:o}),"f"),a_(this,ig,[l,f],"f"),a_(this,iw,e,"f"),a_(this,ix,t,"f")),aU(this,tZ,"f").fixedCanvas||aU(this,t0,"f").style.setProperty("transform",`translate(${a-e}px, ${n-t}px)`)},ik=async function(e){if(!aU(this,iT,"f").get(e.element)){aU(this,iT,"f").set(e.element,!0);try{let t=e.srcTexture,i=t.source instanceof OffscreenCanvas?t.source:void 0,r=await oC(e.element,e.originalOpacity,i,this.maxTextureSize);if(0===r.width||0===r.height)return;let s=new s8(aU(this,t1,"f"),r);s.wrapS=t.wrapS,s.wrapT=t.wrapT,s.needsUpdate=!0,!e.chain&&e.passes.length>0&&(e.passes[0].uniforms.src.value=s),e.srcTexture=s,t.dispose()}catch(e){console.error(e)}finally{aU(this,iT,"f").set(e.element,!1)}}},iR=function(e,t){aU(this,ih,"f").adopt(e,t)||null===t||e.element.style.setProperty("opacity",t),aU(this,il,"f").push(e),aU(this,il,"f").sort((e,t)=>e.zIndex-t.zIndex)},iC=async function(e,t,i,r){let s,o;void 0!==t.shader&&console.warn("[VFX-JS] Both `shader` and `effect` specified; `effect` takes precedence."),void 0!==t.overflow&&console.warn("[VFX-JS] `overflow` is shader-path only and is ignored by the effect path. Use each effect's own `outputRect` (with `dims.canvasRect` for fullscreen) to control its dst rect.");let a=Array.isArray(i)?[...i]:[i];aU(this,tQ,"m",iz).call(this,a);let n=e.getBoundingClientRect(),l=aJ(e)?o1(n):o0(n),[f,h]=aN(t.overflow),c=a$(t.intersection),u=""===e.style.opacity?1:Number.parseFloat(e.style.opacity),d=!1;if(e instanceof HTMLImageElement){o="img";let t=sp(e);if(d=!!t.match(/\.gif/i)){let i=await ag.create(t,aU(this,ia,"f"));aB.set(e,i),s=new s8(aU(this,t1,"f"),i.getCanvas())}else{let e=await oe(t);s=new s8(aU(this,t1,"f"),e)}}else if(e instanceof HTMLVideoElement)s=new s8(aU(this,t1,"f"),e),o="video";else if(e instanceof HTMLCanvasElement)su(e)&&r?(s=new s8(aU(this,t1,"f"),r),o="hic"):(s=new s8(aU(this,t1,"f"),e),o="canvas");else{let t=await oC(e,u,void 0,this.maxTextureSize);s=new s8(aU(this,t1,"f"),t),o="text"}let[p,m]=aj(t.wrap);s.wrapS=p,s.wrapT=m,s.needsUpdate=!0;let v=t.autoCrop??!0,g=aL(o,t.overlay),w=aU(this,ic,"f"),x={type:o,element:e,isInViewport:!1,intersectionState:aE(w),width:l.right-l.left,height:l.bottom-l.top,passes:[],bufferTargets:new Map,startTime:w,enterTime:w,leaveTime:-1/0,release:t.release??1/0,isGif:d,isFullScreen:f,overflow:h,intersection:c,originalOpacity:u,srcTexture:s,zIndex:t.zIndex??0,backbuffer:void 0,autoCrop:v,effectLastRenderTime:w},y=oJ(()=>x.srcTexture,()=>aH(x.srcTexture,"w"),()=>aH(x.srcTexture,"h")),b={},T={};if(t.uniforms)for(let[e,i]of Object.entries(t.uniforms))"function"==typeof i?(T[e]=i,b[e]=i()):b[e]=i;x.effectUniformGenerators=T,x.effectStaticUniforms=b;let E={autoCrop:v,glslVersion:t.glslVersion??"300 es"},M=new o8(aU(this,t1,"f"),aU(this,t4,"f"),aU(this,ia,"f"),a,E,y,!1,aU(this,t3,"f"));try{await M.initAll()}catch(t){throw aU(this,tQ,"m",i_).call(this,a),s.dispose(),e.style.setProperty("opacity",u.toString()),t}x.chain=M,aU(this,tQ,"m",iB).call(this,x,l,w),aU(this,tQ,"m",iR).call(this,x,g)},iP=function(e){let t=t=>void 0===t.glslVersion&&void 0!==e.glslVersion?{...t,glslVersion:e.glslVersion}:t;return Array.isArray(e.shader)?e.shader.map(t):[t({frag:aU(this,tQ,"m",iI).call(this,e.shader||"uvGradient")})]},iA=function(e,t,i,r){let s=e.chain;if(!s)return;let o=aU(this,ia,"f");aB.get(e.element)?.update(),("video"===e.type||e.isGif)&&(e.srcTexture.needsUpdate=!0);let a={...e.effectStaticUniforms??{}};if(e.effectUniformGenerators)for(let[t,i]of Object.entries(e.effectUniformGenerators))a[t]=i();let n=aU(this,im,"f").right-aU(this,im,"f").left,l=aU(this,im,"f").bottom-aU(this,im,"f").top,f=oo(t,l,aU(this,iw,"f"),aU(this,ix,"f")),h=aU(this,iy,"f")+aU(this,iw,"f")-f.x,c=aU(this,ib,"f")+aU(this,ix,"f")-f.y,u=t.right-t.left,d=t.bottom-t.top,p=e.effectLastRenderTime??r;e.effectLastRenderTime=r;let m=aU(this,tQ,"m",iF).call(this)&&aU(this,t8,"f")?oY(aU(this,t8,"f")):null;s.run({time:r-e.startTime,deltaTime:r-p,mouse:[h*o,c*o],mouseViewport:[aU(this,iy,"f")*o,aU(this,ib,"f")*o],intersection:i.intersection,enterTime:aq(r-e.enterTime),leaveTime:aq(r-e.leaveTime),enterProgress:i.enterProgress,leaveProgress:i.leaveProgress,resolvedUniforms:a,canvasSize:[n,l],canvasBufferSize:[n*o,l*o],elementSize:[u,d],elementBufferSize:[u*o,d*o],elementRectOnCanvasPx:{x:f.x*o,y:f.y*o,w:f.w*o,h:f.h*o},finalTarget:m,isVisible:i.isVisible})},iF=function(){return aU(this,t6,"f").length>0||null!==aU(this,t7,"f")&&aU(this,ie,"f")},iz=function(e){for(let t of e)if(aU(this,it,"f").has(t))throw Error("[VFX-JS] Effect instance already attached. Construct a new instance per `vfx.add()` / `postEffect`.");for(let t of e)aU(this,it,"f").add(t)},i_=function(e){for(let t of e)aU(this,it,"f").delete(t)},iU=function(e){let t=e.hitTestPadBuffer,i=aU(this,ia,"f");return oQ({top:t.top/i,right:t.right/i,bottom:t.bottom/i,left:t.left/i})},iB=function(e,t,i){var r,s,o,a,n,l,f,h;let c,u,d,p=o2(t,e.chain?aU(this,tQ,"m",iU).call(this,e.chain):e.overflow),m=e.isFullScreen||aD(aU(this,iv,"f"),p),v=o2(aU(this,iv,"f"),e.intersection.rootMargin),g=o3(v.left,v.right,t.left,t.right)*o3(v.top,v.bottom,t.top,t.bottom);r=e,s=g,o=aD(v,t),a=i,u=(c=r.intersectionState).isIn,d=r.isFullScreen||function(e,t,i,r,s){let o=0===r?i:t>=r,a=0===s?!i:t<s,n=o&&!e.wasAbove,l=a&&!e.wasBelow;if(e.wasAbove=o,e.wasBelow=a,o&&!a)return!0;if(a&&!o)return!1;if(o&&a){if(n)return!0;if(l)return!1}return e.isIn}(c,s,o,r.intersection.threshold,r.intersection.leaveThreshold),!u&&d&&(r.enterTime=a,r.leaveTime=1/0),u&&!d&&(r.leaveTime=a),function(e,t,i,r){let s=i-e.lastTime;if(e.lastTime=i,e.isIn=t,function(e,t){switch(e.phase){case"hidden":if(t)return e.phase="entering",e.direction=1,!0;return!1;case"shown":if(!t)return e.phase="leaving",e.direction=1,!0;return!1;case"entering":return e.direction=t?1:-1,!1;case"leaving":return e.direction=t?-1:1,!1}}(e,t))return;let o=(s<0?s:e.direction*s)/r;if("entering"===e.phase){let t=e.enterProgress+o;o>0&&t>=1?aM(e,"shown"):o<0&&t<=0?aM(e,"hidden"):e.enterProgress=aS(t)}else if("leaving"===e.phase){let t=e.leaveProgress+o;o>0&&t>=1?aM(e,"hidden"):o<0&&t<=0?aM(e,"shown"):e.leaveProgress=aS(t)}}(c,d,a,r.intersection.duration);let{enterProgress:w,leaveProgress:x}=e.intersectionState;e.isInViewport=m;let y=m&&i-e.leaveTime<=e.release||!0===e.forceRender&&t.right>t.left&&t.bottom>t.top;return y&&!e.chain&&e.passes.length>0&&(n=e.passes[0].uniforms,l=e,f=g,h=i,n.intersection.value=f,n.enterTime.value=aq(h-l.enterTime),n.leaveTime.value=aq(h-l.leaveTime),n.enterProgress.value=l.intersectionState.enterProgress,n.leaveProgress.value=l.intersectionState.leaveProgress),{isVisible:y,intersection:g,rectWithOverflow:p,enterProgress:w,leaveProgress:x}},iI=function(e){return e in om?om[e]:e},iL=function(e,t,i,r,s){let o=aU(this,t2,"f");s&&null!==t&&t!==aU(this,t8,"f")&&(o.bindFramebuffer(o.FRAMEBUFFER,t.fbo),o.viewport(0,0,t.width,t.height),o.clear(o.COLOR_BUFFER_BIT));let a=r.viewport;a&&a.value instanceof og&&a.value.set(i.x*aU(this,ia,"f"),i.y*aU(this,ia,"f"),i.w*aU(this,ia,"f"),i.h*aU(this,ia,"f"));try{var n,l,f,h;let r,s,a,c,u,d,p,m;n=aU(this,t4,"f"),l=aU(this,ig,"f")[0],f=aU(this,ig,"f")[1],h=aU(this,ia,"f"),r=t?t.width/h:l,s=t?t.height/h:f,a=Math.max(0,i.x),c=Math.max(0,i.y),u=Math.min(r,i.x+i.w),d=Math.min(s,i.y+i.h),p=u-a,m=d-c,p<=0||m<=0||(o.bindFramebuffer(o.FRAMEBUFFER,t?t.fbo:null),o.viewport(Math.round(a*h),Math.round(c*h),Math.round(p*h),Math.round(m*h)),ok(o,e.blend),e.program.use(),e.program.uploadUniforms(e.uniforms),n.draw())}catch(e){console.error(e)}},iV=function(e,t,i){let r=e.passes[0].uniforms.offset.value;r.x=t*aU(this,ia,"f"),r.y=i*aU(this,ia,"f")},iO=function(e){let t=1!==e.length||"frag"in e[0]?null:e[0];if(t&&void 0!==t.effect)return void aU(this,tQ,"m",iD).call(this,t,t.effect);let i=[],r=[];for(let t of e)"frag"in t&&r.push(t);for(let e=0;e<r.length-1;e++)r[e].target||(r[e]={...r[e],target:`pass${e}`});for(let t of e){let e,r,s;if("frag"in t)e=t.frag,r=new aW(aU(this,t1,"f"),e,t.uniforms,t.persistent??!1,t.float??!1,t.size,void 0!==t.target,t.glslVersion),s=t.target;else{if(void 0===t.shader)throw Error("VFXPostEffect requires `shader` (the `effect` path is not implemented yet).");e=aU(this,tQ,"m",iI).call(this,t.shader),r=new aW(aU(this,t1,"f"),e,t.uniforms,t.persistent??!1,t.float??!1,void 0,!1,t.glslVersion),t.persistent&&r.registerBufferUniform("backbuffer"),s=void 0}i.push(e);let o={};if(t.uniforms)for(let[e,i]of Object.entries(t.uniforms))"function"==typeof i&&(o[e]=i);aU(this,t6,"f").push({pass:r,target:s,generators:o})}for(let e of r)e.target&&aU(this,t9,"f").set(e.target,void 0);let s=aU(this,t6,"f").map(e=>e.target).filter(e=>void 0!==e);for(let e=0;e<aU(this,t6,"f").length;e++)for(let t of s)i[e].match(RegExp(`uniform\\s+sampler2D\\s+${t}\\b`))&&aU(this,t6,"f")[e].pass.registerBufferUniform(t)},iD=function(e,t){void 0!==e.shader&&console.warn("[VFX-JS] Both `shader` and `effect` specified on post-effect; `effect` takes precedence.");let i=Array.isArray(t)?[...t]:[t];aU(this,tQ,"m",iz).call(this,i);let r=oJ(()=>{let e=aU(this,t8,"f");if(!e)throw Error("[VFX-JS] post-effect chain active without target");return e.texture},()=>aU(this,t8,"f")?.width??0,()=>aU(this,t8,"f")?.height??0),s={autoCrop:!0,glslVersion:e.glslVersion??"300 es"},o=new o8(aU(this,t1,"f"),aU(this,t4,"f"),aU(this,ia,"f"),i,s,r,!0,aU(this,t3,"f"));if(e.uniforms)for(let[t,i]of Object.entries(e.uniforms))"function"==typeof i?(aU(this,ir,"f")[t]=i,aU(this,ii,"f")[t]=i()):aU(this,ii,"f")[t]=i;a_(this,t7,o,"f"),a_(this,is,aU(this,ic,"f"),"f"),o.initAll().then(()=>{aU(this,t7,"f")===o&&a_(this,ie,!0,"f")}).catch(e=>{console.error("[VFX-JS] Post-effect init failed; post-effect disabled:",e),aU(this,t7,"f")===o&&(aU(this,tQ,"m",i_).call(this,aU(this,t7,"f").effects),aU(this,t7,"f").dispose(),a_(this,t7,null,"f"),a_(this,ie,!1,"f"))})},iN=function(e,t){let i=aU(this,t7,"f");if(!i)return;let r=aU(this,ia,"f"),s={...aU(this,ii,"f")};for(let[e,t]of Object.entries(aU(this,ir,"f")))s[e]=t();let o=aU(this,im,"f").right-aU(this,im,"f").left,a=aU(this,im,"f").bottom-aU(this,im,"f").top,n=t-aU(this,is,"f");a_(this,is,t,"f");let l=[o,a],f=[o*r,a*r],h={x:e.x*r,y:e.y*r,w:e.w*r,h:e.h*r};i.run({time:t,deltaTime:n,mouse:[aU(this,iy,"f")*r,aU(this,ib,"f")*r],mouseViewport:[aU(this,iy,"f")*r,aU(this,ib,"f")*r],intersection:1,enterTime:0,leaveTime:0,enterProgress:1,leaveProgress:0,resolvedUniforms:s,canvasSize:l,canvasBufferSize:f,elementSize:l,elementBufferSize:f,elementRectOnCanvasPx:h,finalTarget:null,isVisible:!0})},i$=function(e,t){if(!aU(this,t8,"f"))return;let i=aU(this,t8,"f").texture,r=new Map;for(let{pass:e,target:t}of aU(this,t6,"f"))t&&e.backbuffer&&r.set(t,e.backbuffer.texture);for(let s=0;s<aU(this,t6,"f").length;s++){let{pass:o,target:a,generators:n}=aU(this,t6,"f")[s],l=s===aU(this,t6,"f").length-1,f=aU(this,iy,"f")+aU(this,iw,"f"),h=aU(this,ib,"f")+aU(this,ix,"f"),c=o.size;if(c){let[r,s]=c;o.uniforms.src.value=i,o.uniforms.resolution.value.set(r,s),o.uniforms.offset.value.set(0,0),o.uniforms.time.value=t,o.uniforms.mouse.value.set(f/e.w*r,h/e.h*s)}else o.setUniforms(i,aU(this,ia,"f"),e,t,f,h);for(let[e,t]of(o.uniforms.passIndex.value=s,o.updateCustomUniforms(n),r)){let i=o.uniforms[e];i&&(i.value=t)}if(l)o.backbuffer?(o.uniforms.backbuffer&&(o.uniforms.backbuffer.value=o.backbuffer.texture),aU(this,tQ,"m",iL).call(this,o.pass,o.backbuffer.target,e,o.uniforms,!0),o.backbuffer.swap(),aU(this,t5,"f").setUniforms(o.backbuffer.texture,aU(this,ia,"f"),e),aU(this,tQ,"m",iL).call(this,aU(this,t5,"f").pass,null,e,aU(this,t5,"f").uniforms,!1)):aU(this,tQ,"m",iL).call(this,o.pass,null,e,o.uniforms,!1);else if(o.backbuffer){o.uniforms.backbuffer&&(o.uniforms.backbuffer.value=o.backbuffer.texture);let t=c?{x:0,y:0,w:c[0]/aU(this,ia,"f"),h:c[1]/aU(this,ia,"f")}:e;aU(this,tQ,"m",iL).call(this,o.pass,o.backbuffer.target,t,o.uniforms,!0),o.backbuffer.swap(),i=o.backbuffer.texture,a&&r.set(a,o.backbuffer.texture)}else{let t=a??`postEffect${s}`,n=aU(this,t9,"f").get(t),l=c?c[0]:e.w*aU(this,ia,"f"),f=c?c[1]:e.h*aU(this,ia,"f");n&&n.width===l&&n.height===f||(n?.dispose(),n=ak(aU(this,t1,"f"),l,f,{float:o.float}),aU(this,t9,"f").set(t,n));let h=c?{x:0,y:0,w:c[0]/aU(this,ia,"f"),h:c[1]/aU(this,ia,"f")}:e;aU(this,tQ,"m",iL).call(this,o.pass,n,h,o.uniforms,!0),i=n.texture,a&&r.set(a,n.texture)}}},iH=function(e,t){let i=e*aU(this,ia,"f"),r=t*aU(this,ia,"f");for(let{pass:s}of(aU(this,t8,"f")&&aU(this,t8,"f").width===i&&aU(this,t8,"f").height===r||(aU(this,t8,"f")?.dispose(),a_(this,t8,ak(aU(this,t1,"f"),i,r),"f")),aU(this,t6,"f")))s.persistent&&!s.backbuffer?s.initializeBackbuffer(aU(this,t1,"f"),e,t,aU(this,ia,"f")):s.backbuffer&&s.resizeBackbuffer(e,t)};var aK=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},aY=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};ij=new WeakMap,iG=new WeakMap,iq=new WeakMap,iJ=new WeakMap,iK=new WeakMap,iX=new WeakSet,iY=async function(e,t,i){if(aY(this,iK,"f"))return;if(!sX())return console.warn("html-in-canvas not supported, falling back to dom-to-canvas"),this.add(e,t);void 0!==t.overlay&&console.warn("addHTML does not support overlay mode (layoutsubtree hides children). Ignoring overlay option.");let{overlay:r,...s}=t,o=aY(this,iq,"f").get(e);o&&aY(this,ij,"f").removeElement(o);let{canvas:a,initialCapture:n}=await s$(e,{onCapture:e=>{aY(this,ij,"f").updateHICTexture(a,e)},maxSize:aY(this,ij,"f").maxTextureSize,stillCover:i?{zIndex:aY(this,iX,"m",iQ).call(this)}:void 0});o=a,aY(this,iq,"f").set(e,o),await aY(this,iX,"m",iZ).call(this,o,s,n)},iQ=function(){let e=Number.parseInt(aY(this,iG,"f").style.zIndex,10);return Number.isNaN(e)?9998:e-1},iZ=async function(e,t,i){try{await aY(this,ij,"f").addElement(e,t,i)}finally{sO(e,aY(this,ij,"f").isFrozen(e))}},i0=function(e,t){return e.complete?aY(this,ij,"f").addElement(e,t):new Promise(i=>{e.addEventListener("load",()=>{aY(this,ij,"f").addElement(e,t),i()},{once:!0})})},i1=function(e,t){return e.readyState>=3?aY(this,ij,"f").addElement(e,t):new Promise(i=>{e.addEventListener("canplay",()=>{aY(this,ij,"f").addElement(e,t),i()},{once:!0})})},i2=function(e,t){return aY(this,ij,"f").addElement(e,t)},i4=function(e,t){return aY(this,ij,"f").addElement(e,t)},e.s(["f",0,class e{static init(t){try{return new e(t)}catch{return null}}constructor(e={}){let t,i,r;if(iX.add(this),ij.set(this,void 0),iG.set(this,void 0),iq.set(this,new Map),iJ.set(this,new Set),iK.set(this,void 0),"u"<typeof document)throw"Cannot find 'document'. VFX-JS only runs on the browser.";if(!function(){try{let e=document.createElement("canvas"),t=e.getContext("webgl2")||e.getContext("webgl");return null!==t}catch{return!1}}())throw Error("[VFX-JS] WebGL is not available in this environment.");let s=(r=window.devicePixelRatio,t=void 0===e.scrollPadding?[.1,.1]:!1===e.scrollPadding?[0,0]:Array.isArray(e.scrollPadding)?[e.scrollPadding[0]??.1,e.scrollPadding[1]??.1]:[e.scrollPadding,e.scrollPadding],i=void 0===e.postEffect?[]:Array.isArray(e.postEffect)?e.postEffect:[e.postEffect],{pixelRatio:e.pixelRatio??r,zIndex:e.zIndex??void 0,autoplay:e.autoplay??!0,fixedCanvas:!1===e.scrollPadding,scrollPadding:t,wrapper:e.wrapper,postEffects:i,preserveDrawingBuffer:e.preserveDrawingBuffer??!1,timeScale:e.timeScale??1});aK(this,iK,function(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}(),"f");let o=document.createElement("canvas");for(let[e,t]of Object.entries({position:s.fixedCanvas?"fixed":"absolute",top:0,left:0,width:"0px",height:"0px","z-index":9999,"pointer-events":"none"}))o.style.setProperty(e,t.toString());void 0!==s.zIndex&&o.style.setProperty("z-index",s.zIndex.toString()),(s.wrapper??document.body).appendChild(o),aK(this,iG,o,"f"),aK(this,ij,new aO(s,o),"f"),s.autoplay&&this.play()}async add(e,t,i){aY(this,iK,"f")||(e instanceof HTMLImageElement?await aY(this,iX,"m",i0).call(this,e,t):e instanceof HTMLVideoElement?await aY(this,iX,"m",i1).call(this,e,t):e instanceof HTMLCanvasElement?su(e)&&i?await aY(this,iX,"m",iZ).call(this,e,t,i):await aY(this,iX,"m",i2).call(this,e,t):await aY(this,iX,"m",i4).call(this,e,t))}updateHICTexture(e,t){aY(this,ij,"f").updateHICTexture(e,t)}get reducedMotion(){return aY(this,iK,"f")}get maxTextureSize(){return aY(this,ij,"f").maxTextureSize}get canvas(){return aY(this,iG,"f")}addHTML(e,t){return aY(this,iX,"m",iY).call(this,e,t,!1)}addHTMLWithStill(e,t){return aY(this,iX,"m",iY).call(this,e,t,!0)}addTransition(e,t={}){let i=new s3(this,e,t,()=>aY(this,iJ,"f").delete(i));return aY(this,iJ,"f").add(i),i}freezeInside(e){return aY(this,ij,"f").freezeInside(e)}lockSize(e){let t=aY(this,iq,"f").get(e);return t?sL(t):()=>{}}forceRender(e){let t=aY(this,iq,"f").get(e)??e;return aY(this,ij,"f").forceRender(t)}remove(e){let t=aY(this,iq,"f").get(e);t?(sH(t,e),aY(this,iq,"f").delete(e),aY(this,ij,"f").removeElement(t)):aY(this,ij,"f").removeElement(e)}updateEffects(e,t){if(aY(this,iK,"f"))return Promise.resolve();let i=aY(this,iq,"f").get(e)??e;return aY(this,ij,"f").updateElementEffects(i,t)}async update(e){await this.updateInTime(e)}async updateInTime(e){let t=aY(this,iq,"f").get(e)??(e instanceof HTMLCanvasElement?e:null),i=t?sI(t):void 0;return i||(e instanceof HTMLImageElement?await aY(this,ij,"f").updateImageElement(e):e instanceof HTMLCanvasElement?aY(this,ij,"f").updateCanvasElement(e):await aY(this,ij,"f").updateTextElement(e),!0)}play(){aY(this,iK,"f")||aY(this,ij,"f").play()}stop(){aY(this,ij,"f").stop()}render(){aY(this,iK,"f")||aY(this,ij,"f").render()}get time(){return aY(this,ij,"f").time}setTime(e){aY(this,ij,"f").setTime(e)}get timeScale(){return aY(this,ij,"f").timeScale}set timeScale(e){aY(this,ij,"f").timeScale=e}destroy(){for(let e of aY(this,iJ,"f"))e.destroy();for(let[e,t]of(aY(this,iJ,"f").clear(),aY(this,iq,"f")))sH(t,e);aY(this,iq,"f").clear(),aY(this,ij,"f").destroy(),aY(this,iG,"f").remove()}}],61388),e.s([],90422);var aQ=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},aZ=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let a0=`
vec4 splitRead(vec2 uvr, vec2 uvg, vec2 uvb, bool to) {
  vec4 r = to ? readTo(uvr) : readFrom(uvr);
  vec4 g = to ? readTo(uvg) : readFrom(uvg);
  vec4 b = to ? readTo(uvb) : readFrom(uvb);
  return vec4(r.r, g.g, b.b, (r.a + g.a + b.a) / 3.0);
}
`,a1=`
float ign(vec2 p) {
  return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
}
`,a2=`
vec2 mirror(vec2 p) {
  return 1.0 - abs(1.0 - mod(p, 2.0));
}
`;class a4 extends sh{constructor(){super(...arguments),this.name="hard_cut",this.frag=`
vec4 transition(vec2 uv, float t) {
  return t < 0.5 ? readFrom(uv) : readTo(uv);
}
`}}let a3=e=>"function"==typeof e.render&&!1!==e.enabled;class a5{constructor(e={}){i3.set(this,[]),this.params=e}async init(e){for(let t of(aQ(this,i3,this.stages.slice(1).map(()=>e.createRenderTarget()),"f"),this.stages))await t.init?.(e)}start(e){for(let t of this.stages)t.start?.(e)}update(e){for(let t of this.stages)t.update?.(e)}render(e){let t=this.stages.filter(a3);if(0===t.length)return void e.blit(e.src);let i=e.src;for(let[r,s]of t.entries()){if(r===t.length-1)return void s.render?.({...e,src:i});let o=aZ(this,i3,"f")[r];e.clear(o),s.render?.(function(e,t,i){return{...e,src:t,target:i,draw:t=>e.draw({...t,target:t.target??i}),blit:(t,r,s)=>e.blit(t,r??i,s),clear:t=>e.clear(t??i)}}(e,i,o)),i=o}}end(){for(let e of this.stages)e.end?.()}outputRect(e){let t=this.stages.filter(a3);return t[t.length-1]?.outputRect?.(e)}dispose(){for(let e of this.stages)e.dispose?.();for(let e of aZ(this,i3,"f"))e.dispose();aQ(this,i3,[],"f")}}i3=new WeakMap,e.s(["f",0,class extends sh{constructor(){super(...arguments),this.name="crosszoom",this.overflow=!0,this.frag=`
const float STRENGTH = 0.4;
const float TAPS = 16.0;

${a1}
// Quintic ease in/out, so the blur builds up and settles smoothly.
float ease(float x) {
  return x < 0.5 ? 16.0 * x * x * x * x * x : 1.0 + 16.0 * pow(x - 1.0, 5.0);
}

vec4 transition(vec2 uv, float t) {
  float mixT = smoothstep(0.0, 1.0, ease(t));
  float strength = sin(t * 3.141593) * STRENGTH;
  vec2 dir = vec2(0.5) - uv;
  float jitter = ign(gl_FragCoord.xy);

  vec4 c = vec4(0.0);
  float total = 0.0;
  for (float n = 0.0; n < TAPS; n += 1.0) {
    float k = (n + jitter) / TAPS;
    // Weight taps near the pixel more, so edges stay readable.
    float w = 4.0 * (k - k * k);
    vec2 p = uv + dir * k * strength;
    c += mix(readFrom(p), readTo(p), mixT) * w;
    total += w;
  }
  return c / total;
}
`}}],75682);new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet;new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet;let a6=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D src;
uniform vec4 srcRectUv;
void main() {
    outColor = texture(src, srcRectUv.xy + uv * srcRectUv.zw);
}
`,a8=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D src;
void main() {
    outColor = texture(src, uv);
}
`;function a9(e,t){e.draw({frag:a6,uniforms:{src:e.src},target:t})}var a7=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},ne=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let nt=`#version 300 es
precision highp float;
in vec2 uvContent;
out vec4 outColor;
uniform sampler2D tex;
void main() {
    if (any(lessThan(uvContent, vec2(0.0))) || any(greaterThan(uvContent, vec2(1.0)))) {
        outColor = vec4(0.0);
        return;
    }
    vec4 c = texture(tex, uvContent);
    outColor = vec4(c.rgb * c.a, c.a);
}
`,ni=`#version 300 es
precision highp float;
out vec4 outMV;
uniform sampler2D uCur, uRef;
uniform vec2 uResolution;   // [w, h] in px
uniform float uBlock;       // block size in px
uniform float uSearch;      // search radius, in steps
uniform float uStep;        // px per step (coverage = uSearch * uStep px)
uniform float uHealRate;
uniform float uHealThreshold;
uniform float uFrame;
float hash(vec3 p) {
    uvec3 q = uvec3(p) * uvec3(1597334673u, 3812015801u, 2798796415u);
    return float((q.x ^ q.y ^ q.z) * 1597334673u) / 4294967295.0;
}
void main() {
    vec2 block = floor(gl_FragCoord.xy);
    vec2 base = block * uBlock;     // top-left pixel of this block

    // Cache the current block's 3x3 samples and their (offset, px) within
    // the block — the offsets are invariant across candidates.
    vec3 cs[9];
    vec2 off[9];
    for (int i = 0; i < 3; i++) {
      for (int j = 0; j < 3; j++) {
        int k = i * 3 + j;
        off[k] = vec2(1 + i * 2, 1 + j * 2) / 6.0 * uBlock;
        cs[k] = texture(uCur, (base + off[k] + 0.5) / uResolution).rgb;
      }
    }

    vec2 move = vec2(0.0);
    float bestSad = 1e9;
    float bestRaw = 0.0;
    for (float by = -uSearch; by <= uSearch; by++) {
      for (float bx = -uSearch; bx <= uSearch; bx++) {
        vec2 cand = vec2(bx, by) * uStep;   // candidate displacement, px
        float sad = 0.0;
        for (int k = 0; k < 9; k++) {
          vec3 cRef = texture(uRef, (base + off[k] + cand + 0.5) / uResolution).rgb;
          sad += dot(abs(cs[k] - cRef), vec3(1.0));
        }
        float raw = sad;
        sad += length(cand) * 0.0025;   // prefer small motion on ties
        if (sad < bestSad) {
          bestSad = sad;
          bestRaw = raw;
          move = cand;
        }
      }
    }

    // Mean abs diff per channel, 0..1.
    float err = bestRaw / 27.0;
    bool intra = hash(vec3(block, uFrame)) < uHealRate || err > uHealThreshold;
    outMV = vec4(move, intra ? 1.0 : 0.0, 1.0);
}
`,nr=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D uCur, uRef, uMV;
uniform vec2 uResolution;
void main() {
    vec2 mv = texture(uMV, uv).rg; // px
    vec3 cur = texture(uCur, uv).rgb;
    vec3 pred = texture(uRef, uv + mv / uResolution).rgb;
    outColor = vec4(cur - pred, 1.0);
}
`,ns=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D uAccum, uMV, uVideo, uResidual;
uniform vec2 uResolution;
uniform bool uIntra;
uniform bool uUseResidual;
void main() {
    if (uIntra || texture(uMV, uv).b > 0.5) {
        outColor = vec4(texture(uVideo, uv).rgb, 1.0);
        return;
    }
    vec2 mv = texture(uMV, uv).rg; // px
    vec3 pred = texture(uAccum, uv + mv / uResolution).rgb;
    vec3 res = uUseResidual ? texture(uResidual, uv).rgb : vec3(0.0);
    // Clamp like an 8-bit decoder so the feedback can't run away to white.
    outColor = vec4(clamp(pred + res, 0.0, 1.0), 1.0);
}
`,no=`#version 300 es
precision highp float;
in vec2 uvContent;
out vec4 outColor;
uniform sampler2D uMV;
uniform float uMvScale;     // magnitude normalization, px
vec3 hsv(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
void main() {
    vec2 mv = texture(uMV, uvContent).rg;
    float ang = atan(mv.y, mv.x) / 6.28318 + 0.5;
    float mag = clamp(length(mv) / max(uMvScale, 1.0), 0.0, 1.0);
    outColor = vec4(hsv(vec3(ang, 0.9, 0.15 + 0.85 * mag)), 1.0);
}
`,na=`#version 300 es
precision highp float;
in vec2 uvContent;
out vec4 outColor;
uniform sampler2D uResidual;
void main() {
    vec3 r = texture(uResidual, uvContent).rgb;
    outColor = vec4(clamp(r * 0.5 + 0.5, 0.0, 1.0), 1.0);
}
`,nn=`
float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
vec2 chroma(vec3 c) {
    return vec2(dot(c, vec3(-0.168736, -0.331264, 0.5)),
                dot(c, vec3(0.5, -0.418688, -0.081312))) + 0.5;
}
`,nl=`#version 300 es
precision highp float;
${nn}
in vec2 uv;
out vec4 outColor;
uniform sampler2D uCur, uRef, uMV;
uniform vec2 uChromaRes;
void main() {
    vec2 mvc = floor(texture(uMV, uv).rg * 0.5);
    vec2 pred = chroma(texture(uRef, uv + mvc / uChromaRes).rgb);
    outColor = vec4(chroma(texture(uCur, uv).rgb) - pred, 0.0, 1.0);
}
`,nf=`#version 300 es
precision highp float;
${nn}
in vec2 uv;
out vec4 outColor;
uniform sampler2D uAccum, uMV, uVideo, uResidual;
uniform vec2 uResolution;
uniform bool uIntra;
uniform bool uUseResidual;
void main() {
    // I-frame: passthrough the input
    if (uIntra || texture(uMV, uv).b > 0.5) {
        outColor = vec4(luma(texture(uVideo, uv).rgb), 0.0, 0.0, 1.0);
        return;
    }

    // P-frame: compose luma from acc + residual
    vec2 mv = texture(uMV, uv).rg; // px
    float pred = texture(uAccum, uv + mv / uResolution).r;
    float res = uUseResidual ? luma(texture(uResidual, uv).rgb) : 0.0;
    float Y = clamp(pred + res, 0.0, 1.0);

    outColor = vec4(Y, 0.0, 0.0, 1.0);
}
`,nh=`#version 300 es
precision highp float;
${nn}
in vec2 uv;
out vec4 outColor;
uniform sampler2D uChromaAcc, uMV, uVideo, uResidualC;
uniform vec2 uChromaRes;
uniform bool uIntra;
uniform bool uUseResidual;
void main() {
    // I-frame: passthrough the input
    if (uIntra || texture(uMV, uv).b > 0.5) {
        outColor = vec4(chroma(texture(uVideo, uv).rgb), 0.0, 1.0);
        return;
    }

    // P-frame: compose chroma from acc + residual. uResidualC is the
    // zero-centered chroma residual (built with the SAME truncated MV as
    // the prediction below, so they cancel when residual is on).
    vec2 mv = texture(uMV, uv).rg; // px (luma units)
    vec2 mvc = floor(mv * 0.5);
    vec2 pred = texture(uChromaAcc, uv + mvc / uChromaRes).rg;
    vec2 res = uUseResidual ? texture(uResidualC, uv).rg : vec2(0);
    vec2 C = clamp(pred + res, 0.0, 1.0);

    outColor = vec4(C, 0.0, 1.0);
}
`,nc=`#version 300 es
precision highp float;
in vec2 uvContent;
out vec4 outColor;
uniform sampler2D uLumaAcc;
uniform sampler2D uChromaAcc;
uniform float uChromaGain;
void main() {
    if (any(lessThan(uvContent, vec2(0.0))) || any(greaterThan(uvContent, vec2(1.0)))) {
        outColor = vec4(0.0);
        return;
    }
    float Y = texture(uLumaAcc, uvContent).r;
    vec2 cbcr = (texture(uChromaAcc, uvContent).rg - 0.5) * uChromaGain;
    vec3 rgb = vec3(
        Y + 1.402 * cbcr.y,
        Y - 0.344136 * cbcr.x - 0.714136 * cbcr.y,
        Y + 1.772 * cbcr.x
    );
    outColor = vec4(clamp(rgb, 0.0, 1.0), 1.0);
}
`,nu={blockSize:16,searchRange:5,searchStep:2,useResidual:!0,dup:0,colorSpace:"ycbcr",chromaGain:1,healRate:0,healThreshold:1,view:"output"};class nd{constructor(e={}){i5.add(this),i6.set(this,!1),i8.set(this,!0),i9.set(this,null),i7.set(this,null),re.set(this,null),rt.set(this,null),ri.set(this,null),rr.set(this,null),rs.set(this,null),ro.set(this,0),ra.set(this,0),rn.set(this,0),rl.set(this,0),rf.set(this,0),rh.set(this,0),rc.set(this,void 0),this.params={...nu,...e},a7(this,rc,this.params.colorSpace,"f")}setParams(e){Object.assign(this.params,e)}enable(){a7(this,i6,!0,"f")}disable(){a7(this,i6,!1,"f"),a7(this,i8,!0,"f")}get enabled(){return ne(this,i6,"f")}render(e){var t,i;ne(this,i5,"m",rd).call(this,e);let r=ne(this,i9,"f"),s=ne(this,i7,"f"),o=ne(this,re,"f"),a=ne(this,rt,"f"),n=ne(this,ri,"f"),l=ne(this,rr,"f"),f=ne(this,rs,"f");if(!r||!s||!o||!a||!n||!l||!f)return;this.params.colorSpace!==ne(this,rc,"f")&&(a7(this,rc,this.params.colorSpace,"f"),a7(this,i8,!0,"f"));let h=[ne(this,ro,"f"),ne(this,ra,"f")];a9(e,r);let c="output"!==this.params.view;if((ne(this,i6,"f")||c)&&(e.draw({frag:ni,uniforms:{uCur:r,uRef:s,uResolution:h,uBlock:ne(this,rf,"f"),uSearch:this.params.searchRange,uStep:this.params.searchStep,uHealRate:this.params.healRate,uHealThreshold:this.params.healThreshold,uFrame:(a7(this,rh,(i=ne(this,rh,"f"),t=i++,i),"f"),t%65536)},target:o}),e.draw({frag:nr,uniforms:{uCur:r,uRef:s,uMV:o,uResolution:h},target:a})),ne(this,i6,"f")){let t=ne(this,i8,"f")?1:1+this.params.dup,i=[ne(this,rn,"f"),ne(this,rl,"f")];"ycbcr"===this.params.colorSpace&&e.draw({frag:nl,uniforms:{uCur:r,uRef:s,uMV:o,uChromaRes:i},target:f});for(let s=0;s<t;s++){let t=this.params.useResidual&&0===s;"ycbcr"===this.params.colorSpace?(e.draw({frag:nf,uniforms:{uAccum:n,uMV:o,uVideo:r,uResidual:a,uResolution:h,uIntra:ne(this,i8,"f"),uUseResidual:t},target:n}),e.draw({frag:nh,uniforms:{uChromaAcc:l,uMV:o,uVideo:r,uResidualC:f,uChromaRes:i,uIntra:ne(this,i8,"f"),uUseResidual:t},target:l})):e.draw({frag:ns,uniforms:{uAccum:n,uMV:o,uVideo:r,uResidual:a,uResolution:h,uIntra:ne(this,i8,"f"),uUseResidual:t},target:n})}a7(this,i8,!1,"f")}else a7(this,i8,!0,"f");ne(this,i5,"m",rp).call(this,e,r,s,o,a,n,l),a9(e,s)}dispose(){ne(this,i5,"m",ru).call(this),a7(this,ro,0,"f"),a7(this,ra,0,"f"),a7(this,rn,0,"f"),a7(this,rl,0,"f"),a7(this,rf,0,"f"),a7(this,i8,!0,"f")}}i6=new WeakMap,i8=new WeakMap,i9=new WeakMap,i7=new WeakMap,re=new WeakMap,rt=new WeakMap,ri=new WeakMap,rr=new WeakMap,rs=new WeakMap,ro=new WeakMap,ra=new WeakMap,rn=new WeakMap,rl=new WeakMap,rf=new WeakMap,rh=new WeakMap,rc=new WeakMap,i5=new WeakSet,ru=function(){ne(this,i9,"f")?.dispose(),ne(this,i7,"f")?.dispose(),ne(this,re,"f")?.dispose(),ne(this,rt,"f")?.dispose(),ne(this,ri,"f")?.dispose(),ne(this,rr,"f")?.dispose(),ne(this,rs,"f")?.dispose(),a7(this,i9,null,"f"),a7(this,i7,null,"f"),a7(this,re,null,"f"),a7(this,rt,null,"f"),a7(this,ri,null,"f"),a7(this,rr,null,"f"),a7(this,rs,null,"f")},rd=function(e){let[t,i]=e.dims.elementPixel,r=Math.max(2,this.params.blockSize);if(ne(this,ro,"f")===t&&ne(this,ra,"f")===i&&ne(this,rf,"f")===r)return;ne(this,i5,"m",ru).call(this),a7(this,ro,t,"f"),a7(this,ra,i,"f"),a7(this,rn,Math.ceil(t/2),"f"),a7(this,rl,Math.ceil(i/2),"f"),a7(this,rf,r,"f"),a7(this,i8,!0,"f");let s=Math.ceil(t/r),o=Math.ceil(i/r);a7(this,i9,e.createRenderTarget({size:[t,i]}),"f"),a7(this,i7,e.createRenderTarget({size:[t,i],persistent:!0}),"f"),a7(this,rt,e.createRenderTarget({size:[t,i],float:!0}),"f"),a7(this,ri,e.createRenderTarget({size:[t,i],float:!0,persistent:!0}),"f"),a7(this,rr,e.createRenderTarget({size:[ne(this,rn,"f"),ne(this,rl,"f")],float:!0,persistent:!0}),"f"),a7(this,rs,e.createRenderTarget({size:[ne(this,rn,"f"),ne(this,rl,"f")],float:!0}),"f"),a7(this,re,e.createRenderTarget({size:[s,o],float:!0,filter:"nearest"}),"f")},rp=function(e,t,i,r,s,o,a){switch(this.params.view){case"motion":e.draw({frag:no,uniforms:{uMV:r,uMvScale:this.params.searchRange*this.params.searchStep},target:e.target});return;case"residual":e.draw({frag:na,uniforms:{uResidual:s},target:e.target});return;case"current":e.draw({frag:nt,uniforms:{tex:t},target:e.target});return;case"previous":e.draw({frag:nt,uniforms:{tex:i},target:e.target});return;default:ne(this,i6,"f")&&"ycbcr"===this.params.colorSpace?e.draw({frag:nc,uniforms:{uLumaAcc:o,uChromaAcc:a,uChromaGain:this.params.chromaGain},target:e.target}):e.draw({frag:nt,uniforms:{tex:ne(this,i6,"f")?o:t},target:e.target})}},new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap;var np=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)},nm=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i};let nv=`#version 300 es
precision highp float;
in vec2 uvSrc;
in vec2 uvContent;
out vec4 outColor;
uniform sampler2D src;
void main() {
    if (any(lessThan(uvContent, vec2(0.0))) ||
        any(greaterThan(uvContent, vec2(1.0)))) {
        outColor = vec4(0.0);
        return;
    }
    vec4 c = texture(src, uvSrc);
    outColor = vec4(c.rgb * c.a, c.a);
}
`,ng=`#version 300 es
precision highp float;
in vec2 uvContent;
out vec4 outColor;
uniform sampler2D tex;
void main() {
    if (any(lessThan(uvContent, vec2(0.0))) ||
        any(greaterThan(uvContent, vec2(1.0)))) {
        outColor = vec4(0.0);
        return;
    }
    vec4 c = texture(tex, uvContent);
    outColor = vec4(c.rgb * c.a, c.a);
}
`,nw={quality:.4,seed:.25,iterations:24,resolutionScale:1,randomFlip:!0,vertical:!1,speed:0,bypass:!1};function nx(e,t){if("u">typeof OffscreenCanvas)return new OffscreenCanvas(e,t);let i=document.createElement("canvas");return i.width=e,i.height=t,i}function ny(e){let t=e.getContext("2d");if(!t)throw Error("[VFX-JS] JPEGGlitchEffect: 2D canvas context unavailable");return t}function nb(e,t,i,r,s,o,a){switch(e.save(),e.clearRect(0,0,o,a),s){case 90:e.translate(o,0);break;case 180:e.translate(o,a);break;case 270:e.translate(0,a)}e.rotate(s*Math.PI/180),e.drawImage(t,0,0,i,r),e.restore()}class nT{get producedFrames(){return np(this,rD,"f")}constructor(e={}){rm.add(this),this.enabled=!0,rv.set(this,!1),rg.set(this,null),rw.set(this,null),rx.set(this,null),ry.set(this,null),rb.set(this,!1),rT.set(this,null),rE.set(this,null),rM.set(this,null),rS.set(this,null),rk.set(this,null),rR.set(this,null),rC.set(this,null),rP.set(this,new Uint8Array(0)),rW.set(this,null),rA.set(this,0),rF.set(this,0),rz.set(this,0),r_.set(this,0),rU.set(this,!0),rB.set(this,!1),rI.set(this,-1e9),rL.set(this,0),rV.set(this,0),rO.set(this,!1),rD.set(this,0),this.params={...nw,...e}}setParams(e){Object.assign(this.params,e),nm(this,rU,!0,"f")}init(e){nm(this,rv,"function"==typeof createImageBitmap&&("u">typeof OffscreenCanvas||"u">typeof document),"f"),np(this,rv,"f")&&(nm(this,rI,-1e9,"f"),nm(this,rU,!0,"f"),nm(this,rE,nx(1,1),"f"),nm(this,rM,ny(np(this,rE,"f")),"f"),nm(this,rS,nx(1,1),"f"),nm(this,rk,ny(np(this,rS,"f")),"f"),nm(this,rR,nx(1,1),"f"),nm(this,rC,ny(np(this,rR,"f")),"f"),nm(this,rg,e.createRenderTarget({size:[1,1]}),"f"),nm(this,rx,e.gl,"f"),np(this,rm,"m",rN).call(this,e),nm(this,rT,e.onContextRestored(()=>{np(this,rm,"m",rN).call(this,e),nm(this,rb,np(this,rO,"f"),"f")}),"f"))}update(){!1===this.enabled&&nm(this,rO,!1,"f")}render(e){if(this.params.bypass||!np(this,rv,"f")||!np(this,rg,"f")){nm(this,rO,!1,"f"),np(this,rm,"m",r$).call(this,e);return}let t=e.src.width,i=e.src.height;(t!==np(this,rz,"f")||i!==np(this,r_,"f"))&&(nm(this,rz,t,"f"),nm(this,r_,i,"f"),nm(this,rU,!0,"f"));let[r,s]=e.dims.elementPixel,o=Math.min(1,Math.max(0,this.params.resolutionScale)),a=Math.max(1,Math.round(r*o)),n=Math.max(1,Math.round(s*o));r>=2&&s>=2&&t>0&&i>0&&((a!==np(this,rA,"f")||n!==np(this,rF,"f"))&&np(this,rm,"m",rX).call(this,e,a,n),np(this,rm,"m",rH).call(this,e)&&np(this,rm,"m",rj).call(this,e)),np(this,rO,"f")&&np(this,rw,"f")?(np(this,rb,"f")&&np(this,rm,"m",rG).call(this,e),e.draw({frag:ng,uniforms:{tex:np(this,rw,"f")},target:e.target})):np(this,rm,"m",r$).call(this,e)}dispose(){var e;np(this,rT,"f")?.call(this),nm(this,rT,null,"f"),np(this,rx,"f")&&np(this,ry,"f")&&np(this,rx,"f").deleteTexture(np(this,ry,"f")),nm(this,ry,null,"f"),nm(this,rx,null,"f"),nm(this,rb,!1,"f"),np(this,rg,"f")?.dispose(),nm(this,rg,null,"f"),nm(this,rw,null,"f"),nm(this,rE,null,"f"),nm(this,rM,null,"f"),nm(this,rS,null,"f"),nm(this,rk,null,"f"),nm(this,rR,null,"f"),nm(this,rC,null,"f"),nm(this,rW,null,"f"),nm(this,rP,new Uint8Array(0),"f"),nm(this,rO,!1,"f"),nm(this,rB,!1,"f"),nm(this,rA,0,"f"),nm(this,rF,0,"f"),nm(this,rL,(e=np(this,rL,"f"),++e),"f")}}rv=new WeakMap,rg=new WeakMap,rw=new WeakMap,rx=new WeakMap,ry=new WeakMap,rb=new WeakMap,rT=new WeakMap,rE=new WeakMap,rM=new WeakMap,rS=new WeakMap,rk=new WeakMap,rR=new WeakMap,rC=new WeakMap,rP=new WeakMap,rW=new WeakMap,rA=new WeakMap,rF=new WeakMap,rz=new WeakMap,r_=new WeakMap,rU=new WeakMap,rB=new WeakMap,rI=new WeakMap,rL=new WeakMap,rV=new WeakMap,rO=new WeakMap,rD=new WeakMap,rm=new WeakSet,rN=function(e){let t=e.gl,i=t.createTexture();i&&(t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array([0,0,0,0])),t.bindTexture(t.TEXTURE_2D,null),nm(this,ry,i,"f"),nm(this,rw,e.wrapTexture(i,{size:[np(this,rA,"f")||1,np(this,rF,"f")||1]}),"f"))},r$=function(e){e.draw({frag:nv,uniforms:{src:e.src},target:e.target})},rH=function(e){if(np(this,rB,"f"))return!1;let t=this.params.speed;return t>0?e.time-np(this,rI,"f")>=1/t:np(this,rU,"f")},rX=function(e,t,i){var r;nm(this,rA,t,"f"),nm(this,rF,i,"f"),nm(this,rP,new Uint8Array(t*i*4),"f"),nm(this,rW,new ImageData(t,i),"f"),np(this,rE,"f")&&(np(this,rE,"f").width=t,np(this,rE,"f").height=i),np(this,rR,"f")&&(np(this,rR,"f").width=t,np(this,rR,"f").height=i),np(this,rg,"f")?.dispose(),nm(this,rg,e.createRenderTarget({size:[t,i]}),"f"),nm(this,rO,!1,"f"),nm(this,rU,!0,"f"),nm(this,rB,!1,"f"),nm(this,rb,!1,"f"),nm(this,rL,(r=np(this,rL,"f"),++r),"f")},rj=function(e){var t;let i,r=np(this,rA,"f"),s=np(this,rF,"f"),o=np(this,rE,"f"),a=np(this,rM,"f"),n=np(this,rS,"f"),l=np(this,rk,"f"),f=np(this,rW,"f");if(!o||!a||!n||!l||!f||!np(this,rg,"f"))return;a9(e,np(this,rg,"f"));let h=e.gl;h.readPixels(0,0,r,s,h.RGBA,h.UNSIGNED_BYTE,np(this,rP,"f")),h.bindFramebuffer(h.FRAMEBUFFER,null),nm(this,rB,!0,"f"),nm(this,rU,!1,"f"),nm(this,rI,e.time,"f");let c=f.data,u=4*r;for(let e=0;e<s;e++){let t=(s-1-e)*u;c.set(np(this,rP,"f").subarray(t,t+u),e*u)}for(let e=3;e<c.length;e+=4)c[e]=255;let d=this.params.speed>0?np(this,rV,"f"):0;nm(this,rV,(t=np(this,rV,"f"),++t),"f");let{quality:p,seed:m,iterations:v,randomFlip:g,vertical:w}=this.params,x=(i=Math.imul(0|Math.floor(0x9e3779b1*m),0x85ebca77)+Math.imul(d+1,0xc2b2ae3d)>>>0,()=>{let e=Math.imul((i=i+0x6d2b79f5>>>0)^i>>>15,1|i);return(((e=e+Math.imul(e^e>>>7,61|e)^e)^e>>>14)>>>0)/0x100000000}),y=g&&.5>x();a.putImageData(f,0,0);let b=(180*!!y+270*!!w)%360,T=w?s:r,E=w?r:s;n.width=T,n.height=E,nb(l,o,r,s,b,T,E),np(this,rm,"m",rq).call(this,n,r,s,p,v,b,x,np(this,rL,"f"))},rG=function(e){let t=e.gl;np(this,ry,"f")&&np(this,rR,"f")&&(t.bindTexture(t.TEXTURE_2D,np(this,ry,"f")),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,np(this,rR,"f")),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.bindTexture(t.TEXTURE_2D,null),nm(this,rb,!1,"f"))},rq=async function(e,t,i,r,s,o,a,n){var l;try{let f=await ("u">typeof OffscreenCanvas&&e instanceof OffscreenCanvas?e.convertToBlob({type:"image/jpeg",quality:r}):new Promise((t,i)=>{e.toBlob(e=>e?t(e):i(Error("[VFX-JS] JPEGGlitchEffect: toBlob failed")),"image/jpeg",r)})),h=new Uint8Array(await f.arrayBuffer()),c=function(e){for(let t=2;t+3<e.length;t++)if(255===e[t]&&218===e[t+1]){let i=e[t+2]<<8|e[t+3];return Math.min(e.length,t+2+i)}return Math.min(e.length,417)}(h);!function(e,t,i,r){let s=e.length-t-4;if(s<=1)return;let o=Math.max(1,Math.floor(i));for(let i=0;i<o;i++){let a=s/o*i|0,n=Math.max(1,(s/o*(i+1)|0)-a),l=Math.min(s,a+(r()*n|0)),f=256*r()|0;e[t+l]=f}}(h,c,s,a);let u=await createImageBitmap(new Blob([h],{type:"image/jpeg"}));n===np(this,rL,"f")&&np(this,rC,"f")&&(nb(np(this,rC,"f"),u,u.width,u.height,(360-o)%360,t,i),nm(this,rO,!0,"f"),nm(this,rD,(l=np(this,rD,"f"),++l),"f"),nm(this,rb,!0,"f")),u.close()}catch{}finally{n===np(this,rL,"f")&&nm(this,rB,!1,"f")}},new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap;new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet,new Float32Array([-.5,-.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,-.5,.5]);let nE=new Float32Array(4096);for(let e=0;e<4096;e++)nE[e]=e;new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,rJ=new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet;new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet;var nM=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)},nS=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i};let nk=`
float key(vec3 c, int mode) {
    if (mode == 0) return dot(c, vec3(0.299, 0.587, 0.114));
    if (mode == 1) return c.r;
    if (mode == 2) return c.g;
    if (mode == 3) return c.b;
    float mx = max(max(c.r, c.g), c.b);
    float mn = min(min(c.r, c.g), c.b);
    float d  = mx - mn;
    if (mode == 5) return mx > 0.0 ? d / mx : 0.0;
    if (d < 1e-5) return 0.0;
    float h;
    if (mx == c.r)      h = (c.g - c.b) / d + (c.g < c.b ? 6.0 : 0.0);
    else if (mx == c.g) h = (c.b - c.r) / d + 2.0;
    else                h = (c.r - c.g) / d + 4.0;
    return h / 6.0;
}
`,nR=`
ivec2 toXY(int a, int b, int axis) { return axis == 0 ? ivec2(a, b) : ivec2(b, a); }

// Map a box point (centred coords) back into source pixel space — the same
// box -> source rotation rotate-in uses.
vec2 boxToSrc(vec2 boxPx, vec2 imgSize, vec2 rot) {
    vec2 dSrc = vec2(rot.x * boxPx.x + rot.y * boxPx.y, -rot.y * boxPx.x + rot.x * boxPx.y);
    return dSrc + imgSize * 0.5;
}

// Rotated path: does the low-res cell (a along axis, b across) overlap the
// source rect? Run membership is LENIENT — the bound is grown by one cell so a
// boundary cell straddling the source edge still counts as inside. That keeps
// every full-res inside pixel backed by a sorted cell; the crisp edge is
// reimposed per output pixel in the gather (see boxToSrc clip). Without the
// slack, boundary cells fall out of the run at coarse sortRes and the gather
// shows the original image in a staircase along the edge.
bool insideSrc(int a, int b, int axis, vec2 lowSize, vec2 boxSize, vec2 imgSize, vec2 rot) {
    vec2 boxPx = (vec2(toXY(a, b, axis)) + 0.5) / lowSize * boxSize - boxSize * 0.5;
    vec2 sp = boxToSrc(boxPx, imgSize, rot);
    float m = axis == 0 ? boxSize.x / lowSize.x : boxSize.y / lowSize.y;
    return sp.x >= -m && sp.x <= imgSize.x + m && sp.y >= -m && sp.y <= imgSize.y + m;
}

// A cell belongs to a sort run when it is inside the source AND its key falls
// in the [lo, hi] band. Both ends are inclusive so the defaults lo == 0 /
// hi == 1 keep every source pixel instead of dropping pure-black or pure-white
// ones. In the rotated path the source bound comes from \`insideSrc\`
// (coordinate), decoupled from the band, so the run never extends into padding.
bool runActive(sampler2D s, int a, int b, int axis, int keyMode, float lo, float hi, int masked, vec2 lowSize, vec2 boxSize, vec2 imgSize, vec2 rot) {
    if (masked == 1 && !insideSrc(a, b, axis, lowSize, boxSize, imgSize, rot)) return false;
    float k = key(texelFetch(s, toXY(a, b, axis), 0).rgb, keyMode);
    return k >= lo && k <= hi;
}

void scanSegment(sampler2D s, int a, int b, int L, int keyMode, float lo, float hi, int axis, int masked, vec2 lowSize, vec2 boxSize, vec2 imgSize, vec2 rot, out int segStart, out int segEnd) {
    segStart = a;
    for (int i = 0; i < 8192; i++) {
        if (segStart <= 0) break;
        if (i >= L) break;
        if (!runActive(s, segStart - 1, b, axis, keyMode, lo, hi, masked, lowSize, boxSize, imgSize, rot)) break;
        segStart--;
    }
    segEnd = a + 1;
    for (int i = 0; i < 8192; i++) {
        if (segEnd >= L) break;
        if (i >= L) break;
        if (!runActive(s, segEnd, b, axis, keyMode, lo, hi, masked, lowSize, boxSize, imgSize, rot)) break;
        segEnd++;
    }
}
`,nC=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D src;
uniform vec2 srcSize;
uniform float threshold;
uniform float thresholdHigh;
uniform int keyMode;
uniform int direction;
uniform int axis;
uniform int masked;
uniform vec2 boxSize;
uniform vec2 imgSize;
uniform vec2 rot;
${nk}
${nR}
void main() {
    ivec2 p = ivec2(gl_FragCoord.xy);
    int a = axis == 0 ? p.x : p.y;
    int b = axis == 0 ? p.y : p.x;
    int L = int(axis == 0 ? srcSize.x : srcSize.y);
    float myKey = key(texelFetch(src, p, 0).rgb, keyMode);
    if (!runActive(src, a, b, axis, keyMode, threshold, thresholdHigh, masked, srcSize, boxSize, imgSize, rot)) {
        outColor = vec4(0.0, 0.0, 0.0, 1.0);
        return;
    }
    int segStart, segEnd;
    scanSegment(src, a, b, L, keyMode, threshold, thresholdHigh, axis, masked, srcSize, boxSize, imgSize, rot, segStart, segEnd);
    int rank = 0;
    for (int i = segStart; i < segEnd; i++) {
        if (i == a) continue;
        float k = key(texelFetch(src, toXY(i, b, axis), 0).rgb, keyMode);
        if (direction == 0) {
            if (k < myKey || (k == myKey && i < a)) rank++;
        } else {
            if (k > myKey || (k == myKey && i < a)) rank++;
        }
    }
    outColor = vec4(float(rank), float(segEnd - segStart), 0.0, 1.0);
}
`,nP=`#version 300 es
precision highp float;
in vec2 uv;
in vec2 uvContent;
in vec2 uvSrc;
out vec4 outColor;
uniform sampler2D src;
uniform sampler2D srcHi;
uniform sampler2D rankTex;
uniform vec2 lowSize;
uniform float threshold;
uniform float thresholdHigh;
uniform int keyMode;
uniform int axis;
uniform int masked;
uniform vec2 boxSize;
uniform vec2 imgSize;
uniform vec2 rot;
${nk}
${nR}
void main() {
    vec2 p = masked == 1 ? uv : uvContent;
    vec2 hiUv = masked == 1 ? uv : uvSrc;
    if (any(lessThan(p, vec2(0.0))) || any(greaterThan(p, vec2(1.0)))) {
        outColor = vec4(0.0);
        return;
    }
    // Crisp source edge at full output resolution. The lenient low-res run
    // membership lets sorted content spill up to a cell into the padding;
    // clip it back to the exact rotated rect here so the boundary is sharp
    // and never reveals the padding, independent of sortRes.
    if (masked == 1) {
        vec2 sp = boxToSrc(p * boxSize - boxSize * 0.5, imgSize, rot);
        if (sp.x < 0.0 || sp.x > imgSize.x || sp.y < 0.0 || sp.y > imgSize.y) {
            outColor = vec4(0.0);
            return;
        }
    }
    int lowA = axis == 0 ? int(p.x * lowSize.x) : int(p.y * lowSize.y);
    int b    = axis == 0 ? int(p.y * lowSize.y) : int(p.x * lowSize.x);
    int L    = int(axis == 0 ? lowSize.x : lowSize.y);
    ivec2 lowP = toXY(lowA, b, axis);
    float myKey = key(texelFetch(src, lowP, 0).rgb, keyMode);
    if (!runActive(src, lowA, b, axis, keyMode, threshold, thresholdHigh, masked, lowSize, boxSize, imgSize, rot)) {
        // padding / out-of-band pixels skip the low-res buffer entirely.
        vec4 c = texture(srcHi, hiUv);
        outColor = vec4(c.rgb * c.a, c.a);
        return;
    }
    int segStart, segEnd;
    scanSegment(src, lowA, b, L, keyMode, threshold, thresholdHigh, axis, masked, lowSize, boxSize, imgSize, rot, segStart, segEnd);
    int targetRank = lowA - segStart;
    for (int i = segStart; i < segEnd; i++) {
        int r = int(texelFetch(rankTex, toXY(i, b, axis), 0).r + 0.5);
        if (r == targetRank) {
            // unmoved pixels keep the hi-res source; moved pixels take the low-res sorted color
            if (i == lowA) {
                vec4 c = texture(srcHi, hiUv);
                outColor = vec4(c.rgb * c.a, c.a);
            } else {
                vec4 c = texelFetch(src, toXY(i, b, axis), 0);
                outColor = vec4(c.rgb * c.a, c.a);
            }
            return;
        }
    }
    vec4 c = texture(srcHi, hiUv);
    outColor = vec4(c.rgb * c.a, c.a);
}
`,nW=`#version 300 es
precision highp float;
in vec2 uvSrc;
out vec4 outColor;
uniform sampler2D src;
void main() {
    vec4 c = texture(src, uvSrc);
    outColor = vec4(c.rgb * c.a, c.a);
}
`,nA=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D src;
uniform vec4 srcRectUv;
uniform vec2 srcSize;
uniform vec2 boxSize;
uniform vec2 rot;
void main() {
    vec2 dBox = uv * boxSize - boxSize * 0.5;
    vec2 dSrc = vec2(
        rot.x * dBox.x + rot.y * dBox.y,
        -rot.y * dBox.x + rot.x * dBox.y
    );
    vec2 uvS = clamp((dSrc + srcSize * 0.5) / srcSize, 0.0, 1.0);
    outColor = texture(src, srcRectUv.xy + uvS * srcRectUv.zw);
}
`,nF=`#version 300 es
precision highp float;
in vec2 uvContent;
out vec4 outColor;
uniform sampler2D src;
uniform vec2 srcSize;
uniform vec2 boxSize;
uniform vec2 rot;
void main() {
    if (any(lessThan(uvContent, vec2(0.0))) || any(greaterThan(uvContent, vec2(1.0)))) {
        outColor = vec4(0.0);
        return;
    }
    vec2 dSrc = uvContent * srcSize - srcSize * 0.5;
    vec2 dBox = vec2(
        rot.x * dSrc.x - rot.y * dSrc.y,
        rot.y * dSrc.x + rot.x * dSrc.y
    );
    vec2 uvB = (dBox + boxSize * 0.5) / boxSize;
    outColor = texture(src, uvB);
}
`,nz={right:{axis:0,direction:0},left:{axis:0,direction:1},down:{axis:1,direction:1},up:{axis:1,direction:0}},n_={luminance:0,r:1,g:2,b:3,hue:4,saturation:5},nU={range:[0,1],sortRes:128,key:"luminance",direction:"up",angle:0,bypass:!1};class nB{constructor(e={}){rK.add(this),rY.set(this,null),rQ.set(this,null),rZ.set(this,null),r0.set(this,null),r1.set(this,0),r2.set(this,0),r4.set(this,0),r3.set(this,0),r5.set(this,0),r6.set(this,0),r8.set(this,0),this.params={...nU,...e},this.params.range=[...this.params.range]}setParams(e){Object.assign(this.params,e),e.range&&(this.params.range=[...e.range])}render(e){if(nM(this,rK,"m",r7).call(this,e),this.params.bypass||!nM(this,rY,"f")||!nM(this,rQ,"f"))return void e.draw({frag:nW,uniforms:{src:e.src},target:e.target});let{axis:t,direction:i}=nz[this.params.direction],r=[nM(this,r6,"f"),nM(this,r8,"f")],[s,o]=this.params.range,a=n_[this.params.key],[n,l]=e.dims.elementPixel,f=nM(this,rZ,"f"),h=nM(this,r0,"f"),c=0!==this.params.angle&&null!==f&&null!==h,u=e.src,d=e.target,p=[1,0],m=[n,l];if(c){let t=-this.params.angle*Math.PI/180;p=[Math.cos(t),Math.sin(t)],m=[nM(this,r3,"f"),nM(this,r5,"f")],e.draw({frag:nA,uniforms:{src:e.src,srcSize:[n,l],boxSize:m,rot:p},target:f}),u=f,d=h}if(c&&null!==f){var v;v=nM(this,rY,"f"),e.draw({frag:a8,uniforms:{src:f},target:v})}else a9(e,nM(this,rY,"f"));let g=+!!c,w=[n,l];e.draw({frag:nC,uniforms:{src:nM(this,rY,"f"),srcSize:r,threshold:s,thresholdHigh:o,keyMode:a,direction:i,axis:t,masked:g,boxSize:m,imgSize:w,rot:p},target:nM(this,rQ,"f")}),e.draw({frag:nP,uniforms:{src:nM(this,rY,"f"),srcHi:u,rankTex:nM(this,rQ,"f"),lowSize:r,threshold:s,thresholdHigh:o,keyMode:a,axis:t,masked:g,boxSize:m,imgSize:w,rot:p},target:d}),c&&e.draw({frag:nF,uniforms:{src:h,srcSize:[n,l],boxSize:m,rot:p},target:e.target})}dispose(){nM(this,rK,"m",r9).call(this),nS(this,r1,0,"f"),nS(this,r2,0,"f"),nS(this,r4,0,"f"),nS(this,r3,0,"f"),nS(this,r5,0,"f"),nS(this,r6,0,"f"),nS(this,r8,0,"f")}}rY=new WeakMap,rQ=new WeakMap,rZ=new WeakMap,r0=new WeakMap,r1=new WeakMap,r2=new WeakMap,r4=new WeakMap,r3=new WeakMap,r5=new WeakMap,r6=new WeakMap,r8=new WeakMap,rK=new WeakSet,r9=function(){nM(this,rY,"f")?.dispose(),nM(this,rQ,"f")?.dispose(),nM(this,rZ,"f")?.dispose(),nM(this,r0,"f")?.dispose(),nS(this,rY,null,"f"),nS(this,rQ,null,"f"),nS(this,rZ,null,"f"),nS(this,r0,null,"f")},r7=function(e){let[t,i]=e.dims.elementPixel,{axis:r}=nz[this.params.direction],{angle:s}=this.params,o=this.params.sortRes,a=t,n=i;if(0!==s){let e=s*Math.PI/180,r=Math.abs(Math.cos(e)),o=Math.abs(Math.sin(e));a=Math.ceil(t*r+i*o),n=Math.ceil(t*o+i*r)}let l=0===r?Math.max(1,Math.round(o*a/t)):Math.max(1,Math.round(o*n/i)),f=0===r?l:a,h=0===r?n:l;(nM(this,r1,"f")!==t||nM(this,r2,"f")!==i||nM(this,r4,"f")!==s||nM(this,r6,"f")!==f||nM(this,r8,"f")!==h)&&(nM(this,rK,"m",r9).call(this),nS(this,r1,t,"f"),nS(this,r2,i,"f"),nS(this,r4,s,"f"),nS(this,r3,a,"f"),nS(this,r5,n,"f"),nS(this,r6,f,"f"),nS(this,r8,h,"f"),nS(this,rY,e.createRenderTarget({size:[f,h],filter:"nearest"}),"f"),nS(this,rQ,e.createRenderTarget({size:[f,h],filter:"nearest",float:!0}),"f"),0!==s&&(nS(this,rZ,e.createRenderTarget({size:[a,n]}),"f"),nS(this,r0,e.createRenderTarget({size:[a,n]}),"f")))};var nI=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},nL=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class nV extends sh{constructor(){super(...arguments),this.name="datamosh",this.frag=`
vec4 transition(vec2 uv, float t) {
  return reverse > 0.5 ? readFrom(uv) : readTo(uv);
}
`}}class nO extends nd{constructor(e){super({dup:0,blockSize:e()}),se.set(this,void 0),st.set(this,0),si.set(this,1),nI(this,se,e,"f")}start(e){this.params.blockSize=nL(this,se,"f").call(this),this.params.chromaGain=1.5,this.params.useResidual=!1,this.params.healRate=0,nI(this,st,0,"f"),nI(this,si,Math.max(.75*e.duration,.001),"f"),this.enable()}update(e){var t;let{x:i}=e.progress,r=Math.min(Math.max((i-.25)/.75,0),1);this.params.useResidual=nI(this,st,(t=nL(this,st,"f"),++t),"f")>2,this.params.chromaGain=1.5+-.5*r,this.params.healRate=i<.25?0:1-.01**(e.deltaTime/nL(this,si,"f"))}end(){this.disable()}}se=new WeakMap,st=new WeakMap,si=new WeakMap,e.s(["f",0,class extends a5{constructor(){super(...arguments),this.name="datamosh",this.stages=[new nV,new nO(()=>{var e;return void 0!==(e=this.params.blockSize)&&Number.isFinite(e)&&e>=2?Math.round(e):32})]}}],28317),e.s(["f",0,class extends sh{constructor(){super(...arguments),this.name="distort_fade",this.frag=`
const float STRENGTH = 0.15;
const float SCALE = 1.0;

// 2D simplex noise (Ashima Arts, MIT).
vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = x0.x > x0.y ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

// Two octaves, so the warp has both large swirls and finer ripples.
float fbm(vec2 p) {
  return snoise(p) * 0.7 + snoise(p * 2.3 + 17.0) * 0.3;
}

${a2}
vec4 transition(vec2 uv, float t) {
  // A container overflow must not show warped content outside the element.
  if (!inRange(uv)) return vec4(0.0);
  float amount = sin(t * 3.141593);
  vec2 p = uv * resolution / min(resolution.x, resolution.y) * SCALE;
  // The noise drifts as the run goes, so the warp flows instead of only growing.
  p += t * 1.5;
  vec2 offset = vec2(fbm(p), fbm(p + vec2(31.7, 11.3))) * STRENGTH * amount;
  vec2 q = mirror(uv + offset);
  return mix(readFrom(q), readTo(q), smoothstep(0.3, 0.7, t));
}
`}}],96210);let nD=/vec4\s+transition\s*\(\s*vec2\s+(\w+)\s*\)/,nN=new Set(["from","src","srcRectUv","t","reverse","resolution","time","uvContent","outColor","progress","ratio"]),n$=e=>nN.has(e)?`glParam_${e}`:e;e.s(["f",0,function(e){let t=e.paramsTypes??{},i=[...e.textures??[],...Object.keys(t).filter(e=>"sampler2D"===t[e])];if(i.length>0)throw Error(`[VFX-JS] gl-transition "${e.name}" needs textures (${i.join(", ")}), which are not supported.`);if(!nD.test(e.glsl))throw Error(`[VFX-JS] gl-transition "${e.name}" has no \`vec4 transition(vec2 uv)\`.`);let r=e.glsl.replace(nD,"vec4 glTransition_(vec2 $1)");for(let e of Object.keys(t)){let t=n$(e);t!==e&&(r=r.replace(RegExp(`(^|[^.\\w])${e}\\b`,"g"),`$1${t}`))}let s=`
float progress;
float ratio;
vec4 getFromColor(vec2 p) { return readFrom(clamp(p, 0.0, 1.0)); }
vec4 getToColor(vec2 p) { return readTo(clamp(p, 0.0, 1.0)); }

${r}

vec4 transition(vec2 uv, float t) {
  // getFromColor clamps, so a container overflow would stretch the edges.
  if (!inRange(uv)) return vec4(0.0);
  progress = t;
  ratio = resolution.x / resolution.y;
  return glTransition_(uv);
}
`;return class extends sh{constructor(i={}){for(let r of(super(i),this.name=`gl:${e.name}`,this.frag=s,this.ease="linear",Object.keys(i)))r in t||console.warn(`[VFX-JS] gl-transition "${e.name}" has no param "${r}".`)}uniforms(){let t={},i={...e.defaultParams,...this.params};for(let e of Object.keys(i))t[n$(e)]=i[e];return t}}}],66864),e.s(["f",0,class extends sh{constructor(){super(...arguments),this.name="glitch",this.frag=`
uniform float amount;
uniform float speed;

float gnoise(float y) {
  return sin(y * 7.0) * sin(y * 17.0) * sin(y * 59.0);
}
vec2 gnoise(vec2 uv) {
  return vec2(gnoise(uv.x), gnoise(uv.y + 100.0));
}

${a0}
vec4 transition(vec2 uv, float t) {
  // A container overflow must not show wrapped content outside the element.
  if (!inRange(uv)) return vec4(0.0);
  float shift = sin(floor(t * 10.0 + 0.5) / 10.0 * 3.141593) * amount;
  float n = t * speed;
  vec2 uvr = uv, uvg = uv, uvb = uv;
  if (gnoise(n * 3.0 + 10.0) > 0.0) {
    uvr += gnoise(vec2(floor(n * 21.0), floor(n * 31.0))) * vec2(1.0, 0.1) * shift;
    uvg += gnoise(vec2(floor(n * 22.0), floor(n * 32.0))) * vec2(1.0, 0.1) * shift;
    uvb += gnoise(vec2(floor(n * 23.0), floor(n * 33.0))) * vec2(1.0, 0.1) * shift;
  }
  // Wrap so shifted areas show content rather than holes.
  uvr = fract(uvr);
  uvg = fract(uvg);
  uvb = fract(uvb);

  vec4 c1 = splitRead(uvr, uvg, uvb, false);
  vec4 c2 = splitRead(uvr, uvg, uvb, true);
  return mix(c1, c2, step(0.5, t));
}
`}uniforms(){return{amount:this.params.amount??1,speed:this.params.speed??1}}}],84177),e.s(["f",0,class extends sh{constructor(){super(...arguments),this.name="glitch_slide",this.frag=`
// The old content, then the new one to its right, as one strip.
vec4 strip(vec2 p) {
  return p.x < 1.0 ? readFrom(p) : readTo(vec2(p.x - 1.0, p.y));
}

// Each stripe slows down as it lands, so the end does not snap.
float shift(float x) {
  x = clamp(x, 0.0, 1.0);
  return 1.0 - (1.0 - x) * (1.0 - x);
}

vec4 transition(vec2 uv, float t) {
  // A container overflow must not show wrapped content outside the element.
  if (!inRange(uv)) return vec4(0.0);
  float y = floor(uv.y * 53.0) / 53.0;
  float n = sin(y * 7.0) * sin(y * 17.0) * sin(y * 59.0) * 0.5 + 0.5;

  // Fade the shift in over the first 5% so the start matches the idle content.
  float k = min(t * 20.0, 1.0);
  vec2 uvr = uv, uvg = uv, uvb = uv;
  uvr.x += shift(t * 1.8 - n * 0.2 - 0.1) * k;
  uvg.x += shift(t * 1.8 - n * 0.2) * k;
  uvb.x += shift(t * 1.8 - n * 0.2 + 0.1) * k;

  vec4 r = strip(uvr);
  vec4 g = strip(uvg);
  vec4 b = strip(uvb);
  return vec4(r.r, g.g, b.b, (r.a + g.a + b.a) / 3.0);
}
`}}],166);var nH=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},nX=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let nj=e=>Math.min(Math.max(e.quality??.1,0),1);class nG extends nT{constructor(e){super({quality:nj(e()),bypass:!0,resolutionScale:.25}),sr.set(this,void 0),nH(this,sr,e,"f")}start(){this.params.bypass=!0,this.params.speed=30,this.params.quality=nj(nX(this,sr,"f").call(this))}render(e){let{x:t}=e.progress;this.params.bypass=!(t>.12&&t<.88);let i=Math.sin(Math.min(Math.max(t,0),1)*Math.PI),r=Math.max(1,Math.round(nX(this,sr,"f").call(this).iterations??4));this.params.iterations=Math.max(1,Math.round(r*i)),super.render(e)}end(){this.params.bypass=!0}}sr=new WeakMap,e.s(["f",0,class extends a5{constructor(){super(...arguments),this.name="jpeg_glitch",this.ease="linear",this.stages=[new a4,new nG(()=>this.params)]}}],57888),e.s(["f",0,class extends sh{constructor(){super(...arguments),this.name="lens_distortion",this.frag=`
uniform float strength;
uniform float dispersion;
// The old content zooms from 1 to 1 + zoom; the new one from 1 + zoom back to 1.
uniform float zoom;
const float TAPS = 12.0;
// Width of the growing warp's edge.
const float SOFT = 0.5;

${a1}
${a2}
vec4 transition(vec2 uv, float t) {
  // A container overflow must not show warped content outside the element.
  if (!inRange(uv)) return vec4(0.0);
  float mixT = smoothstep(0.35, 0.65, t);
  // Centered, with 1 at the top and bottom edges.
  float aspect = resolution.x / resolution.y;
  vec2 p = uv * 2.0 - 1.0;
  p.x *= aspect;
  float l = length(p);
  // The first half grows the warp out from the center; the second half relaxes it.
  float amount = sin(t * 3.141593);
  if (t < 0.5) {
    float reach = t * 2.0 * (length(vec2(aspect, 1.0)) + SOFT);
    amount = 1.0 - smoothstep(reach - SOFT, reach, l);
  }
  float jitter = ign(gl_FragCoord.xy);
  float zoomFrom = 1.0 + zoom * t;
  float zoomTo = 1.0 + zoom * (1.0 - t);

  vec3 rgb = vec3(0.0);
  vec3 total = vec3(0.0);
  float alpha = 0.0;
  for (float n = 0.0; n < TAPS; n += 1.0) {
    float k = (n + jitter) / TAPS;
    float s = amount * strength * (1.0 + dispersion * (k - 0.5) * 2.0);
    vec2 q = p * (1.0 - l * s);
    q.x /= aspect;
    vec4 c = vec4(0.0);
    if (mixT < 1.0) c += readFrom(mirror(q / zoomFrom * 0.5 + 0.5)) * (1.0 - mixT);
    if (mixT > 0.0) c += readTo(mirror(q / zoomTo * 0.5 + 0.5)) * mixT;
    // Each tap adds to the color channels near its place in the spectrum.
    vec3 w = max(vec3(0.0), 1.0 - abs(vec3(k) - vec3(0.0, 0.5, 1.0)) * 2.0);
    rgb += c.rgb * w;
    total += w;
    alpha += c.a;
  }
  return vec4(rgb / total, alpha / TAPS);
}
`}uniforms(){return{strength:this.params.strength??1,dispersion:Math.max(0,this.params.dispersion??.6),zoom:Math.max(0,this.params.zoom??3)}}}],35668);let nq={right:[1,0],left:[-1,0],up:[0,1],down:[0,-1],center:[0,0]};e.s(["f",0,class extends sh{constructor(){super(...arguments),this.name="pixel_scan",this.frag=`
uniform float blackout;
// Zero spreads out in rings; otherwise the side the fronts sweep toward.
uniform vec2 sweep;
const float W = 0.2;
// Half width of each glowing front.
const float GLOW = 0.12;
// How far the front of the new content trails the old one.
const float GAP = 0.6;
const float LAYERS = 3.0;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(4859.0, 3985.0))) * 3984.0);
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float sdBox(vec2 p, float r) {
  vec2 q = abs(p) - r;
  return min(length(q), max(q.y, q.x));
}

float aspect() {
  return resolution.y / resolution.x;
}

// Where the front reaches the cell, in [0, 1]. Cells span [-scale, scale] in x and the aspect-scaled range in y.
float cellPos(vec2 pi, float scale) {
  vec2 size = vec2(1.0, aspect());
  if (sweep == vec2(0.0)) return length(pi / scale) / length(size);
  return 0.5 + dot(pi / (scale * size * 2.0), sweep);
}

vec4 cell(vec2 p, vec2 pi, float scale, float t, float edge) {
  vec2 pc = pi + 0.5;
  vec2 uvc = pc / scale;
  uvc.y /= aspect();
  uvc = uvc * 0.5 + 0.5;
  if (!inRange(uvc)) return vec4(0.0);
  // Glow only where either side has content.
  float alpha = smoothstep(0.0, 0.1, max(readFrom(uvc).a, readTo(uvc).a));
  vec4 color = vec4(hsv2rgb(vec3((pc.x * 13.0 / pc.y * 17.0) * 0.3, 1.0, 1.0)), 1.0);
  float x = cellPos(pi, scale);
  float n = hash(pi);
  float anim = smoothstep(GLOW, 0.0, abs(x + n * W - t));
  color *= anim;
  color *= mix(1.0, clamp(0.3 / abs(sdBox(p - pc, 0.5)), 0.0, 10.0), edge * pow(anim, 10.0));
  return color * alpha;
}

vec4 cellsColor(vec2 p, float scale, float t) {
  vec2 pi = floor(p);
  vec2 d = vec2(0.0, 1.0);
  vec4 cc = cell(p, pi, scale, t, 0.2) * 4.0;
  cc += cell(p, pi + d.xy, scale, t, 0.9);
  cc += cell(p, pi - d.xy, scale, t, 0.9);
  cc += cell(p, pi + d.yx, scale, t, 0.9);
  cc += cell(p, pi - d.yx, scale, t, 0.9);
  return cc / 8.0;
}

vec4 draw(vec2 uv, vec2 p, float t, float scale) {
  vec2 pi = floor(p * scale);
  float x = cellPos(pi, scale);
  float h = x + hash(pi) * W;
  // The old content leaves at the front t; the new one arrives at a second front behind it.
  float tIn = t - GAP;
  float out_ = smoothstep(t, t - W, h);
  float in_ = smoothstep(tIn, tIn - W, h);
  vec4 from = readFrom(uv);
  vec4 to = readTo(uv);
  float a = max(from.a, to.a);
  float gap = blackout * (out_ - in_);
  vec4 c = from * (1.0 - out_) + to * in_ + vec4(0.0, 0.0, 0.0, a) * gap;
  vec4 glow = cellsColor(p * scale, scale, t) + cellsColor(p * scale, scale, tIn);
  return c + glow * 1.5;
}

vec4 transition(vec2 uv, float t) {
  // A container overflow must not show cells outside the element.
  if (!inRange(uv)) return vec4(0.0);
  vec2 p = uv * 2.0 - 1.0;
  p.y *= aspect();
  // Start and end with both fronts and their glow fully off the element.
  t = mix(-GLOW, 1.0 + W * 2.0 + GAP + GLOW, t);
  vec4 c = vec4(0.0);
  for (float i = 0.0; i < LAYERS; i++) {
    c += draw(uv, p, t, abs(cos(i) * 7.3 + 10.0));
  }
  c /= LAYERS;
  return vec4(c.rgb, min(c.a, 1.0));
}
`}uniforms(){return{blackout:this.params.blackout??!0?1:0,sweep:nq[this.params.direction??"right"]}}}],97394),e.s(["f",0,class extends sh{constructor(){super(...arguments),this.name="pixel_stretch",this.frag=`
const float SMOOTH = 0.05;

// Quadratic smooth min (Inigo Quilez) to round the corner where the streaks start.
float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}
float smax(float a, float b, float k) {
  return -smin(-a, -b, k);
}

vec4 transition(vec2 uv, float t) {
  // A container overflow must not show stretched content outside the element.
  if (!inRange(uv)) return vec4(0.0);
  float mixT = smoothstep(0.4, 0.6, t);
  vec4 c = vec4(0.0);
  if (mixT < 1.0) {
    // Above the line repeats the row under it.
    float line = mix(1.0 + SMOOTH, -SMOOTH, smoothstep(0.0, 0.4, t));
    float y = clamp(smin(uv.y, line, SMOOTH), 0.0, 1.0);
    c += readFrom(vec2(uv.x, y)) * (1.0 - mixT);
  }
  if (mixT > 0.0) {
    // Below the line repeats the row under it.
    float line = mix(1.0 + SMOOTH, -SMOOTH, smoothstep(0.6, 1.0, t));
    float y = clamp(smax(uv.y, line, SMOOTH), 0.0, 1.0);
    c += readTo(vec2(uv.x, y)) * mixT;
  }
  return c;
}
`}}],81651);var nJ=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},nK=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let nY={up:"down",down:"up",left:"right",right:"left"};class nQ extends nB{constructor(e){super({range:[1,1]}),ss.set(this,void 0),so.set(this,!1),nJ(this,ss,e,"f")}start(e){let t=nK(this,ss,"f").call(this);nJ(this,so,e.reverse,"f"),this.params.direction=e.reverse?nY[t]:t,this.params.range[0]=1}update(e){let{t}=e.progress,i=nK(this,ss,"f").call(this),r=nK(this,so,"f")?1-t:t;this.params.direction=r<.5?i:nY[i],this.params.range[0]=Math.abs(1-2*t)}end(){this.params.range[0]=1}}ss=new WeakMap,so=new WeakMap,e.s(["f",0,class extends a5{constructor(){super(...arguments),this.name="pixelsort",this.stages=[new a4,new nQ(()=>this.params.direction??"up")]}}],18013),e.s(["f",0,class extends sh{constructor(){super(...arguments),this.name="slit_scan",this.frag=`
const vec3 LAG = vec3(0.0, 0.2, 0.4);

vec4 splitRead(float xr, float xg, float xb, float y, bool to) {
  vec4 r = to ? readTo(vec2(xr, y)) : readFrom(vec2(xr, y));
  vec4 g = to ? readTo(vec2(xg, y)) : readFrom(vec2(xg, y));
  vec4 b = to ? readTo(vec2(xb, y)) : readFrom(vec2(xb, y));
  return vec4(r.r, g.g, b.b, (r.a + g.a + b.a) / 3.0);
}

vec4 transition(vec2 uv, float t) {
  // A container overflow must not show smeared content outside the element.
  if (!inRange(uv)) return vec4(0.0);
  float span = 1.0 + LAG.b;
  // Each sweep ends fully smeared; a quick fade joins them.
  float mixT = smoothstep(0.48, 0.52, t);
  vec4 c = vec4(0.0);
  if (mixT < 1.0) {
    // Left of the line repeats the column under it.
    vec3 line = clamp(t / 0.48, 0.0, 1.0) * span - LAG;
    vec3 x = clamp(max(vec3(uv.x), line), 0.0, 1.0);
    c += splitRead(x.r, x.g, x.b, uv.y, false) * (1.0 - mixT);
  }
  if (mixT > 0.0) {
    // Right of the line repeats the column under it.
    vec3 line = clamp((t - 0.52) / 0.48, 0.0, 1.0) * span - LAG;
    vec3 x = clamp(min(vec3(uv.x), line), 0.0, 1.0);
    c += splitRead(x.r, x.g, x.b, uv.y, true) * mixT;
  }
  return c;
}
`}}],26873);let nZ={left:[-1,0],right:[1,0],up:[0,1],down:[0,-1]};e.s(["f",0,class extends sh{constructor(){super(...arguments),this.name="swipe",this.frag=`
uniform vec2 move;
const float STRETCH = 0.6;
const float BLUR = 0.2;
const float TAPS = 16.0;

${a1}
// The old and new content as one strip along the move.
vec4 strip(vec2 p) {
  return inRange(p) ? readFrom(p) : readTo(p + move);
}

vec4 transition(vec2 uv, float t) {
  // A container overflow must not show shifted content outside the element.
  if (!inRange(uv)) return vec4(0.0);
  // Peaks halfway, when the content moves fastest.
  float speed = sin(t * 3.141593);
  vec2 scale = 1.0 + abs(move) * speed * STRETCH;
  vec2 p = (uv - 0.5) / scale + 0.5 - move * t;
  float jitter = ign(gl_FragCoord.xy);
  vec4 c = vec4(0.0);
  for (float i = 0.0; i < TAPS; i += 1.0) {
    float k = (i + jitter) / TAPS - 0.5;
    c += strip(p + move * k * speed * BLUR);
  }
  return c / TAPS;
}
`}uniforms(){return{move:nZ[this.params.direction??"left"]}}}],76359);let n0={center:[0,0],left:[-1,0],right:[1,0],up:[0,1],down:[0,-1]},n1={hex:`
const vec2 HEX = vec2(1.0, 1.7320508);
vec4 cellOf(vec2 g) {
  vec4 ids = floor(vec4(g, g - vec2(0.5, 1.0)) / HEX.xyxy) + 0.5;
  vec2 a = g - ids.xy * HEX;
  vec2 b = g - (ids.zw + 0.5) * HEX;
  vec2 local = dot(a, a) < dot(b, b) ? a : b;
  return vec4(local, g - local);
}
float cellDist(vec2 p) {
  p = abs(p);
  return max(dot(p, vec2(0.5, 0.8660254)), p.x);
}
`,square:`
vec4 cellOf(vec2 g) {
  vec2 center = floor(g) + 0.5;
  return vec4(g - center, center);
}
float cellDist(vec2 p) {
  p = abs(p);
  return max(p.x, p.y);
}
`},n2=e=>`
uniform float count;
uniform float shadow;
// Zero spreads out in rings; otherwise the side the sweep moves toward.
uniform vec2 sweep;
const float SPREAD = 0.6;
// Shadow offset and blur at full lift, in tiles.
const vec2 SHADOW_OFFSET = vec2(0.05, -0.08);
const float SHADOW_BLUR = 0.12;
${n1[e]}
vec4 transition(vec2 uv, float t) {
  // A container overflow must not show tiles outside the element.
  if (!inRange(uv)) return vec4(0.0);
  // Grid in tile units, centered on the element.
  float tilePx = max(resolution.x, resolution.y) / count;
  vec2 extent = resolution * 0.5 / tilePx;
  vec4 cell = cellOf((uv - 0.5) * resolution / tilePx);
  vec2 local = cell.xy;
  vec2 center = cell.zw;

  // Delay of this tile, in [0, 1]. The extent is half the grid size, in tiles.
  float d = sweep == vec2(0.0)
    ? length(center) / length(extent)
    : 0.5 + dot(center / (extent * 2.0), sweep);
  d = clamp(d, 0.0, 1.0);
  float scale = 1.0 - smoothstep(0.0, 1.0, clamp((t - d * SPREAD) / (1.0 - SPREAD), 0.0, 1.0));
  // Distance outside the shrunk tile, in pixels.
  float edge = (cellDist(local) - 0.5 * scale) * tilePx;
  float inside = 1.0 - smoothstep(0.0, 1.0, edge);
  vec4 to = readTo(uv);
  if (scale <= 0.0) return to;

  // The tile lifts as it shrinks, so its shadow moves away and softens.
  float lift = 1.0 - scale;
  float blur = SHADOW_BLUR * lift * tilePx + 1.0;
  float shadowEdge = (cellDist(local - SHADOW_OFFSET * lift) - 0.5 * scale) * tilePx;
  float shade = shadow * smoothstep(0.0, 0.2, lift) * (1.0 - smoothstep(-blur, blur, shadowEdge));
  to = vec4(to.rgb * (1.0 - shade), max(to.a, shade));
  if (inside <= 0.0) return to;

  vec4 from = readFrom((center + local / scale) * tilePx / resolution + 0.5);
  from *= inside;
  return from + to * (1.0 - from.a);
}
`,n4={hex:n2("hex"),square:n2("square")};e.s(["f",0,class extends sh{constructor(){super(...arguments),this.name="tile"}get frag(){return n4[this.params.shape??"hex"]}uniforms(){return{count:Math.max(1,Math.round(this.params.count??12)),shadow:Math.min(Math.max(this.params.shadow??.5,0),1),sweep:n0[this.params.direction??"center"]}}}],27202),e.s(["f",0,class extends sh{constructor(){super(...arguments),this.name="zoom",this.overflow=!0,this.frag=`
vec4 transition(vec2 uv, float t) {
  vec2 uv1 = (uv - 0.5) * (1.0 - t) + 0.5;
  vec2 uv2 = (uv - 0.5) / (t * 0.999 + 0.001) + 0.5;
  // Tile the new content only inside the element, so the overflow shows just the old one.
  vec4 to = inRange(uv) ? readTo(fract(uv2)) : vec4(0.0);
  return mix(readFrom(uv1), to, t);
}
`}}],99050),e.s(["f",0,class extends sh{constructor(){super(...arguments),this.name="zoom_blur",this.overflow=!0,this.frag=`
${a0}
${a1}
vec4 transition(vec2 uv, float t) {
  float jitter = ign(gl_FragCoord.xy);
  float blur = sin(t * 3.141593);
  vec2 offset = vec2(t * 2.0 - 1.0, 0.0) * 0.01 * blur;

  vec4 c1 = vec4(0.0);
  vec4 c2 = vec4(0.0);
  for (float n = 0.0; n < 16.0; n += 1.0) {
    float i = n + jitter;
    vec2 uvr = (uv - 0.5) * (1.0 - blur * i * 0.02) + offset * i + 0.5;
    vec2 uvg = (uv - 0.5) * (1.0 - blur * i * 0.04) + offset * i + 0.5;
    vec2 uvb = (uv - 0.5) * (1.0 - blur * i * 0.05) + offset * i + 0.5;
    c1 += splitRead(uvr, uvg, uvb, false);
    c2 += splitRead(uvr, uvg, uvb, true);
  }
  return mix(c1 / 16.0, c2 / 16.0, t);
}
`}}],1656),e.s([],10303)}])})();