(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,52894,e=>{var t=e.i(16597);let r=RegExp([/(\/\/[^\n]*|<!--[\s\S]*?-->|^[ \t]*#[^\n]*)/.source,/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/.source,"\\b(import|from|export|const|let|return|await|async|new|function|type|if|else|for|of|in|out|uniform|precision|void|int|bool|float|vec2|vec3|vec4|mat2|mat3|mat4|sampler2D|discard|true|false)\\b|\\b(mix|smoothstep|step|fract|clamp|texture|length|dot|sin|cos|floor|abs|min|max|pow|normalize)(?=\\s*\\()",/\b(\d+(?:\.\d+)?)\b/.source,/(<\/?[A-Za-z][\w.-]*|\/?>)/.source].join("|"),"gm"),o=["tk-c","tk-s","tk-k","tk-f","tk-n","tk-t"];e.s(["f",0,function(e){let s=[],a=0;for(let i of e.matchAll(r)){let r=i.index??0;r>a&&s.push(e.slice(a,r));let n=i.findIndex((e,t)=>t>0&&void 0!==e);s.push((0,t.createElement)("span",{key:r,className:o[n-1]},i[0])),a=r+i[0].length}return s.push(e.slice(a)),s}])},78822,e=>{e.i(52729);var t=e.i(58786),r=e.i(92408);e.s(["PageTransition",0,function({preset:e}){return(0,t.f)({transition:r.Y[e]}),null}])},92408,e=>{var t=e.i(63363),r=e.i(75682),o=e.i(28317),s=e.i(96210),a=e.i(84177),i=e.i(166),n=e.i(57888),c=e.i(35668),l=e.i(97394),u=e.i(81651),h=e.i(18013),v=e.i(26873),m=e.i(76359),f=e.i(27202),d=e.i(99050),p=e.i(1656);let g={crossfade:t.f,swipe:m.f,zoom:d.f,zoomBlur:p.f,crosszoom:r.f,glitch:a.f,glitchSlide:i.f,jpegGlitch:n.f,datamosh:o.f,pixelsort:h.f,lensDistortion:c.f,slitScan:v.f,pixelScan:l.f,pixelStretch:u.f,tile:f.f,distortFade:s.f},x='"left" | "right" | "up" | "down"',b=[{name:"crossfade",note:"Plain mix. The default.",category:"page"},{name:"swipe",note:"Content moves out, the new one follows it in.",category:"page",options:[{name:"direction",type:x,default:'"left"',note:"Where the old content moves."}]},{name:"zoom",note:"Old zooms in, new grows out of the center.",category:"page",overflow:!0},{name:"crosszoom",note:"Crossfade through a zoom blur.",category:"page",overflow:!0},{name:"distortFade",note:"Noise warp while crossfading.",category:"page"},{name:"tile",note:"Tiles shrink away to show the new content.",category:"page",options:[{name:"direction",type:`"center" | ${x}`,default:'"center"',note:"Where the tiles start to shrink."},{name:"shape",type:'"hex" | "square"',default:'"hex"',note:"Tile shape."},{name:"count",type:"number",default:"12",note:"Tiles along the longer side."},{name:"shadow",type:"number (0–1)",default:"0.5",note:"Drop shadow under the shrinking tiles. 0 turns it off."}]},{name:"glitch",note:"Jittery RGB-split blocks.",category:"bold",options:[{name:"amount",type:"number",default:"1",note:"How far the blocks shift."},{name:"speed",type:"number",default:"1",note:"How fast the blocks jump."}]},{name:"glitchSlide",note:"Sliding stripes with RGB split.",category:"bold"},{name:"jpegGlitch",note:"Hard cut through a real JPEG glitch.",category:"bold",options:[{name:"iterations",type:"number",default:"4",note:"Encode and corrupt passes at the peak. More is messier."},{name:"quality",type:"number (0–1)",default:"0.1",note:"JPEG quality. Lower gives bigger blocks."}]},{name:"datamosh",note:"Hard cut that heals block by block.",category:"bold",options:[{name:"blockSize",type:"number",default:"32",note:"Block size in px. 2 or more."}]},{name:"lensDistortion",note:"Lens warp with a rainbow split.",category:"bold",options:[{name:"strength",type:"number",default:"1",note:"How hard the lens warps."},{name:"dispersion",type:"number",default:"0.6",note:"Rainbow split. 0 turns it off."},{name:"zoom",type:"number",default:"3",note:"Old content zooms in this much, new zooms back out from it. 0 turns it off."}]},{name:"pixelScan",note:"A front of glowing pixel cells.",category:"bold",options:[{name:"direction",type:'"right" | "left" | "up" | "down" | "center"',default:'"right"',note:"Where the fronts sweep. center spreads out in rings."},{name:"blackout",type:"boolean",default:"true",note:"Fill the gap between old and new with black. false leaves it transparent."}]},{name:"pixelsort",note:"Melts into sorted streaks and sorts back out.",category:"image",options:[{name:"direction",type:'"up" | "down" | "left" | "right"',default:'"up"',note:"Where the old content melts."}]},{name:"slitScan",note:"Smears into stripes and back out.",category:"image"},{name:"pixelStretch",note:"Stretches into streaks from the top.",category:"image"},{name:"zoomBlur",note:"Radial blur with RGB split.",category:"image",overflow:!0}];e.s(["I",0,b,"Y",0,g])},75682,e=>{e.i(90422);var t=e.i(28113),r=e.i(66601);class o extends t.f{name="crosszoom";overflow=!0;frag=`
const float STRENGTH = 0.4;
const float TAPS = 16.0;

${r.j}
// Quintic ease in/out, so the blur builds up and settles smoothly.
float ease(float x) {
  return x < 0.5 ? 16.0 * x * x * x * x * x : 1.0 + 16.0 * pow(x - 1.0, 5.0);
}

vec4 transition(vec2 uv, float t) {
  float mixT = smoothstep(0.0, 1.0, ease(t));
  float strength = sin(t * 3.141593) * STRENGTH;
  vec2 dir = vec2(0.5) - uv;
  float jitter = ign(gl_FragCoord.xy);

  vec4 c = vec4(0.0);
  float total = 0.0;
  for (float n = 0.0; n < TAPS; n += 1.0) {
    float k = (n + jitter) / TAPS;
    // Weight taps near the pixel more, so edges stay readable.
    float w = 4.0 * (k - k * k);
    vec2 p = uv + dir * k * strength;
    c += mix(readFrom(p), readTo(p), mixT) * w;
    total += w;
  }
  return c / total;
}
`}e.s(["f",0,o])},28317,36375,e=>{e.i(90422);var t=e.i(28113);let r=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D src;
uniform vec4 srcRectUv;
void main() {
    outColor = texture(src, srcRectUv.xy + uv * srcRectUv.zw);
}
`,o=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D src;
void main() {
    outColor = texture(src, uv);
}
`;function s(e,t){e.draw({frag:r,uniforms:{src:e.src},target:t})}e.s(["N",0,s,"S",0,function(e,t,r){e.draw({frag:o,uniforms:{src:t},target:r})}],36375);let a=`#version 300 es
precision highp float;
in vec2 uvContent;
out vec4 outColor;
uniform sampler2D tex;
void main() {
    if (any(lessThan(uvContent, vec2(0.0))) || any(greaterThan(uvContent, vec2(1.0)))) {
        outColor = vec4(0.0);
        return;
    }
    vec4 c = texture(tex, uvContent);
    outColor = vec4(c.rgb * c.a, c.a);
}
`,i=`#version 300 es
precision highp float;
out vec4 outMV;
uniform sampler2D uCur, uRef;
uniform vec2 uResolution;   // [w, h] in px
uniform float uBlock;       // block size in px
uniform float uSearch;      // search radius, in steps
uniform float uStep;        // px per step (coverage = uSearch * uStep px)
uniform float uHealRate;
uniform float uHealThreshold;
uniform float uFrame;
float hash(vec3 p) {
    uvec3 q = uvec3(p) * uvec3(1597334673u, 3812015801u, 2798796415u);
    return float((q.x ^ q.y ^ q.z) * 1597334673u) / 4294967295.0;
}
void main() {
    vec2 block = floor(gl_FragCoord.xy);
    vec2 base = block * uBlock;     // top-left pixel of this block

    // Cache the current block's 3x3 samples and their (offset, px) within
    // the block — the offsets are invariant across candidates.
    vec3 cs[9];
    vec2 off[9];
    for (int i = 0; i < 3; i++) {
      for (int j = 0; j < 3; j++) {
        int k = i * 3 + j;
        off[k] = vec2(1 + i * 2, 1 + j * 2) / 6.0 * uBlock;
        cs[k] = texture(uCur, (base + off[k] + 0.5) / uResolution).rgb;
      }
    }

    vec2 move = vec2(0.0);
    float bestSad = 1e9;
    float bestRaw = 0.0;
    for (float by = -uSearch; by <= uSearch; by++) {
      for (float bx = -uSearch; bx <= uSearch; bx++) {
        vec2 cand = vec2(bx, by) * uStep;   // candidate displacement, px
        float sad = 0.0;
        for (int k = 0; k < 9; k++) {
          vec3 cRef = texture(uRef, (base + off[k] + cand + 0.5) / uResolution).rgb;
          sad += dot(abs(cs[k] - cRef), vec3(1.0));
        }
        float raw = sad;
        sad += length(cand) * 0.0025;   // prefer small motion on ties
        if (sad < bestSad) {
          bestSad = sad;
          bestRaw = raw;
          move = cand;
        }
      }
    }

    // Mean abs diff per channel, 0..1.
    float err = bestRaw / 27.0;
    bool intra = hash(vec3(block, uFrame)) < uHealRate || err > uHealThreshold;
    outMV = vec4(move, intra ? 1.0 : 0.0, 1.0);
}
`,n=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D uCur, uRef, uMV;
uniform vec2 uResolution;
void main() {
    vec2 mv = texture(uMV, uv).rg; // px
    vec3 cur = texture(uCur, uv).rgb;
    vec3 pred = texture(uRef, uv + mv / uResolution).rgb;
    outColor = vec4(cur - pred, 1.0);
}
`,c=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D uAccum, uMV, uVideo, uResidual;
uniform vec2 uResolution;
uniform bool uIntra;
uniform bool uUseResidual;
void main() {
    if (uIntra || texture(uMV, uv).b > 0.5) {
        outColor = vec4(texture(uVideo, uv).rgb, 1.0);
        return;
    }
    vec2 mv = texture(uMV, uv).rg; // px
    vec3 pred = texture(uAccum, uv + mv / uResolution).rgb;
    vec3 res = uUseResidual ? texture(uResidual, uv).rgb : vec3(0.0);
    // Clamp like an 8-bit decoder so the feedback can't run away to white.
    outColor = vec4(clamp(pred + res, 0.0, 1.0), 1.0);
}
`,l=`#version 300 es
precision highp float;
in vec2 uvContent;
out vec4 outColor;
uniform sampler2D uMV;
uniform float uMvScale;     // magnitude normalization, px
vec3 hsv(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
void main() {
    vec2 mv = texture(uMV, uvContent).rg;
    float ang = atan(mv.y, mv.x) / 6.28318 + 0.5;
    float mag = clamp(length(mv) / max(uMvScale, 1.0), 0.0, 1.0);
    outColor = vec4(hsv(vec3(ang, 0.9, 0.15 + 0.85 * mag)), 1.0);
}
`,u=`#version 300 es
precision highp float;
in vec2 uvContent;
out vec4 outColor;
uniform sampler2D uResidual;
void main() {
    vec3 r = texture(uResidual, uvContent).rgb;
    outColor = vec4(clamp(r * 0.5 + 0.5, 0.0, 1.0), 1.0);
}
`,h=`
float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
vec2 chroma(vec3 c) {
    return vec2(dot(c, vec3(-0.168736, -0.331264, 0.5)),
                dot(c, vec3(0.5, -0.418688, -0.081312))) + 0.5;
}
`,v=`#version 300 es
precision highp float;
${h}
in vec2 uv;
out vec4 outColor;
uniform sampler2D uCur, uRef, uMV;
uniform vec2 uChromaRes;
void main() {
    vec2 mvc = floor(texture(uMV, uv).rg * 0.5);
    vec2 pred = chroma(texture(uRef, uv + mvc / uChromaRes).rgb);
    outColor = vec4(chroma(texture(uCur, uv).rgb) - pred, 0.0, 1.0);
}
`,m=`#version 300 es
precision highp float;
${h}
in vec2 uv;
out vec4 outColor;
uniform sampler2D uAccum, uMV, uVideo, uResidual;
uniform vec2 uResolution;
uniform bool uIntra;
uniform bool uUseResidual;
void main() {
    // I-frame: passthrough the input
    if (uIntra || texture(uMV, uv).b > 0.5) {
        outColor = vec4(luma(texture(uVideo, uv).rgb), 0.0, 0.0, 1.0);
        return;
    }

    // P-frame: compose luma from acc + residual
    vec2 mv = texture(uMV, uv).rg; // px
    float pred = texture(uAccum, uv + mv / uResolution).r;
    float res = uUseResidual ? luma(texture(uResidual, uv).rgb) : 0.0;
    float Y = clamp(pred + res, 0.0, 1.0);

    outColor = vec4(Y, 0.0, 0.0, 1.0);
}
`,f=`#version 300 es
precision highp float;
${h}
in vec2 uv;
out vec4 outColor;
uniform sampler2D uChromaAcc, uMV, uVideo, uResidualC;
uniform vec2 uChromaRes;
uniform bool uIntra;
uniform bool uUseResidual;
void main() {
    // I-frame: passthrough the input
    if (uIntra || texture(uMV, uv).b > 0.5) {
        outColor = vec4(chroma(texture(uVideo, uv).rgb), 0.0, 1.0);
        return;
    }

    // P-frame: compose chroma from acc + residual. uResidualC is the
    // zero-centered chroma residual (built with the SAME truncated MV as
    // the prediction below, so they cancel when residual is on).
    vec2 mv = texture(uMV, uv).rg; // px (luma units)
    vec2 mvc = floor(mv * 0.5);
    vec2 pred = texture(uChromaAcc, uv + mvc / uChromaRes).rg;
    vec2 res = uUseResidual ? texture(uResidualC, uv).rg : vec2(0);
    vec2 C = clamp(pred + res, 0.0, 1.0);

    outColor = vec4(C, 0.0, 1.0);
}
`,d=`#version 300 es
precision highp float;
in vec2 uvContent;
out vec4 outColor;
uniform sampler2D uLumaAcc;
uniform sampler2D uChromaAcc;
uniform float uChromaGain;
void main() {
    if (any(lessThan(uvContent, vec2(0.0))) || any(greaterThan(uvContent, vec2(1.0)))) {
        outColor = vec4(0.0);
        return;
    }
    float Y = texture(uLumaAcc, uvContent).r;
    vec2 cbcr = (texture(uChromaAcc, uvContent).rg - 0.5) * uChromaGain;
    vec3 rgb = vec3(
        Y + 1.402 * cbcr.y,
        Y - 0.344136 * cbcr.x - 0.714136 * cbcr.y,
        Y + 1.772 * cbcr.x
    );
    outColor = vec4(clamp(rgb, 0.0, 1.0), 1.0);
}
`,p={blockSize:16,searchRange:5,searchStep:2,useResidual:!0,dup:0,colorSpace:"ycbcr",chromaGain:1,healRate:0,healThreshold:1,view:"output"};class g{params;#e=!1;#t=!0;#r=null;#o=null;#s=null;#a=null;#i=null;#n=null;#c=null;#l=0;#u=0;#h=0;#v=0;#m=0;#f=0;#d;constructor(e={}){this.params={...p,...e},this.#d=this.params.colorSpace}setParams(e){Object.assign(this.params,e)}enable(){this.#e=!0}disable(){this.#e=!1,this.#t=!0}get enabled(){return this.#e}#p(){this.#r?.dispose(),this.#o?.dispose(),this.#s?.dispose(),this.#a?.dispose(),this.#i?.dispose(),this.#n?.dispose(),this.#c?.dispose(),this.#r=null,this.#o=null,this.#s=null,this.#a=null,this.#i=null,this.#n=null,this.#c=null}#g(e){let[t,r]=e.dims.elementPixel,o=Math.max(2,this.params.blockSize);if(this.#l===t&&this.#u===r&&this.#m===o)return;this.#p(),this.#l=t,this.#u=r,this.#h=Math.ceil(t/2),this.#v=Math.ceil(r/2),this.#m=o,this.#t=!0;let s=Math.ceil(t/o),a=Math.ceil(r/o);this.#r=e.createRenderTarget({size:[t,r]}),this.#o=e.createRenderTarget({size:[t,r],persistent:!0}),this.#a=e.createRenderTarget({size:[t,r],float:!0}),this.#i=e.createRenderTarget({size:[t,r],float:!0,persistent:!0}),this.#n=e.createRenderTarget({size:[this.#h,this.#v],float:!0,persistent:!0}),this.#c=e.createRenderTarget({size:[this.#h,this.#v],float:!0}),this.#s=e.createRenderTarget({size:[s,a],float:!0,filter:"nearest"})}render(e){this.#g(e);let t=this.#r,r=this.#o,o=this.#s,a=this.#a,l=this.#i,u=this.#n,h=this.#c;if(!t||!r||!o||!a||!l||!u||!h)return;this.params.colorSpace!==this.#d&&(this.#d=this.params.colorSpace,this.#t=!0);let d=[this.#l,this.#u];s(e,t);let p="output"!==this.params.view;if((this.#e||p)&&(e.draw({frag:i,uniforms:{uCur:t,uRef:r,uResolution:d,uBlock:this.#m,uSearch:this.params.searchRange,uStep:this.params.searchStep,uHealRate:this.params.healRate,uHealThreshold:this.params.healThreshold,uFrame:this.#f++%65536},target:o}),e.draw({frag:n,uniforms:{uCur:t,uRef:r,uMV:o,uResolution:d},target:a})),this.#e){let s=this.#t?1:1+this.params.dup,i=[this.#h,this.#v];"ycbcr"===this.params.colorSpace&&e.draw({frag:v,uniforms:{uCur:t,uRef:r,uMV:o,uChromaRes:i},target:h});for(let r=0;r<s;r++){let s=this.params.useResidual&&0===r;"ycbcr"===this.params.colorSpace?(e.draw({frag:m,uniforms:{uAccum:l,uMV:o,uVideo:t,uResidual:a,uResolution:d,uIntra:this.#t,uUseResidual:s},target:l}),e.draw({frag:f,uniforms:{uChromaAcc:u,uMV:o,uVideo:t,uResidualC:h,uChromaRes:i,uIntra:this.#t,uUseResidual:s},target:u})):e.draw({frag:c,uniforms:{uAccum:l,uMV:o,uVideo:t,uResidual:a,uResolution:d,uIntra:this.#t,uUseResidual:s},target:l})}this.#t=!1}else this.#t=!0;this.#x(e,t,r,o,a,l,u),s(e,r)}#x(e,t,r,o,s,i,n){switch(this.params.view){case"motion":e.draw({frag:l,uniforms:{uMV:o,uMvScale:this.params.searchRange*this.params.searchStep},target:e.target});return;case"residual":e.draw({frag:u,uniforms:{uResidual:s},target:e.target});return;case"current":e.draw({frag:a,uniforms:{tex:t},target:e.target});return;case"previous":e.draw({frag:a,uniforms:{tex:r},target:e.target});return;default:this.#e&&"ycbcr"===this.params.colorSpace?e.draw({frag:d,uniforms:{uLumaAcc:i,uChromaAcc:n,uChromaGain:this.params.chromaGain},target:e.target}):e.draw({frag:a,uniforms:{tex:this.#e?i:t},target:e.target})}}dispose(){this.#p(),this.#l=0,this.#u=0,this.#h=0,this.#v=0,this.#m=0,this.#t=!0}}var x=e.i(66601);class b extends t.f{name="datamosh";frag=`
vec4 transition(vec2 uv, float t) {
  return reverse > 0.5 ? readFrom(uv) : readTo(uv);
}
`}class w extends g{#b;#w=0;#y=1;constructor(e){super({dup:0,blockSize:e()}),this.#b=e}start(e){this.params.blockSize=this.#b(),this.params.chromaGain=1.5,this.params.useResidual=!1,this.params.healRate=0,this.#w=0,this.#y=Math.max(.75*e.duration,.001),this.enable()}update(e){let{x:t}=e.progress,r=Math.min(Math.max((t-.25)/.75,0),1);this.params.useResidual=++this.#w>2,this.params.chromaGain=1.5+-.5*r,this.params.healRate=t<.25?0:1-.01**(e.deltaTime/this.#y)}end(){this.disable()}}class y extends x.A{name="datamosh";stages=[new b,new w(()=>{var e;return void 0!==(e=this.params.blockSize)&&Number.isFinite(e)&&e>=2?Math.round(e):32})]}e.s(["f",0,y],28317)},96210,84177,166,e=>{e.i(90422);var t=e.i(28113),r=e.i(66601);class o extends t.f{name="distort_fade";frag=`
const float STRENGTH = 0.15;
const float SCALE = 1.0;

// 2D simplex noise (Ashima Arts, MIT).
vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = x0.x > x0.y ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

// Two octaves, so the warp has both large swirls and finer ripples.
float fbm(vec2 p) {
  return snoise(p) * 0.7 + snoise(p * 2.3 + 17.0) * 0.3;
}

${r.S}
vec4 transition(vec2 uv, float t) {
  // A container overflow must not show warped content outside the element.
  if (!inRange(uv)) return vec4(0.0);
  float amount = sin(t * 3.141593);
  vec2 p = uv * resolution / min(resolution.x, resolution.y) * SCALE;
  // The noise drifts as the run goes, so the warp flows instead of only growing.
  p += t * 1.5;
  vec2 offset = vec2(fbm(p), fbm(p + vec2(31.7, 11.3))) * STRENGTH * amount;
  vec2 q = mirror(uv + offset);
  return mix(readFrom(q), readTo(q), smoothstep(0.3, 0.7, t));
}
`}e.s(["f",0,o],96210);var s=t;class a extends s.f{name="glitch";frag=`
uniform float amount;
uniform float speed;

float gnoise(float y) {
  return sin(y * 7.0) * sin(y * 17.0) * sin(y * 59.0);
}
vec2 gnoise(vec2 uv) {
  return vec2(gnoise(uv.x), gnoise(uv.y + 100.0));
}

${r.F}
vec4 transition(vec2 uv, float t) {
  // A container overflow must not show wrapped content outside the element.
  if (!inRange(uv)) return vec4(0.0);
  float shift = sin(floor(t * 10.0 + 0.5) / 10.0 * 3.141593) * amount;
  float n = t * speed;
  vec2 uvr = uv, uvg = uv, uvb = uv;
  if (gnoise(n * 3.0 + 10.0) > 0.0) {
    uvr += gnoise(vec2(floor(n * 21.0), floor(n * 31.0))) * vec2(1.0, 0.1) * shift;
    uvg += gnoise(vec2(floor(n * 22.0), floor(n * 32.0))) * vec2(1.0, 0.1) * shift;
    uvb += gnoise(vec2(floor(n * 23.0), floor(n * 33.0))) * vec2(1.0, 0.1) * shift;
  }
  // Wrap so shifted areas show content rather than holes.
  uvr = fract(uvr);
  uvg = fract(uvg);
  uvb = fract(uvb);

  vec4 c1 = splitRead(uvr, uvg, uvb, false);
  vec4 c2 = splitRead(uvr, uvg, uvb, true);
  return mix(c1, c2, step(0.5, t));
}
`;uniforms(){return{amount:this.params.amount??1,speed:this.params.speed??1}}}e.s(["f",0,a],84177);var i=t;class n extends i.f{name="glitch_slide";frag=`
// The old content, then the new one to its right, as one strip.
vec4 strip(vec2 p) {
  return p.x < 1.0 ? readFrom(p) : readTo(vec2(p.x - 1.0, p.y));
}

// Each stripe slows down as it lands, so the end does not snap.
float shift(float x) {
  x = clamp(x, 0.0, 1.0);
  return 1.0 - (1.0 - x) * (1.0 - x);
}

vec4 transition(vec2 uv, float t) {
  // A container overflow must not show wrapped content outside the element.
  if (!inRange(uv)) return vec4(0.0);
  float y = floor(uv.y * 53.0) / 53.0;
  float n = sin(y * 7.0) * sin(y * 17.0) * sin(y * 59.0) * 0.5 + 0.5;

  // Fade the shift in over the first 5% so the start matches the idle content.
  float k = min(t * 20.0, 1.0);
  vec2 uvr = uv, uvg = uv, uvb = uv;
  uvr.x += shift(t * 1.8 - n * 0.2 - 0.1) * k;
  uvg.x += shift(t * 1.8 - n * 0.2) * k;
  uvb.x += shift(t * 1.8 - n * 0.2 + 0.1) * k;

  vec4 r = strip(uvr);
  vec4 g = strip(uvg);
  vec4 b = strip(uvb);
  return vec4(r.r, g.g, b.b, (r.a + g.a + b.a) / 3.0);
}
`}e.s(["f",0,n],166)},57888,97394,e=>{var t=e.i(36375);let r=`#version 300 es
precision highp float;
in vec2 uvSrc;
in vec2 uvContent;
out vec4 outColor;
uniform sampler2D src;
void main() {
    if (any(lessThan(uvContent, vec2(0.0))) ||
        any(greaterThan(uvContent, vec2(1.0)))) {
        outColor = vec4(0.0);
        return;
    }
    vec4 c = texture(src, uvSrc);
    outColor = vec4(c.rgb * c.a, c.a);
}
`,o=`#version 300 es
precision highp float;
in vec2 uvContent;
out vec4 outColor;
uniform sampler2D tex;
void main() {
    if (any(lessThan(uvContent, vec2(0.0))) ||
        any(greaterThan(uvContent, vec2(1.0)))) {
        outColor = vec4(0.0);
        return;
    }
    vec4 c = texture(tex, uvContent);
    outColor = vec4(c.rgb * c.a, c.a);
}
`,s={quality:.4,seed:.25,iterations:24,resolutionScale:1,randomFlip:!0,vertical:!1,speed:0,bypass:!1};function a(e,t){if("u">typeof OffscreenCanvas)return new OffscreenCanvas(e,t);let r=document.createElement("canvas");return r.width=e,r.height=t,r}function i(e){let t=e.getContext("2d");if(!t)throw Error("[VFX-JS] JPEGGlitchEffect: 2D canvas context unavailable");return t}function n(e,t,r,o,s,a,i){switch(e.save(),e.clearRect(0,0,a,i),s){case 90:e.translate(a,0);break;case 180:e.translate(a,i);break;case 270:e.translate(0,i)}e.rotate(s*Math.PI/180),e.drawImage(t,0,0,r,o),e.restore()}class c{params;enabled=!0;#T=!1;#R=null;#S=null;#C=null;#k=null;#z=!1;#M=null;#A=null;#E=null;#P=null;#D=null;#G=null;#H=null;#U=new Uint8Array(0);#_=null;#l=0;#u=0;#F=0;#L=0;#B=!0;#O=!1;#I=-1e9;#V=0;#W=0;#j=!1;#X=0;get producedFrames(){return this.#X}constructor(e={}){this.params={...s,...e}}setParams(e){Object.assign(this.params,e),this.#B=!0}init(e){this.#T="function"==typeof createImageBitmap&&("u">typeof OffscreenCanvas||"u">typeof document),this.#T&&(this.#I=-1e9,this.#B=!0,this.#A=a(1,1),this.#E=i(this.#A),this.#P=a(1,1),this.#D=i(this.#P),this.#G=a(1,1),this.#H=i(this.#G),this.#R=e.createRenderTarget({size:[1,1]}),this.#C=e.gl,this.#N(e),this.#M=e.onContextRestored(()=>{this.#N(e),this.#z=this.#j}))}#N(e){let t=e.gl,r=t.createTexture();r&&(t.bindTexture(t.TEXTURE_2D,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array([0,0,0,0])),t.bindTexture(t.TEXTURE_2D,null),this.#k=r,this.#S=e.wrapTexture(r,{size:[this.#l||1,this.#u||1]}))}update(){!1===this.enabled&&(this.#j=!1)}render(e){if(this.params.bypass||!this.#T||!this.#R){this.#j=!1,this.#Y(e);return}let t=e.src.width,r=e.src.height;(t!==this.#F||r!==this.#L)&&(this.#F=t,this.#L=r,this.#B=!0);let[s,a]=e.dims.elementPixel,i=Math.min(1,Math.max(0,this.params.resolutionScale)),n=Math.max(1,Math.round(s*i)),c=Math.max(1,Math.round(a*i));s>=2&&a>=2&&t>0&&r>0&&((n!==this.#l||c!==this.#u)&&this.#q(e,n,c),this.#K(e)&&this.#$(e)),this.#j&&this.#S?(this.#z&&this.#J(e),e.draw({frag:o,uniforms:{tex:this.#S},target:e.target})):this.#Y(e)}#Y(e){e.draw({frag:r,uniforms:{src:e.src},target:e.target})}#K(e){if(this.#O)return!1;let t=this.params.speed;return t>0?e.time-this.#I>=1/t:this.#B}#q(e,t,r){this.#l=t,this.#u=r,this.#U=new Uint8Array(t*r*4),this.#_=new ImageData(t,r),this.#A&&(this.#A.width=t,this.#A.height=r),this.#G&&(this.#G.width=t,this.#G.height=r),this.#R?.dispose(),this.#R=e.createRenderTarget({size:[t,r]}),this.#j=!1,this.#B=!0,this.#O=!1,this.#z=!1,this.#V++}#$(e){let r,o=this.#l,s=this.#u,a=this.#A,i=this.#E,c=this.#P,l=this.#D,u=this.#_;if(!a||!i||!c||!l||!u||!this.#R)return;(0,t.N)(e,this.#R);let h=e.gl;h.readPixels(0,0,o,s,h.RGBA,h.UNSIGNED_BYTE,this.#U),h.bindFramebuffer(h.FRAMEBUFFER,null),this.#O=!0,this.#B=!1,this.#I=e.time;let v=u.data,m=4*o;for(let e=0;e<s;e++){let t=(s-1-e)*m;v.set(this.#U.subarray(t,t+m),e*m)}for(let e=3;e<v.length;e+=4)v[e]=255;let f=this.params.speed>0?this.#W:0;this.#W++;let{quality:d,seed:p,iterations:g,randomFlip:x,vertical:b}=this.params,w=(r=Math.imul(0|Math.floor(0x9e3779b1*p),0x85ebca77)+Math.imul(f+1,0xc2b2ae3d)>>>0,()=>{let e=Math.imul((r=r+0x6d2b79f5>>>0)^r>>>15,1|r);return(((e=e+Math.imul(e^e>>>7,61|e)^e)^e>>>14)>>>0)/0x100000000}),y=x&&.5>w();i.putImageData(u,0,0);let T=(180*!!y+270*!!b)%360,R=b?s:o,S=b?o:s;c.width=R,c.height=S,n(l,a,o,s,T,R,S),this.#Q(c,o,s,d,g,T,w,this.#V)}#J(e){let t=e.gl;this.#k&&this.#G&&(t.bindTexture(t.TEXTURE_2D,this.#k),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,this.#G),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.bindTexture(t.TEXTURE_2D,null),this.#z=!1)}async #Q(e,t,r,o,s,a,i,c){try{let l=await ("u">typeof OffscreenCanvas&&e instanceof OffscreenCanvas?e.convertToBlob({type:"image/jpeg",quality:o}):new Promise((t,r)=>{e.toBlob(e=>e?t(e):r(Error("[VFX-JS] JPEGGlitchEffect: toBlob failed")),"image/jpeg",o)})),u=new Uint8Array(await l.arrayBuffer()),h=function(e){for(let t=2;t+3<e.length;t++)if(255===e[t]&&218===e[t+1]){let r=e[t+2]<<8|e[t+3];return Math.min(e.length,t+2+r)}return Math.min(e.length,417)}(u);!function(e,t,r,o){let s=e.length-t-4;if(s<=1)return;let a=Math.max(1,Math.floor(r));for(let r=0;r<a;r++){let i=s/a*r|0,n=Math.max(1,(s/a*(r+1)|0)-i),c=Math.min(s,i+(o()*n|0)),l=256*o()|0;e[t+c]=l}}(u,h,s,i);let v=await createImageBitmap(new Blob([u],{type:"image/jpeg"}));c===this.#V&&this.#H&&(n(this.#H,v,v.width,v.height,(360-a)%360,t,r),this.#j=!0,this.#X++,this.#z=!0),v.close()}catch{}finally{c===this.#V&&(this.#O=!1)}}dispose(){this.#M?.(),this.#M=null,this.#C&&this.#k&&this.#C.deleteTexture(this.#k),this.#k=null,this.#C=null,this.#z=!1,this.#R?.dispose(),this.#R=null,this.#S=null,this.#A=null,this.#E=null,this.#P=null,this.#D=null,this.#G=null,this.#H=null,this.#_=null,this.#U=new Uint8Array(0),this.#j=!1,this.#O=!1,this.#l=0,this.#u=0,this.#V++}}var l=e.i(66601);let u=e=>Math.min(Math.max(e.quality??.1,0),1);class h extends c{#Z;constructor(e){super({quality:u(e()),bypass:!0,resolutionScale:.25}),this.#Z=e}start(){this.params.bypass=!0,this.params.speed=30,this.params.quality=u(this.#Z())}render(e){let{x:t}=e.progress;this.params.bypass=!(t>.12&&t<.88);let r=Math.sin(Math.min(Math.max(t,0),1)*Math.PI),o=Math.max(1,Math.round(this.#Z().iterations??4));this.params.iterations=Math.max(1,Math.round(o*r)),super.render(e)}end(){this.params.bypass=!0}}class v extends l.A{name="jpeg_glitch";ease="linear";stages=[new l.s,new h(()=>this.params)]}e.s(["f",0,v],57888),e.i(90422);var m=e.i(28113);let f={right:[1,0],left:[-1,0],up:[0,1],down:[0,-1],center:[0,0]};class d extends m.f{name="pixel_scan";frag=`
uniform float blackout;
// Zero spreads out in rings; otherwise the side the fronts sweep toward.
uniform vec2 sweep;
const float W = 0.2;
// Half width of each glowing front.
const float GLOW = 0.12;
// How far the front of the new content trails the old one.
const float GAP = 0.6;
const float LAYERS = 3.0;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(4859.0, 3985.0))) * 3984.0);
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float sdBox(vec2 p, float r) {
  vec2 q = abs(p) - r;
  return min(length(q), max(q.y, q.x));
}

float aspect() {
  return resolution.y / resolution.x;
}

// Where the front reaches the cell, in [0, 1]. Cells span [-scale, scale] in x and the aspect-scaled range in y.
float cellPos(vec2 pi, float scale) {
  vec2 size = vec2(1.0, aspect());
  if (sweep == vec2(0.0)) return length(pi / scale) / length(size);
  return 0.5 + dot(pi / (scale * size * 2.0), sweep);
}

vec4 cell(vec2 p, vec2 pi, float scale, float t, float edge) {
  vec2 pc = pi + 0.5;
  vec2 uvc = pc / scale;
  uvc.y /= aspect();
  uvc = uvc * 0.5 + 0.5;
  if (!inRange(uvc)) return vec4(0.0);
  // Glow only where either side has content.
  float alpha = smoothstep(0.0, 0.1, max(readFrom(uvc).a, readTo(uvc).a));
  vec4 color = vec4(hsv2rgb(vec3((pc.x * 13.0 / pc.y * 17.0) * 0.3, 1.0, 1.0)), 1.0);
  float x = cellPos(pi, scale);
  float n = hash(pi);
  float anim = smoothstep(GLOW, 0.0, abs(x + n * W - t));
  color *= anim;
  color *= mix(1.0, clamp(0.3 / abs(sdBox(p - pc, 0.5)), 0.0, 10.0), edge * pow(anim, 10.0));
  return color * alpha;
}

vec4 cellsColor(vec2 p, float scale, float t) {
  vec2 pi = floor(p);
  vec2 d = vec2(0.0, 1.0);
  vec4 cc = cell(p, pi, scale, t, 0.2) * 4.0;
  cc += cell(p, pi + d.xy, scale, t, 0.9);
  cc += cell(p, pi - d.xy, scale, t, 0.9);
  cc += cell(p, pi + d.yx, scale, t, 0.9);
  cc += cell(p, pi - d.yx, scale, t, 0.9);
  return cc / 8.0;
}

vec4 draw(vec2 uv, vec2 p, float t, float scale) {
  vec2 pi = floor(p * scale);
  float x = cellPos(pi, scale);
  float h = x + hash(pi) * W;
  // The old content leaves at the front t; the new one arrives at a second front behind it.
  float tIn = t - GAP;
  float out_ = smoothstep(t, t - W, h);
  float in_ = smoothstep(tIn, tIn - W, h);
  vec4 from = readFrom(uv);
  vec4 to = readTo(uv);
  float a = max(from.a, to.a);
  float gap = blackout * (out_ - in_);
  vec4 c = from * (1.0 - out_) + to * in_ + vec4(0.0, 0.0, 0.0, a) * gap;
  vec4 glow = cellsColor(p * scale, scale, t) + cellsColor(p * scale, scale, tIn);
  return c + glow * 1.5;
}

vec4 transition(vec2 uv, float t) {
  // A container overflow must not show cells outside the element.
  if (!inRange(uv)) return vec4(0.0);
  vec2 p = uv * 2.0 - 1.0;
  p.y *= aspect();
  // Start and end with both fronts and their glow fully off the element.
  t = mix(-GLOW, 1.0 + W * 2.0 + GAP + GLOW, t);
  vec4 c = vec4(0.0);
  for (float i = 0.0; i < LAYERS; i++) {
    c += draw(uv, p, t, abs(cos(i) * 7.3 + 10.0));
  }
  c /= LAYERS;
  return vec4(c.rgb, min(c.a, 1.0));
}
`;uniforms(){return{blackout:this.params.blackout??!0?1:0,sweep:f[this.params.direction??"right"]}}}e.s(["f",0,d],97394)},81651,e=>{e.i(90422);var t=e.i(28113);class r extends t.f{name="pixel_stretch";frag=`
const float SMOOTH = 0.05;

// Quadratic smooth min (Inigo Quilez) to round the corner where the streaks start.
float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}
float smax(float a, float b, float k) {
  return -smin(-a, -b, k);
}

vec4 transition(vec2 uv, float t) {
  // A container overflow must not show stretched content outside the element.
  if (!inRange(uv)) return vec4(0.0);
  float mixT = smoothstep(0.4, 0.6, t);
  vec4 c = vec4(0.0);
  if (mixT < 1.0) {
    // Above the line repeats the row under it.
    float line = mix(1.0 + SMOOTH, -SMOOTH, smoothstep(0.0, 0.4, t));
    float y = clamp(smin(uv.y, line, SMOOTH), 0.0, 1.0);
    c += readFrom(vec2(uv.x, y)) * (1.0 - mixT);
  }
  if (mixT > 0.0) {
    // Below the line repeats the row under it.
    float line = mix(1.0 + SMOOTH, -SMOOTH, smoothstep(0.6, 1.0, t));
    float y = clamp(smax(uv.y, line, SMOOTH), 0.0, 1.0);
    c += readTo(vec2(uv.x, y)) * mixT;
  }
  return c;
}
`}e.s(["f",0,r])},18013,e=>{var t=e.i(36375);let r=`
float key(vec3 c, int mode) {
    if (mode == 0) return dot(c, vec3(0.299, 0.587, 0.114));
    if (mode == 1) return c.r;
    if (mode == 2) return c.g;
    if (mode == 3) return c.b;
    float mx = max(max(c.r, c.g), c.b);
    float mn = min(min(c.r, c.g), c.b);
    float d  = mx - mn;
    if (mode == 5) return mx > 0.0 ? d / mx : 0.0;
    if (d < 1e-5) return 0.0;
    float h;
    if (mx == c.r)      h = (c.g - c.b) / d + (c.g < c.b ? 6.0 : 0.0);
    else if (mx == c.g) h = (c.b - c.r) / d + 2.0;
    else                h = (c.r - c.g) / d + 4.0;
    return h / 6.0;
}
`,o=`
ivec2 toXY(int a, int b, int axis) { return axis == 0 ? ivec2(a, b) : ivec2(b, a); }

// Map a box point (centred coords) back into source pixel space — the same
// box -> source rotation rotate-in uses.
vec2 boxToSrc(vec2 boxPx, vec2 imgSize, vec2 rot) {
    vec2 dSrc = vec2(rot.x * boxPx.x + rot.y * boxPx.y, -rot.y * boxPx.x + rot.x * boxPx.y);
    return dSrc + imgSize * 0.5;
}

// Rotated path: does the low-res cell (a along axis, b across) overlap the
// source rect? Run membership is LENIENT — the bound is grown by one cell so a
// boundary cell straddling the source edge still counts as inside. That keeps
// every full-res inside pixel backed by a sorted cell; the crisp edge is
// reimposed per output pixel in the gather (see boxToSrc clip). Without the
// slack, boundary cells fall out of the run at coarse sortRes and the gather
// shows the original image in a staircase along the edge.
bool insideSrc(int a, int b, int axis, vec2 lowSize, vec2 boxSize, vec2 imgSize, vec2 rot) {
    vec2 boxPx = (vec2(toXY(a, b, axis)) + 0.5) / lowSize * boxSize - boxSize * 0.5;
    vec2 sp = boxToSrc(boxPx, imgSize, rot);
    float m = axis == 0 ? boxSize.x / lowSize.x : boxSize.y / lowSize.y;
    return sp.x >= -m && sp.x <= imgSize.x + m && sp.y >= -m && sp.y <= imgSize.y + m;
}

// A cell belongs to a sort run when it is inside the source AND its key falls
// in the [lo, hi] band. Both ends are inclusive so the defaults lo == 0 /
// hi == 1 keep every source pixel instead of dropping pure-black or pure-white
// ones. In the rotated path the source bound comes from \`insideSrc\`
// (coordinate), decoupled from the band, so the run never extends into padding.
bool runActive(sampler2D s, int a, int b, int axis, int keyMode, float lo, float hi, int masked, vec2 lowSize, vec2 boxSize, vec2 imgSize, vec2 rot) {
    if (masked == 1 && !insideSrc(a, b, axis, lowSize, boxSize, imgSize, rot)) return false;
    float k = key(texelFetch(s, toXY(a, b, axis), 0).rgb, keyMode);
    return k >= lo && k <= hi;
}

void scanSegment(sampler2D s, int a, int b, int L, int keyMode, float lo, float hi, int axis, int masked, vec2 lowSize, vec2 boxSize, vec2 imgSize, vec2 rot, out int segStart, out int segEnd) {
    segStart = a;
    for (int i = 0; i < 8192; i++) {
        if (segStart <= 0) break;
        if (i >= L) break;
        if (!runActive(s, segStart - 1, b, axis, keyMode, lo, hi, masked, lowSize, boxSize, imgSize, rot)) break;
        segStart--;
    }
    segEnd = a + 1;
    for (int i = 0; i < 8192; i++) {
        if (segEnd >= L) break;
        if (i >= L) break;
        if (!runActive(s, segEnd, b, axis, keyMode, lo, hi, masked, lowSize, boxSize, imgSize, rot)) break;
        segEnd++;
    }
}
`,s=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D src;
uniform vec2 srcSize;
uniform float threshold;
uniform float thresholdHigh;
uniform int keyMode;
uniform int direction;
uniform int axis;
uniform int masked;
uniform vec2 boxSize;
uniform vec2 imgSize;
uniform vec2 rot;
${r}
${o}
void main() {
    ivec2 p = ivec2(gl_FragCoord.xy);
    int a = axis == 0 ? p.x : p.y;
    int b = axis == 0 ? p.y : p.x;
    int L = int(axis == 0 ? srcSize.x : srcSize.y);
    float myKey = key(texelFetch(src, p, 0).rgb, keyMode);
    if (!runActive(src, a, b, axis, keyMode, threshold, thresholdHigh, masked, srcSize, boxSize, imgSize, rot)) {
        outColor = vec4(0.0, 0.0, 0.0, 1.0);
        return;
    }
    int segStart, segEnd;
    scanSegment(src, a, b, L, keyMode, threshold, thresholdHigh, axis, masked, srcSize, boxSize, imgSize, rot, segStart, segEnd);
    int rank = 0;
    for (int i = segStart; i < segEnd; i++) {
        if (i == a) continue;
        float k = key(texelFetch(src, toXY(i, b, axis), 0).rgb, keyMode);
        if (direction == 0) {
            if (k < myKey || (k == myKey && i < a)) rank++;
        } else {
            if (k > myKey || (k == myKey && i < a)) rank++;
        }
    }
    outColor = vec4(float(rank), float(segEnd - segStart), 0.0, 1.0);
}
`,a=`#version 300 es
precision highp float;
in vec2 uv;
in vec2 uvContent;
in vec2 uvSrc;
out vec4 outColor;
uniform sampler2D src;
uniform sampler2D srcHi;
uniform sampler2D rankTex;
uniform vec2 lowSize;
uniform float threshold;
uniform float thresholdHigh;
uniform int keyMode;
uniform int axis;
uniform int masked;
uniform vec2 boxSize;
uniform vec2 imgSize;
uniform vec2 rot;
${r}
${o}
void main() {
    vec2 p = masked == 1 ? uv : uvContent;
    vec2 hiUv = masked == 1 ? uv : uvSrc;
    if (any(lessThan(p, vec2(0.0))) || any(greaterThan(p, vec2(1.0)))) {
        outColor = vec4(0.0);
        return;
    }
    // Crisp source edge at full output resolution. The lenient low-res run
    // membership lets sorted content spill up to a cell into the padding;
    // clip it back to the exact rotated rect here so the boundary is sharp
    // and never reveals the padding, independent of sortRes.
    if (masked == 1) {
        vec2 sp = boxToSrc(p * boxSize - boxSize * 0.5, imgSize, rot);
        if (sp.x < 0.0 || sp.x > imgSize.x || sp.y < 0.0 || sp.y > imgSize.y) {
            outColor = vec4(0.0);
            return;
        }
    }
    int lowA = axis == 0 ? int(p.x * lowSize.x) : int(p.y * lowSize.y);
    int b    = axis == 0 ? int(p.y * lowSize.y) : int(p.x * lowSize.x);
    int L    = int(axis == 0 ? lowSize.x : lowSize.y);
    ivec2 lowP = toXY(lowA, b, axis);
    float myKey = key(texelFetch(src, lowP, 0).rgb, keyMode);
    if (!runActive(src, lowA, b, axis, keyMode, threshold, thresholdHigh, masked, lowSize, boxSize, imgSize, rot)) {
        // padding / out-of-band pixels skip the low-res buffer entirely.
        vec4 c = texture(srcHi, hiUv);
        outColor = vec4(c.rgb * c.a, c.a);
        return;
    }
    int segStart, segEnd;
    scanSegment(src, lowA, b, L, keyMode, threshold, thresholdHigh, axis, masked, lowSize, boxSize, imgSize, rot, segStart, segEnd);
    int targetRank = lowA - segStart;
    for (int i = segStart; i < segEnd; i++) {
        int r = int(texelFetch(rankTex, toXY(i, b, axis), 0).r + 0.5);
        if (r == targetRank) {
            // unmoved pixels keep the hi-res source; moved pixels take the low-res sorted color
            if (i == lowA) {
                vec4 c = texture(srcHi, hiUv);
                outColor = vec4(c.rgb * c.a, c.a);
            } else {
                vec4 c = texelFetch(src, toXY(i, b, axis), 0);
                outColor = vec4(c.rgb * c.a, c.a);
            }
            return;
        }
    }
    vec4 c = texture(srcHi, hiUv);
    outColor = vec4(c.rgb * c.a, c.a);
}
`,i=`#version 300 es
precision highp float;
in vec2 uvSrc;
out vec4 outColor;
uniform sampler2D src;
void main() {
    vec4 c = texture(src, uvSrc);
    outColor = vec4(c.rgb * c.a, c.a);
}
`,n=`#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D src;
uniform vec4 srcRectUv;
uniform vec2 srcSize;
uniform vec2 boxSize;
uniform vec2 rot;
void main() {
    vec2 dBox = uv * boxSize - boxSize * 0.5;
    vec2 dSrc = vec2(
        rot.x * dBox.x + rot.y * dBox.y,
        -rot.y * dBox.x + rot.x * dBox.y
    );
    vec2 uvS = clamp((dSrc + srcSize * 0.5) / srcSize, 0.0, 1.0);
    outColor = texture(src, srcRectUv.xy + uvS * srcRectUv.zw);
}
`,c=`#version 300 es
precision highp float;
in vec2 uvContent;
out vec4 outColor;
uniform sampler2D src;
uniform vec2 srcSize;
uniform vec2 boxSize;
uniform vec2 rot;
void main() {
    if (any(lessThan(uvContent, vec2(0.0))) || any(greaterThan(uvContent, vec2(1.0)))) {
        outColor = vec4(0.0);
        return;
    }
    vec2 dSrc = uvContent * srcSize - srcSize * 0.5;
    vec2 dBox = vec2(
        rot.x * dSrc.x - rot.y * dSrc.y,
        rot.y * dSrc.x + rot.x * dSrc.y
    );
    vec2 uvB = (dBox + boxSize * 0.5) / boxSize;
    outColor = texture(src, uvB);
}
`,l={right:{axis:0,direction:0},left:{axis:0,direction:1},down:{axis:1,direction:1},up:{axis:1,direction:0}},u={luminance:0,r:1,g:2,b:3,hue:4,saturation:5},h={range:[0,1],sortRes:128,key:"luminance",direction:"up",angle:0,bypass:!1};class v{params;#ee=null;#et=null;#er=null;#eo=null;#l=0;#u=0;#es=0;#ea=0;#ei=0;#en=0;#ec=0;constructor(e={}){this.params={...h,...e},this.params.range=[...this.params.range]}setParams(e){Object.assign(this.params,e),e.range&&(this.params.range=[...e.range])}#p(){this.#ee?.dispose(),this.#et?.dispose(),this.#er?.dispose(),this.#eo?.dispose(),this.#ee=null,this.#et=null,this.#er=null,this.#eo=null}#g(e){let[t,r]=e.dims.elementPixel,{axis:o}=l[this.params.direction],{angle:s}=this.params,a=this.params.sortRes,i=t,n=r;if(0!==s){let e=s*Math.PI/180,o=Math.abs(Math.cos(e)),a=Math.abs(Math.sin(e));i=Math.ceil(t*o+r*a),n=Math.ceil(t*a+r*o)}let c=0===o?Math.max(1,Math.round(a*i/t)):Math.max(1,Math.round(a*n/r)),u=0===o?c:i,h=0===o?n:c;(this.#l!==t||this.#u!==r||this.#es!==s||this.#en!==u||this.#ec!==h)&&(this.#p(),this.#l=t,this.#u=r,this.#es=s,this.#ea=i,this.#ei=n,this.#en=u,this.#ec=h,this.#ee=e.createRenderTarget({size:[u,h],filter:"nearest"}),this.#et=e.createRenderTarget({size:[u,h],filter:"nearest",float:!0}),0!==s&&(this.#er=e.createRenderTarget({size:[i,n]}),this.#eo=e.createRenderTarget({size:[i,n]})))}render(e){if(this.#g(e),this.params.bypass||!this.#ee||!this.#et)return void e.draw({frag:i,uniforms:{src:e.src},target:e.target});let{axis:r,direction:o}=l[this.params.direction],h=[this.#en,this.#ec],[v,m]=this.params.range,f=u[this.params.key],[d,p]=e.dims.elementPixel,g=this.#er,x=this.#eo,b=0!==this.params.angle&&null!==g&&null!==x,w=e.src,y=e.target,T=[1,0],R=[d,p];if(b){let t=-this.params.angle*Math.PI/180;T=[Math.cos(t),Math.sin(t)],R=[this.#ea,this.#ei],e.draw({frag:n,uniforms:{src:e.src,srcSize:[d,p],boxSize:R,rot:T},target:g}),w=g,y=x}b&&null!==g?(0,t.S)(e,g,this.#ee):(0,t.N)(e,this.#ee);let S=+!!b,C=[d,p];e.draw({frag:s,uniforms:{src:this.#ee,srcSize:h,threshold:v,thresholdHigh:m,keyMode:f,direction:o,axis:r,masked:S,boxSize:R,imgSize:C,rot:T},target:this.#et}),e.draw({frag:a,uniforms:{src:this.#ee,srcHi:w,rankTex:this.#et,lowSize:h,threshold:v,thresholdHigh:m,keyMode:f,axis:r,masked:S,boxSize:R,imgSize:C,rot:T},target:y}),b&&e.draw({frag:c,uniforms:{src:x,srcSize:[d,p],boxSize:R,rot:T},target:e.target})}dispose(){this.#p(),this.#l=0,this.#u=0,this.#es=0,this.#ea=0,this.#ei=0,this.#en=0,this.#ec=0}}var m=e.i(66601);let f={up:"down",down:"up",left:"right",right:"left"};class d extends v{#el;#eu=!1;constructor(e){super({range:[1,1]}),this.#el=e}start(e){let t=this.#el();this.#eu=e.reverse,this.params.direction=e.reverse?f[t]:t,this.params.range[0]=1}update(e){let{t}=e.progress,r=this.#el(),o=this.#eu?1-t:t;this.params.direction=o<.5?r:f[r],this.params.range[0]=Math.abs(1-2*t)}end(){this.params.range[0]=1}}class p extends m.A{name="pixelsort";stages=[new m.s,new d(()=>this.params.direction??"up")]}e.s(["f",0,p],18013)},26873,e=>{e.i(90422);var t=e.i(28113);class r extends t.f{name="slit_scan";frag=`
const vec3 LAG = vec3(0.0, 0.2, 0.4);

vec4 splitRead(float xr, float xg, float xb, float y, bool to) {
  vec4 r = to ? readTo(vec2(xr, y)) : readFrom(vec2(xr, y));
  vec4 g = to ? readTo(vec2(xg, y)) : readFrom(vec2(xg, y));
  vec4 b = to ? readTo(vec2(xb, y)) : readFrom(vec2(xb, y));
  return vec4(r.r, g.g, b.b, (r.a + g.a + b.a) / 3.0);
}

vec4 transition(vec2 uv, float t) {
  // A container overflow must not show smeared content outside the element.
  if (!inRange(uv)) return vec4(0.0);
  float span = 1.0 + LAG.b;
  // Each sweep ends fully smeared; a quick fade joins them.
  float mixT = smoothstep(0.48, 0.52, t);
  vec4 c = vec4(0.0);
  if (mixT < 1.0) {
    // Left of the line repeats the column under it.
    vec3 line = clamp(t / 0.48, 0.0, 1.0) * span - LAG;
    vec3 x = clamp(max(vec3(uv.x), line), 0.0, 1.0);
    c += splitRead(x.r, x.g, x.b, uv.y, false) * (1.0 - mixT);
  }
  if (mixT > 0.0) {
    // Right of the line repeats the column under it.
    vec3 line = clamp((t - 0.52) / 0.48, 0.0, 1.0) * span - LAG;
    vec3 x = clamp(min(vec3(uv.x), line), 0.0, 1.0);
    c += splitRead(x.r, x.g, x.b, uv.y, true) * mixT;
  }
  return c;
}
`}e.s(["f",0,r])},76359,27202,e=>{e.i(90422);var t=e.i(28113),r=e.i(66601);let o={left:[-1,0],right:[1,0],up:[0,1],down:[0,-1]};class s extends t.f{name="swipe";frag=`
uniform vec2 move;
const float STRETCH = 0.6;
const float BLUR = 0.2;
const float TAPS = 16.0;

${r.j}
// The old and new content as one strip along the move.
vec4 strip(vec2 p) {
  return inRange(p) ? readFrom(p) : readTo(p + move);
}

vec4 transition(vec2 uv, float t) {
  // A container overflow must not show shifted content outside the element.
  if (!inRange(uv)) return vec4(0.0);
  // Peaks halfway, when the content moves fastest.
  float speed = sin(t * 3.141593);
  vec2 scale = 1.0 + abs(move) * speed * STRETCH;
  vec2 p = (uv - 0.5) / scale + 0.5 - move * t;
  float jitter = ign(gl_FragCoord.xy);
  vec4 c = vec4(0.0);
  for (float i = 0.0; i < TAPS; i += 1.0) {
    float k = (i + jitter) / TAPS - 0.5;
    c += strip(p + move * k * speed * BLUR);
  }
  return c / TAPS;
}
`;uniforms(){return{move:o[this.params.direction??"left"]}}}e.s(["f",0,s],76359);var a=t;let i={center:[0,0],left:[-1,0],right:[1,0],up:[0,1],down:[0,-1]},n={hex:`
const vec2 HEX = vec2(1.0, 1.7320508);
vec4 cellOf(vec2 g) {
  vec4 ids = floor(vec4(g, g - vec2(0.5, 1.0)) / HEX.xyxy) + 0.5;
  vec2 a = g - ids.xy * HEX;
  vec2 b = g - (ids.zw + 0.5) * HEX;
  vec2 local = dot(a, a) < dot(b, b) ? a : b;
  return vec4(local, g - local);
}
float cellDist(vec2 p) {
  p = abs(p);
  return max(dot(p, vec2(0.5, 0.8660254)), p.x);
}
`,square:`
vec4 cellOf(vec2 g) {
  vec2 center = floor(g) + 0.5;
  return vec4(g - center, center);
}
float cellDist(vec2 p) {
  p = abs(p);
  return max(p.x, p.y);
}
`},c=e=>`
uniform float count;
uniform float shadow;
// Zero spreads out in rings; otherwise the side the sweep moves toward.
uniform vec2 sweep;
const float SPREAD = 0.6;
// Shadow offset and blur at full lift, in tiles.
const vec2 SHADOW_OFFSET = vec2(0.05, -0.08);
const float SHADOW_BLUR = 0.12;
${n[e]}
vec4 transition(vec2 uv, float t) {
  // A container overflow must not show tiles outside the element.
  if (!inRange(uv)) return vec4(0.0);
  // Grid in tile units, centered on the element.
  float tilePx = max(resolution.x, resolution.y) / count;
  vec2 extent = resolution * 0.5 / tilePx;
  vec4 cell = cellOf((uv - 0.5) * resolution / tilePx);
  vec2 local = cell.xy;
  vec2 center = cell.zw;

  // Delay of this tile, in [0, 1]. The extent is half the grid size, in tiles.
  float d = sweep == vec2(0.0)
    ? length(center) / length(extent)
    : 0.5 + dot(center / (extent * 2.0), sweep);
  d = clamp(d, 0.0, 1.0);
  float scale = 1.0 - smoothstep(0.0, 1.0, clamp((t - d * SPREAD) / (1.0 - SPREAD), 0.0, 1.0));
  // Distance outside the shrunk tile, in pixels.
  float edge = (cellDist(local) - 0.5 * scale) * tilePx;
  float inside = 1.0 - smoothstep(0.0, 1.0, edge);
  vec4 to = readTo(uv);
  if (scale <= 0.0) return to;

  // The tile lifts as it shrinks, so its shadow moves away and softens.
  float lift = 1.0 - scale;
  float blur = SHADOW_BLUR * lift * tilePx + 1.0;
  float shadowEdge = (cellDist(local - SHADOW_OFFSET * lift) - 0.5 * scale) * tilePx;
  float shade = shadow * smoothstep(0.0, 0.2, lift) * (1.0 - smoothstep(-blur, blur, shadowEdge));
  to = vec4(to.rgb * (1.0 - shade), max(to.a, shade));
  if (inside <= 0.0) return to;

  vec4 from = readFrom((center + local / scale) * tilePx / resolution + 0.5);
  from *= inside;
  return from + to * (1.0 - from.a);
}
`,l={hex:c("hex"),square:c("square")};class u extends a.f{name="tile";get frag(){return l[this.params.shape??"hex"]}uniforms(){return{count:Math.max(1,Math.round(this.params.count??12)),shadow:Math.min(Math.max(this.params.shadow??.5,0),1),sweep:i[this.params.direction??"center"]}}}e.s(["f",0,u],27202)},99050,1656,e=>{e.i(90422);var t=e.i(28113);class r extends t.f{name="zoom";overflow=!0;frag=`
vec4 transition(vec2 uv, float t) {
  vec2 uv1 = (uv - 0.5) * (1.0 - t) + 0.5;
  vec2 uv2 = (uv - 0.5) / (t * 0.999 + 0.001) + 0.5;
  // Tile the new content only inside the element, so the overflow shows just the old one.
  vec4 to = inRange(uv) ? readTo(fract(uv2)) : vec4(0.0);
  return mix(readFrom(uv1), to, t);
}
`}e.s(["f",0,r],99050);var o=t,s=e.i(66601);class a extends o.f{name="zoom_blur";overflow=!0;frag=`
${s.F}
${s.j}
vec4 transition(vec2 uv, float t) {
  float jitter = ign(gl_FragCoord.xy);
  float blur = sin(t * 3.141593);
  vec2 offset = vec2(t * 2.0 - 1.0, 0.0) * 0.01 * blur;

  vec4 c1 = vec4(0.0);
  vec4 c2 = vec4(0.0);
  for (float n = 0.0; n < 16.0; n += 1.0) {
    float i = n + jitter;
    vec2 uvr = (uv - 0.5) * (1.0 - blur * i * 0.02) + offset * i + 0.5;
    vec2 uvg = (uv - 0.5) * (1.0 - blur * i * 0.04) + offset * i + 0.5;
    vec2 uvb = (uv - 0.5) * (1.0 - blur * i * 0.05) + offset * i + 0.5;
    c1 += splitRead(uvr, uvg, uvb, false);
    c2 += splitRead(uvr, uvg, uvb, true);
  }
  return mix(c1 / 16.0, c2 / 16.0, t);
}
`}e.s(["f",0,a],1656)}])})();