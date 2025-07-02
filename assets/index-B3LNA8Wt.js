var Ln=Object.defineProperty;var On=(t,u,d)=>u in t?Ln(t,u,{enumerable:!0,configurable:!0,writable:!0,value:d}):t[u]=d;var Fn=(t,u)=>()=>(u||t((u={exports:{}}).exports,u),u.exports);var fe=(t,u,d)=>On(t,typeof u!="symbol"?u+"":u,d);var va=Fn((_a,Pe)=>{(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))n(c);new MutationObserver(c=>{for(const g of c)if(g.type==="childList")for(const P of g.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&n(P)}).observe(document,{childList:!0,subtree:!0});function d(c){const g={};return c.integrity&&(g.integrity=c.integrity),c.referrerPolicy&&(g.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?g.credentials="include":c.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function n(c){if(c.ep)return;c.ep=!0;const g=d(c);fetch(c.href,g)}})();let In=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},D=function(t){var u=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,n={},c={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function S(b){return b instanceof g?new g(b.type,S(b.content),b.alias):Array.isArray(b)?b.map(S):b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(S){return Object.prototype.toString.call(S).slice(8,-1)},objId:function(S){return S.__id||Object.defineProperty(S,"__id",{value:++d}),S.__id},clone:function S(b,w){let _,x;switch(w=w||{},c.util.type(b)){case"Object":if(x=c.util.objId(b),w[x])return w[x];for(let j in _={},w[x]=_,b)b.hasOwnProperty(j)&&(_[j]=S(b[j],w));return _;case"Array":return x=c.util.objId(b),w[x]?w[x]:(_=[],w[x]=_,b.forEach(function(j,O){_[O]=S(j,w)}),_);default:return b}},getLanguage:function(S){for(;S;){let b=u.exec(S.className);if(b)return b[1].toLowerCase();S=S.parentElement}return"none"},setLanguage:function(S,b){S.className=S.className.replace(RegExp(u,"gi"),""),S.classList.add("language-"+b)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(S){let b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(S.stack)||[])[1];if(b){let w=document.getElementsByTagName("script");for(let _ in w)if(w[_].src==b)return w[_]}return null}},isActive:function(S,b,w){for(let _="no-"+b;S;){let x=S.classList;if(x.contains(b))return!0;if(x.contains(_))return!1;S=S.parentElement}return!!w}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(S,b){let w=c.util.clone(c.languages[S]);for(let _ in b)w[_]=b[_];return w},insertBefore:function(S,b,w,_){let x=(_=_||c.languages)[S],j={};for(let e in x)if(x.hasOwnProperty(e)){if(e==b)for(let r in w)w.hasOwnProperty(r)&&(j[r]=w[r]);w.hasOwnProperty(e)||(j[e]=x[e])}let O=_[S];return _[S]=j,c.languages.DFS(c.languages,function(e,r){r===O&&e!=S&&(this[e]=j)}),j},DFS:function S(b,w,_,x){x=x||{};let j=c.util.objId;for(let O in b)if(b.hasOwnProperty(O)){w.call(b,O,b[O],_||O);let e=b[O],r=c.util.type(e);r!=="Object"||x[j(e)]?r!=="Array"||x[j(e)]||(x[j(e)]=!0,S(e,w,O,x)):(x[j(e)]=!0,S(e,w,null,x))}}},plugins:{},highlightAll:function(S,b){c.highlightAllUnder(document,S,b)},highlightAllUnder:function(S,b,w){let _={callback:w,container:S,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};c.hooks.run("before-highlightall",_),_.elements=Array.prototype.slice.apply(_.container.querySelectorAll(_.selector)),c.hooks.run("before-all-elements-highlight",_);for(var x,j=0;x=_.elements[j++];)c.highlightElement(x,b===!0,_.callback)},highlightElement:function(S,b,w){let _=c.util.getLanguage(S),x=c.languages[_];c.util.setLanguage(S,_);let j=S.parentElement;j&&j.nodeName.toLowerCase()==="pre"&&c.util.setLanguage(j,_);let O={element:S,language:_,grammar:x,code:S.textContent};function e(r){O.highlightedCode=r,c.hooks.run("before-insert",O),O.element.innerHTML=O.highlightedCode,c.hooks.run("after-highlight",O),c.hooks.run("complete",O),w&&w.call(O.element)}if(c.hooks.run("before-sanity-check",O),(j=O.element.parentElement)&&j.nodeName.toLowerCase()==="pre"&&!j.hasAttribute("tabindex")&&j.setAttribute("tabindex","0"),!O.code)return c.hooks.run("complete",O),void(w&&w.call(O.element));if(c.hooks.run("before-highlight",O),O.grammar)if(b&&t.Worker){let r=new Worker(c.filename);r.onmessage=function(a){e(a.data)},r.postMessage(JSON.stringify({language:O.language,code:O.code,immediateClose:!0}))}else e(c.highlight(O.code,O.grammar,O.language));else e(c.util.encode(O.code))},highlight:function(S,b,w){let _={code:S,grammar:b,language:w};if(c.hooks.run("before-tokenize",_),!_.grammar)throw new Error('The language "'+_.language+'" has no grammar.');return _.tokens=c.tokenize(_.code,_.grammar),c.hooks.run("after-tokenize",_),g.stringify(c.util.encode(_.tokens),_.language)},tokenize:function(S,b){let w=b.rest;if(w){for(let x in w)b[x]=w[x];delete b.rest}let _=new M;return k(_,_.head,S),T(S,_,b,_.head,0),function(x){for(var j=[],O=x.head.next;O!==x.tail;)j.push(O.value),O=O.next;return j}(_)},hooks:{all:{},add:function(S,b){let w=c.hooks.all;w[S]=w[S]||[],w[S].push(b)},run:function(S,b){let w=c.hooks.all[S];if(w&&w.length)for(var _,x=0;_=w[x++];)_(b)}},Token:g};function g(S,b,w,_){this.type=S,this.content=b,this.alias=w,this.length=0|(_||"").length}function P(S,b,w,_){S.lastIndex=b;let x=S.exec(w);if(x&&_&&x[1]){let j=x[1].length;x.index+=j,x[0]=x[0].slice(j)}return x}function T(S,b,w,_,x,j){for(let o in w)if(w.hasOwnProperty(o)&&w[o]){let f=w[o];f=Array.isArray(f)?f:[f];for(let s=0;s<f.length;++s){if(j&&j.cause==o+","+s)return;let p=f[s],m=p.inside,y=!!p.lookbehind,A=!!p.greedy,E=p.alias;if(A&&!p.pattern.global){let l=p.pattern.toString().match(/[imsuy]*$/)[0];p.pattern=RegExp(p.pattern.source,l+"g")}for(let l=p.pattern||p,C=_.next,L=x;C!==b.tail&&!(j&&L>=j.reach);L+=C.value.length,C=C.next){let R=C.value;if(b.length>S.length)return;if(!(R instanceof g)){var O,e=1;if(A){if(!(O=P(l,L,S,y))||O.index>=S.length)break;var r=O.index,a=O.index+O[0].length,i=L;for(i+=C.value.length;r>=i;)i+=(C=C.next).value.length;if(L=i-=C.value.length,C.value instanceof g)continue;for(let v=C;v!==b.tail&&(i<a||typeof v.value=="string");v=v.next)e++,i+=v.value.length;e--,R=S.slice(L,i),O.index-=L}else if(!(O=P(l,0,R,y)))continue;r=O.index;let U=O[0],$=R.slice(0,r),X=R.slice(r+U.length),Q=L+R.length;j&&Q>j.reach&&(j.reach=Q);let K=C.prev;if($&&(K=k(b,K,$),L+=$.length),I(b,K,e),C=k(b,K,new g(o,m?c.tokenize(U,m):U,E,U)),X&&k(b,C,X),e>1){let v={cause:o+","+s,reach:Q};T(S,b,w,C.prev,L,v),j&&v.reach>j.reach&&(j.reach=v.reach)}}}}}}function M(){let S={value:null,prev:null,next:null},b={value:null,prev:S,next:null};S.next=b,this.head=S,this.tail=b,this.length=0}function k(S,b,w){let _=b.next,x={value:w,prev:b,next:_};return b.next=x,_.prev=x,S.length++,x}function I(S,b,w){for(var _=b.next,x=0;x<w&&_!==S.tail;x++)_=_.next;b.next=_,_.prev=b,S.length-=x}if(t.Prism=c,g.stringify=function S(b,w){if(typeof b=="string")return b;if(Array.isArray(b)){let O="";return b.forEach(function(e){O+=S(e,w)}),O}let _={type:b.type,content:S(b.content,w),tag:"span",classes:["token",b.type],attributes:{},language:w},x=b.alias;x&&(Array.isArray(x)?Array.prototype.push.apply(_.classes,x):_.classes.push(x)),c.hooks.run("wrap",_);let j="";for(let O in _.attributes)j+=" "+O+'="'+(_.attributes[O]||"").replace(/"/g,"&quot;")+'"';return"<"+_.tag+' class="'+_.classes.join(" ")+'"'+j+">"+_.content+"</"+_.tag+">"},!t.document)return t.addEventListener&&(c.disableWorkerMessageHandler||t.addEventListener("message",function(S){let b=JSON.parse(S.data),w=b.language,_=b.code,x=b.immediateClose;t.postMessage(c.highlight(_,c.languages[w],w)),x&&t.close()},!1)),c;let z=c.util.currentScript();function H(){c.manual||c.highlightAll()}if(z&&(c.filename=z.src,z.hasAttribute("data-manual")&&(c.manual=!0)),!c.manual){let S=document.readyState;S==="loading"||S==="interactive"&&z&&z.defer?document.addEventListener("DOMContentLoaded",H):window.requestAnimationFrame?window.requestAnimationFrame(H):window.setTimeout(H,16)}return c}(In);typeof Pe<"u"&&Pe.exports&&(Pe.exports=D),typeof global<"u"&&(global.Prism=D);D.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},D.languages.markup.tag.inside["attr-value"].inside.entity=D.languages.markup.entity,D.languages.markup.doctype.inside["internal-subset"].inside=D.languages.markup,D.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Object.defineProperty(D.languages.markup.tag,"addInlined",{value:function(t,u){let d={};d["language-"+u]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:D.languages[u]},d.cdata=/^<!\[CDATA\[|\]\]>$/i;let n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:d}};n["language-"+u]={pattern:/[\s\S]+/,inside:D.languages[u]};let c={};c[t]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:n},D.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(D.languages.markup.tag,"addAttribute",{value:function(t,u){D.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(`(^|["'\\s])(?:`+t+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[u,"language-"+u],inside:D.languages[u]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),D.languages.html=D.languages.markup,D.languages.mathml=D.languages.markup,D.languages.svg=D.languages.markup,D.languages.xml=D.languages.extend("markup",{}),D.languages.ssml=D.languages.xml,D.languages.atom=D.languages.xml,D.languages.rss=D.languages.xml;(function(t){let u=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+u.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+u.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+u.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+u.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:u,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;let d=t.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))})(D);D.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};D.languages.javascript=D.languages.extend("clike",{"class-name":[D.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),D.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,D.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:D.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:D.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:D.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:D.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:D.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),D.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:D.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),D.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),D.languages.markup&&(D.languages.markup.tag.addInlined("script","javascript"),D.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),D.languages.js=D.languages.javascript;(function(t){t.languages.typescript=t.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),t.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete t.languages.typescript.parameter,delete t.languages.typescript["literal-property"];let u=t.languages.extend("typescript",{});delete u["class-name"],t.languages.typescript["class-name"].inside=u,t.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:u}}}}),t.languages.ts=t.languages.typescript})(D);const He="savant-context-request",Se="context-",Ye="context-out-",Ue=new WeakMap;function Rn(t,u,d){const c=bn(t,u)===void 0&&Ne(t,u);vn(t,u,d)&&c&&c.triggerRecheck.val++}function $n(t,u){const d=Dn(t,u),n=B(d);return ee(()=>{if(d.triggerRecheck.val){const c=Ne(t,u);if(c===n.val)return;n.val=c}}),Hn(ee(()=>{var c;return(c=n.val)==null?void 0:c.val}))}function Bn(t,u){const d=Ve(t);if(d===void 0)return;const n=d.contexts.get(u);n!==void 0&&(d.contexts.delete(u),d.contexts.size===1&&(Ue.delete(t),t.removeEventListener(He,d.listener)),n.triggerRecheck.val++)}function vn(t,u,d){const n=Ve(t);if(n===void 0){const g=M=>{const k=M,I=bn(t,k.detail.key);I!==void 0&&(k.detail.context=I,M.stopPropagation())};t.addEventListener(He,g);const P=Object.assign(B(d),{triggerRecheck:B(0)}),T={listener:g,contexts:new Map([[u,P]])};return Ue.set(t,T),P}const c=n.contexts.get(u);if(c===void 0){const g=Object.assign(B(d),{triggerRecheck:B(0)});return n.contexts.set(u,g),g}return c.raw!==d&&(c.val=d),c}function Dn(t,u){const d=Ne(t,u);return d!==void 0?d:vn(t,u,void 0)}function Ne(t,u){const d=new CustomEvent(He,{bubbles:!0,cancelable:!0,detail:{key:u,context:void 0}});return t.dispatchEvent(d),d.detail.context}function Ve(t){return Ue.get(t)}function bn(t,u){var d;return(d=Ve(t))==null?void 0:d.contexts.get(u)}function Hn(t){return Object.assign(t,{triggerRecheck:B(0)})}const Un=100,Nn=1e3,qe=document.getRootNode().firstChild;let re,oe;const Fe=new Set,we=new Set,Ie=new Set;let Re=!1,$e=!1;function B(t,u){return new ce(t,u)}function ee(t,u){const d={getters:new Set,setters:new Set},n=B(We(t,d,void 0),u),c={func:t,state:n};oe?oe.push(c):c.dom=qe;for(const g of d.getters.difference(d.setters))g._listeners.push(c),Ge(g);return n}function J(t){return typeof t=="function"?ee(t):t instanceof ce?ee(()=>t.val):ee(()=>t)}function Vn(t){return t instanceof ce?t.val:typeof t=="function"?t():t}function qn(){Re||(Re=!0,setTimeout(Wn))}function Wn(){let t=[...we].filter(en),u=0;do if(Fe.clear(),new Set(t.flatMap(c=>c._listeners=c._listeners.filter(Ce))).forEach(Gn),t=[...Fe],u++>Un){console.error("Reactive propagation recursion limit exceeded. Further propagation cancelled.");break}while(t.length>0);t=[...we].filter(en),we.clear();const d=new Set(t.flatMap(n=>n._bindings=n._bindings.filter(Ce)));for(const n of d)Kn(n.dom,he(n.func,n.dom)),n.dom=void 0;t.forEach(n=>n._old=n._val),Re=!1}function Gn(t){const u={getters:new Set,setters:new Set};t.state.val=We(t.func,u,void 0);const d={...t};d.dom||(oe?oe.push(d):d.dom=qe);for(const n of u.getters.difference(u.setters))n._listeners.push(d),Ge(n);t.dom=void 0}function We(t,u,d){const n=re;re=u;const c=t(d);return re=n,c}function Ce(t){var u;return!!((u=t.dom)!=null&&u.isConnected)}function Ge(t){Ie.add(t),Zn()}function Zn(){$e||($e=!0,setTimeout(Xn,Nn))}function Xn(){var t;for(const u of Ie)u._listeners=u._listeners.filter(Ce),u._bindings=u._bindings.filter(Ce),u._listeners.length+u._bindings.length===0&&((t=u._onDispose)==null||t.call(u));Ie.clear(),$e=!1}function he(t,u){const d={getters:new Set,setters:new Set},n=oe;oe=[];const c=We(t,d,u),g=(c??qe)instanceof Node?c:new Text(String(c)),P={func:t,dom:g};for(const T of d.getters.difference(d.setters))T._bindings.push(P),Ge(T);for(const T of oe)T.dom=P.dom;return oe=n,g}function en(t){return t._val!==t._old}class ce{constructor(u,d){fe(this,"_val");fe(this,"_old");fe(this,"_listeners");fe(this,"_bindings");fe(this,"_onDispose");this._val=u,this._old=u,this._bindings=[],this._listeners=[],this._onDispose=d}set val(u){var d;if((d=re==null?void 0:re.setters)==null||d.add(this),u!==this._val){if(this._val=u,this._bindings.length+this._listeners.length===0){this._old=u;return}Fe.add(this),we.add(this),qn()}}get val(){var u;return(u=re==null?void 0:re.getters)==null||u.add(this),this._val}set raw(u){this._val=u,this._bindings.length+this._listeners.length===0&&(this._old=u)}get raw(){return this._val}get old(){var u;return(u=re==null?void 0:re.getters)==null||u.add(this),this._old}}const nn={},h=new Proxy({},Ze()),ae=new Proxy({},Ze("http://www.w3.org/2000/svg"));new Proxy({},Ze("http://www.w3.org/1998/Math/MathML"));function ge(t,...u){for(const d of u.flat(1/0)){let n;d instanceof ce?n=he(()=>d.val):typeof d=="function"?n=he(d):d instanceof Node?n=d:["boolean","string","number","bigint"].includes(typeof d)&&(n=String(d)),n!=null&&t.append(n)}return t}function Ze(t){return{get:(u,d)=>Jn.bind(void 0,t,d)}}function Kn(t,u){if(!u)return t.remove();if(u!==t)return t.replaceWith(u)}function Jn(t,u,d,...n){const c=Object.getPrototypeOf(d)===Object.prototype,[{is:g,...P},...T]=c?[d,n]:[{},[d,...n]],M=t?document.createElementNS(t,u,{is:g}):document.createElement(u,{is:g});return Object.entries(P).forEach(([k,I])=>Qn(M,k,I)),ge(M,T)}function Qn(t,u,d){const n=u.startsWith("$"),c=u.startsWith("on");if(u=n?u.slice(1):u,u.startsWith(Ye))return setTimeout(()=>{const P=$n(t,u.slice(Ye.length));typeof d=="object"&&d instanceof ce?d.val=P.val:typeof d=="function"?d(P):console.warn(`Context out property "${u}" on element <${t.tagName}> expects a function or State, but got ${typeof d}.`)});if(u.startsWith(Se))return he(()=>(!n||typeof d=="object"&&d instanceof ce&&d.val?Rn(t,u.slice(Se.length),d):Bn(t,u.slice(Se.length)),t));const g=Yn(t,u,c);if(!c&&typeof d=="function"&&(d=ee(d)),typeof d=="object"&&d instanceof ce)return he(()=>(!n||d.val?g(d.val,d._old):t.removeAttribute(u),t));if(n)return he(()=>(d.val?g(d):t.removeAttribute(u),t));g(d)}function Yn(t,u,d){var g;const n=`${t.tagName}:${u}`;let c=nn[n];return c||(c=(g=_n(Object.getPrototypeOf(t),u))==null?void 0:g.set,nn[n]=c),d?(P,T)=>{const M=u.slice(2);T&&t.removeEventListener(M,T),t.addEventListener(M,P)}:(c==null?void 0:c.bind(t))??t.setAttribute.bind(t,u)}function _n(t,u){if(!t||t===Object.prototype)return;const d=Object.getOwnPropertyDescriptor(t,u);return d||_n(Object.getPrototypeOf(t),u)}function wn({class:t,...u},...d){const n=J(t);return h.span({class:()=>`badge flex items-center gap-1 select-none ${n.val}`,...u},d)}function ne({class:t,type:u="button",tabIndex:d=0,...n},...c){const g=J(t);return h.button({type:u,tabIndex:d,class:()=>`button flex items-center gap-2 select-none ${g.val}`,...n},c)}function et({icon:t,class:u,...d},...n){const c=J(u);return h.div({class:()=>`flex items-center control variant-soft-outline text-swatch-700-mood gap-2 ${c.val}`,...d},h.i({class:"text-mood-500"},t),n)}function Xe({value:t=B(!1),required:u,class:d,...n},...c){const g=J(d);return h.div({name:"Checkbox",onclick:()=>t.val=!t.val,"$data-selected":t,class:()=>{var P;return`flex cursor-pointer justify-between items-center gap-2 select-none group ${(P=g.val)==null?void 0:P.split(" ").filter(T=>!T.includes("variant")).join(" ")}`},...n},c,ne({role:"checkbox",class:()=>{var P;return`button size-5 !rounded-md aspect-square focus-visible:mood-accent !p-0.5 group-has-invalid:mood-critical ${(P=g.val)==null?void 0:P.split(" ").filter(T=>T.includes("variant")).join(" ")}`}},ae.svg({viewBox:"0 0 100 100",class:"size-4 not-group-data-selected:hidden",style:"stroke-linecap:round; stroke-linejoin:round;"},ae.path({d:"M20,60L40,80L80,20",class:"stroke-current stroke-[10] fill-none"}))),h.input({type:"checkbox",checked:t,required:u,hidden:!0}))}function q({language:t,class:u,...d},...n){const c=J(u),g=h.pre({class:c.val,...d},h.code({class:`language-${t}`},n));return Prism.highlightAllUnder(g),g}function nt({class:t,...u},...d){const n=J(t);return h.div({class:()=>`group control !p-0 flex justify-between *:flex-[1_0_0] *:rounded-lg *:not-first:rounded-l-none *:not-last:rounded-r-none *:[.button]:hover:variant-soft ${n.val}`,...u},d.flatMap((c,g)=>[c,g<d.length-1?h.span({class:"bg-current/50 w-px max-w-px h-auto"}):void 0]))}function tt({class:t,...u},...d){const n=J(t);return h.form({class:()=>`flex flex-col gap-4 ${n.val}`,...u},d)}const xe=(t,...u)=>h.i(t,u);function me({value:t=B(void 0),type:u=t.raw!==void 0?typeof t.raw:"text",placeholder:d=`Enter ${u}...`,required:n=!1,lead:c,trail:g,inputProps:P,onValueChanged:T,onValidityChanged:M,class:k,...I},...z){const H=J(k),S=w=>{var x;const _=(x=w.target)==null?void 0:x.value;typeof t.val=="number"&&Number(_)?t.val=Number(_):typeof t.val=="string"&&(t.val=_),T==null||T(t.raw),M==null||M(b.checkValidity())},b=h.input({id:"input",class:"input flex-1 min-w-0",type:u,value:()=>t.val??"",oninput:S,placeholder:d,required:n,...P});return h.div({name:"Text Input",class:()=>`control flex p-0 *:first:pl-2 *:last:pr-2 gap-2 *:py-1 has-focus-visible:mood-accent has-invalid:has-invalid:mood-critical ${H.val}`,...I},()=>["boolean","string","number","bigint"].includes(typeof c)?h.label({for:"input"},h.span(c)):c!=null?h.label({for:"input"},c):void 0,b,z,()=>["boolean","string","number","bigint"].includes(typeof g)?h.label({for:"input"},h.span(g)):g!=null?h.label({for:"input"},g):void 0)}function V({content:t,class:u,...d},...n){const c=J(u);return h.div({name:"Label",class:()=>`flex flex-col gap-1 ${c.val}`},h.label({class:"flex items-center text-mini text-swatch-700-mood",...d},t),n)}var tn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yn(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ye={exports:{}},rt=ye.exports,rn;function at(){return rn||(rn=1,function(t){(function(){function u(e){var r={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",type:"string"},rawPrefixHeaderId:{defaultValue:!1,describe:'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',type:"boolean"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},rawHeaderId:{defaultValue:!1,describe:`Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,describe:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,describe:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,describe:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,describe:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,describe:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",describe:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,describe:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,describe:"Open all links in new windows",type:"boolean"},backslashEscapesHTMLTags:{defaultValue:!1,describe:"Support for HTML Tag escaping. ex: <div>foo</div>",type:"boolean"},emoji:{defaultValue:!1,describe:"Enable emoji support. Ex: `this is a :smile: emoji`",type:"boolean"},underline:{defaultValue:!1,describe:"Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",type:"boolean"},ellipsis:{defaultValue:!0,describe:"Replaces three dots with the ellipsis unicode character",type:"boolean"},completeHTMLDocument:{defaultValue:!1,describe:"Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",type:"boolean"},metadata:{defaultValue:!1,describe:"Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",type:"boolean"},splitAdjacentBlockquotes:{defaultValue:!1,describe:"Split adjacent blockquote blocks",type:"boolean"}};if(e===!1)return JSON.parse(JSON.stringify(r));var a={};for(var i in r)r.hasOwnProperty(i)&&(a[i]=r[i].defaultValue);return a}function d(){var e=u(!0),r={};for(var a in e)e.hasOwnProperty(a)&&(r[a]=!0);return r}var n={},c={},g={},P=u(!0),T="vanilla",M={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0,backslashEscapesHTMLTags:!0,emoji:!0,splitAdjacentBlockquotes:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:u(!0),allOn:d()};n.helper={},n.extensions={},n.setOption=function(e,r){return P[e]=r,this},n.getOption=function(e){return P[e]},n.getOptions=function(){return P},n.resetOptions=function(){P=u(!0)},n.setFlavor=function(e){if(!M.hasOwnProperty(e))throw Error(e+" flavor was not found");n.resetOptions();var r=M[e];T=e;for(var a in r)r.hasOwnProperty(a)&&(P[a]=r[a])},n.getFlavor=function(){return T},n.getFlavorOptions=function(e){if(M.hasOwnProperty(e))return M[e]},n.getDefaultOptions=function(e){return u(e)},n.subParser=function(e,r){if(n.helper.isString(e))if(typeof r<"u")c[e]=r;else{if(c.hasOwnProperty(e))return c[e];throw Error("SubParser named "+e+" not registered!")}},n.extension=function(e,r){if(!n.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=n.helper.stdExtName(e),n.helper.isUndefined(r)){if(!g.hasOwnProperty(e))throw Error("Extension named "+e+" is not registered!");return g[e]}else{typeof r=="function"&&(r=r()),n.helper.isArray(r)||(r=[r]);var a=k(r,e);if(a.valid)g[e]=r;else throw Error(a.error)}},n.getAllExtensions=function(){return g},n.removeExtension=function(e){delete g[e]},n.resetExtensions=function(){g={}};function k(e,r){var a=r?"Error in "+r+" extension->":"Error in unnamed extension",i={valid:!0,error:""};n.helper.isArray(e)||(e=[e]);for(var o=0;o<e.length;++o){var f=a+" sub-extension "+o+": ",s=e[o];if(typeof s!="object")return i.valid=!1,i.error=f+"must be an object, but "+typeof s+" given",i;if(!n.helper.isString(s.type))return i.valid=!1,i.error=f+'property "type" must be a string, but '+typeof s.type+" given",i;var p=s.type=s.type.toLowerCase();if(p==="language"&&(p=s.type="lang"),p==="html"&&(p=s.type="output"),p!=="lang"&&p!=="output"&&p!=="listener")return i.valid=!1,i.error=f+"type "+p+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',i;if(p==="listener"){if(n.helper.isUndefined(s.listeners))return i.valid=!1,i.error=f+'. Extensions of type "listener" must have a property called "listeners"',i}else if(n.helper.isUndefined(s.filter)&&n.helper.isUndefined(s.regex))return i.valid=!1,i.error=f+p+' extensions must define either a "regex" property or a "filter" method',i;if(s.listeners){if(typeof s.listeners!="object")return i.valid=!1,i.error=f+'"listeners" property must be an object but '+typeof s.listeners+" given",i;for(var m in s.listeners)if(s.listeners.hasOwnProperty(m)&&typeof s.listeners[m]!="function")return i.valid=!1,i.error=f+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+m+" must be a function but "+typeof s.listeners[m]+" given",i}if(s.filter){if(typeof s.filter!="function")return i.valid=!1,i.error=f+'"filter" must be a function, but '+typeof s.filter+" given",i}else if(s.regex){if(n.helper.isString(s.regex)&&(s.regex=new RegExp(s.regex,"g")),!(s.regex instanceof RegExp))return i.valid=!1,i.error=f+'"regex" property must either be a string or a RegExp object, but '+typeof s.regex+" given",i;if(n.helper.isUndefined(s.replace))return i.valid=!1,i.error=f+'"regex" extensions must implement a replace string or function',i}}return i}n.validateExtension=function(e){var r=k(e,null);return r.valid?!0:(console.warn(r.error),!1)},n.hasOwnProperty("helper")||(n.helper={}),n.helper.isString=function(e){return typeof e=="string"||e instanceof String},n.helper.isFunction=function(e){var r={};return e&&r.toString.call(e)==="[object Function]"},n.helper.isArray=function(e){return Array.isArray(e)},n.helper.isUndefined=function(e){return typeof e>"u"},n.helper.forEach=function(e,r){if(n.helper.isUndefined(e))throw new Error("obj param is required");if(n.helper.isUndefined(r))throw new Error("callback param is required");if(!n.helper.isFunction(r))throw new Error("callback param must be a function/closure");if(typeof e.forEach=="function")e.forEach(r);else if(n.helper.isArray(e))for(var a=0;a<e.length;a++)r(e[a],a,e);else if(typeof e=="object")for(var i in e)e.hasOwnProperty(i)&&r(e[i],i,e);else throw new Error("obj does not seem to be an array or an iterable object")},n.helper.stdExtName=function(e){return e.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()};function I(e,r){var a=r.charCodeAt(0);return"¨E"+a+"E"}n.helper.escapeCharactersCallback=I,n.helper.escapeCharacters=function(e,r,a){var i="(["+r.replace(/([\[\]\\])/g,"\\$1")+"])";a&&(i="\\\\"+i);var o=new RegExp(i,"g");return e=e.replace(o,I),e},n.helper.unescapeHTMLEntities=function(e){return e.replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")};var z=function(e,r,a,i){var o=i||"",f=o.indexOf("g")>-1,s=new RegExp(r+"|"+a,"g"+o.replace(/g/g,"")),p=new RegExp(r,o.replace(/g/g,"")),m=[],y,A,E,l,C;do for(y=0;E=s.exec(e);)if(p.test(E[0]))y++||(A=s.lastIndex,l=A-E[0].length);else if(y&&!--y){C=E.index+E[0].length;var L={left:{start:l,end:A},match:{start:A,end:E.index},right:{start:E.index,end:C},wholeMatch:{start:l,end:C}};if(m.push(L),!f)return m}while(y&&(s.lastIndex=A));return m};n.helper.matchRecursiveRegExp=function(e,r,a,i){for(var o=z(e,r,a,i),f=[],s=0;s<o.length;++s)f.push([e.slice(o[s].wholeMatch.start,o[s].wholeMatch.end),e.slice(o[s].match.start,o[s].match.end),e.slice(o[s].left.start,o[s].left.end),e.slice(o[s].right.start,o[s].right.end)]);return f},n.helper.replaceRecursiveRegExp=function(e,r,a,i,o){if(!n.helper.isFunction(r)){var f=r;r=function(){return f}}var s=z(e,a,i,o),p=e,m=s.length;if(m>0){var y=[];s[0].wholeMatch.start!==0&&y.push(e.slice(0,s[0].wholeMatch.start));for(var A=0;A<m;++A)y.push(r(e.slice(s[A].wholeMatch.start,s[A].wholeMatch.end),e.slice(s[A].match.start,s[A].match.end),e.slice(s[A].left.start,s[A].left.end),e.slice(s[A].right.start,s[A].right.end))),A<m-1&&y.push(e.slice(s[A].wholeMatch.end,s[A+1].wholeMatch.start));s[m-1].wholeMatch.end<e.length&&y.push(e.slice(s[m-1].wholeMatch.end)),p=y.join("")}return p},n.helper.regexIndexOf=function(e,r,a){if(!n.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(!(r instanceof RegExp))throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";var i=e.substring(a||0).search(r);return i>=0?i+(a||0):i},n.helper.splitAtIndex=function(e,r){if(!n.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";return[e.substring(0,r),e.substring(r)]},n.helper.encodeEmailAddress=function(e){var r=[function(a){return"&#"+a.charCodeAt(0)+";"},function(a){return"&#x"+a.charCodeAt(0).toString(16)+";"},function(a){return a}];return e=e.replace(/./g,function(a){if(a==="@")a=r[Math.floor(Math.random()*2)](a);else{var i=Math.random();a=i>.9?r[2](a):i>.45?r[1](a):r[0](a)}return a}),e},n.helper.padEnd=function(r,a,i){return a=a>>0,i=String(i||" "),r.length>a?String(r):(a=a-r.length,a>i.length&&(i+=i.repeat(a/i.length)),String(r)+i.slice(0,a))},typeof console>"u"&&(console={warn:function(e){alert(e)},log:function(e){alert(e)},error:function(e){throw e}}),n.helper.regexes={asteriskDashAndColon:/([*_:~])/g},n.helper.emojis={"+1":"👍","-1":"👎",100:"💯",1234:"🔢","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉","8ball":"🎱",a:"🅰️",ab:"🆎",abc:"🔤",abcd:"🔡",accept:"🉑",aerial_tramway:"🚡",airplane:"✈️",alarm_clock:"⏰",alembic:"⚗️",alien:"👽",ambulance:"🚑",amphora:"🏺",anchor:"⚓️",angel:"👼",anger:"💢",angry:"😠",anguished:"😧",ant:"🐜",apple:"🍎",aquarius:"♒️",aries:"♈️",arrow_backward:"◀️",arrow_double_down:"⏬",arrow_double_up:"⏫",arrow_down:"⬇️",arrow_down_small:"🔽",arrow_forward:"▶️",arrow_heading_down:"⤵️",arrow_heading_up:"⤴️",arrow_left:"⬅️",arrow_lower_left:"↙️",arrow_lower_right:"↘️",arrow_right:"➡️",arrow_right_hook:"↪️",arrow_up:"⬆️",arrow_up_down:"↕️",arrow_up_small:"🔼",arrow_upper_left:"↖️",arrow_upper_right:"↗️",arrows_clockwise:"🔃",arrows_counterclockwise:"🔄",art:"🎨",articulated_lorry:"🚛",artificial_satellite:"🛰",astonished:"😲",athletic_shoe:"👟",atm:"🏧",atom_symbol:"⚛️",avocado:"🥑",b:"🅱️",baby:"👶",baby_bottle:"🍼",baby_chick:"🐤",baby_symbol:"🚼",back:"🔙",bacon:"🥓",badminton:"🏸",baggage_claim:"🛄",baguette_bread:"🥖",balance_scale:"⚖️",balloon:"🎈",ballot_box:"🗳",ballot_box_with_check:"☑️",bamboo:"🎍",banana:"🍌",bangbang:"‼️",bank:"🏦",bar_chart:"📊",barber:"💈",baseball:"⚾️",basketball:"🏀",basketball_man:"⛹️",basketball_woman:"⛹️&zwj;♀️",bat:"🦇",bath:"🛀",bathtub:"🛁",battery:"🔋",beach_umbrella:"🏖",bear:"🐻",bed:"🛏",bee:"🐝",beer:"🍺",beers:"🍻",beetle:"🐞",beginner:"🔰",bell:"🔔",bellhop_bell:"🛎",bento:"🍱",biking_man:"🚴",bike:"🚲",biking_woman:"🚴&zwj;♀️",bikini:"👙",biohazard:"☣️",bird:"🐦",birthday:"🎂",black_circle:"⚫️",black_flag:"🏴",black_heart:"🖤",black_joker:"🃏",black_large_square:"⬛️",black_medium_small_square:"◾️",black_medium_square:"◼️",black_nib:"✒️",black_small_square:"▪️",black_square_button:"🔲",blonde_man:"👱",blonde_woman:"👱&zwj;♀️",blossom:"🌼",blowfish:"🐡",blue_book:"📘",blue_car:"🚙",blue_heart:"💙",blush:"😊",boar:"🐗",boat:"⛵️",bomb:"💣",book:"📖",bookmark:"🔖",bookmark_tabs:"📑",books:"📚",boom:"💥",boot:"👢",bouquet:"💐",bowing_man:"🙇",bow_and_arrow:"🏹",bowing_woman:"🙇&zwj;♀️",bowling:"🎳",boxing_glove:"🥊",boy:"👦",bread:"🍞",bride_with_veil:"👰",bridge_at_night:"🌉",briefcase:"💼",broken_heart:"💔",bug:"🐛",building_construction:"🏗",bulb:"💡",bullettrain_front:"🚅",bullettrain_side:"🚄",burrito:"🌯",bus:"🚌",business_suit_levitating:"🕴",busstop:"🚏",bust_in_silhouette:"👤",busts_in_silhouette:"👥",butterfly:"🦋",cactus:"🌵",cake:"🍰",calendar:"📆",call_me_hand:"🤙",calling:"📲",camel:"🐫",camera:"📷",camera_flash:"📸",camping:"🏕",cancer:"♋️",candle:"🕯",candy:"🍬",canoe:"🛶",capital_abcd:"🔠",capricorn:"♑️",car:"🚗",card_file_box:"🗃",card_index:"📇",card_index_dividers:"🗂",carousel_horse:"🎠",carrot:"🥕",cat:"🐱",cat2:"🐈",cd:"💿",chains:"⛓",champagne:"🍾",chart:"💹",chart_with_downwards_trend:"📉",chart_with_upwards_trend:"📈",checkered_flag:"🏁",cheese:"🧀",cherries:"🍒",cherry_blossom:"🌸",chestnut:"🌰",chicken:"🐔",children_crossing:"🚸",chipmunk:"🐿",chocolate_bar:"🍫",christmas_tree:"🎄",church:"⛪️",cinema:"🎦",circus_tent:"🎪",city_sunrise:"🌇",city_sunset:"🌆",cityscape:"🏙",cl:"🆑",clamp:"🗜",clap:"👏",clapper:"🎬",classical_building:"🏛",clinking_glasses:"🥂",clipboard:"📋",clock1:"🕐",clock10:"🕙",clock1030:"🕥",clock11:"🕚",clock1130:"🕦",clock12:"🕛",clock1230:"🕧",clock130:"🕜",clock2:"🕑",clock230:"🕝",clock3:"🕒",clock330:"🕞",clock4:"🕓",clock430:"🕟",clock5:"🕔",clock530:"🕠",clock6:"🕕",clock630:"🕡",clock7:"🕖",clock730:"🕢",clock8:"🕗",clock830:"🕣",clock9:"🕘",clock930:"🕤",closed_book:"📕",closed_lock_with_key:"🔐",closed_umbrella:"🌂",cloud:"☁️",cloud_with_lightning:"🌩",cloud_with_lightning_and_rain:"⛈",cloud_with_rain:"🌧",cloud_with_snow:"🌨",clown_face:"🤡",clubs:"♣️",cocktail:"🍸",coffee:"☕️",coffin:"⚰️",cold_sweat:"😰",comet:"☄️",computer:"💻",computer_mouse:"🖱",confetti_ball:"🎊",confounded:"😖",confused:"😕",congratulations:"㊗️",construction:"🚧",construction_worker_man:"👷",construction_worker_woman:"👷&zwj;♀️",control_knobs:"🎛",convenience_store:"🏪",cookie:"🍪",cool:"🆒",policeman:"👮",copyright:"©️",corn:"🌽",couch_and_lamp:"🛋",couple:"👫",couple_with_heart_woman_man:"💑",couple_with_heart_man_man:"👨&zwj;❤️&zwj;👨",couple_with_heart_woman_woman:"👩&zwj;❤️&zwj;👩",couplekiss_man_man:"👨&zwj;❤️&zwj;💋&zwj;👨",couplekiss_man_woman:"💏",couplekiss_woman_woman:"👩&zwj;❤️&zwj;💋&zwj;👩",cow:"🐮",cow2:"🐄",cowboy_hat_face:"🤠",crab:"🦀",crayon:"🖍",credit_card:"💳",crescent_moon:"🌙",cricket:"🏏",crocodile:"🐊",croissant:"🥐",crossed_fingers:"🤞",crossed_flags:"🎌",crossed_swords:"⚔️",crown:"👑",cry:"😢",crying_cat_face:"😿",crystal_ball:"🔮",cucumber:"🥒",cupid:"💘",curly_loop:"➰",currency_exchange:"💱",curry:"🍛",custard:"🍮",customs:"🛃",cyclone:"🌀",dagger:"🗡",dancer:"💃",dancing_women:"👯",dancing_men:"👯&zwj;♂️",dango:"🍡",dark_sunglasses:"🕶",dart:"🎯",dash:"💨",date:"📅",deciduous_tree:"🌳",deer:"🦌",department_store:"🏬",derelict_house:"🏚",desert:"🏜",desert_island:"🏝",desktop_computer:"🖥",male_detective:"🕵️",diamond_shape_with_a_dot_inside:"💠",diamonds:"♦️",disappointed:"😞",disappointed_relieved:"😥",dizzy:"💫",dizzy_face:"😵",do_not_litter:"🚯",dog:"🐶",dog2:"🐕",dollar:"💵",dolls:"🎎",dolphin:"🐬",door:"🚪",doughnut:"🍩",dove:"🕊",dragon:"🐉",dragon_face:"🐲",dress:"👗",dromedary_camel:"🐪",drooling_face:"🤤",droplet:"💧",drum:"🥁",duck:"🦆",dvd:"📀","e-mail":"📧",eagle:"🦅",ear:"👂",ear_of_rice:"🌾",earth_africa:"🌍",earth_americas:"🌎",earth_asia:"🌏",egg:"🥚",eggplant:"🍆",eight_pointed_black_star:"✴️",eight_spoked_asterisk:"✳️",electric_plug:"🔌",elephant:"🐘",email:"✉️",end:"🔚",envelope_with_arrow:"📩",euro:"💶",european_castle:"🏰",european_post_office:"🏤",evergreen_tree:"🌲",exclamation:"❗️",expressionless:"😑",eye:"👁",eye_speech_bubble:"👁&zwj;🗨",eyeglasses:"👓",eyes:"👀",face_with_head_bandage:"🤕",face_with_thermometer:"🤒",fist_oncoming:"👊",factory:"🏭",fallen_leaf:"🍂",family_man_woman_boy:"👪",family_man_boy:"👨&zwj;👦",family_man_boy_boy:"👨&zwj;👦&zwj;👦",family_man_girl:"👨&zwj;👧",family_man_girl_boy:"👨&zwj;👧&zwj;👦",family_man_girl_girl:"👨&zwj;👧&zwj;👧",family_man_man_boy:"👨&zwj;👨&zwj;👦",family_man_man_boy_boy:"👨&zwj;👨&zwj;👦&zwj;👦",family_man_man_girl:"👨&zwj;👨&zwj;👧",family_man_man_girl_boy:"👨&zwj;👨&zwj;👧&zwj;👦",family_man_man_girl_girl:"👨&zwj;👨&zwj;👧&zwj;👧",family_man_woman_boy_boy:"👨&zwj;👩&zwj;👦&zwj;👦",family_man_woman_girl:"👨&zwj;👩&zwj;👧",family_man_woman_girl_boy:"👨&zwj;👩&zwj;👧&zwj;👦",family_man_woman_girl_girl:"👨&zwj;👩&zwj;👧&zwj;👧",family_woman_boy:"👩&zwj;👦",family_woman_boy_boy:"👩&zwj;👦&zwj;👦",family_woman_girl:"👩&zwj;👧",family_woman_girl_boy:"👩&zwj;👧&zwj;👦",family_woman_girl_girl:"👩&zwj;👧&zwj;👧",family_woman_woman_boy:"👩&zwj;👩&zwj;👦",family_woman_woman_boy_boy:"👩&zwj;👩&zwj;👦&zwj;👦",family_woman_woman_girl:"👩&zwj;👩&zwj;👧",family_woman_woman_girl_boy:"👩&zwj;👩&zwj;👧&zwj;👦",family_woman_woman_girl_girl:"👩&zwj;👩&zwj;👧&zwj;👧",fast_forward:"⏩",fax:"📠",fearful:"😨",feet:"🐾",female_detective:"🕵️&zwj;♀️",ferris_wheel:"🎡",ferry:"⛴",field_hockey:"🏑",file_cabinet:"🗄",file_folder:"📁",film_projector:"📽",film_strip:"🎞",fire:"🔥",fire_engine:"🚒",fireworks:"🎆",first_quarter_moon:"🌓",first_quarter_moon_with_face:"🌛",fish:"🐟",fish_cake:"🍥",fishing_pole_and_fish:"🎣",fist_raised:"✊",fist_left:"🤛",fist_right:"🤜",flags:"🎏",flashlight:"🔦",fleur_de_lis:"⚜️",flight_arrival:"🛬",flight_departure:"🛫",floppy_disk:"💾",flower_playing_cards:"🎴",flushed:"😳",fog:"🌫",foggy:"🌁",football:"🏈",footprints:"👣",fork_and_knife:"🍴",fountain:"⛲️",fountain_pen:"🖋",four_leaf_clover:"🍀",fox_face:"🦊",framed_picture:"🖼",free:"🆓",fried_egg:"🍳",fried_shrimp:"🍤",fries:"🍟",frog:"🐸",frowning:"😦",frowning_face:"☹️",frowning_man:"🙍&zwj;♂️",frowning_woman:"🙍",middle_finger:"🖕",fuelpump:"⛽️",full_moon:"🌕",full_moon_with_face:"🌝",funeral_urn:"⚱️",game_die:"🎲",gear:"⚙️",gem:"💎",gemini:"♊️",ghost:"👻",gift:"🎁",gift_heart:"💝",girl:"👧",globe_with_meridians:"🌐",goal_net:"🥅",goat:"🐐",golf:"⛳️",golfing_man:"🏌️",golfing_woman:"🏌️&zwj;♀️",gorilla:"🦍",grapes:"🍇",green_apple:"🍏",green_book:"📗",green_heart:"💚",green_salad:"🥗",grey_exclamation:"❕",grey_question:"❔",grimacing:"😬",grin:"😁",grinning:"😀",guardsman:"💂",guardswoman:"💂&zwj;♀️",guitar:"🎸",gun:"🔫",haircut_woman:"💇",haircut_man:"💇&zwj;♂️",hamburger:"🍔",hammer:"🔨",hammer_and_pick:"⚒",hammer_and_wrench:"🛠",hamster:"🐹",hand:"✋",handbag:"👜",handshake:"🤝",hankey:"💩",hatched_chick:"🐥",hatching_chick:"🐣",headphones:"🎧",hear_no_evil:"🙉",heart:"❤️",heart_decoration:"💟",heart_eyes:"😍",heart_eyes_cat:"😻",heartbeat:"💓",heartpulse:"💗",hearts:"♥️",heavy_check_mark:"✔️",heavy_division_sign:"➗",heavy_dollar_sign:"💲",heavy_heart_exclamation:"❣️",heavy_minus_sign:"➖",heavy_multiplication_x:"✖️",heavy_plus_sign:"➕",helicopter:"🚁",herb:"🌿",hibiscus:"🌺",high_brightness:"🔆",high_heel:"👠",hocho:"🔪",hole:"🕳",honey_pot:"🍯",horse:"🐴",horse_racing:"🏇",hospital:"🏥",hot_pepper:"🌶",hotdog:"🌭",hotel:"🏨",hotsprings:"♨️",hourglass:"⌛️",hourglass_flowing_sand:"⏳",house:"🏠",house_with_garden:"🏡",houses:"🏘",hugs:"🤗",hushed:"😯",ice_cream:"🍨",ice_hockey:"🏒",ice_skate:"⛸",icecream:"🍦",id:"🆔",ideograph_advantage:"🉐",imp:"👿",inbox_tray:"📥",incoming_envelope:"📨",tipping_hand_woman:"💁",information_source:"ℹ️",innocent:"😇",interrobang:"⁉️",iphone:"📱",izakaya_lantern:"🏮",jack_o_lantern:"🎃",japan:"🗾",japanese_castle:"🏯",japanese_goblin:"👺",japanese_ogre:"👹",jeans:"👖",joy:"😂",joy_cat:"😹",joystick:"🕹",kaaba:"🕋",key:"🔑",keyboard:"⌨️",keycap_ten:"🔟",kick_scooter:"🛴",kimono:"👘",kiss:"💋",kissing:"😗",kissing_cat:"😽",kissing_closed_eyes:"😚",kissing_heart:"😘",kissing_smiling_eyes:"😙",kiwi_fruit:"🥝",koala:"🐨",koko:"🈁",label:"🏷",large_blue_circle:"🔵",large_blue_diamond:"🔷",large_orange_diamond:"🔶",last_quarter_moon:"🌗",last_quarter_moon_with_face:"🌜",latin_cross:"✝️",laughing:"😆",leaves:"🍃",ledger:"📒",left_luggage:"🛅",left_right_arrow:"↔️",leftwards_arrow_with_hook:"↩️",lemon:"🍋",leo:"♌️",leopard:"🐆",level_slider:"🎚",libra:"♎️",light_rail:"🚈",link:"🔗",lion:"🦁",lips:"👄",lipstick:"💄",lizard:"🦎",lock:"🔒",lock_with_ink_pen:"🔏",lollipop:"🍭",loop:"➿",loud_sound:"🔊",loudspeaker:"📢",love_hotel:"🏩",love_letter:"💌",low_brightness:"🔅",lying_face:"🤥",m:"Ⓜ️",mag:"🔍",mag_right:"🔎",mahjong:"🀄️",mailbox:"📫",mailbox_closed:"📪",mailbox_with_mail:"📬",mailbox_with_no_mail:"📭",man:"👨",man_artist:"👨&zwj;🎨",man_astronaut:"👨&zwj;🚀",man_cartwheeling:"🤸&zwj;♂️",man_cook:"👨&zwj;🍳",man_dancing:"🕺",man_facepalming:"🤦&zwj;♂️",man_factory_worker:"👨&zwj;🏭",man_farmer:"👨&zwj;🌾",man_firefighter:"👨&zwj;🚒",man_health_worker:"👨&zwj;⚕️",man_in_tuxedo:"🤵",man_judge:"👨&zwj;⚖️",man_juggling:"🤹&zwj;♂️",man_mechanic:"👨&zwj;🔧",man_office_worker:"👨&zwj;💼",man_pilot:"👨&zwj;✈️",man_playing_handball:"🤾&zwj;♂️",man_playing_water_polo:"🤽&zwj;♂️",man_scientist:"👨&zwj;🔬",man_shrugging:"🤷&zwj;♂️",man_singer:"👨&zwj;🎤",man_student:"👨&zwj;🎓",man_teacher:"👨&zwj;🏫",man_technologist:"👨&zwj;💻",man_with_gua_pi_mao:"👲",man_with_turban:"👳",tangerine:"🍊",mans_shoe:"👞",mantelpiece_clock:"🕰",maple_leaf:"🍁",martial_arts_uniform:"🥋",mask:"😷",massage_woman:"💆",massage_man:"💆&zwj;♂️",meat_on_bone:"🍖",medal_military:"🎖",medal_sports:"🏅",mega:"📣",melon:"🍈",memo:"📝",men_wrestling:"🤼&zwj;♂️",menorah:"🕎",mens:"🚹",metal:"🤘",metro:"🚇",microphone:"🎤",microscope:"🔬",milk_glass:"🥛",milky_way:"🌌",minibus:"🚐",minidisc:"💽",mobile_phone_off:"📴",money_mouth_face:"🤑",money_with_wings:"💸",moneybag:"💰",monkey:"🐒",monkey_face:"🐵",monorail:"🚝",moon:"🌔",mortar_board:"🎓",mosque:"🕌",motor_boat:"🛥",motor_scooter:"🛵",motorcycle:"🏍",motorway:"🛣",mount_fuji:"🗻",mountain:"⛰",mountain_biking_man:"🚵",mountain_biking_woman:"🚵&zwj;♀️",mountain_cableway:"🚠",mountain_railway:"🚞",mountain_snow:"🏔",mouse:"🐭",mouse2:"🐁",movie_camera:"🎥",moyai:"🗿",mrs_claus:"🤶",muscle:"💪",mushroom:"🍄",musical_keyboard:"🎹",musical_note:"🎵",musical_score:"🎼",mute:"🔇",nail_care:"💅",name_badge:"📛",national_park:"🏞",nauseated_face:"🤢",necktie:"👔",negative_squared_cross_mark:"❎",nerd_face:"🤓",neutral_face:"😐",new:"🆕",new_moon:"🌑",new_moon_with_face:"🌚",newspaper:"📰",newspaper_roll:"🗞",next_track_button:"⏭",ng:"🆖",no_good_man:"🙅&zwj;♂️",no_good_woman:"🙅",night_with_stars:"🌃",no_bell:"🔕",no_bicycles:"🚳",no_entry:"⛔️",no_entry_sign:"🚫",no_mobile_phones:"📵",no_mouth:"😶",no_pedestrians:"🚷",no_smoking:"🚭","non-potable_water":"🚱",nose:"👃",notebook:"📓",notebook_with_decorative_cover:"📔",notes:"🎶",nut_and_bolt:"🔩",o:"⭕️",o2:"🅾️",ocean:"🌊",octopus:"🐙",oden:"🍢",office:"🏢",oil_drum:"🛢",ok:"🆗",ok_hand:"👌",ok_man:"🙆&zwj;♂️",ok_woman:"🙆",old_key:"🗝",older_man:"👴",older_woman:"👵",om:"🕉",on:"🔛",oncoming_automobile:"🚘",oncoming_bus:"🚍",oncoming_police_car:"🚔",oncoming_taxi:"🚖",open_file_folder:"📂",open_hands:"👐",open_mouth:"😮",open_umbrella:"☂️",ophiuchus:"⛎",orange_book:"📙",orthodox_cross:"☦️",outbox_tray:"📤",owl:"🦉",ox:"🐂",package:"📦",page_facing_up:"📄",page_with_curl:"📃",pager:"📟",paintbrush:"🖌",palm_tree:"🌴",pancakes:"🥞",panda_face:"🐼",paperclip:"📎",paperclips:"🖇",parasol_on_ground:"⛱",parking:"🅿️",part_alternation_mark:"〽️",partly_sunny:"⛅️",passenger_ship:"🛳",passport_control:"🛂",pause_button:"⏸",peace_symbol:"☮️",peach:"🍑",peanuts:"🥜",pear:"🍐",pen:"🖊",pencil2:"✏️",penguin:"🐧",pensive:"😔",performing_arts:"🎭",persevere:"😣",person_fencing:"🤺",pouting_woman:"🙎",phone:"☎️",pick:"⛏",pig:"🐷",pig2:"🐖",pig_nose:"🐽",pill:"💊",pineapple:"🍍",ping_pong:"🏓",pisces:"♓️",pizza:"🍕",place_of_worship:"🛐",plate_with_cutlery:"🍽",play_or_pause_button:"⏯",point_down:"👇",point_left:"👈",point_right:"👉",point_up:"☝️",point_up_2:"👆",police_car:"🚓",policewoman:"👮&zwj;♀️",poodle:"🐩",popcorn:"🍿",post_office:"🏣",postal_horn:"📯",postbox:"📮",potable_water:"🚰",potato:"🥔",pouch:"👝",poultry_leg:"🍗",pound:"💷",rage:"😡",pouting_cat:"😾",pouting_man:"🙎&zwj;♂️",pray:"🙏",prayer_beads:"📿",pregnant_woman:"🤰",previous_track_button:"⏮",prince:"🤴",princess:"👸",printer:"🖨",purple_heart:"💜",purse:"👛",pushpin:"📌",put_litter_in_its_place:"🚮",question:"❓",rabbit:"🐰",rabbit2:"🐇",racehorse:"🐎",racing_car:"🏎",radio:"📻",radio_button:"🔘",radioactive:"☢️",railway_car:"🚃",railway_track:"🛤",rainbow:"🌈",rainbow_flag:"🏳️&zwj;🌈",raised_back_of_hand:"🤚",raised_hand_with_fingers_splayed:"🖐",raised_hands:"🙌",raising_hand_woman:"🙋",raising_hand_man:"🙋&zwj;♂️",ram:"🐏",ramen:"🍜",rat:"🐀",record_button:"⏺",recycle:"♻️",red_circle:"🔴",registered:"®️",relaxed:"☺️",relieved:"😌",reminder_ribbon:"🎗",repeat:"🔁",repeat_one:"🔂",rescue_worker_helmet:"⛑",restroom:"🚻",revolving_hearts:"💞",rewind:"⏪",rhinoceros:"🦏",ribbon:"🎀",rice:"🍚",rice_ball:"🍙",rice_cracker:"🍘",rice_scene:"🎑",right_anger_bubble:"🗯",ring:"💍",robot:"🤖",rocket:"🚀",rofl:"🤣",roll_eyes:"🙄",roller_coaster:"🎢",rooster:"🐓",rose:"🌹",rosette:"🏵",rotating_light:"🚨",round_pushpin:"📍",rowing_man:"🚣",rowing_woman:"🚣&zwj;♀️",rugby_football:"🏉",running_man:"🏃",running_shirt_with_sash:"🎽",running_woman:"🏃&zwj;♀️",sa:"🈂️",sagittarius:"♐️",sake:"🍶",sandal:"👡",santa:"🎅",satellite:"📡",saxophone:"🎷",school:"🏫",school_satchel:"🎒",scissors:"✂️",scorpion:"🦂",scorpius:"♏️",scream:"😱",scream_cat:"🙀",scroll:"📜",seat:"💺",secret:"㊙️",see_no_evil:"🙈",seedling:"🌱",selfie:"🤳",shallow_pan_of_food:"🥘",shamrock:"☘️",shark:"🦈",shaved_ice:"🍧",sheep:"🐑",shell:"🐚",shield:"🛡",shinto_shrine:"⛩",ship:"🚢",shirt:"👕",shopping:"🛍",shopping_cart:"🛒",shower:"🚿",shrimp:"🦐",signal_strength:"📶",six_pointed_star:"🔯",ski:"🎿",skier:"⛷",skull:"💀",skull_and_crossbones:"☠️",sleeping:"😴",sleeping_bed:"🛌",sleepy:"😪",slightly_frowning_face:"🙁",slightly_smiling_face:"🙂",slot_machine:"🎰",small_airplane:"🛩",small_blue_diamond:"🔹",small_orange_diamond:"🔸",small_red_triangle:"🔺",small_red_triangle_down:"🔻",smile:"😄",smile_cat:"😸",smiley:"😃",smiley_cat:"😺",smiling_imp:"😈",smirk:"😏",smirk_cat:"😼",smoking:"🚬",snail:"🐌",snake:"🐍",sneezing_face:"🤧",snowboarder:"🏂",snowflake:"❄️",snowman:"⛄️",snowman_with_snow:"☃️",sob:"😭",soccer:"⚽️",soon:"🔜",sos:"🆘",sound:"🔉",space_invader:"👾",spades:"♠️",spaghetti:"🍝",sparkle:"❇️",sparkler:"🎇",sparkles:"✨",sparkling_heart:"💖",speak_no_evil:"🙊",speaker:"🔈",speaking_head:"🗣",speech_balloon:"💬",speedboat:"🚤",spider:"🕷",spider_web:"🕸",spiral_calendar:"🗓",spiral_notepad:"🗒",spoon:"🥄",squid:"🦑",stadium:"🏟",star:"⭐️",star2:"🌟",star_and_crescent:"☪️",star_of_david:"✡️",stars:"🌠",station:"🚉",statue_of_liberty:"🗽",steam_locomotive:"🚂",stew:"🍲",stop_button:"⏹",stop_sign:"🛑",stopwatch:"⏱",straight_ruler:"📏",strawberry:"🍓",stuck_out_tongue:"😛",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue_winking_eye:"😜",studio_microphone:"🎙",stuffed_flatbread:"🥙",sun_behind_large_cloud:"🌥",sun_behind_rain_cloud:"🌦",sun_behind_small_cloud:"🌤",sun_with_face:"🌞",sunflower:"🌻",sunglasses:"😎",sunny:"☀️",sunrise:"🌅",sunrise_over_mountains:"🌄",surfing_man:"🏄",surfing_woman:"🏄&zwj;♀️",sushi:"🍣",suspension_railway:"🚟",sweat:"😓",sweat_drops:"💦",sweat_smile:"😅",sweet_potato:"🍠",swimming_man:"🏊",swimming_woman:"🏊&zwj;♀️",symbols:"🔣",synagogue:"🕍",syringe:"💉",taco:"🌮",tada:"🎉",tanabata_tree:"🎋",taurus:"♉️",taxi:"🚕",tea:"🍵",telephone_receiver:"📞",telescope:"🔭",tennis:"🎾",tent:"⛺️",thermometer:"🌡",thinking:"🤔",thought_balloon:"💭",ticket:"🎫",tickets:"🎟",tiger:"🐯",tiger2:"🐅",timer_clock:"⏲",tipping_hand_man:"💁&zwj;♂️",tired_face:"😫",tm:"™️",toilet:"🚽",tokyo_tower:"🗼",tomato:"🍅",tongue:"👅",top:"🔝",tophat:"🎩",tornado:"🌪",trackball:"🖲",tractor:"🚜",traffic_light:"🚥",train:"🚋",train2:"🚆",tram:"🚊",triangular_flag_on_post:"🚩",triangular_ruler:"📐",trident:"🔱",triumph:"😤",trolleybus:"🚎",trophy:"🏆",tropical_drink:"🍹",tropical_fish:"🐠",truck:"🚚",trumpet:"🎺",tulip:"🌷",tumbler_glass:"🥃",turkey:"🦃",turtle:"🐢",tv:"📺",twisted_rightwards_arrows:"🔀",two_hearts:"💕",two_men_holding_hands:"👬",two_women_holding_hands:"👭",u5272:"🈹",u5408:"🈴",u55b6:"🈺",u6307:"🈯️",u6708:"🈷️",u6709:"🈶",u6e80:"🈵",u7121:"🈚️",u7533:"🈸",u7981:"🈲",u7a7a:"🈳",umbrella:"☔️",unamused:"😒",underage:"🔞",unicorn:"🦄",unlock:"🔓",up:"🆙",upside_down_face:"🙃",v:"✌️",vertical_traffic_light:"🚦",vhs:"📼",vibration_mode:"📳",video_camera:"📹",video_game:"🎮",violin:"🎻",virgo:"♍️",volcano:"🌋",volleyball:"🏐",vs:"🆚",vulcan_salute:"🖖",walking_man:"🚶",walking_woman:"🚶&zwj;♀️",waning_crescent_moon:"🌘",waning_gibbous_moon:"🌖",warning:"⚠️",wastebasket:"🗑",watch:"⌚️",water_buffalo:"🐃",watermelon:"🍉",wave:"👋",wavy_dash:"〰️",waxing_crescent_moon:"🌒",wc:"🚾",weary:"😩",wedding:"💒",weight_lifting_man:"🏋️",weight_lifting_woman:"🏋️&zwj;♀️",whale:"🐳",whale2:"🐋",wheel_of_dharma:"☸️",wheelchair:"♿️",white_check_mark:"✅",white_circle:"⚪️",white_flag:"🏳️",white_flower:"💮",white_large_square:"⬜️",white_medium_small_square:"◽️",white_medium_square:"◻️",white_small_square:"▫️",white_square_button:"🔳",wilted_flower:"🥀",wind_chime:"🎐",wind_face:"🌬",wine_glass:"🍷",wink:"😉",wolf:"🐺",woman:"👩",woman_artist:"👩&zwj;🎨",woman_astronaut:"👩&zwj;🚀",woman_cartwheeling:"🤸&zwj;♀️",woman_cook:"👩&zwj;🍳",woman_facepalming:"🤦&zwj;♀️",woman_factory_worker:"👩&zwj;🏭",woman_farmer:"👩&zwj;🌾",woman_firefighter:"👩&zwj;🚒",woman_health_worker:"👩&zwj;⚕️",woman_judge:"👩&zwj;⚖️",woman_juggling:"🤹&zwj;♀️",woman_mechanic:"👩&zwj;🔧",woman_office_worker:"👩&zwj;💼",woman_pilot:"👩&zwj;✈️",woman_playing_handball:"🤾&zwj;♀️",woman_playing_water_polo:"🤽&zwj;♀️",woman_scientist:"👩&zwj;🔬",woman_shrugging:"🤷&zwj;♀️",woman_singer:"👩&zwj;🎤",woman_student:"👩&zwj;🎓",woman_teacher:"👩&zwj;🏫",woman_technologist:"👩&zwj;💻",woman_with_turban:"👳&zwj;♀️",womans_clothes:"👚",womans_hat:"👒",women_wrestling:"🤼&zwj;♀️",womens:"🚺",world_map:"🗺",worried:"😟",wrench:"🔧",writing_hand:"✍️",x:"❌",yellow_heart:"💛",yen:"💴",yin_yang:"☯️",yum:"😋",zap:"⚡️",zipper_mouth_face:"🤐",zzz:"💤",octocat:'<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',showdown:`<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`},n.Converter=function(e){var r={},a=[],i=[],o={},f=T,s={parsed:{},raw:"",format:""};p();function p(){e=e||{};for(var l in P)P.hasOwnProperty(l)&&(r[l]=P[l]);if(typeof e=="object")for(var C in e)e.hasOwnProperty(C)&&(r[C]=e[C]);else throw Error("Converter expects the passed parameter to be an object, but "+typeof e+" was passed instead.");r.extensions&&n.helper.forEach(r.extensions,m)}function m(l,C){if(C=C||null,n.helper.isString(l))if(l=n.helper.stdExtName(l),C=l,n.extensions[l]){console.warn("DEPRECATION WARNING: "+l+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),y(n.extensions[l],l);return}else if(!n.helper.isUndefined(g[l]))l=g[l];else throw Error('Extension "'+l+'" could not be loaded. It was either not found or is not a valid extension.');typeof l=="function"&&(l=l()),n.helper.isArray(l)||(l=[l]);var L=k(l,C);if(!L.valid)throw Error(L.error);for(var R=0;R<l.length;++R){switch(l[R].type){case"lang":a.push(l[R]);break;case"output":i.push(l[R]);break}if(l[R].hasOwnProperty("listeners"))for(var U in l[R].listeners)l[R].listeners.hasOwnProperty(U)&&A(U,l[R].listeners[U])}}function y(l,C){typeof l=="function"&&(l=l(new n.Converter)),n.helper.isArray(l)||(l=[l]);var L=k(l,C);if(!L.valid)throw Error(L.error);for(var R=0;R<l.length;++R)switch(l[R].type){case"lang":a.push(l[R]);break;case"output":i.push(l[R]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function A(l,C){if(!n.helper.isString(l))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof l+" given");if(typeof C!="function")throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof C+" given");o.hasOwnProperty(l)||(o[l]=[]),o[l].push(C)}function E(l){var C=l.match(/^\s*/)[0].length,L=new RegExp("^\\s{0,"+C+"}","gm");return l.replace(L,"")}this._dispatch=function(C,L,R,U){if(o.hasOwnProperty(C))for(var $=0;$<o[C].length;++$){var X=o[C][$](C,L,this,R,U);X&&typeof X<"u"&&(L=X)}return L},this.listen=function(l,C){return A(l,C),this},this.makeHtml=function(l){if(!l)return l;var C={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:a,outputModifiers:i,converter:this,ghCodeBlocks:[],metadata:{parsed:{},raw:"",format:""}};return l=l.replace(/¨/g,"¨T"),l=l.replace(/\$/g,"¨D"),l=l.replace(/\r\n/g,`
`),l=l.replace(/\r/g,`
`),l=l.replace(/\u00A0/g,"&nbsp;"),r.smartIndentationFix&&(l=E(l)),l=`

`+l+`

`,l=n.subParser("detab")(l,r,C),l=l.replace(/^[ \t]+$/mg,""),n.helper.forEach(a,function(L){l=n.subParser("runExtension")(L,l,r,C)}),l=n.subParser("metadata")(l,r,C),l=n.subParser("hashPreCodeTags")(l,r,C),l=n.subParser("githubCodeBlocks")(l,r,C),l=n.subParser("hashHTMLBlocks")(l,r,C),l=n.subParser("hashCodeTags")(l,r,C),l=n.subParser("stripLinkDefinitions")(l,r,C),l=n.subParser("blockGamut")(l,r,C),l=n.subParser("unhashHTMLSpans")(l,r,C),l=n.subParser("unescapeSpecialChars")(l,r,C),l=l.replace(/¨D/g,"$$"),l=l.replace(/¨T/g,"¨"),l=n.subParser("completeHTMLDocument")(l,r,C),n.helper.forEach(i,function(L){l=n.subParser("runExtension")(L,l,r,C)}),s=C.metadata,l},this.makeMarkdown=this.makeMd=function(l,C){if(l=l.replace(/\r\n/g,`
`),l=l.replace(/\r/g,`
`),l=l.replace(/>[ \t]+</,">¨NBSP;<"),!C)if(window&&window.document)C=window.document;else throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");var L=C.createElement("div");L.innerHTML=l;var R={preList:K(L)};Q(L);for(var U=L.childNodes,$="",X=0;X<U.length;X++)$+=n.subParser("makeMarkdown.node")(U[X],R);function Q(v){for(var F=0;F<v.childNodes.length;++F){var N=v.childNodes[F];N.nodeType===3?!/\S/.test(N.nodeValue)&&!/^[ ]+$/.test(N.nodeValue)?(v.removeChild(N),--F):(N.nodeValue=N.nodeValue.split(`
`).join(" "),N.nodeValue=N.nodeValue.replace(/(\s)+/g,"$1")):N.nodeType===1&&Q(N)}}function K(v){for(var F=v.querySelectorAll("pre"),N=[],W=0;W<F.length;++W)if(F[W].childElementCount===1&&F[W].firstChild.tagName.toLowerCase()==="code"){var de=F[W].firstChild.innerHTML.trim(),te=F[W].firstChild.getAttribute("data-language")||"";if(te==="")for(var le=F[W].firstChild.className.split(" "),se=0;se<le.length;++se){var Qe=le[se].match(/^language-(.+)$/);if(Qe!==null){te=Qe[1];break}}de=n.helper.unescapeHTMLEntities(de),N.push(de),F[W].outerHTML='<precode language="'+te+'" precodenum="'+W.toString()+'"></precode>'}else N.push(F[W].innerHTML),F[W].innerHTML="",F[W].setAttribute("prenum",W.toString());return N}return $},this.setOption=function(l,C){r[l]=C},this.getOption=function(l){return r[l]},this.getOptions=function(){return r},this.addExtension=function(l,C){C=C||null,m(l,C)},this.useExtension=function(l){m(l)},this.setFlavor=function(l){if(!M.hasOwnProperty(l))throw Error(l+" flavor was not found");var C=M[l];f=l;for(var L in C)C.hasOwnProperty(L)&&(r[L]=C[L])},this.getFlavor=function(){return f},this.removeExtension=function(l){n.helper.isArray(l)||(l=[l]);for(var C=0;C<l.length;++C){for(var L=l[C],R=0;R<a.length;++R)a[R]===L&&a.splice(R,1);for(var U=0;U<i.length;++U)i[U]===L&&i.splice(U,1)}},this.getAllExtensions=function(){return{language:a,output:i}},this.getMetadata=function(l){return l?s.raw:s.parsed},this.getMetadataFormat=function(){return s.format},this._setMetadataPair=function(l,C){s.parsed[l]=C},this._setMetadataFormat=function(l){s.format=l},this._setMetadataRaw=function(l){s.raw=l}},n.subParser("anchors",function(e,r,a){e=a.converter._dispatch("anchors.before",e,r,a);var i=function(o,f,s,p,m,y,A){if(n.helper.isUndefined(A)&&(A=""),s=s.toLowerCase(),o.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)p="";else if(!p)if(s||(s=f.toLowerCase().replace(/ ?\n/g," ")),p="#"+s,!n.helper.isUndefined(a.gUrls[s]))p=a.gUrls[s],n.helper.isUndefined(a.gTitles[s])||(A=a.gTitles[s]);else return o;p=p.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback);var E='<a href="'+p+'"';return A!==""&&A!==null&&(A=A.replace(/"/g,"&quot;"),A=A.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback),E+=' title="'+A+'"'),r.openLinksInNewWindow&&!/^#/.test(p)&&(E+=' rel="noopener noreferrer" target="¨E95Eblank"'),E+=">"+f+"</a>",E};return e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,i),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,i),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,i),e=e.replace(/\[([^\[\]]+)]()()()()()/g,i),r.ghMentions&&(e=e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi,function(o,f,s,p,m){if(s==="\\")return f+p;if(!n.helper.isString(r.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");var y=r.ghMentionsLink.replace(/\{u}/g,m),A="";return r.openLinksInNewWindow&&(A=' rel="noopener noreferrer" target="¨E95Eblank"'),f+'<a href="'+y+'"'+A+">"+p+"</a>"})),e=a.converter._dispatch("anchors.after",e,r,a),e});var H=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,S=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,b=/()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,w=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,_=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,x=function(e){return function(r,a,i,o,f,s,p){i=i.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback);var m=i,y="",A="",E=a||"",l=p||"";return/^www\./i.test(i)&&(i=i.replace(/^www\./i,"http://www.")),e.excludeTrailingPunctuationFromURLs&&s&&(y=s),e.openLinksInNewWindow&&(A=' rel="noopener noreferrer" target="¨E95Eblank"'),E+'<a href="'+i+'"'+A+">"+m+"</a>"+y+l}},j=function(e,r){return function(a,i,o){var f="mailto:";return i=i||"",o=n.subParser("unescapeSpecialChars")(o,e,r),e.encodeEmails?(f=n.helper.encodeEmailAddress(f+o),o=n.helper.encodeEmailAddress(o)):f=f+o,i+'<a href="'+f+'">'+o+"</a>"}};n.subParser("autoLinks",function(e,r,a){return e=a.converter._dispatch("autoLinks.before",e,r,a),e=e.replace(b,x(r)),e=e.replace(_,j(r,a)),e=a.converter._dispatch("autoLinks.after",e,r,a),e}),n.subParser("simplifiedAutoLinks",function(e,r,a){return r.simplifiedAutoLink&&(e=a.converter._dispatch("simplifiedAutoLinks.before",e,r,a),r.excludeTrailingPunctuationFromURLs?e=e.replace(S,x(r)):e=e.replace(H,x(r)),e=e.replace(w,j(r,a)),e=a.converter._dispatch("simplifiedAutoLinks.after",e,r,a)),e}),n.subParser("blockGamut",function(e,r,a){return e=a.converter._dispatch("blockGamut.before",e,r,a),e=n.subParser("blockQuotes")(e,r,a),e=n.subParser("headers")(e,r,a),e=n.subParser("horizontalRule")(e,r,a),e=n.subParser("lists")(e,r,a),e=n.subParser("codeBlocks")(e,r,a),e=n.subParser("tables")(e,r,a),e=n.subParser("hashHTMLBlocks")(e,r,a),e=n.subParser("paragraphs")(e,r,a),e=a.converter._dispatch("blockGamut.after",e,r,a),e}),n.subParser("blockQuotes",function(e,r,a){e=a.converter._dispatch("blockQuotes.before",e,r,a),e=e+`

`;var i=/(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;return r.splitAdjacentBlockquotes&&(i=/^ {0,3}>[\s\S]*?(?:\n\n)/gm),e=e.replace(i,function(o){return o=o.replace(/^[ \t]*>[ \t]?/gm,""),o=o.replace(/¨0/g,""),o=o.replace(/^[ \t]+$/gm,""),o=n.subParser("githubCodeBlocks")(o,r,a),o=n.subParser("blockGamut")(o,r,a),o=o.replace(/(^|\n)/g,"$1  "),o=o.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(f,s){var p=s;return p=p.replace(/^  /mg,"¨0"),p=p.replace(/¨0/g,""),p}),n.subParser("hashBlock")(`<blockquote>
`+o+`
</blockquote>`,r,a)}),e=a.converter._dispatch("blockQuotes.after",e,r,a),e}),n.subParser("codeBlocks",function(e,r,a){e=a.converter._dispatch("codeBlocks.before",e,r,a),e+="¨0";var i=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;return e=e.replace(i,function(o,f,s){var p=f,m=s,y=`
`;return p=n.subParser("outdent")(p,r,a),p=n.subParser("encodeCode")(p,r,a),p=n.subParser("detab")(p,r,a),p=p.replace(/^\n+/g,""),p=p.replace(/\n+$/g,""),r.omitExtraWLInCodeBlocks&&(y=""),p="<pre><code>"+p+y+"</code></pre>",n.subParser("hashBlock")(p,r,a)+m}),e=e.replace(/¨0/,""),e=a.converter._dispatch("codeBlocks.after",e,r,a),e}),n.subParser("codeSpans",function(e,r,a){return e=a.converter._dispatch("codeSpans.before",e,r,a),typeof e>"u"&&(e=""),e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(i,o,f,s){var p=s;return p=p.replace(/^([ \t]*)/g,""),p=p.replace(/[ \t]*$/g,""),p=n.subParser("encodeCode")(p,r,a),p=o+"<code>"+p+"</code>",p=n.subParser("hashHTMLSpans")(p,r,a),p}),e=a.converter._dispatch("codeSpans.after",e,r,a),e}),n.subParser("completeHTMLDocument",function(e,r,a){if(!r.completeHTMLDocument)return e;e=a.converter._dispatch("completeHTMLDocument.before",e,r,a);var i="html",o=`<!DOCTYPE HTML>
`,f="",s=`<meta charset="utf-8">
`,p="",m="";typeof a.metadata.parsed.doctype<"u"&&(o="<!DOCTYPE "+a.metadata.parsed.doctype+`>
`,i=a.metadata.parsed.doctype.toString().toLowerCase(),(i==="html"||i==="html5")&&(s='<meta charset="utf-8">'));for(var y in a.metadata.parsed)if(a.metadata.parsed.hasOwnProperty(y))switch(y.toLowerCase()){case"doctype":break;case"title":f="<title>"+a.metadata.parsed.title+`</title>
`;break;case"charset":i==="html"||i==="html5"?s='<meta charset="'+a.metadata.parsed.charset+`">
`:s='<meta name="charset" content="'+a.metadata.parsed.charset+`">
`;break;case"language":case"lang":p=' lang="'+a.metadata.parsed[y]+'"',m+='<meta name="'+y+'" content="'+a.metadata.parsed[y]+`">
`;break;default:m+='<meta name="'+y+'" content="'+a.metadata.parsed[y]+`">
`}return e=o+"<html"+p+`>
<head>
`+f+s+m+`</head>
<body>
`+e.trim()+`
</body>
</html>`,e=a.converter._dispatch("completeHTMLDocument.after",e,r,a),e}),n.subParser("detab",function(e,r,a){return e=a.converter._dispatch("detab.before",e,r,a),e=e.replace(/\t(?=\t)/g,"    "),e=e.replace(/\t/g,"¨A¨B"),e=e.replace(/¨B(.+?)¨A/g,function(i,o){for(var f=o,s=4-f.length%4,p=0;p<s;p++)f+=" ";return f}),e=e.replace(/¨A/g,"    "),e=e.replace(/¨B/g,""),e=a.converter._dispatch("detab.after",e,r,a),e}),n.subParser("ellipsis",function(e,r,a){return r.ellipsis&&(e=a.converter._dispatch("ellipsis.before",e,r,a),e=e.replace(/\.\.\./g,"…"),e=a.converter._dispatch("ellipsis.after",e,r,a)),e}),n.subParser("emoji",function(e,r,a){if(!r.emoji)return e;e=a.converter._dispatch("emoji.before",e,r,a);var i=/:([\S]+?):/g;return e=e.replace(i,function(o,f){return n.helper.emojis.hasOwnProperty(f)?n.helper.emojis[f]:o}),e=a.converter._dispatch("emoji.after",e,r,a),e}),n.subParser("encodeAmpsAndAngles",function(e,r,a){return e=a.converter._dispatch("encodeAmpsAndAngles.before",e,r,a),e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?$!])/gi,"&lt;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=a.converter._dispatch("encodeAmpsAndAngles.after",e,r,a),e}),n.subParser("encodeBackslashEscapes",function(e,r,a){return e=a.converter._dispatch("encodeBackslashEscapes.before",e,r,a),e=e.replace(/\\(\\)/g,n.helper.escapeCharactersCallback),e=e.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g,n.helper.escapeCharactersCallback),e=a.converter._dispatch("encodeBackslashEscapes.after",e,r,a),e}),n.subParser("encodeCode",function(e,r,a){return e=a.converter._dispatch("encodeCode.before",e,r,a),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,n.helper.escapeCharactersCallback),e=a.converter._dispatch("encodeCode.after",e,r,a),e}),n.subParser("escapeSpecialCharsWithinTagAttributes",function(e,r,a){e=a.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",e,r,a);var i=/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,o=/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;return e=e.replace(i,function(f){return f.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,n.helper.escapeCharactersCallback)}),e=e.replace(o,function(f){return f.replace(/([\\`*_~=|])/g,n.helper.escapeCharactersCallback)}),e=a.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",e,r,a),e}),n.subParser("githubCodeBlocks",function(e,r,a){return r.ghCodeBlocks?(e=a.converter._dispatch("githubCodeBlocks.before",e,r,a),e+="¨0",e=e.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,function(i,o,f,s){var p=r.omitExtraWLInCodeBlocks?"":`
`;return s=n.subParser("encodeCode")(s,r,a),s=n.subParser("detab")(s,r,a),s=s.replace(/^\n+/g,""),s=s.replace(/\n+$/g,""),s="<pre><code"+(f?' class="'+f+" language-"+f+'"':"")+">"+s+p+"</code></pre>",s=n.subParser("hashBlock")(s,r,a),`

