(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7590)}])},7590:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return Ze},default:function(){return qe}});var i=t(5893),r=t(9008),s=t(7294),a=t(4393),o=t.n(a),c=t(5952),l=t.n(c),d=t(1163),u=t(7282),_=t(5),h=t.n(_),p=function(e){var n=e.onClick,t=e.defaultChecked,r=(0,s.useContext)(u.Z).isDark;return(0,i.jsx)("div",{className:"".concat(h().ToggleSwitch," ").concat(r?h().dark:""),children:(0,i.jsxs)("label",{className:h().switch,children:[(0,i.jsx)("input",{onClick:function(){return n()},type:"checkbox",defaultChecked:t}),(0,i.jsx)("span",{className:h().sliderRound})]})})};p.propTypes={},p.defaultProps={};var m=p,f=t(1436),v=t(7814),x=function(e){return Math.max(0,e)},j=function(e,n,t){return e>=n&&e<=t};function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){g(e,n,t[n])}))}return e}var C,N=function(e){var n=e.menu,t=(0,s.useState)({left:0}),r=t[0],a=t[1],o=(0,s.useState)("#whoiam"),c=o[0],_=o[1],h=(0,s.useState)(0),p=h[0],g=h[1],C=(0,s.useState)(!1),N=C[0],b=C[1],w=(0,s.useState)(!1),k=w[0],y=w[1],T=(0,s.useContext)(u.Z),E=T.locale,O=T.setLocale,P=T.isDark,M=T.setIsDark,D=(0,s.useRef)(null),L=(0,d.useRouter)(),I=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,i=(0,s.useState)(""),r=i[0],a=i[1],o=(0,s.useState)(!1),c=o[0],l=o[1],d=(0,s.useState)(0),u=d[0],_=d[1];return(0,s.useEffect)((function(){var i=function(){var i=window.pageYOffset,r=e.map((function(e){var t=document.getElementById(e);if(!t)return{id:e,top:-1,bottom:-1};var r=t.getBoundingClientRect();return{id:e,top:x(r.top+i-n),bottom:x(r.bottom+i-n)}})).find((function(e){var n=e.top,t=e.bottom;return j(i,n,t)}));a((null===r||void 0===r?void 0:r.id)||""),l(i>t),_(i)};return i(),window.addEventListener("resize",i),window.addEventListener("scroll",i),function(){window.removeEventListener("resize",i),window.removeEventListener("scroll",i)}}),[e,n]),{activeId:r,isScrolling:c,pageYOff:u}}(n.map((function(e){return e.link.replace("#","")})),550,650),R=I.activeId,H=I.isScrolling,A=I.pageYOff,B=function(e){var n=e.offsetLeft;a({left:n+10})},G=function(e){e.target&&e.target.parentElement&&(B(e.target.parentElement),_(e.target.parentElement.id?"#"+e.target.parentElement.id.split("-")[2]:""))},K=function(e){document.querySelector(e)&&window.scrollTo({top:document.querySelector(e).offsetTop-50,behavior:"smooth"})};return(0,s.useEffect)((function(){N?(window.document.querySelector("html").classList.add("overflow-hidden"),window.document.body.classList.add("overflow-hidden")):(window.document.querySelector("html").classList.remove("overflow-hidden"),window.document.body.classList.remove("overflow-hidden"))}),[N]),(0,s.useEffect)((function(){y(!0),setTimeout((function(){return y(!1)}),300)}),[r]),(0,s.useEffect)((function(){var e=n.map((function(e){return e.link}));L.asPath&&e.includes(L.asPath.replace("/",""))&&_(L.asPath.replace("/",""))}),[L,L.asPath,n]),(0,s.useEffect)((function(){R&&document.getElementById("list-item-"+R)&&(B(document.getElementById("list-item-"+R)),_("#"+R))}),[R,A]),(0,s.useEffect)((function(){if(document&&H&&D){var e=100*A/document.body.scrollHeight;g(e<=91?e+"%":"100%")}else g(0)}),[A]),(0,i.jsxs)("div",{className:"".concat(l().HeaderMenu," ").concat(P?l().dark:""),children:[(0,i.jsx)("div",{className:l().progress,style:{width:p}}),(0,i.jsx)("div",{className:"".concat(l().headerDesktop," ").concat(H?l().scaled:""),children:(0,i.jsx)("header",{children:(0,i.jsxs)("ul",{children:[n.map((function(e){return(0,i.jsx)("li",{onClick:G,id:"list-item-"+e.link.replace("#",""),className:c===e.link?l().selected:null,children:(0,i.jsx)("button",{onClick:function(){return K(e.link)},children:e.name})},e.name)})),(0,i.jsx)("div",{ref:D,style:S({},r),className:"".concat(l().index," ").concat(k?l().moving:"")}),(0,i.jsx)("div",{style:S({},r),className:"".concat(l().indexTwo," ").concat(k?l().moving:"")})]})})}),(0,i.jsxs)("div",{className:l().headerMobile+" "+(N?l().open:null),children:[(0,i.jsxs)("div",{onClick:function(){return b(!N)},className:l().burgerIcon,children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("div",{className:l().sideMenu,children:[(0,i.jsx)("ul",{children:n.map((function(e){return(0,i.jsx)("li",{onClick:G,className:c===e.link?l().selected:null,children:(0,i.jsx)("button",{onClick:function(){return n=e.link,K(n),void b(!1);var n},children:e.name})},e.name)}))}),(0,i.jsxs)("ul",{className:l().options,children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(v.G,{icon:f.enB}),(0,i.jsx)(m,{onClick:function(){M(!P)},defaultChecked:P}),(0,i.jsx)(v.G,{icon:f.DBF})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{children:"EN"}),(0,i.jsx)(m,{onClick:function(){O("en"===E?"it":"en")},defaultChecked:"it"===E}),(0,i.jsx)("span",{children:"IT"})]})]})]})]})]})},b=t(1180),w=t.n(b);function k(){return k=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},k.apply(this,arguments)}var y,T,E=function(e){return s.createElement("svg",k({width:23,height:34,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),C||(C=s.createElement("path",{d:"m1 22.5 10.5 10 10.5-10M11.5 32.5V.5",stroke:"#000"})))};function O(){return O=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},O.apply(this,arguments)}var P=function(e){return s.createElement("svg",O({width:81,height:80,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),y||(y=s.createElement("circle",{cx:31,cy:31,r:30,stroke:"#C6205C",strokeWidth:2})),T||(T=s.createElement("path",{stroke:"#C6205C",strokeWidth:2,d:"m53.68 54.267 26.398 24.478"})))};function M(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function D(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return M(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return M(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var L=function(){var e=(0,s.useState)(!1),n=e[0],t=e[1],r=(0,s.useState)(!1),a=r[0],o=r[1],c=(0,s.useState)(!1),l=(c[0],c[1]);return(0,s.useEffect)((function(){document&&document.addEventListener("mousemove",(function(e){var n=e.x+4,i=e.y+4;D(document.getElementsByClassName("cursor")).forEach((function(r){r.style.left=n+"px",r.style.top=i+"px";var s=e.target.tagName;"BUTTON"===s?null===r||void 0===r||r.classList.add(w().smaller):"A"===s?(null===r||void 0===r||r.classList.add(w().smaller),t(!0)):e.target&&function(e,n){var t,i=null===(t=e.target)||void 0===t?void 0:t.className;return i&&"string"==typeof i&&i.indexOf(n)>-1&&i.includes(n)}(e,"value")?(null===r||void 0===r||r.classList.add(w().smaller),o(!0)):(null===r||void 0===r||r.classList.remove(w().smaller),null===r||void 0===r||r.classList.remove(w().disappear),t(!1),o(!1),l(!1))}))}))})),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"".concat(w().Cursor," cursor")}),(0,i.jsx)("div",{className:"".concat(w().Cursor," cursor")}),(0,i.jsx)("div",{className:"".concat(w().Cursor," cursor")}),(0,i.jsxs)("div",{className:"cursor ".concat(w().Cursor," ").concat(w().iconContainer),children:[n&&(0,i.jsx)(E,{className:w().arrow}),a&&(0,i.jsx)(P,{className:w().inspect})]})]})};L.propTypes={},L.defaultProps={};var I=L,R=function(e){var n=e.children,t=e.menu;return(0,i.jsxs)("div",{className:o().PortfolioLayout,children:[(0,i.jsx)(N,{menu:t}),(0,i.jsx)("main",{children:n}),(0,i.jsx)(I,{})]})};R.propTypes={},R.defaultProps={};var H=R,A=t(557),B=t.n(A),G=t(919),K=t.n(G),Z=function(e){var n=e.children,t=e.light,r=void 0!==t&&t,a=e.placeRight,o=void 0!==a&&a,c=e.placeCenter,l=void 0!==c&&c,d=(0,s.useContext)(u.Z).isDark;return(0,i.jsx)("div",{className:"\n        sectionTitle \n        ".concat(K().SectionTitle," \n        ").concat(d?K().dark:""," \n        ").concat(r?K().light:null," \n        ").concat(o?K().right:"","\n        ").concat(l?K().center:"","\n        "),children:(0,i.jsx)("h2",{children:(0,i.jsx)("span",{children:n})})})};Z.propTypes={},Z.defaultProps={};var q=Z,F=t(5111),z=t.n(F),V=t(9406),W=t.n(V),X=function(e){var n=e.children,t=(0,s.useState)(!1),r=t[0],a=t[1],o=(0,s.useState)({}),c=o[0],l=o[1],d=(0,s.useContext)(u.Z),_=d.locale,h=d.isDark,p=(0,s.useRef)(null);return(0,s.useEffect)((function(){l("en"===_?{more:"Read more",less:"Read less"}:{more:"Leggi di pi\xf9",less:"Leggi di meno"})}),[_]),(0,i.jsxs)("div",{className:"".concat(W().AccordionReadMore," ").concat(h?W().dark:""),children:[(0,i.jsxs)("div",{ref:p,style:r?{height:p.current.scrollHeight}:{height:""},className:"".concat(W().content," ").concat(r?W().open:""),children:[n&&(0,i.jsx)("span",{children:n.slice(0,300)}),n&&!r&&(0,i.jsx)("span",{children:"..."}),n&&(0,i.jsx)("span",{className:r?"":W().hidden,children:n.slice(300,n.length-1)})]}),(0,i.jsx)("div",{className:W().openAccordion,onClick:function(){return a(!r)},children:r?c.less:c.more})]})};X.propTypes={},X.defaultProps={};var J=X,Q=function(e){var n=e.title,t=e.jobRole,r=e.period,a=e.description,o=e.skillsAcquired,c=e.logo,l=e.where,d=(0,s.useContext)(u.Z),_=(d.locale,d.isDark),h=(0,s.useState)(""),p=h[0],m=h[1],f=(0,s.useState)(!1),v=f[0],x=f[1];return(0,i.jsxs)("div",{className:"".concat(z().CareerStep+" careerStep"," ").concat(_?z().dark:""),children:[(0,i.jsx)("div",{className:z().dot+" dot"}),(0,i.jsxs)("div",{className:z().timeContainer,children:[(0,i.jsx)("div",{className:z().period,children:r}),(0,i.jsx)("div",{className:z().line+" line"}),(0,i.jsx)("div",{className:z().svgContainer,style:{backgroundImage:"url('".concat(c,"')")}}),(0,i.jsx)("div",{className:z().line+" line"}),(0,i.jsx)("p",{className:z().where,children:l})]}),(0,i.jsx)("div",{className:z().infoContainer,children:(0,i.jsxs)("div",{className:z().step,children:[(0,i.jsx)("h3",{className:z().stepTitle,children:n}),(0,i.jsx)("p",{className:z().jobRole,children:t}),(0,i.jsx)(J,{children:a}),o&&o.map((function(e){return(0,i.jsx)("div",{onMouseEnter:function(){m(e+"_"+n),x(!0)},onMouseLeave:function(){m(""),x(!1)},className:"".concat(z().singleSkill," ").concat(v&&p!==e+"_"+n?z().reduce:""),children:e},e+"_"+n)}))]})})]})};Q.propTypes={},Q.defaultProps={};var U=Q;function Y(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function $(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ee(e){return function(e){if(Array.isArray(e))return Y(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return Y(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Y(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ne=function(e){var n=e.id,t=e.steps,r=e.title,a=(0,s.useContext)(u.Z).isDark;return(0,i.jsxs)("div",{id:n,className:"".concat(B().CareerSection," ").concat(a?B().dark:""," genericSection"),children:[(0,i.jsx)(q,{children:r}),(0,i.jsx)("div",{className:B().careerContent,children:(0,i.jsxs)("div",{id:"timeline-container",className:B().timeline,children:[(0,i.jsx)("div",{id:"timeline-line",className:B().line}),t&&ee(t).reverse().map((function(e,n){return(0,i.jsx)(U,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){$(e,n,t[n])}))}return e}({},e),e.title)}))]})})]})};ne.propTypes={},ne.defaultProps={};var te=ne,ie=t(5037),re=t.n(ie),se=function(e){var n=e.id,t=e.title,r=e.items,a=(0,s.useContext)(u.Z),o=a.isDark,c=a.locale,l=(0,s.useState)(null),d=l[0],_=l[1],h=(0,s.useState)(null),p=h[0],m=h[1];return(0,s.useEffect)((function(){if(r){var e=r[0];m({description:e.description,grade:e.grade}),_(e.title)}}),[r]),(0,i.jsxs)("div",{id:n,className:"".concat(re().EducationSection," ").concat(o?re().dark:""," genericSection"),children:[(0,i.jsx)(q,{children:t}),(0,i.jsx)("div",{className:re().content,children:r&&r.map((function(e){return(0,i.jsxs)("div",{className:"".concat(re().info," educationCard"),children:[(0,i.jsx)("div",{className:re().line}),(0,i.jsx)("div",{className:re().line}),e.title&&(0,i.jsx)("h3",{className:re().infoTitle,children:e.title}),e.place&&(0,i.jsx)("div",{className:re().infoPlace,children:e.place}),e.description&&(0,i.jsx)("p",{className:re().infoDescription,children:e.description}),e.grade&&(0,i.jsxs)("div",{className:re().infoGrade,children:["en"===c?"GRADE":"VOTO",": ",e.grade]})]},e.title)}))}),(0,i.jsxs)("div",{className:re().contentMobile,children:[(0,i.jsx)("div",{className:re().educationStepsContainer,children:r&&r.map((function(e){return(0,i.jsxs)("div",{className:"".concat(re().educationButton," ").concat(d===e.title?re().selected:""),onClick:function(){return function(e){_(e.title),m({description:e.description,grade:e.grade})}(e)},children:[e.title&&(0,i.jsx)("h3",{className:re().infoTitle,children:e.title}),e.place&&(0,i.jsxs)("div",{className:re().infoPlace,children:[" ",e.place]})]},e.title)}))}),(0,i.jsx)("div",{className:re().currentElementContainer,children:p&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{className:re().infoGrade,children:["en"===c?"GRADE":"VOTO",": ",p.grade]}),(0,i.jsx)("p",{className:re().infoDescription,children:p.description})]})})]})]})};se.propTypes={},se.defaultProps={};var ae=se,oe=t(2912),ce=t.n(oe),le=t(9260),de=function(e){var n=e.id,t=e.title,r=e.items,a=(0,s.useState)({}),o=a[0],c=a[1],l=(0,s.useContext)(u.Z).isDark;return(0,s.useEffect)((function(){r&&r.length>0&&c(r[0])}),[r]),(0,i.jsxs)("div",{id:n,className:"".concat(ce().HonoursSection," ").concat(l?ce().dark:""," genericSection"),children:[(0,i.jsx)(q,{placeRight:!0,children:t}),(0,i.jsxs)("div",{className:ce().content,children:[(0,i.jsx)("div",{className:ce().slider,children:(0,i.jsxs)("div",{className:ce().imageContainer,children:[(0,i.jsx)("div",{className:ce().line}),(0,i.jsx)("div",{className:ce().line}),(0,i.jsx)("div",{className:ce().line}),(0,i.jsx)("div",{className:ce().line}),(0,i.jsx)("div",{className:ce().line}),(0,i.jsx)("div",{className:ce().line}),(0,i.jsx)(le.default,{layout:"intrinsic",height:476,width:323,src:"./assets/img/le_4.jpg"})]})}),(0,i.jsxs)("div",{className:"".concat(ce().info),children:[o.title&&(0,i.jsx)("h3",{className:ce().infoTitle,children:o.title}),o.date&&(0,i.jsx)("div",{className:ce().infoDate,children:(0,i.jsx)("p",{children:o.date})}),o.description&&(0,i.jsx)("p",{className:ce().infoDescription,children:o.description})]})]})]})};de.propTypes={},de.defaultProps={};var ue=de,_e=t(6122),he=t.n(_e),pe=t(1417),me=function(e){var n=e.id,t=e.title,r=e.description,a=(e.cvFooter,(0,s.useContext)(u.Z).isDark);return(0,i.jsxs)("div",{id:n,className:"".concat(he().ContactSection," ").concat(a?he().dark:""),children:[(0,i.jsx)(q,{light:!0,placeCenter:!0,children:t}),(0,i.jsxs)("div",{className:he().contactBox,children:[(0,i.jsx)("p",{className:he().contactDescription,children:r}),(0,i.jsx)("div",{className:he().linksContainer,children:(0,i.jsx)("div",{children:(0,i.jsx)("a",{href:"https://it.linkedin.com/in/sergio-picca-801b0b173",children:(0,i.jsx)(v.G,{size:"3x",icon:pe.D9H})})})})]})]})};me.propTypes={},me.defaultProps={};var fe=me,ve=t(8395),xe=t.n(ve),je=t(815),ge=t.n(je),Se=function(){var e=(0,s.useState)({width:void 0,height:void 0}),n=e[0],t=e[1];return(0,s.useEffect)((function(){var e=function(){t({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n},Ce=function(e){var n=e.data,t=(0,s.useContext)(u.Z).isDark,r=(0,s.useState)(""),a=r[0],o=r[1],c=(0,s.useState)(!1),l=c[0],d=c[1],_=Se();return(0,i.jsx)("div",{className:"".concat(ge().BarChart," ").concat(t?ge().dark:""),children:n&&n.map((function(e){return(0,i.jsxs)("div",{className:ge().bar,children:[(0,i.jsx)("div",{className:ge().barValue,children:(0,i.jsx)("div",{onMouseOver:function(){(null===_||void 0===_?void 0:_.width)>1200&&(o(e.label),d(!0))},onMouseLeave:function(){(null===_||void 0===_?void 0:_.width)>1200&&(o(""),d(!1))},className:ge().value+" value "+(a===e.label?l?ge().selected:ge().notSelected:l?ge().notSelected:""),style:{height:"".concat(e.value,"%")}})}),(0,i.jsx)("div",{className:ge().barLabel,children:e.label})]},e.label+"-"+e.value)}))})};Ce.propTypes={},Ce.defaultProps={};var Ne=Ce,be=t(663),we=t(8214),ke=t(508),ye=t(9277),Te=t(1508),Ee=t(3758),Oe=function(e){var n=e.title,t=e.id,r=e.techSkills,a=e.softSkills,o=e.langTable,c=(0,s.useContext)(u.Z),l=c.isDark,d=c.locale,_=Se();return(0,i.jsxs)("div",{id:t,className:"".concat(xe().SkillsSection," ").concat(l?xe().dark:""," genericSection"),children:[(0,i.jsx)(q,{placeRight:!0,children:n}),(0,i.jsxs)("div",{className:xe().programmingLanguages+" programmingContainer",children:[(0,i.jsxs)("div",{className:xe().otherKnowledge+" techKnowledgeDescription",children:[(0,i.jsx)("p",{children:null===r||void 0===r?void 0:r.description}),(0,i.jsx)("p",{className:xe().otherTitle,children:"en"===d?"Other Knowledge":"Altre conoscenze"}),(0,i.jsx)("p",{children:null===r||void 0===r?void 0:r.otherKnowledge})]}),(0,i.jsx)("div",{className:xe().barChart,children:(0,i.jsx)(Ne,{data:null===r||void 0===r?void 0:r.barData})})]}),(0,i.jsxs)("div",{className:xe().softSkills+" softSkillsContainer",children:[(0,i.jsx)("div",{className:xe().chart,children:a&&a.data&&(_.width>768?(0,i.jsx)(be.h,{className:"radarChart",width:"100%",height:400,children:(0,i.jsxs)(we.H,{outerRadius:170,width:530,height:400,data:a.data,children:[(0,i.jsx)(ke.n,{}),(0,i.jsx)(ye.I,{tick:!0,tickSize:20,dataKey:"subject"}),(0,i.jsx)(Te.S,{angle:90,domain:[0,100]}),(0,i.jsx)(Ee.F,{name:"softskill",dataKey:"A",stroke:"#C6205C",dot:!0,fill:"#C6205C",fillOpacity:.4})]})}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(be.h,{className:"radarChart",width:"100%",height:270,children:(0,i.jsxs)(we.H,{outerRadius:110,width:530,height:400,data:a.data.slice(0,Math.ceil(a.data.length/2)),children:[(0,i.jsx)(ke.n,{}),(0,i.jsx)(ye.I,{tick:!0,tickSize:15,dataKey:"subject"}),(0,i.jsx)(Te.S,{angle:90,domain:[0,100]}),(0,i.jsx)(Ee.F,{name:"softskill",dataKey:"A",stroke:"#C6205C",dot:!0,fill:"#C6205C",fillOpacity:.4})]})}),(0,i.jsx)(be.h,{className:"radarChart",width:"100%",height:270,children:(0,i.jsxs)(we.H,{outerRadius:110,width:530,height:200,data:a.data.slice(Math.ceil(a.data.length/2),a.data.length),children:[(0,i.jsx)(ke.n,{}),(0,i.jsx)(ye.I,{tick:!0,tickSize:15,dataKey:"subject"}),(0,i.jsx)(Te.S,{angle:90,domain:[0,100]}),(0,i.jsx)(Ee.F,{name:"softskill",dataKey:"A",stroke:"#C6205C",dot:!0,fill:"#C6205C",fillOpacity:.4})]})})]}))}),(0,i.jsx)("div",{className:xe().softSkillsDescription+" softSkillsDescription",children:a&&a.description&&(0,i.jsx)("p",{children:a.description})})]}),(0,i.jsxs)("div",{className:xe().tableContainer+" langTableSection",children:[(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis sapien vitae dui commodo iaculis. Maecenas vitae nunc sagittis, ultricies magna sit amet, ultrices massa. Nunc fringilla ut risus et auctor..."}),o&&(0,i.jsxs)("table",{className:xe().langTable,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{}),(0,i.jsxs)("th",{children:[(0,i.jsx)(v.G,{icon:f.UOM}),(0,i.jsx)("span",{children:o.headers[0]})]}),(0,i.jsxs)("th",{children:[(0,i.jsx)(v.G,{icon:f.ItS}),(0,i.jsx)("span",{children:o.headers[1]})]}),(0,i.jsxs)("th",{children:[(0,i.jsx)(v.G,{icon:f.IwR}),(0,i.jsx)("span",{children:o.headers[2]})]}),(0,i.jsxs)("th",{children:[(0,i.jsx)(v.G,{icon:f.cnt}),(0,i.jsx)("span",{children:o.headers[3]})]})]})}),(0,i.jsx)("tbody",{children:o.rows&&o.rows.map((function(e,n){return(0,i.jsx)("tr",{children:e.cells&&e.cells.map((function(e,n){return(0,i.jsx)("td",{className:"lang"===e.type?xe().langName:"",colSpan:e.span,children:"lang"===e.type?(0,i.jsx)("b",{children:e.value}):e.value},"cell-index-"+n+"-"+e)}))},"row-index-"+n)}))})]})]})]})};Oe.propTypes={},Oe.defaultProps={};var Pe=Oe,Me=t(9394),De=t.n(Me),Le=function(e){var n=e.id,t=e.title,r=e.papers,a=(0,s.useContext)(u.Z),o=a.isDark,c=a.locale;return(0,i.jsxs)("div",{id:n,className:"".concat(De().PaperSection," genericSection ").concat(o?De().dark:""),children:[(0,i.jsx)(q,{children:t}),r&&r.map((function(e){return(0,i.jsxs)("div",{className:De().paperContent,children:[(0,i.jsxs)("h3",{className:"paperTitle",children:['"',e.title,'"']}),(0,i.jsxs)("div",{className:De().authors+" authors",children:["en"===c?"AUTHORS":"AUTORI",": ",e.authors]}),(0,i.jsxs)("p",{className:"content",children:["en"===c?"ABSTRACT":"ESTRATTO",":"]}),(0,i.jsx)("p",{className:De().abstractContent+" content",children:e.abstract}),(0,i.jsx)("div",{className:De().previewContainer+" previews",children:e.previews&&e.previews.map((function(e){return(0,i.jsx)("div",{style:{backgroundImage:e},className:De().preview},e)}))}),(0,i.jsx)("div",{className:De().linkContainer,children:e.links&&e.links.map((function(e){return(0,i.jsx)("a",{className:"paperLink",href:e.url,target:"_blank",children:e.label},e.url)}))})]},e.title)}))]})};Le.propTypes={},Le.defaultProps={};var Ie=Le,Re=t(1061),He=t.n(Re),Ae=function(){return(0,i.jsxs)("div",{id:"whoiam",className:He().Intro,children:[(0,i.jsx)("p",{className:He().sayHello+" hello",children:"Hello"}),(0,i.jsxs)("div",{className:He().view,children:[(0,i.jsxs)("div",{className:He().introduction,children:[(0,i.jsx)("div",{className:He().line+" lxLine"}),(0,i.jsx)("div",{className:He().line+" lxLine"}),(0,i.jsx)("div",{className:"titleContainer",children:(0,i.jsx)("h1",{children:"I'm Sergio Picca"})}),(0,i.jsxs)("div",{className:He().descriptionContainer,children:[(0,i.jsx)("p",{className:He().role+" role",children:"SOFTWARE ENGINEER"}),(0,i.jsx)("p",{className:He().description+" introDescription",children:"I am a Software Engineer, with a profound passion for computer science."})]})]}),(0,i.jsxs)("div",{className:He().imgContainer+" imgContainer",children:[(0,i.jsx)("div",{className:He().line+" rxLine"}),(0,i.jsx)("div",{className:He().line+" rxLine"}),(0,i.jsx)(le.default,{className:"introImg",layout:"intrinsic",height:600,width:450,src:"./assets/img/test.jpg"})]})]})]})};Ae.propTypes={},Ae.defaultProps={};var Be=Ae;function Ge(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Ke(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){Ge(e,n,t[n])}))}return e}var Ze=!0,qe=function(e){var n=e.menu,t=e.portfolioContent,a=(0,s.useState)({}),o=a[0],c=a[1],l=(0,s.useState)([]),d=l[0],_=l[1],h=(0,s.useContext)(u.Z),p=h.locale,m=h.isDark;return(0,s.useEffect)((function(){c(t[p]),_(n[p])}),[p]),(0,s.useEffect)((function(){m?(document.body.classList.add("dark"),document.getElementById("__next").classList.add("dark")):(document.body.classList.remove("dark"),document.getElementById("__next").classList.remove("dark"))}),[m]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.default,{children:[(0,i.jsx)("title",{children:"SP."}),(0,i.jsx)("link",{rel:"icon",href:"favicon.ico"})]}),(0,i.jsxs)(H,{menu:d,children:[(0,i.jsx)(Be,{}),(0,i.jsx)(te,Ke({id:"career"},o.career)),(0,i.jsx)(Pe,Ke({id:"skills"},o.skills)),(0,i.jsx)(Ie,Ke({id:"publications"},o.publications)),(0,i.jsx)(ue,Ke({id:"honours"},o.honours)),(0,i.jsx)(ae,Ke({id:"education"},o.education)),(0,i.jsx)(fe,Ke({id:"contacts"},o.contact))]})]})}},9406:function(e){e.exports={AccordionReadMore:"AccordionReadMore_AccordionReadMore__S3XuO",openAccordion:"AccordionReadMore_openAccordion__QfTRJ",content:"AccordionReadMore_content__T4NJ2",open:"AccordionReadMore_open__o9Wxo",hidden:"AccordionReadMore_hidden__WvOJ1"}},815:function(e){e.exports={BarChart:"BarChart_BarChart__IuzZw",bar:"BarChart_bar__7eSKt",barValue:"BarChart_barValue__mc0pX",value:"BarChart_value__O2Dnj",selected:"BarChart_selected__UZKp0",notSelected:"BarChart_notSelected__wPT0z",barLabel:"BarChart_barLabel__RdgVa"}},557:function(e){e.exports={CareerSection:"CareerSection_CareerSection__Mebb8",careerContent:"CareerSection_careerContent__J5Dgo",timeline:"CareerSection_timeline__jr_Kr",line:"CareerSection_line__Ndr7S",dark:"CareerSection_dark___V1jq"}},5111:function(e){e.exports={CareerStep:"CareerStep_CareerStep__EGEQV",dot:"CareerStep_dot__Q4QLO",timeContainer:"CareerStep_timeContainer__XjGg5",period:"CareerStep_period__qTFT2",svgContainer:"CareerStep_svgContainer__wZAmz",line:"CareerStep_line__SiuqQ",where:"CareerStep_where__TbGWA",infoContainer:"CareerStep_infoContainer__0q2wc",step:"CareerStep_step__TwCmQ",stepTitle:"CareerStep_stepTitle__2IhCe",jobRole:"CareerStep_jobRole__jhsED",singleSkill:"CareerStep_singleSkill__Cd_kR",reduce:"CareerStep_reduce__JKxPq",shine:"CareerStep_shine__Ccfgr"}},6122:function(e){e.exports={ContactSection:"ContactSection_ContactSection__F3_Kt",contactBox:"ContactSection_contactBox__0TTqc",contactDescription:"ContactSection_contactDescription__Q_EYY",linksContainer:"ContactSection_linksContainer___XpLa",dark:"ContactSection_dark__i8Dva"}},1180:function(e){e.exports={Cursor:"Cursor_Cursor__guljw",iconContainer:"Cursor_iconContainer__qXKRN",arrow:"Cursor_arrow__jobAT","arrow-moving":"Cursor_arrow-moving___psDp",inspect:"Cursor_inspect__mWlBh",intro:"Cursor_intro__bEIdB",smaller:"Cursor_smaller__Ot1vK",disappear:"Cursor_disappear__7Uw_P"}},5037:function(e){e.exports={EducationSection:"EducationSection_EducationSection__j9bH1",content:"EducationSection_content__RchBc",info:"EducationSection_info__P54pH",line:"EducationSection_line__Xdj7V",infoDescription:"EducationSection_infoDescription__0eS7L",infoGrade:"EducationSection_infoGrade__EMuRM",infoTitle:"EducationSection_infoTitle__SLWDR",infoPlace:"EducationSection_infoPlace__7LHdP",contentMobile:"EducationSection_contentMobile__TtIja",educationStepsContainer:"EducationSection_educationStepsContainer__m4PFi",educationButton:"EducationSection_educationButton__gmR9u",selected:"EducationSection_selected__CkU_J",currentElementContainer:"EducationSection_currentElementContainer__Qqs0z"}},5952:function(e){e.exports={HeaderMenu:"HeaderMenu_HeaderMenu__XyvS0",progress:"HeaderMenu_progress__G7vnm",headerDesktop:"HeaderMenu_headerDesktop__BO_RF",scaled:"HeaderMenu_scaled__QHENv",selected:"HeaderMenu_selected__QQ7Sv",index:"HeaderMenu_index__YlsGI",indexTwo:"HeaderMenu_indexTwo__3_ZBF",moving:"HeaderMenu_moving__OoYYq",headerMobile:"HeaderMenu_headerMobile__qd96a",burgerIcon:"HeaderMenu_burgerIcon__AOyPW",sideMenu:"HeaderMenu_sideMenu__sbheJ",options:"HeaderMenu_options__nX0Df",open:"HeaderMenu_open__hBoTs"}},2912:function(e){e.exports={HonoursSection:"HonoursSection_HonoursSection__aG_6q",content:"HonoursSection_content__9_jht",info:"HonoursSection_info__2egwW",infoTitle:"HonoursSection_infoTitle__jcEE_",infoDate:"HonoursSection_infoDate__9kvP5",infoDescription:"HonoursSection_infoDescription__s7M1R",slider:"HonoursSection_slider__DpCmB",imageContainer:"HonoursSection_imageContainer__p0y7B",line:"HonoursSection_line__V1M7k"}},1061:function(e){e.exports={Intro:"Intro_Intro__oMhGn",line:"Intro_line__047R3",sayHello:"Intro_sayHello__tMVbW",view:"Intro_view__wJz0t",introduction:"Intro_introduction__aOYLX",descriptionContainer:"Intro_descriptionContainer___LvaB",role:"Intro_role__vVRKF",description:"Intro_description__dg4jj",imgContainer:"Intro_imgContainer__NyUGD"}},9394:function(e){e.exports={PaperSection:"PaperSection_PaperSection__I2Egl",paperContent:"PaperSection_paperContent__OGp4Z",authors:"PaperSection_authors__COVgB",previewContainer:"PaperSection_previewContainer__SxGB7",preview:"PaperSection_preview__PW0gJ",abstractContent:"PaperSection_abstractContent__ZbuGG",linkContainer:"PaperSection_linkContainer__TPWeY"}},919:function(e){e.exports={SectionTitle:"SectionTitle_SectionTitle__sy1mC",right:"SectionTitle_right__57MXQ",center:"SectionTitle_center__3Rk0u",light:"SectionTitle_light__Bqreh",reveal:"SectionTitle_reveal__iuH5c"}},8395:function(e){e.exports={SkillsSection:"SkillsSection_SkillsSection__0HMNc",programmingLanguages:"SkillsSection_programmingLanguages__qeoXi",barChart:"SkillsSection_barChart__JXJ3m",otherKnowledge:"SkillsSection_otherKnowledge__ABTL_",otherTitle:"SkillsSection_otherTitle__bCcP_",softSkills:"SkillsSection_softSkills__yykK8",chart:"SkillsSection_chart__McJzx",softSkillsDescription:"SkillsSection_softSkillsDescription__NDfrc",langTable:"SkillsSection_langTable__6v1mT"}},5:function(e){e.exports={ToggleSwitch:"ToggleSwitch_ToggleSwitch__wgClv",switch:"ToggleSwitch_switch__Z4ABT",sliderRound:"ToggleSwitch_sliderRound__xMItL",dark:"ToggleSwitch_dark__BV3im"}},4393:function(e){e.exports={PortfolioLayout:"PortfolioLayout_PortfolioLayout__j6d6U"}}},function(e){e.O(0,[523,112,986,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);