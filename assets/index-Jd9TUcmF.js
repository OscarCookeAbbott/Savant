var en=(r,s)=>()=>(s||r((s={exports:{}}).exports,s),s.exports);var Vt=en((qt,ve)=>{(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))a(p);new MutationObserver(p=>{for(const b of p)if(b.type==="childList")for(const z of b.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&a(z)}).observe(document,{childList:!0,subtree:!0});function c(p){const b={};return p.integrity&&(b.integrity=p.integrity),p.referrerPolicy&&(b.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?b.credentials="include":p.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function a(p){if(p.ep)return;p.ep=!0;const b=c(p);fetch(p.href,b)}})();let nn=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},x=function(r){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,c=0,a={},p={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function _(m){return m instanceof b?new b(m.type,_(m.content),m.alias):Array.isArray(m)?m.map(_):m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(_){return Object.prototype.toString.call(_).slice(8,-1)},objId:function(_){return _.__id||Object.defineProperty(_,"__id",{value:++c}),_.__id},clone:function _(m,y){let v,C;switch(y=y||{},p.util.type(m)){case"Object":if(C=p.util.objId(m),y[C])return y[C];for(let A in v={},y[C]=v,m)m.hasOwnProperty(A)&&(v[A]=_(m[A],y));return v;case"Array":return C=p.util.objId(m),y[C]?y[C]:(v=[],y[C]=v,m.forEach(function(A,$){v[$]=_(A,y)}),v);default:return m}},getLanguage:function(_){for(;_;){let m=s.exec(_.className);if(m)return m[1].toLowerCase();_=_.parentElement}return"none"},setLanguage:function(_,m){_.className=_.className.replace(RegExp(s,"gi"),""),_.classList.add("language-"+m)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(_){let m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(_.stack)||[])[1];if(m){let y=document.getElementsByTagName("script");for(let v in y)if(y[v].src==m)return y[v]}return null}},isActive:function(_,m,y){for(let v="no-"+m;_;){let C=_.classList;if(C.contains(m))return!0;if(C.contains(v))return!1;_=_.parentElement}return!!y}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(_,m){let y=p.util.clone(p.languages[_]);for(let v in m)y[v]=m[v];return y},insertBefore:function(_,m,y,v){let C=(v=v||p.languages)[_],A={};for(let e in C)if(C.hasOwnProperty(e)){if(e==m)for(let t in y)y.hasOwnProperty(t)&&(A[t]=y[t]);y.hasOwnProperty(e)||(A[e]=C[e])}let $=v[_];return v[_]=A,p.languages.DFS(p.languages,function(e,t){t===$&&e!=_&&(this[e]=A)}),A},DFS:function _(m,y,v,C){C=C||{};let A=p.util.objId;for(let $ in m)if(m.hasOwnProperty($)){y.call(m,$,m[$],v||$);let e=m[$],t=p.util.type(e);t!=="Object"||C[A(e)]?t!=="Array"||C[A(e)]||(C[A(e)]=!0,_(e,y,$,C)):(C[A(e)]=!0,_(e,y,null,C))}}},plugins:{},highlightAll:function(_,m){p.highlightAllUnder(document,_,m)},highlightAllUnder:function(_,m,y){let v={callback:y,container:_,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};p.hooks.run("before-highlightall",v),v.elements=Array.prototype.slice.apply(v.container.querySelectorAll(v.selector)),p.hooks.run("before-all-elements-highlight",v);for(var C,A=0;C=v.elements[A++];)p.highlightElement(C,m===!0,v.callback)},highlightElement:function(_,m,y){let v=p.util.getLanguage(_),C=p.languages[v];p.util.setLanguage(_,v);let A=_.parentElement;A&&A.nodeName.toLowerCase()==="pre"&&p.util.setLanguage(A,v);let $={element:_,language:v,grammar:C,code:_.textContent};function e(t){$.highlightedCode=t,p.hooks.run("before-insert",$),$.element.innerHTML=$.highlightedCode,p.hooks.run("after-highlight",$),p.hooks.run("complete",$),y&&y.call($.element)}if(p.hooks.run("before-sanity-check",$),(A=$.element.parentElement)&&A.nodeName.toLowerCase()==="pre"&&!A.hasAttribute("tabindex")&&A.setAttribute("tabindex","0"),!$.code)return p.hooks.run("complete",$),void(y&&y.call($.element));if(p.hooks.run("before-highlight",$),$.grammar)if(m&&r.Worker){let t=new Worker(p.filename);t.onmessage=function(n){e(n.data)},t.postMessage(JSON.stringify({language:$.language,code:$.code,immediateClose:!0}))}else e(p.highlight($.code,$.grammar,$.language));else e(p.util.encode($.code))},highlight:function(_,m,y){let v={code:_,grammar:m,language:y};if(p.hooks.run("before-tokenize",v),!v.grammar)throw new Error('The language "'+v.language+'" has no grammar.');return v.tokens=p.tokenize(v.code,v.grammar),p.hooks.run("after-tokenize",v),b.stringify(p.util.encode(v.tokens),v.language)},tokenize:function(_,m){let y=m.rest;if(y){for(let C in y)m[C]=y[C];delete m.rest}let v=new T;return I(v,v.head,_),M(_,v,m,v.head,0),function(C){for(var A=[],$=C.head.next;$!==C.tail;)A.push($.value),$=$.next;return A}(v)},hooks:{all:{},add:function(_,m){let y=p.hooks.all;y[_]=y[_]||[],y[_].push(m)},run:function(_,m){let y=p.hooks.all[_];if(y&&y.length)for(var v,C=0;v=y[C++];)v(m)}},Token:b};function b(_,m,y,v){this.type=_,this.content=m,this.alias=y,this.length=0|(v||"").length}function z(_,m,y,v){_.lastIndex=m;let C=_.exec(y);if(C&&v&&C[1]){let A=C[1].length;C.index+=A,C[0]=C[0].slice(A)}return C}function M(_,m,y,v,C,A){for(let i in y)if(y.hasOwnProperty(i)&&y[i]){let l=y[i];l=Array.isArray(l)?l:[l];for(let o=0;o<l.length;++o){if(A&&A.cause==i+","+o)return;let f=l[o],S=f.inside,k=!!f.lookbehind,w=!!f.greedy,P=f.alias;if(w&&!f.pattern.global){let u=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,u+"g")}for(let u=f.pattern||f,g=v.next,j=C;g!==m.tail&&!(A&&j>=A.reach);j+=g.value.length,g=g.next){let E=g.value;if(m.length>_.length)return;if(!(E instanceof b)){var $,e=1;if(w){if(!($=z(u,j,_,k))||$.index>=_.length)break;var t=$.index,n=$.index+$[0].length,d=j;for(d+=g.value.length;t>=d;)d+=(g=g.next).value.length;if(j=d-=g.value.length,g.value instanceof b)continue;for(let B=g;B!==m.tail&&(d<n||typeof B.value=="string");B=B.next)e++,d+=B.value.length;e--,E=_.slice(j,d),$.index-=j}else if(!($=z(u,0,E,k)))continue;t=$.index;let R=$[0],O=E.slice(0,t),W=E.slice(t+R.length),Z=j+E.length;A&&Z>A.reach&&(A.reach=Z);let X=g.prev;if(O&&(X=I(m,X,O),j+=O.length),D(m,X,e),g=I(m,X,new b(i,S?p.tokenize(R,S):R,P,R)),W&&I(m,g,W),e>1){let B={cause:i+","+o,reach:Z};M(_,m,y,g.prev,j,B),A&&B.reach>A.reach&&(A.reach=B.reach)}}}}}}function T(){let _={value:null,prev:null,next:null},m={value:null,prev:_,next:null};_.next=m,this.head=_,this.tail=m,this.length=0}function I(_,m,y){let v=m.next,C={value:y,prev:m,next:v};return m.next=C,v.prev=C,_.length++,C}function D(_,m,y){for(var v=m.next,C=0;C<y&&v!==_.tail;C++)v=v.next;m.next=v,v.prev=m,_.length-=C}if(r.Prism=p,b.stringify=function _(m,y){if(typeof m=="string")return m;if(Array.isArray(m)){let $="";return m.forEach(function(e){$+=_(e,y)}),$}let v={type:m.type,content:_(m.content,y),tag:"span",classes:["token",m.type],attributes:{},language:y},C=m.alias;C&&(Array.isArray(C)?Array.prototype.push.apply(v.classes,C):v.classes.push(C)),p.hooks.run("wrap",v);let A="";for(let $ in v.attributes)A+=" "+$+'="'+(v.attributes[$]||"").replace(/"/g,"&quot;")+'"';return"<"+v.tag+' class="'+v.classes.join(" ")+'"'+A+">"+v.content+"</"+v.tag+">"},!r.document)return r.addEventListener&&(p.disableWorkerMessageHandler||r.addEventListener("message",function(_){let m=JSON.parse(_.data),y=m.language,v=m.code,C=m.immediateClose;r.postMessage(p.highlight(v,p.languages[y],y)),C&&r.close()},!1)),p;let F=p.util.currentScript();function H(){p.manual||p.highlightAll()}if(F&&(p.filename=F.src,F.hasAttribute("data-manual")&&(p.manual=!0)),!p.manual){let _=document.readyState;_==="loading"||_==="interactive"&&F&&F.defer?document.addEventListener("DOMContentLoaded",H):window.requestAnimationFrame?window.requestAnimationFrame(H):window.setTimeout(H,16)}return p}(nn);typeof ve<"u"&&ve.exports&&(ve.exports=x),typeof global<"u"&&(global.Prism=x);x.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},x.languages.markup.tag.inside["attr-value"].inside.entity=x.languages.markup.entity,x.languages.markup.doctype.inside["internal-subset"].inside=x.languages.markup,x.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(x.languages.markup.tag,"addInlined",{value:function(r,s){let c={};c["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:x.languages[s]},c.cdata=/^<!\[CDATA\[|\]\]>$/i;let a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:c}};a["language-"+s]={pattern:/[\s\S]+/,inside:x.languages[s]};let p={};p[r]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:a},x.languages.insertBefore("markup","cdata",p)}}),Object.defineProperty(x.languages.markup.tag,"addAttribute",{value:function(r,s){x.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(`(^|["'\\s])(?:`+r+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:x.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),x.languages.html=x.languages.markup,x.languages.mathml=x.languages.markup,x.languages.svg=x.languages.markup,x.languages.xml=x.languages.extend("markup",{}),x.languages.ssml=x.languages.xml,x.languages.atom=x.languages.xml,x.languages.rss=x.languages.xml;(function(r){let s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+s.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;let c=r.languages.markup;c&&(c.tag.addInlined("style","css"),c.tag.addAttribute("style","css"))})(x);x.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};x.languages.javascript=x.languages.extend("clike",{"class-name":[x.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),x.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,x.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:x.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:x.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:x.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:x.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:x.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),x.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:x.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),x.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),x.languages.markup&&(x.languages.markup.tag.addInlined("script","javascript"),x.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),x.languages.js=x.languages.javascript;(function(r){r.languages.typescript=r.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),r.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete r.languages.typescript.parameter,delete r.languages.typescript["literal-property"];let s=r.languages.extend("typescript",{});delete s["class-name"],r.languages.typescript["class-name"].inside=s,r.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:s}}}}),r.languages.ts=r.languages.typescript})(x);const Ee="savant-context-request",Pe="context-",Ne="context-out-",$e=new WeakMap;function tn(r,s,c){const p=Ze(r,s)===void 0&&ze(r,s);Ge(r,s,c)&&p&&p.triggerRecheck.val++}function an(r,s){const c=dn(r,s),a=L(c);return Q(()=>{if(c.triggerRecheck.val){const p=ze(r,s);if(p===a.val)return;a.val=p}}),un(Q(()=>{var p;return(p=a.val)==null?void 0:p.val}))}function rn(r,s){const c=Oe(r);if(c===void 0)return;const a=c.contexts.get(s);a!==void 0&&(c.contexts.delete(s),c.contexts.size===1&&($e.delete(r),r.removeEventListener(Ee,c.listener)),a.triggerRecheck.val++)}function Ge(r,s,c){const a=Oe(r);if(a===void 0){const b=T=>{const I=T,D=Ze(r,I.detail.key);D!==void 0&&(I.detail.context=D,T.stopPropagation())};r.addEventListener(Ee,b);const z=Object.assign(L(c),{triggerRecheck:L(0)}),M={listener:b,contexts:new Map([[s,z]])};return $e.set(r,M),z}const p=a.contexts.get(s);if(p===void 0){const b=Object.assign(L(c),{triggerRecheck:L(0)});return a.contexts.set(s,b),b}return p.rawVal!==c&&(p.val=c),p}function dn(r,s){const c=ze(r,s);return c!==void 0?c:Ge(r,s,void 0)}function ze(r,s){const c=new CustomEvent(Ee,{bubbles:!0,cancelable:!0,detail:{key:s,context:void 0}});return r.dispatchEvent(c),c.detail.context}function Oe(r){return $e.get(r)}function Ze(r,s){var c;return(c=Oe(r))==null?void 0:c.contexts.get(s)}function un(r){return Object.assign(r,{triggerRecheck:L(0)})}class se{constructor(s,c){this._rawVal=s,this._oldVal=s,this._bindings=[],this._listeners=[],this._onDestroy=c}set val(s){var c;if((c=ne==null?void 0:ne._setters)==null||c.add(this),s!==this._rawVal){if(this._rawVal=s,this._bindings.length+this._listeners.length===0){this._oldVal=s;return}pe==null||pe.add(this),fe=Ke(fe,this,hn)}}get val(){var s;return(s=ne==null?void 0:ne._getters)==null||s.add(this),this._rawVal}set rawVal(s){if(s!==this._rawVal&&(this._rawVal=s,this._bindings.length+this._listeners.length===0)){this._oldVal=s;return}}get rawVal(){return this._rawVal}get oldVal(){var s;return(s=ne==null?void 0:ne._getters)==null||s.add(this),this._oldVal}}const sn=1e3,on={isConnected:!0};let fe,pe,ne,de,he;const Ce={};function L(r,s){return new se(r,s)}function Q(r,s){const c={_getters:new Set,_setters:new Set},a=L(xe(r,c,void 0),s),p={func:r,state:a,_dom:void 0};p._dom||(de?de.push(p):p._dom=document.getRootNode().firstChild);for(const b of c._getters)c._setters.has(b)||(Le(b),b._listeners.push(p));return a}function ce(r,...s){for(const c of s.flat(1/0)){let a;c instanceof se?a=ie(()=>c.val):typeof c=="function"?a=ie(c):c instanceof Node?a=c:["boolean","string","number","bigint"].includes(typeof c)&&(a=String(c)),a!=null&&r.append(a)}return r}const h=new Proxy({},Fe()),te=new Proxy({},Fe("http://www.w3.org/2000/svg"));new Proxy({},Fe("http://www.w3.org/1998/Math/MathML"));function K(r){return typeof r=="function"?Q(r):r instanceof se?Q(()=>r.val):Q(()=>r)}function cn(r){return r instanceof se?r.val:typeof r=="function"?r():r}function Ke(r,s,c,a){return r||setTimeout(c,a),(r??new Set).add(s)}function xe(r,s,c){const a=ne;ne=s;const p=r(c);return ne=a,p}function _e(r){return r.filter(s=>{var c;return(c=s._dom)==null?void 0:c.isConnected})}function Le(r){he=Ke(he,r,()=>{var s;for(const c of he??[])c._bindings=_e(c._bindings),c._listeners=_e(c._listeners),c._bindings.length===0&&c._listeners.length===0&&((s=c._onDestroy)==null||s.call(c));he=void 0},sn)}function ie(r,s){const c={_getters:new Set,_setters:new Set},a={func:r,state:void 0,_dom:void 0},p=de;de=[];const b=xe(r,c,s),z=(b??document)instanceof Node?b:new Text(String(b));for(const M of c._getters)c._setters.has(M)||(Le(M),M._bindings.push(a));for(const M of de)M._dom=z;return de=p,a._dom=z}function ln(r,s,c){const a={_getters:new Set,_setters:new Set};s.val=xe(r,a,s.rawVal);const p={func:r,state:s,_dom:c};p._dom||(de?de.push(p):p._dom=on);for(const b of a._getters)a._setters.has(b)||(Le(b),b._listeners.push(p));return s}function fn(r,s,c,...a){var I;const p=Object.getPrototypeOf(c)===Object.prototype,[{is:b,...z},...M]=p?[c,a]:[{},[c,...a]],T=r?document.createElementNS(r,s,{is:b}):document.createElement(s,{is:b});for(let[D,F]of Object.entries(z)){const H=D.startsWith("$");D=H?D.slice(1):D;const _=C=>C?Object.getOwnPropertyDescriptor(C,D)??_(Object.getPrototypeOf(C)):void 0,m=`${s},${D}`,y=Ce[m]??(Ce[m]=(I=_(Object.getPrototypeOf(T)))==null?void 0:I.set),v=D.startsWith("on")?(C,A)=>{const $=D.slice(2);A&&T.removeEventListener($,A),T.addEventListener($,C)}:(y==null?void 0:y.bind(T))??T.setAttribute.bind(T,D);if(D.startsWith(Ne)){const C=D.slice(Ne.length);setTimeout(()=>{const A=an(T,C);typeof F=="object"&&F instanceof se?F.val=A.val:typeof F=="function"?F(A):console.warn(`Context out property "${D}" on element <${s}> expects a function or State, but got ${typeof F}.`)});continue}if(D.startsWith(Pe)){ie(()=>(!H||typeof F=="object"&&F instanceof se&&F.val?tn(T,D.slice(Pe.length),F):rn(T,D.slice(Pe.length)),T));continue}if(!D.startsWith("on")&&typeof F=="function"&&(F=Q(F)),typeof F=="object"&&F instanceof se){ie(()=>(!H||F.val?v(F.val,F._oldVal):T.removeAttribute(D),T));continue}H?ie(()=>(F.val?v(F):T.removeAttribute(D),T)):v(F)}return ce(T,M)}function pn(r,s){if(!s)return r.remove();if(s!==r)return r.replaceWith(s)}function hn(){let s=0,c=[...fe??[]].filter(p=>p.rawVal!==p._oldVal);do{pe=new Set;const p=new Set(c.flatMap(b=>b._listeners=_e(b._listeners)));for(const b of p)ln(b.func,b.state,b._dom),b._dom=void 0}while(++s<100&&(c=[...pe??[]]).length>0);const a=[...fe??[]].filter(p=>p.rawVal!==p._oldVal);fe=void 0;for(const p of new Set(a.flatMap(b=>b._bindings=_e(b._bindings))))pn(p._dom,ie(p.func,p._dom)),p._dom=void 0;for(const p of a)p._oldVal=p.rawVal}function Fe(r){return{get:(s,c)=>fn.bind(void 0,r,c)}}function Xe({class:r,...s},...c){const a=K(r);return h.span({class:()=>`badge flex items-center gap-1 select-none ${a.val}`,...s},c)}function ae({class:r,...s},...c){const a=K(r);return h.button({tabIndex:0,class:()=>`button flex items-center gap-2 select-none ${a.val}`,...s},c)}function mn({icon:r,class:s,...c},...a){const p=K(s);return h.div({class:()=>`flex items-center control variant-soft-outline text-swatch-700-mood gap-2 ${p.val}`,...c},h.i({class:"text-mood-500"},r),a)}function Ie({value:r=L(!1),required:s,class:c,...a},...p){const b=K(c);return h.div({name:"Checkbox",onclick:()=>r.val=!r.val,"$data-selected":r,class:()=>{var z;return`flex cursor-pointer justify-between items-center gap-2 select-none group ${(z=b.val)==null?void 0:z.split(" ").filter(M=>!M.includes("variant")).join(" ")}`},...a},p,ae({role:"checkbox",type:"button",tabIndex:0,class:()=>{var z;return`button size-5 !rounded-md aspect-square focus-visible:mood-accent !p-0.5 group-has-invalid:mood-critical ${(z=b.val)==null?void 0:z.split(" ").filter(M=>M.includes("variant")).join(" ")}`}},te.svg({viewBox:"0 0 100 100",class:"size-4 not-group-data-selected:hidden",style:"stroke-linecap:round; stroke-linejoin:round;"},te.path({d:"M20,60L40,80L80,20",class:"stroke-current stroke-[10] fill-none"}))),h.input({type:"checkbox",checked:r,required:s,hidden:!0}))}function gn({progress:r=50,indefinite:s=!1,class:c,...a},...p){const b=K(c),z=K(r),M=K(s);return h.div({name:"Circular Progress Bar",style:"--progress-bar-stroke-width: 2px",class:()=>`group inline-block relative min-w-[1em] min-h-[1em] rounded-full [.variant-outline]:ring-[length:var(--progress-bar-stroke-width)] [.variant-soft-outline]:ring-[length:var(--progress-bar-stroke-width)] !p-0 ${b.val}`,...a},te.svg({style:"padding: calc(var(--progress-bar-stroke-width) * 0.5)",class:"absolute inset-0 -rotate-90",viewBox:"0 0 36 36"},te.circle({style:()=>`cx: 50%; cy: 50%; r: 50%; stroke-dasharray: calc(1% * pi * ${z.val}) calc(1% * pi * (100 - ${z.val}));`,class:()=>`origin-center fill-none stroke-current stroke-[length:var(--progress-bar-stroke-width)] not-group-[.variant-filled]:text-mood-500 ${M.val?"animate-spin":""}`,"stroke-linecap":"round"})),h.span({class:"relative text-xs text-center m-[calc(2_*_var(--progress-bar-stroke-width))] aspect-square flex items-center justify-center h-full"},p))}function N({language:r,class:s,...c},...a){const p=K(s),b=h.pre({class:p.val,...c},h.code({class:`language-${r}`},a));return Prism.highlightAllUnder(b),b}function vn({class:r,...s},...c){const a=K(r);return h.form({class:()=>`flex flex-col gap-4 ${a.val}`,...s},c)}const Se=(r,...s)=>h.i(r,s);function be({value:r=L(void 0),type:s=r.rawVal!==void 0?typeof r.rawVal:"text",placeholder:c=`Enter ${s}...`,required:a=!1,lead:p,trail:b,onValueChanged:z,onValidityChanged:M,class:T,...I},...D){const F=K(T),H=m=>{var v;const y=(v=m.target)==null?void 0:v.value;typeof r.val=="number"&&Number(y)?r.val=Number(y):typeof r.val=="string"&&(r.val=y),z==null||z(r.rawVal),M==null||M(_.checkValidity())},_=h.input({class:"input flex-1",type:s,value:()=>r.val??"",oninput:H,placeholder:c,required:a});return h.div({name:"Text Input",class:()=>`control flex p-0 *:first:pl-2 *:last:pr-2 gap-2 *:py-1 has-focus-visible:mood-accent  has-invalid:has-invalid:mood-critical ${F.val}`,...I},()=>["boolean","string","number","bigint"].includes(typeof p)?h.span(p):p,_,D,()=>["boolean","string","number","bigint"].includes(typeof b)?h.span(b):b)}function V({content:r,class:s,...c},...a){const p=K(s);return h.div({name:"Label",class:()=>`flex flex-col gap-1 ${p.val}`},h.label({class:"flex items-center text-mini text-swatch-700-mood",...c},r),a)}function _n(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ge={exports:{}},bn=ge.exports,qe;function wn(){return qe||(qe=1,function(r){(function(){function s(e){var t={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",type:"string"},rawPrefixHeaderId:{defaultValue:!1,describe:'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',type:"boolean"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},rawHeaderId:{defaultValue:!1,describe:`Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,describe:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,describe:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,describe:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,describe:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,describe:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",describe:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,describe:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,describe:"Open all links in new windows",type:"boolean"},backslashEscapesHTMLTags:{defaultValue:!1,describe:"Support for HTML Tag escaping. ex: <div>foo</div>",type:"boolean"},emoji:{defaultValue:!1,describe:"Enable emoji support. Ex: `this is a :smile: emoji`",type:"boolean"},underline:{defaultValue:!1,describe:"Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",type:"boolean"},ellipsis:{defaultValue:!0,describe:"Replaces three dots with the ellipsis unicode character",type:"boolean"},completeHTMLDocument:{defaultValue:!1,describe:"Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",type:"boolean"},metadata:{defaultValue:!1,describe:"Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",type:"boolean"},splitAdjacentBlockquotes:{defaultValue:!1,describe:"Split adjacent blockquote blocks",type:"boolean"}};if(e===!1)return JSON.parse(JSON.stringify(t));var n={};for(var d in t)t.hasOwnProperty(d)&&(n[d]=t[d].defaultValue);return n}function c(){var e=s(!0),t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=!0);return t}var a={},p={},b={},z=s(!0),M="vanilla",T={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0,backslashEscapesHTMLTags:!0,emoji:!0,splitAdjacentBlockquotes:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:s(!0),allOn:c()};a.helper={},a.extensions={},a.setOption=function(e,t){return z[e]=t,this},a.getOption=function(e){return z[e]},a.getOptions=function(){return z},a.resetOptions=function(){z=s(!0)},a.setFlavor=function(e){if(!T.hasOwnProperty(e))throw Error(e+" flavor was not found");a.resetOptions();var t=T[e];M=e;for(var n in t)t.hasOwnProperty(n)&&(z[n]=t[n])},a.getFlavor=function(){return M},a.getFlavorOptions=function(e){if(T.hasOwnProperty(e))return T[e]},a.getDefaultOptions=function(e){return s(e)},a.subParser=function(e,t){if(a.helper.isString(e))if(typeof t<"u")p[e]=t;else{if(p.hasOwnProperty(e))return p[e];throw Error("SubParser named "+e+" not registered!")}},a.extension=function(e,t){if(!a.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=a.helper.stdExtName(e),a.helper.isUndefined(t)){if(!b.hasOwnProperty(e))throw Error("Extension named "+e+" is not registered!");return b[e]}else{typeof t=="function"&&(t=t()),a.helper.isArray(t)||(t=[t]);var n=I(t,e);if(n.valid)b[e]=t;else throw Error(n.error)}},a.getAllExtensions=function(){return b},a.removeExtension=function(e){delete b[e]},a.resetExtensions=function(){b={}};function I(e,t){var n=t?"Error in "+t+" extension->":"Error in unnamed extension",d={valid:!0,error:""};a.helper.isArray(e)||(e=[e]);for(var i=0;i<e.length;++i){var l=n+" sub-extension "+i+": ",o=e[i];if(typeof o!="object")return d.valid=!1,d.error=l+"must be an object, but "+typeof o+" given",d;if(!a.helper.isString(o.type))return d.valid=!1,d.error=l+'property "type" must be a string, but '+typeof o.type+" given",d;var f=o.type=o.type.toLowerCase();if(f==="language"&&(f=o.type="lang"),f==="html"&&(f=o.type="output"),f!=="lang"&&f!=="output"&&f!=="listener")return d.valid=!1,d.error=l+"type "+f+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',d;if(f==="listener"){if(a.helper.isUndefined(o.listeners))return d.valid=!1,d.error=l+'. Extensions of type "listener" must have a property called "listeners"',d}else if(a.helper.isUndefined(o.filter)&&a.helper.isUndefined(o.regex))return d.valid=!1,d.error=l+f+' extensions must define either a "regex" property or a "filter" method',d;if(o.listeners){if(typeof o.listeners!="object")return d.valid=!1,d.error=l+'"listeners" property must be an object but '+typeof o.listeners+" given",d;for(var S in o.listeners)if(o.listeners.hasOwnProperty(S)&&typeof o.listeners[S]!="function")return d.valid=!1,d.error=l+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+S+" must be a function but "+typeof o.listeners[S]+" given",d}if(o.filter){if(typeof o.filter!="function")return d.valid=!1,d.error=l+'"filter" must be a function, but '+typeof o.filter+" given",d}else if(o.regex){if(a.helper.isString(o.regex)&&(o.regex=new RegExp(o.regex,"g")),!(o.regex instanceof RegExp))return d.valid=!1,d.error=l+'"regex" property must either be a string or a RegExp object, but '+typeof o.regex+" given",d;if(a.helper.isUndefined(o.replace))return d.valid=!1,d.error=l+'"regex" extensions must implement a replace string or function',d}}return d}a.validateExtension=function(e){var t=I(e,null);return t.valid?!0:(console.warn(t.error),!1)},a.hasOwnProperty("helper")||(a.helper={}),a.helper.isString=function(e){return typeof e=="string"||e instanceof String},a.helper.isFunction=function(e){var t={};return e&&t.toString.call(e)==="[object Function]"},a.helper.isArray=function(e){return Array.isArray(e)},a.helper.isUndefined=function(e){return typeof e>"u"},a.helper.forEach=function(e,t){if(a.helper.isUndefined(e))throw new Error("obj param is required");if(a.helper.isUndefined(t))throw new Error("callback param is required");if(!a.helper.isFunction(t))throw new Error("callback param must be a function/closure");if(typeof e.forEach=="function")e.forEach(t);else if(a.helper.isArray(e))for(var n=0;n<e.length;n++)t(e[n],n,e);else if(typeof e=="object")for(var d in e)e.hasOwnProperty(d)&&t(e[d],d,e);else throw new Error("obj does not seem to be an array or an iterable object")},a.helper.stdExtName=function(e){return e.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()};function D(e,t){var n=t.charCodeAt(0);return"¨E"+n+"E"}a.helper.escapeCharactersCallback=D,a.helper.escapeCharacters=function(e,t,n){var d="(["+t.replace(/([\[\]\\])/g,"\\$1")+"])";n&&(d="\\\\"+d);var i=new RegExp(d,"g");return e=e.replace(i,D),e},a.helper.unescapeHTMLEntities=function(e){return e.replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")};var F=function(e,t,n,d){var i=d||"",l=i.indexOf("g")>-1,o=new RegExp(t+"|"+n,"g"+i.replace(/g/g,"")),f=new RegExp(t,i.replace(/g/g,"")),S=[],k,w,P,u,g;do for(k=0;P=o.exec(e);)if(f.test(P[0]))k++||(w=o.lastIndex,u=w-P[0].length);else if(k&&!--k){g=P.index+P[0].length;var j={left:{start:u,end:w},match:{start:w,end:P.index},right:{start:P.index,end:g},wholeMatch:{start:u,end:g}};if(S.push(j),!l)return S}while(k&&(o.lastIndex=w));return S};a.helper.matchRecursiveRegExp=function(e,t,n,d){for(var i=F(e,t,n,d),l=[],o=0;o<i.length;++o)l.push([e.slice(i[o].wholeMatch.start,i[o].wholeMatch.end),e.slice(i[o].match.start,i[o].match.end),e.slice(i[o].left.start,i[o].left.end),e.slice(i[o].right.start,i[o].right.end)]);return l},a.helper.replaceRecursiveRegExp=function(e,t,n,d,i){if(!a.helper.isFunction(t)){var l=t;t=function(){return l}}var o=F(e,n,d,i),f=e,S=o.length;if(S>0){var k=[];o[0].wholeMatch.start!==0&&k.push(e.slice(0,o[0].wholeMatch.start));for(var w=0;w<S;++w)k.push(t(e.slice(o[w].wholeMatch.start,o[w].wholeMatch.end),e.slice(o[w].match.start,o[w].match.end),e.slice(o[w].left.start,o[w].left.end),e.slice(o[w].right.start,o[w].right.end))),w<S-1&&k.push(e.slice(o[w].wholeMatch.end,o[w+1].wholeMatch.start));o[S-1].wholeMatch.end<e.length&&k.push(e.slice(o[S-1].wholeMatch.end)),f=k.join("")}return f},a.helper.regexIndexOf=function(e,t,n){if(!a.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(!(t instanceof RegExp))throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";var d=e.substring(n||0).search(t);return d>=0?d+(n||0):d},a.helper.splitAtIndex=function(e,t){if(!a.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";return[e.substring(0,t),e.substring(t)]},a.helper.encodeEmailAddress=function(e){var t=[function(n){return"&#"+n.charCodeAt(0)+";"},function(n){return"&#x"+n.charCodeAt(0).toString(16)+";"},function(n){return n}];return e=e.replace(/./g,function(n){if(n==="@")n=t[Math.floor(Math.random()*2)](n);else{var d=Math.random();n=d>.9?t[2](n):d>.45?t[1](n):t[0](n)}return n}),e},a.helper.padEnd=function(t,n,d){return n=n>>0,d=String(d||" "),t.length>n?String(t):(n=n-t.length,n>d.length&&(d+=d.repeat(n/d.length)),String(t)+d.slice(0,n))},typeof console>"u"&&(console={warn:function(e){alert(e)},log:function(e){alert(e)},error:function(e){throw e}}),a.helper.regexes={asteriskDashAndColon:/([*_:~])/g},a.helper.emojis={"+1":"👍","-1":"👎",100:"💯",1234:"🔢","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉","8ball":"🎱",a:"🅰️",ab:"🆎",abc:"🔤",abcd:"🔡",accept:"🉑",aerial_tramway:"🚡",airplane:"✈️",alarm_clock:"⏰",alembic:"⚗️",alien:"👽",ambulance:"🚑",amphora:"🏺",anchor:"⚓️",angel:"👼",anger:"💢",angry:"😠",anguished:"😧",ant:"🐜",apple:"🍎",aquarius:"♒️",aries:"♈️",arrow_backward:"◀️",arrow_double_down:"⏬",arrow_double_up:"⏫",arrow_down:"⬇️",arrow_down_small:"🔽",arrow_forward:"▶️",arrow_heading_down:"⤵️",arrow_heading_up:"⤴️",arrow_left:"⬅️",arrow_lower_left:"↙️",arrow_lower_right:"↘️",arrow_right:"➡️",arrow_right_hook:"↪️",arrow_up:"⬆️",arrow_up_down:"↕️",arrow_up_small:"🔼",arrow_upper_left:"↖️",arrow_upper_right:"↗️",arrows_clockwise:"🔃",arrows_counterclockwise:"🔄",art:"🎨",articulated_lorry:"🚛",artificial_satellite:"🛰",astonished:"😲",athletic_shoe:"👟",atm:"🏧",atom_symbol:"⚛️",avocado:"🥑",b:"🅱️",baby:"👶",baby_bottle:"🍼",baby_chick:"🐤",baby_symbol:"🚼",back:"🔙",bacon:"🥓",badminton:"🏸",baggage_claim:"🛄",baguette_bread:"🥖",balance_scale:"⚖️",balloon:"🎈",ballot_box:"🗳",ballot_box_with_check:"☑️",bamboo:"🎍",banana:"🍌",bangbang:"‼️",bank:"🏦",bar_chart:"📊",barber:"💈",baseball:"⚾️",basketball:"🏀",basketball_man:"⛹️",basketball_woman:"⛹️&zwj;♀️",bat:"🦇",bath:"🛀",bathtub:"🛁",battery:"🔋",beach_umbrella:"🏖",bear:"🐻",bed:"🛏",bee:"🐝",beer:"🍺",beers:"🍻",beetle:"🐞",beginner:"🔰",bell:"🔔",bellhop_bell:"🛎",bento:"🍱",biking_man:"🚴",bike:"🚲",biking_woman:"🚴&zwj;♀️",bikini:"👙",biohazard:"☣️",bird:"🐦",birthday:"🎂",black_circle:"⚫️",black_flag:"🏴",black_heart:"🖤",black_joker:"🃏",black_large_square:"⬛️",black_medium_small_square:"◾️",black_medium_square:"◼️",black_nib:"✒️",black_small_square:"▪️",black_square_button:"🔲",blonde_man:"👱",blonde_woman:"👱&zwj;♀️",blossom:"🌼",blowfish:"🐡",blue_book:"📘",blue_car:"🚙",blue_heart:"💙",blush:"😊",boar:"🐗",boat:"⛵️",bomb:"💣",book:"📖",bookmark:"🔖",bookmark_tabs:"📑",books:"📚",boom:"💥",boot:"👢",bouquet:"💐",bowing_man:"🙇",bow_and_arrow:"🏹",bowing_woman:"🙇&zwj;♀️",bowling:"🎳",boxing_glove:"🥊",boy:"👦",bread:"🍞",bride_with_veil:"👰",bridge_at_night:"🌉",briefcase:"💼",broken_heart:"💔",bug:"🐛",building_construction:"🏗",bulb:"💡",bullettrain_front:"🚅",bullettrain_side:"🚄",burrito:"🌯",bus:"🚌",business_suit_levitating:"🕴",busstop:"🚏",bust_in_silhouette:"👤",busts_in_silhouette:"👥",butterfly:"🦋",cactus:"🌵",cake:"🍰",calendar:"📆",call_me_hand:"🤙",calling:"📲",camel:"🐫",camera:"📷",camera_flash:"📸",camping:"🏕",cancer:"♋️",candle:"🕯",candy:"🍬",canoe:"🛶",capital_abcd:"🔠",capricorn:"♑️",car:"🚗",card_file_box:"🗃",card_index:"📇",card_index_dividers:"🗂",carousel_horse:"🎠",carrot:"🥕",cat:"🐱",cat2:"🐈",cd:"💿",chains:"⛓",champagne:"🍾",chart:"💹",chart_with_downwards_trend:"📉",chart_with_upwards_trend:"📈",checkered_flag:"🏁",cheese:"🧀",cherries:"🍒",cherry_blossom:"🌸",chestnut:"🌰",chicken:"🐔",children_crossing:"🚸",chipmunk:"🐿",chocolate_bar:"🍫",christmas_tree:"🎄",church:"⛪️",cinema:"🎦",circus_tent:"🎪",city_sunrise:"🌇",city_sunset:"🌆",cityscape:"🏙",cl:"🆑",clamp:"🗜",clap:"👏",clapper:"🎬",classical_building:"🏛",clinking_glasses:"🥂",clipboard:"📋",clock1:"🕐",clock10:"🕙",clock1030:"🕥",clock11:"🕚",clock1130:"🕦",clock12:"🕛",clock1230:"🕧",clock130:"🕜",clock2:"🕑",clock230:"🕝",clock3:"🕒",clock330:"🕞",clock4:"🕓",clock430:"🕟",clock5:"🕔",clock530:"🕠",clock6:"🕕",clock630:"🕡",clock7:"🕖",clock730:"🕢",clock8:"🕗",clock830:"🕣",clock9:"🕘",clock930:"🕤",closed_book:"📕",closed_lock_with_key:"🔐",closed_umbrella:"🌂",cloud:"☁️",cloud_with_lightning:"🌩",cloud_with_lightning_and_rain:"⛈",cloud_with_rain:"🌧",cloud_with_snow:"🌨",clown_face:"🤡",clubs:"♣️",cocktail:"🍸",coffee:"☕️",coffin:"⚰️",cold_sweat:"😰",comet:"☄️",computer:"💻",computer_mouse:"🖱",confetti_ball:"🎊",confounded:"😖",confused:"😕",congratulations:"㊗️",construction:"🚧",construction_worker_man:"👷",construction_worker_woman:"👷&zwj;♀️",control_knobs:"🎛",convenience_store:"🏪",cookie:"🍪",cool:"🆒",policeman:"👮",copyright:"©️",corn:"🌽",couch_and_lamp:"🛋",couple:"👫",couple_with_heart_woman_man:"💑",couple_with_heart_man_man:"👨&zwj;❤️&zwj;👨",couple_with_heart_woman_woman:"👩&zwj;❤️&zwj;👩",couplekiss_man_man:"👨&zwj;❤️&zwj;💋&zwj;👨",couplekiss_man_woman:"💏",couplekiss_woman_woman:"👩&zwj;❤️&zwj;💋&zwj;👩",cow:"🐮",cow2:"🐄",cowboy_hat_face:"🤠",crab:"🦀",crayon:"🖍",credit_card:"💳",crescent_moon:"🌙",cricket:"🏏",crocodile:"🐊",croissant:"🥐",crossed_fingers:"🤞",crossed_flags:"🎌",crossed_swords:"⚔️",crown:"👑",cry:"😢",crying_cat_face:"😿",crystal_ball:"🔮",cucumber:"🥒",cupid:"💘",curly_loop:"➰",currency_exchange:"💱",curry:"🍛",custard:"🍮",customs:"🛃",cyclone:"🌀",dagger:"🗡",dancer:"💃",dancing_women:"👯",dancing_men:"👯&zwj;♂️",dango:"🍡",dark_sunglasses:"🕶",dart:"🎯",dash:"💨",date:"📅",deciduous_tree:"🌳",deer:"🦌",department_store:"🏬",derelict_house:"🏚",desert:"🏜",desert_island:"🏝",desktop_computer:"🖥",male_detective:"🕵️",diamond_shape_with_a_dot_inside:"💠",diamonds:"♦️",disappointed:"😞",disappointed_relieved:"😥",dizzy:"💫",dizzy_face:"😵",do_not_litter:"🚯",dog:"🐶",dog2:"🐕",dollar:"💵",dolls:"🎎",dolphin:"🐬",door:"🚪",doughnut:"🍩",dove:"🕊",dragon:"🐉",dragon_face:"🐲",dress:"👗",dromedary_camel:"🐪",drooling_face:"🤤",droplet:"💧",drum:"🥁",duck:"🦆",dvd:"📀","e-mail":"📧",eagle:"🦅",ear:"👂",ear_of_rice:"🌾",earth_africa:"🌍",earth_americas:"🌎",earth_asia:"🌏",egg:"🥚",eggplant:"🍆",eight_pointed_black_star:"✴️",eight_spoked_asterisk:"✳️",electric_plug:"🔌",elephant:"🐘",email:"✉️",end:"🔚",envelope_with_arrow:"📩",euro:"💶",european_castle:"🏰",european_post_office:"🏤",evergreen_tree:"🌲",exclamation:"❗️",expressionless:"😑",eye:"👁",eye_speech_bubble:"👁&zwj;🗨",eyeglasses:"👓",eyes:"👀",face_with_head_bandage:"🤕",face_with_thermometer:"🤒",fist_oncoming:"👊",factory:"🏭",fallen_leaf:"🍂",family_man_woman_boy:"👪",family_man_boy:"👨&zwj;👦",family_man_boy_boy:"👨&zwj;👦&zwj;👦",family_man_girl:"👨&zwj;👧",family_man_girl_boy:"👨&zwj;👧&zwj;👦",family_man_girl_girl:"👨&zwj;👧&zwj;👧",family_man_man_boy:"👨&zwj;👨&zwj;👦",family_man_man_boy_boy:"👨&zwj;👨&zwj;👦&zwj;👦",family_man_man_girl:"👨&zwj;👨&zwj;👧",family_man_man_girl_boy:"👨&zwj;👨&zwj;👧&zwj;👦",family_man_man_girl_girl:"👨&zwj;👨&zwj;👧&zwj;👧",family_man_woman_boy_boy:"👨&zwj;👩&zwj;👦&zwj;👦",family_man_woman_girl:"👨&zwj;👩&zwj;👧",family_man_woman_girl_boy:"👨&zwj;👩&zwj;👧&zwj;👦",family_man_woman_girl_girl:"👨&zwj;👩&zwj;👧&zwj;👧",family_woman_boy:"👩&zwj;👦",family_woman_boy_boy:"👩&zwj;👦&zwj;👦",family_woman_girl:"👩&zwj;👧",family_woman_girl_boy:"👩&zwj;👧&zwj;👦",family_woman_girl_girl:"👩&zwj;👧&zwj;👧",family_woman_woman_boy:"👩&zwj;👩&zwj;👦",family_woman_woman_boy_boy:"👩&zwj;👩&zwj;👦&zwj;👦",family_woman_woman_girl:"👩&zwj;👩&zwj;👧",family_woman_woman_girl_boy:"👩&zwj;👩&zwj;👧&zwj;👦",family_woman_woman_girl_girl:"👩&zwj;👩&zwj;👧&zwj;👧",fast_forward:"⏩",fax:"📠",fearful:"😨",feet:"🐾",female_detective:"🕵️&zwj;♀️",ferris_wheel:"🎡",ferry:"⛴",field_hockey:"🏑",file_cabinet:"🗄",file_folder:"📁",film_projector:"📽",film_strip:"🎞",fire:"🔥",fire_engine:"🚒",fireworks:"🎆",first_quarter_moon:"🌓",first_quarter_moon_with_face:"🌛",fish:"🐟",fish_cake:"🍥",fishing_pole_and_fish:"🎣",fist_raised:"✊",fist_left:"🤛",fist_right:"🤜",flags:"🎏",flashlight:"🔦",fleur_de_lis:"⚜️",flight_arrival:"🛬",flight_departure:"🛫",floppy_disk:"💾",flower_playing_cards:"🎴",flushed:"😳",fog:"🌫",foggy:"🌁",football:"🏈",footprints:"👣",fork_and_knife:"🍴",fountain:"⛲️",fountain_pen:"🖋",four_leaf_clover:"🍀",fox_face:"🦊",framed_picture:"🖼",free:"🆓",fried_egg:"🍳",fried_shrimp:"🍤",fries:"🍟",frog:"🐸",frowning:"😦",frowning_face:"☹️",frowning_man:"🙍&zwj;♂️",frowning_woman:"🙍",middle_finger:"🖕",fuelpump:"⛽️",full_moon:"🌕",full_moon_with_face:"🌝",funeral_urn:"⚱️",game_die:"🎲",gear:"⚙️",gem:"💎",gemini:"♊️",ghost:"👻",gift:"🎁",gift_heart:"💝",girl:"👧",globe_with_meridians:"🌐",goal_net:"🥅",goat:"🐐",golf:"⛳️",golfing_man:"🏌️",golfing_woman:"🏌️&zwj;♀️",gorilla:"🦍",grapes:"🍇",green_apple:"🍏",green_book:"📗",green_heart:"💚",green_salad:"🥗",grey_exclamation:"❕",grey_question:"❔",grimacing:"😬",grin:"😁",grinning:"😀",guardsman:"💂",guardswoman:"💂&zwj;♀️",guitar:"🎸",gun:"🔫",haircut_woman:"💇",haircut_man:"💇&zwj;♂️",hamburger:"🍔",hammer:"🔨",hammer_and_pick:"⚒",hammer_and_wrench:"🛠",hamster:"🐹",hand:"✋",handbag:"👜",handshake:"🤝",hankey:"💩",hatched_chick:"🐥",hatching_chick:"🐣",headphones:"🎧",hear_no_evil:"🙉",heart:"❤️",heart_decoration:"💟",heart_eyes:"😍",heart_eyes_cat:"😻",heartbeat:"💓",heartpulse:"💗",hearts:"♥️",heavy_check_mark:"✔️",heavy_division_sign:"➗",heavy_dollar_sign:"💲",heavy_heart_exclamation:"❣️",heavy_minus_sign:"➖",heavy_multiplication_x:"✖️",heavy_plus_sign:"➕",helicopter:"🚁",herb:"🌿",hibiscus:"🌺",high_brightness:"🔆",high_heel:"👠",hocho:"🔪",hole:"🕳",honey_pot:"🍯",horse:"🐴",horse_racing:"🏇",hospital:"🏥",hot_pepper:"🌶",hotdog:"🌭",hotel:"🏨",hotsprings:"♨️",hourglass:"⌛️",hourglass_flowing_sand:"⏳",house:"🏠",house_with_garden:"🏡",houses:"🏘",hugs:"🤗",hushed:"😯",ice_cream:"🍨",ice_hockey:"🏒",ice_skate:"⛸",icecream:"🍦",id:"🆔",ideograph_advantage:"🉐",imp:"👿",inbox_tray:"📥",incoming_envelope:"📨",tipping_hand_woman:"💁",information_source:"ℹ️",innocent:"😇",interrobang:"⁉️",iphone:"📱",izakaya_lantern:"🏮",jack_o_lantern:"🎃",japan:"🗾",japanese_castle:"🏯",japanese_goblin:"👺",japanese_ogre:"👹",jeans:"👖",joy:"😂",joy_cat:"😹",joystick:"🕹",kaaba:"🕋",key:"🔑",keyboard:"⌨️",keycap_ten:"🔟",kick_scooter:"🛴",kimono:"👘",kiss:"💋",kissing:"😗",kissing_cat:"😽",kissing_closed_eyes:"😚",kissing_heart:"😘",kissing_smiling_eyes:"😙",kiwi_fruit:"🥝",koala:"🐨",koko:"🈁",label:"🏷",large_blue_circle:"🔵",large_blue_diamond:"🔷",large_orange_diamond:"🔶",last_quarter_moon:"🌗",last_quarter_moon_with_face:"🌜",latin_cross:"✝️",laughing:"😆",leaves:"🍃",ledger:"📒",left_luggage:"🛅",left_right_arrow:"↔️",leftwards_arrow_with_hook:"↩️",lemon:"🍋",leo:"♌️",leopard:"🐆",level_slider:"🎚",libra:"♎️",light_rail:"🚈",link:"🔗",lion:"🦁",lips:"👄",lipstick:"💄",lizard:"🦎",lock:"🔒",lock_with_ink_pen:"🔏",lollipop:"🍭",loop:"➿",loud_sound:"🔊",loudspeaker:"📢",love_hotel:"🏩",love_letter:"💌",low_brightness:"🔅",lying_face:"🤥",m:"Ⓜ️",mag:"🔍",mag_right:"🔎",mahjong:"🀄️",mailbox:"📫",mailbox_closed:"📪",mailbox_with_mail:"📬",mailbox_with_no_mail:"📭",man:"👨",man_artist:"👨&zwj;🎨",man_astronaut:"👨&zwj;🚀",man_cartwheeling:"🤸&zwj;♂️",man_cook:"👨&zwj;🍳",man_dancing:"🕺",man_facepalming:"🤦&zwj;♂️",man_factory_worker:"👨&zwj;🏭",man_farmer:"👨&zwj;🌾",man_firefighter:"👨&zwj;🚒",man_health_worker:"👨&zwj;⚕️",man_in_tuxedo:"🤵",man_judge:"👨&zwj;⚖️",man_juggling:"🤹&zwj;♂️",man_mechanic:"👨&zwj;🔧",man_office_worker:"👨&zwj;💼",man_pilot:"👨&zwj;✈️",man_playing_handball:"🤾&zwj;♂️",man_playing_water_polo:"🤽&zwj;♂️",man_scientist:"👨&zwj;🔬",man_shrugging:"🤷&zwj;♂️",man_singer:"👨&zwj;🎤",man_student:"👨&zwj;🎓",man_teacher:"👨&zwj;🏫",man_technologist:"👨&zwj;💻",man_with_gua_pi_mao:"👲",man_with_turban:"👳",tangerine:"🍊",mans_shoe:"👞",mantelpiece_clock:"🕰",maple_leaf:"🍁",martial_arts_uniform:"🥋",mask:"😷",massage_woman:"💆",massage_man:"💆&zwj;♂️",meat_on_bone:"🍖",medal_military:"🎖",medal_sports:"🏅",mega:"📣",melon:"🍈",memo:"📝",men_wrestling:"🤼&zwj;♂️",menorah:"🕎",mens:"🚹",metal:"🤘",metro:"🚇",microphone:"🎤",microscope:"🔬",milk_glass:"🥛",milky_way:"🌌",minibus:"🚐",minidisc:"💽",mobile_phone_off:"📴",money_mouth_face:"🤑",money_with_wings:"💸",moneybag:"💰",monkey:"🐒",monkey_face:"🐵",monorail:"🚝",moon:"🌔",mortar_board:"🎓",mosque:"🕌",motor_boat:"🛥",motor_scooter:"🛵",motorcycle:"🏍",motorway:"🛣",mount_fuji:"🗻",mountain:"⛰",mountain_biking_man:"🚵",mountain_biking_woman:"🚵&zwj;♀️",mountain_cableway:"🚠",mountain_railway:"🚞",mountain_snow:"🏔",mouse:"🐭",mouse2:"🐁",movie_camera:"🎥",moyai:"🗿",mrs_claus:"🤶",muscle:"💪",mushroom:"🍄",musical_keyboard:"🎹",musical_note:"🎵",musical_score:"🎼",mute:"🔇",nail_care:"💅",name_badge:"📛",national_park:"🏞",nauseated_face:"🤢",necktie:"👔",negative_squared_cross_mark:"❎",nerd_face:"🤓",neutral_face:"😐",new:"🆕",new_moon:"🌑",new_moon_with_face:"🌚",newspaper:"📰",newspaper_roll:"🗞",next_track_button:"⏭",ng:"🆖",no_good_man:"🙅&zwj;♂️",no_good_woman:"🙅",night_with_stars:"🌃",no_bell:"🔕",no_bicycles:"🚳",no_entry:"⛔️",no_entry_sign:"🚫",no_mobile_phones:"📵",no_mouth:"😶",no_pedestrians:"🚷",no_smoking:"🚭","non-potable_water":"🚱",nose:"👃",notebook:"📓",notebook_with_decorative_cover:"📔",notes:"🎶",nut_and_bolt:"🔩",o:"⭕️",o2:"🅾️",ocean:"🌊",octopus:"🐙",oden:"🍢",office:"🏢",oil_drum:"🛢",ok:"🆗",ok_hand:"👌",ok_man:"🙆&zwj;♂️",ok_woman:"🙆",old_key:"🗝",older_man:"👴",older_woman:"👵",om:"🕉",on:"🔛",oncoming_automobile:"🚘",oncoming_bus:"🚍",oncoming_police_car:"🚔",oncoming_taxi:"🚖",open_file_folder:"📂",open_hands:"👐",open_mouth:"😮",open_umbrella:"☂️",ophiuchus:"⛎",orange_book:"📙",orthodox_cross:"☦️",outbox_tray:"📤",owl:"🦉",ox:"🐂",package:"📦",page_facing_up:"📄",page_with_curl:"📃",pager:"📟",paintbrush:"🖌",palm_tree:"🌴",pancakes:"🥞",panda_face:"🐼",paperclip:"📎",paperclips:"🖇",parasol_on_ground:"⛱",parking:"🅿️",part_alternation_mark:"〽️",partly_sunny:"⛅️",passenger_ship:"🛳",passport_control:"🛂",pause_button:"⏸",peace_symbol:"☮️",peach:"🍑",peanuts:"🥜",pear:"🍐",pen:"🖊",pencil2:"✏️",penguin:"🐧",pensive:"😔",performing_arts:"🎭",persevere:"😣",person_fencing:"🤺",pouting_woman:"🙎",phone:"☎️",pick:"⛏",pig:"🐷",pig2:"🐖",pig_nose:"🐽",pill:"💊",pineapple:"🍍",ping_pong:"🏓",pisces:"♓️",pizza:"🍕",place_of_worship:"🛐",plate_with_cutlery:"🍽",play_or_pause_button:"⏯",point_down:"👇",point_left:"👈",point_right:"👉",point_up:"☝️",point_up_2:"👆",police_car:"🚓",policewoman:"👮&zwj;♀️",poodle:"🐩",popcorn:"🍿",post_office:"🏣",postal_horn:"📯",postbox:"📮",potable_water:"🚰",potato:"🥔",pouch:"👝",poultry_leg:"🍗",pound:"💷",rage:"😡",pouting_cat:"😾",pouting_man:"🙎&zwj;♂️",pray:"🙏",prayer_beads:"📿",pregnant_woman:"🤰",previous_track_button:"⏮",prince:"🤴",princess:"👸",printer:"🖨",purple_heart:"💜",purse:"👛",pushpin:"📌",put_litter_in_its_place:"🚮",question:"❓",rabbit:"🐰",rabbit2:"🐇",racehorse:"🐎",racing_car:"🏎",radio:"📻",radio_button:"🔘",radioactive:"☢️",railway_car:"🚃",railway_track:"🛤",rainbow:"🌈",rainbow_flag:"🏳️&zwj;🌈",raised_back_of_hand:"🤚",raised_hand_with_fingers_splayed:"🖐",raised_hands:"🙌",raising_hand_woman:"🙋",raising_hand_man:"🙋&zwj;♂️",ram:"🐏",ramen:"🍜",rat:"🐀",record_button:"⏺",recycle:"♻️",red_circle:"🔴",registered:"®️",relaxed:"☺️",relieved:"😌",reminder_ribbon:"🎗",repeat:"🔁",repeat_one:"🔂",rescue_worker_helmet:"⛑",restroom:"🚻",revolving_hearts:"💞",rewind:"⏪",rhinoceros:"🦏",ribbon:"🎀",rice:"🍚",rice_ball:"🍙",rice_cracker:"🍘",rice_scene:"🎑",right_anger_bubble:"🗯",ring:"💍",robot:"🤖",rocket:"🚀",rofl:"🤣",roll_eyes:"🙄",roller_coaster:"🎢",rooster:"🐓",rose:"🌹",rosette:"🏵",rotating_light:"🚨",round_pushpin:"📍",rowing_man:"🚣",rowing_woman:"🚣&zwj;♀️",rugby_football:"🏉",running_man:"🏃",running_shirt_with_sash:"🎽",running_woman:"🏃&zwj;♀️",sa:"🈂️",sagittarius:"♐️",sake:"🍶",sandal:"👡",santa:"🎅",satellite:"📡",saxophone:"🎷",school:"🏫",school_satchel:"🎒",scissors:"✂️",scorpion:"🦂",scorpius:"♏️",scream:"😱",scream_cat:"🙀",scroll:"📜",seat:"💺",secret:"㊙️",see_no_evil:"🙈",seedling:"🌱",selfie:"🤳",shallow_pan_of_food:"🥘",shamrock:"☘️",shark:"🦈",shaved_ice:"🍧",sheep:"🐑",shell:"🐚",shield:"🛡",shinto_shrine:"⛩",ship:"🚢",shirt:"👕",shopping:"🛍",shopping_cart:"🛒",shower:"🚿",shrimp:"🦐",signal_strength:"📶",six_pointed_star:"🔯",ski:"🎿",skier:"⛷",skull:"💀",skull_and_crossbones:"☠️",sleeping:"😴",sleeping_bed:"🛌",sleepy:"😪",slightly_frowning_face:"🙁",slightly_smiling_face:"🙂",slot_machine:"🎰",small_airplane:"🛩",small_blue_diamond:"🔹",small_orange_diamond:"🔸",small_red_triangle:"🔺",small_red_triangle_down:"🔻",smile:"😄",smile_cat:"😸",smiley:"😃",smiley_cat:"😺",smiling_imp:"😈",smirk:"😏",smirk_cat:"😼",smoking:"🚬",snail:"🐌",snake:"🐍",sneezing_face:"🤧",snowboarder:"🏂",snowflake:"❄️",snowman:"⛄️",snowman_with_snow:"☃️",sob:"😭",soccer:"⚽️",soon:"🔜",sos:"🆘",sound:"🔉",space_invader:"👾",spades:"♠️",spaghetti:"🍝",sparkle:"❇️",sparkler:"🎇",sparkles:"✨",sparkling_heart:"💖",speak_no_evil:"🙊",speaker:"🔈",speaking_head:"🗣",speech_balloon:"💬",speedboat:"🚤",spider:"🕷",spider_web:"🕸",spiral_calendar:"🗓",spiral_notepad:"🗒",spoon:"🥄",squid:"🦑",stadium:"🏟",star:"⭐️",star2:"🌟",star_and_crescent:"☪️",star_of_david:"✡️",stars:"🌠",station:"🚉",statue_of_liberty:"🗽",steam_locomotive:"🚂",stew:"🍲",stop_button:"⏹",stop_sign:"🛑",stopwatch:"⏱",straight_ruler:"📏",strawberry:"🍓",stuck_out_tongue:"😛",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue_winking_eye:"😜",studio_microphone:"🎙",stuffed_flatbread:"🥙",sun_behind_large_cloud:"🌥",sun_behind_rain_cloud:"🌦",sun_behind_small_cloud:"🌤",sun_with_face:"🌞",sunflower:"🌻",sunglasses:"😎",sunny:"☀️",sunrise:"🌅",sunrise_over_mountains:"🌄",surfing_man:"🏄",surfing_woman:"🏄&zwj;♀️",sushi:"🍣",suspension_railway:"🚟",sweat:"😓",sweat_drops:"💦",sweat_smile:"😅",sweet_potato:"🍠",swimming_man:"🏊",swimming_woman:"🏊&zwj;♀️",symbols:"🔣",synagogue:"🕍",syringe:"💉",taco:"🌮",tada:"🎉",tanabata_tree:"🎋",taurus:"♉️",taxi:"🚕",tea:"🍵",telephone_receiver:"📞",telescope:"🔭",tennis:"🎾",tent:"⛺️",thermometer:"🌡",thinking:"🤔",thought_balloon:"💭",ticket:"🎫",tickets:"🎟",tiger:"🐯",tiger2:"🐅",timer_clock:"⏲",tipping_hand_man:"💁&zwj;♂️",tired_face:"😫",tm:"™️",toilet:"🚽",tokyo_tower:"🗼",tomato:"🍅",tongue:"👅",top:"🔝",tophat:"🎩",tornado:"🌪",trackball:"🖲",tractor:"🚜",traffic_light:"🚥",train:"🚋",train2:"🚆",tram:"🚊",triangular_flag_on_post:"🚩",triangular_ruler:"📐",trident:"🔱",triumph:"😤",trolleybus:"🚎",trophy:"🏆",tropical_drink:"🍹",tropical_fish:"🐠",truck:"🚚",trumpet:"🎺",tulip:"🌷",tumbler_glass:"🥃",turkey:"🦃",turtle:"🐢",tv:"📺",twisted_rightwards_arrows:"🔀",two_hearts:"💕",two_men_holding_hands:"👬",two_women_holding_hands:"👭",u5272:"🈹",u5408:"🈴",u55b6:"🈺",u6307:"🈯️",u6708:"🈷️",u6709:"🈶",u6e80:"🈵",u7121:"🈚️",u7533:"🈸",u7981:"🈲",u7a7a:"🈳",umbrella:"☔️",unamused:"😒",underage:"🔞",unicorn:"🦄",unlock:"🔓",up:"🆙",upside_down_face:"🙃",v:"✌️",vertical_traffic_light:"🚦",vhs:"📼",vibration_mode:"📳",video_camera:"📹",video_game:"🎮",violin:"🎻",virgo:"♍️",volcano:"🌋",volleyball:"🏐",vs:"🆚",vulcan_salute:"🖖",walking_man:"🚶",walking_woman:"🚶&zwj;♀️",waning_crescent_moon:"🌘",waning_gibbous_moon:"🌖",warning:"⚠️",wastebasket:"🗑",watch:"⌚️",water_buffalo:"🐃",watermelon:"🍉",wave:"👋",wavy_dash:"〰️",waxing_crescent_moon:"🌒",wc:"🚾",weary:"😩",wedding:"💒",weight_lifting_man:"🏋️",weight_lifting_woman:"🏋️&zwj;♀️",whale:"🐳",whale2:"🐋",wheel_of_dharma:"☸️",wheelchair:"♿️",white_check_mark:"✅",white_circle:"⚪️",white_flag:"🏳️",white_flower:"💮",white_large_square:"⬜️",white_medium_small_square:"◽️",white_medium_square:"◻️",white_small_square:"▫️",white_square_button:"🔳",wilted_flower:"🥀",wind_chime:"🎐",wind_face:"🌬",wine_glass:"🍷",wink:"😉",wolf:"🐺",woman:"👩",woman_artist:"👩&zwj;🎨",woman_astronaut:"👩&zwj;🚀",woman_cartwheeling:"🤸&zwj;♀️",woman_cook:"👩&zwj;🍳",woman_facepalming:"🤦&zwj;♀️",woman_factory_worker:"👩&zwj;🏭",woman_farmer:"👩&zwj;🌾",woman_firefighter:"👩&zwj;🚒",woman_health_worker:"👩&zwj;⚕️",woman_judge:"👩&zwj;⚖️",woman_juggling:"🤹&zwj;♀️",woman_mechanic:"👩&zwj;🔧",woman_office_worker:"👩&zwj;💼",woman_pilot:"👩&zwj;✈️",woman_playing_handball:"🤾&zwj;♀️",woman_playing_water_polo:"🤽&zwj;♀️",woman_scientist:"👩&zwj;🔬",woman_shrugging:"🤷&zwj;♀️",woman_singer:"👩&zwj;🎤",woman_student:"👩&zwj;🎓",woman_teacher:"👩&zwj;🏫",woman_technologist:"👩&zwj;💻",woman_with_turban:"👳&zwj;♀️",womans_clothes:"👚",womans_hat:"👒",women_wrestling:"🤼&zwj;♀️",womens:"🚺",world_map:"🗺",worried:"😟",wrench:"🔧",writing_hand:"✍️",x:"❌",yellow_heart:"💛",yen:"💴",yin_yang:"☯️",yum:"😋",zap:"⚡️",zipper_mouth_face:"🤐",zzz:"💤",octocat:'<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',showdown:`<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`},a.Converter=function(e){var t={},n=[],d=[],i={},l=M,o={parsed:{},raw:"",format:""};f();function f(){e=e||{};for(var u in z)z.hasOwnProperty(u)&&(t[u]=z[u]);if(typeof e=="object")for(var g in e)e.hasOwnProperty(g)&&(t[g]=e[g]);else throw Error("Converter expects the passed parameter to be an object, but "+typeof e+" was passed instead.");t.extensions&&a.helper.forEach(t.extensions,S)}function S(u,g){if(g=g||null,a.helper.isString(u))if(u=a.helper.stdExtName(u),g=u,a.extensions[u]){console.warn("DEPRECATION WARNING: "+u+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),k(a.extensions[u],u);return}else if(!a.helper.isUndefined(b[u]))u=b[u];else throw Error('Extension "'+u+'" could not be loaded. It was either not found or is not a valid extension.');typeof u=="function"&&(u=u()),a.helper.isArray(u)||(u=[u]);var j=I(u,g);if(!j.valid)throw Error(j.error);for(var E=0;E<u.length;++E){switch(u[E].type){case"lang":n.push(u[E]);break;case"output":d.push(u[E]);break}if(u[E].hasOwnProperty("listeners"))for(var R in u[E].listeners)u[E].listeners.hasOwnProperty(R)&&w(R,u[E].listeners[R])}}function k(u,g){typeof u=="function"&&(u=u(new a.Converter)),a.helper.isArray(u)||(u=[u]);var j=I(u,g);if(!j.valid)throw Error(j.error);for(var E=0;E<u.length;++E)switch(u[E].type){case"lang":n.push(u[E]);break;case"output":d.push(u[E]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function w(u,g){if(!a.helper.isString(u))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof u+" given");if(typeof g!="function")throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof g+" given");i.hasOwnProperty(u)||(i[u]=[]),i[u].push(g)}function P(u){var g=u.match(/^\s*/)[0].length,j=new RegExp("^\\s{0,"+g+"}","gm");return u.replace(j,"")}this._dispatch=function(g,j,E,R){if(i.hasOwnProperty(g))for(var O=0;O<i[g].length;++O){var W=i[g][O](g,j,this,E,R);W&&typeof W<"u"&&(j=W)}return j},this.listen=function(u,g){return w(u,g),this},this.makeHtml=function(u){if(!u)return u;var g={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:n,outputModifiers:d,converter:this,ghCodeBlocks:[],metadata:{parsed:{},raw:"",format:""}};return u=u.replace(/¨/g,"¨T"),u=u.replace(/\$/g,"¨D"),u=u.replace(/\r\n/g,`
`),u=u.replace(/\r/g,`
`),u=u.replace(/\u00A0/g,"&nbsp;"),t.smartIndentationFix&&(u=P(u)),u=`

`+u+`

`,u=a.subParser("detab")(u,t,g),u=u.replace(/^[ \t]+$/mg,""),a.helper.forEach(n,function(j){u=a.subParser("runExtension")(j,u,t,g)}),u=a.subParser("metadata")(u,t,g),u=a.subParser("hashPreCodeTags")(u,t,g),u=a.subParser("githubCodeBlocks")(u,t,g),u=a.subParser("hashHTMLBlocks")(u,t,g),u=a.subParser("hashCodeTags")(u,t,g),u=a.subParser("stripLinkDefinitions")(u,t,g),u=a.subParser("blockGamut")(u,t,g),u=a.subParser("unhashHTMLSpans")(u,t,g),u=a.subParser("unescapeSpecialChars")(u,t,g),u=u.replace(/¨D/g,"$$"),u=u.replace(/¨T/g,"¨"),u=a.subParser("completeHTMLDocument")(u,t,g),a.helper.forEach(d,function(j){u=a.subParser("runExtension")(j,u,t,g)}),o=g.metadata,u},this.makeMarkdown=this.makeMd=function(u,g){if(u=u.replace(/\r\n/g,`
`),u=u.replace(/\r/g,`
`),u=u.replace(/>[ \t]+</,">¨NBSP;<"),!g)if(window&&window.document)g=window.document;else throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");var j=g.createElement("div");j.innerHTML=u;var E={preList:X(j)};Z(j);for(var R=j.childNodes,O="",W=0;W<R.length;W++)O+=a.subParser("makeMarkdown.node")(R[W],E);function Z(B){for(var J=0;J<B.childNodes.length;++J){var Y=B.childNodes[J];Y.nodeType===3?!/\S/.test(Y.nodeValue)&&!/^[ ]+$/.test(Y.nodeValue)?(B.removeChild(Y),--J):(Y.nodeValue=Y.nodeValue.split(`
`).join(" "),Y.nodeValue=Y.nodeValue.replace(/(\s)+/g,"$1")):Y.nodeType===1&&Z(Y)}}function X(B){for(var J=B.querySelectorAll("pre"),Y=[],ee=0;ee<J.length;++ee)if(J[ee].childElementCount===1&&J[ee].firstChild.tagName.toLowerCase()==="code"){var we=J[ee].firstChild.innerHTML.trim(),ye=J[ee].firstChild.getAttribute("data-language")||"";if(ye==="")for(var He=J[ee].firstChild.className.split(" "),ke=0;ke<He.length;++ke){var Ve=He[ke].match(/^language-(.+)$/);if(Ve!==null){ye=Ve[1];break}}we=a.helper.unescapeHTMLEntities(we),Y.push(we),J[ee].outerHTML='<precode language="'+ye+'" precodenum="'+ee.toString()+'"></precode>'}else Y.push(J[ee].innerHTML),J[ee].innerHTML="",J[ee].setAttribute("prenum",ee.toString());return Y}return O},this.setOption=function(u,g){t[u]=g},this.getOption=function(u){return t[u]},this.getOptions=function(){return t},this.addExtension=function(u,g){g=g||null,S(u,g)},this.useExtension=function(u){S(u)},this.setFlavor=function(u){if(!T.hasOwnProperty(u))throw Error(u+" flavor was not found");var g=T[u];l=u;for(var j in g)g.hasOwnProperty(j)&&(t[j]=g[j])},this.getFlavor=function(){return l},this.removeExtension=function(u){a.helper.isArray(u)||(u=[u]);for(var g=0;g<u.length;++g){for(var j=u[g],E=0;E<n.length;++E)n[E]===j&&n.splice(E,1);for(var R=0;R<d.length;++R)d[R]===j&&d.splice(R,1)}},this.getAllExtensions=function(){return{language:n,output:d}},this.getMetadata=function(u){return u?o.raw:o.parsed},this.getMetadataFormat=function(){return o.format},this._setMetadataPair=function(u,g){o.parsed[u]=g},this._setMetadataFormat=function(u){o.format=u},this._setMetadataRaw=function(u){o.raw=u}},a.subParser("anchors",function(e,t,n){e=n.converter._dispatch("anchors.before",e,t,n);var d=function(i,l,o,f,S,k,w){if(a.helper.isUndefined(w)&&(w=""),o=o.toLowerCase(),i.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)f="";else if(!f)if(o||(o=l.toLowerCase().replace(/ ?\n/g," ")),f="#"+o,!a.helper.isUndefined(n.gUrls[o]))f=n.gUrls[o],a.helper.isUndefined(n.gTitles[o])||(w=n.gTitles[o]);else return i;f=f.replace(a.helper.regexes.asteriskDashAndColon,a.helper.escapeCharactersCallback);var P='<a href="'+f+'"';return w!==""&&w!==null&&(w=w.replace(/"/g,"&quot;"),w=w.replace(a.helper.regexes.asteriskDashAndColon,a.helper.escapeCharactersCallback),P+=' title="'+w+'"'),t.openLinksInNewWindow&&!/^#/.test(f)&&(P+=' rel="noopener noreferrer" target="¨E95Eblank"'),P+=">"+l+"</a>",P};return e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,d),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,d),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,d),e=e.replace(/\[([^\[\]]+)]()()()()()/g,d),t.ghMentions&&(e=e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi,function(i,l,o,f,S){if(o==="\\")return l+f;if(!a.helper.isString(t.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");var k=t.ghMentionsLink.replace(/\{u}/g,S),w="";return t.openLinksInNewWindow&&(w=' rel="noopener noreferrer" target="¨E95Eblank"'),l+'<a href="'+k+'"'+w+">"+f+"</a>"})),e=n.converter._dispatch("anchors.after",e,t,n),e});var H=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,_=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,m=/()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,y=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,v=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,C=function(e){return function(t,n,d,i,l,o,f){d=d.replace(a.helper.regexes.asteriskDashAndColon,a.helper.escapeCharactersCallback);var S=d,k="",w="",P=n||"",u=f||"";return/^www\./i.test(d)&&(d=d.replace(/^www\./i,"http://www.")),e.excludeTrailingPunctuationFromURLs&&o&&(k=o),e.openLinksInNewWindow&&(w=' rel="noopener noreferrer" target="¨E95Eblank"'),P+'<a href="'+d+'"'+w+">"+S+"</a>"+k+u}},A=function(e,t){return function(n,d,i){var l="mailto:";return d=d||"",i=a.subParser("unescapeSpecialChars")(i,e,t),e.encodeEmails?(l=a.helper.encodeEmailAddress(l+i),i=a.helper.encodeEmailAddress(i)):l=l+i,d+'<a href="'+l+'">'+i+"</a>"}};a.subParser("autoLinks",function(e,t,n){return e=n.converter._dispatch("autoLinks.before",e,t,n),e=e.replace(m,C(t)),e=e.replace(v,A(t,n)),e=n.converter._dispatch("autoLinks.after",e,t,n),e}),a.subParser("simplifiedAutoLinks",function(e,t,n){return t.simplifiedAutoLink&&(e=n.converter._dispatch("simplifiedAutoLinks.before",e,t,n),t.excludeTrailingPunctuationFromURLs?e=e.replace(_,C(t)):e=e.replace(H,C(t)),e=e.replace(y,A(t,n)),e=n.converter._dispatch("simplifiedAutoLinks.after",e,t,n)),e}),a.subParser("blockGamut",function(e,t,n){return e=n.converter._dispatch("blockGamut.before",e,t,n),e=a.subParser("blockQuotes")(e,t,n),e=a.subParser("headers")(e,t,n),e=a.subParser("horizontalRule")(e,t,n),e=a.subParser("lists")(e,t,n),e=a.subParser("codeBlocks")(e,t,n),e=a.subParser("tables")(e,t,n),e=a.subParser("hashHTMLBlocks")(e,t,n),e=a.subParser("paragraphs")(e,t,n),e=n.converter._dispatch("blockGamut.after",e,t,n),e}),a.subParser("blockQuotes",function(e,t,n){e=n.converter._dispatch("blockQuotes.before",e,t,n),e=e+`

`;var d=/(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;return t.splitAdjacentBlockquotes&&(d=/^ {0,3}>[\s\S]*?(?:\n\n)/gm),e=e.replace(d,function(i){return i=i.replace(/^[ \t]*>[ \t]?/gm,""),i=i.replace(/¨0/g,""),i=i.replace(/^[ \t]+$/gm,""),i=a.subParser("githubCodeBlocks")(i,t,n),i=a.subParser("blockGamut")(i,t,n),i=i.replace(/(^|\n)/g,"$1  "),i=i.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(l,o){var f=o;return f=f.replace(/^  /mg,"¨0"),f=f.replace(/¨0/g,""),f}),a.subParser("hashBlock")(`<blockquote>
`+i+`
</blockquote>`,t,n)}),e=n.converter._dispatch("blockQuotes.after",e,t,n),e}),a.subParser("codeBlocks",function(e,t,n){e=n.converter._dispatch("codeBlocks.before",e,t,n),e+="¨0";var d=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;return e=e.replace(d,function(i,l,o){var f=l,S=o,k=`
`;return f=a.subParser("outdent")(f,t,n),f=a.subParser("encodeCode")(f,t,n),f=a.subParser("detab")(f,t,n),f=f.replace(/^\n+/g,""),f=f.replace(/\n+$/g,""),t.omitExtraWLInCodeBlocks&&(k=""),f="<pre><code>"+f+k+"</code></pre>",a.subParser("hashBlock")(f,t,n)+S}),e=e.replace(/¨0/,""),e=n.converter._dispatch("codeBlocks.after",e,t,n),e}),a.subParser("codeSpans",function(e,t,n){return e=n.converter._dispatch("codeSpans.before",e,t,n),typeof e>"u"&&(e=""),e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(d,i,l,o){var f=o;return f=f.replace(/^([ \t]*)/g,""),f=f.replace(/[ \t]*$/g,""),f=a.subParser("encodeCode")(f,t,n),f=i+"<code>"+f+"</code>",f=a.subParser("hashHTMLSpans")(f,t,n),f}),e=n.converter._dispatch("codeSpans.after",e,t,n),e}),a.subParser("completeHTMLDocument",function(e,t,n){if(!t.completeHTMLDocument)return e;e=n.converter._dispatch("completeHTMLDocument.before",e,t,n);var d="html",i=`<!DOCTYPE HTML>
`,l="",o=`<meta charset="utf-8">
`,f="",S="";typeof n.metadata.parsed.doctype<"u"&&(i="<!DOCTYPE "+n.metadata.parsed.doctype+`>
`,d=n.metadata.parsed.doctype.toString().toLowerCase(),(d==="html"||d==="html5")&&(o='<meta charset="utf-8">'));for(var k in n.metadata.parsed)if(n.metadata.parsed.hasOwnProperty(k))switch(k.toLowerCase()){case"doctype":break;case"title":l="<title>"+n.metadata.parsed.title+`</title>
`;break;case"charset":d==="html"||d==="html5"?o='<meta charset="'+n.metadata.parsed.charset+`">
`:o='<meta name="charset" content="'+n.metadata.parsed.charset+`">
`;break;case"language":case"lang":f=' lang="'+n.metadata.parsed[k]+'"',S+='<meta name="'+k+'" content="'+n.metadata.parsed[k]+`">
`;break;default:S+='<meta name="'+k+'" content="'+n.metadata.parsed[k]+`">
`}return e=i+"<html"+f+`>
<head>
`+l+o+S+`</head>
<body>
`+e.trim()+`
</body>
</html>`,e=n.converter._dispatch("completeHTMLDocument.after",e,t,n),e}),a.subParser("detab",function(e,t,n){return e=n.converter._dispatch("detab.before",e,t,n),e=e.replace(/\t(?=\t)/g,"    "),e=e.replace(/\t/g,"¨A¨B"),e=e.replace(/¨B(.+?)¨A/g,function(d,i){for(var l=i,o=4-l.length%4,f=0;f<o;f++)l+=" ";return l}),e=e.replace(/¨A/g,"    "),e=e.replace(/¨B/g,""),e=n.converter._dispatch("detab.after",e,t,n),e}),a.subParser("ellipsis",function(e,t,n){return t.ellipsis&&(e=n.converter._dispatch("ellipsis.before",e,t,n),e=e.replace(/\.\.\./g,"…"),e=n.converter._dispatch("ellipsis.after",e,t,n)),e}),a.subParser("emoji",function(e,t,n){if(!t.emoji)return e;e=n.converter._dispatch("emoji.before",e,t,n);var d=/:([\S]+?):/g;return e=e.replace(d,function(i,l){return a.helper.emojis.hasOwnProperty(l)?a.helper.emojis[l]:i}),e=n.converter._dispatch("emoji.after",e,t,n),e}),a.subParser("encodeAmpsAndAngles",function(e,t,n){return e=n.converter._dispatch("encodeAmpsAndAngles.before",e,t,n),e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?$!])/gi,"&lt;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=n.converter._dispatch("encodeAmpsAndAngles.after",e,t,n),e}),a.subParser("encodeBackslashEscapes",function(e,t,n){return e=n.converter._dispatch("encodeBackslashEscapes.before",e,t,n),e=e.replace(/\\(\\)/g,a.helper.escapeCharactersCallback),e=e.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g,a.helper.escapeCharactersCallback),e=n.converter._dispatch("encodeBackslashEscapes.after",e,t,n),e}),a.subParser("encodeCode",function(e,t,n){return e=n.converter._dispatch("encodeCode.before",e,t,n),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,a.helper.escapeCharactersCallback),e=n.converter._dispatch("encodeCode.after",e,t,n),e}),a.subParser("escapeSpecialCharsWithinTagAttributes",function(e,t,n){e=n.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",e,t,n);var d=/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,i=/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;return e=e.replace(d,function(l){return l.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,a.helper.escapeCharactersCallback)}),e=e.replace(i,function(l){return l.replace(/([\\`*_~=|])/g,a.helper.escapeCharactersCallback)}),e=n.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",e,t,n),e}),a.subParser("githubCodeBlocks",function(e,t,n){return t.ghCodeBlocks?(e=n.converter._dispatch("githubCodeBlocks.before",e,t,n),e+="¨0",e=e.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,function(d,i,l,o){var f=t.omitExtraWLInCodeBlocks?"":`
`;return o=a.subParser("encodeCode")(o,t,n),o=a.subParser("detab")(o,t,n),o=o.replace(/^\n+/g,""),o=o.replace(/\n+$/g,""),o="<pre><code"+(l?' class="'+l+" language-"+l+'"':"")+">"+o+f+"</code></pre>",o=a.subParser("hashBlock")(o,t,n),`

