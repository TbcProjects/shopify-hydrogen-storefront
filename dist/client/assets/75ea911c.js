import{l as c}from"./1986dff3.js";import{r as e}from"./index.54ddac3f.js";function u(a,t){const[o,r]=e.exports.useState("loading"),s=JSON.stringify(t);return e.exports.useEffect(()=>{async function i(){try{r("loading"),await c(a,t),r("done")}catch{r("error")}}i()},[a,s,t]),o}export{u};
//# sourceMappingURL=75ea911c.js.map
