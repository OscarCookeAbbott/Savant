var xn=(a,u)=>()=>(u||a((u={exports:{}}).exports,u),u.exports);var Kr=xn((Qr,Pe)=>{(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))n(c);new MutationObserver(c=>{for(const g of c)if(g.type==="childList")for(const x of g.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&n(x)}).observe(document,{childList:!0,subtree:!0});function o(c){const g={};return c.integrity&&(g.integrity=c.integrity),c.referrerPolicy&&(g.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?g.credentials="include":c.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function n(c){if(c.ep)return;c.ep=!0;const g=o(c);fetch(c.href,g)}})();let Tn=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},H=function(a){var u=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,n={},c={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function P(m){return m instanceof g?new g(m.type,P(m.content),m.alias):Array.isArray(m)?m.map(P):m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(P){return Object.prototype.toString.call(P).slice(8,-1)},objId:function(P){return P.__id||Object.defineProperty(P,"__id",{value:++o}),P.__id},clone:function P(m,w){let v,y;switch(w=w||{},c.util.type(m)){case"Object":if(y=c.util.objId(m),w[y])return w[y];for(let M in v={},w[y]=v,m)m.hasOwnProperty(M)&&(v[M]=P(m[M],w));return v;case"Array":return y=c.util.objId(m),w[y]?w[y]:(v=[],w[y]=v,m.forEach(function(M,L){v[L]=P(M,w)}),v);default:return m}},getLanguage:function(P){for(;P;){let m=u.exec(P.className);if(m)return m[1].toLowerCase();P=P.parentElement}return"none"},setLanguage:function(P,m){P.className=P.className.replace(RegExp(u,"gi"),""),P.classList.add("language-"+m)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(P){let m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(P.stack)||[])[1];if(m){let w=document.getElementsByTagName("script");for(let v in w)if(w[v].src==m)return w[v]}return null}},isActive:function(P,m,w){for(let v="no-"+m;P;){let y=P.classList;if(y.contains(m))return!0;if(y.contains(v))return!1;P=P.parentElement}return!!w}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(P,m){let w=c.util.clone(c.languages[P]);for(let v in m)w[v]=m[v];return w},insertBefore:function(P,m,w,v){let y=(v=v||c.languages)[P],M={};for(let e in y)if(y.hasOwnProperty(e)){if(e==m)for(let t in w)w.hasOwnProperty(t)&&(M[t]=w[t]);w.hasOwnProperty(e)||(M[e]=y[e])}let L=v[P];return v[P]=M,c.languages.DFS(c.languages,function(e,t){t===L&&e!=P&&(this[e]=M)}),M},DFS:function P(m,w,v,y){y=y||{};let M=c.util.objId;for(let L in m)if(m.hasOwnProperty(L)){w.call(m,L,m[L],v||L);let e=m[L],t=c.util.type(e);t!=="Object"||y[M(e)]?t!=="Array"||y[M(e)]||(y[M(e)]=!0,P(e,w,L,y)):(y[M(e)]=!0,P(e,w,null,y))}}},plugins:{},highlightAll:function(P,m){c.highlightAllUnder(document,P,m)},highlightAllUnder:function(P,m,w){let v={callback:w,container:P,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};c.hooks.run("before-highlightall",v),v.elements=Array.prototype.slice.apply(v.container.querySelectorAll(v.selector)),c.hooks.run("before-all-elements-highlight",v);for(var y,M=0;y=v.elements[M++];)c.highlightElement(y,m===!0,v.callback)},highlightElement:function(P,m,w){let v=c.util.getLanguage(P),y=c.languages[v];c.util.setLanguage(P,v);let M=P.parentElement;M&&M.nodeName.toLowerCase()==="pre"&&c.util.setLanguage(M,v);let L={element:P,language:v,grammar:y,code:P.textContent};function e(t){L.highlightedCode=t,c.hooks.run("before-insert",L),L.element.innerHTML=L.highlightedCode,c.hooks.run("after-highlight",L),c.hooks.run("complete",L),w&&w.call(L.element)}if(c.hooks.run("before-sanity-check",L),(M=L.element.parentElement)&&M.nodeName.toLowerCase()==="pre"&&!M.hasAttribute("tabindex")&&M.setAttribute("tabindex","0"),!L.code)return c.hooks.run("complete",L),void(w&&w.call(L.element));if(c.hooks.run("before-highlight",L),L.grammar)if(m&&a.Worker){let t=new Worker(c.filename);t.onmessage=function(r){e(r.data)},t.postMessage(JSON.stringify({language:L.language,code:L.code,immediateClose:!0}))}else e(c.highlight(L.code,L.grammar,L.language));else e(c.util.encode(L.code))},highlight:function(P,m,w){let v={code:P,grammar:m,language:w};if(c.hooks.run("before-tokenize",v),!v.grammar)throw new Error('The language "'+v.language+'" has no grammar.');return v.tokens=c.tokenize(v.code,v.grammar),c.hooks.run("after-tokenize",v),g.stringify(c.util.encode(v.tokens),v.language)},tokenize:function(P,m){let w=m.rest;if(w){for(let y in w)m[y]=w[y];delete m.rest}let v=new j;return S(v,v.head,P),z(P,v,m,v.head,0),function(y){for(var M=[],L=y.head.next;L!==y.tail;)M.push(L.value),L=L.next;return M}(v)},hooks:{all:{},add:function(P,m){let w=c.hooks.all;w[P]=w[P]||[],w[P].push(m)},run:function(P,m){let w=c.hooks.all[P];if(w&&w.length)for(var v,y=0;v=w[y++];)v(m)}},Token:g};function g(P,m,w,v){this.type=P,this.content=m,this.alias=w,this.length=0|(v||"").length}function x(P,m,w,v){P.lastIndex=m;let y=P.exec(w);if(y&&v&&y[1]){let M=y[1].length;y.index+=M,y[0]=y[0].slice(M)}return y}function z(P,m,w,v,y,M){for(let s in w)if(w.hasOwnProperty(s)&&w[s]){let f=w[s];f=Array.isArray(f)?f:[f];for(let d=0;d<f.length;++d){if(M&&M.cause==s+","+d)return;let p=f[d],b=p.inside,k=!!p.lookbehind,A=!!p.greedy,T=p.alias;if(A&&!p.pattern.global){let l=p.pattern.toString().match(/[imsuy]*$/)[0];p.pattern=RegExp(p.pattern.source,l+"g")}for(let l=p.pattern||p,C=v.next,O=y;C!==m.tail&&!(M&&O>=M.reach);O+=C.value.length,C=C.next){let B=C.value;if(m.length>P.length)return;if(!(B instanceof g)){var L,e=1;if(A){if(!(L=x(l,O,P,k))||L.index>=P.length)break;var t=L.index,r=L.index+L[0].length,i=O;for(i+=C.value.length;t>=i;)i+=(C=C.next).value.length;if(O=i-=C.value.length,C.value instanceof g)continue;for(let _=C;_!==m.tail&&(i<r||typeof _.value=="string");_=_.next)e++,i+=_.value.length;e--,B=P.slice(O,i),L.index-=O}else if(!(L=x(l,0,B,k)))continue;t=L.index;let V=L[0],R=B.slice(0,t),G=B.slice(t+V.length),K=O+B.length;M&&K>M.reach&&(M.reach=K);let X=C.prev;if(R&&(X=S(m,X,R),O+=R.length),F(m,X,e),C=S(m,X,new g(s,b?c.tokenize(V,b):V,T,V)),G&&S(m,C,G),e>1){let _={cause:s+","+d,reach:K};z(P,m,w,C.prev,O,_),M&&_.reach>M.reach&&(M.reach=_.reach)}}}}}}function j(){let P={value:null,prev:null,next:null},m={value:null,prev:P,next:null};P.next=m,this.head=P,this.tail=m,this.length=0}function S(P,m,w){let v=m.next,y={value:w,prev:m,next:v};return m.next=y,v.prev=y,P.length++,y}function F(P,m,w){for(var v=m.next,y=0;y<w&&v!==P.tail;y++)v=v.next;m.next=v,v.prev=m,P.length-=y}if(a.Prism=c,g.stringify=function P(m,w){if(typeof m=="string")return m;if(Array.isArray(m)){let L="";return m.forEach(function(e){L+=P(e,w)}),L}let v={type:m.type,content:P(m.content,w),tag:"span",classes:["token",m.type],attributes:{},language:w},y=m.alias;y&&(Array.isArray(y)?Array.prototype.push.apply(v.classes,y):v.classes.push(y)),c.hooks.run("wrap",v);let M="";for(let L in v.attributes)M+=" "+L+'="'+(v.attributes[L]||"").replace(/"/g,"&quot;")+'"';return"<"+v.tag+' class="'+v.classes.join(" ")+'"'+M+">"+v.content+"</"+v.tag+">"},!a.document)return a.addEventListener&&(c.disableWorkerMessageHandler||a.addEventListener("message",function(P){let m=JSON.parse(P.data),w=m.language,v=m.code,y=m.immediateClose;a.postMessage(c.highlight(v,c.languages[w],w)),y&&a.close()},!1)),c;let E=c.util.currentScript();function D(){c.manual||c.highlightAll()}if(E&&(c.filename=E.src,E.hasAttribute("data-manual")&&(c.manual=!0)),!c.manual){let P=document.readyState;P==="loading"||P==="interactive"&&E&&E.defer?document.addEventListener("DOMContentLoaded",D):window.requestAnimationFrame?window.requestAnimationFrame(D):window.setTimeout(D,16)}return c}(Tn);typeof Pe<"u"&&Pe.exports&&(Pe.exports=H),typeof global<"u"&&(global.Prism=H);H.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},H.languages.markup.tag.inside["attr-value"].inside.entity=H.languages.markup.entity,H.languages.markup.doctype.inside["internal-subset"].inside=H.languages.markup,H.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(H.languages.markup.tag,"addInlined",{value:function(a,u){let o={};o["language-"+u]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:H.languages[u]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;let n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};n["language-"+u]={pattern:/[\s\S]+/,inside:H.languages[u]};let c={};c[a]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return a}),"i"),lookbehind:!0,greedy:!0,inside:n},H.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(H.languages.markup.tag,"addAttribute",{value:function(a,u){H.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(`(^|["'\\s])(?:`+a+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[u,"language-"+u],inside:H.languages[u]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),H.languages.html=H.languages.markup,H.languages.mathml=H.languages.markup,H.languages.svg=H.languages.markup,H.languages.xml=H.languages.extend("markup",{}),H.languages.ssml=H.languages.xml,H.languages.atom=H.languages.xml,H.languages.rss=H.languages.xml;(function(a){let u=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+u.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+u.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+u.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+u.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:u,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;let o=a.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))})(H);H.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};H.languages.javascript=H.languages.extend("clike",{"class-name":[H.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),H.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,H.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:H.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:H.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:H.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:H.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:H.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),H.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:H.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),H.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),H.languages.markup&&(H.languages.markup.tag.addInlined("script","javascript"),H.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),H.languages.js=H.languages.javascript;(function(a){a.languages.typescript=a.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),a.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete a.languages.typescript.parameter,delete a.languages.typescript["literal-property"];let u=a.languages.extend("typescript",{});delete u["class-name"],a.languages.typescript["class-name"].inside=u,a.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:u}}}}),a.languages.ts=a.languages.typescript})(H);const $e="savant-context-request",Ae="context-",Je="context-out-",He=new WeakMap;function En(a,u,o){const c=pn(a,u)===void 0&&Ve(a,u);fn(a,u,o)&&c&&c.triggerRecheck.val++}function zn(a,u){const o=Mn(a,u),n=$(o);return ee(()=>{if(o.triggerRecheck.val){const c=Ve(a,u);if(c===n.val)return;n.val=c}}),On(ee(()=>{var c;return(c=n.val)==null?void 0:c.val}))}function jn(a,u){const o=Ne(a);if(o===void 0)return;const n=o.contexts.get(u);n!==void 0&&(o.contexts.delete(u),o.contexts.size===1&&(He.delete(a),a.removeEventListener($e,o.listener)),n.triggerRecheck.val++)}function fn(a,u,o){const n=Ne(a);if(n===void 0){const g=j=>{const S=j,F=pn(a,S.detail.key);F!==void 0&&(S.detail.context=F,j.stopPropagation())};a.addEventListener($e,g);const x=Object.assign($(o),{triggerRecheck:$(0)}),z={listener:g,contexts:new Map([[u,x]])};return He.set(a,z),x}const c=n.contexts.get(u);if(c===void 0){const g=Object.assign($(o),{triggerRecheck:$(0)});return n.contexts.set(u,g),g}return c.rawVal!==o&&(c.val=o),c}function Mn(a,u){const o=Ve(a,u);return o!==void 0?o:fn(a,u,void 0)}function Ve(a,u){const o=new CustomEvent($e,{bubbles:!0,cancelable:!0,detail:{key:u,context:void 0}});return a.dispatchEvent(o),o.detail.context}function Ne(a){return He.get(a)}function pn(a,u){var o;return(o=Ne(a))==null?void 0:o.contexts.get(u)}function On(a){return Object.assign(a,{triggerRecheck:$(0)})}class ce{constructor(u,o){this._rawVal=u,this._oldVal=u,this._bindings=[],this._listeners=[],this._onDestroy=o}set val(u){var o;if((o=te==null?void 0:te._setters)==null||o.add(this),u!==this._rawVal){if(this._rawVal=u,this._bindings.length+this._listeners.length===0){this._oldVal=u;return}ve==null||ve.add(this),me=hn(me,this,$n)}}get val(){var u;return(u=te==null?void 0:te._getters)==null||u.add(this),this._rawVal}set rawVal(u){if(u!==this._rawVal&&(this._rawVal=u,this._bindings.length+this._listeners.length===0)){this._oldVal=u;return}}get rawVal(){return this._rawVal}get oldVal(){var u;return(u=te==null?void 0:te._getters)==null||u.add(this),this._oldVal}}const Ln=1e3,Fn={isConnected:!0};let me,ve,te,oe,_e;const xe={};function $(a,u){return new ce(a,u)}function ee(a,u){const o={_getters:new Set,_setters:new Set},n=$(Ue(a,o,void 0),u),c={func:a,state:n,_dom:void 0};c._dom||(oe?oe.push(c):c._dom=document.getRootNode().firstChild);for(const g of o._getters)o._setters.has(g)||(qe(g),g._listeners.push(c));return n}function he(a,...u){for(const o of u.flat(1/0)){let n;o instanceof ce?n=pe(()=>o.val):typeof o=="function"?n=pe(o):o instanceof Node?n=o:["boolean","string","number","bigint"].includes(typeof o)&&(n=String(o)),n!=null&&a.append(n)}return a}const h=new Proxy({},We()),re=new Proxy({},We("http://www.w3.org/2000/svg"));new Proxy({},We("http://www.w3.org/1998/Math/MathML"));function Y(a){return typeof a=="function"?ee(a):a instanceof ce?ee(()=>a.val):ee(()=>a)}function In(a){return a instanceof ce?a.val:typeof a=="function"?a():a}function hn(a,u,o,n){return a||setTimeout(o,n),(a??new Set).add(u)}function Ue(a,u,o){const n=te;te=u;const c=a(o);return te=n,c}function Ce(a){return a.filter(u=>{var o;return(o=u._dom)==null?void 0:o.isConnected})}function qe(a){_e=hn(_e,a,()=>{var u;for(const o of _e??[])o._bindings=Ce(o._bindings),o._listeners=Ce(o._listeners),o._bindings.length===0&&o._listeners.length===0&&((u=o._onDestroy)==null||u.call(o));_e=void 0},Ln)}function pe(a,u){const o={_getters:new Set,_setters:new Set},n={func:a,state:void 0,_dom:void 0},c=oe;oe=[];const g=Ue(a,o,u),x=(g??document)instanceof Node?g:new Text(String(g));for(const z of o._getters)o._setters.has(z)||(qe(z),z._bindings.push(n));for(const z of oe)z._dom=x;return oe=c,n._dom=x}function Bn(a,u,o){const n={_getters:new Set,_setters:new Set};u.val=Ue(a,n,u.rawVal);const c={func:a,state:u,_dom:o};c._dom||(oe?oe.push(c):c._dom=Fn);for(const g of n._getters)n._setters.has(g)||(qe(g),g._listeners.push(c));return u}function Rn(a,u,o,...n){var S;const c=Object.getPrototypeOf(o)===Object.prototype,[{is:g,...x},...z]=c?[o,n]:[{},[o,...n]],j=a?document.createElementNS(a,u,{is:g}):document.createElement(u,{is:g});for(let[F,E]of Object.entries(x)){const D=F.startsWith("$");F=D?F.slice(1):F;const P=y=>y?Object.getOwnPropertyDescriptor(y,F)??P(Object.getPrototypeOf(y)):void 0,m=`${u},${F}`,w=xe[m]??(xe[m]=(S=P(Object.getPrototypeOf(j)))==null?void 0:S.set),v=F.startsWith("on")?(y,M)=>{const L=F.slice(2);M&&j.removeEventListener(L,M),j.addEventListener(L,y)}:(w==null?void 0:w.bind(j))??j.setAttribute.bind(j,F);if(F.startsWith(Je)){const y=F.slice(Je.length);setTimeout(()=>{const M=zn(j,y);typeof E=="object"&&E instanceof ce?E.val=M.val:typeof E=="function"?E(M):console.warn(`Context out property "${F}" on element <${u}> expects a function or State, but got ${typeof E}.`)});continue}if(F.startsWith(Ae)){pe(()=>(!D||typeof E=="object"&&E instanceof ce&&E.val?En(j,F.slice(Ae.length),E):jn(j,F.slice(Ae.length)),j));continue}if(!F.startsWith("on")&&typeof E=="function"&&(E=ee(E)),typeof E=="object"&&E instanceof ce){pe(()=>(!D||E.val?v(E.val,E._oldVal):j.removeAttribute(F),j));continue}D?pe(()=>(E.val?v(E):j.removeAttribute(F),j)):v(E)}return he(j,z)}function Dn(a,u){if(!u)return a.remove();if(u!==a)return a.replaceWith(u)}function $n(){let u=0,o=[...me??[]].filter(c=>c.rawVal!==c._oldVal);do{ve=new Set;const c=new Set(o.flatMap(g=>g._listeners=Ce(g._listeners)));for(const g of c)Bn(g.func,g.state,g._dom),g._dom=void 0}while(++u<100&&(o=[...ve??[]]).length>0);const n=[...me??[]].filter(c=>c.rawVal!==c._oldVal);me=void 0;for(const c of new Set(n.flatMap(g=>g._bindings=Ce(g._bindings))))Dn(c._dom,pe(c.func,c._dom)),c._dom=void 0;for(const c of n)c._oldVal=c.rawVal}function We(a){return{get:(u,o)=>Rn.bind(void 0,a,o)}}function gn({class:a,...u},...o){const n=Y(a);return h.span({class:()=>`badge flex items-center gap-1 select-none ${n.val}`,...u},o)}function ue({class:a,...u},...o){const n=Y(a);return h.button({tabIndex:0,class:()=>`button flex items-center gap-2 select-none ${n.val}`,...u},o)}function Hn({icon:a,class:u,...o},...n){const c=Y(u);return h.div({class:()=>`flex items-center control variant-soft-outline text-swatch-700-mood gap-2 ${c.val}`,...o},h.i({class:"text-mood-500"},a),n)}function Ge({value:a=$(!1),required:u,class:o,...n},...c){const g=Y(o);return h.div({name:"Checkbox",onclick:()=>a.val=!a.val,"$data-selected":a,class:()=>{var x;return`flex cursor-pointer justify-between items-center gap-2 select-none group ${(x=g.val)==null?void 0:x.split(" ").filter(z=>!z.includes("variant")).join(" ")}`},...n},c,ue({role:"checkbox",type:"button",tabIndex:0,class:()=>{var x;return`button size-5 !rounded-md aspect-square focus-visible:mood-accent !p-0.5 group-has-invalid:mood-critical ${(x=g.val)==null?void 0:x.split(" ").filter(z=>z.includes("variant")).join(" ")}`}},re.svg({viewBox:"0 0 100 100",class:"size-4 not-group-data-selected:hidden",style:"stroke-linecap:round; stroke-linejoin:round;"},re.path({d:"M20,60L40,80L80,20",class:"stroke-current stroke-[10] fill-none"}))),h.input({type:"checkbox",checked:a,required:u,hidden:!0}))}function Vn({progress:a=50,indefinite:u=!1,class:o,...n},...c){const g=Y(o),x=Y(a),z=Y(u);return h.div({name:"Circular Progress Bar",style:"--progress-bar-stroke-width: 2px",class:()=>`group inline-block relative min-w-[1em] min-h-[1em] rounded-full [.variant-outline]:ring-[length:var(--progress-bar-stroke-width)] [.variant-soft-outline]:ring-[length:var(--progress-bar-stroke-width)] !p-0 ${g.val}`,...n},re.svg({style:"padding: calc(var(--progress-bar-stroke-width) * 0.5)",class:"absolute inset-0 -rotate-90",viewBox:"0 0 36 36"},re.circle({style:()=>`cx: 50%; cy: 50%; r: 50%; stroke-dasharray: calc(1% * pi * ${x.val}) calc(1% * pi * (100 - ${x.val}));`,class:()=>`origin-center fill-none stroke-current stroke-[length:var(--progress-bar-stroke-width)] not-group-[.variant-filled]:text-mood-500 ${z.val?"animate-spin":""}`,"stroke-linecap":"round"})),h.span({class:"relative text-xs text-center m-[calc(2_*_var(--progress-bar-stroke-width))] aspect-square flex items-center justify-center h-full"},c))}function W({language:a,class:u,...o},...n){const c=Y(u),g=h.pre({class:c.val,...o},h.code({class:`language-${a}`},n));return Prism.highlightAllUnder(g),g}function Nn({class:a,...u},...o){const n=Y(a);return h.form({class:()=>`flex flex-col gap-4 ${n.val}`,...u},o)}const Te=(a,...u)=>h.i(a,u);function be({value:a=$(void 0),type:u=a.rawVal!==void 0?typeof a.rawVal:"text",placeholder:o=`Enter ${u}...`,required:n=!1,lead:c,trail:g,inputProps:x,onValueChanged:z,onValidityChanged:j,class:S,...F},...E){const D=Y(S),P=w=>{var y;const v=(y=w.target)==null?void 0:y.value;typeof a.val=="number"&&Number(v)?a.val=Number(v):typeof a.val=="string"&&(a.val=v),z==null||z(a.rawVal),j==null||j(m.checkValidity())},m=h.input({id:"input",class:"input flex-1 min-w-0",type:u,value:()=>a.val??"",oninput:P,placeholder:o,required:n,...x});return h.div({name:"Text Input",class:()=>`control flex p-0 *:first:pl-2 *:last:pr-2 gap-2 *:py-1 has-focus-visible:mood-accent has-invalid:has-invalid:mood-critical ${D.val}`,...F},()=>["boolean","string","number","bigint"].includes(typeof c)?h.label({for:"input"},h.span(c)):c!=null?h.label({for:"input"},c):void 0,m,E,()=>["boolean","string","number","bigint"].includes(typeof g)?h.label({for:"input"},h.span(g)):g!=null?h.label({for:"input"},g):void 0)}function q({content:a,class:u,...o},...n){const c=Y(u);return h.div({name:"Label",class:()=>`flex flex-col gap-1 ${c.val}`},h.label({class:"flex items-center text-mini text-swatch-700-mood",...o},a),n)}var Qe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mn(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var ye={exports:{}},Un=ye.exports,Ye;function qn(){return Ye||(Ye=1,function(a){(function(){function u(e){var t={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",type:"string"},rawPrefixHeaderId:{defaultValue:!1,describe:'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',type:"boolean"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},rawHeaderId:{defaultValue:!1,describe:`Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,describe:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,describe:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,describe:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,describe:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,describe:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",describe:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,describe:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,describe:"Open all links in new windows",type:"boolean"},backslashEscapesHTMLTags:{defaultValue:!1,describe:"Support for HTML Tag escaping. ex: <div>foo</div>",type:"boolean"},emoji:{defaultValue:!1,describe:"Enable emoji support. Ex: `this is a :smile: emoji`",type:"boolean"},underline:{defaultValue:!1,describe:"Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",type:"boolean"},ellipsis:{defaultValue:!0,describe:"Replaces three dots with the ellipsis unicode character",type:"boolean"},completeHTMLDocument:{defaultValue:!1,describe:"Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",type:"boolean"},metadata:{defaultValue:!1,describe:"Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",type:"boolean"},splitAdjacentBlockquotes:{defaultValue:!1,describe:"Split adjacent blockquote blocks",type:"boolean"}};if(e===!1)return JSON.parse(JSON.stringify(t));var r={};for(var i in t)t.hasOwnProperty(i)&&(r[i]=t[i].defaultValue);return r}function o(){var e=u(!0),t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=!0);return t}var n={},c={},g={},x=u(!0),z="vanilla",j={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0,backslashEscapesHTMLTags:!0,emoji:!0,splitAdjacentBlockquotes:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:u(!0),allOn:o()};n.helper={},n.extensions={},n.setOption=function(e,t){return x[e]=t,this},n.getOption=function(e){return x[e]},n.getOptions=function(){return x},n.resetOptions=function(){x=u(!0)},n.setFlavor=function(e){if(!j.hasOwnProperty(e))throw Error(e+" flavor was not found");n.resetOptions();var t=j[e];z=e;for(var r in t)t.hasOwnProperty(r)&&(x[r]=t[r])},n.getFlavor=function(){return z},n.getFlavorOptions=function(e){if(j.hasOwnProperty(e))return j[e]},n.getDefaultOptions=function(e){return u(e)},n.subParser=function(e,t){if(n.helper.isString(e))if(typeof t<"u")c[e]=t;else{if(c.hasOwnProperty(e))return c[e];throw Error("SubParser named "+e+" not registered!")}},n.extension=function(e,t){if(!n.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=n.helper.stdExtName(e),n.helper.isUndefined(t)){if(!g.hasOwnProperty(e))throw Error("Extension named "+e+" is not registered!");return g[e]}else{typeof t=="function"&&(t=t()),n.helper.isArray(t)||(t=[t]);var r=S(t,e);if(r.valid)g[e]=t;else throw Error(r.error)}},n.getAllExtensions=function(){return g},n.removeExtension=function(e){delete g[e]},n.resetExtensions=function(){g={}};function S(e,t){var r=t?"Error in "+t+" extension->":"Error in unnamed extension",i={valid:!0,error:""};n.helper.isArray(e)||(e=[e]);for(var s=0;s<e.length;++s){var f=r+" sub-extension "+s+": ",d=e[s];if(typeof d!="object")return i.valid=!1,i.error=f+"must be an object, but "+typeof d+" given",i;if(!n.helper.isString(d.type))return i.valid=!1,i.error=f+'property "type" must be a string, but '+typeof d.type+" given",i;var p=d.type=d.type.toLowerCase();if(p==="language"&&(p=d.type="lang"),p==="html"&&(p=d.type="output"),p!=="lang"&&p!=="output"&&p!=="listener")return i.valid=!1,i.error=f+"type "+p+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',i;if(p==="listener"){if(n.helper.isUndefined(d.listeners))return i.valid=!1,i.error=f+'. Extensions of type "listener" must have a property called "listeners"',i}else if(n.helper.isUndefined(d.filter)&&n.helper.isUndefined(d.regex))return i.valid=!1,i.error=f+p+' extensions must define either a "regex" property or a "filter" method',i;if(d.listeners){if(typeof d.listeners!="object")return i.valid=!1,i.error=f+'"listeners" property must be an object but '+typeof d.listeners+" given",i;for(var b in d.listeners)if(d.listeners.hasOwnProperty(b)&&typeof d.listeners[b]!="function")return i.valid=!1,i.error=f+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+b+" must be a function but "+typeof d.listeners[b]+" given",i}if(d.filter){if(typeof d.filter!="function")return i.valid=!1,i.error=f+'"filter" must be a function, but '+typeof d.filter+" given",i}else if(d.regex){if(n.helper.isString(d.regex)&&(d.regex=new RegExp(d.regex,"g")),!(d.regex instanceof RegExp))return i.valid=!1,i.error=f+'"regex" property must either be a string or a RegExp object, but '+typeof d.regex+" given",i;if(n.helper.isUndefined(d.replace))return i.valid=!1,i.error=f+'"regex" extensions must implement a replace string or function',i}}return i}n.validateExtension=function(e){var t=S(e,null);return t.valid?!0:(console.warn(t.error),!1)},n.hasOwnProperty("helper")||(n.helper={}),n.helper.isString=function(e){return typeof e=="string"||e instanceof String},n.helper.isFunction=function(e){var t={};return e&&t.toString.call(e)==="[object Function]"},n.helper.isArray=function(e){return Array.isArray(e)},n.helper.isUndefined=function(e){return typeof e>"u"},n.helper.forEach=function(e,t){if(n.helper.isUndefined(e))throw new Error("obj param is required");if(n.helper.isUndefined(t))throw new Error("callback param is required");if(!n.helper.isFunction(t))throw new Error("callback param must be a function/closure");if(typeof e.forEach=="function")e.forEach(t);else if(n.helper.isArray(e))for(var r=0;r<e.length;r++)t(e[r],r,e);else if(typeof e=="object")for(var i in e)e.hasOwnProperty(i)&&t(e[i],i,e);else throw new Error("obj does not seem to be an array or an iterable object")},n.helper.stdExtName=function(e){return e.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()};function F(e,t){var r=t.charCodeAt(0);return"¨E"+r+"E"}n.helper.escapeCharactersCallback=F,n.helper.escapeCharacters=function(e,t,r){var i="(["+t.replace(/([\[\]\\])/g,"\\$1")+"])";r&&(i="\\\\"+i);var s=new RegExp(i,"g");return e=e.replace(s,F),e},n.helper.unescapeHTMLEntities=function(e){return e.replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")};var E=function(e,t,r,i){var s=i||"",f=s.indexOf("g")>-1,d=new RegExp(t+"|"+r,"g"+s.replace(/g/g,"")),p=new RegExp(t,s.replace(/g/g,"")),b=[],k,A,T,l,C;do for(k=0;T=d.exec(e);)if(p.test(T[0]))k++||(A=d.lastIndex,l=A-T[0].length);else if(k&&!--k){C=T.index+T[0].length;var O={left:{start:l,end:A},match:{start:A,end:T.index},right:{start:T.index,end:C},wholeMatch:{start:l,end:C}};if(b.push(O),!f)return b}while(k&&(d.lastIndex=A));return b};n.helper.matchRecursiveRegExp=function(e,t,r,i){for(var s=E(e,t,r,i),f=[],d=0;d<s.length;++d)f.push([e.slice(s[d].wholeMatch.start,s[d].wholeMatch.end),e.slice(s[d].match.start,s[d].match.end),e.slice(s[d].left.start,s[d].left.end),e.slice(s[d].right.start,s[d].right.end)]);return f},n.helper.replaceRecursiveRegExp=function(e,t,r,i,s){if(!n.helper.isFunction(t)){var f=t;t=function(){return f}}var d=E(e,r,i,s),p=e,b=d.length;if(b>0){var k=[];d[0].wholeMatch.start!==0&&k.push(e.slice(0,d[0].wholeMatch.start));for(var A=0;A<b;++A)k.push(t(e.slice(d[A].wholeMatch.start,d[A].wholeMatch.end),e.slice(d[A].match.start,d[A].match.end),e.slice(d[A].left.start,d[A].left.end),e.slice(d[A].right.start,d[A].right.end))),A<b-1&&k.push(e.slice(d[A].wholeMatch.end,d[A+1].wholeMatch.start));d[b-1].wholeMatch.end<e.length&&k.push(e.slice(d[b-1].wholeMatch.end)),p=k.join("")}return p},n.helper.regexIndexOf=function(e,t,r){if(!n.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(!(t instanceof RegExp))throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";var i=e.substring(r||0).search(t);return i>=0?i+(r||0):i},n.helper.splitAtIndex=function(e,t){if(!n.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";return[e.substring(0,t),e.substring(t)]},n.helper.encodeEmailAddress=function(e){var t=[function(r){return"&#"+r.charCodeAt(0)+";"},function(r){return"&#x"+r.charCodeAt(0).toString(16)+";"},function(r){return r}];return e=e.replace(/./g,function(r){if(r==="@")r=t[Math.floor(Math.random()*2)](r);else{var i=Math.random();r=i>.9?t[2](r):i>.45?t[1](r):t[0](r)}return r}),e},n.helper.padEnd=function(t,r,i){return r=r>>0,i=String(i||" "),t.length>r?String(t):(r=r-t.length,r>i.length&&(i+=i.repeat(r/i.length)),String(t)+i.slice(0,r))},typeof console>"u"&&(console={warn:function(e){alert(e)},log:function(e){alert(e)},error:function(e){throw e}}),n.helper.regexes={asteriskDashAndColon:/([*_:~])/g},n.helper.emojis={"+1":"👍","-1":"👎",100:"💯",1234:"🔢","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉","8ball":"🎱",a:"🅰️",ab:"🆎",abc:"🔤",abcd:"🔡",accept:"🉑",aerial_tramway:"🚡",airplane:"✈️",alarm_clock:"⏰",alembic:"⚗️",alien:"👽",ambulance:"🚑",amphora:"🏺",anchor:"⚓️",angel:"👼",anger:"💢",angry:"😠",anguished:"😧",ant:"🐜",apple:"🍎",aquarius:"♒️",aries:"♈️",arrow_backward:"◀️",arrow_double_down:"⏬",arrow_double_up:"⏫",arrow_down:"⬇️",arrow_down_small:"🔽",arrow_forward:"▶️",arrow_heading_down:"⤵️",arrow_heading_up:"⤴️",arrow_left:"⬅️",arrow_lower_left:"↙️",arrow_lower_right:"↘️",arrow_right:"➡️",arrow_right_hook:"↪️",arrow_up:"⬆️",arrow_up_down:"↕️",arrow_up_small:"🔼",arrow_upper_left:"↖️",arrow_upper_right:"↗️",arrows_clockwise:"🔃",arrows_counterclockwise:"🔄",art:"🎨",articulated_lorry:"🚛",artificial_satellite:"🛰",astonished:"😲",athletic_shoe:"👟",atm:"🏧",atom_symbol:"⚛️",avocado:"🥑",b:"🅱️",baby:"👶",baby_bottle:"🍼",baby_chick:"🐤",baby_symbol:"🚼",back:"🔙",bacon:"🥓",badminton:"🏸",baggage_claim:"🛄",baguette_bread:"🥖",balance_scale:"⚖️",balloon:"🎈",ballot_box:"🗳",ballot_box_with_check:"☑️",bamboo:"🎍",banana:"🍌",bangbang:"‼️",bank:"🏦",bar_chart:"📊",barber:"💈",baseball:"⚾️",basketball:"🏀",basketball_man:"⛹️",basketball_woman:"⛹️&zwj;♀️",bat:"🦇",bath:"🛀",bathtub:"🛁",battery:"🔋",beach_umbrella:"🏖",bear:"🐻",bed:"🛏",bee:"🐝",beer:"🍺",beers:"🍻",beetle:"🐞",beginner:"🔰",bell:"🔔",bellhop_bell:"🛎",bento:"🍱",biking_man:"🚴",bike:"🚲",biking_woman:"🚴&zwj;♀️",bikini:"👙",biohazard:"☣️",bird:"🐦",birthday:"🎂",black_circle:"⚫️",black_flag:"🏴",black_heart:"🖤",black_joker:"🃏",black_large_square:"⬛️",black_medium_small_square:"◾️",black_medium_square:"◼️",black_nib:"✒️",black_small_square:"▪️",black_square_button:"🔲",blonde_man:"👱",blonde_woman:"👱&zwj;♀️",blossom:"🌼",blowfish:"🐡",blue_book:"📘",blue_car:"🚙",blue_heart:"💙",blush:"😊",boar:"🐗",boat:"⛵️",bomb:"💣",book:"📖",bookmark:"🔖",bookmark_tabs:"📑",books:"📚",boom:"💥",boot:"👢",bouquet:"💐",bowing_man:"🙇",bow_and_arrow:"🏹",bowing_woman:"🙇&zwj;♀️",bowling:"🎳",boxing_glove:"🥊",boy:"👦",bread:"🍞",bride_with_veil:"👰",bridge_at_night:"🌉",briefcase:"💼",broken_heart:"💔",bug:"🐛",building_construction:"🏗",bulb:"💡",bullettrain_front:"🚅",bullettrain_side:"🚄",burrito:"🌯",bus:"🚌",business_suit_levitating:"🕴",busstop:"🚏",bust_in_silhouette:"👤",busts_in_silhouette:"👥",butterfly:"🦋",cactus:"🌵",cake:"🍰",calendar:"📆",call_me_hand:"🤙",calling:"📲",camel:"🐫",camera:"📷",camera_flash:"📸",camping:"🏕",cancer:"♋️",candle:"🕯",candy:"🍬",canoe:"🛶",capital_abcd:"🔠",capricorn:"♑️",car:"🚗",card_file_box:"🗃",card_index:"📇",card_index_dividers:"🗂",carousel_horse:"🎠",carrot:"🥕",cat:"🐱",cat2:"🐈",cd:"💿",chains:"⛓",champagne:"🍾",chart:"💹",chart_with_downwards_trend:"📉",chart_with_upwards_trend:"📈",checkered_flag:"🏁",cheese:"🧀",cherries:"🍒",cherry_blossom:"🌸",chestnut:"🌰",chicken:"🐔",children_crossing:"🚸",chipmunk:"🐿",chocolate_bar:"🍫",christmas_tree:"🎄",church:"⛪️",cinema:"🎦",circus_tent:"🎪",city_sunrise:"🌇",city_sunset:"🌆",cityscape:"🏙",cl:"🆑",clamp:"🗜",clap:"👏",clapper:"🎬",classical_building:"🏛",clinking_glasses:"🥂",clipboard:"📋",clock1:"🕐",clock10:"🕙",clock1030:"🕥",clock11:"🕚",clock1130:"🕦",clock12:"🕛",clock1230:"🕧",clock130:"🕜",clock2:"🕑",clock230:"🕝",clock3:"🕒",clock330:"🕞",clock4:"🕓",clock430:"🕟",clock5:"🕔",clock530:"🕠",clock6:"🕕",clock630:"🕡",clock7:"🕖",clock730:"🕢",clock8:"🕗",clock830:"🕣",clock9:"🕘",clock930:"🕤",closed_book:"📕",closed_lock_with_key:"🔐",closed_umbrella:"🌂",cloud:"☁️",cloud_with_lightning:"🌩",cloud_with_lightning_and_rain:"⛈",cloud_with_rain:"🌧",cloud_with_snow:"🌨",clown_face:"🤡",clubs:"♣️",cocktail:"🍸",coffee:"☕️",coffin:"⚰️",cold_sweat:"😰",comet:"☄️",computer:"💻",computer_mouse:"🖱",confetti_ball:"🎊",confounded:"😖",confused:"😕",congratulations:"㊗️",construction:"🚧",construction_worker_man:"👷",construction_worker_woman:"👷&zwj;♀️",control_knobs:"🎛",convenience_store:"🏪",cookie:"🍪",cool:"🆒",policeman:"👮",copyright:"©️",corn:"🌽",couch_and_lamp:"🛋",couple:"👫",couple_with_heart_woman_man:"💑",couple_with_heart_man_man:"👨&zwj;❤️&zwj;👨",couple_with_heart_woman_woman:"👩&zwj;❤️&zwj;👩",couplekiss_man_man:"👨&zwj;❤️&zwj;💋&zwj;👨",couplekiss_man_woman:"💏",couplekiss_woman_woman:"👩&zwj;❤️&zwj;💋&zwj;👩",cow:"🐮",cow2:"🐄",cowboy_hat_face:"🤠",crab:"🦀",crayon:"🖍",credit_card:"💳",crescent_moon:"🌙",cricket:"🏏",crocodile:"🐊",croissant:"🥐",crossed_fingers:"🤞",crossed_flags:"🎌",crossed_swords:"⚔️",crown:"👑",cry:"😢",crying_cat_face:"😿",crystal_ball:"🔮",cucumber:"🥒",cupid:"💘",curly_loop:"➰",currency_exchange:"💱",curry:"🍛",custard:"🍮",customs:"🛃",cyclone:"🌀",dagger:"🗡",dancer:"💃",dancing_women:"👯",dancing_men:"👯&zwj;♂️",dango:"🍡",dark_sunglasses:"🕶",dart:"🎯",dash:"💨",date:"📅",deciduous_tree:"🌳",deer:"🦌",department_store:"🏬",derelict_house:"🏚",desert:"🏜",desert_island:"🏝",desktop_computer:"🖥",male_detective:"🕵️",diamond_shape_with_a_dot_inside:"💠",diamonds:"♦️",disappointed:"😞",disappointed_relieved:"😥",dizzy:"💫",dizzy_face:"😵",do_not_litter:"🚯",dog:"🐶",dog2:"🐕",dollar:"💵",dolls:"🎎",dolphin:"🐬",door:"🚪",doughnut:"🍩",dove:"🕊",dragon:"🐉",dragon_face:"🐲",dress:"👗",dromedary_camel:"🐪",drooling_face:"🤤",droplet:"💧",drum:"🥁",duck:"🦆",dvd:"📀","e-mail":"📧",eagle:"🦅",ear:"👂",ear_of_rice:"🌾",earth_africa:"🌍",earth_americas:"🌎",earth_asia:"🌏",egg:"🥚",eggplant:"🍆",eight_pointed_black_star:"✴️",eight_spoked_asterisk:"✳️",electric_plug:"🔌",elephant:"🐘",email:"✉️",end:"🔚",envelope_with_arrow:"📩",euro:"💶",european_castle:"🏰",european_post_office:"🏤",evergreen_tree:"🌲",exclamation:"❗️",expressionless:"😑",eye:"👁",eye_speech_bubble:"👁&zwj;🗨",eyeglasses:"👓",eyes:"👀",face_with_head_bandage:"🤕",face_with_thermometer:"🤒",fist_oncoming:"👊",factory:"🏭",fallen_leaf:"🍂",family_man_woman_boy:"👪",family_man_boy:"👨&zwj;👦",family_man_boy_boy:"👨&zwj;👦&zwj;👦",family_man_girl:"👨&zwj;👧",family_man_girl_boy:"👨&zwj;👧&zwj;👦",family_man_girl_girl:"👨&zwj;👧&zwj;👧",family_man_man_boy:"👨&zwj;👨&zwj;👦",family_man_man_boy_boy:"👨&zwj;👨&zwj;👦&zwj;👦",family_man_man_girl:"👨&zwj;👨&zwj;👧",family_man_man_girl_boy:"👨&zwj;👨&zwj;👧&zwj;👦",family_man_man_girl_girl:"👨&zwj;👨&zwj;👧&zwj;👧",family_man_woman_boy_boy:"👨&zwj;👩&zwj;👦&zwj;👦",family_man_woman_girl:"👨&zwj;👩&zwj;👧",family_man_woman_girl_boy:"👨&zwj;👩&zwj;👧&zwj;👦",family_man_woman_girl_girl:"👨&zwj;👩&zwj;👧&zwj;👧",family_woman_boy:"👩&zwj;👦",family_woman_boy_boy:"👩&zwj;👦&zwj;👦",family_woman_girl:"👩&zwj;👧",family_woman_girl_boy:"👩&zwj;👧&zwj;👦",family_woman_girl_girl:"👩&zwj;👧&zwj;👧",family_woman_woman_boy:"👩&zwj;👩&zwj;👦",family_woman_woman_boy_boy:"👩&zwj;👩&zwj;👦&zwj;👦",family_woman_woman_girl:"👩&zwj;👩&zwj;👧",family_woman_woman_girl_boy:"👩&zwj;👩&zwj;👧&zwj;👦",family_woman_woman_girl_girl:"👩&zwj;👩&zwj;👧&zwj;👧",fast_forward:"⏩",fax:"📠",fearful:"😨",feet:"🐾",female_detective:"🕵️&zwj;♀️",ferris_wheel:"🎡",ferry:"⛴",field_hockey:"🏑",file_cabinet:"🗄",file_folder:"📁",film_projector:"📽",film_strip:"🎞",fire:"🔥",fire_engine:"🚒",fireworks:"🎆",first_quarter_moon:"🌓",first_quarter_moon_with_face:"🌛",fish:"🐟",fish_cake:"🍥",fishing_pole_and_fish:"🎣",fist_raised:"✊",fist_left:"🤛",fist_right:"🤜",flags:"🎏",flashlight:"🔦",fleur_de_lis:"⚜️",flight_arrival:"🛬",flight_departure:"🛫",floppy_disk:"💾",flower_playing_cards:"🎴",flushed:"😳",fog:"🌫",foggy:"🌁",football:"🏈",footprints:"👣",fork_and_knife:"🍴",fountain:"⛲️",fountain_pen:"🖋",four_leaf_clover:"🍀",fox_face:"🦊",framed_picture:"🖼",free:"🆓",fried_egg:"🍳",fried_shrimp:"🍤",fries:"🍟",frog:"🐸",frowning:"😦",frowning_face:"☹️",frowning_man:"🙍&zwj;♂️",frowning_woman:"🙍",middle_finger:"🖕",fuelpump:"⛽️",full_moon:"🌕",full_moon_with_face:"🌝",funeral_urn:"⚱️",game_die:"🎲",gear:"⚙️",gem:"💎",gemini:"♊️",ghost:"👻",gift:"🎁",gift_heart:"💝",girl:"👧",globe_with_meridians:"🌐",goal_net:"🥅",goat:"🐐",golf:"⛳️",golfing_man:"🏌️",golfing_woman:"🏌️&zwj;♀️",gorilla:"🦍",grapes:"🍇",green_apple:"🍏",green_book:"📗",green_heart:"💚",green_salad:"🥗",grey_exclamation:"❕",grey_question:"❔",grimacing:"😬",grin:"😁",grinning:"😀",guardsman:"💂",guardswoman:"💂&zwj;♀️",guitar:"🎸",gun:"🔫",haircut_woman:"💇",haircut_man:"💇&zwj;♂️",hamburger:"🍔",hammer:"🔨",hammer_and_pick:"⚒",hammer_and_wrench:"🛠",hamster:"🐹",hand:"✋",handbag:"👜",handshake:"🤝",hankey:"💩",hatched_chick:"🐥",hatching_chick:"🐣",headphones:"🎧",hear_no_evil:"🙉",heart:"❤️",heart_decoration:"💟",heart_eyes:"😍",heart_eyes_cat:"😻",heartbeat:"💓",heartpulse:"💗",hearts:"♥️",heavy_check_mark:"✔️",heavy_division_sign:"➗",heavy_dollar_sign:"💲",heavy_heart_exclamation:"❣️",heavy_minus_sign:"➖",heavy_multiplication_x:"✖️",heavy_plus_sign:"➕",helicopter:"🚁",herb:"🌿",hibiscus:"🌺",high_brightness:"🔆",high_heel:"👠",hocho:"🔪",hole:"🕳",honey_pot:"🍯",horse:"🐴",horse_racing:"🏇",hospital:"🏥",hot_pepper:"🌶",hotdog:"🌭",hotel:"🏨",hotsprings:"♨️",hourglass:"⌛️",hourglass_flowing_sand:"⏳",house:"🏠",house_with_garden:"🏡",houses:"🏘",hugs:"🤗",hushed:"😯",ice_cream:"🍨",ice_hockey:"🏒",ice_skate:"⛸",icecream:"🍦",id:"🆔",ideograph_advantage:"🉐",imp:"👿",inbox_tray:"📥",incoming_envelope:"📨",tipping_hand_woman:"💁",information_source:"ℹ️",innocent:"😇",interrobang:"⁉️",iphone:"📱",izakaya_lantern:"🏮",jack_o_lantern:"🎃",japan:"🗾",japanese_castle:"🏯",japanese_goblin:"👺",japanese_ogre:"👹",jeans:"👖",joy:"😂",joy_cat:"😹",joystick:"🕹",kaaba:"🕋",key:"🔑",keyboard:"⌨️",keycap_ten:"🔟",kick_scooter:"🛴",kimono:"👘",kiss:"💋",kissing:"😗",kissing_cat:"😽",kissing_closed_eyes:"😚",kissing_heart:"😘",kissing_smiling_eyes:"😙",kiwi_fruit:"🥝",koala:"🐨",koko:"🈁",label:"🏷",large_blue_circle:"🔵",large_blue_diamond:"🔷",large_orange_diamond:"🔶",last_quarter_moon:"🌗",last_quarter_moon_with_face:"🌜",latin_cross:"✝️",laughing:"😆",leaves:"🍃",ledger:"📒",left_luggage:"🛅",left_right_arrow:"↔️",leftwards_arrow_with_hook:"↩️",lemon:"🍋",leo:"♌️",leopard:"🐆",level_slider:"🎚",libra:"♎️",light_rail:"🚈",link:"🔗",lion:"🦁",lips:"👄",lipstick:"💄",lizard:"🦎",lock:"🔒",lock_with_ink_pen:"🔏",lollipop:"🍭",loop:"➿",loud_sound:"🔊",loudspeaker:"📢",love_hotel:"🏩",love_letter:"💌",low_brightness:"🔅",lying_face:"🤥",m:"Ⓜ️",mag:"🔍",mag_right:"🔎",mahjong:"🀄️",mailbox:"📫",mailbox_closed:"📪",mailbox_with_mail:"📬",mailbox_with_no_mail:"📭",man:"👨",man_artist:"👨&zwj;🎨",man_astronaut:"👨&zwj;🚀",man_cartwheeling:"🤸&zwj;♂️",man_cook:"👨&zwj;🍳",man_dancing:"🕺",man_facepalming:"🤦&zwj;♂️",man_factory_worker:"👨&zwj;🏭",man_farmer:"👨&zwj;🌾",man_firefighter:"👨&zwj;🚒",man_health_worker:"👨&zwj;⚕️",man_in_tuxedo:"🤵",man_judge:"👨&zwj;⚖️",man_juggling:"🤹&zwj;♂️",man_mechanic:"👨&zwj;🔧",man_office_worker:"👨&zwj;💼",man_pilot:"👨&zwj;✈️",man_playing_handball:"🤾&zwj;♂️",man_playing_water_polo:"🤽&zwj;♂️",man_scientist:"👨&zwj;🔬",man_shrugging:"🤷&zwj;♂️",man_singer:"👨&zwj;🎤",man_student:"👨&zwj;🎓",man_teacher:"👨&zwj;🏫",man_technologist:"👨&zwj;💻",man_with_gua_pi_mao:"👲",man_with_turban:"👳",tangerine:"🍊",mans_shoe:"👞",mantelpiece_clock:"🕰",maple_leaf:"🍁",martial_arts_uniform:"🥋",mask:"😷",massage_woman:"💆",massage_man:"💆&zwj;♂️",meat_on_bone:"🍖",medal_military:"🎖",medal_sports:"🏅",mega:"📣",melon:"🍈",memo:"📝",men_wrestling:"🤼&zwj;♂️",menorah:"🕎",mens:"🚹",metal:"🤘",metro:"🚇",microphone:"🎤",microscope:"🔬",milk_glass:"🥛",milky_way:"🌌",minibus:"🚐",minidisc:"💽",mobile_phone_off:"📴",money_mouth_face:"🤑",money_with_wings:"💸",moneybag:"💰",monkey:"🐒",monkey_face:"🐵",monorail:"🚝",moon:"🌔",mortar_board:"🎓",mosque:"🕌",motor_boat:"🛥",motor_scooter:"🛵",motorcycle:"🏍",motorway:"🛣",mount_fuji:"🗻",mountain:"⛰",mountain_biking_man:"🚵",mountain_biking_woman:"🚵&zwj;♀️",mountain_cableway:"🚠",mountain_railway:"🚞",mountain_snow:"🏔",mouse:"🐭",mouse2:"🐁",movie_camera:"🎥",moyai:"🗿",mrs_claus:"🤶",muscle:"💪",mushroom:"🍄",musical_keyboard:"🎹",musical_note:"🎵",musical_score:"🎼",mute:"🔇",nail_care:"💅",name_badge:"📛",national_park:"🏞",nauseated_face:"🤢",necktie:"👔",negative_squared_cross_mark:"❎",nerd_face:"🤓",neutral_face:"😐",new:"🆕",new_moon:"🌑",new_moon_with_face:"🌚",newspaper:"📰",newspaper_roll:"🗞",next_track_button:"⏭",ng:"🆖",no_good_man:"🙅&zwj;♂️",no_good_woman:"🙅",night_with_stars:"🌃",no_bell:"🔕",no_bicycles:"🚳",no_entry:"⛔️",no_entry_sign:"🚫",no_mobile_phones:"📵",no_mouth:"😶",no_pedestrians:"🚷",no_smoking:"🚭","non-potable_water":"🚱",nose:"👃",notebook:"📓",notebook_with_decorative_cover:"📔",notes:"🎶",nut_and_bolt:"🔩",o:"⭕️",o2:"🅾️",ocean:"🌊",octopus:"🐙",oden:"🍢",office:"🏢",oil_drum:"🛢",ok:"🆗",ok_hand:"👌",ok_man:"🙆&zwj;♂️",ok_woman:"🙆",old_key:"🗝",older_man:"👴",older_woman:"👵",om:"🕉",on:"🔛",oncoming_automobile:"🚘",oncoming_bus:"🚍",oncoming_police_car:"🚔",oncoming_taxi:"🚖",open_file_folder:"📂",open_hands:"👐",open_mouth:"😮",open_umbrella:"☂️",ophiuchus:"⛎",orange_book:"📙",orthodox_cross:"☦️",outbox_tray:"📤",owl:"🦉",ox:"🐂",package:"📦",page_facing_up:"📄",page_with_curl:"📃",pager:"📟",paintbrush:"🖌",palm_tree:"🌴",pancakes:"🥞",panda_face:"🐼",paperclip:"📎",paperclips:"🖇",parasol_on_ground:"⛱",parking:"🅿️",part_alternation_mark:"〽️",partly_sunny:"⛅️",passenger_ship:"🛳",passport_control:"🛂",pause_button:"⏸",peace_symbol:"☮️",peach:"🍑",peanuts:"🥜",pear:"🍐",pen:"🖊",pencil2:"✏️",penguin:"🐧",pensive:"😔",performing_arts:"🎭",persevere:"😣",person_fencing:"🤺",pouting_woman:"🙎",phone:"☎️",pick:"⛏",pig:"🐷",pig2:"🐖",pig_nose:"🐽",pill:"💊",pineapple:"🍍",ping_pong:"🏓",pisces:"♓️",pizza:"🍕",place_of_worship:"🛐",plate_with_cutlery:"🍽",play_or_pause_button:"⏯",point_down:"👇",point_left:"👈",point_right:"👉",point_up:"☝️",point_up_2:"👆",police_car:"🚓",policewoman:"👮&zwj;♀️",poodle:"🐩",popcorn:"🍿",post_office:"🏣",postal_horn:"📯",postbox:"📮",potable_water:"🚰",potato:"🥔",pouch:"👝",poultry_leg:"🍗",pound:"💷",rage:"😡",pouting_cat:"😾",pouting_man:"🙎&zwj;♂️",pray:"🙏",prayer_beads:"📿",pregnant_woman:"🤰",previous_track_button:"⏮",prince:"🤴",princess:"👸",printer:"🖨",purple_heart:"💜",purse:"👛",pushpin:"📌",put_litter_in_its_place:"🚮",question:"❓",rabbit:"🐰",rabbit2:"🐇",racehorse:"🐎",racing_car:"🏎",radio:"📻",radio_button:"🔘",radioactive:"☢️",railway_car:"🚃",railway_track:"🛤",rainbow:"🌈",rainbow_flag:"🏳️&zwj;🌈",raised_back_of_hand:"🤚",raised_hand_with_fingers_splayed:"🖐",raised_hands:"🙌",raising_hand_woman:"🙋",raising_hand_man:"🙋&zwj;♂️",ram:"🐏",ramen:"🍜",rat:"🐀",record_button:"⏺",recycle:"♻️",red_circle:"🔴",registered:"®️",relaxed:"☺️",relieved:"😌",reminder_ribbon:"🎗",repeat:"🔁",repeat_one:"🔂",rescue_worker_helmet:"⛑",restroom:"🚻",revolving_hearts:"💞",rewind:"⏪",rhinoceros:"🦏",ribbon:"🎀",rice:"🍚",rice_ball:"🍙",rice_cracker:"🍘",rice_scene:"🎑",right_anger_bubble:"🗯",ring:"💍",robot:"🤖",rocket:"🚀",rofl:"🤣",roll_eyes:"🙄",roller_coaster:"🎢",rooster:"🐓",rose:"🌹",rosette:"🏵",rotating_light:"🚨",round_pushpin:"📍",rowing_man:"🚣",rowing_woman:"🚣&zwj;♀️",rugby_football:"🏉",running_man:"🏃",running_shirt_with_sash:"🎽",running_woman:"🏃&zwj;♀️",sa:"🈂️",sagittarius:"♐️",sake:"🍶",sandal:"👡",santa:"🎅",satellite:"📡",saxophone:"🎷",school:"🏫",school_satchel:"🎒",scissors:"✂️",scorpion:"🦂",scorpius:"♏️",scream:"😱",scream_cat:"🙀",scroll:"📜",seat:"💺",secret:"㊙️",see_no_evil:"🙈",seedling:"🌱",selfie:"🤳",shallow_pan_of_food:"🥘",shamrock:"☘️",shark:"🦈",shaved_ice:"🍧",sheep:"🐑",shell:"🐚",shield:"🛡",shinto_shrine:"⛩",ship:"🚢",shirt:"👕",shopping:"🛍",shopping_cart:"🛒",shower:"🚿",shrimp:"🦐",signal_strength:"📶",six_pointed_star:"🔯",ski:"🎿",skier:"⛷",skull:"💀",skull_and_crossbones:"☠️",sleeping:"😴",sleeping_bed:"🛌",sleepy:"😪",slightly_frowning_face:"🙁",slightly_smiling_face:"🙂",slot_machine:"🎰",small_airplane:"🛩",small_blue_diamond:"🔹",small_orange_diamond:"🔸",small_red_triangle:"🔺",small_red_triangle_down:"🔻",smile:"😄",smile_cat:"😸",smiley:"😃",smiley_cat:"😺",smiling_imp:"😈",smirk:"😏",smirk_cat:"😼",smoking:"🚬",snail:"🐌",snake:"🐍",sneezing_face:"🤧",snowboarder:"🏂",snowflake:"❄️",snowman:"⛄️",snowman_with_snow:"☃️",sob:"😭",soccer:"⚽️",soon:"🔜",sos:"🆘",sound:"🔉",space_invader:"👾",spades:"♠️",spaghetti:"🍝",sparkle:"❇️",sparkler:"🎇",sparkles:"✨",sparkling_heart:"💖",speak_no_evil:"🙊",speaker:"🔈",speaking_head:"🗣",speech_balloon:"💬",speedboat:"🚤",spider:"🕷",spider_web:"🕸",spiral_calendar:"🗓",spiral_notepad:"🗒",spoon:"🥄",squid:"🦑",stadium:"🏟",star:"⭐️",star2:"🌟",star_and_crescent:"☪️",star_of_david:"✡️",stars:"🌠",station:"🚉",statue_of_liberty:"🗽",steam_locomotive:"🚂",stew:"🍲",stop_button:"⏹",stop_sign:"🛑",stopwatch:"⏱",straight_ruler:"📏",strawberry:"🍓",stuck_out_tongue:"😛",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue_winking_eye:"😜",studio_microphone:"🎙",stuffed_flatbread:"🥙",sun_behind_large_cloud:"🌥",sun_behind_rain_cloud:"🌦",sun_behind_small_cloud:"🌤",sun_with_face:"🌞",sunflower:"🌻",sunglasses:"😎",sunny:"☀️",sunrise:"🌅",sunrise_over_mountains:"🌄",surfing_man:"🏄",surfing_woman:"🏄&zwj;♀️",sushi:"🍣",suspension_railway:"🚟",sweat:"😓",sweat_drops:"💦",sweat_smile:"😅",sweet_potato:"🍠",swimming_man:"🏊",swimming_woman:"🏊&zwj;♀️",symbols:"🔣",synagogue:"🕍",syringe:"💉",taco:"🌮",tada:"🎉",tanabata_tree:"🎋",taurus:"♉️",taxi:"🚕",tea:"🍵",telephone_receiver:"📞",telescope:"🔭",tennis:"🎾",tent:"⛺️",thermometer:"🌡",thinking:"🤔",thought_balloon:"💭",ticket:"🎫",tickets:"🎟",tiger:"🐯",tiger2:"🐅",timer_clock:"⏲",tipping_hand_man:"💁&zwj;♂️",tired_face:"😫",tm:"™️",toilet:"🚽",tokyo_tower:"🗼",tomato:"🍅",tongue:"👅",top:"🔝",tophat:"🎩",tornado:"🌪",trackball:"🖲",tractor:"🚜",traffic_light:"🚥",train:"🚋",train2:"🚆",tram:"🚊",triangular_flag_on_post:"🚩",triangular_ruler:"📐",trident:"🔱",triumph:"😤",trolleybus:"🚎",trophy:"🏆",tropical_drink:"🍹",tropical_fish:"🐠",truck:"🚚",trumpet:"🎺",tulip:"🌷",tumbler_glass:"🥃",turkey:"🦃",turtle:"🐢",tv:"📺",twisted_rightwards_arrows:"🔀",two_hearts:"💕",two_men_holding_hands:"👬",two_women_holding_hands:"👭",u5272:"🈹",u5408:"🈴",u55b6:"🈺",u6307:"🈯️",u6708:"🈷️",u6709:"🈶",u6e80:"🈵",u7121:"🈚️",u7533:"🈸",u7981:"🈲",u7a7a:"🈳",umbrella:"☔️",unamused:"😒",underage:"🔞",unicorn:"🦄",unlock:"🔓",up:"🆙",upside_down_face:"🙃",v:"✌️",vertical_traffic_light:"🚦",vhs:"📼",vibration_mode:"📳",video_camera:"📹",video_game:"🎮",violin:"🎻",virgo:"♍️",volcano:"🌋",volleyball:"🏐",vs:"🆚",vulcan_salute:"🖖",walking_man:"🚶",walking_woman:"🚶&zwj;♀️",waning_crescent_moon:"🌘",waning_gibbous_moon:"🌖",warning:"⚠️",wastebasket:"🗑",watch:"⌚️",water_buffalo:"🐃",watermelon:"🍉",wave:"👋",wavy_dash:"〰️",waxing_crescent_moon:"🌒",wc:"🚾",weary:"😩",wedding:"💒",weight_lifting_man:"🏋️",weight_lifting_woman:"🏋️&zwj;♀️",whale:"🐳",whale2:"🐋",wheel_of_dharma:"☸️",wheelchair:"♿️",white_check_mark:"✅",white_circle:"⚪️",white_flag:"🏳️",white_flower:"💮",white_large_square:"⬜️",white_medium_small_square:"◽️",white_medium_square:"◻️",white_small_square:"▫️",white_square_button:"🔳",wilted_flower:"🥀",wind_chime:"🎐",wind_face:"🌬",wine_glass:"🍷",wink:"😉",wolf:"🐺",woman:"👩",woman_artist:"👩&zwj;🎨",woman_astronaut:"👩&zwj;🚀",woman_cartwheeling:"🤸&zwj;♀️",woman_cook:"👩&zwj;🍳",woman_facepalming:"🤦&zwj;♀️",woman_factory_worker:"👩&zwj;🏭",woman_farmer:"👩&zwj;🌾",woman_firefighter:"👩&zwj;🚒",woman_health_worker:"👩&zwj;⚕️",woman_judge:"👩&zwj;⚖️",woman_juggling:"🤹&zwj;♀️",woman_mechanic:"👩&zwj;🔧",woman_office_worker:"👩&zwj;💼",woman_pilot:"👩&zwj;✈️",woman_playing_handball:"🤾&zwj;♀️",woman_playing_water_polo:"🤽&zwj;♀️",woman_scientist:"👩&zwj;🔬",woman_shrugging:"🤷&zwj;♀️",woman_singer:"👩&zwj;🎤",woman_student:"👩&zwj;🎓",woman_teacher:"👩&zwj;🏫",woman_technologist:"👩&zwj;💻",woman_with_turban:"👳&zwj;♀️",womans_clothes:"👚",womans_hat:"👒",women_wrestling:"🤼&zwj;♀️",womens:"🚺",world_map:"🗺",worried:"😟",wrench:"🔧",writing_hand:"✍️",x:"❌",yellow_heart:"💛",yen:"💴",yin_yang:"☯️",yum:"😋",zap:"⚡️",zipper_mouth_face:"🤐",zzz:"💤",octocat:'<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',showdown:`<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`},n.Converter=function(e){var t={},r=[],i=[],s={},f=z,d={parsed:{},raw:"",format:""};p();function p(){e=e||{};for(var l in x)x.hasOwnProperty(l)&&(t[l]=x[l]);if(typeof e=="object")for(var C in e)e.hasOwnProperty(C)&&(t[C]=e[C]);else throw Error("Converter expects the passed parameter to be an object, but "+typeof e+" was passed instead.");t.extensions&&n.helper.forEach(t.extensions,b)}function b(l,C){if(C=C||null,n.helper.isString(l))if(l=n.helper.stdExtName(l),C=l,n.extensions[l]){console.warn("DEPRECATION WARNING: "+l+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),k(n.extensions[l],l);return}else if(!n.helper.isUndefined(g[l]))l=g[l];else throw Error('Extension "'+l+'" could not be loaded. It was either not found or is not a valid extension.');typeof l=="function"&&(l=l()),n.helper.isArray(l)||(l=[l]);var O=S(l,C);if(!O.valid)throw Error(O.error);for(var B=0;B<l.length;++B){switch(l[B].type){case"lang":r.push(l[B]);break;case"output":i.push(l[B]);break}if(l[B].hasOwnProperty("listeners"))for(var V in l[B].listeners)l[B].listeners.hasOwnProperty(V)&&A(V,l[B].listeners[V])}}function k(l,C){typeof l=="function"&&(l=l(new n.Converter)),n.helper.isArray(l)||(l=[l]);var O=S(l,C);if(!O.valid)throw Error(O.error);for(var B=0;B<l.length;++B)switch(l[B].type){case"lang":r.push(l[B]);break;case"output":i.push(l[B]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function A(l,C){if(!n.helper.isString(l))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof l+" given");if(typeof C!="function")throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof C+" given");s.hasOwnProperty(l)||(s[l]=[]),s[l].push(C)}function T(l){var C=l.match(/^\s*/)[0].length,O=new RegExp("^\\s{0,"+C+"}","gm");return l.replace(O,"")}this._dispatch=function(C,O,B,V){if(s.hasOwnProperty(C))for(var R=0;R<s[C].length;++R){var G=s[C][R](C,O,this,B,V);G&&typeof G<"u"&&(O=G)}return O},this.listen=function(l,C){return A(l,C),this},this.makeHtml=function(l){if(!l)return l;var C={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:r,outputModifiers:i,converter:this,ghCodeBlocks:[],metadata:{parsed:{},raw:"",format:""}};return l=l.replace(/¨/g,"¨T"),l=l.replace(/\$/g,"¨D"),l=l.replace(/\r\n/g,`
`),l=l.replace(/\r/g,`
`),l=l.replace(/\u00A0/g,"&nbsp;"),t.smartIndentationFix&&(l=T(l)),l=`

`+l+`

`,l=n.subParser("detab")(l,t,C),l=l.replace(/^[ \t]+$/mg,""),n.helper.forEach(r,function(O){l=n.subParser("runExtension")(O,l,t,C)}),l=n.subParser("metadata")(l,t,C),l=n.subParser("hashPreCodeTags")(l,t,C),l=n.subParser("githubCodeBlocks")(l,t,C),l=n.subParser("hashHTMLBlocks")(l,t,C),l=n.subParser("hashCodeTags")(l,t,C),l=n.subParser("stripLinkDefinitions")(l,t,C),l=n.subParser("blockGamut")(l,t,C),l=n.subParser("unhashHTMLSpans")(l,t,C),l=n.subParser("unescapeSpecialChars")(l,t,C),l=l.replace(/¨D/g,"$$"),l=l.replace(/¨T/g,"¨"),l=n.subParser("completeHTMLDocument")(l,t,C),n.helper.forEach(i,function(O){l=n.subParser("runExtension")(O,l,t,C)}),d=C.metadata,l},this.makeMarkdown=this.makeMd=function(l,C){if(l=l.replace(/\r\n/g,`
`),l=l.replace(/\r/g,`
`),l=l.replace(/>[ \t]+</,">¨NBSP;<"),!C)if(window&&window.document)C=window.document;else throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");var O=C.createElement("div");O.innerHTML=l;var B={preList:X(O)};K(O);for(var V=O.childNodes,R="",G=0;G<V.length;G++)R+=n.subParser("makeMarkdown.node")(V[G],B);function K(_){for(var I=0;I<_.childNodes.length;++I){var N=_.childNodes[I];N.nodeType===3?!/\S/.test(N.nodeValue)&&!/^[ ]+$/.test(N.nodeValue)?(_.removeChild(N),--I):(N.nodeValue=N.nodeValue.split(`
`).join(" "),N.nodeValue=N.nodeValue.replace(/(\s)+/g,"$1")):N.nodeType===1&&K(N)}}function X(_){for(var I=_.querySelectorAll("pre"),N=[],U=0;U<I.length;++U)if(I[U].childElementCount===1&&I[U].firstChild.tagName.toLowerCase()==="code"){var ae=I[U].firstChild.innerHTML.trim(),ne=I[U].firstChild.getAttribute("data-language")||"";if(ne==="")for(var le=I[U].firstChild.className.split(" "),se=0;se<le.length;++se){var Ke=le[se].match(/^language-(.+)$/);if(Ke!==null){ne=Ke[1];break}}ae=n.helper.unescapeHTMLEntities(ae),N.push(ae),I[U].outerHTML='<precode language="'+ne+'" precodenum="'+U.toString()+'"></precode>'}else N.push(I[U].innerHTML),I[U].innerHTML="",I[U].setAttribute("prenum",U.toString());return N}return R},this.setOption=function(l,C){t[l]=C},this.getOption=function(l){return t[l]},this.getOptions=function(){return t},this.addExtension=function(l,C){C=C||null,b(l,C)},this.useExtension=function(l){b(l)},this.setFlavor=function(l){if(!j.hasOwnProperty(l))throw Error(l+" flavor was not found");var C=j[l];f=l;for(var O in C)C.hasOwnProperty(O)&&(t[O]=C[O])},this.getFlavor=function(){return f},this.removeExtension=function(l){n.helper.isArray(l)||(l=[l]);for(var C=0;C<l.length;++C){for(var O=l[C],B=0;B<r.length;++B)r[B]===O&&r.splice(B,1);for(var V=0;V<i.length;++V)i[V]===O&&i.splice(V,1)}},this.getAllExtensions=function(){return{language:r,output:i}},this.getMetadata=function(l){return l?d.raw:d.parsed},this.getMetadataFormat=function(){return d.format},this._setMetadataPair=function(l,C){d.parsed[l]=C},this._setMetadataFormat=function(l){d.format=l},this._setMetadataRaw=function(l){d.raw=l}},n.subParser("anchors",function(e,t,r){e=r.converter._dispatch("anchors.before",e,t,r);var i=function(s,f,d,p,b,k,A){if(n.helper.isUndefined(A)&&(A=""),d=d.toLowerCase(),s.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)p="";else if(!p)if(d||(d=f.toLowerCase().replace(/ ?\n/g," ")),p="#"+d,!n.helper.isUndefined(r.gUrls[d]))p=r.gUrls[d],n.helper.isUndefined(r.gTitles[d])||(A=r.gTitles[d]);else return s;p=p.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback);var T='<a href="'+p+'"';return A!==""&&A!==null&&(A=A.replace(/"/g,"&quot;"),A=A.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback),T+=' title="'+A+'"'),t.openLinksInNewWindow&&!/^#/.test(p)&&(T+=' rel="noopener noreferrer" target="¨E95Eblank"'),T+=">"+f+"</a>",T};return e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,i),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,i),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,i),e=e.replace(/\[([^\[\]]+)]()()()()()/g,i),t.ghMentions&&(e=e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi,function(s,f,d,p,b){if(d==="\\")return f+p;if(!n.helper.isString(t.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");var k=t.ghMentionsLink.replace(/\{u}/g,b),A="";return t.openLinksInNewWindow&&(A=' rel="noopener noreferrer" target="¨E95Eblank"'),f+'<a href="'+k+'"'+A+">"+p+"</a>"})),e=r.converter._dispatch("anchors.after",e,t,r),e});var D=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,P=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,m=/()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,w=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,v=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,y=function(e){return function(t,r,i,s,f,d,p){i=i.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback);var b=i,k="",A="",T=r||"",l=p||"";return/^www\./i.test(i)&&(i=i.replace(/^www\./i,"http://www.")),e.excludeTrailingPunctuationFromURLs&&d&&(k=d),e.openLinksInNewWindow&&(A=' rel="noopener noreferrer" target="¨E95Eblank"'),T+'<a href="'+i+'"'+A+">"+b+"</a>"+k+l}},M=function(e,t){return function(r,i,s){var f="mailto:";return i=i||"",s=n.subParser("unescapeSpecialChars")(s,e,t),e.encodeEmails?(f=n.helper.encodeEmailAddress(f+s),s=n.helper.encodeEmailAddress(s)):f=f+s,i+'<a href="'+f+'">'+s+"</a>"}};n.subParser("autoLinks",function(e,t,r){return e=r.converter._dispatch("autoLinks.before",e,t,r),e=e.replace(m,y(t)),e=e.replace(v,M(t,r)),e=r.converter._dispatch("autoLinks.after",e,t,r),e}),n.subParser("simplifiedAutoLinks",function(e,t,r){return t.simplifiedAutoLink&&(e=r.converter._dispatch("simplifiedAutoLinks.before",e,t,r),t.excludeTrailingPunctuationFromURLs?e=e.replace(P,y(t)):e=e.replace(D,y(t)),e=e.replace(w,M(t,r)),e=r.converter._dispatch("simplifiedAutoLinks.after",e,t,r)),e}),n.subParser("blockGamut",function(e,t,r){return e=r.converter._dispatch("blockGamut.before",e,t,r),e=n.subParser("blockQuotes")(e,t,r),e=n.subParser("headers")(e,t,r),e=n.subParser("horizontalRule")(e,t,r),e=n.subParser("lists")(e,t,r),e=n.subParser("codeBlocks")(e,t,r),e=n.subParser("tables")(e,t,r),e=n.subParser("hashHTMLBlocks")(e,t,r),e=n.subParser("paragraphs")(e,t,r),e=r.converter._dispatch("blockGamut.after",e,t,r),e}),n.subParser("blockQuotes",function(e,t,r){e=r.converter._dispatch("blockQuotes.before",e,t,r),e=e+`

`;var i=/(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;return t.splitAdjacentBlockquotes&&(i=/^ {0,3}>[\s\S]*?(?:\n\n)/gm),e=e.replace(i,function(s){return s=s.replace(/^[ \t]*>[ \t]?/gm,""),s=s.replace(/¨0/g,""),s=s.replace(/^[ \t]+$/gm,""),s=n.subParser("githubCodeBlocks")(s,t,r),s=n.subParser("blockGamut")(s,t,r),s=s.replace(/(^|\n)/g,"$1  "),s=s.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(f,d){var p=d;return p=p.replace(/^  /mg,"¨0"),p=p.replace(/¨0/g,""),p}),n.subParser("hashBlock")(`<blockquote>
`+s+`
</blockquote>`,t,r)}),e=r.converter._dispatch("blockQuotes.after",e,t,r),e}),n.subParser("codeBlocks",function(e,t,r){e=r.converter._dispatch("codeBlocks.before",e,t,r),e+="¨0";var i=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;return e=e.replace(i,function(s,f,d){var p=f,b=d,k=`
`;return p=n.subParser("outdent")(p,t,r),p=n.subParser("encodeCode")(p,t,r),p=n.subParser("detab")(p,t,r),p=p.replace(/^\n+/g,""),p=p.replace(/\n+$/g,""),t.omitExtraWLInCodeBlocks&&(k=""),p="<pre><code>"+p+k+"</code></pre>",n.subParser("hashBlock")(p,t,r)+b}),e=e.replace(/¨0/,""),e=r.converter._dispatch("codeBlocks.after",e,t,r),e}),n.subParser("codeSpans",function(e,t,r){return e=r.converter._dispatch("codeSpans.before",e,t,r),typeof e>"u"&&(e=""),e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(i,s,f,d){var p=d;return p=p.replace(/^([ \t]*)/g,""),p=p.replace(/[ \t]*$/g,""),p=n.subParser("encodeCode")(p,t,r),p=s+"<code>"+p+"</code>",p=n.subParser("hashHTMLSpans")(p,t,r),p}),e=r.converter._dispatch("codeSpans.after",e,t,r),e}),n.subParser("completeHTMLDocument",function(e,t,r){if(!t.completeHTMLDocument)return e;e=r.converter._dispatch("completeHTMLDocument.before",e,t,r);var i="html",s=`<!DOCTYPE HTML>
`,f="",d=`<meta charset="utf-8">
`,p="",b="";typeof r.metadata.parsed.doctype<"u"&&(s="<!DOCTYPE "+r.metadata.parsed.doctype+`>
`,i=r.metadata.parsed.doctype.toString().toLowerCase(),(i==="html"||i==="html5")&&(d='<meta charset="utf-8">'));for(var k in r.metadata.parsed)if(r.metadata.parsed.hasOwnProperty(k))switch(k.toLowerCase()){case"doctype":break;case"title":f="<title>"+r.metadata.parsed.title+`</title>
`;break;case"charset":i==="html"||i==="html5"?d='<meta charset="'+r.metadata.parsed.charset+`">
`:d='<meta name="charset" content="'+r.metadata.parsed.charset+`">
`;break;case"language":case"lang":p=' lang="'+r.metadata.parsed[k]+'"',b+='<meta name="'+k+'" content="'+r.metadata.parsed[k]+`">
`;break;default:b+='<meta name="'+k+'" content="'+r.metadata.parsed[k]+`">
`}return e=s+"<html"+p+`>
<head>
`+f+d+b+`</head>
<body>
`+e.trim()+`
</body>
</html>`,e=r.converter._dispatch("completeHTMLDocument.after",e,t,r),e}),n.subParser("detab",function(e,t,r){return e=r.converter._dispatch("detab.before",e,t,r),e=e.replace(/\t(?=\t)/g,"    "),e=e.replace(/\t/g,"¨A¨B"),e=e.replace(/¨B(.+?)¨A/g,function(i,s){for(var f=s,d=4-f.length%4,p=0;p<d;p++)f+=" ";return f}),e=e.replace(/¨A/g,"    "),e=e.replace(/¨B/g,""),e=r.converter._dispatch("detab.after",e,t,r),e}),n.subParser("ellipsis",function(e,t,r){return t.ellipsis&&(e=r.converter._dispatch("ellipsis.before",e,t,r),e=e.replace(/\.\.\./g,"…"),e=r.converter._dispatch("ellipsis.after",e,t,r)),e}),n.subParser("emoji",function(e,t,r){if(!t.emoji)return e;e=r.converter._dispatch("emoji.before",e,t,r);var i=/:([\S]+?):/g;return e=e.replace(i,function(s,f){return n.helper.emojis.hasOwnProperty(f)?n.helper.emojis[f]:s}),e=r.converter._dispatch("emoji.after",e,t,r),e}),n.subParser("encodeAmpsAndAngles",function(e,t,r){return e=r.converter._dispatch("encodeAmpsAndAngles.before",e,t,r),e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?$!])/gi,"&lt;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=r.converter._dispatch("encodeAmpsAndAngles.after",e,t,r),e}),n.subParser("encodeBackslashEscapes",function(e,t,r){return e=r.converter._dispatch("encodeBackslashEscapes.before",e,t,r),e=e.replace(/\\(\\)/g,n.helper.escapeCharactersCallback),e=e.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g,n.helper.escapeCharactersCallback),e=r.converter._dispatch("encodeBackslashEscapes.after",e,t,r),e}),n.subParser("encodeCode",function(e,t,r){return e=r.converter._dispatch("encodeCode.before",e,t,r),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,n.helper.escapeCharactersCallback),e=r.converter._dispatch("encodeCode.after",e,t,r),e}),n.subParser("escapeSpecialCharsWithinTagAttributes",function(e,t,r){e=r.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",e,t,r);var i=/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,s=/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;return e=e.replace(i,function(f){return f.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,n.helper.escapeCharactersCallback)}),e=e.replace(s,function(f){return f.replace(/([\\`*_~=|])/g,n.helper.escapeCharactersCallback)}),e=r.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",e,t,r),e}),n.subParser("githubCodeBlocks",function(e,t,r){return t.ghCodeBlocks?(e=r.converter._dispatch("githubCodeBlocks.before",e,t,r),e+="¨0",e=e.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,function(i,s,f,d){var p=t.omitExtraWLInCodeBlocks?"":`
`;return d=n.subParser("encodeCode")(d,t,r),d=n.subParser("detab")(d,t,r),d=d.replace(/^\n+/g,""),d=d.replace(/\n+$/g,""),d="<pre><code"+(f?' class="'+f+" language-"+f+'"':"")+">"+d+p+"</code></pre>",d=n.subParser("hashBlock")(d,t,r),`

