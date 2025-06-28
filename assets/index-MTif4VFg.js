var jn=Object.defineProperty;var Ln=(a,u,d)=>u in a?jn(a,u,{enumerable:!0,configurable:!0,writable:!0,value:d}):a[u]=d;var On=(a,u)=>()=>(u||a((u={exports:{}}).exports,u),u.exports);var fe=(a,u,d)=>Ln(a,typeof u!="symbol"?u+"":u,d);var oa=On((ca,ke)=>{(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))n(c);new MutationObserver(c=>{for(const g of c)if(g.type==="childList")for(const A of g.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&n(A)}).observe(document,{childList:!0,subtree:!0});function d(c){const g={};return c.integrity&&(g.integrity=c.integrity),c.referrerPolicy&&(g.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?g.credentials="include":c.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function n(c){if(c.ep)return;c.ep=!0;const g=d(c);fetch(c.href,g)}})();let Fn=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},$=function(a){var u=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,n={},c={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function C(b){return b instanceof g?new g(b.type,C(b.content),b.alias):Array.isArray(b)?b.map(C):b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(C){return Object.prototype.toString.call(C).slice(8,-1)},objId:function(C){return C.__id||Object.defineProperty(C,"__id",{value:++d}),C.__id},clone:function C(b,w){let _,S;switch(w=w||{},c.util.type(b)){case"Object":if(S=c.util.objId(b),w[S])return w[S];for(let z in _={},w[S]=_,b)b.hasOwnProperty(z)&&(_[z]=C(b[z],w));return _;case"Array":return S=c.util.objId(b),w[S]?w[S]:(_=[],w[S]=_,b.forEach(function(z,O){_[O]=C(z,w)}),_);default:return b}},getLanguage:function(C){for(;C;){let b=u.exec(C.className);if(b)return b[1].toLowerCase();C=C.parentElement}return"none"},setLanguage:function(C,b){C.className=C.className.replace(RegExp(u,"gi"),""),C.classList.add("language-"+b)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(C){let b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack)||[])[1];if(b){let w=document.getElementsByTagName("script");for(let _ in w)if(w[_].src==b)return w[_]}return null}},isActive:function(C,b,w){for(let _="no-"+b;C;){let S=C.classList;if(S.contains(b))return!0;if(S.contains(_))return!1;C=C.parentElement}return!!w}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(C,b){let w=c.util.clone(c.languages[C]);for(let _ in b)w[_]=b[_];return w},insertBefore:function(C,b,w,_){let S=(_=_||c.languages)[C],z={};for(let e in S)if(S.hasOwnProperty(e)){if(e==b)for(let t in w)w.hasOwnProperty(t)&&(z[t]=w[t]);w.hasOwnProperty(e)||(z[e]=S[e])}let O=_[C];return _[C]=z,c.languages.DFS(c.languages,function(e,t){t===O&&e!=C&&(this[e]=z)}),z},DFS:function C(b,w,_,S){S=S||{};let z=c.util.objId;for(let O in b)if(b.hasOwnProperty(O)){w.call(b,O,b[O],_||O);let e=b[O],t=c.util.type(e);t!=="Object"||S[z(e)]?t!=="Array"||S[z(e)]||(S[z(e)]=!0,C(e,w,O,S)):(S[z(e)]=!0,C(e,w,null,S))}}},plugins:{},highlightAll:function(C,b){c.highlightAllUnder(document,C,b)},highlightAllUnder:function(C,b,w){let _={callback:w,container:C,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};c.hooks.run("before-highlightall",_),_.elements=Array.prototype.slice.apply(_.container.querySelectorAll(_.selector)),c.hooks.run("before-all-elements-highlight",_);for(var S,z=0;S=_.elements[z++];)c.highlightElement(S,b===!0,_.callback)},highlightElement:function(C,b,w){let _=c.util.getLanguage(C),S=c.languages[_];c.util.setLanguage(C,_);let z=C.parentElement;z&&z.nodeName.toLowerCase()==="pre"&&c.util.setLanguage(z,_);let O={element:C,language:_,grammar:S,code:C.textContent};function e(t){O.highlightedCode=t,c.hooks.run("before-insert",O),O.element.innerHTML=O.highlightedCode,c.hooks.run("after-highlight",O),c.hooks.run("complete",O),w&&w.call(O.element)}if(c.hooks.run("before-sanity-check",O),(z=O.element.parentElement)&&z.nodeName.toLowerCase()==="pre"&&!z.hasAttribute("tabindex")&&z.setAttribute("tabindex","0"),!O.code)return c.hooks.run("complete",O),void(w&&w.call(O.element));if(c.hooks.run("before-highlight",O),O.grammar)if(b&&a.Worker){let t=new Worker(c.filename);t.onmessage=function(r){e(r.data)},t.postMessage(JSON.stringify({language:O.language,code:O.code,immediateClose:!0}))}else e(c.highlight(O.code,O.grammar,O.language));else e(c.util.encode(O.code))},highlight:function(C,b,w){let _={code:C,grammar:b,language:w};if(c.hooks.run("before-tokenize",_),!_.grammar)throw new Error('The language "'+_.language+'" has no grammar.');return _.tokens=c.tokenize(_.code,_.grammar),c.hooks.run("after-tokenize",_),g.stringify(c.util.encode(_.tokens),_.language)},tokenize:function(C,b){let w=b.rest;if(w){for(let S in w)b[S]=w[S];delete b.rest}let _=new j;return P(_,_.head,C),T(C,_,b,_.head,0),function(S){for(var z=[],O=S.head.next;O!==S.tail;)z.push(O.value),O=O.next;return z}(_)},hooks:{all:{},add:function(C,b){let w=c.hooks.all;w[C]=w[C]||[],w[C].push(b)},run:function(C,b){let w=c.hooks.all[C];if(w&&w.length)for(var _,S=0;_=w[S++];)_(b)}},Token:g};function g(C,b,w,_){this.type=C,this.content=b,this.alias=w,this.length=0|(_||"").length}function A(C,b,w,_){C.lastIndex=b;let S=C.exec(w);if(S&&_&&S[1]){let z=S[1].length;S.index+=z,S[0]=S[0].slice(z)}return S}function T(C,b,w,_,S,z){for(let o in w)if(w.hasOwnProperty(o)&&w[o]){let f=w[o];f=Array.isArray(f)?f:[f];for(let s=0;s<f.length;++s){if(z&&z.cause==o+","+s)return;let p=f[s],m=p.inside,y=!!p.lookbehind,x=!!p.greedy,E=p.alias;if(x&&!p.pattern.global){let l=p.pattern.toString().match(/[imsuy]*$/)[0];p.pattern=RegExp(p.pattern.source,l+"g")}for(let l=p.pattern||p,k=_.next,M=S;k!==b.tail&&!(z&&M>=z.reach);M+=k.value.length,k=k.next){let I=k.value;if(b.length>C.length)return;if(!(I instanceof g)){var O,e=1;if(x){if(!(O=A(l,M,C,y))||O.index>=C.length)break;var t=O.index,r=O.index+O[0].length,i=M;for(i+=k.value.length;t>=i;)i+=(k=k.next).value.length;if(M=i-=k.value.length,k.value instanceof g)continue;for(let v=k;v!==b.tail&&(i<r||typeof v.value=="string");v=v.next)e++,i+=v.value.length;e--,I=C.slice(M,i),O.index-=M}else if(!(O=A(l,0,I,y)))continue;t=O.index;let U=O[0],B=I.slice(0,t),G=I.slice(t+U.length),K=M+I.length;z&&K>z.reach&&(z.reach=K);let Z=k.prev;if(B&&(Z=P(b,Z,B),M+=B.length),R(b,Z,e),k=P(b,Z,new g(o,m?c.tokenize(U,m):U,E,U)),G&&P(b,k,G),e>1){let v={cause:o+","+s,reach:K};T(C,b,w,k.prev,M,v),z&&v.reach>z.reach&&(z.reach=v.reach)}}}}}}function j(){let C={value:null,prev:null,next:null},b={value:null,prev:C,next:null};C.next=b,this.head=C,this.tail=b,this.length=0}function P(C,b,w){let _=b.next,S={value:w,prev:b,next:_};return b.next=S,_.prev=S,C.length++,S}function R(C,b,w){for(var _=b.next,S=0;S<w&&_!==C.tail;S++)_=_.next;b.next=_,_.prev=b,C.length-=S}if(a.Prism=c,g.stringify=function C(b,w){if(typeof b=="string")return b;if(Array.isArray(b)){let O="";return b.forEach(function(e){O+=C(e,w)}),O}let _={type:b.type,content:C(b.content,w),tag:"span",classes:["token",b.type],attributes:{},language:w},S=b.alias;S&&(Array.isArray(S)?Array.prototype.push.apply(_.classes,S):_.classes.push(S)),c.hooks.run("wrap",_);let z="";for(let O in _.attributes)z+=" "+O+'="'+(_.attributes[O]||"").replace(/"/g,"&quot;")+'"';return"<"+_.tag+' class="'+_.classes.join(" ")+'"'+z+">"+_.content+"</"+_.tag+">"},!a.document)return a.addEventListener&&(c.disableWorkerMessageHandler||a.addEventListener("message",function(C){let b=JSON.parse(C.data),w=b.language,_=b.code,S=b.immediateClose;a.postMessage(c.highlight(_,c.languages[w],w)),S&&a.close()},!1)),c;let L=c.util.currentScript();function H(){c.manual||c.highlightAll()}if(L&&(c.filename=L.src,L.hasAttribute("data-manual")&&(c.manual=!0)),!c.manual){let C=document.readyState;C==="loading"||C==="interactive"&&L&&L.defer?document.addEventListener("DOMContentLoaded",H):window.requestAnimationFrame?window.requestAnimationFrame(H):window.setTimeout(H,16)}return c}(Fn);typeof ke<"u"&&ke.exports&&(ke.exports=$),typeof global<"u"&&(global.Prism=$);$.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},$.languages.markup.tag.inside["attr-value"].inside.entity=$.languages.markup.entity,$.languages.markup.doctype.inside["internal-subset"].inside=$.languages.markup,$.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty($.languages.markup.tag,"addInlined",{value:function(a,u){let d={};d["language-"+u]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:$.languages[u]},d.cdata=/^<!\[CDATA\[|\]\]>$/i;let n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:d}};n["language-"+u]={pattern:/[\s\S]+/,inside:$.languages[u]};let c={};c[a]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return a}),"i"),lookbehind:!0,greedy:!0,inside:n},$.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty($.languages.markup.tag,"addAttribute",{value:function(a,u){$.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(`(^|["'\\s])(?:`+a+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[u,"language-"+u],inside:$.languages[u]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),$.languages.html=$.languages.markup,$.languages.mathml=$.languages.markup,$.languages.svg=$.languages.markup,$.languages.xml=$.languages.extend("markup",{}),$.languages.ssml=$.languages.xml,$.languages.atom=$.languages.xml,$.languages.rss=$.languages.xml;(function(a){let u=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+u.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+u.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+u.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+u.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:u,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;let d=a.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))})($);$.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};$.languages.javascript=$.languages.extend("clike",{"class-name":[$.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),$.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,$.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:$.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:$.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:$.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:$.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:$.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),$.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:$.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),$.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),$.languages.markup&&($.languages.markup.tag.addInlined("script","javascript"),$.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),$.languages.js=$.languages.javascript;(function(a){a.languages.typescript=a.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),a.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete a.languages.typescript.parameter,delete a.languages.typescript["literal-property"];let u=a.languages.extend("typescript",{});delete u["class-name"],a.languages.typescript["class-name"].inside=u,a.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:u}}}}),a.languages.ts=a.languages.typescript})($);const Ue="savant-context-request",Se="context-",en="context-out-",Ne=new WeakMap;function In(a,u,d){const c=bn(a,u)===void 0&&Ve(a,u);vn(a,u,d)&&c&&c.triggerRecheck.val++}function Rn(a,u){const d=Dn(a,u),n=D(d);return ee(()=>{if(d.triggerRecheck.val){const c=Ve(a,u);if(c===n.val)return;n.val=c}}),$n(ee(()=>{var c;return(c=n.val)==null?void 0:c.val}))}function Bn(a,u){const d=qe(a);if(d===void 0)return;const n=d.contexts.get(u);n!==void 0&&(d.contexts.delete(u),d.contexts.size===1&&(Ne.delete(a),a.removeEventListener(Ue,d.listener)),n.triggerRecheck.val++)}function vn(a,u,d){const n=qe(a);if(n===void 0){const g=j=>{const P=j,R=bn(a,P.detail.key);R!==void 0&&(P.detail.context=R,j.stopPropagation())};a.addEventListener(Ue,g);const A=Object.assign(D(d),{triggerRecheck:D(0)}),T={listener:g,contexts:new Map([[u,A]])};return Ne.set(a,T),A}const c=n.contexts.get(u);if(c===void 0){const g=Object.assign(D(d),{triggerRecheck:D(0)});return n.contexts.set(u,g),g}return c.raw!==d&&(c.val=d),c}function Dn(a,u){const d=Ve(a,u);return d!==void 0?d:vn(a,u,void 0)}function Ve(a,u){const d=new CustomEvent(Ue,{bubbles:!0,cancelable:!0,detail:{key:u,context:void 0}});return a.dispatchEvent(d),d.detail.context}function qe(a){return Ne.get(a)}function bn(a,u){var d;return(d=qe(a))==null?void 0:d.contexts.get(u)}function $n(a){return Object.assign(a,{triggerRecheck:D(0)})}const Hn=100,Un=1e3,We=document.getRootNode().firstChild;let te,oe;const Fe=new Set,_e=new Set,Ie=new Set;let Re=!1,Be=!1;function D(a,u){return new ce(a,u)}function ee(a,u){const d={getters:new Set,setters:new Set},n=D(Ge(a,d,void 0),u),c={func:a,state:n};oe?oe.push(c):c.dom=We;for(const g of d.getters.difference(d.setters))g._listeners.push(c),Ze(g);return n}function Y(a){return typeof a=="function"?ee(a):a instanceof ce?ee(()=>a.val):ee(()=>a)}function Nn(a){return a instanceof ce?a.val:typeof a=="function"?a():a}function Vn(){Re||(Re=!0,setTimeout(qn))}function qn(){let a=[..._e].filter(nn),u=0;do if(Fe.clear(),new Set(a.flatMap(c=>c._listeners=c._listeners.filter(Pe))).forEach(Wn),a=[...Fe],u++>Hn){console.error("Reactive propagation recursion limit exceeded. Further propagation cancelled.");break}while(a.length>0);a=[..._e].filter(nn),_e.clear();const d=new Set(a.flatMap(n=>n._bindings=n._bindings.filter(Pe)));for(const n of d)Xn(n.dom,he(n.func,n.dom)),n.dom=void 0;a.forEach(n=>n._old=n._val),Re=!1}function Wn(a){const u={getters:new Set,setters:new Set};a.state.val=Ge(a.func,u,void 0);const d={...a};d.dom||(oe?oe.push(d):d.dom=We);for(const n of u.getters.difference(u.setters))n._listeners.push(d),Ze(n);a.dom=void 0}function Ge(a,u,d){const n=te;te=u;const c=a(d);return te=n,c}function Pe(a){var u;return!!((u=a.dom)!=null&&u.isConnected)}function Ze(a){Ie.add(a),Gn()}function Gn(){Be||(Be=!0,setTimeout(Zn,Un))}function Zn(){var a;for(const u of Ie)u._listeners=u._listeners.filter(Pe),u._bindings=u._bindings.filter(Pe),u._listeners.length+u._bindings.length===0&&((a=u._onDispose)==null||a.call(u));Ie.clear(),Be=!1}function he(a,u){const d={getters:new Set,setters:new Set},n=oe;oe=[];const c=Ge(a,d,u),g=(c??We)instanceof Node?c:new Text(String(c)),A={func:a,dom:g};for(const T of d.getters.difference(d.setters))T._bindings.push(A),Ze(T);for(const T of oe)T.dom=A.dom;return oe=n,g}function nn(a){return a._val!==a._old}class ce{constructor(u,d){fe(this,"_val");fe(this,"_old");fe(this,"_listeners");fe(this,"_bindings");fe(this,"_onDispose");this._val=u,this._old=u,this._bindings=[],this._listeners=[],this._onDispose=d}set val(u){var d;if((d=te==null?void 0:te.setters)==null||d.add(this),u!==this._val){if(this._val=u,this._bindings.length+this._listeners.length===0){this._old=u;return}Fe.add(this),_e.add(this),Vn()}}get val(){var u;return(u=te==null?void 0:te.getters)==null||u.add(this),this._val}set raw(u){this._val=u,this._bindings.length+this._listeners.length===0&&(this._old=u)}get raw(){return this._val}get old(){var u;return(u=te==null?void 0:te.getters)==null||u.add(this),this._old}}const tn={},h=new Proxy({},Xe()),re=new Proxy({},Xe("http://www.w3.org/2000/svg"));new Proxy({},Xe("http://www.w3.org/1998/Math/MathML"));function ge(a,...u){for(const d of u.flat(1/0)){let n;d instanceof ce?n=he(()=>d.val):typeof d=="function"?n=he(d):d instanceof Node?n=d:["boolean","string","number","bigint"].includes(typeof d)&&(n=String(d)),n!=null&&a.append(n)}return a}function Xe(a){return{get:(u,d)=>Kn.bind(void 0,a,d)}}function Xn(a,u){if(!u)return a.remove();if(u!==a)return a.replaceWith(u)}function Kn(a,u,d,...n){const c=Object.getPrototypeOf(d)===Object.prototype,[{is:g,...A},...T]=c?[d,n]:[{},[d,...n]],j=a?document.createElementNS(a,u,{is:g}):document.createElement(u,{is:g});return Object.entries(A).forEach(([P,R])=>Jn(j,P,R)),ge(j,T)}function Jn(a,u,d){const n=u.startsWith("$"),c=u.startsWith("on");if(u=n?u.slice(1):u,u.startsWith(en))return setTimeout(()=>{const A=Rn(a,u.slice(en.length));typeof d=="object"&&d instanceof ce?d.val=A.val:typeof d=="function"?d(A):console.warn(`Context out property "${u}" on element <${a.tagName}> expects a function or State, but got ${typeof d}.`)});if(u.startsWith(Se))return he(()=>(!n||typeof d=="object"&&d instanceof ce&&d.val?In(a,u.slice(Se.length),d):Bn(a,u.slice(Se.length)),a));const g=Qn(a,u,c);if(!c&&typeof d=="function"&&(d=ee(d)),typeof d=="object"&&d instanceof ce)return he(()=>(!n||d.val?g(d.val,d._old):a.removeAttribute(u),a));if(n)return he(()=>(d.val?g(d):a.removeAttribute(u),a));g(d)}function Qn(a,u,d){var g;const n=`${a.tagName}:${u}`;let c=tn[n];return c||(c=(g=_n(Object.getPrototypeOf(a),u))==null?void 0:g.set,tn[n]=c),d?(A,T)=>{const j=u.slice(2);T&&a.removeEventListener(j,T),a.addEventListener(j,A)}:(c==null?void 0:c.bind(a))??a.setAttribute.bind(a,u)}function _n(a,u){if(!a||a===Object.prototype)return;const d=Object.getOwnPropertyDescriptor(a,u);return d||_n(Object.getPrototypeOf(a),u)}function wn({class:a,...u},...d){const n=Y(a);return h.span({class:()=>`badge flex items-center gap-1 select-none ${n.val}`,...u},d)}function ue({class:a,...u},...d){const n=Y(a);return h.button({tabIndex:0,class:()=>`button flex items-center gap-2 select-none ${n.val}`,...u},d)}function Yn({icon:a,class:u,...d},...n){const c=Y(u);return h.div({class:()=>`flex items-center control variant-soft-outline text-swatch-700-mood gap-2 ${c.val}`,...d},h.i({class:"text-mood-500"},a),n)}function Ke({value:a=D(!1),required:u,class:d,...n},...c){const g=Y(d);return h.div({name:"Checkbox",onclick:()=>a.val=!a.val,"$data-selected":a,class:()=>{var A;return`flex cursor-pointer justify-between items-center gap-2 select-none group ${(A=g.val)==null?void 0:A.split(" ").filter(T=>!T.includes("variant")).join(" ")}`},...n},c,ue({role:"checkbox",type:"button",tabIndex:0,class:()=>{var A;return`button size-5 !rounded-md aspect-square focus-visible:mood-accent !p-0.5 group-has-invalid:mood-critical ${(A=g.val)==null?void 0:A.split(" ").filter(T=>T.includes("variant")).join(" ")}`}},re.svg({viewBox:"0 0 100 100",class:"size-4 not-group-data-selected:hidden",style:"stroke-linecap:round; stroke-linejoin:round;"},re.path({d:"M20,60L40,80L80,20",class:"stroke-current stroke-[10] fill-none"}))),h.input({type:"checkbox",checked:a,required:u,hidden:!0}))}function et({progress:a=50,indefinite:u=!1,class:d,...n},...c){const g=Y(d),A=Y(a),T=Y(u);return h.div({name:"Circular Progress Bar",style:"--progress-bar-stroke-width: 2px",class:()=>`group inline-block relative min-w-[1em] min-h-[1em] rounded-full [.variant-outline]:ring-[length:var(--progress-bar-stroke-width)] [.variant-soft-outline]:ring-[length:var(--progress-bar-stroke-width)] !p-0 ${g.val}`,...n},re.svg({style:"padding: calc(var(--progress-bar-stroke-width) * 0.5)",class:"absolute inset-0 -rotate-90",viewBox:"0 0 36 36"},re.circle({style:()=>`cx: 50%; cy: 50%; r: 50%; stroke-dasharray: calc(1% * pi * ${A.val}) calc(1% * pi * (100 - ${A.val}));`,class:()=>`origin-center fill-none stroke-current stroke-[length:var(--progress-bar-stroke-width)] not-group-[.variant-filled]:text-mood-500 ${T.val?"animate-spin":""}`,"stroke-linecap":"round"})),h.span({class:"relative text-xs text-center m-[calc(2_*_var(--progress-bar-stroke-width))] aspect-square flex items-center justify-center h-full"},c))}function W({language:a,class:u,...d},...n){const c=Y(u),g=h.pre({class:c.val,...d},h.code({class:`language-${a}`},n));return Prism.highlightAllUnder(g),g}function nt({class:a,...u},...d){const n=Y(a);return h.form({class:()=>`flex flex-col gap-4 ${n.val}`,...u},d)}const Ae=(a,...u)=>h.i(a,u);function ve({value:a=D(void 0),type:u=a.raw!==void 0?typeof a.raw:"text",placeholder:d=`Enter ${u}...`,required:n=!1,lead:c,trail:g,inputProps:A,onValueChanged:T,onValidityChanged:j,class:P,...R},...L){const H=Y(P),C=w=>{var S;const _=(S=w.target)==null?void 0:S.value;typeof a.val=="number"&&Number(_)?a.val=Number(_):typeof a.val=="string"&&(a.val=_),T==null||T(a.raw),j==null||j(b.checkValidity())},b=h.input({id:"input",class:"input flex-1 min-w-0",type:u,value:()=>a.val??"",oninput:C,placeholder:d,required:n,...A});return h.div({name:"Text Input",class:()=>`control flex p-0 *:first:pl-2 *:last:pr-2 gap-2 *:py-1 has-focus-visible:mood-accent has-invalid:has-invalid:mood-critical ${H.val}`,...R},()=>["boolean","string","number","bigint"].includes(typeof c)?h.label({for:"input"},h.span(c)):c!=null?h.label({for:"input"},c):void 0,b,L,()=>["boolean","string","number","bigint"].includes(typeof g)?h.label({for:"input"},h.span(g)):g!=null?h.label({for:"input"},g):void 0)}function q({content:a,class:u,...d},...n){const c=Y(u);return h.div({name:"Label",class:()=>`flex flex-col gap-1 ${c.val}`},h.label({class:"flex items-center text-mini text-swatch-700-mood",...d},a),n)}var rn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yn(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var we={exports:{}},tt=we.exports,an;function rt(){return an||(an=1,function(a){(function(){function u(e){var t={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",type:"string"},rawPrefixHeaderId:{defaultValue:!1,describe:'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',type:"boolean"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},rawHeaderId:{defaultValue:!1,describe:`Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,describe:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,describe:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,describe:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,describe:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,describe:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",describe:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,describe:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,describe:"Open all links in new windows",type:"boolean"},backslashEscapesHTMLTags:{defaultValue:!1,describe:"Support for HTML Tag escaping. ex: <div>foo</div>",type:"boolean"},emoji:{defaultValue:!1,describe:"Enable emoji support. Ex: `this is a :smile: emoji`",type:"boolean"},underline:{defaultValue:!1,describe:"Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",type:"boolean"},ellipsis:{defaultValue:!0,describe:"Replaces three dots with the ellipsis unicode character",type:"boolean"},completeHTMLDocument:{defaultValue:!1,describe:"Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",type:"boolean"},metadata:{defaultValue:!1,describe:"Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",type:"boolean"},splitAdjacentBlockquotes:{defaultValue:!1,describe:"Split adjacent blockquote blocks",type:"boolean"}};if(e===!1)return JSON.parse(JSON.stringify(t));var r={};for(var i in t)t.hasOwnProperty(i)&&(r[i]=t[i].defaultValue);return r}function d(){var e=u(!0),t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=!0);return t}var n={},c={},g={},A=u(!0),T="vanilla",j={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0,backslashEscapesHTMLTags:!0,emoji:!0,splitAdjacentBlockquotes:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:u(!0),allOn:d()};n.helper={},n.extensions={},n.setOption=function(e,t){return A[e]=t,this},n.getOption=function(e){return A[e]},n.getOptions=function(){return A},n.resetOptions=function(){A=u(!0)},n.setFlavor=function(e){if(!j.hasOwnProperty(e))throw Error(e+" flavor was not found");n.resetOptions();var t=j[e];T=e;for(var r in t)t.hasOwnProperty(r)&&(A[r]=t[r])},n.getFlavor=function(){return T},n.getFlavorOptions=function(e){if(j.hasOwnProperty(e))return j[e]},n.getDefaultOptions=function(e){return u(e)},n.subParser=function(e,t){if(n.helper.isString(e))if(typeof t<"u")c[e]=t;else{if(c.hasOwnProperty(e))return c[e];throw Error("SubParser named "+e+" not registered!")}},n.extension=function(e,t){if(!n.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=n.helper.stdExtName(e),n.helper.isUndefined(t)){if(!g.hasOwnProperty(e))throw Error("Extension named "+e+" is not registered!");return g[e]}else{typeof t=="function"&&(t=t()),n.helper.isArray(t)||(t=[t]);var r=P(t,e);if(r.valid)g[e]=t;else throw Error(r.error)}},n.getAllExtensions=function(){return g},n.removeExtension=function(e){delete g[e]},n.resetExtensions=function(){g={}};function P(e,t){var r=t?"Error in "+t+" extension->":"Error in unnamed extension",i={valid:!0,error:""};n.helper.isArray(e)||(e=[e]);for(var o=0;o<e.length;++o){var f=r+" sub-extension "+o+": ",s=e[o];if(typeof s!="object")return i.valid=!1,i.error=f+"must be an object, but "+typeof s+" given",i;if(!n.helper.isString(s.type))return i.valid=!1,i.error=f+'property "type" must be a string, but '+typeof s.type+" given",i;var p=s.type=s.type.toLowerCase();if(p==="language"&&(p=s.type="lang"),p==="html"&&(p=s.type="output"),p!=="lang"&&p!=="output"&&p!=="listener")return i.valid=!1,i.error=f+"type "+p+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',i;if(p==="listener"){if(n.helper.isUndefined(s.listeners))return i.valid=!1,i.error=f+'. Extensions of type "listener" must have a property called "listeners"',i}else if(n.helper.isUndefined(s.filter)&&n.helper.isUndefined(s.regex))return i.valid=!1,i.error=f+p+' extensions must define either a "regex" property or a "filter" method',i;if(s.listeners){if(typeof s.listeners!="object")return i.valid=!1,i.error=f+'"listeners" property must be an object but '+typeof s.listeners+" given",i;for(var m in s.listeners)if(s.listeners.hasOwnProperty(m)&&typeof s.listeners[m]!="function")return i.valid=!1,i.error=f+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+m+" must be a function but "+typeof s.listeners[m]+" given",i}if(s.filter){if(typeof s.filter!="function")return i.valid=!1,i.error=f+'"filter" must be a function, but '+typeof s.filter+" given",i}else if(s.regex){if(n.helper.isString(s.regex)&&(s.regex=new RegExp(s.regex,"g")),!(s.regex instanceof RegExp))return i.valid=!1,i.error=f+'"regex" property must either be a string or a RegExp object, but '+typeof s.regex+" given",i;if(n.helper.isUndefined(s.replace))return i.valid=!1,i.error=f+'"regex" extensions must implement a replace string or function',i}}return i}n.validateExtension=function(e){var t=P(e,null);return t.valid?!0:(console.warn(t.error),!1)},n.hasOwnProperty("helper")||(n.helper={}),n.helper.isString=function(e){return typeof e=="string"||e instanceof String},n.helper.isFunction=function(e){var t={};return e&&t.toString.call(e)==="[object Function]"},n.helper.isArray=function(e){return Array.isArray(e)},n.helper.isUndefined=function(e){return typeof e>"u"},n.helper.forEach=function(e,t){if(n.helper.isUndefined(e))throw new Error("obj param is required");if(n.helper.isUndefined(t))throw new Error("callback param is required");if(!n.helper.isFunction(t))throw new Error("callback param must be a function/closure");if(typeof e.forEach=="function")e.forEach(t);else if(n.helper.isArray(e))for(var r=0;r<e.length;r++)t(e[r],r,e);else if(typeof e=="object")for(var i in e)e.hasOwnProperty(i)&&t(e[i],i,e);else throw new Error("obj does not seem to be an array or an iterable object")},n.helper.stdExtName=function(e){return e.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()};function R(e,t){var r=t.charCodeAt(0);return"¨E"+r+"E"}n.helper.escapeCharactersCallback=R,n.helper.escapeCharacters=function(e,t,r){var i="(["+t.replace(/([\[\]\\])/g,"\\$1")+"])";r&&(i="\\\\"+i);var o=new RegExp(i,"g");return e=e.replace(o,R),e},n.helper.unescapeHTMLEntities=function(e){return e.replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")};var L=function(e,t,r,i){var o=i||"",f=o.indexOf("g")>-1,s=new RegExp(t+"|"+r,"g"+o.replace(/g/g,"")),p=new RegExp(t,o.replace(/g/g,"")),m=[],y,x,E,l,k;do for(y=0;E=s.exec(e);)if(p.test(E[0]))y++||(x=s.lastIndex,l=x-E[0].length);else if(y&&!--y){k=E.index+E[0].length;var M={left:{start:l,end:x},match:{start:x,end:E.index},right:{start:E.index,end:k},wholeMatch:{start:l,end:k}};if(m.push(M),!f)return m}while(y&&(s.lastIndex=x));return m};n.helper.matchRecursiveRegExp=function(e,t,r,i){for(var o=L(e,t,r,i),f=[],s=0;s<o.length;++s)f.push([e.slice(o[s].wholeMatch.start,o[s].wholeMatch.end),e.slice(o[s].match.start,o[s].match.end),e.slice(o[s].left.start,o[s].left.end),e.slice(o[s].right.start,o[s].right.end)]);return f},n.helper.replaceRecursiveRegExp=function(e,t,r,i,o){if(!n.helper.isFunction(t)){var f=t;t=function(){return f}}var s=L(e,r,i,o),p=e,m=s.length;if(m>0){var y=[];s[0].wholeMatch.start!==0&&y.push(e.slice(0,s[0].wholeMatch.start));for(var x=0;x<m;++x)y.push(t(e.slice(s[x].wholeMatch.start,s[x].wholeMatch.end),e.slice(s[x].match.start,s[x].match.end),e.slice(s[x].left.start,s[x].left.end),e.slice(s[x].right.start,s[x].right.end))),x<m-1&&y.push(e.slice(s[x].wholeMatch.end,s[x+1].wholeMatch.start));s[m-1].wholeMatch.end<e.length&&y.push(e.slice(s[m-1].wholeMatch.end)),p=y.join("")}return p},n.helper.regexIndexOf=function(e,t,r){if(!n.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(!(t instanceof RegExp))throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";var i=e.substring(r||0).search(t);return i>=0?i+(r||0):i},n.helper.splitAtIndex=function(e,t){if(!n.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";return[e.substring(0,t),e.substring(t)]},n.helper.encodeEmailAddress=function(e){var t=[function(r){return"&#"+r.charCodeAt(0)+";"},function(r){return"&#x"+r.charCodeAt(0).toString(16)+";"},function(r){return r}];return e=e.replace(/./g,function(r){if(r==="@")r=t[Math.floor(Math.random()*2)](r);else{var i=Math.random();r=i>.9?t[2](r):i>.45?t[1](r):t[0](r)}return r}),e},n.helper.padEnd=function(t,r,i){return r=r>>0,i=String(i||" "),t.length>r?String(t):(r=r-t.length,r>i.length&&(i+=i.repeat(r/i.length)),String(t)+i.slice(0,r))},typeof console>"u"&&(console={warn:function(e){alert(e)},log:function(e){alert(e)},error:function(e){throw e}}),n.helper.regexes={asteriskDashAndColon:/([*_:~])/g},n.helper.emojis={"+1":"👍","-1":"👎",100:"💯",1234:"🔢","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉","8ball":"🎱",a:"🅰️",ab:"🆎",abc:"🔤",abcd:"🔡",accept:"🉑",aerial_tramway:"🚡",airplane:"✈️",alarm_clock:"⏰",alembic:"⚗️",alien:"👽",ambulance:"🚑",amphora:"🏺",anchor:"⚓️",angel:"👼",anger:"💢",angry:"😠",anguished:"😧",ant:"🐜",apple:"🍎",aquarius:"♒️",aries:"♈️",arrow_backward:"◀️",arrow_double_down:"⏬",arrow_double_up:"⏫",arrow_down:"⬇️",arrow_down_small:"🔽",arrow_forward:"▶️",arrow_heading_down:"⤵️",arrow_heading_up:"⤴️",arrow_left:"⬅️",arrow_lower_left:"↙️",arrow_lower_right:"↘️",arrow_right:"➡️",arrow_right_hook:"↪️",arrow_up:"⬆️",arrow_up_down:"↕️",arrow_up_small:"🔼",arrow_upper_left:"↖️",arrow_upper_right:"↗️",arrows_clockwise:"🔃",arrows_counterclockwise:"🔄",art:"🎨",articulated_lorry:"🚛",artificial_satellite:"🛰",astonished:"😲",athletic_shoe:"👟",atm:"🏧",atom_symbol:"⚛️",avocado:"🥑",b:"🅱️",baby:"👶",baby_bottle:"🍼",baby_chick:"🐤",baby_symbol:"🚼",back:"🔙",bacon:"🥓",badminton:"🏸",baggage_claim:"🛄",baguette_bread:"🥖",balance_scale:"⚖️",balloon:"🎈",ballot_box:"🗳",ballot_box_with_check:"☑️",bamboo:"🎍",banana:"🍌",bangbang:"‼️",bank:"🏦",bar_chart:"📊",barber:"💈",baseball:"⚾️",basketball:"🏀",basketball_man:"⛹️",basketball_woman:"⛹️&zwj;♀️",bat:"🦇",bath:"🛀",bathtub:"🛁",battery:"🔋",beach_umbrella:"🏖",bear:"🐻",bed:"🛏",bee:"🐝",beer:"🍺",beers:"🍻",beetle:"🐞",beginner:"🔰",bell:"🔔",bellhop_bell:"🛎",bento:"🍱",biking_man:"🚴",bike:"🚲",biking_woman:"🚴&zwj;♀️",bikini:"👙",biohazard:"☣️",bird:"🐦",birthday:"🎂",black_circle:"⚫️",black_flag:"🏴",black_heart:"🖤",black_joker:"🃏",black_large_square:"⬛️",black_medium_small_square:"◾️",black_medium_square:"◼️",black_nib:"✒️",black_small_square:"▪️",black_square_button:"🔲",blonde_man:"👱",blonde_woman:"👱&zwj;♀️",blossom:"🌼",blowfish:"🐡",blue_book:"📘",blue_car:"🚙",blue_heart:"💙",blush:"😊",boar:"🐗",boat:"⛵️",bomb:"💣",book:"📖",bookmark:"🔖",bookmark_tabs:"📑",books:"📚",boom:"💥",boot:"👢",bouquet:"💐",bowing_man:"🙇",bow_and_arrow:"🏹",bowing_woman:"🙇&zwj;♀️",bowling:"🎳",boxing_glove:"🥊",boy:"👦",bread:"🍞",bride_with_veil:"👰",bridge_at_night:"🌉",briefcase:"💼",broken_heart:"💔",bug:"🐛",building_construction:"🏗",bulb:"💡",bullettrain_front:"🚅",bullettrain_side:"🚄",burrito:"🌯",bus:"🚌",business_suit_levitating:"🕴",busstop:"🚏",bust_in_silhouette:"👤",busts_in_silhouette:"👥",butterfly:"🦋",cactus:"🌵",cake:"🍰",calendar:"📆",call_me_hand:"🤙",calling:"📲",camel:"🐫",camera:"📷",camera_flash:"📸",camping:"🏕",cancer:"♋️",candle:"🕯",candy:"🍬",canoe:"🛶",capital_abcd:"🔠",capricorn:"♑️",car:"🚗",card_file_box:"🗃",card_index:"📇",card_index_dividers:"🗂",carousel_horse:"🎠",carrot:"🥕",cat:"🐱",cat2:"🐈",cd:"💿",chains:"⛓",champagne:"🍾",chart:"💹",chart_with_downwards_trend:"📉",chart_with_upwards_trend:"📈",checkered_flag:"🏁",cheese:"🧀",cherries:"🍒",cherry_blossom:"🌸",chestnut:"🌰",chicken:"🐔",children_crossing:"🚸",chipmunk:"🐿",chocolate_bar:"🍫",christmas_tree:"🎄",church:"⛪️",cinema:"🎦",circus_tent:"🎪",city_sunrise:"🌇",city_sunset:"🌆",cityscape:"🏙",cl:"🆑",clamp:"🗜",clap:"👏",clapper:"🎬",classical_building:"🏛",clinking_glasses:"🥂",clipboard:"📋",clock1:"🕐",clock10:"🕙",clock1030:"🕥",clock11:"🕚",clock1130:"🕦",clock12:"🕛",clock1230:"🕧",clock130:"🕜",clock2:"🕑",clock230:"🕝",clock3:"🕒",clock330:"🕞",clock4:"🕓",clock430:"🕟",clock5:"🕔",clock530:"🕠",clock6:"🕕",clock630:"🕡",clock7:"🕖",clock730:"🕢",clock8:"🕗",clock830:"🕣",clock9:"🕘",clock930:"🕤",closed_book:"📕",closed_lock_with_key:"🔐",closed_umbrella:"🌂",cloud:"☁️",cloud_with_lightning:"🌩",cloud_with_lightning_and_rain:"⛈",cloud_with_rain:"🌧",cloud_with_snow:"🌨",clown_face:"🤡",clubs:"♣️",cocktail:"🍸",coffee:"☕️",coffin:"⚰️",cold_sweat:"😰",comet:"☄️",computer:"💻",computer_mouse:"🖱",confetti_ball:"🎊",confounded:"😖",confused:"😕",congratulations:"㊗️",construction:"🚧",construction_worker_man:"👷",construction_worker_woman:"👷&zwj;♀️",control_knobs:"🎛",convenience_store:"🏪",cookie:"🍪",cool:"🆒",policeman:"👮",copyright:"©️",corn:"🌽",couch_and_lamp:"🛋",couple:"👫",couple_with_heart_woman_man:"💑",couple_with_heart_man_man:"👨&zwj;❤️&zwj;👨",couple_with_heart_woman_woman:"👩&zwj;❤️&zwj;👩",couplekiss_man_man:"👨&zwj;❤️&zwj;💋&zwj;👨",couplekiss_man_woman:"💏",couplekiss_woman_woman:"👩&zwj;❤️&zwj;💋&zwj;👩",cow:"🐮",cow2:"🐄",cowboy_hat_face:"🤠",crab:"🦀",crayon:"🖍",credit_card:"💳",crescent_moon:"🌙",cricket:"🏏",crocodile:"🐊",croissant:"🥐",crossed_fingers:"🤞",crossed_flags:"🎌",crossed_swords:"⚔️",crown:"👑",cry:"😢",crying_cat_face:"😿",crystal_ball:"🔮",cucumber:"🥒",cupid:"💘",curly_loop:"➰",currency_exchange:"💱",curry:"🍛",custard:"🍮",customs:"🛃",cyclone:"🌀",dagger:"🗡",dancer:"💃",dancing_women:"👯",dancing_men:"👯&zwj;♂️",dango:"🍡",dark_sunglasses:"🕶",dart:"🎯",dash:"💨",date:"📅",deciduous_tree:"🌳",deer:"🦌",department_store:"🏬",derelict_house:"🏚",desert:"🏜",desert_island:"🏝",desktop_computer:"🖥",male_detective:"🕵️",diamond_shape_with_a_dot_inside:"💠",diamonds:"♦️",disappointed:"😞",disappointed_relieved:"😥",dizzy:"💫",dizzy_face:"😵",do_not_litter:"🚯",dog:"🐶",dog2:"🐕",dollar:"💵",dolls:"🎎",dolphin:"🐬",door:"🚪",doughnut:"🍩",dove:"🕊",dragon:"🐉",dragon_face:"🐲",dress:"👗",dromedary_camel:"🐪",drooling_face:"🤤",droplet:"💧",drum:"🥁",duck:"🦆",dvd:"📀","e-mail":"📧",eagle:"🦅",ear:"👂",ear_of_rice:"🌾",earth_africa:"🌍",earth_americas:"🌎",earth_asia:"🌏",egg:"🥚",eggplant:"🍆",eight_pointed_black_star:"✴️",eight_spoked_asterisk:"✳️",electric_plug:"🔌",elephant:"🐘",email:"✉️",end:"🔚",envelope_with_arrow:"📩",euro:"💶",european_castle:"🏰",european_post_office:"🏤",evergreen_tree:"🌲",exclamation:"❗️",expressionless:"😑",eye:"👁",eye_speech_bubble:"👁&zwj;🗨",eyeglasses:"👓",eyes:"👀",face_with_head_bandage:"🤕",face_with_thermometer:"🤒",fist_oncoming:"👊",factory:"🏭",fallen_leaf:"🍂",family_man_woman_boy:"👪",family_man_boy:"👨&zwj;👦",family_man_boy_boy:"👨&zwj;👦&zwj;👦",family_man_girl:"👨&zwj;👧",family_man_girl_boy:"👨&zwj;👧&zwj;👦",family_man_girl_girl:"👨&zwj;👧&zwj;👧",family_man_man_boy:"👨&zwj;👨&zwj;👦",family_man_man_boy_boy:"👨&zwj;👨&zwj;👦&zwj;👦",family_man_man_girl:"👨&zwj;👨&zwj;👧",family_man_man_girl_boy:"👨&zwj;👨&zwj;👧&zwj;👦",family_man_man_girl_girl:"👨&zwj;👨&zwj;👧&zwj;👧",family_man_woman_boy_boy:"👨&zwj;👩&zwj;👦&zwj;👦",family_man_woman_girl:"👨&zwj;👩&zwj;👧",family_man_woman_girl_boy:"👨&zwj;👩&zwj;👧&zwj;👦",family_man_woman_girl_girl:"👨&zwj;👩&zwj;👧&zwj;👧",family_woman_boy:"👩&zwj;👦",family_woman_boy_boy:"👩&zwj;👦&zwj;👦",family_woman_girl:"👩&zwj;👧",family_woman_girl_boy:"👩&zwj;👧&zwj;👦",family_woman_girl_girl:"👩&zwj;👧&zwj;👧",family_woman_woman_boy:"👩&zwj;👩&zwj;👦",family_woman_woman_boy_boy:"👩&zwj;👩&zwj;👦&zwj;👦",family_woman_woman_girl:"👩&zwj;👩&zwj;👧",family_woman_woman_girl_boy:"👩&zwj;👩&zwj;👧&zwj;👦",family_woman_woman_girl_girl:"👩&zwj;👩&zwj;👧&zwj;👧",fast_forward:"⏩",fax:"📠",fearful:"😨",feet:"🐾",female_detective:"🕵️&zwj;♀️",ferris_wheel:"🎡",ferry:"⛴",field_hockey:"🏑",file_cabinet:"🗄",file_folder:"📁",film_projector:"📽",film_strip:"🎞",fire:"🔥",fire_engine:"🚒",fireworks:"🎆",first_quarter_moon:"🌓",first_quarter_moon_with_face:"🌛",fish:"🐟",fish_cake:"🍥",fishing_pole_and_fish:"🎣",fist_raised:"✊",fist_left:"🤛",fist_right:"🤜",flags:"🎏",flashlight:"🔦",fleur_de_lis:"⚜️",flight_arrival:"🛬",flight_departure:"🛫",floppy_disk:"💾",flower_playing_cards:"🎴",flushed:"😳",fog:"🌫",foggy:"🌁",football:"🏈",footprints:"👣",fork_and_knife:"🍴",fountain:"⛲️",fountain_pen:"🖋",four_leaf_clover:"🍀",fox_face:"🦊",framed_picture:"🖼",free:"🆓",fried_egg:"🍳",fried_shrimp:"🍤",fries:"🍟",frog:"🐸",frowning:"😦",frowning_face:"☹️",frowning_man:"🙍&zwj;♂️",frowning_woman:"🙍",middle_finger:"🖕",fuelpump:"⛽️",full_moon:"🌕",full_moon_with_face:"🌝",funeral_urn:"⚱️",game_die:"🎲",gear:"⚙️",gem:"💎",gemini:"♊️",ghost:"👻",gift:"🎁",gift_heart:"💝",girl:"👧",globe_with_meridians:"🌐",goal_net:"🥅",goat:"🐐",golf:"⛳️",golfing_man:"🏌️",golfing_woman:"🏌️&zwj;♀️",gorilla:"🦍",grapes:"🍇",green_apple:"🍏",green_book:"📗",green_heart:"💚",green_salad:"🥗",grey_exclamation:"❕",grey_question:"❔",grimacing:"😬",grin:"😁",grinning:"😀",guardsman:"💂",guardswoman:"💂&zwj;♀️",guitar:"🎸",gun:"🔫",haircut_woman:"💇",haircut_man:"💇&zwj;♂️",hamburger:"🍔",hammer:"🔨",hammer_and_pick:"⚒",hammer_and_wrench:"🛠",hamster:"🐹",hand:"✋",handbag:"👜",handshake:"🤝",hankey:"💩",hatched_chick:"🐥",hatching_chick:"🐣",headphones:"🎧",hear_no_evil:"🙉",heart:"❤️",heart_decoration:"💟",heart_eyes:"😍",heart_eyes_cat:"😻",heartbeat:"💓",heartpulse:"💗",hearts:"♥️",heavy_check_mark:"✔️",heavy_division_sign:"➗",heavy_dollar_sign:"💲",heavy_heart_exclamation:"❣️",heavy_minus_sign:"➖",heavy_multiplication_x:"✖️",heavy_plus_sign:"➕",helicopter:"🚁",herb:"🌿",hibiscus:"🌺",high_brightness:"🔆",high_heel:"👠",hocho:"🔪",hole:"🕳",honey_pot:"🍯",horse:"🐴",horse_racing:"🏇",hospital:"🏥",hot_pepper:"🌶",hotdog:"🌭",hotel:"🏨",hotsprings:"♨️",hourglass:"⌛️",hourglass_flowing_sand:"⏳",house:"🏠",house_with_garden:"🏡",houses:"🏘",hugs:"🤗",hushed:"😯",ice_cream:"🍨",ice_hockey:"🏒",ice_skate:"⛸",icecream:"🍦",id:"🆔",ideograph_advantage:"🉐",imp:"👿",inbox_tray:"📥",incoming_envelope:"📨",tipping_hand_woman:"💁",information_source:"ℹ️",innocent:"😇",interrobang:"⁉️",iphone:"📱",izakaya_lantern:"🏮",jack_o_lantern:"🎃",japan:"🗾",japanese_castle:"🏯",japanese_goblin:"👺",japanese_ogre:"👹",jeans:"👖",joy:"😂",joy_cat:"😹",joystick:"🕹",kaaba:"🕋",key:"🔑",keyboard:"⌨️",keycap_ten:"🔟",kick_scooter:"🛴",kimono:"👘",kiss:"💋",kissing:"😗",kissing_cat:"😽",kissing_closed_eyes:"😚",kissing_heart:"😘",kissing_smiling_eyes:"😙",kiwi_fruit:"🥝",koala:"🐨",koko:"🈁",label:"🏷",large_blue_circle:"🔵",large_blue_diamond:"🔷",large_orange_diamond:"🔶",last_quarter_moon:"🌗",last_quarter_moon_with_face:"🌜",latin_cross:"✝️",laughing:"😆",leaves:"🍃",ledger:"📒",left_luggage:"🛅",left_right_arrow:"↔️",leftwards_arrow_with_hook:"↩️",lemon:"🍋",leo:"♌️",leopard:"🐆",level_slider:"🎚",libra:"♎️",light_rail:"🚈",link:"🔗",lion:"🦁",lips:"👄",lipstick:"💄",lizard:"🦎",lock:"🔒",lock_with_ink_pen:"🔏",lollipop:"🍭",loop:"➿",loud_sound:"🔊",loudspeaker:"📢",love_hotel:"🏩",love_letter:"💌",low_brightness:"🔅",lying_face:"🤥",m:"Ⓜ️",mag:"🔍",mag_right:"🔎",mahjong:"🀄️",mailbox:"📫",mailbox_closed:"📪",mailbox_with_mail:"📬",mailbox_with_no_mail:"📭",man:"👨",man_artist:"👨&zwj;🎨",man_astronaut:"👨&zwj;🚀",man_cartwheeling:"🤸&zwj;♂️",man_cook:"👨&zwj;🍳",man_dancing:"🕺",man_facepalming:"🤦&zwj;♂️",man_factory_worker:"👨&zwj;🏭",man_farmer:"👨&zwj;🌾",man_firefighter:"👨&zwj;🚒",man_health_worker:"👨&zwj;⚕️",man_in_tuxedo:"🤵",man_judge:"👨&zwj;⚖️",man_juggling:"🤹&zwj;♂️",man_mechanic:"👨&zwj;🔧",man_office_worker:"👨&zwj;💼",man_pilot:"👨&zwj;✈️",man_playing_handball:"🤾&zwj;♂️",man_playing_water_polo:"🤽&zwj;♂️",man_scientist:"👨&zwj;🔬",man_shrugging:"🤷&zwj;♂️",man_singer:"👨&zwj;🎤",man_student:"👨&zwj;🎓",man_teacher:"👨&zwj;🏫",man_technologist:"👨&zwj;💻",man_with_gua_pi_mao:"👲",man_with_turban:"👳",tangerine:"🍊",mans_shoe:"👞",mantelpiece_clock:"🕰",maple_leaf:"🍁",martial_arts_uniform:"🥋",mask:"😷",massage_woman:"💆",massage_man:"💆&zwj;♂️",meat_on_bone:"🍖",medal_military:"🎖",medal_sports:"🏅",mega:"📣",melon:"🍈",memo:"📝",men_wrestling:"🤼&zwj;♂️",menorah:"🕎",mens:"🚹",metal:"🤘",metro:"🚇",microphone:"🎤",microscope:"🔬",milk_glass:"🥛",milky_way:"🌌",minibus:"🚐",minidisc:"💽",mobile_phone_off:"📴",money_mouth_face:"🤑",money_with_wings:"💸",moneybag:"💰",monkey:"🐒",monkey_face:"🐵",monorail:"🚝",moon:"🌔",mortar_board:"🎓",mosque:"🕌",motor_boat:"🛥",motor_scooter:"🛵",motorcycle:"🏍",motorway:"🛣",mount_fuji:"🗻",mountain:"⛰",mountain_biking_man:"🚵",mountain_biking_woman:"🚵&zwj;♀️",mountain_cableway:"🚠",mountain_railway:"🚞",mountain_snow:"🏔",mouse:"🐭",mouse2:"🐁",movie_camera:"🎥",moyai:"🗿",mrs_claus:"🤶",muscle:"💪",mushroom:"🍄",musical_keyboard:"🎹",musical_note:"🎵",musical_score:"🎼",mute:"🔇",nail_care:"💅",name_badge:"📛",national_park:"🏞",nauseated_face:"🤢",necktie:"👔",negative_squared_cross_mark:"❎",nerd_face:"🤓",neutral_face:"😐",new:"🆕",new_moon:"🌑",new_moon_with_face:"🌚",newspaper:"📰",newspaper_roll:"🗞",next_track_button:"⏭",ng:"🆖",no_good_man:"🙅&zwj;♂️",no_good_woman:"🙅",night_with_stars:"🌃",no_bell:"🔕",no_bicycles:"🚳",no_entry:"⛔️",no_entry_sign:"🚫",no_mobile_phones:"📵",no_mouth:"😶",no_pedestrians:"🚷",no_smoking:"🚭","non-potable_water":"🚱",nose:"👃",notebook:"📓",notebook_with_decorative_cover:"📔",notes:"🎶",nut_and_bolt:"🔩",o:"⭕️",o2:"🅾️",ocean:"🌊",octopus:"🐙",oden:"🍢",office:"🏢",oil_drum:"🛢",ok:"🆗",ok_hand:"👌",ok_man:"🙆&zwj;♂️",ok_woman:"🙆",old_key:"🗝",older_man:"👴",older_woman:"👵",om:"🕉",on:"🔛",oncoming_automobile:"🚘",oncoming_bus:"🚍",oncoming_police_car:"🚔",oncoming_taxi:"🚖",open_file_folder:"📂",open_hands:"👐",open_mouth:"😮",open_umbrella:"☂️",ophiuchus:"⛎",orange_book:"📙",orthodox_cross:"☦️",outbox_tray:"📤",owl:"🦉",ox:"🐂",package:"📦",page_facing_up:"📄",page_with_curl:"📃",pager:"📟",paintbrush:"🖌",palm_tree:"🌴",pancakes:"🥞",panda_face:"🐼",paperclip:"📎",paperclips:"🖇",parasol_on_ground:"⛱",parking:"🅿️",part_alternation_mark:"〽️",partly_sunny:"⛅️",passenger_ship:"🛳",passport_control:"🛂",pause_button:"⏸",peace_symbol:"☮️",peach:"🍑",peanuts:"🥜",pear:"🍐",pen:"🖊",pencil2:"✏️",penguin:"🐧",pensive:"😔",performing_arts:"🎭",persevere:"😣",person_fencing:"🤺",pouting_woman:"🙎",phone:"☎️",pick:"⛏",pig:"🐷",pig2:"🐖",pig_nose:"🐽",pill:"💊",pineapple:"🍍",ping_pong:"🏓",pisces:"♓️",pizza:"🍕",place_of_worship:"🛐",plate_with_cutlery:"🍽",play_or_pause_button:"⏯",point_down:"👇",point_left:"👈",point_right:"👉",point_up:"☝️",point_up_2:"👆",police_car:"🚓",policewoman:"👮&zwj;♀️",poodle:"🐩",popcorn:"🍿",post_office:"🏣",postal_horn:"📯",postbox:"📮",potable_water:"🚰",potato:"🥔",pouch:"👝",poultry_leg:"🍗",pound:"💷",rage:"😡",pouting_cat:"😾",pouting_man:"🙎&zwj;♂️",pray:"🙏",prayer_beads:"📿",pregnant_woman:"🤰",previous_track_button:"⏮",prince:"🤴",princess:"👸",printer:"🖨",purple_heart:"💜",purse:"👛",pushpin:"📌",put_litter_in_its_place:"🚮",question:"❓",rabbit:"🐰",rabbit2:"🐇",racehorse:"🐎",racing_car:"🏎",radio:"📻",radio_button:"🔘",radioactive:"☢️",railway_car:"🚃",railway_track:"🛤",rainbow:"🌈",rainbow_flag:"🏳️&zwj;🌈",raised_back_of_hand:"🤚",raised_hand_with_fingers_splayed:"🖐",raised_hands:"🙌",raising_hand_woman:"🙋",raising_hand_man:"🙋&zwj;♂️",ram:"🐏",ramen:"🍜",rat:"🐀",record_button:"⏺",recycle:"♻️",red_circle:"🔴",registered:"®️",relaxed:"☺️",relieved:"😌",reminder_ribbon:"🎗",repeat:"🔁",repeat_one:"🔂",rescue_worker_helmet:"⛑",restroom:"🚻",revolving_hearts:"💞",rewind:"⏪",rhinoceros:"🦏",ribbon:"🎀",rice:"🍚",rice_ball:"🍙",rice_cracker:"🍘",rice_scene:"🎑",right_anger_bubble:"🗯",ring:"💍",robot:"🤖",rocket:"🚀",rofl:"🤣",roll_eyes:"🙄",roller_coaster:"🎢",rooster:"🐓",rose:"🌹",rosette:"🏵",rotating_light:"🚨",round_pushpin:"📍",rowing_man:"🚣",rowing_woman:"🚣&zwj;♀️",rugby_football:"🏉",running_man:"🏃",running_shirt_with_sash:"🎽",running_woman:"🏃&zwj;♀️",sa:"🈂️",sagittarius:"♐️",sake:"🍶",sandal:"👡",santa:"🎅",satellite:"📡",saxophone:"🎷",school:"🏫",school_satchel:"🎒",scissors:"✂️",scorpion:"🦂",scorpius:"♏️",scream:"😱",scream_cat:"🙀",scroll:"📜",seat:"💺",secret:"㊙️",see_no_evil:"🙈",seedling:"🌱",selfie:"🤳",shallow_pan_of_food:"🥘",shamrock:"☘️",shark:"🦈",shaved_ice:"🍧",sheep:"🐑",shell:"🐚",shield:"🛡",shinto_shrine:"⛩",ship:"🚢",shirt:"👕",shopping:"🛍",shopping_cart:"🛒",shower:"🚿",shrimp:"🦐",signal_strength:"📶",six_pointed_star:"🔯",ski:"🎿",skier:"⛷",skull:"💀",skull_and_crossbones:"☠️",sleeping:"😴",sleeping_bed:"🛌",sleepy:"😪",slightly_frowning_face:"🙁",slightly_smiling_face:"🙂",slot_machine:"🎰",small_airplane:"🛩",small_blue_diamond:"🔹",small_orange_diamond:"🔸",small_red_triangle:"🔺",small_red_triangle_down:"🔻",smile:"😄",smile_cat:"😸",smiley:"😃",smiley_cat:"😺",smiling_imp:"😈",smirk:"😏",smirk_cat:"😼",smoking:"🚬",snail:"🐌",snake:"🐍",sneezing_face:"🤧",snowboarder:"🏂",snowflake:"❄️",snowman:"⛄️",snowman_with_snow:"☃️",sob:"😭",soccer:"⚽️",soon:"🔜",sos:"🆘",sound:"🔉",space_invader:"👾",spades:"♠️",spaghetti:"🍝",sparkle:"❇️",sparkler:"🎇",sparkles:"✨",sparkling_heart:"💖",speak_no_evil:"🙊",speaker:"🔈",speaking_head:"🗣",speech_balloon:"💬",speedboat:"🚤",spider:"🕷",spider_web:"🕸",spiral_calendar:"🗓",spiral_notepad:"🗒",spoon:"🥄",squid:"🦑",stadium:"🏟",star:"⭐️",star2:"🌟",star_and_crescent:"☪️",star_of_david:"✡️",stars:"🌠",station:"🚉",statue_of_liberty:"🗽",steam_locomotive:"🚂",stew:"🍲",stop_button:"⏹",stop_sign:"🛑",stopwatch:"⏱",straight_ruler:"📏",strawberry:"🍓",stuck_out_tongue:"😛",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue_winking_eye:"😜",studio_microphone:"🎙",stuffed_flatbread:"🥙",sun_behind_large_cloud:"🌥",sun_behind_rain_cloud:"🌦",sun_behind_small_cloud:"🌤",sun_with_face:"🌞",sunflower:"🌻",sunglasses:"😎",sunny:"☀️",sunrise:"🌅",sunrise_over_mountains:"🌄",surfing_man:"🏄",surfing_woman:"🏄&zwj;♀️",sushi:"🍣",suspension_railway:"🚟",sweat:"😓",sweat_drops:"💦",sweat_smile:"😅",sweet_potato:"🍠",swimming_man:"🏊",swimming_woman:"🏊&zwj;♀️",symbols:"🔣",synagogue:"🕍",syringe:"💉",taco:"🌮",tada:"🎉",tanabata_tree:"🎋",taurus:"♉️",taxi:"🚕",tea:"🍵",telephone_receiver:"📞",telescope:"🔭",tennis:"🎾",tent:"⛺️",thermometer:"🌡",thinking:"🤔",thought_balloon:"💭",ticket:"🎫",tickets:"🎟",tiger:"🐯",tiger2:"🐅",timer_clock:"⏲",tipping_hand_man:"💁&zwj;♂️",tired_face:"😫",tm:"™️",toilet:"🚽",tokyo_tower:"🗼",tomato:"🍅",tongue:"👅",top:"🔝",tophat:"🎩",tornado:"🌪",trackball:"🖲",tractor:"🚜",traffic_light:"🚥",train:"🚋",train2:"🚆",tram:"🚊",triangular_flag_on_post:"🚩",triangular_ruler:"📐",trident:"🔱",triumph:"😤",trolleybus:"🚎",trophy:"🏆",tropical_drink:"🍹",tropical_fish:"🐠",truck:"🚚",trumpet:"🎺",tulip:"🌷",tumbler_glass:"🥃",turkey:"🦃",turtle:"🐢",tv:"📺",twisted_rightwards_arrows:"🔀",two_hearts:"💕",two_men_holding_hands:"👬",two_women_holding_hands:"👭",u5272:"🈹",u5408:"🈴",u55b6:"🈺",u6307:"🈯️",u6708:"🈷️",u6709:"🈶",u6e80:"🈵",u7121:"🈚️",u7533:"🈸",u7981:"🈲",u7a7a:"🈳",umbrella:"☔️",unamused:"😒",underage:"🔞",unicorn:"🦄",unlock:"🔓",up:"🆙",upside_down_face:"🙃",v:"✌️",vertical_traffic_light:"🚦",vhs:"📼",vibration_mode:"📳",video_camera:"📹",video_game:"🎮",violin:"🎻",virgo:"♍️",volcano:"🌋",volleyball:"🏐",vs:"🆚",vulcan_salute:"🖖",walking_man:"🚶",walking_woman:"🚶&zwj;♀️",waning_crescent_moon:"🌘",waning_gibbous_moon:"🌖",warning:"⚠️",wastebasket:"🗑",watch:"⌚️",water_buffalo:"🐃",watermelon:"🍉",wave:"👋",wavy_dash:"〰️",waxing_crescent_moon:"🌒",wc:"🚾",weary:"😩",wedding:"💒",weight_lifting_man:"🏋️",weight_lifting_woman:"🏋️&zwj;♀️",whale:"🐳",whale2:"🐋",wheel_of_dharma:"☸️",wheelchair:"♿️",white_check_mark:"✅",white_circle:"⚪️",white_flag:"🏳️",white_flower:"💮",white_large_square:"⬜️",white_medium_small_square:"◽️",white_medium_square:"◻️",white_small_square:"▫️",white_square_button:"🔳",wilted_flower:"🥀",wind_chime:"🎐",wind_face:"🌬",wine_glass:"🍷",wink:"😉",wolf:"🐺",woman:"👩",woman_artist:"👩&zwj;🎨",woman_astronaut:"👩&zwj;🚀",woman_cartwheeling:"🤸&zwj;♀️",woman_cook:"👩&zwj;🍳",woman_facepalming:"🤦&zwj;♀️",woman_factory_worker:"👩&zwj;🏭",woman_farmer:"👩&zwj;🌾",woman_firefighter:"👩&zwj;🚒",woman_health_worker:"👩&zwj;⚕️",woman_judge:"👩&zwj;⚖️",woman_juggling:"🤹&zwj;♀️",woman_mechanic:"👩&zwj;🔧",woman_office_worker:"👩&zwj;💼",woman_pilot:"👩&zwj;✈️",woman_playing_handball:"🤾&zwj;♀️",woman_playing_water_polo:"🤽&zwj;♀️",woman_scientist:"👩&zwj;🔬",woman_shrugging:"🤷&zwj;♀️",woman_singer:"👩&zwj;🎤",woman_student:"👩&zwj;🎓",woman_teacher:"👩&zwj;🏫",woman_technologist:"👩&zwj;💻",woman_with_turban:"👳&zwj;♀️",womans_clothes:"👚",womans_hat:"👒",women_wrestling:"🤼&zwj;♀️",womens:"🚺",world_map:"🗺",worried:"😟",wrench:"🔧",writing_hand:"✍️",x:"❌",yellow_heart:"💛",yen:"💴",yin_yang:"☯️",yum:"😋",zap:"⚡️",zipper_mouth_face:"🤐",zzz:"💤",octocat:'<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',showdown:`<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`},n.Converter=function(e){var t={},r=[],i=[],o={},f=T,s={parsed:{},raw:"",format:""};p();function p(){e=e||{};for(var l in A)A.hasOwnProperty(l)&&(t[l]=A[l]);if(typeof e=="object")for(var k in e)e.hasOwnProperty(k)&&(t[k]=e[k]);else throw Error("Converter expects the passed parameter to be an object, but "+typeof e+" was passed instead.");t.extensions&&n.helper.forEach(t.extensions,m)}function m(l,k){if(k=k||null,n.helper.isString(l))if(l=n.helper.stdExtName(l),k=l,n.extensions[l]){console.warn("DEPRECATION WARNING: "+l+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),y(n.extensions[l],l);return}else if(!n.helper.isUndefined(g[l]))l=g[l];else throw Error('Extension "'+l+'" could not be loaded. It was either not found or is not a valid extension.');typeof l=="function"&&(l=l()),n.helper.isArray(l)||(l=[l]);var M=P(l,k);if(!M.valid)throw Error(M.error);for(var I=0;I<l.length;++I){switch(l[I].type){case"lang":r.push(l[I]);break;case"output":i.push(l[I]);break}if(l[I].hasOwnProperty("listeners"))for(var U in l[I].listeners)l[I].listeners.hasOwnProperty(U)&&x(U,l[I].listeners[U])}}function y(l,k){typeof l=="function"&&(l=l(new n.Converter)),n.helper.isArray(l)||(l=[l]);var M=P(l,k);if(!M.valid)throw Error(M.error);for(var I=0;I<l.length;++I)switch(l[I].type){case"lang":r.push(l[I]);break;case"output":i.push(l[I]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function x(l,k){if(!n.helper.isString(l))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof l+" given");if(typeof k!="function")throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof k+" given");o.hasOwnProperty(l)||(o[l]=[]),o[l].push(k)}function E(l){var k=l.match(/^\s*/)[0].length,M=new RegExp("^\\s{0,"+k+"}","gm");return l.replace(M,"")}this._dispatch=function(k,M,I,U){if(o.hasOwnProperty(k))for(var B=0;B<o[k].length;++B){var G=o[k][B](k,M,this,I,U);G&&typeof G<"u"&&(M=G)}return M},this.listen=function(l,k){return x(l,k),this},this.makeHtml=function(l){if(!l)return l;var k={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:r,outputModifiers:i,converter:this,ghCodeBlocks:[],metadata:{parsed:{},raw:"",format:""}};return l=l.replace(/¨/g,"¨T"),l=l.replace(/\$/g,"¨D"),l=l.replace(/\r\n/g,`
`),l=l.replace(/\r/g,`
`),l=l.replace(/\u00A0/g,"&nbsp;"),t.smartIndentationFix&&(l=E(l)),l=`

`+l+`

`,l=n.subParser("detab")(l,t,k),l=l.replace(/^[ \t]+$/mg,""),n.helper.forEach(r,function(M){l=n.subParser("runExtension")(M,l,t,k)}),l=n.subParser("metadata")(l,t,k),l=n.subParser("hashPreCodeTags")(l,t,k),l=n.subParser("githubCodeBlocks")(l,t,k),l=n.subParser("hashHTMLBlocks")(l,t,k),l=n.subParser("hashCodeTags")(l,t,k),l=n.subParser("stripLinkDefinitions")(l,t,k),l=n.subParser("blockGamut")(l,t,k),l=n.subParser("unhashHTMLSpans")(l,t,k),l=n.subParser("unescapeSpecialChars")(l,t,k),l=l.replace(/¨D/g,"$$"),l=l.replace(/¨T/g,"¨"),l=n.subParser("completeHTMLDocument")(l,t,k),n.helper.forEach(i,function(M){l=n.subParser("runExtension")(M,l,t,k)}),s=k.metadata,l},this.makeMarkdown=this.makeMd=function(l,k){if(l=l.replace(/\r\n/g,`
`),l=l.replace(/\r/g,`
`),l=l.replace(/>[ \t]+</,">¨NBSP;<"),!k)if(window&&window.document)k=window.document;else throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");var M=k.createElement("div");M.innerHTML=l;var I={preList:Z(M)};K(M);for(var U=M.childNodes,B="",G=0;G<U.length;G++)B+=n.subParser("makeMarkdown.node")(U[G],I);function K(v){for(var F=0;F<v.childNodes.length;++F){var N=v.childNodes[F];N.nodeType===3?!/\S/.test(N.nodeValue)&&!/^[ ]+$/.test(N.nodeValue)?(v.removeChild(N),--F):(N.nodeValue=N.nodeValue.split(`
`).join(" "),N.nodeValue=N.nodeValue.replace(/(\s)+/g,"$1")):N.nodeType===1&&K(N)}}function Z(v){for(var F=v.querySelectorAll("pre"),N=[],V=0;V<F.length;++V)if(F[V].childElementCount===1&&F[V].firstChild.tagName.toLowerCase()==="code"){var ae=F[V].firstChild.innerHTML.trim(),ne=F[V].firstChild.getAttribute("data-language")||"";if(ne==="")for(var le=F[V].firstChild.className.split(" "),se=0;se<le.length;++se){var Ye=le[se].match(/^language-(.+)$/);if(Ye!==null){ne=Ye[1];break}}ae=n.helper.unescapeHTMLEntities(ae),N.push(ae),F[V].outerHTML='<precode language="'+ne+'" precodenum="'+V.toString()+'"></precode>'}else N.push(F[V].innerHTML),F[V].innerHTML="",F[V].setAttribute("prenum",V.toString());return N}return B},this.setOption=function(l,k){t[l]=k},this.getOption=function(l){return t[l]},this.getOptions=function(){return t},this.addExtension=function(l,k){k=k||null,m(l,k)},this.useExtension=function(l){m(l)},this.setFlavor=function(l){if(!j.hasOwnProperty(l))throw Error(l+" flavor was not found");var k=j[l];f=l;for(var M in k)k.hasOwnProperty(M)&&(t[M]=k[M])},this.getFlavor=function(){return f},this.removeExtension=function(l){n.helper.isArray(l)||(l=[l]);for(var k=0;k<l.length;++k){for(var M=l[k],I=0;I<r.length;++I)r[I]===M&&r.splice(I,1);for(var U=0;U<i.length;++U)i[U]===M&&i.splice(U,1)}},this.getAllExtensions=function(){return{language:r,output:i}},this.getMetadata=function(l){return l?s.raw:s.parsed},this.getMetadataFormat=function(){return s.format},this._setMetadataPair=function(l,k){s.parsed[l]=k},this._setMetadataFormat=function(l){s.format=l},this._setMetadataRaw=function(l){s.raw=l}},n.subParser("anchors",function(e,t,r){e=r.converter._dispatch("anchors.before",e,t,r);var i=function(o,f,s,p,m,y,x){if(n.helper.isUndefined(x)&&(x=""),s=s.toLowerCase(),o.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)p="";else if(!p)if(s||(s=f.toLowerCase().replace(/ ?\n/g," ")),p="#"+s,!n.helper.isUndefined(r.gUrls[s]))p=r.gUrls[s],n.helper.isUndefined(r.gTitles[s])||(x=r.gTitles[s]);else return o;p=p.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback);var E='<a href="'+p+'"';return x!==""&&x!==null&&(x=x.replace(/"/g,"&quot;"),x=x.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback),E+=' title="'+x+'"'),t.openLinksInNewWindow&&!/^#/.test(p)&&(E+=' rel="noopener noreferrer" target="¨E95Eblank"'),E+=">"+f+"</a>",E};return e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,i),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,i),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,i),e=e.replace(/\[([^\[\]]+)]()()()()()/g,i),t.ghMentions&&(e=e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi,function(o,f,s,p,m){if(s==="\\")return f+p;if(!n.helper.isString(t.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");var y=t.ghMentionsLink.replace(/\{u}/g,m),x="";return t.openLinksInNewWindow&&(x=' rel="noopener noreferrer" target="¨E95Eblank"'),f+'<a href="'+y+'"'+x+">"+p+"</a>"})),e=r.converter._dispatch("anchors.after",e,t,r),e});var H=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,C=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,b=/()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,w=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,_=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,S=function(e){return function(t,r,i,o,f,s,p){i=i.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback);var m=i,y="",x="",E=r||"",l=p||"";return/^www\./i.test(i)&&(i=i.replace(/^www\./i,"http://www.")),e.excludeTrailingPunctuationFromURLs&&s&&(y=s),e.openLinksInNewWindow&&(x=' rel="noopener noreferrer" target="¨E95Eblank"'),E+'<a href="'+i+'"'+x+">"+m+"</a>"+y+l}},z=function(e,t){return function(r,i,o){var f="mailto:";return i=i||"",o=n.subParser("unescapeSpecialChars")(o,e,t),e.encodeEmails?(f=n.helper.encodeEmailAddress(f+o),o=n.helper.encodeEmailAddress(o)):f=f+o,i+'<a href="'+f+'">'+o+"</a>"}};n.subParser("autoLinks",function(e,t,r){return e=r.converter._dispatch("autoLinks.before",e,t,r),e=e.replace(b,S(t)),e=e.replace(_,z(t,r)),e=r.converter._dispatch("autoLinks.after",e,t,r),e}),n.subParser("simplifiedAutoLinks",function(e,t,r){return t.simplifiedAutoLink&&(e=r.converter._dispatch("simplifiedAutoLinks.before",e,t,r),t.excludeTrailingPunctuationFromURLs?e=e.replace(C,S(t)):e=e.replace(H,S(t)),e=e.replace(w,z(t,r)),e=r.converter._dispatch("simplifiedAutoLinks.after",e,t,r)),e}),n.subParser("blockGamut",function(e,t,r){return e=r.converter._dispatch("blockGamut.before",e,t,r),e=n.subParser("blockQuotes")(e,t,r),e=n.subParser("headers")(e,t,r),e=n.subParser("horizontalRule")(e,t,r),e=n.subParser("lists")(e,t,r),e=n.subParser("codeBlocks")(e,t,r),e=n.subParser("tables")(e,t,r),e=n.subParser("hashHTMLBlocks")(e,t,r),e=n.subParser("paragraphs")(e,t,r),e=r.converter._dispatch("blockGamut.after",e,t,r),e}),n.subParser("blockQuotes",function(e,t,r){e=r.converter._dispatch("blockQuotes.before",e,t,r),e=e+`

`;var i=/(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;return t.splitAdjacentBlockquotes&&(i=/^ {0,3}>[\s\S]*?(?:\n\n)/gm),e=e.replace(i,function(o){return o=o.replace(/^[ \t]*>[ \t]?/gm,""),o=o.replace(/¨0/g,""),o=o.replace(/^[ \t]+$/gm,""),o=n.subParser("githubCodeBlocks")(o,t,r),o=n.subParser("blockGamut")(o,t,r),o=o.replace(/(^|\n)/g,"$1  "),o=o.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(f,s){var p=s;return p=p.replace(/^  /mg,"¨0"),p=p.replace(/¨0/g,""),p}),n.subParser("hashBlock")(`<blockquote>
`+o+`
</blockquote>`,t,r)}),e=r.converter._dispatch("blockQuotes.after",e,t,r),e}),n.subParser("codeBlocks",function(e,t,r){e=r.converter._dispatch("codeBlocks.before",e,t,r),e+="¨0";var i=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;return e=e.replace(i,function(o,f,s){var p=f,m=s,y=`
`;return p=n.subParser("outdent")(p,t,r),p=n.subParser("encodeCode")(p,t,r),p=n.subParser("detab")(p,t,r),p=p.replace(/^\n+/g,""),p=p.replace(/\n+$/g,""),t.omitExtraWLInCodeBlocks&&(y=""),p="<pre><code>"+p+y+"</code></pre>",n.subParser("hashBlock")(p,t,r)+m}),e=e.replace(/¨0/,""),e=r.converter._dispatch("codeBlocks.after",e,t,r),e}),n.subParser("codeSpans",function(e,t,r){return e=r.converter._dispatch("codeSpans.before",e,t,r),typeof e>"u"&&(e=""),e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(i,o,f,s){var p=s;return p=p.replace(/^([ \t]*)/g,""),p=p.replace(/[ \t]*$/g,""),p=n.subParser("encodeCode")(p,t,r),p=o+"<code>"+p+"</code>",p=n.subParser("hashHTMLSpans")(p,t,r),p}),e=r.converter._dispatch("codeSpans.after",e,t,r),e}),n.subParser("completeHTMLDocument",function(e,t,r){if(!t.completeHTMLDocument)return e;e=r.converter._dispatch("completeHTMLDocument.before",e,t,r);var i="html",o=`<!DOCTYPE HTML>
`,f="",s=`<meta charset="utf-8">
`,p="",m="";typeof r.metadata.parsed.doctype<"u"&&(o="<!DOCTYPE "+r.metadata.parsed.doctype+`>
`,i=r.metadata.parsed.doctype.toString().toLowerCase(),(i==="html"||i==="html5")&&(s='<meta charset="utf-8">'));for(var y in r.metadata.parsed)if(r.metadata.parsed.hasOwnProperty(y))switch(y.toLowerCase()){case"doctype":break;case"title":f="<title>"+r.metadata.parsed.title+`</title>
`;break;case"charset":i==="html"||i==="html5"?s='<meta charset="'+r.metadata.parsed.charset+`">
`:s='<meta name="charset" content="'+r.metadata.parsed.charset+`">
`;break;case"language":case"lang":p=' lang="'+r.metadata.parsed[y]+'"',m+='<meta name="'+y+'" content="'+r.metadata.parsed[y]+`">
`;break;default:m+='<meta name="'+y+'" content="'+r.metadata.parsed[y]+`">
`}return e=o+"<html"+p+`>
<head>
`+f+s+m+`</head>
<body>
`+e.trim()+`
</body>
</html>`,e=r.converter._dispatch("completeHTMLDocument.after",e,t,r),e}),n.subParser("detab",function(e,t,r){return e=r.converter._dispatch("detab.before",e,t,r),e=e.replace(/\t(?=\t)/g,"    "),e=e.replace(/\t/g,"¨A¨B"),e=e.replace(/¨B(.+?)¨A/g,function(i,o){for(var f=o,s=4-f.length%4,p=0;p<s;p++)f+=" ";return f}),e=e.replace(/¨A/g,"    "),e=e.replace(/¨B/g,""),e=r.converter._dispatch("detab.after",e,t,r),e}),n.subParser("ellipsis",function(e,t,r){return t.ellipsis&&(e=r.converter._dispatch("ellipsis.before",e,t,r),e=e.replace(/\.\.\./g,"…"),e=r.converter._dispatch("ellipsis.after",e,t,r)),e}),n.subParser("emoji",function(e,t,r){if(!t.emoji)return e;e=r.converter._dispatch("emoji.before",e,t,r);var i=/:([\S]+?):/g;return e=e.replace(i,function(o,f){return n.helper.emojis.hasOwnProperty(f)?n.helper.emojis[f]:o}),e=r.converter._dispatch("emoji.after",e,t,r),e}),n.subParser("encodeAmpsAndAngles",function(e,t,r){return e=r.converter._dispatch("encodeAmpsAndAngles.before",e,t,r),e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?$!])/gi,"&lt;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=r.converter._dispatch("encodeAmpsAndAngles.after",e,t,r),e}),n.subParser("encodeBackslashEscapes",function(e,t,r){return e=r.converter._dispatch("encodeBackslashEscapes.before",e,t,r),e=e.replace(/\\(\\)/g,n.helper.escapeCharactersCallback),e=e.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g,n.helper.escapeCharactersCallback),e=r.converter._dispatch("encodeBackslashEscapes.after",e,t,r),e}),n.subParser("encodeCode",function(e,t,r){return e=r.converter._dispatch("encodeCode.before",e,t,r),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,n.helper.escapeCharactersCallback),e=r.converter._dispatch("encodeCode.after",e,t,r),e}),n.subParser("escapeSpecialCharsWithinTagAttributes",function(e,t,r){e=r.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",e,t,r);var i=/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,o=/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;return e=e.replace(i,function(f){return f.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,n.helper.escapeCharactersCallback)}),e=e.replace(o,function(f){return f.replace(/([\\`*_~=|])/g,n.helper.escapeCharactersCallback)}),e=r.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",e,t,r),e}),n.subParser("githubCodeBlocks",function(e,t,r){return t.ghCodeBlocks?(e=r.converter._dispatch("githubCodeBlocks.before",e,t,r),e+="¨0",e=e.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,function(i,o,f,s){var p=t.omitExtraWLInCodeBlocks?"":`
`;return s=n.subParser("encodeCode")(s,t,r),s=n.subParser("detab")(s,t,r),s=s.replace(/^\n+/g,""),s=s.replace(/\n+$/g,""),s="<pre><code"+(f?' class="'+f+" language-"+f+'"':"")+">"+s+p+"</code></pre>",s=n.subParser("hashBlock")(s,t,r),`

