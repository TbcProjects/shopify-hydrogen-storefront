import{r as T,e as f,f as l,C as s}from"./index.54ddac3f.js";import{u as b,l as _}from"./d6282b27.js";const C="00000000",p="xxxx-4xxx-xxxx-xxxxxxxxxxxx";function i(){let e="";try{const o=window.crypto,t=new Uint16Array(31);o.getRandomValues(t);let n=0;e=p.replace(/[x]/g,(r,...I)=>{const d=t[n]%16,S=r==="x"?d:d&3|8;return n++,S.toString(16)}).toUpperCase()}catch{e=p.replace(/[x]/g,(t,...n)=>{const r=Math.random()*16|0;return(t==="x"?r:r&3|8).toString(16)}).toUpperCase()}return`${k()}-${e}`}function k(){let e=0,o=0;e=new Date().getTime()>>>0;try{o=performance.now()>>>0}catch{o=0}const t=Math.abs(e+o).toString(16).toLowerCase();return C.substr(0,8-t.length)+t}function c(e,o){return Object.entries(e).forEach(([t,n])=>{n&&(o[t]=n)}),o}const w=60*60*24*360*2,v=60*30,P="myshopify.com",D="myshopify.dev";let m=!1,h=0;function H({cookieDomain:e}){return T.exports.useEffect(()=>{try{const o=b(document.cookie),t=o[f]||i(),n=o[l]||i();if(y(f,t,w,e),y(l,n,v,e),s.pushToPageAnalyticsData({shopify:{pageId:i(),userId:t,sessionId:n}}),h=0,!m){m=!0;const r=s.eventNames;s.subscribe(r.PAGE_VIEW,x),s.hasSentFirstPageView()&&x(s.getPageAnalyticsData())}}catch{}}),null}function y(e,o,t,n){const r=_(e,o,{maxage:t,domain:O(n),secure:!0,samesite:"Lax",path:"/"});return document.cookie=r,r}function O(e){const o=location.hostname;return o.indexOf(P)!==-1?`.${o.split(".").slice(-3).join(".")}`:o.indexOf(e)!==-1?`.${e}`:""}function x(e){h+=1;try{U(A(e))}catch(o){console.error(`Error Shopify analytics: ${s.eventNames.PAGE_VIEW}`,o)}}function A(e){return{schema_id:"trekkie_storefront_page_view/1.4",payload:E(e),metadata:{event_created_at_ms:Date.now()}}}function E(e){const o=document.location,t=e.shopify;let n={appClientId:"6167201",hydrogenSubchannelId:t.storefrontId,isPersistentCookie:t.isPersistentCookie,uniqToken:t.userId,visitToken:t.sessionId,microSessionId:t.pageId,microSessionCount:h,url:o.href,path:o.pathname,search:o.search,referrer:document.referrer,title:document.title,shopId:g(t.shopId),currency:t.currency,contentLanguage:t.acceptedLanguage};if(n=c({isMerchantRequest:V()},n),n=c({pageType:t.pageType},n),t.resourceId)try{n=c({resourceType:L(t.resourceId),resourceId:g(t.resourceId)},n)}catch{}return n=c({customerId:t.customerId},n),n}function V(){const e=location.hostname;return e.indexOf(D)!==-1||e==="localhost"}function g(e){return parseInt(e.substring(e.lastIndexOf("/")+1))}function L(e){return e.substring(0,e.lastIndexOf("/")).replace(/.*shopify\//,"").toLowerCase()}const N=500;let u=[],a;function U(e){u.push(e),a&&(clearTimeout(a),a=null),a=setTimeout(()=>{const o={events:u,metadata:{event_sent_at_ms:Date.now()}};u=[],a=null;try{fetch("https://monorail-edge.shopifysvc.com/unstable/produce_batch",{method:"post",headers:{"content-type":"text/plain"},body:JSON.stringify(o)})}catch{}},N)}export{H as ShopifyAnalyticsClient};
//# sourceMappingURL=7ec881fb.js.map
