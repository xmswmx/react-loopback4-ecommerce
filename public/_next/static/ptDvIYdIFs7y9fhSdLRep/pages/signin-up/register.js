(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/RR4":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=r.a.createElement;t.a=function(e){return o(r.a.Fragment,null,o("a",{className:"customButton",onClick:""!==e.Click?function(){e.callBackParam?e.Click(e.callBackParam):e.Click()}:null},o("i",{className:"".concat(e.fontName," __quick_item_font_awsome")}),e.buttonName))}},"2Eek":function(e,t,a){e.exports=a("W7oM")},"2SVd":function(e,t,a){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"4mXO":function(e,t,a){e.exports=a("7TPF")},"5oMp":function(e,t,a){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"5pKv":function(e,t){e.exports="\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},"6BQ9":function(e,t,a){e.exports=a("uekQ")},"6WWA":function(e,t){var a="".concat("/users","/login"),n="".concat("/users","/getProfile");e.exports={USERS_ROOT:"/users",REGISTER:"/users",LOGIN:a,GET_PROFILE:n}},"7TPF":function(e,t,a){a("AUvm"),e.exports=a("WEpk").Object.getOwnPropertySymbols},"7m0m":function(e,t,a){var n=a("Y7ZC"),r=a("uplh"),o=a("NsO/"),s=a("vwuL"),i=a("IP1Z");n(n.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,a,n=o(e),c=s.f,l=r(n),u={},d=0;l.length>d;)void 0!==(a=c(n,t=l[d++]))&&i(u,t,a);return u}})},"9rSQ":function(e,t,a){"use strict";var n=a("xTJ+");function r(){this.handlers=[]}r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r},AKbA:function(e,t,a){"use strict";var n=a("hfKm"),r=a.n(n),o=a("2Eek"),s=a.n(o),i=a("XoMD"),c=a.n(i),l=a("Jo+v"),u=a.n(l),d=a("4mXO"),f=a.n(d),m=a("XXOK"),p=a.n(m),h=a("pLtp"),v=a.n(h),g=a("vYYK"),b=a("0iUn"),y=a("sLSF");a("q1tI");function w(e,t){var a=v()(e);if(f.a){var n=f()(e);t&&(n=n.filter((function(t){return u()(e,t).enumerable}))),a.push.apply(a,n)}return a}var x=a("TkVQ"),S=function(){function e(){Object(b.a)(this,e)}return Object(y.a)(e,[{key:"Validator",value:function(){this.response=[]}},{key:"validate",value:function(e){var t=this;return this.getFormCandidates(e).map((function(e,a){return e.required&&e.validate?t.executeValidations(e):(e.valid=!0,e.executor="N/A",t.response=[],t.response.push(e),t.response)}))}},{key:"getFormCandidates",value:function(e){var t=new Array,a=e.srcElement;return a.dataset.formdata&&t.push(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(Object(a),!0).forEach((function(t){Object(g.a)(e,t,a[t])})):c.a?s()(e,c()(a)):w(Object(a)).forEach((function(t){r()(e,t,u()(a,t))}))}return e}({},JSON.parse(a.dataset.formdata),{value:a.value,ref:a})),t}},{key:"executeValidations",value:function(e){var t=e.validationRules?v()(e.validationRules):[],a=[],n={},r=!0,o=!1,s=void 0;try{for(var i,c=p()(t);!(r=(i=c.next()).done);r=!0){var l=i.value;if(x[l]&&(n=x[l](e),a.push(n),!n.forwardToNextValidator)){a=[];break}}}catch(u){o=!0,s=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw s}}return a}},{key:"processFieldPostValidation",value:function(e,t,a,n){var r=a;if(0!==e[0].length){var o=e[0][0],s=o.value;r[o.name]=s,r.id=this.getRandomInt(1,1e3)}else r[t.name]&&delete r[t.name];n(r)}},{key:"getRandomInt",value:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}},{key:"disabledElem",value:function(e){null!==e&&e.current.classList.add("disabled")}},{key:"enableElem",value:function(e){null!==e&&e.current.classList.remove("disabled")}}]),e}();t.a=S},CgaS:function(e,t,a){"use strict";var n=a("xTJ+"),r=a("MLWZ"),o=a("9rSQ"),s=a("UnBK"),i=a("SntB");function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=i(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],a=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)a=a.then(t.shift(),t.shift());return a},c.prototype.getUri=function(e){return e=i(this.defaults,e),r(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,a){return this.request(n.merge(a||{},{method:e,url:t}))}})),n.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,a,r){return this.request(n.merge(r||{},{method:e,url:t,data:a}))}})),e.exports=c},Cj2W:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return c})),a.d(t,"d",(function(){return l})),a.d(t,"a",(function(){return u}));var n=a("q1tI"),r=a.n(n),o=a("/RR4"),s=r.a.createElement,i=function(e){return s(r.a.Fragment,null,s("div",{className:"row",style:{margin:"2rem 0"}},s("div",{className:"col-xs-12 col-md-4"}),s("div",{className:"col-xs-12 col-md-4"},s(o.a,{buttonName:"LOAD MORE ITEMS..",Click:e.LoadMore?e.LoadMore:""})),s("div",{className:"col-xs-12 col-md-4"})))},c=function(e){return e.paragraph?s("p",{className:"__cart_qty_loader"},e.label," ",s("i",{className:"fas fa-sync fa-spin"})):s("i",{className:"fas fa-sync fa-spin"})},l=function(e){return e.paragraph?s("p",{className:"__cart_qty_loader instock"},e.label," ",s("i",{className:"fas fa-check-circle"})):s("i",{className:"".concat(e.class?e.class:""," fas fa-check-circle")})},u=function(e){return e.paragraph?s("p",{className:"__cart_qty_loader outofstock"},e.label," ",s("i",{className:"fas fa-times-circle"})):s("i",{className:"".concat(e.class?e.class:""," fas fa-times-circle")})}},DfZB:function(e,t,a){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},HSsa:function(e,t,a){"use strict";e.exports=function(e,t){return function(){for(var a=new Array(arguments.length),n=0;n<a.length;n++)a[n]=arguments[n];return e.apply(t,a)}}},"IA+c":function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"default",(function(){return v}));var n=a("0iUn"),r=a("sLSF"),o=a("MI3g"),s=a("a7VT"),i=a("AT/M"),c=a("Tit0"),l=a("q1tI"),u=a.n(l),d=a("NvAs"),f=a("bmR9"),m=a("gc4K"),p=a("Bqj+"),h=(a("vDqi"),u.a.createElement),v=(a("6WWA"),function(t){function a(t){var r;return Object(n.a)(this,a),(r=Object(o.a)(this,Object(s.a)(a).call(this,t))).signIn=r.signIn.bind(Object(i.a)(r)),r.signUp=r.signUp.bind(Object(i.a)(r)),r.state={url:e.env.url,title:"Create an iShop account",subTitle:"Already have an account ?",signUp:!0},r}return Object(c.a)(a,t),Object(r.a)(a,[{key:"signUp",value:function(){this.setState({title:"Create an iShop account",subTitle:"Already have an account ?",signUp:!this.state.signUp})}},{key:"signIn",value:function(){console.log(e.env.REACT_APP_API_ROOT),this.setState({title:"Sign-in to your ishop account",subTitle:"Don't have an account yet ?",signUp:!this.state.signUp})}},{key:"render",value:function(){var e=this;return h(d.a,{title:"iShop Registeration/Login",description:"iShop Registeration/Login"},h(p.b,null,h("div",{className:"container __registeration"},h("div",{className:"row"},h("div",{className:"col-xs-12"},h("h2",{className:"text-center __registeration __registeration_header"}," ",this.state.title,"  "),h("h4",{className:"text-center __registeration __registeration_sign_in"}," ",this.state.subTitle,"  ",this.state.signUp?h("a",{onClick:function(){return e.signIn()}}," Sign In "):h("a",{onClick:function(){return e.signUp()}}," Sign Up ")," "),this.state.signUp?h(f.a,null):h(m.a,null))))))}}]),a}(u.a.Component))}.call(this,a("8oxB"))},JEQr:function(e,t,a){"use strict";(function(t){var n=a("xTJ+"),r=a("yK9s"),o={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i={adapter:function(){var e;return"undefined"!==typeof XMLHttpRequest?e=a("tQ2B"):"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t)&&(e=a("tQ2B")),e}(),transformRequest:[function(e,t){return r(t,"Accept"),r(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){i.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){i.headers[e]=n.merge(o)})),e.exports=i}).call(this,a("8oxB"))},LYNF:function(e,t,a){"use strict";var n=a("OH9c");e.exports=function(e,t,a,r,o){var s=new Error(e);return n(s,t,a,r,o)}},Lmem:function(e,t,a){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,a){"use strict";var n=a("xTJ+");function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,a){if(!t)return e;var o;if(a)o=a(t);else if(n.isURLSearchParams(t))o=t.toString();else{var s=[];n.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))})))})),o=s.join("&")}if(o){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},OH9c:function(e,t,a){"use strict";e.exports=function(e,t,a,n,r){return e.config=t,a&&(e.code=a),e.request=n,e.response=r,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,t,a){"use strict";var n=a("xTJ+");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a");function r(e){var n=e;return t&&(a.setAttribute("href",n),n=a.href),a.setAttribute("href",n),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:"/"===a.pathname.charAt(0)?a.pathname:"/"+a.pathname}}return e=r(window.location.href),function(t){var a=n.isString(t)?r(t):t;return a.protocol===e.protocol&&a.host===e.host}}():function(){return!0}},QojX:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("TSYQ"),s=a.n(o),i=a("q1tI"),c=a.n(i),l=(a("K9S6"),a("Mlt0")),u=a("9Iqo"),d=a("vUet"),f=c.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,l=e.bsCustomPrefix,f=e.className,m=e.isValid,p=e.isInvalid,h=e.isStatic,v=e.as,g=void 0===v?"input":v,b=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),y=Object(i.useContext)(u.a),w=y.controlId;return o=y.custom?Object(d.b)(l,"custom-control-input"):Object(d.b)(o,"form-check-input"),c.a.createElement(g,Object(n.a)({},b,{ref:t,id:a||w,className:s()(f,o,m&&"is-valid",p&&"is-invalid",h&&"position-static")}))}));f.displayName="FormCheckInput",f.defaultProps={type:"checkbox"};var m=f,p=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.bsCustomPrefix,l=e.className,f=e.htmlFor,m=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),p=Object(i.useContext)(u.a),h=p.controlId;return a=p.custom?Object(d.b)(o,"custom-control-label"):Object(d.b)(a,"form-check-label"),c.a.createElement("label",Object(n.a)({},m,{ref:t,htmlFor:f||h,className:s()(l,a)}))}));p.displayName="FormCheckLabel";var h=p,v=c.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,f=e.bsCustomPrefix,p=e.inline,v=e.disabled,g=e.isValid,b=e.isInvalid,y=e.feedback,w=e.className,x=e.style,S=e.title,E=e.type,L=e.label,O=e.children,N=e.custom,j=e.as,C=void 0===j?"input":j,k=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),I="switch"===E||N;o=I?Object(d.b)(f,"custom-control"):Object(d.b)(o,"form-check");var R=Object(i.useContext)(u.a).controlId,T=Object(i.useMemo)((function(){return{controlId:a||R,custom:I}}),[R,I,a]),P=null!=L&&!1!==L&&!O,A=c.a.createElement(m,Object(n.a)({},k,{type:"switch"===E?"checkbox":E,ref:t,isValid:g,isInvalid:b,isStatic:!P,disabled:v,as:C}));return c.a.createElement(u.a.Provider,{value:T},c.a.createElement("div",{style:x,className:s()(w,o,I&&"custom-"+E,p&&o+"-inline")},O||c.a.createElement(c.a.Fragment,null,A,P&&c.a.createElement(h,{title:S},L),(g||b)&&c.a.createElement(l.a,{type:g?"valid":"invalid"},y))))}));v.displayName="FormCheck",v.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},v.Input=m,v.Label=h;var g=v,b=a("jDKy"),y=a("HRRZ"),w=(a("2W6z"),a("JI6e")),x=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.column,l=e.srOnly,f=e.className,m=e.htmlFor,p=Object(r.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),h=Object(i.useContext)(u.a).controlId;a=Object(d.b)(a,"form-label");var v=s()(f,a,l&&"sr-only",o&&"col-form-label");return m=m||h,o?c.a.createElement(w.a,Object(n.a)({as:"label",className:v,htmlFor:m},p)):c.a.createElement("label",Object(n.a)({ref:t,className:v,htmlFor:m},p))}));x.displayName="FormLabel",x.defaultProps={column:!1,srOnly:!1};var S=x,E=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,i=e.as,l=void 0===i?"small":i,u=e.muted,f=Object(r.a)(e,["bsPrefix","className","as","muted"]);return a=Object(d.b)(a,"form-text"),c.a.createElement(l,Object(n.a)({},f,{ref:t,className:s()(o,a,u&&"text-muted")}))}));E.displayName="FormText";var L=E,O=c.a.forwardRef((function(e,t){return c.a.createElement(g,Object(n.a)({},e,{ref:t,type:"switch"}))}));O.displayName="Switch",O.Input=g.Input,O.Label=g.Label;var N=O,j=a("YdCC"),C=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.inline,i=e.className,l=e.validated,u=e.as,f=void 0===u?"form":u,m=Object(r.a)(e,["bsPrefix","inline","className","validated","as"]);return a=Object(d.b)(a,"form"),c.a.createElement(f,Object(n.a)({},m,{ref:t,className:s()(i,l&&"was-validated",o&&a+"-inline")}))}));C.displayName="Form",C.defaultProps={inline:!1},C.Row=Object(j.a)("form-row"),C.Group=y.a,C.Control=b.a,C.Check=g,C.Switch=N,C.Label=S,C.Text=L;t.a=C},"Rn+g":function(e,t,a){"use strict";var n=a("LYNF");e.exports=function(e,t,a){var r=a.config.validateStatus;!r||r(a.status)?e(a):t(n("Request failed with status code "+a.status,a.config,null,a.request,a))}},SntB:function(e,t,a){"use strict";var n=a("xTJ+");e.exports=function(e,t){t=t||{};var a={},r=["url","method","params","data"],o=["headers","auth","proxy"],s=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];n.forEach(r,(function(e){"undefined"!==typeof t[e]&&(a[e]=t[e])})),n.forEach(o,(function(r){n.isObject(t[r])?a[r]=n.deepMerge(e[r],t[r]):"undefined"!==typeof t[r]?a[r]=t[r]:n.isObject(e[r])?a[r]=n.deepMerge(e[r]):"undefined"!==typeof e[r]&&(a[r]=e[r])})),n.forEach(s,(function(n){"undefined"!==typeof t[n]?a[n]=t[n]:"undefined"!==typeof e[n]&&(a[n]=e[n])}));var i=r.concat(o).concat(s),c=Object.keys(t).filter((function(e){return-1===i.indexOf(e)}));return n.forEach(c,(function(n){"undefined"!==typeof t[n]?a[n]=t[n]:"undefined"!==typeof e[n]&&(a[n]=e[n])})),a}},TkVQ:function(e,t,a){var n=a("6BQ9"),r=!1,o=!0;e.exports={minLength:function(e){var t=e.value,a=e.validationRules,s=e.ref,i=e.name;return t.length<n(a.minLength)?(s.classList.remove("valid"),s.classList.add("in-valid"),o=!1,r=!1):(s.classList.remove("in-valid"),s.classList.add("valid"),r=!0,o=!0),{valid:r,executor:"minLength",forwardToNextValidator:o,name:i,value:t,ref:s}},maxLength:function(e){var t=e.value,a=e.validationRules,s=e.ref,i=e.name;return t.length>n(a.maxLength)?(s.classList.remove("valid"),s.classList.add("in-valid"),o=!1,r=!1):(s.classList.remove("in-valid"),s.classList.add("valid"),r=!0,o=!0),{valid:r,executor:"maxLength",forwardToNextValidator:o,name:i,value:t,ref:s}},emailValidator:function(e){var t=e.value,a=(e.validationRules,e.ref),n=e.name;return/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g.test(t)?(a.classList.remove("in-valid"),a.classList.add("valid"),r=!0,o=!0):(a.classList.remove("valid"),a.classList.add("in-valid"),o=!1,r=!1),{valid:r,executor:"emailValidator",forwardToNextValidator:o,name:n,ref:a,value:t}},passwordValidator:function(e){console.log(e);var t=e.value,a=(e.validationRules,e.ref),n=e.name;return/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(t)?(a.classList.remove("in-valid"),a.classList.add("valid"),r=!0,o=!0):(a.classList.remove("valid"),a.classList.add("in-valid"),o=!1,r=!1),{valid:r,executor:"passwordValidator",forwardToNextValidator:o,name:n,value:t,ref:a}},digitsValidator:function(e){var t=e.value,a=(e.validationRules,e.ref),n=e.name;return/^\d+$/.test(t)?(a.classList.remove("in-valid"),a.classList.add("valid"),r=!0,o=!0):(a.classList.remove("valid"),a.classList.add("in-valid"),o=!1,r=!1),{valid:r,executor:"numberValidator",forwardToNextValidator:o,name:n,ref:a,value:t}}}},UnBK:function(e,t,a){"use strict";var n=a("xTJ+"),r=a("xAGQ"),o=a("Lmem"),s=a("JEQr");function i(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return i(e),e.headers=e.headers||{},e.data=r(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return i(e),t.data=r(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(i(e),t&&t.response&&(t.response.data=r(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},W7oM:function(e,t,a){a("nZgG");var n=a("WEpk").Object;e.exports=function(e,t){return n.defineProperties(e,t)}},XWtR:function(e,t,a){var n=a("5T2Y").parseInt,r=a("oc46").trim,o=a("5pKv"),s=/^[-+]?0[xX]/;e.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(e,t){var a=r(String(e),3);return n(a,t>>>0||(s.test(a)?16:10))}:n},XoMD:function(e,t,a){e.exports=a("hYAz")},bmR9:function(e,t,a){"use strict";a.d(t,"a",(function(){return N}));var n=a("dfwq"),r=a("ln6h"),o=a.n(r),s=a("eVuF"),i=a.n(s),c=a("0iUn"),l=a("sLSF"),u=a("MI3g"),d=a("a7VT"),f=a("AT/M"),m=a("Tit0"),p=a("vYYK"),h=a("q1tI"),v=a.n(h),g=a("QojX"),b=a("cJN8"),y=a("AKbA"),w=a("Bqj+"),x=a("Cj2W"),S=v.a.createElement,E=a("vDqi"),L=a("6WWA"),O=new y.a,N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).submitRef=v.a.createRef(),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a.onChange=a.onChange.bind(Object(f.a)(a)),a.handleSubmitState=a.handleSubmitState.bind(Object(f.a)(a)),a.checkEmailAvailability=a.checkEmailAvailability.bind(Object(f.a)(a)),a.handleShow=a.handleShow.bind(Object(f.a)(a)),a.removeInvalidElement=a.removeInvalidElement.bind(Object(f.a)(a)),a.handleClose=a.handleClose.bind(Object(f.a)(a)),a.comparePasswords=a.comparePasswords.bind(Object(f.a)(a)),a.state={disableSubmit:!0,formFields:[],showEmailLoader:!1,showError:!1,errorMessage:"",submitLabel:"Register",registered:!1,registering:!1,failed:!1},a.modalProps={onHide:a.onHide,message:"This email is already reserved .",header:"Validation Error"},a.formData=[{label:"First Name",type:"text",placeholder:"Enter your firstname",controlId:"firstNameController",validate:!0,required:!0,validationRules:{minLength:6,maxLength:12},class:"default",change:a.onChange,name:"firstName",showLoader:!1},{label:"Last Name",type:"text",placeholder:"Enter your lastname",controlId:"lastNameController",validate:!0,required:!0,class:"default",validationRules:{minLength:6,maxLength:12},change:a.onChange,name:"lastName",showLoader:!1},{label:"Email Address",type:"email",placeholder:"Enter your emil address",controlId:"emailController",note:"We'll never share your email with anyone else.",validate:!0,required:!0,class:"text-muted default",validationRules:{emailValidator:""},change:a.onChange,name:"email",showLoader:!1},{label:"Password",type:"password",placeholder:"Enter your password",controlId:"passwordController",validate:!0,required:!0,class:"default",validationRules:{minLength:8,passwordValidator:""},change:a.onChange,note:"Your password should be at least 8 characters long alphanumeric .",name:"password",showLoader:!1},{label:"Confirm Password",type:"password",placeholder:"Enter your password",controlId:"confirmPasswordController",validate:!0,required:!0,class:"default",validationRules:{minLength:8,passwordValidator:"",dependents:["passwordController"]},change:a.onChange,note:"This field should match the above one .",name:"cPassword",showLoader:!1},{note:"By creating an account, you agree to our Conditions of Use and Privacy Notice.",type:"none",class:"text-muted"}],a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleShow",value:function(){this.setState({showError:!0})}},{key:"handleClose",value:function(){this.setState({showError:!1})}},{key:"handleSubmit",value:function(){event.preventDefault();var e=this.comparePasswords(),t=this;if(e){this.setState({submitLabel:"Please wait ..",registering:!0,showError:!1,errorMessage:"",failed:!1}),this.handleSubmitState(!0);var a={};this.state.formFields.map((function(e,t){a[e.name]=e.value})),delete a.cPassword,E.post(L.REGISTER,a).then((function(e){t.handleSubmitState(!0),t.setState({submitLabel:"Account has been created.",registering:!1,registered:!0}),localStorage.set("iShopUserId",e.data._id)})).catch((function(e){var a="";e&&422==e.response.status&&(a="Error : ".concat(e.response.data.error.message)),t.setState({submitLabel:"Register",registering:!1,showError:!0,errorMessage:a,failed:!0}),t.handleSubmitState(!1)}))}}},{key:"handleSubmitState",value:function(e){e?O.disabledElem(this.submitRef):O.enableElem(this.submitRef)}},{key:"comparePasswords",value:function(){var e=!0,t=this.state.formFields.find((function(e){return"password"==e.name})),a=this.state.formFields.find((function(e){return"cPassword"==e.name}));return void 0!==t&&void 0!==a&&t.value!==a.value&&(this.setState({showError:!0,errorMessage:"Sorry, your passwords are not matching !",registering:!1}),a.ref.classList.remove("valid"),a.ref.classList.add("in-valid"),this.removeInvalidElement(a),e=!1,O.disabledElem(this.submitRef)),e}},{key:"checkEmailAvailability",value:function(e,t){var a=this;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return this.setState({showEmailLoader:!0}),n.next=3,o.a.awrap(new i.a((function(n){setTimeout((function(){var r=e[0][0],o=r.value,s=r.ref;a.state.formFields.find((function(e){return"email"==e.name}));"amine.admin@mail.com"!==o&&(a.setState({showError:!0,errorMessage:"The email ** ".concat(o," ** is already registered in our database, please use a different one or reset your password .")}),s.classList.remove("valid"),s.classList.add("in-valid"),e=[],a.removeInvalidElement(t)),console.log("after 1 sec"),n()}),1e3)})));case 3:return n.next=5,o.a.awrap(new i.a((function(e){setTimeout((function(){a.setState({showEmailLoader:!1}),e()}),3e3)})));case 5:case"end":return n.stop()}}),null,this)}},{key:"onChange",value:function(){var e=this,t=[],a=this,r=JSON.parse(event.target.dataset.formdata);0==(t=O.validate(event))[0].length?this.removeInvalidElement(r):(console.log("immediate"),t[0].map((function(t,r){void 0==a.state.formFields.find((function(e){return e.name==t.name}))&&a.setState({formFields:[].concat(Object(n.a)(a.state.formFields),[t])},(function(){e.handleSubmitState(!(5==a.state.formFields.length))}))})))}},{key:"removeInvalidElement",value:function(e){var t=this;this.setState({formFields:this.state.formFields.filter((function(t){return t.name!==e.name}))},(function(){t.handleSubmitState(!(5==t.state.formFields.length))}))}},{key:"componentDidMount",value:function(){O.disabledElem(this.submitRef)}},{key:"render",value:function(){var e=this;this.context.value;return S("div",{className:"container __registeration_form"},S("div",{className:"row"},S("div",{className:"col-xs-12"},S("div",{className:"__registration_form_wrapper"},S(g.a,null,this.formData.map((function(t,a){return"email"==t.name&&(t.showLoader=e.state.showEmailLoader),S(b.a,{key:a,props:t})})),S(g.a.Group,{controlId:"formBasicPassword",className:"col-xs-5",style:{paddingLeft:0}},S("a",{ref:this.submitRef,className:"customButton __checkout_confirm_btn",onClick:this.handleSubmit},this.state.submitLabel,this.state.registered?S(x.d,{label:"",paragraph:!1,class:"instock"}):null,this.state.registering?S(x.c,{label:"",paragraph:!1}):null,this.state.failed?S(x.a,{label:"",paragraph:!1,class:"outofstock"}):null)),this.state.showError?S(g.a.Group,{controlId:"formBasicPassword",className:"col-xs-7 reg-error"},this.state.errorMessage):null)))))}}]),t}(v.a.PureComponent);Object(p.a)(N,"contextType",w.a)},cJN8:function(e,t,a){"use strict";var n=a("9Jkg"),r=a.n(n),o=a("q1tI"),s=a.n(o),i=a("QojX"),c=s.a.createElement,l=function(e){return c(i.a.Text,{className:e.data&&e.data.class?e.data.class:""},e.data&&e.data.note?e.data.note:"")},u=function(e){return c("div",{className:"fa-1x"},e.formData.note?c(l,{data:e.formData}):null,e.formData.showLoader?c("i",{className:"fas fa-sync fa-spin",style:{marginLeft:"2rem"}}):null)};t.a=function(e){var t=e.props;return"none"==t.type?c(l,{note:t}):"select"==t.type?c(i.a.Group,{controlId:t.controlId},c(i.a.Label,null,t.label),c("select",{className:t.class,onChange:t.change,inputref:t.controlId,"data-formdata":r()(t)},t.options.map((function(e,t){return c("option",{key:t,value:e.key},e.label)})))):c(i.a.Group,{controlId:t.controlId},c(i.a.Label,null,t.label),c(i.a.Control,{onChange:t.change,className:t.class,inputref:t.controlId,"data-formdata":r()(t),type:t.type,placeholder:t.placeholder}),c(u,{formData:t}))}},dEVD:function(e,t,a){var n=a("Y7ZC"),r=a("XWtR");n(n.G+n.F*(parseInt!=r),{parseInt:r})},dfwq:function(e,t,a){"use strict";var n=a("p0XB"),r=a.n(n);var o=a("d04V"),s=a.n(o),i=a("yLu3"),c=a.n(i);function l(e){return function(e){if(r()(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(c()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return s()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",(function(){return l}))},endd:function(e,t,a){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},eqyj:function(e,t,a){"use strict";var n=a("xTJ+");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,a,r,o,s){var i=[];i.push(e+"="+encodeURIComponent(t)),n.isNumber(a)&&i.push("expires="+new Date(a).toGMTString()),n.isString(r)&&i.push("path="+r),n.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},g7np:function(e,t,a){"use strict";var n=a("2SVd"),r=a("5oMp");e.exports=function(e,t){return e&&!n(t)?r(e,t):t}},gc4K:function(e,t,a){"use strict";var n=a("9Jkg"),r=a.n(n),o=a("dfwq"),s=a("0iUn"),i=a("sLSF"),c=a("MI3g"),l=a("a7VT"),u=a("AT/M"),d=a("Tit0"),f=a("vYYK"),m=a("q1tI"),p=a.n(m),h=a("QojX"),v=a("cJN8"),g=a("AKbA"),b=a("ln6h"),y=a.n(b),w=a("vDqi"),x=function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,[{key:"post",value:function(e){var t;return y.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(e),a.next=3,y.a.awrap(w.post(e.url,e.requestBody));case 3:return t=a.sent,a.next=6,y.a.awrap(t);case 6:return a.abrupt("return",a.sent);case 7:case"end":return a.stop()}}))}},{key:"get",value:function(e){var t;return y.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y.a.awrap(w.get(e.url,e.headers));case 2:return t=a.sent,a.next=5,y.a.awrap(t);case 5:return a.abrupt("return",a.sent);case 6:case"end":return a.stop()}}))}}]),e}(),S=a("Bqj+"),E=a("Cj2W"),L=a("gHh/"),O=a.n(L);a.d(t,"a",(function(){return I}));var N=p.a.createElement,j=new g.a,C=a("6WWA"),k=new x,I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).logInRef=p.a.createRef(),a.onChange=a.onChange.bind(Object(u.a)(a)),a.handleSubmitState=a.handleSubmitState.bind(Object(u.a)(a)),a.removeInvalidElement=a.removeInvalidElement.bind(Object(u.a)(a)),a.login=a.login.bind(Object(u.a)(a)),a.state={disableSubmit:!0,formFields:[],showEmailLoader:!1,showError:!1,errorMessage:"",logingIn:!1,loggedIn:!1,failed:!1,signInLabel:"Login"},a.formData=[{label:"Email Address",type:"email",placeholder:"Enter your emil address",controlId:"emailController",validate:!0,required:!0,class:"text-muted default",validationRules:{emailValidator:""},change:a.onChange,name:"email",showLoader:!1},{label:"Password",type:"password",placeholder:"Enter your password",controlId:"passwordController",validate:!0,required:!0,class:"default",validationRules:{minLength:8,passwordValidator:""},change:a.onChange,name:"password",showLoader:!1}],a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleSubmitState",value:function(e){e?j.disabledElem(this.logInRef):j.enableElem(this.logInRef)}},{key:"onChange",value:function(){var e=this,t=[],a=this,n=JSON.parse(event.target.dataset.formdata);0==(t=j.validate(event))[0].length?this.removeInvalidElement(n):t[0].map((function(t,n){void 0==a.state.formFields.find((function(e){return e.name==t.name}))&&a.setState({formFields:[].concat(Object(o.a)(a.state.formFields),[t])},(function(){e.handleSubmitState(!(2==a.state.formFields.length))}))}))}},{key:"removeInvalidElement",value:function(e){var t=this;this.setState({formFields:this.state.formFields.filter((function(t){return t.name!==e.name}))},(function(){t.handleSubmitState(!(2==t.state.formFields.length))}))}},{key:"login",value:function(){var e={},t=this;this.state.formFields.map((function(t,a){e[t.name]=t.value})),this.setState({logingIn:!0,failed:!1,signInLabel:"Logging in ..",showError:!1,errorMessage:""}),t.handleSubmitState(!0),k.post({url:C.LOGIN,requestBody:e}).then((function(e){t.handleSubmitState(!0),t.setState({signInLabel:"Successfully LoggedIn.",logingIn:!1,loggedIn:!0}),localStorage.setItem("iShopUserToken",e.data.token);var a={headers:{Authorization:"Bearer "+e.data.token}};k.get({url:C.GET_PROFILE,headers:a}).catch((function(e){console.log("me :: "+e.data),saveCustomerProfileLocally(e.data),O.a.push("/")})).catch((function(e){console.error("Error :: "+e.data)}))})).catch((function(e){var a="";e&&422==e.response.status&&(a="Error : ".concat(e.response.data.error.message)),t.setState({signInLabel:"Login",logingIn:!1,showError:!0,errorMessage:a,failed:!0}),t.handleSubmitState(!1)}))}},{key:"saveCustomerProfileLocally",value:function(e){e.status="loggedIn",localStorage.setItem("customerProfile",r()(e))}},{key:"render",value:function(){var e=this;return N("div",{className:"container __registeration_form"},N("div",{className:"row"},N("div",{className:"col-xs-12"},N("div",{className:"__registration_form_wrapper"},N(h.a,null,this.formData.map((function(e,t){return N(v.a,{key:t,props:e})})),N(h.a.Group,{controlId:"formBasicPassword",className:"col-xs-5",style:{paddingLeft:0}},N("a",{ref:this.logInRef,className:"customButton __checkout_confirm_btn",onClick:function(){return e.login()}},this.state.signInLabel,this.state.loggedIn?N(E.d,{label:"",paragraph:!1,class:"instock"}):null,this.state.logingIn?N(E.c,{label:"",paragraph:!1}):null,this.state.failed?N(E.a,{label:"",paragraph:!1,class:"outofstock"}):null)),this.state.showError?N(h.a.Group,{controlId:"formBasicPassword",className:"col-xs-7 reg-error"},this.state.errorMessage):null)))))}}]),t}(p.a.PureComponent);Object(f.a)(I,"contextType",S.a)},hYAz:function(e,t,a){a("7m0m"),e.exports=a("WEpk").Object.getOwnPropertyDescriptors},"jfS+":function(e,t,a){"use strict";var n=a("endd");function r(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var a=this;e((function(e){a.reason||(a.reason=new n(e),t(a.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r},nZgG:function(e,t,a){var n=a("Y7ZC");n(n.S+n.F*!a("jmDH"),"Object",{defineProperties:a("fpC5")})},oc46:function(e,t,a){var n=a("Y7ZC"),r=a("Jes0"),o=a("KUxP"),s=a("5pKv"),i="["+s+"]",c=RegExp("^"+i+i+"*"),l=RegExp(i+i+"*$"),u=function(e,t,a){var r={},i=o((function(){return!!s[e]()||"\u200b\x85"!="\u200b\x85"[e]()})),c=r[e]=i?t(d):s[e];a&&(r[a]=c),n(n.P+n.F*i,"String",r)},d=u.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(l,"")),e};e.exports=u},rhL0:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin-up/register",function(){return a("IA+c")}])},tQ2B:function(e,t,a){"use strict";var n=a("xTJ+"),r=a("Rn+g"),o=a("MLWZ"),s=a("g7np"),i=a("w0Vi"),c=a("OTTw"),l=a("LYNF");e.exports=function(e){return new Promise((function(t,u){var d=e.data,f=e.headers;n.isFormData(d)&&delete f["Content-Type"];var m=new XMLHttpRequest;if(e.auth){var p=e.auth.username||"",h=e.auth.password||"";f.Authorization="Basic "+btoa(p+":"+h)}var v=s(e.baseURL,e.url);if(m.open(e.method.toUpperCase(),o(v,e.params,e.paramsSerializer),!0),m.timeout=e.timeout,m.onreadystatechange=function(){if(m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))){var a="getAllResponseHeaders"in m?i(m.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:a,config:e,request:m};r(t,u,n),m=null}},m.onabort=function(){m&&(u(l("Request aborted",e,"ECONNABORTED",m)),m=null)},m.onerror=function(){u(l("Network Error",e,null,m)),m=null},m.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),u(l(t,e,"ECONNABORTED",m)),m=null},n.isStandardBrowserEnv()){var g=a("eqyj"),b=(e.withCredentials||c(v))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;b&&(f[e.xsrfHeaderName]=b)}if("setRequestHeader"in m&&n.forEach(f,(function(e,t){"undefined"===typeof d&&"content-type"===t.toLowerCase()?delete f[t]:m.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(m.withCredentials=!!e.withCredentials),e.responseType)try{m.responseType=e.responseType}catch(y){if("json"!==e.responseType)throw y}"function"===typeof e.onDownloadProgress&&m.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&m.upload&&m.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){m&&(m.abort(),u(e),m=null)})),void 0===d&&(d=null),m.send(d)}))}},uekQ:function(e,t,a){a("dEVD"),e.exports=a("WEpk").parseInt},uplh:function(e,t,a){var n=a("ar/p"),r=a("mqlF"),o=a("5K7Z"),s=a("5T2Y").Reflect;e.exports=s&&s.ownKeys||function(e){var t=n.f(o(e)),a=r.f;return a?t.concat(a(e)):t}},vDqi:function(e,t,a){e.exports=a("zuR4")},vYYK:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("hfKm"),r=a.n(n);function o(e,t,a){return t in e?r()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},w0Vi:function(e,t,a){"use strict";var n=a("xTJ+"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,a,o,s={};return e?(n.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),a=n.trim(e.substr(o+1)),t){if(s[t]&&r.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([a]):s[t]?s[t]+", "+a:a}})),s):s}},xAGQ:function(e,t,a){"use strict";var n=a("xTJ+");e.exports=function(e,t,a){return n.forEach(a,(function(a){e=a(e,t)})),e}},"xTJ+":function(e,t,a){"use strict";var n=a("HSsa"),r=Object.prototype.toString;function o(e){return"[object Array]"===r.call(e)}function s(e){return"undefined"===typeof e}function i(e){return null!==e&&"object"===typeof e}function c(e){return"[object Function]"===r.call(e)}function l(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),o(e))for(var a=0,n=e.length;a<n;a++)t.call(null,e[a],a,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===r.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!==typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"===typeof e},isNumber:function(e){return"number"===typeof e},isObject:i,isUndefined:s,isDate:function(e){return"[object Date]"===r.call(e)},isFile:function(e){return"[object File]"===r.call(e)},isBlob:function(e){return"[object Blob]"===r.call(e)},isFunction:c,isStream:function(e){return i(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)},forEach:l,merge:function e(){var t={};function a(a,n){"object"===typeof t[n]&&"object"===typeof a?t[n]=e(t[n],a):t[n]=a}for(var n=0,r=arguments.length;n<r;n++)l(arguments[n],a);return t},deepMerge:function e(){var t={};function a(a,n){"object"===typeof t[n]&&"object"===typeof a?t[n]=e(t[n],a):t[n]="object"===typeof a?e({},a):a}for(var n=0,r=arguments.length;n<r;n++)l(arguments[n],a);return t},extend:function(e,t,a){return l(t,(function(t,r){e[r]=a&&"function"===typeof t?n(t,a):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(e,t,a){"use strict";var n=a("xTJ+");e.exports=function(e,t){n.forEach(e,(function(a,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=a,delete e[n])}))}},zuR4:function(e,t,a){"use strict";var n=a("xTJ+"),r=a("HSsa"),o=a("CgaS"),s=a("SntB");function i(e){var t=new o(e),a=r(o.prototype.request,t);return n.extend(a,o.prototype,t),n.extend(a,t),a}var c=i(a("JEQr"));c.Axios=o,c.create=function(e){return i(s(c.defaults,e))},c.Cancel=a("endd"),c.CancelToken=a("jfS+"),c.isCancel=a("Lmem"),c.all=function(e){return Promise.all(e)},c.spread=a("DfZB"),e.exports=c,e.exports.default=c}},[["rhL0",1,2,0,3]]]);