import{j as e,W as x,Y as j}from"./app-BlSuqh44.js";import{I as i}from"./InputError-Bi25YgqY.js";import{I as l}from"./InputLabel-BJKrliJz.js";import{P as h}from"./PrimaryButton-D0jPhLaL.js";import{T as n}from"./TextInput-DwrBe5qD.js";import{G as f}from"./GuestLayout-CLQaO3zl.js";import"./app-D5RdPmV-.js";import"./Header-D9h2xjfP.js";function g({className:a="",...t}){return e.jsx("input",{...t,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+a})}function F({status:a,canResetPassword:t}){const{data:r,setData:m,post:d,processing:c,errors:o,reset:p}=x({email:"",password:"",remember:!1}),u=s=>{s.preventDefault(),d(route("login"),{onFinish:()=>p("password")})};return e.jsxs(f,{children:[e.jsx(j,{title:"Log in"}),a&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:a}),e.jsxs("form",{onSubmit:u,className:"max-w-72 mx-auto font-en",children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"email",value:"Email"}),e.jsx(n,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>m("email",s.target.value)}),e.jsx(i,{message:o.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"password",value:"Password"}),e.jsx(n,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>m("password",s.target.value)}),e.jsx(i,{message:o.password,className:"mt-2"})]}),e.jsx("div",{className:"mt-4 block",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(g,{name:"remember",checked:r.remember,onChange:s=>m("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"Remember me"})]})}),e.jsx("div",{className:"mt-4 flex items-center justify-end gap-2",children:e.jsx(h,{disabled:c,children:"Log in"})})]})]})}export{F as default};