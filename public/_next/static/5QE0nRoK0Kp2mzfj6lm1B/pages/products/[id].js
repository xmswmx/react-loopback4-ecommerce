(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"/fyh":function(e,l,t){"use strict";var a=t("q1tI"),n=t.n(a),r=t("wx14"),c=t("zLVn"),o=t("eC2I"),u=t.n(o),i=t("vUet"),d=t("dbZe"),s=n.a.forwardRef((function(e,l){var t=e.bsPrefix,a=e.active,o=e.className,s=e.as,b=void 0===s?"li":s,v=Object(c.a)(e,["bsPrefix","active","className","as"]),m=Object(i.b)(t,"breadcrumb-item"),p=v.href,f=v.title,y=v.target,h=Object(c.a)(v,["href","title","target"]),C={href:p,title:f,target:y};return n.a.createElement(b,{ref:l,className:u()(m,o,{active:a}),"aria-current":a?"page":void 0},a?n.a.createElement("span",Object(r.a)({},h,{className:u()({active:a})})):n.a.createElement(d.a,Object(r.a)({},h,C)))}));s.displayName="BreadcrumbItem",s.defaultProps={active:!1};var b=s,v=n.a.forwardRef((function(e,l){var t=e.bsPrefix,a=e.className,o=e.listProps,d=e.children,s=e.label,b=e.as,v=void 0===b?"nav":b,m=Object(c.a)(e,["bsPrefix","className","listProps","children","label","as"]),p=Object(i.b)(t,"breadcrumb");return n.a.createElement(v,Object(r.a)({"aria-label":s,className:a,ref:l},m),n.a.createElement("ol",Object(r.a)({},o,{className:u()(p,o.className)}),d))}));v.displayName="Breadcrumb",v.defaultProps={label:"breadcrumb",listProps:{}},v.Item=b;var m=v,p=n.a.createElement;l.a=function(e){return p(n.a.Fragment,null,p(m,null,p(m.Item,{href:"/"},"HOME"),(e.link.length,p(m.Item,{active:!0,href:"/products/".concat(decodeURIComponent(e.link[0]))},decodeURIComponent(e.link[0]).toUpperCase())),2==e.link.length?p(m.Item,{active:!0,href:"/products/".concat(decodeURIComponent(e.link[0]),"-").concat(decodeURIComponent(e.link[1]))},decodeURIComponent(e.link[1]).toUpperCase()):p(m.Item,{href:"/products/".concat(decodeURIComponent(e.link[0]),"-").concat(decodeURIComponent(e.link[1]))},e.link[1]?decodeURIComponent(e.link[1]).toUpperCase():""),3==e.link.length?p(m.Item,{active:!0},decodeURIComponent(e.link[2]).toUpperCase()):null))}},gt86:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/[id]",function(){return t("wXvK")}])},wXvK:function(e,l,t){"use strict";t.r(l);var a=t("q1tI"),n=t.n(a),r=t("NvAs"),c=t("nOHt"),o=(t("T6JH"),t("yXXE")),u=t("Cj2W"),i=t("wx14"),d=t("zLVn"),s=t("eC2I"),b=t.n(s),v=t("JCAc"),m=t("vUet"),p=t("ILyh"),f=n.a.createContext(null);function y(e,l){var t=Object(a.useContext)(f),n=Object(a.useContext)(p.a);return function(a){n(e===t?null:e,a),l&&l(a)}}var h=n.a.forwardRef((function(e,l){var t=e.as,a=void 0===t?"button":t,r=e.children,c=e.eventKey,o=e.onClick,u=Object(d.a)(e,["as","children","eventKey","onClick"]),s=y(c,o);return n.a.createElement(a,Object(i.a)({ref:l,onClick:s},u),r)})),C=t("vYJ8"),O=n.a.forwardRef((function(e,l){var t=e.children,r=e.eventKey,c=Object(d.a)(e,["children","eventKey"]),o=Object(a.useContext)(f);return n.a.createElement(C.a,Object(i.a)({ref:l,in:o===r},c),n.a.createElement("div",null,n.a.Children.only(t)))}));O.displayName="AccordionCollapse";var k=O,j=n.a.forwardRef((function(e,l){var t=Object(v.a)(e,{activeKey:"onSelect"}),a=t.as,r=void 0===a?"div":a,c=t.activeKey,o=t.bsPrefix,u=t.children,s=t.className,y=t.onSelect,h=Object(d.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]);return o=Object(m.b)(o,"accordion"),n.a.createElement(f.Provider,{value:c},n.a.createElement(p.a.Provider,{value:y},n.a.createElement(r,Object(i.a)({ref:l},h,{className:b()(s,o)}),u)))}));j.Toggle=h,j.Collapse=k;var x=j,g=t("YdCC"),N=t("U1MP"),I=t("Wzyw"),P=n.a.forwardRef((function(e,l){var t=e.bsPrefix,a=e.className,r=e.variant,c=e.as,o=void 0===c?"img":c,u=Object(d.a)(e,["bsPrefix","className","variant","as"]),s=Object(m.b)(t,"card-img");return n.a.createElement(o,Object(i.a)({ref:l,className:b()(r?s+"-"+r:s,a)},u))}));P.displayName="CardImg",P.defaultProps={variant:null};var w=P,H=Object(N.a)("h5"),E=Object(N.a)("h6"),K=Object(g.a)("card-body"),R=n.a.forwardRef((function(e,l){var t=e.bsPrefix,r=e.className,c=e.bg,o=e.text,u=e.border,s=e.body,v=e.children,p=e.as,f=void 0===p?"div":p,y=Object(d.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),h=Object(m.b)(t,"card"),C=Object(a.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return n.a.createElement(I.a.Provider,{value:C},n.a.createElement(f,Object(i.a)({ref:l},y,{className:b()(r,h,c&&"bg-"+c,o&&"text-"+o,u&&"border-"+u)}),s?n.a.createElement(K,null,v):v))}));R.displayName="Card",R.defaultProps={body:!1},R.Img=w,R.Title=Object(g.a)("card-title",{Component:H}),R.Subtitle=Object(g.a)("card-subtitle",{Component:E}),R.Body=K,R.Link=Object(g.a)("card-link",{Component:"a"}),R.Text=Object(g.a)("card-text",{Component:"p"}),R.Header=Object(g.a)("card-header"),R.Footer=Object(g.a)("card-footer"),R.ImgOverlay=Object(g.a)("card-img-overlay");var _=R,U=(t("/fyh"),n.a.createElement),S=t("EfoT");var B=function(e){var l=Object(a.useState)([]),t=l[0],r=l[1],c=Object(a.useState)([{key:"Featured",flag:"featured"},{key:"Price: High to Low",flag:"hTl"},{key:"Price: Low to High",flag:"lTh"},{key:"Newest Arrival",flag:"nA"}]),i=c[0],d=(c[1],Object(a.useState)("featured")),s=d[0],b=d[1],v=Object(a.useState)([]),m=(v[0],v[1]);return Object(a.useEffect)((function(){var l=[];-1!=e.breadCrumb.indexOf("-")?l=e.breadCrumb.split("-"):l.push(e.breadCrumb),r(S.getProducts()),m(l)}),[t]),U(n.a.Fragment,null,U("div",{className:"col-xs-12 col-md-3"},U(A,null)),U("div",{className:"col-xs-12 col-md-9 __productlisting_products_wrapper"},U("div",{className:"row __productlisting_products"},U("div",{className:" col-xs-12 __productlisting_products_sort"},U("div",{className:"pull-left"}," Showing 15 of 200 results for : ",e.search),U("div",{className:"pull-right"},U("label",null,"Sort by "),U("select",{value:s,onChange:function(e){b(e.target.value)}},i.map((function(e,l){return U("option",{key:l,value:e.flag}," ",e.key," ")}))))),t.map((function(l,t){return U("div",{className:"col-xs-12 col-sm-4 col-md-3",key:t},U(o.a,{productInfo:l,key:t,breadCrumb:e.breadCrumb}))}))),U(u.b,{LoadMore:function(){console.log("Loading more products ... ")}})))};function T(e){var l=e.children,t=y(e.eventKey,(function(){return console.log("totally custom!")}));return U("button",{type:"button",onClick:t},l)}function A(e){return U(x,{defaultActiveKey:"0"},U(_,null,U(_.Header,null,U(T,{eventKey:"0"}," Category ")),U(x.Collapse,{eventKey:"0"},U(_.Body,null,U("div",null,U("a",null,"Active wear")),U("div",null,U("a",null,"Hoodie")),U("div",null,U("a",null,"Shorts")),U("div",null,U("a",null,"Pants")),U("div",null,U("a",null,"Jeans")),U("div",null,U("a",null,"Vests")),U("div",null,U("a",null,"Jackets"))))),U(_,null,U(_.Header,null,U(T,{eventKey:"1"},"Fulfillment ")),U(x.Collapse,{eventKey:"1"},U(_.Body,null,U("div",null,U("input",{type:"checkbox"})," ",U("a",null,"iShop")),U("div",null,U("input",{type:"checkbox"})," ",U("a",null,"Euros")),U("div",null,U("input",{type:"checkbox"})," ",U("a",null,"QExpress"))))),U(_,null,U(_.Header,null,U(T,{eventKey:"2"},"Brand ")),U(x.Collapse,{eventKey:"2"},U(_.Body,null,U("div",null,U("input",{type:"checkbox"}),"  ",U("a",null,"Nike")),U("div",null,U("input",{type:"checkbox"}),"  ",U("a",null,"Addidas")),U("div",null,U("input",{type:"checkbox"}),"  ",U("a",null,"Puma")),U("div",null,U("input",{type:"checkbox"}),"  ",U("a",null,"Costa")),U("div",null,U("input",{type:"checkbox"}),"  ",U("a",null,"American Polo")),U("div",null,U("input",{type:"checkbox"}),"  ",U("a",null,"Tommy Hilfiger")),U("div",null,U("input",{type:"checkbox"}),"  ",U("a",null,"Reebok"))))),U(_,null,U(_.Header,null,U(T,{eventKey:"3"},"Price ")),U(x.Collapse,{eventKey:"3"},U(_.Body,null,U("div",null,U("a",null,"$ 0 - 10000"))))),U(_,null,U(_.Header,null,U(T,{eventKey:"4"},"Colour ")),U(x.Collapse,{eventKey:"4"},U(_.Body,null,U("div",null,U("input",{type:"checkbox"})," ",U("a",null,"Yellow")),U("div",null,U("input",{type:"checkbox"})," ",U("a",null,"Green")),U("div",null,U("input",{type:"checkbox"})," ",U("a",null,"Black")),U("div",null,U("input",{type:"checkbox"})," ",U("a",null,"Red")),U("div",null,U("input",{type:"checkbox"})," ",U("a",null,"Gray")),U("div",null,U("input",{type:"checkbox"})," ",U("a",null,"Blue"))))),U(_,null,U(_.Header,null,U(T,{eventKey:"5"},"Seller ")),U(x.Collapse,{eventKey:"5"},U(_.Body,null,U("div",null,U("a",null,"Hello! I'm the body")),U("div",null,U("a",null,"Hello! I'm the body")),U("div",null,U("a",null,"Hello! I'm the body")),U("div",null,U("a",null,"Hello! I'm the body")),U("div",null,U("a",null,"Hello! I'm the body")),U("div",null,U("a",null,"Hello! I'm the body"))))),U(_,null,U(_.Header,null,U(T,{eventKey:"6"},"Seller 1")),U(x.Collapse,{eventKey:"6"},U(_.Body,null,U("div",null,U("a",null,"Hello! I'm the body")),U("div",null,U("a",null,"Hello! I'm the body")),U("div",null,U("a",null,"Hello! I'm the body")),U("div",null,U("a",null,"Hello! I'm the body")),U("div",null,U("a",null,"Hello! I'm the body")),U("div",null,U("a",null,"Hello! I'm the body"))))))}t.d(l,"default",(function(){return J}));var L=n.a.createElement;function J(){var e=Object(c.useRouter)(),l=Object(a.useState)(""),t=l[0],n=l[1],o=Object(a.useState)([]),u=o[0],i=o[1];return Object(a.useEffect)((function(){if(e.query&&e.query.id)try{var l=e.query.id,t="",a="";-1!=l.indexOf("-")?(t=(l=l.split("-"))[0],a=l[1]):t=l,n(t+" "+a),i(e.query.id)}catch(r){n(url)}})),L(r.a,{title:"List Products",description:"Product listing page for the project"},L("div",{className:"container-fluid __registeration"},L("div",{className:"row"},L("h2",{className:"text-center"},"  ",t.toUpperCase()," "),L(B,{search:t,breadCrumb:u}))))}}},[["gt86",1,2,0,17,18,19]]]);