¨G`+(a.ghCodeBlocks.push({text:i,codeblock:s})-1)+`G

`}),e=e.replace(/¨0/,""),a.converter._dispatch("githubCodeBlocks.after",e,r,a)):e}),n.subParser("hashBlock",function(e,r,a){return e=a.converter._dispatch("hashBlock.before",e,r,a),e=e.replace(/(^\n+|\n+$)/g,""),e=`

¨K`+(a.gHtmlBlocks.push(e)-1)+`K

`,e=a.converter._dispatch("hashBlock.after",e,r,a),e}),n.subParser("hashCodeTags",function(e,r,a){e=a.converter._dispatch("hashCodeTags.before",e,r,a);var i=function(o,f,s,p){var m=s+n.subParser("encodeCode")(f,r,a)+p;return"¨C"+(a.gHtmlSpans.push(m)-1)+"C"};return e=n.helper.replaceRecursiveRegExp(e,i,"<code\\b[^>]*>","</code>","gim"),e=a.converter._dispatch("hashCodeTags.after",e,r,a),e}),n.subParser("hashElement",function(e,r,a){return function(i,o){var f=o;return f=f.replace(/\n\n/g,`
`),f=f.replace(/^\n/,""),f=f.replace(/\n+$/g,""),f=`

¨K`+(a.gHtmlBlocks.push(f)-1)+`K

