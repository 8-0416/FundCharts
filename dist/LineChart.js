/*!
 * LineChart
 * @version: 0.9.6
 * @author: Micheal Wayne(michealwayne@163.com)
 * @time: 2018~2020
 */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}([function(t,e,n){"use strict";function r(t){return Object.prototype.toString.call(t).replace(/\[object\s|\]/g,"")}function i(t){return"Object"===r(t)}function o(t,e){for(var n=0,r=t.length;n<r;n++)e(t[n],n)}e.__esModule=!0,e.type=r,e.isArray=function(t){return"Array"===r(t)},e.isString=function(t){return"String"===r(t)},e.isObject=i,e.isFunction=function(t){return"Function"===r(t)},e.each=o,e.cloneObjDeep=function t(e,n){if(!i(e)||!i(n))return!1;for(var r in e)!i(n[r])||a[r]?n[r]=n[r]||e[r]:t(e[r],n[r]);return n},e.isEmptyObj=a,e.getColorRgbArr=c,e.getColorRgba=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return"rgba("+c(t).join(",")+","+e+")"},e.Lighting=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return c(t).map(function(t){return(t+=t*e)>255?255:t})},e.throwError=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";throw new Error("Error!"+t+".(FundCharts-"+e+" "+n+")")},e.min=function(t){return t.reduce(function(t,e){return Math.min(t,e)})},e.max=function(t){return t.reduce(function(t,e){return Math.max(t,e)})};e.cloneArray=function(t,e){return o(t,function(t,n){e[n]=t}),e};function a(t){if(!t)return!1;for(var e in t)return!1;return!0}function c(t){var e=t.toLowerCase();if(e&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e)){if(4===e.length){for(var n="#",r=1;r<4;r++)n+=e.slice(r,r+1).concat(e.slice(r,r+1));e=n}for(var i=[],o=1;o<7;o+=2)i.push(parseInt("0x"+e.slice(o,o+2)));return i}return e}},function(t,e,n){"use strict";e.__esModule=!0,e.drawLine=function(t,e,n,r,i){t.beginPath(),t.moveTo(e,n),t.lineTo(r,i),t.closePath(),t.stroke()},e.drawDashLine=function(t,e,n,r,i,o){o=o||5;var a=(c=r-e,s=i-n,~~(Math.sqrt(Math.pow(c,2)+Math.pow(s,2))/o));var c,s;t.beginPath();for(var h=0;h<a;h++)t[1&h?"lineTo":"moveTo"](e+(r-e)/a*h,n+(i-n)/a*h);t.closePath(),t.stroke()},e.drawPoint=function(t,e,n,r,i,o,a){t.beginPath(),t.strokeStyle=i||"#fff",t.lineWidth=void 0!==a?a:1,t.arc(e,n,o,0,2*Math.PI,!0),t.closePath(),t.fillStyle=r,t.fill(),a&&t.stroke()},e.clearArc=function(t,e,n,r){var i=.1;!function e(n,r,o){var a=o-i,c=Math.sqrt(o*o-a*a);var s=n-a,h=r-c;var u=2*a,l=2*c;i<=o&&(t.clearRect(s,h,u,l),i+=.1,e(n,r,o))}(e,n,r)},e.retinaScale=function(t,e){var n=window.devicePixelRatio||1;if(1===n)return!1;var r=t.width,i=t.height;return t.width=r*n,t.height=i*n,e.scale(n,n),t.style.width=r+"px",t.style.height=i+"px",n},e.setContext=function(t,e,n){(!t||e?t.$el:t.opts.Canvas||n)||(0,i.throwError)("no chart object to set context","setContext");var o=t.opts,a=void 0,c=o.width||500,s=o.height||500;if(e){var h=t.$el;if(h.style.webkitUserSelect="none",h.style.userSelect="none",(0,i.isFunction)(h.getContext))a=h;else{(a=document.createElement("canvas")).id=o.id+"Canvas";var u=o.width||(0,r.getStyle)(h,"width"),l=o.height||(0,r.getStyle)(h,"height");a.width=u,a.height=l,h.appendChild(a)}}else if(n){wx&&(0,i.isFunction)(wx.createCanvasContext)||(0,i.throwError)("no param {Object} Ctx","setContext");var f=wx.createCanvasContext(o.id);a={info:"Weapp native canvas",width:c,height:s,getContext:function(){return f},draw:function(e){if(e)return f.draw(!0);wx.drawCanvas({canvasId:o.id,actions:t.ctx.getActions()})}}}else{var d=o.Canvas;o.Canvas||(0,i.throwError)("no param {Object} Canvas","setContext"),a=d.createCanvas(c,s),o.handleOut&&o.handleOut(a)}t.canvas=a,t.ctx=a.getContext("2d"),t._chart={width:a.width,height:a.height}};var r=n(3),i=n(0)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=n(1),o=n(4),a=o.default.inBrowser,c=o.default.inWeapp,s=function(){function t(t){this.$el=null,this.drawer=null,this.canvas=null,this.ctx=null;var e=t.id,n=t.colors,i=t.data,c=t.datas;e&&(i||c)||r.throwError("no container id or datas in options","setConfig"),a&&(this.$el=document.getElementById(e)),n&&(t.colors=n.concat(o.default.colors)),t=r.cloneObjDeep(o.default,t),i&&(t.datas=[i],delete t.data),this.opts=t}return t.prototype.update=function(t){t&&(t.data&&(t.datas=[t.data],delete t.data),this.opts=r.cloneObjDeep(this.opts,t)),this.drawer.draw(!0,this.opts.noAnimation)},t.prototype._init=function(){i.setContext(this,a,c),a&&(this.pixelRatio=i.retinaScale(this.canvas,this.ctx))},t}();e.default=s},function(t,e,n){"use strict";e.__esModule=!0,e.getStyle=function(t,e){var n=t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="undefined"!=typeof wx&&void 0!==wx.getSystemInfo,i=r?2:1,o={inBrowser:"undefined"!=typeof window&&!r,inWeapp:r,backgroundColor:"rgba(0,0,0,0)",colors:["#fe5d4e","#43c2f7","#707ad9","#ffa61b","#64d290","#cf27bd"],duration:600,events:["touchstart","touchmove"],hoverLineColor:"#999",hoverHighlight:.5,grid:{yTickLength:5},bar:{margin:60/i},chartTop:0,chartLeft:50/i,chartRight:15,dash:{color:"#e2e2e2",length:3/i},font:{color:"#666",fontFamily:"Arial",fontSize:{x:"11px",y:"10px"}}};e.default=o},function(t,e,n){"use strict";e.__esModule=!0,e.Animation=function(t){var e=23,n=t.duration||600,r=t.onProcess||function(){},a=t.onAnimationFinish||function(){},c=i(),s=null;c(function t(i){if(null===i)return r(1),a(),!1;null===s&&(s=i);if(i-s<n){var h=(i-s)/n;h=o(h),r(h),c(t,e)}else r(1),a()},e)};var r=void 0;"undefined"!=typeof window&&(r=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame);var i=function(){return void 0!==r?(i=function(){return r},r):function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}},o=function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getRange=function(t){return t?t>2?4*Math.ceil(t/4):1.2*t:1},e.getAngle=function(t,e,n,r){var i=Math.atan2(n-t,e-r);return i<0?2*Math.PI+i:i},e.getDistance=function(t,e,n,r){return Math.sqrt(Math.pow(t-n,2)+Math.pow(e-r,2))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=n(1),o=n(5),a=function(){function t(t){this.yaxis={min:0,max:0,range:0,unit:0},this.xaxis={min:0,max:0,range:0,unit:0},this.xRate=0,this.xBasic=0,this.yRate=0,this.yBasic=0,this.drawPoint=i.drawPoint,this.chartjs=t}return t.prototype.getBasicData=function(t){var e,n,i=this.chartjs.opts,o=t||i.datas,a=i.range;return a?(void 0!==a.min&&void 0!==a.max||r.throwError('param range need params "min" and "max"',"setConfig"),e=a.min,n=a.max):o&&o.length&&r.each(o,function(t){var i=r.min(t),o=r.max(t);e=void 0!==e&&e<i?e:i,n=n&&n>o?n:o}),[e||0,n||0]},t.prototype.clearCtn=function(t){var e=this.chartjs,n=e.opts,r=n.backgroundColor,i=e.ctx,o=e._chart.width,a=e._chart.height;i.beginPath();var c=(~r.replace(" ","").indexOf("0)")?i.clearRect:i.rect).bind(i);t?c(n.chartLeft-4,n.chartTop-5,o+1,a-16-n.chartTop):c(0,0,1e5,1e5),i.fillStyle=r,i.fill(),i.closePath()},t.prototype.drawDashs=function(t){var e=this.chartjs,n=e.opts,r=n.grid,o=n.dash,a=o.isSolid,c=n.dash.color,s=r.showGrid,h=r.xTickLength,u=r.yTickLength,l=e.ctx;l.save();var f=e._chart.width-n.chartRight+2,d=(e._chart.height-n.chartTop-30)/(u-1),p=(f-2-n.chartLeft)/(h-1),v=(u-1)*d+n.chartTop+5.5;if(!n.noDash){l.strokeStyle=c,l.beginPath(),l.lineWidth=1;for(var y=a?i.drawLine:i.drawDashLine,g=a?f-2:f,x=0;x<u;x++){var w=t||x*d+5+n.chartTop;y(l,n.chartLeft,w,g,w,o.length)}if(h){var m=n.chartTop+5;for(x=0;x<h;x++){var b=x*p+n.chartLeft-.5;y(l,b,v,b,m,o.length)}}}if(s){r.color&&(l.strokeStyle=r.color);var _=n.chartLeft-.5,j=e.drawer.zeroY||v;i.drawLine(l,_,n.chartTop,_,v),i.drawLine(l,_,j,f-2,j),l.stroke()}l.strokeStyle=c,l.restore()},t.prototype.drawTexts=function(t,e){var n=this.chartjs,r=n.opts,i=r.grid.yTickLength,o=r.font,a=n.ctx,c=r.xaxis,s=n._chart.width,h=n._chart.height;if(r.handleTextX&&(t=r.handleTextX),r.handleTextY&&(e=r.handleTextY),a.lineWidth=1,a.textAlign="right",a.textBaseline="middle",a.font=o.fontSize.x+" "+o.fontFamily,a.fillStyle=o.color,t)t(a,c);else{var u=h-10;a.fillText(c[c.length-1],s-r.chartRight,u),a.textAlign="left",a.fillText(c[0],r.chartLeft,u)}a.font=o.fontSize.y+" "+o.fontFamily,a.textAlign="right";var l=this.yaxis;if(e)e(a,l);else for(var f=r.chartLeft-5,d=r.yaxisfunc||function(t){return t.toFixed(2)},p=0;p<i;p++){var v=l.min+p*l.unit;a.fillText(d(v),f,this.yRate*v+this.yBasic)}},t.prototype.drawHover=function(t,e){},t.prototype.setEvents=function(){var t=this,e=this.chartjs.canvas,n=this.chartjs.opts,r=n.events;if(!r||!n.inBrowser)return!1;r.forEach(function(n){e.addEventListener(n,function(e){var r=~n.indexOf("touch")?e.touches[0]:e,i=r.clientX,o=r.pageY-r.target.offsetTop;return t.drawHover(i,o),!1},!1)})},t.prototype.setAnimation=function(t){var e=this.chartjs.opts;o.Animation({duration:e.duration,onProcess:t,onAnimationFinish:e.onFinish})},t}();e.default=a},,,,,,function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=n(14),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.init=function(t){t||this._init(),this.drawer=new a.default(this),t||this.drawer.init()},e}(o.default);e.default=c},function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),a=n(6),c=n(1),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.setDataset=function(){var t,e,n=this.chartjs,r=n.opts,i=r.grid.yTickLength,c=r.datas,s=this.getBasicData(),h=s[0],u=s[1];r.range?(t=h,e=u-h):(t=(e=a.getRange(u-h))>2?Math.floor(h):h)+e<u&&(t=h),this.yaxis={min:t,max:t+e,range:e,unit:e/(i-1)};var l=this.yRate=(30-n._chart.height+r.chartTop)/e,f=this.yBasic=5-this.yaxis.max*l+r.chartTop,d=c[0].length;d=d>1?d:2,this.xaxis={min:0,max:d-1,range:d,unit:1};var p=this.xBasic=r.chartLeft,v=this.xRate=(n._chart.width-r.chartLeft-r.chartRight)/(d-1),y=[];o.each(c,function(t){var e=[];1===t.length&&(t[1]=t[0]),o.each(t,function(t,n){e.push({x:Math.ceil(n*v+p),y:t*l+f,value:t})}),y.push(e)}),n.datasets=y},e.prototype.drawLine=function(t){void 0===t&&(t=1);var e=this.chartjs,n=e.datasets,r=e.opts,i=e.ctx;i.lineWidth=1;var a=e._chart.height-24,c=e.oldDatasets,s=c&&c[0].length,h=s&&1!==t?function(e,n,r){var o=e.x,a=e.y,c=r[n]||r[s-1];i.lineTo((o-c.x)*t+c.x,r[n]?(a-c.y)*t+c.y:a)}:function(t){i.lineTo(t.x,t.y)};o.each(n,function(e,u){i.save();var l=n[u][0],f=s?e:e.slice(0,~~(t*e.length)),d=(f=f.filter(function(t){return void 0!==t.value&&t})).length;if(!d)return!1;var p,v,y,g=r.curveLine?function(e,n){return function(e,n,r){n=n||e;var o=(e.x+n.x)/2,c=a*(1-t)+(e.y+n.y)*t/2;i.quadraticCurveTo(e.x,e.y,o,c)}(e,f[n+1],c&&c[u])}:function(t,e){return h(t,e,c&&c[u])};if(r.allGradient||0===u&&!r.noGradient){if(i.beginPath(),i.lineWidth=0,i.strokeStyle=r.backgroundColor,i.moveTo(r.chartLeft,a),i.lineTo(l.x+.5,a*(1-t)+l.y*t),o.each(f,g),c&&c[0]){var x=c[0].filter(function(t){return void 0!==t.value&&t}),w=x[d-1]||x[x.length-1]||f[d-1],m=(f[d-1].x-w.x)*t+w.x;i.lineTo(m,(f[d-1].y-w.y)*t+w.y),i.lineTo(m,a)}else i.lineTo(f[d-1].x+.5,a);i.closePath(),i.stroke(),p=r.colors[u],v=i.createLinearGradient(0,0,0,170),y=o.getColorRgbArr(p).join(","),v.addColorStop(0,"rgba("+y+", 0.3)"),v.addColorStop(.8,"rgba("+y+", 0.1)"),v.addColorStop(1,"rgba("+y+", 0.05)"),i.fillStyle=v,i.fill()}i.lineWidth=r.lineWidths&&r.lineWidths[u]||1,i.strokeStyle=r.colors[u],i.beginPath(),c&&c[u]?i.moveTo(l.x,(l.y-c[u][0].y)*t+c[u][0].y):i.moveTo(l.x,l.y),o.each(f,g),i.stroke(),i.restore()}),i.save(),1===t&&(e.oldDatasets=null)},e.prototype.drawHover=function(t,e){var n=this,r=this.chartjs,i=r.opts;if(i.curveLine||r.oldDatasets)return!1;this.draw(i.inWeapp||null,!0);var a=r.ctx,s=r._chart.width-i.chartRight;t=t<i.chartLeft?i.chartLeft:t>s?s:t;var h=Math.round((t-this.xBasic)/this.xRate),u=[],l=0,f=[],d=r.datasets;return o.each(d,function(t,e){var r=t[h];!i.hideHoverPoints&&r&&f.unshift(function(){n.drawPoint(a,r.x,r.y-1,i.colors[e],i.pointStyle,4,1)}),l=r.x,u.push(r.value)}),i.noHoverLine||(l+=.3,a.lineWidth=.5,a.strokeStyle=i.hoverLineColor,c.drawLine(a,l,6+i.chartTop,l,r._chart.height-25)),f.length&&o.each(f,function(t){return t()}),i.hover&&i.hover(h,u,i.xaxis[h],t,e),a.restore(),i.inWeapp&&r.canvas.draw(!0),h},e.prototype.draw=function(t,e){var n=this,r=this.chartjs,i=r.opts,a=r.datasets;this.clearCtn(!t),this.drawDashs(),t&&(a&&(r.oldDatasets=o.cloneArray([],a)),this.setDataset(),this.drawTexts()),e||i.curveLine||!i.inBrowser&&!i.inWeapp?(this.drawLine(),i.onFinish&&i.onFinish()):this.setAnimation(function(t){n.clearCtn(!0),n.drawDashs(),n.drawLine(t),i.onAnimation&&i.onAnimation.call(n,t),i.inWeapp&&r.ctx.draw(!0)})},e.prototype.init=function(){var t=this.chartjs.opts;this.draw(!0,t.noAnimation),this.setEvents(),t.inWeapp&&this.chartjs.canvas.draw()},e}(n(7).default);e.default=s}])});