import{e as S,I as f,a4 as x,aS as L,o as w,n as k,O as o,y as u,a7 as y,q as O,a8 as U,r as D,a6 as F,x as $,c as M,J as j,aT as T,ab as H,ae as I}from"./index-CVVgb_0u.js";/* empty css                *//* empty css              *//* empty css               *//* empty css               *//* empty css                        */import{S as Y,_ as q}from"./DateRangePicker.vue_vue_type_script_setup_true_lang-7Q51MUGW.js";import{g as V,p as B}from"./common-9_AlMieT.js";import{E as _}from"./index-UYW-ElF2.js";import{a as A,E as K}from"./index-CsxsiZ4j.js";import{a as Q,b as W}from"./index-DzYfilnm.js";import{E as G}from"./index-Dx8dXwis.js";import{v as J}from"./directive-DN3s17fQ.js";import"./date-picker-x3ikzoQK.js";import"./index-CItWWpyQ.js";import"./_Uint8Array-CoH_bIvD.js";const z={class:"content1-container"},P={key:0,class:"loading-container"},X=S({__name:"energy",setup(Z){const c=f(""),i=f(""),g=f("day"),m=f(!1),h=f(!1);x([{sn:"",name:"",isOnline:!1}]);const b=x({title:{text:"Energy Statistics"},xAxis:{type:"category",title:null},yAxis:{title:null},series:[],plotOptions:{series:{stacking:"none"}},tooltip:{shared:!0,formatter:function(){let r=`<b>${this.points[0].key}</b>`,e=0;return this.points.forEach(t=>{t.series.stackKey===this.points[0].series.stackKey&&(r+=`<br/><span style="color:${t.color}">●</span> ${t.series.name}: <b>${t.y} kWh</b>`,e+=t.y)}),r+=`<br/><b>Total: ${e.toFixed(3)} kWh</b>`,r}}}),E=f(!1),C=async()=>{m.value=!0,b.series=[];try{const[t,p]=i.value&&i.value.length===2?i.value.map(a=>{const l=new Date(a);return`${l.getFullYear()}-${l.getMonth()+1}-${l.getDate()}`}):[null,null];console.log(t,p);const n=await V(c.value,g.value,t,p,1,100**4,"json");if(n.successful){const a=n.data;if(a.length===0)_.warning("No data available for the selected range."),E.value=!1;else{const l=[];for(let s=0;s<a[0].datas.length;s++){var r="forward",e="reverse";s==3&&(r="forwardN",e="reverseN"),l.push({name:`Forward Energy ${B[s]}`,data:a.map(d=>[d.time,d.datas[s][0]]),type:"column",stack:r,marker:{enabled:!1}}),l.push({name:`Reverse Energy ${B[s]} `,data:a.map(d=>[d.time,d.datas[s][1]]),type:"column",stack:e,marker:{enabled:!1}})}console.log(l),b.series=l,E.value=!0,T(b)}}else _.error(`Failed to fetch history data: ${n.message}`)}catch(t){_.error("Error fetching history data"),console.error("Error fetching history data",t)}finally{m.value=!1}},N=async()=>{h.value=!0;try{const[r,e]=i.value&&i.value.length===2?i.value.map(l=>{const s=new Date(l);return`${s.getFullYear()}-${s.getMonth()+1}-${s.getDate()}`}):[null,null],t=await V(c.value,g.value,r,e,1,100**4,"csv"),p=new Blob([t],{type:"text/csv"}),n=window.URL.createObjectURL(p),a=document.createElement("a");a.href=n,a.download="energy_data.csv",document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(n),document.body.removeChild(a)}catch(r){_.error("Export failed:"+r.message),console.error("Export failed",r)}finally{h.value=!1}};return(r,e)=>{const t=A,p=K,n=Q,a=W,l=H,s=G,d=L("highcharts"),R=J;return w(),k(j,null,[o(p,{"separator-icon":O(U)},{default:u(()=>[o(t,{to:"/user/dashboard"},{default:u(()=>e[3]||(e[3]=[y("Home")])),_:1}),o(t,null,{default:u(()=>e[4]||(e[4]=[y("Reports")])),_:1}),o(t,null,{default:u(()=>e[5]||(e[5]=[y("Energy Statistics")])),_:1})]),_:1},8,["separator-icon"]),o(s,{justify:"end",my:"4",style:{width:"100%"}},{default:u(()=>[o(Y,{modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=v=>c.value=v)},null,8,["modelValue"]),o(q,{modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=v=>i.value=v)},null,8,["modelValue"]),o(a,{modelValue:g.value,"onUpdate:modelValue":e[2]||(e[2]=v=>g.value=v),placeholder:"Group By",style:{"min-width":"150px"}},{default:u(()=>[o(n,{label:"Hour",value:"hour"}),o(n,{label:"Day",value:"day"}),o(n,{label:"Month",value:"month"}),o(n,{label:"Year",value:"year"})]),_:1},8,["modelValue"]),o(l,{type:"primary",onClick:C,disabled:!c.value||m.value},{default:u(()=>e[6]||(e[6]=[y("Query")])),_:1},8,["disabled"]),o(l,{type:"success",onClick:N,loading:h.value,disabled:!c.value||h.value},{default:u(()=>e[7]||(e[7]=[y("Export")])),_:1},8,["loading","disabled"])]),_:1}),D("div",z,[m.value?F((w(),k("div",P,null,512)),[[R,m.value]]):$("",!0),E.value&&!m.value?(w(),M(d,{key:1,options:b,class:"chart-container"},null,8,["options"])):$("",!0)])],64)}}}),ye=I(X,[["__scopeId","data-v-61f261e7"]]);export{ye as default};
