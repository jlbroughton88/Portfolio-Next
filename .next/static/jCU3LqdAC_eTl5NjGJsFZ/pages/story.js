(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"16Al":function(e,t,n){"use strict";var r=n("WbBG");function i(){}function s(){}s.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,s,o){if(o!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:i};return n.PropTypes=n,n}},"17x9":function(e,t,n){e.exports=n("16Al")()},"3niX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=l.cssRules();return l.flush(),e},t.default=void 0;var r,i=n("q1tI");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=a(this,c(t).call(this,e))).prevProps={},n}var n,r,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,i.Component),n=t,s=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],n=e[1];return l.computeId(t,n)}).join(" ")}}],(r=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){l.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&l.remove(this.prevProps),l.add(this.props),this.prevProps=this.props),null}}])&&o(n.prototype,r),s&&o(n,s),t}();t.default=f},"7frN":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),s=n("YFqc"),o=n.n(s),a=(n("LgZI"),i.a.createElement);t.default=function(){return a("footer",{className:"motherDivFooter"},a("div",{className:"name"},a(o.a,{href:"/"},a("a",{className:"nameDiv"},"Jacob Broughton"))),a("div",{className:"storyDiv"},a(o.a,{href:"/story"},a("a",{className:"story"},"My Story"))),a("div",{className:"contactDiv"},a(o.a,{href:"/contact"},a("a",{className:"contact"},"Contact"))),a("div",{className:"workDiv"},a(o.a,{href:"/work"},a("a",{className:"work"},"Work"))))}},"8dqH":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/story",function(){return n("FyHc")}])},"8oxB":function(e,t){var n,r,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,u=[],l=!1,f=-1;function h(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&d())}function d(){if(!l){var e=a(h);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||l||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},FyHc:function(e,t,n){"use strict";n.r(t);var r=n("MX0m"),i=n.n(r),s=n("q1tI"),o=n.n(s),a=n("JAUf"),c=n("7frN"),u=(n("wKoZ"),o.a.createElement);t.default=function(){return u("div",{className:"jsx-1951181445 motherDiv"},u(a.default,null),u("div",{className:"jsx-1951181445 mainStoryDiv"},u("div",{className:"jsx-1951181445 surroundingStoryDiv"},u("div",{className:"jsx-1951181445 headerDiv"},u("div",{className:"jsx-1951181445 insideHeaderDiv"},u("h2",{className:"jsx-1951181445 name"},"My Story"))),u("div",{className:"jsx-1951181445 storyDiv"},u("div",{className:"jsx-1951181445 insideStoryDiv"},u("p",{className:"jsx-1951181445 storyP"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a imperdiet eros. Mauris sed tincidunt magna. Aenean commodo sem sapien. In sit amet feugiat tellus. Aenean accumsan urna justo, quis fermentum mauris sagittis et. Nullam commodo massa sed luctus ornare. Morbi lacinia efficitur mi, vel blandit turpis auctor eget. Donec eros neque, rhoncus nec ipsum id, molestie ullamcorper mauris. Etiam pulvinar elit justo, ac tempus quam tincidunt a. Suspendisse tincidunt lectus ultricies leo rhoncus mollis."))),u("div",{className:"jsx-1951181445 imageDiv"},u("div",{className:"jsx-1951181445 imageInside"},"Image 2")),u("div",{className:"jsx-1951181445 storyDiv2"},u("div",{className:"jsx-1951181445 insideStoryDiv2"},u("p",{className:"jsx-1951181445 storyP2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a imperdiet eros. Mauris sed tincidunt magna. Aenean commodo sem sapien. In sit amet feugiat tellus. Aenean accumsan urna justo, quis fermentum mauris sagittis et. Nullam commodo massa sed luctus ornare. Morbi lacinia efficitur mi, vel blandit turpis auctor eget. Donec eros neque, rhoncus nec ipsum id, molestie ullamcorper mauris. Etiam pulvinar elit justo, ac tempus quam tincidunt a. Suspendisse tincidunt lectus ultricies leo rhoncus mollis."))),u("div",{className:"jsx-1951181445 imageDiv2"},u("div",{className:"jsx-1951181445 imageInside2"},"Image 2")),u("div",{className:"jsx-1951181445 storyDiv3"},u("div",{className:"jsx-1951181445 insideStoryDiv3"},u("p",{className:"jsx-1951181445 storyP3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a imperdiet eros. Mauris sed tincidunt magna. Aenean commodo sem sapien. In sit amet feugiat tellus. Aenean accumsan urna justo, quis fermentum mauris sagittis et. Nullam commodo massa sed luctus ornare. Morbi lacinia efficitur mi, vel blandit turpis auctor eget. Donec eros neque, rhoncus nec ipsum id, molestie ullamcorper mauris. Etiam pulvinar elit justo, ac tempus quam tincidunt a. Suspendisse tincidunt lectus ultricies leo rhoncus mollis."))),u("div",{className:"jsx-1951181445 imageDiv3"},u("div",{className:"jsx-1951181445 imageInside3"},"Image 2")),u("div",{className:"jsx-1951181445 imageDiv4"},u("div",{className:"jsx-1951181445 imageInside4"},"Image 4")))),u(c.default,null),u(i.a,{id:"1951181445"},["body{margin:0;cursor:default;}"]))}},JAUf:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),s=n("YFqc"),o=n.n(s),a=n("k8Su"),c=(n("kkO7"),i.a.createElement);t.default=function(){return c("div",{className:"motherDiv"},c("nav",{className:"nav"},c("div",{className:"leftSide"},c(o.a,{href:"/"},c("a",{className:"iconA"},c(a.default,{className:"navLogo"})))),c("div",{className:"rightSide"},c("div",{className:"navMenuDiv"},c(o.a,{href:"/story"},c("a",{className:"myStory"},"My Story")),c(o.a,{href:"/work"},c("a",{className:"work"},"Work")),c(o.a,{href:"/contact"},c("a",{className:"contact"},"Contact"))))))}},MX0m:function(e,t,n){e.exports=n("3niX")},SevZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n("9kyW")),i=s(n("bVZc"));function s(e){return e&&e.__esModule?e:{default:e}}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,r=void 0===n?null:n,s=t.optimizeForSpeed,o=void 0!==s&&s,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,n,s;return t=e,(n=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var s=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[r]=s,this._instancesCounts[r]=1}}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(n in this._instancesCounts,"styleId: `".concat(n,"` not found")),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-".concat(t);var i=String(n),s=t+i;return e[s]||(e[s]="jsx-".concat((0,r.default)("".concat(t,"-").concat(i)))),e[s]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=n+r;return t[i]||(t[i]=r.replace(e,n)),t[i]}}},{key:"getIdAndRules",value:function(e){var t=this,n=e.children,r=e.dynamic,i=e.id;if(r){var s=this.computeId(i,r);return{styleId:s,rules:Array.isArray(n)?n.map(function(e){return t.computeSelector(s,e)}):[this.computeSelector(s,n)]}}return{styleId:this.computeId(i),rules:Array.isArray(n)?n:[n]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&o(t.prototype,n),s&&o(t,s),e}();t.default=a},WbBG:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},YFqc:function(e,t,n){e.exports=n("cTJO")},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,s=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,c=void 0===a?r:a,u=t.isBrowser,l=void 0===u?"undefined"!==typeof window:u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(i(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#".concat(s,"-deleted-rule____{}"),o("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,s,a;return t=e,(s=[{key:"setOptimizeForSpeed",value:function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(o(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(s){r||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];o(i,"old rule at index `".concat(e,"` not found")),i.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&o(i(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-".concat(e),""),t&&r.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return n?s.insertBefore(r,n):s.appendChild(r),r}},{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,s),a&&n(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=s}).call(this,n("8oxB"))},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),i=n("WaGi"),s=n("ZDA2"),o=n("/+P4"),a=n("N9n2"),c=n("5Uuq"),u=n("KI45");t.__esModule=!0,t.default=void 0;var l,f=u(n("LX0d")),h=n("CxY0"),d=c(n("q1tI")),p=(u(n("17x9")),u(n("nOHt"))),m=(n("P5f7"),n("g/15"));function v(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var y=new f.default,_=window.IntersectionObserver;function g(){return l||(_?l=new _(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var S=function(e){function t(e){var n;return r(this,t),(n=s(this,o(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(i,s){if(r&&i===t&&s===n)return r;var o=e(i,s);return t=i,n=s,r=o,o}}(function(e,t){return{href:v(e),as:t?v(t):t}}),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,i=t.target;if("A"!==r||!(i&&"_self"!==i||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var s=n.formatUrls(n.props.href,n.props.as),o=s.href,a=s.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(o)){var c=window.location.pathname;o=(0,h.resolve)(c,o),a=a?(0,h.resolve)(c,a):o,e.preventDefault();var u=n.props.scroll;null==u&&(u=a.indexOf("#")<0),p.default[n.props.replace?"replace":"push"](o,a,{shallow:n.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})}}},n.p=!1!==e.prefetch,n}return a(t,e),i(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&_&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=g();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,h.resolve)(e,t);p.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,i=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var s=d.Children.only(t),o={ref:function(t){e.handleRef(t),s&&"object"===typeof s&&s.ref&&("function"===typeof s.ref?s.ref(t):"object"===typeof s.ref&&(s.ref.current=t))},onMouseEnter:function(t){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(t),e.prefetch()},onClick:function(t){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==s.type||"href"in s.props)||(o.href=i||r),d.default.cloneElement(s,o)}}]),t}(d.Component);S.propTypes=void 0;var b=S;t.default=b},k8Su:function(e,t,n){"use strict";n.r(t);var r=n("vYYK"),i=n("q1tI"),s=n.n(i).a.createElement;t.default=function(){var e={fill:"#333"};return s("svg",{width:"100%",height:"100%",viewBox:"0 0 25 25",version:"1.1",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2}},s("g",Object(r.a)({id:"Artboard11"},"id","Artboard1"),s("path",{d:"M12.021,2.95c0.068,-0.204 0.259,-0.341 0.474,-0.341c0.214,0 0.405,0.137 0.473,0.341c1.155,3.458 4.134,12.373 5.622,16.828c0.202,0.605 0.101,1.271 -0.272,1.788c-0.373,0.518 -0.972,0.825 -1.61,0.825c-2.428,0 -5.949,0 -8.388,0c-0.647,0 -1.255,-0.311 -1.633,-0.836c-0.378,-0.525 -0.481,-1.2 -0.276,-1.814c1.493,-4.466 4.458,-13.342 5.61,-16.791Z",style:e}),s("path",{d:"M12.128,2.92c0.034,-0.179 0.19,-0.309 0.373,-0.309c0.182,0 0.339,0.13 0.372,0.309c0.872,4.621 3.01,15.956 3.548,18.81c0.031,0.163 -0.013,0.332 -0.118,0.459c-0.106,0.128 -0.264,0.202 -0.43,0.202c-1.526,0 -5.235,0 -6.753,0c-0.164,0 -0.319,-0.073 -0.424,-0.199c-0.105,-0.126 -0.148,-0.293 -0.117,-0.454c0.536,-2.842 2.677,-14.193 3.549,-18.818Z",style:{fill:"#fee100"}}),s("path",{d:"M12.294,4.057c0.009,-0.105 0.096,-0.185 0.201,-0.185c0.104,0 0.192,0.08 0.2,0.185c0.44,5.552 1.454,18.334 1.454,18.334l-3.309,0c0,0 1.014,-12.782 1.454,-18.334Z",style:e}),s("path",{d:"M12.409,11.368c0.003,-0.048 0.043,-0.086 0.092,-0.086c0.048,0 0.088,0.038 0.091,0.086c0.203,3.04 0.676,10.131 0.731,10.946c0.001,0.02 -0.006,0.04 -0.02,0.054c-0.013,0.015 -0.032,0.023 -0.052,0.023c-0.281,0 -1.244,0 -1.509,0c-0.018,0 -0.035,-0.007 -0.047,-0.02c-0.012,-0.013 -0.018,-0.03 -0.017,-0.048c0.052,-0.772 0.527,-7.904 0.731,-10.955Z",style:{fill:"#00bcc4"}})))}}},[["8dqH",0,1,2]]]);