`,f}}),n.subParser("hashHTMLBlocks",function(e,r,a){e=a.converter._dispatch("hashHTMLBlocks.before",e,r,a);var i=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],o=function(l,C,L,R){var U=l;return L.search(/\bmarkdown\b/)!==-1&&(U=L+a.converter.makeHtml(C)+R),`

¨K`+(a.gHtmlBlocks.push(U)-1)+`K

`};r.backslashEscapesHTMLTags&&(e=e.replace(/\\<(\/?[^>]+?)>/g,function(l,C){return"&lt;"+C+"&gt;"}));for(var f=0;f<i.length;++f)for(var s,p=new RegExp("^ {0,3}(<"+i[f]+"\\b[^>]*>)","im"),m="<"+i[f]+"\\b[^>]*>",y="</"+i[f]+">";(s=n.helper.regexIndexOf(e,p))!==-1;){var A=n.helper.splitAtIndex(e,s),E=n.helper.replaceRecursiveRegExp(A[1],o,m,y,"im");if(E===A[1])break;e=A[0].concat(E)}return e=e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,n.subParser("hashElement")(e,r,a)),e=n.helper.replaceRecursiveRegExp(e,function(l){return`

¨K`+(a.gHtmlBlocks.push(l)-1)+`K

`},"^ {0,3}<!--","-->","gm"),e=e.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,n.subParser("hashElement")(e,r,a)),e=a.converter._dispatch("hashHTMLBlocks.after",e,r,a),e}),n.subParser("hashHTMLSpans",function(e,r,a){e=a.converter._dispatch("hashHTMLSpans.before",e,r,a);function i(o){return"¨C"+(a.gHtmlSpans.push(o)-1)+"C"}return e=e.replace(/<[^>]+?\/>/gi,function(o){return i(o)}),e=e.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,function(o){return i(o)}),e=e.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,function(o){return i(o)}),e=e.replace(/<[^>]+?>/gi,function(o){return i(o)}),e=a.converter._dispatch("hashHTMLSpans.after",e,r,a),e}),n.subParser("unhashHTMLSpans",function(e,r,a){e=a.converter._dispatch("unhashHTMLSpans.before",e,r,a);for(var i=0;i<a.gHtmlSpans.length;++i){for(var o=a.gHtmlSpans[i],f=0;/¨C(\d+)C/.test(o);){var s=RegExp.$1;if(o=o.replace("¨C"+s+"C",a.gHtmlSpans[s]),f===10){console.error("maximum nesting of 10 spans reached!!!");break}++f}e=e.replace("¨C"+i+"C",o)}return e=a.converter._dispatch("unhashHTMLSpans.after",e,r,a),e}),n.subParser("hashPreCodeTags",function(e,r,a){e=a.converter._dispatch("hashPreCodeTags.before",e,r,a);var i=function(o,f,s,p){var m=s+n.subParser("encodeCode")(f,r,a)+p;return`

