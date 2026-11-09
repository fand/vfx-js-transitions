(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,92208,t=>{var e=t.i(61069),n=t.i(16597),a=t.i(52894);t.s(["Code",0,function({children:t,label:i,plain:o}){let s=t.trim(),[r,l]=(0,n.useState)(!1);return(0,e.jsxs)("div",{className:"code",children:[(0,e.jsxs)("div",{className:"code-bar",children:[(0,e.jsx)("span",{children:i}),(0,e.jsx)("button",{type:"button",onClick:()=>{navigator.clipboard?.writeText(s).then(()=>{l(!0),setTimeout(()=>l(!1),1200)})},children:r?"Copied":"Copy"})]}),(0,e.jsx)("pre",{children:(0,e.jsx)("code",{children:o?s:(0,a.f)(s)})})]})}])},52894,t=>{var e=t.i(16597);let n=RegExp([/(\/\/[^\n]*|<!--[\s\S]*?-->|^[ \t]*#[^\n]*)/.source,/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/.source,"\\b(import|from|export|const|let|return|await|async|new|function|type|if|else|for|of|in|out|uniform|precision|void|int|bool|float|vec2|vec3|vec4|mat2|mat3|mat4|sampler2D|discard|true|false)\\b|\\b(mix|smoothstep|step|fract|clamp|texture|length|dot|sin|cos|floor|abs|min|max|pow|normalize)(?=\\s*\\()",/\b(\d+(?:\.\d+)?)\b/.source,/(<\/?[A-Za-z][\w.-]*|\/?>)/.source].join("|"),"gm"),a=["tk-c","tk-s","tk-k","tk-f","tk-n","tk-t"];t.s(["f",0,function(t){let i=[],o=0;for(let s of t.matchAll(n)){let n=s.index??0;n>o&&i.push(t.slice(o,n));let r=s.findIndex((t,e)=>e>0&&void 0!==t);i.push((0,e.createElement)("span",{key:n,className:a[r-1]},s[0])),o=n+s[0].length}return i.push(t.slice(o)),i}])},78822,t=>{t.i(52729);var e=t.i(58786),n=t.i(92408);t.s(["PageTransition",0,function({preset:t}){return(0,e.f)({transition:n.Y[t]}),null}])},92408,t=>{t.i(10303);var e=t.i(63363),n=t.i(75682),a=t.i(28317),i=t.i(96210),o=t.i(84177),s=t.i(166),r=t.i(57888),l=t.i(35668),c=t.i(97394),p=t.i(81651),d=t.i(18013),u=t.i(26873),h=t.i(76359),f=t.i(27202),m=t.i(99050),v=t.i(1656);let g={crossfade:e.f,swipe:h.f,zoom:m.f,zoomBlur:v.f,crosszoom:n.f,glitch:o.f,glitchSlide:s.f,jpegGlitch:r.f,datamosh:a.f,pixelsort:d.f,lensDistortion:l.f,slitScan:u.f,pixelScan:c.f,pixelStretch:p.f,tile:f.f,distortFade:i.f},b='"left" | "right" | "up" | "down"',x=[{name:"crossfade",note:"Plain mix. The default.",category:"page"},{name:"swipe",note:"Content moves out, the new one follows it in.",category:"page",options:[{name:"direction",type:b,default:'"left"',note:"Where the old content moves."}]},{name:"zoom",note:"Old zooms in, new grows out of the center.",category:"page",overflow:!0},{name:"crosszoom",note:"Crossfade through a zoom blur.",category:"page",overflow:!0},{name:"distortFade",note:"Noise warp while crossfading.",category:"page"},{name:"tile",note:"Tiles shrink away to show the new content.",category:"page",options:[{name:"direction",type:`"center" | ${b}`,default:'"center"',note:"Where the tiles start to shrink."},{name:"shape",type:'"hex" | "square"',default:'"hex"',note:"Tile shape."},{name:"count",type:"number",default:"12",note:"Tiles along the longer side."},{name:"shadow",type:"number (0–1)",default:"0.5",note:"Drop shadow under the shrinking tiles. 0 turns it off."}]},{name:"glitch",note:"Jittery RGB-split blocks.",category:"bold",options:[{name:"amount",type:"number",default:"1",note:"How far the blocks shift."},{name:"speed",type:"number",default:"1",note:"How fast the blocks jump."}]},{name:"glitchSlide",note:"Sliding stripes with RGB split.",category:"bold"},{name:"jpegGlitch",note:"Hard cut through a real JPEG glitch.",category:"bold",options:[{name:"iterations",type:"number",default:"4",note:"Encode and corrupt passes at the peak. More is messier."},{name:"quality",type:"number (0–1)",default:"0.1",note:"JPEG quality. Lower gives bigger blocks."}]},{name:"datamosh",note:"Hard cut that heals block by block.",category:"bold",options:[{name:"blockSize",type:"number",default:"32",note:"Block size in px. 2 or more."}]},{name:"lensDistortion",note:"Lens warp with a rainbow split.",category:"bold",options:[{name:"strength",type:"number",default:"1",note:"How hard the lens warps."},{name:"dispersion",type:"number",default:"0.6",note:"Rainbow split. 0 turns it off."},{name:"zoom",type:"number",default:"3",note:"Old content zooms in this much, new zooms back out from it. 0 turns it off."}]},{name:"pixelScan",note:"A front of glowing pixel cells.",category:"bold",options:[{name:"direction",type:'"right" | "left" | "up" | "down" | "center"',default:'"right"',note:"Where the fronts sweep. center spreads out in rings."},{name:"blackout",type:"boolean",default:"true",note:"Fill the gap between old and new with black. false leaves it transparent."}]},{name:"pixelsort",note:"Melts into sorted streaks and sorts back out.",category:"image",options:[{name:"direction",type:'"up" | "down" | "left" | "right"',default:'"up"',note:"Where the old content melts."}]},{name:"slitScan",note:"Smears into stripes and back out.",category:"image"},{name:"pixelStretch",note:"Stretches into streaks from the top.",category:"image"},{name:"zoomBlur",note:"Radial blur with RGB split.",category:"image",overflow:!0}];t.s(["I",0,x,"Y",0,g])},34539,t=>{var e=t.i(61069),n=t.i(16597),a=t.i(92208);let i=[{id:"next",name:"Next.js",install:"npm i @vfx-js/core @vfx-js/react @vfx-js/transitions",intro:"Put <VFXTransition> from @vfx-js/react/next around the layout's children. It is a client component, so the layout stays a Server Component. Each page picks its transition with <TransitionIn>.",snippets:[{label:"app/layout.tsx",code:`
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
}`}],notes:["The target fills the viewport height and pages scroll inside it. Pass fullscreen={false} to size it with your own CSS, e.g. under a header.","A Server Component can't pass onClick to Link. Wrap the link in a small client component.",'Preset classes cross from a Server Component as-is. Pass options as plain params, e.g. <TransitionIn transition={Swipe} params={{ direction: "up" }} />. Make instances with useTransitionInstance in a client component.',"loading.tsx shows its fallback as soon as the path changes, so the transition lands on the skeleton.","Back plays the same spec as forward. Pass autoReverse to play the spec that entered the page, reversed. It needs the Navigation API."]},{id:"react",name:"React",install:"npm i @vfx-js/core @vfx-js/react @vfx-js/transitions",intro:"With React Router, use <VFXTransition> from @vfx-js/react/react-router in place of <Outlet />. Each pathname is one page. With another router, use <VFXTransition> from @vfx-js/react and pass a pageKey that changes per page.",snippets:[{label:"Layout.tsx",code:`
import { transition } from "@vfx-js/react";
import { VFXTransition } from "@vfx-js/react/react-router";
import { Crossfade, Glitch } from "@vfx-js/transitions";
import { Link } from "react-router";

export function Layout() {
  return (
    <>
      {/* A click spec wins over the page's <TransitionIn>. */}
      <Link to="/about" onClick={transition({ transition: Glitch })}>
        About
      </Link>
      <VFXTransition transition={Crossfade} />
    </>
  );
}`},{label:"Tabs.tsx",code:`
import { useVFXTransition } from "@vfx-js/react";
import { Swipe } from "@vfx-js/transitions";
import { useState } from "react";

const panels = [<p>One</p>, <p>Two</p>, <p>Three</p>];

// For containers you render yourself, like tabs.
export function Tabs() {
  const [tab, setTab] = useState(0);
  const { ref, run } = useVFXTransition({ transition: Swipe });
  const next = () => setTab((tab + 1) % panels.length);
  return (
    <>
      <button onClick={() => run(next)}>Next</button>
      <div ref={ref} style={{ height: 240 }}>{panels[tab]}</div>
    </>
  );
}`}],notes:["The old page keeps its own route while it animates out, but useLocation() inside it reads the new location.","Navigate from code with setNextTransition({ transition }) before navigate().","Back plays the same spec as forward. Pass autoReverse to play the spec that entered the page, reversed. It needs the Navigation API."]},{id:"void",name:"Void",install:"npm i @vfx-js/core @vfx-js/react @vfx-js/transitions",intro:"Put <VFXTransition> in the layout with the path as pageKey. Void hands the layout each page as its own element, so the old page keeps rendering until the run swaps it.",snippets:[{label:"pages/layout.tsx",code:`
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
}`}],notes:["The target fills the viewport height and pages scroll inside it. Pass fullscreen={false} to size it with your own CSS, e.g. under a header.","This uses the React adapter (@void/react).","Back plays the same spec as forward. Pass autoReverse to play the spec that entered the page, reversed. It needs the Navigation API."]},{id:"nuxt",name:"Nuxt",install:"npm i @vfx-js/core @vfx-js/vue @vfx-js/transitions",intro:"Put <VFXTransition> from @vfx-js/vue/nuxt around <NuxtPage />. It holds each navigation until the old page is captured. Each page picks its transition with useTransitionIn.",snippets:[{label:"app/app.vue",code:`
<script setup lang="ts">
import { Crossfade, Swipe } from "@vfx-js/transitions";
import { vTransition } from "@vfx-js/vue";
import { VFXTransition } from "@vfx-js/vue/nuxt";
</script>

<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/gallery" v-transition="{ transition: Swipe }">
      Gallery
    </NuxtLink>
  </nav>
  <VFXTransition :transition="Crossfade" :duration="0.8">
    <NuxtPage />
  </VFXTransition>
</template>`},{label:"app/pages/about.vue",code:`
<script setup lang="ts">
import { Glitch } from "@vfx-js/transitions";
import { useTransitionIn } from "@vfx-js/vue";

useTransitionIn({ transition: Glitch });
</script>

<template>
  <h1>About</h1>
</template>`}],notes:['The target fills the viewport height and pages scroll inside it. Pass :fullscreen="false" to size it with your own CSS, e.g. under a header.',"A link's v-transition spec wins over the page's useTransitionIn.","Navigate from code with setNextTransition({ transition }) before navigateTo().","Back plays the same spec as forward. Pass auto-reverse to play the spec that entered the page, reversed. It needs the Navigation API."]},{id:"vue",name:"Vue",install:"npm i @vfx-js/core @vfx-js/vue @vfx-js/transitions",intro:"Put <VFXTransition> from @vfx-js/vue/router around <RouterView />. It reads the router from app.use(router) and holds each navigation until the old page is captured. Each page picks its transition with useTransitionIn.",snippets:[{label:"App.vue",code:`
<script setup lang="ts">
import { Crossfade, Swipe } from "@vfx-js/transitions";
import { vTransition } from "@vfx-js/vue";
import { VFXTransition } from "@vfx-js/vue/router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/gallery" v-transition="{ transition: Swipe }">
      Gallery
    </RouterLink>
  </nav>
  <VFXTransition :transition="Crossfade" :duration="0.8">
    <RouterView />
  </VFXTransition>
</template>`},{label:"pages/About.vue",code:`
<script setup lang="ts">
import { Glitch } from "@vfx-js/transitions";
import { useTransitionIn } from "@vfx-js/vue";

useTransitionIn({ transition: Glitch });
</script>

<template>
  <h1>About</h1>
</template>`}],notes:['The target fills the viewport height and pages scroll inside it. Pass :fullscreen="false" to size it with your own CSS, e.g. under a header.',"A link's v-transition spec wins over the page's useTransitionIn.","A page with an async setup under your own <Suspense> may be captured before it resolves. Use waitFor on <VFXTransition> to wait for it.","Navigate from code with setNextTransition({ transition }) before router.push().","Back plays the same spec as forward. Pass auto-reverse to play the spec that entered the page, reversed. It needs the Navigation API."]},{id:"sveltekit",name:"SvelteKit",install:"npm i @vfx-js/core @vfx-js/svelte @vfx-js/transitions",intro:"Put <VFXTransition> from @vfx-js/svelte/sveltekit around the layout's children. It uses onNavigate, so SvelteKit waits for the old page to be captured. Each page picks its transition with transitionIn.",snippets:[{label:"src/routes/+layout.svelte",code:`
<script lang="ts">
  import { transition } from "@vfx-js/svelte";
  import { VFXTransition } from "@vfx-js/svelte/sveltekit";
  import { Crossfade, Swipe } from "@vfx-js/transitions";

  let { children } = $props();
</script>

<nav>
  <a href="/">Home</a>
  <a href="/gallery" {@attach transition({ transition: Swipe })}>Gallery</a>
</nav>
<VFXTransition transition={Crossfade} duration={0.8}>
  {@render children()}
</VFXTransition>`},{label:"src/routes/about/+page.svelte",code:`
<script lang="ts">
  import { transitionIn } from "@vfx-js/svelte";
  import { Glitch } from "@vfx-js/transitions";

  transitionIn({ transition: Glitch });
</script>

<h1>About</h1>`}],notes:["The target fills the viewport height and pages scroll inside it. Pass fullscreen={false} to size it with your own CSS, e.g. under a header.","A link's transition(spec) wins over the page's transitionIn.","Needs Svelte 5.29 or later for {@attach}. Navigate from code with setNextTransition({ transition }) before goto().","Back plays the same spec as forward. Pass autoReverse to play the spec that entered the page, reversed. It needs the Navigation API."]},{id:"astro",name:"Astro",install:"npm i @vfx-js/core @vfx-js/astro @vfx-js/transitions",intro:"Put <VFXTransition> from @vfx-js/astro around the layout's <slot />. It hooks into <ClientRouter> and holds each navigation until the old page is captured. Each page picks its transition with <TransitionIn>.",snippets:[{label:"src/layouts/Layout.astro",code:`
---
import { ClientRouter } from "astro:transitions";
import { VFXTransition } from "@vfx-js/astro";
---

<!-- The shader is the animation, so turn off the view transition. -->
<html lang="en" transition:animate="none">
  <head><ClientRouter /></head>
  <body>
    <nav>
      <a href="/">Home</a>
      <a href="/gallery" data-vfx-transition="swipe">Gallery</a>
    </nav>
    <VFXTransition transition="crossfade" duration={0.8}>
      <slot />
    </VFXTransition>
  </body>
</html>`},{label:"src/pages/about.astro",code:`
---
import { TransitionIn } from "@vfx-js/astro";
import Layout from "../layouts/Layout.astro";
---

<Layout>
  <TransitionIn transition="glitch" />
  <h1>About</h1>
</Layout>`}],notes:["The target fills the viewport height and pages scroll inside it. Pass fullscreen={false} to size it with your own CSS, e.g. under a header.","Transitions are names: the class names from @vfx-js/transitions in lowercase. Register your own with registerVFX from @vfx-js/astro/client.","A link's data-vfx-transition wins over the page's <TransitionIn>.","Back plays the same spec as forward. Pass autoReverse to play the spec that entered the page, reversed. It needs the Navigation API."]},{id:"vanilla",name:"Vanilla",install:"npm i @vfx-js/core @vfx-js/transitions",intro:"show(slide) switches between slides already in the DOM. For content built on the fly, run(cb) works like document.startViewTransition(cb): change the DOM in cb, and VFX-JS animates from the old content to the new.",snippets:[{label:"index.html",code:`
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
}`}],notes:["Give the target a fixed height, like 100dvh. Old and new content then share one box; a size change jumps at the end of the run.","Slides are the direct children of the target. A display rule on a slide beats hidden; add [hidden] { display: none !important }.","show() and run() resolve when the animation ends. A new run drops the old one, but its DOM change still lands."]}];t.s(["FrameworkTabs",0,function(){let[t,o]=(0,n.useState)(0),[s,r]=(0,n.useState)(0),[l,c]=(0,n.useState)(!1),p=(0,n.useRef)(void 0),d=i[s];(0,n.useEffect)(()=>()=>clearTimeout(p.current),[]);let u=["tab-body",l&&"is-in",t!==s&&"is-out"].filter(Boolean).join(" ");return(0,e.jsxs)("div",{className:"tabs",children:[(0,e.jsx)("div",{className:"tab-list",role:"tablist",children:i.map((n,a)=>(0,e.jsx)("button",{type:"button",role:"tab","aria-selected":a===t,onClick:()=>{o(a),c(!0),clearTimeout(p.current),p.current=setTimeout(()=>r(a),100)},children:n.name},n.id))}),(0,e.jsx)("div",{className:"tab-panel",children:(0,e.jsxs)("div",{className:u,children:[(0,e.jsx)("h3",{children:d.name}),(0,e.jsx)("p",{className:"tab-intro",children:d.intro}),(0,e.jsxs)("div",{className:"tab-install",children:[(0,e.jsx)("span",{children:"$"})," ",d.install]}),d.snippets.map(t=>(0,e.jsx)(a.Code,{label:t.label,children:t.code},t.label)),d.notes.length>0&&(0,e.jsx)("ul",{className:"tab-notes",children:d.notes.map(t=>(0,e.jsx)("li",{children:t},t))})]},d.id)})]})}],34539)}])})();