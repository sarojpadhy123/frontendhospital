import{r as o,b as i,j as t,a as r,f as m}from"./index.d87dee6f.js";import{R}from"./ReceptionistSidebar.adc350cd.js";import{R as j}from"./index.esm.bd88e434.js";import{j as C}from"./react-confirm-alert.30c1f10e.js";import{D}from"./DeleteButton.055862da.js";import{E}from"./EditButton.a6d27025.js";import{B as y}from"./Button.3275d51a.js";import{S as L}from"./SearchInput.d51e8da3.js";import{S as I}from"./Select.a91200f8.js";import{O as _,a as w}from"./OptionsTh.e3256f46.js";import{T as A,a as M,b as $,c as k,d as g}from"./Thead.63124400.js";import{F as z}from"./FormLayout.630feb8e.js";import{T as G}from"./Tabs.f2b07210.js";import{I as H}from"./IndexNo.141a2ac1.js";import{T as J}from"./TotalNo.2b8dc21c.js";import{R as K}from"./ReactPagination.781004e5.js";import{B as U}from"./ButtonPreloader.e6928a61.js";import"./index.esm.e91ca65e.js";import"./index.esm.9f9cf711.js";import"./Forbidden.02296651.js";function fe(){const[x,P]=o.exports.useState([]),[n,h]=o.exports.useState([]),[p,f]=o.exports.useState(1),[S,c]=o.exports.useState(!1),[d,b]=o.exports.useState({name:""});function T(e){b(a=>({...a,[e.target.name]:e.target.value}))}function l(){i.get("/queue").then(e=>{h(e.data)}).catch(e=>{m.error(e.data)})}const v=e=>{e.preventDefault(),c(!0),i.post("/queue",{name:d==null?void 0:d.name}).then(a=>{c(!1),l(),m.success(a.data)}).catch(a=>{c(!1),m.error(a.response.data)})};o.exports.useEffect(()=>{i.get("/patient").then(e=>{P(e.data)}),l()},[]);const Q=e=>{i.get(`/queue?q=${e}`).then(a=>{h(a.data),f(1)})},s=10,u=p*s,B=u-s,F=n.slice(B,u),N=Math.ceil(n.length/s),O=e=>{f(e.selected+1)};return t(R,{children:t(G,{label1:"Queue",content1:r("div",{children:[r("div",{className:"flex justify-between items-center",children:[t(L,{onSearch:Q}),r("div",{className:"items-center flex flex-col lg:flex-row",children:[t(J,{totalnumber:n==null?void 0:n.length}),t(K,{pageCount:N,handlePageClick:O})]})]}),r(A,{children:[r(M,{children:[t(H,{children:"#"}),t($,{children:"Patient Name"}),t(_,{children:"Options"})]}),F.map((e,a)=>r(k,{children:[t(g,{children:a+1*(p*s-9)}),t(g,{children:e==null?void 0:e.name}),r(w,{children:[r(E,{editFunction:`/receptionist/edit_queue?edit=${e==null?void 0:e._id}`,children:["Edit",t(j,{})]}),r(D,{path:"queue",id:e==null?void 0:e._id,record:l,children:["Delete",t(C,{})]})]})]},a))]})]}),label2:"Add Patient to Queue",content2:t(z,{formName:"Queue Patients",children:r("form",{onSubmit:v,children:[" ",r(I,{label:"Patient",name:"name",type:"text",onChange:T,children:[t("option",{value:"",children:"Select Patient"}),x.map((e,a)=>t("option",{value:e==null?void 0:e.name,children:e==null?void 0:e.name},a))]}),t(y,{children:S?t(U,{}):"Add  to Queue"})]})})})})}export{fe as default};