¨G`+(n.ghCodeBlocks.push({text:d,codeblock:o})-1)+`G

`}),e=e.replace(/¨0/,""),n.converter._dispatch("githubCodeBlocks.after",e,t,n)):e}),a.subParser("hashBlock",function(e,t,n){return e=n.converter._dispatch("hashBlock.before",e,t,n),e=e.replace(/(^\n+|\n+$)/g,""),e=`

¨K`+(n.gHtmlBlocks.push(e)-1)+`K

`,e=n.converter._dispatch("hashBlock.after",e,t,n),e}),a.subParser("hashCodeTags",function(e,t,n){e=n.converter._dispatch("hashCodeTags.before",e,t,n);var d=function(i,l,o,f){var S=o+a.subParser("encodeCode")(l,t,n)+f;return"¨C"+(n.gHtmlSpans.push(S)-1)+"C"};return e=a.helper.replaceRecursiveRegExp(e,d,"<code\\b[^>]*>","</code>","gim"),e=n.converter._dispatch("hashCodeTags.after",e,t,n),e}),a.subParser("hashElement",function(e,t,n){return function(d,i){var l=i;return l=l.replace(/\n\n/g,`
`),l=l.replace(/^\n/,""),l=l.replace(/\n+$/g,""),l=`

¨K`+(n.gHtmlBlocks.push(l)-1)+`K

