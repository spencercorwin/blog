(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return g});var a=n(6),r=n.n(a),i=n(0),o=n.n(i),c=n(134),u=n(152),s=n.n(u),l=n(150),d=n.n(l),p=n(146),m=n(137),f=n(133),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=s()(this,"props.data.site.siteMetadata.title"),t=s()(this,"props.data.site.siteMetadata.description"),n=s()(this,"props.data.allMarkdownRemark.edges");return o.a.createElement(m.a,{location:this.props.location,title:e},o.a.createElement(d.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:e}),o.a.createElement(p.a,null),n.map(function(e){var t=e.node,n=s()(t,"frontmatter.title")||t.fields.slug;return o.a.createElement("div",{key:t.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(f.a)(.25)}},o.a.createElement(c.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)),o.a.createElement("small",null,t.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(o.a.Component);t.default=h;var g="2584137191"},133:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return s});var a=n(148),r=n.n(a),i=n(149),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new r.a(o.a);var u=c.rhythm,s=c.scale},134:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(132),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(135),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var d=n(30);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},135:function(e,t,n){var a;e.exports=(a=n(136))&&a.default||a},136:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(46),u=n(2),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},137:function(e,t,n){"use strict";n(29);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),c=n(134),u=n(133),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.title,r=t.children;return e="/blog/"===n.pathname?o.a.createElement("h1",{style:Object.assign({},Object(u.b)(1.5),{marginBottom:Object(u.a)(1.5),marginTop:0})},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(u.a)(-1)}},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(u.a)(24),padding:Object(u.a)(1.5)+" "+Object(u.a)(.75)}},e,r)},t}(o.a.Component);t.a=s},146:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),c=(n(156),n(157),n(147)),u=n.n(c),s=n(133),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2.5)}},o.a.createElement("img",{src:u.a,alt:"Spencer Corwin",style:{marginRight:Object(s.a)(.5),marginBottom:0,width:Object(s.a)(2),height:Object(s.a)(2)}}),o.a.createElement("p",null,"Written by ",o.a.createElement("strong",null,"Spencer Corwin"),", web developer for hire."))},t}(o.a.Component);t.a=l},147:function(e,t,n){e.exports=n.p+"static/profile-pic-4b409937f59b19977af4778a323b578a.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-f9cdfd82b127b18a88bf.js.map