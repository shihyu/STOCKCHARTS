var TimeTrendChart=webpackJsonp_name_([6],{0:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var l=function(){function t(t,e){var a=[],r=!0,i=!1,n=void 0;try{for(var s,l=t[Symbol.iterator]();!(r=(s=l.next()).done)&&(a.push(s.value),!e||a.length!==e);r=!0);}catch(t){i=!0,n=t}finally{try{!r&&l.return&&l.return()}finally{if(i)throw n}}return a}return function(e,a){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function t(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}}();a(1);var c=a(5),u=(r(c),a(7)),h=r(u),d=(a(137),a(8)),f=a(6),p=.3,v=16,m="#4188bb",g="#e94f69",x="#139125",y="#CCCCCC",k="#ec9e4a",w=661,A=["20:00","0:00","9:00","13:30","15:30"],b=function(t){function e(t){var a=t.width,r=t.height,s=t.container,l=t.data,o=t.settlementPrice,c=t.high,u=t.low,h=t.showVolume;i(this,e);var d=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return d.element=f.select(s),d.svg=d.element.append("svg"),d.svg.attr("width",a).attr("height",r),d.container=s,d.width=a,d.height=r,d.volHeight=r*p,d.showVolume=h,h||(d.volHeight=0),d.baseHeight=r-d.volHeight-v,d.data=l,d.settlementPrice=o,d.high=c,d.low=u,d.render(),d.initTouchEvents(),d}return s(e,t),o(e,[{key:"render",value:function(){this.renderAxis(),this.renderArea(),this.showVolume&&this.renderVolumes()}},{key:"renderAxis",value:function(){this.createHorizontalAxis(),this.createVerticalAxis()}},{key:"initTouchEvents",value:function(){var t=this.svg,e=this.width,a=this.height,r=this.baseHeight,i=f.scaleLinear().domain([0,w]).range([0,e]),n=f.line().x(function(t){return t.x}).y(function(t){return t.y}),s=this,o=2,c=function(e){var a=t.selectAll(".guide-line").data(e);a.enter().append("path").attr("class","guide-line").merge(a).attr("d",n),a.exit().remove()},u=function(a,i){var n=t.selectAll(".tip-group").data(a);n.exit().remove(),n=n.enter().append("g").attr("class","tip-group").merge(n),n.selectAll(".tip-cell").data([i]).enter().append("rect").attr("class","tip-cell"),n.selectAll(".tip-text").data([i]).enter().append("text").attr("class","tip-text"),n.each(function(t,a){var n,s=f.select(this);0===a&&(n=s.select(".tip-text").text(i.date)),1===a&&(n=s.select(".tip-text").text(i.price));var l,c,u=n.node().getBBox();0===a?(l=t.x-(u.width+2*o)/2,c=t.y+u.height,l<0&&(l=0),l>e-u.width-2*o&&(l=e-u.width-2*o)):1===a&&(l=t.x+1,c=t.y+u.height/2-o,c<0&&(c=0),c>r-u.height/2&&(c=r-u.height/2)),s.attr("transform","translate("+l+", "+c+")"),n.attr("transform","translate("+o+", 0)");s.select("rect").attr("x",u.x).attr("y",u.y).attr("width",u.width+2*o).attr("height",u.height)})},d=function(){var t=f.touches(this),n=l(t,1),o=l(n[0],1),d=o[0],p=Math.floor(i.invert(d));if(!(p<0||p>=s.data.length)){var v=s.data[p];s.showVolume&&s.volumeLeftAxisElement.select(".tick text").text("成交量:"+(0,h.default)(v.volume));var m=[{x:d,y:0},{x:d,y:a}],g=s.areaScaleY(v.price),x=[{x:0,y:g},{x:e,y:g}];c([m,x]),u([{x:d,y:r},{x:0,y:g}],v),s.emit("change",v)}};t.on("touchstart",d).on("touchmove",d).on("touchend",function(){c([]),u([]),s.updateVolumesYAxis(),s.emit("change",s.data[s.data.length-1])})}},{key:"createHorizontalAxis",value:function(){var t=this.width,e=this.baseHeight,a=this.svg,r=[0,4*t/11,6.5*t/11,9*t/11,t],i=f.scaleOrdinal().domain(A).range(r);this.staticScale=i;var n=f.axisBottom(i).tickSize(0).tickPadding(6),s=a.append("g").attr("class","chart-axis").attr("transform","translate(0, "+e+")");s.call(n),s.selectAll(".tick text").attr("text-anchor","middle").attr("transform",function(t,e){return e===A.length-1?"translate(-16, 0)":0===e?"translate(15, 0)":void 0});var l=f.axisBottom(i).tickSize(e).tickFormat("");a.append("g").attr("class","chart-axis").attr("transform","translate(0, 0)").call(l)}},{key:"createScaleForAxisY",value:function(){var t=this.settlementPrice,e=this.baseHeight,a=this.low,r=this.high,i=0,n=0,s=0;s=r>t?r-t:t-r,n=a>t?a-t:t-a,i=s>n?s:n;var l=[],o=t+i,c=t,u=t-i;l=[u,c,o].map(function(t){return Number(t).toFixed(2)}),this.realMax=o,this.realMin=u;var h=e/(l.length-1),d=l.map(function(t,e){return h*e});d=d.reverse();var p=f.scaleOrdinal().domain(l).range(d);return p}},{key:"createVerticalAxis",value:function(){var t=this.svg,e=t.append("g").attr("class","chart-axis");this.leftAxisElement=e,this.updateYAxis();var a=this.baseHeight/4,r=f.scaleOrdinal().domain([0,1,2,3,4]).range([0,1*a,2*a,3*a,this.baseHeight]),i=f.axisLeft(r).tickSize(this.width).tickFormat("").ticks(4),n=t.append("g").attr("class","chart-axis").attr("transform","translate("+(this.width-1)+", 0)").call(i);n.selectAll(".tick line").attr("stroke-dasharray",function(t,e){if(1==e||3==e)return"10, 4"})}},{key:"updateYAxis",value:function(){var t=this.createScaleForAxisY(),e=f.axisRight(t).tickSize(0);return this.leftAxisElement.call(e),this.leftAxisElement.selectAll(".tick text").attr("transform",function(t,e,a){var r=0==e?-10:10;return"translate(0, "+r+")"}).attr("fill",function(t,e,a){return 0==e?x:e==a.length-1?g:"#777"}),t}},{key:"renderArea",value:function(){this.svg.append("g").attr("class","trend-area-wrap"),this.updateArea()}},{key:"renderVolumes",value:function(){this.volumeWrapper=this.svg.append("g").attr("class","volume-wrap"),this.volumeWrapper.attr("transform","translate(0, "+(this.baseHeight+v)+")"),this.volumeLeftAxisElement=this.volumeWrapper.append("g").attr("class","chart-axis"),this.updateVolumesYAxis();var t=f.axisTop(this.staticScale).tickSize(this.volHeight-21).tickFormat(""),e=(this.volumeWrapper.append("g").attr("transform","translate(0, "+(this.volHeight-1)+")").attr("class","chart-axis").call(t),f.axisBottom(this.staticScale).tickSize(0).tickFormat(""));this.volumeWrapper.append("g").attr("class","chart-axis").call(e);this.updateVolumes();var a=(f.max(this.data,function(t){return t.volume}),f.scaleOrdinal().domain([1,2,3]).range([0,20,this.volHeight])),r=f.axisLeft(a).tickSize(this.width);this.volumeWrapper.append("g").attr("class","chart-axis").attr("transform","translate("+(this.width-1)+", 0)").call(r)}},{key:"updateVolumes",value:function(){var t=this,e=0,a=f.max(this.data,function(t){return t.volume}),r=f.scaleLinear().domain([0,w]).range([0,this.width]),i=f.scaleLinear().domain([e,a]).range([this.volHeight,20]),n=this.data.map(function(e,a){var n=e.volume,s=r(a),l=i(n);return[{x:s,y:l},{x:s,y:t.volHeight}]}),s=this.volumeWrapper.selectAll(".vol").data(n),l=this.data.map(function(t){return t.price}),o=f.line().x(function(t){return t.x}).y(function(t){return t.y});s.enter().append("path").attr("class","vol").merge(s).attr("d",o).attr("stroke",function(t,e){return 0===e?y:l[e]>l[e-1]?g:x}),s.exit().remove()}},{key:"updateVolumesYAxis",value:function(){var t=f.max(this.data,function(t){return t.volume}),e=this.data.length>0?this.data[this.data.length-1].volume:0,a=f.scaleOrdinal().domain(["成交量:"+(0,h.default)(e),(0,h.default)(t),""]).range([0,20,this.volHeight]),r=f.axisRight(a).tickSize(0);this.volumeLeftAxisElement.call(r),this.volumeLeftAxisElement.selectAll(".tick text").attr("transform","translate(0, 10)").attr("fill",k)}},{key:"updateArea",value:function(){var t=this.baseHeight,e=(this.svg,this.realMin),a=this.realMax,t=this.baseHeight,r=(this.svg,this.width),i=this.data,n=f.scaleLinear().domain([0,w]).range([0,r]),s=f.scaleLinear().domain([e,a]).range([t,0]),l=this.svg.select(".trend-area-wrap"),o=f.line().x(function(t,e){return n(e)}).y(function(t,e){return s(t.price)}),c=f.area().x(function(t,e){return n(e)}).y0(function(t,e){return s(t.price)}).y1(t),u=l.selectAll(".trend-line").data([i]);u.exit().remove(),u.enter().append("path").attr("class","trend-line").merge(u).attr("d",o).attr("fill","none").attr("stroke",m);var h=l.selectAll(".trend-area").data([i]);h.exit().remove(),h.enter().append("path").attr("class","trend-area").merge(h).attr("d",c).attr("fill",m).attr("opacity","0.3"),this.areaScaleX=n,this.areaScaleY=s,this.updateAverage()}},{key:"updateAverage",value:function(){var t=(this.svg,this.areaScaleX),e=this.areaScaleY,a=f.line().x(function(e,a){return t(a)}).y(function(t,a){return e(t.average)}),r=this.svg.select(".trend-area-wrap"),i=r.selectAll(".ma").data([this.data]);i.exit().remove(),i.enter().append("path").attr("class","ma").merge(i).attr("d",a)}},{key:"update",value:function(t){this.data=t,this.updateArea(),this.updateYAxis(),this.showVolume&&(this.updateVolumes(),this.updateVolumesYAxis())}}]),e}(d);t.exports=b},1:function(t,e,a){var r=a(2);"string"==typeof r&&(r=[[t.id,r,""]]);a(4)(r,{});r.locals&&(t.exports=r.locals)},2:function(t,e,a){e=t.exports=a(3)(),e.push([t.id,".chart-axis line,.chart-axis path{stroke:#d4d4d4}.guide-line{stroke:#555;shape-rendering:crispEdges}.tip-cell{stroke:#555;fill:#fff;shape-rendering:crispEdges}.tip-text{fill:#555;font-size:10px}.ma{stroke:#ec9917}.ma,.ma5{fill:none}.ma5{stroke:#508ce7}.ma10{fill:none;stroke:#ec9917}.ma20{fill:none;stroke:#f94636}.ma60{fill:none;stroke:#2baf2b}",""])},5:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(6),i=function(t,e,a){for(var i=r.interpolateNumber(t,e),n=[],s=0;s<=a;s++)n.push(i(s/a));return n};e.default=i},7:function(t,e){"use strict";var a=function(){function t(t,e){var a=[],r=!0,i=!1,n=void 0;try{for(var s,l=t[Symbol.iterator]();!(r=(s=l.next()).done)&&(a.push(s.value),!e||a.length!==e);r=!0);}catch(t){i=!0,n=t}finally{try{!r&&l.return&&l.return()}finally{if(i)throw n}}return a}return function(e,a){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.exports=function(t){for(var e=[[1e4,"万"],[1e8,"亿"]],r=e.length-1;r>=0;r--){var i=a(e[r],2),n=i[0],s=i[1];if(t>n){var l=(t/n).toFixed(2);return l+s}}return t}},137:function(t,e,a){var r=a(138);t.exports=function(t,e,a){function i(){var u=r()-o;u<e&&u>0?n=setTimeout(i,e-u):(n=null,a||(c=t.apply(l,s),n||(l=s=null)))}var n,s,l,o,c;return null==e&&(e=100),function(){l=this,s=arguments,o=r();var u=a&&!n;return n||(n=setTimeout(i,e)),u&&(c=t.apply(l,s),l=s=null),c}}},138:function(t,e){function a(){return(new Date).getTime()}t.exports=Date.now||a}});