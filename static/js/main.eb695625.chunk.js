(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(10),s=n.n(a),i=(n(16),n(6)),o=n.n(i),u=n(11),l=n(7),d=n(2),p=n(3),h=n(8),j=n(5),f=n(4),b=(n(18),n(0)),m=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).renderValue=function(t){(0,e.props.selectedOption)(t.target.value)},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.eachOption,n=e.yes,c=e.selectedOptionState===t?n?"correct":"False":null;return Object(b.jsx)("li",{className:"option-card",children:Object(b.jsx)("button",{className:"option ".concat(c),onClick:this.renderValue,value:t,children:t})})}}]),n}(c.Component),v=(n(20),function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={timer:0,yes:null,selectedOptionState:null,correctAnswerState:0,wrongAnswer:0,visible:!0},e.updateTimer=function(){e.clockId=setInterval(e.updateCounter,1e3)},e.updateCounter=function(){e.setState((function(e){return{timer:e.timer+1}}))},e.validateAnswers=function(){var t=e.props,n=t.correct,c=t.wrong;return e.state.visible?null:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{className:"dd",children:n}),Object(b.jsxs)("p",{className:"ddd",children:[c,">"]})]})},e.renderA=function(t){t<10?e.setState({visible:!0}):e.setState({visible:!1})},e.selectedOption=function(){var t=Object(l.a)(o.a.mark((function t(n){var c,r,a,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.props,r=c.eachQuestion,a=c.updatingAnswers,s=r.correctAnswer,t.next=4,e.setState({selectedOptionState:n});case 4:s!==n?(a(0,1),e.setState({yes:!1}),e.setState((function(e){return{wrongAnswer:e.wrongAnswer+1}}))):s===n&&(a(1,0),e.setState({yes:!0}),e.setState((function(e){return{correctAnswerState:e.correctAnswerState+1}})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.updateTimer()}},{key:"render",value:function(){var e=this,t=this.props,n=t.eachQuestion,c=t.updateQuestion,r=this.state,a=r.timer,s=r.yes,i=r.selectedOptionState,o=this.state.visible;return 10===a&&c(),Object(b.jsxs)("li",{className:"li",children:[this.validateAnswers(),Object(b.jsx)("h1",{className:"time",children:a}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("h1",{className:"question",children:n.question}),o?Object(b.jsx)("ul",{className:"options-ul",children:n.answers.map((function(t,n){return Object(b.jsx)(m,{eachOption:t,selectedOption:e.selectedOption,yes:s,selectedOptionState:i})}))}):null]})]})}}]),n}(c.Component)),O=(n(21),function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).changeStateLanguage=function(t){var n=t.target.value;(0,e.props.updateLevel)(n)},e}return Object(p.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"background-container",children:Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("h1",{className:"main-heading",children:"Computer science Quiz application"}),Object(b.jsxs)("div",{className:"difficulty-content",children:[Object(b.jsx)("h1",{className:"difficulty-heading",children:"Select Difficulty Level"}),Object(b.jsxs)("div",{className:"buttons-container",children:[Object(b.jsx)("button",{className:"button",value:"easy",onClick:this.changeStateLanguage,children:"easy"},"1"),Object(b.jsx)("button",{className:"button",value:"medium",onClick:this.changeStateLanguage,children:"medium"},"2"),Object(b.jsx)("button",{className:"button",value:"hard",onClick:this.changeStateLanguage,children:"hard"},"3")]})]})]})})}}]),n}(c.Component)),g=(n(22),function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={myData:[],isHideHome:!1,isHideQuestion:!0,counter:0,correct:0,wrong:0,clockId:0,isHideResults:!0},e.stopTimer=function(){clearInterval(e.clockId)},e.updateLevel=function(t){e.fetchData(t),e.setState((function(e){return{isHideHome:!e.isHideHome,isHideResults:!e.isHideResults}}))},e.updateQuestion=function(){e.setState((function(e){return{counter:e.counter+1}}))},e.updatingAnswers=function(t,n){e.setState((function(e){return{correct:e.correct+t}})),e.setState((function(e){return{wrong:e.wrong+n}})),setTimeout(function(){this.setState((function(e){return{counter:e.counter+1}}))}.bind(Object(h.a)(e)),1e3)},e.fetchData=function(){var t=Object(l.a)(o.a.mark((function t(n){var c,r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=".concat(n));case 2:return c=t.sent,t.next=5,c.json();case 5:return r=t.sent,t.next=8,r.results.map((function(e,t){return{id:t+1,category:e.category,correctAnswer:e.correct_answer,difficulty:e.difficulty,incorrectAnswers:e.incorrect_answers,question:e.question,type:e.type,answers:[].concat(Object(u.a)(e.incorrect_answers),[e.correct_answer])}}));case 8:a=t.sent,e.setState({myData:a});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.refreshPage=function(){window.location.reload(!1)},e.renderAnswers=function(){var t=e.state,n=t.isHideResults,c=t.correct,r=t.wrong;return console.log(n),n?null:Object(b.jsxs)("div",{className:"answer-bg",children:[Object(b.jsxs)("p",{className:"answer1",children:["correct: ".concat(c)," ",Object(b.jsx)("span",{className:"ans",children:"wrong : ".concat(r)})]}),Object(b.jsx)("p",{className:"try",children:"Try Another Level"}),Object(b.jsx)("div",{className:"but",children:Object(b.jsx)("button",{className:"button",onClick:e.refreshPage,children:"Home Page"})})]})},e.filterData=function(t){var n=e.state.myData;return 10!==t?n.filter((function(e){return e.id===t+1})):10===t?n.filter((function(e){return 10===e.id})):void e.stopTimer()},e}return Object(p.a)(n,[{key:"componentWillUnmount",value:function(){clearInterval(this.clockId)}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this,t=this.state,n=t.isHideHome,c=t.isHideQuestion,r=t.counter,a=t.correct,s=t.wrong;console.log(a,s);var i=this.filterData(r);return Object(b.jsxs)("div",{className:"bg",children:[n?null:Object(b.jsx)("div",{className:"sfd",children:Object(b.jsx)(O,{updateLevel:this.updateLevel,updateQuestion:this.updateQuestion})}),c?Object(b.jsxs)("ul",{className:"ul",children:[this.renderAnswers(),i.map((function(t){return Object(b.jsx)(v,{eachQuestion:t,updatingAnswers:e.updatingAnswers,correct:a,wrong:s,counter:r,updateQuestion:e.updateQuestion},t.id)}))]}):null]})}}]),n}(c.Component));n(23);var w=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(g,{})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root")),y()}],[[24,1,2]]]);
//# sourceMappingURL=main.eb695625.chunk.js.map