import{r as s,l as L,u as T,i as N,b as d,j as n,a as l,f as m}from"./index.d87dee6f.js";import{B as $}from"./ButtonPreloader.e6928a61.js";import"./react-confirm-alert.30c1f10e.js";import{B as j}from"./Button.3275d51a.js";import{I as r}from"./Input.34d9876e.js";import{S as u}from"./Select.a91200f8.js";import{F}from"./FormLayout.630feb8e.js";function q({url:g}){const{user:o}=s.exports.useContext(L),b=T(),[v,y]=s.exports.useState([]),[x,C]=s.exports.useState([]),[S,B]=s.exports.useState([]),[E,P]=s.exports.useState(!1),[e,p]=s.exports.useState({staffname:`${o==null?void 0:o.name}`,patientid:"",patientstatus:"",bedtype:"",bednumber:"",allotmentdate:"",dischargedate:""});function i(t){p(a=>({...a,[t.target.name]:t.target.value}))}let A=N().search;const c=new URLSearchParams(A).get("edit");return s.exports.useEffect(()=>{d.get("/patient").then(t=>{y(t.data)}),d.get("/bed").then(t=>{B(t.data)}),d.get(`/bedallotment/?edit=${c}`).then(t=>{var a,h;p(t.data),C((h=(a=t.data)==null?void 0:a.patients[0])==null?void 0:h.name)})},[]),n(F,{formName:"EDIT BED ALLOTMENT",children:l("form",{onSubmit:t=>{t.preventDefault(),P(!0),d.put(`/bedallotment/${c}`,{patientid:e==null?void 0:e.patientid,patientstatus:e==null?void 0:e.patientstatus,bedtype:e==null?void 0:e.bedtype,bednumber:e==null?void 0:e.bednumber,allotmentdate:e==null?void 0:e.allotmentdate,dischargedate:e==null?void 0:e.dischargedate,staffname:e==null?void 0:e.staffname}).then(a=>{b(`${g}`,{replace:!0}),m.success(a.data)}).catch(a=>{m.error(a.response.data)})},children:[l(u,{label:"Patient",name:"patientid",type:"number",onChange:i,children:[n("option",{value:e==null?void 0:e.patientid,children:x}),v.map((t,a)=>n("option",{value:t==null?void 0:t._id,children:t==null?void 0:t.name},a))]}),l(u,{label:"Patient Status",name:"patientstatus",type:"text",onChange:i,children:[n("option",{value:e==null?void 0:e.patientstatus,children:e==null?void 0:e.patientstatus}),n("option",{value:"Admitted",children:"Admitted"}),n("option",{value:"Under Treatment",children:"Under Treatment"}),n("option",{value:"Operated",children:"Operated"}),n("option",{value:"Recovery",children:"Recovery"}),n("option",{value:"Cured",children:"Cured"}),n("option",{value:"Discharged",children:"Discharged"}),n("option",{value:"Death",children:"Death"})]}),l(u,{label:"Bed Type",name:"bedtype",type:"text",onChange:i,children:[n("option",{value:e==null?void 0:e.bedtype,children:e==null?void 0:e.bedtype}),S.map((t,a)=>n("option",{value:t==null?void 0:t.type,children:t==null?void 0:t.type},a))]}),n(r,{label:"Bed Number",name:"bednumber",type:"text",value:e==null?void 0:e.bednumber,onChange:i}),n(r,{label:"Allotment Date",type:"datetime-local",name:"allotmentdate",value:e==null?void 0:e.allotmentdate,onChange:i}),n(r,{label:"Discharge Date",type:"datetime-local",name:"dischargedate",value:e==null?void 0:e.dischargedate,onChange:i}),n("input",{type:"hidden",name:"staffname",onChange:i}),n(j,{children:E?n($,{}):"Edit Bed Allotment"})]})})}export{q as E};
