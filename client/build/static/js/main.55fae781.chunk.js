(this["webpackJsonpequitypulse-2.0"]=this["webpackJsonpequitypulse-2.0"]||[]).push([[0],{28:function(e,t,s){},35:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var c=s(13),n=s.n(c),l=s(19),i=s.n(l),r=(s(28),s(29),s(23)),a=(s(35),s(0)),o=Object(r.a)();void 0!==o&&(console.log("connected to socket"),o.on("options",(function(e){if(e.length)for(var t=0;t<e.length;t++){var s=document.getElementById("options-tableBody").insertRow(0),c=s.insertCell(0),n=s.insertCell(1),l=s.insertCell(2),i=s.insertCell(3),r=s.insertCell(4);c.innerHTML="".concat(e[t].Time),n.innerHTML="".concat(e[t].Symbol),l.innerHTML="".concat(e[t].Quotes),i.innerHTML="".concat(e[t].BBO),r.innerHTML="".concat(e[t].Trades),s.style.height="41.5px","C"===e[t].Symbol.slice(-1)?n.style.color="green":n.style.color="red",parseInt(e[t].Quotes)>500&&(s.classList.add("table-warning"),s.classList.add("bold")),parseInt(e[t].Trades)>500&&(s.classList.add("table-warning"),s.classList.add("bold")),parseInt(e[t].BBO)>500&&(s.classList.add("table-warning"),s.classList.add("bold"))}})),o.on("futures",(function(e){if(e.length)for(var t=0;t<e.length;t++){var s=document.getElementById("futures-tableBody").insertRow(0),c=s.insertCell(0),n=s.insertCell(1),l=s.insertCell(2),i=s.insertCell(3),r=s.insertCell(4);c.innerHTML="".concat(e[t].Time),n.innerHTML="".concat(e[t].Symbol),l.innerHTML="".concat(e[t].Quotes),i.innerHTML="".concat(e[t].BBO),r.innerHTML="".concat(e[t].Trades),parseInt(e[t].Quotes)>140&&(s.classList.add("table-warning"),s.classList.add("bold")),parseInt(e[t].Trades)>100&&(s.classList.add("table-warning"),s.classList.add("bold"))}})),o.on("output",(function(e){if(e.length)for(var t=0;t<e.length;t++){var s=document.getElementById("tableBody").insertRow(0),c=s.insertCell(0),n=s.insertCell(1),l=s.insertCell(2),i=s.insertCell(3),r=s.insertCell(4);c.innerHTML="".concat(e[t].Time),n.innerHTML="".concat(e[t].Symbol),l.innerHTML="".concat(e[t].Quotes),i.innerHTML="".concat(e[t].BBO),r.innerHTML="".concat(e[t].Trades),parseInt(e[t].Quotes)>800&&(s.classList.add("table-warning"),s.classList.add("bold")),parseInt(e[t].Trades)>500&&(s.classList.add("table-warning"),s.classList.add("bold"))}})));var d=function(){return Object(a.jsxs)("div",{className:"tables-container",children:[Object(a.jsxs)("table",{className:"table",children:[Object(a.jsx)("caption",{children:"Equities"}),Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"Time"}),Object(a.jsx)("th",{scope:"col",children:"Symbol"}),Object(a.jsx)("th",{scope:"col",children:"Quotes"}),Object(a.jsx)("th",{scope:"col",children:"BBO"}),Object(a.jsx)("th",{scope:"col",children:"Trades"})]})}),Object(a.jsx)("tbody",{id:"tableBody"})]}),Object(a.jsxs)("table",{className:"table",children:[Object(a.jsx)("caption",{children:"Futures"}),Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"Time"}),Object(a.jsx)("th",{scope:"col",children:"Symbol"}),Object(a.jsx)("th",{scope:"col",children:"Quotes"}),Object(a.jsx)("th",{scope:"col",children:"BBO"}),Object(a.jsx)("th",{scope:"col",children:"Trades"})]})}),Object(a.jsx)("tbody",{id:"futures-tableBody"})]}),Object(a.jsxs)("table",{className:"table",children:[Object(a.jsx)("caption",{children:"Options"}),Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"Time"}),Object(a.jsx)("th",{scope:"col",children:"Symbol"}),Object(a.jsx)("th",{scope:"col",children:"Quotes"}),Object(a.jsx)("th",{scope:"col",children:"BBO"}),Object(a.jsx)("th",{scope:"col",children:"Trades"})]})}),Object(a.jsx)("tbody",{id:"options-tableBody"})]})]})},b=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"header-main",children:Object(a.jsx)("h1",{children:"HFT Footprint"})})})},j=function(){return Object(a.jsx)("nav",{className:"navbar navbar-light bg-light",style:{position:"fixed",top:"0",width:"100%",zIndex:"99"},children:Object(a.jsx)("a",{href:"/",className:"navbar-brand",children:"EquityPulse"})})};var h=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j,{}),Object(a.jsx)(b,{}),Object(a.jsx)(d,{})]})};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.55fae781.chunk.js.map