¨G`+(r.ghCodeBlocks.push({text:i,codeblock:d})-1)+`G

`}),e=e.replace(/¨0/,""),r.converter._dispatch("githubCodeBlocks.after",e,t,r)):e}),n.subParser("hashBlock",function(e,t,r){return e=r.converter._dispatch("hashBlock.before",e,t,r),e=e.replace(/(^\n+|\n+$)/g,""),e=`

¨K`+(r.gHtmlBlocks.push(e)-1)+`K

`,e=r.converter._dispatch("hashBlock.after",e,t,r),e}),n.subParser("hashCodeTags",function(e,t,r){e=r.converter._dispatch("hashCodeTags.before",e,t,r);var i=function(s,f,d,p){var b=d+n.subParser("encodeCode")(f,t,r)+p;return"¨C"+(r.gHtmlSpans.push(b)-1)+"C"};return e=n.helper.replaceRecursiveRegExp(e,i,"<code\\b[^>]*>","</code>","gim"),e=r.converter._dispatch("hashCodeTags.after",e,t,r),e}),n.subParser("hashElement",function(e,t,r){return function(i,s){var f=s;return f=f.replace(/\n\n/g,`
`),f=f.replace(/^\n/,""),f=f.replace(/\n+$/g,""),f=`

¨K`+(r.gHtmlBlocks.push(f)-1)+`K

