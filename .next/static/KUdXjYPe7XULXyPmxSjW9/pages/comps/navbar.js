(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"+jru":function(t,e,n){n("aPfg")("WeakMap")},"/eQG":function(t,e,n){n("v5Dd");var r=n("WEpk").Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}},"/h46":function(t,e,n){n("cHUd")("Map")},"/jkW":function(t,e,n){"use strict";n("hfKm")(e,"__esModule",{value:!0});var r=/\/\[[^\/]+?\](?=\/|$)/;e.isDynamicRoute=function(t){return r.test(t)}},"0Bsm":function(t,e,n){"use strict";var r=n("KI45");e.__esModule=!0,e.default=function(t){function e(e){return a.default.createElement(t,(0,o.default)({router:(0,i.useRouter)()},e))}e.getInitialProps=t.getInitialProps,e.origGetInitialProps=t.origGetInitialProps,0;return e};var o=r(n("htGi")),a=r(n("q1tI")),i=n("nOHt")},"16Al":function(t,e,n){"use strict";var r=n("WbBG");function o(){}function a(){}a.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},"17x9":function(t,e,n){t.exports=n("16Al")()},"5Uuq":function(t,e,n){var r=n("Jo+v"),o=n("hfKm"),a=n("G4HQ");function i(){if("function"!==typeof a)return null;var t=new a;return i=function(){return t},t}t.exports=function(t){if(t&&t.__esModule)return t;var e=i();if(e&&e.has(t))return e.get(t);var n={};if(null!=t){var a=o&&r;for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u)){var c=a?r(t,u):null;c&&(c.get||c.set)?o(n,u,c):n[u]=t[u]}}return n.default=t,e&&e.set(t,n),n}},"8+Nu":function(t,e,n){var r=n("8bdy"),o=n("fprZ"),a=n("Bh1o");t.exports=function(t,e){return r(t)||o(t,e)||a()}},"8bdy":function(t,e,n){var r=n("p0XB");t.exports=function(t){if(r(t))return t}},BURE:function(t,e,n){n("cHUd")("WeakMap")},Bh1o:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},G4HQ:function(t,e,n){t.exports=n("m5qO")},JAUf:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),u=n("k8Su"),c=(n("kkO7"),o.a.createElement);e.default=function(){return c("nav",{className:"nav"},c("div",{className:"leftSide"},c(i.a,{href:"/"},c("a",{className:"iconA"},c(u.default,{className:"navLogo"})))),c("div",{className:"rightSide"},c("div",{className:"navMenuDiv"},c(i.a,{href:"/story"},c("a",{className:"myStory"},"My Story")),c(i.a,{href:"/work"},c("a",{className:"work"},"Work")),c(i.a,{href:"/contact"},c("a",{className:"contact"},"Contact")))))}},"Jo+v":function(t,e,n){t.exports=n("/eQG")},LX0d:function(t,e,n){t.exports=n("UDep")},Mz89:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/comps/navbar",function(){return n("JAUf")}])},Oc8Q:function(t,e,n){"use strict";var r,o=n("5T2Y"),a=n("V7Et")(0),i=n("kTiW"),u=n("6/1s"),c=n("kwZ1"),s=n("kB4c"),f=n("93I4"),l=n("n3ko"),p=n("n3ko"),h=!o.ActiveXObject&&"ActiveXObject"in o,v=u.getWeak,d=Object.isExtensible,y=s.ufstore,m=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},g={get:function(t){if(f(t)){var e=v(t);return!0===e?y(l(this,"WeakMap")).get(t):e?e[this._i]:void 0}},set:function(t,e){return s.def(l(this,"WeakMap"),t,e)}},w=t.exports=n("raTm")("WeakMap",m,g,s,!0,!0);p&&h&&(c((r=s.getConstructor(m,"WeakMap")).prototype,g),u.NEED=!0,a(["delete","has","get","set"],function(t){var e=w.prototype,n=e[t];i(e,t,function(e,o){if(f(e)&&!d(e)){this._f||(this._f=new r);var a=this._f[t](e,o);return"set"==t?this:a}return n.call(this,e,o)})}))},P5f7:function(t,e,n){"use strict";var r=n("8+Nu");n("hfKm")(e,"__esModule",{value:!0}),e.rewriteUrlForNextExport=function(t){var e=t.split("#"),n=r(e,2),o=n[0],a=n[1],i=o.split("?"),u=r(i,2),c=u[0],s=u[1];return c=c.replace(/\/$/,""),/\.[^\/]+\/?$/.test(c)||(c+="/"),s&&(c+="?"+s),a&&(c+="#"+a),c}},Rp86:function(t,e,n){n("bBy9"),n("FlQf"),t.exports=n("fXsU")},UDep:function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),t.exports=n("WEpk").Map},WbBG:function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},XLbu:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},XXOK:function(t,e,n){t.exports=n("Rp86")},YFqc:function(t,e,n){t.exports=n("cTJO")},YTqd:function(t,e,n){"use strict";n("hfKm")(e,"__esModule",{value:!0}),e.getRouteRegex=function(t){var e=(t.replace(/\/$/,"")||"/").replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&"),n={},r=1,o=e.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g,function(t,e){return n[e.replace(/\\([|\\{}()[\]^$+*?.-])/g,"$1").replace(/^\.{3}/,"")]=r++,0===e.indexOf("\\.\\.\\.")?"/(.+?)":"/([^/]+?)"});return{re:new RegExp("^"+o+"(?:/)?$","i"),groups:n}}},b3CU:function(t,e,n){var r=n("pbKT"),o=n("vjea");function a(e,n,i){return!function(){if("undefined"===typeof Reflect||!r)return!1;if(r.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(r(Date,[],function(){})),!0}catch(t){return!1}}()?t.exports=a=function(t,e,n){var r=[null];r.push.apply(r,e);var a=new(Function.bind.apply(t,r));return n&&o(a,n.prototype),a}:t.exports=a=r,a.apply(null,arguments)}t.exports=a},cTJO:function(t,e,n){"use strict";var r=n("/HRN"),o=n("WaGi"),a=n("ZDA2"),i=n("/+P4"),u=n("N9n2"),c=n("5Uuq"),s=n("KI45");e.__esModule=!0,e.default=void 0;var f,l=s(n("LX0d")),p=n("CxY0"),h=c(n("q1tI")),v=(s(n("17x9")),s(n("nOHt"))),d=(n("P5f7"),n("g/15"));function y(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var m=new l.default,g=window.IntersectionObserver;function w(){return f||(g?f=new g(function(t){t.forEach(function(t){if(m.has(t.target)){var e=m.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),m.delete(t.target),e())}})},{rootMargin:"200px"}):void 0)}var _=function(t){function e(t){var n;return r(this,e),(n=a(this,i(e).call(this,t))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(t){var e=null,n=null,r=null;return function(o,a){if(r&&o===e&&a===n)return r;var i=t(o,a);return e=o,n=a,r=i,i}}(function(t,e){return{href:y(t),as:e?y(e):e}}),n.linkClicked=function(t){var e=t.currentTarget,r=e.nodeName,o=e.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=n.formatUrls(n.props.href,n.props.as),i=a.href,u=a.as;if(function(t){var e=(0,p.parse)(t,!1,!0),n=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(i)){var c=window.location.pathname;i=(0,p.resolve)(c,i),u=u?(0,p.resolve)(c,u):i,t.preventDefault();var s=n.props.scroll;null==s&&(s=u.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](i,u,{shallow:n.props.shallow}).then(function(t){t&&s&&(window.scrollTo(0,0),document.body.focus())})}}},n.p=!1!==t.prefetch,n}return u(e,t),o(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(t){var e=this;this.p&&g&&t&&t.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(t,e){var n=w();return n?(n.observe(t),m.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}m.delete(t)}):function(){}}(t,function(){e.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href,n=(0,p.resolve)(t,e);v.default.prefetch(n)}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=h.default.createElement("a",null,e));var a=h.Children.only(e),i={ref:function(e){t.handleRef(e),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(e):"object"===typeof a.ref&&(a.ref.current=e))},onMouseEnter:function(e){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),t.prefetch()},onClick:function(e){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),h.default.cloneElement(a,i)}}]),e}(h.Component);_.propTypes=void 0;var b=_;e.default=b},czwh:function(t,e,n){var r=n("Y7ZC"),o=n("oVml"),a=n("eaoh"),i=n("5K7Z"),u=n("93I4"),c=n("KUxP"),s=n("wYmx"),f=(n("5T2Y").Reflect||{}).construct,l=c(function(){function t(){}return!(f(function(){},[],t)instanceof t)}),p=!c(function(){f(function(){})});r(r.S+r.F*(l||p),"Reflect",{construct:function(t,e){a(t),i(e);var n=arguments.length<3?t:a(arguments[2]);if(p&&!l)return f(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(s.apply(t,r))}var c=n.prototype,h=o(u(c)?c:Object.prototype),v=Function.apply.call(t,h,e);return u(v)?v:h}})},dVTT:function(t,e,n){n("aPfg")("Map")},dZ6Y:function(t,e,n){"use strict";var r=n("SqZg");n("hfKm")(e,"__esModule",{value:!0}),e.default=function(){var t=r(null);return{on:function(e,n){(t[e]||(t[e]=[])).push(n)},off:function(e,n){t[e]&&t[e].splice(t[e].indexOf(n)>>>0,1)},emit:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];(t[e]||[]).slice().map(function(t){t.apply(void 0,r)})}}}},elyg:function(t,e,n){"use strict";var r=n("ln6h"),o=n("+oT+"),a=n("8+Nu"),i=n("eVuF"),u=n("Qetd"),c=n("/HRN"),s=n("WaGi"),f=n("hfKm"),l=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};f(e,"__esModule",{value:!0});var p=n("CxY0"),h=l(n("dZ6Y")),v=n("g/15"),d=n("P5f7"),y=n("/jkW"),m=n("gguc"),g=n("YTqd");function w(t){return t.replace(/\/$/,"")||"/"}var _=function(){function t(e,n,r,o){var a=this,i=o.initialProps,u=o.pageLoader,s=o.App,f=o.wrapApp,l=o.Component,p=o.err,h=o.subscription;c(this,t),this.onPopState=function(t){if(t.state){if((!t.state||!a.isSsr||t.state.url!==a.pathname||t.state.as!==a.asPath)&&(!a._bps||a._bps(t.state))){var e=t.state,n=e.url,r=e.as,o=e.options;0,a.replace(n,r,o)}}else{var i=a.pathname,u=a.query;a.changeState("replaceState",v.formatWithValidation({pathname:i,query:u}),v.getURL())}},this.route=w(e),this.components={},"/_error"!==e&&(this.components[this.route]={Component:l,props:i,err:p}),this.components["/_app"]={Component:s},this.events=t.events,this.pageLoader=u,this.pathname=e,this.query=n,this.asPath=y.isDynamicRoute(e)&&__NEXT_DATA__.autoExport?e:r,this.sub=h,this.clc=null,this._wrapApp=f,this.isSsr=!0,this.changeState("replaceState",v.formatWithValidation({pathname:e,query:n}),r),window.addEventListener("popstate",this.onPopState)}return s(t,[{key:"update",value:function(t,e){var n=e.default||e,r=this.components[t];if(!r)throw new Error("Cannot update unavailable route: ".concat(t));var o=u({},r,{Component:n});this.components[t]=o,"/_app"!==t?t===this.route&&this.notify(o):this.notify(this.components[this.route])}},{key:"reload",value:function(){window.location.reload()}},{key:"back",value:function(){window.history.back()}},{key:"push",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.change("pushState",t,e,n)}},{key:"replace",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.change("replaceState",t,e,n)}},{key:"change",value:function(e,n,r,o){var a=this;return new i(function(i,c){o._h||(a.isSsr=!1),v.SUPPORTS_PERFORMANCE_USER_TIMING&&performance.mark("routeChange");var s="object"===typeof n?v.formatWithValidation(n):n,f="object"===typeof r?v.formatWithValidation(r):r;if(a.abortComponentLoad(f),!o._h&&a.onlyAHashChange(f))return a.asPath=f,t.events.emit("hashChangeStart",f),a.changeState(e,s,f),a.scrollToHash(f),t.events.emit("hashChangeComplete",f),i(!0);var l=p.parse(s,!0),h=l.pathname,d=l.query,_=l.protocol;if(!h||_)return i(!1);a.urlIsNew(f)||(e="replaceState");var b=w(h),k=o.shallow,x=void 0!==k&&k;if(y.isDynamicRoute(b)){var C=p.parse(f).pathname,E=g.getRouteRegex(b),R=m.getRouteMatcher(E)(C);if(!R){return console.error("The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as"),i(!1)}u(d,R)}t.events.emit("routeChangeStart",f),a.getRouteInfo(b,h,d,f,x).then(function(n){var r=n.error;if(r&&r.cancelled)return i(!1);t.events.emit("beforeHistoryChange",f),a.changeState(e,s,f,o);var c=window.location.hash.substring(1);if(a.set(b,h,d,f,u({},n,{hash:c})),r)throw t.events.emit("routeChangeError",r,f),r;return t.events.emit("routeChangeComplete",f),i(!0)},c)})}},{key:"changeState",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};"pushState"===t&&v.getURL()===n||window.history[t]({url:e,as:n,options:r},null,n)}},{key:"getRouteInfo",value:function(t,e,n,r){var o=this,a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=this.components[t];return a&&u&&this.route===t?i.resolve(u):new i(function(e,n){if(u)return e(u);o.fetchComponent(t).then(function(t){return e({Component:t})},n)}).then(function(a){var u=a.Component;return new i(function(i,c){o.getInitialProps(u,{pathname:e,query:n,asPath:r}).then(function(e){a.props=e,o.components[t]=a,i(a)},c)})}).catch(function(t){return new i(function(a){return"PAGE_LOAD_ERROR"===t.code?(window.location.href=r,t.cancelled=!0,a({error:t})):t.cancelled?a({error:t}):void a(o.fetchComponent("/_error").then(function(r){var a={Component:r,err:t};return new i(function(i){o.getInitialProps(r,{err:t,pathname:e,query:n}).then(function(e){a.props=e,a.error=t,i(a)},function(e){console.error("Error in error page `getInitialProps`: ",e),a.error=t,a.props={},i(a)})})}))})})}},{key:"set",value:function(t,e,n,r,o){this.route=t,this.pathname=e,this.query=n,this.asPath=r,this.notify(o)}},{key:"beforePopState",value:function(t){this._bps=t}},{key:"onlyAHashChange",value:function(t){if(!this.asPath)return!1;var e=this.asPath.split("#"),n=a(e,2),r=n[0],o=n[1],i=t.split("#"),u=a(i,2),c=u[0],s=u[1];return!(!s||r!==c||o!==s)||r===c&&o!==s}},{key:"scrollToHash",value:function(t){var e=t.split("#"),n=a(e,2)[1];if(""!==n){var r=document.getElementById(n);if(r)r.scrollIntoView();else{var o=document.getElementsByName(n)[0];o&&o.scrollIntoView()}}else window.scrollTo(0,0)}},{key:"urlIsNew",value:function(t){return this.asPath!==t}},{key:"prefetch",value:function(t){var e=this;return new i(function(n,r){var o=p.parse(t),a=o.pathname,i=o.protocol;if(a&&!i){0;var u=w(a);e.pageLoader.prefetch(u).then(n,r)}})}},{key:"fetchComponent",value:function(){var t=o(r.mark(function t(e){var n,o,a,i;return r.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=!1,o=this.clc=function(){n=!0},t.next=4,this.pageLoader.loadPage(e);case 4:if(a=t.sent,!n){t.next=9;break}throw(i=new Error('Abort fetching component for route: "'.concat(e,'"'))).cancelled=!0,i;case 9:return o===this.clc&&(this.clc=null),t.abrupt("return",a);case 11:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"getInitialProps",value:function(){var t=o(r.mark(function t(e,n){var o,a,u,c,s,f,l,h,d;return r.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=!1,a=function(){o=!0},this.clc=a,u=this.components["/_app"].Component,!e.__NEXT_SPR){t.next=12;break}return f=p.parse(n.asPath||n.pathname),l=(l=f.pathname)&&"/"!==l?l:"/index",t.next=9,fetch("/_next/data/".concat(__NEXT_DATA__.buildId).concat(l,".json")).then(function(t){if(!t.ok)throw s=t.status,new Error("failed to load prerender data");return t.json()}).catch(function(t){return console.error("Failed to load data",s,t),window.location.href=l,new i(function(){})});case 9:c=t.sent,t.next=17;break;case 12:return h=this._wrapApp(u),n.AppTree=h,t.next=16,v.loadGetInitialProps(u,{AppTree:h,Component:e,router:this,ctx:n});case 16:c=t.sent;case 17:if(a===this.clc&&(this.clc=null),!o){t.next=22;break}throw(d=new Error("Loading initial props cancelled")).cancelled=!0,d;case 22:return t.abrupt("return",c);case 23:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},{key:"abortComponentLoad",value:function(e){if(this.clc){var n=new Error("Route Cancelled");n.cancelled=!0,t.events.emit("routeChangeError",n,e),this.clc(),this.clc=null}}},{key:"notify",value:function(t){this.sub(t,this.components["/_app"].Component)}}],[{key:"_rewriteUrlForNextExport",value:function(t){return d.rewriteUrlForNextExport(t)}}]),t}();_.events=h.default(),e.default=_},fXsU:function(t,e,n){var r=n("5K7Z"),o=n("fNZA");t.exports=n("WEpk").getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},fprZ:function(t,e,n){var r=n("XXOK"),o=n("yLu3");t.exports=function(t,e){if(o(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],a=!0,i=!1,u=void 0;try{for(var c,s=r(t);!(a=(c=s.next()).done)&&(n.push(c.value),!e||n.length!==e);a=!0);}catch(f){i=!0,u=f}finally{try{a||null==s.return||s.return()}finally{if(i)throw u}}return n}}},g33z:function(t,e,n){"use strict";var r=n("Wu5q"),o=n("n3ko");t.exports=n("raTm")("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=r.getEntry(o(this,"Map"),t);return e&&e.v},set:function(t,e){return r.def(o(this,"Map"),0===t?0:t,e)}},r,!0)},gguc:function(t,e,n){"use strict";var r=n("pLtp");n("hfKm")(e,"__esModule",{value:!0}),e.getRouteMatcher=function(t){var e=t.re,n=t.groups;return function(t){var o=e.exec(t);if(!o)return!1;var a={};return r(n).forEach(function(t){var e=o[n[t]];void 0!==e&&(a[t]=-1!==e.indexOf("/")?e.split("/").map(function(t){return decodeURIComponent(t)}):decodeURIComponent(e))}),a}}},k8Su:function(t,e,n){"use strict";n.r(e);var r=n("vYYK"),o=n("q1tI"),a=n.n(o).a.createElement;e.default=function(){var t={fill:"#333"};return a("svg",{width:"100%",height:"100%",viewBox:"0 0 25 25",version:"1.1",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2}},a("g",Object(r.a)({id:"Artboard11"},"id","Artboard1"),a("path",{d:"M12.021,2.95c0.068,-0.204 0.259,-0.341 0.474,-0.341c0.214,0 0.405,0.137 0.473,0.341c1.155,3.458 4.134,12.373 5.622,16.828c0.202,0.605 0.101,1.271 -0.272,1.788c-0.373,0.518 -0.972,0.825 -1.61,0.825c-2.428,0 -5.949,0 -8.388,0c-0.647,0 -1.255,-0.311 -1.633,-0.836c-0.378,-0.525 -0.481,-1.2 -0.276,-1.814c1.493,-4.466 4.458,-13.342 5.61,-16.791Z",style:t}),a("path",{d:"M12.128,2.92c0.034,-0.179 0.19,-0.309 0.373,-0.309c0.182,0 0.339,0.13 0.372,0.309c0.872,4.621 3.01,15.956 3.548,18.81c0.031,0.163 -0.013,0.332 -0.118,0.459c-0.106,0.128 -0.264,0.202 -0.43,0.202c-1.526,0 -5.235,0 -6.753,0c-0.164,0 -0.319,-0.073 -0.424,-0.199c-0.105,-0.126 -0.148,-0.293 -0.117,-0.454c0.536,-2.842 2.677,-14.193 3.549,-18.818Z",style:{fill:"#fee100"}}),a("path",{d:"M12.294,4.057c0.009,-0.105 0.096,-0.185 0.201,-0.185c0.104,0 0.192,0.08 0.2,0.185c0.44,5.552 1.454,18.334 1.454,18.334l-3.309,0c0,0 1.014,-12.782 1.454,-18.334Z",style:t}),a("path",{d:"M12.409,11.368c0.003,-0.048 0.043,-0.086 0.092,-0.086c0.048,0 0.088,0.038 0.091,0.086c0.203,3.04 0.676,10.131 0.731,10.946c0.001,0.02 -0.006,0.04 -0.02,0.054c-0.013,0.015 -0.032,0.023 -0.052,0.023c-0.281,0 -1.244,0 -1.509,0c-0.018,0 -0.035,-0.007 -0.047,-0.02c-0.012,-0.013 -0.018,-0.03 -0.017,-0.048c0.052,-0.772 0.527,-7.904 0.731,-10.955Z",style:{fill:"#00bcc4"}})))}},kB4c:function(t,e,n){"use strict";var r=n("XJU/"),o=n("6/1s").getWeak,a=n("5K7Z"),i=n("93I4"),u=n("EXMj"),c=n("oioR"),s=n("V7Et"),f=n("B+OT"),l=n("n3ko"),p=s(5),h=s(6),v=0,d=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},m=function(t,e){return p(t.a,function(t){return t[0]===e})};y.prototype={get:function(t){var e=m(this,t);if(e)return e[1]},has:function(t){return!!m(this,t)},set:function(t,e){var n=m(this,t);n?n[1]=e:this.a.push([t,e])},delete:function(t){var e=h(this.a,function(e){return e[0]===t});return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,n,a){var s=t(function(t,r){u(t,s,e,"_i"),t._t=e,t._i=v++,t._l=void 0,void 0!=r&&c(r,n,t[a],t)});return r(s.prototype,{delete:function(t){if(!i(t))return!1;var n=o(t);return!0===n?d(l(this,e)).delete(t):n&&f(n,this._i)&&delete n[this._i]},has:function(t){if(!i(t))return!1;var n=o(t);return!0===n?d(l(this,e)).has(t):n&&f(n,this._i)}}),s},def:function(t,e,n){var r=o(a(e),!0);return!0===r?d(t).set(e,n):r[t._i]=n,t},ufstore:d}},m5qO:function(t,e,n){n("wgeU"),n("bBy9"),n("Oc8Q"),n("BURE"),n("+jru"),t.exports=n("WEpk").WeakMap},nOHt:function(t,e,n){"use strict";var r=n("XXOK"),o=n("b3CU"),a=n("5Uuq"),i=n("KI45");e.__esModule=!0,e.useRouter=function(){return s.default.useContext(l.RouterContext)},e.makePublicRouterInstance=function(t){var e=t,n={},o=!0,a=!1,i=void 0;try{for(var c,s=r(v);!(o=(c=s.next()).done);o=!0){var l=c.value;"object"!==typeof e[l]?n[l]=e[l]:n[l]=(0,u.default)({},e[l])}}catch(p){a=!0,i=p}finally{try{o||null==s.return||s.return()}finally{if(a)throw i}}return n.events=f.default.events,d.forEach(function(t){n[t]=function(){return e[t].apply(e,arguments)}}),n},e.createRouter=e.withRouter=e.default=void 0;var u=i(n("htGi")),c=i(n("hfKm")),s=i(n("q1tI")),f=a(n("elyg"));e.Router=f.default,e.NextRouter=f.NextRouter;var l=n("qOIg"),p=i(n("0Bsm"));e.withRouter=p.default;var h={router:null,readyCallbacks:[],ready:function(t){if(this.router)return t();this.readyCallbacks.push(t)}},v=["pathname","route","query","asPath","components"],d=["push","replace","reload","back","prefetch","beforePopState"];function y(){if(!h.router){throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')}return h.router}(0,c.default)(h,"events",{get:function(){return f.default.events}}),v.forEach(function(t){(0,c.default)(h,t,{get:function(){return y()[t]}})}),d.forEach(function(t){h[t]=function(){var e=y();return e[t].apply(e,arguments)}}),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach(function(t){h.ready(function(){f.default.events.on(t,function(){var e="on"+t.charAt(0).toUpperCase()+t.substring(1),n=h;if(n[e])try{n[e].apply(n,arguments)}catch(r){console.error("Error when running the Router event: "+e),console.error(r.message+"\n"+r.stack)}})})});var m=h;e.default=m;e.createRouter=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return h.router=o(f.default,e),h.readyCallbacks.forEach(function(t){return t()}),h.readyCallbacks=[],h.router}},pbKT:function(t,e,n){t.exports=n("qijr")},qOIg:function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var a=o(n("q1tI"));e.RouterContext=a.createContext(null)},qijr:function(t,e,n){n("czwh"),t.exports=n("WEpk").Reflect.construct},v5Dd:function(t,e,n){var r=n("NsO/"),o=n("vwuL").f;n("zn7N")("getOwnPropertyDescriptor",function(){return function(t,e){return o(r(t),e)}})},vYYK:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("hfKm"),o=n.n(r);function a(t,e,n){return e in t?o()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},wYmx:function(t,e,n){"use strict";var r=n("eaoh"),o=n("93I4"),a=n("MCSJ"),i=[].slice,u={};t.exports=Function.bind||function(t){var e=r(this),n=i.call(arguments,1),c=function(){var r=n.concat(i.call(arguments));return this instanceof c?function(t,e,n){if(!(e in u)){for(var r=[],o=0;o<e;o++)r[o]="a["+o+"]";u[e]=Function("F,a","return new F("+r.join(",")+")")}return u[e](t,n)}(e,r.length,r):a(e,r,t)};return o(e.prototype)&&(c.prototype=e.prototype),c}}},[["Mz89",0,1,2]]]);