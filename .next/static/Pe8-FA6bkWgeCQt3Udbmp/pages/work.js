(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"16Al":function(e,t,r){"use strict";var n=r("WbBG");function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,s){if(s!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},"17x9":function(e,t,r){e.exports=r("16Al")()},"1Oj2":function(e,t,r){"use strict";r.r(t);var n=r("MX0m"),o=r.n(n),i=r("q1tI"),s=r.n(i),c=(r("YFqc"),r("JAUf")),u=r("7frN"),a=s.a.createElement;t.default=function(){return a("div",{className:"jsx-266929325"},a(c.default,null),"Work",a(u.default,null),a(o.a,{id:"266929325"},["body{margin:0;}"]))}},"3niX":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=l.cssRules();return l.flush(),e},t.default=void 0;var n,o=r("q1tI");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),f=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=c(this,u(t).call(this,e))).prevProps={},r}var r,n,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(t,o.Component),r=t,i=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],r=e[1];return l.computeId(t,r)}).join(" ")}}],(n=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){l.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&l.remove(this.prevProps),l.add(this.props),this.prevProps=this.props),null}}])&&s(r.prototype,n),i&&s(r,i),t}();t.default=f},"7frN":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),i=r("YFqc"),s=r.n(i),c=(r("LgZI"),o.a.createElement);t.default=function(){return c("footer",{className:"motherDivFooter"},c("div",{className:"name"},c(s.a,{href:"/"},c("a",{className:"nameDiv"},"Jacob Broughton"))),c("div",{className:"storyDiv"},c(s.a,{href:"/story"},c("a",{className:"story"},"My Story"))),c("div",{className:"contactDiv"},c(s.a,{href:"/contact"},c("a",{className:"contact"},"Contact"))),c("div",{className:"workDiv"},c(s.a,{href:"/work"},c("a",{className:"work"},"Work"))))}},"8oxB":function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function c(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"===typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u,a=[],l=!1,f=-1;function h(){l&&u&&(l=!1,u.length?a=u.concat(a):f=-1,a.length&&p())}function p(){if(!l){var e=c(h);l=!0;for(var t=a.length;t;){for(u=a,a=[];++f<t;)u&&u[f].run();f=-1,t=a.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new d(e,t)),1!==a.length||l||c(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},JAUf:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),i=r("YFqc"),s=r.n(i),c=r("k8Su"),u=(r("kkO7"),o.a.createElement);t.default=function(){return u("div",{className:"motherDiv"},u("nav",{className:"nav"},u("div",{className:"leftSide"},u(s.a,{href:"/"},u("a",null,u(c.default,null)))),u("div",{className:"rightSide"},u("div",{className:"navMenuDiv"},u(s.a,{href:"/story"},u("a",{className:"myStory"},"My Story")),u(s.a,{href:"/work"},u("a",{className:"work"},"Work")),u(s.a,{href:"/contact"},u("a",{className:"contact"},"Contact"))))))}},MX0m:function(e,t,r){e.exports=r("3niX")},SevZ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r("9kyW")),o=i(r("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,s=void 0!==i&&i,c=t.isBrowser,u=void 0===c?"undefined"!==typeof window:c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=n||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,r,i;return t=e,(r=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),n=r.styleId,o=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var i=o.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[n]=i,this._instancesCounts[n]=1}}},{key:"remove",value:function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(r in this._instancesCounts,"styleId: `".concat(r,"` not found")),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,r){if(!r)return"jsx-".concat(t);var o=String(r),i=t+o;return e[i]||(e[i]="jsx-".concat((0,n.default)("".concat(t,"-").concat(o)))),e[i]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var o=r+n;return t[o]||(t[o]=n.replace(e,r)),t[o]}}},{key:"getIdAndRules",value:function(e){var t=this,r=e.children,n=e.dynamic,o=e.id;if(n){var i=this.computeId(o,n);return{styleId:i,rules:Array.isArray(r)?r.map(function(e){return t.computeSelector(i,e)}):[this.computeSelector(i,r)]}}return{styleId:this.computeId(o),rules:Array.isArray(r)?r:[r]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&s(t.prototype,r),i&&s(t,i),e}();t.default=c},WbBG:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},YFqc:function(e,t,r){e.exports=r("cTJO")},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.name,i=void 0===r?"stylesheet":r,c=t.optimizeForSpeed,u=void 0===c?n:c,a=t.isBrowser,l=void 0===a?"undefined"!==typeof window:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#".concat(i,"-deleted-rule____{}"),s("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,i,c;return t=e,(i=[{key:"setOptimizeForSpeed",value:function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(s(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(c){return n||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(i){n||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),r.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];s(o,"old rule at index `".concat(e,"` not found")),o.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,r){return r?t=t.concat(e.getSheetForTag(r).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,r){t&&s(o(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-".concat(e),""),t&&n.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return r?i.insertBefore(n,r):i.appendChild(n),n}},{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,i),c&&r(t,c),e}();function s(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=i}).call(this,r("8oxB"))},cDxr:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work",function(){return r("1Oj2")}])},cTJO:function(e,t,r){"use strict";var n=r("/HRN"),o=r("WaGi"),i=r("ZDA2"),s=r("/+P4"),c=r("N9n2"),u=r("5Uuq"),a=r("KI45");t.__esModule=!0,t.default=void 0;var l,f=a(r("LX0d")),h=r("CxY0"),p=u(r("q1tI")),d=(a(r("17x9")),a(r("nOHt"))),v=(r("P5f7"),r("g/15"));function m(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var y=new f.default,_=window.IntersectionObserver;function S(){return l||(_?l=new _(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var g=function(e){function t(e){var r;return n(this,t),(r=i(this,s(t).call(this,e))).p=void 0,r.cleanUpListeners=function(){},r.formatUrls=function(e){var t=null,r=null,n=null;return function(o,i){if(n&&o===t&&i===r)return n;var s=e(o,i);return t=o,r=i,n=s,s}}(function(e,t){return{href:m(e),as:t?m(t):t}}),r.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,o=t.target;if("A"!==n||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=r.formatUrls(r.props.href,r.props.as),s=i.href,c=i.as;if(function(e){var t=(0,h.parse)(e,!1,!0),r=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(s)){var u=window.location.pathname;s=(0,h.resolve)(u,s),c=c?(0,h.resolve)(u,c):s,e.preventDefault();var a=r.props.scroll;null==a&&(a=c.indexOf("#")<0),d.default[r.props.replace?"replace":"push"](s,c,{shallow:r.props.shallow}).then(function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})}}},r.p=!1!==e.prefetch,r}return c(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&_&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var r=S();return r?(r.observe(e),y.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=(0,h.resolve)(e,t);d.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),s={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch()},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=o||n),p.default.cloneElement(i,s)}}]),t}(p.Component);g.propTypes=void 0;var w=g;t.default=w},k8Su:function(e,t,r){"use strict";r.r(t);var n=r("vYYK"),o=r("q1tI"),i=r.n(o).a.createElement;t.default=function(){var e={fill:"#333"};return i("svg",{width:"100%",height:"100%",viewBox:"0 0 25 25",version:"1.1",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2}},i("g",Object(n.a)({id:"Artboard11"},"id","Artboard1"),i("path",{d:"M12.021,2.95c0.068,-0.204 0.259,-0.341 0.474,-0.341c0.214,0 0.405,0.137 0.473,0.341c1.155,3.458 4.134,12.373 5.622,16.828c0.202,0.605 0.101,1.271 -0.272,1.788c-0.373,0.518 -0.972,0.825 -1.61,0.825c-2.428,0 -5.949,0 -8.388,0c-0.647,0 -1.255,-0.311 -1.633,-0.836c-0.378,-0.525 -0.481,-1.2 -0.276,-1.814c1.493,-4.466 4.458,-13.342 5.61,-16.791Z",style:e}),i("path",{d:"M12.128,2.92c0.034,-0.179 0.19,-0.309 0.373,-0.309c0.182,0 0.339,0.13 0.372,0.309c0.872,4.621 3.01,15.956 3.548,18.81c0.031,0.163 -0.013,0.332 -0.118,0.459c-0.106,0.128 -0.264,0.202 -0.43,0.202c-1.526,0 -5.235,0 -6.753,0c-0.164,0 -0.319,-0.073 -0.424,-0.199c-0.105,-0.126 -0.148,-0.293 -0.117,-0.454c0.536,-2.842 2.677,-14.193 3.549,-18.818Z",style:{fill:"#fee100"}}),i("path",{d:"M12.294,4.057c0.009,-0.105 0.096,-0.185 0.201,-0.185c0.104,0 0.192,0.08 0.2,0.185c0.44,5.552 1.454,18.334 1.454,18.334l-3.309,0c0,0 1.014,-12.782 1.454,-18.334Z",style:e}),i("path",{d:"M12.409,11.368c0.003,-0.048 0.043,-0.086 0.092,-0.086c0.048,0 0.088,0.038 0.091,0.086c0.203,3.04 0.676,10.131 0.731,10.946c0.001,0.02 -0.006,0.04 -0.02,0.054c-0.013,0.015 -0.032,0.023 -0.052,0.023c-0.281,0 -1.244,0 -1.509,0c-0.018,0 -0.035,-0.007 -0.047,-0.02c-0.012,-0.013 -0.018,-0.03 -0.017,-0.048c0.052,-0.772 0.527,-7.904 0.731,-10.955Z",style:{fill:"#00bcc4"}})))}}},[["cDxr",0,1,2]]]);