(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,83790,86679,6010,28263,36951,1633,e=>{e.i(90422),e.i(18289),e.i(7150);var t=e.i(16597),r=e.i(81290),i=e.i(60416),s=e.i(3066);e.s([],83790),e.i(61069),e.s([],86679),e.i(61388),e.i(99984),e.s([],6010),e.s([],28263),e.s(["f",0,function(e){return t.forwardRef(function(o,n){let a=(0,s.f)(),[l,u]=(0,t.useState)(null),{vfxProps:h,domProps:f}=(0,i.r)(o);return(0,r.Y)(l,a,h),(0,t.useEffect)(()=>{if(!a||!l)return;let e=new MutationObserver(()=>a.update(l));return e.observe(l,{characterData:!0,attributes:!0,subtree:!0}),()=>e.disconnect()},[l,a]),t.createElement(e,{...f,ref:e=>{u(e),n instanceof Function?n(e):n&&(n.current=e)}})})}],36951),e.s([],1633)},52729,e=>{e.i(83790),e.i(99984),e.i(86679),e.i(6010),e.i(28263);var t=e.i(36951);e.i(1633),e.i(58786),e.i(59443),e.i(24979),e.i(41570),(0,t.f)("span"),(0,t.f)("div"),(0,t.f)("p"),e.s([],52729)},81290,60416,e=>{var t=e.i(16597);let r=["shader","release","uniforms","overlay","intersection","overflow","wrap","zIndex","backbuffer","autoCrop","glslVersion","effect"];e.s(["B",0,r,"r",0,function(e){let t={},i={};for(let s of Object.keys(e))r.includes(s)?t[s]=e[s]:i[s]=e[s];return{vfxProps:t,domProps:i}}],60416);let i=r.filter(e=>"effect"!==e);function s(){let e=Promise.resolve();return{enqueue(t){let r=e.then(t,t);return e=r.then(()=>{},()=>{}),r}}}async function o(e,t,r,s,o){let n=function(e,t){for(let r of i)if(e[r]!==t[r])return!1;return!0}(r,s);if(!n||r.effect!==s.effect){if(n&&void 0!==s.effect)return void await e.updateEffects(t,s.effect);e.remove(t),await o(t,s)}}e.s(["P",0,o,"$",0,s,"Y",0,function(e,r,i){let n=(0,t.useRef)(i);n.current=i;let a=(0,t.useRef)(null),l=(0,t.useRef)(null);(0,t.useEffect)(()=>{if(!r||!e)return;let t=l.current;null===t&&(l.current=t=s());let i=!1;return t.enqueue(async()=>{if(i)return;let t=n.current;try{await r.add(e,t),a.current=t}catch(e){console.error("[@vfx-js/react] add failed:",e)}}),()=>{i=!0,t.enqueue(()=>{r.remove(e),a.current=null})}},[e,r]),(0,t.useEffect)(()=>{if(!r||!e)return;let t=l.current;null===t&&(l.current=t=s()),t.enqueue(async()=>{let t=a.current;if(t&&t!==i)try{await o(r,e,t,i,(e,t)=>r.add(e,t)),a.current=i}catch(e){console.error("[@vfx-js/react] applyDelta failed:",e)}})},[r,e,i])}],81290)},58786,59443,e=>{var t=e.i(16597),r=e.i(76137),i=e.i(36180);e.s(["f",0,function(e){let s=(0,t.useContext)(i.f),o=(0,t.useRef)(e);(0,t.useLayoutEffect)(()=>s?s.register(o.current):void(0,r.R)("transition-in","[@vfx-js/react] useTransitionIn does nothing outside <VFXTransition>."),[s])}],58786),e.s([],59443)},41570,22305,e=>{var t=e.i(61069),r=e.i(16597),i=e.i(3066),s=e.i(54057),o=e.i(36180);let n=null;function a(){let e=null!==n&&Date.now()-n.at<=1e4?n:null;return n=null,e?e.spec:null}function l(e){n={spec:e,at:Date.now()}}e.s(["n",0,l,"i",0,a,"e",0,function(e){return t=>{(function(e){if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return!1;let t=e.currentTarget?.getAttribute?.("target");return!t||"_self"===t})(t)&&l(e)}}],22305);let u={display:"contents"},h={display:"contents"},f={height:"100dvh",overflow:"hidden"};e.s(["f",0,function(e){let{pageKey:n,children:l,className:c,style:d,fullscreen:p=!0,...m}=e,g=(0,i.f)(),v=(0,s.f)(m),x=(0,r.useRef)(null),w=(0,r.useRef)(null),[y,b]=(0,r.useState)(()=>({kept:[],shown:{key:n,node:l,id:0}})),{shown:E}=y,T=(0,r.useRef)(1),R=(0,r.useRef)(new Map),S=(0,r.useRef)(n),F=(0,r.useRef)([]),C=(0,r.useRef)(null),[P]=(0,r.useState)(()=>({register:e=>(C.current=e,()=>{C.current===e&&(C.current=null)})}));(0,r.useEffect)(()=>{let e=x.current;if(!g||!e)return;let t=g.addTransition(e,v);return w.current=t,()=>{t.destroy(),w.current=null}},[g,v]);let A=(0,r.useRef)(E.id);(0,r.useLayoutEffect)(()=>{A.current=E.id;let e=F.current;for(let t of(F.current=[],e))t()},[E]),(0,r.useEffect)(()=>{if(n===S.current)return;S.current=n;let e={key:n,node:l,id:T.current++},t=w.current;t&&void 0!==n?(C.current=null,t.run(t=>new Promise(i=>{if(S.current!==n)return void i();let s=M(t);F.current.push(i),(0,r.startTransition)(()=>b(t=>({kept:s?[...t.kept,s]:t.kept,shown:e})))}),()=>a()??C.current??{}).catch(e=>{console.error("[@vfx-js/react] VFXTransition run failed:",e)})):(0,r.startTransition)(()=>b(t=>({...t,shown:e})))});let M=e=>{let t=_.current,{id:r}=t,i=R.current.get(r);if(!v.keepPlaying||!i)return null;let s=i.parentNode;return e.keepPlaying(i,e=>{A.current!==r&&(e.style.display="none"),b(e=>({...e,kept:e.kept.filter(e=>e.id!==r)}))}),i.parentNode!==s?t:null},_=(0,r.useRef)(E);_.current.id!==E.id&&(_.current=E),(void 0===n||n===E.key)&&(_.current={...E,node:l});let L=[...y.kept,_.current];return(0,t.jsx)("div",{style:u,children:(0,t.jsx)("div",{ref:x,className:c,style:p?{...f,...d}:d,children:(0,t.jsx)(o.f.Provider,{value:P,children:L.map(e=>m.keepPlaying||e!==_.current?(0,t.jsx)("div",{style:h,ref:t=>{t?R.current.set(e.id,t):R.current.delete(e.id)},children:e.node},e.id):(0,t.jsx)(r.Fragment,{children:e.node},e.id))})})})}],41570)},54057,e=>{var t=e.i(16597);e.s(["f",0,function(e){let r=(0,t.useRef)({}).current;for(let t of Object.keys(r))t in e||delete r[t];return Object.assign(r,e),r}])},36180,e=>{let t=(0,e.i(16597).createContext)(null);e.s(["f",0,t])},24979,e=>{var t=e.i(16597),r=e.i(3066),i=e.i(54057);let s={keepPlaying:()=>{}};e.s(["f",0,function(e={}){let o=(0,r.f)(),n=(0,i.f)(e),[a,l]=(0,t.useState)(null),u=(0,t.useRef)(null),[h,f]=(0,t.useTransition)(),c=(0,t.useRef)(!1),d=(0,t.useRef)([]);(0,t.useEffect)(()=>{if(!o||!a)return;let e=o.addTransition(a,n);return u.current=e,()=>{e.destroy(),u.current=null}},[o,a,n]),(0,t.useLayoutEffect)(()=>{if(h){c.current=!0;return}if(c.current){c.current=!1;let e=d.current;for(let t of(d.current=[],e))t()}},[h]);let p=(0,t.useCallback)(e=>new Promise(t=>{d.current.push(t),c.current=!1,f(e),requestAnimationFrame(()=>{c.current||t()})}),[]);return{ref:l,run:(0,t.useCallback)(async(e,t)=>{let r=u.current;r?await r.run(t=>p(()=>e(t)),t):await p(()=>e(s))},[p])}}])},3066,99984,76137,e=>{var t=e.i(16597);let r=(0,t.createContext)(null),i=(0,t.createContext)(!1);e.s(["i",0,r,"V",0,i],99984),e.i(90422);var s=e.i(61388);let o=["pixelRatio","zIndex","postEffect","autoplay"],n=null,a={},l=0,u=!1,h=!1,f=[],c=new Set;function d(){for(let e of c)e()}function p(){n&&(n.stop(),n.destroy(),n=null)}function m(){var e;if(h=!1,0===l||u)return;let t=f[f.length-1]?.config??{};n&&(e=a,o.every(r=>t[r]===e[r]))||(p(),a=t,u=null===(n=s.f.init({...t})),d())}function g(){l++,h||(h=!0,queueMicrotask(m))}function v(){--l>0||requestAnimationFrame(()=>{l>0||(p(),d())})}function x(e){return c.add(e),()=>c.delete(e)}function w(){return n}let y=new Set;e.s(["Y",0,g,"S",0,w,"z",0,v,"i",0,x,"R",0,function(e,t){y.has(e)||(y.add(e),console.warn(t))}],76137);let b=()=>null,E=()=>()=>{};e.s(["f",0,function({acquire:e=!0}={}){let s=(0,t.useContext)(i),o=(0,t.useContext)(r),n=(0,t.useSyncExternalStore)(s?E:x,w,b);return(0,t.useEffect)(()=>{if(!s&&e)return g(),v},[s,e]),s?o:n}],3066)},90422,28113,63363,18289,7150,61388,66601,35668,e=>{let t,r,i=`#version 300 es
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
`}function h(e){return e.currentSrc||e.src}async function f(e,t,r,i){var s;let o,n,a,l,u=e.getBoundingClientRect(),h=window.devicePixelRatio,f=Math.ceil(u.width),p=Math.ceil(u.height),m=f*h,g=p*h,v=1,x=m,w=g;i&&(x>i||w>i)&&(v=Math.min(i/x,i/w),x=Math.floor(x*v),w=Math.floor(w*v));let y=r&&r.width===x&&r.height===w?r:new OffscreenCanvas(x,w),b=e.cloneNode(!0);await d(e,b),function e(t,r){if("function"==typeof t.computedStyleMap)try{let e=t.computedStyleMap();for(let t of["margin-top","margin-right","margin-bottom","margin-left"]){let i=e.get(t);i instanceof CSSKeywordValue&&"auto"===i.value&&r.style.setProperty(t,"auto")}}catch{}for(let i=0;i<t.children.length;i++){let s=t.children[i],o=r.children[i];s instanceof HTMLElement&&o instanceof HTMLElement&&e(s,o)}}(e,b),b.style.setProperty("opacity",t.toString()),b.style.setProperty("margin","0px"),function(e){let t=e;for(;;){let e=t.style;if(Number.parseFloat(e.paddingTop)>0||Number.parseFloat(e.borderTopWidth)>0||e.getPropertyValue("overflow-x")&&"visible"!==e.getPropertyValue("overflow-x")||e.getPropertyValue("overflow-y")&&"visible"!==e.getPropertyValue("overflow-y")||"flex"===e.display||"grid"===e.display||"flow-root"===e.display||"inline-block"===e.display)break;let r=t.firstElementChild;if(!r)break;r.style.setProperty("margin-top","0px"),t=r}for(t=e;;){let e=t.style;if(Number.parseFloat(e.paddingBottom)>0||Number.parseFloat(e.borderBottomWidth)>0||e.getPropertyValue("overflow-x")&&"visible"!==e.getPropertyValue("overflow-x")||e.getPropertyValue("overflow-y")&&"visible"!==e.getPropertyValue("overflow-y")||"flex"===e.display||"grid"===e.display||"flow-root"===e.display||"inline-block"===e.display)break;let r=t.lastElementChild;if(!r)break;r.style.setProperty("margin-bottom","0px"),t=r}}(b),function e(t,r){let i=-t.scrollLeft,s=-t.scrollTop;for(let o=0;o<t.children.length;o++){let n=t.children[o],a=r.children[o];n&&(a instanceof HTMLElement||a instanceof SVGElement)&&((0!==i||0!==s)&&function(e,t,r){let i=e.style.getPropertyValue("translate"),[s="0px",o="0px",n]=i&&"none"!==i?function(e){let t=[],r=0,i="";for(let s of e.trim())"("===s?r++:")"===s&&r--," "===s&&0===r?(i&&t.push(i),i=""):i+=s;return i&&t.push(i),t}(i):[],a=`calc(${s} + ${t}px) calc(${o} + ${r}px)`;e.style.setProperty("translate",n?`${a} ${n}`:a)}(a,i,s),e(n,a))}}(e,b),b.style.setProperty("box-sizing","border-box"),b.style.setProperty("width",`${f}px`),b.style.setProperty("height",`${p}px`);let E=(s=b.outerHTML,(a=(n=document.implementation.createHTMLDocument("test")).createRange()).selectNodeContents(n.documentElement),a.deleteContents(),l=document.createElement("head"),n.documentElement.appendChild(l),n.documentElement.appendChild(a.createContextualFragment(s)),n.documentElement.setAttribute("xmlns",n.documentElement.namespaceURI),new XMLSerializer().serializeToString(n).replace(/<!DOCTYPE html>/,"")),T=`<svg xmlns="http://www.w3.org/2000/svg" width="${m}" height="${g}"><foreignObject width="100%" height="100%">${E}</foreignObject></svg>`,R=await new Promise(e=>{let t=new Image;t.onload=()=>e(t),t.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(T)}`}),S=y.getContext("2d");if(null===S)throw Error("[VFX-JS] Failed to get 2D context");let F=()=>{S.clearRect(0,0,x,w);let e=h*v;S.scale(e,e),S.drawImage(R,0,0,m,g),S.setTransform(1,0,0,1,0,0)};if(F(),o=navigator.userAgent,/AppleWebKit/.test(o)&&!/Chrome\/|Chromium\//.test(o)&&b.querySelector("img"))for(let e=0;e<c;e++)await new Promise(e=>setTimeout(e,16)),F();return y}e.s(["f",0,u],63363);let c=3;async function d(e,t){let r=window.getComputedStyle(e);for(let e of Array.from(r))/(-inline-|-block-|^inline-|^block-)/.test(e)||/^-webkit-.*(start|end|before|after|logical)/.test(e)||t.style.setProperty(e,r.getPropertyValue(e),r.getPropertyPriority(e));if("INPUT"===t.tagName)t.setAttribute("value",t.value);else if("TEXTAREA"===t.tagName)t.innerHTML=t.value;else if("IMG"===t.tagName)try{t.src=await p(h(e))}catch{}for(let r=0;r<e.children.length;r++){let i=e.children[r],s=t.children[r];await d(i,s)}}async function p(e){let t=await fetch(e).then(e=>e.blob());return new Promise(e=>{let r=new FileReader;r.onload=function(){e(this.result)},r.readAsDataURL(t)})}class m{gl;texture;wrapS="clamp";wrapT="clamp";minFilter="linear";magFilter="linear";needsUpdate=!0;premultiplyAlpha=!1;source=null;#t;#r=!1;#i;#s;constructor(e,t,r){this.#t=e,this.gl=e.gl;let i=r?.externalHandle;this.#s=void 0!==i,void 0!==i?(this.texture=i,this.#r=!0,this.needsUpdate=!1):this.#o(),t&&(this.source=t),this.#i=r?.autoRegister!==!1&&!this.#s,this.#i&&e.addResource(this)}#o(){let e=this.gl.createTexture();if(!e)throw Error("[VFX-JS] Failed to create texture");this.texture=e}restore(){this.#s||(this.#o(),this.#r=!1,this.needsUpdate=!0)}bind(e){let t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture),this.needsUpdate&&(this.#n(!1),this.needsUpdate=!1)}upload(e){let t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture),this.#n(!0),this.needsUpdate=!1}#n(e){let t=this.gl,r=this.source;if(t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,4),r)try{t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,r)}catch(t){if(e)throw t;console.error(t)}else if(!this.#r){let e=new Uint8Array([0,0,0,0]);t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,e)}this.#a(),this.#r=!0}#a(){let e=this.gl;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,g(e,this.wrapS)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,g(e,this.wrapT)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,v(e,this.minFilter)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,v(e,this.magFilter))}dispose(){this.#i&&this.#t.removeResource(this),this.#s||this.gl.deleteTexture(this.texture)}}function g(e,t){return"repeat"===t?e.REPEAT:"mirror"===t?e.MIRRORED_REPEAT:e.CLAMP_TO_EDGE}function v(e,t){return"nearest"===t?e.NEAREST:e.LINEAR}function x(e){return new Promise((t,r)=>{let i=new Image;i.crossOrigin="anonymous",i.onload=()=>t(i),i.onerror=r,i.src=e})}let w=new WeakSet;class y{gl;width;height;float;mipmap;depth;samples;fbo;resolveFbo=null;texture;depthTexture;#t;#l=0;#u;#h=null;#f=null;#c=!1;#d=!1;constructor(e,t,r,i={}){this.#t=e,this.gl=e.gl,this.width=Math.max(1,Math.floor(t)),this.height=Math.max(1,Math.floor(r)),this.float=i.float??!1,this.mipmap=i.mipmap??!1,this.depth=i.depth??!1,this.#u=4===i.samples,this.samples=this.#u&&this.#p()?4:1,this.texture=new m(e,void 0,{autoRegister:!1});let s=i.wrap;void 0!==s&&("string"==typeof s?(this.texture.wrapS=s,this.texture.wrapT=s):(this.texture.wrapS=s[0],this.texture.wrapT=s[1])),void 0!==i.filter&&(this.texture.minFilter=i.filter,this.texture.magFilter=i.filter),this.depthTexture=null,this.depth&&(this.depthTexture=new m(e,void 0,{autoRegister:!1}),this.depthTexture.minFilter="nearest",this.depthTexture.magFilter="nearest"),this.#m(),e.addResource(this)}setSize(e,t){let r=Math.max(1,Math.floor(e)),i=Math.max(1,Math.floor(t));(r!==this.width||i!==this.height)&&(this.width=r,this.height=i,this.#m())}restore(){this.texture.restore(),this.depthTexture?.restore(),this.#m()}dispose(){this.#t.removeResource(this),this.gl.deleteFramebuffer(this.fbo),this.#g(this.resolveFbo,this.#h,this.#f),this.texture.dispose(),this.depthTexture?.dispose()}#p(){let e=this.gl,t=this.float?e.RGBA16F:e.RGBA8,r=e.getInternalformatParameter(e.RENDERBUFFER,t,e.SAMPLES);return!r||r.length>0&&r[0]>=4||(w.has(e)||(w.add(e),console.warn("[VFX-JS] This GPU can't use samples: 4 for this render target format; using samples: 1.")),!1)}get version(){return this.#l}attachColorTo(e){let t=this.gl,r=t.COLOR_ATTACHMENT0+e;this.#h?t.framebufferRenderbuffer(t.FRAMEBUFFER,r,t.RENDERBUFFER,this.#h):t.framebufferTexture2D(t.FRAMEBUFFER,r,t.TEXTURE_2D,this.texture.texture,0)}attachDepthTo(){let e=this.gl;this.#f?e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,this.#f):this.depthTexture&&e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,this.depthTexture.texture,0)}markDirty(){1!==this.samples&&(this.#c=!0,this.#d=this.depth)}resolveColor(){this.#c&&(this.#c=!1,this.#v(this.gl.COLOR_BUFFER_BIT))}resolveDepth(){this.#d&&(this.#d=!1,this.#v(this.gl.DEPTH_BUFFER_BIT))}#v(e){let t=this.gl;t.disable(t.SCISSOR_TEST),t.bindFramebuffer(t.READ_FRAMEBUFFER,this.fbo),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,this.resolveFbo),t.blitFramebuffer(0,0,this.width,this.height,0,0,this.width,this.height,e,t.NEAREST),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null)}generateMipmaps(){if(!this.mipmap)return;this.resolveColor();let e=this.gl;e.bindTexture(e.TEXTURE_2D,this.texture.texture),e.generateMipmap(e.TEXTURE_2D),e.bindTexture(e.TEXTURE_2D,null)}#m(){let e=this.gl,t=this.fbo,r=this.resolveFbo,i=this.#h,s=this.#f,o=e.createFramebuffer();if(!o)throw Error("[VFX-JS] Failed to create framebuffer");let n=null;if(this.samples>1){if(!(n=e.createFramebuffer()))throw e.deleteFramebuffer(o),Error("[VFX-JS] Failed to create framebuffer");this.fbo=n,this.resolveFbo=o}else this.fbo=o;let a=this.texture.texture;e.bindTexture(e.TEXTURE_2D,a);let l=this.#t.floatLinearFilter&&!this.#u;if(this.float&&l&&!this.#t.floatBlend)throw Error("[VFX-JS] EXT_float_blend is not supported.");let u=this.float?l?e.RGBA32F:e.RGBA16F:e.RGBA8,h=this.float?l?e.FLOAT:e.HALF_FLOAT:e.UNSIGNED_BYTE;if(this.mipmap){let t=Math.floor(Math.log2(Math.max(this.width,this.height)))+1,r=this.width,i=this.height;for(let s=0;s<t;s++)e.texImage2D(e.TEXTURE_2D,s,u,r,i,0,e.RGBA,h,null),r=Math.max(1,r>>1),i=Math.max(1,i>>1)}else e.texImage2D(e.TEXTURE_2D,0,u,this.width,this.height,0,e.RGBA,h,null);let f="nearest"===this.texture.minFilter?e.NEAREST:e.LINEAR,c="nearest"===this.texture.magFilter?e.NEAREST:e.LINEAR,d=this.mipmap?"nearest"===this.texture.minFilter?e.NEAREST_MIPMAP_NEAREST:e.LINEAR_MIPMAP_LINEAR:f,p=b(e,this.texture.wrapS),m=b(e,this.texture.wrapT);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,d),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,c),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,p),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,m),e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,a,0),this.depthTexture&&this.#x(this.depthTexture),n&&this.#w(n,u),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null),this.#c=!1,this.#d=!1,this.#l++,this.texture.needsUpdate=!1,this.texture.source=null,t&&e.deleteFramebuffer(t),this.#g(r,i,s)}#w(e,t){let r=this.gl;r.bindFramebuffer(r.FRAMEBUFFER,e),this.#h=this.#y(t),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,this.#h),this.#f=null,this.depth&&(this.#f=this.#y(r.DEPTH_COMPONENT24),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,this.#f)),r.bindRenderbuffer(r.RENDERBUFFER,null)}#y(e){let t=this.gl,r=t.createRenderbuffer();if(!r)throw Error("[VFX-JS] Failed to create renderbuffer");return t.bindRenderbuffer(t.RENDERBUFFER,r),t.renderbufferStorageMultisample(t.RENDERBUFFER,this.samples,e,this.width,this.height),r}#g(e,t,r){let i=this.gl;e&&i.deleteFramebuffer(e),t&&i.deleteRenderbuffer(t),r&&i.deleteRenderbuffer(r)}#x(e){let t=this.gl;t.bindTexture(t.TEXTURE_2D,e.texture),t.texImage2D(t.TEXTURE_2D,0,t.DEPTH_COMPONENT24,this.width,this.height,0,t.DEPTH_COMPONENT,t.UNSIGNED_INT,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_COMPARE_MODE,t.NONE),t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,e.texture,0),e.needsUpdate=!1,e.source=null}}function b(e,t){return"repeat"===t?e.REPEAT:"mirror"===t?e.MIRRORED_REPEAT:e.CLAMP_TO_EDGE}function E(e,t,r,i){return{x:e.left+r,y:t-i-e.bottom,w:e.right-e.left,h:e.bottom-e.top}}class T{#b;#E;#T;#R;constructor(e,t,r,i,s,o={}){this.#b=t,this.#E=r,this.#T=i;let n=t*i,a=r*i,l={float:s,wrap:o.wrap,filter:o.filter,mipmap:o.mipmap,depth:o.depth,samples:o.samples};this.#R=[new y(e,n,a,l),new y(e,n,a,l)]}get read(){return this.#R[0]}get texture(){return this.#R[0].texture}get target(){return this.#R[1]}get framebuffers(){return this.#R}resize(e,t){if(e===this.#b&&t===this.#E)return;this.#b=e,this.#E=t;let r=e*this.#T,i=t*this.#T;this.#R[0].setSize(r,i),this.#R[1].setSize(r,i)}swap(){this.#R=[this.#R[1],this.#R[0]]}getViewport(){return{x:0,y:0,w:this.#b,h:this.#E}}dispose(){this.#R[0].dispose(),this.#R[1].dispose()}}let R=Object.freeze({__brand:"EffectQuad"});class S{gl;vao;#t;#S;#F;#C=[];#P=null;mode;indexType=0;hasIndices=!1;drawCount=0;drawStart=0;instanceCount;#i=!1;constructor(e,t,r){this.#t=e,this.gl=e.gl,this.#S=t,this.#F=r,this.mode=function(e,t){switch(t){case"lines":return e.LINES;case"lineStrip":return e.LINE_STRIP;case"points":return e.POINTS;default:return e.TRIANGLES}}(this.gl,t.mode),this.instanceCount=t.instanceCount??0,this.#m(),e.addResource(this),this.#i=!0}#m(){let e=this.gl,t=e.createVertexArray();if(!t)throw Error("[VFX-JS] Failed to create VAO");this.vao=t,e.bindVertexArray(t);let r=this.#F.program,i=null;for(let[t,s]of Object.entries(this.#S.attributes)){let o=!ArrayBuffer.isView(s)||s instanceof DataView?{name:t,data:s.data,itemSize:s.itemSize,normalized:s.normalized??!1,perInstance:s.perInstance??!1}:{name:t,data:s,itemSize:2,normalized:!1,perInstance:!1},n=e.getAttribLocation(r,o.name);if(n<0)continue;let a=e.createBuffer();if(!a)throw Error(`[VFX-JS] Failed to create VBO for "${o.name}"`);this.#C.push(a),e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,o.data,e.STATIC_DRAW);let l=function(e,t){if(t instanceof Float32Array)return e.FLOAT;if(t instanceof Uint8Array)return e.UNSIGNED_BYTE;if(t instanceof Uint16Array)return e.UNSIGNED_SHORT;if(t instanceof Uint32Array)return e.UNSIGNED_INT;if(t instanceof Int8Array)return e.BYTE;if(t instanceof Int16Array)return e.SHORT;if(t instanceof Int32Array)return e.INT;throw Error("[VFX-JS] Unsupported attribute typed array")}(e,o.data);e.enableVertexAttribArray(n),l===e.FLOAT||l===e.HALF_FLOAT||o.normalized?e.vertexAttribPointer(n,o.itemSize,l,o.normalized,0,0):e.vertexAttribIPointer(n,o.itemSize,l,0,0),o.perInstance&&e.vertexAttribDivisor(n,1),"position"===t&&null===i&&(i=o.data.length/o.itemSize)}let s=0,o=this.#S.indices;if(o){let t=e.createBuffer();if(!t)throw Error("[VFX-JS] Failed to create IBO");this.#P=t,e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),e.bufferData(e.ELEMENT_ARRAY_BUFFER,o,e.STATIC_DRAW),this.hasIndices=!0,this.indexType=o instanceof Uint32Array?e.UNSIGNED_INT:e.UNSIGNED_SHORT,s=o.length}else this.hasIndices=!1;e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null),this.#P&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null);let n=this.hasIndices?s:i??0,a=this.#S.drawRange;this.drawStart=a?.start??0,this.drawCount=a?.count!==void 0?a.count:Math.max(0,n-this.drawStart)}restore(){this.#C=[],this.#P=null,this.#m()}draw(){let e=this.gl;e.bindVertexArray(this.vao),this.hasIndices?this.instanceCount>0?e.drawElementsInstanced(this.mode,this.drawCount,this.indexType,this.drawStart*(this.indexType===e.UNSIGNED_INT?4:2),this.instanceCount):e.drawElements(this.mode,this.drawCount,this.indexType,this.drawStart*(this.indexType===e.UNSIGNED_INT?4:2)):this.instanceCount>0?e.drawArraysInstanced(this.mode,this.drawStart,this.drawCount,this.instanceCount):e.drawArrays(this.mode,this.drawStart,this.drawCount)}dispose(){this.#i&&(this.#t.removeResource(this),this.#i=!1);let e=this.gl;for(let t of(e.deleteVertexArray(this.vao),this.#C))e.deleteBuffer(t);this.#P&&e.deleteBuffer(this.#P),this.#C=[],this.#P=null}}class F{#t;#A;#M=new WeakMap;#_=new Set;constructor(e,t){this.#t=e,this.#A=t}get quad(){return this.#A}resolve(e,t){let r=this.#M.get(e);r||(r=new Map,this.#M.set(e,r));let i=r.get(t);return i||(i=new S(this.#t,e,t),r.set(t,i),this.#_.add(i)),i}release(e){let t=this.#M.get(e);if(t){for(let e of t.values())e.dispose(),this.#_.delete(e);this.#M.delete(e)}}dispose(){for(let e of this.#_)e.dispose();this.#_.clear()}}class C{gl;fbo;members;#t;#L;#U=[];#z=-1;constructor(e,t,r){this.#t=e,this.gl=e.gl,this.members=t,this.#L=r,this.fbo=this.#B(),this.#I(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),e.addResource(this)}get width(){return this.members[0].width}get height(){return this.members[0].height}bind(){this.#D()?this.#I():this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fbo)}restore(){this.fbo=this.#B(),this.#I(),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}dispose(){this.#t.removeResource(this),this.gl.deleteFramebuffer(this.fbo)}#B(){let e=this.gl.createFramebuffer();if(!e)throw Error("[VFX-JS] Failed to create framebuffer");return e}#D(){return!!this.#L&&this.#L.version!==this.#z||this.members.some((e,t)=>e.version!==this.#U[t])}#I(){let e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,this.fbo);let t=[];this.members.forEach((r,i)=>{r.attachColorTo(i),t.push(e.COLOR_ATTACHMENT0+i)}),this.#L?.attachDepthTo(),e.drawBuffers(t),this.#U=this.members.map(e=>e.version),this.#z=this.#L?.version??-1}}class P{x=0;y=0;constructor(e=0,t=0){this.x=e,this.y=t}set(e,t){return this.x=e,this.y=t,this}}class A{x=0;y=0;z=0;w=0;constructor(e=0,t=0,r=0,i=0){this.x=e,this.y=t,this.z=r,this.w=i}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}}function M(e){return/#version\s+300\s+es\b/.test(e)?"300 es":/#version\s+100\b/.test(e)||/\bgl_FragColor\b|\btexture2D\b|\bvarying\b|\battribute\b/.test(e)?"100":"300 es"}class _{gl;program;#t;#k;#V;#O;#N=new Map;constructor(e,t,r,i){this.#t=e,this.gl=e.gl,this.#k=t,this.#V=r,this.#O=i??M(r),this.#X(),e.addResource(this)}get glslVersion(){return this.#O}#X(){let e=this.gl,t=U(e,e.VERTEX_SHADER,z(this.#k,this.#O)),r=U(e,e.FRAGMENT_SHADER,z(this.#V,this.#O)),i=e.createProgram();if(!i)throw Error("[VFX-JS] Failed to create program");if(e.attachShader(i,t),e.attachShader(i,r),e.bindAttribLocation(i,0,"position"),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){let s=e.getProgramInfoLog(i)??"";throw e.deleteShader(t),e.deleteShader(r),e.deleteProgram(i),Error(`[VFX-JS] Program link failed: ${s}`)}e.detachShader(i,t),e.detachShader(i,r),e.deleteShader(t),e.deleteShader(r),this.program=i,this.#N.clear();let s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let t=0;t<s;t++){let r=e.getActiveUniform(i,t);if(!r)continue;let s=r.name.replace(/\[0\]$/,""),o=e.getUniformLocation(i,r.name);o&&this.#N.set(s,{location:o,type:r.type,size:r.size})}}restore(){this.#X()}use(){this.gl.useProgram(this.program)}hasUniform(e){return this.#N.has(e)}uploadUniforms(e){let t=this.gl,r=0;for(let[o,n]of this.#N){var i,s;let a=e[o];if(!a)continue;let l=a.value;if(!(null==l||"object"==typeof(i=l)&&"__brand"in i&&(L||(L=!0,console.warn("[VFX-JS] Texture uniforms work with `effect` only, not with `shader`. Ignoring the value.")),1))){if(35678===(s=n.type)||36298===s||36306===s||35682===s){l instanceof m&&(l.bind(r),t.uniform1i(n.location,r),r++);continue}l instanceof m||function(e,t,r){let i=t.location,s=t.size>1;switch(t.type){case e.FLOAT:s?e.uniform1fv(i,r):e.uniform1f(i,r);return;case e.FLOAT_VEC2:s?e.uniform2fv(i,r):r instanceof P?e.uniform2f(i,r.x,r.y):e.uniform2f(i,r[0],r[1]);return;case e.FLOAT_VEC3:s?e.uniform3fv(i,r):e.uniform3f(i,r[0],r[1],r[2]);return;case e.FLOAT_VEC4:s?e.uniform4fv(i,r):r instanceof A?e.uniform4f(i,r.x,r.y,r.z,r.w):e.uniform4f(i,r[0],r[1],r[2],r[3]);return;case e.INT:s?e.uniform1iv(i,r):e.uniform1i(i,r);return;case e.INT_VEC2:s?e.uniform2iv(i,r):e.uniform2i(i,r[0],r[1]);return;case e.INT_VEC3:s?e.uniform3iv(i,r):e.uniform3i(i,r[0],r[1],r[2]);return;case e.INT_VEC4:s?e.uniform4iv(i,r):e.uniform4i(i,r[0],r[1],r[2],r[3]);return;case e.BOOL:s?e.uniform1iv(i,r):e.uniform1i(i,+!!r);return;case e.BOOL_VEC2:s?e.uniform2iv(i,r):e.uniform2i(i,+!!r[0],+!!r[1]);return;case e.BOOL_VEC3:s?e.uniform3iv(i,r):e.uniform3i(i,+!!r[0],+!!r[1],+!!r[2]);return;case e.BOOL_VEC4:s?e.uniform4iv(i,r):e.uniform4i(i,+!!r[0],+!!r[1],+!!r[2],+!!r[3]);return;case e.FLOAT_MAT2:e.uniformMatrix2fv(i,!1,r);return;case e.FLOAT_MAT3:e.uniformMatrix3fv(i,!1,r);return;case e.FLOAT_MAT4:e.uniformMatrix4fv(i,!1,r);return;case e.UNSIGNED_INT:s?e.uniform1uiv(i,r):e.uniform1ui(i,r);return;case e.UNSIGNED_INT_VEC2:s?e.uniform2uiv(i,r):e.uniform2ui(i,r[0],r[1]);return;case e.UNSIGNED_INT_VEC3:s?e.uniform3uiv(i,r):e.uniform3ui(i,r[0],r[1],r[2]);return;case e.UNSIGNED_INT_VEC4:s?e.uniform4uiv(i,r):e.uniform4ui(i,r[0],r[1],r[2],r[3]);return;default:B.has(t.type)||(B.add(t.type),console.warn(`[VFX-JS] Unsupported uniform type 0x${t.type.toString(16)}; skipping upload.`));return}}(t,n,l)}}}dispose(){this.#t.removeResource(this),this.gl.deleteProgram(this.program)}}let L=!1;function U(e,t,r){let i=e.createShader(t);if(!i)throw Error("[VFX-JS] Failed to create shader");if(e.shaderSource(i,r),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(i)??"";throw e.deleteShader(i),Error(`[VFX-JS] Shader compile failed: ${t}

${r}`)}return i}function z(e,t){return e.replace(/^\s+/,"").startsWith("#version")||"100"===t?e:`#version 300 es
${e}`}let B=new Set;class I{gl;program;uniforms;blend;constructor(e,t,r,i,s,o){this.gl=e.gl,this.program=new _(e,t,r,o),this.uniforms=i,this.blend=s}dispose(){this.program.dispose()}}function D(e,t){"none"===t?e.disable(e.BLEND):(e.enable(e.BLEND),e.blendEquation(e.FUNC_ADD),"premultiplied"===t?e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA):"additive"===t?e.blendFuncSeparate(e.ONE,e.ONE,e.ONE,e.ONE):e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA))}class k{promise;#H;#W=null;#$=null;#G;#q=new Uint8Array(0);#J=0;#K=0;#j=!1;#Y=!1;#Z;#Q;#ee;constructor(e,t,r,i){this.#H=e,this.#Z=i,this.promise=new Promise((e,t)=>{this.#Q=e,this.#ee=t});try{this.#et(t,r)}catch(e){this.cancel(e instanceof Error?e:Error(String(e)))}}get settled(){return this.#Y}cancel(e){this.#Y||(this.#er(),this.#ee(e))}#et(e,t){let r=this.#H,{width:i,height:s,float:o}=e,n=i*s*4;this.#q=o?new Float32Array(n):new Uint8Array(n),this.#J=4*i,this.#K=s,this.#j=t?.flipY??!1;let a=r.getParameter(r.DRAW_FRAMEBUFFER_BINDING),l=r.getParameter(r.READ_FRAMEBUFFER_BINDING),u=r.getParameter(r.PIXEL_PACK_BUFFER_BINDING);e.resolveColor();let h=r.createBuffer();if(!h)throw Error("[VFX-JS] readPixels() could not create a buffer.");if(this.#W=h,r.bindBuffer(r.PIXEL_PACK_BUFFER,h),r.bufferData(r.PIXEL_PACK_BUFFER,n*(o?4:1),r.STREAM_READ),r.bindFramebuffer(r.READ_FRAMEBUFFER,e.resolveFbo??e.fbo),r.readPixels(0,0,i,s,r.RGBA,o?r.FLOAT:r.UNSIGNED_BYTE,0),r.bindBuffer(r.PIXEL_PACK_BUFFER,u),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,a),r.bindFramebuffer(r.READ_FRAMEBUFFER,l),this.#$=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0),!this.#$)throw Error("[VFX-JS] readPixels() could not create a fence.");r.flush(),this.#ei()}#ei(){this.#G=setTimeout(()=>this.#es(),4)}#es(){if(this.#G=void 0,this.#Y)return;let e=this.#H,t=this.#$,r=t?e.getSyncParameter(t,e.SYNC_STATUS):null;if(r===e.UNSIGNALED)return void this.#ei();if(r!==e.SIGNALED)return void this.cancel(Error("[VFX-JS] readPixels() lost its fence."));let i=this.#q,s=e.getParameter(e.PIXEL_PACK_BUFFER_BINDING);e.bindBuffer(e.PIXEL_PACK_BUFFER,this.#W),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,i),e.bindBuffer(e.PIXEL_PACK_BUFFER,s),this.#j&&function(e,t,r){let i=e.slice(0,t);for(let s=0,o=r-1;s<o;s++,o--){let r=s*t,n=o*t;i.set(e.subarray(r,r+t)),e.copyWithin(r,n,n+t),e.set(i,n)}}(i,this.#J,this.#K),this.#er(),this.#Q(i)}#er(){this.#Y=!0,void 0!==this.#G&&(clearTimeout(this.#G),this.#G=void 0);let e=this.#H;this.#$&&(e.deleteSync(this.#$),this.#$=null),this.#W&&(e.deleteBuffer(this.#W),this.#W=null),this.#Z(this)}}let V=Symbol.for("@vfx-js/effect.resolve-texture"),O=Symbol.for("@vfx-js/effect.resolve-rt");function N(e){return e[O]}let X=new WeakMap,H=0,W=`#version 300 es
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
`,$=`
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
`,G=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D src;
void main() {
    outColor = texture(src, uv);
}
`,q=`
precision highp float;
varying vec2 uv;
uniform sampler2D src;
void main() {
    gl_FragColor = texture2D(src, uv);
}
`,J=`#version 300 es
precision highp float;
in vec2 uvSrc;
out vec4 outColor;
uniform sampler2D src;
void main() {
    bool inside = all(greaterThanEqual(uvSrc, vec2(0.0))) && all(lessThanEqual(uvSrc, vec2(1.0)));
    outColor = inside ? texture(src, uvSrc) : vec4(0.0);
}
`,K=`
precision highp float;
varying vec2 uvSrc;
uniform sampler2D src;
void main() {
    bool inside = all(greaterThanEqual(uvSrc, vec2(0.0))) && all(lessThanEqual(uvSrc, vec2(1.0)));
    gl_FragColor = inside ? texture2D(src, uvSrc) : vec4(0.0);
}
`;class j{#eo;#H;#T;#en;#ea;#el=[];#eu=[];#eh=[];#ef=[];#ec=new Set;#ed=null;#ep="init";#em=!1;#eg=!1;#ev=!1;#ex=new Set;#ew;#ey;#eb=new Map;#eE;#eT;constructor(e,t,r,i,s,o){this.#eo=e,this.#H=e.gl,this.#T=r,this.#en=o,this.#ea=new F(e,t),this.#eE={outputBufferW:1,outputBufferH:1,canvasBufferSize:[1,1],outputViewport:{x:0,y:0,w:1,h:1},elementBufferW:1,elementBufferH:1,contentRectUv:[0,0,1,1],srcRectUv:[0,0,1,1]};let n={time:0,deltaTime:0,pixelRatio:r,resolution:[1,1],mouse:[0,0],mouseViewport:[0,0],intersection:0,enterTime:0,leaveTime:0,enterProgress:0,leaveProgress:0,src:i,target:null,uniforms:{},vfxProps:s,dims:{element:[1,1],elementPixel:[1,1],canvas:[1,1],canvasPixel:[1,1],pixelRatio:r,contentRect:[0,0,1,1],srcRect:[0,0,1,1],canvasRect:[0,0,1,1]},quad:R,gl:this.#H,createRenderTarget:e=>this.#eR(e),releaseGeometry:e=>this.#ea.release(e),wrapTexture:(e,t)=>this.#eS(e,t),draw:e=>this.#eF(e),blit:(e,t,r)=>this.#eC(e,t,r),clear:(e,t)=>this.#eP(e,t),readPixels:(e,t)=>this.#eA(e,t),resetState:()=>this.#eM(),onContextRestored:e=>{let t=this.#eo.onContextRestored(e);return this.#ef.push(t),t}};this.#eT=n}get ctx(){return this.#eT}setPhase(e){this.#ep=e}setFrameDims(e){for(let t of(this.#eE=e,this.#eT.resolution=[e.canvasBufferSize[0],e.canvasBufferSize[1]],this.#eh))t.resolver.resize?.(e.outputBufferW,e.outputBufferH)}setEffectDims(e){this.#eT.dims=e}setFrameState(e){let t=this.#eT;t.time=e.time,t.deltaTime=e.deltaTime,t.mouse=e.mouse,t.mouseViewport=e.mouseViewport,t.intersection=e.intersection,t.enterTime=e.enterTime,t.leaveTime=e.leaveTime,t.enterProgress=e.enterProgress,t.leaveProgress=e.leaveProgress,t.uniforms=e.uniforms}setSrc(e){this.#eT.src=e}setOutput(e){this.#eT.target=e}passthroughCopy(e,t,r){let i=this.#ep;this.#ep="render";let s=this.#eT.target;this.#eT.target=t;try{let i=this.#eE.outputViewport;this.#eE.outputViewport={...r};let s=this.#eT.vfxProps.glslVersion;this.#e_({frag:"100"===s?q:G,uniforms:{src:e},target:t}),this.#eE.outputViewport=i}finally{this.#eT.target=s,this.#ep=i}}clearRt(e){let t=this.#H,r=N(e);t.bindFramebuffer(t.FRAMEBUFFER,r.getWriteFbo().fbo),t.viewport(0,0,e.width,e.height),t.clearColor(0,0,0,0),t.disable(t.SCISSOR_TEST),t.clear(t.COLOR_BUFFER_BIT),t.bindFramebuffer(t.FRAMEBUFFER,null)}#eR(e){let t,r,i,s,o=e?.persistent??!1,n=e?.float??!1,a=Y(e?.wrap),l=e?.filter,u=e?.mipmap??!1,h=!1!==u,f=!0===u,c=e?.depth??!1,d=this.#eL(e?.samples),p=e?.size,m=p?p[0]:this.#eE.outputBufferW,g=p?p[1]:this.#eE.outputBufferH;if(o){let e=p?1:this.#T,s=p?m:m/e,o=p?g:g/e,u=new T(this.#eo,s,o,e,n,{wrap:a,filter:l,mipmap:h,depth:c,samples:d});t={getReadTexture:()=>(u.read.resolveColor(),u.read.texture),getWriteFbo:()=>u.target,getReadFbo:()=>u.read,getFramebuffers:()=>u.framebuffers,swap:()=>u.swap(),resize:p?void 0:(e,t)=>{u.resize(e/this.#T,t/this.#T)},dispose:()=>u.dispose()},h&&(t.regenerateMipmaps=()=>u.target.generateMipmaps(),t.mipmapAutoRegen=f),c&&(t.getDepthTexture=()=>(u.read.resolveDepth(),u.read.depthTexture)),r=()=>u.target.width,i=()=>u.target.height}else{let e=new y(this.#eo,m,g,{float:n,wrap:a,filter:l,mipmap:h,depth:c,samples:d});t={getReadTexture:()=>(e.resolveColor(),e.texture),getWriteFbo:()=>e,getReadFbo:()=>e,getFramebuffers:()=>[e],resize:p?void 0:(t,r)=>e.setSize(t,r),dispose:()=>e.dispose()},h&&(t.regenerateMipmaps=()=>e.generateMipmaps(),t.mipmapAutoRegen=f);let s=e.depthTexture;s&&(t.getDepthTexture=()=>(e.resolveDepth(),s)),r=()=>e.width,i=()=>e.height}let v=Q(t,r,i,()=>this.#eU(s));return s={handle:v,resolver:t},this.#eu.push(s),p||this.#eh.push(s),v}#eL(e){return void 0===e||1===e||4===e?e??1:(this.#ev||(this.#ev=!0,console.warn("[VFX-JS] createRenderTarget() samples must be 1 or 4; using 1.")),1)}#eU(e){let t=this.#eu.indexOf(e);if(t<0)return;this.#eu.splice(t,1);let r=this.#eh.indexOf(e);r>=0&&this.#eh.splice(r,1);let i=e.resolver.getFramebuffers?.()??[];for(let[e,t]of this.#eb)t.members.some(e=>i.includes(e))&&(t.dispose(),this.#eb.delete(e));e.resolver.dispose?.()}#eA(e,t){if("disposed"===this.#ep)return Promise.reject(Error("[VFX-JS] readPixels() was called after the effect was disposed."));if(this.#eo.isContextLost)return Promise.reject(Error("[VFX-JS] readPixels() was called while the WebGL context is lost."));this.#ed??=this.#eo.onContextLost(()=>this.#ez("[VFX-JS] readPixels() was cancelled: the WebGL context was lost."));let r=N(e).getReadFbo(),i=new k(this.#H,r,t,e=>this.#ec.delete(e));return i.settled||this.#ec.add(i),i.promise}#ez(e){let t=[...this.#ec];for(let r of(this.#ec.clear(),t))r.cancel(Error(e))}#eS(e,t){var r;let i,s,o,n,a=Y(t?.wrap),l=t?.filter,u=null,h=(r=e,!!(i=globalThis.WebGLTexture)&&"function"==typeof i&&r instanceof i||void 0===r.width&&void 0===r.naturalWidth&&void 0===r.videoWidth);if(h){if(!t?.size)throw Error("[VFX-JS] wrapTexture(WebGLTexture) requires opts.size");let[r,i]=t.size;s=new m(this.#eo,void 0,{autoRegister:!1,externalHandle:e}),o=()=>r,n=()=>i}else{s=new m(this.#eo,e);let r=t?.size,i=t=>r?"w"===t?r[0]:r[1]:"u">typeof HTMLImageElement&&e instanceof HTMLImageElement?"w"===t?e.naturalWidth:e.naturalHeight:"u">typeof HTMLVideoElement&&e instanceof HTMLVideoElement?"w"===t?e.videoWidth:e.videoHeight:"w"===t?e.width:e.height;o=()=>i("w"),n=()=>i("h");let a="u">typeof HTMLVideoElement&&e instanceof HTMLVideoElement||"u">typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"u">typeof OffscreenCanvas&&e instanceof OffscreenCanvas;(t?.autoUpdate??a)&&(u=()=>{s.needsUpdate=!0})}s.wrapS=a[0],s.wrapT=a[1],void 0!==l&&(s.minFilter=l,s.magFilter=l),this.#el.push(s),u&&this.#eB.push(u);let f=!1;return Z(()=>s,o,n,()=>{if(f)return;f=!0;let e=this.#el.indexOf(s);if(-1!==e&&this.#el.splice(e,1),u){let e=this.#eB.indexOf(u);-1!==e&&this.#eB.splice(e,1)}s.dispose()},h?void 0:()=>{f||(s.needsUpdate=!0)})}#eB=[];tickAutoUpdates(){for(let e of this.#eB)e()}#eF(e){if("render"!==this.#ep){"update"!==this.#ep||this.#em||(this.#em=!0,console.warn("[VFX-JS] ctx.draw() called in update(); ignored. Move draws to render()."));return}this.#e_(e)}#eC(e,t,r){if("render"!==this.#ep){"update"!==this.#ep||this.#em||(this.#em=!0,console.warn("[VFX-JS] ctx.blit() called in update(); ignored. Move draws to render()."));return}let i="100"===this.#eT.vfxProps.glslVersion?K:J;this.#e_({frag:i,uniforms:{src:e},target:t,blend:r?.blend,swap:r?.swap})}#eP(e,t){if("render"!==this.#ep){"update"!==this.#ep||this.#em||(this.#em=!0,console.warn("[VFX-JS] ctx.clear() called in update(); ignored. Move draws to render()."));return}let r=this.#H,i=this.#eT.target,s=null==e?i:e,o=null===s||s===i,n=null===s?null:N(s),a=!o&&!!n?.getDepthTexture,l=t?.color??!0,u=(t?.depth??!0)&&a;if(!l&&!u)return;let h=0;if(l&&(r.clearColor(0,0,0,0),h|=r.COLOR_BUFFER_BIT),u&&(r.clearDepth(1),h|=r.DEPTH_BUFFER_BIT),o||null===n){let e=null===n?null:n.getWriteFbo().fbo,t=this.#eE.outputViewport;r.bindFramebuffer(r.FRAMEBUFFER,e),r.enable(r.SCISSOR_TEST),r.scissor(t.x,t.y,t.w,t.h),r.clear(h),n?.getWriteFbo().markDirty(),r.disable(r.SCISSOR_TEST),r.bindFramebuffer(r.FRAMEBUFFER,null);return}r.disable(r.SCISSOR_TEST);let f=()=>{let e=n.getWriteFbo();r.bindFramebuffer(r.FRAMEBUFFER,e.fbo),r.clear(h),e.markDirty()};f(),n.swap&&(n.swap(),f(),n.swap()),r.bindFramebuffer(r.FRAMEBUFFER,null)}#eM(){if("disposed"===this.#ep||this.#eo.isContextLost)return;let e=this.#H;e.bindFramebuffer(e.FRAMEBUFFER,null),e.drawBuffers([e.BACK]),e.readBuffer(e.BACK),e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),e.disable(e.DEPTH_TEST),e.disable(e.CULL_FACE),e.disable(e.STENCIL_TEST),e.disable(e.SCISSOR_TEST),e.disable(e.BLEND),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.RASTERIZER_DISCARD),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.disable(e.SAMPLE_COVERAGE),e.depthMask(!0),e.clearColor(0,0,0,0),e.depthFunc(e.LESS),e.colorMask(!0,!0,!0,!0),e.stencilMask(0xffffffff),e.frontFace(e.CCW),e.cullFace(e.BACK),e.useProgram(null),e.bindVertexArray(null),e.bindTransformFeedback(e.TRANSFORM_FEEDBACK,null),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),e.bindBuffer(e.PIXEL_UNPACK_BUFFER,null),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBuffer(e.COPY_READ_BUFFER,null),e.bindBuffer(e.COPY_WRITE_BUFFER,null);let t=this.#eI();for(let r=0;r<t;r++)e.bindSampler(r,null);e.activeTexture(e.TEXTURE0),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0)}#eI(){if(void 0===this.#ew){let e=this.#H,t=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);this.#ew="number"==typeof t&&t>0?t:16}return this.#ew}#eD(){if(void 0===this.#ey){let e=this.#H,t=e.getParameter(e.MAX_DRAW_BUFFERS);this.#ey="number"==typeof t&&t>0?t:4}return this.#ey}#ek(e,t){this.#ex.has(e)||(this.#ex.add(e),console.warn(t))}#eV(e){let t=e.vert??("100"===this.#eT.vfxProps.glslVersion?$:W);return this.#en.get(t,e.frag,this.#eT.vfxProps.glslVersion)}#e_(e){let t=e.target;Array.isArray(t)?1===t.length&&t[0]?this.#eO(e,t[0]):this.#eN(e,t):this.#eO(e,t)}#eO(e,t){let r,i,s,o,n,a,l=this.#H,u=this.#eV(e),h=this.#eT.target,f=null==t?h:t,c=null===f||f===h,d=this.#eX(e.uniforms),p=null,m=!1;if(null===f)r=this.#eE.outputViewport.x,i=this.#eE.outputViewport.y,s=this.#eE.outputViewport.w,o=this.#eE.outputViewport.h;else{let e=N(f);p=e.getWriteFbo(),c?(r=this.#eE.outputViewport.x,i=this.#eE.outputViewport.y,s=this.#eE.outputViewport.w,o=this.#eE.outputViewport.h):(r=0,i=0,s=f.width,o=f.height),n=e.swap,m=!c&&!!e.getDepthTexture,e.mipmapAutoRegen&&(a=e.regenerateMipmaps)}l.bindFramebuffer(l.FRAMEBUFFER,p?p.fbo:null),l.viewport(r,i,s,o),l.disable(l.SCISSOR_TEST),D(l,e.blend??(null===f?"premultiplied":"none")),this.#eH(e,u,d,m),p?.markDirty(),a?.(),n&&!1!==e.swap&&n()}#eN(e,t){let r=this.#eW(t);if(!r)return;let i=this.#eV(e);if("100"===i.glslVersion)return void this.#ek("glsl100","[VFX-JS] ctx.draw() with several targets needs a GLSL 300 es shader; draw skipped.");let s=this.#H,o=this.#eX(e.uniforms),n=r.map(e=>e.getWriteFbo()),a=r.flatMap((e,t)=>e.getDepthTexture?[t]:[]),l=e.depthTest??!1,u=l||(e.depthWrite??l);a.length>1&&u&&this.#ek("depths","[VFX-JS] ctx.draw() got several targets with depth; using the first one's depth.");let h=a.length>0?n[a[0]]:null,f=this.#e$(n,h);for(let t of(f.bind(),s.viewport(0,0,f.width,f.height),s.disable(s.SCISSOR_TEST),D(s,e.blend??"none"),this.#eH(e,i,o,null!==h),n))t.markDirty();for(let e of r)e.mipmapAutoRegen&&e.regenerateMipmaps?.();if(!1!==e.swap)for(let e of r)e.swap?.()}#eW(e){if(0===e.length)return this.#ek("empty","[VFX-JS] ctx.draw() got an empty target array; draw skipped."),null;if(e.some(e=>!e))return this.#ek("null","[VFX-JS] ctx.draw() target array can't contain null; draw skipped."),null;let t=this.#eT.target;if(t&&e.includes(t))return this.#ek("stageOutput","[VFX-JS] ctx.draw() target array can't contain ctx.target; draw skipped."),null;if(new Set(e).size!==e.length)return this.#ek("duplicate","[VFX-JS] ctx.draw() target array has the same target twice; draw skipped."),null;let r=e.map(N),i=r.map(e=>e.getWriteFbo()),s=i[0];if(i.some(e=>e.width!==s.width||e.height!==s.height))return this.#ek("size","[VFX-JS] ctx.draw() targets in an array must have the same size; draw skipped."),null;if(i.some(e=>e.samples!==s.samples))return this.#ek("samples","[VFX-JS] ctx.draw() targets in an array must have the same samples; draw skipped."),null;let o=this.#eD();return e.length>o?(this.#ek("count",`[VFX-JS] ctx.draw() got ${e.length} targets, but this GPU takes at most ${o}; draw skipped.`),null):r}#e$(e,t){let r=e.map(e=>{let t;return void 0===(t=X.get(e))&&(t=H++,X.set(e,t)),t}).join(","),i=this.#eb.get(r);return i||(i=new C(this.#eo,e,t),this.#eb.set(r,i)),i}#eH(e,t,r,i){let s=this.#H,o=this.#eG(e,i);t.use(),t.uploadUniforms(r);let n=e.geometry??R,a=n===R?this.#ea.quad:this.#ea.resolve(n,t);o&&(o.depthTest||o.depthWrite?(s.enable(s.DEPTH_TEST),s.depthFunc(o.depthTest?function(e,t){switch(t){case"never":return e.NEVER;case"less":return e.LESS;case"equal":return e.EQUAL;case"lequal":return e.LEQUAL;case"greater":return e.GREATER;case"notequal":return e.NOTEQUAL;case"gequal":return e.GEQUAL;case"always":return e.ALWAYS}}(s,o.depthFunc):s.ALWAYS),s.depthMask(o.depthWrite)):s.disable(s.DEPTH_TEST),"none"===o.cull?s.disable(s.CULL_FACE):(s.enable(s.CULL_FACE),s.cullFace("front"===o.cull?s.FRONT:s.BACK))),a.draw(),o&&(s.disable(s.DEPTH_TEST),s.disable(s.CULL_FACE),s.depthMask(!0),s.depthFunc(s.LESS),s.cullFace(s.BACK))}#eG(e,t){let r=e.depthTest??!1,i=e.depthWrite??r,s=e.cull??"none";return((r||i)&&!t&&(this.#eg||(this.#eg=!0,console.warn("[VFX-JS] ctx.draw() depthTest / depthWrite needs a target created with depth: true; ignored.")),r=!1,i=!1),r||i||"none"!==s)?{depthTest:r,depthWrite:i,depthFunc:e.depthFunc??"lequal",cull:s}:null}#eX(e){let t={};if(t.contentRectUv={value:this.#eE.contentRectUv},t.srcRectUv={value:this.#eE.srcRectUv},!e)return t;for(let[r,i]of Object.entries(e))t[r]=function(e,t){if("object"==typeof e&&null!==e&&"__brand"in e){if("EffectRenderTarget"===e.__brand)return{value:N(e).getReadTexture()};let r=e[V]();if(r&&r.gl!==t)throw Error("[VFX-JS] This texture belongs to another VFX instance.");return{value:r}}return{value:e}}(i,this.#H);return t}dispose(){for(let e of(this.#ep="disposed",this.#ez("[VFX-JS] readPixels() was cancelled: the effect was disposed."),this.#ed?.(),this.#ed=null,this.#ef))e();for(let e of(this.#ef=[],this.#eb.values()))e.dispose();for(let e of(this.#eb.clear(),this.#eu))e.resolver.dispose?.();for(let e of(this.#eu=[],this.#eh=[],this.#el))e.dispose();this.#el=[],this.#ea.dispose(),this.#eB=[]}}function Y(e){return void 0===e?["clamp","clamp"]:"string"==typeof e?[e,e]:[e[0],e[1]]}function Z(e,t,r,i,s){let o={__brand:"EffectTexture",get width(){return t()},get height(){return r()},dispose(){i?.()},update(){s?.()}};return Object.defineProperty(o,V,{value:e}),o}function Q(e,t,r,i){let s={__brand:"EffectRenderTarget",get width(){return t()},get height(){return r()},dispose:i??(()=>{}),generateMipmaps:()=>e.regenerateMipmaps?.()};return e.getDepthTexture&&(s.depthTexture=Z(e.getDepthTexture,t,r)),Object.defineProperty(s,O,{value:e}),s}function ee(e){return Q({getReadTexture:()=>e.texture,getWriteFbo:()=>e,getReadFbo:()=>e},()=>e.width,()=>e.height)}function et(e){return"CANVAS"===e.tagName&&(e.hasAttribute("layoutsubtree")||"drawable"===e.getAttribute("content"))}function er(e,t){e.setAttribute("layoutsubtree",""),e.setAttribute("content","drawable"),t?.setAttribute("drawable","")}function ei(e,t){let r=e.getBoundingClientRect(),i=getComputedStyle(e);t.className=e.className,t.style.cssText=e.style.cssText,t.style.width=`${r.width}px`,t.style.height=`${r.height}px`,t.style.display="inline"===i.display?"inline-block":i.display,t.style.boxSizing="border-box"}async function es(e){let t=await fetch(e),r=await t.blob();return URL.createObjectURL(r)}async function eo(e){let t=Array.from(e.querySelectorAll("img")).filter(e=>e.complete&&e.naturalWidth>0&&function(e){let t=h(e);if(!t||t.startsWith("data:"))return!1;try{return new URL(t,location.href).origin!==location.origin}catch{return!1}}(e));if(0===t.length)return()=>{};let r=new Map,i=[];return await Promise.all(t.map(async e=>{try{let t=h(e),s=await es(t);r.set(e,t),i.push(s),await new Promise(t=>{e.addEventListener("load",()=>t(),{once:!0}),e.src=s})}catch{}})),()=>{for(let[e,t]of r)e.src=t;for(let e of i)URL.revokeObjectURL(e)}}let en=["margin-top","margin-right","margin-bottom","margin-left"],ea=new Set(["IMG","VIDEO","CANVAS","IFRAME","EMBED","OBJECT","INPUT","TEXTAREA","SELECT"]),el=["position","top","right","bottom","left","float","flex","flex-grow","flex-shrink","flex-basis","align-self","justify-self","place-self","order","grid-column","grid-column-start","grid-column-end","grid-row","grid-row-start","grid-row-end","grid-area"],eu=new Set(["top","right","bottom","left"]),eh=["width","height","flex-grow","flex-shrink","min-width","max-width","overflow"],ef=new WeakMap,ec=new WeakMap,ed=new WeakMap,ep=new WeakMap,em=new WeakMap,eg=new WeakMap,ev=new WeakMap,ex=new WeakMap,ew=new WeakMap,ey=new WeakSet,eb=new WeakMap,eE=new WeakMap,eT=new WeakSet,eR=new WeakSet,eS=/^[\d.e+-]+px$/;function eF(e){if(e)for(let t of[...e])t()}function eC(e,t,r){if("function"==typeof e.moveBefore)try{e.moveBefore(t,r);return}catch{}e.insertBefore(t,r)}function eP(e,t=300){let r=eE.get(e);if(!r)return;let i=new Promise(e=>{let i=t=>{clearTimeout(o),r.delete(s),e(t)},s=()=>i(!0),o=setTimeout(()=>i(!1),t);r.add(s)});return e.requestPaint(),i}function eA(e){if(eT.has(e))return()=>{};eT.add(e);let t=eh.map(t=>[t,e.style.getPropertyValue(t)]),r=getComputedStyle(e),i=e.getBoundingClientRect(),s=(e,t)=>eS.test(e)?e:`${t}px`,o=s(r.width,i.width);return e.style.setProperty("width",o),e.style.setProperty("height",s(r.height,i.height)),e.style.setProperty("flex-grow","0"),e.style.setProperty("flex-shrink","0"),e.style.setProperty("min-width",o),e.style.setProperty("max-width",o),e.style.setProperty("overflow","hidden"),()=>{if(!eT.has(e))return;for(let[r,i]of(eT.delete(e),t))e.style.setProperty(r,i);let r=e.firstElementChild;if(r&&!eR.has(e)){let t=Math.round(r.getBoundingClientRect().height);e.style.setProperty("height",`${t}px`)}}}function eM(e){eb.get(e)?.(),eb.delete(e)}function e_(e,t=!1){requestAnimationFrame(()=>{t||e.getContext("2d")?.clearRect(0,0,e.width,e.height),eM(e)})}async function eL(e,t){er(e,e.firstElementChild);let r=e.getContext("2d");if(!r)throw Error("Failed to get 2d context from layoutsubtree canvas");let{onCapture:i,maxSize:s,keepDrawn:o}=t,n=new Set;eE.set(e,n);let a=null,l=null,u=new Promise(e=>{l=e}),h=null,f=t=>{if(t){if(t===h)return;h=t}let u=e.firstElementChild;if(!u||0===e.width||0===e.height||0===u.getClientRects().length)return;u.hasAttribute("drawable")||u.setAttribute("drawable",""),r.clearRect(0,0,e.width,e.height),r.drawElementImage(u,0,0),function(e,t){let r=t.querySelectorAll("canvas");if(0===r.length)return;let i=t.getBoundingClientRect();if(i.width<=0||i.height<=0)return;let s=e.canvas.width/i.width,o=e.canvas.height/i.height;for(let t of r){if(0===t.width||0===t.height||!("function"==typeof t.checkVisibility?t.checkVisibility({visibilityProperty:!0,opacityProperty:!0}):"hidden"!==getComputedStyle(t).visibility))continue;let r=function(e,t,r,i){if(t.width<=0||t.height<=0)return null;let s=t.left-e.left,o=t.top-e.top;return s+t.width<=0||o+t.height<=0||s>=e.width||o>=e.height?null:[s*r,o*i,t.width*r,t.height*i]}(i,function(e){let t=e.getBoundingClientRect(),r=getComputedStyle(e),i=Number.parseFloat(r.paddingLeft)||0,s=Number.parseFloat(r.paddingRight)||0,o=Number.parseFloat(r.paddingTop)||0,n=Number.parseFloat(r.paddingBottom)||0,a=e.clientWidth>0?t.width/e.offsetWidth:1,l=e.clientHeight>0?t.height/e.offsetHeight:1;return{left:t.left+(e.clientLeft+i)*a,top:t.top+(e.clientTop+o)*l,width:Math.max(0,e.clientWidth-i-s)*a,height:Math.max(0,e.clientHeight-o-n)*l}}(t),s,o);if(r)try{e.drawImage(t,...r)}catch{}}}(r,u);let f=e.width,c=e.height;if(s&&(f>s||c>s)){let e=Math.min(s/f,s/c);f=Math.floor(f*e),c=Math.floor(c*e)}a&&a.width===f&&a.height===c||(a=new OffscreenCanvas(f,c));let d=a.getContext("2d");if(d){if(d.clearRect(0,0,f,c),d.drawImage(e,0,0,f,c),l){l(a),l=null,eF(n);return}o||r.clearRect(0,0,e.width,e.height),i(a),eF(n)}};e.onpaint=f,e.addEventListener("paint",f),ec.set(e,f);let c=new ResizeObserver(t=>{for(let r of t){let t=r.devicePixelContentBoxSize?.[0];if(t)e.width=t.inlineSize,e.height=t.blockSize;else{let t=r.borderBoxSize?.[0];if(t){let r=window.devicePixelRatio;e.width=Math.round(t.inlineSize*r),e.height=Math.round(t.blockSize*r)}}}e.requestPaint()});c.observe(e,{box:"device-pixel-content-box"}),ef.set(e,c);let d=e.firstElementChild;if(d){let t=new ResizeObserver(t=>{if(eT.has(e)||eR.has(e))return;let r=t[0].borderBoxSize?.[0];if(!r)return;let i=`${Math.round(r.blockSize)}px`;i!==e.style.height&&e.style.setProperty("height",i)});t.observe(d),ed.set(e,t)}return u}function eU(e){e.onpaint=null,eF(eE.get(e)),eE.delete(e);let t=ec.get(e);t&&(e.removeEventListener("paint",t),ec.delete(e));let r=ef.get(e);r&&(r.disconnect(),ef.delete(e));let i=ed.get(e);i&&(i.disconnect(),ed.delete(e))}let ez=["padding-left","padding-right"],eB=["border-left-width","border-right-width"];function eI(e,t){return e===t||eS.test(e)||/^[\d.e+-]+%$/.test(e)||/^(calc|min|max|clamp)\(/.test(e)}async function eD(e,t,r){let i=e.getBoundingClientRect(),s=function(e){let t={width:null,height:null};if("function"!=typeof e.computedStyleMap||ea.has(e.tagName))return t;let r=e.computedStyleMap(),i=e=>r.get(e)?.toString()??"auto",s=i("position");if("fixed"!==s&&"absolute"!==s)return t;let o=(t,r,s)=>{let o=i(r),n=i(s);if("auto"!==i(t)||"auto"===o||"auto"===n)return null;let a=[`margin-${r}`,`margin-${s}`].map(r=>{let s=i(r);return"height"===t&&s.includes("%")?getComputedStyle(e).getPropertyValue(r):s}).filter(e=>"auto"!==e);return`calc(${["100%",o,n,...a].join(" - ")})`};return{width:o("width","left","right"),height:o("height","top","bottom")}}(e),o=s.width?null:function(e,t){let r=e=>({width:`${e}px`,minWidth:"auto",maxWidth:"none"});if("function"!=typeof e.computedStyleMap)return e.style.width.endsWith("px")?r(t.width):null;let i=e.computedStyleMap(),s=e=>i.get(e)?.toString()??"auto",o=ea.has(e.tagName),n=getComputedStyle(e),a=s("width");if("auto"===a){if(!o)return null;a=n.width}if(!eS.test(a))return null;let l=s("display");if(!o&&"inline"===l)return r(t.width);let u=s("min-width"),h=s("max-width");if("table"===l||"inline-table"===l||!eI(u,"auto")||!eI(h,"none"))return r(function(e){let t=t=>Number.parseFloat(e.getPropertyValue(t))||0,r=Number.parseFloat(e.width)||0;if("border-box"!==e.boxSizing)for(let e of[...ez,...eB])r+=t(e);return r}(n));let f=[...ez.map(s),...eB.map(e=>n.getPropertyValue(e))].filter(e=>""!==e&&!/^0(px)?$/.test(e)),c=e=>{if(0===f.length)return e;let t=[e,...f].join(" + ");return"border-box"===s("box-sizing")?`max(${e}, ${t.slice(e.length+3)})`:`calc(${t})`};return{width:c(a),minWidth:"auto"===u?"auto":c(u),maxWidth:"none"===h?"none":c(h)}}(e,i),n=document.createElement("canvas");e.hasAttribute("drawable")||ey.add(e),er(n,e),n.className=e.className;let a=e.getAttribute("style");a&&n.setAttribute("style",a),n.style.setProperty("padding","0"),n.style.setProperty("border","none"),n.style.setProperty("box-sizing","content-box"),n.style.setProperty("background","transparent");let l=getComputedStyle(e),u="inline"===l.display?"block":l.display;n.style.setProperty("display",u);let h="function"==typeof e.computedStyleMap?e.computedStyleMap():null,f=e=>h?.get(e)?.toString()??l.getPropertyValue(e),c=e=>l.getPropertyValue(e),d=!!(s.width||o);for(let e of en){let t="margin-left"!==e&&"margin-right"!==e||d;n.style.setProperty(e,t?f(e):c(e))}let p="absolute"===l.position||"fixed"===l.position,m=(e,t)=>p&&"auto"===f(e)&&"auto"===f(t),g=m("left","right"),v=m("top","bottom");for(let e of el){let t=c(e);eu.has(e)&&(t=("left"===e||"right"===e?g:v)?c(e):f(e)),n.style.setProperty(e,t)}s.width?n.style.setProperty("width",s.width):o?(n.style.setProperty("width",o.width),n.style.setProperty("min-width",o.minWidth),n.style.setProperty("max-width",o.maxWidth)):n.style.setProperty("width","100%"),s.height?(n.style.setProperty("height",s.height),eR.add(n)):n.style.height||n.style.setProperty("height",`${i.height}px`);let x=window.devicePixelRatio;n.width=Math.round(i.width*x),n.height=Math.round(i.height*x),t.stillCover&&eb.set(n,function(e,t){let r=e.getBoundingClientRect(),i=e.cloneNode(!0),s=[e,...e.querySelectorAll("*")],o=[i,...i.querySelectorAll("*")],n=[],a=[];for(let e=0;e<s.length&&e<o.length;e++){let t=s[e],r=o[e];(t.scrollTop||t.scrollLeft)&&n.push([r,t.scrollTop,t.scrollLeft]),t instanceof HTMLScriptElement?a.push([r,document.createComment("script")]):t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?a.push([r,function(e){let t=document.createElement("canvas"),r=e instanceof HTMLVideoElement?e.videoWidth:e.width,i=e instanceof HTMLVideoElement?e.videoHeight:e.height;t.width=Math.max(1,r),t.height=Math.max(1,i),ei(e,t);try{t.getContext("2d")?.drawImage(e,0,0,t.width,t.height)}catch{}return t}(t)]):t instanceof HTMLIFrameElement?a.push([r,function(e){let t=document.createElement("div");return ei(e,t),t}(t)]):t instanceof HTMLInputElement&&r instanceof HTMLInputElement?(r.value=t.value,r.checked=t.checked):t instanceof HTMLTextAreaElement&&r instanceof HTMLTextAreaElement?r.value=t.value:t instanceof HTMLSelectElement&&r instanceof HTMLSelectElement?r.selectedIndex=t.selectedIndex:t instanceof HTMLMediaElement&&r.removeAttribute("autoplay")}for(let[e,t]of a)e.replaceWith(t);i.setAttribute("aria-hidden","true");let l=i.style;l.setProperty("position","fixed"),l.setProperty("left",`${r.left}px`),l.setProperty("top",`${r.top}px`),l.setProperty("width",`${r.width}px`),l.setProperty("height",`${r.height}px`),l.setProperty("box-sizing","border-box"),l.setProperty("margin","0"),l.setProperty("pointer-events","none"),l.setProperty("z-index",t.toString()),e.parentNode?.insertBefore(i,e);let u=i.getBoundingClientRect();for(let[e,t,i]of((u.left!==r.left||u.top!==r.top)&&(l.setProperty("left",`${2*r.left-u.left}px`),l.setProperty("top",`${2*r.top-u.top}px`)),n))e.scrollTop=t,e.scrollLeft=i;return function(e,t){let r=e[0],i=t[0];if(!r||!i||"function"!=typeof r.getAnimations)return;let s=(e,t)=>{if(!("animationName"in e))return null;let r=e.effect,i=r?.target,s=i?t.get(i):void 0;return void 0===s?null:`${s}|${r?.pseudoElement??""}|${e.animationName}`},o=new Map(t.map((e,t)=>[e,t])),n=new Map;for(let e of i.getAnimations({subtree:!0})){let t=s(e,o);t&&n.set(t,e)}let a=new Map(e.map((e,t)=>[e,t]));for(let e of r.getAnimations({subtree:!0})){let t=s(e,a),r=t&&n.get(t);r&&(r.currentTime=e.currentTime,r.pause())}}(s,o),()=>{i.remove()}}(e,t.stillCover.zIndex)),ep.set(e,e.style.margin),em.set(e,e.style.width),eg.set(e,e.style.boxSizing),e.parentNode?.insertBefore(n,e),getComputedStyle(n).display,eC(n,e,null),e.style.setProperty("margin","0"),e.style.setProperty("width","100%"),e.style.setProperty("box-sizing","border-box"),(s.width||s.height)&&(ev.set(e,e.style.position),e.style.setProperty("position","static")),s.height&&(ex.set(e,e.style.height),e.style.setProperty("height","100%"));let w=await eo(e);if(r?.aborted)throw w(),Error("[VFX-JS] Wrapping was aborted.");ew.set(n,w);let y=await eL(n,t);if(r?.aborted)throw eU(n),Error("[VFX-JS] Wrapping was aborted.");return{canvas:n,initialCapture:y}}function ek(e,t){eU(e),eM(e);let r=ew.get(e);r&&(r(),ew.delete(e));let i=e.parentNode;i&&t.parentNode===e&&eC(i,t,e),e.remove(),ey.has(t)&&(t.removeAttribute("drawable"),ey.delete(t));let s=ep.get(t);void 0!==s&&(t.style.margin=s,ep.delete(t));let o=em.get(t);void 0!==o&&(t.style.width=o,em.delete(t));let n=eg.get(t);void 0!==n&&(t.style.boxSizing=n,eg.delete(t));let a=ev.get(t);void 0!==a&&(t.style.position=a,ev.delete(t));let l=ex.get(t);void 0!==l&&(t.style.height=l,ex.delete(t))}function eV(){if(void 0!==t)return t;try{let e=document.createElement("canvas"),r=e.getContext("2d");t=null!==r&&"function"==typeof r.drawElementImage&&"function"==typeof e.requestPaint}catch{t=!1}return t}e.s(["i",0,eA,"I",0,eC,"n",0,e_,"a",0,eP,"S",0,eL,"F",0,eU,"Y",0,ek,"c",0,eD],18289),e.s(["f",0,eV],7150);let eO={supportsHtmlInCanvas:eV,wrapElement:eD,unwrapElement:ek,requestCapture:eP,releaseFirstCapture:e_,dom2canvas:f,nextFrame:()=>new Promise(e=>requestAnimationFrame(()=>e()))};function eN(e){let t=e.getBoundingClientRect();return 0===t.width&&0===t.height&&0===e.getClientRects().length?null:t}async function eX(e,t,r,i,s){let o={width:0,height:0},n=await function(e,t,r,i,s){let o={...eO,...e.dom};if(t instanceof HTMLImageElement||t instanceof HTMLVideoElement||t instanceof HTMLCanvasElement)return eq(e,t,r,i,s);let n=t.getBoundingClientRect();return 0===t.getClientRects().length||0===n.width||0===n.height?Promise.reject(Error("[VFX-JS] capture() needs an element with a size.")):o.supportsHtmlInCanvas()?eJ(e,o,t,r,i,s):eK(e,o,t,r,i)}(e,t,r,o,s);try{e.uploadTexture(o.texture)}catch(e){throw n.dispose(),o.texture.dispose(),e}let a=!1,l=!1,u={x:0,y:0,width:0,height:0},h=!1,f=()=>{let e=n.inBox?.()===!1?null:eN(n.box);h=null!==e,e&&(u.x=e.left,u.y=e.top,n.sizeFollowsBox&&(o.width=e.width,o.height=e.height),u.width=o.width,u.height=o.height)},c=()=>a?Promise.resolve(!1):n.update(),d=Z(()=>a?(l||(l=!0,console.warn("[VFX-JS] This capture is disposed.")),e.emptyTexture):o.texture,()=>a?0:e.textureSize(o.texture,"w"),()=>a?0:e.textureSize(o.texture,"h"),void 0,()=>{c().catch(e=>console.error(e))});return f(),{capture:{texture:d,get rect(){return h?u:null},update:c,dispose(){a||(a=!0,n.dispose(),o.texture.dispose(),i?.())}},tick(){!a&&(f(),n.uploadEveryFrame&&(o.texture.needsUpdate=!0))},resize(){a||n.resize?.()}}}function eH(){return Error("[VFX-JS] capture() was aborted.")}function eW(e,t){return t?t.aborted?Promise.reject(eH()):new Promise((r,i)=>{let s=()=>i(eH());t.addEventListener("abort",s,{once:!0}),e.then(r,i).finally(()=>t.removeEventListener("abort",s))}):e}function e$(e,t){let r=t.getBoundingClientRect();e.width=r.width,e.height=r.height}function eG(e){let t=e.getBoundingClientRect();return[Math.ceil(t.width),Math.ceil(t.height)]}async function eq(e,t,r,i,s){t instanceof HTMLImageElement?await eW(t.decode(),s):t instanceof HTMLVideoElement&&t.readyState<3&&await function(e,t){let r=function(e){if(e.error)return"failed to load";let t=e.querySelectorAll("source[src]");return e.srcObject||e.src||0!==t.length?"none"===e.preload&&e.paused&&!e.autoplay&&0===e.readyState?'is not loading (preload="none"). Call play() first':null:"has no source"}(e);if(r)return Promise.reject(Error(`[VFX-JS] capture() got a video that ${r}.`));let i=e.querySelectorAll("source"),s=i[i.length-1];return new Promise((r,i)=>{let o=()=>{e.removeEventListener("canplay",n),e.removeEventListener("error",a),s?.removeEventListener("error",a),t?.removeEventListener("abort",l)},n=()=>{o(),r()},a=()=>{o(),i(Error("[VFX-JS] capture() could not load the video."))},l=()=>{o(),i(eH())};t?.aborted?i(eH()):(e.addEventListener("canplay",n),e.addEventListener("error",a),s?.addEventListener("error",a),t?.addEventListener("abort",l))})}(t,s);let[o,n]=t instanceof HTMLImageElement?[t.naturalWidth,t.naturalHeight]:t instanceof HTMLVideoElement?[t.videoWidth,t.videoHeight]:[t.width,t.height];if(0===o||0===n)throw Error("[VFX-JS] capture() got a source with no pixels.");if(o>e.maxTextureSize||n>e.maxTextureSize)throw Error(`[VFX-JS] capture() got a source larger than the max texture size (${e.maxTextureSize}px).`);i.texture=e.createTexture(t);let a=t.style.opacity;if(r.hide){let e=t instanceof HTMLVideoElement;t.style.setProperty("opacity",e?"0.0001":"0")}let l=()=>{r.hide&&(t.style.opacity=a)};return t instanceof HTMLImageElement?{box:t,sizeFollowsBox:!0,uploadEveryFrame:!1,update:async()=>(await t.decode(),i.texture.needsUpdate=!0,!0),dispose:l}:{box:t,sizeFollowsBox:!0,uploadEveryFrame:!0,update:()=>Promise.resolve(!0),dispose:l}}async function eJ(e,t,r,i,s,o){let n,a,l=r.parentNode;try{let l=t.wrapElement(r,{onCapture:t=>{s.texture=e.refreshTexture(s.texture,t),e$(s,n)},maxSize:e.maxTextureSize,keepDrawn:!i.hide,stillCover:i.hide?void 0:{zIndex:e.stillZIndex}},o);({canvas:n,initialCapture:a}=await eW(l,o))}catch(i){let e=r.parentNode;throw e!==l&&e instanceof HTMLCanvasElement&&t.unwrapElement(e,r),i}return s.texture=e.createTexture(a),e$(s,n),t.releaseFirstCapture(n,!i.hide),i.hide||await t.nextFrame(),{box:n,inBox:()=>r.parentNode===n,sizeFollowsBox:!1,uploadEveryFrame:!1,update:async()=>await t.requestCapture(n,1e3)??!1,dispose(){t.unwrapElement(n,r)}}}async function eK(e,t,r,i,s){let o=r.style.opacity,n=""===o?1:Number.parseFloat(o),[a,l]=eG(r),u=await t.dom2canvas(r,n,void 0,e.maxTextureSize);if(0===u.width||0===u.height)throw Error("[VFX-JS] capture() got an empty snapshot.");s.texture=e.createTexture(u),s.width=a,s.height=l,i.hide&&r.style.setProperty("opacity","0");let h=!1,f=null,c=null,d=async()=>{let i=s.texture.source,[o,a]=eG(r),l=await t.dom2canvas(r,n,i instanceof OffscreenCanvas?i:void 0,e.maxTextureSize);return!h&&0!==l.width&&0!==l.height&&(s.texture=e.refreshTexture(s.texture,l),s.width=o,s.height=a,!0)},p=()=>h?Promise.resolve(!1):f?c??=f.catch(()=>{}).then(()=>(c=null,p())):f=d().finally(()=>{f=null});return{box:r,sizeFollowsBox:!1,uploadEveryFrame:!1,update:p,resize(){let[e,t]=eG(r);(e!==s.width||t!==s.height)&&p().catch(e=>console.error(e))},dispose(){h=!0,i.hide&&(r.style.opacity=o)}}}let ej={t:0,x:0};class eY{enabled=!1;#eq=null;#eJ=[0,0];#eK=[];#ej=!1;#eY=null;#eZ=null;#eQ=ej;#e0=null;#e1=null;#e2=null;#e3(){let e=this.#e1,t=this.#e0;this.#e1=null,this.#e0=null;try{e?.()}finally{t?.()}}snapshot(){return this.#e3(),this.#e2=null,this.#eY=null,this.enabled=!0,new Promise(e=>this.#eK.push(e))}start(e){return this.#e3(),this.#eY=e,this.#e1=e.onEnd??null,this.#eZ=null,this.#eQ=ej,this.#ej=!1,this.enabled=null!==this.#e2,new Promise(e=>{this.#e0=e})}cancel(){this.#e3(),this.#e2=null,this.#eY=null,this.#ej=!1,this.enabled=!1,this.#e4()}#e4(){let e=this.#eK;for(let t of(this.#eK=[],e))t()}setLiveSource(e){this.#e2=e,e&&(this.#ej||this.#eY)&&(this.enabled=!0)}get frame(){let e=this.#eq;return e&&(this.#ej||this.#eY)?{from:e,progress:this.#eQ,holding:null===this.#eY}:null}cut(){this.#eY&&(this.#eY=null,this.#e3())}update(e){let t=this.#eY;if(!t)return;null===this.#eZ&&(this.#eZ=e.time);let r=(e.time-this.#eZ)/t.duration;if(r>=1){this.#eY=null,this.#e3();return}let i=Math.max(r,0);this.#eQ={t:function(e,t){return"function"==typeof e?e(t):"linear"===e?t:t*t*(3-2*t)}(t.ease,i),x:i}}#e5(e){let[t,r]=e.dims.elementPixel;return this.#eq&&this.#eJ[0]===t&&this.#eJ[1]===r||(this.#eq?.dispose(),this.#eq=e.createRenderTarget({size:[t,r]}),this.#eJ=[t,r]),this.#eq}render(e){this.#eK.length>0&&(e.blit(e.src,this.#e5(e)),this.#ej=!0,this.#e4());let t=this.#e2?.()??null;(t&&(this.#ej||this.#eY)&&e.blit(t,this.#e5(e)),this.#eq&&this.#ej)?e.blit(this.#eq):(this.#e2&&this.#eY||(this.enabled=!1),e.blit(e.src))}dispose(){this.#e2=null,this.#eq=null,this.#eJ=[0,0],this.#e3(),this.#e4()}}class eZ{effect;#e6;#e=null;constructor(e,t){this.effect=e,this.#e6=t}get enabled(){return null!==this.#e&&"function"==typeof this.effect.render&&!1!==this.effect.enabled}start(e){this.#e=e,this.effect.start?.(e)}end(){null!==this.#e&&(this.#e=null,this.effect.end?.())}#e8(e){let t=this.#e6.frame,r=this.#e;return t&&r?{...e,from:t.from,progress:t.progress,holding:t.holding,reverse:r.reverse,run:r,cut:()=>this.#e6.cut()}:null}init(e){return this.effect.init?.(e)}update(e){let t=this.#e6.frame;if(!t||t.holding)return;let r=this.#e8(e);r&&this.effect.update?.(r)}render(e){let t=this.#e8(e);t&&this.effect.render?this.effect.render(t):e.blit(e.src)}outputRect(e){return this.#e?this.effect.outputRect?.(e):void 0}dispose(){this.effect.dispose?.()}}let eQ=function(e=function(){let e=globalThis.navigation,t=e?.currentEntry;if(t&&!(t.index<0)&&t.key)return{index:t.index,key:t.key}}){let t,r=new Map;return{pick(i){let s=e();if(!s)return i;let o=t??s;t=s;let n=r.get(o.key);if(s.index<o.index&&n)return{...n,reverse:!0};let a=r.get(s.key);return s.index>o.index&&a?a:(r.set(s.key,i),i)}}}();class e0{#e7;#e9;#te;#tt=null;#tr;#ti=[];#ts;#to=null;constructor(e,t){this.#e7=e,this.#ts=[t.scrollLeft,t.scrollTop];let r=t.parentElement??t,i=r.getBoundingClientRect(),s=document.createElement("canvas");s.inert=!0,s.setAttribute("aria-hidden","true"),s.setAttribute("data-vfx-keep-playing","");let o=s.style;o.setProperty("position","absolute"),o.setProperty("left","0px"),o.setProperty("top","0px"),o.setProperty("margin","0"),o.setProperty("padding","0"),o.setProperty("border","none"),o.setProperty("pointer-events","none");let n=t.cloneNode(!1);n.removeAttribute("id"),n.style.setProperty("margin","0"),n.style.setProperty("box-sizing","border-box"),n.style.setProperty("overflow","hidden"),s.append(n),er(s,n),r.parentNode&&r!==t?r.after(s):document.body.append(s);let a=s.getBoundingClientRect();o.setProperty("left",`${i.left-a.left}px`),o.setProperty("top",`${i.top-a.top}px`),getComputedStyle(n).display,this.#e9=s,this.#te=n,this.#tn(i.width,i.height),this.#tr=e.freezeInside(s),r!==t&&"u">typeof ResizeObserver&&(this.#to=new ResizeObserver(()=>{let{width:e,height:t}=r.getBoundingClientRect();this.#tn(e,t)}),this.#to.observe(r))}#tn(e,t){for(let r of[this.#e9,this.#te])r.style.setProperty("width",`${e}px`),r.style.setProperty("height",`${t}px`)}get texture(){return this.#tt?.texture??null}keep(e,t){for(let r of e){let e=r.parentNode;if(t){let i=e?document.createComment(""):null;i&&e?.insertBefore(i,r),this.#ti.push({node:r,marker:i,onReturn:t})}eC(this.#te,r,null)}[this.#te.scrollLeft,this.#te.scrollTop]=this.#ts,this.#tt??=this.#e7.captureLive(this.#e9)}dispose(){let e=this.#ti;this.#ti=[];try{for(let{node:t,marker:r,onReturn:i}of(this.#tt?.dispose(),this.#tt=null,e)){let e=r?.parentNode;e&&eC(e,t,r),r?.remove();try{i(t)}catch(e){console.error("[VFX-JS] keepPlaying onReturn failed:",e)}}}finally{this.#to?.disconnect(),this.#e9.remove(),this.#tr()}}}let e1={keepPlaying:()=>{}};function e2(e,t){let r=void 0!==t.transition?t.params:void 0===e.params&&void 0===t.params?void 0:{...e.params,...t.params};return{transition:t.transition??e.transition,params:r,reverse:t.reverse??e.reverse,duration:t.duration??e.duration,overflow:t.overflow??e.overflow,ease:t.ease??e.ease,keepPlaying:t.keepPlaying??e.keepPlaying}}function e3(e,t={}){let r=e2(e,t);return{transition:r.transition??u,params:r.params,reverse:r.reverse??!1,duration:r.duration??.6,overflow:r.overflow,ease:r.ease,keepPlaying:r.keepPlaying??!1}}let e4=new WeakMap;function e5(e,t){return new Promise((r,i)=>{let s=setTimeout(()=>r(!1),t);e.then(()=>{clearTimeout(s),r(!0)},e=>{clearTimeout(s),i(e)})})}class e6{#ta;#tl;#tu;#th;#tf;#tc;#td;#tp;#tm;#tg=[];#tv=[];#tx=!1;#tw=!1;#ty=!1;#tb=0;#tE=null;#tT=!1;#tR=!1;#tS=null;#tF=[];#tC=null;#tP=null;#tA=null;#tM=null;#t_;constructor(e,t,i={},s,o=new eY,n=eQ,a=function(){var e,t;let i,s,o;return r??=(e=globalThis.navigation,t=window,s=0,e?.addEventListener("navigate",e=>{if("replace"===e.navigationType)return;let t=e.hasUAVisualTransition&&e.destination?.key;i=t?{id:++s,key:t}:void 0}),!e&&t&&t.addEventListener("popstate",e=>{i=e.hasUAVisualTransition?{id:++s,href:t.location.href}:void 0},!0),o=()=>{i=void 0},t?.addEventListener("pointerdown",o,!0),t?.addEventListener("keydown",o,!0),{current(){if(i)return(i.key?e?.currentEntry?.key===i.key:t?.location.href===i.href)?i.id:void 0}})}(),l=t=>new e0(e,t)){this.#t_=l,this.#tm=s,this.#ta=e,this.#tl=t,this.#tu=i,this.#th=o,this.#tf=n,this.#tc=a,this.#tp=i.keepWrapped??!1}get running(){return null!==this.#tE}show(e,t={}){this.#tL();let r=this.#tU(e),{remove:i=!1,...s}=t;if(!this.running&&this.#tz(r))return Promise.resolve();let o=this.#tu.slideSpec?.(r),n=o?e2(o,s):s;return this.#et(e=>{let t=Array.from(this.#tl.children).filter(e=>e!==r&&!e.hidden);for(let s of(e.keepPlaying(t,e=>{i?e.remove():e.hidden=!0}),r.parentElement!==this.#tl&&this.#tl.append(r),Array.from(this.#tl.children)))s!==r&&(i?s.remove():s.hidden=!0);r.hidden=!1},n)}#tU(e){let t=this.#tl,r="number"==typeof e?t.children[e]:"string"==typeof e?t.querySelector(e):e;if(!r)throw TypeError(`[VFX-JS] show(): no slide for ${e}.`);if(r.parentElement!==t&&(r.isConnected||t.contains(r)))throw TypeError("[VFX-JS] show(): the slide must be a direct child of the container.");return r}#tz(e){return e.parentElement===this.#tl&&!e.hidden&&Array.from(this.#tl.children).every(t=>t===e||t.hidden)}run(e,t={}){let r=this.#tT?void 0:this.#tc.current();if(void 0!==r&&r!==this.#td)return this.#td=r,this.#et(async r=>{await e(r);let i="function"==typeof t?t():t;this.#tu.autoReverse&&this.#tf.pick(i)},{duration:0});if(!this.#tu.autoReverse)return this.#et(e,t);let i="function"==typeof t?void 0:t.keepPlaying??this.#tu.keepPlaying;return this.#et(e,()=>this.#tf.pick("function"==typeof t?t():t),i)}async #et(e,t,r){if(this.#tT)return void await e(e1);this.#tL();let i=++this.#tb;this.#tE=i;try{await this.#e(i,e,t,r)}finally{this.#tE===i&&(this.#tE=null),this.#tb===i&&(this.#tL(i),this.#tr(),this.#tB(),this.#tI())}}async #e(e,t,r,i){let s,o=()=>e===this.#tb,n=!1,a={keepPlaying:(t,r)=>{n&&o()&&this.#tD(e,t,r)}},l=!1,u=async()=>{l||(l=!0,await t(a))};if(this.#ta.reducedMotion){await u(),"function"==typeof r&&r();return}let h=async()=>{this.#tk(),this.#tL(e),this.#th.cancel(),await u(),o()&&(this.#tR&&this.#tp&&await this.#ta.update(this.#tl),this.#tV(e))},f=null;if("function"!=typeof r){if(f=this.#tO(e3(this.#tu,r)),!o())return u();if(null===f)return h()}this.#tN();try{await this.#tX(f?.slots??null,o,!0)}catch(e){return console.error("[VFX-JS] transition failed to wrap the element; cutting to the new content.",e),u()}if(!o())return u();this.#tv.push(this.#ta.lockSize(this.#tl)),this.#tv.push(this.#ta.forceRender(this.#tl));let c=await e5(this.#th.snapshot(),1e3);if(!o())return u();if(!c){this.#tH(),await u(),o()&&this.#tV(e);return}f&&this.#tW(e,f),n=f?f.keepPlaying:i??this.#tu.keepPlaying??!1;try{await u(),"function"==typeof r&&o()&&(s=r())}catch(t){throw o()&&(this.#tk(),this.#tL(e),this.#th.cancel(),this.#tV(e)),t}finally{n=!1}if(!o())return;if(null===f){if(f=this.#tO(e3(this.#tu,s)),!o())return;if(null===f)return h();f.keepPlaying||this.#tL(e);try{await this.#tX(f.slots,o,!1)}catch(e){return console.error("[VFX-JS] transition failed to swap the effects; cutting to the new content.",e),h()}if(!o())return;this.#tW(e,f)}this.#tN();try{await this.#t$()}catch(e){console.error("[VFX-JS] transition waitFor failed:",e)}if(!o()||(await this.#ta.updateInTime(this.#tl)||this.#tw||(this.#tw=!0,console.warn("[VFX-JS] transition: the new content was not captured in time; it may pop in during the run.")),!o())||(await new Promise(e=>requestAnimationFrame(()=>e())),!o()))return;let d=this.#th.start({duration:f.run.duration,ease:f.ease,onEnd:()=>{this.#tk(e),this.#tL(e)}}),p=await e5(d,1e3*f.run.duration+1e3);o()&&(p||this.#tH(),this.#tV(e))}#tO(e){let t,r;if(e.duration<=0)return null;let i=e.transition;if("function"!=typeof i&&!this.#tG(i))return null;try{({transition:t,slots:r}=this.#tq(i,e.params))}catch(e){return console.error(`[VFX-JS] transition "${i.name}" constructor failed; cutting to the new content.`,e),null}let s={reverse:e.reverse,duration:e.duration},o=e.overflow??t.overflow;return void 0!==o&&(s.overflow=o),{run:s,ease:e.ease??t.ease??"smoothstep",slots:r,keepPlaying:e.keepPlaying}}#tG(e){let t=e4.get(e);return t&&t!==this?(this.#ty||(this.#ty=!0,console.warn(`[VFX-JS] transition "${e.name??"unnamed"}" instance is running in another container; cutting to the new content. Pass the class to share it.`)),!1):(this.#tP!==e&&this.#tI(),e4.set(e,this),this.#tP=e,!0)}#tI(){let e=this.#tP;this.#tP=null,e&&e4.get(e)===this&&e4.delete(e)}#tW(e,{run:t,slots:r}){for(let i of(this.#tk(),this.#tA={id:e,slots:r},r))i.start(t)}#tH(){this.#tx||(this.#tx=!0,console.warn("[VFX-JS] transition target did not render in time; cutting to the new content.")),this.#tk(),this.#tL(),this.#th.cancel()}cancel(){let e=++this.#tb;this.#tE=null,this.#tk(),this.#tL(),this.#th.cancel(),this.#tr(),this.#tB(),this.#tI(),this.#tV(e)}destroy(){this.#tT||(this.#tT=!0,this.cancel(),this.#tC=null,this.#tm?.())}#tN(){this.#tg.push(this.#ta.freezeInside(this.#tl))}#tB(){let e=this.#tv;for(let t of(this.#tv=[],e))t()}#tr(){let e=this.#tg;for(let t of(this.#tg=[],e))t()}#tq(e,t){var r;let i,s,o,n=this.#tC;if(n?.key.source===e&&("function"!=typeof e||(r=n.key.params,i=r??{},s=t??{},(o=Object.keys(i)).length===Object.keys(s).length&&o.every(e=>{var t,r;return e in s&&(t=i[e],r=s[e],Array.isArray(t)&&Array.isArray(r)?t.length===r.length&&t.every((e,t)=>e===r[t]):t===r)}))))return n;let a="function"==typeof e?new e(t):e,l=[new eZ(a,this.#th)];return this.#tC={key:{source:e,params:t},transition:a,slots:l},{transition:a,slots:l}}#tD(e,t,r){let i="function"==typeof t[Symbol.iterator]?Array.from(t):[t];if(0!==i.length)try{if(this.#tM?.id!==e){this.#tL();let t=this.#t_(this.#tl);this.#tM={id:e,from:t},this.#th.setLiveSource(()=>t.texture)}this.#tM.from.keep(i,r)}catch(t){console.error("[VFX-JS] transition failed to keep the old content; using a snapshot.",t),this.#tL(e)}}#tL(e){let t=this.#tM;t&&(void 0===e||t.id===e)&&(this.#tM=null,this.#th.setLiveSource(null),t.from.dispose())}#tk(e){let t=this.#tA;if(t&&(void 0===e||t.id===e))for(let e of(this.#tA=null,t.slots))e.end()}async #tX(e,t,r){var i;if(this.#tS&&await this.#tS,!t())return;let s=null!==e?[this.#th,...e]:this.#tR?this.#tF:[this.#th];if(!this.#tR){let e=this.#ta.addHTMLWithStill(this.#tl,{effect:s}).then(()=>{this.#tR=!0,this.#tF=s}).finally(()=>{this.#tS=null});this.#tS=e,await e;return}if(i=this.#tF,!(s.length===i.length&&s.every((e,t)=>e===i[t]))){this.#tF=s;let e=this.#ta.updateEffects(this.#tl,s).finally(()=>{this.#tS=null});this.#tS=e,await e}r&&await this.#ta.update(this.#tl)}#tV(e){if(this.#tp&&!this.#tT)return;let t=()=>{e===this.#tb&&this.#tR&&(this.#tR=!1,this.#tF=[],this.#ta.remove(this.#tl))};this.#tS?this.#tS.then(t,()=>{}):t()}#t$(){let e=this.#tu.waitFor??"media";return"none"===e?Promise.resolve():"media"===e?function(e,t,r=300){let i=[];for(let t of e.querySelectorAll("img, video")){let e="IMG"===t.tagName;(e?t.complete:t.readyState>=2)||function(e){if("IMG"===e.tagName){let t;return"lazy"===e.loading&&(!((t=e.getBoundingClientRect()).right>0)||!(t.bottom>0)||!(t.left<window.innerWidth)||!(t.top<window.innerHeight))}return"none"===e.preload}(t)||i.push(new Promise(r=>{let i=()=>r();t.addEventListener(e?"load":"loadeddata",i,{once:!0}),t.addEventListener("error",i,{once:!0})}))}return(t&&i.push(t),0===i.length)?Promise.resolve():new Promise(e=>{let t=setTimeout(e,r),s=()=>{clearTimeout(t),e()};Promise.all(i).then(s,s)})}(this.#tl,document.fonts?.ready):e(this.#tl)}}let e8=`
precision highp float;
in vec3 position;
void main() {
    gl_Position = vec4(position, 1.0);
}
`,e7=`
precision highp float;
attribute vec3 position;
void main() {
    gl_Position = vec4(position, 1.0);
}
`,e9=`
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
`,te=`precision highp float;
uniform vec2 resolution;
uniform vec2 offset;
uniform float time;
uniform bool autoCrop;
uniform sampler2D src;
out vec4 outColor;
`,tt=`vec4 readTex(sampler2D tex, vec2 uv) {
    if (autoCrop && (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.)) {
        return vec4(0);
    }
    return texture(tex, uv);
}`,tr={none:e9,uvGradient:`
    ${te}
    ${tt}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        outColor = vec4(uv, sin(time) * .5 + .5, 1);

        vec4 img = readTex(src, uv);
        outColor *= smoothstep(0., 1., img.a);
    }
    `,rainbow:`
    ${te}
    ${tt}

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
    ${te}
    ${tt}

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
    ${te}
    ${tt}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        float b = sin(time * 2.) * 32. + 48.;
        uv = floor(uv * b) / b;
        outColor = readTex(src, uv);
    }
    `,rgbGlitch:`
    ${te}
    ${tt}

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
    ${te}
    ${tt}

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

    ${te}
    ${tt}

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
    ${te}
    ${tt}

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
    ${te}
    ${tt}

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
    ${te}
    ${tt}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        outColor = readTex(src, uv) * (sin(time * 5.) * 0.2 + 0.8);
    }

    `,spring:`
    ${te}
    ${tt}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        uv = (uv - .5) * (1.05 + sin(time * 5.) * 0.05) + .5;
        outColor = readTex(src, uv);
    }
    `,duotone:`
    ${te}
    ${tt}

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
    ${te}
    ${tt}

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
    ${te}
    ${tt}

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
    ${te}
    uniform float enterProgress;
    uniform float leaveProgress;

    ${tt}

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
    ${te}
    ${tt}

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
    ${te}
    ${tt}

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
    ${te}
    ${tt}

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
    ${te}
    ${tt}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = readTex(src, uv);
        outColor = vec4(1.0 - color.rgb, color.a);
    }
    `,grayscale:`
    ${te}
    ${tt}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = readTex(src, uv);
        float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
        outColor = vec4(vec3(gray), color.a);
    }
    `,vignette:`
    ${te}
    ${tt}

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
    ${te}
    ${tt}

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
    `},ti={...tr,slitScanTransition:tr.slitScanReveal,warpTransition:tr.warpReveal,pixelateTransition:tr.pixelateReveal,focusTransition:tr.focusReveal};class ts{pass;uniforms;constructor(e){this.uniforms={src:{value:null},offset:{value:new P},resolution:{value:new P},viewport:{value:new A}},this.pass=new I(e,e8,e9,this.uniforms,"premultiplied")}setUniforms(e,t,r){this.uniforms.src.value=e,this.uniforms.resolution.value.set(r.w*t,r.h*t),this.uniforms.offset.value.set(r.x*t,r.y*t)}dispose(){this.pass.dispose()}}function to(e){return"number"==typeof e?{top:e,right:e,bottom:e,left:e}:Array.isArray(e)?{top:e[0],right:e[1],bottom:e[2],left:e[3]}:{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}let tn={top:0,right:0,bottom:0,left:0};function ta(e){return{top:e.top,right:e.right,bottom:e.bottom,left:e.left}}function tl(e){return{top:e.top,left:e.left,right:e.left+Math.ceil(e.right-e.left),bottom:e.top+Math.ceil(e.bottom-e.top)}}function tu(e,t){return{top:e.top-t.top,right:e.right+t.right,bottom:e.bottom+t.bottom,left:e.left-t.left}}function th(e,t,r){return Math.min(Math.max(e,t),r)}function tf(e,t,r,i){let s=Math.min(i-r,t-e);if(s<=0)return 0;let o=th(r,e,t);return(th(i,e,t)-o)/s}class tc{#eo;#A;#T;#tJ;#en;#tK;#tj;#tY;#tZ=[];#tQ=[];#tt;#t0=new Set;#t1=!1;#t2;#t3=to(0);#t4=null;constructor(e,t,r,i,s,o,n,a){this.#eo=e,this.#A=t,this.#T=r,this.#tJ=s,this.#en=a,this.#tK=i,this.#tt=o,this.#t2=n,this.#tj=i.map(()=>this.#t5()),0===i.length&&(this.#t4=this.#t5()),this.#tY=this.#t6()}#t6(){return this.#tK.map((e,t)=>"function"==typeof e.render&&!1!==e.enabled?t:-1).filter(e=>e>=0)}get effects(){return this.#tK}get hosts(){return this.#tj}get renderingIndices(){return this.#tY}get stages(){return this.#tQ}get hitTestPadBuffer(){return this.#t3}async initAll(){for(let e=0;e<this.#tK.length;e++){let t=this.#tK[e],r=this.#tj[e];r.setPhase("init");try{t.init&&await t.init(r.ctx)}catch(t){console.error(`[VFX-JS] effect[${e}].init() failed:`,t);for(let t=e-1;t>=0;t--)this.#t8(t),this.#tj[t].dispose();throw this.#tj[e].dispose(),t}r.setPhase("update")}}run(e){if(this.#t1||!e.isVisible)return;this.#tY=this.#t6();let t=this.#tY.length;for(let t of this.#tj)t.setFrameState({time:e.time,deltaTime:e.deltaTime,mouse:e.mouse,mouseViewport:e.mouseViewport,intersection:e.intersection,enterTime:e.enterTime,leaveTime:e.leaveTime,enterProgress:e.enterProgress,leaveProgress:e.leaveProgress,uniforms:e.resolvedUniforms});this.#t7(e);for(let t=0;t<this.#tj.length;t++)this.#tj[t].setFrameDims(this.#t9(t,e)),this.#tj[t].setEffectDims(this.#re(t,e));for(let e=0;e<this.#tK.length;e++){let t=this.#tK[e];if(!t.update)continue;let r=this.#tj[e];r.setPhase("update");try{t.update(r.ctx)}catch(r){let t=`${e}:update`;this.#t0.has(t)||(this.#t0.add(t),console.warn(`[VFX-JS] effect[${e}].update() threw; skipping this frame's update:`,r))}}if(0===t)return void(this.#t4??this.#tj[0]).passthroughCopy(this.#tt,e.finalTarget,e.elementRectOnCanvasPx);for(let r=0;r<t;r++){let i,s=this.#tY[r],o=this.#tj[s],n=this.#tK[s];if(!n.render)continue;o.setPhase("render"),o.tickAutoUpdates();let a=0===r?this.#tt:this.#tZ[r-1].texHandle;o.setSrc(a),r===t-1?i=e.finalTarget:(i=this.#tZ[r].rtHandle,o.clearRt(i)),o.setOutput(i);try{n.render(o.ctx)}catch(l){let e=`${s}:render`;this.#t0.has(e)||(this.#t0.add(e),console.warn(`[VFX-JS] effect[${s}].render() threw; falling back to passthrough:`,l));let n=this.#tQ[r].outputViewport;null===i?o.passthroughCopy(a,null,n):r===t-1?o.passthroughCopy(a,i,n):o.passthroughCopy(a,i,{x:0,y:0,w:i.width,h:i.height})}o.setPhase("update")}}dispose(){if(!this.#t1){this.#t1=!0;for(let e=this.#tK.length-1;e>=0;e--)this.#t8(e),this.#tj[e].dispose();for(let e of(this.#t4&&(this.#t4.dispose(),this.#t4=null),this.#tZ))e.fb.dispose();this.#tZ=[],this.#tQ=[]}}async replaceEffects(e){if(this.#t1)throw Error("[VFX-JS] replaceEffects on disposed chain");let t=this.#tK,r=this.#tj,i=new Map;for(let e=0;e<t.length;e++)i.set(t[e],r[e]);let s=Array(e.length),o=[];for(let t=0;t<e.length;t++){let r=e[t],n=i.get(r);if(n)s[t]=n,i.delete(r);else{let e=this.#t5();s[t]=e,o.push({host:e,effect:r})}}for(let e=0;e<o.length;e++){let{host:t,effect:r}=o[e];t.setPhase("init");try{r.init&&await r.init(t.ctx),t.setPhase("update")}catch(r){console.error("[VFX-JS] replaceEffects: new effect init() failed:",r);for(let t=e-1;t>=0;t--){let e=o[t];if(e.effect.dispose)try{e.effect.dispose()}catch(e){console.error("[VFX-JS] dispose during init rollback threw:",e)}e.host.dispose()}throw t.dispose(),r}}for(let[e,t]of i){if(e.dispose)try{e.dispose()}catch(e){console.error("[VFX-JS] effect.dispose() threw during replaceEffects:",e)}t.dispose()}for(let e of this.#tZ)e.fb.dispose();this.#tZ=[],this.#tQ=[],0!==e.length||this.#t4?e.length>0&&this.#t4&&(this.#t4.dispose(),this.#t4=null):this.#t4=this.#t5(),this.#tK=e,this.#tj=s,this.#tY=this.#t6(),this.#t0.clear()}#t5(){return new j(this.#eo,this.#A,this.#T,this.#tt,this.#tJ,this.#en)}#t8(e){let t=this.#tK[e];if(t.dispose)try{t.dispose()}catch(t){console.error(`[VFX-JS] effect[${e}].dispose() threw:`,t)}}#t7(e){let t=this.#tY.length;if(this.#tQ=Array(t),0===t)return;let r=this.#t2?e.canvasBufferSize:e.elementBufferSize,i=[0,0,r[0],r[1]],s=this.#rt(e),o=i;for(let r=0;r<t;r++){let n=this.#tY[r],a=this.#tK[n],l=r===t-1,u=this.#rr(a,o,i,s,e)??o,h=[u[2],u[3]],f=function(e,t){let[r,i,s,o]=e,[n,a,l,u]=t;return l<=0||u<=0?[0,0,1,1]:[(r-n)/l,(i-a)/u,s/l,o/u]}(i,u),c=l?{x:e.elementRectOnCanvasPx.x+u[0],y:e.elementRectOnCanvasPx.y+u[1],w:h[0],h:h[1]}:{x:0,y:0,w:h[0],h:h[1]};this.#tQ[r]={dstRect:u,dstBufferSize:h,contentRectUv:f,outputViewport:c},l||this.#ri(r,h),o=u}let[n,a,l,u]=this.#tQ[t-1].dstRect;this.#t3=to({top:Math.max(0,a+u-r[1]),right:Math.max(0,n+l-r[0]),bottom:Math.max(0,-a),left:Math.max(0,-n)})}#rr(e,t,r,i,s){if(e.outputRect)return e.outputRect(this.#rs(s,r,t,i))}#rs(e,t,r,i){let s=e.canvasBufferSize[0]/e.canvasSize[0]||1;return{element:this.#t2?e.canvasSize:e.elementSize,elementPixel:this.#t2?e.canvasBufferSize:e.elementBufferSize,canvas:e.canvasSize,canvasPixel:e.canvasBufferSize,pixelRatio:s,contentRect:t,srcRect:r,canvasRect:i}}#re(e,t){let r=this.#t2?t.canvasBufferSize:t.elementBufferSize,i=[0,0,r[0],r[1]],s=this.#rt(t),o=this.#tY.indexOf(e),n=o<=0?i:this.#tQ[o-1].dstRect;return this.#rs(t,i,n,s)}#ri(e,t){let r=this.#tZ[e];if(r&&r.fb.width===t[0]&&r.fb.height===t[1])return;r&&r.fb.dispose();let i=new y(this.#eo,t[0],t[1]),s=ee(i),o=Z(()=>i.texture,()=>i.width,()=>i.height);this.#tZ[e]={fb:i,rtHandle:s,texHandle:o,bufferSize:t}}#rt(e){let[t,r]=e.canvasBufferSize;if(this.#t2)return[0,0,t,r];let{x:i,y:s}=e.elementRectOnCanvasPx;return[-i,-s,t,r]}#t9(e,t){let r,i,s,o,n,a=this.#tY.indexOf(e);if(a<0)s={x:0,y:0,w:r=t.elementBufferSize[0],h:i=t.elementBufferSize[1]},o=[0,0,1,1],n=[0,0,1,1];else{let e=this.#tQ[a];r=e.dstBufferSize[0],i=e.dstBufferSize[1],s=e.outputViewport,o=e.contentRectUv,n=0===a?[0,0,1,1]:this.#tQ[a-1].contentRectUv}return{outputBufferW:r,outputBufferH:i,canvasBufferSize:t.canvasBufferSize,outputViewport:s,elementBufferW:t.elementBufferSize[0],elementBufferH:t.elementBufferSize[1],contentRectUv:o,srcRectUv:n}}}class td{#ro;#rn=new Set;constructor(e){this.#ro=e}freezeInside(e,t){let r={root:e,entries:[]};for(let i of t)!i.frozen&&tp(e,i.element)&&(i.frozen=!0,r.entries.push({e:i,opacity:i.element.style.opacity}),this.#ro.showPlain(i));this.#rn.add(r);let i=!1;return()=>{if(!i){for(let{e}of(i=!0,this.#rn.delete(r),r.entries))e.frozen=!1;requestAnimationFrame(()=>{for(let{e,opacity:t}of r.entries)!e.frozen&&this.#ro.isRegistered(e)&&this.#ro.hidePlain(e,t)})}}}adopt(e,t){let r=this.#ra(e.element);return!!r&&(e.frozen=!0,r.entries.push({e,opacity:t??e.element.style.opacity}),!0)}#ra(e){for(let t of this.#rn)if(tp(t.root,e))return t}}function tp(e,t){return t!==e&&e.contains(t)}function tm(e){this.data=e,this.pos=0}function tg(e){this.stream=new tm(e),this.output={}}tm.prototype.readByte=function(){return this.data[this.pos++]},tm.prototype.peekByte=function(){return this.data[this.pos]},tm.prototype.readBytes=function(e){return this.data.subarray(this.pos,this.pos+=e)},tm.prototype.peekBytes=function(e){return this.data.subarray(this.pos,this.pos+e)},tm.prototype.readString=function(e){for(var t="",r=0;r<e;r++)t+=String.fromCharCode(this.readByte());return t},tm.prototype.readBitArray=function(){for(var e=[],t=this.readByte(),r=7;r>=0;r--)e.push(!!(t&1<<r));return e},tm.prototype.readUnsigned=function(e){var t=this.readBytes(2);return e?(t[1]<<8)+t[0]:(t[0]<<8)+t[1]},tg.prototype.parse=function(e){return this.parseParts(this.output,e),this.output},tg.prototype.parseParts=function(e,t){for(var r=0;r<t.length;r++){var i=t[r];this.parsePart(e,i)}},tg.prototype.parsePart=function(e,t){var r,i=t.label;if(!t.requires||t.requires(this.stream,this.output,e))if(t.loop){for(var s=[];t.loop(this.stream);){var o={};this.parseParts(o,t.parts),s.push(o)}e[i]=s}else t.parts?(r={},this.parseParts(r,t.parts),e[i]=r):t.parser?(r=t.parser(this.stream,this.output,e),t.skip||(e[i]=r)):t.bits&&(e[i]=this.parseBits(t.bits))},tg.prototype.parseBits=function(e){var t={},r=this.stream.readBitArray();for(var i in e){var s=e[i];s.length?t[i]=r.slice(s.index,s.index+s.length).reduce(function(e,t){return 2*e+t},0):t[i]=r[s.index]}return t};let tv=function(){return function(e){return e.readByte()}},tx=function(e){return function(t){return t.readBytes(e)}},tw=function(e){return function(t){return t.readString(e)}},ty=function(e){return function(t){return t.readUnsigned(e)}},tb=function(e,t){return function(r,i,s){for(var o=t(r,i,s),n=Array(o),a=0;a<o;a++)n[a]=r.readBytes(e);return n}};var tE,tT={label:"blocks",parser:function(e){for(var t=[],r=0,i=e.readByte();0!==i;i=e.readByte())t.push(e.readBytes(i)),r+=i;var s=new Uint8Array(r);r=0;for(var o=0;o<t.length;o++)s.set(t[o],r),r+=t[o].length;return s}},tR={label:"gce",requires:function(e){var t=e.peekBytes(2);return 33===t[0]&&249===t[1]},parts:[{label:"codes",parser:tx(2),skip:!0},{label:"byteSize",parser:tv()},{label:"extras",bits:{future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}}},{label:"delay",parser:ty(!0)},{label:"transparentColorIndex",parser:tv()},{label:"terminator",parser:tv(),skip:!0}]},tS={label:"image",requires:function(e){return 44===e.peekByte()},parts:[{label:"code",parser:tv(),skip:!0},{label:"descriptor",parts:[{label:"left",parser:ty(!0)},{label:"top",parser:ty(!0)},{label:"width",parser:ty(!0)},{label:"height",parser:ty(!0)},{label:"lct",bits:{exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}}}]},{label:"lct",requires:function(e,t,r){return r.descriptor.lct.exists},parser:tb(3,function(e,t,r){return Math.pow(2,r.descriptor.lct.size+1)})},{label:"data",parts:[{label:"minCodeSize",parser:tv()},tT]}]},tF={label:"text",requires:function(e){var t=e.peekBytes(2);return 33===t[0]&&1===t[1]},parts:[{label:"codes",parser:tx(2),skip:!0},{label:"blockSize",parser:tv()},{label:"preData",parser:function(e,t,r){return e.readBytes(r.text.blockSize)}},tT]},tC={label:"application",requires:function(e,t,r){var i=e.peekBytes(2);return 33===i[0]&&255===i[1]},parts:[{label:"codes",parser:tx(2),skip:!0},{label:"blockSize",parser:tv()},{label:"id",parser:function(e,t,r){return e.readString(r.blockSize)}},tT]},tP={label:"comment",requires:function(e,t,r){var i=e.peekBytes(2);return 33===i[0]&&254===i[1]},parts:[{label:"codes",parser:tx(2),skip:!0},tT]},tA=[{label:"header",parts:[{label:"signature",parser:tw(3)},{label:"version",parser:tw(3)}]},{label:"lsd",parts:[{label:"width",parser:ty(!0)},{label:"height",parser:ty(!0)},{label:"gct",bits:{exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}}},{label:"backgroundColorIndex",parser:tv()},{label:"pixelAspectRatio",parser:tv()}]},{label:"gct",requires:function(e,t){return t.lsd.gct.exists},parser:tb(3,function(e,t){return Math.pow(2,t.lsd.gct.size+1)})},{label:"frames",parts:[tR,tC,tP,tS,tF],loop:function(e){var t=e.peekByte();return 33===t||44===t}}];function tM(e){var t=new tg(new Uint8Array(e));this.raw=t.parse(tA),this.raw.hasImages=!1;for(var r=0;r<this.raw.frames.length;r++)if(this.raw.frames[r].image){this.raw.hasImages=!0;break}}tM.prototype.decompressFrame=function(e,t){if(e>=this.raw.frames.length)return null;var r=this.raw.frames[e];if(r.image){var i=r.image.descriptor.width*r.image.descriptor.height,s=function(e,t,r){var i,s,o,n,a,l,u,h,f,c,d,p,m,g,v,x=Array(r),w=Array(4096),y=Array(4096),b=Array(4097);for(a=(s=1<<e)+1,i=s+2,u=-1,o=(1<<(n=e+1))-1,f=0;f<s;f++)w[f]=0,y[f]=f;for(d=h=p=m=v=g=0,c=0;c<r;){if(0===m){if(h<n){d+=t[g]<<h,h+=8,g++;continue}if(f=d&o,d>>=n,h-=n,f>i||f==a)break;if(f==s){o=(1<<(n=e+1))-1,i=s+2,u=-1;continue}if(-1==u){b[m++]=y[f],u=f,p=f;continue}for(l=f,f==i&&(b[m++]=p,f=u);f>s;)b[m++]=y[f],f=w[f];p=255&y[f],b[m++]=p,i<4096&&(w[i]=u,y[i]=p,(++i&o)==0&&i<4096&&(n++,o+=i)),u=l}m--,x[v++]=b[m],c++}for(c=v;c<r;c++)x[c]=0;return x}(r.image.data.minCodeSize,r.image.data.blocks,i);r.image.descriptor.lct.interlaced&&(s=function(e,t){for(var r=Array(e.length),i=e.length/t,s=[0,4,2,1],o=[8,8,4,2],n=0,a=0;a<4;a++)for(var l=s[a];l<i;l+=o[a])!function(i,s){var o=e.slice(s*t,(s+1)*t);r.splice.apply(r,[i*t,t].concat(o))}(l,n),n++;return r}(s,r.image.descriptor.width));var o={pixels:s,dims:{top:r.image.descriptor.top,left:r.image.descriptor.left,width:r.image.descriptor.width,height:r.image.descriptor.height}};return r.image.descriptor.lct&&r.image.descriptor.lct.exists?o.colorTable=r.image.lct:o.colorTable=this.raw.gct,r.gce&&(o.delay=10*(r.gce.delay||10),o.disposalType=r.gce.extras.disposal,r.gce.extras.transparentColorGiven&&(o.transparentIndex=r.gce.transparentColorIndex)),t&&(o.patch=function(e){for(var t=e.pixels.length,r=new Uint8ClampedArray(4*t),i=0;i<t;i++){var s=4*i,o=e.pixels[i],n=e.colorTable[o];r[s]=n[0],r[s+1]=n[1],r[s+2]=n[2],r[s+3]=255*(o!==e.transparentIndex)}return r}(o)),o}return null},tM.prototype.decompressFrames=function(e,t,r){void 0===t&&(t=0),r=void 0===r?this.raw.frames.length:Math.min(r,this.raw.frames.length);for(var i=[],s=t;s<r;s++)this.raw.frames[s].image&&i.push(this.decompressFrame(s,e));return i};class t_{frames=[];index=0;canvas;ctx;pixelRatio;startTime;playTime=0;static async create(e,t){let r=await fetch(e).then(e=>e.arrayBuffer()).then(e=>new tM(e)),i=r.decompressFrames(!0,void 0,void 0),{width:s,height:o}=r.raw.lsd;return new t_(i,s,o,t)}constructor(e,t,r,i){this.frames=e,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.pixelRatio=i,this.canvas.width=t,this.canvas.height=r,this.startTime=Date.now()}getCanvas(){return this.canvas}update(){let e=Date.now()-this.startTime;for(;this.playTime<e;){let e=this.frames[this.index%this.frames.length];this.playTime+=e.delay,this.index++}let t=this.frames[this.index%this.frames.length],r=new ImageData(t.patch,t.dims.width,t.dims.height);this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.putImageData(r,t.dims.left,t.dims.top)}}class tL{gl;canvas;maxTextureSize;floatLinearFilter=!1;floatBlend=!1;isContextLost=!1;#rl=new Set;#ru=new Set;#rh=new Set;constructor(e,t=!1){let r=e.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:t});if(!r)throw Error("[VFX-JS] WebGL2 is not available.");this.gl=r,this.canvas=e,this.#rf(),this.maxTextureSize=r.getParameter(r.MAX_TEXTURE_SIZE),e.addEventListener("webglcontextlost",this.#rc,!1),e.addEventListener("webglcontextrestored",this.#rd,!1)}setSize(e,t,r){let i=Math.floor(e*r),s=Math.floor(t*r);(this.canvas.width!==i||this.canvas.height!==s)&&(this.canvas.width=i,this.canvas.height=s)}addResource(e){this.#rl.add(e)}removeResource(e){this.#rl.delete(e)}onContextLost(e){return this.#ru.add(e),()=>this.#ru.delete(e)}onContextRestored(e){return this.#rh.add(e),()=>this.#rh.delete(e)}#rf(){let e=this.gl;e.getExtension("EXT_color_buffer_float"),e.getExtension("EXT_color_buffer_half_float"),this.floatBlend=!!e.getExtension("EXT_float_blend"),this.floatLinearFilter=!!e.getExtension("OES_texture_float_linear")}#rc=e=>{for(let t of(e.preventDefault(),this.isContextLost=!0,this.#ru))t()};#rd=()=>{for(let e of(this.isContextLost=!1,this.#rf(),this.#rl))e.restore();for(let e of this.#rh)e()}}class tU{gl;vao;#t;#W;constructor(e){this.#t=e,this.gl=e.gl,this.#m(),e.addResource(this)}#m(){let e=this.gl,t=e.createVertexArray(),r=e.createBuffer();if(!t||!r)throw Error("[VFX-JS] Failed to create quad VAO");this.vao=t,this.#W=r;let i=new Float32Array([-1,-1,0,1,-1,0,-1,1,0,-1,1,0,1,-1,0,1,1,0]);e.bindVertexArray(t),e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,i,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0),e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null)}restore(){this.#m()}draw(){let e=this.gl;e.bindVertexArray(this.vao),e.drawArrays(e.TRIANGLES,0,6)}dispose(){this.#t.removeResource(this),this.gl.deleteVertexArray(this.vao),this.gl.deleteBuffer(this.#W)}}function tz(e){return{phase:"hidden",direction:1,enterProgress:0,leaveProgress:0,isIn:!1,wasAbove:!1,wasBelow:!1,lastTime:e}}function tB(e,t){e.phase=t,e.direction=1,e.enterProgress=+("shown"===t),e.leaveProgress=0}function tI(e){return Math.min(Math.max(e,0),1)}function tD(e,t,r,i={}){return new y(e,t,r,{float:i.float??!1})}function tk(e,t){let r;r=t.renderingToBuffer?"none":t.premultipliedAlpha?"premultiplied":"normal";let i=t.glslVersion??M(t.fragmentShader);return new I(e,t.vertexShader??("100"===i?e7:e8),t.fragmentShader,t.uniforms,r,i)}class tV{pass;#N;#rp;#rm;#rg;#rv;#rx;constructor(e,t,r,i,s,o,n,a){if(this.#rg=i??!1,this.#rv=s??!1,this.#rx=o,this.#rp={},this.#N={src:{value:null},offset:{value:new P},resolution:{value:new P},viewport:{value:new A},time:{value:0},mouse:{value:new P},passIndex:{value:0}},r)for(let[e,t]of Object.entries(r))"function"==typeof t?(this.#rp[e]=t,this.#N[e]={value:t()}):this.#N[e]={value:t};this.pass=tk(e,{fragmentShader:t,uniforms:this.#N,renderingToBuffer:n??!1,premultipliedAlpha:!0,glslVersion:a})}get uniforms(){return this.#N}setUniforms(e,t,r,i,s,o){this.#N.src.value=e,this.#N.resolution.value.set(r.w*t,r.h*t),this.#N.offset.value.set(r.x*t,r.y*t),this.#N.time.value=i,this.#N.mouse.value.set(s*t,o*t)}updateCustomUniforms(e){for(let[e,t]of Object.entries(this.#rp))this.#N[e]&&(this.#N[e].value=t());if(e)for(let[t,r]of Object.entries(e))this.#N[t]&&(this.#N[t].value=r())}initializeBackbuffer(e,t,r,i){this.#rg&&!this.#rm&&(this.#rx?this.#rm=new T(e,this.#rx[0],this.#rx[1],1,this.#rv):this.#rm=new T(e,t,r,i,this.#rv))}resizeBackbuffer(e,t){this.#rm&&!this.#rx&&this.#rm.resize(e,t)}registerBufferUniform(e){this.#N[e]||(this.#N[e]={value:null})}get backbuffer(){return this.#rm}get persistent(){return this.#rg}get float(){return this.#rv}get size(){return this.#rx}dispose(){this.pass.dispose(),this.#rm?.dispose()}}class tO{#eo;#rw=new Map;constructor(e){this.#eo=e}get(e,t,r){let i=`${t}\0${e}\0${r??""}`,s=this.#rw.get(i);return s||(s=new _(this.#eo,e,t,r),this.#rw.set(i,s)),s}get size(){return this.#rw.size}dispose(){for(let e of this.#rw.values())e.dispose();this.#rw.clear()}}let tN=new Map,tX=!1;function tH(e,t){return"hic"===e||!0===t?null:"number"==typeof t?t.toString():"video"===e?"0.0001":"0"}function tW(e,t){let r=e.getContext("2d");r&&(r.clearRect(0,0,e.width,e.height),r.drawImage(t,0,0,e.width,e.height))}class t${#tu;#e9;#t;#H;#A;#en;#ry;#rb=[];#rE;#rT=new Map;#rR=null;#rS=!1;#rF=new WeakSet;#rC={};#rP={};#rA=0;#rM=void 0;#T=2;#r_=[];#rn=new td({showPlain:e=>{if("hic"===e.type){let t=e.srcTexture.source;t instanceof OffscreenCanvas&&tW(e.element,t)}else e.element.style.setProperty("opacity",e.originalOpacity.toString())},hidePlain:(e,t)=>{if("hic"===e.type){let t=e.element;t.getContext("2d")?.clearRect(0,0,t.width,t.height)}else e.element.style.opacity=t},isRegistered:e=>this.#r_.includes(e)});#rL=0;#rU=1;#rz=Date.now()/1e3;#rB=!1;#rI=to(0);#rD=to(0);#rk=[0,0];#rV=0;#rO=0;#rN=0;#rX=0;#rH=new WeakMap;#rW=new Set;#r$;constructor(e,t){this.#tu=e,this.#e9=t,this.#t=new tL(t,e.preserveDrawingBuffer),this.#H=this.#t.gl,this.#H.clearColor(0,0,0,0),this.#T=e.pixelRatio,this.#rU=e.timeScale,this.#rz=Date.now()/1e3,this.#A=new tU(this.#t),this.#en=new tO(this.#t),this.#r$=new m(this.#t),window.addEventListener("resize",this.#rG),window.addEventListener("pointermove",this.#rq),this.#rG(),this.#ry=new ts(this.#t),this.#rJ(e.postEffects),this.#t.onContextRestored(()=>{this.#H.clearColor(0,0,0,0)})}destroy(){for(let e of(this.stop(),window.removeEventListener("resize",this.#rG),window.removeEventListener("pointermove",this.#rq),this.#rE?.dispose(),this.#rT.values()))e?.dispose();for(let e of this.#rb)e.pass.dispose();for(let e of(this.#rR&&(this.#rR.dispose(),this.#rR=null,this.#rS=!1),[...this.#rW]))e.capture.dispose();this.#r$.dispose(),this.#ry.dispose(),this.#en.dispose(),this.#A.dispose()}#rK(){let e,t,r=this.#e9.ownerDocument,i="BackCompat"===r.compatMode?r.body:r.documentElement,s=i.clientWidth,o=i.clientHeight,n=window.scrollX,a=window.scrollY;if(this.#tu.fixedCanvas)e=0,t=0;else if(this.#tu.wrapper)e=s*this.#tu.scrollPadding[0],t=o*this.#tu.scrollPadding[1];else{let i=r.body.scrollWidth-(n+s),l=r.body.scrollHeight-(a+o);e=tZ(s*this.#tu.scrollPadding[0],0,i),t=tZ(o*this.#tu.scrollPadding[1],0,l)}let l=s+2*e,u=o+2*t;(l!==this.#rk[0]||u!==this.#rk[1])&&(this.#e9.style.width=`${l}px`,this.#e9.style.height=`${u}px`,this.#t.setSize(l,u,this.#T),this.#rI=to({top:-t,left:-e,right:s+e,bottom:o+t}),this.#rD=to({top:0,left:0,right:s,bottom:o}),this.#rk=[l,u],this.#rV=e,this.#rO=t),this.#tu.fixedCanvas||this.#e9.style.setProperty("transform",`translate(${n-e}px, ${a-t}px)`)}#rG=async()=>{for(let e of this.#rW)e.resize();for(let e of this.#r_)if("text"===e.type&&e.isInViewport){let t=e.element.getBoundingClientRect(),r=Math.ceil(t.width),i=Math.ceil(t.height);(r!==e.width||i!==e.height)&&(await this.#rj(e),e.width=r,e.height=i)}for(let e of this.#r_)if("text"===e.type&&!e.isInViewport){let t=e.element.getBoundingClientRect(),r=Math.ceil(t.width),i=Math.ceil(t.height);(r!==e.width||i!==e.height)&&(await this.#rj(e),e.width=r,e.height=i)}};#rq=e=>{this.#rN=e.clientX,this.#rX=window.innerHeight-e.clientY};async #rj(e){if(!this.#rH.get(e.element)){this.#rH.set(e.element,!0);try{let t=e.srcTexture,r=t.source instanceof OffscreenCanvas?t.source:void 0,i=await f(e.element,e.originalOpacity,r,this.maxTextureSize);if(0===i.width||0===i.height)return;let s=new m(this.#t,i);s.wrapS=t.wrapS,s.wrapT=t.wrapT,s.premultiplyAlpha=t.premultiplyAlpha,s.needsUpdate=!0,!e.chain&&e.passes.length>0&&(e.passes[0].uniforms.src.value=s),e.srcTexture=s,t.dispose()}catch(e){console.error(e)}finally{this.#rH.set(e.element,!1)}}}async addElement(e,t={},r){let i,s,o;if(void 0!==t.effect)return this.#rY(e,t,t.effect,r);let n=this.#rZ(t),a=e.getBoundingClientRect(),l=t0(e)?tl(a):ta(a),[u,c]=tq(t.overflow),d=tu(l,c),p=tJ(t.intersection),g=""===e.style.opacity?1:Number.parseFloat(e.style.opacity),v=!1;if(e instanceof HTMLImageElement){s="img";let t=h(e);if(v=!!t.match(/\.gif/i)){let r=await t_.create(t,this.#T);tN.set(e,r),i=new m(this.#t,r.getCanvas())}else{let e=await x(t);i=new m(this.#t,e)}}else if(e instanceof HTMLVideoElement)i=new m(this.#t,e),s="video";else if(e instanceof HTMLCanvasElement)et(e)&&r?(i=new m(this.#t,r),s="hic"):(i=new m(this.#t,e),s="canvas");else{let t=await f(e,g,void 0,this.maxTextureSize);i=new m(this.#t,t),s="text"}let[w,y]=tY(t.wrap);i.wrapS=w,i.wrapT=y,i.needsUpdate=!0;let b=t.autoCrop??!0,E=tH(s,t.overlay),R={src:{value:i},resolution:{value:new P},offset:{value:new P},time:{value:0},enterTime:{value:-1},leaveTime:{value:-1},enterProgress:{value:0},leaveProgress:{value:0},mouse:{value:new P},intersection:{value:0},viewport:{value:new A},autoCrop:{value:b}},S={};if(void 0!==t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r?(R[e]={value:r()},S[e]=r):R[e]={value:r};if(t.backbuffer){let e,t;e=(d.right-d.left)*this.#T,t=(d.bottom-d.top)*this.#T,R.backbuffer={value:(o=new T(this.#t,e,t,this.#T,!1)).texture}}let F=new Map,C=new Map;for(let e=0;e<n.length-1;e++){let t=n[e].target??`pass${e}`;n[e]={...n[e],target:t};let r=n[e].size,i=r?r[0]:(d.right-d.left)*this.#T,s=r?r[1]:(d.bottom-d.top)*this.#T;if(n[e].persistent){let i=r?1:this.#T,s=r?r[0]:d.right-d.left,o=r?r[1]:d.bottom-d.top;C.set(t,new T(this.#t,s,o,i,n[e].float))}else F.set(t,tD(this.#t,i,s,{float:n[e].float}))}let M=[];for(let e=0;e<n.length;e++){let t=n[e],r=t.frag,i={...R},s={};for(let[e,s]of F)e!==t.target&&r.match(RegExp(`uniform\\s+sampler2D\\s+${e}\\b`))&&(i[e]={value:s.texture});for(let[e,t]of C)r.match(RegExp(`uniform\\s+sampler2D\\s+${e}\\b`))&&(i[e]={value:t.texture});if(t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r?(i[e]={value:r()},s[e]=r):i[e]={value:r};let o=tk(this.#t,{vertexShader:t.vert,fragmentShader:r,uniforms:i,renderingToBuffer:void 0!==t.target,glslVersion:t.glslVersion});M.push({pass:o,uniforms:i,uniformGenerators:{...S,...s},target:t.target,persistent:t.persistent,float:t.float,size:t.size,backbuffer:t.target?C.get(t.target):void 0})}let _=this.#rL,L={type:s,element:e,isInViewport:!1,intersectionState:tz(_),width:l.right-l.left,height:l.bottom-l.top,passes:M,bufferTargets:F,startTime:_,enterTime:_,leaveTime:-1/0,release:t.release??1/0,isGif:v,isFullScreen:u,overflow:c,intersection:p,originalOpacity:g,srcTexture:i,zIndex:t.zIndex??0,backbuffer:o,autoCrop:b};this.#rQ(L,l,_),this.#r0(L,E)}#r0(e,t){this.#rn.adopt(e,t)||null===t||e.element.style.setProperty("opacity",t),this.#r_.push(e),this.#r_.sort((e,t)=>e.zIndex-t.zIndex)}async #rY(e,t,r,i){let s,o;void 0!==t.shader&&console.warn("[VFX-JS] Both `shader` and `effect` specified; `effect` takes precedence."),void 0!==t.overflow&&console.warn("[VFX-JS] `overflow` is shader-path only and is ignored by the effect path. Use each effect's own `outputRect` (with `dims.canvasRect` for fullscreen) to control its dst rect.");let n=Array.isArray(r)?[...r]:[r];this.#r1(n);let a=e.getBoundingClientRect(),l=t0(e)?tl(a):ta(a),[u,c]=tq(t.overflow),d=tJ(t.intersection),p=""===e.style.opacity?1:Number.parseFloat(e.style.opacity),g=!1;if(e instanceof HTMLImageElement){o="img";let t=h(e);if(g=!!t.match(/\.gif/i)){let r=await t_.create(t,this.#T);tN.set(e,r),s=new m(this.#t,r.getCanvas())}else{let e=await x(t);s=new m(this.#t,e)}}else if(e instanceof HTMLVideoElement)s=new m(this.#t,e),o="video";else if(e instanceof HTMLCanvasElement)et(e)&&i?(s=new m(this.#t,i),o="hic"):(s=new m(this.#t,e),o="canvas");else{let t=await f(e,p,void 0,this.maxTextureSize);s=new m(this.#t,t),o="text"}let[v,w]=tY(t.wrap);s.wrapS=v,s.wrapT=w,s.premultiplyAlpha=!0,s.needsUpdate=!0;let y=t.autoCrop??!0,b=tH(o,t.overlay),E=this.#rL,T={type:o,element:e,isInViewport:!1,intersectionState:tz(E),width:l.right-l.left,height:l.bottom-l.top,passes:[],bufferTargets:new Map,startTime:E,enterTime:E,leaveTime:-1/0,release:t.release??1/0,isGif:g,isFullScreen:u,overflow:c,intersection:d,originalOpacity:p,srcTexture:s,zIndex:t.zIndex??0,backbuffer:void 0,autoCrop:y,effectLastRenderTime:E},R=Z(()=>T.srcTexture,()=>tK(T.srcTexture,"w"),()=>tK(T.srcTexture,"h")),S={},F={};if(t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r?(F[e]=r,S[e]=r()):S[e]=r;T.effectUniformGenerators=F,T.effectStaticUniforms=S;let C={autoCrop:y,glslVersion:t.glslVersion??"300 es"},P=new tc(this.#t,this.#A,this.#T,n,C,R,!1,this.#en);try{await P.initAll()}catch(t){throw this.#r2(n),s.dispose(),e.style.setProperty("opacity",p.toString()),t}T.chain=P,this.#rQ(T,l,E),this.#r0(T,b)}#rZ(e){let t=t=>void 0===t.glslVersion&&void 0!==e.glslVersion?{...t,glslVersion:e.glslVersion}:t;return Array.isArray(e.shader)?e.shader.map(t):[t({frag:this.#r3(e.shader||"uvGradient")})]}async updateElementEffects(e,t){let r=this.#r_.find(t=>t.element===e);if(!r)throw Error("[VFX-JS] updateElementEffects: element not registered");if(!r.chain)throw Error("[VFX-JS] updateElementEffects: element is on the shader path; effect-only updates are not supported");let i=Array.isArray(t)?[...t]:[t],s=r.chain.effects,o=new Set(s),n=[];for(let e of i)if(!o.has(e)){if(this.#rF.has(e))throw Error("[VFX-JS] Effect instance already attached. Construct a new instance per `vfx.add()` / `postEffect`.");n.push(e)}await r.chain.replaceEffects(i);let a=new Set(i);for(let e of s)a.has(e)||this.#rF.delete(e);for(let e of n)this.#rF.add(e)}removeElement(e){let t=this.#r_.findIndex(t=>t.element===e);if(-1!==t){let r=this.#r_.splice(t,1)[0];if(r.chain)this.#r2(r.chain.effects),r.chain.dispose();else{for(let e of r.bufferTargets.values())e.dispose();for(let e of r.passes)e.pass.dispose(),e.backbuffer?.dispose();r.backbuffer?.dispose()}r.srcTexture.dispose(),e.style.setProperty("opacity",r.originalOpacity.toString())}}updateTextElement(e){let t=this.#r_.findIndex(t=>t.element===e);return -1!==t?this.#rj(this.#r_[t]):Promise.resolve()}async updateImageElement(e){let t=this.#r_.find(t=>t.element===e);if(t?.type!=="img"||t.isGif)return;let r=await x(h(e)),i=t.srcTexture,s=new m(this.#t,r);s.wrapS=i.wrapS,s.wrapT=i.wrapT,s.premultiplyAlpha=i.premultiplyAlpha,s.needsUpdate=!0,!t.chain&&t.passes.length>0&&(t.passes[0].uniforms.src.value=s),t.srcTexture=s,i.dispose()}updateCanvasElement(e){let t=this.#r_.find(t=>t.element===e);if(t){let r=t.srcTexture,i=new m(this.#t,e);i.wrapS=r.wrapS,i.wrapT=r.wrapT,i.premultiplyAlpha=r.premultiplyAlpha,i.needsUpdate=!0,!t.chain&&t.passes.length>0&&(t.passes[0].uniforms.src.value=i),t.srcTexture=i,r.dispose()}}updateHICTexture(e,t){let r=this.#r_.find(t=>t.element===e);if(r?.type!=="hic")return;r.frozen&&tW(e,t);let i=r.srcTexture,s=this.#r4(i,t);s!==i&&(!r.chain&&r.passes.length>0&&(r.passes[0].uniforms.src.value=s),r.srcTexture=s)}#r4(e,t){if(e.source===t)return e.needsUpdate=!0,e;let r=new m(this.#t,t);return r.wrapS=e.wrapS,r.wrapT=e.wrapT,r.premultiplyAlpha=e.premultiplyAlpha,r.needsUpdate=!0,e.dispose(),r}async addCapture(e,t,r,i,s){let o=await eX({createTexture:e=>this.#r5(e),uploadTexture:e=>this.#r6(e),refreshTexture:(e,t)=>this.#r4(e,t),textureSize:tK,emptyTexture:this.#r$,maxTextureSize:this.maxTextureSize,stillZIndex:r},e,t,()=>{this.#rW.delete(o),i?.()},s);return this.#rW.add(o),o.capture}#r6(e){try{e.upload(0)}catch(e){throw Error(`[VFX-JS] capture() could not upload the source: ${e}`)}}#r5(e){let t=new m(this.#t,e);return t.premultiplyAlpha=!0,t}hasElement(e){return this.#r_.some(t=>t.element===e)}emptyTexture(){return Z(()=>this.#r$,()=>0,()=>0)}liveTexture(){var e,t,r;let i,s,o;return e=e=>this.#r5(e),t=(e,t)=>this.#r4(e,t),r=tK,i=null,s=!1,o=Z(()=>i,()=>i?r(i,"w"):0,()=>i?r(i,"h"):0),{get texture(){return i?o:null},update(r){s||(i=i?t(i,r):e(r))},dispose(){s=!0,i?.dispose(),i=null}}}freezeInside(e){return this.#rn.freezeInside(e,this.#r_)}isFrozen(e){return this.#r_.some(t=>t.element===e&&t.frozen)}forceRender(e){let t=this.#r_.find(t=>t.element===e);return!t||t.forceRender?()=>{}:(t.forceRender=!0,()=>{t.forceRender=!1})}get maxTextureSize(){return this.#t.maxTextureSize}isPlaying(){return void 0!==this.#rM}play(){this.isPlaying()||(this.#rz=Date.now()/1e3,this.#rM=requestAnimationFrame(this.#r8))}get time(){return this.#rL}setTime(e){this.#rL=e,this.#rB=!0}get timeScale(){return this.#rU}set timeScale(e){this.#rU=e}stop(){void 0!==this.#rM&&(cancelAnimationFrame(this.#rM),this.#rM=void 0)}render(){let e=Date.now()/1e3;this.#rB?this.#rB=!1:this.#rL+=(e-this.#rz)*this.#rU,this.#rz=e;let t=this.#rL,r=this.#H;this.#rK(),r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,this.#e9.width,this.#e9.height),r.clear(r.COLOR_BUFFER_BIT);let i=this.#rI.right-this.#rI.left,s=this.#rI.bottom-this.#rI.top,o={x:0,y:0,w:i,h:s},n=this.#r7();for(let e of(n&&(this.#r9(i,s),this.#rE&&(r.bindFramebuffer(r.FRAMEBUFFER,this.#rE.fbo),r.clear(r.COLOR_BUFFER_BIT),r.bindFramebuffer(r.FRAMEBUFFER,null))),this.#rW))e.tick();for(let e of this.#r_){if(e.frozen){e.intersectionState.lastTime=t;continue}let r=e.element.getBoundingClientRect(),a="text"===e.type?tl(r):ta(r),l=this.#rQ(e,a,t);if(!l.isVisible)continue;if(e.chain){this.#ie(e,a,l,t);continue}let u=e.passes[0].uniforms;for(let r of(u.time.value=t-e.startTime,u.resolution.value.set((a.right-a.left)*this.#T,(a.bottom-a.top)*this.#T),u.mouse.value.set((this.#rN+this.#rV)*this.#T,(this.#rX+this.#rO)*this.#T),e.passes))for(let[e,t]of Object.entries(r.uniformGenerators))r.uniforms[e].value=t();tN.get(e.element)?.update(),("video"===e.type||e.isGif)&&(u.src.value.needsUpdate=!0);let h=E(a,s,this.#rV,this.#rO),f=E(l.rectWithOverflow,s,this.#rV,this.#rO);e.backbuffer&&(e.passes[0].uniforms.backbuffer.value=e.backbuffer.texture);{let t=e.isFullScreen?o:f,r=Math.max(1,t.w*this.#T),i=Math.max(1,t.h*this.#T),s=Math.max(1,t.w),n=Math.max(1,t.h);for(let t=0;t<e.passes.length-1;t++){let o=e.passes[t];if(!o.size)if(o.backbuffer)o.backbuffer.resize(s,n);else{let t=e.bufferTargets.get(o.target);t&&(t.width!==r||t.height!==i)&&t.setSize(r,i)}}}let c=new Map;for(let t of e.passes)t.backbuffer&&t.target&&c.set(t.target,t.backbuffer.texture);let d=e.srcTexture;for(let t=0;t<e.passes.length-1;t++){let i=e.passes[t],s=e.isFullScreen?o:f;for(let[e,t]of(i.uniforms.src.value=d,c))i.uniforms[e]&&(i.uniforms[e].value=t);for(let[e,t]of Object.entries(i.uniformGenerators))i.uniforms[e]&&(i.uniforms[e].value=t());let n=i.size?{x:0,y:0,w:i.size[0],h:i.size[1]}:{x:0,y:0,w:s.w,h:s.h},a=function(e,t,r,i,s,o,n){let a=s[0]+o[0]-r.x,l=s[1]+o[1]-r.y;return i?{resolution:[i[0],i[1]],offset:[0,0],mouse:[a/r.w*i[0],l/r.h*i[1]]}:{resolution:[e.width*n,e.height*n],offset:[(t.x-r.x)*n,(t.y-r.y)*n],mouse:[a*n,l*n]}}(r,h,s,i.size,[this.#rN,this.#rX],[this.#rV,this.#rO],this.#T);if(i.uniforms.resolution.value.set(...a.resolution),i.uniforms.offset.value.set(...a.offset),i.uniforms.mouse.value.set(...a.mouse),i.backbuffer)this.#it(i.pass,i.backbuffer.target,n,i.uniforms,!0),i.backbuffer.swap(),d=i.backbuffer.texture;else{let t=e.bufferTargets.get(i.target);if(!t)continue;this.#it(i.pass,t,n,i.uniforms,!0),d=t.texture}i.target&&c.set(i.target,d)}let p=e.passes[e.passes.length-1];for(let[e,t]of(p.uniforms.src.value=d,p.uniforms.resolution.value.set(r.width*this.#T,r.height*this.#T),p.uniforms.offset.value.set(h.x*this.#T,h.y*this.#T),p.uniforms.mouse.value.set((this.#rN+this.#rV)*this.#T,(this.#rX+this.#rO)*this.#T),c))p.uniforms[e]&&(p.uniforms[e].value=t);for(let[e,t]of Object.entries(p.uniformGenerators))p.uniforms[e]&&(p.uniforms[e].value=t());e.backbuffer?(p.uniforms.backbuffer.value=e.backbuffer.texture,e.isFullScreen?(e.backbuffer.resize(i,s),this.#ir(e,h.x,h.y),this.#it(p.pass,e.backbuffer.target,o,p.uniforms,!0),e.backbuffer.swap(),this.#ry.setUniforms(e.backbuffer.texture,this.#T,o),this.#it(this.#ry.pass,n&&this.#rE||null,o,this.#ry.uniforms,!1)):(e.backbuffer.resize(f.w,f.h),this.#ir(e,e.overflow.left,e.overflow.bottom),this.#it(p.pass,e.backbuffer.target,e.backbuffer.getViewport(),p.uniforms,!0),e.backbuffer.swap(),this.#ry.setUniforms(e.backbuffer.texture,this.#T,f),this.#it(this.#ry.pass,n&&this.#rE||null,f,this.#ry.uniforms,!1))):(this.#ir(e,h.x,h.y),this.#it(p.pass,n&&this.#rE||null,e.isFullScreen?o:f,p.uniforms,!1))}n&&this.#rE&&(this.#rR&&this.#rS?this.#ii(o,t):this.#is(o,t))}#r8=()=>{this.isPlaying()&&(this.render(),this.#rM=requestAnimationFrame(this.#r8))};#ie(e,t,r,i){let s=e.chain;if(!s)return;let o=this.#T;tN.get(e.element)?.update(),("video"===e.type||e.isGif)&&(e.srcTexture.needsUpdate=!0);let n={...e.effectStaticUniforms??{}};if(e.effectUniformGenerators)for(let[t,r]of Object.entries(e.effectUniformGenerators))n[t]=r();let a=this.#rI.right-this.#rI.left,l=this.#rI.bottom-this.#rI.top,u=E(t,l,this.#rV,this.#rO),h=this.#rN+this.#rV-u.x,f=this.#rX+this.#rO-u.y,c=t.right-t.left,d=t.bottom-t.top,p=e.effectLastRenderTime??i;e.effectLastRenderTime=i;let m=this.#r7()&&this.#rE?ee(this.#rE):null;s.run({time:i-e.startTime,deltaTime:i-p,mouse:[h*o,f*o],mouseViewport:[this.#rN*o,this.#rX*o],intersection:r.intersection,enterTime:tQ(i-e.enterTime),leaveTime:tQ(i-e.leaveTime),enterProgress:r.enterProgress,leaveProgress:r.leaveProgress,resolvedUniforms:n,canvasSize:[a,l],canvasBufferSize:[a*o,l*o],elementSize:[c,d],elementBufferSize:[c*o,d*o],elementRectOnCanvasPx:{x:u.x*o,y:u.y*o,w:u.w*o,h:u.h*o},finalTarget:m,isVisible:r.isVisible})}#r7(){return this.#rb.length>0||null!==this.#rR&&this.#rS}#r1(e){for(let t of e)if(this.#rF.has(t))throw Error("[VFX-JS] Effect instance already attached. Construct a new instance per `vfx.add()` / `postEffect`.");for(let t of e)this.#rF.add(t)}#r2(e){for(let t of e)this.#rF.delete(t)}#io(e){let t=e.hitTestPadBuffer,r=this.#T;return to({top:t.top/r,right:t.right/r,bottom:t.bottom/r,left:t.left/r})}#rQ(e,t,r){var i,s,o,n,a,l,u,h;let f,c,d,p=tu(t,e.chain?this.#io(e.chain):e.overflow),m=e.isFullScreen||tG(this.#rD,p),g=tu(this.#rD,e.intersection.rootMargin),v=tf(g.left,g.right,t.left,t.right)*tf(g.top,g.bottom,t.top,t.bottom);i=e,s=v,o=tG(g,t),n=r,c=(f=i.intersectionState).isIn,d=i.isFullScreen||function(e,t,r,i,s){let o=0===i?r:t>=i,n=0===s?!r:t<s,a=o&&!e.wasAbove,l=n&&!e.wasBelow;if(e.wasAbove=o,e.wasBelow=n,o&&!n)return!0;if(n&&!o)return!1;if(o&&n){if(a)return!0;if(l)return!1}return e.isIn}(f,s,o,i.intersection.threshold,i.intersection.leaveThreshold),!c&&d&&(i.enterTime=n,i.leaveTime=1/0),c&&!d&&(i.leaveTime=n),function(e,t,r,i){let s=r-e.lastTime;if(e.lastTime=r,e.isIn=t,function(e,t){switch(e.phase){case"hidden":if(t)return e.phase="entering",e.direction=1,!0;return!1;case"shown":if(!t)return e.phase="leaving",e.direction=1,!0;return!1;case"entering":return e.direction=t?1:-1,!1;case"leaving":return e.direction=t?-1:1,!1}}(e,t))return;let o=(s<0?s:e.direction*s)/i;if("entering"===e.phase){let t=e.enterProgress+o;o>0&&t>=1?tB(e,"shown"):o<0&&t<=0?tB(e,"hidden"):e.enterProgress=tI(t)}else if("leaving"===e.phase){let t=e.leaveProgress+o;o>0&&t>=1?tB(e,"hidden"):o<0&&t<=0?tB(e,"shown"):e.leaveProgress=tI(t)}}(f,d,n,i.intersection.duration);let{enterProgress:x,leaveProgress:w}=e.intersectionState;e.isInViewport=m;let y=m&&r-e.leaveTime<=e.release||!0===e.forceRender&&t.right>t.left&&t.bottom>t.top;return y&&!e.chain&&e.passes.length>0&&(a=e.passes[0].uniforms,l=e,u=v,h=r,a.intersection.value=u,a.enterTime.value=tQ(h-l.enterTime),a.leaveTime.value=tQ(h-l.leaveTime),a.enterProgress.value=l.intersectionState.enterProgress,a.leaveProgress.value=l.intersectionState.leaveProgress),{isVisible:y,intersection:v,rectWithOverflow:p,enterProgress:x,leaveProgress:w}}#r3(e){return e in ti?ti[e]:e}#it(e,t,r,i,s){let o=this.#H;s&&null!==t&&t!==this.#rE&&(o.bindFramebuffer(o.FRAMEBUFFER,t.fbo),o.viewport(0,0,t.width,t.height),o.clear(o.COLOR_BUFFER_BIT));let n=i.viewport;n&&n.value instanceof A&&n.value.set(r.x*this.#T,r.y*this.#T,r.w*this.#T,r.h*this.#T);try{var a,l,u,h;let i,s,n,f,c,d,p,m;a=this.#A,l=this.#rk[0],u=this.#rk[1],h=this.#T,i=t?t.width/h:l,s=t?t.height/h:u,n=Math.max(0,r.x),f=Math.max(0,r.y),c=Math.min(i,r.x+r.w),d=Math.min(s,r.y+r.h),p=c-n,m=d-f,p<=0||m<=0||(o.bindFramebuffer(o.FRAMEBUFFER,t?t.fbo:null),o.viewport(Math.round(n*h),Math.round(f*h),Math.round(p*h),Math.round(m*h)),D(o,e.blend),e.program.use(),e.program.uploadUniforms(e.uniforms),a.draw())}catch(e){console.error(e)}}#ir(e,t,r){let i=e.passes[0].uniforms.offset.value;i.x=t*this.#T,i.y=r*this.#T}#rJ(e){let t=1!==e.length||"frag"in e[0]?null:e[0];if(t&&void 0!==t.effect)return void this.#ia(t,t.effect);let r=[],i=[];for(let t of e)"frag"in t&&i.push(t);for(let e=0;e<i.length-1;e++)i[e].target||(i[e]={...i[e],target:`pass${e}`});for(let t of e){let e,i,s;if("frag"in t)e=t.frag,i=new tV(this.#t,e,t.uniforms,t.persistent??!1,t.float??!1,t.size,void 0!==t.target,t.glslVersion),s=t.target;else{if(void 0===t.shader)throw Error("VFXPostEffect requires `shader` (the `effect` path is not implemented yet).");e=this.#r3(t.shader),i=new tV(this.#t,e,t.uniforms,t.persistent??!1,t.float??!1,void 0,!1,t.glslVersion),t.persistent&&i.registerBufferUniform("backbuffer"),s=void 0}r.push(e);let o={};if(t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r&&(o[e]=r);this.#rb.push({pass:i,target:s,generators:o})}for(let e of i)e.target&&this.#rT.set(e.target,void 0);let s=this.#rb.map(e=>e.target).filter(e=>void 0!==e);for(let e=0;e<this.#rb.length;e++)for(let t of s)r[e].match(RegExp(`uniform\\s+sampler2D\\s+${t}\\b`))&&this.#rb[e].pass.registerBufferUniform(t)}#ia(e,t){void 0!==e.shader&&console.warn("[VFX-JS] Both `shader` and `effect` specified on post-effect; `effect` takes precedence.");let r=Array.isArray(t)?[...t]:[t];this.#r1(r);let i=Z(()=>{let e=this.#rE;if(!e)throw Error("[VFX-JS] post-effect chain active without target");return e.texture},()=>this.#rE?.width??0,()=>this.#rE?.height??0),s={autoCrop:!0,glslVersion:e.glslVersion??"300 es"},o=new tc(this.#t,this.#A,this.#T,r,s,i,!0,this.#en);if(e.uniforms)for(let[t,r]of Object.entries(e.uniforms))"function"==typeof r?(this.#rP[t]=r,this.#rC[t]=r()):this.#rC[t]=r;this.#rR=o,this.#rA=this.#rL,o.initAll().then(()=>{this.#rR===o&&(this.#rS=!0)}).catch(e=>{console.error("[VFX-JS] Post-effect init failed; post-effect disabled:",e),this.#rR===o&&(this.#r2(this.#rR.effects),this.#rR.dispose(),this.#rR=null,this.#rS=!1)})}#ii(e,t){let r=this.#rR;if(!r)return;let i=this.#T,s={...this.#rC};for(let[e,t]of Object.entries(this.#rP))s[e]=t();let o=this.#rI.right-this.#rI.left,n=this.#rI.bottom-this.#rI.top,a=this.#rA;this.#rA=t;let l=[o,n],u=[o*i,n*i],h={x:e.x*i,y:e.y*i,w:e.w*i,h:e.h*i};r.run({time:t,deltaTime:t-a,mouse:[this.#rN*i,this.#rX*i],mouseViewport:[this.#rN*i,this.#rX*i],intersection:1,enterTime:0,leaveTime:0,enterProgress:1,leaveProgress:0,resolvedUniforms:s,canvasSize:l,canvasBufferSize:u,elementSize:l,elementBufferSize:u,elementRectOnCanvasPx:h,finalTarget:null,isVisible:!0})}#is(e,t){if(!this.#rE)return;let r=this.#rE.texture,i=new Map;for(let{pass:e,target:t}of this.#rb)t&&e.backbuffer&&i.set(t,e.backbuffer.texture);for(let s=0;s<this.#rb.length;s++){let{pass:o,target:n,generators:a}=this.#rb[s],l=s===this.#rb.length-1,u=this.#rN+this.#rV,h=this.#rX+this.#rO,f=o.size;if(f){let[i,s]=f;o.uniforms.src.value=r,o.uniforms.resolution.value.set(i,s),o.uniforms.offset.value.set(0,0),o.uniforms.time.value=t,o.uniforms.mouse.value.set(u/e.w*i,h/e.h*s)}else o.setUniforms(r,this.#T,e,t,u,h);for(let[e,t]of(o.uniforms.passIndex.value=s,o.updateCustomUniforms(a),i)){let r=o.uniforms[e];r&&(r.value=t)}if(l)o.backbuffer?(o.uniforms.backbuffer&&(o.uniforms.backbuffer.value=o.backbuffer.texture),this.#it(o.pass,o.backbuffer.target,e,o.uniforms,!0),o.backbuffer.swap(),this.#ry.setUniforms(o.backbuffer.texture,this.#T,e),this.#it(this.#ry.pass,null,e,this.#ry.uniforms,!1)):this.#it(o.pass,null,e,o.uniforms,!1);else if(o.backbuffer){o.uniforms.backbuffer&&(o.uniforms.backbuffer.value=o.backbuffer.texture);let t=f?{x:0,y:0,w:f[0]/this.#T,h:f[1]/this.#T}:e;this.#it(o.pass,o.backbuffer.target,t,o.uniforms,!0),o.backbuffer.swap(),r=o.backbuffer.texture,n&&i.set(n,o.backbuffer.texture)}else{let t=n??`postEffect${s}`,a=this.#rT.get(t),l=f?f[0]:e.w*this.#T,u=f?f[1]:e.h*this.#T;a&&a.width===l&&a.height===u||(a?.dispose(),a=tD(this.#t,l,u,{float:o.float}),this.#rT.set(t,a));let h=f?{x:0,y:0,w:f[0]/this.#T,h:f[1]/this.#T}:e;this.#it(o.pass,a,h,o.uniforms,!0),r=a.texture,n&&i.set(n,a.texture)}}}#r9(e,t){let r=e*this.#T,i=t*this.#T;for(let{pass:s}of(this.#rE&&this.#rE.width===r&&this.#rE.height===i||(this.#rE?.dispose(),this.#rE=tD(this.#t,r,i)),this.#rb))s.persistent&&!s.backbuffer?s.initializeBackbuffer(this.#t,e,t,this.#T):s.backbuffer&&s.resizeBackbuffer(e,t)}}function tG(e,t){return t.left<=e.right&&t.right>=e.left&&t.top<=e.bottom&&t.bottom>=e.top}function tq(e){return!0===e?[!0,tn]:void 0===e?[!1,tn]:[!1,to(e)]}function tJ(e){let t=e?.threshold??0,r=to(e?.rootMargin??0),i=e?.leaveThreshold??t,s=e?.duration??1;return Number.isFinite(s)&&s>0||(tX||(tX=!0,console.warn(`[VFX-JS] \`intersection.duration\` must be a finite number above 0, got ${s}. Using 1 instead.`)),s=1),{threshold:t,leaveThreshold:i,rootMargin:r,duration:s}}function tK(e,t){let r=e.source;return r?"u">typeof HTMLImageElement&&r instanceof HTMLImageElement?"w"===t?r.naturalWidth:r.naturalHeight:"u">typeof HTMLVideoElement&&r instanceof HTMLVideoElement?"w"===t?r.videoWidth:r.videoHeight:"w"===t?r.width:r.height:0}function tj(e){return"repeat"===e?"repeat":"mirror"===e?"mirror":"clamp"}function tY(e){if(!e)return["clamp","clamp"];if(Array.isArray(e))return[tj(e[0]),tj(e[1])];let t=tj(e);return[t,t]}function tZ(e,t,r){return Math.max(t,Math.min(r,e))}function tQ(e){return tZ(e,-1e6,1e6)}function t0(e){return!(e instanceof HTMLImageElement||e instanceof HTMLVideoElement||e instanceof HTMLCanvasElement)}function t1(e,t){return t||!(e instanceof HTMLImageElement||e instanceof HTMLVideoElement||e instanceof HTMLCanvasElement)}class t2{static #il=new Set;#iu;#e9;#ih=new Map;#tS=new Set;#ic=new Set;#id=new Set;#rW=new Map;#ip;#tT=!1;static init(e){try{return new tE(e)}catch{return null}}constructor(e={}){let t,r,i;if("u"<typeof document)throw"Cannot find 'document'. VFX-JS only runs on the browser.";if(!function(){try{let e=document.createElement("canvas"),t=e.getContext("webgl2")||e.getContext("webgl");return null!==t}catch{return!1}}())throw Error("[VFX-JS] WebGL is not available in this environment.");let s=(i=window.devicePixelRatio,t=void 0===e.scrollPadding?[.1,.1]:!1===e.scrollPadding?[0,0]:Array.isArray(e.scrollPadding)?[e.scrollPadding[0]??.1,e.scrollPadding[1]??.1]:[e.scrollPadding,e.scrollPadding],r=void 0===e.postEffect?[]:Array.isArray(e.postEffect)?e.postEffect:[e.postEffect],{pixelRatio:e.pixelRatio??i,zIndex:e.zIndex??void 0,autoplay:e.autoplay??!0,fixedCanvas:!1===e.scrollPadding,scrollPadding:t,wrapper:e.wrapper,postEffects:r,preserveDrawingBuffer:e.preserveDrawingBuffer??!1,timeScale:e.timeScale??1});this.#ip=function(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}();let o=document.createElement("canvas");for(let[e,t]of Object.entries({position:s.fixedCanvas?"fixed":"absolute",top:0,left:0,width:"0px",height:"0px","z-index":9999,"pointer-events":"none"}))o.style.setProperty(e,t.toString());void 0!==s.zIndex&&o.style.setProperty("z-index",s.zIndex.toString()),(s.wrapper??document.body).appendChild(o),this.#e9=o,this.#iu=new t$(s,o),tE.#il.add(this),s.autoplay&&this.play()}async add(e,t,r){if(!this.#ip){for(let t of tE.#il){let r=t.#rW.get(e);if(r&&t1(e,r.hide))throw Error("[VFX-JS] This element is captured. Dispose the capture before add.")}this.#ic.add(e);try{e instanceof HTMLImageElement?await this.#im(e,t):e instanceof HTMLVideoElement?await this.#ig(e,t):e instanceof HTMLCanvasElement?et(e)&&r?await this.#iv(e,t,r):await this.#ix(e,t):await this.#iw(e,t)}finally{this.#ic.delete(e)}}}updateHICTexture(e,t){this.#iu.updateHICTexture(e,t)}get reducedMotion(){return this.#ip}get maxTextureSize(){return this.#iu.maxTextureSize}get canvas(){return this.#e9}addHTML(e,t){return this.#iy(e,t,!1)}addHTMLWithStill(e,t){return this.#iy(e,t,!0)}async #iy(e,t,r){let i;if(this.#ip)return;for(let t of tE.#il)if(t.#rW.has(e))throw Error("[VFX-JS] This element is captured. Dispose the capture before addHTML.");if(!eV())return console.warn("html-in-canvas not supported, falling back to dom-to-canvas"),this.add(e,t);void 0!==t.overlay&&console.warn("addHTML does not support overlay mode (layoutsubtree hides children). Ignoring overlay option.");let{overlay:s,...o}=t,n=this.#ih.get(e);n&&this.#iu.removeElement(n),this.#tS.add(e);try{let t=await eD(e,{onCapture:e=>{this.#iu.updateHICTexture(t.canvas,e)},maxSize:this.#iu.maxTextureSize,stillCover:r?{zIndex:this.#ib()}:void 0});n=t.canvas,i=t.initialCapture,this.#ih.set(e,n)}finally{this.#tS.delete(e)}await this.#iv(n,o,i)}async capture(e,t={}){let r;if(this.#ip)return this.#iE(e);if(this.#tT)throw Error("[VFX-JS] This VFX instance is destroyed.");if(e===document.documentElement||e===document.body||[...tE.#il].some(t=>e.contains(t.#e9)))throw Error("[VFX-JS] capture() cannot take <html>, <body> or an element that contains a VFX canvas.");let i=t.hide??!1;for(let t of tE.#il){if(t.#rW.has(e))throw Error(t===this?"[VFX-JS] This element is already captured. Share the capture instead.":"[VFX-JS] This element is already captured by another VFX instance.");if(t.#ih.has(e)||t.#tS.has(e))throw Error("[VFX-JS] capture() cannot take an element that addHTML or a transition has wrapped.");if((t.#iu.hasElement(e)||t.#ic.has(e))&&t1(e,i))throw Error("[VFX-JS] capture() cannot take an element added with add(). Remove it first.")}let s={hide:i,abort:new AbortController};this.#rW.set(e,s);try{r=await this.#iu.addCapture(e,t,this.#ib(),()=>this.#rW.delete(e),s.abort.signal)}catch(t){if(this.#rW.delete(e),this.#tT)throw Error("[VFX-JS] This VFX instance was destroyed during capture().");throw t}if(this.#tT)throw r.dispose(),Error("[VFX-JS] This VFX instance was destroyed during capture().");return r}#iE(e){let t=eN(e);return{texture:this.#iu.emptyTexture(),rect:t&&{x:t.left,y:t.top,width:t.width,height:t.height},update:()=>Promise.resolve(!1),dispose:()=>{}}}#ib(){let e=Number.parseInt(this.#e9.style.zIndex,10);return Number.isNaN(e)?9998:e-1}async #iv(e,t,r){try{await this.#iu.addElement(e,t,r)}finally{e_(e,this.#iu.isFrozen(e))}}addTransition(e,t={}){let r=new e6(this,e,t,()=>this.#id.delete(r));return this.#id.add(r),r}freezeInside(e){return this.#iu.freezeInside(e)}captureLive(e){return eV()?function(e,t,r,i={setupCapture:eL,teardownCapture:eU}){let s=!1;return i.setupCapture(e,{onCapture:e=>t.update(e),maxSize:r}).then(r=>{s||(e.getContext("2d")?.clearRect(0,0,e.width,e.height),t.update(r))},e=>console.error("[VFX-JS] live capture failed:",e)),{get texture(){return t.texture},dispose(){s||(s=!0,i.teardownCapture(e),t.dispose())}}}(e,this.#iu.liveTexture(),this.#iu.maxTextureSize):{texture:null,dispose:()=>{}}}lockSize(e){let t=this.#ih.get(e);return t?eA(t):()=>{}}forceRender(e){let t=this.#ih.get(e)??e;return this.#iu.forceRender(t)}remove(e){let t=this.#ih.get(e);t?(ek(t,e),this.#ih.delete(e),this.#iu.removeElement(t)):this.#iu.removeElement(e)}updateEffects(e,t){if(this.#ip)return Promise.resolve();let r=this.#ih.get(e)??e;return this.#iu.updateElementEffects(r,t)}async update(e){await this.updateInTime(e)}async updateInTime(e){let t=this.#ih.get(e)??(e instanceof HTMLCanvasElement?e:null),r=t?eP(t):void 0;return r||(e instanceof HTMLImageElement?await this.#iu.updateImageElement(e):e instanceof HTMLCanvasElement?this.#iu.updateCanvasElement(e):await this.#iu.updateTextElement(e),!0)}play(){this.#ip||this.#iu.play()}stop(){this.#iu.stop()}render(){this.#ip||this.#iu.render()}get time(){return this.#iu.time}setTime(e){this.#iu.setTime(e)}get timeScale(){return this.#iu.timeScale}set timeScale(e){this.#iu.timeScale=e}destroy(){for(let{abort:e}of(this.#tT=!0,tE.#il.delete(this),this.#rW.values()))e.abort();for(let e of this.#id)e.destroy();for(let[e,t]of(this.#id.clear(),this.#ih))ek(t,e);this.#ih.clear(),this.#iu.destroy(),this.#e9.remove()}#im(e,t){return e.complete?this.#iu.addElement(e,t):new Promise((r,i)=>{e.addEventListener("load",()=>{this.#iu.addElement(e,t).then(r,i)},{once:!0})})}#ig(e,t){return e.readyState>=3?this.#iu.addElement(e,t):new Promise((r,i)=>{e.addEventListener("canplay",()=>{this.#iu.addElement(e,t).then(r,i)},{once:!0})})}#ix(e,t){return this.#iu.addElement(e,t)}#iw(e,t){return this.#iu.addElement(e,t)}}tE=t2,e.s(["f",0,t2],61388),e.s([],90422);let t3=`
