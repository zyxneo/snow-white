(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{234:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(79),i=a(78),l=a(87),s=(a(256),a(255),function(e){var t,a=e.character,n=a.id,c=a.gender,i=a.name,l=a.imageX,s=void 0===l?0:l,o=a.imageY,u=void 0===o?0:o,h=a.imageWidth,g=void 0===h?100:h,m=a.imageHeight,d=void 0===m?100:m,f=a.cx,p=a.cy,v=a.scale;switch(c){case"female":t="pink";break;case"male":t="skyblue";break;default:t="gray"}return r.a.createElement("g",{id:n,transform:"scale("+v+" "+v+") "+function(e,t,a){return"translate("+(e/a-50)+" "+(t/a-50)+")"}(f,p,v)},r.a.createElement("circle",{id:"avatarCircle",cx:"50",cy:"50",r:"32",fill:"none"}),r.a.createElement("circle",{cx:"50",cy:"50",r:"30",fill:t}),r.a.createElement("circle",{cx:"50",cy:"50",r:"25",fill:"none",stroke:"black",strokeWidth:".5"}),r.a.createElement("g",{clipPath:"url(#circleMask)"},r.a.createElement("image",{x:s,y:u,href:"/avatars/"+n+".jpg",width:g,height:d})),r.a.createElement("text",{textAnchor:"middle",className:"avatar-title"},r.a.createElement("textPath",{href:"#avatarCircle",startOffset:"75%"},i)))}),o=function(e){var t,a,n,c,i,l=e.graphData;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns-xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 120 120",width:"800",height:"800"},r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"circleMask"},r.a.createElement("circle",{cx:"50",cy:"50",r:"25"}))),r.a.createElement("rect",{x:"0",y:"0",width:"120",height:"120",fill:"none",stroke:"black",strokeWidth:"1"}),r.a.createElement("symbol",{id:"scene"},l.characters.map(function(e){return r.a.createElement(s,{key:e.id,character:e})}),r.a.createElement("path",{d:"M 30,37.5 a 25,25,0,0,1,22.5,22.5",stroke:"red",strokeWidth:"1",fill:"none"}),r.a.createElement("path",{id:"huntsman-snowwhite",d:"M 90,82.5 c -10,0, -20,-15, -30,-15",stroke:"red",strokeWidth:"1",fill:"none"}),r.a.createElement("path",{id:"witch-snowwhite",d:"M 75,97.5 c -10,0, -5,-30, -15,-30",stroke:"red",strokeWidth:"1",fill:"none"})),r.a.createElement("use",{href:"#scene",x:"0",y:"0"}),r.a.createElement("path",{d:(t=l.characters[0].cx,a=l.characters[0].cy,n=l.characters[1].cx,c=l.characters[1].cy,!0,void 0===i&&(i=.5),"M "+t+","+a+" C "+t+","+(a+(c-a)*i)+", "+n+","+(c-(c-a)*i)+", "+n+","+c),stroke:"red",strokeWidth:"1",fill:"none"}))},u={characters:[{id:"queen",name:r.a.createElement(c.a,{id:"character.queen",defaultMessage:"Queen",tagName:"tspan"}),gender:"female",imageX:0,imageY:0,imageWidth:100,imageHeight:100,cx:22.5,cy:37.5,scale:.25},{id:"snowwhite",name:r.a.createElement(c.a,{id:"character.snowwhite",defaultMessage:"Snow White",tagName:"tspan"}),gender:"female",imageX:0,imageY:0,imageWidth:100,imageHeight:100,cx:52.5,cy:67.5,scale:.25},{id:"witch",name:r.a.createElement(c.a,{id:"character.stepmother",defaultMessage:"Stepmother",tagName:"tspan"}),gender:"female",imageX:-4,imageY:20,imageWidth:120,imageHeight:120,cx:82.5,cy:97.5,scale:.25},{id:"king",name:r.a.createElement(c.a,{id:"character.king",defaultMessage:"King",tagName:"tspan"}),gender:"male",imageX:0,imageY:0,imageWidth:100,imageHeight:100,cx:37.5,cy:22.5,scale:.25},{id:"prince",name:r.a.createElement(c.a,{id:"character.prince",defaultMessage:"Prince",tagName:"tspan"}),gender:"male",imageX:25,imageY:10,imageWidth:50,imageHeight:100,cx:67.5,cy:52.5,scale:.25},{id:"huntsman",name:r.a.createElement(c.a,{id:"character.huntsman",defaultMessage:"Huntsman",tagName:"tspan"}),gender:"male",imageX:25,imageY:10,imageWidth:50,imageHeight:100,cx:97.5,cy:82.5,scale:.25}]};t.default=Object(i.c)(function(){return r.a.createElement(l.a,null,r.a.createElement(o,{graphData:u}))})},255:function(e,t,a){},256:function(e,t,a){var n=a(17).f,r=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in r||a(16)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},77:function(e,t,a){var n=a(89).concat(a(88));e.exports={localeData:n,languages:[{value:"en",text:"English"},{value:"hu",text:"Magyar"}]}},78:function(e,t,a){"use strict";a(62);var n=a(93),r=a.n(n),c=a(1),i=a.n(c),l=a(19),s=a.n(l),o=a(85),u=a.n(o),h=function(e,t){var a=e.to,n=e.children,c=r()(e,["to","children"]),l=t.language,s=l.locale?"/"+l.locale+a:""+a;return i.a.createElement(u.a,Object.assign({to:s},c),n)};h.propTypes={to:s.a.string.isRequired,children:s.a.node.isRequired},h.contextTypes={language:s.a.object};var g=h,m=a(33),d=a.n(m),f=a(79),p=a(77);Object(f.c)(p.localeData);var v=function(e){var t=function(t){function n(e){var a;a=t.call(this)||this;var n=e.pageContext,r=n.locale,c=n.languages,i=n.originalPath;return a.state={language:{locale:r,languages:c,originalPath:i}},a}d()(n,t);var r=n.prototype;return r.getChildContext=function(){return{language:this.state.language}},r.render=function(){var t=this.state.language.locale||"en",n=a(83)("./"+t+".js");return i.a.createElement(f.b,{locale:t,messages:n},i.a.createElement(e,this.props))},n}(c.Component);return t.childContextTypes={language:s.a.object},t};a.d(t,"a",function(){return g}),a.d(t,"c",function(){return v}),a.d(t,"b",function(){return p.languages}),a.d(t,!1,function(){return p.localeData})},81:function(e,t){e.exports={"site.title":"Hófehérke","site.description":" ","site.keywords":" ","character.queen":"Királynő","character.snowwhite":"Hófehérke","character.stepmother":"Mostoha","character.king":"Király","character.prince":"Herceg","character.huntsman":"Vadász"}},82:function(e,t){e.exports={"site.title":"Snow White","site.description":" ","site.keywords":" ","character.queen":"Queen","character.snowwhite":"Snow White","character.stepmother":"Stepmother","character.king":"King","character.prince":"Prince","character.huntsman":"Huntsman"}},83:function(e,t,a){var n={"./en.js":82,"./hu.js":81,"./index.js":77};function r(e){var t=c(e);return a(t)}function c(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=83},87:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(241),i=a.n(c),l=a(79),s=a(78),o=a(33),u=a.n(o),h=a(19),g=a.n(h),m=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={value:""},t.handleChange=function(e){var a=t.context.language.originalPath,n=e.target.value;n!==t.state.value&&t.setState({value:n},function(){localStorage.setItem("language",n),window.location.href="/"+n+a})},t}u()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.context.language;this.setState({value:e.locale||e.detected})},a.render=function(){var e=this.context.language.languages,t=this.state.value;return t?r.a.createElement("select",{value:t,onChange:this.handleChange},e.map(function(e){var t=e.value,a=e.text;return r.a.createElement("option",{key:t,value:t},a)})):null},t}(n.Component);m.contextTypes={language:g.a.object};var d=m,f=function(e){var t=e.siteTitle;return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement(s.a,{to:"/"},t)),r.a.createElement("div",null,r.a.createElement(d,null)))};a(239),t.a=Object(l.d)(function(e){var t=e.children,a=(e.data,e.intl);return r.a.createElement("div",null,r.a.createElement(i.a,{title:a.formatMessage({id:"site.title"}),meta:[{name:"description",content:a.formatMessage({id:"site.description"})},{name:"keywords",content:a.formatMessage({id:"site.keywords"})}]}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Cinzel+Decorative|Fondamento|Pirata+One|Snowburst+One&subset=latin-ext",rel:"stylesheet"}),r.a.createElement(f,{siteTitle:a.formatMessage({id:"site.title"})}),r.a.createElement("div",null,t))})},90:function(e,t){},91:function(e,t){},92:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-page-2-js-a877c0ba6946b57745f3.js.map