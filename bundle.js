!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}([function(t,e){var n="Webkit Moz O ms".split(" "),i=.001;function r(t,e,i){for(var r=t.style,s=0;s<n.length;++s){r[n[s]+o(e)]=i}r[e]=i}function o(t){return t.charAt(0).toUpperCase()+t.slice(1)}function s(t){return!function(t){return"[object Array]"===Object.prototype.toString.call(t)}(t)&&("object"===typeof t&&!!t)}function a(t,e){for(var n in t){if(t.hasOwnProperty(n))e(t[n],n)}}t.exports={extend:function t(e,n,i){for(var r in e=e||{},i=i||!1,n=n||{})if(n.hasOwnProperty(r)){var o=e[r],a=n[r];i&&s(o)&&s(a)?e[r]=t(o,a,i):e[r]=a}return e},render:function(t,e){var n=t;for(var i in e)if(e.hasOwnProperty(i)){var r=e[i],o=new RegExp("\\{"+i+"\\}","g");n=n.replace(o,r)}return n},setStyle:r,setStyles:function(t,e){a(e,function(e,n){null!=e&&(s(e)&&!0===e.prefix?r(t,n,e.value):t.style[n]=e)})},capitalize:o,isString:function(t){return"string"==typeof t||t instanceof String},isFunction:function(t){return"function"==typeof t},isObject:s,forEachObject:a,floatEquals:function(t,e){return Math.abs(t-e)<i},removeChildren:function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}}},function(t,e,n){var i=n(2),r=n(0),o=function t(e,n){if(!(this instanceof t))throw new Error("Constructor was called without new keyword");if(0!==arguments.length){this._opts=r.extend({color:"#555",strokeWidth:1,trailColor:null,trailWidth:null,fill:null,text:{style:{color:null,position:"absolute",left:"50%",top:"50%",padding:0,margin:0,transform:{prefix:!0,value:"translate(-50%, -50%)"}},autoStyleContainer:!0,alignToBottom:!0,value:null,className:"progressbar-text"},svgStyle:{display:"block",width:"100%"},warnings:!1},n,!0),r.isObject(n)&&void 0!==n.svgStyle&&(this._opts.svgStyle=n.svgStyle),r.isObject(n)&&r.isObject(n.text)&&void 0!==n.text.style&&(this._opts.text.style=n.text.style);var o,s=this._createSvgView(this._opts);if(!(o=r.isString(e)?document.querySelector(e):e))throw new Error("Container does not exist: "+e);this._container=o,this._container.appendChild(s.svg),this._opts.warnings&&this._warnContainerAspectRatio(this._container),this._opts.svgStyle&&r.setStyles(s.svg,this._opts.svgStyle),this.svg=s.svg,this.path=s.path,this.trail=s.trail,this.text=null;var a=r.extend({attachment:void 0,shape:this},this._opts);this._progressPath=new i(s.path,a),r.isObject(this._opts.text)&&null!==this._opts.text.value&&this.setText(this._opts.text.value)}};o.prototype.animate=function(t,e,n){if(null===this._progressPath)throw new Error("Object is destroyed");this._progressPath.animate(t,e,n)},o.prototype.stop=function(){if(null===this._progressPath)throw new Error("Object is destroyed");void 0!==this._progressPath&&this._progressPath.stop()},o.prototype.destroy=function(){if(null===this._progressPath)throw new Error("Object is destroyed");this.stop(),this.svg.parentNode.removeChild(this.svg),this.svg=null,this.path=null,this.trail=null,this._progressPath=null,null!==this.text&&(this.text.parentNode.removeChild(this.text),this.text=null)},o.prototype.set=function(t){if(null===this._progressPath)throw new Error("Object is destroyed");this._progressPath.set(t)},o.prototype.value=function(){if(null===this._progressPath)throw new Error("Object is destroyed");return void 0===this._progressPath?0:this._progressPath.value()},o.prototype.setText=function(t){if(null===this._progressPath)throw new Error("Object is destroyed");null===this.text&&(this.text=this._createTextContainer(this._opts,this._container),this._container.appendChild(this.text)),r.isObject(t)?(r.removeChildren(this.text),this.text.appendChild(t)):this.text.innerHTML=t},o.prototype._createSvgView=function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","svg");this._initializeSvg(e,t);var n=null;(t.trailColor||t.trailWidth)&&(n=this._createTrail(t),e.appendChild(n));var i=this._createPath(t);return e.appendChild(i),{svg:e,path:i,trail:n}},o.prototype._initializeSvg=function(t,e){t.setAttribute("viewBox","0 0 100 100")},o.prototype._createPath=function(t){var e=this._pathString(t);return this._createPathElement(e,t)},o.prototype._createTrail=function(t){var e=this._trailString(t),n=r.extend({},t);return n.trailColor||(n.trailColor="#eee"),n.trailWidth||(n.trailWidth=n.strokeWidth),n.color=n.trailColor,n.strokeWidth=n.trailWidth,n.fill=null,this._createPathElement(e,n)},o.prototype._createPathElement=function(t,e){var n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("d",t),n.setAttribute("stroke",e.color),n.setAttribute("stroke-width",e.strokeWidth),e.fill?n.setAttribute("fill",e.fill):n.setAttribute("fill-opacity","0"),n},o.prototype._createTextContainer=function(t,e){var n=document.createElement("div");n.className=t.text.className;var i=t.text.style;return i&&(t.text.autoStyleContainer&&(e.style.position="relative"),r.setStyles(n,i),i.color||(n.style.color=t.color)),this._initializeTextContainer(t,e,n),n},o.prototype._initializeTextContainer=function(t,e,n){},o.prototype._pathString=function(t){throw new Error("Override this function for each progress bar")},o.prototype._trailString=function(t){throw new Error("Override this function for each progress bar")},o.prototype._warnContainerAspectRatio=function(t){if(this.containerAspectRatio){var e=window.getComputedStyle(t,null),n=parseFloat(e.getPropertyValue("width"),10),i=parseFloat(e.getPropertyValue("height"),10);r.floatEquals(this.containerAspectRatio,n/i)||(console.warn("Incorrect aspect ratio of container","#"+t.id,"detected:",e.getPropertyValue("width")+"(width)","/",e.getPropertyValue("height")+"(height)","=",n/i),console.warn("Aspect ratio of should be",this.containerAspectRatio))}},t.exports=o},function(t,e,n){var i=n(10),r=n(0),o={easeIn:"easeInCubic",easeOut:"easeOutCubic",easeInOut:"easeInOutCubic"},s=function t(e,n){if(!(this instanceof t))throw new Error("Constructor was called without new keyword");var i;n=r.extend({duration:800,easing:"linear",from:{},to:{},step:function(){}},n),i=r.isString(e)?document.querySelector(e):e,this.path=i,this._opts=n,this._tweenable=null;var o=this.path.getTotalLength();this.path.style.strokeDasharray=o+" "+o,this.set(0)};s.prototype.value=function(){var t=this._getComputedDashOffset(),e=this.path.getTotalLength();return parseFloat((1-t/e).toFixed(6),10)},s.prototype.set=function(t){this.stop(),this.path.style.strokeDashoffset=this._progressToOffset(t);var e=this._opts.step;if(r.isFunction(e)){var n=this._easing(this._opts.easing);e(this._calculateTo(t,n),this._opts.shape||this,this._opts.attachment)}},s.prototype.stop=function(){this._stopTween(),this.path.style.strokeDashoffset=this._getComputedDashOffset()},s.prototype.animate=function(t,e,n){e=e||{},r.isFunction(e)&&(n=e,e={});var o=r.extend({},e),s=r.extend({},this._opts);e=r.extend(s,e);var a=this._easing(e.easing),c=this._resolveFromAndTo(t,a,o);this.stop(),this.path.getBoundingClientRect();var l=this._getComputedDashOffset(),u=this._progressToOffset(t),p=this;this._tweenable=new i,this._tweenable.tween({from:r.extend({offset:l},c.from),to:r.extend({offset:u},c.to),duration:e.duration,easing:a,step:function(t){p.path.style.strokeDashoffset=t.offset;var n=e.shape||p;e.step(t,n,e.attachment)},finish:function(t){r.isFunction(n)&&n()}})},s.prototype._getComputedDashOffset=function(){var t=window.getComputedStyle(this.path,null);return parseFloat(t.getPropertyValue("stroke-dashoffset"),10)},s.prototype._progressToOffset=function(t){var e=this.path.getTotalLength();return e-t*e},s.prototype._resolveFromAndTo=function(t,e,n){return n.from&&n.to?{from:n.from,to:n.to}:{from:this._calculateFrom(e),to:this._calculateTo(t,e)}},s.prototype._calculateFrom=function(t){return i.interpolate(this._opts.from,this._opts.to,this.value(),t)},s.prototype._calculateTo=function(t,e){return i.interpolate(this._opts.from,this._opts.to,t,e)},s.prototype._stopTween=function(){null!==this._tweenable&&(this._tweenable.stop(),this._tweenable=null)},s.prototype._easing=function(t){return o.hasOwnProperty(t)?o[t]:t},t.exports=s},function(t,e,n){var i=n(1),r=n(0),o=function(t,e){this._pathTemplate="M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",this.containerAspectRatio=1,i.apply(this,arguments)};(o.prototype=new i).constructor=o,o.prototype._pathString=function(t){var e=t.strokeWidth;t.trailWidth&&t.trailWidth>t.strokeWidth&&(e=t.trailWidth);var n=50-e/2;return r.render(this._pathTemplate,{radius:n,"2radius":2*n})},o.prototype._trailString=function(t){return this._pathString(t)},t.exports=o},function(t,e,n){var i,r,o,s,a;t.exports=(r=[],o=document,s=o.documentElement.doScroll,(a=(s?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState))||o.addEventListener("DOMContentLoaded",i=function(){for(o.removeEventListener("DOMContentLoaded",i),a=1;i=r.shift();)i()}),function(t){a?setTimeout(t,0):r.push(t)})},function(t,e,n){t.exports={Line:n(9),Circle:n(3),SemiCircle:n(11),Path:n(2),Shape:n(1),utils:n(0)}},function(t,e,n){
/*!
 * in-view 0.6.1 - Get notified when a DOM element enters or exits the viewport.
 * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/in-view
 * License: MIT
 */
t.exports=function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var i=n(2),r=function(t){return t&&t.__esModule?t:{default:t}}(i);t.exports=r.default},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),o=i(r),s=n(3),a=i(s),c=n(4);e.default=function(){if("undefined"!=typeof window){var t={history:[]},e={offset:{},threshold:0,test:c.inViewport},n=(0,o.default)(function(){t.history.forEach(function(e){t[e].check()})},100);["scroll","resize","load"].forEach(function(t){return addEventListener(t,n)}),window.MutationObserver&&addEventListener("DOMContentLoaded",function(){new MutationObserver(n).observe(document.body,{attributes:!0,childList:!0,subtree:!0})});var i=function(n){if("string"==typeof n){var i=[].slice.call(document.querySelectorAll(n));return t.history.indexOf(n)>-1?t[n].elements=i:(t[n]=(0,a.default)(i,e),t.history.push(n)),t[n]}};return i.offset=function(t){if(void 0===t)return e.offset;var n=function(t){return"number"==typeof t};return["top","right","bottom","left"].forEach(n(t)?function(n){return e.offset[n]=t}:function(i){return n(t[i])?e.offset[i]=t[i]:null}),e.offset},i.threshold=function(t){return"number"==typeof t&&t>=0&&t<=1?e.threshold=t:e.threshold},i.test=function(t){return"function"==typeof t?e.test=t:e.test},i.is=function(t){return e.test(t,e)},i.offset(0),i}}()},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),i=function(){function t(e,n){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.options=n,this.elements=e,this.current=[],this.handlers={enter:[],exit:[]},this.singles={enter:[],exit:[]}}return n(t,[{key:"check",value:function(){var t=this;return this.elements.forEach(function(e){var n=t.options.test(e,t.options),i=t.current.indexOf(e),r=i>-1,o=n&&!r,s=!n&&r;o&&(t.current.push(e),t.emit("enter",e)),s&&(t.current.splice(i,1),t.emit("exit",e))}),this}},{key:"on",value:function(t,e){return this.handlers[t].push(e),this}},{key:"once",value:function(t,e){return this.singles[t].unshift(e),this}},{key:"emit",value:function(t,e){for(;this.singles[t].length;)this.singles[t].pop()(e);for(var n=this.handlers[t].length;--n>-1;)this.handlers[t][n](e);return this}}]),t}();e.default=function(t,e){return new i(t,e)}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.inViewport=function(t,e){var n=t.getBoundingClientRect(),i=n.top,r=n.right,o=n.bottom,s=n.left,a=n.width,c=n.height,l={t:o,r:window.innerWidth-s,b:window.innerHeight-i,l:r},u={x:e.threshold*a,y:e.threshold*c};return l.t>e.offset.top+u.y&&l.r>e.offset.right+u.x&&l.b>e.offset.bottom+u.y&&l.l>e.offset.left+u.x}},function(t,e){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,function(){return this}())},function(t,e,n){var i=n(5),r="object"==typeof self&&self&&self.Object===Object&&self,o=i||r||Function("return this")();t.exports=o},function(t,e,n){var i=n(1),r=n(8),o=n(10),s="Expected a function",a=Math.max,c=Math.min;t.exports=function(t,e,n){function l(e){var n=d,i=_;return d=_=void 0,w=e,v=t.apply(i,n)}function u(t){var n=t-y,i=t-w;return void 0===y||n>=e||n<0||j&&i>=m}function p(){var t=r();return u(t)?h(t):void(g=setTimeout(p,function(t){var n=t-w,i=e-(t-y);return j?c(i,m-n):i}(t)))}function h(t){return g=void 0,S&&d?l(t):(d=_=void 0,v)}function f(){var t=r(),n=u(t);if(d=arguments,_=this,y=t,n){if(void 0===g)return function(t){return w=t,g=setTimeout(p,e),b?l(t):v}(y);if(j)return g=setTimeout(p,e),l(y)}return void 0===g&&(g=setTimeout(p,e)),v}var d,_,m,v,g,y,w=0,b=!1,j=!1,S=!0;if("function"!=typeof t)throw new TypeError(s);return e=o(e)||0,i(n)&&(b=!!n.leading,m=(j="maxWait"in n)?a(o(n.maxWait)||0,e):m,S="trailing"in n?!!n.trailing:S),f.cancel=function(){void 0!==g&&clearTimeout(g),w=0,d=y=_=g=void 0},f.flush=function(){return void 0===g?v:h(r())},f}},function(t,e,n){var i=n(6);t.exports=function(){return i.Date.now()}},function(t,e,n){var i=n(7),r=n(1),o="Expected a function";t.exports=function(t,e,n){var s=!0,a=!0;if("function"!=typeof t)throw new TypeError(o);return r(n)&&(s="leading"in n?!!n.leading:s,a="trailing"in n?!!n.trailing:a),i(t,e,{leading:s,maxWait:e,trailing:a})}},function(t,e){t.exports=function(t){return t}}])},function(t,e){t.exports='<!doctype html> <html lang=en> <head> <meta charset=UTF-8 /> <title>Quernest &amp; Co.</title> <meta name=viewport content="width=device-width,initial-scale=1"/> <meta name=description content="Front-end developer from Ukraine."/> <meta property=og:title content="Quernest & Co."/> <meta property=og:type content=website /> <meta property=og:url content=https://quernest.github.io/ /> <meta property=og:image content=https://i.imgur.com/iZjNcO2.png /> <meta property=og:image:alt content="Website logo. A green leaf in circle"/> <meta property=og:description content="Front-end developer from Ukraine."/> <meta name=twitter:card content=summary /> <meta name=twitter:creator content=@quernest /> <meta name=theme-color content=#000000 /> <meta name=msapplication-navbutton-color content=#000000 /> <meta name=apple-mobile-web-app-status-bar-style content=black-translucent /> </head> <body> <header> <h1>Quernest &amp; Co.</h1> <p>Front-end developer</p> <blockquote> <q>The more you know, the more you understand that you know nothing</q> &mdash; <cite>Socrates</cite> </blockquote> </header> <section id=about> <div class=content> <h2>About me</h2> <p> My name is Anton Zhitchenko. I am <span id=age>22</span> and I am a front-end developer from Ukraine. I specialise in developing web pages or applications using such web languages as HTML, CSS, JavaScript and ancillary libraries used in those languages. Also, I have some experience in developing iOS/Android applications with React Native and services on Node.js </p> </div> </section> <section id=education> <div class=content> <h2>Education</h2> <h3 class=institute> Donbass State Engineering Academy </h3> <p class=faculty> Master of Science &mdash; MS, Computer Sciences </p> <p class=duration>2014 &mdash; 2020</p> </div> </section> <section id=experience> <div class=content> <h2>Experience</h2> <ul class=list> <li class=list__item> <h6 class=list__item-name>Freelance</h6> <p class=list__item-duration>September 2018 &mdash; now</p> <p class=list__item-position>Front-end developer</p> </li> <li class=list__item> <h6 class=list__item-name>WebId</h6> <p class=list__item-duration>November 2017 &mdash; May 2018</p> <p class=list__item-position>Front-end developer</p> </li> <li class=list__item> <h6 class=list__item-name>Freelance, own/pet projects, etc.</h6> <p class=list__item-duration>April 2016 &mdash; August 2017</p> <p class=list__item-position>Front-end developer</p> </li> </ul> </div> </section> <section id=skills> <div class=content> <h2>Professional skills</h2> <p>The main technologies that I own and use to develop applications</p> <div class=bar> <div class=bar__item> <p class=bar__item-data>HTML</p> <div class="bar__item-line js-progress" data-name=html data-color=#E34C26 data-value=0.95></div> </div> <div class=bar__item> <p class=bar__item-data>CSS</p> <div class="bar__item-line js-progress" data-name=css data-color=#563D7C data-value=0.91></div> </div> <div class=bar__item> <p class=bar__item-data>JavaScript</p> <div class="bar__item-line js-progress" data-name=js data-color=#F1E05A data-value=0.85></div> </div> <div class=bar__item> <p class=bar__item-data>React.js</p> <div class="bar__item-line js-progress" data-name=react data-color=#61DAFB data-value=0.82></div> </div> <div class=bar__item> <p class=bar__item-data>React Native</p> <div class="bar__item-line js-progress" data-name=react-native data-color=#05A5D1 data-value=0.74></div> </div> <div class=bar__item> <p class=bar__item-data>Node.js</p> <div class="bar__item-line js-progress" data-name=node data-color=#43a047 data-value=0.60></div> </div> <div class=bar__item> <p class=bar__item-data>MySQL</p> <div class="bar__item-line js-progress" data-name=mysql data-color=#4479A1 data-value=0.56></div> </div> </div> </div> </section> <section id=projects> <div class=content> <h2> Projects </h2> <p> There are some of my commercial and pet projects </p> <article class=project> <div class=project__content> <h3 class=project__content-title>Reduction</h3> <p class=project__content-description> Web application for using and testing dimensionality reduction algorithms such as principal component analysis, self-organizing maps, etc. </p> <a class=project__content-link href=https://quernest.github.io/reduction/ >Case Study</a> </div> <a href=https://quernest.github.io/reduction/ class="project__preview project-reduction"> <span class="icon icon-reduction"></span> </a> </article> <article class=project> <div class=project__content> <h3 class=project__content-title>TheMost</h3> <p class=project__content-description> The platform that brings together advertisers and bloggers </p> <a class=project__content-link href=https://themost.kz/ >Case Study</a> </div> <a href=https://themost.kz/ class="project__preview project-themost"> <span class="icon icon-themost"></span> </a> </article> <article class=project> <div class=project__content> <h3 class=project__content-title>Karofilm</h3> <p class=project__content-description> Cinema network, showtimes. Ordering and booking tickets </p> <a class=project__content-link href=https://karofilm.ru/ >Case Study</a> </div> <a href=https://karofilm.ru/ class="project__preview project-karofilm"> <span class="icon icon-karofilm"></span> </a> </article> <article class="project project-deprecated"> <div class=project__content> <h3 class=project__content-title>Asiamix.fun</h3> <p class=project__content-description> Entertainment media portal </p> <a class=project__content-link href=javascript:void(0)>Case Study</a> </div> <div class="project__preview project__preview-link project-asiamix"> <span class="icon icon-asiamix"></span> </div> </article> <article class=project> <div class=project__content> <h3 class=project__content-title>Schedule</h3> <p class=project__content-description> React Native application for viewing the study schedule for DSEA </p> <a class=project__content-link href=https://github.com/Quernest/Schedule>Case Study</a> </div> <a href=https://github.com/Quernest/Schedule class="project__preview project__preview-link project-schedule"> <span class="icon icon-schedule"></span> </a> </article> <article class=project> <div class=project__content> <h3 class=project__content-title>Schedule dashboard</h3> <p class=project__content-description> Dashboard for creating a schedule for educational institutes </p> <a class=project__content-link href=http://schedule-admin.herokuapp.com/ >Case Study</a> </div> <a href=http://schedule-admin.herokuapp.com/ class="project__preview project__preview-link project-schedule-admin"> <span class="icon icon-schedule-admin"></span> </a> </article> <article class=project> <div class=project__content> <h3 class=project__content-title>New Providence</h3> <p class=project__content-description> Landing page </p> <a class=project__content-link href=https://quernest.github.io/projects/newprovidence/ >Case Study</a> </div> <a href=https://quernest.github.io/projects/newprovidence/ class="project__preview project__preview-link project-newprovidence"> <span class="icon icon-newprovidence"></span> </a> </article> <article class=project> <div class=project__content> <h3 class=project__content-title>MMIO</h3> <p class=project__content-description> Online calculator for finding the maximum or minimum of a unimodal function on a segment </p> <a class=project__content-link href=https://quernest.github.io/projects/mmio/ >Case Study</a> </div> <a href=https://quernest.github.io/projects/mmio/ class="project__preview project__preview-link project-mmio"> <span class="icon icon-mmio"></span> </a> </article> <article class=project> <div class=project__content> <h3 class=project__content-title>BattleSpace</h3> <p class=project__content-description> Analogue of the famous arcade game <q>Space Invaders</q>. Created in pure JavaScript and HTML5 Canvas. </p> <a class=project__content-link href=https://quernest.github.io/projects/battlespace/ >Case Study</a> </div> <a href=https://quernest.github.io/projects/battlespace/ class="project__preview project__preview-link project-battlespace"> <span class="icon icon-battlespace"></span> </a> </article> <article class="project project-deprecated"> <div class=project__content> <h3 class=project__content-title>VK API</h3> <p class=project__content-description> Client for the popular social network VK with the ability to add friends, statuses, post and view wall posts and much more. </p> <a class=project__content-link href=javascript:void(0)>Case Study</a> </div> <div class="project__preview project__preview-link project-vk"> <span class="icon icon-vk"></span> </div> </article> <article class=project> <div class=project__content> <h3 class=project__content-title>Blueasy</h3> <p class=project__content-description> Website template for agencies and portfolios. Designed by Djordje Vanjek. </p> <a class=project__content-link href=https://quernest.github.io/projects/blueasy/ >Case Study</a> </div> <a href=https://quernest.github.io/projects/blueasy/ class="project__preview project__preview-link project-blueasy"> <span class="icon icon-blueasy"></span> </a> </article> <article class=project> <div class=project__content> <h3 class=project__content-title>Video player</h3> <p class=project__content-description> React-based HTML5 video player for the websites </p> <a class=project__content-link href=https://quernest.github.io/projects/video-player/ >Case Study</a> </div> <a href=https://quernest.github.io/projects/video-player/ class="project__preview project__preview-link project-player"> <span class="icon icon-player"></span> </a> </article> <article class=project> <div class=project__content> <h3 class=project__content-title>Minimo</h3> <p class=project__content-description> Minimalistic blog template </p> <a class=project__content-link href=https://quernest.github.io/projects/minimo/ >Case Study</a> </div> <a href=https://quernest.github.io/projects/minimo/ class="project__preview project__preview-link project-minimo"> <span class="icon icon-minimo"></span> </a> </article> <article class=project> <div class=project__content> <h3 class=project__content-title>Picture perfect</h3> <p class=project__content-description> Simple landing page template </p> <a class=project__content-link href=https://quernest.github.io/projects/pictureperfect/ >Case Study</a> </div> <a href=https://quernest.github.io/projects/pictureperfect/ class="project__preview project__preview-link project-pictureperfect"> <span class="icon icon-pictureperfect"></span> </a> </article> <article class=project> <div class=project__content> <h3 class=project__content-title>Signature</h3> <p class=project__content-description> CSS keyframes animation of my signature </p> <a class=project__content-link href=https://quernest.github.io/projects/signature/ >Case Study</a> </div> <a href=https://quernest.github.io/projects/signature/ class="project__preview project__preview-link project-signature"> <span class="icon icon-signature"></span> </a> </article> </div> </section> <footer id=footer> <div class=content> <h2>Contact me</h2> <div class=footer__links> <div class=footer__links-email> <a href=mailto:a.zhit4enko@gmail.com>a.zhit4enko@gmail.com</a> </div> <ul class=socials> <li class=socials__item> <a class="socials__item-icon icon icon-github" href=//github.com/quernest></a> </li> <li class=socials__item> <a class="socials__item-icon icon icon-telegram" href=//t.me/quernest></a> </li> <li class=socials__item> <a class="socials__item-icon icon icon-linkedin" href=//www.linkedin.com/in/quernest/ ></a> </li> </ul> </div> </div> </footer> </body> </html> '},function(t,e,n){},function(t,e,n){var i=n(1),r=n(0),o=function(t,e){this._pathTemplate="M 0,{center} L 100,{center}",i.apply(this,arguments)};(o.prototype=new i).constructor=o,o.prototype._initializeSvg=function(t,e){t.setAttribute("viewBox","0 0 100 "+e.strokeWidth),t.setAttribute("preserveAspectRatio","none")},o.prototype._pathString=function(t){return r.render(this._pathTemplate,{center:t.strokeWidth/2})},o.prototype._trailString=function(t){return this._pathString(t)},t.exports=o},function(t,e,n){(function(){var e=this||Function("return this")(),n=function(){"use strict";var n,i,r,o,s,a,c="linear",l=1e3/60,u=Date.now?Date.now:function(){return+new Date},p="undefined"!=typeof SHIFTY_DEBUG_NOW?SHIFTY_DEBUG_NOW:u;function h(){}function f(t,e){var n;for(n in t)Object.hasOwnProperty.call(t,n)&&e(n)}function d(t,e){return f(e,function(n){t[n]=e[n]}),t}function _(t,e){f(e,function(n){void 0===t[n]&&(t[n]=e[n])})}function m(t,e,i,r,o,s,a){var c,l,u,p=t<s?0:(t-s)/o;for(c in e)e.hasOwnProperty(c)&&(u="function"==typeof(l=a[c])?l:n[l],e[c]=v(i[c],r[c],u,p));return e}function v(t,e,n,i){return t+(e-t)*n(i)}function g(t,e){var n=b.prototype.filter,i=t._filterArgs;f(n,function(r){void 0!==n[r][e]&&n[r][e].apply(t,i)})}function y(t,e,n,i,c,u,h,f,d,_,v){r=e+n+i,o=Math.min(v||p(),r),s=o>=r,a=i-(r-o),t.isPlaying()&&(s?(d(h,t._attachment,a),t.stop(!0)):(t._scheduleId=_(t._timeoutHandler,l),g(t,"beforeTween"),o<e+n?m(1,c,u,h,1,1,f):m(o,c,u,h,i,e+n,f),g(t,"afterTween"),d(c,t._attachment,a)))}function w(t,e){var n={},i=typeof e;return f(t,"string"===i||"function"===i?function(t){n[t]=e}:function(t){n[t]||(n[t]=e[t]||c)}),n}function b(t,e){this._currentState=t||{},this._configured=!1,this._scheduleFunction=i,void 0!==e&&this.setConfig(e)}return i="undefined"!=typeof window&&(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||window.mozCancelRequestAnimationFrame&&window.mozRequestAnimationFrame)||setTimeout,b.prototype.tween=function(t){return this._isTweening?this:(void 0===t&&this._configured||this.setConfig(t),this._timestamp=p(),this._start(this.get(),this._attachment),this.resume())},b.prototype.setConfig=function(t){t=t||{},this._configured=!0,this._attachment=t.attachment,this._pausedAtTime=null,this._scheduleId=null,this._delay=t.delay||0,this._start=t.start||h,this._step=t.step||h,this._finish=t.finish||h,this._duration=t.duration||500,this._currentState=d({},t.from||this.get()),this._originalState=this.get(),this._targetState=d({},t.to||this.get());var e=this;this._timeoutHandler=function(){y(e,e._timestamp,e._delay,e._duration,e._currentState,e._originalState,e._targetState,e._easing,e._step,e._scheduleFunction)};var n=this._currentState,i=this._targetState;return _(i,n),this._easing=w(n,t.easing||c),this._filterArgs=[n,this._originalState,i,this._easing],g(this,"tweenCreated"),this},b.prototype.get=function(){return d({},this._currentState)},b.prototype.set=function(t){this._currentState=t},b.prototype.pause=function(){return this._pausedAtTime=p(),this._isPaused=!0,this},b.prototype.resume=function(){return this._isPaused&&(this._timestamp+=p()-this._pausedAtTime),this._isPaused=!1,this._isTweening=!0,this._timeoutHandler(),this},b.prototype.seek=function(t){t=Math.max(t,0);var e=p();return this._timestamp+t===0?this:(this._timestamp=e-t,this.isPlaying()||(this._isTweening=!0,this._isPaused=!1,y(this,this._timestamp,this._delay,this._duration,this._currentState,this._originalState,this._targetState,this._easing,this._step,this._scheduleFunction,e),this.pause()),this)},b.prototype.stop=function(t){return this._isTweening=!1,this._isPaused=!1,this._timeoutHandler=h,(e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.oCancelAnimationFrame||e.msCancelAnimationFrame||e.mozCancelRequestAnimationFrame||e.clearTimeout)(this._scheduleId),t&&(g(this,"beforeTween"),m(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),g(this,"afterTween"),g(this,"afterTweenEnd"),this._finish.call(this,this._currentState,this._attachment)),this},b.prototype.isPlaying=function(){return this._isTweening&&!this._isPaused},b.prototype.setScheduleFunction=function(t){this._scheduleFunction=t},b.prototype.dispose=function(){var t;for(t in this)this.hasOwnProperty(t)&&delete this[t]},b.prototype.filter={},b.prototype.formula={linear:function(t){return t}},n=b.prototype.formula,d(b,{now:p,each:f,tweenProps:m,tweenProp:v,applyFilter:g,shallowCopy:d,defaults:_,composeEasingObject:w}),"function"==typeof SHIFTY_DEBUG_NOW&&(e.timeoutHandler=y),t.exports=b,b}();n.shallowCopy(n.prototype.formula,{easeInQuad:function(t){return Math.pow(t,2)},easeOutQuad:function(t){return-(Math.pow(t-1,2)-1)},easeInOutQuad:function(t){return(t/=.5)<1?.5*Math.pow(t,2):-.5*((t-=2)*t-2)},easeInCubic:function(t){return Math.pow(t,3)},easeOutCubic:function(t){return Math.pow(t-1,3)+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},easeInQuart:function(t){return Math.pow(t,4)},easeOutQuart:function(t){return-(Math.pow(t-1,4)-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},easeInQuint:function(t){return Math.pow(t,5)},easeOutQuint:function(t){return Math.pow(t-1,5)+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)},easeInSine:function(t){return 1-Math.cos(t*(Math.PI/2))},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:1-Math.pow(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-Math.pow(t-1,2))},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},elastic:function(t){return-1*Math.pow(4,-8*t)*Math.sin((6*t-1)*(2*Math.PI)/2)+1},swingFromTo:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},swingFrom:function(t){var e=1.70158;return t*t*((e+1)*t-e)},swingTo:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},bounce:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bouncePast:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?2-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)},easeFromTo:function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},easeFrom:function(t){return Math.pow(t,4)},easeTo:function(t){return Math.pow(t,.25)}}),function(){function t(t,e,n,i,r,o){var s=0,a=0,c=0,l=0,u=0,p=0;function h(t){return((s*t+a)*t+c)*t}function f(t){return t>=0?t:0-t}return s=1-(c=3*e)-(a=3*(i-e)-c),l=1-(p=3*n)-(u=3*(r-n)-p),function(t,e){return n=function(t,e){var n,i,r,o,l,u,p;for(r=t,u=0;u<8;u++){if(f(o=h(r)-t)<e)return r;if(f(l=(3*s*(p=r)+2*a)*p+c)<1e-6)break;r-=o/l}if(i=1,(r=t)<(n=0))return n;if(r>i)return i;for(;n<i;){if(f((o=h(r))-t)<e)return r;t>o?n=r:i=r,r=.5*(i-n)+n}return r}(t,e),((l*n+u)*n+p)*n;var n}(t,function(t){return 1/(200*t)}(o))}n.setBezierFunction=function(e,i,r,o,s){var a=function(e,n,i,r){return function(o){return t(o,e,n,i,r,1)}}(i,r,o,s);return a.displayName=e,a.x1=i,a.y1=r,a.x2=o,a.y2=s,n.prototype.formula[e]=a},n.unsetBezierFunction=function(t){delete n.prototype.formula[t]}}(),function(){var t=new n;t._filterArgs=[],n.interpolate=function(e,i,r,o,s){var a=n.shallowCopy({},e),c=s||0,l=n.composeEasingObject(e,o||"linear");t.set({});var u=t._filterArgs;u.length=0,u[0]=a,u[1]=e,u[2]=i,u[3]=l,n.applyFilter(t,"tweenCreated"),n.applyFilter(t,"beforeTween");var p=function(t,e,i,r,o,s){return n.tweenProps(r,e,t,i,1,s,o)}(e,a,i,r,l,c);return n.applyFilter(t,"afterTween"),p}}(),function(t){var e=/(\d|\-|\.)/,n=/([^\-0-9\.]+)/g,i=/[0-9.\-]+/g,r=new RegExp("rgb\\("+i.source+/,\s*/.source+i.source+/,\s*/.source+i.source+"\\)","g"),o=/^.*\(/,s=/#([0-9]|[a-f]){3,6}/gi,a="VAL";function c(t,e){var n,i=[],r=t.length;for(n=0;n<r;n++)i.push("_"+e+"_"+n);return i}function l(e){t.each(e,function(t){var n=e[t];"string"==typeof n&&n.match(s)&&(e[t]=f(s,n,u))})}function u(t){var e=function(t){3===(t=t.replace(/#/,"")).length&&(t=(t=t.split(""))[0]+t[0]+t[1]+t[1]+t[2]+t[2]);return p[0]=h(t.substr(0,2)),p[1]=h(t.substr(2,2)),p[2]=h(t.substr(4,2)),p}(t);return"rgb("+e[0]+","+e[1]+","+e[2]+")"}var p=[];function h(t){return parseInt(t,16)}function f(t,e,n){var i=e.match(t),r=e.replace(t,a);if(i)for(var o,s=i.length,c=0;c<s;c++)o=i.shift(),r=r.replace(a,n(o));return r}function d(t){for(var e=t.match(i),n=e.length,r=t.match(o)[0],s=0;s<n;s++)r+=parseInt(e[s],10)+",";return r=r.slice(0,-1)+")"}function _(e,n){t.each(n,function(t){for(var i=g(e[t]),r=i.length,o=0;o<r;o++)e[n[t].chunkNames[o]]=+i[o];delete e[t]})}function m(e,n){t.each(n,function(t){var i=e[t],o=function(t,e){v.length=0;for(var n=e.length,i=0;i<n;i++)v.push(t[e[i]]);return v}(function(t,e){for(var n,i={},r=e.length,o=0;o<r;o++)n=e[o],i[n]=t[n],delete t[n];return i}(e,n[t].chunkNames),n[t].chunkNames);i=function(t,e){for(var n=t,i=e.length,r=0;r<i;r++)n=n.replace(a,+e[r].toFixed(4));return n}(n[t].formatString,o),e[t]=f(r,i,d)})}var v=[];function g(t){return t.match(i)}t.prototype.filter.token={tweenCreated:function(i,r,o,s){var u,p;l(i),l(r),l(o),this._tokenData=(u=i,p={},t.each(u,function(t){var i,r,o=u[t];if("string"==typeof o){var s=g(o);p[t]={formatString:(i=o,r=i.match(n),r?(1===r.length||i.charAt(0).match(e))&&r.unshift(""):r=["",""],r.join(a)),chunkNames:c(s,t)}}}),p)},beforeTween:function(e,n,i,r){!function(e,n){t.each(n,function(t){var i,r=n[t].chunkNames,o=r.length,s=e[t];if("string"==typeof s){var a=s.split(" "),c=a[a.length-1];for(i=0;i<o;i++)e[r[i]]=a[i]||c}else for(i=0;i<o;i++)e[r[i]]=s;delete e[t]})}(r,this._tokenData),_(e,this._tokenData),_(n,this._tokenData),_(i,this._tokenData)},afterTween:function(e,n,i,r){m(e,this._tokenData),m(n,this._tokenData),m(i,this._tokenData),function(e,n){t.each(n,function(t){var i=n[t].chunkNames,r=i.length,o=e[i[0]];if("string"==typeof o){for(var s="",a=0;a<r;a++)s+=" "+e[i[a]],delete e[i[a]];e[t]=s.substr(1)}else e[t]=o})}(r,this._tokenData)}}}(n)}).call(null)},function(t,e,n){var i=n(1),r=n(3),o=n(0),s=function(t,e){this._pathTemplate="M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0",this.containerAspectRatio=2,i.apply(this,arguments)};(s.prototype=new i).constructor=s,s.prototype._initializeSvg=function(t,e){t.setAttribute("viewBox","0 0 100 50")},s.prototype._initializeTextContainer=function(t,e,n){t.text.style&&(n.style.top="auto",n.style.bottom="0",t.text.alignToBottom?o.setStyle(n,"transform","translate(-50%, 0)"):o.setStyle(n,"transform","translate(-50%, 50%)"))},s.prototype._pathString=r.prototype._pathString,s.prototype._trailString=r.prototype._trailString,t.exports=s},function(t,e,n){"use strict";n.r(e);n(7),n(8);var i=n(4),r=n.n(i),o=n(5),s=n.n(o),a=n(6),c=n.n(a);function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{i||null==a.return||a.return()}finally{if(r)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r()(function(){var t,e,n,i,r,o=document.querySelector("#age");o&&(o.innerHTML=(t="1997/3/7",e=new Date,n=new Date(t),i=e.getFullYear()-n.getFullYear(),((r=e.getMonth()-n.getMonth())<0||0===r&&e.getDate()<n.getDate())&&i--,i));var a=document.querySelector("#current-year"),p=(new Date).getFullYear();a&&(a.innerHTML=p);var h=u(document.querySelectorAll(".js-progress")).map(function(t){var e=t.dataset,n=e.value,i=e.color;return[new s.a.Line(t,{strokeWidth:16,easing:"easeInOut",duration:1400,trailColor:"#eee",trailWidth:16,svgStyle:{width:"100%",height:"100%",position:"absolute"},color:i}),n]});c()(".bar").once("enter",function(){return h.forEach(function(t){var e=l(t,2),n=e[0],i=e[1];return n.animate(i)})})})}]);
//# sourceMappingURL=bundle.js.map