`,l}}),a.subParser("hashHTMLBlocks",function(e,t,n){e=n.converter._dispatch("hashHTMLBlocks.before",e,t,n);var d=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],i=function(u,g,j,E){var R=u;return j.search(/\bmarkdown\b/)!==-1&&(R=j+n.converter.makeHtml(g)+E),`

¨K`+(n.gHtmlBlocks.push(R)-1)+`K

`};t.backslashEscapesHTMLTags&&(e=e.replace(/\\<(\/?[^>]+?)>/g,function(u,g){return"&lt;"+g+"&gt;"}));for(var l=0;l<d.length;++l)for(var o,f=new RegExp("^ {0,3}(<"+d[l]+"\\b[^>]*>)","im"),S="<"+d[l]+"\\b[^>]*>",k="</"+d[l]+">";(o=a.helper.regexIndexOf(e,f))!==-1;){var w=a.helper.splitAtIndex(e,o),P=a.helper.replaceRecursiveRegExp(w[1],i,S,k,"im");if(P===w[1])break;e=w[0].concat(P)}return e=e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,a.subParser("hashElement")(e,t,n)),e=a.helper.replaceRecursiveRegExp(e,function(u){return`

¨K`+(n.gHtmlBlocks.push(u)-1)+`K

`},"^ {0,3}<!--","-->","gm"),e=e.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,a.subParser("hashElement")(e,t,n)),e=n.converter._dispatch("hashHTMLBlocks.after",e,t,n),e}),a.subParser("hashHTMLSpans",function(e,t,n){e=n.converter._dispatch("hashHTMLSpans.before",e,t,n);function d(i){return"¨C"+(n.gHtmlSpans.push(i)-1)+"C"}return e=e.replace(/<[^>]+?\/>/gi,function(i){return d(i)}),e=e.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,function(i){return d(i)}),e=e.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,function(i){return d(i)}),e=e.replace(/<[^>]+?>/gi,function(i){return d(i)}),e=n.converter._dispatch("hashHTMLSpans.after",e,t,n),e}),a.subParser("unhashHTMLSpans",function(e,t,n){e=n.converter._dispatch("unhashHTMLSpans.before",e,t,n);for(var d=0;d<n.gHtmlSpans.length;++d){for(var i=n.gHtmlSpans[d],l=0;/¨C(\d+)C/.test(i);){var o=RegExp.$1;if(i=i.replace("¨C"+o+"C",n.gHtmlSpans[o]),l===10){console.error("maximum nesting of 10 spans reached!!!");break}++l}e=e.replace("¨C"+d+"C",i)}return e=n.converter._dispatch("unhashHTMLSpans.after",e,t,n),e}),a.subParser("hashPreCodeTags",function(e,t,n){e=n.converter._dispatch("hashPreCodeTags.before",e,t,n);var d=function(i,l,o,f){var S=o+a.subParser("encodeCode")(l,t,n)+f;return`

