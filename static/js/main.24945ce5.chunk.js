(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(t,e,a){t.exports=a(41)},30:function(t,e,a){},40:function(t,e,a){},41:function(t,e,a){"use strict";a.r(e);var n=a(1),o=a.n(n),s=a(7),r=a.n(s),m=(a(29),a(30),a(23)),c=a(15),i=a(9),l=a(10),u=a(12),h=a(11),d=a(13),y=a(46),f=a(43),p=a(44),v=a(45);var g={checkDays:function(t){var e=t.dayIndex,a=t.daysInMonth,n=t.firstDayNumber,o=t.countWeek;if(e>a+n-1)return null;if(0===o&&e===n)return e-n+1;if(0===o&&e>n)return e-n+1;if(0!==o)return++e-n},getTargetDay:function(t){var e=t.dayIndex,a=t.daysState,n=t.month;return a.filter(function(t){return t.month===n&&t.id===e})[0]}},D=function(t){function e(t){var a,n=t.month,o=t.dayIndex;return Object(i.a)(this,e),(a=Object(u.a)(this,Object(h.a)(e).call(this))).toggleModal=function(){a.setState(function(t){return{modal:!t.modal}})},a.addComment=function(t){var e=g.getTargetDay(a.props),n=t.target.value;""===n&&(n=null),a.state.haveComment&&(console.log(a.state.comment,e.comment),a.props.editComment(e,t.target.value)),a.setState({comment:n})},a.saveComment=function(){a.toggleModal(),a.state.comment?(a.setState({haveComment:!0}),a.props.saveDaysState(a.state)):a.setState({haveComment:!1})},a.cancelComment=function(){var t=g.getTargetDay(a.props);t?(a.setState({cancel:!0}),a.props.editComment(t,a.state.comment,a.state.cancel)):a.setState({editing:!1,comment:null}),a.toggleModal()},a.setClassToday=function(){var t=a.props,e=t.dayIndex,n=t.firstDayNumber;if(t.today.getDate()===e-n+1)return"today"},a.setClassDayWithComment=function(){if(a.state.comment)return"comment"},a.state={month:n,id:o,comment:null,haveComment:!1,modal:!1},a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentDidUpdate",value:function(t,e){var a=this.props,n=a.dayIndex,o=a.month,s=g.getTargetDay(this.props);s&&s.comment!==this.state.comment&&this.setState({month:s.month,id:s.id,haveComment:!0,editing:!1,comment:s.comment}),this.props.month!==e.month&&this.setState({month:o,id:n,haveComment:!1,comment:null,modal:!1})}},{key:"render",value:function(){var t=this;return o.a.createElement("td",{id:Math.random(),className:this.state.haveComment?this.setClassDayWithComment()+" "+this.setClassToday():this.setClassToday(),onClick:function(e){t.toggleModal(e)}},this.state.modal?o.a.createElement(y.a,{isOpen:this.state.modal,toggle:!1,className:this.props.className},o.a.createElement(f.a,{toggle:this.toggle},"Modal title"),o.a.createElement("textarea",{placeholder:"type something",value:this.state.comment,onChange:function(e){return t.addComment(e)}},this.state.comment),o.a.createElement(p.a,null,o.a.createElement(v.a,{color:"primary",onClick:this.saveComment}," Save ")," ",o.a.createElement(v.a,{color:"secondary",onClick:this.cancelComment}," Cancel "))):this.state.comment?g.checkDays(this.props)?g.checkDays(this.props)+this.state.comment:null:g.checkDays(this.props))}}]),e}(o.a.Component);var C=function(t){var e=t.countWeek,a=t.firstDay,n=t.firstDayNumber,s=t.dayNames,r=t.daysInMonth,m=t.today,c=t.month,i=t.thisMonth,l=t.saveDaysState,u=t.daysState,h=t.updateDays,d=t.editComment,y=t.cancelComment,f=s.map(function(t,s){return o.a.createElement(D,{dayIndex:s+1+7*e,cancelComment:y,editComment:d,updateDays:h,daysState:u,saveDaysState:l,thisMonth:i,month:c,today:m,countWeek:e,dayName:t,day:s+1,firstDay:a,firstDayNumber:n,daysInMonth:r})});return o.a.createElement("tr",null," ",f," ")},S=(a(40),function(t){function e(){var t;Object(i.a)(this,e),(t=Object(u.a)(this,Object(h.a)(e).call(this))).saveDaysState=function(e){var a=Object(c.a)(t.state.daysState);a.some(function(t){return t.id===e.id&&t.month===e.month})||(a.push(Object(m.a)({},e)),t.setState({daysState:a}))},t.editComment=function(e,a){var n=Object(c.a)(t.state.daysState),o=n.filter(function(t){return t.id===e.id&&t.month===e.month});o[0].comment=a,""===a&&(o[0].comment=null,n=n.filter(function(t){return t.id!==o[0].id})),n.map(function(t){return t}),t.setState({daysState:n})},t.cancelComment=function(e,a){var n=Object(c.a)(t.state.daysState),o=(n.filter(function(t){return t.id===e.id&&t.month===e.month}),n.indexOf(e));n[o].comment=a,t.setState({daysState:n})},t.getFirstDayMouth=function(){var e=t.state,a=e.year,n=e.month;return new Date(a,n,1).getDate()},t.getFirstDayNumber=function(){var e=t.state,a=e.year,n=e.month;return new Date(a,n,1).getDay()},t.getDaysInMonth=function(){var e=t.state,a=e.year,n=e.month;return new Date(a,n+1,0).getDate()},t.createWeek=function(){var e=t.getFirstDayMouth(),a=t.getFirstDayNumber(),n=t.getDaysInMonth(),s=[],r=0,m=Math.ceil(n/7);for(0===a&&(a=7),(a>6&&n>=30||a>3&&1===t.state.month)&&m++;m!==r;)s.push(o.a.createElement(C,{cancelComment:t.cancelComment,editComment:t.editComment,daysState:t.state.daysState,thisMonth:t.state.thisMonth,month:t.state.month,today:t.state.today,countWeek:r,firstDay:e,firstDayNumber:a,daysInMonth:n,dayNames:t.state.dayNames,saveDaysState:t.saveDaysState})),r++;return s.map(function(t){return t})};var a=new Date;return t.state={year:a.getFullYear(),month:a.getMonth(),thisMonth:!0,today:new Date(a.getFullYear(),a.getMonth(),a.getDate()),daysState:[],dayNames:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"]},t}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"calendar__app "},o.a.createElement("div",{className:"calendar-caption"},o.a.createElement("button",{onClick:function(){0!==t.state.month&&t.setState({month:t.state.month-1})}},"<"),o.a.createElement("div",{className:"calendar-head"},o.a.createElement("span",null,this.state.year),o.a.createElement("span",null,this.state.monthNames[this.state.month])),o.a.createElement("button",{onClick:function(){11!==t.state.month&&t.setState({month:t.state.month+1})}},">")),o.a.createElement("table",{className:"calendar-board"},o.a.createElement("tr",null,this.state.dayNames.map(function(t){return o.a.createElement("th",null,t.slice(0,3))})),this.createWeek()))}}]),e}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.24945ce5.chunk.js.map