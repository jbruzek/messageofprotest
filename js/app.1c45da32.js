(function(e){function t(t){for(var a,s,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var a=n("2b0e"),r=n("5f5b");n("ab8b"),n("2dd8");a["default"].use(r["b"]);var i=n("0284"),s=n.n(i),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app",variant:"dark"}},[n("div",{staticClass:"header"},[n("b-container",{staticClass:"header-container"},[n("h1",[e._v("Frustrated with the status quo on police brutality?")]),n("p",{staticClass:"subtitle"},[e._v("Contact your representatives and demand evidence-based change for police reform")]),n("b-form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.populateRepresentatives(t)}}},[n("b-container",[n("b-row",{staticClass:"justify-content-center"},[n("b-col",{attrs:{cols:"12",sm:"6"}},[n("b-form-group",{attrs:{"label-for":"input-1"}},[n("b-form-input",{ref:"zipcode",staticClass:"zipcode-input",attrs:{id:"input-1","aria-describedby":"Enter zipcode.",type:"text",required:"",placeholder:"Enter zipcode",variant:"dark",autocomplete:"postal-code"},model:{value:e.zipcode,callback:function(t){e.zipcode=t},expression:"zipcode"}}),n("b-button",{staticClass:"button-main",attrs:{variant:"light",size:"lg",type:"submit"}},[e._v("Find Your Representatives")])],1)],1)],1)],1)],1)],1)],1),e._.isEmpty(this.representatives)?e._e():n("b-container",[n("h1",[e._v("Representatives")]),e._l(e.representatives,(function(t){return n("div",{key:t.name},[n("b-row",{attrs:{"align-h":"center"}},[n("b-col",{staticClass:"rep-container",attrs:{cols:"12",sm:"10",md:"8",lg:"6"}},[n("b-row",{attrs:{"align-v":"center"}},[n("b-col",{staticClass:"rep-text",attrs:{cols:"12",sm:"6"}},[n("h4",{staticClass:"rep-name"},[e._v(e._s(t.name))]),n("h5",[e._v(e._s(t.officeName))]),n("h6",[e._v(e._s(t.emails?t.emails[0]:null))])]),n("b-col",{attrs:{cols:"0",sm:"1"}}),n("b-col",{staticClass:"rep-contact",attrs:{cols:"12",sm:"5"}},[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.contact-modal",modifiers:{"contact-modal":!0}}],staticClass:"contact-button",attrs:{variant:"light"},on:{click:function(n){return e.clickedContact(t)}}},[e._v(" Contact ")])],1)],1)],1)],1)],1)}))],2),n("b-container",{staticClass:"section"},[n("h1",{staticClass:"section-header"},[e._v("Data & Attributions")]),n("h4",[e._v("Representative contact information comes from the "),n("a",{attrs:{href:"https://developers.google.com/civic-information"}},[e._v("Google Civic Information API. ")]),e._v(" "),n("br"),e._v(" Sources for the data in the email come from "),n("a",{attrs:{href:"https://www.joincampaignzero.org"}},[e._v(" Campaign Zero.")]),e._v(" "),n("br"),e._v(" Header image sourced from "),n("a",{attrs:{href:"https://unsplash.com/@koshuuu"}},[e._v(" Koshu Kunii via Unsplash. ")])]),n("b-button",{staticClass:"button-main",attrs:{href:"https://www.joincampaignzero.org/",variant:"light",size:"lg"}},[e._v("Support Campaign Zero")])],1),e._m(0),n("b-modal",{attrs:{id:"contact-modal",title:"Contact "+e.selectedRepresentative.name,"hide-footer":""}},[n("div",{attrs:{id:"email-body"}},[e._v(e._s(e.emailBody))]),n("div",{staticClass:"m-footer"},[e.selectedRepresentative.emails?n("b-button",{staticClass:"modal-button",attrs:{href:"mailto:"+e.selectedRepresentative.emails[0]+"?subject="+e.emailSubject+"&body="+e.emailBody,type:"submit"}},[n("b-icon",{attrs:{icon:"envelope"}})],1):e._e(),n("b-button",{staticClass:"modal-button",on:{click:e.copyToClipboard}},[n("b-icon",{attrs:{icon:"paperclip"}})],1),e.selectedRepresentative.phones?n("b-button",{staticClass:"modal-button"},[n("b-icon",{attrs:{icon:"phone"}}),e._v(" "+e._s(e.selectedRepresentative.phones[0]))],1):e._e()],1)])],1)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"top-border section footer-section"},[n("p",{staticClass:"footer-text"},[e._v("Black Lives Matter.")]),n("p",{staticClass:"footer-text"},[e._v("Made in Washington, D.C. by @jayprat95, @slurpee123abc, and @smitto")])])}],l=(n("96cf"),n("1da1")),u=(n("99af"),n("4de4"),n("b0c0"),n("b85c")),d=n("bc3a"),p=n.n(d),m=(n("caad"),n("45fc"),n("2532"),function(e,t){return t.some((function(t){return e.includes(t)}))}),f="https://vlne6trih8.execute-api.us-east-1.amazonaws.com",v=f+"/representatives",b=["Trump","Pence"],h=function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,i,s,o,c,l,d,f,h,g;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return n="".concat(v,"?address=").concat(t),e.next=5,p.a.get(n);case 5:a=e.sent.data,r=a.officials,i=a.offices,s=Object(u["a"])(i);try{for(s.s();!(o=s.n()).done;){c=o.value,l=Object(u["a"])(c.officialIndices);try{for(l.s();!(d=l.n()).done;)f=d.value,r[f].officeName=c.name}catch(y){l.e(y)}finally{l.f()}}}catch(y){s.e(y)}finally{s.f()}return r=r.filter((function(e){return!m(e.name,b)})),h=r.filter((function(e){return e.emails})),g=r.filter((function(e){return!e.emails})),e.abrupt("return",h.concat(g));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=n("a344");console.log(g);var y={name:"App",mounted:function(){this.$refs.zipcode.$el.focus()},methods:{populateRepresentatives:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$ga.event("contact","click","clicked contact"),e.next=3,h(this.zipcode);case 3:this.representatives=e.sent;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),clickedContact:function(e){this.selectedRepresentative=e},copyToClipboard:function(){var e=document.createRange();e.selectNode(document.getElementById("email-body")),window.getSelection().removeAllRanges(),window.getSelection().addRange(e),document.execCommand("copy"),window.getSelection().removeAllRanges()}},data:function(){return{zipcode:"",representatives:{},selectedRepresentative:{name:"Placeholder",emails:[],phones:[]},emailSubject:g.subject,emailBody:g.content}}},_=y,C=(n("5c0b"),n("2877")),w=Object(C["a"])(_,o,c,!1,null,null,null),j=w.exports,x=n("b1e0"),R=n("2ef0"),k=n.n(R);a["default"].use(r["a"]),a["default"].use(x["a"]),a["default"].config.productionTip=!1,a["default"].use(s.a,{id:"UA-169344376-1"}),a["default"].set(a["default"].prototype,"_",k.a),new a["default"]({render:function(e){return e(j)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"9c0c":function(e,t,n){},a344:function(e){e.exports=JSON.parse('{"subject":"Support BLM","content":" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac orci phasellus egestas tellus. Commodo odio aenean sed adipiscing diam donec adipiscing. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Turpis nunc eget lorem dolor. Massa tincidunt nunc pulvinar sapien et. Massa enim nec dui nunc. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Scelerisque eu ultrices vitae auctor eu augue ut. Duis convallis convallis tellus id interdum velit. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Posuere ac ut consequat semper viverra nam. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Sed euismod nisi porta lorem mollis aliquam ut. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Tellus rutrum tellus pellentesque eu tincidunt. Mollis nunc sed id semper risus in. Consequat id porta nibh venenatis cras sed felis eget velit."}')}});
//# sourceMappingURL=app.1c45da32.js.map