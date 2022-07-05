import{r as f,R as F}from"./index.54ddac3f.js";import{t as L,s as G,H as w,y as T,o as O,u as P,L as q,C as W,p as M,h as _,b as J,g as X,_ as k,c as E,d as Q,x as H,e as Y,f as Z,i as N,S as ee,j as te,k as d,r as re,v as oe}from"./2289f115.js";import{s as ne}from"./2d959f92.js";function z(e,o){let[r,t]=f.exports.useState(e),n=G(e);return L(()=>t(n.current),[n,t,...o]),r}function ie(e){throw new Error("Unexpected object: "+e)}var y=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(y||{});function ae(e,o){let r=o.resolveItems();if(r.length<=0)return null;let t=o.resolveActiveIndex(),n=t!=null?t:-1,i=(()=>{switch(e.focus){case 0:return r.findIndex(a=>!o.resolveDisabled(a));case 1:{let a=r.slice().reverse().findIndex((s,u,R)=>n!==-1&&R.length-u-1>=n?!1:!o.resolveDisabled(s));return a===-1?a:r.length-1-a}case 2:return r.findIndex((a,s)=>s<=n?!1:!o.resolveDisabled(a));case 3:{let a=r.slice().reverse().findIndex(s=>!o.resolveDisabled(s));return a===-1?a:r.length-1-a}case 4:return r.findIndex(a=>o.resolveId(a)===e.id);case 5:return null;default:ie(e)}})();return i===-1?t:i}function K(e={},o=null,r=[]){for(let[t,n]of Object.entries(e))V(r,B(o,t),n);return r}function B(e,o){return e?e+"["+o+"]":o}function V(e,o,r){if(Array.isArray(r))for(let[t,n]of r.entries())V(e,B(o,t.toString()),n);else r instanceof Date?e.push([o,r.toISOString()]):typeof r=="boolean"?e.push([o,r?"1":"0"]):typeof r=="string"?e.push([o,r]):typeof r=="number"?e.push([o,`${r}`]):r==null?e.push([o,""]):K(r,o,e)}var le=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(le||{}),se=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(se||{}),ue=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(ue||{}),pe=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.SetDisabled=2]="SetDisabled",e[e.SetOrientation=3]="SetOrientation",e[e.GoToOption=4]="GoToOption",e[e.Search=5]="Search",e[e.ClearSearch=6]="ClearSearch",e[e.RegisterOption=7]="RegisterOption",e[e.UnregisterOption=8]="UnregisterOption",e))(pe||{});function $(e,o=r=>r){let r=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,t=oe(o(e.options.slice()),i=>i.dataRef.current.domRef.current),n=r?t.indexOf(r):null;return n===-1&&(n=null),{options:t,activeOptionIndex:n}}let ce={[1](e){return e.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},[0](e){if(e.disabled||e.listboxState===0)return e;let o=e.activeOptionIndex,{value:r,mode:t,compare:n}=e.propsRef.current,i=e.options.findIndex(a=>{let s=a.dataRef.current.value;return P(t,{[1]:()=>r.some(u=>n(u,s)),[0]:()=>n(r,s)})});return i!==-1&&(o=i),{...e,listboxState:0,activeOptionIndex:o}},[2](e,o){return e.disabled===o.disabled?e:{...e,disabled:o.disabled}},[3](e,o){return e.orientation===o.orientation?e:{...e,orientation:o.orientation}},[4](e,o){var r;if(e.disabled||e.listboxState===1)return e;let t=$(e),n=ae(o,{resolveItems:()=>t.options,resolveActiveIndex:()=>t.activeOptionIndex,resolveId:i=>i.id,resolveDisabled:i=>i.dataRef.current.disabled});return{...e,...t,searchQuery:"",activeOptionIndex:n,activationTrigger:(r=o.trigger)!=null?r:1}},[5]:(e,o)=>{if(e.disabled||e.listboxState===1)return e;let r=e.searchQuery!==""?0:1,t=e.searchQuery+o.value.toLowerCase(),n=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+r).concat(e.options.slice(0,e.activeOptionIndex+r)):e.options).find(a=>{var s;return!a.dataRef.current.disabled&&((s=a.dataRef.current.textValue)==null?void 0:s.startsWith(t))}),i=n?e.options.indexOf(n):-1;return i===-1||i===e.activeOptionIndex?{...e,searchQuery:t}:{...e,searchQuery:t,activeOptionIndex:i,activationTrigger:1}},[6](e){return e.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},[7]:(e,o)=>{let r={id:o.id,dataRef:o.dataRef},t=$(e,n=>[...n,r]);if(e.activeOptionIndex===null){let{value:n,mode:i,compare:a}=e.propsRef.current,s=o.dataRef.current.value;P(i,{[1]:()=>n.some(u=>a(u,s)),[0]:()=>a(n,s)})&&(t.activeOptionIndex=t.options.indexOf(r))}return{...e,...t}},[8]:(e,o)=>{let r=$(e,t=>{let n=t.findIndex(i=>i.id===o.id);return n!==-1&&t.splice(n,1),t});return{...e,...r,activationTrigger:1}}},U=f.exports.createContext(null);U.displayName="ListboxContext";function A(e){let o=f.exports.useContext(U);if(o===null){let r=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,A),r}return o}function de(e,o){return P(o.type,ce,e,o)}let fe=f.exports.Fragment,ve=w(function(e,o){let{value:r,name:t,onChange:n,disabled:i=!1,horizontal:a=!1,multiple:s=!1,...u}=e;const R=a?"horizontal":"vertical";let D=T(o),S=f.exports.useReducer(de,{listboxState:1,propsRef:{current:{value:r,onChange:n,mode:s?1:0,compare:O((m,h)=>m===h)}},labelRef:f.exports.createRef(),buttonRef:f.exports.createRef(),optionsRef:f.exports.createRef(),disabled:i,orientation:R,options:[],searchQuery:"",activeOptionIndex:null,activationTrigger:1}),[{listboxState:v,propsRef:g,optionsRef:x,buttonRef:c},l]=S;g.current.value=r,g.current.mode=s?1:0,L(()=>{g.current.onChange=m=>P(g.current.mode,{[0](){return n(m)},[1](){let h=g.current.value.slice(),b=h.indexOf(m);return b===-1?h.push(m):h.splice(b,1),n(h)}})},[n,g]),L(()=>l({type:2,disabled:i}),[i]),L(()=>l({type:3,orientation:R}),[R]),q([c,x],(m,h)=>{var b;l({type:1}),ee(h,te.Loose)||(m.preventDefault(),(b=c.current)==null||b.focus())},v===0);let p=f.exports.useMemo(()=>({open:v===0,disabled:i}),[v,i]),C={ref:D};return F.createElement(U.Provider,{value:S},F.createElement(W,{value:P(v,{[0]:M.Open,[1]:M.Closed})},t!=null&&r!=null&&K({[t]:r}).map(([m,h])=>F.createElement(_,{features:J.Hidden,...X({key:m,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:m,value:h})})),k({ourProps:C,theirProps:u,slot:p,defaultTag:fe,name:"Listbox"})))}),be="button",xe=w(function(e,o){var r;let[t,n]=A("Listbox.Button"),i=T(t.buttonRef,o),a=`headlessui-listbox-button-${E()}`,s=Q(),u=O(c=>{switch(c.key){case d.Space:case d.Enter:case d.ArrowDown:c.preventDefault(),n({type:0}),s.nextFrame(()=>{t.propsRef.current.value||n({type:4,focus:y.First})});break;case d.ArrowUp:c.preventDefault(),n({type:0}),s.nextFrame(()=>{t.propsRef.current.value||n({type:4,focus:y.Last})});break}}),R=O(c=>{switch(c.key){case d.Space:c.preventDefault();break}}),D=O(c=>{if(re(c.currentTarget))return c.preventDefault();t.listboxState===0?(n({type:1}),s.nextFrame(()=>{var l;return(l=t.buttonRef.current)==null?void 0:l.focus({preventScroll:!0})})):(c.preventDefault(),n({type:0}))}),S=z(()=>{if(t.labelRef.current)return[t.labelRef.current.id,a].join(" ")},[t.labelRef.current,a]),v=f.exports.useMemo(()=>({open:t.listboxState===0,disabled:t.disabled}),[t]),g=e,x={ref:i,id:a,type:ne(e,t.buttonRef),"aria-haspopup":!0,"aria-controls":(r=t.optionsRef.current)==null?void 0:r.id,"aria-expanded":t.disabled?void 0:t.listboxState===0,"aria-labelledby":S,disabled:t.disabled,onKeyDown:u,onKeyUp:R,onClick:D};return k({ourProps:x,theirProps:g,slot:v,defaultTag:be,name:"Listbox.Button"})}),Re="label",me=w(function(e,o){let[r]=A("Listbox.Label"),t=`headlessui-listbox-label-${E()}`,n=T(r.labelRef,o),i=O(()=>{var s;return(s=r.buttonRef.current)==null?void 0:s.focus({preventScroll:!0})}),a=f.exports.useMemo(()=>({open:r.listboxState===0,disabled:r.disabled}),[r]);return k({ourProps:{ref:n,id:t,onClick:i},theirProps:e,slot:a,defaultTag:Re,name:"Listbox.Label"})}),ge="ul",he=H.RenderStrategy|H.Static,Oe=w(function(e,o){var r;let[t,n]=A("Listbox.Options"),i=T(t.optionsRef,o),a=`headlessui-listbox-options-${E()}`,s=Q(),u=Q(),R=Y(),D=(()=>R!==null?R===M.Open:t.listboxState===0)();f.exports.useEffect(()=>{var l;let p=t.optionsRef.current;!p||t.listboxState===0&&p!==((l=Z(p))==null?void 0:l.activeElement)&&p.focus({preventScroll:!0})},[t.listboxState,t.optionsRef]);let S=O(l=>{switch(u.dispose(),l.key){case d.Space:if(t.searchQuery!=="")return l.preventDefault(),l.stopPropagation(),n({type:5,value:l.key});case d.Enter:if(l.preventDefault(),l.stopPropagation(),t.activeOptionIndex!==null){let{dataRef:p}=t.options[t.activeOptionIndex];t.propsRef.current.onChange(p.current.value)}t.propsRef.current.mode===0&&(n({type:1}),N().nextFrame(()=>{var p;return(p=t.buttonRef.current)==null?void 0:p.focus({preventScroll:!0})}));break;case P(t.orientation,{vertical:d.ArrowDown,horizontal:d.ArrowRight}):return l.preventDefault(),l.stopPropagation(),n({type:4,focus:y.Next});case P(t.orientation,{vertical:d.ArrowUp,horizontal:d.ArrowLeft}):return l.preventDefault(),l.stopPropagation(),n({type:4,focus:y.Previous});case d.Home:case d.PageUp:return l.preventDefault(),l.stopPropagation(),n({type:4,focus:y.First});case d.End:case d.PageDown:return l.preventDefault(),l.stopPropagation(),n({type:4,focus:y.Last});case d.Escape:return l.preventDefault(),l.stopPropagation(),n({type:1}),s.nextFrame(()=>{var p;return(p=t.buttonRef.current)==null?void 0:p.focus({preventScroll:!0})});case d.Tab:l.preventDefault(),l.stopPropagation();break;default:l.key.length===1&&(n({type:5,value:l.key}),u.setTimeout(()=>n({type:6}),350));break}}),v=z(()=>{var l,p,C;return(C=(l=t.labelRef.current)==null?void 0:l.id)!=null?C:(p=t.buttonRef.current)==null?void 0:p.id},[t.labelRef.current,t.buttonRef.current]),g=f.exports.useMemo(()=>({open:t.listboxState===0}),[t]),x=e,c={"aria-activedescendant":t.activeOptionIndex===null||(r=t.options[t.activeOptionIndex])==null?void 0:r.id,"aria-multiselectable":t.propsRef.current.mode===1?!0:void 0,"aria-labelledby":v,"aria-orientation":t.orientation,id:a,onKeyDown:S,role:"listbox",tabIndex:0,ref:i};return k({ourProps:c,theirProps:x,slot:g,defaultTag:ge,features:he,visible:D,name:"Listbox.Options"})}),ye="li",Se=w(function(e,o){let{disabled:r=!1,value:t,...n}=e,[i,a]=A("Listbox.Option"),s=`headlessui-listbox-option-${E()}`,u=i.activeOptionIndex!==null?i.options[i.activeOptionIndex].id===s:!1,{value:R,compare:D}=i.propsRef.current,S=P(i.propsRef.current.mode,{[1]:()=>R.some(b=>D(b,t)),[0]:()=>D(R,t)}),v=f.exports.useRef(null),g=T(o,v);L(()=>{if(i.listboxState!==0||!u||i.activationTrigger===0)return;let b=N();return b.requestAnimationFrame(()=>{var I,j;(j=(I=v.current)==null?void 0:I.scrollIntoView)==null||j.call(I,{block:"nearest"})}),b.dispose},[v,u,i.listboxState,i.activationTrigger,i.activeOptionIndex]);let x=f.exports.useRef({disabled:r,value:t,domRef:v});L(()=>{x.current.disabled=r},[x,r]),L(()=>{x.current.value=t},[x,t]),L(()=>{var b,I;x.current.textValue=(I=(b=v.current)==null?void 0:b.textContent)==null?void 0:I.toLowerCase()},[x,v]);let c=O(()=>i.propsRef.current.onChange(t));L(()=>(a({type:7,id:s,dataRef:x}),()=>a({type:8,id:s})),[x,s]);let l=O(b=>{if(r)return b.preventDefault();c(),i.propsRef.current.mode===0&&(a({type:1}),N().nextFrame(()=>{var I;return(I=i.buttonRef.current)==null?void 0:I.focus({preventScroll:!0})}))}),p=O(()=>{if(r)return a({type:4,focus:y.Nothing});a({type:4,focus:y.Specific,id:s})}),C=O(()=>{r||u||a({type:4,focus:y.Specific,id:s,trigger:0})}),m=O(()=>{r||!u||a({type:4,focus:y.Nothing})}),h=f.exports.useMemo(()=>({active:u,selected:S,disabled:r}),[u,S,r]);return k({ourProps:{id:s,ref:g,role:"option",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,"aria-selected":S===!0?!0:void 0,disabled:void 0,onClick:l,onFocus:p,onPointerMove:C,onMouseMove:C,onPointerLeave:m,onMouseLeave:m},theirProps:n,slot:h,defaultTag:ye,name:"Listbox.Option"})}),Pe=Object.assign(ve,{Button:xe,Label:me,Options:Oe,Option:Se});export{Pe as r};
//# sourceMappingURL=f1a2c6d7.js.map