¨G`+(a.ghCodeBlocks.push({text:o,codeblock:m})-1)+`G

`};return e=n.helper.replaceRecursiveRegExp(e,i,"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),e=a.converter._dispatch("hashPreCodeTags.after",e,r,a),e}),n.subParser("headers",function(e,r,a){e=a.converter._dispatch("headers.before",e,r,a);var i=isNaN(parseInt(r.headerLevelStart))?1:parseInt(r.headerLevelStart),o=r.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,f=r.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;e=e.replace(o,function(m,y){var A=n.subParser("spanGamut")(y,r,a),E=r.noHeaderId?"":' id="'+p(y)+'"',l=i,C="<h"+l+E+">"+A+"</h"+l+">";return n.subParser("hashBlock")(C,r,a)}),e=e.replace(f,function(m,y){var A=n.subParser("spanGamut")(y,r,a),E=r.noHeaderId?"":' id="'+p(y)+'"',l=i+1,C="<h"+l+E+">"+A+"</h"+l+">";return n.subParser("hashBlock")(C,r,a)});var s=r.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;e=e.replace(s,function(m,y,A){var E=A;r.customizedHeaderId&&(E=A.replace(/\s?\{([^{]+?)}\s*$/,""));var l=n.subParser("spanGamut")(E,r,a),C=r.noHeaderId?"":' id="'+p(A)+'"',L=i-1+y.length,R="<h"+L+C+">"+l+"</h"+L+">";return n.subParser("hashBlock")(R,r,a)});function p(m){var y,A;if(r.customizedHeaderId){var E=m.match(/\{([^{]+?)}\s*$/);E&&E[1]&&(m=E[1])}return y=m,n.helper.isString(r.prefixHeaderId)?A=r.prefixHeaderId:r.prefixHeaderId===!0?A="section-":A="",r.rawPrefixHeaderId||(y=A+y),r.ghCompatibleHeaderId?y=y.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():r.rawHeaderId?y=y.replace(/ /g,"-").replace(/&amp;/g,"&").replace(/¨T/g,"¨").replace(/¨D/g,"$").replace(/["']/g,"-").toLowerCase():y=y.replace(/[^\w]/g,"").toLowerCase(),r.rawPrefixHeaderId&&(y=A+y),a.hashLinkCounts[y]?y=y+"-"+a.hashLinkCounts[y]++:a.hashLinkCounts[y]=1,y}return e=a.converter._dispatch("headers.after",e,r,a),e}),n.subParser("horizontalRule",function(e,r,a){e=a.converter._dispatch("horizontalRule.before",e,r,a);var i=n.subParser("hashBlock")("<hr />",r,a);return e=e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,i),e=e.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,i),e=e.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,i),e=a.converter._dispatch("horizontalRule.after",e,r,a),e}),n.subParser("images",function(e,r,a){e=a.converter._dispatch("images.before",e,r,a);var i=/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,o=/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,f=/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,s=/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,p=/!\[([^\[\]]+)]()()()()()/g;function m(A,E,l,C,L,R,U,$){return C=C.replace(/\s/g,""),y(A,E,l,C,L,R,U,$)}function y(A,E,l,C,L,R,U,$){var X=a.gUrls,Q=a.gTitles,K=a.gDimensions;if(l=l.toLowerCase(),$||($=""),A.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)C="";else if(C===""||C===null)if((l===""||l===null)&&(l=E.toLowerCase().replace(/ ?\n/g," ")),C="#"+l,!n.helper.isUndefined(X[l]))C=X[l],n.helper.isUndefined(Q[l])||($=Q[l]),n.helper.isUndefined(K[l])||(L=K[l].width,R=K[l].height);else return A;E=E.replace(/"/g,"&quot;").replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback),C=C.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback);var v='<img src="'+C+'" alt="'+E+'"';return $&&n.helper.isString($)&&($=$.replace(/"/g,"&quot;").replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback),v+=' title="'+$+'"'),L&&R&&(L=L==="*"?"auto":L,R=R==="*"?"auto":R,v+=' width="'+L+'"',v+=' height="'+R+'"'),v+=" />",v}return e=e.replace(s,y),e=e.replace(f,m),e=e.replace(o,y),e=e.replace(i,y),e=e.replace(p,y),e=a.converter._dispatch("images.after",e,r,a),e}),n.subParser("italicsAndBold",function(e,r,a){e=a.converter._dispatch("italicsAndBold.before",e,r,a);function i(o,f,s){return f+o+s}return r.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(o,f){return i(f,"<strong><em>","</em></strong>")}),e=e.replace(/\b__(\S[\s\S]*?)__\b/g,function(o,f){return i(f,"<strong>","</strong>")}),e=e.replace(/\b_(\S[\s\S]*?)_\b/g,function(o,f){return i(f,"<em>","</em>")})):(e=e.replace(/___(\S[\s\S]*?)___/g,function(o,f){return/\S$/.test(f)?i(f,"<strong><em>","</em></strong>"):o}),e=e.replace(/__(\S[\s\S]*?)__/g,function(o,f){return/\S$/.test(f)?i(f,"<strong>","</strong>"):o}),e=e.replace(/_([^\s_][\s\S]*?)_/g,function(o,f){return/\S$/.test(f)?i(f,"<em>","</em>"):o})),r.literalMidWordAsterisks?(e=e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,function(o,f,s){return i(s,f+"<strong><em>","</em></strong>")}),e=e.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,function(o,f,s){return i(s,f+"<strong>","</strong>")}),e=e.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,function(o,f,s){return i(s,f+"<em>","</em>")})):(e=e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(o,f){return/\S$/.test(f)?i(f,"<strong><em>","</em></strong>"):o}),e=e.replace(/\*\*(\S[\s\S]*?)\*\*/g,function(o,f){return/\S$/.test(f)?i(f,"<strong>","</strong>"):o}),e=e.replace(/\*([^\s*][\s\S]*?)\*/g,function(o,f){return/\S$/.test(f)?i(f,"<em>","</em>"):o})),e=a.converter._dispatch("italicsAndBold.after",e,r,a),e}),n.subParser("lists",function(e,r,a){function i(s,p){a.gListLevel++,s=s.replace(/\n{2,}$/,`
`),s+="¨0";var m=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,y=/\n[ \t]*\n(?!¨0)/.test(s);return r.disableForced4SpacesIndentedSublists&&(m=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),s=s.replace(m,function(A,E,l,C,L,R,U){U=U&&U.trim()!=="";var $=n.subParser("outdent")(L,r,a),X="";return R&&r.tasklists&&(X=' class="task-list-item" style="list-style-type: none;"',$=$.replace(/^[ \t]*\[(x|X| )?]/m,function(){var Q='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return U&&(Q+=" checked"),Q+=">",Q})),$=$.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(Q){return"¨A"+Q}),E||$.search(/\n{2,}/)>-1?($=n.subParser("githubCodeBlocks")($,r,a),$=n.subParser("blockGamut")($,r,a)):($=n.subParser("lists")($,r,a),$=$.replace(/\n$/,""),$=n.subParser("hashHTMLBlocks")($,r,a),$=$.replace(/\n\n+/g,`

`),y?$=n.subParser("paragraphs")($,r,a):$=n.subParser("spanGamut")($,r,a)),$=$.replace("¨A",""),$="<li"+X+">"+$+`</li>
`,$}),s=s.replace(/¨0/g,""),a.gListLevel--,p&&(s=s.replace(/\s+$/,"")),s}function o(s,p){if(p==="ol"){var m=s.match(/^ *(\d+)\./);if(m&&m[1]!=="1")return' start="'+m[1]+'"'}return""}function f(s,p,m){var y=r.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,A=r.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,E=p==="ul"?y:A,l="";if(s.search(E)!==-1)(function L(R){var U=R.search(E),$=o(s,p);U!==-1?(l+=`

<`+p+$+`>
`+i(R.slice(0,U),!!m)+"</"+p+`>
`,p=p==="ul"?"ol":"ul",E=p==="ul"?y:A,L(R.slice(U))):l+=`

<`+p+$+`>
`+i(R,!!m)+"</"+p+`>
`})(s);else{var C=o(s,p);l=`

<`+p+C+`>
`+i(s,!!m)+"</"+p+`>
`}return l}return e=a.converter._dispatch("lists.before",e,r,a),e+="¨0",a.gListLevel?e=e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(s,p,m){var y=m.search(/[*+-]/g)>-1?"ul":"ol";return f(p,y,!0)}):e=e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(s,p,m,y){var A=y.search(/[*+-]/g)>-1?"ul":"ol";return f(m,A,!1)}),e=e.replace(/¨0/,""),e=a.converter._dispatch("lists.after",e,r,a),e}),n.subParser("metadata",function(e,r,a){if(!r.metadata)return e;e=a.converter._dispatch("metadata.before",e,r,a);function i(o){a.metadata.raw=o,o=o.replace(/&/g,"&amp;").replace(/"/g,"&quot;"),o=o.replace(/\n {4}/g," "),o.replace(/^([\S ]+): +([\s\S]+?)$/gm,function(f,s,p){return a.metadata.parsed[s]=p,""})}return e=e.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,function(o,f,s){return i(s),"¨M"}),e=e.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,function(o,f,s){return f&&(a.metadata.format=f),i(s),"¨M"}),e=e.replace(/¨M/g,""),e=a.converter._dispatch("metadata.after",e,r,a),e}),n.subParser("outdent",function(e,r,a){return e=a.converter._dispatch("outdent.before",e,r,a),e=e.replace(/^(\t|[ ]{1,4})/gm,"¨0"),e=e.replace(/¨0/g,""),e=a.converter._dispatch("outdent.after",e,r,a),e}),n.subParser("paragraphs",function(e,r,a){e=a.converter._dispatch("paragraphs.before",e,r,a),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"");for(var i=e.split(/\n{2,}/g),o=[],f=i.length,s=0;s<f;s++){var p=i[s];p.search(/¨(K|G)(\d+)\1/g)>=0?o.push(p):p.search(/\S/)>=0&&(p=n.subParser("spanGamut")(p,r,a),p=p.replace(/^([ \t]*)/g,"<p>"),p+="</p>",o.push(p))}for(f=o.length,s=0;s<f;s++){for(var m="",y=o[s],A=!1;/¨(K|G)(\d+)\1/.test(y);){var E=RegExp.$1,l=RegExp.$2;E==="K"?m=a.gHtmlBlocks[l]:A?m=n.subParser("encodeCode")(a.ghCodeBlocks[l].text,r,a):m=a.ghCodeBlocks[l].codeblock,m=m.replace(/\$/g,"$$$$"),y=y.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,m),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(y)&&(A=!0)}o[s]=y}return e=o.join(`
`),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,""),a.converter._dispatch("paragraphs.after",e,r,a)}),n.subParser("runExtension",function(e,r,a,i){if(e.filter)r=e.filter(r,i.converter,a);else if(e.regex){var o=e.regex;o instanceof RegExp||(o=new RegExp(o,"g")),r=r.replace(o,e.replace)}return r}),n.subParser("spanGamut",function(e,r,a){return e=a.converter._dispatch("spanGamut.before",e,r,a),e=n.subParser("codeSpans")(e,r,a),e=n.subParser("escapeSpecialCharsWithinTagAttributes")(e,r,a),e=n.subParser("encodeBackslashEscapes")(e,r,a),e=n.subParser("images")(e,r,a),e=n.subParser("anchors")(e,r,a),e=n.subParser("autoLinks")(e,r,a),e=n.subParser("simplifiedAutoLinks")(e,r,a),e=n.subParser("emoji")(e,r,a),e=n.subParser("underline")(e,r,a),e=n.subParser("italicsAndBold")(e,r,a),e=n.subParser("strikethrough")(e,r,a),e=n.subParser("ellipsis")(e,r,a),e=n.subParser("hashHTMLSpans")(e,r,a),e=n.subParser("encodeAmpsAndAngles")(e,r,a),r.simpleLineBreaks?/\n\n¨K/.test(e)||(e=e.replace(/\n+/g,`<br />
`)):e=e.replace(/  +\n/g,`<br />
`),e=a.converter._dispatch("spanGamut.after",e,r,a),e}),n.subParser("strikethrough",function(e,r,a){function i(o){return r.simplifiedAutoLink&&(o=n.subParser("simplifiedAutoLinks")(o,r,a)),"<del>"+o+"</del>"}return r.strikethrough&&(e=a.converter._dispatch("strikethrough.before",e,r,a),e=e.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(o,f){return i(f)}),e=a.converter._dispatch("strikethrough.after",e,r,a)),e}),n.subParser("stripLinkDefinitions",function(e,r,a){var i=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,o=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;e+="¨0";var f=function(s,p,m,y,A,E,l){return p=p.toLowerCase(),e.toLowerCase().split(p).length-1<2?s:(m.match(/^data:.+?\/.+?;base64,/)?a.gUrls[p]=m.replace(/\s/g,""):a.gUrls[p]=n.subParser("encodeAmpsAndAngles")(m,r,a),E?E+l:(l&&(a.gTitles[p]=l.replace(/"|'/g,"&quot;")),r.parseImgDimensions&&y&&A&&(a.gDimensions[p]={width:y,height:A}),""))};return e=e.replace(o,f),e=e.replace(i,f),e=e.replace(/¨0/,""),e}),n.subParser("tables",function(e,r,a){if(!r.tables)return e;var i=/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,o=/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;function f(A){return/^:[ \t]*--*$/.test(A)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(A)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(A)?' style="text-align:center;"':""}function s(A,E){var l="";return A=A.trim(),(r.tablesHeaderId||r.tableHeaderId)&&(l=' id="'+A.replace(/ /g,"_").toLowerCase()+'"'),A=n.subParser("spanGamut")(A,r,a),"<th"+l+E+">"+A+`</th>
`}function p(A,E){var l=n.subParser("spanGamut")(A,r,a);return"<td"+E+">"+l+`</td>
`}function m(A,E){for(var l=`<table>
<thead>
<tr>
`,C=A.length,L=0;L<C;++L)l+=A[L];for(l+=`</tr>
</thead>
<tbody>
`,L=0;L<E.length;++L){l+=`<tr>
`;for(var R=0;R<C;++R)l+=E[L][R];l+=`</tr>
`}return l+=`</tbody>
</table>
`,l}function y(A){var E,l=A.split(`
`);for(E=0;E<l.length;++E)/^ {0,3}\|/.test(l[E])&&(l[E]=l[E].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(l[E])&&(l[E]=l[E].replace(/\|[ \t]*$/,"")),l[E]=n.subParser("codeSpans")(l[E],r,a);var C=l[0].split("|").map(function(v){return v.trim()}),L=l[1].split("|").map(function(v){return v.trim()}),R=[],U=[],$=[],X=[];for(l.shift(),l.shift(),E=0;E<l.length;++E)l[E].trim()!==""&&R.push(l[E].split("|").map(function(v){return v.trim()}));if(C.length<L.length)return A;for(E=0;E<L.length;++E)$.push(f(L[E]));for(E=0;E<C.length;++E)n.helper.isUndefined($[E])&&($[E]=""),U.push(s(C[E],$[E]));for(E=0;E<R.length;++E){for(var Q=[],K=0;K<U.length;++K)n.helper.isUndefined(R[E][K]),Q.push(p(R[E][K],$[K]));X.push(Q)}return m(U,X)}return e=a.converter._dispatch("tables.before",e,r,a),e=e.replace(/\\(\|)/g,n.helper.escapeCharactersCallback),e=e.replace(i,y),e=e.replace(o,y),e=a.converter._dispatch("tables.after",e,r,a),e}),n.subParser("underline",function(e,r,a){return r.underline&&(e=a.converter._dispatch("underline.before",e,r,a),r.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(i,o){return"<u>"+o+"</u>"}),e=e.replace(/\b__(\S[\s\S]*?)__\b/g,function(i,o){return"<u>"+o+"</u>"})):(e=e.replace(/___(\S[\s\S]*?)___/g,function(i,o){return/\S$/.test(o)?"<u>"+o+"</u>":i}),e=e.replace(/__(\S[\s\S]*?)__/g,function(i,o){return/\S$/.test(o)?"<u>"+o+"</u>":i})),e=e.replace(/(_)/g,n.helper.escapeCharactersCallback),e=a.converter._dispatch("underline.after",e,r,a)),e}),n.subParser("unescapeSpecialChars",function(e,r,a){return e=a.converter._dispatch("unescapeSpecialChars.before",e,r,a),e=e.replace(/¨E(\d+)E/g,function(i,o){var f=parseInt(o);return String.fromCharCode(f)}),e=a.converter._dispatch("unescapeSpecialChars.after",e,r,a),e}),n.subParser("makeMarkdown.blockquote",function(e,r){var a="";if(e.hasChildNodes())for(var i=e.childNodes,o=i.length,f=0;f<o;++f){var s=n.subParser("makeMarkdown.node")(i[f],r);s!==""&&(a+=s)}return a=a.trim(),a="> "+a.split(`
`).join(`
> `),a}),n.subParser("makeMarkdown.codeBlock",function(e,r){var a=e.getAttribute("language"),i=e.getAttribute("precodenum");return"```"+a+`
`+r.preList[i]+"\n```"}),n.subParser("makeMarkdown.codeSpan",function(e){return"`"+e.innerHTML+"`"}),n.subParser("makeMarkdown.emphasis",function(e,r){var a="";if(e.hasChildNodes()){a+="*";for(var i=e.childNodes,o=i.length,f=0;f<o;++f)a+=n.subParser("makeMarkdown.node")(i[f],r);a+="*"}return a}),n.subParser("makeMarkdown.header",function(e,r,a){var i=new Array(a+1).join("#"),o="";if(e.hasChildNodes()){o=i+" ";for(var f=e.childNodes,s=f.length,p=0;p<s;++p)o+=n.subParser("makeMarkdown.node")(f[p],r)}return o}),n.subParser("makeMarkdown.hr",function(){return"---"}),n.subParser("makeMarkdown.image",function(e){var r="";return e.hasAttribute("src")&&(r+="!["+e.getAttribute("alt")+"](",r+="<"+e.getAttribute("src")+">",e.hasAttribute("width")&&e.hasAttribute("height")&&(r+=" ="+e.getAttribute("width")+"x"+e.getAttribute("height")),e.hasAttribute("title")&&(r+=' "'+e.getAttribute("title")+'"'),r+=")"),r}),n.subParser("makeMarkdown.links",function(e,r){var a="";if(e.hasChildNodes()&&e.hasAttribute("href")){var i=e.childNodes,o=i.length;a="[";for(var f=0;f<o;++f)a+=n.subParser("makeMarkdown.node")(i[f],r);a+="](",a+="<"+e.getAttribute("href")+">",e.hasAttribute("title")&&(a+=' "'+e.getAttribute("title")+'"'),a+=")"}return a}),n.subParser("makeMarkdown.list",function(e,r,a){var i="";if(!e.hasChildNodes())return"";for(var o=e.childNodes,f=o.length,s=e.getAttribute("start")||1,p=0;p<f;++p)if(!(typeof o[p].tagName>"u"||o[p].tagName.toLowerCase()!=="li")){var m="";a==="ol"?m=s.toString()+". ":m="- ",i+=m+n.subParser("makeMarkdown.listItem")(o[p],r),++s}return i+=`
<!-- -->
`,i.trim()}),n.subParser("makeMarkdown.listItem",function(e,r){for(var a="",i=e.childNodes,o=i.length,f=0;f<o;++f)a+=n.subParser("makeMarkdown.node")(i[f],r);return/\n$/.test(a)?a=a.split(`
`).join(`
    `).replace(/^ {4}$/gm,"").replace(/\n\n+/g,`

