(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,83790,86679,6010,28263,36951,1633,e=>{e.i(90422),e.i(18289),e.i(7150);var t=e.i(16597),i=e.i(81290),r=e.i(60416),s=e.i(3066);e.s([],83790),e.i(61069),e.s([],86679),e.i(61388),e.i(99984),e.s([],6010),e.s([],28263),e.s(["f",0,function(e){return t.forwardRef(function(o,a){let n=(0,s.f)(),[l,f]=(0,t.useState)(null),{vfxProps:c,domProps:h}=(0,r.r)(o);return(0,i.Y)(l,n,c),(0,t.useEffect)(()=>{if(!n||!l)return;let e=new MutationObserver(()=>n.update(l));return e.observe(l,{characterData:!0,attributes:!0,subtree:!0}),()=>e.disconnect()},[l,n]),t.createElement(e,{...h,ref:e=>{f(e),a instanceof Function?a(e):a&&(a.current=e)}})})}],36951),e.s([],1633)},52729,e=>{e.i(83790),e.i(99984),e.i(86679),e.i(6010),e.i(28263);var t=e.i(36951);e.i(1633),e.i(58786),e.i(24979),e.i(41570),(0,t.f)("span"),(0,t.f)("div"),(0,t.f)("p"),e.s([],52729)},81290,60416,e=>{var t=e.i(16597);let i=["shader","release","uniforms","overlay","intersection","overflow","wrap","zIndex","backbuffer","autoCrop","glslVersion","effect"];e.s(["B",0,i,"r",0,function(e){let t={},r={};for(let s of Object.keys(e))i.includes(s)?t[s]=e[s]:r[s]=e[s];return{vfxProps:t,domProps:r}}],60416);let r=i.filter(e=>"effect"!==e);function s(){let e=Promise.resolve();return{enqueue(t){let i=e.then(t,t);return e=i.then(()=>{},()=>{}),i}}}async function o(e,t,i,s,o){let a=function(e,t){for(let i of r)if(e[i]!==t[i])return!1;return!0}(i,s);if(!a||i.effect!==s.effect){if(a&&void 0!==s.effect)return void await e.updateEffects(t,s.effect);e.remove(t),await o(t,s)}}e.s(["P",0,o,"$",0,s,"Y",0,function(e,i,r){let a=(0,t.useRef)(r);a.current=r;let n=(0,t.useRef)(null),l=(0,t.useRef)(null);(0,t.useEffect)(()=>{if(!i||!e)return;let t=l.current;null===t&&(l.current=t=s());let r=!1;return t.enqueue(async()=>{if(r)return;let t=a.current;try{await i.add(e,t),n.current=t}catch(e){console.error("[@vfx-js/react] add failed:",e)}}),()=>{r=!0,t.enqueue(()=>{i.remove(e),n.current=null})}},[e,i]),(0,t.useEffect)(()=>{if(!i||!e)return;let t=l.current;null===t&&(l.current=t=s()),t.enqueue(async()=>{let t=n.current;if(t&&t!==r)try{await o(i,e,t,r,(e,t)=>i.add(e,t)),n.current=r}catch(e){console.error("[@vfx-js/react] applyDelta failed:",e)}})},[i,e,r])}],81290)},58786,e=>{var t=e.i(16597),i=e.i(76137),r=e.i(36180);e.s(["f",0,function(e){let s=(0,t.useContext)(r.f),o=(0,t.useRef)(e);(0,t.useLayoutEffect)(()=>s?s.register(o.current):void(0,i.R)("transition-in","[@vfx-js/react] useTransitionIn does nothing outside <VFXTransition>."),[s])}])},41570,22305,e=>{var t=e.i(61069),i=e.i(16597),r=e.i(3066),s=e.i(54057),o=e.i(36180);let a=null;function n(){let e=null!==a&&Date.now()-a.at<=1e4?a:null;return a=null,e?e.spec:null}function l(e){a={spec:e,at:Date.now()}}e.s(["n",0,l,"i",0,n,"e",0,function(e){return t=>{(function(e){if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return!1;let t=e.currentTarget?.getAttribute?.("target");return!t||"_self"===t})(t)&&l(e)}}],22305);let f={display:"contents"},c={height:"100dvh",overflow:"hidden"};e.s(["f",0,function(e){let{pageKey:a,children:l,className:h,style:u,fullscreen:d=!0,...p}=e,m=(0,r.f)(),v=(0,s.f)(p),g=(0,i.useRef)(null),w=(0,i.useRef)(null),[x,b]=(0,i.useState)({key:a,node:l}),y=(0,i.useRef)(a),T=(0,i.useRef)([]),E=(0,i.useRef)(null),[M]=(0,i.useState)(()=>({register:e=>(E.current=e,()=>{E.current===e&&(E.current=null)})}));(0,i.useEffect)(()=>{let e=g.current;if(!m||!e)return;let t=m.addTransition(e,v);return w.current=t,()=>{t.destroy(),w.current=null}},[m,v]),(0,i.useLayoutEffect)(()=>{let e=T.current;for(let t of(T.current=[],e))t()},[x]),(0,i.useEffect)(()=>{if(a===y.current)return;y.current=a;let e={key:a,node:l},t=w.current;t&&void 0!==a?(E.current=null,t.run(()=>new Promise(t=>{y.current!==a?t():(T.current.push(t),(0,i.startTransition)(()=>b(e)))}),()=>n()??E.current??{}).catch(e=>{console.error("[@vfx-js/react] VFXTransition run failed:",e)})):(0,i.startTransition)(()=>b(e))});let S=(0,i.useRef)(x);S.current.key!==x.key&&(S.current=x),(void 0===a||a===x.key)&&(S.current={key:x.key,node:l});let k=S.current;return(0,t.jsx)("div",{style:f,children:(0,t.jsx)("div",{ref:g,className:h,style:d?{...c,...u}:u,children:(0,t.jsx)(o.f.Provider,{value:M,children:(0,t.jsx)(i.Fragment,{children:k.node},k.key)})})})}],41570)},54057,e=>{var t=e.i(16597);e.s(["f",0,function(e){let i=(0,t.useRef)({}).current;for(let t of Object.keys(i))t in e||delete i[t];return Object.assign(i,e),i}])},36180,e=>{let t=(0,e.i(16597).createContext)(null);e.s(["f",0,t])},24979,e=>{var t=e.i(16597),i=e.i(3066),r=e.i(54057);e.s(["f",0,function(e={}){let s=(0,i.f)(),o=(0,r.f)(e),[a,n]=(0,t.useState)(null),l=(0,t.useRef)(null),[f,c]=(0,t.useTransition)(),h=(0,t.useRef)(!1),u=(0,t.useRef)([]);(0,t.useEffect)(()=>{if(!s||!a)return;let e=s.addTransition(a,o);return l.current=e,()=>{e.destroy(),l.current=null}},[s,a,o]),(0,t.useLayoutEffect)(()=>{if(f){h.current=!0;return}if(h.current){h.current=!1;let e=u.current;for(let t of(u.current=[],e))t()}},[f]);let d=(0,t.useCallback)(e=>new Promise(t=>{u.current.push(t),h.current=!1,c(e),requestAnimationFrame(()=>{h.current||t()})}),[]);return{ref:n,run:(0,t.useCallback)(async(e,t)=>{let i=l.current;i?await i.run(()=>d(e),t):await d(e)},[d])}}])},3066,99984,76137,e=>{var t=e.i(16597);let i=(0,t.createContext)(null),r=(0,t.createContext)(!1);e.s(["i",0,i,"V",0,r],99984),e.i(90422);var s=e.i(61388);let o=["pixelRatio","zIndex","postEffect","autoplay"],a=null,n={},l=0,f=!1,c=!1,h=[],u=new Set;function d(){for(let e of u)e()}function p(){a&&(a.stop(),a.destroy(),a=null)}function m(){var e;if(c=!1,0===l||f)return;let t=h[h.length-1]?.config??{};a&&(e=n,o.every(i=>t[i]===e[i]))||(p(),n=t,f=null===(a=s.f.init({...t})),d())}function v(){l++,c||(c=!0,queueMicrotask(m))}function g(){--l>0||requestAnimationFrame(()=>{l>0||(p(),d())})}function w(e){return u.add(e),()=>u.delete(e)}function x(){return a}let b=new Set;e.s(["Y",0,v,"S",0,x,"z",0,g,"i",0,w,"R",0,function(e,t){b.has(e)||(b.add(e),console.warn(t))}],76137);let y=()=>null,T=()=>()=>{};e.s(["f",0,function({acquire:e=!0}={}){let s=(0,t.useContext)(r),o=(0,t.useContext)(i),a=(0,t.useSyncExternalStore)(s?T:w,x,y);return(0,t.useEffect)(()=>{if(!s&&e)return v(),g},[s,e]),s?o:a}],3066)},90422,28113,63363,18289,7150,61388,75682,28317,96210,66864,84177,166,57888,35668,97394,81651,18013,26873,76359,27202,99050,1656,10303,e=>{let t,i=`#version 300 es
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
`,r=`
void main() {
  outColor = transition(uvContent, reverse > 0.5 ? 1.0 - t : t);
}
`,s=i.split("\n").length;var o,a,n,l,f,c,h,u,d,p,m,v,g,w,x,b,y,T,E,M,S,k,R,C,W,A,P,F,z,_,I,U,L,B,O,V,D,N,$,H,X,G,j,q,J,K,Y,Z,Q,ee,et,ei,er,es,eo,ea,en,el,ef,ec,eh,eu,ed,ep,em,ev,eg,ew,ex,eb,ey,eT,eE,eM,eS,ek,eR,eC,eW,eA,eP,eF,ez,e_,eI,eU,eL,eB,eO,eV,eD,eN,e$,eH,eX,eG,ej,eq,eJ,eK,eY,eZ,eQ,e0,e1,e2,e3,e4,e5,e6,e8,e9,e7,te,tt,ti,tr,ts,to,ta,tn,tl,tf,tc,th,tu,td,tp,tm,tv,tg,tw,tx,tb,ty,tT,tE,tM,tS,tk,tR,tC,tW,tA,tP,tF,tz,t_,tI,tU,tL,tB,tO,tV,tD,tN,t$,tH,tX,tG,tj,tq,tJ,tK,tY,tZ,tQ,t0,t1,t2,t3,t4,t5,t6,t8,t9,t7,ie,it,ii,ir,is,io,ia,il,ic,ih,iu,id,ip,im,iv,ig,iw,ix,ib,iy,iT,iE,iM,iS,ik,iR,iC,iW,iA,iP,iF,iz,i_,iI,iU,iL,iB,iO,iV,iD,iN,i$,iH,iX,iG,ij,iq,iJ,iK,iY,iZ,iQ,i0,i1,i2,i3,i4,i5,i6,i8,i9,i7,re,rt,ri,rr,rs,ro,ra,rn,rl,rf,rc,rh,ru,rd,rp,rm,rv,rg,rw,rx,rb,ry,rT,rE,rM,rS,rk,rR,rC,rW,rA,rP,rF,rz,r_,rI,rU,rL,rB,rO,rV,rD,rN,r$,rH,rX,rG,rj,rq,rJ,rK,rY,rZ,rQ,r0,r1,r2,r3,r4,r5,r6,r8,r9,r7,se=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},st=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let si=new WeakMap;class sr{constructor(e,t,i,r){o.set(this,void 0),a.set(this,void 0),n.set(this,void 0),l.set(this,void 0),f.set(this,null),se(this,o,e,"f"),se(this,a,t,"f"),se(this,n,i,"f"),se(this,l,r,"f")}start(e){se(this,f,e,"f")}end(){se(this,f,null,"f")}outputRect(e){let t=st(this,f,"f")?.overflow??st(this,l,"f");if(void 0===t||function(e,t){let[i,r,s,o]=e,[a,n,l,f]=t;return i<=a&&r<=n&&i+s>=a+l&&r+o>=n+f}(e.contentRect,e.canvasRect))return;if(!0===t)return e.canvasRect;let i=t*e.pixelRatio,[r,s,o,a]=e.contentRect;return[r-i,s-i,o+2*i,a+2*i]}render(e){var t,i;let r;if(e.holding)return void e.blit(e.src);let l=(t=e.gl,(r=si.get(t))||(r=new Set,si.set(t,r)),r);if(l.has(st(this,a,"f"))){e.cut(),e.blit(e.src);return}try{e.draw({frag:st(this,a,"f"),uniforms:{...st(this,n,"f"),...e.run.uniforms,from:e.from,src:e.src,t:e.progress.t,reverse:+!!e.reverse,resolution:[e.dims.elementPixel[0],e.dims.elementPixel[1]],time:e.time},target:e.target})}catch(r){let t;l.add(st(this,a,"f")),i=st(this,o,"f"),(t=function(e){let t=e instanceof Error?e.message:String(e);if(!/compile failed|link failed/i.test(t))return null;let i=[];for(let e of t.matchAll(/ERROR:\s*\d+:(\d+):\s*(.*)/g)){let t=Number(e[1])-s;i.push(t>=1?`line ${t}: ${e[2]}`:e[2])}return i.length>0?i:[t.split("\n")[0]]}(r))?(console.error(`[VFX-JS] transition "${i}" failed to compile; cutting to the new content.
  ${t.join("\n  ")}`),console.debug(r)):console.error(`[VFX-JS] transition "${i}" failed; cutting to the new content.`,r),e.cut(),e.blit(e.src)}}}function ss(e){let t=e.uniforms??{},s=null;return{name:e.name,frag:e.frag,uniforms:t,overflow:e.overflow,ease:e.ease,create(){var o;return s??(o=e.frag,s=`${i}
${o}
${r}`),new sr(e.name,s,t,e.overflow)}}}o=new WeakMap,a=new WeakMap,n=new WeakMap,l=new WeakMap,f=new WeakMap,e.s(["f",0,ss],28113);let so=ss({name:"crossfade",frag:`
vec4 transition(vec2 uv, float t) {
  return mix(readFrom(uv), readTo(uv), t);
}
`});function sa(e){return"CANVAS"===e.tagName&&(e.hasAttribute("layoutsubtree")||"drawable"===e.getAttribute("content"))}function sn(e,t){e.setAttribute("layoutsubtree",""),e.setAttribute("content","drawable"),t?.setAttribute("drawable","")}function sl(e){return e.currentSrc||e.src}function sf(e,t){let i=e.getBoundingClientRect(),r=getComputedStyle(e);t.className=e.className,t.style.cssText=e.style.cssText,t.style.width=`${i.width}px`,t.style.height=`${i.height}px`,t.style.display="inline"===r.display?"inline-block":r.display,t.style.boxSizing="border-box"}async function sc(e){let t=await fetch(e),i=await t.blob();return URL.createObjectURL(i)}async function sh(e){let t=Array.from(e.querySelectorAll("img")).filter(e=>e.complete&&e.naturalWidth>0&&function(e){let t=sl(e);if(!t||t.startsWith("data:"))return!1;try{return new URL(t,location.href).origin!==location.origin}catch{return!1}}(e));if(0===t.length)return()=>{};let i=new Map,r=[];return await Promise.all(t.map(async e=>{try{let t=sl(e),s=await sc(t);i.set(e,t),r.push(s),await new Promise(t=>{e.addEventListener("load",()=>t(),{once:!0}),e.src=s})}catch{}})),()=>{for(let[e,t]of i)e.src=t;for(let e of r)URL.revokeObjectURL(e)}}e.s(["f",0,so],63363);let su=["margin-top","margin-right","margin-bottom","margin-left"],sd=["position","top","right","bottom","left","float","flex","flex-grow","flex-shrink","flex-basis","align-self","justify-self","place-self","order","grid-column","grid-column-start","grid-column-end","grid-row","grid-row-start","grid-row-end","grid-area"],sp=new WeakMap,sm=new WeakMap,sv=new WeakMap,sg=new WeakMap,sw=new WeakMap,sx=new WeakMap,sb=new WeakMap,sy=new WeakSet,sT=new WeakMap,sE=new WeakMap,sM=new WeakSet;function sS(e){if(e)for(let t of[...e])t()}function sk(e,t,i){if("function"==typeof e.moveBefore)try{e.moveBefore(t,i);return}catch{}e.insertBefore(t,i)}function sR(e,t=300){let i=sE.get(e);if(!i)return;let r=new Promise(e=>{let r=t=>{clearTimeout(o),i.delete(s),e(t)},s=()=>r(!0),o=setTimeout(()=>r(!1),t);i.add(s)});return e.requestPaint(),r}function sC(e){if(sM.has(e))return()=>{};sM.add(e);let{width:t,height:i,overflow:r}=e.style,s=e.getBoundingClientRect();return e.style.setProperty("width",`${s.width}px`),e.style.setProperty("height",`${s.height}px`),e.style.setProperty("overflow","hidden"),()=>{if(!sM.has(e))return;sM.delete(e),e.style.width=t,e.style.height=i,e.style.overflow=r;let s=e.firstElementChild;if(s){let t=Math.round(s.getBoundingClientRect().height);e.style.setProperty("height",`${t}px`)}}}function sW(e){sT.get(e)?.(),sT.delete(e)}function sA(e,t=!1){requestAnimationFrame(()=>{t||e.getContext("2d")?.clearRect(0,0,e.width,e.height),sW(e)})}async function sP(e,t){sn(e,e.firstElementChild);let i=e.getContext("2d");if(!i)throw Error("Failed to get 2d context from layoutsubtree canvas");let{onCapture:r,maxSize:s}=t,o=new Set;sE.set(e,o);let a=null,n=null,l=new Promise(e=>{n=e}),f=null,c=t=>{if(t){if(t===f)return;f=t}let l=e.firstElementChild;if(!l||0===e.width||0===e.height)return;l.hasAttribute("drawable")||l.setAttribute("drawable",""),i.clearRect(0,0,e.width,e.height),i.drawElementImage(l,0,0),function(e,t){let i=t.querySelectorAll("canvas");if(0===i.length)return;let r=t.getBoundingClientRect();if(r.width<=0||r.height<=0)return;let s=e.canvas.width/r.width,o=e.canvas.height/r.height;for(let t of i){if(0===t.width||0===t.height||!("function"==typeof t.checkVisibility?t.checkVisibility({visibilityProperty:!0,opacityProperty:!0}):"hidden"!==getComputedStyle(t).visibility))continue;let i=function(e,t,i,r){if(t.width<=0||t.height<=0)return null;let s=t.left-e.left,o=t.top-e.top;return s+t.width<=0||o+t.height<=0||s>=e.width||o>=e.height?null:[s*i,o*r,t.width*i,t.height*r]}(r,function(e){let t=e.getBoundingClientRect(),i=getComputedStyle(e),r=Number.parseFloat(i.paddingLeft)||0,s=Number.parseFloat(i.paddingRight)||0,o=Number.parseFloat(i.paddingTop)||0,a=Number.parseFloat(i.paddingBottom)||0,n=e.clientWidth>0?t.width/e.offsetWidth:1,l=e.clientHeight>0?t.height/e.offsetHeight:1;return{left:t.left+(e.clientLeft+r)*n,top:t.top+(e.clientTop+o)*l,width:Math.max(0,e.clientWidth-r-s)*n,height:Math.max(0,e.clientHeight-o-a)*l}}(t),s,o);if(i)try{e.drawImage(t,...i)}catch{}}}(i,l);let c=e.width,h=e.height;if(s&&(c>s||h>s)){let e=Math.min(s/c,s/h);c=Math.floor(c*e),h=Math.floor(h*e)}a&&a.width===c&&a.height===h||(a=new OffscreenCanvas(c,h));let u=a.getContext("2d");if(u){if(u.clearRect(0,0,c,h),u.drawImage(e,0,0,c,h),n){n(a),n=null,sS(o);return}i.clearRect(0,0,e.width,e.height),r(a),sS(o)}};e.onpaint=c,e.addEventListener("paint",c),sm.set(e,c);let h=new ResizeObserver(t=>{for(let i of t){let t=i.devicePixelContentBoxSize?.[0];if(t)e.width=t.inlineSize,e.height=t.blockSize;else{let t=i.borderBoxSize?.[0];if(t){let i=window.devicePixelRatio;e.width=Math.round(t.inlineSize*i),e.height=Math.round(t.blockSize*i)}}}e.requestPaint()});h.observe(e,{box:"device-pixel-content-box"}),sp.set(e,h);let u=e.firstElementChild;if(u){let t=new ResizeObserver(t=>{if(sM.has(e))return;let i=t[0].borderBoxSize?.[0];if(!i)return;let r=`${Math.round(i.blockSize)}px`;r!==e.style.height&&e.style.setProperty("height",r)});t.observe(u),sv.set(e,t)}return l}function sF(e){e.onpaint=null,sS(sE.get(e)),sE.delete(e);let t=sm.get(e);t&&(e.removeEventListener("paint",t),sm.delete(e));let i=sp.get(e);i&&(i.disconnect(),sp.delete(e));let r=sv.get(e);r&&(r.disconnect(),sv.delete(e))}async function sz(e,t){let i=e.getBoundingClientRect(),r=document.createElement("canvas");e.hasAttribute("drawable")||sy.add(e),sn(r,e),r.className=e.className;let s=e.getAttribute("style");s&&r.setAttribute("style",s),r.style.setProperty("padding","0"),r.style.setProperty("border","none"),r.style.setProperty("box-sizing","content-box"),r.style.setProperty("background","transparent");let o=getComputedStyle(e),a="inline"===o.display?"block":o.display;for(let e of(r.style.setProperty("display",a),su))r.style.setProperty(e,o.getPropertyValue(e));for(let e of sd)r.style.setProperty(e,o.getPropertyValue(e));e.style.width.endsWith("px")?r.style.setProperty("width",`${i.width}px`):r.style.setProperty("width","100%"),r.style.height||r.style.setProperty("height",`${i.height}px`);let n=window.devicePixelRatio;r.width=Math.round(i.width*n),r.height=Math.round(i.height*n),t.stillCover&&sT.set(r,function(e,t){let i=e.getBoundingClientRect(),r=e.cloneNode(!0),s=[e,...e.querySelectorAll("*")],o=[r,...r.querySelectorAll("*")],a=[],n=[];for(let e=0;e<s.length&&e<o.length;e++){let t=s[e],i=o[e];(t.scrollTop||t.scrollLeft)&&a.push([i,t.scrollTop,t.scrollLeft]),t instanceof HTMLScriptElement?n.push([i,document.createComment("script")]):t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?n.push([i,function(e){let t=document.createElement("canvas"),i=e instanceof HTMLVideoElement?e.videoWidth:e.width,r=e instanceof HTMLVideoElement?e.videoHeight:e.height;t.width=Math.max(1,i),t.height=Math.max(1,r),sf(e,t);try{t.getContext("2d")?.drawImage(e,0,0,t.width,t.height)}catch{}return t}(t)]):t instanceof HTMLIFrameElement?n.push([i,function(e){let t=document.createElement("div");return sf(e,t),t}(t)]):t instanceof HTMLInputElement&&i instanceof HTMLInputElement?(i.value=t.value,i.checked=t.checked):t instanceof HTMLTextAreaElement&&i instanceof HTMLTextAreaElement?i.value=t.value:t instanceof HTMLSelectElement&&i instanceof HTMLSelectElement?i.selectedIndex=t.selectedIndex:t instanceof HTMLMediaElement&&i.removeAttribute("autoplay")}for(let[e,t]of n)e.replaceWith(t);r.setAttribute("aria-hidden","true");let l=r.style;l.setProperty("position","fixed"),l.setProperty("left",`${i.left}px`),l.setProperty("top",`${i.top}px`),l.setProperty("width",`${i.width}px`),l.setProperty("height",`${i.height}px`),l.setProperty("box-sizing","border-box"),l.setProperty("margin","0"),l.setProperty("pointer-events","none"),l.setProperty("z-index",t.toString()),e.parentNode?.insertBefore(r,e);let f=r.getBoundingClientRect();for(let[e,t,r]of((f.left!==i.left||f.top!==i.top)&&(l.setProperty("left",`${2*i.left-f.left}px`),l.setProperty("top",`${2*i.top-f.top}px`)),a))e.scrollTop=t,e.scrollLeft=r;return function(e,t){let i=e[0],r=t[0];if(!i||!r||"function"!=typeof i.getAnimations)return;let s=(e,t)=>{if(!("animationName"in e))return null;let i=e.effect,r=i?.target,s=r?t.get(r):void 0;return void 0===s?null:`${s}|${i?.pseudoElement??""}|${e.animationName}`},o=new Map(t.map((e,t)=>[e,t])),a=new Map;for(let e of r.getAnimations({subtree:!0})){let t=s(e,o);t&&a.set(t,e)}let n=new Map(e.map((e,t)=>[e,t]));for(let e of i.getAnimations({subtree:!0})){let t=s(e,n),i=t&&a.get(t);i&&(i.currentTime=e.currentTime,i.pause())}}(s,o),()=>{r.remove()}}(e,t.stillCover.zIndex)),sg.set(e,e.style.margin),sw.set(e,e.style.width),sx.set(e,e.style.boxSizing),e.parentNode?.insertBefore(r,e),getComputedStyle(r).display,sk(r,e,null),e.style.setProperty("margin","0"),e.style.setProperty("width","100%"),e.style.setProperty("box-sizing","border-box");let l=await sh(e);sb.set(r,l);let f=await sP(r,t);return{canvas:r,initialCapture:f}}function s_(e,t){sF(e),sW(e);let i=sb.get(e);i&&(i(),sb.delete(e));let r=e.parentNode;r&&sk(r,t,e),e.remove(),sy.has(t)&&(t.removeAttribute("drawable"),sy.delete(t));let s=sg.get(t);void 0!==s&&(t.style.margin=s,sg.delete(t));let o=sw.get(t);void 0!==o&&(t.style.width=o,sw.delete(t));let a=sx.get(t);void 0!==a&&(t.style.boxSizing=a,sx.delete(t))}function sI(){if(void 0!==t)return t;try{let e=document.createElement("canvas"),i=e.getContext("2d");t=null!==i&&"function"==typeof i.drawElementImage&&"function"==typeof e.requestPaint}catch{t=!1}return t}e.s(["i",0,sC,"n",0,sA,"a",0,sR,"S",0,sP,"F",0,sF,"Y",0,s_,"c",0,sz],18289),e.s(["f",0,sI],7150);var sU=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)},sL=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i};let sB={t:0,x:0};class sO{constructor(){c.add(this),this.enabled=!1,h.set(this,null),u.set(this,[0,0]),d.set(this,[]),p.set(this,!1),m.set(this,null),v.set(this,null),g.set(this,sB),w.set(this,null),x.set(this,null)}snapshot(){return sU(this,c,"m",b).call(this),sL(this,m,null,"f"),this.enabled=!0,new Promise(e=>sU(this,d,"f").push(e))}start(e){return sU(this,c,"m",b).call(this),sL(this,m,e,"f"),sL(this,x,e.onEnd??null,"f"),sL(this,v,null,"f"),sL(this,g,sB,"f"),sL(this,p,!1,"f"),this.enabled=!1,new Promise(e=>{sL(this,w,e,"f")})}cancel(){sU(this,c,"m",b).call(this),sL(this,m,null,"f"),sL(this,p,!1,"f"),this.enabled=!1,sU(this,c,"m",y).call(this)}get frame(){let e=sU(this,h,"f");return e&&(sU(this,p,"f")||sU(this,m,"f"))?{from:e,progress:sU(this,g,"f"),holding:null===sU(this,m,"f")}:null}cut(){sU(this,m,"f")&&(sL(this,m,null,"f"),sU(this,c,"m",b).call(this))}update(e){let t=sU(this,m,"f");if(!t)return;null===sU(this,v,"f")&&sL(this,v,e.time,"f");let i=(e.time-sU(this,v,"f"))/t.duration;if(i>=1){sL(this,m,null,"f"),sU(this,c,"m",b).call(this);return}let r=Math.max(i,0);sL(this,g,{t:function(e,t){return"function"==typeof e?e(t):"linear"===e?t:t*t*(3-2*t)}(t.ease,r),x:r},"f")}render(e){(sU(this,d,"f").length>0&&(e.blit(e.src,sU(this,c,"m",T).call(this,e)),sL(this,p,!0,"f"),sU(this,c,"m",y).call(this)),sU(this,h,"f")&&sU(this,p,"f"))?e.blit(sU(this,h,"f")):(this.enabled=!1,e.blit(e.src))}dispose(){sL(this,h,null,"f"),sL(this,u,[0,0],"f"),sU(this,c,"m",b).call(this),sU(this,c,"m",y).call(this)}}h=new WeakMap,u=new WeakMap,d=new WeakMap,p=new WeakMap,m=new WeakMap,v=new WeakMap,g=new WeakMap,w=new WeakMap,x=new WeakMap,c=new WeakSet,b=function(){let e=sU(this,x,"f");sL(this,x,null,"f"),e?.();let t=sU(this,w,"f");sL(this,w,null,"f"),t?.()},y=function(){let e=sU(this,d,"f");for(let t of(sL(this,d,[],"f"),e))t()},T=function(e){let[t,i]=e.dims.elementPixel;return sU(this,h,"f")&&sU(this,u,"f")[0]===t&&sU(this,u,"f")[1]===i||(sU(this,h,"f")?.dispose(),sL(this,h,e.createRenderTarget({size:[t,i]}),"f"),sL(this,u,[t,i],"f")),sU(this,h,"f")};class sV{constructor(e,t){E.add(this),M.set(this,void 0),S.set(this,null),this.effect=e,sL(this,M,t,"f")}get enabled(){return null!==sU(this,S,"f")&&"function"==typeof this.effect.render&&!1!==this.effect.enabled}start(e){sL(this,S,e,"f"),this.effect.start?.(e)}end(){null!==sU(this,S,"f")&&(sL(this,S,null,"f"),this.effect.end?.())}init(e){return this.effect.init?.(e)}update(e){let t=sU(this,M,"f").frame;if(!t||t.holding)return;let i=sU(this,E,"m",k).call(this,e);i&&this.effect.update?.(i)}render(e){let t=sU(this,E,"m",k).call(this,e);t&&this.effect.render?this.effect.render(t):e.blit(e.src)}outputRect(e){return sU(this,S,"f")?this.effect.outputRect?.(e):void 0}dispose(){this.effect.dispose?.()}}M=new WeakMap,S=new WeakMap,E=new WeakSet,k=function(e){let t=sU(this,M,"f").frame,i=sU(this,S,"f");return t&&i?{...e,from:t.from,progress:t.progress,holding:t.holding,reverse:i.reverse,run:i,cut:()=>sU(this,M,"f").cut()}:null};var sD=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},sN=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};function s$(e,t={}){let i=void 0!==t.transition,r=t.transition??e.transition??so;return{transition:r,uniforms:i?{...t.uniforms}:{...e.uniforms,...t.uniforms},reverse:t.reverse??e.reverse??!1,duration:t.duration??e.duration??.6,overflow:t.overflow??e.overflow,ease:t.ease??e.ease??r.ease??"smoothstep"}}function sH(e,t){return new Promise((i,r)=>{let s=setTimeout(()=>i(!1),t);e.then(()=>{clearTimeout(s),i(!0)},e=>{clearTimeout(s),r(e)})})}class sX{constructor(e,t,i={},r,s=new sO){R.add(this),C.set(this,void 0),W.set(this,void 0),A.set(this,void 0),P.set(this,void 0),F.set(this,void 0),z.set(this,void 0),_.set(this,[]),I.set(this,[]),U.set(this,!1),L.set(this,!1),B.set(this,0),O.set(this,null),V.set(this,!1),D.set(this,!1),N.set(this,null),$.set(this,[]),H.set(this,null),X.set(this,null),sD(this,z,r,"f"),sD(this,C,e,"f"),sD(this,W,t,"f"),sD(this,A,i,"f"),sD(this,P,s,"f"),sD(this,F,i.keepWrapped??!1,"f")}get running(){return null!==sN(this,O,"f")}show(e,t={}){let i=sN(this,R,"m",G).call(this,e),{remove:r=!1,...s}=t;return!this.running&&sN(this,R,"m",j).call(this,i)?Promise.resolve():this.run(()=>{for(let e of(i.parentElement!==sN(this,W,"f")&&sN(this,W,"f").append(i),Array.from(sN(this,W,"f").children)))e!==i&&(r?e.remove():e.hidden=!0);i.hidden=!1},s)}async run(e,t={}){var i;if(sN(this,V,"f"))return void await e();let r=sD(this,B,(i=sN(this,B,"f"),++i),"f");sD(this,O,r,"f");try{await sN(this,R,"m",q).call(this,r,e,t)}finally{sN(this,O,"f")===r&&sD(this,O,null,"f"),sN(this,B,"f")===r&&(sN(this,R,"m",ee).call(this),sN(this,R,"m",Q).call(this))}}cancel(){var e;let t=sD(this,B,(e=sN(this,B,"f"),++e),"f");sD(this,O,null,"f"),sN(this,R,"m",ei).call(this),sN(this,P,"f").cancel(),sN(this,R,"m",ee).call(this),sN(this,R,"m",Q).call(this),sN(this,R,"m",es).call(this,t)}destroy(){sN(this,V,"f")||(sD(this,V,!0,"f"),this.cancel(),sD(this,H,null,"f"),sN(this,z,"f")?.call(this))}}C=new WeakMap,W=new WeakMap,A=new WeakMap,P=new WeakMap,F=new WeakMap,z=new WeakMap,_=new WeakMap,I=new WeakMap,U=new WeakMap,L=new WeakMap,B=new WeakMap,O=new WeakMap,V=new WeakMap,D=new WeakMap,N=new WeakMap,$=new WeakMap,H=new WeakMap,X=new WeakMap,R=new WeakSet,G=function(e){let t=sN(this,W,"f"),i="number"==typeof e?t.children[e]:"string"==typeof e?t.querySelector(e):e;if(!i)throw TypeError(`[VFX-JS] show(): no slide for ${e}.`);if(i.parentElement!==t&&(i.isConnected||t.contains(i)))throw TypeError("[VFX-JS] show(): the slide must be a direct child of the container.");return i},j=function(e){return e.parentElement===sN(this,W,"f")&&!e.hidden&&Array.from(sN(this,W,"f").children).every(t=>t===e||t.hidden)},q=async function(e,t,i){let r,s=()=>e===sN(this,B,"f"),o=!1,a=async()=>{o||(o=!0,await t())},n=async()=>{sN(this,R,"m",ei).call(this),sN(this,P,"f").cancel(),await a(),s()&&(sN(this,D,"f")&&sN(this,F,"f")&&await sN(this,C,"f").update(sN(this,W,"f")),sN(this,R,"m",es).call(this,e))},l=null;if("function"!=typeof i){if(l=sN(this,R,"m",J).call(this,s$(sN(this,A,"f"),i)),!s())return a();if(null===l)return n()}sN(this,R,"m",Z).call(this);try{await sN(this,R,"m",er).call(this,l?.slots??null,s,!0)}catch(e){return console.error("[VFX-JS] transition failed to wrap the element; cutting to the new content.",e),a()}if(!s())return a();sN(this,I,"f").push(sN(this,C,"f").lockSize(sN(this,W,"f"))),sN(this,I,"f").push(sN(this,C,"f").forceRender(sN(this,W,"f")));let f=await sH(sN(this,P,"f").snapshot(),1e3);if(!s())return a();if(!f){sN(this,R,"m",Y).call(this),await a(),s()&&sN(this,R,"m",es).call(this,e);return}l&&sN(this,R,"m",K).call(this,e,l);try{await a(),"function"==typeof i&&s()&&(r=i())}catch(t){throw s()&&(sN(this,R,"m",ei).call(this),sN(this,P,"f").cancel(),sN(this,R,"m",es).call(this,e)),t}if(!s())return;if(null===l){if(l=sN(this,R,"m",J).call(this,s$(sN(this,A,"f"),r)),!s())return;if(null===l)return n();try{await sN(this,R,"m",er).call(this,l.slots,s,!1)}catch(e){return console.error("[VFX-JS] transition failed to swap the effects; cutting to the new content.",e),n()}if(!s())return;sN(this,R,"m",K).call(this,e,l)}sN(this,R,"m",Z).call(this);try{await sN(this,R,"m",eo).call(this)}catch(e){console.error("[VFX-JS] transition waitFor failed:",e)}if(!s()||(await sN(this,C,"f").updateInTime(sN(this,W,"f"))||sN(this,L,"f")||(sD(this,L,!0,"f"),console.warn("[VFX-JS] transition: the new content was not captured in time; it may pop in during the run.")),!s())||(await new Promise(e=>requestAnimationFrame(()=>e())),!s()))return;let{spec:c}=l,h=sN(this,P,"f").start({duration:c.duration,ease:c.ease,onEnd:()=>sN(this,R,"m",ei).call(this,e)}),u=await sH(h,1e3*c.duration+1e3);s()&&(u||sN(this,R,"m",Y).call(this),sN(this,R,"m",es).call(this,e))},J=function(e){if(e.duration<=0)return null;let t=e.transition;try{return{spec:e,slots:sN(this,R,"m",et).call(this,t)}}catch(e){return console.error(`[VFX-JS] transition "${t.name}" create() failed; cutting to the new content.`,e),null}},K=function(e,{spec:t,slots:i}){sN(this,R,"m",ei).call(this),sD(this,X,{id:e,slots:i},"f");let r={reverse:t.reverse,uniforms:t.uniforms,duration:t.duration};for(let e of(void 0!==t.overflow&&(r.overflow=t.overflow),i))e.start(r)},Y=function(){sN(this,U,"f")||(sD(this,U,!0,"f"),console.warn("[VFX-JS] transition target did not render in time; cutting to the new content.")),sN(this,R,"m",ei).call(this),sN(this,P,"f").cancel()},Z=function(){sN(this,_,"f").push(sN(this,C,"f").freezeInside(sN(this,W,"f")))},Q=function(){let e=sN(this,I,"f");for(let t of(sD(this,I,[],"f"),e))t()},ee=function(){let e=sN(this,_,"f");for(let t of(sD(this,_,[],"f"),e))t()},et=function(e){if(sN(this,H,"f")?.def===e)return sN(this,H,"f").slots;let t=[e.create()].flat().map(e=>new sV(e,sN(this,P,"f")));return sD(this,H,{def:e,slots:t},"f"),t},ei=function(e){let t=sN(this,X,"f");if(t&&(void 0===e||t.id===e))for(let e of(sD(this,X,null,"f"),t.slots))e.end()},er=async function(e,t,i){var r;if(sN(this,N,"f")&&await sN(this,N,"f"),!t())return;let s=null!==e?[sN(this,P,"f"),...e]:sN(this,D,"f")?sN(this,$,"f"):[sN(this,P,"f")];if(!sN(this,D,"f")){let e=sN(this,C,"f").addHTMLWithStill(sN(this,W,"f"),{effect:s}).then(()=>{sD(this,D,!0,"f"),sD(this,$,s,"f")}).finally(()=>{sD(this,N,null,"f")});sD(this,N,e,"f"),await e;return}if(r=sN(this,$,"f"),!(s.length===r.length&&s.every((e,t)=>e===r[t]))){sD(this,$,s,"f");let e=sN(this,C,"f").updateEffects(sN(this,W,"f"),s).finally(()=>{sD(this,N,null,"f")});sD(this,N,e,"f"),await e}i&&await sN(this,C,"f").update(sN(this,W,"f"))},es=function(e){if(sN(this,F,"f")&&!sN(this,V,"f"))return;let t=()=>{e===sN(this,B,"f")&&sN(this,D,"f")&&(sD(this,D,!1,"f"),sD(this,$,[],"f"),sN(this,C,"f").remove(sN(this,W,"f")))};sN(this,N,"f")?sN(this,N,"f").then(t,()=>{}):t()},eo=function(){let e=sN(this,A,"f").waitFor??"media";return"none"===e?Promise.resolve():"media"===e?function(e,t,i=300){let r=[];for(let t of e.querySelectorAll("img, video")){let e="IMG"===t.tagName;(e?t.complete:t.readyState>=2)||function(e){if("IMG"===e.tagName){let t;return"lazy"===e.loading&&(!((t=e.getBoundingClientRect()).right>0)||!(t.bottom>0)||!(t.left<window.innerWidth)||!(t.top<window.innerHeight))}return"none"===e.preload}(t)||r.push(new Promise(i=>{let r=()=>i();t.addEventListener(e?"load":"loadeddata",r,{once:!0}),t.addEventListener("error",r,{once:!0})}))}return(t&&r.push(t),0===r.length)?Promise.resolve():new Promise(e=>{let t=setTimeout(e,i),s=()=>{clearTimeout(t),e()};Promise.all(r).then(s,s)})}(sN(this,W,"f"),document.fonts?.ready):e(sN(this,W,"f"))};var sG=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},sj=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class sq{constructor(e,t,i){ea.add(this),this.wrapS="clamp",this.wrapT="clamp",this.minFilter="linear",this.magFilter="linear",this.needsUpdate=!0,this.source=null,en.set(this,void 0),el.set(this,!1),ef.set(this,void 0),ec.set(this,void 0),sG(this,en,e,"f"),this.gl=e.gl;let r=i?.externalHandle;sG(this,ec,void 0!==r,"f"),void 0!==r?(this.texture=r,sG(this,el,!0,"f"),this.needsUpdate=!1):sj(this,ea,"m",eh).call(this),t&&(this.source=t),sG(this,ef,i?.autoRegister!==!1&&!sj(this,ec,"f"),"f"),sj(this,ef,"f")&&e.addResource(this)}restore(){sj(this,ec,"f")||(sj(this,ea,"m",eh).call(this),sG(this,el,!1,"f"),this.needsUpdate=!0)}bind(e){let t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture),this.needsUpdate&&(sj(this,ea,"m",eu).call(this),this.needsUpdate=!1)}dispose(){sj(this,ef,"f")&&sj(this,en,"f").removeResource(this),sj(this,ec,"f")||this.gl.deleteTexture(this.texture)}}function sJ(e,t){return"repeat"===t?e.REPEAT:"mirror"===t?e.MIRRORED_REPEAT:e.CLAMP_TO_EDGE}function sK(e,t){return"nearest"===t?e.NEAREST:e.LINEAR}function sY(e){return new Promise((t,i)=>{let r=new Image;r.crossOrigin="anonymous",r.onload=()=>t(r),r.onerror=i,r.src=e})}en=new WeakMap,el=new WeakMap,ef=new WeakMap,ec=new WeakMap,ea=new WeakSet,eh=function(){let e=this.gl.createTexture();if(!e)throw Error("[VFX-JS] Failed to create texture");this.texture=e},eu=function(){let e=this.gl,t=this.source;if(e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_ALIGNMENT,4),t)try{e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t)}catch(e){console.error(e)}else if(!sj(this,el,"f")){let t=new Uint8Array([0,0,0,0]);e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,t)}sj(this,ea,"m",ed).call(this),sG(this,el,!0,"f")},ed=function(){let e=this.gl;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,sJ(e,this.wrapS)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,sJ(e,this.wrapT)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,sK(e,this.minFilter)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,sK(e,this.magFilter))};var sZ=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},sQ=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class s0{constructor(e,t,i,r={}){ep.add(this),em.set(this,void 0),sZ(this,em,e,"f"),this.gl=e.gl,this.width=Math.max(1,Math.floor(t)),this.height=Math.max(1,Math.floor(i)),this.float=r.float??!1,this.mipmap=r.mipmap??!1,this.texture=new sq(e,void 0,{autoRegister:!1});let s=r.wrap;void 0!==s&&("string"==typeof s?(this.texture.wrapS=s,this.texture.wrapT=s):(this.texture.wrapS=s[0],this.texture.wrapT=s[1])),void 0!==r.filter&&(this.texture.minFilter=r.filter,this.texture.magFilter=r.filter),sQ(this,ep,"m",ev).call(this),e.addResource(this)}setSize(e,t){let i=Math.max(1,Math.floor(e)),r=Math.max(1,Math.floor(t));(i!==this.width||r!==this.height)&&(this.width=i,this.height=r,sQ(this,ep,"m",ev).call(this))}restore(){this.texture.restore(),sQ(this,ep,"m",ev).call(this)}dispose(){sQ(this,em,"f").removeResource(this),this.gl.deleteFramebuffer(this.fbo),this.texture.dispose()}generateMipmaps(){if(!this.mipmap)return;let e=this.gl;e.bindTexture(e.TEXTURE_2D,this.texture.texture),e.generateMipmap(e.TEXTURE_2D),e.bindTexture(e.TEXTURE_2D,null)}}function s1(e,t){return"repeat"===t?e.REPEAT:"mirror"===t?e.MIRRORED_REPEAT:e.CLAMP_TO_EDGE}function s2(e,t,i,r){return{x:e.left+i,y:t-r-e.bottom,w:e.right-e.left,h:e.bottom-e.top}}em=new WeakMap,ep=new WeakSet,ev=function(){let e=this.gl,t=this.fbo,i=e.createFramebuffer();if(!i)throw Error("[VFX-JS] Failed to create framebuffer");this.fbo=i;let r=this.texture.texture;e.bindTexture(e.TEXTURE_2D,r);let s=sQ(this,em,"f").floatLinearFilter;if(this.float&&s&&!sQ(this,em,"f").floatBlend)throw Error("[VFX-JS] EXT_float_blend is not supported.");let o=this.float?s?e.RGBA32F:e.RGBA16F:e.RGBA8,a=this.float?s?e.FLOAT:e.HALF_FLOAT:e.UNSIGNED_BYTE;if(this.mipmap){let t=Math.floor(Math.log2(Math.max(this.width,this.height)))+1,i=this.width,r=this.height;for(let s=0;s<t;s++)e.texImage2D(e.TEXTURE_2D,s,o,i,r,0,e.RGBA,a,null),i=Math.max(1,i>>1),r=Math.max(1,r>>1)}else e.texImage2D(e.TEXTURE_2D,0,o,this.width,this.height,0,e.RGBA,a,null);let n="nearest"===this.texture.minFilter?e.NEAREST:e.LINEAR,l="nearest"===this.texture.magFilter?e.NEAREST:e.LINEAR,f=this.mipmap?"nearest"===this.texture.minFilter?e.NEAREST_MIPMAP_NEAREST:e.LINEAR_MIPMAP_LINEAR:n,c=s1(e,this.texture.wrapS),h=s1(e,this.texture.wrapT);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,c),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,h),e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null),this.texture.needsUpdate=!1,this.texture.source=null,t&&e.deleteFramebuffer(t)};var s3=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},s4=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class s5{constructor(e,t,i,r,s,o={}){eg.set(this,void 0),ew.set(this,void 0),ex.set(this,void 0),eb.set(this,void 0),s3(this,eg,t,"f"),s3(this,ew,i,"f"),s3(this,ex,r,"f");let a=t*r,n=i*r,l={float:s,wrap:o.wrap,filter:o.filter,mipmap:o.mipmap};s3(this,eb,[new s0(e,a,n,l),new s0(e,a,n,l)],"f")}get texture(){return s4(this,eb,"f")[0].texture}get target(){return s4(this,eb,"f")[1]}resize(e,t){if(e===s4(this,eg,"f")&&t===s4(this,ew,"f"))return;s3(this,eg,e,"f"),s3(this,ew,t,"f");let i=e*s4(this,ex,"f"),r=t*s4(this,ex,"f");s4(this,eb,"f")[0].setSize(i,r),s4(this,eb,"f")[1].setSize(i,r)}swap(){s3(this,eb,[s4(this,eb,"f")[1],s4(this,eb,"f")[0]],"f")}getViewport(){return{x:0,y:0,w:s4(this,eg,"f"),h:s4(this,ew,"f")}}dispose(){s4(this,eb,"f")[0].dispose(),s4(this,eb,"f")[1].dispose()}}eg=new WeakMap,ew=new WeakMap,ex=new WeakMap,eb=new WeakMap;let s6=`
precision highp float;
in vec3 position;
void main() {
    gl_Position = vec4(position, 1.0);
}
`,s8=`
precision highp float;
attribute vec3 position;
void main() {
    gl_Position = vec4(position, 1.0);
}
`,s9=`
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
`,s7=`precision highp float;
uniform vec2 resolution;
uniform vec2 offset;
uniform float time;
uniform bool autoCrop;
uniform sampler2D src;
out vec4 outColor;
`,oe=`vec4 readTex(sampler2D tex, vec2 uv) {
    if (autoCrop && (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.)) {
        return vec4(0);
    }
    return texture(tex, uv);
}`,ot={none:s9,uvGradient:`
    ${s7}
    ${oe}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        outColor = vec4(uv, sin(time) * .5 + .5, 1);

        vec4 img = readTex(src, uv);
        outColor *= smoothstep(0., 1., img.a);
    }
    `,rainbow:`
    ${s7}
    ${oe}

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
    ${s7}
    ${oe}

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
    ${s7}
    ${oe}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        float b = sin(time * 2.) * 32. + 48.;
        uv = floor(uv * b) / b;
        outColor = readTex(src, uv);
    }
    `,rgbGlitch:`
    ${s7}
    ${oe}

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
    ${s7}
    ${oe}

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

    ${s7}
    ${oe}

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
    ${s7}
    ${oe}

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
    ${s7}
    ${oe}

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
    ${s7}
    ${oe}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        outColor = readTex(src, uv) * (sin(time * 5.) * 0.2 + 0.8);
    }

    `,spring:`
    ${s7}
    ${oe}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        uv = (uv - .5) * (1.05 + sin(time * 5.) * 0.05) + .5;
        outColor = readTex(src, uv);
    }
    `,duotone:`
    ${s7}
    ${oe}

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
    ${s7}
    ${oe}

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
    ${s7}
    ${oe}

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
    `,warpTransition:`
    ${s7}
    uniform float enterTime;
    uniform float leaveTime;

    ${oe}

    #define DURATION 1.0

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        float t1 = enterTime / DURATION;
        float t2 = leaveTime / DURATION;
        float t = clamp(min(t1, 1. - t2), 0., 1.);

        if (t == 0.) {
            discard;
        }

        if (t < 1.) {
            uv.x += sin(floor(uv.y * 300.)) * 3. * exp(t * -10.);
        }

        outColor = readTex(src, uv);
    }
    `,slitScanTransition:`
    ${s7}
    ${oe}

    uniform float enterTime;
    uniform float leaveTime;

    #define DURATION 1.0

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        float t1 = enterTime / DURATION;
        float t2 = leaveTime / DURATION;

        // Do not render before enter or after leave
        if (t1 < 0. || 1. < t2) {
            discard;
        }

        if (0. < t2) {
            // Leaving
            float t = 1. - t2;
            uv.y = uv.y < t ? uv.y : t;
        } else if (t1 < 1.) {
            // Entering
            float t = 1. - t1;
            uv.y = uv.y < t ? t : uv.y;
        }

        outColor = readTex(src, uv);
    }
    `,pixelateTransition:`
    ${s7}
    ${oe}

    uniform float enterTime;
    uniform float leaveTime;

    #define DURATION 1.0

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        float t1 = enterTime / DURATION;
        float t2 = leaveTime / DURATION;
        float t = clamp(min(t1, 1. - t2), 0., 1.);

        if (t == 0.) {
            discard;
        } else if (t < 1.) {
            float b = floor(t * 64.);
            uv = (floor(uv * b) + .5) / b;
        }

        outColor = readTex(src, uv);
    }
    `,focusTransition:`
    ${s7}
    ${oe}

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
    ${s7}
    ${oe}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = readTex(src, uv);
        outColor = vec4(1.0 - color.rgb, color.a);
    }
    `,grayscale:`
    ${s7}
    ${oe}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = readTex(src, uv);
        float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
        outColor = vec4(vec3(gray), color.a);
    }
    `,vignette:`
    ${s7}
    ${oe}

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
    ${s7}
    ${oe}

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
    `};class oi{constructor(e=0,t=0){this.x=0,this.y=0,this.x=e,this.y=t}set(e,t){return this.x=e,this.y=t,this}}class or{constructor(e=0,t=0,i=0,r=0){this.x=0,this.y=0,this.z=0,this.w=0,this.x=e,this.y=t,this.z=i,this.w=r}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}}var os=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},oo=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};function oa(e){return/#version\s+300\s+es\b/.test(e)?"300 es":/#version\s+100\b/.test(e)||/\bgl_FragColor\b|\btexture2D\b|\bvarying\b|\battribute\b/.test(e)?"100":"300 es"}class on{constructor(e,t,i,r){ey.add(this),eT.set(this,void 0),eE.set(this,void 0),eM.set(this,void 0),eS.set(this,void 0),ek.set(this,new Map),os(this,eT,e,"f"),this.gl=e.gl,os(this,eE,t,"f"),os(this,eM,i,"f"),os(this,eS,r??oa(i),"f"),oo(this,ey,"m",eR).call(this),e.addResource(this)}restore(){oo(this,ey,"m",eR).call(this)}use(){this.gl.useProgram(this.program)}hasUniform(e){return oo(this,ek,"f").has(e)}uploadUniforms(e){let t=this.gl,i=0;for(let[s,o]of oo(this,ek,"f")){let a=e[s];if(!a)continue;let n=a.value;if(null!=n){var r;if(35678===(r=o.type)||36298===r||36306===r||35682===r){n instanceof sq&&(n.bind(i),t.uniform1i(o.location,i),i++);continue}n instanceof sq||function(e,t,i){let r=t.location,s=t.size>1;switch(t.type){case e.FLOAT:s?e.uniform1fv(r,i):e.uniform1f(r,i);return;case e.FLOAT_VEC2:s?e.uniform2fv(r,i):i instanceof oi?e.uniform2f(r,i.x,i.y):e.uniform2f(r,i[0],i[1]);return;case e.FLOAT_VEC3:s?e.uniform3fv(r,i):e.uniform3f(r,i[0],i[1],i[2]);return;case e.FLOAT_VEC4:s?e.uniform4fv(r,i):i instanceof or?e.uniform4f(r,i.x,i.y,i.z,i.w):e.uniform4f(r,i[0],i[1],i[2],i[3]);return;case e.INT:s?e.uniform1iv(r,i):e.uniform1i(r,i);return;case e.INT_VEC2:s?e.uniform2iv(r,i):e.uniform2i(r,i[0],i[1]);return;case e.INT_VEC3:s?e.uniform3iv(r,i):e.uniform3i(r,i[0],i[1],i[2]);return;case e.INT_VEC4:s?e.uniform4iv(r,i):e.uniform4i(r,i[0],i[1],i[2],i[3]);return;case e.BOOL:s?e.uniform1iv(r,i):e.uniform1i(r,+!!i);return;case e.BOOL_VEC2:s?e.uniform2iv(r,i):e.uniform2i(r,+!!i[0],+!!i[1]);return;case e.BOOL_VEC3:s?e.uniform3iv(r,i):e.uniform3i(r,+!!i[0],+!!i[1],+!!i[2]);return;case e.BOOL_VEC4:s?e.uniform4iv(r,i):e.uniform4i(r,+!!i[0],+!!i[1],+!!i[2],+!!i[3]);return;case e.FLOAT_MAT2:e.uniformMatrix2fv(r,!1,i);return;case e.FLOAT_MAT3:e.uniformMatrix3fv(r,!1,i);return;case e.FLOAT_MAT4:e.uniformMatrix4fv(r,!1,i);return;case e.UNSIGNED_INT:s?e.uniform1uiv(r,i):e.uniform1ui(r,i);return;case e.UNSIGNED_INT_VEC2:s?e.uniform2uiv(r,i):e.uniform2ui(r,i[0],i[1]);return;case e.UNSIGNED_INT_VEC3:s?e.uniform3uiv(r,i):e.uniform3ui(r,i[0],i[1],i[2]);return;case e.UNSIGNED_INT_VEC4:s?e.uniform4uiv(r,i):e.uniform4ui(r,i[0],i[1],i[2],i[3]);return;default:oc.has(t.type)||(oc.add(t.type),console.warn(`[VFX-JS] Unsupported uniform type 0x${t.type.toString(16)}; skipping upload.`));return}}(t,o,n)}}}dispose(){oo(this,eT,"f").removeResource(this),this.gl.deleteProgram(this.program)}}function ol(e,t,i){let r=e.createShader(t);if(!r)throw Error("[VFX-JS] Failed to create shader");if(e.shaderSource(r,i),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r)??"";throw e.deleteShader(r),Error(`[VFX-JS] Shader compile failed: ${t}

${i}`)}return r}function of(e,t){return e.replace(/^\s+/,"").startsWith("#version")||"100"===t?e:`#version 300 es
${e}`}eT=new WeakMap,eE=new WeakMap,eM=new WeakMap,eS=new WeakMap,ek=new WeakMap,ey=new WeakSet,eR=function(){let e=this.gl,t=ol(e,e.VERTEX_SHADER,of(oo(this,eE,"f"),oo(this,eS,"f"))),i=ol(e,e.FRAGMENT_SHADER,of(oo(this,eM,"f"),oo(this,eS,"f"))),r=e.createProgram();if(!r)throw Error("[VFX-JS] Failed to create program");if(e.attachShader(r,t),e.attachShader(r,i),e.bindAttribLocation(r,0,"position"),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){let s=e.getProgramInfoLog(r)??"";throw e.deleteShader(t),e.deleteShader(i),e.deleteProgram(r),Error(`[VFX-JS] Program link failed: ${s}`)}e.detachShader(r,t),e.detachShader(r,i),e.deleteShader(t),e.deleteShader(i),this.program=r,oo(this,ek,"f").clear();let s=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let t=0;t<s;t++){let i=e.getActiveUniform(r,t);if(!i)continue;let s=i.name.replace(/\[0\]$/,""),o=e.getUniformLocation(r,i.name);o&&oo(this,ek,"f").set(s,{location:o,type:i.type,size:i.size})}};let oc=new Set;class oh{constructor(e,t,i,r,s,o){this.gl=e.gl,this.program=new on(e,t,i,o),this.uniforms=r,this.blend=s}dispose(){this.program.dispose()}}function ou(e,t){"none"===t?e.disable(e.BLEND):(e.enable(e.BLEND),e.blendEquation(e.FUNC_ADD),"premultiplied"===t?e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA):"additive"===t?e.blendFuncSeparate(e.ONE,e.ONE,e.ONE,e.ONE):e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA))}class od{constructor(e){this.uniforms={src:{value:null},offset:{value:new oi},resolution:{value:new oi},viewport:{value:new or}},this.pass=new oh(e,s6,s9,this.uniforms,"premultiplied")}setUniforms(e,t,i){this.uniforms.src.value=e,this.uniforms.resolution.value.set(i.w*t,i.h*t),this.uniforms.offset.value.set(i.x*t,i.y*t)}dispose(){this.pass.dispose()}}async function op(e,t,i,r){var s;let o,a,n,l=e.getBoundingClientRect(),f=window.devicePixelRatio,c=Math.ceil(l.width),h=Math.ceil(l.height),u=c*f,d=h*f,p=1,m=u,v=d;r&&(m>r||v>r)&&(p=Math.min(r/m,r/v),m=Math.floor(m*p),v=Math.floor(v*p));let g=i&&i.width===m&&i.height===v?i:new OffscreenCanvas(m,v),w=e.cloneNode(!0);await om(e,w),function e(t,i){if("function"==typeof t.computedStyleMap)try{let e=t.computedStyleMap();for(let t of["margin-top","margin-right","margin-bottom","margin-left"]){let r=e.get(t);r instanceof CSSKeywordValue&&"auto"===r.value&&i.style.setProperty(t,"auto")}}catch{}for(let r=0;r<t.children.length;r++){let s=t.children[r],o=i.children[r];s instanceof HTMLElement&&o instanceof HTMLElement&&e(s,o)}}(e,w),w.style.setProperty("opacity",t.toString()),w.style.setProperty("margin","0px"),function(e){let t=e;for(;;){let e=t.style;if(Number.parseFloat(e.paddingTop)>0||Number.parseFloat(e.borderTopWidth)>0||e.getPropertyValue("overflow-x")&&"visible"!==e.getPropertyValue("overflow-x")||e.getPropertyValue("overflow-y")&&"visible"!==e.getPropertyValue("overflow-y")||"flex"===e.display||"grid"===e.display||"flow-root"===e.display||"inline-block"===e.display)break;let i=t.firstElementChild;if(!i)break;i.style.setProperty("margin-top","0px"),t=i}for(t=e;;){let e=t.style;if(Number.parseFloat(e.paddingBottom)>0||Number.parseFloat(e.borderBottomWidth)>0||e.getPropertyValue("overflow-x")&&"visible"!==e.getPropertyValue("overflow-x")||e.getPropertyValue("overflow-y")&&"visible"!==e.getPropertyValue("overflow-y")||"flex"===e.display||"grid"===e.display||"flow-root"===e.display||"inline-block"===e.display)break;let i=t.lastElementChild;if(!i)break;i.style.setProperty("margin-bottom","0px"),t=i}}(w),w.style.setProperty("box-sizing","border-box"),w.style.setProperty("width",`${c}px`),w.style.setProperty("height",`${h}px`);let x=(s=w.outerHTML,(a=(o=document.implementation.createHTMLDocument("test")).createRange()).selectNodeContents(o.documentElement),a.deleteContents(),n=document.createElement("head"),o.documentElement.appendChild(n),o.documentElement.appendChild(a.createContextualFragment(s)),o.documentElement.setAttribute("xmlns",o.documentElement.namespaceURI),new XMLSerializer().serializeToString(o).replace(/<!DOCTYPE html>/,"")),b=`<svg xmlns="http://www.w3.org/2000/svg" width="${u}" height="${d}"><foreignObject width="100%" height="100%">${x}</foreignObject></svg>`;return new Promise((e,t)=>{let i=new Image;i.onload=()=>{let r=g.getContext("2d");if(null===r)return t();r.clearRect(0,0,m,v);let s=f*p;r.scale(s,s),r.drawImage(i,0,0,u,d),r.setTransform(1,0,0,1,0,0),e(g)},i.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(b)}`})}async function om(e,t){let i=window.getComputedStyle(e);for(let e of Array.from(i))/(-inline-|-block-|^inline-|^block-)/.test(e)||/^-webkit-.*(start|end|before|after|logical)/.test(e)||t.style.setProperty(e,i.getPropertyValue(e),i.getPropertyPriority(e));if("INPUT"===t.tagName)t.setAttribute("value",t.value);else if("TEXTAREA"===t.tagName)t.innerHTML=t.value;else if("IMG"===t.tagName)try{t.src=await ov(sl(e))}catch{}for(let i=0;i<e.children.length;i++){let r=e.children[i],s=t.children[i];await om(r,s)}}async function ov(e){let t=await fetch(e).then(e=>e.blob());return new Promise(e=>{let i=new FileReader;i.onload=function(){e(this.result)},i.readAsDataURL(t)})}var og=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},ow=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let ox=Object.freeze({__brand:"EffectQuad"});class ob{constructor(e,t,i){eC.add(this),eW.set(this,void 0),eA.set(this,void 0),eP.set(this,void 0),eF.set(this,[]),ez.set(this,null),this.indexType=0,this.hasIndices=!1,this.drawCount=0,this.drawStart=0,e_.set(this,!1),og(this,eW,e,"f"),this.gl=e.gl,og(this,eA,t,"f"),og(this,eP,i,"f"),this.mode=function(e,t){switch(t){case"lines":return e.LINES;case"lineStrip":return e.LINE_STRIP;case"points":return e.POINTS;default:return e.TRIANGLES}}(this.gl,t.mode),this.instanceCount=t.instanceCount??0,ow(this,eC,"m",eI).call(this),e.addResource(this),og(this,e_,!0,"f")}restore(){og(this,eF,[],"f"),og(this,ez,null,"f"),ow(this,eC,"m",eI).call(this)}draw(){let e=this.gl;e.bindVertexArray(this.vao),this.hasIndices?this.instanceCount>0?e.drawElementsInstanced(this.mode,this.drawCount,this.indexType,this.drawStart*(this.indexType===e.UNSIGNED_INT?4:2),this.instanceCount):e.drawElements(this.mode,this.drawCount,this.indexType,this.drawStart*(this.indexType===e.UNSIGNED_INT?4:2)):this.instanceCount>0?e.drawArraysInstanced(this.mode,this.drawStart,this.drawCount,this.instanceCount):e.drawArrays(this.mode,this.drawStart,this.drawCount)}dispose(){ow(this,e_,"f")&&(ow(this,eW,"f").removeResource(this),og(this,e_,!1,"f"));let e=this.gl;for(let t of(e.deleteVertexArray(this.vao),ow(this,eF,"f")))e.deleteBuffer(t);ow(this,ez,"f")&&e.deleteBuffer(ow(this,ez,"f")),og(this,eF,[],"f"),og(this,ez,null,"f")}}eW=new WeakMap,eA=new WeakMap,eP=new WeakMap,eF=new WeakMap,ez=new WeakMap,e_=new WeakMap,eC=new WeakSet,eI=function(){let e=this.gl,t=e.createVertexArray();if(!t)throw Error("[VFX-JS] Failed to create VAO");this.vao=t,e.bindVertexArray(t);let i=ow(this,eP,"f").program,r=null;for(let[t,s]of Object.entries(ow(this,eA,"f").attributes)){let o=!ArrayBuffer.isView(s)||s instanceof DataView?{name:t,data:s.data,itemSize:s.itemSize,normalized:s.normalized??!1,perInstance:s.perInstance??!1}:{name:t,data:s,itemSize:2,normalized:!1,perInstance:!1},a=e.getAttribLocation(i,o.name);if(a<0)continue;let n=e.createBuffer();if(!n)throw Error(`[VFX-JS] Failed to create VBO for "${o.name}"`);ow(this,eF,"f").push(n),e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,o.data,e.STATIC_DRAW);let l=function(e,t){if(t instanceof Float32Array)return e.FLOAT;if(t instanceof Uint8Array)return e.UNSIGNED_BYTE;if(t instanceof Uint16Array)return e.UNSIGNED_SHORT;if(t instanceof Uint32Array)return e.UNSIGNED_INT;if(t instanceof Int8Array)return e.BYTE;if(t instanceof Int16Array)return e.SHORT;if(t instanceof Int32Array)return e.INT;throw Error("[VFX-JS] Unsupported attribute typed array")}(e,o.data);e.enableVertexAttribArray(a),l===e.FLOAT||l===e.HALF_FLOAT||o.normalized?e.vertexAttribPointer(a,o.itemSize,l,o.normalized,0,0):e.vertexAttribIPointer(a,o.itemSize,l,0,0),o.perInstance&&e.vertexAttribDivisor(a,1),"position"===t&&null===r&&(r=o.data.length/o.itemSize)}let s=0,o=ow(this,eA,"f").indices;if(o){let t=e.createBuffer();if(!t)throw Error("[VFX-JS] Failed to create IBO");og(this,ez,t,"f"),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),e.bufferData(e.ELEMENT_ARRAY_BUFFER,o,e.STATIC_DRAW),this.hasIndices=!0,this.indexType=o instanceof Uint32Array?e.UNSIGNED_INT:e.UNSIGNED_SHORT,s=o.length}else this.hasIndices=!1;e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null),ow(this,ez,"f")&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null);let a=this.hasIndices?s:r??0,n=ow(this,eA,"f").drawRange;this.drawStart=n?.start??0,this.drawCount=n?.count!==void 0?n.count:Math.max(0,a-this.drawStart)};class oy{constructor(e,t){eU.set(this,void 0),eL.set(this,void 0),eB.set(this,new WeakMap),eO.set(this,new Set),og(this,eU,e,"f"),og(this,eL,t,"f")}get quad(){return ow(this,eL,"f")}resolve(e,t){let i=ow(this,eB,"f").get(e);i||(i=new Map,ow(this,eB,"f").set(e,i));let r=i.get(t);return r||(r=new ob(ow(this,eU,"f"),e,t),i.set(t,r),ow(this,eO,"f").add(r)),r}release(e){let t=ow(this,eB,"f").get(e);if(t){for(let e of t.values())e.dispose(),ow(this,eO,"f").delete(e);ow(this,eB,"f").delete(e)}}dispose(){for(let e of ow(this,eO,"f"))e.dispose();ow(this,eO,"f").clear()}}eU=new WeakMap,eL=new WeakMap,eB=new WeakMap,eO=new WeakMap;var oT=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},oE=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let oM=Symbol.for("@vfx-js/effect.resolve-texture"),oS=Symbol.for("@vfx-js/effect.resolve-rt"),ok=`#version 300 es
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
`,oR=`
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
`,oC=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D src;
void main() {
    outColor = texture(src, uv);
}
`,oW=`
precision highp float;
varying vec2 uv;
uniform sampler2D src;
void main() {
    gl_FragColor = texture2D(src, uv);
}
`,oA=`#version 300 es
precision highp float;
in vec2 uvSrc;
out vec4 outColor;
uniform sampler2D src;
void main() {
    bool inside = all(greaterThanEqual(uvSrc, vec2(0.0))) && all(lessThanEqual(uvSrc, vec2(1.0)));
    outColor = inside ? texture(src, uvSrc) : vec4(0.0);
}
`,oP=`
precision highp float;
varying vec2 uvSrc;
uniform sampler2D src;
void main() {
    bool inside = all(greaterThanEqual(uvSrc, vec2(0.0))) && all(lessThanEqual(uvSrc, vec2(1.0)));
    gl_FragColor = inside ? texture2D(src, uvSrc) : vec4(0.0);
}
`;class oF{constructor(e,t,i,r,s,o){eV.add(this),eD.set(this,void 0),eN.set(this,void 0),e$.set(this,void 0),eH.set(this,void 0),eX.set(this,void 0),eG.set(this,[]),ej.set(this,[]),eq.set(this,[]),eJ.set(this,[]),eK.set(this,"init"),eY.set(this,!1),eZ.set(this,void 0),eQ.set(this,void 0),e3.set(this,[]),oT(this,eD,e,"f"),oT(this,eN,e.gl,"f"),oT(this,e$,i,"f"),oT(this,eH,o,"f"),oT(this,eX,new oy(e,t),"f"),oT(this,eZ,{outputBufferW:1,outputBufferH:1,canvasBufferSize:[1,1],outputViewport:{x:0,y:0,w:1,h:1},elementBufferW:1,elementBufferH:1,contentRectUv:[0,0,1,1],srcRectUv:[0,0,1,1]},"f");let a={time:0,deltaTime:0,pixelRatio:i,resolution:[1,1],mouse:[0,0],mouseViewport:[0,0],intersection:0,enterTime:0,leaveTime:0,src:r,target:null,uniforms:{},vfxProps:s,dims:{element:[1,1],elementPixel:[1,1],canvas:[1,1],canvasPixel:[1,1],pixelRatio:i,contentRect:[0,0,1,1],srcRect:[0,0,1,1],canvasRect:[0,0,1,1]},quad:ox,gl:oE(this,eN,"f"),createRenderTarget:e=>oE(this,eV,"m",e0).call(this,e),releaseGeometry:e=>oE(this,eX,"f").release(e),wrapTexture:(e,t)=>oE(this,eV,"m",e2).call(this,e,t),draw:e=>oE(this,eV,"m",e4).call(this,e),blit:(e,t,i)=>oE(this,eV,"m",e5).call(this,e,t,i),clear:e=>oE(this,eV,"m",e6).call(this,e),onContextRestored:e=>{let t=oE(this,eD,"f").onContextRestored(e);return oE(this,eJ,"f").push(t),t}};oT(this,eQ,a,"f")}get ctx(){return oE(this,eQ,"f")}setPhase(e){oT(this,eK,e,"f")}setFrameDims(e){for(let t of(oT(this,eZ,e,"f"),oE(this,eQ,"f").resolution=[e.canvasBufferSize[0],e.canvasBufferSize[1]],oE(this,eq,"f")))t.resolver.resize?.(e.outputBufferW,e.outputBufferH)}setEffectDims(e){oE(this,eQ,"f").dims=e}setFrameState(e){let t=oE(this,eQ,"f");t.time=e.time,t.deltaTime=e.deltaTime,t.mouse=e.mouse,t.mouseViewport=e.mouseViewport,t.intersection=e.intersection,t.enterTime=e.enterTime,t.leaveTime=e.leaveTime,t.uniforms=e.uniforms}setSrc(e){oE(this,eQ,"f").src=e}setOutput(e){oE(this,eQ,"f").target=e}passthroughCopy(e,t,i){let r=oE(this,eK,"f");oT(this,eK,"render","f");let s=oE(this,eQ,"f").target;oE(this,eQ,"f").target=t;try{let r=oE(this,eZ,"f").outputViewport;oE(this,eZ,"f").outputViewport={...i};let s=oE(this,eQ,"f").vfxProps.glslVersion;oE(this,eV,"m",e8).call(this,{frag:"100"===s?oW:oC,uniforms:{src:e},target:t}),oE(this,eZ,"f").outputViewport=r}finally{oE(this,eQ,"f").target=s,oT(this,eK,r,"f")}}clearRt(e){let t=oE(this,eN,"f"),i=e[oS];t.bindFramebuffer(t.FRAMEBUFFER,i.getWriteFbo().fbo),t.viewport(0,0,e.width,e.height),t.clearColor(0,0,0,0),t.disable(t.SCISSOR_TEST),t.clear(t.COLOR_BUFFER_BIT),t.bindFramebuffer(t.FRAMEBUFFER,null)}tickAutoUpdates(){for(let e of oE(this,e3,"f"))e()}dispose(){for(let e of(oT(this,eK,"disposed","f"),oE(this,eJ,"f")))e();for(let e of(oT(this,eJ,[],"f"),oE(this,ej,"f")))e.resolver.dispose?.();for(let e of(oT(this,ej,[],"f"),oT(this,eq,[],"f"),oE(this,eG,"f")))e.dispose();oT(this,eG,[],"f"),oE(this,eX,"f").dispose(),oT(this,e3,[],"f")}}function oz(e){return void 0===e?["clamp","clamp"]:"string"==typeof e?[e,e]:[e[0],e[1]]}function o_(e,t,i,r){let s={__brand:"EffectTexture",get width(){return t()},get height(){return i()},dispose(){r?.()}};return Object.defineProperty(s,oM,{value:e}),s}function oI(e,t,i,r){let s={__brand:"EffectRenderTarget",get width(){return t()},get height(){return i()},dispose:r??(()=>{}),generateMipmaps:()=>e.regenerateMipmaps?.()};return Object.defineProperty(s,oS,{value:e}),s}function oU(e){return oI({getReadTexture:()=>e.texture,getWriteFbo:()=>e},()=>e.width,()=>e.height)}function oL(e){return"number"==typeof e?{top:e,right:e,bottom:e,left:e}:Array.isArray(e)?{top:e[0],right:e[1],bottom:e[2],left:e[3]}:{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}eD=new WeakMap,eN=new WeakMap,e$=new WeakMap,eH=new WeakMap,eX=new WeakMap,eG=new WeakMap,ej=new WeakMap,eq=new WeakMap,eJ=new WeakMap,eK=new WeakMap,eY=new WeakMap,eZ=new WeakMap,eQ=new WeakMap,e3=new WeakMap,eV=new WeakSet,e0=function(e){let t,i,r,s,o=e?.persistent??!1,a=e?.float??!1,n=oz(e?.wrap),l=e?.filter,f=e?.mipmap??!1,c=!1!==f,h=!0===f,u=e?.size,d=u?u[0]:oE(this,eZ,"f").outputBufferW,p=u?u[1]:oE(this,eZ,"f").outputBufferH;if(o){let e=u?1:oE(this,e$,"f"),s=u?d:d/e,o=u?p:p/e,f=new s5(oE(this,eD,"f"),s,o,e,a,{wrap:n,filter:l,mipmap:c});t={getReadTexture:()=>f.texture,getWriteFbo:()=>f.target,swap:()=>f.swap(),resize:u?void 0:(e,t)=>{f.resize(e/oE(this,e$,"f"),t/oE(this,e$,"f"))},dispose:()=>f.dispose()},c&&(t.regenerateMipmaps=()=>f.target.generateMipmaps(),t.mipmapAutoRegen=h),i=()=>f.target.width,r=()=>f.target.height}else{let e=new s0(oE(this,eD,"f"),d,p,{float:a,wrap:n,filter:l,mipmap:c});t={getReadTexture:()=>e.texture,getWriteFbo:()=>e,resize:u?void 0:(t,i)=>e.setSize(t,i),dispose:()=>e.dispose()},c&&(t.regenerateMipmaps=()=>e.generateMipmaps(),t.mipmapAutoRegen=h),i=()=>e.width,r=()=>e.height}let m=oI(t,i,r,()=>oE(this,eV,"m",e1).call(this,s));return s={handle:m,resolver:t},oE(this,ej,"f").push(s),u||oE(this,eq,"f").push(s),m},e1=function(e){let t=oE(this,ej,"f").indexOf(e);if(t<0)return;oE(this,ej,"f").splice(t,1);let i=oE(this,eq,"f").indexOf(e);i>=0&&oE(this,eq,"f").splice(i,1),e.resolver.dispose?.()},e2=function(e,t){var i;let r,s,o,a,n=oz(t?.wrap),l=t?.filter,f=null;if(i=e,(r=globalThis.WebGLTexture)&&"function"==typeof r&&i instanceof r||void 0===i.width&&void 0===i.naturalWidth&&void 0===i.videoWidth){if(!t?.size)throw Error("[VFX-JS] wrapTexture(WebGLTexture) requires opts.size");let[i,r]=t.size;s=new sq(oE(this,eD,"f"),void 0,{autoRegister:!1,externalHandle:e}),o=()=>i,a=()=>r}else{s=new sq(oE(this,eD,"f"),e);let i=t?.size,r=t=>i?"w"===t?i[0]:i[1]:"u">typeof HTMLImageElement&&e instanceof HTMLImageElement?"w"===t?e.naturalWidth:e.naturalHeight:"u">typeof HTMLVideoElement&&e instanceof HTMLVideoElement?"w"===t?e.videoWidth:e.videoHeight:"w"===t?e.width:e.height;o=()=>r("w"),a=()=>r("h");let n="u">typeof HTMLVideoElement&&e instanceof HTMLVideoElement||"u">typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"u">typeof OffscreenCanvas&&e instanceof OffscreenCanvas;(t?.autoUpdate??n)&&(f=()=>{s.needsUpdate=!0})}s.wrapS=n[0],s.wrapT=n[1],void 0!==l&&(s.minFilter=l,s.magFilter=l),oE(this,eG,"f").push(s),f&&oE(this,e3,"f").push(f);let c=!1;return o_(()=>s,o,a,()=>{if(c)return;c=!0;let e=oE(this,eG,"f").indexOf(s);if(-1!==e&&oE(this,eG,"f").splice(e,1),f){let e=oE(this,e3,"f").indexOf(f);-1!==e&&oE(this,e3,"f").splice(e,1)}s.dispose()})},e4=function(e){if("render"!==oE(this,eK,"f")){"update"!==oE(this,eK,"f")||oE(this,eY,"f")||(oT(this,eY,!0,"f"),console.warn("[VFX-JS] ctx.draw() called in update(); ignored. Move draws to render()."));return}oE(this,eV,"m",e8).call(this,e)},e5=function(e,t,i){if("render"!==oE(this,eK,"f")){"update"!==oE(this,eK,"f")||oE(this,eY,"f")||(oT(this,eY,!0,"f"),console.warn("[VFX-JS] ctx.blit() called in update(); ignored. Move draws to render()."));return}let r="100"===oE(this,eQ,"f").vfxProps.glslVersion?oP:oA;oE(this,eV,"m",e8).call(this,{frag:r,uniforms:{src:e},target:t,blend:i?.blend,swap:i?.swap})},e6=function(e){if("render"!==oE(this,eK,"f")){"update"!==oE(this,eK,"f")||oE(this,eY,"f")||(oT(this,eY,!0,"f"),console.warn("[VFX-JS] ctx.clear() called in update(); ignored. Move draws to render()."));return}let t=oE(this,eN,"f"),i=oE(this,eQ,"f").target,r=null==e?i:e,s=null===r||r===i;if(t.clearColor(0,0,0,0),s){let e=null===r?null:r[oS].getWriteFbo().fbo,i=oE(this,eZ,"f").outputViewport;t.bindFramebuffer(t.FRAMEBUFFER,e),t.enable(t.SCISSOR_TEST),t.scissor(i.x,i.y,i.w,i.h),t.clear(t.COLOR_BUFFER_BIT),t.disable(t.SCISSOR_TEST),t.bindFramebuffer(t.FRAMEBUFFER,null);return}let o=r[oS];t.disable(t.SCISSOR_TEST);let a=()=>{t.bindFramebuffer(t.FRAMEBUFFER,o.getWriteFbo().fbo),t.clear(t.COLOR_BUFFER_BIT)};a(),o.swap&&(o.swap(),a(),o.swap()),t.bindFramebuffer(t.FRAMEBUFFER,null)},e8=function(e){let t,i,r,s,o,a,n,l=oE(this,eN,"f"),f=e.vert??("100"===oE(this,eQ,"f").vfxProps.glslVersion?oR:ok),c=oE(this,eH,"f").get(f,e.frag,oE(this,eQ,"f").vfxProps.glslVersion),h=oE(this,eQ,"f").target,u=void 0===e.target||null===e.target?h:e.target,d=null===u||u===h;if(null===u)t=null,i=oE(this,eZ,"f").outputViewport.x,r=oE(this,eZ,"f").outputViewport.y,s=oE(this,eZ,"f").outputViewport.w,o=oE(this,eZ,"f").outputViewport.h;else{let e=u[oS];t=e.getWriteFbo().fbo,d?(i=oE(this,eZ,"f").outputViewport.x,r=oE(this,eZ,"f").outputViewport.y,s=oE(this,eZ,"f").outputViewport.w,o=oE(this,eZ,"f").outputViewport.h):(i=0,r=0,s=u.width,o=u.height),a=e.swap,e.mipmapAutoRegen&&(n=e.regenerateMipmaps)}l.bindFramebuffer(l.FRAMEBUFFER,t),l.viewport(i,r,s,o),l.disable(l.SCISSOR_TEST),ou(l,e.blend??(null===u?"premultiplied":"none")),c.use();let p=oE(this,eV,"m",e9).call(this,e.uniforms);c.uploadUniforms(p);let m=e.geometry??ox;m===ox?oE(this,eX,"f").quad.draw():oE(this,eX,"f").resolve(m,c).draw(),n?.(),a&&!1!==e.swap&&a()},e9=function(e){let t={};if(t.contentRectUv={value:oE(this,eZ,"f").contentRectUv},t.srcRectUv={value:oE(this,eZ,"f").srcRectUv},!e)return t;for(let[i,r]of Object.entries(e))t[i]=function(e){if("object"==typeof e&&null!==e&&"__brand"in e)return"EffectRenderTarget"===e.__brand?{value:e[oS].getReadTexture()}:{value:e[oM]()};return{value:e}}(r);return t};let oB={top:0,right:0,bottom:0,left:0};function oO(e){return{top:e.top,right:e.right,bottom:e.bottom,left:e.left}}function oV(e){return{top:e.top,left:e.left,right:e.left+Math.ceil(e.right-e.left),bottom:e.top+Math.ceil(e.bottom-e.top)}}function oD(e,t){return{top:e.top-t.top,right:e.right+t.right,bottom:e.bottom+t.bottom,left:e.left-t.left}}function oN(e,t,i){return Math.min(Math.max(e,t),i)}var o$=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},oH=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class oX{constructor(e,t,i,r,s,o,a,n){e7.add(this),te.set(this,void 0),tt.set(this,void 0),ti.set(this,void 0),tr.set(this,void 0),ts.set(this,void 0),to.set(this,void 0),ta.set(this,void 0),tn.set(this,void 0),tl.set(this,[]),tf.set(this,[]),tc.set(this,void 0),th.set(this,new Set),tu.set(this,!1),td.set(this,void 0),tp.set(this,oL(0)),tm.set(this,null),o$(this,te,e,"f"),o$(this,tt,t,"f"),o$(this,ti,i,"f"),o$(this,tr,s,"f"),o$(this,ts,n,"f"),o$(this,to,r,"f"),o$(this,tc,o,"f"),o$(this,td,a,"f"),o$(this,ta,r.map(()=>oH(this,e7,"m",tg).call(this)),"f"),0===r.length&&o$(this,tm,oH(this,e7,"m",tg).call(this),"f"),o$(this,tn,oH(this,e7,"m",tv).call(this),"f")}get effects(){return oH(this,to,"f")}get hosts(){return oH(this,ta,"f")}get renderingIndices(){return oH(this,tn,"f")}get stages(){return oH(this,tf,"f")}get hitTestPadBuffer(){return oH(this,tp,"f")}async initAll(){for(let e=0;e<oH(this,to,"f").length;e++){let t=oH(this,to,"f")[e],i=oH(this,ta,"f")[e];i.setPhase("init");try{t.init&&await t.init(i.ctx)}catch(t){console.error(`[VFX-JS] effect[${e}].init() failed:`,t);for(let t=e-1;t>=0;t--)oH(this,e7,"m",tw).call(this,t),oH(this,ta,"f")[t].dispose();throw oH(this,ta,"f")[e].dispose(),t}i.setPhase("update")}}run(e){if(oH(this,tu,"f")||!e.isVisible)return;o$(this,tn,oH(this,e7,"m",tv).call(this),"f");let t=oH(this,tn,"f").length;for(let t of oH(this,ta,"f"))t.setFrameState({time:e.time,deltaTime:e.deltaTime,mouse:e.mouse,mouseViewport:e.mouseViewport,intersection:e.intersection,enterTime:e.enterTime,leaveTime:e.leaveTime,uniforms:e.resolvedUniforms});oH(this,e7,"m",tx).call(this,e);for(let t=0;t<oH(this,ta,"f").length;t++)oH(this,ta,"f")[t].setFrameDims(oH(this,e7,"m",tS).call(this,t,e)),oH(this,ta,"f")[t].setEffectDims(oH(this,e7,"m",tT).call(this,t,e));for(let e=0;e<oH(this,to,"f").length;e++){let t=oH(this,to,"f")[e];if(!t.update)continue;let i=oH(this,ta,"f")[e];i.setPhase("update");try{t.update(i.ctx)}catch(i){let t=`${e}:update`;oH(this,th,"f").has(t)||(oH(this,th,"f").add(t),console.warn(`[VFX-JS] effect[${e}].update() threw; skipping this frame's update:`,i))}}if(0===t)return void(oH(this,tm,"f")??oH(this,ta,"f")[0]).passthroughCopy(oH(this,tc,"f"),e.finalTarget,e.elementRectOnCanvasPx);for(let i=0;i<t;i++){let r,s=oH(this,tn,"f")[i],o=oH(this,ta,"f")[s],a=oH(this,to,"f")[s];if(!a.render)continue;o.setPhase("render"),o.tickAutoUpdates();let n=0===i?oH(this,tc,"f"):oH(this,tl,"f")[i-1].texHandle;o.setSrc(n),i===t-1?r=e.finalTarget:(r=oH(this,tl,"f")[i].rtHandle,o.clearRt(r)),o.setOutput(r);try{a.render(o.ctx)}catch(l){let e=`${s}:render`;oH(this,th,"f").has(e)||(oH(this,th,"f").add(e),console.warn(`[VFX-JS] effect[${s}].render() threw; falling back to passthrough:`,l));let a=oH(this,tf,"f")[i].outputViewport;null===r?o.passthroughCopy(n,null,a):i===t-1?o.passthroughCopy(n,r,a):o.passthroughCopy(n,r,{x:0,y:0,w:r.width,h:r.height})}o.setPhase("update")}}dispose(){if(!oH(this,tu,"f")){o$(this,tu,!0,"f");for(let e=oH(this,to,"f").length-1;e>=0;e--)oH(this,e7,"m",tw).call(this,e),oH(this,ta,"f")[e].dispose();for(let e of(oH(this,tm,"f")&&(oH(this,tm,"f").dispose(),o$(this,tm,null,"f")),oH(this,tl,"f")))e.fb.dispose();o$(this,tl,[],"f"),o$(this,tf,[],"f")}}async replaceEffects(e){if(oH(this,tu,"f"))throw Error("[VFX-JS] replaceEffects on disposed chain");let t=oH(this,to,"f"),i=oH(this,ta,"f"),r=new Map;for(let e=0;e<t.length;e++)r.set(t[e],i[e]);let s=Array(e.length),o=[];for(let t=0;t<e.length;t++){let i=e[t],a=r.get(i);if(a)s[t]=a,r.delete(i);else{let e=oH(this,e7,"m",tg).call(this);s[t]=e,o.push({host:e,effect:i})}}for(let e=0;e<o.length;e++){let{host:t,effect:i}=o[e];t.setPhase("init");try{i.init&&await i.init(t.ctx),t.setPhase("update")}catch(i){console.error("[VFX-JS] replaceEffects: new effect init() failed:",i);for(let t=e-1;t>=0;t--){let e=o[t];if(e.effect.dispose)try{e.effect.dispose()}catch(e){console.error("[VFX-JS] dispose during init rollback threw:",e)}e.host.dispose()}throw t.dispose(),i}}for(let[e,t]of r){if(e.dispose)try{e.dispose()}catch(e){console.error("[VFX-JS] effect.dispose() threw during replaceEffects:",e)}t.dispose()}for(let e of oH(this,tl,"f"))e.fb.dispose();o$(this,tl,[],"f"),o$(this,tf,[],"f"),0!==e.length||oH(this,tm,"f")?e.length>0&&oH(this,tm,"f")&&(oH(this,tm,"f").dispose(),o$(this,tm,null,"f")):o$(this,tm,oH(this,e7,"m",tg).call(this),"f"),o$(this,to,e,"f"),o$(this,ta,s,"f"),o$(this,tn,oH(this,e7,"m",tv).call(this),"f"),oH(this,th,"f").clear()}}te=new WeakMap,tt=new WeakMap,ti=new WeakMap,tr=new WeakMap,ts=new WeakMap,to=new WeakMap,ta=new WeakMap,tn=new WeakMap,tl=new WeakMap,tf=new WeakMap,tc=new WeakMap,th=new WeakMap,tu=new WeakMap,td=new WeakMap,tp=new WeakMap,tm=new WeakMap,e7=new WeakSet,tv=function(){return oH(this,to,"f").map((e,t)=>"function"==typeof e.render&&!1!==e.enabled?t:-1).filter(e=>e>=0)},tg=function(){return new oF(oH(this,te,"f"),oH(this,tt,"f"),oH(this,ti,"f"),oH(this,tc,"f"),oH(this,tr,"f"),oH(this,ts,"f"))},tw=function(e){let t=oH(this,to,"f")[e];if(t.dispose)try{t.dispose()}catch(t){console.error(`[VFX-JS] effect[${e}].dispose() threw:`,t)}},tx=function(e){let t=oH(this,tn,"f").length;if(o$(this,tf,Array(t),"f"),0===t)return;let i=oH(this,td,"f")?e.canvasBufferSize:e.elementBufferSize,r=[0,0,i[0],i[1]],s=oH(this,e7,"m",tM).call(this,e),o=r;for(let i=0;i<t;i++){let a=oH(this,tn,"f")[i],n=oH(this,to,"f")[a],l=i===t-1,f=oH(this,e7,"m",tb).call(this,n,o,r,s,e)??o,c=[f[2],f[3]],h=function(e,t){let[i,r,s,o]=e,[a,n,l,f]=t;return l<=0||f<=0?[0,0,1,1]:[(i-a)/l,(r-n)/f,s/l,o/f]}(r,f),u=l?{x:e.elementRectOnCanvasPx.x+f[0],y:e.elementRectOnCanvasPx.y+f[1],w:c[0],h:c[1]}:{x:0,y:0,w:c[0],h:c[1]};oH(this,tf,"f")[i]={dstRect:f,dstBufferSize:c,contentRectUv:h,outputViewport:u},l||oH(this,e7,"m",tE).call(this,i,c),o=f}let[a,n,l,f]=oH(this,tf,"f")[t-1].dstRect;o$(this,tp,oL({top:Math.max(0,n+f-i[1]),right:Math.max(0,a+l-i[0]),bottom:Math.max(0,-n),left:Math.max(0,-a)}),"f")},tb=function(e,t,i,r,s){if(e.outputRect)return e.outputRect(oH(this,e7,"m",ty).call(this,s,i,t,r))},ty=function(e,t,i,r){let s=e.canvasBufferSize[0]/e.canvasSize[0]||1;return{element:oH(this,td,"f")?e.canvasSize:e.elementSize,elementPixel:oH(this,td,"f")?e.canvasBufferSize:e.elementBufferSize,canvas:e.canvasSize,canvasPixel:e.canvasBufferSize,pixelRatio:s,contentRect:t,srcRect:i,canvasRect:r}},tT=function(e,t){let i=oH(this,td,"f")?t.canvasBufferSize:t.elementBufferSize,r=[0,0,i[0],i[1]],s=oH(this,e7,"m",tM).call(this,t),o=oH(this,tn,"f").indexOf(e),a=o<=0?r:oH(this,tf,"f")[o-1].dstRect;return oH(this,e7,"m",ty).call(this,t,r,a,s)},tE=function(e,t){let i=oH(this,tl,"f")[e];if(i&&i.fb.width===t[0]&&i.fb.height===t[1])return;i&&i.fb.dispose();let r=new s0(oH(this,te,"f"),t[0],t[1]),s=oU(r),o=o_(()=>r.texture,()=>r.width,()=>r.height);oH(this,tl,"f")[e]={fb:r,rtHandle:s,texHandle:o,bufferSize:t}},tM=function(e){let[t,i]=e.canvasBufferSize;if(oH(this,td,"f"))return[0,0,t,i];let{x:r,y:s}=e.elementRectOnCanvasPx;return[-r,-s,t,i]},tS=function(e,t){let i,r,s,o,a,n=oH(this,tn,"f").indexOf(e);if(n<0)s={x:0,y:0,w:i=t.elementBufferSize[0],h:r=t.elementBufferSize[1]},o=[0,0,1,1],a=[0,0,1,1];else{let e=oH(this,tf,"f")[n];i=e.dstBufferSize[0],r=e.dstBufferSize[1],s=e.outputViewport,o=e.contentRectUv,a=0===n?[0,0,1,1]:oH(this,tf,"f")[n-1].contentRectUv}return{outputBufferW:i,outputBufferH:r,canvasBufferSize:t.canvasBufferSize,outputViewport:s,elementBufferW:t.elementBufferSize[0],elementBufferH:t.elementBufferSize[1],contentRectUv:o,srcRectUv:a}};var oG=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},oj=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class oq{constructor(e){tk.add(this),tR.set(this,void 0),tC.set(this,new Set),oG(this,tR,e,"f")}freezeInside(e,t){let i={root:e,entries:[]};for(let r of t)!r.frozen&&oJ(e,r.element)&&(r.frozen=!0,i.entries.push({e:r,opacity:r.element.style.opacity}),oj(this,tR,"f").showPlain(r));oj(this,tC,"f").add(i);let r=!1;return()=>{if(!r){for(let{e}of(r=!0,oj(this,tC,"f").delete(i),i.entries))e.frozen=!1;requestAnimationFrame(()=>{for(let{e,opacity:t}of i.entries)!e.frozen&&oj(this,tR,"f").isRegistered(e)&&oj(this,tR,"f").hidePlain(e,t)})}}}adopt(e,t){let i=oj(this,tk,"m",tW).call(this,e.element);return!!i&&(e.frozen=!0,i.entries.push({e,opacity:t??e.element.style.opacity}),!0)}}function oJ(e,t){return t!==e&&e.contains(t)}function oK(e){this.data=e,this.pos=0}function oY(e){this.stream=new oK(e),this.output={}}tR=new WeakMap,tC=new WeakMap,tk=new WeakSet,tW=function(e){for(let t of oj(this,tC,"f"))if(oJ(t.root,e))return t},oK.prototype.readByte=function(){return this.data[this.pos++]},oK.prototype.peekByte=function(){return this.data[this.pos]},oK.prototype.readBytes=function(e){return this.data.subarray(this.pos,this.pos+=e)},oK.prototype.peekBytes=function(e){return this.data.subarray(this.pos,this.pos+e)},oK.prototype.readString=function(e){for(var t="",i=0;i<e;i++)t+=String.fromCharCode(this.readByte());return t},oK.prototype.readBitArray=function(){for(var e=[],t=this.readByte(),i=7;i>=0;i--)e.push(!!(t&1<<i));return e},oK.prototype.readUnsigned=function(e){var t=this.readBytes(2);return e?(t[1]<<8)+t[0]:(t[0]<<8)+t[1]},oY.prototype.parse=function(e){return this.parseParts(this.output,e),this.output},oY.prototype.parseParts=function(e,t){for(var i=0;i<t.length;i++){var r=t[i];this.parsePart(e,r)}},oY.prototype.parsePart=function(e,t){var i,r=t.label;if(!t.requires||t.requires(this.stream,this.output,e))if(t.loop){for(var s=[];t.loop(this.stream);){var o={};this.parseParts(o,t.parts),s.push(o)}e[r]=s}else t.parts?(i={},this.parseParts(i,t.parts),e[r]=i):t.parser?(i=t.parser(this.stream,this.output,e),t.skip||(e[r]=i)):t.bits&&(e[r]=this.parseBits(t.bits))},oY.prototype.parseBits=function(e){var t={},i=this.stream.readBitArray();for(var r in e){var s=e[r];s.length?t[r]=i.slice(s.index,s.index+s.length).reduce(function(e,t){return 2*e+t},0):t[r]=i[s.index]}return t};let oZ=function(){return function(e){return e.readByte()}},oQ=function(e){return function(t){return t.readBytes(e)}},o0=function(e){return function(t){return t.readString(e)}},o1=function(e){return function(t){return t.readUnsigned(e)}},o2=function(e,t){return function(i,r,s){for(var o=t(i,r,s),a=Array(o),n=0;n<o;n++)a[n]=i.readBytes(e);return a}};var o3={label:"blocks",parser:function(e){for(var t=[],i=0,r=e.readByte();0!==r;r=e.readByte())t.push(e.readBytes(r)),i+=r;var s=new Uint8Array(i);i=0;for(var o=0;o<t.length;o++)s.set(t[o],i),i+=t[o].length;return s}},o4={label:"gce",requires:function(e){var t=e.peekBytes(2);return 33===t[0]&&249===t[1]},parts:[{label:"codes",parser:oQ(2),skip:!0},{label:"byteSize",parser:oZ()},{label:"extras",bits:{future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}}},{label:"delay",parser:o1(!0)},{label:"transparentColorIndex",parser:oZ()},{label:"terminator",parser:oZ(),skip:!0}]},o5={label:"image",requires:function(e){return 44===e.peekByte()},parts:[{label:"code",parser:oZ(),skip:!0},{label:"descriptor",parts:[{label:"left",parser:o1(!0)},{label:"top",parser:o1(!0)},{label:"width",parser:o1(!0)},{label:"height",parser:o1(!0)},{label:"lct",bits:{exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}}}]},{label:"lct",requires:function(e,t,i){return i.descriptor.lct.exists},parser:o2(3,function(e,t,i){return Math.pow(2,i.descriptor.lct.size+1)})},{label:"data",parts:[{label:"minCodeSize",parser:oZ()},o3]}]},o6={label:"text",requires:function(e){var t=e.peekBytes(2);return 33===t[0]&&1===t[1]},parts:[{label:"codes",parser:oQ(2),skip:!0},{label:"blockSize",parser:oZ()},{label:"preData",parser:function(e,t,i){return e.readBytes(i.text.blockSize)}},o3]},o8={label:"application",requires:function(e,t,i){var r=e.peekBytes(2);return 33===r[0]&&255===r[1]},parts:[{label:"codes",parser:oQ(2),skip:!0},{label:"blockSize",parser:oZ()},{label:"id",parser:function(e,t,i){return e.readString(i.blockSize)}},o3]},o9={label:"comment",requires:function(e,t,i){var r=e.peekBytes(2);return 33===r[0]&&254===r[1]},parts:[{label:"codes",parser:oQ(2),skip:!0},o3]},o7=[{label:"header",parts:[{label:"signature",parser:o0(3)},{label:"version",parser:o0(3)}]},{label:"lsd",parts:[{label:"width",parser:o1(!0)},{label:"height",parser:o1(!0)},{label:"gct",bits:{exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}}},{label:"backgroundColorIndex",parser:oZ()},{label:"pixelAspectRatio",parser:oZ()}]},{label:"gct",requires:function(e,t){return t.lsd.gct.exists},parser:o2(3,function(e,t){return Math.pow(2,t.lsd.gct.size+1)})},{label:"frames",parts:[o4,o8,o9,o5,o6],loop:function(e){var t=e.peekByte();return 33===t||44===t}}];function ae(e){var t=new oY(new Uint8Array(e));this.raw=t.parse(o7),this.raw.hasImages=!1;for(var i=0;i<this.raw.frames.length;i++)if(this.raw.frames[i].image){this.raw.hasImages=!0;break}}ae.prototype.decompressFrame=function(e,t){if(e>=this.raw.frames.length)return null;var i=this.raw.frames[e];if(i.image){var r=i.image.descriptor.width*i.image.descriptor.height,s=function(e,t,i){var r,s,o,a,n,l,f,c,h,u,d,p,m,v,g,w=Array(i),x=Array(4096),b=Array(4096),y=Array(4097);for(n=(s=1<<e)+1,r=s+2,f=-1,o=(1<<(a=e+1))-1,h=0;h<s;h++)x[h]=0,b[h]=h;for(d=c=p=m=g=v=0,u=0;u<i;){if(0===m){if(c<a){d+=t[v]<<c,c+=8,v++;continue}if(h=d&o,d>>=a,c-=a,h>r||h==n)break;if(h==s){o=(1<<(a=e+1))-1,r=s+2,f=-1;continue}if(-1==f){y[m++]=b[h],f=h,p=h;continue}for(l=h,h==r&&(y[m++]=p,h=f);h>s;)y[m++]=b[h],h=x[h];p=255&b[h],y[m++]=p,r<4096&&(x[r]=f,b[r]=p,(++r&o)==0&&r<4096&&(a++,o+=r)),f=l}m--,w[g++]=y[m],u++}for(u=g;u<i;u++)w[u]=0;return w}(i.image.data.minCodeSize,i.image.data.blocks,r);i.image.descriptor.lct.interlaced&&(s=function(e,t){for(var i=Array(e.length),r=e.length/t,s=[0,4,2,1],o=[8,8,4,2],a=0,n=0;n<4;n++)for(var l=s[n];l<r;l+=o[n])!function(r,s){var o=e.slice(s*t,(s+1)*t);i.splice.apply(i,[r*t,t].concat(o))}(l,a),a++;return i}(s,i.image.descriptor.width));var o={pixels:s,dims:{top:i.image.descriptor.top,left:i.image.descriptor.left,width:i.image.descriptor.width,height:i.image.descriptor.height}};return i.image.descriptor.lct&&i.image.descriptor.lct.exists?o.colorTable=i.image.lct:o.colorTable=this.raw.gct,i.gce&&(o.delay=10*(i.gce.delay||10),o.disposalType=i.gce.extras.disposal,i.gce.extras.transparentColorGiven&&(o.transparentIndex=i.gce.transparentColorIndex)),t&&(o.patch=function(e){for(var t=e.pixels.length,i=new Uint8ClampedArray(4*t),r=0;r<t;r++){var s=4*r,o=e.pixels[r],a=e.colorTable[o];i[s]=a[0],i[s+1]=a[1],i[s+2]=a[2],i[s+3]=255*(o!==e.transparentIndex)}return i}(o)),o}return null},ae.prototype.decompressFrames=function(e,t,i){void 0===t&&(t=0),i=void 0===i?this.raw.frames.length:Math.min(i,this.raw.frames.length);for(var r=[],s=t;s<i;s++)this.raw.frames[s].image&&r.push(this.decompressFrame(s,e));return r};class at{static async create(e,t){let i=await fetch(e).then(e=>e.arrayBuffer()).then(e=>new ae(e)),r=i.decompressFrames(!0,void 0,void 0),{width:s,height:o}=i.raw.lsd;return new at(r,s,o,t)}constructor(e,t,i,r){this.frames=[],this.index=0,this.playTime=0,this.frames=e,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.pixelRatio=r,this.canvas.width=t,this.canvas.height=i,this.startTime=Date.now()}getCanvas(){return this.canvas}update(){let e=Date.now()-this.startTime;for(;this.playTime<e;){let e=this.frames[this.index%this.frames.length];this.playTime+=e.delay,this.index++}let t=this.frames[this.index%this.frames.length],i=new ImageData(t.patch,t.dims.width,t.dims.height);this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.putImageData(i,t.dims.left,t.dims.top)}}var ai=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class ar{constructor(e,t=!1){this.isContextLost=!1,tA.set(this,new Set),tP.set(this,new Set),tF.set(this,new Set),tz.set(this,e=>{for(let t of(e.preventDefault(),this.isContextLost=!0,ai(this,tP,"f")))t()}),t_.set(this,()=>{this.isContextLost=!1;let e=this.gl;for(let t of(e.getExtension("EXT_color_buffer_float"),e.getExtension("EXT_color_buffer_half_float"),this.floatBlend=!!e.getExtension("EXT_float_blend"),ai(this,tA,"f")))t.restore();for(let e of ai(this,tF,"f"))e()});let i=e.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:t});if(!i)throw Error("[VFX-JS] WebGL2 is not available.");this.gl=i,this.canvas=e,i.getExtension("EXT_color_buffer_float"),i.getExtension("EXT_color_buffer_half_float"),this.floatBlend=!!i.getExtension("EXT_float_blend"),this.floatLinearFilter=!!i.getExtension("OES_texture_float_linear"),this.maxTextureSize=i.getParameter(i.MAX_TEXTURE_SIZE),e.addEventListener("webglcontextlost",ai(this,tz,"f"),!1),e.addEventListener("webglcontextrestored",ai(this,t_,"f"),!1)}setSize(e,t,i){let r=Math.floor(e*i),s=Math.floor(t*i);(this.canvas.width!==r||this.canvas.height!==s)&&(this.canvas.width=r,this.canvas.height=s)}addResource(e){ai(this,tA,"f").add(e)}removeResource(e){ai(this,tA,"f").delete(e)}onContextLost(e){return ai(this,tP,"f").add(e),()=>ai(this,tP,"f").delete(e)}onContextRestored(e){return ai(this,tF,"f").add(e),()=>ai(this,tF,"f").delete(e)}}tA=new WeakMap,tP=new WeakMap,tF=new WeakMap,tz=new WeakMap,t_=new WeakMap;var as=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},ao=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class aa{constructor(e){tI.add(this),tU.set(this,void 0),tL.set(this,void 0),as(this,tU,e,"f"),this.gl=e.gl,ao(this,tI,"m",tB).call(this),e.addResource(this)}restore(){ao(this,tI,"m",tB).call(this)}draw(){let e=this.gl;e.bindVertexArray(this.vao),e.drawArrays(e.TRIANGLES,0,6)}dispose(){ao(this,tU,"f").removeResource(this),this.gl.deleteVertexArray(this.vao),this.gl.deleteBuffer(ao(this,tL,"f"))}}function an(e,t,i,r={}){return new s0(e,t,i,{float:r.float??!1})}function al(e,t){let i;i=t.renderingToBuffer?"none":t.premultipliedAlpha?"premultiplied":"normal";let r=t.glslVersion??oa(t.fragmentShader);return new oh(e,t.vertexShader??("100"===r?s8:s6),t.fragmentShader,t.uniforms,i,r)}tU=new WeakMap,tL=new WeakMap,tI=new WeakSet,tB=function(){let e=this.gl,t=e.createVertexArray(),i=e.createBuffer();if(!t||!i)throw Error("[VFX-JS] Failed to create quad VAO");this.vao=t,as(this,tL,i,"f");let r=new Float32Array([-1,-1,0,1,-1,0,-1,1,0,-1,1,0,1,-1,0,1,1,0]);e.bindVertexArray(t),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,r,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0),e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null)};var af=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},ac=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class ah{constructor(e,t,i,r,s,o,a,n){if(tO.set(this,void 0),tV.set(this,void 0),tD.set(this,void 0),tN.set(this,void 0),t$.set(this,void 0),tH.set(this,void 0),af(this,tN,r??!1,"f"),af(this,t$,s??!1,"f"),af(this,tH,o,"f"),af(this,tV,{},"f"),af(this,tO,{src:{value:null},offset:{value:new oi},resolution:{value:new oi},viewport:{value:new or},time:{value:0},mouse:{value:new oi},passIndex:{value:0}},"f"),i)for(let[e,t]of Object.entries(i))"function"==typeof t?(ac(this,tV,"f")[e]=t,ac(this,tO,"f")[e]={value:t()}):ac(this,tO,"f")[e]={value:t};this.pass=al(e,{fragmentShader:t,uniforms:ac(this,tO,"f"),renderingToBuffer:a??!1,premultipliedAlpha:!0,glslVersion:n})}get uniforms(){return ac(this,tO,"f")}setUniforms(e,t,i,r,s,o){ac(this,tO,"f").src.value=e,ac(this,tO,"f").resolution.value.set(i.w*t,i.h*t),ac(this,tO,"f").offset.value.set(i.x*t,i.y*t),ac(this,tO,"f").time.value=r,ac(this,tO,"f").mouse.value.set(s*t,o*t)}updateCustomUniforms(e){for(let[e,t]of Object.entries(ac(this,tV,"f")))ac(this,tO,"f")[e]&&(ac(this,tO,"f")[e].value=t());if(e)for(let[t,i]of Object.entries(e))ac(this,tO,"f")[t]&&(ac(this,tO,"f")[t].value=i())}initializeBackbuffer(e,t,i,r){ac(this,tN,"f")&&!ac(this,tD,"f")&&(ac(this,tH,"f")?af(this,tD,new s5(e,ac(this,tH,"f")[0],ac(this,tH,"f")[1],1,ac(this,t$,"f")),"f"):af(this,tD,new s5(e,t,i,r,ac(this,t$,"f")),"f"))}resizeBackbuffer(e,t){ac(this,tD,"f")&&!ac(this,tH,"f")&&ac(this,tD,"f").resize(e,t)}registerBufferUniform(e){ac(this,tO,"f")[e]||(ac(this,tO,"f")[e]={value:null})}get backbuffer(){return ac(this,tD,"f")}get persistent(){return ac(this,tN,"f")}get float(){return ac(this,t$,"f")}get size(){return ac(this,tH,"f")}dispose(){this.pass.dispose(),ac(this,tD,"f")?.dispose()}}tO=new WeakMap,tV=new WeakMap,tD=new WeakMap,tN=new WeakMap,t$=new WeakMap,tH=new WeakMap;var au=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},ad=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class ap{constructor(e){tX.set(this,void 0),tG.set(this,new Map),au(this,tX,e,"f")}get(e,t,i){let r=`${t}\0${e}\0${i??""}`,s=ad(this,tG,"f").get(r);return s||(s=new on(ad(this,tX,"f"),e,t,i),ad(this,tG,"f").set(r,s)),s}get size(){return ad(this,tG,"f").size}dispose(){for(let e of ad(this,tG,"f").values())e.dispose();ad(this,tG,"f").clear()}}tX=new WeakMap,tG=new WeakMap;var am=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},av=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let ag=new Map;function aw(e,t){return"hic"===e||!0===t?null:"number"==typeof t?t.toString():"video"===e?"0.0001":"0"}function ax(e,t){let i=e.getContext("2d");i&&(i.clearRect(0,0,e.width,e.height),i.drawImage(t,0,0,e.width,e.height))}class ab{constructor(e,t){tj.add(this),tq.set(this,void 0),tJ.set(this,void 0),tK.set(this,void 0),tY.set(this,void 0),tZ.set(this,void 0),tQ.set(this,void 0),t0.set(this,void 0),t1.set(this,[]),t2.set(this,void 0),t3.set(this,new Map),t4.set(this,null),t5.set(this,!1),t6.set(this,new WeakSet),t8.set(this,{}),t9.set(this,{}),t7.set(this,0),ie.set(this,void 0),it.set(this,2),ii.set(this,[]),ir.set(this,new oq({showPlain:e=>{if("hic"===e.type){let t=e.srcTexture.source;t instanceof OffscreenCanvas&&ax(e.element,t)}else e.element.style.setProperty("opacity",e.originalOpacity.toString())},hidePlain:(e,t)=>{if("hic"===e.type){let t=e.element;t.getContext("2d")?.clearRect(0,0,t.width,t.height)}else e.element.style.opacity=t},isRegistered:e=>av(this,ii,"f").includes(e)})),is.set(this,0),io.set(this,1),ia.set(this,Date.now()/1e3),il.set(this,!1),ic.set(this,oL(0)),ih.set(this,oL(0)),iu.set(this,[0,0]),id.set(this,0),ip.set(this,0),im.set(this,0),iv.set(this,0),ig.set(this,new WeakMap),ix.set(this,async()=>{for(let e of av(this,ii,"f"))if("text"===e.type&&e.isInViewport){let t=e.element.getBoundingClientRect(),i=Math.ceil(t.width),r=Math.ceil(t.height);(i!==e.width||r!==e.height)&&(await av(this,tj,"m",iy).call(this,e),e.width=i,e.height=r)}for(let e of av(this,ii,"f"))if("text"===e.type&&!e.isInViewport){let t=e.element.getBoundingClientRect(),i=Math.ceil(t.width),r=Math.ceil(t.height);(i!==e.width||r!==e.height)&&(await av(this,tj,"m",iy).call(this,e),e.width=i,e.height=r)}}),ib.set(this,e=>{am(this,im,e.clientX,"f"),am(this,iv,window.innerHeight-e.clientY,"f")}),iS.set(this,()=>{this.isPlaying()&&(this.render(),am(this,ie,requestAnimationFrame(av(this,iS,"f")),"f"))}),am(this,tq,e,"f"),am(this,tJ,t,"f"),am(this,tK,new ar(t,e.preserveDrawingBuffer),"f"),am(this,tY,av(this,tK,"f").gl,"f"),av(this,tY,"f").clearColor(0,0,0,0),am(this,it,e.pixelRatio,"f"),am(this,io,e.timeScale,"f"),am(this,ia,Date.now()/1e3,"f"),am(this,tZ,new aa(av(this,tK,"f")),"f"),am(this,tQ,new ap(av(this,tK,"f")),"f"),window.addEventListener("resize",av(this,ix,"f")),window.addEventListener("pointermove",av(this,ib,"f")),av(this,ix,"f").call(this),am(this,t0,new od(av(this,tK,"f")),"f"),av(this,tj,"m",iI).call(this,e.postEffects),av(this,tK,"f").onContextRestored(()=>{av(this,tY,"f").clearColor(0,0,0,0)})}destroy(){for(let e of(this.stop(),window.removeEventListener("resize",av(this,ix,"f")),window.removeEventListener("pointermove",av(this,ib,"f")),av(this,t2,"f")?.dispose(),av(this,t3,"f").values()))e?.dispose();for(let e of av(this,t1,"f"))e.pass.dispose();av(this,t4,"f")&&(av(this,t4,"f").dispose(),am(this,t4,null,"f"),am(this,t5,!1,"f")),av(this,t0,"f").dispose(),av(this,tQ,"f").dispose(),av(this,tZ,"f").dispose()}async addElement(e,t={},i){let r,s,o;if(void 0!==t.effect)return av(this,tj,"m",iE).call(this,e,t,t.effect,i);let a=av(this,tj,"m",iM).call(this,t),n=e.getBoundingClientRect(),l=aC(e)?oV(n):oO(n),[f,c]=aT(t.overflow),h=oD(l,c),u=aE(t.intersection),d=""===e.style.opacity?1:Number.parseFloat(e.style.opacity),p=!1;if(e instanceof HTMLImageElement){s="img";let t=sl(e);if(p=!!t.match(/\.gif/i)){let i=await at.create(t,av(this,it,"f"));ag.set(e,i),r=new sq(av(this,tK,"f"),i.getCanvas())}else{let e=await sY(t);r=new sq(av(this,tK,"f"),e)}}else if(e instanceof HTMLVideoElement)r=new sq(av(this,tK,"f"),e),s="video";else if(e instanceof HTMLCanvasElement)sa(e)&&i?(r=new sq(av(this,tK,"f"),i),s="hic"):(r=new sq(av(this,tK,"f"),e),s="canvas");else{let t=await op(e,d,void 0,this.maxTextureSize);r=new sq(av(this,tK,"f"),t),s="text"}let[m,v]=ak(t.wrap);r.wrapS=m,r.wrapT=v,r.needsUpdate=!0;let g=t.autoCrop??!0,w=aw(s,t.overlay),x={src:{value:r},resolution:{value:new oi},offset:{value:new oi},time:{value:0},enterTime:{value:-1},leaveTime:{value:-1},mouse:{value:new oi},intersection:{value:0},viewport:{value:new or},autoCrop:{value:g}},b={};if(void 0!==t.uniforms)for(let[e,i]of Object.entries(t.uniforms))"function"==typeof i?(x[e]={value:i()},b[e]=i):x[e]={value:i};if(t.backbuffer){let e,t;e=(h.right-h.left)*av(this,it,"f"),t=(h.bottom-h.top)*av(this,it,"f"),x.backbuffer={value:(o=new s5(av(this,tK,"f"),e,t,av(this,it,"f"),!1)).texture}}let y=new Map,T=new Map;for(let e=0;e<a.length-1;e++){let t=a[e].target??`pass${e}`;a[e]={...a[e],target:t};let i=a[e].size,r=i?i[0]:(h.right-h.left)*av(this,it,"f"),s=i?i[1]:(h.bottom-h.top)*av(this,it,"f");if(a[e].persistent){let r=i?1:av(this,it,"f"),s=i?i[0]:h.right-h.left,o=i?i[1]:h.bottom-h.top;T.set(t,new s5(av(this,tK,"f"),s,o,r,a[e].float))}else y.set(t,an(av(this,tK,"f"),r,s,{float:a[e].float}))}let E=[];for(let e=0;e<a.length;e++){let t=a[e],i=t.frag,r={...x},s={};for(let[e,s]of y)e!==t.target&&i.match(RegExp(`uniform\\s+sampler2D\\s+${e}\\b`))&&(r[e]={value:s.texture});for(let[e,t]of T)i.match(RegExp(`uniform\\s+sampler2D\\s+${e}\\b`))&&(r[e]={value:t.texture});if(t.uniforms)for(let[e,i]of Object.entries(t.uniforms))"function"==typeof i?(r[e]={value:i()},s[e]=i):r[e]={value:i};let o=al(av(this,tK,"f"),{vertexShader:t.vert,fragmentShader:i,uniforms:r,renderingToBuffer:void 0!==t.target,glslVersion:t.glslVersion});E.push({pass:o,uniforms:r,uniformGenerators:{...b,...s},target:t.target,persistent:t.persistent,float:t.float,size:t.size,backbuffer:t.target?T.get(t.target):void 0})}let M=av(this,is,"f"),S={type:s,element:e,isInViewport:!1,isInLogicalViewport:!1,width:l.right-l.left,height:l.bottom-l.top,passes:E,bufferTargets:y,startTime:M,enterTime:M,leaveTime:-1/0,release:t.release??1/0,isGif:p,isFullScreen:f,overflow:c,intersection:u,originalOpacity:d,srcTexture:r,zIndex:t.zIndex??0,backbuffer:o,autoCrop:g};av(this,tj,"m",iP).call(this,S,l,M),av(this,tj,"m",iT).call(this,S,w)}async updateElementEffects(e,t){let i=av(this,ii,"f").find(t=>t.element===e);if(!i)throw Error("[VFX-JS] updateElementEffects: element not registered");if(!i.chain)throw Error("[VFX-JS] updateElementEffects: element is on the shader path; effect-only updates are not supported");let r=Array.isArray(t)?[...t]:[t],s=i.chain.effects,o=new Set(s),a=[];for(let e of r)if(!o.has(e)){if(av(this,t6,"f").has(e))throw Error("[VFX-JS] Effect instance already attached. Construct a new instance per `vfx.add()` / `postEffect`.");a.push(e)}await i.chain.replaceEffects(r);let n=new Set(r);for(let e of s)n.has(e)||av(this,t6,"f").delete(e);for(let e of a)av(this,t6,"f").add(e)}removeElement(e){let t=av(this,ii,"f").findIndex(t=>t.element===e);if(-1!==t){let i=av(this,ii,"f").splice(t,1)[0];if(i.chain)av(this,tj,"m",iW).call(this,i.chain.effects),i.chain.dispose();else{for(let e of i.bufferTargets.values())e.dispose();for(let e of i.passes)e.pass.dispose(),e.backbuffer?.dispose();i.backbuffer?.dispose()}i.srcTexture.dispose(),e.style.setProperty("opacity",i.originalOpacity.toString())}}updateTextElement(e){let t=av(this,ii,"f").findIndex(t=>t.element===e);return -1!==t?av(this,tj,"m",iy).call(this,av(this,ii,"f")[t]):Promise.resolve()}async updateImageElement(e){let t=av(this,ii,"f").find(t=>t.element===e);if(t?.type!=="img"||t.isGif)return;let i=await sY(sl(e)),r=t.srcTexture,s=new sq(av(this,tK,"f"),i);s.wrapS=r.wrapS,s.wrapT=r.wrapT,s.needsUpdate=!0,!t.chain&&t.passes.length>0&&(t.passes[0].uniforms.src.value=s),t.srcTexture=s,r.dispose()}updateCanvasElement(e){let t=av(this,ii,"f").find(t=>t.element===e);if(t){let i=t.srcTexture,r=new sq(av(this,tK,"f"),e);r.wrapS=i.wrapS,r.wrapT=i.wrapT,r.needsUpdate=!0,!t.chain&&t.passes.length>0&&(t.passes[0].uniforms.src.value=r),t.srcTexture=r,i.dispose()}}updateHICTexture(e,t){let i=av(this,ii,"f").find(t=>t.element===e);if(i?.type!=="hic")return;i.frozen&&ax(e,t);let r=i.srcTexture;if(r.source===t)r.needsUpdate=!0;else{let e=new sq(av(this,tK,"f"),t);e.wrapS=r.wrapS,e.wrapT=r.wrapT,e.needsUpdate=!0,!i.chain&&i.passes.length>0&&(i.passes[0].uniforms.src.value=e),i.srcTexture=e,r.dispose()}}freezeInside(e){return av(this,ir,"f").freezeInside(e,av(this,ii,"f"))}isFrozen(e){return av(this,ii,"f").some(t=>t.element===e&&t.frozen)}forceRender(e){let t=av(this,ii,"f").find(t=>t.element===e);return!t||t.forceRender?()=>{}:(t.forceRender=!0,()=>{t.forceRender=!1})}get maxTextureSize(){return av(this,tK,"f").maxTextureSize}isPlaying(){return void 0!==av(this,ie,"f")}play(){this.isPlaying()||(am(this,ia,Date.now()/1e3,"f"),am(this,ie,requestAnimationFrame(av(this,iS,"f")),"f"))}get time(){return av(this,is,"f")}setTime(e){am(this,is,e,"f"),am(this,il,!0,"f")}get timeScale(){return av(this,io,"f")}set timeScale(e){am(this,io,e,"f")}stop(){void 0!==av(this,ie,"f")&&(cancelAnimationFrame(av(this,ie,"f")),am(this,ie,void 0,"f"))}render(){let e=Date.now()/1e3;av(this,il,"f")?am(this,il,!1,"f"):am(this,is,av(this,is,"f")+(e-av(this,ia,"f"))*av(this,io,"f"),"f"),am(this,ia,e,"f");let t=av(this,is,"f"),i=av(this,tY,"f");av(this,tj,"m",iw).call(this),i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,av(this,tJ,"f").width,av(this,tJ,"f").height),i.clear(i.COLOR_BUFFER_BIT);let r=av(this,ic,"f").right-av(this,ic,"f").left,s=av(this,ic,"f").bottom-av(this,ic,"f").top,o={x:0,y:0,w:r,h:s},a=av(this,tj,"m",iR).call(this);for(let e of(a&&(av(this,tj,"m",iO).call(this,r,s),av(this,t2,"f")&&(i.bindFramebuffer(i.FRAMEBUFFER,av(this,t2,"f").fbo),i.clear(i.COLOR_BUFFER_BIT),i.bindFramebuffer(i.FRAMEBUFFER,null))),av(this,ii,"f"))){if(e.frozen)continue;let i=e.element.getBoundingClientRect(),n="text"===e.type?oV(i):oO(i),l=av(this,tj,"m",iP).call(this,e,n,t);if(!l.isVisible)continue;if(e.chain){av(this,tj,"m",ik).call(this,e,n,l,t);continue}let f=e.passes[0].uniforms;for(let i of(f.time.value=t-e.startTime,f.resolution.value.set((n.right-n.left)*av(this,it,"f"),(n.bottom-n.top)*av(this,it,"f")),f.mouse.value.set((av(this,im,"f")+av(this,id,"f"))*av(this,it,"f"),(av(this,iv,"f")+av(this,ip,"f"))*av(this,it,"f")),e.passes))for(let[e,t]of Object.entries(i.uniformGenerators))i.uniforms[e].value=t();ag.get(e.element)?.update(),("video"===e.type||e.isGif)&&(f.src.value.needsUpdate=!0);let c=s2(n,s,av(this,id,"f"),av(this,ip,"f")),h=s2(l.rectWithOverflow,s,av(this,id,"f"),av(this,ip,"f"));e.backbuffer&&(e.passes[0].uniforms.backbuffer.value=e.backbuffer.texture);{let t=e.isFullScreen?o:h,i=Math.max(1,t.w*av(this,it,"f")),r=Math.max(1,t.h*av(this,it,"f")),s=Math.max(1,t.w),a=Math.max(1,t.h);for(let t=0;t<e.passes.length-1;t++){let o=e.passes[t];if(!o.size)if(o.backbuffer)o.backbuffer.resize(s,a);else{let t=e.bufferTargets.get(o.target);t&&(t.width!==i||t.height!==r)&&t.setSize(i,r)}}}let u=new Map;for(let t of e.passes)t.backbuffer&&t.target&&u.set(t.target,t.backbuffer.texture);let d=e.srcTexture;for(let t=0;t<e.passes.length-1;t++){let r=e.passes[t],s=e.isFullScreen?o:h;for(let[e,t]of(r.uniforms.src.value=d,u))r.uniforms[e]&&(r.uniforms[e].value=t);for(let[e,t]of Object.entries(r.uniformGenerators))r.uniforms[e]&&(r.uniforms[e].value=t());let a=r.size?{x:0,y:0,w:r.size[0],h:r.size[1]}:{x:0,y:0,w:s.w,h:s.h},n=function(e,t,i,r,s,o,a){let n=s[0]+o[0]-i.x,l=s[1]+o[1]-i.y;return r?{resolution:[r[0],r[1]],offset:[0,0],mouse:[n/i.w*r[0],l/i.h*r[1]]}:{resolution:[e.width*a,e.height*a],offset:[(t.x-i.x)*a,(t.y-i.y)*a],mouse:[n*a,l*a]}}(i,c,s,r.size,[av(this,im,"f"),av(this,iv,"f")],[av(this,id,"f"),av(this,ip,"f")],av(this,it,"f"));if(r.uniforms.resolution.value.set(...n.resolution),r.uniforms.offset.value.set(...n.offset),r.uniforms.mouse.value.set(...n.mouse),r.backbuffer)av(this,tj,"m",iz).call(this,r.pass,r.backbuffer.target,a,r.uniforms,!0),r.backbuffer.swap(),d=r.backbuffer.texture;else{let t=e.bufferTargets.get(r.target);if(!t)continue;av(this,tj,"m",iz).call(this,r.pass,t,a,r.uniforms,!0),d=t.texture}r.target&&u.set(r.target,d)}let p=e.passes[e.passes.length-1];for(let[e,t]of(p.uniforms.src.value=d,p.uniforms.resolution.value.set(i.width*av(this,it,"f"),i.height*av(this,it,"f")),p.uniforms.offset.value.set(c.x*av(this,it,"f"),c.y*av(this,it,"f")),p.uniforms.mouse.value.set((av(this,im,"f")+av(this,id,"f"))*av(this,it,"f"),(av(this,iv,"f")+av(this,ip,"f"))*av(this,it,"f")),u))p.uniforms[e]&&(p.uniforms[e].value=t);for(let[e,t]of Object.entries(p.uniformGenerators))p.uniforms[e]&&(p.uniforms[e].value=t());e.backbuffer?(p.uniforms.backbuffer.value=e.backbuffer.texture,e.isFullScreen?(e.backbuffer.resize(r,s),av(this,tj,"m",i_).call(this,e,c.x,c.y),av(this,tj,"m",iz).call(this,p.pass,e.backbuffer.target,o,p.uniforms,!0),e.backbuffer.swap(),av(this,t0,"f").setUniforms(e.backbuffer.texture,av(this,it,"f"),o),av(this,tj,"m",iz).call(this,av(this,t0,"f").pass,a&&av(this,t2,"f")||null,o,av(this,t0,"f").uniforms,!1)):(e.backbuffer.resize(h.w,h.h),av(this,tj,"m",i_).call(this,e,e.overflow.left,e.overflow.bottom),av(this,tj,"m",iz).call(this,p.pass,e.backbuffer.target,e.backbuffer.getViewport(),p.uniforms,!0),e.backbuffer.swap(),av(this,t0,"f").setUniforms(e.backbuffer.texture,av(this,it,"f"),h),av(this,tj,"m",iz).call(this,av(this,t0,"f").pass,a&&av(this,t2,"f")||null,h,av(this,t0,"f").uniforms,!1))):(av(this,tj,"m",i_).call(this,e,c.x,c.y),av(this,tj,"m",iz).call(this,p.pass,a&&av(this,t2,"f")||null,e.isFullScreen?o:h,p.uniforms,!1))}a&&av(this,t2,"f")&&(av(this,t4,"f")&&av(this,t5,"f")?av(this,tj,"m",iL).call(this,o,t):av(this,tj,"m",iB).call(this,o,t))}}function ay(e,t){return t.left<=e.right&&t.right>=e.left&&t.top<=e.bottom&&t.bottom>=e.top}function aT(e){return!0===e?[!0,oB]:void 0===e?[!1,oB]:[!1,oL(e)]}function aE(e){return{threshold:e?.threshold??0,rootMargin:oL(e?.rootMargin??0)}}function aM(e,t){let i=e.source;return i?"u">typeof HTMLImageElement&&i instanceof HTMLImageElement?"w"===t?i.naturalWidth:i.naturalHeight:"u">typeof HTMLVideoElement&&i instanceof HTMLVideoElement?"w"===t?i.videoWidth:i.videoHeight:"w"===t?i.width:i.height:0}function aS(e){return"repeat"===e?"repeat":"mirror"===e?"mirror":"clamp"}function ak(e){if(!e)return["clamp","clamp"];if(Array.isArray(e))return[aS(e[0]),aS(e[1])];let t=aS(e);return[t,t]}function aR(e,t,i){return Math.max(t,Math.min(i,e))}function aC(e){return!(e instanceof HTMLImageElement||e instanceof HTMLVideoElement||e instanceof HTMLCanvasElement)}tq=new WeakMap,tJ=new WeakMap,tK=new WeakMap,tY=new WeakMap,tZ=new WeakMap,tQ=new WeakMap,t0=new WeakMap,t1=new WeakMap,t2=new WeakMap,t3=new WeakMap,t4=new WeakMap,t5=new WeakMap,t6=new WeakMap,t8=new WeakMap,t9=new WeakMap,t7=new WeakMap,ie=new WeakMap,it=new WeakMap,ii=new WeakMap,ir=new WeakMap,is=new WeakMap,io=new WeakMap,ia=new WeakMap,il=new WeakMap,ic=new WeakMap,ih=new WeakMap,iu=new WeakMap,id=new WeakMap,ip=new WeakMap,im=new WeakMap,iv=new WeakMap,ig=new WeakMap,ix=new WeakMap,ib=new WeakMap,iS=new WeakMap,tj=new WeakSet,iw=function(){let e,t,i=av(this,tJ,"f").ownerDocument,r="BackCompat"===i.compatMode?i.body:i.documentElement,s=r.clientWidth,o=r.clientHeight,a=window.scrollX,n=window.scrollY;if(av(this,tq,"f").fixedCanvas)e=0,t=0;else if(av(this,tq,"f").wrapper)e=s*av(this,tq,"f").scrollPadding[0],t=o*av(this,tq,"f").scrollPadding[1];else{let r=i.body.scrollWidth-(a+s),l=i.body.scrollHeight-(n+o);e=aR(s*av(this,tq,"f").scrollPadding[0],0,r),t=aR(o*av(this,tq,"f").scrollPadding[1],0,l)}let l=s+2*e,f=o+2*t;(l!==av(this,iu,"f")[0]||f!==av(this,iu,"f")[1])&&(av(this,tJ,"f").style.width=`${l}px`,av(this,tJ,"f").style.height=`${f}px`,av(this,tK,"f").setSize(l,f,av(this,it,"f")),am(this,ic,oL({top:-t,left:-e,right:s+e,bottom:o+t}),"f"),am(this,ih,oL({top:0,left:0,right:s,bottom:o}),"f"),am(this,iu,[l,f],"f"),am(this,id,e,"f"),am(this,ip,t,"f")),av(this,tq,"f").fixedCanvas||av(this,tJ,"f").style.setProperty("transform",`translate(${a-e}px, ${n-t}px)`)},iy=async function(e){if(!av(this,ig,"f").get(e.element)){av(this,ig,"f").set(e.element,!0);try{let t=e.srcTexture,i=t.source instanceof OffscreenCanvas?t.source:void 0,r=await op(e.element,e.originalOpacity,i,this.maxTextureSize);if(0===r.width||0===r.height)return;let s=new sq(av(this,tK,"f"),r);s.wrapS=t.wrapS,s.wrapT=t.wrapT,s.needsUpdate=!0,!e.chain&&e.passes.length>0&&(e.passes[0].uniforms.src.value=s),e.srcTexture=s,t.dispose()}catch(e){console.error(e)}finally{av(this,ig,"f").set(e.element,!1)}}},iT=function(e,t){av(this,ir,"f").adopt(e,t)||null===t||e.element.style.setProperty("opacity",t),av(this,ii,"f").push(e),av(this,ii,"f").sort((e,t)=>e.zIndex-t.zIndex)},iE=async function(e,t,i,r){let s,o;void 0!==t.shader&&console.warn("[VFX-JS] Both `shader` and `effect` specified; `effect` takes precedence."),void 0!==t.overflow&&console.warn("[VFX-JS] `overflow` is shader-path only and is ignored by the effect path. Use each effect's own `outputRect` (with `dims.canvasRect` for fullscreen) to control its dst rect.");let a=Array.isArray(i)?[...i]:[i];av(this,tj,"m",iC).call(this,a);let n=e.getBoundingClientRect(),l=aC(e)?oV(n):oO(n),[f,c]=aT(t.overflow),h=aE(t.intersection),u=""===e.style.opacity?1:Number.parseFloat(e.style.opacity),d=!1;if(e instanceof HTMLImageElement){o="img";let t=sl(e);if(d=!!t.match(/\.gif/i)){let i=await at.create(t,av(this,it,"f"));ag.set(e,i),s=new sq(av(this,tK,"f"),i.getCanvas())}else{let e=await sY(t);s=new sq(av(this,tK,"f"),e)}}else if(e instanceof HTMLVideoElement)s=new sq(av(this,tK,"f"),e),o="video";else if(e instanceof HTMLCanvasElement)sa(e)&&r?(s=new sq(av(this,tK,"f"),r),o="hic"):(s=new sq(av(this,tK,"f"),e),o="canvas");else{let t=await op(e,u,void 0,this.maxTextureSize);s=new sq(av(this,tK,"f"),t),o="text"}let[p,m]=ak(t.wrap);s.wrapS=p,s.wrapT=m,s.needsUpdate=!0;let v=t.autoCrop??!0,g=aw(o,t.overlay),w=av(this,is,"f"),x={type:o,element:e,isInViewport:!1,isInLogicalViewport:!1,width:l.right-l.left,height:l.bottom-l.top,passes:[],bufferTargets:new Map,startTime:w,enterTime:w,leaveTime:-1/0,release:t.release??1/0,isGif:d,isFullScreen:f,overflow:c,intersection:h,originalOpacity:u,srcTexture:s,zIndex:t.zIndex??0,backbuffer:void 0,autoCrop:v,effectLastRenderTime:w},b=o_(()=>x.srcTexture,()=>aM(x.srcTexture,"w"),()=>aM(x.srcTexture,"h")),y={},T={};if(t.uniforms)for(let[e,i]of Object.entries(t.uniforms))"function"==typeof i?(T[e]=i,y[e]=i()):y[e]=i;x.effectUniformGenerators=T,x.effectStaticUniforms=y;let E={autoCrop:v,glslVersion:t.glslVersion??"300 es"},M=new oX(av(this,tK,"f"),av(this,tZ,"f"),av(this,it,"f"),a,E,b,!1,av(this,tQ,"f"));try{await M.initAll()}catch(t){throw av(this,tj,"m",iW).call(this,a),s.dispose(),e.style.setProperty("opacity",u.toString()),t}x.chain=M,av(this,tj,"m",iP).call(this,x,l,w),av(this,tj,"m",iT).call(this,x,g)},iM=function(e){let t=t=>void 0===t.glslVersion&&void 0!==e.glslVersion?{...t,glslVersion:e.glslVersion}:t;return Array.isArray(e.shader)?e.shader.map(t):[t({frag:av(this,tj,"m",iF).call(this,e.shader||"uvGradient")})]},ik=function(e,t,i,r){let s=e.chain;if(!s)return;let o=av(this,it,"f");ag.get(e.element)?.update(),("video"===e.type||e.isGif)&&(e.srcTexture.needsUpdate=!0);let a={...e.effectStaticUniforms??{}};if(e.effectUniformGenerators)for(let[t,i]of Object.entries(e.effectUniformGenerators))a[t]=i();let n=av(this,ic,"f").right-av(this,ic,"f").left,l=av(this,ic,"f").bottom-av(this,ic,"f").top,f=s2(t,l,av(this,id,"f"),av(this,ip,"f")),c=av(this,im,"f")+av(this,id,"f")-f.x,h=av(this,iv,"f")+av(this,ip,"f")-f.y,u=t.right-t.left,d=t.bottom-t.top,p=e.effectLastRenderTime??r;e.effectLastRenderTime=r;let m=av(this,tj,"m",iR).call(this)&&av(this,t2,"f")?oU(av(this,t2,"f")):null;s.run({time:r-e.startTime,deltaTime:r-p,mouse:[c*o,h*o],mouseViewport:[av(this,im,"f")*o,av(this,iv,"f")*o],intersection:i.intersection,enterTime:r-e.enterTime,leaveTime:r-e.leaveTime,resolvedUniforms:a,canvasSize:[n,l],canvasBufferSize:[n*o,l*o],elementSize:[u,d],elementBufferSize:[u*o,d*o],elementRectOnCanvasPx:{x:f.x*o,y:f.y*o,w:f.w*o,h:f.h*o},finalTarget:m,isVisible:i.isVisible})},iR=function(){return av(this,t1,"f").length>0||null!==av(this,t4,"f")&&av(this,t5,"f")},iC=function(e){for(let t of e)if(av(this,t6,"f").has(t))throw Error("[VFX-JS] Effect instance already attached. Construct a new instance per `vfx.add()` / `postEffect`.");for(let t of e)av(this,t6,"f").add(t)},iW=function(e){for(let t of e)av(this,t6,"f").delete(t)},iA=function(e){let t=e.hitTestPadBuffer,i=av(this,it,"f");return oL({top:t.top/i,right:t.right/i,bottom:t.bottom/i,left:t.left/i})},iP=function(e,t,i){var r,s,o,a;let n,l,f,c=oD(t,e.chain?av(this,tj,"m",iA).call(this,e.chain):e.overflow),h=e.isFullScreen||ay(av(this,ih,"f"),c),u=oD(av(this,ih,"f"),e.intersection.rootMargin),d=(n=oN(t.left,u.left,u.right),l=(oN(t.right,u.left,u.right)-n)/(t.right-t.left),f=oN(t.top,u.top,u.bottom),l*((oN(t.bottom,u.top,u.bottom)-f)/(t.bottom-t.top))),p=e.isFullScreen||(r=u,s=t,o=d,0===(a=e.intersection.threshold)?ay(r,s):o>=a);!e.isInLogicalViewport&&p&&(e.enterTime=i,e.leaveTime=1/0),e.isInLogicalViewport&&!p&&(e.leaveTime=i),e.isInViewport=h,e.isInLogicalViewport=p;let m=h&&i-e.leaveTime<=e.release||!0===e.forceRender&&t.right>t.left&&t.bottom>t.top;if(m&&!e.chain&&e.passes.length>0){let t=e.passes[0].uniforms;t.intersection.value=d,t.enterTime.value=i-e.enterTime,t.leaveTime.value=i-e.leaveTime}return{isVisible:m,intersection:d,rectWithOverflow:c}},iF=function(e){return e in ot?ot[e]:e},iz=function(e,t,i,r,s){let o=av(this,tY,"f");s&&null!==t&&t!==av(this,t2,"f")&&(o.bindFramebuffer(o.FRAMEBUFFER,t.fbo),o.viewport(0,0,t.width,t.height),o.clear(o.COLOR_BUFFER_BIT));let a=r.viewport;a&&a.value instanceof or&&a.value.set(i.x*av(this,it,"f"),i.y*av(this,it,"f"),i.w*av(this,it,"f"),i.h*av(this,it,"f"));try{var n,l,f,c;let r,s,a,h,u,d,p,m;n=av(this,tZ,"f"),l=av(this,iu,"f")[0],f=av(this,iu,"f")[1],c=av(this,it,"f"),r=t?t.width/c:l,s=t?t.height/c:f,a=Math.max(0,i.x),h=Math.max(0,i.y),u=Math.min(r,i.x+i.w),d=Math.min(s,i.y+i.h),p=u-a,m=d-h,p<=0||m<=0||(o.bindFramebuffer(o.FRAMEBUFFER,t?t.fbo:null),o.viewport(Math.round(a*c),Math.round(h*c),Math.round(p*c),Math.round(m*c)),ou(o,e.blend),e.program.use(),e.program.uploadUniforms(e.uniforms),n.draw())}catch(e){console.error(e)}},i_=function(e,t,i){let r=e.passes[0].uniforms.offset.value;r.x=t*av(this,it,"f"),r.y=i*av(this,it,"f")},iI=function(e){let t=1!==e.length||"frag"in e[0]?null:e[0];if(t&&void 0!==t.effect)return void av(this,tj,"m",iU).call(this,t,t.effect);let i=[],r=[];for(let t of e)"frag"in t&&r.push(t);for(let e=0;e<r.length-1;e++)r[e].target||(r[e]={...r[e],target:`pass${e}`});for(let t of e){let e,r,s;if("frag"in t)e=t.frag,r=new ah(av(this,tK,"f"),e,t.uniforms,t.persistent??!1,t.float??!1,t.size,void 0!==t.target,t.glslVersion),s=t.target;else{if(void 0===t.shader)throw Error("VFXPostEffect requires `shader` (the `effect` path is not implemented yet).");e=av(this,tj,"m",iF).call(this,t.shader),r=new ah(av(this,tK,"f"),e,t.uniforms,t.persistent??!1,t.float??!1,void 0,!1,t.glslVersion),t.persistent&&r.registerBufferUniform("backbuffer"),s=void 0}i.push(e);let o={};if(t.uniforms)for(let[e,i]of Object.entries(t.uniforms))"function"==typeof i&&(o[e]=i);av(this,t1,"f").push({pass:r,target:s,generators:o})}for(let e of r)e.target&&av(this,t3,"f").set(e.target,void 0);let s=av(this,t1,"f").map(e=>e.target).filter(e=>void 0!==e);for(let e=0;e<av(this,t1,"f").length;e++)for(let t of s)i[e].match(RegExp(`uniform\\s+sampler2D\\s+${t}\\b`))&&av(this,t1,"f")[e].pass.registerBufferUniform(t)},iU=function(e,t){void 0!==e.shader&&console.warn("[VFX-JS] Both `shader` and `effect` specified on post-effect; `effect` takes precedence.");let i=Array.isArray(t)?[...t]:[t];av(this,tj,"m",iC).call(this,i);let r=o_(()=>{let e=av(this,t2,"f");if(!e)throw Error("[VFX-JS] post-effect chain active without target");return e.texture},()=>av(this,t2,"f")?.width??0,()=>av(this,t2,"f")?.height??0),s={autoCrop:!0,glslVersion:e.glslVersion??"300 es"},o=new oX(av(this,tK,"f"),av(this,tZ,"f"),av(this,it,"f"),i,s,r,!0,av(this,tQ,"f"));if(e.uniforms)for(let[t,i]of Object.entries(e.uniforms))"function"==typeof i?(av(this,t9,"f")[t]=i,av(this,t8,"f")[t]=i()):av(this,t8,"f")[t]=i;am(this,t4,o,"f"),am(this,t7,av(this,is,"f"),"f"),o.initAll().then(()=>{av(this,t4,"f")===o&&am(this,t5,!0,"f")}).catch(e=>{console.error("[VFX-JS] Post-effect init failed; post-effect disabled:",e),av(this,t4,"f")===o&&(av(this,tj,"m",iW).call(this,av(this,t4,"f").effects),av(this,t4,"f").dispose(),am(this,t4,null,"f"),am(this,t5,!1,"f"))})},iL=function(e,t){let i=av(this,t4,"f");if(!i)return;let r=av(this,it,"f"),s={...av(this,t8,"f")};for(let[e,t]of Object.entries(av(this,t9,"f")))s[e]=t();let o=av(this,ic,"f").right-av(this,ic,"f").left,a=av(this,ic,"f").bottom-av(this,ic,"f").top,n=t-av(this,t7,"f");am(this,t7,t,"f");let l=[o,a],f=[o*r,a*r],c={x:e.x*r,y:e.y*r,w:e.w*r,h:e.h*r};i.run({time:t,deltaTime:n,mouse:[av(this,im,"f")*r,av(this,iv,"f")*r],mouseViewport:[av(this,im,"f")*r,av(this,iv,"f")*r],intersection:1,enterTime:0,leaveTime:0,resolvedUniforms:s,canvasSize:l,canvasBufferSize:f,elementSize:l,elementBufferSize:f,elementRectOnCanvasPx:c,finalTarget:null,isVisible:!0})},iB=function(e,t){if(!av(this,t2,"f"))return;let i=av(this,t2,"f").texture,r=new Map;for(let{pass:e,target:t}of av(this,t1,"f"))t&&e.backbuffer&&r.set(t,e.backbuffer.texture);for(let s=0;s<av(this,t1,"f").length;s++){let{pass:o,target:a,generators:n}=av(this,t1,"f")[s],l=s===av(this,t1,"f").length-1,f=av(this,im,"f")+av(this,id,"f"),c=av(this,iv,"f")+av(this,ip,"f"),h=o.size;if(h){let[r,s]=h;o.uniforms.src.value=i,o.uniforms.resolution.value.set(r,s),o.uniforms.offset.value.set(0,0),o.uniforms.time.value=t,o.uniforms.mouse.value.set(f/e.w*r,c/e.h*s)}else o.setUniforms(i,av(this,it,"f"),e,t,f,c);for(let[e,t]of(o.uniforms.passIndex.value=s,o.updateCustomUniforms(n),r)){let i=o.uniforms[e];i&&(i.value=t)}if(l)o.backbuffer?(o.uniforms.backbuffer&&(o.uniforms.backbuffer.value=o.backbuffer.texture),av(this,tj,"m",iz).call(this,o.pass,o.backbuffer.target,e,o.uniforms,!0),o.backbuffer.swap(),av(this,t0,"f").setUniforms(o.backbuffer.texture,av(this,it,"f"),e),av(this,tj,"m",iz).call(this,av(this,t0,"f").pass,null,e,av(this,t0,"f").uniforms,!1)):av(this,tj,"m",iz).call(this,o.pass,null,e,o.uniforms,!1);else if(o.backbuffer){o.uniforms.backbuffer&&(o.uniforms.backbuffer.value=o.backbuffer.texture);let t=h?{x:0,y:0,w:h[0]/av(this,it,"f"),h:h[1]/av(this,it,"f")}:e;av(this,tj,"m",iz).call(this,o.pass,o.backbuffer.target,t,o.uniforms,!0),o.backbuffer.swap(),i=o.backbuffer.texture,a&&r.set(a,o.backbuffer.texture)}else{let t=a??`postEffect${s}`,n=av(this,t3,"f").get(t),l=h?h[0]:e.w*av(this,it,"f"),f=h?h[1]:e.h*av(this,it,"f");n&&n.width===l&&n.height===f||(n?.dispose(),n=an(av(this,tK,"f"),l,f,{float:o.float}),av(this,t3,"f").set(t,n));let c=h?{x:0,y:0,w:h[0]/av(this,it,"f"),h:h[1]/av(this,it,"f")}:e;av(this,tj,"m",iz).call(this,o.pass,n,c,o.uniforms,!0),i=n.texture,a&&r.set(a,n.texture)}}},iO=function(e,t){let i=e*av(this,it,"f"),r=t*av(this,it,"f");for(let{pass:s}of(av(this,t2,"f")&&av(this,t2,"f").width===i&&av(this,t2,"f").height===r||(av(this,t2,"f")?.dispose(),am(this,t2,an(av(this,tK,"f"),i,r),"f")),av(this,t1,"f")))s.persistent&&!s.backbuffer?s.initializeBackbuffer(av(this,tK,"f"),e,t,av(this,it,"f")):s.backbuffer&&s.resizeBackbuffer(e,t)};var aW=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},aA=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};iD=new WeakMap,iN=new WeakMap,i$=new WeakMap,iH=new WeakMap,iV=new WeakSet,iX=async function(e,t,i){if(!sI())return console.warn("html-in-canvas not supported, falling back to dom-to-canvas"),this.add(e,t);void 0!==t.overlay&&console.warn("addHTML does not support overlay mode (layoutsubtree hides children). Ignoring overlay option.");let{overlay:r,...s}=t,o=aA(this,i$,"f").get(e);o&&aA(this,iD,"f").removeElement(o);let{canvas:a,initialCapture:n}=await sz(e,{onCapture:e=>{aA(this,iD,"f").updateHICTexture(a,e)},maxSize:aA(this,iD,"f").maxTextureSize,stillCover:i?{zIndex:aA(this,iV,"m",iG).call(this)}:void 0});o=a,aA(this,i$,"f").set(e,o),await aA(this,iV,"m",ij).call(this,o,s,n)},iG=function(){let e=Number.parseInt(aA(this,iN,"f").style.zIndex,10);return Number.isNaN(e)?9998:e-1},ij=async function(e,t,i){try{await aA(this,iD,"f").addElement(e,t,i)}finally{sA(e,aA(this,iD,"f").isFrozen(e))}},iq=function(e,t){return e.complete?aA(this,iD,"f").addElement(e,t):new Promise(i=>{e.addEventListener("load",()=>{aA(this,iD,"f").addElement(e,t),i()},{once:!0})})},iJ=function(e,t){return e.readyState>=3?aA(this,iD,"f").addElement(e,t):new Promise(i=>{e.addEventListener("canplay",()=>{aA(this,iD,"f").addElement(e,t),i()},{once:!0})})},iK=function(e,t){return aA(this,iD,"f").addElement(e,t)},iY=function(e,t){return aA(this,iD,"f").addElement(e,t)},e.s(["f",0,class e{static init(t){try{return new e(t)}catch{return null}}constructor(e={}){let t,i,r;if(iV.add(this),iD.set(this,void 0),iN.set(this,void 0),i$.set(this,new Map),iH.set(this,new Set),"u"<typeof document)throw"Cannot find 'document'. VFX-JS only runs on the browser.";if(!function(){try{let e=document.createElement("canvas"),t=e.getContext("webgl2")||e.getContext("webgl");return null!==t}catch{return!1}}())throw Error("[VFX-JS] WebGL is not available in this environment.");let s=(r=window.devicePixelRatio,t=void 0===e.scrollPadding?[.1,.1]:!1===e.scrollPadding?[0,0]:Array.isArray(e.scrollPadding)?[e.scrollPadding[0]??.1,e.scrollPadding[1]??.1]:[e.scrollPadding,e.scrollPadding],i=void 0===e.postEffect?[]:Array.isArray(e.postEffect)?e.postEffect:[e.postEffect],{pixelRatio:e.pixelRatio??r,zIndex:e.zIndex??void 0,autoplay:e.autoplay??!0,fixedCanvas:!1===e.scrollPadding,scrollPadding:t,wrapper:e.wrapper,postEffects:i,preserveDrawingBuffer:e.preserveDrawingBuffer??!1,timeScale:e.timeScale??1}),o=document.createElement("canvas");for(let[e,t]of Object.entries({position:s.fixedCanvas?"fixed":"absolute",top:0,left:0,width:"0px",height:"0px","z-index":9999,"pointer-events":"none"}))o.style.setProperty(e,t.toString());void 0!==s.zIndex&&o.style.setProperty("z-index",s.zIndex.toString()),(s.wrapper??document.body).appendChild(o),aW(this,iN,o,"f"),aW(this,iD,new ab(s,o),"f"),s.autoplay&&aA(this,iD,"f").play()}async add(e,t,i){e instanceof HTMLImageElement?await aA(this,iV,"m",iq).call(this,e,t):e instanceof HTMLVideoElement?await aA(this,iV,"m",iJ).call(this,e,t):e instanceof HTMLCanvasElement?sa(e)&&i?await aA(this,iV,"m",ij).call(this,e,t,i):await aA(this,iV,"m",iK).call(this,e,t):await aA(this,iV,"m",iY).call(this,e,t)}updateHICTexture(e,t){aA(this,iD,"f").updateHICTexture(e,t)}get maxTextureSize(){return aA(this,iD,"f").maxTextureSize}get canvas(){return aA(this,iN,"f")}addHTML(e,t){return aA(this,iV,"m",iX).call(this,e,t,!1)}addHTMLWithStill(e,t){return aA(this,iV,"m",iX).call(this,e,t,!0)}addTransition(e,t={}){let i=new sX(this,e,t,()=>aA(this,iH,"f").delete(i));return aA(this,iH,"f").add(i),i}freezeInside(e){return aA(this,iD,"f").freezeInside(e)}lockSize(e){let t=aA(this,i$,"f").get(e);return t?sC(t):()=>{}}forceRender(e){let t=aA(this,i$,"f").get(e)??e;return aA(this,iD,"f").forceRender(t)}remove(e){let t=aA(this,i$,"f").get(e);t?(s_(t,e),aA(this,i$,"f").delete(e),aA(this,iD,"f").removeElement(t)):aA(this,iD,"f").removeElement(e)}updateEffects(e,t){let i=aA(this,i$,"f").get(e)??e;return aA(this,iD,"f").updateElementEffects(i,t)}async update(e){await this.updateInTime(e)}async updateInTime(e){let t=aA(this,i$,"f").get(e)??(e instanceof HTMLCanvasElement?e:null),i=t?sR(t):void 0;return i||(e instanceof HTMLImageElement?await aA(this,iD,"f").updateImageElement(e):e instanceof HTMLCanvasElement?aA(this,iD,"f").updateCanvasElement(e):await aA(this,iD,"f").updateTextElement(e),!0)}play(){aA(this,iD,"f").play()}stop(){aA(this,iD,"f").stop()}render(){aA(this,iD,"f").render()}get time(){return aA(this,iD,"f").time}setTime(e){aA(this,iD,"f").setTime(e)}get timeScale(){return aA(this,iD,"f").timeScale}set timeScale(e){aA(this,iD,"f").timeScale=e}destroy(){for(let e of aA(this,iH,"f"))e.destroy();for(let[e,t]of(aA(this,iH,"f").clear(),aA(this,i$,"f")))s_(t,e);aA(this,i$,"f").clear(),aA(this,iD,"f").destroy(),aA(this,iN,"f").remove()}}],61388),e.s([],90422);let aP=`
vec4 splitRead(vec2 uvr, vec2 uvg, vec2 uvb, bool to) {
  vec4 r = to ? readTo(uvr) : readFrom(uvr);
  vec4 g = to ? readTo(uvg) : readFrom(uvg);
  vec4 b = to ? readTo(uvb) : readFrom(uvb);
  return vec4(r.r, g.g, b.b, (r.a + g.a + b.a) / 3.0);
}
`,aF=`
float ign(vec2 p) {
  return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
}
`,az=`
vec2 mirror(vec2 p) {
  return 1.0 - abs(1.0 - mod(p, 2.0));
}
`,a_=ss({name:"hard_cut",frag:`
vec4 transition(vec2 uv, float t) {
  return t < 0.5 ? readFrom(uv) : readTo(uv);
}
`}),aI=ss({name:"crosszoom",overflow:!0,frag:`
const float STRENGTH = 0.4;
const float TAPS = 16.0;

