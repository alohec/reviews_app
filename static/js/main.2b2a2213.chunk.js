(window.webpackJsonpapp=window.webpackJsonpapp||[]).push([[0],{11:function(e,t,n){e.exports=n(27)},16:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),i=(n(16),n(2)),l=n(10),s=function(){return null},u=n(9),h=n.n(u),m=(n(25),{shouldSort:!0,threshold:.6,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1}),f=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(),l=Object(i.a)(r,2),s=l[0],u=l[1],f=Object(a.useState)(),d=Object(i.a)(f,2),p=d[0],v=d[1];Object(a.useEffect)(function(){fetch("/restaurants").then(function(e){return e.json().then(function(e){o(e),u(new h.a(e,m))})})},[]);return c.a.createElement("div",{class:"searchBar"},c.a.createElement("form",null,c.a.createElement("input",{type:"text",id:"searchBar",placeholder:"Search for things!",autoComplete:"off",list:"suggestions",onChange:function(){var e=document.getElementById("searchBar").value,t=s.search(e);v([n[t[0]],n[t[1]],n[t[2]]])}}),c.a.createElement("datalist",{id:"suggestions"},p&&p.map(function(e){return c.a.createElement("option",{value:e})})),c.a.createElement("input",{type:"submit",style:{display:"none"},onClick:function(e){e.preventDefault(),console.log("Searched!")}})))},d=function(){return c.a.createElement(f,null)},p=(n(26),function(){var e=Object(a.useState)("token"),t=Object(i.a)(e,2),n=t[0],o=t[1];Object(a.useEffect)(function(){fetch("/mapbox").then(function(e){return e.json().then(function(e){o(e)})})},[]);var r=Object(l.a)({accessToken:n});return c.a.createElement("div",null,c.a.createElement("div",{class:"sidebar"},c.a.createElement(d,null)),c.a.createElement("div",{class:"map"},c.a.createElement(r,{style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:"100vh",width:"100vw"},center:[-122.431297,37.773972]},c.a.createElement(s,null))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.2b2a2213.chunk.js.map