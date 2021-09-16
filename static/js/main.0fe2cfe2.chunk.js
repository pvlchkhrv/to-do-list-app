(this.webpackJsonpTodo=this.webpackJsonpTodo||[]).push([[0],{101:function(t,e,a){t.exports=a(131)},106:function(t,e,a){},107:function(t,e,a){},131:function(t,e,a){"use strict";a.r(e);var r={};a.r(r),a.d(r,"selectIsLoggedIn",(function(){return ht}));var n=a(0),o=a.n(n),s=a(9),i=a.n(s);a(106),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(107);var c,l,u=a(172),d=a(173),p=a(174),f=a(166),m=a(169),b=a(176),v=a(177),h=a(175),g=a(16),k=a(7),E=a.n(k),j=a(14),O=a(81),y=a.n(O).a.create(Object(g.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"44d5e153-6a8e-4009-97fa-dc87b2117b60"}})),x=function(){return y.get("todo-lists")},C=function(t){return y.post("todo-lists",{title:t})},I=function(t){return y.delete("todo-lists/".concat(t))},w=function(t,e){return y.put("todo-lists/".concat(t),{title:e})},T=function(t){return y.get("todo-lists/".concat(t,"/tasks"))},S=function(t,e){return y.delete("todo-lists/".concat(t,"/tasks/").concat(e))},A=function(t,e){return y.post("todo-lists/".concat(t,"/tasks"),{title:e})},L=function(t,e,a){return y.put("todo-lists/".concat(t,"/tasks/").concat(e),a)},z=function(t){return y.post("auth/login",t)},P=function(){return y.delete("auth/login")},F=function(){return y.get("auth/me")},N=a(13),W={setAppStatus:Object(N.b)("appActions/setAppStatus"),setAppError:Object(N.b)("appActions/setAppError")},D=function(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return a&&e.dispatch(W.setAppError({error:t.messages.length?t.messages[0]:"Some error occurred"})),e.dispatch(W.setAppStatus({status:"failed"})),e.rejectWithValue({errors:t.messages,fieldsErrors:t.fieldsErrors})},M=function(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return a&&e.dispatch(W.setAppError({error:t.message?t.message:"Some error occurred"})),e.dispatch(W.setAppStatus({status:"failed"})),e.rejectWithValue({errors:[t.message],fieldsErrors:void 0})},R=W.setAppStatus,V=Object(N.c)("todolists/fetchTodolists",function(){var t=Object(j.a)(E.a.mark((function t(e,a){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(R({status:"loading"})),t.prev=1,t.next=4,x();case 4:return r=t.sent,a.dispatch(R({status:"succeeded"})),t.abrupt("return",{todolists:r.data});case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",M(t.t0,a));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,a){return t.apply(this,arguments)}}()),q=Object(N.c)("todolists/removeTodolist",function(){var t=Object(j.a)(E.a.mark((function t(e,a){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.dispatch,a.rejectWithValue,r(R({status:"loading"})),r(G({id:e,status:"loading"})),t.next=5,I(e);case 5:return t.sent,r(R({status:"succeeded"})),t.abrupt("return",{id:e});case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),B=Object(N.c)("todolists/addTodolist",function(){var t=Object(j.a)(E.a.mark((function t(e,a){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(R({status:"loading"})),t.prev=1,t.next=4,C(e);case 4:if(0!==(r=t.sent).data.resultCode){t.next=10;break}return a.dispatch(R({status:"succeeded"})),t.abrupt("return",{todolist:r.data.data.item});case 10:return t.abrupt("return",D(r.data,a,!1));case 11:t.next=16;break;case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",M(t.t0,a,!1));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,a){return t.apply(this,arguments)}}()),H=Object(N.c)("todolists/changeTodolistTitle",function(){var t=Object(j.a)(E.a.mark((function t(e,a){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w(e.id,e.title);case 3:if(0!==(r=t.sent).data.resultCode){t.next=9;break}return a.dispatch(R({status:"succeeded"})),t.abrupt("return",{id:e.id,title:e.title});case 9:return t.abrupt("return",D(r.data,a));case 10:t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return",M(t.t0,a,!1));case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,a){return t.apply(this,arguments)}}()),U={fetchTodolistsTC:V,removeTodolistTC:q,addTodolistTC:B,changeTodolistTitleTC:H},J=Object(N.d)({name:"todolists",initialState:[],reducers:{changeTodolistFilter:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].filter=e.payload.filter},changeTodolistEntityStatus:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].entityStatus=e.payload.status}},extraReducers:function(t){t.addCase(V.fulfilled,(function(t,e){return e.payload.todolists.map((function(t){return Object(g.a)(Object(g.a)({},t),{},{filter:"all",entityStatus:"idle"})}))})).addCase(q.fulfilled,(function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));a>-1&&t.splice(a,1)})).addCase(B.fulfilled,(function(t,e){t.unshift(Object(g.a)(Object(g.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))})).addCase(H.fulfilled,(function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].title=e.payload.title}))}}),K=J.actions,G=(K.changeTodolistFilter,K.changeTodolistEntityStatus),X=Object(N.c)("tasks/fetchTasks",function(){var t=Object(j.a)(E.a.mark((function t(e,a){var r,n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(W.setAppStatus({status:"loading"})),t.prev=1,t.next=4,T(e);case 4:return r=t.sent,n=r.data.items,a.dispatch(W.setAppStatus({status:"succeeded"})),t.abrupt("return",{tasks:n,todolistId:e});case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",M(t.t0,a));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,a){return t.apply(this,arguments)}}()),Y=Object(N.c)("tasks/removeTask",function(){var t=Object(j.a)(E.a.mark((function t(e,a){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e.todolistId,e.taskId);case 2:return t.sent,t.abrupt("return",{taskId:e.taskId,todolistId:e.todolistId});case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),$=Object(N.c)("tasks/addTask",function(){var t=Object(j.a)(E.a.mark((function t(e,a){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(W.setAppStatus({status:"loading"})),t.prev=1,t.next=4,A(e.todolistId,e.title);case 4:if(0!==(r=t.sent).data.resultCode){t.next=10;break}return a.dispatch(W.setAppStatus({status:"succeeded"})),t.abrupt("return",r.data.data.item);case 10:return D(r.data,a,!1),t.abrupt("return",a.rejectWithValue({errors:r.data.messages,fieldsErrors:r.data.fieldsErrors}));case 12:t.next=17;break;case 14:return t.prev=14,t.t0=t.catch(1),t.abrupt("return",M(t.t0,a,!1));case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e,a){return t.apply(this,arguments)}}()),_=Object(N.c)("tasks/updateTask",function(){var t=Object(j.a)(E.a.mark((function t(e,a){var r,n,o,s;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=a.getState(),n=r.tasks[e.todolistId].find((function(t){return t.id===e.taskId}))){t.next=4;break}return t.abrupt("return",a.rejectWithValue("task not found in the state"));case 4:return o=Object(g.a)({deadline:n.deadline,description:n.description,priority:n.priority,startDate:n.startDate,title:n.title,status:n.status},e.model),t.next=7,L(e.todolistId,e.taskId,o);case 7:if(s=t.sent,t.prev=8,0!==s.data.resultCode){t.next=13;break}return t.abrupt("return",e);case 13:return t.abrupt("return",D(s.data,a));case 14:t.next=19;break;case 16:return t.prev=16,t.t0=t.catch(8),t.abrupt("return",M(t.t0,a));case 19:case"end":return t.stop()}}),t,null,[[8,16]])})));return function(e,a){return t.apply(this,arguments)}}()),Q={fetchTasks:X,removeTask:Y,addTask:$,updateTask:_},Z=Object(N.d)({name:"tasks",initialState:{},reducers:{},extraReducers:function(t){t.addCase(U.addTodolistTC.fulfilled,(function(t,e){t[e.payload.todolist.id]=[]})).addCase(U.removeTodolistTC.fulfilled,(function(t,e){delete t[e.payload.id]})).addCase(U.fetchTodolistsTC.fulfilled,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))})).addCase(X.fulfilled,(function(t,e){t[e.payload.todolistId]=e.payload.tasks})).addCase(Y.fulfilled,(function(t,e){var a=t[e.payload.todolistId],r=a.findIndex((function(t){return t.id===e.payload.taskId}));r>-1&&a.splice(r,1)})).addCase($.fulfilled,(function(t,e){t[e.payload.todoListId].unshift(e.payload)})).addCase(_.fulfilled,(function(t,e){var a=t[e.payload.todolistId],r=a.findIndex((function(t){return t.id===e.payload.taskId}));r>-1&&(a[r]=Object(g.a)(Object(g.a)({},a[r]),e.payload.model))}))}}),tt=a(22),et=a(170),at=a(47),rt=a(178),nt=a(167),ot=o.a.memo((function(t){var e=t.addItem,a=t.disabled,r=void 0!==a&&a,s=Object(n.useState)(""),i=Object(at.a)(s,2),c=i[0],l=i[1],u=Object(n.useState)(null),d=Object(at.a)(u,2),p=d[0],m=d[1],b=function(){var t=Object(j.a)(E.a.mark((function t(){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:""!==c.trim()?e(c,{setError:m,setTitle:l}):m("Title is required");case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement(rt.a,{variant:"outlined",disabled:r,error:!!p,value:c,onChange:function(t){l(t.currentTarget.value)},onKeyPress:function(t){null!==p&&m(null),13===t.charCode&&b()},label:"Title",helperText:p}),o.a.createElement(f.a,{color:"primary",onClick:b,disabled:r,style:{marginLeft:"5px"}},o.a.createElement(nt.a,null)))})),st=a(89),it=o.a.memo((function(t){console.log("EditableSpan called");var e=Object(n.useState)(!1),a=Object(at.a)(e,2),r=a[0],s=a[1],i=Object(n.useState)(t.value),c=Object(at.a)(i,2),l=c[0],u=c[1];return r?o.a.createElement(rt.a,{value:l,onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),t.onChange(l)}}):o.a.createElement("span",{onDoubleClick:function(){s(!0),u(t.value)}},t.value)})),ct=a(132),lt=a(168),ut=a(180);!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(c||(c={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(l||(l={}));var dt=a(23),pt=function(){return Object(tt.b)()};function ft(t){var e=pt();return Object(n.useMemo)((function(){return Object(dt.b)(t,e)}),[])}var mt=o.a.memo((function(t){var e=ft(Et),a=e.updateTask,r=e.removeTask,s=Object(n.useCallback)((function(){return r({taskId:t.task.id,todolistId:t.todolistId})}),[t.task.id,t.todolistId]),i=Object(n.useCallback)((function(e){a({taskId:t.task.id,model:{status:e.currentTarget.checked?c.Completed:c.New},todolistId:t.todolistId})}),[t.task.id,t.todolistId]),l=Object(n.useCallback)((function(e){a({taskId:t.task.id,model:{title:e},todolistId:t.todolistId})}),[t.task.id,t.todolistId]);return o.a.createElement("div",{key:t.task.id,className:t.task.status===c.Completed?"is-done":"",style:{position:"relative"}},o.a.createElement(ut.a,{checked:t.task.status===c.Completed,color:"primary",onChange:i}),o.a.createElement(it,{value:t.task.title,onChange:l}),o.a.createElement(f.a,{size:"small",onClick:s,style:{position:"absolute",top:"2px",right:"2px"}},o.a.createElement(lt.a,{fontSize:"small"})))})),bt=o.a.memo((function(t){var e=t.demo,a=void 0!==e&&e,r=Object(st.a)(t,["demo"]),s=ft(Et).fetchTasks,i=ft(kt),l=i.changeTodolistFilter,u=i.removeTodolistTC,d=i.changeTodolistTitleTC,p=pt();Object(n.useEffect)((function(){a||s(r.todolist.id)}),[]);var b=Object(n.useCallback)(function(){var t=Object(j.a)(E.a.mark((function t(e,a){var n,o,s,i,c,l;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Et.addTask({title:e,todolistId:r.todolist.id}),t.next=3,p(n);case 3:o=t.sent,Et.addTask.rejected.match(o)?(null===(s=o.payload)||void 0===s||null===(i=s.errors)||void 0===i?void 0:i.length)?(l=null===(c=o.payload)||void 0===c?void 0:c.errors[0],a.setError(l)):a.setError("Some error occured"):a.setTitle("");case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),[r.todolist.id]),v=Object(n.useCallback)((function(t){d({id:r.todolist.id,title:t})}),[r.todolist.id]),h=Object(n.useCallback)((function(t){return l({filter:t,id:r.todolist.id})}),[r.todolist.id]),g=r.tasks;"active"===r.todolist.filter&&(g=r.tasks.filter((function(t){return t.status===c.New}))),"completed"===r.todolist.filter&&(g=r.tasks.filter((function(t){return t.status===c.Completed})));var k=function(t,e,a){return o.a.createElement(m.a,{variant:r.todolist.filter===t?"outlined":"text",onClick:function(){return h(t)},color:e},a)};return o.a.createElement(ct.a,{style:{padding:"10px",position:"relative"}},o.a.createElement(f.a,{size:"small",onClick:function(){u(r.todolist.id)},disabled:"loading"===r.todolist.entityStatus,style:{position:"absolute",right:"5px",top:"5px"}},o.a.createElement(lt.a,{fontSize:"small"})),o.a.createElement("h3",null,o.a.createElement(it,{value:r.todolist.title,onChange:v})),o.a.createElement(ot,{addItem:b,disabled:"loading"===r.todolist.entityStatus}),o.a.createElement("div",null,g.map((function(t){return o.a.createElement(mt,{key:t.id,task:t,todolistId:r.todolist.id})})),!g.length&&o.a.createElement("div",{style:{padding:"10px",color:"grey"}},"No task")),o.a.createElement("div",{style:{paddingTop:"10px"}},k("all","default","All"),k("active","primary","Active"),k("completed","secondary","Completed")))})),vt=a(17),ht=function(t){return t.auth.isLoggedIn},gt=function(t){var e=t.demo,a=void 0!==e&&e;console.log("TODOLISTSLIST");var r=Object(tt.c)((function(t){return t.todolists})),s=Object(tt.c)((function(t){return t.tasks})),i=Object(tt.c)(ht),c=pt(),l=ft(kt).fetchTodolistsTC,u=Object(n.useCallback)(function(){var t=Object(j.a)(E.a.mark((function t(e,a){var r,n,o,s,i,l;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=kt.addTodolistTC(e),t.next=3,c(r);case 3:n=t.sent,kt.addTodolistTC.rejected.match(n)?(null===(o=n.payload)||void 0===o||null===(s=o.errors)||void 0===s?void 0:s.length)?(l=null===(i=n.payload)||void 0===i?void 0:i.errors[0],a.setError(l)):a.setError("Some error occured"):a.setTitle("");case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),[]);return Object(n.useEffect)((function(){!a&&i&&l()}),[]),i?o.a.createElement(o.a.Fragment,null,o.a.createElement(et.a,{container:!0,style:{padding:"20px"}},o.a.createElement(ot,{addItem:u})),o.a.createElement(et.a,{container:!0,spacing:3,style:{flexWrap:"nowrap",overflowX:"scroll"}},r.map((function(t){var e=s[t.id];return o.a.createElement(et.a,{item:!0,key:t.id},o.a.createElement("div",{style:{width:"300px"}},o.a.createElement(bt,{todolist:t,tasks:e,demo:a})))})))):o.a.createElement(vt.a,{to:"/login"})},kt=Object(g.a)(Object(g.a)({},U),J.actions),Et=Object(g.a)(Object(g.a)({},Q),Z.actions),jt=J.reducer,Ot=Z.reducer,yt=a(182),xt=a(179);function Ct(t){return o.a.createElement(xt.a,Object.assign({elevation:6,variant:"filled"},t))}function It(){var t=Object(tt.c)((function(t){return t.app.error})),e=ft(W).setAppError,a=function(t,a){"clickaway"!==a&&e({error:null})},r=null!==t;return o.a.createElement(yt.a,{open:r,autoHideDuration:6e3,onClose:a},o.a.createElement(Ct,{onClose:a,severity:"error"},t))}var wt=function(t){return t.app.status},Tt=function(t){return t.app.isInitialized},St=a(183),At=a(165),Lt=a(171),zt=a(184),Pt=a(88),Ft=W.setAppStatus,Nt=Object(N.c)("auth/login",function(){var t=Object(j.a)(E.a.mark((function t(e,a){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(Ft({status:"loading"})),t.prev=1,t.next=4,z(e);case 4:if(0!==(r=t.sent).data.resultCode){t.next=10;break}return a.dispatch(Ft({status:"succeeded"})),t.abrupt("return");case 10:return t.abrupt("return",D(r.data,a));case 11:t.next=16;break;case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",M(t.t0,a));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,a){return t.apply(this,arguments)}}()),Wt=Object(N.c)("auth/logout",function(){var t=Object(j.a)(E.a.mark((function t(e,a){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.dispatch(Ft({status:"loading"})),t.prev=1,t.next=4,P();case 4:if(0!==(r=t.sent).data.resultCode){t.next=10;break}return a.dispatch(Ft({status:"succeeded"})),t.abrupt("return");case 10:return t.abrupt("return",D(r.data,a));case 11:t.next=16;break;case 13:return t.prev=13,t.t0=t.catch(1),t.abrupt("return",M(t.t0,a));case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,a){return t.apply(this,arguments)}}()),Dt={login:Nt,logout:Wt},Mt=Object(N.d)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedIn:function(t,e){t.isLoggedIn=e.payload.value}},extraReducers:function(t){t.addCase(Nt.fulfilled,(function(t){t.isLoggedIn=!0})).addCase(Wt.fulfilled,(function(t){t.isLoggedIn=!1}))}}),Rt=(Mt.reducer,Mt.actions.setIsLoggedIn,function(){console.log("LOGIN");var t=pt(),e=Object(tt.c)(ht),a=Object(Pt.a)({validate:function(t){return t.email?t.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(){var e=Object(j.a)(E.a.mark((function e(a,r){var n,o,s,i,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Vt.login(a));case 2:n=e.sent,Nt.rejected.match(n)&&(null===(o=n.payload)||void 0===o||null===(s=o.fieldsErrors)||void 0===s?void 0:s.length)&&(c=null===(i=n.payload)||void 0===i?void 0:i.fieldsErrors[0],r.setFieldError(c.field,c.error));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()});return e?o.a.createElement(vt.a,{to:"/"}):o.a.createElement(et.a,{container:!0,justify:"center"},o.a.createElement(et.a,{item:!0,xs:4},o.a.createElement("form",{onSubmit:a.handleSubmit},o.a.createElement(St.a,null,o.a.createElement(At.a,null,o.a.createElement("p",null,"To log in get registered ",o.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank"},"here")),o.a.createElement("p",null,"or use common test account credentials:"),o.a.createElement("p",null," Email: free@samuraijs.com"),o.a.createElement("p",null,"Password: free")),o.a.createElement(Lt.a,null,o.a.createElement(rt.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.errors.email?o.a.createElement("div",null,a.errors.email):null,o.a.createElement(rt.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.errors.password?o.a.createElement("div",null,a.errors.password):null,o.a.createElement(zt.a,{label:"Remember me",control:o.a.createElement(ut.a,Object.assign({},a.getFieldProps("rememberMe"),{checked:a.values.rememberMe}))}),o.a.createElement(m.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))}),Vt=Object(g.a)(Object(g.a)({},Dt),Mt.actions),qt=Mt.reducer,Bt=Object(N.c)("application/initializeApp",function(){var t=Object(j.a)(E.a.mark((function t(e,a){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.dispatch,t.next=3,F();case 3:0===t.sent.data.resultCode&&r(Vt.setIsLoggedIn({value:!0}));case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()),Ht={initializeApp:Bt},Ut=Object(N.d)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{},extraReducers:function(t){t.addCase(Bt.fulfilled,(function(t,e){t.isInitialized=!0})).addCase(W.setAppStatus,(function(t,e){t.status=e.payload.status})).addCase(W.setAppError,(function(t,e){t.error=e.payload.error}))}}),Jt=Ut.reducer,Kt=Ut.actions,Gt=Object(g.a)(Object(g.a)({},Kt),Ht);var Xt=function(t){var e=t.demo,a=void 0!==e&&e;console.log("app");var s=Object(tt.c)(wt),i=Object(tt.c)(Tt),c=Object(tt.c)(r.selectIsLoggedIn),l=ft(Vt).logout,g=ft(Gt).initializeApp;Object(n.useEffect)((function(){a||g()}),[]);var k=Object(n.useCallback)((function(){l()}),[]);return i?o.a.createElement("div",{className:"App"},o.a.createElement(It,null),o.a.createElement(d.a,{position:"static"},o.a.createElement(p.a,null,o.a.createElement(f.a,{edge:"start",color:"inherit","aria-label":"menu"},o.a.createElement(h.a,null)),c&&o.a.createElement(m.a,{color:"inherit",onClick:k},"Log out")),"loading"===s&&o.a.createElement(b.a,null)),o.a.createElement(v.a,{fixed:!0},o.a.createElement(vt.b,{exact:!0,path:"/",render:function(){return o.a.createElement(gt,{demo:a})}}),o.a.createElement(vt.b,{path:"/login",render:function(){return o.a.createElement(Rt,null)}}))):(console.log("circular"),o.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},o.a.createElement(u.a,null)))},Yt=a(50),$t=Object(dt.c)({app:Jt,auth:qt,todolists:jt,tasks:Ot}),_t=Object(N.a)({reducer:$t,middleware:function(t){return t().prepend(Yt.a)}});window.store=_t;var Qt=a(49);i.a.render(o.a.createElement(tt.a,{store:_t},o.a.createElement(Qt.a,{basename:"/to-do-list-app"},o.a.createElement(Xt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.0fe2cfe2.chunk.js.map