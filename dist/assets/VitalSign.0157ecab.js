import{r as n,l as E,b as m,j as r,a as t,f as x}from"./index.d87dee6f.js";import{D as L}from"./DeleteButton.055862da.js";import{E as A}from"./EditButton.a6d27025.js";import{B as M}from"./Button.3275d51a.js";import{I as p}from"./Input.34d9876e.js";import{S as W}from"./SearchInput.d51e8da3.js";import{S as $}from"./Select.a91200f8.js";import{j as k}from"./react-confirm-alert.30c1f10e.js";import{O as q,a as G}from"./OptionsTh.e3256f46.js";import{T as H,a as z,b as h,c as J,d as c}from"./Thead.63124400.js";import{F as K}from"./FormLayout.630feb8e.js";import{T as Q}from"./Tabs.f2b07210.js";import{I as U}from"./IndexNo.141a2ac1.js";import{T as X}from"./TotalNo.2b8dc21c.js";import{R as Y}from"./index.esm.bd88e434.js";import{N as Z}from"./NurseSidebar.cdc92f4a.js";import{R as D}from"./ReactPagination.781004e5.js";import{B as g}from"./ButtonPreloader.e6928a61.js";import"./index.esm.e91ca65e.js";import"./index.esm.4a753652.js";import"./index.esm.9f9cf711.js";import"./index.esm.812bafa8.js";import"./Forbidden.02296651.js";function ye(){n.exports.useContext(E);const[N,I]=n.exports.useState([]),[a,f]=n.exports.useState([]),[P,T]=n.exports.useState(1),[w,l]=n.exports.useState(!1),[s,B]=n.exports.useState({patientid:"",bloodpressure:"",temperature:"",pulse:"",spo:"",weight:"",respirationrate:"",height:""});function d(e){B(o=>({...o,[e.target.name]:e.target.value}))}function b(){m.get("/vital_signs").then(e=>{f(e.data)}).catch(e=>{x.error(e.data)})}const O=e=>{e.preventDefault(),l(!0),m.post("/vital_signs",{patientid:s==null?void 0:s.patientid,bloodpressure:s==null?void 0:s.bloodpressure,temperature:s==null?void 0:s.temperature,pulse:s==null?void 0:s.pulse,spo:s==null?void 0:s.spo,weight:s==null?void 0:s.weight,respirationrate:s==null?void 0:s.respirationrate,height:s==null?void 0:s.height}).then(o=>{l(!1),b(),x.success(o.data)}).catch(o=>{l(!1),x.error(o.response.data)})};n.exports.useEffect(()=>{m.get("/patient").then(e=>{I(e.data)}),b()},[]);const _=e=>{m.get(`/vital_signs?q=${e}`).then(o=>{f(o.data),T(1)})},u=10,C=P*u,R=C-u,V=a.slice(R,C),F=Math.ceil(a.length/u),j=e=>{T(e.selected+1)};return r(Z,{children:r(Q,{label1:"Vital Signs",label2:"Add Vital Signs",content1:t("div",{children:[t("div",{className:"flex justify-between items-center",children:[r(W,{onSearch:_}),t("div",{className:"items-center flex flex-col lg:flex-row",children:[r(X,{totalnumber:a==null?void 0:a.length}),r(D,{pageCount:F,handlePageClick:j})]})]}),t(H,{children:[t(z,{children:[r(U,{children:"#"}),r(h,{children:"Reg. Id"}),r(h,{children:"Patient Name"}),r(h,{children:"Blood Pressure"}),r(h,{children:"Temperature"}),r(h,{children:"Pulse"}),t(h,{children:["SPO",r("sub",{children:"2"})]}),r(h,{children:"Weight"}),r(q,{children:"Options"})]}),V.map((e,o)=>{var i,y;return t(J,{children:[r(c,{children:o+1*(P*u-9)}),r(c,{className:"font-bold",children:(i=e==null?void 0:e.patients[0])==null?void 0:i.registrationId}),r(c,{children:(y=e==null?void 0:e.patients[0])==null?void 0:y.name}),r(c,{children:e!=null&&e.bloodpressure?e==null?void 0:e.bloodpressure:"---"}),r(c,{children:e!=null&&e.temperature?e==null?void 0:e.temperature:"---"}),r(c,{children:e!=null&&e.pulse?e==null?void 0:e.pulse:"---"}),r(c,{children:e!=null&&e.spo?e==null?void 0:e.spo:"---"}),r(c,{children:e!=null&&e.weight?e==null?void 0:e.weight:"---"}),t(G,{children:[t(A,{editFunction:`/nurse/edit_vitalSigns?edit=${e==null?void 0:e._id}`,children:["Edit",r(Y,{})]}),t(L,{path:"vital_signs",id:e==null?void 0:e._id,record:b,children:["Delete",r(k,{})]})]})]},o)})]})]}),content2:r(K,{formName:"ADD VITAL SIGNS",children:t("form",{onSubmit:O,children:[t($,{label:"Patient",name:"patientid",type:"number",onChange:d,children:[r("option",{value:"",children:"Select Patient"}),N.map((e,o)=>t("option",{value:e==null?void 0:e._id,children:[e==null?void 0:e.registrationId," - ",e==null?void 0:e.name]},o))]}),t("div",{className:"grid lg:grid-cols-2 gap-2",children:[r(p,{label:"Blood Pressure",type:"text",name:"bloodpressure",onChange:d}),r(p,{label:"Temperature",type:"text",name:"temperature",onChange:d}),r(p,{label:"Pulse",type:"text",name:"pulse",onChange:d}),r(p,{label:"SPO 2",type:"text",name:"spo",onChange:d}),r(p,{label:"Respiration Rate",type:"text",name:"respirationrate",onChange:d}),r(p,{label:"Weight",type:"text",name:"weight",onChange:d}),r(p,{label:"Height",type:"text",name:"height",onChange:d})]}),r(M,{children:w?r(g,{}):"Add Vital Signs"})]})})})})}export{ye as default};