¨G`+(r.ghCodeBlocks.push({text:i,codeblock:s})-1)+`G

`}),e=e.replace(/¨0/,""),r.converter._dispatch("githubCodeBlocks.after",e,t,r)):e}),n.subParser("hashBlock",function(e,t,r){return e=r.converter._dispatch("hashBlock.before",e,t,r),e=e.replace(/(^\n+|\n+$)/g,""),e=`

¨K`+(r.gHtmlBlocks.push(e)-1)+`K

`,e=r.converter._dispatch("hashBlock.after",e,t,r),e}),n.subParser("hashCodeTags",function(e,t,r){e=r.converter._dispatch("hashCodeTags.before",e,t,r);var i=function(o,f,s,p){var m=s+n.subParser("encodeCode")(f,t,r)+p;return"¨C"+(r.gHtmlSpans.push(m)-1)+"C"};return e=n.helper.replaceRecursiveRegExp(e,i,"<code\\b[^>]*>","</code>","gim"),e=r.converter._dispatch("hashCodeTags.after",e,t,r),e}),n.subParser("hashElement",function(e,t,r){return function(i,o){var f=o;return f=f.replace(/\n\n/g,`
`),f=f.replace(/^\n/,""),f=f.replace(/\n+$/g,""),f=`

¨K`+(r.gHtmlBlocks.push(f)-1)+`K

