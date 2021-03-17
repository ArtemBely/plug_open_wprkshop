(()=>{"use strict";var e={301:(e,t,r)=>{const n=require("react");var c=r.n(n);const a=require("react-router-dom"),o=require("@babel/runtime/helpers/classCallCheck");var i=r.n(o);const s=require("@babel/runtime/helpers/createClass");var l=r.n(s);const u=require("@babel/runtime/helpers/inherits");var f=r.n(u);const d=require("@babel/runtime/helpers/possibleConstructorReturn");var p=r.n(d);const h=require("@babel/runtime/helpers/getPrototypeOf");var v=r.n(h);const m=function(e){f()(o,e);var t,r,n=(t=o,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=v()(t);if(r){var c=v()(this).constructor;e=Reflect.construct(n,arguments,c)}else e=n.apply(this,arguments);return p()(this,e)});function o(){return i()(this,o),n.apply(this,arguments)}return l()(o,[{key:"render",value:function(){return c().createElement("div",{className:"header"},c().createElement("div",null),c().createElement("div",{id:"logo"},"Collab"),c().createElement(a.NavLink,{to:"/work",className:"how_does_it_work header_elements",activeClassName:"active_header"},"Как это работает"),c().createElement(a.NavLink,{to:"/contracts",className:"contracts header_elements",activeClassName:"active_header"},"Договора"),c().createElement(a.NavLink,{to:"/finances",className:"finances header_elements",activeClassName:"active_header"},"Финансы"),c().createElement(a.NavLink,{to:"/clients",className:"clients header_elements",activeClassName:"active_header"},"Клиенты"),c().createElement("div",null))}}]),o}(c().Component);const y=[{path:["/","/work","/contracts","/finances","/clients"],exact:!0,component:function(e){f()(a,e);var t,r,n=(t=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=v()(t);if(r){var c=v()(this).constructor;e=Reflect.construct(n,arguments,c)}else e=n.apply(this,arguments);return p()(this,e)});function a(){return i()(this,a),n.apply(this,arguments)}return l()(a,[{key:"render",value:function(){return c().createElement("div",null,c().createElement(m,null))}}]),a}(c().Component)}];const b=function(e){f()(o,e);var t,r,n=(t=o,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=v()(t);if(r){var c=v()(this).constructor;e=Reflect.construct(n,arguments,c)}else e=n.apply(this,arguments);return p()(this,e)});function o(){return i()(this,o),n.apply(this,arguments)}return l()(o,[{key:"render",value:function(){return c().createElement("div",{className:"main_wrap"},c().createElement(a.Switch,null,y.map((function(e,t){return c().createElement(a.Route,{key:1,path:e.path,exact:e.exact,component:e.component})}))))}}]),o}(c().Component),R=require("express");var C=r.n(R);const _=require("react-dom/server"),x=require("cookie-parser");var E=r.n(x);const N=require("body-parser");var q=r.n(N);const w=require("serialize-javascript");var k=r.n(w);const O=require("express-validator");var P=r.n(O),g=C()();process.env.PORT,g.use((function(e,t,r){t.setHeader("Cache-Control","no-cache, no-store, must-revalidate"),t.setHeader("Pragma","no-cache"),t.setHeader("Expires","0"),t.setHeader("Access-Control-Allow-Origin","*"),t.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization"),r()})),g.use(C().static("public")),g.use(q().json()),g.use(q().urlencoded({extended:!1})),g.use(C().urlencoded({extended:!1})),g.use(P()()),g.use(E()()),g.get("*",(function(e,t,r){var n=y.find((function(t){return(0,a.matchPath)(e.url,t)}))||{};(n.fetchInitialData?n.fetchInitialData(e.path):Promise.resolve()).then((function(r){var n={data:r},o=(0,_.renderToString)(c().createElement(a.StaticRouter,{location:e.url,context:n},c().createElement(b,{data:r}))),i='<!DOCTYPE html>\n            <html>\n                <head>\n                  <title>collab</title>\n                  <link rel="stylesheet" type="text/css" href="../main.css">\n                    <meta name="viewport" content="width=device-width, initial-scale=1">\n                      <script src=\'/bundle.js\' defer><\/script>\n                        <script>window.__INITIAL_DATA__= '.concat(k()(r),'<\/script>\n                            <title>COLLAB</title>\n                          </head>\n                        <body>\n                       <div id="app">\n                     ').concat(o,"\n                  </div>\n                </body>\n            </html>");return t.send(i)})).catch(r)})),g.use((function(e,t,r){var n=new Error("Noooo");n.status=404,r(n)})),g.listen(8888,(function(){console.log("connected!")}))},346:e=>{e.exports=require("babel-regenerator-runtime")}},t={};function r(n){var c=t[n];if(void 0!==c)return c.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r(346),r(301)})();