import{r,j as e}from"./app-Bp7T5165.js";import{P as p}from"./PageTitle-CaRe8jum.js";import{I as o}from"./InputLabel-B78aPJtD.js";import{T as t}from"./TextInput-D8ClwHvt.js";import{P as f}from"./PrimaryButton-D5n6oXaf.js";function v(){const[n,l]=r.useState({inquiryType:"",companyType:"",companyName:"",name:"",email:"",message:""}),[s,h]=r.useState({}),m=document.querySelector("meta[name='csrf-token']"),c=r.useRef(m.content),a=i=>{const{name:d,value:u}=i.target;l(x=>({...x,[d]:u}))};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"contact"}),e.jsxs("form",{action:"/contact/confirm",method:"POST",className:"space-y-6 p-6 max-w-3xl mx-auto",children:[e.jsx("input",{type:"hidden",name:"_token",value:c.current}),e.jsxs("div",{className:"grid grid-cols-1 gap-5",children:[e.jsxs("div",{className:"",children:[e.jsxs(o,{htmlFor:"inquiryType",className:"block mb-2 font-medium text-lg focus:outline-none",children:["お問い合わせ種類 ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"inquiryType",id:"inquiryType",value:n.inquiryType,onChange:a,className:"w-full border border-slate-200 p-2 rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-amber-500",required:!0,children:[e.jsx("option",{disabled:!0,value:"",children:"選択してください"}),e.jsx("option",{value:"見積もり",children:"見積もり"}),e.jsx("option",{value:"ご相談",children:"ご相談"}),e.jsx("option",{value:"チーム参画依頼",children:"チーム参画依頼"}),e.jsx("option",{value:"その他",children:"その他"})]}),s.inquiryType&&e.jsx("p",{className:"text-red-500 text-sm",children:s.inquiryType})]}),e.jsxs("div",{className:"",children:[e.jsxs(o,{htmlFor:"companyType",className:"block mb-2 font-medium text-lg focus:outline-none",children:["個人・法人 ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"companyType",id:"companyType",value:n.companyType,onChange:a,className:"w-full border border-slate-200 p-2 rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-amber-500",required:!0,children:[e.jsx("option",{disabled:!0,value:"",children:"選択してください"}),e.jsx("option",{value:"個人",children:"個人"}),e.jsx("option",{value:"法人",children:"法人"})]}),s.companyType&&e.jsx("p",{className:"text-red-500 text-sm",children:s.companyType})]}),e.jsxs("div",{className:"",children:[e.jsx(o,{htmlFor:"companyName",className:"block mb-2 font-medium text-lg focus:outline-none",children:"会社名"}),e.jsx(t,{type:"text",name:"companyName",id:"companyName",value:n.companyName,onChange:a,className:"w-full p-2 rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-amber-500"})]}),e.jsxs("div",{className:"",children:[e.jsxs(o,{htmlFor:"name",className:"block mb-2 font-medium text-lg",children:["お名前 ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx(t,{type:"text",name:"name",id:"name",value:n.name,onChange:a,required:!0,className:"w-full p-2 rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-amber-500"}),s.name&&e.jsx("p",{className:"text-red-500 text-sm",children:s.name})]}),e.jsx("div",{className:"",children:e.jsxs(o,{htmlFor:"email",className:"block mb-2 font-medium text-lg focus:outline-none",children:["メールアドレス ",e.jsx("span",{className:"text-red-500",children:"*"}),e.jsx(t,{type:"email",name:"email",id:"email",value:n.email,onChange:a,required:!0,className:"w-full border p-2 rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-amber-500"}),s.email&&e.jsx("p",{className:"text-red-500 text-sm",children:s.email})]})}),e.jsxs("div",{className:"",children:[e.jsxs(o,{htmlFor:"message",className:"block mb-2 font-medium text-lg focus:outline-none",children:["問い合わせ内容 ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("textarea",{name:"message",id:"message",rows:4,value:n.message,onChange:a,required:!0,className:"w-full border border-slate-200 p-2 rounded-md outline-none focus:outline-none focus:border-none focus:ring-2 focus:ring-amber-500"}),s.message&&e.jsx("p",{className:"text-red-500 text-sm",children:s.message})]}),e.jsx(f,{type:"submit",children:"go to confirm"})]})]})]})}export{v as C};