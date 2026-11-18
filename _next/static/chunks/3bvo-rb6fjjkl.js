(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,83790,86679,6010,28263,36951,1633,e=>{e.i(90422),e.i(18289),e.i(7150);var t=e.i(16597),r=e.i(81290),i=e.i(60416),s=e.i(3066);e.s([],83790),e.i(61069),e.s([],86679),e.i(61388),e.i(99984),e.s([],6010),e.s([],28263),e.s(["f",0,function(e){return t.forwardRef(function(o,n){let a=(0,s.f)(),[l,u]=(0,t.useState)(null),{vfxProps:h,domProps:f}=(0,i.r)(o);return(0,r.Y)(l,a,h),(0,t.useEffect)(()=>{if(!a||!l)return;let e=new MutationObserver(()=>a.update(l));return e.observe(l,{characterData:!0,attributes:!0,subtree:!0}),()=>e.disconnect()},[l,a]),t.createElement(e,{...f,ref:e=>{u(e),n instanceof Function?n(e):n&&(n.current=e)}})})}],36951),e.s([],1633)},52729,e=>{e.i(83790),e.i(99984),e.i(86679),e.i(6010),e.i(28263);var t=e.i(36951);e.i(1633),e.i(58786),e.i(59443),e.i(24979),e.i(41570),(0,t.f)("span"),(0,t.f)("div"),(0,t.f)("p"),e.s([],52729)},81290,60416,e=>{var t=e.i(16597);let r=["shader","release","uniforms","overlay","intersection","overflow","wrap","zIndex","backbuffer","autoCrop","glslVersion","effect"];e.s(["B",0,r,"r",0,function(e){let t={},i={};for(let s of Object.keys(e))r.includes(s)?t[s]=e[s]:i[s]=e[s];return{vfxProps:t,domProps:i}}],60416);let i=r.filter(e=>"effect"!==e);function s(){let e=Promise.resolve();return{enqueue(t){let r=e.then(t,t);return e=r.then(()=>{},()=>{}),r}}}async function o(e,t,r,s,o){let n=function(e,t){for(let r of i)if(e[r]!==t[r])return!1;return!0}(r,s);if(!n||r.effect!==s.effect){if(n&&void 0!==s.effect)return void await e.updateEffects(t,s.effect);e.remove(t),await o(t,s)}}e.s(["P",0,o,"$",0,s,"Y",0,function(e,r,i){let n=(0,t.useRef)(i);n.current=i;let a=(0,t.useRef)(null),l=(0,t.useRef)(null);(0,t.useEffect)(()=>{if(!r||!e)return;let t=l.current;null===t&&(l.current=t=s());let i=!1;return t.enqueue(async()=>{if(i)return;let t=n.current;try{await r.add(e,t),a.current=t}catch(e){console.error("[@vfx-js/react] add failed:",e)}}),()=>{i=!0,t.enqueue(()=>{r.remove(e),a.current=null})}},[e,r]),(0,t.useEffect)(()=>{if(!r||!e)return;let t=l.current;null===t&&(l.current=t=s()),t.enqueue(async()=>{let t=a.current;if(t&&t!==i)try{await o(r,e,t,i,(e,t)=>r.add(e,t)),a.current=i}catch(e){console.error("[@vfx-js/react] applyDelta failed:",e)}})},[r,e,i])}],81290)},58786,59443,e=>{var t=e.i(16597),r=e.i(76137),i=e.i(36180);e.s(["f",0,function(e){let s=(0,t.useContext)(i.f),o=(0,t.useRef)(e);(0,t.useLayoutEffect)(()=>s?s.register(o.current):void(0,r.R)("transition-in","[@vfx-js/react] useTransitionIn does nothing outside <VFXTransition>."),[s])}],58786),e.s([],59443)},41570,22305,e=>{var t=e.i(61069),r=e.i(16597),i=e.i(3066),s=e.i(54057),o=e.i(36180);let n=null;function a(){let e=null!==n&&Date.now()-n.at<=1e4?n:null;return n=null,e?e.spec:null}function l(e){n={spec:e,at:Date.now()}}e.s(["n",0,l,"i",0,a,"e",0,function(e){return t=>{(function(e){if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return!1;let t=e.currentTarget?.getAttribute?.("target");return!t||"_self"===t})(t)&&l(e)}}],22305);let u={display:"contents"},h={display:"contents"},f={height:"100dvh",overflow:"hidden"};e.s(["f",0,function(e){let{pageKey:n,children:l,className:c,style:d,fullscreen:p=!0,...m}=e,g=(0,i.f)(),v=(0,s.f)(m),x=(0,r.useRef)(null),w=(0,r.useRef)(null),[y,b]=(0,r.useState)(()=>({kept:[],shown:{key:n,node:l,id:0}})),{shown:E}=y,T=(0,r.useRef)(1),S=(0,r.useRef)(new Map),R=(0,r.useRef)(n),C=(0,r.useRef)([]),P=(0,r.useRef)(null),[F]=(0,r.useState)(()=>({register:e=>(P.current=e,()=>{P.current===e&&(P.current=null)})}));(0,r.useEffect)(()=>{let e=x.current;if(!g||!e)return;let t=g.addTransition(e,v);return w.current=t,()=>{t.destroy(),w.current=null}},[g,v]);let A=(0,r.useRef)(E.id);(0,r.useLayoutEffect)(()=>{A.current=E.id;let e=C.current;for(let t of(C.current=[],e))t()},[E]),(0,r.useEffect)(()=>{if(n===R.current)return;R.current=n;let e={key:n,node:l,id:T.current++},t=w.current;t&&void 0!==n?(P.current=null,t.run(t=>new Promise(i=>{if(R.current!==n)return void i();let s=z(t);C.current.push(i),(0,r.startTransition)(()=>b(t=>({kept:s?[...t.kept,s]:t.kept,shown:e})))}),()=>a()??P.current??{}).catch(e=>{console.error("[@vfx-js/react] VFXTransition run failed:",e)})):(0,r.startTransition)(()=>b(t=>({...t,shown:e})))});let z=e=>{let t=L.current,{id:r}=t,i=S.current.get(r);if(!v.keepPlaying||!i)return null;let s=i.parentNode;return e.keepPlaying(i,e=>{A.current!==r&&(e.style.display="none"),b(e=>({...e,kept:e.kept.filter(e=>e.id!==r)}))}),i.parentNode!==s?t:null},L=(0,r.useRef)(E);L.current.id!==E.id&&(L.current=E),(void 0===n||n===E.key)&&(L.current={...E,node:l});let M=[...y.kept,L.current];return(0,t.jsx)("div",{style:u,children:(0,t.jsx)("div",{ref:x,className:c,style:p?{...f,...d}:d,children:(0,t.jsx)(o.f.Provider,{value:F,children:M.map(e=>m.keepPlaying||e!==L.current?(0,t.jsx)("div",{style:h,ref:t=>{t?S.current.set(e.id,t):S.current.delete(e.id)},children:e.node},e.id):(0,t.jsx)(r.Fragment,{children:e.node},e.id))})})})}],41570)},54057,e=>{var t=e.i(16597);e.s(["f",0,function(e){let r=(0,t.useRef)({}).current;for(let t of Object.keys(r))t in e||delete r[t];return Object.assign(r,e),r}])},36180,e=>{let t=(0,e.i(16597).createContext)(null);e.s(["f",0,t])},24979,e=>{var t=e.i(16597),r=e.i(3066),i=e.i(54057);let s={keepPlaying:()=>{}};e.s(["f",0,function(e={}){let o=(0,r.f)(),n=(0,i.f)(e),[a,l]=(0,t.useState)(null),u=(0,t.useRef)(null),[h,f]=(0,t.useTransition)(),c=(0,t.useRef)(!1),d=(0,t.useRef)([]);(0,t.useEffect)(()=>{if(!o||!a)return;let e=o.addTransition(a,n);return u.current=e,()=>{e.destroy(),u.current=null}},[o,a,n]),(0,t.useLayoutEffect)(()=>{if(h){c.current=!0;return}if(c.current){c.current=!1;let e=d.current;for(let t of(d.current=[],e))t()}},[h]);let p=(0,t.useCallback)(e=>new Promise(t=>{d.current.push(t),c.current=!1,f(e),requestAnimationFrame(()=>{c.current||t()})}),[]);return{ref:l,run:(0,t.useCallback)(async(e,t)=>{let r=u.current;r?await r.run(t=>p(()=>e(t)),t):await p(()=>e(s))},[p])}}])},3066,99984,76137,e=>{var t=e.i(16597);let r=(0,t.createContext)(null),i=(0,t.createContext)(!1);e.s(["i",0,r,"V",0,i],99984),e.i(90422);var s=e.i(61388);let o=["pixelRatio","zIndex","postEffect","autoplay"],n=null,a={},l=0,u=!1,h=!1,f=[],c=new Set;function d(){for(let e of c)e()}function p(){n&&(n.stop(),n.destroy(),n=null)}function m(){var e;if(h=!1,0===l||u)return;let t=f[f.length-1]?.config??{};n&&(e=a,o.every(r=>t[r]===e[r]))||(p(),a=t,u=null===(n=s.f.init({...t})),d())}function g(){l++,h||(h=!0,queueMicrotask(m))}function v(){--l>0||requestAnimationFrame(()=>{l>0||(p(),d())})}function x(e){return c.add(e),()=>c.delete(e)}function w(){return n}let y=new Set;e.s(["Y",0,g,"S",0,w,"z",0,v,"i",0,x,"R",0,function(e,t){y.has(e)||(y.add(e),console.warn(t))}],76137);let b=()=>null,E=()=>()=>{};e.s(["f",0,function({acquire:e=!0}={}){let s=(0,t.useContext)(i),o=(0,t.useContext)(r),n=(0,t.useSyncExternalStore)(s?E:x,w,b);return(0,t.useEffect)(()=>{if(!s&&e)return g(),v},[s,e]),s?o:n}],3066)},90422,28113,63363,18289,7150,61388,66601,35668,e=>{let t,r,i=`#version 300 es
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
${s}`,n.set(e,t));return t}(this.frag),h=(t=e.gl,(l=a.get(t))||(l=new Set,a.set(t,l)),l);if(h.has(u)){e.cut(),e.blit(e.src);return}try{e.draw({frag:u,uniforms:{...this.uniforms(e),from:e.from,src:e.src,t:e.progress.t,reverse:+!!e.reverse,resolution:[e.dims.elementPixel[0],e.dims.elementPixel[1]],time:e.time},target:e.target})}catch(i){let t;h.add(u),r=this.name,(t=function(e){let t=e instanceof Error?e.message:String(e);if(!/compile failed|link failed/i.test(t))return null;let r=[];for(let e of t.matchAll(/ERROR:\s*\d+:(\d+):\s*(.*)/g)){let t=Number(e[1])-o;r.push(t>=1?`line ${t}: ${e[2]}`:e[2])}return r.length>0?r:[t.split("\n")[0]]}(i))?(console.error(`[VFX-JS] transition "${r}" failed to compile; cutting to the new content.
  ${t.join("\n  ")}`),console.debug(i)):console.error(`[VFX-JS] transition "${r}" failed; cutting to the new content.`,i),e.cut(),e.blit(e.src)}}}e.s(["f",0,l],28113);class u extends l{name="crossfade";frag=`
vec4 transition(vec2 uv, float t) {
  return mix(readFrom(uv), readTo(uv), t);
}
`}function h(e){return e.currentSrc||e.src}async function f(e,t,r,i){var s;let o,n,a,l,u=e.getBoundingClientRect(),h=window.devicePixelRatio,f=Math.ceil(u.width),p=Math.ceil(u.height),m=f*h,g=p*h,v=1,x=m,w=g;i&&(x>i||w>i)&&(v=Math.min(i/x,i/w),x=Math.floor(x*v),w=Math.floor(w*v));let y=r&&r.width===x&&r.height===w?r:new OffscreenCanvas(x,w),b=e.cloneNode(!0);await d(e,b),function e(t,r){if("function"==typeof t.computedStyleMap)try{let e=t.computedStyleMap();for(let t of["margin-top","margin-right","margin-bottom","margin-left"]){let i=e.get(t);i instanceof CSSKeywordValue&&"auto"===i.value&&r.style.setProperty(t,"auto")}}catch{}for(let i=0;i<t.children.length;i++){let s=t.children[i],o=r.children[i];s instanceof HTMLElement&&o instanceof HTMLElement&&e(s,o)}}(e,b),b.style.setProperty("opacity",t.toString()),b.style.setProperty("margin","0px"),function(e){let t=e;for(;;){let e=t.style;if(Number.parseFloat(e.paddingTop)>0||Number.parseFloat(e.borderTopWidth)>0||e.getPropertyValue("overflow-x")&&"visible"!==e.getPropertyValue("overflow-x")||e.getPropertyValue("overflow-y")&&"visible"!==e.getPropertyValue("overflow-y")||"flex"===e.display||"grid"===e.display||"flow-root"===e.display||"inline-block"===e.display)break;let r=t.firstElementChild;if(!r)break;r.style.setProperty("margin-top","0px"),t=r}for(t=e;;){let e=t.style;if(Number.parseFloat(e.paddingBottom)>0||Number.parseFloat(e.borderBottomWidth)>0||e.getPropertyValue("overflow-x")&&"visible"!==e.getPropertyValue("overflow-x")||e.getPropertyValue("overflow-y")&&"visible"!==e.getPropertyValue("overflow-y")||"flex"===e.display||"grid"===e.display||"flow-root"===e.display||"inline-block"===e.display)break;let r=t.lastElementChild;if(!r)break;r.style.setProperty("margin-bottom","0px"),t=r}}(b),function e(t,r){let i=-t.scrollLeft,s=-t.scrollTop;for(let o=0;o<t.children.length;o++){let n=t.children[o],a=r.children[o];n&&(a instanceof HTMLElement||a instanceof SVGElement)&&((0!==i||0!==s)&&function(e,t,r){let i=e.style.getPropertyValue("translate"),[s="0px",o="0px",n]=i&&"none"!==i?function(e){let t=[],r=0,i="";for(let s of e.trim())"("===s?r++:")"===s&&r--," "===s&&0===r?(i&&t.push(i),i=""):i+=s;return i&&t.push(i),t}(i):[],a=`calc(${s} + ${t}px) calc(${o} + ${r}px)`;e.style.setProperty("translate",n?`${a} ${n}`:a)}(a,i,s),e(n,a))}}(e,b),b.style.setProperty("box-sizing","border-box"),b.style.setProperty("width",`${f}px`),b.style.setProperty("height",`${p}px`);let E=(s=b.outerHTML,(a=(n=document.implementation.createHTMLDocument("test")).createRange()).selectNodeContents(n.documentElement),a.deleteContents(),l=document.createElement("head"),n.documentElement.appendChild(l),n.documentElement.appendChild(a.createContextualFragment(s)),n.documentElement.setAttribute("xmlns",n.documentElement.namespaceURI),new XMLSerializer().serializeToString(n).replace(/<!DOCTYPE html>/,"")),T=`<svg xmlns="http://www.w3.org/2000/svg" width="${m}" height="${g}"><foreignObject width="100%" height="100%">${E}</foreignObject></svg>`,S=await new Promise(e=>{let t=new Image;t.onload=()=>e(t),t.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(T)}`}),R=y.getContext("2d");if(null===R)throw Error("[VFX-JS] Failed to get 2D context");let C=()=>{R.clearRect(0,0,x,w);let e=h*v;R.scale(e,e),R.drawImage(S,0,0,m,g),R.setTransform(1,0,0,1,0,0)};if(C(),o=navigator.userAgent,/AppleWebKit/.test(o)&&!/Chrome\/|Chromium\//.test(o)&&b.querySelector("img"))for(let e=0;e<c;e++)await new Promise(e=>setTimeout(e,16)),C();return y}e.s(["f",0,u],63363);let c=3;async function d(e,t){let r=window.getComputedStyle(e);for(let e of Array.from(r))/(-inline-|-block-|^inline-|^block-)/.test(e)||/^-webkit-.*(start|end|before|after|logical)/.test(e)||t.style.setProperty(e,r.getPropertyValue(e),r.getPropertyPriority(e));if("INPUT"===t.tagName)t.setAttribute("value",t.value);else if("TEXTAREA"===t.tagName)t.innerHTML=t.value;else if("IMG"===t.tagName)try{t.src=await p(h(e))}catch{}for(let r=0;r<e.children.length;r++){let i=e.children[r],s=t.children[r];await d(i,s)}}async function p(e){let t=await fetch(e).then(e=>e.blob());return new Promise(e=>{let r=new FileReader;r.onload=function(){e(this.result)},r.readAsDataURL(t)})}class m{gl;texture;wrapS="clamp";wrapT="clamp";minFilter="linear";magFilter="linear";needsUpdate=!0;premultiplyAlpha=!1;source=null;#t;#r=!1;#i;#s;constructor(e,t,r){this.#t=e,this.gl=e.gl;let i=r?.externalHandle;this.#s=void 0!==i,void 0!==i?(this.texture=i,this.#r=!0,this.needsUpdate=!1):this.#o(),t&&(this.source=t),this.#i=r?.autoRegister!==!1&&!this.#s,this.#i&&e.addResource(this)}#o(){let e=this.gl.createTexture();if(!e)throw Error("[VFX-JS] Failed to create texture");this.texture=e}restore(){this.#s||(this.#o(),this.#r=!1,this.needsUpdate=!0)}bind(e){let t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture),this.needsUpdate&&(this.#n(!1),this.needsUpdate=!1)}upload(e){let t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture),this.#n(!0),this.needsUpdate=!1}#n(e){let t=this.gl,r=this.source;if(t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,4),r)try{t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,r)}catch(t){if(e)throw t;console.error(t)}else if(!this.#r){let e=new Uint8Array([0,0,0,0]);t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,e)}this.#a(),this.#r=!0}#a(){let e=this.gl;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,g(e,this.wrapS)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,g(e,this.wrapT)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,v(e,this.minFilter)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,v(e,this.magFilter))}dispose(){this.#i&&this.#t.removeResource(this),this.#s||this.gl.deleteTexture(this.texture)}}function g(e,t){return"repeat"===t?e.REPEAT:"mirror"===t?e.MIRRORED_REPEAT:e.CLAMP_TO_EDGE}function v(e,t){return"nearest"===t?e.NEAREST:e.LINEAR}function x(e){return new Promise((t,r)=>{let i=new Image;i.crossOrigin="anonymous",i.onload=()=>t(i),i.onerror=r,i.src=e})}class w{gl;width;height;float;mipmap;fbo;texture;#t;constructor(e,t,r,i={}){this.#t=e,this.gl=e.gl,this.width=Math.max(1,Math.floor(t)),this.height=Math.max(1,Math.floor(r)),this.float=i.float??!1,this.mipmap=i.mipmap??!1,this.texture=new m(e,void 0,{autoRegister:!1});let s=i.wrap;void 0!==s&&("string"==typeof s?(this.texture.wrapS=s,this.texture.wrapT=s):(this.texture.wrapS=s[0],this.texture.wrapT=s[1])),void 0!==i.filter&&(this.texture.minFilter=i.filter,this.texture.magFilter=i.filter),this.#l(),e.addResource(this)}setSize(e,t){let r=Math.max(1,Math.floor(e)),i=Math.max(1,Math.floor(t));(r!==this.width||i!==this.height)&&(this.width=r,this.height=i,this.#l())}restore(){this.texture.restore(),this.#l()}dispose(){this.#t.removeResource(this),this.gl.deleteFramebuffer(this.fbo),this.texture.dispose()}generateMipmaps(){if(!this.mipmap)return;let e=this.gl;e.bindTexture(e.TEXTURE_2D,this.texture.texture),e.generateMipmap(e.TEXTURE_2D),e.bindTexture(e.TEXTURE_2D,null)}#l(){let e=this.gl,t=this.fbo,r=e.createFramebuffer();if(!r)throw Error("[VFX-JS] Failed to create framebuffer");this.fbo=r;let i=this.texture.texture;e.bindTexture(e.TEXTURE_2D,i);let s=this.#t.floatLinearFilter;if(this.float&&s&&!this.#t.floatBlend)throw Error("[VFX-JS] EXT_float_blend is not supported.");let o=this.float?s?e.RGBA32F:e.RGBA16F:e.RGBA8,n=this.float?s?e.FLOAT:e.HALF_FLOAT:e.UNSIGNED_BYTE;if(this.mipmap){let t=Math.floor(Math.log2(Math.max(this.width,this.height)))+1,r=this.width,i=this.height;for(let s=0;s<t;s++)e.texImage2D(e.TEXTURE_2D,s,o,r,i,0,e.RGBA,n,null),r=Math.max(1,r>>1),i=Math.max(1,i>>1)}else e.texImage2D(e.TEXTURE_2D,0,o,this.width,this.height,0,e.RGBA,n,null);let a="nearest"===this.texture.minFilter?e.NEAREST:e.LINEAR,l="nearest"===this.texture.magFilter?e.NEAREST:e.LINEAR,u=this.mipmap?"nearest"===this.texture.minFilter?e.NEAREST_MIPMAP_NEAREST:e.LINEAR_MIPMAP_LINEAR:a,h=y(e,this.texture.wrapS),f=y(e,this.texture.wrapT);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,u),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,h),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,f),e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null),this.texture.needsUpdate=!1,this.texture.source=null,t&&e.deleteFramebuffer(t)}}function y(e,t){return"repeat"===t?e.REPEAT:"mirror"===t?e.MIRRORED_REPEAT:e.CLAMP_TO_EDGE}function b(e,t,r,i){return{x:e.left+r,y:t-i-e.bottom,w:e.right-e.left,h:e.bottom-e.top}}class E{#u;#h;#f;#c;constructor(e,t,r,i,s,o={}){this.#u=t,this.#h=r,this.#f=i;let n=t*i,a=r*i,l={float:s,wrap:o.wrap,filter:o.filter,mipmap:o.mipmap};this.#c=[new w(e,n,a,l),new w(e,n,a,l)]}get texture(){return this.#c[0].texture}get target(){return this.#c[1]}resize(e,t){if(e===this.#u&&t===this.#h)return;this.#u=e,this.#h=t;let r=e*this.#f,i=t*this.#f;this.#c[0].setSize(r,i),this.#c[1].setSize(r,i)}swap(){this.#c=[this.#c[1],this.#c[0]]}getViewport(){return{x:0,y:0,w:this.#u,h:this.#h}}dispose(){this.#c[0].dispose(),this.#c[1].dispose()}}let T=Object.freeze({__brand:"EffectQuad"});class S{gl;vao;#t;#d;#p;#m=[];#g=null;mode;indexType=0;hasIndices=!1;drawCount=0;drawStart=0;instanceCount;#i=!1;constructor(e,t,r){this.#t=e,this.gl=e.gl,this.#d=t,this.#p=r,this.mode=function(e,t){switch(t){case"lines":return e.LINES;case"lineStrip":return e.LINE_STRIP;case"points":return e.POINTS;default:return e.TRIANGLES}}(this.gl,t.mode),this.instanceCount=t.instanceCount??0,this.#l(),e.addResource(this),this.#i=!0}#l(){let e=this.gl,t=e.createVertexArray();if(!t)throw Error("[VFX-JS] Failed to create VAO");this.vao=t,e.bindVertexArray(t);let r=this.#p.program,i=null;for(let[t,s]of Object.entries(this.#d.attributes)){let o=!ArrayBuffer.isView(s)||s instanceof DataView?{name:t,data:s.data,itemSize:s.itemSize,normalized:s.normalized??!1,perInstance:s.perInstance??!1}:{name:t,data:s,itemSize:2,normalized:!1,perInstance:!1},n=e.getAttribLocation(r,o.name);if(n<0)continue;let a=e.createBuffer();if(!a)throw Error(`[VFX-JS] Failed to create VBO for "${o.name}"`);this.#m.push(a),e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,o.data,e.STATIC_DRAW);let l=function(e,t){if(t instanceof Float32Array)return e.FLOAT;if(t instanceof Uint8Array)return e.UNSIGNED_BYTE;if(t instanceof Uint16Array)return e.UNSIGNED_SHORT;if(t instanceof Uint32Array)return e.UNSIGNED_INT;if(t instanceof Int8Array)return e.BYTE;if(t instanceof Int16Array)return e.SHORT;if(t instanceof Int32Array)return e.INT;throw Error("[VFX-JS] Unsupported attribute typed array")}(e,o.data);e.enableVertexAttribArray(n),l===e.FLOAT||l===e.HALF_FLOAT||o.normalized?e.vertexAttribPointer(n,o.itemSize,l,o.normalized,0,0):e.vertexAttribIPointer(n,o.itemSize,l,0,0),o.perInstance&&e.vertexAttribDivisor(n,1),"position"===t&&null===i&&(i=o.data.length/o.itemSize)}let s=0,o=this.#d.indices;if(o){let t=e.createBuffer();if(!t)throw Error("[VFX-JS] Failed to create IBO");this.#g=t,e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),e.bufferData(e.ELEMENT_ARRAY_BUFFER,o,e.STATIC_DRAW),this.hasIndices=!0,this.indexType=o instanceof Uint32Array?e.UNSIGNED_INT:e.UNSIGNED_SHORT,s=o.length}else this.hasIndices=!1;e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null),this.#g&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null);let n=this.hasIndices?s:i??0,a=this.#d.drawRange;this.drawStart=a?.start??0,this.drawCount=a?.count!==void 0?a.count:Math.max(0,n-this.drawStart)}restore(){this.#m=[],this.#g=null,this.#l()}draw(){let e=this.gl;e.bindVertexArray(this.vao),this.hasIndices?this.instanceCount>0?e.drawElementsInstanced(this.mode,this.drawCount,this.indexType,this.drawStart*(this.indexType===e.UNSIGNED_INT?4:2),this.instanceCount):e.drawElements(this.mode,this.drawCount,this.indexType,this.drawStart*(this.indexType===e.UNSIGNED_INT?4:2)):this.instanceCount>0?e.drawArraysInstanced(this.mode,this.drawStart,this.drawCount,this.instanceCount):e.drawArrays(this.mode,this.drawStart,this.drawCount)}dispose(){this.#i&&(this.#t.removeResource(this),this.#i=!1);let e=this.gl;for(let t of(e.deleteVertexArray(this.vao),this.#m))e.deleteBuffer(t);this.#g&&e.deleteBuffer(this.#g),this.#m=[],this.#g=null}}class R{#t;#v;#x=new WeakMap;#w=new Set;constructor(e,t){this.#t=e,this.#v=t}get quad(){return this.#v}resolve(e,t){let r=this.#x.get(e);r||(r=new Map,this.#x.set(e,r));let i=r.get(t);return i||(i=new S(this.#t,e,t),r.set(t,i),this.#w.add(i)),i}release(e){let t=this.#x.get(e);if(t){for(let e of t.values())e.dispose(),this.#w.delete(e);this.#x.delete(e)}}dispose(){for(let e of this.#w)e.dispose();this.#w.clear()}}class C{x=0;y=0;constructor(e=0,t=0){this.x=e,this.y=t}set(e,t){return this.x=e,this.y=t,this}}class P{x=0;y=0;z=0;w=0;constructor(e=0,t=0,r=0,i=0){this.x=e,this.y=t,this.z=r,this.w=i}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}}function F(e){return/#version\s+300\s+es\b/.test(e)?"300 es":/#version\s+100\b/.test(e)||/\bgl_FragColor\b|\btexture2D\b|\bvarying\b|\battribute\b/.test(e)?"100":"300 es"}class A{gl;program;#t;#y;#b;#E;#T=new Map;constructor(e,t,r,i){this.#t=e,this.gl=e.gl,this.#y=t,this.#b=r,this.#E=i??F(r),this.#S(),e.addResource(this)}#S(){let e=this.gl,t=L(e,e.VERTEX_SHADER,M(this.#y,this.#E)),r=L(e,e.FRAGMENT_SHADER,M(this.#b,this.#E)),i=e.createProgram();if(!i)throw Error("[VFX-JS] Failed to create program");if(e.attachShader(i,t),e.attachShader(i,r),e.bindAttribLocation(i,0,"position"),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){let s=e.getProgramInfoLog(i)??"";throw e.deleteShader(t),e.deleteShader(r),e.deleteProgram(i),Error(`[VFX-JS] Program link failed: ${s}`)}e.detachShader(i,t),e.detachShader(i,r),e.deleteShader(t),e.deleteShader(r),this.program=i,this.#T.clear();let s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let t=0;t<s;t++){let r=e.getActiveUniform(i,t);if(!r)continue;let s=r.name.replace(/\[0\]$/,""),o=e.getUniformLocation(i,r.name);o&&this.#T.set(s,{location:o,type:r.type,size:r.size})}}restore(){this.#S()}use(){this.gl.useProgram(this.program)}hasUniform(e){return this.#T.has(e)}uploadUniforms(e){let t=this.gl,r=0;for(let[o,n]of this.#T){var i,s;let a=e[o];if(!a)continue;let l=a.value;if(!(null==l||"object"==typeof(i=l)&&"__brand"in i&&(z||(z=!0,console.warn("[VFX-JS] Texture uniforms work with `effect` only, not with `shader`. Ignoring the value.")),1))){if(35678===(s=n.type)||36298===s||36306===s||35682===s){l instanceof m&&(l.bind(r),t.uniform1i(n.location,r),r++);continue}l instanceof m||function(e,t,r){let i=t.location,s=t.size>1;switch(t.type){case e.FLOAT:s?e.uniform1fv(i,r):e.uniform1f(i,r);return;case e.FLOAT_VEC2:s?e.uniform2fv(i,r):r instanceof C?e.uniform2f(i,r.x,r.y):e.uniform2f(i,r[0],r[1]);return;case e.FLOAT_VEC3:s?e.uniform3fv(i,r):e.uniform3f(i,r[0],r[1],r[2]);return;case e.FLOAT_VEC4:s?e.uniform4fv(i,r):r instanceof P?e.uniform4f(i,r.x,r.y,r.z,r.w):e.uniform4f(i,r[0],r[1],r[2],r[3]);return;case e.INT:s?e.uniform1iv(i,r):e.uniform1i(i,r);return;case e.INT_VEC2:s?e.uniform2iv(i,r):e.uniform2i(i,r[0],r[1]);return;case e.INT_VEC3:s?e.uniform3iv(i,r):e.uniform3i(i,r[0],r[1],r[2]);return;case e.INT_VEC4:s?e.uniform4iv(i,r):e.uniform4i(i,r[0],r[1],r[2],r[3]);return;case e.BOOL:s?e.uniform1iv(i,r):e.uniform1i(i,+!!r);return;case e.BOOL_VEC2:s?e.uniform2iv(i,r):e.uniform2i(i,+!!r[0],+!!r[1]);return;case e.BOOL_VEC3:s?e.uniform3iv(i,r):e.uniform3i(i,+!!r[0],+!!r[1],+!!r[2]);return;case e.BOOL_VEC4:s?e.uniform4iv(i,r):e.uniform4i(i,+!!r[0],+!!r[1],+!!r[2],+!!r[3]);return;case e.FLOAT_MAT2:e.uniformMatrix2fv(i,!1,r);return;case e.FLOAT_MAT3:e.uniformMatrix3fv(i,!1,r);return;case e.FLOAT_MAT4:e.uniformMatrix4fv(i,!1,r);return;case e.UNSIGNED_INT:s?e.uniform1uiv(i,r):e.uniform1ui(i,r);return;case e.UNSIGNED_INT_VEC2:s?e.uniform2uiv(i,r):e.uniform2ui(i,r[0],r[1]);return;case e.UNSIGNED_INT_VEC3:s?e.uniform3uiv(i,r):e.uniform3ui(i,r[0],r[1],r[2]);return;case e.UNSIGNED_INT_VEC4:s?e.uniform4uiv(i,r):e.uniform4ui(i,r[0],r[1],r[2],r[3]);return;default:I.has(t.type)||(I.add(t.type),console.warn(`[VFX-JS] Unsupported uniform type 0x${t.type.toString(16)}; skipping upload.`));return}}(t,n,l)}}}dispose(){this.#t.removeResource(this),this.gl.deleteProgram(this.program)}}let z=!1;function L(e,t,r){let i=e.createShader(t);if(!i)throw Error("[VFX-JS] Failed to create shader");if(e.shaderSource(i,r),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(i)??"";throw e.deleteShader(i),Error(`[VFX-JS] Shader compile failed: ${t}

${r}`)}return i}function M(e,t){return e.replace(/^\s+/,"").startsWith("#version")||"100"===t?e:`#version 300 es
${e}`}let I=new Set;class _{gl;program;uniforms;blend;constructor(e,t,r,i,s,o){this.gl=e.gl,this.program=new A(e,t,r,o),this.uniforms=i,this.blend=s}dispose(){this.program.dispose()}}function U(e,t){"none"===t?e.disable(e.BLEND):(e.enable(e.BLEND),e.blendEquation(e.FUNC_ADD),"premultiplied"===t?e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA):"additive"===t?e.blendFuncSeparate(e.ONE,e.ONE,e.ONE,e.ONE):e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA))}let B=Symbol.for("@vfx-js/effect.resolve-texture"),k=Symbol.for("@vfx-js/effect.resolve-rt"),V=`#version 300 es
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
`,O=`
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
`,N=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D src;
void main() {
    outColor = texture(src, uv);
}
`,D=`
precision highp float;
varying vec2 uv;
uniform sampler2D src;
void main() {
    gl_FragColor = texture2D(src, uv);
}
`,X=`#version 300 es
precision highp float;
in vec2 uvSrc;
out vec4 outColor;
uniform sampler2D src;
void main() {
    bool inside = all(greaterThanEqual(uvSrc, vec2(0.0))) && all(lessThanEqual(uvSrc, vec2(1.0)));
    outColor = inside ? texture(src, uvSrc) : vec4(0.0);
}
`,H=`
precision highp float;
varying vec2 uvSrc;
uniform sampler2D src;
void main() {
    bool inside = all(greaterThanEqual(uvSrc, vec2(0.0))) && all(lessThanEqual(uvSrc, vec2(1.0)));
    gl_FragColor = inside ? texture2D(src, uvSrc) : vec4(0.0);
}
`;class ${#R;#C;#f;#P;#F;#A=[];#z=[];#L=[];#M=[];#I="init";#_=!1;#U;#B;#k;constructor(e,t,r,i,s,o){this.#R=e,this.#C=e.gl,this.#f=r,this.#P=o,this.#F=new R(e,t),this.#B={outputBufferW:1,outputBufferH:1,canvasBufferSize:[1,1],outputViewport:{x:0,y:0,w:1,h:1},elementBufferW:1,elementBufferH:1,contentRectUv:[0,0,1,1],srcRectUv:[0,0,1,1]};let n={time:0,deltaTime:0,pixelRatio:r,resolution:[1,1],mouse:[0,0],mouseViewport:[0,0],intersection:0,enterTime:0,leaveTime:0,enterProgress:0,leaveProgress:0,src:i,target:null,uniforms:{},vfxProps:s,dims:{element:[1,1],elementPixel:[1,1],canvas:[1,1],canvasPixel:[1,1],pixelRatio:r,contentRect:[0,0,1,1],srcRect:[0,0,1,1],canvasRect:[0,0,1,1]},quad:T,gl:this.#C,createRenderTarget:e=>this.#V(e),releaseGeometry:e=>this.#F.release(e),wrapTexture:(e,t)=>this.#O(e,t),draw:e=>this.#N(e),blit:(e,t,r)=>this.#D(e,t,r),clear:e=>this.#X(e),resetState:()=>this.#H(),onContextRestored:e=>{let t=this.#R.onContextRestored(e);return this.#M.push(t),t}};this.#k=n}get ctx(){return this.#k}setPhase(e){this.#I=e}setFrameDims(e){for(let t of(this.#B=e,this.#k.resolution=[e.canvasBufferSize[0],e.canvasBufferSize[1]],this.#L))t.resolver.resize?.(e.outputBufferW,e.outputBufferH)}setEffectDims(e){this.#k.dims=e}setFrameState(e){let t=this.#k;t.time=e.time,t.deltaTime=e.deltaTime,t.mouse=e.mouse,t.mouseViewport=e.mouseViewport,t.intersection=e.intersection,t.enterTime=e.enterTime,t.leaveTime=e.leaveTime,t.enterProgress=e.enterProgress,t.leaveProgress=e.leaveProgress,t.uniforms=e.uniforms}setSrc(e){this.#k.src=e}setOutput(e){this.#k.target=e}passthroughCopy(e,t,r){let i=this.#I;this.#I="render";let s=this.#k.target;this.#k.target=t;try{let i=this.#B.outputViewport;this.#B.outputViewport={...r};let s=this.#k.vfxProps.glslVersion;this.#$({frag:"100"===s?D:N,uniforms:{src:e},target:t}),this.#B.outputViewport=i}finally{this.#k.target=s,this.#I=i}}clearRt(e){let t=this.#C,r=e[k];t.bindFramebuffer(t.FRAMEBUFFER,r.getWriteFbo().fbo),t.viewport(0,0,e.width,e.height),t.clearColor(0,0,0,0),t.disable(t.SCISSOR_TEST),t.clear(t.COLOR_BUFFER_BIT),t.bindFramebuffer(t.FRAMEBUFFER,null)}#V(e){let t,r,i,s,o=e?.persistent??!1,n=e?.float??!1,a=W(e?.wrap),l=e?.filter,u=e?.mipmap??!1,h=!1!==u,f=!0===u,c=e?.size,d=c?c[0]:this.#B.outputBufferW,p=c?c[1]:this.#B.outputBufferH;if(o){let e=c?1:this.#f,s=c?d:d/e,o=c?p:p/e,u=new E(this.#R,s,o,e,n,{wrap:a,filter:l,mipmap:h});t={getReadTexture:()=>u.texture,getWriteFbo:()=>u.target,swap:()=>u.swap(),resize:c?void 0:(e,t)=>{u.resize(e/this.#f,t/this.#f)},dispose:()=>u.dispose()},h&&(t.regenerateMipmaps=()=>u.target.generateMipmaps(),t.mipmapAutoRegen=f),r=()=>u.target.width,i=()=>u.target.height}else{let e=new w(this.#R,d,p,{float:n,wrap:a,filter:l,mipmap:h});t={getReadTexture:()=>e.texture,getWriteFbo:()=>e,resize:c?void 0:(t,r)=>e.setSize(t,r),dispose:()=>e.dispose()},h&&(t.regenerateMipmaps=()=>e.generateMipmaps(),t.mipmapAutoRegen=f),r=()=>e.width,i=()=>e.height}let m=q(t,r,i,()=>this.#W(s));return s={handle:m,resolver:t},this.#z.push(s),c||this.#L.push(s),m}#W(e){let t=this.#z.indexOf(e);if(t<0)return;this.#z.splice(t,1);let r=this.#L.indexOf(e);r>=0&&this.#L.splice(r,1),e.resolver.dispose?.()}#O(e,t){var r;let i,s,o,n,a=W(t?.wrap),l=t?.filter,u=null,h=(r=e,!!(i=globalThis.WebGLTexture)&&"function"==typeof i&&r instanceof i||void 0===r.width&&void 0===r.naturalWidth&&void 0===r.videoWidth);if(h){if(!t?.size)throw Error("[VFX-JS] wrapTexture(WebGLTexture) requires opts.size");let[r,i]=t.size;s=new m(this.#R,void 0,{autoRegister:!1,externalHandle:e}),o=()=>r,n=()=>i}else{s=new m(this.#R,e);let r=t?.size,i=t=>r?"w"===t?r[0]:r[1]:"u">typeof HTMLImageElement&&e instanceof HTMLImageElement?"w"===t?e.naturalWidth:e.naturalHeight:"u">typeof HTMLVideoElement&&e instanceof HTMLVideoElement?"w"===t?e.videoWidth:e.videoHeight:"w"===t?e.width:e.height;o=()=>i("w"),n=()=>i("h");let a="u">typeof HTMLVideoElement&&e instanceof HTMLVideoElement||"u">typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"u">typeof OffscreenCanvas&&e instanceof OffscreenCanvas;(t?.autoUpdate??a)&&(u=()=>{s.needsUpdate=!0})}s.wrapS=a[0],s.wrapT=a[1],void 0!==l&&(s.minFilter=l,s.magFilter=l),this.#A.push(s),u&&this.#G.push(u);let f=!1;return G(()=>s,o,n,()=>{if(f)return;f=!0;let e=this.#A.indexOf(s);if(-1!==e&&this.#A.splice(e,1),u){let e=this.#G.indexOf(u);-1!==e&&this.#G.splice(e,1)}s.dispose()},h?void 0:()=>{f||(s.needsUpdate=!0)})}#G=[];tickAutoUpdates(){for(let e of this.#G)e()}#N(e){if("render"!==this.#I){"update"!==this.#I||this.#_||(this.#_=!0,console.warn("[VFX-JS] ctx.draw() called in update(); ignored. Move draws to render()."));return}this.#$(e)}#D(e,t,r){if("render"!==this.#I){"update"!==this.#I||this.#_||(this.#_=!0,console.warn("[VFX-JS] ctx.blit() called in update(); ignored. Move draws to render()."));return}let i="100"===this.#k.vfxProps.glslVersion?H:X;this.#$({frag:i,uniforms:{src:e},target:t,blend:r?.blend,swap:r?.swap})}#X(e){if("render"!==this.#I){"update"!==this.#I||this.#_||(this.#_=!0,console.warn("[VFX-JS] ctx.clear() called in update(); ignored. Move draws to render()."));return}let t=this.#C,r=this.#k.target,i=null==e?r:e,s=null===i||i===r;if(t.clearColor(0,0,0,0),s){let e=null===i?null:i[k].getWriteFbo().fbo,r=this.#B.outputViewport;t.bindFramebuffer(t.FRAMEBUFFER,e),t.enable(t.SCISSOR_TEST),t.scissor(r.x,r.y,r.w,r.h),t.clear(t.COLOR_BUFFER_BIT),t.disable(t.SCISSOR_TEST),t.bindFramebuffer(t.FRAMEBUFFER,null);return}let o=i[k];t.disable(t.SCISSOR_TEST);let n=()=>{t.bindFramebuffer(t.FRAMEBUFFER,o.getWriteFbo().fbo),t.clear(t.COLOR_BUFFER_BIT)};n(),o.swap&&(o.swap(),n(),o.swap()),t.bindFramebuffer(t.FRAMEBUFFER,null)}#H(){if("disposed"===this.#I||this.#R.isContextLost)return;let e=this.#C;e.bindFramebuffer(e.FRAMEBUFFER,null),e.drawBuffers([e.BACK]),e.readBuffer(e.BACK),e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),e.disable(e.DEPTH_TEST),e.disable(e.CULL_FACE),e.disable(e.STENCIL_TEST),e.disable(e.SCISSOR_TEST),e.disable(e.BLEND),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.RASTERIZER_DISCARD),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.disable(e.SAMPLE_COVERAGE),e.depthMask(!0),e.clearColor(0,0,0,0),e.depthFunc(e.LESS),e.colorMask(!0,!0,!0,!0),e.stencilMask(0xffffffff),e.frontFace(e.CCW),e.cullFace(e.BACK),e.useProgram(null),e.bindVertexArray(null),e.bindTransformFeedback(e.TRANSFORM_FEEDBACK,null),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),e.bindBuffer(e.PIXEL_UNPACK_BUFFER,null),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBuffer(e.COPY_READ_BUFFER,null),e.bindBuffer(e.COPY_WRITE_BUFFER,null);let t=this.#q();for(let r=0;r<t;r++)e.bindSampler(r,null);e.activeTexture(e.TEXTURE0),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0)}#q(){if(void 0===this.#U){let e=this.#C,t=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);this.#U="number"==typeof t&&t>0?t:16}return this.#U}#$(e){let t,r,i,s,o,n,a,l=this.#C,u=e.vert??("100"===this.#k.vfxProps.glslVersion?O:V),h=this.#P.get(u,e.frag,this.#k.vfxProps.glslVersion),f=this.#k.target,c=void 0===e.target||null===e.target?f:e.target,d=null===c||c===f;if(null===c)t=null,r=this.#B.outputViewport.x,i=this.#B.outputViewport.y,s=this.#B.outputViewport.w,o=this.#B.outputViewport.h;else{let e=c[k];t=e.getWriteFbo().fbo,d?(r=this.#B.outputViewport.x,i=this.#B.outputViewport.y,s=this.#B.outputViewport.w,o=this.#B.outputViewport.h):(r=0,i=0,s=c.width,o=c.height),n=e.swap,e.mipmapAutoRegen&&(a=e.regenerateMipmaps)}l.bindFramebuffer(l.FRAMEBUFFER,t),l.viewport(r,i,s,o),l.disable(l.SCISSOR_TEST),U(l,e.blend??(null===c?"premultiplied":"none")),h.use();let p=this.#J(e.uniforms);h.uploadUniforms(p);let m=e.geometry??T;m===T?this.#F.quad.draw():this.#F.resolve(m,h).draw(),a?.(),n&&!1!==e.swap&&n()}#J(e){let t={};if(t.contentRectUv={value:this.#B.contentRectUv},t.srcRectUv={value:this.#B.srcRectUv},!e)return t;for(let[r,i]of Object.entries(e))t[r]=function(e,t){if("object"==typeof e&&null!==e&&"__brand"in e){if("EffectRenderTarget"===e.__brand)return{value:e[k].getReadTexture()};let r=e[B]();if(r&&r.gl!==t)throw Error("[VFX-JS] This texture belongs to another VFX instance.");return{value:r}}return{value:e}}(i,this.#C);return t}dispose(){for(let e of(this.#I="disposed",this.#M))e();for(let e of(this.#M=[],this.#z))e.resolver.dispose?.();for(let e of(this.#z=[],this.#L=[],this.#A))e.dispose();this.#A=[],this.#F.dispose(),this.#G=[]}}function W(e){return void 0===e?["clamp","clamp"]:"string"==typeof e?[e,e]:[e[0],e[1]]}function G(e,t,r,i,s){let o={__brand:"EffectTexture",get width(){return t()},get height(){return r()},dispose(){i?.()},update(){s?.()}};return Object.defineProperty(o,B,{value:e}),o}function q(e,t,r,i){let s={__brand:"EffectRenderTarget",get width(){return t()},get height(){return r()},dispose:i??(()=>{}),generateMipmaps:()=>e.regenerateMipmaps?.()};return Object.defineProperty(s,k,{value:e}),s}function J(e){return q({getReadTexture:()=>e.texture,getWriteFbo:()=>e},()=>e.width,()=>e.height)}function j(e){return"CANVAS"===e.tagName&&(e.hasAttribute("layoutsubtree")||"drawable"===e.getAttribute("content"))}function K(e,t){e.setAttribute("layoutsubtree",""),e.setAttribute("content","drawable"),t?.setAttribute("drawable","")}function Y(e,t){let r=e.getBoundingClientRect(),i=getComputedStyle(e);t.className=e.className,t.style.cssText=e.style.cssText,t.style.width=`${r.width}px`,t.style.height=`${r.height}px`,t.style.display="inline"===i.display?"inline-block":i.display,t.style.boxSizing="border-box"}async function Z(e){let t=await fetch(e),r=await t.blob();return URL.createObjectURL(r)}async function Q(e){let t=Array.from(e.querySelectorAll("img")).filter(e=>e.complete&&e.naturalWidth>0&&function(e){let t=h(e);if(!t||t.startsWith("data:"))return!1;try{return new URL(t,location.href).origin!==location.origin}catch{return!1}}(e));if(0===t.length)return()=>{};let r=new Map,i=[];return await Promise.all(t.map(async e=>{try{let t=h(e),s=await Z(t);r.set(e,t),i.push(s),await new Promise(t=>{e.addEventListener("load",()=>t(),{once:!0}),e.src=s})}catch{}})),()=>{for(let[e,t]of r)e.src=t;for(let e of i)URL.revokeObjectURL(e)}}let ee=["margin-top","margin-right","margin-bottom","margin-left"],et=new Set(["IMG","VIDEO","CANVAS","IFRAME","EMBED","OBJECT","INPUT","TEXTAREA","SELECT"]),er=["position","top","right","bottom","left","float","flex","flex-grow","flex-shrink","flex-basis","align-self","justify-self","place-self","order","grid-column","grid-column-start","grid-column-end","grid-row","grid-row-start","grid-row-end","grid-area"],ei=new Set(["top","right","bottom","left"]),es=["width","height","flex-grow","flex-shrink","min-width","max-width","overflow"],eo=new WeakMap,en=new WeakMap,ea=new WeakMap,el=new WeakMap,eu=new WeakMap,eh=new WeakMap,ef=new WeakMap,ec=new WeakMap,ed=new WeakMap,ep=new WeakSet,em=new WeakMap,eg=new WeakMap,ev=new WeakSet,ex=new WeakSet,ew=/^[\d.e+-]+px$/;function ey(e){if(e)for(let t of[...e])t()}function eb(e,t,r){if("function"==typeof e.moveBefore)try{e.moveBefore(t,r);return}catch{}e.insertBefore(t,r)}function eE(e,t=300){let r=eg.get(e);if(!r)return;let i=new Promise(e=>{let i=t=>{clearTimeout(o),r.delete(s),e(t)},s=()=>i(!0),o=setTimeout(()=>i(!1),t);r.add(s)});return e.requestPaint(),i}function eT(e){if(ev.has(e))return()=>{};ev.add(e);let t=es.map(t=>[t,e.style.getPropertyValue(t)]),r=getComputedStyle(e),i=e.getBoundingClientRect(),s=(e,t)=>ew.test(e)?e:`${t}px`,o=s(r.width,i.width);return e.style.setProperty("width",o),e.style.setProperty("height",s(r.height,i.height)),e.style.setProperty("flex-grow","0"),e.style.setProperty("flex-shrink","0"),e.style.setProperty("min-width",o),e.style.setProperty("max-width",o),e.style.setProperty("overflow","hidden"),()=>{if(!ev.has(e))return;for(let[r,i]of(ev.delete(e),t))e.style.setProperty(r,i);let r=e.firstElementChild;if(r&&!ex.has(e)){let t=Math.round(r.getBoundingClientRect().height);e.style.setProperty("height",`${t}px`)}}}function eS(e){em.get(e)?.(),em.delete(e)}function eR(e,t=!1){requestAnimationFrame(()=>{t||e.getContext("2d")?.clearRect(0,0,e.width,e.height),eS(e)})}async function eC(e,t){K(e,e.firstElementChild);let r=e.getContext("2d");if(!r)throw Error("Failed to get 2d context from layoutsubtree canvas");let{onCapture:i,maxSize:s,keepDrawn:o}=t,n=new Set;eg.set(e,n);let a=null,l=null,u=new Promise(e=>{l=e}),h=null,f=t=>{if(t){if(t===h)return;h=t}let u=e.firstElementChild;if(!u||0===e.width||0===e.height||0===u.getClientRects().length)return;u.hasAttribute("drawable")||u.setAttribute("drawable",""),r.clearRect(0,0,e.width,e.height),r.drawElementImage(u,0,0),function(e,t){let r=t.querySelectorAll("canvas");if(0===r.length)return;let i=t.getBoundingClientRect();if(i.width<=0||i.height<=0)return;let s=e.canvas.width/i.width,o=e.canvas.height/i.height;for(let t of r){if(0===t.width||0===t.height||!("function"==typeof t.checkVisibility?t.checkVisibility({visibilityProperty:!0,opacityProperty:!0}):"hidden"!==getComputedStyle(t).visibility))continue;let r=function(e,t,r,i){if(t.width<=0||t.height<=0)return null;let s=t.left-e.left,o=t.top-e.top;return s+t.width<=0||o+t.height<=0||s>=e.width||o>=e.height?null:[s*r,o*i,t.width*r,t.height*i]}(i,function(e){let t=e.getBoundingClientRect(),r=getComputedStyle(e),i=Number.parseFloat(r.paddingLeft)||0,s=Number.parseFloat(r.paddingRight)||0,o=Number.parseFloat(r.paddingTop)||0,n=Number.parseFloat(r.paddingBottom)||0,a=e.clientWidth>0?t.width/e.offsetWidth:1,l=e.clientHeight>0?t.height/e.offsetHeight:1;return{left:t.left+(e.clientLeft+i)*a,top:t.top+(e.clientTop+o)*l,width:Math.max(0,e.clientWidth-i-s)*a,height:Math.max(0,e.clientHeight-o-n)*l}}(t),s,o);if(r)try{e.drawImage(t,...r)}catch{}}}(r,u);let f=e.width,c=e.height;if(s&&(f>s||c>s)){let e=Math.min(s/f,s/c);f=Math.floor(f*e),c=Math.floor(c*e)}a&&a.width===f&&a.height===c||(a=new OffscreenCanvas(f,c));let d=a.getContext("2d");if(d){if(d.clearRect(0,0,f,c),d.drawImage(e,0,0,f,c),l){l(a),l=null,ey(n);return}o||r.clearRect(0,0,e.width,e.height),i(a),ey(n)}};e.onpaint=f,e.addEventListener("paint",f),en.set(e,f);let c=new ResizeObserver(t=>{for(let r of t){let t=r.devicePixelContentBoxSize?.[0];if(t)e.width=t.inlineSize,e.height=t.blockSize;else{let t=r.borderBoxSize?.[0];if(t){let r=window.devicePixelRatio;e.width=Math.round(t.inlineSize*r),e.height=Math.round(t.blockSize*r)}}}e.requestPaint()});c.observe(e,{box:"device-pixel-content-box"}),eo.set(e,c);let d=e.firstElementChild;if(d){let t=new ResizeObserver(t=>{if(ev.has(e)||ex.has(e))return;let r=t[0].borderBoxSize?.[0];if(!r)return;let i=`${Math.round(r.blockSize)}px`;i!==e.style.height&&e.style.setProperty("height",i)});t.observe(d),ea.set(e,t)}return u}function eP(e){e.onpaint=null,ey(eg.get(e)),eg.delete(e);let t=en.get(e);t&&(e.removeEventListener("paint",t),en.delete(e));let r=eo.get(e);r&&(r.disconnect(),eo.delete(e));let i=ea.get(e);i&&(i.disconnect(),ea.delete(e))}let eF=["padding-left","padding-right"],eA=["border-left-width","border-right-width"];function ez(e,t){return e===t||ew.test(e)||/^[\d.e+-]+%$/.test(e)||/^(calc|min|max|clamp)\(/.test(e)}async function eL(e,t,r){let i=e.getBoundingClientRect(),s=function(e){let t={width:null,height:null};if("function"!=typeof e.computedStyleMap||et.has(e.tagName))return t;let r=e.computedStyleMap(),i=e=>r.get(e)?.toString()??"auto",s=i("position");if("fixed"!==s&&"absolute"!==s)return t;let o=(t,r,s)=>{let o=i(r),n=i(s);if("auto"!==i(t)||"auto"===o||"auto"===n)return null;let a=[`margin-${r}`,`margin-${s}`].map(r=>{let s=i(r);return"height"===t&&s.includes("%")?getComputedStyle(e).getPropertyValue(r):s}).filter(e=>"auto"!==e);return`calc(${["100%",o,n,...a].join(" - ")})`};return{width:o("width","left","right"),height:o("height","top","bottom")}}(e),o=s.width?null:function(e,t){let r=e=>({width:`${e}px`,minWidth:"auto",maxWidth:"none"});if("function"!=typeof e.computedStyleMap)return e.style.width.endsWith("px")?r(t.width):null;let i=e.computedStyleMap(),s=e=>i.get(e)?.toString()??"auto",o=et.has(e.tagName),n=getComputedStyle(e),a=s("width");if("auto"===a){if(!o)return null;a=n.width}if(!ew.test(a))return null;let l=s("display");if(!o&&"inline"===l)return r(t.width);let u=s("min-width"),h=s("max-width");if("table"===l||"inline-table"===l||!ez(u,"auto")||!ez(h,"none"))return r(function(e){let t=t=>Number.parseFloat(e.getPropertyValue(t))||0,r=Number.parseFloat(e.width)||0;if("border-box"!==e.boxSizing)for(let e of[...eF,...eA])r+=t(e);return r}(n));let f=[...eF.map(s),...eA.map(e=>n.getPropertyValue(e))].filter(e=>""!==e&&!/^0(px)?$/.test(e)),c=e=>{if(0===f.length)return e;let t=[e,...f].join(" + ");return"border-box"===s("box-sizing")?`max(${e}, ${t.slice(e.length+3)})`:`calc(${t})`};return{width:c(a),minWidth:"auto"===u?"auto":c(u),maxWidth:"none"===h?"none":c(h)}}(e,i),n=document.createElement("canvas");e.hasAttribute("drawable")||ep.add(e),K(n,e),n.className=e.className;let a=e.getAttribute("style");a&&n.setAttribute("style",a),n.style.setProperty("padding","0"),n.style.setProperty("border","none"),n.style.setProperty("box-sizing","content-box"),n.style.setProperty("background","transparent");let l=getComputedStyle(e),u="inline"===l.display?"block":l.display;n.style.setProperty("display",u);let h="function"==typeof e.computedStyleMap?e.computedStyleMap():null,f=e=>h?.get(e)?.toString()??l.getPropertyValue(e),c=e=>l.getPropertyValue(e),d=!!(s.width||o);for(let e of ee){let t="margin-left"!==e&&"margin-right"!==e||d;n.style.setProperty(e,t?f(e):c(e))}let p="absolute"===l.position||"fixed"===l.position,m=(e,t)=>p&&"auto"===f(e)&&"auto"===f(t),g=m("left","right"),v=m("top","bottom");for(let e of er){let t=c(e);ei.has(e)&&(t=("left"===e||"right"===e?g:v)?c(e):f(e)),n.style.setProperty(e,t)}s.width?n.style.setProperty("width",s.width):o?(n.style.setProperty("width",o.width),n.style.setProperty("min-width",o.minWidth),n.style.setProperty("max-width",o.maxWidth)):n.style.setProperty("width","100%"),s.height?(n.style.setProperty("height",s.height),ex.add(n)):n.style.height||n.style.setProperty("height",`${i.height}px`);let x=window.devicePixelRatio;n.width=Math.round(i.width*x),n.height=Math.round(i.height*x),t.stillCover&&em.set(n,function(e,t){let r=e.getBoundingClientRect(),i=e.cloneNode(!0),s=[e,...e.querySelectorAll("*")],o=[i,...i.querySelectorAll("*")],n=[],a=[];for(let e=0;e<s.length&&e<o.length;e++){let t=s[e],r=o[e];(t.scrollTop||t.scrollLeft)&&n.push([r,t.scrollTop,t.scrollLeft]),t instanceof HTMLScriptElement?a.push([r,document.createComment("script")]):t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?a.push([r,function(e){let t=document.createElement("canvas"),r=e instanceof HTMLVideoElement?e.videoWidth:e.width,i=e instanceof HTMLVideoElement?e.videoHeight:e.height;t.width=Math.max(1,r),t.height=Math.max(1,i),Y(e,t);try{t.getContext("2d")?.drawImage(e,0,0,t.width,t.height)}catch{}return t}(t)]):t instanceof HTMLIFrameElement?a.push([r,function(e){let t=document.createElement("div");return Y(e,t),t}(t)]):t instanceof HTMLInputElement&&r instanceof HTMLInputElement?(r.value=t.value,r.checked=t.checked):t instanceof HTMLTextAreaElement&&r instanceof HTMLTextAreaElement?r.value=t.value:t instanceof HTMLSelectElement&&r instanceof HTMLSelectElement?r.selectedIndex=t.selectedIndex:t instanceof HTMLMediaElement&&r.removeAttribute("autoplay")}for(let[e,t]of a)e.replaceWith(t);i.setAttribute("aria-hidden","true");let l=i.style;l.setProperty("position","fixed"),l.setProperty("left",`${r.left}px`),l.setProperty("top",`${r.top}px`),l.setProperty("width",`${r.width}px`),l.setProperty("height",`${r.height}px`),l.setProperty("box-sizing","border-box"),l.setProperty("margin","0"),l.setProperty("pointer-events","none"),l.setProperty("z-index",t.toString()),e.parentNode?.insertBefore(i,e);let u=i.getBoundingClientRect();for(let[e,t,i]of((u.left!==r.left||u.top!==r.top)&&(l.setProperty("left",`${2*r.left-u.left}px`),l.setProperty("top",`${2*r.top-u.top}px`)),n))e.scrollTop=t,e.scrollLeft=i;return function(e,t){let r=e[0],i=t[0];if(!r||!i||"function"!=typeof r.getAnimations)return;let s=(e,t)=>{if(!("animationName"in e))return null;let r=e.effect,i=r?.target,s=i?t.get(i):void 0;return void 0===s?null:`${s}|${r?.pseudoElement??""}|${e.animationName}`},o=new Map(t.map((e,t)=>[e,t])),n=new Map;for(let e of i.getAnimations({subtree:!0})){let t=s(e,o);t&&n.set(t,e)}let a=new Map(e.map((e,t)=>[e,t]));for(let e of r.getAnimations({subtree:!0})){let t=s(e,a),r=t&&n.get(t);r&&(r.currentTime=e.currentTime,r.pause())}}(s,o),()=>{i.remove()}}(e,t.stillCover.zIndex)),el.set(e,e.style.margin),eu.set(e,e.style.width),eh.set(e,e.style.boxSizing),e.parentNode?.insertBefore(n,e),getComputedStyle(n).display,eb(n,e,null),e.style.setProperty("margin","0"),e.style.setProperty("width","100%"),e.style.setProperty("box-sizing","border-box"),(s.width||s.height)&&(ef.set(e,e.style.position),e.style.setProperty("position","static")),s.height&&(ec.set(e,e.style.height),e.style.setProperty("height","100%"));let w=await Q(e);if(r?.aborted)throw w(),Error("[VFX-JS] Wrapping was aborted.");ed.set(n,w);let y=await eC(n,t);if(r?.aborted)throw eP(n),Error("[VFX-JS] Wrapping was aborted.");return{canvas:n,initialCapture:y}}function eM(e,t){eP(e),eS(e);let r=ed.get(e);r&&(r(),ed.delete(e));let i=e.parentNode;i&&t.parentNode===e&&eb(i,t,e),e.remove(),ep.has(t)&&(t.removeAttribute("drawable"),ep.delete(t));let s=el.get(t);void 0!==s&&(t.style.margin=s,el.delete(t));let o=eu.get(t);void 0!==o&&(t.style.width=o,eu.delete(t));let n=eh.get(t);void 0!==n&&(t.style.boxSizing=n,eh.delete(t));let a=ef.get(t);void 0!==a&&(t.style.position=a,ef.delete(t));let l=ec.get(t);void 0!==l&&(t.style.height=l,ec.delete(t))}function eI(){if(void 0!==t)return t;try{let e=document.createElement("canvas"),r=e.getContext("2d");t=null!==r&&"function"==typeof r.drawElementImage&&"function"==typeof e.requestPaint}catch{t=!1}return t}e.s(["i",0,eT,"I",0,eb,"n",0,eR,"a",0,eE,"S",0,eC,"F",0,eP,"Y",0,eM,"c",0,eL],18289),e.s(["f",0,eI],7150);let e_={supportsHtmlInCanvas:eI,wrapElement:eL,unwrapElement:eM,requestCapture:eE,releaseFirstCapture:eR,dom2canvas:f,nextFrame:()=>new Promise(e=>requestAnimationFrame(()=>e()))};function eU(e){let t=e.getBoundingClientRect();return 0===t.width&&0===t.height&&0===e.getClientRects().length?null:t}async function eB(e,t,r,i,s){let o={width:0,height:0},n=await function(e,t,r,i,s){let o={...e_,...e.dom};if(t instanceof HTMLImageElement||t instanceof HTMLVideoElement||t instanceof HTMLCanvasElement)return eD(e,t,r,i,s);let n=t.getBoundingClientRect();return 0===t.getClientRects().length||0===n.width||0===n.height?Promise.reject(Error("[VFX-JS] capture() needs an element with a size.")):o.supportsHtmlInCanvas()?eX(e,o,t,r,i,s):eH(e,o,t,r,i)}(e,t,r,o,s);try{e.uploadTexture(o.texture)}catch(e){throw n.dispose(),o.texture.dispose(),e}let a=!1,l=!1,u={x:0,y:0,width:0,height:0},h=!1,f=()=>{let e=n.inBox?.()===!1?null:eU(n.box);h=null!==e,e&&(u.x=e.left,u.y=e.top,n.sizeFollowsBox&&(o.width=e.width,o.height=e.height),u.width=o.width,u.height=o.height)},c=()=>a?Promise.resolve(!1):n.update(),d=G(()=>a?(l||(l=!0,console.warn("[VFX-JS] This capture is disposed.")),e.emptyTexture):o.texture,()=>a?0:e.textureSize(o.texture,"w"),()=>a?0:e.textureSize(o.texture,"h"),void 0,()=>{c().catch(e=>console.error(e))});return f(),{capture:{texture:d,get rect(){return h?u:null},update:c,dispose(){a||(a=!0,n.dispose(),o.texture.dispose(),i?.())}},tick(){!a&&(f(),n.uploadEveryFrame&&(o.texture.needsUpdate=!0))},resize(){a||n.resize?.()}}}function ek(){return Error("[VFX-JS] capture() was aborted.")}function eV(e,t){return t?t.aborted?Promise.reject(ek()):new Promise((r,i)=>{let s=()=>i(ek());t.addEventListener("abort",s,{once:!0}),e.then(r,i).finally(()=>t.removeEventListener("abort",s))}):e}function eO(e,t){let r=t.getBoundingClientRect();e.width=r.width,e.height=r.height}function eN(e){let t=e.getBoundingClientRect();return[Math.ceil(t.width),Math.ceil(t.height)]}async function eD(e,t,r,i,s){t instanceof HTMLImageElement?await eV(t.decode(),s):t instanceof HTMLVideoElement&&t.readyState<3&&await function(e,t){let r=function(e){if(e.error)return"failed to load";let t=e.querySelectorAll("source[src]");return e.srcObject||e.src||0!==t.length?"none"===e.preload&&e.paused&&!e.autoplay&&0===e.readyState?'is not loading (preload="none"). Call play() first':null:"has no source"}(e);if(r)return Promise.reject(Error(`[VFX-JS] capture() got a video that ${r}.`));let i=e.querySelectorAll("source"),s=i[i.length-1];return new Promise((r,i)=>{let o=()=>{e.removeEventListener("canplay",n),e.removeEventListener("error",a),s?.removeEventListener("error",a),t?.removeEventListener("abort",l)},n=()=>{o(),r()},a=()=>{o(),i(Error("[VFX-JS] capture() could not load the video."))},l=()=>{o(),i(ek())};t?.aborted?i(ek()):(e.addEventListener("canplay",n),e.addEventListener("error",a),s?.addEventListener("error",a),t?.addEventListener("abort",l))})}(t,s);let[o,n]=t instanceof HTMLImageElement?[t.naturalWidth,t.naturalHeight]:t instanceof HTMLVideoElement?[t.videoWidth,t.videoHeight]:[t.width,t.height];if(0===o||0===n)throw Error("[VFX-JS] capture() got a source with no pixels.");if(o>e.maxTextureSize||n>e.maxTextureSize)throw Error(`[VFX-JS] capture() got a source larger than the max texture size (${e.maxTextureSize}px).`);i.texture=e.createTexture(t);let a=t.style.opacity;if(r.hide){let e=t instanceof HTMLVideoElement;t.style.setProperty("opacity",e?"0.0001":"0")}let l=()=>{r.hide&&(t.style.opacity=a)};return t instanceof HTMLImageElement?{box:t,sizeFollowsBox:!0,uploadEveryFrame:!1,update:async()=>(await t.decode(),i.texture.needsUpdate=!0,!0),dispose:l}:{box:t,sizeFollowsBox:!0,uploadEveryFrame:!0,update:()=>Promise.resolve(!0),dispose:l}}async function eX(e,t,r,i,s,o){let n,a,l=r.parentNode;try{let l=t.wrapElement(r,{onCapture:t=>{s.texture=e.refreshTexture(s.texture,t),eO(s,n)},maxSize:e.maxTextureSize,keepDrawn:!i.hide,stillCover:i.hide?void 0:{zIndex:e.stillZIndex}},o);({canvas:n,initialCapture:a}=await eV(l,o))}catch(i){let e=r.parentNode;throw e!==l&&e instanceof HTMLCanvasElement&&t.unwrapElement(e,r),i}return s.texture=e.createTexture(a),eO(s,n),t.releaseFirstCapture(n,!i.hide),i.hide||await t.nextFrame(),{box:n,inBox:()=>r.parentNode===n,sizeFollowsBox:!1,uploadEveryFrame:!1,update:async()=>await t.requestCapture(n,1e3)??!1,dispose(){t.unwrapElement(n,r)}}}async function eH(e,t,r,i,s){let o=r.style.opacity,n=""===o?1:Number.parseFloat(o),[a,l]=eN(r),u=await t.dom2canvas(r,n,void 0,e.maxTextureSize);if(0===u.width||0===u.height)throw Error("[VFX-JS] capture() got an empty snapshot.");s.texture=e.createTexture(u),s.width=a,s.height=l,i.hide&&r.style.setProperty("opacity","0");let h=!1,f=null,c=null,d=async()=>{let i=s.texture.source,[o,a]=eN(r),l=await t.dom2canvas(r,n,i instanceof OffscreenCanvas?i:void 0,e.maxTextureSize);return!h&&0!==l.width&&0!==l.height&&(s.texture=e.refreshTexture(s.texture,l),s.width=o,s.height=a,!0)},p=()=>h?Promise.resolve(!1):f?c??=f.catch(()=>{}).then(()=>(c=null,p())):f=d().finally(()=>{f=null});return{box:r,sizeFollowsBox:!1,uploadEveryFrame:!1,update:p,resize(){let[e,t]=eN(r);(e!==s.width||t!==s.height)&&p().catch(e=>console.error(e))},dispose(){h=!0,i.hide&&(r.style.opacity=o)}}}let e$={t:0,x:0};class eW{enabled=!1;#j=null;#K=[0,0];#Y=[];#Z=!1;#Q=null;#ee=null;#et=e$;#er=null;#ei=null;#es=null;#eo(){let e=this.#ei,t=this.#er;this.#ei=null,this.#er=null;try{e?.()}finally{t?.()}}snapshot(){return this.#eo(),this.#es=null,this.#Q=null,this.enabled=!0,new Promise(e=>this.#Y.push(e))}start(e){return this.#eo(),this.#Q=e,this.#ei=e.onEnd??null,this.#ee=null,this.#et=e$,this.#Z=!1,this.enabled=null!==this.#es,new Promise(e=>{this.#er=e})}cancel(){this.#eo(),this.#es=null,this.#Q=null,this.#Z=!1,this.enabled=!1,this.#en()}#en(){let e=this.#Y;for(let t of(this.#Y=[],e))t()}setLiveSource(e){this.#es=e,e&&(this.#Z||this.#Q)&&(this.enabled=!0)}get frame(){let e=this.#j;return e&&(this.#Z||this.#Q)?{from:e,progress:this.#et,holding:null===this.#Q}:null}cut(){this.#Q&&(this.#Q=null,this.#eo())}update(e){let t=this.#Q;if(!t)return;null===this.#ee&&(this.#ee=e.time);let r=(e.time-this.#ee)/t.duration;if(r>=1){this.#Q=null,this.#eo();return}let i=Math.max(r,0);this.#et={t:function(e,t){return"function"==typeof e?e(t):"linear"===e?t:t*t*(3-2*t)}(t.ease,i),x:i}}#ea(e){let[t,r]=e.dims.elementPixel;return this.#j&&this.#K[0]===t&&this.#K[1]===r||(this.#j?.dispose(),this.#j=e.createRenderTarget({size:[t,r]}),this.#K=[t,r]),this.#j}render(e){this.#Y.length>0&&(e.blit(e.src,this.#ea(e)),this.#Z=!0,this.#en());let t=this.#es?.()??null;(t&&(this.#Z||this.#Q)&&e.blit(t,this.#ea(e)),this.#j&&this.#Z)?e.blit(this.#j):(this.#es&&this.#Q||(this.enabled=!1),e.blit(e.src))}dispose(){this.#es=null,this.#j=null,this.#K=[0,0],this.#eo(),this.#en()}}class eG{effect;#el;#e=null;constructor(e,t){this.effect=e,this.#el=t}get enabled(){return null!==this.#e&&"function"==typeof this.effect.render&&!1!==this.effect.enabled}start(e){this.#e=e,this.effect.start?.(e)}end(){null!==this.#e&&(this.#e=null,this.effect.end?.())}#eu(e){let t=this.#el.frame,r=this.#e;return t&&r?{...e,from:t.from,progress:t.progress,holding:t.holding,reverse:r.reverse,run:r,cut:()=>this.#el.cut()}:null}init(e){return this.effect.init?.(e)}update(e){let t=this.#el.frame;if(!t||t.holding)return;let r=this.#eu(e);r&&this.effect.update?.(r)}render(e){let t=this.#eu(e);t&&this.effect.render?this.effect.render(t):e.blit(e.src)}outputRect(e){return this.#e?this.effect.outputRect?.(e):void 0}dispose(){this.effect.dispose?.()}}let eq=function(e=function(){let e=globalThis.navigation,t=e?.currentEntry;if(t&&!(t.index<0)&&t.key)return{index:t.index,key:t.key}}){let t,r=new Map;return{pick(i){let s=e();if(!s)return i;let o=t??s;t=s;let n=r.get(o.key);if(s.index<o.index&&n)return{...n,reverse:!0};let a=r.get(s.key);return s.index>o.index&&a?a:(r.set(s.key,i),i)}}}();class eJ{#eh;#ef;#ec;#ed=null;#ep;#em=[];#eg;#ev=null;constructor(e,t){this.#eh=e,this.#eg=[t.scrollLeft,t.scrollTop];let r=t.parentElement??t,i=r.getBoundingClientRect(),s=document.createElement("canvas");s.inert=!0,s.setAttribute("aria-hidden","true"),s.setAttribute("data-vfx-keep-playing","");let o=s.style;o.setProperty("position","absolute"),o.setProperty("left","0px"),o.setProperty("top","0px"),o.setProperty("margin","0"),o.setProperty("padding","0"),o.setProperty("border","none"),o.setProperty("pointer-events","none");let n=t.cloneNode(!1);n.removeAttribute("id"),n.style.setProperty("margin","0"),n.style.setProperty("box-sizing","border-box"),n.style.setProperty("overflow","hidden"),s.append(n),K(s,n),r.parentNode&&r!==t?r.after(s):document.body.append(s);let a=s.getBoundingClientRect();o.setProperty("left",`${i.left-a.left}px`),o.setProperty("top",`${i.top-a.top}px`),getComputedStyle(n).display,this.#ef=s,this.#ec=n,this.#ex(i.width,i.height),this.#ep=e.freezeInside(s),r!==t&&"u">typeof ResizeObserver&&(this.#ev=new ResizeObserver(()=>{let{width:e,height:t}=r.getBoundingClientRect();this.#ex(e,t)}),this.#ev.observe(r))}#ex(e,t){for(let r of[this.#ef,this.#ec])r.style.setProperty("width",`${e}px`),r.style.setProperty("height",`${t}px`)}get texture(){return this.#ed?.texture??null}keep(e,t){for(let r of e){let e=r.parentNode;if(t){let i=e?document.createComment(""):null;i&&e?.insertBefore(i,r),this.#em.push({node:r,marker:i,onReturn:t})}eb(this.#ec,r,null)}[this.#ec.scrollLeft,this.#ec.scrollTop]=this.#eg,this.#ed??=this.#eh.captureLive(this.#ef)}dispose(){let e=this.#em;this.#em=[];try{for(let{node:t,marker:r,onReturn:i}of(this.#ed?.dispose(),this.#ed=null,e)){let e=r?.parentNode;e&&eb(e,t,r),r?.remove();try{i(t)}catch(e){console.error("[VFX-JS] keepPlaying onReturn failed:",e)}}}finally{this.#ev?.disconnect(),this.#ef.remove(),this.#ep()}}}let ej={keepPlaying:()=>{}};function eK(e,t){let r=void 0!==t.transition?t.params:void 0===e.params&&void 0===t.params?void 0:{...e.params,...t.params};return{transition:t.transition??e.transition,params:r,reverse:t.reverse??e.reverse,duration:t.duration??e.duration,overflow:t.overflow??e.overflow,ease:t.ease??e.ease,keepPlaying:t.keepPlaying??e.keepPlaying}}function eY(e,t={}){let r=eK(e,t);return{transition:r.transition??u,params:r.params,reverse:r.reverse??!1,duration:r.duration??.6,overflow:r.overflow,ease:r.ease,keepPlaying:r.keepPlaying??!1}}let eZ=new WeakMap;function eQ(e,t){return new Promise((r,i)=>{let s=setTimeout(()=>r(!1),t);e.then(()=>{clearTimeout(s),r(!0)},e=>{clearTimeout(s),i(e)})})}class e0{#ew;#ey;#eb;#eE;#eT;#eS;#eR;#eC;#eP;#eF=[];#eA=[];#ez=!1;#eL=!1;#eM=!1;#eI=0;#e_=null;#eU=!1;#eB=!1;#ek=null;#eV=[];#eO=null;#eN=null;#eD=null;#eX=null;#eH;constructor(e,t,i={},s,o=new eW,n=eq,a=function(){var e,t;let i,s,o;return r??=(e=globalThis.navigation,t=window,s=0,e?.addEventListener("navigate",e=>{if("replace"===e.navigationType)return;let t=e.hasUAVisualTransition&&e.destination?.key;i=t?{id:++s,key:t}:void 0}),!e&&t&&t.addEventListener("popstate",e=>{i=e.hasUAVisualTransition?{id:++s,href:t.location.href}:void 0},!0),o=()=>{i=void 0},t?.addEventListener("pointerdown",o,!0),t?.addEventListener("keydown",o,!0),{current(){if(i)return(i.key?e?.currentEntry?.key===i.key:t?.location.href===i.href)?i.id:void 0}})}(),l=t=>new eJ(e,t)){this.#eH=l,this.#eP=s,this.#ew=e,this.#ey=t,this.#eb=i,this.#eE=o,this.#eT=n,this.#eS=a,this.#eC=i.keepWrapped??!1}get running(){return null!==this.#e_}show(e,t={}){this.#e$();let r=this.#eW(e),{remove:i=!1,...s}=t;if(!this.running&&this.#eG(r))return Promise.resolve();let o=this.#eb.slideSpec?.(r),n=o?eK(o,s):s;return this.#eq(e=>{let t=Array.from(this.#ey.children).filter(e=>e!==r&&!e.hidden);for(let s of(e.keepPlaying(t,e=>{i?e.remove():e.hidden=!0}),r.parentElement!==this.#ey&&this.#ey.append(r),Array.from(this.#ey.children)))s!==r&&(i?s.remove():s.hidden=!0);r.hidden=!1},n)}#eW(e){let t=this.#ey,r="number"==typeof e?t.children[e]:"string"==typeof e?t.querySelector(e):e;if(!r)throw TypeError(`[VFX-JS] show(): no slide for ${e}.`);if(r.parentElement!==t&&(r.isConnected||t.contains(r)))throw TypeError("[VFX-JS] show(): the slide must be a direct child of the container.");return r}#eG(e){return e.parentElement===this.#ey&&!e.hidden&&Array.from(this.#ey.children).every(t=>t===e||t.hidden)}run(e,t={}){let r=this.#eU?void 0:this.#eS.current();if(void 0!==r&&r!==this.#eR)return this.#eR=r,this.#eq(async r=>{await e(r);let i="function"==typeof t?t():t;this.#eb.autoReverse&&this.#eT.pick(i)},{duration:0});if(!this.#eb.autoReverse)return this.#eq(e,t);let i="function"==typeof t?void 0:t.keepPlaying??this.#eb.keepPlaying;return this.#eq(e,()=>this.#eT.pick("function"==typeof t?t():t),i)}async #eq(e,t,r){if(this.#eU)return void await e(ej);this.#e$();let i=++this.#eI;this.#e_=i;try{await this.#e(i,e,t,r)}finally{this.#e_===i&&(this.#e_=null),this.#eI===i&&(this.#e$(i),this.#ep(),this.#eJ(),this.#ej())}}async #e(e,t,r,i){let s,o=()=>e===this.#eI,n=!1,a={keepPlaying:(t,r)=>{n&&o()&&this.#eK(e,t,r)}},l=!1,u=async()=>{l||(l=!0,await t(a))};if(this.#ew.reducedMotion){await u(),"function"==typeof r&&r();return}let h=async()=>{this.#eY(),this.#e$(e),this.#eE.cancel(),await u(),o()&&(this.#eB&&this.#eC&&await this.#ew.update(this.#ey),this.#eZ(e))},f=null;if("function"!=typeof r){if(f=this.#eQ(eY(this.#eb,r)),!o())return u();if(null===f)return h()}this.#e0();try{await this.#e1(f?.slots??null,o,!0)}catch(e){return console.error("[VFX-JS] transition failed to wrap the element; cutting to the new content.",e),u()}if(!o())return u();this.#eA.push(this.#ew.lockSize(this.#ey)),this.#eA.push(this.#ew.forceRender(this.#ey));let c=await eQ(this.#eE.snapshot(),1e3);if(!o())return u();if(!c){this.#e2(),await u(),o()&&this.#eZ(e);return}f&&this.#e3(e,f),n=f?f.keepPlaying:i??this.#eb.keepPlaying??!1;try{await u(),"function"==typeof r&&o()&&(s=r())}catch(t){throw o()&&(this.#eY(),this.#e$(e),this.#eE.cancel(),this.#eZ(e)),t}finally{n=!1}if(!o())return;if(null===f){if(f=this.#eQ(eY(this.#eb,s)),!o())return;if(null===f)return h();f.keepPlaying||this.#e$(e);try{await this.#e1(f.slots,o,!1)}catch(e){return console.error("[VFX-JS] transition failed to swap the effects; cutting to the new content.",e),h()}if(!o())return;this.#e3(e,f)}this.#e0();try{await this.#e4()}catch(e){console.error("[VFX-JS] transition waitFor failed:",e)}if(!o()||(await this.#ew.updateInTime(this.#ey)||this.#eL||(this.#eL=!0,console.warn("[VFX-JS] transition: the new content was not captured in time; it may pop in during the run.")),!o())||(await new Promise(e=>requestAnimationFrame(()=>e())),!o()))return;let d=this.#eE.start({duration:f.run.duration,ease:f.ease,onEnd:()=>{this.#eY(e),this.#e$(e)}}),p=await eQ(d,1e3*f.run.duration+1e3);o()&&(p||this.#e2(),this.#eZ(e))}#eQ(e){let t,r;if(e.duration<=0)return null;let i=e.transition;if("function"!=typeof i&&!this.#e5(i))return null;try{({transition:t,slots:r}=this.#e6(i,e.params))}catch(e){return console.error(`[VFX-JS] transition "${i.name}" constructor failed; cutting to the new content.`,e),null}let s={reverse:e.reverse,duration:e.duration},o=e.overflow??t.overflow;return void 0!==o&&(s.overflow=o),{run:s,ease:e.ease??t.ease??"smoothstep",slots:r,keepPlaying:e.keepPlaying}}#e5(e){let t=eZ.get(e);return t&&t!==this?(this.#eM||(this.#eM=!0,console.warn(`[VFX-JS] transition "${e.name??"unnamed"}" instance is running in another container; cutting to the new content. Pass the class to share it.`)),!1):(this.#eN!==e&&this.#ej(),eZ.set(e,this),this.#eN=e,!0)}#ej(){let e=this.#eN;this.#eN=null,e&&eZ.get(e)===this&&eZ.delete(e)}#e3(e,{run:t,slots:r}){for(let i of(this.#eY(),this.#eD={id:e,slots:r},r))i.start(t)}#e2(){this.#ez||(this.#ez=!0,console.warn("[VFX-JS] transition target did not render in time; cutting to the new content.")),this.#eY(),this.#e$(),this.#eE.cancel()}cancel(){let e=++this.#eI;this.#e_=null,this.#eY(),this.#e$(),this.#eE.cancel(),this.#ep(),this.#eJ(),this.#ej(),this.#eZ(e)}destroy(){this.#eU||(this.#eU=!0,this.cancel(),this.#eO=null,this.#eP?.())}#e0(){this.#eF.push(this.#ew.freezeInside(this.#ey))}#eJ(){let e=this.#eA;for(let t of(this.#eA=[],e))t()}#ep(){let e=this.#eF;for(let t of(this.#eF=[],e))t()}#e6(e,t){var r;let i,s,o,n=this.#eO;if(n?.key.source===e&&("function"!=typeof e||(r=n.key.params,i=r??{},s=t??{},(o=Object.keys(i)).length===Object.keys(s).length&&o.every(e=>{var t,r;return e in s&&(t=i[e],r=s[e],Array.isArray(t)&&Array.isArray(r)?t.length===r.length&&t.every((e,t)=>e===r[t]):t===r)}))))return n;let a="function"==typeof e?new e(t):e,l=[new eG(a,this.#eE)];return this.#eO={key:{source:e,params:t},transition:a,slots:l},{transition:a,slots:l}}#eK(e,t,r){let i="function"==typeof t[Symbol.iterator]?Array.from(t):[t];if(0!==i.length)try{if(this.#eX?.id!==e){this.#e$();let t=this.#eH(this.#ey);this.#eX={id:e,from:t},this.#eE.setLiveSource(()=>t.texture)}this.#eX.from.keep(i,r)}catch(t){console.error("[VFX-JS] transition failed to keep the old content; using a snapshot.",t),this.#e$(e)}}#e$(e){let t=this.#eX;t&&(void 0===e||t.id===e)&&(this.#eX=null,this.#eE.setLiveSource(null),t.from.dispose())}#eY(e){let t=this.#eD;if(t&&(void 0===e||t.id===e))for(let e of(this.#eD=null,t.slots))e.end()}async #e1(e,t,r){var i;if(this.#ek&&await this.#ek,!t())return;let s=null!==e?[this.#eE,...e]:this.#eB?this.#eV:[this.#eE];if(!this.#eB){let e=this.#ew.addHTMLWithStill(this.#ey,{effect:s}).then(()=>{this.#eB=!0,this.#eV=s}).finally(()=>{this.#ek=null});this.#ek=e,await e;return}if(i=this.#eV,!(s.length===i.length&&s.every((e,t)=>e===i[t]))){this.#eV=s;let e=this.#ew.updateEffects(this.#ey,s).finally(()=>{this.#ek=null});this.#ek=e,await e}r&&await this.#ew.update(this.#ey)}#eZ(e){if(this.#eC&&!this.#eU)return;let t=()=>{e===this.#eI&&this.#eB&&(this.#eB=!1,this.#eV=[],this.#ew.remove(this.#ey))};this.#ek?this.#ek.then(t,()=>{}):t()}#e4(){let e=this.#eb.waitFor??"media";return"none"===e?Promise.resolve():"media"===e?function(e,t,r=300){let i=[];for(let t of e.querySelectorAll("img, video")){let e="IMG"===t.tagName;(e?t.complete:t.readyState>=2)||function(e){if("IMG"===e.tagName){let t;return"lazy"===e.loading&&(!((t=e.getBoundingClientRect()).right>0)||!(t.bottom>0)||!(t.left<window.innerWidth)||!(t.top<window.innerHeight))}return"none"===e.preload}(t)||i.push(new Promise(r=>{let i=()=>r();t.addEventListener(e?"load":"loadeddata",i,{once:!0}),t.addEventListener("error",i,{once:!0})}))}return(t&&i.push(t),0===i.length)?Promise.resolve():new Promise(e=>{let t=setTimeout(e,r),s=()=>{clearTimeout(t),e()};Promise.all(i).then(s,s)})}(this.#ey,document.fonts?.ready):e(this.#ey)}}let e1=`
precision highp float;
in vec3 position;
void main() {
    gl_Position = vec4(position, 1.0);
}
`,e2=`
precision highp float;
attribute vec3 position;
void main() {
    gl_Position = vec4(position, 1.0);
}
`,e3=`
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
`,e4=`precision highp float;
uniform vec2 resolution;
uniform vec2 offset;
uniform float time;
uniform bool autoCrop;
uniform sampler2D src;
out vec4 outColor;
`,e5=`vec4 readTex(sampler2D tex, vec2 uv) {
    if (autoCrop && (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.)) {
        return vec4(0);
    }
    return texture(tex, uv);
}`,e6={none:e3,uvGradient:`
    ${e4}
    ${e5}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        outColor = vec4(uv, sin(time) * .5 + .5, 1);

        vec4 img = readTex(src, uv);
        outColor *= smoothstep(0., 1., img.a);
    }
    `,rainbow:`
    ${e4}
    ${e5}

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
    ${e4}
    ${e5}

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
    ${e4}
    ${e5}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        float b = sin(time * 2.) * 32. + 48.;
        uv = floor(uv * b) / b;
        outColor = readTex(src, uv);
    }
    `,rgbGlitch:`
    ${e4}
    ${e5}

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
    ${e4}
    ${e5}

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

    ${e4}
    ${e5}

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
    ${e4}
    ${e5}

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
    ${e4}
    ${e5}

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
    ${e4}
    ${e5}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        outColor = readTex(src, uv) * (sin(time * 5.) * 0.2 + 0.8);
    }

    `,spring:`
    ${e4}
    ${e5}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        uv = (uv - .5) * (1.05 + sin(time * 5.) * 0.05) + .5;
        outColor = readTex(src, uv);
    }
    `,duotone:`
    ${e4}
    ${e5}

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
    ${e4}
    ${e5}

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
    ${e4}
    ${e5}

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
    ${e4}
    uniform float enterProgress;
    uniform float leaveProgress;

    ${e5}

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
    ${e4}
    ${e5}

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
    ${e4}
    ${e5}

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
    ${e4}
    ${e5}

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
    ${e4}
    ${e5}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = readTex(src, uv);
        outColor = vec4(1.0 - color.rgb, color.a);
    }
    `,grayscale:`
    ${e4}
    ${e5}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = readTex(src, uv);
        float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
        outColor = vec4(vec3(gray), color.a);
    }
    `,vignette:`
    ${e4}
    ${e5}

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
    ${e4}
    ${e5}

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
    `},e8={...e6,slitScanTransition:e6.slitScanReveal,warpTransition:e6.warpReveal,pixelateTransition:e6.pixelateReveal,focusTransition:e6.focusReveal};class e7{pass;uniforms;constructor(e){this.uniforms={src:{value:null},offset:{value:new C},resolution:{value:new C},viewport:{value:new P}},this.pass=new _(e,e1,e3,this.uniforms,"premultiplied")}setUniforms(e,t,r){this.uniforms.src.value=e,this.uniforms.resolution.value.set(r.w*t,r.h*t),this.uniforms.offset.value.set(r.x*t,r.y*t)}dispose(){this.pass.dispose()}}function e9(e){return"number"==typeof e?{top:e,right:e,bottom:e,left:e}:Array.isArray(e)?{top:e[0],right:e[1],bottom:e[2],left:e[3]}:{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}let te={top:0,right:0,bottom:0,left:0};function tt(e){return{top:e.top,right:e.right,bottom:e.bottom,left:e.left}}function tr(e){return{top:e.top,left:e.left,right:e.left+Math.ceil(e.right-e.left),bottom:e.top+Math.ceil(e.bottom-e.top)}}function ti(e,t){return{top:e.top-t.top,right:e.right+t.right,bottom:e.bottom+t.bottom,left:e.left-t.left}}function ts(e,t,r){return Math.min(Math.max(e,t),r)}function to(e,t,r,i){let s=Math.min(i-r,t-e);if(s<=0)return 0;let o=ts(r,e,t);return(ts(i,e,t)-o)/s}class tn{#R;#v;#f;#e8;#P;#e7;#e9;#te;#tt=[];#tr=[];#ed;#ti=new Set;#ts=!1;#to;#tn=e9(0);#ta=null;constructor(e,t,r,i,s,o,n,a){this.#R=e,this.#v=t,this.#f=r,this.#e8=s,this.#P=a,this.#e7=i,this.#ed=o,this.#to=n,this.#e9=i.map(()=>this.#tl()),0===i.length&&(this.#ta=this.#tl()),this.#te=this.#tu()}#tu(){return this.#e7.map((e,t)=>"function"==typeof e.render&&!1!==e.enabled?t:-1).filter(e=>e>=0)}get effects(){return this.#e7}get hosts(){return this.#e9}get renderingIndices(){return this.#te}get stages(){return this.#tr}get hitTestPadBuffer(){return this.#tn}async initAll(){for(let e=0;e<this.#e7.length;e++){let t=this.#e7[e],r=this.#e9[e];r.setPhase("init");try{t.init&&await t.init(r.ctx)}catch(t){console.error(`[VFX-JS] effect[${e}].init() failed:`,t);for(let t=e-1;t>=0;t--)this.#th(t),this.#e9[t].dispose();throw this.#e9[e].dispose(),t}r.setPhase("update")}}run(e){if(this.#ts||!e.isVisible)return;this.#te=this.#tu();let t=this.#te.length;for(let t of this.#e9)t.setFrameState({time:e.time,deltaTime:e.deltaTime,mouse:e.mouse,mouseViewport:e.mouseViewport,intersection:e.intersection,enterTime:e.enterTime,leaveTime:e.leaveTime,enterProgress:e.enterProgress,leaveProgress:e.leaveProgress,uniforms:e.resolvedUniforms});this.#tf(e);for(let t=0;t<this.#e9.length;t++)this.#e9[t].setFrameDims(this.#tc(t,e)),this.#e9[t].setEffectDims(this.#td(t,e));for(let e=0;e<this.#e7.length;e++){let t=this.#e7[e];if(!t.update)continue;let r=this.#e9[e];r.setPhase("update");try{t.update(r.ctx)}catch(r){let t=`${e}:update`;this.#ti.has(t)||(this.#ti.add(t),console.warn(`[VFX-JS] effect[${e}].update() threw; skipping this frame's update:`,r))}}if(0===t)return void(this.#ta??this.#e9[0]).passthroughCopy(this.#ed,e.finalTarget,e.elementRectOnCanvasPx);for(let r=0;r<t;r++){let i,s=this.#te[r],o=this.#e9[s],n=this.#e7[s];if(!n.render)continue;o.setPhase("render"),o.tickAutoUpdates();let a=0===r?this.#ed:this.#tt[r-1].texHandle;o.setSrc(a),r===t-1?i=e.finalTarget:(i=this.#tt[r].rtHandle,o.clearRt(i)),o.setOutput(i);try{n.render(o.ctx)}catch(l){let e=`${s}:render`;this.#ti.has(e)||(this.#ti.add(e),console.warn(`[VFX-JS] effect[${s}].render() threw; falling back to passthrough:`,l));let n=this.#tr[r].outputViewport;null===i?o.passthroughCopy(a,null,n):r===t-1?o.passthroughCopy(a,i,n):o.passthroughCopy(a,i,{x:0,y:0,w:i.width,h:i.height})}o.setPhase("update")}}dispose(){if(!this.#ts){this.#ts=!0;for(let e=this.#e7.length-1;e>=0;e--)this.#th(e),this.#e9[e].dispose();for(let e of(this.#ta&&(this.#ta.dispose(),this.#ta=null),this.#tt))e.fb.dispose();this.#tt=[],this.#tr=[]}}async replaceEffects(e){if(this.#ts)throw Error("[VFX-JS] replaceEffects on disposed chain");let t=this.#e7,r=this.#e9,i=new Map;for(let e=0;e<t.length;e++)i.set(t[e],r[e]);let s=Array(e.length),o=[];for(let t=0;t<e.length;t++){let r=e[t],n=i.get(r);if(n)s[t]=n,i.delete(r);else{let e=this.#tl();s[t]=e,o.push({host:e,effect:r})}}for(let e=0;e<o.length;e++){let{host:t,effect:r}=o[e];t.setPhase("init");try{r.init&&await r.init(t.ctx),t.setPhase("update")}catch(r){console.error("[VFX-JS] replaceEffects: new effect init() failed:",r);for(let t=e-1;t>=0;t--){let e=o[t];if(e.effect.dispose)try{e.effect.dispose()}catch(e){console.error("[VFX-JS] dispose during init rollback threw:",e)}e.host.dispose()}throw t.dispose(),r}}for(let[e,t]of i){if(e.dispose)try{e.dispose()}catch(e){console.error("[VFX-JS] effect.dispose() threw during replaceEffects:",e)}t.dispose()}for(let e of this.#tt)e.fb.dispose();this.#tt=[],this.#tr=[],0!==e.length||this.#ta?e.length>0&&this.#ta&&(this.#ta.dispose(),this.#ta=null):this.#ta=this.#tl(),this.#e7=e,this.#e9=s,this.#te=this.#tu(),this.#ti.clear()}#tl(){return new $(this.#R,this.#v,this.#f,this.#ed,this.#e8,this.#P)}#th(e){let t=this.#e7[e];if(t.dispose)try{t.dispose()}catch(t){console.error(`[VFX-JS] effect[${e}].dispose() threw:`,t)}}#tf(e){let t=this.#te.length;if(this.#tr=Array(t),0===t)return;let r=this.#to?e.canvasBufferSize:e.elementBufferSize,i=[0,0,r[0],r[1]],s=this.#tp(e),o=i;for(let r=0;r<t;r++){let n=this.#te[r],a=this.#e7[n],l=r===t-1,u=this.#tm(a,o,i,s,e)??o,h=[u[2],u[3]],f=function(e,t){let[r,i,s,o]=e,[n,a,l,u]=t;return l<=0||u<=0?[0,0,1,1]:[(r-n)/l,(i-a)/u,s/l,o/u]}(i,u),c=l?{x:e.elementRectOnCanvasPx.x+u[0],y:e.elementRectOnCanvasPx.y+u[1],w:h[0],h:h[1]}:{x:0,y:0,w:h[0],h:h[1]};this.#tr[r]={dstRect:u,dstBufferSize:h,contentRectUv:f,outputViewport:c},l||this.#tg(r,h),o=u}let[n,a,l,u]=this.#tr[t-1].dstRect;this.#tn=e9({top:Math.max(0,a+u-r[1]),right:Math.max(0,n+l-r[0]),bottom:Math.max(0,-a),left:Math.max(0,-n)})}#tm(e,t,r,i,s){if(e.outputRect)return e.outputRect(this.#tv(s,r,t,i))}#tv(e,t,r,i){let s=e.canvasBufferSize[0]/e.canvasSize[0]||1;return{element:this.#to?e.canvasSize:e.elementSize,elementPixel:this.#to?e.canvasBufferSize:e.elementBufferSize,canvas:e.canvasSize,canvasPixel:e.canvasBufferSize,pixelRatio:s,contentRect:t,srcRect:r,canvasRect:i}}#td(e,t){let r=this.#to?t.canvasBufferSize:t.elementBufferSize,i=[0,0,r[0],r[1]],s=this.#tp(t),o=this.#te.indexOf(e),n=o<=0?i:this.#tr[o-1].dstRect;return this.#tv(t,i,n,s)}#tg(e,t){let r=this.#tt[e];if(r&&r.fb.width===t[0]&&r.fb.height===t[1])return;r&&r.fb.dispose();let i=new w(this.#R,t[0],t[1]),s=J(i),o=G(()=>i.texture,()=>i.width,()=>i.height);this.#tt[e]={fb:i,rtHandle:s,texHandle:o,bufferSize:t}}#tp(e){let[t,r]=e.canvasBufferSize;if(this.#to)return[0,0,t,r];let{x:i,y:s}=e.elementRectOnCanvasPx;return[-i,-s,t,r]}#tc(e,t){let r,i,s,o,n,a=this.#te.indexOf(e);if(a<0)s={x:0,y:0,w:r=t.elementBufferSize[0],h:i=t.elementBufferSize[1]},o=[0,0,1,1],n=[0,0,1,1];else{let e=this.#tr[a];r=e.dstBufferSize[0],i=e.dstBufferSize[1],s=e.outputViewport,o=e.contentRectUv,n=0===a?[0,0,1,1]:this.#tr[a-1].contentRectUv}return{outputBufferW:r,outputBufferH:i,canvasBufferSize:t.canvasBufferSize,outputViewport:s,elementBufferW:t.elementBufferSize[0],elementBufferH:t.elementBufferSize[1],contentRectUv:o,srcRectUv:n}}}class ta{#tx;#tw=new Set;constructor(e){this.#tx=e}freezeInside(e,t){let r={root:e,entries:[]};for(let i of t)!i.frozen&&tl(e,i.element)&&(i.frozen=!0,r.entries.push({e:i,opacity:i.element.style.opacity}),this.#tx.showPlain(i));this.#tw.add(r);let i=!1;return()=>{if(!i){for(let{e}of(i=!0,this.#tw.delete(r),r.entries))e.frozen=!1;requestAnimationFrame(()=>{for(let{e,opacity:t}of r.entries)!e.frozen&&this.#tx.isRegistered(e)&&this.#tx.hidePlain(e,t)})}}}adopt(e,t){let r=this.#ty(e.element);return!!r&&(e.frozen=!0,r.entries.push({e,opacity:t??e.element.style.opacity}),!0)}#ty(e){for(let t of this.#tw)if(tl(t.root,e))return t}}function tl(e,t){return t!==e&&e.contains(t)}function tu(e){this.data=e,this.pos=0}function th(e){this.stream=new tu(e),this.output={}}tu.prototype.readByte=function(){return this.data[this.pos++]},tu.prototype.peekByte=function(){return this.data[this.pos]},tu.prototype.readBytes=function(e){return this.data.subarray(this.pos,this.pos+=e)},tu.prototype.peekBytes=function(e){return this.data.subarray(this.pos,this.pos+e)},tu.prototype.readString=function(e){for(var t="",r=0;r<e;r++)t+=String.fromCharCode(this.readByte());return t},tu.prototype.readBitArray=function(){for(var e=[],t=this.readByte(),r=7;r>=0;r--)e.push(!!(t&1<<r));return e},tu.prototype.readUnsigned=function(e){var t=this.readBytes(2);return e?(t[1]<<8)+t[0]:(t[0]<<8)+t[1]},th.prototype.parse=function(e){return this.parseParts(this.output,e),this.output},th.prototype.parseParts=function(e,t){for(var r=0;r<t.length;r++){var i=t[r];this.parsePart(e,i)}},th.prototype.parsePart=function(e,t){var r,i=t.label;if(!t.requires||t.requires(this.stream,this.output,e))if(t.loop){for(var s=[];t.loop(this.stream);){var o={};this.parseParts(o,t.parts),s.push(o)}e[i]=s}else t.parts?(r={},this.parseParts(r,t.parts),e[i]=r):t.parser?(r=t.parser(this.stream,this.output,e),t.skip||(e[i]=r)):t.bits&&(e[i]=this.parseBits(t.bits))},th.prototype.parseBits=function(e){var t={},r=this.stream.readBitArray();for(var i in e){var s=e[i];s.length?t[i]=r.slice(s.index,s.index+s.length).reduce(function(e,t){return 2*e+t},0):t[i]=r[s.index]}return t};let tf=function(){return function(e){return e.readByte()}},tc=function(e){return function(t){return t.readBytes(e)}},td=function(e){return function(t){return t.readString(e)}},tp=function(e){return function(t){return t.readUnsigned(e)}},tm=function(e,t){return function(r,i,s){for(var o=t(r,i,s),n=Array(o),a=0;a<o;a++)n[a]=r.readBytes(e);return n}};var tg,tv={label:"blocks",parser:function(e){for(var t=[],r=0,i=e.readByte();0!==i;i=e.readByte())t.push(e.readBytes(i)),r+=i;var s=new Uint8Array(r);r=0;for(var o=0;o<t.length;o++)s.set(t[o],r),r+=t[o].length;return s}},tx={label:"gce",requires:function(e){var t=e.peekBytes(2);return 33===t[0]&&249===t[1]},parts:[{label:"codes",parser:tc(2),skip:!0},{label:"byteSize",parser:tf()},{label:"extras",bits:{future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}}},{label:"delay",parser:tp(!0)},{label:"transparentColorIndex",parser:tf()},{label:"terminator",parser:tf(),skip:!0}]},tw={label:"image",requires:function(e){return 44===e.peekByte()},parts:[{label:"code",parser:tf(),skip:!0},{label:"descriptor",parts:[{label:"left",parser:tp(!0)},{label:"top",parser:tp(!0)},{label:"width",parser:tp(!0)},{label:"height",parser:tp(!0)},{label:"lct",bits:{exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}}}]},{label:"lct",requires:function(e,t,r){return r.descriptor.lct.exists},parser:tm(3,function(e,t,r){return Math.pow(2,r.descriptor.lct.size+1)})},{label:"data",parts:[{label:"minCodeSize",parser:tf()},tv]}]},ty={label:"text",requires:function(e){var t=e.peekBytes(2);return 33===t[0]&&1===t[1]},parts:[{label:"codes",parser:tc(2),skip:!0},{label:"blockSize",parser:tf()},{label:"preData",parser:function(e,t,r){return e.readBytes(r.text.blockSize)}},tv]},tb={label:"application",requires:function(e,t,r){var i=e.peekBytes(2);return 33===i[0]&&255===i[1]},parts:[{label:"codes",parser:tc(2),skip:!0},{label:"blockSize",parser:tf()},{label:"id",parser:function(e,t,r){return e.readString(r.blockSize)}},tv]},tE={label:"comment",requires:function(e,t,r){var i=e.peekBytes(2);return 33===i[0]&&254===i[1]},parts:[{label:"codes",parser:tc(2),skip:!0},tv]},tT=[{label:"header",parts:[{label:"signature",parser:td(3)},{label:"version",parser:td(3)}]},{label:"lsd",parts:[{label:"width",parser:tp(!0)},{label:"height",parser:tp(!0)},{label:"gct",bits:{exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}}},{label:"backgroundColorIndex",parser:tf()},{label:"pixelAspectRatio",parser:tf()}]},{label:"gct",requires:function(e,t){return t.lsd.gct.exists},parser:tm(3,function(e,t){return Math.pow(2,t.lsd.gct.size+1)})},{label:"frames",parts:[tx,tb,tE,tw,ty],loop:function(e){var t=e.peekByte();return 33===t||44===t}}];function tS(e){var t=new th(new Uint8Array(e));this.raw=t.parse(tT),this.raw.hasImages=!1;for(var r=0;r<this.raw.frames.length;r++)if(this.raw.frames[r].image){this.raw.hasImages=!0;break}}tS.prototype.decompressFrame=function(e,t){if(e>=this.raw.frames.length)return null;var r=this.raw.frames[e];if(r.image){var i=r.image.descriptor.width*r.image.descriptor.height,s=function(e,t,r){var i,s,o,n,a,l,u,h,f,c,d,p,m,g,v,x=Array(r),w=Array(4096),y=Array(4096),b=Array(4097);for(a=(s=1<<e)+1,i=s+2,u=-1,o=(1<<(n=e+1))-1,f=0;f<s;f++)w[f]=0,y[f]=f;for(d=h=p=m=v=g=0,c=0;c<r;){if(0===m){if(h<n){d+=t[g]<<h,h+=8,g++;continue}if(f=d&o,d>>=n,h-=n,f>i||f==a)break;if(f==s){o=(1<<(n=e+1))-1,i=s+2,u=-1;continue}if(-1==u){b[m++]=y[f],u=f,p=f;continue}for(l=f,f==i&&(b[m++]=p,f=u);f>s;)b[m++]=y[f],f=w[f];p=255&y[f],b[m++]=p,i<4096&&(w[i]=u,y[i]=p,(++i&o)==0&&i<4096&&(n++,o+=i)),u=l}m--,x[v++]=b[m],c++}for(c=v;c<r;c++)x[c]=0;return x}(r.image.data.minCodeSize,r.image.data.blocks,i);r.image.descriptor.lct.interlaced&&(s=function(e,t){for(var r=Array(e.length),i=e.length/t,s=[0,4,2,1],o=[8,8,4,2],n=0,a=0;a<4;a++)for(var l=s[a];l<i;l+=o[a])!function(i,s){var o=e.slice(s*t,(s+1)*t);r.splice.apply(r,[i*t,t].concat(o))}(l,n),n++;return r}(s,r.image.descriptor.width));var o={pixels:s,dims:{top:r.image.descriptor.top,left:r.image.descriptor.left,width:r.image.descriptor.width,height:r.image.descriptor.height}};return r.image.descriptor.lct&&r.image.descriptor.lct.exists?o.colorTable=r.image.lct:o.colorTable=this.raw.gct,r.gce&&(o.delay=10*(r.gce.delay||10),o.disposalType=r.gce.extras.disposal,r.gce.extras.transparentColorGiven&&(o.transparentIndex=r.gce.transparentColorIndex)),t&&(o.patch=function(e){for(var t=e.pixels.length,r=new Uint8ClampedArray(4*t),i=0;i<t;i++){var s=4*i,o=e.pixels[i],n=e.colorTable[o];r[s]=n[0],r[s+1]=n[1],r[s+2]=n[2],r[s+3]=255*(o!==e.transparentIndex)}return r}(o)),o}return null},tS.prototype.decompressFrames=function(e,t,r){void 0===t&&(t=0),r=void 0===r?this.raw.frames.length:Math.min(r,this.raw.frames.length);for(var i=[],s=t;s<r;s++)this.raw.frames[s].image&&i.push(this.decompressFrame(s,e));return i};class tR{frames=[];index=0;canvas;ctx;pixelRatio;startTime;playTime=0;static async create(e,t){let r=await fetch(e).then(e=>e.arrayBuffer()).then(e=>new tS(e)),i=r.decompressFrames(!0,void 0,void 0),{width:s,height:o}=r.raw.lsd;return new tR(i,s,o,t)}constructor(e,t,r,i){this.frames=e,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.pixelRatio=i,this.canvas.width=t,this.canvas.height=r,this.startTime=Date.now()}getCanvas(){return this.canvas}update(){let e=Date.now()-this.startTime;for(;this.playTime<e;){let e=this.frames[this.index%this.frames.length];this.playTime+=e.delay,this.index++}let t=this.frames[this.index%this.frames.length],r=new ImageData(t.patch,t.dims.width,t.dims.height);this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.putImageData(r,t.dims.left,t.dims.top)}}class tC{gl;canvas;maxTextureSize;floatLinearFilter;floatBlend;isContextLost=!1;#tb=new Set;#tE=new Set;#tT=new Set;constructor(e,t=!1){let r=e.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:t});if(!r)throw Error("[VFX-JS] WebGL2 is not available.");this.gl=r,this.canvas=e,r.getExtension("EXT_color_buffer_float"),r.getExtension("EXT_color_buffer_half_float"),this.floatBlend=!!r.getExtension("EXT_float_blend"),this.floatLinearFilter=!!r.getExtension("OES_texture_float_linear"),this.maxTextureSize=r.getParameter(r.MAX_TEXTURE_SIZE),e.addEventListener("webglcontextlost",this.#tS,!1),e.addEventListener("webglcontextrestored",this.#tR,!1)}setSize(e,t,r){let i=Math.floor(e*r),s=Math.floor(t*r);(this.canvas.width!==i||this.canvas.height!==s)&&(this.canvas.width=i,this.canvas.height=s)}addResource(e){this.#tb.add(e)}removeResource(e){this.#tb.delete(e)}onContextLost(e){return this.#tE.add(e),()=>this.#tE.delete(e)}onContextRestored(e){return this.#tT.add(e),()=>this.#tT.delete(e)}#tS=e=>{for(let t of(e.preventDefault(),this.isContextLost=!0,this.#tE))t()};#tR=()=>{this.isContextLost=!1;let e=this.gl;for(let t of(e.getExtension("EXT_color_buffer_float"),e.getExtension("EXT_color_buffer_half_float"),this.floatBlend=!!e.getExtension("EXT_float_blend"),this.#tb))t.restore();for(let e of this.#tT)e()}}class tP{gl;vao;#t;#tC;constructor(e){this.#t=e,this.gl=e.gl,this.#l(),e.addResource(this)}#l(){let e=this.gl,t=e.createVertexArray(),r=e.createBuffer();if(!t||!r)throw Error("[VFX-JS] Failed to create quad VAO");this.vao=t,this.#tC=r;let i=new Float32Array([-1,-1,0,1,-1,0,-1,1,0,-1,1,0,1,-1,0,1,1,0]);e.bindVertexArray(t),e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,i,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0),e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null)}restore(){this.#l()}draw(){let e=this.gl;e.bindVertexArray(this.vao),e.drawArrays(e.TRIANGLES,0,6)}dispose(){this.#t.removeResource(this),this.gl.deleteVertexArray(this.vao),this.gl.deleteBuffer(this.#tC)}}function tF(e){return{phase:"hidden",direction:1,enterProgress:0,leaveProgress:0,isIn:!1,wasAbove:!1,wasBelow:!1,lastTime:e}}function tA(e,t){e.phase=t,e.direction=1,e.enterProgress=+("shown"===t),e.leaveProgress=0}function tz(e){return Math.min(Math.max(e,0),1)}function tL(e,t,r,i={}){return new w(e,t,r,{float:i.float??!1})}function tM(e,t){let r;r=t.renderingToBuffer?"none":t.premultipliedAlpha?"premultiplied":"normal";let i=t.glslVersion??F(t.fragmentShader);return new _(e,t.vertexShader??("100"===i?e2:e1),t.fragmentShader,t.uniforms,r,i)}class tI{pass;#T;#tP;#tF;#tA;#tz;#tL;constructor(e,t,r,i,s,o,n,a){if(this.#tA=i??!1,this.#tz=s??!1,this.#tL=o,this.#tP={},this.#T={src:{value:null},offset:{value:new C},resolution:{value:new C},viewport:{value:new P},time:{value:0},mouse:{value:new C},passIndex:{value:0}},r)for(let[e,t]of Object.entries(r))"function"==typeof t?(this.#tP[e]=t,this.#T[e]={value:t()}):this.#T[e]={value:t};this.pass=tM(e,{fragmentShader:t,uniforms:this.#T,renderingToBuffer:n??!1,premultipliedAlpha:!0,glslVersion:a})}get uniforms(){return this.#T}setUniforms(e,t,r,i,s,o){this.#T.src.value=e,this.#T.resolution.value.set(r.w*t,r.h*t),this.#T.offset.value.set(r.x*t,r.y*t),this.#T.time.value=i,this.#T.mouse.value.set(s*t,o*t)}updateCustomUniforms(e){for(let[e,t]of Object.entries(this.#tP))this.#T[e]&&(this.#T[e].value=t());if(e)for(let[t,r]of Object.entries(e))this.#T[t]&&(this.#T[t].value=r())}initializeBackbuffer(e,t,r,i){this.#tA&&!this.#tF&&(this.#tL?this.#tF=new E(e,this.#tL[0],this.#tL[1],1,this.#tz):this.#tF=new E(e,t,r,i,this.#tz))}resizeBackbuffer(e,t){this.#tF&&!this.#tL&&this.#tF.resize(e,t)}registerBufferUniform(e){this.#T[e]||(this.#T[e]={value:null})}get backbuffer(){return this.#tF}get persistent(){return this.#tA}get float(){return this.#tz}get size(){return this.#tL}dispose(){this.pass.dispose(),this.#tF?.dispose()}}class t_{#R;#tM=new Map;constructor(e){this.#R=e}get(e,t,r){let i=`${t}\0${e}\0${r??""}`,s=this.#tM.get(i);return s||(s=new A(this.#R,e,t,r),this.#tM.set(i,s)),s}get size(){return this.#tM.size}dispose(){for(let e of this.#tM.values())e.dispose();this.#tM.clear()}}let tU=new Map,tB=!1;function tk(e,t){return"hic"===e||!0===t?null:"number"==typeof t?t.toString():"video"===e?"0.0001":"0"}function tV(e,t){let r=e.getContext("2d");r&&(r.clearRect(0,0,e.width,e.height),r.drawImage(t,0,0,e.width,e.height))}class tO{#eb;#ef;#t;#C;#v;#P;#tI;#t_=[];#tU;#tB=new Map;#tk=null;#tV=!1;#tO=new WeakSet;#tN={};#tD={};#tX=0;#tH=void 0;#f=2;#t$=[];#tw=new ta({showPlain:e=>{if("hic"===e.type){let t=e.srcTexture.source;t instanceof OffscreenCanvas&&tV(e.element,t)}else e.element.style.setProperty("opacity",e.originalOpacity.toString())},hidePlain:(e,t)=>{if("hic"===e.type){let t=e.element;t.getContext("2d")?.clearRect(0,0,t.width,t.height)}else e.element.style.opacity=t},isRegistered:e=>this.#t$.includes(e)});#tW=0;#tG=1;#tq=Date.now()/1e3;#tJ=!1;#tj=e9(0);#tK=e9(0);#tY=[0,0];#tZ=0;#tQ=0;#t0=0;#t1=0;#t2=new WeakMap;#t3=new Set;#t4;constructor(e,t){this.#eb=e,this.#ef=t,this.#t=new tC(t,e.preserveDrawingBuffer),this.#C=this.#t.gl,this.#C.clearColor(0,0,0,0),this.#f=e.pixelRatio,this.#tG=e.timeScale,this.#tq=Date.now()/1e3,this.#v=new tP(this.#t),this.#P=new t_(this.#t),this.#t4=new m(this.#t),window.addEventListener("resize",this.#t5),window.addEventListener("pointermove",this.#t6),this.#t5(),this.#tI=new e7(this.#t),this.#t8(e.postEffects),this.#t.onContextRestored(()=>{this.#C.clearColor(0,0,0,0)})}destroy(){for(let e of(this.stop(),window.removeEventListener("resize",this.#t5),window.removeEventListener("pointermove",this.#t6),this.#tU?.dispose(),this.#tB.values()))e?.dispose();for(let e of this.#t_)e.pass.dispose();for(let e of(this.#tk&&(this.#tk.dispose(),this.#tk=null,this.#tV=!1),[...this.#t3]))e.capture.dispose();this.#t4.dispose(),this.#tI.dispose(),this.#P.dispose(),this.#v.dispose()}#t7(){let e,t,r=this.#ef.ownerDocument,i="BackCompat"===r.compatMode?r.body:r.documentElement,s=i.clientWidth,o=i.clientHeight,n=window.scrollX,a=window.scrollY;if(this.#eb.fixedCanvas)e=0,t=0;else if(this.#eb.wrapper)e=s*this.#eb.scrollPadding[0],t=o*this.#eb.scrollPadding[1];else{let i=r.body.scrollWidth-(n+s),l=r.body.scrollHeight-(a+o);e=tG(s*this.#eb.scrollPadding[0],0,i),t=tG(o*this.#eb.scrollPadding[1],0,l)}let l=s+2*e,u=o+2*t;(l!==this.#tY[0]||u!==this.#tY[1])&&(this.#ef.style.width=`${l}px`,this.#ef.style.height=`${u}px`,this.#t.setSize(l,u,this.#f),this.#tj=e9({top:-t,left:-e,right:s+e,bottom:o+t}),this.#tK=e9({top:0,left:0,right:s,bottom:o}),this.#tY=[l,u],this.#tZ=e,this.#tQ=t),this.#eb.fixedCanvas||this.#ef.style.setProperty("transform",`translate(${n-e}px, ${a-t}px)`)}#t5=async()=>{for(let e of this.#t3)e.resize();for(let e of this.#t$)if("text"===e.type&&e.isInViewport){let t=e.element.getBoundingClientRect(),r=Math.ceil(t.width),i=Math.ceil(t.height);(r!==e.width||i!==e.height)&&(await this.#t9(e),e.width=r,e.height=i)}for(let e of this.#t$)if("text"===e.type&&!e.isInViewport){let t=e.element.getBoundingClientRect(),r=Math.ceil(t.width),i=Math.ceil(t.height);(r!==e.width||i!==e.height)&&(await this.#t9(e),e.width=r,e.height=i)}};#t6=e=>{this.#t0=e.clientX,this.#t1=window.innerHeight-e.clientY};async #t9(e){if(!this.#t2.get(e.element)){this.#t2.set(e.element,!0);try{let t=e.srcTexture,r=t.source instanceof OffscreenCanvas?t.source:void 0,i=await f(e.element,e.originalOpacity,r,this.maxTextureSize);if(0===i.width||0===i.height)return;let s=new m(this.#t,i);s.wrapS=t.wrapS,s.wrapT=t.wrapT,s.premultiplyAlpha=t.premultiplyAlpha,s.needsUpdate=!0,!e.chain&&e.passes.length>0&&(e.passes[0].uniforms.src.value=s),e.srcTexture=s,t.dispose()}catch(e){console.error(e)}finally{this.#t2.set(e.element,!1)}}}async addElement(e,t={},r){let i,s,o;if(void 0!==t.effect)return this.#re(e,t,t.effect,r);let n=this.#rt(t),a=e.getBoundingClientRect(),l=tJ(e)?tr(a):tt(a),[u,c]=tD(t.overflow),d=ti(l,c),p=tX(t.intersection),g=""===e.style.opacity?1:Number.parseFloat(e.style.opacity),v=!1;if(e instanceof HTMLImageElement){s="img";let t=h(e);if(v=!!t.match(/\.gif/i)){let r=await tR.create(t,this.#f);tU.set(e,r),i=new m(this.#t,r.getCanvas())}else{let e=await x(t);i=new m(this.#t,e)}}else if(e instanceof HTMLVideoElement)i=new m(this.#t,e),s="video";else if(e instanceof HTMLCanvasElement)j(e)&&r?(i=new m(this.#t,r),s="hic"):(i=new m(this.#t,e),s="canvas");else{let t=await f(e,g,void 0,this.maxTextureSize);i=new m(this.#t,t),s="text"}let[w,y]=tW(t.wrap);i.wrapS=w,i.wrapT=y,i.needsUpdate=!0;let b=t.autoCrop??!0,T=tk(s,t.overlay),S={src:{value:i},resolution:{value:new C},offset:{value:new C},time:{value:0},enterTime:{value:-1},leaveTime:{value:-1},enterProgress:{value:0},leaveProgress:{value:0},mouse:{value:new C},intersection:{value:0},viewport:{value:new P},autoCrop:{value:b}},R={};if(void 0!==t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r?(S[e]={value:r()},R[e]=r):S[e]={value:r};if(t.backbuffer){let e,t;e=(d.right-d.left)*this.#f,t=(d.bottom-d.top)*this.#f,S.backbuffer={value:(o=new E(this.#t,e,t,this.#f,!1)).texture}}let F=new Map,A=new Map;for(let e=0;e<n.length-1;e++){let t=n[e].target??`pass${e}`;n[e]={...n[e],target:t};let r=n[e].size,i=r?r[0]:(d.right-d.left)*this.#f,s=r?r[1]:(d.bottom-d.top)*this.#f;if(n[e].persistent){let i=r?1:this.#f,s=r?r[0]:d.right-d.left,o=r?r[1]:d.bottom-d.top;A.set(t,new E(this.#t,s,o,i,n[e].float))}else F.set(t,tL(this.#t,i,s,{float:n[e].float}))}let z=[];for(let e=0;e<n.length;e++){let t=n[e],r=t.frag,i={...S},s={};for(let[e,s]of F)e!==t.target&&r.match(RegExp(`uniform\\s+sampler2D\\s+${e}\\b`))&&(i[e]={value:s.texture});for(let[e,t]of A)r.match(RegExp(`uniform\\s+sampler2D\\s+${e}\\b`))&&(i[e]={value:t.texture});if(t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r?(i[e]={value:r()},s[e]=r):i[e]={value:r};let o=tM(this.#t,{vertexShader:t.vert,fragmentShader:r,uniforms:i,renderingToBuffer:void 0!==t.target,glslVersion:t.glslVersion});z.push({pass:o,uniforms:i,uniformGenerators:{...R,...s},target:t.target,persistent:t.persistent,float:t.float,size:t.size,backbuffer:t.target?A.get(t.target):void 0})}let L=this.#tW,M={type:s,element:e,isInViewport:!1,intersectionState:tF(L),width:l.right-l.left,height:l.bottom-l.top,passes:z,bufferTargets:F,startTime:L,enterTime:L,leaveTime:-1/0,release:t.release??1/0,isGif:v,isFullScreen:u,overflow:c,intersection:p,originalOpacity:g,srcTexture:i,zIndex:t.zIndex??0,backbuffer:o,autoCrop:b};this.#rr(M,l,L),this.#ri(M,T)}#ri(e,t){this.#tw.adopt(e,t)||null===t||e.element.style.setProperty("opacity",t),this.#t$.push(e),this.#t$.sort((e,t)=>e.zIndex-t.zIndex)}async #re(e,t,r,i){let s,o;void 0!==t.shader&&console.warn("[VFX-JS] Both `shader` and `effect` specified; `effect` takes precedence."),void 0!==t.overflow&&console.warn("[VFX-JS] `overflow` is shader-path only and is ignored by the effect path. Use each effect's own `outputRect` (with `dims.canvasRect` for fullscreen) to control its dst rect.");let n=Array.isArray(r)?[...r]:[r];this.#rs(n);let a=e.getBoundingClientRect(),l=tJ(e)?tr(a):tt(a),[u,c]=tD(t.overflow),d=tX(t.intersection),p=""===e.style.opacity?1:Number.parseFloat(e.style.opacity),g=!1;if(e instanceof HTMLImageElement){o="img";let t=h(e);if(g=!!t.match(/\.gif/i)){let r=await tR.create(t,this.#f);tU.set(e,r),s=new m(this.#t,r.getCanvas())}else{let e=await x(t);s=new m(this.#t,e)}}else if(e instanceof HTMLVideoElement)s=new m(this.#t,e),o="video";else if(e instanceof HTMLCanvasElement)j(e)&&i?(s=new m(this.#t,i),o="hic"):(s=new m(this.#t,e),o="canvas");else{let t=await f(e,p,void 0,this.maxTextureSize);s=new m(this.#t,t),o="text"}let[v,w]=tW(t.wrap);s.wrapS=v,s.wrapT=w,s.premultiplyAlpha=!0,s.needsUpdate=!0;let y=t.autoCrop??!0,b=tk(o,t.overlay),E=this.#tW,T={type:o,element:e,isInViewport:!1,intersectionState:tF(E),width:l.right-l.left,height:l.bottom-l.top,passes:[],bufferTargets:new Map,startTime:E,enterTime:E,leaveTime:-1/0,release:t.release??1/0,isGif:g,isFullScreen:u,overflow:c,intersection:d,originalOpacity:p,srcTexture:s,zIndex:t.zIndex??0,backbuffer:void 0,autoCrop:y,effectLastRenderTime:E},S=G(()=>T.srcTexture,()=>tH(T.srcTexture,"w"),()=>tH(T.srcTexture,"h")),R={},C={};if(t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r?(C[e]=r,R[e]=r()):R[e]=r;T.effectUniformGenerators=C,T.effectStaticUniforms=R;let P={autoCrop:y,glslVersion:t.glslVersion??"300 es"},F=new tn(this.#t,this.#v,this.#f,n,P,S,!1,this.#P);try{await F.initAll()}catch(t){throw this.#ro(n),s.dispose(),e.style.setProperty("opacity",p.toString()),t}T.chain=F,this.#rr(T,l,E),this.#ri(T,b)}#rt(e){let t=t=>void 0===t.glslVersion&&void 0!==e.glslVersion?{...t,glslVersion:e.glslVersion}:t;return Array.isArray(e.shader)?e.shader.map(t):[t({frag:this.#rn(e.shader||"uvGradient")})]}async updateElementEffects(e,t){let r=this.#t$.find(t=>t.element===e);if(!r)throw Error("[VFX-JS] updateElementEffects: element not registered");if(!r.chain)throw Error("[VFX-JS] updateElementEffects: element is on the shader path; effect-only updates are not supported");let i=Array.isArray(t)?[...t]:[t],s=r.chain.effects,o=new Set(s),n=[];for(let e of i)if(!o.has(e)){if(this.#tO.has(e))throw Error("[VFX-JS] Effect instance already attached. Construct a new instance per `vfx.add()` / `postEffect`.");n.push(e)}await r.chain.replaceEffects(i);let a=new Set(i);for(let e of s)a.has(e)||this.#tO.delete(e);for(let e of n)this.#tO.add(e)}removeElement(e){let t=this.#t$.findIndex(t=>t.element===e);if(-1!==t){let r=this.#t$.splice(t,1)[0];if(r.chain)this.#ro(r.chain.effects),r.chain.dispose();else{for(let e of r.bufferTargets.values())e.dispose();for(let e of r.passes)e.pass.dispose(),e.backbuffer?.dispose();r.backbuffer?.dispose()}r.srcTexture.dispose(),e.style.setProperty("opacity",r.originalOpacity.toString())}}updateTextElement(e){let t=this.#t$.findIndex(t=>t.element===e);return -1!==t?this.#t9(this.#t$[t]):Promise.resolve()}async updateImageElement(e){let t=this.#t$.find(t=>t.element===e);if(t?.type!=="img"||t.isGif)return;let r=await x(h(e)),i=t.srcTexture,s=new m(this.#t,r);s.wrapS=i.wrapS,s.wrapT=i.wrapT,s.premultiplyAlpha=i.premultiplyAlpha,s.needsUpdate=!0,!t.chain&&t.passes.length>0&&(t.passes[0].uniforms.src.value=s),t.srcTexture=s,i.dispose()}updateCanvasElement(e){let t=this.#t$.find(t=>t.element===e);if(t){let r=t.srcTexture,i=new m(this.#t,e);i.wrapS=r.wrapS,i.wrapT=r.wrapT,i.premultiplyAlpha=r.premultiplyAlpha,i.needsUpdate=!0,!t.chain&&t.passes.length>0&&(t.passes[0].uniforms.src.value=i),t.srcTexture=i,r.dispose()}}updateHICTexture(e,t){let r=this.#t$.find(t=>t.element===e);if(r?.type!=="hic")return;r.frozen&&tV(e,t);let i=r.srcTexture,s=this.#ra(i,t);s!==i&&(!r.chain&&r.passes.length>0&&(r.passes[0].uniforms.src.value=s),r.srcTexture=s)}#ra(e,t){if(e.source===t)return e.needsUpdate=!0,e;let r=new m(this.#t,t);return r.wrapS=e.wrapS,r.wrapT=e.wrapT,r.premultiplyAlpha=e.premultiplyAlpha,r.needsUpdate=!0,e.dispose(),r}async addCapture(e,t,r,i,s){let o=await eB({createTexture:e=>this.#rl(e),uploadTexture:e=>this.#ru(e),refreshTexture:(e,t)=>this.#ra(e,t),textureSize:tH,emptyTexture:this.#t4,maxTextureSize:this.maxTextureSize,stillZIndex:r},e,t,()=>{this.#t3.delete(o),i?.()},s);return this.#t3.add(o),o.capture}#ru(e){try{e.upload(0)}catch(e){throw Error(`[VFX-JS] capture() could not upload the source: ${e}`)}}#rl(e){let t=new m(this.#t,e);return t.premultiplyAlpha=!0,t}hasElement(e){return this.#t$.some(t=>t.element===e)}emptyTexture(){return G(()=>this.#t4,()=>0,()=>0)}liveTexture(){var e,t,r;let i,s,o;return e=e=>this.#rl(e),t=(e,t)=>this.#ra(e,t),r=tH,i=null,s=!1,o=G(()=>i,()=>i?r(i,"w"):0,()=>i?r(i,"h"):0),{get texture(){return i?o:null},update(r){s||(i=i?t(i,r):e(r))},dispose(){s=!0,i?.dispose(),i=null}}}freezeInside(e){return this.#tw.freezeInside(e,this.#t$)}isFrozen(e){return this.#t$.some(t=>t.element===e&&t.frozen)}forceRender(e){let t=this.#t$.find(t=>t.element===e);return!t||t.forceRender?()=>{}:(t.forceRender=!0,()=>{t.forceRender=!1})}get maxTextureSize(){return this.#t.maxTextureSize}isPlaying(){return void 0!==this.#tH}play(){this.isPlaying()||(this.#tq=Date.now()/1e3,this.#tH=requestAnimationFrame(this.#rh))}get time(){return this.#tW}setTime(e){this.#tW=e,this.#tJ=!0}get timeScale(){return this.#tG}set timeScale(e){this.#tG=e}stop(){void 0!==this.#tH&&(cancelAnimationFrame(this.#tH),this.#tH=void 0)}render(){let e=Date.now()/1e3;this.#tJ?this.#tJ=!1:this.#tW+=(e-this.#tq)*this.#tG,this.#tq=e;let t=this.#tW,r=this.#C;this.#t7(),r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,this.#ef.width,this.#ef.height),r.clear(r.COLOR_BUFFER_BIT);let i=this.#tj.right-this.#tj.left,s=this.#tj.bottom-this.#tj.top,o={x:0,y:0,w:i,h:s},n=this.#rf();for(let e of(n&&(this.#rc(i,s),this.#tU&&(r.bindFramebuffer(r.FRAMEBUFFER,this.#tU.fbo),r.clear(r.COLOR_BUFFER_BIT),r.bindFramebuffer(r.FRAMEBUFFER,null))),this.#t3))e.tick();for(let e of this.#t$){if(e.frozen){e.intersectionState.lastTime=t;continue}let r=e.element.getBoundingClientRect(),a="text"===e.type?tr(r):tt(r),l=this.#rr(e,a,t);if(!l.isVisible)continue;if(e.chain){this.#rd(e,a,l,t);continue}let u=e.passes[0].uniforms;for(let r of(u.time.value=t-e.startTime,u.resolution.value.set((a.right-a.left)*this.#f,(a.bottom-a.top)*this.#f),u.mouse.value.set((this.#t0+this.#tZ)*this.#f,(this.#t1+this.#tQ)*this.#f),e.passes))for(let[e,t]of Object.entries(r.uniformGenerators))r.uniforms[e].value=t();tU.get(e.element)?.update(),("video"===e.type||e.isGif)&&(u.src.value.needsUpdate=!0);let h=b(a,s,this.#tZ,this.#tQ),f=b(l.rectWithOverflow,s,this.#tZ,this.#tQ);e.backbuffer&&(e.passes[0].uniforms.backbuffer.value=e.backbuffer.texture);{let t=e.isFullScreen?o:f,r=Math.max(1,t.w*this.#f),i=Math.max(1,t.h*this.#f),s=Math.max(1,t.w),n=Math.max(1,t.h);for(let t=0;t<e.passes.length-1;t++){let o=e.passes[t];if(!o.size)if(o.backbuffer)o.backbuffer.resize(s,n);else{let t=e.bufferTargets.get(o.target);t&&(t.width!==r||t.height!==i)&&t.setSize(r,i)}}}let c=new Map;for(let t of e.passes)t.backbuffer&&t.target&&c.set(t.target,t.backbuffer.texture);let d=e.srcTexture;for(let t=0;t<e.passes.length-1;t++){let i=e.passes[t],s=e.isFullScreen?o:f;for(let[e,t]of(i.uniforms.src.value=d,c))i.uniforms[e]&&(i.uniforms[e].value=t);for(let[e,t]of Object.entries(i.uniformGenerators))i.uniforms[e]&&(i.uniforms[e].value=t());let n=i.size?{x:0,y:0,w:i.size[0],h:i.size[1]}:{x:0,y:0,w:s.w,h:s.h},a=function(e,t,r,i,s,o,n){let a=s[0]+o[0]-r.x,l=s[1]+o[1]-r.y;return i?{resolution:[i[0],i[1]],offset:[0,0],mouse:[a/r.w*i[0],l/r.h*i[1]]}:{resolution:[e.width*n,e.height*n],offset:[(t.x-r.x)*n,(t.y-r.y)*n],mouse:[a*n,l*n]}}(r,h,s,i.size,[this.#t0,this.#t1],[this.#tZ,this.#tQ],this.#f);if(i.uniforms.resolution.value.set(...a.resolution),i.uniforms.offset.value.set(...a.offset),i.uniforms.mouse.value.set(...a.mouse),i.backbuffer)this.#rp(i.pass,i.backbuffer.target,n,i.uniforms,!0),i.backbuffer.swap(),d=i.backbuffer.texture;else{let t=e.bufferTargets.get(i.target);if(!t)continue;this.#rp(i.pass,t,n,i.uniforms,!0),d=t.texture}i.target&&c.set(i.target,d)}let p=e.passes[e.passes.length-1];for(let[e,t]of(p.uniforms.src.value=d,p.uniforms.resolution.value.set(r.width*this.#f,r.height*this.#f),p.uniforms.offset.value.set(h.x*this.#f,h.y*this.#f),p.uniforms.mouse.value.set((this.#t0+this.#tZ)*this.#f,(this.#t1+this.#tQ)*this.#f),c))p.uniforms[e]&&(p.uniforms[e].value=t);for(let[e,t]of Object.entries(p.uniformGenerators))p.uniforms[e]&&(p.uniforms[e].value=t());e.backbuffer?(p.uniforms.backbuffer.value=e.backbuffer.texture,e.isFullScreen?(e.backbuffer.resize(i,s),this.#rm(e,h.x,h.y),this.#rp(p.pass,e.backbuffer.target,o,p.uniforms,!0),e.backbuffer.swap(),this.#tI.setUniforms(e.backbuffer.texture,this.#f,o),this.#rp(this.#tI.pass,n&&this.#tU||null,o,this.#tI.uniforms,!1)):(e.backbuffer.resize(f.w,f.h),this.#rm(e,e.overflow.left,e.overflow.bottom),this.#rp(p.pass,e.backbuffer.target,e.backbuffer.getViewport(),p.uniforms,!0),e.backbuffer.swap(),this.#tI.setUniforms(e.backbuffer.texture,this.#f,f),this.#rp(this.#tI.pass,n&&this.#tU||null,f,this.#tI.uniforms,!1))):(this.#rm(e,h.x,h.y),this.#rp(p.pass,n&&this.#tU||null,e.isFullScreen?o:f,p.uniforms,!1))}n&&this.#tU&&(this.#tk&&this.#tV?this.#rg(o,t):this.#rv(o,t))}#rh=()=>{this.isPlaying()&&(this.render(),this.#tH=requestAnimationFrame(this.#rh))};#rd(e,t,r,i){let s=e.chain;if(!s)return;let o=this.#f;tU.get(e.element)?.update(),("video"===e.type||e.isGif)&&(e.srcTexture.needsUpdate=!0);let n={...e.effectStaticUniforms??{}};if(e.effectUniformGenerators)for(let[t,r]of Object.entries(e.effectUniformGenerators))n[t]=r();let a=this.#tj.right-this.#tj.left,l=this.#tj.bottom-this.#tj.top,u=b(t,l,this.#tZ,this.#tQ),h=this.#t0+this.#tZ-u.x,f=this.#t1+this.#tQ-u.y,c=t.right-t.left,d=t.bottom-t.top,p=e.effectLastRenderTime??i;e.effectLastRenderTime=i;let m=this.#rf()&&this.#tU?J(this.#tU):null;s.run({time:i-e.startTime,deltaTime:i-p,mouse:[h*o,f*o],mouseViewport:[this.#t0*o,this.#t1*o],intersection:r.intersection,enterTime:tq(i-e.enterTime),leaveTime:tq(i-e.leaveTime),enterProgress:r.enterProgress,leaveProgress:r.leaveProgress,resolvedUniforms:n,canvasSize:[a,l],canvasBufferSize:[a*o,l*o],elementSize:[c,d],elementBufferSize:[c*o,d*o],elementRectOnCanvasPx:{x:u.x*o,y:u.y*o,w:u.w*o,h:u.h*o},finalTarget:m,isVisible:r.isVisible})}#rf(){return this.#t_.length>0||null!==this.#tk&&this.#tV}#rs(e){for(let t of e)if(this.#tO.has(t))throw Error("[VFX-JS] Effect instance already attached. Construct a new instance per `vfx.add()` / `postEffect`.");for(let t of e)this.#tO.add(t)}#ro(e){for(let t of e)this.#tO.delete(t)}#rx(e){let t=e.hitTestPadBuffer,r=this.#f;return e9({top:t.top/r,right:t.right/r,bottom:t.bottom/r,left:t.left/r})}#rr(e,t,r){var i,s,o,n,a,l,u,h;let f,c,d,p=ti(t,e.chain?this.#rx(e.chain):e.overflow),m=e.isFullScreen||tN(this.#tK,p),g=ti(this.#tK,e.intersection.rootMargin),v=to(g.left,g.right,t.left,t.right)*to(g.top,g.bottom,t.top,t.bottom);i=e,s=v,o=tN(g,t),n=r,c=(f=i.intersectionState).isIn,d=i.isFullScreen||function(e,t,r,i,s){let o=0===i?r:t>=i,n=0===s?!r:t<s,a=o&&!e.wasAbove,l=n&&!e.wasBelow;if(e.wasAbove=o,e.wasBelow=n,o&&!n)return!0;if(n&&!o)return!1;if(o&&n){if(a)return!0;if(l)return!1}return e.isIn}(f,s,o,i.intersection.threshold,i.intersection.leaveThreshold),!c&&d&&(i.enterTime=n,i.leaveTime=1/0),c&&!d&&(i.leaveTime=n),function(e,t,r,i){let s=r-e.lastTime;if(e.lastTime=r,e.isIn=t,function(e,t){switch(e.phase){case"hidden":if(t)return e.phase="entering",e.direction=1,!0;return!1;case"shown":if(!t)return e.phase="leaving",e.direction=1,!0;return!1;case"entering":return e.direction=t?1:-1,!1;case"leaving":return e.direction=t?-1:1,!1}}(e,t))return;let o=(s<0?s:e.direction*s)/i;if("entering"===e.phase){let t=e.enterProgress+o;o>0&&t>=1?tA(e,"shown"):o<0&&t<=0?tA(e,"hidden"):e.enterProgress=tz(t)}else if("leaving"===e.phase){let t=e.leaveProgress+o;o>0&&t>=1?tA(e,"hidden"):o<0&&t<=0?tA(e,"shown"):e.leaveProgress=tz(t)}}(f,d,n,i.intersection.duration);let{enterProgress:x,leaveProgress:w}=e.intersectionState;e.isInViewport=m;let y=m&&r-e.leaveTime<=e.release||!0===e.forceRender&&t.right>t.left&&t.bottom>t.top;return y&&!e.chain&&e.passes.length>0&&(a=e.passes[0].uniforms,l=e,u=v,h=r,a.intersection.value=u,a.enterTime.value=tq(h-l.enterTime),a.leaveTime.value=tq(h-l.leaveTime),a.enterProgress.value=l.intersectionState.enterProgress,a.leaveProgress.value=l.intersectionState.leaveProgress),{isVisible:y,intersection:v,rectWithOverflow:p,enterProgress:x,leaveProgress:w}}#rn(e){return e in e8?e8[e]:e}#rp(e,t,r,i,s){let o=this.#C;s&&null!==t&&t!==this.#tU&&(o.bindFramebuffer(o.FRAMEBUFFER,t.fbo),o.viewport(0,0,t.width,t.height),o.clear(o.COLOR_BUFFER_BIT));let n=i.viewport;n&&n.value instanceof P&&n.value.set(r.x*this.#f,r.y*this.#f,r.w*this.#f,r.h*this.#f);try{var a,l,u,h;let i,s,n,f,c,d,p,m;a=this.#v,l=this.#tY[0],u=this.#tY[1],h=this.#f,i=t?t.width/h:l,s=t?t.height/h:u,n=Math.max(0,r.x),f=Math.max(0,r.y),c=Math.min(i,r.x+r.w),d=Math.min(s,r.y+r.h),p=c-n,m=d-f,p<=0||m<=0||(o.bindFramebuffer(o.FRAMEBUFFER,t?t.fbo:null),o.viewport(Math.round(n*h),Math.round(f*h),Math.round(p*h),Math.round(m*h)),U(o,e.blend),e.program.use(),e.program.uploadUniforms(e.uniforms),a.draw())}catch(e){console.error(e)}}#rm(e,t,r){let i=e.passes[0].uniforms.offset.value;i.x=t*this.#f,i.y=r*this.#f}#t8(e){let t=1!==e.length||"frag"in e[0]?null:e[0];if(t&&void 0!==t.effect)return void this.#rw(t,t.effect);let r=[],i=[];for(let t of e)"frag"in t&&i.push(t);for(let e=0;e<i.length-1;e++)i[e].target||(i[e]={...i[e],target:`pass${e}`});for(let t of e){let e,i,s;if("frag"in t)e=t.frag,i=new tI(this.#t,e,t.uniforms,t.persistent??!1,t.float??!1,t.size,void 0!==t.target,t.glslVersion),s=t.target;else{if(void 0===t.shader)throw Error("VFXPostEffect requires `shader` (the `effect` path is not implemented yet).");e=this.#rn(t.shader),i=new tI(this.#t,e,t.uniforms,t.persistent??!1,t.float??!1,void 0,!1,t.glslVersion),t.persistent&&i.registerBufferUniform("backbuffer"),s=void 0}r.push(e);let o={};if(t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r&&(o[e]=r);this.#t_.push({pass:i,target:s,generators:o})}for(let e of i)e.target&&this.#tB.set(e.target,void 0);let s=this.#t_.map(e=>e.target).filter(e=>void 0!==e);for(let e=0;e<this.#t_.length;e++)for(let t of s)r[e].match(RegExp(`uniform\\s+sampler2D\\s+${t}\\b`))&&this.#t_[e].pass.registerBufferUniform(t)}#rw(e,t){void 0!==e.shader&&console.warn("[VFX-JS] Both `shader` and `effect` specified on post-effect; `effect` takes precedence.");let r=Array.isArray(t)?[...t]:[t];this.#rs(r);let i=G(()=>{let e=this.#tU;if(!e)throw Error("[VFX-JS] post-effect chain active without target");return e.texture},()=>this.#tU?.width??0,()=>this.#tU?.height??0),s={autoCrop:!0,glslVersion:e.glslVersion??"300 es"},o=new tn(this.#t,this.#v,this.#f,r,s,i,!0,this.#P);if(e.uniforms)for(let[t,r]of Object.entries(e.uniforms))"function"==typeof r?(this.#tD[t]=r,this.#tN[t]=r()):this.#tN[t]=r;this.#tk=o,this.#tX=this.#tW,o.initAll().then(()=>{this.#tk===o&&(this.#tV=!0)}).catch(e=>{console.error("[VFX-JS] Post-effect init failed; post-effect disabled:",e),this.#tk===o&&(this.#ro(this.#tk.effects),this.#tk.dispose(),this.#tk=null,this.#tV=!1)})}#rg(e,t){let r=this.#tk;if(!r)return;let i=this.#f,s={...this.#tN};for(let[e,t]of Object.entries(this.#tD))s[e]=t();let o=this.#tj.right-this.#tj.left,n=this.#tj.bottom-this.#tj.top,a=this.#tX;this.#tX=t;let l=[o,n],u=[o*i,n*i],h={x:e.x*i,y:e.y*i,w:e.w*i,h:e.h*i};r.run({time:t,deltaTime:t-a,mouse:[this.#t0*i,this.#t1*i],mouseViewport:[this.#t0*i,this.#t1*i],intersection:1,enterTime:0,leaveTime:0,enterProgress:1,leaveProgress:0,resolvedUniforms:s,canvasSize:l,canvasBufferSize:u,elementSize:l,elementBufferSize:u,elementRectOnCanvasPx:h,finalTarget:null,isVisible:!0})}#rv(e,t){if(!this.#tU)return;let r=this.#tU.texture,i=new Map;for(let{pass:e,target:t}of this.#t_)t&&e.backbuffer&&i.set(t,e.backbuffer.texture);for(let s=0;s<this.#t_.length;s++){let{pass:o,target:n,generators:a}=this.#t_[s],l=s===this.#t_.length-1,u=this.#t0+this.#tZ,h=this.#t1+this.#tQ,f=o.size;if(f){let[i,s]=f;o.uniforms.src.value=r,o.uniforms.resolution.value.set(i,s),o.uniforms.offset.value.set(0,0),o.uniforms.time.value=t,o.uniforms.mouse.value.set(u/e.w*i,h/e.h*s)}else o.setUniforms(r,this.#f,e,t,u,h);for(let[e,t]of(o.uniforms.passIndex.value=s,o.updateCustomUniforms(a),i)){let r=o.uniforms[e];r&&(r.value=t)}if(l)o.backbuffer?(o.uniforms.backbuffer&&(o.uniforms.backbuffer.value=o.backbuffer.texture),this.#rp(o.pass,o.backbuffer.target,e,o.uniforms,!0),o.backbuffer.swap(),this.#tI.setUniforms(o.backbuffer.texture,this.#f,e),this.#rp(this.#tI.pass,null,e,this.#tI.uniforms,!1)):this.#rp(o.pass,null,e,o.uniforms,!1);else if(o.backbuffer){o.uniforms.backbuffer&&(o.uniforms.backbuffer.value=o.backbuffer.texture);let t=f?{x:0,y:0,w:f[0]/this.#f,h:f[1]/this.#f}:e;this.#rp(o.pass,o.backbuffer.target,t,o.uniforms,!0),o.backbuffer.swap(),r=o.backbuffer.texture,n&&i.set(n,o.backbuffer.texture)}else{let t=n??`postEffect${s}`,a=this.#tB.get(t),l=f?f[0]:e.w*this.#f,u=f?f[1]:e.h*this.#f;a&&a.width===l&&a.height===u||(a?.dispose(),a=tL(this.#t,l,u,{float:o.float}),this.#tB.set(t,a));let h=f?{x:0,y:0,w:f[0]/this.#f,h:f[1]/this.#f}:e;this.#rp(o.pass,a,h,o.uniforms,!0),r=a.texture,n&&i.set(n,a.texture)}}}#rc(e,t){let r=e*this.#f,i=t*this.#f;for(let{pass:s}of(this.#tU&&this.#tU.width===r&&this.#tU.height===i||(this.#tU?.dispose(),this.#tU=tL(this.#t,r,i)),this.#t_))s.persistent&&!s.backbuffer?s.initializeBackbuffer(this.#t,e,t,this.#f):s.backbuffer&&s.resizeBackbuffer(e,t)}}function tN(e,t){return t.left<=e.right&&t.right>=e.left&&t.top<=e.bottom&&t.bottom>=e.top}function tD(e){return!0===e?[!0,te]:void 0===e?[!1,te]:[!1,e9(e)]}function tX(e){let t=e?.threshold??0,r=e9(e?.rootMargin??0),i=e?.leaveThreshold??t,s=e?.duration??1;return Number.isFinite(s)&&s>0||(tB||(tB=!0,console.warn(`[VFX-JS] \`intersection.duration\` must be a finite number above 0, got ${s}. Using 1 instead.`)),s=1),{threshold:t,leaveThreshold:i,rootMargin:r,duration:s}}function tH(e,t){let r=e.source;return r?"u">typeof HTMLImageElement&&r instanceof HTMLImageElement?"w"===t?r.naturalWidth:r.naturalHeight:"u">typeof HTMLVideoElement&&r instanceof HTMLVideoElement?"w"===t?r.videoWidth:r.videoHeight:"w"===t?r.width:r.height:0}function t$(e){return"repeat"===e?"repeat":"mirror"===e?"mirror":"clamp"}function tW(e){if(!e)return["clamp","clamp"];if(Array.isArray(e))return[t$(e[0]),t$(e[1])];let t=t$(e);return[t,t]}function tG(e,t,r){return Math.max(t,Math.min(r,e))}function tq(e){return tG(e,-1e6,1e6)}function tJ(e){return!(e instanceof HTMLImageElement||e instanceof HTMLVideoElement||e instanceof HTMLCanvasElement)}function tj(e,t){return t||!(e instanceof HTMLImageElement||e instanceof HTMLVideoElement||e instanceof HTMLCanvasElement)}class tK{static #ry=new Set;#rb;#ef;#rE=new Map;#ek=new Set;#rT=new Set;#rS=new Set;#t3=new Map;#rR;#eU=!1;static init(e){try{return new tg(e)}catch{return null}}constructor(e={}){let t,r,i;if("u"<typeof document)throw"Cannot find 'document'. VFX-JS only runs on the browser.";if(!function(){try{let e=document.createElement("canvas"),t=e.getContext("webgl2")||e.getContext("webgl");return null!==t}catch{return!1}}())throw Error("[VFX-JS] WebGL is not available in this environment.");let s=(i=window.devicePixelRatio,t=void 0===e.scrollPadding?[.1,.1]:!1===e.scrollPadding?[0,0]:Array.isArray(e.scrollPadding)?[e.scrollPadding[0]??.1,e.scrollPadding[1]??.1]:[e.scrollPadding,e.scrollPadding],r=void 0===e.postEffect?[]:Array.isArray(e.postEffect)?e.postEffect:[e.postEffect],{pixelRatio:e.pixelRatio??i,zIndex:e.zIndex??void 0,autoplay:e.autoplay??!0,fixedCanvas:!1===e.scrollPadding,scrollPadding:t,wrapper:e.wrapper,postEffects:r,preserveDrawingBuffer:e.preserveDrawingBuffer??!1,timeScale:e.timeScale??1});this.#rR=function(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}();let o=document.createElement("canvas");for(let[e,t]of Object.entries({position:s.fixedCanvas?"fixed":"absolute",top:0,left:0,width:"0px",height:"0px","z-index":9999,"pointer-events":"none"}))o.style.setProperty(e,t.toString());void 0!==s.zIndex&&o.style.setProperty("z-index",s.zIndex.toString()),(s.wrapper??document.body).appendChild(o),this.#ef=o,this.#rb=new tO(s,o),tg.#ry.add(this),s.autoplay&&this.play()}async add(e,t,r){if(!this.#rR){for(let t of tg.#ry){let r=t.#t3.get(e);if(r&&tj(e,r.hide))throw Error("[VFX-JS] This element is captured. Dispose the capture before add.")}this.#rT.add(e);try{e instanceof HTMLImageElement?await this.#rC(e,t):e instanceof HTMLVideoElement?await this.#rP(e,t):e instanceof HTMLCanvasElement?j(e)&&r?await this.#rF(e,t,r):await this.#rA(e,t):await this.#rz(e,t)}finally{this.#rT.delete(e)}}}updateHICTexture(e,t){this.#rb.updateHICTexture(e,t)}get reducedMotion(){return this.#rR}get maxTextureSize(){return this.#rb.maxTextureSize}get canvas(){return this.#ef}addHTML(e,t){return this.#rL(e,t,!1)}addHTMLWithStill(e,t){return this.#rL(e,t,!0)}async #rL(e,t,r){let i;if(this.#rR)return;for(let t of tg.#ry)if(t.#t3.has(e))throw Error("[VFX-JS] This element is captured. Dispose the capture before addHTML.");if(!eI())return console.warn("html-in-canvas not supported, falling back to dom-to-canvas"),this.add(e,t);void 0!==t.overlay&&console.warn("addHTML does not support overlay mode (layoutsubtree hides children). Ignoring overlay option.");let{overlay:s,...o}=t,n=this.#rE.get(e);n&&this.#rb.removeElement(n),this.#ek.add(e);try{let t=await eL(e,{onCapture:e=>{this.#rb.updateHICTexture(t.canvas,e)},maxSize:this.#rb.maxTextureSize,stillCover:r?{zIndex:this.#rM()}:void 0});n=t.canvas,i=t.initialCapture,this.#rE.set(e,n)}finally{this.#ek.delete(e)}await this.#rF(n,o,i)}async capture(e,t={}){let r;if(this.#rR)return this.#rI(e);if(this.#eU)throw Error("[VFX-JS] This VFX instance is destroyed.");if(e===document.documentElement||e===document.body||[...tg.#ry].some(t=>e.contains(t.#ef)))throw Error("[VFX-JS] capture() cannot take <html>, <body> or an element that contains a VFX canvas.");let i=t.hide??!1;for(let t of tg.#ry){if(t.#t3.has(e))throw Error(t===this?"[VFX-JS] This element is already captured. Share the capture instead.":"[VFX-JS] This element is already captured by another VFX instance.");if(t.#rE.has(e)||t.#ek.has(e))throw Error("[VFX-JS] capture() cannot take an element that addHTML or a transition has wrapped.");if((t.#rb.hasElement(e)||t.#rT.has(e))&&tj(e,i))throw Error("[VFX-JS] capture() cannot take an element added with add(). Remove it first.")}let s={hide:i,abort:new AbortController};this.#t3.set(e,s);try{r=await this.#rb.addCapture(e,t,this.#rM(),()=>this.#t3.delete(e),s.abort.signal)}catch(t){if(this.#t3.delete(e),this.#eU)throw Error("[VFX-JS] This VFX instance was destroyed during capture().");throw t}if(this.#eU)throw r.dispose(),Error("[VFX-JS] This VFX instance was destroyed during capture().");return r}#rI(e){let t=eU(e);return{texture:this.#rb.emptyTexture(),rect:t&&{x:t.left,y:t.top,width:t.width,height:t.height},update:()=>Promise.resolve(!1),dispose:()=>{}}}#rM(){let e=Number.parseInt(this.#ef.style.zIndex,10);return Number.isNaN(e)?9998:e-1}async #rF(e,t,r){try{await this.#rb.addElement(e,t,r)}finally{eR(e,this.#rb.isFrozen(e))}}addTransition(e,t={}){let r=new e0(this,e,t,()=>this.#rS.delete(r));return this.#rS.add(r),r}freezeInside(e){return this.#rb.freezeInside(e)}captureLive(e){return eI()?function(e,t,r,i={setupCapture:eC,teardownCapture:eP}){let s=!1;return i.setupCapture(e,{onCapture:e=>t.update(e),maxSize:r}).then(r=>{s||(e.getContext("2d")?.clearRect(0,0,e.width,e.height),t.update(r))},e=>console.error("[VFX-JS] live capture failed:",e)),{get texture(){return t.texture},dispose(){s||(s=!0,i.teardownCapture(e),t.dispose())}}}(e,this.#rb.liveTexture(),this.#rb.maxTextureSize):{texture:null,dispose:()=>{}}}lockSize(e){let t=this.#rE.get(e);return t?eT(t):()=>{}}forceRender(e){let t=this.#rE.get(e)??e;return this.#rb.forceRender(t)}remove(e){let t=this.#rE.get(e);t?(eM(t,e),this.#rE.delete(e),this.#rb.removeElement(t)):this.#rb.removeElement(e)}updateEffects(e,t){if(this.#rR)return Promise.resolve();let r=this.#rE.get(e)??e;return this.#rb.updateElementEffects(r,t)}async update(e){await this.updateInTime(e)}async updateInTime(e){let t=this.#rE.get(e)??(e instanceof HTMLCanvasElement?e:null),r=t?eE(t):void 0;return r||(e instanceof HTMLImageElement?await this.#rb.updateImageElement(e):e instanceof HTMLCanvasElement?this.#rb.updateCanvasElement(e):await this.#rb.updateTextElement(e),!0)}play(){this.#rR||this.#rb.play()}stop(){this.#rb.stop()}render(){this.#rR||this.#rb.render()}get time(){return this.#rb.time}setTime(e){this.#rb.setTime(e)}get timeScale(){return this.#rb.timeScale}set timeScale(e){this.#rb.timeScale=e}destroy(){for(let{abort:e}of(this.#eU=!0,tg.#ry.delete(this),this.#t3.values()))e.abort();for(let e of this.#rS)e.destroy();for(let[e,t]of(this.#rS.clear(),this.#rE))eM(t,e);this.#rE.clear(),this.#rb.destroy(),this.#ef.remove()}#rC(e,t){return e.complete?this.#rb.addElement(e,t):new Promise((r,i)=>{e.addEventListener("load",()=>{this.#rb.addElement(e,t).then(r,i)},{once:!0})})}#rP(e,t){return e.readyState>=3?this.#rb.addElement(e,t):new Promise((r,i)=>{e.addEventListener("canplay",()=>{this.#rb.addElement(e,t).then(r,i)},{once:!0})})}#rA(e,t){return this.#rb.addElement(e,t)}#rz(e,t){return this.#rb.addElement(e,t)}}tg=tK,e.s(["f",0,tK],61388),e.s([],90422);let tY=`
