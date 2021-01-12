(this["webpackJsonptweet-toxicity"]=this["webpackJsonptweet-toxicity"]||[]).push([[0],{237:function(t,e,i){},259:function(t,e,i){},348:function(t,e,i){},349:function(t,e,i){},351:function(t,e,i){},356:function(t,e){},357:function(t,e){},365:function(t,e){},368:function(t,e){},369:function(t,e){},446:function(t,e,i){"use strict";i.r(e);var s=i(47),n=i(110),a=i.n(n),r=i(311),c=i.n(r);i(348),i(259),i(237),i(349);var o=function(){return Object(s.jsx)("h1",{className:"header"})},l=i(2),u=i.n(l),b=i(15),h=i(1),p=i(9),d=i(12),x=i(13),j=(i(351),i(251),i(331)),f=i(337),v=function(t){Object(d.a)(i,t);var e=Object(x.a)(i);function i(t){var s;return Object(h.a)(this,i),(s=e.call(this,t)).state={predictObj:{},sentence:"",barData:[],toxicity:0,identityAttack:0,insult:0,obscene:0,severeToxicity:0,sexualExplicit:0,threat:0},s.surface={name:"Bar chart",tab:"Charts"},s}return Object(p.a)(i,[{key:"resolveModel",value:function(){var t=Object(b.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return.9,t.next=3,f.a(.9);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"predict",value:function(){var t=Object(b.a)(u.a.mark((function t(e){var i,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.resolveModel();case 2:return i=t.sent,t.next=5,i.classify([e]);case 5:return s=t.sent,this.setState({identityAttack:s[0].results[0].probabilities[1].toFixed(3),insult:s[1].results[0].probabilities[1].toFixed(3),obscene:s[2].results[0].probabilities[1].toFixed(3),severeToxicity:s[3].results[0].probabilities[1].toFixed(3),sexualExplicit:s[4].results[0].probabilities[1].toFixed(3),threat:s[5].results[0].probabilities[1].toFixed(3),toxicity:s[6].results[0].probabilities[1].toFixed(3),predictObj:s}),console.log(s),t.abrupt("return",s[6].results[0].probabilities[1]);case 9:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"solveViz",value:function(){var t=Object(b.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.render.barchart(this.surface,this.state.barData);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getBarValue",value:function(){var t=this.state.predictObj,e=[];for(var i in t)t.hasOwnProperty(i)&&(console.log(i+" -> "+t[i].label),console.log(t[i].results[0].probabilities[1]),e.push({index:t[i].label,value:t[i].results[0].probabilities[1]}));this.setState({barData:e}),console.log("bar data",this.state.barData)}},{key:"render",value:function(){var t=this;return console.log("prediction",this.state.predictions),console.log("predict obj",this.state.predictObj),console.log("bar data",this.state.barData),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("p",{className:"h1",children:"What is your tweet? \ud83d\udc26"}),Object(s.jsx)("input",{placeholder:"type something here...",type:"text",value:this.state.sentence,onChange:function(e){return t.setState({sentence:e.target.value})}}),Object(s.jsx)("button",{type:"submit",onClick:function(){t.predict(t.state.sentence),t.getBarValue(),console.log("bar data",t.state.barData)},children:"Submit"}),Object(s.jsx)("button",{className:"success",onClick:function(){t.getBarValue(),t.solveViz(),console.log("bar data",t.state.barData)},children:"Click for Viz"}),Object(s.jsxs)("div",{className:"data",children:[Object(s.jsxs)("p",{children:["Identity attack likelihood: ",this.state.identityAttack]}),Object(s.jsxs)("p",{children:["Insult likelihood: ",this.state.insult]}),Object(s.jsxs)("p",{children:["Obscene likelihood: ",this.state.obscene]}),Object(s.jsxs)("p",{children:["Severe toxicity likelihood: ",this.state.severeToxicity]}),Object(s.jsxs)("p",{children:["Sexual explicit likelihood: ",this.state.sexualExplicit]}),Object(s.jsxs)("p",{children:["Threat likelihood: ",this.state.threat]}),Object(s.jsxs)("p",{children:["Toxicity likelihood: ",this.state.toxicity]})]})]})}}]),i}(a.a.Component);var O=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(o,{}),Object(s.jsx)(v,{})]})},y=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,465)).then((function(e){var i=e.getCLS,s=e.getFID,n=e.getFCP,a=e.getLCP,r=e.getTTFB;i(t),s(t),n(t),a(t),r(t)}))};c.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),y()}},[[446,1,2]]]);
//# sourceMappingURL=main.210cd480.chunk.js.map