(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["selectors"],{"2fdb":function(t,e,r){"use strict";var n=r("5ca1"),a=r("d2c8"),i="includes";n(n.P+n.F*r("5147")(i),"String",{includes:function(t){return!!~a(this,t,i).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,e,r){var n=r("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,!"/./"[t](e)}catch(a){}}return!0}},"66b7":function(t,e,r){"use strict";var n=r("ee28"),a=r.n(n);a.a},6762:function(t,e,r){"use strict";var n=r("5ca1"),a=r("c366")(!0);n(n.P,"Array",{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")("includes")},"7f7f":function(t,e,r){var n=r("86cc").f,a=Function.prototype,i=/^\s*function ([^ (]*)/,c="name";c in a||r("9e1e")&&n(a,c,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},"9ceb":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t){var e,r,n,i,c=[];for(e=t.split(","),n=0,i=e.length;n<i;n+=1)r=e[n],r.length>0&&c.push(a(r));return c},a=function(t){var e,r=t,n={a:0,b:0,c:0},a=[],i=/(\[[^\]]+\])/g,c=/(#[^\#\s\+>~\.\[:\)]+)/g,s=/(\.[^\s\+>~\.\[:\)]+)/g,l=/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,h=/(:(?!not|global|local)[\w-]+\([^\)]*\))/gi,o=/(:(?!not|global|local)[^\s\+>~\.\[:]+)/g,u=/([^\s\+>~\.\[:]+)/g;return e=function(e,i){var c,s,l,h,o,u;if(e.test(r))for(c=r.match(e),s=0,l=c.length;s<l;s+=1)n[i]+=1,h=c[s],o=r.indexOf(h),u=h.length,a.push({selector:t.substr(o,u),type:i,index:o,length:u}),r=r.replace(h,Array(u+1).join(" "))},function(){var t=function(t){var e,n,a,i;if(t.test(r))for(e=r.match(t),n=0,a=e.length;n<a;n+=1)i=e[n],r=r.replace(i,Array(i.length+1).join("A"))},e=/\\[0-9A-Fa-f]{6}\s?/g,n=/\\[0-9A-Fa-f]{1,5}\s/g,a=/\\./g;t(e),t(n),t(a)}(),function(){var t,e,n,a,i=/{[^]*/gm;if(i.test(r))for(t=r.match(i),e=0,n=t.length;e<n;e+=1)a=t[e],r=r.replace(a,Array(a.length+1).join(" "))}(),e(i,"b"),e(c,"a"),e(s,"b"),e(l,"c"),e(h,"b"),e(o,"b"),r=r.replace(/[\*\s\+>~]/g," "),r=r.replace(/[#\.]/g," "),r=r.replace(/:not/g,"    "),r=r.replace(/:local/g,"      "),r=r.replace(/:global/g,"       "),r=r.replace(/[\(\)]/g," "),e(u,"c"),a.sort((function(t,e){return t.index-e.index})),{selector:t,specificity:"0,"+n.a.toString()+","+n.b.toString()+","+n.c.toString(),specificityArray:[0,n.a,n.b,n.c],parts:a}}},c200:function(t,e,r){},cc55:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"selectors"},[r("div",{staticClass:"container"},[r("SelectorHierarchy",{attrs:{chartData:t.chartData}}),r("SelectorHierarchy",{attrs:{chartData:t.chartData}})],1)])},a=[],i=(r("6762"),r("2fdb"),r("7f7f"),r("28a5"),r("96cf"),r("3b8d")),c=(r("ac6a"),r("2b0e")),s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-box hierarchy relative"},[r("div",{staticClass:"v-box__header"},[t._v("Fehlerbehaftete Selektoren")]),r("div",{staticClass:"v-box__chart selector-chart v-box__content",attrs:{id:"selectorChart"}})])}],h=r("5698");const o={$onInit(t){const e=h["h"],r=h["d"],n=h["g"];this.margin={top:20,right:10,bottom:20,left:10},this.width=1e3-this.margin.right-this.margin.left,this.height=800-this.margin.top-this.margin.bottom,this.barHeight=20,this.barWidth=.8*this.width,this.i=0,this.duration=500,this.tree=e().size([this.width,this.height]),this.tree=e().nodeSize([0,30]),this.root=this.tree(r(t)),this.root.each(t=>{t.name=t.id,t.id=this.i,this.i++}),this.root.x0=this.root.x,this.root.y0=this.root.y,this.svg=n("#selectorChart").append("svg").attr("width",this.width+this.margin.right+this.margin.left).attr("height",this.height+this.margin.top+this.margin.bottom).append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")"),this.update(this.root)}};var u=o,d=c["a"].extend({name:"SelectorHierarchy",props:{chartData:{type:Object,required:!0}},data:function(){return{dSet:"g"}},watch:{chartData:{handler:function(t){this.chartData=t,this.drawChart("general")},deep:!0}},methods:{drawChart:function(t){var e=document.querySelector("#selectorChart");e.childNodes.length&&e.removeChild(e.childNodes[0]);var r={};switch(t){case"general":r=this.chartData.general;break;case"duplications":r=this.chartData.duplications;break;case"smelly":r=this.chartData.smelly;break;default:r=this.chartData.general}var n=new u;n.$onInit(r)}}}),f=d,g=(r("ce1b"),r("2877")),p=Object(g["a"])(f,s,l,!1,null,null,null),v=p.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-box w-2-3"},[r("div",{staticClass:"v-box__header"},[t._v("Mixin-Extend-Benutzung")]),r("div",{staticClass:"v-box__chart sass-usage-chart v-box__content",attrs:{id:"sassUsageChart"}})])}];var y=c["a"].extend({name:"ButterflyChortChart",props:{chordData:{type:Object,required:!0}},watch:{chordData:{handler:function(t){},deep:!0}},methods:{drawChart:function(){}}}),x=y,w=(r("66b7"),Object(g["a"])(x,m,b,!1,null,"ce9c79b4",null)),D=w.exports,S=(r("9ceb"),c["a"].extend({name:"home",components:{SelectorHierarchy:v,ButterflyChortChart:D},data:function(){return{results:{},chartData:{duplications:{},general:{},smelly:{}}}},methods:{cData:function(){this.chartData.general=this.parseSelectors(this.generalData(),"general"),this.chartData.duplications=this.parseSelectors(this.duplicationData(),"duplication"),this.chartData.smelly=this.parseSelectors(this.smellyData(),"smelly")},duplicationData:function(){var t=[];return this.results.duplications.forEach((function(e){t.push(e.origin.selector),e.duplication&&t.push(e.duplication.selector)})),this.results.warnings.forEach((function(e){"no-duplicate-selectors"===e.rule&&t.push(e.resolvedSelector)})),t},generalData:function(){return this.results.stats[0].selectors.values},smellyData:function(){var t=[];return this.results.warnings.forEach((function(e){"block-no-empty"===e.rule?t.push(e.resolvedSelector):"no-descending-specificity"===e.rule?t.push(e.resolvedSelector):"selector-pseudo-class-no-unknown"===e.rule?t.push(e.resolvedSelector):"selector-type-no-unknown"===e.rule?t.push(e.resolvedSelector):"max-nesting-depth"===e.rule?t.push(e.resolvedSelector):"selector-max-compound-selectors"===e.rule?t.push(e.resolvedSelector):"selector-max-id"===e.rule&&t.push(e.resolvedSelector)})),t},fetchHierarchyChartData:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:fetch("/dashboard/results/data.json").then((function(t){return t.json()})).then((function(t){e.results=t,e.duplications=e.results.duplications,e.cData()}));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),parseSelectors:function(t,e){var r=this,n={name:"root",children:[]};return t.forEach((function(t){var e=t.split(" "),a=e[0],i=e.slice(1);if(n.children.filter((function(t){return t.name===a})).length<=0&&!e[0].includes(":")&&n.children.push({name:e[0],children:[]}),e[0].includes(":")){var c=t.split(":");if(n.children.filter((function(t){return t.name===c[0]})).length){for(var s=0;s<n.children.length;s++)if(n.children[s].name===c[0]){n.children[s].children.push({name:":".concat(c[1]),children:[]});break}}else n.children.push({name:c[0],children:[]}),n.children[n.children.length-1].children.push({name:":".concat(c[1]),children:[]})}var l=0;for(s=0;s<n.children.length;s++)n.children[s].name===a&&(l=s);i.length&&r.generateChildren(i,l,n)})),n},generateChildren:function(t,e,r){t=this.cleanArray(t,"+"),t=this.cleanArray(t,">"),t=this.cleanArray(t,"~"),t=this.separatePseudos(t);var n=r.children[e].children.filter((function(e){return e.name===t[0]})).length;"+"===t[0]||">"===t[0]||"~"===t[0]||(0==r.children[e].children.length||n<=0?1===t.length?r.children[e].children.push({name:t[0],children:[]}):this.addToArray(t,r.children[e].children):n>0&&this.recursiveAdd(r.children[e],t))},recursiveAdd:function(t,e,r){var n=this;t.children.forEach((function(t){if(e[0]===t.name){if(parent=e[0],e=e.slice(1),0===t.children.length)return n.addToArray(e,t.children);if(t.children.filter((function(t){return t.name===e[0]})).length<=0)return n.addToArray(e,t.children);if(t.children.filter((function(t){return t.name===e[0]})).length>0&&1===e.length)return;return n.recursiveAdd(t,e,!0)}}))},cleanArray:function(t,e){var r=t.indexOf(e);return r>-1&&(t[r+1]="".concat(e," ").concat(t[r+1]),t.splice(r,1)),t},addToArray:function(t,e){if(1===t.length)e.push({name:t[0],children:[]});else{for(var r={},n={},a=t.length-1;a>=0;a--)a==t.length-1?n={name:t[a],children:[]}:(r={name:t[a],children:[n]},n=r);e.push(r)}},separatePseudos:function(t){for(var e=[],r=0;r<t.length;r++){var n=t[r];if(n.includes(":")){var a=n.split(":");a[1]=":".concat(a[1]),e=e.concat(a)}else e.push(n)}return e}},mounted:function(){this.fetchHierarchyChartData()}})),_=S,C=Object(g["a"])(_,n,a,!1,null,null,null);e["default"]=C.exports},ce1b:function(t,e,r){"use strict";var n=r("c200"),a=r.n(n);a.a},d2c8:function(t,e,r){var n=r("aae3"),a=r("be13");t.exports=function(t,e,r){if(n(e))throw TypeError("String#"+r+" doesn't accept regex!");return String(a(t))}},ee28:function(t,e,r){}}]);
//# sourceMappingURL=selectors.86ccceaf.js.map