¨G`+(n.ghCodeBlocks.push({text:i,codeblock:S})-1)+`G

`};return e=a.helper.replaceRecursiveRegExp(e,d,"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),e=n.converter._dispatch("hashPreCodeTags.after",e,t,n),e}),a.subParser("headers",function(e,t,n){e=n.converter._dispatch("headers.before",e,t,n);var d=isNaN(parseInt(t.headerLevelStart))?1:parseInt(t.headerLevelStart),i=t.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,l=t.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;e=e.replace(i,function(S,k){var w=a.subParser("spanGamut")(k,t,n),P=t.noHeaderId?"":' id="'+f(k)+'"',u=d,g="<h"+u+P+">"+w+"</h"+u+">";return a.subParser("hashBlock")(g,t,n)}),e=e.replace(l,function(S,k){var w=a.subParser("spanGamut")(k,t,n),P=t.noHeaderId?"":' id="'+f(k)+'"',u=d+1,g="<h"+u+P+">"+w+"</h"+u+">";return a.subParser("hashBlock")(g,t,n)});var o=t.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;e=e.replace(o,function(S,k,w){var P=w;t.customizedHeaderId&&(P=w.replace(/\s?\{([^{]+?)}\s*$/,""));var u=a.subParser("spanGamut")(P,t,n),g=t.noHeaderId?"":' id="'+f(w)+'"',j=d-1+k.length,E="<h"+j+g+">"+u+"</h"+j+">";return a.subParser("hashBlock")(E,t,n)});function f(S){var k,w;if(t.customizedHeaderId){var P=S.match(/\{([^{]+?)}\s*$/);P&&P[1]&&(S=P[1])}return k=S,a.helper.isString(t.prefixHeaderId)?w=t.prefixHeaderId:t.prefixHeaderId===!0?w="section-":w="",t.rawPrefixHeaderId||(k=w+k),t.ghCompatibleHeaderId?k=k.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():t.rawHeaderId?k=k.replace(/ /g,"-").replace(/&amp;/g,"&").replace(/¨T/g,"¨").replace(/¨D/g,"$").replace(/["']/g,"-").toLowerCase():k=k.replace(/[^\w]/g,"").toLowerCase(),t.rawPrefixHeaderId&&(k=w+k),n.hashLinkCounts[k]?k=k+"-"+n.hashLinkCounts[k]++:n.hashLinkCounts[k]=1,k}return e=n.converter._dispatch("headers.after",e,t,n),e}),a.subParser("horizontalRule",function(e,t,n){e=n.converter._dispatch("horizontalRule.before",e,t,n);var d=a.subParser("hashBlock")("<hr />",t,n);return e=e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,d),e=e.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,d),e=e.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,d),e=n.converter._dispatch("horizontalRule.after",e,t,n),e}),a.subParser("images",function(e,t,n){e=n.converter._dispatch("images.before",e,t,n);var d=/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,i=/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,l=/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,o=/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,f=/!\[([^\[\]]+)]()()()()()/g;function S(w,P,u,g,j,E,R,O){return g=g.replace(/\s/g,""),k(w,P,u,g,j,E,R,O)}function k(w,P,u,g,j,E,R,O){var W=n.gUrls,Z=n.gTitles,X=n.gDimensions;if(u=u.toLowerCase(),O||(O=""),w.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)g="";else if(g===""||g===null)if((u===""||u===null)&&(u=P.toLowerCase().replace(/ ?\n/g," ")),g="#"+u,!a.helper.isUndefined(W[u]))g=W[u],a.helper.isUndefined(Z[u])||(O=Z[u]),a.helper.isUndefined(X[u])||(j=X[u].width,E=X[u].height);else return w;P=P.replace(/"/g,"&quot;").replace(a.helper.regexes.asteriskDashAndColon,a.helper.escapeCharactersCallback),g=g.replace(a.helper.regexes.asteriskDashAndColon,a.helper.escapeCharactersCallback);var B='<img src="'+g+'" alt="'+P+'"';return O&&a.helper.isString(O)&&(O=O.replace(/"/g,"&quot;").replace(a.helper.regexes.asteriskDashAndColon,a.helper.escapeCharactersCallback),B+=' title="'+O+'"'),j&&E&&(j=j==="*"?"auto":j,E=E==="*"?"auto":E,B+=' width="'+j+'"',B+=' height="'+E+'"'),B+=" />",B}return e=e.replace(o,k),e=e.replace(l,S),e=e.replace(i,k),e=e.replace(d,k),e=e.replace(f,k),e=n.converter._dispatch("images.after",e,t,n),e}),a.subParser("italicsAndBold",function(e,t,n){e=n.converter._dispatch("italicsAndBold.before",e,t,n);function d(i,l,o){return l+i+o}return t.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(i,l){return d(l,"<strong><em>","</em></strong>")}),e=e.replace(/\b__(\S[\s\S]*?)__\b/g,function(i,l){return d(l,"<strong>","</strong>")}),e=e.replace(/\b_(\S[\s\S]*?)_\b/g,function(i,l){return d(l,"<em>","</em>")})):(e=e.replace(/___(\S[\s\S]*?)___/g,function(i,l){return/\S$/.test(l)?d(l,"<strong><em>","</em></strong>"):i}),e=e.replace(/__(\S[\s\S]*?)__/g,function(i,l){return/\S$/.test(l)?d(l,"<strong>","</strong>"):i}),e=e.replace(/_([^\s_][\s\S]*?)_/g,function(i,l){return/\S$/.test(l)?d(l,"<em>","</em>"):i})),t.literalMidWordAsterisks?(e=e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,function(i,l,o){return d(o,l+"<strong><em>","</em></strong>")}),e=e.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,function(i,l,o){return d(o,l+"<strong>","</strong>")}),e=e.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,function(i,l,o){return d(o,l+"<em>","</em>")})):(e=e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(i,l){return/\S$/.test(l)?d(l,"<strong><em>","</em></strong>"):i}),e=e.replace(/\*\*(\S[\s\S]*?)\*\*/g,function(i,l){return/\S$/.test(l)?d(l,"<strong>","</strong>"):i}),e=e.replace(/\*([^\s*][\s\S]*?)\*/g,function(i,l){return/\S$/.test(l)?d(l,"<em>","</em>"):i})),e=n.converter._dispatch("italicsAndBold.after",e,t,n),e}),a.subParser("lists",function(e,t,n){function d(o,f){n.gListLevel++,o=o.replace(/\n{2,}$/,`
`),o+="¨0";var S=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,k=/\n[ \t]*\n(?!¨0)/.test(o);return t.disableForced4SpacesIndentedSublists&&(S=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),o=o.replace(S,function(w,P,u,g,j,E,R){R=R&&R.trim()!=="";var O=a.subParser("outdent")(j,t,n),W="";return E&&t.tasklists&&(W=' class="task-list-item" style="list-style-type: none;"',O=O.replace(/^[ \t]*\[(x|X| )?]/m,function(){var Z='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return R&&(Z+=" checked"),Z+=">",Z})),O=O.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(Z){return"¨A"+Z}),P||O.search(/\n{2,}/)>-1?(O=a.subParser("githubCodeBlocks")(O,t,n),O=a.subParser("blockGamut")(O,t,n)):(O=a.subParser("lists")(O,t,n),O=O.replace(/\n$/,""),O=a.subParser("hashHTMLBlocks")(O,t,n),O=O.replace(/\n\n+/g,`

