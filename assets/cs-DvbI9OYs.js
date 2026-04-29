function Ue(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}function Me(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),e.nonce!==void 0&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}var Fe=(function(){function e(t){var r=this;this._insertTag=function(a){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(a,i),r.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var n=e.prototype;return n.hydrate=function(r){r.forEach(this._insertTag)},n.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Me(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Ue(a);try{i.insertRule(r,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},n.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e})(),w="-ms-",X="-moz-",m="-webkit-",xe="comm",le="rule",de="decl",Be="@import",we="@keyframes",Ne=Math.abs,Q=String.fromCharCode,Ae=Object.assign;function Re(e,n){return(((n<<2^P(e,0))<<2^P(e,1))<<2^P(e,2))<<2^P(e,3)}function Ce(e){return e.trim()}function Oe(e,n){return(e=n.exec(e))?e[0]:e}function h(e,n,t){return e.replace(n,t)}function ie(e,n){return e.indexOf(n)}function P(e,n){return e.charCodeAt(n)|0}function V(e,n,t){return e.slice(n,t)}function E(e){return e.length}function pe(e){return e.length}function G(e,n){return n.push(e),e}function Ve(e,n){return e.map(n).join("")}var ee=1,N=1,Pe=0,z=0,v=0,R="";function ne(e,n,t,r,a,i,o){return{value:e,root:n,parent:t,type:r,props:a,children:i,line:ee,column:N,length:o,return:""}}function O(e,n){return Ae(ne("",null,null,"",null,null,0),e,{length:-e.length},n)}function De(){return v}function je(){return v=z>0?P(R,--z):0,N--,v===10&&(N=1,ee--),v}function T(){return v=z<Pe?P(R,z++):0,N++,v===10&&(N=1,ee++),v}function U(){return P(R,z)}function K(){return z}function L(e,n){return V(R,e,n)}function D(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ze(e){return ee=N=1,Pe=E(R=e),z=0,[]}function Ie(e){return R="",e}function $(e){return Ce(L(z-1,oe(e===91?e+2:e===40?e+1:e)))}function Le(e){for(;(v=U())&&v<33;)T();return D(e)>2||D(v)>3?"":" "}function Ge(e,n){for(;--n&&T()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return L(e,K()+(n<6&&U()==32&&T()==32))}function oe(e){for(;T();)switch(v){case e:return z;case 34:case 39:e!==34&&e!==39&&oe(v);break;case 40:e===41&&oe(e);break;case 92:T();break}return z}function Ke(e,n){for(;T()&&e+v!==57;)if(e+v===84&&U()===47)break;return"/*"+L(n,z-1)+"*"+Q(e===47?e:T())}function $e(e){for(;!D(U());)T();return L(e,z)}function He(e){return Ie(H("",null,null,null,[""],e=ze(e),0,[0],e))}function H(e,n,t,r,a,i,o,s,l){for(var c=0,d=0,u=o,C=0,_=0,S=0,f=1,g=1,p=1,y=0,x="",W=a,I=i,b=r,k=x;g;)switch(S=y,y=T()){case 40:if(S!=108&&k.charCodeAt(u-1)==58){ie(k+=h($(y),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:k+=$(y);break;case 9:case 10:case 13:case 32:k+=Le(S);break;case 92:k+=Ge(K()-1,7);continue;case 47:switch(U()){case 42:case 47:G(Ye(Ke(T(),K()),n,t),l);break;default:k+="/"}break;case 123*f:s[c++]=E(k)*p;case 125*f:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+d:_>0&&E(k)-u&&G(_>32?he(k+";",r,t,u-1):he(h(k," ","")+";",r,t,u-2),l);break;case 59:k+=";";default:if(G(b=me(k,n,t,c,d,a,s,x,W=[],I=[],u),i),y===123)if(d===0)H(k,n,b,b,W,i,u,s,I);else switch(C){case 100:case 109:case 115:H(e,b,b,r&&G(me(e,b,b,0,0,a,s,x,a,W=[],u),I),a,I,u,s,r?W:I);break;default:H(k,b,b,b,[""],I,0,s,I)}}c=d=_=0,f=p=1,x=k="",u=o;break;case 58:u=1+E(k),_=S;default:if(f<1){if(y==123)--f;else if(y==125&&f++==0&&je()==125)continue}switch(k+=Q(y),y*f){case 38:p=d>0?1:(k+="\f",-1);break;case 44:s[c++]=(E(k)-1)*p,p=1;break;case 64:U()===45&&(k+=$(T())),C=U(),d=u=E(x=k+=$e(K())),y++;break;case 45:S===45&&E(k)==2&&(f=0)}}return i}function me(e,n,t,r,a,i,o,s,l,c,d){for(var u=a-1,C=a===0?i:[""],_=pe(C),S=0,f=0,g=0;S<r;++S)for(var p=0,y=V(e,u+1,u=Ne(f=o[S])),x=e;p<_;++p)(x=Ce(f>0?C[p]+" "+y:h(y,/&\f/g,C[p])))&&(l[g++]=x);return ne(e,n,t,a===0?le:s,l,c,d)}function Ye(e,n,t){return ne(e,n,t,xe,Q(De()),V(e,2,-2),0)}function he(e,n,t,r){return ne(e,n,t,de,V(e,0,r),V(e,r+1,-1),r)}function Te(e,n){switch(Re(e,n)){case 5103:return m+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return m+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return m+e+X+e+w+e+e;case 6828:case 4268:return m+e+w+e+e;case 6165:return m+e+w+"flex-"+e+e;case 5187:return m+e+h(e,/(\w+).+(:[^]+)/,m+"box-$1$2"+w+"flex-$1$2")+e;case 5443:return m+e+w+"flex-item-"+h(e,/flex-|-self/,"")+e;case 4675:return m+e+w+"flex-line-pack"+h(e,/align-content|flex-|-self/,"")+e;case 5548:return m+e+w+h(e,"shrink","negative")+e;case 5292:return m+e+w+h(e,"basis","preferred-size")+e;case 6060:return m+"box-"+h(e,"-grow","")+m+e+w+h(e,"grow","positive")+e;case 4554:return m+h(e,/([^-])(transform)/g,"$1"+m+"$2")+e;case 6187:return h(h(h(e,/(zoom-|grab)/,m+"$1"),/(image-set)/,m+"$1"),e,"")+e;case 5495:case 3959:return h(e,/(image-set\([^]*)/,m+"$1$`$1");case 4968:return h(h(e,/(.+:)(flex-)?(.*)/,m+"box-pack:$3"+w+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+m+e+e;case 4095:case 3583:case 4068:case 2532:return h(e,/(.+)-inline(.+)/,m+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(E(e)-1-n>6)switch(P(e,n+1)){case 109:if(P(e,n+4)!==45)break;case 102:return h(e,/(.+:)(.+)-([^]+)/,"$1"+m+"$2-$3$1"+X+(P(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~ie(e,"stretch")?Te(h(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(P(e,n+1)!==115)break;case 6444:switch(P(e,E(e)-3-(~ie(e,"!important")&&10))){case 107:return h(e,":",":"+m)+e;case 101:return h(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+m+(P(e,14)===45?"inline-":"")+"box$3$1"+m+"$2$3$1"+w+"$2box$3")+e}break;case 5936:switch(P(e,n+11)){case 114:return m+e+w+h(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return m+e+w+h(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return m+e+w+h(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return m+e+w+e+e}return e}function F(e,n){for(var t="",r=pe(e),a=0;a<r;a++)t+=n(e[a],a,e,n)||"";return t}function Xe(e,n,t,r){switch(e.type){case Be:case de:return e.return=e.return||e.value;case xe:return"";case we:return e.return=e.value+"{"+F(e.children,r)+"}";case le:e.value=e.props.join(",")}return E(t=F(e.children,r))?e.return=e.value+"{"+t+"}":""}function Ze(e){var n=pe(e);return function(t,r,a,i){for(var o="",s=0;s<n;s++)o+=e[s](t,r,a,i)||"";return o}}function Je(e){return function(n){n.root||(n=n.return)&&e(n)}}function Qe(e,n,t,r){if(e.length>-1&&!e.return)switch(e.type){case de:e.return=Te(e.value,e.length);break;case we:return F([O(e,{value:h(e.value,"@","@"+m)})],r);case le:if(e.length)return Ve(e.props,function(a){switch(Oe(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return F([O(e,{props:[h(a,/:(read-\w+)/,":"+X+"$1")]})],r);case"::placeholder":return F([O(e,{props:[h(a,/:(plac\w+)/,":"+m+"input-$1")]}),O(e,{props:[h(a,/:(plac\w+)/,":"+X+"$1")]}),O(e,{props:[h(a,/:(plac\w+)/,w+"input-$1")]})],r)}return""})}}var en=function(n,t,r){for(var a=0,i=0;a=i,i=U(),a===38&&i===12&&(t[r]=1),!D(i);)T();return L(n,z)},nn=function(n,t){var r=-1,a=44;do switch(D(a)){case 0:a===38&&U()===12&&(t[r]=1),n[r]+=en(z-1,t,r);break;case 2:n[r]+=$(a);break;case 4:if(a===44){n[++r]=U()===58?"&\f":"",t[r]=n[r].length;break}default:n[r]+=Q(a)}while(a=T());return n},tn=function(n,t){return Ie(nn(ze(n),t))},ue=new WeakMap,rn=function(n){if(!(n.type!=="rule"||!n.parent||n.length<1)){for(var t=n.value,r=n.parent,a=n.column===r.column&&n.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(n.props.length===1&&t.charCodeAt(0)!==58&&!ue.get(r))&&!a){ue.set(n,!0);for(var i=[],o=tn(t,i),s=r.props,l=0,c=0;l<o.length;l++)for(var d=0;d<s.length;d++,c++)n.props[c]=i[l]?o[l].replace(/&\f/g,s[d]):s[d]+" "+o[l]}}},an=function(n){if(n.type==="decl"){var t=n.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(n.return="",n.value="")}},on=[Qe],sn=function(n){var t=n.key;if(t==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(f){var g=f.getAttribute("data-emotion");g.indexOf(" ")!==-1&&(document.head.appendChild(f),f.setAttribute("data-s",""))})}var a=n.stylisPlugins||on,i={},o,s=[];o=n.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(f){for(var g=f.getAttribute("data-emotion").split(" "),p=1;p<g.length;p++)i[g[p]]=!0;s.push(f)});var l,c=[rn,an];{var d,u=[Xe,Je(function(f){d.insert(f)})],C=Ze(c.concat(a,u)),_=function(g){return F(He(g),C)};l=function(g,p,y,x){d=y,_(g?g+"{"+p.styles+"}":p.styles),x&&(S.inserted[p.name]=!0)}}var S={key:t,sheet:new Fe({key:t,container:o,nonce:n.nonce,speedy:n.speedy,prepend:n.prepend,insertionPoint:n.insertionPoint}),nonce:n.nonce,inserted:i,registered:{},insert:l};return S.sheet.hydrate(s),S},ln=!0;function _e(e,n,t){var r="";return t.split(" ").forEach(function(a){e[a]!==void 0?n.push(e[a]+";"):r+=a+" "}),r}var dn=function(n,t,r){var a=n.key+"-"+t.name;(r===!1||ln===!1)&&n.registered[a]===void 0&&(n.registered[a]=t.styles)},pn=function(n,t,r){dn(n,t,r);var a=n.key+"-"+t.name;if(n.inserted[t.name]===void 0){var i=t;do n.insert(t===i?"."+a:"",i,n.sheet,!0),i=i.next;while(i!==void 0)}};function cn(e){for(var n=0,t,r=0,a=e.length;a>=4;++r,a-=4)t=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,n=(t&65535)*1540483477+((t>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(a){case 3:n^=(e.charCodeAt(r+2)&255)<<16;case 2:n^=(e.charCodeAt(r+1)&255)<<8;case 1:n^=e.charCodeAt(r)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}var mn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function hn(e){var n=Object.create(null);return function(t){return n[t]===void 0&&(n[t]=e(t)),n[t]}}var un=/[A-Z]|^ms/g,yn=/_EMO_([^_]+?)_([^]*?)_EMO_/g,We=function(n){return n.charCodeAt(1)===45},ye=function(n){return n!=null&&typeof n!="boolean"},te=hn(function(e){return We(e)?e:e.replace(un,"-$&").toLowerCase()}),ke=function(n,t){switch(n){case"animation":case"animationName":if(typeof t=="string")return t.replace(yn,function(r,a,i){return q={name:a,styles:i,next:q},a})}return mn[n]!==1&&!We(n)&&typeof t=="number"&&t!==0?t+"px":t};function j(e,n,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return q={name:t.name,styles:t.styles,next:q},t.name;if(t.styles!==void 0){var r=t.next;if(r!==void 0)for(;r!==void 0;)q={name:r.name,styles:r.styles,next:q},r=r.next;var a=t.styles+";";return a}return kn(e,n,t)}case"function":{if(e!==void 0){var i=q,o=t(e);return q=i,j(e,n,o)}break}}if(n==null)return t;var s=n[t];return s!==void 0?s:t}function kn(e,n,t){var r="";if(Array.isArray(t))for(var a=0;a<t.length;a++)r+=j(e,n,t[a])+";";else for(var i in t){var o=t[i];if(typeof o!="object")n!=null&&n[o]!==void 0?r+=i+"{"+n[o]+"}":ye(o)&&(r+=te(i)+":"+ke(i,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(n==null||n[o[0]]===void 0))for(var s=0;s<o.length;s++)ye(o[s])&&(r+=te(i)+":"+ke(i,o[s])+";");else{var l=j(e,n,o);switch(i){case"animation":case"animationName":{r+=te(i)+":"+l+";";break}default:r+=i+"{"+l+"}"}}}return r}var fe=/label:\s*([^\s;\n{]+)\s*(;|$)/g,q,Y=function(n,t,r){if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&n[0].styles!==void 0)return n[0];var a=!0,i="";q=void 0;var o=n[0];o==null||o.raw===void 0?(a=!1,i+=j(r,t,o)):i+=o[0];for(var s=1;s<n.length;s++)i+=j(r,t,n[s]),a&&(i+=o[s]);fe.lastIndex=0;for(var l="",c;(c=fe.exec(i))!==null;)l+="-"+c[1];var d=cn(i)+l;return{name:d,styles:i,next:q}};function ge(e,n){if(e.inserted[n.name]===void 0)return e.insert("",n,e.sheet,!0)}function Se(e,n,t){var r=[],a=_e(e,r,t);return r.length<2?t:a+n(r)}var fn=function(n){var t=sn(n);t.sheet.speedy=function(s){this.isSpeedy=s},t.compat=!0;var r=function(){for(var l=arguments.length,c=new Array(l),d=0;d<l;d++)c[d]=arguments[d];var u=Y(c,t.registered,void 0);return pn(t,u,!1),t.key+"-"+u.name},a=function(){for(var l=arguments.length,c=new Array(l),d=0;d<l;d++)c[d]=arguments[d];var u=Y(c,t.registered),C="animation-"+u.name;return ge(t,{name:u.name,styles:"@keyframes "+C+"{"+u.styles+"}"}),C},i=function(){for(var l=arguments.length,c=new Array(l),d=0;d<l;d++)c[d]=arguments[d];var u=Y(c,t.registered);ge(t,u)},o=function(){for(var l=arguments.length,c=new Array(l),d=0;d<l;d++)c[d]=arguments[d];return Se(t.registered,r,gn(c))};return{css:r,cx:o,injectGlobal:i,keyframes:a,hydrate:function(l){l.forEach(function(c){t.inserted[c]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:_e.bind(null,t.registered),merge:Se.bind(null,t.registered,r)}},gn=function e(n){for(var t="",r=0;r<n.length;r++){var a=n[r];if(a!=null){var i=void 0;switch(typeof a){case"boolean":break;case"object":{if(Array.isArray(a))i=e(a);else{i="";for(var o in a)a[o]&&o&&(i&&(i+=" "),i+=o)}break}default:i=a}i&&(t&&(t+=" "),t+=i)}}return t},M=fn({key:"css"}),Sn=M.flush,vn=M.hydrate,bn=M.cx,xn=M.merge,wn=M.getRegisteredStyles,Cn=M.injectGlobal,Pn=M.keyframes,zn=M.css,In=M.sheet,Tn=M.cache;const _n=Object.freeze(Object.defineProperty({__proto__:null,cache:Tn,css:zn,cx:bn,flush:Sn,getRegisteredStyles:wn,hydrate:vn,injectGlobal:Cn,keyframes:Pn,merge:xn,sheet:In},Symbol.toStringTag,{value:"Module"}));let Wn=Math.random().toString(36).slice(2).replace(/[0-9]*/,"").substr(0,4),En=0;const ce=()=>Wn+(En++).toString(36),ve=[{name:"generateUniqueId",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/uniqueId.ts",description:`Generates a unique and HTML5 compliant identifier every time it is called. Internally it uses a 4
character random seed starting with a letter. This seed is unique to each instance of this
package meaning different versions of Canvas Kit on the page will have a different seed. Each
call will use a Base 36 string (10 numbers + 26 letters) based on an incremented number. The
incremented number always starts at 0 and can be reset for testing purposes using
[resetUniqueIdCount](#resetuniqueidcount). [setUniqueSeed](#setuniqueseed) can also be used for
testing or server side rendering to get the same results during hydration.`,declarations:[{name:"generateUniqueId",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/uniqueId.ts"}],tags:{},type:{kind:"function",parameters:[],members:[],returnType:{kind:"primitive",value:"string"}}},{name:"setUniqueSeed",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/uniqueId.ts",description:`Update the seed used by the id generator. This is useful for snapshot tests to help stabilize ids
generated each run. This could also be used for server-side hydration - if you choose the same
seed for server and set that on the client before components are rendered, the ids generated will
be the same.`,declarations:[{name:"setUniqueSeed",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/uniqueId.ts"}],tags:{example:`// set in a script tag from the server
setSeed(window.__ID_SEED); // set in a script tag from the server

// jest setup
before(() => {
  setSeed('a')
})`},type:{kind:"function",parameters:[{kind:"parameter",name:"s",type:{kind:"primitive",value:"string"},required:!0,rest:!1,description:"",declarations:[{name:"s",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/uniqueId.ts"}],tags:{}}],members:[],returnType:{kind:"primitive",value:"void"}}},{name:"resetUniqueIdCount",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/uniqueId.ts",description:"This should only be called for tests in an `beforeEach`",declarations:[{name:"resetUniqueIdCount",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/uniqueId.ts"}],tags:{},type:{kind:"function",parameters:[],members:[],returnType:{kind:"primitive",value:"void"}}}];window.__updateDocs?window.__updateDocs?.(ve):window.__docs=(window.__docs||[]).concat(ve);function qn(e){return typeof window<"u"&&(window.workday=window.workday||{},window.workday.__stylingCacheInstance=e),e}function Un(){return typeof window<"u"?window.workday?.__stylingCacheInstance:void 0}let re=Un();const se={};function Mn(e){return e.replace(/([a-z]*[ (]*)(--[^\s;,'})]+)/gi,(n,t,r)=>t==="var("?n:`${t}var(${r})`)}function Z(e){return typeof e=="string"?Mn(e):e}function J(e){if(typeof e=="object"){const n={};for(const t in e)e.hasOwnProperty(t)&&(n[t]=J(e[t]));return n}return Z(e)}function Dn(e,n){return n?`var(${e}, ${n.startsWith("--")?`var(${n})`:n})`:`var(${e})`}function jn(...e){const n=e[0];if(typeof n=="object"&&!n.id)return Ee(n,e[1]);const t=e[0].id||ce();e=e[0].args||e;const r=a=>{const i={};return e.forEach(o=>{a[o]&&(i[r[o]]=Z(a[o]))}),i};return e.forEach(a=>{r[a]=`--${a}-${t}`},{}),r}function Ee(e,n){const t=n||ce(),r=a=>{const i={};for(const o in a)if(typeof a[o]=="string"&&r[o]&&(i[r[o]]=Z(a[o])),typeof a[o]=="object")for(const s in a[o])typeof a[o][s]=="string"&&r[o][s]&&(i[r[o][s]]=Z(a[o][s]));return i};r.$$defaults={};for(const a in e){if(typeof e[a]=="string"){const i=`--${a}-${t}`;r[a]=i,r.$$defaults[i]=e[a]}if(typeof e[a]=="object"){r[a]={};for(const i in e[a])if(typeof e[a][i]=="string"){const o=`--${a}-${i}-${t}`;r[a][i]=o,r.$$defaults[o]=e[a][i]}}}return r}function Fn(e){const n=t=>B(Object.keys(e).map(r=>e[r][t[r]]||t[r]&&e[r]._).filter(r=>r));return Object.keys(e).forEach(t=>{n[t]=e[t]}),n}function Bn(e,n){return t=>B(n.map(r=>Object.keys(r.modifiers).reduce((i,o)=>i&&r.modifiers[o]===t[o],!0)?r.styles:""))}function Nn(e){return e.hasOwnProperty("style")||e.hasOwnProperty("className")}function qe(e){const n=A();if(typeof e=="string")return{className:e};if(!e)return{};if(Nn(e))return e;if(!Array.isArray(e)){let t=!1;const r={},a={};for(const i in e)i.startsWith("--")?a[i]=J(e[i]):(r[i]=J(e[i]),t=!0);if(t){const i=n.css(r);return{style:a,className:i}}return{style:e}}return e.map(qe).reduce((t,r)=>({className:B([t.className,r.className]),style:{...t.style,...r.style}}),{})}function ae(...e){const n=A();return e.map(t=>{if(typeof t=="string")return t;if(t===null)return"";if(typeof t=="object"){if("__emotion_styles"in t)return n.css(t);if(t.name)return se[`${n.cache.key}-${t.name}`]=!0,n.css(t)}const r=J(t),{styles:a}=Y([r]),i=ce();return se[`${n.cache.key}-${i}`]=!0,n.css({name:i,styles:a})}).join(" ")}function Ln(e,n){const{cs:t,style:r,className:a,...i}=e,o=A();let s=!1;const l=qe([n,a,t]),c=(l.className||"").split(" ");return c.forEach(d=>{!se[d]&&o.cache.registered[d]&&(s=!0)}),l.style={...l.style,...r},s&&(l.className=A().cx(c)),{...l,...i}}function An(e){return!!e}function Rn(e,n,t){return t.indexOf(e)===n}function B(e){return e.join(" ").split(" ").filter((n,t,r)=>An(n)&&Rn(n,t,r)).join(" ")}function On(e){return e?Object.keys(e).reduce((n,t)=>(n[`${t}Part`]=`[data-part="${e[t]}"]`,n),{}):{}}function Vn(e){return e?Object.keys(e).reduce((n,t)=>(n[t]={"data-part":e[t]},n),{}):{}}function Gn(e,n){const{parts:t,vars:r,base:a,modifiers:i,compound:o,defaultModifiers:s}=e,l=e.extends,c=Vn({...l?.__parts,...t}),d=Ee(r||{},n),u=On({...l?.__parts,...t});Object.keys(l?.vars||{}).forEach(p=>{p!=="$$defaults"&&(d[p]=l?.vars[p])});const C=ae({...d.$$defaults,boxSizing:"border-box",...typeof a=="function"?a({...d,...u}):a}),_=l?.modifiers||(()=>""),S=i?Fn(Object.keys(i).reduce((p,y)=>(p[y]=Object.keys(i[y]).reduce((x,W)=>{const I=i[y][W];return x[W]=ae(typeof I=="function"?I({...d,...u}):I),x},{}),p),{})):()=>"";Object.keys(_).forEach(p=>{Object.keys(_[p]).forEach(y=>{S[p]||(S[p]={}),S[p][y]=B([_[p][y],S[p][y]])})});const f=o?Bn(i,o.map(p=>({modifiers:p.modifiers,styles:ae(typeof p.styles=="function"?p.styles({...d,...u}):p.styles)}))):()=>"",g=(p=>{const y={...l?.defaultModifiers,...s};for(const b in p)p[b]!==void 0&&(y[b]=p[b]);const x=l?.(y),W=S(y),I=p?Object.keys(p).reduce((b,k)=>(k in d&&!(k in S&&p[k]in S[k])&&(b[k]=p[k]),b),{}):{};return{className:B([x?.className,C,W,W.replace(/css-/g,"m"),o?f(y):""]),style:{...x?.style,...d(I)}}});return g.parts=c,g.vars=d,g.base=B([l?.base,C]),g.modifiers=S,g.defaultModifiers={...l?.defaultModifiers,...s},g.__extends=l,g.__parts=t,g}function A(){return re||(re=qn(_n)),re}function Kn(){return A().cache}function $n(...e){return A().keyframes(...e)}const be=[{name:"createStylesCache",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"createStylesCache",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"external",name:"Record",url:"https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type",typeParameters:[{kind:"primitive",value:"string"},{kind:"primitive",value:"boolean"}]}},{name:"CSSProperties",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"CSSProperties",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"type",typeParameters:[],value:{kind:"symbol",name:"CSS.PropertiesFallback",typeParameters:[{kind:"union",value:[{kind:"primitive",value:"number"},{kind:"primitive",value:"string"}]}],value:"PropertiesFallback<TLength, TTime>"}}},{name:"CSSPropertiesWithMultiValues",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"CSSPropertiesWithMultiValues",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"type",typeParameters:[],value:{kind:"unknown",value:"unknown",text:`{
  [K in keyof CSSProperties]:
    | (CSSProperties[K] | string)
    | Array<Extract<CSSProperties[K] | (string & {}), string>>;
}`}}},{name:"CSSPseudos",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"CSSPseudos",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"type",typeParameters:[],value:{kind:"unknown",value:"unknown",text:"{[K in CSS.Pseudos]?: CSSObjectWithVars}"}}},{name:"CSSOthersObject",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"CSSOthersObject",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"object",properties:[],indexSignature:{kind:"indexSignature",name:"propertiesName",type:{kind:"primitive",value:"string"},value:{kind:"symbol",name:"CSSInterpolation",value:"CSSInterpolation"}}}},{name:"ArrayStyleProps",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"ArrayStyleProps",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"object",properties:[{kind:"property",name:"length",required:!0,type:{kind:"primitive",value:"number"},description:"Gets or sets the length of the array. This is a number one higher than the highest index in the array.",declarations:[{name:"length",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}},{kind:"property",name:"toString",type:{kind:"function",parameters:[],members:[],returnType:{kind:"primitive",value:"string"}},description:"Returns a string representation of an array.",declarations:[{name:"toString",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}},{kind:"property",name:"toLocaleString",type:{kind:"function",parameters:[],members:[],returnType:{kind:"primitive",value:"string"}},description:"Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.",declarations:[{name:"toLocaleString",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}},{kind:"property",name:"pop",type:{kind:"function",parameters:[],members:[],returnType:{kind:"union",value:[{kind:"symbol",name:"T",value:"T"},{kind:"primitive",value:"undefined"}]}},description:`Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.`,declarations:[{name:"pop",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}},{kind:"property",name:"push",type:{kind:"function",parameters:[{kind:"parameter",name:"items",type:{kind:"array",value:{kind:"symbol",name:"T",value:"T"}},required:!0,rest:!0,description:"New elements to add to the array.",declarations:[{name:"items",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`items
 
New elements to add to the array.`}}],members:[],returnType:{kind:"primitive",value:"number"}},description:"Appends new elements to the end of an array, and returns the new length of the array.",declarations:[{name:"push",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`items
 
New elements to add to the array.`}},{kind:"property",name:"concat",type:{kind:"function",parameters:[{kind:"parameter",name:"items",type:{kind:"array",value:{kind:"symbol",name:"ConcatArray",typeParameters:[{kind:"symbol",name:"T",value:"T"}],value:"ConcatArray<T>"}},required:!0,rest:!0,description:"Additional arrays and/or items to add to the end of the array.",declarations:[{name:"items",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`items
 
Additional arrays and/or items to add to the end of the array.`}}],members:[],returnType:{kind:"array",value:{kind:"symbol",name:"T",value:"T"}}},description:`Combines two or more arrays.
This method returns a new array without modifying any existing arrays.`,declarations:[{name:"concat",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"},{name:"concat",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`items
 
Additional arrays and/or items to add to the end of the array.
items
 
Additional arrays and/or items to add to the end of the array.`}},{kind:"property",name:"join",type:{kind:"function",parameters:[{kind:"parameter",name:"separator",type:{kind:"primitive",value:"string"},required:!1,rest:!1,description:"A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.",declarations:[{name:"separator",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`separator
 
A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.`}}],members:[],returnType:{kind:"primitive",value:"string"}},description:"Adds all the elements of an array into a string, separated by the specified separator string.",declarations:[{name:"join",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`separator
 
A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.`}},{kind:"property",name:"reverse",type:{kind:"function",parameters:[],members:[],returnType:{kind:"array",value:{kind:"symbol",name:"T",value:"T"}}},description:`Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.`,declarations:[{name:"reverse",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}},{kind:"property",name:"shift",type:{kind:"function",parameters:[],members:[],returnType:{kind:"union",value:[{kind:"symbol",name:"T",value:"T"},{kind:"primitive",value:"undefined"}]}},description:`Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.`,declarations:[{name:"shift",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}},{kind:"property",name:"slice",type:{kind:"function",parameters:[{kind:"parameter",name:"start",type:{kind:"primitive",value:"number"},required:!1,rest:!1,description:`The beginning index of the specified portion of the array.
If start is undefined, then the slice begins at index 0.`,declarations:[{name:"start",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`start
 
The beginning index of the specified portion of the array.
If start is undefined, then the slice begins at index 0.`}},{kind:"parameter",name:"end",type:{kind:"primitive",value:"number"},required:!1,rest:!1,description:`The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
If end is undefined, then the slice extends to the end of the array.`,declarations:[{name:"end",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`end
 
The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
If end is undefined, then the slice extends to the end of the array.`}}],members:[],returnType:{kind:"array",value:{kind:"symbol",name:"T",value:"T"}}},description:`Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.`,declarations:[{name:"slice",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`start
 
The beginning index of the specified portion of the array.
If start is undefined, then the slice begins at index 0.
end
 
The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
If end is undefined, then the slice extends to the end of the array.`}},{kind:"property",name:"sort",type:{kind:"function",parameters:[{kind:"parameter",name:"compareFn",type:{kind:"function",parameters:[{kind:"parameter",name:"a",type:{kind:"symbol",name:"T",value:"T"},required:!0,rest:!1,description:"",declarations:[{name:"a",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}},{kind:"parameter",name:"b",type:{kind:"symbol",name:"T",value:"T"},required:!0,rest:!1,description:"",declarations:[{name:"b",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}}],members:[],returnType:{kind:"primitive",value:"number"}},required:!1,rest:!1,description:"Function used to determine the order of the elements. It is expected to return\na negative value if the first argument is less than the second argument, zero if they're equal, and a positive\nvalue otherwise. If omitted, the elements are sorted in ascending, ASCII character order.\n```ts\n[11,2,22,1].sort((a, b) => a - b)\n```",declarations:[{name:"compareFn",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`compareFn
 
Function used to determine the order of the elements. It is expected to return
a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
\`\`\`ts
[11,2,22,1].sort((a, b) => a - b)
\`\`\``}}],members:[],returnType:{kind:"unknown",value:"unknown",text:"this"}},description:`Sorts an array in place.
This method mutates the array and returns a reference to the same array.`,declarations:[{name:"sort",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`compareFn
 
Function used to determine the order of the elements. It is expected to return
a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
\`\`\`ts
[11,2,22,1].sort((a, b) => a - b)
\`\`\``}},{kind:"property",name:"splice",type:{kind:"function",parameters:[{kind:"parameter",name:"start",type:{kind:"primitive",value:"number"},required:!0,rest:!1,description:"The zero-based location in the array from which to start removing elements.",declarations:[{name:"start",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`start
 
The zero-based location in the array from which to start removing elements.`}},{kind:"parameter",name:"deleteCount",type:{kind:"primitive",value:"number"},required:!1,rest:!1,description:"The number of elements to remove.",declarations:[{name:"deleteCount",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`deleteCount
 
The number of elements to remove.`}}],members:[],returnType:{kind:"array",value:{kind:"symbol",name:"T",value:"T"}}},description:"Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.",declarations:[{name:"splice",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"},{name:"splice",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`start
 
The zero-based location in the array from which to start removing elements.
deleteCount
 
The number of elements to remove.
start
 
The zero-based location in the array from which to start removing elements.
deleteCount
 
The number of elements to remove.
items
 
Elements to insert into the array in place of the deleted elements.`,returns:`An array containing the elements that were deleted.
An array containing the elements that were deleted.`}},{kind:"property",name:"unshift",type:{kind:"function",parameters:[{kind:"parameter",name:"items",type:{kind:"array",value:{kind:"symbol",name:"T",value:"T"}},required:!0,rest:!0,description:"Elements to insert at the start of the array.",declarations:[{name:"items",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`items
 
Elements to insert at the start of the array.`}}],members:[],returnType:{kind:"primitive",value:"number"}},description:"Inserts new elements at the start of an array, and returns the new length of the array.",declarations:[{name:"unshift",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`items
 
Elements to insert at the start of the array.`}},{kind:"property",name:"indexOf",type:{kind:"function",parameters:[{kind:"parameter",name:"searchElement",type:{kind:"symbol",name:"T",value:"T"},required:!0,rest:!1,description:"The value to locate in the array.",declarations:[{name:"searchElement",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`searchElement
 
The value to locate in the array.`}},{kind:"parameter",name:"fromIndex",type:{kind:"primitive",value:"number"},required:!1,rest:!1,description:"The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.",declarations:[{name:"fromIndex",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`fromIndex
 
The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.`}}],members:[],returnType:{kind:"primitive",value:"number"}},description:"Returns the index of the first occurrence of a value in an array, or -1 if it is not present.",declarations:[{name:"indexOf",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`searchElement
 
The value to locate in the array.
fromIndex
 
The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.`}},{kind:"property",name:"lastIndexOf",type:{kind:"function",parameters:[{kind:"parameter",name:"searchElement",type:{kind:"symbol",name:"T",value:"T"},required:!0,rest:!1,description:"The value to locate in the array.",declarations:[{name:"searchElement",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`searchElement
 
The value to locate in the array.`}},{kind:"parameter",name:"fromIndex",type:{kind:"primitive",value:"number"},required:!1,rest:!1,description:"The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.",declarations:[{name:"fromIndex",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`fromIndex
 
The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.`}}],members:[],returnType:{kind:"primitive",value:"number"}},description:"Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.",declarations:[{name:"lastIndexOf",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`searchElement
 
The value to locate in the array.
fromIndex
 
The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.`}},{kind:"property",name:"every",type:{kind:"function",typeParameters:[],parameters:[{kind:"parameter",name:"predicate",type:{kind:"function",parameters:[{kind:"parameter",name:"value",type:{kind:"symbol",name:"T",value:"T"},required:!0,rest:!1,description:"",declarations:[{name:"value",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}},{kind:"parameter",name:"index",type:{kind:"primitive",value:"number"},required:!0,rest:!1,description:"",declarations:[{name:"index",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}},{kind:"parameter",name:"array",type:{kind:"array",value:{kind:"symbol",name:"T",value:"T"}},required:!0,rest:!1,description:"",declarations:[{name:"array",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}}],members:[],returnType:{kind:"unknown",value:"unknown",text:"value is S"}},required:!0,rest:!1,description:`A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.`,declarations:[{name:"predicate",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`predicate
 
A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.`}},{kind:"parameter",name:"thisArg",type:{kind:"primitive",value:"any"},required:!1,rest:!1,description:`An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.`,declarations:[{name:"thisArg",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`thisArg
 
An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.`}}],members:[],returnType:{kind:"unknown",value:"unknown",text:"this is S[]"}},description:"Determines whether all the members of an array satisfy the specified test.",declarations:[{name:"every",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"},{name:"every",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`predicate
 
A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.
thisArg
 
An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.
predicate
 
A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.
thisArg
 
An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.`}},{kind:"property",name:"some",type:{kind:"function",parameters:[{kind:"parameter",name:"predicate",type:{kind:"function",parameters:[{kind:"parameter",name:"value",type:{kind:"symbol",name:"T",value:"T"},required:!0,rest:!1,description:"",declarations:[{name:"value",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}},{kind:"parameter",name:"index",type:{kind:"primitive",value:"number"},required:!0,rest:!1,description:"",declarations:[{name:"index",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}},{kind:"parameter",name:"array",type:{kind:"array",value:{kind:"symbol",name:"T",value:"T"}},required:!0,rest:!1,description:"",declarations:[{name:"array",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}}],members:[],returnType:{kind:"primitive",value:"unknown"}},required:!0,rest:!1,description:`A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.`,declarations:[{name:"predicate",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`predicate
 
A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.`}},{kind:"parameter",name:"thisArg",type:{kind:"primitive",value:"any"},required:!1,rest:!1,description:`An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.`,declarations:[{name:"thisArg",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`thisArg
 
An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.`}}],members:[],returnType:{kind:"primitive",value:"boolean"}},description:"Determines whether the specified callback function returns true for any element of an array.",declarations:[{name:"some",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`predicate
 
A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.
thisArg
 
An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.`}},{kind:"property",name:"forEach",type:{kind:"function",parameters:[{kind:"parameter",name:"callbackfn",type:{kind:"function",parameters:[{kind:"parameter",name:"value",type:{kind:"symbol",name:"T",value:"T"},required:!0,rest:!1,description:"",declarations:[{name:"value",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}},{kind:"parameter",name:"index",type:{kind:"primitive",value:"number"},required:!0,rest:!1,description:"",declarations:[{name:"index",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}},{kind:"parameter",name:"array",type:{kind:"array",value:{kind:"symbol",name:"T",value:"T"}},required:!0,rest:!1,description:"",declarations:[{name:"array",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}}],members:[],returnType:{kind:"primitive",value:"void"}},required:!0,rest:!1,description:"A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.",declarations:[{name:"callbackfn",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`callbackfn
 
A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.`}},{kind:"parameter",name:"thisArg",type:{kind:"primitive",value:"any"},required:!1,rest:!1,description:"An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.",declarations:[{name:"thisArg",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`thisArg
 
An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.`}}],members:[],returnType:{kind:"primitive",value:"void"}},description:"Performs the specified action for each element in an array.",declarations:[{name:"forEach",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`callbackfn
 
A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
thisArg
 
An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.`}},{kind:"property",name:"map",type:{kind:"function",typeParameters:[],parameters:[{kind:"parameter",name:"callbackfn",type:{kind:"function",parameters:[{kind:"parameter",name:"value",type:{kind:"symbol",name:"T",value:"T"},required:!0,rest:!1,description:"",declarations:[{name:"value",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}},{kind:"parameter",name:"index",type:{kind:"primitive",value:"number"},required:!0,rest:!1,description:"",declarations:[{name:"index",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}},{kind:"parameter",name:"array",type:{kind:"array",value:{kind:"symbol",name:"T",value:"T"}},required:!0,rest:!1,description:"",declarations:[{name:"array",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}}],members:[],returnType:{kind:"symbol",name:"U",value:"U"}},required:!0,rest:!1,description:"A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.",declarations:[{name:"callbackfn",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`callbackfn
 
A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.`}},{kind:"parameter",name:"thisArg",type:{kind:"primitive",value:"any"},required:!1,rest:!1,description:"An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.",declarations:[{name:"thisArg",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`thisArg
 
An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.`}}],members:[],returnType:{kind:"array",value:{kind:"symbol",name:"U",value:"U"}}},description:"Calls a defined callback function on each element of an array, and returns an array that contains the results.",declarations:[{name:"map",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`callbackfn
 
A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
thisArg
 
An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.`}},{kind:"property",name:"filter",type:{kind:"function",typeParameters:[],parameters:[{kind:"parameter",name:"predicate",type:{kind:"function",parameters:[{kind:"parameter",name:"value",type:{kind:"symbol",name:"T",value:"T"},required:!0,rest:!1,description:"",declarations:[{name:"value",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}},{kind:"parameter",name:"index",type:{kind:"primitive",value:"number"},required:!0,rest:!1,description:"",declarations:[{name:"index",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}},{kind:"parameter",name:"array",type:{kind:"array",value:{kind:"symbol",name:"T",value:"T"}},required:!0,rest:!1,description:"",declarations:[{name:"array",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}}],members:[],returnType:{kind:"unknown",value:"unknown",text:"value is S"}},required:!0,rest:!1,description:"A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.",declarations:[{name:"predicate",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`predicate
 
A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.`}},{kind:"parameter",name:"thisArg",type:{kind:"primitive",value:"any"},required:!1,rest:!1,description:"An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.",declarations:[{name:"thisArg",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`thisArg
 
An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.`}}],members:[],returnType:{kind:"array",value:{kind:"symbol",name:"S",value:"S"}}},description:"Returns the elements of an array that meet the condition specified in a callback function.",declarations:[{name:"filter",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"},{name:"filter",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`predicate
 
A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
thisArg
 
An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
predicate
 
A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
thisArg
 
An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.`}},{kind:"property",name:"reduce",type:{kind:"function",parameters:[{kind:"parameter",name:"callbackfn",type:{kind:"function",parameters:[{kind:"parameter",name:"previousValue",type:{kind:"symbol",name:"T",value:"T"},required:!0,rest:!1,description:"",declarations:[{name:"previousValue",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}},{kind:"parameter",name:"currentValue",type:{kind:"symbol",name:"T",value:"T"},required:!0,rest:!1,description:"",declarations:[{name:"currentValue",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}},{kind:"parameter",name:"currentIndex",type:{kind:"primitive",value:"number"},required:!0,rest:!1,description:"",declarations:[{name:"currentIndex",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}},{kind:"parameter",name:"array",type:{kind:"array",value:{kind:"symbol",name:"T",value:"T"}},required:!0,rest:!1,description:"",declarations:[{name:"array",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}}],members:[],returnType:{kind:"symbol",name:"T",value:"T"}},required:!0,rest:!1,description:"A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.",declarations:[{name:"callbackfn",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`callbackfn
 
A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.`}}],members:[],returnType:{kind:"symbol",name:"T",value:"T"}},description:"Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.",declarations:[{name:"reduce",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"},{name:"reduce",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"},{name:"reduce",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`callbackfn
 
A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
initialValue
 
If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
callbackfn
 
A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
initialValue
 
If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.`}},{kind:"property",name:"reduceRight",type:{kind:"function",parameters:[{kind:"parameter",name:"callbackfn",type:{kind:"function",parameters:[{kind:"parameter",name:"previousValue",type:{kind:"symbol",name:"T",value:"T"},required:!0,rest:!1,description:"",declarations:[{name:"previousValue",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}},{kind:"parameter",name:"currentValue",type:{kind:"symbol",name:"T",value:"T"},required:!0,rest:!1,description:"",declarations:[{name:"currentValue",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}},{kind:"parameter",name:"currentIndex",type:{kind:"primitive",value:"number"},required:!0,rest:!1,description:"",declarations:[{name:"currentIndex",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}},{kind:"parameter",name:"array",type:{kind:"array",value:{kind:"symbol",name:"T",value:"T"}},required:!0,rest:!1,description:"",declarations:[{name:"array",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{}}],members:[],returnType:{kind:"symbol",name:"T",value:"T"}},required:!0,rest:!1,description:"A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.",declarations:[{name:"callbackfn",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`callbackfn
 
A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.`}}],members:[],returnType:{kind:"symbol",name:"T",value:"T"}},description:"Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.",declarations:[{name:"reduceRight",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"},{name:"reduceRight",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"},{name:"reduceRight",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es5.d.ts"}],tags:{param:`callbackfn
 
A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
initialValue
 
If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
callbackfn
 
A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
initialValue
 
If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.`}},{kind:"property",name:"find",type:{kind:"function",typeParameters:[],parameters:[{kind:"parameter",name:"predicate",type:{kind:"function",parameters:[{kind:"parameter",name:"value",type:{kind:"symbol",name:"T",value:"T"},required:!0,rest:!1,description:"",declarations:[{name:"value",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.core.d.ts"}],tags:{}},{kind:"parameter",name:"index",type:{kind:"primitive",value:"number"},required:!0,rest:!1,description:"",declarations:[{name:"index",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.core.d.ts"}],tags:{}},{kind:"parameter",name:"obj",type:{kind:"array",value:{kind:"symbol",name:"T",value:"T"}},required:!0,rest:!1,description:"",declarations:[{name:"obj",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.core.d.ts"}],tags:{}}],members:[],returnType:{kind:"unknown",value:"unknown",text:"value is S"}},required:!0,rest:!1,description:`find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.`,declarations:[{name:"predicate",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.core.d.ts"}],tags:{param:`predicate
 
find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.`}},{kind:"parameter",name:"thisArg",type:{kind:"primitive",value:"any"},required:!1,rest:!1,description:`If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.`,declarations:[{name:"thisArg",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.core.d.ts"}],tags:{param:`thisArg
 
If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.`}}],members:[],returnType:{kind:"union",value:[{kind:"symbol",name:"S",value:"S"},{kind:"primitive",value:"undefined"}]}},description:`Returns the value of the first element in the array where predicate is true, and undefined
otherwise.`,declarations:[{name:"find",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.core.d.ts"},{name:"find",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.core.d.ts"}],tags:{param:`predicate
 
find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.
thisArg
 
If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.`}},{kind:"property",name:"findIndex",type:{kind:"function",parameters:[{kind:"parameter",name:"predicate",type:{kind:"function",parameters:[{kind:"parameter",name:"value",type:{kind:"symbol",name:"T",value:"T"},required:!0,rest:!1,description:"",declarations:[{name:"value",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.core.d.ts"}],tags:{}},{kind:"parameter",name:"index",type:{kind:"primitive",value:"number"},required:!0,rest:!1,description:"",declarations:[{name:"index",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.core.d.ts"}],tags:{}},{kind:"parameter",name:"obj",type:{kind:"array",value:{kind:"symbol",name:"T",value:"T"}},required:!0,rest:!1,description:"",declarations:[{name:"obj",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.core.d.ts"}],tags:{}}],members:[],returnType:{kind:"primitive",value:"unknown"}},required:!0,rest:!1,description:`find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.`,declarations:[{name:"predicate",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.core.d.ts"}],tags:{param:`predicate
 
find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.`}},{kind:"parameter",name:"thisArg",type:{kind:"primitive",value:"any"},required:!1,rest:!1,description:`If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.`,declarations:[{name:"thisArg",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.core.d.ts"}],tags:{param:`thisArg
 
If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.`}}],members:[],returnType:{kind:"primitive",value:"number"}},description:`Returns the index of the first element in the array where predicate is true, and -1
otherwise.`,declarations:[{name:"findIndex",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.core.d.ts"}],tags:{param:`predicate
 
find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.
thisArg
 
If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.`}},{kind:"property",name:"fill",type:{kind:"function",parameters:[{kind:"parameter",name:"value",type:{kind:"symbol",name:"T",value:"T"},required:!0,rest:!1,description:"value to fill array section with",declarations:[{name:"value",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.core.d.ts"}],tags:{param:`value
 
value to fill array section with`}},{kind:"parameter",name:"start",type:{kind:"primitive",value:"number"},required:!1,rest:!1,description:`index to start filling the array at. If start is negative, it is treated as
length+start where length is the length of the array.`,declarations:[{name:"start",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.core.d.ts"}],tags:{param:`start
 
index to start filling the array at. If start is negative, it is treated as
length+start where length is the length of the array.`}},{kind:"parameter",name:"end",type:{kind:"primitive",value:"number"},required:!1,rest:!1,description:`index to stop filling the array at. If end is negative, it is treated as
length+end.`,declarations:[{name:"end",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.core.d.ts"}],tags:{param:`end
 
index to stop filling the array at. If end is negative, it is treated as
length+end.`}}],members:[],returnType:{kind:"unknown",value:"unknown",text:"this"}},description:"Changes all array elements from `start` to `end` index to a static `value` and returns the modified array",declarations:[{name:"fill",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.core.d.ts"}],tags:{param:`value
 
value to fill array section with
start
 
index to start filling the array at. If start is negative, it is treated as
length+start where length is the length of the array.
end
 
index to stop filling the array at. If end is negative, it is treated as
length+end.`}},{kind:"property",name:"copyWithin",type:{kind:"function",parameters:[{kind:"parameter",name:"target",type:{kind:"primitive",value:"number"},required:!0,rest:!1,description:`If target is negative, it is treated as length+target where length is the
length of the array.`,declarations:[{name:"target",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.core.d.ts"}],tags:{param:`target
 
If target is negative, it is treated as length+target where length is the
length of the array.`}},{kind:"parameter",name:"start",type:{kind:"primitive",value:"number"},required:!0,rest:!1,description:`If start is negative, it is treated as length+start. If end is negative, it
is treated as length+end.`,declarations:[{name:"start",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.core.d.ts"}],tags:{param:`start
 
If start is negative, it is treated as length+start. If end is negative, it
is treated as length+end.`}},{kind:"parameter",name:"end",type:{kind:"primitive",value:"number"},required:!1,rest:!1,description:"If not specified, length of the this object is used as its default value.",declarations:[{name:"end",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.core.d.ts"}],tags:{param:`end
 
If not specified, length of the this object is used as its default value.`}}],members:[],returnType:{kind:"unknown",value:"unknown",text:"this"}},description:`Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target`,declarations:[{name:"copyWithin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.core.d.ts"}],tags:{param:`target
 
If target is negative, it is treated as length+target where length is the
length of the array.
start
 
If start is negative, it is treated as length+start. If end is negative, it
is treated as length+end.
end
 
If not specified, length of the this object is used as its default value.`}},{kind:"property",name:"entries",type:{kind:"function",parameters:[],members:[],returnType:{kind:"symbol",name:"IterableIterator",typeParameters:[{kind:"tuple",value:[{kind:"primitive",value:"number"},{kind:"symbol",name:"T",value:"T"}]}],value:"IterableIterator<T>"}},description:"Returns an iterable of key, value pairs for every entry in the array",declarations:[{name:"entries",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.iterable.d.ts"}],tags:{}},{kind:"property",name:"keys",type:{kind:"function",parameters:[],members:[],returnType:{kind:"symbol",name:"IterableIterator",typeParameters:[{kind:"primitive",value:"number"}],value:"IterableIterator<T>"}},description:"Returns an iterable of keys in the array",declarations:[{name:"keys",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.iterable.d.ts"}],tags:{}},{kind:"property",name:"values",type:{kind:"function",parameters:[],members:[],returnType:{kind:"symbol",name:"IterableIterator",typeParameters:[{kind:"symbol",name:"T",value:"T"}],value:"IterableIterator<T>"}},description:"Returns an iterable of values in the array",declarations:[{name:"values",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.iterable.d.ts"}],tags:{}},{kind:"property",name:"includes",type:{kind:"function",parameters:[{kind:"parameter",name:"searchElement",type:{kind:"symbol",name:"T",value:"T"},required:!0,rest:!1,description:"The element to search for.",declarations:[{name:"searchElement",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2016.array.include.d.ts"}],tags:{param:`searchElement
 
The element to search for.`}},{kind:"parameter",name:"fromIndex",type:{kind:"primitive",value:"number"},required:!1,rest:!1,description:"The position in this array at which to begin searching for searchElement.",declarations:[{name:"fromIndex",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2016.array.include.d.ts"}],tags:{param:`fromIndex
 
The position in this array at which to begin searching for searchElement.`}}],members:[],returnType:{kind:"primitive",value:"boolean"}},description:"Determines whether an array includes a certain element, returning true or false as appropriate.",declarations:[{name:"includes",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2016.array.include.d.ts"}],tags:{param:`searchElement
 
The element to search for.
fromIndex
 
The position in this array at which to begin searching for searchElement.`}},{kind:"property",name:"flatMap",type:{kind:"function",typeParameters:[],parameters:[{kind:"parameter",name:"callback",type:{kind:"function",parameters:[{kind:"parameter",name:"value",type:{kind:"symbol",name:"T",value:"T"},required:!0,rest:!1,description:"",declarations:[{name:"value",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2019.array.d.ts"}],tags:{}},{kind:"parameter",name:"index",type:{kind:"primitive",value:"number"},required:!0,rest:!1,description:"",declarations:[{name:"index",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2019.array.d.ts"}],tags:{}},{kind:"parameter",name:"array",type:{kind:"array",value:{kind:"symbol",name:"T",value:"T"}},required:!0,rest:!1,description:"",declarations:[{name:"array",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2019.array.d.ts"}],tags:{}}],members:[],returnType:{kind:"union",value:[{kind:"symbol",name:"U",value:"U"},{kind:"symbol",name:"ReadonlyArray",typeParameters:[{kind:"symbol",name:"U",value:"U"}],value:"readonly T[]"}]}},required:!0,rest:!1,description:`A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.`,declarations:[{name:"callback",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2019.array.d.ts"}],tags:{param:`callback
 
A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.`}},{kind:"parameter",name:"thisArg",type:{kind:"symbol",name:"This",value:"This"},required:!1,rest:!1,description:`An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.`,declarations:[{name:"thisArg",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2019.array.d.ts"}],tags:{param:`thisArg
 
An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.`}}],members:[],returnType:{kind:"array",value:{kind:"symbol",name:"U",value:"U"}}},description:`Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.`,declarations:[{name:"flatMap",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2019.array.d.ts"}],tags:{param:`callback
 
A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.
thisArg
 
An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.`}},{kind:"property",name:"flat",type:{kind:"function",typeParameters:[],parameters:[{kind:"parameter",name:"depth",type:{kind:"symbol",name:"D",value:"D"},required:!1,rest:!1,description:"The maximum recursion depth",declarations:[{name:"depth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2019.array.d.ts"}],tags:{param:`depth
 
The maximum recursion depth`}}],members:[],returnType:{kind:"array",value:{kind:"symbol",name:"FlatArray",typeParameters:[{kind:"symbol",name:"A",value:"A"},{kind:"symbol",name:"D",value:"D"}],value:"FlatArray<Arr, Depth>"}}},description:`Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.`,declarations:[{name:"flat",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2019.array.d.ts"}],tags:{param:`depth
 
The maximum recursion depth`}},{kind:"property",name:"__computed",type:{kind:"function",parameters:[],members:[],returnType:{kind:"symbol",name:"IterableIterator",typeParameters:[{kind:"symbol",name:"T",value:"T"}],value:"IterableIterator<T>"}},description:"Iterator",declarations:[{name:"__computed",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.iterable.d.ts"}],tags:{}},{kind:"property",name:"__computed",required:!0,type:{kind:"unknown",value:"unknown",text:`{
        [K in keyof any[]]?: boolean;
    }`},description:`Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.`,declarations:[{name:"__computed",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts"}],tags:{}},{kind:"property",name:"at",type:{kind:"function",parameters:[{kind:"parameter",name:"index",type:{kind:"primitive",value:"number"},required:!0,rest:!1,description:"",declarations:[{name:"index",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/@types/node/compatibility/indexable.d.ts"}],tags:{}}],members:[],returnType:{kind:"union",value:[{kind:"symbol",name:"T",value:"T"},{kind:"primitive",value:"undefined"}]}},description:"",declarations:[{name:"at",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/@types/node/compatibility/indexable.d.ts"}],tags:{}}],indexSignature:{kind:"indexSignature",name:"n",type:{kind:"primitive",value:"number"},value:{kind:"symbol",name:"T",value:"T"}}}},{name:"CSSInterpolation",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"CSSInterpolation",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"type",typeParameters:[],value:{kind:"union",value:[{kind:"symbol",name:"StyleProps",value:"StyleProps"},{kind:"symbol",name:"ArrayStyleProps",value:"ArrayStyleProps"}]}}},{name:"CSSObjectWithVars",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"CSSObjectWithVars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"object",properties:[{kind:"property",name:"alignContent",required:!1,type:{kind:"external",name:"Property.AlignContent",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-content"},description:`The CSS **\`align-content\`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.

**Syntax**: \`normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>\`

**Initial value**: \`normal\`

---

_Supported in Flex Layout_

|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :------: | :-----: | :-------: | :----: | :----: |
|  **29**  | **28**  |   **9**   | **12** | **11** |
| 21 _-x-_ |         | 6.1 _-x-_ |        |        |

---

_Supported in Grid Layout_

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

---`,declarations:[{name:"alignContent",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/align-content`}},{kind:"property",name:"alignItems",required:!1,type:{kind:"external",name:"Property.AlignItems",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-items"},description:`The CSS **\`align-items\`** property sets the \`align-self\` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.

**Syntax**: \`normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]\`

**Initial value**: \`normal\`

---

_Supported in Flex Layout_

|  Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :------: | :-----: | :-----: | :----: | :----: |
|  **52**  | **20**  |  **9**  | **12** | **11** |
| 21 _-x-_ |         | 7 _-x-_ |        |        |

---

_Supported in Grid Layout_

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

---`,declarations:[{name:"alignItems",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/align-items`}},{kind:"property",name:"alignSelf",required:!1,type:{kind:"external",name:"Property.AlignSelf",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-self"},description:`The **\`align-self\`** CSS property overrides a grid or flex item's \`align-items\` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.

**Syntax**: \`auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>\`

**Initial value**: \`auto\`

---

_Supported in Flex Layout_

|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :------: | :-----: | :-------: | :----: | :----: |
|  **36**  | **20**  |   **9**   | **12** | **11** |
| 21 _-x-_ |         | 6.1 _-x-_ |        |        |

---

_Supported in Grid Layout_

| Chrome | Firefox |  Safari  |  Edge  |      IE      |
| :----: | :-----: | :------: | :----: | :----------: |
| **57** | **52**  | **10.1** | **16** | **10** _-x-_ |

---`,declarations:[{name:"alignSelf",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/align-self`}},{kind:"property",name:"alignTracks",required:!1,type:{kind:"external",name:"Property.AlignTracks",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-tracks"},description:`The **\`align-tracks\`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their block axis.

**Syntax**: \`[ normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position> ]#\`

**Initial value**: \`normal\`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   |   n/a   |   No   |  No  | No  |`,declarations:[{name:"alignTracks",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/align-tracks`}},{kind:"property",name:"animationDelay",required:!1,type:{kind:"external",name:"Property.AnimationDelay",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay"},description:`The **\`animation-delay\`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.

**Syntax**: \`<time>#\`

**Initial value**: \`0s\`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |`,declarations:[{name:"animationDelay",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/animation-delay`}},{kind:"property",name:"animationDirection",required:!1,type:{kind:"external",name:"Property.AnimationDirection",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction"},description:`The **\`animation-direction\`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.

**Syntax**: \`<single-animation-direction>#\`

**Initial value**: \`normal\`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |`,declarations:[{name:"animationDirection",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/animation-direction`}},{kind:"property",name:"animationDuration",required:!1,type:{kind:"external",name:"Property.AnimationDuration",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration"},description:`The **\`animation-duration\`** CSS property sets the length of time that an animation takes to complete one cycle.

**Syntax**: \`<time>#\`

**Initial value**: \`0s\`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |`,declarations:[{name:"animationDuration",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/animation-duration`}},{kind:"property",name:"animationFillMode",required:!1,type:{kind:"external",name:"Property.AnimationFillMode",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode"},description:`The **\`animation-fill-mode\`** CSS property sets how a CSS animation applies styles to its target before and after its execution.

**Syntax**: \`<single-animation-fill-mode>#\`

**Initial value**: \`none\`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 5 _-x-_ |        |        |`,declarations:[{name:"animationFillMode",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/animation-fill-mode`}},{kind:"property",name:"animationIterationCount",required:!1,type:{kind:"external",name:"Property.AnimationIterationCount",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count"},description:`The **\`animation-iteration-count\`** CSS property sets the number of times an animation sequence should be played before stopping.

**Syntax**: \`<single-animation-iteration-count>#\`

**Initial value**: \`1\`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |`,declarations:[{name:"animationIterationCount",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/animation-iteration-count`}},{kind:"property",name:"animationName",required:!1,type:{kind:"external",name:"Property.AnimationName",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name"},description:`The **\`animation-name\`** CSS property specifies the names of one or more \`@keyframes\` at-rules describing the animation or animations to apply to the element.

**Syntax**: \`[ none | <keyframes-name> ]#\`

**Initial value**: \`none\`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |`,declarations:[{name:"animationName",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/animation-name`}},{kind:"property",name:"animationPlayState",required:!1,type:{kind:"external",name:"Property.AnimationPlayState",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state"},description:`The **\`animation-play-state\`** CSS property sets whether an animation is running or paused.

**Syntax**: \`<single-animation-play-state>#\`

**Initial value**: \`running\`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |`,declarations:[{name:"animationPlayState",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/animation-play-state`}},{kind:"property",name:"animationTimingFunction",required:!1,type:{kind:"external",name:"Property.AnimationTimingFunction",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function"},description:`The **\`animation-timing-function\`** CSS property sets how an animation progresses through the duration of each cycle.

**Syntax**: \`<easing-function>#\`

**Initial value**: \`ease\`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |`,declarations:[{name:"animationTimingFunction",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/animation-timing-function`}},{kind:"property",name:"appearance",required:!1,type:{kind:"external",name:"Property.Appearance",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/appearance"},description:"The `**appearance**` CSS property is used to display an element using platform-native styling, based on the operating system's theme. The **`-moz-appearance`** and **`-webkit-appearance`** properties are non-standard versions of this property, used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing. Note that Firefox and Edge also support **`-webkit-appearance`**, for compatibility reasons.\n\n**Syntax**: `none | auto | textfield | menulist-button | <compat-auto>`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox |   Safari    |   Edge   | IE  |\n| :-----: | :-----: | :---------: | :------: | :-: |\n| **84**  | **80**  | **3** _-x-_ |  **84**  | No  |\n| 1 _-x-_ | 1 _-x-_ |             | 12 _-x-_ |     |",declarations:[{name:"appearance",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/appearance`}},{kind:"property",name:"aspectRatio",required:!1,type:{kind:"external",name:"Property.AspectRatio",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio"},description:`The **\`aspect-ratio\`**  CSS property sets a **preferred aspect ratio** for the box, which will be used in the calculation of auto sizes and some other layout functions.

**Syntax**: \`auto | <ratio>\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **88** |   n/a   |   No   | **88** | No  |`,declarations:[{name:"aspectRatio",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/aspect-ratio`}},{kind:"property",name:"backdropFilter",required:!1,type:{kind:"external",name:"Property.BackdropFilter",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter"},description:`The **\`backdrop-filter\`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.

**Syntax**: \`none | <filter-function-list>\`

**Initial value**: \`none\`

| Chrome | Firefox |   Safari    |  Edge  | IE  |
| :----: | :-----: | :---------: | :----: | :-: |
| **76** |   n/a   | **9** _-x-_ | **17** | No  |`,declarations:[{name:"backdropFilter",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/backdrop-filter`}},{kind:"property",name:"backfaceVisibility",required:!1,type:{kind:"external",name:"Property.BackfaceVisibility",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility"},description:`The **\`backface-visibility\`** CSS property sets whether the back face of an element is visible when turned towards the user.

**Syntax**: \`visible | hidden\`

**Initial value**: \`visible\`

|  Chrome  | Firefox  |    Safari     |  Edge  |   IE   |
| :------: | :------: | :-----------: | :----: | :----: |
|  **36**  |  **16**  | **5.1** _-x-_ | **12** | **10** |
| 12 _-x-_ | 10 _-x-_ |               |        |        |`,declarations:[{name:"backfaceVisibility",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/backface-visibility`}},{kind:"property",name:"backgroundAttachment",required:!1,type:{kind:"external",name:"Property.BackgroundAttachment",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment"},description:`The **\`background-attachment\`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.

**Syntax**: \`<attachment>#\`

**Initial value**: \`scroll\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"backgroundAttachment",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/background-attachment`}},{kind:"property",name:"backgroundBlendMode",required:!1,type:{kind:"external",name:"Property.BackgroundBlendMode",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode"},description:`The **\`background-blend-mode\`** CSS property sets how an element's background images should blend with each other and with the element's background color.

**Syntax**: \`<blend-mode>#\`

**Initial value**: \`normal\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **35** | **30**  | **8**  | **79** | No  |`,declarations:[{name:"backgroundBlendMode",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/background-blend-mode`}},{kind:"property",name:"backgroundClip",required:!1,type:{kind:"external",name:"Property.BackgroundClip",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip"},description:`The **\`background-clip\`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.

**Syntax**: \`<box>#\`

**Initial value**: \`border-box\`

| Chrome | Firefox |   Safari    |  Edge  |  IE   |
| :----: | :-----: | :---------: | :----: | :---: |
| **1**  |  **4**  | **3** _-x-_ | **12** | **9** |`,declarations:[{name:"backgroundClip",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/background-clip`}},{kind:"property",name:"backgroundColor",required:!1,type:{kind:"external",name:"Property.BackgroundColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/background-color"},description:`The **\`background-color\`** CSS property sets the background color of an element.

**Syntax**: \`<color>\`

**Initial value**: \`transparent\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"backgroundColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/background-color`}},{kind:"property",name:"backgroundImage",required:!1,type:{kind:"external",name:"Property.BackgroundImage",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/background-image"},description:`The **\`background-image\`** CSS property sets one or more background images on an element.

**Syntax**: \`<bg-image>#\`

**Initial value**: \`none\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"backgroundImage",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/background-image`}},{kind:"property",name:"backgroundOrigin",required:!1,type:{kind:"external",name:"Property.BackgroundOrigin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin"},description:`The **\`background-origin\`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.

**Syntax**: \`<box>#\`

**Initial value**: \`padding-box\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **4**  | **3**  | **12** | **9** |`,declarations:[{name:"backgroundOrigin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/background-origin`}},{kind:"property",name:"backgroundPositionX",required:!1,type:{kind:"external",name:"Property.BackgroundPositionX",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-x"},description:"The **`background-position-x`** CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by `background-origin`.\n\n**Syntax**: `[ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#`\n\n**Initial value**: `left`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  | **49**  | **1**  | **12** | **6** |",declarations:[{name:"backgroundPositionX",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/background-position-x`}},{kind:"property",name:"backgroundPositionY",required:!1,type:{kind:"external",name:"Property.BackgroundPositionY",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-y"},description:"The **`background-position-y`** CSS property sets the initial vertical position for each background image. The position is relative to the position layer set by `background-origin`.\n\n**Syntax**: `[ center | [ [ top | bottom | y-start | y-end ]? <length-percentage>? ]! ]#`\n\n**Initial value**: `top`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  | **49**  | **1**  | **12** | **6** |",declarations:[{name:"backgroundPositionY",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/background-position-y`}},{kind:"property",name:"backgroundRepeat",required:!1,type:{kind:"external",name:"Property.BackgroundRepeat",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat"},description:`The **\`background-repeat\`** CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.

**Syntax**: \`<repeat-style>#\`

**Initial value**: \`repeat\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"backgroundRepeat",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/background-repeat`}},{kind:"property",name:"backgroundSize",required:!1,type:{kind:"external",name:"Property.BackgroundSize",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/background-size"},description:`The **\`background-size\`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.

**Syntax**: \`<bg-size>#\`

**Initial value**: \`auto auto\`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **3**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |`,declarations:[{name:"backgroundSize",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/background-size`}},{kind:"property",name:"blockOverflow",required:!1,type:{kind:"external",name:"Property.BlockOverflow",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/block-overflow"},description:"**Syntax**: `clip | ellipsis | <string>`\n\n**Initial value**: `clip`",declarations:[{name:"blockOverflow",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"blockSize",required:!1,type:{kind:"external",name:"Property.BlockSize",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/block-size"},description:"The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'width'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **41**  | **12.1** | **79** | No  |",declarations:[{name:"blockSize",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/block-size`}},{kind:"property",name:"borderBlockColor",required:!1,type:{kind:"external",name:"Property.BorderBlockColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-color"},description:"The **`border-block-color`** CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>{1,2}`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n| **87** | **66**  |   No   | n/a  | No  |",declarations:[{name:"borderBlockColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-block-color`}},{kind:"property",name:"borderBlockEndColor",required:!1,type:{kind:"external",name:"Property.BorderBlockEndColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-color"},description:"The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",declarations:[{name:"borderBlockEndColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-block-end-color`}},{kind:"property",name:"borderBlockEndStyle",required:!1,type:{kind:"external",name:"Property.BorderBlockEndStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-style"},description:"The **`border-block-end-style`** CSS property defines the style of the logical block-end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",declarations:[{name:"borderBlockEndStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-block-end-style`}},{kind:"property",name:"borderBlockEndWidth",required:!1,type:{kind:"external",name:"Property.BorderBlockEndWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-width"},description:"The **`border-block-end-width`** CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",declarations:[{name:"borderBlockEndWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-block-end-width`}},{kind:"property",name:"borderBlockStartColor",required:!1,type:{kind:"external",name:"Property.BorderBlockStartColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-color"},description:"The **`border-block-start-color`** CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",declarations:[{name:"borderBlockStartColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-block-start-color`}},{kind:"property",name:"borderBlockStartStyle",required:!1,type:{kind:"external",name:"Property.BorderBlockStartStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-style"},description:"The **`border-block-start-style`** CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",declarations:[{name:"borderBlockStartStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-block-start-style`}},{kind:"property",name:"borderBlockStartWidth",required:!1,type:{kind:"external",name:"Property.BorderBlockStartWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-width"},description:"The **`border-block-start-width`** CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",declarations:[{name:"borderBlockStartWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-block-start-width`}},{kind:"property",name:"borderBlockStyle",required:!1,type:{kind:"external",name:"Property.BorderBlockStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-style"},description:"The **`border-block-style`** CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n| **87** | **66**  |   No   | n/a  | No  |",declarations:[{name:"borderBlockStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-block-style`}},{kind:"property",name:"borderBlockWidth",required:!1,type:{kind:"external",name:"Property.BorderBlockWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-width"},description:"The **`border-block-width`** CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n| **87** | **66**  |   No   | n/a  | No  |",declarations:[{name:"borderBlockWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-block-width`}},{kind:"property",name:"borderBottomColor",required:!1,type:{kind:"external",name:"Property.BorderBottomColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color"},description:"The **`border-bottom-color`** CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties `border-color` or `border-bottom`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",declarations:[{name:"borderBottomColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-bottom-color`}},{kind:"property",name:"borderBottomLeftRadius",required:!1,type:{kind:"external",name:"Property.BorderBottomLeftRadius",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius"},description:`The **\`border-bottom-left-radius\`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: \`<length-percentage>{1,2}\`

**Initial value**: \`0\`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **4**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |`,declarations:[{name:"borderBottomLeftRadius",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius`}},{kind:"property",name:"borderBottomRightRadius",required:!1,type:{kind:"external",name:"Property.BorderBottomRightRadius",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius"},description:`The **\`border-bottom-right-radius\`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: \`<length-percentage>{1,2}\`

**Initial value**: \`0\`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **4**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |`,declarations:[{name:"borderBottomRightRadius",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius`}},{kind:"property",name:"borderBottomStyle",required:!1,type:{kind:"external",name:"Property.BorderBottomStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style"},description:"The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.\n\n**Syntax**: `<line-style>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  |  **1**  | **1**  | **12** | **5.5** |",declarations:[{name:"borderBottomStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-bottom-style`}},{kind:"property",name:"borderBottomWidth",required:!1,type:{kind:"external",name:"Property.BorderBottomWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width"},description:`The **\`border-bottom-width\`** CSS property sets the width of the bottom border of an element.

**Syntax**: \`<line-width>\`

**Initial value**: \`medium\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"borderBottomWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-bottom-width`}},{kind:"property",name:"borderCollapse",required:!1,type:{kind:"external",name:"Property.BorderCollapse",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse"},description:"The **`border-collapse`** CSS property sets whether cells inside a `<table>` have shared or separate borders.\n\n**Syntax**: `collapse | separate`\n\n**Initial value**: `separate`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  |  **1**  | **1.2** | **12** | **5** |",declarations:[{name:"borderCollapse",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-collapse`}},{kind:"property",name:"borderEndEndRadius",required:!1,type:{kind:"external",name:"Property.BorderEndEndRadius",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-end-radius"},description:"The **`border-end-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **89** | **66**  |   No   | **89** | No  |",declarations:[{name:"borderEndEndRadius",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-end-end-radius`}},{kind:"property",name:"borderEndStartRadius",required:!1,type:{kind:"external",name:"Property.BorderEndStartRadius",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-start-radius"},description:"The **`border-end-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **89** | **66**  |   No   | **89** | No  |",declarations:[{name:"borderEndStartRadius",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-end-start-radius`}},{kind:"property",name:"borderImageOutset",required:!1,type:{kind:"external",name:"Property.BorderImageOutset",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-outset"},description:`The **\`border-image-outset\`** CSS property sets the distance by which an element's border image is set out from its border box.

**Syntax**: \`[ <length> | <number> ]{1,4}\`

**Initial value**: \`0\`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **15** | **15**  | **6**  | **12** | **11** |`,declarations:[{name:"borderImageOutset",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-image-outset`}},{kind:"property",name:"borderImageRepeat",required:!1,type:{kind:"external",name:"Property.BorderImageRepeat",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-repeat"},description:`The **\`border-image-repeat\`** CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.

**Syntax**: \`[ stretch | repeat | round | space ]{1,2}\`

**Initial value**: \`stretch\`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **15** | **15**  | **6**  | **12** | **11** |`,declarations:[{name:"borderImageRepeat",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-image-repeat`}},{kind:"property",name:"borderImageSlice",required:!1,type:{kind:"external",name:"Property.BorderImageSlice",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice"},description:"The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.\n\n**Syntax**: `<number-percentage>{1,4} && fill?`\n\n**Initial value**: `100%`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n| **15** | **15**  | **6**  | **12** | **11** |",declarations:[{name:"borderImageSlice",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-image-slice`}},{kind:"property",name:"borderImageSource",required:!1,type:{kind:"external",name:"Property.BorderImageSource",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-source"},description:`The **\`border-image-source\`** CSS property sets the source image used to create an element's border image.

**Syntax**: \`none | <image>\`

**Initial value**: \`none\`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **15** | **15**  | **6**  | **12** | **11** |`,declarations:[{name:"borderImageSource",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-image-source`}},{kind:"property",name:"borderImageWidth",required:!1,type:{kind:"external",name:"Property.BorderImageWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-width"},description:`The **\`border-image-width\`** CSS property sets the width of an element's border image.

**Syntax**: \`[ <length-percentage> | <number> | auto ]{1,4}\`

**Initial value**: \`1\`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **15** | **13**  | **6**  | **12** | **11** |`,declarations:[{name:"borderImageWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-image-width`}},{kind:"property",name:"borderInlineColor",required:!1,type:{kind:"external",name:"Property.BorderInlineColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-color"},description:"The **`border-inline-color`** CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>{1,2}`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n| **87** | **66**  |   No   | n/a  | No  |",declarations:[{name:"borderInlineColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-inline-color`}},{kind:"property",name:"borderInlineEndColor",required:!1,type:{kind:"external",name:"Property.BorderInlineEndColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-color"},description:"The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome |           Firefox           |  Safari  |  Edge  | IE  |\n| :----: | :-------------------------: | :------: | :----: | :-: |\n| **69** |           **41**            | **12.1** | **79** | No  |\n|        | 3 _(-moz-border-end-color)_ |          |        |     |",declarations:[{name:"borderInlineEndColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-inline-end-color`}},{kind:"property",name:"borderInlineEndStyle",required:!1,type:{kind:"external",name:"Property.BorderInlineEndStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-style"},description:"The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome |           Firefox           |  Safari  |  Edge  | IE  |\n| :----: | :-------------------------: | :------: | :----: | :-: |\n| **69** |           **41**            | **12.1** | **79** | No  |\n|        | 3 _(-moz-border-end-style)_ |          |        |     |",declarations:[{name:"borderInlineEndStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-inline-end-style`}},{kind:"property",name:"borderInlineEndWidth",required:!1,type:{kind:"external",name:"Property.BorderInlineEndWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-width"},description:"The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome |           Firefox           |  Safari  |  Edge  | IE  |\n| :----: | :-------------------------: | :------: | :----: | :-: |\n| **69** |           **41**            | **12.1** | **79** | No  |\n|        | 3 _(-moz-border-end-width)_ |          |        |     |",declarations:[{name:"borderInlineEndWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-inline-end-width`}},{kind:"property",name:"borderInlineStartColor",required:!1,type:{kind:"external",name:"Property.BorderInlineStartColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-color"},description:"The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome |            Firefox            |  Safari  |  Edge  | IE  |\n| :----: | :---------------------------: | :------: | :----: | :-: |\n| **69** |            **41**             | **12.1** | **79** | No  |\n|        | 3 _(-moz-border-start-color)_ |          |        |     |",declarations:[{name:"borderInlineStartColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-inline-start-color`}},{kind:"property",name:"borderInlineStartStyle",required:!1,type:{kind:"external",name:"Property.BorderInlineStartStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-style"},description:"The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome |            Firefox            |  Safari  |  Edge  | IE  |\n| :----: | :---------------------------: | :------: | :----: | :-: |\n| **69** |            **41**             | **12.1** | **79** | No  |\n|        | 3 _(-moz-border-start-style)_ |          |        |     |",declarations:[{name:"borderInlineStartStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-inline-start-style`}},{kind:"property",name:"borderInlineStartWidth",required:!1,type:{kind:"external",name:"Property.BorderInlineStartWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-width"},description:"The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **69** | **41**  | **12.1** | **79** | No  |",declarations:[{name:"borderInlineStartWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-inline-start-width`}},{kind:"property",name:"borderInlineStyle",required:!1,type:{kind:"external",name:"Property.BorderInlineStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-style"},description:"The **`border-inline-style`** CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n| **87** | **66**  |   No   | n/a  | No  |",declarations:[{name:"borderInlineStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-inline-style`}},{kind:"property",name:"borderInlineWidth",required:!1,type:{kind:"external",name:"Property.BorderInlineWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-width"},description:"The **`border-inline-width`** CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n| **87** | **66**  |   No   | n/a  | No  |",declarations:[{name:"borderInlineWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-inline-width`}},{kind:"property",name:"borderLeftColor",required:!1,type:{kind:"external",name:"Property.BorderLeftColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color"},description:"The **`border-left-color`** CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties `border-color` or `border-left`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",declarations:[{name:"borderLeftColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-left-color`}},{kind:"property",name:"borderLeftStyle",required:!1,type:{kind:"external",name:"Property.BorderLeftStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style"},description:"The **`border-left-style`** CSS property sets the line style of an element's left `border`.\n\n**Syntax**: `<line-style>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  |  **1**  | **1**  | **12** | **5.5** |",declarations:[{name:"borderLeftStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-left-style`}},{kind:"property",name:"borderLeftWidth",required:!1,type:{kind:"external",name:"Property.BorderLeftWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width"},description:`The **\`border-left-width\`** CSS property sets the width of the left border of an element.

**Syntax**: \`<line-width>\`

**Initial value**: \`medium\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"borderLeftWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-left-width`}},{kind:"property",name:"borderRightColor",required:!1,type:{kind:"external",name:"Property.BorderRightColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color"},description:"The **`border-right-color`** CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties `border-color` or `border-right`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",declarations:[{name:"borderRightColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-right-color`}},{kind:"property",name:"borderRightStyle",required:!1,type:{kind:"external",name:"Property.BorderRightStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style"},description:"The **`border-right-style`** CSS property sets the line style of an element's right `border`.\n\n**Syntax**: `<line-style>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  |  **1**  | **1**  | **12** | **5.5** |",declarations:[{name:"borderRightStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-right-style`}},{kind:"property",name:"borderRightWidth",required:!1,type:{kind:"external",name:"Property.BorderRightWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width"},description:`The **\`border-right-width\`** CSS property sets the width of the right border of an element.

**Syntax**: \`<line-width>\`

**Initial value**: \`medium\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"borderRightWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-right-width`}},{kind:"property",name:"borderSpacing",required:!1,type:{kind:"external",name:"Property.BorderSpacing",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing"},description:"The **`border-spacing`** CSS property sets the distance between the borders of adjacent `<table>` cells. This property applies only when `border-collapse` is `separate`.\n\n**Syntax**: `<length> <length>?`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **8** |",declarations:[{name:"borderSpacing",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-spacing`}},{kind:"property",name:"borderStartEndRadius",required:!1,type:{kind:"external",name:"Property.BorderStartEndRadius",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-end-radius"},description:"The **`border-start-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **89** | **66**  |   No   | **89** | No  |",declarations:[{name:"borderStartEndRadius",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-start-end-radius`}},{kind:"property",name:"borderStartStartRadius",required:!1,type:{kind:"external",name:"Property.BorderStartStartRadius",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-start-radius"},description:"The **`border-start-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **89** | **66**  |   No   | **89** | No  |",declarations:[{name:"borderStartStartRadius",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-start-start-radius`}},{kind:"property",name:"borderTopColor",required:!1,type:{kind:"external",name:"Property.BorderTopColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color"},description:"The **`border-top-color`** CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties `border-color` or `border-top`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",declarations:[{name:"borderTopColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-top-color`}},{kind:"property",name:"borderTopLeftRadius",required:!1,type:{kind:"external",name:"Property.BorderTopLeftRadius",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius"},description:`The **\`border-top-left-radius\`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: \`<length-percentage>{1,2}\`

**Initial value**: \`0\`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **4**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |`,declarations:[{name:"borderTopLeftRadius",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-top-left-radius`}},{kind:"property",name:"borderTopRightRadius",required:!1,type:{kind:"external",name:"Property.BorderTopRightRadius",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius"},description:`The **\`border-top-right-radius\`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.

**Syntax**: \`<length-percentage>{1,2}\`

**Initial value**: \`0\`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **4**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |`,declarations:[{name:"borderTopRightRadius",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-top-right-radius`}},{kind:"property",name:"borderTopStyle",required:!1,type:{kind:"external",name:"Property.BorderTopStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style"},description:"The **`border-top-style`** CSS property sets the line style of an element's top `border`.\n\n**Syntax**: `<line-style>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  |  **1**  | **1**  | **12** | **5.5** |",declarations:[{name:"borderTopStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-top-style`}},{kind:"property",name:"borderTopWidth",required:!1,type:{kind:"external",name:"Property.BorderTopWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width"},description:`The **\`border-top-width\`** CSS property sets the width of the top border of an element.

**Syntax**: \`<line-width>\`

**Initial value**: \`medium\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"borderTopWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-top-width`}},{kind:"property",name:"bottom",required:!1,type:{kind:"external",name:"Property.Bottom",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/bottom"},description:`The **\`bottom\`** CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements.

**Syntax**: \`<length> | <percentage> | auto\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **5** |`,declarations:[{name:"bottom",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/bottom`}},{kind:"property",name:"boxDecorationBreak",required:!1,type:{kind:"external",name:"Property.BoxDecorationBreak",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break"},description:`The **\`box-decoration-break\`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.

**Syntax**: \`slice | clone\`

**Initial value**: \`slice\`

|    Chrome    | Firefox |    Safari     |     Edge     | IE  |
| :----------: | :-----: | :-----------: | :----------: | :-: |
| **22** _-x-_ | **32**  | **6.1** _-x-_ | **79** _-x-_ | No  |`,declarations:[{name:"boxDecorationBreak",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/box-decoration-break`}},{kind:"property",name:"boxShadow",required:!1,type:{kind:"external",name:"Property.BoxShadow",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow"},description:`The **\`box-shadow\`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

**Syntax**: \`none | <shadow>#\`

**Initial value**: \`none\`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
| **10**  |  **4**  | **5.1** | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |`,declarations:[{name:"boxShadow",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/box-shadow`}},{kind:"property",name:"boxSizing",required:!1,type:{kind:"external",name:"Property.BoxSizing",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"},description:`The **\`box-sizing\`** CSS property sets how the total width and height of an element is calculated.

**Syntax**: \`content-box | border-box\`

**Initial value**: \`content-box\`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
| **10**  | **29**  | **5.1** | **12** | **8** |
| 1 _-x-_ | 1 _-x-_ | 3 _-x-_ |        |       |`,declarations:[{name:"boxSizing",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/box-sizing`}},{kind:"property",name:"breakAfter",required:!1,type:{kind:"external",name:"Property.BreakAfter",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/break-after"},description:`The **\`break-after\`** CSS property sets how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.

**Syntax**: \`auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region\`

**Initial value**: \`auto\`

---

_Supported in Multi-column Layout_

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **50** | **65**  |   No   | **12** | **10** |

---

_Supported in Paged Media_

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **50** | **65**  | **10** | **12** | **10** |

---`,declarations:[{name:"breakAfter",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/break-after`}},{kind:"property",name:"breakBefore",required:!1,type:{kind:"external",name:"Property.BreakBefore",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/break-before"},description:`The **\`break-before\`** CSS property sets how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.

**Syntax**: \`auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region\`

**Initial value**: \`auto\`

---

_Supported in Multi-column Layout_

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **50** | **65**  |   No   | **12** | **10** |

---

_Supported in Paged Media_

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **50** | **65**  | **10** | **12** | **10** |

---`,declarations:[{name:"breakBefore",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/break-before`}},{kind:"property",name:"breakInside",required:!1,type:{kind:"external",name:"Property.BreakInside",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside"},description:`The **\`break-inside\`** CSS property sets how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.

**Syntax**: \`auto | avoid | avoid-page | avoid-column | avoid-region\`

**Initial value**: \`auto\`

---

_Supported in Multi-column Layout_

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **50** | **65**  | **10** | **12** | **10** |

---

_Supported in Paged Media_

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **50** | **65**  | **10** | **12** | **10** |

---`,declarations:[{name:"breakInside",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/break-inside`}},{kind:"property",name:"captionSide",required:!1,type:{kind:"external",name:"Property.CaptionSide",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side"},description:"The **`caption-side`** CSS property puts the content of a table's `<caption>` on the specified side. The values are relative to the `writing-mode` of the table.\n\n**Syntax**: `top | bottom | block-start | block-end | inline-start | inline-end`\n\n**Initial value**: `top`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **8** |",declarations:[{name:"captionSide",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/caption-side`}},{kind:"property",name:"caretColor",required:!1,type:{kind:"external",name:"Property.CaretColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color"},description:"The **`caret-color`** CSS property sets the color of the **insertion caret**, the visible marker where the next character typed will be inserted. This is sometimes referred to as the **text input cursor**. The caret appears in elements such as `<input>` or those with the `contenteditable` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.\n\n**Syntax**: `auto | <color>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **53**  | **11.1** | **79** | No  |",declarations:[{name:"caretColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/caret-color`}},{kind:"property",name:"clear",required:!1,type:{kind:"external",name:"Property.Clear",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/clear"},description:"The **`clear`** CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The `clear` property applies to floating and non-floating elements.\n\n**Syntax**: `none | left | right | both | inline-start | inline-end`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",declarations:[{name:"clear",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/clear`}},{kind:"property",name:"clipPath",required:!1,type:{kind:"external",name:"Property.ClipPath",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path"},description:`The \`**clip-path**\` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.

**Syntax**: \`<clip-source> | [ <basic-shape> || <geometry-box> ] | none\`

**Initial value**: \`none\`

|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :------: | :-----: | :-------: | :----: | :----: |
|  **55**  | **3.5** |  **9.1**  | **12** | **10** |
| 23 _-x-_ |         | 6.1 _-x-_ |        |        |`,declarations:[{name:"clipPath",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/clip-path`}},{kind:"property",name:"color",required:!1,type:{kind:"external",name:"Property.Color",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/color"},description:"The **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `<currentcolor>` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.\n\n**Syntax**: `<color>`\n\n**Initial value**: Varies from one browser to another\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |",declarations:[{name:"color",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/color`}},{kind:"property",name:"colorAdjust",required:!1,type:{kind:"external",name:"Property.ColorAdjust",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/color-adjust"},description:`The **\`color-adjust\`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.

**Syntax**: \`economy | exact\`

**Initial value**: \`economy\`

|                Chrome                 | Firefox |                Safari                |                 Edge                  | IE  |
| :-----------------------------------: | :-----: | :----------------------------------: | :-----------------------------------: | :-: |
| **49** _(-webkit-print-color-adjust)_ | **48**  | **6** _(-webkit-print-color-adjust)_ | **79** _(-webkit-print-color-adjust)_ | No  |`,declarations:[{name:"colorAdjust",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/color-adjust`}},{kind:"property",name:"colorScheme",required:!1,type:{kind:"external",name:"Property.ColorScheme",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme"},description:`The **\`color-scheme\`** CSS property allows an element to indicate which color schemes it can comfortably be rendered in.

**Syntax**: \`normal | [ light | dark | <custom-ident> ]+\`

**Initial value**: \`normal\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **81** |   No    | **13** | **81** | No  |`,declarations:[{name:"colorScheme",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/color-scheme`}},{kind:"property",name:"columnCount",required:!1,type:{kind:"external",name:"Property.ColumnCount",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-count"},description:`The **\`column-count\`** CSS property breaks an element's content into the specified number of columns.

**Syntax**: \`<integer> | auto\`

**Initial value**: \`auto\`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |`,declarations:[{name:"columnCount",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/column-count`}},{kind:"property",name:"columnFill",required:!1,type:{kind:"external",name:"Property.ColumnFill",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-fill"},description:`The **\`column-fill\`** CSS property controls how an element's contents are balanced when broken into columns.

**Syntax**: \`auto | balance | balance-all\`

**Initial value**: \`balance\`

| Chrome | Firefox | Safari  |  Edge  |   IE   |
| :----: | :-----: | :-----: | :----: | :----: |
| **50** | **52**  |  **9**  | **12** | **10** |
|        |         | 8 _-x-_ |        |        |`,declarations:[{name:"columnFill",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/column-fill`}},{kind:"property",name:"columnGap",required:!1,type:{kind:"external",name:"Property.ColumnGap",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap"},description:`The **\`column-gap\`** CSS property sets the size of the gap (gutter) between an element's columns.

**Syntax**: \`normal | <length-percentage>\`

**Initial value**: \`normal\`

---

_Supported in Flex Layout_

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **84** | **63**  |   No   | **84** | No  |

---

_Supported in Grid Layout_

|         Chrome         |        Firefox         |          Safari          |  Edge  | IE  |
| :--------------------: | :--------------------: | :----------------------: | :----: | :-: |
|         **66**         |         **61**         |         **12.1**         | **16** | No  |
| 57 _(grid-column-gap)_ | 52 _(grid-column-gap)_ | 10.1 _(grid-column-gap)_ |        |     |

---

_Supported in Multi-column Layout_

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  | **10**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |

---`,declarations:[{name:"columnGap",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/column-gap`}},{kind:"property",name:"columnRuleColor",required:!1,type:{kind:"external",name:"Property.ColumnRuleColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-color"},description:`The **\`column-rule-color\`** CSS property sets the color of the line drawn between columns in a multi-column layout.

**Syntax**: \`<color>\`

**Initial value**: \`currentcolor\`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |`,declarations:[{name:"columnRuleColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/column-rule-color`}},{kind:"property",name:"columnRuleStyle",required:!1,type:{kind:"external",name:"Property.ColumnRuleStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-style"},description:`The **\`column-rule-style\`** CSS property sets the style of the line drawn between columns in a multi-column layout.

**Syntax**: \`<'border-style'>\`

**Initial value**: \`none\`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |`,declarations:[{name:"columnRuleStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/column-rule-style`}},{kind:"property",name:"columnRuleWidth",required:!1,type:{kind:"external",name:"Property.ColumnRuleWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-width"},description:`The **\`column-rule-width\`** CSS property sets the width of the line drawn between columns in a multi-column layout.

**Syntax**: \`<'border-width'>\`

**Initial value**: \`medium\`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |`,declarations:[{name:"columnRuleWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/column-rule-width`}},{kind:"property",name:"columnSpan",required:!1,type:{kind:"external",name:"Property.ColumnSpan",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-span"},description:`The **\`column-span\`** CSS property makes it possible for an element to span across all columns when its value is set to \`all\`.

**Syntax**: \`none | all\`

**Initial value**: \`none\`

| Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :-----: | :-----: | :-------: | :----: | :----: |
| **50**  | **71**  |   **9**   | **12** | **10** |
| 6 _-x-_ |         | 5.1 _-x-_ |        |        |`,declarations:[{name:"columnSpan",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/column-span`}},{kind:"property",name:"columnWidth",required:!1,type:{kind:"external",name:"Property.ColumnWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-width"},description:`The **\`column-width\`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the \`column-width\` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.

**Syntax**: \`<length> | auto\`

**Initial value**: \`auto\`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **50**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |`,declarations:[{name:"columnWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/column-width`}},{kind:"property",name:"contain",required:!1,type:{kind:"external",name:"Property.Contain",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/contain"},description:`The **\`contain\`** CSS property allows an author to indicate that an element and its contents are, as much as possible, _independent_ of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page, leading to obvious performance benefits.

**Syntax**: \`none | strict | content | [ size || layout || style || paint ]\`

**Initial value**: \`none\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **52** | **69**  |   No   | **79** | No  |`,declarations:[{name:"contain",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/contain`}},{kind:"property",name:"content",required:!1,type:{kind:"external",name:"Property.Content",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/content"},description:"The **`content`** CSS property replaces an element with a generated value. Objects inserted using the `content` property are **anonymous replaced elements**_._\n\n**Syntax**: `normal | none | [ <content-replacement> | <content-list> ] [/ <string> ]?`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **8** |",declarations:[{name:"content",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/content`}},{kind:"property",name:"contentVisibility",required:!1,type:{kind:"external",name:"Property.ContentVisibility",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility"},description:`The **\`content-visibility\`** CSS property controls whether or not an element renders its contents at all, along with forcing a strong set of containments, allowing user agents to potentially omit large swathes of layout and rendering work until it becomes needed. Basically it enables the user agent to skip an element's rendering work, including layout and painting, until it is needed, makes the initial page load much faster.

**Syntax**: \`visible | auto | hidden\`

**Initial value**: \`visible\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **85** |   No    |   No   | **85** | No  |`,declarations:[{name:"contentVisibility",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/content-visibility`}},{kind:"property",name:"counterIncrement",required:!1,type:{kind:"external",name:"Property.CounterIncrement",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/counter-increment"},description:`The **\`counter-increment\`** CSS property increases or decreases the value of a CSS counter by a given value.

**Syntax**: \`[ <custom-ident> <integer>? ]+ | none\`

**Initial value**: \`none\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **2**  |  **1**  | **3**  | **12** | **8** |`,declarations:[{name:"counterIncrement",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/counter-increment`}},{kind:"property",name:"counterReset",required:!1,type:{kind:"external",name:"Property.CounterReset",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/counter-reset"},description:`The **\`counter-reset\`** CSS property resets a CSS counter to a given value.

**Syntax**: \`[ <custom-ident> <integer>? ]+ | none\`

**Initial value**: \`none\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **2**  |  **1**  | **3**  | **12** | **8** |`,declarations:[{name:"counterReset",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/counter-reset`}},{kind:"property",name:"counterSet",required:!1,type:{kind:"external",name:"Property.CounterSet",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/counter-set"},description:`The **\`counter-set\`** CSS property sets a CSS counter to a given value. It manipulates the value of existing counters, and will only create new counters if there isn't already a counter of the given name on the element.

**Syntax**: \`[ <custom-ident> <integer>? ]+ | none\`

**Initial value**: \`none\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **85** | **68**  |   No   | **85** | No  |`,declarations:[{name:"counterSet",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/counter-set`}},{kind:"property",name:"cursor",required:!1,type:{kind:"external",name:"Property.Cursor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/cursor"},description:`The **\`cursor\`** CSS property sets the type of mouse cursor, if any, to show when the mouse pointer is over an element.

**Syntax**: \`[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ]\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **1**  | **1.2** | **12** | **4** |`,declarations:[{name:"cursor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/cursor`}},{kind:"property",name:"direction",required:!1,type:{kind:"external",name:"Property.Direction",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/direction"},description:"The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).\n\n**Syntax**: `ltr | rtl`\n\n**Initial value**: `ltr`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **2**  |  **1**  | **1**  | **12** | **5.5** |",declarations:[{name:"direction",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/direction`}},{kind:"property",name:"display",required:!1,type:{kind:"external",name:"Property.Display",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/display"},description:`The **\`display\`** CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.

**Syntax**: \`[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>\`

**Initial value**: \`inline\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"display",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/display`}},{kind:"property",name:"emptyCells",required:!1,type:{kind:"external",name:"Property.EmptyCells",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/empty-cells"},description:"The **`empty-cells`** CSS property sets whether borders and backgrounds appear around `<table>` cells that have no visible content.\n\n**Syntax**: `show | hide`\n\n**Initial value**: `show`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  |  **1**  | **1.2** | **12** | **8** |",declarations:[{name:"emptyCells",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/empty-cells`}},{kind:"property",name:"filter",required:!1,type:{kind:"external",name:"Property.Filter",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/filter"},description:`The **\`filter\`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.

**Syntax**: \`none | <filter-function-list>\`

**Initial value**: \`none\`

|  Chrome  | Firefox | Safari  |  Edge  | IE  |
| :------: | :-----: | :-----: | :----: | :-: |
|  **53**  | **35**  | **9.1** | **12** | No  |
| 18 _-x-_ |         | 6 _-x-_ |        |     |`,declarations:[{name:"filter",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/filter`}},{kind:"property",name:"flexBasis",required:!1,type:{kind:"external",name:"Property.FlexBasis",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis"},description:`The **\`flex-basis\`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with \`box-sizing\`.

**Syntax**: \`content | <'width'>\`

**Initial value**: \`auto\`

|  Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :------: | :-----: | :-----: | :----: | :----: |
|  **29**  | **22**  |  **9**  | **12** | **11** |
| 22 _-x-_ |         | 7 _-x-_ |        |        |`,declarations:[{name:"flexBasis",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/flex-basis`}},{kind:"property",name:"flexDirection",required:!1,type:{kind:"external",name:"Property.FlexDirection",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction"},description:`The **\`flex-direction\`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

**Syntax**: \`row | row-reverse | column | column-reverse\`

**Initial value**: \`row\`

|  Chrome  | Firefox | Safari  |  Edge  |    IE    |
| :------: | :-----: | :-----: | :----: | :------: |
|  **29**  | **20**  |  **9**  | **12** |  **11**  |
| 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |`,declarations:[{name:"flexDirection",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/flex-direction`}},{kind:"property",name:"flexGrow",required:!1,type:{kind:"external",name:"Property.FlexGrow",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow"},description:`The **\`flex-grow\`** CSS property sets the flex grow factor of a flex item main size.

**Syntax**: \`<number>\`

**Initial value**: \`0\`

|  Chrome  | Firefox |  Safari   |  Edge  |            IE            |
| :------: | :-----: | :-------: | :----: | :----------------------: |
|  **29**  | **20**  |   **9**   | **12** |          **11**          |
| 22 _-x-_ |         | 6.1 _-x-_ |        | 10 _(-ms-flex-positive)_ |`,declarations:[{name:"flexGrow",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/flex-grow`}},{kind:"property",name:"flexShrink",required:!1,type:{kind:"external",name:"Property.FlexShrink",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink"},description:`The **\`flex-shrink\`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to \`flex-shrink\`.

**Syntax**: \`<number>\`

**Initial value**: \`1\`

|  Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :------: | :-----: | :-----: | :----: | :----: |
|  **29**  | **20**  |  **9**  | **12** | **10** |
| 22 _-x-_ |         | 8 _-x-_ |        |        |`,declarations:[{name:"flexShrink",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/flex-shrink`}},{kind:"property",name:"flexWrap",required:!1,type:{kind:"external",name:"Property.FlexWrap",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap"},description:`The **\`flex-wrap\`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

**Syntax**: \`nowrap | wrap | wrap-reverse\`

**Initial value**: \`nowrap\`

|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :------: | :-----: | :-------: | :----: | :----: |
|  **29**  | **28**  |   **9**   | **12** | **11** |
| 21 _-x-_ |         | 6.1 _-x-_ |        |        |`,declarations:[{name:"flexWrap",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/flex-wrap`}},{kind:"property",name:"float",required:!1,type:{kind:"external",name:"Property.Float",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/float"},description:`The **\`float\`** CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).

**Syntax**: \`left | right | none | inline-start | inline-end\`

**Initial value**: \`none\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"float",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/float`}},{kind:"property",name:"fontFamily",required:!1,type:{kind:"external",name:"Property.FontFamily",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-family"},description:`The **\`font-family\`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.

**Syntax**: \`[ <family-name> | <generic-family> ]#\`

**Initial value**: depends on user agent

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |`,declarations:[{name:"fontFamily",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/font-family`}},{kind:"property",name:"fontFeatureSettings",required:!1,type:{kind:"external",name:"Property.FontFeatureSettings",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings"},description:`The **\`font-feature-settings\`** CSS property controls advanced typographic features in OpenType fonts.

**Syntax**: \`normal | <feature-tag-value>#\`

**Initial value**: \`normal\`

|  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
| :------: | :------: | :-----: | :----: | :----: |
|  **48**  |  **34**  | **9.1** | **15** | **10** |
| 16 _-x-_ | 15 _-x-_ |         |        |        |`,declarations:[{name:"fontFeatureSettings",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/font-feature-settings`}},{kind:"property",name:"fontKerning",required:!1,type:{kind:"external",name:"Property.FontKerning",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-kerning"},description:`The **\`font-kerning\`** CSS property sets the use of the kerning information stored in a font.

**Syntax**: \`auto | normal | none\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari  |  Edge  | IE  |
| :----: | :-----: | :-----: | :----: | :-: |
| **33** | **32**  |  **9**  | **79** | No  |
|        |         | 6 _-x-_ |        |     |`,declarations:[{name:"fontKerning",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/font-kerning`}},{kind:"property",name:"fontLanguageOverride",required:!1,type:{kind:"external",name:"Property.FontLanguageOverride",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-language-override"},description:`The **\`font-language-override\`** CSS property controls the use of language-specific glyphs in a typeface.

**Syntax**: \`normal | <string>\`

**Initial value**: \`normal\`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **34**  |   No   |  No  | No  |
|        | 4 _-x-_ |        |      |     |`,declarations:[{name:"fontLanguageOverride",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/font-language-override`}},{kind:"property",name:"fontOpticalSizing",required:!1,type:{kind:"external",name:"Property.FontOpticalSizing",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-optical-sizing"},description:`The **\`font-optical-sizing\`** CSS property sets whether text rendering is optimized for viewing at different sizes.

**Syntax**: \`auto | none\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **79** | **62**  | **11** | **17** | No  |`,declarations:[{name:"fontOpticalSizing",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/font-optical-sizing`}},{kind:"property",name:"fontSize",required:!1,type:{kind:"external",name:"Property.FontSize",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-size"},description:"The **`font-size`** CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative `<length>` units, such as `em`, `ex`, and so forth.\n\n**Syntax**: `<absolute-size> | <relative-size> | <length-percentage>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    |\n| :----: | :-----: | :----: | :----: | :-----: |\n| **1**  |  **1**  | **1**  | **12** | **5.5** |",declarations:[{name:"fontSize",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/font-size`}},{kind:"property",name:"fontSizeAdjust",required:!1,type:{kind:"external",name:"Property.FontSizeAdjust",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-size-adjust"},description:`The **\`font-size-adjust\`** CSS property sets the size of lower-case letters relative to the current font size (which defines the size of upper-case letters).

**Syntax**: \`none | <number>\`

**Initial value**: \`none\`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|  n/a   |  **1**  |   No   | n/a  | No  |`,declarations:[{name:"fontSizeAdjust",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/font-size-adjust`}},{kind:"property",name:"fontSmooth",required:!1,type:{kind:"external",name:"Property.FontSmooth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth"},description:`The **\`font-smooth\`** CSS property controls the application of anti-aliasing when fonts are rendered.

**Syntax**: \`auto | never | always | <absolute-size> | <length>\`

**Initial value**: \`auto\`

|              Chrome              |              Firefox               |              Safari              |               Edge                | IE  |
| :------------------------------: | :--------------------------------: | :------------------------------: | :-------------------------------: | :-: |
| **5** _(-webkit-font-smoothing)_ | **25** _(-moz-osx-font-smoothing)_ | **4** _(-webkit-font-smoothing)_ | **79** _(-webkit-font-smoothing)_ | No  |`,declarations:[{name:"fontSmooth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/font-smooth`}},{kind:"property",name:"fontStretch",required:!1,type:{kind:"external",name:"Property.FontStretch",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch"},description:`The **\`font-stretch\`** CSS property selects a normal, condensed, or expanded face from a font.

**Syntax**: \`<font-stretch-absolute>\`

**Initial value**: \`normal\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **60** |  **9**  | **11** | **12** | **9** |`,declarations:[{name:"fontStretch",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/font-stretch`}},{kind:"property",name:"fontStyle",required:!1,type:{kind:"external",name:"Property.FontStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-style"},description:"The **`font-style`** CSS property sets whether a font should be styled with a normal, italic, or oblique face from its `font-family`.\n\n**Syntax**: `normal | italic | oblique <angle>?`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",declarations:[{name:"fontStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/font-style`}},{kind:"property",name:"fontSynthesis",required:!1,type:{kind:"external",name:"Property.FontSynthesis",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-synthesis"},description:`The **\`font-synthesis\`** CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.

**Syntax**: \`none | [ weight || style ]\`

**Initial value**: \`weight style\`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **34**  | **9**  |  No  | No  |`,declarations:[{name:"fontSynthesis",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/font-synthesis`}},{kind:"property",name:"fontVariant",required:!1,type:{kind:"external",name:"Property.FontVariant",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant"},description:`The **\`font-variant\`** CSS shorthand property allows you to set all the font variants for a font.

**Syntax**: \`normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]\`

**Initial value**: \`normal\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"fontVariant",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/font-variant`}},{kind:"property",name:"fontVariantCaps",required:!1,type:{kind:"external",name:"Property.FontVariantCaps",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-caps"},description:`The **\`font-variant-caps\`** CSS property controls the use of alternate glyphs for capital letters.

**Syntax**: \`normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps\`

**Initial value**: \`normal\`

| Chrome | Firefox | Safari  |  Edge  | IE  |
| :----: | :-----: | :-----: | :----: | :-: |
| **52** | **34**  | **9.1** | **79** | No  |`,declarations:[{name:"fontVariantCaps",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/font-variant-caps`}},{kind:"property",name:"fontVariantEastAsian",required:!1,type:{kind:"external",name:"Property.FontVariantEastAsian",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-east-asian"},description:`The **\`font-variant-east-asian\`** CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.

**Syntax**: \`normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]\`

**Initial value**: \`normal\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **63** | **34**  |   No   | **79** | No  |`,declarations:[{name:"fontVariantEastAsian",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian`}},{kind:"property",name:"fontVariantLigatures",required:!1,type:{kind:"external",name:"Property.FontVariantLigatures",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-ligatures"},description:`The **\`font-variant-ligatures\`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.

**Syntax**: \`normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]\`

**Initial value**: \`normal\`

|  Chrome  | Firefox | Safari  |  Edge  | IE  |
| :------: | :-----: | :-----: | :----: | :-: |
|  **34**  | **34**  | **9.1** | **79** | No  |
| 31 _-x-_ |         | 7 _-x-_ |        |     |`,declarations:[{name:"fontVariantLigatures",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures`}},{kind:"property",name:"fontVariantNumeric",required:!1,type:{kind:"external",name:"Property.FontVariantNumeric",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric"},description:`The **\`font-variant-numeric\`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.

**Syntax**: \`normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]\`

**Initial value**: \`normal\`

| Chrome | Firefox | Safari  |  Edge  | IE  |
| :----: | :-----: | :-----: | :----: | :-: |
| **52** | **34**  | **9.1** | **79** | No  |`,declarations:[{name:"fontVariantNumeric",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/font-variant-numeric`}},{kind:"property",name:"fontVariantPosition",required:!1,type:{kind:"external",name:"Property.FontVariantPosition",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-position"},description:`The **\`font-variant-position\`** CSS property controls the use of alternate, smaller glyphs that are positioned as superscript or subscript.

**Syntax**: \`normal | sub | super\`

**Initial value**: \`normal\`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **34**  |   No   |  No  | No  |`,declarations:[{name:"fontVariantPosition",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/font-variant-position`}},{kind:"property",name:"fontVariationSettings",required:!1,type:{kind:"external",name:"Property.FontVariationSettings",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-variation-settings"},description:`The **\`font-variation-settings\`** CSS property provides low-level control over variable font characteristics, by specifying the four letter axis names of the characteristics you want to vary, along with their values.

**Syntax**: \`normal | [ <string> <number> ]#\`

**Initial value**: \`normal\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **62** | **62**  | **11** | **17** | No  |`,declarations:[{name:"fontVariationSettings",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/font-variation-settings`}},{kind:"property",name:"fontWeight",required:!1,type:{kind:"external",name:"Property.FontWeight",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight"},description:"The **`font-weight`** CSS property sets the weight (or boldness) of the font. The weights available depend on the `font-family` that is currently set.\n\n**Syntax**: `<font-weight-absolute> | bolder | lighter`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **2**  |  **1**  | **1**  | **12** | **3** |",declarations:[{name:"fontWeight",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/font-weight`}},{kind:"property",name:"forcedColorAdjust",required:!1,type:{kind:"external",name:"Property.ForcedColorAdjust",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/forced-color-adjust"},description:`The **\`forced-color-adjust\`** CSS property allows authors to opt certain elements out of forced colors mode. This then restores the control of those values to CSS.

**Syntax**: \`auto | none\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |              Edge               |                 IE                  |
| :----: | :-----: | :----: | :-----------------------------: | :---------------------------------: |
| **89** |   No    |   No   |             **79**              | **10** _(-ms-high-contrast-adjust)_ |
|        |         |        | 12 _(-ms-high-contrast-adjust)_ |                                     |`,declarations:[{name:"forcedColorAdjust",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/forced-color-adjust`}},{kind:"property",name:"gridAutoColumns",required:!1,type:{kind:"external",name:"Property.GridAutoColumns",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns"},description:`The **\`grid-auto-columns\`** CSS property specifies the size of an implicitly-created grid column track or pattern of tracks.

**Syntax**: \`<track-size>+\`

**Initial value**: \`auto\`

| Chrome | Firefox |  Safari  |  Edge  |             IE              |
| :----: | :-----: | :------: | :----: | :-------------------------: |
| **57** | **70**  | **10.1** | **16** | **10** _(-ms-grid-columns)_ |`,declarations:[{name:"gridAutoColumns",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/grid-auto-columns`}},{kind:"property",name:"gridAutoFlow",required:!1,type:{kind:"external",name:"Property.GridAutoFlow",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow"},description:`The **\`grid-auto-flow\`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.

**Syntax**: \`[ row | column ] || dense\`

**Initial value**: \`row\`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |`,declarations:[{name:"gridAutoFlow",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/grid-auto-flow`}},{kind:"property",name:"gridAutoRows",required:!1,type:{kind:"external",name:"Property.GridAutoRows",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows"},description:`The **\`grid-auto-rows\`** CSS property specifies the size of an implicitly-created grid row track or pattern of tracks.

**Syntax**: \`<track-size>+\`

**Initial value**: \`auto\`

| Chrome | Firefox |  Safari  |  Edge  |            IE            |
| :----: | :-----: | :------: | :----: | :----------------------: |
| **57** | **70**  | **10.1** | **16** | **10** _(-ms-grid-rows)_ |`,declarations:[{name:"gridAutoRows",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/grid-auto-rows`}},{kind:"property",name:"gridColumnEnd",required:!1,type:{kind:"external",name:"Property.GridColumnEnd",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end"},description:`The **\`grid-column-end\`** CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.

**Syntax**: \`<grid-line>\`

**Initial value**: \`auto\`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |`,declarations:[{name:"gridColumnEnd",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/grid-column-end`}},{kind:"property",name:"gridColumnStart",required:!1,type:{kind:"external",name:"Property.GridColumnStart",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start"},description:`The **\`grid-column-start\`** CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.

**Syntax**: \`<grid-line>\`

**Initial value**: \`auto\`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |`,declarations:[{name:"gridColumnStart",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/grid-column-start`}},{kind:"property",name:"gridRowEnd",required:!1,type:{kind:"external",name:"Property.GridRowEnd",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end"},description:`The **\`grid-row-end\`** CSS property specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.

**Syntax**: \`<grid-line>\`

**Initial value**: \`auto\`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |`,declarations:[{name:"gridRowEnd",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/grid-row-end`}},{kind:"property",name:"gridRowStart",required:!1,type:{kind:"external",name:"Property.GridRowStart",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start"},description:`The **\`grid-row-start\`** CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.

**Syntax**: \`<grid-line>\`

**Initial value**: \`auto\`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |`,declarations:[{name:"gridRowStart",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/grid-row-start`}},{kind:"property",name:"gridTemplateAreas",required:!1,type:{kind:"external",name:"Property.GridTemplateAreas",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas"},description:`The **\`grid-template-areas\`** CSS property specifies named grid areas, establishing the cells in the grid and assigning them names.

**Syntax**: \`none | <string>+\`

**Initial value**: \`none\`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |`,declarations:[{name:"gridTemplateAreas",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/grid-template-areas`}},{kind:"property",name:"gridTemplateColumns",required:!1,type:{kind:"external",name:"Property.GridTemplateColumns",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns"},description:`The **\`grid-template-columns\`** CSS property defines the line names and track sizing functions of the grid columns.

**Syntax**: \`none | <track-list> | <auto-track-list> | subgrid <line-name-list>?\`

**Initial value**: \`none\`

| Chrome | Firefox |  Safari  |  Edge  |             IE              |
| :----: | :-----: | :------: | :----: | :-------------------------: |
| **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-columns)_ |`,declarations:[{name:"gridTemplateColumns",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/grid-template-columns`}},{kind:"property",name:"gridTemplateRows",required:!1,type:{kind:"external",name:"Property.GridTemplateRows",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows"},description:`The **\`grid-template-rows\`** CSS property defines the line names and track sizing functions of the grid rows.

**Syntax**: \`none | <track-list> | <auto-track-list> | subgrid <line-name-list>?\`

**Initial value**: \`none\`

| Chrome | Firefox |  Safari  |  Edge  |            IE            |
| :----: | :-----: | :------: | :----: | :----------------------: |
| **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-rows)_ |`,declarations:[{name:"gridTemplateRows",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/grid-template-rows`}},{kind:"property",name:"hangingPunctuation",required:!1,type:{kind:"external",name:"Property.HangingPunctuation",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/hanging-punctuation"},description:`The **\`hanging-punctuation\`** CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.

**Syntax**: \`none | [ first || [ force-end | allow-end ] || last ]\`

**Initial value**: \`none\`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   |   No    | **10** |  No  | No  |`,declarations:[{name:"hangingPunctuation",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/hanging-punctuation`}},{kind:"property",name:"height",required:!1,type:{kind:"external",name:"Property.Height",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/height"},description:"The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area.\n\n**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",declarations:[{name:"height",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/height`}},{kind:"property",name:"hyphens",required:!1,type:{kind:"external",name:"Property.Hyphens",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens"},description:`The **\`hyphens\`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

**Syntax**: \`none | manual | auto\`

**Initial value**: \`manual\`

|  Chrome  | Firefox |    Safari     |     Edge     |      IE      |
| :------: | :-----: | :-----------: | :----------: | :----------: |
|  **55**  | **43**  | **5.1** _-x-_ | **12** _-x-_ | **10** _-x-_ |
| 13 _-x-_ | 6 _-x-_ |               |              |              |`,declarations:[{name:"hyphens",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/hyphens`}},{kind:"property",name:"imageOrientation",required:!1,type:{kind:"external",name:"Property.ImageOrientation",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/image-orientation"},description:"The **`image-orientation`** CSS property specifies a layout-independent correction to the orientation of an image. It should _not_ be used for any other orientation adjustments; instead, the `transform` property should be used with the `rotate` `<transform-function>`.\n\n**Syntax**: `from-image | <angle> | [ <angle>? flip ]`\n\n**Initial value**: `from-image`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **81** | **26**  | **13.1** | **81** | No  |",declarations:[{name:"imageOrientation",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/image-orientation`}},{kind:"property",name:"imageRendering",required:!1,type:{kind:"external",name:"Property.ImageRendering",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering"},description:`The **\`image-rendering\`** CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.

**Syntax**: \`auto | crisp-edges | pixelated\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **13** | **3.6** | **6**  | **79** | No  |`,declarations:[{name:"imageRendering",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/image-rendering`}},{kind:"property",name:"imageResolution",required:!1,type:{kind:"external",name:"Property.ImageResolution",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/image-resolution"},description:"**Syntax**: `[ from-image || <resolution> ] && snap?`\n\n**Initial value**: `1dppx`",declarations:[{name:"imageResolution",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"initialLetter",required:!1,type:{kind:"external",name:"Property.InitialLetter",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/initial-letter"},description:`The \`initial-letter\` CSS property sets styling for dropped, raised, and sunken initial letters.

**Syntax**: \`normal | [ <number> <integer>? ]\`

**Initial value**: \`normal\`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   |   No    | **9**  |  No  | No  |`,declarations:[{name:"initialLetter",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/initial-letter`}},{kind:"property",name:"inlineSize",required:!1,type:{kind:"external",name:"Property.InlineSize",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size"},description:"The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'width'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **41**  | **12.1** | **79** | No  |",declarations:[{name:"inlineSize",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/inline-size`}},{kind:"property",name:"inset",required:!1,type:{kind:"external",name:"Property.Inset",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/inset"},description:"The **`inset`** CSS property is a shorthand that corresponds to the `top`, `right`, `bottom`, and/or `left` properties. It has the same multi-value syntax of the `margin` shorthand.\n\n**Syntax**: `<'top'>{1,4}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n| **87** | **66**  |   No   | n/a  | No  |",declarations:[{name:"inset",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/inset`}},{kind:"property",name:"insetBlock",required:!1,type:{kind:"external",name:"Property.InsetBlock",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block"},description:"The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>{1,2}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n| **87** | **63**  |   No   | n/a  | No  |",declarations:[{name:"insetBlock",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/inset-block`}},{kind:"property",name:"insetBlockEnd",required:!1,type:{kind:"external",name:"Property.InsetBlockEnd",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block-end"},description:"The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n| **87** | **63**  |   No   | n/a  | No  |",declarations:[{name:"insetBlockEnd",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/inset-block-end`}},{kind:"property",name:"insetBlockStart",required:!1,type:{kind:"external",name:"Property.InsetBlockStart",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block-start"},description:"The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n| **87** | **63**  |   No   | n/a  | No  |",declarations:[{name:"insetBlockStart",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/inset-block-start`}},{kind:"property",name:"insetInline",required:!1,type:{kind:"external",name:"Property.InsetInline",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline"},description:"The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>{1,2}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n| **87** | **63**  |   No   | n/a  | No  |",declarations:[{name:"insetInline",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/inset-inline`}},{kind:"property",name:"insetInlineEnd",required:!1,type:{kind:"external",name:"Property.InsetInlineEnd",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-end"},description:"The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n| **87** | **63**  |   No   | n/a  | No  |",declarations:[{name:"insetInlineEnd",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/inset-inline-end`}},{kind:"property",name:"insetInlineStart",required:!1,type:{kind:"external",name:"Property.InsetInlineStart",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-start"},description:"The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n| **87** | **63**  |   No   | n/a  | No  |",declarations:[{name:"insetInlineStart",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/inset-inline-start`}},{kind:"property",name:"isolation",required:!1,type:{kind:"external",name:"Property.Isolation",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/isolation"},description:`The **\`isolation\`** CSS property determines whether an element must create a new stacking context.

**Syntax**: \`auto | isolate\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **41** | **36**  | **8**  | **79** | No  |`,declarations:[{name:"isolation",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/isolation`}},{kind:"property",name:"justifyContent",required:!1,type:{kind:"external",name:"Property.JustifyContent",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content"},description:`The CSS **\`justify-content\`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.

**Syntax**: \`normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]\`

**Initial value**: \`normal\`

---

_Supported in Flex Layout_

|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :------: | :-----: | :-------: | :----: | :----: |
|  **52**  | **20**  |   **9**   | **12** | **11** |
| 21 _-x-_ |         | 6.1 _-x-_ |        |        |

---

_Supported in Grid Layout_

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

---`,declarations:[{name:"justifyContent",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/justify-content`}},{kind:"property",name:"justifyItems",required:!1,type:{kind:"external",name:"Property.JustifyItems",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items"},description:`The CSS **\`justify-items\`** property defines the default \`justify-self\` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.

**Syntax**: \`normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ]\`

**Initial value**: \`legacy\`

---

_Supported in Flex Layout_

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **52** | **20**  | **9**  | **12** | **11** |

---

_Supported in Grid Layout_

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **45**  | **10.1** | **16** | No  |

---`,declarations:[{name:"justifyItems",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/justify-items`}},{kind:"property",name:"justifySelf",required:!1,type:{kind:"external",name:"Property.JustifySelf",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self"},description:`The CSS **\`justify-self\`** property sets the way a box is justified inside its alignment container along the appropriate axis.

**Syntax**: \`auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]\`

**Initial value**: \`auto\`

---

_Supported in Flex Layout_

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **45**  | **10.1** | **16** | No  |

---

_Supported in Grid Layout_

| Chrome | Firefox |  Safari  |  Edge  |      IE      |
| :----: | :-----: | :------: | :----: | :----------: |
| **57** | **45**  | **10.1** | **16** | **10** _-x-_ |

---`,declarations:[{name:"justifySelf",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/justify-self`}},{kind:"property",name:"justifyTracks",required:!1,type:{kind:"external",name:"Property.JustifyTracks",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/justify-tracks"},description:`The **\`justify-tracks\`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their inline axis.

**Syntax**: \`[ normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ] ]#\`

**Initial value**: \`normal\`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   |   n/a   |   No   |  No  | No  |`,declarations:[{name:"justifyTracks",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/justify-tracks`}},{kind:"property",name:"left",required:!1,type:{kind:"external",name:"Property.Left",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/left"},description:`The **\`left\`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.

**Syntax**: \`<length> | <percentage> | auto\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |`,declarations:[{name:"left",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/left`}},{kind:"property",name:"letterSpacing",required:!1,type:{kind:"external",name:"Property.LetterSpacing",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing"},description:"The **`letter-spacing`** CSS property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of `letter-spacing` causes characters to spread farther apart, while negative values of `letter-spacing` bring characters closer together.\n\n**Syntax**: `normal | <length>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",declarations:[{name:"letterSpacing",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/letter-spacing`}},{kind:"property",name:"lineBreak",required:!1,type:{kind:"external",name:"Property.LineBreak",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/line-break"},description:`The **\`line-break\`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.

**Syntax**: \`auto | loose | normal | strict | anywhere\`

**Initial value**: \`auto\`

| Chrome  | Firefox | Safari  |  Edge  |   IE    |
| :-----: | :-----: | :-----: | :----: | :-----: |
| **58**  | **69**  | **11**  | **14** | **5.5** |
| 1 _-x-_ |         | 3 _-x-_ |        |         |`,declarations:[{name:"lineBreak",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/line-break`}},{kind:"property",name:"lineHeight",required:!1,type:{kind:"external",name:"Property.LineHeight",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/line-height"},description:`The **\`line-height\`** CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.

**Syntax**: \`normal | <number> | <length> | <percentage>\`

**Initial value**: \`normal\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"lineHeight",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/line-height`}},{kind:"property",name:"lineHeightStep",required:!1,type:{kind:"external",name:"Property.LineHeightStep",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/line-height-step"},description:`The **\`line-height-step\`** CSS property sets the step unit for line box heights. When the property is set, line box heights are rounded up to the closest multiple of the unit.

**Syntax**: \`<length>\`

**Initial value**: \`0\`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|  n/a   |   No    |   No   | n/a  | No  |`,declarations:[{name:"lineHeightStep",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/line-height-step`}},{kind:"property",name:"listStyleImage",required:!1,type:{kind:"external",name:"Property.ListStyleImage",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image"},description:`The **\`list-style-image\`** CSS property sets an image to be used as the list item marker.

**Syntax**: \`<image> | none\`

**Initial value**: \`none\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"listStyleImage",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/list-style-image`}},{kind:"property",name:"listStylePosition",required:!1,type:{kind:"external",name:"Property.ListStylePosition",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position"},description:"The **`list-style-position`** CSS property sets the position of the `::marker` relative to a list item.\n\n**Syntax**: `inside | outside`\n\n**Initial value**: `outside`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",declarations:[{name:"listStylePosition",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/list-style-position`}},{kind:"property",name:"listStyleType",required:!1,type:{kind:"external",name:"Property.ListStyleType",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type"},description:`The **\`list-style-type\`** CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.

**Syntax**: \`<counter-style> | <string> | none\`

**Initial value**: \`disc\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"listStyleType",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/list-style-type`}},{kind:"property",name:"marginBlock",required:!1,type:{kind:"external",name:"Property.MarginBlock",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block"},description:`The **\`margin-block\`** CSS shorthand property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.

**Syntax**: \`<'margin-left'>{1,2}\`

**Initial value**: \`0\`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **87** | **66**  |   No   | n/a  | No  |`,declarations:[{name:"marginBlock",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/margin-block`}},{kind:"property",name:"marginBlockEnd",required:!1,type:{kind:"external",name:"Property.MarginBlockEnd",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-end"},description:`The **\`margin-block-end\`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.

**Syntax**: \`<'margin-left'>\`

**Initial value**: \`0\`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |`,declarations:[{name:"marginBlockEnd",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/margin-block-end`}},{kind:"property",name:"marginBlockStart",required:!1,type:{kind:"external",name:"Property.MarginBlockStart",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-start"},description:`The **\`margin-block-start\`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.

**Syntax**: \`<'margin-left'>\`

**Initial value**: \`0\`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |`,declarations:[{name:"marginBlockStart",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/margin-block-start`}},{kind:"property",name:"marginBottom",required:!1,type:{kind:"external",name:"Property.MarginBottom",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom"},description:`The **\`margin-bottom\`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

**Syntax**: \`<length> | <percentage> | auto\`

**Initial value**: \`0\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |`,declarations:[{name:"marginBottom",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/margin-bottom`}},{kind:"property",name:"marginInline",required:!1,type:{kind:"external",name:"Property.MarginInline",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline"},description:`The **\`margin-inline\`** CSS shorthand property is a shorthand property that defines both the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.

**Syntax**: \`<'margin-left'>{1,2}\`

**Initial value**: \`0\`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **87** | **66**  |   No   | n/a  | No  |`,declarations:[{name:"marginInline",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/margin-inline`}},{kind:"property",name:"marginInlineEnd",required:!1,type:{kind:"external",name:"Property.MarginInlineEnd",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end"},description:"The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`\n\n|          Chrome          |        Firefox        |          Safari          |  Edge  | IE  |\n| :----------------------: | :-------------------: | :----------------------: | :----: | :-: |\n|          **69**          |        **41**         |         **12.1**         | **79** | No  |\n| 2 _(-webkit-margin-end)_ | 3 _(-moz-margin-end)_ | 3 _(-webkit-margin-end)_ |        |     |",declarations:[{name:"marginInlineEnd",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/margin-inline-end`}},{kind:"property",name:"marginInlineStart",required:!1,type:{kind:"external",name:"Property.MarginInlineStart",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start"},description:"The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`\n\n|           Chrome           |         Firefox         |           Safari           |  Edge  | IE  |\n| :------------------------: | :---------------------: | :------------------------: | :----: | :-: |\n|           **69**           |         **41**          |          **12.1**          | **79** | No  |\n| 2 _(-webkit-margin-start)_ | 3 _(-moz-margin-start)_ | 3 _(-webkit-margin-start)_ |        |     |",declarations:[{name:"marginInlineStart",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/margin-inline-start`}},{kind:"property",name:"marginLeft",required:!1,type:{kind:"external",name:"Property.MarginLeft",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left"},description:`The **\`margin-left\`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

**Syntax**: \`<length> | <percentage> | auto\`

**Initial value**: \`0\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |`,declarations:[{name:"marginLeft",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/margin-left`}},{kind:"property",name:"marginRight",required:!1,type:{kind:"external",name:"Property.MarginRight",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right"},description:`The **\`margin-right\`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

**Syntax**: \`<length> | <percentage> | auto\`

**Initial value**: \`0\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |`,declarations:[{name:"marginRight",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/margin-right`}},{kind:"property",name:"marginTop",required:!1,type:{kind:"external",name:"Property.MarginTop",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top"},description:`The **\`margin-top\`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

**Syntax**: \`<length> | <percentage> | auto\`

**Initial value**: \`0\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |`,declarations:[{name:"marginTop",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/margin-top`}},{kind:"property",name:"maskBorderMode",required:!1,type:{kind:"external",name:"Property.MaskBorderMode",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border-mode"},description:"The **`mask-border-mode`** CSS property specifies the blending mode used in a mask border.\n\n**Syntax**: `luminance | alpha`\n\n**Initial value**: `alpha`",declarations:[{name:"maskBorderMode",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"maskBorderOutset",required:!1,type:{kind:"external",name:"Property.MaskBorderOutset",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border-outset"},description:`The **\`mask-border-outset\`** CSS property specifies the distance by which an element's mask border is set out from its border box.

**Syntax**: \`[ <length> | <number> ]{1,4}\`

**Initial value**: \`0\`

|                 Chrome                  | Firefox |                  Safari                   |                   Edge                   | IE  |
| :-------------------------------------: | :-----: | :---------------------------------------: | :--------------------------------------: | :-: |
| **1** _(-webkit-mask-box-image-outset)_ |   No    | **3.1** _(-webkit-mask-box-image-outset)_ | **79** _(-webkit-mask-box-image-outset)_ | No  |`,declarations:[{name:"maskBorderOutset",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/mask-border-outset`}},{kind:"property",name:"maskBorderRepeat",required:!1,type:{kind:"external",name:"Property.MaskBorderRepeat",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border-repeat"},description:`The **\`mask-border-repeat\`** CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.

**Syntax**: \`[ stretch | repeat | round | space ]{1,2}\`

**Initial value**: \`stretch\`

|                 Chrome                  | Firefox |                  Safari                   |                   Edge                   | IE  |
| :-------------------------------------: | :-----: | :---------------------------------------: | :--------------------------------------: | :-: |
| **1** _(-webkit-mask-box-image-repeat)_ |   No    | **3.1** _(-webkit-mask-box-image-repeat)_ | **79** _(-webkit-mask-box-image-repeat)_ | No  |`,declarations:[{name:"maskBorderRepeat",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/mask-border-repeat`}},{kind:"property",name:"maskBorderSlice",required:!1,type:{kind:"external",name:"Property.MaskBorderSlice",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border-slice"},description:"The **`mask-border-slice`** CSS property divides the image set by `mask-border-source` into regions. These regions are used to form the components of an element's mask border.\n\n**Syntax**: `<number-percentage>{1,4} fill?`\n\n**Initial value**: `0`\n\n|                 Chrome                 | Firefox |                  Safari                  |                  Edge                   | IE  |\n| :------------------------------------: | :-----: | :--------------------------------------: | :-------------------------------------: | :-: |\n| **1** _(-webkit-mask-box-image-slice)_ |   No    | **3.1** _(-webkit-mask-box-image-slice)_ | **79** _(-webkit-mask-box-image-slice)_ | No  |",declarations:[{name:"maskBorderSlice",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/mask-border-slice`}},{kind:"property",name:"maskBorderSource",required:!1,type:{kind:"external",name:"Property.MaskBorderSource",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border-source"},description:`The **\`mask-border-source\`** CSS property sets the source image used to create an element's mask border.

**Syntax**: \`none | <image>\`

**Initial value**: \`none\`

|                 Chrome                  | Firefox |                  Safari                   |                   Edge                   | IE  |
| :-------------------------------------: | :-----: | :---------------------------------------: | :--------------------------------------: | :-: |
| **1** _(-webkit-mask-box-image-source)_ |   No    | **3.1** _(-webkit-mask-box-image-source)_ | **79** _(-webkit-mask-box-image-source)_ | No  |`,declarations:[{name:"maskBorderSource",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/mask-border-source`}},{kind:"property",name:"maskBorderWidth",required:!1,type:{kind:"external",name:"Property.MaskBorderWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border-width"},description:`The **\`mask-border-width\`** CSS property sets the width of an element's mask border.

**Syntax**: \`[ <length-percentage> | <number> | auto ]{1,4}\`

**Initial value**: \`auto\`

|                 Chrome                 | Firefox |                  Safari                  |                  Edge                   | IE  |
| :------------------------------------: | :-----: | :--------------------------------------: | :-------------------------------------: | :-: |
| **1** _(-webkit-mask-box-image-width)_ |   No    | **3.1** _(-webkit-mask-box-image-width)_ | **79** _(-webkit-mask-box-image-width)_ | No  |`,declarations:[{name:"maskBorderWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/mask-border-width`}},{kind:"property",name:"maskClip",required:!1,type:{kind:"external",name:"Property.MaskClip",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mask-clip"},description:`The **\`mask-clip\`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.

**Syntax**: \`[ <geometry-box> | no-clip ]#\`

**Initial value**: \`border-box\`

|   Chrome    | Firefox |   Safari    |     Edge     | IE  |
| :---------: | :-----: | :---------: | :----------: | :-: |
| **1** _-x-_ | **53**  | **4** _-x-_ | **79** _-x-_ | No  |`,declarations:[{name:"maskClip",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/mask-clip`}},{kind:"property",name:"maskComposite",required:!1,type:{kind:"external",name:"Property.MaskComposite",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mask-composite"},description:`The **\`mask-composite\`** CSS property represents a compositing operation used on the current mask layer with the mask layers below it.

**Syntax**: \`<compositing-operator>#\`

**Initial value**: \`add\`

| Chrome | Firefox | Safari | Edge  | IE  |
| :----: | :-----: | :----: | :---: | :-: |
|   No   | **53**  |   No   | 18-79 | No  |`,declarations:[{name:"maskComposite",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/mask-composite`}},{kind:"property",name:"maskImage",required:!1,type:{kind:"external",name:"Property.MaskImage",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image"},description:`The **\`mask-image\`** CSS property sets the image that is used as mask layer for an element.

**Syntax**: \`<mask-reference>#\`

**Initial value**: \`none\`

|   Chrome    | Firefox |   Safari    |  Edge  | IE  |
| :---------: | :-----: | :---------: | :----: | :-: |
| **1** _-x-_ | **53**  | **4** _-x-_ | **16** | No  |`,declarations:[{name:"maskImage",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/mask-image`}},{kind:"property",name:"maskMode",required:!1,type:{kind:"external",name:"Property.MaskMode",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mask-mode"},description:"The **`mask-mode`** CSS property sets whether the mask reference defined by `mask-image` is treated as a luminance or alpha mask.\n\n**Syntax**: `<masking-mode>#`\n\n**Initial value**: `match-source`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **53**  |   No   |  No  | No  |",declarations:[{name:"maskMode",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/mask-mode`}},{kind:"property",name:"maskOrigin",required:!1,type:{kind:"external",name:"Property.MaskOrigin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mask-origin"},description:`The **\`mask-origin\`** CSS property sets the origin of a mask.

**Syntax**: \`<geometry-box>#\`

**Initial value**: \`border-box\`

|   Chrome    | Firefox |   Safari    |     Edge     | IE  |
| :---------: | :-----: | :---------: | :----------: | :-: |
| **1** _-x-_ | **53**  | **4** _-x-_ | **79** _-x-_ | No  |`,declarations:[{name:"maskOrigin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/mask-origin`}},{kind:"property",name:"maskPosition",required:!1,type:{kind:"external",name:"Property.MaskPosition",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mask-position"},description:"The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.\n\n**Syntax**: `<position>#`\n\n**Initial value**: `center`\n\n|   Chrome    | Firefox |    Safari     |  Edge  | IE  |\n| :---------: | :-----: | :-----------: | :----: | :-: |\n| **1** _-x-_ | **53**  | **3.2** _-x-_ | **18** | No  |",declarations:[{name:"maskPosition",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/mask-position`}},{kind:"property",name:"maskRepeat",required:!1,type:{kind:"external",name:"Property.MaskRepeat",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mask-repeat"},description:`The **\`mask-repeat\`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.

**Syntax**: \`<repeat-style>#\`

**Initial value**: \`no-repeat\`

|   Chrome    | Firefox |    Safari     |  Edge  | IE  |
| :---------: | :-----: | :-----------: | :----: | :-: |
| **1** _-x-_ | **53**  | **3.2** _-x-_ | **18** | No  |`,declarations:[{name:"maskRepeat",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/mask-repeat`}},{kind:"property",name:"maskSize",required:!1,type:{kind:"external",name:"Property.MaskSize",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mask-size"},description:`The **\`mask-size\`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.

**Syntax**: \`<bg-size>#\`

**Initial value**: \`auto\`

|   Chrome    | Firefox |   Safari    |  Edge  | IE  |
| :---------: | :-----: | :---------: | :----: | :-: |
| **4** _-x-_ | **53**  | **4** _-x-_ | **18** | No  |`,declarations:[{name:"maskSize",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/mask-size`}},{kind:"property",name:"maskType",required:!1,type:{kind:"external",name:"Property.MaskType",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mask-type"},description:"The **`mask-type`** CSS property sets whether an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.\n\n**Syntax**: `luminance | alpha`\n\n**Initial value**: `luminance`\n\n| Chrome | Firefox | Safari  |  Edge  | IE  |\n| :----: | :-----: | :-----: | :----: | :-: |\n| **24** | **35**  | **6.1** | **79** | No  |",declarations:[{name:"maskType",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/mask-type`}},{kind:"property",name:"mathStyle",required:!1,type:{kind:"external",name:"Property.MathStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/math-style"},description:`The \`math-style\` property indicates whether MathML equations should render with normal or compact height.

**Syntax**: \`normal | compact\`

**Initial value**: \`normal\`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|  n/a   |   n/a   |   No   |  No  | No  |`,declarations:[{name:"mathStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/math-style`}},{kind:"property",name:"maxBlockSize",required:!1,type:{kind:"external",name:"Property.MaxBlockSize",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size"},description:"The `**max-block-size**` CSS property specifies the maximum size of an element in the direction opposite that of the writing direction as specified by `writing-mode`. That is, if the writing direction is horizontal, then `max-block-size` is equivalent to `max-height`; if the writing direction is vertical, `max-block-size` is the same as `max-width`.\n\n**Syntax**: `<'max-width'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **41**  | **12.1** | **79** | No  |",declarations:[{name:"maxBlockSize",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/max-block-size`}},{kind:"property",name:"maxHeight",required:!1,type:{kind:"external",name:"Property.MaxHeight",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/max-height"},description:"The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.\n\n**Syntax**: `none | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **18** |  **1**  | **1.3** | **12** | **7** |",declarations:[{name:"maxHeight",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/max-height`}},{kind:"property",name:"maxInlineSize",required:!1,type:{kind:"external",name:"Property.MaxInlineSize",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size"},description:"The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the `max-width` or the `max-height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'max-width'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |   Safari   |  Edge  | IE  |\n| :----: | :-----: | :--------: | :----: | :-: |\n| **57** | **41**  |  **12.1**  | **79** | No  |\n|        |         | 10.1 _-x-_ |        |     |",declarations:[{name:"maxInlineSize",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/max-inline-size`}},{kind:"property",name:"maxLines",required:!1,type:{kind:"external",name:"Property.MaxLines",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/max-lines"},description:"**Syntax**: `none | <integer>`\n\n**Initial value**: `none`",declarations:[{name:"maxLines",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"maxWidth",required:!1,type:{kind:"external",name:"Property.MaxWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/max-width"},description:"The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.\n\n**Syntax**: `none | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **7** |",declarations:[{name:"maxWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/max-width`}},{kind:"property",name:"minBlockSize",required:!1,type:{kind:"external",name:"Property.MinBlockSize",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size"},description:"The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'min-width'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **41**  | **12.1** | **79** | No  |",declarations:[{name:"minBlockSize",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/min-block-size`}},{kind:"property",name:"minHeight",required:!1,type:{kind:"external",name:"Property.MinHeight",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/min-height"},description:"The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.\n\n**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  |  **3**  | **1.3** | **12** | **7** |",declarations:[{name:"minHeight",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/min-height`}},{kind:"property",name:"minInlineSize",required:!1,type:{kind:"external",name:"Property.MinInlineSize",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size"},description:"The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'min-width'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **41**  | **12.1** | **79** | No  |",declarations:[{name:"minInlineSize",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/min-inline-size`}},{kind:"property",name:"minWidth",required:!1,type:{kind:"external",name:"Property.MinWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/min-width"},description:"The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.\n\n**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **7** |",declarations:[{name:"minWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/min-width`}},{kind:"property",name:"mixBlendMode",required:!1,type:{kind:"external",name:"Property.MixBlendMode",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode"},description:`The **\`mix-blend-mode\`** CSS property sets how an element's content should blend with the content of the element's parent and the element's background.

**Syntax**: \`<blend-mode>\`

**Initial value**: \`normal\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **41** | **32**  | **8**  | **79** | No  |`,declarations:[{name:"mixBlendMode",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/mix-blend-mode`}},{kind:"property",name:"motionDistance",required:!1,type:{kind:"external",name:"Property.OffsetDistance",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/offset-distance"},description:`The **\`offset-distance\`** CSS property specifies a position along an \`offset-path\` for an element to be placed.

**Syntax**: \`<length-percentage>\`

**Initial value**: \`0\`

|         Chrome         | Firefox | Safari |  Edge  | IE  |
| :--------------------: | :-----: | :----: | :----: | :-: |
|         **55**         | **72**  |   No   | **79** | No  |
| 46 _(motion-distance)_ |         |        |        |     |`,declarations:[{name:"motionDistance",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/offset-distance`}},{kind:"property",name:"motionPath",required:!1,type:{kind:"external",name:"Property.OffsetPath",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/offset-path"},description:`The **\`offset-path\`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.

**Syntax**: \`none | ray( [ <angle> && <size> && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]\`

**Initial value**: \`none\`

|       Chrome       | Firefox | Safari |  Edge  | IE  |
| :----------------: | :-----: | :----: | :----: | :-: |
|       **55**       | **72**  |   No   | **79** | No  |
| 46 _(motion-path)_ |         |        |        |     |`,declarations:[{name:"motionPath",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/offset-path`}},{kind:"property",name:"motionRotation",required:!1,type:{kind:"external",name:"Property.OffsetRotate",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/offset-rotate"},description:`The **\`offset-rotate\`** CSS property defines the orientation/direction of the element as it is positioned along the \`offset-path\`.

**Syntax**: \`[ auto | reverse ] || <angle>\`

**Initial value**: \`auto\`

|         Chrome         | Firefox | Safari |  Edge  | IE  |
| :--------------------: | :-----: | :----: | :----: | :-: |
|         **56**         | **72**  |   No   | **79** | No  |
| 46 _(motion-rotation)_ |         |        |        |     |`,declarations:[{name:"motionRotation",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/offset-rotate`}},{kind:"property",name:"objectFit",required:!1,type:{kind:"external",name:"Property.ObjectFit",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"},description:"The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.\n\n**Syntax**: `fill | contain | cover | none | scale-down`\n\n**Initial value**: `fill`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **32** | **36**  | **10** | **79** | No  |",declarations:[{name:"objectFit",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/object-fit`}},{kind:"property",name:"objectPosition",required:!1,type:{kind:"external",name:"Property.ObjectPosition",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-position"},description:`The **\`object-position\`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.

**Syntax**: \`<position>\`

**Initial value**: \`50% 50%\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **32** | **36**  | **10** | **79** | No  |`,declarations:[{name:"objectPosition",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/object-position`}},{kind:"property",name:"offsetAnchor",required:!1,type:{kind:"external",name:"Property.OffsetAnchor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/offset-anchor"},description:`**Syntax**: \`auto | <position>\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **79** | **72**  |   No   | **79** | No  |`,declarations:[{name:"offsetAnchor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/offset-anchor`}},{kind:"property",name:"offsetDistance",required:!1,type:{kind:"external",name:"Property.OffsetDistance",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/offset-distance"},description:`The **\`offset-distance\`** CSS property specifies a position along an \`offset-path\` for an element to be placed.

**Syntax**: \`<length-percentage>\`

**Initial value**: \`0\`

|         Chrome         | Firefox | Safari |  Edge  | IE  |
| :--------------------: | :-----: | :----: | :----: | :-: |
|         **55**         | **72**  |   No   | **79** | No  |
| 46 _(motion-distance)_ |         |        |        |     |`,declarations:[{name:"offsetDistance",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/offset-distance`}},{kind:"property",name:"offsetPath",required:!1,type:{kind:"external",name:"Property.OffsetPath",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/offset-path"},description:`The **\`offset-path\`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.

**Syntax**: \`none | ray( [ <angle> && <size> && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]\`

**Initial value**: \`none\`

|       Chrome       | Firefox | Safari |  Edge  | IE  |
| :----------------: | :-----: | :----: | :----: | :-: |
|       **55**       | **72**  |   No   | **79** | No  |
| 46 _(motion-path)_ |         |        |        |     |`,declarations:[{name:"offsetPath",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/offset-path`}},{kind:"property",name:"offsetRotate",required:!1,type:{kind:"external",name:"Property.OffsetRotate",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/offset-rotate"},description:`The **\`offset-rotate\`** CSS property defines the orientation/direction of the element as it is positioned along the \`offset-path\`.

**Syntax**: \`[ auto | reverse ] || <angle>\`

**Initial value**: \`auto\`

|         Chrome         | Firefox | Safari |  Edge  | IE  |
| :--------------------: | :-----: | :----: | :----: | :-: |
|         **56**         | **72**  |   No   | **79** | No  |
| 46 _(motion-rotation)_ |         |        |        |     |`,declarations:[{name:"offsetRotate",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/offset-rotate`}},{kind:"property",name:"offsetRotation",required:!1,type:{kind:"external",name:"Property.OffsetRotate",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/offset-rotate"},description:`The **\`offset-rotate\`** CSS property defines the orientation/direction of the element as it is positioned along the \`offset-path\`.

**Syntax**: \`[ auto | reverse ] || <angle>\`

**Initial value**: \`auto\`

|         Chrome         | Firefox | Safari |  Edge  | IE  |
| :--------------------: | :-----: | :----: | :----: | :-: |
|         **56**         | **72**  |   No   | **79** | No  |
| 46 _(motion-rotation)_ |         |        |        |     |`,declarations:[{name:"offsetRotation",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/offset-rotate`}},{kind:"property",name:"opacity",required:!1,type:{kind:"external",name:"Property.Opacity",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/opacity"},description:`The **\`opacity\`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.

**Syntax**: \`<alpha-value>\`

**Initial value**: \`1.0\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **2**  | **12** | **9** |`,declarations:[{name:"opacity",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/opacity`}},{kind:"property",name:"order",required:!1,type:{kind:"external",name:"Property.Order",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/order"},description:`The **\`order\`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending \`order\` value and then by their source code order.

**Syntax**: \`<integer>\`

**Initial value**: \`0\`

|  Chrome  | Firefox | Safari  |  Edge  |    IE    |
| :------: | :-----: | :-----: | :----: | :------: |
|  **29**  | **20**  |  **9**  | **12** |  **11**  |
| 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |`,declarations:[{name:"order",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/order`}},{kind:"property",name:"orphans",required:!1,type:{kind:"external",name:"Property.Orphans",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/orphans"},description:`The **\`orphans\`** CSS property sets the minimum number of lines in a block container that must be shown at the _bottom_ of a page, region, or column.

**Syntax**: \`<integer>\`

**Initial value**: \`2\`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **25** |   No    | **1.3** | **12** | **8** |`,declarations:[{name:"orphans",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/orphans`}},{kind:"property",name:"outlineColor",required:!1,type:{kind:"external",name:"Property.OutlineColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/outline-color"},description:"The **`outline-color`** CSS property sets the color of an element's outline.\n\n**Syntax**: `<color> | invert`\n\n**Initial value**: `invert`, for browsers supporting it, `currentColor` for the other\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  | **1.5** | **1.2** | **12** | **8** |",declarations:[{name:"outlineColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/outline-color`}},{kind:"property",name:"outlineOffset",required:!1,type:{kind:"external",name:"Property.OutlineOffset",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset"},description:`The **\`outline-offset\`** CSS property sets the amount of space between an outline and the edge or border of an element.

**Syntax**: \`<length>\`

**Initial value**: \`0\`

| Chrome | Firefox | Safari  |  Edge  | IE  |
| :----: | :-----: | :-----: | :----: | :-: |
| **1**  | **1.5** | **1.2** | **15** | No  |`,declarations:[{name:"outlineOffset",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/outline-offset`}},{kind:"property",name:"outlineStyle",required:!1,type:{kind:"external",name:"Property.OutlineStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/outline-style"},description:"The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.\n\n**Syntax**: `auto | <'border-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  | **1.5** | **1.2** | **12** | **8** |",declarations:[{name:"outlineStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/outline-style`}},{kind:"property",name:"outlineWidth",required:!1,type:{kind:"external",name:"Property.OutlineWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/outline-width"},description:"The CSS **`outline-width`** property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  | **1.5** | **1.2** | **12** | **8** |",declarations:[{name:"outlineWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/outline-width`}},{kind:"property",name:"overflowAnchor",required:!1,type:{kind:"external",name:"Property.OverflowAnchor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-anchor"},description:`**Syntax**: \`auto | none\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **56** | **66**  |   No   | **79** | No  |`,declarations:[{name:"overflowAnchor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/overflow-anchor`}},{kind:"property",name:"overflowBlock",required:!1,type:{kind:"external",name:"Property.OverflowBlock",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-block"},description:`**Syntax**: \`visible | hidden | clip | scroll | auto\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **69**  |   No   |  No  | No  |`,declarations:[{name:"overflowBlock",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/overflow-block`}},{kind:"property",name:"overflowClipBox",required:!1,type:{kind:"external",name:"Property.OverflowClipBox",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-clip-box"},description:"The **`overflow-clip-box`** CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the `overflow-clip-box-inline` and `overflow-clip-box-block` properties.\n\n**Syntax**: `padding-box | content-box`\n\n**Initial value**: `padding-box`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **29**  |   No   |  No  | No  |",declarations:[{name:"overflowClipBox",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Mozilla/Gecko/Chrome/CSS/overflow-clip-box`}},{kind:"property",name:"overflowClipMargin",required:!1,type:{kind:"external",name:"Property.OverflowClipMargin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-clip-margin"},description:`**Syntax**: \`<visual-box> || <length [0,∞]>\`

**Initial value**: \`0px\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **90** |   No    |   No   | **90** | No  |`,declarations:[{name:"overflowClipMargin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/overflow-clip-margin`}},{kind:"property",name:"overflowInline",required:!1,type:{kind:"external",name:"Property.OverflowInline",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-inline"},description:`**Syntax**: \`visible | hidden | clip | scroll | auto\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **69**  |   No   |  No  | No  |`,declarations:[{name:"overflowInline",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/overflow-inline`}},{kind:"property",name:"overflowWrap",required:!1,type:{kind:"external",name:"Property.OverflowWrap",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap"},description:`The \`**overflow-wrap**\` CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.

**Syntax**: \`normal | break-word | anywhere\`

**Initial value**: \`normal\`

|     Chrome      |      Firefox      |     Safari      |       Edge       |          IE           |
| :-------------: | :---------------: | :-------------: | :--------------: | :-------------------: |
|     **23**      |      **49**       |     **6.1**     |      **18**      | **5.5** _(word-wrap)_ |
| 1 _(word-wrap)_ | 3.5 _(word-wrap)_ | 1 _(word-wrap)_ | 12 _(word-wrap)_ |                       |`,declarations:[{name:"overflowWrap",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/overflow-wrap`}},{kind:"property",name:"overflowX",required:!1,type:{kind:"external",name:"Property.OverflowX",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x"},description:`The **\`overflow-x\`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.

**Syntax**: \`visible | hidden | clip | scroll | auto\`

**Initial value**: \`visible\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  | **3.5** | **3**  | **12** | **5** |`,declarations:[{name:"overflowX",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/overflow-x`}},{kind:"property",name:"overflowY",required:!1,type:{kind:"external",name:"Property.OverflowY",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y"},description:`The **\`overflow-y\`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.

**Syntax**: \`visible | hidden | clip | scroll | auto\`

**Initial value**: \`visible\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  | **3.5** | **3**  | **12** | **5** |`,declarations:[{name:"overflowY",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/overflow-y`}},{kind:"property",name:"overscrollBehaviorBlock",required:!1,type:{kind:"external",name:"Property.OverscrollBehaviorBlock",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-block"},description:`The **\`overscroll-behavior-block\`** CSS property sets the browser's behavior when the block direction boundary of a scrolling area is reached.

**Syntax**: \`contain | none | auto\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **77** | **73**  |   No   | **79** | No  |`,declarations:[{name:"overscrollBehaviorBlock",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-block`}},{kind:"property",name:"overscrollBehaviorInline",required:!1,type:{kind:"external",name:"Property.OverscrollBehaviorInline",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-inline"},description:`The **\`overscroll-behavior-inline\`** CSS property sets the browser's behavior when the inline direction boundary of a scrolling area is reached.

**Syntax**: \`contain | none | auto\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **77** | **73**  |   No   | **79** | No  |`,declarations:[{name:"overscrollBehaviorInline",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-inline`}},{kind:"property",name:"overscrollBehaviorX",required:!1,type:{kind:"external",name:"Property.OverscrollBehaviorX",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-x"},description:`The **\`overscroll-behavior-x\`** CSS property sets the browser's behavior when the horizontal boundary of a scrolling area is reached.

**Syntax**: \`contain | none | auto\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **63** | **59**  |   No   | **18** | No  |`,declarations:[{name:"overscrollBehaviorX",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x`}},{kind:"property",name:"overscrollBehaviorY",required:!1,type:{kind:"external",name:"Property.OverscrollBehaviorY",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-y"},description:`The **\`overscroll-behavior-y\`** CSS property sets the browser's behavior when the vertical boundary of a scrolling area is reached.

**Syntax**: \`contain | none | auto\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **63** | **59**  |   No   | **18** | No  |`,declarations:[{name:"overscrollBehaviorY",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y`}},{kind:"property",name:"paddingBlock",required:!1,type:{kind:"external",name:"Property.PaddingBlock",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block"},description:`The **\`padding-block\`** CSS shorthand property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.

**Syntax**: \`<'padding-left'>{1,2}\`

**Initial value**: \`0\`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **87** | **66**  |   No   | n/a  | No  |`,declarations:[{name:"paddingBlock",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/padding-block`}},{kind:"property",name:"paddingBlockEnd",required:!1,type:{kind:"external",name:"Property.PaddingBlockEnd",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-end"},description:`The **\`padding-block-end\`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: \`<'padding-left'>\`

**Initial value**: \`0\`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |`,declarations:[{name:"paddingBlockEnd",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/padding-block-end`}},{kind:"property",name:"paddingBlockStart",required:!1,type:{kind:"external",name:"Property.PaddingBlockStart",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-start"},description:`The **\`padding-block-start\`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: \`<'padding-left'>\`

**Initial value**: \`0\`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |`,declarations:[{name:"paddingBlockStart",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/padding-block-start`}},{kind:"property",name:"paddingBottom",required:!1,type:{kind:"external",name:"Property.PaddingBottom",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom"},description:`The **\`padding-bottom\`** CSS property sets the height of the padding area on the bottom of an element.

**Syntax**: \`<length> | <percentage>\`

**Initial value**: \`0\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"paddingBottom",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/padding-bottom`}},{kind:"property",name:"paddingInline",required:!1,type:{kind:"external",name:"Property.PaddingInline",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline"},description:`The **\`padding-inline\`** CSS shorthand property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.

**Syntax**: \`<'padding-left'>{1,2}\`

**Initial value**: \`0\`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **87** | **66**  |   No   | n/a  | No  |`,declarations:[{name:"paddingInline",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/padding-inline`}},{kind:"property",name:"paddingInlineEnd",required:!1,type:{kind:"external",name:"Property.PaddingInlineEnd",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end"},description:`The **\`padding-inline-end\`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: \`<'padding-left'>\`

**Initial value**: \`0\`

|          Chrome           |        Firefox         |          Safari           |  Edge  | IE  |
| :-----------------------: | :--------------------: | :-----------------------: | :----: | :-: |
|          **69**           |         **41**         |         **12.1**          | **79** | No  |
| 2 _(-webkit-padding-end)_ | 3 _(-moz-padding-end)_ | 3 _(-webkit-padding-end)_ |        |     |`,declarations:[{name:"paddingInlineEnd",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/padding-inline-end`}},{kind:"property",name:"paddingInlineStart",required:!1,type:{kind:"external",name:"Property.PaddingInlineStart",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start"},description:`The **\`padding-inline-start\`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

**Syntax**: \`<'padding-left'>\`

**Initial value**: \`0\`

|           Chrome            |         Firefox          |           Safari            |  Edge  | IE  |
| :-------------------------: | :----------------------: | :-------------------------: | :----: | :-: |
|           **69**            |          **41**          |          **12.1**           | **79** | No  |
| 2 _(-webkit-padding-start)_ | 3 _(-moz-padding-start)_ | 3 _(-webkit-padding-start)_ |        |     |`,declarations:[{name:"paddingInlineStart",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/padding-inline-start`}},{kind:"property",name:"paddingLeft",required:!1,type:{kind:"external",name:"Property.PaddingLeft",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left"},description:`The **\`padding-left\`** CSS property sets the width of the padding area to the left of an element.

**Syntax**: \`<length> | <percentage>\`

**Initial value**: \`0\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"paddingLeft",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/padding-left`}},{kind:"property",name:"paddingRight",required:!1,type:{kind:"external",name:"Property.PaddingRight",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right"},description:`The **\`padding-right\`** CSS property sets the width of the padding area on the right of an element.

**Syntax**: \`<length> | <percentage>\`

**Initial value**: \`0\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"paddingRight",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/padding-right`}},{kind:"property",name:"paddingTop",required:!1,type:{kind:"external",name:"Property.PaddingTop",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top"},description:`The **\`padding-top\`** CSS property sets the height of the padding area on the top of an element.

**Syntax**: \`<length> | <percentage>\`

**Initial value**: \`0\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"paddingTop",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/padding-top`}},{kind:"property",name:"pageBreakAfter",required:!1,type:{kind:"external",name:"Property.PageBreakAfter",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-after"},description:`The **\`page-break-after\`** CSS property adjusts page breaks _after_ the current element.

**Syntax**: \`auto | always | avoid | left | right | recto | verso\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **1**  | **1.2** | **12** | **4** |`,declarations:[{name:"pageBreakAfter",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/page-break-after`}},{kind:"property",name:"pageBreakBefore",required:!1,type:{kind:"external",name:"Property.PageBreakBefore",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-before"},description:`The **\`page-break-before\`** CSS property adjusts page breaks _before_ the current element.

**Syntax**: \`auto | always | avoid | left | right | recto | verso\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  |  **1**  | **1.2** | **12** | **4** |`,declarations:[{name:"pageBreakBefore",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/page-break-before`}},{kind:"property",name:"pageBreakInside",required:!1,type:{kind:"external",name:"Property.PageBreakInside",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-inside"},description:`The **\`page-break-inside\`** CSS property adjusts page breaks _inside_ the current element.

**Syntax**: \`auto | avoid\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  | **19**  | **1.3** | **12** | **8** |`,declarations:[{name:"pageBreakInside",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/page-break-inside`}},{kind:"property",name:"paintOrder",required:!1,type:{kind:"external",name:"Property.PaintOrder",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/paint-order"},description:`The **\`paint-order\`** CSS property lets you control the order in which the fill and stroke (and painting markers) of text content and shapes are drawn.

**Syntax**: \`normal | [ fill || stroke || markers ]\`

**Initial value**: \`normal\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **35** | **60**  | **8**  | **17** | No  |`,declarations:[{name:"paintOrder",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/paint-order`}},{kind:"property",name:"perspective",required:!1,type:{kind:"external",name:"Property.Perspective",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/perspective"},description:`The **\`perspective\`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.

**Syntax**: \`none | <length>\`

**Initial value**: \`none\`

|  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
| :------: | :------: | :-----: | :----: | :----: |
|  **36**  |  **16**  |  **9**  | **12** | **10** |
| 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |`,declarations:[{name:"perspective",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/perspective`}},{kind:"property",name:"perspectiveOrigin",required:!1,type:{kind:"external",name:"Property.PerspectiveOrigin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin"},description:`The **\`perspective-origin\`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the \`perspective\` property.

**Syntax**: \`<position>\`

**Initial value**: \`50% 50%\`

|  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
| :------: | :------: | :-----: | :----: | :----: |
|  **36**  |  **16**  |  **9**  | **12** | **10** |
| 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |`,declarations:[{name:"perspectiveOrigin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/perspective-origin`}},{kind:"property",name:"placeContent",required:!1,type:{kind:"external",name:"Property.PlaceContent",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/place-content"},description:`The \`**place-content**\` CSS shorthand property allows you to align content along both the block and inline directions at once (i.e. the \`align-content\` and \`justify-content\` properties) in a relevant layout system such as Grid or Flexbox.

**Syntax**: \`<'align-content'> <'justify-content'>?\`

**Initial value**: \`normal\`

---

_Supported in Flex Layout_

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **59** | **45**  | **9**  | **79** | No  |

---

_Supported in Grid Layout_

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **59** | **53**  | **11** | **79** | No  |

---`,declarations:[{name:"placeContent",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/place-content`}},{kind:"property",name:"pointerEvents",required:!1,type:{kind:"external",name:"Property.PointerEvents",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events"},description:`The **\`pointer-events\`** CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.

**Syntax**: \`auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  |   IE   |
| :----: | :-----: | :----: | :----: | :----: |
| **1**  | **1.5** | **4**  | **12** | **11** |`,declarations:[{name:"pointerEvents",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/pointer-events`}},{kind:"property",name:"position",required:!1,type:{kind:"external",name:"Property.Position",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/position"},description:"The **`position`** CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.\n\n**Syntax**: `static | relative | absolute | sticky | fixed`\n\n**Initial value**: `static`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",declarations:[{name:"position",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/position`}},{kind:"property",name:"quotes",required:!1,type:{kind:"external",name:"Property.Quotes",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/quotes"},description:"The **`quotes`** CSS property sets how the browser should render quotation marks that are added using the `open-quotes` or `close-quotes` values of the CSS `content` property.\n\n**Syntax**: `none | auto | [ <string> <string> ]+`\n\n**Initial value**: depends on user agent\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **11** | **1.5** | **9**  | **12** | **8** |",declarations:[{name:"quotes",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/quotes`}},{kind:"property",name:"resize",required:!1,type:{kind:"external",name:"Property.Resize",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/resize"},description:`The **\`resize\`** CSS property sets whether an element is resizable, and if so, in which directions.

**Syntax**: \`none | both | horizontal | vertical | block | inline\`

**Initial value**: \`none\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **1**  |  **4**  | **3**  | **79** | No  |`,declarations:[{name:"resize",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/resize`}},{kind:"property",name:"right",required:!1,type:{kind:"external",name:"Property.Right",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/right"},description:`The **\`right\`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.

**Syntax**: \`<length> | <percentage> | auto\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |`,declarations:[{name:"right",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/right`}},{kind:"property",name:"rotate",required:!1,type:{kind:"external",name:"Property.Rotate",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/rotate"},description:"The **`rotate`** CSS property allows you to specify rotation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` property.\n\n**Syntax**: `none | <angle> | [ x | y | z | <number>{3} ] && <angle>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **72**  |   No   |  No  | No  |",declarations:[{name:"rotate",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/rotate`}},{kind:"property",name:"rowGap",required:!1,type:{kind:"external",name:"Property.RowGap",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap"},description:`The **\`row-gap\`** CSS property sets the size of the gap (gutter) between an element's grid rows.

**Syntax**: \`normal | <length-percentage>\`

**Initial value**: \`normal\`

---

_Supported in Flex Layout_

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **84** | **63**  |   No   | **84** | No  |

---

_Supported in Grid Layout_

|       Chrome        |       Firefox       |        Safari         |  Edge  | IE  |
| :-----------------: | :-----------------: | :-------------------: | :----: | :-: |
|       **66**        |       **61**        |       **12.1**        | **16** | No  |
| 57 _(grid-row-gap)_ | 52 _(grid-row-gap)_ | 10.1 _(grid-row-gap)_ |        |     |

---`,declarations:[{name:"rowGap",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/row-gap`}},{kind:"property",name:"rubyAlign",required:!1,type:{kind:"external",name:"Property.RubyAlign",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ruby-align"},description:`The \`**ruby-align**\` CSS property defines the distribution of the different ruby elements over the base.

**Syntax**: \`start | center | space-between | space-around\`

**Initial value**: \`space-around\`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **38**  |   No   |  No  | No  |`,declarations:[{name:"rubyAlign",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/ruby-align`}},{kind:"property",name:"rubyMerge",required:!1,type:{kind:"external",name:"Property.RubyMerge",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ruby-merge"},description:"**Syntax**: `separate | collapse | auto`\n\n**Initial value**: `separate`",declarations:[{name:"rubyMerge",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"rubyPosition",required:!1,type:{kind:"external",name:"Property.RubyPosition",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ruby-position"},description:"The `**ruby-position**` CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (`over`), under it (`under`), or between the characters, on their right side (`inter-character`).\n\n**Syntax**: `[ alternate || [ over | under ] ] | inter-character`\n\n**Initial value**: `alternate`\n\n| Chrome  | Firefox |    Safari     | Edge  | IE  |\n| :-----: | :-----: | :-----------: | :---: | :-: |\n| **84**  | **38**  | **6.1** _-x-_ | 12-79 | No  |\n| 1 _-x-_ |         |               |       |     |",declarations:[{name:"rubyPosition",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/ruby-position`}},{kind:"property",name:"scale",required:!1,type:{kind:"external",name:"Property.Scale",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scale"},description:"The **`scale`** CSS property allows you to specify scale transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.\n\n**Syntax**: `none | <number>{1,3}`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **72**  |   No   |  No  | No  |",declarations:[{name:"scale",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scale`}},{kind:"property",name:"scrollBehavior",required:!1,type:{kind:"external",name:"Property.ScrollBehavior",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior"},description:`The **\`scroll-behavior\`** CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.

**Syntax**: \`auto | smooth\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **61** | **36**  |  n/a   | **79** | No  |`,declarations:[{name:"scrollBehavior",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-behavior`}},{kind:"property",name:"scrollMargin",required:!1,type:{kind:"external",name:"Property.ScrollMargin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin"},description:"The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.\n\n**Syntax**: `<length>{1,4}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |            Safari             |  Edge  | IE  |\n| :----: | :-----: | :---------------------------: | :----: | :-: |\n| **69** | **68**  | **11** _(scroll-snap-margin)_ | **79** | No  |",declarations:[{name:"scrollMargin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-margin`}},{kind:"property",name:"scrollMarginBlock",required:!1,type:{kind:"external",name:"Property.ScrollMarginBlock",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-block"},description:`The \`scroll-margin-block\` shorthand property sets the scroll margins of an element in the block dimension.

**Syntax**: \`<length>{1,2}\`

**Initial value**: \`0\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  |   No   | **79** | No  |`,declarations:[{name:"scrollMarginBlock",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-margin-block`}},{kind:"property",name:"scrollMarginBlockEnd",required:!1,type:{kind:"external",name:"Property.ScrollMarginBlockEnd",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-block-end"},description:`The \`scroll-margin-block-end\` property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: \`<length>\`

**Initial value**: \`0\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  |   No   | **79** | No  |`,declarations:[{name:"scrollMarginBlockEnd",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end`}},{kind:"property",name:"scrollMarginBlockStart",required:!1,type:{kind:"external",name:"Property.ScrollMarginBlockStart",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-block-start"},description:`The \`scroll-margin-block-start\` property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: \`<length>\`

**Initial value**: \`0\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  |   No   | **79** | No  |`,declarations:[{name:"scrollMarginBlockStart",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start`}},{kind:"property",name:"scrollMarginBottom",required:!1,type:{kind:"external",name:"Property.ScrollMarginBottom",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-bottom"},description:`The \`scroll-margin-bottom\` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: \`<length>\`

**Initial value**: \`0\`

| Chrome | Firefox |                Safari                |  Edge  | IE  |
| :----: | :-----: | :----------------------------------: | :----: | :-: |
| **69** | **68**  | **11** _(scroll-snap-margin-bottom)_ | **79** | No  |`,declarations:[{name:"scrollMarginBottom",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom`}},{kind:"property",name:"scrollMarginInline",required:!1,type:{kind:"external",name:"Property.ScrollMarginInline",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-inline"},description:`The \`scroll-margin-inline\` shorthand property sets the scroll margins of an element in the inline dimension.

**Syntax**: \`<length>{1,2}\`

**Initial value**: \`0\`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **68**  |   No   |  No  | No  |`,declarations:[{name:"scrollMarginInline",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline`}},{kind:"property",name:"scrollMarginInlineEnd",required:!1,type:{kind:"external",name:"Property.ScrollMarginInlineEnd",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-inline-end"},description:`The \`scroll-margin-inline-end\` property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: \`<length>\`

**Initial value**: \`0\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  |   No   | **79** | No  |`,declarations:[{name:"scrollMarginInlineEnd",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end`}},{kind:"property",name:"scrollMarginInlineStart",required:!1,type:{kind:"external",name:"Property.ScrollMarginInlineStart",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-inline-start"},description:`The \`scroll-margin-inline-start\` property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: \`<length>\`

**Initial value**: \`0\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  |   No   | **79** | No  |`,declarations:[{name:"scrollMarginInlineStart",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start`}},{kind:"property",name:"scrollMarginLeft",required:!1,type:{kind:"external",name:"Property.ScrollMarginLeft",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-left"},description:`The \`scroll-margin-left\` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: \`<length>\`

**Initial value**: \`0\`

| Chrome | Firefox |               Safari               |  Edge  | IE  |
| :----: | :-----: | :--------------------------------: | :----: | :-: |
| **69** | **68**  | **11** _(scroll-snap-margin-left)_ | **79** | No  |`,declarations:[{name:"scrollMarginLeft",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-margin-left`}},{kind:"property",name:"scrollMarginRight",required:!1,type:{kind:"external",name:"Property.ScrollMarginRight",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-right"},description:`The \`scroll-margin-right\` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: \`<length>\`

**Initial value**: \`0\`

| Chrome | Firefox |               Safari                |  Edge  | IE  |
| :----: | :-----: | :---------------------------------: | :----: | :-: |
| **69** | **68**  | **11** _(scroll-snap-margin-right)_ | **79** | No  |`,declarations:[{name:"scrollMarginRight",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-margin-right`}},{kind:"property",name:"scrollMarginTop",required:!1,type:{kind:"external",name:"Property.ScrollMarginTop",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top"},description:`The \`scroll-margin-top\` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: \`<length>\`

**Initial value**: \`0\`

| Chrome | Firefox |              Safari               |  Edge  | IE  |
| :----: | :-----: | :-------------------------------: | :----: | :-: |
| **69** | **68**  | **11** _(scroll-snap-margin-top)_ | **79** | No  |`,declarations:[{name:"scrollMarginTop",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-margin-top`}},{kind:"property",name:"scrollPadding",required:!1,type:{kind:"external",name:"Property.ScrollPadding",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding"},description:"The **`scroll-padding`** shorthand property sets scroll padding on all sides of an element at once, much like the `padding` property does for padding on an element.\n\n**Syntax**: `[ auto | <length-percentage> ]{1,4}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **69** | **68**  | **11** | **79** | No  |",declarations:[{name:"scrollPadding",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-padding`}},{kind:"property",name:"scrollPaddingBlock",required:!1,type:{kind:"external",name:"Property.ScrollPaddingBlock",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-block"},description:`The \`scroll-padding-block\` shorthand property sets the scroll padding of an element in the block dimension.

**Syntax**: \`[ auto | <length-percentage> ]{1,2}\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  |   No   | **79** | No  |`,declarations:[{name:"scrollPaddingBlock",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-padding-block`}},{kind:"property",name:"scrollPaddingBlockEnd",required:!1,type:{kind:"external",name:"Property.ScrollPaddingBlockEnd",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-block-end"},description:`The \`scroll-padding-block-end\` property defines offsets for the end edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: \`auto | <length-percentage>\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  |   No   | **79** | No  |`,declarations:[{name:"scrollPaddingBlockEnd",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end`}},{kind:"property",name:"scrollPaddingBlockStart",required:!1,type:{kind:"external",name:"Property.ScrollPaddingBlockStart",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-block-start"},description:`The \`scroll-padding-block-start\` property defines offsets for the start edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: \`auto | <length-percentage>\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  |   No   | **79** | No  |`,declarations:[{name:"scrollPaddingBlockStart",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start`}},{kind:"property",name:"scrollPaddingBottom",required:!1,type:{kind:"external",name:"Property.ScrollPaddingBottom",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-bottom"},description:`The \`scroll-padding-bottom\` property defines offsets for the bottom of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: \`auto | <length-percentage>\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **11** | **79** | No  |`,declarations:[{name:"scrollPaddingBottom",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom`}},{kind:"property",name:"scrollPaddingInline",required:!1,type:{kind:"external",name:"Property.ScrollPaddingInline",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-inline"},description:`The \`scroll-padding-inline\` shorthand property sets the scroll padding of an element in the inline dimension.

**Syntax**: \`[ auto | <length-percentage> ]{1,2}\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  |   No   | **79** | No  |`,declarations:[{name:"scrollPaddingInline",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline`}},{kind:"property",name:"scrollPaddingInlineEnd",required:!1,type:{kind:"external",name:"Property.ScrollPaddingInlineEnd",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-inline-end"},description:`The \`scroll-padding-inline-end\` property defines offsets for the end edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: \`auto | <length-percentage>\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  |   No   | **79** | No  |`,declarations:[{name:"scrollPaddingInlineEnd",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end`}},{kind:"property",name:"scrollPaddingInlineStart",required:!1,type:{kind:"external",name:"Property.ScrollPaddingInlineStart",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-inline-start"},description:`The \`scroll-padding-inline-start\` property defines offsets for the start edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: \`auto | <length-percentage>\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  |   No   | **79** | No  |`,declarations:[{name:"scrollPaddingInlineStart",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start`}},{kind:"property",name:"scrollPaddingLeft",required:!1,type:{kind:"external",name:"Property.ScrollPaddingLeft",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-left"},description:`The \`scroll-padding-left\` property defines offsets for the left of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: \`auto | <length-percentage>\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **11** | **79** | No  |`,declarations:[{name:"scrollPaddingLeft",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-padding-left`}},{kind:"property",name:"scrollPaddingRight",required:!1,type:{kind:"external",name:"Property.ScrollPaddingRight",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-right"},description:`The \`scroll-padding-right\` property defines offsets for the right of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: \`auto | <length-percentage>\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **11** | **79** | No  |`,declarations:[{name:"scrollPaddingRight",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-padding-right`}},{kind:"property",name:"scrollPaddingTop",required:!1,type:{kind:"external",name:"Property.ScrollPaddingTop",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-top"},description:`The **\`scroll-padding-top\`** property defines offsets for the top of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.

**Syntax**: \`auto | <length-percentage>\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **11** | **79** | No  |`,declarations:[{name:"scrollPaddingTop",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-padding-top`}},{kind:"property",name:"scrollSnapAlign",required:!1,type:{kind:"external",name:"Property.ScrollSnapAlign",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align"},description:`The \`scroll-snap-align\` property specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.

**Syntax**: \`[ none | start | end | center ]{1,2}\`

**Initial value**: \`none\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **69** | **68**  | **11** | **79** | No  |`,declarations:[{name:"scrollSnapAlign",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-snap-align`}},{kind:"property",name:"scrollSnapMargin",required:!1,type:{kind:"external",name:"Property.ScrollMargin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin"},description:"The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.\n\n**Syntax**: `<length>{1,4}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |            Safari             |  Edge  | IE  |\n| :----: | :-----: | :---------------------------: | :----: | :-: |\n| **69** | **68**  | **11** _(scroll-snap-margin)_ | **79** | No  |",declarations:[{name:"scrollSnapMargin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-margin`}},{kind:"property",name:"scrollSnapMarginBottom",required:!1,type:{kind:"external",name:"Property.ScrollMarginBottom",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-bottom"},description:`The \`scroll-margin-bottom\` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: \`<length>\`

**Initial value**: \`0\`

| Chrome | Firefox |                Safari                |  Edge  | IE  |
| :----: | :-----: | :----------------------------------: | :----: | :-: |
| **69** | **68**  | **11** _(scroll-snap-margin-bottom)_ | **79** | No  |`,declarations:[{name:"scrollSnapMarginBottom",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom`}},{kind:"property",name:"scrollSnapMarginLeft",required:!1,type:{kind:"external",name:"Property.ScrollMarginLeft",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-left"},description:`The \`scroll-margin-left\` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: \`<length>\`

**Initial value**: \`0\`

| Chrome | Firefox |               Safari               |  Edge  | IE  |
| :----: | :-----: | :--------------------------------: | :----: | :-: |
| **69** | **68**  | **11** _(scroll-snap-margin-left)_ | **79** | No  |`,declarations:[{name:"scrollSnapMarginLeft",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-margin-left`}},{kind:"property",name:"scrollSnapMarginRight",required:!1,type:{kind:"external",name:"Property.ScrollMarginRight",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-right"},description:`The \`scroll-margin-right\` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: \`<length>\`

**Initial value**: \`0\`

| Chrome | Firefox |               Safari                |  Edge  | IE  |
| :----: | :-----: | :---------------------------------: | :----: | :-: |
| **69** | **68**  | **11** _(scroll-snap-margin-right)_ | **79** | No  |`,declarations:[{name:"scrollSnapMarginRight",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-margin-right`}},{kind:"property",name:"scrollSnapMarginTop",required:!1,type:{kind:"external",name:"Property.ScrollMarginTop",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top"},description:`The \`scroll-margin-top\` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.

**Syntax**: \`<length>\`

**Initial value**: \`0\`

| Chrome | Firefox |              Safari               |  Edge  | IE  |
| :----: | :-----: | :-------------------------------: | :----: | :-: |
| **69** | **68**  | **11** _(scroll-snap-margin-top)_ | **79** | No  |`,declarations:[{name:"scrollSnapMarginTop",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-margin-top`}},{kind:"property",name:"scrollSnapStop",required:!1,type:{kind:"external",name:"Property.ScrollSnapStop",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-stop"},description:`The **\`scroll-snap-stop\`** CSS property defines whether the scroll container is allowed to "pass over" possible snap positions.

**Syntax**: \`normal | always\`

**Initial value**: \`normal\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **75** |   No    |   No   | **79** | No  |`,declarations:[{name:"scrollSnapStop",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop`}},{kind:"property",name:"scrollSnapType",required:!1,type:{kind:"external",name:"Property.ScrollSnapType",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type"},description:`The **\`scroll-snap-type\`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.

**Syntax**: \`none | [ x | y | block | inline | both ] [ mandatory | proximity ]?\`

**Initial value**: \`none\`

| Chrome | Firefox | Safari  |     Edge     |      IE      |
| :----: | :-----: | :-----: | :----------: | :----------: |
| **69** |  39-68  | **11**  | **12** _-x-_ | **10** _-x-_ |
|        |         | 9 _-x-_ |              |              |`,declarations:[{name:"scrollSnapType",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scroll-snap-type`}},{kind:"property",name:"scrollbarColor",required:!1,type:{kind:"external",name:"Property.ScrollbarColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color"},description:`The **\`scrollbar-color\`** CSS property sets the color of the scrollbar track and thumb.

**Syntax**: \`auto | dark | light | <color>{2}\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **64**  |   No   |  No  | No  |`,declarations:[{name:"scrollbarColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scrollbar-color`}},{kind:"property",name:"scrollbarGutter",required:!1,type:{kind:"external",name:"Property.ScrollbarGutter",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter"},description:`The **\`scrollbar-gutter\`** CSS property allows authors to reserve space for the scrollbar, preventing unwanted layout changes as the content grows while also avoiding unnecessary visuals when scrolling isn't needed.

**Syntax**: \`auto | [ stable | always ] && both? && force?\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|  n/a   |   No    |   No   |  No  | No  |`,declarations:[{name:"scrollbarGutter",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scrollbar-gutter`}},{kind:"property",name:"scrollbarWidth",required:!1,type:{kind:"external",name:"Property.ScrollbarWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width"},description:`The **\`scrollbar-width\`** property allows the author to set the maximum thickness of an element’s scrollbars when they are shown.

**Syntax**: \`auto | thin | none\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
|   No   | **64**  |   No   |  No  | No  |`,declarations:[{name:"scrollbarWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/scrollbar-width`}},{kind:"property",name:"shapeImageThreshold",required:!1,type:{kind:"external",name:"Property.ShapeImageThreshold",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/shape-image-threshold"},description:"The **`shape-image-threshold`** CSS property sets the alpha channel threshold used to extract the shape using an image as the value for `shape-outside`.\n\n**Syntax**: `<alpha-value>`\n\n**Initial value**: `0.0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **37** | **62**  | **10.1** | **79** | No  |",declarations:[{name:"shapeImageThreshold",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/shape-image-threshold`}},{kind:"property",name:"shapeMargin",required:!1,type:{kind:"external",name:"Property.ShapeMargin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/shape-margin"},description:"The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **37** | **62**  | **10.1** | **79** | No  |",declarations:[{name:"shapeMargin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/shape-margin`}},{kind:"property",name:"shapeOutside",required:!1,type:{kind:"external",name:"Property.ShapeOutside",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside"},description:"The **`shape-outside`** CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.\n\n**Syntax**: `none | [ <shape-box> || <basic-shape> ] | <image>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **37** | **62**  | **10.1** | **79** | No  |",declarations:[{name:"shapeOutside",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/shape-outside`}},{kind:"property",name:"tabSize",required:!1,type:{kind:"external",name:"Property.TabSize",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/tab-size"},description:`The **\`tab-size\`** CSS property is used to customize the width of tab characters (U+0009).

**Syntax**: \`<integer> | <length>\`

**Initial value**: \`8\`

| Chrome |   Firefox   | Safari  |  Edge  | IE  |
| :----: | :---------: | :-----: | :----: | :-: |
| **21** | **4** _-x-_ | **6.1** | **79** | No  |`,declarations:[{name:"tabSize",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/tab-size`}},{kind:"property",name:"tableLayout",required:!1,type:{kind:"external",name:"Property.TableLayout",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout"},description:"The **`table-layout`** CSS property sets the algorithm used to lay out `<table>` cells, rows, and columns.\n\n**Syntax**: `auto | fixed`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **14** |  **1**  | **1**  | **12** | **5** |",declarations:[{name:"tableLayout",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/table-layout`}},{kind:"property",name:"textAlign",required:!1,type:{kind:"external",name:"Property.TextAlign",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-align"},description:"The **`text-align`** CSS property sets the horizontal alignment of a block element or table-cell box. This means it works like `vertical-align` but in the horizontal direction.\n\n**Syntax**: `start | end | left | right | center | justify | match-parent`\n\n**Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |",declarations:[{name:"textAlign",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-align`}},{kind:"property",name:"textAlignLast",required:!1,type:{kind:"external",name:"Property.TextAlignLast",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-align-last"},description:`The **\`text-align-last\`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.

**Syntax**: \`auto | start | end | left | right | center | justify\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **47** | **49**  |   No   | **12** | **5.5** |`,declarations:[{name:"textAlignLast",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-align-last`}},{kind:"property",name:"textCombineUpright",required:!1,type:{kind:"external",name:"Property.TextCombineUpright",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-combine-upright"},description:`The **\`text-combine-upright\`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.

**Syntax**: \`none | all | [ digits <integer>? ]\`

**Initial value**: \`none\`

|           Chrome           | Firefox |              Safari              | Edge  |                   IE                   |
| :------------------------: | :-----: | :------------------------------: | :---: | :------------------------------------: |
|           **48**           | **48**  | **5.1** _(-webkit-text-combine)_ | 15-79 | **11** _(-ms-text-combine-horizontal)_ |
| 9 _(-webkit-text-combine)_ |         |                                  |       |                                        |`,declarations:[{name:"textCombineUpright",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-combine-upright`}},{kind:"property",name:"textDecorationColor",required:!1,type:{kind:"external",name:"Property.TextDecorationColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color"},description:`The **\`text-decoration-color\`** CSS property sets the color of decorations added to text by \`text-decoration-line\`.

**Syntax**: \`<color>\`

**Initial value**: \`currentcolor\`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **36**  | **12.1** | **79** | No  |
|        |         | 8 _-x-_  |        |     |`,declarations:[{name:"textDecorationColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-decoration-color`}},{kind:"property",name:"textDecorationLine",required:!1,type:{kind:"external",name:"Property.TextDecorationLine",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line"},description:`The **\`text-decoration-line\`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.

**Syntax**: \`none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error\`

**Initial value**: \`none\`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **36**  | **12.1** | **79** | No  |
|        |         | 8 _-x-_  |        |     |`,declarations:[{name:"textDecorationLine",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-decoration-line`}},{kind:"property",name:"textDecorationSkip",required:!1,type:{kind:"external",name:"Property.TextDecorationSkip",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-skip"},description:`The **\`text-decoration-skip\`** CSS property sets what parts of an element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.

**Syntax**: \`none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]\`

**Initial value**: \`objects\`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| 57-64  |   No    | **12.1** |  No  | No  |
|        |         | 8 _-x-_  |      |     |`,declarations:[{name:"textDecorationSkip",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-decoration-skip`}},{kind:"property",name:"textDecorationSkipInk",required:!1,type:{kind:"external",name:"Property.TextDecorationSkipInk",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-skip-ink"},description:`The **\`text-decoration-skip-ink\`** CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.

**Syntax**: \`auto | all | none\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **64** | **70**  |   No   | **79** | No  |`,declarations:[{name:"textDecorationSkipInk",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink`}},{kind:"property",name:"textDecorationStyle",required:!1,type:{kind:"external",name:"Property.TextDecorationStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style"},description:"The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.\n\n**Syntax**: `solid | double | dotted | dashed | wavy`\n\n**Initial value**: `solid`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **57** | **36**  | **12.1** | **79** | No  |\n|        |         | 8 _-x-_  |        |     |",declarations:[{name:"textDecorationStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-decoration-style`}},{kind:"property",name:"textDecorationThickness",required:!1,type:{kind:"external",name:"Property.TextDecorationThickness",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness"},description:`The **\`text-decoration-thickness\`** CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.

**Syntax**: \`auto | from-font | <length> | <percentage> \`

**Initial value**: \`auto\`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **89** | **70**  | **12.1** | **89** | No  |`,declarations:[{name:"textDecorationThickness",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness`}},{kind:"property",name:"textDecorationWidth",required:!1,type:{kind:"external",name:"Property.TextDecorationThickness",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness"},description:`The **\`text-decoration-thickness\`** CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.

**Syntax**: \`auto | from-font | <length> | <percentage> \`

**Initial value**: \`auto\`

| Chrome | Firefox |  Safari  | Edge  | IE  |
| :----: | :-----: | :------: | :---: | :-: |
| 87-89  | **70**  | **12.1** | 87-89 | No  |`,declarations:[{name:"textDecorationWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness`}},{kind:"property",name:"textEmphasisColor",required:!1,type:{kind:"external",name:"Property.TextEmphasisColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-color"},description:"The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n|    Chrome    | Firefox | Safari  |     Edge     | IE  |\n| :----------: | :-----: | :-----: | :----------: | :-: |\n| **25** _-x-_ | **46**  | **6.1** | **79** _-x-_ | No  |",declarations:[{name:"textEmphasisColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-emphasis-color`}},{kind:"property",name:"textEmphasisPosition",required:!1,type:{kind:"external",name:"Property.TextEmphasisPosition",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-position"},description:`The **\`text-emphasis-position\`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.

**Syntax**: \`[ over | under ] && [ right | left ]\`

**Initial value**: \`over right\`

|    Chrome    | Firefox | Safari  |     Edge     | IE  |
| :----------: | :-----: | :-----: | :----------: | :-: |
| **25** _-x-_ | **46**  | **6.1** | **79** _-x-_ | No  |`,declarations:[{name:"textEmphasisPosition",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-emphasis-position`}},{kind:"property",name:"textEmphasisStyle",required:!1,type:{kind:"external",name:"Property.TextEmphasisStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-style"},description:"The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.\n\n**Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`\n\n**Initial value**: `none`\n\n|    Chrome    | Firefox | Safari  |     Edge     | IE  |\n| :----------: | :-----: | :-----: | :----------: | :-: |\n| **25** _-x-_ | **46**  | **6.1** | **79** _-x-_ | No  |",declarations:[{name:"textEmphasisStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-emphasis-style`}},{kind:"property",name:"textIndent",required:!1,type:{kind:"external",name:"Property.TextIndent",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent"},description:`The **\`text-indent\`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.

**Syntax**: \`<length-percentage> && hanging? && each-line?\`

**Initial value**: \`0\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |`,declarations:[{name:"textIndent",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-indent`}},{kind:"property",name:"textJustify",required:!1,type:{kind:"external",name:"Property.TextJustify",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-justify"},description:"The **`text-justify`** CSS property sets what type of justification should be applied to text when `text-align``: justify;` is set on an element.\n\n**Syntax**: `auto | inter-character | inter-word | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   |\n| :----: | :-----: | :----: | :----: | :----: |\n|  n/a   | **55**  |   No   | **12** | **11** |",declarations:[{name:"textJustify",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-justify`}},{kind:"property",name:"textOrientation",required:!1,type:{kind:"external",name:"Property.TextOrientation",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation"},description:"The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.\n\n**Syntax**: `mixed | upright | sideways`\n\n**Initial value**: `mixed`\n\n|  Chrome  | Firefox |  Safari   |  Edge  | IE  |\n| :------: | :-----: | :-------: | :----: | :-: |\n|  **48**  | **41**  |  **14**   | **79** | No  |\n| 11 _-x-_ |         | 5.1 _-x-_ |        |     |",declarations:[{name:"textOrientation",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-orientation`}},{kind:"property",name:"textOverflow",required:!1,type:{kind:"external",name:"Property.TextOverflow",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow"},description:"The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.\n\n**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`\n\n**Initial value**: `clip`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   |\n| :----: | :-----: | :-----: | :----: | :---: |\n| **1**  |  **7**  | **1.3** | **12** | **6** |",declarations:[{name:"textOverflow",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-overflow`}},{kind:"property",name:"textRendering",required:!1,type:{kind:"external",name:"Property.TextRendering",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering"},description:`The **\`text-rendering\`** CSS property provides information to the rendering engine about what to optimize for when rendering text.

**Syntax**: \`auto | optimizeSpeed | optimizeLegibility | geometricPrecision\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **4**  |  **1**  | **5**  | **79** | No  |`,declarations:[{name:"textRendering",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-rendering`}},{kind:"property",name:"textShadow",required:!1,type:{kind:"external",name:"Property.TextShadow",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow"},description:"The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.\n\n**Syntax**: `none | <shadow-t>#`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari  |  Edge  |   IE   |\n| :----: | :-----: | :-----: | :----: | :----: |\n| **2**  | **3.5** | **1.1** | **12** | **10** |",declarations:[{name:"textShadow",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-shadow`}},{kind:"property",name:"textSizeAdjust",required:!1,type:{kind:"external",name:"Property.TextSizeAdjust",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust"},description:"The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.\n\n**Syntax**: `none | auto | <percentage>`\n\n**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **54** |   No    |   No   | **79** | No  |",declarations:[{name:"textSizeAdjust",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-size-adjust`}},{kind:"property",name:"textTransform",required:!1,type:{kind:"external",name:"Property.TextTransform",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform"},description:`The **\`text-transform\`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

**Syntax**: \`none | capitalize | uppercase | lowercase | full-width | full-size-kana\`

**Initial value**: \`none\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"textTransform",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-transform`}},{kind:"property",name:"textUnderlineOffset",required:!1,type:{kind:"external",name:"Property.TextUnderlineOffset",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset"},description:"The **`text-underline-offset`** CSS property sets the offset distance of an underline text decoration line (applied using `text-decoration`) from its original position.\n\n**Syntax**: `auto | <length> | <percentage> `\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  |\n| :----: | :-----: | :------: | :----: | :-: |\n| **87** | **70**  | **12.1** | **87** | No  |",declarations:[{name:"textUnderlineOffset",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-underline-offset`}},{kind:"property",name:"textUnderlinePosition",required:!1,type:{kind:"external",name:"Property.TextUnderlinePosition",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-position"},description:"The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.\n\n**Syntax**: `auto | from-font | [ under || [ left | right ] ]`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  |  IE   |\n| :----: | :-----: | :------: | :----: | :---: |\n| **33** | **74**  | **12.1** | **12** | **6** |\n|        |         | 9 _-x-_  |        |       |",declarations:[{name:"textUnderlinePosition",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-underline-position`}},{kind:"property",name:"top",required:!1,type:{kind:"external",name:"Property.Top",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/top"},description:`The **\`top\`** CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.

**Syntax**: \`<length> | <percentage> | auto\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **5** |`,declarations:[{name:"top",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/top`}},{kind:"property",name:"touchAction",required:!1,type:{kind:"external",name:"Property.TouchAction",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action"},description:`The **\`touch-action\`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).

**Syntax**: \`auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  |    IE    |
| :----: | :-----: | :----: | :----: | :------: |
| **36** | **52**  | **13** | **12** |  **11**  |
|        |         |        |        | 10 _-x-_ |`,declarations:[{name:"touchAction",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/touch-action`}},{kind:"property",name:"transform",required:!1,type:{kind:"external",name:"Property.Transform",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform"},description:`The **\`transform\`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

**Syntax**: \`none | <transform-list>\`

**Initial value**: \`none\`

| Chrome  | Firefox |  Safari   |  Edge  |   IE    |
| :-----: | :-----: | :-------: | :----: | :-----: |
| **36**  | **16**  |   **9**   | **12** | **10**  |
| 1 _-x-_ |         | 3.1 _-x-_ |        | 9 _-x-_ |`,declarations:[{name:"transform",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/transform`}},{kind:"property",name:"transformBox",required:!1,type:{kind:"external",name:"Property.TransformBox",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform-box"},description:"The **`transform-box`** CSS property defines the layout box to which the `transform` and `transform-origin` properties relate.\n\n**Syntax**: `content-box | border-box | fill-box | stroke-box | view-box`\n\n**Initial value**: `view-box`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **64** | **55**  | **11** | **79** | No  |",declarations:[{name:"transformBox",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/transform-box`}},{kind:"property",name:"transformOrigin",required:!1,type:{kind:"external",name:"Property.TransformOrigin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin"},description:`The **\`transform-origin\`** CSS property sets the origin for an element's transformations.

**Syntax**: \`[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?\`

**Initial value**: \`50% 50% 0\`

| Chrome  |  Firefox  | Safari  |  Edge  |   IE    |
| :-----: | :-------: | :-----: | :----: | :-----: |
| **36**  |  **16**   |  **9**  | **12** | **10**  |
| 1 _-x-_ | 3.5 _-x-_ | 2 _-x-_ |        | 9 _-x-_ |`,declarations:[{name:"transformOrigin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/transform-origin`}},{kind:"property",name:"transformStyle",required:!1,type:{kind:"external",name:"Property.TransformStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style"},description:`The **\`transform-style\`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.

**Syntax**: \`flat | preserve-3d\`

**Initial value**: \`flat\`

|  Chrome  | Firefox  | Safari  |  Edge  | IE  |
| :------: | :------: | :-----: | :----: | :-: |
|  **36**  |  **16**  |  **9**  | **12** | No  |
| 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |     |`,declarations:[{name:"transformStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/transform-style`}},{kind:"property",name:"transitionDelay",required:!1,type:{kind:"external",name:"Property.TransitionDelay",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay"},description:`The **\`transition-delay\`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.

**Syntax**: \`<time>#\`

**Initial value**: \`0s\`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **26**  | **16**  |  **9**  | **12** | **10** |
| 1 _-x-_ | 4 _-x-_ | 4 _-x-_ |        |        |`,declarations:[{name:"transitionDelay",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/transition-delay`}},{kind:"property",name:"transitionDuration",required:!1,type:{kind:"external",name:"Property.TransitionDuration",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration"},description:`The **\`transition-duration\`** CSS property sets the length of time a transition animation should take to complete. By default, the value is \`0s\`, meaning that no animation will occur.

**Syntax**: \`<time>#\`

**Initial value**: \`0s\`

| Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :-----: | :-----: | :-------: | :----: | :----: |
| **26**  | **16**  |   **9**   | **12** | **10** |
| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |`,declarations:[{name:"transitionDuration",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/transition-duration`}},{kind:"property",name:"transitionProperty",required:!1,type:{kind:"external",name:"Property.TransitionProperty",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property"},description:`The **\`transition-property\`** CSS property sets the CSS properties to which a transition effect should be applied.

**Syntax**: \`none | <single-transition-property>#\`

**Initial value**: all

| Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :-----: | :-----: | :-------: | :----: | :----: |
| **26**  | **16**  |   **9**   | **12** | **10** |
| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |`,declarations:[{name:"transitionProperty",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/transition-property`}},{kind:"property",name:"transitionTimingFunction",required:!1,type:{kind:"external",name:"Property.TransitionTimingFunction",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function"},description:`The **\`transition-timing-function\`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

**Syntax**: \`<easing-function>#\`

**Initial value**: \`ease\`

| Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :-----: | :-----: | :-------: | :----: | :----: |
| **26**  | **16**  |   **9**   | **12** | **10** |
| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |`,declarations:[{name:"transitionTimingFunction",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/transition-timing-function`}},{kind:"property",name:"translate",required:!1,type:{kind:"external",name:"Property.Translate",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/translate"},description:"The **`translate`** CSS property allows you to specify translation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.\n\n**Syntax**: `none | <length-percentage> [ <length-percentage> <length>? ]?`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  |\n| :----: | :-----: | :----: | :--: | :-: |\n|   No   | **72**  |   No   |  No  | No  |",declarations:[{name:"translate",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/translate`}},{kind:"property",name:"unicodeBidi",required:!1,type:{kind:"external",name:"Property.UnicodeBidi",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/unicode-bidi"},description:"The **`unicode-bidi`** CSS property, together with the `direction` property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.\n\n**Syntax**: `normal | embed | isolate | bidi-override | isolate-override | plaintext`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari  |  Edge  |   IE    |\n| :----: | :-----: | :-----: | :----: | :-----: |\n| **2**  |  **1**  | **1.3** | **12** | **5.5** |",declarations:[{name:"unicodeBidi",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/unicode-bidi`}},{kind:"property",name:"userSelect",required:!1,type:{kind:"external",name:"Property.UserSelect",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/user-select"},description:`The \`**user-select**\` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.

**Syntax**: \`auto | text | none | contain | all\`

**Initial value**: \`auto\`

| Chrome  | Firefox |   Safari    |     Edge     |      IE      |
| :-----: | :-----: | :---------: | :----------: | :----------: |
| **54**  | **69**  | **3** _-x-_ | **12** _-x-_ | **10** _-x-_ |
| 1 _-x-_ | 1 _-x-_ |             |              |              |`,declarations:[{name:"userSelect",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/user-select`}},{kind:"property",name:"verticalAlign",required:!1,type:{kind:"external",name:"Property.VerticalAlign",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align"},description:`The **\`vertical-align\`** CSS property sets vertical alignment of an inline, inline-block or table-cell box.

**Syntax**: \`baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>\`

**Initial value**: \`baseline\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"verticalAlign",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/vertical-align`}},{kind:"property",name:"visibility",required:!1,type:{kind:"external",name:"Property.Visibility",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/visibility"},description:"The **`visibility`** CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a `<table>`.\n\n**Syntax**: `visible | hidden | collapse`\n\n**Initial value**: `visible`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",declarations:[{name:"visibility",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/visibility`}},{kind:"property",name:"whiteSpace",required:!1,type:{kind:"external",name:"Property.WhiteSpace",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/white-space"},description:`The **\`white-space\`** CSS property sets how white space inside an element is handled.

**Syntax**: \`normal | pre | nowrap | pre-wrap | pre-line | break-spaces\`

**Initial value**: \`normal\`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |`,declarations:[{name:"whiteSpace",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/white-space`}},{kind:"property",name:"widows",required:!1,type:{kind:"external",name:"Property.Widows",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/widows"},description:`The **\`widows\`** CSS property sets the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column.

**Syntax**: \`<integer>\`

**Initial value**: \`2\`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **25** |   No    | **1.3** | **12** | **8** |`,declarations:[{name:"widows",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/widows`}},{kind:"property",name:"width",required:!1,type:{kind:"external",name:"Property.Width",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/width"},description:"The **`width`** CSS property sets an element's width. By default, it sets the width of the content area, but if `box-sizing` is set to `border-box`, it sets the width of the border area.\n\n**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",declarations:[{name:"width",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/width`}},{kind:"property",name:"willChange",required:!1,type:{kind:"external",name:"Property.WillChange",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/will-change"},description:`The **\`will-change\`** CSS property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.

**Syntax**: \`auto | <animateable-feature>#\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari  |  Edge  | IE  |
| :----: | :-----: | :-----: | :----: | :-: |
| **36** | **36**  | **9.1** | **79** | No  |`,declarations:[{name:"willChange",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/will-change`}},{kind:"property",name:"wordBreak",required:!1,type:{kind:"external",name:"Property.WordBreak",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/word-break"},description:`The **\`word-break\`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.

**Syntax**: \`normal | break-all | keep-all | break-word\`

**Initial value**: \`normal\`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  | **15**  | **3**  | **12** | **5.5** |`,declarations:[{name:"wordBreak",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/word-break`}},{kind:"property",name:"wordSpacing",required:!1,type:{kind:"external",name:"Property.WordSpacing",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing"},description:`The **\`word-spacing\`** CSS property sets the length of space between words and between tags.

**Syntax**: \`normal | <length-percentage>\`

**Initial value**: \`normal\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **6** |`,declarations:[{name:"wordSpacing",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/word-spacing`}},{kind:"property",name:"wordWrap",required:!1,type:{kind:"external",name:"Property.WordWrap",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/word-wrap"},description:"The `**overflow-wrap**` CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.\n\n**Syntax**: `normal | break-word`\n\n**Initial value**: `normal`",declarations:[{name:"wordWrap",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"writingMode",required:!1,type:{kind:"external",name:"Property.WritingMode",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode"},description:`The **\`writing-mode\`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (\`html\` element for HTML documents).

**Syntax**: \`horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr\`

**Initial value**: \`horizontal-tb\`

| Chrome  | Firefox |  Safari   |  Edge  |  IE   |
| :-----: | :-----: | :-------: | :----: | :---: |
| **48**  | **41**  | **10.1**  | **12** | **9** |
| 8 _-x-_ |         | 5.1 _-x-_ |        |       |`,declarations:[{name:"writingMode",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/writing-mode`}},{kind:"property",name:"zIndex",required:!1,type:{kind:"external",name:"Property.ZIndex",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/z-index"},description:`The **\`z-index\`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.

**Syntax**: \`auto | <integer>\`

**Initial value**: \`auto\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"zIndex",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/z-index`}},{kind:"property",name:"zoom",required:!1,type:{kind:"external",name:"Property.Zoom",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/zoom"},description:"The non-standard **`zoom`** CSS property can be used to control the magnification level of an element. `transform: scale()` should be used instead of this property, if possible. However, unlike CSS Transforms, `zoom` affects the layout size of the element.\n\n**Syntax**: `normal | reset | <number> | <percentage>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari  |  Edge  |   IE    |\n| :----: | :-----: | :-----: | :----: | :-----: |\n| **1**  |   No    | **3.1** | **12** | **5.5** |",declarations:[{name:"zoom",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/zoom`}},{kind:"property",name:"all",required:!1,type:{kind:"external",name:"Property.All",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/all"},description:"The `**all**` shorthand CSS property resets all of an element's properties except `unicode-bidi`, `direction`, and CSS Custom Properties. It can set properties to their initial or inherited values, or to the values specified in another stylesheet origin.\n\n**Syntax**: `initial | inherit | unset | revert`\n\n**Initial value**: There is no practical initial value for it.\n\n| Chrome | Firefox | Safari  |  Edge  | IE  |\n| :----: | :-----: | :-----: | :----: | :-: |\n| **37** | **27**  | **9.1** | **79** | No  |",declarations:[{name:"all",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/all`}},{kind:"property",name:"animation",required:!1,type:{kind:"external",name:"Property.Animation",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation"},description:"The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.\n\n**Syntax**: `<single-animation>#`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   |\n| :-----: | :-----: | :-----: | :----: | :----: |\n| **43**  | **16**  |  **9**  | **12** | **10** |\n| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |",declarations:[{name:"animation",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/animation`}},{kind:"property",name:"background",required:!1,type:{kind:"external",name:"Property.Background",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/background"},description:`The **\`background\`** shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.

**Syntax**: \`[ <bg-layer> , ]* <final-bg-layer>\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"background",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/background`}},{kind:"property",name:"backgroundPosition",required:!1,type:{kind:"external",name:"Property.BackgroundPosition",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/background-position"},description:"The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.\n\n**Syntax**: `<bg-position>#`\n\n**Initial value**: `0% 0%`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",declarations:[{name:"backgroundPosition",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/background-position`}},{kind:"property",name:"border",required:!1,type:{kind:"external",name:"Property.Border",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border"},description:"The **`border`** shorthand CSS property sets an element's border. It sets the values of `border-width`, `border-style`, and `border-color`.\n\n**Syntax**: `<line-width> || <line-style> || <color>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",declarations:[{name:"border",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border`}},{kind:"property",name:"borderBlock",required:!1,type:{kind:"external",name:"Property.BorderBlock",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-block"},description:`The **\`border-block\`** CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.

**Syntax**: \`<'border-top-width'> || <'border-top-style'> || <color>\`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **87** | **66**  |   No   | n/a  | No  |`,declarations:[{name:"borderBlock",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-block`}},{kind:"property",name:"borderBlockEnd",required:!1,type:{kind:"external",name:"Property.BorderBlockEnd",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end"},description:`The **\`border-block-end\`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.

**Syntax**: \`<'border-top-width'> || <'border-top-style'> || <color>\`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |`,declarations:[{name:"borderBlockEnd",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-block-end`}},{kind:"property",name:"borderBlockStart",required:!1,type:{kind:"external",name:"Property.BorderBlockStart",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start"},description:`The **\`border-block-start\`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.

**Syntax**: \`<'border-top-width'> || <'border-top-style'> || <color>\`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |`,declarations:[{name:"borderBlockStart",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-block-start`}},{kind:"property",name:"borderBottom",required:!1,type:{kind:"external",name:"Property.BorderBottom",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom"},description:"The **`border-bottom`** shorthand CSS property sets an element's bottom border. It sets the values of `border-bottom-width`, `border-bottom-style` and `border-bottom-color`.\n\n**Syntax**: `<line-width> || <line-style> || <color>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **4** |",declarations:[{name:"borderBottom",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-bottom`}},{kind:"property",name:"borderColor",required:!1,type:{kind:"external",name:"Property.BorderColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-color"},description:`The **\`border-color\`** shorthand CSS property sets the color of an element's border.

**Syntax**: \`<color>{1,4}\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"borderColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-color`}},{kind:"property",name:"borderImage",required:!1,type:{kind:"external",name:"Property.BorderImage",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-image"},description:`The **\`border-image\`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: \`<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>\`

| Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
| :-----: | :-------: | :-----: | :----: | :----: |
| **16**  |  **15**   |  **6**  | **12** | **11** |
| 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |`,declarations:[{name:"borderImage",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-image`}},{kind:"property",name:"borderInline",required:!1,type:{kind:"external",name:"Property.BorderInline",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline"},description:`The **\`border-inline\`** CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.

**Syntax**: \`<'border-top-width'> || <'border-top-style'> || <color>\`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **87** | **66**  |   No   | n/a  | No  |`,declarations:[{name:"borderInline",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-inline`}},{kind:"property",name:"borderInlineEnd",required:!1,type:{kind:"external",name:"Property.BorderInlineEnd",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end"},description:`The **\`border-inline-end\`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.

**Syntax**: \`<'border-top-width'> || <'border-top-style'> || <color>\`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |`,declarations:[{name:"borderInlineEnd",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-inline-end`}},{kind:"property",name:"borderInlineStart",required:!1,type:{kind:"external",name:"Property.BorderInlineStart",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start"},description:`The **\`border-inline-start\`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.

**Syntax**: \`<'border-top-width'> || <'border-top-style'> || <color>\`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **69** | **41**  | **12.1** | **79** | No  |`,declarations:[{name:"borderInlineStart",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-inline-start`}},{kind:"property",name:"borderLeft",required:!1,type:{kind:"external",name:"Property.BorderLeft",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-left"},description:`The **\`border-left\`** shorthand CSS property sets all the properties of an element's left border.

**Syntax**: \`<line-width> || <line-style> || <color>\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"borderLeft",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-left`}},{kind:"property",name:"borderRadius",required:!1,type:{kind:"external",name:"Property.BorderRadius",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius"},description:`The **\`border-radius\`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.

**Syntax**: \`<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?\`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **4**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |`,declarations:[{name:"borderRadius",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-radius`}},{kind:"property",name:"borderRight",required:!1,type:{kind:"external",name:"Property.BorderRight",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-right"},description:`The **\`border-right\`** shorthand CSS property sets all the properties of an element's right border.

**Syntax**: \`<line-width> || <line-style> || <color>\`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |`,declarations:[{name:"borderRight",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-right`}},{kind:"property",name:"borderStyle",required:!1,type:{kind:"external",name:"Property.BorderStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-style"},description:`The **\`border-style\`** shorthand CSS property sets the line style for all four sides of an element's border.

**Syntax**: \`<line-style>{1,4}\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"borderStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-style`}},{kind:"property",name:"borderTop",required:!1,type:{kind:"external",name:"Property.BorderTop",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-top"},description:`The **\`border-top\`** shorthand CSS property sets all the properties of an element's top border.

**Syntax**: \`<line-width> || <line-style> || <color>\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"borderTop",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-top`}},{kind:"property",name:"borderWidth",required:!1,type:{kind:"external",name:"Property.BorderWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-width"},description:`The **\`border-width\`** shorthand CSS property sets the width of an element's border.

**Syntax**: \`<line-width>{1,4}\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"borderWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/border-width`}},{kind:"property",name:"columnRule",required:!1,type:{kind:"external",name:"Property.ColumnRule",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule"},description:`The **\`column-rule\`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

**Syntax**: \`<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>\`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |`,declarations:[{name:"columnRule",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/column-rule`}},{kind:"property",name:"columns",required:!1,type:{kind:"external",name:"Property.Columns",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/columns"},description:`The **\`columns\`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

**Syntax**: \`<'column-width'> || <'column-count'>\`

| Chrome | Firefox | Safari  |  Edge  |   IE   |
| :----: | :-----: | :-----: | :----: | :----: |
| **50** | **52**  |  **9**  | **12** | **10** |
|        |         | 3 _-x-_ |        |        |`,declarations:[{name:"columns",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/columns`}},{kind:"property",name:"flex",required:!1,type:{kind:"external",name:"Property.Flex",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex"},description:`The **\`flex\`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

**Syntax**: \`none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]\`

|  Chrome  | Firefox |  Safari   |  Edge  |    IE    |
| :------: | :-----: | :-------: | :----: | :------: |
|  **29**  | **20**  |   **9**   | **12** |  **11**  |
| 21 _-x-_ |         | 6.1 _-x-_ |        | 10 _-x-_ |`,declarations:[{name:"flex",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/flex`}},{kind:"property",name:"flexFlow",required:!1,type:{kind:"external",name:"Property.FlexFlow",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow"},description:`The **\`flex-flow\`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.

**Syntax**: \`<'flex-direction'> || <'flex-wrap'>\`

|  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :------: | :-----: | :-------: | :----: | :----: |
|  **29**  | **28**  |   **9**   | **12** | **11** |
| 21 _-x-_ |         | 6.1 _-x-_ |        |        |`,declarations:[{name:"flexFlow",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/flex-flow`}},{kind:"property",name:"font",required:!1,type:{kind:"external",name:"Property.Font",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font"},description:`The **\`font\`** CSS shorthand property sets all the different properties of an element's font. Alternatively, it sets an element's font to a system font.

**Syntax**: \`[ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |`,declarations:[{name:"font",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/font`}},{kind:"property",name:"gap",required:!1,type:{kind:"external",name:"Property.Gap",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/gap"},description:`The **\`gap\`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for \`row-gap\` and \`column-gap\`.

**Syntax**: \`<'row-gap'> <'column-gap'>?\`

---

_Supported in Flex Layout_

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **84** | **63**  |   No   | **84** | No  |

---

_Supported in Grid Layout_

|     Chrome      |     Firefox     |      Safari       |  Edge  | IE  |
| :-------------: | :-------------: | :---------------: | :----: | :-: |
|     **66**      |     **61**      |      **12**       | **16** | No  |
| 57 _(grid-gap)_ | 52 _(grid-gap)_ | 10.1 _(grid-gap)_ |        |     |

---

_Supported in Multi-column Layout_

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **66** | **61**  |   No   | **16** | No  |

---`,declarations:[{name:"gap",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/gap`}},{kind:"property",name:"grid",required:!1,type:{kind:"external",name:"Property.Grid",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid"},description:`The **\`grid\`** CSS property is a shorthand property that sets all of the explicit and implicit grid properties in a single declaration.

**Syntax**: \`<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>\`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |`,declarations:[{name:"grid",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/grid`}},{kind:"property",name:"gridArea",required:!1,type:{kind:"external",name:"Property.GridArea",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area"},description:`The **\`grid-area\`** CSS shorthand property specifies a grid item’s size and location within a grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.

**Syntax**: \`<grid-line> [ / <grid-line> ]{0,3}\`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |`,declarations:[{name:"gridArea",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/grid-area`}},{kind:"property",name:"gridColumn",required:!1,type:{kind:"external",name:"Property.GridColumn",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column"},description:`The **\`grid-column\`** CSS shorthand property specifies a grid item's size and location within a grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.

**Syntax**: \`<grid-line> [ / <grid-line> ]?\`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |`,declarations:[{name:"gridColumn",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/grid-column`}},{kind:"property",name:"gridRow",required:!1,type:{kind:"external",name:"Property.GridRow",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row"},description:`The **\`grid-row\`** CSS shorthand property specifies a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.

**Syntax**: \`<grid-line> [ / <grid-line> ]?\`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |`,declarations:[{name:"gridRow",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/grid-row`}},{kind:"property",name:"gridTemplate",required:!1,type:{kind:"external",name:"Property.GridTemplate",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template"},description:`The **\`grid-template\`** CSS property is a shorthand property for defining grid columns, rows, and areas.

**Syntax**: \`none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?\`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |`,declarations:[{name:"gridTemplate",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/grid-template`}},{kind:"property",name:"lineClamp",required:!1,type:{kind:"external",name:"Property.LineClamp",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/line-clamp"},description:"**Syntax**: `none | <integer>`\n\n**Initial value**: `none`",declarations:[{name:"lineClamp",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"listStyle",required:!1,type:{kind:"external",name:"Property.ListStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/list-style"},description:`The **\`list-style\`** CSS shorthand property allows you set all the list style properties at once.

**Syntax**: \`<'list-style-type'> || <'list-style-position'> || <'list-style-image'>\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"listStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/list-style`}},{kind:"property",name:"margin",required:!1,type:{kind:"external",name:"Property.Margin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/margin"},description:"The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.\n\n**Syntax**: `[ <length> | <percentage> | auto ]{1,4}`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |",declarations:[{name:"margin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/margin`}},{kind:"property",name:"mask",required:!1,type:{kind:"external",name:"Property.Mask",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mask"},description:`The **\`mask\`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.

**Syntax**: \`<mask-layer>#\`

| Chrome | Firefox | Safari  |  Edge  | IE  |
| :----: | :-----: | :-----: | :----: | :-: |
| **1**  |  **2**  | **3.2** | **12** | No  |`,declarations:[{name:"mask",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/mask`}},{kind:"property",name:"maskBorder",required:!1,type:{kind:"external",name:"Property.MaskBorder",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border"},description:`The **\`mask-border\`** CSS shorthand property lets you create a mask along the edge of an element's border.

**Syntax**: \`<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>\`

|              Chrome              | Firefox |               Safari               |               Edge                | IE  |
| :------------------------------: | :-----: | :--------------------------------: | :-------------------------------: | :-: |
| **1** _(-webkit-mask-box-image)_ |   No    | **3.1** _(-webkit-mask-box-image)_ | **79** _(-webkit-mask-box-image)_ | No  |`,declarations:[{name:"maskBorder",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/mask-border`}},{kind:"property",name:"motion",required:!1,type:{kind:"external",name:"Property.Offset",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/offset"},description:`The **\`offset\`** CSS shorthand property sets all the properties required for animating an element along a defined path.

**Syntax**: \`[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?\`

|    Chrome     | Firefox | Safari |  Edge  | IE  |
| :-----------: | :-----: | :----: | :----: | :-: |
|    **55**     | **72**  |   No   | **79** | No  |
| 46 _(motion)_ |         |        |        |     |`,declarations:[{name:"motion",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/offset`}},{kind:"property",name:"offset",required:!1,type:{kind:"external",name:"Property.Offset",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/offset"},description:`The **\`offset\`** CSS shorthand property sets all the properties required for animating an element along a defined path.

**Syntax**: \`[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?\`

|    Chrome     | Firefox | Safari |  Edge  | IE  |
| :-----------: | :-----: | :----: | :----: | :-: |
|    **55**     | **72**  |   No   | **79** | No  |
| 46 _(motion)_ |         |        |        |     |`,declarations:[{name:"offset",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/offset`}},{kind:"property",name:"outline",required:!1,type:{kind:"external",name:"Property.Outline",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/outline"},description:`The **\`outline\`** CSS shorthand property set all the outline properties in a single declaration.

**Syntax**: \`[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]\`

| Chrome | Firefox | Safari  |  Edge  |  IE   |
| :----: | :-----: | :-----: | :----: | :---: |
| **1**  | **1.5** | **1.2** | **12** | **8** |`,declarations:[{name:"outline",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/outline`}},{kind:"property",name:"overflow",required:!1,type:{kind:"external",name:"Property.Overflow",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/overflow"},description:`The **\`overflow\`** CSS shorthand property sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.

**Syntax**: \`[ visible | hidden | clip | scroll | auto ]{1,2}\`

**Initial value**: \`visible\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"overflow",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/overflow`}},{kind:"property",name:"overscrollBehavior",required:!1,type:{kind:"external",name:"Property.OverscrollBehavior",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior"},description:"The **`overscroll-behavior`** CSS property sets what a browser does when reaching the boundary of a scrolling area. It's a shorthand for `overscroll-behavior-x` and `overscroll-behavior-y`.\n\n**Syntax**: `[ contain | none | auto ]{1,2}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  |\n| :----: | :-----: | :----: | :----: | :-: |\n| **63** | **59**  |   No   | **18** | No  |",declarations:[{name:"overscrollBehavior",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/overscroll-behavior`}},{kind:"property",name:"padding",required:!1,type:{kind:"external",name:"Property.Padding",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/padding"},description:`The **\`padding\`** CSS shorthand property sets the padding area on all four sides of an element at once.

**Syntax**: \`[ <length> | <percentage> ]{1,4}\`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |`,declarations:[{name:"padding",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/padding`}},{kind:"property",name:"placeItems",required:!1,type:{kind:"external",name:"Property.PlaceItems",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/place-items"},description:`The CSS **\`place-items\`** shorthand property allows you to align items along both the block and inline directions at once (i.e. the \`align-items\` and \`justify-items\` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not set, the first value is also used for it.

**Syntax**: \`<'align-items'> <'justify-items'>?\`

---

_Supported in Flex Layout_

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **59** | **45**  | **11** | **79** | No  |

---

_Supported in Grid Layout_

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **59** | **45**  | **11** | **79** | No  |

---`,declarations:[{name:"placeItems",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/place-items`}},{kind:"property",name:"placeSelf",required:!1,type:{kind:"external",name:"Property.PlaceSelf",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/place-self"},description:`The **\`place-self\`** CSS shorthand property allows you to align an individual item in both the block and inline directions at once (i.e. the \`align-self\` and \`justify-self\` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not present, the first value is also used for it.

**Syntax**: \`<'align-self'> <'justify-self'>?\`

---

_Supported in Flex Layout_

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **59** | **45**  | **11** | **79** | No  |

---

_Supported in Grid Layout_

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **59** | **45**  | **11** | **79** | No  |

---`,declarations:[{name:"placeSelf",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/place-self`}},{kind:"property",name:"textDecoration",required:!1,type:{kind:"external",name:"Property.TextDecoration",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration"},description:"The **`text-decoration`** shorthand CSS property sets the appearance of decorative lines on text. It is a shorthand for `text-decoration-line`, `text-decoration-color`, `text-decoration-style`, and the newer `text-decoration-thickness` property.\n\n**Syntax**: `<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'> || <'text-decoration-thickness'>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   |\n| :----: | :-----: | :----: | :----: | :---: |\n| **1**  |  **1**  | **1**  | **12** | **3** |",declarations:[{name:"textDecoration",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-decoration`}},{kind:"property",name:"textEmphasis",required:!1,type:{kind:"external",name:"Property.TextEmphasis",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis"},description:"The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.\n\n**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`\n\n|    Chrome    | Firefox | Safari  |     Edge     | IE  |\n| :----------: | :-----: | :-----: | :----------: | :-: |\n| **25** _-x-_ | **46**  | **6.1** | **79** _-x-_ | No  |",declarations:[{name:"textEmphasis",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/text-emphasis`}},{kind:"property",name:"transition",required:!1,type:{kind:"external",name:"Property.Transition",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition"},description:"The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE   |\n| :-----: | :-----: | :-------: | :----: | :----: |\n| **26**  | **16**  |   **9**   | **12** | **10** |\n| 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |",declarations:[{name:"transition",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{see:`https
://developer.mozilla.org/docs/Web/CSS/transition`}},{kind:"property",name:"MozAnimationDelay",required:!1,type:{kind:"external",name:"Property.AnimationDelay",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay"},description:"The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",declarations:[{name:"MozAnimationDelay",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozAnimationDirection",required:!1,type:{kind:"external",name:"Property.AnimationDirection",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction"},description:"The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.\n\n**Syntax**: `<single-animation-direction>#`\n\n**Initial value**: `normal`",declarations:[{name:"MozAnimationDirection",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozAnimationDuration",required:!1,type:{kind:"external",name:"Property.AnimationDuration",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration"},description:"The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",declarations:[{name:"MozAnimationDuration",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozAnimationFillMode",required:!1,type:{kind:"external",name:"Property.AnimationFillMode",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode"},description:"The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.\n\n**Syntax**: `<single-animation-fill-mode>#`\n\n**Initial value**: `none`",declarations:[{name:"MozAnimationFillMode",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozAnimationIterationCount",required:!1,type:{kind:"external",name:"Property.AnimationIterationCount",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count"},description:"The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.\n\n**Syntax**: `<single-animation-iteration-count>#`\n\n**Initial value**: `1`",declarations:[{name:"MozAnimationIterationCount",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozAnimationName",required:!1,type:{kind:"external",name:"Property.AnimationName",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name"},description:"The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.\n\n**Syntax**: `[ none | <keyframes-name> ]#`\n\n**Initial value**: `none`",declarations:[{name:"MozAnimationName",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozAnimationPlayState",required:!1,type:{kind:"external",name:"Property.AnimationPlayState",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state"},description:"The **`animation-play-state`** CSS property sets whether an animation is running or paused.\n\n**Syntax**: `<single-animation-play-state>#`\n\n**Initial value**: `running`",declarations:[{name:"MozAnimationPlayState",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozAnimationTimingFunction",required:!1,type:{kind:"external",name:"Property.AnimationTimingFunction",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function"},description:"The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`",declarations:[{name:"MozAnimationTimingFunction",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozAppearance",required:!1,type:{kind:"external",name:"Property.MozAppearance",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/moz-appearance"},description:"The `**appearance**` CSS property is used to display an element using platform-native styling, based on the operating system's theme. The **`-moz-appearance`** and **`-webkit-appearance`** properties are non-standard versions of this property, used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing. Note that Firefox and Edge also support **`-webkit-appearance`**, for compatibility reasons.\n\n**Syntax**: `none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized`\n\n**Initial value**: `none` (but this value is overridden in the user agent CSS)",declarations:[{name:"MozAppearance",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozBackfaceVisibility",required:!1,type:{kind:"external",name:"Property.BackfaceVisibility",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility"},description:"The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.\n\n**Syntax**: `visible | hidden`\n\n**Initial value**: `visible`",declarations:[{name:"MozBackfaceVisibility",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozBorderBottomColors",required:!1,type:{kind:"external",name:"Property.MozBorderBottomColors",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/moz-border-bottom-colors"},description:"In Mozilla applications like Firefox, the **`-moz-border-bottom-colors`** CSS property sets a list of colors for the bottom border.\n\n**Syntax**: `<color>+ | none`\n\n**Initial value**: `none`",declarations:[{name:"MozBorderBottomColors",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozBorderEndColor",required:!1,type:{kind:"external",name:"Property.BorderInlineEndColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-color"},description:"The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`",declarations:[{name:"MozBorderEndColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozBorderEndStyle",required:!1,type:{kind:"external",name:"Property.BorderInlineEndStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-style"},description:"The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`",declarations:[{name:"MozBorderEndStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozBorderEndWidth",required:!1,type:{kind:"external",name:"Property.BorderInlineEndWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-width"},description:"The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`",declarations:[{name:"MozBorderEndWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozBorderLeftColors",required:!1,type:{kind:"external",name:"Property.MozBorderLeftColors",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/moz-border-left-colors"},description:"In Mozilla applications like Firefox, the **`-moz-border-left-colors`** CSS property sets a list of colors for the left border.\n\n**Syntax**: `<color>+ | none`\n\n**Initial value**: `none`",declarations:[{name:"MozBorderLeftColors",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozBorderRightColors",required:!1,type:{kind:"external",name:"Property.MozBorderRightColors",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/moz-border-right-colors"},description:"In Mozilla applications like Firefox, the **`-moz-border-right-colors`** CSS property sets a list of colors for the right border.\n\n**Syntax**: `<color>+ | none`\n\n**Initial value**: `none`",declarations:[{name:"MozBorderRightColors",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozBorderStartColor",required:!1,type:{kind:"external",name:"Property.BorderInlineStartColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-color"},description:"The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`",declarations:[{name:"MozBorderStartColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozBorderStartStyle",required:!1,type:{kind:"external",name:"Property.BorderInlineStartStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-style"},description:"The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`",declarations:[{name:"MozBorderStartStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozBorderTopColors",required:!1,type:{kind:"external",name:"Property.MozBorderTopColors",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/moz-border-top-colors"},description:"In Mozilla applications like Firefox, the **`-moz-border-top-colors`** CSS property sets a list of colors for the top border.\n\n**Syntax**: `<color>+ | none`\n\n**Initial value**: `none`",declarations:[{name:"MozBorderTopColors",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozBoxSizing",required:!1,type:{kind:"external",name:"Property.BoxSizing",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"},description:"The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.\n\n**Syntax**: `content-box | border-box`\n\n**Initial value**: `content-box`",declarations:[{name:"MozBoxSizing",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozColumnCount",required:!1,type:{kind:"external",name:"Property.ColumnCount",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-count"},description:"The **`column-count`** CSS property breaks an element's content into the specified number of columns.\n\n**Syntax**: `<integer> | auto`\n\n**Initial value**: `auto`",declarations:[{name:"MozColumnCount",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozColumnFill",required:!1,type:{kind:"external",name:"Property.ColumnFill",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-fill"},description:"The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.\n\n**Syntax**: `auto | balance | balance-all`\n\n**Initial value**: `balance`",declarations:[{name:"MozColumnFill",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozColumnGap",required:!1,type:{kind:"external",name:"Property.ColumnGap",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap"},description:"The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.\n\n**Syntax**: `normal | <length-percentage>`\n\n**Initial value**: `normal`",declarations:[{name:"MozColumnGap",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozColumnRuleColor",required:!1,type:{kind:"external",name:"Property.ColumnRuleColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-color"},description:"The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`",declarations:[{name:"MozColumnRuleColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozColumnRuleStyle",required:!1,type:{kind:"external",name:"Property.ColumnRuleStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-style"},description:"The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-style'>`\n\n**Initial value**: `none`",declarations:[{name:"MozColumnRuleStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozColumnRuleWidth",required:!1,type:{kind:"external",name:"Property.ColumnRuleWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-width"},description:"The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-width'>`\n\n**Initial value**: `medium`",declarations:[{name:"MozColumnRuleWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozColumnWidth",required:!1,type:{kind:"external",name:"Property.ColumnWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-width"},description:"The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.\n\n**Syntax**: `<length> | auto`\n\n**Initial value**: `auto`",declarations:[{name:"MozColumnWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozContextProperties",required:!1,type:{kind:"external",name:"Property.MozContextProperties",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/moz-context-properties"},description:"The `**-moz-context-properties**` property can be used within privileged contexts in Firefox to share the values of specified properties of the element with a child SVG image.\n\n**Syntax**: `none | [ fill | fill-opacity | stroke | stroke-opacity ]#`\n\n**Initial value**: `none`",declarations:[{name:"MozContextProperties",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozFontFeatureSettings",required:!1,type:{kind:"external",name:"Property.FontFeatureSettings",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings"},description:"The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.\n\n**Syntax**: `normal | <feature-tag-value>#`\n\n**Initial value**: `normal`",declarations:[{name:"MozFontFeatureSettings",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozFontLanguageOverride",required:!1,type:{kind:"external",name:"Property.FontLanguageOverride",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-language-override"},description:"The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.\n\n**Syntax**: `normal | <string>`\n\n**Initial value**: `normal`",declarations:[{name:"MozFontLanguageOverride",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozHyphens",required:!1,type:{kind:"external",name:"Property.Hyphens",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens"},description:"The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.\n\n**Syntax**: `none | manual | auto`\n\n**Initial value**: `manual`",declarations:[{name:"MozHyphens",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozImageRegion",required:!1,type:{kind:"external",name:"Property.MozImageRegion",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/moz-image-region"},description:"For certain XUL elements and pseudo-elements that use an image from the `list-style-image` property, this property specifies a region of the image that is used in place of the whole image. This allows elements to use different pieces of the same image to improve performance.\n\n**Syntax**: `<shape> | auto`\n\n**Initial value**: `auto`",declarations:[{name:"MozImageRegion",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozMarginEnd",required:!1,type:{kind:"external",name:"Property.MarginInlineEnd",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end"},description:"The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`",declarations:[{name:"MozMarginEnd",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozMarginStart",required:!1,type:{kind:"external",name:"Property.MarginInlineStart",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start"},description:"The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`",declarations:[{name:"MozMarginStart",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozOrient",required:!1,type:{kind:"external",name:"Property.MozOrient",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/moz-orient"},description:"The **`-moz-orient`** CSS property specifies the orientation of the element to which it's applied.\n\n**Syntax**: `inline | block | horizontal | vertical`\n\n**Initial value**: `inline`",declarations:[{name:"MozOrient",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozOsxFontSmoothing",required:!1,type:{kind:"external",name:"Property.FontSmooth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth"},description:"The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.\n\n**Syntax**: `auto | never | always | <absolute-size> | <length>`\n\n**Initial value**: `auto`",declarations:[{name:"MozOsxFontSmoothing",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozPaddingEnd",required:!1,type:{kind:"external",name:"Property.PaddingInlineEnd",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end"},description:"The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`",declarations:[{name:"MozPaddingEnd",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozPaddingStart",required:!1,type:{kind:"external",name:"Property.PaddingInlineStart",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start"},description:"The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`",declarations:[{name:"MozPaddingStart",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozPerspective",required:!1,type:{kind:"external",name:"Property.Perspective",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/perspective"},description:"The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.\n\n**Syntax**: `none | <length>`\n\n**Initial value**: `none`",declarations:[{name:"MozPerspective",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozPerspectiveOrigin",required:!1,type:{kind:"external",name:"Property.PerspectiveOrigin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin"},description:"The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.\n\n**Syntax**: `<position>`\n\n**Initial value**: `50% 50%`",declarations:[{name:"MozPerspectiveOrigin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozStackSizing",required:!1,type:{kind:"external",name:"Property.MozStackSizing",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/moz-stack-sizing"},description:"**`-moz-stack-sizing`** is an extended CSS property. Normally, a `<xul:stack>` will change its size so that all of its child elements are completely visible. For example, moving a child of the stack far to the right will widen the stack so the child remains visible.\n\n**Syntax**: `ignore | stretch-to-fit`\n\n**Initial value**: `stretch-to-fit`",declarations:[{name:"MozStackSizing",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozTabSize",required:!1,type:{kind:"external",name:"Property.TabSize",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/tab-size"},description:"The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).\n\n**Syntax**: `<integer> | <length>`\n\n**Initial value**: `8`",declarations:[{name:"MozTabSize",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozTextBlink",required:!1,type:{kind:"external",name:"Property.MozTextBlink",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/moz-text-blink"},description:"The **`-moz-text-blink`** non-standard Mozilla CSS extension specifies the blink mode.\n\n**Syntax**: `none | blink`\n\n**Initial value**: `none`",declarations:[{name:"MozTextBlink",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozTextSizeAdjust",required:!1,type:{kind:"external",name:"Property.TextSizeAdjust",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust"},description:"The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.\n\n**Syntax**: `none | auto | <percentage>`\n\n**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).",declarations:[{name:"MozTextSizeAdjust",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozTransformOrigin",required:!1,type:{kind:"external",name:"Property.TransformOrigin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin"},description:"The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`",declarations:[{name:"MozTransformOrigin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozTransformStyle",required:!1,type:{kind:"external",name:"Property.TransformStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style"},description:"The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.\n\n**Syntax**: `flat | preserve-3d`\n\n**Initial value**: `flat`",declarations:[{name:"MozTransformStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozTransitionDelay",required:!1,type:{kind:"external",name:"Property.TransitionDelay",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay"},description:"The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",declarations:[{name:"MozTransitionDelay",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozTransitionDuration",required:!1,type:{kind:"external",name:"Property.TransitionDuration",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration"},description:"The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",declarations:[{name:"MozTransitionDuration",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozTransitionProperty",required:!1,type:{kind:"external",name:"Property.TransitionProperty",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property"},description:"The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all",declarations:[{name:"MozTransitionProperty",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozTransitionTimingFunction",required:!1,type:{kind:"external",name:"Property.TransitionTimingFunction",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function"},description:"The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`",declarations:[{name:"MozTransitionTimingFunction",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozUserFocus",required:!1,type:{kind:"external",name:"Property.MozUserFocus",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/moz-user-focus"},description:"The **`-moz-user-focus`** CSS property is used to indicate whether an element can have the focus.\n\n**Syntax**: `ignore | normal | select-after | select-before | select-menu | select-same | select-all | none`\n\n**Initial value**: `none`",declarations:[{name:"MozUserFocus",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozUserModify",required:!1,type:{kind:"external",name:"Property.MozUserModify",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/moz-user-modify"},description:"The **`user-modify`** property has no effect in Firefox. It was originally planned to determine whether or not the content of an element can be edited by a user.\n\n**Syntax**: `read-only | read-write | write-only`\n\n**Initial value**: `read-only`",declarations:[{name:"MozUserModify",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozUserSelect",required:!1,type:{kind:"external",name:"Property.UserSelect",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/user-select"},description:"The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.\n\n**Syntax**: `auto | text | none | contain | all`\n\n**Initial value**: `auto`",declarations:[{name:"MozUserSelect",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozWindowDragging",required:!1,type:{kind:"external",name:"Property.MozWindowDragging",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/moz-window-dragging"},description:"The **`-moz-window-dragging`** CSS property specifies whether a window is draggable or not. It only works in Chrome code, and only on Mac OS X.\n\n**Syntax**: `drag | no-drag`\n\n**Initial value**: `drag`",declarations:[{name:"MozWindowDragging",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozWindowShadow",required:!1,type:{kind:"external",name:"Property.MozWindowShadow",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/moz-window-shadow"},description:"The **`-moz-window-shadow`** CSS property specifies whether a window will have a shadow. It only works on Mac OS X.\n\n**Syntax**: `default | menu | tooltip | sheet | none`\n\n**Initial value**: `default`",declarations:[{name:"MozWindowShadow",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msAccelerator",required:!1,type:{kind:"external",name:"Property.MsAccelerator",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-accelerator"},description:"The **`-ms-accelerator`** CSS property is a Microsoft extension that sets or retrieves a string indicating whether the object represents a keyboard shortcut.\n\n**Syntax**: `false | true`\n\n**Initial value**: `false`",declarations:[{name:"msAccelerator",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msAlignSelf",required:!1,type:{kind:"external",name:"Property.AlignSelf",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-self"},description:"The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.\n\n**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`\n\n**Initial value**: `auto`",declarations:[{name:"msAlignSelf",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msBlockProgression",required:!1,type:{kind:"external",name:"Property.MsBlockProgression",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-block-progression"},description:"The **`-ms-block-progression`** CSS property is a Microsoft extension that specifies the block progression and layout orientation.\n\n**Syntax**: `tb | rl | bt | lr`\n\n**Initial value**: `tb`",declarations:[{name:"msBlockProgression",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msContentZoomChaining",required:!1,type:{kind:"external",name:"Property.MsContentZoomChaining",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-content-zoom-chaining"},description:"The **`-ms-content-zoom-chaining`** CSS property is a Microsoft extension specifying the zoom behavior that occurs when a user hits the zoom limit during page manipulation.\n\n**Syntax**: `none | chained`\n\n**Initial value**: `none`",declarations:[{name:"msContentZoomChaining",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msContentZoomLimitMax",required:!1,type:{kind:"external",name:"Property.MsContentZoomLimitMax",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-content-zoom-limit-max"},description:"The **`-ms-content-zoom-limit-max`** CSS property is a Microsoft extension that specifies the selected elements' maximum zoom factor.\n\n**Syntax**: `<percentage>`\n\n**Initial value**: `400%`",declarations:[{name:"msContentZoomLimitMax",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msContentZoomLimitMin",required:!1,type:{kind:"external",name:"Property.MsContentZoomLimitMin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-content-zoom-limit-min"},description:"The **`-ms-content-zoom-limit-min`** CSS property is a Microsoft extension that specifies the minimum zoom factor.\n\n**Syntax**: `<percentage>`\n\n**Initial value**: `100%`",declarations:[{name:"msContentZoomLimitMin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msContentZoomSnapPoints",required:!1,type:{kind:"external",name:"Property.MsContentZoomSnapPoints",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-content-zoom-snap-points"},description:"The **`-ms-content-zoom-snap-points`** CSS property is a Microsoft extension that specifies where zoom snap-points are located.\n\n**Syntax**: `snapInterval( <percentage>, <percentage> ) | snapList( <percentage># )`\n\n**Initial value**: `snapInterval(0%, 100%)`",declarations:[{name:"msContentZoomSnapPoints",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msContentZoomSnapType",required:!1,type:{kind:"external",name:"Property.MsContentZoomSnapType",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-content-zoom-snap-type"},description:"The **`-ms-content-zoom-snap-type`** CSS property is a Microsoft extension that specifies how zooming is affected by defined snap-points.\n\n**Syntax**: `none | proximity | mandatory`\n\n**Initial value**: `none`",declarations:[{name:"msContentZoomSnapType",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msContentZooming",required:!1,type:{kind:"external",name:"Property.MsContentZooming",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-content-zooming"},description:"The **`-ms-content-zooming`** CSS property is a Microsoft extension that specifies whether zooming is enabled.\n\n**Syntax**: `none | zoom`\n\n**Initial value**: zoom for the top level element, none for all other elements",declarations:[{name:"msContentZooming",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msFilter",required:!1,type:{kind:"external",name:"Property.MsFilter",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-filter"},description:'The `-ms-filter` CSS property is a Microsoft extension that sets or retrieves the filter or collection of filters applied to an object.\n\n**Syntax**: `<string>`\n\n**Initial value**: "" (the empty string)',declarations:[{name:"msFilter",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msFlexDirection",required:!1,type:{kind:"external",name:"Property.FlexDirection",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction"},description:"The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).\n\n**Syntax**: `row | row-reverse | column | column-reverse`\n\n**Initial value**: `row`",declarations:[{name:"msFlexDirection",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msFlexPositive",required:!1,type:{kind:"external",name:"Property.FlexGrow",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow"},description:"The **`flex-grow`** CSS property sets the flex grow factor of a flex item main size.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",declarations:[{name:"msFlexPositive",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msFlowFrom",required:!1,type:{kind:"external",name:"Property.MsFlowFrom",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-flow-from"},description:"The **`-ms-flow-from`** CSS property is a Microsoft extension that gets or sets a value identifying a region container in the document that accepts the content flow from the data source.\n\n**Syntax**: `[ none | <custom-ident> ]#`\n\n**Initial value**: `none`",declarations:[{name:"msFlowFrom",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msFlowInto",required:!1,type:{kind:"external",name:"Property.MsFlowInto",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-flow-into"},description:"The **`-ms-flow-into`** CSS property is a Microsoft extension that gets or sets a value identifying an iframe container in the document that serves as the region's data source.\n\n**Syntax**: `[ none | <custom-ident> ]#`\n\n**Initial value**: `none`",declarations:[{name:"msFlowInto",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msGridColumns",required:!1,type:{kind:"external",name:"Property.MsGridColumns",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-grid-columns"},description:"The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.\n\n**Syntax**: `none | <track-list> | <auto-track-list>`\n\n**Initial value**: `none`",declarations:[{name:"msGridColumns",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msGridRows",required:!1,type:{kind:"external",name:"Property.MsGridRows",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-grid-rows"},description:"The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.\n\n**Syntax**: `none | <track-list> | <auto-track-list>`\n\n**Initial value**: `none`",declarations:[{name:"msGridRows",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msHighContrastAdjust",required:!1,type:{kind:"external",name:"Property.MsHighContrastAdjust",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-high-contrast-adjust"},description:"The **`-ms-high-contrast-adjust`** CSS property is a Microsoft extension that gets or sets a value indicating whether to override any CSS properties that would have been set in high contrast mode.\n\n**Syntax**: `auto | none`\n\n**Initial value**: `auto`",declarations:[{name:"msHighContrastAdjust",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msHyphenateLimitChars",required:!1,type:{kind:"external",name:"Property.MsHyphenateLimitChars",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-hyphenate-limit-chars"},description:"The **`-ms-hyphenate-limit-chars`** CSS property is a Microsoft extension that specifies one to three values indicating the minimum number of characters in a hyphenated word. If the word does not meet the required minimum number of characters in the word, before the hyphen, or after the hyphen, then the word is not hyphenated.\n\n**Syntax**: `auto | <integer>{1,3}`\n\n**Initial value**: `auto`",declarations:[{name:"msHyphenateLimitChars",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msHyphenateLimitLines",required:!1,type:{kind:"external",name:"Property.MsHyphenateLimitLines",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-hyphenate-limit-lines"},description:"The **`-ms-hyphenate-limit-lines`** CSS property is a Microsoft extension specifying the maximum number of consecutive lines in an element that may be ended with a hyphenated word.\n\n**Syntax**: `no-limit | <integer>`\n\n**Initial value**: `no-limit`",declarations:[{name:"msHyphenateLimitLines",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msHyphenateLimitZone",required:!1,type:{kind:"external",name:"Property.MsHyphenateLimitZone",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-hyphenate-limit-zone"},description:"The `**-ms-hyphenate-limit-zone**` CSS property is a Microsoft extension specifying the width of the hyphenation zone.\n\n**Syntax**: `<percentage> | <length>`\n\n**Initial value**: `0`",declarations:[{name:"msHyphenateLimitZone",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msHyphens",required:!1,type:{kind:"external",name:"Property.Hyphens",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens"},description:"The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.\n\n**Syntax**: `none | manual | auto`\n\n**Initial value**: `manual`",declarations:[{name:"msHyphens",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msImeAlign",required:!1,type:{kind:"external",name:"Property.MsImeAlign",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-ime-align"},description:"The **`-ms-ime-align`** CSS property is a Microsoft extension aligning the Input Method Editor (IME) candidate window box relative to the element on which the IME composition is active. The extension is implemented in Microsoft Edge and Internet Explorer 11.\n\n**Syntax**: `auto | after`\n\n**Initial value**: `auto`",declarations:[{name:"msImeAlign",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msJustifySelf",required:!1,type:{kind:"external",name:"Property.JustifySelf",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self"},description:"The CSS **`justify-self`** property sets the way a box is justified inside its alignment container along the appropriate axis.\n\n**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]`\n\n**Initial value**: `auto`",declarations:[{name:"msJustifySelf",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msLineBreak",required:!1,type:{kind:"external",name:"Property.LineBreak",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/line-break"},description:"The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.\n\n**Syntax**: `auto | loose | normal | strict | anywhere`\n\n**Initial value**: `auto`",declarations:[{name:"msLineBreak",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msOrder",required:!1,type:{kind:"external",name:"Property.Order",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/order"},description:"The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `0`",declarations:[{name:"msOrder",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msOverflowStyle",required:!1,type:{kind:"external",name:"Property.MsOverflowStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-overflow-style"},description:"The **`-ms-overflow-style`** CSS property is a Microsoft extension controlling the behavior of scrollbars when the content of an element overflows.\n\n**Syntax**: `auto | none | scrollbar | -ms-autohiding-scrollbar`\n\n**Initial value**: `auto`",declarations:[{name:"msOverflowStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msOverflowX",required:!1,type:{kind:"external",name:"Property.OverflowX",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x"},description:"The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.\n\n**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `visible`",declarations:[{name:"msOverflowX",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msOverflowY",required:!1,type:{kind:"external",name:"Property.OverflowY",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y"},description:"The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.\n\n**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `visible`",declarations:[{name:"msOverflowY",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msScrollChaining",required:!1,type:{kind:"external",name:"Property.MsScrollChaining",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-scroll-chaining"},description:"The `**-ms-scroll-chaining**` CSS property is a Microsoft extension that specifies the scrolling behavior that occurs when a user hits the scroll limit during a manipulation.\n\n**Syntax**: `chained | none`\n\n**Initial value**: `chained`",declarations:[{name:"msScrollChaining",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msScrollLimitXMax",required:!1,type:{kind:"external",name:"Property.MsScrollLimitXMax",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-scroll-limit-x-max"},description:"The `**-ms-scroll-limit-x-max**` CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollLeft` property.\n\n**Syntax**: `auto | <length>`\n\n**Initial value**: `auto`",declarations:[{name:"msScrollLimitXMax",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msScrollLimitXMin",required:!1,type:{kind:"external",name:"Property.MsScrollLimitXMin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-scroll-limit-x-min"},description:"The **`-ms-scroll-limit-x-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollLeft` property.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`",declarations:[{name:"msScrollLimitXMin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msScrollLimitYMax",required:!1,type:{kind:"external",name:"Property.MsScrollLimitYMax",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-scroll-limit-y-max"},description:"The **`-ms-scroll-limit-y-max`** CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollTop` property.\n\n**Syntax**: `auto | <length>`\n\n**Initial value**: `auto`",declarations:[{name:"msScrollLimitYMax",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msScrollLimitYMin",required:!1,type:{kind:"external",name:"Property.MsScrollLimitYMin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-scroll-limit-y-min"},description:"The **`-ms-scroll-limit-y-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollTop` property.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`",declarations:[{name:"msScrollLimitYMin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msScrollRails",required:!1,type:{kind:"external",name:"Property.MsScrollRails",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-scroll-rails"},description:"The **`-ms-scroll-rails`** CSS property is a Microsoft extension that specifies whether scrolling locks to the primary axis of motion.\n\n**Syntax**: `none | railed`\n\n**Initial value**: `railed`",declarations:[{name:"msScrollRails",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msScrollSnapPointsX",required:!1,type:{kind:"external",name:"Property.MsScrollSnapPointsX",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-scroll-snap-points-x"},description:"The **`-ms-scroll-snap-points-x`** CSS property is a Microsoft extension that specifies where snap-points will be located along the x-axis.\n\n**Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`\n\n**Initial value**: `snapInterval(0px, 100%)`",declarations:[{name:"msScrollSnapPointsX",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msScrollSnapPointsY",required:!1,type:{kind:"external",name:"Property.MsScrollSnapPointsY",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-scroll-snap-points-y"},description:"The **`-ms-scroll-snap-points-y`** CSS property is a Microsoft extension that specifies where snap-points will be located along the y-axis.\n\n**Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`\n\n**Initial value**: `snapInterval(0px, 100%)`",declarations:[{name:"msScrollSnapPointsY",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msScrollSnapType",required:!1,type:{kind:"external",name:"Property.MsScrollSnapType",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-scroll-snap-type"},description:"The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.\n\n**Syntax**: `none | proximity | mandatory`\n\n**Initial value**: `none`",declarations:[{name:"msScrollSnapType",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msScrollTranslation",required:!1,type:{kind:"external",name:"Property.MsScrollTranslation",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-scroll-translation"},description:"The **`-ms-scroll-translation`** CSS property is a Microsoft extension that specifies whether vertical-to-horizontal scroll wheel translation occurs on the specified element.\n\n**Syntax**: `none | vertical-to-horizontal`\n\n**Initial value**: `none`",declarations:[{name:"msScrollTranslation",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msScrollbar3dlightColor",required:!1,type:{kind:"external",name:"Property.MsScrollbar3dlightColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-scrollbar3dlight-color"},description:"The **`-ms-scrollbar-3dlight-color`** CSS property is a Microsoft extension specifying the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: depends on user agent",declarations:[{name:"msScrollbar3dlightColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msScrollbarArrowColor",required:!1,type:{kind:"external",name:"Property.MsScrollbarArrowColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-scrollbar-arrow-color"},description:"The **`-ms-scrollbar-arrow-color`** CSS property is a Microsoft extension that specifies the color of the arrow elements of a scroll arrow.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ButtonText`",declarations:[{name:"msScrollbarArrowColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msScrollbarBaseColor",required:!1,type:{kind:"external",name:"Property.MsScrollbarBaseColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-scrollbar-base-color"},description:"The `**-ms-scrollbar-base-color**` CSS property is a Microsoft extension that specifies the base color of the main elements of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: depends on user agent",declarations:[{name:"msScrollbarBaseColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msScrollbarDarkshadowColor",required:!1,type:{kind:"external",name:"Property.MsScrollbarDarkshadowColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-scrollbar-darkshadow-color"},description:"The **`-ms-scrollbar-darkshadow-color`** CSS property is a Microsoft extension that specifies the color of a scroll bar's gutter.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ThreeDDarkShadow`",declarations:[{name:"msScrollbarDarkshadowColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msScrollbarFaceColor",required:!1,type:{kind:"external",name:"Property.MsScrollbarFaceColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-scrollbar-face-color"},description:"The `**-ms-scrollbar-face-color**` CSS property is a Microsoft extension that specifies the color of the scroll box and scroll arrows of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ThreeDFace`",declarations:[{name:"msScrollbarFaceColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msScrollbarHighlightColor",required:!1,type:{kind:"external",name:"Property.MsScrollbarHighlightColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-scrollbar-highlight-color"},description:"The `**-ms-scrollbar-highlight-color**` CSS property is a Microsoft extension that specifies the color of the slider tray, the top and left edges of the scroll box, and the scroll arrows of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ThreeDHighlight`",declarations:[{name:"msScrollbarHighlightColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msScrollbarShadowColor",required:!1,type:{kind:"external",name:"Property.MsScrollbarShadowColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-scrollbar-shadow-color"},description:"The **`-ms-scrollbar-shadow-color`** CSS property is a Microsoft extension that specifies the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ThreeDDarkShadow`",declarations:[{name:"msScrollbarShadowColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msTextAutospace",required:!1,type:{kind:"external",name:"Property.MsTextAutospace",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-text-autospace"},description:"The **`-ms-text-autospace`** CSS property is a Microsoft extension that specifies the autospacing and narrow space width adjustment of text.\n\n**Syntax**: `none | ideograph-alpha | ideograph-numeric | ideograph-parenthesis | ideograph-space`\n\n**Initial value**: `none`",declarations:[{name:"msTextAutospace",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msTextCombineHorizontal",required:!1,type:{kind:"external",name:"Property.TextCombineUpright",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-combine-upright"},description:"The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.\n\n**Syntax**: `none | all | [ digits <integer>? ]`\n\n**Initial value**: `none`",declarations:[{name:"msTextCombineHorizontal",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msTextOverflow",required:!1,type:{kind:"external",name:"Property.TextOverflow",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow"},description:"The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.\n\n**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`\n\n**Initial value**: `clip`",declarations:[{name:"msTextOverflow",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msTouchAction",required:!1,type:{kind:"external",name:"Property.TouchAction",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action"},description:"The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).\n\n**Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`\n\n**Initial value**: `auto`",declarations:[{name:"msTouchAction",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msTouchSelect",required:!1,type:{kind:"external",name:"Property.MsTouchSelect",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-touch-select"},description:"The **`-ms-touch-select`** CSS property is a Microsoft extension that toggles the gripper visual elements that enable touch text selection.\n\n**Syntax**: `grippers | none`\n\n**Initial value**: `grippers`",declarations:[{name:"msTouchSelect",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msTransform",required:!1,type:{kind:"external",name:"Property.Transform",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform"},description:"The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.\n\n**Syntax**: `none | <transform-list>`\n\n**Initial value**: `none`",declarations:[{name:"msTransform",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msTransformOrigin",required:!1,type:{kind:"external",name:"Property.TransformOrigin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin"},description:"The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`",declarations:[{name:"msTransformOrigin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msTransitionDelay",required:!1,type:{kind:"external",name:"Property.TransitionDelay",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay"},description:"The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",declarations:[{name:"msTransitionDelay",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msTransitionDuration",required:!1,type:{kind:"external",name:"Property.TransitionDuration",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration"},description:"The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",declarations:[{name:"msTransitionDuration",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msTransitionProperty",required:!1,type:{kind:"external",name:"Property.TransitionProperty",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property"},description:"The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all",declarations:[{name:"msTransitionProperty",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msTransitionTimingFunction",required:!1,type:{kind:"external",name:"Property.TransitionTimingFunction",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function"},description:"The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`",declarations:[{name:"msTransitionTimingFunction",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msUserSelect",required:!1,type:{kind:"external",name:"Property.MsUserSelect",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-user-select"},description:"The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.\n\n**Syntax**: `none | element | text`\n\n**Initial value**: `text`",declarations:[{name:"msUserSelect",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msWordBreak",required:!1,type:{kind:"external",name:"Property.WordBreak",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/word-break"},description:"The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.\n\n**Syntax**: `normal | break-all | keep-all | break-word`\n\n**Initial value**: `normal`",declarations:[{name:"msWordBreak",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msWrapFlow",required:!1,type:{kind:"external",name:"Property.MsWrapFlow",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-wrap-flow"},description:"The **`-ms-wrap-flow`** CSS property is a Microsoft extension that specifies how exclusions impact inline content within block-level elements.\n\n**Syntax**: `auto | both | start | end | maximum | clear`\n\n**Initial value**: `auto`",declarations:[{name:"msWrapFlow",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msWrapMargin",required:!1,type:{kind:"external",name:"Property.MsWrapMargin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-wrap-margin"},description:"The **`-ms-wrap-margin`** CSS property is a Microsoft extension that specifies a margin that offsets the inner wrap shape from other shapes.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`",declarations:[{name:"msWrapMargin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msWrapThrough",required:!1,type:{kind:"external",name:"Property.MsWrapThrough",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-wrap-through"},description:"The **`-ms-wrap-through`** CSS property is a Microsoft extension that specifies how content should wrap around an exclusion element.\n\n**Syntax**: `wrap | none`\n\n**Initial value**: `wrap`",declarations:[{name:"msWrapThrough",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msWritingMode",required:!1,type:{kind:"external",name:"Property.WritingMode",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode"},description:"The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).\n\n**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`\n\n**Initial value**: `horizontal-tb`",declarations:[{name:"msWritingMode",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitAlignContent",required:!1,type:{kind:"external",name:"Property.AlignContent",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-content"},description:"The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.\n\n**Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`\n\n**Initial value**: `normal`",declarations:[{name:"WebkitAlignContent",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitAlignItems",required:!1,type:{kind:"external",name:"Property.AlignItems",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-items"},description:"The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.\n\n**Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]`\n\n**Initial value**: `normal`",declarations:[{name:"WebkitAlignItems",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitAlignSelf",required:!1,type:{kind:"external",name:"Property.AlignSelf",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-self"},description:"The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.\n\n**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`\n\n**Initial value**: `auto`",declarations:[{name:"WebkitAlignSelf",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitAnimationDelay",required:!1,type:{kind:"external",name:"Property.AnimationDelay",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay"},description:"The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",declarations:[{name:"WebkitAnimationDelay",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitAnimationDirection",required:!1,type:{kind:"external",name:"Property.AnimationDirection",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction"},description:"The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.\n\n**Syntax**: `<single-animation-direction>#`\n\n**Initial value**: `normal`",declarations:[{name:"WebkitAnimationDirection",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitAnimationDuration",required:!1,type:{kind:"external",name:"Property.AnimationDuration",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration"},description:"The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",declarations:[{name:"WebkitAnimationDuration",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitAnimationFillMode",required:!1,type:{kind:"external",name:"Property.AnimationFillMode",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode"},description:"The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.\n\n**Syntax**: `<single-animation-fill-mode>#`\n\n**Initial value**: `none`",declarations:[{name:"WebkitAnimationFillMode",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitAnimationIterationCount",required:!1,type:{kind:"external",name:"Property.AnimationIterationCount",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count"},description:"The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.\n\n**Syntax**: `<single-animation-iteration-count>#`\n\n**Initial value**: `1`",declarations:[{name:"WebkitAnimationIterationCount",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitAnimationName",required:!1,type:{kind:"external",name:"Property.AnimationName",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name"},description:"The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.\n\n**Syntax**: `[ none | <keyframes-name> ]#`\n\n**Initial value**: `none`",declarations:[{name:"WebkitAnimationName",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitAnimationPlayState",required:!1,type:{kind:"external",name:"Property.AnimationPlayState",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state"},description:"The **`animation-play-state`** CSS property sets whether an animation is running or paused.\n\n**Syntax**: `<single-animation-play-state>#`\n\n**Initial value**: `running`",declarations:[{name:"WebkitAnimationPlayState",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitAnimationTimingFunction",required:!1,type:{kind:"external",name:"Property.AnimationTimingFunction",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function"},description:"The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`",declarations:[{name:"WebkitAnimationTimingFunction",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitAppearance",required:!1,type:{kind:"external",name:"Property.WebkitAppearance",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-appearance"},description:"The `**appearance**` CSS property is used to display an element using platform-native styling, based on the operating system's theme. The **`-moz-appearance`** and **`-webkit-appearance`** properties are non-standard versions of this property, used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing. Note that Firefox and Edge also support **`-webkit-appearance`**, for compatibility reasons.\n\n**Syntax**: `none | button | button-bevel | caret | checkbox | default-button | inner-spin-button | listbox | listitem | media-controls-background | media-controls-fullscreen-background | media-current-time-display | media-enter-fullscreen-button | media-exit-fullscreen-button | media-fullscreen-button | media-mute-button | media-overlay-play-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | media-time-remaining-display | media-toggle-closed-captions-button | media-volume-slider | media-volume-slider-container | media-volume-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | meter | progress-bar | progress-bar-value | push-button | radio | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield | -apple-pay-button`\n\n**Initial value**: `none` (but this value is overridden in the user agent CSS)",declarations:[{name:"WebkitAppearance",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitBackdropFilter",required:!1,type:{kind:"external",name:"Property.BackdropFilter",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter"},description:"The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.\n\n**Syntax**: `none | <filter-function-list>`\n\n**Initial value**: `none`",declarations:[{name:"WebkitBackdropFilter",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitBackfaceVisibility",required:!1,type:{kind:"external",name:"Property.BackfaceVisibility",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility"},description:"The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.\n\n**Syntax**: `visible | hidden`\n\n**Initial value**: `visible`",declarations:[{name:"WebkitBackfaceVisibility",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitBackgroundClip",required:!1,type:{kind:"external",name:"Property.BackgroundClip",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip"},description:"The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `border-box`",declarations:[{name:"WebkitBackgroundClip",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitBackgroundOrigin",required:!1,type:{kind:"external",name:"Property.BackgroundOrigin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin"},description:"The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `padding-box`",declarations:[{name:"WebkitBackgroundOrigin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitBackgroundSize",required:!1,type:{kind:"external",name:"Property.BackgroundSize",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/background-size"},description:"The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`",declarations:[{name:"WebkitBackgroundSize",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitBorderBeforeColor",required:!1,type:{kind:"external",name:"Property.WebkitBorderBeforeColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-border-before-color"},description:"**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`",declarations:[{name:"WebkitBorderBeforeColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitBorderBeforeStyle",required:!1,type:{kind:"external",name:"Property.WebkitBorderBeforeStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-border-before-style"},description:"**Syntax**: `<'border-style'>`\n\n**Initial value**: `none`",declarations:[{name:"WebkitBorderBeforeStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitBorderBeforeWidth",required:!1,type:{kind:"external",name:"Property.WebkitBorderBeforeWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-border-before-width"},description:"**Syntax**: `<'border-width'>`\n\n**Initial value**: `medium`",declarations:[{name:"WebkitBorderBeforeWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitBorderBottomLeftRadius",required:!1,type:{kind:"external",name:"Property.BorderBottomLeftRadius",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius"},description:"The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`",declarations:[{name:"WebkitBorderBottomLeftRadius",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitBorderBottomRightRadius",required:!1,type:{kind:"external",name:"Property.BorderBottomRightRadius",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius"},description:"The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`",declarations:[{name:"WebkitBorderBottomRightRadius",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitBorderImageSlice",required:!1,type:{kind:"external",name:"Property.BorderImageSlice",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice"},description:"The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.\n\n**Syntax**: `<number-percentage>{1,4} && fill?`\n\n**Initial value**: `100%`",declarations:[{name:"WebkitBorderImageSlice",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitBorderTopLeftRadius",required:!1,type:{kind:"external",name:"Property.BorderTopLeftRadius",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius"},description:"The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`",declarations:[{name:"WebkitBorderTopLeftRadius",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitBorderTopRightRadius",required:!1,type:{kind:"external",name:"Property.BorderTopRightRadius",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius"},description:"The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`",declarations:[{name:"WebkitBorderTopRightRadius",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitBoxDecorationBreak",required:!1,type:{kind:"external",name:"Property.BoxDecorationBreak",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break"},description:"The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.\n\n**Syntax**: `slice | clone`\n\n**Initial value**: `slice`",declarations:[{name:"WebkitBoxDecorationBreak",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitBoxReflect",required:!1,type:{kind:"external",name:"Property.WebkitBoxReflect",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-box-reflect"},description:"The **`-webkit-box-reflect`** CSS property lets you reflect the content of an element in one specific direction.\n\n**Syntax**: `[ above | below | right | left ]? <length>? <image>?`\n\n**Initial value**: `none`",declarations:[{name:"WebkitBoxReflect",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitBoxShadow",required:!1,type:{kind:"external",name:"Property.BoxShadow",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow"},description:"The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.\n\n**Syntax**: `none | <shadow>#`\n\n**Initial value**: `none`",declarations:[{name:"WebkitBoxShadow",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitBoxSizing",required:!1,type:{kind:"external",name:"Property.BoxSizing",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"},description:"The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.\n\n**Syntax**: `content-box | border-box`\n\n**Initial value**: `content-box`",declarations:[{name:"WebkitBoxSizing",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitClipPath",required:!1,type:{kind:"external",name:"Property.ClipPath",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path"},description:"The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.\n\n**Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`\n\n**Initial value**: `none`",declarations:[{name:"WebkitClipPath",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitColumnCount",required:!1,type:{kind:"external",name:"Property.ColumnCount",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-count"},description:"The **`column-count`** CSS property breaks an element's content into the specified number of columns.\n\n**Syntax**: `<integer> | auto`\n\n**Initial value**: `auto`",declarations:[{name:"WebkitColumnCount",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitColumnFill",required:!1,type:{kind:"external",name:"Property.ColumnFill",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-fill"},description:"The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.\n\n**Syntax**: `auto | balance | balance-all`\n\n**Initial value**: `balance`",declarations:[{name:"WebkitColumnFill",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitColumnGap",required:!1,type:{kind:"external",name:"Property.ColumnGap",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap"},description:"The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.\n\n**Syntax**: `normal | <length-percentage>`\n\n**Initial value**: `normal`",declarations:[{name:"WebkitColumnGap",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitColumnRuleColor",required:!1,type:{kind:"external",name:"Property.ColumnRuleColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-color"},description:"The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`",declarations:[{name:"WebkitColumnRuleColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitColumnRuleStyle",required:!1,type:{kind:"external",name:"Property.ColumnRuleStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-style"},description:"The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-style'>`\n\n**Initial value**: `none`",declarations:[{name:"WebkitColumnRuleStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitColumnRuleWidth",required:!1,type:{kind:"external",name:"Property.ColumnRuleWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-width"},description:"The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-width'>`\n\n**Initial value**: `medium`",declarations:[{name:"WebkitColumnRuleWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitColumnSpan",required:!1,type:{kind:"external",name:"Property.ColumnSpan",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-span"},description:"The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.\n\n**Syntax**: `none | all`\n\n**Initial value**: `none`",declarations:[{name:"WebkitColumnSpan",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitColumnWidth",required:!1,type:{kind:"external",name:"Property.ColumnWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-width"},description:"The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.\n\n**Syntax**: `<length> | auto`\n\n**Initial value**: `auto`",declarations:[{name:"WebkitColumnWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitFilter",required:!1,type:{kind:"external",name:"Property.Filter",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/filter"},description:"The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.\n\n**Syntax**: `none | <filter-function-list>`\n\n**Initial value**: `none`",declarations:[{name:"WebkitFilter",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitFlexBasis",required:!1,type:{kind:"external",name:"Property.FlexBasis",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis"},description:"The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.\n\n**Syntax**: `content | <'width'>`\n\n**Initial value**: `auto`",declarations:[{name:"WebkitFlexBasis",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitFlexDirection",required:!1,type:{kind:"external",name:"Property.FlexDirection",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction"},description:"The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).\n\n**Syntax**: `row | row-reverse | column | column-reverse`\n\n**Initial value**: `row`",declarations:[{name:"WebkitFlexDirection",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitFlexGrow",required:!1,type:{kind:"external",name:"Property.FlexGrow",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow"},description:"The **`flex-grow`** CSS property sets the flex grow factor of a flex item main size.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",declarations:[{name:"WebkitFlexGrow",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitFlexShrink",required:!1,type:{kind:"external",name:"Property.FlexShrink",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink"},description:"The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.\n\n**Syntax**: `<number>`\n\n**Initial value**: `1`",declarations:[{name:"WebkitFlexShrink",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitFlexWrap",required:!1,type:{kind:"external",name:"Property.FlexWrap",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap"},description:"The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.\n\n**Syntax**: `nowrap | wrap | wrap-reverse`\n\n**Initial value**: `nowrap`",declarations:[{name:"WebkitFlexWrap",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitFontFeatureSettings",required:!1,type:{kind:"external",name:"Property.FontFeatureSettings",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings"},description:"The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.\n\n**Syntax**: `normal | <feature-tag-value>#`\n\n**Initial value**: `normal`",declarations:[{name:"WebkitFontFeatureSettings",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitFontKerning",required:!1,type:{kind:"external",name:"Property.FontKerning",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-kerning"},description:"The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.\n\n**Syntax**: `auto | normal | none`\n\n**Initial value**: `auto`",declarations:[{name:"WebkitFontKerning",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitFontSmoothing",required:!1,type:{kind:"external",name:"Property.FontSmooth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth"},description:"The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.\n\n**Syntax**: `auto | never | always | <absolute-size> | <length>`\n\n**Initial value**: `auto`",declarations:[{name:"WebkitFontSmoothing",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitFontVariantLigatures",required:!1,type:{kind:"external",name:"Property.FontVariantLigatures",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-ligatures"},description:"The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.\n\n**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`\n\n**Initial value**: `normal`",declarations:[{name:"WebkitFontVariantLigatures",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitHyphens",required:!1,type:{kind:"external",name:"Property.Hyphens",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens"},description:"The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.\n\n**Syntax**: `none | manual | auto`\n\n**Initial value**: `manual`",declarations:[{name:"WebkitHyphens",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitJustifyContent",required:!1,type:{kind:"external",name:"Property.JustifyContent",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content"},description:"The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.\n\n**Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`\n\n**Initial value**: `normal`",declarations:[{name:"WebkitJustifyContent",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitLineBreak",required:!1,type:{kind:"external",name:"Property.LineBreak",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/line-break"},description:"The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.\n\n**Syntax**: `auto | loose | normal | strict | anywhere`\n\n**Initial value**: `auto`",declarations:[{name:"WebkitLineBreak",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitLineClamp",required:!1,type:{kind:"external",name:"Property.WebkitLineClamp",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-line-clamp"},description:"The **`-webkit-line-clamp`** CSS property allows limiting of the contents of a block container to the specified number of lines.\n\n**Syntax**: `none | <integer>`\n\n**Initial value**: `none`",declarations:[{name:"WebkitLineClamp",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitMarginEnd",required:!1,type:{kind:"external",name:"Property.MarginInlineEnd",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end"},description:"The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`",declarations:[{name:"WebkitMarginEnd",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitMarginStart",required:!1,type:{kind:"external",name:"Property.MarginInlineStart",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start"},description:"The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`",declarations:[{name:"WebkitMarginStart",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitMaskAttachment",required:!1,type:{kind:"external",name:"Property.WebkitMaskAttachment",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-mask-attachment"},description:"If a `-webkit-mask-image` is specified, `-webkit-mask-attachment` determines whether the mask image's position is fixed within the viewport, or scrolls along with its containing block.\n\n**Syntax**: `<attachment>#`\n\n**Initial value**: `scroll`",declarations:[{name:"WebkitMaskAttachment",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitMaskBoxImageOutset",required:!1,type:{kind:"external",name:"Property.MaskBorderOutset",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border-outset"},description:"The **`mask-border-outset`** CSS property specifies the distance by which an element's mask border is set out from its border box.\n\n**Syntax**: `[ <length> | <number> ]{1,4}`\n\n**Initial value**: `0`",declarations:[{name:"WebkitMaskBoxImageOutset",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitMaskBoxImageRepeat",required:!1,type:{kind:"external",name:"Property.MaskBorderRepeat",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border-repeat"},description:"The **`mask-border-repeat`** CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.\n\n**Syntax**: `[ stretch | repeat | round | space ]{1,2}`\n\n**Initial value**: `stretch`",declarations:[{name:"WebkitMaskBoxImageRepeat",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitMaskBoxImageSlice",required:!1,type:{kind:"external",name:"Property.MaskBorderSlice",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border-slice"},description:"The **`mask-border-slice`** CSS property divides the image set by `mask-border-source` into regions. These regions are used to form the components of an element's mask border.\n\n**Syntax**: `<number-percentage>{1,4} fill?`\n\n**Initial value**: `0`",declarations:[{name:"WebkitMaskBoxImageSlice",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitMaskBoxImageSource",required:!1,type:{kind:"external",name:"Property.MaskBorderSource",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border-source"},description:"The **`mask-border-source`** CSS property sets the source image used to create an element's mask border.\n\n**Syntax**: `none | <image>`\n\n**Initial value**: `none`",declarations:[{name:"WebkitMaskBoxImageSource",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitMaskBoxImageWidth",required:!1,type:{kind:"external",name:"Property.MaskBorderWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border-width"},description:"The **`mask-border-width`** CSS property sets the width of an element's mask border.\n\n**Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`\n\n**Initial value**: `auto`",declarations:[{name:"WebkitMaskBoxImageWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitMaskClip",required:!1,type:{kind:"external",name:"Property.WebkitMaskClip",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-mask-clip"},description:"The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.\n\n**Syntax**: `[ <box> | border | padding | content | text ]#`\n\n**Initial value**: `border`",declarations:[{name:"WebkitMaskClip",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitMaskComposite",required:!1,type:{kind:"external",name:"Property.WebkitMaskComposite",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-mask-composite"},description:"The **`-webkit-mask-composite`** property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the `-webkit-mask-image` property.\n\n**Syntax**: `<composite-style>#`\n\n**Initial value**: `source-over`",declarations:[{name:"WebkitMaskComposite",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitMaskImage",required:!1,type:{kind:"external",name:"Property.WebkitMaskImage",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-mask-image"},description:"The **`mask-image`** CSS property sets the image that is used as mask layer for an element.\n\n**Syntax**: `<mask-reference>#`\n\n**Initial value**: `none`",declarations:[{name:"WebkitMaskImage",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitMaskOrigin",required:!1,type:{kind:"external",name:"Property.WebkitMaskOrigin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-mask-origin"},description:"The **`mask-origin`** CSS property sets the origin of a mask.\n\n**Syntax**: `[ <box> | border | padding | content ]#`\n\n**Initial value**: `padding`",declarations:[{name:"WebkitMaskOrigin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitMaskPosition",required:!1,type:{kind:"external",name:"Property.WebkitMaskPosition",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-mask-position"},description:"The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.\n\n**Syntax**: `<position>#`\n\n**Initial value**: `0% 0%`",declarations:[{name:"WebkitMaskPosition",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitMaskPositionX",required:!1,type:{kind:"external",name:"Property.WebkitMaskPositionX",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-mask-position-x"},description:"The `-webkit-mask-position-x` CSS property sets the initial horizontal position of a mask image.\n\n**Syntax**: `[ <length-percentage> | left | center | right ]#`\n\n**Initial value**: `0%`",declarations:[{name:"WebkitMaskPositionX",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitMaskPositionY",required:!1,type:{kind:"external",name:"Property.WebkitMaskPositionY",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-mask-position-y"},description:"The `-webkit-mask-position-y` CSS property sets the initial vertical position of a mask image.\n\n**Syntax**: `[ <length-percentage> | top | center | bottom ]#`\n\n**Initial value**: `0%`",declarations:[{name:"WebkitMaskPositionY",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitMaskRepeat",required:!1,type:{kind:"external",name:"Property.WebkitMaskRepeat",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-mask-repeat"},description:"The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.\n\n**Syntax**: `<repeat-style>#`\n\n**Initial value**: `repeat`",declarations:[{name:"WebkitMaskRepeat",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitMaskRepeatX",required:!1,type:{kind:"external",name:"Property.WebkitMaskRepeatX",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-mask-repeat-x"},description:"The `-webkit-mask-repeat-x` property specifies whether and how a mask image is repeated (tiled) horizontally.\n\n**Syntax**: `repeat | no-repeat | space | round`\n\n**Initial value**: `repeat`",declarations:[{name:"WebkitMaskRepeatX",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitMaskRepeatY",required:!1,type:{kind:"external",name:"Property.WebkitMaskRepeatY",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-mask-repeat-y"},description:"The `-webkit-mask-repeat-y` property sets whether and how a mask image is repeated (tiled) vertically.\n\n**Syntax**: `repeat | no-repeat | space | round`\n\n**Initial value**: `repeat`",declarations:[{name:"WebkitMaskRepeatY",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitMaskSize",required:!1,type:{kind:"external",name:"Property.WebkitMaskSize",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-mask-size"},description:"The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`",declarations:[{name:"WebkitMaskSize",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitMaxInlineSize",required:!1,type:{kind:"external",name:"Property.MaxInlineSize",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size"},description:"The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the `max-width` or the `max-height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'max-width'>`\n\n**Initial value**: `0`",declarations:[{name:"WebkitMaxInlineSize",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitOrder",required:!1,type:{kind:"external",name:"Property.Order",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/order"},description:"The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `0`",declarations:[{name:"WebkitOrder",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitOverflowScrolling",required:!1,type:{kind:"external",name:"Property.WebkitOverflowScrolling",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-overflow-scrolling"},description:"The `-webkit-overflow-scrolling` CSS property controls whether or not touch devices use momentum-based scrolling for a given element.\n\n**Syntax**: `auto | touch`\n\n**Initial value**: `auto`",declarations:[{name:"WebkitOverflowScrolling",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitPaddingEnd",required:!1,type:{kind:"external",name:"Property.PaddingInlineEnd",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end"},description:"The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`",declarations:[{name:"WebkitPaddingEnd",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitPaddingStart",required:!1,type:{kind:"external",name:"Property.PaddingInlineStart",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start"},description:"The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`",declarations:[{name:"WebkitPaddingStart",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitPerspective",required:!1,type:{kind:"external",name:"Property.Perspective",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/perspective"},description:"The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.\n\n**Syntax**: `none | <length>`\n\n**Initial value**: `none`",declarations:[{name:"WebkitPerspective",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitPerspectiveOrigin",required:!1,type:{kind:"external",name:"Property.PerspectiveOrigin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin"},description:"The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.\n\n**Syntax**: `<position>`\n\n**Initial value**: `50% 50%`",declarations:[{name:"WebkitPerspectiveOrigin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitPrintColorAdjust",required:!1,type:{kind:"external",name:"Property.ColorAdjust",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/color-adjust"},description:"The **`color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.\n\n**Syntax**: `economy | exact`\n\n**Initial value**: `economy`",declarations:[{name:"WebkitPrintColorAdjust",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitRubyPosition",required:!1,type:{kind:"external",name:"Property.RubyPosition",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ruby-position"},description:"The `**ruby-position**` CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (`over`), under it (`under`), or between the characters, on their right side (`inter-character`).\n\n**Syntax**: `[ alternate || [ over | under ] ] | inter-character`\n\n**Initial value**: `alternate`",declarations:[{name:"WebkitRubyPosition",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitScrollSnapType",required:!1,type:{kind:"external",name:"Property.ScrollSnapType",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type"},description:"The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.\n\n**Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`\n\n**Initial value**: `none`",declarations:[{name:"WebkitScrollSnapType",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitShapeMargin",required:!1,type:{kind:"external",name:"Property.ShapeMargin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/shape-margin"},description:"The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`",declarations:[{name:"WebkitShapeMargin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTapHighlightColor",required:!1,type:{kind:"external",name:"Property.WebkitTapHighlightColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-tap-highlight-color"},description:"**`-webkit-tap-highlight-color`** is a non-standard CSS property that sets the color of the highlight that appears over a link while it's being tapped. The highlighting indicates to the user that their tap is being successfully recognized, and indicates which element they're tapping on.\n\n**Syntax**: `<color>`\n\n**Initial value**: `black`",declarations:[{name:"WebkitTapHighlightColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTextCombine",required:!1,type:{kind:"external",name:"Property.TextCombineUpright",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-combine-upright"},description:"The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.\n\n**Syntax**: `none | all | [ digits <integer>? ]`\n\n**Initial value**: `none`",declarations:[{name:"WebkitTextCombine",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTextDecorationColor",required:!1,type:{kind:"external",name:"Property.TextDecorationColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color"},description:"The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`",declarations:[{name:"WebkitTextDecorationColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTextDecorationLine",required:!1,type:{kind:"external",name:"Property.TextDecorationLine",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line"},description:"The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.\n\n**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`\n\n**Initial value**: `none`",declarations:[{name:"WebkitTextDecorationLine",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTextDecorationSkip",required:!1,type:{kind:"external",name:"Property.TextDecorationSkip",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-skip"},description:"The **`text-decoration-skip`** CSS property sets what parts of an element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.\n\n**Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`\n\n**Initial value**: `objects`",declarations:[{name:"WebkitTextDecorationSkip",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTextDecorationStyle",required:!1,type:{kind:"external",name:"Property.TextDecorationStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style"},description:"The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.\n\n**Syntax**: `solid | double | dotted | dashed | wavy`\n\n**Initial value**: `solid`",declarations:[{name:"WebkitTextDecorationStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTextEmphasisColor",required:!1,type:{kind:"external",name:"Property.TextEmphasisColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-color"},description:"The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`",declarations:[{name:"WebkitTextEmphasisColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTextEmphasisPosition",required:!1,type:{kind:"external",name:"Property.TextEmphasisPosition",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-position"},description:"The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.\n\n**Syntax**: `[ over | under ] && [ right | left ]`\n\n**Initial value**: `over right`",declarations:[{name:"WebkitTextEmphasisPosition",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTextEmphasisStyle",required:!1,type:{kind:"external",name:"Property.TextEmphasisStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-style"},description:"The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.\n\n**Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`\n\n**Initial value**: `none`",declarations:[{name:"WebkitTextEmphasisStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTextFillColor",required:!1,type:{kind:"external",name:"Property.WebkitTextFillColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-text-fill-color"},description:"The **`-webkit-text-fill-color`** CSS property specifies the fill color of characters of text. If this property is not set, the value of the `color` property is used.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`",declarations:[{name:"WebkitTextFillColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTextOrientation",required:!1,type:{kind:"external",name:"Property.TextOrientation",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation"},description:"The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.\n\n**Syntax**: `mixed | upright | sideways`\n\n**Initial value**: `mixed`",declarations:[{name:"WebkitTextOrientation",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTextSizeAdjust",required:!1,type:{kind:"external",name:"Property.TextSizeAdjust",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust"},description:"The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.\n\n**Syntax**: `none | auto | <percentage>`\n\n**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).",declarations:[{name:"WebkitTextSizeAdjust",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTextStrokeColor",required:!1,type:{kind:"external",name:"Property.WebkitTextStrokeColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-text-stroke-color"},description:"The **`-webkit-text-stroke-color`** CSS property specifies the stroke color of characters of text. If this property is not set, the value of the `color` property is used.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`",declarations:[{name:"WebkitTextStrokeColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTextStrokeWidth",required:!1,type:{kind:"external",name:"Property.WebkitTextStrokeWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-text-stroke-width"},description:"The **`-webkit-text-stroke-width`** CSS property specifies the width of the stroke for text.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`",declarations:[{name:"WebkitTextStrokeWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTextUnderlinePosition",required:!1,type:{kind:"external",name:"Property.TextUnderlinePosition",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-position"},description:"The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.\n\n**Syntax**: `auto | from-font | [ under || [ left | right ] ]`\n\n**Initial value**: `auto`",declarations:[{name:"WebkitTextUnderlinePosition",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTouchCallout",required:!1,type:{kind:"external",name:"Property.WebkitTouchCallout",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-touch-callout"},description:"The `-webkit-touch-callout` CSS property controls the display of the default callout shown when you touch and hold a touch target.\n\n**Syntax**: `default | none`\n\n**Initial value**: `default`",declarations:[{name:"WebkitTouchCallout",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTransform",required:!1,type:{kind:"external",name:"Property.Transform",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform"},description:"The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.\n\n**Syntax**: `none | <transform-list>`\n\n**Initial value**: `none`",declarations:[{name:"WebkitTransform",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTransformOrigin",required:!1,type:{kind:"external",name:"Property.TransformOrigin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin"},description:"The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`",declarations:[{name:"WebkitTransformOrigin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTransformStyle",required:!1,type:{kind:"external",name:"Property.TransformStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style"},description:"The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.\n\n**Syntax**: `flat | preserve-3d`\n\n**Initial value**: `flat`",declarations:[{name:"WebkitTransformStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTransitionDelay",required:!1,type:{kind:"external",name:"Property.TransitionDelay",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay"},description:"The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",declarations:[{name:"WebkitTransitionDelay",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTransitionDuration",required:!1,type:{kind:"external",name:"Property.TransitionDuration",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration"},description:"The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",declarations:[{name:"WebkitTransitionDuration",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTransitionProperty",required:!1,type:{kind:"external",name:"Property.TransitionProperty",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property"},description:"The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all",declarations:[{name:"WebkitTransitionProperty",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTransitionTimingFunction",required:!1,type:{kind:"external",name:"Property.TransitionTimingFunction",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function"},description:"The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`",declarations:[{name:"WebkitTransitionTimingFunction",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitUserModify",required:!1,type:{kind:"external",name:"Property.WebkitUserModify",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-user-modify"},description:"**Syntax**: `read-only | read-write | read-write-plaintext-only`\n\n**Initial value**: `read-only`",declarations:[{name:"WebkitUserModify",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitUserSelect",required:!1,type:{kind:"external",name:"Property.UserSelect",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/user-select"},description:"The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.\n\n**Syntax**: `auto | text | none | contain | all`\n\n**Initial value**: `auto`",declarations:[{name:"WebkitUserSelect",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitWritingMode",required:!1,type:{kind:"external",name:"Property.WritingMode",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode"},description:"The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).\n\n**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`\n\n**Initial value**: `horizontal-tb`",declarations:[{name:"WebkitWritingMode",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozAnimation",required:!1,type:{kind:"external",name:"Property.Animation",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation"},description:"The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.\n\n**Syntax**: `<single-animation>#`",declarations:[{name:"MozAnimation",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozBorderImage",required:!1,type:{kind:"external",name:"Property.BorderImage",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-image"},description:"The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.\n\n**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`",declarations:[{name:"MozBorderImage",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozColumnRule",required:!1,type:{kind:"external",name:"Property.ColumnRule",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule"},description:"The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`",declarations:[{name:"MozColumnRule",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozColumns",required:!1,type:{kind:"external",name:"Property.Columns",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/columns"},description:"The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.\n\n**Syntax**: `<'column-width'> || <'column-count'>`",declarations:[{name:"MozColumns",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"MozTransition",required:!1,type:{kind:"external",name:"Property.Transition",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition"},description:"The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`",declarations:[{name:"MozTransition",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msContentZoomLimit",required:!1,type:{kind:"external",name:"Property.MsContentZoomLimit",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-content-zoom-limit"},description:"The **`-ms-content-zoom-limit`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-limit-min` and `-ms-content-zoom-limit-max` properties.\n\n**Syntax**: `<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>`",declarations:[{name:"msContentZoomLimit",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msContentZoomSnap",required:!1,type:{kind:"external",name:"Property.MsContentZoomSnap",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-content-zoom-snap"},description:"The **`-ms-content-zoom-snap`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-snap-type` and `-ms-content-zoom-snap-points` properties.\n\n**Syntax**: `<'-ms-content-zoom-snap-type'> || <'-ms-content-zoom-snap-points'>`",declarations:[{name:"msContentZoomSnap",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msFlex",required:!1,type:{kind:"external",name:"Property.Flex",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex"},description:"The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.\n\n**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`",declarations:[{name:"msFlex",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msScrollLimit",required:!1,type:{kind:"external",name:"Property.MsScrollLimit",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-scroll-limit"},description:"The **\\-ms-scroll-limit** CSS property is a Microsoft extension that specifies values for the `-ms-scroll-limit-x-min`, `-ms-scroll-limit-y-min`, `-ms-scroll-limit-x-max`, and `-ms-scroll-limit-y-max` properties.\n\n**Syntax**: `<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>`",declarations:[{name:"msScrollLimit",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msScrollSnapX",required:!1,type:{kind:"external",name:"Property.MsScrollSnapX",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-scroll-snap-x"},description:"The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-x` properties.\n\n**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>`",declarations:[{name:"msScrollSnapX",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msScrollSnapY",required:!1,type:{kind:"external",name:"Property.MsScrollSnapY",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-scroll-snap-y"},description:"The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-y` properties.\n\n**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>`",declarations:[{name:"msScrollSnapY",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"msTransition",required:!1,type:{kind:"external",name:"Property.Transition",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition"},description:"The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`",declarations:[{name:"msTransition",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitAnimation",required:!1,type:{kind:"external",name:"Property.Animation",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation"},description:"The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.\n\n**Syntax**: `<single-animation>#`",declarations:[{name:"WebkitAnimation",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitBorderBefore",required:!1,type:{kind:"external",name:"Property.WebkitBorderBefore",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-border-before"},description:"The **`-webkit-border-before`** CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-width'> || <'border-style'> || <color>`",declarations:[{name:"WebkitBorderBefore",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitBorderImage",required:!1,type:{kind:"external",name:"Property.BorderImage",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-image"},description:"The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.\n\n**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`",declarations:[{name:"WebkitBorderImage",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitBorderRadius",required:!1,type:{kind:"external",name:"Property.BorderRadius",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius"},description:"The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.\n\n**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`",declarations:[{name:"WebkitBorderRadius",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitColumnRule",required:!1,type:{kind:"external",name:"Property.ColumnRule",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule"},description:"The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`",declarations:[{name:"WebkitColumnRule",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitColumns",required:!1,type:{kind:"external",name:"Property.Columns",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/columns"},description:"The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.\n\n**Syntax**: `<'column-width'> || <'column-count'>`",declarations:[{name:"WebkitColumns",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitFlex",required:!1,type:{kind:"external",name:"Property.Flex",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex"},description:"The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.\n\n**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`",declarations:[{name:"WebkitFlex",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitFlexFlow",required:!1,type:{kind:"external",name:"Property.FlexFlow",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow"},description:"The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.\n\n**Syntax**: `<'flex-direction'> || <'flex-wrap'>`",declarations:[{name:"WebkitFlexFlow",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitMask",required:!1,type:{kind:"external",name:"Property.WebkitMask",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-mask"},description:"The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.\n\n**Syntax**: `[ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || [ <box> | border | padding | content | text ] || [ <box> | border | padding | content ] ]#`",declarations:[{name:"WebkitMask",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitMaskBoxImage",required:!1,type:{kind:"external",name:"Property.MaskBorder",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border"},description:"The **`mask-border`** CSS shorthand property lets you create a mask along the edge of an element's border.\n\n**Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`",declarations:[{name:"WebkitMaskBoxImage",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTextEmphasis",required:!1,type:{kind:"external",name:"Property.TextEmphasis",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis"},description:"The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.\n\n**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`",declarations:[{name:"WebkitTextEmphasis",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTextStroke",required:!1,type:{kind:"external",name:"Property.WebkitTextStroke",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/webkit-text-stroke"},description:"The **`-webkit-text-stroke`** CSS property specifies the width and color of strokes for text characters. This is a shorthand property for the longhand properties `-webkit-text-stroke-width` and `-webkit-text-stroke-color`.\n\n**Syntax**: `<length> || <color>`",declarations:[{name:"WebkitTextStroke",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"WebkitTransition",required:!1,type:{kind:"external",name:"Property.Transition",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition"},description:"The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`",declarations:[{name:"WebkitTransition",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"azimuth",required:!1,type:{kind:"external",name:"Property.Azimuth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/azimuth"},description:"In combination with `elevation`, the **`azimuth`** CSS property enables different audio sources to be positioned spatially for aural presentation. This is important in that it provides a natural way to tell several voices apart, as each can be positioned to originate at a different location on the sound stage. Stereo output produce a lateral sound stage, while binaural headphones and multi-speaker setups allow for a fully three-dimensional stage.\n\n**Syntax**: `<angle> | [ [ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards`\n\n**Initial value**: `center`",declarations:[{name:"azimuth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"boxAlign",required:!1,type:{kind:"external",name:"Property.BoxAlign",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-align"},description:"The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | baseline | stretch`\n\n**Initial value**: `stretch`",declarations:[{name:"boxAlign",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"boxDirection",required:!1,type:{kind:"external",name:"Property.BoxDirection",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-direction"},description:"The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).\n\n**Syntax**: `normal | reverse | inherit`\n\n**Initial value**: `normal`",declarations:[{name:"boxDirection",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"boxFlex",required:!1,type:{kind:"external",name:"Property.BoxFlex",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-flex"},description:"The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",declarations:[{name:"boxFlex",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"boxFlexGroup",required:!1,type:{kind:"external",name:"Property.BoxFlexGroup",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-flex-group"},description:"The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",declarations:[{name:"boxFlexGroup",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"boxLines",required:!1,type:{kind:"external",name:"Property.BoxLines",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-lines"},description:"The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).\n\n**Syntax**: `single | multiple`\n\n**Initial value**: `single`",declarations:[{name:"boxLines",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"boxOrdinalGroup",required:!1,type:{kind:"external",name:"Property.BoxOrdinalGroup",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-ordinal-group"},description:"The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",declarations:[{name:"boxOrdinalGroup",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"boxOrient",required:!1,type:{kind:"external",name:"Property.BoxOrient",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-orient"},description:"This is a property of the original CSS Flexible Box Layout Module draft, and has been replaced by a newer standard. See flexbox for information about the current standard.\n\n**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`\n\n**Initial value**: `inline-axis` (`horizontal` in XUL)",declarations:[{name:"boxOrient",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"boxPack",required:!1,type:{kind:"external",name:"Property.BoxPack",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-pack"},description:"The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | justify`\n\n**Initial value**: `start`",declarations:[{name:"boxPack",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"clip",required:!1,type:{kind:"external",name:"Property.Clip",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/clip"},description:"The **`clip`** CSS property defines a visible portion of an element. The `clip` property applies only to absolutely positioned elements — that is, elements with `position:absolute` or `position:fixed`.\n\n**Syntax**: `<shape> | auto`\n\n**Initial value**: `auto`",declarations:[{name:"clip",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"fontVariantAlternates",required:!1,type:{kind:"external",name:"Property.FontVariantAlternates",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates"},description:"The **`font-variant-alternates`** CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in `@font-feature-values`.\n\n**Syntax**: `normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]`\n\n**Initial value**: `normal`",declarations:[{name:"fontVariantAlternates",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"gridColumnGap",required:!1,type:{kind:"external",name:"Property.GridColumnGap",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap"},description:"The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`",declarations:[{name:"gridColumnGap",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"gridGap",required:!1,type:{kind:"external",name:"Property.GridGap",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap"},description:"The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.\n\n**Syntax**: `<'grid-row-gap'> <'grid-column-gap'>?`",declarations:[{name:"gridGap",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"gridRowGap",required:!1,type:{kind:"external",name:"Property.GridRowGap",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap"},description:"The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`",declarations:[{name:"gridRowGap",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"imeMode",required:!1,type:{kind:"external",name:"Property.ImeMode",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ime-mode"},description:"The **`ime-mode`** CSS property controls the state of the input method editor (IME) for text fields. This property is obsolete.\n\n**Syntax**: `auto | normal | active | inactive | disabled`\n\n**Initial value**: `auto`",declarations:[{name:"imeMode",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"offsetBlock",required:!1,type:{kind:"external",name:"Property.InsetBlock",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block"},description:"The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>{1,2}`\n\n**Initial value**: `auto`",declarations:[{name:"offsetBlock",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"offsetBlockEnd",required:!1,type:{kind:"external",name:"Property.InsetBlockEnd",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block-end"},description:"The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`",declarations:[{name:"offsetBlockEnd",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"offsetBlockStart",required:!1,type:{kind:"external",name:"Property.InsetBlockStart",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block-start"},description:"The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`",declarations:[{name:"offsetBlockStart",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"offsetInline",required:!1,type:{kind:"external",name:"Property.InsetInline",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline"},description:"The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>{1,2}`\n\n**Initial value**: `auto`",declarations:[{name:"offsetInline",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"offsetInlineEnd",required:!1,type:{kind:"external",name:"Property.InsetInlineEnd",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-end"},description:"The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`",declarations:[{name:"offsetInlineEnd",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"offsetInlineStart",required:!1,type:{kind:"external",name:"Property.InsetInlineStart",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-start"},description:"The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`",declarations:[{name:"offsetInlineStart",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"scrollSnapCoordinate",required:!1,type:{kind:"external",name:"Property.ScrollSnapCoordinate",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-coordinate"},description:"The **`scroll-snap-coordinate`** CSS property defines the x and y coordinate positions within an element that will align with its nearest ancestor scroll container's `scroll-snap-destination` for each respective axis.\n\n**Syntax**: `none | <position>#`\n\n**Initial value**: `none`",declarations:[{name:"scrollSnapCoordinate",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"scrollSnapDestination",required:!1,type:{kind:"external",name:"Property.ScrollSnapDestination",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-destination"},description:"The **`scroll-snap-destination`** CSS property defines the position in x and y coordinates within the scroll container's visual viewport which element snap points align with.\n\n**Syntax**: `<position>`\n\n**Initial value**: `0px 0px`",declarations:[{name:"scrollSnapDestination",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"scrollSnapPointsX",required:!1,type:{kind:"external",name:"Property.ScrollSnapPointsX",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-points-x"},description:"The **`scroll-snap-points-x`** CSS property defines the horizontal positioning of snap points within the content of the scroll container they are applied to.\n\n**Syntax**: `none | repeat( <length-percentage> )`\n\n**Initial value**: `none`",declarations:[{name:"scrollSnapPointsX",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"scrollSnapPointsY",required:!1,type:{kind:"external",name:"Property.ScrollSnapPointsY",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-points-y"},description:"The **`scroll-snap-points-y`** CSS property defines the vertical positioning of snap points within the content of the scroll container they are applied to.\n\n**Syntax**: `none | repeat( <length-percentage> )`\n\n**Initial value**: `none`",declarations:[{name:"scrollSnapPointsY",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"scrollSnapTypeX",required:!1,type:{kind:"external",name:"Property.ScrollSnapTypeX",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type-x"},description:"The **`scroll-snap-type-x`** CSS property defines how strictly snap points are enforced on the horizontal axis of the scroll container in case there is one.\n\n**Syntax**: `none | mandatory | proximity`\n\n**Initial value**: `none`",declarations:[{name:"scrollSnapTypeX",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"scrollSnapTypeY",required:!1,type:{kind:"external",name:"Property.ScrollSnapTypeY",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type-y"},description:"The **`scroll-snap-type-y`** CSS property defines how strictly snap points are enforced on the vertical axis of the scroll container in case there is one.\n\n**Syntax**: `none | mandatory | proximity`\n\n**Initial value**: `none`",declarations:[{name:"scrollSnapTypeY",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"scrollbarTrackColor",required:!1,type:{kind:"external",name:"Property.MsScrollbarTrackColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-scrollbar-track-color"},description:"The **`-ms-scrollbar-track-color`** CSS property is a Microsoft extension that specifies the color of the track element of a scrollbar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `Scrollbar`",declarations:[{name:"scrollbarTrackColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"KhtmlBoxAlign",required:!1,type:{kind:"external",name:"Property.BoxAlign",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-align"},description:"The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | baseline | stretch`\n\n**Initial value**: `stretch`",declarations:[{name:"KhtmlBoxAlign",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"KhtmlBoxDirection",required:!1,type:{kind:"external",name:"Property.BoxDirection",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-direction"},description:"The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).\n\n**Syntax**: `normal | reverse | inherit`\n\n**Initial value**: `normal`",declarations:[{name:"KhtmlBoxDirection",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"KhtmlBoxFlex",required:!1,type:{kind:"external",name:"Property.BoxFlex",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-flex"},description:"The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",declarations:[{name:"KhtmlBoxFlex",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"KhtmlBoxFlexGroup",required:!1,type:{kind:"external",name:"Property.BoxFlexGroup",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-flex-group"},description:"The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",declarations:[{name:"KhtmlBoxFlexGroup",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"KhtmlBoxLines",required:!1,type:{kind:"external",name:"Property.BoxLines",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-lines"},description:"The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).\n\n**Syntax**: `single | multiple`\n\n**Initial value**: `single`",declarations:[{name:"KhtmlBoxLines",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"KhtmlBoxOrdinalGroup",required:!1,type:{kind:"external",name:"Property.BoxOrdinalGroup",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-ordinal-group"},description:"The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",declarations:[{name:"KhtmlBoxOrdinalGroup",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"KhtmlBoxOrient",required:!1,type:{kind:"external",name:"Property.BoxOrient",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-orient"},description:"This is a property of the original CSS Flexible Box Layout Module draft, and has been replaced by a newer standard. See flexbox for information about the current standard.\n\n**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`\n\n**Initial value**: `inline-axis` (`horizontal` in XUL)",declarations:[{name:"KhtmlBoxOrient",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"KhtmlBoxPack",required:!1,type:{kind:"external",name:"Property.BoxPack",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-pack"},description:"The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | justify`\n\n**Initial value**: `start`",declarations:[{name:"KhtmlBoxPack",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"KhtmlLineBreak",required:!1,type:{kind:"external",name:"Property.LineBreak",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/line-break"},description:"The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.\n\n**Syntax**: `auto | loose | normal | strict | anywhere`\n\n**Initial value**: `auto`",declarations:[{name:"KhtmlLineBreak",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"KhtmlOpacity",required:!1,type:{kind:"external",name:"Property.Opacity",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/opacity"},description:"The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.\n\n**Syntax**: `<alpha-value>`\n\n**Initial value**: `1.0`",declarations:[{name:"KhtmlOpacity",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"KhtmlUserSelect",required:!1,type:{kind:"external",name:"Property.UserSelect",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/user-select"},description:"The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.\n\n**Syntax**: `auto | text | none | contain | all`\n\n**Initial value**: `auto`",declarations:[{name:"KhtmlUserSelect",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozBackgroundClip",required:!1,type:{kind:"external",name:"Property.BackgroundClip",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip"},description:"The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `border-box`",declarations:[{name:"MozBackgroundClip",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozBackgroundInlinePolicy",required:!1,type:{kind:"external",name:"Property.BoxDecorationBreak",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break"},description:"The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.\n\n**Syntax**: `slice | clone`\n\n**Initial value**: `slice`",declarations:[{name:"MozBackgroundInlinePolicy",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozBackgroundOrigin",required:!1,type:{kind:"external",name:"Property.BackgroundOrigin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin"},description:"The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `padding-box`",declarations:[{name:"MozBackgroundOrigin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozBackgroundSize",required:!1,type:{kind:"external",name:"Property.BackgroundSize",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/background-size"},description:"The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`",declarations:[{name:"MozBackgroundSize",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozBinding",required:!1,type:{kind:"external",name:"Property.MozBinding",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/moz-binding"},description:"The **`-moz-binding`** CSS property is used by Mozilla-based applications to attach an XBL binding to a DOM element.\n\n**Syntax**: `<url> | none`\n\n**Initial value**: `none`",declarations:[{name:"MozBinding",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozBorderRadius",required:!1,type:{kind:"external",name:"Property.BorderRadius",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius"},description:"The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.\n\n**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`",declarations:[{name:"MozBorderRadius",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozBorderRadiusBottomleft",required:!1,type:{kind:"external",name:"Property.BorderBottomLeftRadius",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius"},description:"The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`",declarations:[{name:"MozBorderRadiusBottomleft",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozBorderRadiusBottomright",required:!1,type:{kind:"external",name:"Property.BorderBottomRightRadius",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius"},description:"The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`",declarations:[{name:"MozBorderRadiusBottomright",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozBorderRadiusTopleft",required:!1,type:{kind:"external",name:"Property.BorderTopLeftRadius",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius"},description:"The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`",declarations:[{name:"MozBorderRadiusTopleft",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozBorderRadiusTopright",required:!1,type:{kind:"external",name:"Property.BorderTopRightRadius",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius"},description:"The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`",declarations:[{name:"MozBorderRadiusTopright",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozBoxAlign",required:!1,type:{kind:"external",name:"Property.BoxAlign",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-align"},description:"The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | baseline | stretch`\n\n**Initial value**: `stretch`",declarations:[{name:"MozBoxAlign",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozBoxDirection",required:!1,type:{kind:"external",name:"Property.BoxDirection",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-direction"},description:"The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).\n\n**Syntax**: `normal | reverse | inherit`\n\n**Initial value**: `normal`",declarations:[{name:"MozBoxDirection",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozBoxFlex",required:!1,type:{kind:"external",name:"Property.BoxFlex",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-flex"},description:"The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",declarations:[{name:"MozBoxFlex",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozBoxOrdinalGroup",required:!1,type:{kind:"external",name:"Property.BoxOrdinalGroup",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-ordinal-group"},description:"The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",declarations:[{name:"MozBoxOrdinalGroup",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozBoxOrient",required:!1,type:{kind:"external",name:"Property.BoxOrient",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-orient"},description:"This is a property of the original CSS Flexible Box Layout Module draft, and has been replaced by a newer standard. See flexbox for information about the current standard.\n\n**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`\n\n**Initial value**: `inline-axis` (`horizontal` in XUL)",declarations:[{name:"MozBoxOrient",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozBoxPack",required:!1,type:{kind:"external",name:"Property.BoxPack",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-pack"},description:"The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | justify`\n\n**Initial value**: `start`",declarations:[{name:"MozBoxPack",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozBoxShadow",required:!1,type:{kind:"external",name:"Property.BoxShadow",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow"},description:"The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.\n\n**Syntax**: `none | <shadow>#`\n\n**Initial value**: `none`",declarations:[{name:"MozBoxShadow",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozFloatEdge",required:!1,type:{kind:"external",name:"Property.MozFloatEdge",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/moz-float-edge"},description:"The non-standard **`-moz-float-edge`** CSS property specifies whether the height and width properties of the element include the margin, border, or padding thickness.\n\n**Syntax**: `border-box | content-box | margin-box | padding-box`\n\n**Initial value**: `content-box`",declarations:[{name:"MozFloatEdge",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozForceBrokenImageIcon",required:!1,type:{kind:"external",name:"Property.MozForceBrokenImageIcon",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/moz-force-broken-image-icon"},description:"The **`-moz-force-broken-image-icon`** extended CSS property can be used to force the broken image icon to be shown even when a broken image has an `alt` attribute.\n\n**Syntax**: `<integer [0,1]>`\n\n**Initial value**: `0`",declarations:[{name:"MozForceBrokenImageIcon",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozOpacity",required:!1,type:{kind:"external",name:"Property.Opacity",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/opacity"},description:"The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.\n\n**Syntax**: `<alpha-value>`\n\n**Initial value**: `1.0`",declarations:[{name:"MozOpacity",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozOutline",required:!1,type:{kind:"external",name:"Property.Outline",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/outline"},description:"The **`outline`** CSS shorthand property set all the outline properties in a single declaration.\n\n**Syntax**: `[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]`",declarations:[{name:"MozOutline",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozOutlineColor",required:!1,type:{kind:"external",name:"Property.OutlineColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/outline-color"},description:"The **`outline-color`** CSS property sets the color of an element's outline.\n\n**Syntax**: `<color> | invert`\n\n**Initial value**: `invert`, for browsers supporting it, `currentColor` for the other",declarations:[{name:"MozOutlineColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozOutlineRadius",required:!1,type:{kind:"external",name:"Property.MozOutlineRadius",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/moz-outline-radius"},description:"In Mozilla applications like Firefox, the **`-moz-outline-radius`** CSS shorthand property can be used to give an element's `outline` rounded corners.\n\n**Syntax**: `<outline-radius>{1,4} [ / <outline-radius>{1,4} ]?`",declarations:[{name:"MozOutlineRadius",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozOutlineRadiusBottomleft",required:!1,type:{kind:"external",name:"Property.MozOutlineRadiusBottomleft",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/moz-outline-radius-bottomleft"},description:"In Mozilla applications, the **`-moz-outline-radius-bottomleft`** CSS property can be used to round the bottom-left corner of an element's `outline`.\n\n**Syntax**: `<outline-radius>`\n\n**Initial value**: `0`",declarations:[{name:"MozOutlineRadiusBottomleft",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozOutlineRadiusBottomright",required:!1,type:{kind:"external",name:"Property.MozOutlineRadiusBottomright",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/moz-outline-radius-bottomright"},description:"In Mozilla applications, the **`-moz-outline-radius-bottomright`** CSS property can be used to round the bottom-right corner of an element's `outline`.\n\n**Syntax**: `<outline-radius>`\n\n**Initial value**: `0`",declarations:[{name:"MozOutlineRadiusBottomright",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozOutlineRadiusTopleft",required:!1,type:{kind:"external",name:"Property.MozOutlineRadiusTopleft",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/moz-outline-radius-topleft"},description:"In Mozilla applications, the **`-moz-outline-radius-topleft`** CSS property can be used to round the top-left corner of an element's `outline`.\n\n**Syntax**: `<outline-radius>`\n\n**Initial value**: `0`",declarations:[{name:"MozOutlineRadiusTopleft",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozOutlineRadiusTopright",required:!1,type:{kind:"external",name:"Property.MozOutlineRadiusTopright",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/moz-outline-radius-topright"},description:"In Mozilla applications, the **`-moz-outline-radius-topright`** CSS property can be used to round the top-right corner of an element's `outline`.\n\n**Syntax**: `<outline-radius>`\n\n**Initial value**: `0`",declarations:[{name:"MozOutlineRadiusTopright",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozOutlineStyle",required:!1,type:{kind:"external",name:"Property.OutlineStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/outline-style"},description:"The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.\n\n**Syntax**: `auto | <'border-style'>`\n\n**Initial value**: `none`",declarations:[{name:"MozOutlineStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozOutlineWidth",required:!1,type:{kind:"external",name:"Property.OutlineWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/outline-width"},description:"The CSS **`outline-width`** property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`",declarations:[{name:"MozOutlineWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozTextAlignLast",required:!1,type:{kind:"external",name:"Property.TextAlignLast",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-align-last"},description:"The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.\n\n**Syntax**: `auto | start | end | left | right | center | justify`\n\n**Initial value**: `auto`",declarations:[{name:"MozTextAlignLast",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozTextDecorationColor",required:!1,type:{kind:"external",name:"Property.TextDecorationColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color"},description:"The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`",declarations:[{name:"MozTextDecorationColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozTextDecorationLine",required:!1,type:{kind:"external",name:"Property.TextDecorationLine",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line"},description:"The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.\n\n**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`\n\n**Initial value**: `none`",declarations:[{name:"MozTextDecorationLine",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozTextDecorationStyle",required:!1,type:{kind:"external",name:"Property.TextDecorationStyle",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style"},description:"The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.\n\n**Syntax**: `solid | double | dotted | dashed | wavy`\n\n**Initial value**: `solid`",declarations:[{name:"MozTextDecorationStyle",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"MozUserInput",required:!1,type:{kind:"external",name:"Property.MozUserInput",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/moz-user-input"},description:"In Mozilla applications, **`-moz-user-input`** determines if an element will accept user input.\n\n**Syntax**: `auto | none | enabled | disabled`\n\n**Initial value**: `auto`",declarations:[{name:"MozUserInput",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"msImeMode",required:!1,type:{kind:"external",name:"Property.ImeMode",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ime-mode"},description:"The **`ime-mode`** CSS property controls the state of the input method editor (IME) for text fields. This property is obsolete.\n\n**Syntax**: `auto | normal | active | inactive | disabled`\n\n**Initial value**: `auto`",declarations:[{name:"msImeMode",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"msScrollbarTrackColor",required:!1,type:{kind:"external",name:"Property.MsScrollbarTrackColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/ms-scrollbar-track-color"},description:"The **`-ms-scrollbar-track-color`** CSS property is a Microsoft extension that specifies the color of the track element of a scrollbar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `Scrollbar`",declarations:[{name:"msScrollbarTrackColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"OAnimation",required:!1,type:{kind:"external",name:"Property.Animation",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation"},description:"The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.\n\n**Syntax**: `<single-animation>#`",declarations:[{name:"OAnimation",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"OAnimationDelay",required:!1,type:{kind:"external",name:"Property.AnimationDelay",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay"},description:"The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",declarations:[{name:"OAnimationDelay",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"OAnimationDirection",required:!1,type:{kind:"external",name:"Property.AnimationDirection",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction"},description:"The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.\n\n**Syntax**: `<single-animation-direction>#`\n\n**Initial value**: `normal`",declarations:[{name:"OAnimationDirection",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"OAnimationDuration",required:!1,type:{kind:"external",name:"Property.AnimationDuration",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration"},description:"The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",declarations:[{name:"OAnimationDuration",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"OAnimationFillMode",required:!1,type:{kind:"external",name:"Property.AnimationFillMode",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode"},description:"The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.\n\n**Syntax**: `<single-animation-fill-mode>#`\n\n**Initial value**: `none`",declarations:[{name:"OAnimationFillMode",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"OAnimationIterationCount",required:!1,type:{kind:"external",name:"Property.AnimationIterationCount",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count"},description:"The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.\n\n**Syntax**: `<single-animation-iteration-count>#`\n\n**Initial value**: `1`",declarations:[{name:"OAnimationIterationCount",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"OAnimationName",required:!1,type:{kind:"external",name:"Property.AnimationName",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name"},description:"The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.\n\n**Syntax**: `[ none | <keyframes-name> ]#`\n\n**Initial value**: `none`",declarations:[{name:"OAnimationName",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"OAnimationPlayState",required:!1,type:{kind:"external",name:"Property.AnimationPlayState",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state"},description:"The **`animation-play-state`** CSS property sets whether an animation is running or paused.\n\n**Syntax**: `<single-animation-play-state>#`\n\n**Initial value**: `running`",declarations:[{name:"OAnimationPlayState",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"OAnimationTimingFunction",required:!1,type:{kind:"external",name:"Property.AnimationTimingFunction",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function"},description:"The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`",declarations:[{name:"OAnimationTimingFunction",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"OBackgroundSize",required:!1,type:{kind:"external",name:"Property.BackgroundSize",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/background-size"},description:"The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`",declarations:[{name:"OBackgroundSize",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"OBorderImage",required:!1,type:{kind:"external",name:"Property.BorderImage",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/border-image"},description:"The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.\n\n**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`",declarations:[{name:"OBorderImage",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"OObjectFit",required:!1,type:{kind:"external",name:"Property.ObjectFit",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"},description:"The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.\n\n**Syntax**: `fill | contain | cover | none | scale-down`\n\n**Initial value**: `fill`",declarations:[{name:"OObjectFit",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"OObjectPosition",required:!1,type:{kind:"external",name:"Property.ObjectPosition",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-position"},description:"The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.\n\n**Syntax**: `<position>`\n\n**Initial value**: `50% 50%`",declarations:[{name:"OObjectPosition",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"OTabSize",required:!1,type:{kind:"external",name:"Property.TabSize",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/tab-size"},description:"The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).\n\n**Syntax**: `<integer> | <length>`\n\n**Initial value**: `8`",declarations:[{name:"OTabSize",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"OTextOverflow",required:!1,type:{kind:"external",name:"Property.TextOverflow",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow"},description:"The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.\n\n**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`\n\n**Initial value**: `clip`",declarations:[{name:"OTextOverflow",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"OTransform",required:!1,type:{kind:"external",name:"Property.Transform",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform"},description:"The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.\n\n**Syntax**: `none | <transform-list>`\n\n**Initial value**: `none`",declarations:[{name:"OTransform",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"OTransformOrigin",required:!1,type:{kind:"external",name:"Property.TransformOrigin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin"},description:"The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`",declarations:[{name:"OTransformOrigin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"OTransition",required:!1,type:{kind:"external",name:"Property.Transition",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition"},description:"The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`",declarations:[{name:"OTransition",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"OTransitionDelay",required:!1,type:{kind:"external",name:"Property.TransitionDelay",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay"},description:"The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",declarations:[{name:"OTransitionDelay",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"OTransitionDuration",required:!1,type:{kind:"external",name:"Property.TransitionDuration",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration"},description:"The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",declarations:[{name:"OTransitionDuration",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"OTransitionProperty",required:!1,type:{kind:"external",name:"Property.TransitionProperty",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property"},description:"The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all",declarations:[{name:"OTransitionProperty",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"OTransitionTimingFunction",required:!1,type:{kind:"external",name:"Property.TransitionTimingFunction",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function"},description:"The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`",declarations:[{name:"OTransitionTimingFunction",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"WebkitBoxAlign",required:!1,type:{kind:"external",name:"Property.BoxAlign",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-align"},description:"The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | baseline | stretch`\n\n**Initial value**: `stretch`",declarations:[{name:"WebkitBoxAlign",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"WebkitBoxDirection",required:!1,type:{kind:"external",name:"Property.BoxDirection",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-direction"},description:"The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).\n\n**Syntax**: `normal | reverse | inherit`\n\n**Initial value**: `normal`",declarations:[{name:"WebkitBoxDirection",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"WebkitBoxFlex",required:!1,type:{kind:"external",name:"Property.BoxFlex",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-flex"},description:"The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",declarations:[{name:"WebkitBoxFlex",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"WebkitBoxFlexGroup",required:!1,type:{kind:"external",name:"Property.BoxFlexGroup",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-flex-group"},description:"The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",declarations:[{name:"WebkitBoxFlexGroup",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"WebkitBoxLines",required:!1,type:{kind:"external",name:"Property.BoxLines",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-lines"},description:"The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).\n\n**Syntax**: `single | multiple`\n\n**Initial value**: `single`",declarations:[{name:"WebkitBoxLines",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"WebkitBoxOrdinalGroup",required:!1,type:{kind:"external",name:"Property.BoxOrdinalGroup",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-ordinal-group"},description:"The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",declarations:[{name:"WebkitBoxOrdinalGroup",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"WebkitBoxOrient",required:!1,type:{kind:"external",name:"Property.BoxOrient",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-orient"},description:"This is a property of the original CSS Flexible Box Layout Module draft, and has been replaced by a newer standard. See flexbox for information about the current standard.\n\n**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`\n\n**Initial value**: `inline-axis` (`horizontal` in XUL)",declarations:[{name:"WebkitBoxOrient",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"WebkitBoxPack",required:!1,type:{kind:"external",name:"Property.BoxPack",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-pack"},description:"The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | justify`\n\n**Initial value**: `start`",declarations:[{name:"WebkitBoxPack",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"WebkitScrollSnapPointsX",required:!1,type:{kind:"external",name:"Property.ScrollSnapPointsX",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-points-x"},description:"The **`scroll-snap-points-x`** CSS property defines the horizontal positioning of snap points within the content of the scroll container they are applied to.\n\n**Syntax**: `none | repeat( <length-percentage> )`\n\n**Initial value**: `none`",declarations:[{name:"WebkitScrollSnapPointsX",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"WebkitScrollSnapPointsY",required:!1,type:{kind:"external",name:"Property.ScrollSnapPointsY",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-points-y"},description:"The **`scroll-snap-points-y`** CSS property defines the vertical positioning of snap points within the content of the scroll container they are applied to.\n\n**Syntax**: `none | repeat( <length-percentage> )`\n\n**Initial value**: `none`",declarations:[{name:"WebkitScrollSnapPointsY",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{deprecated:""}},{kind:"property",name:"alignmentBaseline",required:!1,type:{kind:"external",name:"Property.AlignmentBaseline",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/alignment-baseline"},description:"",declarations:[{name:"alignmentBaseline",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"baselineShift",required:!1,type:{kind:"external",name:"Property.BaselineShift",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/baseline-shift"},description:"",declarations:[{name:"baselineShift",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"clipRule",required:!1,type:{kind:"external",name:"Property.ClipRule",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/clip-rule"},description:"",declarations:[{name:"clipRule",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"colorInterpolation",required:!1,type:{kind:"external",name:"Property.ColorInterpolation",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/color-interpolation"},description:"",declarations:[{name:"colorInterpolation",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"colorRendering",required:!1,type:{kind:"external",name:"Property.ColorRendering",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/color-rendering"},description:"",declarations:[{name:"colorRendering",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"dominantBaseline",required:!1,type:{kind:"external",name:"Property.DominantBaseline",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/dominant-baseline"},description:"",declarations:[{name:"dominantBaseline",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"fill",required:!1,type:{kind:"external",name:"Property.Fill",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/fill"},description:"",declarations:[{name:"fill",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"fillOpacity",required:!1,type:{kind:"external",name:"Property.FillOpacity",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/fill-opacity"},description:"",declarations:[{name:"fillOpacity",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"fillRule",required:!1,type:{kind:"external",name:"Property.FillRule",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/fill-rule"},description:"",declarations:[{name:"fillRule",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"floodColor",required:!1,type:{kind:"external",name:"Property.FloodColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/flood-color"},description:"",declarations:[{name:"floodColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"floodOpacity",required:!1,type:{kind:"external",name:"Property.FloodOpacity",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/flood-opacity"},description:"",declarations:[{name:"floodOpacity",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"glyphOrientationVertical",required:!1,type:{kind:"external",name:"Property.GlyphOrientationVertical",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/glyph-orientation-vertical"},description:"",declarations:[{name:"glyphOrientationVertical",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"lightingColor",required:!1,type:{kind:"external",name:"Property.LightingColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/lighting-color"},description:"",declarations:[{name:"lightingColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"marker",required:!1,type:{kind:"external",name:"Property.Marker",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/marker"},description:"",declarations:[{name:"marker",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"markerEnd",required:!1,type:{kind:"external",name:"Property.MarkerEnd",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/marker-end"},description:"",declarations:[{name:"markerEnd",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"markerMid",required:!1,type:{kind:"external",name:"Property.MarkerMid",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/marker-mid"},description:"",declarations:[{name:"markerMid",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"markerStart",required:!1,type:{kind:"external",name:"Property.MarkerStart",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/marker-start"},description:"",declarations:[{name:"markerStart",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"shapeRendering",required:!1,type:{kind:"external",name:"Property.ShapeRendering",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/shape-rendering"},description:"",declarations:[{name:"shapeRendering",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"stopColor",required:!1,type:{kind:"external",name:"Property.StopColor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/stop-color"},description:"",declarations:[{name:"stopColor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"stopOpacity",required:!1,type:{kind:"external",name:"Property.StopOpacity",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/stop-opacity"},description:"",declarations:[{name:"stopOpacity",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"stroke",required:!1,type:{kind:"external",name:"Property.Stroke",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/stroke"},description:"",declarations:[{name:"stroke",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"strokeDasharray",required:!1,type:{kind:"external",name:"Property.StrokeDasharray",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-dasharray"},description:"",declarations:[{name:"strokeDasharray",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"strokeDashoffset",required:!1,type:{kind:"external",name:"Property.StrokeDashoffset",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-dashoffset"},description:"",declarations:[{name:"strokeDashoffset",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"strokeLinecap",required:!1,type:{kind:"external",name:"Property.StrokeLinecap",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-linecap"},description:"",declarations:[{name:"strokeLinecap",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"strokeLinejoin",required:!1,type:{kind:"external",name:"Property.StrokeLinejoin",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-linejoin"},description:"",declarations:[{name:"strokeLinejoin",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"strokeMiterlimit",required:!1,type:{kind:"external",name:"Property.StrokeMiterlimit",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-miterlimit"},description:"",declarations:[{name:"strokeMiterlimit",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"strokeOpacity",required:!1,type:{kind:"external",name:"Property.StrokeOpacity",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-opacity"},description:"",declarations:[{name:"strokeOpacity",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"strokeWidth",required:!1,type:{kind:"external",name:"Property.StrokeWidth",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-width"},description:"",declarations:[{name:"strokeWidth",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"textAnchor",required:!1,type:{kind:"external",name:"Property.TextAnchor",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/text-anchor"},description:"",declarations:[{name:"textAnchor",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}},{kind:"property",name:"vectorEffect",required:!1,type:{kind:"external",name:"Property.VectorEffect",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/vector-effect"},description:"",declarations:[{name:"vectorEffect",filePath:"/home/runner/work/canvas-kit/canvas-kit/node_modules/csstype/index.d.ts"}],tags:{}}],indexSignature:{kind:"indexSignature",name:"propertiesName",type:{kind:"primitive",value:"string"},value:{kind:"symbol",name:"CSSInterpolation",value:"CSSInterpolation"}}}},{name:"StyleProps",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:`Style properties in a JavaScript camelCase. Everything Emotion allows is also
allowed here.`,declarations:[{name:"StyleProps",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"type",typeParameters:[],value:{kind:"union",value:[{kind:"primitive",value:"null"},{kind:"primitive",value:"undefined"},{kind:"primitive",value:"boolean"},{kind:"primitive",value:"number"},{kind:"primitive",value:"string"},{kind:"symbol",name:"ComponentSelector",value:"ComponentSelector"},{kind:"symbol",name:"Keyframes",value:"Keyframes"},{kind:"symbol",name:"SerializedStyles",value:"SerializedStyles"},{kind:"symbol",name:"CSSObjectWithVars",value:"CSSObjectWithVars"}]}}},{name:"Prettify",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"Prettify object types. @see https://www.totaltypescript.com/concepts/the-prettify-helper",declarations:[{name:"Prettify",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"type",typeParameters:[{kind:"typeParameter",name:"T",required:!0}],value:{kind:"intersection",value:[{kind:"unknown",value:"unknown",text:`{
  [K in keyof T]: T[K];
}`},{kind:"object",properties:[]}]}}},{name:"ExtractStencilModifiers",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:`Extract all the modifiers from a stencil. Usually you'll want to use {@link ExtractStencilProps }
instead.`,declarations:[{name:"ExtractStencilModifiers",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"type",typeParameters:[{kind:"typeParameter",name:"T",constraint:{kind:"symbol",name:"BaseStencil",typeParameters:[{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"}],value:"BaseStencil<M, P, V, E, ID>"},required:!0}],value:{kind:"unknown",value:"unknown",text:`{
  [K in keyof T['__modifiers']]?: MaybeBoolean<keyof T['__modifiers'][K]>;
}`}}},{name:"ExtractExtendedStencilModifiers",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:`Recursively extract all the modifiers from a stencil and its extended stencils. Usually you'll
want to use {@link ExtractStencilProps } instead.`,declarations:[{name:"ExtractExtendedStencilModifiers",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"type",typeParameters:[{kind:"typeParameter",name:"T",constraint:{kind:"symbol",name:"BaseStencil",typeParameters:[{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"}],value:"BaseStencil<M, P, V, E, ID>"},required:!0}],value:{kind:"conditional",check:{kind:"generic",name:"T"},extends:{kind:"symbol",name:"BaseStencil",typeParameters:[{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"infer",value:{kind:"typeParameter",name:"E",required:!0}}],value:"BaseStencil<M, P, V, E, ID>"},trueType:{kind:"conditional",check:{kind:"tuple",value:[{kind:"generic",name:"E"}]},extends:{kind:"tuple",value:[{kind:"primitive",value:"never"}]},trueType:{kind:"symbol",name:"ExtractStencilModifiers",typeParameters:[{kind:"generic",name:"T"}],value:"ExtractStencilModifiers<T>"},falseType:{kind:"intersection",value:[{kind:"symbol",name:"ExtractExtendedStencilModifiers",typeParameters:[{kind:"generic",name:"E"}],value:"ExtractExtendedStencilModifiers<T>"},{kind:"symbol",name:"ExtractStencilModifiers",typeParameters:[{kind:"generic",name:"T"}],value:"ExtractStencilModifiers<T>"}]}},falseType:{kind:"object",properties:[]}}}},{name:"ExtractStencilVars",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:`Extract all the variables from a stencil. Usually you'll want to use {@link ExtractStencilProps }
instead.`,declarations:[{name:"ExtractStencilVars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"type",typeParameters:[{kind:"typeParameter",name:"T",constraint:{kind:"symbol",name:"BaseStencil",typeParameters:[{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"}],value:"BaseStencil<M, P, V, E, ID>"},required:!0}],value:{kind:"unknown",value:"unknown",text:`{
  [K in keyof T['__vars']]?: string;
}`}}},{name:"ExtractExtendedStencilVars",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:`Recursively extract all the variables from a stencil and its extended stencils. Usually you'll
want to use {@link ExtractStencilProps } instead.`,declarations:[{name:"ExtractExtendedStencilVars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"type",typeParameters:[{kind:"typeParameter",name:"T",constraint:{kind:"symbol",name:"BaseStencil",typeParameters:[{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"}],value:"BaseStencil<M, P, V, E, ID>"},required:!0}],value:{kind:"conditional",check:{kind:"generic",name:"T"},extends:{kind:"symbol",name:"BaseStencil",typeParameters:[{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"infer",value:{kind:"typeParameter",name:"E",required:!0}}],value:"BaseStencil<M, P, V, E, ID>"},trueType:{kind:"conditional",check:{kind:"tuple",value:[{kind:"generic",name:"E"}]},extends:{kind:"tuple",value:[{kind:"primitive",value:"never"}]},trueType:{kind:"symbol",name:"ExtractStencilVars",typeParameters:[{kind:"generic",name:"T"}],value:"ExtractStencilVars<T>"},falseType:{kind:"intersection",value:[{kind:"symbol",name:"ExtractExtendedStencilVars",typeParameters:[{kind:"generic",name:"E"}],value:"ExtractExtendedStencilVars<T>"},{kind:"symbol",name:"ExtractStencilVars",typeParameters:[{kind:"generic",name:"T"}],value:"ExtractStencilVars<T>"}]}},falseType:{kind:"object",properties:[]}}}},{name:"ExtractStencilProps",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:`Returns an interface containing all the modifiers and variables from a stencil to be used in a
component's prop interface.

\`\`\`ts
interface MyComponentProps extends ExtractStencilProps<typeof myComponentStencil> {
  // other props
}
\`\`\``,declarations:[{name:"ExtractStencilProps",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"type",typeParameters:[{kind:"typeParameter",name:"T",constraint:{kind:"symbol",name:"BaseStencil",typeParameters:[{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"}],value:"BaseStencil<M, P, V, E, ID>"},required:!0}],value:{kind:"symbol",name:"Prettify",typeParameters:[{kind:"intersection",value:[{kind:"symbol",name:"ExtractStencilModifiers",typeParameters:[{kind:"generic",name:"T"}],value:"ExtractStencilModifiers<T>"},{kind:"symbol",name:"ExtractStencilVars",typeParameters:[{kind:"generic",name:"T"}],value:"ExtractStencilVars<T>"}]}],value:"{ [K in keyof T]: T[K]; }"}}},{name:"ExtractExtendedStencilProps",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:`Returns an interface containing all the modifiers and variables from a stencil, including
extended stencils, to be used in a component's prop interface. If your component's props already
extend another component's props that already include stencil props, use \`ExtractStencilProps\`
instead.

\`\`\`ts
interface MyComponentProps extends ExtractExtendedStencilProps<typeof myComponentStencil> {
  // other props
}
\`\`\``,declarations:[{name:"ExtractExtendedStencilProps",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"type",typeParameters:[{kind:"typeParameter",name:"T",constraint:{kind:"symbol",name:"BaseStencil",typeParameters:[{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"}],value:"BaseStencil<M, P, V, E, ID>"},required:!0}],value:{kind:"symbol",name:"Prettify",typeParameters:[{kind:"intersection",value:[{kind:"symbol",name:"ExtractExtendedStencilModifiers",typeParameters:[{kind:"generic",name:"T"}],value:"ExtractExtendedStencilModifiers<T>"},{kind:"symbol",name:"ExtractExtendedStencilVars",typeParameters:[{kind:"generic",name:"T"}],value:"ExtractExtendedStencilVars<T>"}]}],value:"{ [K in keyof T]: T[K]; }"}}},{name:"maybeWrapCSSVariables",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"Wrap all unwrapped CSS Variables. For example, `{padding: '--foo'}` will be replaced with\n`{padding: 'var(--foo)'}`. It also works on variables in the middle of the property. Takes any\nstring and returns a string with CSS variables wrapped if necessary.\n\n```ts\nmaybeWrapCSSVariables('1rem'); // 1rem\nmaybeWrapCSSVariables('--foo'); // var(--foo)\nmaybeWrapCSSVariables('var(--foo)'); // var(--foo)\nmaybeWrapCSSVariables('calc(--foo)'); // calc(var(--foo))\n```",declarations:[{name:"maybeWrapCSSVariables",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"function",parameters:[{kind:"parameter",name:"input",type:{kind:"primitive",value:"string"},required:!0,rest:!1,description:"",declarations:[{name:"input",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}],members:[],returnType:{kind:"primitive",value:"string"}}},{name:"wrapProperty",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"wrapProperty",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"function",typeParameters:[{kind:"typeParameter",name:"T",required:!0}],parameters:[{kind:"parameter",name:"value",type:{kind:"generic",name:"T"},required:!0,rest:!1,description:"",declarations:[{name:"value",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}],members:[],returnType:{kind:"generic",name:"T"}}},{name:"wrapAllProperties",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"Walks through all the properties and values of a style and converts properties and/or values that\nneed special processing. An example might be using a CSS variable without a `var()` wrapping.",declarations:[{name:"wrapAllProperties",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"function",typeParameters:[{kind:"typeParameter",name:"T",constraint:{kind:"primitive",value:"unknown"},required:!0}],parameters:[{kind:"parameter",name:"obj",type:{kind:"generic",name:"T"},required:!0,rest:!1,description:"",declarations:[{name:"obj",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}],members:[],returnType:{kind:"generic",name:"T"}}},{name:"CS",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"CS",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"type",typeParameters:[],value:{kind:"union",value:[{kind:"primitive",value:"string"},{kind:"external",name:"Record",url:"https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type",typeParameters:[{kind:"primitive",value:"string"},{kind:"primitive",value:"string"}]}]}}},{name:"CsVarsMap",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"CSS variable map type. In developer/dynamic mode, we don't know what the hash is going to be. All\nvariables will look like `--{hash}-{name}`. But the static optimizers generates the name based on\nthe AST, so the `id` will be known. Instead of something like `--abc123-color`, the `ID` is set\nby the optimizer.\n\nFor example:\n```ts\n// dynamic\nconst myVars = createVars('color') // type is `Record<'color', string>`\n\n// optimizer rewrites the code\nconst myVars = createVars<'color', 'myVars'>('color')\n// type is now `{color: \"--color-myVars\"}`\n\nmyVars.color // type is `--color-myVars`\n```\n\nThis is so optimized variables can be used directly by the static parser downstream. The variable\nnames become statically analyzable.",declarations:[{name:"CsVarsMap",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"type",typeParameters:[{kind:"typeParameter",name:"T",constraint:{kind:"primitive",value:"string"},required:!0},{kind:"typeParameter",name:"ID",constraint:{kind:"union",value:[{kind:"primitive",value:"string"},{kind:"primitive",value:"never"}]},required:!0}],value:{kind:"conditional",check:{kind:"tuple",value:[{kind:"generic",name:"ID"}]},extends:{kind:"tuple",value:[{kind:"primitive",value:"never"}]},trueType:{kind:"external",name:"Record",url:"https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type",typeParameters:[{kind:"generic",name:"T"},{kind:"primitive",value:"string"}]},falseType:{kind:"unknown",value:"unknown",text:"{[K in T]: `--${K}-${ID}`}"}}}},{name:"CsVars",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"CsVars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"type",typeParameters:[{kind:"typeParameter",name:"T",constraint:{kind:"primitive",value:"string"},required:!0},{kind:"typeParameter",name:"ID",constraint:{kind:"union",value:[{kind:"primitive",value:"string"},{kind:"primitive",value:"never"}]},required:!0}],value:{kind:"intersection",value:[{kind:"symbol",name:"CsVarsMap",typeParameters:[{kind:"generic",name:"T"},{kind:"generic",name:"ID"}],value:"CsVarsMap<T, ID>"},{kind:"object",properties:[]}]}}},{name:"cssVar",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:`Take a CSS Variable name and return a variable property

\`\`\`ts
const myVars = createVars('color')

const myStyles = createStyles({
  color: cssVar(myVars.color) // color: 'var(--color-{hash})'
})
\`\`\`

It can also support an optional fallback. Fallbacks should only be used if it is reasonable to
expect a CSS variable isn't defined.
\`\`\`ts
const myStyles = createStyles({
  color: cssVar(myVars.color, 'red') // color: 'var(--color-{hash}, red)'
})
\`\`\`

If the project is set up for parsing with fallback files, a fallback will automatically be filled
during the parsing phase. This is helpful for cases when CSS variables are expected, but not set
in the environment.`,declarations:[{name:"cssVar",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"function",typeParameters:[{kind:"typeParameter",name:"I",constraint:{kind:"primitive",value:"string"},required:!0},{kind:"typeParameter",name:"F",defaultValue:{kind:"primitive",value:"undefined"},constraint:{kind:"union",value:[{kind:"primitive",value:"string"},{kind:"primitive",value:"undefined"}]},required:!1}],parameters:[{kind:"parameter",name:"input",type:{kind:"generic",name:"I"},required:!0,rest:!1,description:"",declarations:[{name:"input",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"parameter",name:"fallback",type:{kind:"generic",name:"F"},required:!1,rest:!1,description:"",declarations:[{name:"fallback",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}],members:[],returnType:{kind:"unknown",value:"unknown",text:'`var(${I}${F extends undefined ? "" : F extends `--${string}` ? `, var(${F})` : `, ${F}`})`'}}},{name:"createVars",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"Create temporary CSS variables to use in components. The CSS variable names will\nbe unique at runtime to avoid collisions. The return value is a function and a\nMap. The function can be used to pass in values from JavaScript. The function will\nreturn a map of variable keys to CSS Variable names.\n\n```ts\n// creates a `color` and `background` CSS variable\nconst myVars = createVars('color', 'background')\n\n// 'color' is a typed property. The type is `string`\nconsole.log(myVars.color) // `'var(--color-{hash})'`\n\n// 'color' is a typed property. The type is `string?`\n// The returned object can be assigned to the `style` property of an element\nconsole.log(myVars({ color: 'red' })) //  `{'--color-{hash}': 'red'}`\n\nconst div = document.createElement('div')\ndiv.style = myVars({ color: 'red' }) // <div style=\"--color-{hash}: red;\" />\n```",declarations:[{name:"createVars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"},{name:"createVars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"},{name:"createVars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"},{name:"createVars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"function",typeParameters:[{kind:"typeParameter",name:"T",constraint:{kind:"primitive",value:"string"},required:!0},{kind:"typeParameter",name:"ID",constraint:{kind:"primitive",value:"string"},required:!0}],parameters:[{kind:"parameter",name:"input",type:{kind:"object",properties:[{kind:"property",name:"id",required:!0,type:{kind:"generic",name:"ID"},description:"",declarations:[{name:"id",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"args",required:!0,type:{kind:"array",value:{kind:"generic",name:"T"}},description:"",declarations:[{name:"args",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}]},required:!0,rest:!1,description:"",declarations:[{name:"input",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}],members:[],returnType:{kind:"symbol",name:"CsVars",typeParameters:[{kind:"generic",name:"T"},{kind:"generic",name:"ID"}],value:"CsVars<T, ID>"}}},{name:"createVars",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"Create temporary CSS variables to use in components. The CSS variable names will\nbe unique at runtime to avoid collisions. The return value is a function and a\nMap. The function can be used to pass in values from JavaScript. The function will\nreturn a map of variable keys to CSS Variable names.\n\n```ts\n// creates a `color` and `background` CSS variable\nconst myVars = createVars('color', 'background')\n\n// 'color' is a typed property. The type is `string`\nconsole.log(myVars.color) // `'var(--color-{hash})'`\n\n// 'color' is a typed property. The type is `string?`\n// The returned object can be assigned to the `style` property of an element\nconsole.log(myVars({ color: 'red' })) //  `{'--color-{hash}': 'red'}`\n\nconst div = document.createElement('div')\ndiv.style = myVars({ color: 'red' }) // <div style=\"--color-{hash}: red;\" />\n```",declarations:[{name:"createVars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"},{name:"createVars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"},{name:"createVars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"},{name:"createVars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"function",typeParameters:[{kind:"typeParameter",name:"T",constraint:{kind:"primitive",value:"string"},required:!0}],parameters:[{kind:"parameter",name:"args",type:{kind:"array",value:{kind:"generic",name:"T"}},required:!0,rest:!0,description:"",declarations:[{name:"args",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}],members:[],returnType:{kind:"symbol",name:"CsVars",typeParameters:[{kind:"generic",name:"T"},{kind:"primitive",value:"never"}],value:"CsVars<T, ID>"}}},{name:"createVars",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"Create temporary CSS variables to use in components. The CSS variable names will\nbe unique at runtime to avoid collisions. The return value is a function and a\nMap. The function can be used to pass in values from JavaScript. The function will\nreturn a map of variable keys to CSS Variable names.\n\n```ts\n// creates a `color` and `background` CSS variable\nconst myVars = createVars('color', 'background')\n\n// 'color' is a typed property. The type is `string`\nconsole.log(myVars.color) // `'var(--color-{hash})'`\n\n// 'color' is a typed property. The type is `string?`\n// The returned object can be assigned to the `style` property of an element\nconsole.log(myVars({ color: 'red' })) //  `{'--color-{hash}': 'red'}`\n\nconst div = document.createElement('div')\ndiv.style = myVars({ color: 'red' }) // <div style=\"--color-{hash}: red;\" />\n```",declarations:[{name:"createVars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"},{name:"createVars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"},{name:"createVars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"},{name:"createVars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"function",typeParameters:[{kind:"typeParameter",name:"T",constraint:{kind:"symbol",name:"DefaultedVarsShape",value:"DefaultedVarsShape"},required:!0},{kind:"typeParameter",name:"ID",defaultValue:{kind:"primitive",value:"never"},constraint:{kind:"primitive",value:"string"},required:!1}],parameters:[{kind:"parameter",name:"input",type:{kind:"generic",name:"T"},required:!0,rest:!1,description:"",declarations:[{name:"input",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"parameter",name:"id",type:{kind:"generic",name:"ID"},required:!1,rest:!1,description:"",declarations:[{name:"id",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}],members:[],returnType:{kind:"symbol",name:"DefaultedVars",value:"DefaultedVars<T, ID>"}}},{name:"createVars",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"Create temporary CSS variables to use in components. The CSS variable names will\nbe unique at runtime to avoid collisions. The return value is a function and a\nMap. The function can be used to pass in values from JavaScript. The function will\nreturn a map of variable keys to CSS Variable names.\n\n```ts\n// creates a `color` and `background` CSS variable\nconst myVars = createVars('color', 'background')\n\n// 'color' is a typed property. The type is `string`\nconsole.log(myVars.color) // `'var(--color-{hash})'`\n\n// 'color' is a typed property. The type is `string?`\n// The returned object can be assigned to the `style` property of an element\nconsole.log(myVars({ color: 'red' })) //  `{'--color-{hash}': 'red'}`\n\nconst div = document.createElement('div')\ndiv.style = myVars({ color: 'red' }) // <div style=\"--color-{hash}: red;\" />\n```",declarations:[{name:"createVars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"},{name:"createVars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"},{name:"createVars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"},{name:"createVars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"function",typeParameters:[{kind:"typeParameter",name:"T",constraint:{kind:"union",value:[{kind:"primitive",value:"string"},{kind:"symbol",name:"DefaultedVarsShape",value:"DefaultedVarsShape"}]},required:!0},{kind:"typeParameter",name:"ID",constraint:{kind:"primitive",value:"string"},required:!0}],parameters:[{kind:"parameter",name:"args",type:{kind:"array",value:{kind:"generic",name:"T"}},required:!0,rest:!0,description:"",declarations:[{name:"args",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}],members:[],returnType:{kind:"primitive",value:"any"}}},{name:"DefaultedVarsMapToCSSVarNames",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:`Maps JS var names to CSS variable names

\`\`\`ts
// ID unknown
DefaultedVarsMapToCSSVarNames<{foo: 'red'}, never> = Record<'foo', string>
// ID unknown, nested
DefaultedVarsMapToCSSVarNames<{foo: { bar: 'red' }}> = Record<'foo', Record<'bar', string>>

// ID known
DefaultedVarsMapToCSSVarNames<{foo: { bar: 'red' }}, 'my-id'> = { foo: '--red-my-id' }
// ID known, nested
DefaultedVarsMapToCSSVarNames<{foo: { bar: 'red' }}, 'my-id'> = { foo: { bar: '--red-my-id' }}
\`\`\``,declarations:[{name:"DefaultedVarsMapToCSSVarNames",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"type",typeParameters:[{kind:"typeParameter",name:"V",constraint:{kind:"symbol",name:"DefaultedVarsShape",value:"DefaultedVarsShape"},required:!0},{kind:"typeParameter",name:"ID",constraint:{kind:"union",value:[{kind:"primitive",value:"string"},{kind:"primitive",value:"never"}]},required:!0}],value:{kind:"conditional",check:{kind:"tuple",value:[{kind:"generic",name:"ID"}]},extends:{kind:"tuple",value:[{kind:"primitive",value:"never"}]},trueType:{kind:"conditional",check:{kind:"generic",name:"V"},extends:{kind:"external",name:"Record",url:"https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type",typeParameters:[{kind:"primitive",value:"string"},{kind:"primitive",value:"string"}]},trueType:{kind:"unknown",value:"unknown",text:"{[K in keyof V]: `--${string}`}"},falseType:{kind:"unknown",value:"unknown",text:"{[K in keyof V]: {[K2 in keyof V[K]]: `--${string}`}}"}},falseType:{kind:"unknown",value:"unknown",text:"{\n      [K in keyof V]: V[K] extends Record<string, string>\n        ? {[K2 in keyof V[K]]: CSSVarName<`${ToString<K2>}-${ID}`, K>} //DefaultedVarsMapToCSSVarNames<V[K], `${ToString<K>}-${ID}`> // TypeScript doesn't know K is a string here and will throw an error, so we have to coerce it\n        : CSSVarName<ID, K>;\n    }"}}}},{name:"DefaultedVarsMap",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:`Maps CSS var names to defaulted values if possible. If no ID is provided, TypeScript won't know
the CSS var name and will return \`Record<string, string>\`. If the ID is known, a full mapping
will be returned.

\`\`\`ts
// ID known
DefaultedVarsMap<{foo: 'red'}, 'my-id'> = { '--foo-my-id': 'red' }
// ID known, nested
DefaultedVarsMap<{foo: { bar: 'red' }}, 'my-id'> = { foo: { '--bar-my-id': 'red' }}
\`\`\``,declarations:[{name:"DefaultedVarsMap",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"object",properties:[{kind:"property",name:"$$defaults",required:!0,type:{kind:"conditional",check:{kind:"tuple",value:[{kind:"generic",name:"ID"}]},extends:{kind:"tuple",value:[{kind:"primitive",value:"never"}]},trueType:{kind:"external",name:"Record",url:"https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type",typeParameters:[{kind:"primitive",value:"string"},{kind:"primitive",value:"string"}]},falseType:{kind:"conditional",check:{kind:"generic",name:"V"},extends:{kind:"external",name:"Record",url:"https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type",typeParameters:[{kind:"primitive",value:"string"},{kind:"primitive",value:"string"}]},trueType:{kind:"unknown",value:"unknown",text:`{
          [K in keyof V as CSSVarName<ID, K>]: V[K]; // The variables are a simple flat object with string values
        }`},falseType:{kind:"unknown",value:"unknown",text:"{[K in FlattenObjectKeys<V> as CSSVarName<ID, K>]: ExtractValue<V, K>}"}}},description:"",declarations:[{name:"$$defaults",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}],typeParameters:[{kind:"typeParameter",name:"V",constraint:{kind:"symbol",name:"DefaultedVarsShape",value:"DefaultedVarsShape"},required:!0},{kind:"typeParameter",name:"ID",constraint:{kind:"primitive",value:"string"},required:!0}]}},{name:"createDefaultedVars",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"createDefaultedVars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"function",typeParameters:[{kind:"typeParameter",name:"T",constraint:{kind:"symbol",name:"DefaultedVarsShape",value:"DefaultedVarsShape"},required:!0},{kind:"typeParameter",name:"ID",defaultValue:{kind:"primitive",value:"never"},constraint:{kind:"primitive",value:"string"},required:!1}],parameters:[{kind:"parameter",name:"input",type:{kind:"generic",name:"T"},required:!0,rest:!1,description:"",declarations:[{name:"input",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"parameter",name:"id",type:{kind:"generic",name:"ID"},required:!1,rest:!1,description:"",declarations:[{name:"id",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}],members:[],returnType:{kind:"symbol",name:"DefaultedVars",value:"DefaultedVars<T, ID>"}}},{name:"ModifierReturn",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"ModifierReturn",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"type",typeParameters:[{kind:"typeParameter",name:"T",constraint:{kind:"symbol",name:"ModifierConfig",value:"ModifierConfig"},required:!0}],value:{kind:"intersection",value:[{kind:"generic",name:"T"},{kind:"symbol",name:"ModifierFn",value:"ModifierFn<T>"}]}}},{name:"createModifiers",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:`Creates a modifier function that takes in a modifier config and will return a CSS class name that
matches the result. Modifiers can be thought as \`if\` or \`switch\` statements when conditionally
changing the styles of a component based on props. This function can be thought of as a helper
function that makes it easier to work with modifiers. Without it, you would have to implement
if/switch/ternary for each option.

\`\`\`tsx
const myModifiers = createModifiers({
  // a modifier called 'size'
  size: {
    small: createStyles({ fontSize: 12 }),
    medium: createStyles({ fontSize: 14 })
  }
})

// with the modifier function
myModifiers({ size: 'medium' }) // returns the medium class name

// manually without the function
size === 'small' ? myModifiers.size.small : size === 'medium' ? myModifiers.size.medium : ''
\`\`\``,declarations:[{name:"createModifiers",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"function",typeParameters:[{kind:"typeParameter",name:"M",constraint:{kind:"symbol",name:"ModifierConfig",value:"ModifierConfig"},required:!0}],parameters:[{kind:"parameter",name:"input",type:{kind:"generic",name:"M"},required:!0,rest:!1,description:"",declarations:[{name:"input",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}],members:[],returnType:{kind:"symbol",name:"ModifierReturn",typeParameters:[{kind:"generic",name:"M"}],value:"ModifierReturn<T>"}}},{name:"CompoundModifier",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"CompoundModifier",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"object",properties:[{kind:"property",name:"modifiers",required:!0,type:{kind:"unknown",value:"unknown",text:"{[K in keyof M]?: keyof M[K]}"},description:"",declarations:[{name:"modifiers",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"styles",required:!0,type:{kind:"primitive",value:"string"},description:"",declarations:[{name:"styles",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}],typeParameters:[{kind:"typeParameter",name:"M",constraint:{kind:"symbol",name:"ModifierConfig",value:"ModifierConfig"},required:!0}]}},{name:"createCompoundModifiers",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:`Creates a compound modifier function that takes in a modifier config and a compound modifier
config and returns a space-delimited list of CSS class names to apply to an element. This
function is similar to the {@link createModifiers } function.

\`\`\`tsx
const myModifiers = createModifiers({
  size: {large: 'large'},
  position: {start: 'start'}
})

const myCompound = createCompoundModifiers(myModifiers, [
  {
    modifiers: {
      size: 'large',
      position: 'start'
    },
    styles: 'large-start'
  }
])

myCompound({size: 'large', position: 'start'}) // 'large-start'
myCompound({size: 'large'}) // ''
\`\`\``,declarations:[{name:"createCompoundModifiers",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"function",typeParameters:[{kind:"typeParameter",name:"M",constraint:{kind:"symbol",name:"ModifierConfig",value:"ModifierConfig"},required:!0}],parameters:[{kind:"parameter",name:"modifiers",type:{kind:"symbol",name:"ModifierReturn",typeParameters:[{kind:"generic",name:"M"}],value:"ModifierReturn<T>"},required:!0,rest:!1,description:"Modifiers created via `createModifiers`. The type will be extracted and applied to your\ncompound modifiers.",declarations:[{name:"modifiers",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"parameter",name:"compound",type:{kind:"array",value:{kind:"symbol",name:"CompoundModifier",typeParameters:[{kind:"generic",name:"M"}],value:"CompoundModifier<M>"}},required:!0,rest:!1,description:"",declarations:[{name:"compound",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}],members:[],returnType:{kind:"symbol",name:"ModifierFn",value:"ModifierFn<M>"}}},{name:"CSToPropsInput",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"All acceptable values of the `cs` prop. It can be a CSS class name, any CSS properties, an object\nwith a `className` and `styles`, or an array of these",declarations:[{name:"CSToPropsInput",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"type",typeParameters:[],value:{kind:"union",value:[{kind:"primitive",value:"undefined"},{kind:"symbol",name:"CS",value:"CS"},{kind:"symbol",name:"CsToPropsReturn",value:"CsToPropsReturn"},{kind:"symbol",name:"CSSObjectWithVars",value:"CSSObjectWithVars"},{kind:"array",value:{kind:"symbol",name:"CSToPropsInput",value:"CSToPropsInput"}}]}}},{name:"CsToPropsReturn",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"CsToPropsReturn",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"object",properties:[{kind:"property",name:"className",required:!1,type:{kind:"primitive",value:"string"},description:"",declarations:[{name:"className",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"style",required:!1,type:{kind:"symbol",name:"CSSObjectWithVars",value:"CSSObjectWithVars"},description:"",declarations:[{name:"style",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}]}},{name:"csToProps",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"A function that takes in a single input, or an array. The type of the input is either:\n\n- `string` - it represents a CSS class name\n- `undefined` - there is no value. This is provided for convenience for developers to not have to\n  filter out undefined\n- `{--{varName}-{hash}: {value}}` - a `Map` of CSS variable to values\n- `{style: ..., className: ...}` an object already returned by another `csToProps` function call\n  (for nesting)\n- An array containing any of the above. This will recurse over each entry to produce a single,\n  reduced `{style: ..., className: ...}` object",declarations:[{name:"csToProps",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{param:"input",returns:""},type:{kind:"function",parameters:[{kind:"parameter",name:"input",type:{kind:"symbol",name:"CSToPropsInput",value:"CSToPropsInput"},required:!1,rest:!1,description:"",declarations:[{name:"input",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{param:"input"}}],members:[],returnType:{kind:"symbol",name:"CsToPropsReturn",value:"CsToPropsReturn"}}},{name:"CSProps",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"CSProps",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"object",properties:[{kind:"property",name:"cs",required:!1,type:{kind:"symbol",name:"CSToPropsInput",value:"CSToPropsInput"},description:`The \`cs\` prop takes in a single value or an array of values. You can pass the CSS class name
returned by {@link createStyles }, or the result of {@link createVars } and
{@link createModifiers }. If you're extending a component already using \`cs\`, you can merge that
prop in as well. Any style that is passed to the \`cs\` prop will override style props. If you
wish to have styles that are overridden by the \`css\` prop, or styles added via the \`styled\`
API, use {@link handleCsProp } wherever \`elemProps\` is used. If your component needs to also
handle style props, use {@link mergeStyles} instead.


\`\`\`tsx
import {handleCsProp} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

// ...

// \`handleCsProp\` handles compat mode with Emotion's runtime APIs. \`mergeStyles\` has the same
// function signature, but adds support for style props.

return (
 <Element
   {...handleCsProp(elemProps, [
     myStyles,
     myModifiers({ size: 'medium' }),
     myVars({ backgroundColor: 'red' })
   ])}
 >
   {children}
 </Element>
)
\`\`\``,declarations:[{name:"cs",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}]}},{name:"createStyles",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:`Creates CSS styles based on object-style input. It has a side-effect of adding CSS to the page
and will return a space-delimitated string of CSS class names meant to be added to an element.

It can take a number of inputs of various types. The simplest is object-styles.

\`\`\`ts
const myStyles = createStyles({
  backgroundColor: 'red'
})
\`\`\`

The \`createStyles\` function is curried into 2 parts. The first function could be done at build
time. The returned function combines CSS class names and will remain as a small runtime.

> **Note:** The order of calling \`createStyles\` is important. Each call will make a single CSS
> class selector and will be injected into the document's
> [StyleSheetList](https://developer.mozilla.org/en-US/docs/Web/API/StyleSheetList). Style
> properties will be merge by the rules of [CSS
> specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity). If two selectors
> have the same specificity, the last defined wins. Always make sure that the properties you want
> to win are last in your file.`,declarations:[{name:"createStyles",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"function",parameters:[{kind:"parameter",name:"args",type:{kind:"array",value:{kind:"parenthesis",value:{kind:"union",value:[{kind:"object",properties:[{kind:"property",name:"name",required:!0,type:{kind:"primitive",value:"string"},description:"",declarations:[{name:"name",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"styles",required:!0,type:{kind:"primitive",value:"string"},description:"",declarations:[{name:"styles",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}]},{kind:"symbol",name:"StyleProps",value:"StyleProps"},{kind:"primitive",value:"string"}]}}},required:!0,rest:!0,description:"",declarations:[{name:"args",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}],members:[],returnType:{kind:"primitive",value:"string"}}},{name:"handleCsProp",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:`This function handles the \`cs\` prop for you, as well as local styles you want to define. It will
force style merging with Emotion's runtime APIs, including [styled
components](https://emotion.sh/docs/styled) and the [css prop](https://emotion.sh/docs/css-prop).

Runtime style merging works by forcing Emotion's styling merging if use of runtime APIs have been
detected. If only \`createStyles\` were used to style a component, the faster non-runtime styling
will be used.

You can use \`handleCsProp\` if you wish to use {@link createStyles } on your own components and want
your components to be compatible with Emotion's runtime styling APIs.

\`\`\`tsx
import {createStyles, handleCsProp, CSProps} from '@workday/canvas-kit-styling';

interface MyComponentProps extends CSProps {
  // other props
}

const myStyles = createStyles({
  background: 'green',
  height: 40,
  width: 40
})

const MyComponent = ({children, ...elemProps}: MyComponentProps) => {
  return (
    <div
      {...handleCsProp(elemProps, [myStyles])}
    >
      {children}
    </div>
  )
}

const StyledMyComponent(MyComponent)({
  background: 'red'
})

const myOverridingStyles = createStyles({
  background: 'blue'
})

// now everything works. Without \`handleCsProp\`, the last component would be a red box
export default () => (
  <>
    <MyComponent>Green box</MyComponent>
    <StyledMyComponent>Red box</StyledMyComponent>
    <StyledMyComponent cs={myOverridingStyles}>Blue box</StyledMyComponent>
  </>
)
\`\`\``,declarations:[{name:"handleCsProp",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"function",typeParameters:[{kind:"typeParameter",name:"T",constraint:{kind:"intersection",value:[{kind:"symbol",name:"CSProps",value:"CSProps"},{kind:"object",properties:[{kind:"property",name:"className",required:!1,type:{kind:"union",value:[{kind:"primitive",value:"string"},{kind:"primitive",value:"undefined"}]},description:"",declarations:[{name:"className",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"style",required:!1,type:{kind:"union",value:[{kind:"symbol",name:"CSS.Properties",typeParameters:[{kind:"union",value:[{kind:"primitive",value:"string"},{kind:"primitive",value:"number"}]}],value:"Properties<TLength, TTime>"},{kind:"primitive",value:"undefined"}]},description:"",declarations:[{name:"style",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}]}]},required:!0}],parameters:[{kind:"parameter",name:"elemProps",type:{kind:"generic",name:"T"},required:!0,rest:!1,description:"All the props to be spread onto an element. The `cs` prop will be removed an reduced to\n`className` and `style` props which should be safe on every element.",declarations:[{name:"elemProps",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"parameter",name:"localCs",type:{kind:"symbol",name:"CSToPropsInput",value:"CSToPropsInput"},required:!1,rest:!1,description:"Optional local style created by `createStyles`. Using this parameter, you can style your\nelement while supporting proper style merging order.",declarations:[{name:"localCs",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}],members:[],returnType:{kind:"symbol",name:"Omit",typeParameters:[{kind:"generic",name:"T"},{kind:"string",value:"cs"}],value:"Omit<T, K>"}}},{name:"StencilModifierConfig",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"StencilModifierConfig",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"type",typeParameters:[{kind:"typeParameter",name:"P",constraint:{kind:"external",name:"Record",url:"https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type",typeParameters:[{kind:"primitive",value:"string"},{kind:"primitive",value:"string"}]},required:!0},{kind:"typeParameter",name:"V",defaultValue:{kind:"object",properties:[]},constraint:{kind:"symbol",name:"DefaultedVarsShape",value:"DefaultedVarsShape"},required:!1},{kind:"typeParameter",name:"E",defaultValue:{kind:"primitive",value:"never"},constraint:{kind:"symbol",name:"BaseStencil",typeParameters:[{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"}],value:"BaseStencil<M, P, V, E, ID>"},required:!1}],value:{kind:"external",name:"Record",url:"https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type",typeParameters:[{kind:"primitive",value:"string"},{kind:"external",name:"Record",url:"https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type",typeParameters:[{kind:"primitive",value:"string"},{kind:"symbol",name:"StylesReturn",value:"StylesReturn<P, V, E>"}]}]}}},{name:"StencilCompoundConfig",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"StencilCompoundConfig",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"object",properties:[{kind:"property",name:"modifiers",required:!0,type:{kind:"conditional",check:{kind:"tuple",value:[{kind:"generic",name:"E"}]},extends:{kind:"tuple",value:[{kind:"primitive",value:"never"}]},trueType:{kind:"symbol",name:"MappedBoolean",typeParameters:[{kind:"generic",name:"M"}],value:"MappedBoolean<T>"},falseType:{kind:"conditional",check:{kind:"tuple",value:[{kind:"generic",name:"E"}]},extends:{kind:"tuple",value:[{kind:"symbol",name:"BaseStencil",typeParameters:[{kind:"infer",value:{kind:"typeParameter",name:"ME",required:!0}},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"}],value:"BaseStencil<M, P, V, E, ID>"}]},trueType:{kind:"symbol",name:"MappedBoolean",typeParameters:[{kind:"intersection",value:[{kind:"generic",name:"ME"},{kind:"generic",name:"M"}]}],value:"MappedBoolean<T>"},falseType:{kind:"primitive",value:"never"}}},description:"",declarations:[{name:"modifiers",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"styles",required:!0,type:{kind:"symbol",name:"StylesReturn",value:"StylesReturn<P, V, E>"},description:"",declarations:[{name:"styles",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}],typeParameters:[{kind:"typeParameter",name:"M",required:!0},{kind:"typeParameter",name:"P",constraint:{kind:"external",name:"Record",url:"https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type",typeParameters:[{kind:"primitive",value:"string"},{kind:"primitive",value:"string"}]},required:!0},{kind:"typeParameter",name:"V",defaultValue:{kind:"object",properties:[]},constraint:{kind:"symbol",name:"DefaultedVarsShape",value:"DefaultedVarsShape"},required:!1},{kind:"typeParameter",name:"E",defaultValue:{kind:"primitive",value:"never"},constraint:{kind:"symbol",name:"BaseStencil",typeParameters:[{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"}],value:"BaseStencil<M, P, V, E, ID>"},required:!1}]}},{name:"MappedBoolean",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"MappedBoolean",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"type",typeParameters:[{kind:"typeParameter",name:"T",required:!0}],value:{kind:"unknown",value:"unknown",text:"{[K in keyof T]?: MaybeBoolean<keyof T[K]>}"}}},{name:"StencilConfig",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"StencilConfig",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"object",properties:[{kind:"property",name:"extends",required:!1,type:{kind:"generic",name:"E"},description:`A Stencil can extend another stencil. Styles are not copied from one stencil to another, but
rather the class name generated for each stencil will be included in the stencil output. For
example:

\`\`\`ts
const baseStencil = createStencil({
  base: {padding: 5}
});
const extendingStencil = createStencil({
  extends: baseStencil,
  base: {margin: 5}
});
\`\`\`

In this example, \`extendingStencil\` does not have a base style that includes \`padding\`, but
calling the stencil will return both style classes created:

\`\`\`ts
extendingStencil() // {className: 'css-{base} css-{extending}'}
\`\`\`

Notice when the stencil is called, it will return the CSS class name of each stencil.

An extending stencil can use a \`compound\` modifier that includes references to the base stencil
modifiers. For runtime, each compound modifier has a unique class name. The static CSS
extraction will use the base modifier name in the selector.`,declarations:[{name:"extends",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"parts",required:!1,type:{kind:"generic",name:"P"},description:`A Stencil supports sub-elements called "parts". A part is modelled after the
[::part()](https://developer.mozilla.org/en-US/docs/Web/CSS/::part) specification for shadow
trees in web components. A part refers to a sub-element for styling purposes. Compound
components should allow direct access to each semantic element, but sometimes a semantic
element needs to contain sub-elements that are not semantic for styling purposes. A part is a
style hook for these elements. A part allows for an explicit API for styling these elements so
that style overriding doesn't need complicated CSS selectors to target them. The part API is a
convenient wrapper to avoid magic stings. A part key should be short and descriptive - it
represents the JS name of the part. The value should be more descriptive since it will become
part of a CSS selector. For example, if the part key is "separator", the value should describe
what stencil the separator belongs to. A unique name avoids naming collisions. If a
\`cardStencil\` has a \`separator\` part and an \`inputStencil\` has a \`separator\` part, the value of
each should be \`card-separator\` and \`input-separator\` respectively. If you do not uniquely set
values, you can get unwanted CSS selector matching where the \`inputStencil\`'s part matches the
CSS of the \`cardStencil\` if a \`Card\` component contains an \`Input\` component.

\`\`\`ts
const myButtonStencil = createStencil({
  parts: {
    icon: 'my-button-icon',
    label: 'my-button-label'
  },
  base: ({iconPart}) => ({
    padding: 10,
    // other base styles

    [iconPart]: { // '[data-part="my-icon"]'
      // icon part styles
    },
    ':hover': {
      // hover base styles
      [iconPart]: {
        // hover styles for icon part
      }
    },
  })
})

The part can then be used in a component's render function.
const MyComponent = ({children, ...elemProps}) => {
  return (
    <button {...handleCsProp(elemProps, myButtonStencil())}>
      <i {...myButtonStencil.parts.icon} />
      <span {...myButtonStencil.parts.label}>{children}</span>
    </button>
  )
}
\`\`\``,declarations:[{name:"parts",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"vars",required:!1,type:{kind:"generic",name:"V"},description:`A Stencil can support CSS variables. Since CSS variables cascade by default, variables are
defined with defaults. These defaults are added automatically to the \`base\` styles to prevent
CSS variables defined higher in the DOM tree from cascading into a component.

\`\`\`ts
const buttonStencil = createStencil({
  vars: {color: 'red'},
  base: {padding: 5}
})
\`\`\`

\`\`\`css
.css-button {
  --css-button-color: red;
  padding: 5px;
}
\`\`\`

Access to variables in \`base\` and \`modifiers\` is done via a function wrapper that gives
all variables.

\`\`\`ts
const buttonStencil = createStyles({
  vars: {color: 'red'},
  base({color}) {
    return {color: color}
  }
})
\`\`\`

\`\`\`css
.css-button {
  --color-button: red;
  color: var(--color-button);
}
\`\`\``,declarations:[{name:"vars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"base",required:!0,type:{kind:"symbol",name:"StylesReturn",value:"StylesReturn<P, V, E>"},description:"Base styles. These styles will always be returned when the stencil is called",declarations:[{name:"base",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"modifiers",required:!1,type:{kind:"generic",name:"M"},description:`Stencil modifiers. The styles of a modifier are returned if the stencil is called with a
modifier key that matches the modifier value. For example:

\`\`\`tsx
const stencil = createStencil({
  base: {
    padding: 5,
  },
  modifiers: {
    size: {
      large: {
        padding: 10
      }
    }
  }
})

stencil({}) // padding is 5px
stencil({size: 'large'}) // padding is 10px
\`\`\``,declarations:[{name:"modifiers",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"compound",required:!1,type:{kind:"array",value:{kind:"symbol",name:"StencilCompoundConfig",typeParameters:[{kind:"generic",name:"M"},{kind:"generic",name:"P"},{kind:"generic",name:"V"},{kind:"generic",name:"E"}],value:"StencilCompoundConfig<M, P, V, E>"}},description:`Stencil compound modifiers. The styles of a compound modifier are returned only if each modifier
matches the specified value. For example:

\`\`\`tsx
const stencil = createStencil({
  base: {
    padding: 5,
  },
  modifiers: {
    size: {
      large: {
        padding: 10
      }
    },
    position: {
      start: {
        paddingInlineStart: 0
      }
    }
  },
  compound: [
    {
      modifiers: {
        size: 'large',
        position: 'start',
      },
      styles: {
        paddingInlineStart: 5
      }
    }
  ]
})

stencil({})
// {padding: 5px;}
stencil({size: 'large'})
// {padding: 10px;}
stencil({position: 'start' })
// {padding: 5px; paddingInlineStart: 0}
stencil({size: 'large', position: 'start' })
// {padding: 10px; paddingInlineStart: 5px;}
\`\`\``,declarations:[{name:"compound",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"defaultModifiers",required:!1,type:{kind:"conditional",check:{kind:"tuple",value:[{kind:"generic",name:"E"}]},extends:{kind:"tuple",value:[{kind:"primitive",value:"never"}]},trueType:{kind:"symbol",name:"StencilDefaultModifierReturn",value:"StencilDefaultModifierReturn<M>"},falseType:{kind:"conditional",check:{kind:"generic",name:"E"},extends:{kind:"symbol",name:"BaseStencil",typeParameters:[{kind:"infer",value:{kind:"typeParameter",name:"ME",required:!0}},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"}],value:"BaseStencil<M, P, V, E, ID>"},trueType:{kind:"symbol",name:"StencilDefaultModifierReturn",typeParameters:[{kind:"intersection",value:[{kind:"generic",name:"ME"},{kind:"generic",name:"M"}]}],value:"StencilDefaultModifierReturn<M>"},falseType:{kind:"primitive",value:"undefined"}}},description:"Modifiers are optional. If you need a modifier to always be defined, a default modifier value\nwill be used when a modifier is `undefined`",declarations:[{name:"defaultModifiers",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}],typeParameters:[{kind:"typeParameter",name:"M",constraint:{kind:"external",name:"Record",url:"https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type",typeParameters:[{kind:"primitive",value:"string"},{kind:"external",name:"Record",url:"https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type",typeParameters:[{kind:"primitive",value:"string"},{kind:"symbol",name:"StylesReturn",typeParameters:[{kind:"generic",name:"P"},{kind:"generic",name:"V"},{kind:"generic",name:"E"}],value:"StylesReturn<P, V, E>"}]}]},required:!0},{kind:"typeParameter",name:"P",defaultValue:{kind:"object",properties:[]},constraint:{kind:"external",name:"Record",url:"https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type",typeParameters:[{kind:"primitive",value:"string"},{kind:"primitive",value:"string"}]},required:!1},{kind:"typeParameter",name:"V",defaultValue:{kind:"object",properties:[]},constraint:{kind:"symbol",name:"DefaultedVarsShape",value:"DefaultedVarsShape"},required:!1},{kind:"typeParameter",name:"E",defaultValue:{kind:"primitive",value:"never"},constraint:{kind:"symbol",name:"BaseStencil",typeParameters:[{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"}],value:"BaseStencil<M, P, V, E, ID>"},required:!1},{kind:"typeParameter",name:"ID",defaultValue:{kind:"primitive",value:"never"},constraint:{kind:"union",value:[{kind:"primitive",value:"string"},{kind:"primitive",value:"never"}]},required:!1}]}},{name:"BaseStencil",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"BaseStencil",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"object",properties:[{kind:"property",name:"__extends",required:!1,type:{kind:"generic",name:"E"},description:"",declarations:[{name:"__extends",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"__vars",required:!0,type:{kind:"generic",name:"V"},description:"",declarations:[{name:"__vars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"__modifiers",required:!0,type:{kind:"generic",name:"M"},description:"",declarations:[{name:"__modifiers",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"__id",required:!0,type:{kind:"generic",name:"ID"},description:"",declarations:[{name:"__id",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"__parts",required:!1,type:{kind:"generic",name:"P"},description:"",declarations:[{name:"__parts",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}],typeParameters:[{kind:"typeParameter",name:"M",defaultValue:{kind:"object",properties:[]},constraint:{kind:"symbol",name:"StencilModifierConfig",typeParameters:[{kind:"generic",name:"P"},{kind:"generic",name:"V"}],value:"StencilModifierConfig<P, V, E>"},required:!1},{kind:"typeParameter",name:"P",defaultValue:{kind:"object",properties:[]},constraint:{kind:"external",name:"Record",url:"https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type",typeParameters:[{kind:"primitive",value:"string"},{kind:"primitive",value:"string"}]},required:!1},{kind:"typeParameter",name:"V",defaultValue:{kind:"object",properties:[]},constraint:{kind:"symbol",name:"DefaultedVarsShape",value:"DefaultedVarsShape"},required:!1},{kind:"typeParameter",name:"E",defaultValue:{kind:"primitive",value:"never"},constraint:{kind:"symbol",name:"BaseStencil",typeParameters:[{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"}],value:"BaseStencil<M, P, V, E, ID>"},required:!1},{kind:"typeParameter",name:"ID",defaultValue:{kind:"primitive",value:"never"},constraint:{kind:"primitive",value:"string"},required:!1}]}},{name:"Stencil",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"Stencil",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"object",properties:[{kind:"property",name:"parts",required:!0,type:{kind:"conditional",check:{kind:"tuple",value:[{kind:"generic",name:"E"}]},extends:{kind:"tuple",value:[{kind:"symbol",name:"BaseStencil",typeParameters:[{kind:"primitive",value:"any"},{kind:"infer",value:{kind:"typeParameter",name:"PE",required:!0}},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"}],value:"BaseStencil<M, P, V, E, ID>"}]},trueType:{kind:"symbol",name:"StencilPartProps",typeParameters:[{kind:"intersection",value:[{kind:"generic",name:"PE"},{kind:"generic",name:"P"}]}],value:"StencilPartProps<T>"},falseType:{kind:"symbol",name:"StencilPartProps",typeParameters:[{kind:"generic",name:"P"}],value:"StencilPartProps<T>"}},description:"",declarations:[{name:"parts",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"vars",required:!0,type:{kind:"generic",name:"StencilDefaultVars"},description:"",declarations:[{name:"vars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"base",required:!0,type:{kind:"primitive",value:"string"},description:"",declarations:[{name:"base",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"modifiers",required:!0,type:{kind:"conditional",check:{kind:"tuple",value:[{kind:"generic",name:"E"}]},extends:{kind:"tuple",value:[{kind:"symbol",name:"BaseStencil",typeParameters:[{kind:"infer",value:{kind:"typeParameter",name:"ME",required:!0}},{kind:"primitive",value:"any"},{kind:"infer",value:{kind:"typeParameter",name:"VE",required:!0}},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"}],value:"BaseStencil<M, P, V, E, ID>"}]},trueType:{kind:"symbol",name:"StencilModifierReturn",value:"StencilModifierReturn<ME & M, VE & V>"},falseType:{kind:"symbol",name:"StencilModifierReturn",typeParameters:[{kind:"generic",name:"M"},{kind:"generic",name:"V"}],value:"StencilModifierReturn<M, V>"}},description:"",declarations:[{name:"modifiers",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"defaultModifiers",required:!0,type:{kind:"conditional",check:{kind:"tuple",value:[{kind:"generic",name:"E"}]},extends:{kind:"tuple",value:[{kind:"symbol",name:"BaseStencil",typeParameters:[{kind:"infer",value:{kind:"typeParameter",name:"ME",required:!0}},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"}],value:"BaseStencil<M, P, V, E, ID>"}]},trueType:{kind:"symbol",name:"StencilDefaultModifierReturn",value:"StencilDefaultModifierReturn<ME & M>"},falseType:{kind:"symbol",name:"StencilDefaultModifierReturn",typeParameters:[{kind:"generic",name:"M"}],value:"StencilDefaultModifierReturn<M>"}},description:"",declarations:[{name:"defaultModifiers",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"__extends",required:!1,type:{kind:"generic",name:"E"},description:"",declarations:[{name:"__extends",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"__vars",required:!0,type:{kind:"generic",name:"V"},description:"",declarations:[{name:"__vars",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"__modifiers",required:!0,type:{kind:"generic",name:"M"},description:"",declarations:[{name:"__modifiers",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"__id",required:!0,type:{kind:"generic",name:"ID"},description:"",declarations:[{name:"__id",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"__parts",required:!1,type:{kind:"generic",name:"P"},description:"",declarations:[{name:"__parts",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}],typeParameters:[{kind:"typeParameter",name:"M",defaultValue:{kind:"object",properties:[]},constraint:{kind:"symbol",name:"StencilModifierConfig",typeParameters:[{kind:"generic",name:"P"},{kind:"generic",name:"V"},{kind:"generic",name:"E"}],value:"StencilModifierConfig<P, V, E>"},required:!1},{kind:"typeParameter",name:"P",defaultValue:{kind:"object",properties:[]},constraint:{kind:"external",name:"Record",url:"https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type",typeParameters:[{kind:"primitive",value:"string"},{kind:"primitive",value:"string"}]},required:!1},{kind:"typeParameter",name:"V",defaultValue:{kind:"object",properties:[]},constraint:{kind:"symbol",name:"DefaultedVarsShape",value:"DefaultedVarsShape"},required:!1},{kind:"typeParameter",name:"E",defaultValue:{kind:"primitive",value:"never"},constraint:{kind:"symbol",name:"BaseStencil",typeParameters:[{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"}],value:"BaseStencil<M, P, V, E, ID>"},required:!1},{kind:"typeParameter",name:"ID",defaultValue:{kind:"primitive",value:"never"},constraint:{kind:"primitive",value:"string"},required:!1}]}},{name:"parentModifier",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:`This function is used in conjunction with Stencils to get a selector to match the current element
and a parent modifier. The selector will match a parent element with a modifier applied and the current
element. It should be used on the \`base\` config of a Stencil.

\`\`\`ts
const childStencil = createStencil({
  base: {
    // base styles
    [parentModifier(parentStencil.modifiers.size.large)]: {
      // maybe adjust padding of this element
    }
  }
})
\`\`\``,declarations:[{name:"parentModifier",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{deprecated:"`parentModifier` is deprecated. While we support compat mode, we can't use `parentModifier`. If consumers pass in a style prop, this will created an unstable hash, breaking this function."},type:{kind:"function",parameters:[{kind:"parameter",name:"value",type:{kind:"primitive",value:"string"},required:!0,rest:!1,description:"",declarations:[{name:"value",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}],members:[],returnType:{kind:"primitive",value:"string"}}},{name:"StencilVarsParts",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"StencilVarsParts",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"type",typeParameters:[{kind:"typeParameter",name:"T",required:!0}],value:{kind:"unknown",value:"unknown",text:"{\n  [K in keyof T as `${K & string}${Capitalize<'Part'>}`]: `[data-part=\"${T[K] & string}\"]`;\n}"}}},{name:"StencilPartProps",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"",declarations:[{name:"StencilPartProps",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"type",typeParameters:[{kind:"typeParameter",name:"T",required:!0}],value:{kind:"unknown",value:"unknown",text:`{
  [K in keyof T]: {'data-part': T[K]};
}`}}},{name:"createStencil",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:`Creates a reuseable Stencil for styling elements. It takes vars, base styles, modifiers, and
compound modifiers.`,declarations:[{name:"createStencil",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"function",typeParameters:[{kind:"typeParameter",name:"M",constraint:{kind:"symbol",name:"StencilModifierConfig",typeParameters:[{kind:"generic",name:"P"},{kind:"generic",name:"V"},{kind:"generic",name:"E"}],value:"StencilModifierConfig<P, V, E>"},required:!0},{kind:"typeParameter",name:"P",defaultValue:{kind:"object",properties:[]},constraint:{kind:"external",name:"Record",url:"https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type",typeParameters:[{kind:"primitive",value:"string"},{kind:"primitive",value:"string"}]},required:!1},{kind:"typeParameter",name:"V",defaultValue:{kind:"object",properties:[]},constraint:{kind:"symbol",name:"DefaultedVarsShape",value:"DefaultedVarsShape"},required:!1},{kind:"typeParameter",name:"E",defaultValue:{kind:"primitive",value:"never"},constraint:{kind:"symbol",name:"BaseStencil",typeParameters:[{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"},{kind:"primitive",value:"any"}],value:"BaseStencil<M, P, V, E, ID>"},required:!1},{kind:"typeParameter",name:"ID",defaultValue:{kind:"primitive",value:"never"},constraint:{kind:"primitive",value:"string"},required:!1}],parameters:[{kind:"parameter",name:"config",type:{kind:"symbol",name:"StencilConfig",typeParameters:[{kind:"generic",name:"M"},{kind:"generic",name:"P"},{kind:"generic",name:"V"},{kind:"generic",name:"E"},{kind:"generic",name:"ID"}],value:"StencilConfig<M, P, V, E, ID>"},required:!0,rest:!1,description:"",declarations:[{name:"config",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"parameter",name:"id",type:{kind:"generic",name:"ID"},required:!1,rest:!1,description:"",declarations:[{name:"id",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}],members:[],returnType:{kind:"symbol",name:"Stencil",typeParameters:[{kind:"generic",name:"M"},{kind:"generic",name:"P"},{kind:"generic",name:"V"},{kind:"generic",name:"E"},{kind:"generic",name:"ID"}],value:"Stencil<M, P, V, E, ID>"}}},{name:"getInstance",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"Gets the current Emotion CSS instance, falling back to the one from `@emotion/css` if one wasn't\nalready created. This allows a custom cache to be created as an opt-in",declarations:[{name:"getInstance",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"function",parameters:[],members:[],returnType:{kind:"symbol",name:"_createInstance"}}},{name:"createInstance",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:`Creates a custom instance of Emotion CSS. If this function is never called, the instance will be
what gets imported from \`@emotion/css\`. This function must be called before any Canvas Kit
component is imported or before any other \`@workday/canvas-kit-styling\` function is called. All
the style utility functions need an instance and will automatically create one if one isn't
already created.

The style utilities inject styles as soon as they are called which means an instance needs to be
created before any Canvas Kit components are even imported. Your application bootstrap must
import a file that imports \`@workday/canvas-kit-styling\` and calls \`createInstance\` _before_ any
other Canvas Kit components are imported.`,declarations:[{name:"createInstance",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"symbol",name:"_createInstance",value:"(options?: Options | undefined) => Emotion"}},{name:"getCache",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"Returns the cache used by all style utilities",declarations:[{name:"getCache",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"function",parameters:[],members:[],returnType:{kind:"symbol",name:"EmotionCache",value:"EmotionCache"}}},{name:"keyframes",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"Create static keyframes. Use as a drop-in replacement to `keyframes` found in `@emotion/css` or\n`@emotion/react`",declarations:[{name:"keyframes",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"function",typeParameters:[{kind:"typeParameter",name:"ID",constraint:{kind:"primitive",value:"string"},required:!0}],parameters:[{kind:"parameter",name:"args",type:{kind:"array",value:{kind:"parenthesis",value:{kind:"union",value:[{kind:"object",properties:[{kind:"property",name:"name",required:!0,type:{kind:"generic",name:"ID"},description:"",declarations:[{name:"name",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}},{kind:"property",name:"styles",required:!0,type:{kind:"primitive",value:"string"},description:"",declarations:[{name:"styles",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}]},{kind:"symbol",name:"StyleProps",value:"StyleProps"},{kind:"symbol",name:"TemplateStringsArray",value:"TemplateStringsArray"}]}}},required:!0,rest:!0,description:"",declarations:[{name:"args",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{}}],members:[],returnType:{kind:"generic",name:"ID"}}},{name:"injectGlobal",fileName:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts",description:"Allows injecting of global styles.",declarations:[{name:"injectGlobal",filePath:"/home/runner/work/canvas-kit/canvas-kit/modules/styling/lib/cs.ts"}],tags:{},type:{kind:"symbol",name:"EmotionCSS.injectGlobal",value:"{ (template: TemplateStringsArray, ...args: CSSInterpolation[]): void; (...args: CSSInterpolation[]): void; }"}}];window.__updateDocs?window.__updateDocs?.(be):window.__docs=(window.__docs||[]).concat(be);export{Gn as a,Dn as b,ae as c,sn as d,_e as e,jn as f,Kn as g,Ln as h,pn as i,Fn as j,$n as k,Mn as m,Y as s,Z as w};
