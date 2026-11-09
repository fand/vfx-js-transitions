(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,83790,86679,6010,28263,36951,1633,e=>{e.i(90422),e.i(18289),e.i(7150);var t=e.i(16597),r=e.i(81290),i=e.i(60416),s=e.i(3066);e.s([],83790),e.i(61069),e.s([],86679),e.i(61388),e.i(99984),e.s([],6010),e.s([],28263),e.s(["f",0,function(e){return t.forwardRef(function(o,a){let n=(0,s.f)(),[l,f]=(0,t.useState)(null),{vfxProps:h,domProps:c}=(0,i.r)(o);return(0,r.Y)(l,n,h),(0,t.useEffect)(()=>{if(!n||!l)return;let e=new MutationObserver(()=>n.update(l));return e.observe(l,{characterData:!0,attributes:!0,subtree:!0}),()=>e.disconnect()},[l,n]),t.createElement(e,{...c,ref:e=>{f(e),a instanceof Function?a(e):a&&(a.current=e)}})})}],36951),e.s([],1633)},52729,e=>{e.i(83790),e.i(99984),e.i(86679),e.i(6010),e.i(28263);var t=e.i(36951);e.i(1633),e.i(58786),e.i(59443),e.i(24979),e.i(41570),(0,t.f)("span"),(0,t.f)("div"),(0,t.f)("p"),e.s([],52729)},81290,60416,e=>{var t=e.i(16597);let r=["shader","release","uniforms","overlay","intersection","overflow","wrap","zIndex","backbuffer","autoCrop","glslVersion","effect"];e.s(["B",0,r,"r",0,function(e){let t={},i={};for(let s of Object.keys(e))r.includes(s)?t[s]=e[s]:i[s]=e[s];return{vfxProps:t,domProps:i}}],60416);let i=r.filter(e=>"effect"!==e);function s(){let e=Promise.resolve();return{enqueue(t){let r=e.then(t,t);return e=r.then(()=>{},()=>{}),r}}}async function o(e,t,r,s,o){let a=function(e,t){for(let r of i)if(e[r]!==t[r])return!1;return!0}(r,s);if(!a||r.effect!==s.effect){if(a&&void 0!==s.effect)return void await e.updateEffects(t,s.effect);e.remove(t),await o(t,s)}}e.s(["P",0,o,"$",0,s,"Y",0,function(e,r,i){let a=(0,t.useRef)(i);a.current=i;let n=(0,t.useRef)(null),l=(0,t.useRef)(null);(0,t.useEffect)(()=>{if(!r||!e)return;let t=l.current;null===t&&(l.current=t=s());let i=!1;return t.enqueue(async()=>{if(i)return;let t=a.current;try{await r.add(e,t),n.current=t}catch(e){console.error("[@vfx-js/react] add failed:",e)}}),()=>{i=!0,t.enqueue(()=>{r.remove(e),n.current=null})}},[e,r]),(0,t.useEffect)(()=>{if(!r||!e)return;let t=l.current;null===t&&(l.current=t=s()),t.enqueue(async()=>{let t=n.current;if(t&&t!==i)try{await o(r,e,t,i,(e,t)=>r.add(e,t)),n.current=i}catch(e){console.error("[@vfx-js/react] applyDelta failed:",e)}})},[r,e,i])}],81290)},58786,59443,e=>{var t=e.i(16597),r=e.i(76137),i=e.i(36180);e.s(["f",0,function(e){let s=(0,t.useContext)(i.f),o=(0,t.useRef)(e);(0,t.useLayoutEffect)(()=>s?s.register(o.current):void(0,r.R)("transition-in","[@vfx-js/react] useTransitionIn does nothing outside <VFXTransition>."),[s])}],58786),e.s([],59443)},41570,22305,e=>{var t=e.i(61069),r=e.i(16597),i=e.i(3066),s=e.i(54057),o=e.i(36180);let a=null;function n(){let e=null!==a&&Date.now()-a.at<=1e4?a:null;return a=null,e?e.spec:null}function l(e){a={spec:e,at:Date.now()}}e.s(["n",0,l,"i",0,n,"e",0,function(e){return t=>{(function(e){if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return!1;let t=e.currentTarget?.getAttribute?.("target");return!t||"_self"===t})(t)&&l(e)}}],22305);let f={display:"contents"},h={height:"100dvh",overflow:"hidden"};e.s(["f",0,function(e){let{pageKey:a,children:l,className:c,style:u,fullscreen:d=!0,...p}=e,m=(0,i.f)(),v=(0,s.f)(p),g=(0,r.useRef)(null),w=(0,r.useRef)(null),[x,y]=(0,r.useState)({key:a,node:l}),b=(0,r.useRef)(a),T=(0,r.useRef)([]),E=(0,r.useRef)(null),[S]=(0,r.useState)(()=>({register:e=>(E.current=e,()=>{E.current===e&&(E.current=null)})}));(0,r.useEffect)(()=>{let e=g.current;if(!m||!e)return;let t=m.addTransition(e,v);return w.current=t,()=>{t.destroy(),w.current=null}},[m,v]),(0,r.useLayoutEffect)(()=>{let e=T.current;for(let t of(T.current=[],e))t()},[x]),(0,r.useEffect)(()=>{if(a===b.current)return;b.current=a;let e={key:a,node:l},t=w.current;t&&void 0!==a?(E.current=null,t.run(()=>new Promise(t=>{b.current!==a?t():(T.current.push(t),(0,r.startTransition)(()=>y(e)))}),()=>n()??E.current??{}).catch(e=>{console.error("[@vfx-js/react] VFXTransition run failed:",e)})):(0,r.startTransition)(()=>y(e))});let M=(0,r.useRef)(x);M.current.key!==x.key&&(M.current=x),(void 0===a||a===x.key)&&(M.current={key:x.key,node:l});let k=M.current;return(0,t.jsx)("div",{style:f,children:(0,t.jsx)("div",{ref:g,className:c,style:d?{...h,...u}:u,children:(0,t.jsx)(o.f.Provider,{value:S,children:(0,t.jsx)(r.Fragment,{children:k.node},k.key)})})})}],41570)},54057,e=>{var t=e.i(16597);e.s(["f",0,function(e){let r=(0,t.useRef)({}).current;for(let t of Object.keys(r))t in e||delete r[t];return Object.assign(r,e),r}])},36180,e=>{let t=(0,e.i(16597).createContext)(null);e.s(["f",0,t])},24979,e=>{var t=e.i(16597),r=e.i(3066),i=e.i(54057);e.s(["f",0,function(e={}){let s=(0,r.f)(),o=(0,i.f)(e),[a,n]=(0,t.useState)(null),l=(0,t.useRef)(null),[f,h]=(0,t.useTransition)(),c=(0,t.useRef)(!1),u=(0,t.useRef)([]);(0,t.useEffect)(()=>{if(!s||!a)return;let e=s.addTransition(a,o);return l.current=e,()=>{e.destroy(),l.current=null}},[s,a,o]),(0,t.useLayoutEffect)(()=>{if(f){c.current=!0;return}if(c.current){c.current=!1;let e=u.current;for(let t of(u.current=[],e))t()}},[f]);let d=(0,t.useCallback)(e=>new Promise(t=>{u.current.push(t),c.current=!1,h(e),requestAnimationFrame(()=>{c.current||t()})}),[]);return{ref:n,run:(0,t.useCallback)(async(e,t)=>{let r=l.current;r?await r.run(()=>d(e),t):await d(e)},[d])}}])},3066,99984,76137,e=>{var t=e.i(16597);let r=(0,t.createContext)(null),i=(0,t.createContext)(!1);e.s(["i",0,r,"V",0,i],99984),e.i(90422);var s=e.i(61388);let o=["pixelRatio","zIndex","postEffect","autoplay"],a=null,n={},l=0,f=!1,h=!1,c=[],u=new Set;function d(){for(let e of u)e()}function p(){a&&(a.stop(),a.destroy(),a=null)}function m(){var e;if(h=!1,0===l||f)return;let t=c[c.length-1]?.config??{};a&&(e=n,o.every(r=>t[r]===e[r]))||(p(),n=t,f=null===(a=s.f.init({...t})),d())}function v(){l++,h||(h=!0,queueMicrotask(m))}function g(){--l>0||requestAnimationFrame(()=>{l>0||(p(),d())})}function w(e){return u.add(e),()=>u.delete(e)}function x(){return a}let y=new Set;e.s(["Y",0,v,"S",0,x,"z",0,g,"i",0,w,"R",0,function(e,t){y.has(e)||(y.add(e),console.warn(t))}],76137);let b=()=>null,T=()=>()=>{};e.s(["f",0,function({acquire:e=!0}={}){let s=(0,t.useContext)(i),o=(0,t.useContext)(r),a=(0,t.useSyncExternalStore)(s?T:w,x,b);return(0,t.useEffect)(()=>{if(!s&&e)return v(),g},[s,e]),s?o:a}],3066)},90422,28113,63363,18289,7150,61388,75682,28317,96210,66864,84177,166,57888,35668,97394,81651,18013,26873,76359,27202,99050,1656,10303,e=>{let t,r=`#version 300 es
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
`,i=`
void main() {
  outColor = transition(uvContent, reverse > 0.5 ? 1.0 - t : t);
}
`,s=r.split("\n").length;var o,a,n,l,f,h,c,u,d,p,m,v,g,w,x,y,b,T,E,S,M,k,R,C,P,W,A,F,z,_,B,I,U,L,V,O,D,N,$,H,X,j,G,q,J,K,Y,Q,Z,ee,et,er,ei,es,eo,ea,en,el,ef,eh,ec,eu,ed,ep,em,ev,eg,ew,ex,ey,eb,eT,eE,eS,eM,ek,eR,eC,eP,eW,eA,eF,ez,e_,eB,eI,eU,eL,eV,eO,eD,eN,e$,eH,eX,ej,eG,eq,eJ,eK,eY,eQ,eZ,e0,e1,e2,e4,e3,e5,e6,e8,e9,e7,te,tt,tr,ti,ts,to,ta,tn,tl,tf,th,tc,tu,td,tp,tm,tv,tg,tw,tx,ty,tb,tT,tE,tS,tM,tk,tR,tC,tP,tW,tA,tF,tz,t_,tB,tI,tU,tL,tV,tO,tD,tN,t$,tH,tX,tj,tG,tq,tJ,tK,tY,tQ,tZ,t0,t1,t2,t4,t3,t5,t6,t8,t9,t7,re,rt,rr,ri,rs,ro,ra,rn,rl,rf,rh,rc,ru,rd,rp,rm,rv,rg,rw,rx,ry,rb,rT,rE,rS,rM,rk,rR,rC,rP,rW,rA,rF,rz,r_,rB,rI,rU,rL,rV,rO,rD,rN,r$,rH,rX,rj,rG,rq,rJ,rK,rY,rQ,rZ,r0,r1,r2,r4,r3,r5,r6,r8,r9,r7,ie,it,ir,ii,is,io,ia,il,ih,ic,iu,id,ip,im,iv,ig,iw,ix,iy,ib,iT,iE,iS,iM,ik,iR,iC,iP,iW,iA,iF,iz,i_,iB,iI,iU,iL,iV,iO,iD,iN,i$,iH,iX,ij,iG,iq,iJ,iK,iY,iQ,iZ,i0,i1,i2,i4,i3,i5,i6,i8,i9,i7,se=function(e,t,r,i,s){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,r):s?s.value=r:t.set(e,r),r},st=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};let sr=new Map,si=new WeakMap;class ss{constructor(e={}){o.set(this,null),this.params=e}uniforms(e){return{}}start(e){se(this,o,e,"f")}end(){se(this,o,null,"f")}outputRect(e){let t=st(this,o,"f")?.overflow??this.overflow;if(void 0===t||function(e,t){let[r,i,s,o]=e,[a,n,l,f]=t;return r<=a&&i<=n&&r+s>=a+l&&i+o>=n+f}(e.contentRect,e.canvasRect))return;if(!0===t)return e.canvasRect;let r=t*e.pixelRatio,[i,s,a,n]=e.contentRect;return[i-r,s-r,a+2*r,n+2*r]}render(e){var t,o;let a;if(e.holding)return void e.blit(e.src);let n=function(e){let t=sr.get(e);void 0===t&&(t=`${r}
${e}
${i}`,sr.set(e,t));return t}(this.frag),l=(t=e.gl,(a=si.get(t))||(a=new Set,si.set(t,a)),a);if(l.has(n)){e.cut(),e.blit(e.src);return}try{e.draw({frag:n,uniforms:{...this.uniforms(e),from:e.from,src:e.src,t:e.progress.t,reverse:+!!e.reverse,resolution:[e.dims.elementPixel[0],e.dims.elementPixel[1]],time:e.time},target:e.target})}catch(r){let t;l.add(n),o=this.name,(t=function(e){let t=e instanceof Error?e.message:String(e);if(!/compile failed|link failed/i.test(t))return null;let r=[];for(let e of t.matchAll(/ERROR:\s*\d+:(\d+):\s*(.*)/g)){let t=Number(e[1])-s;r.push(t>=1?`line ${t}: ${e[2]}`:e[2])}return r.length>0?r:[t.split("\n")[0]]}(r))?(console.error(`[VFX-JS] transition "${o}" failed to compile; cutting to the new content.
  ${t.join("\n  ")}`),console.debug(r)):console.error(`[VFX-JS] transition "${o}" failed; cutting to the new content.`,r),e.cut(),e.blit(e.src)}}}o=new WeakMap,e.s(["f",0,ss],28113);class so extends ss{constructor(){super(...arguments),this.name="crossfade",this.frag=`
vec4 transition(vec2 uv, float t) {
  return mix(readFrom(uv), readTo(uv), t);
}
`}}function sa(e){return"CANVAS"===e.tagName&&(e.hasAttribute("layoutsubtree")||"drawable"===e.getAttribute("content"))}function sn(e,t){e.setAttribute("layoutsubtree",""),e.setAttribute("content","drawable"),t?.setAttribute("drawable","")}function sl(e){return e.currentSrc||e.src}function sf(e,t){let r=e.getBoundingClientRect(),i=getComputedStyle(e);t.className=e.className,t.style.cssText=e.style.cssText,t.style.width=`${r.width}px`,t.style.height=`${r.height}px`,t.style.display="inline"===i.display?"inline-block":i.display,t.style.boxSizing="border-box"}async function sh(e){let t=await fetch(e),r=await t.blob();return URL.createObjectURL(r)}async function sc(e){let t=Array.from(e.querySelectorAll("img")).filter(e=>e.complete&&e.naturalWidth>0&&function(e){let t=sl(e);if(!t||t.startsWith("data:"))return!1;try{return new URL(t,location.href).origin!==location.origin}catch{return!1}}(e));if(0===t.length)return()=>{};let r=new Map,i=[];return await Promise.all(t.map(async e=>{try{let t=sl(e),s=await sh(t);r.set(e,t),i.push(s),await new Promise(t=>{e.addEventListener("load",()=>t(),{once:!0}),e.src=s})}catch{}})),()=>{for(let[e,t]of r)e.src=t;for(let e of i)URL.revokeObjectURL(e)}}e.s(["f",0,so],63363);let su=["margin-top","margin-right","margin-bottom","margin-left"],sd=new Set(["IMG","VIDEO","CANVAS","IFRAME","EMBED","OBJECT","INPUT","TEXTAREA","SELECT"]),sp=["position","top","right","bottom","left","float","flex","flex-grow","flex-shrink","flex-basis","align-self","justify-self","place-self","order","grid-column","grid-column-start","grid-column-end","grid-row","grid-row-start","grid-row-end","grid-area"],sm=new WeakMap,sv=new WeakMap,sg=new WeakMap,sw=new WeakMap,sx=new WeakMap,sy=new WeakMap,sb=new WeakMap,sT=new WeakMap,sE=new WeakMap,sS=new WeakSet,sM=new WeakMap,sk=new WeakMap,sR=new WeakSet,sC=new WeakSet;function sP(e){if(e)for(let t of[...e])t()}function sW(e,t,r){if("function"==typeof e.moveBefore)try{e.moveBefore(t,r);return}catch{}e.insertBefore(t,r)}function sA(e,t=300){let r=sk.get(e);if(!r)return;let i=new Promise(e=>{let i=t=>{clearTimeout(o),r.delete(s),e(t)},s=()=>i(!0),o=setTimeout(()=>i(!1),t);r.add(s)});return e.requestPaint(),i}function sF(e){if(sR.has(e))return()=>{};sR.add(e);let{width:t,height:r,overflow:i}=e.style,s=e.getBoundingClientRect();return e.style.setProperty("width",`${s.width}px`),e.style.setProperty("height",`${s.height}px`),e.style.setProperty("overflow","hidden"),()=>{if(!sR.has(e))return;sR.delete(e),e.style.width=t,e.style.height=r,e.style.overflow=i;let s=e.firstElementChild;if(s&&!sC.has(e)){let t=Math.round(s.getBoundingClientRect().height);e.style.setProperty("height",`${t}px`)}}}function sz(e){sM.get(e)?.(),sM.delete(e)}function s_(e,t=!1){requestAnimationFrame(()=>{t||e.getContext("2d")?.clearRect(0,0,e.width,e.height),sz(e)})}async function sB(e,t){sn(e,e.firstElementChild);let r=e.getContext("2d");if(!r)throw Error("Failed to get 2d context from layoutsubtree canvas");let{onCapture:i,maxSize:s}=t,o=new Set;sk.set(e,o);let a=null,n=null,l=new Promise(e=>{n=e}),f=null,h=t=>{if(t){if(t===f)return;f=t}let l=e.firstElementChild;if(!l||0===e.width||0===e.height||0===l.getClientRects().length)return;l.hasAttribute("drawable")||l.setAttribute("drawable",""),r.clearRect(0,0,e.width,e.height),r.drawElementImage(l,0,0),function(e,t){let r=t.querySelectorAll("canvas");if(0===r.length)return;let i=t.getBoundingClientRect();if(i.width<=0||i.height<=0)return;let s=e.canvas.width/i.width,o=e.canvas.height/i.height;for(let t of r){if(0===t.width||0===t.height||!("function"==typeof t.checkVisibility?t.checkVisibility({visibilityProperty:!0,opacityProperty:!0}):"hidden"!==getComputedStyle(t).visibility))continue;let r=function(e,t,r,i){if(t.width<=0||t.height<=0)return null;let s=t.left-e.left,o=t.top-e.top;return s+t.width<=0||o+t.height<=0||s>=e.width||o>=e.height?null:[s*r,o*i,t.width*r,t.height*i]}(i,function(e){let t=e.getBoundingClientRect(),r=getComputedStyle(e),i=Number.parseFloat(r.paddingLeft)||0,s=Number.parseFloat(r.paddingRight)||0,o=Number.parseFloat(r.paddingTop)||0,a=Number.parseFloat(r.paddingBottom)||0,n=e.clientWidth>0?t.width/e.offsetWidth:1,l=e.clientHeight>0?t.height/e.offsetHeight:1;return{left:t.left+(e.clientLeft+i)*n,top:t.top+(e.clientTop+o)*l,width:Math.max(0,e.clientWidth-i-s)*n,height:Math.max(0,e.clientHeight-o-a)*l}}(t),s,o);if(r)try{e.drawImage(t,...r)}catch{}}}(r,l);let h=e.width,c=e.height;if(s&&(h>s||c>s)){let e=Math.min(s/h,s/c);h=Math.floor(h*e),c=Math.floor(c*e)}a&&a.width===h&&a.height===c||(a=new OffscreenCanvas(h,c));let u=a.getContext("2d");if(u){if(u.clearRect(0,0,h,c),u.drawImage(e,0,0,h,c),n){n(a),n=null,sP(o);return}r.clearRect(0,0,e.width,e.height),i(a),sP(o)}};e.onpaint=h,e.addEventListener("paint",h),sv.set(e,h);let c=new ResizeObserver(t=>{for(let r of t){let t=r.devicePixelContentBoxSize?.[0];if(t)e.width=t.inlineSize,e.height=t.blockSize;else{let t=r.borderBoxSize?.[0];if(t){let r=window.devicePixelRatio;e.width=Math.round(t.inlineSize*r),e.height=Math.round(t.blockSize*r)}}}e.requestPaint()});c.observe(e,{box:"device-pixel-content-box"}),sm.set(e,c);let u=e.firstElementChild;if(u){let t=new ResizeObserver(t=>{if(sR.has(e)||sC.has(e))return;let r=t[0].borderBoxSize?.[0];if(!r)return;let i=`${Math.round(r.blockSize)}px`;i!==e.style.height&&e.style.setProperty("height",i)});t.observe(u),sg.set(e,t)}return l}function sI(e){e.onpaint=null,sP(sk.get(e)),sk.delete(e);let t=sv.get(e);t&&(e.removeEventListener("paint",t),sv.delete(e));let r=sm.get(e);r&&(r.disconnect(),sm.delete(e));let i=sg.get(e);i&&(i.disconnect(),sg.delete(e))}async function sU(e,t){let r=e.getBoundingClientRect(),i=function(e){let t={width:null,height:null};if("function"!=typeof e.computedStyleMap||sd.has(e.tagName))return t;let r=e.computedStyleMap(),i=e=>r.get(e)?.toString()??"auto",s=i("position");if("fixed"!==s&&"absolute"!==s)return t;let o=(t,r,s)=>{let o=i(r),a=i(s);if("auto"!==i(t)||"auto"===o||"auto"===a)return null;let n=[`margin-${r}`,`margin-${s}`].map(r=>{let s=i(r);return"height"===t&&s.includes("%")?getComputedStyle(e).getPropertyValue(r):s}).filter(e=>"auto"!==e);return`calc(${["100%",o,a,...n].join(" - ")})`};return{width:o("width","left","right"),height:o("height","top","bottom")}}(e),s=document.createElement("canvas");e.hasAttribute("drawable")||sS.add(e),sn(s,e),s.className=e.className;let o=e.getAttribute("style");o&&s.setAttribute("style",o),s.style.setProperty("padding","0"),s.style.setProperty("border","none"),s.style.setProperty("box-sizing","content-box"),s.style.setProperty("background","transparent");let a=getComputedStyle(e),n="inline"===a.display?"block":a.display;for(let e of(s.style.setProperty("display",n),su))s.style.setProperty(e,a.getPropertyValue(e));for(let e of sp)s.style.setProperty(e,a.getPropertyValue(e));if(i.width)s.style.setProperty("width",i.width);else e.style.width.endsWith("px")||sd.has(e.tagName)&&"function"==typeof e.computedStyleMap&&e.computedStyleMap().get("width")?.toString()==="auto"?s.style.setProperty("width",`${r.width}px`):s.style.setProperty("width","100%");i.height?(s.style.setProperty("height",i.height),sC.add(s)):s.style.height||s.style.setProperty("height",`${r.height}px`);let l=window.devicePixelRatio;s.width=Math.round(r.width*l),s.height=Math.round(r.height*l),t.stillCover&&sM.set(s,function(e,t){let r=e.getBoundingClientRect(),i=e.cloneNode(!0),s=[e,...e.querySelectorAll("*")],o=[i,...i.querySelectorAll("*")],a=[],n=[];for(let e=0;e<s.length&&e<o.length;e++){let t=s[e],r=o[e];(t.scrollTop||t.scrollLeft)&&a.push([r,t.scrollTop,t.scrollLeft]),t instanceof HTMLScriptElement?n.push([r,document.createComment("script")]):t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?n.push([r,function(e){let t=document.createElement("canvas"),r=e instanceof HTMLVideoElement?e.videoWidth:e.width,i=e instanceof HTMLVideoElement?e.videoHeight:e.height;t.width=Math.max(1,r),t.height=Math.max(1,i),sf(e,t);try{t.getContext("2d")?.drawImage(e,0,0,t.width,t.height)}catch{}return t}(t)]):t instanceof HTMLIFrameElement?n.push([r,function(e){let t=document.createElement("div");return sf(e,t),t}(t)]):t instanceof HTMLInputElement&&r instanceof HTMLInputElement?(r.value=t.value,r.checked=t.checked):t instanceof HTMLTextAreaElement&&r instanceof HTMLTextAreaElement?r.value=t.value:t instanceof HTMLSelectElement&&r instanceof HTMLSelectElement?r.selectedIndex=t.selectedIndex:t instanceof HTMLMediaElement&&r.removeAttribute("autoplay")}for(let[e,t]of n)e.replaceWith(t);i.setAttribute("aria-hidden","true");let l=i.style;l.setProperty("position","fixed"),l.setProperty("left",`${r.left}px`),l.setProperty("top",`${r.top}px`),l.setProperty("width",`${r.width}px`),l.setProperty("height",`${r.height}px`),l.setProperty("box-sizing","border-box"),l.setProperty("margin","0"),l.setProperty("pointer-events","none"),l.setProperty("z-index",t.toString()),e.parentNode?.insertBefore(i,e);let f=i.getBoundingClientRect();for(let[e,t,i]of((f.left!==r.left||f.top!==r.top)&&(l.setProperty("left",`${2*r.left-f.left}px`),l.setProperty("top",`${2*r.top-f.top}px`)),a))e.scrollTop=t,e.scrollLeft=i;return function(e,t){let r=e[0],i=t[0];if(!r||!i||"function"!=typeof r.getAnimations)return;let s=(e,t)=>{if(!("animationName"in e))return null;let r=e.effect,i=r?.target,s=i?t.get(i):void 0;return void 0===s?null:`${s}|${r?.pseudoElement??""}|${e.animationName}`},o=new Map(t.map((e,t)=>[e,t])),a=new Map;for(let e of i.getAnimations({subtree:!0})){let t=s(e,o);t&&a.set(t,e)}let n=new Map(e.map((e,t)=>[e,t]));for(let e of r.getAnimations({subtree:!0})){let t=s(e,n),r=t&&a.get(t);r&&(r.currentTime=e.currentTime,r.pause())}}(s,o),()=>{i.remove()}}(e,t.stillCover.zIndex)),sw.set(e,e.style.margin),sx.set(e,e.style.width),sy.set(e,e.style.boxSizing),e.parentNode?.insertBefore(s,e),getComputedStyle(s).display,sW(s,e,null),e.style.setProperty("margin","0"),e.style.setProperty("width","100%"),e.style.setProperty("box-sizing","border-box"),(i.width||i.height)&&(sb.set(e,e.style.position),e.style.setProperty("position","static")),i.height&&(sT.set(e,e.style.height),e.style.setProperty("height","100%"));let f=await sc(e);sE.set(s,f);let h=await sB(s,t);return{canvas:s,initialCapture:h}}function sL(e,t){sI(e),sz(e);let r=sE.get(e);r&&(r(),sE.delete(e));let i=e.parentNode;i&&sW(i,t,e),e.remove(),sS.has(t)&&(t.removeAttribute("drawable"),sS.delete(t));let s=sw.get(t);void 0!==s&&(t.style.margin=s,sw.delete(t));let o=sx.get(t);void 0!==o&&(t.style.width=o,sx.delete(t));let a=sy.get(t);void 0!==a&&(t.style.boxSizing=a,sy.delete(t));let n=sb.get(t);void 0!==n&&(t.style.position=n,sb.delete(t));let l=sT.get(t);void 0!==l&&(t.style.height=l,sT.delete(t))}function sV(){if(void 0!==t)return t;try{let e=document.createElement("canvas"),r=e.getContext("2d");t=null!==r&&"function"==typeof r.drawElementImage&&"function"==typeof e.requestPaint}catch{t=!1}return t}e.s(["i",0,sF,"n",0,s_,"a",0,sA,"S",0,sB,"F",0,sI,"Y",0,sL,"c",0,sU],18289),e.s(["f",0,sV],7150);var sO=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)},sD=function(e,t,r,i,s){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,r):s?s.value=r:t.set(e,r),r};let sN={t:0,x:0};class s${constructor(){a.add(this),this.enabled=!1,n.set(this,null),l.set(this,[0,0]),f.set(this,[]),h.set(this,!1),c.set(this,null),u.set(this,null),d.set(this,sN),p.set(this,null),m.set(this,null)}snapshot(){return sO(this,a,"m",v).call(this),sD(this,c,null,"f"),this.enabled=!0,new Promise(e=>sO(this,f,"f").push(e))}start(e){return sO(this,a,"m",v).call(this),sD(this,c,e,"f"),sD(this,m,e.onEnd??null,"f"),sD(this,u,null,"f"),sD(this,d,sN,"f"),sD(this,h,!1,"f"),this.enabled=!1,new Promise(e=>{sD(this,p,e,"f")})}cancel(){sO(this,a,"m",v).call(this),sD(this,c,null,"f"),sD(this,h,!1,"f"),this.enabled=!1,sO(this,a,"m",g).call(this)}get frame(){let e=sO(this,n,"f");return e&&(sO(this,h,"f")||sO(this,c,"f"))?{from:e,progress:sO(this,d,"f"),holding:null===sO(this,c,"f")}:null}cut(){sO(this,c,"f")&&(sD(this,c,null,"f"),sO(this,a,"m",v).call(this))}update(e){let t=sO(this,c,"f");if(!t)return;null===sO(this,u,"f")&&sD(this,u,e.time,"f");let r=(e.time-sO(this,u,"f"))/t.duration;if(r>=1){sD(this,c,null,"f"),sO(this,a,"m",v).call(this);return}let i=Math.max(r,0);sD(this,d,{t:function(e,t){return"function"==typeof e?e(t):"linear"===e?t:t*t*(3-2*t)}(t.ease,i),x:i},"f")}render(e){(sO(this,f,"f").length>0&&(e.blit(e.src,sO(this,a,"m",w).call(this,e)),sD(this,h,!0,"f"),sO(this,a,"m",g).call(this)),sO(this,n,"f")&&sO(this,h,"f"))?e.blit(sO(this,n,"f")):(this.enabled=!1,e.blit(e.src))}dispose(){sD(this,n,null,"f"),sD(this,l,[0,0],"f"),sO(this,a,"m",v).call(this),sO(this,a,"m",g).call(this)}}n=new WeakMap,l=new WeakMap,f=new WeakMap,h=new WeakMap,c=new WeakMap,u=new WeakMap,d=new WeakMap,p=new WeakMap,m=new WeakMap,a=new WeakSet,v=function(){let e=sO(this,m,"f");sD(this,m,null,"f"),e?.();let t=sO(this,p,"f");sD(this,p,null,"f"),t?.()},g=function(){let e=sO(this,f,"f");for(let t of(sD(this,f,[],"f"),e))t()},w=function(e){let[t,r]=e.dims.elementPixel;return sO(this,n,"f")&&sO(this,l,"f")[0]===t&&sO(this,l,"f")[1]===r||(sO(this,n,"f")?.dispose(),sD(this,n,e.createRenderTarget({size:[t,r]}),"f"),sD(this,l,[t,r],"f")),sO(this,n,"f")};class sH{constructor(e,t){x.add(this),y.set(this,void 0),b.set(this,null),this.effect=e,sD(this,y,t,"f")}get enabled(){return null!==sO(this,b,"f")&&"function"==typeof this.effect.render&&!1!==this.effect.enabled}start(e){sD(this,b,e,"f"),this.effect.start?.(e)}end(){null!==sO(this,b,"f")&&(sD(this,b,null,"f"),this.effect.end?.())}init(e){return this.effect.init?.(e)}update(e){let t=sO(this,y,"f").frame;if(!t||t.holding)return;let r=sO(this,x,"m",T).call(this,e);r&&this.effect.update?.(r)}render(e){let t=sO(this,x,"m",T).call(this,e);t&&this.effect.render?this.effect.render(t):e.blit(e.src)}outputRect(e){return sO(this,b,"f")?this.effect.outputRect?.(e):void 0}dispose(){this.effect.dispose?.()}}y=new WeakMap,b=new WeakMap,x=new WeakSet,T=function(e){let t=sO(this,y,"f").frame,r=sO(this,b,"f");return t&&r?{...e,from:t.from,progress:t.progress,holding:t.holding,reverse:r.reverse,run:r,cut:()=>sO(this,y,"f").cut()}:null};var sX=function(e,t,r,i,s){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,r):s?s.value=r:t.set(e,r),r},sj=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};function sG(e,t){let r=void 0!==t.transition?t.params:void 0===e.params&&void 0===t.params?void 0:{...e.params,...t.params};return{transition:t.transition??e.transition,params:r,reverse:t.reverse??e.reverse,duration:t.duration??e.duration,overflow:t.overflow??e.overflow,ease:t.ease??e.ease}}function sq(e,t={}){let r=sG(e,t);return{transition:r.transition??so,params:r.params,reverse:r.reverse??!1,duration:r.duration??.6,overflow:r.overflow,ease:r.ease}}let sJ=new WeakMap;function sK(e,t){return new Promise((r,i)=>{let s=setTimeout(()=>r(!1),t);e.then(()=>{clearTimeout(s),r(!0)},e=>{clearTimeout(s),i(e)})})}class sY{constructor(e,t,r={},i,s=new s$){E.add(this),S.set(this,void 0),M.set(this,void 0),k.set(this,void 0),R.set(this,void 0),C.set(this,void 0),P.set(this,void 0),W.set(this,[]),A.set(this,[]),F.set(this,!1),z.set(this,!1),_.set(this,!1),B.set(this,0),I.set(this,null),U.set(this,!1),L.set(this,!1),V.set(this,null),O.set(this,[]),D.set(this,null),N.set(this,null),$.set(this,null),sX(this,P,i,"f"),sX(this,S,e,"f"),sX(this,M,t,"f"),sX(this,k,r,"f"),sX(this,R,s,"f"),sX(this,C,r.keepWrapped??!1,"f")}get running(){return null!==sj(this,I,"f")}show(e,t={}){let r=sj(this,E,"m",H).call(this,e),{remove:i=!1,...s}=t;if(!this.running&&sj(this,E,"m",X).call(this,r))return Promise.resolve();let o=sj(this,k,"f").slideSpec?.(r),a=o?sG(o,s):s;return this.run(()=>{for(let e of(r.parentElement!==sj(this,M,"f")&&sj(this,M,"f").append(r),Array.from(sj(this,M,"f").children)))e!==r&&(i?e.remove():e.hidden=!0);r.hidden=!1},a)}async run(e,t={}){var r;if(sj(this,U,"f"))return void await e();let i=sX(this,B,(r=sj(this,B,"f"),++r),"f");sX(this,I,i,"f");try{await sj(this,E,"m",j).call(this,i,e,t)}finally{sj(this,I,"f")===i&&sX(this,I,null,"f"),sj(this,B,"f")===i&&(sj(this,E,"m",ee).call(this),sj(this,E,"m",Z).call(this),sj(this,E,"m",J).call(this))}}cancel(){var e;let t=sX(this,B,(e=sj(this,B,"f"),++e),"f");sX(this,I,null,"f"),sj(this,E,"m",er).call(this),sj(this,R,"f").cancel(),sj(this,E,"m",ee).call(this),sj(this,E,"m",Z).call(this),sj(this,E,"m",J).call(this),sj(this,E,"m",es).call(this,t)}destroy(){sj(this,U,"f")||(sX(this,U,!0,"f"),this.cancel(),sX(this,D,null,"f"),sj(this,P,"f")?.call(this))}}S=new WeakMap,M=new WeakMap,k=new WeakMap,R=new WeakMap,C=new WeakMap,P=new WeakMap,W=new WeakMap,A=new WeakMap,F=new WeakMap,z=new WeakMap,_=new WeakMap,B=new WeakMap,I=new WeakMap,U=new WeakMap,L=new WeakMap,V=new WeakMap,O=new WeakMap,D=new WeakMap,N=new WeakMap,$=new WeakMap,E=new WeakSet,H=function(e){let t=sj(this,M,"f"),r="number"==typeof e?t.children[e]:"string"==typeof e?t.querySelector(e):e;if(!r)throw TypeError(`[VFX-JS] show(): no slide for ${e}.`);if(r.parentElement!==t&&(r.isConnected||t.contains(r)))throw TypeError("[VFX-JS] show(): the slide must be a direct child of the container.");return r},X=function(e){return e.parentElement===sj(this,M,"f")&&!e.hidden&&Array.from(sj(this,M,"f").children).every(t=>t===e||t.hidden)},j=async function(e,t,r){let i,s=()=>e===sj(this,B,"f"),o=!1,a=async()=>{o||(o=!0,await t())},n=async()=>{sj(this,E,"m",er).call(this),sj(this,R,"f").cancel(),await a(),s()&&(sj(this,L,"f")&&sj(this,C,"f")&&await sj(this,S,"f").update(sj(this,M,"f")),sj(this,E,"m",es).call(this,e))},l=null;if("function"!=typeof r){if(l=sj(this,E,"m",G).call(this,sq(sj(this,k,"f"),r)),!s())return a();if(null===l)return n()}sj(this,E,"m",Q).call(this);try{await sj(this,E,"m",ei).call(this,l?.slots??null,s,!0)}catch(e){return console.error("[VFX-JS] transition failed to wrap the element; cutting to the new content.",e),a()}if(!s())return a();sj(this,A,"f").push(sj(this,S,"f").lockSize(sj(this,M,"f"))),sj(this,A,"f").push(sj(this,S,"f").forceRender(sj(this,M,"f")));let f=await sK(sj(this,R,"f").snapshot(),1e3);if(!s())return a();if(!f){sj(this,E,"m",Y).call(this),await a(),s()&&sj(this,E,"m",es).call(this,e);return}l&&sj(this,E,"m",K).call(this,e,l);try{await a(),"function"==typeof r&&s()&&(i=r())}catch(t){throw s()&&(sj(this,E,"m",er).call(this),sj(this,R,"f").cancel(),sj(this,E,"m",es).call(this,e)),t}if(!s())return;if(null===l){if(l=sj(this,E,"m",G).call(this,sq(sj(this,k,"f"),i)),!s())return;if(null===l)return n();try{await sj(this,E,"m",ei).call(this,l.slots,s,!1)}catch(e){return console.error("[VFX-JS] transition failed to swap the effects; cutting to the new content.",e),n()}if(!s())return;sj(this,E,"m",K).call(this,e,l)}sj(this,E,"m",Q).call(this);try{await sj(this,E,"m",eo).call(this)}catch(e){console.error("[VFX-JS] transition waitFor failed:",e)}if(!s()||(await sj(this,S,"f").updateInTime(sj(this,M,"f"))||sj(this,z,"f")||(sX(this,z,!0,"f"),console.warn("[VFX-JS] transition: the new content was not captured in time; it may pop in during the run.")),!s())||(await new Promise(e=>requestAnimationFrame(()=>e())),!s()))return;let h=sj(this,R,"f").start({duration:l.run.duration,ease:l.ease,onEnd:()=>sj(this,E,"m",er).call(this,e)}),c=await sK(h,1e3*l.run.duration+1e3);s()&&(c||sj(this,E,"m",Y).call(this),sj(this,E,"m",es).call(this,e))},G=function(e){let t,r;if(e.duration<=0)return null;let i=e.transition;if("function"!=typeof i&&!sj(this,E,"m",q).call(this,i))return null;try{({transition:t,slots:r}=sj(this,E,"m",et).call(this,i,e.params))}catch(e){return console.error(`[VFX-JS] transition "${i.name}" constructor failed; cutting to the new content.`,e),null}let s={reverse:e.reverse,duration:e.duration},o=e.overflow??t.overflow;return void 0!==o&&(s.overflow=o),{run:s,ease:e.ease??t.ease??"smoothstep",slots:r}},q=function(e){let t=sJ.get(e);return t&&t!==this?(sj(this,_,"f")||(sX(this,_,!0,"f"),console.warn(`[VFX-JS] transition "${e.name??"unnamed"}" instance is running in another container; cutting to the new content. Pass the class to share it.`)),!1):(sj(this,N,"f")!==e&&sj(this,E,"m",J).call(this),sJ.set(e,this),sX(this,N,e,"f"),!0)},J=function(){let e=sj(this,N,"f");sX(this,N,null,"f"),e&&sJ.get(e)===this&&sJ.delete(e)},K=function(e,{run:t,slots:r}){for(let i of(sj(this,E,"m",er).call(this),sX(this,$,{id:e,slots:r},"f"),r))i.start(t)},Y=function(){sj(this,F,"f")||(sX(this,F,!0,"f"),console.warn("[VFX-JS] transition target did not render in time; cutting to the new content.")),sj(this,E,"m",er).call(this),sj(this,R,"f").cancel()},Q=function(){sj(this,W,"f").push(sj(this,S,"f").freezeInside(sj(this,M,"f")))},Z=function(){let e=sj(this,A,"f");for(let t of(sX(this,A,[],"f"),e))t()},ee=function(){let e=sj(this,W,"f");for(let t of(sX(this,W,[],"f"),e))t()},et=function(e,t){var r;let i,s,o,a=sj(this,D,"f");if(a?.key.source===e&&("function"!=typeof e||(r=a.key.params,i=r??{},s=t??{},(o=Object.keys(i)).length===Object.keys(s).length&&o.every(e=>{var t,r;return e in s&&(t=i[e],r=s[e],Array.isArray(t)&&Array.isArray(r)?t.length===r.length&&t.every((e,t)=>e===r[t]):t===r)}))))return a;let n="function"==typeof e?new e(t):e,l=[new sH(n,sj(this,R,"f"))];return sX(this,D,{key:{source:e,params:t},transition:n,slots:l},"f"),{transition:n,slots:l}},er=function(e){let t=sj(this,$,"f");if(t&&(void 0===e||t.id===e))for(let e of(sX(this,$,null,"f"),t.slots))e.end()},ei=async function(e,t,r){var i;if(sj(this,V,"f")&&await sj(this,V,"f"),!t())return;let s=null!==e?[sj(this,R,"f"),...e]:sj(this,L,"f")?sj(this,O,"f"):[sj(this,R,"f")];if(!sj(this,L,"f")){let e=sj(this,S,"f").addHTMLWithStill(sj(this,M,"f"),{effect:s}).then(()=>{sX(this,L,!0,"f"),sX(this,O,s,"f")}).finally(()=>{sX(this,V,null,"f")});sX(this,V,e,"f"),await e;return}if(i=sj(this,O,"f"),!(s.length===i.length&&s.every((e,t)=>e===i[t]))){sX(this,O,s,"f");let e=sj(this,S,"f").updateEffects(sj(this,M,"f"),s).finally(()=>{sX(this,V,null,"f")});sX(this,V,e,"f"),await e}r&&await sj(this,S,"f").update(sj(this,M,"f"))},es=function(e){if(sj(this,C,"f")&&!sj(this,U,"f"))return;let t=()=>{e===sj(this,B,"f")&&sj(this,L,"f")&&(sX(this,L,!1,"f"),sX(this,O,[],"f"),sj(this,S,"f").remove(sj(this,M,"f")))};sj(this,V,"f")?sj(this,V,"f").then(t,()=>{}):t()},eo=function(){let e=sj(this,k,"f").waitFor??"media";return"none"===e?Promise.resolve():"media"===e?function(e,t,r=300){let i=[];for(let t of e.querySelectorAll("img, video")){let e="IMG"===t.tagName;(e?t.complete:t.readyState>=2)||function(e){if("IMG"===e.tagName){let t;return"lazy"===e.loading&&(!((t=e.getBoundingClientRect()).right>0)||!(t.bottom>0)||!(t.left<window.innerWidth)||!(t.top<window.innerHeight))}return"none"===e.preload}(t)||i.push(new Promise(r=>{let i=()=>r();t.addEventListener(e?"load":"loadeddata",i,{once:!0}),t.addEventListener("error",i,{once:!0})}))}return(t&&i.push(t),0===i.length)?Promise.resolve():new Promise(e=>{let t=setTimeout(e,r),s=()=>{clearTimeout(t),e()};Promise.all(i).then(s,s)})}(sj(this,M,"f"),document.fonts?.ready):e(sj(this,M,"f"))};var sQ=function(e,t,r,i,s){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,r):s?s.value=r:t.set(e,r),r},sZ=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};class s0{constructor(e,t,r){ea.add(this),this.wrapS="clamp",this.wrapT="clamp",this.minFilter="linear",this.magFilter="linear",this.needsUpdate=!0,this.source=null,en.set(this,void 0),el.set(this,!1),ef.set(this,void 0),eh.set(this,void 0),sQ(this,en,e,"f"),this.gl=e.gl;let i=r?.externalHandle;sQ(this,eh,void 0!==i,"f"),void 0!==i?(this.texture=i,sQ(this,el,!0,"f"),this.needsUpdate=!1):sZ(this,ea,"m",ec).call(this),t&&(this.source=t),sQ(this,ef,r?.autoRegister!==!1&&!sZ(this,eh,"f"),"f"),sZ(this,ef,"f")&&e.addResource(this)}restore(){sZ(this,eh,"f")||(sZ(this,ea,"m",ec).call(this),sQ(this,el,!1,"f"),this.needsUpdate=!0)}bind(e){let t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture),this.needsUpdate&&(sZ(this,ea,"m",eu).call(this),this.needsUpdate=!1)}dispose(){sZ(this,ef,"f")&&sZ(this,en,"f").removeResource(this),sZ(this,eh,"f")||this.gl.deleteTexture(this.texture)}}function s1(e,t){return"repeat"===t?e.REPEAT:"mirror"===t?e.MIRRORED_REPEAT:e.CLAMP_TO_EDGE}function s2(e,t){return"nearest"===t?e.NEAREST:e.LINEAR}function s4(e){return new Promise((t,r)=>{let i=new Image;i.crossOrigin="anonymous",i.onload=()=>t(i),i.onerror=r,i.src=e})}en=new WeakMap,el=new WeakMap,ef=new WeakMap,eh=new WeakMap,ea=new WeakSet,ec=function(){let e=this.gl.createTexture();if(!e)throw Error("[VFX-JS] Failed to create texture");this.texture=e},eu=function(){let e=this.gl,t=this.source;if(e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_ALIGNMENT,4),t)try{e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t)}catch(e){console.error(e)}else if(!sZ(this,el,"f")){let t=new Uint8Array([0,0,0,0]);e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,t)}sZ(this,ea,"m",ed).call(this),sQ(this,el,!0,"f")},ed=function(){let e=this.gl;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,s1(e,this.wrapS)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,s1(e,this.wrapT)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,s2(e,this.minFilter)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,s2(e,this.magFilter))};var s3=function(e,t,r,i,s){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,r):s?s.value=r:t.set(e,r),r},s5=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};class s6{constructor(e,t,r,i={}){ep.add(this),em.set(this,void 0),s3(this,em,e,"f"),this.gl=e.gl,this.width=Math.max(1,Math.floor(t)),this.height=Math.max(1,Math.floor(r)),this.float=i.float??!1,this.mipmap=i.mipmap??!1,this.texture=new s0(e,void 0,{autoRegister:!1});let s=i.wrap;void 0!==s&&("string"==typeof s?(this.texture.wrapS=s,this.texture.wrapT=s):(this.texture.wrapS=s[0],this.texture.wrapT=s[1])),void 0!==i.filter&&(this.texture.minFilter=i.filter,this.texture.magFilter=i.filter),s5(this,ep,"m",ev).call(this),e.addResource(this)}setSize(e,t){let r=Math.max(1,Math.floor(e)),i=Math.max(1,Math.floor(t));(r!==this.width||i!==this.height)&&(this.width=r,this.height=i,s5(this,ep,"m",ev).call(this))}restore(){this.texture.restore(),s5(this,ep,"m",ev).call(this)}dispose(){s5(this,em,"f").removeResource(this),this.gl.deleteFramebuffer(this.fbo),this.texture.dispose()}generateMipmaps(){if(!this.mipmap)return;let e=this.gl;e.bindTexture(e.TEXTURE_2D,this.texture.texture),e.generateMipmap(e.TEXTURE_2D),e.bindTexture(e.TEXTURE_2D,null)}}function s8(e,t){return"repeat"===t?e.REPEAT:"mirror"===t?e.MIRRORED_REPEAT:e.CLAMP_TO_EDGE}function s9(e,t,r,i){return{x:e.left+r,y:t-i-e.bottom,w:e.right-e.left,h:e.bottom-e.top}}em=new WeakMap,ep=new WeakSet,ev=function(){let e=this.gl,t=this.fbo,r=e.createFramebuffer();if(!r)throw Error("[VFX-JS] Failed to create framebuffer");this.fbo=r;let i=this.texture.texture;e.bindTexture(e.TEXTURE_2D,i);let s=s5(this,em,"f").floatLinearFilter;if(this.float&&s&&!s5(this,em,"f").floatBlend)throw Error("[VFX-JS] EXT_float_blend is not supported.");let o=this.float?s?e.RGBA32F:e.RGBA16F:e.RGBA8,a=this.float?s?e.FLOAT:e.HALF_FLOAT:e.UNSIGNED_BYTE;if(this.mipmap){let t=Math.floor(Math.log2(Math.max(this.width,this.height)))+1,r=this.width,i=this.height;for(let s=0;s<t;s++)e.texImage2D(e.TEXTURE_2D,s,o,r,i,0,e.RGBA,a,null),r=Math.max(1,r>>1),i=Math.max(1,i>>1)}else e.texImage2D(e.TEXTURE_2D,0,o,this.width,this.height,0,e.RGBA,a,null);let n="nearest"===this.texture.minFilter?e.NEAREST:e.LINEAR,l="nearest"===this.texture.magFilter?e.NEAREST:e.LINEAR,f=this.mipmap?"nearest"===this.texture.minFilter?e.NEAREST_MIPMAP_NEAREST:e.LINEAR_MIPMAP_LINEAR:n,h=s8(e,this.texture.wrapS),c=s8(e,this.texture.wrapT);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,h),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,c),e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null),this.texture.needsUpdate=!1,this.texture.source=null,t&&e.deleteFramebuffer(t)};var s7=function(e,t,r,i,s){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,r):s?s.value=r:t.set(e,r),r},oe=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};class ot{constructor(e,t,r,i,s,o={}){eg.set(this,void 0),ew.set(this,void 0),ex.set(this,void 0),ey.set(this,void 0),s7(this,eg,t,"f"),s7(this,ew,r,"f"),s7(this,ex,i,"f");let a=t*i,n=r*i,l={float:s,wrap:o.wrap,filter:o.filter,mipmap:o.mipmap};s7(this,ey,[new s6(e,a,n,l),new s6(e,a,n,l)],"f")}get texture(){return oe(this,ey,"f")[0].texture}get target(){return oe(this,ey,"f")[1]}resize(e,t){if(e===oe(this,eg,"f")&&t===oe(this,ew,"f"))return;s7(this,eg,e,"f"),s7(this,ew,t,"f");let r=e*oe(this,ex,"f"),i=t*oe(this,ex,"f");oe(this,ey,"f")[0].setSize(r,i),oe(this,ey,"f")[1].setSize(r,i)}swap(){s7(this,ey,[oe(this,ey,"f")[1],oe(this,ey,"f")[0]],"f")}getViewport(){return{x:0,y:0,w:oe(this,eg,"f"),h:oe(this,ew,"f")}}dispose(){oe(this,ey,"f")[0].dispose(),oe(this,ey,"f")[1].dispose()}}eg=new WeakMap,ew=new WeakMap,ex=new WeakMap,ey=new WeakMap;let or=`
precision highp float;
in vec3 position;
void main() {
    gl_Position = vec4(position, 1.0);
}
`,oi=`
precision highp float;
attribute vec3 position;
void main() {
    gl_Position = vec4(position, 1.0);
}
`,os=`
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
`,oo=`precision highp float;
uniform vec2 resolution;
uniform vec2 offset;
uniform float time;
uniform bool autoCrop;
uniform sampler2D src;
out vec4 outColor;
`,oa=`vec4 readTex(sampler2D tex, vec2 uv) {
    if (autoCrop && (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.)) {
        return vec4(0);
    }
    return texture(tex, uv);
}`,on={none:os,uvGradient:`
    ${oo}
    ${oa}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        outColor = vec4(uv, sin(time) * .5 + .5, 1);

        vec4 img = readTex(src, uv);
        outColor *= smoothstep(0., 1., img.a);
    }
    `,rainbow:`
    ${oo}
    ${oa}

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
    ${oo}
    ${oa}

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
    ${oo}
    ${oa}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        float b = sin(time * 2.) * 32. + 48.;
        uv = floor(uv * b) / b;
        outColor = readTex(src, uv);
    }
    `,rgbGlitch:`
    ${oo}
    ${oa}

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
    ${oo}
    ${oa}

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

    ${oo}
    ${oa}

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
    ${oo}
    ${oa}

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
    ${oo}
    ${oa}

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
    ${oo}
    ${oa}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        outColor = readTex(src, uv) * (sin(time * 5.) * 0.2 + 0.8);
    }

    `,spring:`
    ${oo}
    ${oa}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        uv = (uv - .5) * (1.05 + sin(time * 5.) * 0.05) + .5;
        outColor = readTex(src, uv);
    }
    `,duotone:`
    ${oo}
    ${oa}

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
    ${oo}
    ${oa}

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
    ${oo}
    ${oa}

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
    ${oo}
    uniform float enterProgress;
    uniform float leaveProgress;

    ${oa}

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
    ${oo}
    ${oa}

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
    ${oo}
    ${oa}

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
    ${oo}
    ${oa}

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
    ${oo}
    ${oa}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = readTex(src, uv);
        outColor = vec4(1.0 - color.rgb, color.a);
    }
    `,grayscale:`
    ${oo}
    ${oa}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = readTex(src, uv);
        float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
        outColor = vec4(vec3(gray), color.a);
    }
    `,vignette:`
    ${oo}
    ${oa}

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
    ${oo}
    ${oa}

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
    `},ol={...on,slitScanTransition:on.slitScanReveal,warpTransition:on.warpReveal,pixelateTransition:on.pixelateReveal,focusTransition:on.focusReveal};class of{constructor(e=0,t=0){this.x=0,this.y=0,this.x=e,this.y=t}set(e,t){return this.x=e,this.y=t,this}}class oh{constructor(e=0,t=0,r=0,i=0){this.x=0,this.y=0,this.z=0,this.w=0,this.x=e,this.y=t,this.z=r,this.w=i}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}}var oc=function(e,t,r,i,s){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,r):s?s.value=r:t.set(e,r),r},ou=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};function od(e){return/#version\s+300\s+es\b/.test(e)?"300 es":/#version\s+100\b/.test(e)||/\bgl_FragColor\b|\btexture2D\b|\bvarying\b|\battribute\b/.test(e)?"100":"300 es"}class op{constructor(e,t,r,i){eb.add(this),eT.set(this,void 0),eE.set(this,void 0),eS.set(this,void 0),eM.set(this,void 0),ek.set(this,new Map),oc(this,eT,e,"f"),this.gl=e.gl,oc(this,eE,t,"f"),oc(this,eS,r,"f"),oc(this,eM,i??od(r),"f"),ou(this,eb,"m",eR).call(this),e.addResource(this)}restore(){ou(this,eb,"m",eR).call(this)}use(){this.gl.useProgram(this.program)}hasUniform(e){return ou(this,ek,"f").has(e)}uploadUniforms(e){let t=this.gl,r=0;for(let[s,o]of ou(this,ek,"f")){let a=e[s];if(!a)continue;let n=a.value;if(null!=n){var i;if(35678===(i=o.type)||36298===i||36306===i||35682===i){n instanceof s0&&(n.bind(r),t.uniform1i(o.location,r),r++);continue}n instanceof s0||function(e,t,r){let i=t.location,s=t.size>1;switch(t.type){case e.FLOAT:s?e.uniform1fv(i,r):e.uniform1f(i,r);return;case e.FLOAT_VEC2:s?e.uniform2fv(i,r):r instanceof of?e.uniform2f(i,r.x,r.y):e.uniform2f(i,r[0],r[1]);return;case e.FLOAT_VEC3:s?e.uniform3fv(i,r):e.uniform3f(i,r[0],r[1],r[2]);return;case e.FLOAT_VEC4:s?e.uniform4fv(i,r):r instanceof oh?e.uniform4f(i,r.x,r.y,r.z,r.w):e.uniform4f(i,r[0],r[1],r[2],r[3]);return;case e.INT:s?e.uniform1iv(i,r):e.uniform1i(i,r);return;case e.INT_VEC2:s?e.uniform2iv(i,r):e.uniform2i(i,r[0],r[1]);return;case e.INT_VEC3:s?e.uniform3iv(i,r):e.uniform3i(i,r[0],r[1],r[2]);return;case e.INT_VEC4:s?e.uniform4iv(i,r):e.uniform4i(i,r[0],r[1],r[2],r[3]);return;case e.BOOL:s?e.uniform1iv(i,r):e.uniform1i(i,+!!r);return;case e.BOOL_VEC2:s?e.uniform2iv(i,r):e.uniform2i(i,+!!r[0],+!!r[1]);return;case e.BOOL_VEC3:s?e.uniform3iv(i,r):e.uniform3i(i,+!!r[0],+!!r[1],+!!r[2]);return;case e.BOOL_VEC4:s?e.uniform4iv(i,r):e.uniform4i(i,+!!r[0],+!!r[1],+!!r[2],+!!r[3]);return;case e.FLOAT_MAT2:e.uniformMatrix2fv(i,!1,r);return;case e.FLOAT_MAT3:e.uniformMatrix3fv(i,!1,r);return;case e.FLOAT_MAT4:e.uniformMatrix4fv(i,!1,r);return;case e.UNSIGNED_INT:s?e.uniform1uiv(i,r):e.uniform1ui(i,r);return;case e.UNSIGNED_INT_VEC2:s?e.uniform2uiv(i,r):e.uniform2ui(i,r[0],r[1]);return;case e.UNSIGNED_INT_VEC3:s?e.uniform3uiv(i,r):e.uniform3ui(i,r[0],r[1],r[2]);return;case e.UNSIGNED_INT_VEC4:s?e.uniform4uiv(i,r):e.uniform4ui(i,r[0],r[1],r[2],r[3]);return;default:og.has(t.type)||(og.add(t.type),console.warn(`[VFX-JS] Unsupported uniform type 0x${t.type.toString(16)}; skipping upload.`));return}}(t,o,n)}}}dispose(){ou(this,eT,"f").removeResource(this),this.gl.deleteProgram(this.program)}}function om(e,t,r){let i=e.createShader(t);if(!i)throw Error("[VFX-JS] Failed to create shader");if(e.shaderSource(i,r),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(i)??"";throw e.deleteShader(i),Error(`[VFX-JS] Shader compile failed: ${t}

${r}`)}return i}function ov(e,t){return e.replace(/^\s+/,"").startsWith("#version")||"100"===t?e:`#version 300 es
${e}`}eT=new WeakMap,eE=new WeakMap,eS=new WeakMap,eM=new WeakMap,ek=new WeakMap,eb=new WeakSet,eR=function(){let e=this.gl,t=om(e,e.VERTEX_SHADER,ov(ou(this,eE,"f"),ou(this,eM,"f"))),r=om(e,e.FRAGMENT_SHADER,ov(ou(this,eS,"f"),ou(this,eM,"f"))),i=e.createProgram();if(!i)throw Error("[VFX-JS] Failed to create program");if(e.attachShader(i,t),e.attachShader(i,r),e.bindAttribLocation(i,0,"position"),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){let s=e.getProgramInfoLog(i)??"";throw e.deleteShader(t),e.deleteShader(r),e.deleteProgram(i),Error(`[VFX-JS] Program link failed: ${s}`)}e.detachShader(i,t),e.detachShader(i,r),e.deleteShader(t),e.deleteShader(r),this.program=i,ou(this,ek,"f").clear();let s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let t=0;t<s;t++){let r=e.getActiveUniform(i,t);if(!r)continue;let s=r.name.replace(/\[0\]$/,""),o=e.getUniformLocation(i,r.name);o&&ou(this,ek,"f").set(s,{location:o,type:r.type,size:r.size})}};let og=new Set;class ow{constructor(e,t,r,i,s,o){this.gl=e.gl,this.program=new op(e,t,r,o),this.uniforms=i,this.blend=s}dispose(){this.program.dispose()}}function ox(e,t){"none"===t?e.disable(e.BLEND):(e.enable(e.BLEND),e.blendEquation(e.FUNC_ADD),"premultiplied"===t?e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA):"additive"===t?e.blendFuncSeparate(e.ONE,e.ONE,e.ONE,e.ONE):e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA))}class oy{constructor(e){this.uniforms={src:{value:null},offset:{value:new of},resolution:{value:new of},viewport:{value:new oh}},this.pass=new ow(e,or,os,this.uniforms,"premultiplied")}setUniforms(e,t,r){this.uniforms.src.value=e,this.uniforms.resolution.value.set(r.w*t,r.h*t),this.uniforms.offset.value.set(r.x*t,r.y*t)}dispose(){this.pass.dispose()}}async function ob(e,t,r,i){var s;let o,a,n,l=e.getBoundingClientRect(),f=window.devicePixelRatio,h=Math.ceil(l.width),c=Math.ceil(l.height),u=h*f,d=c*f,p=1,m=u,v=d;i&&(m>i||v>i)&&(p=Math.min(i/m,i/v),m=Math.floor(m*p),v=Math.floor(v*p));let g=r&&r.width===m&&r.height===v?r:new OffscreenCanvas(m,v),w=e.cloneNode(!0);await oT(e,w),function e(t,r){if("function"==typeof t.computedStyleMap)try{let e=t.computedStyleMap();for(let t of["margin-top","margin-right","margin-bottom","margin-left"]){let i=e.get(t);i instanceof CSSKeywordValue&&"auto"===i.value&&r.style.setProperty(t,"auto")}}catch{}for(let i=0;i<t.children.length;i++){let s=t.children[i],o=r.children[i];s instanceof HTMLElement&&o instanceof HTMLElement&&e(s,o)}}(e,w),w.style.setProperty("opacity",t.toString()),w.style.setProperty("margin","0px"),function(e){let t=e;for(;;){let e=t.style;if(Number.parseFloat(e.paddingTop)>0||Number.parseFloat(e.borderTopWidth)>0||e.getPropertyValue("overflow-x")&&"visible"!==e.getPropertyValue("overflow-x")||e.getPropertyValue("overflow-y")&&"visible"!==e.getPropertyValue("overflow-y")||"flex"===e.display||"grid"===e.display||"flow-root"===e.display||"inline-block"===e.display)break;let r=t.firstElementChild;if(!r)break;r.style.setProperty("margin-top","0px"),t=r}for(t=e;;){let e=t.style;if(Number.parseFloat(e.paddingBottom)>0||Number.parseFloat(e.borderBottomWidth)>0||e.getPropertyValue("overflow-x")&&"visible"!==e.getPropertyValue("overflow-x")||e.getPropertyValue("overflow-y")&&"visible"!==e.getPropertyValue("overflow-y")||"flex"===e.display||"grid"===e.display||"flow-root"===e.display||"inline-block"===e.display)break;let r=t.lastElementChild;if(!r)break;r.style.setProperty("margin-bottom","0px"),t=r}}(w),function e(t,r){let i=-t.scrollLeft,s=-t.scrollTop;for(let o=0;o<t.children.length;o++){let a=t.children[o],n=r.children[o];a&&(n instanceof HTMLElement||n instanceof SVGElement)&&((0!==i||0!==s)&&function(e,t,r){let i=e.style.getPropertyValue("translate"),[s="0px",o="0px",a]=i&&"none"!==i?function(e){let t=[],r=0,i="";for(let s of e.trim())"("===s?r++:")"===s&&r--," "===s&&0===r?(i&&t.push(i),i=""):i+=s;return i&&t.push(i),t}(i):[],n=`calc(${s} + ${t}px) calc(${o} + ${r}px)`;e.style.setProperty("translate",a?`${n} ${a}`:n)}(n,i,s),e(a,n))}}(e,w),w.style.setProperty("box-sizing","border-box"),w.style.setProperty("width",`${h}px`),w.style.setProperty("height",`${c}px`);let x=(s=w.outerHTML,(a=(o=document.implementation.createHTMLDocument("test")).createRange()).selectNodeContents(o.documentElement),a.deleteContents(),n=document.createElement("head"),o.documentElement.appendChild(n),o.documentElement.appendChild(a.createContextualFragment(s)),o.documentElement.setAttribute("xmlns",o.documentElement.namespaceURI),new XMLSerializer().serializeToString(o).replace(/<!DOCTYPE html>/,"")),y=`<svg xmlns="http://www.w3.org/2000/svg" width="${u}" height="${d}"><foreignObject width="100%" height="100%">${x}</foreignObject></svg>`;return new Promise((e,t)=>{let r=new Image;r.onload=()=>{let i=g.getContext("2d");if(null===i)return t();i.clearRect(0,0,m,v);let s=f*p;i.scale(s,s),i.drawImage(r,0,0,u,d),i.setTransform(1,0,0,1,0,0),e(g)},r.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(y)}`})}async function oT(e,t){let r=window.getComputedStyle(e);for(let e of Array.from(r))/(-inline-|-block-|^inline-|^block-)/.test(e)||/^-webkit-.*(start|end|before|after|logical)/.test(e)||t.style.setProperty(e,r.getPropertyValue(e),r.getPropertyPriority(e));if("INPUT"===t.tagName)t.setAttribute("value",t.value);else if("TEXTAREA"===t.tagName)t.innerHTML=t.value;else if("IMG"===t.tagName)try{t.src=await oE(sl(e))}catch{}for(let r=0;r<e.children.length;r++){let i=e.children[r],s=t.children[r];await oT(i,s)}}async function oE(e){let t=await fetch(e).then(e=>e.blob());return new Promise(e=>{let r=new FileReader;r.onload=function(){e(this.result)},r.readAsDataURL(t)})}var oS=function(e,t,r,i,s){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,r):s?s.value=r:t.set(e,r),r},oM=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};let ok=Object.freeze({__brand:"EffectQuad"});class oR{constructor(e,t,r){eC.add(this),eP.set(this,void 0),eW.set(this,void 0),eA.set(this,void 0),eF.set(this,[]),ez.set(this,null),this.indexType=0,this.hasIndices=!1,this.drawCount=0,this.drawStart=0,e_.set(this,!1),oS(this,eP,e,"f"),this.gl=e.gl,oS(this,eW,t,"f"),oS(this,eA,r,"f"),this.mode=function(e,t){switch(t){case"lines":return e.LINES;case"lineStrip":return e.LINE_STRIP;case"points":return e.POINTS;default:return e.TRIANGLES}}(this.gl,t.mode),this.instanceCount=t.instanceCount??0,oM(this,eC,"m",eB).call(this),e.addResource(this),oS(this,e_,!0,"f")}restore(){oS(this,eF,[],"f"),oS(this,ez,null,"f"),oM(this,eC,"m",eB).call(this)}draw(){let e=this.gl;e.bindVertexArray(this.vao),this.hasIndices?this.instanceCount>0?e.drawElementsInstanced(this.mode,this.drawCount,this.indexType,this.drawStart*(this.indexType===e.UNSIGNED_INT?4:2),this.instanceCount):e.drawElements(this.mode,this.drawCount,this.indexType,this.drawStart*(this.indexType===e.UNSIGNED_INT?4:2)):this.instanceCount>0?e.drawArraysInstanced(this.mode,this.drawStart,this.drawCount,this.instanceCount):e.drawArrays(this.mode,this.drawStart,this.drawCount)}dispose(){oM(this,e_,"f")&&(oM(this,eP,"f").removeResource(this),oS(this,e_,!1,"f"));let e=this.gl;for(let t of(e.deleteVertexArray(this.vao),oM(this,eF,"f")))e.deleteBuffer(t);oM(this,ez,"f")&&e.deleteBuffer(oM(this,ez,"f")),oS(this,eF,[],"f"),oS(this,ez,null,"f")}}eP=new WeakMap,eW=new WeakMap,eA=new WeakMap,eF=new WeakMap,ez=new WeakMap,e_=new WeakMap,eC=new WeakSet,eB=function(){let e=this.gl,t=e.createVertexArray();if(!t)throw Error("[VFX-JS] Failed to create VAO");this.vao=t,e.bindVertexArray(t);let r=oM(this,eA,"f").program,i=null;for(let[t,s]of Object.entries(oM(this,eW,"f").attributes)){let o=!ArrayBuffer.isView(s)||s instanceof DataView?{name:t,data:s.data,itemSize:s.itemSize,normalized:s.normalized??!1,perInstance:s.perInstance??!1}:{name:t,data:s,itemSize:2,normalized:!1,perInstance:!1},a=e.getAttribLocation(r,o.name);if(a<0)continue;let n=e.createBuffer();if(!n)throw Error(`[VFX-JS] Failed to create VBO for "${o.name}"`);oM(this,eF,"f").push(n),e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,o.data,e.STATIC_DRAW);let l=function(e,t){if(t instanceof Float32Array)return e.FLOAT;if(t instanceof Uint8Array)return e.UNSIGNED_BYTE;if(t instanceof Uint16Array)return e.UNSIGNED_SHORT;if(t instanceof Uint32Array)return e.UNSIGNED_INT;if(t instanceof Int8Array)return e.BYTE;if(t instanceof Int16Array)return e.SHORT;if(t instanceof Int32Array)return e.INT;throw Error("[VFX-JS] Unsupported attribute typed array")}(e,o.data);e.enableVertexAttribArray(a),l===e.FLOAT||l===e.HALF_FLOAT||o.normalized?e.vertexAttribPointer(a,o.itemSize,l,o.normalized,0,0):e.vertexAttribIPointer(a,o.itemSize,l,0,0),o.perInstance&&e.vertexAttribDivisor(a,1),"position"===t&&null===i&&(i=o.data.length/o.itemSize)}let s=0,o=oM(this,eW,"f").indices;if(o){let t=e.createBuffer();if(!t)throw Error("[VFX-JS] Failed to create IBO");oS(this,ez,t,"f"),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),e.bufferData(e.ELEMENT_ARRAY_BUFFER,o,e.STATIC_DRAW),this.hasIndices=!0,this.indexType=o instanceof Uint32Array?e.UNSIGNED_INT:e.UNSIGNED_SHORT,s=o.length}else this.hasIndices=!1;e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null),oM(this,ez,"f")&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null);let a=this.hasIndices?s:i??0,n=oM(this,eW,"f").drawRange;this.drawStart=n?.start??0,this.drawCount=n?.count!==void 0?n.count:Math.max(0,a-this.drawStart)};class oC{constructor(e,t){eI.set(this,void 0),eU.set(this,void 0),eL.set(this,new WeakMap),eV.set(this,new Set),oS(this,eI,e,"f"),oS(this,eU,t,"f")}get quad(){return oM(this,eU,"f")}resolve(e,t){let r=oM(this,eL,"f").get(e);r||(r=new Map,oM(this,eL,"f").set(e,r));let i=r.get(t);return i||(i=new oR(oM(this,eI,"f"),e,t),r.set(t,i),oM(this,eV,"f").add(i)),i}release(e){let t=oM(this,eL,"f").get(e);if(t){for(let e of t.values())e.dispose(),oM(this,eV,"f").delete(e);oM(this,eL,"f").delete(e)}}dispose(){for(let e of oM(this,eV,"f"))e.dispose();oM(this,eV,"f").clear()}}eI=new WeakMap,eU=new WeakMap,eL=new WeakMap,eV=new WeakMap;var oP=function(e,t,r,i,s){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,r):s?s.value=r:t.set(e,r),r},oW=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};let oA=Symbol.for("@vfx-js/effect.resolve-texture"),oF=Symbol.for("@vfx-js/effect.resolve-rt"),oz=`#version 300 es
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
`,o_=`
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
`,oB=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D src;
void main() {
    outColor = texture(src, uv);
}
`,oI=`
precision highp float;
varying vec2 uv;
uniform sampler2D src;
void main() {
    gl_FragColor = texture2D(src, uv);
}
`,oU=`#version 300 es
precision highp float;
in vec2 uvSrc;
out vec4 outColor;
uniform sampler2D src;
void main() {
    bool inside = all(greaterThanEqual(uvSrc, vec2(0.0))) && all(lessThanEqual(uvSrc, vec2(1.0)));
    outColor = inside ? texture(src, uvSrc) : vec4(0.0);
}
`,oL=`
precision highp float;
varying vec2 uvSrc;
uniform sampler2D src;
void main() {
    bool inside = all(greaterThanEqual(uvSrc, vec2(0.0))) && all(lessThanEqual(uvSrc, vec2(1.0)));
    gl_FragColor = inside ? texture2D(src, uvSrc) : vec4(0.0);
}
`;class oV{constructor(e,t,r,i,s,o){eO.add(this),eD.set(this,void 0),eN.set(this,void 0),e$.set(this,void 0),eH.set(this,void 0),eX.set(this,void 0),ej.set(this,[]),eG.set(this,[]),eq.set(this,[]),eJ.set(this,[]),eK.set(this,"init"),eY.set(this,!1),eQ.set(this,void 0),eZ.set(this,void 0),e4.set(this,[]),oP(this,eD,e,"f"),oP(this,eN,e.gl,"f"),oP(this,e$,r,"f"),oP(this,eH,o,"f"),oP(this,eX,new oC(e,t),"f"),oP(this,eQ,{outputBufferW:1,outputBufferH:1,canvasBufferSize:[1,1],outputViewport:{x:0,y:0,w:1,h:1},elementBufferW:1,elementBufferH:1,contentRectUv:[0,0,1,1],srcRectUv:[0,0,1,1]},"f");let a={time:0,deltaTime:0,pixelRatio:r,resolution:[1,1],mouse:[0,0],mouseViewport:[0,0],intersection:0,enterTime:0,leaveTime:0,enterProgress:0,leaveProgress:0,src:i,target:null,uniforms:{},vfxProps:s,dims:{element:[1,1],elementPixel:[1,1],canvas:[1,1],canvasPixel:[1,1],pixelRatio:r,contentRect:[0,0,1,1],srcRect:[0,0,1,1],canvasRect:[0,0,1,1]},quad:ok,gl:oW(this,eN,"f"),createRenderTarget:e=>oW(this,eO,"m",e0).call(this,e),releaseGeometry:e=>oW(this,eX,"f").release(e),wrapTexture:(e,t)=>oW(this,eO,"m",e2).call(this,e,t),draw:e=>oW(this,eO,"m",e3).call(this,e),blit:(e,t,r)=>oW(this,eO,"m",e5).call(this,e,t,r),clear:e=>oW(this,eO,"m",e6).call(this,e),onContextRestored:e=>{let t=oW(this,eD,"f").onContextRestored(e);return oW(this,eJ,"f").push(t),t}};oP(this,eZ,a,"f")}get ctx(){return oW(this,eZ,"f")}setPhase(e){oP(this,eK,e,"f")}setFrameDims(e){for(let t of(oP(this,eQ,e,"f"),oW(this,eZ,"f").resolution=[e.canvasBufferSize[0],e.canvasBufferSize[1]],oW(this,eq,"f")))t.resolver.resize?.(e.outputBufferW,e.outputBufferH)}setEffectDims(e){oW(this,eZ,"f").dims=e}setFrameState(e){let t=oW(this,eZ,"f");t.time=e.time,t.deltaTime=e.deltaTime,t.mouse=e.mouse,t.mouseViewport=e.mouseViewport,t.intersection=e.intersection,t.enterTime=e.enterTime,t.leaveTime=e.leaveTime,t.enterProgress=e.enterProgress,t.leaveProgress=e.leaveProgress,t.uniforms=e.uniforms}setSrc(e){oW(this,eZ,"f").src=e}setOutput(e){oW(this,eZ,"f").target=e}passthroughCopy(e,t,r){let i=oW(this,eK,"f");oP(this,eK,"render","f");let s=oW(this,eZ,"f").target;oW(this,eZ,"f").target=t;try{let i=oW(this,eQ,"f").outputViewport;oW(this,eQ,"f").outputViewport={...r};let s=oW(this,eZ,"f").vfxProps.glslVersion;oW(this,eO,"m",e8).call(this,{frag:"100"===s?oI:oB,uniforms:{src:e},target:t}),oW(this,eQ,"f").outputViewport=i}finally{oW(this,eZ,"f").target=s,oP(this,eK,i,"f")}}clearRt(e){let t=oW(this,eN,"f"),r=e[oF];t.bindFramebuffer(t.FRAMEBUFFER,r.getWriteFbo().fbo),t.viewport(0,0,e.width,e.height),t.clearColor(0,0,0,0),t.disable(t.SCISSOR_TEST),t.clear(t.COLOR_BUFFER_BIT),t.bindFramebuffer(t.FRAMEBUFFER,null)}tickAutoUpdates(){for(let e of oW(this,e4,"f"))e()}dispose(){for(let e of(oP(this,eK,"disposed","f"),oW(this,eJ,"f")))e();for(let e of(oP(this,eJ,[],"f"),oW(this,eG,"f")))e.resolver.dispose?.();for(let e of(oP(this,eG,[],"f"),oP(this,eq,[],"f"),oW(this,ej,"f")))e.dispose();oP(this,ej,[],"f"),oW(this,eX,"f").dispose(),oP(this,e4,[],"f")}}function oO(e){return void 0===e?["clamp","clamp"]:"string"==typeof e?[e,e]:[e[0],e[1]]}function oD(e,t,r,i,s){let o={__brand:"EffectTexture",get width(){return t()},get height(){return r()},dispose(){i?.()},update(){s?.()}};return Object.defineProperty(o,oA,{value:e}),o}function oN(e,t,r,i){let s={__brand:"EffectRenderTarget",get width(){return t()},get height(){return r()},dispose:i??(()=>{}),generateMipmaps:()=>e.regenerateMipmaps?.()};return Object.defineProperty(s,oF,{value:e}),s}function o$(e){return oN({getReadTexture:()=>e.texture,getWriteFbo:()=>e},()=>e.width,()=>e.height)}function oH(e){return"number"==typeof e?{top:e,right:e,bottom:e,left:e}:Array.isArray(e)?{top:e[0],right:e[1],bottom:e[2],left:e[3]}:{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}eD=new WeakMap,eN=new WeakMap,e$=new WeakMap,eH=new WeakMap,eX=new WeakMap,ej=new WeakMap,eG=new WeakMap,eq=new WeakMap,eJ=new WeakMap,eK=new WeakMap,eY=new WeakMap,eQ=new WeakMap,eZ=new WeakMap,e4=new WeakMap,eO=new WeakSet,e0=function(e){let t,r,i,s,o=e?.persistent??!1,a=e?.float??!1,n=oO(e?.wrap),l=e?.filter,f=e?.mipmap??!1,h=!1!==f,c=!0===f,u=e?.size,d=u?u[0]:oW(this,eQ,"f").outputBufferW,p=u?u[1]:oW(this,eQ,"f").outputBufferH;if(o){let e=u?1:oW(this,e$,"f"),s=u?d:d/e,o=u?p:p/e,f=new ot(oW(this,eD,"f"),s,o,e,a,{wrap:n,filter:l,mipmap:h});t={getReadTexture:()=>f.texture,getWriteFbo:()=>f.target,swap:()=>f.swap(),resize:u?void 0:(e,t)=>{f.resize(e/oW(this,e$,"f"),t/oW(this,e$,"f"))},dispose:()=>f.dispose()},h&&(t.regenerateMipmaps=()=>f.target.generateMipmaps(),t.mipmapAutoRegen=c),r=()=>f.target.width,i=()=>f.target.height}else{let e=new s6(oW(this,eD,"f"),d,p,{float:a,wrap:n,filter:l,mipmap:h});t={getReadTexture:()=>e.texture,getWriteFbo:()=>e,resize:u?void 0:(t,r)=>e.setSize(t,r),dispose:()=>e.dispose()},h&&(t.regenerateMipmaps=()=>e.generateMipmaps(),t.mipmapAutoRegen=c),r=()=>e.width,i=()=>e.height}let m=oN(t,r,i,()=>oW(this,eO,"m",e1).call(this,s));return s={handle:m,resolver:t},oW(this,eG,"f").push(s),u||oW(this,eq,"f").push(s),m},e1=function(e){let t=oW(this,eG,"f").indexOf(e);if(t<0)return;oW(this,eG,"f").splice(t,1);let r=oW(this,eq,"f").indexOf(e);r>=0&&oW(this,eq,"f").splice(r,1),e.resolver.dispose?.()},e2=function(e,t){var r;let i,s,o,a,n=oO(t?.wrap),l=t?.filter,f=null,h=(r=e,!!(i=globalThis.WebGLTexture)&&"function"==typeof i&&r instanceof i||void 0===r.width&&void 0===r.naturalWidth&&void 0===r.videoWidth);if(h){if(!t?.size)throw Error("[VFX-JS] wrapTexture(WebGLTexture) requires opts.size");let[r,i]=t.size;s=new s0(oW(this,eD,"f"),void 0,{autoRegister:!1,externalHandle:e}),o=()=>r,a=()=>i}else{s=new s0(oW(this,eD,"f"),e);let r=t?.size,i=t=>r?"w"===t?r[0]:r[1]:"u">typeof HTMLImageElement&&e instanceof HTMLImageElement?"w"===t?e.naturalWidth:e.naturalHeight:"u">typeof HTMLVideoElement&&e instanceof HTMLVideoElement?"w"===t?e.videoWidth:e.videoHeight:"w"===t?e.width:e.height;o=()=>i("w"),a=()=>i("h");let n="u">typeof HTMLVideoElement&&e instanceof HTMLVideoElement||"u">typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"u">typeof OffscreenCanvas&&e instanceof OffscreenCanvas;(t?.autoUpdate??n)&&(f=()=>{s.needsUpdate=!0})}s.wrapS=n[0],s.wrapT=n[1],void 0!==l&&(s.minFilter=l,s.magFilter=l),oW(this,ej,"f").push(s),f&&oW(this,e4,"f").push(f);let c=!1;return oD(()=>s,o,a,()=>{if(c)return;c=!0;let e=oW(this,ej,"f").indexOf(s);if(-1!==e&&oW(this,ej,"f").splice(e,1),f){let e=oW(this,e4,"f").indexOf(f);-1!==e&&oW(this,e4,"f").splice(e,1)}s.dispose()},h?void 0:()=>{c||(s.needsUpdate=!0)})},e3=function(e){if("render"!==oW(this,eK,"f")){"update"!==oW(this,eK,"f")||oW(this,eY,"f")||(oP(this,eY,!0,"f"),console.warn("[VFX-JS] ctx.draw() called in update(); ignored. Move draws to render()."));return}oW(this,eO,"m",e8).call(this,e)},e5=function(e,t,r){if("render"!==oW(this,eK,"f")){"update"!==oW(this,eK,"f")||oW(this,eY,"f")||(oP(this,eY,!0,"f"),console.warn("[VFX-JS] ctx.blit() called in update(); ignored. Move draws to render()."));return}let i="100"===oW(this,eZ,"f").vfxProps.glslVersion?oL:oU;oW(this,eO,"m",e8).call(this,{frag:i,uniforms:{src:e},target:t,blend:r?.blend,swap:r?.swap})},e6=function(e){if("render"!==oW(this,eK,"f")){"update"!==oW(this,eK,"f")||oW(this,eY,"f")||(oP(this,eY,!0,"f"),console.warn("[VFX-JS] ctx.clear() called in update(); ignored. Move draws to render()."));return}let t=oW(this,eN,"f"),r=oW(this,eZ,"f").target,i=null==e?r:e,s=null===i||i===r;if(t.clearColor(0,0,0,0),s){let e=null===i?null:i[oF].getWriteFbo().fbo,r=oW(this,eQ,"f").outputViewport;t.bindFramebuffer(t.FRAMEBUFFER,e),t.enable(t.SCISSOR_TEST),t.scissor(r.x,r.y,r.w,r.h),t.clear(t.COLOR_BUFFER_BIT),t.disable(t.SCISSOR_TEST),t.bindFramebuffer(t.FRAMEBUFFER,null);return}let o=i[oF];t.disable(t.SCISSOR_TEST);let a=()=>{t.bindFramebuffer(t.FRAMEBUFFER,o.getWriteFbo().fbo),t.clear(t.COLOR_BUFFER_BIT)};a(),o.swap&&(o.swap(),a(),o.swap()),t.bindFramebuffer(t.FRAMEBUFFER,null)},e8=function(e){let t,r,i,s,o,a,n,l=oW(this,eN,"f"),f=e.vert??("100"===oW(this,eZ,"f").vfxProps.glslVersion?o_:oz),h=oW(this,eH,"f").get(f,e.frag,oW(this,eZ,"f").vfxProps.glslVersion),c=oW(this,eZ,"f").target,u=void 0===e.target||null===e.target?c:e.target,d=null===u||u===c;if(null===u)t=null,r=oW(this,eQ,"f").outputViewport.x,i=oW(this,eQ,"f").outputViewport.y,s=oW(this,eQ,"f").outputViewport.w,o=oW(this,eQ,"f").outputViewport.h;else{let e=u[oF];t=e.getWriteFbo().fbo,d?(r=oW(this,eQ,"f").outputViewport.x,i=oW(this,eQ,"f").outputViewport.y,s=oW(this,eQ,"f").outputViewport.w,o=oW(this,eQ,"f").outputViewport.h):(r=0,i=0,s=u.width,o=u.height),a=e.swap,e.mipmapAutoRegen&&(n=e.regenerateMipmaps)}l.bindFramebuffer(l.FRAMEBUFFER,t),l.viewport(r,i,s,o),l.disable(l.SCISSOR_TEST),ox(l,e.blend??(null===u?"premultiplied":"none")),h.use();let p=oW(this,eO,"m",e9).call(this,e.uniforms);h.uploadUniforms(p);let m=e.geometry??ok;m===ok?oW(this,eX,"f").quad.draw():oW(this,eX,"f").resolve(m,h).draw(),n?.(),a&&!1!==e.swap&&a()},e9=function(e){let t={};if(t.contentRectUv={value:oW(this,eQ,"f").contentRectUv},t.srcRectUv={value:oW(this,eQ,"f").srcRectUv},!e)return t;for(let[r,i]of Object.entries(e))t[r]=function(e){if("object"==typeof e&&null!==e&&"__brand"in e)return"EffectRenderTarget"===e.__brand?{value:e[oF].getReadTexture()}:{value:e[oA]()};return{value:e}}(i);return t};let oX={top:0,right:0,bottom:0,left:0};function oj(e){return{top:e.top,right:e.right,bottom:e.bottom,left:e.left}}function oG(e){return{top:e.top,left:e.left,right:e.left+Math.ceil(e.right-e.left),bottom:e.top+Math.ceil(e.bottom-e.top)}}function oq(e,t){return{top:e.top-t.top,right:e.right+t.right,bottom:e.bottom+t.bottom,left:e.left-t.left}}function oJ(e,t,r){return Math.min(Math.max(e,t),r)}function oK(e,t,r,i){let s=Math.min(i-r,t-e);if(s<=0)return 0;let o=oJ(r,e,t);return(oJ(i,e,t)-o)/s}var oY=function(e,t,r,i,s){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,r):s?s.value=r:t.set(e,r),r},oQ=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};class oZ{constructor(e,t,r,i,s,o,a,n){e7.add(this),te.set(this,void 0),tt.set(this,void 0),tr.set(this,void 0),ti.set(this,void 0),ts.set(this,void 0),to.set(this,void 0),ta.set(this,void 0),tn.set(this,void 0),tl.set(this,[]),tf.set(this,[]),th.set(this,void 0),tc.set(this,new Set),tu.set(this,!1),td.set(this,void 0),tp.set(this,oH(0)),tm.set(this,null),oY(this,te,e,"f"),oY(this,tt,t,"f"),oY(this,tr,r,"f"),oY(this,ti,s,"f"),oY(this,ts,n,"f"),oY(this,to,i,"f"),oY(this,th,o,"f"),oY(this,td,a,"f"),oY(this,ta,i.map(()=>oQ(this,e7,"m",tg).call(this)),"f"),0===i.length&&oY(this,tm,oQ(this,e7,"m",tg).call(this),"f"),oY(this,tn,oQ(this,e7,"m",tv).call(this),"f")}get effects(){return oQ(this,to,"f")}get hosts(){return oQ(this,ta,"f")}get renderingIndices(){return oQ(this,tn,"f")}get stages(){return oQ(this,tf,"f")}get hitTestPadBuffer(){return oQ(this,tp,"f")}async initAll(){for(let e=0;e<oQ(this,to,"f").length;e++){let t=oQ(this,to,"f")[e],r=oQ(this,ta,"f")[e];r.setPhase("init");try{t.init&&await t.init(r.ctx)}catch(t){console.error(`[VFX-JS] effect[${e}].init() failed:`,t);for(let t=e-1;t>=0;t--)oQ(this,e7,"m",tw).call(this,t),oQ(this,ta,"f")[t].dispose();throw oQ(this,ta,"f")[e].dispose(),t}r.setPhase("update")}}run(e){if(oQ(this,tu,"f")||!e.isVisible)return;oY(this,tn,oQ(this,e7,"m",tv).call(this),"f");let t=oQ(this,tn,"f").length;for(let t of oQ(this,ta,"f"))t.setFrameState({time:e.time,deltaTime:e.deltaTime,mouse:e.mouse,mouseViewport:e.mouseViewport,intersection:e.intersection,enterTime:e.enterTime,leaveTime:e.leaveTime,enterProgress:e.enterProgress,leaveProgress:e.leaveProgress,uniforms:e.resolvedUniforms});oQ(this,e7,"m",tx).call(this,e);for(let t=0;t<oQ(this,ta,"f").length;t++)oQ(this,ta,"f")[t].setFrameDims(oQ(this,e7,"m",tM).call(this,t,e)),oQ(this,ta,"f")[t].setEffectDims(oQ(this,e7,"m",tT).call(this,t,e));for(let e=0;e<oQ(this,to,"f").length;e++){let t=oQ(this,to,"f")[e];if(!t.update)continue;let r=oQ(this,ta,"f")[e];r.setPhase("update");try{t.update(r.ctx)}catch(r){let t=`${e}:update`;oQ(this,tc,"f").has(t)||(oQ(this,tc,"f").add(t),console.warn(`[VFX-JS] effect[${e}].update() threw; skipping this frame's update:`,r))}}if(0===t)return void(oQ(this,tm,"f")??oQ(this,ta,"f")[0]).passthroughCopy(oQ(this,th,"f"),e.finalTarget,e.elementRectOnCanvasPx);for(let r=0;r<t;r++){let i,s=oQ(this,tn,"f")[r],o=oQ(this,ta,"f")[s],a=oQ(this,to,"f")[s];if(!a.render)continue;o.setPhase("render"),o.tickAutoUpdates();let n=0===r?oQ(this,th,"f"):oQ(this,tl,"f")[r-1].texHandle;o.setSrc(n),r===t-1?i=e.finalTarget:(i=oQ(this,tl,"f")[r].rtHandle,o.clearRt(i)),o.setOutput(i);try{a.render(o.ctx)}catch(l){let e=`${s}:render`;oQ(this,tc,"f").has(e)||(oQ(this,tc,"f").add(e),console.warn(`[VFX-JS] effect[${s}].render() threw; falling back to passthrough:`,l));let a=oQ(this,tf,"f")[r].outputViewport;null===i?o.passthroughCopy(n,null,a):r===t-1?o.passthroughCopy(n,i,a):o.passthroughCopy(n,i,{x:0,y:0,w:i.width,h:i.height})}o.setPhase("update")}}dispose(){if(!oQ(this,tu,"f")){oY(this,tu,!0,"f");for(let e=oQ(this,to,"f").length-1;e>=0;e--)oQ(this,e7,"m",tw).call(this,e),oQ(this,ta,"f")[e].dispose();for(let e of(oQ(this,tm,"f")&&(oQ(this,tm,"f").dispose(),oY(this,tm,null,"f")),oQ(this,tl,"f")))e.fb.dispose();oY(this,tl,[],"f"),oY(this,tf,[],"f")}}async replaceEffects(e){if(oQ(this,tu,"f"))throw Error("[VFX-JS] replaceEffects on disposed chain");let t=oQ(this,to,"f"),r=oQ(this,ta,"f"),i=new Map;for(let e=0;e<t.length;e++)i.set(t[e],r[e]);let s=Array(e.length),o=[];for(let t=0;t<e.length;t++){let r=e[t],a=i.get(r);if(a)s[t]=a,i.delete(r);else{let e=oQ(this,e7,"m",tg).call(this);s[t]=e,o.push({host:e,effect:r})}}for(let e=0;e<o.length;e++){let{host:t,effect:r}=o[e];t.setPhase("init");try{r.init&&await r.init(t.ctx),t.setPhase("update")}catch(r){console.error("[VFX-JS] replaceEffects: new effect init() failed:",r);for(let t=e-1;t>=0;t--){let e=o[t];if(e.effect.dispose)try{e.effect.dispose()}catch(e){console.error("[VFX-JS] dispose during init rollback threw:",e)}e.host.dispose()}throw t.dispose(),r}}for(let[e,t]of i){if(e.dispose)try{e.dispose()}catch(e){console.error("[VFX-JS] effect.dispose() threw during replaceEffects:",e)}t.dispose()}for(let e of oQ(this,tl,"f"))e.fb.dispose();oY(this,tl,[],"f"),oY(this,tf,[],"f"),0!==e.length||oQ(this,tm,"f")?e.length>0&&oQ(this,tm,"f")&&(oQ(this,tm,"f").dispose(),oY(this,tm,null,"f")):oY(this,tm,oQ(this,e7,"m",tg).call(this),"f"),oY(this,to,e,"f"),oY(this,ta,s,"f"),oY(this,tn,oQ(this,e7,"m",tv).call(this),"f"),oQ(this,tc,"f").clear()}}te=new WeakMap,tt=new WeakMap,tr=new WeakMap,ti=new WeakMap,ts=new WeakMap,to=new WeakMap,ta=new WeakMap,tn=new WeakMap,tl=new WeakMap,tf=new WeakMap,th=new WeakMap,tc=new WeakMap,tu=new WeakMap,td=new WeakMap,tp=new WeakMap,tm=new WeakMap,e7=new WeakSet,tv=function(){return oQ(this,to,"f").map((e,t)=>"function"==typeof e.render&&!1!==e.enabled?t:-1).filter(e=>e>=0)},tg=function(){return new oV(oQ(this,te,"f"),oQ(this,tt,"f"),oQ(this,tr,"f"),oQ(this,th,"f"),oQ(this,ti,"f"),oQ(this,ts,"f"))},tw=function(e){let t=oQ(this,to,"f")[e];if(t.dispose)try{t.dispose()}catch(t){console.error(`[VFX-JS] effect[${e}].dispose() threw:`,t)}},tx=function(e){let t=oQ(this,tn,"f").length;if(oY(this,tf,Array(t),"f"),0===t)return;let r=oQ(this,td,"f")?e.canvasBufferSize:e.elementBufferSize,i=[0,0,r[0],r[1]],s=oQ(this,e7,"m",tS).call(this,e),o=i;for(let r=0;r<t;r++){let a=oQ(this,tn,"f")[r],n=oQ(this,to,"f")[a],l=r===t-1,f=oQ(this,e7,"m",ty).call(this,n,o,i,s,e)??o,h=[f[2],f[3]],c=function(e,t){let[r,i,s,o]=e,[a,n,l,f]=t;return l<=0||f<=0?[0,0,1,1]:[(r-a)/l,(i-n)/f,s/l,o/f]}(i,f),u=l?{x:e.elementRectOnCanvasPx.x+f[0],y:e.elementRectOnCanvasPx.y+f[1],w:h[0],h:h[1]}:{x:0,y:0,w:h[0],h:h[1]};oQ(this,tf,"f")[r]={dstRect:f,dstBufferSize:h,contentRectUv:c,outputViewport:u},l||oQ(this,e7,"m",tE).call(this,r,h),o=f}let[a,n,l,f]=oQ(this,tf,"f")[t-1].dstRect;oY(this,tp,oH({top:Math.max(0,n+f-r[1]),right:Math.max(0,a+l-r[0]),bottom:Math.max(0,-n),left:Math.max(0,-a)}),"f")},ty=function(e,t,r,i,s){if(e.outputRect)return e.outputRect(oQ(this,e7,"m",tb).call(this,s,r,t,i))},tb=function(e,t,r,i){let s=e.canvasBufferSize[0]/e.canvasSize[0]||1;return{element:oQ(this,td,"f")?e.canvasSize:e.elementSize,elementPixel:oQ(this,td,"f")?e.canvasBufferSize:e.elementBufferSize,canvas:e.canvasSize,canvasPixel:e.canvasBufferSize,pixelRatio:s,contentRect:t,srcRect:r,canvasRect:i}},tT=function(e,t){let r=oQ(this,td,"f")?t.canvasBufferSize:t.elementBufferSize,i=[0,0,r[0],r[1]],s=oQ(this,e7,"m",tS).call(this,t),o=oQ(this,tn,"f").indexOf(e),a=o<=0?i:oQ(this,tf,"f")[o-1].dstRect;return oQ(this,e7,"m",tb).call(this,t,i,a,s)},tE=function(e,t){let r=oQ(this,tl,"f")[e];if(r&&r.fb.width===t[0]&&r.fb.height===t[1])return;r&&r.fb.dispose();let i=new s6(oQ(this,te,"f"),t[0],t[1]),s=o$(i),o=oD(()=>i.texture,()=>i.width,()=>i.height);oQ(this,tl,"f")[e]={fb:i,rtHandle:s,texHandle:o,bufferSize:t}},tS=function(e){let[t,r]=e.canvasBufferSize;if(oQ(this,td,"f"))return[0,0,t,r];let{x:i,y:s}=e.elementRectOnCanvasPx;return[-i,-s,t,r]},tM=function(e,t){let r,i,s,o,a,n=oQ(this,tn,"f").indexOf(e);if(n<0)s={x:0,y:0,w:r=t.elementBufferSize[0],h:i=t.elementBufferSize[1]},o=[0,0,1,1],a=[0,0,1,1];else{let e=oQ(this,tf,"f")[n];r=e.dstBufferSize[0],i=e.dstBufferSize[1],s=e.outputViewport,o=e.contentRectUv,a=0===n?[0,0,1,1]:oQ(this,tf,"f")[n-1].contentRectUv}return{outputBufferW:r,outputBufferH:i,canvasBufferSize:t.canvasBufferSize,outputViewport:s,elementBufferW:t.elementBufferSize[0],elementBufferH:t.elementBufferSize[1],contentRectUv:o,srcRectUv:a}};var o0=function(e,t,r,i,s){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,r):s?s.value=r:t.set(e,r),r},o1=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};class o2{constructor(e){tk.add(this),tR.set(this,void 0),tC.set(this,new Set),o0(this,tR,e,"f")}freezeInside(e,t){let r={root:e,entries:[]};for(let i of t)!i.frozen&&o4(e,i.element)&&(i.frozen=!0,r.entries.push({e:i,opacity:i.element.style.opacity}),o1(this,tR,"f").showPlain(i));o1(this,tC,"f").add(r);let i=!1;return()=>{if(!i){for(let{e}of(i=!0,o1(this,tC,"f").delete(r),r.entries))e.frozen=!1;requestAnimationFrame(()=>{for(let{e,opacity:t}of r.entries)!e.frozen&&o1(this,tR,"f").isRegistered(e)&&o1(this,tR,"f").hidePlain(e,t)})}}}adopt(e,t){let r=o1(this,tk,"m",tP).call(this,e.element);return!!r&&(e.frozen=!0,r.entries.push({e,opacity:t??e.element.style.opacity}),!0)}}function o4(e,t){return t!==e&&e.contains(t)}function o3(e){this.data=e,this.pos=0}function o5(e){this.stream=new o3(e),this.output={}}tR=new WeakMap,tC=new WeakMap,tk=new WeakSet,tP=function(e){for(let t of o1(this,tC,"f"))if(o4(t.root,e))return t},o3.prototype.readByte=function(){return this.data[this.pos++]},o3.prototype.peekByte=function(){return this.data[this.pos]},o3.prototype.readBytes=function(e){return this.data.subarray(this.pos,this.pos+=e)},o3.prototype.peekBytes=function(e){return this.data.subarray(this.pos,this.pos+e)},o3.prototype.readString=function(e){for(var t="",r=0;r<e;r++)t+=String.fromCharCode(this.readByte());return t},o3.prototype.readBitArray=function(){for(var e=[],t=this.readByte(),r=7;r>=0;r--)e.push(!!(t&1<<r));return e},o3.prototype.readUnsigned=function(e){var t=this.readBytes(2);return e?(t[1]<<8)+t[0]:(t[0]<<8)+t[1]},o5.prototype.parse=function(e){return this.parseParts(this.output,e),this.output},o5.prototype.parseParts=function(e,t){for(var r=0;r<t.length;r++){var i=t[r];this.parsePart(e,i)}},o5.prototype.parsePart=function(e,t){var r,i=t.label;if(!t.requires||t.requires(this.stream,this.output,e))if(t.loop){for(var s=[];t.loop(this.stream);){var o={};this.parseParts(o,t.parts),s.push(o)}e[i]=s}else t.parts?(r={},this.parseParts(r,t.parts),e[i]=r):t.parser?(r=t.parser(this.stream,this.output,e),t.skip||(e[i]=r)):t.bits&&(e[i]=this.parseBits(t.bits))},o5.prototype.parseBits=function(e){var t={},r=this.stream.readBitArray();for(var i in e){var s=e[i];s.length?t[i]=r.slice(s.index,s.index+s.length).reduce(function(e,t){return 2*e+t},0):t[i]=r[s.index]}return t};let o6=function(){return function(e){return e.readByte()}},o8=function(e){return function(t){return t.readBytes(e)}},o9=function(e){return function(t){return t.readString(e)}},o7=function(e){return function(t){return t.readUnsigned(e)}},ae=function(e,t){return function(r,i,s){for(var o=t(r,i,s),a=Array(o),n=0;n<o;n++)a[n]=r.readBytes(e);return a}};var at={label:"blocks",parser:function(e){for(var t=[],r=0,i=e.readByte();0!==i;i=e.readByte())t.push(e.readBytes(i)),r+=i;var s=new Uint8Array(r);r=0;for(var o=0;o<t.length;o++)s.set(t[o],r),r+=t[o].length;return s}},ar={label:"gce",requires:function(e){var t=e.peekBytes(2);return 33===t[0]&&249===t[1]},parts:[{label:"codes",parser:o8(2),skip:!0},{label:"byteSize",parser:o6()},{label:"extras",bits:{future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}}},{label:"delay",parser:o7(!0)},{label:"transparentColorIndex",parser:o6()},{label:"terminator",parser:o6(),skip:!0}]},ai={label:"image",requires:function(e){return 44===e.peekByte()},parts:[{label:"code",parser:o6(),skip:!0},{label:"descriptor",parts:[{label:"left",parser:o7(!0)},{label:"top",parser:o7(!0)},{label:"width",parser:o7(!0)},{label:"height",parser:o7(!0)},{label:"lct",bits:{exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}}}]},{label:"lct",requires:function(e,t,r){return r.descriptor.lct.exists},parser:ae(3,function(e,t,r){return Math.pow(2,r.descriptor.lct.size+1)})},{label:"data",parts:[{label:"minCodeSize",parser:o6()},at]}]},as={label:"text",requires:function(e){var t=e.peekBytes(2);return 33===t[0]&&1===t[1]},parts:[{label:"codes",parser:o8(2),skip:!0},{label:"blockSize",parser:o6()},{label:"preData",parser:function(e,t,r){return e.readBytes(r.text.blockSize)}},at]},ao={label:"application",requires:function(e,t,r){var i=e.peekBytes(2);return 33===i[0]&&255===i[1]},parts:[{label:"codes",parser:o8(2),skip:!0},{label:"blockSize",parser:o6()},{label:"id",parser:function(e,t,r){return e.readString(r.blockSize)}},at]},aa={label:"comment",requires:function(e,t,r){var i=e.peekBytes(2);return 33===i[0]&&254===i[1]},parts:[{label:"codes",parser:o8(2),skip:!0},at]},an=[{label:"header",parts:[{label:"signature",parser:o9(3)},{label:"version",parser:o9(3)}]},{label:"lsd",parts:[{label:"width",parser:o7(!0)},{label:"height",parser:o7(!0)},{label:"gct",bits:{exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}}},{label:"backgroundColorIndex",parser:o6()},{label:"pixelAspectRatio",parser:o6()}]},{label:"gct",requires:function(e,t){return t.lsd.gct.exists},parser:ae(3,function(e,t){return Math.pow(2,t.lsd.gct.size+1)})},{label:"frames",parts:[ar,ao,aa,ai,as],loop:function(e){var t=e.peekByte();return 33===t||44===t}}];function al(e){var t=new o5(new Uint8Array(e));this.raw=t.parse(an),this.raw.hasImages=!1;for(var r=0;r<this.raw.frames.length;r++)if(this.raw.frames[r].image){this.raw.hasImages=!0;break}}al.prototype.decompressFrame=function(e,t){if(e>=this.raw.frames.length)return null;var r=this.raw.frames[e];if(r.image){var i=r.image.descriptor.width*r.image.descriptor.height,s=function(e,t,r){var i,s,o,a,n,l,f,h,c,u,d,p,m,v,g,w=Array(r),x=Array(4096),y=Array(4096),b=Array(4097);for(n=(s=1<<e)+1,i=s+2,f=-1,o=(1<<(a=e+1))-1,c=0;c<s;c++)x[c]=0,y[c]=c;for(d=h=p=m=g=v=0,u=0;u<r;){if(0===m){if(h<a){d+=t[v]<<h,h+=8,v++;continue}if(c=d&o,d>>=a,h-=a,c>i||c==n)break;if(c==s){o=(1<<(a=e+1))-1,i=s+2,f=-1;continue}if(-1==f){b[m++]=y[c],f=c,p=c;continue}for(l=c,c==i&&(b[m++]=p,c=f);c>s;)b[m++]=y[c],c=x[c];p=255&y[c],b[m++]=p,i<4096&&(x[i]=f,y[i]=p,(++i&o)==0&&i<4096&&(a++,o+=i)),f=l}m--,w[g++]=b[m],u++}for(u=g;u<r;u++)w[u]=0;return w}(r.image.data.minCodeSize,r.image.data.blocks,i);r.image.descriptor.lct.interlaced&&(s=function(e,t){for(var r=Array(e.length),i=e.length/t,s=[0,4,2,1],o=[8,8,4,2],a=0,n=0;n<4;n++)for(var l=s[n];l<i;l+=o[n])!function(i,s){var o=e.slice(s*t,(s+1)*t);r.splice.apply(r,[i*t,t].concat(o))}(l,a),a++;return r}(s,r.image.descriptor.width));var o={pixels:s,dims:{top:r.image.descriptor.top,left:r.image.descriptor.left,width:r.image.descriptor.width,height:r.image.descriptor.height}};return r.image.descriptor.lct&&r.image.descriptor.lct.exists?o.colorTable=r.image.lct:o.colorTable=this.raw.gct,r.gce&&(o.delay=10*(r.gce.delay||10),o.disposalType=r.gce.extras.disposal,r.gce.extras.transparentColorGiven&&(o.transparentIndex=r.gce.transparentColorIndex)),t&&(o.patch=function(e){for(var t=e.pixels.length,r=new Uint8ClampedArray(4*t),i=0;i<t;i++){var s=4*i,o=e.pixels[i],a=e.colorTable[o];r[s]=a[0],r[s+1]=a[1],r[s+2]=a[2],r[s+3]=255*(o!==e.transparentIndex)}return r}(o)),o}return null},al.prototype.decompressFrames=function(e,t,r){void 0===t&&(t=0),r=void 0===r?this.raw.frames.length:Math.min(r,this.raw.frames.length);for(var i=[],s=t;s<r;s++)this.raw.frames[s].image&&i.push(this.decompressFrame(s,e));return i};class af{static async create(e,t){let r=await fetch(e).then(e=>e.arrayBuffer()).then(e=>new al(e)),i=r.decompressFrames(!0,void 0,void 0),{width:s,height:o}=r.raw.lsd;return new af(i,s,o,t)}constructor(e,t,r,i){this.frames=[],this.index=0,this.playTime=0,this.frames=e,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.pixelRatio=i,this.canvas.width=t,this.canvas.height=r,this.startTime=Date.now()}getCanvas(){return this.canvas}update(){let e=Date.now()-this.startTime;for(;this.playTime<e;){let e=this.frames[this.index%this.frames.length];this.playTime+=e.delay,this.index++}let t=this.frames[this.index%this.frames.length],r=new ImageData(t.patch,t.dims.width,t.dims.height);this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.putImageData(r,t.dims.left,t.dims.top)}}var ah=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};class ac{constructor(e,t=!1){this.isContextLost=!1,tW.set(this,new Set),tA.set(this,new Set),tF.set(this,new Set),tz.set(this,e=>{for(let t of(e.preventDefault(),this.isContextLost=!0,ah(this,tA,"f")))t()}),t_.set(this,()=>{this.isContextLost=!1;let e=this.gl;for(let t of(e.getExtension("EXT_color_buffer_float"),e.getExtension("EXT_color_buffer_half_float"),this.floatBlend=!!e.getExtension("EXT_float_blend"),ah(this,tW,"f")))t.restore();for(let e of ah(this,tF,"f"))e()});let r=e.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:t});if(!r)throw Error("[VFX-JS] WebGL2 is not available.");this.gl=r,this.canvas=e,r.getExtension("EXT_color_buffer_float"),r.getExtension("EXT_color_buffer_half_float"),this.floatBlend=!!r.getExtension("EXT_float_blend"),this.floatLinearFilter=!!r.getExtension("OES_texture_float_linear"),this.maxTextureSize=r.getParameter(r.MAX_TEXTURE_SIZE),e.addEventListener("webglcontextlost",ah(this,tz,"f"),!1),e.addEventListener("webglcontextrestored",ah(this,t_,"f"),!1)}setSize(e,t,r){let i=Math.floor(e*r),s=Math.floor(t*r);(this.canvas.width!==i||this.canvas.height!==s)&&(this.canvas.width=i,this.canvas.height=s)}addResource(e){ah(this,tW,"f").add(e)}removeResource(e){ah(this,tW,"f").delete(e)}onContextLost(e){return ah(this,tA,"f").add(e),()=>ah(this,tA,"f").delete(e)}onContextRestored(e){return ah(this,tF,"f").add(e),()=>ah(this,tF,"f").delete(e)}}tW=new WeakMap,tA=new WeakMap,tF=new WeakMap,tz=new WeakMap,t_=new WeakMap;var au=function(e,t,r,i,s){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,r):s?s.value=r:t.set(e,r),r},ad=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};class ap{constructor(e){tB.add(this),tI.set(this,void 0),tU.set(this,void 0),au(this,tI,e,"f"),this.gl=e.gl,ad(this,tB,"m",tL).call(this),e.addResource(this)}restore(){ad(this,tB,"m",tL).call(this)}draw(){let e=this.gl;e.bindVertexArray(this.vao),e.drawArrays(e.TRIANGLES,0,6)}dispose(){ad(this,tI,"f").removeResource(this),this.gl.deleteVertexArray(this.vao),this.gl.deleteBuffer(ad(this,tU,"f"))}}function am(e){return{phase:"hidden",direction:1,enterProgress:0,leaveProgress:0,isIn:!1,wasAbove:!1,wasBelow:!1,lastTime:e}}function av(e,t){e.phase=t,e.direction=1,e.enterProgress=+("shown"===t),e.leaveProgress=0}function ag(e){return Math.min(Math.max(e,0),1)}function aw(e,t,r,i={}){return new s6(e,t,r,{float:i.float??!1})}function ax(e,t){let r;r=t.renderingToBuffer?"none":t.premultipliedAlpha?"premultiplied":"normal";let i=t.glslVersion??od(t.fragmentShader);return new ow(e,t.vertexShader??("100"===i?oi:or),t.fragmentShader,t.uniforms,r,i)}tI=new WeakMap,tU=new WeakMap,tB=new WeakSet,tL=function(){let e=this.gl,t=e.createVertexArray(),r=e.createBuffer();if(!t||!r)throw Error("[VFX-JS] Failed to create quad VAO");this.vao=t,au(this,tU,r,"f");let i=new Float32Array([-1,-1,0,1,-1,0,-1,1,0,-1,1,0,1,-1,0,1,1,0]);e.bindVertexArray(t),e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,i,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0),e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null)};var ay=function(e,t,r,i,s){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,r):s?s.value=r:t.set(e,r),r},ab=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};class aT{constructor(e,t,r,i,s,o,a,n){if(tV.set(this,void 0),tO.set(this,void 0),tD.set(this,void 0),tN.set(this,void 0),t$.set(this,void 0),tH.set(this,void 0),ay(this,tN,i??!1,"f"),ay(this,t$,s??!1,"f"),ay(this,tH,o,"f"),ay(this,tO,{},"f"),ay(this,tV,{src:{value:null},offset:{value:new of},resolution:{value:new of},viewport:{value:new oh},time:{value:0},mouse:{value:new of},passIndex:{value:0}},"f"),r)for(let[e,t]of Object.entries(r))"function"==typeof t?(ab(this,tO,"f")[e]=t,ab(this,tV,"f")[e]={value:t()}):ab(this,tV,"f")[e]={value:t};this.pass=ax(e,{fragmentShader:t,uniforms:ab(this,tV,"f"),renderingToBuffer:a??!1,premultipliedAlpha:!0,glslVersion:n})}get uniforms(){return ab(this,tV,"f")}setUniforms(e,t,r,i,s,o){ab(this,tV,"f").src.value=e,ab(this,tV,"f").resolution.value.set(r.w*t,r.h*t),ab(this,tV,"f").offset.value.set(r.x*t,r.y*t),ab(this,tV,"f").time.value=i,ab(this,tV,"f").mouse.value.set(s*t,o*t)}updateCustomUniforms(e){for(let[e,t]of Object.entries(ab(this,tO,"f")))ab(this,tV,"f")[e]&&(ab(this,tV,"f")[e].value=t());if(e)for(let[t,r]of Object.entries(e))ab(this,tV,"f")[t]&&(ab(this,tV,"f")[t].value=r())}initializeBackbuffer(e,t,r,i){ab(this,tN,"f")&&!ab(this,tD,"f")&&(ab(this,tH,"f")?ay(this,tD,new ot(e,ab(this,tH,"f")[0],ab(this,tH,"f")[1],1,ab(this,t$,"f")),"f"):ay(this,tD,new ot(e,t,r,i,ab(this,t$,"f")),"f"))}resizeBackbuffer(e,t){ab(this,tD,"f")&&!ab(this,tH,"f")&&ab(this,tD,"f").resize(e,t)}registerBufferUniform(e){ab(this,tV,"f")[e]||(ab(this,tV,"f")[e]={value:null})}get backbuffer(){return ab(this,tD,"f")}get persistent(){return ab(this,tN,"f")}get float(){return ab(this,t$,"f")}get size(){return ab(this,tH,"f")}dispose(){this.pass.dispose(),ab(this,tD,"f")?.dispose()}}tV=new WeakMap,tO=new WeakMap,tD=new WeakMap,tN=new WeakMap,t$=new WeakMap,tH=new WeakMap;var aE=function(e,t,r,i,s){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,r):s?s.value=r:t.set(e,r),r},aS=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};class aM{constructor(e){tX.set(this,void 0),tj.set(this,new Map),aE(this,tX,e,"f")}get(e,t,r){let i=`${t}\0${e}\0${r??""}`,s=aS(this,tj,"f").get(i);return s||(s=new op(aS(this,tX,"f"),e,t,r),aS(this,tj,"f").set(i,s)),s}get size(){return aS(this,tj,"f").size}dispose(){for(let e of aS(this,tj,"f").values())e.dispose();aS(this,tj,"f").clear()}}tX=new WeakMap,tj=new WeakMap;var ak=function(e,t,r,i,s){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,r):s?s.value=r:t.set(e,r),r},aR=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};let aC=new Map,aP=!1;function aW(e,t){return"hic"===e||!0===t?null:"number"==typeof t?t.toString():"video"===e?"0.0001":"0"}function aA(e,t){let r=e.getContext("2d");r&&(r.clearRect(0,0,e.width,e.height),r.drawImage(t,0,0,e.width,e.height))}class aF{constructor(e,t){tG.add(this),tq.set(this,void 0),tJ.set(this,void 0),tK.set(this,void 0),tY.set(this,void 0),tQ.set(this,void 0),tZ.set(this,void 0),t0.set(this,void 0),t1.set(this,[]),t2.set(this,void 0),t4.set(this,new Map),t3.set(this,null),t5.set(this,!1),t6.set(this,new WeakSet),t8.set(this,{}),t9.set(this,{}),t7.set(this,0),re.set(this,void 0),rt.set(this,2),rr.set(this,[]),ri.set(this,new o2({showPlain:e=>{if("hic"===e.type){let t=e.srcTexture.source;t instanceof OffscreenCanvas&&aA(e.element,t)}else e.element.style.setProperty("opacity",e.originalOpacity.toString())},hidePlain:(e,t)=>{if("hic"===e.type){let t=e.element;t.getContext("2d")?.clearRect(0,0,t.width,t.height)}else e.element.style.opacity=t},isRegistered:e=>aR(this,rr,"f").includes(e)})),rs.set(this,0),ro.set(this,1),ra.set(this,Date.now()/1e3),rn.set(this,!1),rl.set(this,oH(0)),rf.set(this,oH(0)),rh.set(this,[0,0]),rc.set(this,0),ru.set(this,0),rd.set(this,0),rp.set(this,0),rm.set(this,new WeakMap),rg.set(this,async()=>{for(let e of aR(this,rr,"f"))if("text"===e.type&&e.isInViewport){let t=e.element.getBoundingClientRect(),r=Math.ceil(t.width),i=Math.ceil(t.height);(r!==e.width||i!==e.height)&&(await aR(this,tG,"m",rx).call(this,e),e.width=r,e.height=i)}for(let e of aR(this,rr,"f"))if("text"===e.type&&!e.isInViewport){let t=e.element.getBoundingClientRect(),r=Math.ceil(t.width),i=Math.ceil(t.height);(r!==e.width||i!==e.height)&&(await aR(this,tG,"m",rx).call(this,e),e.width=r,e.height=i)}}),rw.set(this,e=>{ak(this,rd,e.clientX,"f"),ak(this,rp,window.innerHeight-e.clientY,"f")}),rE.set(this,()=>{this.isPlaying()&&(this.render(),ak(this,re,requestAnimationFrame(aR(this,rE,"f")),"f"))}),ak(this,tq,e,"f"),ak(this,tJ,t,"f"),ak(this,tK,new ac(t,e.preserveDrawingBuffer),"f"),ak(this,tY,aR(this,tK,"f").gl,"f"),aR(this,tY,"f").clearColor(0,0,0,0),ak(this,rt,e.pixelRatio,"f"),ak(this,ro,e.timeScale,"f"),ak(this,ra,Date.now()/1e3,"f"),ak(this,tQ,new ap(aR(this,tK,"f")),"f"),ak(this,tZ,new aM(aR(this,tK,"f")),"f"),window.addEventListener("resize",aR(this,rg,"f")),window.addEventListener("pointermove",aR(this,rw,"f")),aR(this,rg,"f").call(this),ak(this,t0,new oy(aR(this,tK,"f")),"f"),aR(this,tG,"m",rz).call(this,e.postEffects),aR(this,tK,"f").onContextRestored(()=>{aR(this,tY,"f").clearColor(0,0,0,0)})}destroy(){for(let e of(this.stop(),window.removeEventListener("resize",aR(this,rg,"f")),window.removeEventListener("pointermove",aR(this,rw,"f")),aR(this,t2,"f")?.dispose(),aR(this,t4,"f").values()))e?.dispose();for(let e of aR(this,t1,"f"))e.pass.dispose();aR(this,t3,"f")&&(aR(this,t3,"f").dispose(),ak(this,t3,null,"f"),ak(this,t5,!1,"f")),aR(this,t0,"f").dispose(),aR(this,tZ,"f").dispose(),aR(this,tQ,"f").dispose()}async addElement(e,t={},r){let i,s,o;if(void 0!==t.effect)return aR(this,tG,"m",rb).call(this,e,t,t.effect,r);let a=aR(this,tG,"m",rT).call(this,t),n=e.getBoundingClientRect(),l=aD(e)?oG(n):oj(n),[f,h]=a_(t.overflow),c=oq(l,h),u=aB(t.intersection),d=""===e.style.opacity?1:Number.parseFloat(e.style.opacity),p=!1;if(e instanceof HTMLImageElement){s="img";let t=sl(e);if(p=!!t.match(/\.gif/i)){let r=await af.create(t,aR(this,rt,"f"));aC.set(e,r),i=new s0(aR(this,tK,"f"),r.getCanvas())}else{let e=await s4(t);i=new s0(aR(this,tK,"f"),e)}}else if(e instanceof HTMLVideoElement)i=new s0(aR(this,tK,"f"),e),s="video";else if(e instanceof HTMLCanvasElement)sa(e)&&r?(i=new s0(aR(this,tK,"f"),r),s="hic"):(i=new s0(aR(this,tK,"f"),e),s="canvas");else{let t=await ob(e,d,void 0,this.maxTextureSize);i=new s0(aR(this,tK,"f"),t),s="text"}let[m,v]=aL(t.wrap);i.wrapS=m,i.wrapT=v,i.needsUpdate=!0;let g=t.autoCrop??!0,w=aW(s,t.overlay),x={src:{value:i},resolution:{value:new of},offset:{value:new of},time:{value:0},enterTime:{value:-1},leaveTime:{value:-1},enterProgress:{value:0},leaveProgress:{value:0},mouse:{value:new of},intersection:{value:0},viewport:{value:new oh},autoCrop:{value:g}},y={};if(void 0!==t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r?(x[e]={value:r()},y[e]=r):x[e]={value:r};if(t.backbuffer){let e,t;e=(c.right-c.left)*aR(this,rt,"f"),t=(c.bottom-c.top)*aR(this,rt,"f"),x.backbuffer={value:(o=new ot(aR(this,tK,"f"),e,t,aR(this,rt,"f"),!1)).texture}}let b=new Map,T=new Map;for(let e=0;e<a.length-1;e++){let t=a[e].target??`pass${e}`;a[e]={...a[e],target:t};let r=a[e].size,i=r?r[0]:(c.right-c.left)*aR(this,rt,"f"),s=r?r[1]:(c.bottom-c.top)*aR(this,rt,"f");if(a[e].persistent){let i=r?1:aR(this,rt,"f"),s=r?r[0]:c.right-c.left,o=r?r[1]:c.bottom-c.top;T.set(t,new ot(aR(this,tK,"f"),s,o,i,a[e].float))}else b.set(t,aw(aR(this,tK,"f"),i,s,{float:a[e].float}))}let E=[];for(let e=0;e<a.length;e++){let t=a[e],r=t.frag,i={...x},s={};for(let[e,s]of b)e!==t.target&&r.match(RegExp(`uniform\\s+sampler2D\\s+${e}\\b`))&&(i[e]={value:s.texture});for(let[e,t]of T)r.match(RegExp(`uniform\\s+sampler2D\\s+${e}\\b`))&&(i[e]={value:t.texture});if(t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r?(i[e]={value:r()},s[e]=r):i[e]={value:r};let o=ax(aR(this,tK,"f"),{vertexShader:t.vert,fragmentShader:r,uniforms:i,renderingToBuffer:void 0!==t.target,glslVersion:t.glslVersion});E.push({pass:o,uniforms:i,uniformGenerators:{...y,...s},target:t.target,persistent:t.persistent,float:t.float,size:t.size,backbuffer:t.target?T.get(t.target):void 0})}let S=aR(this,rs,"f"),M={type:s,element:e,isInViewport:!1,intersectionState:am(S),width:l.right-l.left,height:l.bottom-l.top,passes:E,bufferTargets:b,startTime:S,enterTime:S,leaveTime:-1/0,release:t.release??1/0,isGif:p,isFullScreen:f,overflow:h,intersection:u,originalOpacity:d,srcTexture:i,zIndex:t.zIndex??0,backbuffer:o,autoCrop:g};aR(this,tG,"m",rP).call(this,M,l,S),aR(this,tG,"m",ry).call(this,M,w)}async updateElementEffects(e,t){let r=aR(this,rr,"f").find(t=>t.element===e);if(!r)throw Error("[VFX-JS] updateElementEffects: element not registered");if(!r.chain)throw Error("[VFX-JS] updateElementEffects: element is on the shader path; effect-only updates are not supported");let i=Array.isArray(t)?[...t]:[t],s=r.chain.effects,o=new Set(s),a=[];for(let e of i)if(!o.has(e)){if(aR(this,t6,"f").has(e))throw Error("[VFX-JS] Effect instance already attached. Construct a new instance per `vfx.add()` / `postEffect`.");a.push(e)}await r.chain.replaceEffects(i);let n=new Set(i);for(let e of s)n.has(e)||aR(this,t6,"f").delete(e);for(let e of a)aR(this,t6,"f").add(e)}removeElement(e){let t=aR(this,rr,"f").findIndex(t=>t.element===e);if(-1!==t){let r=aR(this,rr,"f").splice(t,1)[0];if(r.chain)aR(this,tG,"m",rR).call(this,r.chain.effects),r.chain.dispose();else{for(let e of r.bufferTargets.values())e.dispose();for(let e of r.passes)e.pass.dispose(),e.backbuffer?.dispose();r.backbuffer?.dispose()}r.srcTexture.dispose(),e.style.setProperty("opacity",r.originalOpacity.toString())}}updateTextElement(e){let t=aR(this,rr,"f").findIndex(t=>t.element===e);return -1!==t?aR(this,tG,"m",rx).call(this,aR(this,rr,"f")[t]):Promise.resolve()}async updateImageElement(e){let t=aR(this,rr,"f").find(t=>t.element===e);if(t?.type!=="img"||t.isGif)return;let r=await s4(sl(e)),i=t.srcTexture,s=new s0(aR(this,tK,"f"),r);s.wrapS=i.wrapS,s.wrapT=i.wrapT,s.needsUpdate=!0,!t.chain&&t.passes.length>0&&(t.passes[0].uniforms.src.value=s),t.srcTexture=s,i.dispose()}updateCanvasElement(e){let t=aR(this,rr,"f").find(t=>t.element===e);if(t){let r=t.srcTexture,i=new s0(aR(this,tK,"f"),e);i.wrapS=r.wrapS,i.wrapT=r.wrapT,i.needsUpdate=!0,!t.chain&&t.passes.length>0&&(t.passes[0].uniforms.src.value=i),t.srcTexture=i,r.dispose()}}updateHICTexture(e,t){let r=aR(this,rr,"f").find(t=>t.element===e);if(r?.type!=="hic")return;r.frozen&&aA(e,t);let i=r.srcTexture;if(i.source===t)i.needsUpdate=!0;else{let e=new s0(aR(this,tK,"f"),t);e.wrapS=i.wrapS,e.wrapT=i.wrapT,e.needsUpdate=!0,!r.chain&&r.passes.length>0&&(r.passes[0].uniforms.src.value=e),r.srcTexture=e,i.dispose()}}freezeInside(e){return aR(this,ri,"f").freezeInside(e,aR(this,rr,"f"))}isFrozen(e){return aR(this,rr,"f").some(t=>t.element===e&&t.frozen)}forceRender(e){let t=aR(this,rr,"f").find(t=>t.element===e);return!t||t.forceRender?()=>{}:(t.forceRender=!0,()=>{t.forceRender=!1})}get maxTextureSize(){return aR(this,tK,"f").maxTextureSize}isPlaying(){return void 0!==aR(this,re,"f")}play(){this.isPlaying()||(ak(this,ra,Date.now()/1e3,"f"),ak(this,re,requestAnimationFrame(aR(this,rE,"f")),"f"))}get time(){return aR(this,rs,"f")}setTime(e){ak(this,rs,e,"f"),ak(this,rn,!0,"f")}get timeScale(){return aR(this,ro,"f")}set timeScale(e){ak(this,ro,e,"f")}stop(){void 0!==aR(this,re,"f")&&(cancelAnimationFrame(aR(this,re,"f")),ak(this,re,void 0,"f"))}render(){let e=Date.now()/1e3;aR(this,rn,"f")?ak(this,rn,!1,"f"):ak(this,rs,aR(this,rs,"f")+(e-aR(this,ra,"f"))*aR(this,ro,"f"),"f"),ak(this,ra,e,"f");let t=aR(this,rs,"f"),r=aR(this,tY,"f");aR(this,tG,"m",rv).call(this),r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,aR(this,tJ,"f").width,aR(this,tJ,"f").height),r.clear(r.COLOR_BUFFER_BIT);let i=aR(this,rl,"f").right-aR(this,rl,"f").left,s=aR(this,rl,"f").bottom-aR(this,rl,"f").top,o={x:0,y:0,w:i,h:s},a=aR(this,tG,"m",rM).call(this);for(let e of(a&&(aR(this,tG,"m",rU).call(this,i,s),aR(this,t2,"f")&&(r.bindFramebuffer(r.FRAMEBUFFER,aR(this,t2,"f").fbo),r.clear(r.COLOR_BUFFER_BIT),r.bindFramebuffer(r.FRAMEBUFFER,null))),aR(this,rr,"f"))){if(e.frozen){e.intersectionState.lastTime=t;continue}let r=e.element.getBoundingClientRect(),n="text"===e.type?oG(r):oj(r),l=aR(this,tG,"m",rP).call(this,e,n,t);if(!l.isVisible)continue;if(e.chain){aR(this,tG,"m",rS).call(this,e,n,l,t);continue}let f=e.passes[0].uniforms;for(let r of(f.time.value=t-e.startTime,f.resolution.value.set((n.right-n.left)*aR(this,rt,"f"),(n.bottom-n.top)*aR(this,rt,"f")),f.mouse.value.set((aR(this,rd,"f")+aR(this,rc,"f"))*aR(this,rt,"f"),(aR(this,rp,"f")+aR(this,ru,"f"))*aR(this,rt,"f")),e.passes))for(let[e,t]of Object.entries(r.uniformGenerators))r.uniforms[e].value=t();aC.get(e.element)?.update(),("video"===e.type||e.isGif)&&(f.src.value.needsUpdate=!0);let h=s9(n,s,aR(this,rc,"f"),aR(this,ru,"f")),c=s9(l.rectWithOverflow,s,aR(this,rc,"f"),aR(this,ru,"f"));e.backbuffer&&(e.passes[0].uniforms.backbuffer.value=e.backbuffer.texture);{let t=e.isFullScreen?o:c,r=Math.max(1,t.w*aR(this,rt,"f")),i=Math.max(1,t.h*aR(this,rt,"f")),s=Math.max(1,t.w),a=Math.max(1,t.h);for(let t=0;t<e.passes.length-1;t++){let o=e.passes[t];if(!o.size)if(o.backbuffer)o.backbuffer.resize(s,a);else{let t=e.bufferTargets.get(o.target);t&&(t.width!==r||t.height!==i)&&t.setSize(r,i)}}}let u=new Map;for(let t of e.passes)t.backbuffer&&t.target&&u.set(t.target,t.backbuffer.texture);let d=e.srcTexture;for(let t=0;t<e.passes.length-1;t++){let i=e.passes[t],s=e.isFullScreen?o:c;for(let[e,t]of(i.uniforms.src.value=d,u))i.uniforms[e]&&(i.uniforms[e].value=t);for(let[e,t]of Object.entries(i.uniformGenerators))i.uniforms[e]&&(i.uniforms[e].value=t());let a=i.size?{x:0,y:0,w:i.size[0],h:i.size[1]}:{x:0,y:0,w:s.w,h:s.h},n=function(e,t,r,i,s,o,a){let n=s[0]+o[0]-r.x,l=s[1]+o[1]-r.y;return i?{resolution:[i[0],i[1]],offset:[0,0],mouse:[n/r.w*i[0],l/r.h*i[1]]}:{resolution:[e.width*a,e.height*a],offset:[(t.x-r.x)*a,(t.y-r.y)*a],mouse:[n*a,l*a]}}(r,h,s,i.size,[aR(this,rd,"f"),aR(this,rp,"f")],[aR(this,rc,"f"),aR(this,ru,"f")],aR(this,rt,"f"));if(i.uniforms.resolution.value.set(...n.resolution),i.uniforms.offset.value.set(...n.offset),i.uniforms.mouse.value.set(...n.mouse),i.backbuffer)aR(this,tG,"m",rA).call(this,i.pass,i.backbuffer.target,a,i.uniforms,!0),i.backbuffer.swap(),d=i.backbuffer.texture;else{let t=e.bufferTargets.get(i.target);if(!t)continue;aR(this,tG,"m",rA).call(this,i.pass,t,a,i.uniforms,!0),d=t.texture}i.target&&u.set(i.target,d)}let p=e.passes[e.passes.length-1];for(let[e,t]of(p.uniforms.src.value=d,p.uniforms.resolution.value.set(r.width*aR(this,rt,"f"),r.height*aR(this,rt,"f")),p.uniforms.offset.value.set(h.x*aR(this,rt,"f"),h.y*aR(this,rt,"f")),p.uniforms.mouse.value.set((aR(this,rd,"f")+aR(this,rc,"f"))*aR(this,rt,"f"),(aR(this,rp,"f")+aR(this,ru,"f"))*aR(this,rt,"f")),u))p.uniforms[e]&&(p.uniforms[e].value=t);for(let[e,t]of Object.entries(p.uniformGenerators))p.uniforms[e]&&(p.uniforms[e].value=t());e.backbuffer?(p.uniforms.backbuffer.value=e.backbuffer.texture,e.isFullScreen?(e.backbuffer.resize(i,s),aR(this,tG,"m",rF).call(this,e,h.x,h.y),aR(this,tG,"m",rA).call(this,p.pass,e.backbuffer.target,o,p.uniforms,!0),e.backbuffer.swap(),aR(this,t0,"f").setUniforms(e.backbuffer.texture,aR(this,rt,"f"),o),aR(this,tG,"m",rA).call(this,aR(this,t0,"f").pass,a&&aR(this,t2,"f")||null,o,aR(this,t0,"f").uniforms,!1)):(e.backbuffer.resize(c.w,c.h),aR(this,tG,"m",rF).call(this,e,e.overflow.left,e.overflow.bottom),aR(this,tG,"m",rA).call(this,p.pass,e.backbuffer.target,e.backbuffer.getViewport(),p.uniforms,!0),e.backbuffer.swap(),aR(this,t0,"f").setUniforms(e.backbuffer.texture,aR(this,rt,"f"),c),aR(this,tG,"m",rA).call(this,aR(this,t0,"f").pass,a&&aR(this,t2,"f")||null,c,aR(this,t0,"f").uniforms,!1))):(aR(this,tG,"m",rF).call(this,e,h.x,h.y),aR(this,tG,"m",rA).call(this,p.pass,a&&aR(this,t2,"f")||null,e.isFullScreen?o:c,p.uniforms,!1))}a&&aR(this,t2,"f")&&(aR(this,t3,"f")&&aR(this,t5,"f")?aR(this,tG,"m",rB).call(this,o,t):aR(this,tG,"m",rI).call(this,o,t))}}function az(e,t){return t.left<=e.right&&t.right>=e.left&&t.top<=e.bottom&&t.bottom>=e.top}function a_(e){return!0===e?[!0,oX]:void 0===e?[!1,oX]:[!1,oH(e)]}function aB(e){let t=e?.threshold??0,r=oH(e?.rootMargin??0),i=e?.leaveThreshold??t,s=e?.duration??1;return Number.isFinite(s)&&s>0||(aP||(aP=!0,console.warn(`[VFX-JS] \`intersection.duration\` must be a finite number above 0, got ${s}. Using 1 instead.`)),s=1),{threshold:t,leaveThreshold:i,rootMargin:r,duration:s}}function aI(e,t){let r=e.source;return r?"u">typeof HTMLImageElement&&r instanceof HTMLImageElement?"w"===t?r.naturalWidth:r.naturalHeight:"u">typeof HTMLVideoElement&&r instanceof HTMLVideoElement?"w"===t?r.videoWidth:r.videoHeight:"w"===t?r.width:r.height:0}function aU(e){return"repeat"===e?"repeat":"mirror"===e?"mirror":"clamp"}function aL(e){if(!e)return["clamp","clamp"];if(Array.isArray(e))return[aU(e[0]),aU(e[1])];let t=aU(e);return[t,t]}function aV(e,t,r){return Math.max(t,Math.min(r,e))}function aO(e){return aV(e,-1e6,1e6)}function aD(e){return!(e instanceof HTMLImageElement||e instanceof HTMLVideoElement||e instanceof HTMLCanvasElement)}tq=new WeakMap,tJ=new WeakMap,tK=new WeakMap,tY=new WeakMap,tQ=new WeakMap,tZ=new WeakMap,t0=new WeakMap,t1=new WeakMap,t2=new WeakMap,t4=new WeakMap,t3=new WeakMap,t5=new WeakMap,t6=new WeakMap,t8=new WeakMap,t9=new WeakMap,t7=new WeakMap,re=new WeakMap,rt=new WeakMap,rr=new WeakMap,ri=new WeakMap,rs=new WeakMap,ro=new WeakMap,ra=new WeakMap,rn=new WeakMap,rl=new WeakMap,rf=new WeakMap,rh=new WeakMap,rc=new WeakMap,ru=new WeakMap,rd=new WeakMap,rp=new WeakMap,rm=new WeakMap,rg=new WeakMap,rw=new WeakMap,rE=new WeakMap,tG=new WeakSet,rv=function(){let e,t,r=aR(this,tJ,"f").ownerDocument,i="BackCompat"===r.compatMode?r.body:r.documentElement,s=i.clientWidth,o=i.clientHeight,a=window.scrollX,n=window.scrollY;if(aR(this,tq,"f").fixedCanvas)e=0,t=0;else if(aR(this,tq,"f").wrapper)e=s*aR(this,tq,"f").scrollPadding[0],t=o*aR(this,tq,"f").scrollPadding[1];else{let i=r.body.scrollWidth-(a+s),l=r.body.scrollHeight-(n+o);e=aV(s*aR(this,tq,"f").scrollPadding[0],0,i),t=aV(o*aR(this,tq,"f").scrollPadding[1],0,l)}let l=s+2*e,f=o+2*t;(l!==aR(this,rh,"f")[0]||f!==aR(this,rh,"f")[1])&&(aR(this,tJ,"f").style.width=`${l}px`,aR(this,tJ,"f").style.height=`${f}px`,aR(this,tK,"f").setSize(l,f,aR(this,rt,"f")),ak(this,rl,oH({top:-t,left:-e,right:s+e,bottom:o+t}),"f"),ak(this,rf,oH({top:0,left:0,right:s,bottom:o}),"f"),ak(this,rh,[l,f],"f"),ak(this,rc,e,"f"),ak(this,ru,t,"f")),aR(this,tq,"f").fixedCanvas||aR(this,tJ,"f").style.setProperty("transform",`translate(${a-e}px, ${n-t}px)`)},rx=async function(e){if(!aR(this,rm,"f").get(e.element)){aR(this,rm,"f").set(e.element,!0);try{let t=e.srcTexture,r=t.source instanceof OffscreenCanvas?t.source:void 0,i=await ob(e.element,e.originalOpacity,r,this.maxTextureSize);if(0===i.width||0===i.height)return;let s=new s0(aR(this,tK,"f"),i);s.wrapS=t.wrapS,s.wrapT=t.wrapT,s.needsUpdate=!0,!e.chain&&e.passes.length>0&&(e.passes[0].uniforms.src.value=s),e.srcTexture=s,t.dispose()}catch(e){console.error(e)}finally{aR(this,rm,"f").set(e.element,!1)}}},ry=function(e,t){aR(this,ri,"f").adopt(e,t)||null===t||e.element.style.setProperty("opacity",t),aR(this,rr,"f").push(e),aR(this,rr,"f").sort((e,t)=>e.zIndex-t.zIndex)},rb=async function(e,t,r,i){let s,o;void 0!==t.shader&&console.warn("[VFX-JS] Both `shader` and `effect` specified; `effect` takes precedence."),void 0!==t.overflow&&console.warn("[VFX-JS] `overflow` is shader-path only and is ignored by the effect path. Use each effect's own `outputRect` (with `dims.canvasRect` for fullscreen) to control its dst rect.");let a=Array.isArray(r)?[...r]:[r];aR(this,tG,"m",rk).call(this,a);let n=e.getBoundingClientRect(),l=aD(e)?oG(n):oj(n),[f,h]=a_(t.overflow),c=aB(t.intersection),u=""===e.style.opacity?1:Number.parseFloat(e.style.opacity),d=!1;if(e instanceof HTMLImageElement){o="img";let t=sl(e);if(d=!!t.match(/\.gif/i)){let r=await af.create(t,aR(this,rt,"f"));aC.set(e,r),s=new s0(aR(this,tK,"f"),r.getCanvas())}else{let e=await s4(t);s=new s0(aR(this,tK,"f"),e)}}else if(e instanceof HTMLVideoElement)s=new s0(aR(this,tK,"f"),e),o="video";else if(e instanceof HTMLCanvasElement)sa(e)&&i?(s=new s0(aR(this,tK,"f"),i),o="hic"):(s=new s0(aR(this,tK,"f"),e),o="canvas");else{let t=await ob(e,u,void 0,this.maxTextureSize);s=new s0(aR(this,tK,"f"),t),o="text"}let[p,m]=aL(t.wrap);s.wrapS=p,s.wrapT=m,s.needsUpdate=!0;let v=t.autoCrop??!0,g=aW(o,t.overlay),w=aR(this,rs,"f"),x={type:o,element:e,isInViewport:!1,intersectionState:am(w),width:l.right-l.left,height:l.bottom-l.top,passes:[],bufferTargets:new Map,startTime:w,enterTime:w,leaveTime:-1/0,release:t.release??1/0,isGif:d,isFullScreen:f,overflow:h,intersection:c,originalOpacity:u,srcTexture:s,zIndex:t.zIndex??0,backbuffer:void 0,autoCrop:v,effectLastRenderTime:w},y=oD(()=>x.srcTexture,()=>aI(x.srcTexture,"w"),()=>aI(x.srcTexture,"h")),b={},T={};if(t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r?(T[e]=r,b[e]=r()):b[e]=r;x.effectUniformGenerators=T,x.effectStaticUniforms=b;let E={autoCrop:v,glslVersion:t.glslVersion??"300 es"},S=new oZ(aR(this,tK,"f"),aR(this,tQ,"f"),aR(this,rt,"f"),a,E,y,!1,aR(this,tZ,"f"));try{await S.initAll()}catch(t){throw aR(this,tG,"m",rR).call(this,a),s.dispose(),e.style.setProperty("opacity",u.toString()),t}x.chain=S,aR(this,tG,"m",rP).call(this,x,l,w),aR(this,tG,"m",ry).call(this,x,g)},rT=function(e){let t=t=>void 0===t.glslVersion&&void 0!==e.glslVersion?{...t,glslVersion:e.glslVersion}:t;return Array.isArray(e.shader)?e.shader.map(t):[t({frag:aR(this,tG,"m",rW).call(this,e.shader||"uvGradient")})]},rS=function(e,t,r,i){let s=e.chain;if(!s)return;let o=aR(this,rt,"f");aC.get(e.element)?.update(),("video"===e.type||e.isGif)&&(e.srcTexture.needsUpdate=!0);let a={...e.effectStaticUniforms??{}};if(e.effectUniformGenerators)for(let[t,r]of Object.entries(e.effectUniformGenerators))a[t]=r();let n=aR(this,rl,"f").right-aR(this,rl,"f").left,l=aR(this,rl,"f").bottom-aR(this,rl,"f").top,f=s9(t,l,aR(this,rc,"f"),aR(this,ru,"f")),h=aR(this,rd,"f")+aR(this,rc,"f")-f.x,c=aR(this,rp,"f")+aR(this,ru,"f")-f.y,u=t.right-t.left,d=t.bottom-t.top,p=e.effectLastRenderTime??i;e.effectLastRenderTime=i;let m=aR(this,tG,"m",rM).call(this)&&aR(this,t2,"f")?o$(aR(this,t2,"f")):null;s.run({time:i-e.startTime,deltaTime:i-p,mouse:[h*o,c*o],mouseViewport:[aR(this,rd,"f")*o,aR(this,rp,"f")*o],intersection:r.intersection,enterTime:aO(i-e.enterTime),leaveTime:aO(i-e.leaveTime),enterProgress:r.enterProgress,leaveProgress:r.leaveProgress,resolvedUniforms:a,canvasSize:[n,l],canvasBufferSize:[n*o,l*o],elementSize:[u,d],elementBufferSize:[u*o,d*o],elementRectOnCanvasPx:{x:f.x*o,y:f.y*o,w:f.w*o,h:f.h*o},finalTarget:m,isVisible:r.isVisible})},rM=function(){return aR(this,t1,"f").length>0||null!==aR(this,t3,"f")&&aR(this,t5,"f")},rk=function(e){for(let t of e)if(aR(this,t6,"f").has(t))throw Error("[VFX-JS] Effect instance already attached. Construct a new instance per `vfx.add()` / `postEffect`.");for(let t of e)aR(this,t6,"f").add(t)},rR=function(e){for(let t of e)aR(this,t6,"f").delete(t)},rC=function(e){let t=e.hitTestPadBuffer,r=aR(this,rt,"f");return oH({top:t.top/r,right:t.right/r,bottom:t.bottom/r,left:t.left/r})},rP=function(e,t,r){var i,s,o,a,n,l,f,h;let c,u,d,p=oq(t,e.chain?aR(this,tG,"m",rC).call(this,e.chain):e.overflow),m=e.isFullScreen||az(aR(this,rf,"f"),p),v=oq(aR(this,rf,"f"),e.intersection.rootMargin),g=oK(v.left,v.right,t.left,t.right)*oK(v.top,v.bottom,t.top,t.bottom);i=e,s=g,o=az(v,t),a=r,u=(c=i.intersectionState).isIn,d=i.isFullScreen||function(e,t,r,i,s){let o=0===i?r:t>=i,a=0===s?!r:t<s,n=o&&!e.wasAbove,l=a&&!e.wasBelow;if(e.wasAbove=o,e.wasBelow=a,o&&!a)return!0;if(a&&!o)return!1;if(o&&a){if(n)return!0;if(l)return!1}return e.isIn}(c,s,o,i.intersection.threshold,i.intersection.leaveThreshold),!u&&d&&(i.enterTime=a,i.leaveTime=1/0),u&&!d&&(i.leaveTime=a),function(e,t,r,i){let s=r-e.lastTime;if(e.lastTime=r,e.isIn=t,function(e,t){switch(e.phase){case"hidden":if(t)return e.phase="entering",e.direction=1,!0;return!1;case"shown":if(!t)return e.phase="leaving",e.direction=1,!0;return!1;case"entering":return e.direction=t?1:-1,!1;case"leaving":return e.direction=t?-1:1,!1}}(e,t))return;let o=(s<0?s:e.direction*s)/i;if("entering"===e.phase){let t=e.enterProgress+o;o>0&&t>=1?av(e,"shown"):o<0&&t<=0?av(e,"hidden"):e.enterProgress=ag(t)}else if("leaving"===e.phase){let t=e.leaveProgress+o;o>0&&t>=1?av(e,"hidden"):o<0&&t<=0?av(e,"shown"):e.leaveProgress=ag(t)}}(c,d,a,i.intersection.duration);let{enterProgress:w,leaveProgress:x}=e.intersectionState;e.isInViewport=m;let y=m&&r-e.leaveTime<=e.release||!0===e.forceRender&&t.right>t.left&&t.bottom>t.top;return y&&!e.chain&&e.passes.length>0&&(n=e.passes[0].uniforms,l=e,f=g,h=r,n.intersection.value=f,n.enterTime.value=aO(h-l.enterTime),n.leaveTime.value=aO(h-l.leaveTime),n.enterProgress.value=l.intersectionState.enterProgress,n.leaveProgress.value=l.intersectionState.leaveProgress),{isVisible:y,intersection:g,rectWithOverflow:p,enterProgress:w,leaveProgress:x}},rW=function(e){return e in ol?ol[e]:e},rA=function(e,t,r,i,s){let o=aR(this,tY,"f");s&&null!==t&&t!==aR(this,t2,"f")&&(o.bindFramebuffer(o.FRAMEBUFFER,t.fbo),o.viewport(0,0,t.width,t.height),o.clear(o.COLOR_BUFFER_BIT));let a=i.viewport;a&&a.value instanceof oh&&a.value.set(r.x*aR(this,rt,"f"),r.y*aR(this,rt,"f"),r.w*aR(this,rt,"f"),r.h*aR(this,rt,"f"));try{var n,l,f,h;let i,s,a,c,u,d,p,m;n=aR(this,tQ,"f"),l=aR(this,rh,"f")[0],f=aR(this,rh,"f")[1],h=aR(this,rt,"f"),i=t?t.width/h:l,s=t?t.height/h:f,a=Math.max(0,r.x),c=Math.max(0,r.y),u=Math.min(i,r.x+r.w),d=Math.min(s,r.y+r.h),p=u-a,m=d-c,p<=0||m<=0||(o.bindFramebuffer(o.FRAMEBUFFER,t?t.fbo:null),o.viewport(Math.round(a*h),Math.round(c*h),Math.round(p*h),Math.round(m*h)),ox(o,e.blend),e.program.use(),e.program.uploadUniforms(e.uniforms),n.draw())}catch(e){console.error(e)}},rF=function(e,t,r){let i=e.passes[0].uniforms.offset.value;i.x=t*aR(this,rt,"f"),i.y=r*aR(this,rt,"f")},rz=function(e){let t=1!==e.length||"frag"in e[0]?null:e[0];if(t&&void 0!==t.effect)return void aR(this,tG,"m",r_).call(this,t,t.effect);let r=[],i=[];for(let t of e)"frag"in t&&i.push(t);for(let e=0;e<i.length-1;e++)i[e].target||(i[e]={...i[e],target:`pass${e}`});for(let t of e){let e,i,s;if("frag"in t)e=t.frag,i=new aT(aR(this,tK,"f"),e,t.uniforms,t.persistent??!1,t.float??!1,t.size,void 0!==t.target,t.glslVersion),s=t.target;else{if(void 0===t.shader)throw Error("VFXPostEffect requires `shader` (the `effect` path is not implemented yet).");e=aR(this,tG,"m",rW).call(this,t.shader),i=new aT(aR(this,tK,"f"),e,t.uniforms,t.persistent??!1,t.float??!1,void 0,!1,t.glslVersion),t.persistent&&i.registerBufferUniform("backbuffer"),s=void 0}r.push(e);let o={};if(t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r&&(o[e]=r);aR(this,t1,"f").push({pass:i,target:s,generators:o})}for(let e of i)e.target&&aR(this,t4,"f").set(e.target,void 0);let s=aR(this,t1,"f").map(e=>e.target).filter(e=>void 0!==e);for(let e=0;e<aR(this,t1,"f").length;e++)for(let t of s)r[e].match(RegExp(`uniform\\s+sampler2D\\s+${t}\\b`))&&aR(this,t1,"f")[e].pass.registerBufferUniform(t)},r_=function(e,t){void 0!==e.shader&&console.warn("[VFX-JS] Both `shader` and `effect` specified on post-effect; `effect` takes precedence.");let r=Array.isArray(t)?[...t]:[t];aR(this,tG,"m",rk).call(this,r);let i=oD(()=>{let e=aR(this,t2,"f");if(!e)throw Error("[VFX-JS] post-effect chain active without target");return e.texture},()=>aR(this,t2,"f")?.width??0,()=>aR(this,t2,"f")?.height??0),s={autoCrop:!0,glslVersion:e.glslVersion??"300 es"},o=new oZ(aR(this,tK,"f"),aR(this,tQ,"f"),aR(this,rt,"f"),r,s,i,!0,aR(this,tZ,"f"));if(e.uniforms)for(let[t,r]of Object.entries(e.uniforms))"function"==typeof r?(aR(this,t9,"f")[t]=r,aR(this,t8,"f")[t]=r()):aR(this,t8,"f")[t]=r;ak(this,t3,o,"f"),ak(this,t7,aR(this,rs,"f"),"f"),o.initAll().then(()=>{aR(this,t3,"f")===o&&ak(this,t5,!0,"f")}).catch(e=>{console.error("[VFX-JS] Post-effect init failed; post-effect disabled:",e),aR(this,t3,"f")===o&&(aR(this,tG,"m",rR).call(this,aR(this,t3,"f").effects),aR(this,t3,"f").dispose(),ak(this,t3,null,"f"),ak(this,t5,!1,"f"))})},rB=function(e,t){let r=aR(this,t3,"f");if(!r)return;let i=aR(this,rt,"f"),s={...aR(this,t8,"f")};for(let[e,t]of Object.entries(aR(this,t9,"f")))s[e]=t();let o=aR(this,rl,"f").right-aR(this,rl,"f").left,a=aR(this,rl,"f").bottom-aR(this,rl,"f").top,n=t-aR(this,t7,"f");ak(this,t7,t,"f");let l=[o,a],f=[o*i,a*i],h={x:e.x*i,y:e.y*i,w:e.w*i,h:e.h*i};r.run({time:t,deltaTime:n,mouse:[aR(this,rd,"f")*i,aR(this,rp,"f")*i],mouseViewport:[aR(this,rd,"f")*i,aR(this,rp,"f")*i],intersection:1,enterTime:0,leaveTime:0,enterProgress:1,leaveProgress:0,resolvedUniforms:s,canvasSize:l,canvasBufferSize:f,elementSize:l,elementBufferSize:f,elementRectOnCanvasPx:h,finalTarget:null,isVisible:!0})},rI=function(e,t){if(!aR(this,t2,"f"))return;let r=aR(this,t2,"f").texture,i=new Map;for(let{pass:e,target:t}of aR(this,t1,"f"))t&&e.backbuffer&&i.set(t,e.backbuffer.texture);for(let s=0;s<aR(this,t1,"f").length;s++){let{pass:o,target:a,generators:n}=aR(this,t1,"f")[s],l=s===aR(this,t1,"f").length-1,f=aR(this,rd,"f")+aR(this,rc,"f"),h=aR(this,rp,"f")+aR(this,ru,"f"),c=o.size;if(c){let[i,s]=c;o.uniforms.src.value=r,o.uniforms.resolution.value.set(i,s),o.uniforms.offset.value.set(0,0),o.uniforms.time.value=t,o.uniforms.mouse.value.set(f/e.w*i,h/e.h*s)}else o.setUniforms(r,aR(this,rt,"f"),e,t,f,h);for(let[e,t]of(o.uniforms.passIndex.value=s,o.updateCustomUniforms(n),i)){let r=o.uniforms[e];r&&(r.value=t)}if(l)o.backbuffer?(o.uniforms.backbuffer&&(o.uniforms.backbuffer.value=o.backbuffer.texture),aR(this,tG,"m",rA).call(this,o.pass,o.backbuffer.target,e,o.uniforms,!0),o.backbuffer.swap(),aR(this,t0,"f").setUniforms(o.backbuffer.texture,aR(this,rt,"f"),e),aR(this,tG,"m",rA).call(this,aR(this,t0,"f").pass,null,e,aR(this,t0,"f").uniforms,!1)):aR(this,tG,"m",rA).call(this,o.pass,null,e,o.uniforms,!1);else if(o.backbuffer){o.uniforms.backbuffer&&(o.uniforms.backbuffer.value=o.backbuffer.texture);let t=c?{x:0,y:0,w:c[0]/aR(this,rt,"f"),h:c[1]/aR(this,rt,"f")}:e;aR(this,tG,"m",rA).call(this,o.pass,o.backbuffer.target,t,o.uniforms,!0),o.backbuffer.swap(),r=o.backbuffer.texture,a&&i.set(a,o.backbuffer.texture)}else{let t=a??`postEffect${s}`,n=aR(this,t4,"f").get(t),l=c?c[0]:e.w*aR(this,rt,"f"),f=c?c[1]:e.h*aR(this,rt,"f");n&&n.width===l&&n.height===f||(n?.dispose(),n=aw(aR(this,tK,"f"),l,f,{float:o.float}),aR(this,t4,"f").set(t,n));let h=c?{x:0,y:0,w:c[0]/aR(this,rt,"f"),h:c[1]/aR(this,rt,"f")}:e;aR(this,tG,"m",rA).call(this,o.pass,n,h,o.uniforms,!0),r=n.texture,a&&i.set(a,n.texture)}}},rU=function(e,t){let r=e*aR(this,rt,"f"),i=t*aR(this,rt,"f");for(let{pass:s}of(aR(this,t2,"f")&&aR(this,t2,"f").width===r&&aR(this,t2,"f").height===i||(aR(this,t2,"f")?.dispose(),ak(this,t2,aw(aR(this,tK,"f"),r,i),"f")),aR(this,t1,"f")))s.persistent&&!s.backbuffer?s.initializeBackbuffer(aR(this,tK,"f"),e,t,aR(this,rt,"f")):s.backbuffer&&s.resizeBackbuffer(e,t)};var aN=function(e,t,r,i,s){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,r):s?s.value=r:t.set(e,r),r},a$=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};rV=new WeakMap,rO=new WeakMap,rD=new WeakMap,rN=new WeakMap,rL=new WeakSet,r$=async function(e,t,r){if(!sV())return console.warn("html-in-canvas not supported, falling back to dom-to-canvas"),this.add(e,t);void 0!==t.overlay&&console.warn("addHTML does not support overlay mode (layoutsubtree hides children). Ignoring overlay option.");let{overlay:i,...s}=t,o=a$(this,rD,"f").get(e);o&&a$(this,rV,"f").removeElement(o);let{canvas:a,initialCapture:n}=await sU(e,{onCapture:e=>{a$(this,rV,"f").updateHICTexture(a,e)},maxSize:a$(this,rV,"f").maxTextureSize,stillCover:r?{zIndex:a$(this,rL,"m",rH).call(this)}:void 0});o=a,a$(this,rD,"f").set(e,o),await a$(this,rL,"m",rX).call(this,o,s,n)},rH=function(){let e=Number.parseInt(a$(this,rO,"f").style.zIndex,10);return Number.isNaN(e)?9998:e-1},rX=async function(e,t,r){try{await a$(this,rV,"f").addElement(e,t,r)}finally{s_(e,a$(this,rV,"f").isFrozen(e))}},rj=function(e,t){return e.complete?a$(this,rV,"f").addElement(e,t):new Promise(r=>{e.addEventListener("load",()=>{a$(this,rV,"f").addElement(e,t),r()},{once:!0})})},rG=function(e,t){return e.readyState>=3?a$(this,rV,"f").addElement(e,t):new Promise(r=>{e.addEventListener("canplay",()=>{a$(this,rV,"f").addElement(e,t),r()},{once:!0})})},rq=function(e,t){return a$(this,rV,"f").addElement(e,t)},rJ=function(e,t){return a$(this,rV,"f").addElement(e,t)},e.s(["f",0,class e{static init(t){try{return new e(t)}catch{return null}}constructor(e={}){let t,r,i;if(rL.add(this),rV.set(this,void 0),rO.set(this,void 0),rD.set(this,new Map),rN.set(this,new Set),"u"<typeof document)throw"Cannot find 'document'. VFX-JS only runs on the browser.";if(!function(){try{let e=document.createElement("canvas"),t=e.getContext("webgl2")||e.getContext("webgl");return null!==t}catch{return!1}}())throw Error("[VFX-JS] WebGL is not available in this environment.");let s=(i=window.devicePixelRatio,t=void 0===e.scrollPadding?[.1,.1]:!1===e.scrollPadding?[0,0]:Array.isArray(e.scrollPadding)?[e.scrollPadding[0]??.1,e.scrollPadding[1]??.1]:[e.scrollPadding,e.scrollPadding],r=void 0===e.postEffect?[]:Array.isArray(e.postEffect)?e.postEffect:[e.postEffect],{pixelRatio:e.pixelRatio??i,zIndex:e.zIndex??void 0,autoplay:e.autoplay??!0,fixedCanvas:!1===e.scrollPadding,scrollPadding:t,wrapper:e.wrapper,postEffects:r,preserveDrawingBuffer:e.preserveDrawingBuffer??!1,timeScale:e.timeScale??1}),o=document.createElement("canvas");for(let[e,t]of Object.entries({position:s.fixedCanvas?"fixed":"absolute",top:0,left:0,width:"0px",height:"0px","z-index":9999,"pointer-events":"none"}))o.style.setProperty(e,t.toString());void 0!==s.zIndex&&o.style.setProperty("z-index",s.zIndex.toString()),(s.wrapper??document.body).appendChild(o),aN(this,rO,o,"f"),aN(this,rV,new aF(s,o),"f"),s.autoplay&&a$(this,rV,"f").play()}async add(e,t,r){e instanceof HTMLImageElement?await a$(this,rL,"m",rj).call(this,e,t):e instanceof HTMLVideoElement?await a$(this,rL,"m",rG).call(this,e,t):e instanceof HTMLCanvasElement?sa(e)&&r?await a$(this,rL,"m",rX).call(this,e,t,r):await a$(this,rL,"m",rq).call(this,e,t):await a$(this,rL,"m",rJ).call(this,e,t)}updateHICTexture(e,t){a$(this,rV,"f").updateHICTexture(e,t)}get maxTextureSize(){return a$(this,rV,"f").maxTextureSize}get canvas(){return a$(this,rO,"f")}addHTML(e,t){return a$(this,rL,"m",r$).call(this,e,t,!1)}addHTMLWithStill(e,t){return a$(this,rL,"m",r$).call(this,e,t,!0)}addTransition(e,t={}){let r=new sY(this,e,t,()=>a$(this,rN,"f").delete(r));return a$(this,rN,"f").add(r),r}freezeInside(e){return a$(this,rV,"f").freezeInside(e)}lockSize(e){let t=a$(this,rD,"f").get(e);return t?sF(t):()=>{}}forceRender(e){let t=a$(this,rD,"f").get(e)??e;return a$(this,rV,"f").forceRender(t)}remove(e){let t=a$(this,rD,"f").get(e);t?(sL(t,e),a$(this,rD,"f").delete(e),a$(this,rV,"f").removeElement(t)):a$(this,rV,"f").removeElement(e)}updateEffects(e,t){let r=a$(this,rD,"f").get(e)??e;return a$(this,rV,"f").updateElementEffects(r,t)}async update(e){await this.updateInTime(e)}async updateInTime(e){let t=a$(this,rD,"f").get(e)??(e instanceof HTMLCanvasElement?e:null),r=t?sA(t):void 0;return r||(e instanceof HTMLImageElement?await a$(this,rV,"f").updateImageElement(e):e instanceof HTMLCanvasElement?a$(this,rV,"f").updateCanvasElement(e):await a$(this,rV,"f").updateTextElement(e),!0)}play(){a$(this,rV,"f").play()}stop(){a$(this,rV,"f").stop()}render(){a$(this,rV,"f").render()}get time(){return a$(this,rV,"f").time}setTime(e){a$(this,rV,"f").setTime(e)}get timeScale(){return a$(this,rV,"f").timeScale}set timeScale(e){a$(this,rV,"f").timeScale=e}destroy(){for(let e of a$(this,rN,"f"))e.destroy();for(let[e,t]of(a$(this,rN,"f").clear(),a$(this,rD,"f")))sL(t,e);a$(this,rD,"f").clear(),a$(this,rV,"f").destroy(),a$(this,rO,"f").remove()}}],61388),e.s([],90422);var aH=function(e,t,r,i,s){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,r):s?s.value=r:t.set(e,r),r},aX=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};let aj=`
vec4 splitRead(vec2 uvr, vec2 uvg, vec2 uvb, bool to) {
  vec4 r = to ? readTo(uvr) : readFrom(uvr);
  vec4 g = to ? readTo(uvg) : readFrom(uvg);
  vec4 b = to ? readTo(uvb) : readFrom(uvb);
  return vec4(r.r, g.g, b.b, (r.a + g.a + b.a) / 3.0);
}
`,aG=`
float ign(vec2 p) {
  return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
}
`,aq=`
vec2 mirror(vec2 p) {
  return 1.0 - abs(1.0 - mod(p, 2.0));
}
`;class aJ extends ss{constructor(){super(...arguments),this.name="hard_cut",this.frag=`
vec4 transition(vec2 uv, float t) {
  return t < 0.5 ? readFrom(uv) : readTo(uv);
}
`}}let aK=e=>"function"==typeof e.render&&!1!==e.enabled;class aY{constructor(e={}){rK.set(this,[]),this.params=e}async init(e){for(let t of(aH(this,rK,this.stages.slice(1).map(()=>e.createRenderTarget()),"f"),this.stages))await t.init?.(e)}start(e){for(let t of this.stages)t.start?.(e)}update(e){for(let t of this.stages)t.update?.(e)}render(e){let t=this.stages.filter(aK);if(0===t.length)return void e.blit(e.src);let r=e.src;for(let[i,s]of t.entries()){if(i===t.length-1)return void s.render?.({...e,src:r});let o=aX(this,rK,"f")[i];e.clear(o),s.render?.(function(e,t,r){return{...e,src:t,target:r,draw:t=>e.draw({...t,target:t.target??r}),blit:(t,i,s)=>e.blit(t,i??r,s),clear:t=>e.clear(t??r)}}(e,r,o)),r=o}}end(){for(let e of this.stages)e.end?.()}outputRect(e){let t=this.stages.filter(aK);return t[t.length-1]?.outputRect?.(e)}dispose(){for(let e of this.stages)e.dispose?.();for(let e of aX(this,rK,"f"))e.dispose();aH(this,rK,[],"f")}}rK=new WeakMap,e.s(["f",0,class extends ss{constructor(){super(...arguments),this.name="crosszoom",this.overflow=!0,this.frag=`
const float STRENGTH = 0.4;
const float TAPS = 16.0;

