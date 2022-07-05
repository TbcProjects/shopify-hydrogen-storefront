import{r as o,j as e,a as t}from"./index.54ddac3f.js";import{Link as g}from"./031552d1.js";import"./92b9d14f.js";import"./1508c40e.js";import"./67a52884.js";import"./dbd559f6.js";import"./2a1e70c3.js";import"./02cc2cb3.js";import"./f2203e5d.js";import{u as y}from"./e060e02f.js";import{e as N,p as v}from"./7b865f28.js";import{callLoginApi as E}from"./7e8f9534.js";import"./acfde4a0.js";function D(){const l=y(),[n,i]=o.exports.useState(null),[s,a]=o.exports.useState(""),[c,x]=o.exports.useState(null),[m,w]=o.exports.useState(""),[d,h]=o.exports.useState(null);async function b(r){r.preventDefault(),x(null),h(null),i(null);const u=N(r.currentTarget.email);u&&x(u);const p=v(r.currentTarget.password);if(p&&h(p),u||p)return;const f=await A({email:s,password:m});if(f.error){i(f.error);return}await E({email:s,password:m}),l("/account")}return e("div",{className:"flex justify-center my-24 px-4",children:t("div",{className:"max-w-md w-full",children:[e("h1",{className:"text-4xl",children:"Create an Account."}),t("form",{noValidate:!0,className:"pt-6 pb-8 mt-4 mb-4",onSubmit:b,children:[n&&e("div",{className:"flex items-center justify-center mb-6 bg-zinc-500",children:e("p",{className:"m-4 text-s text-contrast",children:n})}),t("div",{className:"mb-3",children:[e("input",{className:`mb-1 appearance-none rounded border w-full py-2 px-3 text-primary/90 placeholder:text-primary/50 leading-tight focus:shadow-outline ${c?" border-red-500":"border-gray-900"}`,id:"email",name:"email",type:"email",autoComplete:"email",required:!0,placeholder:"Email address","aria-label":"Email address",autoFocus:!0,value:s,onChange:r=>{a(r.target.value)}}),c?t("p",{className:"text-red-500 text-xs",children:[c," \xA0"]}):""]}),t("div",{className:"mb-3",children:[e("input",{className:`mb-1 appearance-none rounded border w-full py-2 px-3 text-primary/90 placeholder:text-primary/50 leading-tight focus:shadow-outline ${d?" border-red-500":"border-gray-900"}`,id:"password",name:"password",type:"password",autoComplete:"current-password",placeholder:"Password","aria-label":"Password",value:m,minLength:8,required:!0,onChange:r=>{w(r.target.value)}}),d?t("p",{className:"text-red-500 text-xs",children:[d," \xA0"]}):""]}),e("div",{className:"flex items-center justify-between",children:e("button",{className:"bg-gray-900 text-contrast rounded py-2 px-4 focus:shadow-outline block w-full",type:"submit",children:"Create Account"})}),e("div",{className:"flex items-center mt-4",children:t("p",{className:"align-baseline text-sm",children:["Already have an account? \xA0",e(g,{className:"inline underline",to:"/account",children:"Sign in"})]})})]})]})})}async function A({email:l,password:n,firstName:i,lastName:s}){try{const a=await fetch("/account/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:l,password:n,firstName:i,lastName:s})});return a.status===200?{}:a.json()}catch(a){return{error:a.toString()}}}export{D as AccountCreateForm,A as callAccountCreateApi};
//# sourceMappingURL=a0be3020.js.map
