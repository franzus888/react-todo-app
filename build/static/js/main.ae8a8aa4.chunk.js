(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{210:function(e,t,n){},212:function(e,t,n){},214:function(e,t,n){},216:function(e,t,n){},218:function(e,t,n){},220:function(e,t,n){},222:function(e,t,n){},244:function(e,t,n){},246:function(e,t,n){"use strict";n.r(t);var o=n(0),l=n.n(o),s=n(75),a=n.n(s),r=(n(89),n(27)),c=n(5),d=n(76),i=n(77),u=n(82),h=n(78),m=n(83),D=n(3),p=n(4);n(94);var v=function(){return l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",null,l.a.createElement(D.a,{className:"App-svg-left",icon:p.c}),"Todo List"))};n(96);var f=function(e){var t=e.newTodo,n=e.formSubmitted,o=e.newTodoChanged;return l.a.createElement("div",{className:"App-add-todo"},l.a.createElement("form",{onSubmit:function(e){return n(e)}},l.a.createElement("p",null,l.a.createElement("input",{className:"App-textfield",type:"text",onChange:function(e){return o(e)},value:t})),l.a.createElement("p",null,l.a.createElement("button",{type:"submitButton"},l.a.createElement(D.a,{className:"App-svg-left",icon:p.d}),"Add"))))},T=n(15),A=n(80),B=n.n(A);n(210);var g=B()(Object(T.DragSource)("todo",{beginDrag:function(e){var t=e.todo;return t.index=e.index,t}},function(e,t){return{connectDragSource:e.dragSource()}}),Object(T.DropTarget)("todo",{hover:function(e,t){var n=t.getItem(),o=e.index;return e.hoverTodoItem(n,o)},drop:function(e,t){var n=t.getItem(),o=e.index;return e.moveTodo(n,o)}},function(e,t){return{connectDropTarget:e.dropTarget(),isHovering:t.isOver()}}))(function(e){var t=e.todo,n=e.index,o=e.showTodoBtns,s=e.hideTodoBtns,a=e.checkTodoDone,r=e.hoverTodo,c=e.deleteTodo,d=e.isHovering;return(0,e.connectDragSource)((0,e.connectDropTarget)(l.a.createElement("li",{className:"App-list-item",onMouseEnter:function(){return o(n)},onMouseLeave:function(){return s(n)},style:{opacity:d?0:1}},l.a.createElement("input",{className:"App-checkbox",onChange:function(e){return a(e,n)},type:"checkbox",checked:t.done})," ",r===n&&l.a.createElement("span",{className:"App-todo-move"},l.a.createElement(D.a,{className:"App-svg-middle",icon:p.e})),l.a.createElement("span",{className:"App-item-todo"},t.title),r===n&&l.a.createElement("span",{className:"App-todo-delete"},l.a.createElement(D.a,{onClick:function(){return c(n)},className:"App-svg-delete",icon:p.f})))))});n(212);var E=function(e){var t=e.todos,n=e.showTodoBtns,o=e.hideTodoBtns,s=e.checkTodoDone,a=e.hoverTodo,r=e.hoverTodoItem,c=e.moveTodo,d=e.deleteTodo;return l.a.createElement("ul",{className:"App-todo-list"},t.map(function(e,t){return l.a.createElement(g,{todo:e,key:t,index:t,showTodoBtns:n,hideTodoBtns:o,checkTodoDone:s,hoverTodo:a,hoverTodoItem:r,moveTodo:c,deleteTodo:d})}))};n(214);var b=function(e){var t=e.done,n=e.index,o=e.showDoneBtns,s=e.hideDoneBtns,a=e.uncheckDoneToDo,r=e.hoverDone,c=e.deleteDone;return l.a.createElement("li",{className:"App-list-item",onMouseOver:function(){return o(n)},onMouseOut:function(){return s(n)}},l.a.createElement("input",{className:"App-checkbox",onChange:function(e){return a(e,n)},type:"checkbox",checked:t.done}),l.a.createElement("span",{className:t.done?"App-item-done":""},t.title),l.a.createElement("span",{className:"App-done-delete",style:{display:r===n?"":"none"}},l.a.createElement(D.a,{onClick:function(){return c(n)},className:"App-svg-delete",icon:p.f})))};n(216);var w=function(e){var t=e.dones,n=e.showDoneBtns,o=e.hideDoneBtns,s=e.uncheckDoneToDo,a=e.hoverDone,r=e.deleteDone;return l.a.createElement("ul",{className:"App-done-list"},t.map(function(e,t){return l.a.createElement(b,{done:e,index:t,key:t,showDoneBtns:n,hideDoneBtns:o,uncheckDoneToDo:s,hoverDone:a,deleteDone:r})}))};n(218);var k=function(e){var t=e.listBtnsAllDone,n=e.allDone,o=e.listBtnsDelAll,s=e.deleteAll;return l.a.createElement("div",{className:"App-list-btns"},l.a.createElement("p",null,t&&l.a.createElement("button",{onClick:function(){return n()}},l.a.createElement(D.a,{className:"App-svg-left",icon:p.a}),"All Done")),l.a.createElement("p",null,o&&l.a.createElement("button",{onClick:function(){return s()}},l.a.createElement(D.a,{className:"App-svg-left",icon:p.f}),"Delete all")))};n(220);var S=function(e){var t=e.todos,n=e.showTodoBtns,o=e.hideTodoBtns,s=e.checkTodoDone,a=e.hoverTodo,r=e.hoverTodoItem,c=e.moveTodo,d=e.deleteTodo,i=e.dones,u=e.showDoneBtns,h=e.hideDoneBtns,m=e.uncheckDoneToDo,D=e.hoverDone,p=e.deleteDone,v=e.listBtnsAllDone,f=e.allDone,T=e.listBtnsDelAll,A=e.deleteAll;return l.a.createElement("div",{className:"App-lists"},l.a.createElement(E,{todos:t,showTodoBtns:n,hideTodoBtns:o,checkTodoDone:s,hoverTodo:a,hoverTodoItem:r,moveTodo:c,deleteTodo:d}),l.a.createElement(w,{dones:i,showDoneBtns:u,hideDoneBtns:h,uncheckDoneToDo:m,hoverDone:D,deleteDone:p}),l.a.createElement(k,{listBtnsAllDone:v,allDone:f,listBtnsDelAll:T,deleteAll:A}))},N=n(48);n(222);var O=function(){return l.a.createElement("footer",{className:"App-footer"},l.a.createElement("p",null,l.a.createElement("span",null,l.a.createElement(D.a,{className:"App-svg-left",icon:p.b}),l.a.createElement("a",{href:"mailto:franz.straube@gmail.com"},"Franz Straube"))),l.a.createElement("p",null,l.a.createElement("span",null,l.a.createElement("a",{href:"https://www.xing.com/profile/Franz_Straube",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(D.a,{className:"App-svg-left",icon:N.b}))),l.a.createElement("span",{className:"seperator"},"|"),l.a.createElement("span",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/franz-straube-039473b4/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(D.a,{className:"App-svg-right",icon:N.a})))))},j=n(81),x=n.n(j),y=(n(244),function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).newTodoChanged=function(t){return e.setState({newTodo:t.target.value})},e.formSubmitted=function(t){if(t.preventDefault(),""!==e.state.newTodo){var n=Object(c.a)(e.state.todos).concat([{title:e.state.newTodo,done:!1}]),o=Object(c.a)(e.state.dones);return n.length<=1&&o.length<=1?e.setState({newTodo:"",listBtnsAllDone:!1,listBtnsDelAll:!1,todos:n,dones:o}):n.length>=2?e.setState({newTodo:"",listBtnsAllDone:!0,listBtnsDelAll:!1,todos:n,dones:o}):o.length>=2&&0===n.length?e.setState({newTodo:"",listBtnsAllDone:!1,listBtnsDelAll:!0,todos:n,dones:o}):o.length>=2&&0!==n.length?e.setState({newTodo:"",listBtnsAllDone:!1,listBtnsDelAll:!1,todos:n,dones:o}):void 0}},e.checkTodoDone=function(t,n){var o=Object(c.a)(e.state.todos);o[n]=Object(r.a)({},o[n],{done:t.target.checked});var l=Object(c.a)(e.state.dones).concat([o[n]]);return o.splice(n,1),o.length<=1&&l.length<=1?e.setState({listBtnsAllDone:!1,listBtnsDelAll:!1,todos:o,dones:l}):o.length>=2?e.setState({listBtnsAllDone:!0,listBtnsDelAll:!1,todos:o,dones:l}):l.length>=2&&0===o.length?e.setState({listBtnsAllDone:!1,listBtnsDelAll:!0,todos:o,dones:l}):l.length>=2&&0!==o.length?e.setState({listBtnsAllDone:!1,listBtnsDelAll:!1,todos:o,dones:l}):void 0},e.uncheckDoneToDo=function(t,n){var o=Object(c.a)(e.state.dones);o[n]=Object(r.a)({},o[n],{done:t.target.checked});var l=Object(c.a)(e.state.todos).concat([o[n]]);return o.splice(n,1),l.length<=1&&o.length<=1?e.setState({listBtnsAllDone:!1,listBtnsDelAll:!1,todos:l,dones:o}):l.length>=2?e.setState({listBtnsAllDone:!0,listBtnsDelAll:!1,todos:l,dones:o}):o.length>=2&&0===l.length?e.setState({listBtnsAllDone:!1,listBtnsDelAll:!0,todos:l,dones:o}):o.length>=2&&0!==l.length?e.setState({listBtnsAllDone:!1,listBtnsDelAll:!1,todos:l,dones:o}):void 0},e.showTodoBtns=function(t){return e.setState({hoverTodo:t})},e.hideTodoBtns=function(){return e.setState({hoverTodo:""})},e.showDoneBtns=function(t){return e.setState({hoverDone:t})},e.hideDoneBtns=function(){return e.setState({hoverDone:""})},e.hoverTodoItem=function(t,n){var o=Object(c.a)(e.state.todos),l=o[n];return t.index>n?(o.splice(n+1,1,l),e.setState({todos:o})):t.index<n?(o.splice(n-1,1,l),e.setState({todos:o})):void t.index},e.moveTodo=function(t,n){var o=Object(c.a)(e.state.todos);if(console.log("DI",t.index),console.log("HI",n),console.log(o),t.index!==n)return o.splice(n,1,t),e.setState({todos:o})},e.deleteTodo=function(t){var n=Object(c.a)(e.state.todos);return n.splice(t,1),n.length<=1?e.setState({listBtnsAllDone:!1,todos:n}):e.setState({listBtnsAllDone:!0,todos:n})},e.deleteDone=function(t){var n=Object(c.a)(e.state.dones);return n.splice(t,1),n.length<=1?e.setState({listBtnsDelAll:!1,dones:n}):e.setState({listBtnsDelAll:!0,dones:n})},e.deleteAll=function(){var t=Object(c.a)(e.state.todos);t.splice(0,t.length);var n=Object(c.a)(e.state.dones);return n.splice(0,n.length),e.setState({listBtnsDelAll:!1,todos:t,dones:n})},e.allDone=function(){var t=e.state.todos.map(function(e){return Object(r.a)({},e,{done:!0})}),n=Object(c.a)(e.state.dones).concat(t);return t.splice(0,t.length),e.setState({listBtnsAllDone:!1,listBtnsDelAll:!0,todos:[],dones:n})},e.state={newTodo:"",hoverTodo:!1,hoverDone:!1,listBtnsAllDone:!1,listBtnsDelAll:!1,todos:[],dones:[]},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v,null),l.a.createElement("main",{className:"App-main"},l.a.createElement(f,{newTodo:this.state.newTodo,formSubmitted:this.formSubmitted,newTodoChanged:this.newTodoChanged}),l.a.createElement(S,{showTodoBtns:this.showTodoBtns,hideTodoBtns:this.hideTodoBtns,checkTodoDone:this.checkTodoDone,hoverTodo:this.state.hoverTodo,hoverTodoItem:this.hoverTodoItem,moveTodo:this.moveTodo,deleteTodo:this.deleteTodo,dones:this.state.dones,showDoneBtns:this.showDoneBtns,hideDoneBtns:this.hideDoneBtns,uncheckDoneToDo:this.uncheckDoneToDo,deleteDone:this.deleteDone,allDone:this.allDone,deleteAll:this.deleteAll,todos:this.state.todos,hoverDone:this.state.hoverDone,listBtnsAllDone:this.state.listBtnsAllDone,listBtnsDelAll:this.state.listBtnsDelAll})),l.a.createElement(O,null))}}]),t}(o.Component)),C=Object(T.DragDropContext)(x.a)(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},84:function(e,t,n){e.exports=n(246)},89:function(e,t,n){},94:function(e,t,n){},96:function(e,t,n){}},[[84,2,1]]]);
//# sourceMappingURL=main.ae8a8aa4.chunk.js.map