`),k?O=a.subParser("paragraphs")(O,t,n):O=a.subParser("spanGamut")(O,t,n)),O=O.replace("¨A",""),O="<li"+W+">"+O+`</li>
`,O}),o=o.replace(/¨0/g,""),n.gListLevel--,f&&(o=o.replace(/\s+$/,"")),o}function i(o,f){if(f==="ol"){var S=o.match(/^ *(\d+)\./);if(S&&S[1]!=="1")return' start="'+S[1]+'"'}return""}function l(o,f,S){var k=t.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,w=t.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,P=f==="ul"?k:w,u="";if(o.search(P)!==-1)(function j(E){var R=E.search(P),O=i(o,f);R!==-1?(u+=`

<`+f+O+`>
`+d(E.slice(0,R),!!S)+"</"+f+`>
`,f=f==="ul"?"ol":"ul",P=f==="ul"?k:w,j(E.slice(R))):u+=`

<`+f+O+`>
`+d(E,!!S)+"</"+f+`>
`})(o);else{var g=i(o,f);u=`

<`+f+g+`>
`+d(o,!!S)+"</"+f+`>
`}return u}return e=n.converter._dispatch("lists.before",e,t,n),e+="¨0",n.gListLevel?e=e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(o,f,S){var k=S.search(/[*+-]/g)>-1?"ul":"ol";return l(f,k,!0)}):e=e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(o,f,S,k){var w=k.search(/[*+-]/g)>-1?"ul":"ol";return l(S,w,!1)}),e=e.replace(/¨0/,""),e=n.converter._dispatch("lists.after",e,t,n),e}),a.subParser("metadata",function(e,t,n){if(!t.metadata)return e;e=n.converter._dispatch("metadata.before",e,t,n);function d(i){n.metadata.raw=i,i=i.replace(/&/g,"&amp;").replace(/"/g,"&quot;"),i=i.replace(/\n {4}/g," "),i.replace(/^([\S ]+): +([\s\S]+?)$/gm,function(l,o,f){return n.metadata.parsed[o]=f,""})}return e=e.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,function(i,l,o){return d(o),"¨M"}),e=e.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,function(i,l,o){return l&&(n.metadata.format=l),d(o),"¨M"}),e=e.replace(/¨M/g,""),e=n.converter._dispatch("metadata.after",e,t,n),e}),a.subParser("outdent",function(e,t,n){return e=n.converter._dispatch("outdent.before",e,t,n),e=e.replace(/^(\t|[ ]{1,4})/gm,"¨0"),e=e.replace(/¨0/g,""),e=n.converter._dispatch("outdent.after",e,t,n),e}),a.subParser("paragraphs",function(e,t,n){e=n.converter._dispatch("paragraphs.before",e,t,n),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"");for(var d=e.split(/\n{2,}/g),i=[],l=d.length,o=0;o<l;o++){var f=d[o];f.search(/¨(K|G)(\d+)\1/g)>=0?i.push(f):f.search(/\S/)>=0&&(f=a.subParser("spanGamut")(f,t,n),f=f.replace(/^([ \t]*)/g,"<p>"),f+="</p>",i.push(f))}for(l=i.length,o=0;o<l;o++){for(var S="",k=i[o],w=!1;/¨(K|G)(\d+)\1/.test(k);){var P=RegExp.$1,u=RegExp.$2;P==="K"?S=n.gHtmlBlocks[u]:w?S=a.subParser("encodeCode")(n.ghCodeBlocks[u].text,t,n):S=n.ghCodeBlocks[u].codeblock,S=S.replace(/\$/g,"$$$$"),k=k.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,S),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(k)&&(w=!0)}i[o]=k}return e=i.join(`
`),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,""),n.converter._dispatch("paragraphs.after",e,t,n)}),a.subParser("runExtension",function(e,t,n,d){if(e.filter)t=e.filter(t,d.converter,n);else if(e.regex){var i=e.regex;i instanceof RegExp||(i=new RegExp(i,"g")),t=t.replace(i,e.replace)}return t}),a.subParser("spanGamut",function(e,t,n){return e=n.converter._dispatch("spanGamut.before",e,t,n),e=a.subParser("codeSpans")(e,t,n),e=a.subParser("escapeSpecialCharsWithinTagAttributes")(e,t,n),e=a.subParser("encodeBackslashEscapes")(e,t,n),e=a.subParser("images")(e,t,n),e=a.subParser("anchors")(e,t,n),e=a.subParser("autoLinks")(e,t,n),e=a.subParser("simplifiedAutoLinks")(e,t,n),e=a.subParser("emoji")(e,t,n),e=a.subParser("underline")(e,t,n),e=a.subParser("italicsAndBold")(e,t,n),e=a.subParser("strikethrough")(e,t,n),e=a.subParser("ellipsis")(e,t,n),e=a.subParser("hashHTMLSpans")(e,t,n),e=a.subParser("encodeAmpsAndAngles")(e,t,n),t.simpleLineBreaks?/\n\n¨K/.test(e)||(e=e.replace(/\n+/g,`<br />
`)):e=e.replace(/  +\n/g,`<br />
`),e=n.converter._dispatch("spanGamut.after",e,t,n),e}),a.subParser("strikethrough",function(e,t,n){function d(i){return t.simplifiedAutoLink&&(i=a.subParser("simplifiedAutoLinks")(i,t,n)),"<del>"+i+"</del>"}return t.strikethrough&&(e=n.converter._dispatch("strikethrough.before",e,t,n),e=e.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(i,l){return d(l)}),e=n.converter._dispatch("strikethrough.after",e,t,n)),e}),a.subParser("stripLinkDefinitions",function(e,t,n){var d=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,i=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;e+="¨0";var l=function(o,f,S,k,w,P,u){return f=f.toLowerCase(),e.toLowerCase().split(f).length-1<2?o:(S.match(/^data:.+?\/.+?;base64,/)?n.gUrls[f]=S.replace(/\s/g,""):n.gUrls[f]=a.subParser("encodeAmpsAndAngles")(S,t,n),P?P+u:(u&&(n.gTitles[f]=u.replace(/"|'/g,"&quot;")),t.parseImgDimensions&&k&&w&&(n.gDimensions[f]={width:k,height:w}),""))};return e=e.replace(i,l),e=e.replace(d,l),e=e.replace(/¨0/,""),e}),a.subParser("tables",function(e,t,n){if(!t.tables)return e;var d=/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,i=/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;function l(w){return/^:[ \t]*--*$/.test(w)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(w)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(w)?' style="text-align:center;"':""}function o(w,P){var u="";return w=w.trim(),(t.tablesHeaderId||t.tableHeaderId)&&(u=' id="'+w.replace(/ /g,"_").toLowerCase()+'"'),w=a.subParser("spanGamut")(w,t,n),"<th"+u+P+">"+w+`</th>
`}function f(w,P){var u=a.subParser("spanGamut")(w,t,n);return"<td"+P+">"+u+`</td>
`}function S(w,P){for(var u=`<table>
<thead>
<tr>
`,g=w.length,j=0;j<g;++j)u+=w[j];for(u+=`</tr>
</thead>
<tbody>
`,j=0;j<P.length;++j){u+=`<tr>
`;for(var E=0;E<g;++E)u+=P[j][E];u+=`</tr>
`}return u+=`</tbody>
</table>
`,u}function k(w){var P,u=w.split(`
`);for(P=0;P<u.length;++P)/^ {0,3}\|/.test(u[P])&&(u[P]=u[P].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(u[P])&&(u[P]=u[P].replace(/\|[ \t]*$/,"")),u[P]=a.subParser("codeSpans")(u[P],t,n);var g=u[0].split("|").map(function(B){return B.trim()}),j=u[1].split("|").map(function(B){return B.trim()}),E=[],R=[],O=[],W=[];for(u.shift(),u.shift(),P=0;P<u.length;++P)u[P].trim()!==""&&E.push(u[P].split("|").map(function(B){return B.trim()}));if(g.length<j.length)return w;for(P=0;P<j.length;++P)O.push(l(j[P]));for(P=0;P<g.length;++P)a.helper.isUndefined(O[P])&&(O[P]=""),R.push(o(g[P],O[P]));for(P=0;P<E.length;++P){for(var Z=[],X=0;X<R.length;++X)a.helper.isUndefined(E[P][X]),Z.push(f(E[P][X],O[X]));W.push(Z)}return S(R,W)}return e=n.converter._dispatch("tables.before",e,t,n),e=e.replace(/\\(\|)/g,a.helper.escapeCharactersCallback),e=e.replace(d,k),e=e.replace(i,k),e=n.converter._dispatch("tables.after",e,t,n),e}),a.subParser("underline",function(e,t,n){return t.underline&&(e=n.converter._dispatch("underline.before",e,t,n),t.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(d,i){return"<u>"+i+"</u>"}),e=e.replace(/\b__(\S[\s\S]*?)__\b/g,function(d,i){return"<u>"+i+"</u>"})):(e=e.replace(/___(\S[\s\S]*?)___/g,function(d,i){return/\S$/.test(i)?"<u>"+i+"</u>":d}),e=e.replace(/__(\S[\s\S]*?)__/g,function(d,i){return/\S$/.test(i)?"<u>"+i+"</u>":d})),e=e.replace(/(_)/g,a.helper.escapeCharactersCallback),e=n.converter._dispatch("underline.after",e,t,n)),e}),a.subParser("unescapeSpecialChars",function(e,t,n){return e=n.converter._dispatch("unescapeSpecialChars.before",e,t,n),e=e.replace(/¨E(\d+)E/g,function(d,i){var l=parseInt(i);return String.fromCharCode(l)}),e=n.converter._dispatch("unescapeSpecialChars.after",e,t,n),e}),a.subParser("makeMarkdown.blockquote",function(e,t){var n="";if(e.hasChildNodes())for(var d=e.childNodes,i=d.length,l=0;l<i;++l){var o=a.subParser("makeMarkdown.node")(d[l],t);o!==""&&(n+=o)}return n=n.trim(),n="> "+n.split(`
`).join(`
> `),n}),a.subParser("makeMarkdown.codeBlock",function(e,t){var n=e.getAttribute("language"),d=e.getAttribute("precodenum");return"```"+n+`
`+t.preList[d]+"\n```"}),a.subParser("makeMarkdown.codeSpan",function(e){return"`"+e.innerHTML+"`"}),a.subParser("makeMarkdown.emphasis",function(e,t){var n="";if(e.hasChildNodes()){n+="*";for(var d=e.childNodes,i=d.length,l=0;l<i;++l)n+=a.subParser("makeMarkdown.node")(d[l],t);n+="*"}return n}),a.subParser("makeMarkdown.header",function(e,t,n){var d=new Array(n+1).join("#"),i="";if(e.hasChildNodes()){i=d+" ";for(var l=e.childNodes,o=l.length,f=0;f<o;++f)i+=a.subParser("makeMarkdown.node")(l[f],t)}return i}),a.subParser("makeMarkdown.hr",function(){return"---"}),a.subParser("makeMarkdown.image",function(e){var t="";return e.hasAttribute("src")&&(t+="!["+e.getAttribute("alt")+"](",t+="<"+e.getAttribute("src")+">",e.hasAttribute("width")&&e.hasAttribute("height")&&(t+=" ="+e.getAttribute("width")+"x"+e.getAttribute("height")),e.hasAttribute("title")&&(t+=' "'+e.getAttribute("title")+'"'),t+=")"),t}),a.subParser("makeMarkdown.links",function(e,t){var n="";if(e.hasChildNodes()&&e.hasAttribute("href")){var d=e.childNodes,i=d.length;n="[";for(var l=0;l<i;++l)n+=a.subParser("makeMarkdown.node")(d[l],t);n+="](",n+="<"+e.getAttribute("href")+">",e.hasAttribute("title")&&(n+=' "'+e.getAttribute("title")+'"'),n+=")"}return n}),a.subParser("makeMarkdown.list",function(e,t,n){var d="";if(!e.hasChildNodes())return"";for(var i=e.childNodes,l=i.length,o=e.getAttribute("start")||1,f=0;f<l;++f)if(!(typeof i[f].tagName>"u"||i[f].tagName.toLowerCase()!=="li")){var S="";n==="ol"?S=o.toString()+". ":S="- ",d+=S+a.subParser("makeMarkdown.listItem")(i[f],t),++o}return d+=`
<!-- -->
`,d.trim()}),a.subParser("makeMarkdown.listItem",function(e,t){for(var n="",d=e.childNodes,i=d.length,l=0;l<i;++l)n+=a.subParser("makeMarkdown.node")(d[l],t);return/\n$/.test(n)?n=n.split(`
`).join(`
    `).replace(/^ {4}$/gm,"").replace(/\n\n+/g,`

