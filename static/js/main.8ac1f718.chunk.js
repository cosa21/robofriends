(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),a=n(3),o=n.n(a),i=(n(13),n(4)),h=n(5),l=n(7),b=n(6),u=function(e){var t=e.id,n=e.name,c=e.email;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 grow bw2 shadow-5 ma2",children:[Object(r.jsx)("img",{alt:"XXX",src:"https://robohash.org/".concat(t,"?200x200")}),Object(r.jsx)("h2",{children:n}),Object(r.jsx)("p",{children:c})]})},d=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,n){return Object(r.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},j=function(e){var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"enter robot name",onChange:t})})},f=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"3px solid black",height:"700px"},children:e.children})},g=(n(14),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).searchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return 0===t.length?Object(r.jsx)("h1",{children:"Loading..."}):Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"Robofriends"}),Object(r.jsx)(j,{searchChange:this.searchChange}),Object(r.jsx)(f,{children:Object(r.jsx)(d,{robots:c})})]})}}]),n}(s.a.Component)),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};n(15);o.a.render(Object(r.jsx)(g,{}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.8ac1f718.chunk.js.map