`,f}}),n.subParser("hashHTMLBlocks",function(e,t,r){e=r.converter._dispatch("hashHTMLBlocks.before",e,t,r);var i=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],s=function(l,C,O,B){var V=l;return O.search(/\bmarkdown\b/)!==-1&&(V=O+r.converter.makeHtml(C)+B),`

¨K`+(r.gHtmlBlocks.push(V)-1)+`K

`};t.backslashEscapesHTMLTags&&(e=e.replace(/\\<(\/?[^>]+?)>/g,function(l,C){return"&lt;"+C+"&gt;"}));for(var f=0;f<i.length;++f)for(var d,p=new RegExp("^ {0,3}(<"+i[f]+"\\b[^>]*>)","im"),b="<"+i[f]+"\\b[^>]*>",k="</"+i[f]+">";(d=n.helper.regexIndexOf(e,p))!==-1;){var A=n.helper.splitAtIndex(e,d),T=n.helper.replaceRecursiveRegExp(A[1],s,b,k,"im");if(T===A[1])break;e=A[0].concat(T)}return e=e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,n.subParser("hashElement")(e,t,r)),e=n.helper.replaceRecursiveRegExp(e,function(l){return`

¨K`+(r.gHtmlBlocks.push(l)-1)+`K

`},"^ {0,3}<!--","-->","gm"),e=e.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,n.subParser("hashElement")(e,t,r)),e=r.converter._dispatch("hashHTMLBlocks.after",e,t,r),e}),n.subParser("hashHTMLSpans",function(e,t,r){e=r.converter._dispatch("hashHTMLSpans.before",e,t,r);function i(s){return"¨C"+(r.gHtmlSpans.push(s)-1)+"C"}return e=e.replace(/<[^>]+?\/>/gi,function(s){return i(s)}),e=e.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,function(s){return i(s)}),e=e.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,function(s){return i(s)}),e=e.replace(/<[^>]+?>/gi,function(s){return i(s)}),e=r.converter._dispatch("hashHTMLSpans.after",e,t,r),e}),n.subParser("unhashHTMLSpans",function(e,t,r){e=r.converter._dispatch("unhashHTMLSpans.before",e,t,r);for(var i=0;i<r.gHtmlSpans.length;++i){for(var s=r.gHtmlSpans[i],f=0;/¨C(\d+)C/.test(s);){var d=RegExp.$1;if(s=s.replace("¨C"+d+"C",r.gHtmlSpans[d]),f===10){console.error("maximum nesting of 10 spans reached!!!");break}++f}e=e.replace("¨C"+i+"C",s)}return e=r.converter._dispatch("unhashHTMLSpans.after",e,t,r),e}),n.subParser("hashPreCodeTags",function(e,t,r){e=r.converter._dispatch("hashPreCodeTags.before",e,t,r);var i=function(s,f,d,p){var b=d+n.subParser("encodeCode")(f,t,r)+p;return`

