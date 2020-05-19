(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__Jjz_1",card:"Cards_card__16HjD",infected:"Cards_infected__3xuGo",recovered:"Cards_recovered__2Fzsy",deaths:"Cards_deaths__3QbNn"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),u=a(6),s=a.n(u),i=a(10),l=a(73),d=a(74),m=a(84),p=a(83),f=a(226),v=a(231),h=a(227),b=a(228),E=a(229),y=a(32),g=a.n(y),x=a(13),_=a.n(x),w=a(33),C=a.n(w),j=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return r.a.createElement("div",{className:_.a.container},r.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:C()(_.a.card,_.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(b.a,{variant:"h5"},a?r.a.createElement(g.a,{start:0,end:a.value,duration:2.5,separator:","}):r.a.createElement(E.a,{animation:"wave"})),r.a.createElement(b.a,{color:"textSecondary"},o?new Date(o).toDateString():r.a.createElement(E.a,{animation:"wave"})),r.a.createElement(b.a,{variant:"body2"},"Number of active cases by COVID-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:C()(_.a.card,_.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(b.a,{variant:"h5"},n?r.a.createElement(g.a,{start:0,end:n.value,duration:2.5,separator:","}):r.a.createElement(E.a,{animation:"wave"})),r.a.createElement(b.a,{color:"textSecondary"},o?new Date(o).toDateString():r.a.createElement(E.a,{animation:"wave"})),r.a.createElement(b.a,{variant:"body2"},"Number of recoveries cases by COVID-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:C()(_.a.card,_.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(b.a,{variant:"h5"},c?r.a.createElement(g.a,{start:0,end:c.value,duration:2.5,separator:","}):r.a.createElement(E.a,{animation:"wave"})),r.a.createElement(b.a,{color:"textSecondary"},o?new Date(o).toDateString():r.a.createElement(E.a,{animation:"wave"})),r.a.createElement(b.a,{variant:"body2"},"Number of Deaths cases by COVID-19")))))},O=a(31),D=a(34),k=a.n(D),S="https://covid19.mathdro.id/api",N=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=S,t&&(a="".concat(S,"/countries/").concat(t)),e.prev=2,e.next=5,k.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,l={confirmed:c,recovered:o,deaths:u,lastUpdate:i},e.abrupt("return",l);case 15:e.prev=15,e.t0=e.catch(2);case 17:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(S,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(S,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=a(45),G=a(80),J=a.n(G),U=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)([]),d=Object(O.a)(l,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p]);var f=m.length?r.a.createElement(A.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infercted",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,v=a?r.a.createElement(A.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{labels:"Patients",backgroundColor:["rgba(0,0,255, 0.5)","rgba(0, 255,0, 0.5)","rgba(255,0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null;return r.a.createElement("div",{className:J.a.container},u?v:f)},V=a(232),q=a(230),z=a(81),P=a.n(z),Q=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(O.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(V.a,{className:P.a.formcontrol},r.a.createElement(q.a,{default:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},R=a(46),F=a.n(R),H=a(82),M=a.n(H),Y=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:F.a.container},r.a.createElement("img",{className:F.a.img,src:M.a}),r.a.createElement(j,{data:t}),r.a.createElement(Q,{handleCountryChange:this.handleCountryChange}),r.a.createElement(U,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(Y,null),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"App_container__1qmvG",img:"App_img__3q6sI"}},80:function(e,t,a){e.exports={container:"Chart_container__2nQw-"}},81:function(e,t,a){e.exports={formcontrol:"CountryPicker_formcontrol__2aY4C"}},82:function(e,t,a){e.exports=a.p+"static/media/covid.d7265326.png"},87:function(e,t,a){e.exports=a(207)}},[[87,1,2]]]);
//# sourceMappingURL=main.fc615c93.chunk.js.map