(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/RR4":function(e,a,t){"use strict";var s=t("q1tI"),n=t.n(s),i=n.a.createElement;a.a=function(e){return i(n.a.Fragment,null,i("a",{className:"customButton",onClick:""!==e.Click?function(){e.callBackParam?e.Click(e.callBackParam):e.Click()}:null},i("i",{className:"".concat(e.fontName," __quick_item_font_awsome")}),e.buttonName))}},"/fyh":function(e,a,t){"use strict";var s=t("q1tI"),n=t.n(s),i=t("wx14"),r=t("zLVn"),o=t("eC2I"),l=t.n(o),c=t("vUet"),m=t("dbZe"),u=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.active,o=e.className,u=e.as,d=void 0===u?"li":u,p=Object(r.a)(e,["bsPrefix","active","className","as"]),f=Object(c.b)(t,"breadcrumb-item"),h=p.href,g=p.title,v=p.target,y=Object(r.a)(p,["href","title","target"]),b={href:h,title:g,target:v};return n.a.createElement(d,{ref:a,className:l()(f,o,{active:s}),"aria-current":s?"page":void 0},s?n.a.createElement("span",Object(i.a)({},y,{className:l()({active:s})})):n.a.createElement(m.a,Object(i.a)({},y,b)))}));u.displayName="BreadcrumbItem",u.defaultProps={active:!1};var d=u,p=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.listProps,m=e.children,u=e.label,d=e.as,p=void 0===d?"nav":d,f=Object(r.a)(e,["bsPrefix","className","listProps","children","label","as"]),h=Object(c.b)(t,"breadcrumb");return n.a.createElement(p,Object(i.a)({"aria-label":u,className:s,ref:a},f),n.a.createElement("ol",Object(i.a)({},o,{className:l()(h,o.className)}),m))}));p.displayName="Breadcrumb",p.defaultProps={label:"breadcrumb",listProps:{}},p.Item=d;var f=p,h=n.a.createElement;a.a=function(e){return h(n.a.Fragment,null,h(f,null,h(f.Item,{href:"/"},"HOME"),(e.link.length,h(f.Item,{active:!0,href:"/products/".concat(decodeURIComponent(e.link[0]))},decodeURIComponent(e.link[0]).toUpperCase())),2==e.link.length?h(f.Item,{active:!0,href:"/products/".concat(decodeURIComponent(e.link[0]),"-").concat(decodeURIComponent(e.link[1]))},decodeURIComponent(e.link[1]).toUpperCase()):h(f.Item,{href:"/products/".concat(decodeURIComponent(e.link[0]),"-").concat(decodeURIComponent(e.link[1]))},e.link[1]?decodeURIComponent(e.link[1]).toUpperCase():""),3==e.link.length?h(f.Item,{active:!0},decodeURIComponent(e.link[2]).toUpperCase()):null))}},"2Eek":function(e,a,t){e.exports=t("lt0m")},"4mXO":function(e,a,t){e.exports=t("Vphk")},"6BQ9":function(e,a,t){e.exports=t("VKpo")},AKbA:function(e,a,t){"use strict";var s=t("hfKm"),n=t.n(s),i=t("2Eek"),r=t.n(i),o=t("XoMD"),l=t.n(o),c=t("Jo+v"),m=t.n(c),u=t("4mXO"),d=t.n(u),p=t("XXOK"),f=t.n(p),h=t("pLtp"),g=t.n(h),v=t("vYYK"),y=t("0iUn"),b=t("sLSF");t("q1tI");function _(e,a){var t=g()(e);if(d.a){var s=d()(e);a&&(s=s.filter((function(a){return m()(e,a).enumerable}))),t.push.apply(t,s)}return t}var N=t("TkVQ"),I=function(){function e(){Object(y.a)(this,e)}return Object(b.a)(e,[{key:"Validator",value:function(){this.response=[]}},{key:"validate",value:function(e){var a=this;return this.getFormCandidates(e).map((function(e,t){return e.required&&e.validate?a.executeValidations(e):(e.valid=!0,e.executor="N/A",a.response=[],a.response.push(e),a.response)}))}},{key:"getFormCandidates",value:function(e){var a=new Array,t=e.srcElement;return t.dataset.formdata&&a.push(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?_(Object(t),!0).forEach((function(a){Object(v.a)(e,a,t[a])})):l.a?r()(e,l()(t)):_(Object(t)).forEach((function(a){n()(e,a,m()(t,a))}))}return e}({},JSON.parse(t.dataset.formdata),{value:t.value,ref:t})),a}},{key:"executeValidations",value:function(e){var a=e.validationRules?g()(e.validationRules):[],t=[],s={},n=!0,i=!1,r=void 0;try{for(var o,l=f()(a);!(n=(o=l.next()).done);n=!0){var c=o.value;if(N[c]&&(s=N[c](e),t.push(s),!s.forwardToNextValidator)){t=[];break}}}catch(m){i=!0,r=m}finally{try{n||null==l.return||l.return()}finally{if(i)throw r}}return t}},{key:"processFieldPostValidation",value:function(e,a,t,s){var n=t;if(0!==e[0].length){var i=e[0][0],r=i.value;n[i.name]=r,n.id=this.getRandomInt(1,1e3)}else n[a.name]&&delete n[a.name];s(n)}},{key:"getRandomInt",value:function(e,a){return Math.floor(Math.random()*(a-e+1)+e)}},{key:"disabledElem",value:function(e){null!==e&&e.current.classList.add("disabled")}},{key:"enableElem",value:function(e){null!==e&&e.current.classList.remove("disabled")}}]),e}();a.a=I},Cj2W:function(e,a,t){"use strict";t.d(a,"b",(function(){return o})),t.d(a,"c",(function(){return l})),t.d(a,"d",(function(){return c})),t.d(a,"a",(function(){return m}));var s=t("q1tI"),n=t.n(s),i=t("/RR4"),r=n.a.createElement,o=function(e){return r(n.a.Fragment,null,r("div",{className:"row",style:{margin:"2rem 0"}},r("div",{className:"col-xs-12 col-md-4"}),r("div",{className:"col-xs-12 col-md-4"},r(i.a,{buttonName:"LOAD MORE ITEMS..",Click:e.LoadMore?e.LoadMore:""})),r("div",{className:"col-xs-12 col-md-4"})))},l=function(e){return e.paragraph?r("p",{className:"__cart_qty_loader"},e.label," ",r("i",{className:"fas fa-sync fa-spin"})):r("i",{className:"fas fa-sync fa-spin"})},c=function(e){return e.paragraph?r("p",{className:"__cart_qty_loader instock"},e.label," ",r("i",{className:"fas fa-check-circle"})):r("i",{className:"".concat(e.class?e.class:""," fas fa-check-circle")})},m=function(e){return e.paragraph?r("p",{className:"__cart_qty_loader outofstock"},e.label," ",r("i",{className:"fas fa-times-circle"})):r("i",{className:"".concat(e.class?e.class:""," fas fa-times-circle")})}},"D/r9":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/details/[id]",function(){return t("qjIw")}])},EfoT:function(e,a){for(var t=new Array,s={},n=["Guice","Nike","Sony","Sony","Promate","Casio"],i=[319.25,690.23,2399,248.99,109.99,179.1],r=[400.5,800,2500,279,150,249.99],o=[4,5,3,5,7,10],l=[3,7,2,20,8,7],c=[4.3,4.6,3.7,4,3.7,4.1],m=[587,1254,3004,874,4512,8745],u=["ISHRT7845541224","RVFX788874471","SON54587454112","SON5458745417845","SON545874748717845","CAS34455875411"],d=["https://m.media-amazon.com/images/I/61S4x8xHdSL._AC_AA100_.jpg","https://m.media-amazon.com/images/I/61ncStLn5HL._AC_AA100_.jpg","https://images-na.ssl-images-amazon.com/images/I/71jN27mYlhL._AC_UL100_SR100,100_.jpg","https://images-na.ssl-images-amazon.com/images/I/61KtkywXdqL._AC_UL160_SR160,160_.jpg","https://images-na.ssl-images-amazon.com/images/I/51gWepsyFTL._AC_UL160_SR160,160_.jpg","https://images-eu.ssl-images-amazon.com/images/I/41HmCff7LjL._AC_SY200_.jpg"],p=["https://images-na.ssl-images-amazon.com/images/I/61S4x8xHdSL._AC_SX569_.jpg","https://images-na.ssl-images-amazon.com/images/I/61ncStLn5HL._AC_SX679_.jpg","https://images-na.ssl-images-amazon.com/images/I/71jN27mYlhL._AC_SX679_.jpg","https://images-na.ssl-images-amazon.com/images/I/61KtkywXdqL._AC_SX679_.jpg","https://images-na.ssl-images-amazon.com/images/I/51gWepsyFTL._AC_SX569_.jpg","https://images-na.ssl-images-amazon.com/images/I/71rlEAupcPL._AC_SY500_.jpg"],f=["EZVIZ HD Wi-Fi Smart Door Viewer Camera with PIR, Doorbell Camera, 2018 CES Innovation","AMOCAM Video Door Phone System, 7 Inch Clear LCD Monitor Wired Video Intercom Doorbell Kits","Sony PlayStation 4 Pro 1TB Console (Black)","Sony PS4 Dualshock 4 Controller, Black (Official Version)","YP Select Ps4 Wireless Controller With Dual Vibration Bluetooth Gamepad for PlayStation 4 Pro Gaming Remote Control White","Casio Casual Analog Display Watch For Men MTP-VD01D-1EVUDF"],h=[{category:"accessories",image:"https://demo.mythemeshop.com/ecommerce/files/2015/07/electronic-270x340.jpg"},{category:"women",image:"https://demo.mythemeshop.com/ecommerce/files/2015/07/female-270x340.jpg"},{category:"games",image:"https://demo.mythemeshop.com/ecommerce/files/2015/07/gaming-270x340.jpg"},{category:"computers",image:"https://demo.mythemeshop.com/ecommerce/files/2015/07/laptop-270x340.jpg"},{category:"mobiles",image:"https://demo.mythemeshop.com/ecommerce/files/2015/07/mobiles-270x340.jpg"},{category:"men",image:"https://demo.mythemeshop.com/ecommerce/files/2015/06/cat-slider-2-270x340.png"},{category:"shoes",image:"https://demo.mythemeshop.com/ecommerce/files/2015/06/cat-slider-4-270x340.png"},{category:"electronics",image:"https://demo.mythemeshop.com/ecommerce/files/2015/07/electronic-270x340.jpg"},{category:"kids",image:"https://demo.mythemeshop.com/ecommerce/files/2015/06/cat-slider-3-270x340.png"}],g=0;g<f.length;g++)(s={}).name=f[g],s.oldPrice=r[g],s.newPrice=i[g],s.brand=n[g],s.img=d[g],s.qty=o[g],s.availableQty=l[g],s.selectedQty=1,s.bigImg=p[g],s.sku=u[g],s.ratings=c[g],s.comments=m[g],t.push(s);var v=function(){return t};e.exports={getProducts:v,getBestSellers:function(){return v()},getNewArrivals:function(){return v()},getTopRated:function(){return v()},getMiscallaneous:function(){return v()},getTrendingNow:function(){return v()},getPopularProducts:function(){return v()},getRecommendations:function(){return v()},getBrowseByCategories:function(){return h}}},Fuct:function(e,a,t){var s=t("0T/a"),n=t("dwSY");s(s.G+s.F*(parseInt!=n),{parseInt:n})},TkVQ:function(e,a,t){var s=t("6BQ9"),n=!1,i=!0;e.exports={minLength:function(e){var a=e.value,t=e.validationRules,r=e.ref,o=e.name;return a.length<s(t.minLength)?(r.classList.remove("valid"),r.classList.add("in-valid"),i=!1,n=!1):(r.classList.remove("in-valid"),r.classList.add("valid"),n=!0,i=!0),{valid:n,executor:"minLength",forwardToNextValidator:i,name:o,value:a,ref:r}},maxLength:function(e){var a=e.value,t=e.validationRules,r=e.ref,o=e.name;return a.length>s(t.maxLength)?(r.classList.remove("valid"),r.classList.add("in-valid"),i=!1,n=!1):(r.classList.remove("in-valid"),r.classList.add("valid"),n=!0,i=!0),{valid:n,executor:"maxLength",forwardToNextValidator:i,name:o,value:a,ref:r}},emailValidator:function(e){var a=e.value,t=(e.validationRules,e.ref),s=e.name;return/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g.test(a)?(t.classList.remove("in-valid"),t.classList.add("valid"),n=!0,i=!0):(t.classList.remove("valid"),t.classList.add("in-valid"),i=!1,n=!1),{valid:n,executor:"emailValidator",forwardToNextValidator:i,name:s,ref:t,value:a}},passwordValidator:function(e){console.log(e);var a=e.value,t=(e.validationRules,e.ref),s=e.name;return/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(a)?(t.classList.remove("in-valid"),t.classList.add("valid"),n=!0,i=!0):(t.classList.remove("valid"),t.classList.add("in-valid"),i=!1,n=!1),{valid:n,executor:"passwordValidator",forwardToNextValidator:i,name:s,value:a,ref:t}},digitsValidator:function(e){var a=e.value,t=(e.validationRules,e.ref),s=e.name;return/^\d+$/.test(a)?(t.classList.remove("in-valid"),t.classList.add("valid"),n=!0,i=!0):(t.classList.remove("valid"),t.classList.add("in-valid"),i=!1,n=!1),{valid:n,executor:"numberValidator",forwardToNextValidator:i,name:s,ref:t,value:a}}}},VKpo:function(e,a,t){t("Fuct"),e.exports=t("p9MR").parseInt},Vphk:function(e,a,t){t("0lY0"),e.exports=t("p9MR").Object.getOwnPropertySymbols},XoMD:function(e,a,t){e.exports=t("aVTH")},Yzr4:function(e,a,t){var s=t("0T/a"),n=t("5foh"),i=t("14Ie"),r=t("cCpf"),o="["+r+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),m=function(e,a,t){var n={},o=i((function(){return!!r[e]()||"\u200b\x85"!="\u200b\x85"[e]()})),l=n[e]=o?a(u):r[e];t&&(n[t]=l),s(s.P+s.F*o,"String",n)},u=m.trim=function(e,a){return e=String(n(e)),1&a&&(e=e.replace(l,"")),2&a&&(e=e.replace(c,"")),e};e.exports=m},aVTH:function(e,a,t){t("rzGU"),e.exports=t("p9MR").Object.getOwnPropertyDescriptors},cCpf:function(e,a){e.exports="\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},dwSY:function(e,a,t){var s=t("2jw7").parseInt,n=t("Yzr4").trim,i=t("cCpf"),r=/^[-+]?0[xX]/;e.exports=8!==s(i+"08")||22!==s(i+"0x16")?function(e,a){var t=n(String(e),3);return s(t,a>>>0||(r.test(t)?16:10))}:s},lt0m:function(e,a,t){t("ot2h");var s=t("p9MR").Object;e.exports=function(e,a){return s.defineProperties(e,a)}},ot2h:function(e,a,t){var s=t("0T/a");s(s.S+s.F*!t("fZVS"),"Object",{defineProperties:t("9Wj7")})},qjIw:function(e,a,t){"use strict";t.r(a);var s=t("q1tI"),n=t.n(s),i=t("NvAs"),r=t("nOHt"),o=t("ln6h"),l=t.n(o),c=t("Cj2W"),m=t("MB5O"),u=t("/fyh"),d=t("AKbA"),p=n.a.createElement,f=new d.a,h=t("EfoT");var g=function(e){var a=Object(r.useRouter)(),t=Object(s.useState)([]),i=t[0],o=t[1],d=Object(s.useContext)(m.a),g=d.addToCart,y=d.addToWishlist,b=Object(s.useRef)(),_=Object(s.useRef)(),N=Object(s.useState)(!1),I=N[0],w=N[1],x=Object(s.useState)(!1),k=x[0],L=x[1],S=Object(s.useState)(!1),C=S[0],O=S[1],j=Object(s.useState)("ADD TO CART"),A=j[0],R=j[1],T=Object(s.useState)(""),E=T[0],P=T[1],D=Object(s.useState)(!1),V=D[0],U=D[1],M=Object(s.useState)(!1),z=M[0],X=M[1],q=Object(s.useState)(!1),F=q[0],B=q[1],H=Object(s.useState)("ADD TO WISHLIST"),W=H[0],Y=H[1];return Object(s.useEffect)((function(){var e,t={},s=[];if(a.query&&a.query.id)try{if(e=a.query.id,-1!=a.asPath.indexOf("?")){var n=a.asPath.split("?");-1!=n[1].indexOf("-")?s=n[1].split("-"):s.push(n[1])}t=h.getProducts().find((function(a){return a.sku==e}))}catch(i){}o(t),s.push(t.name),P(s)}),[i]),p(n.a.Fragment,null,p("div",{className:""},p(u.a,{link:E})," "),p("div",{className:"container-fluid __productlisting"},p("div",{className:"row"},p("div",{className:"col-xs-12 col-md-4"},p("img",{className:"img-responsive",src:i.bigImg?i.bigImg:i.img,alt:"product image"})),p("div",{className:"col-xs-12 col-md-5 __fullview_products_wrapper"},p("div",{className:"__fullview_title_wrapper"},p("h1",{className:"__fullview_title"},p("span",null,i.name))),p("div",{className:"line-height"},"by : ",p("a",null,i.brand)),p("div",{className:"__fullview_separator"},"ratings :  ",p("span",{className:"yellow-tag"},i.ratings),p("a",null,"(",i.comments," reviews)")),p("div",{className:"__fullview_price"},"Price : ",p("span",null,"AED ",i.newPrice)," "),p("p",{className:"__fullview_vat_note"},"all prices are VAT inclusive"),p("div",{className:"__fullview_bold_note instock"},p("span",null,"Usually ships within 2 to 3 days.")," "),p("div",{className:"line-height"},"Manufuctured and sold by ",i.brand," and ships and delivered by QExpress"),p("div",{className:"__fullview_bold_note",style:{lineHeight:"1.8rem",marginTop:"1rem"}},"Get it as soon as Monday, April XX-XX, Month XX when you choose Standard Delivery at checkout."),p("div",{className:""},"Edition : 5th Generation"),p("div",{className:"row __fullview_action_btns"},p("div",{className:"col-xs-12 col-md-6"},p("a",{ref:b,className:"customButton __checkout_confirm_btn",onClick:function(){return function(e){var a,t;return l.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return R("ADDING ..."),L(!1),w(!0),O(!1),f.disabledElem(b),a=!1,s.next=8,l.a.awrap(g(e,"cart"));case 8:(t=s.sent).success?(L(!0),w(!1),a=!0):O(!0),R(t.message.toUpperCase()),setTimeout((function(){a||(f.enableElem(b),O(!1),R("ADD TO CART"))}),4e3);case 12:case"end":return s.stop()}}))}(i)}},k?null:p("i",{className:"fas fa-shopping-cart __quick_item_font_awsome"}),A,k?p(c.d,{label:"",paragraph:!1,class:"instock"}):null,I?p(c.c,{label:"",paragraph:!1}):null,C?p(c.a,{label:"",paragraph:!1,class:"outofstock"}):null)),p("div",{className:"col-xs-12 col-md-6"},p("a",{ref:_,className:"customButton __checkout_confirm_btn",onClick:function(){return function(e){var a,t;return l.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return Y("ADDING ..."),X(!1),U(!0),B(!1),f.disabledElem(_),a=!1,s.next=8,l.a.awrap(y(e));case 8:(t=s.sent).success?(X(!0),U(!1),a=!0):B(!0),Y(t.message.toUpperCase()),setTimeout((function(){a||(f.enableElem(_),B(!1),Y("ADD TO WISHLIST"))}),4e3);case 12:case"end":return s.stop()}}))}(i)}}," ",z?null:p("i",{className:"far fa-heart __quick_item_font_awsome"}),W,z?p(c.d,{label:"",paragraph:!1,class:"instock"}):null,V?p(c.c,{label:"",paragraph:!1}):null,F?p(c.a,{label:"",paragraph:!1,class:"outofstock"}):null)))),p("div",{className:"col-xs-12 col-md-3 __fullview_ishop_facts"},p("p",null,p("i",{className:"fas fa-undo"})," Enjoy hassle free returns with this offer."),p("p",null,p("i",{className:"fas fa-credit-card"}),"We accept major credit & debut cards."),p("p",null,p("i",{className:"fas fa-home"}),"Trusted suppliers."),p("p",null,p("i",{className:"fas fa-truck"}),"Fast delivery."),p("p",null,p("i",{className:"fas fa-user"}),"Warranty guaranteed."))),p("div",{className:"row __fullview_product_description"},p("div",{className:"col-xs-12"},p(v,{item:i})))))};function v(e){return p("div",{className:"tabsCard"},p("ul",{className:"nav nav-tabs",role:"tablist"},p("li",{role:"presentation",className:"active"},p("a",{href:"#home","aria-controls":"home",role:"tab","data-toggle":"tab"},p("span",null,"OVERVIEW"))),p("li",{role:"presentation"},p("a",{href:"#profile","aria-controls":"profile",role:"tab","data-toggle":"tab"}," ",p("span",null,"PRODUCT DETAILS"))),p("li",{role:"presentation"},p("a",{href:"#messages","aria-controls":"messages",role:"tab","data-toggle":"tab"},p("span",null,"PRODUCT SPECS"))),p("li",{role:"presentation"},p("a",{href:"#settings","aria-controls":"settings",role:"tab","data-toggle":"tab"},p("span",null,"RATINGS & COMMENTS")))),p("div",{className:"tab-content"},p("div",{role:"tabpanel",className:"tab-pane active",id:"home"},p("p",{className:"line-height bold"},"INTRODUCTION"),"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",p("p",{className:"line-height bold mtop-2"},"HIGHLIGHTS"),p("ul",null,p("li",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry"),p("li",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry"),p("li",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry"),p("li",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry"),p("li",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry"),p("li",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry"))),p("div",{role:"tabpanel",className:"tab-pane",id:"profile"},p("p",{className:"line-height bold"},"DETAILS"),"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),p("div",{role:"tabpanel",className:"tab-pane",id:"messages"},p("p",{className:"line-height bold"},"SPECIFICATIONS"),"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),p("div",{role:"tabpanel",className:"tab-pane",id:"settings"},p("p",{className:"line-height bold"},"OVERALL RATING"),p("div",{className:"col-xs-4"},p("div",{className:"overallratings bold"},e.item.ratings),p("p",{className:"line-height"},"based on the reviews")),p("div",{className:"col-xs-8"},p("p",{className:"line-height bold underline"},"OVERVIEWS"),p("p",{className:"line-height bold mb-0"},"User 1"),p("p",{className:"line-height"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"),p("p",{className:"line-height bold mb-0"},"User 2"),p("p",{className:"line-height"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"),p("p",{className:"line-height bold mb-0"},"User 3"),p("p",{className:"line-height"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"),p("p",{className:"line-height bold mb-0"},"User 4"),p("p",{className:"line-height"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"),p("p",{className:"line-height bold mb-0"},"User 5"),p("p",{className:"line-height"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and")))))}t.d(a,"default",(function(){return b}));var y=n.a.createElement;function b(){Object(r.useRouter)();return Object(s.useEffect)((function(){})),y(i.a,{title:"Product details",description:"Product details page for the project"},y("div",{className:"container-fluid __registeration"},y("div",{className:"row"},y("div",{className:"col-xs-12"},y("h2",{className:"text-center"},"  ITEM DETAILS "),y(g,{search:"PRODUCT DETAILS"})))))}},qwsB:function(e,a,t){var s=t("2HZK"),n=t("McIs"),i=t("D4ny"),r=t("2jw7").Reflect;e.exports=r&&r.ownKeys||function(e){var a=s.f(i(e)),t=n.f;return t?a.concat(t(e)):a}},rzGU:function(e,a,t){var s=t("0T/a"),n=t("qwsB"),i=t("aput"),r=t("Ym6j"),o=t("s+zB");s(s.S,"Object",{getOwnPropertyDescriptors:function(e){for(var a,t,s=i(e),l=r.f,c=n(s),m={},u=0;c.length>u;)void 0!==(t=l(s,a=c[u++]))&&o(m,a,t);return m}})},vYYK:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var s=t("hfKm"),n=t.n(s);function i(e,a,t){return a in e?n()(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}}},[["D/r9",1,2,0,3]]]);