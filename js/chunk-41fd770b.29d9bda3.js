(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41fd770b"],{"0347":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.classes},[t.showHead?a("div",{class:t.headClasses},[t._t("title",[t.title?a("p",[t.icon?a("Icon",{attrs:{type:t.icon}}):t._e(),a("span",[t._v(t._s(t.title))])],1):t._e()])],2):t._e(),t.showExtra?a("div",{class:t.extraClasses},[t._t("extra")],2):t._e(),a("div",{class:t.bodyClasses,style:t.bodyStyles},[t._t("default")],2)])},s=[],n=a("bd86"),r=(a("c5f6"),a("2748")),i="ivu-card",c=16,d={name:"Card",components:{Icon:r["a"]},props:{bordered:{type:Boolean,default:!0},disHover:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1},padding:{type:Number,default:c},title:{type:String},icon:{type:String}},data:function(){return{showHead:!0,showExtra:!0}},computed:{classes:function(){var t;return["".concat(i),(t={},Object(n["a"])(t,"".concat(i,"-bordered"),this.bordered&&!this.shadow),Object(n["a"])(t,"".concat(i,"-dis-hover"),this.disHover||this.shadow),Object(n["a"])(t,"".concat(i,"-shadow"),this.shadow),t)]},headClasses:function(){return"".concat(i,"-head")},extraClasses:function(){return"".concat(i,"-extra")},bodyClasses:function(){return"".concat(i,"-body")},bodyStyles:function(){return this.padding!==c?{padding:"".concat(this.padding,"px")}:""}},mounted:function(){this.showHead=this.title||void 0!==this.$slots.title,this.showExtra=void 0!==this.$slots.extra}},l=d,u=a("2877"),p=Object(u["a"])(l,o,s,!1,null,null,null),h=p.exports;e["a"]=h},"469f":function(t,e,a){a("6c1c"),a("1654"),t.exports=a("7d7b")},5896:function(t,e,a){},"654d":function(t,e,a){"use strict";var o=a("5896"),s=a.n(o);s.a},"7d7b":function(t,e,a){var o=a("e4ae"),s=a("7cd6");t.exports=a("584a").getIterator=function(t){var e=s(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return o(e.call(t))}},"7dd8":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about_wrap new_user_wrap"},t._l(t.listdata,function(e,o){return a("Card",{key:o},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))]),a("div",{staticClass:"new_user_content"},[a("VueMarkdown",{attrs:{source:e.content}})],1)])}),1)},s=[],n=a("0347"),r=a("9ce6"),i=a.n(r),c=[{title:"关于",content:'<p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p><p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p><p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p><p>社区目前由 <a href="http://cnodejs.org/user/alsotang" target="_blank">@alsotang</a> 在维护，有问题请联系：<a href="https://github.com/alsotang" target="_blank">https://github.com/alsotang</a></p><p>请关注我们的官方微博：<a href="http://weibo.com/cnodejs" target="_blank">http://weibo.com/cnodejs</a></p>'},{title:"移动客户端",content:'<p>客户端由 <a href="https://cnodejs.org/user/soliury" target="_blank">@soliury</a> 开发维护。</p><p>源码地址： <a href="https://github.com/soliury/noder-react-native" target="_blank">https://github.com/soliury/noder-react-native</a> 。</p><p>立即体验 CNode 客户端，直接扫描页面右侧二维码。</p><p>另，安卓用户同时可选择：<a href="https://github.com/TakWolf/CNode-Material-Design" target="_blank">https://github.com/TakWolf/CNode-Material-Design</a> ，这是 Java 原生开发的安卓客户端。</p>'}],d={data:function(){return{listdata:c}},components:{Card:n["a"],VueMarkdown:i.a}},l=d,u=(a("654d"),a("2877")),p=Object(u["a"])(l,o,s,!1,null,"bea0cefe",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-41fd770b.29d9bda3.js.map