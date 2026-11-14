(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,83790,86679,6010,28263,36951,1633,e=>{e.i(90422),e.i(18289),e.i(7150);var t=e.i(16597),r=e.i(81290),i=e.i(60416),s=e.i(3066);e.s([],83790),e.i(61069),e.s([],86679),e.i(61388),e.i(99984),e.s([],6010),e.s([],28263),e.s(["f",0,function(e){return t.forwardRef(function(o,n){let a=(0,s.f)(),[l,u]=(0,t.useState)(null),{vfxProps:f,domProps:h}=(0,i.r)(o);return(0,r.Y)(l,a,f),(0,t.useEffect)(()=>{if(!a||!l)return;let e=new MutationObserver(()=>a.update(l));return e.observe(l,{characterData:!0,attributes:!0,subtree:!0}),()=>e.disconnect()},[l,a]),t.createElement(e,{...h,ref:e=>{u(e),n instanceof Function?n(e):n&&(n.current=e)}})})}],36951),e.s([],1633)},52729,e=>{e.i(83790),e.i(99984),e.i(86679),e.i(6010),e.i(28263);var t=e.i(36951);e.i(1633),e.i(58786),e.i(59443),e.i(24979),e.i(41570),(0,t.f)("span"),(0,t.f)("div"),(0,t.f)("p"),e.s([],52729)},81290,60416,e=>{var t=e.i(16597);let r=["shader","release","uniforms","overlay","intersection","overflow","wrap","zIndex","backbuffer","autoCrop","glslVersion","effect"];e.s(["B",0,r,"r",0,function(e){let t={},i={};for(let s of Object.keys(e))r.includes(s)?t[s]=e[s]:i[s]=e[s];return{vfxProps:t,domProps:i}}],60416);let i=r.filter(e=>"effect"!==e);function s(){let e=Promise.resolve();return{enqueue(t){let r=e.then(t,t);return e=r.then(()=>{},()=>{}),r}}}async function o(e,t,r,s,o){let n=function(e,t){for(let r of i)if(e[r]!==t[r])return!1;return!0}(r,s);if(!n||r.effect!==s.effect){if(n&&void 0!==s.effect)return void await e.updateEffects(t,s.effect);e.remove(t),await o(t,s)}}e.s(["P",0,o,"$",0,s,"Y",0,function(e,r,i){let n=(0,t.useRef)(i);n.current=i;let a=(0,t.useRef)(null),l=(0,t.useRef)(null);(0,t.useEffect)(()=>{if(!r||!e)return;let t=l.current;null===t&&(l.current=t=s());let i=!1;return t.enqueue(async()=>{if(i)return;let t=n.current;try{await r.add(e,t),a.current=t}catch(e){console.error("[@vfx-js/react] add failed:",e)}}),()=>{i=!0,t.enqueue(()=>{r.remove(e),a.current=null})}},[e,r]),(0,t.useEffect)(()=>{if(!r||!e)return;let t=l.current;null===t&&(l.current=t=s()),t.enqueue(async()=>{let t=a.current;if(t&&t!==i)try{await o(r,e,t,i,(e,t)=>r.add(e,t)),a.current=i}catch(e){console.error("[@vfx-js/react] applyDelta failed:",e)}})},[r,e,i])}],81290)},58786,59443,e=>{var t=e.i(16597),r=e.i(76137),i=e.i(36180);e.s(["f",0,function(e){let s=(0,t.useContext)(i.f),o=(0,t.useRef)(e);(0,t.useLayoutEffect)(()=>s?s.register(o.current):void(0,r.R)("transition-in","[@vfx-js/react] useTransitionIn does nothing outside <VFXTransition>."),[s])}],58786),e.s([],59443)},41570,22305,e=>{var t=e.i(61069),r=e.i(16597),i=e.i(3066),s=e.i(54057),o=e.i(36180);let n=null;function a(){let e=null!==n&&Date.now()-n.at<=1e4?n:null;return n=null,e?e.spec:null}function l(e){n={spec:e,at:Date.now()}}e.s(["n",0,l,"i",0,a,"e",0,function(e){return t=>{(function(e){if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return!1;let t=e.currentTarget?.getAttribute?.("target");return!t||"_self"===t})(t)&&l(e)}}],22305);let u={display:"contents"},f={display:"contents"},h={height:"100dvh",overflow:"hidden"};e.s(["f",0,function(e){let{pageKey:n,children:l,className:c,style:d,fullscreen:p=!0,...m}=e,g=(0,i.f)(),v=(0,s.f)(m),x=(0,r.useRef)(null),w=(0,r.useRef)(null),[y,b]=(0,r.useState)(()=>({kept:[],shown:{key:n,node:l,id:0}})),{shown:E}=y,T=(0,r.useRef)(1),R=(0,r.useRef)(new Map),S=(0,r.useRef)(n),C=(0,r.useRef)([]),P=(0,r.useRef)(null),[A]=(0,r.useState)(()=>({register:e=>(P.current=e,()=>{P.current===e&&(P.current=null)})}));(0,r.useEffect)(()=>{let e=x.current;if(!g||!e)return;let t=g.addTransition(e,v);return w.current=t,()=>{t.destroy(),w.current=null}},[g,v]);let F=(0,r.useRef)(E.id);(0,r.useLayoutEffect)(()=>{F.current=E.id;let e=C.current;for(let t of(C.current=[],e))t()},[E]),(0,r.useEffect)(()=>{if(n===S.current)return;S.current=n;let e={key:n,node:l,id:T.current++},t=w.current;t&&void 0!==n?(P.current=null,t.run(t=>new Promise(i=>{if(S.current!==n)return void i();let s=z(t);C.current.push(i),(0,r.startTransition)(()=>b(t=>({kept:s?[...t.kept,s]:t.kept,shown:e})))}),()=>a()??P.current??{}).catch(e=>{console.error("[@vfx-js/react] VFXTransition run failed:",e)})):(0,r.startTransition)(()=>b(t=>({...t,shown:e})))});let z=e=>{let t=M.current,{id:r}=t,i=R.current.get(r);if(!v.keepPlaying||!i)return null;let s=i.parentNode;return e.keepPlaying(i,e=>{F.current!==r&&(e.style.display="none"),b(e=>({...e,kept:e.kept.filter(e=>e.id!==r)}))}),i.parentNode!==s?t:null},M=(0,r.useRef)(E);M.current.id!==E.id&&(M.current=E),(void 0===n||n===E.key)&&(M.current={...E,node:l});let I=[...y.kept,M.current];return(0,t.jsx)("div",{style:u,children:(0,t.jsx)("div",{ref:x,className:c,style:p?{...h,...d}:d,children:(0,t.jsx)(o.f.Provider,{value:A,children:I.map(e=>m.keepPlaying||e!==M.current?(0,t.jsx)("div",{style:f,ref:t=>{t?R.current.set(e.id,t):R.current.delete(e.id)},children:e.node},e.id):(0,t.jsx)(r.Fragment,{children:e.node},e.id))})})})}],41570)},54057,e=>{var t=e.i(16597);e.s(["f",0,function(e){let r=(0,t.useRef)({}).current;for(let t of Object.keys(r))t in e||delete r[t];return Object.assign(r,e),r}])},36180,e=>{let t=(0,e.i(16597).createContext)(null);e.s(["f",0,t])},24979,e=>{var t=e.i(16597),r=e.i(3066),i=e.i(54057);let s={keepPlaying:()=>{}};e.s(["f",0,function(e={}){let o=(0,r.f)(),n=(0,i.f)(e),[a,l]=(0,t.useState)(null),u=(0,t.useRef)(null),[f,h]=(0,t.useTransition)(),c=(0,t.useRef)(!1),d=(0,t.useRef)([]);(0,t.useEffect)(()=>{if(!o||!a)return;let e=o.addTransition(a,n);return u.current=e,()=>{e.destroy(),u.current=null}},[o,a,n]),(0,t.useLayoutEffect)(()=>{if(f){c.current=!0;return}if(c.current){c.current=!1;let e=d.current;for(let t of(d.current=[],e))t()}},[f]);let p=(0,t.useCallback)(e=>new Promise(t=>{d.current.push(t),c.current=!1,h(e),requestAnimationFrame(()=>{c.current||t()})}),[]);return{ref:l,run:(0,t.useCallback)(async(e,t)=>{let r=u.current;r?await r.run(t=>p(()=>e(t)),t):await p(()=>e(s))},[p])}}])},3066,99984,76137,e=>{var t=e.i(16597);let r=(0,t.createContext)(null),i=(0,t.createContext)(!1);e.s(["i",0,r,"V",0,i],99984),e.i(90422);var s=e.i(61388);let o=["pixelRatio","zIndex","postEffect","autoplay"],n=null,a={},l=0,u=!1,f=!1,h=[],c=new Set;function d(){for(let e of c)e()}function p(){n&&(n.stop(),n.destroy(),n=null)}function m(){var e;if(f=!1,0===l||u)return;let t=h[h.length-1]?.config??{};n&&(e=a,o.every(r=>t[r]===e[r]))||(p(),a=t,u=null===(n=s.f.init({...t})),d())}function g(){l++,f||(f=!0,queueMicrotask(m))}function v(){--l>0||requestAnimationFrame(()=>{l>0||(p(),d())})}function x(e){return c.add(e),()=>c.delete(e)}function w(){return n}let y=new Set;e.s(["Y",0,g,"S",0,w,"z",0,v,"i",0,x,"R",0,function(e,t){y.has(e)||(y.add(e),console.warn(t))}],76137);let b=()=>null,E=()=>()=>{};e.s(["f",0,function({acquire:e=!0}={}){let s=(0,t.useContext)(i),o=(0,t.useContext)(r),n=(0,t.useSyncExternalStore)(s?E:x,w,b);return(0,t.useEffect)(()=>{if(!s&&e)return g(),v},[s,e]),s?o:n}],3066)},90422,28113,63363,18289,7150,61388,66601,35668,e=>{let t,r,i=`#version 300 es
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
`,o=i.split("\n").length,n=new Map,a=new WeakMap;class l{ease;overflow;params;#e=null;constructor(e={}){this.params=e}uniforms(e){return{}}start(e){this.#e=e}end(){this.#e=null}outputRect(e){let t=this.#e?.overflow??this.overflow;if(void 0===t||function(e,t){let[r,i,s,o]=e,[n,a,l,u]=t;return r<=n&&i<=a&&r+s>=n+l&&i+o>=a+u}(e.contentRect,e.canvasRect))return;if(!0===t)return e.canvasRect;let r=t*e.pixelRatio,[i,s,o,n]=e.contentRect;return[i-r,s-r,o+2*r,n+2*r]}render(e){var t,r;let l;if(e.holding)return void e.blit(e.src);let u=function(e){let t=n.get(e);void 0===t&&(t=`${i}
${e}
${s}`,n.set(e,t));return t}(this.frag),f=(t=e.gl,(l=a.get(t))||(l=new Set,a.set(t,l)),l);if(f.has(u)){e.cut(),e.blit(e.src);return}try{e.draw({frag:u,uniforms:{...this.uniforms(e),from:e.from,src:e.src,t:e.progress.t,reverse:+!!e.reverse,resolution:[e.dims.elementPixel[0],e.dims.elementPixel[1]],time:e.time},target:e.target})}catch(i){let t;f.add(u),r=this.name,(t=function(e){let t=e instanceof Error?e.message:String(e);if(!/compile failed|link failed/i.test(t))return null;let r=[];for(let e of t.matchAll(/ERROR:\s*\d+:(\d+):\s*(.*)/g)){let t=Number(e[1])-o;r.push(t>=1?`line ${t}: ${e[2]}`:e[2])}return r.length>0?r:[t.split("\n")[0]]}(i))?(console.error(`[VFX-JS] transition "${r}" failed to compile; cutting to the new content.
  ${t.join("\n  ")}`),console.debug(i)):console.error(`[VFX-JS] transition "${r}" failed; cutting to the new content.`,i),e.cut(),e.blit(e.src)}}}e.s(["f",0,l],28113);class u extends l{name="crossfade";frag=`
vec4 transition(vec2 uv, float t) {
  return mix(readFrom(uv), readTo(uv), t);
}
`}function f(e){return"CANVAS"===e.tagName&&(e.hasAttribute("layoutsubtree")||"drawable"===e.getAttribute("content"))}function h(e,t){e.setAttribute("layoutsubtree",""),e.setAttribute("content","drawable"),t?.setAttribute("drawable","")}function c(e){return e.currentSrc||e.src}function d(e,t){let r=e.getBoundingClientRect(),i=getComputedStyle(e);t.className=e.className,t.style.cssText=e.style.cssText,t.style.width=`${r.width}px`,t.style.height=`${r.height}px`,t.style.display="inline"===i.display?"inline-block":i.display,t.style.boxSizing="border-box"}async function p(e){let t=await fetch(e),r=await t.blob();return URL.createObjectURL(r)}async function m(e){let t=Array.from(e.querySelectorAll("img")).filter(e=>e.complete&&e.naturalWidth>0&&function(e){let t=c(e);if(!t||t.startsWith("data:"))return!1;try{return new URL(t,location.href).origin!==location.origin}catch{return!1}}(e));if(0===t.length)return()=>{};let r=new Map,i=[];return await Promise.all(t.map(async e=>{try{let t=c(e),s=await p(t);r.set(e,t),i.push(s),await new Promise(t=>{e.addEventListener("load",()=>t(),{once:!0}),e.src=s})}catch{}})),()=>{for(let[e,t]of r)e.src=t;for(let e of i)URL.revokeObjectURL(e)}}e.s(["f",0,u],63363);let g=["margin-top","margin-right","margin-bottom","margin-left"],v=new Set(["IMG","VIDEO","CANVAS","IFRAME","EMBED","OBJECT","INPUT","TEXTAREA","SELECT"]),x=["position","top","right","bottom","left","float","flex","flex-grow","flex-shrink","flex-basis","align-self","justify-self","place-self","order","grid-column","grid-column-start","grid-column-end","grid-row","grid-row-start","grid-row-end","grid-area"],w=new Set(["top","right","bottom","left"]),y=["width","height","flex-grow","flex-shrink","min-width","max-width","overflow"],b=new WeakMap,E=new WeakMap,T=new WeakMap,R=new WeakMap,S=new WeakMap,C=new WeakMap,P=new WeakMap,A=new WeakMap,F=new WeakMap,z=new WeakSet,M=new WeakMap,I=new WeakMap,L=new WeakSet,_=new WeakSet,U=/^[\d.e+-]+px$/;function k(e){if(e)for(let t of[...e])t()}function B(e,t,r){if("function"==typeof e.moveBefore)try{e.moveBefore(t,r);return}catch{}e.insertBefore(t,r)}function O(e,t=300){let r=I.get(e);if(!r)return;let i=new Promise(e=>{let i=t=>{clearTimeout(o),r.delete(s),e(t)},s=()=>i(!0),o=setTimeout(()=>i(!1),t);r.add(s)});return e.requestPaint(),i}function V(e){if(L.has(e))return()=>{};L.add(e);let t=y.map(t=>[t,e.style.getPropertyValue(t)]),r=getComputedStyle(e),i=e.getBoundingClientRect(),s=(e,t)=>U.test(e)?e:`${t}px`,o=s(r.width,i.width);return e.style.setProperty("width",o),e.style.setProperty("height",s(r.height,i.height)),e.style.setProperty("flex-grow","0"),e.style.setProperty("flex-shrink","0"),e.style.setProperty("min-width",o),e.style.setProperty("max-width",o),e.style.setProperty("overflow","hidden"),()=>{if(!L.has(e))return;for(let[r,i]of(L.delete(e),t))e.style.setProperty(r,i);let r=e.firstElementChild;if(r&&!_.has(e)){let t=Math.round(r.getBoundingClientRect().height);e.style.setProperty("height",`${t}px`)}}}function N(e){M.get(e)?.(),M.delete(e)}function D(e,t=!1){requestAnimationFrame(()=>{t||e.getContext("2d")?.clearRect(0,0,e.width,e.height),N(e)})}async function X(e,t){h(e,e.firstElementChild);let r=e.getContext("2d");if(!r)throw Error("Failed to get 2d context from layoutsubtree canvas");let{onCapture:i,maxSize:s}=t,o=new Set;I.set(e,o);let n=null,a=null,l=new Promise(e=>{a=e}),u=null,f=t=>{if(t){if(t===u)return;u=t}let l=e.firstElementChild;if(!l||0===e.width||0===e.height||0===l.getClientRects().length)return;l.hasAttribute("drawable")||l.setAttribute("drawable",""),r.clearRect(0,0,e.width,e.height),r.drawElementImage(l,0,0),function(e,t){let r=t.querySelectorAll("canvas");if(0===r.length)return;let i=t.getBoundingClientRect();if(i.width<=0||i.height<=0)return;let s=e.canvas.width/i.width,o=e.canvas.height/i.height;for(let t of r){if(0===t.width||0===t.height||!("function"==typeof t.checkVisibility?t.checkVisibility({visibilityProperty:!0,opacityProperty:!0}):"hidden"!==getComputedStyle(t).visibility))continue;let r=function(e,t,r,i){if(t.width<=0||t.height<=0)return null;let s=t.left-e.left,o=t.top-e.top;return s+t.width<=0||o+t.height<=0||s>=e.width||o>=e.height?null:[s*r,o*i,t.width*r,t.height*i]}(i,function(e){let t=e.getBoundingClientRect(),r=getComputedStyle(e),i=Number.parseFloat(r.paddingLeft)||0,s=Number.parseFloat(r.paddingRight)||0,o=Number.parseFloat(r.paddingTop)||0,n=Number.parseFloat(r.paddingBottom)||0,a=e.clientWidth>0?t.width/e.offsetWidth:1,l=e.clientHeight>0?t.height/e.offsetHeight:1;return{left:t.left+(e.clientLeft+i)*a,top:t.top+(e.clientTop+o)*l,width:Math.max(0,e.clientWidth-i-s)*a,height:Math.max(0,e.clientHeight-o-n)*l}}(t),s,o);if(r)try{e.drawImage(t,...r)}catch{}}}(r,l);let f=e.width,h=e.height;if(s&&(f>s||h>s)){let e=Math.min(s/f,s/h);f=Math.floor(f*e),h=Math.floor(h*e)}n&&n.width===f&&n.height===h||(n=new OffscreenCanvas(f,h));let c=n.getContext("2d");if(c){if(c.clearRect(0,0,f,h),c.drawImage(e,0,0,f,h),a){a(n),a=null,k(o);return}r.clearRect(0,0,e.width,e.height),i(n),k(o)}};e.onpaint=f,e.addEventListener("paint",f),E.set(e,f);let c=new ResizeObserver(t=>{for(let r of t){let t=r.devicePixelContentBoxSize?.[0];if(t)e.width=t.inlineSize,e.height=t.blockSize;else{let t=r.borderBoxSize?.[0];if(t){let r=window.devicePixelRatio;e.width=Math.round(t.inlineSize*r),e.height=Math.round(t.blockSize*r)}}}e.requestPaint()});c.observe(e,{box:"device-pixel-content-box"}),b.set(e,c);let d=e.firstElementChild;if(d){let t=new ResizeObserver(t=>{if(L.has(e)||_.has(e))return;let r=t[0].borderBoxSize?.[0];if(!r)return;let i=`${Math.round(r.blockSize)}px`;i!==e.style.height&&e.style.setProperty("height",i)});t.observe(d),T.set(e,t)}return l}function $(e){e.onpaint=null,k(I.get(e)),I.delete(e);let t=E.get(e);t&&(e.removeEventListener("paint",t),E.delete(e));let r=b.get(e);r&&(r.disconnect(),b.delete(e));let i=T.get(e);i&&(i.disconnect(),T.delete(e))}let H=["padding-left","padding-right"],W=["border-left-width","border-right-width"];function G(e,t){return e===t||U.test(e)||/^[\d.e+-]+%$/.test(e)||/^(calc|min|max|clamp)\(/.test(e)}async function q(e,t){let r=e.getBoundingClientRect(),i=function(e){let t={width:null,height:null};if("function"!=typeof e.computedStyleMap||v.has(e.tagName))return t;let r=e.computedStyleMap(),i=e=>r.get(e)?.toString()??"auto",s=i("position");if("fixed"!==s&&"absolute"!==s)return t;let o=(t,r,s)=>{let o=i(r),n=i(s);if("auto"!==i(t)||"auto"===o||"auto"===n)return null;let a=[`margin-${r}`,`margin-${s}`].map(r=>{let s=i(r);return"height"===t&&s.includes("%")?getComputedStyle(e).getPropertyValue(r):s}).filter(e=>"auto"!==e);return`calc(${["100%",o,n,...a].join(" - ")})`};return{width:o("width","left","right"),height:o("height","top","bottom")}}(e),s=i.width?null:function(e,t){let r=e=>({width:`${e}px`,minWidth:"auto",maxWidth:"none"});if("function"!=typeof e.computedStyleMap)return e.style.width.endsWith("px")?r(t.width):null;let i=e.computedStyleMap(),s=e=>i.get(e)?.toString()??"auto",o=v.has(e.tagName),n=getComputedStyle(e),a=s("width");if("auto"===a){if(!o)return null;a=n.width}if(!U.test(a))return null;let l=s("display");if(!o&&"inline"===l)return r(t.width);let u=s("min-width"),f=s("max-width");if("table"===l||"inline-table"===l||!G(u,"auto")||!G(f,"none"))return r(function(e){let t=t=>Number.parseFloat(e.getPropertyValue(t))||0,r=Number.parseFloat(e.width)||0;if("border-box"!==e.boxSizing)for(let e of[...H,...W])r+=t(e);return r}(n));let h=[...H.map(s),...W.map(e=>n.getPropertyValue(e))].filter(e=>""!==e&&!/^0(px)?$/.test(e)),c=e=>{if(0===h.length)return e;let t=[e,...h].join(" + ");return"border-box"===s("box-sizing")?`max(${e}, ${t.slice(e.length+3)})`:`calc(${t})`};return{width:c(a),minWidth:"auto"===u?"auto":c(u),maxWidth:"none"===f?"none":c(f)}}(e,r),o=document.createElement("canvas");e.hasAttribute("drawable")||z.add(e),h(o,e),o.className=e.className;let n=e.getAttribute("style");n&&o.setAttribute("style",n),o.style.setProperty("padding","0"),o.style.setProperty("border","none"),o.style.setProperty("box-sizing","content-box"),o.style.setProperty("background","transparent");let a=getComputedStyle(e),l="inline"===a.display?"block":a.display;o.style.setProperty("display",l);let u="function"==typeof e.computedStyleMap?e.computedStyleMap():null,f=e=>u?.get(e)?.toString()??a.getPropertyValue(e),c=e=>a.getPropertyValue(e),p=!!(i.width||s);for(let e of g){let t="margin-left"!==e&&"margin-right"!==e||p;o.style.setProperty(e,t?f(e):c(e))}let y="absolute"===a.position||"fixed"===a.position,b=(e,t)=>y&&"auto"===f(e)&&"auto"===f(t),E=b("left","right"),T=b("top","bottom");for(let e of x){let t=c(e);w.has(e)&&(t=("left"===e||"right"===e?E:T)?c(e):f(e)),o.style.setProperty(e,t)}i.width?o.style.setProperty("width",i.width):s?(o.style.setProperty("width",s.width),o.style.setProperty("min-width",s.minWidth),o.style.setProperty("max-width",s.maxWidth)):o.style.setProperty("width","100%"),i.height?(o.style.setProperty("height",i.height),_.add(o)):o.style.height||o.style.setProperty("height",`${r.height}px`);let I=window.devicePixelRatio;o.width=Math.round(r.width*I),o.height=Math.round(r.height*I),t.stillCover&&M.set(o,function(e,t){let r=e.getBoundingClientRect(),i=e.cloneNode(!0),s=[e,...e.querySelectorAll("*")],o=[i,...i.querySelectorAll("*")],n=[],a=[];for(let e=0;e<s.length&&e<o.length;e++){let t=s[e],r=o[e];(t.scrollTop||t.scrollLeft)&&n.push([r,t.scrollTop,t.scrollLeft]),t instanceof HTMLScriptElement?a.push([r,document.createComment("script")]):t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?a.push([r,function(e){let t=document.createElement("canvas"),r=e instanceof HTMLVideoElement?e.videoWidth:e.width,i=e instanceof HTMLVideoElement?e.videoHeight:e.height;t.width=Math.max(1,r),t.height=Math.max(1,i),d(e,t);try{t.getContext("2d")?.drawImage(e,0,0,t.width,t.height)}catch{}return t}(t)]):t instanceof HTMLIFrameElement?a.push([r,function(e){let t=document.createElement("div");return d(e,t),t}(t)]):t instanceof HTMLInputElement&&r instanceof HTMLInputElement?(r.value=t.value,r.checked=t.checked):t instanceof HTMLTextAreaElement&&r instanceof HTMLTextAreaElement?r.value=t.value:t instanceof HTMLSelectElement&&r instanceof HTMLSelectElement?r.selectedIndex=t.selectedIndex:t instanceof HTMLMediaElement&&r.removeAttribute("autoplay")}for(let[e,t]of a)e.replaceWith(t);i.setAttribute("aria-hidden","true");let l=i.style;l.setProperty("position","fixed"),l.setProperty("left",`${r.left}px`),l.setProperty("top",`${r.top}px`),l.setProperty("width",`${r.width}px`),l.setProperty("height",`${r.height}px`),l.setProperty("box-sizing","border-box"),l.setProperty("margin","0"),l.setProperty("pointer-events","none"),l.setProperty("z-index",t.toString()),e.parentNode?.insertBefore(i,e);let u=i.getBoundingClientRect();for(let[e,t,i]of((u.left!==r.left||u.top!==r.top)&&(l.setProperty("left",`${2*r.left-u.left}px`),l.setProperty("top",`${2*r.top-u.top}px`)),n))e.scrollTop=t,e.scrollLeft=i;return function(e,t){let r=e[0],i=t[0];if(!r||!i||"function"!=typeof r.getAnimations)return;let s=(e,t)=>{if(!("animationName"in e))return null;let r=e.effect,i=r?.target,s=i?t.get(i):void 0;return void 0===s?null:`${s}|${r?.pseudoElement??""}|${e.animationName}`},o=new Map(t.map((e,t)=>[e,t])),n=new Map;for(let e of i.getAnimations({subtree:!0})){let t=s(e,o);t&&n.set(t,e)}let a=new Map(e.map((e,t)=>[e,t]));for(let e of r.getAnimations({subtree:!0})){let t=s(e,a),r=t&&n.get(t);r&&(r.currentTime=e.currentTime,r.pause())}}(s,o),()=>{i.remove()}}(e,t.stillCover.zIndex)),R.set(e,e.style.margin),S.set(e,e.style.width),C.set(e,e.style.boxSizing),e.parentNode?.insertBefore(o,e),getComputedStyle(o).display,B(o,e,null),e.style.setProperty("margin","0"),e.style.setProperty("width","100%"),e.style.setProperty("box-sizing","border-box"),(i.width||i.height)&&(P.set(e,e.style.position),e.style.setProperty("position","static")),i.height&&(A.set(e,e.style.height),e.style.setProperty("height","100%"));let L=await m(e);F.set(o,L);let k=await X(o,t);return{canvas:o,initialCapture:k}}function K(e,t){$(e),N(e);let r=F.get(e);r&&(r(),F.delete(e));let i=e.parentNode;i&&B(i,t,e),e.remove(),z.has(t)&&(t.removeAttribute("drawable"),z.delete(t));let s=R.get(t);void 0!==s&&(t.style.margin=s,R.delete(t));let o=S.get(t);void 0!==o&&(t.style.width=o,S.delete(t));let n=C.get(t);void 0!==n&&(t.style.boxSizing=n,C.delete(t));let a=P.get(t);void 0!==a&&(t.style.position=a,P.delete(t));let l=A.get(t);void 0!==l&&(t.style.height=l,A.delete(t))}function J(){if(void 0!==t)return t;try{let e=document.createElement("canvas"),r=e.getContext("2d");t=null!==r&&"function"==typeof r.drawElementImage&&"function"==typeof e.requestPaint}catch{t=!1}return t}e.s(["i",0,V,"I",0,B,"n",0,D,"a",0,O,"S",0,X,"F",0,$,"Y",0,K,"c",0,q],18289),e.s(["f",0,J],7150);class j{gl;texture;wrapS="clamp";wrapT="clamp";minFilter="linear";magFilter="linear";needsUpdate=!0;premultiplyAlpha=!1;source=null;#t;#r=!1;#i;#s;constructor(e,t,r){this.#t=e,this.gl=e.gl;let i=r?.externalHandle;this.#s=void 0!==i,void 0!==i?(this.texture=i,this.#r=!0,this.needsUpdate=!1):this.#o(),t&&(this.source=t),this.#i=r?.autoRegister!==!1&&!this.#s,this.#i&&e.addResource(this)}#o(){let e=this.gl.createTexture();if(!e)throw Error("[VFX-JS] Failed to create texture");this.texture=e}restore(){this.#s||(this.#o(),this.#r=!1,this.needsUpdate=!0)}bind(e){let t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture),this.needsUpdate&&(this.#n(),this.needsUpdate=!1)}#n(){let e=this.gl,t=this.source;if(e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,4),t)try{e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t)}catch(e){console.error(e)}else if(!this.#r){let t=new Uint8Array([0,0,0,0]);e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,t)}this.#a(),this.#r=!0}#a(){let e=this.gl;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,Y(e,this.wrapS)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,Y(e,this.wrapT)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,Z(e,this.minFilter)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,Z(e,this.magFilter))}dispose(){this.#i&&this.#t.removeResource(this),this.#s||this.gl.deleteTexture(this.texture)}}function Y(e,t){return"repeat"===t?e.REPEAT:"mirror"===t?e.MIRRORED_REPEAT:e.CLAMP_TO_EDGE}function Z(e,t){return"nearest"===t?e.NEAREST:e.LINEAR}function Q(e){return new Promise((t,r)=>{let i=new Image;i.crossOrigin="anonymous",i.onload=()=>t(i),i.onerror=r,i.src=e})}class ee{gl;width;height;float;mipmap;fbo;texture;#t;constructor(e,t,r,i={}){this.#t=e,this.gl=e.gl,this.width=Math.max(1,Math.floor(t)),this.height=Math.max(1,Math.floor(r)),this.float=i.float??!1,this.mipmap=i.mipmap??!1,this.texture=new j(e,void 0,{autoRegister:!1});let s=i.wrap;void 0!==s&&("string"==typeof s?(this.texture.wrapS=s,this.texture.wrapT=s):(this.texture.wrapS=s[0],this.texture.wrapT=s[1])),void 0!==i.filter&&(this.texture.minFilter=i.filter,this.texture.magFilter=i.filter),this.#l(),e.addResource(this)}setSize(e,t){let r=Math.max(1,Math.floor(e)),i=Math.max(1,Math.floor(t));(r!==this.width||i!==this.height)&&(this.width=r,this.height=i,this.#l())}restore(){this.texture.restore(),this.#l()}dispose(){this.#t.removeResource(this),this.gl.deleteFramebuffer(this.fbo),this.texture.dispose()}generateMipmaps(){if(!this.mipmap)return;let e=this.gl;e.bindTexture(e.TEXTURE_2D,this.texture.texture),e.generateMipmap(e.TEXTURE_2D),e.bindTexture(e.TEXTURE_2D,null)}#l(){let e=this.gl,t=this.fbo,r=e.createFramebuffer();if(!r)throw Error("[VFX-JS] Failed to create framebuffer");this.fbo=r;let i=this.texture.texture;e.bindTexture(e.TEXTURE_2D,i);let s=this.#t.floatLinearFilter;if(this.float&&s&&!this.#t.floatBlend)throw Error("[VFX-JS] EXT_float_blend is not supported.");let o=this.float?s?e.RGBA32F:e.RGBA16F:e.RGBA8,n=this.float?s?e.FLOAT:e.HALF_FLOAT:e.UNSIGNED_BYTE;if(this.mipmap){let t=Math.floor(Math.log2(Math.max(this.width,this.height)))+1,r=this.width,i=this.height;for(let s=0;s<t;s++)e.texImage2D(e.TEXTURE_2D,s,o,r,i,0,e.RGBA,n,null),r=Math.max(1,r>>1),i=Math.max(1,i>>1)}else e.texImage2D(e.TEXTURE_2D,0,o,this.width,this.height,0,e.RGBA,n,null);let a="nearest"===this.texture.minFilter?e.NEAREST:e.LINEAR,l="nearest"===this.texture.magFilter?e.NEAREST:e.LINEAR,u=this.mipmap?"nearest"===this.texture.minFilter?e.NEAREST_MIPMAP_NEAREST:e.LINEAR_MIPMAP_LINEAR:a,f=et(e,this.texture.wrapS),h=et(e,this.texture.wrapT);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,u),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,h),e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null),this.texture.needsUpdate=!1,this.texture.source=null,t&&e.deleteFramebuffer(t)}}function et(e,t){return"repeat"===t?e.REPEAT:"mirror"===t?e.MIRRORED_REPEAT:e.CLAMP_TO_EDGE}function er(e,t,r,i){return{x:e.left+r,y:t-i-e.bottom,w:e.right-e.left,h:e.bottom-e.top}}class ei{#u;#f;#h;#c;constructor(e,t,r,i,s,o={}){this.#u=t,this.#f=r,this.#h=i;let n=t*i,a=r*i,l={float:s,wrap:o.wrap,filter:o.filter,mipmap:o.mipmap};this.#c=[new ee(e,n,a,l),new ee(e,n,a,l)]}get texture(){return this.#c[0].texture}get target(){return this.#c[1]}resize(e,t){if(e===this.#u&&t===this.#f)return;this.#u=e,this.#f=t;let r=e*this.#h,i=t*this.#h;this.#c[0].setSize(r,i),this.#c[1].setSize(r,i)}swap(){this.#c=[this.#c[1],this.#c[0]]}getViewport(){return{x:0,y:0,w:this.#u,h:this.#f}}dispose(){this.#c[0].dispose(),this.#c[1].dispose()}}let es=Object.freeze({__brand:"EffectQuad"});class eo{gl;vao;#t;#d;#p;#m=[];#g=null;mode;indexType=0;hasIndices=!1;drawCount=0;drawStart=0;instanceCount;#i=!1;constructor(e,t,r){this.#t=e,this.gl=e.gl,this.#d=t,this.#p=r,this.mode=function(e,t){switch(t){case"lines":return e.LINES;case"lineStrip":return e.LINE_STRIP;case"points":return e.POINTS;default:return e.TRIANGLES}}(this.gl,t.mode),this.instanceCount=t.instanceCount??0,this.#l(),e.addResource(this),this.#i=!0}#l(){let e=this.gl,t=e.createVertexArray();if(!t)throw Error("[VFX-JS] Failed to create VAO");this.vao=t,e.bindVertexArray(t);let r=this.#p.program,i=null;for(let[t,s]of Object.entries(this.#d.attributes)){let o=!ArrayBuffer.isView(s)||s instanceof DataView?{name:t,data:s.data,itemSize:s.itemSize,normalized:s.normalized??!1,perInstance:s.perInstance??!1}:{name:t,data:s,itemSize:2,normalized:!1,perInstance:!1},n=e.getAttribLocation(r,o.name);if(n<0)continue;let a=e.createBuffer();if(!a)throw Error(`[VFX-JS] Failed to create VBO for "${o.name}"`);this.#m.push(a),e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,o.data,e.STATIC_DRAW);let l=function(e,t){if(t instanceof Float32Array)return e.FLOAT;if(t instanceof Uint8Array)return e.UNSIGNED_BYTE;if(t instanceof Uint16Array)return e.UNSIGNED_SHORT;if(t instanceof Uint32Array)return e.UNSIGNED_INT;if(t instanceof Int8Array)return e.BYTE;if(t instanceof Int16Array)return e.SHORT;if(t instanceof Int32Array)return e.INT;throw Error("[VFX-JS] Unsupported attribute typed array")}(e,o.data);e.enableVertexAttribArray(n),l===e.FLOAT||l===e.HALF_FLOAT||o.normalized?e.vertexAttribPointer(n,o.itemSize,l,o.normalized,0,0):e.vertexAttribIPointer(n,o.itemSize,l,0,0),o.perInstance&&e.vertexAttribDivisor(n,1),"position"===t&&null===i&&(i=o.data.length/o.itemSize)}let s=0,o=this.#d.indices;if(o){let t=e.createBuffer();if(!t)throw Error("[VFX-JS] Failed to create IBO");this.#g=t,e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),e.bufferData(e.ELEMENT_ARRAY_BUFFER,o,e.STATIC_DRAW),this.hasIndices=!0,this.indexType=o instanceof Uint32Array?e.UNSIGNED_INT:e.UNSIGNED_SHORT,s=o.length}else this.hasIndices=!1;e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null),this.#g&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null);let n=this.hasIndices?s:i??0,a=this.#d.drawRange;this.drawStart=a?.start??0,this.drawCount=a?.count!==void 0?a.count:Math.max(0,n-this.drawStart)}restore(){this.#m=[],this.#g=null,this.#l()}draw(){let e=this.gl;e.bindVertexArray(this.vao),this.hasIndices?this.instanceCount>0?e.drawElementsInstanced(this.mode,this.drawCount,this.indexType,this.drawStart*(this.indexType===e.UNSIGNED_INT?4:2),this.instanceCount):e.drawElements(this.mode,this.drawCount,this.indexType,this.drawStart*(this.indexType===e.UNSIGNED_INT?4:2)):this.instanceCount>0?e.drawArraysInstanced(this.mode,this.drawStart,this.drawCount,this.instanceCount):e.drawArrays(this.mode,this.drawStart,this.drawCount)}dispose(){this.#i&&(this.#t.removeResource(this),this.#i=!1);let e=this.gl;for(let t of(e.deleteVertexArray(this.vao),this.#m))e.deleteBuffer(t);this.#g&&e.deleteBuffer(this.#g),this.#m=[],this.#g=null}}class en{#t;#v;#x=new WeakMap;#w=new Set;constructor(e,t){this.#t=e,this.#v=t}get quad(){return this.#v}resolve(e,t){let r=this.#x.get(e);r||(r=new Map,this.#x.set(e,r));let i=r.get(t);return i||(i=new eo(this.#t,e,t),r.set(t,i),this.#w.add(i)),i}release(e){let t=this.#x.get(e);if(t){for(let e of t.values())e.dispose(),this.#w.delete(e);this.#x.delete(e)}}dispose(){for(let e of this.#w)e.dispose();this.#w.clear()}}class ea{x=0;y=0;constructor(e=0,t=0){this.x=e,this.y=t}set(e,t){return this.x=e,this.y=t,this}}class el{x=0;y=0;z=0;w=0;constructor(e=0,t=0,r=0,i=0){this.x=e,this.y=t,this.z=r,this.w=i}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}}function eu(e){return/#version\s+300\s+es\b/.test(e)?"300 es":/#version\s+100\b/.test(e)||/\bgl_FragColor\b|\btexture2D\b|\bvarying\b|\battribute\b/.test(e)?"100":"300 es"}class ef{gl;program;#t;#y;#b;#E;#T=new Map;constructor(e,t,r,i){this.#t=e,this.gl=e.gl,this.#y=t,this.#b=r,this.#E=i??eu(r),this.#R(),e.addResource(this)}#R(){let e=this.gl,t=eh(e,e.VERTEX_SHADER,ec(this.#y,this.#E)),r=eh(e,e.FRAGMENT_SHADER,ec(this.#b,this.#E)),i=e.createProgram();if(!i)throw Error("[VFX-JS] Failed to create program");if(e.attachShader(i,t),e.attachShader(i,r),e.bindAttribLocation(i,0,"position"),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){let s=e.getProgramInfoLog(i)??"";throw e.deleteShader(t),e.deleteShader(r),e.deleteProgram(i),Error(`[VFX-JS] Program link failed: ${s}`)}e.detachShader(i,t),e.detachShader(i,r),e.deleteShader(t),e.deleteShader(r),this.program=i,this.#T.clear();let s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let t=0;t<s;t++){let r=e.getActiveUniform(i,t);if(!r)continue;let s=r.name.replace(/\[0\]$/,""),o=e.getUniformLocation(i,r.name);o&&this.#T.set(s,{location:o,type:r.type,size:r.size})}}restore(){this.#R()}use(){this.gl.useProgram(this.program)}hasUniform(e){return this.#T.has(e)}uploadUniforms(e){let t=this.gl,r=0;for(let[s,o]of this.#T){let n=e[s];if(!n)continue;let a=n.value;if(null!=a){var i;if(35678===(i=o.type)||36298===i||36306===i||35682===i){a instanceof j&&(a.bind(r),t.uniform1i(o.location,r),r++);continue}a instanceof j||function(e,t,r){let i=t.location,s=t.size>1;switch(t.type){case e.FLOAT:s?e.uniform1fv(i,r):e.uniform1f(i,r);return;case e.FLOAT_VEC2:s?e.uniform2fv(i,r):r instanceof ea?e.uniform2f(i,r.x,r.y):e.uniform2f(i,r[0],r[1]);return;case e.FLOAT_VEC3:s?e.uniform3fv(i,r):e.uniform3f(i,r[0],r[1],r[2]);return;case e.FLOAT_VEC4:s?e.uniform4fv(i,r):r instanceof el?e.uniform4f(i,r.x,r.y,r.z,r.w):e.uniform4f(i,r[0],r[1],r[2],r[3]);return;case e.INT:s?e.uniform1iv(i,r):e.uniform1i(i,r);return;case e.INT_VEC2:s?e.uniform2iv(i,r):e.uniform2i(i,r[0],r[1]);return;case e.INT_VEC3:s?e.uniform3iv(i,r):e.uniform3i(i,r[0],r[1],r[2]);return;case e.INT_VEC4:s?e.uniform4iv(i,r):e.uniform4i(i,r[0],r[1],r[2],r[3]);return;case e.BOOL:s?e.uniform1iv(i,r):e.uniform1i(i,+!!r);return;case e.BOOL_VEC2:s?e.uniform2iv(i,r):e.uniform2i(i,+!!r[0],+!!r[1]);return;case e.BOOL_VEC3:s?e.uniform3iv(i,r):e.uniform3i(i,+!!r[0],+!!r[1],+!!r[2]);return;case e.BOOL_VEC4:s?e.uniform4iv(i,r):e.uniform4i(i,+!!r[0],+!!r[1],+!!r[2],+!!r[3]);return;case e.FLOAT_MAT2:e.uniformMatrix2fv(i,!1,r);return;case e.FLOAT_MAT3:e.uniformMatrix3fv(i,!1,r);return;case e.FLOAT_MAT4:e.uniformMatrix4fv(i,!1,r);return;case e.UNSIGNED_INT:s?e.uniform1uiv(i,r):e.uniform1ui(i,r);return;case e.UNSIGNED_INT_VEC2:s?e.uniform2uiv(i,r):e.uniform2ui(i,r[0],r[1]);return;case e.UNSIGNED_INT_VEC3:s?e.uniform3uiv(i,r):e.uniform3ui(i,r[0],r[1],r[2]);return;case e.UNSIGNED_INT_VEC4:s?e.uniform4uiv(i,r):e.uniform4ui(i,r[0],r[1],r[2],r[3]);return;default:ed.has(t.type)||(ed.add(t.type),console.warn(`[VFX-JS] Unsupported uniform type 0x${t.type.toString(16)}; skipping upload.`));return}}(t,o,a)}}}dispose(){this.#t.removeResource(this),this.gl.deleteProgram(this.program)}}function eh(e,t,r){let i=e.createShader(t);if(!i)throw Error("[VFX-JS] Failed to create shader");if(e.shaderSource(i,r),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(i)??"";throw e.deleteShader(i),Error(`[VFX-JS] Shader compile failed: ${t}

${r}`)}return i}function ec(e,t){return e.replace(/^\s+/,"").startsWith("#version")||"100"===t?e:`#version 300 es
${e}`}let ed=new Set;class ep{gl;program;uniforms;blend;constructor(e,t,r,i,s,o){this.gl=e.gl,this.program=new ef(e,t,r,o),this.uniforms=i,this.blend=s}dispose(){this.program.dispose()}}function em(e,t){"none"===t?e.disable(e.BLEND):(e.enable(e.BLEND),e.blendEquation(e.FUNC_ADD),"premultiplied"===t?e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA):"additive"===t?e.blendFuncSeparate(e.ONE,e.ONE,e.ONE,e.ONE):e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA))}let eg=Symbol.for("@vfx-js/effect.resolve-texture"),ev=Symbol.for("@vfx-js/effect.resolve-rt"),ex=`#version 300 es
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
`,ew=`
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
`,ey=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D src;
void main() {
    outColor = texture(src, uv);
}
`,eb=`
precision highp float;
varying vec2 uv;
uniform sampler2D src;
void main() {
    gl_FragColor = texture2D(src, uv);
}
`,eE=`#version 300 es
precision highp float;
in vec2 uvSrc;
out vec4 outColor;
uniform sampler2D src;
void main() {
    bool inside = all(greaterThanEqual(uvSrc, vec2(0.0))) && all(lessThanEqual(uvSrc, vec2(1.0)));
    outColor = inside ? texture(src, uvSrc) : vec4(0.0);
}
`,eT=`
precision highp float;
varying vec2 uvSrc;
uniform sampler2D src;
void main() {
    bool inside = all(greaterThanEqual(uvSrc, vec2(0.0))) && all(lessThanEqual(uvSrc, vec2(1.0)));
    gl_FragColor = inside ? texture2D(src, uvSrc) : vec4(0.0);
}
`;class eR{#S;#C;#h;#P;#A;#F=[];#z=[];#M=[];#I=[];#L="init";#_=!1;#U;#k;#B;constructor(e,t,r,i,s,o){this.#S=e,this.#C=e.gl,this.#h=r,this.#P=o,this.#A=new en(e,t),this.#k={outputBufferW:1,outputBufferH:1,canvasBufferSize:[1,1],outputViewport:{x:0,y:0,w:1,h:1},elementBufferW:1,elementBufferH:1,contentRectUv:[0,0,1,1],srcRectUv:[0,0,1,1]};let n={time:0,deltaTime:0,pixelRatio:r,resolution:[1,1],mouse:[0,0],mouseViewport:[0,0],intersection:0,enterTime:0,leaveTime:0,enterProgress:0,leaveProgress:0,src:i,target:null,uniforms:{},vfxProps:s,dims:{element:[1,1],elementPixel:[1,1],canvas:[1,1],canvasPixel:[1,1],pixelRatio:r,contentRect:[0,0,1,1],srcRect:[0,0,1,1],canvasRect:[0,0,1,1]},quad:es,gl:this.#C,createRenderTarget:e=>this.#O(e),releaseGeometry:e=>this.#A.release(e),wrapTexture:(e,t)=>this.#V(e,t),draw:e=>this.#N(e),blit:(e,t,r)=>this.#D(e,t,r),clear:e=>this.#X(e),resetState:()=>this.#$(),onContextRestored:e=>{let t=this.#S.onContextRestored(e);return this.#I.push(t),t}};this.#B=n}get ctx(){return this.#B}setPhase(e){this.#L=e}setFrameDims(e){for(let t of(this.#k=e,this.#B.resolution=[e.canvasBufferSize[0],e.canvasBufferSize[1]],this.#M))t.resolver.resize?.(e.outputBufferW,e.outputBufferH)}setEffectDims(e){this.#B.dims=e}setFrameState(e){let t=this.#B;t.time=e.time,t.deltaTime=e.deltaTime,t.mouse=e.mouse,t.mouseViewport=e.mouseViewport,t.intersection=e.intersection,t.enterTime=e.enterTime,t.leaveTime=e.leaveTime,t.enterProgress=e.enterProgress,t.leaveProgress=e.leaveProgress,t.uniforms=e.uniforms}setSrc(e){this.#B.src=e}setOutput(e){this.#B.target=e}passthroughCopy(e,t,r){let i=this.#L;this.#L="render";let s=this.#B.target;this.#B.target=t;try{let i=this.#k.outputViewport;this.#k.outputViewport={...r};let s=this.#B.vfxProps.glslVersion;this.#H({frag:"100"===s?eb:ey,uniforms:{src:e},target:t}),this.#k.outputViewport=i}finally{this.#B.target=s,this.#L=i}}clearRt(e){let t=this.#C,r=e[ev];t.bindFramebuffer(t.FRAMEBUFFER,r.getWriteFbo().fbo),t.viewport(0,0,e.width,e.height),t.clearColor(0,0,0,0),t.disable(t.SCISSOR_TEST),t.clear(t.COLOR_BUFFER_BIT),t.bindFramebuffer(t.FRAMEBUFFER,null)}#O(e){let t,r,i,s,o=e?.persistent??!1,n=e?.float??!1,a=eS(e?.wrap),l=e?.filter,u=e?.mipmap??!1,f=!1!==u,h=!0===u,c=e?.size,d=c?c[0]:this.#k.outputBufferW,p=c?c[1]:this.#k.outputBufferH;if(o){let e=c?1:this.#h,s=c?d:d/e,o=c?p:p/e,u=new ei(this.#S,s,o,e,n,{wrap:a,filter:l,mipmap:f});t={getReadTexture:()=>u.texture,getWriteFbo:()=>u.target,swap:()=>u.swap(),resize:c?void 0:(e,t)=>{u.resize(e/this.#h,t/this.#h)},dispose:()=>u.dispose()},f&&(t.regenerateMipmaps=()=>u.target.generateMipmaps(),t.mipmapAutoRegen=h),r=()=>u.target.width,i=()=>u.target.height}else{let e=new ee(this.#S,d,p,{float:n,wrap:a,filter:l,mipmap:f});t={getReadTexture:()=>e.texture,getWriteFbo:()=>e,resize:c?void 0:(t,r)=>e.setSize(t,r),dispose:()=>e.dispose()},f&&(t.regenerateMipmaps=()=>e.generateMipmaps(),t.mipmapAutoRegen=h),r=()=>e.width,i=()=>e.height}let m=eP(t,r,i,()=>this.#W(s));return s={handle:m,resolver:t},this.#z.push(s),c||this.#M.push(s),m}#W(e){let t=this.#z.indexOf(e);if(t<0)return;this.#z.splice(t,1);let r=this.#M.indexOf(e);r>=0&&this.#M.splice(r,1),e.resolver.dispose?.()}#V(e,t){var r;let i,s,o,n,a=eS(t?.wrap),l=t?.filter,u=null,f=(r=e,!!(i=globalThis.WebGLTexture)&&"function"==typeof i&&r instanceof i||void 0===r.width&&void 0===r.naturalWidth&&void 0===r.videoWidth);if(f){if(!t?.size)throw Error("[VFX-JS] wrapTexture(WebGLTexture) requires opts.size");let[r,i]=t.size;s=new j(this.#S,void 0,{autoRegister:!1,externalHandle:e}),o=()=>r,n=()=>i}else{s=new j(this.#S,e);let r=t?.size,i=t=>r?"w"===t?r[0]:r[1]:"u">typeof HTMLImageElement&&e instanceof HTMLImageElement?"w"===t?e.naturalWidth:e.naturalHeight:"u">typeof HTMLVideoElement&&e instanceof HTMLVideoElement?"w"===t?e.videoWidth:e.videoHeight:"w"===t?e.width:e.height;o=()=>i("w"),n=()=>i("h");let a="u">typeof HTMLVideoElement&&e instanceof HTMLVideoElement||"u">typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"u">typeof OffscreenCanvas&&e instanceof OffscreenCanvas;(t?.autoUpdate??a)&&(u=()=>{s.needsUpdate=!0})}s.wrapS=a[0],s.wrapT=a[1],void 0!==l&&(s.minFilter=l,s.magFilter=l),this.#F.push(s),u&&this.#G.push(u);let h=!1;return eC(()=>s,o,n,()=>{if(h)return;h=!0;let e=this.#F.indexOf(s);if(-1!==e&&this.#F.splice(e,1),u){let e=this.#G.indexOf(u);-1!==e&&this.#G.splice(e,1)}s.dispose()},f?void 0:()=>{h||(s.needsUpdate=!0)})}#G=[];tickAutoUpdates(){for(let e of this.#G)e()}#N(e){if("render"!==this.#L){"update"!==this.#L||this.#_||(this.#_=!0,console.warn("[VFX-JS] ctx.draw() called in update(); ignored. Move draws to render()."));return}this.#H(e)}#D(e,t,r){if("render"!==this.#L){"update"!==this.#L||this.#_||(this.#_=!0,console.warn("[VFX-JS] ctx.blit() called in update(); ignored. Move draws to render()."));return}let i="100"===this.#B.vfxProps.glslVersion?eT:eE;this.#H({frag:i,uniforms:{src:e},target:t,blend:r?.blend,swap:r?.swap})}#X(e){if("render"!==this.#L){"update"!==this.#L||this.#_||(this.#_=!0,console.warn("[VFX-JS] ctx.clear() called in update(); ignored. Move draws to render()."));return}let t=this.#C,r=this.#B.target,i=null==e?r:e,s=null===i||i===r;if(t.clearColor(0,0,0,0),s){let e=null===i?null:i[ev].getWriteFbo().fbo,r=this.#k.outputViewport;t.bindFramebuffer(t.FRAMEBUFFER,e),t.enable(t.SCISSOR_TEST),t.scissor(r.x,r.y,r.w,r.h),t.clear(t.COLOR_BUFFER_BIT),t.disable(t.SCISSOR_TEST),t.bindFramebuffer(t.FRAMEBUFFER,null);return}let o=i[ev];t.disable(t.SCISSOR_TEST);let n=()=>{t.bindFramebuffer(t.FRAMEBUFFER,o.getWriteFbo().fbo),t.clear(t.COLOR_BUFFER_BIT)};n(),o.swap&&(o.swap(),n(),o.swap()),t.bindFramebuffer(t.FRAMEBUFFER,null)}#$(){if("disposed"===this.#L||this.#S.isContextLost)return;let e=this.#C;e.bindFramebuffer(e.FRAMEBUFFER,null),e.drawBuffers([e.BACK]),e.readBuffer(e.BACK),e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),e.disable(e.DEPTH_TEST),e.disable(e.CULL_FACE),e.disable(e.STENCIL_TEST),e.disable(e.SCISSOR_TEST),e.disable(e.BLEND),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.RASTERIZER_DISCARD),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.disable(e.SAMPLE_COVERAGE),e.depthMask(!0),e.clearColor(0,0,0,0),e.depthFunc(e.LESS),e.colorMask(!0,!0,!0,!0),e.stencilMask(0xffffffff),e.frontFace(e.CCW),e.cullFace(e.BACK),e.useProgram(null),e.bindVertexArray(null),e.bindTransformFeedback(e.TRANSFORM_FEEDBACK,null),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),e.bindBuffer(e.PIXEL_UNPACK_BUFFER,null),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBuffer(e.COPY_READ_BUFFER,null),e.bindBuffer(e.COPY_WRITE_BUFFER,null);let t=this.#q();for(let r=0;r<t;r++)e.bindSampler(r,null);e.activeTexture(e.TEXTURE0),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0)}#q(){if(void 0===this.#U){let e=this.#C,t=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);this.#U="number"==typeof t&&t>0?t:16}return this.#U}#H(e){let t,r,i,s,o,n,a,l=this.#C,u=e.vert??("100"===this.#B.vfxProps.glslVersion?ew:ex),f=this.#P.get(u,e.frag,this.#B.vfxProps.glslVersion),h=this.#B.target,c=void 0===e.target||null===e.target?h:e.target,d=null===c||c===h;if(null===c)t=null,r=this.#k.outputViewport.x,i=this.#k.outputViewport.y,s=this.#k.outputViewport.w,o=this.#k.outputViewport.h;else{let e=c[ev];t=e.getWriteFbo().fbo,d?(r=this.#k.outputViewport.x,i=this.#k.outputViewport.y,s=this.#k.outputViewport.w,o=this.#k.outputViewport.h):(r=0,i=0,s=c.width,o=c.height),n=e.swap,e.mipmapAutoRegen&&(a=e.regenerateMipmaps)}l.bindFramebuffer(l.FRAMEBUFFER,t),l.viewport(r,i,s,o),l.disable(l.SCISSOR_TEST),em(l,e.blend??(null===c?"premultiplied":"none")),f.use();let p=this.#K(e.uniforms);f.uploadUniforms(p);let m=e.geometry??es;m===es?this.#A.quad.draw():this.#A.resolve(m,f).draw(),a?.(),n&&!1!==e.swap&&n()}#K(e){let t={};if(t.contentRectUv={value:this.#k.contentRectUv},t.srcRectUv={value:this.#k.srcRectUv},!e)return t;for(let[r,i]of Object.entries(e))t[r]=function(e){if("object"==typeof e&&null!==e&&"__brand"in e)return"EffectRenderTarget"===e.__brand?{value:e[ev].getReadTexture()}:{value:e[eg]()};return{value:e}}(i);return t}dispose(){for(let e of(this.#L="disposed",this.#I))e();for(let e of(this.#I=[],this.#z))e.resolver.dispose?.();for(let e of(this.#z=[],this.#M=[],this.#F))e.dispose();this.#F=[],this.#A.dispose(),this.#G=[]}}function eS(e){return void 0===e?["clamp","clamp"]:"string"==typeof e?[e,e]:[e[0],e[1]]}function eC(e,t,r,i,s){let o={__brand:"EffectTexture",get width(){return t()},get height(){return r()},dispose(){i?.()},update(){s?.()}};return Object.defineProperty(o,eg,{value:e}),o}function eP(e,t,r,i){let s={__brand:"EffectRenderTarget",get width(){return t()},get height(){return r()},dispose:i??(()=>{}),generateMipmaps:()=>e.regenerateMipmaps?.()};return Object.defineProperty(s,ev,{value:e}),s}function eA(e){return eP({getReadTexture:()=>e.texture,getWriteFbo:()=>e},()=>e.width,()=>e.height)}let eF={t:0,x:0};class ez{enabled=!1;#J=null;#j=[0,0];#Y=[];#Z=!1;#Q=null;#ee=null;#et=eF;#er=null;#ei=null;#es=null;#eo(){let e=this.#ei,t=this.#er;this.#ei=null,this.#er=null;try{e?.()}finally{t?.()}}snapshot(){return this.#eo(),this.#es=null,this.#Q=null,this.enabled=!0,new Promise(e=>this.#Y.push(e))}start(e){return this.#eo(),this.#Q=e,this.#ei=e.onEnd??null,this.#ee=null,this.#et=eF,this.#Z=!1,this.enabled=null!==this.#es,new Promise(e=>{this.#er=e})}cancel(){this.#eo(),this.#es=null,this.#Q=null,this.#Z=!1,this.enabled=!1,this.#en()}#en(){let e=this.#Y;for(let t of(this.#Y=[],e))t()}setLiveSource(e){this.#es=e,e&&(this.#Z||this.#Q)&&(this.enabled=!0)}get frame(){let e=this.#J;return e&&(this.#Z||this.#Q)?{from:e,progress:this.#et,holding:null===this.#Q}:null}cut(){this.#Q&&(this.#Q=null,this.#eo())}update(e){let t=this.#Q;if(!t)return;null===this.#ee&&(this.#ee=e.time);let r=(e.time-this.#ee)/t.duration;if(r>=1){this.#Q=null,this.#eo();return}let i=Math.max(r,0);this.#et={t:function(e,t){return"function"==typeof e?e(t):"linear"===e?t:t*t*(3-2*t)}(t.ease,i),x:i}}#ea(e){let[t,r]=e.dims.elementPixel;return this.#J&&this.#j[0]===t&&this.#j[1]===r||(this.#J?.dispose(),this.#J=e.createRenderTarget({size:[t,r]}),this.#j=[t,r]),this.#J}render(e){this.#Y.length>0&&(e.blit(e.src,this.#ea(e)),this.#Z=!0,this.#en());let t=this.#es?.()??null;(t&&(this.#Z||this.#Q)&&e.blit(t,this.#ea(e)),this.#J&&this.#Z)?e.blit(this.#J):(this.#es&&this.#Q||(this.enabled=!1),e.blit(e.src))}dispose(){this.#es=null,this.#J=null,this.#j=[0,0],this.#eo(),this.#en()}}class eM{effect;#el;#e=null;constructor(e,t){this.effect=e,this.#el=t}get enabled(){return null!==this.#e&&"function"==typeof this.effect.render&&!1!==this.effect.enabled}start(e){this.#e=e,this.effect.start?.(e)}end(){null!==this.#e&&(this.#e=null,this.effect.end?.())}#eu(e){let t=this.#el.frame,r=this.#e;return t&&r?{...e,from:t.from,progress:t.progress,holding:t.holding,reverse:r.reverse,run:r,cut:()=>this.#el.cut()}:null}init(e){return this.effect.init?.(e)}update(e){let t=this.#el.frame;if(!t||t.holding)return;let r=this.#eu(e);r&&this.effect.update?.(r)}render(e){let t=this.#eu(e);t&&this.effect.render?this.effect.render(t):e.blit(e.src)}outputRect(e){return this.#e?this.effect.outputRect?.(e):void 0}dispose(){this.effect.dispose?.()}}let eI=function(e=function(){let e=globalThis.navigation,t=e?.currentEntry;if(t&&!(t.index<0)&&t.key)return{index:t.index,key:t.key}}){let t,r=new Map;return{pick(i){let s=e();if(!s)return i;let o=t??s;t=s;let n=r.get(o.key);if(s.index<o.index&&n)return{...n,reverse:!0};let a=r.get(s.key);return s.index>o.index&&a?a:(r.set(s.key,i),i)}}}();class eL{#ef;#eh;#ec;#ed=null;#ep;#em=[];#eg;#ev=null;constructor(e,t){this.#ef=e,this.#eg=[t.scrollLeft,t.scrollTop];let r=t.parentElement??t,i=r.getBoundingClientRect(),s=document.createElement("canvas");s.inert=!0,s.setAttribute("aria-hidden","true"),s.setAttribute("data-vfx-keep-playing","");let o=s.style;o.setProperty("position","absolute"),o.setProperty("left","0px"),o.setProperty("top","0px"),o.setProperty("margin","0"),o.setProperty("padding","0"),o.setProperty("border","none"),o.setProperty("pointer-events","none");let n=t.cloneNode(!1);n.removeAttribute("id"),n.style.setProperty("margin","0"),n.style.setProperty("box-sizing","border-box"),n.style.setProperty("overflow","hidden"),s.append(n),h(s,n),r.parentNode&&r!==t?r.after(s):document.body.append(s);let a=s.getBoundingClientRect();o.setProperty("left",`${i.left-a.left}px`),o.setProperty("top",`${i.top-a.top}px`),getComputedStyle(n).display,this.#eh=s,this.#ec=n,this.#ex(i.width,i.height),this.#ep=e.freezeInside(s),r!==t&&"u">typeof ResizeObserver&&(this.#ev=new ResizeObserver(()=>{let{width:e,height:t}=r.getBoundingClientRect();this.#ex(e,t)}),this.#ev.observe(r))}#ex(e,t){for(let r of[this.#eh,this.#ec])r.style.setProperty("width",`${e}px`),r.style.setProperty("height",`${t}px`)}get texture(){return this.#ed?.texture??null}keep(e,t){for(let r of e){let e=r.parentNode;if(t){let i=e?document.createComment(""):null;i&&e?.insertBefore(i,r),this.#em.push({node:r,marker:i,onReturn:t})}B(this.#ec,r,null)}[this.#ec.scrollLeft,this.#ec.scrollTop]=this.#eg,this.#ed??=this.#ef.captureLive(this.#eh)}dispose(){let e=this.#em;this.#em=[];try{for(let{node:t,marker:r,onReturn:i}of(this.#ed?.dispose(),this.#ed=null,e)){let e=r?.parentNode;e&&B(e,t,r),r?.remove();try{i(t)}catch(e){console.error("[VFX-JS] keepPlaying onReturn failed:",e)}}}finally{this.#ev?.disconnect(),this.#eh.remove(),this.#ep()}}}let e_={keepPlaying:()=>{}};function eU(e,t){let r=void 0!==t.transition?t.params:void 0===e.params&&void 0===t.params?void 0:{...e.params,...t.params};return{transition:t.transition??e.transition,params:r,reverse:t.reverse??e.reverse,duration:t.duration??e.duration,overflow:t.overflow??e.overflow,ease:t.ease??e.ease,keepPlaying:t.keepPlaying??e.keepPlaying}}function ek(e,t={}){let r=eU(e,t);return{transition:r.transition??u,params:r.params,reverse:r.reverse??!1,duration:r.duration??.6,overflow:r.overflow,ease:r.ease,keepPlaying:r.keepPlaying??!1}}let eB=new WeakMap;function eO(e,t){return new Promise((r,i)=>{let s=setTimeout(()=>r(!1),t);e.then(()=>{clearTimeout(s),r(!0)},e=>{clearTimeout(s),i(e)})})}class eV{#ew;#ey;#eb;#eE;#eT;#eR;#eS;#eC;#eP;#eA=[];#eF=[];#ez=!1;#eM=!1;#eI=!1;#eL=0;#e_=null;#eU=!1;#ek=!1;#eB=null;#eO=[];#eV=null;#eN=null;#eD=null;#eX=null;#e$;constructor(e,t,i={},s,o=new ez,n=eI,a=function(){var e,t;let i,s,o;return r??=(e=globalThis.navigation,t=window,s=0,e?.addEventListener("navigate",e=>{if("replace"===e.navigationType)return;let t=e.hasUAVisualTransition&&e.destination?.key;i=t?{id:++s,key:t}:void 0}),!e&&t&&t.addEventListener("popstate",e=>{i=e.hasUAVisualTransition?{id:++s,href:t.location.href}:void 0},!0),o=()=>{i=void 0},t?.addEventListener("pointerdown",o,!0),t?.addEventListener("keydown",o,!0),{current(){if(i)return(i.key?e?.currentEntry?.key===i.key:t?.location.href===i.href)?i.id:void 0}})}(),l=t=>new eL(e,t)){this.#e$=l,this.#eP=s,this.#ew=e,this.#ey=t,this.#eb=i,this.#eE=o,this.#eT=n,this.#eR=a,this.#eC=i.keepWrapped??!1}get running(){return null!==this.#e_}show(e,t={}){this.#eH();let r=this.#eW(e),{remove:i=!1,...s}=t;if(!this.running&&this.#eG(r))return Promise.resolve();let o=this.#eb.slideSpec?.(r),n=o?eU(o,s):s;return this.#eq(e=>{let t=Array.from(this.#ey.children).filter(e=>e!==r&&!e.hidden);for(let s of(e.keepPlaying(t,e=>{i?e.remove():e.hidden=!0}),r.parentElement!==this.#ey&&this.#ey.append(r),Array.from(this.#ey.children)))s!==r&&(i?s.remove():s.hidden=!0);r.hidden=!1},n)}#eW(e){let t=this.#ey,r="number"==typeof e?t.children[e]:"string"==typeof e?t.querySelector(e):e;if(!r)throw TypeError(`[VFX-JS] show(): no slide for ${e}.`);if(r.parentElement!==t&&(r.isConnected||t.contains(r)))throw TypeError("[VFX-JS] show(): the slide must be a direct child of the container.");return r}#eG(e){return e.parentElement===this.#ey&&!e.hidden&&Array.from(this.#ey.children).every(t=>t===e||t.hidden)}run(e,t={}){let r=this.#eU?void 0:this.#eR.current();if(void 0!==r&&r!==this.#eS)return this.#eS=r,this.#eq(async r=>{await e(r);let i="function"==typeof t?t():t;this.#eb.autoReverse&&this.#eT.pick(i)},{duration:0});if(!this.#eb.autoReverse)return this.#eq(e,t);let i="function"==typeof t?void 0:t.keepPlaying??this.#eb.keepPlaying;return this.#eq(e,()=>this.#eT.pick("function"==typeof t?t():t),i)}async #eq(e,t,r){if(this.#eU)return void await e(e_);this.#eH();let i=++this.#eL;this.#e_=i;try{await this.#e(i,e,t,r)}finally{this.#e_===i&&(this.#e_=null),this.#eL===i&&(this.#eH(i),this.#ep(),this.#eK(),this.#eJ())}}async #e(e,t,r,i){let s,o=()=>e===this.#eL,n=!1,a={keepPlaying:(t,r)=>{n&&o()&&this.#ej(e,t,r)}},l=!1,u=async()=>{l||(l=!0,await t(a))};if(this.#ew.reducedMotion){await u(),"function"==typeof r&&r();return}let f=async()=>{this.#eY(),this.#eH(e),this.#eE.cancel(),await u(),o()&&(this.#ek&&this.#eC&&await this.#ew.update(this.#ey),this.#eZ(e))},h=null;if("function"!=typeof r){if(h=this.#eQ(ek(this.#eb,r)),!o())return u();if(null===h)return f()}this.#e0();try{await this.#e1(h?.slots??null,o,!0)}catch(e){return console.error("[VFX-JS] transition failed to wrap the element; cutting to the new content.",e),u()}if(!o())return u();this.#eF.push(this.#ew.lockSize(this.#ey)),this.#eF.push(this.#ew.forceRender(this.#ey));let c=await eO(this.#eE.snapshot(),1e3);if(!o())return u();if(!c){this.#e2(),await u(),o()&&this.#eZ(e);return}h&&this.#e3(e,h),n=h?h.keepPlaying:i??this.#eb.keepPlaying??!1;try{await u(),"function"==typeof r&&o()&&(s=r())}catch(t){throw o()&&(this.#eY(),this.#eH(e),this.#eE.cancel(),this.#eZ(e)),t}finally{n=!1}if(!o())return;if(null===h){if(h=this.#eQ(ek(this.#eb,s)),!o())return;if(null===h)return f();h.keepPlaying||this.#eH(e);try{await this.#e1(h.slots,o,!1)}catch(e){return console.error("[VFX-JS] transition failed to swap the effects; cutting to the new content.",e),f()}if(!o())return;this.#e3(e,h)}this.#e0();try{await this.#e4()}catch(e){console.error("[VFX-JS] transition waitFor failed:",e)}if(!o()||(await this.#ew.updateInTime(this.#ey)||this.#eM||(this.#eM=!0,console.warn("[VFX-JS] transition: the new content was not captured in time; it may pop in during the run.")),!o())||(await new Promise(e=>requestAnimationFrame(()=>e())),!o()))return;let d=this.#eE.start({duration:h.run.duration,ease:h.ease,onEnd:()=>{this.#eY(e),this.#eH(e)}}),p=await eO(d,1e3*h.run.duration+1e3);o()&&(p||this.#e2(),this.#eZ(e))}#eQ(e){let t,r;if(e.duration<=0)return null;let i=e.transition;if("function"!=typeof i&&!this.#e5(i))return null;try{({transition:t,slots:r}=this.#e6(i,e.params))}catch(e){return console.error(`[VFX-JS] transition "${i.name}" constructor failed; cutting to the new content.`,e),null}let s={reverse:e.reverse,duration:e.duration},o=e.overflow??t.overflow;return void 0!==o&&(s.overflow=o),{run:s,ease:e.ease??t.ease??"smoothstep",slots:r,keepPlaying:e.keepPlaying}}#e5(e){let t=eB.get(e);return t&&t!==this?(this.#eI||(this.#eI=!0,console.warn(`[VFX-JS] transition "${e.name??"unnamed"}" instance is running in another container; cutting to the new content. Pass the class to share it.`)),!1):(this.#eN!==e&&this.#eJ(),eB.set(e,this),this.#eN=e,!0)}#eJ(){let e=this.#eN;this.#eN=null,e&&eB.get(e)===this&&eB.delete(e)}#e3(e,{run:t,slots:r}){for(let i of(this.#eY(),this.#eD={id:e,slots:r},r))i.start(t)}#e2(){this.#ez||(this.#ez=!0,console.warn("[VFX-JS] transition target did not render in time; cutting to the new content.")),this.#eY(),this.#eH(),this.#eE.cancel()}cancel(){let e=++this.#eL;this.#e_=null,this.#eY(),this.#eH(),this.#eE.cancel(),this.#ep(),this.#eK(),this.#eJ(),this.#eZ(e)}destroy(){this.#eU||(this.#eU=!0,this.cancel(),this.#eV=null,this.#eP?.())}#e0(){this.#eA.push(this.#ew.freezeInside(this.#ey))}#eK(){let e=this.#eF;for(let t of(this.#eF=[],e))t()}#ep(){let e=this.#eA;for(let t of(this.#eA=[],e))t()}#e6(e,t){var r;let i,s,o,n=this.#eV;if(n?.key.source===e&&("function"!=typeof e||(r=n.key.params,i=r??{},s=t??{},(o=Object.keys(i)).length===Object.keys(s).length&&o.every(e=>{var t,r;return e in s&&(t=i[e],r=s[e],Array.isArray(t)&&Array.isArray(r)?t.length===r.length&&t.every((e,t)=>e===r[t]):t===r)}))))return n;let a="function"==typeof e?new e(t):e,l=[new eM(a,this.#eE)];return this.#eV={key:{source:e,params:t},transition:a,slots:l},{transition:a,slots:l}}#ej(e,t,r){let i="function"==typeof t[Symbol.iterator]?Array.from(t):[t];if(0!==i.length)try{if(this.#eX?.id!==e){this.#eH();let t=this.#e$(this.#ey);this.#eX={id:e,from:t},this.#eE.setLiveSource(()=>t.texture)}this.#eX.from.keep(i,r)}catch(t){console.error("[VFX-JS] transition failed to keep the old content; using a snapshot.",t),this.#eH(e)}}#eH(e){let t=this.#eX;t&&(void 0===e||t.id===e)&&(this.#eX=null,this.#eE.setLiveSource(null),t.from.dispose())}#eY(e){let t=this.#eD;if(t&&(void 0===e||t.id===e))for(let e of(this.#eD=null,t.slots))e.end()}async #e1(e,t,r){var i;if(this.#eB&&await this.#eB,!t())return;let s=null!==e?[this.#eE,...e]:this.#ek?this.#eO:[this.#eE];if(!this.#ek){let e=this.#ew.addHTMLWithStill(this.#ey,{effect:s}).then(()=>{this.#ek=!0,this.#eO=s}).finally(()=>{this.#eB=null});this.#eB=e,await e;return}if(i=this.#eO,!(s.length===i.length&&s.every((e,t)=>e===i[t]))){this.#eO=s;let e=this.#ew.updateEffects(this.#ey,s).finally(()=>{this.#eB=null});this.#eB=e,await e}r&&await this.#ew.update(this.#ey)}#eZ(e){if(this.#eC&&!this.#eU)return;let t=()=>{e===this.#eL&&this.#ek&&(this.#ek=!1,this.#eO=[],this.#ew.remove(this.#ey))};this.#eB?this.#eB.then(t,()=>{}):t()}#e4(){let e=this.#eb.waitFor??"media";return"none"===e?Promise.resolve():"media"===e?function(e,t,r=300){let i=[];for(let t of e.querySelectorAll("img, video")){let e="IMG"===t.tagName;(e?t.complete:t.readyState>=2)||function(e){if("IMG"===e.tagName){let t;return"lazy"===e.loading&&(!((t=e.getBoundingClientRect()).right>0)||!(t.bottom>0)||!(t.left<window.innerWidth)||!(t.top<window.innerHeight))}return"none"===e.preload}(t)||i.push(new Promise(r=>{let i=()=>r();t.addEventListener(e?"load":"loadeddata",i,{once:!0}),t.addEventListener("error",i,{once:!0})}))}return(t&&i.push(t),0===i.length)?Promise.resolve():new Promise(e=>{let t=setTimeout(e,r),s=()=>{clearTimeout(t),e()};Promise.all(i).then(s,s)})}(this.#ey,document.fonts?.ready):e(this.#ey)}}let eN=`
precision highp float;
in vec3 position;
void main() {
    gl_Position = vec4(position, 1.0);
}
`,eD=`
precision highp float;
attribute vec3 position;
void main() {
    gl_Position = vec4(position, 1.0);
}
`,eX=`
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
`,e$=`precision highp float;
uniform vec2 resolution;
uniform vec2 offset;
uniform float time;
uniform bool autoCrop;
uniform sampler2D src;
out vec4 outColor;
`,eH=`vec4 readTex(sampler2D tex, vec2 uv) {
    if (autoCrop && (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.)) {
        return vec4(0);
    }
    return texture(tex, uv);
}`,eW={none:eX,uvGradient:`
    ${e$}
    ${eH}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        outColor = vec4(uv, sin(time) * .5 + .5, 1);

        vec4 img = readTex(src, uv);
        outColor *= smoothstep(0., 1., img.a);
    }
    `,rainbow:`
    ${e$}
    ${eH}

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
    ${e$}
    ${eH}

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
    ${e$}
    ${eH}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        float b = sin(time * 2.) * 32. + 48.;
        uv = floor(uv * b) / b;
        outColor = readTex(src, uv);
    }
    `,rgbGlitch:`
    ${e$}
    ${eH}

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
    ${e$}
    ${eH}

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

    ${e$}
    ${eH}

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
    ${e$}
    ${eH}

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
    ${e$}
    ${eH}

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
    ${e$}
    ${eH}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        outColor = readTex(src, uv) * (sin(time * 5.) * 0.2 + 0.8);
    }

    `,spring:`
    ${e$}
    ${eH}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        uv = (uv - .5) * (1.05 + sin(time * 5.) * 0.05) + .5;
        outColor = readTex(src, uv);
    }
    `,duotone:`
    ${e$}
    ${eH}

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
    ${e$}
    ${eH}

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
    ${e$}
    ${eH}

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
    ${e$}
    uniform float enterProgress;
    uniform float leaveProgress;

    ${eH}

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
    ${e$}
    ${eH}

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
    ${e$}
    ${eH}

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
    ${e$}
    ${eH}

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
    ${e$}
    ${eH}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = readTex(src, uv);
        outColor = vec4(1.0 - color.rgb, color.a);
    }
    `,grayscale:`
    ${e$}
    ${eH}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = readTex(src, uv);
        float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
        outColor = vec4(vec3(gray), color.a);
    }
    `,vignette:`
    ${e$}
    ${eH}

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
    ${e$}
    ${eH}

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
    `},eG={...eW,slitScanTransition:eW.slitScanReveal,warpTransition:eW.warpReveal,pixelateTransition:eW.pixelateReveal,focusTransition:eW.focusReveal};class eq{pass;uniforms;constructor(e){this.uniforms={src:{value:null},offset:{value:new ea},resolution:{value:new ea},viewport:{value:new el}},this.pass=new ep(e,eN,eX,this.uniforms,"premultiplied")}setUniforms(e,t,r){this.uniforms.src.value=e,this.uniforms.resolution.value.set(r.w*t,r.h*t),this.uniforms.offset.value.set(r.x*t,r.y*t)}dispose(){this.pass.dispose()}}async function eK(e,t,r,i){var s;let o,n,a,l,u=e.getBoundingClientRect(),f=window.devicePixelRatio,h=Math.ceil(u.width),c=Math.ceil(u.height),d=h*f,p=c*f,m=1,g=d,v=p;i&&(g>i||v>i)&&(m=Math.min(i/g,i/v),g=Math.floor(g*m),v=Math.floor(v*m));let x=r&&r.width===g&&r.height===v?r:new OffscreenCanvas(g,v),w=e.cloneNode(!0);await ej(e,w),function e(t,r){if("function"==typeof t.computedStyleMap)try{let e=t.computedStyleMap();for(let t of["margin-top","margin-right","margin-bottom","margin-left"]){let i=e.get(t);i instanceof CSSKeywordValue&&"auto"===i.value&&r.style.setProperty(t,"auto")}}catch{}for(let i=0;i<t.children.length;i++){let s=t.children[i],o=r.children[i];s instanceof HTMLElement&&o instanceof HTMLElement&&e(s,o)}}(e,w),w.style.setProperty("opacity",t.toString()),w.style.setProperty("margin","0px"),function(e){let t=e;for(;;){let e=t.style;if(Number.parseFloat(e.paddingTop)>0||Number.parseFloat(e.borderTopWidth)>0||e.getPropertyValue("overflow-x")&&"visible"!==e.getPropertyValue("overflow-x")||e.getPropertyValue("overflow-y")&&"visible"!==e.getPropertyValue("overflow-y")||"flex"===e.display||"grid"===e.display||"flow-root"===e.display||"inline-block"===e.display)break;let r=t.firstElementChild;if(!r)break;r.style.setProperty("margin-top","0px"),t=r}for(t=e;;){let e=t.style;if(Number.parseFloat(e.paddingBottom)>0||Number.parseFloat(e.borderBottomWidth)>0||e.getPropertyValue("overflow-x")&&"visible"!==e.getPropertyValue("overflow-x")||e.getPropertyValue("overflow-y")&&"visible"!==e.getPropertyValue("overflow-y")||"flex"===e.display||"grid"===e.display||"flow-root"===e.display||"inline-block"===e.display)break;let r=t.lastElementChild;if(!r)break;r.style.setProperty("margin-bottom","0px"),t=r}}(w),function e(t,r){let i=-t.scrollLeft,s=-t.scrollTop;for(let o=0;o<t.children.length;o++){let n=t.children[o],a=r.children[o];n&&(a instanceof HTMLElement||a instanceof SVGElement)&&((0!==i||0!==s)&&function(e,t,r){let i=e.style.getPropertyValue("translate"),[s="0px",o="0px",n]=i&&"none"!==i?function(e){let t=[],r=0,i="";for(let s of e.trim())"("===s?r++:")"===s&&r--," "===s&&0===r?(i&&t.push(i),i=""):i+=s;return i&&t.push(i),t}(i):[],a=`calc(${s} + ${t}px) calc(${o} + ${r}px)`;e.style.setProperty("translate",n?`${a} ${n}`:a)}(a,i,s),e(n,a))}}(e,w),w.style.setProperty("box-sizing","border-box"),w.style.setProperty("width",`${h}px`),w.style.setProperty("height",`${c}px`);let y=(s=w.outerHTML,(a=(n=document.implementation.createHTMLDocument("test")).createRange()).selectNodeContents(n.documentElement),a.deleteContents(),l=document.createElement("head"),n.documentElement.appendChild(l),n.documentElement.appendChild(a.createContextualFragment(s)),n.documentElement.setAttribute("xmlns",n.documentElement.namespaceURI),new XMLSerializer().serializeToString(n).replace(/<!DOCTYPE html>/,"")),b=`<svg xmlns="http://www.w3.org/2000/svg" width="${d}" height="${p}"><foreignObject width="100%" height="100%">${y}</foreignObject></svg>`,E=await new Promise(e=>{let t=new Image;t.onload=()=>e(t),t.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(b)}`}),T=x.getContext("2d");if(null===T)throw Error("[VFX-JS] Failed to get 2D context");let R=()=>{T.clearRect(0,0,g,v);let e=f*m;T.scale(e,e),T.drawImage(E,0,0,d,p),T.setTransform(1,0,0,1,0,0)};if(R(),o=navigator.userAgent,/AppleWebKit/.test(o)&&!/Chrome\/|Chromium\//.test(o)&&w.querySelector("img"))for(let e=0;e<eJ;e++)await new Promise(e=>setTimeout(e,16)),R();return x}let eJ=3;async function ej(e,t){let r=window.getComputedStyle(e);for(let e of Array.from(r))/(-inline-|-block-|^inline-|^block-)/.test(e)||/^-webkit-.*(start|end|before|after|logical)/.test(e)||t.style.setProperty(e,r.getPropertyValue(e),r.getPropertyPriority(e));if("INPUT"===t.tagName)t.setAttribute("value",t.value);else if("TEXTAREA"===t.tagName)t.innerHTML=t.value;else if("IMG"===t.tagName)try{t.src=await eY(c(e))}catch{}for(let r=0;r<e.children.length;r++){let i=e.children[r],s=t.children[r];await ej(i,s)}}async function eY(e){let t=await fetch(e).then(e=>e.blob());return new Promise(e=>{let r=new FileReader;r.onload=function(){e(this.result)},r.readAsDataURL(t)})}function eZ(e){return"number"==typeof e?{top:e,right:e,bottom:e,left:e}:Array.isArray(e)?{top:e[0],right:e[1],bottom:e[2],left:e[3]}:{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}let eQ={top:0,right:0,bottom:0,left:0};function e0(e){return{top:e.top,right:e.right,bottom:e.bottom,left:e.left}}function e1(e){return{top:e.top,left:e.left,right:e.left+Math.ceil(e.right-e.left),bottom:e.top+Math.ceil(e.bottom-e.top)}}function e2(e,t){return{top:e.top-t.top,right:e.right+t.right,bottom:e.bottom+t.bottom,left:e.left-t.left}}function e3(e,t,r){return Math.min(Math.max(e,t),r)}function e4(e,t,r,i){let s=Math.min(i-r,t-e);if(s<=0)return 0;let o=e3(r,e,t);return(e3(i,e,t)-o)/s}class e5{#S;#v;#h;#e8;#P;#e7;#e9;#te;#tt=[];#tr=[];#ed;#ti=new Set;#ts=!1;#to;#tn=eZ(0);#ta=null;constructor(e,t,r,i,s,o,n,a){this.#S=e,this.#v=t,this.#h=r,this.#e8=s,this.#P=a,this.#e7=i,this.#ed=o,this.#to=n,this.#e9=i.map(()=>this.#tl()),0===i.length&&(this.#ta=this.#tl()),this.#te=this.#tu()}#tu(){return this.#e7.map((e,t)=>"function"==typeof e.render&&!1!==e.enabled?t:-1).filter(e=>e>=0)}get effects(){return this.#e7}get hosts(){return this.#e9}get renderingIndices(){return this.#te}get stages(){return this.#tr}get hitTestPadBuffer(){return this.#tn}async initAll(){for(let e=0;e<this.#e7.length;e++){let t=this.#e7[e],r=this.#e9[e];r.setPhase("init");try{t.init&&await t.init(r.ctx)}catch(t){console.error(`[VFX-JS] effect[${e}].init() failed:`,t);for(let t=e-1;t>=0;t--)this.#tf(t),this.#e9[t].dispose();throw this.#e9[e].dispose(),t}r.setPhase("update")}}run(e){if(this.#ts||!e.isVisible)return;this.#te=this.#tu();let t=this.#te.length;for(let t of this.#e9)t.setFrameState({time:e.time,deltaTime:e.deltaTime,mouse:e.mouse,mouseViewport:e.mouseViewport,intersection:e.intersection,enterTime:e.enterTime,leaveTime:e.leaveTime,enterProgress:e.enterProgress,leaveProgress:e.leaveProgress,uniforms:e.resolvedUniforms});this.#th(e);for(let t=0;t<this.#e9.length;t++)this.#e9[t].setFrameDims(this.#tc(t,e)),this.#e9[t].setEffectDims(this.#td(t,e));for(let e=0;e<this.#e7.length;e++){let t=this.#e7[e];if(!t.update)continue;let r=this.#e9[e];r.setPhase("update");try{t.update(r.ctx)}catch(r){let t=`${e}:update`;this.#ti.has(t)||(this.#ti.add(t),console.warn(`[VFX-JS] effect[${e}].update() threw; skipping this frame's update:`,r))}}if(0===t)return void(this.#ta??this.#e9[0]).passthroughCopy(this.#ed,e.finalTarget,e.elementRectOnCanvasPx);for(let r=0;r<t;r++){let i,s=this.#te[r],o=this.#e9[s],n=this.#e7[s];if(!n.render)continue;o.setPhase("render"),o.tickAutoUpdates();let a=0===r?this.#ed:this.#tt[r-1].texHandle;o.setSrc(a),r===t-1?i=e.finalTarget:(i=this.#tt[r].rtHandle,o.clearRt(i)),o.setOutput(i);try{n.render(o.ctx)}catch(l){let e=`${s}:render`;this.#ti.has(e)||(this.#ti.add(e),console.warn(`[VFX-JS] effect[${s}].render() threw; falling back to passthrough:`,l));let n=this.#tr[r].outputViewport;null===i?o.passthroughCopy(a,null,n):r===t-1?o.passthroughCopy(a,i,n):o.passthroughCopy(a,i,{x:0,y:0,w:i.width,h:i.height})}o.setPhase("update")}}dispose(){if(!this.#ts){this.#ts=!0;for(let e=this.#e7.length-1;e>=0;e--)this.#tf(e),this.#e9[e].dispose();for(let e of(this.#ta&&(this.#ta.dispose(),this.#ta=null),this.#tt))e.fb.dispose();this.#tt=[],this.#tr=[]}}async replaceEffects(e){if(this.#ts)throw Error("[VFX-JS] replaceEffects on disposed chain");let t=this.#e7,r=this.#e9,i=new Map;for(let e=0;e<t.length;e++)i.set(t[e],r[e]);let s=Array(e.length),o=[];for(let t=0;t<e.length;t++){let r=e[t],n=i.get(r);if(n)s[t]=n,i.delete(r);else{let e=this.#tl();s[t]=e,o.push({host:e,effect:r})}}for(let e=0;e<o.length;e++){let{host:t,effect:r}=o[e];t.setPhase("init");try{r.init&&await r.init(t.ctx),t.setPhase("update")}catch(r){console.error("[VFX-JS] replaceEffects: new effect init() failed:",r);for(let t=e-1;t>=0;t--){let e=o[t];if(e.effect.dispose)try{e.effect.dispose()}catch(e){console.error("[VFX-JS] dispose during init rollback threw:",e)}e.host.dispose()}throw t.dispose(),r}}for(let[e,t]of i){if(e.dispose)try{e.dispose()}catch(e){console.error("[VFX-JS] effect.dispose() threw during replaceEffects:",e)}t.dispose()}for(let e of this.#tt)e.fb.dispose();this.#tt=[],this.#tr=[],0!==e.length||this.#ta?e.length>0&&this.#ta&&(this.#ta.dispose(),this.#ta=null):this.#ta=this.#tl(),this.#e7=e,this.#e9=s,this.#te=this.#tu(),this.#ti.clear()}#tl(){return new eR(this.#S,this.#v,this.#h,this.#ed,this.#e8,this.#P)}#tf(e){let t=this.#e7[e];if(t.dispose)try{t.dispose()}catch(t){console.error(`[VFX-JS] effect[${e}].dispose() threw:`,t)}}#th(e){let t=this.#te.length;if(this.#tr=Array(t),0===t)return;let r=this.#to?e.canvasBufferSize:e.elementBufferSize,i=[0,0,r[0],r[1]],s=this.#tp(e),o=i;for(let r=0;r<t;r++){let n=this.#te[r],a=this.#e7[n],l=r===t-1,u=this.#tm(a,o,i,s,e)??o,f=[u[2],u[3]],h=function(e,t){let[r,i,s,o]=e,[n,a,l,u]=t;return l<=0||u<=0?[0,0,1,1]:[(r-n)/l,(i-a)/u,s/l,o/u]}(i,u),c=l?{x:e.elementRectOnCanvasPx.x+u[0],y:e.elementRectOnCanvasPx.y+u[1],w:f[0],h:f[1]}:{x:0,y:0,w:f[0],h:f[1]};this.#tr[r]={dstRect:u,dstBufferSize:f,contentRectUv:h,outputViewport:c},l||this.#tg(r,f),o=u}let[n,a,l,u]=this.#tr[t-1].dstRect;this.#tn=eZ({top:Math.max(0,a+u-r[1]),right:Math.max(0,n+l-r[0]),bottom:Math.max(0,-a),left:Math.max(0,-n)})}#tm(e,t,r,i,s){if(e.outputRect)return e.outputRect(this.#tv(s,r,t,i))}#tv(e,t,r,i){let s=e.canvasBufferSize[0]/e.canvasSize[0]||1;return{element:this.#to?e.canvasSize:e.elementSize,elementPixel:this.#to?e.canvasBufferSize:e.elementBufferSize,canvas:e.canvasSize,canvasPixel:e.canvasBufferSize,pixelRatio:s,contentRect:t,srcRect:r,canvasRect:i}}#td(e,t){let r=this.#to?t.canvasBufferSize:t.elementBufferSize,i=[0,0,r[0],r[1]],s=this.#tp(t),o=this.#te.indexOf(e),n=o<=0?i:this.#tr[o-1].dstRect;return this.#tv(t,i,n,s)}#tg(e,t){let r=this.#tt[e];if(r&&r.fb.width===t[0]&&r.fb.height===t[1])return;r&&r.fb.dispose();let i=new ee(this.#S,t[0],t[1]),s=eA(i),o=eC(()=>i.texture,()=>i.width,()=>i.height);this.#tt[e]={fb:i,rtHandle:s,texHandle:o,bufferSize:t}}#tp(e){let[t,r]=e.canvasBufferSize;if(this.#to)return[0,0,t,r];let{x:i,y:s}=e.elementRectOnCanvasPx;return[-i,-s,t,r]}#tc(e,t){let r,i,s,o,n,a=this.#te.indexOf(e);if(a<0)s={x:0,y:0,w:r=t.elementBufferSize[0],h:i=t.elementBufferSize[1]},o=[0,0,1,1],n=[0,0,1,1];else{let e=this.#tr[a];r=e.dstBufferSize[0],i=e.dstBufferSize[1],s=e.outputViewport,o=e.contentRectUv,n=0===a?[0,0,1,1]:this.#tr[a-1].contentRectUv}return{outputBufferW:r,outputBufferH:i,canvasBufferSize:t.canvasBufferSize,outputViewport:s,elementBufferW:t.elementBufferSize[0],elementBufferH:t.elementBufferSize[1],contentRectUv:o,srcRectUv:n}}}class e6{#tx;#tw=new Set;constructor(e){this.#tx=e}freezeInside(e,t){let r={root:e,entries:[]};for(let i of t)!i.frozen&&e8(e,i.element)&&(i.frozen=!0,r.entries.push({e:i,opacity:i.element.style.opacity}),this.#tx.showPlain(i));this.#tw.add(r);let i=!1;return()=>{if(!i){for(let{e}of(i=!0,this.#tw.delete(r),r.entries))e.frozen=!1;requestAnimationFrame(()=>{for(let{e,opacity:t}of r.entries)!e.frozen&&this.#tx.isRegistered(e)&&this.#tx.hidePlain(e,t)})}}}adopt(e,t){let r=this.#ty(e.element);return!!r&&(e.frozen=!0,r.entries.push({e,opacity:t??e.element.style.opacity}),!0)}#ty(e){for(let t of this.#tw)if(e8(t.root,e))return t}}function e8(e,t){return t!==e&&e.contains(t)}function e7(e){this.data=e,this.pos=0}function e9(e){this.stream=new e7(e),this.output={}}e7.prototype.readByte=function(){return this.data[this.pos++]},e7.prototype.peekByte=function(){return this.data[this.pos]},e7.prototype.readBytes=function(e){return this.data.subarray(this.pos,this.pos+=e)},e7.prototype.peekBytes=function(e){return this.data.subarray(this.pos,this.pos+e)},e7.prototype.readString=function(e){for(var t="",r=0;r<e;r++)t+=String.fromCharCode(this.readByte());return t},e7.prototype.readBitArray=function(){for(var e=[],t=this.readByte(),r=7;r>=0;r--)e.push(!!(t&1<<r));return e},e7.prototype.readUnsigned=function(e){var t=this.readBytes(2);return e?(t[1]<<8)+t[0]:(t[0]<<8)+t[1]},e9.prototype.parse=function(e){return this.parseParts(this.output,e),this.output},e9.prototype.parseParts=function(e,t){for(var r=0;r<t.length;r++){var i=t[r];this.parsePart(e,i)}},e9.prototype.parsePart=function(e,t){var r,i=t.label;if(!t.requires||t.requires(this.stream,this.output,e))if(t.loop){for(var s=[];t.loop(this.stream);){var o={};this.parseParts(o,t.parts),s.push(o)}e[i]=s}else t.parts?(r={},this.parseParts(r,t.parts),e[i]=r):t.parser?(r=t.parser(this.stream,this.output,e),t.skip||(e[i]=r)):t.bits&&(e[i]=this.parseBits(t.bits))},e9.prototype.parseBits=function(e){var t={},r=this.stream.readBitArray();for(var i in e){var s=e[i];s.length?t[i]=r.slice(s.index,s.index+s.length).reduce(function(e,t){return 2*e+t},0):t[i]=r[s.index]}return t};let te=function(){return function(e){return e.readByte()}},tt=function(e){return function(t){return t.readBytes(e)}},tr=function(e){return function(t){return t.readString(e)}},ti=function(e){return function(t){return t.readUnsigned(e)}},ts=function(e,t){return function(r,i,s){for(var o=t(r,i,s),n=Array(o),a=0;a<o;a++)n[a]=r.readBytes(e);return n}};var to={label:"blocks",parser:function(e){for(var t=[],r=0,i=e.readByte();0!==i;i=e.readByte())t.push(e.readBytes(i)),r+=i;var s=new Uint8Array(r);r=0;for(var o=0;o<t.length;o++)s.set(t[o],r),r+=t[o].length;return s}},tn={label:"gce",requires:function(e){var t=e.peekBytes(2);return 33===t[0]&&249===t[1]},parts:[{label:"codes",parser:tt(2),skip:!0},{label:"byteSize",parser:te()},{label:"extras",bits:{future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}}},{label:"delay",parser:ti(!0)},{label:"transparentColorIndex",parser:te()},{label:"terminator",parser:te(),skip:!0}]},ta={label:"image",requires:function(e){return 44===e.peekByte()},parts:[{label:"code",parser:te(),skip:!0},{label:"descriptor",parts:[{label:"left",parser:ti(!0)},{label:"top",parser:ti(!0)},{label:"width",parser:ti(!0)},{label:"height",parser:ti(!0)},{label:"lct",bits:{exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}}}]},{label:"lct",requires:function(e,t,r){return r.descriptor.lct.exists},parser:ts(3,function(e,t,r){return Math.pow(2,r.descriptor.lct.size+1)})},{label:"data",parts:[{label:"minCodeSize",parser:te()},to]}]},tl={label:"text",requires:function(e){var t=e.peekBytes(2);return 33===t[0]&&1===t[1]},parts:[{label:"codes",parser:tt(2),skip:!0},{label:"blockSize",parser:te()},{label:"preData",parser:function(e,t,r){return e.readBytes(r.text.blockSize)}},to]},tu={label:"application",requires:function(e,t,r){var i=e.peekBytes(2);return 33===i[0]&&255===i[1]},parts:[{label:"codes",parser:tt(2),skip:!0},{label:"blockSize",parser:te()},{label:"id",parser:function(e,t,r){return e.readString(r.blockSize)}},to]},tf={label:"comment",requires:function(e,t,r){var i=e.peekBytes(2);return 33===i[0]&&254===i[1]},parts:[{label:"codes",parser:tt(2),skip:!0},to]},th=[{label:"header",parts:[{label:"signature",parser:tr(3)},{label:"version",parser:tr(3)}]},{label:"lsd",parts:[{label:"width",parser:ti(!0)},{label:"height",parser:ti(!0)},{label:"gct",bits:{exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}}},{label:"backgroundColorIndex",parser:te()},{label:"pixelAspectRatio",parser:te()}]},{label:"gct",requires:function(e,t){return t.lsd.gct.exists},parser:ts(3,function(e,t){return Math.pow(2,t.lsd.gct.size+1)})},{label:"frames",parts:[tn,tu,tf,ta,tl],loop:function(e){var t=e.peekByte();return 33===t||44===t}}];function tc(e){var t=new e9(new Uint8Array(e));this.raw=t.parse(th),this.raw.hasImages=!1;for(var r=0;r<this.raw.frames.length;r++)if(this.raw.frames[r].image){this.raw.hasImages=!0;break}}tc.prototype.decompressFrame=function(e,t){if(e>=this.raw.frames.length)return null;var r=this.raw.frames[e];if(r.image){var i=r.image.descriptor.width*r.image.descriptor.height,s=function(e,t,r){var i,s,o,n,a,l,u,f,h,c,d,p,m,g,v,x=Array(r),w=Array(4096),y=Array(4096),b=Array(4097);for(a=(s=1<<e)+1,i=s+2,u=-1,o=(1<<(n=e+1))-1,h=0;h<s;h++)w[h]=0,y[h]=h;for(d=f=p=m=v=g=0,c=0;c<r;){if(0===m){if(f<n){d+=t[g]<<f,f+=8,g++;continue}if(h=d&o,d>>=n,f-=n,h>i||h==a)break;if(h==s){o=(1<<(n=e+1))-1,i=s+2,u=-1;continue}if(-1==u){b[m++]=y[h],u=h,p=h;continue}for(l=h,h==i&&(b[m++]=p,h=u);h>s;)b[m++]=y[h],h=w[h];p=255&y[h],b[m++]=p,i<4096&&(w[i]=u,y[i]=p,(++i&o)==0&&i<4096&&(n++,o+=i)),u=l}m--,x[v++]=b[m],c++}for(c=v;c<r;c++)x[c]=0;return x}(r.image.data.minCodeSize,r.image.data.blocks,i);r.image.descriptor.lct.interlaced&&(s=function(e,t){for(var r=Array(e.length),i=e.length/t,s=[0,4,2,1],o=[8,8,4,2],n=0,a=0;a<4;a++)for(var l=s[a];l<i;l+=o[a])!function(i,s){var o=e.slice(s*t,(s+1)*t);r.splice.apply(r,[i*t,t].concat(o))}(l,n),n++;return r}(s,r.image.descriptor.width));var o={pixels:s,dims:{top:r.image.descriptor.top,left:r.image.descriptor.left,width:r.image.descriptor.width,height:r.image.descriptor.height}};return r.image.descriptor.lct&&r.image.descriptor.lct.exists?o.colorTable=r.image.lct:o.colorTable=this.raw.gct,r.gce&&(o.delay=10*(r.gce.delay||10),o.disposalType=r.gce.extras.disposal,r.gce.extras.transparentColorGiven&&(o.transparentIndex=r.gce.transparentColorIndex)),t&&(o.patch=function(e){for(var t=e.pixels.length,r=new Uint8ClampedArray(4*t),i=0;i<t;i++){var s=4*i,o=e.pixels[i],n=e.colorTable[o];r[s]=n[0],r[s+1]=n[1],r[s+2]=n[2],r[s+3]=255*(o!==e.transparentIndex)}return r}(o)),o}return null},tc.prototype.decompressFrames=function(e,t,r){void 0===t&&(t=0),r=void 0===r?this.raw.frames.length:Math.min(r,this.raw.frames.length);for(var i=[],s=t;s<r;s++)this.raw.frames[s].image&&i.push(this.decompressFrame(s,e));return i};class td{frames=[];index=0;canvas;ctx;pixelRatio;startTime;playTime=0;static async create(e,t){let r=await fetch(e).then(e=>e.arrayBuffer()).then(e=>new tc(e)),i=r.decompressFrames(!0,void 0,void 0),{width:s,height:o}=r.raw.lsd;return new td(i,s,o,t)}constructor(e,t,r,i){this.frames=e,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.pixelRatio=i,this.canvas.width=t,this.canvas.height=r,this.startTime=Date.now()}getCanvas(){return this.canvas}update(){let e=Date.now()-this.startTime;for(;this.playTime<e;){let e=this.frames[this.index%this.frames.length];this.playTime+=e.delay,this.index++}let t=this.frames[this.index%this.frames.length],r=new ImageData(t.patch,t.dims.width,t.dims.height);this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.putImageData(r,t.dims.left,t.dims.top)}}class tp{gl;canvas;maxTextureSize;floatLinearFilter;floatBlend;isContextLost=!1;#tb=new Set;#tE=new Set;#tT=new Set;constructor(e,t=!1){let r=e.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:t});if(!r)throw Error("[VFX-JS] WebGL2 is not available.");this.gl=r,this.canvas=e,r.getExtension("EXT_color_buffer_float"),r.getExtension("EXT_color_buffer_half_float"),this.floatBlend=!!r.getExtension("EXT_float_blend"),this.floatLinearFilter=!!r.getExtension("OES_texture_float_linear"),this.maxTextureSize=r.getParameter(r.MAX_TEXTURE_SIZE),e.addEventListener("webglcontextlost",this.#tR,!1),e.addEventListener("webglcontextrestored",this.#tS,!1)}setSize(e,t,r){let i=Math.floor(e*r),s=Math.floor(t*r);(this.canvas.width!==i||this.canvas.height!==s)&&(this.canvas.width=i,this.canvas.height=s)}addResource(e){this.#tb.add(e)}removeResource(e){this.#tb.delete(e)}onContextLost(e){return this.#tE.add(e),()=>this.#tE.delete(e)}onContextRestored(e){return this.#tT.add(e),()=>this.#tT.delete(e)}#tR=e=>{for(let t of(e.preventDefault(),this.isContextLost=!0,this.#tE))t()};#tS=()=>{this.isContextLost=!1;let e=this.gl;for(let t of(e.getExtension("EXT_color_buffer_float"),e.getExtension("EXT_color_buffer_half_float"),this.floatBlend=!!e.getExtension("EXT_float_blend"),this.#tb))t.restore();for(let e of this.#tT)e()}}class tm{gl;vao;#t;#tC;constructor(e){this.#t=e,this.gl=e.gl,this.#l(),e.addResource(this)}#l(){let e=this.gl,t=e.createVertexArray(),r=e.createBuffer();if(!t||!r)throw Error("[VFX-JS] Failed to create quad VAO");this.vao=t,this.#tC=r;let i=new Float32Array([-1,-1,0,1,-1,0,-1,1,0,-1,1,0,1,-1,0,1,1,0]);e.bindVertexArray(t),e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,i,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0),e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null)}restore(){this.#l()}draw(){let e=this.gl;e.bindVertexArray(this.vao),e.drawArrays(e.TRIANGLES,0,6)}dispose(){this.#t.removeResource(this),this.gl.deleteVertexArray(this.vao),this.gl.deleteBuffer(this.#tC)}}function tg(e){return{phase:"hidden",direction:1,enterProgress:0,leaveProgress:0,isIn:!1,wasAbove:!1,wasBelow:!1,lastTime:e}}function tv(e,t){e.phase=t,e.direction=1,e.enterProgress=+("shown"===t),e.leaveProgress=0}function tx(e){return Math.min(Math.max(e,0),1)}function tw(e,t,r,i={}){return new ee(e,t,r,{float:i.float??!1})}function ty(e,t){let r;r=t.renderingToBuffer?"none":t.premultipliedAlpha?"premultiplied":"normal";let i=t.glslVersion??eu(t.fragmentShader);return new ep(e,t.vertexShader??("100"===i?eD:eN),t.fragmentShader,t.uniforms,r,i)}class tb{pass;#T;#tP;#tA;#tF;#tz;#tM;constructor(e,t,r,i,s,o,n,a){if(this.#tF=i??!1,this.#tz=s??!1,this.#tM=o,this.#tP={},this.#T={src:{value:null},offset:{value:new ea},resolution:{value:new ea},viewport:{value:new el},time:{value:0},mouse:{value:new ea},passIndex:{value:0}},r)for(let[e,t]of Object.entries(r))"function"==typeof t?(this.#tP[e]=t,this.#T[e]={value:t()}):this.#T[e]={value:t};this.pass=ty(e,{fragmentShader:t,uniforms:this.#T,renderingToBuffer:n??!1,premultipliedAlpha:!0,glslVersion:a})}get uniforms(){return this.#T}setUniforms(e,t,r,i,s,o){this.#T.src.value=e,this.#T.resolution.value.set(r.w*t,r.h*t),this.#T.offset.value.set(r.x*t,r.y*t),this.#T.time.value=i,this.#T.mouse.value.set(s*t,o*t)}updateCustomUniforms(e){for(let[e,t]of Object.entries(this.#tP))this.#T[e]&&(this.#T[e].value=t());if(e)for(let[t,r]of Object.entries(e))this.#T[t]&&(this.#T[t].value=r())}initializeBackbuffer(e,t,r,i){this.#tF&&!this.#tA&&(this.#tM?this.#tA=new ei(e,this.#tM[0],this.#tM[1],1,this.#tz):this.#tA=new ei(e,t,r,i,this.#tz))}resizeBackbuffer(e,t){this.#tA&&!this.#tM&&this.#tA.resize(e,t)}registerBufferUniform(e){this.#T[e]||(this.#T[e]={value:null})}get backbuffer(){return this.#tA}get persistent(){return this.#tF}get float(){return this.#tz}get size(){return this.#tM}dispose(){this.pass.dispose(),this.#tA?.dispose()}}class tE{#S;#tI=new Map;constructor(e){this.#S=e}get(e,t,r){let i=`${t}\0${e}\0${r??""}`,s=this.#tI.get(i);return s||(s=new ef(this.#S,e,t,r),this.#tI.set(i,s)),s}get size(){return this.#tI.size}dispose(){for(let e of this.#tI.values())e.dispose();this.#tI.clear()}}let tT=new Map,tR=!1;function tS(e,t){return"hic"===e||!0===t?null:"number"==typeof t?t.toString():"video"===e?"0.0001":"0"}function tC(e,t){let r=e.getContext("2d");r&&(r.clearRect(0,0,e.width,e.height),r.drawImage(t,0,0,e.width,e.height))}class tP{#eb;#eh;#t;#C;#v;#P;#tL;#t_=[];#tU;#tk=new Map;#tB=null;#tO=!1;#tV=new WeakSet;#tN={};#tD={};#tX=0;#t$=void 0;#h=2;#tH=[];#tw=new e6({showPlain:e=>{if("hic"===e.type){let t=e.srcTexture.source;t instanceof OffscreenCanvas&&tC(e.element,t)}else e.element.style.setProperty("opacity",e.originalOpacity.toString())},hidePlain:(e,t)=>{if("hic"===e.type){let t=e.element;t.getContext("2d")?.clearRect(0,0,t.width,t.height)}else e.element.style.opacity=t},isRegistered:e=>this.#tH.includes(e)});#tW=0;#tG=1;#tq=Date.now()/1e3;#tK=!1;#tJ=eZ(0);#tj=eZ(0);#tY=[0,0];#tZ=0;#tQ=0;#t0=0;#t1=0;#t2=new WeakMap;constructor(e,t){this.#eb=e,this.#eh=t,this.#t=new tp(t,e.preserveDrawingBuffer),this.#C=this.#t.gl,this.#C.clearColor(0,0,0,0),this.#h=e.pixelRatio,this.#tG=e.timeScale,this.#tq=Date.now()/1e3,this.#v=new tm(this.#t),this.#P=new tE(this.#t),window.addEventListener("resize",this.#t3),window.addEventListener("pointermove",this.#t4),this.#t3(),this.#tL=new eq(this.#t),this.#t5(e.postEffects),this.#t.onContextRestored(()=>{this.#C.clearColor(0,0,0,0)})}destroy(){for(let e of(this.stop(),window.removeEventListener("resize",this.#t3),window.removeEventListener("pointermove",this.#t4),this.#tU?.dispose(),this.#tk.values()))e?.dispose();for(let e of this.#t_)e.pass.dispose();this.#tB&&(this.#tB.dispose(),this.#tB=null,this.#tO=!1),this.#tL.dispose(),this.#P.dispose(),this.#v.dispose()}#t6(){let e,t,r=this.#eh.ownerDocument,i="BackCompat"===r.compatMode?r.body:r.documentElement,s=i.clientWidth,o=i.clientHeight,n=window.scrollX,a=window.scrollY;if(this.#eb.fixedCanvas)e=0,t=0;else if(this.#eb.wrapper)e=s*this.#eb.scrollPadding[0],t=o*this.#eb.scrollPadding[1];else{let i=r.body.scrollWidth-(n+s),l=r.body.scrollHeight-(a+o);e=t_(s*this.#eb.scrollPadding[0],0,i),t=t_(o*this.#eb.scrollPadding[1],0,l)}let l=s+2*e,u=o+2*t;(l!==this.#tY[0]||u!==this.#tY[1])&&(this.#eh.style.width=`${l}px`,this.#eh.style.height=`${u}px`,this.#t.setSize(l,u,this.#h),this.#tJ=eZ({top:-t,left:-e,right:s+e,bottom:o+t}),this.#tj=eZ({top:0,left:0,right:s,bottom:o}),this.#tY=[l,u],this.#tZ=e,this.#tQ=t),this.#eb.fixedCanvas||this.#eh.style.setProperty("transform",`translate(${n-e}px, ${a-t}px)`)}#t3=async()=>{for(let e of this.#tH)if("text"===e.type&&e.isInViewport){let t=e.element.getBoundingClientRect(),r=Math.ceil(t.width),i=Math.ceil(t.height);(r!==e.width||i!==e.height)&&(await this.#t8(e),e.width=r,e.height=i)}for(let e of this.#tH)if("text"===e.type&&!e.isInViewport){let t=e.element.getBoundingClientRect(),r=Math.ceil(t.width),i=Math.ceil(t.height);(r!==e.width||i!==e.height)&&(await this.#t8(e),e.width=r,e.height=i)}};#t4=e=>{this.#t0=e.clientX,this.#t1=window.innerHeight-e.clientY};async #t8(e){if(!this.#t2.get(e.element)){this.#t2.set(e.element,!0);try{let t=e.srcTexture,r=t.source instanceof OffscreenCanvas?t.source:void 0,i=await eK(e.element,e.originalOpacity,r,this.maxTextureSize);if(0===i.width||0===i.height)return;let s=new j(this.#t,i);s.wrapS=t.wrapS,s.wrapT=t.wrapT,s.premultiplyAlpha=t.premultiplyAlpha,s.needsUpdate=!0,!e.chain&&e.passes.length>0&&(e.passes[0].uniforms.src.value=s),e.srcTexture=s,t.dispose()}catch(e){console.error(e)}finally{this.#t2.set(e.element,!1)}}}async addElement(e,t={},r){let i,s,o;if(void 0!==t.effect)return this.#t7(e,t,t.effect,r);let n=this.#t9(t),a=e.getBoundingClientRect(),l=tk(e)?e1(a):e0(a),[u,h]=tF(t.overflow),d=e2(l,h),p=tz(t.intersection),m=""===e.style.opacity?1:Number.parseFloat(e.style.opacity),g=!1;if(e instanceof HTMLImageElement){s="img";let t=c(e);if(g=!!t.match(/\.gif/i)){let r=await td.create(t,this.#h);tT.set(e,r),i=new j(this.#t,r.getCanvas())}else{let e=await Q(t);i=new j(this.#t,e)}}else if(e instanceof HTMLVideoElement)i=new j(this.#t,e),s="video";else if(e instanceof HTMLCanvasElement)f(e)&&r?(i=new j(this.#t,r),s="hic"):(i=new j(this.#t,e),s="canvas");else{let t=await eK(e,m,void 0,this.maxTextureSize);i=new j(this.#t,t),s="text"}let[v,x]=tL(t.wrap);i.wrapS=v,i.wrapT=x,i.needsUpdate=!0;let w=t.autoCrop??!0,y=tS(s,t.overlay),b={src:{value:i},resolution:{value:new ea},offset:{value:new ea},time:{value:0},enterTime:{value:-1},leaveTime:{value:-1},enterProgress:{value:0},leaveProgress:{value:0},mouse:{value:new ea},intersection:{value:0},viewport:{value:new el},autoCrop:{value:w}},E={};if(void 0!==t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r?(b[e]={value:r()},E[e]=r):b[e]={value:r};if(t.backbuffer){let e,t;e=(d.right-d.left)*this.#h,t=(d.bottom-d.top)*this.#h,b.backbuffer={value:(o=new ei(this.#t,e,t,this.#h,!1)).texture}}let T=new Map,R=new Map;for(let e=0;e<n.length-1;e++){let t=n[e].target??`pass${e}`;n[e]={...n[e],target:t};let r=n[e].size,i=r?r[0]:(d.right-d.left)*this.#h,s=r?r[1]:(d.bottom-d.top)*this.#h;if(n[e].persistent){let i=r?1:this.#h,s=r?r[0]:d.right-d.left,o=r?r[1]:d.bottom-d.top;R.set(t,new ei(this.#t,s,o,i,n[e].float))}else T.set(t,tw(this.#t,i,s,{float:n[e].float}))}let S=[];for(let e=0;e<n.length;e++){let t=n[e],r=t.frag,i={...b},s={};for(let[e,s]of T)e!==t.target&&r.match(RegExp(`uniform\\s+sampler2D\\s+${e}\\b`))&&(i[e]={value:s.texture});for(let[e,t]of R)r.match(RegExp(`uniform\\s+sampler2D\\s+${e}\\b`))&&(i[e]={value:t.texture});if(t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r?(i[e]={value:r()},s[e]=r):i[e]={value:r};let o=ty(this.#t,{vertexShader:t.vert,fragmentShader:r,uniforms:i,renderingToBuffer:void 0!==t.target,glslVersion:t.glslVersion});S.push({pass:o,uniforms:i,uniformGenerators:{...E,...s},target:t.target,persistent:t.persistent,float:t.float,size:t.size,backbuffer:t.target?R.get(t.target):void 0})}let C=this.#tW,P={type:s,element:e,isInViewport:!1,intersectionState:tg(C),width:l.right-l.left,height:l.bottom-l.top,passes:S,bufferTargets:T,startTime:C,enterTime:C,leaveTime:-1/0,release:t.release??1/0,isGif:g,isFullScreen:u,overflow:h,intersection:p,originalOpacity:m,srcTexture:i,zIndex:t.zIndex??0,backbuffer:o,autoCrop:w};this.#re(P,l,C),this.#rt(P,y)}#rt(e,t){this.#tw.adopt(e,t)||null===t||e.element.style.setProperty("opacity",t),this.#tH.push(e),this.#tH.sort((e,t)=>e.zIndex-t.zIndex)}async #t7(e,t,r,i){let s,o;void 0!==t.shader&&console.warn("[VFX-JS] Both `shader` and `effect` specified; `effect` takes precedence."),void 0!==t.overflow&&console.warn("[VFX-JS] `overflow` is shader-path only and is ignored by the effect path. Use each effect's own `outputRect` (with `dims.canvasRect` for fullscreen) to control its dst rect.");let n=Array.isArray(r)?[...r]:[r];this.#rr(n);let a=e.getBoundingClientRect(),l=tk(e)?e1(a):e0(a),[u,h]=tF(t.overflow),d=tz(t.intersection),p=""===e.style.opacity?1:Number.parseFloat(e.style.opacity),m=!1;if(e instanceof HTMLImageElement){o="img";let t=c(e);if(m=!!t.match(/\.gif/i)){let r=await td.create(t,this.#h);tT.set(e,r),s=new j(this.#t,r.getCanvas())}else{let e=await Q(t);s=new j(this.#t,e)}}else if(e instanceof HTMLVideoElement)s=new j(this.#t,e),o="video";else if(e instanceof HTMLCanvasElement)f(e)&&i?(s=new j(this.#t,i),o="hic"):(s=new j(this.#t,e),o="canvas");else{let t=await eK(e,p,void 0,this.maxTextureSize);s=new j(this.#t,t),o="text"}let[g,v]=tL(t.wrap);s.wrapS=g,s.wrapT=v,s.premultiplyAlpha=!0,s.needsUpdate=!0;let x=t.autoCrop??!0,w=tS(o,t.overlay),y=this.#tW,b={type:o,element:e,isInViewport:!1,intersectionState:tg(y),width:l.right-l.left,height:l.bottom-l.top,passes:[],bufferTargets:new Map,startTime:y,enterTime:y,leaveTime:-1/0,release:t.release??1/0,isGif:m,isFullScreen:u,overflow:h,intersection:d,originalOpacity:p,srcTexture:s,zIndex:t.zIndex??0,backbuffer:void 0,autoCrop:x,effectLastRenderTime:y},E=eC(()=>b.srcTexture,()=>tM(b.srcTexture,"w"),()=>tM(b.srcTexture,"h")),T={},R={};if(t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r?(R[e]=r,T[e]=r()):T[e]=r;b.effectUniformGenerators=R,b.effectStaticUniforms=T;let S={autoCrop:x,glslVersion:t.glslVersion??"300 es"},C=new e5(this.#t,this.#v,this.#h,n,S,E,!1,this.#P);try{await C.initAll()}catch(t){throw this.#ri(n),s.dispose(),e.style.setProperty("opacity",p.toString()),t}b.chain=C,this.#re(b,l,y),this.#rt(b,w)}#t9(e){let t=t=>void 0===t.glslVersion&&void 0!==e.glslVersion?{...t,glslVersion:e.glslVersion}:t;return Array.isArray(e.shader)?e.shader.map(t):[t({frag:this.#rs(e.shader||"uvGradient")})]}async updateElementEffects(e,t){let r=this.#tH.find(t=>t.element===e);if(!r)throw Error("[VFX-JS] updateElementEffects: element not registered");if(!r.chain)throw Error("[VFX-JS] updateElementEffects: element is on the shader path; effect-only updates are not supported");let i=Array.isArray(t)?[...t]:[t],s=r.chain.effects,o=new Set(s),n=[];for(let e of i)if(!o.has(e)){if(this.#tV.has(e))throw Error("[VFX-JS] Effect instance already attached. Construct a new instance per `vfx.add()` / `postEffect`.");n.push(e)}await r.chain.replaceEffects(i);let a=new Set(i);for(let e of s)a.has(e)||this.#tV.delete(e);for(let e of n)this.#tV.add(e)}removeElement(e){let t=this.#tH.findIndex(t=>t.element===e);if(-1!==t){let r=this.#tH.splice(t,1)[0];if(r.chain)this.#ri(r.chain.effects),r.chain.dispose();else{for(let e of r.bufferTargets.values())e.dispose();for(let e of r.passes)e.pass.dispose(),e.backbuffer?.dispose();r.backbuffer?.dispose()}r.srcTexture.dispose(),e.style.setProperty("opacity",r.originalOpacity.toString())}}updateTextElement(e){let t=this.#tH.findIndex(t=>t.element===e);return -1!==t?this.#t8(this.#tH[t]):Promise.resolve()}async updateImageElement(e){let t=this.#tH.find(t=>t.element===e);if(t?.type!=="img"||t.isGif)return;let r=await Q(c(e)),i=t.srcTexture,s=new j(this.#t,r);s.wrapS=i.wrapS,s.wrapT=i.wrapT,s.premultiplyAlpha=i.premultiplyAlpha,s.needsUpdate=!0,!t.chain&&t.passes.length>0&&(t.passes[0].uniforms.src.value=s),t.srcTexture=s,i.dispose()}updateCanvasElement(e){let t=this.#tH.find(t=>t.element===e);if(t){let r=t.srcTexture,i=new j(this.#t,e);i.wrapS=r.wrapS,i.wrapT=r.wrapT,i.premultiplyAlpha=r.premultiplyAlpha,i.needsUpdate=!0,!t.chain&&t.passes.length>0&&(t.passes[0].uniforms.src.value=i),t.srcTexture=i,r.dispose()}}updateHICTexture(e,t){let r=this.#tH.find(t=>t.element===e);if(r?.type!=="hic")return;r.frozen&&tC(e,t);let i=r.srcTexture,s=this.#ro(i,t);s!==i&&(!r.chain&&r.passes.length>0&&(r.passes[0].uniforms.src.value=s),r.srcTexture=s)}#ro(e,t){if(e.source===t)return e.needsUpdate=!0,e;let r=new j(this.#t,t);return r.wrapS=e.wrapS,r.wrapT=e.wrapT,r.premultiplyAlpha=e.premultiplyAlpha,r.needsUpdate=!0,e.dispose(),r}liveTexture(){var e,t,r;let i,s,o;return e=e=>{let t=new j(this.#t,e);return t.premultiplyAlpha=!0,t.needsUpdate=!0,t},t=(e,t)=>this.#ro(e,t),r=tM,i=null,s=!1,o=eC(()=>i,()=>i?r(i,"w"):0,()=>i?r(i,"h"):0),{get texture(){return i?o:null},update(r){s||(i=i?t(i,r):e(r))},dispose(){s=!0,i?.dispose(),i=null}}}freezeInside(e){return this.#tw.freezeInside(e,this.#tH)}isFrozen(e){return this.#tH.some(t=>t.element===e&&t.frozen)}forceRender(e){let t=this.#tH.find(t=>t.element===e);return!t||t.forceRender?()=>{}:(t.forceRender=!0,()=>{t.forceRender=!1})}get maxTextureSize(){return this.#t.maxTextureSize}isPlaying(){return void 0!==this.#t$}play(){this.isPlaying()||(this.#tq=Date.now()/1e3,this.#t$=requestAnimationFrame(this.#rn))}get time(){return this.#tW}setTime(e){this.#tW=e,this.#tK=!0}get timeScale(){return this.#tG}set timeScale(e){this.#tG=e}stop(){void 0!==this.#t$&&(cancelAnimationFrame(this.#t$),this.#t$=void 0)}render(){let e=Date.now()/1e3;this.#tK?this.#tK=!1:this.#tW+=(e-this.#tq)*this.#tG,this.#tq=e;let t=this.#tW,r=this.#C;this.#t6(),r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,this.#eh.width,this.#eh.height),r.clear(r.COLOR_BUFFER_BIT);let i=this.#tJ.right-this.#tJ.left,s=this.#tJ.bottom-this.#tJ.top,o={x:0,y:0,w:i,h:s},n=this.#ra();for(let e of(n&&(this.#rl(i,s),this.#tU&&(r.bindFramebuffer(r.FRAMEBUFFER,this.#tU.fbo),r.clear(r.COLOR_BUFFER_BIT),r.bindFramebuffer(r.FRAMEBUFFER,null))),this.#tH)){if(e.frozen){e.intersectionState.lastTime=t;continue}let r=e.element.getBoundingClientRect(),a="text"===e.type?e1(r):e0(r),l=this.#re(e,a,t);if(!l.isVisible)continue;if(e.chain){this.#ru(e,a,l,t);continue}let u=e.passes[0].uniforms;for(let r of(u.time.value=t-e.startTime,u.resolution.value.set((a.right-a.left)*this.#h,(a.bottom-a.top)*this.#h),u.mouse.value.set((this.#t0+this.#tZ)*this.#h,(this.#t1+this.#tQ)*this.#h),e.passes))for(let[e,t]of Object.entries(r.uniformGenerators))r.uniforms[e].value=t();tT.get(e.element)?.update(),("video"===e.type||e.isGif)&&(u.src.value.needsUpdate=!0);let f=er(a,s,this.#tZ,this.#tQ),h=er(l.rectWithOverflow,s,this.#tZ,this.#tQ);e.backbuffer&&(e.passes[0].uniforms.backbuffer.value=e.backbuffer.texture);{let t=e.isFullScreen?o:h,r=Math.max(1,t.w*this.#h),i=Math.max(1,t.h*this.#h),s=Math.max(1,t.w),n=Math.max(1,t.h);for(let t=0;t<e.passes.length-1;t++){let o=e.passes[t];if(!o.size)if(o.backbuffer)o.backbuffer.resize(s,n);else{let t=e.bufferTargets.get(o.target);t&&(t.width!==r||t.height!==i)&&t.setSize(r,i)}}}let c=new Map;for(let t of e.passes)t.backbuffer&&t.target&&c.set(t.target,t.backbuffer.texture);let d=e.srcTexture;for(let t=0;t<e.passes.length-1;t++){let i=e.passes[t],s=e.isFullScreen?o:h;for(let[e,t]of(i.uniforms.src.value=d,c))i.uniforms[e]&&(i.uniforms[e].value=t);for(let[e,t]of Object.entries(i.uniformGenerators))i.uniforms[e]&&(i.uniforms[e].value=t());let n=i.size?{x:0,y:0,w:i.size[0],h:i.size[1]}:{x:0,y:0,w:s.w,h:s.h},a=function(e,t,r,i,s,o,n){let a=s[0]+o[0]-r.x,l=s[1]+o[1]-r.y;return i?{resolution:[i[0],i[1]],offset:[0,0],mouse:[a/r.w*i[0],l/r.h*i[1]]}:{resolution:[e.width*n,e.height*n],offset:[(t.x-r.x)*n,(t.y-r.y)*n],mouse:[a*n,l*n]}}(r,f,s,i.size,[this.#t0,this.#t1],[this.#tZ,this.#tQ],this.#h);if(i.uniforms.resolution.value.set(...a.resolution),i.uniforms.offset.value.set(...a.offset),i.uniforms.mouse.value.set(...a.mouse),i.backbuffer)this.#rf(i.pass,i.backbuffer.target,n,i.uniforms,!0),i.backbuffer.swap(),d=i.backbuffer.texture;else{let t=e.bufferTargets.get(i.target);if(!t)continue;this.#rf(i.pass,t,n,i.uniforms,!0),d=t.texture}i.target&&c.set(i.target,d)}let p=e.passes[e.passes.length-1];for(let[e,t]of(p.uniforms.src.value=d,p.uniforms.resolution.value.set(r.width*this.#h,r.height*this.#h),p.uniforms.offset.value.set(f.x*this.#h,f.y*this.#h),p.uniforms.mouse.value.set((this.#t0+this.#tZ)*this.#h,(this.#t1+this.#tQ)*this.#h),c))p.uniforms[e]&&(p.uniforms[e].value=t);for(let[e,t]of Object.entries(p.uniformGenerators))p.uniforms[e]&&(p.uniforms[e].value=t());e.backbuffer?(p.uniforms.backbuffer.value=e.backbuffer.texture,e.isFullScreen?(e.backbuffer.resize(i,s),this.#rh(e,f.x,f.y),this.#rf(p.pass,e.backbuffer.target,o,p.uniforms,!0),e.backbuffer.swap(),this.#tL.setUniforms(e.backbuffer.texture,this.#h,o),this.#rf(this.#tL.pass,n&&this.#tU||null,o,this.#tL.uniforms,!1)):(e.backbuffer.resize(h.w,h.h),this.#rh(e,e.overflow.left,e.overflow.bottom),this.#rf(p.pass,e.backbuffer.target,e.backbuffer.getViewport(),p.uniforms,!0),e.backbuffer.swap(),this.#tL.setUniforms(e.backbuffer.texture,this.#h,h),this.#rf(this.#tL.pass,n&&this.#tU||null,h,this.#tL.uniforms,!1))):(this.#rh(e,f.x,f.y),this.#rf(p.pass,n&&this.#tU||null,e.isFullScreen?o:h,p.uniforms,!1))}n&&this.#tU&&(this.#tB&&this.#tO?this.#rc(o,t):this.#rd(o,t))}#rn=()=>{this.isPlaying()&&(this.render(),this.#t$=requestAnimationFrame(this.#rn))};#ru(e,t,r,i){let s=e.chain;if(!s)return;let o=this.#h;tT.get(e.element)?.update(),("video"===e.type||e.isGif)&&(e.srcTexture.needsUpdate=!0);let n={...e.effectStaticUniforms??{}};if(e.effectUniformGenerators)for(let[t,r]of Object.entries(e.effectUniformGenerators))n[t]=r();let a=this.#tJ.right-this.#tJ.left,l=this.#tJ.bottom-this.#tJ.top,u=er(t,l,this.#tZ,this.#tQ),f=this.#t0+this.#tZ-u.x,h=this.#t1+this.#tQ-u.y,c=t.right-t.left,d=t.bottom-t.top,p=e.effectLastRenderTime??i;e.effectLastRenderTime=i;let m=this.#ra()&&this.#tU?eA(this.#tU):null;s.run({time:i-e.startTime,deltaTime:i-p,mouse:[f*o,h*o],mouseViewport:[this.#t0*o,this.#t1*o],intersection:r.intersection,enterTime:tU(i-e.enterTime),leaveTime:tU(i-e.leaveTime),enterProgress:r.enterProgress,leaveProgress:r.leaveProgress,resolvedUniforms:n,canvasSize:[a,l],canvasBufferSize:[a*o,l*o],elementSize:[c,d],elementBufferSize:[c*o,d*o],elementRectOnCanvasPx:{x:u.x*o,y:u.y*o,w:u.w*o,h:u.h*o},finalTarget:m,isVisible:r.isVisible})}#ra(){return this.#t_.length>0||null!==this.#tB&&this.#tO}#rr(e){for(let t of e)if(this.#tV.has(t))throw Error("[VFX-JS] Effect instance already attached. Construct a new instance per `vfx.add()` / `postEffect`.");for(let t of e)this.#tV.add(t)}#ri(e){for(let t of e)this.#tV.delete(t)}#rp(e){let t=e.hitTestPadBuffer,r=this.#h;return eZ({top:t.top/r,right:t.right/r,bottom:t.bottom/r,left:t.left/r})}#re(e,t,r){var i,s,o,n,a,l,u,f;let h,c,d,p=e2(t,e.chain?this.#rp(e.chain):e.overflow),m=e.isFullScreen||tA(this.#tj,p),g=e2(this.#tj,e.intersection.rootMargin),v=e4(g.left,g.right,t.left,t.right)*e4(g.top,g.bottom,t.top,t.bottom);i=e,s=v,o=tA(g,t),n=r,c=(h=i.intersectionState).isIn,d=i.isFullScreen||function(e,t,r,i,s){let o=0===i?r:t>=i,n=0===s?!r:t<s,a=o&&!e.wasAbove,l=n&&!e.wasBelow;if(e.wasAbove=o,e.wasBelow=n,o&&!n)return!0;if(n&&!o)return!1;if(o&&n){if(a)return!0;if(l)return!1}return e.isIn}(h,s,o,i.intersection.threshold,i.intersection.leaveThreshold),!c&&d&&(i.enterTime=n,i.leaveTime=1/0),c&&!d&&(i.leaveTime=n),function(e,t,r,i){let s=r-e.lastTime;if(e.lastTime=r,e.isIn=t,function(e,t){switch(e.phase){case"hidden":if(t)return e.phase="entering",e.direction=1,!0;return!1;case"shown":if(!t)return e.phase="leaving",e.direction=1,!0;return!1;case"entering":return e.direction=t?1:-1,!1;case"leaving":return e.direction=t?-1:1,!1}}(e,t))return;let o=(s<0?s:e.direction*s)/i;if("entering"===e.phase){let t=e.enterProgress+o;o>0&&t>=1?tv(e,"shown"):o<0&&t<=0?tv(e,"hidden"):e.enterProgress=tx(t)}else if("leaving"===e.phase){let t=e.leaveProgress+o;o>0&&t>=1?tv(e,"hidden"):o<0&&t<=0?tv(e,"shown"):e.leaveProgress=tx(t)}}(h,d,n,i.intersection.duration);let{enterProgress:x,leaveProgress:w}=e.intersectionState;e.isInViewport=m;let y=m&&r-e.leaveTime<=e.release||!0===e.forceRender&&t.right>t.left&&t.bottom>t.top;return y&&!e.chain&&e.passes.length>0&&(a=e.passes[0].uniforms,l=e,u=v,f=r,a.intersection.value=u,a.enterTime.value=tU(f-l.enterTime),a.leaveTime.value=tU(f-l.leaveTime),a.enterProgress.value=l.intersectionState.enterProgress,a.leaveProgress.value=l.intersectionState.leaveProgress),{isVisible:y,intersection:v,rectWithOverflow:p,enterProgress:x,leaveProgress:w}}#rs(e){return e in eG?eG[e]:e}#rf(e,t,r,i,s){let o=this.#C;s&&null!==t&&t!==this.#tU&&(o.bindFramebuffer(o.FRAMEBUFFER,t.fbo),o.viewport(0,0,t.width,t.height),o.clear(o.COLOR_BUFFER_BIT));let n=i.viewport;n&&n.value instanceof el&&n.value.set(r.x*this.#h,r.y*this.#h,r.w*this.#h,r.h*this.#h);try{var a,l,u,f;let i,s,n,h,c,d,p,m;a=this.#v,l=this.#tY[0],u=this.#tY[1],f=this.#h,i=t?t.width/f:l,s=t?t.height/f:u,n=Math.max(0,r.x),h=Math.max(0,r.y),c=Math.min(i,r.x+r.w),d=Math.min(s,r.y+r.h),p=c-n,m=d-h,p<=0||m<=0||(o.bindFramebuffer(o.FRAMEBUFFER,t?t.fbo:null),o.viewport(Math.round(n*f),Math.round(h*f),Math.round(p*f),Math.round(m*f)),em(o,e.blend),e.program.use(),e.program.uploadUniforms(e.uniforms),a.draw())}catch(e){console.error(e)}}#rh(e,t,r){let i=e.passes[0].uniforms.offset.value;i.x=t*this.#h,i.y=r*this.#h}#t5(e){let t=1!==e.length||"frag"in e[0]?null:e[0];if(t&&void 0!==t.effect)return void this.#rm(t,t.effect);let r=[],i=[];for(let t of e)"frag"in t&&i.push(t);for(let e=0;e<i.length-1;e++)i[e].target||(i[e]={...i[e],target:`pass${e}`});for(let t of e){let e,i,s;if("frag"in t)e=t.frag,i=new tb(this.#t,e,t.uniforms,t.persistent??!1,t.float??!1,t.size,void 0!==t.target,t.glslVersion),s=t.target;else{if(void 0===t.shader)throw Error("VFXPostEffect requires `shader` (the `effect` path is not implemented yet).");e=this.#rs(t.shader),i=new tb(this.#t,e,t.uniforms,t.persistent??!1,t.float??!1,void 0,!1,t.glslVersion),t.persistent&&i.registerBufferUniform("backbuffer"),s=void 0}r.push(e);let o={};if(t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r&&(o[e]=r);this.#t_.push({pass:i,target:s,generators:o})}for(let e of i)e.target&&this.#tk.set(e.target,void 0);let s=this.#t_.map(e=>e.target).filter(e=>void 0!==e);for(let e=0;e<this.#t_.length;e++)for(let t of s)r[e].match(RegExp(`uniform\\s+sampler2D\\s+${t}\\b`))&&this.#t_[e].pass.registerBufferUniform(t)}#rm(e,t){void 0!==e.shader&&console.warn("[VFX-JS] Both `shader` and `effect` specified on post-effect; `effect` takes precedence.");let r=Array.isArray(t)?[...t]:[t];this.#rr(r);let i=eC(()=>{let e=this.#tU;if(!e)throw Error("[VFX-JS] post-effect chain active without target");return e.texture},()=>this.#tU?.width??0,()=>this.#tU?.height??0),s={autoCrop:!0,glslVersion:e.glslVersion??"300 es"},o=new e5(this.#t,this.#v,this.#h,r,s,i,!0,this.#P);if(e.uniforms)for(let[t,r]of Object.entries(e.uniforms))"function"==typeof r?(this.#tD[t]=r,this.#tN[t]=r()):this.#tN[t]=r;this.#tB=o,this.#tX=this.#tW,o.initAll().then(()=>{this.#tB===o&&(this.#tO=!0)}).catch(e=>{console.error("[VFX-JS] Post-effect init failed; post-effect disabled:",e),this.#tB===o&&(this.#ri(this.#tB.effects),this.#tB.dispose(),this.#tB=null,this.#tO=!1)})}#rc(e,t){let r=this.#tB;if(!r)return;let i=this.#h,s={...this.#tN};for(let[e,t]of Object.entries(this.#tD))s[e]=t();let o=this.#tJ.right-this.#tJ.left,n=this.#tJ.bottom-this.#tJ.top,a=this.#tX;this.#tX=t;let l=[o,n],u=[o*i,n*i],f={x:e.x*i,y:e.y*i,w:e.w*i,h:e.h*i};r.run({time:t,deltaTime:t-a,mouse:[this.#t0*i,this.#t1*i],mouseViewport:[this.#t0*i,this.#t1*i],intersection:1,enterTime:0,leaveTime:0,enterProgress:1,leaveProgress:0,resolvedUniforms:s,canvasSize:l,canvasBufferSize:u,elementSize:l,elementBufferSize:u,elementRectOnCanvasPx:f,finalTarget:null,isVisible:!0})}#rd(e,t){if(!this.#tU)return;let r=this.#tU.texture,i=new Map;for(let{pass:e,target:t}of this.#t_)t&&e.backbuffer&&i.set(t,e.backbuffer.texture);for(let s=0;s<this.#t_.length;s++){let{pass:o,target:n,generators:a}=this.#t_[s],l=s===this.#t_.length-1,u=this.#t0+this.#tZ,f=this.#t1+this.#tQ,h=o.size;if(h){let[i,s]=h;o.uniforms.src.value=r,o.uniforms.resolution.value.set(i,s),o.uniforms.offset.value.set(0,0),o.uniforms.time.value=t,o.uniforms.mouse.value.set(u/e.w*i,f/e.h*s)}else o.setUniforms(r,this.#h,e,t,u,f);for(let[e,t]of(o.uniforms.passIndex.value=s,o.updateCustomUniforms(a),i)){let r=o.uniforms[e];r&&(r.value=t)}if(l)o.backbuffer?(o.uniforms.backbuffer&&(o.uniforms.backbuffer.value=o.backbuffer.texture),this.#rf(o.pass,o.backbuffer.target,e,o.uniforms,!0),o.backbuffer.swap(),this.#tL.setUniforms(o.backbuffer.texture,this.#h,e),this.#rf(this.#tL.pass,null,e,this.#tL.uniforms,!1)):this.#rf(o.pass,null,e,o.uniforms,!1);else if(o.backbuffer){o.uniforms.backbuffer&&(o.uniforms.backbuffer.value=o.backbuffer.texture);let t=h?{x:0,y:0,w:h[0]/this.#h,h:h[1]/this.#h}:e;this.#rf(o.pass,o.backbuffer.target,t,o.uniforms,!0),o.backbuffer.swap(),r=o.backbuffer.texture,n&&i.set(n,o.backbuffer.texture)}else{let t=n??`postEffect${s}`,a=this.#tk.get(t),l=h?h[0]:e.w*this.#h,u=h?h[1]:e.h*this.#h;a&&a.width===l&&a.height===u||(a?.dispose(),a=tw(this.#t,l,u,{float:o.float}),this.#tk.set(t,a));let f=h?{x:0,y:0,w:h[0]/this.#h,h:h[1]/this.#h}:e;this.#rf(o.pass,a,f,o.uniforms,!0),r=a.texture,n&&i.set(n,a.texture)}}}#rl(e,t){let r=e*this.#h,i=t*this.#h;for(let{pass:s}of(this.#tU&&this.#tU.width===r&&this.#tU.height===i||(this.#tU?.dispose(),this.#tU=tw(this.#t,r,i)),this.#t_))s.persistent&&!s.backbuffer?s.initializeBackbuffer(this.#t,e,t,this.#h):s.backbuffer&&s.resizeBackbuffer(e,t)}}function tA(e,t){return t.left<=e.right&&t.right>=e.left&&t.top<=e.bottom&&t.bottom>=e.top}function tF(e){return!0===e?[!0,eQ]:void 0===e?[!1,eQ]:[!1,eZ(e)]}function tz(e){let t=e?.threshold??0,r=eZ(e?.rootMargin??0),i=e?.leaveThreshold??t,s=e?.duration??1;return Number.isFinite(s)&&s>0||(tR||(tR=!0,console.warn(`[VFX-JS] \`intersection.duration\` must be a finite number above 0, got ${s}. Using 1 instead.`)),s=1),{threshold:t,leaveThreshold:i,rootMargin:r,duration:s}}function tM(e,t){let r=e.source;return r?"u">typeof HTMLImageElement&&r instanceof HTMLImageElement?"w"===t?r.naturalWidth:r.naturalHeight:"u">typeof HTMLVideoElement&&r instanceof HTMLVideoElement?"w"===t?r.videoWidth:r.videoHeight:"w"===t?r.width:r.height:0}function tI(e){return"repeat"===e?"repeat":"mirror"===e?"mirror":"clamp"}function tL(e){if(!e)return["clamp","clamp"];if(Array.isArray(e))return[tI(e[0]),tI(e[1])];let t=tI(e);return[t,t]}function t_(e,t,r){return Math.max(t,Math.min(r,e))}function tU(e){return t_(e,-1e6,1e6)}function tk(e){return!(e instanceof HTMLImageElement||e instanceof HTMLVideoElement||e instanceof HTMLCanvasElement)}e.s(["f",0,class e{#rg;#eh;#rv=new Map;#rx=new Set;#rw;static init(t){try{return new e(t)}catch{return null}}constructor(e={}){let t,r,i;if("u"<typeof document)throw"Cannot find 'document'. VFX-JS only runs on the browser.";if(!function(){try{let e=document.createElement("canvas"),t=e.getContext("webgl2")||e.getContext("webgl");return null!==t}catch{return!1}}())throw Error("[VFX-JS] WebGL is not available in this environment.");let s=(i=window.devicePixelRatio,t=void 0===e.scrollPadding?[.1,.1]:!1===e.scrollPadding?[0,0]:Array.isArray(e.scrollPadding)?[e.scrollPadding[0]??.1,e.scrollPadding[1]??.1]:[e.scrollPadding,e.scrollPadding],r=void 0===e.postEffect?[]:Array.isArray(e.postEffect)?e.postEffect:[e.postEffect],{pixelRatio:e.pixelRatio??i,zIndex:e.zIndex??void 0,autoplay:e.autoplay??!0,fixedCanvas:!1===e.scrollPadding,scrollPadding:t,wrapper:e.wrapper,postEffects:r,preserveDrawingBuffer:e.preserveDrawingBuffer??!1,timeScale:e.timeScale??1});this.#rw=function(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}();let o=document.createElement("canvas");for(let[e,t]of Object.entries({position:s.fixedCanvas?"fixed":"absolute",top:0,left:0,width:"0px",height:"0px","z-index":9999,"pointer-events":"none"}))o.style.setProperty(e,t.toString());void 0!==s.zIndex&&o.style.setProperty("z-index",s.zIndex.toString()),(s.wrapper??document.body).appendChild(o),this.#eh=o,this.#rg=new tP(s,o),s.autoplay&&this.play()}async add(e,t,r){this.#rw||(e instanceof HTMLImageElement?await this.#ry(e,t):e instanceof HTMLVideoElement?await this.#rb(e,t):e instanceof HTMLCanvasElement?f(e)&&r?await this.#rE(e,t,r):await this.#rT(e,t):await this.#rR(e,t))}updateHICTexture(e,t){this.#rg.updateHICTexture(e,t)}get reducedMotion(){return this.#rw}get maxTextureSize(){return this.#rg.maxTextureSize}get canvas(){return this.#eh}addHTML(e,t){return this.#rS(e,t,!1)}addHTMLWithStill(e,t){return this.#rS(e,t,!0)}async #rS(e,t,r){if(this.#rw)return;if(!J())return console.warn("html-in-canvas not supported, falling back to dom-to-canvas"),this.add(e,t);void 0!==t.overlay&&console.warn("addHTML does not support overlay mode (layoutsubtree hides children). Ignoring overlay option.");let{overlay:i,...s}=t,o=this.#rv.get(e);o&&this.#rg.removeElement(o);let{canvas:n,initialCapture:a}=await q(e,{onCapture:e=>{this.#rg.updateHICTexture(n,e)},maxSize:this.#rg.maxTextureSize,stillCover:r?{zIndex:this.#rC()}:void 0});o=n,this.#rv.set(e,o),await this.#rE(o,s,a)}#rC(){let e=Number.parseInt(this.#eh.style.zIndex,10);return Number.isNaN(e)?9998:e-1}async #rE(e,t,r){try{await this.#rg.addElement(e,t,r)}finally{D(e,this.#rg.isFrozen(e))}}addTransition(e,t={}){let r=new eV(this,e,t,()=>this.#rx.delete(r));return this.#rx.add(r),r}freezeInside(e){return this.#rg.freezeInside(e)}captureLive(e){return J()?function(e,t,r,i={setupCapture:X,teardownCapture:$}){let s=!1;return i.setupCapture(e,{onCapture:e=>t.update(e),maxSize:r}).then(r=>{s||(e.getContext("2d")?.clearRect(0,0,e.width,e.height),t.update(r))},e=>console.error("[VFX-JS] live capture failed:",e)),{get texture(){return t.texture},dispose(){s||(s=!0,i.teardownCapture(e),t.dispose())}}}(e,this.#rg.liveTexture(),this.#rg.maxTextureSize):{texture:null,dispose:()=>{}}}lockSize(e){let t=this.#rv.get(e);return t?V(t):()=>{}}forceRender(e){let t=this.#rv.get(e)??e;return this.#rg.forceRender(t)}remove(e){let t=this.#rv.get(e);t?(K(t,e),this.#rv.delete(e),this.#rg.removeElement(t)):this.#rg.removeElement(e)}updateEffects(e,t){if(this.#rw)return Promise.resolve();let r=this.#rv.get(e)??e;return this.#rg.updateElementEffects(r,t)}async update(e){await this.updateInTime(e)}async updateInTime(e){let t=this.#rv.get(e)??(e instanceof HTMLCanvasElement?e:null),r=t?O(t):void 0;return r||(e instanceof HTMLImageElement?await this.#rg.updateImageElement(e):e instanceof HTMLCanvasElement?this.#rg.updateCanvasElement(e):await this.#rg.updateTextElement(e),!0)}play(){this.#rw||this.#rg.play()}stop(){this.#rg.stop()}render(){this.#rw||this.#rg.render()}get time(){return this.#rg.time}setTime(e){this.#rg.setTime(e)}get timeScale(){return this.#rg.timeScale}set timeScale(e){this.#rg.timeScale=e}destroy(){for(let e of this.#rx)e.destroy();for(let[e,t]of(this.#rx.clear(),this.#rv))K(t,e);this.#rv.clear(),this.#rg.destroy(),this.#eh.remove()}#ry(e,t){return e.complete?this.#rg.addElement(e,t):new Promise(r=>{e.addEventListener("load",()=>{this.#rg.addElement(e,t),r()},{once:!0})})}#rb(e,t){return e.readyState>=3?this.#rg.addElement(e,t):new Promise(r=>{e.addEventListener("canplay",()=>{this.#rg.addElement(e,t),r()},{once:!0})})}#rT(e,t){return this.#rg.addElement(e,t)}#rR(e,t){return this.#rg.addElement(e,t)}}],61388),e.s([],90422);let tB=`
vec4 splitRead(vec2 uvr, vec2 uvg, vec2 uvb, bool to) {
  vec4 r = to ? readTo(uvr) : readFrom(uvr);
  vec4 g = to ? readTo(uvg) : readFrom(uvg);
  vec4 b = to ? readTo(uvb) : readFrom(uvb);
  return vec4(r.r, g.g, b.b, (r.a + g.a + b.a) / 3.0);
}
`,tO=`
float ign(vec2 p) {
  return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
}
`,tV=`
vec2 mirror(vec2 p) {
  return 1.0 - abs(1.0 - mod(p, 2.0));
}
`,tN=e=>"function"==typeof e.render&&!1!==e.enabled;e.s(["s",0,class extends l{name="hard_cut";frag=`
vec4 transition(vec2 uv, float t) {
  return t < 0.5 ? readFrom(uv) : readTo(uv);
}
`},"j",0,tO,"S",0,tV,"F",0,tB,"A",0,class{params;#c=[];constructor(e={}){this.params=e}async init(e){for(let t of(this.#c=this.stages.slice(1).map(()=>e.createRenderTarget()),this.stages))await t.init?.(e)}start(e){for(let t of this.stages)t.start?.(e)}update(e){for(let t of this.stages)t.update?.(e)}render(e){let t=this.stages.filter(tN);if(0===t.length)return void e.blit(e.src);let r=e.src;for(let[i,s]of t.entries()){if(i===t.length-1)return void s.render?.({...e,src:r});let o=this.#c[i];e.clear(o),s.render?.(function(e,t,r){return{...e,src:t,target:r,draw:t=>e.draw({...t,target:t.target??r}),blit:(t,i,s)=>e.blit(t,i??r,s),clear:t=>e.clear(t??r)}}(e,r,o)),r=o}}end(){for(let e of this.stages)e.end?.()}outputRect(e){let t=this.stages.filter(tN);return t[t.length-1]?.outputRect?.(e)}dispose(){for(let e of this.stages)e.dispose?.();for(let e of this.#c)e.dispose();this.#c=[]}}],66601),e.s(["f",0,class extends l{name="lens_distortion";frag=`
uniform float strength;
uniform float dispersion;
// The old content zooms from 1 to 1 + zoom; the new one from 1 + zoom back to 1.
uniform float zoom;
const float TAPS = 12.0;
// Width of the growing warp's edge.
const float SOFT = 0.5;

${tO}
${tV}
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