${aG}
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
`}}],75682);new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet;new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet;let aQ=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D src;
uniform vec4 srcRectUv;
void main() {
    outColor = texture(src, srcRectUv.xy + uv * srcRectUv.zw);
}
`,aZ=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D src;
void main() {
    outColor = texture(src, uv);
}
`;function a0(e,t){e.draw({frag:aQ,uniforms:{src:e.src},target:t})}var a1=function(e,t,r,i,s){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,r):s?s.value=r:t.set(e,r),r},a2=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};let a4=`#version 300 es
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
`,a3=`#version 300 es
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
`,a5=`#version 300 es
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
`,a6=`#version 300 es
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
`,a8=`#version 300 es
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
`,a9=`#version 300 es
precision highp float;
in vec2 uvContent;
out vec4 outColor;
uniform sampler2D uResidual;
void main() {
    vec3 r = texture(uResidual, uvContent).rgb;
    outColor = vec4(clamp(r * 0.5 + 0.5, 0.0, 1.0), 1.0);
}
`,a7=`
float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
vec2 chroma(vec3 c) {
    return vec2(dot(c, vec3(-0.168736, -0.331264, 0.5)),
                dot(c, vec3(0.5, -0.418688, -0.081312))) + 0.5;
}
`,ne=`#version 300 es
precision highp float;
${a7}
in vec2 uv;
out vec4 outColor;
uniform sampler2D uCur, uRef, uMV;
uniform vec2 uChromaRes;
void main() {
    vec2 mvc = floor(texture(uMV, uv).rg * 0.5);
    vec2 pred = chroma(texture(uRef, uv + mvc / uChromaRes).rgb);
    outColor = vec4(chroma(texture(uCur, uv).rgb) - pred, 0.0, 1.0);
}
`,nt=`#version 300 es
precision highp float;
${a7}
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
`,nr=`#version 300 es
precision highp float;
${a7}
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
`,ni=`#version 300 es
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
`,ns={blockSize:16,searchRange:5,searchStep:2,useResidual:!0,dup:0,colorSpace:"ycbcr",chromaGain:1,healRate:0,healThreshold:1,view:"output"};class no{constructor(e={}){rY.add(this),rQ.set(this,!1),rZ.set(this,!0),r0.set(this,null),r1.set(this,null),r2.set(this,null),r4.set(this,null),r3.set(this,null),r5.set(this,null),r6.set(this,null),r8.set(this,0),r9.set(this,0),r7.set(this,0),ie.set(this,0),it.set(this,0),ir.set(this,0),ii.set(this,void 0),this.params={...ns,...e},a1(this,ii,this.params.colorSpace,"f")}setParams(e){Object.assign(this.params,e)}enable(){a1(this,rQ,!0,"f")}disable(){a1(this,rQ,!1,"f"),a1(this,rZ,!0,"f")}get enabled(){return a2(this,rQ,"f")}render(e){var t,r;a2(this,rY,"m",io).call(this,e);let i=a2(this,r0,"f"),s=a2(this,r1,"f"),o=a2(this,r2,"f"),a=a2(this,r4,"f"),n=a2(this,r3,"f"),l=a2(this,r5,"f"),f=a2(this,r6,"f");if(!i||!s||!o||!a||!n||!l||!f)return;this.params.colorSpace!==a2(this,ii,"f")&&(a1(this,ii,this.params.colorSpace,"f"),a1(this,rZ,!0,"f"));let h=[a2(this,r8,"f"),a2(this,r9,"f")];a0(e,i);let c="output"!==this.params.view;if((a2(this,rQ,"f")||c)&&(e.draw({frag:a3,uniforms:{uCur:i,uRef:s,uResolution:h,uBlock:a2(this,it,"f"),uSearch:this.params.searchRange,uStep:this.params.searchStep,uHealRate:this.params.healRate,uHealThreshold:this.params.healThreshold,uFrame:(a1(this,ir,(r=a2(this,ir,"f"),t=r++,r),"f"),t%65536)},target:o}),e.draw({frag:a5,uniforms:{uCur:i,uRef:s,uMV:o,uResolution:h},target:a})),a2(this,rQ,"f")){let t=a2(this,rZ,"f")?1:1+this.params.dup,r=[a2(this,r7,"f"),a2(this,ie,"f")];"ycbcr"===this.params.colorSpace&&e.draw({frag:ne,uniforms:{uCur:i,uRef:s,uMV:o,uChromaRes:r},target:f});for(let s=0;s<t;s++){let t=this.params.useResidual&&0===s;"ycbcr"===this.params.colorSpace?(e.draw({frag:nt,uniforms:{uAccum:n,uMV:o,uVideo:i,uResidual:a,uResolution:h,uIntra:a2(this,rZ,"f"),uUseResidual:t},target:n}),e.draw({frag:nr,uniforms:{uChromaAcc:l,uMV:o,uVideo:i,uResidualC:f,uChromaRes:r,uIntra:a2(this,rZ,"f"),uUseResidual:t},target:l})):e.draw({frag:a6,uniforms:{uAccum:n,uMV:o,uVideo:i,uResidual:a,uResolution:h,uIntra:a2(this,rZ,"f"),uUseResidual:t},target:n})}a1(this,rZ,!1,"f")}else a1(this,rZ,!0,"f");a2(this,rY,"m",ia).call(this,e,i,s,o,a,n,l),a0(e,s)}dispose(){a2(this,rY,"m",is).call(this),a1(this,r8,0,"f"),a1(this,r9,0,"f"),a1(this,r7,0,"f"),a1(this,ie,0,"f"),a1(this,it,0,"f"),a1(this,rZ,!0,"f")}}rQ=new WeakMap,rZ=new WeakMap,r0=new WeakMap,r1=new WeakMap,r2=new WeakMap,r4=new WeakMap,r3=new WeakMap,r5=new WeakMap,r6=new WeakMap,r8=new WeakMap,r9=new WeakMap,r7=new WeakMap,ie=new WeakMap,it=new WeakMap,ir=new WeakMap,ii=new WeakMap,rY=new WeakSet,is=function(){a2(this,r0,"f")?.dispose(),a2(this,r1,"f")?.dispose(),a2(this,r2,"f")?.dispose(),a2(this,r4,"f")?.dispose(),a2(this,r3,"f")?.dispose(),a2(this,r5,"f")?.dispose(),a2(this,r6,"f")?.dispose(),a1(this,r0,null,"f"),a1(this,r1,null,"f"),a1(this,r2,null,"f"),a1(this,r4,null,"f"),a1(this,r3,null,"f"),a1(this,r5,null,"f"),a1(this,r6,null,"f")},io=function(e){let[t,r]=e.dims.elementPixel,i=Math.max(2,this.params.blockSize);if(a2(this,r8,"f")===t&&a2(this,r9,"f")===r&&a2(this,it,"f")===i)return;a2(this,rY,"m",is).call(this),a1(this,r8,t,"f"),a1(this,r9,r,"f"),a1(this,r7,Math.ceil(t/2),"f"),a1(this,ie,Math.ceil(r/2),"f"),a1(this,it,i,"f"),a1(this,rZ,!0,"f");let s=Math.ceil(t/i),o=Math.ceil(r/i);a1(this,r0,e.createRenderTarget({size:[t,r]}),"f"),a1(this,r1,e.createRenderTarget({size:[t,r],persistent:!0}),"f"),a1(this,r4,e.createRenderTarget({size:[t,r],float:!0}),"f"),a1(this,r3,e.createRenderTarget({size:[t,r],float:!0,persistent:!0}),"f"),a1(this,r5,e.createRenderTarget({size:[a2(this,r7,"f"),a2(this,ie,"f")],float:!0,persistent:!0}),"f"),a1(this,r6,e.createRenderTarget({size:[a2(this,r7,"f"),a2(this,ie,"f")],float:!0}),"f"),a1(this,r2,e.createRenderTarget({size:[s,o],float:!0,filter:"nearest"}),"f")},ia=function(e,t,r,i,s,o,a){switch(this.params.view){case"motion":e.draw({frag:a8,uniforms:{uMV:i,uMvScale:this.params.searchRange*this.params.searchStep},target:e.target});return;case"residual":e.draw({frag:a9,uniforms:{uResidual:s},target:e.target});return;case"current":e.draw({frag:a4,uniforms:{tex:t},target:e.target});return;case"previous":e.draw({frag:a4,uniforms:{tex:r},target:e.target});return;default:a2(this,rQ,"f")&&"ycbcr"===this.params.colorSpace?e.draw({frag:ni,uniforms:{uLumaAcc:o,uChromaAcc:a,uChromaGain:this.params.chromaGain},target:e.target}):e.draw({frag:a4,uniforms:{tex:a2(this,rQ,"f")?o:t},target:e.target})}},new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap;var na=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)},nn=function(e,t,r,i,s){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,r):s?s.value=r:t.set(e,r),r};let nl=`#version 300 es
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
`,nf=`#version 300 es
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
`,nh={quality:.4,seed:.25,iterations:24,resolutionScale:1,randomFlip:!0,vertical:!1,speed:0,bypass:!1};function nc(e,t){if("u">typeof OffscreenCanvas)return new OffscreenCanvas(e,t);let r=document.createElement("canvas");return r.width=e,r.height=t,r}function nu(e){let t=e.getContext("2d");if(!t)throw Error("[VFX-JS] JPEGGlitchEffect: 2D canvas context unavailable");return t}function nd(e,t,r,i,s,o,a){switch(e.save(),e.clearRect(0,0,o,a),s){case 90:e.translate(o,0);break;case 180:e.translate(o,a);break;case 270:e.translate(0,a)}e.rotate(s*Math.PI/180),e.drawImage(t,0,0,r,i),e.restore()}class np{get producedFrames(){return na(this,iB,"f")}constructor(e={}){il.add(this),this.enabled=!0,ih.set(this,!1),ic.set(this,null),iu.set(this,null),id.set(this,null),ip.set(this,null),im.set(this,!1),iv.set(this,null),ig.set(this,null),iw.set(this,null),ix.set(this,null),iy.set(this,null),ib.set(this,null),iT.set(this,null),iE.set(this,new Uint8Array(0)),iS.set(this,null),iM.set(this,0),ik.set(this,0),iR.set(this,0),iC.set(this,0),iP.set(this,!0),iW.set(this,!1),iA.set(this,-1e9),iF.set(this,0),iz.set(this,0),i_.set(this,!1),iB.set(this,0),this.params={...nh,...e}}setParams(e){Object.assign(this.params,e),nn(this,iP,!0,"f")}init(e){nn(this,ih,"function"==typeof createImageBitmap&&("u">typeof OffscreenCanvas||"u">typeof document),"f"),na(this,ih,"f")&&(nn(this,iA,-1e9,"f"),nn(this,iP,!0,"f"),nn(this,ig,nc(1,1),"f"),nn(this,iw,nu(na(this,ig,"f")),"f"),nn(this,ix,nc(1,1),"f"),nn(this,iy,nu(na(this,ix,"f")),"f"),nn(this,ib,nc(1,1),"f"),nn(this,iT,nu(na(this,ib,"f")),"f"),nn(this,ic,e.createRenderTarget({size:[1,1]}),"f"),nn(this,id,e.gl,"f"),na(this,il,"m",iI).call(this,e),nn(this,iv,e.onContextRestored(()=>{na(this,il,"m",iI).call(this,e),nn(this,im,na(this,i_,"f"),"f")}),"f"))}update(){!1===this.enabled&&nn(this,i_,!1,"f")}render(e){if(this.params.bypass||!na(this,ih,"f")||!na(this,ic,"f")){nn(this,i_,!1,"f"),na(this,il,"m",iU).call(this,e);return}let t=e.src.width,r=e.src.height;(t!==na(this,iR,"f")||r!==na(this,iC,"f"))&&(nn(this,iR,t,"f"),nn(this,iC,r,"f"),nn(this,iP,!0,"f"));let[i,s]=e.dims.elementPixel,o=Math.min(1,Math.max(0,this.params.resolutionScale)),a=Math.max(1,Math.round(i*o)),n=Math.max(1,Math.round(s*o));i>=2&&s>=2&&t>0&&r>0&&((a!==na(this,iM,"f")||n!==na(this,ik,"f"))&&na(this,il,"m",iV).call(this,e,a,n),na(this,il,"m",iL).call(this,e)&&na(this,il,"m",iO).call(this,e)),na(this,i_,"f")&&na(this,iu,"f")?(na(this,im,"f")&&na(this,il,"m",iD).call(this,e),e.draw({frag:nf,uniforms:{tex:na(this,iu,"f")},target:e.target})):na(this,il,"m",iU).call(this,e)}dispose(){var e;na(this,iv,"f")?.call(this),nn(this,iv,null,"f"),na(this,id,"f")&&na(this,ip,"f")&&na(this,id,"f").deleteTexture(na(this,ip,"f")),nn(this,ip,null,"f"),nn(this,id,null,"f"),nn(this,im,!1,"f"),na(this,ic,"f")?.dispose(),nn(this,ic,null,"f"),nn(this,iu,null,"f"),nn(this,ig,null,"f"),nn(this,iw,null,"f"),nn(this,ix,null,"f"),nn(this,iy,null,"f"),nn(this,ib,null,"f"),nn(this,iT,null,"f"),nn(this,iS,null,"f"),nn(this,iE,new Uint8Array(0),"f"),nn(this,i_,!1,"f"),nn(this,iW,!1,"f"),nn(this,iM,0,"f"),nn(this,ik,0,"f"),nn(this,iF,(e=na(this,iF,"f"),++e),"f")}}ih=new WeakMap,ic=new WeakMap,iu=new WeakMap,id=new WeakMap,ip=new WeakMap,im=new WeakMap,iv=new WeakMap,ig=new WeakMap,iw=new WeakMap,ix=new WeakMap,iy=new WeakMap,ib=new WeakMap,iT=new WeakMap,iE=new WeakMap,iS=new WeakMap,iM=new WeakMap,ik=new WeakMap,iR=new WeakMap,iC=new WeakMap,iP=new WeakMap,iW=new WeakMap,iA=new WeakMap,iF=new WeakMap,iz=new WeakMap,i_=new WeakMap,iB=new WeakMap,il=new WeakSet,iI=function(e){let t=e.gl,r=t.createTexture();r&&(t.bindTexture(t.TEXTURE_2D,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array([0,0,0,0])),t.bindTexture(t.TEXTURE_2D,null),nn(this,ip,r,"f"),nn(this,iu,e.wrapTexture(r,{size:[na(this,iM,"f")||1,na(this,ik,"f")||1]}),"f"))},iU=function(e){e.draw({frag:nl,uniforms:{src:e.src},target:e.target})},iL=function(e){if(na(this,iW,"f"))return!1;let t=this.params.speed;return t>0?e.time-na(this,iA,"f")>=1/t:na(this,iP,"f")},iV=function(e,t,r){var i;nn(this,iM,t,"f"),nn(this,ik,r,"f"),nn(this,iE,new Uint8Array(t*r*4),"f"),nn(this,iS,new ImageData(t,r),"f"),na(this,ig,"f")&&(na(this,ig,"f").width=t,na(this,ig,"f").height=r),na(this,ib,"f")&&(na(this,ib,"f").width=t,na(this,ib,"f").height=r),na(this,ic,"f")?.dispose(),nn(this,ic,e.createRenderTarget({size:[t,r]}),"f"),nn(this,i_,!1,"f"),nn(this,iP,!0,"f"),nn(this,iW,!1,"f"),nn(this,im,!1,"f"),nn(this,iF,(i=na(this,iF,"f"),++i),"f")},iO=function(e){var t;let r,i=na(this,iM,"f"),s=na(this,ik,"f"),o=na(this,ig,"f"),a=na(this,iw,"f"),n=na(this,ix,"f"),l=na(this,iy,"f"),f=na(this,iS,"f");if(!o||!a||!n||!l||!f||!na(this,ic,"f"))return;a0(e,na(this,ic,"f"));let h=e.gl;h.readPixels(0,0,i,s,h.RGBA,h.UNSIGNED_BYTE,na(this,iE,"f")),h.bindFramebuffer(h.FRAMEBUFFER,null),nn(this,iW,!0,"f"),nn(this,iP,!1,"f"),nn(this,iA,e.time,"f");let c=f.data,u=4*i;for(let e=0;e<s;e++){let t=(s-1-e)*u;c.set(na(this,iE,"f").subarray(t,t+u),e*u)}for(let e=3;e<c.length;e+=4)c[e]=255;let d=this.params.speed>0?na(this,iz,"f"):0;nn(this,iz,(t=na(this,iz,"f"),++t),"f");let{quality:p,seed:m,iterations:v,randomFlip:g,vertical:w}=this.params,x=(r=Math.imul(0|Math.floor(0x9e3779b1*m),0x85ebca77)+Math.imul(d+1,0xc2b2ae3d)>>>0,()=>{let e=Math.imul((r=r+0x6d2b79f5>>>0)^r>>>15,1|r);return(((e=e+Math.imul(e^e>>>7,61|e)^e)^e>>>14)>>>0)/0x100000000}),y=g&&.5>x();a.putImageData(f,0,0);let b=(180*!!y+270*!!w)%360,T=w?s:i,E=w?i:s;n.width=T,n.height=E,nd(l,o,i,s,b,T,E),na(this,il,"m",iN).call(this,n,i,s,p,v,b,x,na(this,iF,"f"))},iD=function(e){let t=e.gl;na(this,ip,"f")&&na(this,ib,"f")&&(t.bindTexture(t.TEXTURE_2D,na(this,ip,"f")),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,na(this,ib,"f")),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.bindTexture(t.TEXTURE_2D,null),nn(this,im,!1,"f"))},iN=async function(e,t,r,i,s,o,a,n){var l;try{let f=await ("u">typeof OffscreenCanvas&&e instanceof OffscreenCanvas?e.convertToBlob({type:"image/jpeg",quality:i}):new Promise((t,r)=>{e.toBlob(e=>e?t(e):r(Error("[VFX-JS] JPEGGlitchEffect: toBlob failed")),"image/jpeg",i)})),h=new Uint8Array(await f.arrayBuffer()),c=function(e){for(let t=2;t+3<e.length;t++)if(255===e[t]&&218===e[t+1]){let r=e[t+2]<<8|e[t+3];return Math.min(e.length,t+2+r)}return Math.min(e.length,417)}(h);!function(e,t,r,i){let s=e.length-t-4;if(s<=1)return;let o=Math.max(1,Math.floor(r));for(let r=0;r<o;r++){let a=s/o*r|0,n=Math.max(1,(s/o*(r+1)|0)-a),l=Math.min(s,a+(i()*n|0)),f=256*i()|0;e[t+l]=f}}(h,c,s,a);let u=await createImageBitmap(new Blob([h],{type:"image/jpeg"}));n===na(this,iF,"f")&&na(this,iT,"f")&&(nd(na(this,iT,"f"),u,u.width,u.height,(360-o)%360,t,r),nn(this,i_,!0,"f"),nn(this,iB,(l=na(this,iB,"f"),++l),"f"),nn(this,im,!0,"f")),u.close()}catch{}finally{n===na(this,iF,"f")&&nn(this,iW,!1,"f")}},new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap;new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet,new Float32Array([-.5,-.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,-.5,.5]);let nm=new Float32Array(4096);for(let e=0;e<4096;e++)nm[e]=e;new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,i$=new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet;new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet;var nv=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)},ng=function(e,t,r,i,s){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,r):s?s.value=r:t.set(e,r),r};let nw=`
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
`,nx=`
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
`,ny=`#version 300 es
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
${nw}
${nx}
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
`,nb=`#version 300 es
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
${nw}
${nx}
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
`,nT=`#version 300 es
precision highp float;
in vec2 uvSrc;
out vec4 outColor;
uniform sampler2D src;
void main() {
    vec4 c = texture(src, uvSrc);
    outColor = vec4(c.rgb * c.a, c.a);
}
`,nE=`#version 300 es
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
`,nS=`#version 300 es
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
`,nM={right:{axis:0,direction:0},left:{axis:0,direction:1},down:{axis:1,direction:1},up:{axis:1,direction:0}},nk={luminance:0,r:1,g:2,b:3,hue:4,saturation:5},nR={range:[0,1],sortRes:128,key:"luminance",direction:"up",angle:0,bypass:!1};class nC{constructor(e={}){iH.add(this),iX.set(this,null),ij.set(this,null),iG.set(this,null),iq.set(this,null),iJ.set(this,0),iK.set(this,0),iY.set(this,0),iQ.set(this,0),iZ.set(this,0),i0.set(this,0),i1.set(this,0),this.params={...nR,...e},this.params.range=[...this.params.range]}setParams(e){Object.assign(this.params,e),e.range&&(this.params.range=[...e.range])}render(e){if(nv(this,iH,"m",i4).call(this,e),this.params.bypass||!nv(this,iX,"f")||!nv(this,ij,"f"))return void e.draw({frag:nT,uniforms:{src:e.src},target:e.target});let{axis:t,direction:r}=nM[this.params.direction],i=[nv(this,i0,"f"),nv(this,i1,"f")],[s,o]=this.params.range,a=nk[this.params.key],[n,l]=e.dims.elementPixel,f=nv(this,iG,"f"),h=nv(this,iq,"f"),c=0!==this.params.angle&&null!==f&&null!==h,u=e.src,d=e.target,p=[1,0],m=[n,l];if(c){let t=-this.params.angle*Math.PI/180;p=[Math.cos(t),Math.sin(t)],m=[nv(this,iQ,"f"),nv(this,iZ,"f")],e.draw({frag:nE,uniforms:{src:e.src,srcSize:[n,l],boxSize:m,rot:p},target:f}),u=f,d=h}if(c&&null!==f){var v;v=nv(this,iX,"f"),e.draw({frag:aZ,uniforms:{src:f},target:v})}else a0(e,nv(this,iX,"f"));let g=+!!c,w=[n,l];e.draw({frag:ny,uniforms:{src:nv(this,iX,"f"),srcSize:i,threshold:s,thresholdHigh:o,keyMode:a,direction:r,axis:t,masked:g,boxSize:m,imgSize:w,rot:p},target:nv(this,ij,"f")}),e.draw({frag:nb,uniforms:{src:nv(this,iX,"f"),srcHi:u,rankTex:nv(this,ij,"f"),lowSize:i,threshold:s,thresholdHigh:o,keyMode:a,axis:t,masked:g,boxSize:m,imgSize:w,rot:p},target:d}),c&&e.draw({frag:nS,uniforms:{src:h,srcSize:[n,l],boxSize:m,rot:p},target:e.target})}dispose(){nv(this,iH,"m",i2).call(this),ng(this,iJ,0,"f"),ng(this,iK,0,"f"),ng(this,iY,0,"f"),ng(this,iQ,0,"f"),ng(this,iZ,0,"f"),ng(this,i0,0,"f"),ng(this,i1,0,"f")}}iX=new WeakMap,ij=new WeakMap,iG=new WeakMap,iq=new WeakMap,iJ=new WeakMap,iK=new WeakMap,iY=new WeakMap,iQ=new WeakMap,iZ=new WeakMap,i0=new WeakMap,i1=new WeakMap,iH=new WeakSet,i2=function(){nv(this,iX,"f")?.dispose(),nv(this,ij,"f")?.dispose(),nv(this,iG,"f")?.dispose(),nv(this,iq,"f")?.dispose(),ng(this,iX,null,"f"),ng(this,ij,null,"f"),ng(this,iG,null,"f"),ng(this,iq,null,"f")},i4=function(e){let[t,r]=e.dims.elementPixel,{axis:i}=nM[this.params.direction],{angle:s}=this.params,o=this.params.sortRes,a=t,n=r;if(0!==s){let e=s*Math.PI/180,i=Math.abs(Math.cos(e)),o=Math.abs(Math.sin(e));a=Math.ceil(t*i+r*o),n=Math.ceil(t*o+r*i)}let l=0===i?Math.max(1,Math.round(o*a/t)):Math.max(1,Math.round(o*n/r)),f=0===i?l:a,h=0===i?n:l;(nv(this,iJ,"f")!==t||nv(this,iK,"f")!==r||nv(this,iY,"f")!==s||nv(this,i0,"f")!==f||nv(this,i1,"f")!==h)&&(nv(this,iH,"m",i2).call(this),ng(this,iJ,t,"f"),ng(this,iK,r,"f"),ng(this,iY,s,"f"),ng(this,iQ,a,"f"),ng(this,iZ,n,"f"),ng(this,i0,f,"f"),ng(this,i1,h,"f"),ng(this,iX,e.createRenderTarget({size:[f,h],filter:"nearest"}),"f"),ng(this,ij,e.createRenderTarget({size:[f,h],filter:"nearest",float:!0}),"f"),0!==s&&(ng(this,iG,e.createRenderTarget({size:[a,n]}),"f"),ng(this,iq,e.createRenderTarget({size:[a,n]}),"f")))};var nP=function(e,t,r,i,s){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,r):s?s.value=r:t.set(e,r),r},nW=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};class nA extends ss{constructor(){super(...arguments),this.name="datamosh",this.frag=`
vec4 transition(vec2 uv, float t) {
  return reverse > 0.5 ? readFrom(uv) : readTo(uv);
}
`}}class nF extends no{constructor(e){super({dup:0,blockSize:e()}),i3.set(this,void 0),i5.set(this,0),i6.set(this,1),nP(this,i3,e,"f")}start(e){this.params.blockSize=nW(this,i3,"f").call(this),this.params.chromaGain=1.5,this.params.useResidual=!1,this.params.healRate=0,nP(this,i5,0,"f"),nP(this,i6,Math.max(.75*e.duration,.001),"f"),this.enable()}update(e){var t;let{x:r}=e.progress,i=Math.min(Math.max((r-.25)/.75,0),1);this.params.useResidual=nP(this,i5,(t=nW(this,i5,"f"),++t),"f")>2,this.params.chromaGain=1.5+-.5*i,this.params.healRate=r<.25?0:1-.01**(e.deltaTime/nW(this,i6,"f"))}end(){this.disable()}}i3=new WeakMap,i5=new WeakMap,i6=new WeakMap,e.s(["f",0,class extends aY{constructor(){super(...arguments),this.name="datamosh",this.stages=[new nA,new nF(()=>{var e;return void 0!==(e=this.params.blockSize)&&Number.isFinite(e)&&e>=2?Math.round(e):32})]}}],28317),e.s(["f",0,class extends ss{constructor(){super(...arguments),this.name="distort_fade",this.frag=`
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