${aF}
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
`});e.s(["f",0,aI],75682);new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet;new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet;let aU=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D src;
uniform vec4 srcRectUv;
void main() {
    outColor = texture(src, srcRectUv.xy + uv * srcRectUv.zw);
}
`,aL=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D src;
void main() {
    outColor = texture(src, uv);
}
`;function aB(e,t){e.draw({frag:aU,uniforms:{src:e.src},target:t})}var aO=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},aV=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let aD=`#version 300 es
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
`,aN=`#version 300 es
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
`,a$=`#version 300 es
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
`,aH=`#version 300 es
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
`,aX=`#version 300 es
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
`,aG=`#version 300 es
precision highp float;
in vec2 uvContent;
out vec4 outColor;
uniform sampler2D uResidual;
void main() {
    vec3 r = texture(uResidual, uvContent).rgb;
    outColor = vec4(clamp(r * 0.5 + 0.5, 0.0, 1.0), 1.0);
}
`,aj=`
float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
vec2 chroma(vec3 c) {
    return vec2(dot(c, vec3(-0.168736, -0.331264, 0.5)),
                dot(c, vec3(0.5, -0.418688, -0.081312))) + 0.5;
}
`,aq=`#version 300 es
precision highp float;
${aj}
in vec2 uv;
out vec4 outColor;
uniform sampler2D uCur, uRef, uMV;
uniform vec2 uChromaRes;
void main() {
    vec2 mvc = floor(texture(uMV, uv).rg * 0.5);
    vec2 pred = chroma(texture(uRef, uv + mvc / uChromaRes).rgb);
    outColor = vec4(chroma(texture(uCur, uv).rgb) - pred, 0.0, 1.0);
}
`,aJ=`#version 300 es
precision highp float;
${aj}
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
`,aK=`#version 300 es
precision highp float;
${aj}
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
`,aY=`#version 300 es
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
`,aZ={blockSize:16,searchRange:5,searchStep:2,useResidual:!0,dup:0,colorSpace:"ycbcr",chromaGain:1,healRate:0,healThreshold:1,view:"output"};class aQ{constructor(e={}){iZ.add(this),iQ.set(this,!1),i0.set(this,!0),i1.set(this,null),i2.set(this,null),i3.set(this,null),i4.set(this,null),i5.set(this,null),i6.set(this,null),i8.set(this,null),i9.set(this,0),i7.set(this,0),re.set(this,0),rt.set(this,0),ri.set(this,0),rr.set(this,0),rs.set(this,void 0),this.params={...aZ,...e},aO(this,rs,this.params.colorSpace,"f")}setParams(e){Object.assign(this.params,e)}enable(){aO(this,iQ,!0,"f")}disable(){aO(this,iQ,!1,"f"),aO(this,i0,!0,"f")}get enabled(){return aV(this,iQ,"f")}render(e){var t,i;aV(this,iZ,"m",ra).call(this,e);let r=aV(this,i1,"f"),s=aV(this,i2,"f"),o=aV(this,i3,"f"),a=aV(this,i4,"f"),n=aV(this,i5,"f"),l=aV(this,i6,"f"),f=aV(this,i8,"f");if(!r||!s||!o||!a||!n||!l||!f)return;this.params.colorSpace!==aV(this,rs,"f")&&(aO(this,rs,this.params.colorSpace,"f"),aO(this,i0,!0,"f"));let c=[aV(this,i9,"f"),aV(this,i7,"f")];aB(e,r);let h="output"!==this.params.view;if((aV(this,iQ,"f")||h)&&(e.draw({frag:aN,uniforms:{uCur:r,uRef:s,uResolution:c,uBlock:aV(this,ri,"f"),uSearch:this.params.searchRange,uStep:this.params.searchStep,uHealRate:this.params.healRate,uHealThreshold:this.params.healThreshold,uFrame:(aO(this,rr,(i=aV(this,rr,"f"),t=i++,i),"f"),t%65536)},target:o}),e.draw({frag:a$,uniforms:{uCur:r,uRef:s,uMV:o,uResolution:c},target:a})),aV(this,iQ,"f")){let t=aV(this,i0,"f")?1:1+this.params.dup,i=[aV(this,re,"f"),aV(this,rt,"f")];"ycbcr"===this.params.colorSpace&&e.draw({frag:aq,uniforms:{uCur:r,uRef:s,uMV:o,uChromaRes:i},target:f});for(let s=0;s<t;s++){let t=this.params.useResidual&&0===s;"ycbcr"===this.params.colorSpace?(e.draw({frag:aJ,uniforms:{uAccum:n,uMV:o,uVideo:r,uResidual:a,uResolution:c,uIntra:aV(this,i0,"f"),uUseResidual:t},target:n}),e.draw({frag:aK,uniforms:{uChromaAcc:l,uMV:o,uVideo:r,uResidualC:f,uChromaRes:i,uIntra:aV(this,i0,"f"),uUseResidual:t},target:l})):e.draw({frag:aH,uniforms:{uAccum:n,uMV:o,uVideo:r,uResidual:a,uResolution:c,uIntra:aV(this,i0,"f"),uUseResidual:t},target:n})}aO(this,i0,!1,"f")}else aO(this,i0,!0,"f");aV(this,iZ,"m",rn).call(this,e,r,s,o,a,n,l),aB(e,s)}dispose(){aV(this,iZ,"m",ro).call(this),aO(this,i9,0,"f"),aO(this,i7,0,"f"),aO(this,re,0,"f"),aO(this,rt,0,"f"),aO(this,ri,0,"f"),aO(this,i0,!0,"f")}}iQ=new WeakMap,i0=new WeakMap,i1=new WeakMap,i2=new WeakMap,i3=new WeakMap,i4=new WeakMap,i5=new WeakMap,i6=new WeakMap,i8=new WeakMap,i9=new WeakMap,i7=new WeakMap,re=new WeakMap,rt=new WeakMap,ri=new WeakMap,rr=new WeakMap,rs=new WeakMap,iZ=new WeakSet,ro=function(){aV(this,i1,"f")?.dispose(),aV(this,i2,"f")?.dispose(),aV(this,i3,"f")?.dispose(),aV(this,i4,"f")?.dispose(),aV(this,i5,"f")?.dispose(),aV(this,i6,"f")?.dispose(),aV(this,i8,"f")?.dispose(),aO(this,i1,null,"f"),aO(this,i2,null,"f"),aO(this,i3,null,"f"),aO(this,i4,null,"f"),aO(this,i5,null,"f"),aO(this,i6,null,"f"),aO(this,i8,null,"f")},ra=function(e){let[t,i]=e.dims.elementPixel,r=Math.max(2,this.params.blockSize);if(aV(this,i9,"f")===t&&aV(this,i7,"f")===i&&aV(this,ri,"f")===r)return;aV(this,iZ,"m",ro).call(this),aO(this,i9,t,"f"),aO(this,i7,i,"f"),aO(this,re,Math.ceil(t/2),"f"),aO(this,rt,Math.ceil(i/2),"f"),aO(this,ri,r,"f"),aO(this,i0,!0,"f");let s=Math.ceil(t/r),o=Math.ceil(i/r);aO(this,i1,e.createRenderTarget({size:[t,i]}),"f"),aO(this,i2,e.createRenderTarget({size:[t,i],persistent:!0}),"f"),aO(this,i4,e.createRenderTarget({size:[t,i],float:!0}),"f"),aO(this,i5,e.createRenderTarget({size:[t,i],float:!0,persistent:!0}),"f"),aO(this,i6,e.createRenderTarget({size:[aV(this,re,"f"),aV(this,rt,"f")],float:!0,persistent:!0}),"f"),aO(this,i8,e.createRenderTarget({size:[aV(this,re,"f"),aV(this,rt,"f")],float:!0}),"f"),aO(this,i3,e.createRenderTarget({size:[s,o],float:!0,filter:"nearest"}),"f")},rn=function(e,t,i,r,s,o,a){switch(this.params.view){case"motion":e.draw({frag:aX,uniforms:{uMV:r,uMvScale:this.params.searchRange*this.params.searchStep},target:e.target});return;case"residual":e.draw({frag:aG,uniforms:{uResidual:s},target:e.target});return;case"current":e.draw({frag:aD,uniforms:{tex:t},target:e.target});return;case"previous":e.draw({frag:aD,uniforms:{tex:i},target:e.target});return;default:aV(this,iQ,"f")&&"ycbcr"===this.params.colorSpace?e.draw({frag:aY,uniforms:{uLumaAcc:o,uChromaAcc:a,uChromaGain:this.params.chromaGain},target:e.target}):e.draw({frag:aD,uniforms:{tex:aV(this,iQ,"f")?o:t},target:e.target})}},new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap;var a0=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)},a1=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i};let a2=`#version 300 es
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
`,a3=`#version 300 es
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
`,a4={quality:.4,seed:.25,iterations:24,resolutionScale:1,randomFlip:!0,vertical:!1,speed:0,bypass:!1};function a5(e,t){if("u">typeof OffscreenCanvas)return new OffscreenCanvas(e,t);let i=document.createElement("canvas");return i.width=e,i.height=t,i}function a6(e){let t=e.getContext("2d");if(!t)throw Error("[VFX-JS] JPEGGlitchEffect: 2D canvas context unavailable");return t}function a8(e,t,i,r,s,o,a){switch(e.save(),e.clearRect(0,0,o,a),s){case 90:e.translate(o,0);break;case 180:e.translate(o,a);break;case 270:e.translate(0,a)}e.rotate(s*Math.PI/180),e.drawImage(t,0,0,i,r),e.restore()}class a9{get producedFrames(){return a0(this,r_,"f")}constructor(e={}){rl.add(this),this.enabled=!0,rf.set(this,!1),rc.set(this,null),rh.set(this,null),ru.set(this,null),rd.set(this,null),rp.set(this,!1),rm.set(this,null),rv.set(this,null),rg.set(this,null),rw.set(this,null),rx.set(this,null),rb.set(this,null),ry.set(this,null),rT.set(this,new Uint8Array(0)),rE.set(this,null),rM.set(this,0),rS.set(this,0),rk.set(this,0),rR.set(this,0),rC.set(this,!0),rW.set(this,!1),rA.set(this,-1e9),rP.set(this,0),rF.set(this,0),rz.set(this,!1),r_.set(this,0),this.params={...a4,...e}}setParams(e){Object.assign(this.params,e),a1(this,rC,!0,"f")}init(e){a1(this,rf,"function"==typeof createImageBitmap&&("u">typeof OffscreenCanvas||"u">typeof document),"f"),a0(this,rf,"f")&&(a1(this,rA,-1e9,"f"),a1(this,rC,!0,"f"),a1(this,rv,a5(1,1),"f"),a1(this,rg,a6(a0(this,rv,"f")),"f"),a1(this,rw,a5(1,1),"f"),a1(this,rx,a6(a0(this,rw,"f")),"f"),a1(this,rb,a5(1,1),"f"),a1(this,ry,a6(a0(this,rb,"f")),"f"),a1(this,rc,e.createRenderTarget({size:[1,1]}),"f"),a1(this,ru,e.gl,"f"),a0(this,rl,"m",rI).call(this,e),a1(this,rm,e.onContextRestored(()=>{a0(this,rl,"m",rI).call(this,e),a1(this,rp,a0(this,rz,"f"),"f")}),"f"))}update(){!1===this.enabled&&a1(this,rz,!1,"f")}render(e){if(this.params.bypass||!a0(this,rf,"f")||!a0(this,rc,"f")){a1(this,rz,!1,"f"),a0(this,rl,"m",rU).call(this,e);return}let t=e.src.width,i=e.src.height;(t!==a0(this,rk,"f")||i!==a0(this,rR,"f"))&&(a1(this,rk,t,"f"),a1(this,rR,i,"f"),a1(this,rC,!0,"f"));let[r,s]=e.dims.elementPixel,o=Math.min(1,Math.max(0,this.params.resolutionScale)),a=Math.max(1,Math.round(r*o)),n=Math.max(1,Math.round(s*o));r>=2&&s>=2&&t>0&&i>0&&((a!==a0(this,rM,"f")||n!==a0(this,rS,"f"))&&a0(this,rl,"m",rB).call(this,e,a,n),a0(this,rl,"m",rL).call(this,e)&&a0(this,rl,"m",rO).call(this,e)),a0(this,rz,"f")&&a0(this,rh,"f")?(a0(this,rp,"f")&&a0(this,rl,"m",rV).call(this,e),e.draw({frag:a3,uniforms:{tex:a0(this,rh,"f")},target:e.target})):a0(this,rl,"m",rU).call(this,e)}dispose(){var e;a0(this,rm,"f")?.call(this),a1(this,rm,null,"f"),a0(this,ru,"f")&&a0(this,rd,"f")&&a0(this,ru,"f").deleteTexture(a0(this,rd,"f")),a1(this,rd,null,"f"),a1(this,ru,null,"f"),a1(this,rp,!1,"f"),a0(this,rc,"f")?.dispose(),a1(this,rc,null,"f"),a1(this,rh,null,"f"),a1(this,rv,null,"f"),a1(this,rg,null,"f"),a1(this,rw,null,"f"),a1(this,rx,null,"f"),a1(this,rb,null,"f"),a1(this,ry,null,"f"),a1(this,rE,null,"f"),a1(this,rT,new Uint8Array(0),"f"),a1(this,rz,!1,"f"),a1(this,rW,!1,"f"),a1(this,rM,0,"f"),a1(this,rS,0,"f"),a1(this,rP,(e=a0(this,rP,"f"),++e),"f")}}rf=new WeakMap,rc=new WeakMap,rh=new WeakMap,ru=new WeakMap,rd=new WeakMap,rp=new WeakMap,rm=new WeakMap,rv=new WeakMap,rg=new WeakMap,rw=new WeakMap,rx=new WeakMap,rb=new WeakMap,ry=new WeakMap,rT=new WeakMap,rE=new WeakMap,rM=new WeakMap,rS=new WeakMap,rk=new WeakMap,rR=new WeakMap,rC=new WeakMap,rW=new WeakMap,rA=new WeakMap,rP=new WeakMap,rF=new WeakMap,rz=new WeakMap,r_=new WeakMap,rl=new WeakSet,rI=function(e){let t=e.gl,i=t.createTexture();i&&(t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array([0,0,0,0])),t.bindTexture(t.TEXTURE_2D,null),a1(this,rd,i,"f"),a1(this,rh,e.wrapTexture(i,{size:[a0(this,rM,"f")||1,a0(this,rS,"f")||1]}),"f"))},rU=function(e){e.draw({frag:a2,uniforms:{src:e.src},target:e.target})},rL=function(e){if(a0(this,rW,"f"))return!1;let t=this.params.speed;return t>0?e.time-a0(this,rA,"f")>=1/t:a0(this,rC,"f")},rB=function(e,t,i){var r;a1(this,rM,t,"f"),a1(this,rS,i,"f"),a1(this,rT,new Uint8Array(t*i*4),"f"),a1(this,rE,new ImageData(t,i),"f"),a0(this,rv,"f")&&(a0(this,rv,"f").width=t,a0(this,rv,"f").height=i),a0(this,rb,"f")&&(a0(this,rb,"f").width=t,a0(this,rb,"f").height=i),a0(this,rc,"f")?.dispose(),a1(this,rc,e.createRenderTarget({size:[t,i]}),"f"),a1(this,rz,!1,"f"),a1(this,rC,!0,"f"),a1(this,rW,!1,"f"),a1(this,rp,!1,"f"),a1(this,rP,(r=a0(this,rP,"f"),++r),"f")},rO=function(e){var t;let i,r=a0(this,rM,"f"),s=a0(this,rS,"f"),o=a0(this,rv,"f"),a=a0(this,rg,"f"),n=a0(this,rw,"f"),l=a0(this,rx,"f"),f=a0(this,rE,"f");if(!o||!a||!n||!l||!f||!a0(this,rc,"f"))return;aB(e,a0(this,rc,"f"));let c=e.gl;c.readPixels(0,0,r,s,c.RGBA,c.UNSIGNED_BYTE,a0(this,rT,"f")),c.bindFramebuffer(c.FRAMEBUFFER,null),a1(this,rW,!0,"f"),a1(this,rC,!1,"f"),a1(this,rA,e.time,"f");let h=f.data,u=4*r;for(let e=0;e<s;e++){let t=(s-1-e)*u;h.set(a0(this,rT,"f").subarray(t,t+u),e*u)}for(let e=3;e<h.length;e+=4)h[e]=255;let d=this.params.speed>0?a0(this,rF,"f"):0;a1(this,rF,(t=a0(this,rF,"f"),++t),"f");let{quality:p,seed:m,iterations:v,randomFlip:g,vertical:w}=this.params,x=(i=Math.imul(0|Math.floor(0x9e3779b1*m),0x85ebca77)+Math.imul(d+1,0xc2b2ae3d)>>>0,()=>{let e=Math.imul((i=i+0x6d2b79f5>>>0)^i>>>15,1|i);return(((e=e+Math.imul(e^e>>>7,61|e)^e)^e>>>14)>>>0)/0x100000000}),b=g&&.5>x();a.putImageData(f,0,0);let y=(180*!!b+270*!!w)%360,T=w?s:r,E=w?r:s;n.width=T,n.height=E,a8(l,o,r,s,y,T,E),a0(this,rl,"m",rD).call(this,n,r,s,p,v,y,x,a0(this,rP,"f"))},rV=function(e){let t=e.gl;a0(this,rd,"f")&&a0(this,rb,"f")&&(t.bindTexture(t.TEXTURE_2D,a0(this,rd,"f")),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,a0(this,rb,"f")),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.bindTexture(t.TEXTURE_2D,null),a1(this,rp,!1,"f"))},rD=async function(e,t,i,r,s,o,a,n){var l;try{let f=await ("u">typeof OffscreenCanvas&&e instanceof OffscreenCanvas?e.convertToBlob({type:"image/jpeg",quality:r}):new Promise((t,i)=>{e.toBlob(e=>e?t(e):i(Error("[VFX-JS] JPEGGlitchEffect: toBlob failed")),"image/jpeg",r)})),c=new Uint8Array(await f.arrayBuffer()),h=function(e){for(let t=2;t+3<e.length;t++)if(255===e[t]&&218===e[t+1]){let i=e[t+2]<<8|e[t+3];return Math.min(e.length,t+2+i)}return Math.min(e.length,417)}(c);!function(e,t,i,r){let s=e.length-t-4;if(s<=1)return;let o=Math.max(1,Math.floor(i));for(let i=0;i<o;i++){let a=s/o*i|0,n=Math.max(1,(s/o*(i+1)|0)-a),l=Math.min(s,a+(r()*n|0)),f=256*r()|0;e[t+l]=f}}(c,h,s,a);let u=await createImageBitmap(new Blob([c],{type:"image/jpeg"}));n===a0(this,rP,"f")&&a0(this,ry,"f")&&(a8(a0(this,ry,"f"),u,u.width,u.height,(360-o)%360,t,i),a1(this,rz,!0,"f"),a1(this,r_,(l=a0(this,r_,"f"),++l),"f"),a1(this,rp,!0,"f")),u.close()}catch{}finally{n===a0(this,rP,"f")&&a1(this,rW,!1,"f")}},new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap;new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet,new Float32Array([-.5,-.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,-.5,.5]);let a7=new Float32Array(4096);for(let e=0;e<4096;e++)a7[e]=e;new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,rN=new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet;new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet;var ne=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)},nt=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i};let ni=`
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
`,nr=`
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
`,ns=`#version 300 es
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
${ni}
${nr}
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
`,no=`#version 300 es
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
${ni}
${nr}
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
`,na=`#version 300 es
precision highp float;
in vec2 uvSrc;
out vec4 outColor;
uniform sampler2D src;
void main() {
    vec4 c = texture(src, uvSrc);
    outColor = vec4(c.rgb * c.a, c.a);
}
`,nn=`#version 300 es
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
`,nl=`#version 300 es
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
`,nf={right:{axis:0,direction:0},left:{axis:0,direction:1},down:{axis:1,direction:1},up:{axis:1,direction:0}},nc={luminance:0,r:1,g:2,b:3,hue:4,saturation:5},nh={range:[0,1],sortRes:128,key:"luminance",direction:"up",angle:0,bypass:!1};class nu{constructor(e={}){r$.add(this),rH.set(this,null),rX.set(this,null),rG.set(this,null),rj.set(this,null),rq.set(this,0),rJ.set(this,0),rK.set(this,0),rY.set(this,0),rZ.set(this,0),rQ.set(this,0),r0.set(this,0),this.params={...nh,...e},this.params.range=[...this.params.range]}setParams(e){Object.assign(this.params,e),e.range&&(this.params.range=[...e.range])}render(e){if(ne(this,r$,"m",r2).call(this,e),this.params.bypass||!ne(this,rH,"f")||!ne(this,rX,"f"))return void e.draw({frag:na,uniforms:{src:e.src},target:e.target});let{axis:t,direction:i}=nf[this.params.direction],r=[ne(this,rQ,"f"),ne(this,r0,"f")],[s,o]=this.params.range,a=nc[this.params.key],[n,l]=e.dims.elementPixel,f=ne(this,rG,"f"),c=ne(this,rj,"f"),h=0!==this.params.angle&&null!==f&&null!==c,u=e.src,d=e.target,p=[1,0],m=[n,l];if(h){let t=-this.params.angle*Math.PI/180;p=[Math.cos(t),Math.sin(t)],m=[ne(this,rY,"f"),ne(this,rZ,"f")],e.draw({frag:nn,uniforms:{src:e.src,srcSize:[n,l],boxSize:m,rot:p},target:f}),u=f,d=c}if(h&&null!==f){var v;v=ne(this,rH,"f"),e.draw({frag:aL,uniforms:{src:f},target:v})}else aB(e,ne(this,rH,"f"));let g=+!!h,w=[n,l];e.draw({frag:ns,uniforms:{src:ne(this,rH,"f"),srcSize:r,threshold:s,thresholdHigh:o,keyMode:a,direction:i,axis:t,masked:g,boxSize:m,imgSize:w,rot:p},target:ne(this,rX,"f")}),e.draw({frag:no,uniforms:{src:ne(this,rH,"f"),srcHi:u,rankTex:ne(this,rX,"f"),lowSize:r,threshold:s,thresholdHigh:o,keyMode:a,axis:t,masked:g,boxSize:m,imgSize:w,rot:p},target:d}),h&&e.draw({frag:nl,uniforms:{src:c,srcSize:[n,l],boxSize:m,rot:p},target:e.target})}dispose(){ne(this,r$,"m",r1).call(this),nt(this,rq,0,"f"),nt(this,rJ,0,"f"),nt(this,rK,0,"f"),nt(this,rY,0,"f"),nt(this,rZ,0,"f"),nt(this,rQ,0,"f"),nt(this,r0,0,"f")}}rH=new WeakMap,rX=new WeakMap,rG=new WeakMap,rj=new WeakMap,rq=new WeakMap,rJ=new WeakMap,rK=new WeakMap,rY=new WeakMap,rZ=new WeakMap,rQ=new WeakMap,r0=new WeakMap,r$=new WeakSet,r1=function(){ne(this,rH,"f")?.dispose(),ne(this,rX,"f")?.dispose(),ne(this,rG,"f")?.dispose(),ne(this,rj,"f")?.dispose(),nt(this,rH,null,"f"),nt(this,rX,null,"f"),nt(this,rG,null,"f"),nt(this,rj,null,"f")},r2=function(e){let[t,i]=e.dims.elementPixel,{axis:r}=nf[this.params.direction],{angle:s}=this.params,o=this.params.sortRes,a=t,n=i;if(0!==s){let e=s*Math.PI/180,r=Math.abs(Math.cos(e)),o=Math.abs(Math.sin(e));a=Math.ceil(t*r+i*o),n=Math.ceil(t*o+i*r)}let l=0===r?Math.max(1,Math.round(o*a/t)):Math.max(1,Math.round(o*n/i)),f=0===r?l:a,c=0===r?n:l;(ne(this,rq,"f")!==t||ne(this,rJ,"f")!==i||ne(this,rK,"f")!==s||ne(this,rQ,"f")!==f||ne(this,r0,"f")!==c)&&(ne(this,r$,"m",r1).call(this),nt(this,rq,t,"f"),nt(this,rJ,i,"f"),nt(this,rK,s,"f"),nt(this,rY,a,"f"),nt(this,rZ,n,"f"),nt(this,rQ,f,"f"),nt(this,r0,c,"f"),nt(this,rH,e.createRenderTarget({size:[f,c],filter:"nearest"}),"f"),nt(this,rX,e.createRenderTarget({size:[f,c],filter:"nearest",float:!0}),"f"),0!==s&&(nt(this,rG,e.createRenderTarget({size:[a,n]}),"f"),nt(this,rj,e.createRenderTarget({size:[a,n]}),"f")))};var nd=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},np=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let nm=ss({name:"datamosh",frag:`
vec4 transition(vec2 uv, float t) {
  return reverse > 0.5 ? readFrom(uv) : readTo(uv);
}
`});class nv extends aQ{constructor(e){super({dup:0,blockSize:e}),r3.set(this,void 0),r4.set(this,0),r5.set(this,1),nd(this,r3,e,"f")}start(e){this.params.blockSize=np(this,r3,"f"),this.params.chromaGain=1.5,this.params.useResidual=!1,this.params.healRate=0,nd(this,r4,0,"f"),nd(this,r5,Math.max(.75*e.duration,.001),"f"),this.enable()}update(e){var t;let{x:i}=e.progress,r=Math.min(Math.max((i-.25)/.75,0),1);this.params.useResidual=nd(this,r4,(t=np(this,r4,"f"),++t),"f")>2,this.params.chromaGain=1.5+-.5*r,this.params.healRate=i<.25?0:1-.01**(e.deltaTime/np(this,r5,"f"))}end(){this.disable()}}function ng(e={}){let t=e.blockSize,i=void 0!==t&&Number.isFinite(t)&&t>=2?Math.round(t):32;return{name:"datamosh",create:()=>[nm.create(),new nv(i)]}}r3=new WeakMap,r4=new WeakMap,r5=new WeakMap;let nw=ng();e.s(["S",0,ng,"O",0,nw],28317);let nx=ss({name:"distort_fade",frag:`
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

