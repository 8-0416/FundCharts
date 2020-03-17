/*!
 * ScatterChart
 * @version: 0.9.6
 * @author: Micheal Wayne(michealwayne@163.com)
 * @time: 2018~2020
 */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=19)}([function(t,e,n){"use strict";function r(t){return Object.prototype.toString.call(t).replace(/\[object\s|\]/g,"")}function i(t){return"Object"===r(t)}function o(t,e){for(var n=0,r=t.length;n<r;n++)e(t[n],n)}e.__esModule=!0,e.type=r,e.isArray=function(t){return"Array"===r(t)},e.isString=function(t){return"String"===r(t)},e.isObject=i,e.isFunction=function(t){return"Function"===r(t)},e.each=o,e.cloneObjDeep=function t(e,n){if(!i(e)||!i(n))return!1;for(var r in e)!i(n[r])||a[r]?n[r]=n[r]||e[r]:t(e[r],n[r]);return n},e.isEmptyObj=a,e.getColorRgbArr=s,e.getColorRgba=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return"rgba("+s(t).join(",")+","+e+")"},e.Lighting=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return s(t).map(function(t){return(t+=t*e)>255?255:t})},e.throwError=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";throw new Error("Error!"+t+".(FundCharts-"+e+" "+n+")")},e.min=function(t){return t.reduce(function(t,e){return Math.min(t,e)})},e.max=function(t){return t.reduce(function(t,e){return Math.max(t,e)})};e.cloneArray=function(t,e){return o(t,function(t,n){e[n]=t}),e};function a(t){if(!t)return!1;for(var e in t)return!1;return!0}function s(t){var e=t.toLowerCase();if(e&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e)){if(4===e.length){for(var n="#",r=1;r<4;r++)n+=e.slice(r,r+1).concat(e.slice(r,r+1));e=n}for(var i=[],o=1;o<7;o+=2)i.push(parseInt("0x"+e.slice(o,o+2)));return i}return e}},function(t,e,n){"use strict";e.__esModule=!0,e.drawLine=function(t,e,n,r,i){t.beginPath(),t.moveTo(e,n),t.lineTo(r,i),t.closePath(),t.stroke()},e.drawDashLine=function(t,e,n,r,i,o){o=o||5;var a=(s=r-e,c=i-n,~~(Math.sqrt(Math.pow(s,2)+Math.pow(c,2))/o));var s,c;t.beginPath();for(var u=0;u<a;u++)t[1&u?"lineTo":"moveTo"](e+(r-e)/a*u,n+(i-n)/a*u);t.closePath(),t.stroke()},e.drawPoint=function(t,e,n,r,i,o,a){t.beginPath(),t.strokeStyle=i||"#fff",t.lineWidth=void 0!==a?a:1,t.arc(e,n,o,0,2*Math.PI,!0),t.closePath(),t.fillStyle=r,t.fill(),a&&t.stroke()},e.clearArc=function(t,e,n,r){var i=.1;!function e(n,r,o){var a=o-i,s=Math.sqrt(o*o-a*a);var c=n-a,u=r-s;var h=2*a,f=2*s;i<=o&&(t.clearRect(c,u,h,f),i+=.1,e(n,r,o))}(e,n,r)},e.retinaScale=function(t,e){var n=window.devicePixelRatio||1;if(1===n)return!1;var r=t.width,i=t.height;return t.width=r*n,t.height=i*n,e.scale(n,n),t.style.width=r+"px",t.style.height=i+"px",n},e.setContext=function(t,e,n){(!t||e?t.$el:t.opts.Canvas||n)||(0,i.throwError)("no chart object to set context","setContext");var o=t.opts,a=void 0,s=o.width||500,c=o.height||500;if(e){var u=t.$el;if(u.style.webkitUserSelect="none",u.style.userSelect="none",(0,i.isFunction)(u.getContext))a=u;else{(a=document.createElement("canvas")).id=o.id+"Canvas";var h=o.width||(0,r.getStyle)(u,"width"),f=o.height||(0,r.getStyle)(u,"height");a.width=h,a.height=f,u.appendChild(a)}}else if(n){wx&&(0,i.isFunction)(wx.createCanvasContext)||(0,i.throwError)("no param {Object} Ctx","setContext");var l=wx.createCanvasContext(o.id);a={info:"Weapp native canvas",width:s,height:c,getContext:function(){return l},draw:function(e){if(e)return l.draw(!0);wx.drawCanvas({canvasId:o.id,actions:t.ctx.getActions()})}}}else{var d=o.Canvas;o.Canvas||(0,i.throwError)("no param {Object} Canvas","setContext"),a=d.createCanvas(s,c),o.handleOut&&o.handleOut(a)}t.canvas=a,t.ctx=a.getContext("2d"),t._chart={width:a.width,height:a.height}};var r=n(3),i=n(0)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=n(1),o=n(4),a=o.default.inBrowser,s=o.default.inWeapp,c=function(){function t(t){this.$el=null,this.drawer=null,this.canvas=null,this.ctx=null;var e=t.id,n=t.colors,i=t.data,s=t.datas;e&&(i||s)||r.throwError("no container id or datas in options","setConfig"),a&&(this.$el=document.getElementById(e)),n&&(t.colors=n.concat(o.default.colors)),t=r.cloneObjDeep(o.default,t),i&&(t.datas=[i],delete t.data),this.opts=t}return t.prototype.update=function(t){t&&(t.data&&(t.datas=[t.data],delete t.data),this.opts=r.cloneObjDeep(this.opts,t)),this.drawer.draw(!0,this.opts.noAnimation)},t.prototype._init=function(){i.setContext(this,a,s),a&&(this.pixelRatio=i.retinaScale(this.canvas,this.ctx))},t}();e.default=c},function(t,e,n){"use strict";e.__esModule=!0,e.getStyle=function(t,e){var n=t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="undefined"!=typeof wx&&void 0!==wx.getSystemInfo,i=r?2:1,o={inBrowser:"undefined"!=typeof window&&!r,inWeapp:r,backgroundColor:"rgba(0,0,0,0)",colors:["#fe5d4e","#43c2f7","#707ad9","#ffa61b","#64d290","#cf27bd"],duration:600,events:["touchstart","touchmove"],hoverLineColor:"#999",hoverHighlight:.5,grid:{yTickLength:5},bar:{margin:60/i},chartTop:0,chartLeft:50/i,chartRight:15,dash:{color:"#e2e2e2",length:3/i},font:{color:"#666",fontFamily:"Arial",fontSize:{x:"11px",y:"10px"}}};e.default=o},function(t,e,n){"use strict";e.__esModule=!0,e.Animation=function(t){var e=23,n=t.duration||600,r=t.onProcess||function(){},a=t.onAnimationFinish||function(){},s=i(),c=null;s(function t(i){if(null===i)return r(1),a(),!1;null===c&&(c=i);if(i-c<n){var u=(i-c)/n;u=o(u),r(u),s(t,e)}else r(1),a()},e)};var r=void 0;"undefined"!=typeof window&&(r=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame);var i=function(){return void 0!==r?(i=function(){return r},r):function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}},o=function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getRange=function(t){return t?t>2?4*Math.ceil(t/4):1.2*t:1},e.getAngle=function(t,e,n,r){var i=Math.atan2(n-t,e-r);return i<0?2*Math.PI+i:i},e.getDistance=function(t,e,n,r){return Math.sqrt(Math.pow(t-n,2)+Math.pow(e-r,2))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=n(1),o=n(5),a=function(){function t(t){this.yaxis={min:0,max:0,range:0,unit:0},this.xaxis={min:0,max:0,range:0,unit:0},this.xRate=0,this.xBasic=0,this.yRate=0,this.yBasic=0,this.drawPoint=i.drawPoint,this.chartjs=t}return t.prototype.getBasicData=function(t){var e,n,i=this.chartjs.opts,o=t||i.datas,a=i.range;return a?(void 0!==a.min&&void 0!==a.max||r.throwError('param range need params "min" and "max"',"setConfig"),e=a.min,n=a.max):o&&o.length&&r.each(o,function(t){var i=r.min(t),o=r.max(t);e=void 0!==e&&e<i?e:i,n=n&&n>o?n:o}),[e||0,n||0]},t.prototype.clearCtn=function(t){var e=this.chartjs,n=e.opts,r=n.backgroundColor,i=e.ctx,o=e._chart.width,a=e._chart.height;i.beginPath();var s=(~r.replace(" ","").indexOf("0)")?i.clearRect:i.rect).bind(i);t?s(n.chartLeft-4,n.chartTop-5,o+1,a-16-n.chartTop):s(0,0,1e5,1e5),i.fillStyle=r,i.fill(),i.closePath()},t.prototype.drawDashs=function(t){var e=this.chartjs,n=e.opts,r=n.grid,o=n.dash,a=o.isSolid,s=n.dash.color,c=r.showGrid,u=r.xTickLength,h=r.yTickLength,f=e.ctx;f.save();var l=e._chart.width-n.chartRight+2,d=(e._chart.height-n.chartTop-30)/(h-1),p=(l-2-n.chartLeft)/(u-1),v=(h-1)*d+n.chartTop+5.5;if(!n.noDash){f.strokeStyle=s,f.beginPath(),f.lineWidth=1;for(var x=a?i.drawLine:i.drawDashLine,y=a?l-2:l,g=0;g<h;g++){var w=t||g*d+5+n.chartTop;x(f,n.chartLeft,w,y,w,o.length)}if(u){var m=n.chartTop+5;for(g=0;g<u;g++){var _=g*p+n.chartLeft-.5;x(f,_,v,_,m,o.length)}}}if(c){r.color&&(f.strokeStyle=r.color);var b=n.chartLeft-.5,j=e.drawer.zeroY||v;i.drawLine(f,b,n.chartTop,b,v),i.drawLine(f,b,j,l-2,j),f.stroke()}f.strokeStyle=s,f.restore()},t.prototype.drawTexts=function(t,e){var n=this.chartjs,r=n.opts,i=r.grid.yTickLength,o=r.font,a=n.ctx,s=r.xaxis,c=n._chart.width,u=n._chart.height;if(r.handleTextX&&(t=r.handleTextX),r.handleTextY&&(e=r.handleTextY),a.lineWidth=1,a.textAlign="right",a.textBaseline="middle",a.font=o.fontSize.x+" "+o.fontFamily,a.fillStyle=o.color,t)t(a,s);else{var h=u-10;a.fillText(s[s.length-1],c-r.chartRight,h),a.textAlign="left",a.fillText(s[0],r.chartLeft,h)}a.font=o.fontSize.y+" "+o.fontFamily,a.textAlign="right";var f=this.yaxis;if(e)e(a,f);else for(var l=r.chartLeft-5,d=r.yaxisfunc||function(t){return t.toFixed(2)},p=0;p<i;p++){var v=f.min+p*f.unit;a.fillText(d(v),l,this.yRate*v+this.yBasic)}},t.prototype.drawHover=function(t,e){},t.prototype.setEvents=function(){var t=this,e=this.chartjs.canvas,n=this.chartjs.opts,r=n.events;if(!r||!n.inBrowser)return!1;r.forEach(function(n){e.addEventListener(n,function(e){var r=~n.indexOf("touch")?e.touches[0]:e,i=r.clientX,o=r.pageY-r.target.offsetTop;return t.drawHover(i,o),!1},!1)})},t.prototype.setAnimation=function(t){var e=this.chartjs.opts;o.Animation({duration:e.duration,onProcess:t,onAnimationFinish:e.onFinish})},t}();e.default=a},,,,,,,,,,,,function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=n(20),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.init=function(){this._init(),this.drawer=new a.default(this),this.drawer.init()},e}(o.default);e.default=s},function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),a=n(6),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.setDataset=function(){var t,e,n=this.chartjs,r=n.opts,i=r.range,s=r.grid.yTickLength,c=r.datas,u=null,h=null;if(i)u={x:i.x[0],y:i.y[0]},t=(h={x:i.x[1],y:i.y[1]}).x-u.x,e=h.y-u.y;else{var f=[],l=[];o.each(c,function(t){o.each(t,function(t){f.push(t[0]),l.push(t[1])})}),u={x:o.min(f),y:o.min(l)},h={x:o.max(f),y:o.max(l)},f=[],l=[],t=a.getRange(h.x-u.x),u.x=t>2?Math.floor(u.x):u.x,u.x+t<h.x&&(u.x=u.x),e=a.getRange(h.y-u.y),u.y=e>2?Math.floor(u.y):u.y,u.y+e<h.y&&(u.y=u.y)}r.xaxisfunc?r.xaxis=[r.xaxisfunc(u.x),r.xaxisfunc(h.x)]:r.xaxis=[u.x.toFixed(2),h.x.toFixed(2)],this.yaxis={min:u.y,max:u.y+e,range:e,unit:e/(s-1)};var d=this.yRate=(30-n._chart.height+r.chartTop)/e,p=this.yBasic=5-this.yaxis.max*d+r.chartTop;this.xaxis={min:u.x,max:u.x+t,range:t,unit:t/4};var v=this.xRate=(n._chart.width-65)/t,x=this.xBasic=50;n.datasets=c.map(function(t){return t.map(function(t){return{x:t[0]*v+x,y:t[1]*d+p,value:t}})})},e.prototype.drawPoints=function(t){var e=this;void 0===t&&(t=1);var n=this.chartjs,r=n.opts,i=r.borderRate||.8,a=n.datasets;o.each(a,function(s,c){var u=o.getColorRgba(r.colors[c],.3),h=(r.pointWidths&&r.pointWidths[c]||6-4*c/a.length)*t,f=h*i;o.each(s,function(t){e.drawPoint(n.ctx,t.x,t.y,r.colors[c],u,h,f)})})},e.prototype.draw=function(t,e){var n=this,r=this.chartjs.opts;this.clearCtn(!t),this.drawDashs(),t&&(this.setDataset(),this.drawTexts()),e||!r.inBrowser&&!r.inWeapp?(this.drawPoints(),r.onFinish&&r.onFinish()):this.setAnimation(function(t){n.clearCtn(!0),n.drawDashs(),n.drawPoints(t),r.onAnimation&&r.onAnimation.call(n,t),r.inWeapp&&n.chartjs.ctx.draw(!0)})},e.prototype.init=function(){var t=this.chartjs.opts;this.draw(!0,t.noAnimation),t.inWeapp&&this.chartjs.canvas.draw()},e}(n(7).default);e.default=s}])});