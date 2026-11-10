(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,83790,86679,6010,28263,36951,1633,e=>{e.i(90422),e.i(18289),e.i(7150);var t=e.i(16597),r=e.i(81290),i=e.i(60416),s=e.i(3066);e.s([],83790),e.i(61069),e.s([],86679),e.i(61388),e.i(99984),e.s([],6010),e.s([],28263),e.s(["f",0,function(e){return t.forwardRef(function(o,n){let a=(0,s.f)(),[l,f]=(0,t.useState)(null),{vfxProps:u,domProps:h}=(0,i.r)(o);return(0,r.Y)(l,a,u),(0,t.useEffect)(()=>{if(!a||!l)return;let e=new MutationObserver(()=>a.update(l));return e.observe(l,{characterData:!0,attributes:!0,subtree:!0}),()=>e.disconnect()},[l,a]),t.createElement(e,{...h,ref:e=>{f(e),n instanceof Function?n(e):n&&(n.current=e)}})})}],36951),e.s([],1633)},52729,e=>{e.i(83790),e.i(99984),e.i(86679),e.i(6010),e.i(28263);var t=e.i(36951);e.i(1633),e.i(58786),e.i(59443),e.i(24979),e.i(41570),(0,t.f)("span"),(0,t.f)("div"),(0,t.f)("p"),e.s([],52729)},81290,60416,e=>{var t=e.i(16597);let r=["shader","release","uniforms","overlay","intersection","overflow","wrap","zIndex","backbuffer","autoCrop","glslVersion","effect"];e.s(["B",0,r,"r",0,function(e){let t={},i={};for(let s of Object.keys(e))r.includes(s)?t[s]=e[s]:i[s]=e[s];return{vfxProps:t,domProps:i}}],60416);let i=r.filter(e=>"effect"!==e);function s(){let e=Promise.resolve();return{enqueue(t){let r=e.then(t,t);return e=r.then(()=>{},()=>{}),r}}}async function o(e,t,r,s,o){let n=function(e,t){for(let r of i)if(e[r]!==t[r])return!1;return!0}(r,s);if(!n||r.effect!==s.effect){if(n&&void 0!==s.effect)return void await e.updateEffects(t,s.effect);e.remove(t),await o(t,s)}}e.s(["P",0,o,"$",0,s,"Y",0,function(e,r,i){let n=(0,t.useRef)(i);n.current=i;let a=(0,t.useRef)(null),l=(0,t.useRef)(null);(0,t.useEffect)(()=>{if(!r||!e)return;let t=l.current;null===t&&(l.current=t=s());let i=!1;return t.enqueue(async()=>{if(i)return;let t=n.current;try{await r.add(e,t),a.current=t}catch(e){console.error("[@vfx-js/react] add failed:",e)}}),()=>{i=!0,t.enqueue(()=>{r.remove(e),a.current=null})}},[e,r]),(0,t.useEffect)(()=>{if(!r||!e)return;let t=l.current;null===t&&(l.current=t=s()),t.enqueue(async()=>{let t=a.current;if(t&&t!==i)try{await o(r,e,t,i,(e,t)=>r.add(e,t)),a.current=i}catch(e){console.error("[@vfx-js/react] applyDelta failed:",e)}})},[r,e,i])}],81290)},58786,59443,e=>{var t=e.i(16597),r=e.i(76137),i=e.i(36180);e.s(["f",0,function(e){let s=(0,t.useContext)(i.f),o=(0,t.useRef)(e);(0,t.useLayoutEffect)(()=>s?s.register(o.current):void(0,r.R)("transition-in","[@vfx-js/react] useTransitionIn does nothing outside <VFXTransition>."),[s])}],58786),e.s([],59443)},41570,22305,e=>{var t=e.i(61069),r=e.i(16597),i=e.i(3066),s=e.i(54057),o=e.i(36180);let n=null;function a(){let e=null!==n&&Date.now()-n.at<=1e4?n:null;return n=null,e?e.spec:null}function l(e){n={spec:e,at:Date.now()}}e.s(["n",0,l,"i",0,a,"e",0,function(e){return t=>{(function(e){if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return!1;let t=e.currentTarget?.getAttribute?.("target");return!t||"_self"===t})(t)&&l(e)}}],22305);let f={display:"contents"},u={height:"100dvh",overflow:"hidden"};e.s(["f",0,function(e){let{pageKey:n,children:l,className:h,style:c,fullscreen:d=!0,...p}=e,m=(0,i.f)(),g=(0,s.f)(p),v=(0,r.useRef)(null),x=(0,r.useRef)(null),[w,y]=(0,r.useState)({key:n,node:l}),b=(0,r.useRef)(n),T=(0,r.useRef)([]),E=(0,r.useRef)(null),[R]=(0,r.useState)(()=>({register:e=>(E.current=e,()=>{E.current===e&&(E.current=null)})}));(0,r.useEffect)(()=>{let e=v.current;if(!m||!e)return;let t=m.addTransition(e,g);return x.current=t,()=>{t.destroy(),x.current=null}},[m,g]),(0,r.useLayoutEffect)(()=>{let e=T.current;for(let t of(T.current=[],e))t()},[w]),(0,r.useEffect)(()=>{if(n===b.current)return;b.current=n;let e={key:n,node:l},t=x.current;t&&void 0!==n?(E.current=null,t.run(()=>new Promise(t=>{b.current!==n?t():(T.current.push(t),(0,r.startTransition)(()=>y(e)))}),()=>a()??E.current??{}).catch(e=>{console.error("[@vfx-js/react] VFXTransition run failed:",e)})):(0,r.startTransition)(()=>y(e))});let S=(0,r.useRef)(w);S.current.key!==w.key&&(S.current=w),(void 0===n||n===w.key)&&(S.current={key:w.key,node:l});let C=S.current;return(0,t.jsx)("div",{style:f,children:(0,t.jsx)("div",{ref:v,className:h,style:d?{...u,...c}:c,children:(0,t.jsx)(o.f.Provider,{value:R,children:(0,t.jsx)(r.Fragment,{children:C.node},C.key)})})})}],41570)},54057,e=>{var t=e.i(16597);e.s(["f",0,function(e){let r=(0,t.useRef)({}).current;for(let t of Object.keys(r))t in e||delete r[t];return Object.assign(r,e),r}])},36180,e=>{let t=(0,e.i(16597).createContext)(null);e.s(["f",0,t])},24979,e=>{var t=e.i(16597),r=e.i(3066),i=e.i(54057);e.s(["f",0,function(e={}){let s=(0,r.f)(),o=(0,i.f)(e),[n,a]=(0,t.useState)(null),l=(0,t.useRef)(null),[f,u]=(0,t.useTransition)(),h=(0,t.useRef)(!1),c=(0,t.useRef)([]);(0,t.useEffect)(()=>{if(!s||!n)return;let e=s.addTransition(n,o);return l.current=e,()=>{e.destroy(),l.current=null}},[s,n,o]),(0,t.useLayoutEffect)(()=>{if(f){h.current=!0;return}if(h.current){h.current=!1;let e=c.current;for(let t of(c.current=[],e))t()}},[f]);let d=(0,t.useCallback)(e=>new Promise(t=>{c.current.push(t),h.current=!1,u(e),requestAnimationFrame(()=>{h.current||t()})}),[]);return{ref:a,run:(0,t.useCallback)(async(e,t)=>{let r=l.current;r?await r.run(()=>d(e),t):await d(e)},[d])}}])},3066,99984,76137,e=>{var t=e.i(16597);let r=(0,t.createContext)(null),i=(0,t.createContext)(!1);e.s(["i",0,r,"V",0,i],99984),e.i(90422);var s=e.i(61388);let o=["pixelRatio","zIndex","postEffect","autoplay"],n=null,a={},l=0,f=!1,u=!1,h=[],c=new Set;function d(){for(let e of c)e()}function p(){n&&(n.stop(),n.destroy(),n=null)}function m(){var e;if(u=!1,0===l||f)return;let t=h[h.length-1]?.config??{};n&&(e=a,o.every(r=>t[r]===e[r]))||(p(),a=t,f=null===(n=s.f.init({...t})),d())}function g(){l++,u||(u=!0,queueMicrotask(m))}function v(){--l>0||requestAnimationFrame(()=>{l>0||(p(),d())})}function x(e){return c.add(e),()=>c.delete(e)}function w(){return n}let y=new Set;e.s(["Y",0,g,"S",0,w,"z",0,v,"i",0,x,"R",0,function(e,t){y.has(e)||(y.add(e),console.warn(t))}],76137);let b=()=>null,T=()=>()=>{};e.s(["f",0,function({acquire:e=!0}={}){let s=(0,t.useContext)(i),o=(0,t.useContext)(r),n=(0,t.useSyncExternalStore)(s?T:x,w,b);return(0,t.useEffect)(()=>{if(!s&&e)return g(),v},[s,e]),s?o:n}],3066)},90422,28113,63363,18289,7150,61388,66601,35668,e=>{let t,r,i=`#version 300 es
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
vec4 readFrom(vec2 p) {
  if (!inRange(p)) return vec4(0.0);
  return reverse > 0.5 ? texture(src, srcRectUv.xy + p * srcRectUv.zw) : texture(from, p);
}
vec4 readTo(vec2 p) {
  if (!inRange(p)) return vec4(0.0);
  return reverse > 0.5 ? texture(from, p) : texture(src, srcRectUv.xy + p * srcRectUv.zw);
}
`,s=`
void main() {
  outColor = transition(uvContent, reverse > 0.5 ? 1.0 - t : t);
}
`,o=i.split("\n").length,n=new Map,a=new WeakMap;class l{ease;overflow;params;#e=null;constructor(e={}){this.params=e}uniforms(e){return{}}start(e){this.#e=e}end(){this.#e=null}outputRect(e){let t=this.#e?.overflow??this.overflow;if(void 0===t||function(e,t){let[r,i,s,o]=e,[n,a,l,f]=t;return r<=n&&i<=a&&r+s>=n+l&&i+o>=a+f}(e.contentRect,e.canvasRect))return;if(!0===t)return e.canvasRect;let r=t*e.pixelRatio,[i,s,o,n]=e.contentRect;return[i-r,s-r,o+2*r,n+2*r]}render(e){var t,r;let l;if(e.holding)return void e.blit(e.src);let f=function(e){let t=n.get(e);void 0===t&&(t=`${i}
${e}
${s}`,n.set(e,t));return t}(this.frag),u=(t=e.gl,(l=a.get(t))||(l=new Set,a.set(t,l)),l);if(u.has(f)){e.cut(),e.blit(e.src);return}try{e.draw({frag:f,uniforms:{...this.uniforms(e),from:e.from,src:e.src,t:e.progress.t,reverse:+!!e.reverse,resolution:[e.dims.elementPixel[0],e.dims.elementPixel[1]],time:e.time},target:e.target})}catch(i){let t;u.add(f),r=this.name,(t=function(e){let t=e instanceof Error?e.message:String(e);if(!/compile failed|link failed/i.test(t))return null;let r=[];for(let e of t.matchAll(/ERROR:\s*\d+:(\d+):\s*(.*)/g)){let t=Number(e[1])-o;r.push(t>=1?`line ${t}: ${e[2]}`:e[2])}return r.length>0?r:[t.split("\n")[0]]}(i))?(console.error(`[VFX-JS] transition "${r}" failed to compile; cutting to the new content.
  ${t.join("\n  ")}`),console.debug(i)):console.error(`[VFX-JS] transition "${r}" failed; cutting to the new content.`,i),e.cut(),e.blit(e.src)}}}e.s(["f",0,l],28113);class f extends l{name="crossfade";frag=`
vec4 transition(vec2 uv, float t) {
  return mix(readFrom(uv), readTo(uv), t);
}
`}function u(e){return"CANVAS"===e.tagName&&(e.hasAttribute("layoutsubtree")||"drawable"===e.getAttribute("content"))}function h(e,t){e.setAttribute("layoutsubtree",""),e.setAttribute("content","drawable"),t?.setAttribute("drawable","")}function c(e){return e.currentSrc||e.src}function d(e,t){let r=e.getBoundingClientRect(),i=getComputedStyle(e);t.className=e.className,t.style.cssText=e.style.cssText,t.style.width=`${r.width}px`,t.style.height=`${r.height}px`,t.style.display="inline"===i.display?"inline-block":i.display,t.style.boxSizing="border-box"}async function p(e){let t=await fetch(e),r=await t.blob();return URL.createObjectURL(r)}async function m(e){let t=Array.from(e.querySelectorAll("img")).filter(e=>e.complete&&e.naturalWidth>0&&function(e){let t=c(e);if(!t||t.startsWith("data:"))return!1;try{return new URL(t,location.href).origin!==location.origin}catch{return!1}}(e));if(0===t.length)return()=>{};let r=new Map,i=[];return await Promise.all(t.map(async e=>{try{let t=c(e),s=await p(t);r.set(e,t),i.push(s),await new Promise(t=>{e.addEventListener("load",()=>t(),{once:!0}),e.src=s})}catch{}})),()=>{for(let[e,t]of r)e.src=t;for(let e of i)URL.revokeObjectURL(e)}}e.s(["f",0,f],63363);let g=["margin-top","margin-right","margin-bottom","margin-left"],v=new Set(["IMG","VIDEO","CANVAS","IFRAME","EMBED","OBJECT","INPUT","TEXTAREA","SELECT"]),x=["position","top","right","bottom","left","float","flex","flex-grow","flex-shrink","flex-basis","align-self","justify-self","place-self","order","grid-column","grid-column-start","grid-column-end","grid-row","grid-row-start","grid-row-end","grid-area"],w=new WeakMap,y=new WeakMap,b=new WeakMap,T=new WeakMap,E=new WeakMap,R=new WeakMap,S=new WeakMap,C=new WeakMap,P=new WeakMap,A=new WeakSet,F=new WeakMap,z=new WeakMap,M=new WeakSet,I=new WeakSet;function L(e){if(e)for(let t of[...e])t()}function U(e,t,r){if("function"==typeof e.moveBefore)try{e.moveBefore(t,r);return}catch{}e.insertBefore(t,r)}function _(e,t=300){let r=z.get(e);if(!r)return;let i=new Promise(e=>{let i=t=>{clearTimeout(o),r.delete(s),e(t)},s=()=>i(!0),o=setTimeout(()=>i(!1),t);r.add(s)});return e.requestPaint(),i}function k(e){if(M.has(e))return()=>{};M.add(e);let{width:t,height:r,overflow:i}=e.style,s=e.getBoundingClientRect();return e.style.setProperty("width",`${s.width}px`),e.style.setProperty("height",`${s.height}px`),e.style.setProperty("overflow","hidden"),()=>{if(!M.has(e))return;M.delete(e),e.style.width=t,e.style.height=r,e.style.overflow=i;let s=e.firstElementChild;if(s&&!I.has(e)){let t=Math.round(s.getBoundingClientRect().height);e.style.setProperty("height",`${t}px`)}}}function B(e){F.get(e)?.(),F.delete(e)}function V(e,t=!1){requestAnimationFrame(()=>{t||e.getContext("2d")?.clearRect(0,0,e.width,e.height),B(e)})}async function O(e,t){h(e,e.firstElementChild);let r=e.getContext("2d");if(!r)throw Error("Failed to get 2d context from layoutsubtree canvas");let{onCapture:i,maxSize:s}=t,o=new Set;z.set(e,o);let n=null,a=null,l=new Promise(e=>{a=e}),f=null,u=t=>{if(t){if(t===f)return;f=t}let l=e.firstElementChild;if(!l||0===e.width||0===e.height||0===l.getClientRects().length)return;l.hasAttribute("drawable")||l.setAttribute("drawable",""),r.clearRect(0,0,e.width,e.height),r.drawElementImage(l,0,0),function(e,t){let r=t.querySelectorAll("canvas");if(0===r.length)return;let i=t.getBoundingClientRect();if(i.width<=0||i.height<=0)return;let s=e.canvas.width/i.width,o=e.canvas.height/i.height;for(let t of r){if(0===t.width||0===t.height||!("function"==typeof t.checkVisibility?t.checkVisibility({visibilityProperty:!0,opacityProperty:!0}):"hidden"!==getComputedStyle(t).visibility))continue;let r=function(e,t,r,i){if(t.width<=0||t.height<=0)return null;let s=t.left-e.left,o=t.top-e.top;return s+t.width<=0||o+t.height<=0||s>=e.width||o>=e.height?null:[s*r,o*i,t.width*r,t.height*i]}(i,function(e){let t=e.getBoundingClientRect(),r=getComputedStyle(e),i=Number.parseFloat(r.paddingLeft)||0,s=Number.parseFloat(r.paddingRight)||0,o=Number.parseFloat(r.paddingTop)||0,n=Number.parseFloat(r.paddingBottom)||0,a=e.clientWidth>0?t.width/e.offsetWidth:1,l=e.clientHeight>0?t.height/e.offsetHeight:1;return{left:t.left+(e.clientLeft+i)*a,top:t.top+(e.clientTop+o)*l,width:Math.max(0,e.clientWidth-i-s)*a,height:Math.max(0,e.clientHeight-o-n)*l}}(t),s,o);if(r)try{e.drawImage(t,...r)}catch{}}}(r,l);let u=e.width,h=e.height;if(s&&(u>s||h>s)){let e=Math.min(s/u,s/h);u=Math.floor(u*e),h=Math.floor(h*e)}n&&n.width===u&&n.height===h||(n=new OffscreenCanvas(u,h));let c=n.getContext("2d");if(c){if(c.clearRect(0,0,u,h),c.drawImage(e,0,0,u,h),a){a(n),a=null,L(o);return}r.clearRect(0,0,e.width,e.height),i(n),L(o)}};e.onpaint=u,e.addEventListener("paint",u),y.set(e,u);let c=new ResizeObserver(t=>{for(let r of t){let t=r.devicePixelContentBoxSize?.[0];if(t)e.width=t.inlineSize,e.height=t.blockSize;else{let t=r.borderBoxSize?.[0];if(t){let r=window.devicePixelRatio;e.width=Math.round(t.inlineSize*r),e.height=Math.round(t.blockSize*r)}}}e.requestPaint()});c.observe(e,{box:"device-pixel-content-box"}),w.set(e,c);let d=e.firstElementChild;if(d){let t=new ResizeObserver(t=>{if(M.has(e)||I.has(e))return;let r=t[0].borderBoxSize?.[0];if(!r)return;let i=`${Math.round(r.blockSize)}px`;i!==e.style.height&&e.style.setProperty("height",i)});t.observe(d),b.set(e,t)}return l}function D(e){e.onpaint=null,L(z.get(e)),z.delete(e);let t=y.get(e);t&&(e.removeEventListener("paint",t),y.delete(e));let r=w.get(e);r&&(r.disconnect(),w.delete(e));let i=b.get(e);i&&(i.disconnect(),b.delete(e))}async function N(e,t){let r=e.getBoundingClientRect(),i=function(e){let t={width:null,height:null};if("function"!=typeof e.computedStyleMap||v.has(e.tagName))return t;let r=e.computedStyleMap(),i=e=>r.get(e)?.toString()??"auto",s=i("position");if("fixed"!==s&&"absolute"!==s)return t;let o=(t,r,s)=>{let o=i(r),n=i(s);if("auto"!==i(t)||"auto"===o||"auto"===n)return null;let a=[`margin-${r}`,`margin-${s}`].map(r=>{let s=i(r);return"height"===t&&s.includes("%")?getComputedStyle(e).getPropertyValue(r):s}).filter(e=>"auto"!==e);return`calc(${["100%",o,n,...a].join(" - ")})`};return{width:o("width","left","right"),height:o("height","top","bottom")}}(e),s=document.createElement("canvas");e.hasAttribute("drawable")||A.add(e),h(s,e),s.className=e.className;let o=e.getAttribute("style");o&&s.setAttribute("style",o),s.style.setProperty("padding","0"),s.style.setProperty("border","none"),s.style.setProperty("box-sizing","content-box"),s.style.setProperty("background","transparent");let n=getComputedStyle(e),a="inline"===n.display?"block":n.display;for(let e of(s.style.setProperty("display",a),g))s.style.setProperty(e,n.getPropertyValue(e));for(let e of x)s.style.setProperty(e,n.getPropertyValue(e));if(i.width)s.style.setProperty("width",i.width);else e.style.width.endsWith("px")||v.has(e.tagName)&&"function"==typeof e.computedStyleMap&&e.computedStyleMap().get("width")?.toString()==="auto"?s.style.setProperty("width",`${r.width}px`):s.style.setProperty("width","100%");i.height?(s.style.setProperty("height",i.height),I.add(s)):s.style.height||s.style.setProperty("height",`${r.height}px`);let l=window.devicePixelRatio;s.width=Math.round(r.width*l),s.height=Math.round(r.height*l),t.stillCover&&F.set(s,function(e,t){let r=e.getBoundingClientRect(),i=e.cloneNode(!0),s=[e,...e.querySelectorAll("*")],o=[i,...i.querySelectorAll("*")],n=[],a=[];for(let e=0;e<s.length&&e<o.length;e++){let t=s[e],r=o[e];(t.scrollTop||t.scrollLeft)&&n.push([r,t.scrollTop,t.scrollLeft]),t instanceof HTMLScriptElement?a.push([r,document.createComment("script")]):t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?a.push([r,function(e){let t=document.createElement("canvas"),r=e instanceof HTMLVideoElement?e.videoWidth:e.width,i=e instanceof HTMLVideoElement?e.videoHeight:e.height;t.width=Math.max(1,r),t.height=Math.max(1,i),d(e,t);try{t.getContext("2d")?.drawImage(e,0,0,t.width,t.height)}catch{}return t}(t)]):t instanceof HTMLIFrameElement?a.push([r,function(e){let t=document.createElement("div");return d(e,t),t}(t)]):t instanceof HTMLInputElement&&r instanceof HTMLInputElement?(r.value=t.value,r.checked=t.checked):t instanceof HTMLTextAreaElement&&r instanceof HTMLTextAreaElement?r.value=t.value:t instanceof HTMLSelectElement&&r instanceof HTMLSelectElement?r.selectedIndex=t.selectedIndex:t instanceof HTMLMediaElement&&r.removeAttribute("autoplay")}for(let[e,t]of a)e.replaceWith(t);i.setAttribute("aria-hidden","true");let l=i.style;l.setProperty("position","fixed"),l.setProperty("left",`${r.left}px`),l.setProperty("top",`${r.top}px`),l.setProperty("width",`${r.width}px`),l.setProperty("height",`${r.height}px`),l.setProperty("box-sizing","border-box"),l.setProperty("margin","0"),l.setProperty("pointer-events","none"),l.setProperty("z-index",t.toString()),e.parentNode?.insertBefore(i,e);let f=i.getBoundingClientRect();for(let[e,t,i]of((f.left!==r.left||f.top!==r.top)&&(l.setProperty("left",`${2*r.left-f.left}px`),l.setProperty("top",`${2*r.top-f.top}px`)),n))e.scrollTop=t,e.scrollLeft=i;return function(e,t){let r=e[0],i=t[0];if(!r||!i||"function"!=typeof r.getAnimations)return;let s=(e,t)=>{if(!("animationName"in e))return null;let r=e.effect,i=r?.target,s=i?t.get(i):void 0;return void 0===s?null:`${s}|${r?.pseudoElement??""}|${e.animationName}`},o=new Map(t.map((e,t)=>[e,t])),n=new Map;for(let e of i.getAnimations({subtree:!0})){let t=s(e,o);t&&n.set(t,e)}let a=new Map(e.map((e,t)=>[e,t]));for(let e of r.getAnimations({subtree:!0})){let t=s(e,a),r=t&&n.get(t);r&&(r.currentTime=e.currentTime,r.pause())}}(s,o),()=>{i.remove()}}(e,t.stillCover.zIndex)),T.set(e,e.style.margin),E.set(e,e.style.width),R.set(e,e.style.boxSizing),e.parentNode?.insertBefore(s,e),getComputedStyle(s).display,U(s,e,null),e.style.setProperty("margin","0"),e.style.setProperty("width","100%"),e.style.setProperty("box-sizing","border-box"),(i.width||i.height)&&(S.set(e,e.style.position),e.style.setProperty("position","static")),i.height&&(C.set(e,e.style.height),e.style.setProperty("height","100%"));let f=await m(e);P.set(s,f);let u=await O(s,t);return{canvas:s,initialCapture:u}}function X(e,t){D(e),B(e);let r=P.get(e);r&&(r(),P.delete(e));let i=e.parentNode;i&&U(i,t,e),e.remove(),A.has(t)&&(t.removeAttribute("drawable"),A.delete(t));let s=T.get(t);void 0!==s&&(t.style.margin=s,T.delete(t));let o=E.get(t);void 0!==o&&(t.style.width=o,E.delete(t));let n=R.get(t);void 0!==n&&(t.style.boxSizing=n,R.delete(t));let a=S.get(t);void 0!==a&&(t.style.position=a,S.delete(t));let l=C.get(t);void 0!==l&&(t.style.height=l,C.delete(t))}function H(){if(void 0!==t)return t;try{let e=document.createElement("canvas"),r=e.getContext("2d");t=null!==r&&"function"==typeof r.drawElementImage&&"function"==typeof e.requestPaint}catch{t=!1}return t}e.s(["i",0,k,"n",0,V,"a",0,_,"S",0,O,"F",0,D,"Y",0,X,"c",0,N],18289),e.s(["f",0,H],7150);let $={t:0,x:0};class q{enabled=!1;#t=null;#r=[0,0];#i=[];#s=!1;#o=null;#n=null;#a=$;#l=null;#f=null;#u(){let e=this.#f;this.#f=null,e?.();let t=this.#l;this.#l=null,t?.()}snapshot(){return this.#u(),this.#o=null,this.enabled=!0,new Promise(e=>this.#i.push(e))}start(e){return this.#u(),this.#o=e,this.#f=e.onEnd??null,this.#n=null,this.#a=$,this.#s=!1,this.enabled=!1,new Promise(e=>{this.#l=e})}cancel(){this.#u(),this.#o=null,this.#s=!1,this.enabled=!1,this.#h()}#h(){let e=this.#i;for(let t of(this.#i=[],e))t()}get frame(){let e=this.#t;return e&&(this.#s||this.#o)?{from:e,progress:this.#a,holding:null===this.#o}:null}cut(){this.#o&&(this.#o=null,this.#u())}update(e){let t=this.#o;if(!t)return;null===this.#n&&(this.#n=e.time);let r=(e.time-this.#n)/t.duration;if(r>=1){this.#o=null,this.#u();return}let i=Math.max(r,0);this.#a={t:function(e,t){return"function"==typeof e?e(t):"linear"===e?t:t*t*(3-2*t)}(t.ease,i),x:i}}#c(e){let[t,r]=e.dims.elementPixel;return this.#t&&this.#r[0]===t&&this.#r[1]===r||(this.#t?.dispose(),this.#t=e.createRenderTarget({size:[t,r]}),this.#r=[t,r]),this.#t}render(e){(this.#i.length>0&&(e.blit(e.src,this.#c(e)),this.#s=!0,this.#h()),this.#t&&this.#s)?e.blit(this.#t):(this.enabled=!1,e.blit(e.src))}dispose(){this.#t=null,this.#r=[0,0],this.#u(),this.#h()}}class W{effect;#d;#e=null;constructor(e,t){this.effect=e,this.#d=t}get enabled(){return null!==this.#e&&"function"==typeof this.effect.render&&!1!==this.effect.enabled}start(e){this.#e=e,this.effect.start?.(e)}end(){null!==this.#e&&(this.#e=null,this.effect.end?.())}#p(e){let t=this.#d.frame,r=this.#e;return t&&r?{...e,from:t.from,progress:t.progress,holding:t.holding,reverse:r.reverse,run:r,cut:()=>this.#d.cut()}:null}init(e){return this.effect.init?.(e)}update(e){let t=this.#d.frame;if(!t||t.holding)return;let r=this.#p(e);r&&this.effect.update?.(r)}render(e){let t=this.#p(e);t&&this.effect.render?this.effect.render(t):e.blit(e.src)}outputRect(e){return this.#e?this.effect.outputRect?.(e):void 0}dispose(){this.effect.dispose?.()}}let G=function(e=function(){let e=globalThis.navigation,t=e?.currentEntry;if(t&&!(t.index<0)&&t.key)return{index:t.index,key:t.key}}){let t,r=new Map;return{pick(i){let s=e();if(!s)return i;let o=t??s;t=s;let n=r.get(o.key);if(s.index<o.index&&n)return{...n,reverse:!0};let a=r.get(s.key);return s.index>o.index&&a?a:(r.set(s.key,i),i)}}}();function j(e,t){let r=void 0!==t.transition?t.params:void 0===e.params&&void 0===t.params?void 0:{...e.params,...t.params};return{transition:t.transition??e.transition,params:r,reverse:t.reverse??e.reverse,duration:t.duration??e.duration,overflow:t.overflow??e.overflow,ease:t.ease??e.ease}}function J(e,t={}){let r=j(e,t);return{transition:r.transition??f,params:r.params,reverse:r.reverse??!1,duration:r.duration??.6,overflow:r.overflow,ease:r.ease}}let Y=new WeakMap;function K(e,t){return new Promise((r,i)=>{let s=setTimeout(()=>r(!1),t);e.then(()=>{clearTimeout(s),r(!0)},e=>{clearTimeout(s),i(e)})})}class Z{#m;#g;#v;#x;#w;#y;#b;#T;#E;#R=[];#S=[];#C=!1;#P=!1;#A=!1;#F=0;#z=null;#M=!1;#I=!1;#L=null;#U=[];#_=null;#k=null;#B=null;constructor(e,t,i={},s,o=new q,n=G,a=function(){var e,t;let i,s,o;return r??=(e=globalThis.navigation,t=window,s=0,e?.addEventListener("navigate",e=>{if("replace"===e.navigationType)return;let t=e.hasUAVisualTransition&&e.destination?.key;i=t?{id:++s,key:t}:void 0}),!e&&t&&t.addEventListener("popstate",e=>{i=e.hasUAVisualTransition?{id:++s,href:t.location.href}:void 0},!0),o=()=>{i=void 0},t?.addEventListener("pointerdown",o,!0),t?.addEventListener("keydown",o,!0),{current(){if(i)return(i.key?e?.currentEntry?.key===i.key:t?.location.href===i.href)?i.id:void 0}})}()){this.#E=s,this.#m=e,this.#g=t,this.#v=i,this.#x=o,this.#w=n,this.#y=a,this.#T=i.keepWrapped??!1}get running(){return null!==this.#z}show(e,t={}){let r=this.#V(e),{remove:i=!1,...s}=t;if(!this.running&&this.#O(r))return Promise.resolve();let o=this.#v.slideSpec?.(r),n=o?j(o,s):s;return this.#D(()=>{for(let e of(r.parentElement!==this.#g&&this.#g.append(r),Array.from(this.#g.children)))e!==r&&(i?e.remove():e.hidden=!0);r.hidden=!1},n)}#V(e){let t=this.#g,r="number"==typeof e?t.children[e]:"string"==typeof e?t.querySelector(e):e;if(!r)throw TypeError(`[VFX-JS] show(): no slide for ${e}.`);if(r.parentElement!==t&&(r.isConnected||t.contains(r)))throw TypeError("[VFX-JS] show(): the slide must be a direct child of the container.");return r}#O(e){return e.parentElement===this.#g&&!e.hidden&&Array.from(this.#g.children).every(t=>t===e||t.hidden)}run(e,t={}){let r=this.#M?void 0:this.#y.current();return void 0!==r&&r!==this.#b?(this.#b=r,this.#D(async()=>{await e();let r="function"==typeof t?t():t;this.#v.autoReverse&&this.#w.pick(r)},{duration:0})):this.#v.autoReverse?this.#D(e,()=>this.#w.pick("function"==typeof t?t():t)):this.#D(e,t)}async #D(e,t){if(this.#M)return void await e();let r=++this.#F;this.#z=r;try{await this.#e(r,e,t)}finally{this.#z===r&&(this.#z=null),this.#F===r&&(this.#N(),this.#X(),this.#H())}}async #e(e,t,r){let i,s=()=>e===this.#F,o=!1,n=async()=>{o||(o=!0,await t())};if(this.#m.reducedMotion){await n(),"function"==typeof r&&r();return}let a=async()=>{this.#$(),this.#x.cancel(),await n(),s()&&(this.#I&&this.#T&&await this.#m.update(this.#g),this.#q(e))},l=null;if("function"!=typeof r){if(l=this.#W(J(this.#v,r)),!s())return n();if(null===l)return a()}this.#G();try{await this.#j(l?.slots??null,s,!0)}catch(e){return console.error("[VFX-JS] transition failed to wrap the element; cutting to the new content.",e),n()}if(!s())return n();this.#S.push(this.#m.lockSize(this.#g)),this.#S.push(this.#m.forceRender(this.#g));let f=await K(this.#x.snapshot(),1e3);if(!s())return n();if(!f){this.#J(),await n(),s()&&this.#q(e);return}l&&this.#Y(e,l);try{await n(),"function"==typeof r&&s()&&(i=r())}catch(t){throw s()&&(this.#$(),this.#x.cancel(),this.#q(e)),t}if(!s())return;if(null===l){if(l=this.#W(J(this.#v,i)),!s())return;if(null===l)return a();try{await this.#j(l.slots,s,!1)}catch(e){return console.error("[VFX-JS] transition failed to swap the effects; cutting to the new content.",e),a()}if(!s())return;this.#Y(e,l)}this.#G();try{await this.#K()}catch(e){console.error("[VFX-JS] transition waitFor failed:",e)}if(!s()||(await this.#m.updateInTime(this.#g)||this.#P||(this.#P=!0,console.warn("[VFX-JS] transition: the new content was not captured in time; it may pop in during the run.")),!s())||(await new Promise(e=>requestAnimationFrame(()=>e())),!s()))return;let u=this.#x.start({duration:l.run.duration,ease:l.ease,onEnd:()=>this.#$(e)}),h=await K(u,1e3*l.run.duration+1e3);s()&&(h||this.#J(),this.#q(e))}#W(e){let t,r;if(e.duration<=0)return null;let i=e.transition;if("function"!=typeof i&&!this.#Z(i))return null;try{({transition:t,slots:r}=this.#Q(i,e.params))}catch(e){return console.error(`[VFX-JS] transition "${i.name}" constructor failed; cutting to the new content.`,e),null}let s={reverse:e.reverse,duration:e.duration},o=e.overflow??t.overflow;return void 0!==o&&(s.overflow=o),{run:s,ease:e.ease??t.ease??"smoothstep",slots:r}}#Z(e){let t=Y.get(e);return t&&t!==this?(this.#A||(this.#A=!0,console.warn(`[VFX-JS] transition "${e.name??"unnamed"}" instance is running in another container; cutting to the new content. Pass the class to share it.`)),!1):(this.#k!==e&&this.#H(),Y.set(e,this),this.#k=e,!0)}#H(){let e=this.#k;this.#k=null,e&&Y.get(e)===this&&Y.delete(e)}#Y(e,{run:t,slots:r}){for(let i of(this.#$(),this.#B={id:e,slots:r},r))i.start(t)}#J(){this.#C||(this.#C=!0,console.warn("[VFX-JS] transition target did not render in time; cutting to the new content.")),this.#$(),this.#x.cancel()}cancel(){let e=++this.#F;this.#z=null,this.#$(),this.#x.cancel(),this.#N(),this.#X(),this.#H(),this.#q(e)}destroy(){this.#M||(this.#M=!0,this.cancel(),this.#_=null,this.#E?.())}#G(){this.#R.push(this.#m.freezeInside(this.#g))}#X(){let e=this.#S;for(let t of(this.#S=[],e))t()}#N(){let e=this.#R;for(let t of(this.#R=[],e))t()}#Q(e,t){var r;let i,s,o,n=this.#_;if(n?.key.source===e&&("function"!=typeof e||(r=n.key.params,i=r??{},s=t??{},(o=Object.keys(i)).length===Object.keys(s).length&&o.every(e=>{var t,r;return e in s&&(t=i[e],r=s[e],Array.isArray(t)&&Array.isArray(r)?t.length===r.length&&t.every((e,t)=>e===r[t]):t===r)}))))return n;let a="function"==typeof e?new e(t):e,l=[new W(a,this.#x)];return this.#_={key:{source:e,params:t},transition:a,slots:l},{transition:a,slots:l}}#$(e){let t=this.#B;if(t&&(void 0===e||t.id===e))for(let e of(this.#B=null,t.slots))e.end()}async #j(e,t,r){var i;if(this.#L&&await this.#L,!t())return;let s=null!==e?[this.#x,...e]:this.#I?this.#U:[this.#x];if(!this.#I){let e=this.#m.addHTMLWithStill(this.#g,{effect:s}).then(()=>{this.#I=!0,this.#U=s}).finally(()=>{this.#L=null});this.#L=e,await e;return}if(i=this.#U,!(s.length===i.length&&s.every((e,t)=>e===i[t]))){this.#U=s;let e=this.#m.updateEffects(this.#g,s).finally(()=>{this.#L=null});this.#L=e,await e}r&&await this.#m.update(this.#g)}#q(e){if(this.#T&&!this.#M)return;let t=()=>{e===this.#F&&this.#I&&(this.#I=!1,this.#U=[],this.#m.remove(this.#g))};this.#L?this.#L.then(t,()=>{}):t()}#K(){let e=this.#v.waitFor??"media";return"none"===e?Promise.resolve():"media"===e?function(e,t,r=300){let i=[];for(let t of e.querySelectorAll("img, video")){let e="IMG"===t.tagName;(e?t.complete:t.readyState>=2)||function(e){if("IMG"===e.tagName){let t;return"lazy"===e.loading&&(!((t=e.getBoundingClientRect()).right>0)||!(t.bottom>0)||!(t.left<window.innerWidth)||!(t.top<window.innerHeight))}return"none"===e.preload}(t)||i.push(new Promise(r=>{let i=()=>r();t.addEventListener(e?"load":"loadeddata",i,{once:!0}),t.addEventListener("error",i,{once:!0})}))}return(t&&i.push(t),0===i.length)?Promise.resolve():new Promise(e=>{let t=setTimeout(e,r),s=()=>{clearTimeout(t),e()};Promise.all(i).then(s,s)})}(this.#g,document.fonts?.ready):e(this.#g)}}class Q{gl;texture;wrapS="clamp";wrapT="clamp";minFilter="linear";magFilter="linear";needsUpdate=!0;premultiplyAlpha=!1;source=null;#ee;#et=!1;#er;#ei;constructor(e,t,r){this.#ee=e,this.gl=e.gl;let i=r?.externalHandle;this.#ei=void 0!==i,void 0!==i?(this.texture=i,this.#et=!0,this.needsUpdate=!1):this.#es(),t&&(this.source=t),this.#er=r?.autoRegister!==!1&&!this.#ei,this.#er&&e.addResource(this)}#es(){let e=this.gl.createTexture();if(!e)throw Error("[VFX-JS] Failed to create texture");this.texture=e}restore(){this.#ei||(this.#es(),this.#et=!1,this.needsUpdate=!0)}bind(e){let t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture),this.needsUpdate&&(this.#eo(),this.needsUpdate=!1)}#eo(){let e=this.gl,t=this.source;if(e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,4),t)try{e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t)}catch(e){console.error(e)}else if(!this.#et){let t=new Uint8Array([0,0,0,0]);e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,t)}this.#en(),this.#et=!0}#en(){let e=this.gl;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,ee(e,this.wrapS)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,ee(e,this.wrapT)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,et(e,this.minFilter)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,et(e,this.magFilter))}dispose(){this.#er&&this.#ee.removeResource(this),this.#ei||this.gl.deleteTexture(this.texture)}}function ee(e,t){return"repeat"===t?e.REPEAT:"mirror"===t?e.MIRRORED_REPEAT:e.CLAMP_TO_EDGE}function et(e,t){return"nearest"===t?e.NEAREST:e.LINEAR}function er(e){return new Promise((t,r)=>{let i=new Image;i.crossOrigin="anonymous",i.onload=()=>t(i),i.onerror=r,i.src=e})}class ei{gl;width;height;float;mipmap;fbo;texture;#ee;constructor(e,t,r,i={}){this.#ee=e,this.gl=e.gl,this.width=Math.max(1,Math.floor(t)),this.height=Math.max(1,Math.floor(r)),this.float=i.float??!1,this.mipmap=i.mipmap??!1,this.texture=new Q(e,void 0,{autoRegister:!1});let s=i.wrap;void 0!==s&&("string"==typeof s?(this.texture.wrapS=s,this.texture.wrapT=s):(this.texture.wrapS=s[0],this.texture.wrapT=s[1])),void 0!==i.filter&&(this.texture.minFilter=i.filter,this.texture.magFilter=i.filter),this.#ea(),e.addResource(this)}setSize(e,t){let r=Math.max(1,Math.floor(e)),i=Math.max(1,Math.floor(t));(r!==this.width||i!==this.height)&&(this.width=r,this.height=i,this.#ea())}restore(){this.texture.restore(),this.#ea()}dispose(){this.#ee.removeResource(this),this.gl.deleteFramebuffer(this.fbo),this.texture.dispose()}generateMipmaps(){if(!this.mipmap)return;let e=this.gl;e.bindTexture(e.TEXTURE_2D,this.texture.texture),e.generateMipmap(e.TEXTURE_2D),e.bindTexture(e.TEXTURE_2D,null)}#ea(){let e=this.gl,t=this.fbo,r=e.createFramebuffer();if(!r)throw Error("[VFX-JS] Failed to create framebuffer");this.fbo=r;let i=this.texture.texture;e.bindTexture(e.TEXTURE_2D,i);let s=this.#ee.floatLinearFilter;if(this.float&&s&&!this.#ee.floatBlend)throw Error("[VFX-JS] EXT_float_blend is not supported.");let o=this.float?s?e.RGBA32F:e.RGBA16F:e.RGBA8,n=this.float?s?e.FLOAT:e.HALF_FLOAT:e.UNSIGNED_BYTE;if(this.mipmap){let t=Math.floor(Math.log2(Math.max(this.width,this.height)))+1,r=this.width,i=this.height;for(let s=0;s<t;s++)e.texImage2D(e.TEXTURE_2D,s,o,r,i,0,e.RGBA,n,null),r=Math.max(1,r>>1),i=Math.max(1,i>>1)}else e.texImage2D(e.TEXTURE_2D,0,o,this.width,this.height,0,e.RGBA,n,null);let a="nearest"===this.texture.minFilter?e.NEAREST:e.LINEAR,l="nearest"===this.texture.magFilter?e.NEAREST:e.LINEAR,f=this.mipmap?"nearest"===this.texture.minFilter?e.NEAREST_MIPMAP_NEAREST:e.LINEAR_MIPMAP_LINEAR:a,u=es(e,this.texture.wrapS),h=es(e,this.texture.wrapT);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,u),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,h),e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null),this.texture.needsUpdate=!1,this.texture.source=null,t&&e.deleteFramebuffer(t)}}function es(e,t){return"repeat"===t?e.REPEAT:"mirror"===t?e.MIRRORED_REPEAT:e.CLAMP_TO_EDGE}function eo(e,t,r,i){return{x:e.left+r,y:t-i-e.bottom,w:e.right-e.left,h:e.bottom-e.top}}class en{#el;#ef;#eu;#eh;constructor(e,t,r,i,s,o={}){this.#el=t,this.#ef=r,this.#eu=i;let n=t*i,a=r*i,l={float:s,wrap:o.wrap,filter:o.filter,mipmap:o.mipmap};this.#eh=[new ei(e,n,a,l),new ei(e,n,a,l)]}get texture(){return this.#eh[0].texture}get target(){return this.#eh[1]}resize(e,t){if(e===this.#el&&t===this.#ef)return;this.#el=e,this.#ef=t;let r=e*this.#eu,i=t*this.#eu;this.#eh[0].setSize(r,i),this.#eh[1].setSize(r,i)}swap(){this.#eh=[this.#eh[1],this.#eh[0]]}getViewport(){return{x:0,y:0,w:this.#el,h:this.#ef}}dispose(){this.#eh[0].dispose(),this.#eh[1].dispose()}}let ea=`
precision highp float;
in vec3 position;
void main() {
    gl_Position = vec4(position, 1.0);
}
`,el=`
precision highp float;
attribute vec3 position;
void main() {
    gl_Position = vec4(position, 1.0);
}
`,ef=`
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
`,eu=`precision highp float;
uniform vec2 resolution;
uniform vec2 offset;
uniform float time;
uniform bool autoCrop;
uniform sampler2D src;
out vec4 outColor;
`,eh=`vec4 readTex(sampler2D tex, vec2 uv) {
    if (autoCrop && (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.)) {
        return vec4(0);
    }
    return texture(tex, uv);
}`,ec={none:ef,uvGradient:`
    ${eu}
    ${eh}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        outColor = vec4(uv, sin(time) * .5 + .5, 1);

        vec4 img = readTex(src, uv);
        outColor *= smoothstep(0., 1., img.a);
    }
    `,rainbow:`
    ${eu}
    ${eh}

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
    ${eu}
    ${eh}

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
    ${eu}
    ${eh}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        float b = sin(time * 2.) * 32. + 48.;
        uv = floor(uv * b) / b;
        outColor = readTex(src, uv);
    }
    `,rgbGlitch:`
    ${eu}
    ${eh}

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
    ${eu}
    ${eh}

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

    ${eu}
    ${eh}

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
    ${eu}
    ${eh}

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
    ${eu}
    ${eh}

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
    ${eu}
    ${eh}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        outColor = readTex(src, uv) * (sin(time * 5.) * 0.2 + 0.8);
    }

    `,spring:`
    ${eu}
    ${eh}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        uv = (uv - .5) * (1.05 + sin(time * 5.) * 0.05) + .5;
        outColor = readTex(src, uv);
    }
    `,duotone:`
    ${eu}
    ${eh}

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

        outColor *= color.a;
    }
    `,tritone:`
    ${eu}
    ${eh}

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

        outColor *= color.a;
    }
    `,hueShift:`
    ${eu}
    ${eh}

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
    ${eu}
    uniform float enterProgress;
    uniform float leaveProgress;

    ${eh}

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
    ${eu}
    ${eh}

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
    ${eu}
    ${eh}

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
    ${eu}
    ${eh}

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
    ${eu}
    ${eh}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = readTex(src, uv);
        outColor = vec4(1.0 - color.rgb, color.a);
    }
    `,grayscale:`
    ${eu}
    ${eh}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = readTex(src, uv);
        float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
        outColor = vec4(vec3(gray), color.a);
    }
    `,vignette:`
    ${eu}
    ${eh}

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
    ${eu}
    ${eh}

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
    `},ed={...ec,slitScanTransition:ec.slitScanReveal,warpTransition:ec.warpReveal,pixelateTransition:ec.pixelateReveal,focusTransition:ec.focusReveal};class ep{x=0;y=0;constructor(e=0,t=0){this.x=e,this.y=t}set(e,t){return this.x=e,this.y=t,this}}class em{x=0;y=0;z=0;w=0;constructor(e=0,t=0,r=0,i=0){this.x=e,this.y=t,this.z=r,this.w=i}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}}function eg(e){return/#version\s+300\s+es\b/.test(e)?"300 es":/#version\s+100\b/.test(e)||/\bgl_FragColor\b|\btexture2D\b|\bvarying\b|\battribute\b/.test(e)?"100":"300 es"}class ev{gl;program;#ee;#ec;#ed;#ep;#em=new Map;constructor(e,t,r,i){this.#ee=e,this.gl=e.gl,this.#ec=t,this.#ed=r,this.#ep=i??eg(r),this.#eg(),e.addResource(this)}#eg(){let e=this.gl,t=ex(e,e.VERTEX_SHADER,ew(this.#ec,this.#ep)),r=ex(e,e.FRAGMENT_SHADER,ew(this.#ed,this.#ep)),i=e.createProgram();if(!i)throw Error("[VFX-JS] Failed to create program");if(e.attachShader(i,t),e.attachShader(i,r),e.bindAttribLocation(i,0,"position"),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){let s=e.getProgramInfoLog(i)??"";throw e.deleteShader(t),e.deleteShader(r),e.deleteProgram(i),Error(`[VFX-JS] Program link failed: ${s}`)}e.detachShader(i,t),e.detachShader(i,r),e.deleteShader(t),e.deleteShader(r),this.program=i,this.#em.clear();let s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let t=0;t<s;t++){let r=e.getActiveUniform(i,t);if(!r)continue;let s=r.name.replace(/\[0\]$/,""),o=e.getUniformLocation(i,r.name);o&&this.#em.set(s,{location:o,type:r.type,size:r.size})}}restore(){this.#eg()}use(){this.gl.useProgram(this.program)}hasUniform(e){return this.#em.has(e)}uploadUniforms(e){let t=this.gl,r=0;for(let[s,o]of this.#em){let n=e[s];if(!n)continue;let a=n.value;if(null!=a){var i;if(35678===(i=o.type)||36298===i||36306===i||35682===i){a instanceof Q&&(a.bind(r),t.uniform1i(o.location,r),r++);continue}a instanceof Q||function(e,t,r){let i=t.location,s=t.size>1;switch(t.type){case e.FLOAT:s?e.uniform1fv(i,r):e.uniform1f(i,r);return;case e.FLOAT_VEC2:s?e.uniform2fv(i,r):r instanceof ep?e.uniform2f(i,r.x,r.y):e.uniform2f(i,r[0],r[1]);return;case e.FLOAT_VEC3:s?e.uniform3fv(i,r):e.uniform3f(i,r[0],r[1],r[2]);return;case e.FLOAT_VEC4:s?e.uniform4fv(i,r):r instanceof em?e.uniform4f(i,r.x,r.y,r.z,r.w):e.uniform4f(i,r[0],r[1],r[2],r[3]);return;case e.INT:s?e.uniform1iv(i,r):e.uniform1i(i,r);return;case e.INT_VEC2:s?e.uniform2iv(i,r):e.uniform2i(i,r[0],r[1]);return;case e.INT_VEC3:s?e.uniform3iv(i,r):e.uniform3i(i,r[0],r[1],r[2]);return;case e.INT_VEC4:s?e.uniform4iv(i,r):e.uniform4i(i,r[0],r[1],r[2],r[3]);return;case e.BOOL:s?e.uniform1iv(i,r):e.uniform1i(i,+!!r);return;case e.BOOL_VEC2:s?e.uniform2iv(i,r):e.uniform2i(i,+!!r[0],+!!r[1]);return;case e.BOOL_VEC3:s?e.uniform3iv(i,r):e.uniform3i(i,+!!r[0],+!!r[1],+!!r[2]);return;case e.BOOL_VEC4:s?e.uniform4iv(i,r):e.uniform4i(i,+!!r[0],+!!r[1],+!!r[2],+!!r[3]);return;case e.FLOAT_MAT2:e.uniformMatrix2fv(i,!1,r);return;case e.FLOAT_MAT3:e.uniformMatrix3fv(i,!1,r);return;case e.FLOAT_MAT4:e.uniformMatrix4fv(i,!1,r);return;case e.UNSIGNED_INT:s?e.uniform1uiv(i,r):e.uniform1ui(i,r);return;case e.UNSIGNED_INT_VEC2:s?e.uniform2uiv(i,r):e.uniform2ui(i,r[0],r[1]);return;case e.UNSIGNED_INT_VEC3:s?e.uniform3uiv(i,r):e.uniform3ui(i,r[0],r[1],r[2]);return;case e.UNSIGNED_INT_VEC4:s?e.uniform4uiv(i,r):e.uniform4ui(i,r[0],r[1],r[2],r[3]);return;default:ey.has(t.type)||(ey.add(t.type),console.warn(`[VFX-JS] Unsupported uniform type 0x${t.type.toString(16)}; skipping upload.`));return}}(t,o,a)}}}dispose(){this.#ee.removeResource(this),this.gl.deleteProgram(this.program)}}function ex(e,t,r){let i=e.createShader(t);if(!i)throw Error("[VFX-JS] Failed to create shader");if(e.shaderSource(i,r),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(i)??"";throw e.deleteShader(i),Error(`[VFX-JS] Shader compile failed: ${t}