`):n+=`
`,n}),a.subParser("makeMarkdown.node",function(e,t,n){n=n||!1;var d="";if(e.nodeType===3)return a.subParser("makeMarkdown.txt")(e,t);if(e.nodeType===8)return"<!--"+e.data+`-->

`;if(e.nodeType!==1)return"";var i=e.tagName.toLowerCase();switch(i){case"h1":n||(d=a.subParser("makeMarkdown.header")(e,t,1)+`

`);break;case"h2":n||(d=a.subParser("makeMarkdown.header")(e,t,2)+`

`);break;case"h3":n||(d=a.subParser("makeMarkdown.header")(e,t,3)+`

`);break;case"h4":n||(d=a.subParser("makeMarkdown.header")(e,t,4)+`

`);break;case"h5":n||(d=a.subParser("makeMarkdown.header")(e,t,5)+`

`);break;case"h6":n||(d=a.subParser("makeMarkdown.header")(e,t,6)+`

`);break;case"p":n||(d=a.subParser("makeMarkdown.paragraph")(e,t)+`

`);break;case"blockquote":n||(d=a.subParser("makeMarkdown.blockquote")(e,t)+`

`);break;case"hr":n||(d=a.subParser("makeMarkdown.hr")(e,t)+`

`);break;case"ol":n||(d=a.subParser("makeMarkdown.list")(e,t,"ol")+`

`);break;case"ul":n||(d=a.subParser("makeMarkdown.list")(e,t,"ul")+`

`);break;case"precode":n||(d=a.subParser("makeMarkdown.codeBlock")(e,t)+`

`);break;case"pre":n||(d=a.subParser("makeMarkdown.pre")(e,t)+`

`);break;case"table":n||(d=a.subParser("makeMarkdown.table")(e,t)+`

`);break;case"code":d=a.subParser("makeMarkdown.codeSpan")(e,t);break;case"em":case"i":d=a.subParser("makeMarkdown.emphasis")(e,t);break;case"strong":case"b":d=a.subParser("makeMarkdown.strong")(e,t);break;case"del":d=a.subParser("makeMarkdown.strikethrough")(e,t);break;case"a":d=a.subParser("makeMarkdown.links")(e,t);break;case"img":d=a.subParser("makeMarkdown.image")(e,t);break;default:d=e.outerHTML+`

