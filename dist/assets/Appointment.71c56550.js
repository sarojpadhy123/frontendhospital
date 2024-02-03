import{r as d,l as j,b as n,j as r,a as o,f as g}from"./index.d87dee6f.js";import{D as R}from"./DeleteButton.055862da.js";import{E as L}from"./EditButton.a6d27025.js";import{B as M}from"./Button.3275d51a.js";import{I as $}from"./Input.34d9876e.js";import{S as w}from"./SearchInput.d51e8da3.js";import{S as k}from"./Select.a91200f8.js";import{j as q}from"./react-confirm-alert.30c1f10e.js";import{O as z,a as G}from"./OptionsTh.e3256f46.js";import{T as H,a as J,b as h,c as K,d as c}from"./Thead.63124400.js";import{F as Q}from"./FormLayout.630feb8e.js";import{T as U}from"./Tabs.f2b07210.js";import{I as V}from"./IndexNo.141a2ac1.js";import{T as W}from"./TotalNo.2b8dc21c.js";import{D as X}from"./DoctorSidebar.182adcd2.js";import{R as Y}from"./index.esm.bd88e434.js";import{R as Z}from"./ReactPagination.781004e5.js";import{B as p}from"./ButtonPreloader.e6928a61.js";import"./index.esm.e91ca65e.js";import"./index.esm.4a753652.js";import"./index.esm.812bafa8.js";import"./index.esm.9f9cf711.js";import"./Forbidden.02296651.js";function Ie(){const{user:i}=d.exports.useContext(j),[I,v]=d.exports.useState([]),[a,x]=d.exports.useState([]),[b,P]=d.exports.useState(1),[y,m]=d.exports.useState(!1),[s,D]=d.exports.useState({doctorid:`${i==null?void 0:i._id}`,patientid:"",date:""});function u(e){D(t=>({...t,[e.target.name]:e.target.value}))}function f(){n.get("/appointment").then(e=>{x(e.data)}).catch(e=>{g.error(e.data)})}const N=e=>{e.preventDefault(),m(!0),n.post("/appointment",{doctorid:s==null?void 0:s.doctorid,patientid:s==null?void 0:s.patientid,date:s==null?void 0:s.date}).then(t=>{m(!1),f(),g.success(t.data)}).catch(t=>{m(!1),g.error(t.response.data)})};d.exports.useEffect(()=>{n.get("/patient").then(e=>{v(e.data)}),f()},[]);const O=e=>{n.get(`/appointment?q=${e}`).then(t=>{x(t.data),P(1)})},l=10,S=b*l,B=S-l,E=a.slice(B,S),F=Math.ceil(a.length/l),_=e=>{P(e.selected+1)};return r(X,{children:r(U,{label1:"Appointments",label2:"Add Appointment",content1:o("div",{children:[o("div",{className:"flex justify-between items-center",children:[r(w,{onSearch:O}),o("div",{className:"items-center flex flex-col lg:flex-row",children:[r(W,{totalnumber:a==null?void 0:a.length}),r(Z,{pageCount:F,handlePageClick:_})]})]}),o(H,{children:[o(J,{children:[r(V,{children:"#"}),r(h,{children:"Reg. Id"}),r(h,{children:"Patient"}),r(h,{children:"Date (yy/mm/dd)"}),r(h,{children:"Doctor"}),r(z,{children:"Options"})]}),E.map((e,t)=>{var T,A,C;return o(K,{children:[r(c,{children:t+1*(b*l-9)}),r(c,{className:"font-bold",children:(T=e==null?void 0:e.patients[0])==null?void 0:T.registrationId}),r(c,{children:(A=e==null?void 0:e.patients[0])==null?void 0:A.name}),r(c,{children:e==null?void 0:e.date}),r(c,{children:(C=e==null?void 0:e.doctor[0])==null?void 0:C.name}),i._id===(e==null?void 0:e.doctorid)&&o(G,{children:[o(L,{editFunction:`/doctor/edit_appointment?edit=${e==null?void 0:e._id}`,children:["Edit",r(Y,{})]}),o(R,{path:"appointment",id:e==null?void 0:e._id,record:f,children:["Delete",r(q,{})]})]})]},t)})]})]}),content2:r(Q,{formName:"ADD APPOINTMENT",children:o("form",{onSubmit:N,children:[r("input",{type:"hidden",name:"doctorid",onChange:u}),o(k,{label:"Patient",name:"patientid",type:"number",onChange:u,children:[r("option",{value:"",children:"Select Patient"}),I.map((e,t)=>o("option",{value:e==null?void 0:e._id,children:[e==null?void 0:e.registrationId," - ",e==null?void 0:e.name]},t))]}),r($,{label:"Date",type:"date",name:"date",onChange:u}),r(M,{children:y?r(p,{}):"Add Appointment"})]})})})})}export{Ie as default};
