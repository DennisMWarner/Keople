(function(t){function e(e){for(var s,o,l=e[0],n=e[1],d=e[2],c=0,p=[];c<l.length;c++)o=l[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,l=1;l<a.length;l++){var n=a[l];0!==r[n]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var u=n;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"095b":function(t,e,a){"use strict";var s=a("3a33"),r=a.n(s);r.a},"3a33":function(t,e,a){},"3ed8":function(t,e,a){t.exports=a.p+"img/Keople-logo-large.b5365544.png"},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row justify-content-between bg-primary"},[s("nav",{staticClass:"navbar navbar-expand-sm navbar-light bg-primary col-12 p-0"},[s("router-link",{staticClass:"navbar-brand col-sm-2 col-8",attrs:{to:{name:"home"}}},[s("img",{staticClass:"img-fluid bg-white border rounded border-warning shadow p-1",attrs:{src:a("3ed8")}})]),t._m(0),s("div",{staticClass:"collapse navbar-collapse img-fluid bg-white rounded shadow mx-auto mt-2 col-md-9 col-11 text-center p-0 justify-content-between",attrs:{id:"navbarText"}},[s("span",[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item",class:{active:"home"==t.$route.name}},[s("router-link",{staticClass:"nav-link pl-1",attrs:{to:{name:"home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?s("li",{staticClass:"nav-item",class:{active:"userKeepsPage"==t.$route.name}},[s("router-link",{staticClass:"nav-link pl-1",attrs:{to:{name:"userKeepsPage"}}},[t._v("My Keeps")])],1):t._e()])]),s("span",{staticClass:"navbar-text mr-2"},[t.$auth.isAuthenticated?s("span",{staticClass:"bg-primary border border-dark text-light rounded shadow px-2 py-1 mr-2 ml-1"},[t._v(t._s(t.userInfo.user.name))]):t._e(),t.$auth.isAuthenticated?s("button",{staticClass:"btn btn-sm btn-warning border-secondary rounded shadow",on:{click:t.logout}},[t._v("logout")]):s("button",{staticClass:"btn btn-sm btn-primary border border-secondary rounded shadow",on:{click:t.login}},[t._v("Login or Register")])])])],1)])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler bg-warning mt-2 mr-4 align-self-start",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],n=a("bc3a"),d=a.n(n);d.a.create({baseURL:"https://localhost:5001",withCredentials:!0});var u={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),console.log("this.$auth.user: "),console.log(this.$auth.user),this.$store.dispatch("getUserVaults",this.$auth.email),this.$store.dispatch("getAllVaultKeeps")},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin}),this.$store.state.userVaults=[]}},computed:{userInfo(){return this.$auth}},mounted(){console.log(this.$auth)}},c=u,p=a("2877"),m=Object(p["a"])(c,o,l,!1,null,null,null),v=m.exports,h=a("335d"),b={name:"App",async beforeCreate(){await Object(h["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer)},components:{Navbar:v}},g=b,w=(a("5c64"),Object(p["a"])(g,r,i,!1,null,"7d43db5f",null)),K=w.exports,f=a("8c4f"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container-fluid bg-primary"},[a("div",{staticClass:"row"},[a("vault-select-button-group-row",{staticClass:"col-12"})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[this.$auth.isAuthenticated?a("create-keep",{staticClass:"mx-auto"}):a("div",{staticClass:"text-center text-success pt-3"},[a("h5",{staticClass:"text-sm"},[t._v("Log in or register today and do more!")])])],1)]),a("div",{staticClass:"row justify-content-around"},[a("div",{staticClass:"col-12 mx-auto"},[a("keeps",{staticClass:"border border-warning rounded p-2 no-gutters"})],1)])])},C=[],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"create-keep mx-auto bg-primary text-center mt-2"},[a("button",{staticClass:"btn btn-sm border border-white w-75 text-white bg-success btn-rounded shadow",attrs:{"data-target":"#create-keep-modal","data-toggle":"modal"}},[t._v("Create a new keep")]),a("div",{staticClass:"modal fade",attrs:{id:"create-keep-modal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border border-white rounded shadow"},[t._m(0),a("div",{staticClass:"modal-body bg-success"},[a("form",[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.name,expression:"newKeep.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Title"},domProps:{value:t.newKeep.name},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.description,expression:"newKeep.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.newKeep.description},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.img,expression:"newKeep.img"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Image URL",required:""},domProps:{value:t.newKeep.img},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"img",e.target.value)}}})]),a("div",{staticClass:"form-group form-check justify-content-between"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.isPrivate,expression:"newKeep.isPrivate"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"},domProps:{checked:Array.isArray(t.newKeep.isPrivate)?t._i(t.newKeep.isPrivate,null)>-1:t.newKeep.isPrivate},on:{change:function(e){var a=t.newKeep.isPrivate,s=e.target,r=!!s.checked;if(Array.isArray(a)){var i=null,o=t._i(a,i);s.checked?o<0&&t.$set(t.newKeep,"isPrivate",a.concat([i])):o>-1&&t.$set(t.newKeep,"isPrivate",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.newKeep,"isPrivate",r)}}}),a("label",{staticClass:"form-check-label mr-4 text-white",attrs:{for:"exampleCheck1"}},[t._v("Private (required if you want to delete keep in the future)")])])])]),a("div",{staticClass:"modal-footer bg-primary border border-white rounded shadow"},[a("button",{staticClass:"btn btn-primary border rounded shadow",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancel")]),a("button",{staticClass:"btn btn-warning border rounded shadow border-white",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.createKeep()}}},[t._v("Save Keep")])])])])])])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-primary text-light border rounded shadow-sm border-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Create a new keep")])])}],k={name:"create-keep",data(){return{newKeep:{}}},computed:{},methods:{createKeep(){return this.$store.dispatch("createKeep",this.newKeep)}},components:{}},x=k,V=Object(p["a"])(x,_,$,!1,null,"5a71b8b3",null),D=V.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vaults bg-primary"},t._l(t.vaults,(function(t){return a("vault",{key:t.id,attrs:{vaultData:t}})})),1)},E=[],P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vault",on:{click:function(e){return t.displayVaultDetailsPage()}}},[a("div",[t._v(t._s(t.vaultData.name))])])},j=[],O={name:"vault",data(){return{}},props:["vaultData"],computed:{},methods:{displayVaultDetailsPage(){this.$store.dispatch("getVaultById",this.vaultData.id),this.$router.push("/vault/"+this.vaultData.id)}},components:{}},B=O,I=Object(p["a"])(B,P,j,!1,null,"7e28bdb2",null),T=I.exports,U={name:"vaults",data(){return{}},computed:{vaults(){return this.$store.state.userVaults}},methods:{},components:{vault:T},created(){return this.$store.dispatch("getUserVaults")}},M=U,S=Object(p["a"])(M,A,E,!1,null,"b59cbdd8",null),F=S.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"keeps row mt-2"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card-columns"},t._l(t.keeps,(function(t){return a("keep",{key:t.id,attrs:{keepData:t}})})),1)])])},N=[],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"keep card bg-light border border-warning rounded shadow mb-3",on:{click:function(e){return t.displayKeepDetailsPage()}}},[a("img",{staticClass:"card-img-top",attrs:{src:t.keepData.img,alt:"..."}}),a("p",{staticClass:"card-text text-right pr-2"},[a("small",{staticClass:"text-muted"},[t._v(" views: "+t._s(t.keepData.views)+" "),t._v(" keeps: "+t._s(t.keepData.keeps)+" ")])]),a("div",{staticClass:"card-body border border-secondary rounded m-1 bg-light"},[a("p",{staticClass:"card-title text-white p-1 border rounded bg-primary"},[t._v(t._s(t.keepData.name))]),a("p",{staticClass:"card-text p-2 border border-white rounded shadow text-sm text-muted font-sm bg-white"},[t._v(t._s(t.keepData.description))])])])},H=[],q={name:"keep",data(){return{}},props:["keepData"],computed:{},methods:{displayKeepDetailsPage(){this.$store.state.vaultKeepsFilteredByActiveKeep=[],this.keepData.views+=1,this.$store.dispatch("editKeep",this.keepData),this.$store.dispatch("getKeepById",this.keepData.id),this.$router.push("/keep/"+this.keepData.id)}},destroyed(){this.$store.state.activeKeep={}},components:{}},z=q,J=Object(p["a"])(z,R,H,!1,null,"ab6882aa",null),G=J.exports,W={name:"Keeps",data(){return{}},props:[],computed:{keeps(){return this.$store.state.allKeeps}},methods:{},components:{keep:G}},Q=W,Y=Object(p["a"])(Q,L,N,!1,null,"6907dd44",null),Z=Y.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vault-select-button-group-row",on:{click:function(e){return t.displayVaultDetailsPage()}}},[a("div",{staticClass:"row"},t._l(t.vaultButtons,(function(t){return a("vault-select-button",{key:t.id,staticClass:"col-md-3 col-6 mt-2",attrs:{vaultData:t}})})),1)])},tt=[],et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vault-select-button col-sm-3 mt-0"},[a("button",{staticClass:"btn btn-warning btn-sm border border-white btn-block text-white",attrs:{"data-dismiss":"modal"},on:{click:function(e){return t.displayVaultDetailsPage()}}},[t._v(t._s(t.vaultData.name))])])},at=[],st={name:"vault-select-button",data(){return{}},props:["vaultData"],computed:{},methods:{displayVaultDetailsPage(){this.$store.dispatch("getVaultById",this.vaultData.id),this.$router.push("/vault/"+this.vaultData.id)}},components:{}},rt=st,it=Object(p["a"])(rt,et,at,!1,null,"6af75c4c",null),ot=it.exports,lt={name:"vault-select-button-group-row",data(){return{}},computed:{vaultButtons(){return this.$store.state.userVaults}},methods:{displayVaultDetailsPage(){this.$router.push("/vault/"+this.vaultData.id)}},components:{vaultSelectButton:ot},created(){return this.$store.dispatch("getUserVaults")}},nt=lt,dt=Object(p["a"])(nt,X,tt,!1,null,"23e77905",null),ut=dt.exports,ct={name:"home",computed:{user(){return this.$store.state.user}},components:{keeps:Z,vaults:F,vaultSelectButtonGroupRow:ut,createKeep:D},methods:{logout(){this.$store.dispatch("logout")}},async beforeCreate(){await this.$store.dispatch("getAllKeeps")}},pt=ct,mt=Object(p["a"])(pt,y,C,!1,null,null,null),vt=mt.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard text-center"},[a("h1",[t._v("WELCOME TO THE DASHBOARD")]),a("button",{staticClass:"btn btn-warning rounded shadow border border-secondary m-3 p-1 text-light",on:{click:t.goToUserKeeps}},[t._v("View My Keeps")]),a("button",{staticClass:"btn btn-warning rounded shadow border border-secondary m-3 p-1 text-light"},[t._v("View My Vaults")])])},bt=[],gt={mounted(){},computed:{},methods:{goToUserKeeps(){this.$router.push("/myKeeps"+this.$auth.name)}}},wt=gt,Kt=Object(p["a"])(wt,ht,bt,!1,null,null,null),ft=Kt.exports,yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vault-details bg-primary container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 m-auto"},[a("h4",{staticClass:"p-1 rounded shadow-sm w-100 mx-auto mt-2 text-white text-center border border-white bg-warning"},[t._v(t._s(this.vault.name))])])]),a("vault-keeps",{staticClass:"border border-warning rounded p-2 no-gutters"}),a("create-keep"),t._m(0),a("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog",id:"delete-vault-modal"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border border-white"},[a("div",{staticClass:"modal-header bg-primary text-white border border-white"},[a("h5",{staticClass:"modal-title"},[t._v('Delete "'+t._s(this.vault.name)+'"?')])]),t._m(1),a("div",{staticClass:"modal-footer bg-primary border border-white"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancel")]),a("button",{staticClass:"btn btn-danger text-white border border-white rounded shadow",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.deleteVault()}}},[t._v('Delete "'+t._s(this.vault.name)+'"')])])])])])],1)},Ct=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center mt-1"},[a("button",{staticClass:"btn btn-light rounded border border-white text-white shadow w-75 bg-danger",attrs:{"data-target":"#delete-vault-modal","data-toggle":"modal"}},[t._v("Delete this vault")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-body bg-success text-white"},[a("p",[t._v(" Are you sure you want to delete this vault? "),a("br"),t._v("This cannot be undone! ")])])}],_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vault-keeps row mt-2"},[a("div",{staticClass:"col-md-12 bg-primary"},[a("div",{staticClass:"card-columns"},t._l(t.vaultKeeps,(function(t){return a("vault-keep",{key:t.id,attrs:{vaultKeepData:t}})})),1)])])},$t=[],kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vault-keep card bg-light border border-warning rounded shadow mb-3",on:{click:function(e){return t.displayVaultKeepDetailsPage()}}},[a("img",{staticClass:"card-img-top",attrs:{src:t.vaultKeepData.img,alt:"..."}}),a("p",{staticClass:"card-text text-right pr-2"},[a("small",{staticClass:"text-muted"},[t._v(" views: "+t._s(t.vaultKeepData.views)+" "),t._v(" keeps: "+t._s(t.vaultKeepData.keeps)+" ")])]),a("div",{staticClass:"card-body border border-secondary rounded m-1 bg-light"},[a("p",{staticClass:"card-title text-white p-1 border rounded bg-primary"},[t._v(t._s(t.vaultKeepData.name))]),a("p",{staticClass:"card-text p-2 border border-white rounded shadow text-sm text-muted font-sm bg-white"},[t._v(t._s(t.vaultKeepData.description))])])])},xt=[],Vt={name:"vault-keep",data(){return{}},props:["vaultKeepData"],computed:{},methods:{async displayVaultKeepDetailsPage(){await this.$store.dispatch("getKeepById",this.vaultKeepData.id),console.log("displayVaultKeepDetailsPage called..."),this.$store.state.vaultKeepsFilteredByActiveKeep=[],this.vaultKeepData.views+=1,this.$store.dispatch("editKeep",this.vaultKeepData),this.$store.dispatch("getVaultKeepById",this.vaultKeepData.id),this.$router.push("/vault/"+this.$store.state.activeVault.id+"/keep/"+this.vaultKeepData.id)}},destroyed(){this.$store.state.activeVaultKeep={}},components:{}},Dt=Vt,At=Object(p["a"])(Dt,kt,xt,!1,null,"76badf74",null),Et=At.exports,Pt={name:"vault-keeps",data(){return{}},computed:{vaultKeeps(){return this.$store.state.vaultKeeps}},methods:{},components:{vaultKeep:Et}},jt=Pt,Ot=Object(p["a"])(jt,_t,$t,!1,null,"2650f667",null),Bt=Ot.exports,It={name:"vault-details",data(){return{}},computed:{vault(){return this.$store.state.activeVault}},methods:{async deleteVault(){await this.$store.state.vaultKeeps.forEach(t=>{--t.keeps,this.$store.dispatch("editKeep",t)}),this.$store.dispatch("deleteVault",this.vault.id),this.$router.push("/")}},components:{vaultKeeps:Bt,createKeep:D},mounted(){return this.$store.state.vaultKeeps=[],this.$store.dispatch("getKeepsByVaultId",this.$route.params.id)}},Tt=It,Ut=(a("095b"),Object(p["a"])(Tt,yt,Ct,!1,null,"82b91e94",null)),Mt=Ut.exports,St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"keep-details container-fluid bg-primary"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center my-2"},[a("div",{staticClass:"bg-primary p-0"},[a("img",{staticClass:"img-fluid border rounded shadow border-warning p-1",attrs:{src:t.keep.img}})])])]),this.$auth.user?a("div",[a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-success text-white rounded border shadow w-50",attrs:{"data-target":"#save-keep-modal","data-toggle":"modal"},on:{click:function(e){return t.SetValidVaults()}}},[t._v("Keep")])])]):t._e(),this.$store.state.activeKeep.isPrivate&&this.$auth.user&&this.$auth.user.sub==this.$store.state.activeKeep.userId?a("div",[t._m(0)]):t._e(),a("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog",id:"delete-keep-modal"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header bg-primary text-white"},[a("h5",{staticClass:"modal-title"},[t._v('Delete "'+t._s(this.keep.name)+'"?')]),t._m(1)]),a("div",{staticClass:"modal-body"},[a("p",[t._v(' Modal Are you sure you want to delete "'+t._s(this.keep.name)+'"? '),a("br"),t._v("(This cannot be undone.) ")])]),a("div",{staticClass:"modal-footer bg-primary"},[a("button",{staticClass:"btn btn-success border border-white rounded shadow",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancel")]),a("button",{staticClass:"btn btn-danger text-white border border-white shadow rounded",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.deleteKeep()}}},[t._v('Delete "'+t._s(this.keep.name)+'".')])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"save-keep-modal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-sm",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border border-secondary rounded shadow"},[t._m(2),a("div",{staticClass:"modal-body text-center bg-success"},[a("div",{staticClass:"btn-group text-center",attrs:{role:"group","aria-label":"Basic example"}},[a("vault-select-button-group-column")],1)]),t._m(3)])])])])},Ft=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center mt-1"},[a("button",{staticClass:"btn btn-light text-white rounded border shadow w-50 bg-danger",attrs:{"data-target":"#delete-keep-modal","data-toggle":"modal"}},[t._v("Delete")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-primary text-light border rounded shadow-sm border-light"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Please select a vault to save this keep to:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer bg-primary border border-light rounded shadow justify-content-center"},[a("button",{staticClass:"btn btn-danger border border-white rounded shadow",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancel")])])}],Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vault-select-button-group-column"},[a("div"),t._l(t.vaultButtons,(function(t){return a("vault-save-keep-button",{key:t.id,attrs:{vaultData:t}})})),a("create-vault")],2)},Nt=[],Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"create-vault"},[a("button",{staticClass:"btn btn-block btn-primary p1 border border-white shadow rounded",attrs:{"data-target":"#create-vault-modal","data-toggle":"modal"}},[t._v("New Vault")]),a("div",{staticClass:"modal fade modal-sm",attrs:{id:"create-vault-modal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border border-secondary rounded shadow"},[t._m(0),a("div",{staticClass:"modal-body"},[a("form",[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.name,expression:"newVault.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"New vault name"},domProps:{value:t.newVault.name},on:{input:function(e){e.target.composing||t.$set(t.newVault,"name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.description,expression:"newVault.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.newVault.description},on:{input:function(e){e.target.composing||t.$set(t.newVault,"description",e.target.value)}}})])])]),a("div",{staticClass:"modal-footer bg-secondary border border-light rounded shadow"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.createVault()}}},[t._v("Save Keep")])])])])])])},Ht=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-primary text-light border rounded shadow-sm border-light"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Create a new vault")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],qt={name:"create-vault",data(){return{newVault:{},updatedKeep:{}}},computed:{},methods:{createVault(){this.updatedKeep.keeps=++this.$store.state.activeKeep.keeps,this.updatedKeep.views=this.$store.state.activeKeep.views,this.updatedKeep.id=this.$store.state.activeKeep.id,this.$store.dispatch("editKeep",this.updatedKeep);let t={};return t.newVault=this.newVault,t.keepId=this.$store.state.activeKeep.id,this.$store.dispatch("createVault",t)}},components:{}},zt=qt,Jt=Object(p["a"])(zt,Rt,Ht,!1,null,"ada5dc46",null),Gt=Jt.exports,Wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vault-save-keep-button mx-auto"},[a("button",{staticClass:"btn btn-warning w-100 mb-2 border rounded shadow border-white",attrs:{"data-dismiss":"modal"},on:{click:function(e){return t.saveKeepToVault()}}},[t._v(t._s(t.vaultData.name))])])},Qt=[],Yt={name:"vault-save-keep-button",data(){return{updatedKeep:{}}},props:["vaultData"],computed:{},methods:{saveKeepToVault(){this.updatedKeep.keeps=++this.$store.state.activeKeep.keeps,this.updatedKeep.views=this.$store.state.activeKeep.views,this.updatedKeep.id=this.$store.state.activeKeep.id,this.$store.dispatch("editKeep",this.updatedKeep),console.log("updatedKeep in saveKeepToVault(): ",this.updatedKeep);let t={};t.vaultId=this.vaultData.id,t.keepId=this.$store.state.activeKeep.id,this.$store.dispatch("saveKeepToVault",t)}},components:{}},Zt=Yt,Xt=Object(p["a"])(Zt,Wt,Qt,!1,null,"62dd77ec",null),te=Xt.exports,ee={name:"vault-select-button-group-column",data(){return{}},computed:{vaultButtons(){return this.$store.state.vaultKeepsFilteredByActiveKeep}},methods:{},components:{vaultSaveKeepButton:te,createVault:Gt}},ae=ee,se=Object(p["a"])(ae,Lt,Nt,!1,null,"3696a506",null),re=se.exports,ie={name:"keep-details",data(){return{updatedKeep:{}}},computed:{keep(){return this.$store.state.activeKeep}},methods:{async deleteKeep(){await this.$store.dispatch("deleteKeep",this.keep.id),this.$router.push("/myKeeps")},async SetValidVaults(){await this.$store.dispatch("getAllVaultKeeps");let t=this.$store.state.allVaultKeeps.filter(t=>t.keepId==this.$store.state.activeKeep.id&&t.userId==this.$auth.user.sub).map(t=>t.vaultId);this.$store.state.vaultKeepsFilteredByActiveKeep=this.$store.state.userVaults.filter(e=>!t.includes(e.id)),console.log("vaultKeepsFilteredByActiveKeep: ",this.$store.state.vaultKeepsFilteredByActiveKeep)}},components:{keep:G,vaultSelectButtonGroupColumn:re},mounted(){this.$store.state.allVaultKeeps.find(t=>t.vaultId==this.$store.state.activeVault.id&&t.keepId==this.$store.state.activeKeep.id)},destroyed(){this.$store.activeKeep={},this.$store.activeVaultKeep={}}},oe=ie,le=Object(p["a"])(oe,St,Ft,!1,null,"3a4de851",null),ne=le.exports,de=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-keeps-page bg-primary container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("create-keep"),a("userKeeps",{staticClass:"border border-warning rounded p-2 no-gutters"})],1)])])},ue=[],ce=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"keeps row mt-2"},[a("div",{staticClass:"col-md-12 bg-primary"},[a("div",{staticClass:"card-columns"},t._l(t.userKeeps,(function(t){return a("keep",{key:t.id,attrs:{keepData:t}})})),1)])])},pe=[],me={name:"user-keeps",data(){return{}},computed:{userKeeps(){return this.$store.state.userKeeps}},methods:{},created(){return this.$store.dispatch("getUserKeeps")},components:{keep:G}},ve=me,he=Object(p["a"])(ve,ce,pe,!1,null,"7074a6d8",null),be=he.exports,ge={name:"user-keeps-page",computed:{user(){return this.$store.state.user}},components:{userKeeps:be,createKeep:D},methods:{logout(){this.$store.dispatch("logout")}},created(){return this.$store.dispatch("getUserKeeps")}},we=ge,Ke=Object(p["a"])(we,de,ue,!1,null,null,null),fe=Ke.exports,ye=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vault-keep-details bg-primary"},[a("keep-details"),t._m(0),a("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog",id:"remove-keep-from-vault-modal"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border border-white"},[a("div",{staticClass:"modal-header bg-primary text-white border border-white"},[a("h5",{staticClass:"modal-title"},[t._v('Remove "'+t._s(this.vaultKeep.name)+'" from "'+t._s(this.$store.state.activeVault.name)+'"?')])]),a("div",{staticClass:"modal-body bg-success text-white"},[a("p",[t._v(' Are you sure you want to remove "'+t._s(this.vaultKeep.name)+'" from "'+t._s(this.$store.state.activeVault.name)+'"? '),a("br"),t._v("(It can still be added again later.) ")])]),a("div",{staticClass:"modal-footer bg-primary border border-white"},[a("button",{staticClass:"btn btn-primary text-white shadow",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Cancel")]),a("button",{staticClass:"btn btn-danger text-white border rounded shadow border-white",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.removeKeepFromVault()}}},[t._v('Remove "'+t._s(this.vaultKeep.name)+'" from "'+t._s(this.$store.state.activeVault.name)+'"')])])])])])],1)},Ce=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center my-2"},[a("button",{staticClass:"btn btn-light text-white rounded border shadow w-50 bg-danger",attrs:{"data-target":"#remove-keep-from-vault-modal","data-toggle":"modal"}},[t._v("Remove Keep From This Vault")])])}],_e={name:"vault-keep-details",data(){return{updatedKeep:{}}},computed:{vaultKeep(){return this.$store.state.activeVaultKeep}},methods:{removeKeepFromVault(){this.$store.dispatch("getAllVaultKeeps"),this.updatedKeep.keeps=--this.vaultKeep.keeps,console.log("keeps count: ",this.vaultKeep.keeps,this.updatedKeep),this.updatedKeep.id=this.vaultKeep.id;let t=this.$store.state.allVaultKeeps.find(t=>t.vaultId==this.$store.state.activeVault.id&&t.keepId==this.$store.state.activeKeep.id);this.$store.dispatch("editKeep",this.updatedKeep),this.$store.dispatch("removeKeepFromVault",t.id),this.$router.push("/vault/"+this.$store.state.activeVault.id)}},destroyed(){this.$store.activeVaultKeep={}},components:{KeepDetails:ne}},$e=_e,ke=Object(p["a"])($e,ye,Ce,!1,null,"51b5965c",null),xe=ke.exports;s["a"].use(f["a"]);var Ve=new f["a"]({routes:[{path:"/",name:"home",component:vt},{path:"/dashboard",name:"dashboard",component:ft,beforeEnter:h["b"]},{path:"/vault/:id",name:"vault",component:Mt,beforeEnter:h["b"]},{path:"/myKeeps",name:"userKeepsPage",component:fe,beforeEnter:h["b"]},{path:"/keep/:id",name:"keep",component:ne},{path:"/vault/:id/keep/:id",name:"vaultKeepDetails",component:xe,beforeEnter:h["b"]}]}),De=a("2f62");s["a"].use(De["a"]);let Ae=location.host.includes("localhost")?"https://localhost:5001/":"/",Ee=d.a.create({baseURL:Ae+"api/",timeout:3e3,withCredentials:!0});var Pe=new De["a"].Store({state:{allKeeps:[],userKeeps:[],userVaults:[],vaultKeeps:[],allVaultKeeps:[],activeKeep:{},activeVault:{},activeVaultKeep:{},vaultKeepsFilteredByActiveKeep:[]},mutations:{setAllKeeps(t,e){t.allKeeps=e},setUserKeeps(t,e){t.userKeeps=e},setActiveKeep(t,e){t.activeKeep=e},setUserVaults(t,e){t.userVaults=e},setActiveVault(t,e){t.activeVault=e},setVaultKeeps(t,e){t.vaultKeeps=e},setActiveVaultKeep(t,e){t.activeVaultKeep=e},setAllVaultKeeps(t,e){t.allVaultKeeps=e}},actions:{setBearer({},t){Ee.defaults.headers.authorization=t},resetBearer(){Ee.defaults.headers.authorization=""},async getAllKeeps({commit:t}){try{let e=await Ee.get("keeps");t("setAllKeeps",e.data)}catch(e){console.error(e)}},async getUserKeeps({commit:t}){try{let e=await Ee.get("keeps/user");t("setUserKeeps",e.data)}catch(e){console.error(e)}},async getKeepById({commit:t},e){try{let a=await Ee.get("keeps/"+e);t("setActiveKeep",a.data)}catch(a){console.error(a)}},async getVaultKeepById({commit:t,dispatch:e},a){try{let e=await Ee.get("keeps/"+a);t("setActiveVaultKeep",e.data)}catch(s){console.error(s)}},async getKeepsByVaultId({commit:t},e){try{let a=await Ee.get("vaults/"+e+"/keeps");t("setVaultKeeps",a.data)}catch(a){console.error(a)}},async createKeep({dispatch:t},e){try{await Ee.post("keeps",e);t("getAllKeeps")}catch(a){console.error(a)}},async getUserVaults({commit:t}){try{let e=await Ee.get("vaults");t("setUserVaults",e.data)}catch(e){console.error(e)}},async getVaultById({commit:t},e){try{let a=await Ee.get("vaults/"+e);t("setActiveVault",a.data)}catch(a){console.error(a)}},async saveKeepToVault({dispatch:t},e){try{Ee.post("vaultkeeps",e);t("getAllVaultKeeps")}catch(a){console.error(a)}},async removeKeepFromVault({dispatch:t},e){try{await Ee.delete("vaultkeeps/"+e),t("getUserKeeps")}catch(a){console.error(a)}},async createVault({dispatch:t},e){try{let a=await Ee.post("vaults",e.newVault),s={};s.vaultId=a.data.id,s.keepId=e.keepId,t("saveKeepToVault",s)}catch(a){console.error(a)}},async deleteVault({dispatch:t},e){try{await Ee.delete("vaults/"+e),t("getUserVaults")}catch(a){console.error(a)}},async deleteKeep({dispatch:t},e){try{await Ee.delete("keeps/"+e),t("getUserKeeps")}catch(a){console.error(a)}},async editKeep({dispatch:t},e){try{let a=await Ee.put("keeps/"+e.id,e);t("getAllKeeps",a.data)}catch(a){console.error(a)}},async getAllVaultKeeps({dispatch:t,commit:e}){try{let t=await Ee.get("vaultKeeps");e("setAllVaultKeeps",t.data)}catch(a){console.error(a)}}}});const je="dev---adzyuf.auth0.com",Oe="http://keople.com",Be="TNqj42OJQsYTpnlnwkFyEC807yiHTdZ2";s["a"].use(h["a"],{domain:je,clientId:Be,audience:Oe,onRedirectCallback:t=>{Ve.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:Ve,store:Pe,render:function(t){return t(K)}}).$mount("#app")},"5c64":function(t,e,a){"use strict";var s=a("d32a"),r=a.n(s);r.a},d32a:function(t,e,a){}});