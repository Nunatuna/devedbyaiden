import{r as bn,f as vn,u as xn,a as An,j as Sn,B as wn,b as kn,R as g,g as Pn,L as En,c as On}from"./index-CybVNf71.js";import{u as Cn}from"./useRouteContext-B7tBmsyx.js";const In=["h1","h2","h3","h4","h5","h6"],Tn=["xs","sm","md","lg","xl"];function Nn(t,e){const n=e!==void 0?e:`h${t}`;return In.includes(n)?{fontSize:`var(--mantine-${n}-font-size)`,fontWeight:`var(--mantine-${n}-font-weight)`,lineHeight:`var(--mantine-${n}-line-height)`}:Tn.includes(n)?{fontSize:`var(--mantine-font-size-${n})`,fontWeight:`var(--mantine-h${t}-font-weight)`,lineHeight:`var(--mantine-h${t}-line-height)`}:{fontSize:bn(n),fontWeight:`var(--mantine-h${t}-font-weight)`,lineHeight:`var(--mantine-h${t}-line-height)`}}var Ie={root:"m_8a5d1357"};const _n={order:1},Fn=kn((t,{order:e,size:n,lineClamp:a,textWrap:r})=>{const i=Nn(e,n);return{root:{"--title-fw":i.fontWeight,"--title-lh":i.lineHeight,"--title-fz":i.fontSize,"--title-line-clamp":typeof a=="number"?a.toString():void 0,"--title-text-wrap":r}}}),it=vn((t,e)=>{const n=xn("Title",_n,t),{classNames:a,className:r,style:i,styles:o,unstyled:s,order:f,vars:c,size:m,variant:h,lineClamp:d,textWrap:v,mod:w,...P}=n,b=An({name:"Title",props:n,classes:Ie,className:r,style:i,classNames:a,styles:o,unstyled:s,vars:c,varsResolver:Fn});return[1,2,3,4,5,6].includes(f)?Sn.jsx(wn,{...b("root"),component:`h${f}`,variant:h,ref:e,mod:[{order:f,"data-line-clamp":typeof d=="number"},w],size:m,...P}):null});it.classes=Ie;it.displayName="@mantine/core/Title";const Mn={display:"flex",flexDirection:"column",justifyContent:"center"},Zt={fontSize:"2.5rem",fontWeight:"bold"},Ln=()=>g.createElement(g.Fragment,null,g.createElement("div",{style:Mn},g.createElement(it,{style:Zt},"Hi, I'm Aiden 👋"),g.createElement(it,{style:Zt},"I'm a Frontend Developer"))),jn="/devedbyaiden/assets/aiden-C8gEmPmu.jpg",Rn={display:"flex",flexDirection:"column",justifyContent:"center"},zn={width:"100%",borderRadius:"50%",maxWidth:"500px"},Dn=()=>g.createElement(g.Fragment,null,g.createElement("div",{style:Rn},g.createElement("img",{style:zn,src:jn,alt:"Picture of Aiden"})));/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Wn(t,e,n){return(e=Un(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Jt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Jt(Object(n),!0).forEach(function(a){Wn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Jt(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Yn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Un(t){var e=Yn(t,"string");return typeof e=="symbol"?e:e+""}const te=()=>{};let Wt={},Te={},Ne=null,_e={mark:te,measure:te};try{typeof window<"u"&&(Wt=window),typeof document<"u"&&(Te=document),typeof MutationObserver<"u"&&(Ne=MutationObserver),typeof performance<"u"&&(_e=performance)}catch{}const{userAgent:ee=""}=Wt.navigator||{},j=Wt,y=Te,ne=Ne,et=_e;j.document;const M=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Fe=~ee.indexOf("MSIE")||~ee.indexOf("Trident/");var Hn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,$n=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Me={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Gn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Le=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],S="classic",ct="duotone",Bn="sharp",Xn="sharp-duotone",je=[S,ct,Bn,Xn],Vn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Kn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},qn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Qn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Zn=["fak","fa-kit","fakd","fa-kit-duotone"],ae={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Jn=["kit"],ta={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},ea=["fak","fakd"],na={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},re={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},nt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},aa=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ra=["fak","fa-kit","fakd","fa-kit-duotone"],ia={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},oa={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},sa={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},At={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},la=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],St=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...aa,...la],ca=["solid","regular","light","thin","duotone","brands"],Re=[1,2,3,4,5,6,7,8,9,10],fa=Re.concat([11,12,13,14,15,16,17,18,19,20]),ua=[...Object.keys(sa),...ca,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",nt.GROUP,nt.SWAP_OPACITY,nt.PRIMARY,nt.SECONDARY].concat(Re.map(t=>"".concat(t,"x"))).concat(fa.map(t=>"w-".concat(t))),ma={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const _="___FONT_AWESOME___",wt=16,ze="fa",De="svg-inline--fa",W="data-fa-i2svg",kt="data-fa-pseudo-element",da="data-fa-pseudo-element-pending",Yt="data-prefix",Ut="data-icon",ie="fontawesome-i2svg",pa="async",ga=["HTML","HEAD","STYLE","SCRIPT"],We=(()=>{try{return!0}catch{return!1}})();function J(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[S]}})}const Ye=l({},Me);Ye[S]=l(l(l(l({},{"fa-duotone":"duotone"}),Me[S]),ae.kit),ae["kit-duotone"]);const ha=J(Ye),Pt=l({},Qn);Pt[S]=l(l(l(l({},{duotone:"fad"}),Pt[S]),re.kit),re["kit-duotone"]);const oe=J(Pt),Et=l({},At);Et[S]=l(l({},Et[S]),na.kit);const Ht=J(Et),Ot=l({},oa);Ot[S]=l(l({},Ot[S]),ta.kit);J(Ot);const ya=Hn,Ue="fa-layers-text",ba=$n,va=l({},Vn);J(va);const xa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gt=Gn,Aa=[...Jn,...ua],K=j.FontAwesomeConfig||{};function Sa(t){var e=y.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function wa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}y&&typeof y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=wa(Sa(n));r!=null&&(K[a]=r)});const He={styleDefault:"solid",familyDefault:S,cssPrefix:ze,replacementClass:De,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};K.familyPrefix&&(K.cssPrefix=K.familyPrefix);const B=l(l({},He),K);B.autoReplaceSvg||(B.observeMutations=!1);const u={};Object.keys(He).forEach(t=>{Object.defineProperty(u,t,{enumerable:!0,set:function(e){B[t]=e,q.forEach(n=>n(u))},get:function(){return B[t]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(t){B.cssPrefix=t,q.forEach(e=>e(u))},get:function(){return B.cssPrefix}});j.FontAwesomeConfig=u;const q=[];function ka(t){return q.push(t),()=>{q.splice(q.indexOf(t),1)}}const L=wt,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Pa(t){if(!t||!M)return;const e=y.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=y.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return y.head.insertBefore(e,a),t}const Ea="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Q(){let t=12,e="";for(;t-- >0;)e+=Ea[Math.random()*62|0];return e}function X(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function $t(t){return t.classList?X(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function $e(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Oa(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat($e(t[n]),'" '),"").trim()}function ft(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Gt(t){return t.size!==I.size||t.x!==I.x||t.y!==I.y||t.rotate!==I.rotate||t.flipX||t.flipY}function Ca(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function Ia(t){let{transform:e,width:n=wt,height:a=wt,startCentered:r=!1}=t,i="";return r&&Fe?i+="translate(".concat(e.x/L-n/2,"em, ").concat(e.y/L-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/L,"em), calc(-50% + ").concat(e.y/L,"em)) "):i+="translate(".concat(e.x/L,"em, ").concat(e.y/L,"em) "),i+="scale(".concat(e.size/L*(e.flipX?-1:1),", ").concat(e.size/L*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var Ta=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Ge(){const t=ze,e=De,n=u.cssPrefix,a=u.replacementClass;let r=Ta;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let se=!1;function ht(){u.autoAddCss&&!se&&(Pa(Ge()),se=!0)}var Na={mixout(){return{dom:{css:Ge,insertCss:ht}}},hooks(){return{beforeDOMElementCreation(){ht()},beforeI2svg(){ht()}}}};const F=j||{};F[_]||(F[_]={});F[_].styles||(F[_].styles={});F[_].hooks||(F[_].hooks={});F[_].shims||(F[_].shims=[]);var T=F[_];const Be=[],Xe=function(){y.removeEventListener("DOMContentLoaded",Xe),ot=1,Be.map(t=>t())};let ot=!1;M&&(ot=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),ot||y.addEventListener("DOMContentLoaded",Xe));function _a(t){M&&(ot?setTimeout(t,0):Be.push(t))}function tt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?$e(t):"<".concat(e," ").concat(Oa(n),">").concat(a.map(tt).join(""),"</").concat(e,">")}function le(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var yt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=n,f,c,m;for(a===void 0?(f=1,m=e[i[0]]):(f=0,m=a);f<o;f++)c=i[f],m=s(m,e[c],c,e);return m};function Fa(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Ct(t){const e=Fa(t);return e.length===1?e[0].toString(16):null}function Ma(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function ce(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function It(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=ce(e);typeof T.hooks.addPack=="function"&&!a?T.hooks.addPack(t,ce(e)):T.styles[t]=l(l({},T.styles[t]||{}),r),t==="fas"&&It("fa",e)}const{styles:Z,shims:La}=T,Ve=Object.keys(Ht),ja=Ve.reduce((t,e)=>(t[e]=Object.keys(Ht[e]),t),{});let Bt=null,Ke={},qe={},Qe={},Ze={},Je={};function Ra(t){return~Aa.indexOf(t)}function za(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Ra(r)?r:null}const tn=()=>{const t=a=>yt(Z,(r,i,o)=>(r[o]=yt(i,a,{}),r),{});Ke=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=i}),a)),qe=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=i}),a)),Je=t((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(s=>{a[s]=i}),a});const e="far"in Z||u.autoFetchSvg,n=yt(La,(a,r)=>{const i=r[0];let o=r[1];const s=r[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:s}),a},{names:{},unicodes:{}});Qe=n.names,Ze=n.unicodes,Bt=ut(u.styleDefault,{family:u.familyDefault})};ka(t=>{Bt=ut(t.styleDefault,{family:u.familyDefault})});tn();function Xt(t,e){return(Ke[t]||{})[e]}function Da(t,e){return(qe[t]||{})[e]}function D(t,e){return(Je[t]||{})[e]}function en(t){return Qe[t]||{prefix:null,iconName:null}}function Wa(t){const e=Ze[t],n=Xt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function R(){return Bt}const nn=()=>({prefix:null,iconName:null,rest:[]});function Ya(t){let e=S;const n=Ve.reduce((a,r)=>(a[r]="".concat(u.cssPrefix,"-").concat(r),a),{});return je.forEach(a=>{(t.includes(n[a])||t.some(r=>ja[a].includes(r)))&&(e=a)}),e}function ut(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=S}=e,a=ha[n][t];if(n===ct&&!t)return"fad";const r=oe[n][t]||oe[n][a],i=t in T.styles?t:null;return r||i||null}function Ua(t){let e=[],n=null;return t.forEach(a=>{const r=za(u.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function fe(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function mt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=St.concat(ra),i=fe(t.filter(h=>r.includes(h))),o=fe(t.filter(h=>!St.includes(h))),s=i.filter(h=>(a=h,!Le.includes(h))),[f=null]=s,c=Ya(i),m=l(l({},Ua(o)),{},{prefix:ut(f,{family:c})});return l(l(l({},m),Ba({values:t,family:c,styles:Z,config:u,canonical:m,givenPrefix:a})),Ha(n,a,m))}function Ha(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?en(r):{},o=D(a,r);return r=i.iconName||o||r,a=i.prefix||a,a==="far"&&!Z.far&&Z.fas&&!u.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const $a=je.filter(t=>t!==S||t!==ct),Ga=Object.keys(At).filter(t=>t!==S).map(t=>Object.keys(At[t])).flat();function Ba(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:o={}}=t,s=n===ct,f=e.includes("fa-duotone")||e.includes("fad"),c=o.familyDefault==="duotone",m=a.prefix==="fad"||a.prefix==="fa-duotone";if(!s&&(f||c||m)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&$a.includes(n)&&(Object.keys(i).find(d=>Ga.includes(d))||o.autoFetchSvg)){const d=qn.get(n).defaultShortPrefixId;a.prefix=d,a.iconName=D(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=R()||"fas"),a}class Xa{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=l(l({},this.definitions[i]||{}),r[i]),It(i,r[i]);const o=Ht[S][i];o&&It(o,r[i]),tn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:o,icon:s}=a[r],f=s[2];e[i]||(e[i]={}),f.length>0&&f.forEach(c=>{typeof c=="string"&&(e[i][c]=s)}),e[i][o]=s}),e}}let ue=[],H={};const G={},Va=Object.keys(G);function Ka(t,e){let{mixoutsTo:n}=e;return ue=t,H={},Object.keys(G).forEach(a=>{Va.indexOf(a)===-1&&delete G[a]}),ue.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{H[o]||(H[o]=[]),H[o].push(i[o])})}a.provides&&a.provides(G)}),n}function Tt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(H[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function Y(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(H[t]||[]).forEach(i=>{i.apply(null,n)})}function z(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return G[t]?G[t].apply(null,e):void 0}function Nt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||R();if(e)return e=D(n,e)||e,le(an.definitions,n,e)||le(T.styles,n,e)}const an=new Xa,qa=()=>{u.autoReplaceSvg=!1,u.observeMutations=!1,Y("noAuto")},Qa={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?(Y("beforeI2svg",t),z("pseudoElements2svg",t),z("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,_a(()=>{Ja({autoReplaceSvgRoot:e}),Y("watch",t)})}},Za={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:D(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ut(t[0]);return{prefix:n,iconName:D(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(u.cssPrefix,"-"))>-1||t.match(ya))){const e=mt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||R(),iconName:D(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=R();return{prefix:e,iconName:D(e,t)||t}}}},E={noAuto:qa,config:u,dom:Qa,parse:Za,library:an,findIconDefinition:Nt,toHtml:tt},Ja=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=y}=t;(Object.keys(T.styles).length>0||u.autoFetchSvg)&&M&&u.autoReplaceSvg&&E.dom.i2svg({node:e})};function dt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>tt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!M)return;const n=y.createElement("div");return n.innerHTML=t.html,n.children}}),t}function tr(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:o}=t;if(Gt(o)&&n.found&&!a.found){const{width:s,height:f}=n,c={x:s/f/2,y:.5};r.style=ft(l(l({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function er(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(u.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:o}),children:a}]}]}function Vt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:s,maskId:f,titleId:c,extra:m,watchable:h=!1}=t,{width:d,height:v}=n.found?n:e,w=ea.includes(a),P=[u.replacementClass,r?"".concat(u.cssPrefix,"-").concat(r):""].filter(O=>m.classes.indexOf(O)===-1).filter(O=>O!==""||!!O).concat(m.classes).join(" ");let b={children:[],attributes:l(l({},m.attributes),{},{"data-prefix":a,"data-icon":r,class:P,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(v)})};const A=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(d/v*16*.0625,"em")}:{};h&&(b.attributes[W]=""),s&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(c||Q())},children:[s]}),delete b.attributes.title);const x=l(l({},b),{},{prefix:a,iconName:r,main:e,mask:n,maskId:f,transform:i,symbol:o,styles:l(l({},A),m.styles)}),{children:k,attributes:N}=n.found&&e.found?z("generateAbstractMask",x)||{children:[],attributes:{}}:z("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=k,x.attributes=N,o?er(x):tr(x)}function me(t){const{content:e,width:n,height:a,transform:r,title:i,extra:o,watchable:s=!1}=t,f=l(l(l({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(f[W]="");const c=l({},o.styles);Gt(r)&&(c.transform=Ia({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);const m=ft(c);m.length>0&&(f.style=m);const h=[];return h.push({tag:"span",attributes:f,children:[e]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function nr(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ft(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:bt}=T;function _t(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(gt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(gt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(gt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const ar={found:!1,width:512,height:512};function rr(t,e){!We&&!u.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ft(t,e){let n=e;return e==="fa"&&u.styleDefault!==null&&(e=R()),new Promise((a,r)=>{if(n==="fa"){const i=en(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&bt[e]&&bt[e][t]){const i=bt[e][t];return a(_t(i))}rr(t,e),a(l(l({},ar),{},{icon:u.showMissingIcons&&t?z("missingIconAbstract")||{}:{}}))})}const de=()=>{},Mt=u.measurePerformance&&et&&et.mark&&et.measure?et:{mark:de,measure:de},V='FA "6.7.1"',ir=t=>(Mt.mark("".concat(V," ").concat(t," begins")),()=>rn(t)),rn=t=>{Mt.mark("".concat(V," ").concat(t," ends")),Mt.measure("".concat(V," ").concat(t),"".concat(V," ").concat(t," begins"),"".concat(V," ").concat(t," ends"))};var Kt={begin:ir,end:rn};const at=()=>{};function pe(t){return typeof(t.getAttribute?t.getAttribute(W):null)=="string"}function or(t){const e=t.getAttribute?t.getAttribute(Yt):null,n=t.getAttribute?t.getAttribute(Ut):null;return e&&n}function sr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(u.replacementClass)}function lr(){return u.autoReplaceSvg===!0?rt.replace:rt[u.autoReplaceSvg]||rt.replace}function cr(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function fr(t){return y.createElement(t)}function on(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?cr:fr}=e;if(typeof t=="string")return y.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(on(i,{ceFn:n}))}),a}function ur(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const rt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(on(n),e)}),e.getAttribute(W)===null&&u.keepOriginalSource){let n=y.createComment(ur(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~$t(e).indexOf(u.replacementClass))return rt.replace(t);const a=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===u.replacementClass||s.match(a)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>tt(i)).join(`
`);e.setAttribute(W,""),e.innerHTML=r}};function ge(t){t()}function sn(t,e){const n=typeof e=="function"?e:at;if(t.length===0)n();else{let a=ge;u.mutateApproach===pa&&(a=j.requestAnimationFrame||ge),a(()=>{const r=lr(),i=Kt.begin("mutate");t.map(r),i(),n()})}}let qt=!1;function ln(){qt=!0}function Lt(){qt=!1}let st=null;function he(t){if(!ne||!u.observeMutations)return;const{treeCallback:e=at,nodeCallback:n=at,pseudoElementsCallback:a=at,observeMutationsRoot:r=y}=t;st=new ne(i=>{if(qt)return;const o=R();X(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!pe(s.addedNodes[0])&&(u.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&u.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&pe(s.target)&&~xa.indexOf(s.attributeName))if(s.attributeName==="class"&&or(s.target)){const{prefix:f,iconName:c}=mt($t(s.target));s.target.setAttribute(Yt,f||o),c&&s.target.setAttribute(Ut,c)}else sr(s.target)&&n(s.target)})}),M&&st.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function mr(){st&&st.disconnect()}function dr(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function pr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=mt($t(t));return r.prefix||(r.prefix=R()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Da(r.prefix,t.innerText)||Xt(r.prefix,Ct(t.innerText))),!r.iconName&&u.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function gr(t){const e=X(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return u.autoA11y&&(n?e["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(a||Q()):(e["aria-hidden"]="true",e.focusable="false")),e}function hr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ye(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=pr(t),i=gr(t),o=Tt("parseNodeAttributes",{},t);let s=e.styleParser?dr(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:i}},o)}const{styles:yr}=T;function cn(t){const e=u.autoReplaceSvg==="nest"?ye(t,{styleParser:!1}):ye(t);return~e.extra.classes.indexOf(Ue)?z("generateLayersText",t,e):z("generateSvgReplacementMutation",t,e)}function br(){return[...Zn,...St]}function be(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();const n=y.documentElement.classList,a=m=>n.add("".concat(ie,"-").concat(m)),r=m=>n.remove("".concat(ie,"-").concat(m)),i=u.autoFetchSvg?br():Le.concat(Object.keys(yr));i.includes("fa")||i.push("fa");const o=[".".concat(Ue,":not([").concat(W,"])")].concat(i.map(m=>".".concat(m,":not([").concat(W,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=X(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const f=Kt.begin("onTree"),c=s.reduce((m,h)=>{try{const d=cn(h);d&&m.push(d)}catch(d){We||d.name==="MissingIcon"&&console.error(d)}return m},[]);return new Promise((m,h)=>{Promise.all(c).then(d=>{sn(d,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),m()})}).catch(d=>{f(),h(d)})})}function vr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cn(t).then(n=>{n&&sn([n],e)})}function xr(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Nt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Nt(r||{})),t(a,l(l({},n),{},{mask:r}))}}const Ar=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:s=null,classes:f=[],attributes:c={},styles:m={}}=e;if(!t)return;const{prefix:h,iconName:d,icon:v}=t;return dt(l({type:"icon"},t),()=>(Y("beforeDOMElementCreation",{iconDefinition:t,params:e}),u.autoA11y&&(o?c["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(s||Q()):(c["aria-hidden"]="true",c.focusable="false")),Vt({icons:{main:_t(v),mask:r?_t(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:d,transform:l(l({},I),n),symbol:a,title:o,maskId:i,titleId:s,extra:{attributes:c,styles:m,classes:f}})))};var Sr={mixout(){return{icon:xr(Ar)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=be,t.nodeCallback=vr,t}}},provides(t){t.i2svg=function(e){const{node:n=y,callback:a=()=>{}}=e;return be(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:o,transform:s,symbol:f,mask:c,maskId:m,extra:h}=n;return new Promise((d,v)=>{Promise.all([Ft(a,o),c.iconName?Ft(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(w=>{let[P,b]=w;d([e,Vt({icons:{main:P,mask:b},prefix:o,iconName:a,transform:s,symbol:f,maskId:m,title:r,titleId:i,extra:h,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:o}=e;const s=ft(o);s.length>0&&(a.style=s);let f;return Gt(i)&&(f=z("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(f||r.icon),{children:n,attributes:a}}}},wr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return dt({type:"layer"},()=>{Y("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},kr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return dt({type:"counter",content:t},()=>(Y("beforeDOMElementCreation",{content:t,params:e}),nr({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(u.cssPrefix,"-layers-counter"),...a]}})))}}}},Pr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,title:a=null,classes:r=[],attributes:i={},styles:o={}}=e;return dt({type:"text",content:t},()=>(Y("beforeDOMElementCreation",{content:t,params:e}),me({content:t,transform:l(l({},I),n),title:a,extra:{attributes:i,styles:o,classes:["".concat(u.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let o=null,s=null;if(Fe){const f=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/f,s=c.height/f}return u.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,me({content:e.innerHTML,width:o,height:s,transform:r,title:a,extra:i,watchable:!0})])}}};const Er=new RegExp('"',"ug"),ve=[1105920,1112319],xe=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),Kn),ma),ia),jt=Object.keys(xe).reduce((t,e)=>(t[e.toLowerCase()]=xe[e],t),{}),Or=Object.keys(jt).reduce((t,e)=>{const n=jt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Cr(t){const e=t.replace(Er,""),n=Ma(e,0),a=n>=ve[0]&&n<=ve[1],r=e.length===2?e[0]===e[1]:!1;return{value:Ct(r?e[0]:e),isSecondary:a||r}}function Ir(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(jt[n]||{})[r]||Or[n]}function Ae(t,e){const n="".concat(da).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const o=X(t.children).filter(d=>d.getAttribute(kt)===e)[0],s=j.getComputedStyle(t,e),f=s.getPropertyValue("font-family"),c=f.match(ba),m=s.getPropertyValue("font-weight"),h=s.getPropertyValue("content");if(o&&!c)return t.removeChild(o),a();if(c&&h!=="none"&&h!==""){const d=s.getPropertyValue("content");let v=Ir(f,m);const{value:w,isSecondary:P}=Cr(d),b=c[0].startsWith("FontAwesome");let A=Xt(v,w),x=A;if(b){const k=Wa(w);k.iconName&&k.prefix&&(A=k.iconName,v=k.prefix)}if(A&&!P&&(!o||o.getAttribute(Yt)!==v||o.getAttribute(Ut)!==x)){t.setAttribute(n,x),o&&t.removeChild(o);const k=hr(),{extra:N}=k;N.attributes[kt]=e,Ft(A,v).then(O=>{const hn=Vt(l(l({},k),{},{icons:{main:O,mask:nn()},prefix:v,iconName:x,extra:N,watchable:!0})),pt=y.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(pt,t.firstChild):t.appendChild(pt),pt.outerHTML=hn.map(yn=>tt(yn)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Tr(t){return Promise.all([Ae(t,"::before"),Ae(t,"::after")])}function Nr(t){return t.parentNode!==document.head&&!~ga.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(kt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Se(t){if(M)return new Promise((e,n)=>{const a=X(t.querySelectorAll("*")).filter(Nr).map(Tr),r=Kt.begin("searchPseudoElements");ln(),Promise.all(a).then(()=>{r(),Lt(),e()}).catch(()=>{r(),Lt(),n()})})}var _r={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Se,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=y}=e;u.searchPseudoElements&&Se(n)}}};let we=!1;var Fr={mixout(){return{dom:{unwatch(){ln(),we=!0}}}},hooks(){return{bootstrap(){he(Tt("mutationObserverCallbacks",{}))},noAuto(){mr()},watch(t){const{observeMutationsRoot:e}=t;we?Lt():he(Tt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const ke=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var Mr={mixout(){return{parse:{transform:t=>ke(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=ke(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(s," ").concat(f," ").concat(c)},h={transform:"translate(".concat(i/2*-1," -256)")},d={outer:o,inner:m,path:h};return{tag:"g",attributes:l({},d.outer),children:[{tag:"g",attributes:l({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),d.path)}]}]}}}};const vt={x:0,y:0,width:"100%",height:"100%"};function Pe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Lr(t){return t.tag==="g"?t.children:[t]}var jr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?mt(n.split(" ").map(r=>r.trim())):nn();return a.prefix||(a.prefix=R()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:o,transform:s}=e;const{width:f,icon:c}=r,{width:m,icon:h}=i,d=Ca({transform:s,containerWidth:m,iconWidth:f}),v={tag:"rect",attributes:l(l({},vt),{},{fill:"white"})},w=c.children?{children:c.children.map(Pe)}:{},P={tag:"g",attributes:l({},d.inner),children:[Pe(l({tag:c.tag,attributes:l(l({},c.attributes),d.path)},w))]},b={tag:"g",attributes:l({},d.outer),children:[P]},A="mask-".concat(o||Q()),x="clip-".concat(o||Q()),k={tag:"mask",attributes:l(l({},vt),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,b]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:Lr(h)},k]};return n.push(N,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(A,")")},vt)}),{children:n,attributes:a}}}},Rr={provides(t){let e=!1;j.matchMedia&&(e=j.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=l(l({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},zr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Dr=[Na,Sr,wr,kr,Pr,_r,Fr,Mr,jr,Rr,zr];Ka(Dr,{mixoutsTo:E});E.noAuto;E.config;E.library;E.dom;const Rt=E.parse;E.findIconDefinition;E.toHtml;const Wr=E.icon;E.layer;E.text;E.counter;var fn={exports:{}},Yr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ur=Yr,Hr=Ur;function un(){}function mn(){}mn.resetWarningCache=un;var $r=function(){function t(a,r,i,o,s,f){if(f!==Hr){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:mn,resetWarningCache:un};return n.PropTypes=n,n};fn.exports=$r();var Gr=fn.exports;const p=Pn(Gr);function Ee(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ee(Object(n),!0).forEach(function(a){$(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function lt(t){"@babel/helpers - typeof";return lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lt(t)}function $(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Br(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Xr(t,e){if(t==null)return{};var n=Br(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function zt(t){return Vr(t)||Kr(t)||qr(t)||Qr()}function Vr(t){if(Array.isArray(t))return Dt(t)}function Kr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function qr(t,e){if(t){if(typeof t=="string")return Dt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dt(t,e)}}function Dt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Qr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,c=t.spinPulse,m=t.spinReverse,h=t.pulse,d=t.fixedWidth,v=t.inverse,w=t.border,P=t.listItem,b=t.flip,A=t.size,x=t.rotation,k=t.pull,N=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":m,"fa-spin-pulse":c,"fa-pulse":h,"fa-fw":d,"fa-inverse":v,"fa-border":w,"fa-li":P,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},$(e,"fa-".concat(A),typeof A<"u"&&A!==null),$(e,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),$(e,"fa-pull-".concat(k),typeof k<"u"&&k!==null),$(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(N).map(function(O){return N[O]?O:null}).filter(function(O){return O})}function Jr(t){return t=t-0,t===t}function dn(t){return Jr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var ti=["style"];function ei(t){return t.charAt(0).toUpperCase()+t.slice(1)}function ni(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=dn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[ei(r)]=i:e[r]=i,e},{})}function pn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(f){return pn(t,f)}),r=Object.keys(e.attributes||{}).reduce(function(f,c){var m=e.attributes[c];switch(c){case"class":f.attrs.className=m,delete e.attributes.class;break;case"style":f.attrs.style=ni(m);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=m:f.attrs[dn(c)]=m}return f},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Xr(n,ti);return r.attrs.style=C(C({},r.attrs.style),o),t.apply(void 0,[e.tag,C(C({},r.attrs),s)].concat(zt(a)))}var gn=!1;try{gn=!0}catch{}function ai(){if(!gn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Oe(t){if(t&&lt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Rt.icon)return Rt.icon(t);if(t===null)return null;if(t&&lt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function xt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?$({},t,e):{}}var Ce={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Qt=g.forwardRef(function(t,e){var n=C(C({},Ce),t),a=n.icon,r=n.mask,i=n.symbol,o=n.className,s=n.title,f=n.titleId,c=n.maskId,m=Oe(a),h=xt("classes",[].concat(zt(Zr(n)),zt((o||"").split(" ")))),d=xt("transform",typeof n.transform=="string"?Rt.transform(n.transform):n.transform),v=xt("mask",Oe(r)),w=Wr(m,C(C(C(C({},h),d),v),{},{symbol:i,title:s,titleId:f,maskId:c}));if(!w)return ai("Could not find icon",m),null;var P=w.abstract,b={ref:e};return Object.keys(n).forEach(function(A){Ce.hasOwnProperty(A)||(b[A]=n[A])}),ri(P[0],b)});Qt.displayName="FontAwesomeIcon";Qt.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool};var ri=pn.bind(null,g.createElement);/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ii={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},U=({title:t,description:e,imageSrc:n,projectLink:a})=>g.createElement("div",{style:oi},g.createElement("div",null,g.createElement("img",{src:n,alt:t,style:si}),g.createElement("div",null,g.createElement("h3",{style:li},t),g.createElement("p",{style:ci},e))),g.createElement(En,{to:a,className:"project-card-link-hover"},"View Project ",g.createElement(Qt,{style:{marginLeft:"0.2rem"},icon:ii}))),oi={display:"flex",flexDirection:"column",justifyContent:"space-between",backgroundColor:"var(--heading)",borderRadius:"0.5rem",overflow:"hidden",color:"var(--bg)",boxShadow:"var(--shadow)",border:"2px solid var(--hover)",padding:"1rem"},si={width:"100%"},li={fontSize:"1.5rem",marginBottom:"0"},ci={fontWeight:"400"},fi="/devedbyaiden/assets/bottles-thumbnail-DhQKxxLH.png",ui="/devedbyaiden/assets/lp-thumbnail-D-mSAnrb.png",mi="/devedbyaiden/assets/breifcase-thumbnail-DQYpvq7q.png",di="/devedbyaiden/assets/clapper-thumbnail-Cd6hVU9x.png",pi="/devedbyaiden/assets/smartphone-thumbnail-SkRzPP8I.png",gi="/devedbyaiden/assets/tshirt-thumbnail-CtiZEOpd.png",hi=({children:t})=>g.createElement("div",{style:yi},t),yi={display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"2rem"},bi=()=>g.createElement("footer",{style:vi},g.createElement("p",null,"© 2024 - Deved By Aiden")),vi={padding:"2rem",marginTop:"2rem",textAlign:"center"},xi={display:"flex",justifyContent:"space-between",height:"80vh"},ki=On("/")({component:Ai});function Ai(){const t=Cn({from:"/"});return console.log(t),g.createElement(g.Fragment,null,g.createElement("div",{style:xi},g.createElement(Ln,null),g.createElement(Dn,null)),g.createElement(hi,null,g.createElement(U,{title:"Arctic Monkeys",description:"Arctic Monkeys are releasing a new song. They'll need an album cover.",imageSrc:ui,projectLink:"/contact"}),g.createElement(U,{title:"CPHBusiness",description:"This school needs a way to oranize their meeting room bookings.",imageSrc:mi,projectLink:"/contact"}),g.createElement(U,{title:"DREG",description:"Can you print criminals on shirts and sell them? Sure you can!",imageSrc:gi,projectLink:"/contact"}),g.createElement(U,{title:"Patagonia",description:"Patagonia got a great story to tell. Let's tell it on all the SoMe platforms.",imageSrc:di,projectLink:"/contact"}),g.createElement(U,{title:"Hilfe",description:"Let's assist the party people, getting home safe.",imageSrc:pi,projectLink:"/contact"}),g.createElement(U,{title:"To Kølige",description:"Two local rappers need a music video? Sure thing!",imageSrc:fi,projectLink:"/contact"})),g.createElement(bi,null))}export{ki as Route};
