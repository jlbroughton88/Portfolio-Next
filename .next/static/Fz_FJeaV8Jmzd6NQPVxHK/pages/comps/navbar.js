(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"16Al":function(e,t,n){"use strict";var r=n("WbBG");function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,c){if(c!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},"17x9":function(e,t,n){e.exports=n("16Al")()},JAUf:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("YFqc"),c=n.n(a),i=(n("f3ab"),n("s114")),s=n.n(i),l=(n("kkO7"),o.a.createElement);t.default=function(){return l("div",{className:"motherDiv"},l("nav",{className:"nav"},l("div",{className:"leftSide"},l(c.a,{href:"/"},l("a",null,l("img",{src:s.a})))),l("div",{className:"rightSide"},l("div",{className:"navMenuDiv"},l(c.a,{href:"/story"},l("a",{className:"myStory"},"My Story")),l(c.a,{href:"/work"},l("a",{className:"work"},"Work")),l(c.a,{href:"/contact"},l("a",{className:"contact"},"Contact"))))))}},Mz89:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/comps/navbar",function(){return n("JAUf")}])},WbBG:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),o=n("WaGi"),a=n("ZDA2"),c=n("/+P4"),i=n("N9n2"),s=n("5Uuq"),l=n("KI45");t.__esModule=!0,t.default=void 0;var f,u=l(n("LX0d")),p=n("CxY0"),h=s(n("q1tI")),A=(l(n("17x9")),l(n("nOHt"))),d=(n("P5f7"),n("g/15"));function v(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var m=new u.default,k=window.IntersectionObserver;function w(){return f||(k?f=new k(function(e){e.forEach(function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),m.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var y=function(e){function t(e){var n;return r(this,t),(n=a(this,c(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var c=e(o,a);return t=o,n=a,r=c,c}}(function(e,t){return{href:v(e),as:t?v(t):t}}),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=n.formatUrls(n.props.href,n.props.as),c=a.href,i=a.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(c)){var s=window.location.pathname;c=(0,p.resolve)(s,c),i=i?(0,p.resolve)(s,i):c,e.preventDefault();var l=n.props.scroll;null==l&&(l=i.indexOf("#")<0),A.default[n.props.replace?"replace":"push"](c,i,{shallow:n.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})}}},n.p=!1!==e.prefetch,n}return i(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&k&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),m.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}m.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,p.resolve)(e,t);A.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var a=h.Children.only(t),c={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch()},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(c.href=o||r),h.default.cloneElement(a,c)}}]),t}(h.Component);y.propTypes=void 0;var U=y;t.default=U},f3ab:function(e,t,n){"use strict";n.r(t);var r=n("vYYK"),o=n("q1tI"),a=n.n(o).a.createElement;t.default=function(){var e={fill:"#fee100"};return a("svg",{width:"100%",height:"100%",viewBox:"0 0 50 50",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",space:"preserve",serif:"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5}},a("g",Object(r.a)({id:"Artboard11"},"id","Artboard1"),a("circle",{cx:"16.667",cy:"16.667",r:"15.984",style:{fill:"#00bcc4",stroke:"#333",strokeWidth:"0.67px"}}),a("path",{d:"M16.027,3.478c0.09,-0.271 0.345,-0.454 0.631,-0.454c0.286,0 0.54,0.183 0.631,0.454c1.592,4.763 5.788,17.32 7.841,23.464c0.27,0.807 0.135,1.694 -0.362,2.385c-0.498,0.69 -1.297,1.099 -2.147,1.099c-3.406,0.001 -8.448,0.001 -11.87,0.001c-0.863,0 -1.673,-0.414 -2.178,-1.114c-0.504,-0.7 -0.641,-1.6 -0.367,-2.419c2.057,-6.161 6.234,-18.665 7.821,-23.416Z",style:e}),a("path",{d:"M16.169,3.409c0.045,-0.239 0.254,-0.412 0.497,-0.412c0.243,0 0.452,0.173 0.497,0.412c1.197,6.343 4.194,22.224 4.932,26.136c0.041,0.218 -0.017,0.442 -0.158,0.613c-0.142,0.17 -0.351,0.269 -0.573,0.269c-2.099,0 -7.313,0 -9.402,0c-0.219,0 -0.426,-0.097 -0.566,-0.265c-0.139,-0.169 -0.197,-0.391 -0.156,-0.605c0.734,-3.895 3.732,-19.799 4.929,-26.148Z",style:e}),a("path",{d:"M16.391,4.954c0.011,-0.139 0.127,-0.246 0.267,-0.246c0.14,0 0.256,0.107 0.267,0.246c0.604,7.608 2.022,25.473 2.022,25.473l-4.574,0c0,0 1.415,-17.865 2.018,-25.473Z",style:{fill:"#333"}}),a("path",{d:"M16.545,15.262c0.004,-0.064 0.058,-0.114 0.122,-0.114c0.065,0 0.118,0.05 0.123,0.114c0.278,4.169 0.941,14.09 1.015,15.205c0.002,0.027 -0.007,0.053 -0.025,0.073c-0.019,0.019 -0.044,0.03 -0.071,0.03c-0.383,0 -1.73,0 -2.093,0c-0.024,0 -0.046,-0.01 -0.062,-0.027c-0.016,-0.017 -0.025,-0.04 -0.023,-0.064c0.07,-1.055 0.735,-11.032 1.014,-15.217Z",style:e})))}},s114:function(e,t){e.exports="data:image/png;base64,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"}},[["Mz89",0,1,2]]]);