`,f}}),n.subParser("hashHTMLBlocks",function(e,t,r){e=r.converter._dispatch("hashHTMLBlocks.before",e,t,r);var i=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],o=function(l,k,M,I){var U=l;return M.search(/\bmarkdown\b/)!==-1&&(U=M+r.converter.makeHtml(k)+I),`

¨K`+(r.gHtmlBlocks.push(U)-1)+`K

`};t.backslashEscapesHTMLTags&&(e=e.replace(/\\<(\/?[^>]+?)>/g,function(l,k){return"&lt;"+k+"&gt;"}));for(var f=0;f<i.length;++f)for(var s,p=new RegExp("^ {0,3}(<"+i[f]+"\\b[^>]*>)","im"),m="<"+i[f]+"\\b[^>]*>",y="</"+i[f]+">";(s=n.helper.regexIndexOf(e,p))!==-1;){var x=n.helper.splitAtIndex(e,s),E=n.helper.replaceRecursiveRegExp(x[1],o,m,y,"im");if(E===x[1])break;e=x[0].concat(E)}return e=e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,n.subParser("hashElement")(e,t,r)),e=n.helper.replaceRecursiveRegExp(e,function(l){return`

¨K`+(r.gHtmlBlocks.push(l)-1)+`K

`},"^ {0,3}<!--","-->","gm"),e=e.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,n.subParser("hashElement")(e,t,r)),e=r.converter._dispatch("hashHTMLBlocks.after",e,t,r),e}),n.subParser("hashHTMLSpans",function(e,t,r){e=r.converter._dispatch("hashHTMLSpans.before",e,t,r);function i(o){return"¨C"+(r.gHtmlSpans.push(o)-1)+"C"}return e=e.replace(/<[^>]+?\/>/gi,function(o){return i(o)}),e=e.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,function(o){return i(o)}),e=e.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,function(o){return i(o)}),e=e.replace(/<[^>]+?>/gi,function(o){return i(o)}),e=r.converter._dispatch("hashHTMLSpans.after",e,t,r),e}),n.subParser("unhashHTMLSpans",function(e,t,r){e=r.converter._dispatch("unhashHTMLSpans.before",e,t,r);for(var i=0;i<r.gHtmlSpans.length;++i){for(var o=r.gHtmlSpans[i],f=0;/¨C(\d+)C/.test(o);){var s=RegExp.$1;if(o=o.replace("¨C"+s+"C",r.gHtmlSpans[s]),f===10){console.error("maximum nesting of 10 spans reached!!!");break}++f}e=e.replace("¨C"+i+"C",o)}return e=r.converter._dispatch("unhashHTMLSpans.after",e,t,r),e}),n.subParser("hashPreCodeTags",function(e,t,r){e=r.converter._dispatch("hashPreCodeTags.before",e,t,r);var i=function(o,f,s,p){var m=s+n.subParser("encodeCode")(f,t,r)+p;return`