vec4 splitRead(vec2 uvr, vec2 uvg, vec2 uvb, bool to) {
  vec4 r = to ? readTo(uvr) : readFrom(uvr);
  vec4 g = to ? readTo(uvg) : readFrom(uvg);
  vec4 b = to ? readTo(uvb) : readFrom(uvb);
  return vec4(r.r, g.g, b.b, (r.a + g.a + b.a) / 3.0);
}
`,tZ=`
float ign(vec2 p) {
  return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
}
`,tQ=`
vec2 mirror(vec2 p) {
  return 1.0 - abs(1.0 - mod(p, 2.0));
}
`,t0=e=>"function"==typeof e.render&&!1!==e.enabled;e.s(["s",0,class extends l{name="hard_cut";frag=`
vec4 transition(vec2 uv, float t) {
  return t < 0.5 ? readFrom(uv) : readTo(uv);
}
`},"j",0,tZ,"S",0,tQ,"F",0,tY,"A",0,class{params;#c=[];constructor(e={}){this.params=e}async init(e){for(let t of(this.#c=this.stages.slice(1).map(()=>e.createRenderTarget()),this.stages))await t.init?.(e)}start(e){for(let t of this.stages)t.start?.(e)}update(e){for(let t of this.stages)t.update?.(e)}render(e){let t=this.stages.filter(t0);if(0===t.length)return void e.blit(e.src);let r=e.src;for(let[i,s]of t.entries()){if(i===t.length-1)return void s.render?.({...e,src:r});let o=this.#c[i];e.clear(o),s.render?.(function(e,t,r){return{...e,src:t,target:r,draw:t=>e.draw({...t,target:t.target??r}),blit:(t,i,s)=>e.blit(t,i??r,s),clear:t=>e.clear(t??r)}}(e,r,o)),r=o}}end(){for(let e of this.stages)e.end?.()}outputRect(e){let t=this.stages.filter(t0);return t[t.length-1]?.outputRect?.(e)}dispose(){for(let e of this.stages)e.dispose?.();for(let e of this.#c)e.dispose();this.#c=[]}}],66601),e.s(["f",0,class extends l{name="lens_distortion";frag=`
uniform float strength;
uniform float dispersion;
// The old content zooms from 1 to 1 + zoom; the new one from 1 + zoom back to 1.
uniform float zoom;
const float TAPS = 12.0;
// Width of the growing warp's edge.
const float SOFT = 0.5;

${tZ}
${tQ}
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