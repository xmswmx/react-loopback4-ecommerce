(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"2SVd":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5oMp":function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"6WWA":function(e,t){e.exports={API_ROOT_URL:"/api",USERS_API:"/users"}},"9rSQ":function(e,t,n){"use strict";var a=n("xTJ+");function r(){this.handlers=[]}r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){a.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r},CgaS:function(e,t,n){"use strict";var a=n("xTJ+"),r=n("MLWZ"),o=n("9rSQ"),s=n("UnBK"),i=n("SntB");function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=i(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=i(this.defaults,e),r(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},a.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(a.merge(n||{},{method:e,url:t}))}})),a.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(a.merge(r||{},{method:e,url:t,data:n}))}})),e.exports=c},DfZB:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},HSsa:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(t,n)}}},"IA+c":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",(function(){return b}));var a=n("0iUn"),r=n("sLSF"),o=n("MI3g"),s=n("a7VT"),i=n("AT/M"),c=n("Tit0"),l=n("q1tI"),u=n.n(l),d=n("NvAs"),f=n("bmR9"),m=n("gc4K"),h=n("Bqj+"),p=(n("vDqi"),u.a.createElement),b=(n("6WWA"),function(t){function n(t){var r;return Object(a.a)(this,n),(r=Object(o.a)(this,Object(s.a)(n).call(this,t))).signIn=r.signIn.bind(Object(i.a)(r)),r.signUp=r.signUp.bind(Object(i.a)(r)),r.state={url:e.env.url,title:"Create an iShop account",subTitle:"Already have an account ?",signUp:!0},r}return Object(c.a)(n,t),Object(r.a)(n,[{key:"signUp",value:function(){this.setState({title:"Create an iShop account",subTitle:"Already have an account ?",signUp:!this.state.signUp})}},{key:"signIn",value:function(){console.log(e.env.REACT_APP_API_ROOT),this.setState({title:"Sign-in to your ishop account",subTitle:"Don't have an account yet ?",signUp:!this.state.signUp})}},{key:"render",value:function(){var e=this;return p(d.a,{title:"iShop Registeration/Login",description:"iShop Registeration/Login"},p(h.b,null,p("div",{className:"container __registeration"},p("div",{className:"row"},p("div",{className:"col-xs-12"},p("h2",{className:"text-center __registeration __registeration_header"}," ",this.state.title,"  "),p("h4",{className:"text-center __registeration __registeration_sign_in"}," ",this.state.subTitle,"  ",this.state.signUp?p("a",{onClick:function(){return e.signIn()}}," Sign In "):p("a",{onClick:function(){return e.signUp()}}," Sign Up ")," "),this.state.signUp?p(f.a,null):p(m.a,null))))))}}]),n}(u.a.Component))}.call(this,n("8oxB"))},JEQr:function(e,t,n){"use strict";(function(t){var a=n("xTJ+"),r=n("yK9s"),o={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!a.isUndefined(e)&&a.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i={adapter:function(){var e;return"undefined"!==typeof XMLHttpRequest?e=n("tQ2B"):"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t)&&(e=n("tQ2B")),e}(),transformRequest:[function(e,t){return r(t,"Accept"),r(t,"Content-Type"),a.isFormData(e)||a.isArrayBuffer(e)||a.isBuffer(e)||a.isStream(e)||a.isFile(e)||a.isBlob(e)?e:a.isArrayBufferView(e)?e.buffer:a.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):a.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],(function(e){i.headers[e]={}})),a.forEach(["post","put","patch"],(function(e){i.headers[e]=a.merge(o)})),e.exports=i}).call(this,n("8oxB"))},LYNF:function(e,t,n){"use strict";var a=n("OH9c");e.exports=function(e,t,n,r,o){var s=new Error(e);return a(s,t,n,r,o)}},Lmem:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,n){"use strict";var a=n("xTJ+");function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(a.isURLSearchParams(t))o=t.toString();else{var s=[];a.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(a.isArray(e)?t+="[]":e=[e],a.forEach(e,(function(e){a.isDate(e)?e=e.toISOString():a.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))})))})),o=s.join("&")}if(o){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},OH9c:function(e,t,n){"use strict";e.exports=function(e,t,n,a,r){return e.config=t,n&&(e.code=n),e.request=a,e.response=r,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,t,n){"use strict";var a=n("xTJ+");e.exports=a.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var a=e;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=a.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},QojX:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("TSYQ"),s=n.n(o),i=n("q1tI"),c=n.n(i),l=(n("K9S6"),n("Mlt0")),u=n("9Iqo"),d=n("vUet"),f=c.a.forwardRef((function(e,t){var n=e.id,o=e.bsPrefix,l=e.bsCustomPrefix,f=e.className,m=e.isValid,h=e.isInvalid,p=e.isStatic,b=e.as,v=void 0===b?"input":b,g=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),y=Object(i.useContext)(u.a),w=y.controlId;return o=y.custom?Object(d.b)(l,"custom-control-input"):Object(d.b)(o,"form-check-input"),c.a.createElement(v,Object(a.a)({},g,{ref:t,id:n||w,className:s()(f,o,m&&"is-valid",h&&"is-invalid",p&&"position-static")}))}));f.displayName="FormCheckInput",f.defaultProps={type:"checkbox"};var m=f,h=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.bsCustomPrefix,l=e.className,f=e.htmlFor,m=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),h=Object(i.useContext)(u.a),p=h.controlId;return n=h.custom?Object(d.b)(o,"custom-control-label"):Object(d.b)(n,"form-check-label"),c.a.createElement("label",Object(a.a)({},m,{ref:t,htmlFor:f||p,className:s()(l,n)}))}));h.displayName="FormCheckLabel";var p=h,b=c.a.forwardRef((function(e,t){var n=e.id,o=e.bsPrefix,f=e.bsCustomPrefix,h=e.inline,b=e.disabled,v=e.isValid,g=e.isInvalid,y=e.feedback,w=e.className,x=e.style,S=e.title,E=e.type,j=e.label,O=e.children,N=e.custom,C=e.as,L=void 0===C?"input":C,R=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),T="switch"===E||N;o=T?Object(d.b)(f,"custom-control"):Object(d.b)(o,"form-check");var k=Object(i.useContext)(u.a).controlId,I=Object(i.useMemo)((function(){return{controlId:n||k,custom:T}}),[k,T,n]),P=null!=j&&!1!==j&&!O,A=c.a.createElement(m,Object(a.a)({},R,{type:"switch"===E?"checkbox":E,ref:t,isValid:v,isInvalid:g,isStatic:!P,disabled:b,as:L}));return c.a.createElement(u.a.Provider,{value:I},c.a.createElement("div",{style:x,className:s()(w,o,T&&"custom-"+E,h&&o+"-inline")},O||c.a.createElement(c.a.Fragment,null,A,P&&c.a.createElement(p,{title:S},j),(v||g)&&c.a.createElement(l.a,{type:v?"valid":"invalid"},y))))}));b.displayName="FormCheck",b.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},b.Input=m,b.Label=p;var v=b,g=n("jDKy"),y=n("HRRZ"),w=(n("2W6z"),n("JI6e")),x=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.column,l=e.srOnly,f=e.className,m=e.htmlFor,h=Object(r.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),p=Object(i.useContext)(u.a).controlId;n=Object(d.b)(n,"form-label");var b=s()(f,n,l&&"sr-only",o&&"col-form-label");return m=m||p,o?c.a.createElement(w.a,Object(a.a)({as:"label",className:b,htmlFor:m},h)):c.a.createElement("label",Object(a.a)({ref:t,className:b,htmlFor:m},h))}));x.displayName="FormLabel",x.defaultProps={column:!1,srOnly:!1};var S=x,E=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.as,l=void 0===i?"small":i,u=e.muted,f=Object(r.a)(e,["bsPrefix","className","as","muted"]);return n=Object(d.b)(n,"form-text"),c.a.createElement(l,Object(a.a)({},f,{ref:t,className:s()(o,n,u&&"text-muted")}))}));E.displayName="FormText";var j=E,O=c.a.forwardRef((function(e,t){return c.a.createElement(v,Object(a.a)({},e,{ref:t,type:"switch"}))}));O.displayName="Switch",O.Input=v.Input,O.Label=v.Label;var N=O,C=n("YdCC"),L=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.inline,i=e.className,l=e.validated,u=e.as,f=void 0===u?"form":u,m=Object(r.a)(e,["bsPrefix","inline","className","validated","as"]);return n=Object(d.b)(n,"form"),c.a.createElement(f,Object(a.a)({},m,{ref:t,className:s()(i,l&&"was-validated",o&&n+"-inline")}))}));L.displayName="Form",L.defaultProps={inline:!1},L.Row=Object(C.a)("form-row"),L.Group=y.a,L.Control=g.a,L.Check=v,L.Switch=N,L.Label=S,L.Text=j;t.a=L},"Rn+g":function(e,t,n){"use strict";var a=n("LYNF");e.exports=function(e,t,n){var r=n.config.validateStatus;!r||r(n.status)?e(n):t(a("Request failed with status code "+n.status,n.config,null,n.request,n))}},SntB:function(e,t,n){"use strict";var a=n("xTJ+");e.exports=function(e,t){t=t||{};var n={},r=["url","method","params","data"],o=["headers","auth","proxy"],s=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];a.forEach(r,(function(e){"undefined"!==typeof t[e]&&(n[e]=t[e])})),a.forEach(o,(function(r){a.isObject(t[r])?n[r]=a.deepMerge(e[r],t[r]):"undefined"!==typeof t[r]?n[r]=t[r]:a.isObject(e[r])?n[r]=a.deepMerge(e[r]):"undefined"!==typeof e[r]&&(n[r]=e[r])})),a.forEach(s,(function(a){"undefined"!==typeof t[a]?n[a]=t[a]:"undefined"!==typeof e[a]&&(n[a]=e[a])}));var i=r.concat(o).concat(s),c=Object.keys(t).filter((function(e){return-1===i.indexOf(e)}));return a.forEach(c,(function(a){"undefined"!==typeof t[a]?n[a]=t[a]:"undefined"!==typeof e[a]&&(n[a]=e[a])})),n}},UnBK:function(e,t,n){"use strict";var a=n("xTJ+"),r=n("xAGQ"),o=n("Lmem"),s=n("JEQr");function i(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return i(e),e.headers=e.headers||{},e.data=r(e.data,e.headers,e.transformRequest),e.headers=a.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),a.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return i(e),t.data=r(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(i(e),t&&t.response&&(t.response.data=r(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},aXwN:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("zM5D"),s=n("cWnB"),i=r.a.createElement;t.a=function(e){return i(r.a.Fragment,null,i(o.a,{show:e.show,onHide:e.handleClose},i(o.a.Header,null,i(o.a.Title,{className:"text-center font-weight-bold text-uppercase"},"VALIDATION ERROR")),i(o.a.Body,{className:"bg-danger font-weight-bold error"},e.errorMessage),i(o.a.Footer,null,i(s.a,{variant:"success",onClick:e.handleClose},"Close"))))}},bmR9:function(e,t,n){"use strict";n.d(t,"a",(function(){return L}));var a=n("dfwq"),r=n("ln6h"),o=n.n(r),s=n("eVuF"),i=n.n(s),c=n("9Jkg"),l=n.n(c),u=n("0iUn"),d=n("sLSF"),f=n("MI3g"),m=n("a7VT"),h=n("AT/M"),p=n("Tit0"),b=n("vYYK"),v=n("q1tI"),g=n.n(v),y=n("QojX"),w=n("cJN8"),x=n("AKbA"),S=n("Bqj+"),E=(n("aXwN"),n("Cj2W")),j=g.a.createElement,O=n("vDqi"),N=n("6WWA"),C=new x.a,L=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(f.a)(this,Object(m.a)(t).call(this,e))).submitRef=g.a.createRef(),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.onChange=n.onChange.bind(Object(h.a)(n)),n.handleSubmitState=n.handleSubmitState.bind(Object(h.a)(n)),n.checkEmailAvailability=n.checkEmailAvailability.bind(Object(h.a)(n)),n.handleShow=n.handleShow.bind(Object(h.a)(n)),n.removeInvalidElement=n.removeInvalidElement.bind(Object(h.a)(n)),n.handleClose=n.handleClose.bind(Object(h.a)(n)),n.comparePasswords=n.comparePasswords.bind(Object(h.a)(n)),n.state={disableSubmit:!0,formFields:[],showEmailLoader:!1,showError:!1,errorMessage:"",submitLabel:"Register",registered:!1,registering:!1,failed:!1},n.modalProps={onHide:n.onHide,message:"This email is already reserved .",header:"Validation Error"},n.formData=[{label:"First Name",type:"text",placeholder:"Enter your firstname",controlId:"firstNameController",validate:!0,required:!0,validationRules:{minLength:6,maxLength:12},class:"default",change:n.onChange,name:"firstName",showLoader:!1},{label:"Last Name",type:"text",placeholder:"Enter your lastname",controlId:"lastNameController",validate:!0,required:!0,class:"default",validationRules:{minLength:6,maxLength:12},change:n.onChange,name:"lasName",showLoader:!1},{label:"Email Address",type:"email",placeholder:"Enter your emil address",controlId:"emailController",note:"We'll never share your email with anyone else.",validate:!0,required:!0,class:"text-muted default",validationRules:{emailValidator:""},change:n.onChange,name:"email",showLoader:!1},{label:"Password",type:"password",placeholder:"Enter your password",controlId:"passwordController",validate:!0,required:!0,class:"default",validationRules:{minLength:8,passwordValidator:""},change:n.onChange,note:"Your password should be at least 8 characters long alphanumeric .",name:"password",showLoader:!1},{label:"Confirm Password",type:"password",placeholder:"Enter your password",controlId:"confirmPasswordController",validate:!0,required:!0,class:"default",validationRules:{minLength:8,passwordValidator:"",dependents:["passwordController"]},change:n.onChange,note:"This field should match the above one .",name:"cPassword",showLoader:!1},{note:"By creating an account, you agree to our Conditions of Use and Privacy Notice.",type:"none",class:"text-muted"}],n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"handleShow",value:function(){this.setState({showError:!0})}},{key:"handleClose",value:function(){this.setState({showError:!1})}},{key:"handleSubmit",value:function(){event.preventDefault();var e=this.comparePasswords(),t=this;if(console.log(this.state.formFields),e){this.setState({submitLabel:"Please wait ..",registering:!0,showError:!1,errorMessage:""}),this.handleSubmitState(!0);var n={};this.state.formFields.map((function(e,t){n[e.name]=e.value})),delete n.cPassword,O.post(N.USERS_API,n).then((function(e){console.log(e)})).catch((function(e){console.log("Str Errr :"+l()(e));var n="";e&&(n="Error occured ."),t.setState({submitLabel:"Register",registering:!1,showError:!0,errorMessage:n}),t.handleSubmitState(!1)}))}}},{key:"handleSubmitState",value:function(e){e?C.disabledElem(this.submitRef):C.enableElem(this.submitRef)}},{key:"comparePasswords",value:function(){var e=!0,t=this.state.formFields.find((function(e){return"password"==e.name})),n=this.state.formFields.find((function(e){return"cPassword"==e.name}));return void 0!==t&&void 0!==n&&t.value!==n.value&&(this.setState({showError:!0,errorMessage:"Sorry, your passwords are not matching !",registering:!1}),n.ref.classList.remove("valid"),n.ref.classList.add("in-valid"),this.removeInvalidElement(n),e=!1,C.disabledElem(this.submitRef)),e}},{key:"checkEmailAvailability",value:function(e,t){var n=this;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return this.setState({showEmailLoader:!0}),a.next=3,o.a.awrap(new i.a((function(a){setTimeout((function(){var r=e[0][0],o=r.value,s=r.ref;n.state.formFields.find((function(e){return"email"==e.name}));"amine.admin@mail.com"!==o&&(n.setState({showError:!0,errorMessage:"The email ** ".concat(o," ** is already registered in our database, please use a different one or reset your password .")}),s.classList.remove("valid"),s.classList.add("in-valid"),e=[],n.removeInvalidElement(t)),console.log("after 1 sec"),a()}),1e3)})));case 3:return a.next=5,o.a.awrap(new i.a((function(e){setTimeout((function(){n.setState({showEmailLoader:!1}),e()}),3e3)})));case 5:case"end":return a.stop()}}),null,this)}},{key:"onChange",value:function(){var e=this,t=[],n=this,r=JSON.parse(event.target.dataset.formdata);0==(t=C.validate(event))[0].length?this.removeInvalidElement(r):(console.log("immediate"),t[0].map((function(t,r){void 0==n.state.formFields.find((function(e){return e.name==t.name}))&&n.setState({formFields:[].concat(Object(a.a)(n.state.formFields),[t])},(function(){e.handleSubmitState(!(5==n.state.formFields.length))}))})))}},{key:"removeInvalidElement",value:function(e){var t=this;this.setState({formFields:this.state.formFields.filter((function(t){return t.name!==e.name}))},(function(){t.handleSubmitState(!(5==t.state.formFields.length))}))}},{key:"componentDidMount",value:function(){C.disabledElem(this.submitRef)}},{key:"render",value:function(){var e=this;this.context.value;return j("div",{className:"container __registeration_form"},j("div",{className:"row"},j("div",{className:"col-xs-12"},j("div",{className:"__registration_form_wrapper"},j(y.a,null,this.formData.map((function(t,n){return"email"==t.name&&(t.showLoader=e.state.showEmailLoader),j(w.a,{key:n,props:t})})),j(y.a.Group,{controlId:"formBasicPassword",className:"col-xs-5",style:{paddingLeft:0}},j("a",{ref:this.submitRef,className:"customButton __checkout_confirm_btn",onClick:this.handleSubmit},this.state.submitLabel,this.state.registered?j(E.d,{label:"",paragraph:!1,class:"instock"}):null,this.state.registering?j(E.c,{label:"",paragraph:!1}):null,this.state.failed?j(E.a,{label:"",paragraph:!1,class:"outofstock"}):null)),this.state.showError?j(y.a.Group,{controlId:"formBasicPassword",className:"col-xs-7 reg-error"},this.state.errorMessage):null)))))}}]),t}(g.a.PureComponent);Object(b.a)(L,"contextType",S.a)},cJN8:function(e,t,n){"use strict";var a=n("9Jkg"),r=n.n(a),o=n("q1tI"),s=n.n(o),i=n("QojX"),c=s.a.createElement,l=function(e){return c(i.a.Text,{className:e.data&&e.data.class?e.data.class:""},e.data&&e.data.note?e.data.note:"")},u=function(e){return c("div",{className:"fa-1x"},e.formData.note?c(l,{data:e.formData}):null,e.formData.showLoader?c("i",{className:"fas fa-sync fa-spin",style:{marginLeft:"2rem"}}):null)};t.a=function(e){var t=e.props;return"none"==t.type?c(l,{note:t}):"select"==t.type?c(i.a.Group,{controlId:t.controlId},c(i.a.Label,null,t.label),c("select",{className:t.class,onChange:t.change,inputref:t.controlId,"data-formdata":r()(t)},t.options.map((function(e,t){return c("option",{key:t,value:e.key},e.label)})))):c(i.a.Group,{controlId:t.controlId},c(i.a.Label,null,t.label),c(i.a.Control,{onChange:t.change,className:t.class,inputref:t.controlId,"data-formdata":r()(t),type:t.type,placeholder:t.placeholder}),c(u,{formData:t}))}},cWnB:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("TSYQ"),s=n.n(o),i=n("q1tI"),c=n.n(i),l=n("vUet"),u=n("dbZe"),d=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.variant,i=e.size,d=e.active,f=e.className,m=e.block,h=e.type,p=e.as,b=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),v=Object(l.b)(n,"btn"),g=s()(f,v,d&&"active",v+"-"+o,m&&v+"-block",i&&v+"-"+i);if(b.href)return c.a.createElement(u.a,Object(a.a)({},b,{as:p,ref:t,className:s()(g,b.disabled&&"disabled")}));t&&(b.ref=t),p||(b.type=h);var y=p||"button";return c.a.createElement(y,Object(a.a)({},b,{className:g}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},t.a=d},dfwq:function(e,t,n){"use strict";var a=n("p0XB"),r=n.n(a);var o=n("d04V"),s=n.n(o),i=n("yLu3"),c=n.n(i);function l(e){return function(e){if(r()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(c()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return s()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",(function(){return l}))},endd:function(e,t,n){"use strict";function a(e){this.message=e}a.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},a.prototype.__CANCEL__=!0,e.exports=a},eqyj:function(e,t,n){"use strict";var a=n("xTJ+");e.exports=a.isStandardBrowserEnv()?{write:function(e,t,n,r,o,s){var i=[];i.push(e+"="+encodeURIComponent(t)),a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},g7np:function(e,t,n){"use strict";var a=n("2SVd"),r=n("5oMp");e.exports=function(e,t){return e&&!a(t)?r(e,t):t}},gc4K:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var a=n("dfwq"),r=n("0iUn"),o=n("sLSF"),s=n("MI3g"),i=n("a7VT"),c=n("AT/M"),l=n("Tit0"),u=n("vYYK"),d=n("q1tI"),f=n.n(d),m=n("QojX"),h=n("cJN8"),p=n("AKbA"),b=n("Bqj+"),v=n("aXwN"),g=f.a.createElement,y=new p.a,w=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n.onChange=n.onChange.bind(Object(c.a)(n)),n.handleSubmitState=n.handleSubmitState.bind(Object(c.a)(n)),n.handleShow=n.handleShow.bind(Object(c.a)(n)),n.removeInvalidElement=n.removeInvalidElement.bind(Object(c.a)(n)),n.handleClose=n.handleClose.bind(Object(c.a)(n)),n.state={disableSubmit:!0,formFields:[],showEmailLoader:!1,showError:!1,errorMessage:""},n.modalProps={onHide:n.onHide,message:"This email is already reserved .",header:"Validation Error"},n.formData=[{label:"Email Address",type:"email",placeholder:"Enter your emil address",controlId:"emailController",validate:!0,required:!0,class:"text-muted default",validationRules:{emailValidator:""},change:n.onChange,name:"email",showLoader:!1},{label:"Password",type:"password",placeholder:"Enter your password",controlId:"passwordController",validate:!0,required:!0,class:"default",validationRules:{minLength:8,passwordValidator:""},change:n.onChange,name:"password",showLoader:!1}],n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"handleShow",value:function(){this.setState({showError:!0})}},{key:"handleClose",value:function(){this.setState({showError:!1})}},{key:"handleSubmit",value:function(){event.preventDefault()}},{key:"handleSubmitState",value:function(e){console.log("submit :: "+e),this.setState({disableSubmit:e})}},{key:"onChange",value:function(){var e=this,t=[],n=this,r=JSON.parse(event.target.dataset.formdata);0==(t=y.validate(event))[0].length?this.removeInvalidElement(r):(console.log("immediate"),t[0].map((function(t,r){void 0==n.state.formFields.find((function(e){return e.name==t.name}))&&n.setState({formFields:[].concat(Object(a.a)(n.state.formFields),[t])},(function(){e.handleSubmitState(!(2==n.state.formFields.length))}))})))}},{key:"removeInvalidElement",value:function(e){var t=this;this.setState({formFields:this.state.formFields.filter((function(t){return t.name!==e.name}))},(function(){t.handleSubmitState(!(2==t.state.formFields.length))}))}},{key:"login",value:function(){}},{key:"render",value:function(){var e=this;this.context.value;return g("div",{className:"container __registeration_form"},g("div",{className:"row"},g("div",{className:"col-xs-12"},g("div",{className:"__registration_form_wrapper"},g(m.a,{onSubmit:this.handleSubmit},this.formData.map((function(e,t){return g(h.a,{key:t,props:e})})),g(m.a.Group,{controlId:"formBasicPassword"},g("a",{className:"customButton __checkout_confirm_btn",onClick:function(){return e.login()}},"Login")))))),this.state.showError?g(v.a,{errorMessage:this.state.errorMessage,show:this.state.showError,handleClose:this.handleClose}):null)}}]),t}(f.a.PureComponent);Object(u.a)(w,"contextType",b.a)},"jfS+":function(e,t,n){"use strict";var a=n("endd");function r(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new a(e),t(n.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r},rhL0:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin-up/register",function(){return n("IA+c")}])},tQ2B:function(e,t,n){"use strict";var a=n("xTJ+"),r=n("Rn+g"),o=n("MLWZ"),s=n("g7np"),i=n("w0Vi"),c=n("OTTw"),l=n("LYNF");e.exports=function(e){return new Promise((function(t,u){var d=e.data,f=e.headers;a.isFormData(d)&&delete f["Content-Type"];var m=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",p=e.auth.password||"";f.Authorization="Basic "+btoa(h+":"+p)}var b=s(e.baseURL,e.url);if(m.open(e.method.toUpperCase(),o(b,e.params,e.paramsSerializer),!0),m.timeout=e.timeout,m.onreadystatechange=function(){if(m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in m?i(m.getAllResponseHeaders()):null,a={data:e.responseType&&"text"!==e.responseType?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:n,config:e,request:m};r(t,u,a),m=null}},m.onabort=function(){m&&(u(l("Request aborted",e,"ECONNABORTED",m)),m=null)},m.onerror=function(){u(l("Network Error",e,null,m)),m=null},m.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),u(l(t,e,"ECONNABORTED",m)),m=null},a.isStandardBrowserEnv()){var v=n("eqyj"),g=(e.withCredentials||c(b))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;g&&(f[e.xsrfHeaderName]=g)}if("setRequestHeader"in m&&a.forEach(f,(function(e,t){"undefined"===typeof d&&"content-type"===t.toLowerCase()?delete f[t]:m.setRequestHeader(t,e)})),a.isUndefined(e.withCredentials)||(m.withCredentials=!!e.withCredentials),e.responseType)try{m.responseType=e.responseType}catch(y){if("json"!==e.responseType)throw y}"function"===typeof e.onDownloadProgress&&m.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&m.upload&&m.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){m&&(m.abort(),u(e),m=null)})),void 0===d&&(d=null),m.send(d)}))}},vDqi:function(e,t,n){e.exports=n("zuR4")},w0Vi:function(e,t,n){"use strict";var a=n("xTJ+"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,s={};return e?(a.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=a.trim(e.substr(0,o)).toLowerCase(),n=a.trim(e.substr(o+1)),t){if(s[t]&&r.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},xAGQ:function(e,t,n){"use strict";var a=n("xTJ+");e.exports=function(e,t,n){return a.forEach(n,(function(n){e=n(e,t)})),e}},"xTJ+":function(e,t,n){"use strict";var a=n("HSsa"),r=Object.prototype.toString;function o(e){return"[object Array]"===r.call(e)}function s(e){return"undefined"===typeof e}function i(e){return null!==e&&"object"===typeof e}function c(e){return"[object Function]"===r.call(e)}function l(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),o(e))for(var n=0,a=e.length;n<a;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===r.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!==typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"===typeof e},isNumber:function(e){return"number"===typeof e},isObject:i,isUndefined:s,isDate:function(e){return"[object Date]"===r.call(e)},isFile:function(e){return"[object File]"===r.call(e)},isBlob:function(e){return"[object Blob]"===r.call(e)},isFunction:c,isStream:function(e){return i(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)},forEach:l,merge:function e(){var t={};function n(n,a){"object"===typeof t[a]&&"object"===typeof n?t[a]=e(t[a],n):t[a]=n}for(var a=0,r=arguments.length;a<r;a++)l(arguments[a],n);return t},deepMerge:function e(){var t={};function n(n,a){"object"===typeof t[a]&&"object"===typeof n?t[a]=e(t[a],n):t[a]="object"===typeof n?e({},n):n}for(var a=0,r=arguments.length;a<r;a++)l(arguments[a],n);return t},extend:function(e,t,n){return l(t,(function(t,r){e[r]=n&&"function"===typeof t?a(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(e,t,n){"use strict";var a=n("xTJ+");e.exports=function(e,t){a.forEach(e,(function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[a])}))}},zuR4:function(e,t,n){"use strict";var a=n("xTJ+"),r=n("HSsa"),o=n("CgaS"),s=n("SntB");function i(e){var t=new o(e),n=r(o.prototype.request,t);return a.extend(n,o.prototype,t),a.extend(n,t),n}var c=i(n("JEQr"));c.Axios=o,c.create=function(e){return i(s(c.defaults,e))},c.Cancel=n("endd"),c.CancelToken=n("jfS+"),c.isCancel=n("Lmem"),c.all=function(e){return Promise.all(e)},c.spread=n("DfZB"),e.exports=c,e.exports.default=c}},[["rhL0",1,2,0,17,18]]]);