¨G`+(r.ghCodeBlocks.push({text:o,codeblock:m})-1)+`G

`};return e=n.helper.replaceRecursiveRegExp(e,i,"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),e=r.converter._dispatch("hashPreCodeTags.after",e,t,r),e}),n.subParser("headers",function(e,t,r){e=r.converter._dispatch("headers.before",e,t,r);var i=isNaN(parseInt(t.headerLevelStart))?1:parseInt(t.headerLevelStart),o=t.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,f=t.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;e=e.replace(o,function(m,y){var x=n.subParser("spanGamut")(y,t,r),E=t.noHeaderId?"":' id="'+p(y)+'"',l=i,k="<h"+l+E+">"+x+"</h"+l+">";return n.subParser("hashBlock")(k,t,r)}),e=e.replace(f,function(m,y){var x=n.subParser("spanGamut")(y,t,r),E=t.noHeaderId?"":' id="'+p(y)+'"',l=i+1,k="<h"+l+E+">"+x+"</h"+l+">";return n.subParser("hashBlock")(k,t,r)});var s=t.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;e=e.replace(s,function(m,y,x){var E=x;t.customizedHeaderId&&(E=x.replace(/\s?\{([^{]+?)}\s*$/,""));var l=n.subParser("spanGamut")(E,t,r),k=t.noHeaderId?"":' id="'+p(x)+'"',M=i-1+y.length,I="<h"+M+k+">"+l+"</h"+M+">";return n.subParser("hashBlock")(I,t,r)});function p(m){var y,x;if(t.customizedHeaderId){var E=m.match(/\{([^{]+?)}\s*$/);E&&E[1]&&(m=E[1])}return y=m,n.helper.isString(t.prefixHeaderId)?x=t.prefixHeaderId:t.prefixHeaderId===!0?x="section-":x="",t.rawPrefixHeaderId||(y=x+y),t.ghCompatibleHeaderId?y=y.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():t.rawHeaderId?y=y.replace(/ /g,"-").replace(/&amp;/g,"&").replace(/¨T/g,"¨").replace(/¨D/g,"$").replace(/["']/g,"-").toLowerCase():y=y.replace(/[^\w]/g,"").toLowerCase(),t.rawPrefixHeaderId&&(y=x+y),r.hashLinkCounts[y]?y=y+"-"+r.hashLinkCounts[y]++:r.hashLinkCounts[y]=1,y}return e=r.converter._dispatch("headers.after",e,t,r),e}),n.subParser("horizontalRule",function(e,t,r){e=r.converter._dispatch("horizontalRule.before",e,t,r);var i=n.subParser("hashBlock")("<hr />",t,r);return e=e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,i),e=e.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,i),e=e.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,i),e=r.converter._dispatch("horizontalRule.after",e,t,r),e}),n.subParser("images",function(e,t,r){e=r.converter._dispatch("images.before",e,t,r);var i=/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,o=/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,f=/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,s=/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,p=/!\[([^\[\]]+)]()()()()()/g;function m(x,E,l,k,M,I,U,B){return k=k.replace(/\s/g,""),y(x,E,l,k,M,I,U,B)}function y(x,E,l,k,M,I,U,B){var G=r.gUrls,K=r.gTitles,Z=r.gDimensions;if(l=l.toLowerCase(),B||(B=""),x.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)k="";else if(k===""||k===null)if((l===""||l===null)&&(l=E.toLowerCase().replace(/ ?\n/g," ")),k="#"+l,!n.helper.isUndefined(G[l]))k=G[l],n.helper.isUndefined(K[l])||(B=K[l]),n.helper.isUndefined(Z[l])||(M=Z[l].width,I=Z[l].height);else return x;E=E.replace(/"/g,"&quot;").replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback),k=k.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback);var v='<img src="'+k+'" alt="'+E+'"';return B&&n.helper.isString(B)&&(B=B.replace(/"/g,"&quot;").replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback),v+=' title="'+B+'"'),M&&I&&(M=M==="*"?"auto":M,I=I==="*"?"auto":I,v+=' width="'+M+'"',v+=' height="'+I+'"'),v+=" />",v}return e=e.replace(s,y),e=e.replace(f,m),e=e.replace(o,y),e=e.replace(i,y),e=e.replace(p,y),e=r.converter._dispatch("images.after",e,t,r),e}),n.subParser("italicsAndBold",function(e,t,r){e=r.converter._dispatch("italicsAndBold.before",e,t,r);function i(o,f,s){return f+o+s}return t.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(o,f){return i(f,"<strong><em>","</em></strong>")}),e=e.replace(/\b__(\S[\s\S]*?)__\b/g,function(o,f){return i(f,"<strong>","</strong>")}),e=e.replace(/\b_(\S[\s\S]*?)_\b/g,function(o,f){return i(f,"<em>","</em>")})):(e=e.replace(/___(\S[\s\S]*?)___/g,function(o,f){return/\S$/.test(f)?i(f,"<strong><em>","</em></strong>"):o}),e=e.replace(/__(\S[\s\S]*?)__/g,function(o,f){return/\S$/.test(f)?i(f,"<strong>","</strong>"):o}),e=e.replace(/_([^\s_][\s\S]*?)_/g,function(o,f){return/\S$/.test(f)?i(f,"<em>","</em>"):o})),t.literalMidWordAsterisks?(e=e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,function(o,f,s){return i(s,f+"<strong><em>","</em></strong>")}),e=e.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,function(o,f,s){return i(s,f+"<strong>","</strong>")}),e=e.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,function(o,f,s){return i(s,f+"<em>","</em>")})):(e=e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(o,f){return/\S$/.test(f)?i(f,"<strong><em>","</em></strong>"):o}),e=e.replace(/\*\*(\S[\s\S]*?)\*\*/g,function(o,f){return/\S$/.test(f)?i(f,"<strong>","</strong>"):o}),e=e.replace(/\*([^\s*][\s\S]*?)\*/g,function(o,f){return/\S$/.test(f)?i(f,"<em>","</em>"):o})),e=r.converter._dispatch("italicsAndBold.after",e,t,r),e}),n.subParser("lists",function(e,t,r){function i(s,p){r.gListLevel++,s=s.replace(/\n{2,}$/,`
`),s+="¨0";var m=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,y=/\n[ \t]*\n(?!¨0)/.test(s);return t.disableForced4SpacesIndentedSublists&&(m=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),s=s.replace(m,function(x,E,l,k,M,I,U){U=U&&U.trim()!=="";var B=n.subParser("outdent")(M,t,r),G="";return I&&t.tasklists&&(G=' class="task-list-item" style="list-style-type: none;"',B=B.replace(/^[ \t]*\[(x|X| )?]/m,function(){var K='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return U&&(K+=" checked"),K+=">",K})),B=B.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(K){return"¨A"+K}),E||B.search(/\n{2,}/)>-1?(B=n.subParser("githubCodeBlocks")(B,t,r),B=n.subParser("blockGamut")(B,t,r)):(B=n.subParser("lists")(B,t,r),B=B.replace(/\n$/,""),B=n.subParser("hashHTMLBlocks")(B,t,r),B=B.replace(/\n\n+/g,`

