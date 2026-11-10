(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,52844,e=>{var t=e.i(61069),r=e.i(16597),n=e.i(52894);e.s(["CodeTabs",0,function({tabs:e}){let[a,i]=(0,r.useState)(0);return(0,t.jsxs)("div",{className:"code",children:[(0,t.jsx)("div",{className:"code-bar code-tabs",role:"tablist",children:e.map((e,r)=>(0,t.jsx)("button",{type:"button",role:"tab","aria-selected":r===a,onClick:()=>i(r),children:e.name},e.name))}),(0,t.jsx)("pre",{children:(0,t.jsx)("code",{children:(0,n.f)(e[a].code.trim())})})]})}])},61468,e=>{var t=e.i(61069);e.i(90422);var r=e.i(7150);e.i(52729);var n=e.i(24979),a=e.i(29191),i=e.i(16597),o=e.i(92408),s=e.i(61388);let l=`
precision highp float;
uniform vec2 offset;
uniform float time;
uniform float speed;
uniform float dpr;
uniform float levels;
uniform float lineWidth;
uniform vec4 ink;
out vec4 outColor;

vec4 permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
        + i.y + vec4(0.0, i1.y, i2.y, 1.0))
        + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0 / 7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

void main() {
    vec2 p = (gl_FragCoord.xy - offset) / dpr / 1040.0;
    float t = time * speed;
    float n = snoise(vec3(p, t)) + 0.3 * snoise(vec3(p * 2.3, t * 1.4));
    float f = n * levels * 0.5;
    // Distance to the nearest level in CSS px.
    float d = abs(fract(f - 0.5) - 0.5) / fwidth(f) / dpr;
    float a = (1.0 - clamp(d / lineWidth, 0.0, 1.0)) * ink.a;
    outColor = vec4(ink.rgb * a, a);
}`,c=`
precision highp float;
uniform vec2 resolution;
uniform vec2 offset;
uniform float time;
uniform float dpr;
uniform float lineWidth;
uniform vec4 ink;
uniform vec4 waves[8];
uniform float phases[8];
out vec4 outColor;

void main() {
    float height = resolution.y / dpr;
    vec2 p = (gl_FragCoord.xy - offset) / dpr;
    float a = 0.0;
    for (int i = 0; i < 8; i++) {
        vec4 w = waves[i];
        float k = 6.2831853 / w.z;
        float phase = p.x * k + time * w.w + phases[i];
        float y = height * (0.5 + w.x + w.y * sin(phase));
        float slope = height * w.y * k * cos(phase);
        // Distance to the curve in CSS px, kept even on steep parts.
        float d = abs(p.y - y) / sqrt(1.0 + slope * slope);
        float c = 1.0 - clamp(d / lineWidth, 0.0, 1.0);
        a += c * (1.0 - a);
    }
    a *= ink.a;
    outColor = vec4(ink.rgb * a, a);
}`,d=["contour","sine"];function u({pattern:e}){let n=(0,i.useRef)(null),a=(0,i.useRef)(null),o=(0,i.useRef)(null),h=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=n.current,t=a.current,i=o.current;if(!e||!t||!i||!(0,r.f)())return;let d=Math.min(window.devicePixelRatio,2),u=s.f.init({wrapper:e,zIndex:-1,scrollPadding:!1,pixelRatio:d,autoplay:!1});if(!u)return;let[v,m,p]=function(e){let[t=0,r=0,n=0]=(e.match(/[\d.]+/g)??[]).map(Number);return[t/255,r/255,n/255]}(getComputedStyle(e).color);return u.add(t,{shader:l,uniforms:{levels:28,speed:.04,lineWidth:.75,dpr:d,ink:[v,m,p,.12]}}),u.add(i,{shader:c,uniforms:{...function(){let e=[],t=[];for(let r=0;r<8;r++){let r=f(-.25,.25),n=(.4-Math.abs(r))*f(.3,1),a=f(500,1400),i=f(.15,.5);e.push(r,n,a,i),t.push(f(0,2*Math.PI))}return{waves:e,phases:t}}(),lineWidth:.8,dpr:d,ink:[v,m,p,.16]}}),h.current=u,()=>{h.current=null,u.destroy()}},[]),(0,i.useEffect)(()=>{let t=h.current;if(t&&d.includes(e)&&(t.render(),!matchMedia("(prefers-reduced-motion: reduce)").matches))return t.play(),()=>t.stop()},[e]),(0,t.jsxs)("div",{className:"hero-shader",ref:n,"aria-hidden":!0,children:[(0,t.jsx)("div",{"data-pattern":"contour",ref:a}),(0,t.jsx)("div",{"data-pattern":"sine",ref:o})]})}let f=(e,t)=>e+Math.random()*(t-e);var h=e.i(45604);let v={pixelScan:{direction:"center"}},m={pixelScan:1.8},p=o.I.map(e=>e.name).filter(e=>"crossfade"!==e),x={crossfade:"Crossfade",swipe:"Swipe",zoom:"Zoom",zoomBlur:"ZoomBlur",crosszoom:"CrossZoom",glitch:"Glitch",glitchSlide:"GlitchSlide",jpegGlitch:"JpegGlitch",datamosh:"Datamosh",pixelsort:"PixelSort",lensDistortion:"LensDistortion",slitScan:"SlitScan",pixelScan:"PixelScan",pixelStretch:"PixelStretch",tile:"Tile",distortFade:"DistortFade"},y=["default","orange","purple","green"],g=["dots","grid","diagonal","contour","sine"],b={datamosh:["contour","sine"]};function w(e,t){let r=e.getBoundingClientRect().left+e.clientWidth/2,n=t??null,a=1/0;for(let i of t?[]:e.children){let e=i.getBoundingClientRect(),t=Math.abs(e.left+e.width/2-r);t<a&&(n=i,a=t)}for(let t of e.querySelectorAll("[data-center]"))t!==n&&t.removeAttribute("data-center");n?.setAttribute("data-center","")}let S={swipe:"TRANSITIONS",glitch:"TRANSITIONS",jpegGlitch:"トランジション",zoomBlur:"transitions_"};function j(e){let t=e.children[0],r=e.children[p.length].offsetLeft-t.offsetLeft,n=2-Math.floor((e.scrollLeft+e.clientWidth/2-t.offsetLeft)/r);return 0!==n&&(e.scrollLeft+=n*r),n*p.length}function z(e,t){let r=e.filter(e=>e!==t);return r[Math.floor(Math.random()*r.length)]}e.s(["HeroStage",0,function(){let{ref:e,run:s}=(0,n.f)({duration:1.1,overflow:0}),[l,c]=(0,i.useState)(p[0]),[f,C]=(0,i.useState)(!1),[N,L]=(0,i.useState)({palette:"default",pattern:"dots"}),[k,E]=(0,i.useState)({index:2*p.length+1}),[T,R]=(0,i.useState)(!1),A=(0,i.useRef)(k.index),I=(0,i.useRef)(!1),M=(0,i.useRef)(null),W=(0,i.useRef)(null),P=(0,i.useCallback)(async(e,t=!1)=>{var n;if(I.current)return;I.current=!0;let a=p[e%p.length],i=W.current?.children[e];W.current&&i&&w(W.current,i);let l=!(0,r.f)()&&/AppleWebKit/.test(navigator.userAgent)&&!/Chrome\/|Chromium\//.test(navigator.userAgent);l&&M.current?.setAttribute("data-flat",""),t&&i&&!matchMedia("(prefers-reduced-motion: reduce)").matches?await ((n=i).dataset.blink="",new Promise(e=>setTimeout(()=>{delete n.dataset.blink,e()},300))):l&&await new Promise(e=>setTimeout(e,300)),await s(()=>{A.current=e+1,E({index:e+1}),c(a),C(!0),L(e=>({palette:z(y,e.palette),pattern:z(function(e){if((0,r.f)())return b[e]??g;let t=e=>e.filter(e=>!d.includes(e)),n=t(b[e]??[]);return n.length>0?n:t(g)}(a),e.pattern)}))},{transition:o.Y[a],params:v[a],duration:m[a]}),M.current?.removeAttribute("data-flat"),I.current=!1},[s]);(0,i.useLayoutEffect)(()=>{var e,t;let r=W.current,n=r?.children[k.index];r&&n&&(r.dataset.ready="",e=r,r.scrollLeft=(t=n).offsetLeft+t.offsetWidth/2-e.clientWidth/2,A.current+=j(r),w(r))},[k]),(0,i.useEffect)(()=>{let e=W.current;if(!e)return;let t=0,r=()=>{I.current||(A.current+=j(e))},n=()=>{clearTimeout(t),t=window.setTimeout(r,150)},a=0,i=()=>{cancelAnimationFrame(a),I.current||(a=requestAnimationFrame(()=>w(e)))};e.addEventListener("scroll",i,{passive:!0});let o=()=>R(!1),s="onscrollend"in window;return e.addEventListener(s?"scrollend":"scroll",s?r:n),e.addEventListener("pointerdown",o),e.addEventListener("wheel",o,{passive:!0}),e.addEventListener("touchstart",o,{passive:!0}),()=>{clearTimeout(t),cancelAnimationFrame(a),e.removeEventListener("scroll",i),e.removeEventListener("scrollend",r),e.removeEventListener("scroll",n),e.removeEventListener("pointerdown",o),e.removeEventListener("wheel",o),e.removeEventListener("touchstart",o)}},[]),(0,i.useEffect)(()=>{let e=M.current,t=e?.closest(".frame");if(!e||!t)return;let r=document.documentElement,n=()=>{let n=document.querySelector(".header")?.clientHeight??0;t.scrollTop<e.offsetHeight-n?r.dataset.header="clear":delete r.dataset.header};return n(),t.addEventListener("scroll",n,{passive:!0}),()=>{t.removeEventListener("scroll",n),delete r.dataset.header}},[]),(0,i.useEffect)(()=>{matchMedia("(prefers-reduced-motion: reduce)").matches&&R(!1)},[]),(0,i.useEffect)(()=>{if(!T)return;let e=!0,t=new IntersectionObserver(([t])=>{e=t.isIntersecting});M.current&&t.observe(M.current);let r=setInterval(()=>{e&&!document.hidden&&P(A.current)},3e3);return()=>{clearInterval(r),t.disconnect()}},[T,P]);let D=(0,i.useCallback)(t=>{M.current=t,e(t)},[e]),_=e=>{let t=W.current;t&&(R(!1),t.scrollBy({left:e*t.clientWidth/2,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}))},B=[];for(let e=0;e<5;e++){let r=2===e;for(let[n,a]of p.entries()){let i=e*p.length+n,o=a===l;B.push((0,t.jsxs)("button",{type:"button",className:"carousel-item","data-current":o||void 0,tabIndex:r?void 0:-1,"aria-hidden":!r||void 0,"aria-label":o?`Play ${x[a]} again`:`Play ${x[a]}`,onClick:e=>{e.detail>0&&e.currentTarget.blur(),R(!1),P(i,!0)},children:[(0,t.jsx)("span",{className:"carousel-play","aria-hidden":!0}),(0,t.jsx)("span",{className:"carousel-label",children:x[a]})]},i))}}return(0,t.jsxs)("section",{className:"hero","data-theme":f?l:void 0,"data-palette":N.palette,"data-pattern":N.pattern,ref:D,children:[(0,t.jsx)("div",{className:"hero-glow","aria-hidden":!0}),(0,t.jsx)(u,{pattern:N.pattern}),(0,t.jsxs)("p",{className:"eyebrow",children:[(0,t.jsx)("span",{className:"pill",children:"new"})," @vfx-js/transitions"]}),(0,t.jsxs)("h1",{className:"hero-title",children:["Shader"," ",(0,t.jsx)("em",{className:"hero-em",children:f&&S[l]||"transitions"}),(0,t.jsx)("br",{}),"for the DOM."]}),(0,t.jsxs)("div",{className:"carousel-frame",children:[(0,t.jsx)("div",{className:"carousel",ref:W,children:B}),(0,t.jsx)("button",{type:"button",className:"carousel-arrow","data-side":"left","aria-label":"Scroll presets left",onClick:()=>_(-1)}),(0,t.jsx)("button",{type:"button",className:"carousel-arrow","data-side":"right","aria-label":"Scroll presets right",onClick:()=>_(1)})]}),(0,t.jsx)("p",{className:"hero-tagline",children:"Next-level page transitions with HTML-in-Canvas. Your live pages go through WebGL shaders, in a few lines of React, Vue, Svelte, Astro or plain JS."}),(0,t.jsxs)("div",{className:"hero-cta",children:[(0,t.jsx)(a.default,{href:"/getting-started",className:"btn btn-primary",children:"Get started"}),(0,t.jsx)(h.TLink,{href:"/presets",preset:"datamosh",className:"btn btn-ghost",children:"See all presets →"})]}),(0,t.jsx)("span",{className:"scroll-cue","aria-hidden":!0,children:"scroll"})]})}],61468)},45604,e=>{var t=e.i(61069);e.i(52729);var r=e.i(22305),n=e.i(29191),a=e.i(92408);e.s(["TLink",0,function({preset:e,...i}){return(0,t.jsx)(n.default,{...i,onClick:(0,r.e)({transition:a.Y[e]})})}])}])})();