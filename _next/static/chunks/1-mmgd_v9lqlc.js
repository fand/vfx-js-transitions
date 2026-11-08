(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,83790,86679,6010,28263,36951,1633,e=>{e.i(90422),e.i(18289),e.i(7150);var t=e.i(16597),i=e.i(81290),r=e.i(60416),s=e.i(3066);e.s([],83790),e.i(61069),e.s([],86679),e.i(61388),e.i(99984),e.s([],6010),e.s([],28263),e.s(["f",0,function(e){return t.forwardRef(function(o,a){let n=(0,s.f)(),[l,f]=(0,t.useState)(null),{vfxProps:h,domProps:c}=(0,r.r)(o);return(0,i.Y)(l,n,h),(0,t.useEffect)(()=>{if(!n||!l)return;let e=new MutationObserver(()=>n.update(l));return e.observe(l,{characterData:!0,attributes:!0,subtree:!0}),()=>e.disconnect()},[l,n]),t.createElement(e,{...c,ref:e=>{f(e),a instanceof Function?a(e):a&&(a.current=e)}})})}],36951),e.s([],1633)},52729,e=>{e.i(83790),e.i(99984),e.i(86679),e.i(6010),e.i(28263);var t=e.i(36951);e.i(1633),e.i(58786),e.i(59443),e.i(24979),e.i(41570),(0,t.f)("span"),(0,t.f)("div"),(0,t.f)("p"),e.s([],52729)},81290,60416,e=>{var t=e.i(16597);let i=["shader","release","uniforms","overlay","intersection","overflow","wrap","zIndex","backbuffer","autoCrop","glslVersion","effect"];e.s(["B",0,i,"r",0,function(e){let t={},r={};for(let s of Object.keys(e))i.includes(s)?t[s]=e[s]:r[s]=e[s];return{vfxProps:t,domProps:r}}],60416);let r=i.filter(e=>"effect"!==e);function s(){let e=Promise.resolve();return{enqueue(t){let i=e.then(t,t);return e=i.then(()=>{},()=>{}),i}}}async function o(e,t,i,s,o){let a=function(e,t){for(let i of r)if(e[i]!==t[i])return!1;return!0}(i,s);if(!a||i.effect!==s.effect){if(a&&void 0!==s.effect)return void await e.updateEffects(t,s.effect);e.remove(t),await o(t,s)}}e.s(["P",0,o,"$",0,s,"Y",0,function(e,i,r){let a=(0,t.useRef)(r);a.current=r;let n=(0,t.useRef)(null),l=(0,t.useRef)(null);(0,t.useEffect)(()=>{if(!i||!e)return;let t=l.current;null===t&&(l.current=t=s());let r=!1;return t.enqueue(async()=>{if(r)return;let t=a.current;try{await i.add(e,t),n.current=t}catch(e){console.error("[@vfx-js/react] add failed:",e)}}),()=>{r=!0,t.enqueue(()=>{i.remove(e),n.current=null})}},[e,i]),(0,t.useEffect)(()=>{if(!i||!e)return;let t=l.current;null===t&&(l.current=t=s()),t.enqueue(async()=>{let t=n.current;if(t&&t!==r)try{await o(i,e,t,r,(e,t)=>i.add(e,t)),n.current=r}catch(e){console.error("[@vfx-js/react] applyDelta failed:",e)}})},[i,e,r])}],81290)},58786,59443,e=>{var t=e.i(16597),i=e.i(76137),r=e.i(36180);e.s(["f",0,function(e){let s=(0,t.useContext)(r.f),o=(0,t.useRef)(e);(0,t.useLayoutEffect)(()=>s?s.register(o.current):void(0,i.R)("transition-in","[@vfx-js/react] useTransitionIn does nothing outside <VFXTransition>."),[s])}],58786),e.s([],59443)},41570,22305,e=>{var t=e.i(61069),i=e.i(16597),r=e.i(3066),s=e.i(54057),o=e.i(36180);let a=null;function n(){let e=null!==a&&Date.now()-a.at<=1e4?a:null;return a=null,e?e.spec:null}function l(e){a={spec:e,at:Date.now()}}e.s(["n",0,l,"i",0,n,"e",0,function(e){return t=>{(function(e){if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return!1;let t=e.currentTarget?.getAttribute?.("target");return!t||"_self"===t})(t)&&l(e)}}],22305);let f={display:"contents"},h={height:"100dvh",overflow:"hidden"};e.s(["f",0,function(e){let{pageKey:a,children:l,className:c,style:u,fullscreen:d=!0,...p}=e,m=(0,r.f)(),v=(0,s.f)(p),g=(0,i.useRef)(null),w=(0,i.useRef)(null),[x,y]=(0,i.useState)({key:a,node:l}),b=(0,i.useRef)(a),T=(0,i.useRef)([]),E=(0,i.useRef)(null),[M]=(0,i.useState)(()=>({register:e=>(E.current=e,()=>{E.current===e&&(E.current=null)})}));(0,i.useEffect)(()=>{let e=g.current;if(!m||!e)return;let t=m.addTransition(e,v);return w.current=t,()=>{t.destroy(),w.current=null}},[m,v]),(0,i.useLayoutEffect)(()=>{let e=T.current;for(let t of(T.current=[],e))t()},[x]),(0,i.useEffect)(()=>{if(a===b.current)return;b.current=a;let e={key:a,node:l},t=w.current;t&&void 0!==a?(E.current=null,t.run(()=>new Promise(t=>{b.current!==a?t():(T.current.push(t),(0,i.startTransition)(()=>y(e)))}),()=>n()??E.current??{}).catch(e=>{console.error("[@vfx-js/react] VFXTransition run failed:",e)})):(0,i.startTransition)(()=>y(e))});let S=(0,i.useRef)(x);S.current.key!==x.key&&(S.current=x),(void 0===a||a===x.key)&&(S.current={key:x.key,node:l});let k=S.current;return(0,t.jsx)("div",{style:f,children:(0,t.jsx)("div",{ref:g,className:c,style:d?{...h,...u}:u,children:(0,t.jsx)(o.f.Provider,{value:M,children:(0,t.jsx)(i.Fragment,{children:k.node},k.key)})})})}],41570)},54057,e=>{var t=e.i(16597);e.s(["f",0,function(e){let i=(0,t.useRef)({}).current;for(let t of Object.keys(i))t in e||delete i[t];return Object.assign(i,e),i}])},36180,e=>{let t=(0,e.i(16597).createContext)(null);e.s(["f",0,t])},24979,e=>{var t=e.i(16597),i=e.i(3066),r=e.i(54057);e.s(["f",0,function(e={}){let s=(0,i.f)(),o=(0,r.f)(e),[a,n]=(0,t.useState)(null),l=(0,t.useRef)(null),[f,h]=(0,t.useTransition)(),c=(0,t.useRef)(!1),u=(0,t.useRef)([]);(0,t.useEffect)(()=>{if(!s||!a)return;let e=s.addTransition(a,o);return l.current=e,()=>{e.destroy(),l.current=null}},[s,a,o]),(0,t.useLayoutEffect)(()=>{if(f){c.current=!0;return}if(c.current){c.current=!1;let e=u.current;for(let t of(u.current=[],e))t()}},[f]);let d=(0,t.useCallback)(e=>new Promise(t=>{u.current.push(t),c.current=!1,h(e),requestAnimationFrame(()=>{c.current||t()})}),[]);return{ref:n,run:(0,t.useCallback)(async(e,t)=>{let i=l.current;i?await i.run(()=>d(e),t):await d(e)},[d])}}])},3066,99984,76137,e=>{var t=e.i(16597);let i=(0,t.createContext)(null),r=(0,t.createContext)(!1);e.s(["i",0,i,"V",0,r],99984),e.i(90422);var s=e.i(61388);let o=["pixelRatio","zIndex","postEffect","autoplay"],a=null,n={},l=0,f=!1,h=!1,c=[],u=new Set;function d(){for(let e of u)e()}function p(){a&&(a.stop(),a.destroy(),a=null)}function m(){var e;if(h=!1,0===l||f)return;let t=c[c.length-1]?.config??{};a&&(e=n,o.every(i=>t[i]===e[i]))||(p(),n=t,f=null===(a=s.f.init({...t})),d())}function v(){l++,h||(h=!0,queueMicrotask(m))}function g(){--l>0||requestAnimationFrame(()=>{l>0||(p(),d())})}function w(e){return u.add(e),()=>u.delete(e)}function x(){return a}let y=new Set;e.s(["Y",0,v,"S",0,x,"z",0,g,"i",0,w,"R",0,function(e,t){y.has(e)||(y.add(e),console.warn(t))}],76137);let b=()=>null,T=()=>()=>{};e.s(["f",0,function({acquire:e=!0}={}){let s=(0,t.useContext)(r),o=(0,t.useContext)(i),a=(0,t.useSyncExternalStore)(s?T:w,x,b);return(0,t.useEffect)(()=>{if(!s&&e)return v(),g},[s,e]),s?o:a}],3066)},90422,28113,63363,18289,7150,61388,75682,28317,96210,66864,84177,166,57888,35668,97394,81651,18013,26873,76359,27202,99050,1656,10303,e=>{let t,i=`#version 300 es
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
`,s=i.split("\n").length;var o,a,n,l,f,h,c,u,d,p,m,v,g,w,x,y,b,T,E,M,S,k,R,C,W,A,P,z,F,_,I,U,L,B,V,O,D,N,$,H,X,j,G,q,J,K,Y,Q,Z,ee,et,ei,er,es,eo,ea,en,el,ef,eh,ec,eu,ed,ep,em,ev,eg,ew,ex,ey,eb,eT,eE,eM,eS,ek,eR,eC,eW,eA,eP,ez,eF,e_,eI,eU,eL,eB,eV,eO,eD,eN,e$,eH,eX,ej,eG,eq,eJ,eK,eY,eQ,eZ,e0,e1,e2,e4,e3,e5,e6,e8,e9,e7,te,tt,ti,tr,ts,to,ta,tn,tl,tf,th,tc,tu,td,tp,tm,tv,tg,tw,tx,ty,tb,tT,tE,tM,tS,tk,tR,tC,tW,tA,tP,tz,tF,t_,tI,tU,tL,tB,tV,tO,tD,tN,t$,tH,tX,tj,tG,tq,tJ,tK,tY,tQ,tZ,t0,t1,t2,t4,t3,t5,t6,t8,t9,t7,ie,it,ii,ir,is,io,ia,il,ih,ic,iu,id,ip,im,iv,ig,iw,ix,iy,ib,iT,iE,iM,iS,ik,iR,iC,iW,iA,iP,iz,iF,i_,iI,iU,iL,iB,iV,iO,iD,iN,i$,iH,iX,ij,iG,iq,iJ,iK,iY,iQ,iZ,i0,i1,i2,i4,i3,i5,i6,i8,i9,i7,re,rt,ri,rr,rs,ro,ra,rn,rl,rf,rh,rc,ru,rd,rp,rm,rv,rg,rw,rx,ry,rb,rT,rE,rM,rS,rk,rR,rC,rW,rA,rP,rz,rF,r_,rI,rU,rL,rB,rV,rO,rD,rN,r$,rH,rX,rj,rG,rq,rJ,rK,rY,rQ,rZ,r0,r1,r2,r4,r3,r5,r6,r8,r9,r7,se=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},st=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let si=new Map,sr=new WeakMap;class ss{constructor(e={}){o.set(this,null),this.params=e}uniforms(e){return{}}start(e){se(this,o,e,"f")}end(){se(this,o,null,"f")}outputRect(e){let t=st(this,o,"f")?.overflow??this.overflow;if(void 0===t||function(e,t){let[i,r,s,o]=e,[a,n,l,f]=t;return i<=a&&r<=n&&i+s>=a+l&&r+o>=n+f}(e.contentRect,e.canvasRect))return;if(!0===t)return e.canvasRect;let i=t*e.pixelRatio,[r,s,a,n]=e.contentRect;return[r-i,s-i,a+2*i,n+2*i]}render(e){var t,o;let a;if(e.holding)return void e.blit(e.src);let n=function(e){let t=si.get(e);void 0===t&&(t=`${i}
${e}
${r}`,si.set(e,t));return t}(this.frag),l=(t=e.gl,(a=sr.get(t))||(a=new Set,sr.set(t,a)),a);if(l.has(n)){e.cut(),e.blit(e.src);return}try{e.draw({frag:n,uniforms:{...this.uniforms(e),from:e.from,src:e.src,t:e.progress.t,reverse:+!!e.reverse,resolution:[e.dims.elementPixel[0],e.dims.elementPixel[1]],time:e.time},target:e.target})}catch(i){let t;l.add(n),o=this.name,(t=function(e){let t=e instanceof Error?e.message:String(e);if(!/compile failed|link failed/i.test(t))return null;let i=[];for(let e of t.matchAll(/ERROR:\s*\d+:(\d+):\s*(.*)/g)){let t=Number(e[1])-s;i.push(t>=1?`line ${t}: ${e[2]}`:e[2])}return i.length>0?i:[t.split("\n")[0]]}(i))?(console.error(`[VFX-JS] transition "${o}" failed to compile; cutting to the new content.
  ${t.join("\n  ")}`),console.debug(i)):console.error(`[VFX-JS] transition "${o}" failed; cutting to the new content.`,i),e.cut(),e.blit(e.src)}}}o=new WeakMap,e.s(["f",0,ss],28113);class so extends ss{constructor(){super(...arguments),this.name="crossfade",this.frag=`
vec4 transition(vec2 uv, float t) {
  return mix(readFrom(uv), readTo(uv), t);
}
`}}function sa(e){return"CANVAS"===e.tagName&&(e.hasAttribute("layoutsubtree")||"drawable"===e.getAttribute("content"))}function sn(e,t){e.setAttribute("layoutsubtree",""),e.setAttribute("content","drawable"),t?.setAttribute("drawable","")}function sl(e){return e.currentSrc||e.src}function sf(e,t){let i=e.getBoundingClientRect(),r=getComputedStyle(e);t.className=e.className,t.style.cssText=e.style.cssText,t.style.width=`${i.width}px`,t.style.height=`${i.height}px`,t.style.display="inline"===r.display?"inline-block":r.display,t.style.boxSizing="border-box"}async function sh(e){let t=await fetch(e),i=await t.blob();return URL.createObjectURL(i)}async function sc(e){let t=Array.from(e.querySelectorAll("img")).filter(e=>e.complete&&e.naturalWidth>0&&function(e){let t=sl(e);if(!t||t.startsWith("data:"))return!1;try{return new URL(t,location.href).origin!==location.origin}catch{return!1}}(e));if(0===t.length)return()=>{};let i=new Map,r=[];return await Promise.all(t.map(async e=>{try{let t=sl(e),s=await sh(t);i.set(e,t),r.push(s),await new Promise(t=>{e.addEventListener("load",()=>t(),{once:!0}),e.src=s})}catch{}})),()=>{for(let[e,t]of i)e.src=t;for(let e of r)URL.revokeObjectURL(e)}}e.s(["f",0,so],63363);let su=["margin-top","margin-right","margin-bottom","margin-left"],sd=new Set(["IMG","VIDEO","CANVAS","IFRAME","EMBED","OBJECT","INPUT","TEXTAREA","SELECT"]),sp=["position","top","right","bottom","left","float","flex","flex-grow","flex-shrink","flex-basis","align-self","justify-self","place-self","order","grid-column","grid-column-start","grid-column-end","grid-row","grid-row-start","grid-row-end","grid-area"],sm=new WeakMap,sv=new WeakMap,sg=new WeakMap,sw=new WeakMap,sx=new WeakMap,sy=new WeakMap,sb=new WeakMap,sT=new WeakMap,sE=new WeakMap,sM=new WeakSet,sS=new WeakMap,sk=new WeakMap,sR=new WeakSet,sC=new WeakSet;function sW(e){if(e)for(let t of[...e])t()}function sA(e,t,i){if("function"==typeof e.moveBefore)try{e.moveBefore(t,i);return}catch{}e.insertBefore(t,i)}function sP(e,t=300){let i=sk.get(e);if(!i)return;let r=new Promise(e=>{let r=t=>{clearTimeout(o),i.delete(s),e(t)},s=()=>r(!0),o=setTimeout(()=>r(!1),t);i.add(s)});return e.requestPaint(),r}function sz(e){if(sR.has(e))return()=>{};sR.add(e);let{width:t,height:i,overflow:r}=e.style,s=e.getBoundingClientRect();return e.style.setProperty("width",`${s.width}px`),e.style.setProperty("height",`${s.height}px`),e.style.setProperty("overflow","hidden"),()=>{if(!sR.has(e))return;sR.delete(e),e.style.width=t,e.style.height=i,e.style.overflow=r;let s=e.firstElementChild;if(s&&!sC.has(e)){let t=Math.round(s.getBoundingClientRect().height);e.style.setProperty("height",`${t}px`)}}}function sF(e){sS.get(e)?.(),sS.delete(e)}function s_(e,t=!1){requestAnimationFrame(()=>{t||e.getContext("2d")?.clearRect(0,0,e.width,e.height),sF(e)})}async function sI(e,t){sn(e,e.firstElementChild);let i=e.getContext("2d");if(!i)throw Error("Failed to get 2d context from layoutsubtree canvas");let{onCapture:r,maxSize:s}=t,o=new Set;sk.set(e,o);let a=null,n=null,l=new Promise(e=>{n=e}),f=null,h=t=>{if(t){if(t===f)return;f=t}let l=e.firstElementChild;if(!l||0===e.width||0===e.height||0===l.getClientRects().length)return;l.hasAttribute("drawable")||l.setAttribute("drawable",""),i.clearRect(0,0,e.width,e.height),i.drawElementImage(l,0,0),function(e,t){let i=t.querySelectorAll("canvas");if(0===i.length)return;let r=t.getBoundingClientRect();if(r.width<=0||r.height<=0)return;let s=e.canvas.width/r.width,o=e.canvas.height/r.height;for(let t of i){if(0===t.width||0===t.height||!("function"==typeof t.checkVisibility?t.checkVisibility({visibilityProperty:!0,opacityProperty:!0}):"hidden"!==getComputedStyle(t).visibility))continue;let i=function(e,t,i,r){if(t.width<=0||t.height<=0)return null;let s=t.left-e.left,o=t.top-e.top;return s+t.width<=0||o+t.height<=0||s>=e.width||o>=e.height?null:[s*i,o*r,t.width*i,t.height*r]}(r,function(e){let t=e.getBoundingClientRect(),i=getComputedStyle(e),r=Number.parseFloat(i.paddingLeft)||0,s=Number.parseFloat(i.paddingRight)||0,o=Number.parseFloat(i.paddingTop)||0,a=Number.parseFloat(i.paddingBottom)||0,n=e.clientWidth>0?t.width/e.offsetWidth:1,l=e.clientHeight>0?t.height/e.offsetHeight:1;return{left:t.left+(e.clientLeft+r)*n,top:t.top+(e.clientTop+o)*l,width:Math.max(0,e.clientWidth-r-s)*n,height:Math.max(0,e.clientHeight-o-a)*l}}(t),s,o);if(i)try{e.drawImage(t,...i)}catch{}}}(i,l);let h=e.width,c=e.height;if(s&&(h>s||c>s)){let e=Math.min(s/h,s/c);h=Math.floor(h*e),c=Math.floor(c*e)}a&&a.width===h&&a.height===c||(a=new OffscreenCanvas(h,c));let u=a.getContext("2d");if(u){if(u.clearRect(0,0,h,c),u.drawImage(e,0,0,h,c),n){n(a),n=null,sW(o);return}i.clearRect(0,0,e.width,e.height),r(a),sW(o)}};e.onpaint=h,e.addEventListener("paint",h),sv.set(e,h);let c=new ResizeObserver(t=>{for(let i of t){let t=i.devicePixelContentBoxSize?.[0];if(t)e.width=t.inlineSize,e.height=t.blockSize;else{let t=i.borderBoxSize?.[0];if(t){let i=window.devicePixelRatio;e.width=Math.round(t.inlineSize*i),e.height=Math.round(t.blockSize*i)}}}e.requestPaint()});c.observe(e,{box:"device-pixel-content-box"}),sm.set(e,c);let u=e.firstElementChild;if(u){let t=new ResizeObserver(t=>{if(sR.has(e)||sC.has(e))return;let i=t[0].borderBoxSize?.[0];if(!i)return;let r=`${Math.round(i.blockSize)}px`;r!==e.style.height&&e.style.setProperty("height",r)});t.observe(u),sg.set(e,t)}return l}function sU(e){e.onpaint=null,sW(sk.get(e)),sk.delete(e);let t=sv.get(e);t&&(e.removeEventListener("paint",t),sv.delete(e));let i=sm.get(e);i&&(i.disconnect(),sm.delete(e));let r=sg.get(e);r&&(r.disconnect(),sg.delete(e))}async function sL(e,t){let i=e.getBoundingClientRect(),r=function(e){let t={width:null,height:null};if("function"!=typeof e.computedStyleMap||sd.has(e.tagName))return t;let i=e.computedStyleMap(),r=e=>i.get(e)?.toString()??"auto",s=r("position");if("fixed"!==s&&"absolute"!==s)return t;let o=(t,i,s)=>{let o=r(i),a=r(s);if("auto"!==r(t)||"auto"===o||"auto"===a)return null;let n=[`margin-${i}`,`margin-${s}`].map(i=>{let s=r(i);return"height"===t&&s.includes("%")?getComputedStyle(e).getPropertyValue(i):s}).filter(e=>"auto"!==e);return`calc(${["100%",o,a,...n].join(" - ")})`};return{width:o("width","left","right"),height:o("height","top","bottom")}}(e),s=document.createElement("canvas");e.hasAttribute("drawable")||sM.add(e),sn(s,e),s.className=e.className;let o=e.getAttribute("style");o&&s.setAttribute("style",o),s.style.setProperty("padding","0"),s.style.setProperty("border","none"),s.style.setProperty("box-sizing","content-box"),s.style.setProperty("background","transparent");let a=getComputedStyle(e),n="inline"===a.display?"block":a.display;for(let e of(s.style.setProperty("display",n),su))s.style.setProperty(e,a.getPropertyValue(e));for(let e of sp)s.style.setProperty(e,a.getPropertyValue(e));if(r.width)s.style.setProperty("width",r.width);else e.style.width.endsWith("px")||sd.has(e.tagName)&&"function"==typeof e.computedStyleMap&&e.computedStyleMap().get("width")?.toString()==="auto"?s.style.setProperty("width",`${i.width}px`):s.style.setProperty("width","100%");r.height?(s.style.setProperty("height",r.height),sC.add(s)):s.style.height||s.style.setProperty("height",`${i.height}px`);let l=window.devicePixelRatio;s.width=Math.round(i.width*l),s.height=Math.round(i.height*l),t.stillCover&&sS.set(s,function(e,t){let i=e.getBoundingClientRect(),r=e.cloneNode(!0),s=[e,...e.querySelectorAll("*")],o=[r,...r.querySelectorAll("*")],a=[],n=[];for(let e=0;e<s.length&&e<o.length;e++){let t=s[e],i=o[e];(t.scrollTop||t.scrollLeft)&&a.push([i,t.scrollTop,t.scrollLeft]),t instanceof HTMLScriptElement?n.push([i,document.createComment("script")]):t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?n.push([i,function(e){let t=document.createElement("canvas"),i=e instanceof HTMLVideoElement?e.videoWidth:e.width,r=e instanceof HTMLVideoElement?e.videoHeight:e.height;t.width=Math.max(1,i),t.height=Math.max(1,r),sf(e,t);try{t.getContext("2d")?.drawImage(e,0,0,t.width,t.height)}catch{}return t}(t)]):t instanceof HTMLIFrameElement?n.push([i,function(e){let t=document.createElement("div");return sf(e,t),t}(t)]):t instanceof HTMLInputElement&&i instanceof HTMLInputElement?(i.value=t.value,i.checked=t.checked):t instanceof HTMLTextAreaElement&&i instanceof HTMLTextAreaElement?i.value=t.value:t instanceof HTMLSelectElement&&i instanceof HTMLSelectElement?i.selectedIndex=t.selectedIndex:t instanceof HTMLMediaElement&&i.removeAttribute("autoplay")}for(let[e,t]of n)e.replaceWith(t);r.setAttribute("aria-hidden","true");let l=r.style;l.setProperty("position","fixed"),l.setProperty("left",`${i.left}px`),l.setProperty("top",`${i.top}px`),l.setProperty("width",`${i.width}px`),l.setProperty("height",`${i.height}px`),l.setProperty("box-sizing","border-box"),l.setProperty("margin","0"),l.setProperty("pointer-events","none"),l.setProperty("z-index",t.toString()),e.parentNode?.insertBefore(r,e);let f=r.getBoundingClientRect();for(let[e,t,r]of((f.left!==i.left||f.top!==i.top)&&(l.setProperty("left",`${2*i.left-f.left}px`),l.setProperty("top",`${2*i.top-f.top}px`)),a))e.scrollTop=t,e.scrollLeft=r;return function(e,t){let i=e[0],r=t[0];if(!i||!r||"function"!=typeof i.getAnimations)return;let s=(e,t)=>{if(!("animationName"in e))return null;let i=e.effect,r=i?.target,s=r?t.get(r):void 0;return void 0===s?null:`${s}|${i?.pseudoElement??""}|${e.animationName}`},o=new Map(t.map((e,t)=>[e,t])),a=new Map;for(let e of r.getAnimations({subtree:!0})){let t=s(e,o);t&&a.set(t,e)}let n=new Map(e.map((e,t)=>[e,t]));for(let e of i.getAnimations({subtree:!0})){let t=s(e,n),i=t&&a.get(t);i&&(i.currentTime=e.currentTime,i.pause())}}(s,o),()=>{r.remove()}}(e,t.stillCover.zIndex)),sw.set(e,e.style.margin),sx.set(e,e.style.width),sy.set(e,e.style.boxSizing),e.parentNode?.insertBefore(s,e),getComputedStyle(s).display,sA(s,e,null),e.style.setProperty("margin","0"),e.style.setProperty("width","100%"),e.style.setProperty("box-sizing","border-box"),(r.width||r.height)&&(sb.set(e,e.style.position),e.style.setProperty("position","static")),r.height&&(sT.set(e,e.style.height),e.style.setProperty("height","100%"));let f=await sc(e);sE.set(s,f);let h=await sI(s,t);return{canvas:s,initialCapture:h}}function sB(e,t){sU(e),sF(e);let i=sE.get(e);i&&(i(),sE.delete(e));let r=e.parentNode;r&&sA(r,t,e),e.remove(),sM.has(t)&&(t.removeAttribute("drawable"),sM.delete(t));let s=sw.get(t);void 0!==s&&(t.style.margin=s,sw.delete(t));let o=sx.get(t);void 0!==o&&(t.style.width=o,sx.delete(t));let a=sy.get(t);void 0!==a&&(t.style.boxSizing=a,sy.delete(t));let n=sb.get(t);void 0!==n&&(t.style.position=n,sb.delete(t));let l=sT.get(t);void 0!==l&&(t.style.height=l,sT.delete(t))}function sV(){if(void 0!==t)return t;try{let e=document.createElement("canvas"),i=e.getContext("2d");t=null!==i&&"function"==typeof i.drawElementImage&&"function"==typeof e.requestPaint}catch{t=!1}return t}e.s(["i",0,sz,"n",0,s_,"a",0,sP,"S",0,sI,"F",0,sU,"Y",0,sB,"c",0,sL],18289),e.s(["f",0,sV],7150);var sO=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)},sD=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i};let sN={t:0,x:0};class s${constructor(){a.add(this),this.enabled=!1,n.set(this,null),l.set(this,[0,0]),f.set(this,[]),h.set(this,!1),c.set(this,null),u.set(this,null),d.set(this,sN),p.set(this,null),m.set(this,null)}snapshot(){return sO(this,a,"m",v).call(this),sD(this,c,null,"f"),this.enabled=!0,new Promise(e=>sO(this,f,"f").push(e))}start(e){return sO(this,a,"m",v).call(this),sD(this,c,e,"f"),sD(this,m,e.onEnd??null,"f"),sD(this,u,null,"f"),sD(this,d,sN,"f"),sD(this,h,!1,"f"),this.enabled=!1,new Promise(e=>{sD(this,p,e,"f")})}cancel(){sO(this,a,"m",v).call(this),sD(this,c,null,"f"),sD(this,h,!1,"f"),this.enabled=!1,sO(this,a,"m",g).call(this)}get frame(){let e=sO(this,n,"f");return e&&(sO(this,h,"f")||sO(this,c,"f"))?{from:e,progress:sO(this,d,"f"),holding:null===sO(this,c,"f")}:null}cut(){sO(this,c,"f")&&(sD(this,c,null,"f"),sO(this,a,"m",v).call(this))}update(e){let t=sO(this,c,"f");if(!t)return;null===sO(this,u,"f")&&sD(this,u,e.time,"f");let i=(e.time-sO(this,u,"f"))/t.duration;if(i>=1){sD(this,c,null,"f"),sO(this,a,"m",v).call(this);return}let r=Math.max(i,0);sD(this,d,{t:function(e,t){return"function"==typeof e?e(t):"linear"===e?t:t*t*(3-2*t)}(t.ease,r),x:r},"f")}render(e){(sO(this,f,"f").length>0&&(e.blit(e.src,sO(this,a,"m",w).call(this,e)),sD(this,h,!0,"f"),sO(this,a,"m",g).call(this)),sO(this,n,"f")&&sO(this,h,"f"))?e.blit(sO(this,n,"f")):(this.enabled=!1,e.blit(e.src))}dispose(){sD(this,n,null,"f"),sD(this,l,[0,0],"f"),sO(this,a,"m",v).call(this),sO(this,a,"m",g).call(this)}}n=new WeakMap,l=new WeakMap,f=new WeakMap,h=new WeakMap,c=new WeakMap,u=new WeakMap,d=new WeakMap,p=new WeakMap,m=new WeakMap,a=new WeakSet,v=function(){let e=sO(this,m,"f");sD(this,m,null,"f"),e?.();let t=sO(this,p,"f");sD(this,p,null,"f"),t?.()},g=function(){let e=sO(this,f,"f");for(let t of(sD(this,f,[],"f"),e))t()},w=function(e){let[t,i]=e.dims.elementPixel;return sO(this,n,"f")&&sO(this,l,"f")[0]===t&&sO(this,l,"f")[1]===i||(sO(this,n,"f")?.dispose(),sD(this,n,e.createRenderTarget({size:[t,i]}),"f"),sD(this,l,[t,i],"f")),sO(this,n,"f")};class sH{constructor(e,t){x.add(this),y.set(this,void 0),b.set(this,null),this.effect=e,sD(this,y,t,"f")}get enabled(){return null!==sO(this,b,"f")&&"function"==typeof this.effect.render&&!1!==this.effect.enabled}start(e){sD(this,b,e,"f"),this.effect.start?.(e)}end(){null!==sO(this,b,"f")&&(sD(this,b,null,"f"),this.effect.end?.())}init(e){return this.effect.init?.(e)}update(e){let t=sO(this,y,"f").frame;if(!t||t.holding)return;let i=sO(this,x,"m",T).call(this,e);i&&this.effect.update?.(i)}render(e){let t=sO(this,x,"m",T).call(this,e);t&&this.effect.render?this.effect.render(t):e.blit(e.src)}outputRect(e){return sO(this,b,"f")?this.effect.outputRect?.(e):void 0}dispose(){this.effect.dispose?.()}}y=new WeakMap,b=new WeakMap,x=new WeakSet,T=function(e){let t=sO(this,y,"f").frame,i=sO(this,b,"f");return t&&i?{...e,from:t.from,progress:t.progress,holding:t.holding,reverse:i.reverse,run:i,cut:()=>sO(this,y,"f").cut()}:null};var sX=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},sj=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};function sG(e,t){let i=void 0!==t.transition?t.params:void 0===e.params&&void 0===t.params?void 0:{...e.params,...t.params};return{transition:t.transition??e.transition,params:i,reverse:t.reverse??e.reverse,duration:t.duration??e.duration,overflow:t.overflow??e.overflow,ease:t.ease??e.ease}}function sq(e,t={}){let i=sG(e,t);return{transition:i.transition??so,params:i.params,reverse:i.reverse??!1,duration:i.duration??.6,overflow:i.overflow,ease:i.ease}}let sJ=new WeakMap;function sK(e,t){return new Promise((i,r)=>{let s=setTimeout(()=>i(!1),t);e.then(()=>{clearTimeout(s),i(!0)},e=>{clearTimeout(s),r(e)})})}class sY{constructor(e,t,i={},r,s=new s$){E.add(this),M.set(this,void 0),S.set(this,void 0),k.set(this,void 0),R.set(this,void 0),C.set(this,void 0),W.set(this,void 0),A.set(this,[]),P.set(this,[]),z.set(this,!1),F.set(this,!1),_.set(this,!1),I.set(this,0),U.set(this,null),L.set(this,!1),B.set(this,!1),V.set(this,null),O.set(this,[]),D.set(this,null),N.set(this,null),$.set(this,null),sX(this,W,r,"f"),sX(this,M,e,"f"),sX(this,S,t,"f"),sX(this,k,i,"f"),sX(this,R,s,"f"),sX(this,C,i.keepWrapped??!1,"f")}get running(){return null!==sj(this,U,"f")}show(e,t={}){let i=sj(this,E,"m",H).call(this,e),{remove:r=!1,...s}=t;if(!this.running&&sj(this,E,"m",X).call(this,i))return Promise.resolve();let o=sj(this,k,"f").slideSpec?.(i),a=o?sG(o,s):s;return this.run(()=>{for(let e of(i.parentElement!==sj(this,S,"f")&&sj(this,S,"f").append(i),Array.from(sj(this,S,"f").children)))e!==i&&(r?e.remove():e.hidden=!0);i.hidden=!1},a)}async run(e,t={}){var i;if(sj(this,L,"f"))return void await e();let r=sX(this,I,(i=sj(this,I,"f"),++i),"f");sX(this,U,r,"f");try{await sj(this,E,"m",j).call(this,r,e,t)}finally{sj(this,U,"f")===r&&sX(this,U,null,"f"),sj(this,I,"f")===r&&(sj(this,E,"m",ee).call(this),sj(this,E,"m",Z).call(this),sj(this,E,"m",J).call(this))}}cancel(){var e;let t=sX(this,I,(e=sj(this,I,"f"),++e),"f");sX(this,U,null,"f"),sj(this,E,"m",ei).call(this),sj(this,R,"f").cancel(),sj(this,E,"m",ee).call(this),sj(this,E,"m",Z).call(this),sj(this,E,"m",J).call(this),sj(this,E,"m",es).call(this,t)}destroy(){sj(this,L,"f")||(sX(this,L,!0,"f"),this.cancel(),sX(this,D,null,"f"),sj(this,W,"f")?.call(this))}}M=new WeakMap,S=new WeakMap,k=new WeakMap,R=new WeakMap,C=new WeakMap,W=new WeakMap,A=new WeakMap,P=new WeakMap,z=new WeakMap,F=new WeakMap,_=new WeakMap,I=new WeakMap,U=new WeakMap,L=new WeakMap,B=new WeakMap,V=new WeakMap,O=new WeakMap,D=new WeakMap,N=new WeakMap,$=new WeakMap,E=new WeakSet,H=function(e){let t=sj(this,S,"f"),i="number"==typeof e?t.children[e]:"string"==typeof e?t.querySelector(e):e;if(!i)throw TypeError(`[VFX-JS] show(): no slide for ${e}.`);if(i.parentElement!==t&&(i.isConnected||t.contains(i)))throw TypeError("[VFX-JS] show(): the slide must be a direct child of the container.");return i},X=function(e){return e.parentElement===sj(this,S,"f")&&!e.hidden&&Array.from(sj(this,S,"f").children).every(t=>t===e||t.hidden)},j=async function(e,t,i){let r,s=()=>e===sj(this,I,"f"),o=!1,a=async()=>{o||(o=!0,await t())},n=async()=>{sj(this,E,"m",ei).call(this),sj(this,R,"f").cancel(),await a(),s()&&(sj(this,B,"f")&&sj(this,C,"f")&&await sj(this,M,"f").update(sj(this,S,"f")),sj(this,E,"m",es).call(this,e))},l=null;if("function"!=typeof i){if(l=sj(this,E,"m",G).call(this,sq(sj(this,k,"f"),i)),!s())return a();if(null===l)return n()}sj(this,E,"m",Q).call(this);try{await sj(this,E,"m",er).call(this,l?.slots??null,s,!0)}catch(e){return console.error("[VFX-JS] transition failed to wrap the element; cutting to the new content.",e),a()}if(!s())return a();sj(this,P,"f").push(sj(this,M,"f").lockSize(sj(this,S,"f"))),sj(this,P,"f").push(sj(this,M,"f").forceRender(sj(this,S,"f")));let f=await sK(sj(this,R,"f").snapshot(),1e3);if(!s())return a();if(!f){sj(this,E,"m",Y).call(this),await a(),s()&&sj(this,E,"m",es).call(this,e);return}l&&sj(this,E,"m",K).call(this,e,l);try{await a(),"function"==typeof i&&s()&&(r=i())}catch(t){throw s()&&(sj(this,E,"m",ei).call(this),sj(this,R,"f").cancel(),sj(this,E,"m",es).call(this,e)),t}if(!s())return;if(null===l){if(l=sj(this,E,"m",G).call(this,sq(sj(this,k,"f"),r)),!s())return;if(null===l)return n();try{await sj(this,E,"m",er).call(this,l.slots,s,!1)}catch(e){return console.error("[VFX-JS] transition failed to swap the effects; cutting to the new content.",e),n()}if(!s())return;sj(this,E,"m",K).call(this,e,l)}sj(this,E,"m",Q).call(this);try{await sj(this,E,"m",eo).call(this)}catch(e){console.error("[VFX-JS] transition waitFor failed:",e)}if(!s()||(await sj(this,M,"f").updateInTime(sj(this,S,"f"))||sj(this,F,"f")||(sX(this,F,!0,"f"),console.warn("[VFX-JS] transition: the new content was not captured in time; it may pop in during the run.")),!s())||(await new Promise(e=>requestAnimationFrame(()=>e())),!s()))return;let h=sj(this,R,"f").start({duration:l.run.duration,ease:l.ease,onEnd:()=>sj(this,E,"m",ei).call(this,e)}),c=await sK(h,1e3*l.run.duration+1e3);s()&&(c||sj(this,E,"m",Y).call(this),sj(this,E,"m",es).call(this,e))},G=function(e){let t,i;if(e.duration<=0)return null;let r=e.transition;if("function"!=typeof r&&!sj(this,E,"m",q).call(this,r))return null;try{({transition:t,slots:i}=sj(this,E,"m",et).call(this,r,e.params))}catch(e){return console.error(`[VFX-JS] transition "${r.name}" constructor failed; cutting to the new content.`,e),null}let s={reverse:e.reverse,duration:e.duration},o=e.overflow??t.overflow;return void 0!==o&&(s.overflow=o),{run:s,ease:e.ease??t.ease??"smoothstep",slots:i}},q=function(e){let t=sJ.get(e);return t&&t!==this?(sj(this,_,"f")||(sX(this,_,!0,"f"),console.warn(`[VFX-JS] transition "${e.name??"unnamed"}" instance is running in another container; cutting to the new content. Pass the class to share it.`)),!1):(sj(this,N,"f")!==e&&sj(this,E,"m",J).call(this),sJ.set(e,this),sX(this,N,e,"f"),!0)},J=function(){let e=sj(this,N,"f");sX(this,N,null,"f"),e&&sJ.get(e)===this&&sJ.delete(e)},K=function(e,{run:t,slots:i}){for(let r of(sj(this,E,"m",ei).call(this),sX(this,$,{id:e,slots:i},"f"),i))r.start(t)},Y=function(){sj(this,z,"f")||(sX(this,z,!0,"f"),console.warn("[VFX-JS] transition target did not render in time; cutting to the new content.")),sj(this,E,"m",ei).call(this),sj(this,R,"f").cancel()},Q=function(){sj(this,A,"f").push(sj(this,M,"f").freezeInside(sj(this,S,"f")))},Z=function(){let e=sj(this,P,"f");for(let t of(sX(this,P,[],"f"),e))t()},ee=function(){let e=sj(this,A,"f");for(let t of(sX(this,A,[],"f"),e))t()},et=function(e,t){var i;let r,s,o,a=sj(this,D,"f");if(a?.key.source===e&&("function"!=typeof e||(i=a.key.params,r=i??{},s=t??{},(o=Object.keys(r)).length===Object.keys(s).length&&o.every(e=>{var t,i;return e in s&&(t=r[e],i=s[e],Array.isArray(t)&&Array.isArray(i)?t.length===i.length&&t.every((e,t)=>e===i[t]):t===i)}))))return a;let n="function"==typeof e?new e(t):e,l=[new sH(n,sj(this,R,"f"))];return sX(this,D,{key:{source:e,params:t},transition:n,slots:l},"f"),{transition:n,slots:l}},ei=function(e){let t=sj(this,$,"f");if(t&&(void 0===e||t.id===e))for(let e of(sX(this,$,null,"f"),t.slots))e.end()},er=async function(e,t,i){var r;if(sj(this,V,"f")&&await sj(this,V,"f"),!t())return;let s=null!==e?[sj(this,R,"f"),...e]:sj(this,B,"f")?sj(this,O,"f"):[sj(this,R,"f")];if(!sj(this,B,"f")){let e=sj(this,M,"f").addHTMLWithStill(sj(this,S,"f"),{effect:s}).then(()=>{sX(this,B,!0,"f"),sX(this,O,s,"f")}).finally(()=>{sX(this,V,null,"f")});sX(this,V,e,"f"),await e;return}if(r=sj(this,O,"f"),!(s.length===r.length&&s.every((e,t)=>e===r[t]))){sX(this,O,s,"f");let e=sj(this,M,"f").updateEffects(sj(this,S,"f"),s).finally(()=>{sX(this,V,null,"f")});sX(this,V,e,"f"),await e}i&&await sj(this,M,"f").update(sj(this,S,"f"))},es=function(e){if(sj(this,C,"f")&&!sj(this,L,"f"))return;let t=()=>{e===sj(this,I,"f")&&sj(this,B,"f")&&(sX(this,B,!1,"f"),sX(this,O,[],"f"),sj(this,M,"f").remove(sj(this,S,"f")))};sj(this,V,"f")?sj(this,V,"f").then(t,()=>{}):t()},eo=function(){let e=sj(this,k,"f").waitFor??"media";return"none"===e?Promise.resolve():"media"===e?function(e,t,i=300){let r=[];for(let t of e.querySelectorAll("img, video")){let e="IMG"===t.tagName;(e?t.complete:t.readyState>=2)||function(e){if("IMG"===e.tagName){let t;return"lazy"===e.loading&&(!((t=e.getBoundingClientRect()).right>0)||!(t.bottom>0)||!(t.left<window.innerWidth)||!(t.top<window.innerHeight))}return"none"===e.preload}(t)||r.push(new Promise(i=>{let r=()=>i();t.addEventListener(e?"load":"loadeddata",r,{once:!0}),t.addEventListener("error",r,{once:!0})}))}return(t&&r.push(t),0===r.length)?Promise.resolve():new Promise(e=>{let t=setTimeout(e,i),s=()=>{clearTimeout(t),e()};Promise.all(r).then(s,s)})}(sj(this,S,"f"),document.fonts?.ready):e(sj(this,S,"f"))};var sQ=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},sZ=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class s0{constructor(e,t,i){ea.add(this),this.wrapS="clamp",this.wrapT="clamp",this.minFilter="linear",this.magFilter="linear",this.needsUpdate=!0,this.source=null,en.set(this,void 0),el.set(this,!1),ef.set(this,void 0),eh.set(this,void 0),sQ(this,en,e,"f"),this.gl=e.gl;let r=i?.externalHandle;sQ(this,eh,void 0!==r,"f"),void 0!==r?(this.texture=r,sQ(this,el,!0,"f"),this.needsUpdate=!1):sZ(this,ea,"m",ec).call(this),t&&(this.source=t),sQ(this,ef,i?.autoRegister!==!1&&!sZ(this,eh,"f"),"f"),sZ(this,ef,"f")&&e.addResource(this)}restore(){sZ(this,eh,"f")||(sZ(this,ea,"m",ec).call(this),sQ(this,el,!1,"f"),this.needsUpdate=!0)}bind(e){let t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture),this.needsUpdate&&(sZ(this,ea,"m",eu).call(this),this.needsUpdate=!1)}dispose(){sZ(this,ef,"f")&&sZ(this,en,"f").removeResource(this),sZ(this,eh,"f")||this.gl.deleteTexture(this.texture)}}function s1(e,t){return"repeat"===t?e.REPEAT:"mirror"===t?e.MIRRORED_REPEAT:e.CLAMP_TO_EDGE}function s2(e,t){return"nearest"===t?e.NEAREST:e.LINEAR}function s4(e){return new Promise((t,i)=>{let r=new Image;r.crossOrigin="anonymous",r.onload=()=>t(r),r.onerror=i,r.src=e})}en=new WeakMap,el=new WeakMap,ef=new WeakMap,eh=new WeakMap,ea=new WeakSet,ec=function(){let e=this.gl.createTexture();if(!e)throw Error("[VFX-JS] Failed to create texture");this.texture=e},eu=function(){let e=this.gl,t=this.source;if(e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_ALIGNMENT,4),t)try{e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t)}catch(e){console.error(e)}else if(!sZ(this,el,"f")){let t=new Uint8Array([0,0,0,0]);e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,t)}sZ(this,ea,"m",ed).call(this),sQ(this,el,!0,"f")},ed=function(){let e=this.gl;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,s1(e,this.wrapS)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,s1(e,this.wrapT)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,s2(e,this.minFilter)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,s2(e,this.magFilter))};var s3=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},s5=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class s6{constructor(e,t,i,r={}){ep.add(this),em.set(this,void 0),s3(this,em,e,"f"),this.gl=e.gl,this.width=Math.max(1,Math.floor(t)),this.height=Math.max(1,Math.floor(i)),this.float=r.float??!1,this.mipmap=r.mipmap??!1,this.texture=new s0(e,void 0,{autoRegister:!1});let s=r.wrap;void 0!==s&&("string"==typeof s?(this.texture.wrapS=s,this.texture.wrapT=s):(this.texture.wrapS=s[0],this.texture.wrapT=s[1])),void 0!==r.filter&&(this.texture.minFilter=r.filter,this.texture.magFilter=r.filter),s5(this,ep,"m",ev).call(this),e.addResource(this)}setSize(e,t){let i=Math.max(1,Math.floor(e)),r=Math.max(1,Math.floor(t));(i!==this.width||r!==this.height)&&(this.width=i,this.height=r,s5(this,ep,"m",ev).call(this))}restore(){this.texture.restore(),s5(this,ep,"m",ev).call(this)}dispose(){s5(this,em,"f").removeResource(this),this.gl.deleteFramebuffer(this.fbo),this.texture.dispose()}generateMipmaps(){if(!this.mipmap)return;let e=this.gl;e.bindTexture(e.TEXTURE_2D,this.texture.texture),e.generateMipmap(e.TEXTURE_2D),e.bindTexture(e.TEXTURE_2D,null)}}function s8(e,t){return"repeat"===t?e.REPEAT:"mirror"===t?e.MIRRORED_REPEAT:e.CLAMP_TO_EDGE}function s9(e,t,i,r){return{x:e.left+i,y:t-r-e.bottom,w:e.right-e.left,h:e.bottom-e.top}}em=new WeakMap,ep=new WeakSet,ev=function(){let e=this.gl,t=this.fbo,i=e.createFramebuffer();if(!i)throw Error("[VFX-JS] Failed to create framebuffer");this.fbo=i;let r=this.texture.texture;e.bindTexture(e.TEXTURE_2D,r);let s=s5(this,em,"f").floatLinearFilter;if(this.float&&s&&!s5(this,em,"f").floatBlend)throw Error("[VFX-JS] EXT_float_blend is not supported.");let o=this.float?s?e.RGBA32F:e.RGBA16F:e.RGBA8,a=this.float?s?e.FLOAT:e.HALF_FLOAT:e.UNSIGNED_BYTE;if(this.mipmap){let t=Math.floor(Math.log2(Math.max(this.width,this.height)))+1,i=this.width,r=this.height;for(let s=0;s<t;s++)e.texImage2D(e.TEXTURE_2D,s,o,i,r,0,e.RGBA,a,null),i=Math.max(1,i>>1),r=Math.max(1,r>>1)}else e.texImage2D(e.TEXTURE_2D,0,o,this.width,this.height,0,e.RGBA,a,null);let n="nearest"===this.texture.minFilter?e.NEAREST:e.LINEAR,l="nearest"===this.texture.magFilter?e.NEAREST:e.LINEAR,f=this.mipmap?"nearest"===this.texture.minFilter?e.NEAREST_MIPMAP_NEAREST:e.LINEAR_MIPMAP_LINEAR:n,h=s8(e,this.texture.wrapS),c=s8(e,this.texture.wrapT);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,h),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,c),e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null),this.texture.needsUpdate=!1,this.texture.source=null,t&&e.deleteFramebuffer(t)};var s7=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},oe=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class ot{constructor(e,t,i,r,s,o={}){eg.set(this,void 0),ew.set(this,void 0),ex.set(this,void 0),ey.set(this,void 0),s7(this,eg,t,"f"),s7(this,ew,i,"f"),s7(this,ex,r,"f");let a=t*r,n=i*r,l={float:s,wrap:o.wrap,filter:o.filter,mipmap:o.mipmap};s7(this,ey,[new s6(e,a,n,l),new s6(e,a,n,l)],"f")}get texture(){return oe(this,ey,"f")[0].texture}get target(){return oe(this,ey,"f")[1]}resize(e,t){if(e===oe(this,eg,"f")&&t===oe(this,ew,"f"))return;s7(this,eg,e,"f"),s7(this,ew,t,"f");let i=e*oe(this,ex,"f"),r=t*oe(this,ex,"f");oe(this,ey,"f")[0].setSize(i,r),oe(this,ey,"f")[1].setSize(i,r)}swap(){s7(this,ey,[oe(this,ey,"f")[1],oe(this,ey,"f")[0]],"f")}getViewport(){return{x:0,y:0,w:oe(this,eg,"f"),h:oe(this,ew,"f")}}dispose(){oe(this,ey,"f")[0].dispose(),oe(this,ey,"f")[1].dispose()}}eg=new WeakMap,ew=new WeakMap,ex=new WeakMap,ey=new WeakMap;let oi=`
precision highp float;
in vec3 position;
void main() {
    gl_Position = vec4(position, 1.0);
}
`,or=`
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
    `,warpTransition:`
    ${oo}
    uniform float enterTime;
    uniform float leaveTime;

    ${oa}

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
    ${oo}
    ${oa}

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
    ${oo}
    ${oa}

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
    `};class ol{constructor(e=0,t=0){this.x=0,this.y=0,this.x=e,this.y=t}set(e,t){return this.x=e,this.y=t,this}}class of{constructor(e=0,t=0,i=0,r=0){this.x=0,this.y=0,this.z=0,this.w=0,this.x=e,this.y=t,this.z=i,this.w=r}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}}var oh=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},oc=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};function ou(e){return/#version\s+300\s+es\b/.test(e)?"300 es":/#version\s+100\b/.test(e)||/\bgl_FragColor\b|\btexture2D\b|\bvarying\b|\battribute\b/.test(e)?"100":"300 es"}class od{constructor(e,t,i,r){eb.add(this),eT.set(this,void 0),eE.set(this,void 0),eM.set(this,void 0),eS.set(this,void 0),ek.set(this,new Map),oh(this,eT,e,"f"),this.gl=e.gl,oh(this,eE,t,"f"),oh(this,eM,i,"f"),oh(this,eS,r??ou(i),"f"),oc(this,eb,"m",eR).call(this),e.addResource(this)}restore(){oc(this,eb,"m",eR).call(this)}use(){this.gl.useProgram(this.program)}hasUniform(e){return oc(this,ek,"f").has(e)}uploadUniforms(e){let t=this.gl,i=0;for(let[s,o]of oc(this,ek,"f")){let a=e[s];if(!a)continue;let n=a.value;if(null!=n){var r;if(35678===(r=o.type)||36298===r||36306===r||35682===r){n instanceof s0&&(n.bind(i),t.uniform1i(o.location,i),i++);continue}n instanceof s0||function(e,t,i){let r=t.location,s=t.size>1;switch(t.type){case e.FLOAT:s?e.uniform1fv(r,i):e.uniform1f(r,i);return;case e.FLOAT_VEC2:s?e.uniform2fv(r,i):i instanceof ol?e.uniform2f(r,i.x,i.y):e.uniform2f(r,i[0],i[1]);return;case e.FLOAT_VEC3:s?e.uniform3fv(r,i):e.uniform3f(r,i[0],i[1],i[2]);return;case e.FLOAT_VEC4:s?e.uniform4fv(r,i):i instanceof of?e.uniform4f(r,i.x,i.y,i.z,i.w):e.uniform4f(r,i[0],i[1],i[2],i[3]);return;case e.INT:s?e.uniform1iv(r,i):e.uniform1i(r,i);return;case e.INT_VEC2:s?e.uniform2iv(r,i):e.uniform2i(r,i[0],i[1]);return;case e.INT_VEC3:s?e.uniform3iv(r,i):e.uniform3i(r,i[0],i[1],i[2]);return;case e.INT_VEC4:s?e.uniform4iv(r,i):e.uniform4i(r,i[0],i[1],i[2],i[3]);return;case e.BOOL:s?e.uniform1iv(r,i):e.uniform1i(r,+!!i);return;case e.BOOL_VEC2:s?e.uniform2iv(r,i):e.uniform2i(r,+!!i[0],+!!i[1]);return;case e.BOOL_VEC3:s?e.uniform3iv(r,i):e.uniform3i(r,+!!i[0],+!!i[1],+!!i[2]);return;case e.BOOL_VEC4:s?e.uniform4iv(r,i):e.uniform4i(r,+!!i[0],+!!i[1],+!!i[2],+!!i[3]);return;case e.FLOAT_MAT2:e.uniformMatrix2fv(r,!1,i);return;case e.FLOAT_MAT3:e.uniformMatrix3fv(r,!1,i);return;case e.FLOAT_MAT4:e.uniformMatrix4fv(r,!1,i);return;case e.UNSIGNED_INT:s?e.uniform1uiv(r,i):e.uniform1ui(r,i);return;case e.UNSIGNED_INT_VEC2:s?e.uniform2uiv(r,i):e.uniform2ui(r,i[0],i[1]);return;case e.UNSIGNED_INT_VEC3:s?e.uniform3uiv(r,i):e.uniform3ui(r,i[0],i[1],i[2]);return;case e.UNSIGNED_INT_VEC4:s?e.uniform4uiv(r,i):e.uniform4ui(r,i[0],i[1],i[2],i[3]);return;default:ov.has(t.type)||(ov.add(t.type),console.warn(`[VFX-JS] Unsupported uniform type 0x${t.type.toString(16)}; skipping upload.`));return}}(t,o,n)}}}dispose(){oc(this,eT,"f").removeResource(this),this.gl.deleteProgram(this.program)}}function op(e,t,i){let r=e.createShader(t);if(!r)throw Error("[VFX-JS] Failed to create shader");if(e.shaderSource(r,i),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r)??"";throw e.deleteShader(r),Error(`[VFX-JS] Shader compile failed: ${t}

${i}`)}return r}function om(e,t){return e.replace(/^\s+/,"").startsWith("#version")||"100"===t?e:`#version 300 es
${e}`}eT=new WeakMap,eE=new WeakMap,eM=new WeakMap,eS=new WeakMap,ek=new WeakMap,eb=new WeakSet,eR=function(){let e=this.gl,t=op(e,e.VERTEX_SHADER,om(oc(this,eE,"f"),oc(this,eS,"f"))),i=op(e,e.FRAGMENT_SHADER,om(oc(this,eM,"f"),oc(this,eS,"f"))),r=e.createProgram();if(!r)throw Error("[VFX-JS] Failed to create program");if(e.attachShader(r,t),e.attachShader(r,i),e.bindAttribLocation(r,0,"position"),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){let s=e.getProgramInfoLog(r)??"";throw e.deleteShader(t),e.deleteShader(i),e.deleteProgram(r),Error(`[VFX-JS] Program link failed: ${s}`)}e.detachShader(r,t),e.detachShader(r,i),e.deleteShader(t),e.deleteShader(i),this.program=r,oc(this,ek,"f").clear();let s=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let t=0;t<s;t++){let i=e.getActiveUniform(r,t);if(!i)continue;let s=i.name.replace(/\[0\]$/,""),o=e.getUniformLocation(r,i.name);o&&oc(this,ek,"f").set(s,{location:o,type:i.type,size:i.size})}};let ov=new Set;class og{constructor(e,t,i,r,s,o){this.gl=e.gl,this.program=new od(e,t,i,o),this.uniforms=r,this.blend=s}dispose(){this.program.dispose()}}function ow(e,t){"none"===t?e.disable(e.BLEND):(e.enable(e.BLEND),e.blendEquation(e.FUNC_ADD),"premultiplied"===t?e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA):"additive"===t?e.blendFuncSeparate(e.ONE,e.ONE,e.ONE,e.ONE):e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA))}class ox{constructor(e){this.uniforms={src:{value:null},offset:{value:new ol},resolution:{value:new ol},viewport:{value:new of}},this.pass=new og(e,oi,os,this.uniforms,"premultiplied")}setUniforms(e,t,i){this.uniforms.src.value=e,this.uniforms.resolution.value.set(i.w*t,i.h*t),this.uniforms.offset.value.set(i.x*t,i.y*t)}dispose(){this.pass.dispose()}}async function oy(e,t,i,r){var s;let o,a,n,l=e.getBoundingClientRect(),f=window.devicePixelRatio,h=Math.ceil(l.width),c=Math.ceil(l.height),u=h*f,d=c*f,p=1,m=u,v=d;r&&(m>r||v>r)&&(p=Math.min(r/m,r/v),m=Math.floor(m*p),v=Math.floor(v*p));let g=i&&i.width===m&&i.height===v?i:new OffscreenCanvas(m,v),w=e.cloneNode(!0);await ob(e,w),function e(t,i){if("function"==typeof t.computedStyleMap)try{let e=t.computedStyleMap();for(let t of["margin-top","margin-right","margin-bottom","margin-left"]){let r=e.get(t);r instanceof CSSKeywordValue&&"auto"===r.value&&i.style.setProperty(t,"auto")}}catch{}for(let r=0;r<t.children.length;r++){let s=t.children[r],o=i.children[r];s instanceof HTMLElement&&o instanceof HTMLElement&&e(s,o)}}(e,w),w.style.setProperty("opacity",t.toString()),w.style.setProperty("margin","0px"),function(e){let t=e;for(;;){let e=t.style;if(Number.parseFloat(e.paddingTop)>0||Number.parseFloat(e.borderTopWidth)>0||e.getPropertyValue("overflow-x")&&"visible"!==e.getPropertyValue("overflow-x")||e.getPropertyValue("overflow-y")&&"visible"!==e.getPropertyValue("overflow-y")||"flex"===e.display||"grid"===e.display||"flow-root"===e.display||"inline-block"===e.display)break;let i=t.firstElementChild;if(!i)break;i.style.setProperty("margin-top","0px"),t=i}for(t=e;;){let e=t.style;if(Number.parseFloat(e.paddingBottom)>0||Number.parseFloat(e.borderBottomWidth)>0||e.getPropertyValue("overflow-x")&&"visible"!==e.getPropertyValue("overflow-x")||e.getPropertyValue("overflow-y")&&"visible"!==e.getPropertyValue("overflow-y")||"flex"===e.display||"grid"===e.display||"flow-root"===e.display||"inline-block"===e.display)break;let i=t.lastElementChild;if(!i)break;i.style.setProperty("margin-bottom","0px"),t=i}}(w),function e(t,i){let r=-t.scrollLeft,s=-t.scrollTop;for(let o=0;o<t.children.length;o++){let a=t.children[o],n=i.children[o];a&&(n instanceof HTMLElement||n instanceof SVGElement)&&((0!==r||0!==s)&&function(e,t,i){let r=e.style.getPropertyValue("translate"),[s="0px",o="0px",a]=r&&"none"!==r?function(e){let t=[],i=0,r="";for(let s of e.trim())"("===s?i++:")"===s&&i--," "===s&&0===i?(r&&t.push(r),r=""):r+=s;return r&&t.push(r),t}(r):[],n=`calc(${s} + ${t}px) calc(${o} + ${i}px)`;e.style.setProperty("translate",a?`${n} ${a}`:n)}(n,r,s),e(a,n))}}(e,w),w.style.setProperty("box-sizing","border-box"),w.style.setProperty("width",`${h}px`),w.style.setProperty("height",`${c}px`);let x=(s=w.outerHTML,(a=(o=document.implementation.createHTMLDocument("test")).createRange()).selectNodeContents(o.documentElement),a.deleteContents(),n=document.createElement("head"),o.documentElement.appendChild(n),o.documentElement.appendChild(a.createContextualFragment(s)),o.documentElement.setAttribute("xmlns",o.documentElement.namespaceURI),new XMLSerializer().serializeToString(o).replace(/<!DOCTYPE html>/,"")),y=`<svg xmlns="http://www.w3.org/2000/svg" width="${u}" height="${d}"><foreignObject width="100%" height="100%">${x}</foreignObject></svg>`;return new Promise((e,t)=>{let i=new Image;i.onload=()=>{let r=g.getContext("2d");if(null===r)return t();r.clearRect(0,0,m,v);let s=f*p;r.scale(s,s),r.drawImage(i,0,0,u,d),r.setTransform(1,0,0,1,0,0),e(g)},i.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(y)}`})}async function ob(e,t){let i=window.getComputedStyle(e);for(let e of Array.from(i))/(-inline-|-block-|^inline-|^block-)/.test(e)||/^-webkit-.*(start|end|before|after|logical)/.test(e)||t.style.setProperty(e,i.getPropertyValue(e),i.getPropertyPriority(e));if("INPUT"===t.tagName)t.setAttribute("value",t.value);else if("TEXTAREA"===t.tagName)t.innerHTML=t.value;else if("IMG"===t.tagName)try{t.src=await oT(sl(e))}catch{}for(let i=0;i<e.children.length;i++){let r=e.children[i],s=t.children[i];await ob(r,s)}}async function oT(e){let t=await fetch(e).then(e=>e.blob());return new Promise(e=>{let i=new FileReader;i.onload=function(){e(this.result)},i.readAsDataURL(t)})}var oE=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},oM=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let oS=Object.freeze({__brand:"EffectQuad"});class ok{constructor(e,t,i){eC.add(this),eW.set(this,void 0),eA.set(this,void 0),eP.set(this,void 0),ez.set(this,[]),eF.set(this,null),this.indexType=0,this.hasIndices=!1,this.drawCount=0,this.drawStart=0,e_.set(this,!1),oE(this,eW,e,"f"),this.gl=e.gl,oE(this,eA,t,"f"),oE(this,eP,i,"f"),this.mode=function(e,t){switch(t){case"lines":return e.LINES;case"lineStrip":return e.LINE_STRIP;case"points":return e.POINTS;default:return e.TRIANGLES}}(this.gl,t.mode),this.instanceCount=t.instanceCount??0,oM(this,eC,"m",eI).call(this),e.addResource(this),oE(this,e_,!0,"f")}restore(){oE(this,ez,[],"f"),oE(this,eF,null,"f"),oM(this,eC,"m",eI).call(this)}draw(){let e=this.gl;e.bindVertexArray(this.vao),this.hasIndices?this.instanceCount>0?e.drawElementsInstanced(this.mode,this.drawCount,this.indexType,this.drawStart*(this.indexType===e.UNSIGNED_INT?4:2),this.instanceCount):e.drawElements(this.mode,this.drawCount,this.indexType,this.drawStart*(this.indexType===e.UNSIGNED_INT?4:2)):this.instanceCount>0?e.drawArraysInstanced(this.mode,this.drawStart,this.drawCount,this.instanceCount):e.drawArrays(this.mode,this.drawStart,this.drawCount)}dispose(){oM(this,e_,"f")&&(oM(this,eW,"f").removeResource(this),oE(this,e_,!1,"f"));let e=this.gl;for(let t of(e.deleteVertexArray(this.vao),oM(this,ez,"f")))e.deleteBuffer(t);oM(this,eF,"f")&&e.deleteBuffer(oM(this,eF,"f")),oE(this,ez,[],"f"),oE(this,eF,null,"f")}}eW=new WeakMap,eA=new WeakMap,eP=new WeakMap,ez=new WeakMap,eF=new WeakMap,e_=new WeakMap,eC=new WeakSet,eI=function(){let e=this.gl,t=e.createVertexArray();if(!t)throw Error("[VFX-JS] Failed to create VAO");this.vao=t,e.bindVertexArray(t);let i=oM(this,eP,"f").program,r=null;for(let[t,s]of Object.entries(oM(this,eA,"f").attributes)){let o=!ArrayBuffer.isView(s)||s instanceof DataView?{name:t,data:s.data,itemSize:s.itemSize,normalized:s.normalized??!1,perInstance:s.perInstance??!1}:{name:t,data:s,itemSize:2,normalized:!1,perInstance:!1},a=e.getAttribLocation(i,o.name);if(a<0)continue;let n=e.createBuffer();if(!n)throw Error(`[VFX-JS] Failed to create VBO for "${o.name}"`);oM(this,ez,"f").push(n),e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,o.data,e.STATIC_DRAW);let l=function(e,t){if(t instanceof Float32Array)return e.FLOAT;if(t instanceof Uint8Array)return e.UNSIGNED_BYTE;if(t instanceof Uint16Array)return e.UNSIGNED_SHORT;if(t instanceof Uint32Array)return e.UNSIGNED_INT;if(t instanceof Int8Array)return e.BYTE;if(t instanceof Int16Array)return e.SHORT;if(t instanceof Int32Array)return e.INT;throw Error("[VFX-JS] Unsupported attribute typed array")}(e,o.data);e.enableVertexAttribArray(a),l===e.FLOAT||l===e.HALF_FLOAT||o.normalized?e.vertexAttribPointer(a,o.itemSize,l,o.normalized,0,0):e.vertexAttribIPointer(a,o.itemSize,l,0,0),o.perInstance&&e.vertexAttribDivisor(a,1),"position"===t&&null===r&&(r=o.data.length/o.itemSize)}let s=0,o=oM(this,eA,"f").indices;if(o){let t=e.createBuffer();if(!t)throw Error("[VFX-JS] Failed to create IBO");oE(this,eF,t,"f"),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),e.bufferData(e.ELEMENT_ARRAY_BUFFER,o,e.STATIC_DRAW),this.hasIndices=!0,this.indexType=o instanceof Uint32Array?e.UNSIGNED_INT:e.UNSIGNED_SHORT,s=o.length}else this.hasIndices=!1;e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null),oM(this,eF,"f")&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null);let a=this.hasIndices?s:r??0,n=oM(this,eA,"f").drawRange;this.drawStart=n?.start??0,this.drawCount=n?.count!==void 0?n.count:Math.max(0,a-this.drawStart)};class oR{constructor(e,t){eU.set(this,void 0),eL.set(this,void 0),eB.set(this,new WeakMap),eV.set(this,new Set),oE(this,eU,e,"f"),oE(this,eL,t,"f")}get quad(){return oM(this,eL,"f")}resolve(e,t){let i=oM(this,eB,"f").get(e);i||(i=new Map,oM(this,eB,"f").set(e,i));let r=i.get(t);return r||(r=new ok(oM(this,eU,"f"),e,t),i.set(t,r),oM(this,eV,"f").add(r)),r}release(e){let t=oM(this,eB,"f").get(e);if(t){for(let e of t.values())e.dispose(),oM(this,eV,"f").delete(e);oM(this,eB,"f").delete(e)}}dispose(){for(let e of oM(this,eV,"f"))e.dispose();oM(this,eV,"f").clear()}}eU=new WeakMap,eL=new WeakMap,eB=new WeakMap,eV=new WeakMap;var oC=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},oW=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let oA=Symbol.for("@vfx-js/effect.resolve-texture"),oP=Symbol.for("@vfx-js/effect.resolve-rt"),oz=`#version 300 es
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
`,oF=`
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
`,o_=`#version 300 es
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
`;class oB{constructor(e,t,i,r,s,o){eO.add(this),eD.set(this,void 0),eN.set(this,void 0),e$.set(this,void 0),eH.set(this,void 0),eX.set(this,void 0),ej.set(this,[]),eG.set(this,[]),eq.set(this,[]),eJ.set(this,[]),eK.set(this,"init"),eY.set(this,!1),eQ.set(this,void 0),eZ.set(this,void 0),e4.set(this,[]),oC(this,eD,e,"f"),oC(this,eN,e.gl,"f"),oC(this,e$,i,"f"),oC(this,eH,o,"f"),oC(this,eX,new oR(e,t),"f"),oC(this,eQ,{outputBufferW:1,outputBufferH:1,canvasBufferSize:[1,1],outputViewport:{x:0,y:0,w:1,h:1},elementBufferW:1,elementBufferH:1,contentRectUv:[0,0,1,1],srcRectUv:[0,0,1,1]},"f");let a={time:0,deltaTime:0,pixelRatio:i,resolution:[1,1],mouse:[0,0],mouseViewport:[0,0],intersection:0,enterTime:0,leaveTime:0,src:r,target:null,uniforms:{},vfxProps:s,dims:{element:[1,1],elementPixel:[1,1],canvas:[1,1],canvasPixel:[1,1],pixelRatio:i,contentRect:[0,0,1,1],srcRect:[0,0,1,1],canvasRect:[0,0,1,1]},quad:oS,gl:oW(this,eN,"f"),createRenderTarget:e=>oW(this,eO,"m",e0).call(this,e),releaseGeometry:e=>oW(this,eX,"f").release(e),wrapTexture:(e,t)=>oW(this,eO,"m",e2).call(this,e,t),draw:e=>oW(this,eO,"m",e3).call(this,e),blit:(e,t,i)=>oW(this,eO,"m",e5).call(this,e,t,i),clear:e=>oW(this,eO,"m",e6).call(this,e),onContextRestored:e=>{let t=oW(this,eD,"f").onContextRestored(e);return oW(this,eJ,"f").push(t),t}};oC(this,eZ,a,"f")}get ctx(){return oW(this,eZ,"f")}setPhase(e){oC(this,eK,e,"f")}setFrameDims(e){for(let t of(oC(this,eQ,e,"f"),oW(this,eZ,"f").resolution=[e.canvasBufferSize[0],e.canvasBufferSize[1]],oW(this,eq,"f")))t.resolver.resize?.(e.outputBufferW,e.outputBufferH)}setEffectDims(e){oW(this,eZ,"f").dims=e}setFrameState(e){let t=oW(this,eZ,"f");t.time=e.time,t.deltaTime=e.deltaTime,t.mouse=e.mouse,t.mouseViewport=e.mouseViewport,t.intersection=e.intersection,t.enterTime=e.enterTime,t.leaveTime=e.leaveTime,t.uniforms=e.uniforms}setSrc(e){oW(this,eZ,"f").src=e}setOutput(e){oW(this,eZ,"f").target=e}passthroughCopy(e,t,i){let r=oW(this,eK,"f");oC(this,eK,"render","f");let s=oW(this,eZ,"f").target;oW(this,eZ,"f").target=t;try{let r=oW(this,eQ,"f").outputViewport;oW(this,eQ,"f").outputViewport={...i};let s=oW(this,eZ,"f").vfxProps.glslVersion;oW(this,eO,"m",e8).call(this,{frag:"100"===s?oI:o_,uniforms:{src:e},target:t}),oW(this,eQ,"f").outputViewport=r}finally{oW(this,eZ,"f").target=s,oC(this,eK,r,"f")}}clearRt(e){let t=oW(this,eN,"f"),i=e[oP];t.bindFramebuffer(t.FRAMEBUFFER,i.getWriteFbo().fbo),t.viewport(0,0,e.width,e.height),t.clearColor(0,0,0,0),t.disable(t.SCISSOR_TEST),t.clear(t.COLOR_BUFFER_BIT),t.bindFramebuffer(t.FRAMEBUFFER,null)}tickAutoUpdates(){for(let e of oW(this,e4,"f"))e()}dispose(){for(let e of(oC(this,eK,"disposed","f"),oW(this,eJ,"f")))e();for(let e of(oC(this,eJ,[],"f"),oW(this,eG,"f")))e.resolver.dispose?.();for(let e of(oC(this,eG,[],"f"),oC(this,eq,[],"f"),oW(this,ej,"f")))e.dispose();oC(this,ej,[],"f"),oW(this,eX,"f").dispose(),oC(this,e4,[],"f")}}function oV(e){return void 0===e?["clamp","clamp"]:"string"==typeof e?[e,e]:[e[0],e[1]]}function oO(e,t,i,r){let s={__brand:"EffectTexture",get width(){return t()},get height(){return i()},dispose(){r?.()}};return Object.defineProperty(s,oA,{value:e}),s}function oD(e,t,i,r){let s={__brand:"EffectRenderTarget",get width(){return t()},get height(){return i()},dispose:r??(()=>{}),generateMipmaps:()=>e.regenerateMipmaps?.()};return Object.defineProperty(s,oP,{value:e}),s}function oN(e){return oD({getReadTexture:()=>e.texture,getWriteFbo:()=>e},()=>e.width,()=>e.height)}function o$(e){return"number"==typeof e?{top:e,right:e,bottom:e,left:e}:Array.isArray(e)?{top:e[0],right:e[1],bottom:e[2],left:e[3]}:{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}eD=new WeakMap,eN=new WeakMap,e$=new WeakMap,eH=new WeakMap,eX=new WeakMap,ej=new WeakMap,eG=new WeakMap,eq=new WeakMap,eJ=new WeakMap,eK=new WeakMap,eY=new WeakMap,eQ=new WeakMap,eZ=new WeakMap,e4=new WeakMap,eO=new WeakSet,e0=function(e){let t,i,r,s,o=e?.persistent??!1,a=e?.float??!1,n=oV(e?.wrap),l=e?.filter,f=e?.mipmap??!1,h=!1!==f,c=!0===f,u=e?.size,d=u?u[0]:oW(this,eQ,"f").outputBufferW,p=u?u[1]:oW(this,eQ,"f").outputBufferH;if(o){let e=u?1:oW(this,e$,"f"),s=u?d:d/e,o=u?p:p/e,f=new ot(oW(this,eD,"f"),s,o,e,a,{wrap:n,filter:l,mipmap:h});t={getReadTexture:()=>f.texture,getWriteFbo:()=>f.target,swap:()=>f.swap(),resize:u?void 0:(e,t)=>{f.resize(e/oW(this,e$,"f"),t/oW(this,e$,"f"))},dispose:()=>f.dispose()},h&&(t.regenerateMipmaps=()=>f.target.generateMipmaps(),t.mipmapAutoRegen=c),i=()=>f.target.width,r=()=>f.target.height}else{let e=new s6(oW(this,eD,"f"),d,p,{float:a,wrap:n,filter:l,mipmap:h});t={getReadTexture:()=>e.texture,getWriteFbo:()=>e,resize:u?void 0:(t,i)=>e.setSize(t,i),dispose:()=>e.dispose()},h&&(t.regenerateMipmaps=()=>e.generateMipmaps(),t.mipmapAutoRegen=c),i=()=>e.width,r=()=>e.height}let m=oD(t,i,r,()=>oW(this,eO,"m",e1).call(this,s));return s={handle:m,resolver:t},oW(this,eG,"f").push(s),u||oW(this,eq,"f").push(s),m},e1=function(e){let t=oW(this,eG,"f").indexOf(e);if(t<0)return;oW(this,eG,"f").splice(t,1);let i=oW(this,eq,"f").indexOf(e);i>=0&&oW(this,eq,"f").splice(i,1),e.resolver.dispose?.()},e2=function(e,t){var i;let r,s,o,a,n=oV(t?.wrap),l=t?.filter,f=null;if(i=e,(r=globalThis.WebGLTexture)&&"function"==typeof r&&i instanceof r||void 0===i.width&&void 0===i.naturalWidth&&void 0===i.videoWidth){if(!t?.size)throw Error("[VFX-JS] wrapTexture(WebGLTexture) requires opts.size");let[i,r]=t.size;s=new s0(oW(this,eD,"f"),void 0,{autoRegister:!1,externalHandle:e}),o=()=>i,a=()=>r}else{s=new s0(oW(this,eD,"f"),e);let i=t?.size,r=t=>i?"w"===t?i[0]:i[1]:"u">typeof HTMLImageElement&&e instanceof HTMLImageElement?"w"===t?e.naturalWidth:e.naturalHeight:"u">typeof HTMLVideoElement&&e instanceof HTMLVideoElement?"w"===t?e.videoWidth:e.videoHeight:"w"===t?e.width:e.height;o=()=>r("w"),a=()=>r("h");let n="u">typeof HTMLVideoElement&&e instanceof HTMLVideoElement||"u">typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"u">typeof OffscreenCanvas&&e instanceof OffscreenCanvas;(t?.autoUpdate??n)&&(f=()=>{s.needsUpdate=!0})}s.wrapS=n[0],s.wrapT=n[1],void 0!==l&&(s.minFilter=l,s.magFilter=l),oW(this,ej,"f").push(s),f&&oW(this,e4,"f").push(f);let h=!1;return oO(()=>s,o,a,()=>{if(h)return;h=!0;let e=oW(this,ej,"f").indexOf(s);if(-1!==e&&oW(this,ej,"f").splice(e,1),f){let e=oW(this,e4,"f").indexOf(f);-1!==e&&oW(this,e4,"f").splice(e,1)}s.dispose()})},e3=function(e){if("render"!==oW(this,eK,"f")){"update"!==oW(this,eK,"f")||oW(this,eY,"f")||(oC(this,eY,!0,"f"),console.warn("[VFX-JS] ctx.draw() called in update(); ignored. Move draws to render()."));return}oW(this,eO,"m",e8).call(this,e)},e5=function(e,t,i){if("render"!==oW(this,eK,"f")){"update"!==oW(this,eK,"f")||oW(this,eY,"f")||(oC(this,eY,!0,"f"),console.warn("[VFX-JS] ctx.blit() called in update(); ignored. Move draws to render()."));return}let r="100"===oW(this,eZ,"f").vfxProps.glslVersion?oL:oU;oW(this,eO,"m",e8).call(this,{frag:r,uniforms:{src:e},target:t,blend:i?.blend,swap:i?.swap})},e6=function(e){if("render"!==oW(this,eK,"f")){"update"!==oW(this,eK,"f")||oW(this,eY,"f")||(oC(this,eY,!0,"f"),console.warn("[VFX-JS] ctx.clear() called in update(); ignored. Move draws to render()."));return}let t=oW(this,eN,"f"),i=oW(this,eZ,"f").target,r=null==e?i:e,s=null===r||r===i;if(t.clearColor(0,0,0,0),s){let e=null===r?null:r[oP].getWriteFbo().fbo,i=oW(this,eQ,"f").outputViewport;t.bindFramebuffer(t.FRAMEBUFFER,e),t.enable(t.SCISSOR_TEST),t.scissor(i.x,i.y,i.w,i.h),t.clear(t.COLOR_BUFFER_BIT),t.disable(t.SCISSOR_TEST),t.bindFramebuffer(t.FRAMEBUFFER,null);return}let o=r[oP];t.disable(t.SCISSOR_TEST);let a=()=>{t.bindFramebuffer(t.FRAMEBUFFER,o.getWriteFbo().fbo),t.clear(t.COLOR_BUFFER_BIT)};a(),o.swap&&(o.swap(),a(),o.swap()),t.bindFramebuffer(t.FRAMEBUFFER,null)},e8=function(e){let t,i,r,s,o,a,n,l=oW(this,eN,"f"),f=e.vert??("100"===oW(this,eZ,"f").vfxProps.glslVersion?oF:oz),h=oW(this,eH,"f").get(f,e.frag,oW(this,eZ,"f").vfxProps.glslVersion),c=oW(this,eZ,"f").target,u=void 0===e.target||null===e.target?c:e.target,d=null===u||u===c;if(null===u)t=null,i=oW(this,eQ,"f").outputViewport.x,r=oW(this,eQ,"f").outputViewport.y,s=oW(this,eQ,"f").outputViewport.w,o=oW(this,eQ,"f").outputViewport.h;else{let e=u[oP];t=e.getWriteFbo().fbo,d?(i=oW(this,eQ,"f").outputViewport.x,r=oW(this,eQ,"f").outputViewport.y,s=oW(this,eQ,"f").outputViewport.w,o=oW(this,eQ,"f").outputViewport.h):(i=0,r=0,s=u.width,o=u.height),a=e.swap,e.mipmapAutoRegen&&(n=e.regenerateMipmaps)}l.bindFramebuffer(l.FRAMEBUFFER,t),l.viewport(i,r,s,o),l.disable(l.SCISSOR_TEST),ow(l,e.blend??(null===u?"premultiplied":"none")),h.use();let p=oW(this,eO,"m",e9).call(this,e.uniforms);h.uploadUniforms(p);let m=e.geometry??oS;m===oS?oW(this,eX,"f").quad.draw():oW(this,eX,"f").resolve(m,h).draw(),n?.(),a&&!1!==e.swap&&a()},e9=function(e){let t={};if(t.contentRectUv={value:oW(this,eQ,"f").contentRectUv},t.srcRectUv={value:oW(this,eQ,"f").srcRectUv},!e)return t;for(let[i,r]of Object.entries(e))t[i]=function(e){if("object"==typeof e&&null!==e&&"__brand"in e)return"EffectRenderTarget"===e.__brand?{value:e[oP].getReadTexture()}:{value:e[oA]()};return{value:e}}(r);return t};let oH={top:0,right:0,bottom:0,left:0};function oX(e){return{top:e.top,right:e.right,bottom:e.bottom,left:e.left}}function oj(e){return{top:e.top,left:e.left,right:e.left+Math.ceil(e.right-e.left),bottom:e.top+Math.ceil(e.bottom-e.top)}}function oG(e,t){return{top:e.top-t.top,right:e.right+t.right,bottom:e.bottom+t.bottom,left:e.left-t.left}}function oq(e,t,i){return Math.min(Math.max(e,t),i)}var oJ=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},oK=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class oY{constructor(e,t,i,r,s,o,a,n){e7.add(this),te.set(this,void 0),tt.set(this,void 0),ti.set(this,void 0),tr.set(this,void 0),ts.set(this,void 0),to.set(this,void 0),ta.set(this,void 0),tn.set(this,void 0),tl.set(this,[]),tf.set(this,[]),th.set(this,void 0),tc.set(this,new Set),tu.set(this,!1),td.set(this,void 0),tp.set(this,o$(0)),tm.set(this,null),oJ(this,te,e,"f"),oJ(this,tt,t,"f"),oJ(this,ti,i,"f"),oJ(this,tr,s,"f"),oJ(this,ts,n,"f"),oJ(this,to,r,"f"),oJ(this,th,o,"f"),oJ(this,td,a,"f"),oJ(this,ta,r.map(()=>oK(this,e7,"m",tg).call(this)),"f"),0===r.length&&oJ(this,tm,oK(this,e7,"m",tg).call(this),"f"),oJ(this,tn,oK(this,e7,"m",tv).call(this),"f")}get effects(){return oK(this,to,"f")}get hosts(){return oK(this,ta,"f")}get renderingIndices(){return oK(this,tn,"f")}get stages(){return oK(this,tf,"f")}get hitTestPadBuffer(){return oK(this,tp,"f")}async initAll(){for(let e=0;e<oK(this,to,"f").length;e++){let t=oK(this,to,"f")[e],i=oK(this,ta,"f")[e];i.setPhase("init");try{t.init&&await t.init(i.ctx)}catch(t){console.error(`[VFX-JS] effect[${e}].init() failed:`,t);for(let t=e-1;t>=0;t--)oK(this,e7,"m",tw).call(this,t),oK(this,ta,"f")[t].dispose();throw oK(this,ta,"f")[e].dispose(),t}i.setPhase("update")}}run(e){if(oK(this,tu,"f")||!e.isVisible)return;oJ(this,tn,oK(this,e7,"m",tv).call(this),"f");let t=oK(this,tn,"f").length;for(let t of oK(this,ta,"f"))t.setFrameState({time:e.time,deltaTime:e.deltaTime,mouse:e.mouse,mouseViewport:e.mouseViewport,intersection:e.intersection,enterTime:e.enterTime,leaveTime:e.leaveTime,uniforms:e.resolvedUniforms});oK(this,e7,"m",tx).call(this,e);for(let t=0;t<oK(this,ta,"f").length;t++)oK(this,ta,"f")[t].setFrameDims(oK(this,e7,"m",tS).call(this,t,e)),oK(this,ta,"f")[t].setEffectDims(oK(this,e7,"m",tT).call(this,t,e));for(let e=0;e<oK(this,to,"f").length;e++){let t=oK(this,to,"f")[e];if(!t.update)continue;let i=oK(this,ta,"f")[e];i.setPhase("update");try{t.update(i.ctx)}catch(i){let t=`${e}:update`;oK(this,tc,"f").has(t)||(oK(this,tc,"f").add(t),console.warn(`[VFX-JS] effect[${e}].update() threw; skipping this frame's update:`,i))}}if(0===t)return void(oK(this,tm,"f")??oK(this,ta,"f")[0]).passthroughCopy(oK(this,th,"f"),e.finalTarget,e.elementRectOnCanvasPx);for(let i=0;i<t;i++){let r,s=oK(this,tn,"f")[i],o=oK(this,ta,"f")[s],a=oK(this,to,"f")[s];if(!a.render)continue;o.setPhase("render"),o.tickAutoUpdates();let n=0===i?oK(this,th,"f"):oK(this,tl,"f")[i-1].texHandle;o.setSrc(n),i===t-1?r=e.finalTarget:(r=oK(this,tl,"f")[i].rtHandle,o.clearRt(r)),o.setOutput(r);try{a.render(o.ctx)}catch(l){let e=`${s}:render`;oK(this,tc,"f").has(e)||(oK(this,tc,"f").add(e),console.warn(`[VFX-JS] effect[${s}].render() threw; falling back to passthrough:`,l));let a=oK(this,tf,"f")[i].outputViewport;null===r?o.passthroughCopy(n,null,a):i===t-1?o.passthroughCopy(n,r,a):o.passthroughCopy(n,r,{x:0,y:0,w:r.width,h:r.height})}o.setPhase("update")}}dispose(){if(!oK(this,tu,"f")){oJ(this,tu,!0,"f");for(let e=oK(this,to,"f").length-1;e>=0;e--)oK(this,e7,"m",tw).call(this,e),oK(this,ta,"f")[e].dispose();for(let e of(oK(this,tm,"f")&&(oK(this,tm,"f").dispose(),oJ(this,tm,null,"f")),oK(this,tl,"f")))e.fb.dispose();oJ(this,tl,[],"f"),oJ(this,tf,[],"f")}}async replaceEffects(e){if(oK(this,tu,"f"))throw Error("[VFX-JS] replaceEffects on disposed chain");let t=oK(this,to,"f"),i=oK(this,ta,"f"),r=new Map;for(let e=0;e<t.length;e++)r.set(t[e],i[e]);let s=Array(e.length),o=[];for(let t=0;t<e.length;t++){let i=e[t],a=r.get(i);if(a)s[t]=a,r.delete(i);else{let e=oK(this,e7,"m",tg).call(this);s[t]=e,o.push({host:e,effect:i})}}for(let e=0;e<o.length;e++){let{host:t,effect:i}=o[e];t.setPhase("init");try{i.init&&await i.init(t.ctx),t.setPhase("update")}catch(i){console.error("[VFX-JS] replaceEffects: new effect init() failed:",i);for(let t=e-1;t>=0;t--){let e=o[t];if(e.effect.dispose)try{e.effect.dispose()}catch(e){console.error("[VFX-JS] dispose during init rollback threw:",e)}e.host.dispose()}throw t.dispose(),i}}for(let[e,t]of r){if(e.dispose)try{e.dispose()}catch(e){console.error("[VFX-JS] effect.dispose() threw during replaceEffects:",e)}t.dispose()}for(let e of oK(this,tl,"f"))e.fb.dispose();oJ(this,tl,[],"f"),oJ(this,tf,[],"f"),0!==e.length||oK(this,tm,"f")?e.length>0&&oK(this,tm,"f")&&(oK(this,tm,"f").dispose(),oJ(this,tm,null,"f")):oJ(this,tm,oK(this,e7,"m",tg).call(this),"f"),oJ(this,to,e,"f"),oJ(this,ta,s,"f"),oJ(this,tn,oK(this,e7,"m",tv).call(this),"f"),oK(this,tc,"f").clear()}}te=new WeakMap,tt=new WeakMap,ti=new WeakMap,tr=new WeakMap,ts=new WeakMap,to=new WeakMap,ta=new WeakMap,tn=new WeakMap,tl=new WeakMap,tf=new WeakMap,th=new WeakMap,tc=new WeakMap,tu=new WeakMap,td=new WeakMap,tp=new WeakMap,tm=new WeakMap,e7=new WeakSet,tv=function(){return oK(this,to,"f").map((e,t)=>"function"==typeof e.render&&!1!==e.enabled?t:-1).filter(e=>e>=0)},tg=function(){return new oB(oK(this,te,"f"),oK(this,tt,"f"),oK(this,ti,"f"),oK(this,th,"f"),oK(this,tr,"f"),oK(this,ts,"f"))},tw=function(e){let t=oK(this,to,"f")[e];if(t.dispose)try{t.dispose()}catch(t){console.error(`[VFX-JS] effect[${e}].dispose() threw:`,t)}},tx=function(e){let t=oK(this,tn,"f").length;if(oJ(this,tf,Array(t),"f"),0===t)return;let i=oK(this,td,"f")?e.canvasBufferSize:e.elementBufferSize,r=[0,0,i[0],i[1]],s=oK(this,e7,"m",tM).call(this,e),o=r;for(let i=0;i<t;i++){let a=oK(this,tn,"f")[i],n=oK(this,to,"f")[a],l=i===t-1,f=oK(this,e7,"m",ty).call(this,n,o,r,s,e)??o,h=[f[2],f[3]],c=function(e,t){let[i,r,s,o]=e,[a,n,l,f]=t;return l<=0||f<=0?[0,0,1,1]:[(i-a)/l,(r-n)/f,s/l,o/f]}(r,f),u=l?{x:e.elementRectOnCanvasPx.x+f[0],y:e.elementRectOnCanvasPx.y+f[1],w:h[0],h:h[1]}:{x:0,y:0,w:h[0],h:h[1]};oK(this,tf,"f")[i]={dstRect:f,dstBufferSize:h,contentRectUv:c,outputViewport:u},l||oK(this,e7,"m",tE).call(this,i,h),o=f}let[a,n,l,f]=oK(this,tf,"f")[t-1].dstRect;oJ(this,tp,o$({top:Math.max(0,n+f-i[1]),right:Math.max(0,a+l-i[0]),bottom:Math.max(0,-n),left:Math.max(0,-a)}),"f")},ty=function(e,t,i,r,s){if(e.outputRect)return e.outputRect(oK(this,e7,"m",tb).call(this,s,i,t,r))},tb=function(e,t,i,r){let s=e.canvasBufferSize[0]/e.canvasSize[0]||1;return{element:oK(this,td,"f")?e.canvasSize:e.elementSize,elementPixel:oK(this,td,"f")?e.canvasBufferSize:e.elementBufferSize,canvas:e.canvasSize,canvasPixel:e.canvasBufferSize,pixelRatio:s,contentRect:t,srcRect:i,canvasRect:r}},tT=function(e,t){let i=oK(this,td,"f")?t.canvasBufferSize:t.elementBufferSize,r=[0,0,i[0],i[1]],s=oK(this,e7,"m",tM).call(this,t),o=oK(this,tn,"f").indexOf(e),a=o<=0?r:oK(this,tf,"f")[o-1].dstRect;return oK(this,e7,"m",tb).call(this,t,r,a,s)},tE=function(e,t){let i=oK(this,tl,"f")[e];if(i&&i.fb.width===t[0]&&i.fb.height===t[1])return;i&&i.fb.dispose();let r=new s6(oK(this,te,"f"),t[0],t[1]),s=oN(r),o=oO(()=>r.texture,()=>r.width,()=>r.height);oK(this,tl,"f")[e]={fb:r,rtHandle:s,texHandle:o,bufferSize:t}},tM=function(e){let[t,i]=e.canvasBufferSize;if(oK(this,td,"f"))return[0,0,t,i];let{x:r,y:s}=e.elementRectOnCanvasPx;return[-r,-s,t,i]},tS=function(e,t){let i,r,s,o,a,n=oK(this,tn,"f").indexOf(e);if(n<0)s={x:0,y:0,w:i=t.elementBufferSize[0],h:r=t.elementBufferSize[1]},o=[0,0,1,1],a=[0,0,1,1];else{let e=oK(this,tf,"f")[n];i=e.dstBufferSize[0],r=e.dstBufferSize[1],s=e.outputViewport,o=e.contentRectUv,a=0===n?[0,0,1,1]:oK(this,tf,"f")[n-1].contentRectUv}return{outputBufferW:i,outputBufferH:r,canvasBufferSize:t.canvasBufferSize,outputViewport:s,elementBufferW:t.elementBufferSize[0],elementBufferH:t.elementBufferSize[1],contentRectUv:o,srcRectUv:a}};var oQ=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},oZ=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class o0{constructor(e){tk.add(this),tR.set(this,void 0),tC.set(this,new Set),oQ(this,tR,e,"f")}freezeInside(e,t){let i={root:e,entries:[]};for(let r of t)!r.frozen&&o1(e,r.element)&&(r.frozen=!0,i.entries.push({e:r,opacity:r.element.style.opacity}),oZ(this,tR,"f").showPlain(r));oZ(this,tC,"f").add(i);let r=!1;return()=>{if(!r){for(let{e}of(r=!0,oZ(this,tC,"f").delete(i),i.entries))e.frozen=!1;requestAnimationFrame(()=>{for(let{e,opacity:t}of i.entries)!e.frozen&&oZ(this,tR,"f").isRegistered(e)&&oZ(this,tR,"f").hidePlain(e,t)})}}}adopt(e,t){let i=oZ(this,tk,"m",tW).call(this,e.element);return!!i&&(e.frozen=!0,i.entries.push({e,opacity:t??e.element.style.opacity}),!0)}}function o1(e,t){return t!==e&&e.contains(t)}function o2(e){this.data=e,this.pos=0}function o4(e){this.stream=new o2(e),this.output={}}tR=new WeakMap,tC=new WeakMap,tk=new WeakSet,tW=function(e){for(let t of oZ(this,tC,"f"))if(o1(t.root,e))return t},o2.prototype.readByte=function(){return this.data[this.pos++]},o2.prototype.peekByte=function(){return this.data[this.pos]},o2.prototype.readBytes=function(e){return this.data.subarray(this.pos,this.pos+=e)},o2.prototype.peekBytes=function(e){return this.data.subarray(this.pos,this.pos+e)},o2.prototype.readString=function(e){for(var t="",i=0;i<e;i++)t+=String.fromCharCode(this.readByte());return t},o2.prototype.readBitArray=function(){for(var e=[],t=this.readByte(),i=7;i>=0;i--)e.push(!!(t&1<<i));return e},o2.prototype.readUnsigned=function(e){var t=this.readBytes(2);return e?(t[1]<<8)+t[0]:(t[0]<<8)+t[1]},o4.prototype.parse=function(e){return this.parseParts(this.output,e),this.output},o4.prototype.parseParts=function(e,t){for(var i=0;i<t.length;i++){var r=t[i];this.parsePart(e,r)}},o4.prototype.parsePart=function(e,t){var i,r=t.label;if(!t.requires||t.requires(this.stream,this.output,e))if(t.loop){for(var s=[];t.loop(this.stream);){var o={};this.parseParts(o,t.parts),s.push(o)}e[r]=s}else t.parts?(i={},this.parseParts(i,t.parts),e[r]=i):t.parser?(i=t.parser(this.stream,this.output,e),t.skip||(e[r]=i)):t.bits&&(e[r]=this.parseBits(t.bits))},o4.prototype.parseBits=function(e){var t={},i=this.stream.readBitArray();for(var r in e){var s=e[r];s.length?t[r]=i.slice(s.index,s.index+s.length).reduce(function(e,t){return 2*e+t},0):t[r]=i[s.index]}return t};let o3=function(){return function(e){return e.readByte()}},o5=function(e){return function(t){return t.readBytes(e)}},o6=function(e){return function(t){return t.readString(e)}},o8=function(e){return function(t){return t.readUnsigned(e)}},o9=function(e,t){return function(i,r,s){for(var o=t(i,r,s),a=Array(o),n=0;n<o;n++)a[n]=i.readBytes(e);return a}};var o7={label:"blocks",parser:function(e){for(var t=[],i=0,r=e.readByte();0!==r;r=e.readByte())t.push(e.readBytes(r)),i+=r;var s=new Uint8Array(i);i=0;for(var o=0;o<t.length;o++)s.set(t[o],i),i+=t[o].length;return s}},ae={label:"gce",requires:function(e){var t=e.peekBytes(2);return 33===t[0]&&249===t[1]},parts:[{label:"codes",parser:o5(2),skip:!0},{label:"byteSize",parser:o3()},{label:"extras",bits:{future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}}},{label:"delay",parser:o8(!0)},{label:"transparentColorIndex",parser:o3()},{label:"terminator",parser:o3(),skip:!0}]},at={label:"image",requires:function(e){return 44===e.peekByte()},parts:[{label:"code",parser:o3(),skip:!0},{label:"descriptor",parts:[{label:"left",parser:o8(!0)},{label:"top",parser:o8(!0)},{label:"width",parser:o8(!0)},{label:"height",parser:o8(!0)},{label:"lct",bits:{exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}}}]},{label:"lct",requires:function(e,t,i){return i.descriptor.lct.exists},parser:o9(3,function(e,t,i){return Math.pow(2,i.descriptor.lct.size+1)})},{label:"data",parts:[{label:"minCodeSize",parser:o3()},o7]}]},ai={label:"text",requires:function(e){var t=e.peekBytes(2);return 33===t[0]&&1===t[1]},parts:[{label:"codes",parser:o5(2),skip:!0},{label:"blockSize",parser:o3()},{label:"preData",parser:function(e,t,i){return e.readBytes(i.text.blockSize)}},o7]},ar={label:"application",requires:function(e,t,i){var r=e.peekBytes(2);return 33===r[0]&&255===r[1]},parts:[{label:"codes",parser:o5(2),skip:!0},{label:"blockSize",parser:o3()},{label:"id",parser:function(e,t,i){return e.readString(i.blockSize)}},o7]},as={label:"comment",requires:function(e,t,i){var r=e.peekBytes(2);return 33===r[0]&&254===r[1]},parts:[{label:"codes",parser:o5(2),skip:!0},o7]},ao=[{label:"header",parts:[{label:"signature",parser:o6(3)},{label:"version",parser:o6(3)}]},{label:"lsd",parts:[{label:"width",parser:o8(!0)},{label:"height",parser:o8(!0)},{label:"gct",bits:{exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}}},{label:"backgroundColorIndex",parser:o3()},{label:"pixelAspectRatio",parser:o3()}]},{label:"gct",requires:function(e,t){return t.lsd.gct.exists},parser:o9(3,function(e,t){return Math.pow(2,t.lsd.gct.size+1)})},{label:"frames",parts:[ae,ar,as,at,ai],loop:function(e){var t=e.peekByte();return 33===t||44===t}}];function aa(e){var t=new o4(new Uint8Array(e));this.raw=t.parse(ao),this.raw.hasImages=!1;for(var i=0;i<this.raw.frames.length;i++)if(this.raw.frames[i].image){this.raw.hasImages=!0;break}}aa.prototype.decompressFrame=function(e,t){if(e>=this.raw.frames.length)return null;var i=this.raw.frames[e];if(i.image){var r=i.image.descriptor.width*i.image.descriptor.height,s=function(e,t,i){var r,s,o,a,n,l,f,h,c,u,d,p,m,v,g,w=Array(i),x=Array(4096),y=Array(4096),b=Array(4097);for(n=(s=1<<e)+1,r=s+2,f=-1,o=(1<<(a=e+1))-1,c=0;c<s;c++)x[c]=0,y[c]=c;for(d=h=p=m=g=v=0,u=0;u<i;){if(0===m){if(h<a){d+=t[v]<<h,h+=8,v++;continue}if(c=d&o,d>>=a,h-=a,c>r||c==n)break;if(c==s){o=(1<<(a=e+1))-1,r=s+2,f=-1;continue}if(-1==f){b[m++]=y[c],f=c,p=c;continue}for(l=c,c==r&&(b[m++]=p,c=f);c>s;)b[m++]=y[c],c=x[c];p=255&y[c],b[m++]=p,r<4096&&(x[r]=f,y[r]=p,(++r&o)==0&&r<4096&&(a++,o+=r)),f=l}m--,w[g++]=b[m],u++}for(u=g;u<i;u++)w[u]=0;return w}(i.image.data.minCodeSize,i.image.data.blocks,r);i.image.descriptor.lct.interlaced&&(s=function(e,t){for(var i=Array(e.length),r=e.length/t,s=[0,4,2,1],o=[8,8,4,2],a=0,n=0;n<4;n++)for(var l=s[n];l<r;l+=o[n])!function(r,s){var o=e.slice(s*t,(s+1)*t);i.splice.apply(i,[r*t,t].concat(o))}(l,a),a++;return i}(s,i.image.descriptor.width));var o={pixels:s,dims:{top:i.image.descriptor.top,left:i.image.descriptor.left,width:i.image.descriptor.width,height:i.image.descriptor.height}};return i.image.descriptor.lct&&i.image.descriptor.lct.exists?o.colorTable=i.image.lct:o.colorTable=this.raw.gct,i.gce&&(o.delay=10*(i.gce.delay||10),o.disposalType=i.gce.extras.disposal,i.gce.extras.transparentColorGiven&&(o.transparentIndex=i.gce.transparentColorIndex)),t&&(o.patch=function(e){for(var t=e.pixels.length,i=new Uint8ClampedArray(4*t),r=0;r<t;r++){var s=4*r,o=e.pixels[r],a=e.colorTable[o];i[s]=a[0],i[s+1]=a[1],i[s+2]=a[2],i[s+3]=255*(o!==e.transparentIndex)}return i}(o)),o}return null},aa.prototype.decompressFrames=function(e,t,i){void 0===t&&(t=0),i=void 0===i?this.raw.frames.length:Math.min(i,this.raw.frames.length);for(var r=[],s=t;s<i;s++)this.raw.frames[s].image&&r.push(this.decompressFrame(s,e));return r};class an{static async create(e,t){let i=await fetch(e).then(e=>e.arrayBuffer()).then(e=>new aa(e)),r=i.decompressFrames(!0,void 0,void 0),{width:s,height:o}=i.raw.lsd;return new an(r,s,o,t)}constructor(e,t,i,r){this.frames=[],this.index=0,this.playTime=0,this.frames=e,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.pixelRatio=r,this.canvas.width=t,this.canvas.height=i,this.startTime=Date.now()}getCanvas(){return this.canvas}update(){let e=Date.now()-this.startTime;for(;this.playTime<e;){let e=this.frames[this.index%this.frames.length];this.playTime+=e.delay,this.index++}let t=this.frames[this.index%this.frames.length],i=new ImageData(t.patch,t.dims.width,t.dims.height);this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.putImageData(i,t.dims.left,t.dims.top)}}var al=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class af{constructor(e,t=!1){this.isContextLost=!1,tA.set(this,new Set),tP.set(this,new Set),tz.set(this,new Set),tF.set(this,e=>{for(let t of(e.preventDefault(),this.isContextLost=!0,al(this,tP,"f")))t()}),t_.set(this,()=>{this.isContextLost=!1;let e=this.gl;for(let t of(e.getExtension("EXT_color_buffer_float"),e.getExtension("EXT_color_buffer_half_float"),this.floatBlend=!!e.getExtension("EXT_float_blend"),al(this,tA,"f")))t.restore();for(let e of al(this,tz,"f"))e()});let i=e.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:t});if(!i)throw Error("[VFX-JS] WebGL2 is not available.");this.gl=i,this.canvas=e,i.getExtension("EXT_color_buffer_float"),i.getExtension("EXT_color_buffer_half_float"),this.floatBlend=!!i.getExtension("EXT_float_blend"),this.floatLinearFilter=!!i.getExtension("OES_texture_float_linear"),this.maxTextureSize=i.getParameter(i.MAX_TEXTURE_SIZE),e.addEventListener("webglcontextlost",al(this,tF,"f"),!1),e.addEventListener("webglcontextrestored",al(this,t_,"f"),!1)}setSize(e,t,i){let r=Math.floor(e*i),s=Math.floor(t*i);(this.canvas.width!==r||this.canvas.height!==s)&&(this.canvas.width=r,this.canvas.height=s)}addResource(e){al(this,tA,"f").add(e)}removeResource(e){al(this,tA,"f").delete(e)}onContextLost(e){return al(this,tP,"f").add(e),()=>al(this,tP,"f").delete(e)}onContextRestored(e){return al(this,tz,"f").add(e),()=>al(this,tz,"f").delete(e)}}tA=new WeakMap,tP=new WeakMap,tz=new WeakMap,tF=new WeakMap,t_=new WeakMap;var ah=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},ac=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class au{constructor(e){tI.add(this),tU.set(this,void 0),tL.set(this,void 0),ah(this,tU,e,"f"),this.gl=e.gl,ac(this,tI,"m",tB).call(this),e.addResource(this)}restore(){ac(this,tI,"m",tB).call(this)}draw(){let e=this.gl;e.bindVertexArray(this.vao),e.drawArrays(e.TRIANGLES,0,6)}dispose(){ac(this,tU,"f").removeResource(this),this.gl.deleteVertexArray(this.vao),this.gl.deleteBuffer(ac(this,tL,"f"))}}function ad(e,t,i,r={}){return new s6(e,t,i,{float:r.float??!1})}function ap(e,t){let i;i=t.renderingToBuffer?"none":t.premultipliedAlpha?"premultiplied":"normal";let r=t.glslVersion??ou(t.fragmentShader);return new og(e,t.vertexShader??("100"===r?or:oi),t.fragmentShader,t.uniforms,i,r)}tU=new WeakMap,tL=new WeakMap,tI=new WeakSet,tB=function(){let e=this.gl,t=e.createVertexArray(),i=e.createBuffer();if(!t||!i)throw Error("[VFX-JS] Failed to create quad VAO");this.vao=t,ah(this,tL,i,"f");let r=new Float32Array([-1,-1,0,1,-1,0,-1,1,0,-1,1,0,1,-1,0,1,1,0]);e.bindVertexArray(t),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,r,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0),e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null)};var am=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},av=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class ag{constructor(e,t,i,r,s,o,a,n){if(tV.set(this,void 0),tO.set(this,void 0),tD.set(this,void 0),tN.set(this,void 0),t$.set(this,void 0),tH.set(this,void 0),am(this,tN,r??!1,"f"),am(this,t$,s??!1,"f"),am(this,tH,o,"f"),am(this,tO,{},"f"),am(this,tV,{src:{value:null},offset:{value:new ol},resolution:{value:new ol},viewport:{value:new of},time:{value:0},mouse:{value:new ol},passIndex:{value:0}},"f"),i)for(let[e,t]of Object.entries(i))"function"==typeof t?(av(this,tO,"f")[e]=t,av(this,tV,"f")[e]={value:t()}):av(this,tV,"f")[e]={value:t};this.pass=ap(e,{fragmentShader:t,uniforms:av(this,tV,"f"),renderingToBuffer:a??!1,premultipliedAlpha:!0,glslVersion:n})}get uniforms(){return av(this,tV,"f")}setUniforms(e,t,i,r,s,o){av(this,tV,"f").src.value=e,av(this,tV,"f").resolution.value.set(i.w*t,i.h*t),av(this,tV,"f").offset.value.set(i.x*t,i.y*t),av(this,tV,"f").time.value=r,av(this,tV,"f").mouse.value.set(s*t,o*t)}updateCustomUniforms(e){for(let[e,t]of Object.entries(av(this,tO,"f")))av(this,tV,"f")[e]&&(av(this,tV,"f")[e].value=t());if(e)for(let[t,i]of Object.entries(e))av(this,tV,"f")[t]&&(av(this,tV,"f")[t].value=i())}initializeBackbuffer(e,t,i,r){av(this,tN,"f")&&!av(this,tD,"f")&&(av(this,tH,"f")?am(this,tD,new ot(e,av(this,tH,"f")[0],av(this,tH,"f")[1],1,av(this,t$,"f")),"f"):am(this,tD,new ot(e,t,i,r,av(this,t$,"f")),"f"))}resizeBackbuffer(e,t){av(this,tD,"f")&&!av(this,tH,"f")&&av(this,tD,"f").resize(e,t)}registerBufferUniform(e){av(this,tV,"f")[e]||(av(this,tV,"f")[e]={value:null})}get backbuffer(){return av(this,tD,"f")}get persistent(){return av(this,tN,"f")}get float(){return av(this,t$,"f")}get size(){return av(this,tH,"f")}dispose(){this.pass.dispose(),av(this,tD,"f")?.dispose()}}tV=new WeakMap,tO=new WeakMap,tD=new WeakMap,tN=new WeakMap,t$=new WeakMap,tH=new WeakMap;var aw=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},ax=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class ay{constructor(e){tX.set(this,void 0),tj.set(this,new Map),aw(this,tX,e,"f")}get(e,t,i){let r=`${t}\0${e}\0${i??""}`,s=ax(this,tj,"f").get(r);return s||(s=new od(ax(this,tX,"f"),e,t,i),ax(this,tj,"f").set(r,s)),s}get size(){return ax(this,tj,"f").size}dispose(){for(let e of ax(this,tj,"f").values())e.dispose();ax(this,tj,"f").clear()}}tX=new WeakMap,tj=new WeakMap;var ab=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},aT=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let aE=new Map;function aM(e,t){return"hic"===e||!0===t?null:"number"==typeof t?t.toString():"video"===e?"0.0001":"0"}function aS(e,t){let i=e.getContext("2d");i&&(i.clearRect(0,0,e.width,e.height),i.drawImage(t,0,0,e.width,e.height))}class ak{constructor(e,t){tG.add(this),tq.set(this,void 0),tJ.set(this,void 0),tK.set(this,void 0),tY.set(this,void 0),tQ.set(this,void 0),tZ.set(this,void 0),t0.set(this,void 0),t1.set(this,[]),t2.set(this,void 0),t4.set(this,new Map),t3.set(this,null),t5.set(this,!1),t6.set(this,new WeakSet),t8.set(this,{}),t9.set(this,{}),t7.set(this,0),ie.set(this,void 0),it.set(this,2),ii.set(this,[]),ir.set(this,new o0({showPlain:e=>{if("hic"===e.type){let t=e.srcTexture.source;t instanceof OffscreenCanvas&&aS(e.element,t)}else e.element.style.setProperty("opacity",e.originalOpacity.toString())},hidePlain:(e,t)=>{if("hic"===e.type){let t=e.element;t.getContext("2d")?.clearRect(0,0,t.width,t.height)}else e.element.style.opacity=t},isRegistered:e=>aT(this,ii,"f").includes(e)})),is.set(this,0),io.set(this,1),ia.set(this,Date.now()/1e3),il.set(this,!1),ih.set(this,o$(0)),ic.set(this,o$(0)),iu.set(this,[0,0]),id.set(this,0),ip.set(this,0),im.set(this,0),iv.set(this,0),ig.set(this,new WeakMap),ix.set(this,async()=>{for(let e of aT(this,ii,"f"))if("text"===e.type&&e.isInViewport){let t=e.element.getBoundingClientRect(),i=Math.ceil(t.width),r=Math.ceil(t.height);(i!==e.width||r!==e.height)&&(await aT(this,tG,"m",ib).call(this,e),e.width=i,e.height=r)}for(let e of aT(this,ii,"f"))if("text"===e.type&&!e.isInViewport){let t=e.element.getBoundingClientRect(),i=Math.ceil(t.width),r=Math.ceil(t.height);(i!==e.width||r!==e.height)&&(await aT(this,tG,"m",ib).call(this,e),e.width=i,e.height=r)}}),iy.set(this,e=>{ab(this,im,e.clientX,"f"),ab(this,iv,window.innerHeight-e.clientY,"f")}),iS.set(this,()=>{this.isPlaying()&&(this.render(),ab(this,ie,requestAnimationFrame(aT(this,iS,"f")),"f"))}),ab(this,tq,e,"f"),ab(this,tJ,t,"f"),ab(this,tK,new af(t,e.preserveDrawingBuffer),"f"),ab(this,tY,aT(this,tK,"f").gl,"f"),aT(this,tY,"f").clearColor(0,0,0,0),ab(this,it,e.pixelRatio,"f"),ab(this,io,e.timeScale,"f"),ab(this,ia,Date.now()/1e3,"f"),ab(this,tQ,new au(aT(this,tK,"f")),"f"),ab(this,tZ,new ay(aT(this,tK,"f")),"f"),window.addEventListener("resize",aT(this,ix,"f")),window.addEventListener("pointermove",aT(this,iy,"f")),aT(this,ix,"f").call(this),ab(this,t0,new ox(aT(this,tK,"f")),"f"),aT(this,tG,"m",iI).call(this,e.postEffects),aT(this,tK,"f").onContextRestored(()=>{aT(this,tY,"f").clearColor(0,0,0,0)})}destroy(){for(let e of(this.stop(),window.removeEventListener("resize",aT(this,ix,"f")),window.removeEventListener("pointermove",aT(this,iy,"f")),aT(this,t2,"f")?.dispose(),aT(this,t4,"f").values()))e?.dispose();for(let e of aT(this,t1,"f"))e.pass.dispose();aT(this,t3,"f")&&(aT(this,t3,"f").dispose(),ab(this,t3,null,"f"),ab(this,t5,!1,"f")),aT(this,t0,"f").dispose(),aT(this,tZ,"f").dispose(),aT(this,tQ,"f").dispose()}async addElement(e,t={},i){let r,s,o;if(void 0!==t.effect)return aT(this,tG,"m",iE).call(this,e,t,t.effect,i);let a=aT(this,tG,"m",iM).call(this,t),n=e.getBoundingClientRect(),l=a_(e)?oj(n):oX(n),[f,h]=aC(t.overflow),c=oG(l,h),u=aW(t.intersection),d=""===e.style.opacity?1:Number.parseFloat(e.style.opacity),p=!1;if(e instanceof HTMLImageElement){s="img";let t=sl(e);if(p=!!t.match(/\.gif/i)){let i=await an.create(t,aT(this,it,"f"));aE.set(e,i),r=new s0(aT(this,tK,"f"),i.getCanvas())}else{let e=await s4(t);r=new s0(aT(this,tK,"f"),e)}}else if(e instanceof HTMLVideoElement)r=new s0(aT(this,tK,"f"),e),s="video";else if(e instanceof HTMLCanvasElement)sa(e)&&i?(r=new s0(aT(this,tK,"f"),i),s="hic"):(r=new s0(aT(this,tK,"f"),e),s="canvas");else{let t=await oy(e,d,void 0,this.maxTextureSize);r=new s0(aT(this,tK,"f"),t),s="text"}let[m,v]=az(t.wrap);r.wrapS=m,r.wrapT=v,r.needsUpdate=!0;let g=t.autoCrop??!0,w=aM(s,t.overlay),x={src:{value:r},resolution:{value:new ol},offset:{value:new ol},time:{value:0},enterTime:{value:-1},leaveTime:{value:-1},mouse:{value:new ol},intersection:{value:0},viewport:{value:new of},autoCrop:{value:g}},y={};if(void 0!==t.uniforms)for(let[e,i]of Object.entries(t.uniforms))"function"==typeof i?(x[e]={value:i()},y[e]=i):x[e]={value:i};if(t.backbuffer){let e,t;e=(c.right-c.left)*aT(this,it,"f"),t=(c.bottom-c.top)*aT(this,it,"f"),x.backbuffer={value:(o=new ot(aT(this,tK,"f"),e,t,aT(this,it,"f"),!1)).texture}}let b=new Map,T=new Map;for(let e=0;e<a.length-1;e++){let t=a[e].target??`pass${e}`;a[e]={...a[e],target:t};let i=a[e].size,r=i?i[0]:(c.right-c.left)*aT(this,it,"f"),s=i?i[1]:(c.bottom-c.top)*aT(this,it,"f");if(a[e].persistent){let r=i?1:aT(this,it,"f"),s=i?i[0]:c.right-c.left,o=i?i[1]:c.bottom-c.top;T.set(t,new ot(aT(this,tK,"f"),s,o,r,a[e].float))}else b.set(t,ad(aT(this,tK,"f"),r,s,{float:a[e].float}))}let E=[];for(let e=0;e<a.length;e++){let t=a[e],i=t.frag,r={...x},s={};for(let[e,s]of b)e!==t.target&&i.match(RegExp(`uniform\\s+sampler2D\\s+${e}\\b`))&&(r[e]={value:s.texture});for(let[e,t]of T)i.match(RegExp(`uniform\\s+sampler2D\\s+${e}\\b`))&&(r[e]={value:t.texture});if(t.uniforms)for(let[e,i]of Object.entries(t.uniforms))"function"==typeof i?(r[e]={value:i()},s[e]=i):r[e]={value:i};let o=ap(aT(this,tK,"f"),{vertexShader:t.vert,fragmentShader:i,uniforms:r,renderingToBuffer:void 0!==t.target,glslVersion:t.glslVersion});E.push({pass:o,uniforms:r,uniformGenerators:{...y,...s},target:t.target,persistent:t.persistent,float:t.float,size:t.size,backbuffer:t.target?T.get(t.target):void 0})}let M=aT(this,is,"f"),S={type:s,element:e,isInViewport:!1,isInLogicalViewport:!1,width:l.right-l.left,height:l.bottom-l.top,passes:E,bufferTargets:b,startTime:M,enterTime:M,leaveTime:-1/0,release:t.release??1/0,isGif:p,isFullScreen:f,overflow:h,intersection:u,originalOpacity:d,srcTexture:r,zIndex:t.zIndex??0,backbuffer:o,autoCrop:g};aT(this,tG,"m",iP).call(this,S,l,M),aT(this,tG,"m",iT).call(this,S,w)}async updateElementEffects(e,t){let i=aT(this,ii,"f").find(t=>t.element===e);if(!i)throw Error("[VFX-JS] updateElementEffects: element not registered");if(!i.chain)throw Error("[VFX-JS] updateElementEffects: element is on the shader path; effect-only updates are not supported");let r=Array.isArray(t)?[...t]:[t],s=i.chain.effects,o=new Set(s),a=[];for(let e of r)if(!o.has(e)){if(aT(this,t6,"f").has(e))throw Error("[VFX-JS] Effect instance already attached. Construct a new instance per `vfx.add()` / `postEffect`.");a.push(e)}await i.chain.replaceEffects(r);let n=new Set(r);for(let e of s)n.has(e)||aT(this,t6,"f").delete(e);for(let e of a)aT(this,t6,"f").add(e)}removeElement(e){let t=aT(this,ii,"f").findIndex(t=>t.element===e);if(-1!==t){let i=aT(this,ii,"f").splice(t,1)[0];if(i.chain)aT(this,tG,"m",iW).call(this,i.chain.effects),i.chain.dispose();else{for(let e of i.bufferTargets.values())e.dispose();for(let e of i.passes)e.pass.dispose(),e.backbuffer?.dispose();i.backbuffer?.dispose()}i.srcTexture.dispose(),e.style.setProperty("opacity",i.originalOpacity.toString())}}updateTextElement(e){let t=aT(this,ii,"f").findIndex(t=>t.element===e);return -1!==t?aT(this,tG,"m",ib).call(this,aT(this,ii,"f")[t]):Promise.resolve()}async updateImageElement(e){let t=aT(this,ii,"f").find(t=>t.element===e);if(t?.type!=="img"||t.isGif)return;let i=await s4(sl(e)),r=t.srcTexture,s=new s0(aT(this,tK,"f"),i);s.wrapS=r.wrapS,s.wrapT=r.wrapT,s.needsUpdate=!0,!t.chain&&t.passes.length>0&&(t.passes[0].uniforms.src.value=s),t.srcTexture=s,r.dispose()}updateCanvasElement(e){let t=aT(this,ii,"f").find(t=>t.element===e);if(t){let i=t.srcTexture,r=new s0(aT(this,tK,"f"),e);r.wrapS=i.wrapS,r.wrapT=i.wrapT,r.needsUpdate=!0,!t.chain&&t.passes.length>0&&(t.passes[0].uniforms.src.value=r),t.srcTexture=r,i.dispose()}}updateHICTexture(e,t){let i=aT(this,ii,"f").find(t=>t.element===e);if(i?.type!=="hic")return;i.frozen&&aS(e,t);let r=i.srcTexture;if(r.source===t)r.needsUpdate=!0;else{let e=new s0(aT(this,tK,"f"),t);e.wrapS=r.wrapS,e.wrapT=r.wrapT,e.needsUpdate=!0,!i.chain&&i.passes.length>0&&(i.passes[0].uniforms.src.value=e),i.srcTexture=e,r.dispose()}}freezeInside(e){return aT(this,ir,"f").freezeInside(e,aT(this,ii,"f"))}isFrozen(e){return aT(this,ii,"f").some(t=>t.element===e&&t.frozen)}forceRender(e){let t=aT(this,ii,"f").find(t=>t.element===e);return!t||t.forceRender?()=>{}:(t.forceRender=!0,()=>{t.forceRender=!1})}get maxTextureSize(){return aT(this,tK,"f").maxTextureSize}isPlaying(){return void 0!==aT(this,ie,"f")}play(){this.isPlaying()||(ab(this,ia,Date.now()/1e3,"f"),ab(this,ie,requestAnimationFrame(aT(this,iS,"f")),"f"))}get time(){return aT(this,is,"f")}setTime(e){ab(this,is,e,"f"),ab(this,il,!0,"f")}get timeScale(){return aT(this,io,"f")}set timeScale(e){ab(this,io,e,"f")}stop(){void 0!==aT(this,ie,"f")&&(cancelAnimationFrame(aT(this,ie,"f")),ab(this,ie,void 0,"f"))}render(){let e=Date.now()/1e3;aT(this,il,"f")?ab(this,il,!1,"f"):ab(this,is,aT(this,is,"f")+(e-aT(this,ia,"f"))*aT(this,io,"f"),"f"),ab(this,ia,e,"f");let t=aT(this,is,"f"),i=aT(this,tY,"f");aT(this,tG,"m",iw).call(this),i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,aT(this,tJ,"f").width,aT(this,tJ,"f").height),i.clear(i.COLOR_BUFFER_BIT);let r=aT(this,ih,"f").right-aT(this,ih,"f").left,s=aT(this,ih,"f").bottom-aT(this,ih,"f").top,o={x:0,y:0,w:r,h:s},a=aT(this,tG,"m",iR).call(this);for(let e of(a&&(aT(this,tG,"m",iV).call(this,r,s),aT(this,t2,"f")&&(i.bindFramebuffer(i.FRAMEBUFFER,aT(this,t2,"f").fbo),i.clear(i.COLOR_BUFFER_BIT),i.bindFramebuffer(i.FRAMEBUFFER,null))),aT(this,ii,"f"))){if(e.frozen)continue;let i=e.element.getBoundingClientRect(),n="text"===e.type?oj(i):oX(i),l=aT(this,tG,"m",iP).call(this,e,n,t);if(!l.isVisible)continue;if(e.chain){aT(this,tG,"m",ik).call(this,e,n,l,t);continue}let f=e.passes[0].uniforms;for(let i of(f.time.value=t-e.startTime,f.resolution.value.set((n.right-n.left)*aT(this,it,"f"),(n.bottom-n.top)*aT(this,it,"f")),f.mouse.value.set((aT(this,im,"f")+aT(this,id,"f"))*aT(this,it,"f"),(aT(this,iv,"f")+aT(this,ip,"f"))*aT(this,it,"f")),e.passes))for(let[e,t]of Object.entries(i.uniformGenerators))i.uniforms[e].value=t();aE.get(e.element)?.update(),("video"===e.type||e.isGif)&&(f.src.value.needsUpdate=!0);let h=s9(n,s,aT(this,id,"f"),aT(this,ip,"f")),c=s9(l.rectWithOverflow,s,aT(this,id,"f"),aT(this,ip,"f"));e.backbuffer&&(e.passes[0].uniforms.backbuffer.value=e.backbuffer.texture);{let t=e.isFullScreen?o:c,i=Math.max(1,t.w*aT(this,it,"f")),r=Math.max(1,t.h*aT(this,it,"f")),s=Math.max(1,t.w),a=Math.max(1,t.h);for(let t=0;t<e.passes.length-1;t++){let o=e.passes[t];if(!o.size)if(o.backbuffer)o.backbuffer.resize(s,a);else{let t=e.bufferTargets.get(o.target);t&&(t.width!==i||t.height!==r)&&t.setSize(i,r)}}}let u=new Map;for(let t of e.passes)t.backbuffer&&t.target&&u.set(t.target,t.backbuffer.texture);let d=e.srcTexture;for(let t=0;t<e.passes.length-1;t++){let r=e.passes[t],s=e.isFullScreen?o:c;for(let[e,t]of(r.uniforms.src.value=d,u))r.uniforms[e]&&(r.uniforms[e].value=t);for(let[e,t]of Object.entries(r.uniformGenerators))r.uniforms[e]&&(r.uniforms[e].value=t());let a=r.size?{x:0,y:0,w:r.size[0],h:r.size[1]}:{x:0,y:0,w:s.w,h:s.h},n=function(e,t,i,r,s,o,a){let n=s[0]+o[0]-i.x,l=s[1]+o[1]-i.y;return r?{resolution:[r[0],r[1]],offset:[0,0],mouse:[n/i.w*r[0],l/i.h*r[1]]}:{resolution:[e.width*a,e.height*a],offset:[(t.x-i.x)*a,(t.y-i.y)*a],mouse:[n*a,l*a]}}(i,h,s,r.size,[aT(this,im,"f"),aT(this,iv,"f")],[aT(this,id,"f"),aT(this,ip,"f")],aT(this,it,"f"));if(r.uniforms.resolution.value.set(...n.resolution),r.uniforms.offset.value.set(...n.offset),r.uniforms.mouse.value.set(...n.mouse),r.backbuffer)aT(this,tG,"m",iF).call(this,r.pass,r.backbuffer.target,a,r.uniforms,!0),r.backbuffer.swap(),d=r.backbuffer.texture;else{let t=e.bufferTargets.get(r.target);if(!t)continue;aT(this,tG,"m",iF).call(this,r.pass,t,a,r.uniforms,!0),d=t.texture}r.target&&u.set(r.target,d)}let p=e.passes[e.passes.length-1];for(let[e,t]of(p.uniforms.src.value=d,p.uniforms.resolution.value.set(i.width*aT(this,it,"f"),i.height*aT(this,it,"f")),p.uniforms.offset.value.set(h.x*aT(this,it,"f"),h.y*aT(this,it,"f")),p.uniforms.mouse.value.set((aT(this,im,"f")+aT(this,id,"f"))*aT(this,it,"f"),(aT(this,iv,"f")+aT(this,ip,"f"))*aT(this,it,"f")),u))p.uniforms[e]&&(p.uniforms[e].value=t);for(let[e,t]of Object.entries(p.uniformGenerators))p.uniforms[e]&&(p.uniforms[e].value=t());e.backbuffer?(p.uniforms.backbuffer.value=e.backbuffer.texture,e.isFullScreen?(e.backbuffer.resize(r,s),aT(this,tG,"m",i_).call(this,e,h.x,h.y),aT(this,tG,"m",iF).call(this,p.pass,e.backbuffer.target,o,p.uniforms,!0),e.backbuffer.swap(),aT(this,t0,"f").setUniforms(e.backbuffer.texture,aT(this,it,"f"),o),aT(this,tG,"m",iF).call(this,aT(this,t0,"f").pass,a&&aT(this,t2,"f")||null,o,aT(this,t0,"f").uniforms,!1)):(e.backbuffer.resize(c.w,c.h),aT(this,tG,"m",i_).call(this,e,e.overflow.left,e.overflow.bottom),aT(this,tG,"m",iF).call(this,p.pass,e.backbuffer.target,e.backbuffer.getViewport(),p.uniforms,!0),e.backbuffer.swap(),aT(this,t0,"f").setUniforms(e.backbuffer.texture,aT(this,it,"f"),c),aT(this,tG,"m",iF).call(this,aT(this,t0,"f").pass,a&&aT(this,t2,"f")||null,c,aT(this,t0,"f").uniforms,!1))):(aT(this,tG,"m",i_).call(this,e,h.x,h.y),aT(this,tG,"m",iF).call(this,p.pass,a&&aT(this,t2,"f")||null,e.isFullScreen?o:c,p.uniforms,!1))}a&&aT(this,t2,"f")&&(aT(this,t3,"f")&&aT(this,t5,"f")?aT(this,tG,"m",iL).call(this,o,t):aT(this,tG,"m",iB).call(this,o,t))}}function aR(e,t){return t.left<=e.right&&t.right>=e.left&&t.top<=e.bottom&&t.bottom>=e.top}function aC(e){return!0===e?[!0,oH]:void 0===e?[!1,oH]:[!1,o$(e)]}function aW(e){return{threshold:e?.threshold??0,rootMargin:o$(e?.rootMargin??0)}}function aA(e,t){let i=e.source;return i?"u">typeof HTMLImageElement&&i instanceof HTMLImageElement?"w"===t?i.naturalWidth:i.naturalHeight:"u">typeof HTMLVideoElement&&i instanceof HTMLVideoElement?"w"===t?i.videoWidth:i.videoHeight:"w"===t?i.width:i.height:0}function aP(e){return"repeat"===e?"repeat":"mirror"===e?"mirror":"clamp"}function az(e){if(!e)return["clamp","clamp"];if(Array.isArray(e))return[aP(e[0]),aP(e[1])];let t=aP(e);return[t,t]}function aF(e,t,i){return Math.max(t,Math.min(i,e))}function a_(e){return!(e instanceof HTMLImageElement||e instanceof HTMLVideoElement||e instanceof HTMLCanvasElement)}tq=new WeakMap,tJ=new WeakMap,tK=new WeakMap,tY=new WeakMap,tQ=new WeakMap,tZ=new WeakMap,t0=new WeakMap,t1=new WeakMap,t2=new WeakMap,t4=new WeakMap,t3=new WeakMap,t5=new WeakMap,t6=new WeakMap,t8=new WeakMap,t9=new WeakMap,t7=new WeakMap,ie=new WeakMap,it=new WeakMap,ii=new WeakMap,ir=new WeakMap,is=new WeakMap,io=new WeakMap,ia=new WeakMap,il=new WeakMap,ih=new WeakMap,ic=new WeakMap,iu=new WeakMap,id=new WeakMap,ip=new WeakMap,im=new WeakMap,iv=new WeakMap,ig=new WeakMap,ix=new WeakMap,iy=new WeakMap,iS=new WeakMap,tG=new WeakSet,iw=function(){let e,t,i=aT(this,tJ,"f").ownerDocument,r="BackCompat"===i.compatMode?i.body:i.documentElement,s=r.clientWidth,o=r.clientHeight,a=window.scrollX,n=window.scrollY;if(aT(this,tq,"f").fixedCanvas)e=0,t=0;else if(aT(this,tq,"f").wrapper)e=s*aT(this,tq,"f").scrollPadding[0],t=o*aT(this,tq,"f").scrollPadding[1];else{let r=i.body.scrollWidth-(a+s),l=i.body.scrollHeight-(n+o);e=aF(s*aT(this,tq,"f").scrollPadding[0],0,r),t=aF(o*aT(this,tq,"f").scrollPadding[1],0,l)}let l=s+2*e,f=o+2*t;(l!==aT(this,iu,"f")[0]||f!==aT(this,iu,"f")[1])&&(aT(this,tJ,"f").style.width=`${l}px`,aT(this,tJ,"f").style.height=`${f}px`,aT(this,tK,"f").setSize(l,f,aT(this,it,"f")),ab(this,ih,o$({top:-t,left:-e,right:s+e,bottom:o+t}),"f"),ab(this,ic,o$({top:0,left:0,right:s,bottom:o}),"f"),ab(this,iu,[l,f],"f"),ab(this,id,e,"f"),ab(this,ip,t,"f")),aT(this,tq,"f").fixedCanvas||aT(this,tJ,"f").style.setProperty("transform",`translate(${a-e}px, ${n-t}px)`)},ib=async function(e){if(!aT(this,ig,"f").get(e.element)){aT(this,ig,"f").set(e.element,!0);try{let t=e.srcTexture,i=t.source instanceof OffscreenCanvas?t.source:void 0,r=await oy(e.element,e.originalOpacity,i,this.maxTextureSize);if(0===r.width||0===r.height)return;let s=new s0(aT(this,tK,"f"),r);s.wrapS=t.wrapS,s.wrapT=t.wrapT,s.needsUpdate=!0,!e.chain&&e.passes.length>0&&(e.passes[0].uniforms.src.value=s),e.srcTexture=s,t.dispose()}catch(e){console.error(e)}finally{aT(this,ig,"f").set(e.element,!1)}}},iT=function(e,t){aT(this,ir,"f").adopt(e,t)||null===t||e.element.style.setProperty("opacity",t),aT(this,ii,"f").push(e),aT(this,ii,"f").sort((e,t)=>e.zIndex-t.zIndex)},iE=async function(e,t,i,r){let s,o;void 0!==t.shader&&console.warn("[VFX-JS] Both `shader` and `effect` specified; `effect` takes precedence."),void 0!==t.overflow&&console.warn("[VFX-JS] `overflow` is shader-path only and is ignored by the effect path. Use each effect's own `outputRect` (with `dims.canvasRect` for fullscreen) to control its dst rect.");let a=Array.isArray(i)?[...i]:[i];aT(this,tG,"m",iC).call(this,a);let n=e.getBoundingClientRect(),l=a_(e)?oj(n):oX(n),[f,h]=aC(t.overflow),c=aW(t.intersection),u=""===e.style.opacity?1:Number.parseFloat(e.style.opacity),d=!1;if(e instanceof HTMLImageElement){o="img";let t=sl(e);if(d=!!t.match(/\.gif/i)){let i=await an.create(t,aT(this,it,"f"));aE.set(e,i),s=new s0(aT(this,tK,"f"),i.getCanvas())}else{let e=await s4(t);s=new s0(aT(this,tK,"f"),e)}}else if(e instanceof HTMLVideoElement)s=new s0(aT(this,tK,"f"),e),o="video";else if(e instanceof HTMLCanvasElement)sa(e)&&r?(s=new s0(aT(this,tK,"f"),r),o="hic"):(s=new s0(aT(this,tK,"f"),e),o="canvas");else{let t=await oy(e,u,void 0,this.maxTextureSize);s=new s0(aT(this,tK,"f"),t),o="text"}let[p,m]=az(t.wrap);s.wrapS=p,s.wrapT=m,s.needsUpdate=!0;let v=t.autoCrop??!0,g=aM(o,t.overlay),w=aT(this,is,"f"),x={type:o,element:e,isInViewport:!1,isInLogicalViewport:!1,width:l.right-l.left,height:l.bottom-l.top,passes:[],bufferTargets:new Map,startTime:w,enterTime:w,leaveTime:-1/0,release:t.release??1/0,isGif:d,isFullScreen:f,overflow:h,intersection:c,originalOpacity:u,srcTexture:s,zIndex:t.zIndex??0,backbuffer:void 0,autoCrop:v,effectLastRenderTime:w},y=oO(()=>x.srcTexture,()=>aA(x.srcTexture,"w"),()=>aA(x.srcTexture,"h")),b={},T={};if(t.uniforms)for(let[e,i]of Object.entries(t.uniforms))"function"==typeof i?(T[e]=i,b[e]=i()):b[e]=i;x.effectUniformGenerators=T,x.effectStaticUniforms=b;let E={autoCrop:v,glslVersion:t.glslVersion??"300 es"},M=new oY(aT(this,tK,"f"),aT(this,tQ,"f"),aT(this,it,"f"),a,E,y,!1,aT(this,tZ,"f"));try{await M.initAll()}catch(t){throw aT(this,tG,"m",iW).call(this,a),s.dispose(),e.style.setProperty("opacity",u.toString()),t}x.chain=M,aT(this,tG,"m",iP).call(this,x,l,w),aT(this,tG,"m",iT).call(this,x,g)},iM=function(e){let t=t=>void 0===t.glslVersion&&void 0!==e.glslVersion?{...t,glslVersion:e.glslVersion}:t;return Array.isArray(e.shader)?e.shader.map(t):[t({frag:aT(this,tG,"m",iz).call(this,e.shader||"uvGradient")})]},ik=function(e,t,i,r){let s=e.chain;if(!s)return;let o=aT(this,it,"f");aE.get(e.element)?.update(),("video"===e.type||e.isGif)&&(e.srcTexture.needsUpdate=!0);let a={...e.effectStaticUniforms??{}};if(e.effectUniformGenerators)for(let[t,i]of Object.entries(e.effectUniformGenerators))a[t]=i();let n=aT(this,ih,"f").right-aT(this,ih,"f").left,l=aT(this,ih,"f").bottom-aT(this,ih,"f").top,f=s9(t,l,aT(this,id,"f"),aT(this,ip,"f")),h=aT(this,im,"f")+aT(this,id,"f")-f.x,c=aT(this,iv,"f")+aT(this,ip,"f")-f.y,u=t.right-t.left,d=t.bottom-t.top,p=e.effectLastRenderTime??r;e.effectLastRenderTime=r;let m=aT(this,tG,"m",iR).call(this)&&aT(this,t2,"f")?oN(aT(this,t2,"f")):null;s.run({time:r-e.startTime,deltaTime:r-p,mouse:[h*o,c*o],mouseViewport:[aT(this,im,"f")*o,aT(this,iv,"f")*o],intersection:i.intersection,enterTime:r-e.enterTime,leaveTime:r-e.leaveTime,resolvedUniforms:a,canvasSize:[n,l],canvasBufferSize:[n*o,l*o],elementSize:[u,d],elementBufferSize:[u*o,d*o],elementRectOnCanvasPx:{x:f.x*o,y:f.y*o,w:f.w*o,h:f.h*o},finalTarget:m,isVisible:i.isVisible})},iR=function(){return aT(this,t1,"f").length>0||null!==aT(this,t3,"f")&&aT(this,t5,"f")},iC=function(e){for(let t of e)if(aT(this,t6,"f").has(t))throw Error("[VFX-JS] Effect instance already attached. Construct a new instance per `vfx.add()` / `postEffect`.");for(let t of e)aT(this,t6,"f").add(t)},iW=function(e){for(let t of e)aT(this,t6,"f").delete(t)},iA=function(e){let t=e.hitTestPadBuffer,i=aT(this,it,"f");return o$({top:t.top/i,right:t.right/i,bottom:t.bottom/i,left:t.left/i})},iP=function(e,t,i){var r,s,o,a;let n,l,f,h=oG(t,e.chain?aT(this,tG,"m",iA).call(this,e.chain):e.overflow),c=e.isFullScreen||aR(aT(this,ic,"f"),h),u=oG(aT(this,ic,"f"),e.intersection.rootMargin),d=(n=oq(t.left,u.left,u.right),l=(oq(t.right,u.left,u.right)-n)/(t.right-t.left),f=oq(t.top,u.top,u.bottom),l*((oq(t.bottom,u.top,u.bottom)-f)/(t.bottom-t.top))),p=e.isFullScreen||(r=u,s=t,o=d,0===(a=e.intersection.threshold)?aR(r,s):o>=a);!e.isInLogicalViewport&&p&&(e.enterTime=i,e.leaveTime=1/0),e.isInLogicalViewport&&!p&&(e.leaveTime=i),e.isInViewport=c,e.isInLogicalViewport=p;let m=c&&i-e.leaveTime<=e.release||!0===e.forceRender&&t.right>t.left&&t.bottom>t.top;if(m&&!e.chain&&e.passes.length>0){let t=e.passes[0].uniforms;t.intersection.value=d,t.enterTime.value=i-e.enterTime,t.leaveTime.value=i-e.leaveTime}return{isVisible:m,intersection:d,rectWithOverflow:h}},iz=function(e){return e in on?on[e]:e},iF=function(e,t,i,r,s){let o=aT(this,tY,"f");s&&null!==t&&t!==aT(this,t2,"f")&&(o.bindFramebuffer(o.FRAMEBUFFER,t.fbo),o.viewport(0,0,t.width,t.height),o.clear(o.COLOR_BUFFER_BIT));let a=r.viewport;a&&a.value instanceof of&&a.value.set(i.x*aT(this,it,"f"),i.y*aT(this,it,"f"),i.w*aT(this,it,"f"),i.h*aT(this,it,"f"));try{var n,l,f,h;let r,s,a,c,u,d,p,m;n=aT(this,tQ,"f"),l=aT(this,iu,"f")[0],f=aT(this,iu,"f")[1],h=aT(this,it,"f"),r=t?t.width/h:l,s=t?t.height/h:f,a=Math.max(0,i.x),c=Math.max(0,i.y),u=Math.min(r,i.x+i.w),d=Math.min(s,i.y+i.h),p=u-a,m=d-c,p<=0||m<=0||(o.bindFramebuffer(o.FRAMEBUFFER,t?t.fbo:null),o.viewport(Math.round(a*h),Math.round(c*h),Math.round(p*h),Math.round(m*h)),ow(o,e.blend),e.program.use(),e.program.uploadUniforms(e.uniforms),n.draw())}catch(e){console.error(e)}},i_=function(e,t,i){let r=e.passes[0].uniforms.offset.value;r.x=t*aT(this,it,"f"),r.y=i*aT(this,it,"f")},iI=function(e){let t=1!==e.length||"frag"in e[0]?null:e[0];if(t&&void 0!==t.effect)return void aT(this,tG,"m",iU).call(this,t,t.effect);let i=[],r=[];for(let t of e)"frag"in t&&r.push(t);for(let e=0;e<r.length-1;e++)r[e].target||(r[e]={...r[e],target:`pass${e}`});for(let t of e){let e,r,s;if("frag"in t)e=t.frag,r=new ag(aT(this,tK,"f"),e,t.uniforms,t.persistent??!1,t.float??!1,t.size,void 0!==t.target,t.glslVersion),s=t.target;else{if(void 0===t.shader)throw Error("VFXPostEffect requires `shader` (the `effect` path is not implemented yet).");e=aT(this,tG,"m",iz).call(this,t.shader),r=new ag(aT(this,tK,"f"),e,t.uniforms,t.persistent??!1,t.float??!1,void 0,!1,t.glslVersion),t.persistent&&r.registerBufferUniform("backbuffer"),s=void 0}i.push(e);let o={};if(t.uniforms)for(let[e,i]of Object.entries(t.uniforms))"function"==typeof i&&(o[e]=i);aT(this,t1,"f").push({pass:r,target:s,generators:o})}for(let e of r)e.target&&aT(this,t4,"f").set(e.target,void 0);let s=aT(this,t1,"f").map(e=>e.target).filter(e=>void 0!==e);for(let e=0;e<aT(this,t1,"f").length;e++)for(let t of s)i[e].match(RegExp(`uniform\\s+sampler2D\\s+${t}\\b`))&&aT(this,t1,"f")[e].pass.registerBufferUniform(t)},iU=function(e,t){void 0!==e.shader&&console.warn("[VFX-JS] Both `shader` and `effect` specified on post-effect; `effect` takes precedence.");let i=Array.isArray(t)?[...t]:[t];aT(this,tG,"m",iC).call(this,i);let r=oO(()=>{let e=aT(this,t2,"f");if(!e)throw Error("[VFX-JS] post-effect chain active without target");return e.texture},()=>aT(this,t2,"f")?.width??0,()=>aT(this,t2,"f")?.height??0),s={autoCrop:!0,glslVersion:e.glslVersion??"300 es"},o=new oY(aT(this,tK,"f"),aT(this,tQ,"f"),aT(this,it,"f"),i,s,r,!0,aT(this,tZ,"f"));if(e.uniforms)for(let[t,i]of Object.entries(e.uniforms))"function"==typeof i?(aT(this,t9,"f")[t]=i,aT(this,t8,"f")[t]=i()):aT(this,t8,"f")[t]=i;ab(this,t3,o,"f"),ab(this,t7,aT(this,is,"f"),"f"),o.initAll().then(()=>{aT(this,t3,"f")===o&&ab(this,t5,!0,"f")}).catch(e=>{console.error("[VFX-JS] Post-effect init failed; post-effect disabled:",e),aT(this,t3,"f")===o&&(aT(this,tG,"m",iW).call(this,aT(this,t3,"f").effects),aT(this,t3,"f").dispose(),ab(this,t3,null,"f"),ab(this,t5,!1,"f"))})},iL=function(e,t){let i=aT(this,t3,"f");if(!i)return;let r=aT(this,it,"f"),s={...aT(this,t8,"f")};for(let[e,t]of Object.entries(aT(this,t9,"f")))s[e]=t();let o=aT(this,ih,"f").right-aT(this,ih,"f").left,a=aT(this,ih,"f").bottom-aT(this,ih,"f").top,n=t-aT(this,t7,"f");ab(this,t7,t,"f");let l=[o,a],f=[o*r,a*r],h={x:e.x*r,y:e.y*r,w:e.w*r,h:e.h*r};i.run({time:t,deltaTime:n,mouse:[aT(this,im,"f")*r,aT(this,iv,"f")*r],mouseViewport:[aT(this,im,"f")*r,aT(this,iv,"f")*r],intersection:1,enterTime:0,leaveTime:0,resolvedUniforms:s,canvasSize:l,canvasBufferSize:f,elementSize:l,elementBufferSize:f,elementRectOnCanvasPx:h,finalTarget:null,isVisible:!0})},iB=function(e,t){if(!aT(this,t2,"f"))return;let i=aT(this,t2,"f").texture,r=new Map;for(let{pass:e,target:t}of aT(this,t1,"f"))t&&e.backbuffer&&r.set(t,e.backbuffer.texture);for(let s=0;s<aT(this,t1,"f").length;s++){let{pass:o,target:a,generators:n}=aT(this,t1,"f")[s],l=s===aT(this,t1,"f").length-1,f=aT(this,im,"f")+aT(this,id,"f"),h=aT(this,iv,"f")+aT(this,ip,"f"),c=o.size;if(c){let[r,s]=c;o.uniforms.src.value=i,o.uniforms.resolution.value.set(r,s),o.uniforms.offset.value.set(0,0),o.uniforms.time.value=t,o.uniforms.mouse.value.set(f/e.w*r,h/e.h*s)}else o.setUniforms(i,aT(this,it,"f"),e,t,f,h);for(let[e,t]of(o.uniforms.passIndex.value=s,o.updateCustomUniforms(n),r)){let i=o.uniforms[e];i&&(i.value=t)}if(l)o.backbuffer?(o.uniforms.backbuffer&&(o.uniforms.backbuffer.value=o.backbuffer.texture),aT(this,tG,"m",iF).call(this,o.pass,o.backbuffer.target,e,o.uniforms,!0),o.backbuffer.swap(),aT(this,t0,"f").setUniforms(o.backbuffer.texture,aT(this,it,"f"),e),aT(this,tG,"m",iF).call(this,aT(this,t0,"f").pass,null,e,aT(this,t0,"f").uniforms,!1)):aT(this,tG,"m",iF).call(this,o.pass,null,e,o.uniforms,!1);else if(o.backbuffer){o.uniforms.backbuffer&&(o.uniforms.backbuffer.value=o.backbuffer.texture);let t=c?{x:0,y:0,w:c[0]/aT(this,it,"f"),h:c[1]/aT(this,it,"f")}:e;aT(this,tG,"m",iF).call(this,o.pass,o.backbuffer.target,t,o.uniforms,!0),o.backbuffer.swap(),i=o.backbuffer.texture,a&&r.set(a,o.backbuffer.texture)}else{let t=a??`postEffect${s}`,n=aT(this,t4,"f").get(t),l=c?c[0]:e.w*aT(this,it,"f"),f=c?c[1]:e.h*aT(this,it,"f");n&&n.width===l&&n.height===f||(n?.dispose(),n=ad(aT(this,tK,"f"),l,f,{float:o.float}),aT(this,t4,"f").set(t,n));let h=c?{x:0,y:0,w:c[0]/aT(this,it,"f"),h:c[1]/aT(this,it,"f")}:e;aT(this,tG,"m",iF).call(this,o.pass,n,h,o.uniforms,!0),i=n.texture,a&&r.set(a,n.texture)}}},iV=function(e,t){let i=e*aT(this,it,"f"),r=t*aT(this,it,"f");for(let{pass:s}of(aT(this,t2,"f")&&aT(this,t2,"f").width===i&&aT(this,t2,"f").height===r||(aT(this,t2,"f")?.dispose(),ab(this,t2,ad(aT(this,tK,"f"),i,r),"f")),aT(this,t1,"f")))s.persistent&&!s.backbuffer?s.initializeBackbuffer(aT(this,tK,"f"),e,t,aT(this,it,"f")):s.backbuffer&&s.resizeBackbuffer(e,t)};var aI=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},aU=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};iD=new WeakMap,iN=new WeakMap,i$=new WeakMap,iH=new WeakMap,iO=new WeakSet,iX=async function(e,t,i){if(!sV())return console.warn("html-in-canvas not supported, falling back to dom-to-canvas"),this.add(e,t);void 0!==t.overlay&&console.warn("addHTML does not support overlay mode (layoutsubtree hides children). Ignoring overlay option.");let{overlay:r,...s}=t,o=aU(this,i$,"f").get(e);o&&aU(this,iD,"f").removeElement(o);let{canvas:a,initialCapture:n}=await sL(e,{onCapture:e=>{aU(this,iD,"f").updateHICTexture(a,e)},maxSize:aU(this,iD,"f").maxTextureSize,stillCover:i?{zIndex:aU(this,iO,"m",ij).call(this)}:void 0});o=a,aU(this,i$,"f").set(e,o),await aU(this,iO,"m",iG).call(this,o,s,n)},ij=function(){let e=Number.parseInt(aU(this,iN,"f").style.zIndex,10);return Number.isNaN(e)?9998:e-1},iG=async function(e,t,i){try{await aU(this,iD,"f").addElement(e,t,i)}finally{s_(e,aU(this,iD,"f").isFrozen(e))}},iq=function(e,t){return e.complete?aU(this,iD,"f").addElement(e,t):new Promise(i=>{e.addEventListener("load",()=>{aU(this,iD,"f").addElement(e,t),i()},{once:!0})})},iJ=function(e,t){return e.readyState>=3?aU(this,iD,"f").addElement(e,t):new Promise(i=>{e.addEventListener("canplay",()=>{aU(this,iD,"f").addElement(e,t),i()},{once:!0})})},iK=function(e,t){return aU(this,iD,"f").addElement(e,t)},iY=function(e,t){return aU(this,iD,"f").addElement(e,t)},e.s(["f",0,class e{static init(t){try{return new e(t)}catch{return null}}constructor(e={}){let t,i,r;if(iO.add(this),iD.set(this,void 0),iN.set(this,void 0),i$.set(this,new Map),iH.set(this,new Set),"u"<typeof document)throw"Cannot find 'document'. VFX-JS only runs on the browser.";if(!function(){try{let e=document.createElement("canvas"),t=e.getContext("webgl2")||e.getContext("webgl");return null!==t}catch{return!1}}())throw Error("[VFX-JS] WebGL is not available in this environment.");let s=(r=window.devicePixelRatio,t=void 0===e.scrollPadding?[.1,.1]:!1===e.scrollPadding?[0,0]:Array.isArray(e.scrollPadding)?[e.scrollPadding[0]??.1,e.scrollPadding[1]??.1]:[e.scrollPadding,e.scrollPadding],i=void 0===e.postEffect?[]:Array.isArray(e.postEffect)?e.postEffect:[e.postEffect],{pixelRatio:e.pixelRatio??r,zIndex:e.zIndex??void 0,autoplay:e.autoplay??!0,fixedCanvas:!1===e.scrollPadding,scrollPadding:t,wrapper:e.wrapper,postEffects:i,preserveDrawingBuffer:e.preserveDrawingBuffer??!1,timeScale:e.timeScale??1}),o=document.createElement("canvas");for(let[e,t]of Object.entries({position:s.fixedCanvas?"fixed":"absolute",top:0,left:0,width:"0px",height:"0px","z-index":9999,"pointer-events":"none"}))o.style.setProperty(e,t.toString());void 0!==s.zIndex&&o.style.setProperty("z-index",s.zIndex.toString()),(s.wrapper??document.body).appendChild(o),aI(this,iN,o,"f"),aI(this,iD,new ak(s,o),"f"),s.autoplay&&aU(this,iD,"f").play()}async add(e,t,i){e instanceof HTMLImageElement?await aU(this,iO,"m",iq).call(this,e,t):e instanceof HTMLVideoElement?await aU(this,iO,"m",iJ).call(this,e,t):e instanceof HTMLCanvasElement?sa(e)&&i?await aU(this,iO,"m",iG).call(this,e,t,i):await aU(this,iO,"m",iK).call(this,e,t):await aU(this,iO,"m",iY).call(this,e,t)}updateHICTexture(e,t){aU(this,iD,"f").updateHICTexture(e,t)}get maxTextureSize(){return aU(this,iD,"f").maxTextureSize}get canvas(){return aU(this,iN,"f")}addHTML(e,t){return aU(this,iO,"m",iX).call(this,e,t,!1)}addHTMLWithStill(e,t){return aU(this,iO,"m",iX).call(this,e,t,!0)}addTransition(e,t={}){let i=new sY(this,e,t,()=>aU(this,iH,"f").delete(i));return aU(this,iH,"f").add(i),i}freezeInside(e){return aU(this,iD,"f").freezeInside(e)}lockSize(e){let t=aU(this,i$,"f").get(e);return t?sz(t):()=>{}}forceRender(e){let t=aU(this,i$,"f").get(e)??e;return aU(this,iD,"f").forceRender(t)}remove(e){let t=aU(this,i$,"f").get(e);t?(sB(t,e),aU(this,i$,"f").delete(e),aU(this,iD,"f").removeElement(t)):aU(this,iD,"f").removeElement(e)}updateEffects(e,t){let i=aU(this,i$,"f").get(e)??e;return aU(this,iD,"f").updateElementEffects(i,t)}async update(e){await this.updateInTime(e)}async updateInTime(e){let t=aU(this,i$,"f").get(e)??(e instanceof HTMLCanvasElement?e:null),i=t?sP(t):void 0;return i||(e instanceof HTMLImageElement?await aU(this,iD,"f").updateImageElement(e):e instanceof HTMLCanvasElement?aU(this,iD,"f").updateCanvasElement(e):await aU(this,iD,"f").updateTextElement(e),!0)}play(){aU(this,iD,"f").play()}stop(){aU(this,iD,"f").stop()}render(){aU(this,iD,"f").render()}get time(){return aU(this,iD,"f").time}setTime(e){aU(this,iD,"f").setTime(e)}get timeScale(){return aU(this,iD,"f").timeScale}set timeScale(e){aU(this,iD,"f").timeScale=e}destroy(){for(let e of aU(this,iH,"f"))e.destroy();for(let[e,t]of(aU(this,iH,"f").clear(),aU(this,i$,"f")))sB(t,e);aU(this,i$,"f").clear(),aU(this,iD,"f").destroy(),aU(this,iN,"f").remove()}}],61388),e.s([],90422);var aL=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},aB=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let aV=`
vec4 splitRead(vec2 uvr, vec2 uvg, vec2 uvb, bool to) {
  vec4 r = to ? readTo(uvr) : readFrom(uvr);
  vec4 g = to ? readTo(uvg) : readFrom(uvg);
  vec4 b = to ? readTo(uvb) : readFrom(uvb);
  return vec4(r.r, g.g, b.b, (r.a + g.a + b.a) / 3.0);
}
`,aO=`
float ign(vec2 p) {
  return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
}
`,aD=`
vec2 mirror(vec2 p) {
  return 1.0 - abs(1.0 - mod(p, 2.0));
}
`;class aN extends ss{constructor(){super(...arguments),this.name="hard_cut",this.frag=`
vec4 transition(vec2 uv, float t) {
  return t < 0.5 ? readFrom(uv) : readTo(uv);
}
`}}let a$=e=>"function"==typeof e.render&&!1!==e.enabled;class aH{constructor(e={}){iQ.set(this,[]),this.params=e}async init(e){for(let t of(aL(this,iQ,this.stages.slice(1).map(()=>e.createRenderTarget()),"f"),this.stages))await t.init?.(e)}start(e){for(let t of this.stages)t.start?.(e)}update(e){for(let t of this.stages)t.update?.(e)}render(e){let t=this.stages.filter(a$);if(0===t.length)return void e.blit(e.src);let i=e.src;for(let[r,s]of t.entries()){if(r===t.length-1)return void s.render?.({...e,src:i});let o=aB(this,iQ,"f")[r];e.clear(o),s.render?.(function(e,t,i){return{...e,src:t,target:i,draw:t=>e.draw({...t,target:t.target??i}),blit:(t,r,s)=>e.blit(t,r??i,s),clear:t=>e.clear(t??i)}}(e,i,o)),i=o}}end(){for(let e of this.stages)e.end?.()}outputRect(e){let t=this.stages.filter(a$);return t[t.length-1]?.outputRect?.(e)}dispose(){for(let e of this.stages)e.dispose?.();for(let e of aB(this,iQ,"f"))e.dispose();aL(this,iQ,[],"f")}}iQ=new WeakMap,e.s(["f",0,class extends ss{constructor(){super(...arguments),this.name="crosszoom",this.overflow=!0,this.frag=`
const float STRENGTH = 0.4;
const float TAPS = 16.0;

${aO}
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
`}}],75682);new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet;new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet;let aX=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D src;
uniform vec4 srcRectUv;
void main() {
    outColor = texture(src, srcRectUv.xy + uv * srcRectUv.zw);
}
`,aj=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D src;
void main() {
    outColor = texture(src, uv);
}
`;function aG(e,t){e.draw({frag:aX,uniforms:{src:e.src},target:t})}var aq=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},aJ=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let aK=`#version 300 es
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
`,aY=`#version 300 es
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
`,aQ=`#version 300 es
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
`,aZ=`#version 300 es
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
`,a0=`#version 300 es
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
`,a1=`#version 300 es
precision highp float;
in vec2 uvContent;
out vec4 outColor;
uniform sampler2D uResidual;
void main() {
    vec3 r = texture(uResidual, uvContent).rgb;
    outColor = vec4(clamp(r * 0.5 + 0.5, 0.0, 1.0), 1.0);
}
`,a2=`
float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
vec2 chroma(vec3 c) {
    return vec2(dot(c, vec3(-0.168736, -0.331264, 0.5)),
                dot(c, vec3(0.5, -0.418688, -0.081312))) + 0.5;
}
`,a4=`#version 300 es
precision highp float;
${a2}
in vec2 uv;
out vec4 outColor;
uniform sampler2D uCur, uRef, uMV;
uniform vec2 uChromaRes;
void main() {
    vec2 mvc = floor(texture(uMV, uv).rg * 0.5);
    vec2 pred = chroma(texture(uRef, uv + mvc / uChromaRes).rgb);
    outColor = vec4(chroma(texture(uCur, uv).rgb) - pred, 0.0, 1.0);
}
`,a3=`#version 300 es
precision highp float;
${a2}
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
`,a5=`#version 300 es
precision highp float;
${a2}
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
`,a6=`#version 300 es
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
`,a8={blockSize:16,searchRange:5,searchStep:2,useResidual:!0,dup:0,colorSpace:"ycbcr",chromaGain:1,healRate:0,healThreshold:1,view:"output"};class a9{constructor(e={}){iZ.add(this),i0.set(this,!1),i1.set(this,!0),i2.set(this,null),i4.set(this,null),i3.set(this,null),i5.set(this,null),i6.set(this,null),i8.set(this,null),i9.set(this,null),i7.set(this,0),re.set(this,0),rt.set(this,0),ri.set(this,0),rr.set(this,0),rs.set(this,0),ro.set(this,void 0),this.params={...a8,...e},aq(this,ro,this.params.colorSpace,"f")}setParams(e){Object.assign(this.params,e)}enable(){aq(this,i0,!0,"f")}disable(){aq(this,i0,!1,"f"),aq(this,i1,!0,"f")}get enabled(){return aJ(this,i0,"f")}render(e){var t,i;aJ(this,iZ,"m",rn).call(this,e);let r=aJ(this,i2,"f"),s=aJ(this,i4,"f"),o=aJ(this,i3,"f"),a=aJ(this,i5,"f"),n=aJ(this,i6,"f"),l=aJ(this,i8,"f"),f=aJ(this,i9,"f");if(!r||!s||!o||!a||!n||!l||!f)return;this.params.colorSpace!==aJ(this,ro,"f")&&(aq(this,ro,this.params.colorSpace,"f"),aq(this,i1,!0,"f"));let h=[aJ(this,i7,"f"),aJ(this,re,"f")];aG(e,r);let c="output"!==this.params.view;if((aJ(this,i0,"f")||c)&&(e.draw({frag:aY,uniforms:{uCur:r,uRef:s,uResolution:h,uBlock:aJ(this,rr,"f"),uSearch:this.params.searchRange,uStep:this.params.searchStep,uHealRate:this.params.healRate,uHealThreshold:this.params.healThreshold,uFrame:(aq(this,rs,(i=aJ(this,rs,"f"),t=i++,i),"f"),t%65536)},target:o}),e.draw({frag:aQ,uniforms:{uCur:r,uRef:s,uMV:o,uResolution:h},target:a})),aJ(this,i0,"f")){let t=aJ(this,i1,"f")?1:1+this.params.dup,i=[aJ(this,rt,"f"),aJ(this,ri,"f")];"ycbcr"===this.params.colorSpace&&e.draw({frag:a4,uniforms:{uCur:r,uRef:s,uMV:o,uChromaRes:i},target:f});for(let s=0;s<t;s++){let t=this.params.useResidual&&0===s;"ycbcr"===this.params.colorSpace?(e.draw({frag:a3,uniforms:{uAccum:n,uMV:o,uVideo:r,uResidual:a,uResolution:h,uIntra:aJ(this,i1,"f"),uUseResidual:t},target:n}),e.draw({frag:a5,uniforms:{uChromaAcc:l,uMV:o,uVideo:r,uResidualC:f,uChromaRes:i,uIntra:aJ(this,i1,"f"),uUseResidual:t},target:l})):e.draw({frag:aZ,uniforms:{uAccum:n,uMV:o,uVideo:r,uResidual:a,uResolution:h,uIntra:aJ(this,i1,"f"),uUseResidual:t},target:n})}aq(this,i1,!1,"f")}else aq(this,i1,!0,"f");aJ(this,iZ,"m",rl).call(this,e,r,s,o,a,n,l),aG(e,s)}dispose(){aJ(this,iZ,"m",ra).call(this),aq(this,i7,0,"f"),aq(this,re,0,"f"),aq(this,rt,0,"f"),aq(this,ri,0,"f"),aq(this,rr,0,"f"),aq(this,i1,!0,"f")}}i0=new WeakMap,i1=new WeakMap,i2=new WeakMap,i4=new WeakMap,i3=new WeakMap,i5=new WeakMap,i6=new WeakMap,i8=new WeakMap,i9=new WeakMap,i7=new WeakMap,re=new WeakMap,rt=new WeakMap,ri=new WeakMap,rr=new WeakMap,rs=new WeakMap,ro=new WeakMap,iZ=new WeakSet,ra=function(){aJ(this,i2,"f")?.dispose(),aJ(this,i4,"f")?.dispose(),aJ(this,i3,"f")?.dispose(),aJ(this,i5,"f")?.dispose(),aJ(this,i6,"f")?.dispose(),aJ(this,i8,"f")?.dispose(),aJ(this,i9,"f")?.dispose(),aq(this,i2,null,"f"),aq(this,i4,null,"f"),aq(this,i3,null,"f"),aq(this,i5,null,"f"),aq(this,i6,null,"f"),aq(this,i8,null,"f"),aq(this,i9,null,"f")},rn=function(e){let[t,i]=e.dims.elementPixel,r=Math.max(2,this.params.blockSize);if(aJ(this,i7,"f")===t&&aJ(this,re,"f")===i&&aJ(this,rr,"f")===r)return;aJ(this,iZ,"m",ra).call(this),aq(this,i7,t,"f"),aq(this,re,i,"f"),aq(this,rt,Math.ceil(t/2),"f"),aq(this,ri,Math.ceil(i/2),"f"),aq(this,rr,r,"f"),aq(this,i1,!0,"f");let s=Math.ceil(t/r),o=Math.ceil(i/r);aq(this,i2,e.createRenderTarget({size:[t,i]}),"f"),aq(this,i4,e.createRenderTarget({size:[t,i],persistent:!0}),"f"),aq(this,i5,e.createRenderTarget({size:[t,i],float:!0}),"f"),aq(this,i6,e.createRenderTarget({size:[t,i],float:!0,persistent:!0}),"f"),aq(this,i8,e.createRenderTarget({size:[aJ(this,rt,"f"),aJ(this,ri,"f")],float:!0,persistent:!0}),"f"),aq(this,i9,e.createRenderTarget({size:[aJ(this,rt,"f"),aJ(this,ri,"f")],float:!0}),"f"),aq(this,i3,e.createRenderTarget({size:[s,o],float:!0,filter:"nearest"}),"f")},rl=function(e,t,i,r,s,o,a){switch(this.params.view){case"motion":e.draw({frag:a0,uniforms:{uMV:r,uMvScale:this.params.searchRange*this.params.searchStep},target:e.target});return;case"residual":e.draw({frag:a1,uniforms:{uResidual:s},target:e.target});return;case"current":e.draw({frag:aK,uniforms:{tex:t},target:e.target});return;case"previous":e.draw({frag:aK,uniforms:{tex:i},target:e.target});return;default:aJ(this,i0,"f")&&"ycbcr"===this.params.colorSpace?e.draw({frag:a6,uniforms:{uLumaAcc:o,uChromaAcc:a,uChromaGain:this.params.chromaGain},target:e.target}):e.draw({frag:aK,uniforms:{tex:aJ(this,i0,"f")?o:t},target:e.target})}},new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap;var a7=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)},ne=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i};let nt=`#version 300 es
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
`,ni=`#version 300 es
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
`,nr={quality:.4,seed:.25,iterations:24,resolutionScale:1,randomFlip:!0,vertical:!1,speed:0,bypass:!1};function ns(e,t){if("u">typeof OffscreenCanvas)return new OffscreenCanvas(e,t);let i=document.createElement("canvas");return i.width=e,i.height=t,i}function no(e){let t=e.getContext("2d");if(!t)throw Error("[VFX-JS] JPEGGlitchEffect: 2D canvas context unavailable");return t}function na(e,t,i,r,s,o,a){switch(e.save(),e.clearRect(0,0,o,a),s){case 90:e.translate(o,0);break;case 180:e.translate(o,a);break;case 270:e.translate(0,a)}e.rotate(s*Math.PI/180),e.drawImage(t,0,0,i,r),e.restore()}class nn{get producedFrames(){return a7(this,rI,"f")}constructor(e={}){rf.add(this),this.enabled=!0,rh.set(this,!1),rc.set(this,null),ru.set(this,null),rd.set(this,null),rp.set(this,null),rm.set(this,!1),rv.set(this,null),rg.set(this,null),rw.set(this,null),rx.set(this,null),ry.set(this,null),rb.set(this,null),rT.set(this,null),rE.set(this,new Uint8Array(0)),rM.set(this,null),rS.set(this,0),rk.set(this,0),rR.set(this,0),rC.set(this,0),rW.set(this,!0),rA.set(this,!1),rP.set(this,-1e9),rz.set(this,0),rF.set(this,0),r_.set(this,!1),rI.set(this,0),this.params={...nr,...e}}setParams(e){Object.assign(this.params,e),ne(this,rW,!0,"f")}init(e){ne(this,rh,"function"==typeof createImageBitmap&&("u">typeof OffscreenCanvas||"u">typeof document),"f"),a7(this,rh,"f")&&(ne(this,rP,-1e9,"f"),ne(this,rW,!0,"f"),ne(this,rg,ns(1,1),"f"),ne(this,rw,no(a7(this,rg,"f")),"f"),ne(this,rx,ns(1,1),"f"),ne(this,ry,no(a7(this,rx,"f")),"f"),ne(this,rb,ns(1,1),"f"),ne(this,rT,no(a7(this,rb,"f")),"f"),ne(this,rc,e.createRenderTarget({size:[1,1]}),"f"),ne(this,rd,e.gl,"f"),a7(this,rf,"m",rU).call(this,e),ne(this,rv,e.onContextRestored(()=>{a7(this,rf,"m",rU).call(this,e),ne(this,rm,a7(this,r_,"f"),"f")}),"f"))}update(){!1===this.enabled&&ne(this,r_,!1,"f")}render(e){if(this.params.bypass||!a7(this,rh,"f")||!a7(this,rc,"f")){ne(this,r_,!1,"f"),a7(this,rf,"m",rL).call(this,e);return}let t=e.src.width,i=e.src.height;(t!==a7(this,rR,"f")||i!==a7(this,rC,"f"))&&(ne(this,rR,t,"f"),ne(this,rC,i,"f"),ne(this,rW,!0,"f"));let[r,s]=e.dims.elementPixel,o=Math.min(1,Math.max(0,this.params.resolutionScale)),a=Math.max(1,Math.round(r*o)),n=Math.max(1,Math.round(s*o));r>=2&&s>=2&&t>0&&i>0&&((a!==a7(this,rS,"f")||n!==a7(this,rk,"f"))&&a7(this,rf,"m",rV).call(this,e,a,n),a7(this,rf,"m",rB).call(this,e)&&a7(this,rf,"m",rO).call(this,e)),a7(this,r_,"f")&&a7(this,ru,"f")?(a7(this,rm,"f")&&a7(this,rf,"m",rD).call(this,e),e.draw({frag:ni,uniforms:{tex:a7(this,ru,"f")},target:e.target})):a7(this,rf,"m",rL).call(this,e)}dispose(){var e;a7(this,rv,"f")?.call(this),ne(this,rv,null,"f"),a7(this,rd,"f")&&a7(this,rp,"f")&&a7(this,rd,"f").deleteTexture(a7(this,rp,"f")),ne(this,rp,null,"f"),ne(this,rd,null,"f"),ne(this,rm,!1,"f"),a7(this,rc,"f")?.dispose(),ne(this,rc,null,"f"),ne(this,ru,null,"f"),ne(this,rg,null,"f"),ne(this,rw,null,"f"),ne(this,rx,null,"f"),ne(this,ry,null,"f"),ne(this,rb,null,"f"),ne(this,rT,null,"f"),ne(this,rM,null,"f"),ne(this,rE,new Uint8Array(0),"f"),ne(this,r_,!1,"f"),ne(this,rA,!1,"f"),ne(this,rS,0,"f"),ne(this,rk,0,"f"),ne(this,rz,(e=a7(this,rz,"f"),++e),"f")}}rh=new WeakMap,rc=new WeakMap,ru=new WeakMap,rd=new WeakMap,rp=new WeakMap,rm=new WeakMap,rv=new WeakMap,rg=new WeakMap,rw=new WeakMap,rx=new WeakMap,ry=new WeakMap,rb=new WeakMap,rT=new WeakMap,rE=new WeakMap,rM=new WeakMap,rS=new WeakMap,rk=new WeakMap,rR=new WeakMap,rC=new WeakMap,rW=new WeakMap,rA=new WeakMap,rP=new WeakMap,rz=new WeakMap,rF=new WeakMap,r_=new WeakMap,rI=new WeakMap,rf=new WeakSet,rU=function(e){let t=e.gl,i=t.createTexture();i&&(t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array([0,0,0,0])),t.bindTexture(t.TEXTURE_2D,null),ne(this,rp,i,"f"),ne(this,ru,e.wrapTexture(i,{size:[a7(this,rS,"f")||1,a7(this,rk,"f")||1]}),"f"))},rL=function(e){e.draw({frag:nt,uniforms:{src:e.src},target:e.target})},rB=function(e){if(a7(this,rA,"f"))return!1;let t=this.params.speed;return t>0?e.time-a7(this,rP,"f")>=1/t:a7(this,rW,"f")},rV=function(e,t,i){var r;ne(this,rS,t,"f"),ne(this,rk,i,"f"),ne(this,rE,new Uint8Array(t*i*4),"f"),ne(this,rM,new ImageData(t,i),"f"),a7(this,rg,"f")&&(a7(this,rg,"f").width=t,a7(this,rg,"f").height=i),a7(this,rb,"f")&&(a7(this,rb,"f").width=t,a7(this,rb,"f").height=i),a7(this,rc,"f")?.dispose(),ne(this,rc,e.createRenderTarget({size:[t,i]}),"f"),ne(this,r_,!1,"f"),ne(this,rW,!0,"f"),ne(this,rA,!1,"f"),ne(this,rm,!1,"f"),ne(this,rz,(r=a7(this,rz,"f"),++r),"f")},rO=function(e){var t;let i,r=a7(this,rS,"f"),s=a7(this,rk,"f"),o=a7(this,rg,"f"),a=a7(this,rw,"f"),n=a7(this,rx,"f"),l=a7(this,ry,"f"),f=a7(this,rM,"f");if(!o||!a||!n||!l||!f||!a7(this,rc,"f"))return;aG(e,a7(this,rc,"f"));let h=e.gl;h.readPixels(0,0,r,s,h.RGBA,h.UNSIGNED_BYTE,a7(this,rE,"f")),h.bindFramebuffer(h.FRAMEBUFFER,null),ne(this,rA,!0,"f"),ne(this,rW,!1,"f"),ne(this,rP,e.time,"f");let c=f.data,u=4*r;for(let e=0;e<s;e++){let t=(s-1-e)*u;c.set(a7(this,rE,"f").subarray(t,t+u),e*u)}for(let e=3;e<c.length;e+=4)c[e]=255;let d=this.params.speed>0?a7(this,rF,"f"):0;ne(this,rF,(t=a7(this,rF,"f"),++t),"f");let{quality:p,seed:m,iterations:v,randomFlip:g,vertical:w}=this.params,x=(i=Math.imul(0|Math.floor(0x9e3779b1*m),0x85ebca77)+Math.imul(d+1,0xc2b2ae3d)>>>0,()=>{let e=Math.imul((i=i+0x6d2b79f5>>>0)^i>>>15,1|i);return(((e=e+Math.imul(e^e>>>7,61|e)^e)^e>>>14)>>>0)/0x100000000}),y=g&&.5>x();a.putImageData(f,0,0);let b=(180*!!y+270*!!w)%360,T=w?s:r,E=w?r:s;n.width=T,n.height=E,na(l,o,r,s,b,T,E),a7(this,rf,"m",rN).call(this,n,r,s,p,v,b,x,a7(this,rz,"f"))},rD=function(e){let t=e.gl;a7(this,rp,"f")&&a7(this,rb,"f")&&(t.bindTexture(t.TEXTURE_2D,a7(this,rp,"f")),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,a7(this,rb,"f")),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.bindTexture(t.TEXTURE_2D,null),ne(this,rm,!1,"f"))},rN=async function(e,t,i,r,s,o,a,n){var l;try{let f=await ("u">typeof OffscreenCanvas&&e instanceof OffscreenCanvas?e.convertToBlob({type:"image/jpeg",quality:r}):new Promise((t,i)=>{e.toBlob(e=>e?t(e):i(Error("[VFX-JS] JPEGGlitchEffect: toBlob failed")),"image/jpeg",r)})),h=new Uint8Array(await f.arrayBuffer()),c=function(e){for(let t=2;t+3<e.length;t++)if(255===e[t]&&218===e[t+1]){let i=e[t+2]<<8|e[t+3];return Math.min(e.length,t+2+i)}return Math.min(e.length,417)}(h);!function(e,t,i,r){let s=e.length-t-4;if(s<=1)return;let o=Math.max(1,Math.floor(i));for(let i=0;i<o;i++){let a=s/o*i|0,n=Math.max(1,(s/o*(i+1)|0)-a),l=Math.min(s,a+(r()*n|0)),f=256*r()|0;e[t+l]=f}}(h,c,s,a);let u=await createImageBitmap(new Blob([h],{type:"image/jpeg"}));n===a7(this,rz,"f")&&a7(this,rT,"f")&&(na(a7(this,rT,"f"),u,u.width,u.height,(360-o)%360,t,i),ne(this,r_,!0,"f"),ne(this,rI,(l=a7(this,rI,"f"),++l),"f"),ne(this,rm,!0,"f")),u.close()}catch{}finally{n===a7(this,rz,"f")&&ne(this,rA,!1,"f")}},new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap;new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet,new Float32Array([-.5,-.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,-.5,.5]);let nl=new Float32Array(4096);for(let e=0;e<4096;e++)nl[e]=e;new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,r$=new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet;new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakMap,new WeakSet;var nf=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)},nh=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i};let nc=`
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
`,nu=`
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
`,nd=`#version 300 es
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
${nc}
${nu}
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
`,np=`#version 300 es
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
${nc}
${nu}
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
`,nm=`#version 300 es
precision highp float;
in vec2 uvSrc;
out vec4 outColor;
uniform sampler2D src;
void main() {
    vec4 c = texture(src, uvSrc);
    outColor = vec4(c.rgb * c.a, c.a);
}
`,nv=`#version 300 es
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
`,ng=`#version 300 es
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
`,nw={right:{axis:0,direction:0},left:{axis:0,direction:1},down:{axis:1,direction:1},up:{axis:1,direction:0}},nx={luminance:0,r:1,g:2,b:3,hue:4,saturation:5},ny={range:[0,1],sortRes:128,key:"luminance",direction:"up",angle:0,bypass:!1};class nb{constructor(e={}){rH.add(this),rX.set(this,null),rj.set(this,null),rG.set(this,null),rq.set(this,null),rJ.set(this,0),rK.set(this,0),rY.set(this,0),rQ.set(this,0),rZ.set(this,0),r0.set(this,0),r1.set(this,0),this.params={...ny,...e},this.params.range=[...this.params.range]}setParams(e){Object.assign(this.params,e),e.range&&(this.params.range=[...e.range])}render(e){if(nf(this,rH,"m",r4).call(this,e),this.params.bypass||!nf(this,rX,"f")||!nf(this,rj,"f"))return void e.draw({frag:nm,uniforms:{src:e.src},target:e.target});let{axis:t,direction:i}=nw[this.params.direction],r=[nf(this,r0,"f"),nf(this,r1,"f")],[s,o]=this.params.range,a=nx[this.params.key],[n,l]=e.dims.elementPixel,f=nf(this,rG,"f"),h=nf(this,rq,"f"),c=0!==this.params.angle&&null!==f&&null!==h,u=e.src,d=e.target,p=[1,0],m=[n,l];if(c){let t=-this.params.angle*Math.PI/180;p=[Math.cos(t),Math.sin(t)],m=[nf(this,rQ,"f"),nf(this,rZ,"f")],e.draw({frag:nv,uniforms:{src:e.src,srcSize:[n,l],boxSize:m,rot:p},target:f}),u=f,d=h}if(c&&null!==f){var v;v=nf(this,rX,"f"),e.draw({frag:aj,uniforms:{src:f},target:v})}else aG(e,nf(this,rX,"f"));let g=+!!c,w=[n,l];e.draw({frag:nd,uniforms:{src:nf(this,rX,"f"),srcSize:r,threshold:s,thresholdHigh:o,keyMode:a,direction:i,axis:t,masked:g,boxSize:m,imgSize:w,rot:p},target:nf(this,rj,"f")}),e.draw({frag:np,uniforms:{src:nf(this,rX,"f"),srcHi:u,rankTex:nf(this,rj,"f"),lowSize:r,threshold:s,thresholdHigh:o,keyMode:a,axis:t,masked:g,boxSize:m,imgSize:w,rot:p},target:d}),c&&e.draw({frag:ng,uniforms:{src:h,srcSize:[n,l],boxSize:m,rot:p},target:e.target})}dispose(){nf(this,rH,"m",r2).call(this),nh(this,rJ,0,"f"),nh(this,rK,0,"f"),nh(this,rY,0,"f"),nh(this,rQ,0,"f"),nh(this,rZ,0,"f"),nh(this,r0,0,"f"),nh(this,r1,0,"f")}}rX=new WeakMap,rj=new WeakMap,rG=new WeakMap,rq=new WeakMap,rJ=new WeakMap,rK=new WeakMap,rY=new WeakMap,rQ=new WeakMap,rZ=new WeakMap,r0=new WeakMap,r1=new WeakMap,rH=new WeakSet,r2=function(){nf(this,rX,"f")?.dispose(),nf(this,rj,"f")?.dispose(),nf(this,rG,"f")?.dispose(),nf(this,rq,"f")?.dispose(),nh(this,rX,null,"f"),nh(this,rj,null,"f"),nh(this,rG,null,"f"),nh(this,rq,null,"f")},r4=function(e){let[t,i]=e.dims.elementPixel,{axis:r}=nw[this.params.direction],{angle:s}=this.params,o=this.params.sortRes,a=t,n=i;if(0!==s){let e=s*Math.PI/180,r=Math.abs(Math.cos(e)),o=Math.abs(Math.sin(e));a=Math.ceil(t*r+i*o),n=Math.ceil(t*o+i*r)}let l=0===r?Math.max(1,Math.round(o*a/t)):Math.max(1,Math.round(o*n/i)),f=0===r?l:a,h=0===r?n:l;(nf(this,rJ,"f")!==t||nf(this,rK,"f")!==i||nf(this,rY,"f")!==s||nf(this,r0,"f")!==f||nf(this,r1,"f")!==h)&&(nf(this,rH,"m",r2).call(this),nh(this,rJ,t,"f"),nh(this,rK,i,"f"),nh(this,rY,s,"f"),nh(this,rQ,a,"f"),nh(this,rZ,n,"f"),nh(this,r0,f,"f"),nh(this,r1,h,"f"),nh(this,rX,e.createRenderTarget({size:[f,h],filter:"nearest"}),"f"),nh(this,rj,e.createRenderTarget({size:[f,h],filter:"nearest",float:!0}),"f"),0!==s&&(nh(this,rG,e.createRenderTarget({size:[a,n]}),"f"),nh(this,rq,e.createRenderTarget({size:[a,n]}),"f")))};var nT=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},nE=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};class nM extends ss{constructor(){super(...arguments),this.name="datamosh",this.frag=`
vec4 transition(vec2 uv, float t) {
  return reverse > 0.5 ? readFrom(uv) : readTo(uv);
}
`}}class nS extends a9{constructor(e){super({dup:0,blockSize:e()}),r3.set(this,void 0),r5.set(this,0),r6.set(this,1),nT(this,r3,e,"f")}start(e){this.params.blockSize=nE(this,r3,"f").call(this),this.params.chromaGain=1.5,this.params.useResidual=!1,this.params.healRate=0,nT(this,r5,0,"f"),nT(this,r6,Math.max(.75*e.duration,.001),"f"),this.enable()}update(e){var t;let{x:i}=e.progress,r=Math.min(Math.max((i-.25)/.75,0),1);this.params.useResidual=nT(this,r5,(t=nE(this,r5,"f"),++t),"f")>2,this.params.chromaGain=1.5+-.5*r,this.params.healRate=i<.25?0:1-.01**(e.deltaTime/nE(this,r6,"f"))}end(){this.disable()}}r3=new WeakMap,r5=new WeakMap,r6=new WeakMap,e.s(["f",0,class extends aH{constructor(){super(...arguments),this.name="datamosh",this.stages=[new nM,new nS(()=>{var e;return void 0!==(e=this.params.blockSize)&&Number.isFinite(e)&&e>=2?Math.round(e):32})]}}],28317),e.s(["f",0,class extends ss{constructor(){super(...arguments),this.name="distort_fade",this.frag=`
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

${aD}
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
`}}],96210);let nk=/vec4\s+transition\s*\(\s*vec2\s+(\w+)\s*\)/,nR=new Set(["from","src","srcRectUv","t","reverse","resolution","time","uvContent","outColor","progress","ratio"]),nC=e=>nR.has(e)?`glParam_${e}`:e;e.s(["f",0,function(e){let t=e.paramsTypes??{},i=[...e.textures??[],...Object.keys(t).filter(e=>"sampler2D"===t[e])];if(i.length>0)throw Error(`[VFX-JS] gl-transition "${e.name}" needs textures (${i.join(", ")}), which are not supported.`);if(!nk.test(e.glsl))throw Error(`[VFX-JS] gl-transition "${e.name}" has no \`vec4 transition(vec2 uv)\`.`);let r=e.glsl.replace(nk,"vec4 glTransition_(vec2 $1)");for(let e of Object.keys(t)){let t=nC(e);t!==e&&(r=r.replace(RegExp(`(^|[^.\\w])${e}\\b`,"g"),`$1${t}`))}let s=`
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
`;return class extends ss{constructor(i={}){for(let r of(super(i),this.name=`gl:${e.name}`,this.frag=s,this.ease="linear",Object.keys(i)))r in t||console.warn(`[VFX-JS] gl-transition "${e.name}" has no param "${r}".`)}uniforms(){let t={},i={...e.defaultParams,...this.params};for(let e of Object.keys(i))t[nC(e)]=i[e];return t}}}],66864),e.s(["f",0,class extends ss{constructor(){super(...arguments),this.name="glitch",this.frag=`
uniform float amount;
uniform float speed;

float gnoise(float y) {
  return sin(y * 7.0) * sin(y * 17.0) * sin(y * 59.0);
}
vec2 gnoise(vec2 uv) {
  return vec2(gnoise(uv.x), gnoise(uv.y + 100.0));
}

${aV}
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
`}}],166);var nW=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},nA=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let nP=e=>Math.min(Math.max(e.quality??.1,0),1);class nz extends nn{constructor(e){super({quality:nP(e()),bypass:!0,resolutionScale:.25}),r8.set(this,void 0),nW(this,r8,e,"f")}start(){this.params.bypass=!0,this.params.speed=30,this.params.quality=nP(nA(this,r8,"f").call(this))}render(e){let{x:t}=e.progress;this.params.bypass=!(t>.12&&t<.88);let i=Math.sin(Math.min(Math.max(t,0),1)*Math.PI),r=Math.max(1,Math.round(nA(this,r8,"f").call(this).iterations??4));this.params.iterations=Math.max(1,Math.round(r*i)),super.render(e)}end(){this.params.bypass=!0}}r8=new WeakMap,e.s(["f",0,class extends aH{constructor(){super(...arguments),this.name="jpeg_glitch",this.ease="linear",this.stages=[new aN,new nz(()=>this.params)]}}],57888),e.s(["f",0,class extends ss{constructor(){super(...arguments),this.name="lens_distortion",this.frag=`
uniform float strength;
uniform float dispersion;
// The old content zooms from 1 to 1 + zoom; the new one from 1 + zoom back to 1.
uniform float zoom;
const float TAPS = 12.0;
// Width of the growing warp's edge.
const float SOFT = 0.5;

${aO}
${aD}
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
`}uniforms(){return{strength:this.params.strength??1,dispersion:Math.max(0,this.params.dispersion??.6),zoom:Math.max(0,this.params.zoom??3)}}}],35668);let nF={right:[1,0],left:[-1,0],up:[0,1],down:[0,-1],center:[0,0]};e.s(["f",0,class extends ss{constructor(){super(...arguments),this.name="pixel_scan",this.frag=`
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
`}uniforms(){return{blackout:this.params.blackout??!0?1:0,sweep:nF[this.params.direction??"right"]}}}],97394),e.s(["f",0,class extends ss{constructor(){super(...arguments),this.name="pixel_stretch",this.frag=`
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
`}}],81651);var n_=function(e,t,i,r,s){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!s)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?s.call(e,i):s?s.value=i:t.set(e,i),i},nI=function(e,t,i,r){if("a"===i&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?r:"a"===i?r.call(e):r?r.value:t.get(e)};let nU={up:"down",down:"up",left:"right",right:"left"};class nL extends nb{constructor(e){super({range:[1,1]}),r9.set(this,void 0),r7.set(this,!1),n_(this,r9,e,"f")}start(e){let t=nI(this,r9,"f").call(this);n_(this,r7,e.reverse,"f"),this.params.direction=e.reverse?nU[t]:t,this.params.range[0]=1}update(e){let{t}=e.progress,i=nI(this,r9,"f").call(this),r=nI(this,r7,"f")?1-t:t;this.params.direction=r<.5?i:nU[i],this.params.range[0]=Math.abs(1-2*t)}end(){this.params.range[0]=1}}r9=new WeakMap,r7=new WeakMap,e.s(["f",0,class extends aH{constructor(){super(...arguments),this.name="pixelsort",this.stages=[new aN,new nL(()=>this.params.direction??"up")]}}],18013),e.s(["f",0,class extends ss{constructor(){super(...arguments),this.name="slit_scan",this.frag=`
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
`}}],26873);let nB={left:[-1,0],right:[1,0],up:[0,1],down:[0,-1]};e.s(["f",0,class extends ss{constructor(){super(...arguments),this.name="swipe",this.frag=`
uniform vec2 move;
const float STRETCH = 0.6;
const float BLUR = 0.2;
const float TAPS = 16.0;

${aO}
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
`}uniforms(){return{move:nB[this.params.direction??"left"]}}}],76359);let nV={center:[0,0],left:[-1,0],right:[1,0],up:[0,1],down:[0,-1]},nO={hex:`
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
`},nD=e=>`
uniform float count;
uniform float shadow;
// Zero spreads out in rings; otherwise the side the sweep moves toward.
uniform vec2 sweep;
const float SPREAD = 0.6;
// Shadow offset and blur at full lift, in tiles.
const vec2 SHADOW_OFFSET = vec2(0.05, -0.08);
const float SHADOW_BLUR = 0.12;
${nO[e]}
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
`,nN={hex:nD("hex"),square:nD("square")};e.s(["f",0,class extends ss{constructor(){super(...arguments),this.name="tile"}get frag(){return nN[this.params.shape??"hex"]}uniforms(){return{count:Math.max(1,Math.round(this.params.count??12)),shadow:Math.min(Math.max(this.params.shadow??.5,0),1),sweep:nV[this.params.direction??"center"]}}}],27202),e.s(["f",0,class extends ss{constructor(){super(...arguments),this.name="zoom",this.overflow=!0,this.frag=`
vec4 transition(vec2 uv, float t) {
  vec2 uv1 = (uv - 0.5) * (1.0 - t) + 0.5;
  vec2 uv2 = (uv - 0.5) / (t * 0.999 + 0.001) + 0.5;
  // Tile the new content only inside the element, so the overflow shows just the old one.
  vec4 to = inRange(uv) ? readTo(fract(uv2)) : vec4(0.0);
  return mix(readFrom(uv1), to, t);
}
`}}],99050),e.s(["f",0,class extends ss{constructor(){super(...arguments),this.name="zoom_blur",this.overflow=!0,this.frag=`
${aV}
${aO}
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