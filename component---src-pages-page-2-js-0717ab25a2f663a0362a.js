(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{237:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),l=a(79),r=a(78),i=a(88);t.default=Object(r.c)(function(){return o.a.createElement(i.a,null,o.a.createElement("h1",null,o.a.createElement(l.a,{id:"hello"})),o.a.createElement("p",null,o.a.createElement(l.a,{id:"welcome2"})),o.a.createElement(r.a,{to:"/"},o.a.createElement(l.a,{id:"goback"})))})},77:function(e,t,a){var n=a(91).concat(a(90),a(89));e.exports={localeData:n,languages:[{value:"en",text:"English"},{value:"ko",text:"한국어"},{value:"de",text:"Deutsch"}]}},78:function(e,t,a){"use strict";a(62);var n=a(95),o=a.n(n),l=a(1),r=a.n(l),i=a(19),c=a.n(i),u=a(86),s=a.n(u),g=function(e,t){var a=e.to,n=e.children,l=o()(e,["to","children"]),i=t.language,c=i.locale?"/"+i.locale+a:""+a;return r.a.createElement(s.a,Object.assign({to:c},l),n)};g.propTypes={to:c.a.string.isRequired,children:c.a.node.isRequired},g.contextTypes={language:c.a.object};var m=g,d=a(33),h=a.n(d),p=a(79),f=a(77);Object(p.c)(f.localeData);var v=function(e){var t=function(t){function n(e){var a;a=t.call(this)||this;var n=e.pathContext,o=n.locale,l=n.languages,r=n.originalPath;return a.state={language:{locale:o,languages:l,originalPath:r}},a}h()(n,t);var o=n.prototype;return o.getChildContext=function(){return{language:this.state.language}},o.render=function(){var t=this.state.language.locale||"en",n=a(84)("./"+t+".js");return r.a.createElement(p.b,{locale:t,messages:n},r.a.createElement(e,this.props))},n}(l.Component);return t.childContextTypes={language:c.a.object},t};a.d(t,"a",function(){return m}),a.d(t,"c",function(){return v}),a.d(t,"b",function(){return f.languages}),a.d(t,!1,function(){return f.localeData})},81:function(e,t){e.exports={title:"Gatsby 한국어",hello:"여러분 안녕하세요",welcome:"개츠비 사이트에 오신 것을 환영합니다",gopage2:"페이지 2로 이동",build:"이제 새로운 것을 만들어 보세요.",welcome2:"페이지 2 입니다",goback:"홈페이지로 가기"}},82:function(e,t){e.exports={title:"Gatsby English",hello:"Hi people",welcome:"Welcome to your new Gatsby site.",gopage2:"Go to page 2",build:"Now go build something great.",welcome2:"Welcome to page 2",goback:"Go back to the homepage"}},83:function(e,t){e.exports={title:"Gatsby Deutsch",hello:"hallo Leute",welcome:"Willkommen auf Ihrer neuen Gatsby-Site.",gopage2:"Gehen Sie zu Seite 2",build:"Jetzt mach etwas Großartiges.",welcome2:"Willkommen auf Seite 2",goback:"Gehe zurück zur Startseite"}},84:function(e,t,a){var n={"./de.js":83,"./en.js":82,"./index.js":77,"./ko.js":81};function o(e){var t=l(e);return a(t)}function l(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}o.keys=function(){return Object.keys(n)},o.resolve=l,e.exports=o,o.id=84},88:function(e,t,a){"use strict";var n=a(1),o=a.n(n),l=a(242),r=a.n(l),i=a(79),c=a(78),u=a(33),s=a.n(u),g=a(19),m=a.n(g),d=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={value:""},t.handleChange=function(e){var a=t.context.language.originalPath,n=e.target.value;n!==t.state.value&&t.setState({value:n},function(){localStorage.setItem("language",n),window.location.href="/"+n+a})},t}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.context.language;this.setState({value:e.locale||e.detected})},a.render=function(){var e=this.context.language.languages,t=this.state.value;return t?o.a.createElement("select",{value:t,onChange:this.handleChange},e.map(function(e){var t=e.value,a=e.text;return o.a.createElement("option",{key:t,value:t},a)})):null},t}(n.Component);d.contextTypes={language:m.a.object};var h=d,p=function(e){var t=e.siteTitle;return o.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0,display:"inline-block"}},o.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),o.a.createElement("div",{style:{float:"right"}},o.a.createElement(h,null))))};t.a=Object(i.d)(function(e){var t=e.children,a=(e.data,e.intl);return o.a.createElement("div",null,o.a.createElement(r.a,{title:a.formatMessage({id:"title"}),meta:[{name:"description",content:a.formatMessage({id:"welcome"})},{name:"keywords",content:"gatsby, i18n, react-intl, multi language, localization"}]}),o.a.createElement(p,{siteTitle:a.formatMessage({id:"title"})}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))})},92:function(e,t){},93:function(e,t){},94:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-page-2-js-0717ab25a2f663a0362a.js.map