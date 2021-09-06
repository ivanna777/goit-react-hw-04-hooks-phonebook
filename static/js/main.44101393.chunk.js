(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{17:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),i=n(11),s=n(4),l=n(19),u=n(2),b=n.n(u),d=n(0);function m(t){var e=t.onSubmit,n=t.onChangeName,a=t.onChangeNumber;return Object(d.jsxs)("form",{onSubmit:e,className:b.a["contact-form"],children:[Object(d.jsxs)("label",{className:b.a["contact-label"],children:["Name",Object(d.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:n,className:b.a["contact-input"]})]}),Object(d.jsxs)("label",{className:b.a["contact-label"],children:["Number",Object(d.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:a,className:b.a["contact-input"]})]}),Object(d.jsx)("button",{type:"submit",className:b.a["add-contact-btn"],children:"Add contact"})]})}var j=n(6),p=n.n(j);function f(t){var e=t.id,n=t.name,a=t.number,c=t.deleteContact;return Object(d.jsxs)("div",{className:p.a["contact-wrapper"],children:[Object(d.jsxs)("li",{className:p.a["contact-li"],children:[n,": ",a]},e),Object(d.jsx)("button",{className:p.a["delete-btn"],type:"button",onClick:function(){return c(e)},children:"Delete"})]})}var _=n(7),h=n.n(_);function O(t){var e=t.children,n=t.contacts,a=t.deleteContact;return Object(d.jsxs)("div",{className:h.a["contact-wrapper"],children:[e,n.length?Object(d.jsx)("ul",{className:h.a["contact-list"],children:n.map((function(t){return Object(d.jsx)(f,{id:t.id,name:t.name,number:t.number,deleteContact:a},t.id)}))}):Object(d.jsx)("p",{className:h.a["absent-contact"],children:"Such contact is absent"})]})}var x=n(8),C=n.n(x);function N(t){var e=t.filtredName;return Object(d.jsx)("div",{className:C.a["filter-wrapper"],children:Object(d.jsxs)("label",{className:C.a["filter-label"],children:["Find contacts by name",Object(d.jsx)("input",{type:"text",name:"name",onChange:e,className:C.a["filter-input"]})]})})}function g(){var t=Object(a.useState)(""),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),u=o[0],b=o[1],j=Object(a.useState)(""),p=Object(s.a)(j,2),f=p[0],_=p[1],h=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),x=Object(s.a)(h,2),C=x[0],g=x[1];Object(a.useEffect)((function(){var t=localStorage.getItem("contacts");g(JSON.parse(t))}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(C))}),[C]);return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(m,{onSubmit:function(t){if(t.preventDefault(),C.some((function(t){return t.name===n})))return alert("".concat(n," is already in contacts.")),void t.target.reset();g([].concat(Object(i.a)(C),[{name:n,number:u,id:Object(l.a)()}])),t.target.reset()},onChangeName:function(t){return c(t.target.value)},onChangeNumber:function(t){return b(t.target.value)}}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(N,{filtredName:function(t){return _(t.target.value.toLowerCase())}}),Object(d.jsx)(O,{contacts:C.filter((function(t){return t.name.toLocaleLowerCase().includes(f)})),deleteContact:function(t){return g(C.filter((function(e){return e.id!==t})))}})]})}o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={"contact-form":"ContactForm_contact-form__3rIMU","contact-label":"ContactForm_contact-label__2PJgS","contact-input":"ContactForm_contact-input__ukJH0","add-contact-btn":"ContactForm_add-contact-btn__9S7CS"}},6:function(t,e,n){t.exports={"contact-wrapper":"Contact_contact-wrapper__trdEK","contact-li":"Contact_contact-li__3dY6d","delete-btn":"Contact_delete-btn__1POEz"}},7:function(t,e,n){t.exports={"contact-wrapper":"ContactList_contact-wrapper__JiyHz","contact-list":"ContactList_contact-list__1yQ_R","absent-contact":"ContactList_absent-contact__oVqjb"}},8:function(t,e,n){t.exports={"filter-wrapper":"Filter_filter-wrapper__1SNbr","filter-label":"Filter_filter-label__1PSVk","filter-input":"Filter_filter-input__EIcPH"}}},[[17,1,2]]]);
//# sourceMappingURL=main.44101393.chunk.js.map