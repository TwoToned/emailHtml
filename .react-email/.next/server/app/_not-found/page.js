(()=>{var e={};e.id=492,e.ids=[492],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},79428:e=>{"use strict";e.exports=require("buffer")},79646:e=>{"use strict";e.exports=require("child_process")},55511:e=>{"use strict";e.exports=require("crypto")},94735:e=>{"use strict";e.exports=require("events")},29021:e=>{"use strict";e.exports=require("fs")},81630:e=>{"use strict";e.exports=require("http")},55591:e=>{"use strict";e.exports=require("https")},91645:e=>{"use strict";e.exports=require("net")},21820:e=>{"use strict";e.exports=require("os")},33873:e=>{"use strict";e.exports=require("path")},27910:e=>{"use strict";e.exports=require("stream")},34631:e=>{"use strict";e.exports=require("tls")},83997:e=>{"use strict";e.exports=require("tty")},79551:e=>{"use strict";e.exports=require("url")},28354:e=>{"use strict";e.exports=require("util")},74075:e=>{"use strict";e.exports=require("zlib")},73024:e=>{"use strict";e.exports=require("node:fs")},76760:e=>{"use strict";e.exports=require("node:path")},39727:()=>{},47990:()=>{},75286:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var s=r(70260),i=r(28203),o=r(25155),n=r.n(o),a=r(67292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,71354)),"/Users/jayden/code/projects/twoToned/react-email-starter/.react-email/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,41485,23)),"next/dist/client/components/unauthorized-error"]}],c=[],u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},52447:(e,t,r)=>{"use strict";r.r(t),r.d(t,{"7ff8f2da48c3d75fdcc79e8d48c467191880ad2f9b":()=>m});var s=r(21590);r(70376);var i=r(73024),o=r.n(i),n=r(76760),a=r.n(n);let l=e=>{if(o().statSync(e).isDirectory())return!1;let{ext:t}=a().parse(e);if(![".js",".tsx",".jsx"].includes(t)||!o().existsSync(e))return!1;let r=o().readFileSync(e,"utf8");return/\bexport\s+default\b/gm.test(r)},d=e=>{let t=e;for(;0===t.emailFilenames.length&&1===t.subDirectories.length;){let e=t.subDirectories[0];t={...e,directoryName:a().join(t.directoryName,e.directoryName)}}return t},c=async(e,t=!1,r=!1,s=e)=>{if(!o().existsSync(e))return;let i=await o().promises.readdir(e,{withFileTypes:!0}),n=i.filter(t=>l(a().join(e,t.name))).map(e=>t?e.name:e.name.replace(a().extname(e.name),"")),u=await Promise.all(i.filter(e=>e.isDirectory()&&!e.name.startsWith("_")&&"static"!==e.name).map(r=>c(a().join(e,r.name),t,!0,s))),m={absolutePath:e,relativePath:a().relative(s,e),directoryName:e.split(a().sep).pop(),emailFilenames:n,subDirectories:u};return r?d(m):m};var u=r(99344);let m=async(e,t=!1,r=!1,s=e)=>c(e,t,r,s);(0,u.D)([m]),(0,s.A)(m,"7ff8f2da48c3d75fdcc79e8d48c467191880ad2f9b",null)},77294:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,13219,23)),Promise.resolve().then(r.t.bind(r,34863,23)),Promise.resolve().then(r.t.bind(r,25155,23)),Promise.resolve().then(r.t.bind(r,40802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,48530,23)),Promise.resolve().then(r.t.bind(r,88921,23))},40342:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,66959,23)),Promise.resolve().then(r.t.bind(r,33875,23)),Promise.resolve().then(r.t.bind(r,88903,23)),Promise.resolve().then(r.t.bind(r,57174,23)),Promise.resolve().then(r.t.bind(r,84178,23)),Promise.resolve().then(r.t.bind(r,87190,23)),Promise.resolve().then(r.t.bind(r,61365,23))},88533:(e,t,r)=>{Promise.resolve().then(r.bind(r,77658))},2101:(e,t,r)=>{Promise.resolve().then(r.bind(r,54214))},54214:(e,t,r)=>{"use strict";r.d(t,{EmailsProvider:()=>a,J:()=>n});var s=r(45512),i=r(58009);r(95652);let o=(0,i.createContext)(void 0),n=()=>{let e=(0,i.useContext)(o);if(void 0===e)throw Error("Cannot call `useEmail()` outside of an EmailsContext provider!");return e},a=e=>{let[t,r]=(0,i.useState)(e.initialEmailsDirectoryMetadata);return(0,s.jsx)(o.Provider,{value:{emailsDirectoryMetadata:t},children:e.children})}},95652:(e,t,r)=>{"use strict";r(58009),r(62226)},71354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,metadata:()=>d});var s=r(62740);r(61135);var i=r(43055),o=r(77658),n=r(28518),a=r(67870),l=r.n(a);let d={title:"React Email"},c=async({children:e})=>{let t=await (0,n.getEmailsDirectoryMetadata)(i.emailsDirectoryAbsolutePath);if(void 0===t)throw Error(`Could not find the emails directory specified under ${i.emailsDirectoryAbsolutePath}!`);return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:l().className,children:(0,s.jsx)(o.EmailsProvider,{initialEmailsDirectoryMetadata:t,children:e})})})}},77658:(e,t,r)=>{"use strict";r.d(t,{EmailsProvider:()=>i});var s=r(46760);(0,s.registerClientReference)(function(){throw Error("Attempted to call useEmails() from the server but useEmails is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jayden/code/projects/twoToned/react-email-starter/.react-email/src/contexts/emails.tsx","useEmails");let i=(0,s.registerClientReference)(function(){throw Error("Attempted to call EmailsProvider() from the server but EmailsProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jayden/code/projects/twoToned/react-email-starter/.react-email/src/contexts/emails.tsx","EmailsProvider")},43055:(e,t,r)=>{"use strict";r.r(t),r.d(t,{emailsDirRelativePath:()=>s,emailsDirectoryAbsolutePath:()=>o,userProjectLocation:()=>i});let s="emails",i="/Users/jayden/code/projects/twoToned/react-email-starter",o="/Users/jayden/code/projects/twoToned/react-email-starter/emails"},28518:(e,t,r)=>{"use strict";r.r(t),r.d(t,{getEmailsDirectoryMetadata:()=>d});var s=r(73024),i=r.n(s),o=r(76760),n=r.n(o);let a=e=>{if(i().statSync(e).isDirectory())return!1;let{ext:t}=n().parse(e);if(![".js",".tsx",".jsx"].includes(t)||!i().existsSync(e))return!1;let r=i().readFileSync(e,"utf8");return/\bexport\s+default\b/gm.test(r)},l=e=>{let t=e;for(;0===t.emailFilenames.length&&1===t.subDirectories.length;){let e=t.subDirectories[0];t={...e,directoryName:n().join(t.directoryName,e.directoryName)}}return t},d=async(e,t=!1,r=!1,s=e)=>{if(!i().existsSync(e))return;let o=await i().promises.readdir(e,{withFileTypes:!0}),c=o.filter(t=>a(n().join(e,t.name))).map(e=>t?e.name:e.name.replace(n().extname(e.name),"")),u=await Promise.all(o.filter(e=>e.isDirectory()&&!e.name.startsWith("_")&&"static"!==e.name).map(r=>d(n().join(e,r.name),t,!0,s))),m={absolutePath:e,relativePath:n().relative(s,e),directoryName:e.split(n().sep).pop(),emailFilenames:c,subDirectories:u};return r?l(m):m}},61135:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,522],()=>r(75286));module.exports=s})();