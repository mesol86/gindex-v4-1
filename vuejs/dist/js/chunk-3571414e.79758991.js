(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3571414e"],{d40f:function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{class:s.ismobile?"content mx-1 mt-2 px-0":"content ml-5 mt-2 mr-5 pl-5 pr-5"},[t("div",{staticClass:"loading"},[t("loading",{attrs:{active:s.loading,"can-cancel":!1,"is-full-page":s.fullpage},on:{"update:active":function(e){s.loading=e}}})],1),t("div",{staticClass:"columns is-vcentered is-centered is-multiline"},[t("div",{staticClass:"column is-half"},[t("section",{staticClass:"hero is-black is-medium"},[t("div",{staticClass:"hero-body"},[t("div",{staticClass:"container"},[t("div",{staticClass:"tile is-ancestor"},[t("div",{staticClass:"tile is-parent"},[t("article",{staticClass:"tile has-text-centered is-child notification is-primary"},[s._m(0),t("p",{staticClass:"subtitle"},[s._v("Login")]),t("div",{staticClass:"content"},[t("p",{staticClass:"has-text-dark has-text-weight-semibold"},[s._v("Login to this Website to Continue.")]),t("p",{staticClass:"has-text-dark"},[s._v("You are Just a Page from Experiencing the Glory.")]),t("button",{staticClass:"button mb-3",on:{click:function(e){s.hyInput=!s.hyInput}}},[s._m(1),t("span",[s._v("Hybrid Login")])]),t("form",{directives:[{name:"show",rawName:"v-show",value:s.hyInput,expression:"hyInput"}],on:{submit:function(e){return e.preventDefault(),s.handleHybrid(e)}}},[t("div",{staticClass:"columns is-mobile is-centered is-multiline is-vcentered"},[t("div",{staticClass:"column is-four-fifths"},[t("div",{staticClass:"field"},[t("p",{staticClass:"control has-icons-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.hypassword,expression:"hypassword"}],staticClass:"input is-rounded",attrs:{id:"hypassword",type:"password",placeholder:"Enter Your Hybrid Password",required:""},domProps:{value:s.hypassword},on:{input:function(e){e.target.composing||(s.hypassword=e.target.value)}}}),s._m(2)])])]),s._m(3)])])])])])])])])])]),t("div",{staticClass:"column is centered has-text-centered has-text-white is-two-fifths"},[t("article",{class:s.errormessageVisibility?"message is-danger":"message is-hidden is-danger"},[t("div",{staticClass:"message-header"},[t("p",[s._v("Error Logging in!!")]),t("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(e){s.errormessageVisibility=!1}}})]),t("div",{staticClass:"message-body"},[s._v(" "+s._s(s.resultmessage)+" ")])]),t("article",{class:s.successmessageVisibility?"message is-success":"message is-hidden is-success"},[t("div",{staticClass:"message-header"},[t("p",[s._v("Success !")]),t("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(e){s.successmessageVisibility=!1}}})]),t("div",{staticClass:"message-body"},[s._v(" "+s._s(s.resultmessage)+" ")])]),t("h2",{staticClass:"title has-text-weight-bold has-text-white"},[s._v("Login")]),t("form",{on:{submit:function(e){return e.preventDefault(),s.handleSubmit(e)}}},[t("div",{staticClass:"field"},[t("p",{staticClass:"control has-icons-left has-icons-right"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.email,expression:"email"}],staticClass:"input is-rounded",attrs:{placeholder:"Email",id:"logemail",type:"email",required:"",autofocus:""},domProps:{value:s.email},on:{input:function(e){e.target.composing||(s.email=e.target.value)}}}),s._m(4),s._m(5)])]),t("div",{staticClass:"field"},[t("p",{staticClass:"control has-icons-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"input is-rounded",attrs:{id:"logpassword",type:"password",placeholder:"Password",required:""},domProps:{value:s.password},on:{input:function(e){e.target.composing||(s.password=e.target.value)}}}),s._m(6)])]),t("button",{class:s.loading?"button is-rounded is-loading is-danger is-medium":"button is-rounded is-medium is-danger",attrs:{disabled:s.disabled}},[s._m(7),t("span",[s._v("Login")])])])])])])},i=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("p",{staticClass:"title has-text-dark"},[t("span",{staticClass:"icon"},[t("i",{staticClass:"fab fa-superpowers"})]),t("span",[s._v(" Ahh!! Perfect !")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon"},[t("i",{staticClass:"fas fa-dolly"})])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"fas fa-lock"})])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"column is-one-fifth"},[t("button",{staticClass:"button is-danger"},[t("span",{staticClass:"icon"},[t("i",{staticClass:"fas fa-sign-in-alt"})]),t("span",{staticClass:"is-hidden-mobile"},[s._v("Login")])])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"fas fa-envelope"})])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon is-small is-right"},[t("i",{staticClass:"fas fa-check"})])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"fas fa-lock"})])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon is-medium"},[t("i",{staticClass:"fas fa-shipping-fast"})])}],r=(t("99af"),t("d81d"),t("b0c0"),t("d3b7"),t("25f0"),t("96cf"),t("1da1")),n=t("9062"),o=t.n(n),l=(t("e40d"),{components:{Loading:o.a},data:function(){return{email:"",password:"",hypassword:"",disabled:!0,emailFocus:!0,gds:[],hyInput:!1,currgd:{},passwordFocus:!1,resultmessage:"",databasemessage:"",loading:!1,fullpage:!0,errormessageVisibility:!1,successmessageVisibility:!1}},methods:{handleSubmit:function(s){var e=this;this.loading=!0,s.preventDefault(),this.password.length>0&&this.email.length>0&&this.$http.post(window.apiRoutes.loginRoute,{email:this.email,password:this.password}).then((function(s){if(s.data.auth&&s.data.registered){localStorage.setItem("tokendata",e.$hash.AES.encrypt(JSON.stringify({token:s.data.token,issuedate:s.data.issuedat,expirydate:s.data.expiryat}),e.$pass).toString()),localStorage.setItem("userdata",e.$hash.AES.encrypt(JSON.stringify(s.data.tokenuser),e.$pass).toString());var t=localStorage.getItem("tokendata"),a=localStorage.getItem("userdata");if(null!=t&&null!=a){var i=JSON.parse(e.$hash.AES.decrypt(t,e.$pass).toString(e.$hash.enc.Utf8)),r=JSON.parse(e.$hash.AES.decrypt(a,e.$pass).toString(e.$hash.enc.Utf8));e.loading=!1,e.errormessageVisibility=!1,e.successmessageVisibility=!0,e.resultmessage="Logged in Successfully as ".concat(r.name,". Your token will expire at ").concat(e.$moment(i.expirydate).format("dddd, MMMM Do YYYY [at] hh:mm A"),"."),e.$bus.$emit("logged","User Logged"),setTimeout((function(){null!=e.$route.params.nextUrl?e.$router.push({name:"results",params:{id:e.currgd.id,cmd:"result",success:!0,data:"Log in Successfull. You Will be Redirected Through a Secure Channel.",redirectUrl:e.$route.params.nextUrl}}):e.$router.push({name:"results",params:{id:e.currgd.id,cmd:"result",success:!0,tocmd:"home",data:"Log in Successfull. You Will be Redirected Through a Secure Channel.",redirectUrl:"/"}})}),500)}}else e.errormessageVisibility=!0,e.successmessageVisibility=!1,e.loading=!1,e.resultmessage=s.data.message}))},handleHybrid:function(){var s=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var t,a,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s.loading=!0,console.log(s.hypassword),t=window.gdHybridPass,e.next=5,s.$saltIt.compareSync(s.hypassword,t);case 5:if(a=e.sent,!a){e.next=17;break}return console.log(a),i={user:!0,name:"Anon",email:"anonymous@gmail.com",registeredDate:Date.now(),role:"User",admin:!1,superadmin:!1,verified:!0},e.next=11,localStorage.setItem("hybridToken",s.$hash.AES.encrypt(JSON.stringify(i),s.$pass).toString());case 11:return e.next=13,JSON.parse(s.$hash.AES.decrypt(localStorage.getItem("hybridToken"),s.$pass).toString(s.$hash.enc.Utf8));case 13:r=e.sent,r.user?(console.log("Super Pa"),console.log(localStorage.getItem("hybridToken")),s.loading=!1,s.errormessageVisibility=!1,s.successmessageVisibility=!0,s.resultmessage="Logged in Successfully as Guest User.You will Log Out after this Browser Session.",s.$bus.$emit("logged","User Logged"),setTimeout((function(){s.$router.push({name:"results",params:{id:s.currgd.id,cmd:"result",success:!0,tocmd:"home",data:"Log in Successfull. You Will be Redirected Through a Secure Channel.",redirectUrl:"/"}})}),500)):(s.loading=!1,s.errormessageVisibility=!0,s.successmessageVisibility=!1,s.resultmessage="Hybrid Password is Wrong"),e.next=21;break;case 17:s.loading=!1,s.errormessageVisibility=!0,s.successmessageVisibility=!1,s.resultmessage="Hybrid Password is Wrong";case 21:case"end":return e.stop()}}),e)})))()},checkParams:function(){console.log("checked"),this.$route.params.email?(this.email=this.$route.params.email,this.emailFocus=!1,this.passwordFocus=!0):(this.emailFocus=!0,this.passwordFocus=!1)},validateData:function(){var s=/[a-z1-9].+@+[a-z1-9A-Z].+[.][a-z]+/g;s.test(this.email)&&this.password.length>0?this.disabled=!1:this.disabled=!0}},computed:{ismobile:function(){var s=window.innerWidth>0?window.innerWidth:screen.width;return!(s>966)}},mounted:function(){this.checkParams()},created:function(){if(window.addEventListener("beforeunload",(function(){localStorage.removeItem("hybridToken")})),window.gds){this.gds=window.gds.map((function(s,e){return{name:s,id:e}}));var s=this.$route.params.id;this.gds&&(this.currgd=this.gds[s])}},watch:{email:"validateData",password:"validateData"}}),c=l,d=t("2877"),u=Object(d["a"])(c,a,i,!1,null,null,null);e["default"]=u.exports},e40d:function(s,e,t){}}]);