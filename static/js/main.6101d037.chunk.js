(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,a){e.exports=a(173)},173:function(e,t,a){"use strict";a.r(t);a(136),a(161);var n=a(0),r=a.n(n),o=a(25),s=a.n(o),l=a(17),i=a.n(l),c=a(18),u=a(19),m=a(21),p=a(20),h=a(22),d=a(4),g=(a(172),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).sendForm=function(){e.state.firstName.length>0&&e.state.lastName.length>0&&e.state.groupID.length>0&&(console.log("hello"),fetch(sessionStorage.getItem("address")+"/api/v0/firstlogin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userid:e.state.userID,firstname:e.state.firstName,lastname:e.state.lastName,middlename:e.state.middleName,groupid:e.state.groupID,gender:e.state.gender})}).then(function(e){return e.json()}).then(function(t){sessionStorage.setItem("token",t.token),e.props.go("home")}))},e.state={firstName:"",lastName:"",middleName:"",userID:null,groupID:"",gender:!0,fetchedUser:null},e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;i.a.sendPromise("VKWebAppGetUserInfo",{}).then(function(t){console.log(t),"\u041c\u0435\u0449\u0435\u0440\u0441\u043a\u0430\u044f"===t.last_name&&(t.last_name="\u0415\u0440\u0449\u0435\u0440\u0441\u043a\u0430\u044f"),"\u0415\u0440\u0448\u043e\u0432"===t.last_name&&(t.last_name="\u0415\u0440\u0449\u0435\u0440\u0441\u043a\u0438\u0439"),e.setState({firstName:t.first_name,lastName:t.last_name,middleName:"",userID:t.id,groupID:"",gender:2===t.sex})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.firstName.length>0&&this.state.lastName.length>0&&this.state.groupID.length>0;return r.a.createElement(d.j,{id:this.props.id},r.a.createElement(d.k,null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement("p",null,"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!!!"),r.a.createElement("p",null,"\u0424\u0418\u041e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0441\u043b\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043c\u043e\u0434\u0435\u0440\u0430\u0442\u043e\u0440\u0430!"),r.a.createElement("p",null,'\u0414\u0430\u043d\u043d\u043e\u0435 \u0424\u0418\u041e \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u043e \u0432 \u043f\u043e\u043b\u0435 \u043e\u0442\u0447\u0435\u0442\u0430 "\u0432\u044b\u043f\u043e\u043b\u043d\u0438\u043b"'),r.a.createElement(d.d,null,r.a.createElement(d.h,{top:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",value:this.state.lastName,onChange:function(t){return e.setState({lastName:t.target.value})},status:this.state.lastName.length>0?"valid":"error"}),r.a.createElement(d.h,{top:"\u0418\u043c\u044f",value:this.state.firstName,onChange:function(t){return e.setState({firstName:t.target.value})},status:this.state.firstName.length>0?"valid":"error"}),r.a.createElement(d.h,{top:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",value:this.state.middleName,onChange:function(t){return e.setState({middleName:t.target.value})},status:"valid"}),r.a.createElement(d.m,{value:this.state.gender?"m":"f",top:"\u041f\u043e\u043b",onChange:function(t){return e.setState({gender:"m"===t.target.value})},status:"valid"},r.a.createElement("option",{value:"m"},"\u041c\u0443\u0436\u0441\u043a\u043e\u0439"),r.a.createElement("option",{value:"f"},"\u0416\u0435\u043d\u0441\u043a\u0438\u0439")),r.a.createElement(d.h,{top:"\u041d\u043e\u043c\u0435\u0440 \u0433\u0440\u0443\u043f\u043f\u044b",value:this.state.groupID,onChange:function(t){return e.setState({groupID:t.target.value})},status:this.state.groupID.length>0?"valid":"error"}),r.a.createElement(d.a,{size:"xl",disabled:!t,onClick:function(){return e.sendForm()}},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))}}]),t}(r.a.Component)),f=a(82),v=a.n(f),E=a(83),b=a.n(E),k=a(38),S=a.n(k),j=a(39),I=a.n(j),y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).state={activePanel:"main",name:"hello",popout:r.a.createElement(d.l,null),report:{},items:[{type:"text"},{type:"text"},{type:"text"},{type:"text"}]},e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(sessionStorage.getItem("address"),"/api/v0/report/").concat(this.props.reportID,"/getdata"),{method:"GET",headers:{"tehnarenok-token":sessionStorage.getItem("token")}}).then(function(e){return e.json()}).then(function(t){t.error?e.props.goTo("error"):e.setState({report:t.report})})}},{key:"render",value:function(){return console.log(this.props),r.a.createElement(d.j,{id:this.props.id},r.a.createElement(d.k,{left:r.a.createElement(d.f,{onClick:this.props.goTo},Object(d.q)()===d.g?r.a.createElement(S.a,null):r.a.createElement(I.a,null))},this.state.report.name),r.a.createElement(d.e,{title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},r.a.createElement("p",null,"\u0414\u043b\u044f \u043e\u0442\u0447\u0435\u0442\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b\u044b \u0441 \u043a\u043e\u0434\u043e\u043c."),r.a.createElement("p",null,"\u0422\u0435\u043a\u0441\u0442 \u0432 \u043e\u0442\u0447\u0435\u0442\u0435 \u043c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043b\u0438\u043a\u043d\u0443\u0432 \u043d\u0430 \u0437\u043d\u0430\u0447\u043e\u043a +")),r.a.createElement(d.e,{title:"\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u043e\u0442\u0447\u0435\u0442\u0430"},r.a.createElement(d.i,null,r.a.createElement(d.b,{key:"0"},"\u0422\u0438\u0442\u0443\u043b\u044c\u043d\u044b\u0439 \u043b\u0438\u0441\u0442"),this.state.items&&this.state.items.length>0&&this.state.items.map(function(e,t){return r.a.createElement(d.b,{key:t+1,draggable:!0},e.type)}))))}}]),t}(r.a.Component),O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).onRefresh=function(){e.setState({popout:r.a.createElement(d.l,null)}),fetch(sessionStorage.getItem("address")+"/api/v0/allreports",{method:"GET",headers:{"tehnarenok-token":sessionStorage.getItem("token")}}).then(function(e){return e.json()}).then(function(t){console.log(t),t.error?e.setState({activePanel:"error"}):e.setState({popout:null,reports:t.reports})})},e.onClickReport=function(t,a){switch(a){case"draggingList":e.setState({activePanel:"reportdragginglist",reportID:t})}},e.goTo=function(t){console.log("goTo"),e.setState({activePanel:t})},e.state={activePanel:"reports",reports:[],popout:r.a.createElement(d.l,null),isFetching:!1,reportID:null,error:!1},e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(sessionStorage.getItem("address")+"/api/v0/allreports",{method:"GET",headers:{"tehnarenok-token":sessionStorage.getItem("token")}}).then(function(e){return e.json()}).then(function(t){e.setState({reports:t.reports,popout:null})})}},{key:"render",value:function(){var e=this;return r.a.createElement(d.p,{id:this.props.id,activePanel:this.state.activePanel,popout:this.state.popout},r.a.createElement(d.j,{id:"reports"},r.a.createElement(d.k,null,"\u041e\u0442\u0447\u0435\u0442\u044b"),r.a.createElement(d.e,null,r.a.createElement(d.i,null,this.state.reports&&this.state.reports.length>0&&this.state.reports.map(function(t){return r.a.createElement(d.b,{key:t._id,description:t.discription,onClick:function(){return e.onClickReport(t._id,t.structureID)}},t.name)})))),r.a.createElement(d.j,{id:"error"},r.a.createElement(d.k,{left:r.a.createElement(d.f,{onClick:function(){return e.setState({activePanel:"reports"})}},Object(d.q)()===d.g?r.a.createElement(S.a,null):r.a.createElement(I.a,null))},"\u041e\u0448\u0438\u0431\u043a\u0430")),r.a.createElement(y,{id:"reportdragginglist",reportID:this.state.reportID,goTo:function(){return e.setState({activePanel:"reports"})}}))}}]),t}(r.a.Component),N=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).state={activeStory:"reports"},e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(d.c,{id:this.props.id,activeStory:this.state.activeStory,tabbar:r.a.createElement(d.n,null,r.a.createElement(d.o,{onClick:function(){return e.setState({activeStory:"reports"})},selected:"reports"===this.state.activeStory,text:"\u041e\u0442\u0447\u0435\u0442\u044b"},r.a.createElement(v.a,null)),r.a.createElement(d.o,{onClick:function(){return e.setState({activeStory:"settings"})},selected:"settings"===this.state.activeStory,text:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},r.a.createElement(b.a,null)))},r.a.createElement(O,{id:"reports"}),r.a.createElement(d.p,{id:"settings",activePanel:"settings"},r.a.createElement(d.j,{id:"settings"},r.a.createElement(d.k,null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"))))}}]),t}(r.a.Component),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).go=function(e){a.setState({popout:null,activePanel:e})},a.state={activePanel:"black",fetchedUser:null,popout:r.a.createElement(d.l,null),token:null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;i.a.sendPromise("VKWebAppGetUserInfo",{}).then(function(t){e.setState({fetchedUser:t}),fetch(sessionStorage.getItem("address")+"/api/v0/gettoken?userid=".concat(e.state.fetchedUser.id),{method:"GET"}).then(function(e){return e.json()}).then(function(t){t.token?(sessionStorage.setItem("token",t.token),e.setState({activePanel:"home",popout:null,token:t.token})):e.setState({activePanel:"firstlogin",popout:null})})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return console.log(this.state),r.a.createElement(d.p,{activePanel:this.state.activePanel,popout:this.state.popout},r.a.createElement(d.j,{id:"black"}," "),r.a.createElement(g,{id:"firstlogin",go:this.go}),r.a.createElement(N,{id:"home"}))}}]),t}(r.a.Component);i.a.send("VKWebAppInit",{}),sessionStorage.setItem("address","https://4239c859.ngrok.io"),i.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppUpdateConfig":var t=document.createAttribute("scheme");t.value=e.detail.data.scheme?e.detail.data.scheme:"client_light",document.body.attributes.setNamedItem(t)}}),s.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.6101d037.chunk.js.map