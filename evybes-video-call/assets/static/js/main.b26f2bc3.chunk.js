(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{212:function(e,t,n){"use strict";n.r(t);var c=n(7),o=n.n(c),r=n(84),i=n.n(r),a=(n(91),n(17)),s=(n(92),n(28)),u=n.n(s),d=n(85),l=n(86),j=n.n(l),b=n(1);function h(e){var t=e.setToken,n=e.setName,c=e.setRoom,o=e.name,r=e.room;function i(){return(i=Object(d.a)(u.a.mark((function e(n){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,j.a.post("https://evybes-video-call-5486-dev.twil.io/video-token",{identity:o,room:r});case 3:c=e.sent,console.log("result token: ",c.data),t(c.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsxs)("form",{onSubmit:function(e){return i.apply(this,arguments)},children:[Object(b.jsxs)("label",{htmlFor:"name",children:["Name",Object(b.jsx)("input",{type:"text",id:"name",value:o,onChange:function(e){return n(e.target.value)}})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{htmlFor:"name",children:["Room",Object(b.jsx)("input",{type:"text",id:"room",value:r,onChange:function(e){return c(e.target.value)}})]}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",children:"Submit"})]})}var m=n(29),p=n.n(m);function f(e){var t=e.token,n=e.room,o=Object(c.useRef)(),r=Object(c.useRef)();function i(e,t){var n=document.createElement("div");n.setAttribute("id",t),n.appendChild(e.attach()),r.current.appendChild(n)}return Object(c.useEffect)((function(){p.a.connect(t,{video:!0,audio:!0,name:n}).then((function(e){function t(e){e.tracks.forEach((function(t){t.isSubscribed&&i(t.track,e.identity)})),e.on("trackSubscribed",(function(t){i(t,e.identity)}))}p.a.createLocalVideoTrack().then((function(e){o.current.appendChild(e.attach())})),e.participants.forEach(t),e.on("participantConnected",t),e.on("participantDisconnected",(function(e){var t=document.getElementById(e.identity);t.parentNode.removeChild(t)}))})).catch((function(e){return console.log("Error Messge: ",e)}))}),[t,n]),Object(b.jsxs)("div",{style:{textAlign:"center",alignItems:"center",display:"flex",flexDirection:"column"},children:[Object(b.jsx)("div",{children:Object(b.jsxs)("h3",{children:["You are inside the room name: ",n]})}),Object(b.jsx)("div",{ref:o}),Object(b.jsx)("div",{ref:r})]})}var O=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)("room"),i=Object(a.a)(r,2),s=i[0],u=i[1],d=Object(c.useState)(),l=Object(a.a)(d,2),j=l[0],m=l[1];return Object(b.jsx)("div",{className:"App",children:j?Object(b.jsx)(f,{token:j,room:s}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Hello Vide Chat App"}),"Show From",Object(b.jsx)(h,{setToken:m,setName:o,setRoom:u,name:n,room:s})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,213)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),v()},91:function(e,t,n){},92:function(e,t,n){}},[[212,1,2]]]);
//# sourceMappingURL=main.b26f2bc3.chunk.js.map