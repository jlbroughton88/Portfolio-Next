(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"16Al":function(e,t,r){"use strict";var s=r("WbBG");function i(){}function n(){}n.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,n,o){if(o!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:i};return r.PropTypes=r,r}},"17x9":function(e,t,r){e.exports=r("16Al")()},"3niX":function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=n.cssRules();return n.flush(),e},t.default=void 0;var s,i=r("q1tI");var n=new(((s=r("SevZ"))&&s.__esModule?s:{default:s}).default),o=function(e){var t,r;function s(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=s).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,s.dynamic=function(e){return e.map(function(e){var t=e[0],r=e[1];return n.computeId(t,r)}).join(" ")};var i=s.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){n.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&n.remove(this.prevProps),n.add(this.props),this.prevProps=this.props),null},s}(i.Component);t.default=o},"7frN":function(e,t,r){"use strict";r.r(t);var s=r("q1tI"),i=r.n(s),n=r("YFqc"),o=r.n(n),a=(r("LgZI"),i.a.createElement);t.default=function(){return a("footer",{className:"motherDivFooter"},a("div",{className:"name"},a(o.a,{href:"/"},a("a",{className:"nameDiv"},a("p",{className:"nameP"},"Jacob Broughton")))),a("div",{className:"storyDiv"},a(o.a,{href:"/story"},a("a",{className:"story"},a("p",{className:"storyP"},"My Story")))),a("div",{className:"contactDiv"},a(o.a,{href:"/contact"},a("a",{className:"contact"},a("p",{className:"contactP"},"Contact")))),a("div",{className:"workDiv"},a(o.a,{href:"/work"},a("a",{className:"work"},a("p",{className:"workP"},"Work")))))}},"8dqH":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/story",function(){return r("FyHc")}])},"8oxB":function(e,t){var r,s,i=e.exports={};function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===n||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:n}catch(e){r=n}try{s="function"===typeof clearTimeout?clearTimeout:o}catch(e){s=o}}();var c,u=[],l=!1,d=-1;function h(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&p())}function p(){if(!l){var e=a(h);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(s===clearTimeout)return clearTimeout(e);if((s===o||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new f(e,t)),1!==u.length||l||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},FyHc:function(e,t,r){"use strict";r.r(t);var s=r("MX0m"),i=r.n(s),n=r("q1tI"),o=r.n(n),a=r("JAUf"),c=r("7frN"),u=(r("wKoZ"),o.a.createElement);t.default=function(){return u("div",{className:"jsx-1951181445 motherDivStory"},u(a.default,null),u("div",{className:"jsx-1951181445 mainStoryDiv"},u("div",{className:"jsx-1951181445 headContainerWork"},u("div",{className:"jsx-1951181445 insideHeaderDiv"},u("h2",{className:"jsx-1951181445 storyHead"},"My Story"))),u("div",{className:"jsx-1951181445 surroundingStoryDiv"},u("div",{className:"jsx-1951181445 storyDiv"},u("div",{className:"jsx-1951181445 insideStoryDiv"},u("p",{className:"jsx-1951181445 storyP"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a imperdiet eros. Mauris sed tincidunt magna. Aenean commodo sem sapien. In sit amet feugiat tellus. Aenean accumsan urna justo, quis fermentum mauris sagittis et. Nullam commodo massa sed luctus ornare. Morbi lacinia efficitur mi, vel blandit turpis auctor eget."))),u("div",{className:"jsx-1951181445 imageDiv"},u("div",{className:"jsx-1951181445 imageInside"},"Image 2")),u("div",{className:"jsx-1951181445 storyDiv2"},u("div",{className:"jsx-1951181445 insideStoryDiv2"},u("p",{className:"jsx-1951181445 storyP2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a imperdiet eros. Mauris sed tincidunt magna. Aenean commodo sem sapien. In sit amet feugiat tellus. Aenean accumsan urna justo, quis fermentum mauris sagittis et. Nullam commodo massa sed luctus ornare. Morbi lacinia efficitur mi, vel blandit turpis auctor eget. Donec eros neque, rhoncus nec ipsum id, molestie ullamcorper mauris. Etiam pulvinar elit justo, ac tempus quam tincidunt a. Suspendisse tincidunt lectus ultricies leo rhoncus mollis."))),u("div",{className:"jsx-1951181445 imageDiv2"},u("div",{className:"jsx-1951181445 imageInside2"},"Image 2")),u("div",{className:"jsx-1951181445 storyDiv3"},u("div",{className:"jsx-1951181445 insideStoryDiv3"},u("p",{className:"jsx-1951181445 storyP3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a imperdiet eros. Mauris sed tincidunt magna. Aenean commodo sem sapien. In sit amet feugiat tellus. Aenean accumsan urna justo, quis fermentum mauris sagittis et. Nullam commodo massa sed luctus ornare. Morbi lacinia efficitur mi, vel blandit turpis auctor eget. Donec eros neque, rhoncus nec ipsum id, molestie ullamcorper mauris. Etiam pulvinar elit justo, ac tempus quam tincidunt a. Suspendisse tincidunt lectus ultricies leo rhoncus mollis."))),u("div",{className:"jsx-1951181445 imageDiv3"},u("div",{className:"jsx-1951181445 imageInside3"},"Image 2")),u("div",{className:"jsx-1951181445 imageDiv4"},u("div",{className:"jsx-1951181445 imageInside4"},"Image 4")))),u(c.default,null),u(i.a,{id:"1951181445"},["body{margin:0;cursor:default;}"]))}},JAUf:function(e,t,r){"use strict";r.r(t);var s=r("q1tI"),i=r.n(s),n=r("YFqc"),o=r.n(n),a=r("k8Su"),c=(r("kkO7"),i.a.createElement);t.default=function(){return c("nav",{className:"nav"},c("div",{className:"leftSide"},c(o.a,{href:"/"},c("a",{className:"iconA"},c(a.default,{className:"navLogo"})))),c("div",{className:"rightSide"},c("div",{className:"navMenuDiv"},c(o.a,{href:"/story"},c("a",{className:"myStory"},"My Story")),c(o.a,{href:"/work"},c("a",{className:"work"},"Work")),c(o.a,{href:"/contact"},c("a",{className:"contact"},"Contact")))))}},MX0m:function(e,t,r){e.exports=r("3niX")},SevZ:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var s=n(r("9kyW")),i=n(r("bVZc"));function n(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,s=void 0===r?null:r,n=t.optimizeForSpeed,o=void 0!==n&&n,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;this._sheet=s||new i.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),s&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),s=r.styleId,i=r.rules;if(s in this._instancesCounts)this._instancesCounts[s]+=1;else{var n=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[s]=n,this._instancesCounts[s]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var s=this._fromServer&&this._fromServer[r];s?(s.parentNode.removeChild(s),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var i=String(r),n=t+i;return e[n]||(e[n]="jsx-"+(0,s.default)(t+"-"+i)),e[n]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,s){this._isBrowser||(s=s.replace(/\/style/gi,"\\/style"));var i=r+s;return t[i]||(t[i]=s.replace(e,r)),t[i]}},t.getIdAndRules=function(e){var t=this,r=e.children,s=e.dynamic,i=e.id;if(s){var n=this.computeId(i,s);return{styleId:n,rules:Array.isArray(r)?r.map(function(e){return t.computeSelector(n,e)}):[this.computeSelector(n,r)]}}return{styleId:this.computeId(i),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}();t.default=o},WbBG:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},YFqc:function(e,t,r){e.exports=r("cTJO")},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}t.__esModule=!0,t.default=void 0;var s="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},n=function(){function e(e){var t=void 0===e?{}:e,r=t.name,n=void 0===r?"stylesheet":r,a=t.optimizeForSpeed,c=void 0===a?s:a,u=t.isBrowser,l=void 0===u?"undefined"!==typeof window:u;o(i(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",o("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,n,a,c=e.prototype;return c.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(s||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(o(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(a){return s||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(n){s||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];o(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,r){t&&o(i(t),"makeStyleTag acceps only strings as second parameter");var s=document.createElement("style");this._nonce&&s.setAttribute("nonce",this._nonce),s.type="text/css",s.setAttribute("data-"+e,""),t&&s.appendChild(document.createTextNode(t));var n=document.head||document.getElementsByTagName("head")[0];return r?n.insertBefore(s,r):n.appendChild(s),s},t=e,(n=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,n),a&&r(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=n}).call(this,r("8oxB"))},cTJO:function(e,t,r){"use strict";var s=r("/HRN"),i=r("WaGi"),n=r("ZDA2"),o=r("/+P4"),a=r("N9n2"),c=r("5Uuq"),u=r("KI45");t.__esModule=!0,t.default=void 0;var l,d=u(r("LX0d")),h=r("CxY0"),p=c(r("q1tI")),f=(u(r("17x9")),u(r("nOHt"))),m=(r("P5f7"),r("g/15"));function v(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var y=new d.default,_=window.IntersectionObserver;function g(){return l||(_?l=new _(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var S=function(e){function t(e){var r;return s(this,t),(r=n(this,o(t).call(this,e))).p=void 0,r.cleanUpListeners=function(){},r.formatUrls=function(e){var t=null,r=null,s=null;return function(i,n){if(s&&i===t&&n===r)return s;var o=e(i,n);return t=i,r=n,s=o,o}}(function(e,t){return{href:v(e),as:t?v(t):t}}),r.linkClicked=function(e){var t=e.currentTarget,s=t.nodeName,i=t.target;if("A"!==s||!(i&&"_self"!==i||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var n=r.formatUrls(r.props.href,r.props.as),o=n.href,a=n.as;if(function(e){var t=(0,h.parse)(e,!1,!0),r=(0,h.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(o)){var c=window.location.pathname;o=(0,h.resolve)(c,o),a=a?(0,h.resolve)(c,a):o,e.preventDefault();var u=r.props.scroll;null==u&&(u=a.indexOf("#")<0),f.default[r.props.replace?"replace":"push"](o,a,{shallow:r.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})}}},r.p=!1!==e.prefetch,r}return a(t,e),i(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&_&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var r=g();return r?(r.observe(e),y.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=(0,h.resolve)(e,t);f.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),s=r.href,i=r.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var n=p.Children.only(t),o={ref:function(t){e.handleRef(t),n&&"object"===typeof n&&n.ref&&("function"===typeof n.ref?n.ref(t):"object"===typeof n.ref&&(n.ref.current=t))},onMouseEnter:function(t){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(t),e.prefetch()},onClick:function(t){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==n.type||"href"in n.props)||(o.href=i||s),p.default.cloneElement(n,o)}}]),t}(p.Component);S.propTypes=void 0;var w=S;t.default=w},k8Su:function(e,t,r){"use strict";r.r(t);var s=r("vYYK"),i=r("q1tI"),n=r.n(i).a.createElement;t.default=function(){var e={fill:"#333"};return n("svg",{width:"100%",height:"100%",viewBox:"0 0 25 25",version:"1.1",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2}},n("g",Object(s.a)({id:"Artboard11"},"id","Artboard1"),n("path",{d:"M12.021,2.95c0.068,-0.204 0.259,-0.341 0.474,-0.341c0.214,0 0.405,0.137 0.473,0.341c1.155,3.458 4.134,12.373 5.622,16.828c0.202,0.605 0.101,1.271 -0.272,1.788c-0.373,0.518 -0.972,0.825 -1.61,0.825c-2.428,0 -5.949,0 -8.388,0c-0.647,0 -1.255,-0.311 -1.633,-0.836c-0.378,-0.525 -0.481,-1.2 -0.276,-1.814c1.493,-4.466 4.458,-13.342 5.61,-16.791Z",style:e}),n("path",{d:"M12.128,2.92c0.034,-0.179 0.19,-0.309 0.373,-0.309c0.182,0 0.339,0.13 0.372,0.309c0.872,4.621 3.01,15.956 3.548,18.81c0.031,0.163 -0.013,0.332 -0.118,0.459c-0.106,0.128 -0.264,0.202 -0.43,0.202c-1.526,0 -5.235,0 -6.753,0c-0.164,0 -0.319,-0.073 -0.424,-0.199c-0.105,-0.126 -0.148,-0.293 -0.117,-0.454c0.536,-2.842 2.677,-14.193 3.549,-18.818Z",style:{fill:"#fee100"}}),n("path",{d:"M12.294,4.057c0.009,-0.105 0.096,-0.185 0.201,-0.185c0.104,0 0.192,0.08 0.2,0.185c0.44,5.552 1.454,18.334 1.454,18.334l-3.309,0c0,0 1.014,-12.782 1.454,-18.334Z",style:e}),n("path",{d:"M12.409,11.368c0.003,-0.048 0.043,-0.086 0.092,-0.086c0.048,0 0.088,0.038 0.091,0.086c0.203,3.04 0.676,10.131 0.731,10.946c0.001,0.02 -0.006,0.04 -0.02,0.054c-0.013,0.015 -0.032,0.023 -0.052,0.023c-0.281,0 -1.244,0 -1.509,0c-0.018,0 -0.035,-0.007 -0.047,-0.02c-0.012,-0.013 -0.018,-0.03 -0.017,-0.048c0.052,-0.772 0.527,-7.904 0.731,-10.955Z",style:{fill:"#00bcc4"}})))}}},[["8dqH",0,1,2]]]);