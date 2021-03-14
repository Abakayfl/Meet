(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(21),o=n.n(a),s=(n(29),n(2)),c=n(6),i=n(4),u=n(3),l=(n(30),n(22)),d=n.n(l),h=n(0),p=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={isExpanded:!1},e.handleExpandEvent=function(){!1===e.state.isExpanded?e.setState({isExpanded:!0}):e.setState({isExpanded:!1})},e.renderExpandedComponent=function(){var t=e.props.event;if(e.state.isExpanded)return Object(h.jsx)("div",{className:"event",children:Object(h.jsxs)("div",{className:"eventExpanded",children:[Object(h.jsxs)("p",{className:"description",children:[Object(h.jsx)("span",{}),t.description]}),Object(h.jsxs)("p",{className:"eventCard--organizer",children:[Object(h.jsx)("span",{children:"Organizer: "}),t.organizer.email]})]})})},e.renderButtonText=function(){return e.state.isExpanded?"Hide details":"Show details"},e.formatTime=function(){var t=e.props.event.start.dateTime,n=d()(t).format("dddd, MMMM Do YYYY, h:mm a");return Object(h.jsx)("span",{className:"start-dateTime",children:"".concat(n)})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(h.jsxs)("div",{className:"event",children:[Object(h.jsxs)("div",{className:"eventExpanded",children:[Object(h.jsx)("h2",{className:"summary",children:e.summary}),Object(h.jsxs)("p",{className:"eventCard--date",children:[Object(h.jsx)("span",{children:"Starts at: "}),this.formatTime()]}),Object(h.jsxs)("p",{className:"eventCard--date",children:[Object(h.jsx)("span",{children:"Timezone: "}),e.start.timeZone]}),Object(h.jsxs)("p",{className:"location",children:[Object(h.jsx)("span",{}),e.location]})]}),Object(h.jsx)("div",{children:this.renderExpandedComponent()}),Object(h.jsx)("button",{type:"button",className:"btn-details",onClick:this.handleExpandEvent,children:this.renderButtonText()})]})}}]),n}(r.Component),f=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(h.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(p,{event:e})},e.id)}))})}}]),n}(r.Component),b=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).getStyle=function(){return{color:r.color}},r.color=null,r}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"Alert",children:Object(h.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(r.Component),v=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).color="blue",r}return n}(b),j=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).color="red",r}return n}(b),m=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).color="#ffe100",r}return n}(b),x=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={locations:e.props.locations,query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var r=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==r.length)return e.setState({query:n,suggestions:r,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"CitySearch",children:[Object(h.jsx)(v,{text:this.state.infoText}),Object(h.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(h.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(h.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(r.Component),O=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={numberOfEvents:"24"},e.handleChange=function(t){var n=t.target.value;if(e.props.updateEvents(null,n),!(n<0|n>=101))return e.setState({errorText:"",numberOfEvents:n});e.setState({errorText:"Please enter a number between 0 and 100"})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.numberOfEvents;return Object(h.jsx)("div",{className:"numberOfEvents",children:Object(h.jsxs)("label",{id:"numevents-label",children:["Number of events:",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(j,{text:this.state.errorText}),Object(h.jsx)("input",{type:"number",className:"number",value:e,onChange:this.handleChange})]})})}}]),n}(r.Component),g=n(7),w=n.n(g),y=n(8),k=n(24),S=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],T=n(10),E=n.n(T),C=n(9),N=n.n(C),Z=function(e){var t=e.map((function(e){return e.location}));return Object(k.a)(new Set(t))},W=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},q=function(){var e=Object(y.a)(w.a.mark((function e(t){var n,r,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://4yqb1ohnq0.execute-api.ca-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return r=e.sent,(a=r.access_token)&&localStorage.setItem("access_token",a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(y.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(y.a)(w.a.mark((function e(){var t,n,r,a,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return N.a.done(),e.abrupt("return",S);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),N.a.done(),e.abrupt("return",{events:JSON.parse(t).events,locations:Z(JSON.parse(t).events)});case 8:return e.next=10,A();case 10:if(!(n=e.sent)){e.next=20;break}return W(),r="https://4yqb1ohnq0.execute-api.ca-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,E.a.get(r);case 16:return(a=e.sent).data&&(o=Z(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(o))),N.a.done(),e.abrupt("return",a.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(y.a)(w.a.mark((function e(){var t,n,r,a,o,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,I(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return r=new URLSearchParams(window.location.search),e.next=13,r.get("code");case 13:if(a=e.sent){e.next=20;break}return e.next=17,E.a.get("https://4yqb1ohnq0.execute-api.ca-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",a&&q(a));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={events:[],locations:[],numberOfEvents:"24",currentLocation:"all",alertText:""},e.updateEvents=function(t,n){var r=e.state,a=r.currentLocation,o=r.numberOfEvents;t?M().then((function(n){var r=("all"===t?n:n.filter((function(e){return e.location===t}))).slice(0,o);e.setState({events:r,currentLocation:t})})):M().then((function(t){var r=("all"===a?t:t.filter((function(e){return e.location===a}))).slice(0,n);e.setState({events:r,numberOfEvents:n})}))},e.ifOnline=function(){if(navigator.onLine)return e.setState({infoText:""});e.setState({infoText:"You are currently offline- events may not be up to date"})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,M().then((function(t){e.mounted&&e.setState({events:t,locations:Z(t)})})),this.ifOnline()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{id:"header-container",children:[Object(h.jsxs)("h1",{id:"header",children:[Object(h.jsx)("span",{id:"devel",children:"WebDev"}),Object(h.jsx)("span",{id:"for",children:"for"}),Object(h.jsx)("span",{id:"Everybody",children:"Everybody"})]}),Object(h.jsx)(m,{text:this.state.infoText})]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("p",{id:"subheader",children:["Want to improve your web development skills?",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Explore upcoming events in ",Object(h.jsx)("span",{id:"webdev-header",children:"Web Development"})," from around the world!"]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{id:"city-label",children:["Select your city:",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(x,{locations:this.state.locations,updateEvents:this.updateEvents})]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(O,{numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents}),Object(h.jsx)("br",{}),Object(h.jsx)(f,{events:this.state.events})]})}}]),n}(r.Component),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),o(e),s(e)}))},U=n(23);o.a.render(Object(h.jsx)(L,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");B?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):J(t,e)}))}}(),D(),U.config("2f4c5cc746384564b98f18a8b1625a45").install()}},[[52,1,2]]]);
//# sourceMappingURL=main.79e41144.chunk.js.map