${r}`)}return i}function ew(e,t){return e.replace(/^\s+/,"").startsWith("#version")||"100"===t?e:`#version 300 es
${e}`}let ey=new Set;class eb{gl;program;uniforms;blend;constructor(e,t,r,i,s,o){this.gl=e.gl,this.program=new ev(e,t,r,o),this.uniforms=i,this.blend=s}dispose(){this.program.dispose()}}function eT(e,t){"none"===t?e.disable(e.BLEND):(e.enable(e.BLEND),e.blendEquation(e.FUNC_ADD),"premultiplied"===t?e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA):"additive"===t?e.blendFuncSeparate(e.ONE,e.ONE,e.ONE,e.ONE):e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA))}class eE{pass;uniforms;constructor(e){this.uniforms={src:{value:null},offset:{value:new ep},resolution:{value:new ep},viewport:{value:new em}},this.pass=new eb(e,ea,ef,this.uniforms,"premultiplied")}setUniforms(e,t,r){this.uniforms.src.value=e,this.uniforms.resolution.value.set(r.w*t,r.h*t),this.uniforms.offset.value.set(r.x*t,r.y*t)}dispose(){this.pass.dispose()}}async function eR(e,t,r,i){var s;let o,n,a,l,f=e.getBoundingClientRect(),u=window.devicePixelRatio,h=Math.ceil(f.width),c=Math.ceil(f.height),d=h*u,p=c*u,m=1,g=d,v=p;i&&(g>i||v>i)&&(m=Math.min(i/g,i/v),g=Math.floor(g*m),v=Math.floor(v*m));let x=r&&r.width===g&&r.height===v?r:new OffscreenCanvas(g,v),w=e.cloneNode(!0);await eC(e,w),function e(t,r){if("function"==typeof t.computedStyleMap)try{let e=t.computedStyleMap();for(let t of["margin-top","margin-right","margin-bottom","margin-left"]){let i=e.get(t);i instanceof CSSKeywordValue&&"auto"===i.value&&r.style.setProperty(t,"auto")}}catch{}for(let i=0;i<t.children.length;i++){let s=t.children[i],o=r.children[i];s instanceof HTMLElement&&o instanceof HTMLElement&&e(s,o)}}(e,w),w.style.setProperty("opacity",t.toString()),w.style.setProperty("margin","0px"),function(e){let t=e;for(;;){let e=t.style;if(Number.parseFloat(e.paddingTop)>0||Number.parseFloat(e.borderTopWidth)>0||e.getPropertyValue("overflow-x")&&"visible"!==e.getPropertyValue("overflow-x")||e.getPropertyValue("overflow-y")&&"visible"!==e.getPropertyValue("overflow-y")||"flex"===e.display||"grid"===e.display||"flow-root"===e.display||"inline-block"===e.display)break;let r=t.firstElementChild;if(!r)break;r.style.setProperty("margin-top","0px"),t=r}for(t=e;;){let e=t.style;if(Number.parseFloat(e.paddingBottom)>0||Number.parseFloat(e.borderBottomWidth)>0||e.getPropertyValue("overflow-x")&&"visible"!==e.getPropertyValue("overflow-x")||e.getPropertyValue("overflow-y")&&"visible"!==e.getPropertyValue("overflow-y")||"flex"===e.display||"grid"===e.display||"flow-root"===e.display||"inline-block"===e.display)break;let r=t.lastElementChild;if(!r)break;r.style.setProperty("margin-bottom","0px"),t=r}}(w),function e(t,r){let i=-t.scrollLeft,s=-t.scrollTop;for(let o=0;o<t.children.length;o++){let n=t.children[o],a=r.children[o];n&&(a instanceof HTMLElement||a instanceof SVGElement)&&((0!==i||0!==s)&&function(e,t,r){let i=e.style.getPropertyValue("translate"),[s="0px",o="0px",n]=i&&"none"!==i?function(e){let t=[],r=0,i="";for(let s of e.trim())"("===s?r++:")"===s&&r--," "===s&&0===r?(i&&t.push(i),i=""):i+=s;return i&&t.push(i),t}(i):[],a=`calc(${s} + ${t}px) calc(${o} + ${r}px)`;e.style.setProperty("translate",n?`${a} ${n}`:a)}(a,i,s),e(n,a))}}(e,w),w.style.setProperty("box-sizing","border-box"),w.style.setProperty("width",`${h}px`),w.style.setProperty("height",`${c}px`);let y=(s=w.outerHTML,(a=(n=document.implementation.createHTMLDocument("test")).createRange()).selectNodeContents(n.documentElement),a.deleteContents(),l=document.createElement("head"),n.documentElement.appendChild(l),n.documentElement.appendChild(a.createContextualFragment(s)),n.documentElement.setAttribute("xmlns",n.documentElement.namespaceURI),new XMLSerializer().serializeToString(n).replace(/<!DOCTYPE html>/,"")),b=`<svg xmlns="http://www.w3.org/2000/svg" width="${d}" height="${p}"><foreignObject width="100%" height="100%">${y}</foreignObject></svg>`,T=await new Promise(e=>{let t=new Image;t.onload=()=>e(t),t.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(b)}`}),E=x.getContext("2d");if(null===E)throw Error("[VFX-JS] Failed to get 2D context");let R=()=>{E.clearRect(0,0,g,v);let e=u*m;E.scale(e,e),E.drawImage(T,0,0,d,p),E.setTransform(1,0,0,1,0,0)};if(R(),o=navigator.userAgent,/AppleWebKit/.test(o)&&!/Chrome\/|Chromium\//.test(o)&&w.querySelector("img"))for(let e=0;e<eS;e++)await new Promise(e=>setTimeout(e,16)),R();return x}let eS=3;async function eC(e,t){let r=window.getComputedStyle(e);for(let e of Array.from(r))/(-inline-|-block-|^inline-|^block-)/.test(e)||/^-webkit-.*(start|end|before|after|logical)/.test(e)||t.style.setProperty(e,r.getPropertyValue(e),r.getPropertyPriority(e));if("INPUT"===t.tagName)t.setAttribute("value",t.value);else if("TEXTAREA"===t.tagName)t.innerHTML=t.value;else if("IMG"===t.tagName)try{t.src=await eP(c(e))}catch{}for(let r=0;r<e.children.length;r++){let i=e.children[r],s=t.children[r];await eC(i,s)}}async function eP(e){let t=await fetch(e).then(e=>e.blob());return new Promise(e=>{let r=new FileReader;r.onload=function(){e(this.result)},r.readAsDataURL(t)})}let eA=Object.freeze({__brand:"EffectQuad"});class eF{gl;vao;#ee;#ev;#ex;#ew=[];#ey=null;mode;indexType=0;hasIndices=!1;drawCount=0;drawStart=0;instanceCount;#er=!1;constructor(e,t,r){this.#ee=e,this.gl=e.gl,this.#ev=t,this.#ex=r,this.mode=function(e,t){switch(t){case"lines":return e.LINES;case"lineStrip":return e.LINE_STRIP;case"points":return e.POINTS;default:return e.TRIANGLES}}(this.gl,t.mode),this.instanceCount=t.instanceCount??0,this.#ea(),e.addResource(this),this.#er=!0}#ea(){let e=this.gl,t=e.createVertexArray();if(!t)throw Error("[VFX-JS] Failed to create VAO");this.vao=t,e.bindVertexArray(t);let r=this.#ex.program,i=null;for(let[t,s]of Object.entries(this.#ev.attributes)){let o=!ArrayBuffer.isView(s)||s instanceof DataView?{name:t,data:s.data,itemSize:s.itemSize,normalized:s.normalized??!1,perInstance:s.perInstance??!1}:{name:t,data:s,itemSize:2,normalized:!1,perInstance:!1},n=e.getAttribLocation(r,o.name);if(n<0)continue;let a=e.createBuffer();if(!a)throw Error(`[VFX-JS] Failed to create VBO for "${o.name}"`);this.#ew.push(a),e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,o.data,e.STATIC_DRAW);let l=function(e,t){if(t instanceof Float32Array)return e.FLOAT;if(t instanceof Uint8Array)return e.UNSIGNED_BYTE;if(t instanceof Uint16Array)return e.UNSIGNED_SHORT;if(t instanceof Uint32Array)return e.UNSIGNED_INT;if(t instanceof Int8Array)return e.BYTE;if(t instanceof Int16Array)return e.SHORT;if(t instanceof Int32Array)return e.INT;throw Error("[VFX-JS] Unsupported attribute typed array")}(e,o.data);e.enableVertexAttribArray(n),l===e.FLOAT||l===e.HALF_FLOAT||o.normalized?e.vertexAttribPointer(n,o.itemSize,l,o.normalized,0,0):e.vertexAttribIPointer(n,o.itemSize,l,0,0),o.perInstance&&e.vertexAttribDivisor(n,1),"position"===t&&null===i&&(i=o.data.length/o.itemSize)}let s=0,o=this.#ev.indices;if(o){let t=e.createBuffer();if(!t)throw Error("[VFX-JS] Failed to create IBO");this.#ey=t,e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),e.bufferData(e.ELEMENT_ARRAY_BUFFER,o,e.STATIC_DRAW),this.hasIndices=!0,this.indexType=o instanceof Uint32Array?e.UNSIGNED_INT:e.UNSIGNED_SHORT,s=o.length}else this.hasIndices=!1;e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null),this.#ey&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null);let n=this.hasIndices?s:i??0,a=this.#ev.drawRange;this.drawStart=a?.start??0,this.drawCount=a?.count!==void 0?a.count:Math.max(0,n-this.drawStart)}restore(){this.#ew=[],this.#ey=null,this.#ea()}draw(){let e=this.gl;e.bindVertexArray(this.vao),this.hasIndices?this.instanceCount>0?e.drawElementsInstanced(this.mode,this.drawCount,this.indexType,this.drawStart*(this.indexType===e.UNSIGNED_INT?4:2),this.instanceCount):e.drawElements(this.mode,this.drawCount,this.indexType,this.drawStart*(this.indexType===e.UNSIGNED_INT?4:2)):this.instanceCount>0?e.drawArraysInstanced(this.mode,this.drawStart,this.drawCount,this.instanceCount):e.drawArrays(this.mode,this.drawStart,this.drawCount)}dispose(){this.#er&&(this.#ee.removeResource(this),this.#er=!1);let e=this.gl;for(let t of(e.deleteVertexArray(this.vao),this.#ew))e.deleteBuffer(t);this.#ey&&e.deleteBuffer(this.#ey),this.#ew=[],this.#ey=null}}class ez{#ee;#eb;#eT=new WeakMap;#eE=new Set;constructor(e,t){this.#ee=e,this.#eb=t}get quad(){return this.#eb}resolve(e,t){let r=this.#eT.get(e);r||(r=new Map,this.#eT.set(e,r));let i=r.get(t);return i||(i=new eF(this.#ee,e,t),r.set(t,i),this.#eE.add(i)),i}release(e){let t=this.#eT.get(e);if(t){for(let e of t.values())e.dispose(),this.#eE.delete(e);this.#eT.delete(e)}}dispose(){for(let e of this.#eE)e.dispose();this.#eE.clear()}}let eM=Symbol.for("@vfx-js/effect.resolve-texture"),eI=Symbol.for("@vfx-js/effect.resolve-rt"),eL=`#version 300 es
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
`,eU=`
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
`,e_=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D src;
void main() {
    outColor = texture(src, uv);
}
`,ek=`
precision highp float;
varying vec2 uv;
uniform sampler2D src;
void main() {
    gl_FragColor = texture2D(src, uv);
}
`,eB=`#version 300 es
precision highp float;
in vec2 uvSrc;
out vec4 outColor;
uniform sampler2D src;
void main() {
    bool inside = all(greaterThanEqual(uvSrc, vec2(0.0))) && all(lessThanEqual(uvSrc, vec2(1.0)));
    outColor = inside ? texture(src, uvSrc) : vec4(0.0);
}
`,eV=`
precision highp float;
varying vec2 uvSrc;
uniform sampler2D src;
void main() {
    bool inside = all(greaterThanEqual(uvSrc, vec2(0.0))) && all(lessThanEqual(uvSrc, vec2(1.0)));
    gl_FragColor = inside ? texture2D(src, uvSrc) : vec4(0.0);
}
`;class eO{#eR;#eS;#eu;#eC;#eP;#eA=[];#eF=[];#ez=[];#eM=[];#eI="init";#eL=!1;#eU;#e_;constructor(e,t,r,i,s,o){this.#eR=e,this.#eS=e.gl,this.#eu=r,this.#eC=o,this.#eP=new ez(e,t),this.#eU={outputBufferW:1,outputBufferH:1,canvasBufferSize:[1,1],outputViewport:{x:0,y:0,w:1,h:1},elementBufferW:1,elementBufferH:1,contentRectUv:[0,0,1,1],srcRectUv:[0,0,1,1]};let n={time:0,deltaTime:0,pixelRatio:r,resolution:[1,1],mouse:[0,0],mouseViewport:[0,0],intersection:0,enterTime:0,leaveTime:0,enterProgress:0,leaveProgress:0,src:i,target:null,uniforms:{},vfxProps:s,dims:{element:[1,1],elementPixel:[1,1],canvas:[1,1],canvasPixel:[1,1],pixelRatio:r,contentRect:[0,0,1,1],srcRect:[0,0,1,1],canvasRect:[0,0,1,1]},quad:eA,gl:this.#eS,createRenderTarget:e=>this.#ek(e),releaseGeometry:e=>this.#eP.release(e),wrapTexture:(e,t)=>this.#eB(e,t),draw:e=>this.#eV(e),blit:(e,t,r)=>this.#eO(e,t,r),clear:e=>this.#eD(e),onContextRestored:e=>{let t=this.#eR.onContextRestored(e);return this.#eM.push(t),t}};this.#e_=n}get ctx(){return this.#e_}setPhase(e){this.#eI=e}setFrameDims(e){for(let t of(this.#eU=e,this.#e_.resolution=[e.canvasBufferSize[0],e.canvasBufferSize[1]],this.#ez))t.resolver.resize?.(e.outputBufferW,e.outputBufferH)}setEffectDims(e){this.#e_.dims=e}setFrameState(e){let t=this.#e_;t.time=e.time,t.deltaTime=e.deltaTime,t.mouse=e.mouse,t.mouseViewport=e.mouseViewport,t.intersection=e.intersection,t.enterTime=e.enterTime,t.leaveTime=e.leaveTime,t.enterProgress=e.enterProgress,t.leaveProgress=e.leaveProgress,t.uniforms=e.uniforms}setSrc(e){this.#e_.src=e}setOutput(e){this.#e_.target=e}passthroughCopy(e,t,r){let i=this.#eI;this.#eI="render";let s=this.#e_.target;this.#e_.target=t;try{let i=this.#eU.outputViewport;this.#eU.outputViewport={...r};let s=this.#e_.vfxProps.glslVersion;this.#eN({frag:"100"===s?ek:e_,uniforms:{src:e},target:t}),this.#eU.outputViewport=i}finally{this.#e_.target=s,this.#eI=i}}clearRt(e){let t=this.#eS,r=e[eI];t.bindFramebuffer(t.FRAMEBUFFER,r.getWriteFbo().fbo),t.viewport(0,0,e.width,e.height),t.clearColor(0,0,0,0),t.disable(t.SCISSOR_TEST),t.clear(t.COLOR_BUFFER_BIT),t.bindFramebuffer(t.FRAMEBUFFER,null)}#ek(e){let t,r,i,s,o=e?.persistent??!1,n=e?.float??!1,a=eD(e?.wrap),l=e?.filter,f=e?.mipmap??!1,u=!1!==f,h=!0===f,c=e?.size,d=c?c[0]:this.#eU.outputBufferW,p=c?c[1]:this.#eU.outputBufferH;if(o){let e=c?1:this.#eu,s=c?d:d/e,o=c?p:p/e,f=new en(this.#eR,s,o,e,n,{wrap:a,filter:l,mipmap:u});t={getReadTexture:()=>f.texture,getWriteFbo:()=>f.target,swap:()=>f.swap(),resize:c?void 0:(e,t)=>{f.resize(e/this.#eu,t/this.#eu)},dispose:()=>f.dispose()},u&&(t.regenerateMipmaps=()=>f.target.generateMipmaps(),t.mipmapAutoRegen=h),r=()=>f.target.width,i=()=>f.target.height}else{let e=new ei(this.#eR,d,p,{float:n,wrap:a,filter:l,mipmap:u});t={getReadTexture:()=>e.texture,getWriteFbo:()=>e,resize:c?void 0:(t,r)=>e.setSize(t,r),dispose:()=>e.dispose()},u&&(t.regenerateMipmaps=()=>e.generateMipmaps(),t.mipmapAutoRegen=h),r=()=>e.width,i=()=>e.height}let m=eX(t,r,i,()=>this.#eX(s));return s={handle:m,resolver:t},this.#eF.push(s),c||this.#ez.push(s),m}#eX(e){let t=this.#eF.indexOf(e);if(t<0)return;this.#eF.splice(t,1);let r=this.#ez.indexOf(e);r>=0&&this.#ez.splice(r,1),e.resolver.dispose?.()}#eB(e,t){var r;let i,s,o,n,a=eD(t?.wrap),l=t?.filter,f=null,u=(r=e,!!(i=globalThis.WebGLTexture)&&"function"==typeof i&&r instanceof i||void 0===r.width&&void 0===r.naturalWidth&&void 0===r.videoWidth);if(u){if(!t?.size)throw Error("[VFX-JS] wrapTexture(WebGLTexture) requires opts.size");let[r,i]=t.size;s=new Q(this.#eR,void 0,{autoRegister:!1,externalHandle:e}),o=()=>r,n=()=>i}else{s=new Q(this.#eR,e);let r=t?.size,i=t=>r?"w"===t?r[0]:r[1]:"u">typeof HTMLImageElement&&e instanceof HTMLImageElement?"w"===t?e.naturalWidth:e.naturalHeight:"u">typeof HTMLVideoElement&&e instanceof HTMLVideoElement?"w"===t?e.videoWidth:e.videoHeight:"w"===t?e.width:e.height;o=()=>i("w"),n=()=>i("h");let a="u">typeof HTMLVideoElement&&e instanceof HTMLVideoElement||"u">typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"u">typeof OffscreenCanvas&&e instanceof OffscreenCanvas;(t?.autoUpdate??a)&&(f=()=>{s.needsUpdate=!0})}s.wrapS=a[0],s.wrapT=a[1],void 0!==l&&(s.minFilter=l,s.magFilter=l),this.#eA.push(s),f&&this.#eH.push(f);let h=!1;return eN(()=>s,o,n,()=>{if(h)return;h=!0;let e=this.#eA.indexOf(s);if(-1!==e&&this.#eA.splice(e,1),f){let e=this.#eH.indexOf(f);-1!==e&&this.#eH.splice(e,1)}s.dispose()},u?void 0:()=>{h||(s.needsUpdate=!0)})}#eH=[];tickAutoUpdates(){for(let e of this.#eH)e()}#eV(e){if("render"!==this.#eI){"update"!==this.#eI||this.#eL||(this.#eL=!0,console.warn("[VFX-JS] ctx.draw() called in update(); ignored. Move draws to render()."));return}this.#eN(e)}#eO(e,t,r){if("render"!==this.#eI){"update"!==this.#eI||this.#eL||(this.#eL=!0,console.warn("[VFX-JS] ctx.blit() called in update(); ignored. Move draws to render()."));return}let i="100"===this.#e_.vfxProps.glslVersion?eV:eB;this.#eN({frag:i,uniforms:{src:e},target:t,blend:r?.blend,swap:r?.swap})}#eD(e){if("render"!==this.#eI){"update"!==this.#eI||this.#eL||(this.#eL=!0,console.warn("[VFX-JS] ctx.clear() called in update(); ignored. Move draws to render()."));return}let t=this.#eS,r=this.#e_.target,i=null==e?r:e,s=null===i||i===r;if(t.clearColor(0,0,0,0),s){let e=null===i?null:i[eI].getWriteFbo().fbo,r=this.#eU.outputViewport;t.bindFramebuffer(t.FRAMEBUFFER,e),t.enable(t.SCISSOR_TEST),t.scissor(r.x,r.y,r.w,r.h),t.clear(t.COLOR_BUFFER_BIT),t.disable(t.SCISSOR_TEST),t.bindFramebuffer(t.FRAMEBUFFER,null);return}let o=i[eI];t.disable(t.SCISSOR_TEST);let n=()=>{t.bindFramebuffer(t.FRAMEBUFFER,o.getWriteFbo().fbo),t.clear(t.COLOR_BUFFER_BIT)};n(),o.swap&&(o.swap(),n(),o.swap()),t.bindFramebuffer(t.FRAMEBUFFER,null)}#eN(e){let t,r,i,s,o,n,a,l=this.#eS,f=e.vert??("100"===this.#e_.vfxProps.glslVersion?eU:eL),u=this.#eC.get(f,e.frag,this.#e_.vfxProps.glslVersion),h=this.#e_.target,c=void 0===e.target||null===e.target?h:e.target,d=null===c||c===h;if(null===c)t=null,r=this.#eU.outputViewport.x,i=this.#eU.outputViewport.y,s=this.#eU.outputViewport.w,o=this.#eU.outputViewport.h;else{let e=c[eI];t=e.getWriteFbo().fbo,d?(r=this.#eU.outputViewport.x,i=this.#eU.outputViewport.y,s=this.#eU.outputViewport.w,o=this.#eU.outputViewport.h):(r=0,i=0,s=c.width,o=c.height),n=e.swap,e.mipmapAutoRegen&&(a=e.regenerateMipmaps)}l.bindFramebuffer(l.FRAMEBUFFER,t),l.viewport(r,i,s,o),l.disable(l.SCISSOR_TEST),eT(l,e.blend??(null===c?"premultiplied":"none")),u.use();let p=this.#e$(e.uniforms);u.uploadUniforms(p);let m=e.geometry??eA;m===eA?this.#eP.quad.draw():this.#eP.resolve(m,u).draw(),a?.(),n&&!1!==e.swap&&n()}#e$(e){let t={};if(t.contentRectUv={value:this.#eU.contentRectUv},t.srcRectUv={value:this.#eU.srcRectUv},!e)return t;for(let[r,i]of Object.entries(e))t[r]=function(e){if("object"==typeof e&&null!==e&&"__brand"in e)return"EffectRenderTarget"===e.__brand?{value:e[eI].getReadTexture()}:{value:e[eM]()};return{value:e}}(i);return t}dispose(){for(let e of(this.#eI="disposed",this.#eM))e();for(let e of(this.#eM=[],this.#eF))e.resolver.dispose?.();for(let e of(this.#eF=[],this.#ez=[],this.#eA))e.dispose();this.#eA=[],this.#eP.dispose(),this.#eH=[]}}function eD(e){return void 0===e?["clamp","clamp"]:"string"==typeof e?[e,e]:[e[0],e[1]]}function eN(e,t,r,i,s){let o={__brand:"EffectTexture",get width(){return t()},get height(){return r()},dispose(){i?.()},update(){s?.()}};return Object.defineProperty(o,eM,{value:e}),o}function eX(e,t,r,i){let s={__brand:"EffectRenderTarget",get width(){return t()},get height(){return r()},dispose:i??(()=>{}),generateMipmaps:()=>e.regenerateMipmaps?.()};return Object.defineProperty(s,eI,{value:e}),s}function eH(e){return eX({getReadTexture:()=>e.texture,getWriteFbo:()=>e},()=>e.width,()=>e.height)}function e$(e){return"number"==typeof e?{top:e,right:e,bottom:e,left:e}:Array.isArray(e)?{top:e[0],right:e[1],bottom:e[2],left:e[3]}:{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}let eq={top:0,right:0,bottom:0,left:0};function eW(e){return{top:e.top,right:e.right,bottom:e.bottom,left:e.left}}function eG(e){return{top:e.top,left:e.left,right:e.left+Math.ceil(e.right-e.left),bottom:e.top+Math.ceil(e.bottom-e.top)}}function ej(e,t){return{top:e.top-t.top,right:e.right+t.right,bottom:e.bottom+t.bottom,left:e.left-t.left}}function eJ(e,t,r){return Math.min(Math.max(e,t),r)}function eY(e,t,r,i){let s=Math.min(i-r,t-e);if(s<=0)return 0;let o=eJ(r,e,t);return(eJ(i,e,t)-o)/s}class eK{#eR;#eb;#eu;#eq;#eC;#eW;#eG;#ej;#eJ=[];#eY=[];#eK;#eZ=new Set;#eQ=!1;#e0;#e1=e$(0);#e2=null;constructor(e,t,r,i,s,o,n,a){this.#eR=e,this.#eb=t,this.#eu=r,this.#eq=s,this.#eC=a,this.#eW=i,this.#eK=o,this.#e0=n,this.#eG=i.map(()=>this.#e3()),0===i.length&&(this.#e2=this.#e3()),this.#ej=this.#e4()}#e4(){return this.#eW.map((e,t)=>"function"==typeof e.render&&!1!==e.enabled?t:-1).filter(e=>e>=0)}get effects(){return this.#eW}get hosts(){return this.#eG}get renderingIndices(){return this.#ej}get stages(){return this.#eY}get hitTestPadBuffer(){return this.#e1}async initAll(){for(let e=0;e<this.#eW.length;e++){let t=this.#eW[e],r=this.#eG[e];r.setPhase("init");try{t.init&&await t.init(r.ctx)}catch(t){console.error(`[VFX-JS] effect[${e}].init() failed:`,t);for(let t=e-1;t>=0;t--)this.#e5(t),this.#eG[t].dispose();throw this.#eG[e].dispose(),t}r.setPhase("update")}}run(e){if(this.#eQ||!e.isVisible)return;this.#ej=this.#e4();let t=this.#ej.length;for(let t of this.#eG)t.setFrameState({time:e.time,deltaTime:e.deltaTime,mouse:e.mouse,mouseViewport:e.mouseViewport,intersection:e.intersection,enterTime:e.enterTime,leaveTime:e.leaveTime,enterProgress:e.enterProgress,leaveProgress:e.leaveProgress,uniforms:e.resolvedUniforms});this.#e6(e);for(let t=0;t<this.#eG.length;t++)this.#eG[t].setFrameDims(this.#e8(t,e)),this.#eG[t].setEffectDims(this.#e7(t,e));for(let e=0;e<this.#eW.length;e++){let t=this.#eW[e];if(!t.update)continue;let r=this.#eG[e];r.setPhase("update");try{t.update(r.ctx)}catch(r){let t=`${e}:update`;this.#eZ.has(t)||(this.#eZ.add(t),console.warn(`[VFX-JS] effect[${e}].update() threw; skipping this frame's update:`,r))}}if(0===t)return void(this.#e2??this.#eG[0]).passthroughCopy(this.#eK,e.finalTarget,e.elementRectOnCanvasPx);for(let r=0;r<t;r++){let i,s=this.#ej[r],o=this.#eG[s],n=this.#eW[s];if(!n.render)continue;o.setPhase("render"),o.tickAutoUpdates();let a=0===r?this.#eK:this.#eJ[r-1].texHandle;o.setSrc(a),r===t-1?i=e.finalTarget:(i=this.#eJ[r].rtHandle,o.clearRt(i)),o.setOutput(i);try{n.render(o.ctx)}catch(l){let e=`${s}:render`;this.#eZ.has(e)||(this.#eZ.add(e),console.warn(`[VFX-JS] effect[${s}].render() threw; falling back to passthrough:`,l));let n=this.#eY[r].outputViewport;null===i?o.passthroughCopy(a,null,n):r===t-1?o.passthroughCopy(a,i,n):o.passthroughCopy(a,i,{x:0,y:0,w:i.width,h:i.height})}o.setPhase("update")}}dispose(){if(!this.#eQ){this.#eQ=!0;for(let e=this.#eW.length-1;e>=0;e--)this.#e5(e),this.#eG[e].dispose();for(let e of(this.#e2&&(this.#e2.dispose(),this.#e2=null),this.#eJ))e.fb.dispose();this.#eJ=[],this.#eY=[]}}async replaceEffects(e){if(this.#eQ)throw Error("[VFX-JS] replaceEffects on disposed chain");let t=this.#eW,r=this.#eG,i=new Map;for(let e=0;e<t.length;e++)i.set(t[e],r[e]);let s=Array(e.length),o=[];for(let t=0;t<e.length;t++){let r=e[t],n=i.get(r);if(n)s[t]=n,i.delete(r);else{let e=this.#e3();s[t]=e,o.push({host:e,effect:r})}}for(let e=0;e<o.length;e++){let{host:t,effect:r}=o[e];t.setPhase("init");try{r.init&&await r.init(t.ctx),t.setPhase("update")}catch(r){console.error("[VFX-JS] replaceEffects: new effect init() failed:",r);for(let t=e-1;t>=0;t--){let e=o[t];if(e.effect.dispose)try{e.effect.dispose()}catch(e){console.error("[VFX-JS] dispose during init rollback threw:",e)}e.host.dispose()}throw t.dispose(),r}}for(let[e,t]of i){if(e.dispose)try{e.dispose()}catch(e){console.error("[VFX-JS] effect.dispose() threw during replaceEffects:",e)}t.dispose()}for(let e of this.#eJ)e.fb.dispose();this.#eJ=[],this.#eY=[],0!==e.length||this.#e2?e.length>0&&this.#e2&&(this.#e2.dispose(),this.#e2=null):this.#e2=this.#e3(),this.#eW=e,this.#eG=s,this.#ej=this.#e4(),this.#eZ.clear()}#e3(){return new eO(this.#eR,this.#eb,this.#eu,this.#eK,this.#eq,this.#eC)}#e5(e){let t=this.#eW[e];if(t.dispose)try{t.dispose()}catch(t){console.error(`[VFX-JS] effect[${e}].dispose() threw:`,t)}}#e6(e){let t=this.#ej.length;if(this.#eY=Array(t),0===t)return;let r=this.#e0?e.canvasBufferSize:e.elementBufferSize,i=[0,0,r[0],r[1]],s=this.#e9(e),o=i;for(let r=0;r<t;r++){let n=this.#ej[r],a=this.#eW[n],l=r===t-1,f=this.#te(a,o,i,s,e)??o,u=[f[2],f[3]],h=function(e,t){let[r,i,s,o]=e,[n,a,l,f]=t;return l<=0||f<=0?[0,0,1,1]:[(r-n)/l,(i-a)/f,s/l,o/f]}(i,f),c=l?{x:e.elementRectOnCanvasPx.x+f[0],y:e.elementRectOnCanvasPx.y+f[1],w:u[0],h:u[1]}:{x:0,y:0,w:u[0],h:u[1]};this.#eY[r]={dstRect:f,dstBufferSize:u,contentRectUv:h,outputViewport:c},l||this.#tt(r,u),o=f}let[n,a,l,f]=this.#eY[t-1].dstRect;this.#e1=e$({top:Math.max(0,a+f-r[1]),right:Math.max(0,n+l-r[0]),bottom:Math.max(0,-a),left:Math.max(0,-n)})}#te(e,t,r,i,s){if(e.outputRect)return e.outputRect(this.#tr(s,r,t,i))}#tr(e,t,r,i){let s=e.canvasBufferSize[0]/e.canvasSize[0]||1;return{element:this.#e0?e.canvasSize:e.elementSize,elementPixel:this.#e0?e.canvasBufferSize:e.elementBufferSize,canvas:e.canvasSize,canvasPixel:e.canvasBufferSize,pixelRatio:s,contentRect:t,srcRect:r,canvasRect:i}}#e7(e,t){let r=this.#e0?t.canvasBufferSize:t.elementBufferSize,i=[0,0,r[0],r[1]],s=this.#e9(t),o=this.#ej.indexOf(e),n=o<=0?i:this.#eY[o-1].dstRect;return this.#tr(t,i,n,s)}#tt(e,t){let r=this.#eJ[e];if(r&&r.fb.width===t[0]&&r.fb.height===t[1])return;r&&r.fb.dispose();let i=new ei(this.#eR,t[0],t[1]),s=eH(i),o=eN(()=>i.texture,()=>i.width,()=>i.height);this.#eJ[e]={fb:i,rtHandle:s,texHandle:o,bufferSize:t}}#e9(e){let[t,r]=e.canvasBufferSize;if(this.#e0)return[0,0,t,r];let{x:i,y:s}=e.elementRectOnCanvasPx;return[-i,-s,t,r]}#e8(e,t){let r,i,s,o,n,a=this.#ej.indexOf(e);if(a<0)s={x:0,y:0,w:r=t.elementBufferSize[0],h:i=t.elementBufferSize[1]},o=[0,0,1,1],n=[0,0,1,1];else{let e=this.#eY[a];r=e.dstBufferSize[0],i=e.dstBufferSize[1],s=e.outputViewport,o=e.contentRectUv,n=0===a?[0,0,1,1]:this.#eY[a-1].contentRectUv}return{outputBufferW:r,outputBufferH:i,canvasBufferSize:t.canvasBufferSize,outputViewport:s,elementBufferW:t.elementBufferSize[0],elementBufferH:t.elementBufferSize[1],contentRectUv:o,srcRectUv:n}}}class eZ{#ti;#ts=new Set;constructor(e){this.#ti=e}freezeInside(e,t){let r={root:e,entries:[]};for(let i of t)!i.frozen&&eQ(e,i.element)&&(i.frozen=!0,r.entries.push({e:i,opacity:i.element.style.opacity}),this.#ti.showPlain(i));this.#ts.add(r);let i=!1;return()=>{if(!i){for(let{e}of(i=!0,this.#ts.delete(r),r.entries))e.frozen=!1;requestAnimationFrame(()=>{for(let{e,opacity:t}of r.entries)!e.frozen&&this.#ti.isRegistered(e)&&this.#ti.hidePlain(e,t)})}}}adopt(e,t){let r=this.#to(e.element);return!!r&&(e.frozen=!0,r.entries.push({e,opacity:t??e.element.style.opacity}),!0)}#to(e){for(let t of this.#ts)if(eQ(t.root,e))return t}}function eQ(e,t){return t!==e&&e.contains(t)}function e0(e){this.data=e,this.pos=0}function e1(e){this.stream=new e0(e),this.output={}}e0.prototype.readByte=function(){return this.data[this.pos++]},e0.prototype.peekByte=function(){return this.data[this.pos]},e0.prototype.readBytes=function(e){return this.data.subarray(this.pos,this.pos+=e)},e0.prototype.peekBytes=function(e){return this.data.subarray(this.pos,this.pos+e)},e0.prototype.readString=function(e){for(var t="",r=0;r<e;r++)t+=String.fromCharCode(this.readByte());return t},e0.prototype.readBitArray=function(){for(var e=[],t=this.readByte(),r=7;r>=0;r--)e.push(!!(t&1<<r));return e},e0.prototype.readUnsigned=function(e){var t=this.readBytes(2);return e?(t[1]<<8)+t[0]:(t[0]<<8)+t[1]},e1.prototype.parse=function(e){return this.parseParts(this.output,e),this.output},e1.prototype.parseParts=function(e,t){for(var r=0;r<t.length;r++){var i=t[r];this.parsePart(e,i)}},e1.prototype.parsePart=function(e,t){var r,i=t.label;if(!t.requires||t.requires(this.stream,this.output,e))if(t.loop){for(var s=[];t.loop(this.stream);){var o={};this.parseParts(o,t.parts),s.push(o)}e[i]=s}else t.parts?(r={},this.parseParts(r,t.parts),e[i]=r):t.parser?(r=t.parser(this.stream,this.output,e),t.skip||(e[i]=r)):t.bits&&(e[i]=this.parseBits(t.bits))},e1.prototype.parseBits=function(e){var t={},r=this.stream.readBitArray();for(var i in e){var s=e[i];s.length?t[i]=r.slice(s.index,s.index+s.length).reduce(function(e,t){return 2*e+t},0):t[i]=r[s.index]}return t};let e2=function(){return function(e){return e.readByte()}},e3=function(e){return function(t){return t.readBytes(e)}},e4=function(e){return function(t){return t.readString(e)}},e5=function(e){return function(t){return t.readUnsigned(e)}},e6=function(e,t){return function(r,i,s){for(var o=t(r,i,s),n=Array(o),a=0;a<o;a++)n[a]=r.readBytes(e);return n}};var e8={label:"blocks",parser:function(e){for(var t=[],r=0,i=e.readByte();0!==i;i=e.readByte())t.push(e.readBytes(i)),r+=i;var s=new Uint8Array(r);r=0;for(var o=0;o<t.length;o++)s.set(t[o],r),r+=t[o].length;return s}},e7={label:"gce",requires:function(e){var t=e.peekBytes(2);return 33===t[0]&&249===t[1]},parts:[{label:"codes",parser:e3(2),skip:!0},{label:"byteSize",parser:e2()},{label:"extras",bits:{future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}}},{label:"delay",parser:e5(!0)},{label:"transparentColorIndex",parser:e2()},{label:"terminator",parser:e2(),skip:!0}]},e9={label:"image",requires:function(e){return 44===e.peekByte()},parts:[{label:"code",parser:e2(),skip:!0},{label:"descriptor",parts:[{label:"left",parser:e5(!0)},{label:"top",parser:e5(!0)},{label:"width",parser:e5(!0)},{label:"height",parser:e5(!0)},{label:"lct",bits:{exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}}}]},{label:"lct",requires:function(e,t,r){return r.descriptor.lct.exists},parser:e6(3,function(e,t,r){return Math.pow(2,r.descriptor.lct.size+1)})},{label:"data",parts:[{label:"minCodeSize",parser:e2()},e8]}]},te={label:"text",requires:function(e){var t=e.peekBytes(2);return 33===t[0]&&1===t[1]},parts:[{label:"codes",parser:e3(2),skip:!0},{label:"blockSize",parser:e2()},{label:"preData",parser:function(e,t,r){return e.readBytes(r.text.blockSize)}},e8]},tt={label:"application",requires:function(e,t,r){var i=e.peekBytes(2);return 33===i[0]&&255===i[1]},parts:[{label:"codes",parser:e3(2),skip:!0},{label:"blockSize",parser:e2()},{label:"id",parser:function(e,t,r){return e.readString(r.blockSize)}},e8]},tr={label:"comment",requires:function(e,t,r){var i=e.peekBytes(2);return 33===i[0]&&254===i[1]},parts:[{label:"codes",parser:e3(2),skip:!0},e8]},ti=[{label:"header",parts:[{label:"signature",parser:e4(3)},{label:"version",parser:e4(3)}]},{label:"lsd",parts:[{label:"width",parser:e5(!0)},{label:"height",parser:e5(!0)},{label:"gct",bits:{exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}}},{label:"backgroundColorIndex",parser:e2()},{label:"pixelAspectRatio",parser:e2()}]},{label:"gct",requires:function(e,t){return t.lsd.gct.exists},parser:e6(3,function(e,t){return Math.pow(2,t.lsd.gct.size+1)})},{label:"frames",parts:[e7,tt,tr,e9,te],loop:function(e){var t=e.peekByte();return 33===t||44===t}}];function ts(e){var t=new e1(new Uint8Array(e));this.raw=t.parse(ti),this.raw.hasImages=!1;for(var r=0;r<this.raw.frames.length;r++)if(this.raw.frames[r].image){this.raw.hasImages=!0;break}}ts.prototype.decompressFrame=function(e,t){if(e>=this.raw.frames.length)return null;var r=this.raw.frames[e];if(r.image){var i=r.image.descriptor.width*r.image.descriptor.height,s=function(e,t,r){var i,s,o,n,a,l,f,u,h,c,d,p,m,g,v,x=Array(r),w=Array(4096),y=Array(4096),b=Array(4097);for(a=(s=1<<e)+1,i=s+2,f=-1,o=(1<<(n=e+1))-1,h=0;h<s;h++)w[h]=0,y[h]=h;for(d=u=p=m=v=g=0,c=0;c<r;){if(0===m){if(u<n){d+=t[g]<<u,u+=8,g++;continue}if(h=d&o,d>>=n,u-=n,h>i||h==a)break;if(h==s){o=(1<<(n=e+1))-1,i=s+2,f=-1;continue}if(-1==f){b[m++]=y[h],f=h,p=h;continue}for(l=h,h==i&&(b[m++]=p,h=f);h>s;)b[m++]=y[h],h=w[h];p=255&y[h],b[m++]=p,i<4096&&(w[i]=f,y[i]=p,(++i&o)==0&&i<4096&&(n++,o+=i)),f=l}m--,x[v++]=b[m],c++}for(c=v;c<r;c++)x[c]=0;return x}(r.image.data.minCodeSize,r.image.data.blocks,i);r.image.descriptor.lct.interlaced&&(s=function(e,t){for(var r=Array(e.length),i=e.length/t,s=[0,4,2,1],o=[8,8,4,2],n=0,a=0;a<4;a++)for(var l=s[a];l<i;l+=o[a])!function(i,s){var o=e.slice(s*t,(s+1)*t);r.splice.apply(r,[i*t,t].concat(o))}(l,n),n++;return r}(s,r.image.descriptor.width));var o={pixels:s,dims:{top:r.image.descriptor.top,left:r.image.descriptor.left,width:r.image.descriptor.width,height:r.image.descriptor.height}};return r.image.descriptor.lct&&r.image.descriptor.lct.exists?o.colorTable=r.image.lct:o.colorTable=this.raw.gct,r.gce&&(o.delay=10*(r.gce.delay||10),o.disposalType=r.gce.extras.disposal,r.gce.extras.transparentColorGiven&&(o.transparentIndex=r.gce.transparentColorIndex)),t&&(o.patch=function(e){for(var t=e.pixels.length,r=new Uint8ClampedArray(4*t),i=0;i<t;i++){var s=4*i,o=e.pixels[i],n=e.colorTable[o];r[s]=n[0],r[s+1]=n[1],r[s+2]=n[2],r[s+3]=255*(o!==e.transparentIndex)}return r}(o)),o}return null},ts.prototype.decompressFrames=function(e,t,r){void 0===t&&(t=0),r=void 0===r?this.raw.frames.length:Math.min(r,this.raw.frames.length);for(var i=[],s=t;s<r;s++)this.raw.frames[s].image&&i.push(this.decompressFrame(s,e));return i};class to{frames=[];index=0;canvas;ctx;pixelRatio;startTime;playTime=0;static async create(e,t){let r=await fetch(e).then(e=>e.arrayBuffer()).then(e=>new ts(e)),i=r.decompressFrames(!0,void 0,void 0),{width:s,height:o}=r.raw.lsd;return new to(i,s,o,t)}constructor(e,t,r,i){this.frames=e,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.pixelRatio=i,this.canvas.width=t,this.canvas.height=r,this.startTime=Date.now()}getCanvas(){return this.canvas}update(){let e=Date.now()-this.startTime;for(;this.playTime<e;){let e=this.frames[this.index%this.frames.length];this.playTime+=e.delay,this.index++}let t=this.frames[this.index%this.frames.length],r=new ImageData(t.patch,t.dims.width,t.dims.height);this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.putImageData(r,t.dims.left,t.dims.top)}}class tn{gl;canvas;maxTextureSize;floatLinearFilter;floatBlend;isContextLost=!1;#tn=new Set;#ta=new Set;#tl=new Set;constructor(e,t=!1){let r=e.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:t});if(!r)throw Error("[VFX-JS] WebGL2 is not available.");this.gl=r,this.canvas=e,r.getExtension("EXT_color_buffer_float"),r.getExtension("EXT_color_buffer_half_float"),this.floatBlend=!!r.getExtension("EXT_float_blend"),this.floatLinearFilter=!!r.getExtension("OES_texture_float_linear"),this.maxTextureSize=r.getParameter(r.MAX_TEXTURE_SIZE),e.addEventListener("webglcontextlost",this.#tf,!1),e.addEventListener("webglcontextrestored",this.#tu,!1)}setSize(e,t,r){let i=Math.floor(e*r),s=Math.floor(t*r);(this.canvas.width!==i||this.canvas.height!==s)&&(this.canvas.width=i,this.canvas.height=s)}addResource(e){this.#tn.add(e)}removeResource(e){this.#tn.delete(e)}onContextLost(e){return this.#ta.add(e),()=>this.#ta.delete(e)}onContextRestored(e){return this.#tl.add(e),()=>this.#tl.delete(e)}#tf=e=>{for(let t of(e.preventDefault(),this.isContextLost=!0,this.#ta))t()};#tu=()=>{this.isContextLost=!1;let e=this.gl;for(let t of(e.getExtension("EXT_color_buffer_float"),e.getExtension("EXT_color_buffer_half_float"),this.floatBlend=!!e.getExtension("EXT_float_blend"),this.#tn))t.restore();for(let e of this.#tl)e()}}class ta{gl;vao;#ee;#th;constructor(e){this.#ee=e,this.gl=e.gl,this.#ea(),e.addResource(this)}#ea(){let e=this.gl,t=e.createVertexArray(),r=e.createBuffer();if(!t||!r)throw Error("[VFX-JS] Failed to create quad VAO");this.vao=t,this.#th=r;let i=new Float32Array([-1,-1,0,1,-1,0,-1,1,0,-1,1,0,1,-1,0,1,1,0]);e.bindVertexArray(t),e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,i,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0),e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null)}restore(){this.#ea()}draw(){let e=this.gl;e.bindVertexArray(this.vao),e.drawArrays(e.TRIANGLES,0,6)}dispose(){this.#ee.removeResource(this),this.gl.deleteVertexArray(this.vao),this.gl.deleteBuffer(this.#th)}}function tl(e){return{phase:"hidden",direction:1,enterProgress:0,leaveProgress:0,isIn:!1,wasAbove:!1,wasBelow:!1,lastTime:e}}function tf(e,t){e.phase=t,e.direction=1,e.enterProgress=+("shown"===t),e.leaveProgress=0}function tu(e){return Math.min(Math.max(e,0),1)}function th(e,t,r,i={}){return new ei(e,t,r,{float:i.float??!1})}function tc(e,t){let r;r=t.renderingToBuffer?"none":t.premultipliedAlpha?"premultiplied":"normal";let i=t.glslVersion??eg(t.fragmentShader);return new eb(e,t.vertexShader??("100"===i?el:ea),t.fragmentShader,t.uniforms,r,i)}class td{pass;#em;#tc;#td;#tp;#tm;#tg;constructor(e,t,r,i,s,o,n,a){if(this.#tp=i??!1,this.#tm=s??!1,this.#tg=o,this.#tc={},this.#em={src:{value:null},offset:{value:new ep},resolution:{value:new ep},viewport:{value:new em},time:{value:0},mouse:{value:new ep},passIndex:{value:0}},r)for(let[e,t]of Object.entries(r))"function"==typeof t?(this.#tc[e]=t,this.#em[e]={value:t()}):this.#em[e]={value:t};this.pass=tc(e,{fragmentShader:t,uniforms:this.#em,renderingToBuffer:n??!1,premultipliedAlpha:!0,glslVersion:a})}get uniforms(){return this.#em}setUniforms(e,t,r,i,s,o){this.#em.src.value=e,this.#em.resolution.value.set(r.w*t,r.h*t),this.#em.offset.value.set(r.x*t,r.y*t),this.#em.time.value=i,this.#em.mouse.value.set(s*t,o*t)}updateCustomUniforms(e){for(let[e,t]of Object.entries(this.#tc))this.#em[e]&&(this.#em[e].value=t());if(e)for(let[t,r]of Object.entries(e))this.#em[t]&&(this.#em[t].value=r())}initializeBackbuffer(e,t,r,i){this.#tp&&!this.#td&&(this.#tg?this.#td=new en(e,this.#tg[0],this.#tg[1],1,this.#tm):this.#td=new en(e,t,r,i,this.#tm))}resizeBackbuffer(e,t){this.#td&&!this.#tg&&this.#td.resize(e,t)}registerBufferUniform(e){this.#em[e]||(this.#em[e]={value:null})}get backbuffer(){return this.#td}get persistent(){return this.#tp}get float(){return this.#tm}get size(){return this.#tg}dispose(){this.pass.dispose(),this.#td?.dispose()}}class tp{#eR;#tv=new Map;constructor(e){this.#eR=e}get(e,t,r){let i=`${t}\0${e}\0${r??""}`,s=this.#tv.get(i);return s||(s=new ev(this.#eR,e,t,r),this.#tv.set(i,s)),s}get size(){return this.#tv.size}dispose(){for(let e of this.#tv.values())e.dispose();this.#tv.clear()}}let tm=new Map,tg=!1;function tv(e,t){return"hic"===e||!0===t?null:"number"==typeof t?t.toString():"video"===e?"0.0001":"0"}function tx(e,t){let r=e.getContext("2d");r&&(r.clearRect(0,0,e.width,e.height),r.drawImage(t,0,0,e.width,e.height))}class tw{#v;#tx;#ee;#eS;#eb;#eC;#tw;#ty=[];#tb;#tT=new Map;#tE=null;#tR=!1;#tS=new WeakSet;#tC={};#tP={};#tA=0;#tF=void 0;#eu=2;#tz=[];#ts=new eZ({showPlain:e=>{if("hic"===e.type){let t=e.srcTexture.source;t instanceof OffscreenCanvas&&tx(e.element,t)}else e.element.style.setProperty("opacity",e.originalOpacity.toString())},hidePlain:(e,t)=>{if("hic"===e.type){let t=e.element;t.getContext("2d")?.clearRect(0,0,t.width,t.height)}else e.element.style.opacity=t},isRegistered:e=>this.#tz.includes(e)});#tM=0;#tI=1;#tL=Date.now()/1e3;#tU=!1;#t_=e$(0);#tk=e$(0);#tB=[0,0];#tV=0;#tO=0;#tD=0;#tN=0;#tX=new WeakMap;constructor(e,t){this.#v=e,this.#tx=t,this.#ee=new tn(t,e.preserveDrawingBuffer),this.#eS=this.#ee.gl,this.#eS.clearColor(0,0,0,0),this.#eu=e.pixelRatio,this.#tI=e.timeScale,this.#tL=Date.now()/1e3,this.#eb=new ta(this.#ee),this.#eC=new tp(this.#ee),window.addEventListener("resize",this.#tH),window.addEventListener("pointermove",this.#t$),this.#tH(),this.#tw=new eE(this.#ee),this.#tq(e.postEffects),this.#ee.onContextRestored(()=>{this.#eS.clearColor(0,0,0,0)})}destroy(){for(let e of(this.stop(),window.removeEventListener("resize",this.#tH),window.removeEventListener("pointermove",this.#t$),this.#tb?.dispose(),this.#tT.values()))e?.dispose();for(let e of this.#ty)e.pass.dispose();this.#tE&&(this.#tE.dispose(),this.#tE=null,this.#tR=!1),this.#tw.dispose(),this.#eC.dispose(),this.#eb.dispose()}#tW(){let e,t,r=this.#tx.ownerDocument,i="BackCompat"===r.compatMode?r.body:r.documentElement,s=i.clientWidth,o=i.clientHeight,n=window.scrollX,a=window.scrollY;if(this.#v.fixedCanvas)e=0,t=0;else if(this.#v.wrapper)e=s*this.#v.scrollPadding[0],t=o*this.#v.scrollPadding[1];else{let i=r.body.scrollWidth-(n+s),l=r.body.scrollHeight-(a+o);e=tC(s*this.#v.scrollPadding[0],0,i),t=tC(o*this.#v.scrollPadding[1],0,l)}let l=s+2*e,f=o+2*t;(l!==this.#tB[0]||f!==this.#tB[1])&&(this.#tx.style.width=`${l}px`,this.#tx.style.height=`${f}px`,this.#ee.setSize(l,f,this.#eu),this.#t_=e$({top:-t,left:-e,right:s+e,bottom:o+t}),this.#tk=e$({top:0,left:0,right:s,bottom:o}),this.#tB=[l,f],this.#tV=e,this.#tO=t),this.#v.fixedCanvas||this.#tx.style.setProperty("transform",`translate(${n-e}px, ${a-t}px)`)}#tH=async()=>{for(let e of this.#tz)if("text"===e.type&&e.isInViewport){let t=e.element.getBoundingClientRect(),r=Math.ceil(t.width),i=Math.ceil(t.height);(r!==e.width||i!==e.height)&&(await this.#tG(e),e.width=r,e.height=i)}for(let e of this.#tz)if("text"===e.type&&!e.isInViewport){let t=e.element.getBoundingClientRect(),r=Math.ceil(t.width),i=Math.ceil(t.height);(r!==e.width||i!==e.height)&&(await this.#tG(e),e.width=r,e.height=i)}};#t$=e=>{this.#tD=e.clientX,this.#tN=window.innerHeight-e.clientY};async #tG(e){if(!this.#tX.get(e.element)){this.#tX.set(e.element,!0);try{let t=e.srcTexture,r=t.source instanceof OffscreenCanvas?t.source:void 0,i=await eR(e.element,e.originalOpacity,r,this.maxTextureSize);if(0===i.width||0===i.height)return;let s=new Q(this.#ee,i);s.wrapS=t.wrapS,s.wrapT=t.wrapT,s.premultiplyAlpha=t.premultiplyAlpha,s.needsUpdate=!0,!e.chain&&e.passes.length>0&&(e.passes[0].uniforms.src.value=s),e.srcTexture=s,t.dispose()}catch(e){console.error(e)}finally{this.#tX.set(e.element,!1)}}}async addElement(e,t={},r){let i,s,o;if(void 0!==t.effect)return this.#tj(e,t,t.effect,r);let n=this.#tJ(t),a=e.getBoundingClientRect(),l=tA(e)?eG(a):eW(a),[f,h]=tb(t.overflow),d=ej(l,h),p=tT(t.intersection),m=""===e.style.opacity?1:Number.parseFloat(e.style.opacity),g=!1;if(e instanceof HTMLImageElement){s="img";let t=c(e);if(g=!!t.match(/\.gif/i)){let r=await to.create(t,this.#eu);tm.set(e,r),i=new Q(this.#ee,r.getCanvas())}else{let e=await er(t);i=new Q(this.#ee,e)}}else if(e instanceof HTMLVideoElement)i=new Q(this.#ee,e),s="video";else if(e instanceof HTMLCanvasElement)u(e)&&r?(i=new Q(this.#ee,r),s="hic"):(i=new Q(this.#ee,e),s="canvas");else{let t=await eR(e,m,void 0,this.maxTextureSize);i=new Q(this.#ee,t),s="text"}let[v,x]=tS(t.wrap);i.wrapS=v,i.wrapT=x,i.needsUpdate=!0;let w=t.autoCrop??!0,y=tv(s,t.overlay),b={src:{value:i},resolution:{value:new ep},offset:{value:new ep},time:{value:0},enterTime:{value:-1},leaveTime:{value:-1},enterProgress:{value:0},leaveProgress:{value:0},mouse:{value:new ep},intersection:{value:0},viewport:{value:new em},autoCrop:{value:w}},T={};if(void 0!==t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r?(b[e]={value:r()},T[e]=r):b[e]={value:r};if(t.backbuffer){let e,t;e=(d.right-d.left)*this.#eu,t=(d.bottom-d.top)*this.#eu,b.backbuffer={value:(o=new en(this.#ee,e,t,this.#eu,!1)).texture}}let E=new Map,R=new Map;for(let e=0;e<n.length-1;e++){let t=n[e].target??`pass${e}`;n[e]={...n[e],target:t};let r=n[e].size,i=r?r[0]:(d.right-d.left)*this.#eu,s=r?r[1]:(d.bottom-d.top)*this.#eu;if(n[e].persistent){let i=r?1:this.#eu,s=r?r[0]:d.right-d.left,o=r?r[1]:d.bottom-d.top;R.set(t,new en(this.#ee,s,o,i,n[e].float))}else E.set(t,th(this.#ee,i,s,{float:n[e].float}))}let S=[];for(let e=0;e<n.length;e++){let t=n[e],r=t.frag,i={...b},s={};for(let[e,s]of E)e!==t.target&&r.match(RegExp(`uniform\\s+sampler2D\\s+${e}\\b`))&&(i[e]={value:s.texture});for(let[e,t]of R)r.match(RegExp(`uniform\\s+sampler2D\\s+${e}\\b`))&&(i[e]={value:t.texture});if(t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r?(i[e]={value:r()},s[e]=r):i[e]={value:r};let o=tc(this.#ee,{vertexShader:t.vert,fragmentShader:r,uniforms:i,renderingToBuffer:void 0!==t.target,glslVersion:t.glslVersion});S.push({pass:o,uniforms:i,uniformGenerators:{...T,...s},target:t.target,persistent:t.persistent,float:t.float,size:t.size,backbuffer:t.target?R.get(t.target):void 0})}let C=this.#tM,P={type:s,element:e,isInViewport:!1,intersectionState:tl(C),width:l.right-l.left,height:l.bottom-l.top,passes:S,bufferTargets:E,startTime:C,enterTime:C,leaveTime:-1/0,release:t.release??1/0,isGif:g,isFullScreen:f,overflow:h,intersection:p,originalOpacity:m,srcTexture:i,zIndex:t.zIndex??0,backbuffer:o,autoCrop:w};this.#tY(P,l,C),this.#tK(P,y)}#tK(e,t){this.#ts.adopt(e,t)||null===t||e.element.style.setProperty("opacity",t),this.#tz.push(e),this.#tz.sort((e,t)=>e.zIndex-t.zIndex)}async #tj(e,t,r,i){let s,o;void 0!==t.shader&&console.warn("[VFX-JS] Both `shader` and `effect` specified; `effect` takes precedence."),void 0!==t.overflow&&console.warn("[VFX-JS] `overflow` is shader-path only and is ignored by the effect path. Use each effect's own `outputRect` (with `dims.canvasRect` for fullscreen) to control its dst rect.");let n=Array.isArray(r)?[...r]:[r];this.#tZ(n);let a=e.getBoundingClientRect(),l=tA(e)?eG(a):eW(a),[f,h]=tb(t.overflow),d=tT(t.intersection),p=""===e.style.opacity?1:Number.parseFloat(e.style.opacity),m=!1;if(e instanceof HTMLImageElement){o="img";let t=c(e);if(m=!!t.match(/\.gif/i)){let r=await to.create(t,this.#eu);tm.set(e,r),s=new Q(this.#ee,r.getCanvas())}else{let e=await er(t);s=new Q(this.#ee,e)}}else if(e instanceof HTMLVideoElement)s=new Q(this.#ee,e),o="video";else if(e instanceof HTMLCanvasElement)u(e)&&i?(s=new Q(this.#ee,i),o="hic"):(s=new Q(this.#ee,e),o="canvas");else{let t=await eR(e,p,void 0,this.maxTextureSize);s=new Q(this.#ee,t),o="text"}let[g,v]=tS(t.wrap);s.wrapS=g,s.wrapT=v,s.premultiplyAlpha=!0,s.needsUpdate=!0;let x=t.autoCrop??!0,w=tv(o,t.overlay),y=this.#tM,b={type:o,element:e,isInViewport:!1,intersectionState:tl(y),width:l.right-l.left,height:l.bottom-l.top,passes:[],bufferTargets:new Map,startTime:y,enterTime:y,leaveTime:-1/0,release:t.release??1/0,isGif:m,isFullScreen:f,overflow:h,intersection:d,originalOpacity:p,srcTexture:s,zIndex:t.zIndex??0,backbuffer:void 0,autoCrop:x,effectLastRenderTime:y},T=eN(()=>b.srcTexture,()=>tE(b.srcTexture,"w"),()=>tE(b.srcTexture,"h")),E={},R={};if(t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r?(R[e]=r,E[e]=r()):E[e]=r;b.effectUniformGenerators=R,b.effectStaticUniforms=E;let S={autoCrop:x,glslVersion:t.glslVersion??"300 es"},C=new eK(this.#ee,this.#eb,this.#eu,n,S,T,!1,this.#eC);try{await C.initAll()}catch(t){throw this.#tQ(n),s.dispose(),e.style.setProperty("opacity",p.toString()),t}b.chain=C,this.#tY(b,l,y),this.#tK(b,w)}#tJ(e){let t=t=>void 0===t.glslVersion&&void 0!==e.glslVersion?{...t,glslVersion:e.glslVersion}:t;return Array.isArray(e.shader)?e.shader.map(t):[t({frag:this.#t0(e.shader||"uvGradient")})]}async updateElementEffects(e,t){let r=this.#tz.find(t=>t.element===e);if(!r)throw Error("[VFX-JS] updateElementEffects: element not registered");if(!r.chain)throw Error("[VFX-JS] updateElementEffects: element is on the shader path; effect-only updates are not supported");let i=Array.isArray(t)?[...t]:[t],s=r.chain.effects,o=new Set(s),n=[];for(let e of i)if(!o.has(e)){if(this.#tS.has(e))throw Error("[VFX-JS] Effect instance already attached. Construct a new instance per `vfx.add()` / `postEffect`.");n.push(e)}await r.chain.replaceEffects(i);let a=new Set(i);for(let e of s)a.has(e)||this.#tS.delete(e);for(let e of n)this.#tS.add(e)}removeElement(e){let t=this.#tz.findIndex(t=>t.element===e);if(-1!==t){let r=this.#tz.splice(t,1)[0];if(r.chain)this.#tQ(r.chain.effects),r.chain.dispose();else{for(let e of r.bufferTargets.values())e.dispose();for(let e of r.passes)e.pass.dispose(),e.backbuffer?.dispose();r.backbuffer?.dispose()}r.srcTexture.dispose(),e.style.setProperty("opacity",r.originalOpacity.toString())}}updateTextElement(e){let t=this.#tz.findIndex(t=>t.element===e);return -1!==t?this.#tG(this.#tz[t]):Promise.resolve()}async updateImageElement(e){let t=this.#tz.find(t=>t.element===e);if(t?.type!=="img"||t.isGif)return;let r=await er(c(e)),i=t.srcTexture,s=new Q(this.#ee,r);s.wrapS=i.wrapS,s.wrapT=i.wrapT,s.premultiplyAlpha=i.premultiplyAlpha,s.needsUpdate=!0,!t.chain&&t.passes.length>0&&(t.passes[0].uniforms.src.value=s),t.srcTexture=s,i.dispose()}updateCanvasElement(e){let t=this.#tz.find(t=>t.element===e);if(t){let r=t.srcTexture,i=new Q(this.#ee,e);i.wrapS=r.wrapS,i.wrapT=r.wrapT,i.premultiplyAlpha=r.premultiplyAlpha,i.needsUpdate=!0,!t.chain&&t.passes.length>0&&(t.passes[0].uniforms.src.value=i),t.srcTexture=i,r.dispose()}}updateHICTexture(e,t){let r=this.#tz.find(t=>t.element===e);if(r?.type!=="hic")return;r.frozen&&tx(e,t);let i=r.srcTexture;if(i.source===t)i.needsUpdate=!0;else{let e=new Q(this.#ee,t);e.wrapS=i.wrapS,e.wrapT=i.wrapT,e.premultiplyAlpha=i.premultiplyAlpha,e.needsUpdate=!0,!r.chain&&r.passes.length>0&&(r.passes[0].uniforms.src.value=e),r.srcTexture=e,i.dispose()}}freezeInside(e){return this.#ts.freezeInside(e,this.#tz)}isFrozen(e){return this.#tz.some(t=>t.element===e&&t.frozen)}forceRender(e){let t=this.#tz.find(t=>t.element===e);return!t||t.forceRender?()=>{}:(t.forceRender=!0,()=>{t.forceRender=!1})}get maxTextureSize(){return this.#ee.maxTextureSize}isPlaying(){return void 0!==this.#tF}play(){this.isPlaying()||(this.#tL=Date.now()/1e3,this.#tF=requestAnimationFrame(this.#t1))}get time(){return this.#tM}setTime(e){this.#tM=e,this.#tU=!0}get timeScale(){return this.#tI}set timeScale(e){this.#tI=e}stop(){void 0!==this.#tF&&(cancelAnimationFrame(this.#tF),this.#tF=void 0)}render(){let e=Date.now()/1e3;this.#tU?this.#tU=!1:this.#tM+=(e-this.#tL)*this.#tI,this.#tL=e;let t=this.#tM,r=this.#eS;this.#tW(),r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,this.#tx.width,this.#tx.height),r.clear(r.COLOR_BUFFER_BIT);let i=this.#t_.right-this.#t_.left,s=this.#t_.bottom-this.#t_.top,o={x:0,y:0,w:i,h:s},n=this.#t2();for(let e of(n&&(this.#t3(i,s),this.#tb&&(r.bindFramebuffer(r.FRAMEBUFFER,this.#tb.fbo),r.clear(r.COLOR_BUFFER_BIT),r.bindFramebuffer(r.FRAMEBUFFER,null))),this.#tz)){if(e.frozen){e.intersectionState.lastTime=t;continue}let r=e.element.getBoundingClientRect(),a="text"===e.type?eG(r):eW(r),l=this.#tY(e,a,t);if(!l.isVisible)continue;if(e.chain){this.#t4(e,a,l,t);continue}let f=e.passes[0].uniforms;for(let r of(f.time.value=t-e.startTime,f.resolution.value.set((a.right-a.left)*this.#eu,(a.bottom-a.top)*this.#eu),f.mouse.value.set((this.#tD+this.#tV)*this.#eu,(this.#tN+this.#tO)*this.#eu),e.passes))for(let[e,t]of Object.entries(r.uniformGenerators))r.uniforms[e].value=t();tm.get(e.element)?.update(),("video"===e.type||e.isGif)&&(f.src.value.needsUpdate=!0);let u=eo(a,s,this.#tV,this.#tO),h=eo(l.rectWithOverflow,s,this.#tV,this.#tO);e.backbuffer&&(e.passes[0].uniforms.backbuffer.value=e.backbuffer.texture);{let t=e.isFullScreen?o:h,r=Math.max(1,t.w*this.#eu),i=Math.max(1,t.h*this.#eu),s=Math.max(1,t.w),n=Math.max(1,t.h);for(let t=0;t<e.passes.length-1;t++){let o=e.passes[t];if(!o.size)if(o.backbuffer)o.backbuffer.resize(s,n);else{let t=e.bufferTargets.get(o.target);t&&(t.width!==r||t.height!==i)&&t.setSize(r,i)}}}let c=new Map;for(let t of e.passes)t.backbuffer&&t.target&&c.set(t.target,t.backbuffer.texture);let d=e.srcTexture;for(let t=0;t<e.passes.length-1;t++){let i=e.passes[t],s=e.isFullScreen?o:h;for(let[e,t]of(i.uniforms.src.value=d,c))i.uniforms[e]&&(i.uniforms[e].value=t);for(let[e,t]of Object.entries(i.uniformGenerators))i.uniforms[e]&&(i.uniforms[e].value=t());let n=i.size?{x:0,y:0,w:i.size[0],h:i.size[1]}:{x:0,y:0,w:s.w,h:s.h},a=function(e,t,r,i,s,o,n){let a=s[0]+o[0]-r.x,l=s[1]+o[1]-r.y;return i?{resolution:[i[0],i[1]],offset:[0,0],mouse:[a/r.w*i[0],l/r.h*i[1]]}:{resolution:[e.width*n,e.height*n],offset:[(t.x-r.x)*n,(t.y-r.y)*n],mouse:[a*n,l*n]}}(r,u,s,i.size,[this.#tD,this.#tN],[this.#tV,this.#tO],this.#eu);if(i.uniforms.resolution.value.set(...a.resolution),i.uniforms.offset.value.set(...a.offset),i.uniforms.mouse.value.set(...a.mouse),i.backbuffer)this.#t5(i.pass,i.backbuffer.target,n,i.uniforms,!0),i.backbuffer.swap(),d=i.backbuffer.texture;else{let t=e.bufferTargets.get(i.target);if(!t)continue;this.#t5(i.pass,t,n,i.uniforms,!0),d=t.texture}i.target&&c.set(i.target,d)}let p=e.passes[e.passes.length-1];for(let[e,t]of(p.uniforms.src.value=d,p.uniforms.resolution.value.set(r.width*this.#eu,r.height*this.#eu),p.uniforms.offset.value.set(u.x*this.#eu,u.y*this.#eu),p.uniforms.mouse.value.set((this.#tD+this.#tV)*this.#eu,(this.#tN+this.#tO)*this.#eu),c))p.uniforms[e]&&(p.uniforms[e].value=t);for(let[e,t]of Object.entries(p.uniformGenerators))p.uniforms[e]&&(p.uniforms[e].value=t());e.backbuffer?(p.uniforms.backbuffer.value=e.backbuffer.texture,e.isFullScreen?(e.backbuffer.resize(i,s),this.#t6(e,u.x,u.y),this.#t5(p.pass,e.backbuffer.target,o,p.uniforms,!0),e.backbuffer.swap(),this.#tw.setUniforms(e.backbuffer.texture,this.#eu,o),this.#t5(this.#tw.pass,n&&this.#tb||null,o,this.#tw.uniforms,!1)):(e.backbuffer.resize(h.w,h.h),this.#t6(e,e.overflow.left,e.overflow.bottom),this.#t5(p.pass,e.backbuffer.target,e.backbuffer.getViewport(),p.uniforms,!0),e.backbuffer.swap(),this.#tw.setUniforms(e.backbuffer.texture,this.#eu,h),this.#t5(this.#tw.pass,n&&this.#tb||null,h,this.#tw.uniforms,!1))):(this.#t6(e,u.x,u.y),this.#t5(p.pass,n&&this.#tb||null,e.isFullScreen?o:h,p.uniforms,!1))}n&&this.#tb&&(this.#tE&&this.#tR?this.#t8(o,t):this.#t7(o,t))}#t1=()=>{this.isPlaying()&&(this.render(),this.#tF=requestAnimationFrame(this.#t1))};#t4(e,t,r,i){let s=e.chain;if(!s)return;let o=this.#eu;tm.get(e.element)?.update(),("video"===e.type||e.isGif)&&(e.srcTexture.needsUpdate=!0);let n={...e.effectStaticUniforms??{}};if(e.effectUniformGenerators)for(let[t,r]of Object.entries(e.effectUniformGenerators))n[t]=r();let a=this.#t_.right-this.#t_.left,l=this.#t_.bottom-this.#t_.top,f=eo(t,l,this.#tV,this.#tO),u=this.#tD+this.#tV-f.x,h=this.#tN+this.#tO-f.y,c=t.right-t.left,d=t.bottom-t.top,p=e.effectLastRenderTime??i;e.effectLastRenderTime=i;let m=this.#t2()&&this.#tb?eH(this.#tb):null;s.run({time:i-e.startTime,deltaTime:i-p,mouse:[u*o,h*o],mouseViewport:[this.#tD*o,this.#tN*o],intersection:r.intersection,enterTime:tP(i-e.enterTime),leaveTime:tP(i-e.leaveTime),enterProgress:r.enterProgress,leaveProgress:r.leaveProgress,resolvedUniforms:n,canvasSize:[a,l],canvasBufferSize:[a*o,l*o],elementSize:[c,d],elementBufferSize:[c*o,d*o],elementRectOnCanvasPx:{x:f.x*o,y:f.y*o,w:f.w*o,h:f.h*o},finalTarget:m,isVisible:r.isVisible})}#t2(){return this.#ty.length>0||null!==this.#tE&&this.#tR}#tZ(e){for(let t of e)if(this.#tS.has(t))throw Error("[VFX-JS] Effect instance already attached. Construct a new instance per `vfx.add()` / `postEffect`.");for(let t of e)this.#tS.add(t)}#tQ(e){for(let t of e)this.#tS.delete(t)}#t9(e){let t=e.hitTestPadBuffer,r=this.#eu;return e$({top:t.top/r,right:t.right/r,bottom:t.bottom/r,left:t.left/r})}#tY(e,t,r){var i,s,o,n,a,l,f,u;let h,c,d,p=ej(t,e.chain?this.#t9(e.chain):e.overflow),m=e.isFullScreen||ty(this.#tk,p),g=ej(this.#tk,e.intersection.rootMargin),v=eY(g.left,g.right,t.left,t.right)*eY(g.top,g.bottom,t.top,t.bottom);i=e,s=v,o=ty(g,t),n=r,c=(h=i.intersectionState).isIn,d=i.isFullScreen||function(e,t,r,i,s){let o=0===i?r:t>=i,n=0===s?!r:t<s,a=o&&!e.wasAbove,l=n&&!e.wasBelow;if(e.wasAbove=o,e.wasBelow=n,o&&!n)return!0;if(n&&!o)return!1;if(o&&n){if(a)return!0;if(l)return!1}return e.isIn}(h,s,o,i.intersection.threshold,i.intersection.leaveThreshold),!c&&d&&(i.enterTime=n,i.leaveTime=1/0),c&&!d&&(i.leaveTime=n),function(e,t,r,i){let s=r-e.lastTime;if(e.lastTime=r,e.isIn=t,function(e,t){switch(e.phase){case"hidden":if(t)return e.phase="entering",e.direction=1,!0;return!1;case"shown":if(!t)return e.phase="leaving",e.direction=1,!0;return!1;case"entering":return e.direction=t?1:-1,!1;case"leaving":return e.direction=t?-1:1,!1}}(e,t))return;let o=(s<0?s:e.direction*s)/i;if("entering"===e.phase){let t=e.enterProgress+o;o>0&&t>=1?tf(e,"shown"):o<0&&t<=0?tf(e,"hidden"):e.enterProgress=tu(t)}else if("leaving"===e.phase){let t=e.leaveProgress+o;o>0&&t>=1?tf(e,"hidden"):o<0&&t<=0?tf(e,"shown"):e.leaveProgress=tu(t)}}(h,d,n,i.intersection.duration);let{enterProgress:x,leaveProgress:w}=e.intersectionState;e.isInViewport=m;let y=m&&r-e.leaveTime<=e.release||!0===e.forceRender&&t.right>t.left&&t.bottom>t.top;return y&&!e.chain&&e.passes.length>0&&(a=e.passes[0].uniforms,l=e,f=v,u=r,a.intersection.value=f,a.enterTime.value=tP(u-l.enterTime),a.leaveTime.value=tP(u-l.leaveTime),a.enterProgress.value=l.intersectionState.enterProgress,a.leaveProgress.value=l.intersectionState.leaveProgress),{isVisible:y,intersection:v,rectWithOverflow:p,enterProgress:x,leaveProgress:w}}#t0(e){return e in ed?ed[e]:e}#t5(e,t,r,i,s){let o=this.#eS;s&&null!==t&&t!==this.#tb&&(o.bindFramebuffer(o.FRAMEBUFFER,t.fbo),o.viewport(0,0,t.width,t.height),o.clear(o.COLOR_BUFFER_BIT));let n=i.viewport;n&&n.value instanceof em&&n.value.set(r.x*this.#eu,r.y*this.#eu,r.w*this.#eu,r.h*this.#eu);try{var a,l,f,u;let i,s,n,h,c,d,p,m;a=this.#eb,l=this.#tB[0],f=this.#tB[1],u=this.#eu,i=t?t.width/u:l,s=t?t.height/u:f,n=Math.max(0,r.x),h=Math.max(0,r.y),c=Math.min(i,r.x+r.w),d=Math.min(s,r.y+r.h),p=c-n,m=d-h,p<=0||m<=0||(o.bindFramebuffer(o.FRAMEBUFFER,t?t.fbo:null),o.viewport(Math.round(n*u),Math.round(h*u),Math.round(p*u),Math.round(m*u)),eT(o,e.blend),e.program.use(),e.program.uploadUniforms(e.uniforms),a.draw())}catch(e){console.error(e)}}#t6(e,t,r){let i=e.passes[0].uniforms.offset.value;i.x=t*this.#eu,i.y=r*this.#eu}#tq(e){let t=1!==e.length||"frag"in e[0]?null:e[0];if(t&&void 0!==t.effect)return void this.#re(t,t.effect);let r=[],i=[];for(let t of e)"frag"in t&&i.push(t);for(let e=0;e<i.length-1;e++)i[e].target||(i[e]={...i[e],target:`pass${e}`});for(let t of e){let e,i,s;if("frag"in t)e=t.frag,i=new td(this.#ee,e,t.uniforms,t.persistent??!1,t.float??!1,t.size,void 0!==t.target,t.glslVersion),s=t.target;else{if(void 0===t.shader)throw Error("VFXPostEffect requires `shader` (the `effect` path is not implemented yet).");e=this.#t0(t.shader),i=new td(this.#ee,e,t.uniforms,t.persistent??!1,t.float??!1,void 0,!1,t.glslVersion),t.persistent&&i.registerBufferUniform("backbuffer"),s=void 0}r.push(e);let o={};if(t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r&&(o[e]=r);this.#ty.push({pass:i,target:s,generators:o})}for(let e of i)e.target&&this.#tT.set(e.target,void 0);let s=this.#ty.map(e=>e.target).filter(e=>void 0!==e);for(let e=0;e<this.#ty.length;e++)for(let t of s)r[e].match(RegExp(`uniform\\s+sampler2D\\s+${t}\\b`))&&this.#ty[e].pass.registerBufferUniform(t)}#re(e,t){void 0!==e.shader&&console.warn("[VFX-JS] Both `shader` and `effect` specified on post-effect; `effect` takes precedence.");let r=Array.isArray(t)?[...t]:[t];this.#tZ(r);let i=eN(()=>{let e=this.#tb;if(!e)throw Error("[VFX-JS] post-effect chain active without target");return e.texture},()=>this.#tb?.width??0,()=>this.#tb?.height??0),s={autoCrop:!0,glslVersion:e.glslVersion??"300 es"},o=new eK(this.#ee,this.#eb,this.#eu,r,s,i,!0,this.#eC);if(e.uniforms)for(let[t,r]of Object.entries(e.uniforms))"function"==typeof r?(this.#tP[t]=r,this.#tC[t]=r()):this.#tC[t]=r;this.#tE=o,this.#tA=this.#tM,o.initAll().then(()=>{this.#tE===o&&(this.#tR=!0)}).catch(e=>{console.error("[VFX-JS] Post-effect init failed; post-effect disabled:",e),this.#tE===o&&(this.#tQ(this.#tE.effects),this.#tE.dispose(),this.#tE=null,this.#tR=!1)})}#t8(e,t){let r=this.#tE;if(!r)return;let i=this.#eu,s={...this.#tC};for(let[e,t]of Object.entries(this.#tP))s[e]=t();let o=this.#t_.right-this.#t_.left,n=this.#t_.bottom-this.#t_.top,a=this.#tA;this.#tA=t;let l=[o,n],f=[o*i,n*i],u={x:e.x*i,y:e.y*i,w:e.w*i,h:e.h*i};r.run({time:t,deltaTime:t-a,mouse:[this.#tD*i,this.#tN*i],mouseViewport:[this.#tD*i,this.#tN*i],intersection:1,enterTime:0,leaveTime:0,enterProgress:1,leaveProgress:0,resolvedUniforms:s,canvasSize:l,canvasBufferSize:f,elementSize:l,elementBufferSize:f,elementRectOnCanvasPx:u,finalTarget:null,isVisible:!0})}#t7(e,t){if(!this.#tb)return;let r=this.#tb.texture,i=new Map;for(let{pass:e,target:t}of this.#ty)t&&e.backbuffer&&i.set(t,e.backbuffer.texture);for(let s=0;s<this.#ty.length;s++){let{pass:o,target:n,generators:a}=this.#ty[s],l=s===this.#ty.length-1,f=this.#tD+this.#tV,u=this.#tN+this.#tO,h=o.size;if(h){let[i,s]=h;o.uniforms.src.value=r,o.uniforms.resolution.value.set(i,s),o.uniforms.offset.value.set(0,0),o.uniforms.time.value=t,o.uniforms.mouse.value.set(f/e.w*i,u/e.h*s)}else o.setUniforms(r,this.#eu,e,t,f,u);for(let[e,t]of(o.uniforms.passIndex.value=s,o.updateCustomUniforms(a),i)){let r=o.uniforms[e];r&&(r.value=t)}if(l)o.backbuffer?(o.uniforms.backbuffer&&(o.uniforms.backbuffer.value=o.backbuffer.texture),this.#t5(o.pass,o.backbuffer.target,e,o.uniforms,!0),o.backbuffer.swap(),this.#tw.setUniforms(o.backbuffer.texture,this.#eu,e),this.#t5(this.#tw.pass,null,e,this.#tw.uniforms,!1)):this.#t5(o.pass,null,e,o.uniforms,!1);else if(o.backbuffer){o.uniforms.backbuffer&&(o.uniforms.backbuffer.value=o.backbuffer.texture);let t=h?{x:0,y:0,w:h[0]/this.#eu,h:h[1]/this.#eu}:e;this.#t5(o.pass,o.backbuffer.target,t,o.uniforms,!0),o.backbuffer.swap(),r=o.backbuffer.texture,n&&i.set(n,o.backbuffer.texture)}else{let t=n??`postEffect${s}`,a=this.#tT.get(t),l=h?h[0]:e.w*this.#eu,f=h?h[1]:e.h*this.#eu;a&&a.width===l&&a.height===f||(a?.dispose(),a=th(this.#ee,l,f,{float:o.float}),this.#tT.set(t,a));let u=h?{x:0,y:0,w:h[0]/this.#eu,h:h[1]/this.#eu}:e;this.#t5(o.pass,a,u,o.uniforms,!0),r=a.texture,n&&i.set(n,a.texture)}}}#t3(e,t){let r=e*this.#eu,i=t*this.#eu;for(let{pass:s}of(this.#tb&&this.#tb.width===r&&this.#tb.height===i||(this.#tb?.dispose(),this.#tb=th(this.#ee,r,i)),this.#ty))s.persistent&&!s.backbuffer?s.initializeBackbuffer(this.#ee,e,t,this.#eu):s.backbuffer&&s.resizeBackbuffer(e,t)}}function ty(e,t){return t.left<=e.right&&t.right>=e.left&&t.top<=e.bottom&&t.bottom>=e.top}function tb(e){return!0===e?[!0,eq]:void 0===e?[!1,eq]:[!1,e$(e)]}function tT(e){let t=e?.threshold??0,r=e$(e?.rootMargin??0),i=e?.leaveThreshold??t,s=e?.duration??1;return Number.isFinite(s)&&s>0||(tg||(tg=!0,console.warn(`[VFX-JS] \`intersection.duration\` must be a finite number above 0, got ${s}. Using 1 instead.`)),s=1),{threshold:t,leaveThreshold:i,rootMargin:r,duration:s}}function tE(e,t){let r=e.source;return r?"u">typeof HTMLImageElement&&r instanceof HTMLImageElement?"w"===t?r.naturalWidth:r.naturalHeight:"u">typeof HTMLVideoElement&&r instanceof HTMLVideoElement?"w"===t?r.videoWidth:r.videoHeight:"w"===t?r.width:r.height:0}function tR(e){return"repeat"===e?"repeat":"mirror"===e?"mirror":"clamp"}function tS(e){if(!e)return["clamp","clamp"];if(Array.isArray(e))return[tR(e[0]),tR(e[1])];let t=tR(e);return[t,t]}function tC(e,t,r){return Math.max(t,Math.min(r,e))}function tP(e){return tC(e,-1e6,1e6)}function tA(e){return!(e instanceof HTMLImageElement||e instanceof HTMLVideoElement||e instanceof HTMLCanvasElement)}e.s(["f",0,class e{#rt;#tx;#rr=new Map;#ri=new Set;#rs;static init(t){try{return new e(t)}catch{return null}}constructor(e={}){let t,r,i;if("u"<typeof document)throw"Cannot find 'document'. VFX-JS only runs on the browser.";if(!function(){try{let e=document.createElement("canvas"),t=e.getContext("webgl2")||e.getContext("webgl");return null!==t}catch{return!1}}())throw Error("[VFX-JS] WebGL is not available in this environment.");let s=(i=window.devicePixelRatio,t=void 0===e.scrollPadding?[.1,.1]:!1===e.scrollPadding?[0,0]:Array.isArray(e.scrollPadding)?[e.scrollPadding[0]??.1,e.scrollPadding[1]??.1]:[e.scrollPadding,e.scrollPadding],r=void 0===e.postEffect?[]:Array.isArray(e.postEffect)?e.postEffect:[e.postEffect],{pixelRatio:e.pixelRatio??i,zIndex:e.zIndex??void 0,autoplay:e.autoplay??!0,fixedCanvas:!1===e.scrollPadding,scrollPadding:t,wrapper:e.wrapper,postEffects:r,preserveDrawingBuffer:e.preserveDrawingBuffer??!1,timeScale:e.timeScale??1});this.#rs=function(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}();let o=document.createElement("canvas");for(let[e,t]of Object.entries({position:s.fixedCanvas?"fixed":"absolute",top:0,left:0,width:"0px",height:"0px","z-index":9999,"pointer-events":"none"}))o.style.setProperty(e,t.toString());void 0!==s.zIndex&&o.style.setProperty("z-index",s.zIndex.toString()),(s.wrapper??document.body).appendChild(o),this.#tx=o,this.#rt=new tw(s,o),s.autoplay&&this.play()}async add(e,t,r){this.#rs||(e instanceof HTMLImageElement?await this.#ro(e,t):e instanceof HTMLVideoElement?await this.#rn(e,t):e instanceof HTMLCanvasElement?u(e)&&r?await this.#ra(e,t,r):await this.#rl(e,t):await this.#rf(e,t))}updateHICTexture(e,t){this.#rt.updateHICTexture(e,t)}get reducedMotion(){return this.#rs}get maxTextureSize(){return this.#rt.maxTextureSize}get canvas(){return this.#tx}addHTML(e,t){return this.#ru(e,t,!1)}addHTMLWithStill(e,t){return this.#ru(e,t,!0)}async #ru(e,t,r){if(this.#rs)return;if(!H())return console.warn("html-in-canvas not supported, falling back to dom-to-canvas"),this.add(e,t);void 0!==t.overlay&&console.warn("addHTML does not support overlay mode (layoutsubtree hides children). Ignoring overlay option.");let{overlay:i,...s}=t,o=this.#rr.get(e);o&&this.#rt.removeElement(o);let{canvas:n,initialCapture:a}=await N(e,{onCapture:e=>{this.#rt.updateHICTexture(n,e)},maxSize:this.#rt.maxTextureSize,stillCover:r?{zIndex:this.#rh()}:void 0});o=n,this.#rr.set(e,o),await this.#ra(o,s,a)}#rh(){let e=Number.parseInt(this.#tx.style.zIndex,10);return Number.isNaN(e)?9998:e-1}async #ra(e,t,r){try{await this.#rt.addElement(e,t,r)}finally{V(e,this.#rt.isFrozen(e))}}addTransition(e,t={}){let r=new Z(this,e,t,()=>this.#ri.delete(r));return this.#ri.add(r),r}freezeInside(e){return this.#rt.freezeInside(e)}lockSize(e){let t=this.#rr.get(e);return t?k(t):()=>{}}forceRender(e){let t=this.#rr.get(e)??e;return this.#rt.forceRender(t)}remove(e){let t=this.#rr.get(e);t?(X(t,e),this.#rr.delete(e),this.#rt.removeElement(t)):this.#rt.removeElement(e)}updateEffects(e,t){if(this.#rs)return Promise.resolve();let r=this.#rr.get(e)??e;return this.#rt.updateElementEffects(r,t)}async update(e){await this.updateInTime(e)}async updateInTime(e){let t=this.#rr.get(e)??(e instanceof HTMLCanvasElement?e:null),r=t?_(t):void 0;return r||(e instanceof HTMLImageElement?await this.#rt.updateImageElement(e):e instanceof HTMLCanvasElement?this.#rt.updateCanvasElement(e):await this.#rt.updateTextElement(e),!0)}play(){this.#rs||this.#rt.play()}stop(){this.#rt.stop()}render(){this.#rs||this.#rt.render()}get time(){return this.#rt.time}setTime(e){this.#rt.setTime(e)}get timeScale(){return this.#rt.timeScale}set timeScale(e){this.#rt.timeScale=e}destroy(){for(let e of this.#ri)e.destroy();for(let[e,t]of(this.#ri.clear(),this.#rr))X(t,e);this.#rr.clear(),this.#rt.destroy(),this.#tx.remove()}#ro(e,t){return e.complete?this.#rt.addElement(e,t):new Promise(r=>{e.addEventListener("load",()=>{this.#rt.addElement(e,t),r()},{once:!0})})}#rn(e,t){return e.readyState>=3?this.#rt.addElement(e,t):new Promise(r=>{e.addEventListener("canplay",()=>{this.#rt.addElement(e,t),r()},{once:!0})})}#rl(e,t){return this.#rt.addElement(e,t)}#rf(e,t){return this.#rt.addElement(e,t)}}],61388),e.s([],90422);let tF=`
vec4 splitRead(vec2 uvr, vec2 uvg, vec2 uvb, bool to) {
  vec4 r = to ? readTo(uvr) : readFrom(uvr);
  vec4 g = to ? readTo(uvg) : readFrom(uvg);
  vec4 b = to ? readTo(uvb) : readFrom(uvb);
  return vec4(r.r, g.g, b.b, (r.a + g.a + b.a) / 3.0);
}
`,tz=`
float ign(vec2 p) {
  return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
}
`,tM=`
vec2 mirror(vec2 p) {
  return 1.0 - abs(1.0 - mod(p, 2.0));
}
`,tI=e=>"function"==typeof e.render&&!1!==e.enabled;e.s(["s",0,class extends l{name="hard_cut";frag=`
vec4 transition(vec2 uv, float t) {
  return t < 0.5 ? readFrom(uv) : readTo(uv);
}
`},"j",0,tz,"S",0,tM,"F",0,tF,"A",0,class{params;#eh=[];constructor(e={}){this.params=e}async init(e){for(let t of(this.#eh=this.stages.slice(1).map(()=>e.createRenderTarget()),this.stages))await t.init?.(e)}start(e){for(let t of this.stages)t.start?.(e)}update(e){for(let t of this.stages)t.update?.(e)}render(e){let t=this.stages.filter(tI);if(0===t.length)return void e.blit(e.src);let r=e.src;for(let[i,s]of t.entries()){if(i===t.length-1)return void s.render?.({...e,src:r});let o=this.#eh[i];e.clear(o),s.render?.(function(e,t,r){return{...e,src:t,target:r,draw:t=>e.draw({...t,target:t.target??r}),blit:(t,i,s)=>e.blit(t,i??r,s),clear:t=>e.clear(t??r)}}(e,r,o)),r=o}}end(){for(let e of this.stages)e.end?.()}outputRect(e){let t=this.stages.filter(tI);return t[t.length-1]?.outputRect?.(e)}dispose(){for(let e of this.stages)e.dispose?.();for(let e of this.#eh)e.dispose();this.#eh=[]}}],66601),e.s(["f",0,class extends l{name="lens_distortion";frag=`
uniform float strength;
uniform float dispersion;
// The old content zooms from 1 to 1 + zoom; the new one from 1 + zoom back to 1.
uniform float zoom;
const float TAPS = 12.0;
// Width of the growing warp's edge.
const float SOFT = 0.5;

${tz}
${tM}
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
`;uniforms(){return{strength:this.params.strength??1,dispersion:Math.max(0,this.params.dispersion??.6),zoom:Math.max(0,this.params.zoom??3)}}}],35668)}])})();