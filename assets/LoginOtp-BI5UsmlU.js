import{j as s}from"./index-qNP_1lJU.js";import{c as u}from"./useGetClassName-DiZQUOAO.js";import{u as g}from"./useGetClassName-CN2dLvpf.js";function O(d){const{kcContext:t,i18n:c,doUseDefaultCss:l,Template:m,classes:i}=d,{getClassName:e}=g({doUseDefaultCss:l,classes:i}),{otpLogin:n,url:p}=t,{msg:o,msgStr:j}=c;return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
                input[type="radio"]:checked~label.kcSelectOTPListClass{
                    border: 2px solid #39a5dc;
                }`}),s.jsx(m,Object.assign({},{kcContext:t,i18n:c,doUseDefaultCss:l,classes:i},{headerNode:o("doLogIn")},{children:s.jsxs("form",Object.assign({id:"kc-otp-login-form",className:e("kcFormClass"),action:p.loginAction,method:"post"},{children:[n.userOtpCredentials.length>1&&s.jsx("div",Object.assign({className:e("kcFormGroupClass")},{children:s.jsx("div",Object.assign({className:e("kcInputWrapperClass")},{children:n.userOtpCredentials.map((a,r)=>s.jsxs("div",{children:[s.jsx("input",{id:`kc-otp-credential-${r}`,name:"selectedCredentialId",type:"radio",value:a.id,style:{display:"none"}}),s.jsx("label",Object.assign({htmlFor:`kc-otp-credential-${r}`,className:e("kcSelectOTPListClass")},{children:s.jsxs("div",Object.assign({className:e("kcSelectOTPListItemClass")},{children:[s.jsx("span",{className:e("kcAuthenticatorOtpCircleClass")}),s.jsx("h2",Object.assign({className:e("kcSelectOTPItemHeadingClass")},{children:a.userLabel}))]}))}),a.id)]},a.id))}))})),s.jsxs("div",Object.assign({className:e("kcFormGroupClass")},{children:[s.jsx("div",Object.assign({className:e("kcLabelWrapperClass")},{children:s.jsx("label",Object.assign({htmlFor:"otp",className:e("kcLabelClass")},{children:o("loginOtpOneTime")}))})),s.jsx("div",Object.assign({className:e("kcInputWrapperClass")},{children:s.jsx("input",{id:"otp",name:"otp",autoComplete:"off",type:"text",className:e("kcInputClass"),autoFocus:!0})}))]})),s.jsxs("div",Object.assign({className:e("kcFormGroupClass")},{children:[s.jsx("div",Object.assign({id:"kc-form-options",className:e("kcFormOptionsClass")},{children:s.jsx("div",{className:e("kcFormOptionsWrapperClass")})})),s.jsx("div",Object.assign({id:"kc-form-buttons",className:e("kcFormButtonsClass")},{children:s.jsx("input",{className:u(e("kcButtonClass"),e("kcButtonPrimaryClass"),e("kcButtonBlockClass"),e("kcButtonLargeClass")),name:"login",id:"kc-login",type:"submit",value:j("doLogIn")})}))]}))]}))}))]})}export{O as default};
