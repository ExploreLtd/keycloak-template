import{n as C,h as l,j as t,M as h}from"./index-qNP_1lJU.js";import{c as i}from"./useGetClassName-DiZQUOAO.js";import{h as p}from"./index-Dj7gVy4M.js";import{u as g}from"./useGetClassName-CN2dLvpf.js";function M(d){const{kcContext:e,i18n:a,doUseDefaultCss:n,Template:m,classes:o}=d,{getClassName:s}=g({doUseDefaultCss:n,classes:o}),{msg:u,msgStr:r}=a;C({kcContext:e,downloadTermMarkdown:async({currentLanguageTag:f})=>{const x=(()=>{switch(f){case"fr":return`${window.kcContext===void 0?"/":window.kcContext.url.resourcesPath+"/build/"}terms/fr.md`;default:return`${window.kcContext===void 0?"/":window.kcContext.url.resourcesPath+"/build/"}terms/en.md`}})();return await fetch(x).then(w=>w.text())}}),p.useRerenderOnStateChange(l);const{url:k}=e,c=l.state;return c===void 0?null:t.jsxs(m,{kcContext:e,i18n:a,doUseDefaultCss:n,classes:o,displayMessage:!1,headerNode:u("termsTitle"),children:[t.jsx("div",{id:"kc-terms-text",children:t.jsx(h,{children:c})}),t.jsxs("form",{className:"form-actions",action:k.loginAction,method:"POST",children:[t.jsx("input",{className:i(s("kcButtonClass"),s("kcButtonClass"),s("kcButtonClass"),s("kcButtonPrimaryClass"),s("kcButtonLargeClass")),name:"accept",id:"kc-accept",type:"submit",value:r("doAccept")}),t.jsx("input",{className:i(s("kcButtonClass"),s("kcButtonDefaultClass"),s("kcButtonLargeClass")),name:"cancel",id:"kc-decline",type:"submit",value:r("doDecline")})]}),t.jsx("div",{className:"clearfix"})]})}export{M as default};