`),y?B=n.subParser("paragraphs")(B,t,r):B=n.subParser("spanGamut")(B,t,r)),B=B.replace("¨A",""),B="<li"+G+">"+B+`</li>
`,B}),s=s.replace(/¨0/g,""),r.gListLevel--,p&&(s=s.replace(/\s+$/,"")),s}function o(s,p){if(p==="ol"){var m=s.match(/^ *(\d+)\./);if(m&&m[1]!=="1")return' start="'+m[1]+'"'}return""}function f(s,p,m){var y=t.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,x=t.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,E=p==="ul"?y:x,l="";if(s.search(E)!==-1)(function M(I){var U=I.search(E),B=o(s,p);U!==-1?(l+=`

<`+p+B+`>
`+i(I.slice(0,U),!!m)+"</"+p+`>
`,p=p==="ul"?"ol":"ul",E=p==="ul"?y:x,M(I.slice(U))):l+=`

<`+p+B+`>
`+i(I,!!m)+"</"+p+`>
`})(s);else{var k=o(s,p);l=`

<`+p+k+`>
`+i(s,!!m)+"</"+p+`>
`}return l}return e=r.converter._dispatch("lists.before",e,t,r),e+="¨0",r.gListLevel?e=e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(s,p,m){var y=m.search(/[*+-]/g)>-1?"ul":"ol";return f(p,y,!0)}):e=e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(s,p,m,y){var x=y.search(/[*+-]/g)>-1?"ul":"ol";return f(m,x,!1)}),e=e.replace(/¨0/,""),e=r.converter._dispatch("lists.after",e,t,r),e}),n.subParser("metadata",function(e,t,r){if(!t.metadata)return e;e=r.converter._dispatch("metadata.before",e,t,r);function i(o){r.metadata.raw=o,o=o.replace(/&/g,"&amp;").replace(/"/g,"&quot;"),o=o.replace(/\n {4}/g," "),o.replace(/^([\S ]+): +([\s\S]+?)$/gm,function(f,s,p){return r.metadata.parsed[s]=p,""})}return e=e.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,function(o,f,s){return i(s),"¨M"}),e=e.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,function(o,f,s){return f&&(r.metadata.format=f),i(s),"¨M"}),e=e.replace(/¨M/g,""),e=r.converter._dispatch("metadata.after",e,t,r),e}),n.subParser("outdent",function(e,t,r){return e=r.converter._dispatch("outdent.before",e,t,r),e=e.replace(/^(\t|[ ]{1,4})/gm,"¨0"),e=e.replace(/¨0/g,""),e=r.converter._dispatch("outdent.after",e,t,r),e}),n.subParser("paragraphs",function(e,t,r){e=r.converter._dispatch("paragraphs.before",e,t,r),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"");for(var i=e.split(/\n{2,}/g),o=[],f=i.length,s=0;s<f;s++){var p=i[s];p.search(/¨(K|G)(\d+)\1/g)>=0?o.push(p):p.search(/\S/)>=0&&(p=n.subParser("spanGamut")(p,t,r),p=p.replace(/^([ \t]*)/g,"<p>"),p+="</p>",o.push(p))}for(f=o.length,s=0;s<f;s++){for(var m="",y=o[s],x=!1;/¨(K|G)(\d+)\1/.test(y);){var E=RegExp.$1,l=RegExp.$2;E==="K"?m=r.gHtmlBlocks[l]:x?m=n.subParser("encodeCode")(r.ghCodeBlocks[l].text,t,r):m=r.ghCodeBlocks[l].codeblock,m=m.replace(/\$/g,"$$$$"),y=y.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,m),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(y)&&(x=!0)}o[s]=y}return e=o.join(`
`),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,""),r.converter._dispatch("paragraphs.after",e,t,r)}),n.subParser("runExtension",function(e,t,r,i){if(e.filter)t=e.filter(t,i.converter,r);else if(e.regex){var o=e.regex;o instanceof RegExp||(o=new RegExp(o,"g")),t=t.replace(o,e.replace)}return t}),n.subParser("spanGamut",function(e,t,r){return e=r.converter._dispatch("spanGamut.before",e,t,r),e=n.subParser("codeSpans")(e,t,r),e=n.subParser("escapeSpecialCharsWithinTagAttributes")(e,t,r),e=n.subParser("encodeBackslashEscapes")(e,t,r),e=n.subParser("images")(e,t,r),e=n.subParser("anchors")(e,t,r),e=n.subParser("autoLinks")(e,t,r),e=n.subParser("simplifiedAutoLinks")(e,t,r),e=n.subParser("emoji")(e,t,r),e=n.subParser("underline")(e,t,r),e=n.subParser("italicsAndBold")(e,t,r),e=n.subParser("strikethrough")(e,t,r),e=n.subParser("ellipsis")(e,t,r),e=n.subParser("hashHTMLSpans")(e,t,r),e=n.subParser("encodeAmpsAndAngles")(e,t,r),t.simpleLineBreaks?/\n\n¨K/.test(e)||(e=e.replace(/\n+/g,`<br />
`)):e=e.replace(/  +\n/g,`<br />
`),e=r.converter._dispatch("spanGamut.after",e,t,r),e}),n.subParser("strikethrough",function(e,t,r){function i(o){return t.simplifiedAutoLink&&(o=n.subParser("simplifiedAutoLinks")(o,t,r)),"<del>"+o+"</del>"}return t.strikethrough&&(e=r.converter._dispatch("strikethrough.before",e,t,r),e=e.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(o,f){return i(f)}),e=r.converter._dispatch("strikethrough.after",e,t,r)),e}),n.subParser("stripLinkDefinitions",function(e,t,r){var i=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,o=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;e+="¨0";var f=function(s,p,m,y,x,E,l){return p=p.toLowerCase(),e.toLowerCase().split(p).length-1<2?s:(m.match(/^data:.+?\/.+?;base64,/)?r.gUrls[p]=m.replace(/\s/g,""):r.gUrls[p]=n.subParser("encodeAmpsAndAngles")(m,t,r),E?E+l:(l&&(r.gTitles[p]=l.replace(/"|'/g,"&quot;")),t.parseImgDimensions&&y&&x&&(r.gDimensions[p]={width:y,height:x}),""))};return e=e.replace(o,f),e=e.replace(i,f),e=e.replace(/¨0/,""),e}),n.subParser("tables",function(e,t,r){if(!t.tables)return e;var i=/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,o=/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;function f(x){return/^:[ \t]*--*$/.test(x)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(x)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(x)?' style="text-align:center;"':""}function s(x,E){var l="";return x=x.trim(),(t.tablesHeaderId||t.tableHeaderId)&&(l=' id="'+x.replace(/ /g,"_").toLowerCase()+'"'),x=n.subParser("spanGamut")(x,t,r),"<th"+l+E+">"+x+`</th>
`}function p(x,E){var l=n.subParser("spanGamut")(x,t,r);return"<td"+E+">"+l+`</td>
`}function m(x,E){for(var l=`<table>
<thead>
<tr>
`,k=x.length,M=0;M<k;++M)l+=x[M];for(l+=`</tr>
</thead>
<tbody>
`,M=0;M<E.length;++M){l+=`<tr>
`;for(var I=0;I<k;++I)l+=E[M][I];l+=`</tr>
`}return l+=`</tbody>
</table>
`,l}function y(x){var E,l=x.split(`
`);for(E=0;E<l.length;++E)/^ {0,3}\|/.test(l[E])&&(l[E]=l[E].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(l[E])&&(l[E]=l[E].replace(/\|[ \t]*$/,"")),l[E]=n.subParser("codeSpans")(l[E],t,r);var k=l[0].split("|").map(function(v){return v.trim()}),M=l[1].split("|").map(function(v){return v.trim()}),I=[],U=[],B=[],G=[];for(l.shift(),l.shift(),E=0;E<l.length;++E)l[E].trim()!==""&&I.push(l[E].split("|").map(function(v){return v.trim()}));if(k.length<M.length)return x;for(E=0;E<M.length;++E)B.push(f(M[E]));for(E=0;E<k.length;++E)n.helper.isUndefined(B[E])&&(B[E]=""),U.push(s(k[E],B[E]));for(E=0;E<I.length;++E){for(var K=[],Z=0;Z<U.length;++Z)n.helper.isUndefined(I[E][Z]),K.push(p(I[E][Z],B[Z]));G.push(K)}return m(U,G)}return e=r.converter._dispatch("tables.before",e,t,r),e=e.replace(/\\(\|)/g,n.helper.escapeCharactersCallback),e=e.replace(i,y),e=e.replace(o,y),e=r.converter._dispatch("tables.after",e,t,r),e}),n.subParser("underline",function(e,t,r){return t.underline&&(e=r.converter._dispatch("underline.before",e,t,r),t.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(i,o){return"<u>"+o+"</u>"}),e=e.replace(/\b__(\S[\s\S]*?)__\b/g,function(i,o){return"<u>"+o+"</u>"})):(e=e.replace(/___(\S[\s\S]*?)___/g,function(i,o){return/\S$/.test(o)?"<u>"+o+"</u>":i}),e=e.replace(/__(\S[\s\S]*?)__/g,function(i,o){return/\S$/.test(o)?"<u>"+o+"</u>":i})),e=e.replace(/(_)/g,n.helper.escapeCharactersCallback),e=r.converter._dispatch("underline.after",e,t,r)),e}),n.subParser("unescapeSpecialChars",function(e,t,r){return e=r.converter._dispatch("unescapeSpecialChars.before",e,t,r),e=e.replace(/¨E(\d+)E/g,function(i,o){var f=parseInt(o);return String.fromCharCode(f)}),e=r.converter._dispatch("unescapeSpecialChars.after",e,t,r),e}),n.subParser("makeMarkdown.blockquote",function(e,t){var r="";if(e.hasChildNodes())for(var i=e.childNodes,o=i.length,f=0;f<o;++f){var s=n.subParser("makeMarkdown.node")(i[f],t);s!==""&&(r+=s)}return r=r.trim(),r="> "+r.split(`
`).join(`
> `),r}),n.subParser("makeMarkdown.codeBlock",function(e,t){var r=e.getAttribute("language"),i=e.getAttribute("precodenum");return"```"+r+`
`+t.preList[i]+"\n```"}),n.subParser("makeMarkdown.codeSpan",function(e){return"`"+e.innerHTML+"`"}),n.subParser("makeMarkdown.emphasis",function(e,t){var r="";if(e.hasChildNodes()){r+="*";for(var i=e.childNodes,o=i.length,f=0;f<o;++f)r+=n.subParser("makeMarkdown.node")(i[f],t);r+="*"}return r}),n.subParser("makeMarkdown.header",function(e,t,r){var i=new Array(r+1).join("#"),o="";if(e.hasChildNodes()){o=i+" ";for(var f=e.childNodes,s=f.length,p=0;p<s;++p)o+=n.subParser("makeMarkdown.node")(f[p],t)}return o}),n.subParser("makeMarkdown.hr",function(){return"---"}),n.subParser("makeMarkdown.image",function(e){var t="";return e.hasAttribute("src")&&(t+="!["+e.getAttribute("alt")+"](",t+="<"+e.getAttribute("src")+">",e.hasAttribute("width")&&e.hasAttribute("height")&&(t+=" ="+e.getAttribute("width")+"x"+e.getAttribute("height")),e.hasAttribute("title")&&(t+=' "'+e.getAttribute("title")+'"'),t+=")"),t}),n.subParser("makeMarkdown.links",function(e,t){var r="";if(e.hasChildNodes()&&e.hasAttribute("href")){var i=e.childNodes,o=i.length;r="[";for(var f=0;f<o;++f)r+=n.subParser("makeMarkdown.node")(i[f],t);r+="](",r+="<"+e.getAttribute("href")+">",e.hasAttribute("title")&&(r+=' "'+e.getAttribute("title")+'"'),r+=")"}return r}),n.subParser("makeMarkdown.list",function(e,t,r){var i="";if(!e.hasChildNodes())return"";for(var o=e.childNodes,f=o.length,s=e.getAttribute("start")||1,p=0;p<f;++p)if(!(typeof o[p].tagName>"u"||o[p].tagName.toLowerCase()!=="li")){var m="";r==="ol"?m=s.toString()+". ":m="- ",i+=m+n.subParser("makeMarkdown.listItem")(o[p],t),++s}return i+=`
<!-- -->
`,i.trim()}),n.subParser("makeMarkdown.listItem",function(e,t){for(var r="",i=e.childNodes,o=i.length,f=0;f<o;++f)r+=n.subParser("makeMarkdown.node")(i[f],t);return/\n$/.test(r)?r=r.split(`
`).join(`
    `).replace(/^ {4}$/gm,"").replace(/\n\n+/g,`

`):r+=`
`,r}),n.subParser("makeMarkdown.node",function(e,t,r){r=r||!1;var i="";if(e.nodeType===3)return n.subParser("makeMarkdown.txt")(e,t);if(e.nodeType===8)return"<!--"+e.data+`-->

`;if(e.nodeType!==1)return"";var o=e.tagName.toLowerCase();switch(o){case"h1":r||(i=n.subParser("makeMarkdown.header")(e,t,1)+`

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

