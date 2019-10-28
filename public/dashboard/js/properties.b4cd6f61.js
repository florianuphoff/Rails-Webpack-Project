(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["properties"],{"0b62":function(t,e,i){"use strict";var s=i("9430"),a=i.n(s);a.a},"2f21":function(t,e,i){"use strict";var s=i("79e5");t.exports=function(t,e){return!!t&&s((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"2fdb":function(t,e,i){"use strict";var s=i("5ca1"),a=i("d2c8"),o="includes";s(s.P+s.F*i("5147")(o),"String",{includes:function(t){return!!~a(this,t,o).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,e,i){var s=i("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[s]=!1,!"/./"[t](e)}catch(a){}}return!0}},5393:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"properties"},[i("div",{staticClass:"container"},[i("SpecificityChart",{attrs:{dataseries:t.dataseries,yAxis:t.yAxis,specificityValues:t.specificityValues,selectorList:t.selectorList}}),i("Heatmap",{attrs:{heatMapData:t.heatMapData}})],1)])},a=[],o=(i("55dd"),i("5df3"),i("4f7f"),i("75fc")),n=(i("a481"),i("28a5"),i("6762"),i("2fdb"),i("ac6a"),i("96cf"),i("3b8d")),r=i("2b0e"),l=i("9ceb"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-box w-2-3 specificity"},[i("div",{staticClass:"v-box__header"},[t._v("CSS Spezifizitätsgraph\n    "),i("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:t.help,placement:"right",targetClasses:["cq-tooltip"]},expression:'{content: help, placement: "right", targetClasses: ["cq-tooltip"],}'}],staticClass:"tooltip-icon"},[i("font-awesome-icon",{attrs:{icon:"question-circle"}})],1)]),i("div",{staticClass:"v-box__chart  v-box__content spChart"},[i("highcharts",{attrs:{options:t.chartOptions,updateArgs:t.updateArgs}})],1)])},h=[],p=(i("7514"),i("4452")),d=i("ea7f"),u=i.n(d),f=i("e37d"),g=i("ecee"),m=i("c074"),x=i("ad3d");r["a"].use(f["a"]),g["c"].add(m["l"]);var y=r["a"].extend({name:"SpecificityChart",components:{highcharts:p["Chart"],FontAwesomeIcon:x["a"]},props:{dataseries:{type:Array,required:!0},specificityValues:{type:Array,required:!0},yAxis:{type:Array,required:!0},selectorList:{type:Array,required:!0}},watch:{dataseries:function(t){this.dataseries=t,this.chartOptions.series[0].data=this.dataseries},specificityValues:function(t){this.specificityValues=t,this.tooltipCallback(this.specificityValues,this.yAxis)},yAxis:function(t){this.yAxis=t,this.chartOptions.yAxis.categories=this.yAxis},selectorList:function(t){this.selectorList=t}},computed:{clientWidth:function(){return document.querySelector(".specificity").clientWidth}},data:function(){return{help:"\n      Der Spezifizitätsgraph nach Harry Roberts zeigt den Verlauf der Spezifizität zur Zeile im Quellcode. \n      <br/><br/>\n      Leichte Auf- und Abstiege sind üblich. \n      Dennoch sollte der Graph einen klaren Aufwärtstrend haben. Je weiter am Ende Selektoren mit hoher Spezifizität stehen, desto geringer können Seiteneffekte ausfallen.\n      <br/>\n      Frühe Spitzen im Graph können auf eine Fehlkonzeption im CSS Code deuten und Seiteneffekte wie Überschattungen von Selektoren durch eine sehr hohe Spezifizität verursachen.\n      <br/><br/>\n      Selektoren sind zu spezifisch, wenn die Spezifizität zwischen 2 und 10, 11 und 20, 31 und 100 oder über 101 liegt.\n      ",updateArgs:[!0,!0,{duration:500}],chartOptions:{series:[{name:"Selektoren",color:"#da1b60",data:this.dataseries,lineWidth:1,animation:!1}],chart:{type:"scatter",zoomType:"x",spacingBottom:15,spacingTop:10,spacingLeft:10,spacingRight:10,height:500},title:{text:""},xAxis:{title:{text:"Zeile im Quellcode"},min:0},tooltip:{},yAxis:{title:{text:"Spezifizität"},categories:[1,2,10,11,20,21,40,41,200],labels:{align:"right"},tickmarkPlacement:"on",endOnTick:!1,maxPadding:0},plotOptions:{scatter:{marker:{radius:2,states:{hover:{enabled:!0,lineColor:"rgb(100,100,100)"}}},states:{hover:{lineWidthPlus:0}}},series:{point:{events:{mouseOut:function(t){var e=u.a.charts.find((function(t){if(t&&t.renderTo.parentNode.classList.contains("heatmap-node"))return t})),i=e.container.querySelectorAll(".point-hover");i.forEach((function(t){t.classList.remove("point-hover")}))}}},pointStart:0}}}}},methods:{tooltipCallback:function(t,e){this.chartOptions.tooltip.formatter=function(){var i=this,s=t.flatMap((function(t,e){return t.startsAt===i.x?t:[]})),a=u.a.charts.find((function(t){if(t&&t.renderTo.parentNode.classList.contains("heatmap-node"))return t})),o=[1,2,3,10,11,20,21,30,31,100,101,"zu spezifisch"],n=e[this.y],r=s[0].depth;(n>2&&n<10||n>11&&n<20||n>21&&n<30||n>31&&n<100||n>=102)&&(n="zu spezifisch");var l=o.indexOf(n),c=a.series[0].points.find((function(t){return t.x===l&&t.y===r}));if(c&&c.graphic.element.classList.add("point-hover"),s.length>1){var h="<b>Mehrzeilige Selektoren: </b>";return s.forEach((function(t){h+="".concat(t.selector,", ")})),"".concat(h,"<br>\n                  <b>Datei: </b>").concat(s[0].origin.replace("webpack:///",""),"<br>\n                  <b>Zeile: </b>").concat(s[0].startsAt,"<br>\n                  <b>Spezifizität: </b>").concat(e[this.y],"<br>\n                  <b>Verschachtelung: </b>").concat(s[0].depth)}return"<b>Selektor: </b>".concat(s[0].selector,"<br>\n                <b>Datei: </b>").concat(s[0].origin.replace("webpack:///",""),"<br>\n                <b>Zeile: </b>").concat(s[0].startsAt,"<br>\n                <b>Spezifizität: </b>").concat(e[this.y],"<br>\n                <b>Verschachtelung: </b>").concat(s[0].depth)}}},mounted:function(){this.chartOptions.chart.width=this.clientWidth}}),v=y,b=(i("0b62"),i("2877")),A=Object(b["a"])(v,c,h,!1,null,"b4bd60f2",null),C=A.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-box w-2-3 heatmap"},[i("div",{staticClass:"v-box__header"},[t._v("SCSS Selektorenverteilung\n    "),i("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:t.help,placement:"right",targetClasses:["cq-tooltip"]},expression:'{content: help, placement: "right", targetClasses: ["cq-tooltip"],}'}],staticClass:"tooltip-icon"},[i("font-awesome-icon",{attrs:{icon:"question-circle"}})],1)]),i("div",{staticClass:"v-box__chart  v-box__content heatmap-node"},[i("highcharts",{attrs:{options:t.chartOptions,updateArgs:t.updateArgs}})],1)])},M=[],z=i("fddd"),w=i.n(z);w()(u.a),r["a"].use(f["a"]),g["c"].add(m["l"]);var O=r["a"].extend({name:"Heatmap",components:{highcharts:p["Chart"],FontAwesomeIcon:x["a"]},props:{heatMapData:{type:Object,required:!0}},watch:{heatMapData:{handler:function(t){this.heatMapData=t,this.chartOptions.xAxis.categories=this.heatMapData.xAxis,this.chartOptions.yAxis.max=this.heatMapData.yAxis,this.chartOptions.series[0].data=this.heatMapData.dataseries,this.tooltipCallback(this.heatMapData.xAxis)},deep:!0}},computed:{clientWidth:function(){return document.querySelector(".specificity").clientWidth}},data:function(){return{help:'\n      Alle SCSS Selektoren werden in der Heatmap gruppiert dargestellt. Die Kategorie "zu spezifisch" ergibt sich aus den übrigen möglichen Werten der Spezifizität. \n      <br/>\n      Selektoren aus dem Spezifizitätsgraphen werden hier hervorgehoben. Häufig entsteht eine hohe Spezifizität durch den intensiven Gebrauch der Verschachtelung in SCSS.\n      ',updateArgs:[!0,!0,{duration:500}],chartOptions:{series:[{name:"Selektoren",data:this.heatMapData.dataseries,borderWidth:1,borderColor:"#aaa",states:{hover:{color:"rgba(43, 145, 43, 0.5)"}}}],chart:{type:"heatmap",marginTop:40,marginBottom:80,plotBorderWidth:1},title:{text:""},xAxis:{title:{text:"Spezifizität"},categories:this.heatMapData.xAxis},tooltip:{},legend:{align:"right",layout:"vertical",margin:0,verticalAlign:"top",y:25,symbolHeight:280},yAxis:{title:{text:"Verschachtelungstiefe"},labels:{align:"right"},max:this.heatMapData.yAxis},colorAxis:{stops:[[0,"#ffffff"],[.15,"#3060cf"],[.3,"#fffbbc"],[.9,"#c4463a"]],min:0}}}},methods:{tooltipCallback:function(t){this.chartOptions.tooltip.formatter=function(){return"<b>Selektoren: </b>".concat(this.point.value,"<br>\n                <b>Spezifizität: </b>").concat(t[this.point.x],"<br>\n                <b>Verschachtelungstiefe: </b>").concat(this.y)}}},mounted:function(){this.chartOptions.chart.width=this.clientWidth}}),L=O,k=(i("e50c"),Object(b["a"])(L,S,M,!1,null,"ee4915e6",null)),D=k.exports,E=r["a"].extend({name:"specificity",components:{SpecificityChart:C,Heatmap:D},data:function(){return{specificityValues:[],yAxis:[],xAxis:0,dataseries:[],selectorList:[],heatMapData:{yAxis:[],xAxis:[],dataseries:[]}}},methods:{fetchHierarchyChartData:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:fetch("/dashboard/results/data.json").then((function(t){return t.json()})).then((function(t){e.results=t,e.specificityChartData(),e.heatmapData()}));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),heatmapData:function(){var t=[1,2,3,10,11,20,21,30,31,100,101,"zu spezifisch"],e=[],i=[];this.results.nesting.forEach((function(t){if(t.selector.includes(",")){var s=t.selector.split(",");s.forEach((function(e){var s=Object(l["a"])(e)[0].specificity;s=parseInt(s.replace(/,/g,""),10),i.push({selector:e,depth:t.depth,specificity:s})}))}else{var a=Object(l["a"])(t.selector)[0].specificity;a=parseInt(a.replace(/,/g,""),10),i.push({selector:t.selector,depth:t.depth,specificity:a})}e.push(t.depth)})),e=Object(o["a"])(new Set(e)),this.heatMapData.yAxis=e.length-1;e.length,t.length;for(var s=[],a=function(t){s.push(new Array(e.length)),e.forEach((function(e,i){s[t][i]=[t,e,0]}))},n=0;n<t.length;n++)a(n);this.results.nesting.forEach((function(i){if(i.selector.includes(",")){var a=i.selector.split(",");a.forEach((function(a){var o=Object(l["a"])(a)[0].specificity;o=parseInt(o.replace(/,/g,""),10);i.depth;var n=-1;n=o>2&&o<10||o>11&&o<20||o>21&&o<30||o>31&&o<100||o>=102?t.indexOf("zu spezifisch"):t.indexOf(o);var r=e.indexOf(i.depth);s[n][r][2]+=1}))}else{var o=Object(l["a"])(i.selector)[0].specificity;o=parseInt(o.replace(/,/g,""),10);var n=-1;n=o>2&&o<10||o>11&&o<20||o>21&&o<30||o>31&&o<100||o>=102?t.indexOf("zu spezifisch"):t.indexOf(o);var r=e.indexOf(i.depth);s[n][r][2]+=1}})),s=s.flat(),this.heatMapData.dataseries=s,this.heatMapData.xAxis=t},specificityChartData:function(){var t=this;this.yAxis=Object(o["a"])(new Set(this.results.stats[0].selectors.getSpecificityGraph)).sort((function(t,e){return t-e}));var e=[];this.results.nesting.forEach((function(t){if(t.selector.includes(",")){var i=t.selector.split(",");i.forEach((function(i){var s=Object(l["a"])(i)[0].specificity;s=parseInt(s.replace(/,/g,""),10),e.push({selector:i,depth:t.depth,specificity:s})}))}else{var s=Object(l["a"])(t.selector)[0].specificity;s=parseInt(s.replace(/,/g,""),10),e.push({selector:t.selector,depth:t.depth,specificity:s})}}));var i=[];this.results.stats[0].selectors.getSpecificityGraph.forEach((function(e,s){var a=t.results.stats[1].selectors[s].startsAt;i.push([a,t.yAxis.indexOf(e)])}));var s=[];this.results.stats[1].selectors.forEach((function(t){e.flatMap((function(e,i){e.selector===t.selector&&(t.depth=e.depth)})),s.push(t)})),this.specificityValues=s,this.xAxis=this.results.stats[1].lines,this.selectorList=e,this.dataseries=i}},mounted:function(){this.fetchHierarchyChartData()}}),P=E,I=Object(b["a"])(P,s,a,!1,null,null,null);e["default"]=I.exports},"55dd":function(t,e,i){"use strict";var s=i("5ca1"),a=i("d8e8"),o=i("4bf8"),n=i("79e5"),r=[].sort,l=[1,2,3];s(s.P+s.F*(n((function(){l.sort(void 0)}))||!n((function(){l.sort(null)}))||!i("2f21")(r)),"Array",{sort:function(t){return void 0===t?r.call(o(this)):r.call(o(this),a(t))}})},6762:function(t,e,i){"use strict";var s=i("5ca1"),a=i("c366")(!0);s(s.P,"Array",{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")("includes")},"835e":function(t,e,i){},9430:function(t,e,i){},"9ceb":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var s=function(t){var e,i,s,o,n=[];for(e=t.split(","),s=0,o=e.length;s<o;s+=1)i=e[s],i.length>0&&n.push(a(i));return n},a=function(t){var e,i=t,s={a:0,b:0,c:0},a=[],o=/(\[[^\]]+\])/g,n=/(#[^\#\s\+>~\.\[:\)]+)/g,r=/(\.[^\s\+>~\.\[:\)]+)/g,l=/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,c=/(:(?!not|global|local)[\w-]+\([^\)]*\))/gi,h=/(:(?!not|global|local)[^\s\+>~\.\[:]+)/g,p=/([^\s\+>~\.\[:]+)/g;return e=function(e,o){var n,r,l,c,h,p;if(e.test(i))for(n=i.match(e),r=0,l=n.length;r<l;r+=1)s[o]+=1,c=n[r],h=i.indexOf(c),p=c.length,a.push({selector:t.substr(h,p),type:o,index:h,length:p}),i=i.replace(c,Array(p+1).join(" "))},function(){var t=function(t){var e,s,a,o;if(t.test(i))for(e=i.match(t),s=0,a=e.length;s<a;s+=1)o=e[s],i=i.replace(o,Array(o.length+1).join("A"))},e=/\\[0-9A-Fa-f]{6}\s?/g,s=/\\[0-9A-Fa-f]{1,5}\s/g,a=/\\./g;t(e),t(s),t(a)}(),function(){var t,e,s,a,o=/{[^]*/gm;if(o.test(i))for(t=i.match(o),e=0,s=t.length;e<s;e+=1)a=t[e],i=i.replace(a,Array(a.length+1).join(" "))}(),e(o,"b"),e(n,"a"),e(r,"b"),e(l,"c"),e(c,"b"),e(h,"b"),i=i.replace(/[\*\s\+>~]/g," "),i=i.replace(/[#\.]/g," "),i=i.replace(/:not/g,"    "),i=i.replace(/:local/g,"      "),i=i.replace(/:global/g,"       "),i=i.replace(/[\(\)]/g," "),e(p,"c"),a.sort((function(t,e){return t.index-e.index})),{selector:t,specificity:"0,"+s.a.toString()+","+s.b.toString()+","+s.c.toString(),specificityArray:[0,s.a,s.b,s.c],parts:a}}},d2c8:function(t,e,i){var s=i("aae3"),a=i("be13");t.exports=function(t,e,i){if(s(e))throw TypeError("String#"+i+" doesn't accept regex!");return String(a(t))}},e50c:function(t,e,i){"use strict";var s=i("835e"),a=i.n(s);a.a},fddd:function(t,e,i){var s,a;(function(o){t.exports?(o["default"]=o,t.exports=o):(s=[i("ea7f")],a=function(t){return o(t),o.Highcharts=t,o}.apply(e,s),void 0===a||(t.exports=a))})((function(t){function e(t,e,i,s){t.hasOwnProperty(e)||(t[e]=s.apply(null,i))}var i=t?t._modules:{};e(i,"parts-map/ColorSeriesMixin.js",[i["parts/Globals.js"]],(function(t){t.colorPointMixin={setVisible:function(t){var e=this,i=t?"show":"hide";e.visible=!!t,["graphic","dataLabel"].forEach((function(t){e[t]&&e[t][i]()}))}},t.colorSeriesMixin={optionalAxis:"colorAxis",colorAxis:0,translateColors:function(){var t=this,e=this.options.nullColor,i=this.colorAxis,s=this.colorKey;(this.data.length?this.data:this.points).forEach((function(a){var o=a[s];(o=a.options.color||(a.isNull?e:i&&void 0!==o?i.toColor(o,a):a.color||t.color))&&(a.color=o)}))}}})),e(i,"parts-map/ColorAxis.js",[i["parts/Globals.js"],i["parts/Utilities.js"]],(function(e,i){var s=i.erase,a=i.isNumber,o=i.splat;i=e.addEvent;var n=e.Axis,r=e.Chart,l=e.Series,c=e.Point,h=e.color,p=e.extend,d=e.Legend,u=e.LegendSymbolMixin,f=e.colorPointMixin,g=e.noop,m=e.merge,x=e.pick;p(l.prototype,e.colorSeriesMixin),p(c.prototype,f);var y=e.ColorAxis=function(){this.init.apply(this,arguments)};p(y.prototype,n.prototype),p(y.prototype,{defaultColorAxisOptions:{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0},keepProps:["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"].concat(n.prototype.keepProps),init:function(t,e){this.coll="colorAxis";var i=this.buildOptions.call(t,this.defaultColorAxisOptions,e);n.prototype.init.call(this,t,i),e.dataClasses&&this.initDataClasses(e),this.initStops(),this.horiz=!i.opposite,this.zoomEnabled=!1,this.defaultLegendLength=200},initDataClasses:function(t){var e,i=this.chart,s=0,a=i.options.chart.colorCount,o=this.options,n=t.dataClasses.length;this.dataClasses=e=[],this.legendItems=[],t.dataClasses.forEach((function(t,r){t=m(t),e.push(t),!i.styledMode&&t.color||("category"===o.dataClassColor?(i.styledMode||(r=i.options.colors,a=r.length,t.color=r[s]),t.colorIndex=s,s++,s===a&&(s=0)):t.color=h(o.minColor).tweenTo(h(o.maxColor),2>n?.5:r/(n-1)))}))},hasData:function(){return!(!this.tickPositions||!this.tickPositions.length)},setTickPositions:function(){if(!this.dataClasses)return n.prototype.setTickPositions.call(this)},initStops:function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]],this.stops.forEach((function(t){t.color=h(t[1])}))},buildOptions:function(t,e){var i=this.options.legend,s=e.layout?"vertical"!==e.layout:"vertical"!==i.layout;return m(t,{side:s?2:1,reversed:!s},e,{opposite:!s,showEmpty:!1,title:null,visible:i.enabled&&(!e||!1!==e.visible)})},setOptions:function(t){n.prototype.setOptions.call(this,t),this.options.crosshair=this.options.marker},setAxisSize:function(){var t,e,i=this.legendSymbol,s=this.chart,a=s.options.legend||{};i?(this.left=a=i.attr("x"),this.top=t=i.attr("y"),this.width=e=i.attr("width"),this.height=i=i.attr("height"),this.right=s.chartWidth-a-e,this.bottom=s.chartHeight-t-i,this.len=this.horiz?e:i,this.pos=this.horiz?a:t):this.len=(this.horiz?a.symbolWidth:a.symbolHeight)||this.defaultLegendLength},normalizedValue:function(t){return this.isLog&&(t=this.val2lin(t)),1-(this.max-t)/(this.max-this.min||1)},toColor:function(t,e){var i,s=this.stops,a=this.dataClasses;if(a)for(i=a.length;i--;){var o=a[i],n=o.from;if(s=o.to,(void 0===n||t>=n)&&(void 0===s||t<=s)){var r=o.color;e&&(e.dataClass=i,e.colorIndex=o.colorIndex);break}}else{for(t=this.normalizedValue(t),i=s.length;i--&&!(t>s[i][0]););n=s[i]||s[i+1],s=s[i+1]||n,t=1-(s[0]-t)/(s[0]-n[0]||1),r=n.color.tweenTo(s.color,t)}return r},getOffset:function(){var t=this.legendGroup,e=this.chart.axisOffset[this.side];t&&(this.axisParent=t,n.prototype.getOffset.call(this),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=e)},setLegendColor:function(){var t=this.reversed,e=t?1:0;t=t?0:1,e=this.horiz?[e,0,t,0]:[0,t,0,e],this.legendColor={linearGradient:{x1:e[0],y1:e[1],x2:e[2],y2:e[3]},stops:this.stops}},drawLegendSymbol:function(t,e){var i=t.padding,s=t.options,a=this.horiz,o=x(s.symbolWidth,a?this.defaultLegendLength:12),n=x(s.symbolHeight,a?12:this.defaultLegendLength),r=x(s.labelPadding,a?16:30);s=x(s.itemDistance,10),this.setLegendColor(),e.legendSymbol=this.chart.renderer.rect(0,t.baseline-11,o,n).attr({zIndex:1}).add(e.legendGroup),this.legendItemWidth=o+i+(a?s:r),this.legendItemHeight=n+i+(a?r:0)},setState:function(t){this.series.forEach((function(e){e.setState(t)}))},visible:!0,setVisible:g,getSeriesExtremes:function(){var e,i=this.series,s=i.length;for(this.dataMin=1/0,this.dataMax=-1/0;s--;){var a=i[s],o=a.colorKey=x(a.options.colorKey,a.colorKey,a.pointValKey,a.zoneAxis,"y"),n=a.pointArrayMap,r=a[o+"Min"]&&a[o+"Max"];if(a[o+"Data"])var c=a[o+"Data"];else if(n){c=[],n=n.indexOf(o);var h=a.yData;if(0<=n&&h)for(e=0;e<h.length;e++)c.push(x(h[e][n],h[e]))}else c=a.yData;r?(a.minColorValue=a[o+"Min"],a.maxColorValue=a[o+"Max"]):(l.prototype.getExtremes.call(a,c),a.minColorValue=a.dataMin,a.maxColorValue=a.dataMax),void 0!==a.minColorValue&&(this.dataMin=Math.min(this.dataMin,a.minColorValue),this.dataMax=Math.max(this.dataMax,a.maxColorValue)),r||t.Series.prototype.getExtremes.call(a)}},drawCrosshair:function(t,e){var i=e&&e.plotX,s=e&&e.plotY,a=this.pos,o=this.len;if(e){var r=this.toPixels(e[e.series.colorKey]);r<a?r=a-2:r>a+o&&(r=a+o+2),e.plotX=r,e.plotY=this.len-r,n.prototype.drawCrosshair.call(this,t,e),e.plotX=i,e.plotY=s,this.cross&&!this.cross.addedToColorAxis&&this.legendGroup&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.addedToColorAxis=!0,this.chart.styledMode||this.cross.attr({fill:this.crosshair.color}))}},getPlotLinePath:function(t){var e=t.translatedValue;return a(e)?this.horiz?["M",e-4,this.top-6,"L",e+4,this.top-6,e,this.top,"Z"]:["M",this.left,e,"L",this.left-6,e+6,this.left-6,e-6,"Z"]:n.prototype.getPlotLinePath.apply(this,arguments)},update:function(t,e){var i=this.chart,s=i.legend,a=this.buildOptions.call(i,{},t);this.series.forEach((function(t){t.isDirtyData=!0})),(t.dataClasses&&s.allItems||this.dataClasses)&&this.destroyItems(),i.options[this.coll]=m(this.userOptions,a),n.prototype.update.call(this,a,e),this.legendItem&&(this.setLegendColor(),s.colorizeItem(this,!0))},destroyItems:function(){var t=this.chart;this.legendItem?t.legend.destroyItem(this):this.legendItems&&this.legendItems.forEach((function(e){t.legend.destroyItem(e)})),t.isDirtyLegend=!0},remove:function(t){this.destroyItems(),n.prototype.remove.call(this,t)},getDataClassLegendSymbols:function(){var t,i=this,s=this.chart,a=this.legendItems,o=s.options.legend,n=o.valueDecimals,r=o.valueSuffix||"";return a.length||this.dataClasses.forEach((function(o,l){var c=!0,h=o.from,d=o.to;t="",void 0===h?t="< ":void 0===d&&(t="> "),void 0!==h&&(t+=e.numberFormat(h,n)+r),void 0!==h&&void 0!==d&&(t+=" - "),void 0!==d&&(t+=e.numberFormat(d,n)+r),a.push(p({chart:s,name:t,options:{},drawLegendSymbol:u.drawRectangle,visible:!0,setState:g,isDataClass:!0,setVisible:function(){c=this.visible=!c,i.series.forEach((function(t){t.points.forEach((function(t){t.dataClass===l&&t.setVisible(c)}))})),s.legend.colorizeItem(this,c)}},o))})),a},beforePadding:!1,name:""}),["fill","stroke"].forEach((function(t){e.Fx.prototype[t+"Setter"]=function(){this.elem.attr(t,h(this.start).tweenTo(h(this.end),this.pos),null,!0)}})),i(r,"afterGetAxes",(function(){var t=this,e=t.options;this.colorAxis=[],e.colorAxis&&(e.colorAxis=o(e.colorAxis),e.colorAxis.forEach((function(e,i){e.index=i,new y(t,e)})))})),i(l,"bindAxes",(function(){var t=this.axisTypes;t?-1===t.indexOf("colorAxis")&&t.push("colorAxis"):this.axisTypes=["colorAxis"]})),i(d,"afterGetAllItems",(function(t){var e,i,a=[];for((this.chart.colorAxis||[]).forEach((function(i){(e=i.options)&&e.showInLegend&&(e.dataClasses&&e.visible?a=a.concat(i.getDataClassLegendSymbols()):e.visible&&a.push(i),i.series.forEach((function(i){i.options.showInLegend&&!e.dataClasses||("point"===i.options.legendType?i.points.forEach((function(e){s(t.allItems,e)})):s(t.allItems,i))})))})),i=a.length;i--;)t.allItems.unshift(a[i])})),i(d,"afterColorizeItem",(function(t){t.visible&&t.item.legendColor&&t.item.legendSymbol.attr({fill:t.item.legendColor})})),i(d,"afterUpdate",(function(){var t=this.chart.colorAxis;t&&t.forEach((function(t,e,i){t.update({},i)}))})),i(l,"afterTranslate",(function(){(this.chart.colorAxis&&this.chart.colorAxis.length||this.colorAttribs)&&this.translateColors()}))})),e(i,"parts-map/ColorMapSeriesMixin.js",[i["parts/Globals.js"],i["parts/Utilities.js"]],(function(t,e){var i=e.defined;e=t.noop;var s=t.seriesTypes;t.colorMapPointMixin={dataLabelOnNull:!0,isValid:function(){return null!==this.value&&1/0!==this.value&&-1/0!==this.value},setState:function(e){t.Point.prototype.setState.call(this,e),this.graphic&&this.graphic.attr({zIndex:"hover"===e?1:0})}},t.colorMapSeriesMixin={pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:e,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:s.column.prototype.pointAttribs,colorAttribs:function(t){var e={};return i(t.color)&&(e[this.colorProp||"fill"]=t.color),e}}})),e(i,"parts-map/HeatmapSeries.js",[i["parts/Globals.js"]],(function(t){var e=t.colorMapPointMixin,i=t.merge,s=t.noop,a=t.pick,o=t.fireEvent,n=t.Series,r=t.seriesType,l=t.seriesTypes;r("heatmap","scatter",{animation:!1,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:null,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}<br/>"},states:{hover:{halo:!1,brightness:.2}}},i(t.colorMapSeriesMixin,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,getExtremesFromAll:!0,directTouch:!0,init:function(){l.scatter.prototype.init.apply(this,arguments);var t=this.options;t.pointRange=a(t.pointRange,t.colsize||1),this.yAxis.axisPointRange=t.rowsize||1},translate:function(){var t=this.options,e=this.xAxis,i=this.yAxis,s=t.pointPadding||0,n=function(t,e,i){return Math.min(Math.max(e,t),i)},r=this.pointPlacementToXValue();this.generatePoints(),this.points.forEach((function(o){var l=(t.colsize||1)/2,c=(t.rowsize||1)/2,h=n(Math.round(e.len-e.translate(o.x-l,0,1,0,1,-r)),-e.len,2*e.len);l=n(Math.round(e.len-e.translate(o.x+l,0,1,0,1,-r)),-e.len,2*e.len);var p=n(Math.round(i.translate(o.y-c,0,1,0,1)),-i.len,2*i.len);c=n(Math.round(i.translate(o.y+c,0,1,0,1)),-i.len,2*i.len);var d=a(o.pointPadding,s);o.plotX=o.clientX=(h+l)/2,o.plotY=(p+c)/2,o.shapeType="rect",o.shapeArgs={x:Math.min(h,l)+d,y:Math.min(p,c)+d,width:Math.max(Math.abs(l-h)-2*d,0),height:Math.max(Math.abs(c-p)-2*d,0)}})),o(this,"afterTranslate")},drawPoints:function(){var t=this.chart.styledMode?"css":"animate";l.column.prototype.drawPoints.call(this),this.points.forEach((function(e){e.graphic[t](this.colorAttribs(e))}),this)},hasData:function(){return!!this.processedXData.length},getValidPoints:function(t,e){return n.prototype.getValidPoints.call(this,t,e,!0)},animate:s,getBox:s,drawLegendSymbol:t.LegendSymbolMixin.drawRectangle,alignDataLabel:l.column.prototype.alignDataLabel,getExtremes:function(){n.prototype.getExtremes.call(this,this.valueData),this.valueMin=this.dataMin,this.valueMax=this.dataMax,n.prototype.getExtremes.call(this)}}),t.extend({haloPath:function(t){if(!t)return[];var e=this.shapeArgs;return["M",e.x-t,e.y-t,"L",e.x-t,e.y+e.height+t,e.x+e.width+t,e.y+e.height+t,e.x+e.width+t,e.y-t,"Z"]}},e))})),e(i,"masters/modules/heatmap.src.js",[],(function(){}))}))}}]);
//# sourceMappingURL=properties.b4cd6f61.js.map