`}return d}),a.subParser("makeMarkdown.paragraph",function(e,t){var n="";if(e.hasChildNodes())for(var d=e.childNodes,i=d.length,l=0;l<i;++l)n+=a.subParser("makeMarkdown.node")(d[l],t);return n=n.trim(),n}),a.subParser("makeMarkdown.pre",function(e,t){var n=e.getAttribute("prenum");return"<pre>"+t.preList[n]+"</pre>"}),a.subParser("makeMarkdown.strikethrough",function(e,t){var n="";if(e.hasChildNodes()){n+="~~";for(var d=e.childNodes,i=d.length,l=0;l<i;++l)n+=a.subParser("makeMarkdown.node")(d[l],t);n+="~~"}return n}),a.subParser("makeMarkdown.strong",function(e,t){var n="";if(e.hasChildNodes()){n+="**";for(var d=e.childNodes,i=d.length,l=0;l<i;++l)n+=a.subParser("makeMarkdown.node")(d[l],t);n+="**"}return n}),a.subParser("makeMarkdown.table",function(e,t){var n="",d=[[],[]],i=e.querySelectorAll("thead>tr>th"),l=e.querySelectorAll("tbody>tr"),o,f;for(o=0;o<i.length;++o){var S=a.subParser("makeMarkdown.tableCell")(i[o],t),k="---";if(i[o].hasAttribute("style")){var w=i[o].getAttribute("style").toLowerCase().replace(/\s/g,"");switch(w){case"text-align:left;":k=":---";break;case"text-align:right;":k="---:";break;case"text-align:center;":k=":---:";break}}d[0][o]=S.trim(),d[1][o]=k}for(o=0;o<l.length;++o){var P=d.push([])-1,u=l[o].getElementsByTagName("td");for(f=0;f<i.length;++f){var g=" ";typeof u[f]<"u"&&(g=a.subParser("makeMarkdown.tableCell")(u[f],t)),d[P].push(g)}}var j=3;for(o=0;o<d.length;++o)for(f=0;f<d[o].length;++f){var E=d[o][f].length;E>j&&(j=E)}for(o=0;o<d.length;++o){for(f=0;f<d[o].length;++f)o===1?d[o][f].slice(-1)===":"?d[o][f]=a.helper.padEnd(d[o][f].slice(-1),j-1,"-")+":":d[o][f]=a.helper.padEnd(d[o][f],j,"-"):d[o][f]=a.helper.padEnd(d[o][f],j);n+="| "+d[o].join(" | ")+` |
`}return n.trim()}),a.subParser("makeMarkdown.tableCell",function(e,t){var n="";if(!e.hasChildNodes())return"";for(var d=e.childNodes,i=d.length,l=0;l<i;++l)n+=a.subParser("makeMarkdown.node")(d[l],t,!0);return n.trim()}),a.subParser("makeMarkdown.txt",function(e){var t=e.nodeValue;return t=t.replace(/ +/g," "),t=t.replace(/¨NBSP;/g," "),t=a.helper.unescapeHTMLEntities(t),t=t.replace(/([*_~|`])/g,"\\$1"),t=t.replace(/^(\s*)>/g,"\\$1>"),t=t.replace(/^#/gm,"\\#"),t=t.replace(/^(\s*)([-=]{3,})(\s*)$/,"$1\\$2$3"),t=t.replace(/^( {0,3}\d+)\./gm,"$1\\."),t=t.replace(/^( {0,3})([+-])/gm,"$1\\$2"),t=t.replace(/]([\s]*)\(/g,"\\]$1\\("),t=t.replace(/^ {0,3}\[([\S \t]*?)]:/gm,"\\[$1]:"),t});var $=this;r.exports?r.exports=a:$.showdown=a}).call(bn)}(ge)),ge.exports}var yn=wn();const kn=_n(yn);function re({class:r,...s},c){const a=K(r),b=new kn.Converter().makeHtml(c),z=h.div({class:`style-markup ${a.val}`,innerHTML:b,...s});return Prism.highlightAllUnder(z),z}function je(r=0){return new Promise(s=>setTimeout(s,r))}function Pn(r,s){const c=r.indexOf(s);return c===-1?r:[...r.slice(0,c),...r.slice(c+1)]}function Cn(r,s){return r.indexOf(s)===-1?r.concat(s):Pn(r,s)}function Sn(r,s){const c=new AbortController;return document.addEventListener("click",a=>{a.target instanceof Node&&(r.contains(a.target)||document.contains(a.target)&&s(a))},{signal:c.signal}),c}function jn(r,s){for(const c of s)if(c[0]===r)return c[1];throw`error: non-exhaustive patterns: ${r} not covered`}function oe(r,s){const c=Array.isArray(r)?r:[r],a=Array.isArray(s)?s:[s];for(const p of a)if(c.includes(p))return!0;return!1}const ue={NONE:"none",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},U={HOVER_IN:"hover-in",HOVER_OUT:"hover-out",HOVER:"hover",CLICK:"click",FOCUS:"focus",FOCUS_IN:"focus-in",FOCUS_OUT:"focus-out"},Te=h.div({name:"Popups",class:"fixed inset-0 z-[100] pointer-events-none"});ce(document.documentElement,Te);function De({visible:r=L(!1),direction:s=ue.BOTTOM,trigger:c=U.CLICK,name:a,class:p,...b},...z){const M=K(p);let T;const I=L({height:0,width:0,left:0,top:0,yOffset:0,xOffset:0}),D=async()=>{if(!T)return;if(!m.isConnected)return H();if(!m.parentElement)throw new Error("Popup target has been removed from DOM");const v=m.parentElement.getBoundingClientRect();I.val={top:v.top,left:v.left,width:v.width,height:v.height,xOffset:0,yOffset:0},await je();const C=Te.getBoundingClientRect(),A=T.popup.getBoundingClientRect(),$={x:Math.max(-A.left,0),y:Math.max(-A.top,0)},e={x:Math.min(C.width-A.left-A.width,0),y:Math.min(C.height-A.top-A.height,0)};I.val={...I.val,xOffset:$.x+e.x,yOffset:$.y+e.y}},F=()=>{const v=jn(s,[[ue.NONE,""],[ue.TOP,"bottom-full mb-1"],[ue.RIGHT,"left-full ml-1"],[ue.BOTTOM,"top-full mt-1"],[ue.LEFT,"right-full mr-1"]]),C=h.div({name:`${a} Popup`,class:()=>`absolute pointer-events-auto ${v} ${M.val}`,...b},z),A=h.div({name:`${a} Popup Anchor`,class:()=>"absolute transition pointer-events-none",style:()=>`left: ${I.val.left+I.val.xOffset}px; top: ${I.val.top+I.val.yOffset}px; height: ${I.val.height}px; width: ${I.val.width}px;`},C),$=Sn(C,()=>je().then(()=>r.val=!1));ce(Te,A),T={anchor:A,popup:C,abortController:$}},H=()=>{T==null||T.anchor.remove(),T==null||T.popup.remove(),T==null||T.abortController.abort(),T=void 0},_=()=>{if(!m.parentElement)throw new Error("Popup target has been removed from DOM");oe(c,[U.HOVER,U.HOVER_IN])&&m.parentElement.addEventListener("mouseenter",()=>r.val=!0),oe(c,[U.HOVER,U.HOVER_OUT])&&m.parentElement.addEventListener("mouseleave",()=>r.val=!1),oe(c,U.CLICK)&&m.parentElement.addEventListener("click",()=>r.val=!0),oe(c,[U.FOCUS,U.FOCUS_IN])&&m.parentElement.addEventListener("focusin",()=>r.val=!0),oe(c,[U.FOCUS,U.FOCUS_OUT])&&m.parentElement.addEventListener("focusout",()=>r.val=!1)};Q(async()=>{if(!r.val)return H();T||F(),D()});const m=h.div({name:`${a} Popup Target`,hidden:!0});window.addEventListener("resize",D);const y=new ResizeObserver(D);return je().then(()=>y.observe(m.parentElement)).then(()=>_()),m}function Mn({options:r,value:s=L(void 0),required:c,class:a,...p}){const b=K(a);return h.div({class:"flex flex-col gap-1 group"},r.map(z=>{const M=Q(()=>s.val===z.value);return h.div({name:"Radio",onclick:()=>s.val=M.val?void 0:z.value,"$data-selected":M,class:()=>{var T;return`group flex cursor-pointer justify-between items-center gap-2 select-none group-has-invalid:mood-critical ${(T=b.val)==null?void 0:T.split(" ").filter(I=>!I.includes("variant")).join(" ")}`},...p},z.name??String(z.value),ae({disabled:z.disabled,tabIndex:0,class:()=>{var T;return`button size-5 rounded-full focus-visible:mood-accent ${(T=b.val)==null?void 0:T.split(" ").filter(I=>I.includes("variant")).join(" ")}`}},h.div({class:"bg-current rounded-full size-2.5 aspect-square not-group-data-selected:hidden"})))}),h.input({type:"checkbox",checked:()=>s.val!==void 0,required:c,hidden:!0}))}function G({options:r,value:s=L(r[0].value),useChips:c=!1,lead:a,trail:p,class:b,...z}){const M=K(b),T=Q(()=>{var m;return(m=M.val)==null?void 0:m.split(" ").find(y=>y.includes("mood-"))}),I=Q(()=>Array.isArray(s.val)),D=Q(()=>s.val===void 0||Array.isArray(s.val)&&s.val.length===0),F=L(!1),H=m=>{if(Array.isArray(s.val))return s.val=Cn(s.val,m);s.val=m};return ae({name:"Select",class:()=>`flex rounded-lg button gap-2 justify-between focus-visible:mood-accent ${M.val}`,tabIndex:0,onclick:()=>F.val=!F.val,...z},a,()=>h.div({name:"Value Display",class:()=>`text-nowrap text-ellipsis overflow-hidden ${D.val?"text-swatch-700-foreground":""} ${c?"flex flex-wrap gap-1":""} ${F.val?"invisible":""}`},D.val?"None":Array.isArray(s.val)?c?s.val.map(m=>ae({class:"group mood-accent text-xs variant-soft rounded relative",onclick:y=>{y.stopPropagation(),H(m)}},h.span({class:"group-hover:opacity-25"},String(m)),h.i({class:"not-group-hover:hidden absolute right-1"},"close"))):s.val.map(m=>String(m)).join(", "):String(s.val)),p,te.svg({viewBox:"0 0 100 100",class:"size-4 flex-none",style:"stroke-linecap:round; stroke-linejoin:round;"},te.path({d:"M25,35L50,15L75,35",class:"stroke-current stroke-[10] fill-none",$hidden:()=>!I.val}),te.path({d:"M25,65L50,85L75,65",class:"stroke-current stroke-[10] fill-none",$hidden:()=>!I.val}),te.path({d:"M25,40L50,60L75,40",class:"stroke-current stroke-[10] fill-none",$hidden:I})),De({name:"Select Content",visible:F,direction:"none",class:()=>`left-1/2 -translate-x-1/2 min-w-full max-h-40 overflow-y-auto card vessel shadow-lg p-1 rounded-lg card glass select-none ${T.val}`},()=>h.ul({name:"Select Options",class:"flex flex-col"},r.map(m=>{const y=Q(()=>oe(s.val,m.value));return Tn(m,I,y,H)}))))}function Tn(r,s,c,a){return h.div({"$data-selected":c,class:"contents group"},h.span({name:"Magic divider",class:"h-[1px] mx-1 pointer-events-none bg-surface-500/15 group-first:hidden group-hover:invisible group-data-selected:invisible [*:hover_+_*_>_&]:invisible [*[data-selected]_+_*_>_&]:invisible "}),h.button({class:"flex gap-2 not-disabled:hover:bg-surface-500/20 not-disabled:focus-visible:bg-surface-500/20 not-disabled:focus-visible:focus-ring disabled:bg-transparent px-1 rounded cursor-pointer justify-between disabled:opacity-50 disabled:cursor-not-allowed items-center group-data-selected:mood-accent group-data-selected:!bg-mood-500/25",$disabled:()=>r.disabled,tabIndex:0,onclick:()=>a==null?void 0:a(r.value)},h.span({class:"text-nowrap"},r.name??String(r.value)),te.svg({viewBox:"0 0 100 100",class:"size-4 not-group-data-selected:invisible",style:"stroke-linecap:round; stroke-linejoin:round;",$hidden:()=>!s.val},te.path({d:"M20,60L40,80L80,20",class:"stroke-current stroke-[10] fill-none"})),h.div({class:"bg-current rounded-full size-2 m-0.75 aspect-square not-group-data-selected:invisible",$hidden:s})))}function An({class:r},s){const c=K(r),a=[...s.querySelectorAll("h1, h2, h3, h4, h5")],p=L(a[0]);return document.addEventListener("scroll",()=>{a.some((b,z)=>{if(b.getBoundingClientRect().bottom>s.scrollTop+112)return p.val=a[Math.max(z-1,0)],!0})}),h.ul({class:()=>`flex flex-col ${c.val}`},[...a].map(b=>{const z=parseInt(b.tagName.slice(1))-1;return h.li({onclick:()=>b.scrollIntoView({behavior:"smooth"}),"$data-indented":()=>z>0,"$data-selected":()=>p.val===b,style:`--indent: ${1+(z-1)*.5}rem;`,class:"group relative flex gap-4 cursor-pointer text-swatch-700-mood not-data-selected:hover:text-swatch-900-foreground data-selected:mood-accent data-selected:text-mood-500"},h.span({name:"Divider",class:"absolute h-full w-px left-0 bg-current/50 group-data-selected:bg-current not-group-data-indented:hidden group-hover:w-[4px] group-data-selected:w-[4px] transition-all"}),h.span({name:"Title",class:"group-data-indented:ml-(--indent) justify-start group-data-selected:font-semibold flex-1 py-0.5 z-1 transition-all"},b.textContent))}))}function Ae({trigger:r=[U.HOVER,U.FOCUS],direction:s=ue.BOTTOM,class:c,...a},...p){const b=K(c);return De({trigger:r,direction:s,class:()=>`!control variant-soft-outline badge glass px-2 py-1 max-w-xs text-xs flex ${b.val}`,...a},p)}function q(...r){const s=h.div({class:"language-typescript w-2xl *:scroll-m-21"},...r),c=An({class:"sticky top-24 w-xs not-xl:hidden"},s);return h.div({class:"flex gap-8 items-start"},s,c)}const En=`# State

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

To prevent triggering [reactive updates](http://localhost:5173/core/Derive), such as during a complex operation etc, assignments can be made to \`.rawVal\` instead. Effects can similarly refer to \`.rawVal\` to avoid creating a dependency.

\`\`\`typescript
num.rawVal++

console.log(num.val)
console.log(num.rawVal)
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
`;function $n(){return q(re({class:"language-typescript w-2xl *:scroll-m-21"},En))}const zn=Object.freeze(Object.defineProperty({__proto__:null,default:$n},Symbol.toStringTag,{value:"Module"})),On=`# Derive

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

In derived definitions where you want to _exclude_ some accessed states from reactive dependence you can utilise the state's \`.rawVal\` property.

This is most often useful for refining reactive chains to limit unnecessary re-execution for optimisation reasons.

\`\`\`typescript
const num = state(42)
const doubleNum = derive(() => num.val * 2)

derive(() => console.log(num.val, doubleNum.rawVal))

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
`;function xn(){return q(re({class:"language-typescript w-2xl *:scroll-m-21"},On))}const Ln=Object.freeze(Object.defineProperty({__proto__:null,default:xn},Symbol.toStringTag,{value:"Module"})),Fn=`# Elements

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

savant.add(document, container)
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
`;function In(){return q(re({class:"language-typescript w-2xl *:scroll-m-21"},Fn))}const Dn=Object.freeze(Object.defineProperty({__proto__:null,default:In},Symbol.toStringTag,{value:"Module"})),Rn=`# Components

> Create your own composable pieces.
`;function Bn(){return q(re({class:"language-typescript w-2xl *:scroll-m-21"},Rn))}const Hn=Object.freeze(Object.defineProperty({__proto__:null,default:Bn},Symbol.toStringTag,{value:"Module"})),Vn=`# Context

> Cascading data.

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

add(document.body, App())
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
 * Naively coerces to the given type. Apply type validation if necessary.
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
`;function Nn(){return q(re({class:"language-typescript w-2xl *:scroll-m-21"},Vn))}const qn=Object.freeze(Object.defineProperty({__proto__:null,default:Nn},Symbol.toStringTag,{value:"Module"}));function Un(){const r=L(`<div>
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
</div>`),s=h.textarea({value:r,oninput:c=>r.val=c.target.value,class:"control variant-soft-outline w-full h-64"});return q(h.h1("Converter"),h.blockquote(h.p("Create Savant code from HTML.")),h.h2("Overview"),s,V({content:"Tags"},()=>N({language:"typescript"})),V({content:"Components"},()=>"None"),V({content:"Code"},()=>N({language:"typescript"})))}const Wn=Object.freeze(Object.defineProperty({__proto__:null,default:Un},Symbol.toStringTag,{value:"Module"})),Gn=`# Router

> Manage site navigation.
`;function Zn(){return q(re({class:"language-typescript"},Gn))}const Kn=Object.freeze(Object.defineProperty({__proto__:null,default:Zn},Symbol.toStringTag,{value:"Module"}));function Xn(){const r=L("variant-filled"),s=L("mood-accent");return q(h.h1("Badge"),h.blockquote("Delivers small but important pieces of information."),h.h2("Design"),h.p("Badges are designed to be a small, unobtrusive elements that convey important information concisely. It is typically used to highlight new or unread items, notifications, or status updates."),h.p("Badges use a smaller font size and padding to make them the same height as standard text, ensuring it fits seamlessly into layouts."),h.p("Badges color the text slightly based on mood to indicate they are not interactive, differentiating them from small buttons which instead use the standard foreground text color."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},Xe({class:()=>`${r.val} ${s.val}`},"Demo Badge")),h.div({class:"flex flex-wrap gap-4 justify-center"},V({content:"Variant",class:"items-center"},G({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:r,class:"variant-outline w-48"})),V({content:"Mood",class:"items-center"},G({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:s,class:"variant-outline w-48"})))),()=>N({language:"ts"},`import { Badge } from "savant/ui"

Badge(
    { class: "${r.val} ${s.val}" },
    "Demo Badge",
)`),h.h2("Signature"),N({language:"ts"},`function Badge(
    props: HTMLElementProps,
    ...children: ChildDom[]
): HTMLElement`))}const Jn=Object.freeze(Object.defineProperty({__proto__:null,default:Xn},Symbol.toStringTag,{value:"Module"}));function Qn(){const r=L("variant-filled"),s=L("mood-accent"),c=L([]);return q(h.h1("Button"),h.blockquote("Performs some action on user click."),h.h2("Design"),h.p("Button components are used when a specific, clear and manual action needs to be performed by the user.."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},ae({class:()=>`${[r.val,s.val,...c.val].join(" ")}`},"Demo Button")),h.div({class:"flex flex-wrap gap-4 justify-center"},V({content:"Variant",class:"items-center"},G({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:r,class:"variant-outline w-48"})),V({content:"Mood",class:"items-center"},G({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:s,class:"variant-outline w-48"})),V({content:"Extras",class:"items-center"},G({options:[{value:"transition"},{value:"hover:raised"},{value:"active:lowered"}],value:c,class:"variant-outline w-48"})))),()=>N({language:"ts"},`import { Button } from "savant/ui"

Button(
    { class: "${[r.val,s.val,...c.val].join(" ")}" },
    "Demo Button",
)`),h.h2("Signature"),N({language:"ts"},`function Button(
    props: HTMLButtonProps,
    ...children: ChildDom[]
): HTMLButtonElement`))}const Yn=Object.freeze(Object.defineProperty({__proto__:null,default:Qn},Symbol.toStringTag,{value:"Module"}));function et(){const r=L("variant-soft-outline"),s=L("mood-none");return q(h.h1("Checkbox"),h.blockquote("Offers clear binary choices."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},Ie({class:()=>`w-48 ${r.val} ${s.val}`},"Demo Checkbox")),h.div({class:"flex flex-wrap gap-4 justify-center"},V({content:"Variant",class:"items-center"},G({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:r,class:"variant-outline w-48"})),V({content:"Mood",class:"items-center"},G({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:s,class:"variant-outline w-48"})))),()=>N({language:"ts"},`import { Checkbox } from "savant/ui"

Checkbox(
    { class: \`${r.val} ${s.val}\` },
    "Demo Checkbox",
)`),h.h2("Signature"),N({language:"ts"},`function Checkbox(
    props: {
        value: State<boolean> = state(false),
        required: boolean = false,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`))}const nt=Object.freeze(Object.defineProperty({__proto__:null,default:et},Symbol.toStringTag,{value:"Module"}));function tt(){const r=L("variant-outline"),s=L("mood-accent"),c=L(!0),a=L(50);return q(h.h1("Circular Progress Bar"),h.blockquote("Displays the progress state of a lengthy process."),h.h2("Design"),h.p("Circular Progress Bars are used to compactly provide feedback to the user on the current progress state of a lengthy process."),h.p("Circular Progress Bars default to matching the size of enclosing text flows, ensuring they fit seamlessly into layouts."),h.p("Circular Progress Bars can be given children which will be displayed within the circle. Such children should be short, typically a percentage or number. Anything longer should be placed beneath the progress bar."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},gn({progress:a,indefinite:c,class:()=>`${r.val} ${s.val}`},"Loading...")),h.div({class:"flex flex-wrap gap-4 justify-center"},V({content:"Variant",class:"items-center"},G({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:r,class:"variant-outline w-48"})),V({content:"Mood",class:"items-center"},G({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:s,class:"variant-outline w-48"})),V({content:"Progress",class:"items-center"},be({value:a,min:0,max:100,class:"variant-outline w-48"})),V({content:"Indefinite",class:"items-center"},Ie({value:c,class:"variant-outline w-48"},"Enabled")))),()=>N({language:"ts"},`import { CircularProgressBar } from "savant/ui"

CircularProgressBar(
    {
        progress: ${a.val},
        indefinite: ${c.val},
        class: "${r.val} ${s.val}"
    },
    "Loading...",
)`),h.h2("Signature"),N({language:"ts"},`function CircularProgressBar(
    {
        progress?: number = 50,
        indefinite?: boolean = false,

        ...restProps
    }: CircularProgressBarProps,
    ...children: ChildDom[]
): HTMLElement`))}const at=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"}));function rt(){return q(h.h1("Code"),h.blockquote("Simple code syntax highlighting via ",h.a({href:"https://prismjs.com",class:"anchor"},"PrismJS"),"."),mn({class:"mood-info p",icon:"info"},re({class:"language-typescript"},"Every code snippet in these docs uses the `Code` component.")),h.h2("Demo"),()=>N({language:"ts"},`import { Code } from "savant/ui"

