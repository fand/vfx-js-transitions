(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,83790,86679,6010,28263,36951,1633,e=>{e.i(90422),e.i(18289),e.i(7150);var t=e.i(16597),r=e.i(81290),i=e.i(60416),s=e.i(3066);e.s([],83790),e.i(61069),e.s([],86679),e.i(61388),e.i(99984),e.s([],6010),e.s([],28263),e.s(["f",0,function(e){return t.forwardRef(function(o,n){let a=(0,s.f)(),[l,u]=(0,t.useState)(null),{vfxProps:h,domProps:f}=(0,i.r)(o);return(0,r.Y)(l,a,h),(0,t.useEffect)(()=>{if(!a||!l)return;let e=new MutationObserver(()=>a.update(l));return e.observe(l,{characterData:!0,attributes:!0,subtree:!0}),()=>e.disconnect()},[l,a]),t.createElement(e,{...f,ref:e=>{u(e),n instanceof Function?n(e):n&&(n.current=e)}})})}],36951),e.s([],1633)},52729,e=>{e.i(83790),e.i(99984),e.i(86679),e.i(6010),e.i(28263);var t=e.i(36951);e.i(1633),e.i(58786),e.i(59443),e.i(24979),e.i(41570),(0,t.f)("span"),(0,t.f)("div"),(0,t.f)("p"),e.s([],52729)},81290,60416,e=>{var t=e.i(16597);let r=["shader","release","uniforms","overlay","intersection","overflow","wrap","zIndex","backbuffer","autoCrop","glslVersion","effect"];e.s(["B",0,r,"r",0,function(e){let t={},i={};for(let s of Object.keys(e))r.includes(s)?t[s]=e[s]:i[s]=e[s];return{vfxProps:t,domProps:i}}],60416);let i=r.filter(e=>"effect"!==e);function s(){let e=Promise.resolve();return{enqueue(t){let r=e.then(t,t);return e=r.then(()=>{},()=>{}),r}}}async function o(e,t,r,s,o){let n=function(e,t){for(let r of i)if(e[r]!==t[r])return!1;return!0}(r,s);if(!n||r.effect!==s.effect){if(n&&void 0!==s.effect)return void await e.updateEffects(t,s.effect);e.remove(t),await o(t,s)}}e.s(["P",0,o,"$",0,s,"Y",0,function(e,r,i){let n=(0,t.useRef)(i);n.current=i;let a=(0,t.useRef)(null),l=(0,t.useRef)(null);(0,t.useEffect)(()=>{if(!r||!e)return;let t=l.current;null===t&&(l.current=t=s());let i=!1;return t.enqueue(async()=>{if(i)return;let t=n.current;try{await r.add(e,t),a.current=t}catch(e){console.error("[@vfx-js/react] add failed:",e)}}),()=>{i=!0,t.enqueue(()=>{r.remove(e),a.current=null})}},[e,r]),(0,t.useEffect)(()=>{if(!r||!e)return;let t=l.current;null===t&&(l.current=t=s()),t.enqueue(async()=>{let t=a.current;if(t&&t!==i)try{await o(r,e,t,i,(e,t)=>r.add(e,t)),a.current=i}catch(e){console.error("[@vfx-js/react] applyDelta failed:",e)}})},[r,e,i])}],81290)},58786,59443,e=>{var t=e.i(16597),r=e.i(76137),i=e.i(36180);e.s(["f",0,function(e){let s=(0,t.useContext)(i.f),o=(0,t.useRef)(e);(0,t.useLayoutEffect)(()=>s?s.register(o.current):void(0,r.R)("transition-in","[@vfx-js/react] useTransitionIn does nothing outside <VFXTransition>."),[s])}],58786),e.s([],59443)},41570,22305,e=>{var t=e.i(61069),r=e.i(16597),i=e.i(3066),s=e.i(54057),o=e.i(36180);let n=null;function a(){let e=null!==n&&Date.now()-n.at<=1e4?n:null;return n=null,e?e.spec:null}function l(e){n={spec:e,at:Date.now()}}e.s(["n",0,l,"i",0,a,"e",0,function(e){return t=>{(function(e){if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return!1;let t=e.currentTarget?.getAttribute?.("target");return!t||"_self"===t})(t)&&l(e)}}],22305);let u={display:"contents"},h={display:"contents"},f={height:"100dvh",overflow:"hidden"};e.s(["f",0,function(e){let{pageKey:n,children:l,className:c,style:d,fullscreen:p=!0,...m}=e,g=(0,i.f)(),v=(0,s.f)(m),x=(0,r.useRef)(null),w=(0,r.useRef)(null),[y,b]=(0,r.useState)(()=>({kept:[],shown:{key:n,node:l,id:0}})),{shown:E}=y,T=(0,r.useRef)(1),R=(0,r.useRef)(new Map),S=(0,r.useRef)(n),C=(0,r.useRef)([]),F=(0,r.useRef)(null),[P]=(0,r.useState)(()=>({register:e=>(F.current=e,()=>{F.current===e&&(F.current=null)})}));(0,r.useEffect)(()=>{let e=x.current;if(!g||!e)return;let t=g.addTransition(e,v);return w.current=t,()=>{t.destroy(),w.current=null}},[g,v]);let A=(0,r.useRef)(E.id);(0,r.useLayoutEffect)(()=>{A.current=E.id;let e=C.current;for(let t of(C.current=[],e))t()},[E]),(0,r.useEffect)(()=>{if(n===S.current)return;S.current=n;let e={key:n,node:l,id:T.current++},t=w.current;t&&void 0!==n?(F.current=null,t.run(t=>new Promise(i=>{if(S.current!==n)return void i();let s=M(t);C.current.push(i),(0,r.startTransition)(()=>b(t=>({kept:s?[...t.kept,s]:t.kept,shown:e})))}),()=>a()??F.current??{}).catch(e=>{console.error("[@vfx-js/react] VFXTransition run failed:",e)})):(0,r.startTransition)(()=>b(t=>({...t,shown:e})))});let M=e=>{let t=z.current,{id:r}=t,i=R.current.get(r);if(!v.keepPlaying||!i)return null;let s=i.parentNode;return e.keepPlaying(i,e=>{A.current!==r&&(e.style.display="none"),b(e=>({...e,kept:e.kept.filter(e=>e.id!==r)}))}),i.parentNode!==s?t:null},z=(0,r.useRef)(E);z.current.id!==E.id&&(z.current=E),(void 0===n||n===E.key)&&(z.current={...E,node:l});let _=[...y.kept,z.current];return(0,t.jsx)("div",{style:u,children:(0,t.jsx)("div",{ref:x,className:c,style:p?{...f,...d}:d,children:(0,t.jsx)(o.f.Provider,{value:P,children:_.map(e=>m.keepPlaying||e!==z.current?(0,t.jsx)("div",{style:h,ref:t=>{t?R.current.set(e.id,t):R.current.delete(e.id)},children:e.node},e.id):(0,t.jsx)(r.Fragment,{children:e.node},e.id))})})})}],41570)},54057,e=>{var t=e.i(16597);e.s(["f",0,function(e){let r=(0,t.useRef)({}).current;for(let t of Object.keys(r))t in e||delete r[t];return Object.assign(r,e),r}])},36180,e=>{let t=(0,e.i(16597).createContext)(null);e.s(["f",0,t])},24979,e=>{var t=e.i(16597),r=e.i(3066),i=e.i(54057);let s={keepPlaying:()=>{}};e.s(["f",0,function(e={}){let o=(0,r.f)(),n=(0,i.f)(e),[a,l]=(0,t.useState)(null),u=(0,t.useRef)(null),[h,f]=(0,t.useTransition)(),c=(0,t.useRef)(!1),d=(0,t.useRef)([]);(0,t.useEffect)(()=>{if(!o||!a)return;let e=o.addTransition(a,n);return u.current=e,()=>{e.destroy(),u.current=null}},[o,a,n]),(0,t.useLayoutEffect)(()=>{if(h){c.current=!0;return}if(c.current){c.current=!1;let e=d.current;for(let t of(d.current=[],e))t()}},[h]);let p=(0,t.useCallback)(e=>new Promise(t=>{d.current.push(t),c.current=!1,f(e),requestAnimationFrame(()=>{c.current||t()})}),[]);return{ref:l,run:(0,t.useCallback)(async(e,t)=>{let r=u.current;r?await r.run(t=>p(()=>e(t)),t):await p(()=>e(s))},[p])}}])},3066,99984,76137,e=>{var t=e.i(16597);let r=(0,t.createContext)(null),i=(0,t.createContext)(!1);e.s(["i",0,r,"V",0,i],99984),e.i(90422);var s=e.i(61388);let o=["pixelRatio","zIndex","postEffect","autoplay"],n=null,a={},l=0,u=!1,h=!1,f=[],c=new Set;function d(){for(let e of c)e()}function p(){n&&(n.stop(),n.destroy(),n=null)}function m(){var e;if(h=!1,0===l||u)return;let t=f[f.length-1]?.config??{};n&&(e=a,o.every(r=>t[r]===e[r]))||(p(),a=t,u=null===(n=s.f.init({...t})),d())}function g(){l++,h||(h=!0,queueMicrotask(m))}function v(){--l>0||requestAnimationFrame(()=>{l>0||(p(),d())})}function x(e){return c.add(e),()=>c.delete(e)}function w(){return n}let y=new Set;e.s(["Y",0,g,"S",0,w,"z",0,v,"i",0,x,"R",0,function(e,t){y.has(e)||(y.add(e),console.warn(t))}],76137);let b=()=>null,E=()=>()=>{};e.s(["f",0,function({acquire:e=!0}={}){let s=(0,t.useContext)(i),o=(0,t.useContext)(r),n=(0,t.useSyncExternalStore)(s?E:x,w,b);return(0,t.useEffect)(()=>{if(!s&&e)return g(),v},[s,e]),s?o:n}],3066)},90422,28113,63363,18289,7150,61388,66601,35668,e=>{let t,r,i=`#version 300 es
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
`}function h(e){return e.currentSrc||e.src}async function f(e,t,r,i){var s;let o,n,a,l,u=e.getBoundingClientRect(),h=window.devicePixelRatio,f=Math.ceil(u.width),p=Math.ceil(u.height),m=f*h,g=p*h,v=1,x=m,w=g;i&&(x>i||w>i)&&(v=Math.min(i/x,i/w),x=Math.floor(x*v),w=Math.floor(w*v));let y=r&&r.width===x&&r.height===w?r:new OffscreenCanvas(x,w),b=e.cloneNode(!0);await d(e,b),function e(t,r){if("function"==typeof t.computedStyleMap)try{let e=t.computedStyleMap();for(let t of["margin-top","margin-right","margin-bottom","margin-left"]){let i=e.get(t);i instanceof CSSKeywordValue&&"auto"===i.value&&r.style.setProperty(t,"auto")}}catch{}for(let i=0;i<t.children.length;i++){let s=t.children[i],o=r.children[i];s instanceof HTMLElement&&o instanceof HTMLElement&&e(s,o)}}(e,b),b.style.setProperty("opacity",t.toString()),b.style.setProperty("margin","0px"),function(e){let t=e;for(;;){let e=t.style;if(Number.parseFloat(e.paddingTop)>0||Number.parseFloat(e.borderTopWidth)>0||e.getPropertyValue("overflow-x")&&"visible"!==e.getPropertyValue("overflow-x")||e.getPropertyValue("overflow-y")&&"visible"!==e.getPropertyValue("overflow-y")||"flex"===e.display||"grid"===e.display||"flow-root"===e.display||"inline-block"===e.display)break;let r=t.firstElementChild;if(!r)break;r.style.setProperty("margin-top","0px"),t=r}for(t=e;;){let e=t.style;if(Number.parseFloat(e.paddingBottom)>0||Number.parseFloat(e.borderBottomWidth)>0||e.getPropertyValue("overflow-x")&&"visible"!==e.getPropertyValue("overflow-x")||e.getPropertyValue("overflow-y")&&"visible"!==e.getPropertyValue("overflow-y")||"flex"===e.display||"grid"===e.display||"flow-root"===e.display||"inline-block"===e.display)break;let r=t.lastElementChild;if(!r)break;r.style.setProperty("margin-bottom","0px"),t=r}}(b),function e(t,r){let i=-t.scrollLeft,s=-t.scrollTop;for(let o=0;o<t.children.length;o++){let n=t.children[o],a=r.children[o];n&&(a instanceof HTMLElement||a instanceof SVGElement)&&((0!==i||0!==s)&&function(e,t,r){let i=e.style.getPropertyValue("translate"),[s="0px",o="0px",n]=i&&"none"!==i?function(e){let t=[],r=0,i="";for(let s of e.trim())"("===s?r++:")"===s&&r--," "===s&&0===r?(i&&t.push(i),i=""):i+=s;return i&&t.push(i),t}(i):[],a=`calc(${s} + ${t}px) calc(${o} + ${r}px)`;e.style.setProperty("translate",n?`${a} ${n}`:a)}(a,i,s),e(n,a))}}(e,b),b.style.setProperty("box-sizing","border-box"),b.style.setProperty("width",`${f}px`),b.style.setProperty("height",`${p}px`);let E=(s=b.outerHTML,(a=(n=document.implementation.createHTMLDocument("test")).createRange()).selectNodeContents(n.documentElement),a.deleteContents(),l=document.createElement("head"),n.documentElement.appendChild(l),n.documentElement.appendChild(a.createContextualFragment(s)),n.documentElement.setAttribute("xmlns",n.documentElement.namespaceURI),new XMLSerializer().serializeToString(n).replace(/<!DOCTYPE html>/,"")),T=`<svg xmlns="http://www.w3.org/2000/svg" width="${m}" height="${g}"><foreignObject width="100%" height="100%">${E}</foreignObject></svg>`,R=await new Promise(e=>{let t=new Image;t.onload=()=>e(t),t.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(T)}`}),S=y.getContext("2d");if(null===S)throw Error("[VFX-JS] Failed to get 2D context");let C=()=>{S.clearRect(0,0,x,w);let e=h*v;S.scale(e,e),S.drawImage(R,0,0,m,g),S.setTransform(1,0,0,1,0,0)};if(C(),o=navigator.userAgent,/AppleWebKit/.test(o)&&!/Chrome\/|Chromium\//.test(o)&&b.querySelector("img"))for(let e=0;e<c;e++)await new Promise(e=>setTimeout(e,16)),C();return y}e.s(["f",0,u],63363);let c=3;async function d(e,t){let r=window.getComputedStyle(e);for(let e of Array.from(r))/(-inline-|-block-|^inline-|^block-)/.test(e)||/^-webkit-.*(start|end|before|after|logical)/.test(e)||t.style.setProperty(e,r.getPropertyValue(e),r.getPropertyPriority(e));if("INPUT"===t.tagName)t.setAttribute("value",t.value);else if("TEXTAREA"===t.tagName)t.innerHTML=t.value;else if("IMG"===t.tagName)try{t.src=await p(h(e))}catch{}for(let r=0;r<e.children.length;r++){let i=e.children[r],s=t.children[r];await d(i,s)}}async function p(e){let t=await fetch(e).then(e=>e.blob());return new Promise(e=>{let r=new FileReader;r.onload=function(){e(this.result)},r.readAsDataURL(t)})}class m{gl;texture;wrapS="clamp";wrapT="clamp";minFilter="linear";magFilter="linear";needsUpdate=!0;premultiplyAlpha=!1;source=null;#t;#r=!1;#i;#s;constructor(e,t,r){this.#t=e,this.gl=e.gl;let i=r?.externalHandle;this.#s=void 0!==i,void 0!==i?(this.texture=i,this.#r=!0,this.needsUpdate=!1):this.#o(),t&&(this.source=t),this.#i=r?.autoRegister!==!1&&!this.#s,this.#i&&e.addResource(this)}#o(){let e=this.gl.createTexture();if(!e)throw Error("[VFX-JS] Failed to create texture");this.texture=e}restore(){this.#s||(this.#o(),this.#r=!1,this.needsUpdate=!0)}bind(e){let t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture),this.needsUpdate&&(this.#n(!1),this.needsUpdate=!1)}upload(e){let t=this.gl;t.activeTexture(t.TEXTURE0+e),t.bindTexture(t.TEXTURE_2D,this.texture),this.#n(!0),this.needsUpdate=!1}#n(e){let t=this.gl,r=this.source;if(t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,4),r)try{t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,r)}catch(t){if(e)throw t;console.error(t)}else if(!this.#r){let e=new Uint8Array([0,0,0,0]);t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,e)}this.#a(),this.#r=!0}#a(){let e=this.gl;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,g(e,this.wrapS)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,g(e,this.wrapT)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,v(e,this.minFilter)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,v(e,this.magFilter))}dispose(){this.#i&&this.#t.removeResource(this),this.#s||this.gl.deleteTexture(this.texture)}}function g(e,t){return"repeat"===t?e.REPEAT:"mirror"===t?e.MIRRORED_REPEAT:e.CLAMP_TO_EDGE}function v(e,t){return"nearest"===t?e.NEAREST:e.LINEAR}function x(e){return new Promise((t,r)=>{let i=new Image;i.crossOrigin="anonymous",i.onload=()=>t(i),i.onerror=r,i.src=e})}let w=new WeakSet;class y{gl;width;height;float;mipmap;depth;samples;fbo;resolveFbo=null;texture;depthTexture;#t;#l;#u=null;#h=null;#f=!1;#c=!1;constructor(e,t,r,i={}){this.#t=e,this.gl=e.gl,this.width=Math.max(1,Math.floor(t)),this.height=Math.max(1,Math.floor(r)),this.float=i.float??!1,this.mipmap=i.mipmap??!1,this.depth=i.depth??!1,this.#l=4===i.samples,this.samples=this.#l&&this.#d()?4:1,this.texture=new m(e,void 0,{autoRegister:!1});let s=i.wrap;void 0!==s&&("string"==typeof s?(this.texture.wrapS=s,this.texture.wrapT=s):(this.texture.wrapS=s[0],this.texture.wrapT=s[1])),void 0!==i.filter&&(this.texture.minFilter=i.filter,this.texture.magFilter=i.filter),this.depthTexture=null,this.depth&&(this.depthTexture=new m(e,void 0,{autoRegister:!1}),this.depthTexture.minFilter="nearest",this.depthTexture.magFilter="nearest"),this.#p(),e.addResource(this)}setSize(e,t){let r=Math.max(1,Math.floor(e)),i=Math.max(1,Math.floor(t));(r!==this.width||i!==this.height)&&(this.width=r,this.height=i,this.#p())}restore(){this.texture.restore(),this.depthTexture?.restore(),this.#p()}dispose(){this.#t.removeResource(this),this.gl.deleteFramebuffer(this.fbo),this.#m(this.resolveFbo,this.#u,this.#h),this.texture.dispose(),this.depthTexture?.dispose()}#d(){let e=this.gl,t=this.float?e.RGBA16F:e.RGBA8,r=e.getInternalformatParameter(e.RENDERBUFFER,t,e.SAMPLES);return!r||r.length>0&&r[0]>=4||(w.has(e)||(w.add(e),console.warn("[VFX-JS] This GPU can't use samples: 4 for this render target format; using samples: 1.")),!1)}markDirty(){1!==this.samples&&(this.#f=!0,this.#c=this.depth)}resolveColor(){this.#f&&(this.#f=!1,this.#g(this.gl.COLOR_BUFFER_BIT))}resolveDepth(){this.#c&&(this.#c=!1,this.#g(this.gl.DEPTH_BUFFER_BIT))}#g(e){let t=this.gl;t.disable(t.SCISSOR_TEST),t.bindFramebuffer(t.READ_FRAMEBUFFER,this.fbo),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,this.resolveFbo),t.blitFramebuffer(0,0,this.width,this.height,0,0,this.width,this.height,e,t.NEAREST),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null)}generateMipmaps(){if(!this.mipmap)return;this.resolveColor();let e=this.gl;e.bindTexture(e.TEXTURE_2D,this.texture.texture),e.generateMipmap(e.TEXTURE_2D),e.bindTexture(e.TEXTURE_2D,null)}#p(){let e=this.gl,t=this.fbo,r=this.resolveFbo,i=this.#u,s=this.#h,o=e.createFramebuffer();if(!o)throw Error("[VFX-JS] Failed to create framebuffer");let n=null;if(this.samples>1){if(!(n=e.createFramebuffer()))throw e.deleteFramebuffer(o),Error("[VFX-JS] Failed to create framebuffer");this.fbo=n,this.resolveFbo=o}else this.fbo=o;let a=this.texture.texture;e.bindTexture(e.TEXTURE_2D,a);let l=this.#t.floatLinearFilter&&!this.#l;if(this.float&&l&&!this.#t.floatBlend)throw Error("[VFX-JS] EXT_float_blend is not supported.");let u=this.float?l?e.RGBA32F:e.RGBA16F:e.RGBA8,h=this.float?l?e.FLOAT:e.HALF_FLOAT:e.UNSIGNED_BYTE;if(this.mipmap){let t=Math.floor(Math.log2(Math.max(this.width,this.height)))+1,r=this.width,i=this.height;for(let s=0;s<t;s++)e.texImage2D(e.TEXTURE_2D,s,u,r,i,0,e.RGBA,h,null),r=Math.max(1,r>>1),i=Math.max(1,i>>1)}else e.texImage2D(e.TEXTURE_2D,0,u,this.width,this.height,0,e.RGBA,h,null);let f="nearest"===this.texture.minFilter?e.NEAREST:e.LINEAR,c="nearest"===this.texture.magFilter?e.NEAREST:e.LINEAR,d=this.mipmap?"nearest"===this.texture.minFilter?e.NEAREST_MIPMAP_NEAREST:e.LINEAR_MIPMAP_LINEAR:f,p=b(e,this.texture.wrapS),m=b(e,this.texture.wrapT);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,d),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,c),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,p),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,m),e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,a,0),this.depthTexture&&this.#v(this.depthTexture),n&&this.#x(n,u),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null),this.#f=!1,this.#c=!1,this.texture.needsUpdate=!1,this.texture.source=null,t&&e.deleteFramebuffer(t),this.#m(r,i,s)}#x(e,t){let r=this.gl;r.bindFramebuffer(r.FRAMEBUFFER,e),this.#u=this.#w(t),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,this.#u),this.#h=null,this.depth&&(this.#h=this.#w(r.DEPTH_COMPONENT24),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,this.#h)),r.bindRenderbuffer(r.RENDERBUFFER,null)}#w(e){let t=this.gl,r=t.createRenderbuffer();if(!r)throw Error("[VFX-JS] Failed to create renderbuffer");return t.bindRenderbuffer(t.RENDERBUFFER,r),t.renderbufferStorageMultisample(t.RENDERBUFFER,this.samples,e,this.width,this.height),r}#m(e,t,r){let i=this.gl;e&&i.deleteFramebuffer(e),t&&i.deleteRenderbuffer(t),r&&i.deleteRenderbuffer(r)}#v(e){let t=this.gl;t.bindTexture(t.TEXTURE_2D,e.texture),t.texImage2D(t.TEXTURE_2D,0,t.DEPTH_COMPONENT24,this.width,this.height,0,t.DEPTH_COMPONENT,t.UNSIGNED_INT,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_COMPARE_MODE,t.NONE),t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,e.texture,0),e.needsUpdate=!1,e.source=null}}function b(e,t){return"repeat"===t?e.REPEAT:"mirror"===t?e.MIRRORED_REPEAT:e.CLAMP_TO_EDGE}function E(e,t,r,i){return{x:e.left+r,y:t-i-e.bottom,w:e.right-e.left,h:e.bottom-e.top}}class T{#y;#b;#E;#T;constructor(e,t,r,i,s,o={}){this.#y=t,this.#b=r,this.#E=i;let n=t*i,a=r*i,l={float:s,wrap:o.wrap,filter:o.filter,mipmap:o.mipmap,depth:o.depth,samples:o.samples};this.#T=[new y(e,n,a,l),new y(e,n,a,l)]}get read(){return this.#T[0]}get texture(){return this.#T[0].texture}get target(){return this.#T[1]}resize(e,t){if(e===this.#y&&t===this.#b)return;this.#y=e,this.#b=t;let r=e*this.#E,i=t*this.#E;this.#T[0].setSize(r,i),this.#T[1].setSize(r,i)}swap(){this.#T=[this.#T[1],this.#T[0]]}getViewport(){return{x:0,y:0,w:this.#y,h:this.#b}}dispose(){this.#T[0].dispose(),this.#T[1].dispose()}}let R=Object.freeze({__brand:"EffectQuad"});class S{gl;vao;#t;#R;#S;#C=[];#F=null;mode;indexType=0;hasIndices=!1;drawCount=0;drawStart=0;instanceCount;#i=!1;constructor(e,t,r){this.#t=e,this.gl=e.gl,this.#R=t,this.#S=r,this.mode=function(e,t){switch(t){case"lines":return e.LINES;case"lineStrip":return e.LINE_STRIP;case"points":return e.POINTS;default:return e.TRIANGLES}}(this.gl,t.mode),this.instanceCount=t.instanceCount??0,this.#p(),e.addResource(this),this.#i=!0}#p(){let e=this.gl,t=e.createVertexArray();if(!t)throw Error("[VFX-JS] Failed to create VAO");this.vao=t,e.bindVertexArray(t);let r=this.#S.program,i=null;for(let[t,s]of Object.entries(this.#R.attributes)){let o=!ArrayBuffer.isView(s)||s instanceof DataView?{name:t,data:s.data,itemSize:s.itemSize,normalized:s.normalized??!1,perInstance:s.perInstance??!1}:{name:t,data:s,itemSize:2,normalized:!1,perInstance:!1},n=e.getAttribLocation(r,o.name);if(n<0)continue;let a=e.createBuffer();if(!a)throw Error(`[VFX-JS] Failed to create VBO for "${o.name}"`);this.#C.push(a),e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,o.data,e.STATIC_DRAW);let l=function(e,t){if(t instanceof Float32Array)return e.FLOAT;if(t instanceof Uint8Array)return e.UNSIGNED_BYTE;if(t instanceof Uint16Array)return e.UNSIGNED_SHORT;if(t instanceof Uint32Array)return e.UNSIGNED_INT;if(t instanceof Int8Array)return e.BYTE;if(t instanceof Int16Array)return e.SHORT;if(t instanceof Int32Array)return e.INT;throw Error("[VFX-JS] Unsupported attribute typed array")}(e,o.data);e.enableVertexAttribArray(n),l===e.FLOAT||l===e.HALF_FLOAT||o.normalized?e.vertexAttribPointer(n,o.itemSize,l,o.normalized,0,0):e.vertexAttribIPointer(n,o.itemSize,l,0,0),o.perInstance&&e.vertexAttribDivisor(n,1),"position"===t&&null===i&&(i=o.data.length/o.itemSize)}let s=0,o=this.#R.indices;if(o){let t=e.createBuffer();if(!t)throw Error("[VFX-JS] Failed to create IBO");this.#F=t,e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),e.bufferData(e.ELEMENT_ARRAY_BUFFER,o,e.STATIC_DRAW),this.hasIndices=!0,this.indexType=o instanceof Uint32Array?e.UNSIGNED_INT:e.UNSIGNED_SHORT,s=o.length}else this.hasIndices=!1;e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null),this.#F&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null);let n=this.hasIndices?s:i??0,a=this.#R.drawRange;this.drawStart=a?.start??0,this.drawCount=a?.count!==void 0?a.count:Math.max(0,n-this.drawStart)}restore(){this.#C=[],this.#F=null,this.#p()}draw(){let e=this.gl;e.bindVertexArray(this.vao),this.hasIndices?this.instanceCount>0?e.drawElementsInstanced(this.mode,this.drawCount,this.indexType,this.drawStart*(this.indexType===e.UNSIGNED_INT?4:2),this.instanceCount):e.drawElements(this.mode,this.drawCount,this.indexType,this.drawStart*(this.indexType===e.UNSIGNED_INT?4:2)):this.instanceCount>0?e.drawArraysInstanced(this.mode,this.drawStart,this.drawCount,this.instanceCount):e.drawArrays(this.mode,this.drawStart,this.drawCount)}dispose(){this.#i&&(this.#t.removeResource(this),this.#i=!1);let e=this.gl;for(let t of(e.deleteVertexArray(this.vao),this.#C))e.deleteBuffer(t);this.#F&&e.deleteBuffer(this.#F),this.#C=[],this.#F=null}}class C{#t;#P;#A=new WeakMap;#M=new Set;constructor(e,t){this.#t=e,this.#P=t}get quad(){return this.#P}resolve(e,t){let r=this.#A.get(e);r||(r=new Map,this.#A.set(e,r));let i=r.get(t);return i||(i=new S(this.#t,e,t),r.set(t,i),this.#M.add(i)),i}release(e){let t=this.#A.get(e);if(t){for(let e of t.values())e.dispose(),this.#M.delete(e);this.#A.delete(e)}}dispose(){for(let e of this.#M)e.dispose();this.#M.clear()}}class F{x=0;y=0;constructor(e=0,t=0){this.x=e,this.y=t}set(e,t){return this.x=e,this.y=t,this}}class P{x=0;y=0;z=0;w=0;constructor(e=0,t=0,r=0,i=0){this.x=e,this.y=t,this.z=r,this.w=i}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}}function A(e){return/#version\s+300\s+es\b/.test(e)?"300 es":/#version\s+100\b/.test(e)||/\bgl_FragColor\b|\btexture2D\b|\bvarying\b|\battribute\b/.test(e)?"100":"300 es"}class M{gl;program;#t;#z;#_;#L;#I=new Map;constructor(e,t,r,i){this.#t=e,this.gl=e.gl,this.#z=t,this.#_=r,this.#L=i??A(r),this.#U(),e.addResource(this)}#U(){let e=this.gl,t=_(e,e.VERTEX_SHADER,L(this.#z,this.#L)),r=_(e,e.FRAGMENT_SHADER,L(this.#_,this.#L)),i=e.createProgram();if(!i)throw Error("[VFX-JS] Failed to create program");if(e.attachShader(i,t),e.attachShader(i,r),e.bindAttribLocation(i,0,"position"),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){let s=e.getProgramInfoLog(i)??"";throw e.deleteShader(t),e.deleteShader(r),e.deleteProgram(i),Error(`[VFX-JS] Program link failed: ${s}`)}e.detachShader(i,t),e.detachShader(i,r),e.deleteShader(t),e.deleteShader(r),this.program=i,this.#I.clear();let s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let t=0;t<s;t++){let r=e.getActiveUniform(i,t);if(!r)continue;let s=r.name.replace(/\[0\]$/,""),o=e.getUniformLocation(i,r.name);o&&this.#I.set(s,{location:o,type:r.type,size:r.size})}}restore(){this.#U()}use(){this.gl.useProgram(this.program)}hasUniform(e){return this.#I.has(e)}uploadUniforms(e){let t=this.gl,r=0;for(let[o,n]of this.#I){var i,s;let a=e[o];if(!a)continue;let l=a.value;if(!(null==l||"object"==typeof(i=l)&&"__brand"in i&&(z||(z=!0,console.warn("[VFX-JS] Texture uniforms work with `effect` only, not with `shader`. Ignoring the value.")),1))){if(35678===(s=n.type)||36298===s||36306===s||35682===s){l instanceof m&&(l.bind(r),t.uniform1i(n.location,r),r++);continue}l instanceof m||function(e,t,r){let i=t.location,s=t.size>1;switch(t.type){case e.FLOAT:s?e.uniform1fv(i,r):e.uniform1f(i,r);return;case e.FLOAT_VEC2:s?e.uniform2fv(i,r):r instanceof F?e.uniform2f(i,r.x,r.y):e.uniform2f(i,r[0],r[1]);return;case e.FLOAT_VEC3:s?e.uniform3fv(i,r):e.uniform3f(i,r[0],r[1],r[2]);return;case e.FLOAT_VEC4:s?e.uniform4fv(i,r):r instanceof P?e.uniform4f(i,r.x,r.y,r.z,r.w):e.uniform4f(i,r[0],r[1],r[2],r[3]);return;case e.INT:s?e.uniform1iv(i,r):e.uniform1i(i,r);return;case e.INT_VEC2:s?e.uniform2iv(i,r):e.uniform2i(i,r[0],r[1]);return;case e.INT_VEC3:s?e.uniform3iv(i,r):e.uniform3i(i,r[0],r[1],r[2]);return;case e.INT_VEC4:s?e.uniform4iv(i,r):e.uniform4i(i,r[0],r[1],r[2],r[3]);return;case e.BOOL:s?e.uniform1iv(i,r):e.uniform1i(i,+!!r);return;case e.BOOL_VEC2:s?e.uniform2iv(i,r):e.uniform2i(i,+!!r[0],+!!r[1]);return;case e.BOOL_VEC3:s?e.uniform3iv(i,r):e.uniform3i(i,+!!r[0],+!!r[1],+!!r[2]);return;case e.BOOL_VEC4:s?e.uniform4iv(i,r):e.uniform4i(i,+!!r[0],+!!r[1],+!!r[2],+!!r[3]);return;case e.FLOAT_MAT2:e.uniformMatrix2fv(i,!1,r);return;case e.FLOAT_MAT3:e.uniformMatrix3fv(i,!1,r);return;case e.FLOAT_MAT4:e.uniformMatrix4fv(i,!1,r);return;case e.UNSIGNED_INT:s?e.uniform1uiv(i,r):e.uniform1ui(i,r);return;case e.UNSIGNED_INT_VEC2:s?e.uniform2uiv(i,r):e.uniform2ui(i,r[0],r[1]);return;case e.UNSIGNED_INT_VEC3:s?e.uniform3uiv(i,r):e.uniform3ui(i,r[0],r[1],r[2]);return;case e.UNSIGNED_INT_VEC4:s?e.uniform4uiv(i,r):e.uniform4ui(i,r[0],r[1],r[2],r[3]);return;default:I.has(t.type)||(I.add(t.type),console.warn(`[VFX-JS] Unsupported uniform type 0x${t.type.toString(16)}; skipping upload.`));return}}(t,n,l)}}}dispose(){this.#t.removeResource(this),this.gl.deleteProgram(this.program)}}let z=!1;function _(e,t,r){let i=e.createShader(t);if(!i)throw Error("[VFX-JS] Failed to create shader");if(e.shaderSource(i,r),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(i)??"";throw e.deleteShader(i),Error(`[VFX-JS] Shader compile failed: ${t}

${r}`)}return i}function L(e,t){return e.replace(/^\s+/,"").startsWith("#version")||"100"===t?e:`#version 300 es
${e}`}let I=new Set;class U{gl;program;uniforms;blend;constructor(e,t,r,i,s,o){this.gl=e.gl,this.program=new M(e,t,r,o),this.uniforms=i,this.blend=s}dispose(){this.program.dispose()}}function B(e,t){"none"===t?e.disable(e.BLEND):(e.enable(e.BLEND),e.blendEquation(e.FUNC_ADD),"premultiplied"===t?e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA):"additive"===t?e.blendFuncSeparate(e.ONE,e.ONE,e.ONE,e.ONE):e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA))}let k=Symbol.for("@vfx-js/effect.resolve-texture"),V=Symbol.for("@vfx-js/effect.resolve-rt"),D=`#version 300 es
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
`,X=`
precision highp float;
varying vec2 uv;
uniform sampler2D src;
void main() {
    gl_FragColor = texture2D(src, uv);
}
`,H=`#version 300 es
precision highp float;
in vec2 uvSrc;
out vec4 outColor;
uniform sampler2D src;
void main() {
    bool inside = all(greaterThanEqual(uvSrc, vec2(0.0))) && all(lessThanEqual(uvSrc, vec2(1.0)));
    outColor = inside ? texture(src, uvSrc) : vec4(0.0);
}
`,W=`
precision highp float;
varying vec2 uvSrc;
uniform sampler2D src;
void main() {
    bool inside = all(greaterThanEqual(uvSrc, vec2(0.0))) && all(lessThanEqual(uvSrc, vec2(1.0)));
    gl_FragColor = inside ? texture2D(src, uvSrc) : vec4(0.0);
}
`;class ${#B;#k;#E;#V;#D;#O=[];#N=[];#X=[];#H=[];#W="init";#$=!1;#G=!1;#q=!1;#J;#j;#K;constructor(e,t,r,i,s,o){this.#B=e,this.#k=e.gl,this.#E=r,this.#V=o,this.#D=new C(e,t),this.#j={outputBufferW:1,outputBufferH:1,canvasBufferSize:[1,1],outputViewport:{x:0,y:0,w:1,h:1},elementBufferW:1,elementBufferH:1,contentRectUv:[0,0,1,1],srcRectUv:[0,0,1,1]};let n={time:0,deltaTime:0,pixelRatio:r,resolution:[1,1],mouse:[0,0],mouseViewport:[0,0],intersection:0,enterTime:0,leaveTime:0,enterProgress:0,leaveProgress:0,src:i,target:null,uniforms:{},vfxProps:s,dims:{element:[1,1],elementPixel:[1,1],canvas:[1,1],canvasPixel:[1,1],pixelRatio:r,contentRect:[0,0,1,1],srcRect:[0,0,1,1],canvasRect:[0,0,1,1]},quad:R,gl:this.#k,createRenderTarget:e=>this.#Y(e),releaseGeometry:e=>this.#D.release(e),wrapTexture:(e,t)=>this.#Z(e,t),draw:e=>this.#Q(e),blit:(e,t,r)=>this.#ee(e,t,r),clear:(e,t)=>this.#et(e,t),resetState:()=>this.#er(),onContextRestored:e=>{let t=this.#B.onContextRestored(e);return this.#H.push(t),t}};this.#K=n}get ctx(){return this.#K}setPhase(e){this.#W=e}setFrameDims(e){for(let t of(this.#j=e,this.#K.resolution=[e.canvasBufferSize[0],e.canvasBufferSize[1]],this.#X))t.resolver.resize?.(e.outputBufferW,e.outputBufferH)}setEffectDims(e){this.#K.dims=e}setFrameState(e){let t=this.#K;t.time=e.time,t.deltaTime=e.deltaTime,t.mouse=e.mouse,t.mouseViewport=e.mouseViewport,t.intersection=e.intersection,t.enterTime=e.enterTime,t.leaveTime=e.leaveTime,t.enterProgress=e.enterProgress,t.leaveProgress=e.leaveProgress,t.uniforms=e.uniforms}setSrc(e){this.#K.src=e}setOutput(e){this.#K.target=e}passthroughCopy(e,t,r){let i=this.#W;this.#W="render";let s=this.#K.target;this.#K.target=t;try{let i=this.#j.outputViewport;this.#j.outputViewport={...r};let s=this.#K.vfxProps.glslVersion;this.#ei({frag:"100"===s?X:N,uniforms:{src:e},target:t}),this.#j.outputViewport=i}finally{this.#K.target=s,this.#W=i}}clearRt(e){let t=this.#k,r=e[V];t.bindFramebuffer(t.FRAMEBUFFER,r.getWriteFbo().fbo),t.viewport(0,0,e.width,e.height),t.clearColor(0,0,0,0),t.disable(t.SCISSOR_TEST),t.clear(t.COLOR_BUFFER_BIT),t.bindFramebuffer(t.FRAMEBUFFER,null)}#Y(e){let t,r,i,s,o=e?.persistent??!1,n=e?.float??!1,a=G(e?.wrap),l=e?.filter,u=e?.mipmap??!1,h=!1!==u,f=!0===u,c=e?.depth??!1,d=this.#es(e?.samples),p=e?.size,m=p?p[0]:this.#j.outputBufferW,g=p?p[1]:this.#j.outputBufferH;if(o){let e=p?1:this.#E,s=p?m:m/e,o=p?g:g/e,u=new T(this.#B,s,o,e,n,{wrap:a,filter:l,mipmap:h,depth:c,samples:d});t={getReadTexture:()=>(u.read.resolveColor(),u.read.texture),getWriteFbo:()=>u.target,swap:()=>u.swap(),resize:p?void 0:(e,t)=>{u.resize(e/this.#E,t/this.#E)},dispose:()=>u.dispose()},h&&(t.regenerateMipmaps=()=>u.target.generateMipmaps(),t.mipmapAutoRegen=f),c&&(t.getDepthTexture=()=>(u.read.resolveDepth(),u.read.depthTexture)),r=()=>u.target.width,i=()=>u.target.height}else{let e=new y(this.#B,m,g,{float:n,wrap:a,filter:l,mipmap:h,depth:c,samples:d});t={getReadTexture:()=>(e.resolveColor(),e.texture),getWriteFbo:()=>e,resize:p?void 0:(t,r)=>e.setSize(t,r),dispose:()=>e.dispose()},h&&(t.regenerateMipmaps=()=>e.generateMipmaps(),t.mipmapAutoRegen=f);let s=e.depthTexture;s&&(t.getDepthTexture=()=>(e.resolveDepth(),s)),r=()=>e.width,i=()=>e.height}let v=J(t,r,i,()=>this.#eo(s));return s={handle:v,resolver:t},this.#N.push(s),p||this.#X.push(s),v}#es(e){return void 0===e||1===e||4===e?e??1:(this.#q||(this.#q=!0,console.warn("[VFX-JS] createRenderTarget() samples must be 1 or 4; using 1.")),1)}#eo(e){let t=this.#N.indexOf(e);if(t<0)return;this.#N.splice(t,1);let r=this.#X.indexOf(e);r>=0&&this.#X.splice(r,1),e.resolver.dispose?.()}#Z(e,t){var r;let i,s,o,n,a=G(t?.wrap),l=t?.filter,u=null,h=(r=e,!!(i=globalThis.WebGLTexture)&&"function"==typeof i&&r instanceof i||void 0===r.width&&void 0===r.naturalWidth&&void 0===r.videoWidth);if(h){if(!t?.size)throw Error("[VFX-JS] wrapTexture(WebGLTexture) requires opts.size");let[r,i]=t.size;s=new m(this.#B,void 0,{autoRegister:!1,externalHandle:e}),o=()=>r,n=()=>i}else{s=new m(this.#B,e);let r=t?.size,i=t=>r?"w"===t?r[0]:r[1]:"u">typeof HTMLImageElement&&e instanceof HTMLImageElement?"w"===t?e.naturalWidth:e.naturalHeight:"u">typeof HTMLVideoElement&&e instanceof HTMLVideoElement?"w"===t?e.videoWidth:e.videoHeight:"w"===t?e.width:e.height;o=()=>i("w"),n=()=>i("h");let a="u">typeof HTMLVideoElement&&e instanceof HTMLVideoElement||"u">typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement||"u">typeof OffscreenCanvas&&e instanceof OffscreenCanvas;(t?.autoUpdate??a)&&(u=()=>{s.needsUpdate=!0})}s.wrapS=a[0],s.wrapT=a[1],void 0!==l&&(s.minFilter=l,s.magFilter=l),this.#O.push(s),u&&this.#en.push(u);let f=!1;return q(()=>s,o,n,()=>{if(f)return;f=!0;let e=this.#O.indexOf(s);if(-1!==e&&this.#O.splice(e,1),u){let e=this.#en.indexOf(u);-1!==e&&this.#en.splice(e,1)}s.dispose()},h?void 0:()=>{f||(s.needsUpdate=!0)})}#en=[];tickAutoUpdates(){for(let e of this.#en)e()}#Q(e){if("render"!==this.#W){"update"!==this.#W||this.#$||(this.#$=!0,console.warn("[VFX-JS] ctx.draw() called in update(); ignored. Move draws to render()."));return}this.#ei(e)}#ee(e,t,r){if("render"!==this.#W){"update"!==this.#W||this.#$||(this.#$=!0,console.warn("[VFX-JS] ctx.blit() called in update(); ignored. Move draws to render()."));return}let i="100"===this.#K.vfxProps.glslVersion?W:H;this.#ei({frag:i,uniforms:{src:e},target:t,blend:r?.blend,swap:r?.swap})}#et(e,t){if("render"!==this.#W){"update"!==this.#W||this.#$||(this.#$=!0,console.warn("[VFX-JS] ctx.clear() called in update(); ignored. Move draws to render()."));return}let r=this.#k,i=this.#K.target,s=null==e?i:e,o=null===s||s===i,n=null===s?null:s[V],a=!o&&!!n?.getDepthTexture,l=t?.color??!0,u=(t?.depth??!0)&&a;if(!l&&!u)return;let h=0;if(l&&(r.clearColor(0,0,0,0),h|=r.COLOR_BUFFER_BIT),u&&(r.clearDepth(1),h|=r.DEPTH_BUFFER_BIT),o||null===n){let e=null===n?null:n.getWriteFbo().fbo,t=this.#j.outputViewport;r.bindFramebuffer(r.FRAMEBUFFER,e),r.enable(r.SCISSOR_TEST),r.scissor(t.x,t.y,t.w,t.h),r.clear(h),n?.getWriteFbo().markDirty(),r.disable(r.SCISSOR_TEST),r.bindFramebuffer(r.FRAMEBUFFER,null);return}r.disable(r.SCISSOR_TEST);let f=()=>{let e=n.getWriteFbo();r.bindFramebuffer(r.FRAMEBUFFER,e.fbo),r.clear(h),e.markDirty()};f(),n.swap&&(n.swap(),f(),n.swap()),r.bindFramebuffer(r.FRAMEBUFFER,null)}#er(){if("disposed"===this.#W||this.#B.isContextLost)return;let e=this.#k;e.bindFramebuffer(e.FRAMEBUFFER,null),e.drawBuffers([e.BACK]),e.readBuffer(e.BACK),e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),e.disable(e.DEPTH_TEST),e.disable(e.CULL_FACE),e.disable(e.STENCIL_TEST),e.disable(e.SCISSOR_TEST),e.disable(e.BLEND),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.RASTERIZER_DISCARD),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.disable(e.SAMPLE_COVERAGE),e.depthMask(!0),e.clearColor(0,0,0,0),e.depthFunc(e.LESS),e.colorMask(!0,!0,!0,!0),e.stencilMask(0xffffffff),e.frontFace(e.CCW),e.cullFace(e.BACK),e.useProgram(null),e.bindVertexArray(null),e.bindTransformFeedback(e.TRANSFORM_FEEDBACK,null),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),e.bindBuffer(e.PIXEL_UNPACK_BUFFER,null),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBuffer(e.COPY_READ_BUFFER,null),e.bindBuffer(e.COPY_WRITE_BUFFER,null);let t=this.#ea();for(let r=0;r<t;r++)e.bindSampler(r,null);e.activeTexture(e.TEXTURE0),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0)}#ea(){if(void 0===this.#J){let e=this.#k,t=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);this.#J="number"==typeof t&&t>0?t:16}return this.#J}#ei(e){let t,r,i,s,o,n,a=this.#k,l=e.vert??("100"===this.#K.vfxProps.glslVersion?O:D),u=this.#V.get(l,e.frag,this.#K.vfxProps.glslVersion),h=this.#K.target,f=void 0===e.target||null===e.target?h:e.target,c=null===f||f===h,d=this.#el(e.uniforms),p=null,m=!1;if(null===f)t=this.#j.outputViewport.x,r=this.#j.outputViewport.y,i=this.#j.outputViewport.w,s=this.#j.outputViewport.h;else{let e=f[V];p=e.getWriteFbo(),c?(t=this.#j.outputViewport.x,r=this.#j.outputViewport.y,i=this.#j.outputViewport.w,s=this.#j.outputViewport.h):(t=0,r=0,i=f.width,s=f.height),o=e.swap,m=!c&&!!e.getDepthTexture,e.mipmapAutoRegen&&(n=e.regenerateMipmaps)}a.bindFramebuffer(a.FRAMEBUFFER,p?p.fbo:null),a.viewport(t,r,i,s),a.disable(a.SCISSOR_TEST),B(a,e.blend??(null===f?"premultiplied":"none"));let g=this.#eu(e,m);u.use(),u.uploadUniforms(d);let v=e.geometry??R,x=v===R?this.#D.quad:this.#D.resolve(v,u);g&&(g.depthTest||g.depthWrite?(a.enable(a.DEPTH_TEST),a.depthFunc(g.depthTest?function(e,t){switch(t){case"never":return e.NEVER;case"less":return e.LESS;case"equal":return e.EQUAL;case"lequal":return e.LEQUAL;case"greater":return e.GREATER;case"notequal":return e.NOTEQUAL;case"gequal":return e.GEQUAL;case"always":return e.ALWAYS}}(a,g.depthFunc):a.ALWAYS),a.depthMask(g.depthWrite)):a.disable(a.DEPTH_TEST),"none"===g.cull?a.disable(a.CULL_FACE):(a.enable(a.CULL_FACE),a.cullFace("front"===g.cull?a.FRONT:a.BACK))),x.draw(),g&&(a.disable(a.DEPTH_TEST),a.disable(a.CULL_FACE),a.depthMask(!0),a.depthFunc(a.LESS),a.cullFace(a.BACK)),p?.markDirty(),n?.(),o&&!1!==e.swap&&o()}#eu(e,t){let r=e.depthTest??!1,i=e.depthWrite??r,s=e.cull??"none";return((r||i)&&!t&&(this.#G||(this.#G=!0,console.warn("[VFX-JS] ctx.draw() depthTest / depthWrite needs a target created with depth: true; ignored.")),r=!1,i=!1),r||i||"none"!==s)?{depthTest:r,depthWrite:i,depthFunc:e.depthFunc??"lequal",cull:s}:null}#el(e){let t={};if(t.contentRectUv={value:this.#j.contentRectUv},t.srcRectUv={value:this.#j.srcRectUv},!e)return t;for(let[r,i]of Object.entries(e))t[r]=function(e,t){if("object"==typeof e&&null!==e&&"__brand"in e){if("EffectRenderTarget"===e.__brand)return{value:e[V].getReadTexture()};let r=e[k]();if(r&&r.gl!==t)throw Error("[VFX-JS] This texture belongs to another VFX instance.");return{value:r}}return{value:e}}(i,this.#k);return t}dispose(){for(let e of(this.#W="disposed",this.#H))e();for(let e of(this.#H=[],this.#N))e.resolver.dispose?.();for(let e of(this.#N=[],this.#X=[],this.#O))e.dispose();this.#O=[],this.#D.dispose(),this.#en=[]}}function G(e){return void 0===e?["clamp","clamp"]:"string"==typeof e?[e,e]:[e[0],e[1]]}function q(e,t,r,i,s){let o={__brand:"EffectTexture",get width(){return t()},get height(){return r()},dispose(){i?.()},update(){s?.()}};return Object.defineProperty(o,k,{value:e}),o}function J(e,t,r,i){let s={__brand:"EffectRenderTarget",get width(){return t()},get height(){return r()},dispose:i??(()=>{}),generateMipmaps:()=>e.regenerateMipmaps?.()};return e.getDepthTexture&&(s.depthTexture=q(e.getDepthTexture,t,r)),Object.defineProperty(s,V,{value:e}),s}function j(e){return J({getReadTexture:()=>e.texture,getWriteFbo:()=>e},()=>e.width,()=>e.height)}function K(e){return"CANVAS"===e.tagName&&(e.hasAttribute("layoutsubtree")||"drawable"===e.getAttribute("content"))}function Y(e,t){e.setAttribute("layoutsubtree",""),e.setAttribute("content","drawable"),t?.setAttribute("drawable","")}function Z(e,t){let r=e.getBoundingClientRect(),i=getComputedStyle(e);t.className=e.className,t.style.cssText=e.style.cssText,t.style.width=`${r.width}px`,t.style.height=`${r.height}px`,t.style.display="inline"===i.display?"inline-block":i.display,t.style.boxSizing="border-box"}async function Q(e){let t=await fetch(e),r=await t.blob();return URL.createObjectURL(r)}async function ee(e){let t=Array.from(e.querySelectorAll("img")).filter(e=>e.complete&&e.naturalWidth>0&&function(e){let t=h(e);if(!t||t.startsWith("data:"))return!1;try{return new URL(t,location.href).origin!==location.origin}catch{return!1}}(e));if(0===t.length)return()=>{};let r=new Map,i=[];return await Promise.all(t.map(async e=>{try{let t=h(e),s=await Q(t);r.set(e,t),i.push(s),await new Promise(t=>{e.addEventListener("load",()=>t(),{once:!0}),e.src=s})}catch{}})),()=>{for(let[e,t]of r)e.src=t;for(let e of i)URL.revokeObjectURL(e)}}let et=["margin-top","margin-right","margin-bottom","margin-left"],er=new Set(["IMG","VIDEO","CANVAS","IFRAME","EMBED","OBJECT","INPUT","TEXTAREA","SELECT"]),ei=["position","top","right","bottom","left","float","flex","flex-grow","flex-shrink","flex-basis","align-self","justify-self","place-self","order","grid-column","grid-column-start","grid-column-end","grid-row","grid-row-start","grid-row-end","grid-area"],es=new Set(["top","right","bottom","left"]),eo=["width","height","flex-grow","flex-shrink","min-width","max-width","overflow"],en=new WeakMap,ea=new WeakMap,el=new WeakMap,eu=new WeakMap,eh=new WeakMap,ef=new WeakMap,ec=new WeakMap,ed=new WeakMap,ep=new WeakMap,em=new WeakSet,eg=new WeakMap,ev=new WeakMap,ex=new WeakSet,ew=new WeakSet,ey=/^[\d.e+-]+px$/;function eb(e){if(e)for(let t of[...e])t()}function eE(e,t,r){if("function"==typeof e.moveBefore)try{e.moveBefore(t,r);return}catch{}e.insertBefore(t,r)}function eT(e,t=300){let r=ev.get(e);if(!r)return;let i=new Promise(e=>{let i=t=>{clearTimeout(o),r.delete(s),e(t)},s=()=>i(!0),o=setTimeout(()=>i(!1),t);r.add(s)});return e.requestPaint(),i}function eR(e){if(ex.has(e))return()=>{};ex.add(e);let t=eo.map(t=>[t,e.style.getPropertyValue(t)]),r=getComputedStyle(e),i=e.getBoundingClientRect(),s=(e,t)=>ey.test(e)?e:`${t}px`,o=s(r.width,i.width);return e.style.setProperty("width",o),e.style.setProperty("height",s(r.height,i.height)),e.style.setProperty("flex-grow","0"),e.style.setProperty("flex-shrink","0"),e.style.setProperty("min-width",o),e.style.setProperty("max-width",o),e.style.setProperty("overflow","hidden"),()=>{if(!ex.has(e))return;for(let[r,i]of(ex.delete(e),t))e.style.setProperty(r,i);let r=e.firstElementChild;if(r&&!ew.has(e)){let t=Math.round(r.getBoundingClientRect().height);e.style.setProperty("height",`${t}px`)}}}function eS(e){eg.get(e)?.(),eg.delete(e)}function eC(e,t=!1){requestAnimationFrame(()=>{t||e.getContext("2d")?.clearRect(0,0,e.width,e.height),eS(e)})}async function eF(e,t){Y(e,e.firstElementChild);let r=e.getContext("2d");if(!r)throw Error("Failed to get 2d context from layoutsubtree canvas");let{onCapture:i,maxSize:s,keepDrawn:o}=t,n=new Set;ev.set(e,n);let a=null,l=null,u=new Promise(e=>{l=e}),h=null,f=t=>{if(t){if(t===h)return;h=t}let u=e.firstElementChild;if(!u||0===e.width||0===e.height||0===u.getClientRects().length)return;u.hasAttribute("drawable")||u.setAttribute("drawable",""),r.clearRect(0,0,e.width,e.height),r.drawElementImage(u,0,0),function(e,t){let r=t.querySelectorAll("canvas");if(0===r.length)return;let i=t.getBoundingClientRect();if(i.width<=0||i.height<=0)return;let s=e.canvas.width/i.width,o=e.canvas.height/i.height;for(let t of r){if(0===t.width||0===t.height||!("function"==typeof t.checkVisibility?t.checkVisibility({visibilityProperty:!0,opacityProperty:!0}):"hidden"!==getComputedStyle(t).visibility))continue;let r=function(e,t,r,i){if(t.width<=0||t.height<=0)return null;let s=t.left-e.left,o=t.top-e.top;return s+t.width<=0||o+t.height<=0||s>=e.width||o>=e.height?null:[s*r,o*i,t.width*r,t.height*i]}(i,function(e){let t=e.getBoundingClientRect(),r=getComputedStyle(e),i=Number.parseFloat(r.paddingLeft)||0,s=Number.parseFloat(r.paddingRight)||0,o=Number.parseFloat(r.paddingTop)||0,n=Number.parseFloat(r.paddingBottom)||0,a=e.clientWidth>0?t.width/e.offsetWidth:1,l=e.clientHeight>0?t.height/e.offsetHeight:1;return{left:t.left+(e.clientLeft+i)*a,top:t.top+(e.clientTop+o)*l,width:Math.max(0,e.clientWidth-i-s)*a,height:Math.max(0,e.clientHeight-o-n)*l}}(t),s,o);if(r)try{e.drawImage(t,...r)}catch{}}}(r,u);let f=e.width,c=e.height;if(s&&(f>s||c>s)){let e=Math.min(s/f,s/c);f=Math.floor(f*e),c=Math.floor(c*e)}a&&a.width===f&&a.height===c||(a=new OffscreenCanvas(f,c));let d=a.getContext("2d");if(d){if(d.clearRect(0,0,f,c),d.drawImage(e,0,0,f,c),l){l(a),l=null,eb(n);return}o||r.clearRect(0,0,e.width,e.height),i(a),eb(n)}};e.onpaint=f,e.addEventListener("paint",f),ea.set(e,f);let c=new ResizeObserver(t=>{for(let r of t){let t=r.devicePixelContentBoxSize?.[0];if(t)e.width=t.inlineSize,e.height=t.blockSize;else{let t=r.borderBoxSize?.[0];if(t){let r=window.devicePixelRatio;e.width=Math.round(t.inlineSize*r),e.height=Math.round(t.blockSize*r)}}}e.requestPaint()});c.observe(e,{box:"device-pixel-content-box"}),en.set(e,c);let d=e.firstElementChild;if(d){let t=new ResizeObserver(t=>{if(ex.has(e)||ew.has(e))return;let r=t[0].borderBoxSize?.[0];if(!r)return;let i=`${Math.round(r.blockSize)}px`;i!==e.style.height&&e.style.setProperty("height",i)});t.observe(d),el.set(e,t)}return u}function eP(e){e.onpaint=null,eb(ev.get(e)),ev.delete(e);let t=ea.get(e);t&&(e.removeEventListener("paint",t),ea.delete(e));let r=en.get(e);r&&(r.disconnect(),en.delete(e));let i=el.get(e);i&&(i.disconnect(),el.delete(e))}let eA=["padding-left","padding-right"],eM=["border-left-width","border-right-width"];function ez(e,t){return e===t||ey.test(e)||/^[\d.e+-]+%$/.test(e)||/^(calc|min|max|clamp)\(/.test(e)}async function e_(e,t,r){let i=e.getBoundingClientRect(),s=function(e){let t={width:null,height:null};if("function"!=typeof e.computedStyleMap||er.has(e.tagName))return t;let r=e.computedStyleMap(),i=e=>r.get(e)?.toString()??"auto",s=i("position");if("fixed"!==s&&"absolute"!==s)return t;let o=(t,r,s)=>{let o=i(r),n=i(s);if("auto"!==i(t)||"auto"===o||"auto"===n)return null;let a=[`margin-${r}`,`margin-${s}`].map(r=>{let s=i(r);return"height"===t&&s.includes("%")?getComputedStyle(e).getPropertyValue(r):s}).filter(e=>"auto"!==e);return`calc(${["100%",o,n,...a].join(" - ")})`};return{width:o("width","left","right"),height:o("height","top","bottom")}}(e),o=s.width?null:function(e,t){let r=e=>({width:`${e}px`,minWidth:"auto",maxWidth:"none"});if("function"!=typeof e.computedStyleMap)return e.style.width.endsWith("px")?r(t.width):null;let i=e.computedStyleMap(),s=e=>i.get(e)?.toString()??"auto",o=er.has(e.tagName),n=getComputedStyle(e),a=s("width");if("auto"===a){if(!o)return null;a=n.width}if(!ey.test(a))return null;let l=s("display");if(!o&&"inline"===l)return r(t.width);let u=s("min-width"),h=s("max-width");if("table"===l||"inline-table"===l||!ez(u,"auto")||!ez(h,"none"))return r(function(e){let t=t=>Number.parseFloat(e.getPropertyValue(t))||0,r=Number.parseFloat(e.width)||0;if("border-box"!==e.boxSizing)for(let e of[...eA,...eM])r+=t(e);return r}(n));let f=[...eA.map(s),...eM.map(e=>n.getPropertyValue(e))].filter(e=>""!==e&&!/^0(px)?$/.test(e)),c=e=>{if(0===f.length)return e;let t=[e,...f].join(" + ");return"border-box"===s("box-sizing")?`max(${e}, ${t.slice(e.length+3)})`:`calc(${t})`};return{width:c(a),minWidth:"auto"===u?"auto":c(u),maxWidth:"none"===h?"none":c(h)}}(e,i),n=document.createElement("canvas");e.hasAttribute("drawable")||em.add(e),Y(n,e),n.className=e.className;let a=e.getAttribute("style");a&&n.setAttribute("style",a),n.style.setProperty("padding","0"),n.style.setProperty("border","none"),n.style.setProperty("box-sizing","content-box"),n.style.setProperty("background","transparent");let l=getComputedStyle(e),u="inline"===l.display?"block":l.display;n.style.setProperty("display",u);let h="function"==typeof e.computedStyleMap?e.computedStyleMap():null,f=e=>h?.get(e)?.toString()??l.getPropertyValue(e),c=e=>l.getPropertyValue(e),d=!!(s.width||o);for(let e of et){let t="margin-left"!==e&&"margin-right"!==e||d;n.style.setProperty(e,t?f(e):c(e))}let p="absolute"===l.position||"fixed"===l.position,m=(e,t)=>p&&"auto"===f(e)&&"auto"===f(t),g=m("left","right"),v=m("top","bottom");for(let e of ei){let t=c(e);es.has(e)&&(t=("left"===e||"right"===e?g:v)?c(e):f(e)),n.style.setProperty(e,t)}s.width?n.style.setProperty("width",s.width):o?(n.style.setProperty("width",o.width),n.style.setProperty("min-width",o.minWidth),n.style.setProperty("max-width",o.maxWidth)):n.style.setProperty("width","100%"),s.height?(n.style.setProperty("height",s.height),ew.add(n)):n.style.height||n.style.setProperty("height",`${i.height}px`);let x=window.devicePixelRatio;n.width=Math.round(i.width*x),n.height=Math.round(i.height*x),t.stillCover&&eg.set(n,function(e,t){let r=e.getBoundingClientRect(),i=e.cloneNode(!0),s=[e,...e.querySelectorAll("*")],o=[i,...i.querySelectorAll("*")],n=[],a=[];for(let e=0;e<s.length&&e<o.length;e++){let t=s[e],r=o[e];(t.scrollTop||t.scrollLeft)&&n.push([r,t.scrollTop,t.scrollLeft]),t instanceof HTMLScriptElement?a.push([r,document.createComment("script")]):t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?a.push([r,function(e){let t=document.createElement("canvas"),r=e instanceof HTMLVideoElement?e.videoWidth:e.width,i=e instanceof HTMLVideoElement?e.videoHeight:e.height;t.width=Math.max(1,r),t.height=Math.max(1,i),Z(e,t);try{t.getContext("2d")?.drawImage(e,0,0,t.width,t.height)}catch{}return t}(t)]):t instanceof HTMLIFrameElement?a.push([r,function(e){let t=document.createElement("div");return Z(e,t),t}(t)]):t instanceof HTMLInputElement&&r instanceof HTMLInputElement?(r.value=t.value,r.checked=t.checked):t instanceof HTMLTextAreaElement&&r instanceof HTMLTextAreaElement?r.value=t.value:t instanceof HTMLSelectElement&&r instanceof HTMLSelectElement?r.selectedIndex=t.selectedIndex:t instanceof HTMLMediaElement&&r.removeAttribute("autoplay")}for(let[e,t]of a)e.replaceWith(t);i.setAttribute("aria-hidden","true");let l=i.style;l.setProperty("position","fixed"),l.setProperty("left",`${r.left}px`),l.setProperty("top",`${r.top}px`),l.setProperty("width",`${r.width}px`),l.setProperty("height",`${r.height}px`),l.setProperty("box-sizing","border-box"),l.setProperty("margin","0"),l.setProperty("pointer-events","none"),l.setProperty("z-index",t.toString()),e.parentNode?.insertBefore(i,e);let u=i.getBoundingClientRect();for(let[e,t,i]of((u.left!==r.left||u.top!==r.top)&&(l.setProperty("left",`${2*r.left-u.left}px`),l.setProperty("top",`${2*r.top-u.top}px`)),n))e.scrollTop=t,e.scrollLeft=i;return function(e,t){let r=e[0],i=t[0];if(!r||!i||"function"!=typeof r.getAnimations)return;let s=(e,t)=>{if(!("animationName"in e))return null;let r=e.effect,i=r?.target,s=i?t.get(i):void 0;return void 0===s?null:`${s}|${r?.pseudoElement??""}|${e.animationName}`},o=new Map(t.map((e,t)=>[e,t])),n=new Map;for(let e of i.getAnimations({subtree:!0})){let t=s(e,o);t&&n.set(t,e)}let a=new Map(e.map((e,t)=>[e,t]));for(let e of r.getAnimations({subtree:!0})){let t=s(e,a),r=t&&n.get(t);r&&(r.currentTime=e.currentTime,r.pause())}}(s,o),()=>{i.remove()}}(e,t.stillCover.zIndex)),eu.set(e,e.style.margin),eh.set(e,e.style.width),ef.set(e,e.style.boxSizing),e.parentNode?.insertBefore(n,e),getComputedStyle(n).display,eE(n,e,null),e.style.setProperty("margin","0"),e.style.setProperty("width","100%"),e.style.setProperty("box-sizing","border-box"),(s.width||s.height)&&(ec.set(e,e.style.position),e.style.setProperty("position","static")),s.height&&(ed.set(e,e.style.height),e.style.setProperty("height","100%"));let w=await ee(e);if(r?.aborted)throw w(),Error("[VFX-JS] Wrapping was aborted.");ep.set(n,w);let y=await eF(n,t);if(r?.aborted)throw eP(n),Error("[VFX-JS] Wrapping was aborted.");return{canvas:n,initialCapture:y}}function eL(e,t){eP(e),eS(e);let r=ep.get(e);r&&(r(),ep.delete(e));let i=e.parentNode;i&&t.parentNode===e&&eE(i,t,e),e.remove(),em.has(t)&&(t.removeAttribute("drawable"),em.delete(t));let s=eu.get(t);void 0!==s&&(t.style.margin=s,eu.delete(t));let o=eh.get(t);void 0!==o&&(t.style.width=o,eh.delete(t));let n=ef.get(t);void 0!==n&&(t.style.boxSizing=n,ef.delete(t));let a=ec.get(t);void 0!==a&&(t.style.position=a,ec.delete(t));let l=ed.get(t);void 0!==l&&(t.style.height=l,ed.delete(t))}function eI(){if(void 0!==t)return t;try{let e=document.createElement("canvas"),r=e.getContext("2d");t=null!==r&&"function"==typeof r.drawElementImage&&"function"==typeof e.requestPaint}catch{t=!1}return t}e.s(["i",0,eR,"I",0,eE,"n",0,eC,"a",0,eT,"S",0,eF,"F",0,eP,"Y",0,eL,"c",0,e_],18289),e.s(["f",0,eI],7150);let eU={supportsHtmlInCanvas:eI,wrapElement:e_,unwrapElement:eL,requestCapture:eT,releaseFirstCapture:eC,dom2canvas:f,nextFrame:()=>new Promise(e=>requestAnimationFrame(()=>e()))};function eB(e){let t=e.getBoundingClientRect();return 0===t.width&&0===t.height&&0===e.getClientRects().length?null:t}async function ek(e,t,r,i,s){let o={width:0,height:0},n=await function(e,t,r,i,s){let o={...eU,...e.dom};if(t instanceof HTMLImageElement||t instanceof HTMLVideoElement||t instanceof HTMLCanvasElement)return eX(e,t,r,i,s);let n=t.getBoundingClientRect();return 0===t.getClientRects().length||0===n.width||0===n.height?Promise.reject(Error("[VFX-JS] capture() needs an element with a size.")):o.supportsHtmlInCanvas()?eH(e,o,t,r,i,s):eW(e,o,t,r,i)}(e,t,r,o,s);try{e.uploadTexture(o.texture)}catch(e){throw n.dispose(),o.texture.dispose(),e}let a=!1,l=!1,u={x:0,y:0,width:0,height:0},h=!1,f=()=>{let e=n.inBox?.()===!1?null:eB(n.box);h=null!==e,e&&(u.x=e.left,u.y=e.top,n.sizeFollowsBox&&(o.width=e.width,o.height=e.height),u.width=o.width,u.height=o.height)},c=()=>a?Promise.resolve(!1):n.update(),d=q(()=>a?(l||(l=!0,console.warn("[VFX-JS] This capture is disposed.")),e.emptyTexture):o.texture,()=>a?0:e.textureSize(o.texture,"w"),()=>a?0:e.textureSize(o.texture,"h"),void 0,()=>{c().catch(e=>console.error(e))});return f(),{capture:{texture:d,get rect(){return h?u:null},update:c,dispose(){a||(a=!0,n.dispose(),o.texture.dispose(),i?.())}},tick(){!a&&(f(),n.uploadEveryFrame&&(o.texture.needsUpdate=!0))},resize(){a||n.resize?.()}}}function eV(){return Error("[VFX-JS] capture() was aborted.")}function eD(e,t){return t?t.aborted?Promise.reject(eV()):new Promise((r,i)=>{let s=()=>i(eV());t.addEventListener("abort",s,{once:!0}),e.then(r,i).finally(()=>t.removeEventListener("abort",s))}):e}function eO(e,t){let r=t.getBoundingClientRect();e.width=r.width,e.height=r.height}function eN(e){let t=e.getBoundingClientRect();return[Math.ceil(t.width),Math.ceil(t.height)]}async function eX(e,t,r,i,s){t instanceof HTMLImageElement?await eD(t.decode(),s):t instanceof HTMLVideoElement&&t.readyState<3&&await function(e,t){let r=function(e){if(e.error)return"failed to load";let t=e.querySelectorAll("source[src]");return e.srcObject||e.src||0!==t.length?"none"===e.preload&&e.paused&&!e.autoplay&&0===e.readyState?'is not loading (preload="none"). Call play() first':null:"has no source"}(e);if(r)return Promise.reject(Error(`[VFX-JS] capture() got a video that ${r}.`));let i=e.querySelectorAll("source"),s=i[i.length-1];return new Promise((r,i)=>{let o=()=>{e.removeEventListener("canplay",n),e.removeEventListener("error",a),s?.removeEventListener("error",a),t?.removeEventListener("abort",l)},n=()=>{o(),r()},a=()=>{o(),i(Error("[VFX-JS] capture() could not load the video."))},l=()=>{o(),i(eV())};t?.aborted?i(eV()):(e.addEventListener("canplay",n),e.addEventListener("error",a),s?.addEventListener("error",a),t?.addEventListener("abort",l))})}(t,s);let[o,n]=t instanceof HTMLImageElement?[t.naturalWidth,t.naturalHeight]:t instanceof HTMLVideoElement?[t.videoWidth,t.videoHeight]:[t.width,t.height];if(0===o||0===n)throw Error("[VFX-JS] capture() got a source with no pixels.");if(o>e.maxTextureSize||n>e.maxTextureSize)throw Error(`[VFX-JS] capture() got a source larger than the max texture size (${e.maxTextureSize}px).`);i.texture=e.createTexture(t);let a=t.style.opacity;if(r.hide){let e=t instanceof HTMLVideoElement;t.style.setProperty("opacity",e?"0.0001":"0")}let l=()=>{r.hide&&(t.style.opacity=a)};return t instanceof HTMLImageElement?{box:t,sizeFollowsBox:!0,uploadEveryFrame:!1,update:async()=>(await t.decode(),i.texture.needsUpdate=!0,!0),dispose:l}:{box:t,sizeFollowsBox:!0,uploadEveryFrame:!0,update:()=>Promise.resolve(!0),dispose:l}}async function eH(e,t,r,i,s,o){let n,a,l=r.parentNode;try{let l=t.wrapElement(r,{onCapture:t=>{s.texture=e.refreshTexture(s.texture,t),eO(s,n)},maxSize:e.maxTextureSize,keepDrawn:!i.hide,stillCover:i.hide?void 0:{zIndex:e.stillZIndex}},o);({canvas:n,initialCapture:a}=await eD(l,o))}catch(i){let e=r.parentNode;throw e!==l&&e instanceof HTMLCanvasElement&&t.unwrapElement(e,r),i}return s.texture=e.createTexture(a),eO(s,n),t.releaseFirstCapture(n,!i.hide),i.hide||await t.nextFrame(),{box:n,inBox:()=>r.parentNode===n,sizeFollowsBox:!1,uploadEveryFrame:!1,update:async()=>await t.requestCapture(n,1e3)??!1,dispose(){t.unwrapElement(n,r)}}}async function eW(e,t,r,i,s){let o=r.style.opacity,n=""===o?1:Number.parseFloat(o),[a,l]=eN(r),u=await t.dom2canvas(r,n,void 0,e.maxTextureSize);if(0===u.width||0===u.height)throw Error("[VFX-JS] capture() got an empty snapshot.");s.texture=e.createTexture(u),s.width=a,s.height=l,i.hide&&r.style.setProperty("opacity","0");let h=!1,f=null,c=null,d=async()=>{let i=s.texture.source,[o,a]=eN(r),l=await t.dom2canvas(r,n,i instanceof OffscreenCanvas?i:void 0,e.maxTextureSize);return!h&&0!==l.width&&0!==l.height&&(s.texture=e.refreshTexture(s.texture,l),s.width=o,s.height=a,!0)},p=()=>h?Promise.resolve(!1):f?c??=f.catch(()=>{}).then(()=>(c=null,p())):f=d().finally(()=>{f=null});return{box:r,sizeFollowsBox:!1,uploadEveryFrame:!1,update:p,resize(){let[e,t]=eN(r);(e!==s.width||t!==s.height)&&p().catch(e=>console.error(e))},dispose(){h=!0,i.hide&&(r.style.opacity=o)}}}let e$={t:0,x:0};class eG{enabled=!1;#eh=null;#ef=[0,0];#ec=[];#ed=!1;#ep=null;#em=null;#eg=e$;#ev=null;#ex=null;#ew=null;#ey(){let e=this.#ex,t=this.#ev;this.#ex=null,this.#ev=null;try{e?.()}finally{t?.()}}snapshot(){return this.#ey(),this.#ew=null,this.#ep=null,this.enabled=!0,new Promise(e=>this.#ec.push(e))}start(e){return this.#ey(),this.#ep=e,this.#ex=e.onEnd??null,this.#em=null,this.#eg=e$,this.#ed=!1,this.enabled=null!==this.#ew,new Promise(e=>{this.#ev=e})}cancel(){this.#ey(),this.#ew=null,this.#ep=null,this.#ed=!1,this.enabled=!1,this.#eb()}#eb(){let e=this.#ec;for(let t of(this.#ec=[],e))t()}setLiveSource(e){this.#ew=e,e&&(this.#ed||this.#ep)&&(this.enabled=!0)}get frame(){let e=this.#eh;return e&&(this.#ed||this.#ep)?{from:e,progress:this.#eg,holding:null===this.#ep}:null}cut(){this.#ep&&(this.#ep=null,this.#ey())}update(e){let t=this.#ep;if(!t)return;null===this.#em&&(this.#em=e.time);let r=(e.time-this.#em)/t.duration;if(r>=1){this.#ep=null,this.#ey();return}let i=Math.max(r,0);this.#eg={t:function(e,t){return"function"==typeof e?e(t):"linear"===e?t:t*t*(3-2*t)}(t.ease,i),x:i}}#eE(e){let[t,r]=e.dims.elementPixel;return this.#eh&&this.#ef[0]===t&&this.#ef[1]===r||(this.#eh?.dispose(),this.#eh=e.createRenderTarget({size:[t,r]}),this.#ef=[t,r]),this.#eh}render(e){this.#ec.length>0&&(e.blit(e.src,this.#eE(e)),this.#ed=!0,this.#eb());let t=this.#ew?.()??null;(t&&(this.#ed||this.#ep)&&e.blit(t,this.#eE(e)),this.#eh&&this.#ed)?e.blit(this.#eh):(this.#ew&&this.#ep||(this.enabled=!1),e.blit(e.src))}dispose(){this.#ew=null,this.#eh=null,this.#ef=[0,0],this.#ey(),this.#eb()}}class eq{effect;#eT;#e=null;constructor(e,t){this.effect=e,this.#eT=t}get enabled(){return null!==this.#e&&"function"==typeof this.effect.render&&!1!==this.effect.enabled}start(e){this.#e=e,this.effect.start?.(e)}end(){null!==this.#e&&(this.#e=null,this.effect.end?.())}#eR(e){let t=this.#eT.frame,r=this.#e;return t&&r?{...e,from:t.from,progress:t.progress,holding:t.holding,reverse:r.reverse,run:r,cut:()=>this.#eT.cut()}:null}init(e){return this.effect.init?.(e)}update(e){let t=this.#eT.frame;if(!t||t.holding)return;let r=this.#eR(e);r&&this.effect.update?.(r)}render(e){let t=this.#eR(e);t&&this.effect.render?this.effect.render(t):e.blit(e.src)}outputRect(e){return this.#e?this.effect.outputRect?.(e):void 0}dispose(){this.effect.dispose?.()}}let eJ=function(e=function(){let e=globalThis.navigation,t=e?.currentEntry;if(t&&!(t.index<0)&&t.key)return{index:t.index,key:t.key}}){let t,r=new Map;return{pick(i){let s=e();if(!s)return i;let o=t??s;t=s;let n=r.get(o.key);if(s.index<o.index&&n)return{...n,reverse:!0};let a=r.get(s.key);return s.index>o.index&&a?a:(r.set(s.key,i),i)}}}();class ej{#eS;#eC;#eF;#eP=null;#eA;#eM=[];#ez;#e_=null;constructor(e,t){this.#eS=e,this.#ez=[t.scrollLeft,t.scrollTop];let r=t.parentElement??t,i=r.getBoundingClientRect(),s=document.createElement("canvas");s.inert=!0,s.setAttribute("aria-hidden","true"),s.setAttribute("data-vfx-keep-playing","");let o=s.style;o.setProperty("position","absolute"),o.setProperty("left","0px"),o.setProperty("top","0px"),o.setProperty("margin","0"),o.setProperty("padding","0"),o.setProperty("border","none"),o.setProperty("pointer-events","none");let n=t.cloneNode(!1);n.removeAttribute("id"),n.style.setProperty("margin","0"),n.style.setProperty("box-sizing","border-box"),n.style.setProperty("overflow","hidden"),s.append(n),Y(s,n),r.parentNode&&r!==t?r.after(s):document.body.append(s);let a=s.getBoundingClientRect();o.setProperty("left",`${i.left-a.left}px`),o.setProperty("top",`${i.top-a.top}px`),getComputedStyle(n).display,this.#eC=s,this.#eF=n,this.#eL(i.width,i.height),this.#eA=e.freezeInside(s),r!==t&&"u">typeof ResizeObserver&&(this.#e_=new ResizeObserver(()=>{let{width:e,height:t}=r.getBoundingClientRect();this.#eL(e,t)}),this.#e_.observe(r))}#eL(e,t){for(let r of[this.#eC,this.#eF])r.style.setProperty("width",`${e}px`),r.style.setProperty("height",`${t}px`)}get texture(){return this.#eP?.texture??null}keep(e,t){for(let r of e){let e=r.parentNode;if(t){let i=e?document.createComment(""):null;i&&e?.insertBefore(i,r),this.#eM.push({node:r,marker:i,onReturn:t})}eE(this.#eF,r,null)}[this.#eF.scrollLeft,this.#eF.scrollTop]=this.#ez,this.#eP??=this.#eS.captureLive(this.#eC)}dispose(){let e=this.#eM;this.#eM=[];try{for(let{node:t,marker:r,onReturn:i}of(this.#eP?.dispose(),this.#eP=null,e)){let e=r?.parentNode;e&&eE(e,t,r),r?.remove();try{i(t)}catch(e){console.error("[VFX-JS] keepPlaying onReturn failed:",e)}}}finally{this.#e_?.disconnect(),this.#eC.remove(),this.#eA()}}}let eK={keepPlaying:()=>{}};function eY(e,t){let r=void 0!==t.transition?t.params:void 0===e.params&&void 0===t.params?void 0:{...e.params,...t.params};return{transition:t.transition??e.transition,params:r,reverse:t.reverse??e.reverse,duration:t.duration??e.duration,overflow:t.overflow??e.overflow,ease:t.ease??e.ease,keepPlaying:t.keepPlaying??e.keepPlaying}}function eZ(e,t={}){let r=eY(e,t);return{transition:r.transition??u,params:r.params,reverse:r.reverse??!1,duration:r.duration??.6,overflow:r.overflow,ease:r.ease,keepPlaying:r.keepPlaying??!1}}let eQ=new WeakMap;function e0(e,t){return new Promise((r,i)=>{let s=setTimeout(()=>r(!1),t);e.then(()=>{clearTimeout(s),r(!0)},e=>{clearTimeout(s),i(e)})})}class e1{#eI;#eU;#eB;#ek;#eV;#eD;#eO;#eN;#eX;#eH=[];#eW=[];#e$=!1;#eG=!1;#eq=!1;#eJ=0;#ej=null;#eK=!1;#eY=!1;#eZ=null;#eQ=[];#e0=null;#e1=null;#e2=null;#e3=null;#e4;constructor(e,t,i={},s,o=new eG,n=eJ,a=function(){var e,t;let i,s,o;return r??=(e=globalThis.navigation,t=window,s=0,e?.addEventListener("navigate",e=>{if("replace"===e.navigationType)return;let t=e.hasUAVisualTransition&&e.destination?.key;i=t?{id:++s,key:t}:void 0}),!e&&t&&t.addEventListener("popstate",e=>{i=e.hasUAVisualTransition?{id:++s,href:t.location.href}:void 0},!0),o=()=>{i=void 0},t?.addEventListener("pointerdown",o,!0),t?.addEventListener("keydown",o,!0),{current(){if(i)return(i.key?e?.currentEntry?.key===i.key:t?.location.href===i.href)?i.id:void 0}})}(),l=t=>new ej(e,t)){this.#e4=l,this.#eX=s,this.#eI=e,this.#eU=t,this.#eB=i,this.#ek=o,this.#eV=n,this.#eD=a,this.#eN=i.keepWrapped??!1}get running(){return null!==this.#ej}show(e,t={}){this.#e5();let r=this.#e6(e),{remove:i=!1,...s}=t;if(!this.running&&this.#e8(r))return Promise.resolve();let o=this.#eB.slideSpec?.(r),n=o?eY(o,s):s;return this.#e7(e=>{let t=Array.from(this.#eU.children).filter(e=>e!==r&&!e.hidden);for(let s of(e.keepPlaying(t,e=>{i?e.remove():e.hidden=!0}),r.parentElement!==this.#eU&&this.#eU.append(r),Array.from(this.#eU.children)))s!==r&&(i?s.remove():s.hidden=!0);r.hidden=!1},n)}#e6(e){let t=this.#eU,r="number"==typeof e?t.children[e]:"string"==typeof e?t.querySelector(e):e;if(!r)throw TypeError(`[VFX-JS] show(): no slide for ${e}.`);if(r.parentElement!==t&&(r.isConnected||t.contains(r)))throw TypeError("[VFX-JS] show(): the slide must be a direct child of the container.");return r}#e8(e){return e.parentElement===this.#eU&&!e.hidden&&Array.from(this.#eU.children).every(t=>t===e||t.hidden)}run(e,t={}){let r=this.#eK?void 0:this.#eD.current();if(void 0!==r&&r!==this.#eO)return this.#eO=r,this.#e7(async r=>{await e(r);let i="function"==typeof t?t():t;this.#eB.autoReverse&&this.#eV.pick(i)},{duration:0});if(!this.#eB.autoReverse)return this.#e7(e,t);let i="function"==typeof t?void 0:t.keepPlaying??this.#eB.keepPlaying;return this.#e7(e,()=>this.#eV.pick("function"==typeof t?t():t),i)}async #e7(e,t,r){if(this.#eK)return void await e(eK);this.#e5();let i=++this.#eJ;this.#ej=i;try{await this.#e(i,e,t,r)}finally{this.#ej===i&&(this.#ej=null),this.#eJ===i&&(this.#e5(i),this.#eA(),this.#e9(),this.#te())}}async #e(e,t,r,i){let s,o=()=>e===this.#eJ,n=!1,a={keepPlaying:(t,r)=>{n&&o()&&this.#tt(e,t,r)}},l=!1,u=async()=>{l||(l=!0,await t(a))};if(this.#eI.reducedMotion){await u(),"function"==typeof r&&r();return}let h=async()=>{this.#tr(),this.#e5(e),this.#ek.cancel(),await u(),o()&&(this.#eY&&this.#eN&&await this.#eI.update(this.#eU),this.#ti(e))},f=null;if("function"!=typeof r){if(f=this.#ts(eZ(this.#eB,r)),!o())return u();if(null===f)return h()}this.#to();try{await this.#tn(f?.slots??null,o,!0)}catch(e){return console.error("[VFX-JS] transition failed to wrap the element; cutting to the new content.",e),u()}if(!o())return u();this.#eW.push(this.#eI.lockSize(this.#eU)),this.#eW.push(this.#eI.forceRender(this.#eU));let c=await e0(this.#ek.snapshot(),1e3);if(!o())return u();if(!c){this.#ta(),await u(),o()&&this.#ti(e);return}f&&this.#tl(e,f),n=f?f.keepPlaying:i??this.#eB.keepPlaying??!1;try{await u(),"function"==typeof r&&o()&&(s=r())}catch(t){throw o()&&(this.#tr(),this.#e5(e),this.#ek.cancel(),this.#ti(e)),t}finally{n=!1}if(!o())return;if(null===f){if(f=this.#ts(eZ(this.#eB,s)),!o())return;if(null===f)return h();f.keepPlaying||this.#e5(e);try{await this.#tn(f.slots,o,!1)}catch(e){return console.error("[VFX-JS] transition failed to swap the effects; cutting to the new content.",e),h()}if(!o())return;this.#tl(e,f)}this.#to();try{await this.#tu()}catch(e){console.error("[VFX-JS] transition waitFor failed:",e)}if(!o()||(await this.#eI.updateInTime(this.#eU)||this.#eG||(this.#eG=!0,console.warn("[VFX-JS] transition: the new content was not captured in time; it may pop in during the run.")),!o())||(await new Promise(e=>requestAnimationFrame(()=>e())),!o()))return;let d=this.#ek.start({duration:f.run.duration,ease:f.ease,onEnd:()=>{this.#tr(e),this.#e5(e)}}),p=await e0(d,1e3*f.run.duration+1e3);o()&&(p||this.#ta(),this.#ti(e))}#ts(e){let t,r;if(e.duration<=0)return null;let i=e.transition;if("function"!=typeof i&&!this.#th(i))return null;try{({transition:t,slots:r}=this.#tf(i,e.params))}catch(e){return console.error(`[VFX-JS] transition "${i.name}" constructor failed; cutting to the new content.`,e),null}let s={reverse:e.reverse,duration:e.duration},o=e.overflow??t.overflow;return void 0!==o&&(s.overflow=o),{run:s,ease:e.ease??t.ease??"smoothstep",slots:r,keepPlaying:e.keepPlaying}}#th(e){let t=eQ.get(e);return t&&t!==this?(this.#eq||(this.#eq=!0,console.warn(`[VFX-JS] transition "${e.name??"unnamed"}" instance is running in another container; cutting to the new content. Pass the class to share it.`)),!1):(this.#e1!==e&&this.#te(),eQ.set(e,this),this.#e1=e,!0)}#te(){let e=this.#e1;this.#e1=null,e&&eQ.get(e)===this&&eQ.delete(e)}#tl(e,{run:t,slots:r}){for(let i of(this.#tr(),this.#e2={id:e,slots:r},r))i.start(t)}#ta(){this.#e$||(this.#e$=!0,console.warn("[VFX-JS] transition target did not render in time; cutting to the new content.")),this.#tr(),this.#e5(),this.#ek.cancel()}cancel(){let e=++this.#eJ;this.#ej=null,this.#tr(),this.#e5(),this.#ek.cancel(),this.#eA(),this.#e9(),this.#te(),this.#ti(e)}destroy(){this.#eK||(this.#eK=!0,this.cancel(),this.#e0=null,this.#eX?.())}#to(){this.#eH.push(this.#eI.freezeInside(this.#eU))}#e9(){let e=this.#eW;for(let t of(this.#eW=[],e))t()}#eA(){let e=this.#eH;for(let t of(this.#eH=[],e))t()}#tf(e,t){var r;let i,s,o,n=this.#e0;if(n?.key.source===e&&("function"!=typeof e||(r=n.key.params,i=r??{},s=t??{},(o=Object.keys(i)).length===Object.keys(s).length&&o.every(e=>{var t,r;return e in s&&(t=i[e],r=s[e],Array.isArray(t)&&Array.isArray(r)?t.length===r.length&&t.every((e,t)=>e===r[t]):t===r)}))))return n;let a="function"==typeof e?new e(t):e,l=[new eq(a,this.#ek)];return this.#e0={key:{source:e,params:t},transition:a,slots:l},{transition:a,slots:l}}#tt(e,t,r){let i="function"==typeof t[Symbol.iterator]?Array.from(t):[t];if(0!==i.length)try{if(this.#e3?.id!==e){this.#e5();let t=this.#e4(this.#eU);this.#e3={id:e,from:t},this.#ek.setLiveSource(()=>t.texture)}this.#e3.from.keep(i,r)}catch(t){console.error("[VFX-JS] transition failed to keep the old content; using a snapshot.",t),this.#e5(e)}}#e5(e){let t=this.#e3;t&&(void 0===e||t.id===e)&&(this.#e3=null,this.#ek.setLiveSource(null),t.from.dispose())}#tr(e){let t=this.#e2;if(t&&(void 0===e||t.id===e))for(let e of(this.#e2=null,t.slots))e.end()}async #tn(e,t,r){var i;if(this.#eZ&&await this.#eZ,!t())return;let s=null!==e?[this.#ek,...e]:this.#eY?this.#eQ:[this.#ek];if(!this.#eY){let e=this.#eI.addHTMLWithStill(this.#eU,{effect:s}).then(()=>{this.#eY=!0,this.#eQ=s}).finally(()=>{this.#eZ=null});this.#eZ=e,await e;return}if(i=this.#eQ,!(s.length===i.length&&s.every((e,t)=>e===i[t]))){this.#eQ=s;let e=this.#eI.updateEffects(this.#eU,s).finally(()=>{this.#eZ=null});this.#eZ=e,await e}r&&await this.#eI.update(this.#eU)}#ti(e){if(this.#eN&&!this.#eK)return;let t=()=>{e===this.#eJ&&this.#eY&&(this.#eY=!1,this.#eQ=[],this.#eI.remove(this.#eU))};this.#eZ?this.#eZ.then(t,()=>{}):t()}#tu(){let e=this.#eB.waitFor??"media";return"none"===e?Promise.resolve():"media"===e?function(e,t,r=300){let i=[];for(let t of e.querySelectorAll("img, video")){let e="IMG"===t.tagName;(e?t.complete:t.readyState>=2)||function(e){if("IMG"===e.tagName){let t;return"lazy"===e.loading&&(!((t=e.getBoundingClientRect()).right>0)||!(t.bottom>0)||!(t.left<window.innerWidth)||!(t.top<window.innerHeight))}return"none"===e.preload}(t)||i.push(new Promise(r=>{let i=()=>r();t.addEventListener(e?"load":"loadeddata",i,{once:!0}),t.addEventListener("error",i,{once:!0})}))}return(t&&i.push(t),0===i.length)?Promise.resolve():new Promise(e=>{let t=setTimeout(e,r),s=()=>{clearTimeout(t),e()};Promise.all(i).then(s,s)})}(this.#eU,document.fonts?.ready):e(this.#eU)}}let e2=`
precision highp float;
in vec3 position;
void main() {
    gl_Position = vec4(position, 1.0);
}
`,e3=`
precision highp float;
attribute vec3 position;
void main() {
    gl_Position = vec4(position, 1.0);
}
`,e4=`
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
`,e5=`precision highp float;
uniform vec2 resolution;
uniform vec2 offset;
uniform float time;
uniform bool autoCrop;
uniform sampler2D src;
out vec4 outColor;
`,e6=`vec4 readTex(sampler2D tex, vec2 uv) {
    if (autoCrop && (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.)) {
        return vec4(0);
    }
    return texture(tex, uv);
}`,e8={none:e4,uvGradient:`
    ${e5}
    ${e6}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        outColor = vec4(uv, sin(time) * .5 + .5, 1);

        vec4 img = readTex(src, uv);
        outColor *= smoothstep(0., 1., img.a);
    }
    `,rainbow:`
    ${e5}
    ${e6}

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
    ${e5}
    ${e6}

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
    ${e5}
    ${e6}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        float b = sin(time * 2.) * 32. + 48.;
        uv = floor(uv * b) / b;
        outColor = readTex(src, uv);
    }
    `,rgbGlitch:`
    ${e5}
    ${e6}

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
    ${e5}
    ${e6}

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

    ${e5}
    ${e6}

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
    ${e5}
    ${e6}

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
    ${e5}
    ${e6}

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
    ${e5}
    ${e6}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        outColor = readTex(src, uv) * (sin(time * 5.) * 0.2 + 0.8);
    }

    `,spring:`
    ${e5}
    ${e6}

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        uv = (uv - .5) * (1.05 + sin(time * 5.) * 0.05) + .5;
        outColor = readTex(src, uv);
    }
    `,duotone:`
    ${e5}
    ${e6}

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
    ${e5}
    ${e6}

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
    ${e5}
    ${e6}

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
    ${e5}
    uniform float enterProgress;
    uniform float leaveProgress;

    ${e6}

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
    ${e5}
    ${e6}

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
    ${e5}
    ${e6}

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
    ${e5}
    ${e6}

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
    ${e5}
    ${e6}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = readTex(src, uv);
        outColor = vec4(1.0 - color.rgb, color.a);
    }
    `,grayscale:`
    ${e5}
    ${e6}

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = readTex(src, uv);
        float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
        outColor = vec4(vec3(gray), color.a);
    }
    `,vignette:`
    ${e5}
    ${e6}

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
    ${e5}
    ${e6}

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
    `},e7={...e8,slitScanTransition:e8.slitScanReveal,warpTransition:e8.warpReveal,pixelateTransition:e8.pixelateReveal,focusTransition:e8.focusReveal};class e9{pass;uniforms;constructor(e){this.uniforms={src:{value:null},offset:{value:new F},resolution:{value:new F},viewport:{value:new P}},this.pass=new U(e,e2,e4,this.uniforms,"premultiplied")}setUniforms(e,t,r){this.uniforms.src.value=e,this.uniforms.resolution.value.set(r.w*t,r.h*t),this.uniforms.offset.value.set(r.x*t,r.y*t)}dispose(){this.pass.dispose()}}function te(e){return"number"==typeof e?{top:e,right:e,bottom:e,left:e}:Array.isArray(e)?{top:e[0],right:e[1],bottom:e[2],left:e[3]}:{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}let tt={top:0,right:0,bottom:0,left:0};function tr(e){return{top:e.top,right:e.right,bottom:e.bottom,left:e.left}}function ti(e){return{top:e.top,left:e.left,right:e.left+Math.ceil(e.right-e.left),bottom:e.top+Math.ceil(e.bottom-e.top)}}function ts(e,t){return{top:e.top-t.top,right:e.right+t.right,bottom:e.bottom+t.bottom,left:e.left-t.left}}function to(e,t,r){return Math.min(Math.max(e,t),r)}function tn(e,t,r,i){let s=Math.min(i-r,t-e);if(s<=0)return 0;let o=to(r,e,t);return(to(i,e,t)-o)/s}class ta{#B;#P;#E;#tc;#V;#td;#tp;#tm;#tg=[];#tv=[];#eP;#tx=new Set;#tw=!1;#ty;#tb=te(0);#tE=null;constructor(e,t,r,i,s,o,n,a){this.#B=e,this.#P=t,this.#E=r,this.#tc=s,this.#V=a,this.#td=i,this.#eP=o,this.#ty=n,this.#tp=i.map(()=>this.#tT()),0===i.length&&(this.#tE=this.#tT()),this.#tm=this.#tR()}#tR(){return this.#td.map((e,t)=>"function"==typeof e.render&&!1!==e.enabled?t:-1).filter(e=>e>=0)}get effects(){return this.#td}get hosts(){return this.#tp}get renderingIndices(){return this.#tm}get stages(){return this.#tv}get hitTestPadBuffer(){return this.#tb}async initAll(){for(let e=0;e<this.#td.length;e++){let t=this.#td[e],r=this.#tp[e];r.setPhase("init");try{t.init&&await t.init(r.ctx)}catch(t){console.error(`[VFX-JS] effect[${e}].init() failed:`,t);for(let t=e-1;t>=0;t--)this.#tS(t),this.#tp[t].dispose();throw this.#tp[e].dispose(),t}r.setPhase("update")}}run(e){if(this.#tw||!e.isVisible)return;this.#tm=this.#tR();let t=this.#tm.length;for(let t of this.#tp)t.setFrameState({time:e.time,deltaTime:e.deltaTime,mouse:e.mouse,mouseViewport:e.mouseViewport,intersection:e.intersection,enterTime:e.enterTime,leaveTime:e.leaveTime,enterProgress:e.enterProgress,leaveProgress:e.leaveProgress,uniforms:e.resolvedUniforms});this.#tC(e);for(let t=0;t<this.#tp.length;t++)this.#tp[t].setFrameDims(this.#tF(t,e)),this.#tp[t].setEffectDims(this.#tP(t,e));for(let e=0;e<this.#td.length;e++){let t=this.#td[e];if(!t.update)continue;let r=this.#tp[e];r.setPhase("update");try{t.update(r.ctx)}catch(r){let t=`${e}:update`;this.#tx.has(t)||(this.#tx.add(t),console.warn(`[VFX-JS] effect[${e}].update() threw; skipping this frame's update:`,r))}}if(0===t)return void(this.#tE??this.#tp[0]).passthroughCopy(this.#eP,e.finalTarget,e.elementRectOnCanvasPx);for(let r=0;r<t;r++){let i,s=this.#tm[r],o=this.#tp[s],n=this.#td[s];if(!n.render)continue;o.setPhase("render"),o.tickAutoUpdates();let a=0===r?this.#eP:this.#tg[r-1].texHandle;o.setSrc(a),r===t-1?i=e.finalTarget:(i=this.#tg[r].rtHandle,o.clearRt(i)),o.setOutput(i);try{n.render(o.ctx)}catch(l){let e=`${s}:render`;this.#tx.has(e)||(this.#tx.add(e),console.warn(`[VFX-JS] effect[${s}].render() threw; falling back to passthrough:`,l));let n=this.#tv[r].outputViewport;null===i?o.passthroughCopy(a,null,n):r===t-1?o.passthroughCopy(a,i,n):o.passthroughCopy(a,i,{x:0,y:0,w:i.width,h:i.height})}o.setPhase("update")}}dispose(){if(!this.#tw){this.#tw=!0;for(let e=this.#td.length-1;e>=0;e--)this.#tS(e),this.#tp[e].dispose();for(let e of(this.#tE&&(this.#tE.dispose(),this.#tE=null),this.#tg))e.fb.dispose();this.#tg=[],this.#tv=[]}}async replaceEffects(e){if(this.#tw)throw Error("[VFX-JS] replaceEffects on disposed chain");let t=this.#td,r=this.#tp,i=new Map;for(let e=0;e<t.length;e++)i.set(t[e],r[e]);let s=Array(e.length),o=[];for(let t=0;t<e.length;t++){let r=e[t],n=i.get(r);if(n)s[t]=n,i.delete(r);else{let e=this.#tT();s[t]=e,o.push({host:e,effect:r})}}for(let e=0;e<o.length;e++){let{host:t,effect:r}=o[e];t.setPhase("init");try{r.init&&await r.init(t.ctx),t.setPhase("update")}catch(r){console.error("[VFX-JS] replaceEffects: new effect init() failed:",r);for(let t=e-1;t>=0;t--){let e=o[t];if(e.effect.dispose)try{e.effect.dispose()}catch(e){console.error("[VFX-JS] dispose during init rollback threw:",e)}e.host.dispose()}throw t.dispose(),r}}for(let[e,t]of i){if(e.dispose)try{e.dispose()}catch(e){console.error("[VFX-JS] effect.dispose() threw during replaceEffects:",e)}t.dispose()}for(let e of this.#tg)e.fb.dispose();this.#tg=[],this.#tv=[],0!==e.length||this.#tE?e.length>0&&this.#tE&&(this.#tE.dispose(),this.#tE=null):this.#tE=this.#tT(),this.#td=e,this.#tp=s,this.#tm=this.#tR(),this.#tx.clear()}#tT(){return new $(this.#B,this.#P,this.#E,this.#eP,this.#tc,this.#V)}#tS(e){let t=this.#td[e];if(t.dispose)try{t.dispose()}catch(t){console.error(`[VFX-JS] effect[${e}].dispose() threw:`,t)}}#tC(e){let t=this.#tm.length;if(this.#tv=Array(t),0===t)return;let r=this.#ty?e.canvasBufferSize:e.elementBufferSize,i=[0,0,r[0],r[1]],s=this.#tA(e),o=i;for(let r=0;r<t;r++){let n=this.#tm[r],a=this.#td[n],l=r===t-1,u=this.#tM(a,o,i,s,e)??o,h=[u[2],u[3]],f=function(e,t){let[r,i,s,o]=e,[n,a,l,u]=t;return l<=0||u<=0?[0,0,1,1]:[(r-n)/l,(i-a)/u,s/l,o/u]}(i,u),c=l?{x:e.elementRectOnCanvasPx.x+u[0],y:e.elementRectOnCanvasPx.y+u[1],w:h[0],h:h[1]}:{x:0,y:0,w:h[0],h:h[1]};this.#tv[r]={dstRect:u,dstBufferSize:h,contentRectUv:f,outputViewport:c},l||this.#tz(r,h),o=u}let[n,a,l,u]=this.#tv[t-1].dstRect;this.#tb=te({top:Math.max(0,a+u-r[1]),right:Math.max(0,n+l-r[0]),bottom:Math.max(0,-a),left:Math.max(0,-n)})}#tM(e,t,r,i,s){if(e.outputRect)return e.outputRect(this.#t_(s,r,t,i))}#t_(e,t,r,i){let s=e.canvasBufferSize[0]/e.canvasSize[0]||1;return{element:this.#ty?e.canvasSize:e.elementSize,elementPixel:this.#ty?e.canvasBufferSize:e.elementBufferSize,canvas:e.canvasSize,canvasPixel:e.canvasBufferSize,pixelRatio:s,contentRect:t,srcRect:r,canvasRect:i}}#tP(e,t){let r=this.#ty?t.canvasBufferSize:t.elementBufferSize,i=[0,0,r[0],r[1]],s=this.#tA(t),o=this.#tm.indexOf(e),n=o<=0?i:this.#tv[o-1].dstRect;return this.#t_(t,i,n,s)}#tz(e,t){let r=this.#tg[e];if(r&&r.fb.width===t[0]&&r.fb.height===t[1])return;r&&r.fb.dispose();let i=new y(this.#B,t[0],t[1]),s=j(i),o=q(()=>i.texture,()=>i.width,()=>i.height);this.#tg[e]={fb:i,rtHandle:s,texHandle:o,bufferSize:t}}#tA(e){let[t,r]=e.canvasBufferSize;if(this.#ty)return[0,0,t,r];let{x:i,y:s}=e.elementRectOnCanvasPx;return[-i,-s,t,r]}#tF(e,t){let r,i,s,o,n,a=this.#tm.indexOf(e);if(a<0)s={x:0,y:0,w:r=t.elementBufferSize[0],h:i=t.elementBufferSize[1]},o=[0,0,1,1],n=[0,0,1,1];else{let e=this.#tv[a];r=e.dstBufferSize[0],i=e.dstBufferSize[1],s=e.outputViewport,o=e.contentRectUv,n=0===a?[0,0,1,1]:this.#tv[a-1].contentRectUv}return{outputBufferW:r,outputBufferH:i,canvasBufferSize:t.canvasBufferSize,outputViewport:s,elementBufferW:t.elementBufferSize[0],elementBufferH:t.elementBufferSize[1],contentRectUv:o,srcRectUv:n}}}class tl{#tL;#tI=new Set;constructor(e){this.#tL=e}freezeInside(e,t){let r={root:e,entries:[]};for(let i of t)!i.frozen&&tu(e,i.element)&&(i.frozen=!0,r.entries.push({e:i,opacity:i.element.style.opacity}),this.#tL.showPlain(i));this.#tI.add(r);let i=!1;return()=>{if(!i){for(let{e}of(i=!0,this.#tI.delete(r),r.entries))e.frozen=!1;requestAnimationFrame(()=>{for(let{e,opacity:t}of r.entries)!e.frozen&&this.#tL.isRegistered(e)&&this.#tL.hidePlain(e,t)})}}}adopt(e,t){let r=this.#tU(e.element);return!!r&&(e.frozen=!0,r.entries.push({e,opacity:t??e.element.style.opacity}),!0)}#tU(e){for(let t of this.#tI)if(tu(t.root,e))return t}}function tu(e,t){return t!==e&&e.contains(t)}function th(e){this.data=e,this.pos=0}function tf(e){this.stream=new th(e),this.output={}}th.prototype.readByte=function(){return this.data[this.pos++]},th.prototype.peekByte=function(){return this.data[this.pos]},th.prototype.readBytes=function(e){return this.data.subarray(this.pos,this.pos+=e)},th.prototype.peekBytes=function(e){return this.data.subarray(this.pos,this.pos+e)},th.prototype.readString=function(e){for(var t="",r=0;r<e;r++)t+=String.fromCharCode(this.readByte());return t},th.prototype.readBitArray=function(){for(var e=[],t=this.readByte(),r=7;r>=0;r--)e.push(!!(t&1<<r));return e},th.prototype.readUnsigned=function(e){var t=this.readBytes(2);return e?(t[1]<<8)+t[0]:(t[0]<<8)+t[1]},tf.prototype.parse=function(e){return this.parseParts(this.output,e),this.output},tf.prototype.parseParts=function(e,t){for(var r=0;r<t.length;r++){var i=t[r];this.parsePart(e,i)}},tf.prototype.parsePart=function(e,t){var r,i=t.label;if(!t.requires||t.requires(this.stream,this.output,e))if(t.loop){for(var s=[];t.loop(this.stream);){var o={};this.parseParts(o,t.parts),s.push(o)}e[i]=s}else t.parts?(r={},this.parseParts(r,t.parts),e[i]=r):t.parser?(r=t.parser(this.stream,this.output,e),t.skip||(e[i]=r)):t.bits&&(e[i]=this.parseBits(t.bits))},tf.prototype.parseBits=function(e){var t={},r=this.stream.readBitArray();for(var i in e){var s=e[i];s.length?t[i]=r.slice(s.index,s.index+s.length).reduce(function(e,t){return 2*e+t},0):t[i]=r[s.index]}return t};let tc=function(){return function(e){return e.readByte()}},td=function(e){return function(t){return t.readBytes(e)}},tp=function(e){return function(t){return t.readString(e)}},tm=function(e){return function(t){return t.readUnsigned(e)}},tg=function(e,t){return function(r,i,s){for(var o=t(r,i,s),n=Array(o),a=0;a<o;a++)n[a]=r.readBytes(e);return n}};var tv,tx={label:"blocks",parser:function(e){for(var t=[],r=0,i=e.readByte();0!==i;i=e.readByte())t.push(e.readBytes(i)),r+=i;var s=new Uint8Array(r);r=0;for(var o=0;o<t.length;o++)s.set(t[o],r),r+=t[o].length;return s}},tw={label:"gce",requires:function(e){var t=e.peekBytes(2);return 33===t[0]&&249===t[1]},parts:[{label:"codes",parser:td(2),skip:!0},{label:"byteSize",parser:tc()},{label:"extras",bits:{future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}}},{label:"delay",parser:tm(!0)},{label:"transparentColorIndex",parser:tc()},{label:"terminator",parser:tc(),skip:!0}]},ty={label:"image",requires:function(e){return 44===e.peekByte()},parts:[{label:"code",parser:tc(),skip:!0},{label:"descriptor",parts:[{label:"left",parser:tm(!0)},{label:"top",parser:tm(!0)},{label:"width",parser:tm(!0)},{label:"height",parser:tm(!0)},{label:"lct",bits:{exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}}}]},{label:"lct",requires:function(e,t,r){return r.descriptor.lct.exists},parser:tg(3,function(e,t,r){return Math.pow(2,r.descriptor.lct.size+1)})},{label:"data",parts:[{label:"minCodeSize",parser:tc()},tx]}]},tb={label:"text",requires:function(e){var t=e.peekBytes(2);return 33===t[0]&&1===t[1]},parts:[{label:"codes",parser:td(2),skip:!0},{label:"blockSize",parser:tc()},{label:"preData",parser:function(e,t,r){return e.readBytes(r.text.blockSize)}},tx]},tE={label:"application",requires:function(e,t,r){var i=e.peekBytes(2);return 33===i[0]&&255===i[1]},parts:[{label:"codes",parser:td(2),skip:!0},{label:"blockSize",parser:tc()},{label:"id",parser:function(e,t,r){return e.readString(r.blockSize)}},tx]},tT={label:"comment",requires:function(e,t,r){var i=e.peekBytes(2);return 33===i[0]&&254===i[1]},parts:[{label:"codes",parser:td(2),skip:!0},tx]},tR=[{label:"header",parts:[{label:"signature",parser:tp(3)},{label:"version",parser:tp(3)}]},{label:"lsd",parts:[{label:"width",parser:tm(!0)},{label:"height",parser:tm(!0)},{label:"gct",bits:{exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}}},{label:"backgroundColorIndex",parser:tc()},{label:"pixelAspectRatio",parser:tc()}]},{label:"gct",requires:function(e,t){return t.lsd.gct.exists},parser:tg(3,function(e,t){return Math.pow(2,t.lsd.gct.size+1)})},{label:"frames",parts:[tw,tE,tT,ty,tb],loop:function(e){var t=e.peekByte();return 33===t||44===t}}];function tS(e){var t=new tf(new Uint8Array(e));this.raw=t.parse(tR),this.raw.hasImages=!1;for(var r=0;r<this.raw.frames.length;r++)if(this.raw.frames[r].image){this.raw.hasImages=!0;break}}tS.prototype.decompressFrame=function(e,t){if(e>=this.raw.frames.length)return null;var r=this.raw.frames[e];if(r.image){var i=r.image.descriptor.width*r.image.descriptor.height,s=function(e,t,r){var i,s,o,n,a,l,u,h,f,c,d,p,m,g,v,x=Array(r),w=Array(4096),y=Array(4096),b=Array(4097);for(a=(s=1<<e)+1,i=s+2,u=-1,o=(1<<(n=e+1))-1,f=0;f<s;f++)w[f]=0,y[f]=f;for(d=h=p=m=v=g=0,c=0;c<r;){if(0===m){if(h<n){d+=t[g]<<h,h+=8,g++;continue}if(f=d&o,d>>=n,h-=n,f>i||f==a)break;if(f==s){o=(1<<(n=e+1))-1,i=s+2,u=-1;continue}if(-1==u){b[m++]=y[f],u=f,p=f;continue}for(l=f,f==i&&(b[m++]=p,f=u);f>s;)b[m++]=y[f],f=w[f];p=255&y[f],b[m++]=p,i<4096&&(w[i]=u,y[i]=p,(++i&o)==0&&i<4096&&(n++,o+=i)),u=l}m--,x[v++]=b[m],c++}for(c=v;c<r;c++)x[c]=0;return x}(r.image.data.minCodeSize,r.image.data.blocks,i);r.image.descriptor.lct.interlaced&&(s=function(e,t){for(var r=Array(e.length),i=e.length/t,s=[0,4,2,1],o=[8,8,4,2],n=0,a=0;a<4;a++)for(var l=s[a];l<i;l+=o[a])!function(i,s){var o=e.slice(s*t,(s+1)*t);r.splice.apply(r,[i*t,t].concat(o))}(l,n),n++;return r}(s,r.image.descriptor.width));var o={pixels:s,dims:{top:r.image.descriptor.top,left:r.image.descriptor.left,width:r.image.descriptor.width,height:r.image.descriptor.height}};return r.image.descriptor.lct&&r.image.descriptor.lct.exists?o.colorTable=r.image.lct:o.colorTable=this.raw.gct,r.gce&&(o.delay=10*(r.gce.delay||10),o.disposalType=r.gce.extras.disposal,r.gce.extras.transparentColorGiven&&(o.transparentIndex=r.gce.transparentColorIndex)),t&&(o.patch=function(e){for(var t=e.pixels.length,r=new Uint8ClampedArray(4*t),i=0;i<t;i++){var s=4*i,o=e.pixels[i],n=e.colorTable[o];r[s]=n[0],r[s+1]=n[1],r[s+2]=n[2],r[s+3]=255*(o!==e.transparentIndex)}return r}(o)),o}return null},tS.prototype.decompressFrames=function(e,t,r){void 0===t&&(t=0),r=void 0===r?this.raw.frames.length:Math.min(r,this.raw.frames.length);for(var i=[],s=t;s<r;s++)this.raw.frames[s].image&&i.push(this.decompressFrame(s,e));return i};class tC{frames=[];index=0;canvas;ctx;pixelRatio;startTime;playTime=0;static async create(e,t){let r=await fetch(e).then(e=>e.arrayBuffer()).then(e=>new tS(e)),i=r.decompressFrames(!0,void 0,void 0),{width:s,height:o}=r.raw.lsd;return new tC(i,s,o,t)}constructor(e,t,r,i){this.frames=e,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.pixelRatio=i,this.canvas.width=t,this.canvas.height=r,this.startTime=Date.now()}getCanvas(){return this.canvas}update(){let e=Date.now()-this.startTime;for(;this.playTime<e;){let e=this.frames[this.index%this.frames.length];this.playTime+=e.delay,this.index++}let t=this.frames[this.index%this.frames.length],r=new ImageData(t.patch,t.dims.width,t.dims.height);this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.putImageData(r,t.dims.left,t.dims.top)}}class tF{gl;canvas;maxTextureSize;floatLinearFilter;floatBlend;isContextLost=!1;#tB=new Set;#tk=new Set;#tV=new Set;constructor(e,t=!1){let r=e.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:t});if(!r)throw Error("[VFX-JS] WebGL2 is not available.");this.gl=r,this.canvas=e,r.getExtension("EXT_color_buffer_float"),r.getExtension("EXT_color_buffer_half_float"),this.floatBlend=!!r.getExtension("EXT_float_blend"),this.floatLinearFilter=!!r.getExtension("OES_texture_float_linear"),this.maxTextureSize=r.getParameter(r.MAX_TEXTURE_SIZE),e.addEventListener("webglcontextlost",this.#tD,!1),e.addEventListener("webglcontextrestored",this.#tO,!1)}setSize(e,t,r){let i=Math.floor(e*r),s=Math.floor(t*r);(this.canvas.width!==i||this.canvas.height!==s)&&(this.canvas.width=i,this.canvas.height=s)}addResource(e){this.#tB.add(e)}removeResource(e){this.#tB.delete(e)}onContextLost(e){return this.#tk.add(e),()=>this.#tk.delete(e)}onContextRestored(e){return this.#tV.add(e),()=>this.#tV.delete(e)}#tD=e=>{for(let t of(e.preventDefault(),this.isContextLost=!0,this.#tk))t()};#tO=()=>{this.isContextLost=!1;let e=this.gl;for(let t of(e.getExtension("EXT_color_buffer_float"),e.getExtension("EXT_color_buffer_half_float"),this.floatBlend=!!e.getExtension("EXT_float_blend"),this.#tB))t.restore();for(let e of this.#tV)e()}}class tP{gl;vao;#t;#tN;constructor(e){this.#t=e,this.gl=e.gl,this.#p(),e.addResource(this)}#p(){let e=this.gl,t=e.createVertexArray(),r=e.createBuffer();if(!t||!r)throw Error("[VFX-JS] Failed to create quad VAO");this.vao=t,this.#tN=r;let i=new Float32Array([-1,-1,0,1,-1,0,-1,1,0,-1,1,0,1,-1,0,1,1,0]);e.bindVertexArray(t),e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,i,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0),e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null)}restore(){this.#p()}draw(){let e=this.gl;e.bindVertexArray(this.vao),e.drawArrays(e.TRIANGLES,0,6)}dispose(){this.#t.removeResource(this),this.gl.deleteVertexArray(this.vao),this.gl.deleteBuffer(this.#tN)}}function tA(e){return{phase:"hidden",direction:1,enterProgress:0,leaveProgress:0,isIn:!1,wasAbove:!1,wasBelow:!1,lastTime:e}}function tM(e,t){e.phase=t,e.direction=1,e.enterProgress=+("shown"===t),e.leaveProgress=0}function tz(e){return Math.min(Math.max(e,0),1)}function t_(e,t,r,i={}){return new y(e,t,r,{float:i.float??!1})}function tL(e,t){let r;r=t.renderingToBuffer?"none":t.premultipliedAlpha?"premultiplied":"normal";let i=t.glslVersion??A(t.fragmentShader);return new U(e,t.vertexShader??("100"===i?e3:e2),t.fragmentShader,t.uniforms,r,i)}class tI{pass;#I;#tX;#tH;#tW;#t$;#tG;constructor(e,t,r,i,s,o,n,a){if(this.#tW=i??!1,this.#t$=s??!1,this.#tG=o,this.#tX={},this.#I={src:{value:null},offset:{value:new F},resolution:{value:new F},viewport:{value:new P},time:{value:0},mouse:{value:new F},passIndex:{value:0}},r)for(let[e,t]of Object.entries(r))"function"==typeof t?(this.#tX[e]=t,this.#I[e]={value:t()}):this.#I[e]={value:t};this.pass=tL(e,{fragmentShader:t,uniforms:this.#I,renderingToBuffer:n??!1,premultipliedAlpha:!0,glslVersion:a})}get uniforms(){return this.#I}setUniforms(e,t,r,i,s,o){this.#I.src.value=e,this.#I.resolution.value.set(r.w*t,r.h*t),this.#I.offset.value.set(r.x*t,r.y*t),this.#I.time.value=i,this.#I.mouse.value.set(s*t,o*t)}updateCustomUniforms(e){for(let[e,t]of Object.entries(this.#tX))this.#I[e]&&(this.#I[e].value=t());if(e)for(let[t,r]of Object.entries(e))this.#I[t]&&(this.#I[t].value=r())}initializeBackbuffer(e,t,r,i){this.#tW&&!this.#tH&&(this.#tG?this.#tH=new T(e,this.#tG[0],this.#tG[1],1,this.#t$):this.#tH=new T(e,t,r,i,this.#t$))}resizeBackbuffer(e,t){this.#tH&&!this.#tG&&this.#tH.resize(e,t)}registerBufferUniform(e){this.#I[e]||(this.#I[e]={value:null})}get backbuffer(){return this.#tH}get persistent(){return this.#tW}get float(){return this.#t$}get size(){return this.#tG}dispose(){this.pass.dispose(),this.#tH?.dispose()}}class tU{#B;#tq=new Map;constructor(e){this.#B=e}get(e,t,r){let i=`${t}\0${e}\0${r??""}`,s=this.#tq.get(i);return s||(s=new M(this.#B,e,t,r),this.#tq.set(i,s)),s}get size(){return this.#tq.size}dispose(){for(let e of this.#tq.values())e.dispose();this.#tq.clear()}}let tB=new Map,tk=!1;function tV(e,t){return"hic"===e||!0===t?null:"number"==typeof t?t.toString():"video"===e?"0.0001":"0"}function tD(e,t){let r=e.getContext("2d");r&&(r.clearRect(0,0,e.width,e.height),r.drawImage(t,0,0,e.width,e.height))}class tO{#eB;#eC;#t;#k;#P;#V;#tJ;#tj=[];#tK;#tY=new Map;#tZ=null;#tQ=!1;#t0=new WeakSet;#t1={};#t2={};#t3=0;#t4=void 0;#E=2;#t5=[];#tI=new tl({showPlain:e=>{if("hic"===e.type){let t=e.srcTexture.source;t instanceof OffscreenCanvas&&tD(e.element,t)}else e.element.style.setProperty("opacity",e.originalOpacity.toString())},hidePlain:(e,t)=>{if("hic"===e.type){let t=e.element;t.getContext("2d")?.clearRect(0,0,t.width,t.height)}else e.element.style.opacity=t},isRegistered:e=>this.#t5.includes(e)});#t6=0;#t8=1;#t7=Date.now()/1e3;#t9=!1;#re=te(0);#rt=te(0);#rr=[0,0];#ri=0;#rs=0;#ro=0;#rn=0;#ra=new WeakMap;#rl=new Set;#ru;constructor(e,t){this.#eB=e,this.#eC=t,this.#t=new tF(t,e.preserveDrawingBuffer),this.#k=this.#t.gl,this.#k.clearColor(0,0,0,0),this.#E=e.pixelRatio,this.#t8=e.timeScale,this.#t7=Date.now()/1e3,this.#P=new tP(this.#t),this.#V=new tU(this.#t),this.#ru=new m(this.#t),window.addEventListener("resize",this.#rh),window.addEventListener("pointermove",this.#rf),this.#rh(),this.#tJ=new e9(this.#t),this.#rc(e.postEffects),this.#t.onContextRestored(()=>{this.#k.clearColor(0,0,0,0)})}destroy(){for(let e of(this.stop(),window.removeEventListener("resize",this.#rh),window.removeEventListener("pointermove",this.#rf),this.#tK?.dispose(),this.#tY.values()))e?.dispose();for(let e of this.#tj)e.pass.dispose();for(let e of(this.#tZ&&(this.#tZ.dispose(),this.#tZ=null,this.#tQ=!1),[...this.#rl]))e.capture.dispose();this.#ru.dispose(),this.#tJ.dispose(),this.#V.dispose(),this.#P.dispose()}#rd(){let e,t,r=this.#eC.ownerDocument,i="BackCompat"===r.compatMode?r.body:r.documentElement,s=i.clientWidth,o=i.clientHeight,n=window.scrollX,a=window.scrollY;if(this.#eB.fixedCanvas)e=0,t=0;else if(this.#eB.wrapper)e=s*this.#eB.scrollPadding[0],t=o*this.#eB.scrollPadding[1];else{let i=r.body.scrollWidth-(n+s),l=r.body.scrollHeight-(a+o);e=tq(s*this.#eB.scrollPadding[0],0,i),t=tq(o*this.#eB.scrollPadding[1],0,l)}let l=s+2*e,u=o+2*t;(l!==this.#rr[0]||u!==this.#rr[1])&&(this.#eC.style.width=`${l}px`,this.#eC.style.height=`${u}px`,this.#t.setSize(l,u,this.#E),this.#re=te({top:-t,left:-e,right:s+e,bottom:o+t}),this.#rt=te({top:0,left:0,right:s,bottom:o}),this.#rr=[l,u],this.#ri=e,this.#rs=t),this.#eB.fixedCanvas||this.#eC.style.setProperty("transform",`translate(${n-e}px, ${a-t}px)`)}#rh=async()=>{for(let e of this.#rl)e.resize();for(let e of this.#t5)if("text"===e.type&&e.isInViewport){let t=e.element.getBoundingClientRect(),r=Math.ceil(t.width),i=Math.ceil(t.height);(r!==e.width||i!==e.height)&&(await this.#rp(e),e.width=r,e.height=i)}for(let e of this.#t5)if("text"===e.type&&!e.isInViewport){let t=e.element.getBoundingClientRect(),r=Math.ceil(t.width),i=Math.ceil(t.height);(r!==e.width||i!==e.height)&&(await this.#rp(e),e.width=r,e.height=i)}};#rf=e=>{this.#ro=e.clientX,this.#rn=window.innerHeight-e.clientY};async #rp(e){if(!this.#ra.get(e.element)){this.#ra.set(e.element,!0);try{let t=e.srcTexture,r=t.source instanceof OffscreenCanvas?t.source:void 0,i=await f(e.element,e.originalOpacity,r,this.maxTextureSize);if(0===i.width||0===i.height)return;let s=new m(this.#t,i);s.wrapS=t.wrapS,s.wrapT=t.wrapT,s.premultiplyAlpha=t.premultiplyAlpha,s.needsUpdate=!0,!e.chain&&e.passes.length>0&&(e.passes[0].uniforms.src.value=s),e.srcTexture=s,t.dispose()}catch(e){console.error(e)}finally{this.#ra.set(e.element,!1)}}}async addElement(e,t={},r){let i,s,o;if(void 0!==t.effect)return this.#rm(e,t,t.effect,r);let n=this.#rg(t),a=e.getBoundingClientRect(),l=tj(e)?ti(a):tr(a),[u,c]=tX(t.overflow),d=ts(l,c),p=tH(t.intersection),g=""===e.style.opacity?1:Number.parseFloat(e.style.opacity),v=!1;if(e instanceof HTMLImageElement){s="img";let t=h(e);if(v=!!t.match(/\.gif/i)){let r=await tC.create(t,this.#E);tB.set(e,r),i=new m(this.#t,r.getCanvas())}else{let e=await x(t);i=new m(this.#t,e)}}else if(e instanceof HTMLVideoElement)i=new m(this.#t,e),s="video";else if(e instanceof HTMLCanvasElement)K(e)&&r?(i=new m(this.#t,r),s="hic"):(i=new m(this.#t,e),s="canvas");else{let t=await f(e,g,void 0,this.maxTextureSize);i=new m(this.#t,t),s="text"}let[w,y]=tG(t.wrap);i.wrapS=w,i.wrapT=y,i.needsUpdate=!0;let b=t.autoCrop??!0,E=tV(s,t.overlay),R={src:{value:i},resolution:{value:new F},offset:{value:new F},time:{value:0},enterTime:{value:-1},leaveTime:{value:-1},enterProgress:{value:0},leaveProgress:{value:0},mouse:{value:new F},intersection:{value:0},viewport:{value:new P},autoCrop:{value:b}},S={};if(void 0!==t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r?(R[e]={value:r()},S[e]=r):R[e]={value:r};if(t.backbuffer){let e,t;e=(d.right-d.left)*this.#E,t=(d.bottom-d.top)*this.#E,R.backbuffer={value:(o=new T(this.#t,e,t,this.#E,!1)).texture}}let C=new Map,A=new Map;for(let e=0;e<n.length-1;e++){let t=n[e].target??`pass${e}`;n[e]={...n[e],target:t};let r=n[e].size,i=r?r[0]:(d.right-d.left)*this.#E,s=r?r[1]:(d.bottom-d.top)*this.#E;if(n[e].persistent){let i=r?1:this.#E,s=r?r[0]:d.right-d.left,o=r?r[1]:d.bottom-d.top;A.set(t,new T(this.#t,s,o,i,n[e].float))}else C.set(t,t_(this.#t,i,s,{float:n[e].float}))}let M=[];for(let e=0;e<n.length;e++){let t=n[e],r=t.frag,i={...R},s={};for(let[e,s]of C)e!==t.target&&r.match(RegExp(`uniform\\s+sampler2D\\s+${e}\\b`))&&(i[e]={value:s.texture});for(let[e,t]of A)r.match(RegExp(`uniform\\s+sampler2D\\s+${e}\\b`))&&(i[e]={value:t.texture});if(t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r?(i[e]={value:r()},s[e]=r):i[e]={value:r};let o=tL(this.#t,{vertexShader:t.vert,fragmentShader:r,uniforms:i,renderingToBuffer:void 0!==t.target,glslVersion:t.glslVersion});M.push({pass:o,uniforms:i,uniformGenerators:{...S,...s},target:t.target,persistent:t.persistent,float:t.float,size:t.size,backbuffer:t.target?A.get(t.target):void 0})}let z=this.#t6,_={type:s,element:e,isInViewport:!1,intersectionState:tA(z),width:l.right-l.left,height:l.bottom-l.top,passes:M,bufferTargets:C,startTime:z,enterTime:z,leaveTime:-1/0,release:t.release??1/0,isGif:v,isFullScreen:u,overflow:c,intersection:p,originalOpacity:g,srcTexture:i,zIndex:t.zIndex??0,backbuffer:o,autoCrop:b};this.#rv(_,l,z),this.#rx(_,E)}#rx(e,t){this.#tI.adopt(e,t)||null===t||e.element.style.setProperty("opacity",t),this.#t5.push(e),this.#t5.sort((e,t)=>e.zIndex-t.zIndex)}async #rm(e,t,r,i){let s,o;void 0!==t.shader&&console.warn("[VFX-JS] Both `shader` and `effect` specified; `effect` takes precedence."),void 0!==t.overflow&&console.warn("[VFX-JS] `overflow` is shader-path only and is ignored by the effect path. Use each effect's own `outputRect` (with `dims.canvasRect` for fullscreen) to control its dst rect.");let n=Array.isArray(r)?[...r]:[r];this.#rw(n);let a=e.getBoundingClientRect(),l=tj(e)?ti(a):tr(a),[u,c]=tX(t.overflow),d=tH(t.intersection),p=""===e.style.opacity?1:Number.parseFloat(e.style.opacity),g=!1;if(e instanceof HTMLImageElement){o="img";let t=h(e);if(g=!!t.match(/\.gif/i)){let r=await tC.create(t,this.#E);tB.set(e,r),s=new m(this.#t,r.getCanvas())}else{let e=await x(t);s=new m(this.#t,e)}}else if(e instanceof HTMLVideoElement)s=new m(this.#t,e),o="video";else if(e instanceof HTMLCanvasElement)K(e)&&i?(s=new m(this.#t,i),o="hic"):(s=new m(this.#t,e),o="canvas");else{let t=await f(e,p,void 0,this.maxTextureSize);s=new m(this.#t,t),o="text"}let[v,w]=tG(t.wrap);s.wrapS=v,s.wrapT=w,s.premultiplyAlpha=!0,s.needsUpdate=!0;let y=t.autoCrop??!0,b=tV(o,t.overlay),E=this.#t6,T={type:o,element:e,isInViewport:!1,intersectionState:tA(E),width:l.right-l.left,height:l.bottom-l.top,passes:[],bufferTargets:new Map,startTime:E,enterTime:E,leaveTime:-1/0,release:t.release??1/0,isGif:g,isFullScreen:u,overflow:c,intersection:d,originalOpacity:p,srcTexture:s,zIndex:t.zIndex??0,backbuffer:void 0,autoCrop:y,effectLastRenderTime:E},R=q(()=>T.srcTexture,()=>tW(T.srcTexture,"w"),()=>tW(T.srcTexture,"h")),S={},C={};if(t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r?(C[e]=r,S[e]=r()):S[e]=r;T.effectUniformGenerators=C,T.effectStaticUniforms=S;let F={autoCrop:y,glslVersion:t.glslVersion??"300 es"},P=new ta(this.#t,this.#P,this.#E,n,F,R,!1,this.#V);try{await P.initAll()}catch(t){throw this.#ry(n),s.dispose(),e.style.setProperty("opacity",p.toString()),t}T.chain=P,this.#rv(T,l,E),this.#rx(T,b)}#rg(e){let t=t=>void 0===t.glslVersion&&void 0!==e.glslVersion?{...t,glslVersion:e.glslVersion}:t;return Array.isArray(e.shader)?e.shader.map(t):[t({frag:this.#rb(e.shader||"uvGradient")})]}async updateElementEffects(e,t){let r=this.#t5.find(t=>t.element===e);if(!r)throw Error("[VFX-JS] updateElementEffects: element not registered");if(!r.chain)throw Error("[VFX-JS] updateElementEffects: element is on the shader path; effect-only updates are not supported");let i=Array.isArray(t)?[...t]:[t],s=r.chain.effects,o=new Set(s),n=[];for(let e of i)if(!o.has(e)){if(this.#t0.has(e))throw Error("[VFX-JS] Effect instance already attached. Construct a new instance per `vfx.add()` / `postEffect`.");n.push(e)}await r.chain.replaceEffects(i);let a=new Set(i);for(let e of s)a.has(e)||this.#t0.delete(e);for(let e of n)this.#t0.add(e)}removeElement(e){let t=this.#t5.findIndex(t=>t.element===e);if(-1!==t){let r=this.#t5.splice(t,1)[0];if(r.chain)this.#ry(r.chain.effects),r.chain.dispose();else{for(let e of r.bufferTargets.values())e.dispose();for(let e of r.passes)e.pass.dispose(),e.backbuffer?.dispose();r.backbuffer?.dispose()}r.srcTexture.dispose(),e.style.setProperty("opacity",r.originalOpacity.toString())}}updateTextElement(e){let t=this.#t5.findIndex(t=>t.element===e);return -1!==t?this.#rp(this.#t5[t]):Promise.resolve()}async updateImageElement(e){let t=this.#t5.find(t=>t.element===e);if(t?.type!=="img"||t.isGif)return;let r=await x(h(e)),i=t.srcTexture,s=new m(this.#t,r);s.wrapS=i.wrapS,s.wrapT=i.wrapT,s.premultiplyAlpha=i.premultiplyAlpha,s.needsUpdate=!0,!t.chain&&t.passes.length>0&&(t.passes[0].uniforms.src.value=s),t.srcTexture=s,i.dispose()}updateCanvasElement(e){let t=this.#t5.find(t=>t.element===e);if(t){let r=t.srcTexture,i=new m(this.#t,e);i.wrapS=r.wrapS,i.wrapT=r.wrapT,i.premultiplyAlpha=r.premultiplyAlpha,i.needsUpdate=!0,!t.chain&&t.passes.length>0&&(t.passes[0].uniforms.src.value=i),t.srcTexture=i,r.dispose()}}updateHICTexture(e,t){let r=this.#t5.find(t=>t.element===e);if(r?.type!=="hic")return;r.frozen&&tD(e,t);let i=r.srcTexture,s=this.#rE(i,t);s!==i&&(!r.chain&&r.passes.length>0&&(r.passes[0].uniforms.src.value=s),r.srcTexture=s)}#rE(e,t){if(e.source===t)return e.needsUpdate=!0,e;let r=new m(this.#t,t);return r.wrapS=e.wrapS,r.wrapT=e.wrapT,r.premultiplyAlpha=e.premultiplyAlpha,r.needsUpdate=!0,e.dispose(),r}async addCapture(e,t,r,i,s){let o=await ek({createTexture:e=>this.#rT(e),uploadTexture:e=>this.#rR(e),refreshTexture:(e,t)=>this.#rE(e,t),textureSize:tW,emptyTexture:this.#ru,maxTextureSize:this.maxTextureSize,stillZIndex:r},e,t,()=>{this.#rl.delete(o),i?.()},s);return this.#rl.add(o),o.capture}#rR(e){try{e.upload(0)}catch(e){throw Error(`[VFX-JS] capture() could not upload the source: ${e}`)}}#rT(e){let t=new m(this.#t,e);return t.premultiplyAlpha=!0,t}hasElement(e){return this.#t5.some(t=>t.element===e)}emptyTexture(){return q(()=>this.#ru,()=>0,()=>0)}liveTexture(){var e,t,r;let i,s,o;return e=e=>this.#rT(e),t=(e,t)=>this.#rE(e,t),r=tW,i=null,s=!1,o=q(()=>i,()=>i?r(i,"w"):0,()=>i?r(i,"h"):0),{get texture(){return i?o:null},update(r){s||(i=i?t(i,r):e(r))},dispose(){s=!0,i?.dispose(),i=null}}}freezeInside(e){return this.#tI.freezeInside(e,this.#t5)}isFrozen(e){return this.#t5.some(t=>t.element===e&&t.frozen)}forceRender(e){let t=this.#t5.find(t=>t.element===e);return!t||t.forceRender?()=>{}:(t.forceRender=!0,()=>{t.forceRender=!1})}get maxTextureSize(){return this.#t.maxTextureSize}isPlaying(){return void 0!==this.#t4}play(){this.isPlaying()||(this.#t7=Date.now()/1e3,this.#t4=requestAnimationFrame(this.#rS))}get time(){return this.#t6}setTime(e){this.#t6=e,this.#t9=!0}get timeScale(){return this.#t8}set timeScale(e){this.#t8=e}stop(){void 0!==this.#t4&&(cancelAnimationFrame(this.#t4),this.#t4=void 0)}render(){let e=Date.now()/1e3;this.#t9?this.#t9=!1:this.#t6+=(e-this.#t7)*this.#t8,this.#t7=e;let t=this.#t6,r=this.#k;this.#rd(),r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,this.#eC.width,this.#eC.height),r.clear(r.COLOR_BUFFER_BIT);let i=this.#re.right-this.#re.left,s=this.#re.bottom-this.#re.top,o={x:0,y:0,w:i,h:s},n=this.#rC();for(let e of(n&&(this.#rF(i,s),this.#tK&&(r.bindFramebuffer(r.FRAMEBUFFER,this.#tK.fbo),r.clear(r.COLOR_BUFFER_BIT),r.bindFramebuffer(r.FRAMEBUFFER,null))),this.#rl))e.tick();for(let e of this.#t5){if(e.frozen){e.intersectionState.lastTime=t;continue}let r=e.element.getBoundingClientRect(),a="text"===e.type?ti(r):tr(r),l=this.#rv(e,a,t);if(!l.isVisible)continue;if(e.chain){this.#rP(e,a,l,t);continue}let u=e.passes[0].uniforms;for(let r of(u.time.value=t-e.startTime,u.resolution.value.set((a.right-a.left)*this.#E,(a.bottom-a.top)*this.#E),u.mouse.value.set((this.#ro+this.#ri)*this.#E,(this.#rn+this.#rs)*this.#E),e.passes))for(let[e,t]of Object.entries(r.uniformGenerators))r.uniforms[e].value=t();tB.get(e.element)?.update(),("video"===e.type||e.isGif)&&(u.src.value.needsUpdate=!0);let h=E(a,s,this.#ri,this.#rs),f=E(l.rectWithOverflow,s,this.#ri,this.#rs);e.backbuffer&&(e.passes[0].uniforms.backbuffer.value=e.backbuffer.texture);{let t=e.isFullScreen?o:f,r=Math.max(1,t.w*this.#E),i=Math.max(1,t.h*this.#E),s=Math.max(1,t.w),n=Math.max(1,t.h);for(let t=0;t<e.passes.length-1;t++){let o=e.passes[t];if(!o.size)if(o.backbuffer)o.backbuffer.resize(s,n);else{let t=e.bufferTargets.get(o.target);t&&(t.width!==r||t.height!==i)&&t.setSize(r,i)}}}let c=new Map;for(let t of e.passes)t.backbuffer&&t.target&&c.set(t.target,t.backbuffer.texture);let d=e.srcTexture;for(let t=0;t<e.passes.length-1;t++){let i=e.passes[t],s=e.isFullScreen?o:f;for(let[e,t]of(i.uniforms.src.value=d,c))i.uniforms[e]&&(i.uniforms[e].value=t);for(let[e,t]of Object.entries(i.uniformGenerators))i.uniforms[e]&&(i.uniforms[e].value=t());let n=i.size?{x:0,y:0,w:i.size[0],h:i.size[1]}:{x:0,y:0,w:s.w,h:s.h},a=function(e,t,r,i,s,o,n){let a=s[0]+o[0]-r.x,l=s[1]+o[1]-r.y;return i?{resolution:[i[0],i[1]],offset:[0,0],mouse:[a/r.w*i[0],l/r.h*i[1]]}:{resolution:[e.width*n,e.height*n],offset:[(t.x-r.x)*n,(t.y-r.y)*n],mouse:[a*n,l*n]}}(r,h,s,i.size,[this.#ro,this.#rn],[this.#ri,this.#rs],this.#E);if(i.uniforms.resolution.value.set(...a.resolution),i.uniforms.offset.value.set(...a.offset),i.uniforms.mouse.value.set(...a.mouse),i.backbuffer)this.#rA(i.pass,i.backbuffer.target,n,i.uniforms,!0),i.backbuffer.swap(),d=i.backbuffer.texture;else{let t=e.bufferTargets.get(i.target);if(!t)continue;this.#rA(i.pass,t,n,i.uniforms,!0),d=t.texture}i.target&&c.set(i.target,d)}let p=e.passes[e.passes.length-1];for(let[e,t]of(p.uniforms.src.value=d,p.uniforms.resolution.value.set(r.width*this.#E,r.height*this.#E),p.uniforms.offset.value.set(h.x*this.#E,h.y*this.#E),p.uniforms.mouse.value.set((this.#ro+this.#ri)*this.#E,(this.#rn+this.#rs)*this.#E),c))p.uniforms[e]&&(p.uniforms[e].value=t);for(let[e,t]of Object.entries(p.uniformGenerators))p.uniforms[e]&&(p.uniforms[e].value=t());e.backbuffer?(p.uniforms.backbuffer.value=e.backbuffer.texture,e.isFullScreen?(e.backbuffer.resize(i,s),this.#rM(e,h.x,h.y),this.#rA(p.pass,e.backbuffer.target,o,p.uniforms,!0),e.backbuffer.swap(),this.#tJ.setUniforms(e.backbuffer.texture,this.#E,o),this.#rA(this.#tJ.pass,n&&this.#tK||null,o,this.#tJ.uniforms,!1)):(e.backbuffer.resize(f.w,f.h),this.#rM(e,e.overflow.left,e.overflow.bottom),this.#rA(p.pass,e.backbuffer.target,e.backbuffer.getViewport(),p.uniforms,!0),e.backbuffer.swap(),this.#tJ.setUniforms(e.backbuffer.texture,this.#E,f),this.#rA(this.#tJ.pass,n&&this.#tK||null,f,this.#tJ.uniforms,!1))):(this.#rM(e,h.x,h.y),this.#rA(p.pass,n&&this.#tK||null,e.isFullScreen?o:f,p.uniforms,!1))}n&&this.#tK&&(this.#tZ&&this.#tQ?this.#rz(o,t):this.#r_(o,t))}#rS=()=>{this.isPlaying()&&(this.render(),this.#t4=requestAnimationFrame(this.#rS))};#rP(e,t,r,i){let s=e.chain;if(!s)return;let o=this.#E;tB.get(e.element)?.update(),("video"===e.type||e.isGif)&&(e.srcTexture.needsUpdate=!0);let n={...e.effectStaticUniforms??{}};if(e.effectUniformGenerators)for(let[t,r]of Object.entries(e.effectUniformGenerators))n[t]=r();let a=this.#re.right-this.#re.left,l=this.#re.bottom-this.#re.top,u=E(t,l,this.#ri,this.#rs),h=this.#ro+this.#ri-u.x,f=this.#rn+this.#rs-u.y,c=t.right-t.left,d=t.bottom-t.top,p=e.effectLastRenderTime??i;e.effectLastRenderTime=i;let m=this.#rC()&&this.#tK?j(this.#tK):null;s.run({time:i-e.startTime,deltaTime:i-p,mouse:[h*o,f*o],mouseViewport:[this.#ro*o,this.#rn*o],intersection:r.intersection,enterTime:tJ(i-e.enterTime),leaveTime:tJ(i-e.leaveTime),enterProgress:r.enterProgress,leaveProgress:r.leaveProgress,resolvedUniforms:n,canvasSize:[a,l],canvasBufferSize:[a*o,l*o],elementSize:[c,d],elementBufferSize:[c*o,d*o],elementRectOnCanvasPx:{x:u.x*o,y:u.y*o,w:u.w*o,h:u.h*o},finalTarget:m,isVisible:r.isVisible})}#rC(){return this.#tj.length>0||null!==this.#tZ&&this.#tQ}#rw(e){for(let t of e)if(this.#t0.has(t))throw Error("[VFX-JS] Effect instance already attached. Construct a new instance per `vfx.add()` / `postEffect`.");for(let t of e)this.#t0.add(t)}#ry(e){for(let t of e)this.#t0.delete(t)}#rL(e){let t=e.hitTestPadBuffer,r=this.#E;return te({top:t.top/r,right:t.right/r,bottom:t.bottom/r,left:t.left/r})}#rv(e,t,r){var i,s,o,n,a,l,u,h;let f,c,d,p=ts(t,e.chain?this.#rL(e.chain):e.overflow),m=e.isFullScreen||tN(this.#rt,p),g=ts(this.#rt,e.intersection.rootMargin),v=tn(g.left,g.right,t.left,t.right)*tn(g.top,g.bottom,t.top,t.bottom);i=e,s=v,o=tN(g,t),n=r,c=(f=i.intersectionState).isIn,d=i.isFullScreen||function(e,t,r,i,s){let o=0===i?r:t>=i,n=0===s?!r:t<s,a=o&&!e.wasAbove,l=n&&!e.wasBelow;if(e.wasAbove=o,e.wasBelow=n,o&&!n)return!0;if(n&&!o)return!1;if(o&&n){if(a)return!0;if(l)return!1}return e.isIn}(f,s,o,i.intersection.threshold,i.intersection.leaveThreshold),!c&&d&&(i.enterTime=n,i.leaveTime=1/0),c&&!d&&(i.leaveTime=n),function(e,t,r,i){let s=r-e.lastTime;if(e.lastTime=r,e.isIn=t,function(e,t){switch(e.phase){case"hidden":if(t)return e.phase="entering",e.direction=1,!0;return!1;case"shown":if(!t)return e.phase="leaving",e.direction=1,!0;return!1;case"entering":return e.direction=t?1:-1,!1;case"leaving":return e.direction=t?-1:1,!1}}(e,t))return;let o=(s<0?s:e.direction*s)/i;if("entering"===e.phase){let t=e.enterProgress+o;o>0&&t>=1?tM(e,"shown"):o<0&&t<=0?tM(e,"hidden"):e.enterProgress=tz(t)}else if("leaving"===e.phase){let t=e.leaveProgress+o;o>0&&t>=1?tM(e,"hidden"):o<0&&t<=0?tM(e,"shown"):e.leaveProgress=tz(t)}}(f,d,n,i.intersection.duration);let{enterProgress:x,leaveProgress:w}=e.intersectionState;e.isInViewport=m;let y=m&&r-e.leaveTime<=e.release||!0===e.forceRender&&t.right>t.left&&t.bottom>t.top;return y&&!e.chain&&e.passes.length>0&&(a=e.passes[0].uniforms,l=e,u=v,h=r,a.intersection.value=u,a.enterTime.value=tJ(h-l.enterTime),a.leaveTime.value=tJ(h-l.leaveTime),a.enterProgress.value=l.intersectionState.enterProgress,a.leaveProgress.value=l.intersectionState.leaveProgress),{isVisible:y,intersection:v,rectWithOverflow:p,enterProgress:x,leaveProgress:w}}#rb(e){return e in e7?e7[e]:e}#rA(e,t,r,i,s){let o=this.#k;s&&null!==t&&t!==this.#tK&&(o.bindFramebuffer(o.FRAMEBUFFER,t.fbo),o.viewport(0,0,t.width,t.height),o.clear(o.COLOR_BUFFER_BIT));let n=i.viewport;n&&n.value instanceof P&&n.value.set(r.x*this.#E,r.y*this.#E,r.w*this.#E,r.h*this.#E);try{var a,l,u,h;let i,s,n,f,c,d,p,m;a=this.#P,l=this.#rr[0],u=this.#rr[1],h=this.#E,i=t?t.width/h:l,s=t?t.height/h:u,n=Math.max(0,r.x),f=Math.max(0,r.y),c=Math.min(i,r.x+r.w),d=Math.min(s,r.y+r.h),p=c-n,m=d-f,p<=0||m<=0||(o.bindFramebuffer(o.FRAMEBUFFER,t?t.fbo:null),o.viewport(Math.round(n*h),Math.round(f*h),Math.round(p*h),Math.round(m*h)),B(o,e.blend),e.program.use(),e.program.uploadUniforms(e.uniforms),a.draw())}catch(e){console.error(e)}}#rM(e,t,r){let i=e.passes[0].uniforms.offset.value;i.x=t*this.#E,i.y=r*this.#E}#rc(e){let t=1!==e.length||"frag"in e[0]?null:e[0];if(t&&void 0!==t.effect)return void this.#rI(t,t.effect);let r=[],i=[];for(let t of e)"frag"in t&&i.push(t);for(let e=0;e<i.length-1;e++)i[e].target||(i[e]={...i[e],target:`pass${e}`});for(let t of e){let e,i,s;if("frag"in t)e=t.frag,i=new tI(this.#t,e,t.uniforms,t.persistent??!1,t.float??!1,t.size,void 0!==t.target,t.glslVersion),s=t.target;else{if(void 0===t.shader)throw Error("VFXPostEffect requires `shader` (the `effect` path is not implemented yet).");e=this.#rb(t.shader),i=new tI(this.#t,e,t.uniforms,t.persistent??!1,t.float??!1,void 0,!1,t.glslVersion),t.persistent&&i.registerBufferUniform("backbuffer"),s=void 0}r.push(e);let o={};if(t.uniforms)for(let[e,r]of Object.entries(t.uniforms))"function"==typeof r&&(o[e]=r);this.#tj.push({pass:i,target:s,generators:o})}for(let e of i)e.target&&this.#tY.set(e.target,void 0);let s=this.#tj.map(e=>e.target).filter(e=>void 0!==e);for(let e=0;e<this.#tj.length;e++)for(let t of s)r[e].match(RegExp(`uniform\\s+sampler2D\\s+${t}\\b`))&&this.#tj[e].pass.registerBufferUniform(t)}#rI(e,t){void 0!==e.shader&&console.warn("[VFX-JS] Both `shader` and `effect` specified on post-effect; `effect` takes precedence.");let r=Array.isArray(t)?[...t]:[t];this.#rw(r);let i=q(()=>{let e=this.#tK;if(!e)throw Error("[VFX-JS] post-effect chain active without target");return e.texture},()=>this.#tK?.width??0,()=>this.#tK?.height??0),s={autoCrop:!0,glslVersion:e.glslVersion??"300 es"},o=new ta(this.#t,this.#P,this.#E,r,s,i,!0,this.#V);if(e.uniforms)for(let[t,r]of Object.entries(e.uniforms))"function"==typeof r?(this.#t2[t]=r,this.#t1[t]=r()):this.#t1[t]=r;this.#tZ=o,this.#t3=this.#t6,o.initAll().then(()=>{this.#tZ===o&&(this.#tQ=!0)}).catch(e=>{console.error("[VFX-JS] Post-effect init failed; post-effect disabled:",e),this.#tZ===o&&(this.#ry(this.#tZ.effects),this.#tZ.dispose(),this.#tZ=null,this.#tQ=!1)})}#rz(e,t){let r=this.#tZ;if(!r)return;let i=this.#E,s={...this.#t1};for(let[e,t]of Object.entries(this.#t2))s[e]=t();let o=this.#re.right-this.#re.left,n=this.#re.bottom-this.#re.top,a=this.#t3;this.#t3=t;let l=[o,n],u=[o*i,n*i],h={x:e.x*i,y:e.y*i,w:e.w*i,h:e.h*i};r.run({time:t,deltaTime:t-a,mouse:[this.#ro*i,this.#rn*i],mouseViewport:[this.#ro*i,this.#rn*i],intersection:1,enterTime:0,leaveTime:0,enterProgress:1,leaveProgress:0,resolvedUniforms:s,canvasSize:l,canvasBufferSize:u,elementSize:l,elementBufferSize:u,elementRectOnCanvasPx:h,finalTarget:null,isVisible:!0})}#r_(e,t){if(!this.#tK)return;let r=this.#tK.texture,i=new Map;for(let{pass:e,target:t}of this.#tj)t&&e.backbuffer&&i.set(t,e.backbuffer.texture);for(let s=0;s<this.#tj.length;s++){let{pass:o,target:n,generators:a}=this.#tj[s],l=s===this.#tj.length-1,u=this.#ro+this.#ri,h=this.#rn+this.#rs,f=o.size;if(f){let[i,s]=f;o.uniforms.src.value=r,o.uniforms.resolution.value.set(i,s),o.uniforms.offset.value.set(0,0),o.uniforms.time.value=t,o.uniforms.mouse.value.set(u/e.w*i,h/e.h*s)}else o.setUniforms(r,this.#E,e,t,u,h);for(let[e,t]of(o.uniforms.passIndex.value=s,o.updateCustomUniforms(a),i)){let r=o.uniforms[e];r&&(r.value=t)}if(l)o.backbuffer?(o.uniforms.backbuffer&&(o.uniforms.backbuffer.value=o.backbuffer.texture),this.#rA(o.pass,o.backbuffer.target,e,o.uniforms,!0),o.backbuffer.swap(),this.#tJ.setUniforms(o.backbuffer.texture,this.#E,e),this.#rA(this.#tJ.pass,null,e,this.#tJ.uniforms,!1)):this.#rA(o.pass,null,e,o.uniforms,!1);else if(o.backbuffer){o.uniforms.backbuffer&&(o.uniforms.backbuffer.value=o.backbuffer.texture);let t=f?{x:0,y:0,w:f[0]/this.#E,h:f[1]/this.#E}:e;this.#rA(o.pass,o.backbuffer.target,t,o.uniforms,!0),o.backbuffer.swap(),r=o.backbuffer.texture,n&&i.set(n,o.backbuffer.texture)}else{let t=n??`postEffect${s}`,a=this.#tY.get(t),l=f?f[0]:e.w*this.#E,u=f?f[1]:e.h*this.#E;a&&a.width===l&&a.height===u||(a?.dispose(),a=t_(this.#t,l,u,{float:o.float}),this.#tY.set(t,a));let h=f?{x:0,y:0,w:f[0]/this.#E,h:f[1]/this.#E}:e;this.#rA(o.pass,a,h,o.uniforms,!0),r=a.texture,n&&i.set(n,a.texture)}}}#rF(e,t){let r=e*this.#E,i=t*this.#E;for(let{pass:s}of(this.#tK&&this.#tK.width===r&&this.#tK.height===i||(this.#tK?.dispose(),this.#tK=t_(this.#t,r,i)),this.#tj))s.persistent&&!s.backbuffer?s.initializeBackbuffer(this.#t,e,t,this.#E):s.backbuffer&&s.resizeBackbuffer(e,t)}}function tN(e,t){return t.left<=e.right&&t.right>=e.left&&t.top<=e.bottom&&t.bottom>=e.top}function tX(e){return!0===e?[!0,tt]:void 0===e?[!1,tt]:[!1,te(e)]}function tH(e){let t=e?.threshold??0,r=te(e?.rootMargin??0),i=e?.leaveThreshold??t,s=e?.duration??1;return Number.isFinite(s)&&s>0||(tk||(tk=!0,console.warn(`[VFX-JS] \`intersection.duration\` must be a finite number above 0, got ${s}. Using 1 instead.`)),s=1),{threshold:t,leaveThreshold:i,rootMargin:r,duration:s}}function tW(e,t){let r=e.source;return r?"u">typeof HTMLImageElement&&r instanceof HTMLImageElement?"w"===t?r.naturalWidth:r.naturalHeight:"u">typeof HTMLVideoElement&&r instanceof HTMLVideoElement?"w"===t?r.videoWidth:r.videoHeight:"w"===t?r.width:r.height:0}function t$(e){return"repeat"===e?"repeat":"mirror"===e?"mirror":"clamp"}function tG(e){if(!e)return["clamp","clamp"];if(Array.isArray(e))return[t$(e[0]),t$(e[1])];let t=t$(e);return[t,t]}function tq(e,t,r){return Math.max(t,Math.min(r,e))}function tJ(e){return tq(e,-1e6,1e6)}function tj(e){return!(e instanceof HTMLImageElement||e instanceof HTMLVideoElement||e instanceof HTMLCanvasElement)}function tK(e,t){return t||!(e instanceof HTMLImageElement||e instanceof HTMLVideoElement||e instanceof HTMLCanvasElement)}class tY{static #rU=new Set;#rB;#eC;#rk=new Map;#eZ=new Set;#rV=new Set;#rD=new Set;#rl=new Map;#rO;#eK=!1;static init(e){try{return new tv(e)}catch{return null}}constructor(e={}){let t,r,i;if("u"<typeof document)throw"Cannot find 'document'. VFX-JS only runs on the browser.";if(!function(){try{let e=document.createElement("canvas"),t=e.getContext("webgl2")||e.getContext("webgl");return null!==t}catch{return!1}}())throw Error("[VFX-JS] WebGL is not available in this environment.");let s=(i=window.devicePixelRatio,t=void 0===e.scrollPadding?[.1,.1]:!1===e.scrollPadding?[0,0]:Array.isArray(e.scrollPadding)?[e.scrollPadding[0]??.1,e.scrollPadding[1]??.1]:[e.scrollPadding,e.scrollPadding],r=void 0===e.postEffect?[]:Array.isArray(e.postEffect)?e.postEffect:[e.postEffect],{pixelRatio:e.pixelRatio??i,zIndex:e.zIndex??void 0,autoplay:e.autoplay??!0,fixedCanvas:!1===e.scrollPadding,scrollPadding:t,wrapper:e.wrapper,postEffects:r,preserveDrawingBuffer:e.preserveDrawingBuffer??!1,timeScale:e.timeScale??1});this.#rO=function(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}();let o=document.createElement("canvas");for(let[e,t]of Object.entries({position:s.fixedCanvas?"fixed":"absolute",top:0,left:0,width:"0px",height:"0px","z-index":9999,"pointer-events":"none"}))o.style.setProperty(e,t.toString());void 0!==s.zIndex&&o.style.setProperty("z-index",s.zIndex.toString()),(s.wrapper??document.body).appendChild(o),this.#eC=o,this.#rB=new tO(s,o),tv.#rU.add(this),s.autoplay&&this.play()}async add(e,t,r){if(!this.#rO){for(let t of tv.#rU){let r=t.#rl.get(e);if(r&&tK(e,r.hide))throw Error("[VFX-JS] This element is captured. Dispose the capture before add.")}this.#rV.add(e);try{e instanceof HTMLImageElement?await this.#rN(e,t):e instanceof HTMLVideoElement?await this.#rX(e,t):e instanceof HTMLCanvasElement?K(e)&&r?await this.#rH(e,t,r):await this.#rW(e,t):await this.#r$(e,t)}finally{this.#rV.delete(e)}}}updateHICTexture(e,t){this.#rB.updateHICTexture(e,t)}get reducedMotion(){return this.#rO}get maxTextureSize(){return this.#rB.maxTextureSize}get canvas(){return this.#eC}addHTML(e,t){return this.#rG(e,t,!1)}addHTMLWithStill(e,t){return this.#rG(e,t,!0)}async #rG(e,t,r){let i;if(this.#rO)return;for(let t of tv.#rU)if(t.#rl.has(e))throw Error("[VFX-JS] This element is captured. Dispose the capture before addHTML.");if(!eI())return console.warn("html-in-canvas not supported, falling back to dom-to-canvas"),this.add(e,t);void 0!==t.overlay&&console.warn("addHTML does not support overlay mode (layoutsubtree hides children). Ignoring overlay option.");let{overlay:s,...o}=t,n=this.#rk.get(e);n&&this.#rB.removeElement(n),this.#eZ.add(e);try{let t=await e_(e,{onCapture:e=>{this.#rB.updateHICTexture(t.canvas,e)},maxSize:this.#rB.maxTextureSize,stillCover:r?{zIndex:this.#rq()}:void 0});n=t.canvas,i=t.initialCapture,this.#rk.set(e,n)}finally{this.#eZ.delete(e)}await this.#rH(n,o,i)}async capture(e,t={}){let r;if(this.#rO)return this.#rJ(e);if(this.#eK)throw Error("[VFX-JS] This VFX instance is destroyed.");if(e===document.documentElement||e===document.body||[...tv.#rU].some(t=>e.contains(t.#eC)))throw Error("[VFX-JS] capture() cannot take <html>, <body> or an element that contains a VFX canvas.");let i=t.hide??!1;for(let t of tv.#rU){if(t.#rl.has(e))throw Error(t===this?"[VFX-JS] This element is already captured. Share the capture instead.":"[VFX-JS] This element is already captured by another VFX instance.");if(t.#rk.has(e)||t.#eZ.has(e))throw Error("[VFX-JS] capture() cannot take an element that addHTML or a transition has wrapped.");if((t.#rB.hasElement(e)||t.#rV.has(e))&&tK(e,i))throw Error("[VFX-JS] capture() cannot take an element added with add(). Remove it first.")}let s={hide:i,abort:new AbortController};this.#rl.set(e,s);try{r=await this.#rB.addCapture(e,t,this.#rq(),()=>this.#rl.delete(e),s.abort.signal)}catch(t){if(this.#rl.delete(e),this.#eK)throw Error("[VFX-JS] This VFX instance was destroyed during capture().");throw t}if(this.#eK)throw r.dispose(),Error("[VFX-JS] This VFX instance was destroyed during capture().");return r}#rJ(e){let t=eB(e);return{texture:this.#rB.emptyTexture(),rect:t&&{x:t.left,y:t.top,width:t.width,height:t.height},update:()=>Promise.resolve(!1),dispose:()=>{}}}#rq(){let e=Number.parseInt(this.#eC.style.zIndex,10);return Number.isNaN(e)?9998:e-1}async #rH(e,t,r){try{await this.#rB.addElement(e,t,r)}finally{eC(e,this.#rB.isFrozen(e))}}addTransition(e,t={}){let r=new e1(this,e,t,()=>this.#rD.delete(r));return this.#rD.add(r),r}freezeInside(e){return this.#rB.freezeInside(e)}captureLive(e){return eI()?function(e,t,r,i={setupCapture:eF,teardownCapture:eP}){let s=!1;return i.setupCapture(e,{onCapture:e=>t.update(e),maxSize:r}).then(r=>{s||(e.getContext("2d")?.clearRect(0,0,e.width,e.height),t.update(r))},e=>console.error("[VFX-JS] live capture failed:",e)),{get texture(){return t.texture},dispose(){s||(s=!0,i.teardownCapture(e),t.dispose())}}}(e,this.#rB.liveTexture(),this.#rB.maxTextureSize):{texture:null,dispose:()=>{}}}lockSize(e){let t=this.#rk.get(e);return t?eR(t):()=>{}}forceRender(e){let t=this.#rk.get(e)??e;return this.#rB.forceRender(t)}remove(e){let t=this.#rk.get(e);t?(eL(t,e),this.#rk.delete(e),this.#rB.removeElement(t)):this.#rB.removeElement(e)}updateEffects(e,t){if(this.#rO)return Promise.resolve();let r=this.#rk.get(e)??e;return this.#rB.updateElementEffects(r,t)}async update(e){await this.updateInTime(e)}async updateInTime(e){let t=this.#rk.get(e)??(e instanceof HTMLCanvasElement?e:null),r=t?eT(t):void 0;return r||(e instanceof HTMLImageElement?await this.#rB.updateImageElement(e):e instanceof HTMLCanvasElement?this.#rB.updateCanvasElement(e):await this.#rB.updateTextElement(e),!0)}play(){this.#rO||this.#rB.play()}stop(){this.#rB.stop()}render(){this.#rO||this.#rB.render()}get time(){return this.#rB.time}setTime(e){this.#rB.setTime(e)}get timeScale(){return this.#rB.timeScale}set timeScale(e){this.#rB.timeScale=e}destroy(){for(let{abort:e}of(this.#eK=!0,tv.#rU.delete(this),this.#rl.values()))e.abort();for(let e of this.#rD)e.destroy();for(let[e,t]of(this.#rD.clear(),this.#rk))eL(t,e);this.#rk.clear(),this.#rB.destroy(),this.#eC.remove()}#rN(e,t){return e.complete?this.#rB.addElement(e,t):new Promise((r,i)=>{e.addEventListener("load",()=>{this.#rB.addElement(e,t).then(r,i)},{once:!0})})}#rX(e,t){return e.readyState>=3?this.#rB.addElement(e,t):new Promise((r,i)=>{e.addEventListener("canplay",()=>{this.#rB.addElement(e,t).then(r,i)},{once:!0})})}#rW(e,t){return this.#rB.addElement(e,t)}#r$(e,t){return this.#rB.addElement(e,t)}}tv=tY,e.s(["f",0,tY],61388),e.s([],90422);let tZ=`