`}return i}),n.subParser("makeMarkdown.paragraph",function(e,t){var r="";if(e.hasChildNodes())for(var i=e.childNodes,o=i.length,f=0;f<o;++f)r+=n.subParser("makeMarkdown.node")(i[f],t);return r=r.trim(),r}),n.subParser("makeMarkdown.pre",function(e,t){var r=e.getAttribute("prenum");return"<pre>"+t.preList[r]+"</pre>"}),n.subParser("makeMarkdown.strikethrough",function(e,t){var r="";if(e.hasChildNodes()){r+="~~";for(var i=e.childNodes,o=i.length,f=0;f<o;++f)r+=n.subParser("makeMarkdown.node")(i[f],t);r+="~~"}return r}),n.subParser("makeMarkdown.strong",function(e,t){var r="";if(e.hasChildNodes()){r+="**";for(var i=e.childNodes,o=i.length,f=0;f<o;++f)r+=n.subParser("makeMarkdown.node")(i[f],t);r+="**"}return r}),n.subParser("makeMarkdown.table",function(e,t){var r="",i=[[],[]],o=e.querySelectorAll("thead>tr>th"),f=e.querySelectorAll("tbody>tr"),s,p;for(s=0;s<o.length;++s){var m=n.subParser("makeMarkdown.tableCell")(o[s],t),y="---";if(o[s].hasAttribute("style")){var x=o[s].getAttribute("style").toLowerCase().replace(/\s/g,"");switch(x){case"text-align:left;":y=":---";break;case"text-align:right;":y="---:";break;case"text-align:center;":y=":---:";break}}i[0][s]=m.trim(),i[1][s]=y}for(s=0;s<f.length;++s){var E=i.push([])-1,l=f[s].getElementsByTagName("td");for(p=0;p<o.length;++p){var k=" ";typeof l[p]<"u"&&(k=n.subParser("makeMarkdown.tableCell")(l[p],t)),i[E].push(k)}}var M=3;for(s=0;s<i.length;++s)for(p=0;p<i[s].length;++p){var I=i[s][p].length;I>M&&(M=I)}for(s=0;s<i.length;++s){for(p=0;p<i[s].length;++p)s===1?i[s][p].slice(-1)===":"?i[s][p]=n.helper.padEnd(i[s][p].slice(-1),M-1,"-")+":":i[s][p]=n.helper.padEnd(i[s][p],M,"-"):i[s][p]=n.helper.padEnd(i[s][p],M);r+="| "+i[s].join(" | ")+` |
`}return r.trim()}),n.subParser("makeMarkdown.tableCell",function(e,t){var r="";if(!e.hasChildNodes())return"";for(var i=e.childNodes,o=i.length,f=0;f<o;++f)r+=n.subParser("makeMarkdown.node")(i[f],t,!0);return r.trim()}),n.subParser("makeMarkdown.txt",function(e){var t=e.nodeValue;return t=t.replace(/ +/g," "),t=t.replace(/¨NBSP;/g," "),t=n.helper.unescapeHTMLEntities(t),t=t.replace(/([*_~|`])/g,"\\$1"),t=t.replace(/^(\s*)>/g,"\\$1>"),t=t.replace(/^#/gm,"\\#"),t=t.replace(/^(\s*)([-=]{3,})(\s*)$/,"$1\\$2$3"),t=t.replace(/^( {0,3}\d+)\./gm,"$1\\."),t=t.replace(/^( {0,3})([+-])/gm,"$1\\$2"),t=t.replace(/]([\s]*)\(/g,"\\]$1\\("),t=t.replace(/^ {0,3}\[([\S \t]*?)]:/gm,"\\[$1]:"),t});var O=this;a.exports?a.exports=n:O.showdown=n}).call(tt)}(we)),we.exports}var at=rt();const ut=yn(at);function de({class:a,...u},d){const n=Y(a),g=new ut.Converter().makeHtml(d),A=h.div({class:`style-markup ${n.val}`,innerHTML:g,...u});return Prism.highlightAllUnder(A),A}function xe(a=0){return new Promise(u=>setTimeout(u,a))}function dt(a,u){const d=a.indexOf(u);return d===-1?a:[...a.slice(0,d),...a.slice(d+1)]}function st(a,u){return a.indexOf(u)===-1?a.concat(u):dt(a,u)}function ot(a,u,d=[]){const n=new AbortController;return document.addEventListener("click",c=>{if(!(c.target instanceof Node))return;const g=c.target;a.contains(g)||d.some(A=>A.contains(g))||document.contains(g)&&u(c)},{signal:n.signal}),n}function it(a,u){for(const d of u)if(d[0]===a)return d[1];throw`error: non-exhaustive patterns: ${a} not covered`}function pe(a,u){const d=Array.isArray(a)?a:[a],n=Array.isArray(u)?u:[u];for(const c of n)if(d.includes(c))return!0;return!1}const ie={NONE:"none",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},J={HOVER_IN:"hover-in",HOVER_OUT:"hover-out",HOVER:"hover",CLICK:"click",FOCUS:"focus",FOCUS_IN:"focus-in",FOCUS_OUT:"focus-out"},De=h.div({name:"Popups",class:"fixed inset-0 z-[100] pointer-events-none"});ge(document.documentElement,De);function Ce({visible:a=D(!1),direction:u=ie.BOTTOM,trigger:d=J.CLICK,onHide:n,name:c,class:g,...A},...T){const j=Y(g);let P;const R=D({height:0,width:0,left:0,top:0,yOffset:0,xOffset:0}),L=async()=>{if(!P)return;if(!w.isConnected)return C();if(!w.parentElement)throw new Error("Popup target has been removed from DOM");const S=w.parentElement.getBoundingClientRect();R.val={top:S.top,left:S.left,width:S.width,height:S.height,xOffset:0,yOffset:0},await xe();const z=De.getBoundingClientRect(),O=P.popup.getBoundingClientRect(),e={x:Math.max(-O.left,0),y:Math.max(-O.top,0)},t={x:Math.min(z.width-O.left-O.width,0),y:Math.min(z.height-O.top-O.height,0)};R.val={...R.val,xOffset:e.x+t.x,yOffset:e.y+t.y}},H=()=>{const S=it(u,[[ie.NONE,""],[ie.TOP,"bottom-full mb-1"],[ie.RIGHT,"left-full ml-1"],[ie.BOTTOM,"top-full mt-1"],[ie.LEFT,"right-full mr-1"]]),z=h.div({name:`${c} Popup`,class:()=>`absolute pointer-events-auto ${S} ${j.val}`,...A},T),O=h.div({name:`${c} Popup Anchor`,class:()=>"absolute transition pointer-events-none",style:()=>`left: ${R.val.left+R.val.xOffset}px; top: ${R.val.top+R.val.yOffset}px; height: ${R.val.height}px; width: ${R.val.width}px;`},z),e=ot(z,()=>xe().then(()=>a.val=!1),w.parentElement?[w.parentElement]:[]);ge(De,O),P={anchor:O,popup:z,abortController:e}},C=()=>{P==null||P.anchor.remove(),P==null||P.popup.remove(),P==null||P.abortController.abort(),P=void 0,n==null||n()},b=()=>{if(!w.parentElement)throw new Error("Popup target has been removed from DOM");pe(d,[J.HOVER,J.HOVER_IN])&&w.parentElement.addEventListener("mouseenter",()=>a.val=!0),pe(d,[J.HOVER,J.HOVER_OUT])&&w.parentElement.addEventListener("mouseleave",()=>a.val=!1),pe(d,J.CLICK)&&w.parentElement.addEventListener("click",()=>a.val=!0),pe(d,[J.FOCUS,J.FOCUS_IN])&&w.parentElement.addEventListener("focusin",()=>a.val=!0),pe(d,[J.FOCUS,J.FOCUS_OUT])&&w.parentElement.addEventListener("focusout",()=>a.val=!1)};ee(async()=>{if(!a.val)return C();P||H(),L()});const w=h.div({name:`${c} Popup Target`,hidden:!0});window.addEventListener("resize",L);const _=new ResizeObserver(L);return xe().then(()=>_.observe(w.parentElement)).then(()=>b()),w}function ct({options:a,value:u=D(void 0),required:d,class:n,...c}){const g=Y(n);return h.div({class:"flex flex-col gap-1 group"},a.map(A=>{const T=ee(()=>u.val===A.value);return h.div({name:"Radio",onclick:()=>u.val=T.val?void 0:A.value,"$data-selected":T,class:()=>{var j;return`group flex cursor-pointer justify-between items-center gap-2 select-none group-has-invalid:mood-critical ${(j=g.val)==null?void 0:j.split(" ").filter(P=>!P.includes("variant")).join(" ")}`},...c},A.name??String(A.value),ue({disabled:A.disabled,tabIndex:0,class:()=>{var j;return`button size-5 rounded-full focus-visible:mood-accent ${(j=g.val)==null?void 0:j.split(" ").filter(P=>P.includes("variant")).join(" ")}`}},h.div({class:"bg-current rounded-full size-2.5 aspect-square not-group-data-selected:hidden"})))}),h.input({type:"checkbox",checked:()=>u.val!==void 0,required:d,hidden:!0}))}function Q({options:a,value:u=D(a[0].value),useChips:d=!1,lead:n,trail:c,class:g,...A}){const T=Y(g),j=ee(()=>{var b;return(b=T.val)==null?void 0:b.split(" ").find(w=>w.includes("mood-"))}),P=ee(()=>Array.isArray(u.val)),R=ee(()=>u.val===void 0||Array.isArray(u.val)&&u.val.length===0),L=D(!1),H=b=>{if(Array.isArray(u.val))return u.val=st(u.val,b);u.val=b};return ue({name:"Select",class:()=>`flex rounded-lg button gap-2 justify-between focus-visible:mood-accent ${T.val}`,tabIndex:0,onclick:()=>L.val=!L.val,...A},n,()=>h.div({name:"Value Display",class:()=>`text-nowrap text-ellipsis overflow-hidden ${R.val?"text-swatch-700-foreground":""} ${d?"flex flex-wrap gap-1":""} ${L.val?"invisible":""}`},R.val?"None":Array.isArray(u.val)?d?u.val.map(b=>ue({class:"group mood-accent text-xs variant-soft rounded relative",onclick:w=>{w.stopPropagation(),H(b)}},h.span({class:"group-hover:opacity-25"},String(b)),h.i({class:"not-group-hover:hidden absolute right-1"},"close"))):u.val.map(b=>String(b)).join(", "):String(u.val)),c,re.svg({viewBox:"0 0 100 100",class:"size-4 flex-none",style:"stroke-linecap:round; stroke-linejoin:round;"},re.path({d:"M25,35L50,15L75,35",class:"stroke-current stroke-[10] fill-none",$hidden:()=>!P.val}),re.path({d:"M25,65L50,85L75,65",class:"stroke-current stroke-[10] fill-none",$hidden:()=>!P.val}),re.path({d:"M25,40L50,60L75,40",class:"stroke-current stroke-[10] fill-none",$hidden:P})),Ce({name:"Select Content",visible:L,direction:"none",class:()=>`left-1/2 -translate-x-1/2 min-w-full max-h-40 overflow-y-auto card vessel shadow-lg p-1 rounded-lg card glass select-none ${j.val}`},()=>h.ul({name:"Select Options",class:"flex flex-col"},a.map(b=>{const w=ee(()=>pe(u.val,b.value));return lt(b,P,w,H)}))))}function lt(a,u,d,n){return h.div({"$data-selected":d,class:"contents group"},h.span({name:"Magic divider",class:"h-[1px] mx-1 pointer-events-none bg-surface-500/15 group-first:hidden group-hover:invisible group-data-selected:invisible [*:hover_+_*_>_&]:invisible [*[data-selected]_+_*_>_&]:invisible "}),h.button({class:"flex gap-2 not-disabled:hover:bg-surface-500/20 not-disabled:focus-visible:bg-surface-500/20 not-disabled:focus-visible:focus-ring disabled:bg-transparent px-1 rounded cursor-pointer justify-between disabled:opacity-50 disabled:cursor-not-allowed items-center group-data-selected:mood-accent group-data-selected:!bg-mood-500/25",$disabled:()=>a.disabled,tabIndex:0,onclick:()=>n==null?void 0:n(a.value)},h.span({class:"text-nowrap"},a.name??String(a.value)),re.svg({viewBox:"0 0 100 100",class:"size-4 not-group-data-selected:invisible",style:"stroke-linecap:round; stroke-linejoin:round;",$hidden:()=>!u.val},re.path({d:"M20,60L40,80L80,20",class:"stroke-current stroke-[10] fill-none"})),h.div({class:"bg-current rounded-full size-2 m-0.75 aspect-square not-group-data-selected:invisible",$hidden:u})))}function ft({class:a},u){const d=Y(a),n=[...u.querySelectorAll("h1, h2, h3, h4, h5")],c=D(n[0]);return document.addEventListener("scroll",()=>{n.some((g,A)=>{if(g.getBoundingClientRect().bottom>u.scrollTop+112)return c.val=n[Math.max(A-1,0)],!0})}),h.ul({class:()=>`flex flex-col ${d.val}`},[...n].map(g=>{const A=parseInt(g.tagName.slice(1))-1;return h.li({onclick:()=>g.scrollIntoView({behavior:"smooth"}),"$data-indented":()=>A>0,"$data-selected":()=>c.val===g,style:`--indent: ${1+(A-1)*.5}rem;`,class:"group relative flex gap-4 cursor-pointer text-swatch-700-mood not-data-selected:hover:text-swatch-900-foreground data-selected:mood-accent data-selected:text-mood-500"},h.span({name:"Divider",class:"absolute h-full w-px left-0 bg-current/50 group-data-selected:bg-current not-group-data-indented:hidden group-hover:w-[4px] group-data-selected:w-[4px] transition-all"}),h.span({name:"Title",class:"group-data-indented:ml-(--indent) justify-start group-data-selected:font-semibold flex-1 py-0.5 z-1 transition-all"},g.textContent))}))}function $e({trigger:a=[J.HOVER,J.FOCUS],direction:u=ie.BOTTOM,class:d,...n},...c){const g=Y(d);return Ce({trigger:a,direction:u,class:()=>`!control variant-soft-outline badge glass px-2 py-1 max-w-xs text-xs flex ${g.val}`,...n},c)}function X(...a){const u=h.div({class:"language-typescript w-2xl *:scroll-m-21"},...a),d=ft({class:"sticky top-24 w-xs not-xl:hidden"},u);return h.div({class:"flex gap-8 items-start"},u,d)}const pt=`# State

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
`;function ht(){return X(de({class:"language-typescript w-2xl *:scroll-m-21"},pt))}const gt=Object.freeze(Object.defineProperty({__proto__:null,default:ht},Symbol.toStringTag,{value:"Module"})),mt=`# Derive

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
`;function vt(){return X(de({class:"language-typescript w-2xl *:scroll-m-21"},mt))}const bt=Object.freeze(Object.defineProperty({__proto__:null,default:vt},Symbol.toStringTag,{value:"Module"})),_t=`# Elements

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
`;function wt(){return X(de({class:"language-typescript w-2xl *:scroll-m-21"},_t))}const yt=Object.freeze(Object.defineProperty({__proto__:null,default:wt},Symbol.toStringTag,{value:"Module"})),kt=`# Components

> Create your own composable pieces.
`;function Pt(){return X(de({class:"language-typescript w-2xl *:scroll-m-21"},kt))}const Ct=Object.freeze(Object.defineProperty({__proto__:null,default:Pt},Symbol.toStringTag,{value:"Module"})),St=`# Context

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
`;function At(){return X(de({class:"language-typescript w-2xl *:scroll-m-21"},St))}const xt=Object.freeze(Object.defineProperty({__proto__:null,default:At},Symbol.toStringTag,{value:"Module"}));function Et(){const a=D(`<div>
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
</div>`),u=h.textarea({value:a,oninput:d=>a.val=d.target.value,class:"control variant-soft-outline w-full h-64"});return X(h.h1("Converter"),h.blockquote(h.p("Create Savant code from HTML.")),h.h2("Overview"),u,q({content:"Tags"},()=>W({language:"typescript"})),q({content:"Components"},()=>"None"),q({content:"Code"},()=>W({language:"typescript"})))}const Tt=Object.freeze(Object.defineProperty({__proto__:null,default:Et},Symbol.toStringTag,{value:"Module"})),zt=`# Router

> Manage site navigation.
`;function Mt(){return X(de({class:"language-typescript"},zt))}const jt=Object.freeze(Object.defineProperty({__proto__:null,default:Mt},Symbol.toStringTag,{value:"Module"}));function Lt(){const a=D("variant-filled"),u=D("mood-accent");return X(h.h1("Badge"),h.blockquote("Delivers small but important pieces of information."),h.h2("Design"),h.p("Badges are designed to be a small, unobtrusive elements that convey important information concisely. It is typically used to highlight new or unread items, notifications, or status updates."),h.p("Badges use a smaller font size and padding to make them the same height as standard text, ensuring it fits seamlessly into layouts."),h.p("Badges color the text slightly based on mood to indicate they are not interactive, differentiating them from small buttons which instead use the standard foreground text color."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},wn({class:()=>`${a.val} ${u.val}`},"Demo Badge")),h.div({class:"flex flex-wrap gap-4 justify-center"},q({content:"Variant",class:"items-center"},Q({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:a,class:"variant-outline w-48"})),q({content:"Mood",class:"items-center"},Q({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:u,class:"variant-outline w-48"})))),()=>W({language:"ts"},`import { Badge } from "savant/ui"

Badge(
    { class: "${a.val} ${u.val}" },
    "Demo Badge",
)`),h.h2("Signature"),W({language:"ts"},`function Badge(
    props: HTMLElementProps,
    ...children: ChildDom[]
): HTMLElement`))}const Ot=Object.freeze(Object.defineProperty({__proto__:null,default:Lt},Symbol.toStringTag,{value:"Module"}));function Ft(){const a=D("variant-filled"),u=D("mood-accent"),d=D([]);return X(h.h1("Button"),h.blockquote("Performs some action on user click."),h.h2("Design"),h.p("Button components are used when a specific, clear and manual action needs to be performed by the user.."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},ue({class:()=>`${[a.val,u.val,...d.val].join(" ")}`},"Demo Button")),h.div({class:"flex flex-wrap gap-4 justify-center"},q({content:"Variant",class:"items-center"},Q({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:a,class:"variant-outline w-48"})),q({content:"Mood",class:"items-center"},Q({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:u,class:"variant-outline w-48"})),q({content:"Extras",class:"items-center"},Q({options:[{value:"transition"},{value:"hover:raised"},{value:"active:lowered"}],value:d,class:"variant-outline w-48"})))),()=>W({language:"ts"},`import { Button } from "savant/ui"

Button(
    { class: "${[a.val,u.val,...d.val].join(" ")}" },
    "Demo Button",
)`),h.h2("Signature"),W({language:"ts"},`function Button(
    props: HTMLButtonProps,
    ...children: ChildDom[]
): HTMLButtonElement`))}const It=Object.freeze(Object.defineProperty({__proto__:null,default:Ft},Symbol.toStringTag,{value:"Module"}));function Rt(){const a=D("variant-soft-outline"),u=D("mood-none");return X(h.h1("Checkbox"),h.blockquote("Offers clear binary choices."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},Ke({class:()=>`w-48 ${a.val} ${u.val}`},"Demo Checkbox")),h.div({class:"flex flex-wrap gap-4 justify-center"},q({content:"Variant",class:"items-center"},Q({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:a,class:"variant-outline w-48"})),q({content:"Mood",class:"items-center"},Q({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:u,class:"variant-outline w-48"})))),()=>W({language:"ts"},`import { Checkbox } from "savant/ui"

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
): HTMLElement`))}const Bt=Object.freeze(Object.defineProperty({__proto__:null,default:Rt},Symbol.toStringTag,{value:"Module"}));function Dt(){const a=D("variant-outline"),u=D("mood-accent"),d=D(!0),n=D(50);return X(h.h1("Circular Progress Bar"),h.blockquote("Displays the progress state of a lengthy process."),h.h2("Design"),h.p("Circular Progress Bars are used to compactly provide feedback to the user on the current progress state of a lengthy process."),h.p("Circular Progress Bars default to matching the size of enclosing text flows, ensuring they fit seamlessly into layouts."),h.p("Circular Progress Bars can be given children which will be displayed within the circle. Such children should be short, typically a percentage or number. Anything longer should be placed beneath the progress bar."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},et({progress:n,indefinite:d,class:()=>`${a.val} ${u.val}`},"Loading...")),h.div({class:"flex flex-wrap gap-4 justify-center"},q({content:"Variant",class:"items-center"},Q({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:a,class:"variant-outline w-48"})),q({content:"Mood",class:"items-center"},Q({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:u,class:"variant-outline w-48"})),q({content:"Progress",class:"items-center"},ve({value:n,min:0,max:100,class:"variant-outline w-48"})),q({content:"Indefinite",class:"items-center"},Ke({value:d,class:"variant-outline w-48"},"Enabled")))),()=>W({language:"ts"},`import { CircularProgressBar } from "savant/ui"

CircularProgressBar(
    {
        progress: ${n.val},
        indefinite: ${d.val},
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
): HTMLElement`))}const $t=Object.freeze(Object.defineProperty({__proto__:null,default:Dt},Symbol.toStringTag,{value:"Module"}));function Ht(){return X(h.h1("Code"),h.blockquote("Simple code syntax highlighting via ",h.a({href:"https://prismjs.com",class:"anchor"},"PrismJS"),"."),Yn({class:"mood-info p",icon:"info"},de({class:"language-typescript"},"Every code snippet in these docs uses the `Code` component.")),h.h2("Demo"),()=>W({language:"ts"},`import { Code } from "savant/ui"

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
): HTMLElement`))}const Ut=Object.freeze(Object.defineProperty({__proto__:null,default:Ht},Symbol.toStringTag,{value:"Module"}));function Nt(){const a=D("text"),u=D("variant-soft-outline"),d=D("mood-none");return X(h.h1("Input"),h.blockquote("Direct entry of text or numbers."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex flex-col justify-center gap-8"},()=>ve({value:D(a.val==="text"?"Example text":42),class:()=>`${u.val} ${d.val}`})),h.div({class:"flex flex-wrap gap-4 justify-center"},q({content:"Type",class:"items-center"},Q({options:[{value:"text"},{value:"number"}],value:a,class:"variant-outline w-48"})),q({content:"Variant",class:"items-center"},Q({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:u,class:"variant-outline w-48"})),q({content:"Mood",class:"items-center"},Q({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:d,class:"variant-outline w-48"})))),()=>W({language:"ts"},`import { Input } from "savant/ui"

Input({
    value: state(${a.val==="text"?'"Example text"':42}),
    class: "${u.val} ${d.val}"
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
): HTMLElement`))}const Vt=Object.freeze(Object.defineProperty({__proto__:null,default:Nt},Symbol.toStringTag,{value:"Module"}));function qt(){const a=D([J.CLICK]);return X(h.h1("Popup"),h.blockquote("Versatile dynamic content floating near its parent."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex justify-center flex-col gap-8 w-3xs"},ue({class:"variant-filled"},"Popup Trigger",()=>Ce({trigger:a.val,class:"card glass vessel flex flex-col shadow"},"Hello! Click outside me to close."))),h.div({class:"flex flex-wrap gap-4 justify-center"},q({content:"Trigger",class:"items-center"},Q({options:[{value:J.CLICK},{value:J.HOVER},{value:J.HOVER_IN},{value:J.HOVER_OUT},{value:J.FOCUS},{value:J.FOCUS_IN},{value:J.FOCUS_OUT}],value:a,class:"variant-outline w-48"})))),()=>W({language:"ts"},`import { Button, Popup } from "savant/ui"

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
): HTMLElement`))}const Wt=Object.freeze(Object.defineProperty({__proto__:null,default:qt},Symbol.toStringTag,{value:"Module"}));function Gt(){const a=D("variant-soft-outline"),u=D("mood-none");return X(h.h1("Radio"),h.blockquote("Offers a clear and direct set of exclusive options."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},ct({value:D("Option 1"),options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"}],class:()=>`w-48 ${a.val} ${u.val}`})),h.div({class:"flex flex-wrap gap-4 justify-center"},q({content:"Variant",class:"items-center"},Q({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:a,class:"variant-outline w-48"})),q({content:"Mood",class:"items-center"},Q({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:u,class:"variant-outline w-48"})))),()=>W({language:"ts"},`import { Radio } from "savant/ui"

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
}`))}const Zt=Object.freeze(Object.defineProperty({__proto__:null,default:Gt},Symbol.toStringTag,{value:"Module"})),me={SINGLE:"single",MULTICHIPS:"multichips"};function Xt(){const a=D(me.SINGLE),u=D("variant-soft-outline"),d=D("mood-none");return X(h.h1("Select"),h.blockquote("Enables compact selection of one or more options."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 flex flex-col justify-center gap-8 w-3xs h-48"},()=>Q({value:a.val===me.SINGLE?D("Option 1"):D(["Option 1","Option 2"]),options:[{value:"Option 1"},{value:"Option 2",disabled:!0},{value:"Option 3"},{value:"Option 4"}],useChips:a.val===me.MULTICHIPS,class:()=>`${u.val} ${d.val}`})),h.div({class:"flex flex-wrap gap-4 justify-center"},q({content:"Type",class:"items-center"},Q({options:[{value:"single"},{value:"multi"},{value:"multichips"}],value:a,class:"variant-outline w-48"})),q({content:"Variant",class:"items-center"},Q({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:u,class:"variant-outline w-48"})),q({content:"Mood",class:"items-center"},Q({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:d,class:"variant-outline w-48"})))),()=>W({language:"ts"},`import { Select } from "savant/ui"