${az}
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
`});e.s(["f",0,nx],96210);let nb=/vec4\s+transition\s*\(\s*vec2\s+(\w+)\s*\)/,ny=new Set(["from","src","srcRectUv","t","reverse","resolution","time","uvContent","outColor","progress","ratio"]),nT=e=>ny.has(e)?`glParam_${e}`:e;e.s(["f",0,function(e,t={}){let i=e.paramsTypes??{},r=[...e.textures??[],...Object.keys(i).filter(e=>"sampler2D"===i[e])];if(r.length>0)throw Error(`[VFX-JS] gl-transition "${e.name}" needs textures (${r.join(", ")}), which are not supported.`);if(!nb.test(e.glsl))throw Error(`[VFX-JS] gl-transition "${e.name}" has no \`vec4 transition(vec2 uv)\`.`);for(let r of Object.keys(t))r in i||console.warn(`[VFX-JS] gl-transition "${e.name}" has no param "${r}".`);let s=e.glsl.replace(nb,"vec4 glTransition_(vec2 $1)");for(let e of Object.keys(i)){let t=nT(e);t!==e&&(s=s.replace(RegExp(`(^|[^.\\w])${e}\\b`,"g"),`$1${t}`))}let o={},a={...e.defaultParams,...t};for(let e of Object.keys(a))o[nT(e)]=a[e];return ss({name:`gl:${e.name}`,frag:`
float progress;
float ratio;
vec4 getFromColor(vec2 p) { return readFrom(clamp(p, 0.0, 1.0)); }
vec4 getToColor(vec2 p) { return readTo(clamp(p, 0.0, 1.0)); }

${s}

vec4 transition(vec2 uv, float t) {
  // getFromColor clamps, so a container overflow would stretch the edges.
  if (!inRange(uv)) return vec4(0.0);
  progress = t;
  ratio = resolution.x / resolution.y;
  return glTransition_(uv);
}
`,uniforms:o,ease:"linear"})}],66864);let nE=ss({name:"glitch",frag:`
float gnoise(float y) {
  return sin(y * 7.0) * sin(y * 17.0) * sin(y * 59.0);
}
vec2 gnoise(vec2 uv) {
  return vec2(gnoise(uv.x), gnoise(uv.y + 100.0));
}

${aP}
vec4 transition(vec2 uv, float t) {
  // A container overflow must not show wrapped content outside the element.
  if (!inRange(uv)) return vec4(0.0);
  float amount = sin(floor(t * 10.0 + 0.5) / 10.0 * 3.141593);
  vec2 uvr = uv, uvg = uv, uvb = uv;
  if (gnoise(t * 3.0 + 10.0) > 0.0) {
    uvr += gnoise(vec2(floor(t * 21.0), floor(t * 31.0))) * vec2(1.0, 0.1) * amount;
    uvg += gnoise(vec2(floor(t * 22.0), floor(t * 32.0))) * vec2(1.0, 0.1) * amount;
    uvb += gnoise(vec2(floor(t * 23.0), floor(t * 33.0))) * vec2(1.0, 0.1) * amount;
  }
  // Wrap so shifted areas show content rather than holes.
  uvr = fract(uvr);
  uvg = fract(uvg);
  uvb = fract(uvb);

  vec4 c1 = splitRead(uvr, uvg, uvb, false);
  vec4 c2 = splitRead(uvr, uvg, uvb, true);
  return mix(c1, c2, step(0.5, t));
}
`});e.s(["f",0,nE],84177);let nM=ss({name:"glitch_slide",frag:`
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
`});e.s(["f",0,nM],166);var nS=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},nk=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class nR extends a9{constructor(e,t){super({quality:t,bypass:!0,resolutionScale:.25}),r6.set(this,void 0),r8.set(this,void 0),nS(this,r6,e,"f"),nS(this,r8,t,"f")}start(){this.params.bypass=!0,this.params.speed=30,this.params.quality=nk(this,r8,"f")}render(e){let{x:t}=e.progress;this.params.bypass=!(t>.12&&t<.88);let i=Math.sin(Math.min(Math.max(t,0),1)*Math.PI);this.params.iterations=Math.max(1,Math.round(nk(this,r6,"f")*i)),super.render(e)}end(){this.params.bypass=!0}}function nC(e={}){let t=Math.max(1,Math.round(e.iterations??4)),i=Math.min(Math.max(e.quality??.1,0),1);return{name:"jpeg_glitch",ease:"linear",create:()=>[a_.create(),new nR(t,i)]}}r6=new WeakMap,r8=new WeakMap;let nW=nC();function nA(e={}){let t=(e.strength??1).toFixed(3),i=Math.max(0,e.dispersion??.6).toFixed(3),r=Math.max(0,e.zoom??3).toFixed(3);return ss({name:"lens_distortion",frag:`
const float STRENGTH = ${t};
const float DISPERSION = ${i};
const float TAPS = 12.0;
// Width of the growing warp's edge.
const float SOFT = 0.5;
// The old content zooms from 1 to 1 + ZOOM; the new one from 1 + ZOOM back to 1.
const float ZOOM = ${r};

${aF}
${az}
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
  float zoomFrom = 1.0 + ZOOM * t;
  float zoomTo = 1.0 + ZOOM * (1.0 - t);

  vec3 rgb = vec3(0.0);
  vec3 total = vec3(0.0);
  float alpha = 0.0;
  for (float n = 0.0; n < TAPS; n += 1.0) {
    float k = (n + jitter) / TAPS;
    float s = amount * STRENGTH * (1.0 + DISPERSION * (k - 0.5) * 2.0);
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
`})}e.s(["i",0,nC,"G",0,nW],57888);let nP=nA();e.s(["s",0,nA,"Q",0,nP],35668);let nF={right:"pi.x / (scale * 2.0) + 0.5",left:"0.5 - pi.x / (scale * 2.0)",up:"pi.y / (scale * aspect() * 2.0) + 0.5",down:"0.5 - pi.y / (scale * aspect() * 2.0)",center:"length(pi / scale) / length(vec2(1.0, aspect()))"};function nz(e={}){let t=nF[e.direction??"right"],i=e.blackout??!0?"1.0":"0.0";return ss({name:"pixel_scan",frag:`
const float BLACKOUT = ${i};
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

// Where the front reaches the cell, in [0, 1].
float cellPos(vec2 pi, float scale) {
  return ${t};
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
  float gap = BLACKOUT * (out_ - in_);
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
`})}let n_=nz();e.s(["d",0,nz,"w",0,n_],97394);let nI=ss({name:"pixel_stretch",frag:`
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
`});e.s(["f",0,nI],81651);var nU=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},nL=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let nB={up:"down",down:"up",left:"right",right:"left"};class nO extends nu{constructor(e){super({range:[1,1]}),r9.set(this,void 0),r7.set(this,!1),nU(this,r9,e,"f")}start(e){nU(this,r7,e.reverse,"f"),this.params.direction=e.reverse?nB[nL(this,r9,"f")]:nL(this,r9,"f"),this.params.range[0]=1}update(e){let{t}=e.progress,i=nL(this,r7,"f")?1-t:t;this.params.direction=i<.5?nL(this,r9,"f"):nB[nL(this,r9,"f")],this.params.range[0]=Math.abs(1-2*t)}end(){this.params.range[0]=1}}function nV(e={}){let t=e.direction??"up";return{name:"pixelsort",create:()=>[a_.create(),new nO(t)]}}r9=new WeakMap,r7=new WeakMap;let nD=nV();e.s(["q",0,nV,"b",0,nD],18013);let nN=ss({name:"slit_scan",frag:`
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
`});e.s(["f",0,nN],26873);let n$={left:[-1,0],right:[1,0],up:[0,1],down:[0,-1]};function nH(e={}){let[t,i]=n$[e.direction??"left"];return ss({name:"swipe",frag:`
const vec2 move = vec2(${t.toFixed(1)}, ${i.toFixed(1)});
const float STRETCH = 0.6;
const float BLUR = 0.2;
const float TAPS = 16.0;

${aF}
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
`})}let nX=nH();e.s(["c",0,nH,"A",0,nX],76359);let nG={center:"length(center) / length(extent)",left:"(extent.x - center.x) / (extent.x * 2.0)",right:"(center.x + extent.x) / (extent.x * 2.0)",up:"(center.y + extent.y) / (extent.y * 2.0)",down:"(extent.y - center.y) / (extent.y * 2.0)"},nj={hex:`
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
`};function nq(e={}){let t=nG[e.direction??"center"],i=nj[e.shape??"hex"],r=Math.max(1,Math.round(e.count??12)).toFixed(1),s=Math.min(Math.max(e.shadow??.5,0),1).toFixed(3);return ss({name:"tile",frag:`
const float COUNT = ${r};
const float SPREAD = 0.6;
const float SHADOW = ${s};
// Shadow offset and blur at full lift, in tiles.
const vec2 SHADOW_OFFSET = vec2(0.05, -0.08);
const float SHADOW_BLUR = 0.12;
${i}
vec4 transition(vec2 uv, float t) {
  // A container overflow must not show tiles outside the element.
  if (!inRange(uv)) return vec4(0.0);
  // Grid in tile units, centered on the element.
  float tilePx = max(resolution.x, resolution.y) / COUNT;
  vec2 extent = resolution * 0.5 / tilePx;
  vec4 cell = cellOf((uv - 0.5) * resolution / tilePx);
  vec2 local = cell.xy;
  vec2 center = cell.zw;

  float d = clamp(${t}, 0.0, 1.0);
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
  float shade = SHADOW * smoothstep(0.0, 0.2, lift) * (1.0 - smoothstep(-blur, blur, shadowEdge));
  to = vec4(to.rgb * (1.0 - shade), max(to.a, shade));
  if (inside <= 0.0) return to;

  vec4 from = readFrom((center + local / scale) * tilePx / resolution + 0.5);
  from *= inside;
  return from + to * (1.0 - from.a);
}
`})}let nJ=nq();e.s(["K",0,nq,"z",0,nJ],27202);let nK=ss({name:"zoom",overflow:!0,frag:`
vec4 transition(vec2 uv, float t) {
  vec2 uv1 = (uv - 0.5) * (1.0 - t) + 0.5;
  vec2 uv2 = (uv - 0.5) / (t * 0.999 + 0.001) + 0.5;
  // Tile the new content only inside the element, so the overflow shows just the old one.
  vec4 to = inRange(uv) ? readTo(fract(uv2)) : vec4(0.0);
  return mix(readFrom(uv1), to, t);
}
`});e.s(["f",0,nK],99050);let nY=ss({name:"zoom_blur",overflow:!0,frag:`
${aP}
${aF}
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
`});e.s(["f",0,nY],1656),e.s([],10303)}])})();