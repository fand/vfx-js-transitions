(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,91202,e=>{var t=e.i(61069),n=e.i(16597),o=e.i(99354);e.s(["Code",0,function({children:e,label:i}){let a=e.trim(),[s,r]=(0,n.useState)(!1);return(0,t.jsxs)("div",{className:"code",children:[(0,t.jsxs)("div",{className:"code-bar",children:[(0,t.jsx)("span",{children:i}),(0,t.jsx)("button",{type:"button",onClick:()=>{navigator.clipboard?.writeText(a).then(()=>{r(!0),setTimeout(()=>r(!1),1200)})},children:s?"Copied":"Copy"})]}),(0,t.jsx)("pre",{children:(0,t.jsx)("code",{children:(0,o.f)(a)})})]})}])},99354,e=>{var t=e.i(16597);let n=RegExp([/(\/\/[^\n]*|<!--[\s\S]*?-->|^[ \t]*#[^\n]*)/.source,/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/.source,"\\b(import|from|export|const|let|return|await|async|new|function|type|if|else|for|of|in|out|uniform|precision|void|int|bool|float|vec2|vec3|vec4|mat2|mat3|mat4|sampler2D|discard|true|false)\\b|\\b(mix|smoothstep|step|fract|clamp|texture|length|dot|sin|cos|floor|abs|min|max|pow|normalize)(?=\\s*\\()",/\b(\d+(?:\.\d+)?)\b/.source,/(<\/?[A-Za-z][\w.-]*|\/?>)/.source].join("|"),"gm"),o=["tk-c","tk-s","tk-k","tk-f","tk-n","tk-t"];e.s(["f",0,function(e){let i=[],a=0;for(let s of e.matchAll(n)){let n=s.index??0;n>a&&i.push(e.slice(a,n));let r=s.findIndex((e,t)=>t>0&&void 0!==e);i.push((0,t.createElement)("span",{key:n,className:o[r-1]},s[0])),a=n+s[0].length}return i.push(e.slice(a)),i}])},47353,e=>{e.i(52729);var t=e.i(58786),n=e.i(9142);e.s(["PageTransition",0,function({preset:e}){return(0,t.f)({transition:n.Y[e]}),null}])},9142,e=>{e.i(10303);var t=e.i(63363),n=e.i(75682),o=e.i(28317),i=e.i(96210),a=e.i(84177),s=e.i(166),r=e.i(57888),l=e.i(35668),c=e.i(97394),d=e.i(81651),u=e.i(18013),p=e.i(26873),h=e.i(76359),m=e.i(27202),f=e.i(99050),b=e.i(1656);let g={crossfade:t.f,swipe:h.f,zoom:f.f,zoomBlur:b.f,crosszoom:n.f,glitch:a.f,glitchSlide:s.f,jpegGlitch:r.f,datamosh:o.f,pixelsort:u.f,lensDistortion:l.f,slitScan:p.f,pixelScan:c.f,pixelStretch:d.f,tile:m.f,distortFade:i.f},x='"left" | "right" | "up" | "down"',v=[{name:"crossfade",note:"Plain mix. The default.",category:"page"},{name:"swipe",note:"Content moves out, the new one follows it in.",category:"page",options:[{name:"direction",type:x,default:'"left"',note:"Where the old content moves."}]},{name:"zoom",note:"Old zooms in, new grows out of the center.",category:"page",overflow:!0},{name:"crosszoom",note:"Crossfade through a zoom blur.",category:"page",overflow:!0},{name:"distortFade",note:"Noise warp while crossfading.",category:"page"},{name:"tile",note:"Tiles shrink away to show the new content.",category:"page",options:[{name:"direction",type:`"center" | ${x}`,default:'"center"',note:"Where the tiles start to shrink."},{name:"shape",type:'"hex" | "square"',default:'"hex"',note:"Tile shape."},{name:"count",type:"number",default:"12",note:"Tiles along the longer side."},{name:"shadow",type:"number (0–1)",default:"0.5",note:"Drop shadow under the shrinking tiles. 0 turns it off."}]},{name:"glitch",note:"Jittery RGB-split blocks.",category:"bold",options:[{name:"amount",type:"number",default:"1",note:"How far the blocks shift."},{name:"speed",type:"number",default:"1",note:"How fast the blocks jump."}]},{name:"glitchSlide",note:"Sliding stripes with RGB split.",category:"bold"},{name:"jpegGlitch",note:"Hard cut through a real JPEG glitch.",category:"bold",options:[{name:"iterations",type:"number",default:"4",note:"Encode and corrupt passes at the peak. More is messier."},{name:"quality",type:"number (0–1)",default:"0.1",note:"JPEG quality. Lower gives bigger blocks."}]},{name:"datamosh",note:"Hard cut that heals block by block.",category:"bold",options:[{name:"blockSize",type:"number",default:"32",note:"Block size in px. 2 or more."}]},{name:"lensDistortion",note:"Lens warp with a rainbow split.",category:"bold",options:[{name:"strength",type:"number",default:"1",note:"How hard the lens warps."},{name:"dispersion",type:"number",default:"0.6",note:"Rainbow split. 0 turns it off."},{name:"zoom",type:"number",default:"3",note:"Old content zooms in this much, new zooms back out from it. 0 turns it off."}]},{name:"pixelScan",note:"A front of glowing pixel cells.",category:"bold",options:[{name:"direction",type:'"right" | "left" | "up" | "down" | "center"',default:'"right"',note:"Where the fronts sweep. center spreads out in rings."},{name:"blackout",type:"boolean",default:"true",note:"Fill the gap between old and new with black. false leaves it transparent."}]},{name:"pixelsort",note:"Melts into sorted streaks and sorts back out.",category:"image",options:[{name:"direction",type:'"up" | "down" | "left" | "right"',default:'"up"',note:"Where the old content melts."}]},{name:"slitScan",note:"Smears into stripes and back out.",category:"image"},{name:"pixelStretch",note:"Stretches into streaks from the top.",category:"image"},{name:"zoomBlur",note:"Radial blur with RGB split.",category:"image",overflow:!0}];e.s(["I",0,v,"Y",0,g])},7136,e=>{var t=e.i(61069),n=e.i(16597),o=e.i(91202);let i=[{id:"next",name:"Next.js",install:"npm i @vfx-js/core @vfx-js/react @vfx-js/transitions",intro:"Put <VFXTransition> from @vfx-js/react/next around the layout's children. It is a client component, so the layout stays a Server Component. Each page picks its transition with <TransitionIn>.",snippets:[{label:"app/layout.tsx",code:`
import { VFXTransition } from "@vfx-js/react/next";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <VFXTransition duration={0.8}>{children}</VFXTransition>
      </body>
    </html>
  );
}`},{label:"app/about/page.tsx",code:`
import { TransitionIn } from "@vfx-js/react";
import { Glitch } from "@vfx-js/transitions";

export default function About() {
  return (
    <>
      <TransitionIn transition={Glitch} />
      <h1>About</h1>
    </>
  );
}`}],notes:["The target fills the viewport height and pages scroll inside it. Pass fullscreen={false} to size it with your own CSS, e.g. under a header.","A Server Component can't pass onClick to Link. Wrap the link in a small client component.",'Preset classes cross from a Server Component as-is. Pass options as plain params, e.g. <TransitionIn transition={Swipe} params={{ direction: "up" }} />. Make instances with useTransitionInstance in a client component.',"loading.tsx shows its fallback as soon as the path changes, so the transition lands on the skeleton."]},{id:"react",name:"React",install:"npm i @vfx-js/core @vfx-js/react @vfx-js/transitions",intro:"Any router works. A new pageKey starts a run. Here with React Router.",snippets:[{label:"Layout.tsx",code:`
import { transition, VFXTransition } from "@vfx-js/react";
import { Crossfade, Glitch } from "@vfx-js/transitions";
import { Link, useLocation, useOutlet } from "react-router";

export function Layout() {
  const { pathname } = useLocation();
  const outlet = useOutlet();
  return (
    <>
      {/* A click spec wins over the page's <TransitionIn>. */}
      <Link to="/about" onClick={transition({ transition: Glitch })}>
        About
      </Link>
      <VFXTransition pageKey={pathname} transition={Crossfade}>
        {outlet}
      </VFXTransition>
    </>
  );
}`},{label:"Tabs.tsx",code:`
import { useVFXTransition } from "@vfx-js/react";
import { Swipe } from "@vfx-js/transitions";
import { useState } from "react";

// For containers you render yourself, like tabs.
export function Tabs() {
  const [tab, setTab] = useState(0);
  const { ref, run } = useVFXTransition({ transition: Swipe });
  return (
    <>
      <button onClick={() => run(() => setTab(tab + 1))}>Next</button>
      <div ref={ref} style={{ height: 240 }}>{panels[tab]}</div>
    </>
  );
}`}],notes:["Navigate from code with setNextTransition({ transition }) before router.push()."]},{id:"void",name:"Void",install:"npm i @vfx-js/core @vfx-js/react @vfx-js/transitions",intro:"Put <VFXTransition> in the layout with the path as pageKey. Void hands the layout each page as its own element, so the old page keeps rendering until the run swaps it.",snippets:[{label:"pages/layout.tsx",code:`
import { VFXTransition } from "@vfx-js/react";
import { Link, useRouter } from "@void/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { path } = useRouter();
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      <VFXTransition pageKey={path} duration={0.8}>
        {children}
      </VFXTransition>
    </>
  );
}`},{label:"pages/about.tsx",code:`
import { TransitionIn } from "@vfx-js/react";
import { Glitch } from "@vfx-js/transitions";

export default function About() {
  return (
    <>
      <TransitionIn transition={Glitch} />
      <h1>About</h1>
    </>
  );
}`}],notes:["The target fills the viewport height and pages scroll inside it. Pass fullscreen={false} to size it with your own CSS, e.g. under a header.","This uses the React adapter (@void/react)."]},{id:"vanilla",name:"Vanilla",install:"npm i @vfx-js/core @vfx-js/transitions",intro:"show(slide) switches between slides already in the DOM. For content built on the fly, run(cb) works like document.startViewTransition(cb): change the DOM in cb, and the shader does the rest.",snippets:[{label:"index.html",code:`
<nav>
  <button data-panel="#home">Home</button>
  <button data-panel="#about">About</button>
  <button data-panel="#contact">Contact</button>
</nav>
<div id="panel">
  <section id="home">...</section>
  <section id="about" hidden>...</section>
  <section id="contact" hidden>...</section>
</div>`},{label:"main.ts",code:`
import { VFX } from "@vfx-js/core";
import { Swipe } from "@vfx-js/transitions";

const vfx = new VFX();
const panel = document.querySelector<HTMLElement>("#panel")!;
const tabs = document.querySelectorAll<HTMLElement>("[data-panel]");

const t = vfx.addTransition(panel, { transition: Swipe, duration: 0.6 });
for (const tab of tabs) {
  tab.addEventListener("click", () => t.show(tab.dataset.panel!));
}`}],notes:["Give the target a fixed height, like 100dvh. Old and new content then share one box; a size change jumps at the end of the run.","Slides are the direct children of the target. A display rule on a slide beats hidden; add [hidden] { display: none !important }.","show() and run() resolve when the animation ends. A new run drops the old one, but its DOM change still lands."]}];e.s(["FrameworkTabs",0,function(){let[e,a]=(0,n.useState)(0),[s,r]=(0,n.useState)(0),[l,c]=(0,n.useState)(!1),d=(0,n.useRef)(void 0),u=i[s];(0,n.useEffect)(()=>()=>clearTimeout(d.current),[]);let p=["tab-body",l&&"is-in",e!==s&&"is-out"].filter(Boolean).join(" ");return(0,t.jsxs)("div",{className:"tabs",children:[(0,t.jsx)("div",{className:"tab-list",role:"tablist",children:i.map((n,o)=>(0,t.jsx)("button",{type:"button",role:"tab","aria-selected":o===e,onClick:()=>{a(o),c(!0),clearTimeout(d.current),d.current=setTimeout(()=>r(o),100)},children:n.name},n.id))}),(0,t.jsx)("div",{className:"tab-panel",children:(0,t.jsxs)("div",{className:p,children:[(0,t.jsx)("h3",{children:u.name}),(0,t.jsx)("p",{className:"tab-intro",children:u.intro}),(0,t.jsxs)("div",{className:"tab-install",children:[(0,t.jsx)("span",{children:"$"})," ",u.install]}),u.snippets.map(e=>(0,t.jsx)(o.Code,{label:e.label,children:e.code},e.label)),u.notes.length>0&&(0,t.jsx)("ul",{className:"tab-notes",children:u.notes.map(e=>(0,t.jsx)("li",{children:e},e))})]},u.id)})]})}],7136)}])})();