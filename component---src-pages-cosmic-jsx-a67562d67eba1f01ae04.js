(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a.n(n),i=a(0),c=a.n(i),o=(a(152),a(161)),s=a(163),l=a(165),u=a(166),d=(a(164),function(e){function t(t){var a;return(a=e.call(this,t)||this).onEnterViewport=function(e){history.replaceState(void 0,void 0,"#"+e),a.setState({inViewport:e})},a.state={inViewport:""},a}return r()(t,e),t.prototype.render=function(){var e=this.state.inViewport;return c.a.createElement(o.a,{bodyClass:e},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"ui text container list"},c.a.createElement(s.a,{onEnter:this.onEnterViewport,id:"story.fairytales.theseus"},c.a.createElement("h1",null,"A kozmikus Hófehérke"),c.a.createElement("div",null,c.a.createElement("p",null,"hamarosan..."))),c.a.createElement(l.a,null,c.a.createElement(u.a,{to:"/transformations/",content:"Átalakulások"})))))},t}(c.a.Component));t.default=d},156:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(152),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(157),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var d=a(28);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},157:function(e,t,a){var n;e.exports=(n=a(160))&&n.default||n},160:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(50),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},161:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(171),c=a.n(i);a(172),a(173),a(162);t.a=function(e){var t=e.children,a=e.bodyClass;return r.a.createElement("div",null,r.a.createElement(c.a,{title:"Snow White",meta:[{name:"description",content:"..."},{name:"keywords",content:"..."}],bodyAttributes:{class:a}}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Cinzel+Decorative|Fondamento|Pirata+One|Snowburst+One&subset=latin-ext",rel:"stylesheet"}),r.a.createElement("div",{className:"layout"},t))}},162:function(e,t,a){},163:function(e,t,a){"use strict";var n=a(6),r=a.n(n),i=a(0),c=a.n(i),o=function(){},s=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={mounted:!1},a}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){if(!this.state.mounted)try{this.ScrollTrigger=a(168).default,this.setState({mounted:!0})}catch(e){console.error(e)}},n.render=function(){var e=this.props.id,t=this.props.onEnter||o,a=this.props.onExit||o;if(this.state.mounted){var n=this.ScrollTrigger;return c.a.createElement(n,{onEnter:function(){return t(e)},onExit:function(){return a(e)}},c.a.createElement("section",{key:e,id:e,className:"item"},this.props.children))}return c.a.createElement("section",{key:e,id:e,className:"item"},this.props.children)},t}(c.a.Component);t.a=s},164:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(156),c=a(437);t.a=function(e){var t=e.to,a=e.content;return r.a.createElement(c.a,{basic:!0,as:i.Link,to:t,content:a,icon:"right arrow",labelPosition:"right",floated:"right",color:"red"})}},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(176),c=a(175);t.a=function(e){var t=e.children;return r.a.createElement(i.a,{vertical:!0,style:{padding:"5em 0em"}},r.a.createElement(c.a,null,t))}},166:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(156),c=a(437);t.a=function(e){var t=e.to,a=e.content;return r.a.createElement(c.a,{basic:!0,as:i.Link,to:t,content:a,icon:"left arrow",labelPosition:"left",floated:"left",color:"red"})}},175:function(e,t,a){"use strict";var n=a(155),r=a.n(n),i=a(153),c=a.n(i),o=(a(4),a(0)),s=a.n(o),l=a(183),u=a(237),d=a(238),p=a(154);function m(e){var t=e.children,a=e.className,n=e.content,i=e.fluid,o=e.text,f=e.textAlign,h=c()("ui",Object(l.a)(o,"text"),Object(l.a)(i,"fluid"),Object(l.c)(f),"container",a),b=Object(u.a)(m,e),v=Object(d.a)(m,e);return s.a.createElement(v,r()({},b,{className:h}),p.a.isNil(t)?n:t)}m.handledProps=["as","children","className","content","fluid","text","textAlign"],m.propTypes={},t.a=m},176:function(e,t,a){"use strict";var n=a(155),r=a.n(n),i=(a(159),a(153)),c=a.n(i),o=(a(4),a(0)),s=a.n(o),l=a(183),u=a(237),d=a(238),p=a(154);function m(e){var t=e.children,a=e.className,n=e.compact,i=e.content,o=e.horizontal,f=e.piled,h=e.raised,b=e.size,v=e.stacked,y=c()("ui",b,Object(l.a)(n,"compact"),Object(l.a)(o,"horizontal"),Object(l.a)(f,"piled"),Object(l.a)(h,"raised"),Object(l.a)(v,"stacked"),"segments",a),g=Object(u.a)(m,e),j=Object(d.a)(m,e);return s.a.createElement(j,r()({},g,{className:y}),p.a.isNil(t)?i:t)}m.handledProps=["as","children","className","compact","content","horizontal","piled","raised","size","stacked"],m.propTypes={};var f=m;function h(e){var t=e.attached,a=e.basic,n=e.children,i=e.circular,o=e.className,m=e.clearing,f=e.color,b=e.compact,v=e.content,y=e.disabled,g=e.floated,j=e.inverted,E=e.loading,O=e.padded,w=e.piled,k=e.raised,x=e.secondary,N=e.size,P=e.stacked,S=e.tertiary,q=e.textAlign,z=e.vertical,T=c()("ui",f,N,Object(l.a)(a,"basic"),Object(l.a)(i,"circular"),Object(l.a)(m,"clearing"),Object(l.a)(b,"compact"),Object(l.a)(y,"disabled"),Object(l.a)(j,"inverted"),Object(l.a)(E,"loading"),Object(l.a)(w,"piled"),Object(l.a)(k,"raised"),Object(l.a)(x,"secondary"),Object(l.a)(P,"stacked"),Object(l.a)(S,"tertiary"),Object(l.a)(z,"vertical"),Object(l.b)(t,"attached"),Object(l.b)(O,"padded"),Object(l.c)(q),Object(l.d)(g,"floated"),"segment",o),C=Object(u.a)(h,e),A=Object(d.a)(h,e);return s.a.createElement(A,r()({},C,{className:T}),p.a.isNil(n)?v:n)}h.handledProps=["as","attached","basic","children","circular","className","clearing","color","compact","content","disabled","floated","inverted","loading","padded","piled","raised","secondary","size","stacked","tertiary","textAlign","vertical"],h.Group=f,h.propTypes={};t.a=h}}]);
//# sourceMappingURL=component---src-pages-cosmic-jsx-a67562d67eba1f01ae04.js.map