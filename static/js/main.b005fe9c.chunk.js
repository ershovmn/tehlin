(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,n){e.exports=n(174)},173:function(e,t,n){},174:function(e,t,n){"use strict";n.r(t);n(136),n(161);var a=n(0),o=n.n(a),s=n(20),r=n.n(s),i=n(12),l=n.n(i),c=n(28),u=n(29),m=n(31),p=n(30),d=n(32),h=n(6),f=(n(172),n(76)),g=n.n(f),v=(n(173),n(77)),N=n.n(v),b=n(78),j=n.n(b),E=(o.a.Component,function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).sendForm=function(){e.state.firstName.length>0&&e.state.lastName.length>0&&e.state.groupID.length>0&&(console.log("hello"),fetch("http://localhost/api/v0/firstlogin",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userid:e.state.userID,firstname:e.state.firstName,lastname:e.state.lastName,middlename:e.state.middleName,groupid:e.state.groupID,gender:e.state.gender})}).then(function(e){return e.json()}).then(function(e){console.log(e)}))},e.state={firstName:"",lastName:"",middleName:"",userID:null,groupID:"",gender:!0,fetchedUser:null},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;l.a.sendPromise("VKWebAppOpenPayForm",{app_id:7156583,action:"pay-to-user",params:{amount:1,user_id:188163112}}).then(function(e){console.log(e)}).catch(function(e){console.log(e)}),l.a.sendPromise("VKWebAppGetUserInfo",{}).then(function(t){console.log(t),"\u041c\u0435\u0449\u0435\u0440\u0441\u043a\u0430\u044f"===t.last_name&&(t.last_name="\u0415\u0440\u0449\u0435\u0440\u0441\u043a\u0430\u044f"),"\u0415\u0440\u0448\u043e\u0432"===t.last_name&&(t.last_name="\u0415\u0440\u0449\u0435\u0440\u0441\u043a\u0438\u0439"),e.setState({firstName:t.first_name,lastName:t.last_name,middleName:"",userID:t.id,groupID:"",gender:2===t.sex})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return console.log(this.state),o.a.createElement(h.j,{id:this.props.id},o.a.createElement(h.d,null,o.a.createElement(h.h,{top:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",value:this.state.lastName,onChange:function(t){return e.setState({lastName:t.target.value})},status:this.state.lastName.length>0?"valid":"error"}),o.a.createElement(h.h,{top:"\u0418\u043c\u044f",value:this.state.firstName,onChange:function(t){return e.setState({firstName:t.target.value})},status:this.state.firstName.length>0?"valid":"error"}),o.a.createElement(h.h,{top:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",value:this.state.middleName,onChange:function(t){return e.setState({middleName:t.target.value})}}),o.a.createElement(h.l,{value:this.state.gender?"m":"f",top:"\u041f\u043e\u043b",placeholder:"",onChange:function(t){return e.setState({gender:"m"===t.target.value})}},o.a.createElement("option",{value:"m"},"\u041c\u0443\u0436\u0441\u043a\u043e\u0439"),o.a.createElement("option",{value:"f"},"\u0416\u0435\u043d\u0441\u043a\u0438\u0439")),o.a.createElement(h.h,{top:"\u041d\u043e\u043c\u0435\u0440 \u0433\u0440\u0443\u043f\u043f\u044b",value:this.state.groupID,onChange:function(t){return e.setState({groupID:t.target.value})},status:this.state.groupID.length>0?"valid":"error"}),o.a.createElement(h.b,{size:"xl",onClick:function(){return e.sendForm()}},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))}}]),t}(o.a.Component)),I=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.state={activePanel:"firstlogin",fetchedUser:null,popout:null},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;l.a.sendPromise("VKWebAppGetUserInfo",{}).then(function(t){e.setState({fetchedUser:t})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return o.a.createElement(h.m,{activePanel:this.state.activePanel,popout:this.state.popout},o.a.createElement(h.j,{id:"black"}),o.a.createElement(E,{id:"firstlogin"}))}}]),t}(o.a.Component);l.a.send("VKWebAppInit",{}),r.a.render(o.a.createElement(I,null),document.getElementById("root"))},76:function(e,t,n){e.exports=n.p+"static/media/persik.4e1ec840.png"}},[[135,1,2]]]);
//# sourceMappingURL=main.b005fe9c.chunk.js.map