vec4 splitRead(vec2 uvr, vec2 uvg, vec2 uvb, bool to) {
  vec4 r = to ? readTo(uvr) : readFrom(uvr);
  vec4 g = to ? readTo(uvg) : readFrom(uvg);
  vec4 b = to ? readTo(uvb) : readFrom(uvb);
  return vec4(r.r, g.g, b.b, (r.a + g.a + b.a) / 3.0);
}
`,t4=`
float ign(vec2 p) {
  return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
}
`,t5=`
vec2 mirror(vec2 p) {
  return 1.0 - abs(1.0 - mod(p, 2.0));
}
`,t6=e=>"function"==typeof e.render&&!1!==e.enabled;e.s(["s",0,class extends l{name="hard_cut";frag=`
vec4 transition(vec2 uv, float t) {
  return t < 0.5 ? readFrom(uv) : readTo(uv);
}
`},"j",0,t4,"S",0,t5,"F",0,t3,"A",0,class{params;#R=[];constructor(e={}){this.params=e}async init(e){for(let t of(this.#R=this.stages.slice(1).map(()=>e.createRenderTarget()),this.stages))await t.init?.(e)}start(e){for(let t of this.stages)t.start?.(e)}update(e){for(let t of this.stages)t.update?.(e)}render(e){let t=this.stages.filter(t6);if(0===t.length)return void e.blit(e.src);let r=e.src;for(let[i,s]of t.entries()){if(i===t.length-1)return void s.render?.({...e,src:r});let o=this.#R[i];e.clear(o),s.render?.(function(e,t,r){return{...e,src:t,target:r,draw:t=>e.draw({...t,target:t.target??r}),blit:(t,i,s)=>e.blit(t,i??r,s),clear:t=>e.clear(t??r)}}(e,r,o)),r=o}}end(){for(let e of this.stages)e.end?.()}outputRect(e){let t=this.stages.filter(t6);return t[t.length-1]?.outputRect?.(e)}dispose(){for(let e of this.stages)e.dispose?.();for(let e of this.#R)e.dispose();this.#R=[]}}],66601),e.s(["f",0,class extends l{name="lens_distortion";frag=`
uniform float strength;
uniform float dispersion;
// The old content zooms from 1 to 1 + zoom; the new one from 1 + zoom back to 1.
uniform float zoom;
const float TAPS = 12.0;
// Width of the growing warp's edge.
const float SOFT = 0.5;

${t4}
${t5}
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