${aq}
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
`}}],96210);let nz=/vec4\s+transition\s*\(\s*vec2\s+(\w+)\s*\)/,n_=new Set(["from","src","srcRectUv","t","reverse","resolution","time","uvContent","outColor","progress","ratio"]),nB=e=>n_.has(e)?`glParam_${e}`:e;e.s(["f",0,function(e){let t=e.paramsTypes??{},r=[...e.textures??[],...Object.keys(t).filter(e=>"sampler2D"===t[e])];if(r.length>0)throw Error(`[VFX-JS] gl-transition "${e.name}" needs textures (${r.join(", ")}), which are not supported.`);if(!nz.test(e.glsl))throw Error(`[VFX-JS] gl-transition "${e.name}" has no \`vec4 transition(vec2 uv)\`.`);let i=e.glsl.replace(nz,"vec4 glTransition_(vec2 $1)");for(let e of Object.keys(t)){let t=nB(e);t!==e&&(i=i.replace(RegExp(`(^|[^.\\w])${e}\\b`,"g"),`$1${t}`))}let s=`
float progress;
float ratio;
vec4 getFromColor(vec2 p) { return readFrom(clamp(p, 0.0, 1.0)); }
vec4 getToColor(vec2 p) { return readTo(clamp(p, 0.0, 1.0)); }

${i}

vec4 transition(vec2 uv, float t) {
  // getFromColor clamps, so a container overflow would stretch the edges.
  if (!inRange(uv)) return vec4(0.0);
  progress = t;
  ratio = resolution.x / resolution.y;
  return glTransition_(uv);
}
`;return class extends ss{constructor(r={}){for(let i of(super(r),this.name=`gl:${e.name}`,this.frag=s,this.ease="linear",Object.keys(r)))i in t||console.warn(`[VFX-JS] gl-transition "${e.name}" has no param "${i}".`)}uniforms(){let t={},r={...e.defaultParams,...this.params};for(let e of Object.keys(r))t[nB(e)]=r[e];return t}}}],66864),e.s(["f",0,class extends ss{constructor(){super(...arguments),this.name="glitch",this.frag=`
uniform float amount;
uniform float speed;

float gnoise(float y) {
  return sin(y * 7.0) * sin(y * 17.0) * sin(y * 59.0);
}
vec2 gnoise(vec2 uv) {
  return vec2(gnoise(uv.x), gnoise(uv.y + 100.0));
}

${aj}
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
`}uniforms(){return{amount:this.params.amount??1,speed:this.params.speed??1}}}],84177),e.s(["f",0,class extends ss{constructor(){super(...arguments),this.name="glitch_slide",this.frag=`
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
`}}],166);var nI=function(e,t,r,i,s){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,r):s?s.value=r:t.set(e,r),r},nU=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};let nL=e=>Math.min(Math.max(e.quality??.1,0),1);class nV extends np{constructor(e){super({quality:nL(e()),bypass:!0,resolutionScale:.25}),i8.set(this,void 0),nI(this,i8,e,"f")}start(){this.params.bypass=!0,this.params.speed=30,this.params.quality=nL(nU(this,i8,"f").call(this))}render(e){let{x:t}=e.progress;this.params.bypass=!(t>.12&&t<.88);let r=Math.sin(Math.min(Math.max(t,0),1)*Math.PI),i=Math.max(1,Math.round(nU(this,i8,"f").call(this).iterations??4));this.params.iterations=Math.max(1,Math.round(i*r)),super.render(e)}end(){this.params.bypass=!0}}i8=new WeakMap,e.s(["f",0,class extends aY{constructor(){super(...arguments),this.name="jpeg_glitch",this.ease="linear",this.stages=[new aJ,new nV(()=>this.params)]}}],57888),e.s(["f",0,class extends ss{constructor(){super(...arguments),this.name="lens_distortion",this.frag=`
uniform float strength;
uniform float dispersion;
// The old content zooms from 1 to 1 + zoom; the new one from 1 + zoom back to 1.
uniform float zoom;
const float TAPS = 12.0;
// Width of the growing warp's edge.
const float SOFT = 0.5;

${aG}
${aq}
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
`}uniforms(){return{strength:this.params.strength??1,dispersion:Math.max(0,this.params.dispersion??.6),zoom:Math.max(0,this.params.zoom??3)}}}],35668);let nO={right:[1,0],left:[-1,0],up:[0,1],down:[0,-1],center:[0,0]};e.s(["f",0,class extends ss{constructor(){super(...arguments),this.name="pixel_scan",this.frag=`
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
`}uniforms(){return{blackout:this.params.blackout??!0?1:0,sweep:nO[this.params.direction??"right"]}}}],97394),e.s(["f",0,class extends ss{constructor(){super(...arguments),this.name="pixel_stretch",this.frag=`
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
`}}],81651);var nD=function(e,t,r,i,s){if("m"===i)throw TypeError("Private method is not writable");if("a"===i&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,r):s?s.value=r:t.set(e,r),r},nN=function(e,t,r,i){if("a"===r&&!i)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?i:"a"===r?i.call(e):i?i.value:t.get(e)};let n$={up:"down",down:"up",left:"right",right:"left"};class nH extends nC{constructor(e){super({range:[1,1]}),i9.set(this,void 0),i7.set(this,!1),nD(this,i9,e,"f")}start(e){let t=nN(this,i9,"f").call(this);nD(this,i7,e.reverse,"f"),this.params.direction=e.reverse?n$[t]:t,this.params.range[0]=1}update(e){let{t}=e.progress,r=nN(this,i9,"f").call(this),i=nN(this,i7,"f")?1-t:t;this.params.direction=i<.5?r:n$[r],this.params.range[0]=Math.abs(1-2*t)}end(){this.params.range[0]=1}}i9=new WeakMap,i7=new WeakMap,e.s(["f",0,class extends aY{constructor(){super(...arguments),this.name="pixelsort",this.stages=[new aJ,new nH(()=>this.params.direction??"up")]}}],18013),e.s(["f",0,class extends ss{constructor(){super(...arguments),this.name="slit_scan",this.frag=`
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
`}}],26873);let nX={left:[-1,0],right:[1,0],up:[0,1],down:[0,-1]};e.s(["f",0,class extends ss{constructor(){super(...arguments),this.name="swipe",this.frag=`
uniform vec2 move;
const float STRETCH = 0.6;
const float BLUR = 0.2;
const float TAPS = 16.0;

${aG}
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
`}uniforms(){return{move:nX[this.params.direction??"left"]}}}],76359);let nj={center:[0,0],left:[-1,0],right:[1,0],up:[0,1],down:[0,-1]},nG={hex:`
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
`},nq=e=>`
uniform float count;
uniform float shadow;
// Zero spreads out in rings; otherwise the side the sweep moves toward.
uniform vec2 sweep;
const float SPREAD = 0.6;
// Shadow offset and blur at full lift, in tiles.
const vec2 SHADOW_OFFSET = vec2(0.05, -0.08);
const float SHADOW_BLUR = 0.12;
${nG[e]}
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
`,nJ={hex:nq("hex"),square:nq("square")};e.s(["f",0,class extends ss{constructor(){super(...arguments),this.name="tile"}get frag(){return nJ[this.params.shape??"hex"]}uniforms(){return{count:Math.max(1,Math.round(this.params.count??12)),shadow:Math.min(Math.max(this.params.shadow??.5,0),1),sweep:nj[this.params.direction??"center"]}}}],27202),e.s(["f",0,class extends ss{constructor(){super(...arguments),this.name="zoom",this.overflow=!0,this.frag=`
vec4 transition(vec2 uv, float t) {
  vec2 uv1 = (uv - 0.5) * (1.0 - t) + 0.5;
  vec2 uv2 = (uv - 0.5) / (t * 0.999 + 0.001) + 0.5;
  // Tile the new content only inside the element, so the overflow shows just the old one.
  vec4 to = inRange(uv) ? readTo(fract(uv2)) : vec4(0.0);
  return mix(readFrom(uv1), to, t);
}
`}}],99050),e.s(["f",0,class extends ss{constructor(){super(...arguments),this.name="zoom_blur",this.overflow=!0,this.frag=`
${aj}
${aG}
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