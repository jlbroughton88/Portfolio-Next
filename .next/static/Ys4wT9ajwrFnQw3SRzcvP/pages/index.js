(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"16Al":function(e,t,n){"use strict";var r=n("WbBG");function s(){}function i(){}i.resetWarningCache=s,e.exports=function(){function e(e,t,n,s,i,o){if(o!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:s};return n.PropTypes=n,n}},"17x9":function(e,t,n){e.exports=n("16Al")()},"3niX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=u.cssRules();return u.flush(),e},t.default=void 0;var r,s=n("q1tI");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=a(this,c(t).call(this,e))).prevProps={},n}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,s.Component),n=t,i=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],n=e[1];return u.computeId(t,n)}).join(" ")}}],(r=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){u.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&u.remove(this.prevProps),u.add(this.props),this.prevProps=this.props),null}}])&&o(n.prototype,r),i&&o(n,i),t}();t.default=h},"7frN":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),s=n.n(r),i=n("YFqc"),o=n.n(i),a=(n("LgZI"),s.a.createElement);t.default=function(){return a("footer",{className:"motherDivFooter"},a("div",{className:"name"},a(o.a,{href:"/"},a("a",{className:"nameDiv"},"Jacob Broughton"))),a("div",{className:"storyDiv"},a(o.a,{href:"/story"},a("a",{className:"story"},"My Story"))),a("div",{className:"contactDiv"},a(o.a,{href:"/contact"},a("a",{className:"contact"},"Contact"))),a("div",{className:"workDiv"},a(o.a,{href:"/work"},a("a",{className:"work"},"Work"))))}},"8oxB":function(e,t){var n,r,s=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,l=[],u=!1,h=-1;function f(){u&&c&&(u=!1,c.length?l=c.concat(l):h=-1,l.length&&d())}function d(){if(!u){var e=a(f);u=!0;for(var t=l.length;t;){for(c=l,l=[];++h<t;)c&&c[h].run();h=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||u||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},JAUf:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),s=n.n(r),i=n("YFqc"),o=n.n(i),a=n("k8Su"),c=(n("kkO7"),s.a.createElement);t.default=function(){return c("div",{className:"motherDiv"},c("nav",{className:"nav"},c("div",{className:"leftSide"},c(o.a,{href:"/"},c("a",null,c(a.default,null)))),c("div",{className:"rightSide"},c("div",{className:"navMenuDiv"},c(o.a,{href:"/story"},c("a",{className:"myStory"},"My Story")),c(o.a,{href:"/work"},c("a",{className:"work"},"Work")),c(o.a,{href:"/contact"},c("a",{className:"contact"},"Contact"))))))}},MX0m:function(e,t,n){e.exports=n("3niX")},Mln7:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),s=n.n(r).a.createElement;t.default=function(){return s("svg",{className:"githubSVG",version:"1.1",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",space:"preserve",viewBox:"0 0 24 24"},s("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",style:{fill:"#333"}}))}},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("MX0m"),s=n.n(r),i=n("q1tI"),o=n.n(i),a=(n("MkKN"),n("JAUf")),c=n("7frN"),l=n("YFqc"),u=n.n(l),h=n("loSH"),f=n("Mln7"),d=n("Wv89"),p=n("k8Su"),m=o.a.createElement;t.default=function(){return m("div",{className:"jsx-266929325 motherDiv"},m(a.default,null),m("div",{className:"jsx-266929325 mainDiv"},m("div",{className:"jsx-266929325 surroundingDiv"},m("div",{className:"jsx-266929325 introBox"},m("div",{className:"jsx-266929325 introContainer"},m("h1",{className:"jsx-266929325 introHead"},"Jacob Broughton"),m("p",{className:"jsx-266929325 introPara"},"Hi, i'm a Full Stack Web Developer, specializing in the MERN Stack. Take a look around and feel free to get in touch with me."),m(u.a,{href:"/contact"},m("a",{className:"jsx-266929325 cta"},"Get In Touch")))),m("div",{className:"jsx-266929325 imageBox"},m(p.default,null)),m("div",{className:"jsx-266929325 toolboxHeadBox"},m("div",{className:"jsx-266929325 toolheadDiv"},m("div",{className:"jsx-266929325 toolhead"},m("h3",{className:"jsx-266929325 toolh3"},"My Toolbox")))),m("div",{className:"jsx-266929325 comfortableBox"},m("div",{className:"jsx-266929325 boxHeadDiv"},"Most Comfortable"),m("ul",{className:"jsx-266929325 comfortableList"},m("li",{className:"jsx-266929325"},"HTML"),m("li",{className:"jsx-266929325"},"CSS"),m("li",{className:"jsx-266929325"},"Javascript"),m("li",{className:"jsx-266929325"},"ReactJS"),m("li",{className:"jsx-266929325"},"Node"),m("li",{className:"jsx-266929325"},"Express"),m("li",{className:"jsx-266929325"},"MongoDB"),m("li",{className:"jsx-266929325"},"NextJS"),m("li",{className:"jsx-266929325"},"ES6"),m("li",{className:"jsx-266929325"},"Heroku"))),m("div",{className:"jsx-266929325 experienceBox"},m("div",{className:"jsx-266929325 boxHeadDiv"}," Experience With"),m("ul",{className:"jsx-266929325 experienceList"},m("li",{className:"jsx-266929325"},"Bootstrap"),m("li",{className:"jsx-266929325"},"Materialize"),m("li",{className:"jsx-266929325"},"Zeit Now"),m("li",{className:"jsx-266929325"},"Python"),m("li",{className:"jsx-266929325"},"Arduino C"),m("li",{className:"jsx-266929325"},"MySQL"))),m("div",{className:"jsx-266929325 toolsBox"},m("div",{className:"jsx-266929325 boxHeadDiv"},"Tools"),m("ul",{className:"jsx-266929325 toolList"},m("li",{className:"jsx-266929325"},"Git VC"),m("li",{className:"jsx-266929325"},"Github"),m("li",{className:"jsx-266929325"},"Macbook Pro i7"),m("li",{className:"jsx-266929325"},"MacOS"),m("li",{className:"jsx-266929325"},"Affinity Designer"))),m("div",{className:"jsx-266929325 storyBox"},m("div",{className:"jsx-266929325 boxHeadDiv"},"A Brief Overview")),m("div",{className:"jsx-266929325 socialBox"},m("a",{href:"https://www.linkedin.com/in/jacob-broughton-637189164/",className:"jsx-266929325 iconA"},m(h.default,{className:"linkedinSVG"})),m("a",{href:"https://github.com/jlbroughton88",className:"jsx-266929325 iconA"},m(f.default,{className:"githubSVG"})),m(u.a,{href:"/contact"},m("a",{className:"jsx-266929325 iconA"},m(d.default,{className:"emailSVG"})))))),m(c.default,null),m(s.a,{id:"266929325"},["body{margin:0;}"]))}},SevZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("9kyW")),s=i(n("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,o=void 0!==i&&i,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=r||new s.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,n,i;return t=e,(n=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,s=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[r]=i,this._instancesCounts[r]=1}}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(n in this._instancesCounts,"styleId: `".concat(n,"` not found")),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-".concat(t);var s=String(n),i=t+s;return e[i]||(e[i]="jsx-".concat((0,r.default)("".concat(t,"-").concat(s)))),e[i]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var s=n+r;return t[s]||(t[s]=r.replace(e,n)),t[s]}}},{key:"getIdAndRules",value:function(e){var t=this,n=e.children,r=e.dynamic,s=e.id;if(r){var i=this.computeId(s,r);return{styleId:i,rules:Array.isArray(n)?n.map(function(e){return t.computeSelector(i,e)}):[this.computeSelector(i,n)]}}return{styleId:this.computeId(s),rules:Array.isArray(n)?n:[n]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&o(t.prototype,n),i&&o(t,i),e}();t.default=a},WbBG:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},Wv89:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),s=n.n(r).a.createElement;t.default=function(){return s("svg",{className:"emailSVG",height:"100%",viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",space:"preserve",serif:"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2}},s("path",{d:"M12,0c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12Zm6.99,6.98l-6.99,5.666l-6.991,-5.666l13.981,0Zm0.01,10l-14,0l0,-8.505l7,5.673l7,-5.672l0,8.504Z",style:{fillRule:"nonzero"}}))}},YFqc:function(e,t,n){e.exports=n("cTJO")},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=e.env&&!0,s=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,i=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,c=void 0===a?r:a,l=t.isBrowser,u=void 0===l?"undefined"!==typeof window:l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(s(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#".concat(i,"-deleted-rule____{}"),o("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var t,i,a;return t=e,(i=[{key:"setOptimizeForSpeed",value:function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(o(s(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){r||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),n.insertRule(this._deletedRulePlaceholder,e)}}else{var s=this._tags[e];o(s,"old rule at index `".concat(e,"` not found")),s.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&o(s(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-".concat(e),""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r}},{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,i),a&&n(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=i}).call(this,n("8oxB"))},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),s=n("WaGi"),i=n("ZDA2"),o=n("/+P4"),a=n("N9n2"),c=n("5Uuq"),l=n("KI45");t.__esModule=!0,t.default=void 0;var u,h=l(n("LX0d")),f=n("CxY0"),d=c(n("q1tI")),p=(l(n("17x9")),l(n("nOHt"))),m=(n("P5f7"),n("g/15"));function v(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var y=new h.default,_=window.IntersectionObserver;function S(){return u||(_?u=new _(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var g=function(e){function t(e){var n;return r(this,t),(n=i(this,o(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(s,i){if(r&&s===t&&i===n)return r;var o=e(s,i);return t=s,n=i,r=o,o}}(function(e,t){return{href:v(e),as:t?v(t):t}}),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,s=t.target;if("A"!==r||!(s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),o=i.href,a=i.as;if(function(e){var t=(0,f.parse)(e,!1,!0),n=(0,f.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(o)){var c=window.location.pathname;o=(0,f.resolve)(c,o),a=a?(0,f.resolve)(c,a):o,e.preventDefault();var l=n.props.scroll;null==l&&(l=a.indexOf("#")<0),p.default[n.props.replace?"replace":"push"](o,a,{shallow:n.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})}}},n.p=!1!==e.prefetch,n}return a(t,e),s(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&_&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=S();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,f.resolve)(e,t);p.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,s=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var i=d.Children.only(t),o={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch()},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(o.href=s||r),d.default.cloneElement(i,o)}}]),t}(d.Component);g.propTypes=void 0;var w=g;t.default=w},k8Su:function(e,t,n){"use strict";n.r(t);var r=n("vYYK"),s=n("q1tI"),i=n.n(s).a.createElement;t.default=function(){var e={fill:"#333"};return i("svg",{width:"100%",height:"100%",viewBox:"0 0 25 25",version:"1.1",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2}},i("g",Object(r.a)({id:"Artboard11"},"id","Artboard1"),i("path",{d:"M12.021,2.95c0.068,-0.204 0.259,-0.341 0.474,-0.341c0.214,0 0.405,0.137 0.473,0.341c1.155,3.458 4.134,12.373 5.622,16.828c0.202,0.605 0.101,1.271 -0.272,1.788c-0.373,0.518 -0.972,0.825 -1.61,0.825c-2.428,0 -5.949,0 -8.388,0c-0.647,0 -1.255,-0.311 -1.633,-0.836c-0.378,-0.525 -0.481,-1.2 -0.276,-1.814c1.493,-4.466 4.458,-13.342 5.61,-16.791Z",style:e}),i("path",{d:"M12.128,2.92c0.034,-0.179 0.19,-0.309 0.373,-0.309c0.182,0 0.339,0.13 0.372,0.309c0.872,4.621 3.01,15.956 3.548,18.81c0.031,0.163 -0.013,0.332 -0.118,0.459c-0.106,0.128 -0.264,0.202 -0.43,0.202c-1.526,0 -5.235,0 -6.753,0c-0.164,0 -0.319,-0.073 -0.424,-0.199c-0.105,-0.126 -0.148,-0.293 -0.117,-0.454c0.536,-2.842 2.677,-14.193 3.549,-18.818Z",style:{fill:"#fee100"}}),i("path",{d:"M12.294,4.057c0.009,-0.105 0.096,-0.185 0.201,-0.185c0.104,0 0.192,0.08 0.2,0.185c0.44,5.552 1.454,18.334 1.454,18.334l-3.309,0c0,0 1.014,-12.782 1.454,-18.334Z",style:e}),i("path",{d:"M12.409,11.368c0.003,-0.048 0.043,-0.086 0.092,-0.086c0.048,0 0.088,0.038 0.091,0.086c0.203,3.04 0.676,10.131 0.731,10.946c0.001,0.02 -0.006,0.04 -0.02,0.054c-0.013,0.015 -0.032,0.023 -0.052,0.023c-0.281,0 -1.244,0 -1.509,0c-0.018,0 -0.035,-0.007 -0.047,-0.02c-0.012,-0.013 -0.018,-0.03 -0.017,-0.048c0.052,-0.772 0.527,-7.904 0.731,-10.955Z",style:{fill:"#00bcc4"}})))}},loSH:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),s=n.n(r).a.createElement;t.default=function(){return s("svg",{className:"linkedinSVG",xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"100%",height:"100%",viewBox:"0 0 24 24"},s("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"}))}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2]]]);