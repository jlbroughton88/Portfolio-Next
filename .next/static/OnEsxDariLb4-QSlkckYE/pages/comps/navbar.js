(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"16Al":function(e,t,n){"use strict";var r=n("WbBG");function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,c){if(c!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},"17x9":function(e,t,n){e.exports=n("16Al")()},JAUf:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("YFqc"),c=n.n(a),i=n("k8Su"),s=(n("kkO7"),o.a.createElement);t.default=function(){return s("div",{className:"motherDiv"},s("nav",{className:"nav"},s("div",{className:"leftSide"},s(c.a,{href:"/"},s("a",null,s(i.default,null)))),s("div",{className:"rightSide"},s("div",{className:"navMenuDiv"},s(c.a,{href:"/story"},s("a",{className:"myStory"},"My Story")),s(c.a,{href:"/work"},s("a",{className:"work"},"Work")),s(c.a,{href:"/contact"},s("a",{className:"contact"},"Contact"))))))}},Mz89:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/comps/navbar",function(){return n("JAUf")}])},WbBG:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),o=n("WaGi"),a=n("ZDA2"),c=n("/+P4"),i=n("N9n2"),s=n("5Uuq"),l=n("KI45");t.__esModule=!0,t.default=void 0;var f,p=l(n("LX0d")),u=n("CxY0"),h=s(n("q1tI")),d=(l(n("17x9")),l(n("nOHt"))),v=(n("P5f7"),n("g/15"));function y(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var m=new p.default,w=window.IntersectionObserver;function k(){return f||(w?f=new w(function(e){e.forEach(function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),m.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var b=function(e){function t(e){var n;return r(this,t),(n=a(this,c(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var c=e(o,a);return t=o,n=a,r=c,c}}(function(e,t){return{href:y(e),as:t?y(t):t}}),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=n.formatUrls(n.props.href,n.props.as),c=a.href,i=a.as;if(function(e){var t=(0,u.parse)(e,!1,!0),n=(0,u.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(c)){var s=window.location.pathname;c=(0,u.resolve)(s,c),i=i?(0,u.resolve)(s,i):c,e.preventDefault();var l=n.props.scroll;null==l&&(l=i.indexOf("#")<0),d.default[n.props.replace?"replace":"push"](c,i,{shallow:n.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})}}},n.p=!1!==e.prefetch,n}return i(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&w&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=k();return n?(n.observe(e),m.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}m.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,u.resolve)(e,t);d.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var a=h.Children.only(t),c={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch()},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(c.href=o||r),h.default.cloneElement(a,c)}}]),t}(h.Component);b.propTypes=void 0;var g=b;t.default=g},k8Su:function(e,t,n){"use strict";n.r(t);var r=n("vYYK"),o=n("q1tI"),a=n.n(o).a.createElement;t.default=function(){var e={fill:"#333"};return a("svg",{width:"100%",height:"100%",viewBox:"0 0 25 25",version:"1.1",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2}},a("g",Object(r.a)({id:"Artboard11"},"id","Artboard1"),a("path",{d:"M12.021,2.95c0.068,-0.204 0.259,-0.341 0.474,-0.341c0.214,0 0.405,0.137 0.473,0.341c1.155,3.458 4.134,12.373 5.622,16.828c0.202,0.605 0.101,1.271 -0.272,1.788c-0.373,0.518 -0.972,0.825 -1.61,0.825c-2.428,0 -5.949,0 -8.388,0c-0.647,0 -1.255,-0.311 -1.633,-0.836c-0.378,-0.525 -0.481,-1.2 -0.276,-1.814c1.493,-4.466 4.458,-13.342 5.61,-16.791Z",style:e}),a("path",{d:"M12.128,2.92c0.034,-0.179 0.19,-0.309 0.373,-0.309c0.182,0 0.339,0.13 0.372,0.309c0.872,4.621 3.01,15.956 3.548,18.81c0.031,0.163 -0.013,0.332 -0.118,0.459c-0.106,0.128 -0.264,0.202 -0.43,0.202c-1.526,0 -5.235,0 -6.753,0c-0.164,0 -0.319,-0.073 -0.424,-0.199c-0.105,-0.126 -0.148,-0.293 -0.117,-0.454c0.536,-2.842 2.677,-14.193 3.549,-18.818Z",style:{fill:"#fee100"}}),a("path",{d:"M12.294,4.057c0.009,-0.105 0.096,-0.185 0.201,-0.185c0.104,0 0.192,0.08 0.2,0.185c0.44,5.552 1.454,18.334 1.454,18.334l-3.309,0c0,0 1.014,-12.782 1.454,-18.334Z",style:e}),a("path",{d:"M12.409,11.368c0.003,-0.048 0.043,-0.086 0.092,-0.086c0.048,0 0.088,0.038 0.091,0.086c0.203,3.04 0.676,10.131 0.731,10.946c0.001,0.02 -0.006,0.04 -0.02,0.054c-0.013,0.015 -0.032,0.023 -0.052,0.023c-0.281,0 -1.244,0 -1.509,0c-0.018,0 -0.035,-0.007 -0.047,-0.02c-0.012,-0.013 -0.018,-0.03 -0.017,-0.048c0.052,-0.772 0.527,-7.904 0.731,-10.955Z",style:{fill:"#00bcc4"}})))}}},[["Mz89",0,1,2]]]);