vec4 splitRead(vec2 uvr, vec2 uvg, vec2 uvb, bool to) {
  vec4 r = to ? readTo(uvr) : readFrom(uvr);
  vec4 g = to ? readTo(uvg) : readFrom(uvg);
  vec4 b = to ? readTo(uvb) : readFrom(uvb);
  return vec4(r.r, g.g, b.b, (r.a + g.a + b.a) / 3.0);
}
`,tQ=`
float ign(vec2 p) {
  return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
}
`,t0=`
vec2 mirror(vec2 p) {
  return 1.0 - abs(1.0 - mod(p, 2.0));
}
`,t1=e=>"function"==typeof e.render&&!1!==e.enabled;e.s(["s",0,class extends l{name="hard_cut";frag=`
vec4 transition(vec2 uv, float t) {
  return t < 0.5 ? readFrom(uv) : readTo(uv);
}
`},"j",0,tQ,"S",0,t0,"F",0,tZ,"A",0,class{params;#T=[];constructor(e={}){this.params=e}async init(e){for(let t of(this.#T=this.stages.slice(1).map(()=>e.createRenderTarget()),this.stages))await t.init?.(e)}start(e){for(let t of this.stages)t.start?.(e)}update(e){for(let t of this.stages)t.update?.(e)}render(e){let t=this.stages.filter(t1);if(0===t.length)return void e.blit(e.src);let r=e.src;for(let[i,s]of t.entries()){if(i===t.length-1)return void s.render?.({...e,src:r});let o=this.#T[i];e.clear(o),s.render?.(function(e,t,r){return{...e,src:t,target:r,draw:t=>e.draw({...t,target:t.target??r}),blit:(t,i,s)=>e.blit(t,i??r,s),clear:t=>e.clear(t??r)}}(e,r,o)),r=o}}end(){for(let e of this.stages)e.end?.()}outputRect(e){let t=this.stages.filter(t1);return t[t.length-1]?.outputRect?.(e)}dispose(){for(let e of this.stages)e.dispose?.();for(let e of this.#T)e.dispose();this.#T=[]}}],66601),e.s(["f",0,class extends l{name="lens_distortion";frag=`
uniform float strength;
uniform float dispersion;
// The old content zooms from 1 to 1 + zoom; the new one from 1 + zoom back to 1.
uniform float zoom;
const float TAPS = 12.0;
// Width of the growing warp's edge.
const float SOFT = 0.5;

${tQ}
${t0}
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