Select({
    value: state(${a.val===me.SINGLE?'"Option 1"':'["Option 1", "Option 2"])'}),
    options: [
        { value: "Option 1" },
        { value: "Option 2", disabled: true },
        { value: "Option 3" },
        { value: "Option 4" },
    ],${a.val===me.MULTICHIPS?`
    useChips: true,`:""}
    class: "${u.val} ${d.val}",
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
}`))}const Kt=Object.freeze(Object.defineProperty({__proto__:null,default:Xt},Symbol.toStringTag,{value:"Module"}));function Jt(){return X(h.h1("Tooltip"),h.blockquote("Provides concise contextual extra information."),h.h2("Demo"),h.div({class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 flex flex-col gap-8 w-3xs h-48 justify-center"},ue({class:"text-accent-500 font-bold"},"Tooltip (Hover Me)",$e({direction:"top",class:"left-1/2 -translate-x-1/2"},"Demo Tooltip")))),()=>W({language:"ts"},`import { Button, Tooltip } from "savant/ui"

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
): HTMLElement`))}const Qt=Object.freeze(Object.defineProperty({__proto__:null,default:Jt},Symbol.toStringTag,{value:"Module"}));function Yt(){const a=D(""),u=D(""),d=D(!1),n=D(!1),c=D(!1);return nt({name:"Sign In",class:"flex flex-col gap-4"},h.span({class:"text-xl font-bold"},"Sign In"),q({content:"Username"},ve({type:"username",value:a,placeholder:"Enter username...",required:!0,lead:Ae("person"),class:"variant-outline"})),q({content:h.span({class:"flex flex-1 justify-between items-center"},"Password",ue({type:"button",class:"mood-accent text-mood-500"},"Forgot?"))},ve({type:()=>n.val?"text":"password",value:u,placeholder:"Enter password...",required:!0,lead:Ae("key"),trail:ue({onclick:()=>n.val=!n.val},Ae({class:()=>`transition ${n.val?"":"text-swatch-700-foreground"}`},()=>n.val?"visibility":"visibility_off")),onValidityChanged:g=>c.val=g,class:"variant-outline"})),Ke({value:d,class:"variant-outline"},h.span({class:"text-mini text-swatch-700-mood"},"Remember Password")),h.div({class:"flex gap-4 justify-end"},ue({type:"button",class:"hover:variant-soft"},"Cancel"),ue({type:"button",class:"variant-filled mood-accent"},"Sign In")))}function er(){return X(h.h1("Sign In"),h.blockquote("Example Sign In component."),h.h2("Demo"),h.div({class:"card vessel bg-zebra zebra-opacity-20 flex flex-col items-center gap-4"},h.div({class:"p-8 card vessel bg-background flex items-center"},Yt())),h.h2("Code"),W({language:"typescript"},`function SignIn() {
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
}`))}const nr=Object.freeze(Object.defineProperty({__proto__:null,default:er},Symbol.toStringTag,{value:"Module"})),kn=D(""),Je=D(window.location.pathname),Qe=D(window.location.hash),un=D({}),dn=D({}),tr="/",rr=()=>Je.val.slice(tr.length-1)+Qe.val,ar=(a,{replace:u}={replace:!1})=>{const d=`${kn.val}${a}`;u?window.history.replaceState({},"",d):window.history.pushState({},"",d),Je.val=d.split("#")[0],Qe.val=d.split("#").length>1?"#"+d.split("#")[1]:""};function Pn({replace:a=!1,disabled:u=!1,onclick:d,href:n,class:c,...g},...A){const T=Y(c);return h.a({href:n,onclick(j){j.preventDefault();const P=Nn(n);u||P===void 0||(ar(String(P),{replace:a}),typeof d=="function"&&d.call(this,j))},tabIndex:0,class:()=>`not-disabled:focus-visible:focus-ring ${T.val}`,...g},...A)}const ur=/:([^\\d|^/]([^/]+)?)/;let Ee;function dr({routes:a,basename:u}){const d=h.div({name:"Savant Router",style:"display: contents;"}),n=T=>{if(!T)return"";for(T.startsWith("/")||(T="/"+T);T!=="/"&&T.endsWith("/");)T=T.slice(0,T.length-1);return T=decodeURI(T),T},c=(T,j)=>{T=n(T),j=n(j);const P=T.split("/"),R={};let L=null;for(const H of a){const C=n(j+H.path).split("/");if(C.length!==P.length)continue;let b=!0;for(let w=0;w<C.length;w++){const _=C[w],S=P[w];if(ur.test(_))R[decodeURIComponent(_.slice(1))]=decodeURIComponent(S);else if(S!==_){b=!1;break}}if(b){L=H;break}}return L||(L=a.find(H=>H.path==="*")||null),{route:L,params:R}},g=T=>{if(T.startsWith("?")&&(T=T.slice(1).trim()),!T)return{};const j={},P=T.split("&");for(const R of P){const[L,H]=R.split("=");j[decodeURIComponent(L)]=decodeURIComponent(H)}return j},A=()=>{const{route:T,params:j}=c(window.location.pathname+window.location.hash,u||"");if(!T){Ee=void 0,d.replaceChildren(),ge(d,h.div("Could not find route"));return}if(T===Ee){dn.val=g(window.location.search),un.val=j;return}Ee=T,dn.raw=g(window.location.search),un.raw=j,d.replaceChildren(),ge(d,T.dom)};return window.onpopstate=A,ee(()=>{const T=Je.val,j=Qe.val;(T||j)&&setTimeout(()=>{A()})}),ee(()=>{kn.val=n(u||"")}),d}const sr="/Savant/assets/logo-BRWjpkZq.svg";var Te,sn;function or(){return sn||(sn=1,Te={Other:0,CR:1,LF:2,Control:4,Extend:8,ZWJ:16,Regional_Indicator:32,Prepend:64,SpacingMark:128,L:256,V:512,T:1024,LV:2048,LVT:4096,Extended_Pictographic:8192,InCB_Linker:16384,InCB_Consonant:32768,InCB_Extend:65536}),Te}const ir="ABAOAAAAAADQjQAAAd4HIfjtnG2oFUUYxx/1nHu29OolvKRSZIIQghSSEFJwwj4YWdzoFcoQyriBHwz8YHDBiSKDLG9YKSEiUX4IFQ0FCaRLoFmUb9mLBqJ+EDOIsAgpjf7b7nCnOTO7M7szu8frPPBjZufleZ6ZeWZm73pwYALRk2ApGAQMvC6UlU2HwUbwDthk0P5DsC2jfifYC0bAQXAE/AhOgXNCu1/A7+ASoAZRD5gMekE/mAFmge1gN9jbSPrOSdPPkM4DX4AvwVFwApwBZ8EFcBH8Bf4GE5pEUXP0uQ/5ac2k/UyktzWT/ncgPYj0rmZip91M6hc1R/U/hPzj4BnwPBgECwT7cb8VKFsZJflVyK9O9cW8gvwb6fM6pO+l+c1It4Lt4Hah/R7k94H94BuhPGZDNMqWlK1gf4rYNovthu1c8x3G8xOYmhKXnUH6c5pf0/h/+8Uo/1Wagz+bev1X0rpGD9GkniS/FjRTvVNRdiO4BcwGc8H8tN3dabqwp1Pv/Sh7WFHOGU4pOz9vws/1qa+PCuXxGHZmjDtQAdL6n1DEgAs7NwnrvCQj5gKBQCAQCAQCgUAgEOgGnsPfrlOE7zlvG3y/WI4+K4W/eYciotVgCGWv8u85SNeDjVHyPXAj8tORbknrtyLdAT5Jnz9Fehnp5zl/S3+F+kPQeRgcAUfBMfAtOB6FulAX6kJdqHNdtwPsAQei+u+sQCAwdjnk+d9TNk0Y/Xd1mUFFmfh+vKHhxycbRnoTaDLR0t582mg3oGg7LJWN4JmmoD1YNSUp24b0NJjWR3QnGAT3TcT7Pzh7HdGt1xNF4xKeFvIiu9D25ER1nczqVMeMSUS7kX8M6bvgMKBeMx2BQCAQGJv8gXuhEd8nLaJ/cB+2cCdPaiW/E2ojvyi9oyOkN6B8Df5mmZbW34x0QLjDZ7eS707i/Rr/ZmRua/R3ZPORv6eV1C2MU/R/MP1O9gCeH2mN9n0K+Wdb+rt7EHUrhPpVreS7GH9mQt1ryL+VoWt9Rl3MEuhdJr2vvI8+H4CPwQuo25XqeLHAe81ewf4I8gckf77G80up3uM5voqcRNuX0e800vMW/XwyBH7rEl9EZiC2n6jQ3masyxzY/EHxnXjeVfptIP797rAAkxjO4KNGZ/trjTJz/33O33rTpXPpVBf+1u4cfLqg8Wuxo9+Dnk/1XzQc/6W03RWhrD+dSzI4x+K/eS914Xnnisvp2MY7OrP2ldAToe86MFnQ0X+VnqU2xOfnrCh5f3Oha0GUpPciXQQGrqY5hK9LBX+nK/aebaweS8+AZSXnIa9/v4MzTh7b2jH6O/rlJdfiZBeMoUFmjBfy4wz7mBCkPgnz7y6Oq4x/l+sWXeO4lKrsdJvUvYZF111MdfmxLm0NpmI7591853Tj+VJVDGaNoZ3TRtahautDRL/qkm6KlW6Wa2EeXI3N5Ry0SX+e26xJ27K9K5iijNJyjvwsnllZ4mKeZbuy72I5F5VvNr6o+hcVbredoVc3/y7vN/keke0ywS6T6tqOfOE2mQKS8rJ/3A8mpHWfZVl7qq0oV0lbQ9m9bOszt+lb5LWsU8TxN8j9+LnOPnL3Pc73tz4X31fy7mVdDObZcnHfdev3VNV86ebRtF1VUsSui7U0OQ/rEvE8Jsp+j1H5Lbfnecrpa+Nf1XEi2mZUz/qIe4b7oJtDXi8/m85bN69HJOXr2i9Z+0PVVuW36n5x6V8Z/Yw640s+t5nQlpGfOPAdX2XPI5d+iP6wDJ8YFdvfRc/bOkR31jKpXHx2eb7J91kd7yaMOseb9w6Vp7PO9YyFUWeMM6pvfC7mhBXoI78z1SnyfDPLvqoyRp1nmNieZeAqRlUxV+Ssz3vvdSWm/paJ87ruuipsyTGmssfI3X4zWSMVTFNOlD1PNjbK+OeKsmI6b/J4mdTWp+TZ8jkfRXXEwgz0lPXZx9z7PruqOhdNYlqMZR2qeHe1N33OQdYYVeWyiG3l/rKeKteS2/UhXDdP885CMaWcPqbzaBJTOt1ViqnPjOqJmSzxcbfWtQ6iMNLPv6tx5om8fxh1niUu/GA5mMalq3lQnQ+25PmtspnlDxdRrwupaw/7WCvb9VLpynrWlbkURp17zrcPjNT7rSopsr9cnX95+861PRN/bM8Y1/YZmd0//Fmnp0oxvRvk5yJ2TNqwArpdiY+Y4Kk8b1nzWGSOGZnFF29nK1ynHAuiraK6XUudPlRh2+ZM1d3xJnp9S9H3Op2OKu4Xn7qrfn9gVO+Za3oe6vrq7vWq3z24Py6Fkf59Qjd2VzZ0dnXC62x89iGi7xwuumebc8ZUZFum81BlvKoka+19+cLIPGZU7fizT3GlP29+xfEwKa864+oUk3OCkXp9maJtFeLaJqNisctTG9HFRh13XZaoxmd6T7sWRuZz5Ssus3zgIseI2F7WVbWYzFsVsWZzT5veHWVE1qWaj7w4cyWma6TyMW8cTJP37bvchqQ6Gx+YAlkfL/exPqIt0b5r4brz5lPVzqfo9GfZLRrTNmMx1cfIz5z5Pkd9ntfyvilCnv6y/tr2q+ouM/WhbPyX2UNFdPqSqs6pLLuucWXLZAw24/UlOt9dzqELn1z5Zrtv8uz6EF82ZlaEK2FU7vtpXcIsydJRhbCa+e8/D60bUcbXTMMzfRK24nKssvgYr+x71lh8iO/1tBl/LPGlIseAT6q2J8m/",cr={data:ir},lr="AAACAAAAAACAOAAAAbYBSf7t2S1IBEEYBuDVDZ7FYrQMNsFiu3hgEYOI0SCXRIUrB8JhEZtgs5gEg1GMFk02m82oGI02m+9xezCOczv/uwv3fvAwc/PzfXOzcdqzWdaBDdiGPdiHdjE+DS3RNDuCfsn8idQ/g3OH3BdwKf0e96/gumTfYcncLdzBPTzAo+RZ+f0Cr/AG7/AJX4738x1wtz9FO5PX/50n6UXMNdfg/0lERERERERERERERETpdedHBvDRql4nq0cXtW9af98qdRby0Vvp8K4W0V+C5Xw0t4J2bfjeBp3cnEu1brnnCTYNa7eKdz91XP7WO9Lb4GqRb7cY6xbtAdqeVOsY/QGcevw/tb6OT85YhvfKYEx9CMuxKsKnrs+eJtVInVvHJ0eVYVvTZk2siFVLOCjb61PTZX3MdVWEyP7fjzpmMxdzTyq2Ebue6x61nXRGnzndWpf1an7dXmGYE4Y1ptqqKsK1nu26Ju0ty+maV2Rpvk+qnDZjKUIobUiesdAQE/jmCTmHmsskpFZsVYbtmXRcaoSGUPomunW2derQhDPFjtT1Q/eb8vnm990fq35oHVt11bU9m89c7DNI8Qs=",fr={data:lr},pr="AAgOAAAAAABQfgAAAWMGnPntmm2IVUUYx+dyb2ezXXtBiSCLsKDIiKIIoYINciGwQHrRL2Ufii0qMsv7QVBuQkXhkmW5gksQRhRFSBslbkllHyy3L2XllkXrB3uhF0tQ0Kj+xzN3d3buzJx5PeesOw/8mDNvz/PMnOc8s/fs6asTcgu4A9wF+mjdV9kEa8FqsE5j/DPgeUX/JvASeBW8Bd4GO8CHYDcz7nPwFRgD4+An8Cf4AxwBx0G9QcjrYBt4p5HN/YDqGEF9F7gW3AC6wU1gCVgK5oDlYA8YBXvBGOgHD4FzwSo6fg24EDwBxsEB8Cu1N4ByI1gA/gbfo+0wyuO0vgW8DK5i+tN5tVOyMmUWrs9k6nNxPY/WL0B5Mb2+HOU14HrwY2Ny/CLUbwa3gzsZPT7ZGECnDvdiPQ+ARyhpWxPlWnr9JLfeAdS/43S8qNiTIdq3FeUb9HolOEj7h9H2LtgJPgHr0TZKx31Jy30C/T+g7aDCbpPiuj/fStrTNfQGioWIHr9z+z8iiAEfdg4zdo7Gex6JRCKRSCQSiUQikYrzL367HmLq8zV+yyYJIbOTzva5aJtH2y9CuYBebwdX4PoYyv107ELUe5PsPWBavzHJ3tMtFuhluTWnPxKJRCKRSCQy/TjQCKt/XX3y/+o6HPJs35XNszPO0WQf+FnQfsnpU+vLUN8MdgNyRtZ2Ncp7wBDYDn4D47MIOes0QpaADeDUWsYe5pql3k3IZd3iPp4H6bjnUI6Cf8B1PYQ0wWCPno5IJBKJnJx83eN2fi7NeYd0jKsvr+A7p3749KzkXd2Ap+9R7qfrflhz/ava45m2I7Rcw+lI3/WtAO+Bx5PsG6+nk+xbv7Q/fWe4gc7ZRPu3oNzK6Hktmfy2r036vc82On44yb4ZHKFzPkL5aZJ9f9hH7Y8y+nbheq9irWOpf0z/L8nUWPmL6TuK6/8Uuhpd6r3sRv8cbszZXZm981HOB5fS/itzdIlYyMzpTa85HYtRv422LTPQ/yjd+/SZudvCr1DcV5Iv6W+HFRXaB988Rte2ugJrHKTPW4vx5akK+MWzvoI++Sb9zvKFriy/m8wbwpxXQL/gDNs5Tb+zTPfiza6sHEa5A3w8jWLgM/j6BePvoOBcM33+v6Hj9zvuQ978lR5ihl/bedM0DvN4vwI+NOvy7/SbCkze51WVRfXaCaJEmdlSm+H4lKLsVE3Kvoe2950tZdcnu5T1rISQKuaHovZNZw26/aKxvn0tS6oUG1WWmbAPvtbGjzPU2WvgV4uoEc7PkQ77MhHoYu1K7YvOVhv7uuJ7/QpdLcKtX2ZPthc1A/tEcK/zbAW+/0rbnqRVAlPuk0gC5b5cv1Q+BbIp8kGnX2VjQmT7bLm/Hfp1RfZ3kAdpGZI3h2iMnZCC47ftj+351WJ06PTLxk6I7OxxWH8rd4RCRHHuKC1DbOaIdJyQAn4vuPpqS8d5HVJUfy+p2lXjihIbuya/L2wowkae3TJEZFfmjywnBshRSl9s9Je1v7z9kL7bPE9Fi+xMlf09Z3Ne2KxNFu8qf2x02ojMD9McrpOLivTX9j6F9l/HfmgbotKnfp9nJCHqffFho0hcxWRNhHTarUI8h94PGx28Pp2xrrZ8SehcFToPhvabvbZ5JkXx4etZd4lZfn0+pIz8oMoRunpsbPgUUZ4NaYu1qcr9vC+2MWsa8yHOPlOxfU7L9Fnkg0t+0dGdZ9O38PGr6nPxwzRWXUX0/JmSN09kU+WPyD8f4jM+ioo7lW1femzuv0iXqi5r8yGq/fBts+gca/M8+orLvOc0RJ7P88c0J/m2L/OFbzfVa5LrXc4WH2NsbJrulcsafa+T99lFVwgpwr7JMy47U3T0FiFF56uQuss4j3gfbOb68sUlB6vOjaLPtrbdkLp9nZmqffcpqnurk4NU+oq8rzIx2Xddv8tel+peydar+htBpIufH0J4O2XFCCu2z0GZayjyDMzLS6Z+yGK1Sjmk7RNbtq91zrXQfumeOb58MdGTtxdlngmyc09nTlmxqfMcmvij67OJXV3R3dOQsZznh6qfkOL80M3BuvtW1B7yY2R+FLG/MsnzVXd+aF9VuUk1xzWudPwy1edzz1x8t9UfyndbHTY2yxTdHOCa92zj3CR+Te6fjzX5Ftf9M/E1VC4yzVehROa77/h09cmXb6Zxm2c3pPjSH9bn/wE=",hr={data:pr};var ze,on;function gr(){if(on)return ze;on=1;var a=0,u=-3;function d(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function n(o,f){this.source=o,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=f,this.destLen=0,this.ltree=new d,this.dtree=new d}var c=new d,g=new d,A=new Uint8Array(30),T=new Uint16Array(30),j=new Uint8Array(30),P=new Uint16Array(30),R=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),L=new d,H=new Uint8Array(320);function C(o,f,s,p){var m,y;for(m=0;m<s;++m)o[m]=0;for(m=0;m<30-s;++m)o[m+s]=m/s|0;for(y=p,m=0;m<30;++m)f[m]=y,y+=1<<o[m]}function b(o,f){var s;for(s=0;s<7;++s)o.table[s]=0;for(o.table[7]=24,o.table[8]=152,o.table[9]=112,s=0;s<24;++s)o.trans[s]=256+s;for(s=0;s<144;++s)o.trans[24+s]=s;for(s=0;s<8;++s)o.trans[168+s]=280+s;for(s=0;s<112;++s)o.trans[176+s]=144+s;for(s=0;s<5;++s)f.table[s]=0;for(f.table[5]=32,s=0;s<32;++s)f.trans[s]=s}var w=new Uint16Array(16);function _(o,f,s,p){var m,y;for(m=0;m<16;++m)o.table[m]=0;for(m=0;m<p;++m)o.table[f[s+m]]++;for(o.table[0]=0,y=0,m=0;m<16;++m)w[m]=y,y+=o.table[m];for(m=0;m<p;++m)f[s+m]&&(o.trans[w[f[s+m]]++]=m)}function S(o){o.bitcount--||(o.tag=o.source[o.sourceIndex++],o.bitcount=7);var f=o.tag&1;return o.tag>>>=1,f}function z(o,f,s){if(!f)return s;for(;o.bitcount<24;)o.tag|=o.source[o.sourceIndex++]<<o.bitcount,o.bitcount+=8;var p=o.tag&65535>>>16-f;return o.tag>>>=f,o.bitcount-=f,p+s}function O(o,f){for(;o.bitcount<24;)o.tag|=o.source[o.sourceIndex++]<<o.bitcount,o.bitcount+=8;var s=0,p=0,m=0,y=o.tag;do p=2*p+(y&1),y>>>=1,++m,s+=f.table[m],p-=f.table[m];while(p>=0);return o.tag=y,o.bitcount-=m,f.trans[s+p]}function e(o,f,s){var p,m,y,x,E,l;for(p=z(o,5,257),m=z(o,5,1),y=z(o,4,4),x=0;x<19;++x)H[x]=0;for(x=0;x<y;++x){var k=z(o,3,0);H[R[x]]=k}for(_(L,H,0,19),E=0;E<p+m;){var M=O(o,L);switch(M){case 16:var I=H[E-1];for(l=z(o,2,3);l;--l)H[E++]=I;break;case 17:for(l=z(o,3,3);l;--l)H[E++]=0;break;case 18:for(l=z(o,7,11);l;--l)H[E++]=0;break;default:H[E++]=M;break}}_(f,H,0,p),_(s,H,p,m)}function t(o,f,s){for(;;){var p=O(o,f);if(p===256)return a;if(p<256)o.dest[o.destLen++]=p;else{var m,y,x,E;for(p-=257,m=z(o,A[p],T[p]),y=O(o,s),x=o.destLen-z(o,j[y],P[y]),E=x;E<x+m;++E)o.dest[o.destLen++]=o.dest[E]}}}function r(o){for(var f,s,p;o.bitcount>8;)o.sourceIndex--,o.bitcount-=8;if(f=o.source[o.sourceIndex+1],f=256*f+o.source[o.sourceIndex],s=o.source[o.sourceIndex+3],s=256*s+o.source[o.sourceIndex+2],f!==(~s&65535))return u;for(o.sourceIndex+=4,p=f;p;--p)o.dest[o.destLen++]=o.source[o.sourceIndex++];return o.bitcount=0,a}function i(o,f){var s=new n(o,f),p,m,y;do{switch(p=S(s),m=z(s,2,0),m){case 0:y=r(s);break;case 1:y=t(s,c,g);break;case 2:e(s,s.ltree,s.dtree),y=t(s,s.ltree,s.dtree);break;default:y=u}if(y!==a)throw new Error("Data error")}while(!p);return s.destLen<s.dest.length?typeof s.dest.slice=="function"?s.dest.slice(0,s.destLen):s.dest.subarray(0,s.destLen):s.dest}return b(c,g),C(A,T,4,3),C(j,P,2,1),A[28]=0,T[28]=258,ze=i,ze}var Me,cn;function mr(){if(cn)return Me;cn=1;const a=new Uint8Array(new Uint32Array([305419896]).buffer)[0]===18,u=(c,g,A)=>{let T=c[g];c[g]=c[A],c[A]=T},d=c=>{const g=c.length;for(let A=0;A<g;A+=4)u(c,A,A+3),u(c,A+1,A+2)};return Me={swap32LE:c=>{a&&d(c)}},Me}var je,ln;function vr(){if(ln)return je;ln=1;const a=gr(),{swap32LE:u}=mr(),d=11,n=5,c=d-n,g=65536>>d,T=(1<<c)-1,j=2,R=(1<<n)-1,L=65536>>n,H=1024>>n,_=L+H+32,S=1<<j;class z{constructor(e){const t=typeof e.readUInt32BE=="function"&&typeof e.slice=="function";if(t||e instanceof Uint8Array){let r;if(t)this.highStart=e.readUInt32LE(0),this.errorValue=e.readUInt32LE(4),r=e.readUInt32LE(8),e=e.slice(12);else{const i=new DataView(e.buffer);this.highStart=i.getUint32(0,!0),this.errorValue=i.getUint32(4,!0),r=i.getUint32(8,!0),e=e.subarray(12)}e=a(e,new Uint8Array(r)),e=a(e,new Uint8Array(r)),u(e),this.data=new Uint32Array(e.buffer)}else({data:this.data,highStart:this.highStart,errorValue:this.errorValue}=e)}get(e){let t;return e<0||e>1114111?this.errorValue:e<55296||e>56319&&e<=65535?(t=(this.data[e>>n]<<j)+(e&R),this.data[t]):e<=65535?(t=(this.data[L+(e-55296>>n)]<<j)+(e&R),this.data[t]):e<this.highStart?(t=this.data[_-g+(e>>d)],t=this.data[t+(e>>n&T)],t=(t<<j)+(e&R),this.data[t]):this.data[this.data.length-S]}}return je=z,je}var ye={exports:{}},br=ye.exports,fn;function _r(){return fn||(fn=1,function(a,u){(function(d,n){a.exports=n()})(typeof self<"u"?self:typeof window<"u"?window:typeof rn<"u"?rn:br,function(){var d="3.7.7",n=d,c=typeof Buffer=="function",g=typeof TextDecoder=="function"?new TextDecoder:void 0,A=typeof TextEncoder=="function"?new TextEncoder:void 0,T="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",j=Array.prototype.slice.call(T),P=function(v){var F={};return v.forEach(function(N,V){return F[N]=V}),F}(j),R=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,L=String.fromCharCode.bind(String),H=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):function(v){return new Uint8Array(Array.prototype.slice.call(v,0))},C=function(v){return v.replace(/=/g,"").replace(/[+\/]/g,function(F){return F=="+"?"-":"_"})},b=function(v){return v.replace(/[^A-Za-z0-9\+\/]/g,"")},w=function(v){for(var F,N,V,ae,ne="",le=v.length%3,se=0;se<v.length;){if((N=v.charCodeAt(se++))>255||(V=v.charCodeAt(se++))>255||(ae=v.charCodeAt(se++))>255)throw new TypeError("invalid character found");F=N<<16|V<<8|ae,ne+=j[F>>18&63]+j[F>>12&63]+j[F>>6&63]+j[F&63]}return le?ne.slice(0,le-3)+"===".substring(le):ne},_=typeof btoa=="function"?function(v){return btoa(v)}:c?function(v){return Buffer.from(v,"binary").toString("base64")}:w,S=c?function(v){return Buffer.from(v).toString("base64")}:function(v){for(var F=4096,N=[],V=0,ae=v.length;V<ae;V+=F)N.push(L.apply(null,v.subarray(V,V+F)));return _(N.join(""))},z=function(v,F){return F===void 0&&(F=!1),F?C(S(v)):S(v)},O=function(v){if(v.length<2){var F=v.charCodeAt(0);return F<128?v:F<2048?L(192|F>>>6)+L(128|F&63):L(224|F>>>12&15)+L(128|F>>>6&63)+L(128|F&63)}else{var F=65536+(v.charCodeAt(0)-55296)*1024+(v.charCodeAt(1)-56320);return L(240|F>>>18&7)+L(128|F>>>12&63)+L(128|F>>>6&63)+L(128|F&63)}},e=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,t=function(v){return v.replace(e,O)},r=c?function(v){return Buffer.from(v,"utf8").toString("base64")}:A?function(v){return S(A.encode(v))}:function(v){return _(t(v))},i=function(v,F){return F===void 0&&(F=!1),F?C(r(v)):r(v)},o=function(v){return i(v,!0)},f=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,s=function(v){switch(v.length){case 4:var F=(7&v.charCodeAt(0))<<18|(63&v.charCodeAt(1))<<12|(63&v.charCodeAt(2))<<6|63&v.charCodeAt(3),N=F-65536;return L((N>>>10)+55296)+L((N&1023)+56320);case 3:return L((15&v.charCodeAt(0))<<12|(63&v.charCodeAt(1))<<6|63&v.charCodeAt(2));default:return L((31&v.charCodeAt(0))<<6|63&v.charCodeAt(1))}},p=function(v){return v.replace(f,s)},m=function(v){if(v=v.replace(/\s+/g,""),!R.test(v))throw new TypeError("malformed base64.");v+="==".slice(2-(v.length&3));for(var F,N="",V,ae,ne=0;ne<v.length;)F=P[v.charAt(ne++)]<<18|P[v.charAt(ne++)]<<12|(V=P[v.charAt(ne++)])<<6|(ae=P[v.charAt(ne++)]),N+=V===64?L(F>>16&255):ae===64?L(F>>16&255,F>>8&255):L(F>>16&255,F>>8&255,F&255);return N},y=typeof atob=="function"?function(v){return atob(b(v))}:c?function(v){return Buffer.from(v,"base64").toString("binary")}:m,x=c?function(v){return H(Buffer.from(v,"base64"))}:function(v){return H(y(v).split("").map(function(F){return F.charCodeAt(0)}))},E=function(v){return x(k(v))},l=c?function(v){return Buffer.from(v,"base64").toString("utf8")}:g?function(v){return g.decode(x(v))}:function(v){return p(y(v))},k=function(v){return b(v.replace(/[-_]/g,function(F){return F=="-"?"+":"/"}))},M=function(v){return l(k(v))},I=function(v){if(typeof v!="string")return!1;var F=v.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(F)||!/[^\s0-9a-zA-Z\-_]/.test(F)},U=function(v){return{value:v,enumerable:!1,writable:!0,configurable:!0}},B=function(){var v=function(F,N){return Object.defineProperty(String.prototype,F,U(N))};v("fromBase64",function(){return M(this)}),v("toBase64",function(F){return i(this,F)}),v("toBase64URI",function(){return i(this,!0)}),v("toBase64URL",function(){return i(this,!0)}),v("toUint8Array",function(){return E(this)})},G=function(){var v=function(F,N){return Object.defineProperty(Uint8Array.prototype,F,U(N))};v("toBase64",function(F){return z(this,F)}),v("toBase64URI",function(){return z(this,!0)}),v("toBase64URL",function(){return z(this,!0)})},K=function(){B(),G()},Z={version:d,VERSION:n,atob:y,atobPolyfill:m,btoa:_,btoaPolyfill:w,fromBase64:M,toBase64:i,encode:i,encodeURI:o,encodeURL:o,utob:t,btou:p,decode:M,isValid:I,fromUint8Array:z,toUint8Array:E,extendString:B,extendUint8Array:G,extendBuiltins:K};return Z.Base64={},Object.keys(Z).forEach(function(v){return Z.Base64[v]=Z[v]}),Z})}(ye)),ye.exports}var Le,pn;function wr(){if(pn)return Le;pn=1;const a=or(),u=cr.data,d=fr.data,n=hr.data,c=vr(),g=_r().Base64,A=new c(g.toUint8Array(u)),T=new c(g.toUint8Array(d)),j=new c(g.toUint8Array(n));function P(L,H){return(L&H)!==0}function R(L,H,C){const b=H.length;for(let w=C;w+1<b;w++){const _=H[w+0],S=H[w+1];switch(L.gb9c){case 0:P(_,a.InCB_Consonant)&&(L.gb9c=1);break;case 1:P(_,a.InCB_Extend)?L.gb9c=1:P(_,a.InCB_Linker)?L.gb9c=2:L.gb9c=P(_,a.InCB_Consonant)?1:0;break;case 2:P(_,a.InCB_Extend|a.InCB_Linker)?L.gb9c=2:L.gb9c=P(_,a.InCB_Consonant)?1:0;break}switch(L.gb11){case 0:P(_,a.Extended_Pictographic)&&(L.gb11=1);break;case 1:P(_,a.Extend)?L.gb11=1:P(_,a.ZWJ)?L.gb11=2:L.gb11=P(_,a.Extended_Pictographic)?1:0;break;case 2:L.gb11=P(_,a.Extended_Pictographic)?1:0;break}switch(L.gb12){case 0:P(_,a.Regional_Indicator)?L.gb12=1:L.gb12=-1;break;case 1:P(_,a.Regional_Indicator)?L.gb12=0:L.gb12=-1;break}switch(L.gb13){case 0:P(_,a.Regional_Indicator)||(L.gb13=1);break;case 1:P(_,a.Regional_Indicator)?L.gb13=2:L.gb13=1;break;case 2:L.gb13=1;break}if(!(P(_,a.CR)&&P(S,a.LF))){if(P(_,a.Control|a.CR|a.LF)||P(S,a.Control|a.CR|a.LF))return w+1-C;if(!(P(_,a.L)&&P(S,a.L|a.V|a.LV|a.LVT))&&!(P(_,a.LV|a.V)&&P(S,a.V|a.T))&&!(P(_,a.LVT|a.T)&&P(S,a.T))&&!P(S,a.Extend|a.ZWJ)&&!P(S,a.SpacingMark)&&!P(_,a.Prepend)&&!(P(S,a.InCB_Consonant)&&L.gb9c===2)&&!(P(S,a.Extended_Pictographic)&&L.gb11===2)&&!(P(S,a.Regional_Indicator)&&L.gb12===1)&&!(P(S,a.Regional_Indicator)&&L.gb13===2))return w+1-C}}return b-C}return Le=function(H){const C=[],b=[0],w=[];for(let S=0;S<H.length;){const z=H.codePointAt(S);w.push(A.get(z)|T.get(z)|j.get(z)),S+=z>65535?2:1,b.push(S)}const _={gb9c:0,gb11:0,gb12:0,gb13:0};for(let S=0;S<w.length;){const z=R(_,w,S),O=b[S],e=b[S+z];C.push(H.slice(O,e)),S+=z}return C},Le}var yr=wr();const kr=yn(yr),Pr=a=>a.normalize("NFKD").split(""),hn=/^\s+$/,gn=/^[`~!@#$%^&*()\-=_+{}[\]\|\\;':",./<>?]+$/,He={insertOrder:"insertOrder",bestMatch:"bestMatch"},Cr={keySelector:a=>a,threshold:.6,ignoreCase:!0,ignoreSymbols:!0,normalizeWhitespace:!0,returnMatchData:!1,useDamerau:!0,useSellers:!0,useSeparatedUnicode:!1,sortBy:He.bestMatch},Sr=()=>{},Ar=a=>a instanceof Array?a:[a];function Cn(a,u){const d=u.ignoreCase?a.toLocaleLowerCase():a,n=[],c=[];let g=!0,A=0;const T=u.useSeparatedUnicode?Pr(d):kr(d);for(const j of T)hn.lastIndex=0,gn.lastIndex=0,u.normalizeWhitespace&&hn.test(j)?g||(n.push(" "),c.push(A),g=!0):u.ignoreSymbols&&gn.test(j)||(u.useSeparatedUnicode?n.push(j):n.push(j.normalize()),c.push(A),g=!1),A+=j.length;for(c.push(a.length);n[n.length-1]===" ";)n.pop(),c.pop();return{original:a,normal:n,map:c}}function xr(a,u){return{index:u[a.start],length:u[a.end+1]-u[a.start]}}function Sn(a,u){if(u===0)return{index:0,length:0};let d=u;for(let n=a.length-2;n>0&&d>1;n--){const c=a[n];d=c[d]<c[d-1]?d:d-1}return{start:d-1,end:u-1}}function Er(){return{start:0,end:0}}const Tr=()=>!0,zr=(a,u)=>a<u;function Mr(a,u){const d=new Array(a);for(let n=0;n<a;n++)d[n]=new Array(u),d[n][0]=n;for(let n=0;n<u;n++)d[0][n]=n;return d}function jr(a,u){const d=new Array(a);d[0]=new Array(u).fill(0);for(let n=1;n<a;n++)d[n]=new Array(u),d[n][0]=n;return d}function An(a,u,d,n,c){const g=d[n],A=d[n+1],T=a[n]===u[c]?0:1;let j,P=A[c]+1;(j=g[c+1]+1)<P&&(P=j),(j=g[c]+T)<P&&(P=j),A[c+1]=P}function xn(a,u,d,n){for(let c=0;c<a.length;c++)An(a,u,d,c,n)}function Lr(a,u,d,n){if(n===0){xn(a,u,d,n);return}a.length>0&&An(a,u,d,0,n);for(let c=1;c<a.length;c++){const g=d[c-1],A=d[c],T=d[c+1],j=a[c]===u[n]?0:1;let P,R=T[n]+1;(P=A[n+1]+1)<R&&(R=P),(P=A[n]+j)<R&&(R=P),a[c]===u[n-1]&&a[c-1]===u[n]&&(P=g[n-1]+j)<R&&(R=P),T[n+1]=R}}function Or(a,u,d){let n=a;for(let c=0;c<u.length;c++){const g=u[c];n.children[g]==null&&(n.children[g]={children:{},candidates:[],depth:0}),n.depth=Math.max(n.depth,u.length-c),n=n.children[g]}n.candidates.push(d)}function Fr(a,u,d,n){for(const c of d){const g=Ar(n.keySelector(c)).map((A,T)=>({index:u,keyIndex:T,item:c,normalized:Cn(A,n)}));u++;for(const A of g)Or(a,A.normalized.normal,A)}}function Ir(a,u){const d=u.score-a.score;if(d!==0)return d;const n=a.match.start-u.match.start;if(n!==0)return n;const c=a.keyIndex-u.keyIndex;if(c!==0)return c;const g=a.lengthDiff-u.lengthDiff;return g!==0?g:En(a,u)}function En(a,u){return a.index-u.index}function Rr(a){switch(a){case He.bestMatch:return Ir;case He.insertOrder:return En;default:throw new Error(`unknown sortBy method ${a}`)}}function Tn(a,u,d,n,c,g,A){const T={item:d.item,normalized:d.normalized,score:n,match:c,index:d.index,keyIndex:d.keyIndex,lengthDiff:g};u[d.index]==null?(u[d.index]=a.length,a.push(T)):A(T,a[u[d.index]])<0&&(a[u[d.index]]=T)}const Br=Math.max,Dr=a=>a;function $r(a,u,d,n,c){const g=u+c,A=Math.min(d.length,u+a.depth+1),T=Math.ceil((g+A)/2);return 1-(T-A)/T>=n}function Hr(a,u,d,n,c,g){return 1-Math.min(c,g-(a.depth+1))/d.length>=n}function Ur(a,u,d,n,c,g,A){const T=[];for(const P in a.children){const R=a.children[P];T.push([R,1,P,0,u.length])}const j=new Array(a.depth);for(;T.length!==0;){const[P,R,L,H,C]=T.pop();j[R-1]=L,d.score(u,j,n,R-1);const b=R,w=n[n.length-1][b];let _=H,S=C;if(d.shouldUpdateScore(w,C)&&(_=b,S=w),P.candidates.length>0){const z=d.getLength(u.length,R),O=1-S/z;if(O>=A.threshold){const e=Sn(n,_),t=Math.abs(R-u.length);for(const r of P.candidates)Tn(c,g,r,O,e,t,d.compareItems)}}for(const z in P.children){const O=P.children[z];d.shouldContinue(O,R,u,A.threshold,S,w)&&T.push([O,R+1,z,_,S])}}}function Nr(a,u,d){const n=d.useSellers?jr:Mr,c={score:d.useDamerau?Lr:xn,getLength:d.useSellers?Dr:Br,shouldUpdateScore:d.useSellers?zr:Tr,shouldContinue:d.useSellers?Hr:$r,walkBack:d.useSellers?Sn:Er,compareItems:Rr(d.sortBy)},g={},A=[],T=n(a.length+1,u.depth+1);if(d.threshold<=0||a.length===0)for(const P of u.candidates)Tn(A,g,P,0,{index:0,length:0},a.length,c.compareItems);Ur(u,a,c,T,A,g,d);const j=A.sort(c.compareItems);if(d.returnMatchData){const P=d.useSellers?xr:Sr;return j.map(R=>({item:R.item,original:R.normalized.original,key:R.normalized.normal.join(""),score:R.score,match:P(R.match,R.normalized.map)}))}return j.map(P=>P.item)}function Vr(a,u,d){d={...Cr,...d};const n={children:{},candidates:[],depth:0};return Fr(n,0,u,d),Nr(Cn(a,d).normal,n,d)}const Oe=5;function qr(a){const u=D(!1),d=D(""),n=ee(()=>d.val?Vr(d.val,a,{keySelector:g=>g.name+" "+g.path}):a),c=ee(()=>n.val.slice(0,Oe));return ve({type:"search",placeholder:"Search...",value:d,lead:h.i("search"),"$data-open":u,class:"variant-outline transition-all min-w-32 w-32 rounded-full focus-within:w-xs focus-within:variant-soft-outline data-open:w-xs data-open:variant-soft-outline",onfocus:()=>u.val=!0},()=>Ce({visible:u,class:"card shadow-xl vessel glass rounded-2xl w-xs max-w-full transition-opacity starting:opacity-0 overflow-hidden"},()=>h.ul({class:"flex flex-col gap-2"},h.li({class:"text-mini uppercase"},"Pages"),c.val.length?c.val.map(g=>Wr(g,()=>u.val=!1)):h.span({class:"text-sm text-center break-all"},h.span({class:"text-swatch-600-surface"},"No results for "),h.span({class:"font-semibold"},d)),n.val.length>Oe?h.span({class:"badge variant-outline rounded-full w-fit self-center"},h.span({class:"text-swatch-600-surface"},"and "),h.span({class:"font-semibold"},n.val.length-Oe),h.span({class:"text-swatch-600-surface"}," more")):void 0)))}function Wr(a,u){const d=a.path.split("/").slice(2,-1).map(n=>n[0].toUpperCase()+n.slice(1)).join(" → ");return Pn({href:a.path,onclick:u,class:"button gap-2 justify-start variant-soft hover:raised active:lowered active:mood-accent transition"},h.i({class:"opacity-75"},"article"),h.span({class:"flex-1"},h.span({class:"opacity-75"},d?`${d} → `:void 0),h.span({class:"font-semibold"},a.name)),h.i("chevron_right"))}function Gr({searchLinks:a}){const u="flex gap-4 items-center";return h.header({name:"Header",class:"bg-background-50 fixed top-0 flex w-full justify-between gap-4 px-6 py-2 glass border-b border-surface-500/50 z-10"},h["left-content"]({class:u},h.img({src:sr,class:"size-12 -m-2 not-dark:brightness-0"}),h.span({class:"text-xl font-bold"},"Savant"),wn({class:"cursor-help variant-filled mood-info rounded-full control-sm"},h.i("construction"),$e({class:"mood-info"},"Savant is still under construction"))),h["right-content"]({class:u},qr(a),h.a({name:"GitHub",class:"control !rounded-full **:fill-current hover:variant-soft text-lg !p-2",href:"https://github.com/OscarCookeAbbott/Savant",target:"_blank"},re.svg({viewBox:"0 0 1024 1024",class:"size-[1em]"},re.path({transform:"scale(64)",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"})),$e({class:"right-0"},"Savant GitHub"))))}function Zr({options:a,class:u,...d}){const n=ee(()=>decodeURI(rr()));return h.div({name:"Navbar",class:`p-6 flex flex-col overflow-y-auto fixed top-12 h-[calc(100%-3rem)] left-0 bg-background border-r border-surface-500/50 ${u}`,...d},a.map(c=>zn(c,0,n)))}function zn(a,u,d){var n;return[Pn({href:a.path,disabled:a.path===void 0,onclick:()=>{window.scrollTo({top:0,left:0})},"$data-selected":()=>d.val===`${"/Savant/".slice(0,-1)}${a.path}`,"$data-group":()=>u===0&&a.children,"$data-indented":()=>u!==0,style:`--indent: ${u}rem;`,class:"relative flex gap-4 group text-swatch-700-mood data-selected:text-mood-500 data-group:font-semibold data-group:not-first:mt-6 data-group:mb-1 not-data-selected:hover:text-swatch-900-foreground data-selected:mood-accent data-selected:z-10"},h.span({name:"Divider",class:"absolute h-full w-px left-0 bg-current/50 group-data-selected:bg-current not-group-data-indented:hidden group-hover:w-1 group-data-selected:w-1 transition-all"}),h.span({name:"Title",class:"group-data-indented:ml-(--indent) justify-start group-data-selected:font-semibold flex-1 py-0.5 z-1 transition-all"},a.name)),(n=a.children)==null?void 0:n.map(c=>zn(c,u+1,d))]}const Xr=`# Savant Core

