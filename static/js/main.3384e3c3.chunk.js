(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(45)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),i=a.n(s),c=(a(24),a(25),a(9)),l=a(10),o=a(16),u=a(11),m=a(17),d=(a(26),a(2)),E=a(5),p=Object(d.c)().t,b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).goTab=function(e){var t=e.currentTarget.getAttribute("id");a.setState({currentTab:t})},a.state={hasError:!1,currentTab:"0",lang:new URLSearchParams(document.location.search).get("lang")||"fr",products:{deleted:[],imporved:[]}},E.a.changeLanguage(a.state.lang),a.getProducts(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getProducts",value:function(){fetch("http://vrfraswsesb.adeo.com:5555/ws/productLight/v1/getProduct?bu=1&idProduct=68612943",{withCredentials:!0,headers:{"X-ClientApiKey":"xnQ65b5le2aIbdyVtVwLDAgM296bsv3f"}}).then(function(e){return e.json()}).then(function(e){console.log(e)})}},{key:"render",value:function(){if(this.state.hasError)return r.a.createElement("h1",null,"Something went wrong.");var e=[];if("0"===this.state.currentTab)for(var t=0;t<3;t++)e.push(r.a.createElement("div",{className:"card",key:t},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:"https://m1.lmcdn.fr/media/1/5adbc78f1a8f312e825bf3f6/69724053.jpg",alt:""})),r.a.createElement("p",null,"Elagueur \xe0 deux mains acier c\xe9ment\xe9 GEOLIA 73 mm")));else if("1"===this.state.currentTab)for(var a=0;a<3;a++)e.push(r.a.createElement("div",{className:"card",key:a},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:"https://m1.lmcdn.fr/media/1/5adc5b421a8f312e825c2d9a/70925974.jpg",alt:""})),r.a.createElement("p",null,"Elagueur \xe0 deux mains acier c\xe9ment\xe9 GEOLIA 73 mm")));return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement(d.b,null,p("TITLE"))),r.a.createElement("p",null,r.a.createElement(d.b,null,p("TEXT"))),r.a.createElement("div",{className:"tabs current-tab--".concat(this.state.currentTab)},r.a.createElement("button",{id:"0",className:"0"===this.state.currentTab?"active":"",onClick:this.goTab},r.a.createElement(d.b,null,p("IMPROVED"))),r.a.createElement("button",{id:"1",className:"1"===this.state.currentTab?"active":"",onClick:this.goTab},r.a.createElement(d.b,null,p("DELETED")))),r.a.createElement("div",{className:"cards"},e))}}]),t}(n.PureComponent);var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=a(15),g=a.n(h);E.a.use(g.a).init({resources:{en:{translations:{TITLE:"Quelle utilit\xe9 ont tes avis produits ?",TEXT:"(+) 300 produits Adeo et Leroy Merlin sont \xe9tudi\xe9s dont 68 d\xe9j\xe0 am\xe9lior\xe9s et 96 d\xe9r\xe9f\xe9renc\xe9s !",IMPROVED:"Am\xe9lior\xe9s",DELETED:"Supprim\xe9s"}},fr:{translations:{TITLE:"Quelle utilit\xe9 ont tes avis produits ?",TEXT:"(+) 300 produits Adeo et Leroy Merlin sont \xe9tudi\xe9s dont 68 d\xe9j\xe0 am\xe9lior\xe9s et 96 d\xe9r\xe9f\xe9renc\xe9s !",IMPROVED:"Am\xe9lior\xe9s",DELETED:"Supprim\xe9s"}},pt:{translations:{TITLE:"Quelle utilit\xe9 ont tes avis produits ?",TEXT:"(+) 300 produits Adeo et Leroy Merlin sont \xe9tudi\xe9s dont 68 d\xe9j\xe0 am\xe9lior\xe9s et 96 d\xe9r\xe9f\xe9renc\xe9s !",IMPROVED:"Am\xe9lior\xe9s",DELETED:"Supprim\xe9s"}}},fallbackLng:"en",debug:!0,ns:["translations"],defaultNS:"translations",keySeparator:!1,interpolation:{escapeValue:!1,formatSeparator:","},react:{wait:!0}});var v=E.a;i.a.render(r.a.createElement(d.a,{i18n:v},r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.3384e3c3.chunk.js.map