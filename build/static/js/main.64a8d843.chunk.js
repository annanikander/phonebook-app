(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),r=t(14),l=t.n(r),c=t(4),o=t(2),i=function(e){var n=e.newFilter,t=e.filterPersons;return u.a.createElement("div",null,"Filter shown with ",u.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.addPersonAndNumber,t=e.newName,a=e.handlePersonChange,r=e.newNumber,l=e.handleNumberChange;return u.a.createElement("div",null,u.a.createElement("form",{onSubmit:n},u.a.createElement("div",null,"Name: ",u.a.createElement("input",{value:t,onChange:a})),u.a.createElement("div",null,"Number: ",u.a.createElement("input",{value:r,onChange:l})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"add"))))},s=function(e){var n=e.person,t=e.handleClick;return u.a.createElement("li",null,n.name," ",n.number," ",u.a.createElement("button",{onClick:function(){return t(n)}},"Delete"))},f=function(e){var n=e.personsToShow,t=e.handleClick;return u.a.createElement("div",null,u.a.createElement("ul",null,n.map((function(e){return u.a.createElement(s,{key:e.id,person:e,handleClick:t})}))))},d=t(3),h=t.n(d),b="/api/persons",v=function(){return h.a.get(b).then((function(e){return e.data}))},E=v,p=function(e){return h.a.post(b,e).then((function(e){return e.data}))},g=function(e){return h.a.delete("".concat(b,"/").concat(e)),v()},w=function(e,n){return h.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},j=function(e){var n=e.message;return null===n?null:u.a.createElement("div",{className:"success"},n)},O=function(e){var n=e.message;return null===n?null:u.a.createElement("div",{className:"fail"},n)},C=function(e){var n=Object(a.useState)([]),t=Object(o.a)(n,2),r=t[0],l=t[1],s=Object(a.useState)(""),d=Object(o.a)(s,2),h=d[0],b=d[1],v=Object(a.useState)(""),C=Object(o.a)(v,2),N=C[0],k=C[1],S=Object(a.useState)(""),T=Object(o.a)(S,2),P=T[0],y=T[1],A=Object(a.useState)(!0),D=Object(o.a)(A,2),F=D[0],J=D[1],x=Object(a.useState)(null),B=Object(o.a)(x,2),I=B[0],L=B[1],q=Object(a.useState)(null),z=Object(o.a)(q,2),G=z[0],H=z[1];Object(a.useEffect)((function(){E().then((function(e){l(e)}))}),[]);var K=F?r:r.filter((function(e){return e.name.toLowerCase().includes(P)})),M=function(e,n){var t=e,a=e.id,u=Object(c.a)(Object(c.a)({},t),{},{number:n});w(a,u).then((function(e){l(r.map((function(n){return n.id!==a?n:e}))),L("Changed the number of '".concat(u.name,"'")),setTimeout((function(){L(null)}),5e3)})).catch((function(e){L(null),H("".concat(u.name," has already been removed from server")),setTimeout((function(){H(null)}),5e3)}))};return u.a.createElement("div",null,u.a.createElement("h2",null,"Phonebook"),u.a.createElement(j,{message:I}),u.a.createElement(O,{message:G}),u.a.createElement(i,{newFilter:P,filterPersons:function(e){console.log(e.target.value),y(e.target.value),F&&J(!F)}}),u.a.createElement("h2",null,"Add a new person"),u.a.createElement("p",null,"muutos 2"),u.a.createElement(m,{addPersonAndNumber:function(e){if(e.preventDefault(),r.map((function(e){return e.name})).includes(h)&&N.length>=8){if(window.confirm("".concat(h," is already added to the phonebook, replace the old number with a new one?"))){var n=r.find((function(e){return e.name===h}));M(n,N)}b(""),k("")}else{var t={name:h,number:N,id:r.length+1};p(t).then((function(e){l(r.concat(e)),L("Added' ".concat(h,"'")),setTimeout((function(){L(null)}),5e3)})).catch((function(e){H("".concat(e.response.data.error)),setTimeout((function(){H(null)}),5e3)})),b(""),k("")}},newName:h,handlePersonChange:function(e){console.log(e.target.value),b(e.target.value)},newNumber:N,handleNumberChange:function(e){console.log(e.target.value),k(e.target.value)}}),u.a.createElement("h2",null,"Numbers"),u.a.createElement(f,{personsToShow:K,handleClick:function(e){var n=e.id;if(window.confirm("Delete ".concat(e.name,"?"))){var t=r.find((function(e){return e.id===n}));g(t.id).then((function(e){l(r.filter((function(e){return e.id!==n})))})).catch((function(n){L(null),H("".concat(e.name," has already been removed from server")),setTimeout((function(){H(null)}),5e3)})),l(r.filter((function(e){return e.id!==n}))),L("Deleted ".concat(t.name)),setTimeout((function(){L(null)}),5e3)}}}))};t(37);l.a.render(u.a.createElement(C,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.64a8d843.chunk.js.map