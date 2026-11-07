(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68444,e=>{var t=e.i(61069),o=e.i(16597),r=e.i(99354);e.s(["CodeTabs",0,function({tabs:e}){let[n,a]=(0,o.useState)(0);return(0,t.jsxs)("div",{className:"code",children:[(0,t.jsx)("div",{className:"code-bar code-tabs",role:"tablist",children:e.map((e,o)=>(0,t.jsx)("button",{type:"button",role:"tab","aria-selected":o===n,onClick:()=>a(o),children:e.name},e.name))}),(0,t.jsx)("pre",{children:(0,t.jsx)("code",{children:(0,r.f)(e[n].code.trim())})})]})}])},33685,e=>{var t=e.i(61069);e.i(52729);var o=e.i(24979),r=e.i(29191),n=e.i(16597),a=e.i(9142);e.i(90422);var i=e.i(61388);let s=`
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
}`,l=`
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
}`,c=["contour","sine"];function d({pattern:e}){let o=(0,n.useRef)(null),r=(0,n.useRef)(null),a=(0,n.useRef)(null),f=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=o.current,t=r.current,n=a.current;if(!e||!t||!n)return;let c=Math.min(window.devicePixelRatio,2),d=i.f.init({wrapper:e,zIndex:-1,scrollPadding:!1,pixelRatio:c,autoplay:!1});if(!d)return;let[m,p,h]=function(e){let[t=0,o=0,r=0]=(e.match(/[\d.]+/g)??[]).map(Number);return[t/255,o/255,r/255]}(getComputedStyle(e).color);return d.add(t,{shader:s,uniforms:{levels:28,speed:.04,lineWidth:.75,dpr:c,ink:[m,p,h,.12]}}),d.add(n,{shader:l,uniforms:{...function(){let e=[],t=[];for(let o=0;o<8;o++){let o=u(-.25,.25),r=(.4-Math.abs(o))*u(.3,1),n=u(500,1400),a=u(.15,.5);e.push(o,r,n,a),t.push(u(0,2*Math.PI))}return{waves:e,phases:t}}(),lineWidth:.8,dpr:c,ink:[m,p,h,.16]}}),f.current=d,()=>{f.current=null,d.destroy()}},[]),(0,n.useEffect)(()=>{let t=f.current;if(t&&c.includes(e)&&(t.render(),!matchMedia("(prefers-reduced-motion: reduce)").matches))return t.play(),()=>t.stop()},[e]),(0,t.jsxs)("div",{className:"hero-shader",ref:o,"aria-hidden":!0,children:[(0,t.jsx)("div",{"data-pattern":"contour",ref:r}),(0,t.jsx)("div",{"data-pattern":"sine",ref:a})]})}let u=(e,t)=>e+Math.random()*(t-e);var f=e.i(11698);let m={pixelScan:{direction:"center"}},p={pixelScan:1.8},h=a.I.map(e=>e.name).filter(e=>"crossfade"!==e),v={crossfade:"Crossfade",swipe:"Swipe",zoom:"Zoom",zoomBlur:"ZoomBlur",crosszoom:"CrossZoom",glitch:"Glitch",glitchSlide:"GlitchSlide",jpegGlitch:"JpegGlitch",datamosh:"Datamosh",pixelsort:"PixelSort",lensDistortion:"LensDistortion",slitScan:"SlitScan",pixelScan:"PixelScan",pixelStretch:"PixelStretch",tile:"Tile",distortFade:"DistortFade"},x=["default","orange","purple","green"],g=["dots","grid","diagonal","contour","sine"],y={datamosh:["contour","sine"]};function b(e,t){let o=e.getBoundingClientRect().left+e.clientWidth/2,r=t??null,n=1/0;for(let a of t?[]:e.children){let e=a.getBoundingClientRect(),t=Math.abs(e.left+e.width/2-o);t<n&&(r=a,n=t)}for(let t of e.querySelectorAll("[data-center]"))t!==r&&t.removeAttribute("data-center");r?.setAttribute("data-center","")}let w={swipe:"TRANSITIONS",glitch:"TRANSITIONS",jpegGlitch:"トランジション",zoomBlur:"transitions_"};function S(e){let t=e.children[0],o=e.children[h.length].offsetLeft-t.offsetLeft,r=2-Math.floor((e.scrollLeft+e.clientWidth/2-t.offsetLeft)/o);return 0!==r&&(e.scrollLeft+=r*o),r*h.length}function k(e,t){let o=e.filter(e=>e!==t);return o[Math.floor(Math.random()*o.length)]}e.s(["HeroStage",0,function(){let{ref:e,run:i}=(0,o.f)({duration:1.1,overflow:0}),[s,l]=(0,n.useState)(h[0]),[c,u]=(0,n.useState)(!1),[z,j]=(0,n.useState)({palette:"default",pattern:"dots"}),[C,N]=(0,n.useState)({index:2*h.length+1}),[L,E]=(0,n.useState)(!1),T=(0,n.useRef)(C.index),R=(0,n.useRef)(!1),I=(0,n.useRef)(null),M=(0,n.useRef)(null),W=(0,n.useCallback)(async(e,t=!1)=>{var o;if(R.current)return;R.current=!0;let r=h[e%h.length],n=M.current?.children[e];M.current&&n&&b(M.current,n),t&&n&&!matchMedia("(prefers-reduced-motion: reduce)").matches&&await ((o=n).dataset.blink="",new Promise(e=>setTimeout(()=>{delete o.dataset.blink,e()},300))),await i(()=>{T.current=e+1,N({index:e+1}),l(r),u(!0),j(e=>({palette:k(x,e.palette),pattern:k(y[r]??g,e.pattern)}))},{transition:a.Y[r],params:m[r],duration:p[r]}),R.current=!1},[i]);(0,n.useLayoutEffect)(()=>{var e,t;let o=M.current,r=o?.children[C.index];o&&r&&(o.dataset.ready="",e=o,o.scrollLeft=(t=r).offsetLeft+t.offsetWidth/2-e.clientWidth/2,T.current+=S(o),b(o))},[C]),(0,n.useEffect)(()=>{let e=M.current;if(!e)return;let t=0,o=()=>{R.current||(T.current+=S(e))},r=()=>{clearTimeout(t),t=window.setTimeout(o,150)},n=0,a=()=>{cancelAnimationFrame(n),R.current||(n=requestAnimationFrame(()=>b(e)))};e.addEventListener("scroll",a,{passive:!0});let i=()=>E(!1),s="onscrollend"in window;return e.addEventListener(s?"scrollend":"scroll",s?o:r),e.addEventListener("pointerdown",i),e.addEventListener("wheel",i,{passive:!0}),e.addEventListener("touchstart",i,{passive:!0}),()=>{clearTimeout(t),cancelAnimationFrame(n),e.removeEventListener("scroll",a),e.removeEventListener("scrollend",o),e.removeEventListener("scroll",r),e.removeEventListener("pointerdown",i),e.removeEventListener("wheel",i),e.removeEventListener("touchstart",i)}},[]),(0,n.useEffect)(()=>{let e=I.current,t=e?.closest(".frame");if(!e||!t)return;let o=document.documentElement,r=()=>{let r=document.querySelector(".header")?.clientHeight??0;t.scrollTop<e.offsetHeight-r?o.dataset.header="clear":delete o.dataset.header};return r(),t.addEventListener("scroll",r,{passive:!0}),()=>{t.removeEventListener("scroll",r),delete o.dataset.header}},[]),(0,n.useEffect)(()=>{matchMedia("(prefers-reduced-motion: reduce)").matches&&E(!1)},[]),(0,n.useEffect)(()=>{if(!L)return;let e=!0,t=new IntersectionObserver(([t])=>{e=t.isIntersecting});I.current&&t.observe(I.current);let o=setInterval(()=>{e&&!document.hidden&&W(T.current)},3e3);return()=>{clearInterval(o),t.disconnect()}},[L,W]);let D=(0,n.useCallback)(t=>{I.current=t,e(t)},[e]),P=e=>{let t=M.current;t&&(E(!1),t.scrollBy({left:e*t.clientWidth/2,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}))},B=[];for(let e=0;e<5;e++){let o=2===e;for(let[r,n]of h.entries()){let a=e*h.length+r,i=n===s;B.push((0,t.jsxs)("button",{type:"button",className:"carousel-item","data-current":i||void 0,tabIndex:o?void 0:-1,"aria-hidden":!o||void 0,"aria-label":i?`Play ${v[n]} again`:`Play ${v[n]}`,onClick:e=>{e.detail>0&&e.currentTarget.blur(),E(!1),W(a,!0)},children:[(0,t.jsx)("span",{className:"carousel-play","aria-hidden":!0}),(0,t.jsx)("span",{className:"carousel-label",children:v[n]})]},a))}}return(0,t.jsxs)("section",{className:"hero","data-theme":c?s:void 0,"data-palette":z.palette,"data-pattern":z.pattern,ref:D,children:[(0,t.jsx)("div",{className:"hero-glow","aria-hidden":!0}),(0,t.jsx)(d,{pattern:z.pattern}),(0,t.jsxs)("p",{className:"eyebrow",children:[(0,t.jsx)("span",{className:"pill",children:"new"})," @vfx-js/transitions"]}),(0,t.jsxs)("h1",{className:"hero-title",children:["Shader"," ",(0,t.jsx)("em",{className:"hero-em",children:c&&w[s]||"transitions"}),(0,t.jsx)("br",{}),"for the DOM."]}),(0,t.jsxs)("div",{className:"carousel-frame",children:[(0,t.jsx)("div",{className:"carousel",ref:M,children:B}),(0,t.jsx)("button",{type:"button",className:"carousel-arrow","data-side":"left","aria-label":"Scroll presets left",onClick:()=>P(-1)}),(0,t.jsx)("button",{type:"button",className:"carousel-arrow","data-side":"right","aria-label":"Scroll presets right",onClick:()=>P(1)})]}),(0,t.jsx)("p",{className:"hero-tagline",children:"Next-level page transitions with HTML-in-Canvas. Your live pages go through WebGL shaders, in a few lines of React or plain JS."}),(0,t.jsxs)("div",{className:"hero-cta",children:[(0,t.jsx)(r.default,{href:"/getting-started",className:"btn btn-primary",children:"Get started"}),(0,t.jsx)(f.TLink,{href:"/presets",preset:"datamosh",className:"btn btn-ghost",children:"See all presets →"})]}),(0,t.jsx)("span",{className:"scroll-cue","aria-hidden":!0,children:"scroll"})]})}],33685)},99354,e=>{var t=e.i(16597);let o=RegExp([/(\/\/[^\n]*|<!--[\s\S]*?-->|^[ \t]*#[^\n]*)/.source,/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/.source,"\\b(import|from|export|const|let|return|await|async|new|function|type|if|else|for|of|in|out|uniform|precision|void|int|bool|float|vec2|vec3|vec4|mat2|mat3|mat4|sampler2D|discard|true|false)\\b|\\b(mix|smoothstep|step|fract|clamp|texture|length|dot|sin|cos|floor|abs|min|max|pow|normalize)(?=\\s*\\()",/\b(\d+(?:\.\d+)?)\b/.source,/(<\/?[A-Za-z][\w.-]*|\/?>)/.source].join("|"),"gm"),r=["tk-c","tk-s","tk-k","tk-f","tk-n","tk-t"];e.s(["f",0,function(e){let n=[],a=0;for(let i of e.matchAll(o)){let o=i.index??0;o>a&&n.push(e.slice(a,o));let s=i.findIndex((e,t)=>t>0&&void 0!==e);n.push((0,t.createElement)("span",{key:o,className:r[s-1]},i[0])),a=o+i[0].length}return n.push(e.slice(a)),n}])},47353,e=>{e.i(52729);var t=e.i(58786),o=e.i(9142);e.s(["PageTransition",0,function({preset:e}){return(0,t.f)({transition:o.Y[e]}),null}])},11698,e=>{var t=e.i(61069);e.i(52729);var o=e.i(22305),r=e.i(29191),n=e.i(9142);e.s(["TLink",0,function({preset:e,...a}){return(0,t.jsx)(r.default,{...a,onClick:(0,o.e)({transition:n.Y[e]})})}])},9142,e=>{e.i(10303);var t=e.i(63363),o=e.i(75682),r=e.i(28317),n=e.i(96210),a=e.i(84177),i=e.i(166),s=e.i(57888),l=e.i(35668),c=e.i(97394),d=e.i(81651),u=e.i(18013),f=e.i(26873),m=e.i(76359),p=e.i(27202),h=e.i(99050),v=e.i(1656);let x={crossfade:t.f,swipe:m.f,zoom:h.f,zoomBlur:v.f,crosszoom:o.f,glitch:a.f,glitchSlide:i.f,jpegGlitch:s.f,datamosh:r.f,pixelsort:u.f,lensDistortion:l.f,slitScan:f.f,pixelScan:c.f,pixelStretch:d.f,tile:p.f,distortFade:n.f},g='"left" | "right" | "up" | "down"',y=[{name:"crossfade",note:"Plain mix. The default.",category:"page"},{name:"swipe",note:"Content moves out, the new one follows it in.",category:"page",options:[{name:"direction",type:g,default:'"left"',note:"Where the old content moves."}]},{name:"zoom",note:"Old zooms in, new grows out of the center.",category:"page",overflow:!0},{name:"crosszoom",note:"Crossfade through a zoom blur.",category:"page",overflow:!0},{name:"distortFade",note:"Noise warp while crossfading.",category:"page"},{name:"tile",note:"Tiles shrink away to show the new content.",category:"page",options:[{name:"direction",type:`"center" | ${g}`,default:'"center"',note:"Where the tiles start to shrink."},{name:"shape",type:'"hex" | "square"',default:'"hex"',note:"Tile shape."},{name:"count",type:"number",default:"12",note:"Tiles along the longer side."},{name:"shadow",type:"number (0–1)",default:"0.5",note:"Drop shadow under the shrinking tiles. 0 turns it off."}]},{name:"glitch",note:"Jittery RGB-split blocks.",category:"bold",options:[{name:"amount",type:"number",default:"1",note:"How far the blocks shift."},{name:"speed",type:"number",default:"1",note:"How fast the blocks jump."}]},{name:"glitchSlide",note:"Sliding stripes with RGB split.",category:"bold"},{name:"jpegGlitch",note:"Hard cut through a real JPEG glitch.",category:"bold",options:[{name:"iterations",type:"number",default:"4",note:"Encode and corrupt passes at the peak. More is messier."},{name:"quality",type:"number (0–1)",default:"0.1",note:"JPEG quality. Lower gives bigger blocks."}]},{name:"datamosh",note:"Hard cut that heals block by block.",category:"bold",options:[{name:"blockSize",type:"number",default:"32",note:"Block size in px. 2 or more."}]},{name:"lensDistortion",note:"Lens warp with a rainbow split.",category:"bold",options:[{name:"strength",type:"number",default:"1",note:"How hard the lens warps."},{name:"dispersion",type:"number",default:"0.6",note:"Rainbow split. 0 turns it off."},{name:"zoom",type:"number",default:"3",note:"Old content zooms in this much, new zooms back out from it. 0 turns it off."}]},{name:"pixelScan",note:"A front of glowing pixel cells.",category:"bold",options:[{name:"direction",type:'"right" | "left" | "up" | "down" | "center"',default:'"right"',note:"Where the fronts sweep. center spreads out in rings."},{name:"blackout",type:"boolean",default:"true",note:"Fill the gap between old and new with black. false leaves it transparent."}]},{name:"pixelsort",note:"Melts into sorted streaks and sorts back out.",category:"image",options:[{name:"direction",type:'"up" | "down" | "left" | "right"',default:'"up"',note:"Where the old content melts."}]},{name:"slitScan",note:"Smears into stripes and back out.",category:"image"},{name:"pixelStretch",note:"Stretches into streaks from the top.",category:"image"},{name:"zoomBlur",note:"Radial blur with RGB split.",category:"image",overflow:!0}];e.s(["I",0,y,"Y",0,x])}])})();