> All the essentials for functional, declarative web apps.
`;function Kr(){return X(de({class:"language-typescript"},Xr))}const Jr=`# Savant Routing

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
`;function Qr(){return X(de({class:"language-typescript"},Jr))}const Yr=`# Savant UI

> Make great design effortless.
`;function ea(){return X(de({class:"language-typescript"},Yr))}const na=`# Savant

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
`;function ta(){return X(de({class:"language-typescript w-2xl *:scroll-m-21"},na))}const ra=Object.assign({"./src/routes/1 core/1 State/index.ts":gt,"./src/routes/1 core/2 Derive/index.ts":bt,"./src/routes/1 core/3 Elements/index.ts":yt,"./src/routes/1 core/4 Components/index.ts":Ct,"./src/routes/1 core/5 Context/index.ts":xt,"./src/routes/1 core/6 Converter/index.ts":Tt}),aa=Object.assign({"./src/routes/2 routing/1 Router/index.ts":jt}),ua=Object.assign({"./src/routes/3 ui/Badge/index.ts":Ot,"./src/routes/3 ui/Button/index.ts":It,"./src/routes/3 ui/Checkbox/index.ts":Bt,"./src/routes/3 ui/Circular Progress Bar/index.ts":$t,"./src/routes/3 ui/Code/index.ts":Ut,"./src/routes/3 ui/Input/index.ts":Vt,"./src/routes/3 ui/Popup/index.ts":Wt,"./src/routes/3 ui/Radio/index.ts":Zt,"./src/routes/3 ui/Select/index.ts":Kt,"./src/routes/3 ui/Tooltip/index.ts":Qt}),da=Object.assign({"./src/routes/examples/Sign In/index.ts":nr}),be=a=>Object.entries(a).map(([u,d])=>{const n=u.replace("./src/routes/","").replace("/index.ts",""),c=n.split("/").slice(-1)[0].replace(/^\d+\s/,""),g=n.split("/").slice(0,-1).map(A=>A.replace(/^\d+\s/,"").replace(" ","-")).join("/");return{name:c,path:`/#!/${g}/${c}`,dom:d.default}}),Mn=[{name:"Introduction",path:"/",dom:ta},{name:"Core",path:"/#!/core",dom:Kr,children:be(ra)},{name:"Routing",path:"/#!/routing",dom:Qr,children:be(aa)},{name:"Savant UI",path:"/#!/ui",dom:ea,children:be(ua)},{name:"Examples",children:be(da)}],mn=Mn.flatMap(a=>[...a.path?[a]:[],...a.children??[]]);function sa(){return h.div({name:"App",class:"flex flex-col relative size-full"},Gr({searchLinks:mn}),h.div({class:"flex flex-1"},Zr({options:Mn,class:"min-w-64 not-lg:hidden"}),h.div({class:"lg:ml-64 overflow-clip flex flex-1 justify-center"},h.div({class:"flex flex-col px-8 pt-24 pb-16 gap-4"},dr({basename:"/Savant/".slice(0,-1),routes:mn})))))}ge(document.body,sa())});export default oa();