`):a+=`
`,a}),n.subParser("makeMarkdown.node",function(e,r,a){a=a||!1;var i="";if(e.nodeType===3)return n.subParser("makeMarkdown.txt")(e,r);if(e.nodeType===8)return"<!--"+e.data+`-->

`;if(e.nodeType!==1)return"";var o=e.tagName.toLowerCase();switch(o){case"h1":a||(i=n.subParser("makeMarkdown.header")(e,r,1)+`

`);break;case"h2":a||(i=n.subParser("makeMarkdown.header")(e,r,2)+`

`);break;case"h3":a||(i=n.subParser("makeMarkdown.header")(e,r,3)+`

`);break;case"h4":a||(i=n.subParser("makeMarkdown.header")(e,r,4)+`

`);break;case"h5":a||(i=n.subParser("makeMarkdown.header")(e,r,5)+`

`);break;case"h6":a||(i=n.subParser("makeMarkdown.header")(e,r,6)+`

`);break;case"p":a||(i=n.subParser("makeMarkdown.paragraph")(e,r)+`

`);break;case"blockquote":a||(i=n.subParser("makeMarkdown.blockquote")(e,r)+`

`);break;case"hr":a||(i=n.subParser("makeMarkdown.hr")(e,r)+`

`);break;case"ol":a||(i=n.subParser("makeMarkdown.list")(e,r,"ol")+`

`);break;case"ul":a||(i=n.subParser("makeMarkdown.list")(e,r,"ul")+`

`);break;case"precode":a||(i=n.subParser("makeMarkdown.codeBlock")(e,r)+`

`);break;case"pre":a||(i=n.subParser("makeMarkdown.pre")(e,r)+`

`);break;case"table":a||(i=n.subParser("makeMarkdown.table")(e,r)+`

`);break;case"code":i=n.subParser("makeMarkdown.codeSpan")(e,r);break;case"em":case"i":i=n.subParser("makeMarkdown.emphasis")(e,r);break;case"strong":case"b":i=n.subParser("makeMarkdown.strong")(e,r);break;case"del":i=n.subParser("makeMarkdown.strikethrough")(e,r);break;case"a":i=n.subParser("makeMarkdown.links")(e,r);break;case"img":i=n.subParser("makeMarkdown.image")(e,r);break;default:i=e.outerHTML+`