¨G`+(r.ghCodeBlocks.push({text:s,codeblock:b})-1)+`G

`};return e=n.helper.replaceRecursiveRegExp(e,i,"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),e=r.converter._dispatch("hashPreCodeTags.after",e,t,r),e}),n.subParser("headers",function(e,t,r){e=r.converter._dispatch("headers.before",e,t,r);var i=isNaN(parseInt(t.headerLevelStart))?1:parseInt(t.headerLevelStart),s=t.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,f=t.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;e=e.replace(s,function(b,k){var A=n.subParser("spanGamut")(k,t,r),T=t.noHeaderId?"":' id="'+p(k)+'"',l=i,C="<h"+l+T+">"+A+"</h"+l+">";return n.subParser("hashBlock")(C,t,r)}),e=e.replace(f,function(b,k){var A=n.subParser("spanGamut")(k,t,r),T=t.noHeaderId?"":' id="'+p(k)+'"',l=i+1,C="<h"+l+T+">"+A+"</h"+l+">";return n.subParser("hashBlock")(C,t,r)});var d=t.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;e=e.replace(d,function(b,k,A){var T=A;t.customizedHeaderId&&(T=A.replace(/\s?\{([^{]+?)}\s*$/,""));var l=n.subParser("spanGamut")(T,t,r),C=t.noHeaderId?"":' id="'+p(A)+'"',O=i-1+k.length,B="<h"+O+C+">"+l+"</h"+O+">";return n.subParser("hashBlock")(B,t,r)});function p(b){var k,A;if(t.customizedHeaderId){var T=b.match(/\{([^{]+?)}\s*$/);T&&T[1]&&(b=T[1])}return k=b,n.helper.isString(t.prefixHeaderId)?A=t.prefixHeaderId:t.prefixHeaderId===!0?A="section-":A="",t.rawPrefixHeaderId||(k=A+k),t.ghCompatibleHeaderId?k=k.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():t.rawHeaderId?k=k.replace(/ /g,"-").replace(/&amp;/g,"&").replace(/¨T/g,"¨").replace(/¨D/g,"$").replace(/["']/g,"-").toLowerCase():k=k.replace(/[^\w]/g,"").toLowerCase(),t.rawPrefixHeaderId&&(k=A+k),r.hashLinkCounts[k]?k=k+"-"+r.hashLinkCounts[k]++:r.hashLinkCounts[k]=1,k}return e=r.converter._dispatch("headers.after",e,t,r),e}),n.subParser("horizontalRule",function(e,t,r){e=r.converter._dispatch("horizontalRule.before",e,t,r);var i=n.subParser("hashBlock")("<hr />",t,r);return e=e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,i),e=e.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,i),e=e.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,i),e=r.converter._dispatch("horizontalRule.after",e,t,r),e}),n.subParser("images",function(e,t,r){e=r.converter._dispatch("images.before",e,t,r);var i=/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,s=/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,f=/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,d=/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,p=/!\[([^\[\]]+)]()()()()()/g;function b(A,T,l,C,O,B,V,R){return C=C.replace(/\s/g,""),k(A,T,l,C,O,B,V,R)}function k(A,T,l,C,O,B,V,R){var G=r.gUrls,K=r.gTitles,X=r.gDimensions;if(l=l.toLowerCase(),R||(R=""),A.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)C="";else if(C===""||C===null)if((l===""||l===null)&&(l=T.toLowerCase().replace(/ ?\n/g," ")),C="#"+l,!n.helper.isUndefined(G[l]))C=G[l],n.helper.isUndefined(K[l])||(R=K[l]),n.helper.isUndefined(X[l])||(O=X[l].width,B=X[l].height);else return A;T=T.replace(/"/g,"&quot;").replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback),C=C.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback);var _='<img src="'+C+'" alt="'+T+'"';return R&&n.helper.isString(R)&&(R=R.replace(/"/g,"&quot;").replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback),_+=' title="'+R+'"'),O&&B&&(O=O==="*"?"auto":O,B=B==="*"?"auto":B,_+=' width="'+O+'"',_+=' height="'+B+'"'),_+=" />",_}return e=e.replace(d,k),e=e.replace(f,b),e=e.replace(s,k),e=e.replace(i,k),e=e.replace(p,k),e=r.converter._dispatch("images.after",e,t,r),e}),n.subParser("italicsAndBold",function(e,t,r){e=r.converter._dispatch("italicsAndBold.before",e,t,r);function i(s,f,d){return f+s+d}return t.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(s,f){return i(f,"<strong><em>","</em></strong>")}),e=e.replace(/\b__(\S[\s\S]*?)__\b/g,function(s,f){return i(f,"<strong>","</strong>")}),e=e.replace(/\b_(\S[\s\S]*?)_\b/g,function(s,f){return i(f,"<em>","</em>")})):(e=e.replace(/___(\S[\s\S]*?)___/g,function(s,f){return/\S$/.test(f)?i(f,"<strong><em>","</em></strong>"):s}),e=e.replace(/__(\S[\s\S]*?)__/g,function(s,f){return/\S$/.test(f)?i(f,"<strong>","</strong>"):s}),e=e.replace(/_([^\s_][\s\S]*?)_/g,function(s,f){return/\S$/.test(f)?i(f,"<em>","</em>"):s})),t.literalMidWordAsterisks?(e=e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,function(s,f,d){return i(d,f+"<strong><em>","</em></strong>")}),e=e.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,function(s,f,d){return i(d,f+"<strong>","</strong>")}),e=e.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,function(s,f,d){return i(d,f+"<em>","</em>")})):(e=e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(s,f){return/\S$/.test(f)?i(f,"<strong><em>","</em></strong>"):s}),e=e.replace(/\*\*(\S[\s\S]*?)\*\*/g,function(s,f){return/\S$/.test(f)?i(f,"<strong>","</strong>"):s}),e=e.replace(/\*([^\s*][\s\S]*?)\*/g,function(s,f){return/\S$/.test(f)?i(f,"<em>","</em>"):s})),e=r.converter._dispatch("italicsAndBold.after",e,t,r),e}),n.subParser("lists",function(e,t,r){function i(d,p){r.gListLevel++,d=d.replace(/\n{2,}$/,`
`),d+="¨0";var b=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,k=/\n[ \t]*\n(?!¨0)/.test(d);return t.disableForced4SpacesIndentedSublists&&(b=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),d=d.replace(b,function(A,T,l,C,O,B,V){V=V&&V.trim()!=="";var R=n.subParser("outdent")(O,t,r),G="";return B&&t.tasklists&&(G=' class="task-list-item" style="list-style-type: none;"',R=R.replace(/^[ \t]*\[(x|X| )?]/m,function(){var K='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return V&&(K+=" checked"),K+=">",K})),R=R.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(K){return"¨A"+K}),T||R.search(/\n{2,}/)>-1?(R=n.subParser("githubCodeBlocks")(R,t,r),R=n.subParser("blockGamut")(R,t,r)):(R=n.subParser("lists")(R,t,r),R=R.replace(/\n$/,""),R=n.subParser("hashHTMLBlocks")(R,t,r),R=R.replace(/\n\n+/g,`

