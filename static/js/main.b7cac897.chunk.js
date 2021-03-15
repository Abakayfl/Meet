(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{209:function(e,t,n){},211:function(e,t,n){},363:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(55),s=n.n(r),c=(n(209),n(24)),o=n.n(c),i=n(51),u=n(21),l=n(30),d=n(22),h=n(23),f=(n(211),n(174)),p=n.n(f),b=n(2),j=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isExpanded:!1},e.handleExpandEvent=function(){!1===e.state.isExpanded?e.setState({isExpanded:!0}):e.setState({isExpanded:!1})},e.renderExpandedComponent=function(){var t=e.props.event;if(e.state.isExpanded)return Object(b.jsx)("div",{className:"event",children:Object(b.jsxs)("div",{className:"eventExpanded",children:[Object(b.jsxs)("p",{className:"description",children:[Object(b.jsx)("span",{}),t.description]}),Object(b.jsxs)("p",{className:"eventCard--organizer",children:[Object(b.jsx)("span",{children:"Organizer: "}),t.organizer.email]})]})})},e.renderButtonText=function(){return e.state.isExpanded?"Hide details":"Show details"},e.formatTime=function(){var t=e.props.event.start.dateTime,n=p()(t).format("dddd, MMMM Do YYYY, h:mm a");return Object(b.jsx)("span",{className:"start-dateTime",children:"".concat(n)})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(b.jsxs)("div",{className:"event",children:[Object(b.jsxs)("div",{className:"eventExpanded",children:[Object(b.jsx)("h2",{className:"summary",children:e.summary}),Object(b.jsxs)("p",{className:"eventCard--date",children:[Object(b.jsx)("span",{children:"Starts at: "}),this.formatTime()]}),Object(b.jsxs)("p",{className:"eventCard--date",children:[Object(b.jsx)("span",{children:"Timezone: "}),e.start.timeZone]}),Object(b.jsxs)("p",{className:"location",children:[Object(b.jsx)("span",{}),e.location]})]}),Object(b.jsx)("div",{children:this.renderExpandedComponent()}),Object(b.jsx)("button",{type:"button",className:"btn-details",onClick:this.handleExpandEvent,children:this.renderButtonText()})]})}}]),n}(a.Component),v=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(b.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(j,{event:e})},e.id)}))})}}]),n}(a.Component),m=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"Alert",children:Object(b.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),x=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(m),O=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(m),g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#ffe100",a}return n}(m),w=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={locations:e.props.locations,query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"CitySearch",children:[Object(b.jsx)(x,{text:this.state.infoText}),Object(b.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(b.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(b.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(b.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(b.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),y=n(29),k=n(371),S=n(370),E=n(189),T=n(95),C=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(y.a)(n,2),s=r[0],c=r[1];Object(a.useEffect)((function(){c((function(){return o()}))}),[t]);var o=function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))},i=["#EB9021","#EB2821","#EA21A2","#A721EB","#1f7eea"];return Object(b.jsx)(k.a,{height:400,children:Object(b.jsx)(S.a,{width:400,height:400,children:Object(b.jsx)(E.a,{data:s,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},children:s.map((function(e,t){return Object(b.jsx)(T.a,{fill:i[t%i.length],name:e.name},"cell-".concat(t))}))})})})},N=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:"24"},e.handleChange=function(t){var n=t.target.value;if(e.props.updateEvents(null,n),!(n<0|n>=101))return e.setState({errorText:"",numberOfEvents:n});e.setState({errorText:"Please enter a number between 0 and 100"})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.numberOfEvents;return Object(b.jsx)("div",{className:"numberOfEvents",children:Object(b.jsxs)("label",{id:"numevents-label",children:["Number of events:",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(O,{text:this.state.errorText}),Object(b.jsx)("input",{type:"number",className:"number",value:e,onChange:this.handleChange})]})})}}]),n}(a.Component),Z=n(198),W=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],q=n(123),A=n.n(q),I=n(78),L=n.n(I),B=function(e){var t=e.map((function(e){return e.location}));return Object(Z.a)(new Set(t))},M=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},D=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://4yqb1ohnq0.execute-api.ca-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(i.a)(o.a.mark((function e(){var t,n,a,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return L.a.done(),e.abrupt("return",{events:W,locations:B(W)});case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),L.a.done(),e.abrupt("return",{events:JSON.parse(t).events,locations:B(JSON.parse(t).events)});case 8:return e.next=10,U();case 10:if(!(n=e.sent)){e.next=20;break}return M(),a="https://4yqb1ohnq0.execute-api.ca-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,A.a.get(a);case 16:return(r=e.sent).data&&(s=B(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(s))),L.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(i.a)(o.a.mark((function e(){var t,n,a,r,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,J(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,A.a.get("https://4yqb1ohnq0.execute-api.ca-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return s=e.sent,c=s.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&D(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=n(367),F=n(368),Y=n(194),H=n(195),P=n(79),_=n(199),G=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:"24",currentLocation:"all",alertText:"",tokenCheck:!1},e.updateEvents=function(t,n){var a=e.state,r=a.currentLocation,s=a.numberOfEvents;t?R().then((function(n){var a=("all"===t?n:n.filter((function(e){return e.location===t}))).slice(0,s);e.setState({events:a,currentLocation:t})})):R().then((function(t){var a=("all"===r?t:t.filter((function(e){return e.location===r}))).slice(0,n);e.setState({events:a,numberOfEvents:n})}))},e.ifOnline=function(){if(navigator.onLine)return e.setState({infoText:""});e.setState({infoText:"You are currently offline- events may not be up to date"})},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(" ").shift(),number:t}}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t,n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=localStorage.getItem("access_token"))){e.next=7;break}return e.next=4,J(t);case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0=!1;case 8:n=e.t0,this.setState({tokenCheck:n}),!0===n&&this.updateEvents(),a=new URLSearchParams(window.location.search),r=a.get("code"),this.mounted=!0,r&&!0===this.mounted&&!1===n&&(this.setState({tokenCheck:!0}),this.updateEvents());case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{id:"header-container",children:[Object(b.jsxs)("h1",{id:"header",children:[Object(b.jsx)("span",{id:"devel",children:"WebDev"}),Object(b.jsx)("span",{id:"for",children:"for"}),Object(b.jsx)("span",{id:"Everybody",children:"Everybody"})]}),Object(b.jsx)(g,{text:this.state.infoText})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("p",{id:"subheader",children:["Want to improve your web development skills?",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Explore upcoming events in ",Object(b.jsx)("span",{id:"webdev-header",children:"Web Development"})," from around the world!"]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{id:"city-label",children:["Select your city:",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(w,{locations:this.state.locations,updateEvents:this.updateEvents})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(N,{numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents}),Object(b.jsx)("br",{}),Object(b.jsx)("h4",{children:"Events in each city"}),Object(b.jsxs)("div",{className:"data-vis-wrapper",children:[Object(b.jsx)(C,{locations:this.state.locations,events:this.state.events}),Object(b.jsx)(k.a,{height:400,children:Object(b.jsxs)(z.a,{children:[Object(b.jsx)(F.a,{}),Object(b.jsx)(Y.a,{type:"category",dataKey:"city",name:"city"}),Object(b.jsx)(H.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),Object(b.jsx)(P.a,{cursor:{strokeDasharray:"3 3"}}),Object(b.jsx)(_.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(b.jsx)(v,{events:this.state.events})]})}}]),n}(a.Component),K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,372)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))},Q=n(196);s.a.render(Object(b.jsx)(G,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");K?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):V(t,e)}))}}(),X(),Q.config("2f4c5cc746384564b98f18a8b1625a45").install()}},[[363,1,2]]]);
//# sourceMappingURL=main.b7cac897.chunk.js.map