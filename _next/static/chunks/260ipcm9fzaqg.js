(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68444,e=>{var t=e.i(61069),r=e.i(16597),o=e.i(99354);e.s(["CodeTabs",0,function({tabs:e}){let[n,a]=(0,r.useState)(0);return(0,t.jsxs)("div",{className:"code",children:[(0,t.jsx)("div",{className:"code-bar code-tabs",role:"tablist",children:e.map((e,r)=>(0,t.jsx)("button",{type:"button",role:"tab","aria-selected":r===n,onClick:()=>a(r),children:e.name},e.name))}),(0,t.jsx)("pre",{children:(0,t.jsx)("code",{children:(0,o.f)(e[n].code.trim())})})]})}])},33685,e=>{var t=e.i(61069);e.i(52729);var r=e.i(24979);e.i(10303);var o=e.i(97394),n=e.i(29191),a=e.i(16597),i=e.i(9142);e.i(90422);var s=e.i(61388);let l=`
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
}`,d=["contour","sine"];function u({pattern:e}){let r=(0,a.useRef)(null),o=(0,a.useRef)(null),n=(0,a.useRef)(null),i=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=r.current,t=o.current,a=n.current;if(!e||!t||!a)return;let d=Math.min(window.devicePixelRatio,2),u=s.f.init({wrapper:e,zIndex:-1,scrollPadding:!1,pixelRatio:d,autoplay:!1});if(!u)return;let[p,m,h]=function(e){let[t=0,r=0,o=0]=(e.match(/[\d.]+/g)??[]).map(Number);return[t/255,r/255,o/255]}(getComputedStyle(e).color);return u.add(t,{shader:l,uniforms:{levels:28,speed:.04,lineWidth:.75,dpr:d,ink:[p,m,h,.12]}}),u.add(a,{shader:c,uniforms:{...function(){let e=[],t=[];for(let r=0;r<8;r++){let r=f(-.25,.25),o=(.4-Math.abs(r))*f(.3,1),n=f(500,1400),a=f(.15,.5);e.push(r,o,n,a),t.push(f(0,2*Math.PI))}return{waves:e,phases:t}}(),lineWidth:.8,dpr:d,ink:[p,m,h,.16]}}),i.current=u,()=>{i.current=null,u.destroy()}},[]),(0,a.useEffect)(()=>{let t=i.current;if(t&&d.includes(e)&&(t.render(),!matchMedia("(prefers-reduced-motion: reduce)").matches))return t.play(),()=>t.stop()},[e]),(0,t.jsxs)("div",{className:"hero-shader",ref:r,"aria-hidden":!0,children:[(0,t.jsx)("div",{"data-pattern":"contour",ref:o}),(0,t.jsx)("div",{"data-pattern":"sine",ref:n})]})}let f=(e,t)=>e+Math.random()*(t-e);var p=e.i(11698);let m={...i.Y,pixelScan:(0,o.d)({direction:"center"})},h={pixelScan:1.8},v=i.I.map(e=>e.name).filter(e=>"crossfade"!==e),x={crossfade:"Crossfade",swipe:"Swipe",zoom:"Zoom",zoomBlur:"ZoomBlur",crosszoom:"CrossZoom",glitch:"Glitch",glitchSlide:"GlitchSlide",jpegGlitch:"JpegGlitch",datamosh:"Datamosh",pixelsort:"PixelSort",lensDistortion:"LensDistortion",slitScan:"SlitScan",pixelScan:"PixelScan",pixelStretch:"PixelStretch",tile:"Tile",distortFade:"DistortFade"},y=["default","orange","purple","green"],g=["dots","grid","diagonal","contour","sine"],b={datamosh:["contour","sine"]};function w(e,t){let r=e.getBoundingClientRect().left+e.clientWidth/2,o=t??null,n=1/0;for(let a of t?[]:e.children){let e=a.getBoundingClientRect(),t=Math.abs(e.left+e.width/2-r);t<n&&(o=a,n=t)}for(let t of e.querySelectorAll("[data-center]"))t!==o&&t.removeAttribute("data-center");o?.setAttribute("data-center","")}let S={swipe:"TRANSITIONS",glitch:"TRANSITIONS",jpegGlitch:"トランジション",zoomBlur:"transitions_"};function k(e){let t=e.children[0],r=e.children[v.length].offsetLeft-t.offsetLeft,o=2-Math.floor((e.scrollLeft+e.clientWidth/2-t.offsetLeft)/r);return 0!==o&&(e.scrollLeft+=o*r),o*v.length}function z(e,t){let r=e.filter(e=>e!==t);return r[Math.floor(Math.random()*r.length)]}e.s(["HeroStage",0,function(){let{ref:e,run:o}=(0,r.f)({duration:1.1,overflow:0}),[i,s]=(0,a.useState)(v[0]),[l,c]=(0,a.useState)({palette:"default",pattern:"dots"}),[d,f]=(0,a.useState)({index:2*v.length+1}),[j,C]=(0,a.useState)(!1),L=(0,a.useRef)(d.index),N=(0,a.useRef)(!1),E=(0,a.useRef)(null),T=(0,a.useRef)(null),R=(0,a.useCallback)(async(e,t=!1)=>{var r;if(N.current)return;N.current=!0;let n=v[e%v.length],a=T.current?.children[e];T.current&&a&&w(T.current,a),t&&a&&!matchMedia("(prefers-reduced-motion: reduce)").matches&&await ((r=a).dataset.blink="",new Promise(e=>setTimeout(()=>{delete r.dataset.blink,e()},300))),await o(()=>{L.current=e+1,f({index:e+1}),s(n),c(e=>({palette:z(y,e.palette),pattern:z(b[n]??g,e.pattern)}))},{transition:m[n],duration:h[n]}),N.current=!1},[o]);(0,a.useLayoutEffect)(()=>{var e,t;let r=T.current,o=r?.children[d.index];r&&o&&(r.dataset.ready="",e=r,r.scrollLeft=(t=o).offsetLeft+t.offsetWidth/2-e.clientWidth/2,L.current+=k(r),w(r))},[d]),(0,a.useEffect)(()=>{let e=T.current;if(!e)return;let t=0,r=()=>{N.current||(L.current+=k(e))},o=()=>{clearTimeout(t),t=window.setTimeout(r,150)},n=0,a=()=>{cancelAnimationFrame(n),N.current||(n=requestAnimationFrame(()=>w(e)))};e.addEventListener("scroll",a,{passive:!0});let i=()=>C(!1),s="onscrollend"in window;return e.addEventListener(s?"scrollend":"scroll",s?r:o),e.addEventListener("pointerdown",i),e.addEventListener("wheel",i,{passive:!0}),e.addEventListener("touchstart",i,{passive:!0}),()=>{clearTimeout(t),cancelAnimationFrame(n),e.removeEventListener("scroll",a),e.removeEventListener("scrollend",r),e.removeEventListener("scroll",o),e.removeEventListener("pointerdown",i),e.removeEventListener("wheel",i),e.removeEventListener("touchstart",i)}},[]),(0,a.useEffect)(()=>{let e=E.current,t=e?.closest(".frame");if(!e||!t)return;let r=document.documentElement,o=()=>{let o=document.querySelector(".header")?.clientHeight??0;t.scrollTop<e.offsetHeight-o?r.dataset.header="clear":delete r.dataset.header};return o(),t.addEventListener("scroll",o,{passive:!0}),()=>{t.removeEventListener("scroll",o),delete r.dataset.header}},[]),(0,a.useEffect)(()=>{matchMedia("(prefers-reduced-motion: reduce)").matches&&C(!1)},[]),(0,a.useEffect)(()=>{if(!j)return;let e=!0,t=new IntersectionObserver(([t])=>{e=t.isIntersecting});E.current&&t.observe(E.current);let r=setInterval(()=>{e&&!document.hidden&&R(L.current)},3e3);return()=>{clearInterval(r),t.disconnect()}},[j,R]);let D=(0,a.useCallback)(t=>{E.current=t,e(t)},[e]),P=e=>{let t=T.current;t&&(C(!1),t.scrollBy({left:e*t.clientWidth/2,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}))},G=[];for(let e=0;e<5;e++){let r=2===e;for(let[o,n]of v.entries()){let a=e*v.length+o,s=n===i;G.push((0,t.jsxs)("button",{type:"button",className:"carousel-item","data-current":s||void 0,tabIndex:r?void 0:-1,"aria-hidden":!r||void 0,"aria-label":s?`Play ${x[n]} again`:`Play ${x[n]}`,onClick:e=>{e.detail>0&&e.currentTarget.blur(),C(!1),R(a,!0)},children:[(0,t.jsx)("span",{className:"carousel-play","aria-hidden":!0}),(0,t.jsx)("span",{className:"carousel-label",children:x[n]})]},a))}}return(0,t.jsxs)("section",{className:"hero","data-theme":i,"data-palette":l.palette,"data-pattern":l.pattern,ref:D,children:[(0,t.jsx)("div",{className:"hero-glow","aria-hidden":!0}),(0,t.jsx)(u,{pattern:l.pattern}),(0,t.jsxs)("p",{className:"eyebrow",children:[(0,t.jsx)("span",{className:"pill",children:"new"})," @vfx-js/transitions"]}),(0,t.jsxs)("h1",{className:"hero-title",children:["Shader"," ",(0,t.jsx)("em",{className:"hero-em",children:S[i]??"transitions"}),(0,t.jsx)("br",{}),"for the DOM."]}),(0,t.jsxs)("div",{className:"carousel-frame",children:[(0,t.jsx)("div",{className:"carousel",ref:T,children:G}),(0,t.jsx)("button",{type:"button",className:"carousel-arrow","data-side":"left","aria-label":"Scroll presets left",onClick:()=>P(-1)}),(0,t.jsx)("button",{type:"button",className:"carousel-arrow","data-side":"right","aria-label":"Scroll presets right",onClick:()=>P(1)})]}),(0,t.jsx)("p",{className:"hero-tagline",children:"Next-level page transitions with HTML-in-Canvas. Your live pages go through WebGL shaders, in a few lines of React or plain JS."}),(0,t.jsxs)("div",{className:"hero-cta",children:[(0,t.jsx)(n.default,{href:"/getting-started",className:"btn btn-primary",children:"Get started"}),(0,t.jsx)(p.TLink,{href:"/presets",preset:"datamosh",className:"btn btn-ghost",children:"See all presets →"})]}),(0,t.jsx)("span",{className:"scroll-cue","aria-hidden":!0,children:"scroll"})]})}],33685)},99354,e=>{var t=e.i(16597);let r=RegExp([/(\/\/[^\n]*|<!--[\s\S]*?-->|^[ \t]*#[^\n]*)/.source,/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/.source,"\\b(import|from|export|const|let|return|await|async|new|function|type|if|else|for|of|in|out|uniform|precision|void|int|bool|float|vec2|vec3|vec4|mat2|mat3|mat4|sampler2D|discard|true|false)\\b|\\b(mix|smoothstep|step|fract|clamp|texture|length|dot|sin|cos|floor|abs|min|max|pow|normalize)(?=\\s*\\()",/\b(\d+(?:\.\d+)?)\b/.source,/(<\/?[A-Za-z][\w.-]*|\/?>)/.source].join("|"),"gm"),o=["tk-c","tk-s","tk-k","tk-f","tk-n","tk-t"];e.s(["f",0,function(e){let n=[],a=0;for(let i of e.matchAll(r)){let r=i.index??0;r>a&&n.push(e.slice(a,r));let s=i.findIndex((e,t)=>t>0&&void 0!==e);n.push((0,t.createElement)("span",{key:r,className:o[s-1]},i[0])),a=r+i[0].length}return n.push(e.slice(a)),n}])},47353,e=>{e.i(52729);var t=e.i(58786),r=e.i(9142);e.s(["PageTransition",0,function({preset:e}){return(0,t.f)({transition:r.Y[e]}),null}])},11698,e=>{var t=e.i(61069);e.i(52729);var r=e.i(22305),o=e.i(29191),n=e.i(9142);e.s(["TLink",0,function({preset:e,...a}){return(0,t.jsx)(o.default,{...a,onClick:(0,r.e)({transition:n.Y[e]})})}])},9142,e=>{e.i(10303);var t=e.i(63363),r=e.i(75682),o=e.i(28317),n=e.i(96210),a=e.i(84177),i=e.i(166),s=e.i(57888),l=e.i(35668),c=e.i(97394),d=e.i(81651),u=e.i(18013),f=e.i(26873),p=e.i(76359),m=e.i(27202),h=e.i(99050),v=e.i(1656);let x={crossfade:t.f,swipe:p.A,zoom:h.f,zoomBlur:v.f,crosszoom:r.f,glitch:a.f,glitchSlide:i.f,jpegGlitch:s.G,datamosh:o.O,pixelsort:u.b,lensDistortion:l.Q,slitScan:f.f,pixelScan:c.w,pixelStretch:d.f,tile:m.z,distortFade:n.f},y='"left" | "right" | "up" | "down"',g=[{name:"crossfade",note:"Plain mix. The default.",category:"page"},{name:"swipe",note:"Content moves out, the new one follows it in.",category:"page",factory:"createSwipe",options:[{name:"direction",type:y,default:'"left"',note:"Where the old content moves."}]},{name:"zoom",note:"Old zooms in, new grows out of the center.",category:"page",overflow:!0},{name:"crosszoom",note:"Crossfade through a zoom blur.",category:"page",overflow:!0},{name:"distortFade",note:"Noise warp while crossfading.",category:"page"},{name:"tile",note:"Tiles shrink away to show the new content.",category:"page",factory:"createTile",options:[{name:"direction",type:`"center" | ${y}`,default:'"center"',note:"Where the tiles start to shrink."},{name:"shape",type:'"hex" | "square"',default:'"hex"',note:"Tile shape."},{name:"count",type:"number",default:"12",note:"Tiles along the longer side."},{name:"shadow",type:"number (0–1)",default:"0.5",note:"Drop shadow under the shrinking tiles. 0 turns it off."}]},{name:"glitch",note:"Jittery RGB-split blocks.",category:"bold"},{name:"glitchSlide",note:"Sliding stripes with RGB split.",category:"bold"},{name:"jpegGlitch",note:"Hard cut through a real JPEG glitch.",category:"bold",factory:"createJpegGlitch",options:[{name:"iterations",type:"number",default:"4",note:"Encode and corrupt passes at the peak. More is messier."},{name:"quality",type:"number (0–1)",default:"0.1",note:"JPEG quality. Lower gives bigger blocks."}]},{name:"datamosh",note:"Hard cut that heals block by block.",category:"bold",factory:"createDatamosh",options:[{name:"blockSize",type:"number",default:"32",note:"Block size in px. 2 or more."}]},{name:"lensDistortion",note:"Lens warp with a rainbow split.",category:"bold",factory:"createLensDistortion",options:[{name:"strength",type:"number",default:"1",note:"How hard the lens warps."},{name:"dispersion",type:"number",default:"0.6",note:"Rainbow split. 0 turns it off."},{name:"zoom",type:"number",default:"3",note:"Old content zooms in this much, new zooms back out from it. 0 turns it off."}]},{name:"pixelScan",note:"A front of glowing pixel cells.",category:"bold",factory:"createPixelScan",options:[{name:"direction",type:'"right" | "left" | "up" | "down" | "center"',default:'"right"',note:"Where the fronts sweep. center spreads out in rings."},{name:"blackout",type:"boolean",default:"true",note:"Fill the gap between old and new with black. false leaves it transparent."}]},{name:"pixelsort",note:"Melts into sorted streaks and sorts back out.",category:"image",factory:"createPixelsort",options:[{name:"direction",type:'"up" | "down" | "left" | "right"',default:'"up"',note:"Where the old content melts."}]},{name:"slitScan",note:"Smears into stripes and back out.",category:"image"},{name:"pixelStretch",note:"Stretches into streaks from the top.",category:"image"},{name:"zoomBlur",note:"Radial blur with RGB split.",category:"image",overflow:!0}];e.s(["I",0,g,"Y",0,x])}])})();