`}return i}),n.subParser("makeMarkdown.paragraph",function(e,r){var a="";if(e.hasChildNodes())for(var i=e.childNodes,o=i.length,f=0;f<o;++f)a+=n.subParser("makeMarkdown.node")(i[f],r);return a=a.trim(),a}),n.subParser("makeMarkdown.pre",function(e,r){var a=e.getAttribute("prenum");return"<pre>"+r.preList[a]+"</pre>"}),n.subParser("makeMarkdown.strikethrough",function(e,r){var a="";if(e.hasChildNodes()){a+="~~";for(var i=e.childNodes,o=i.length,f=0;f<o;++f)a+=n.subParser("makeMarkdown.node")(i[f],r);a+="~~"}return a}),n.subParser("makeMarkdown.strong",function(e,r){var a="";if(e.hasChildNodes()){a+="**";for(var i=e.childNodes,o=i.length,f=0;f<o;++f)a+=n.subParser("makeMarkdown.node")(i[f],r);a+="**"}return a}),n.subParser("makeMarkdown.table",function(e,r){var a="",i=[[],[]],o=e.querySelectorAll("thead>tr>th"),f=e.querySelectorAll("tbody>tr"),s,p;for(s=0;s<o.length;++s){var m=n.subParser("makeMarkdown.tableCell")(o[s],r),y="---";if(o[s].hasAttribute("style")){var A=o[s].getAttribute("style").toLowerCase().replace(/\s/g,"");switch(A){case"text-align:left;":y=":---";break;case"text-align:right;":y="---:";break;case"text-align:center;":y=":---:";break}}i[0][s]=m.trim(),i[1][s]=y}for(s=0;s<f.length;++s){var E=i.push([])-1,l=f[s].getElementsByTagName("td");for(p=0;p<o.length;++p){var C=" ";typeof l[p]<"u"&&(C=n.subParser("makeMarkdown.tableCell")(l[p],r)),i[E].push(C)}}var L=3;for(s=0;s<i.length;++s)for(p=0;p<i[s].length;++p){var R=i[s][p].length;R>L&&(L=R)}for(s=0;s<i.length;++s){for(p=0;p<i[s].length;++p)s===1?i[s][p].slice(-1)===":"?i[s][p]=n.helper.padEnd(i[s][p].slice(-1),L-1,"-")+":":i[s][p]=n.helper.padEnd(i[s][p],L,"-"):i[s][p]=n.helper.padEnd(i[s][p],L);a+="| "+i[s].join(" | ")+` |
`}return a.trim()}),n.subParser("makeMarkdown.tableCell",function(e,r){var a="";if(!e.hasChildNodes())return"";for(var i=e.childNodes,o=i.length,f=0;f<o;++f)a+=n.subParser("makeMarkdown.node")(i[f],r,!0);return a.trim()}),n.subParser("makeMarkdown.txt",function(e){var r=e.nodeValue;return r=r.replace(/ +/g," "),r=r.replace(/¨NBSP;/g," "),r=n.helper.unescapeHTMLEntities(r),r=r.replace(/([*_~|`])/g,"\\$1"),r=r.replace(/^(\s*)>/g,"\\$1>"),r=r.replace(/^#/gm,"\\#"),r=r.replace(/^(\s*)([-=]{3,})(\s*)$/,"$1\\$2$3"),r=r.replace(/^( {0,3}\d+)\./gm,"$1\\."),r=r.replace(/^( {0,3})([+-])/gm,"$1\\$2"),r=r.replace(/]([\s]*)\(/g,"\\]$1\\("),r=r.replace(/^ {0,3}\[([\S \t]*?)]:/gm,"\\[$1]:"),r});var O=this;t.exports?t.exports=n:O.showdown=n}).call(rt)}(ye)),ye.exports}var ut=at();const dt=yn(ut);function ue({class:t,...u},d){const n=J(t),g=new dt.Converter().makeHtml(d),P=h.div({class:`style-markup ${n.val}`,innerHTML:g,...u});return Prism.highlightAllUnder(P),P}function Ae(t=0){return new Promise(u=>setTimeout(u,t))}function st(t,u){const d=t.indexOf(u);return d===-1?t:[...t.slice(0,d),...t.slice(d+1)]}function ot(t,u){return t.indexOf(u)===-1?t.concat(u):st(t,u)}function it(t,u,d=[]){const n=new AbortController;return document.addEventListener("click",c=>{if(!(c.target instanceof Node))return;const g=c.target;t.contains(g)||d.some(P=>P.contains(g))||document.contains(g)&&u(c)},{signal:n.signal}),n}function ct(t,u){for(const d of u)if(d[0]===t)return d[1];throw`error: non-exhaustive patterns: ${t} not covered`}function pe(t,u){const d=Array.isArray(t)?t:[t],n=Array.isArray(u)?u:[u];for(const c of n)if(d.includes(c))return!0;return!1}const ie={NONE:"none",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Y={HOVER_IN:"hover-in",HOVER_OUT:"hover-out",HOVER:"hover",CLICK:"click",FOCUS:"focus",FOCUS_IN:"focus-in",FOCUS_OUT:"focus-out"},Be=h.div({name:"Popups",class:"fixed inset-0 z-[100] pointer-events-none"});ge(document.documentElement,Be);function be({visible:t=B(!1),direction:u=ie.BOTTOM,trigger:d=Y.CLICK,onHide:n,name:c,class:g,...P},...T){const M=J(g);let k;const I=B({height:0,width:0,left:0,top:0,yOffset:0,xOffset:0}),z=async()=>{if(!k)return;if(!w.isConnected)return S();if(!w.parentElement)throw new Error("Popup target has been removed from DOM");const x=w.parentElement.getBoundingClientRect();if(I.val={top:x.top,left:x.left,width:x.width,height:x.height,xOffset:0,yOffset:0},await Ae(),!k||!w.isConnected)return;const j=Be.getBoundingClientRect(),O=k.popup.getBoundingClientRect(),e={x:Math.max(-O.left,0),y:Math.max(-O.top,0)},r={x:Math.min(j.width-O.left-O.width,0),y:Math.min(j.height-O.top-O.height,0)};I.val={...I.val,xOffset:e.x+r.x,yOffset:e.y+r.y}},H=()=>{const x=ct(u,[[ie.NONE,""],[ie.TOP,"bottom-full mb-1"],[ie.RIGHT,"left-full ml-1"],[ie.BOTTOM,"top-full mt-1"],[ie.LEFT,"right-full mr-1"]]),j=h.div({name:`${c} Popup`,class:()=>`absolute pointer-events-auto ${x} ${M.val}`,...P},T),O=h.div({name:`${c} Popup Anchor`,class:()=>"absolute transition pointer-events-none",style:()=>`left: ${I.val.left+I.val.xOffset}px; top: ${I.val.top+I.val.yOffset}px; height: ${I.val.height}px; width: ${I.val.width}px;`},j),e=it(j,()=>Ae().then(()=>t.val=!1),w.parentElement?[w.parentElement]:[]);ge(Be,O),k={anchor:O,popup:j,abortController:e}},S=()=>{k==null||k.anchor.remove(),k==null||k.popup.remove(),k==null||k.abortController.abort(),k=void 0,n==null||n()},b=()=>{if(!w.parentElement)throw new Error("Popup target has been removed from DOM");pe(d,[Y.HOVER,Y.HOVER_IN])&&w.parentElement.addEventListener("mouseenter",()=>t.val=!0),pe(d,[Y.HOVER,Y.HOVER_OUT])&&w.parentElement.addEventListener("mouseleave",()=>t.val=!1),pe(d,Y.CLICK)&&w.parentElement.addEventListener("click",()=>t.val=!0),pe(d,[Y.FOCUS,Y.FOCUS_IN])&&w.parentElement.addEventListener("focusin",()=>t.val=!0),pe(d,[Y.FOCUS,Y.FOCUS_OUT])&&w.parentElement.addEventListener("focusout",()=>t.val=!1)};ee(async()=>{if(!t.val)return S();k||H(),z()});const w=h.div({name:`${c} Popup Target`,hidden:!0});window.addEventListener("resize",z),window.addEventListener("scroll",z);const _=new ResizeObserver(z);return Ae().then(()=>_.observe(w.parentElement)).then(()=>b()),w}function an({progress:t=50,indefinite:u=!1,thickness:d=2,class:n,...c},...g){const P=J(n),T=J(t),M=J(u),k=J(d);return h.div({name:"Progress Radial","$data-indefinite":M,style:()=>`--progress-bar-value: ${T.val}; --progress-bar-stroke-width: ${k.val}px`,class:()=>`group inline-block relative min-w-[1em] min-h-[1em] ring-inset rounded-full [.variant-outline]:ring-[length:var(--progress-bar-stroke-width)] [.variant-soft-outline]:ring-[length:var(--progress-bar-stroke-width)] ${P.val}`,...c},ae.svg({style:"padding: calc(var(--progress-bar-stroke-width) * 0.5)",class:"absolute inset-0 w-full h-full -rotate-90"},ae.circle({style:"cx: 50%; cy: 50%; r: 50%; stroke-dasharray: calc(1% * pi * var(--progress-bar-value)) calc(2% * pi * (100 - var(--progress-bar-value)));",class:()=>"origin-center fill-none stroke-current stroke-[length:var(--progress-bar-stroke-width)] not-group-[.variant-filled]:text-mood-500 group-data-indefinite:animate-spin","stroke-linecap":"round"})),h.span({class:"relative text-xs text-center m-(--progress-bar-stroke-width) aspect-square flex items-center justify-center h-full"},g))}function lt({options:t,value:u=B(void 0),required:d,class:n,...c}){const g=J(n);return h.div({class:"flex flex-col gap-1 group"},t.map(P=>{const T=ee(()=>u.val===P.value);return h.div({name:"Radio",onclick:()=>u.val=T.val?void 0:P.value,"$data-selected":T,class:()=>{var M;return`group flex cursor-pointer justify-between items-center gap-2 select-none group-has-invalid:mood-critical ${(M=g.val)==null?void 0:M.split(" ").filter(k=>!k.includes("variant")).join(" ")}`},...c},P.name??String(P.value),ne({disabled:P.disabled,class:()=>{var M;return`size-5 rounded-full focus-visible:mood-accent ${(M=g.val)==null?void 0:M.split(" ").filter(k=>k.includes("variant")).join(" ")}`}},h.div({class:"bg-current rounded-full size-2.5 aspect-square not-group-data-selected:hidden"})))}),h.input({type:"checkbox",checked:()=>u.val!==void 0,required:d,hidden:!0}))}function Z({options:t,value:u=B(t[0].value),useChips:d=!1,lead:n,trail:c,class:g,...P}){const T=J(g),M=ee(()=>{var b;return(b=T.val)==null?void 0:b.split(" ").find(w=>w.includes("mood-"))}),k=ee(()=>Array.isArray(u.val)),I=ee(()=>u.val===void 0||Array.isArray(u.val)&&u.val.length===0),z=B(!1),H=b=>{if(Array.isArray(u.val))return u.val=ot(u.val,b);u.val=b};return ne({name:"Select",onclick:()=>z.val=!z.val,class:()=>`flex rounded-lg button gap-2 justify-between focus-visible:mood-accent ${T.val}`,...P},n,()=>h.div({name:"Value Display",class:()=>`text-nowrap text-ellipsis overflow-hidden ${I.val?"text-swatch-700-foreground":""} ${d?"flex flex-wrap gap-1":""} ${z.val?"invisible":""}`},I.val?"None":Array.isArray(u.val)?d?u.val.map(b=>ne({class:"group mood-accent text-xs variant-soft rounded relative",onclick:w=>{w.stopPropagation(),H(b)}},h.span({class:"group-hover:opacity-25"},String(b)),h.i({class:"not-group-hover:hidden absolute right-1"},"close"))):u.val.map(b=>String(b)).join(", "):String(u.val)),c,ae.svg({viewBox:"0 0 100 100",class:"size-4 flex-none",style:"stroke-linecap:round; stroke-linejoin:round;"},ae.path({d:"M25,35L50,15L75,35",class:"stroke-current stroke-[10] fill-none",$hidden:()=>!k.val}),ae.path({d:"M25,65L50,85L75,65",class:"stroke-current stroke-[10] fill-none",$hidden:()=>!k.val}),ae.path({d:"M25,40L50,60L75,40",class:"stroke-current stroke-[10] fill-none",$hidden:k})),be({name:"Select Content",visible:z,direction:"none",class:()=>`left-1/2 -translate-x-1/2 min-w-full max-h-40 overflow-y-auto card vessel shadow-lg p-1 rounded-lg card glass select-none ${M.val}`},()=>h.ul({name:"Select Options",class:"flex flex-col"},t.map(b=>{const w=ee(()=>pe(u.val,b.value));return ft(b,k,w,H)}))))}function ft(t,u,d,n){return h.div({"$data-selected":d,class:"contents group"},h.span({name:"Magic divider",class:"h-[1px] mx-1 pointer-events-none bg-surface-500/15 group-first:hidden group-hover:invisible group-data-selected:invisible [*:hover_+_*_>_&]:invisible [*[data-selected]_+_*_>_&]:invisible "}),h.button({tabIndex:0,onclick:()=>n==null?void 0:n(t.value),$disabled:()=>t.disabled,class:"flex gap-2 not-disabled:hover:bg-surface-500/20 not-disabled:focus-visible:bg-surface-500/20 not-disabled:focus-visible:focus-ring disabled:bg-transparent px-1 rounded cursor-pointer justify-between disabled:opacity-50 disabled:cursor-not-allowed items-center group-data-selected:mood-accent group-data-selected:!bg-mood-500/25"},h.span({class:"text-nowrap"},t.name??String(t.value??"None")),ae.svg({viewBox:"0 0 100 100",class:"size-4 not-group-data-selected:invisible",style:"stroke-linecap:round; stroke-linejoin:round;",$hidden:()=>!u.val},ae.path({d:"M20,60L40,80L80,20",class:"stroke-current stroke-[10] fill-none"})),h.div({class:"bg-current rounded-full size-2 m-0.75 aspect-square not-group-data-selected:invisible",$hidden:u})))}function pt({value:t=B(!1),required:u,class:d,...n},...c){const g=J(d);return h.div({name:"Switch",onclick:()=>t.val=!t.val,"$data-selected":t,class:()=>{var P;return`flex cursor-pointer justify-between items-center gap-2 select-none group ${(P=g.val)==null?void 0:P.split(" ").filter(T=>!T.includes("variant")).join(" ")}`},...n},c,ne({name:"Toggle",role:"checkbox",class:()=>{var P;return`rounded-full !gap-0 justify-start !p-1 w-12 ${(P=g.val)==null?void 0:P.split(" ").filter(T=>T.includes("variant")).join(" ")}`},...n},h.span({name:"Spacer",class:"transition-[flex] group-data-selected:grow"}),h.span({name:"Thumb",class:"bg-current rounded-full w-6 h-4 transition-opacity not-group-data-selected:opacity-75"})),h.input({type:"checkbox",checked:t,required:u,hidden:!0}))}function ht({class:t},u){const d=J(t),n=[...u.querySelectorAll("h1, h2, h3, h4, h5")],c=B(n[0]);return document.addEventListener("scroll",()=>{n.some((g,P)=>{if(g.getBoundingClientRect().bottom>u.scrollTop+112)return c.val=n[Math.max(P-1,0)],!0})}),h.ul({class:()=>`flex flex-col ${d.val}`},[...n].map(g=>{const P=parseInt(g.tagName.slice(1))-1;return h.li({onclick:()=>g.scrollIntoView({behavior:"smooth"}),"$data-indented":()=>P>0,"$data-selected":()=>c.val===g,style:`--indent: ${1+(P-1)*.5}rem;`,class:"group relative flex gap-4 cursor-pointer text-swatch-700-mood not-data-selected:hover:text-swatch-900-foreground data-selected:mood-accent data-selected:text-mood-500"},h.span({name:"Divider",class:"absolute h-full w-px left-0 bg-current/50 group-data-selected:bg-current not-group-data-indented:hidden group-hover:w-[4px] group-data-selected:w-[4px] transition-all"}),h.span({name:"Title",class:"group-data-indented:ml-(--indent) justify-start group-data-selected:font-semibold flex-1 py-0.5 z-1 transition-all"},g.textContent))}))}function kn({trigger:t=[Y.HOVER,Y.FOCUS],direction:u=ie.BOTTOM,class:d,...n},...c){const g=J(d);return be({trigger:t,direction:u,class:()=>`!control variant-soft-outline badge glass px-2 py-1 max-w-xs text-xs flex ${g.val}`,...n},c)}function G(...t){const u=h.div({class:"*:language-typescript w-2xl not-md:max-w-full *:scroll-m-21"},...t),d=ht({class:"sticky top-24 w-xs not-xl:hidden"},u);return h.div({class:"flex gap-8 justify-center items-start"},u,d)}const gt=`# State

> Create reactive data.

## Overview

Reactivity in Savant is primarily achieved via \`state\` objects which contain a value and manage any dependencies with other states:

\`\`\`typescript
const num = state(42)
\`\`\`

Once created, the value of a State can be directly read or written via its \`.val\` property:

\`\`\`typescript
num.val++

console.log(num.val)
\`\`\`

\`\`\`console
> 43
\`\`\`

Assigning a _new_ value to a state's \`.raw\` property will update reactive dependencies.

To prevent triggering [reactive updates](http://localhost:5173/core/Derive), such as during a complex operation etc, assignments can be made to \`.raw\` instead. Effects can similarly refer to \`.raw\` to avoid creating a dependency.

\`\`\`typescript
num.raw++

console.log(num.val)
console.log(num.raw)
\`\`\`

\`\`\`console
> 43
> 43
\`\`\`

## Signature

\`\`\`typescript
/** Creates a piece of reactive data with the given initial value. */
function state<T>(value: T): State<T>
\`\`\`

\`\`\`typescript
class State<T> {
	/** The current value. Assigning will trigger reactivity. */
	val: T

	/** The current value. Assigning will not trigger reactivity. */
	rawVal: T
}
\`\`\`

## Notes

### State variables should not be reassigned

\`const\` variables are recommended for **all** stateful data as reassigning the variable _itself_ will lose any stateful links to other states, the DOM, etc.

\`\`\`typescript
// GOOD
num.val = 43

// BAD
num = 43
num = state(43)
\`\`\`

### How it works

Fundamentally, a Savant \`State\` is a wrapper which stores a value and a list of other states that it relies on and that rely on it.
`;function mt(){return G(ue({},gt))}const vt=Object.freeze(Object.defineProperty({__proto__:null,default:mt},Symbol.toStringTag,{value:"Module"})),bt=`# Derive

> Create reactive effects.

## Overview

While independent reactive data itself is created via \`state()\`, data which is _dependent_ upon other reactive data can be created via \`derive()\`:

\`\`\`typescript
const num = state(42)
const doubleNum = derive(() => num.val * 2)
\`\`\`

Then whenever a dependency is altered, the derived state will re-evaluate:

\`\`\`typescript
num.val++

console.warn(num.val)
console.warn(doubleNum.val)
\`\`\`

\`\`\`console
> 43
> 86
\`\`\`

Value-less _effects_ can also inherently be defined via \`derive()\` by omitting a return value:

\`\`\`typescript
derive(() => console.log(num.val))

num.val++
\`\`\`

\`\`\`console
> 43
\`\`\`

In derived definitions where you want to _exclude_ some accessed states from reactive dependence you can utilise the state's \`.raw\` property.

This is most often useful for refining reactive chains to limit unnecessary re-execution for optimisation reasons.

\`\`\`typescript
const num = state(42)
const doubleNum = derive(() => num.val * 2)

derive(() => console.log(num.val, doubleNum.raw))

num.val++
\`\`\`

\`\`\`console
> 43 84
\`\`\`

In Savant _all_ dependent state is invariably marked by the arrow syntax \`() => ...\`, so whenever you see arrow functions outside of normal logic flow, think 'reactive'.

## Signature

\`\`\`typescript
/** Create a derived state or effect which reacts to changes to any states it depends on. */
function derive<T>(func: () => T): State<T>
\`\`\`

## Notes

### Reactivity is deferred

All states wait until the next browser tick (via \`setTimeout(..., 0)\`) to update any derivations.

This provides a major automatic performance benefit because it means that simultaneous updates to multiple states which are collectively depended upon by some derived state will only update that derivation _once_:

\`\`\`typescript
const num = state(42)
const otherNum = state(24)

derive(() => console.log(num, otherNum))

num++
otherNum++
\`\`\`

\`\`\`console
> 43 25
\`\`\`

### Derived states are states

The \`derive()\` function itself creates a new \`State\` which reacts to any dependency changes, it is just a state that should not be manually assigned to.

### Why arrow functions are necessary

Arrow functions \`() => ...\` are used for _all_ reactive dependence in Savant because it is the only way to defer and/or repeat execution of a clause beyond the scope of its definition.

Other reactive frameworks that allow derived state without arrow function syntax (eg. \`derive(num * 2)\`) use a _compiler_ to allow this shorthand.

### How it works

When a new state is created, via \`state()\`, \`derive()\` or from binding functions passed to elements etc, the state sets itself as the local 'state scope'. Any states that are created within the call stack of its creation then subscribe to the enclosing scope state.

At regular intervals Savant checks all states and deletes (clears references so it can be recognised as garbage) any which have no dependent states.
`;function _t(){return G(ue({},bt))}const wt=Object.freeze(Object.defineProperty({__proto__:null,default:_t},Symbol.toStringTag,{value:"Module"})),yt=`# Elements

> Create reactive interface.

## Overview

In Savant all HTML elements are created with their respective tag functions which create and return the pure DOM node:

\`\`\`typescript
const button: HTMLButtonElement = html.button()
\`\`\`

These tag functions allow passing any props to the element via the first object:

\`\`\`typescript
const button = html.button({
	name: "Demo",
	onclick: () => console.log("Clicked!"),
	style: "color: red;",
})
\`\`\`

And the tag functions also allow nesting of child elements, values, etc...

\`\`\`typescript
const list = html.div(
	{ style: "display: flex; flex-direction: column;" },

	html.button({ style: "color: red;" }, "I'm a button!"),

	html.span("I am not :("),
)
\`\`\`

## Reactivity

Reactive states and even just derivation arrow functions can be given directly to a tag function prop or child and Savant will automatically update them on change:

\`\`\`typescript
const username = state("")

const usernameInput = html.input({
	value: username,
	oninput: (event) => (username.val = event.target.value),
	placeholder: "Enter username...",
})

const usernameDisplay = html.div(() => \`Hello \${username.val}!\`)
// const alternateDisplay = html.div("Hello ", username)

const container = html.div(usernameInput, usernameDisplay)

mount(document, container)
\`\`\`

## Optional props

Any props prefixed with \`$\` will be automatically added and removed (with the prefix removed) whenever the given value/state-value becomes truthy/falsy.

For example, the following element will hide whenever the state is odd, and reappear when it is even.

\`\`\`typescript
const num = state(0)

const dom = html.span({ $hidden: () => num.val % 2 == 0 }, num)
\`\`\`

## Context props

Any props prefixed with \`context-\` will set [context]("/#!/core/context") of that name (with the prefix removed) on the element instead of setting a DOM attribute.

This can be combine with optional props if desired.

## Context-out props

Any props prefixed with \`context-out-\` will retrieve context of that name (with the)

### Scoping Reactions

It is important to consider the scoping of your reactivity when creating components, because reactivity is bound to the lowest enclosing reactive scope (including element definitions), thus in the following example the first button is efficient because only its content will update when \`username\` is changed, while the second button will be entirely destroyed and recreated instead.

\`\`\`typescript
const username = state("Jarnathan")

const dom = html.div(
	// Good scoping
	html.button(() => username.val.toLowercase()),

	// Bad scoping
	() => html.button(username.val.toLowercase()),
)
\`\`\`

Similarly, if you encounter random inexplicable behaviour with elements disappearing for no reason etc, it is likely you have an unbound reaction causing reactivity to misbehave.

This may sound like a hassle, but most of the time you won't even need to consider it! Once you do encounter a scoping issue you will very quickly learn to intuit when you do need to consider your scoping and how easy it is to do.

Generally reactivity should be scoped at the lowest level possible, which typically involves placing a preceding arrow function \`() =>\`.

## Signature

\`\`\`typescript
/** Create a new DOM element of the used tag, given props and/or children. */
function [element](propsOrChild: ElementProps<Element> | ChildDom, ...restChildren: ChildDom[]): [element]
\`\`\`

\`\`\`typescript
type ChildDom =
	| ValidChildDomValue
	| Readonly<State<Optional<Primitive>>>
	| BindingFunc
	| readonly ChildDom[]
type ValidChildDomValue = Optional<Primitive | ChildNode>
type BindingFunc = (dom?: ChildDom) => ChildDom
\`\`\`

## Notes

### Leniency in element props

Due to the suboptimal typing of the HTML API, Savant must force-leniency for element props typing, but it still includes the official type in the definition to assist you in writing code. For example, the typing for and SVG's \`viewBox\` is \`PropValueOrDerived<Primitive | SVGAnimatedRect>\`, because it must allow you to use a string like HTML itself does.

### Near-equivalent patterns

In many places, such as element props and children, providing a \`State\` directly is essentially identical to providing \`() => state.val\`, meaning each of the following pairs ultimately produces equivalent final DOM:

\`\`\`typescript
const name = state("Savant")

html.span(name) ≈≈ html.span(() => name.val)

html.span("Name: ", name) ≈≈ html.span(() => \`Name: \${name.val}\`)

html.span({ name }) ≈≈ html.span({ name: name }) ≈≈ html.span({ name: () => name.val })
\`\`\`

Generally, the only differences are a slight reduction in memory usage by avoiding constructing more arrow functions, and a slight increase in the scope of the derived effect. Thus in the above examples the left sides are considered best practice.
`;function kt(){return G(ue({},yt))}const Pt=Object.freeze(Object.defineProperty({__proto__:null,default:kt},Symbol.toStringTag,{value:"Module"})),Ct=`# Components

> Create composable functionality.
`;function St(){return G(ue({},Ct))}const xt=Object.freeze(Object.defineProperty({__proto__:null,default:St},Symbol.toStringTag,{value:"Module"})),At=`# Context

> Create cascading data.

## Overview

When writing complex interfaces and functionality data often needs to be passed down through multiple layers of components. Like from a pagination manager to various pagination controls that may be nested in the interface.

This _can_ be done by extracting the state of the manager out into whichever scope(s) it is used, and then manually passing that state to any nested components that require it. However this is not ideal as it requires the developer to create and maintain this coupling, and gets worse when components need to internally wrap other components which require that shared state, leading to large prop chains.

Like many other web frameworks, Savant offers 'context' functionality - think of it like CSS (_cascading style sheets_) but for **data**.

Context **Providers** may _set_ some context which **consumers** at any nested level of the DOM may then _get_. Nested providers override ancestor providers for their own descendents.

This flexible system allows loose and dynamic coupling which can be useful for anything from making systems easier to work with, to replacing static global app state.

## Example

\`\`\`typescript
function PaginationManager(
	currentPage: State<number>,
	...children: ChildDom[]
) {
	return html.div(
		{
			name: "Pagination Manager",
			"context-paginationPage": state(0),
			style: "display: contents;",
		},
		...children,
	)
}

function Page() {
	return ContextProbe(
		"paginationPage",

		(pageContext) => html.span("Current page: ", pageContext.val?.val),
	)
}

function PaginationButton() {
	return ContextProbe(
		"paginationPage",

		(pageContext) =>
			html.button(
				{ onclick: () => pageContext.val && pageContext.val.val++ },
				"Next Page",
			),
	)
}

function App() {
	return html.div(
		PaginationManager(
			{ currentPage: state(0) },

			Page(),

			html.footer(PaginationButton()),
		),
	)
}

mount(document.body, App())
\`\`\`

## Signature

\`\`\`typescript
/** Sets context with the given key and value at the given DOM element. */
function setContext<T>(
	dom: HTMLElement,
	key: ContextKey,
	value: ContextValue<T>,
): void

/** Retrieves context with the given key if it exists.
 * @warning Type is coerced. Apply type validation if necessary.
 */
function getContext<T>(
	dom: HTMLElement,
	key: ContextKey,
): ContextProviderValue<T>

/** Removes context of the given key from the given DOM element, if it exists. */
function removeContext(dom: HTMLElement, key: ContextKey): void

/** Mounts the given DOM element and then immediately retrieves the requested contexts. */
function ContextProbe(key: ContextKey, dom: ChildNode): ChildNode
\`\`\`

\`\`\`typescript
type ContextKey = string
type ContextValue<T> = State<T> | T

type ContextProviderValue<T> = State<T | undefined> & {
	triggerRecheck: State<number>
}
type ContextProvider = Map<ContextKey, ContextProviderValue<any>>
\`\`\`

## Notes

### Type safety and validation

The context API does not itself validate that the context you retrieve matches the data format you expect, it trusts that you have either written safe context access or will validate the returned value yourself. Typically validation is unnecessary though since you have complete control over the context you write and read and thus can ensure you do not mix and match data formats within one context key.

### It uses DOM events!

Since Savant aims to be a simple and smart framework, it eschews any kind of 'virtual DOM' for tracking component composition. As it also has no compiler Savant cannot statically analyse source code to determine how all context fits together.

Instead, Savant utilises **DOM events**.

When context is written, Savant records the association of the provided context and the target element in a map, and then adds a listener to the target element which intercepts and 'replies' to special Savant context request events with the relevant context, if it exists.

When context is read, Savant bubbles one of those 'context request events' up from the target element for the context associated with the provided context key and then is given the 'replied' value from the closest ancestor provider.

Thus, through utilising the 'bubble up' nature of DOM events the entire _cascade_ is handled automatically and efficiently by the browser's own event engine!

### How it works cont.

The context API responds to requests with a wrapped \`State\` of the intended type or \`undefined\`. This being reactive allows reactive context consumption, and being optional is of course in case the requested context does not exist.

The context API automatically handles updating any affected consumers when new context is inserted between an existing provider and consumer, or when context is removed.
`;function Tt(){return G(ue({},At))}const Et=Object.freeze(Object.defineProperty({__proto__:null,default:Tt},Symbol.toStringTag,{value:"Module"}));function jt(){const t=B(`<div>
    <p>
        👋Hello
    </p>

    <ul>
        <li>
            🗺️World
        </li>

        <li>
            <a href="https://vanjs.org/">
                🍦VanJS
            </a>
        </li>
    </ul>
</div>`),u=h.textarea({value:t,oninput:d=>t.val=d.target.value,class:"control variant-soft-outline w-full h-64"});return G(h.h1("Converter"),h.blockquote(h.p("Create Savant code from HTML.")),h.h2("Overview"),u,V({content:"Tags"},()=>q({language:"typescript"})),V({content:"Components"},()=>"None"),V({content:"Code"},()=>q({language:"typescript"})))}const Mt=Object.freeze(Object.defineProperty({__proto__:null,default:jt},Symbol.toStringTag,{value:"Module"})),zt=`# Router

> Manage site navigation.
`;function Lt(){return G(ue({class:"language-typescript"},zt))}const Ot=Object.freeze(Object.defineProperty({__proto__:null,default:Lt},Symbol.toStringTag,{value:"Module"})),Ft=`# Link

> Connect site content.
`;function It(){return G(ue({class:"language-typescript"},Ft))}const Rt=Object.freeze(Object.defineProperty({__proto__:null,default:It},Symbol.toStringTag,{value:"Module"}));function $t(){const t=B("variant-soft-outline"),u=B("mood-none");return G(h.h1("Badge"),h.blockquote("Delivers small but important pieces of information."),h.h2("Design"),h.p("Badges are designed to be a small, unobtrusive elements that convey important information concisely. It is typically used to highlight new or unread items, notifications, or status updates."),h.p("Badges use a smaller font size and padding to make them the same height as standard text, ensuring it fits seamlessly into layouts."),h.p("Badges color the text slightly based on mood to indicate they are not interactive, differentiating them from small buttons which instead use the standard foreground text color."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},wn({class:()=>`${t.val} ${u.val}`},"Demo Badge")),h.div({class:"flex flex-wrap gap-4 justify-center"},V({content:"Variant",class:"items-center"},Z({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:t,class:"variant-outline w-48"})),V({content:"Mood",class:"items-center"},Z({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-caution"},{value:"mood-critical"}],value:u,class:"variant-outline w-48"})))),()=>q({language:"ts"},`import { Badge } from "savant/ui"

Badge(
    { class: "${t.val} ${u.val}" },
    "Demo Badge",
)`),h.h2("Signature"),q({language:"ts"},`function Badge(
    props: HTMLElementProps,
    ...children: ChildDom[]
): HTMLElement`))}const Bt=Object.freeze(Object.defineProperty({__proto__:null,default:$t},Symbol.toStringTag,{value:"Module"}));function Dt(){const t=B("variant-soft-outline"),u=B("mood-none"),d=B([]);return G(h.h1("Button"),h.blockquote("Performs some action on user click."),h.h2("Design"),h.p("Button components are used when a specific, clear and manual action needs to be performed by the user.."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},ne({class:()=>`${[t.val,u.val,...d.val].join(" ")}`},"Demo Button")),h.div({class:"flex flex-wrap gap-4 justify-center"},V({content:"Variant",class:"items-center"},Z({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:t,class:"variant-outline w-48"})),V({content:"Mood",class:"items-center"},Z({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-caution"},{value:"mood-critical"}],value:u,class:"variant-outline w-48"})),V({content:"Extras",class:"items-center"},Z({options:[{value:"transition"},{value:"hover:raised"},{value:"active:lowered"}],value:d,class:"variant-outline w-48"})))),()=>q({language:"ts"},`import { Button } from "savant/ui"

Button(
    { class: "${[t.val,u.val,...d.val].join(" ")}" },
    "Demo Button",
)`),h.h2("Signature"),q({language:"ts"},`function Button(
    props: HTMLButtonProps,
    ...children: ChildDom[]
): HTMLButtonElement`))}const Ht=Object.freeze(Object.defineProperty({__proto__:null,default:Dt},Symbol.toStringTag,{value:"Module"}));function Ut(){const t=B("variant-soft-outline"),u=B("mood-none");return G(h.h1("Checkbox"),h.blockquote("Offers clear binary choices."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},Xe({class:()=>`w-48 ${t.val} ${u.val}`},"Demo Checkbox")),h.div({class:"flex flex-wrap gap-4 justify-center"},V({content:"Variant",class:"items-center"},Z({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:t,class:"variant-outline w-48"})),V({content:"Mood",class:"items-center"},Z({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-caution"},{value:"mood-critical"}],value:u,class:"variant-outline w-48"})))),()=>q({language:"ts"},`import { Checkbox } from "savant/ui"

Checkbox(
    { class: \`${t.val} ${u.val}\` },
    "Demo Checkbox",
)`),h.h2("Signature"),q({language:"ts"},`function Checkbox(
    props: {
        value: State<boolean> = state(false),
        required: boolean = false,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`))}const Nt=Object.freeze(Object.defineProperty({__proto__:null,default:Ut},Symbol.toStringTag,{value:"Module"}));function Vt(){return G(h.h1("Code"),h.blockquote("Simple code syntax highlighting via ",h.a({href:"https://prismjs.com",class:"anchor"},"PrismJS"),"."),et({class:"mood-info p",icon:"info"},ue({class:"language-typescript"},"Every code snippet in these docs uses the `Code` component.")),h.h2("Demo"),()=>q({language:"ts"},`import { Code } from "savant/ui"

Code(
    { language: "ts" },

    \`\\
import { Code } from "savant/ui"

Code(
    { language: "ts" },
    ...
)\`,
)`),h.h2("Signature"),q({language:"ts"},`function Code(
    props: { language: string, ...HTMLElementProps },
    ...children: ChildDom[]
): HTMLElement`))}const qt=Object.freeze(Object.defineProperty({__proto__:null,default:Vt},Symbol.toStringTag,{value:"Module"}));function Wt(){const t=B("variant-soft-outline"),u=B("mood-none");return G(h.h1("Control Group"),h.blockquote("Brings together related interaction."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},nt({class:()=>`w-96 ${t.val} ${u.val}`},ne({},"Button"),Z({value:B("Select"),options:[{value:"Select"},{value:"Also select"}]}),wn({},"Badge"))),h.div({class:"flex flex-wrap gap-4 justify-center"},V({content:"Variant",class:"items-center"},Z({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:t,class:"variant-outline w-48"})),V({content:"Mood",class:"items-center"},Z({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-caution"},{value:"mood-critical"}],value:u,class:"variant-outline w-48"})))),()=>q({language:"ts"},`import { Switch } from "savant/ui"

Switch(
    { class: \`${t.val} ${u.val}\` },
    "Demo Switch",
)`),h.h2("Signature"),q({language:"ts"},`function Switch(
    props: {
        value: State<boolean> = state(false),
        required: boolean = false,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`))}const Gt=Object.freeze(Object.defineProperty({__proto__:null,default:Wt},Symbol.toStringTag,{value:"Module"}));function Zt(){const t=B("text"),u=B("variant-soft-outline"),d=B("mood-none");return G(h.h1("Input"),h.blockquote("Direct entry of text or numbers."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex flex-col justify-center gap-8"},()=>me({value:B(t.val==="text"?"Example text":42),class:()=>`${u.val} ${d.val}`})),h.div({class:"flex flex-wrap gap-4 justify-center"},V({content:"Type",class:"items-center"},Z({options:[{value:"text"},{value:"number"}],value:t,class:"variant-outline w-48"})),V({content:"Variant",class:"items-center"},Z({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:u,class:"variant-outline w-48"})),V({content:"Mood",class:"items-center"},Z({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-caution"},{value:"mood-critical"}],value:d,class:"variant-outline w-48"})))),()=>q({language:"ts"},`import { Input } from "savant/ui"

Input({
    value: state(${t.val==="text"?'"Example text"':42}),
    class: "${u.val} ${d.val}"
})`),h.h2("Signature"),q({language:"ts"},`function Input<T extends string | number>(
    props: {
        value: State<T | undefined> = state(undefined),
        type: string = <typeof T>,
        placeholder: string = "Enter {type}...",
        required: boolean = false,

        onValueChanged?: (value: T) => void,
        onValidityChanged?: (validity: boolean) => void,

        lead?: ChildDom,
        trail?: ChildDom,

        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`))}const Xt=Object.freeze(Object.defineProperty({__proto__:null,default:Zt},Symbol.toStringTag,{value:"Module"}));function Kt(){const t=B([Y.CLICK]);return G(h.h1("Popup"),h.blockquote("Versatile dynamic content floating near its parent."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex justify-center flex-col gap-8 w-3xs"},ne({class:"variant-filled"},"Popup Trigger",()=>be({trigger:t.val,class:"card glass vessel flex flex-col shadow"},"Hello! Click outside me to close."))),h.div({class:"flex flex-wrap gap-4 justify-center"},V({content:"Trigger",class:"items-center"},Z({options:[{value:Y.CLICK},{value:Y.HOVER},{value:Y.HOVER_IN},{value:Y.HOVER_OUT},{value:Y.FOCUS},{value:Y.FOCUS_IN},{value:Y.FOCUS_OUT}],value:t,class:"variant-outline w-48"})))),()=>q({language:"ts"},`import { Button, Popup } from "savant/ui"

Button(
    {
        class: "variant-filled",
    },

    "Popup Trigger",

    () =>
        Popup(
            {
                trigger: ${JSON.stringify(t.val)},
                class: "card glass vessel flex flex-col shadow",
            },

            "Hello! Click outside me to close.",
        ),
),`),h.h2("Signature"),q({language:"ts"},`function Popup(
    props: {
        visible: State<boolean> = state(false),
        direction: PopupDirection = PopupDirection.BOTTOM,
        trigger: PopupTrigger = PopupTrigger.CLICK,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`))}const Jt=Object.freeze(Object.defineProperty({__proto__:null,default:Kt},Symbol.toStringTag,{value:"Module"}));function Qt(){const t=B("variant-soft-outline"),u=B("mood-none"),d=B(50),n=B(!0),c=B(2);return G(h.h1("Circular Progress Bar"),h.blockquote("Displays the progress state of a lengthy process."),h.h2("Design"),h.p("Circular Progress Bars are used to compactly provide feedback to the user on the current progress state of a lengthy process."),h.p("Circular Progress Bars default to matching the size of enclosing text flows, ensuring they fit seamlessly into layouts."),h.p("Circular Progress Bars can be given children which will be displayed within the circle. Such children should be short, typically a percentage or number. Anything longer should be placed beneath the progress bar."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex gap-4 items-center"},an({progress:d,indefinite:n,thickness:c,class:()=>`p-2 ${t.val} ${u.val}`},"Loading..."),h.span({class:"flex gap-2 items-center"},an({progress:d,indefinite:n,thickness:c,class:()=>`${t.val} ${u.val}`}),"Loading...")),h.div({class:"flex flex-wrap gap-4 justify-center"},V({content:"Variant",class:"items-center"},Z({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:t,class:"variant-outline w-48"})),V({content:"Mood",class:"items-center"},Z({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-caution"},{value:"mood-critical"}],value:u,class:"variant-outline w-48"})),V({content:"Progress",class:"items-center"},me({value:d,min:0,max:100,class:"variant-outline w-48"})),V({content:"Indefinite",class:"items-center"},Xe({value:n,class:"variant-outline w-48"},"Enabled")),V({content:"Thickness",class:"items-center"},me({type:"number",value:c,class:"variant-outline w-48"})))),()=>q({language:"ts"},`import { ProgressRadial } from "savant/ui"

ProgressRadial(
    {
        progress: ${d.val},
        indefinite: ${n.val},
		thickness: ${c.val},
        class: "p-2 ${t.val} ${u.val}"
    },
    "Loading...",
),

html.span(
	{ class: "flex gap-2 items-center" },

	ProgressRadial({
		progress: ${d.val},
		indefinite: ${n.val},
		thickness: ${c.val},
		class: "${t.val} ${u.val}",
	}),

	"Loading...",
),`),h.h2("Signature"),q({language:"ts"},`function ProgressRadial(
    {
        progress?: number = 50,
        indefinite?: boolean = false,

        ...restProps
    }: ProgressRadialProps,
    ...children: ChildDom[]
): HTMLElement`))}const Yt=Object.freeze(Object.defineProperty({__proto__:null,default:Qt},Symbol.toStringTag,{value:"Module"}));function er(){const t=B("variant-soft-outline"),u=B("mood-none");return G(h.h1("Radio"),h.blockquote("Offers a clear and direct set of exclusive options."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},lt({value:B("Option 1"),options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"}],class:()=>`w-48 ${t.val} ${u.val}`})),h.div({class:"flex flex-wrap gap-4 justify-center"},V({content:"Variant",class:"items-center"},Z({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:t,class:"variant-outline w-48"})),V({content:"Mood",class:"items-center"},Z({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-caution"},{value:"mood-critical"}],value:u,class:"variant-outline w-48"})))),()=>q({language:"ts"},`import { Radio } from "savant/ui"

Radio({
    value: state("Option 1"),
    options: [
        { value: "Option 1" },
        { value: "Option 2" },
        { value: "Option 3" },
    ],
    class: "${t.val} ${u.val}",
})`),h.h2("Signature"),q({language:"ts"},`function Radio<T>(
    props: {
        options: RadioOption<T>[],
        value: State<RadioOption<T> | undefined> = state(undefined),
        required: boolean = false,
        ...HTMLElementProps
}): HTMLElement

type RadioOption<T> = {
    value: T
    name?: string
    disabled?: boolean
}`))}const nr=Object.freeze(Object.defineProperty({__proto__:null,default:er},Symbol.toStringTag,{value:"Module"})),ve={SINGLE:"single",MULTICHIPS:"multichips"};function tr(){const t=B(ve.SINGLE),u=B("variant-soft-outline"),d=B("mood-none");return G(h.h1("Select"),h.blockquote("Enables compact selection of one or more options."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 flex flex-col justify-center gap-8 w-3xs h-48"},()=>Z({value:t.val===ve.SINGLE?B("Option 1"):B(["Option 1","Option 2"]),options:[{value:"Option 1"},{value:"Option 2",disabled:!0},{value:"Option 3"},{value:"Option 4"}],useChips:t.val===ve.MULTICHIPS,class:()=>`${u.val} ${d.val}`})),h.div({class:"flex flex-wrap gap-4 justify-center"},V({content:"Type",class:"items-center"},Z({options:[{value:"single"},{value:"multi"},{value:"multichips"}],value:t,class:"variant-outline w-48"})),V({content:"Variant",class:"items-center"},Z({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:u,class:"variant-outline w-48"})),V({content:"Mood",class:"items-center"},Z({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-caution"},{value:"mood-critical"}],value:d,class:"variant-outline w-48"})))),()=>q({language:"ts"},`import { Select } from "savant/ui"

Select({
    value: state(${t.val===ve.SINGLE?'"Option 1"':'["Option 1", "Option 2"])'}),
    options: [
        { value: "Option 1" },
        { value: "Option 2", disabled: true },
        { value: "Option 3" },
        { value: "Option 4" },
    ],${t.val===ve.MULTICHIPS?`
    useChips: true,`:""}
    class: "${u.val} ${d.val}",
})`),h.h2("Signature"),q({language:"ts"},`function Select<T>(
    props: {
        options: SelectOption<T>[],
        value: State<SelectOption<T> | undefined> = state(undefined),
        required: boolean = false,
        ...HTMLElementProps
}): HTMLElement

type SelectOption<T> = {
    value: T
    name?: string
    disabled?: boolean
}`))}const rr=Object.freeze(Object.defineProperty({__proto__:null,default:tr},Symbol.toStringTag,{value:"Module"}));function ar(){const t=B("variant-soft-outline"),u=B("mood-none");return G(h.h1("Switch"),h.blockquote("Offers clear binary choices."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},pt({class:()=>`w-48 ${t.val} ${u.val}`},"Demo Switch")),h.div({class:"flex flex-wrap gap-4 justify-center"},V({content:"Variant",class:"items-center"},Z({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:t,class:"variant-outline w-48"})),V({content:"Mood",class:"items-center"},Z({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-caution"},{value:"mood-critical"}],value:u,class:"variant-outline w-48"})))),()=>q({language:"ts"},`import { Switch } from "savant/ui"

Switch(
    { class: \`${t.val} ${u.val}\` },
    "Demo Switch",
)`),h.h2("Signature"),q({language:"ts"},`function Switch(
    props: {
        value: State<boolean> = state(false),
        required: boolean = false,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`))}const ur=Object.freeze(Object.defineProperty({__proto__:null,default:ar},Symbol.toStringTag,{value:"Module"}));function dr(){return G(h.h1("Tooltip"),h.blockquote("Provides concise contextual extra information."),h.h2("Demo"),h.div({class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 flex flex-col gap-8 w-3xs h-48 justify-center"},ne({class:"text-accent-500 font-bold"},"Tooltip (Hover Me)",kn({direction:"top",class:"left-1/2 -translate-x-1/2"},"Demo Tooltip")))),()=>q({language:"ts"},`import { Button, Tooltip } from "savant/ui"

Button(
    {
        class: "text-accent-500 font-bold",
    },

    "Tooltip (Hover Me)",

    Tooltip(
        {
            direction: "top",
            class: "left-1/2 -translate-x-1/2",
        },

        "Demo Tooltip",
    ),
)`),h.h2("Signature"),q({language:"ts"},`function Tooltip(
    props: {
        direction: PopupDirection = PopupDirection.BOTTOM,
        trigger: PopupTrigger = PopupTrigger.CLICK,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`))}const sr=Object.freeze(Object.defineProperty({__proto__:null,default:dr},Symbol.toStringTag,{value:"Module"}));function or(){const t=B(""),u=B(""),d=B(!1),n=B(!1),c=B(!1);return tt({name:"Sign In",class:"flex flex-col gap-4"},h.span({class:"text-xl font-bold"},"Sign In"),V({content:"Username"},me({type:"username",value:t,placeholder:"Enter username...",required:!0,lead:xe("person"),class:"variant-outline"})),V({content:h.span({class:"flex flex-1 justify-between items-center"},"Password",ne({class:"mood-accent text-mood-500"},"Forgot?"))},me({type:()=>n.val?"text":"password",value:u,placeholder:"Enter password...",required:!0,lead:xe("key"),trail:ne({onclick:()=>n.val=!n.val},xe({class:()=>`transition ${n.val?"":"text-swatch-700-foreground"}`},()=>n.val?"visibility":"visibility_off")),onValidityChanged:g=>c.val=g,class:"variant-outline"})),Xe({value:d,class:"variant-outline"},h.span({class:"text-mini text-swatch-700-mood"},"Remember Password")),h.div({class:"flex gap-4 justify-end"},ne({class:"hover:variant-soft"},"Cancel"),ne({class:"variant-filled mood-accent"},"Sign In")))}function ir(){return G(h.h1("Sign In"),h.blockquote("Example Sign In component."),h.h2("Demo"),h.div({class:"card vessel bg-zebra zebra-opacity-20 flex flex-col items-center gap-4"},h.div({class:"p-8 card vessel bg-background flex items-center"},or())),h.h2("Code"),q({language:"typescript"},`function SignIn() {
    const username = state("")
    const password = state("")
    const savePassword = state(false)

    const passwordVisible = state(false)

    const passwordValid = state(false)

    return Form(
        {
            name: "Sign In",
            class: "flex flex-col gap-4",
        },

        html.span({ class: "text-xl font-bold" }, "Sign In"),

        Label(
            {
                content: "Username",
            },

            Input({
                type: "username",
                value: username,
                placeholder: "Enter username...",
                required: true,

                lead: Icon("person"),

                class: "variant-outline",
            }),
        ),

        Label(
            {
                content: "Password",
                trail: html.span(
                    { class: "flex flex-1 justify-end items-center" },

                    Button(
                        {
                            class: "mood-accent text-mood-500",
                        },

                        "Forgot?",
                    ),
                ),
            },

            Input({
                type: () =>
                    passwordVisible.val ? "text" : "password",
                value: password,
                placeholder: "Enter password...",
                required: true,

                lead: Icon("key"),
                trail: Button(
                    {
                        onclick: () =>
                            (passwordVisible.val =
                                !passwordVisible.val),
                    },

                    Icon(
                        {
                            class: () =>
                                \`transition \${
                                    !passwordVisible.val
                                        ? "text-swatch-700-foreground"
                                        : ""
                                }\`,
                        },

                        () =>
                            passwordVisible.val
                                ? "visibility"
                                : "visibility_off",
                    ),
                ),

                onValidityChanged: (valid) =>
                    (passwordValid.val = valid),

                class: "variant-outline",
            }),
        ),

        Checkbox(
            {
                value: savePassword,
                class: "variant-outline",
            },

            html.span(
                { class: "text-mini text-swatch-700-mood" },
                "Remember Password",
            ),
        ),

        html.div(
            { class: "flex gap-4 justify-end" },

            Button(
                {
                    class: "hover:variant-soft",
                },
                "Cancel",
            ),

            Button(
                {
                    class: "variant-filled mood-accent",
                },
                "Sign In",
            ),
        ),
    )
}`))}const cr=Object.freeze(Object.defineProperty({__proto__:null,default:ir},Symbol.toStringTag,{value:"Module"})),Pn=B(""),Ke=B(window.location.pathname),Je=B(window.location.hash),un=B({}),dn=B({}),lr="/",fr=()=>Ke.val.slice(lr.length-1)+Je.val,pr=(t,{replace:u}={replace:!1})=>{const d=`${Pn.val}${t}`;u?window.history.replaceState({},"",d):window.history.pushState({},"",d),Ke.val=d.split("#")[0],Je.val=d.split("#").length>1?"#"+d.split("#")[1]:""};function Cn({replace:t=!1,disabled:u=!1,onclick:d,href:n,tabIndex:c=0,class:g,...P},...T){const M=J(g);return h.a({href:n,tabIndex:c,onclick(k){k.preventDefault();const I=Vn(n);u||I===void 0||(pr(String(I),{replace:t}),typeof d=="function"&&d.call(this,k))},class:()=>`not-disabled:focus-visible:focus-ring ${M.val}`,...P},...T)}const hr=/:([^\\d|^/]([^/]+)?)/;let Te;function gr({routes:t,basename:u}){const d=h.div({name:"Savant Router",style:"display: contents;"}),n=T=>{if(!T)return"";for(T.startsWith("/")||(T="/"+T);T!=="/"&&T.endsWith("/");)T=T.slice(0,T.length-1);return T=decodeURI(T),T},c=(T,M)=>{T=n(T),M=n(M);const k=T.split("/"),I={};let z=null;for(const H of t){const S=n(M+H.path).split("/");if(S.length!==k.length)continue;let b=!0;for(let w=0;w<S.length;w++){const _=S[w],x=k[w];if(hr.test(_))I[decodeURIComponent(_.slice(1))]=decodeURIComponent(x);else if(x!==_){b=!1;break}}if(b){z=H;break}}return z||(z=t.find(H=>H.path==="*")||null),{route:z,params:I}},g=T=>{if(T.startsWith("?")&&(T=T.slice(1).trim()),!T)return{};const M={},k=T.split("&");for(const I of k){const[z,H]=I.split("=");M[decodeURIComponent(z)]=decodeURIComponent(H)}return M},P=()=>{const{route:T,params:M}=c(window.location.pathname+window.location.hash,u||"");if(!T){Te=void 0,d.replaceChildren(),ge(d,h.div("Could not find route"));return}if(T===Te){dn.val=g(window.location.search),un.val=M;return}Te=T,dn.raw=g(window.location.search),un.raw=M,d.replaceChildren(),ge(d,T.dom)};return window.onpopstate=P,ee(()=>{const T=Ke.val,M=Je.val;(T||M)&&setTimeout(()=>{P()})}),ee(()=>{Pn.val=n(u||"")}),d}const mr="/Savant/assets/logo-BRWjpkZq.svg";var Ee,sn;function vr(){return sn||(sn=1,Ee={Other:0,CR:1,LF:2,Control:4,Extend:8,ZWJ:16,Regional_Indicator:32,Prepend:64,SpacingMark:128,L:256,V:512,T:1024,LV:2048,LVT:4096,Extended_Pictographic:8192,InCB_Linker:16384,InCB_Consonant:32768,InCB_Extend:65536}),Ee}const br="ABAOAAAAAADQjQAAAd4HIfjtnG2oFUUYxx/1nHu29OolvKRSZIIQghSSEFJwwj4YWdzoFcoQyriBHwz8YHDBiSKDLG9YKSEiUX4IFQ0FCaRLoFmUb9mLBqJ+EDOIsAgpjf7b7nCnOTO7M7szu8frPPBjZufleZ6ZeWZm73pwYALRk2ApGAQMvC6UlU2HwUbwDthk0P5DsC2jfifYC0bAQXAE/AhOgXNCu1/A7+ASoAZRD5gMekE/mAFmge1gN9jbSPrOSdPPkM4DX4AvwVFwApwBZ8EFcBH8Bf4GE5pEUXP0uQ/5ac2k/UyktzWT/ncgPYj0rmZip91M6hc1R/U/hPzj4BnwPBgECwT7cb8VKFsZJflVyK9O9cW8gvwb6fM6pO+l+c1It4Lt4Hah/R7k94H94BuhPGZDNMqWlK1gf4rYNovthu1c8x3G8xOYmhKXnUH6c5pf0/h/+8Uo/1Wagz+bev1X0rpGD9GkniS/FjRTvVNRdiO4BcwGc8H8tN3dabqwp1Pv/Sh7WFHOGU4pOz9vws/1qa+PCuXxGHZmjDtQAdL6n1DEgAs7NwnrvCQj5gKBQCAQCAQCgUAgEOgGnsPfrlOE7zlvG3y/WI4+K4W/eYciotVgCGWv8u85SNeDjVHyPXAj8tORbknrtyLdAT5Jnz9Fehnp5zl/S3+F+kPQeRgcAUfBMfAtOB6FulAX6kJdqHNdtwPsAQei+u+sQCAwdjnk+d9TNk0Y/Xd1mUFFmfh+vKHhxycbRnoTaDLR0t582mg3oGg7LJWN4JmmoD1YNSUp24b0NJjWR3QnGAT3TcT7Pzh7HdGt1xNF4xKeFvIiu9D25ER1nczqVMeMSUS7kX8M6bvgMKBeMx2BQCAQGJv8gXuhEd8nLaJ/cB+2cCdPaiW/E2ojvyi9oyOkN6B8Df5mmZbW34x0QLjDZ7eS707i/Rr/ZmRua/R3ZPORv6eV1C2MU/R/MP1O9gCeH2mN9n0K+Wdb+rt7EHUrhPpVreS7GH9mQt1ryL+VoWt9Rl3MEuhdJr2vvI8+H4CPwQuo25XqeLHAe81ewf4I8gckf77G80up3uM5voqcRNuX0e800vMW/XwyBH7rEl9EZiC2n6jQ3masyxzY/EHxnXjeVfptIP797rAAkxjO4KNGZ/trjTJz/33O33rTpXPpVBf+1u4cfLqg8Wuxo9+Dnk/1XzQc/6W03RWhrD+dSzI4x+K/eS914Xnnisvp2MY7OrP2ldAToe86MFnQ0X+VnqU2xOfnrCh5f3Oha0GUpPciXQQGrqY5hK9LBX+nK/aebaweS8+AZSXnIa9/v4MzTh7b2jH6O/rlJdfiZBeMoUFmjBfy4wz7mBCkPgnz7y6Oq4x/l+sWXeO4lKrsdJvUvYZF111MdfmxLm0NpmI7591853Tj+VJVDGaNoZ3TRtahautDRL/qkm6KlW6Wa2EeXI3N5Ry0SX+e26xJ27K9K5iijNJyjvwsnllZ4mKeZbuy72I5F5VvNr6o+hcVbredoVc3/y7vN/keke0ywS6T6tqOfOE2mQKS8rJ/3A8mpHWfZVl7qq0oV0lbQ9m9bOszt+lb5LWsU8TxN8j9+LnOPnL3Pc73tz4X31fy7mVdDObZcnHfdev3VNV86ebRtF1VUsSui7U0OQ/rEvE8Jsp+j1H5Lbfnecrpa+Nf1XEi2mZUz/qIe4b7oJtDXi8/m85bN69HJOXr2i9Z+0PVVuW36n5x6V8Z/Yw640s+t5nQlpGfOPAdX2XPI5d+iP6wDJ8YFdvfRc/bOkR31jKpXHx2eb7J91kd7yaMOseb9w6Vp7PO9YyFUWeMM6pvfC7mhBXoI78z1SnyfDPLvqoyRp1nmNieZeAqRlUxV+Ssz3vvdSWm/paJ87ruuipsyTGmssfI3X4zWSMVTFNOlD1PNjbK+OeKsmI6b/J4mdTWp+TZ8jkfRXXEwgz0lPXZx9z7PruqOhdNYlqMZR2qeHe1N33OQdYYVeWyiG3l/rKeKteS2/UhXDdP885CMaWcPqbzaBJTOt1ViqnPjOqJmSzxcbfWtQ6iMNLPv6tx5om8fxh1niUu/GA5mMalq3lQnQ+25PmtspnlDxdRrwupaw/7WCvb9VLpynrWlbkURp17zrcPjNT7rSopsr9cnX95+861PRN/bM8Y1/YZmd0//Fmnp0oxvRvk5yJ2TNqwArpdiY+Y4Kk8b1nzWGSOGZnFF29nK1ynHAuiraK6XUudPlRh2+ZM1d3xJnp9S9H3Op2OKu4Xn7qrfn9gVO+Za3oe6vrq7vWq3z24Py6Fkf59Qjd2VzZ0dnXC62x89iGi7xwuumebc8ZUZFum81BlvKoka+19+cLIPGZU7fizT3GlP29+xfEwKa864+oUk3OCkXp9maJtFeLaJqNisctTG9HFRh13XZaoxmd6T7sWRuZz5Ssus3zgIseI2F7WVbWYzFsVsWZzT5veHWVE1qWaj7w4cyWma6TyMW8cTJP37bvchqQ6Gx+YAlkfL/exPqIt0b5r4brz5lPVzqfo9GfZLRrTNmMx1cfIz5z5Pkd9ntfyvilCnv6y/tr2q+ouM/WhbPyX2UNFdPqSqs6pLLuucWXLZAw24/UlOt9dzqELn1z5Zrtv8uz6EF82ZlaEK2FU7vtpXcIsydJRhbCa+e8/D60bUcbXTMMzfRK24nKssvgYr+x71lh8iO/1tBl/LPGlIseAT6q2J8m/",_r={data:br},wr="AAACAAAAAACAOAAAAbYBSf7t2S1IBEEYBuDVDZ7FYrQMNsFiu3hgEYOI0SCXRIUrB8JhEZtgs5gEg1GMFk02m82oGI02m+9xezCOczv/uwv3fvAwc/PzfXOzcdqzWdaBDdiGPdiHdjE+DS3RNDuCfsn8idQ/g3OH3BdwKf0e96/gumTfYcncLdzBPTzAo+RZ+f0Cr/AG7/AJX4738x1wtz9FO5PX/50n6UXMNdfg/0lERERERERERERERETpdedHBvDRql4nq0cXtW9af98qdRby0Vvp8K4W0V+C5Xw0t4J2bfjeBp3cnEu1brnnCTYNa7eKdz91XP7WO9Lb4GqRb7cY6xbtAdqeVOsY/QGcevw/tb6OT85YhvfKYEx9CMuxKsKnrs+eJtVInVvHJ0eVYVvTZk2siFVLOCjb61PTZX3MdVWEyP7fjzpmMxdzTyq2Ebue6x61nXRGnzndWpf1an7dXmGYE4Y1ptqqKsK1nu26Ju0ty+maV2Rpvk+qnDZjKUIobUiesdAQE/jmCTmHmsskpFZsVYbtmXRcaoSGUPomunW2derQhDPFjtT1Q/eb8vnm990fq35oHVt11bU9m89c7DNI8Qs=",yr={data:wr},kr="AAgOAAAAAABQfgAAAWMGnPntmm2IVUUYx+dyb2ezXXtBiSCLsKDIiKIIoYINciGwQHrRL2Ufii0qMsv7QVBuQkXhkmW5gksQRhRFSBslbkllHyy3L2XllkXrB3uhF0tQ0Kj+xzN3d3buzJx5PeesOw/8mDNvz/PMnOc8s/fs6asTcgu4A9wF+mjdV9kEa8FqsE5j/DPgeUX/JvASeBW8Bd4GO8CHYDcz7nPwFRgD4+An8Cf4AxwBx0G9QcjrYBt4p5HN/YDqGEF9F7gW3AC6wU1gCVgK5oDlYA8YBXvBGOgHD4FzwSo6fg24EDwBxsEB8Cu1N4ByI1gA/gbfo+0wyuO0vgW8DK5i+tN5tVOyMmUWrs9k6nNxPY/WL0B5Mb2+HOU14HrwY2Ny/CLUbwa3gzsZPT7ZGECnDvdiPQ+ARyhpWxPlWnr9JLfeAdS/43S8qNiTIdq3FeUb9HolOEj7h9H2LtgJPgHr0TZKx31Jy30C/T+g7aDCbpPiuj/fStrTNfQGioWIHr9z+z8iiAEfdg4zdo7Gex6JRCKRSCQSiUQikYrzL367HmLq8zV+yyYJIbOTzva5aJtH2y9CuYBebwdX4PoYyv107ELUe5PsPWBavzHJ3tMtFuhluTWnPxKJRCKRSCQy/TjQCKt/XX3y/+o6HPJs35XNszPO0WQf+FnQfsnpU+vLUN8MdgNyRtZ2Ncp7wBDYDn4D47MIOes0QpaADeDUWsYe5pql3k3IZd3iPp4H6bjnUI6Cf8B1PYQ0wWCPno5IJBKJnJx83eN2fi7NeYd0jKsvr+A7p3749KzkXd2Ap+9R7qfrflhz/ava45m2I7Rcw+lI3/WtAO+Bx5PsG6+nk+xbv7Q/fWe4gc7ZRPu3oNzK6Hktmfy2r036vc82On44yb4ZHKFzPkL5aZJ9f9hH7Y8y+nbheq9irWOpf0z/L8nUWPmL6TuK6/8Uuhpd6r3sRv8cbszZXZm981HOB5fS/itzdIlYyMzpTa85HYtRv422LTPQ/yjd+/SZudvCr1DcV5Iv6W+HFRXaB988Rte2ugJrHKTPW4vx5akK+MWzvoI++Sb9zvKFriy/m8wbwpxXQL/gDNs5Tb+zTPfiza6sHEa5A3w8jWLgM/j6BePvoOBcM33+v6Hj9zvuQ978lR5ihl/bedM0DvN4vwI+NOvy7/SbCkze51WVRfXaCaJEmdlSm+H4lKLsVE3Kvoe2950tZdcnu5T1rISQKuaHovZNZw26/aKxvn0tS6oUG1WWmbAPvtbGjzPU2WvgV4uoEc7PkQ77MhHoYu1K7YvOVhv7uuJ7/QpdLcKtX2ZPthc1A/tEcK/zbAW+/0rbnqRVAlPuk0gC5b5cv1Q+BbIp8kGnX2VjQmT7bLm/Hfp1RfZ3kAdpGZI3h2iMnZCC47ftj+351WJ06PTLxk6I7OxxWH8rd4RCRHHuKC1DbOaIdJyQAn4vuPpqS8d5HVJUfy+p2lXjihIbuya/L2wowkae3TJEZFfmjywnBshRSl9s9Je1v7z9kL7bPE9Fi+xMlf09Z3Ne2KxNFu8qf2x02ojMD9McrpOLivTX9j6F9l/HfmgbotKnfp9nJCHqffFho0hcxWRNhHTarUI8h94PGx28Pp2xrrZ8SehcFToPhvabvbZ5JkXx4etZd4lZfn0+pIz8oMoRunpsbPgUUZ4NaYu1qcr9vC+2MWsa8yHOPlOxfU7L9Fnkg0t+0dGdZ9O38PGr6nPxwzRWXUX0/JmSN09kU+WPyD8f4jM+ioo7lW1femzuv0iXqi5r8yGq/fBts+gca/M8+orLvOc0RJ7P88c0J/m2L/OFbzfVa5LrXc4WH2NsbJrulcsafa+T99lFVwgpwr7JMy47U3T0FiFF56uQuss4j3gfbOb68sUlB6vOjaLPtrbdkLp9nZmqffcpqnurk4NU+oq8rzIx2Xddv8tel+peydar+htBpIufH0J4O2XFCCu2z0GZayjyDMzLS6Z+yGK1Sjmk7RNbtq91zrXQfumeOb58MdGTtxdlngmyc09nTlmxqfMcmvij67OJXV3R3dOQsZznh6qfkOL80M3BuvtW1B7yY2R+FLG/MsnzVXd+aF9VuUk1xzWudPwy1edzz1x8t9UfyndbHTY2yxTdHOCa92zj3CR+Te6fjzX5Ftf9M/E1VC4yzVehROa77/h09cmXb6Zxm2c3pPjSH9bn/wE=",Pr={data:kr};var je,on;function Cr(){if(on)return je;on=1;var t=0,u=-3;function d(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function n(o,f){this.source=o,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=f,this.destLen=0,this.ltree=new d,this.dtree=new d}var c=new d,g=new d,P=new Uint8Array(30),T=new Uint16Array(30),M=new Uint8Array(30),k=new Uint16Array(30),I=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),z=new d,H=new Uint8Array(320);function S(o,f,s,p){var m,y;for(m=0;m<s;++m)o[m]=0;for(m=0;m<30-s;++m)o[m+s]=m/s|0;for(y=p,m=0;m<30;++m)f[m]=y,y+=1<<o[m]}function b(o,f){var s;for(s=0;s<7;++s)o.table[s]=0;for(o.table[7]=24,o.table[8]=152,o.table[9]=112,s=0;s<24;++s)o.trans[s]=256+s;for(s=0;s<144;++s)o.trans[24+s]=s;for(s=0;s<8;++s)o.trans[168+s]=280+s;for(s=0;s<112;++s)o.trans[176+s]=144+s;for(s=0;s<5;++s)f.table[s]=0;for(f.table[5]=32,s=0;s<32;++s)f.trans[s]=s}var w=new Uint16Array(16);function _(o,f,s,p){var m,y;for(m=0;m<16;++m)o.table[m]=0;for(m=0;m<p;++m)o.table[f[s+m]]++;for(o.table[0]=0,y=0,m=0;m<16;++m)w[m]=y,y+=o.table[m];for(m=0;m<p;++m)f[s+m]&&(o.trans[w[f[s+m]]++]=m)}function x(o){o.bitcount--||(o.tag=o.source[o.sourceIndex++],o.bitcount=7);var f=o.tag&1;return o.tag>>>=1,f}function j(o,f,s){if(!f)return s;for(;o.bitcount<24;)o.tag|=o.source[o.sourceIndex++]<<o.bitcount,o.bitcount+=8;var p=o.tag&65535>>>16-f;return o.tag>>>=f,o.bitcount-=f,p+s}function O(o,f){for(;o.bitcount<24;)o.tag|=o.source[o.sourceIndex++]<<o.bitcount,o.bitcount+=8;var s=0,p=0,m=0,y=o.tag;do p=2*p+(y&1),y>>>=1,++m,s+=f.table[m],p-=f.table[m];while(p>=0);return o.tag=y,o.bitcount-=m,f.trans[s+p]}function e(o,f,s){var p,m,y,A,E,l;for(p=j(o,5,257),m=j(o,5,1),y=j(o,4,4),A=0;A<19;++A)H[A]=0;for(A=0;A<y;++A){var C=j(o,3,0);H[I[A]]=C}for(_(z,H,0,19),E=0;E<p+m;){var L=O(o,z);switch(L){case 16:var R=H[E-1];for(l=j(o,2,3);l;--l)H[E++]=R;break;case 17:for(l=j(o,3,3);l;--l)H[E++]=0;break;case 18:for(l=j(o,7,11);l;--l)H[E++]=0;break;default:H[E++]=L;break}}_(f,H,0,p),_(s,H,p,m)}function r(o,f,s){for(;;){var p=O(o,f);if(p===256)return t;if(p<256)o.dest[o.destLen++]=p;else{var m,y,A,E;for(p-=257,m=j(o,P[p],T[p]),y=O(o,s),A=o.destLen-j(o,M[y],k[y]),E=A;E<A+m;++E)o.dest[o.destLen++]=o.dest[E]}}}function a(o){for(var f,s,p;o.bitcount>8;)o.sourceIndex--,o.bitcount-=8;if(f=o.source[o.sourceIndex+1],f=256*f+o.source[o.sourceIndex],s=o.source[o.sourceIndex+3],s=256*s+o.source[o.sourceIndex+2],f!==(~s&65535))return u;for(o.sourceIndex+=4,p=f;p;--p)o.dest[o.destLen++]=o.source[o.sourceIndex++];return o.bitcount=0,t}function i(o,f){var s=new n(o,f),p,m,y;do{switch(p=x(s),m=j(s,2,0),m){case 0:y=a(s);break;case 1:y=r(s,c,g);break;case 2:e(s,s.ltree,s.dtree),y=r(s,s.ltree,s.dtree);break;default:y=u}if(y!==t)throw new Error("Data error")}while(!p);return s.destLen<s.dest.length?typeof s.dest.slice=="function"?s.dest.slice(0,s.destLen):s.dest.subarray(0,s.destLen):s.dest}return b(c,g),S(P,T,4,3),S(M,k,2,1),P[28]=0,T[28]=258,je=i,je}var Me,cn;function Sr(){if(cn)return Me;cn=1;const t=new Uint8Array(new Uint32Array([305419896]).buffer)[0]===18,u=(c,g,P)=>{let T=c[g];c[g]=c[P],c[P]=T},d=c=>{const g=c.length;for(let P=0;P<g;P+=4)u(c,P,P+3),u(c,P+1,P+2)};return Me={swap32LE:c=>{t&&d(c)}},Me}var ze,ln;function xr(){if(ln)return ze;ln=1;const t=Cr(),{swap32LE:u}=Sr(),d=11,n=5,c=d-n,g=65536>>d,T=(1<<c)-1,M=2,I=(1<<n)-1,z=65536>>n,H=1024>>n,_=z+H+32,x=1<<M;class j{constructor(e){const r=typeof e.readUInt32BE=="function"&&typeof e.slice=="function";if(r||e instanceof Uint8Array){let a;if(r)this.highStart=e.readUInt32LE(0),this.errorValue=e.readUInt32LE(4),a=e.readUInt32LE(8),e=e.slice(12);else{const i=new DataView(e.buffer);this.highStart=i.getUint32(0,!0),this.errorValue=i.getUint32(4,!0),a=i.getUint32(8,!0),e=e.subarray(12)}e=t(e,new Uint8Array(a)),e=t(e,new Uint8Array(a)),u(e),this.data=new Uint32Array(e.buffer)}else({data:this.data,highStart:this.highStart,errorValue:this.errorValue}=e)}get(e){let r;return e<0||e>1114111?this.errorValue:e<55296||e>56319&&e<=65535?(r=(this.data[e>>n]<<M)+(e&I),this.data[r]):e<=65535?(r=(this.data[z+(e-55296>>n)]<<M)+(e&I),this.data[r]):e<this.highStart?(r=this.data[_-g+(e>>d)],r=this.data[r+(e>>n&T)],r=(r<<M)+(e&I),this.data[r]):this.data[this.data.length-x]}}return ze=j,ze}var ke={exports:{}},Ar=ke.exports,fn;function Tr(){return fn||(fn=1,function(t,u){(function(d,n){t.exports=n()})(typeof self<"u"?self:typeof window<"u"?window:typeof tn<"u"?tn:Ar,function(){var d="3.7.7",n=d,c=typeof Buffer=="function",g=typeof TextDecoder=="function"?new TextDecoder:void 0,P=typeof TextEncoder=="function"?new TextEncoder:void 0,T="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",M=Array.prototype.slice.call(T),k=function(v){var F={};return v.forEach(function(N,W){return F[N]=W}),F}(M),I=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,z=String.fromCharCode.bind(String),H=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):function(v){return new Uint8Array(Array.prototype.slice.call(v,0))},S=function(v){return v.replace(/=/g,"").replace(/[+\/]/g,function(F){return F=="+"?"-":"_"})},b=function(v){return v.replace(/[^A-Za-z0-9\+\/]/g,"")},w=function(v){for(var F,N,W,de,te="",le=v.length%3,se=0;se<v.length;){if((N=v.charCodeAt(se++))>255||(W=v.charCodeAt(se++))>255||(de=v.charCodeAt(se++))>255)throw new TypeError("invalid character found");F=N<<16|W<<8|de,te+=M[F>>18&63]+M[F>>12&63]+M[F>>6&63]+M[F&63]}return le?te.slice(0,le-3)+"===".substring(le):te},_=typeof btoa=="function"?function(v){return btoa(v)}:c?function(v){return Buffer.from(v,"binary").toString("base64")}:w,x=c?function(v){return Buffer.from(v).toString("base64")}:function(v){for(var F=4096,N=[],W=0,de=v.length;W<de;W+=F)N.push(z.apply(null,v.subarray(W,W+F)));return _(N.join(""))},j=function(v,F){return F===void 0&&(F=!1),F?S(x(v)):x(v)},O=function(v){if(v.length<2){var F=v.charCodeAt(0);return F<128?v:F<2048?z(192|F>>>6)+z(128|F&63):z(224|F>>>12&15)+z(128|F>>>6&63)+z(128|F&63)}else{var F=65536+(v.charCodeAt(0)-55296)*1024+(v.charCodeAt(1)-56320);return z(240|F>>>18&7)+z(128|F>>>12&63)+z(128|F>>>6&63)+z(128|F&63)}},e=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,r=function(v){return v.replace(e,O)},a=c?function(v){return Buffer.from(v,"utf8").toString("base64")}:P?function(v){return x(P.encode(v))}:function(v){return _(r(v))},i=function(v,F){return F===void 0&&(F=!1),F?S(a(v)):a(v)},o=function(v){return i(v,!0)},f=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,s=function(v){switch(v.length){case 4:var F=(7&v.charCodeAt(0))<<18|(63&v.charCodeAt(1))<<12|(63&v.charCodeAt(2))<<6|63&v.charCodeAt(3),N=F-65536;return z((N>>>10)+55296)+z((N&1023)+56320);case 3:return z((15&v.charCodeAt(0))<<12|(63&v.charCodeAt(1))<<6|63&v.charCodeAt(2));default:return z((31&v.charCodeAt(0))<<6|63&v.charCodeAt(1))}},p=function(v){return v.replace(f,s)},m=function(v){if(v=v.replace(/\s+/g,""),!I.test(v))throw new TypeError("malformed base64.");v+="==".slice(2-(v.length&3));for(var F,N="",W,de,te=0;te<v.length;)F=k[v.charAt(te++)]<<18|k[v.charAt(te++)]<<12|(W=k[v.charAt(te++)])<<6|(de=k[v.charAt(te++)]),N+=W===64?z(F>>16&255):de===64?z(F>>16&255,F>>8&255):z(F>>16&255,F>>8&255,F&255);return N},y=typeof atob=="function"?function(v){return atob(b(v))}:c?function(v){return Buffer.from(v,"base64").toString("binary")}:m,A=c?function(v){return H(Buffer.from(v,"base64"))}:function(v){return H(y(v).split("").map(function(F){return F.charCodeAt(0)}))},E=function(v){return A(C(v))},l=c?function(v){return Buffer.from(v,"base64").toString("utf8")}:g?function(v){return g.decode(A(v))}:function(v){return p(y(v))},C=function(v){return b(v.replace(/[-_]/g,function(F){return F=="-"?"+":"/"}))},L=function(v){return l(C(v))},R=function(v){if(typeof v!="string")return!1;var F=v.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(F)||!/[^\s0-9a-zA-Z\-_]/.test(F)},U=function(v){return{value:v,enumerable:!1,writable:!0,configurable:!0}},$=function(){var v=function(F,N){return Object.defineProperty(String.prototype,F,U(N))};v("fromBase64",function(){return L(this)}),v("toBase64",function(F){return i(this,F)}),v("toBase64URI",function(){return i(this,!0)}),v("toBase64URL",function(){return i(this,!0)}),v("toUint8Array",function(){return E(this)})},X=function(){var v=function(F,N){return Object.defineProperty(Uint8Array.prototype,F,U(N))};v("toBase64",function(F){return j(this,F)}),v("toBase64URI",function(){return j(this,!0)}),v("toBase64URL",function(){return j(this,!0)})},Q=function(){$(),X()},K={version:d,VERSION:n,atob:y,atobPolyfill:m,btoa:_,btoaPolyfill:w,fromBase64:L,toBase64:i,encode:i,encodeURI:o,encodeURL:o,utob:r,btou:p,decode:L,isValid:R,fromUint8Array:j,toUint8Array:E,extendString:$,extendUint8Array:X,extendBuiltins:Q};return K.Base64={},Object.keys(K).forEach(function(v){return K.Base64[v]=K[v]}),K})}(ke)),ke.exports}var Le,pn;function Er(){if(pn)return Le;pn=1;const t=vr(),u=_r.data,d=yr.data,n=Pr.data,c=xr(),g=Tr().Base64,P=new c(g.toUint8Array(u)),T=new c(g.toUint8Array(d)),M=new c(g.toUint8Array(n));function k(z,H){return(z&H)!==0}function I(z,H,S){const b=H.length;for(let w=S;w+1<b;w++){const _=H[w+0],x=H[w+1];switch(z.gb9c){case 0:k(_,t.InCB_Consonant)&&(z.gb9c=1);break;case 1:k(_,t.InCB_Extend)?z.gb9c=1:k(_,t.InCB_Linker)?z.gb9c=2:z.gb9c=k(_,t.InCB_Consonant)?1:0;break;case 2:k(_,t.InCB_Extend|t.InCB_Linker)?z.gb9c=2:z.gb9c=k(_,t.InCB_Consonant)?1:0;break}switch(z.gb11){case 0:k(_,t.Extended_Pictographic)&&(z.gb11=1);break;case 1:k(_,t.Extend)?z.gb11=1:k(_,t.ZWJ)?z.gb11=2:z.gb11=k(_,t.Extended_Pictographic)?1:0;break;case 2:z.gb11=k(_,t.Extended_Pictographic)?1:0;break}switch(z.gb12){case 0:k(_,t.Regional_Indicator)?z.gb12=1:z.gb12=-1;break;case 1:k(_,t.Regional_Indicator)?z.gb12=0:z.gb12=-1;break}switch(z.gb13){case 0:k(_,t.Regional_Indicator)||(z.gb13=1);break;case 1:k(_,t.Regional_Indicator)?z.gb13=2:z.gb13=1;break;case 2:z.gb13=1;break}if(!(k(_,t.CR)&&k(x,t.LF))){if(k(_,t.Control|t.CR|t.LF)||k(x,t.Control|t.CR|t.LF))return w+1-S;if(!(k(_,t.L)&&k(x,t.L|t.V|t.LV|t.LVT))&&!(k(_,t.LV|t.V)&&k(x,t.V|t.T))&&!(k(_,t.LVT|t.T)&&k(x,t.T))&&!k(x,t.Extend|t.ZWJ)&&!k(x,t.SpacingMark)&&!k(_,t.Prepend)&&!(k(x,t.InCB_Consonant)&&z.gb9c===2)&&!(k(x,t.Extended_Pictographic)&&z.gb11===2)&&!(k(x,t.Regional_Indicator)&&z.gb12===1)&&!(k(x,t.Regional_Indicator)&&z.gb13===2))return w+1-S}}return b-S}return Le=function(H){const S=[],b=[0],w=[];for(let x=0;x<H.length;){const j=H.codePointAt(x);w.push(P.get(j)|T.get(j)|M.get(j)),x+=j>65535?2:1,b.push(x)}const _={gb9c:0,gb11:0,gb12:0,gb13:0};for(let x=0;x<w.length;){const j=I(_,w,x),O=b[x],e=b[x+j];S.push(H.slice(O,e)),x+=j}return S},Le}var jr=Er();const Mr=yn(jr),zr=t=>t.normalize("NFKD").split(""),hn=/^\s+$/,gn=/^[`~!@#$%^&*()\-=_+{}[\]\|\\;':",./<>?]+$/,De={insertOrder:"insertOrder",bestMatch:"bestMatch"},Lr={keySelector:t=>t,threshold:.6,ignoreCase:!0,ignoreSymbols:!0,normalizeWhitespace:!0,returnMatchData:!1,useDamerau:!0,useSellers:!0,useSeparatedUnicode:!1,sortBy:De.bestMatch},Or=()=>{},Fr=t=>t instanceof Array?t:[t];function Sn(t,u){const d=u.ignoreCase?t.toLocaleLowerCase():t,n=[],c=[];let g=!0,P=0;const T=u.useSeparatedUnicode?zr(d):Mr(d);for(const M of T)hn.lastIndex=0,gn.lastIndex=0,u.normalizeWhitespace&&hn.test(M)?g||(n.push(" "),c.push(P),g=!0):u.ignoreSymbols&&gn.test(M)||(u.useSeparatedUnicode?n.push(M):n.push(M.normalize()),c.push(P),g=!1),P+=M.length;for(c.push(t.length);n[n.length-1]===" ";)n.pop(),c.pop();return{original:t,normal:n,map:c}}function Ir(t,u){return{index:u[t.start],length:u[t.end+1]-u[t.start]}}function xn(t,u){if(u===0)return{index:0,length:0};let d=u;for(let n=t.length-2;n>0&&d>1;n--){const c=t[n];d=c[d]<c[d-1]?d:d-1}return{start:d-1,end:u-1}}function Rr(){return{start:0,end:0}}const $r=()=>!0,Br=(t,u)=>t<u;function Dr(t,u){const d=new Array(t);for(let n=0;n<t;n++)d[n]=new Array(u),d[n][0]=n;for(let n=0;n<u;n++)d[0][n]=n;return d}function Hr(t,u){const d=new Array(t);d[0]=new Array(u).fill(0);for(let n=1;n<t;n++)d[n]=new Array(u),d[n][0]=n;return d}function An(t,u,d,n,c){const g=d[n],P=d[n+1],T=t[n]===u[c]?0:1;let M,k=P[c]+1;(M=g[c+1]+1)<k&&(k=M),(M=g[c]+T)<k&&(k=M),P[c+1]=k}function Tn(t,u,d,n){for(let c=0;c<t.length;c++)An(t,u,d,c,n)}function Ur(t,u,d,n){if(n===0){Tn(t,u,d,n);return}t.length>0&&An(t,u,d,0,n);for(let c=1;c<t.length;c++){const g=d[c-1],P=d[c],T=d[c+1],M=t[c]===u[n]?0:1;let k,I=T[n]+1;(k=P[n+1]+1)<I&&(I=k),(k=P[n]+M)<I&&(I=k),t[c]===u[n-1]&&t[c-1]===u[n]&&(k=g[n-1]+M)<I&&(I=k),T[n+1]=I}}function Nr(t,u,d){let n=t;for(let c=0;c<u.length;c++){const g=u[c];n.children[g]==null&&(n.children[g]={children:{},candidates:[],depth:0}),n.depth=Math.max(n.depth,u.length-c),n=n.children[g]}n.candidates.push(d)}function Vr(t,u,d,n){for(const c of d){const g=Fr(n.keySelector(c)).map((P,T)=>({index:u,keyIndex:T,item:c,normalized:Sn(P,n)}));u++;for(const P of g)Nr(t,P.normalized.normal,P)}}function qr(t,u){const d=u.score-t.score;if(d!==0)return d;const n=t.match.start-u.match.start;if(n!==0)return n;const c=t.keyIndex-u.keyIndex;if(c!==0)return c;const g=t.lengthDiff-u.lengthDiff;return g!==0?g:En(t,u)}function En(t,u){return t.index-u.index}function Wr(t){switch(t){case De.bestMatch:return qr;case De.insertOrder:return En;default:throw new Error(`unknown sortBy method ${t}`)}}function jn(t,u,d,n,c,g,P){const T={item:d.item,normalized:d.normalized,score:n,match:c,index:d.index,keyIndex:d.keyIndex,lengthDiff:g};u[d.index]==null?(u[d.index]=t.length,t.push(T)):P(T,t[u[d.index]])<0&&(t[u[d.index]]=T)}const Gr=Math.max,Zr=t=>t;function Xr(t,u,d,n,c){const g=u+c,P=Math.min(d.length,u+t.depth+1),T=Math.ceil((g+P)/2);return 1-(T-P)/T>=n}function Kr(t,u,d,n,c,g){return 1-Math.min(c,g-(t.depth+1))/d.length>=n}function Jr(t,u,d,n,c,g,P){const T=[];for(const k in t.children){const I=t.children[k];T.push([I,1,k,0,u.length])}const M=new Array(t.depth);for(;T.length!==0;){const[k,I,z,H,S]=T.pop();M[I-1]=z,d.score(u,M,n,I-1);const b=I,w=n[n.length-1][b];let _=H,x=S;if(d.shouldUpdateScore(w,S)&&(_=b,x=w),k.candidates.length>0){const j=d.getLength(u.length,I),O=1-x/j;if(O>=P.threshold){const e=xn(n,_),r=Math.abs(I-u.length);for(const a of k.candidates)jn(c,g,a,O,e,r,d.compareItems)}}for(const j in k.children){const O=k.children[j];d.shouldContinue(O,I,u,P.threshold,x,w)&&T.push([O,I+1,j,_,x])}}}function Qr(t,u,d){const n=d.useSellers?Hr:Dr,c={score:d.useDamerau?Ur:Tn,getLength:d.useSellers?Zr:Gr,shouldUpdateScore:d.useSellers?Br:$r,shouldContinue:d.useSellers?Kr:Xr,walkBack:d.useSellers?xn:Rr,compareItems:Wr(d.sortBy)},g={},P=[],T=n(t.length+1,u.depth+1);if(d.threshold<=0||t.length===0)for(const k of u.candidates)jn(P,g,k,0,{index:0,length:0},t.length,c.compareItems);Jr(u,t,c,T,P,g,d);const M=P.sort(c.compareItems);if(d.returnMatchData){const k=d.useSellers?Ir:Or;return M.map(I=>({item:I.item,original:I.normalized.original,key:I.normalized.normal.join(""),score:I.score,match:k(I.match,I.normalized.map)}))}return M.map(k=>k.item)}function Yr(t,u,d){d={...Lr,...d};const n={children:{},candidates:[],depth:0};return Vr(n,0,u,d),Qr(Sn(t,d).normal,n,d)}const Oe=5;function ea(t){const u=B(!1),d=B(""),n=ee(()=>d.val?Yr(d.val,t,{keySelector:g=>g.name+" "+g.path}):t),c=ee(()=>n.val.slice(0,Oe));return me({type:"search",placeholder:"Search...",value:d,lead:h.i({class:"text-xl"},"search"),"$data-open":u,class:"group md:variant-outline not-md:hover:variant-soft cursor-pointer transition-all not-md:min-w-9 min-w-32 w-0 rounded-2xl focus-within:w-xs focus-within:variant-soft-outline data-open:w-xs data-open:variant-soft-outline not-md:*:placeholder:opacity-0 *:placeholder:transition-opacity not-md:data-open:fixed not-md:data-open:top-21 left-4 right-4 not-md:data-open:w-auto z-20",onfocus:()=>u.val=!0},()=>be({visible:u},h.div({class:"pointer-events-none md:hidden not-group-data-open:hidden fixed left-0 top-0 w-screen h-screen bg-background-50 glass"})),()=>be({visible:u,class:"card shadow-xl vessel glass rounded-2xl w-full max-w-full transition-opacity starting:opacity-0 overflow-hidden"},()=>h.ul({class:"flex flex-col gap-2"},h.li({class:"text-mini uppercase"},"Pages"),c.val.length?c.val.map(g=>na(g,()=>u.val=!1)):h.span({class:"text-sm text-center break-all"},h.span({class:"text-swatch-600-surface"},"No results for "),h.span({class:"font-semibold"},d)),n.val.length>Oe?h.span({class:"badge variant-outline rounded-full w-fit self-center"},h.span({class:"text-swatch-600-surface"},"and "),h.span({class:"font-semibold"},n.val.length-Oe),h.span({class:"text-swatch-600-surface"}," more")):void 0)))}function na(t,u){const d=t.path.split("/").slice(2,-1).map(n=>n[0].toUpperCase()+n.slice(1)).join(" → ");return Cn({href:t.path,onclick:u,class:"button gap-2 justify-start variant-soft hover:raised active:lowered active:mood-accent transition"},h.i({class:"opacity-75"},"article"),h.span({class:"flex-1"},h.span({class:"opacity-75"},d?`${d} → `:void 0),h.span({class:"font-semibold"},t.name)),h.i("chevron_right"))}function ta({searchLinks:t,navbarOpen:u}){const d="flex gap-2 items-center";return h.header({name:"Header",class:"bg-background-50 fixed top-0 flex w-screen justify-between gap-4 not-lg:px-2 px-6 py-2 glass border-b border-surface-500/50 z-10"},h["left-content"]({class:d},ne({name:"Navbar Toggle",onclick:()=>u.val=!u.val,class:"rounded-full text-xl lg:hidden hover:variant-soft active:variant-soft"},h.i("menu")),h.img({src:mr,class:"size-12 -m-2 not-dark:brightness-0"}),h.span({class:"text-xl font-bold"},"Savant")),h["right-content"]({class:d},ea(t),h.a({name:"GitHub",class:"control !rounded-full **:fill-current hover:variant-soft text-lg !p-2",href:"https://github.com/OscarCookeAbbott/Savant",target:"_blank"},ae.svg({viewBox:"0 0 1024 1024",class:"size-[1em]"},ae.path({transform:"scale(64)",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"})),kn({class:"right-0"},"Savant GitHub"))))}function ra({options:t,class:u,...d}){const n=ee(()=>decodeURI(fr()));return h.div({name:"Navbar",class:`p-6 flex flex-col overflow-y-auto fixed top-12 h-[calc(100%-3rem)] left-0 bg-background border-r border-surface-500/50 ${u}`,...d},t.map(c=>Mn(c,0,n)))}function Mn(t,u,d){var n;return[Cn({href:t.path,disabled:t.path===void 0,onclick:()=>{window.scrollTo({top:0,left:0})},"$data-selected":()=>d.val===`${"/Savant/".slice(0,-1)}${t.path}`,"$data-group":()=>u===0&&t.children,"$data-indented":()=>u!==0,style:`--indent: ${u}rem;`,class:"relative flex gap-4 group text-swatch-700-mood data-selected:text-mood-500 data-group:font-semibold data-group:not-first:mt-6 data-group:mb-1 not-data-selected:hover:text-swatch-900-foreground data-selected:mood-accent data-selected:z-10"},h.span({name:"Divider",class:"absolute h-full w-px left-0 bg-current/50 group-data-selected:bg-current not-group-data-indented:hidden group-hover:w-1 group-data-selected:w-1 transition-all"}),h.span({name:"Title",class:"group-data-indented:ml-(--indent) justify-start group-data-selected:font-semibold flex-1 py-0.5 z-1 transition-all"},t.name)),(n=t.children)==null?void 0:n.map(c=>Mn(c,u+1,d))]}const aa=`# Savant Core

> All the essentials for functional, declarative web apps.
`;function ua(){return G(ue({class:"language-typescript"},aa))}const da=`# Savant Routing

> Make site navigation easy.

## Overview

Savant provides a built-in, modular routing system that allows you to lay out your content however you prefer.

Using just the \`Router\` and \`Link\` components, you can get a single-page-app running in no time.

**Demo**

\`\`\`typescript
import { mount } from "savant"
import { Router, Link } from "savant/routing"

function App() {
    const rootPage = html.div(
        "This is the root page!",

        Link({ href: "/other" }, "Other page")
    )

    const otherPage = html.div(
        "This is the other page!",

        Link({ href: "/" }, "Root page")
    )

    return Router(
        ["/": rootPage],
        ["/other": otherPage],
    )
}

mount(document.body, App())
\`\`\`
`;function sa(){return G(ue({class:"language-typescript"},da))}const oa=`# Savant UI

> Make great design effortless.
`;function ia(){return G(ue({class:"language-typescript"},oa))}const ca=`# Savant

> A refreshingly simple and smart web framework with pep!

Savant is a tiny (3kB), zero-dependency, pure-TypeScript and pure-DOM framework for reactive web development.

Using nothing but standard JS/TS functions and any existing tooling, _anybody_ can build a reactive website in minutes.

Inspired by the incredible [VanJS](https://vanjs.org).

## Example - Counter

\`\`\`typescript
import { mount, html, state } from "@savant/core"
import { Router } from "@savant/routing"

function Counter() {
	const count = state(0)

	return html.div(
		"Count: ",
		count,
		" ",
		html.button({ onclick: () => ++value.val }, "+"),
		html.button({ onclick: () => --value.val }, "-"),
	)
}

function App() {
	return Router({
		routes: {
			"/": html.div("Hello world!"),
			"/counter": Counter,
		},
	})
}

mount(document.body, App())
\`\`\`
`;function la(){return G(ue({},ca))}const fa=Object.assign({"./src/routes/1 core/1 State/index.ts":vt,"./src/routes/1 core/2 Derive/index.ts":wt,"./src/routes/1 core/3 Elements/index.ts":Pt,"./src/routes/1 core/4 Components/index.ts":xt,"./src/routes/1 core/5 Context/index.ts":Et,"./src/routes/1 core/6 Converter/index.ts":Mt}),pa=Object.assign({"./src/routes/2 routing/1 Router/index.ts":Ot,"./src/routes/2 routing/2 Link/index.ts":Rt}),ha=Object.assign({"./src/routes/3 ui/Badge/index.ts":Bt,"./src/routes/3 ui/Button/index.ts":Ht,"./src/routes/3 ui/Checkbox/index.ts":Nt,"./src/routes/3 ui/Code/index.ts":qt,"./src/routes/3 ui/Control Group/index.ts":Gt,"./src/routes/3 ui/Input/index.ts":Xt,"./src/routes/3 ui/Popup/index.ts":Jt,"./src/routes/3 ui/Progress Radial/index.ts":Yt,"./src/routes/3 ui/Radio/index.ts":nr,"./src/routes/3 ui/Select/index.ts":rr,"./src/routes/3 ui/Switch/index.ts":ur,"./src/routes/3 ui/Tooltip/index.ts":sr}),ga=Object.assign({"./src/routes/examples/Sign In/index.ts":cr}),_e=t=>Object.entries(t).map(([u,d])=>{const n=u.replace("./src/routes/","").replace("/index.ts",""),c=n.split("/").slice(-1)[0].replace(/^\d+\s/,""),g=n.split("/").slice(0,-1).map(P=>P.replace(/^\d+\s/,"").replace(" ","-")).join("/");return{name:c,path:`/#!/${g}/${c}`,dom:d.default}}),zn=[{name:"Introduction",path:"/",dom:la},{name:"Core",path:"/#!/core",dom:ua,children:_e(fa)},{name:"Routing",path:"/#!/routing",dom:sa,children:_e(pa)},{name:"Savant UI",path:"/#!/ui",dom:ia,children:_e(ha)},{name:"Examples",children:_e(ga)}],mn=zn.flatMap(t=>[...t.path?[t]:[],...t.children??[]]);function ma(){const t=B(!0);return h.div({name:"App",class:"flex flex-col relative size-screen"},ta({searchLinks:mn,navbarOpen:t}),h.div({class:"flex flex-1"},ra({options:zn,"$data-hidden":t,class:"min-w-64 not-md:w-screen not-lg:data-hidden:hidden"}),h.div({class:"lg:ml-64 overflow-clip w-full flex flex-1 justify-center"},h.div({class:"flex flex-col w-full px-8 pt-24 pb-16 gap-4 not-lg:px-4 not-lg:pt-16 not-lg:pb-8"},gr({basename:"/Savant/".slice(0,-1),routes:mn})))))}ge(document.body,ma())});export default va();
