(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),r=n.n(c),a=n(4),o=n(5),s=n(7),u=n(6),i=n(1),d=n.n(i),b=(n(12),n(0)),l=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={counter:0},t.addOne=function(){t.setState((function(t){return{counter:t.counter+1}}))},t.add100=function(){t.setState((function(t){return{counter:t.counter+100}}))},t.increase=function(){t.addOne(),t.state.counter%5===0&&t.add100()},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state.counter,e=this.addOne,n=this.add100,c=this.increase;return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"counter",children:[Object(b.jsx)("h1",{children:"Count: ".concat(t)}),Object(b.jsxs)("div",{className:"counter-btn-wrap",children:[Object(b.jsx)("button",{className:"counter__btn",type:"button",onClick:e,children:"add 1"}),Object(b.jsx)("button",{className:"counter__btn",type:"button",onClick:n,children:"add 100"}),Object(b.jsx)("button",{className:"counter__btn",type:"button",onClick:c,children:"increase"})]})]})})}}]),n}(d.a.Component);r.a.render(Object(b.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d9c75e61.chunk.js.map