`),k?R=n.subParser("paragraphs")(R,t,r):R=n.subParser("spanGamut")(R,t,r)),R=R.replace("¨A",""),R="<li"+G+">"+R+`</li>
`,R}),d=d.replace(/¨0/g,""),r.gListLevel--,p&&(d=d.replace(/\s+$/,"")),d}function s(d,p){if(p==="ol"){var b=d.match(/^ *(\d+)\./);if(b&&b[1]!=="1")return' start="'+b[1]+'"'}return""}function f(d,p,b){var k=t.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,A=t.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,T=p==="ul"?k:A,l="";if(d.search(T)!==-1)(function O(B){var V=B.search(T),R=s(d,p);V!==-1?(l+=`

<`+p+R+`>
`+i(B.slice(0,V),!!b)+"</"+p+`>
`,p=p==="ul"?"ol":"ul",T=p==="ul"?k:A,O(B.slice(V))):l+=`

<`+p+R+`>
`+i(B,!!b)+"</"+p+`>
`})(d);else{var C=s(d,p);l=`

<`+p+C+`>
`+i(d,!!b)+"</"+p+`>
`}return l}return e=r.converter._dispatch("lists.before",e,t,r),e+="¨0",r.gListLevel?e=e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(d,p,b){var k=b.search(/[*+-]/g)>-1?"ul":"ol";return f(p,k,!0)}):e=e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(d,p,b,k){var A=k.search(/[*+-]/g)>-1?"ul":"ol";return f(b,A,!1)}),e=e.replace(/¨0/,""),e=r.converter._dispatch("lists.after",e,t,r),e}),n.subParser("metadata",function(e,t,r){if(!t.metadata)return e;e=r.converter._dispatch("metadata.before",e,t,r);function i(s){r.metadata.raw=s,s=s.replace(/&/g,"&amp;").replace(/"/g,"&quot;"),s=s.replace(/\n {4}/g," "),s.replace(/^([\S ]+): +([\s\S]+?)$/gm,function(f,d,p){return r.metadata.parsed[d]=p,""})}return e=e.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,function(s,f,d){return i(d),"¨M"}),e=e.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,function(s,f,d){return f&&(r.metadata.format=f),i(d),"¨M"}),e=e.replace(/¨M/g,""),e=r.converter._dispatch("metadata.after",e,t,r),e}),n.subParser("outdent",function(e,t,r){return e=r.converter._dispatch("outdent.before",e,t,r),e=e.replace(/^(\t|[ ]{1,4})/gm,"¨0"),e=e.replace(/¨0/g,""),e=r.converter._dispatch("outdent.after",e,t,r),e}),n.subParser("paragraphs",function(e,t,r){e=r.converter._dispatch("paragraphs.before",e,t,r),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"");for(var i=e.split(/\n{2,}/g),s=[],f=i.length,d=0;d<f;d++){var p=i[d];p.search(/¨(K|G)(\d+)\1/g)>=0?s.push(p):p.search(/\S/)>=0&&(p=n.subParser("spanGamut")(p,t,r),p=p.replace(/^([ \t]*)/g,"<p>"),p+="</p>",s.push(p))}for(f=s.length,d=0;d<f;d++){for(var b="",k=s[d],A=!1;/¨(K|G)(\d+)\1/.test(k);){var T=RegExp.$1,l=RegExp.$2;T==="K"?b=r.gHtmlBlocks[l]:A?b=n.subParser("encodeCode")(r.ghCodeBlocks[l].text,t,r):b=r.ghCodeBlocks[l].codeblock,b=b.replace(/\$/g,"$$$$"),k=k.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,b),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(k)&&(A=!0)}s[d]=k}return e=s.join(`
`),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,""),r.converter._dispatch("paragraphs.after",e,t,r)}),n.subParser("runExtension",function(e,t,r,i){if(e.filter)t=e.filter(t,i.converter,r);else if(e.regex){var s=e.regex;s instanceof RegExp||(s=new RegExp(s,"g")),t=t.replace(s,e.replace)}return t}),n.subParser("spanGamut",function(e,t,r){return e=r.converter._dispatch("spanGamut.before",e,t,r),e=n.subParser("codeSpans")(e,t,r),e=n.subParser("escapeSpecialCharsWithinTagAttributes")(e,t,r),e=n.subParser("encodeBackslashEscapes")(e,t,r),e=n.subParser("images")(e,t,r),e=n.subParser("anchors")(e,t,r),e=n.subParser("autoLinks")(e,t,r),e=n.subParser("simplifiedAutoLinks")(e,t,r),e=n.subParser("emoji")(e,t,r),e=n.subParser("underline")(e,t,r),e=n.subParser("italicsAndBold")(e,t,r),e=n.subParser("strikethrough")(e,t,r),e=n.subParser("ellipsis")(e,t,r),e=n.subParser("hashHTMLSpans")(e,t,r),e=n.subParser("encodeAmpsAndAngles")(e,t,r),t.simpleLineBreaks?/\n\n¨K/.test(e)||(e=e.replace(/\n+/g,`<br />
`)):e=e.replace(/  +\n/g,`<br />
`),e=r.converter._dispatch("spanGamut.after",e,t,r),e}),n.subParser("strikethrough",function(e,t,r){function i(s){return t.simplifiedAutoLink&&(s=n.subParser("simplifiedAutoLinks")(s,t,r)),"<del>"+s+"</del>"}return t.strikethrough&&(e=r.converter._dispatch("strikethrough.before",e,t,r),e=e.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(s,f){return i(f)}),e=r.converter._dispatch("strikethrough.after",e,t,r)),e}),n.subParser("stripLinkDefinitions",function(e,t,r){var i=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,s=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;e+="¨0";var f=function(d,p,b,k,A,T,l){return p=p.toLowerCase(),e.toLowerCase().split(p).length-1<2?d:(b.match(/^data:.+?\/.+?;base64,/)?r.gUrls[p]=b.replace(/\s/g,""):r.gUrls[p]=n.subParser("encodeAmpsAndAngles")(b,t,r),T?T+l:(l&&(r.gTitles[p]=l.replace(/"|'/g,"&quot;")),t.parseImgDimensions&&k&&A&&(r.gDimensions[p]={width:k,height:A}),""))};return e=e.replace(s,f),e=e.replace(i,f),e=e.replace(/¨0/,""),e}),n.subParser("tables",function(e,t,r){if(!t.tables)return e;var i=/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,s=/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;function f(A){return/^:[ \t]*--*$/.test(A)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(A)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(A)?' style="text-align:center;"':""}function d(A,T){var l="";return A=A.trim(),(t.tablesHeaderId||t.tableHeaderId)&&(l=' id="'+A.replace(/ /g,"_").toLowerCase()+'"'),A=n.subParser("spanGamut")(A,t,r),"<th"+l+T+">"+A+`</th>
`}function p(A,T){var l=n.subParser("spanGamut")(A,t,r);return"<td"+T+">"+l+`</td>
`}function b(A,T){for(var l=`<table>
<thead>
<tr>
`,C=A.length,O=0;O<C;++O)l+=A[O];for(l+=`</tr>
</thead>
<tbody>
`,O=0;O<T.length;++O){l+=`<tr>
`;for(var B=0;B<C;++B)l+=T[O][B];l+=`</tr>
`}return l+=`</tbody>
</table>
`,l}function k(A){var T,l=A.split(`
`);for(T=0;T<l.length;++T)/^ {0,3}\|/.test(l[T])&&(l[T]=l[T].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(l[T])&&(l[T]=l[T].replace(/\|[ \t]*$/,"")),l[T]=n.subParser("codeSpans")(l[T],t,r);var C=l[0].split("|").map(function(_){return _.trim()}),O=l[1].split("|").map(function(_){return _.trim()}),B=[],V=[],R=[],G=[];for(l.shift(),l.shift(),T=0;T<l.length;++T)l[T].trim()!==""&&B.push(l[T].split("|").map(function(_){return _.trim()}));if(C.length<O.length)return A;for(T=0;T<O.length;++T)R.push(f(O[T]));for(T=0;T<C.length;++T)n.helper.isUndefined(R[T])&&(R[T]=""),V.push(d(C[T],R[T]));for(T=0;T<B.length;++T){for(var K=[],X=0;X<V.length;++X)n.helper.isUndefined(B[T][X]),K.push(p(B[T][X],R[X]));G.push(K)}return b(V,G)}return e=r.converter._dispatch("tables.before",e,t,r),e=e.replace(/\\(\|)/g,n.helper.escapeCharactersCallback),e=e.replace(i,k),e=e.replace(s,k),e=r.converter._dispatch("tables.after",e,t,r),e}),n.subParser("underline",function(e,t,r){return t.underline&&(e=r.converter._dispatch("underline.before",e,t,r),t.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(i,s){return"<u>"+s+"</u>"}),e=e.replace(/\b__(\S[\s\S]*?)__\b/g,function(i,s){return"<u>"+s+"</u>"})):(e=e.replace(/___(\S[\s\S]*?)___/g,function(i,s){return/\S$/.test(s)?"<u>"+s+"</u>":i}),e=e.replace(/__(\S[\s\S]*?)__/g,function(i,s){return/\S$/.test(s)?"<u>"+s+"</u>":i})),e=e.replace(/(_)/g,n.helper.escapeCharactersCallback),e=r.converter._dispatch("underline.after",e,t,r)),e}),n.subParser("unescapeSpecialChars",function(e,t,r){return e=r.converter._dispatch("unescapeSpecialChars.before",e,t,r),e=e.replace(/¨E(\d+)E/g,function(i,s){var f=parseInt(s);return String.fromCharCode(f)}),e=r.converter._dispatch("unescapeSpecialChars.after",e,t,r),e}),n.subParser("makeMarkdown.blockquote",function(e,t){var r="";if(e.hasChildNodes())for(var i=e.childNodes,s=i.length,f=0;f<s;++f){var d=n.subParser("makeMarkdown.node")(i[f],t);d!==""&&(r+=d)}return r=r.trim(),r="> "+r.split(`
`).join(`
> `),r}),n.subParser("makeMarkdown.codeBlock",function(e,t){var r=e.getAttribute("language"),i=e.getAttribute("precodenum");return"```"+r+`
`+t.preList[i]+"\n```"}),n.subParser("makeMarkdown.codeSpan",function(e){return"`"+e.innerHTML+"`"}),n.subParser("makeMarkdown.emphasis",function(e,t){var r="";if(e.hasChildNodes()){r+="*";for(var i=e.childNodes,s=i.length,f=0;f<s;++f)r+=n.subParser("makeMarkdown.node")(i[f],t);r+="*"}return r}),n.subParser("makeMarkdown.header",function(e,t,r){var i=new Array(r+1).join("#"),s="";if(e.hasChildNodes()){s=i+" ";for(var f=e.childNodes,d=f.length,p=0;p<d;++p)s+=n.subParser("makeMarkdown.node")(f[p],t)}return s}),n.subParser("makeMarkdown.hr",function(){return"---"}),n.subParser("makeMarkdown.image",function(e){var t="";return e.hasAttribute("src")&&(t+="!["+e.getAttribute("alt")+"](",t+="<"+e.getAttribute("src")+">",e.hasAttribute("width")&&e.hasAttribute("height")&&(t+=" ="+e.getAttribute("width")+"x"+e.getAttribute("height")),e.hasAttribute("title")&&(t+=' "'+e.getAttribute("title")+'"'),t+=")"),t}),n.subParser("makeMarkdown.links",function(e,t){var r="";if(e.hasChildNodes()&&e.hasAttribute("href")){var i=e.childNodes,s=i.length;r="[";for(var f=0;f<s;++f)r+=n.subParser("makeMarkdown.node")(i[f],t);r+="](",r+="<"+e.getAttribute("href")+">",e.hasAttribute("title")&&(r+=' "'+e.getAttribute("title")+'"'),r+=")"}return r}),n.subParser("makeMarkdown.list",function(e,t,r){var i="";if(!e.hasChildNodes())return"";for(var s=e.childNodes,f=s.length,d=e.getAttribute("start")||1,p=0;p<f;++p)if(!(typeof s[p].tagName>"u"||s[p].tagName.toLowerCase()!=="li")){var b="";r==="ol"?b=d.toString()+". ":b="- ",i+=b+n.subParser("makeMarkdown.listItem")(s[p],t),++d}return i+=`
<!-- -->
`,i.trim()}),n.subParser("makeMarkdown.listItem",function(e,t){for(var r="",i=e.childNodes,s=i.length,f=0;f<s;++f)r+=n.subParser("makeMarkdown.node")(i[f],t);return/\n$/.test(r)?r=r.split(`
`).join(`
    `).replace(/^ {4}$/gm,"").replace(/\n\n+/g,`

`):r+=`
`,r}),n.subParser("makeMarkdown.node",function(e,t,r){r=r||!1;var i="";if(e.nodeType===3)return n.subParser("makeMarkdown.txt")(e,t);if(e.nodeType===8)return"<!--"+e.data+`-->

`;if(e.nodeType!==1)return"";var s=e.tagName.toLowerCase();switch(s){case"h1":r||(i=n.subParser("makeMarkdown.header")(e,t,1)+`

`);break;case"h2":r||(i=n.subParser("makeMarkdown.header")(e,t,2)+`

`);break;case"h3":r||(i=n.subParser("makeMarkdown.header")(e,t,3)+`

`);break;case"h4":r||(i=n.subParser("makeMarkdown.header")(e,t,4)+`

`);break;case"h5":r||(i=n.subParser("makeMarkdown.header")(e,t,5)+`

`);break;case"h6":r||(i=n.subParser("makeMarkdown.header")(e,t,6)+`

`);break;case"p":r||(i=n.subParser("makeMarkdown.paragraph")(e,t)+`

`);break;case"blockquote":r||(i=n.subParser("makeMarkdown.blockquote")(e,t)+`

`);break;case"hr":r||(i=n.subParser("makeMarkdown.hr")(e,t)+`

`);break;case"ol":r||(i=n.subParser("makeMarkdown.list")(e,t,"ol")+`

`);break;case"ul":r||(i=n.subParser("makeMarkdown.list")(e,t,"ul")+`

`);break;case"precode":r||(i=n.subParser("makeMarkdown.codeBlock")(e,t)+`

`);break;case"pre":r||(i=n.subParser("makeMarkdown.pre")(e,t)+`

`);break;case"table":r||(i=n.subParser("makeMarkdown.table")(e,t)+`

`);break;case"code":i=n.subParser("makeMarkdown.codeSpan")(e,t);break;case"em":case"i":i=n.subParser("makeMarkdown.emphasis")(e,t);break;case"strong":case"b":i=n.subParser("makeMarkdown.strong")(e,t);break;case"del":i=n.subParser("makeMarkdown.strikethrough")(e,t);break;case"a":i=n.subParser("makeMarkdown.links")(e,t);break;case"img":i=n.subParser("makeMarkdown.image")(e,t);break;default:i=e.outerHTML+`

