import{r as l,l as y,b as g,a,j as t}from"./index.d87dee6f.js";import"./react-confirm-alert.30c1f10e.js";import{S as I}from"./SearchInput.d51e8da3.js";import{A as R}from"./AdminSidebar.7e14a28f.js";import{T as S,a as C,b as o,c as j,d as n}from"./Thead.63124400.js";import{I as B}from"./IndexNo.141a2ac1.js";import{T as v}from"./TotalNo.2b8dc21c.js";import{R as O}from"./ReactPagination.781004e5.js";import"./index.esm.e91ca65e.js";import"./index.esm.4a753652.js";import"./index.esm.9f9cf711.js";import"./index.esm.812bafa8.js";import"./Forbidden.02296651.js";function J(){l.exports.useContext(y);const[s,d]=l.exports.useState([]),[i,m]=l.exports.useState(1);l.exports.useEffect(()=>{g.get("/report?type=birth").then(e=>{d(e.data)})},[]);const u=e=>{g.get(`/report?type=birth&q=${e}`).then(c=>{d(c.data),m(1)})},r=10,p=i*r,h=p-r,P=s.slice(h,p),T=Math.ceil(s.length/r),N=e=>{m(e.selected+1)};return a(R,{children:[" ",a("div",{className:"bg-gray-100 p-8",children:[t("h1",{className:"font-bold mb-4 text-indigo-900 text-lg lg:text-xl",children:"BIRTH REPORT"}),a("div",{className:"flex justify-between items-center",children:[t(I,{onSearch:u}),a("div",{className:"items-center flex flex-col lg:flex-row",children:[t(v,{totalnumber:s==null?void 0:s.length}),t(O,{pageCount:T,handlePageClick:N})]})]}),a(S,{children:[a(C,{children:[t(B,{children:"#"}),t(o,{children:"Reg. Id"}),t(o,{children:"Patient"}),t(o,{children:"Birth Type"}),t(o,{children:"Doctor"}),t(o,{children:"Date"})]}),P.map((e,c)=>{var f,x;return a(j,{children:[t(n,{children:c+1*(i*r-9)}),t(n,{className:"font-bold",children:(f=e==null?void 0:e.patients[0])==null?void 0:f.registrationId}),t(n,{children:(x=e==null?void 0:e.patients[0])==null?void 0:x.name}),t(n,{children:e==null?void 0:e.description}),t(n,{children:e==null?void 0:e.staffname}),t(n,{children:e==null?void 0:e.date})]},c)})]})]})]})}export{J as default};