Code(
    { language: "ts" },

    \`\\
import { Code } from "savant/ui"

Code(
    { language: "ts" },
    ...
)\`,
)`),h.h2("Signature"),N({language:"ts"},`function Code(
    props: { language: string, ...HTMLElementProps },
    ...children: ChildDom[]
): HTMLElement`))}const dt=Object.freeze(Object.defineProperty({__proto__:null,default:rt},Symbol.toStringTag,{value:"Module"}));function ut(){const r=L("text"),s=L("variant-soft-outline"),c=L("mood-none");return q(h.h1("Input"),h.blockquote("Direct entry of text or numbers."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex flex-col justify-center gap-8"},()=>be({value:L(r.val==="text"?"Example text":42),class:()=>`${s.val} ${c.val}`})),h.div({class:"flex flex-wrap gap-4 justify-center"},V({content:"Type",class:"items-center"},G({options:[{value:"text"},{value:"number"}],value:r,class:"variant-outline w-48"})),V({content:"Variant",class:"items-center"},G({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:s,class:"variant-outline w-48"})),V({content:"Mood",class:"items-center"},G({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:c,class:"variant-outline w-48"})))),()=>N({language:"ts"},`import { Input } from "savant/ui"

Input({
    value: state(${r.val==="text"?'"Example text"':42}),
    class: "${s.val} ${c.val}"
})`),h.h2("Signature"),N({language:"ts"},`function Input<T extends string | number>(
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
): HTMLElement`))}const st=Object.freeze(Object.defineProperty({__proto__:null,default:ut},Symbol.toStringTag,{value:"Module"}));function ot(){const r=L([U.CLICK]);return q(h.h1("Popup"),h.blockquote("Versatile dynamic content floating near its parent."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex justify-center flex-col gap-8 w-3xs"},ae({class:"variant-filled"},"Popup Trigger",()=>De({trigger:r.val,class:"card glass vessel flex flex-col shadow"},"Hello! Click outside me to close."))),h.div({class:"flex flex-wrap gap-4 justify-center"},V({content:"Trigger",class:"items-center"},G({options:[{value:U.CLICK},{value:U.HOVER},{value:U.HOVER_IN},{value:U.HOVER_OUT},{value:U.FOCUS},{value:U.FOCUS_IN},{value:U.FOCUS_OUT}],value:r,class:"variant-outline w-48"})))),()=>N({language:"ts"},`import { Button, Popup } from "savant/ui"

Button(
    {
        class: "variant-filled",
    },

    "Popup Trigger",

    () =>
        Popup(
            {
                trigger: ${JSON.stringify(r.val)},
                class: "card glass vessel flex flex-col shadow",
            },

            "Hello! Click outside me to close.",
        ),
),`),h.h2("Signature"),N({language:"ts"},`function Popup(
    props: {
        visible: State<boolean> = state(false),
        direction: PopupDirection = PopupDirection.BOTTOM,
        trigger: PopupTrigger = PopupTrigger.CLICK,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`))}const it=Object.freeze(Object.defineProperty({__proto__:null,default:ot},Symbol.toStringTag,{value:"Module"}));function ct(){const r=L("variant-soft-outline"),s=L("mood-none");return q(h.h1("Radio"),h.blockquote("Offers a clear and direct set of exclusive options."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},Mn({value:L("Option 1"),options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"}],class:()=>`w-48 ${r.val} ${s.val}`})),h.div({class:"flex flex-wrap gap-4 justify-center"},V({content:"Variant",class:"items-center"},G({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:r,class:"variant-outline w-48"})),V({content:"Mood",class:"items-center"},G({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:s,class:"variant-outline w-48"})))),()=>N({language:"ts"},`import { Radio } from "savant/ui"

Radio({
    value: state("Option 1"),
    options: [
        { value: "Option 1" },
        { value: "Option 2" },
        { value: "Option 3" },
    ],
    class: "${r.val} ${s.val}",
})`),h.h2("Signature"),N({language:"ts"},`function Radio<T>(
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
}`))}const lt=Object.freeze(Object.defineProperty({__proto__:null,default:ct},Symbol.toStringTag,{value:"Module"})),le={SINGLE:"single",MULTICHIPS:"multichips"};function ft(){const r=L(le.SINGLE),s=L("variant-soft-outline"),c=L("mood-none");return q(h.h1("Select"),h.blockquote("Enables compact selection of one or more options."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 flex flex-col justify-center gap-8 w-3xs h-48"},()=>G({value:r.val===le.SINGLE?L("Option 1"):L(["Option 1","Option 2"]),options:[{value:"Option 1"},{value:"Option 2",disabled:!0},{value:"Option 3"},{value:"Option 4"}],useChips:r.val===le.MULTICHIPS,class:()=>`${s.val} ${c.val}`})),h.div({class:"flex flex-wrap gap-4 justify-center"},V({content:"Type",class:"items-center"},G({options:[{value:"single"},{value:"multi"},{value:"multichips"}],value:r,class:"variant-outline w-48"})),V({content:"Variant",class:"items-center"},G({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:s,class:"variant-outline w-48"})),V({content:"Mood",class:"items-center"},G({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:c,class:"variant-outline w-48"})))),()=>N({language:"ts"},`import { Select } from "savant/ui"

Select({
    value: state(${r.val===le.SINGLE?'"Option 1"':'["Option 1", "Option 2"])'}),
    options: [
        { value: "Option 1" },
        { value: "Option 2", disabled: true },
        { value: "Option 3" },
        { value: "Option 4" },
    ],${r.val===le.MULTICHIPS?`
    useChips: true,`:""}
    class: "${s.val} ${c.val}",
})`),h.h2("Signature"),N({language:"ts"},`function Select<T>(
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
}`))}const pt=Object.freeze(Object.defineProperty({__proto__:null,default:ft},Symbol.toStringTag,{value:"Module"}));function ht(){return q(h.h1("Tooltip"),h.blockquote("Provides concise contextual extra information."),h.h2("Demo"),h.div({class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 flex flex-col gap-8 w-3xs h-48 justify-center"},ae({class:"text-accent-500 font-bold"},"Tooltip (Hover Me)",Ae({direction:"top",class:"left-1/2 -translate-x-1/2"},"Demo Tooltip")))),()=>N({language:"ts"},`import { Button, Tooltip } from "savant/ui"

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
)`),h.h2("Signature"),N({language:"ts"},`function Tooltip(
    props: {
        direction: PopupDirection = PopupDirection.BOTTOM,
        trigger: PopupTrigger = PopupTrigger.CLICK,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`))}const mt=Object.freeze(Object.defineProperty({__proto__:null,default:ht},Symbol.toStringTag,{value:"Module"}));function gt(){const r=L(""),s=L(""),c=L(!1),a=L(!1),p=L(!1);return vn({name:"Sign In",class:"flex flex-col gap-4"},h.span({class:"text-xl font-bold"},"Sign In"),V({content:"Username"},be({type:"username",value:r,placeholder:"Enter username...",required:!0,lead:Se("person"),class:"variant-outline"})),V({content:h.span({class:"flex flex-1 justify-between items-center"},"Password",ae({type:"button",class:"mood-accent text-mood-500"},"Forgot?"))},be({type:()=>a.val?"text":"password",value:s,placeholder:"Enter password...",required:!0,lead:Se("key"),trail:ae({onclick:()=>a.val=!a.val},Se({class:()=>`transition ${a.val?"":"text-swatch-700-foreground"}`},()=>a.val?"visibility":"visibility_off")),onValidityChanged:b=>p.val=b,class:"variant-outline"})),Ie({value:c,class:"variant-outline"},h.span({class:"text-mini text-swatch-700-mood"},"Remember Password")),h.div({class:"flex gap-4 justify-end"},ae({type:"button",class:"hover:variant-soft"},"Cancel"),ae({type:"button",class:"variant-filled mood-accent"},"Sign In")))}function vt(){return q(h.h1("Sign In"),h.blockquote("Example Sign In component."),h.h2("Demo"),h.div({class:"card vessel bg-zebra zebra-opacity-20 flex flex-col items-center gap-4"},h.div({class:"p-8 card vessel bg-background flex items-center"},gt())),h.h2("Code"),N({language:"typescript"},`function SignIn() {
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
}`))}const _t=Object.freeze(Object.defineProperty({__proto__:null,default:vt},Symbol.toStringTag,{value:"Module"})),Je=L(""),Re=L(window.location.pathname),Be=L(window.location.hash),Ue=L({}),We=L({}),bt="/",wt=()=>Re.val.slice(bt.length-1)+Be.val,yt=(r,{replace:s}={replace:!1})=>{const c=`${Je.val}${r}`;s?window.history.replaceState({},"",c):window.history.pushState({},"",c),Re.val=c.split("#")[0],Be.val=c.split("#").length>1?"#"+c.split("#")[1]:""};function kt({replace:r=!1,disabled:s=!1,onclick:c,href:a,class:p,...b},...z){const M=K(p);return h.a({href:a,onclick(T){T.preventDefault();const I=cn(a);s||I===void 0||(yt(String(I),{replace:r}),typeof c=="function"&&c.call(this,T))},tabIndex:0,class:()=>`not-disabled:focus-visible:focus-ring ${M.val}`,...b},...z)}const Pt=/:([^\\d|^/]([^/]+)?)/;let Me;function Ct({routes:r,basename:s}){const c=h.div({name:"Savant Router",style:"display: contents;"}),a=M=>{if(!M)return"";for(M.startsWith("/")||(M="/"+M);M!=="/"&&M.endsWith("/");)M=M.slice(0,M.length-1);return M=decodeURI(M),M},p=(M,T)=>{M=a(M),T=a(T);const I=M.split("/"),D={};let F=null;for(const H of r){const _=a(T+H.path).split("/");if(_.length!==I.length)continue;let m=!0;for(let y=0;y<_.length;y++){const v=_[y],C=I[y];if(Pt.test(v))D[decodeURIComponent(v.slice(1))]=decodeURIComponent(C);else if(C!==v){m=!1;break}}if(m){F=H;break}}return F||(F=r.find(H=>H.path==="*")||null),{route:F,params:D}},b=M=>{if(M.startsWith("?")&&(M=M.slice(1).trim()),!M)return{};const T={},I=M.split("&");for(const D of I){const[F,H]=D.split("=");T[decodeURIComponent(F)]=decodeURIComponent(H)}return T},z=()=>{const{route:M,params:T}=p(window.location.pathname+window.location.hash,s||"");if(!M){Me=void 0,c.replaceChildren(),ce(c,h.div("Could not find route"));return}if(M===Me){We.val=b(window.location.search),Ue.val=T;return}Me=M,We.rawVal=b(window.location.search),Ue.rawVal=T,c.replaceChildren(),ce(c,M.dom)};return window.onpopstate=z,Q(()=>{const M=Re.val,T=Be.val;(M||T)&&setTimeout(()=>{z()})}),Q(()=>{Je.val=a(s||"")}),c}const St="/Savant/assets/logo-BRWjpkZq.svg";function jt(){const r="flex gap-4 items-center";return h.header({name:"Header",class:"bg-background-50 fixed top-0 flex w-full justify-between gap-4 px-6 py-2 glass border-b border-surface-500/50 z-10"},h["left-content"]({class:r},h.img({src:St,class:"size-12 -m-2 not-dark:brightness-0"}),h.span({class:"text-xl font-bold"},"Savant"),Xe({class:"cursor-help variant-filled mood-info rounded-full control-sm"},h.i("construction"),Ae({class:"mood-info"},"Savant is still under construction"))),h["right-content"]({class:r},h.a({name:"GitHub",class:"control !rounded-full **:fill-current hover:variant-soft text-lg !p-2",href:"https://github.com/OscarCookeAbbott/Savant",target:"_blank"},te.svg({viewBox:"0 0 1024 1024",class:"size-[1em]"},te.path({transform:"scale(64)",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"})),Ae({class:"right-0"},"Savant GitHub"))))}function Mt({options:r,class:s,...c}){const a=Q(()=>decodeURI(wt()));return h.div({name:"Navbar",class:`p-6 flex flex-col overflow-y-auto fixed top-12 h-[calc(100%-3rem)] left-0 bg-background border-r border-surface-500/50 ${s}`,...c},r.map(p=>Qe(p,0,a)))}function Qe(r,s,c){var a;return[kt({href:r.path,disabled:r.path===void 0,onclick:()=>{window.scrollTo({top:0,left:0})},"$data-selected":()=>c.val===`${"/Savant/".slice(0,-1)}${r.path}`,"$data-group":()=>s===0&&r.children,"$data-indented":()=>s!==0,style:`--indent: ${s}rem;`,class:"relative flex gap-4 group text-swatch-700-mood data-selected:text-mood-500 data-group:font-semibold data-group:not-first:mt-6 data-group:mb-1 not-data-selected:hover:text-swatch-900-foreground data-selected:mood-accent data-selected:z-10"},h.span({name:"Divider",class:"absolute h-full w-px left-0 bg-current/50 group-data-selected:bg-current not-group-data-indented:hidden group-hover:w-1 group-data-selected:w-1 transition-all"}),h.span({name:"Title",class:"group-data-indented:ml-(--indent) justify-start group-data-selected:font-semibold flex-1 py-0.5 z-1 transition-all"},r.name)),(a=r.children)==null?void 0:a.map(p=>Qe(p,s+1,c))]}const Tt=`# Savant Core

> All the essentials for functional, declarative web apps.
`;function At(){return q(re({class:"language-typescript"},Tt))}const Et=`# Savant Routing

> Make site navigation easy.

## Overview

Savant provides a built-in, modular routing system that allows you to lay out your content however you prefer.

Using just the \`Router\` and \`Link\` components, you can get a single-page-app running in no time.

**Demo**

\`\`\`typescript
import { add } from "savant"
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

add(document.body, App())
\`\`\`
`;function $t(){return q(re({class:"language-typescript"},Et))}const zt=`# Savant UI

> Make great design effortless.
`;function Ot(){return q(re({class:"language-typescript"},zt))}const xt=`# Savant

> A refreshingly simple and smart web framework with pep!

Savant is a tiny (3kB), zero-dependency, pure-TypeScript and pure-DOM framework for reactive web development.

Using nothing but standard JS/TS functions and any existing tooling, _anybody_ can build a reactive website in minutes.

Inspired by the incredible [VanJS](https://vanjs.org).

## Counter Example

\`\`\`typescript
// Counter.ts
import { add, html, state } from "@savant/core"
import { Router } from "@savant/routing"

function Counter() {
	const value = state(0)

	return html.div(
		"Counter: ",
		value,
		" ",
		html.button({ onclick: () => ++value.val }, "👍"),
		html.button({ onclick: () => --value.val }, "👎"),
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

add(document.body, App())
\`\`\`
`;function Lt(){return q(re({class:"language-typescript w-2xl *:scroll-m-21"},xt))}const Ft=Object.assign({"./src/routes/1 core/1 State/index.ts":zn,"./src/routes/1 core/2 Derive/index.ts":Ln,"./src/routes/1 core/3 Elements/index.ts":Dn,"./src/routes/1 core/4 Components/index.ts":Hn,"./src/routes/1 core/5 Context/index.ts":qn,"./src/routes/1 core/6 Converter/index.ts":Wn}),It=Object.assign({"./src/routes/2 routing/1 Router/index.ts":Kn}),Dt=Object.assign({"./src/routes/3 ui/Badge/index.ts":Jn,"./src/routes/3 ui/Button/index.ts":Yn,"./src/routes/3 ui/Checkbox/index.ts":nt,"./src/routes/3 ui/Circular Progress Bar/index.ts":at,"./src/routes/3 ui/Code/index.ts":dt,"./src/routes/3 ui/Input/index.ts":st,"./src/routes/3 ui/Popup/index.ts":it,"./src/routes/3 ui/Radio/index.ts":lt,"./src/routes/3 ui/Select/index.ts":pt,"./src/routes/3 ui/Tooltip/index.ts":mt}),Rt=Object.assign({"./src/routes/examples/Sign In/index.ts":_t}),me=r=>Object.entries(r).map(([s,c])=>{const a=s.replace("./src/routes/","").replace("/index.ts",""),p=a.split("/").slice(-1)[0].replace(/^\d+\s/,""),b=a.split("/").slice(0,-1).map(z=>z.replace(/^\d+\s/,"").replace(" ","-")).join("/");return{name:p,path:`/#!/${b}/${p}`,dom:c.default}}),Ye=[{name:"Introduction",path:"/",dom:Lt},{name:"Core",path:"/#!/core",dom:At,children:me(Ft)},{name:"Routing",path:"/#!/routing",dom:$t,children:me(It)},{name:"Savant UI",path:"/#!/ui",dom:Ot,children:me(Dt)},{name:"Examples",children:me(Rt)}],Bt=Ye.flatMap(r=>[...r.path?[r]:[],...r.children??[]]);function Ht(){return h.div({name:"App",class:"flex flex-col relative size-full"},jt(),h.div({class:"flex flex-1"},Mt({options:Ye,class:"min-w-64 not-lg:hidden"}),h.div({class:"lg:ml-64 overflow-clip flex flex-1 justify-center"},h.div({class:"flex flex-col px-8 pt-24 pb-16 gap-4"},Ct({basename:"/Savant/".slice(0,-1),routes:Bt})))))}ce(document.body,Ht())});export default Vt();
