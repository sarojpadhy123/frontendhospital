import{r as l,l as x,j as o,N as f,F as u,a as t,d as k,R as s}from"./index.d87dee6f.js";import{H as v,G as w,c as N,M as y,e as B,f as C,g as D,h as A,i as O,A as M,d as R}from"./react-confirm-alert.30c1f10e.js";import{I as _}from"./index.esm.e91ca65e.js";import{b as j,a as F}from"./index.esm.4a753652.js";import{C as G}from"./index.esm.812bafa8.js";import{a as S,b as z}from"./index.esm.9f9cf711.js";import I from"./Forbidden.02296651.js";function Y({children:d}){const[a,c]=l.exports.useState(!0),{logout:p,loggedIn:h,user:i}=l.exports.useContext(x),m=(i==null?void 0:i.role)==="doctor";if(!h)return o(f,{to:"/"});const g=()=>{N({title:"Are You Sure Want To Logout ?",buttons:[{label:"Yes",onClick:p},{label:"No"}]})},n=[{name:"Dashboard",link:"/dashboard",icon:y},{name:"Prescriptions",link:"/doctor/prescriptions",icon:B},{name:"Queue",link:"/doctor/queue",icon:C},{name:"Vital Signs",link:"/doctor/vital_sign",icon:D},{name:"Patients",link:"/doctor/patients",icon:_},{name:"Appointments",link:"/doctor/appointments",icon:S},{name:"Bed Allotment",link:"/doctor/bed_allotment",icon:j},{name:"Blood Donor",link:"/doctor/blood_donor",icon:z},{name:"Dispatch Blood",link:"/doctor/dispatch_blood",icon:A},{name:"Blood Bank",link:"/doctor/blood_bank",icon:O},{name:"Operation Report",link:"/doctor/operation",icon:M},{name:"Birth Report",link:"/doctor/birth",icon:F},{name:"Death Report",link:"/doctor/death",icon:G},{name:"Profile",link:"/doctor/profile",icon:R}];return o(u,{children:m?t("section",{className:"flex",children:[t("div",{className:`bg-gray-200 min-h-screen ${a?"w-72":"w-16"} duration-500 text-gray-100 px-4`,children:[o("div",{className:"py-3 flex justify-end",children:o(v,{size:26,className:"cursor-pointer text-black",onClick:()=>c(!a)})}),o("div",{className:"mt-4 flex flex-col gap-4 relative",children:n==null?void 0:n.map((e,r)=>t(k,{to:e==null?void 0:e.link,className:({isActive:b})=>b?"group flex items-center text-sm gap-3.5 p-2 bg-indigo-700 hover:bg-indigo-600 text-white rounded-md shadow-lg shadow-gray-400":"group flex items-center text-sm gap-3.5 p-2 bg-white text-black hover:bg-gray-100 rounded-md shadow-lg shadow-gray-400",children:[o("div",{children:s.createElement(e==null?void 0:e.icon,{size:"20"})}),o("h2",{style:{transitionDelay:`${r+3}00ms`},className:`whitespace-pre duration-200 ${!a&&"opacity-0 translate-x-28 overflow-hidden"}`,children:e==null?void 0:e.name}),o("h2",{className:`${a&&"hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`,children:e==null?void 0:e.name})]},r))})]}),t("div",{className:"text-xl text-gray-900 w-full bg-gray-50",children:[t("div",{className:"bg-white h-16 p-4 flex items-center justify-between gap-3",children:[t("h1",{className:"text-indigo-900 text-lg lg:text-2xl font-bold flex items-center gap-2",children:[s.createElement(w,{size:"20"}),"DOCTOR"]}),t("div",{className:"flex items-center gap-2",children:[t("h1",{className:"d-inline font-semibold text-indigo-900",children:["Dr. ",i==null?void 0:i.name]}),o("button",{className:"bg-blue-200 p-2 rounded-xl text-sm",onClick:g,children:"Logout"})]})]}),o("div",{className:"bg-white m-4 p-4 min-h-screen",children:d})]})]}):o(I,{})})}export{Y as D};