`}return i}),n.subParser("makeMarkdown.paragraph",function(e,t){var r="";if(e.hasChildNodes())for(var i=e.childNodes,s=i.length,f=0;f<s;++f)r+=n.subParser("makeMarkdown.node")(i[f],t);return r=r.trim(),r}),n.subParser("makeMarkdown.pre",function(e,t){var r=e.getAttribute("prenum");return"<pre>"+t.preList[r]+"</pre>"}),n.subParser("makeMarkdown.strikethrough",function(e,t){var r="";if(e.hasChildNodes()){r+="~~";for(var i=e.childNodes,s=i.length,f=0;f<s;++f)r+=n.subParser("makeMarkdown.node")(i[f],t);r+="~~"}return r}),n.subParser("makeMarkdown.strong",function(e,t){var r="";if(e.hasChildNodes()){r+="**";for(var i=e.childNodes,s=i.length,f=0;f<s;++f)r+=n.subParser("makeMarkdown.node")(i[f],t);r+="**"}return r}),n.subParser("makeMarkdown.table",function(e,t){var r="",i=[[],[]],s=e.querySelectorAll("thead>tr>th"),f=e.querySelectorAll("tbody>tr"),d,p;for(d=0;d<s.length;++d){var b=n.subParser("makeMarkdown.tableCell")(s[d],t),k="---";if(s[d].hasAttribute("style")){var A=s[d].getAttribute("style").toLowerCase().replace(/\s/g,"");switch(A){case"text-align:left;":k=":---";break;case"text-align:right;":k="---:";break;case"text-align:center;":k=":---:";break}}i[0][d]=b.trim(),i[1][d]=k}for(d=0;d<f.length;++d){var T=i.push([])-1,l=f[d].getElementsByTagName("td");for(p=0;p<s.length;++p){var C=" ";typeof l[p]<"u"&&(C=n.subParser("makeMarkdown.tableCell")(l[p],t)),i[T].push(C)}}var O=3;for(d=0;d<i.length;++d)for(p=0;p<i[d].length;++p){var B=i[d][p].length;B>O&&(O=B)}for(d=0;d<i.length;++d){for(p=0;p<i[d].length;++p)d===1?i[d][p].slice(-1)===":"?i[d][p]=n.helper.padEnd(i[d][p].slice(-1),O-1,"-")+":":i[d][p]=n.helper.padEnd(i[d][p],O,"-"):i[d][p]=n.helper.padEnd(i[d][p],O);r+="| "+i[d].join(" | ")+` |
`}return r.trim()}),n.subParser("makeMarkdown.tableCell",function(e,t){var r="";if(!e.hasChildNodes())return"";for(var i=e.childNodes,s=i.length,f=0;f<s;++f)r+=n.subParser("makeMarkdown.node")(i[f],t,!0);return r.trim()}),n.subParser("makeMarkdown.txt",function(e){var t=e.nodeValue;return t=t.replace(/ +/g," "),t=t.replace(/¨NBSP;/g," "),t=n.helper.unescapeHTMLEntities(t),t=t.replace(/([*_~|`])/g,"\\$1"),t=t.replace(/^(\s*)>/g,"\\$1>"),t=t.replace(/^#/gm,"\\#"),t=t.replace(/^(\s*)([-=]{3,})(\s*)$/,"$1\\$2$3"),t=t.replace(/^( {0,3}\d+)\./gm,"$1\\."),t=t.replace(/^( {0,3})([+-])/gm,"$1\\$2"),t=t.replace(/]([\s]*)\(/g,"\\]$1\\("),t=t.replace(/^ {0,3}\[([\S \t]*?)]:/gm,"\\[$1]:"),t});var L=this;a.exports?a.exports=n:L.showdown=n}).call(Un)}(ye)),ye.exports}var Wn=qn();const Gn=mn(Wn);function de({class:a,...u},o){const n=Y(a),g=new Gn.Converter().makeHtml(o),x=h.div({class:`style-markup ${n.val}`,innerHTML:g,...u});return Prism.highlightAllUnder(x),x}function Ee(a=0){return new Promise(u=>setTimeout(u,a))}function Xn(a,u){const o=a.indexOf(u);return o===-1?a:[...a.slice(0,o),...a.slice(o+1)]}function Zn(a,u){return a.indexOf(u)===-1?a.concat(u):Xn(a,u)}function Kn(a,u,o=[]){const n=new AbortController;return document.addEventListener("click",c=>{if(!(c.target instanceof Node))return;const g=c.target;a.contains(g)||o.some(x=>x.contains(g))||document.contains(g)&&u(c)},{signal:n.signal}),n}function Jn(a,u){for(const o of u)if(o[0]===a)return o[1];throw`error: non-exhaustive patterns: ${a} not covered`}function fe(a,u){const o=Array.isArray(a)?a:[a],n=Array.isArray(u)?u:[u];for(const c of n)if(o.includes(c))return!0;return!1}const ie={NONE:"none",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},J={HOVER_IN:"hover-in",HOVER_OUT:"hover-out",HOVER:"hover",CLICK:"click",FOCUS:"focus",FOCUS_IN:"focus-in",FOCUS_OUT:"focus-out"},Be=h.div({name:"Popups",class:"fixed inset-0 z-[100] pointer-events-none"});he(document.documentElement,Be);function Se({visible:a=$(!1),direction:u=ie.BOTTOM,trigger:o=J.CLICK,onHide:n,name:c,class:g,...x},...z){const j=Y(g);let S;const F=$({height:0,width:0,left:0,top:0,yOffset:0,xOffset:0}),E=async()=>{if(!S)return;if(!w.isConnected)return P();if(!w.parentElement)throw new Error("Popup target has been removed from DOM");const y=w.parentElement.getBoundingClientRect();F.val={top:y.top,left:y.left,width:y.width,height:y.height,xOffset:0,yOffset:0},await Ee();const M=Be.getBoundingClientRect(),L=S.popup.getBoundingClientRect(),e={x:Math.max(-L.left,0),y:Math.max(-L.top,0)},t={x:Math.min(M.width-L.left-L.width,0),y:Math.min(M.height-L.top-L.height,0)};F.val={...F.val,xOffset:e.x+t.x,yOffset:e.y+t.y}},D=()=>{const y=Jn(u,[[ie.NONE,""],[ie.TOP,"bottom-full mb-1"],[ie.RIGHT,"left-full ml-1"],[ie.BOTTOM,"top-full mt-1"],[ie.LEFT,"right-full mr-1"]]),M=h.div({name:`${c} Popup`,class:()=>`absolute pointer-events-auto ${y} ${j.val}`,...x},z),L=h.div({name:`${c} Popup Anchor`,class:()=>"absolute transition pointer-events-none",style:()=>`left: ${F.val.left+F.val.xOffset}px; top: ${F.val.top+F.val.yOffset}px; height: ${F.val.height}px; width: ${F.val.width}px;`},M),e=Kn(M,()=>Ee().then(()=>a.val=!1),w.parentElement?[w.parentElement]:[]);he(Be,L),S={anchor:L,popup:M,abortController:e}},P=()=>{S==null||S.anchor.remove(),S==null||S.popup.remove(),S==null||S.abortController.abort(),S=void 0,n==null||n()},m=()=>{if(!w.parentElement)throw new Error("Popup target has been removed from DOM");fe(o,[J.HOVER,J.HOVER_IN])&&w.parentElement.addEventListener("mouseenter",()=>a.val=!0),fe(o,[J.HOVER,J.HOVER_OUT])&&w.parentElement.addEventListener("mouseleave",()=>a.val=!1),fe(o,J.CLICK)&&w.parentElement.addEventListener("click",()=>a.val=!0),fe(o,[J.FOCUS,J.FOCUS_IN])&&w.parentElement.addEventListener("focusin",()=>a.val=!0),fe(o,[J.FOCUS,J.FOCUS_OUT])&&w.parentElement.addEventListener("focusout",()=>a.val=!1)};ee(async()=>{if(!a.val)return P();S||D(),E()});const w=h.div({name:`${c} Popup Target`,hidden:!0});window.addEventListener("resize",E);const v=new ResizeObserver(E);return Ee().then(()=>v.observe(w.parentElement)).then(()=>m()),w}function Qn({options:a,value:u=$(void 0),required:o,class:n,...c}){const g=Y(n);return h.div({class:"flex flex-col gap-1 group"},a.map(x=>{const z=ee(()=>u.val===x.value);return h.div({name:"Radio",onclick:()=>u.val=z.val?void 0:x.value,"$data-selected":z,class:()=>{var j;return`group flex cursor-pointer justify-between items-center gap-2 select-none group-has-invalid:mood-critical ${(j=g.val)==null?void 0:j.split(" ").filter(S=>!S.includes("variant")).join(" ")}`},...c},x.name??String(x.value),ue({disabled:x.disabled,tabIndex:0,class:()=>{var j;return`button size-5 rounded-full focus-visible:mood-accent ${(j=g.val)==null?void 0:j.split(" ").filter(S=>S.includes("variant")).join(" ")}`}},h.div({class:"bg-current rounded-full size-2.5 aspect-square not-group-data-selected:hidden"})))}),h.input({type:"checkbox",checked:()=>u.val!==void 0,required:o,hidden:!0}))}function Q({options:a,value:u=$(a[0].value),useChips:o=!1,lead:n,trail:c,class:g,...x}){const z=Y(g),j=ee(()=>{var m;return(m=z.val)==null?void 0:m.split(" ").find(w=>w.includes("mood-"))}),S=ee(()=>Array.isArray(u.val)),F=ee(()=>u.val===void 0||Array.isArray(u.val)&&u.val.length===0),E=$(!1),D=m=>{if(Array.isArray(u.val))return u.val=Zn(u.val,m);u.val=m};return ue({name:"Select",class:()=>`flex rounded-lg button gap-2 justify-between focus-visible:mood-accent ${z.val}`,tabIndex:0,onclick:()=>E.val=!E.val,...x},n,()=>h.div({name:"Value Display",class:()=>`text-nowrap text-ellipsis overflow-hidden ${F.val?"text-swatch-700-foreground":""} ${o?"flex flex-wrap gap-1":""} ${E.val?"invisible":""}`},F.val?"None":Array.isArray(u.val)?o?u.val.map(m=>ue({class:"group mood-accent text-xs variant-soft rounded relative",onclick:w=>{w.stopPropagation(),D(m)}},h.span({class:"group-hover:opacity-25"},String(m)),h.i({class:"not-group-hover:hidden absolute right-1"},"close"))):u.val.map(m=>String(m)).join(", "):String(u.val)),c,re.svg({viewBox:"0 0 100 100",class:"size-4 flex-none",style:"stroke-linecap:round; stroke-linejoin:round;"},re.path({d:"M25,35L50,15L75,35",class:"stroke-current stroke-[10] fill-none",$hidden:()=>!S.val}),re.path({d:"M25,65L50,85L75,65",class:"stroke-current stroke-[10] fill-none",$hidden:()=>!S.val}),re.path({d:"M25,40L50,60L75,40",class:"stroke-current stroke-[10] fill-none",$hidden:S})),Se({name:"Select Content",visible:E,direction:"none",class:()=>`left-1/2 -translate-x-1/2 min-w-full max-h-40 overflow-y-auto card vessel shadow-lg p-1 rounded-lg card glass select-none ${j.val}`},()=>h.ul({name:"Select Options",class:"flex flex-col"},a.map(m=>{const w=ee(()=>fe(u.val,m.value));return Yn(m,S,w,D)}))))}function Yn(a,u,o,n){return h.div({"$data-selected":o,class:"contents group"},h.span({name:"Magic divider",class:"h-[1px] mx-1 pointer-events-none bg-surface-500/15 group-first:hidden group-hover:invisible group-data-selected:invisible [*:hover_+_*_>_&]:invisible [*[data-selected]_+_*_>_&]:invisible "}),h.button({class:"flex gap-2 not-disabled:hover:bg-surface-500/20 not-disabled:focus-visible:bg-surface-500/20 not-disabled:focus-visible:focus-ring disabled:bg-transparent px-1 rounded cursor-pointer justify-between disabled:opacity-50 disabled:cursor-not-allowed items-center group-data-selected:mood-accent group-data-selected:!bg-mood-500/25",$disabled:()=>a.disabled,tabIndex:0,onclick:()=>n==null?void 0:n(a.value)},h.span({class:"text-nowrap"},a.name??String(a.value)),re.svg({viewBox:"0 0 100 100",class:"size-4 not-group-data-selected:invisible",style:"stroke-linecap:round; stroke-linejoin:round;",$hidden:()=>!u.val},re.path({d:"M20,60L40,80L80,20",class:"stroke-current stroke-[10] fill-none"})),h.div({class:"bg-current rounded-full size-2 m-0.75 aspect-square not-group-data-selected:invisible",$hidden:u})))}function et({class:a},u){const o=Y(a),n=[...u.querySelectorAll("h1, h2, h3, h4, h5")],c=$(n[0]);return document.addEventListener("scroll",()=>{n.some((g,x)=>{if(g.getBoundingClientRect().bottom>u.scrollTop+112)return c.val=n[Math.max(x-1,0)],!0})}),h.ul({class:()=>`flex flex-col ${o.val}`},[...n].map(g=>{const x=parseInt(g.tagName.slice(1))-1;return h.li({onclick:()=>g.scrollIntoView({behavior:"smooth"}),"$data-indented":()=>x>0,"$data-selected":()=>c.val===g,style:`--indent: ${1+(x-1)*.5}rem;`,class:"group relative flex gap-4 cursor-pointer text-swatch-700-mood not-data-selected:hover:text-swatch-900-foreground data-selected:mood-accent data-selected:text-mood-500"},h.span({name:"Divider",class:"absolute h-full w-px left-0 bg-current/50 group-data-selected:bg-current not-group-data-indented:hidden group-hover:w-[4px] group-data-selected:w-[4px] transition-all"}),h.span({name:"Title",class:"group-data-indented:ml-(--indent) justify-start group-data-selected:font-semibold flex-1 py-0.5 z-1 transition-all"},g.textContent))}))}function Re({trigger:a=[J.HOVER,J.FOCUS],direction:u=ie.BOTTOM,class:o,...n},...c){const g=Y(o);return Se({trigger:a,direction:u,class:()=>`!control variant-soft-outline badge glass px-2 py-1 max-w-xs text-xs flex ${g.val}`,...n},c)}function Z(...a){const u=h.div({class:"language-typescript w-2xl *:scroll-m-21"},...a),o=et({class:"sticky top-24 w-xs not-xl:hidden"},u);return h.div({class:"flex gap-8 items-start"},u,o)}const nt=`# State

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
`;function tt(){return Z(de({class:"language-typescript w-2xl *:scroll-m-21"},nt))}const rt=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"})),at=`# Derive

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
`;function ut(){return Z(de({class:"language-typescript w-2xl *:scroll-m-21"},at))}const dt=Object.freeze(Object.defineProperty({__proto__:null,default:ut},Symbol.toStringTag,{value:"Module"})),st=`# Elements

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
`;function ot(){return Z(de({class:"language-typescript w-2xl *:scroll-m-21"},st))}const it=Object.freeze(Object.defineProperty({__proto__:null,default:ot},Symbol.toStringTag,{value:"Module"})),ct=`# Components

> Create your own composable pieces.
`;function lt(){return Z(de({class:"language-typescript w-2xl *:scroll-m-21"},ct))}const ft=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"})),pt=`# Context

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
`;function ht(){return Z(de({class:"language-typescript w-2xl *:scroll-m-21"},pt))}const gt=Object.freeze(Object.defineProperty({__proto__:null,default:ht},Symbol.toStringTag,{value:"Module"}));function mt(){const a=$(`<div>
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
</div>`),u=h.textarea({value:a,oninput:o=>a.val=o.target.value,class:"control variant-soft-outline w-full h-64"});return Z(h.h1("Converter"),h.blockquote(h.p("Create Savant code from HTML.")),h.h2("Overview"),u,q({content:"Tags"},()=>W({language:"typescript"})),q({content:"Components"},()=>"None"),q({content:"Code"},()=>W({language:"typescript"})))}const vt=Object.freeze(Object.defineProperty({__proto__:null,default:mt},Symbol.toStringTag,{value:"Module"})),bt=`# Router

> Manage site navigation.
`;function _t(){return Z(de({class:"language-typescript"},bt))}const wt=Object.freeze(Object.defineProperty({__proto__:null,default:_t},Symbol.toStringTag,{value:"Module"}));function yt(){const a=$("variant-filled"),u=$("mood-accent");return Z(h.h1("Badge"),h.blockquote("Delivers small but important pieces of information."),h.h2("Design"),h.p("Badges are designed to be a small, unobtrusive elements that convey important information concisely. It is typically used to highlight new or unread items, notifications, or status updates."),h.p("Badges use a smaller font size and padding to make them the same height as standard text, ensuring it fits seamlessly into layouts."),h.p("Badges color the text slightly based on mood to indicate they are not interactive, differentiating them from small buttons which instead use the standard foreground text color."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},gn({class:()=>`${a.val} ${u.val}`},"Demo Badge")),h.div({class:"flex flex-wrap gap-4 justify-center"},q({content:"Variant",class:"items-center"},Q({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:a,class:"variant-outline w-48"})),q({content:"Mood",class:"items-center"},Q({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:u,class:"variant-outline w-48"})))),()=>W({language:"ts"},`import { Badge } from "savant/ui"

Badge(
    { class: "${a.val} ${u.val}" },
    "Demo Badge",
)`),h.h2("Signature"),W({language:"ts"},`function Badge(
    props: HTMLElementProps,
    ...children: ChildDom[]
): HTMLElement`))}const kt=Object.freeze(Object.defineProperty({__proto__:null,default:yt},Symbol.toStringTag,{value:"Module"}));function Pt(){const a=$("variant-filled"),u=$("mood-accent"),o=$([]);return Z(h.h1("Button"),h.blockquote("Performs some action on user click."),h.h2("Design"),h.p("Button components are used when a specific, clear and manual action needs to be performed by the user.."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},ue({class:()=>`${[a.val,u.val,...o.val].join(" ")}`},"Demo Button")),h.div({class:"flex flex-wrap gap-4 justify-center"},q({content:"Variant",class:"items-center"},Q({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:a,class:"variant-outline w-48"})),q({content:"Mood",class:"items-center"},Q({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:u,class:"variant-outline w-48"})),q({content:"Extras",class:"items-center"},Q({options:[{value:"transition"},{value:"hover:raised"},{value:"active:lowered"}],value:o,class:"variant-outline w-48"})))),()=>W({language:"ts"},`import { Button } from "savant/ui"

Button(
    { class: "${[a.val,u.val,...o.val].join(" ")}" },
    "Demo Button",
)`),h.h2("Signature"),W({language:"ts"},`function Button(
    props: HTMLButtonProps,
    ...children: ChildDom[]
): HTMLButtonElement`))}const Ct=Object.freeze(Object.defineProperty({__proto__:null,default:Pt},Symbol.toStringTag,{value:"Module"}));function St(){const a=$("variant-soft-outline"),u=$("mood-none");return Z(h.h1("Checkbox"),h.blockquote("Offers clear binary choices."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},Ge({class:()=>`w-48 ${a.val} ${u.val}`},"Demo Checkbox")),h.div({class:"flex flex-wrap gap-4 justify-center"},q({content:"Variant",class:"items-center"},Q({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:a,class:"variant-outline w-48"})),q({content:"Mood",class:"items-center"},Q({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:u,class:"variant-outline w-48"})))),()=>W({language:"ts"},`import { Checkbox } from "savant/ui"

Checkbox(
    { class: \`${a.val} ${u.val}\` },
    "Demo Checkbox",
)`),h.h2("Signature"),W({language:"ts"},`function Checkbox(
    props: {
        value: State<boolean> = state(false),
        required: boolean = false,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`))}const At=Object.freeze(Object.defineProperty({__proto__:null,default:St},Symbol.toStringTag,{value:"Module"}));function xt(){const a=$("variant-outline"),u=$("mood-accent"),o=$(!0),n=$(50);return Z(h.h1("Circular Progress Bar"),h.blockquote("Displays the progress state of a lengthy process."),h.h2("Design"),h.p("Circular Progress Bars are used to compactly provide feedback to the user on the current progress state of a lengthy process."),h.p("Circular Progress Bars default to matching the size of enclosing text flows, ensuring they fit seamlessly into layouts."),h.p("Circular Progress Bars can be given children which will be displayed within the circle. Such children should be short, typically a percentage or number. Anything longer should be placed beneath the progress bar."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},Vn({progress:n,indefinite:o,class:()=>`${a.val} ${u.val}`},"Loading...")),h.div({class:"flex flex-wrap gap-4 justify-center"},q({content:"Variant",class:"items-center"},Q({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:a,class:"variant-outline w-48"})),q({content:"Mood",class:"items-center"},Q({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:u,class:"variant-outline w-48"})),q({content:"Progress",class:"items-center"},be({value:n,min:0,max:100,class:"variant-outline w-48"})),q({content:"Indefinite",class:"items-center"},Ge({value:o,class:"variant-outline w-48"},"Enabled")))),()=>W({language:"ts"},`import { CircularProgressBar } from "savant/ui"

CircularProgressBar(
    {
        progress: ${n.val},
        indefinite: ${o.val},
        class: "${a.val} ${u.val}"
    },
    "Loading...",
)`),h.h2("Signature"),W({language:"ts"},`function CircularProgressBar(
    {
        progress?: number = 50,
        indefinite?: boolean = false,

        ...restProps
    }: CircularProgressBarProps,
    ...children: ChildDom[]
): HTMLElement`))}const Tt=Object.freeze(Object.defineProperty({__proto__:null,default:xt},Symbol.toStringTag,{value:"Module"}));function Et(){return Z(h.h1("Code"),h.blockquote("Simple code syntax highlighting via ",h.a({href:"https://prismjs.com",class:"anchor"},"PrismJS"),"."),Hn({class:"mood-info p",icon:"info"},de({class:"language-typescript"},"Every code snippet in these docs uses the `Code` component.")),h.h2("Demo"),()=>W({language:"ts"},`import { Code } from "savant/ui"

Code(
    { language: "ts" },

    \`\\
import { Code } from "savant/ui"

Code(
    { language: "ts" },
    ...
)\`,
)`),h.h2("Signature"),W({language:"ts"},`function Code(
    props: { language: string, ...HTMLElementProps },
    ...children: ChildDom[]
): HTMLElement`))}const zt=Object.freeze(Object.defineProperty({__proto__:null,default:Et},Symbol.toStringTag,{value:"Module"}));function jt(){const a=$("text"),u=$("variant-soft-outline"),o=$("mood-none");return Z(h.h1("Input"),h.blockquote("Direct entry of text or numbers."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex flex-col justify-center gap-8"},()=>be({value:$(a.val==="text"?"Example text":42),class:()=>`${u.val} ${o.val}`})),h.div({class:"flex flex-wrap gap-4 justify-center"},q({content:"Type",class:"items-center"},Q({options:[{value:"text"},{value:"number"}],value:a,class:"variant-outline w-48"})),q({content:"Variant",class:"items-center"},Q({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:u,class:"variant-outline w-48"})),q({content:"Mood",class:"items-center"},Q({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:o,class:"variant-outline w-48"})))),()=>W({language:"ts"},`import { Input } from "savant/ui"

Input({
    value: state(${a.val==="text"?'"Example text"':42}),
    class: "${u.val} ${o.val}"
})`),h.h2("Signature"),W({language:"ts"},`function Input<T extends string | number>(
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
): HTMLElement`))}const Mt=Object.freeze(Object.defineProperty({__proto__:null,default:jt},Symbol.toStringTag,{value:"Module"}));function Ot(){const a=$([J.CLICK]);return Z(h.h1("Popup"),h.blockquote("Versatile dynamic content floating near its parent."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex justify-center flex-col gap-8 w-3xs"},ue({class:"variant-filled"},"Popup Trigger",()=>Se({trigger:a.val,class:"card glass vessel flex flex-col shadow"},"Hello! Click outside me to close."))),h.div({class:"flex flex-wrap gap-4 justify-center"},q({content:"Trigger",class:"items-center"},Q({options:[{value:J.CLICK},{value:J.HOVER},{value:J.HOVER_IN},{value:J.HOVER_OUT},{value:J.FOCUS},{value:J.FOCUS_IN},{value:J.FOCUS_OUT}],value:a,class:"variant-outline w-48"})))),()=>W({language:"ts"},`import { Button, Popup } from "savant/ui"

Button(
    {
        class: "variant-filled",
    },

    "Popup Trigger",

    () =>
        Popup(
            {
                trigger: ${JSON.stringify(a.val)},
                class: "card glass vessel flex flex-col shadow",
            },

            "Hello! Click outside me to close.",
        ),
),`),h.h2("Signature"),W({language:"ts"},`function Popup(
    props: {
        visible: State<boolean> = state(false),
        direction: PopupDirection = PopupDirection.BOTTOM,
        trigger: PopupTrigger = PopupTrigger.CLICK,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`))}const Lt=Object.freeze(Object.defineProperty({__proto__:null,default:Ot},Symbol.toStringTag,{value:"Module"}));function Ft(){const a=$("variant-soft-outline"),u=$("mood-none");return Z(h.h1("Radio"),h.blockquote("Offers a clear and direct set of exclusive options."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},Qn({value:$("Option 1"),options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"}],class:()=>`w-48 ${a.val} ${u.val}`})),h.div({class:"flex flex-wrap gap-4 justify-center"},q({content:"Variant",class:"items-center"},Q({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:a,class:"variant-outline w-48"})),q({content:"Mood",class:"items-center"},Q({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:u,class:"variant-outline w-48"})))),()=>W({language:"ts"},`import { Radio } from "savant/ui"

Radio({
    value: state("Option 1"),
    options: [
        { value: "Option 1" },
        { value: "Option 2" },
        { value: "Option 3" },
    ],
    class: "${a.val} ${u.val}",
})`),h.h2("Signature"),W({language:"ts"},`function Radio<T>(
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
}`))}const It=Object.freeze(Object.defineProperty({__proto__:null,default:Ft},Symbol.toStringTag,{value:"Module"})),ge={SINGLE:"single",MULTICHIPS:"multichips"};function Bt(){const a=$(ge.SINGLE),u=$("variant-soft-outline"),o=$("mood-none");return Z(h.h1("Select"),h.blockquote("Enables compact selection of one or more options."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 flex flex-col justify-center gap-8 w-3xs h-48"},()=>Q({value:a.val===ge.SINGLE?$("Option 1"):$(["Option 1","Option 2"]),options:[{value:"Option 1"},{value:"Option 2",disabled:!0},{value:"Option 3"},{value:"Option 4"}],useChips:a.val===ge.MULTICHIPS,class:()=>`${u.val} ${o.val}`})),h.div({class:"flex flex-wrap gap-4 justify-center"},q({content:"Type",class:"items-center"},Q({options:[{value:"single"},{value:"multi"},{value:"multichips"}],value:a,class:"variant-outline w-48"})),q({content:"Variant",class:"items-center"},Q({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:u,class:"variant-outline w-48"})),q({content:"Mood",class:"items-center"},Q({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:o,class:"variant-outline w-48"})))),()=>W({language:"ts"},`import { Select } from "savant/ui"

Select({
    value: state(${a.val===ge.SINGLE?'"Option 1"':'["Option 1", "Option 2"])'}),
    options: [
        { value: "Option 1" },
        { value: "Option 2", disabled: true },
        { value: "Option 3" },
        { value: "Option 4" },
    ],${a.val===ge.MULTICHIPS?`
    useChips: true,`:""}
    class: "${u.val} ${o.val}",
})`),h.h2("Signature"),W({language:"ts"},`function Select<T>(
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
}`))}const Rt=Object.freeze(Object.defineProperty({__proto__:null,default:Bt},Symbol.toStringTag,{value:"Module"}));function Dt(){return Z(h.h1("Tooltip"),h.blockquote("Provides concise contextual extra information."),h.h2("Demo"),h.div({class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 flex flex-col gap-8 w-3xs h-48 justify-center"},ue({class:"text-accent-500 font-bold"},"Tooltip (Hover Me)",Re({direction:"top",class:"left-1/2 -translate-x-1/2"},"Demo Tooltip")))),()=>W({language:"ts"},`import { Button, Tooltip } from "savant/ui"

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
)`),h.h2("Signature"),W({language:"ts"},`function Tooltip(
    props: {
        direction: PopupDirection = PopupDirection.BOTTOM,
        trigger: PopupTrigger = PopupTrigger.CLICK,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`))}const $t=Object.freeze(Object.defineProperty({__proto__:null,default:Dt},Symbol.toStringTag,{value:"Module"}));function Ht(){const a=$(""),u=$(""),o=$(!1),n=$(!1),c=$(!1);return Nn({name:"Sign In",class:"flex flex-col gap-4"},h.span({class:"text-xl font-bold"},"Sign In"),q({content:"Username"},be({type:"username",value:a,placeholder:"Enter username...",required:!0,lead:Te("person"),class:"variant-outline"})),q({content:h.span({class:"flex flex-1 justify-between items-center"},"Password",ue({type:"button",class:"mood-accent text-mood-500"},"Forgot?"))},be({type:()=>n.val?"text":"password",value:u,placeholder:"Enter password...",required:!0,lead:Te("key"),trail:ue({onclick:()=>n.val=!n.val},Te({class:()=>`transition ${n.val?"":"text-swatch-700-foreground"}`},()=>n.val?"visibility":"visibility_off")),onValidityChanged:g=>c.val=g,class:"variant-outline"})),Ge({value:o,class:"variant-outline"},h.span({class:"text-mini text-swatch-700-mood"},"Remember Password")),h.div({class:"flex gap-4 justify-end"},ue({type:"button",class:"hover:variant-soft"},"Cancel"),ue({type:"button",class:"variant-filled mood-accent"},"Sign In")))}function Vt(){return Z(h.h1("Sign In"),h.blockquote("Example Sign In component."),h.h2("Demo"),h.div({class:"card vessel bg-zebra zebra-opacity-20 flex flex-col items-center gap-4"},h.div({class:"p-8 card vessel bg-background flex items-center"},Ht())),h.h2("Code"),W({language:"typescript"},`function SignIn() {
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
}`))}const Nt=Object.freeze(Object.defineProperty({__proto__:null,default:Vt},Symbol.toStringTag,{value:"Module"})),vn=$(""),Xe=$(window.location.pathname),Ze=$(window.location.hash),en=$({}),nn=$({}),Ut="/",qt=()=>Xe.val.slice(Ut.length-1)+Ze.val,Wt=(a,{replace:u}={replace:!1})=>{const o=`${vn.val}${a}`;u?window.history.replaceState({},"",o):window.history.pushState({},"",o),Xe.val=o.split("#")[0],Ze.val=o.split("#").length>1?"#"+o.split("#")[1]:""};function bn({replace:a=!1,disabled:u=!1,onclick:o,href:n,class:c,...g},...x){const z=Y(c);return h.a({href:n,onclick(j){j.preventDefault();const S=In(n);u||S===void 0||(Wt(String(S),{replace:a}),typeof o=="function"&&o.call(this,j))},tabIndex:0,class:()=>`not-disabled:focus-visible:focus-ring ${z.val}`,...g},...x)}const Gt=/:([^\\d|^/]([^/]+)?)/;let ze;function Xt({routes:a,basename:u}){const o=h.div({name:"Savant Router",style:"display: contents;"}),n=z=>{if(!z)return"";for(z.startsWith("/")||(z="/"+z);z!=="/"&&z.endsWith("/");)z=z.slice(0,z.length-1);return z=decodeURI(z),z},c=(z,j)=>{z=n(z),j=n(j);const S=z.split("/"),F={};let E=null;for(const D of a){const P=n(j+D.path).split("/");if(P.length!==S.length)continue;let m=!0;for(let w=0;w<P.length;w++){const v=P[w],y=S[w];if(Gt.test(v))F[decodeURIComponent(v.slice(1))]=decodeURIComponent(y);else if(y!==v){m=!1;break}}if(m){E=D;break}}return E||(E=a.find(D=>D.path==="*")||null),{route:E,params:F}},g=z=>{if(z.startsWith("?")&&(z=z.slice(1).trim()),!z)return{};const j={},S=z.split("&");for(const F of S){const[E,D]=F.split("=");j[decodeURIComponent(E)]=decodeURIComponent(D)}return j},x=()=>{const{route:z,params:j}=c(window.location.pathname+window.location.hash,u||"");if(!z){ze=void 0,o.replaceChildren(),he(o,h.div("Could not find route"));return}if(z===ze){nn.val=g(window.location.search),en.val=j;return}ze=z,nn.rawVal=g(window.location.search),en.rawVal=j,o.replaceChildren(),he(o,z.dom)};return window.onpopstate=x,ee(()=>{const z=Xe.val,j=Ze.val;(z||j)&&setTimeout(()=>{x()})}),ee(()=>{vn.val=n(u||"")}),o}const Zt="/Savant/assets/logo-BRWjpkZq.svg";var je,tn;function Kt(){return tn||(tn=1,je={Other:0,CR:1,LF:2,Control:4,Extend:8,ZWJ:16,Regional_Indicator:32,Prepend:64,SpacingMark:128,L:256,V:512,T:1024,LV:2048,LVT:4096,Extended_Pictographic:8192,InCB_Linker:16384,InCB_Consonant:32768,InCB_Extend:65536}),je}const Jt="ABAOAAAAAADQjQAAAd4HIfjtnG2oFUUYxx/1nHu29OolvKRSZIIQghSSEFJwwj4YWdzoFcoQyriBHwz8YHDBiSKDLG9YKSEiUX4IFQ0FCaRLoFmUb9mLBqJ+EDOIsAgpjf7b7nCnOTO7M7szu8frPPBjZufleZ6ZeWZm73pwYALRk2ApGAQMvC6UlU2HwUbwDthk0P5DsC2jfifYC0bAQXAE/AhOgXNCu1/A7+ASoAZRD5gMekE/mAFmge1gN9jbSPrOSdPPkM4DX4AvwVFwApwBZ8EFcBH8Bf4GE5pEUXP0uQ/5ac2k/UyktzWT/ncgPYj0rmZip91M6hc1R/U/hPzj4BnwPBgECwT7cb8VKFsZJflVyK9O9cW8gvwb6fM6pO+l+c1It4Lt4Hah/R7k94H94BuhPGZDNMqWlK1gf4rYNovthu1c8x3G8xOYmhKXnUH6c5pf0/h/+8Uo/1Wagz+bev1X0rpGD9GkniS/FjRTvVNRdiO4BcwGc8H8tN3dabqwp1Pv/Sh7WFHOGU4pOz9vws/1qa+PCuXxGHZmjDtQAdL6n1DEgAs7NwnrvCQj5gKBQCAQCAQCgUAgEOgGnsPfrlOE7zlvG3y/WI4+K4W/eYciotVgCGWv8u85SNeDjVHyPXAj8tORbknrtyLdAT5Jnz9Fehnp5zl/S3+F+kPQeRgcAUfBMfAtOB6FulAX6kJdqHNdtwPsAQei+u+sQCAwdjnk+d9TNk0Y/Xd1mUFFmfh+vKHhxycbRnoTaDLR0t582mg3oGg7LJWN4JmmoD1YNSUp24b0NJjWR3QnGAT3TcT7Pzh7HdGt1xNF4xKeFvIiu9D25ER1nczqVMeMSUS7kX8M6bvgMKBeMx2BQCAQGJv8gXuhEd8nLaJ/cB+2cCdPaiW/E2ojvyi9oyOkN6B8Df5mmZbW34x0QLjDZ7eS707i/Rr/ZmRua/R3ZPORv6eV1C2MU/R/MP1O9gCeH2mN9n0K+Wdb+rt7EHUrhPpVreS7GH9mQt1ryL+VoWt9Rl3MEuhdJr2vvI8+H4CPwQuo25XqeLHAe81ewf4I8gckf77G80up3uM5voqcRNuX0e800vMW/XwyBH7rEl9EZiC2n6jQ3masyxzY/EHxnXjeVfptIP797rAAkxjO4KNGZ/trjTJz/33O33rTpXPpVBf+1u4cfLqg8Wuxo9+Dnk/1XzQc/6W03RWhrD+dSzI4x+K/eS914Xnnisvp2MY7OrP2ldAToe86MFnQ0X+VnqU2xOfnrCh5f3Oha0GUpPciXQQGrqY5hK9LBX+nK/aebaweS8+AZSXnIa9/v4MzTh7b2jH6O/rlJdfiZBeMoUFmjBfy4wz7mBCkPgnz7y6Oq4x/l+sWXeO4lKrsdJvUvYZF111MdfmxLm0NpmI7591853Tj+VJVDGaNoZ3TRtahautDRL/qkm6KlW6Wa2EeXI3N5Ry0SX+e26xJ27K9K5iijNJyjvwsnllZ4mKeZbuy72I5F5VvNr6o+hcVbredoVc3/y7vN/keke0ywS6T6tqOfOE2mQKS8rJ/3A8mpHWfZVl7qq0oV0lbQ9m9bOszt+lb5LWsU8TxN8j9+LnOPnL3Pc73tz4X31fy7mVdDObZcnHfdev3VNV86ebRtF1VUsSui7U0OQ/rEvE8Jsp+j1H5Lbfnecrpa+Nf1XEi2mZUz/qIe4b7oJtDXi8/m85bN69HJOXr2i9Z+0PVVuW36n5x6V8Z/Yw640s+t5nQlpGfOPAdX2XPI5d+iP6wDJ8YFdvfRc/bOkR31jKpXHx2eb7J91kd7yaMOseb9w6Vp7PO9YyFUWeMM6pvfC7mhBXoI78z1SnyfDPLvqoyRp1nmNieZeAqRlUxV+Ssz3vvdSWm/paJ87ruuipsyTGmssfI3X4zWSMVTFNOlD1PNjbK+OeKsmI6b/J4mdTWp+TZ8jkfRXXEwgz0lPXZx9z7PruqOhdNYlqMZR2qeHe1N33OQdYYVeWyiG3l/rKeKteS2/UhXDdP885CMaWcPqbzaBJTOt1ViqnPjOqJmSzxcbfWtQ6iMNLPv6tx5om8fxh1niUu/GA5mMalq3lQnQ+25PmtspnlDxdRrwupaw/7WCvb9VLpynrWlbkURp17zrcPjNT7rSopsr9cnX95+861PRN/bM8Y1/YZmd0//Fmnp0oxvRvk5yJ2TNqwArpdiY+Y4Kk8b1nzWGSOGZnFF29nK1ynHAuiraK6XUudPlRh2+ZM1d3xJnp9S9H3Op2OKu4Xn7qrfn9gVO+Za3oe6vrq7vWq3z24Py6Fkf59Qjd2VzZ0dnXC62x89iGi7xwuumebc8ZUZFum81BlvKoka+19+cLIPGZU7fizT3GlP29+xfEwKa864+oUk3OCkXp9maJtFeLaJqNisctTG9HFRh13XZaoxmd6T7sWRuZz5Ssus3zgIseI2F7WVbWYzFsVsWZzT5veHWVE1qWaj7w4cyWma6TyMW8cTJP37bvchqQ6Gx+YAlkfL/exPqIt0b5r4brz5lPVzqfo9GfZLRrTNmMx1cfIz5z5Pkd9ntfyvilCnv6y/tr2q+ouM/WhbPyX2UNFdPqSqs6pLLuucWXLZAw24/UlOt9dzqELn1z5Zrtv8uz6EF82ZlaEK2FU7vtpXcIsydJRhbCa+e8/D60bUcbXTMMzfRK24nKssvgYr+x71lh8iO/1tBl/LPGlIseAT6q2J8m/",Qt={data:Jt},Yt="AAACAAAAAACAOAAAAbYBSf7t2S1IBEEYBuDVDZ7FYrQMNsFiu3hgEYOI0SCXRIUrB8JhEZtgs5gEg1GMFk02m82oGI02m+9xezCOczv/uwv3fvAwc/PzfXOzcdqzWdaBDdiGPdiHdjE+DS3RNDuCfsn8idQ/g3OH3BdwKf0e96/gumTfYcncLdzBPTzAo+RZ+f0Cr/AG7/AJX4738x1wtz9FO5PX/50n6UXMNdfg/0lERERERERERERERETpdedHBvDRql4nq0cXtW9af98qdRby0Vvp8K4W0V+C5Xw0t4J2bfjeBp3cnEu1brnnCTYNa7eKdz91XP7WO9Lb4GqRb7cY6xbtAdqeVOsY/QGcevw/tb6OT85YhvfKYEx9CMuxKsKnrs+eJtVInVvHJ0eVYVvTZk2siFVLOCjb61PTZX3MdVWEyP7fjzpmMxdzTyq2Ebue6x61nXRGnzndWpf1an7dXmGYE4Y1ptqqKsK1nu26Ju0ty+maV2Rpvk+qnDZjKUIobUiesdAQE/jmCTmHmsskpFZsVYbtmXRcaoSGUPomunW2derQhDPFjtT1Q/eb8vnm990fq35oHVt11bU9m89c7DNI8Qs=",er={data:Yt},nr="AAgOAAAAAABQfgAAAWMGnPntmm2IVUUYx+dyb2ezXXtBiSCLsKDIiKIIoYINciGwQHrRL2Ufii0qMsv7QVBuQkXhkmW5gksQRhRFSBslbkllHyy3L2XllkXrB3uhF0tQ0Kj+xzN3d3buzJx5PeesOw/8mDNvz/PMnOc8s/fs6asTcgu4A9wF+mjdV9kEa8FqsE5j/DPgeUX/JvASeBW8Bd4GO8CHYDcz7nPwFRgD4+An8Cf4AxwBx0G9QcjrYBt4p5HN/YDqGEF9F7gW3AC6wU1gCVgK5oDlYA8YBXvBGOgHD4FzwSo6fg24EDwBxsEB8Cu1N4ByI1gA/gbfo+0wyuO0vgW8DK5i+tN5tVOyMmUWrs9k6nNxPY/WL0B5Mb2+HOU14HrwY2Ny/CLUbwa3gzsZPT7ZGECnDvdiPQ+ARyhpWxPlWnr9JLfeAdS/43S8qNiTIdq3FeUb9HolOEj7h9H2LtgJPgHr0TZKx31Jy30C/T+g7aDCbpPiuj/fStrTNfQGioWIHr9z+z8iiAEfdg4zdo7Gex6JRCKRSCQSiUQikYrzL367HmLq8zV+yyYJIbOTzva5aJtH2y9CuYBebwdX4PoYyv107ELUe5PsPWBavzHJ3tMtFuhluTWnPxKJRCKRSCQy/TjQCKt/XX3y/+o6HPJs35XNszPO0WQf+FnQfsnpU+vLUN8MdgNyRtZ2Ncp7wBDYDn4D47MIOes0QpaADeDUWsYe5pql3k3IZd3iPp4H6bjnUI6Cf8B1PYQ0wWCPno5IJBKJnJx83eN2fi7NeYd0jKsvr+A7p3749KzkXd2Ap+9R7qfrflhz/ava45m2I7Rcw+lI3/WtAO+Bx5PsG6+nk+xbv7Q/fWe4gc7ZRPu3oNzK6Hktmfy2r036vc82On44yb4ZHKFzPkL5aZJ9f9hH7Y8y+nbheq9irWOpf0z/L8nUWPmL6TuK6/8Uuhpd6r3sRv8cbszZXZm981HOB5fS/itzdIlYyMzpTa85HYtRv422LTPQ/yjd+/SZudvCr1DcV5Iv6W+HFRXaB988Rte2ugJrHKTPW4vx5akK+MWzvoI++Sb9zvKFriy/m8wbwpxXQL/gDNs5Tb+zTPfiza6sHEa5A3w8jWLgM/j6BePvoOBcM33+v6Hj9zvuQ978lR5ihl/bedM0DvN4vwI+NOvy7/SbCkze51WVRfXaCaJEmdlSm+H4lKLsVE3Kvoe2950tZdcnu5T1rISQKuaHovZNZw26/aKxvn0tS6oUG1WWmbAPvtbGjzPU2WvgV4uoEc7PkQ77MhHoYu1K7YvOVhv7uuJ7/QpdLcKtX2ZPthc1A/tEcK/zbAW+/0rbnqRVAlPuk0gC5b5cv1Q+BbIp8kGnX2VjQmT7bLm/Hfp1RfZ3kAdpGZI3h2iMnZCC47ftj+351WJ06PTLxk6I7OxxWH8rd4RCRHHuKC1DbOaIdJyQAn4vuPpqS8d5HVJUfy+p2lXjihIbuya/L2wowkae3TJEZFfmjywnBshRSl9s9Je1v7z9kL7bPE9Fi+xMlf09Z3Ne2KxNFu8qf2x02ojMD9McrpOLivTX9j6F9l/HfmgbotKnfp9nJCHqffFho0hcxWRNhHTarUI8h94PGx28Pp2xrrZ8SehcFToPhvabvbZ5JkXx4etZd4lZfn0+pIz8oMoRunpsbPgUUZ4NaYu1qcr9vC+2MWsa8yHOPlOxfU7L9Fnkg0t+0dGdZ9O38PGr6nPxwzRWXUX0/JmSN09kU+WPyD8f4jM+ioo7lW1femzuv0iXqi5r8yGq/fBts+gca/M8+orLvOc0RJ7P88c0J/m2L/OFbzfVa5LrXc4WH2NsbJrulcsafa+T99lFVwgpwr7JMy47U3T0FiFF56uQuss4j3gfbOb68sUlB6vOjaLPtrbdkLp9nZmqffcpqnurk4NU+oq8rzIx2Xddv8tel+peydar+htBpIufH0J4O2XFCCu2z0GZayjyDMzLS6Z+yGK1Sjmk7RNbtq91zrXQfumeOb58MdGTtxdlngmyc09nTlmxqfMcmvij67OJXV3R3dOQsZznh6qfkOL80M3BuvtW1B7yY2R+FLG/MsnzVXd+aF9VuUk1xzWudPwy1edzz1x8t9UfyndbHTY2yxTdHOCa92zj3CR+Te6fjzX5Ftf9M/E1VC4yzVehROa77/h09cmXb6Zxm2c3pPjSH9bn/wE=",tr={data:nr};var Me,rn;function rr(){if(rn)return Me;rn=1;var a=0,u=-3;function o(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function n(s,f){this.source=s,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=f,this.destLen=0,this.ltree=new o,this.dtree=new o}var c=new o,g=new o,x=new Uint8Array(30),z=new Uint16Array(30),j=new Uint8Array(30),S=new Uint16Array(30),F=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),E=new o,D=new Uint8Array(320);function P(s,f,d,p){var b,k;for(b=0;b<d;++b)s[b]=0;for(b=0;b<30-d;++b)s[b+d]=b/d|0;for(k=p,b=0;b<30;++b)f[b]=k,k+=1<<s[b]}function m(s,f){var d;for(d=0;d<7;++d)s.table[d]=0;for(s.table[7]=24,s.table[8]=152,s.table[9]=112,d=0;d<24;++d)s.trans[d]=256+d;for(d=0;d<144;++d)s.trans[24+d]=d;for(d=0;d<8;++d)s.trans[168+d]=280+d;for(d=0;d<112;++d)s.trans[176+d]=144+d;for(d=0;d<5;++d)f.table[d]=0;for(f.table[5]=32,d=0;d<32;++d)f.trans[d]=d}var w=new Uint16Array(16);function v(s,f,d,p){var b,k;for(b=0;b<16;++b)s.table[b]=0;for(b=0;b<p;++b)s.table[f[d+b]]++;for(s.table[0]=0,k=0,b=0;b<16;++b)w[b]=k,k+=s.table[b];for(b=0;b<p;++b)f[d+b]&&(s.trans[w[f[d+b]]++]=b)}function y(s){s.bitcount--||(s.tag=s.source[s.sourceIndex++],s.bitcount=7);var f=s.tag&1;return s.tag>>>=1,f}function M(s,f,d){if(!f)return d;for(;s.bitcount<24;)s.tag|=s.source[s.sourceIndex++]<<s.bitcount,s.bitcount+=8;var p=s.tag&65535>>>16-f;return s.tag>>>=f,s.bitcount-=f,p+d}function L(s,f){for(;s.bitcount<24;)s.tag|=s.source[s.sourceIndex++]<<s.bitcount,s.bitcount+=8;var d=0,p=0,b=0,k=s.tag;do p=2*p+(k&1),k>>>=1,++b,d+=f.table[b],p-=f.table[b];while(p>=0);return s.tag=k,s.bitcount-=b,f.trans[d+p]}function e(s,f,d){var p,b,k,A,T,l;for(p=M(s,5,257),b=M(s,5,1),k=M(s,4,4),A=0;A<19;++A)D[A]=0;for(A=0;A<k;++A){var C=M(s,3,0);D[F[A]]=C}for(v(E,D,0,19),T=0;T<p+b;){var O=L(s,E);switch(O){case 16:var B=D[T-1];for(l=M(s,2,3);l;--l)D[T++]=B;break;case 17:for(l=M(s,3,3);l;--l)D[T++]=0;break;case 18:for(l=M(s,7,11);l;--l)D[T++]=0;break;default:D[T++]=O;break}}v(f,D,0,p),v(d,D,p,b)}function t(s,f,d){for(;;){var p=L(s,f);if(p===256)return a;if(p<256)s.dest[s.destLen++]=p;else{var b,k,A,T;for(p-=257,b=M(s,x[p],z[p]),k=L(s,d),A=s.destLen-M(s,j[k],S[k]),T=A;T<A+b;++T)s.dest[s.destLen++]=s.dest[T]}}}function r(s){for(var f,d,p;s.bitcount>8;)s.sourceIndex--,s.bitcount-=8;if(f=s.source[s.sourceIndex+1],f=256*f+s.source[s.sourceIndex],d=s.source[s.sourceIndex+3],d=256*d+s.source[s.sourceIndex+2],f!==(~d&65535))return u;for(s.sourceIndex+=4,p=f;p;--p)s.dest[s.destLen++]=s.source[s.sourceIndex++];return s.bitcount=0,a}function i(s,f){var d=new n(s,f),p,b,k;do{switch(p=y(d),b=M(d,2,0),b){case 0:k=r(d);break;case 1:k=t(d,c,g);break;case 2:e(d,d.ltree,d.dtree),k=t(d,d.ltree,d.dtree);break;default:k=u}if(k!==a)throw new Error("Data error")}while(!p);return d.destLen<d.dest.length?typeof d.dest.slice=="function"?d.dest.slice(0,d.destLen):d.dest.subarray(0,d.destLen):d.dest}return m(c,g),P(x,z,4,3),P(j,S,2,1),x[28]=0,z[28]=258,Me=i,Me}var Oe,an;function ar(){if(an)return Oe;an=1;const a=new Uint8Array(new Uint32Array([305419896]).buffer)[0]===18,u=(c,g,x)=>{let z=c[g];c[g]=c[x],c[x]=z},o=c=>{const g=c.length;for(let x=0;x<g;x+=4)u(c,x,x+3),u(c,x+1,x+2)};return Oe={swap32LE:c=>{a&&o(c)}},Oe}var Le,un;function ur(){if(un)return Le;un=1;const a=rr(),{swap32LE:u}=ar(),o=11,n=5,c=o-n,g=65536>>o,z=(1<<c)-1,j=2,F=(1<<n)-1,E=65536>>n,D=1024>>n,v=E+D+32,y=1<<j;class M{constructor(e){const t=typeof e.readUInt32BE=="function"&&typeof e.slice=="function";if(t||e instanceof Uint8Array){let r;if(t)this.highStart=e.readUInt32LE(0),this.errorValue=e.readUInt32LE(4),r=e.readUInt32LE(8),e=e.slice(12);else{const i=new DataView(e.buffer);this.highStart=i.getUint32(0,!0),this.errorValue=i.getUint32(4,!0),r=i.getUint32(8,!0),e=e.subarray(12)}e=a(e,new Uint8Array(r)),e=a(e,new Uint8Array(r)),u(e),this.data=new Uint32Array(e.buffer)}else({data:this.data,highStart:this.highStart,errorValue:this.errorValue}=e)}get(e){let t;return e<0||e>1114111?this.errorValue:e<55296||e>56319&&e<=65535?(t=(this.data[e>>n]<<j)+(e&F),this.data[t]):e<=65535?(t=(this.data[E+(e-55296>>n)]<<j)+(e&F),this.data[t]):e<this.highStart?(t=this.data[v-g+(e>>o)],t=this.data[t+(e>>n&z)],t=(t<<j)+(e&F),this.data[t]):this.data[this.data.length-y]}}return Le=M,Le}var ke={exports:{}},dr=ke.exports,dn;function sr(){return dn||(dn=1,function(a,u){(function(o,n){a.exports=n()})(typeof self<"u"?self:typeof window<"u"?window:typeof Qe<"u"?Qe:dr,function(){var o="3.7.7",n=o,c=typeof Buffer=="function",g=typeof TextDecoder=="function"?new TextDecoder:void 0,x=typeof TextEncoder=="function"?new TextEncoder:void 0,z="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",j=Array.prototype.slice.call(z),S=function(_){var I={};return _.forEach(function(N,U){return I[N]=U}),I}(j),F=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,E=String.fromCharCode.bind(String),D=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):function(_){return new Uint8Array(Array.prototype.slice.call(_,0))},P=function(_){return _.replace(/=/g,"").replace(/[+\/]/g,function(I){return I=="+"?"-":"_"})},m=function(_){return _.replace(/[^A-Za-z0-9\+\/]/g,"")},w=function(_){for(var I,N,U,ae,ne="",le=_.length%3,se=0;se<_.length;){if((N=_.charCodeAt(se++))>255||(U=_.charCodeAt(se++))>255||(ae=_.charCodeAt(se++))>255)throw new TypeError("invalid character found");I=N<<16|U<<8|ae,ne+=j[I>>18&63]+j[I>>12&63]+j[I>>6&63]+j[I&63]}return le?ne.slice(0,le-3)+"===".substring(le):ne},v=typeof btoa=="function"?function(_){return btoa(_)}:c?function(_){return Buffer.from(_,"binary").toString("base64")}:w,y=c?function(_){return Buffer.from(_).toString("base64")}:function(_){for(var I=4096,N=[],U=0,ae=_.length;U<ae;U+=I)N.push(E.apply(null,_.subarray(U,U+I)));return v(N.join(""))},M=function(_,I){return I===void 0&&(I=!1),I?P(y(_)):y(_)},L=function(_){if(_.length<2){var I=_.charCodeAt(0);return I<128?_:I<2048?E(192|I>>>6)+E(128|I&63):E(224|I>>>12&15)+E(128|I>>>6&63)+E(128|I&63)}else{var I=65536+(_.charCodeAt(0)-55296)*1024+(_.charCodeAt(1)-56320);return E(240|I>>>18&7)+E(128|I>>>12&63)+E(128|I>>>6&63)+E(128|I&63)}},e=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,t=function(_){return _.replace(e,L)},r=c?function(_){return Buffer.from(_,"utf8").toString("base64")}:x?function(_){return y(x.encode(_))}:function(_){return v(t(_))},i=function(_,I){return I===void 0&&(I=!1),I?P(r(_)):r(_)},s=function(_){return i(_,!0)},f=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,d=function(_){switch(_.length){case 4:var I=(7&_.charCodeAt(0))<<18|(63&_.charCodeAt(1))<<12|(63&_.charCodeAt(2))<<6|63&_.charCodeAt(3),N=I-65536;return E((N>>>10)+55296)+E((N&1023)+56320);case 3:return E((15&_.charCodeAt(0))<<12|(63&_.charCodeAt(1))<<6|63&_.charCodeAt(2));default:return E((31&_.charCodeAt(0))<<6|63&_.charCodeAt(1))}},p=function(_){return _.replace(f,d)},b=function(_){if(_=_.replace(/\s+/g,""),!F.test(_))throw new TypeError("malformed base64.");_+="==".slice(2-(_.length&3));for(var I,N="",U,ae,ne=0;ne<_.length;)I=S[_.charAt(ne++)]<<18|S[_.charAt(ne++)]<<12|(U=S[_.charAt(ne++)])<<6|(ae=S[_.charAt(ne++)]),N+=U===64?E(I>>16&255):ae===64?E(I>>16&255,I>>8&255):E(I>>16&255,I>>8&255,I&255);return N},k=typeof atob=="function"?function(_){return atob(m(_))}:c?function(_){return Buffer.from(_,"base64").toString("binary")}:b,A=c?function(_){return D(Buffer.from(_,"base64"))}:function(_){return D(k(_).split("").map(function(I){return I.charCodeAt(0)}))},T=function(_){return A(C(_))},l=c?function(_){return Buffer.from(_,"base64").toString("utf8")}:g?function(_){return g.decode(A(_))}:function(_){return p(k(_))},C=function(_){return m(_.replace(/[-_]/g,function(I){return I=="-"?"+":"/"}))},O=function(_){return l(C(_))},B=function(_){if(typeof _!="string")return!1;var I=_.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(I)||!/[^\s0-9a-zA-Z\-_]/.test(I)},V=function(_){return{value:_,enumerable:!1,writable:!0,configurable:!0}},R=function(){var _=function(I,N){return Object.defineProperty(String.prototype,I,V(N))};_("fromBase64",function(){return O(this)}),_("toBase64",function(I){return i(this,I)}),_("toBase64URI",function(){return i(this,!0)}),_("toBase64URL",function(){return i(this,!0)}),_("toUint8Array",function(){return T(this)})},G=function(){var _=function(I,N){return Object.defineProperty(Uint8Array.prototype,I,V(N))};_("toBase64",function(I){return M(this,I)}),_("toBase64URI",function(){return M(this,!0)}),_("toBase64URL",function(){return M(this,!0)})},K=function(){R(),G()},X={version:o,VERSION:n,atob:k,atobPolyfill:b,btoa:v,btoaPolyfill:w,fromBase64:O,toBase64:i,encode:i,encodeURI:s,encodeURL:s,utob:t,btou:p,decode:O,isValid:B,fromUint8Array:M,toUint8Array:T,extendString:R,extendUint8Array:G,extendBuiltins:K};return X.Base64={},Object.keys(X).forEach(function(_){return X.Base64[_]=X[_]}),X})}(ke)),ke.exports}var Fe,sn;function or(){if(sn)return Fe;sn=1;const a=Kt(),u=Qt.data,o=er.data,n=tr.data,c=ur(),g=sr().Base64,x=new c(g.toUint8Array(u)),z=new c(g.toUint8Array(o)),j=new c(g.toUint8Array(n));function S(E,D){return(E&D)!==0}function F(E,D,P){const m=D.length;for(let w=P;w+1<m;w++){const v=D[w+0],y=D[w+1];switch(E.gb9c){case 0:S(v,a.InCB_Consonant)&&(E.gb9c=1);break;case 1:S(v,a.InCB_Extend)?E.gb9c=1:S(v,a.InCB_Linker)?E.gb9c=2:E.gb9c=S(v,a.InCB_Consonant)?1:0;break;case 2:S(v,a.InCB_Extend|a.InCB_Linker)?E.gb9c=2:E.gb9c=S(v,a.InCB_Consonant)?1:0;break}switch(E.gb11){case 0:S(v,a.Extended_Pictographic)&&(E.gb11=1);break;case 1:S(v,a.Extend)?E.gb11=1:S(v,a.ZWJ)?E.gb11=2:E.gb11=S(v,a.Extended_Pictographic)?1:0;break;case 2:E.gb11=S(v,a.Extended_Pictographic)?1:0;break}switch(E.gb12){case 0:S(v,a.Regional_Indicator)?E.gb12=1:E.gb12=-1;break;case 1:S(v,a.Regional_Indicator)?E.gb12=0:E.gb12=-1;break}switch(E.gb13){case 0:S(v,a.Regional_Indicator)||(E.gb13=1);break;case 1:S(v,a.Regional_Indicator)?E.gb13=2:E.gb13=1;break;case 2:E.gb13=1;break}if(!(S(v,a.CR)&&S(y,a.LF))){if(S(v,a.Control|a.CR|a.LF)||S(y,a.Control|a.CR|a.LF))return w+1-P;if(!(S(v,a.L)&&S(y,a.L|a.V|a.LV|a.LVT))&&!(S(v,a.LV|a.V)&&S(y,a.V|a.T))&&!(S(v,a.LVT|a.T)&&S(y,a.T))&&!S(y,a.Extend|a.ZWJ)&&!S(y,a.SpacingMark)&&!S(v,a.Prepend)&&!(S(y,a.InCB_Consonant)&&E.gb9c===2)&&!(S(y,a.Extended_Pictographic)&&E.gb11===2)&&!(S(y,a.Regional_Indicator)&&E.gb12===1)&&!(S(y,a.Regional_Indicator)&&E.gb13===2))return w+1-P}}return m-P}return Fe=function(D){const P=[],m=[0],w=[];for(let y=0;y<D.length;){const M=D.codePointAt(y);w.push(x.get(M)|z.get(M)|j.get(M)),y+=M>65535?2:1,m.push(y)}const v={gb9c:0,gb11:0,gb12:0,gb13:0};for(let y=0;y<w.length;){const M=F(v,w,y),L=m[y],e=m[y+M];P.push(D.slice(L,e)),y+=M}return P},Fe}var ir=or();const cr=mn(ir),lr=a=>a.normalize("NFKD").split(""),on=/^\s+$/,cn=/^[`~!@#$%^&*()\-=_+{}[\]\|\\;':",./<>?]+$/,De={insertOrder:"insertOrder",bestMatch:"bestMatch"},fr={keySelector:a=>a,threshold:.6,ignoreCase:!0,ignoreSymbols:!0,normalizeWhitespace:!0,returnMatchData:!1,useDamerau:!0,useSellers:!0,useSeparatedUnicode:!1,sortBy:De.bestMatch},pr=()=>{},hr=a=>a instanceof Array?a:[a];function _n(a,u){const o=u.ignoreCase?a.toLocaleLowerCase():a,n=[],c=[];let g=!0,x=0;const z=u.useSeparatedUnicode?lr(o):cr(o);for(const j of z)on.lastIndex=0,cn.lastIndex=0,u.normalizeWhitespace&&on.test(j)?g||(n.push(" "),c.push(x),g=!0):u.ignoreSymbols&&cn.test(j)||(u.useSeparatedUnicode?n.push(j):n.push(j.normalize()),c.push(x),g=!1),x+=j.length;for(c.push(a.length);n[n.length-1]===" ";)n.pop(),c.pop();return{original:a,normal:n,map:c}}function gr(a,u){return{index:u[a.start],length:u[a.end+1]-u[a.start]}}function wn(a,u){if(u===0)return{index:0,length:0};let o=u;for(let n=a.length-2;n>0&&o>1;n--){const c=a[n];o=c[o]<c[o-1]?o:o-1}return{start:o-1,end:u-1}}function mr(){return{start:0,end:0}}const vr=()=>!0,br=(a,u)=>a<u;function _r(a,u){const o=new Array(a);for(let n=0;n<a;n++)o[n]=new Array(u),o[n][0]=n;for(let n=0;n<u;n++)o[0][n]=n;return o}function wr(a,u){const o=new Array(a);o[0]=new Array(u).fill(0);for(let n=1;n<a;n++)o[n]=new Array(u),o[n][0]=n;return o}function yn(a,u,o,n,c){const g=o[n],x=o[n+1],z=a[n]===u[c]?0:1;let j,S=x[c]+1;(j=g[c+1]+1)<S&&(S=j),(j=g[c]+z)<S&&(S=j),x[c+1]=S}function kn(a,u,o,n){for(let c=0;c<a.length;c++)yn(a,u,o,c,n)}function yr(a,u,o,n){if(n===0){kn(a,u,o,n);return}a.length>0&&yn(a,u,o,0,n);for(let c=1;c<a.length;c++){const g=o[c-1],x=o[c],z=o[c+1],j=a[c]===u[n]?0:1;let S,F=z[n]+1;(S=x[n+1]+1)<F&&(F=S),(S=x[n]+j)<F&&(F=S),a[c]===u[n-1]&&a[c-1]===u[n]&&(S=g[n-1]+j)<F&&(F=S),z[n+1]=F}}function kr(a,u,o){let n=a;for(let c=0;c<u.length;c++){const g=u[c];n.children[g]==null&&(n.children[g]={children:{},candidates:[],depth:0}),n.depth=Math.max(n.depth,u.length-c),n=n.children[g]}n.candidates.push(o)}function Pr(a,u,o,n){for(const c of o){const g=hr(n.keySelector(c)).map((x,z)=>({index:u,keyIndex:z,item:c,normalized:_n(x,n)}));u++;for(const x of g)kr(a,x.normalized.normal,x)}}function Cr(a,u){const o=u.score-a.score;if(o!==0)return o;const n=a.match.start-u.match.start;if(n!==0)return n;const c=a.keyIndex-u.keyIndex;if(c!==0)return c;const g=a.lengthDiff-u.lengthDiff;return g!==0?g:Pn(a,u)}function Pn(a,u){return a.index-u.index}function Sr(a){switch(a){case De.bestMatch:return Cr;case De.insertOrder:return Pn;default:throw new Error(`unknown sortBy method ${a}`)}}function Cn(a,u,o,n,c,g,x){const z={item:o.item,normalized:o.normalized,score:n,match:c,index:o.index,keyIndex:o.keyIndex,lengthDiff:g};u[o.index]==null?(u[o.index]=a.length,a.push(z)):x(z,a[u[o.index]])<0&&(a[u[o.index]]=z)}const Ar=Math.max,xr=a=>a;function Tr(a,u,o,n,c){const g=u+c,x=Math.min(o.length,u+a.depth+1),z=Math.ceil((g+x)/2);return 1-(z-x)/z>=n}function Er(a,u,o,n,c,g){return 1-Math.min(c,g-(a.depth+1))/o.length>=n}function zr(a,u,o,n,c,g,x){const z=[];for(const S in a.children){const F=a.children[S];z.push([F,1,S,0,u.length])}const j=new Array(a.depth);for(;z.length!==0;){const[S,F,E,D,P]=z.pop();j[F-1]=E,o.score(u,j,n,F-1);const m=F,w=n[n.length-1][m];let v=D,y=P;if(o.shouldUpdateScore(w,P)&&(v=m,y=w),S.candidates.length>0){const M=o.getLength(u.length,F),L=1-y/M;if(L>=x.threshold){const e=wn(n,v),t=Math.abs(F-u.length);for(const r of S.candidates)Cn(c,g,r,L,e,t,o.compareItems)}}for(const M in S.children){const L=S.children[M];o.shouldContinue(L,F,u,x.threshold,y,w)&&z.push([L,F+1,M,v,y])}}}function jr(a,u,o){const n=o.useSellers?wr:_r,c={score:o.useDamerau?yr:kn,getLength:o.useSellers?xr:Ar,shouldUpdateScore:o.useSellers?br:vr,shouldContinue:o.useSellers?Er:Tr,walkBack:o.useSellers?wn:mr,compareItems:Sr(o.sortBy)},g={},x=[],z=n(a.length+1,u.depth+1);if(o.threshold<=0||a.length===0)for(const S of u.candidates)Cn(x,g,S,0,{index:0,length:0},a.length,c.compareItems);zr(u,a,c,z,x,g,o);const j=x.sort(c.compareItems);if(o.returnMatchData){const S=o.useSellers?gr:pr;return j.map(F=>({item:F.item,original:F.normalized.original,key:F.normalized.normal.join(""),score:F.score,match:S(F.match,F.normalized.map)}))}return j.map(S=>S.item)}function Mr(a,u,o){o={...fr,...o};const n={children:{},candidates:[],depth:0};return Pr(n,0,u,o),jr(_n(a,o).normal,n,o)}const Ie=5;function Or(a){const u=$(!1),o=$(""),n=ee(()=>o.val?Mr(o.val,a,{keySelector:g=>g.name+" "+g.path}):a),c=ee(()=>n.val.slice(0,Ie));return be({type:"search",placeholder:"Search...",value:o,lead:h.i("search"),"$data-open":u,class:"variant-outline transition-all min-w-32 w-32 rounded-full focus-within:w-xs focus-within:variant-soft-outline data-open:w-xs data-open:variant-soft-outline",onfocus:()=>u.val=!0},()=>Se({visible:u,class:"card shadow-xl vessel glass rounded-2xl w-xs max-w-full transition-opacity starting:opacity-0 overflow-hidden"},()=>h.ul({class:"flex flex-col gap-2"},h.li({class:"text-mini uppercase"},"Pages"),c.val.length?c.val.map(g=>Lr(g,()=>u.val=!1)):h.span({class:"text-sm text-center break-all"},h.span({class:"text-swatch-600-surface"},"No results for "),h.span({class:"font-semibold"},o)),n.val.length>Ie?h.span({class:"badge variant-outline rounded-full w-fit self-center"},h.span({class:"text-swatch-600-surface"},"and "),h.span({class:"font-semibold"},n.val.length-Ie),h.span({class:"text-swatch-600-surface"}," more")):void 0)))}function Lr(a,u){const o=a.path.split("/").slice(2,-1).map(n=>n[0].toUpperCase()+n.slice(1)).join(" → ");return bn({href:a.path,onclick:u,class:"button gap-2 justify-start variant-soft hover:raised active:lowered active:mood-accent transition"},h.i({class:"opacity-75"},"article"),h.span({class:"flex-1"},h.span({class:"opacity-75"},o?`${o} → `:void 0),h.span({class:"font-semibold"},a.name)),h.i("chevron_right"))}function Fr({searchLinks:a}){const u="flex gap-4 items-center";return h.header({name:"Header",class:"bg-background-50 fixed top-0 flex w-full justify-between gap-4 px-6 py-2 glass border-b border-surface-500/50 z-10"},h["left-content"]({class:u},h.img({src:Zt,class:"size-12 -m-2 not-dark:brightness-0"}),h.span({class:"text-xl font-bold"},"Savant"),gn({class:"cursor-help variant-filled mood-info rounded-full control-sm"},h.i("construction"),Re({class:"mood-info"},"Savant is still under construction"))),h["right-content"]({class:u},Or(a),h.a({name:"GitHub",class:"control !rounded-full **:fill-current hover:variant-soft text-lg !p-2",href:"https://github.com/OscarCookeAbbott/Savant",target:"_blank"},re.svg({viewBox:"0 0 1024 1024",class:"size-[1em]"},re.path({transform:"scale(64)",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"})),Re({class:"right-0"},"Savant GitHub"))))}function Ir({options:a,class:u,...o}){const n=ee(()=>decodeURI(qt()));return h.div({name:"Navbar",class:`p-6 flex flex-col overflow-y-auto fixed top-12 h-[calc(100%-3rem)] left-0 bg-background border-r border-surface-500/50 ${u}`,...o},a.map(c=>Sn(c,0,n)))}function Sn(a,u,o){var n;return[bn({href:a.path,disabled:a.path===void 0,onclick:()=>{window.scrollTo({top:0,left:0})},"$data-selected":()=>o.val===`${"/Savant/".slice(0,-1)}${a.path}`,"$data-group":()=>u===0&&a.children,"$data-indented":()=>u!==0,style:`--indent: ${u}rem;`,class:"relative flex gap-4 group text-swatch-700-mood data-selected:text-mood-500 data-group:font-semibold data-group:not-first:mt-6 data-group:mb-1 not-data-selected:hover:text-swatch-900-foreground data-selected:mood-accent data-selected:z-10"},h.span({name:"Divider",class:"absolute h-full w-px left-0 bg-current/50 group-data-selected:bg-current not-group-data-indented:hidden group-hover:w-1 group-data-selected:w-1 transition-all"}),h.span({name:"Title",class:"group-data-indented:ml-(--indent) justify-start group-data-selected:font-semibold flex-1 py-0.5 z-1 transition-all"},a.name)),(n=a.children)==null?void 0:n.map(c=>Sn(c,u+1,o))]}const Br=`# Savant Core

> All the essentials for functional, declarative web apps.
`;function Rr(){return Z(de({class:"language-typescript"},Br))}const Dr=`# Savant Routing

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
`;function $r(){return Z(de({class:"language-typescript"},Dr))}const Hr=`# Savant UI

> Make great design effortless.
`;function Vr(){return Z(de({class:"language-typescript"},Hr))}const Nr=`# Savant

> A refreshingly simple and smart web framework with pep!

Savant is a tiny (3kB), zero-dependency, pure-TypeScript and pure-DOM framework for reactive web development.

Using nothing but standard JS/TS functions and any existing tooling, _anybody_ can build a reactive website in minutes.

Inspired by the incredible [VanJS](https://vanjs.org).

## Example - Counter

\`\`\`typescript
import { add, html, state } from "@savant/core"
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

add(document.body, App())
\`\`\`
`;function Ur(){return Z(de({class:"language-typescript w-2xl *:scroll-m-21"},Nr))}const qr=Object.assign({"./src/routes/1 core/1 State/index.ts":rt,"./src/routes/1 core/2 Derive/index.ts":dt,"./src/routes/1 core/3 Elements/index.ts":it,"./src/routes/1 core/4 Components/index.ts":ft,"./src/routes/1 core/5 Context/index.ts":gt,"./src/routes/1 core/6 Converter/index.ts":vt}),Wr=Object.assign({"./src/routes/2 routing/1 Router/index.ts":wt}),Gr=Object.assign({"./src/routes/3 ui/Badge/index.ts":kt,"./src/routes/3 ui/Button/index.ts":Ct,"./src/routes/3 ui/Checkbox/index.ts":At,"./src/routes/3 ui/Circular Progress Bar/index.ts":Tt,"./src/routes/3 ui/Code/index.ts":zt,"./src/routes/3 ui/Input/index.ts":Mt,"./src/routes/3 ui/Popup/index.ts":Lt,"./src/routes/3 ui/Radio/index.ts":It,"./src/routes/3 ui/Select/index.ts":Rt,"./src/routes/3 ui/Tooltip/index.ts":$t}),Xr=Object.assign({"./src/routes/examples/Sign In/index.ts":Nt}),we=a=>Object.entries(a).map(([u,o])=>{const n=u.replace("./src/routes/","").replace("/index.ts",""),c=n.split("/").slice(-1)[0].replace(/^\d+\s/,""),g=n.split("/").slice(0,-1).map(x=>x.replace(/^\d+\s/,"").replace(" ","-")).join("/");return{name:c,path:`/#!/${g}/${c}`,dom:o.default}}),An=[{name:"Introduction",path:"/",dom:Ur},{name:"Core",path:"/#!/core",dom:Rr,children:we(qr)},{name:"Routing",path:"/#!/routing",dom:$r,children:we(Wr)},{name:"Savant UI",path:"/#!/ui",dom:Vr,children:we(Gr)},{name:"Examples",children:we(Xr)}],ln=An.flatMap(a=>[...a.path?[a]:[],...a.children??[]]);function Zr(){return h.div({name:"App",class:"flex flex-col relative size-full"},Fr({searchLinks:ln}),h.div({class:"flex flex-1"},Ir({options:An,class:"min-w-64 not-lg:hidden"}),h.div({class:"lg:ml-64 overflow-clip flex flex-1 justify-center"},h.div({class:"flex flex-col px-8 pt-24 pb-16 gap-4"},Xt({basename:"/Savant/".slice(0,-1),routes:ln})))))}he(document.body,Zr())});export default Kr();
