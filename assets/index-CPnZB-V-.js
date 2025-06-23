var en=(d,s)=>()=>(s||d((s={exports:{}}).exports,s),s.exports);var Ha=en((Na,ve)=>{(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))t(p);new MutationObserver(p=>{for(const k of p)if(k.type==="childList")for(const A of k.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&t(A)}).observe(document,{childList:!0,subtree:!0});function c(p){const k={};return p.integrity&&(k.integrity=p.integrity),p.referrerPolicy&&(k.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?k.credentials="include":p.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function t(p){if(p.ep)return;p.ep=!0;const k=c(p);fetch(p.href,k)}})();const nn=`# State

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
`;var an=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},O=function(d){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,c=0,t={},p={manual:d.Prism&&d.Prism.manual,disableWorkerMessageHandler:d.Prism&&d.Prism.disableWorkerMessageHandler,util:{encode:function m(g){return g instanceof k?new k(g.type,m(g.content),g.alias):Array.isArray(g)?g.map(m):g.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++c}),m.__id},clone:function m(g,P){var w,C;switch(P=P||{},p.util.type(g)){case"Object":if(C=p.util.objId(g),P[C])return P[C];for(var z in w={},P[C]=w,g)g.hasOwnProperty(z)&&(w[z]=m(g[z],P));return w;case"Array":return C=p.util.objId(g),P[C]?P[C]:(w=[],P[C]=w,g.forEach(function(e,a){w[a]=m(e,P)}),w);default:return g}},getLanguage:function(m){for(;m;){var g=s.exec(m.className);if(g)return g[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,g){m.className=m.className.replace(RegExp(s,"gi"),""),m.classList.add("language-"+g)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(w){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(w.stack)||[])[1];if(m){var g=document.getElementsByTagName("script");for(var P in g)if(g[P].src==m)return g[P]}return null}},isActive:function(m,g,P){for(var w="no-"+g;m;){var C=m.classList;if(C.contains(g))return!0;if(C.contains(w))return!1;m=m.parentElement}return!!P}},languages:{plain:t,plaintext:t,text:t,txt:t,extend:function(m,g){var P=p.util.clone(p.languages[m]);for(var w in g)P[w]=g[w];return P},insertBefore:function(m,g,P,w){var C=(w=w||p.languages)[m],z={};for(var e in C)if(C.hasOwnProperty(e)){if(e==g)for(var a in P)P.hasOwnProperty(a)&&(z[a]=P[a]);P.hasOwnProperty(e)||(z[e]=C[e])}var n=w[m];return w[m]=z,p.languages.DFS(p.languages,function(r,i){i===n&&r!=m&&(this[r]=z)}),z},DFS:function m(g,P,w,C){C=C||{};var z=p.util.objId;for(var e in g)if(g.hasOwnProperty(e)){P.call(g,e,g[e],w||e);var a=g[e],n=p.util.type(a);n!=="Object"||C[z(a)]?n!=="Array"||C[z(a)]||(C[z(a)]=!0,m(a,P,e,C)):(C[z(a)]=!0,m(a,P,null,C))}}},plugins:{},highlightAll:function(m,g){p.highlightAllUnder(document,m,g)},highlightAllUnder:function(m,g,P){var w={callback:P,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};p.hooks.run("before-highlightall",w),w.elements=Array.prototype.slice.apply(w.container.querySelectorAll(w.selector)),p.hooks.run("before-all-elements-highlight",w);for(var C,z=0;C=w.elements[z++];)p.highlightElement(C,g===!0,w.callback)},highlightElement:function(m,g,P){var w=p.util.getLanguage(m),C=p.languages[w];p.util.setLanguage(m,w);var z=m.parentElement;z&&z.nodeName.toLowerCase()==="pre"&&p.util.setLanguage(z,w);var e={element:m,language:w,grammar:C,code:m.textContent};function a(r){e.highlightedCode=r,p.hooks.run("before-insert",e),e.element.innerHTML=e.highlightedCode,p.hooks.run("after-highlight",e),p.hooks.run("complete",e),P&&P.call(e.element)}if(p.hooks.run("before-sanity-check",e),(z=e.element.parentElement)&&z.nodeName.toLowerCase()==="pre"&&!z.hasAttribute("tabindex")&&z.setAttribute("tabindex","0"),!e.code)return p.hooks.run("complete",e),void(P&&P.call(e.element));if(p.hooks.run("before-highlight",e),e.grammar)if(g&&d.Worker){var n=new Worker(p.filename);n.onmessage=function(r){a(r.data)},n.postMessage(JSON.stringify({language:e.language,code:e.code,immediateClose:!0}))}else a(p.highlight(e.code,e.grammar,e.language));else a(p.util.encode(e.code))},highlight:function(m,g,P){var w={code:m,grammar:g,language:P};if(p.hooks.run("before-tokenize",w),!w.grammar)throw new Error('The language "'+w.language+'" has no grammar.');return w.tokens=p.tokenize(w.code,w.grammar),p.hooks.run("after-tokenize",w),k.stringify(p.util.encode(w.tokens),w.language)},tokenize:function(m,g){var P=g.rest;if(P){for(var w in P)g[w]=P[w];delete g.rest}var C=new T;return F(C,C.head,m),M(m,C,g,C.head,0),function(z){for(var e=[],a=z.head.next;a!==z.tail;)e.push(a.value),a=a.next;return e}(C)},hooks:{all:{},add:function(m,g){var P=p.hooks.all;P[m]=P[m]||[],P[m].push(g)},run:function(m,g){var P=p.hooks.all[m];if(P&&P.length)for(var w,C=0;w=P[C++];)w(g)}},Token:k};function k(m,g,P,w){this.type=m,this.content=g,this.alias=P,this.length=0|(w||"").length}function A(m,g,P,w){m.lastIndex=g;var C=m.exec(P);if(C&&w&&C[1]){var z=C[1].length;C.index+=z,C[0]=C[0].slice(z)}return C}function M(m,g,P,w,C,z){for(var e in P)if(P.hasOwnProperty(e)&&P[e]){var a=P[e];a=Array.isArray(a)?a:[a];for(var n=0;n<a.length;++n){if(z&&z.cause==e+","+n)return;var r=a[n],i=r.inside,l=!!r.lookbehind,o=!!r.greedy,f=r.alias;if(o&&!r.pattern.global){var S=r.pattern.toString().match(/[imsuy]*$/)[0];r.pattern=RegExp(r.pattern.source,S+"g")}for(var y=r.pattern||r,v=w.next,b=C;v!==g.tail&&!(z&&b>=z.reach);b+=v.value.length,v=v.next){var u=v.value;if(g.length>m.length)return;if(!(u instanceof k)){var _,j=1;if(o){if(!(_=A(y,b,m,l))||_.index>=m.length)break;var E=_.index,I=_.index+_[0].length,$=b;for($+=v.value.length;E>=$;)$+=(v=v.next).value.length;if(b=$-=v.value.length,v.value instanceof k)continue;for(var V=v;V!==g.tail&&($<I||typeof V.value=="string");V=V.next)j++,$+=V.value.length;j--,u=m.slice(b,$),_.index-=b}else if(!(_=A(y,0,u,l)))continue;E=_.index;var G=_[0],Q=u.slice(0,E),q=u.slice(E+G.length),W=b+u.length;z&&W>z.reach&&(z.reach=W);var Z=v.prev;if(Q&&(Z=F(g,Z,Q),b+=Q.length),R(g,Z,j),v=F(g,Z,new k(e,i?p.tokenize(G,i):G,f,G)),q&&F(g,v,q),j>1){var Y={cause:e+","+n,reach:W};M(m,g,P,v.prev,b,Y),z&&Y.reach>z.reach&&(z.reach=Y.reach)}}}}}}function T(){var m={value:null,prev:null,next:null},g={value:null,prev:m,next:null};m.next=g,this.head=m,this.tail=g,this.length=0}function F(m,g,P){var w=g.next,C={value:P,prev:g,next:w};return g.next=C,w.prev=C,m.length++,C}function R(m,g,P){for(var w=g.next,C=0;C<P&&w!==m.tail;C++)w=w.next;g.next=w,w.prev=g,m.length-=C}if(d.Prism=p,k.stringify=function m(g,P){if(typeof g=="string")return g;if(Array.isArray(g)){var w="";return g.forEach(function(n){w+=m(n,P)}),w}var C={type:g.type,content:m(g.content,P),tag:"span",classes:["token",g.type],attributes:{},language:P},z=g.alias;z&&(Array.isArray(z)?Array.prototype.push.apply(C.classes,z):C.classes.push(z)),p.hooks.run("wrap",C);var e="";for(var a in C.attributes)e+=" "+a+'="'+(C.attributes[a]||"").replace(/"/g,"&quot;")+'"';return"<"+C.tag+' class="'+C.classes.join(" ")+'"'+e+">"+C.content+"</"+C.tag+">"},!d.document)return d.addEventListener&&(p.disableWorkerMessageHandler||d.addEventListener("message",function(m){var g=JSON.parse(m.data),P=g.language,w=g.code,C=g.immediateClose;d.postMessage(p.highlight(w,p.languages[P],P)),C&&d.close()},!1)),p;var x=p.util.currentScript();function B(){p.manual||p.highlightAll()}if(x&&(p.filename=x.src,x.hasAttribute("data-manual")&&(p.manual=!0)),!p.manual){var J=document.readyState;J==="loading"||J==="interactive"&&x&&x.defer?document.addEventListener("DOMContentLoaded",B):window.requestAnimationFrame?window.requestAnimationFrame(B):window.setTimeout(B,16)}return p}(an);typeof ve<"u"&&ve.exports&&(ve.exports=O),typeof global<"u"&&(global.Prism=O);O.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},O.languages.markup.tag.inside["attr-value"].inside.entity=O.languages.markup.entity,O.languages.markup.doctype.inside["internal-subset"].inside=O.languages.markup,O.hooks.add("wrap",function(d){d.type==="entity"&&(d.attributes.title=d.content.replace(/&amp;/,"&"))}),Object.defineProperty(O.languages.markup.tag,"addInlined",{value:function(d,s){var c={};c["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:O.languages[s]},c.cdata=/^<!\[CDATA\[|\]\]>$/i;var t={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:c}};t["language-"+s]={pattern:/[\s\S]+/,inside:O.languages[s]};var p={};p[d]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return d}),"i"),lookbehind:!0,greedy:!0,inside:t},O.languages.insertBefore("markup","cdata",p)}}),Object.defineProperty(O.languages.markup.tag,"addAttribute",{value:function(d,s){O.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(`(^|["'\\s])(?:`+d+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:O.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),O.languages.html=O.languages.markup,O.languages.mathml=O.languages.markup,O.languages.svg=O.languages.markup,O.languages.xml=O.languages.extend("markup",{}),O.languages.ssml=O.languages.xml,O.languages.atom=O.languages.xml,O.languages.rss=O.languages.xml;(function(d){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;d.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+s.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},d.languages.css.atrule.inside.rest=d.languages.css;var c=d.languages.markup;c&&(c.tag.addInlined("style","css"),c.tag.addAttribute("style","css"))})(O);O.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};O.languages.javascript=O.languages.extend("clike",{"class-name":[O.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),O.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,O.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:O.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:O.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:O.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:O.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:O.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),O.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:O.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),O.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),O.languages.markup&&(O.languages.markup.tag.addInlined("script","javascript"),O.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),O.languages.js=O.languages.javascript;(function(d){d.languages.typescript=d.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),d.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete d.languages.typescript.parameter,delete d.languages.typescript["literal-property"];var s=d.languages.extend("typescript",{});delete s["class-name"],d.languages.typescript["class-name"].inside=s,d.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:s}}}}),d.languages.ts=d.languages.typescript})(O);const Ge="savant-context-request",Pe="context-",Ve="context-out-",$e=new WeakMap;function tn(d,s,c){const p=Ze(d,s)===void 0&&Ae(d,s);We(d,s,c)&&p&&p.triggerRecheck.val++}function rn(d,s){const c=un(d,s),t=L(c);return ee(()=>{if(c.triggerRecheck.val){const p=Ae(d,s);if(p===t.val)return;t.val=p}}),ee(()=>{var p;return(p=t.val)==null?void 0:p.val})}function dn(d,s){const c=ze(d);if(c===void 0)return;const t=c.get(s);t!==void 0&&(c.size===1&&$e.delete(d),t.triggerRecheck.val++,c.delete(s))}function We(d,s,c){const t=ze(d);if(t===void 0){d.addEventListener(Ge,M=>{const T=M,F=Ze(d,T.detail.key);F!==void 0&&(T.detail.context=F,M.stopPropagation())});const k=Object.assign(L(c),{triggerRecheck:L(0)}),A=new Map([[s,k]]);return $e.set(d,A),k}const p=t.get(s);if(p===void 0){const k=Object.assign(L(c),{triggerRecheck:L(0)});return t.set(s,k),k}return p.rawVal!==c&&(p.val=c),p}function un(d,s){const c=Ae(d,s);return c!==void 0?c:We(d,s,void 0)}function Ae(d,s){const c=new CustomEvent(Ge,{bubbles:!0,cancelable:!0,detail:{key:s,context:void 0}});return d.dispatchEvent(c),c.detail.context}function ze(d){return $e.get(d)}function Ze(d,s){var c;return(c=ze(d))==null?void 0:c.get(s)}class se{constructor(s,c){this._rawVal=s,this._oldVal=s,this._bindings=[],this._listeners=[],this._onDestroy=c}get val(){var s;return(s=ne==null?void 0:ne._getters)==null||s.add(this),this._rawVal}get rawVal(){return this._rawVal}get oldVal(){var s;return(s=ne==null?void 0:ne._getters)==null||s.add(this),this._oldVal}set val(s){var c;if((c=ne==null?void 0:ne._setters)==null||c.add(this),s!==this._rawVal){if(this._rawVal=s,this._bindings.length+this._listeners.length===0){this._oldVal=s;return}pe==null||pe.add(this),fe=Ke(fe,this,pn)}}set rawVal(s){if(s!==this._rawVal&&(this._rawVal=s,this._bindings.length+this._listeners.length===0)){this._oldVal=s;return}}}const sn=1e3,on={isConnected:!0};let fe,pe,ne,de,he,Ce={};function Ke(d,s,c,t){return d||setTimeout(c,t),(d??new Set).add(s)}function Oe(d,s,c){let t=ne;ne=s;const p=d(c);return ne=t,p}function _e(d){return d.filter(s=>{var c;return(c=s._dom)==null?void 0:c.isConnected})}function Le(d){he=Ke(he,d,()=>{var s;for(let c of he??[])c._bindings=_e(c._bindings),c._listeners=_e(c._listeners),c._bindings.length===0&&c._listeners.length===0&&((s=c._onDestroy)==null||s.call(c));he=void 0},sn)}function L(d,s){return new se(d,s)}function ie(d,s){const c={_getters:new Set,_setters:new Set},t={func:d,state:void 0,_dom:void 0},p=de;de=[];const k=Oe(d,c,s),A=(k??document)instanceof Node?k:new Text(String(k));for(const M of c._getters)c._setters.has(M)||(Le(M),M._bindings.push(t));for(let M of de)M._dom=A;return de=p,t._dom=A}function cn(d,s,c){const t={_getters:new Set,_setters:new Set};s.val=Oe(d,t,s.rawVal);const p={func:d,state:s,_dom:c};p._dom||(de?de.push(p):p._dom=on);for(let k of t._getters)t._setters.has(k)||(Le(k),k._listeners.push(p));return s}function ee(d,s){const c={_getters:new Set,_setters:new Set},t=L(Oe(d,c,void 0),s),p={func:d,state:t,_dom:void 0};p._dom||(de?de.push(p):p._dom=document.getRootNode().firstChild);for(let k of c._getters)c._setters.has(k)||(Le(k),k._listeners.push(p));return t}function ce(d,...s){for(const c of s.flat(1/0)){let t;c instanceof se?t=ie(()=>c.val):typeof c=="function"?t=ie(c):c instanceof Node?t=c:["boolean","string","number","bigint"].includes(typeof c)&&(t=String(c)),t!=null&&d.append(t)}return d}function ln(d,s,c,...t){var F;const p=Object.getPrototypeOf(c)===Object.prototype,[{is:k,...A},...M]=p?[c,t]:[{},[c,...t]],T=d?document.createElementNS(d,s,{is:k}):document.createElement(s,{is:k});for(let[R,x]of Object.entries(A)){const B=R.startsWith("$");R=B?R.slice(1):R;const J=w=>w?Object.getOwnPropertyDescriptor(w,R)??J(Object.getPrototypeOf(w)):void 0,m=`${s},${R}`,g=Ce[m]??(Ce[m]=(F=J(Object.getPrototypeOf(T)))==null?void 0:F.set),P=R.startsWith("on")?(w,C)=>{const z=R.slice(2);C&&T.removeEventListener(z,C),T.addEventListener(z,w)}:(g==null?void 0:g.bind(T))??T.setAttribute.bind(T,R);if(R.startsWith(Ve)){const w=R.slice(Ve.length);setTimeout(()=>{let C=rn(T,w);typeof x=="object"&&x instanceof se?x.val=C.val:typeof x=="function"?x(C):console.warn(`Context out property "${R}" on element <${s}> expects a function or State, but got ${typeof x}.`)});continue}if(R.startsWith(Pe)){ie(()=>(!B||typeof x=="object"&&x instanceof se&&x.val?tn(T,R.slice(Pe.length),x):dn(T,R.slice(Pe.length)),T));continue}if(!R.startsWith("on")&&typeof x=="function"&&(x=ee(x)),typeof x=="object"&&x instanceof se){ie(()=>(!B||x.val?P(x.val,x._oldVal):T.removeAttribute(R),T));continue}B?ie(()=>(x.val?P(x):T.removeAttribute(R),T)):P(x)}return ce(T,M)}function fn(d,s){if(!s)return d.remove();if(s!==d)return d.replaceWith(s)}function pn(){let d=0,s=[...fe??[]].filter(t=>t.rawVal!==t._oldVal);do{pe=new Set;const t=new Set(s.flatMap(p=>p._listeners=_e(p._listeners)));for(let p of t)cn(p.func,p.state,p._dom),p._dom=void 0}while(++d<100&&(s=[...pe??[]]).length>0);const c=[...fe??[]].filter(t=>t.rawVal!==t._oldVal);fe=void 0;for(let t of new Set(c.flatMap(p=>p._bindings=_e(p._bindings))))fn(t._dom,ie(t.func,t._dom)),t._dom=void 0;for(let t of c)t._oldVal=t.rawVal}function xe(d){return{get:(s,c)=>ln.bind(void 0,d,c)}}const h=new Proxy({},xe()),ae=new Proxy({},xe("http://www.w3.org/2000/svg"));new Proxy({},xe("http://www.w3.org/1998/Math/MathML"));function X(d){return typeof d=="function"?ee(d):d instanceof se?ee(()=>d.val):ee(()=>d)}function hn(d){return d instanceof se?d.val:typeof d=="function"?d():d}function Xe({class:d,...s},...c){const t=X(d);return h.span({class:()=>`badge flex items-center gap-1 select-none ${t.val}`,...s},c)}function te({class:d,...s},...c){const t=X(d);return h.button({tabIndex:0,class:()=>`button flex items-center gap-2 select-none ${t.val}`,...s},c)}function mn({icon:d,class:s,...c},...t){const p=X(s);return h.div({class:()=>`flex items-center variant-soft-outline text-mood-weak gap-2 ${p.val}`,...c},h.i({class:"text-mood"},d),t)}function Fe({value:d=L(!1),required:s,class:c,...t},...p){const k=X(c);return h.div({name:"Checkbox",onclick:()=>d.val=!d.val,"$data-selected":d,class:()=>{var A;return`flex cursor-pointer justify-between items-center gap-2 select-none group ${(A=k.val)==null?void 0:A.split(" ").filter(M=>!M.includes("variant")).join(" ")}`},...t},p,te({role:"checkbox",type:"button",tabIndex:0,class:()=>{var A;return`button size-5 !rounded-md aspect-square focus-visible:mood-accent !p-0.5 group-has-invalid:mood-critical ${(A=k.val)==null?void 0:A.split(" ").filter(M=>M.includes("variant")).join(" ")}`}},ae.svg({viewBox:"0 0 100 100",class:"size-4 not-group-data-selected:hidden",style:"stroke-linecap:round; stroke-linejoin:round;"},ae.path({d:"M20,60L40,80L80,20",class:"stroke-current stroke-[10] fill-none"}))),h.input({type:"checkbox",checked:d,required:s,hidden:!0}))}function gn({progress:d=50,indefinite:s=!1,class:c,...t},...p){const k=X(c),A=X(d),M=X(s);return h.div({name:"Circular Progress Bar",style:"--progress-bar-stroke-width: 2px",class:()=>`group inline-block relative min-w-[1em] min-h-[1em] rounded-full [.variant-outline]:ring-[length:var(--progress-bar-stroke-width)] [.variant-soft-outline]:ring-[length:var(--progress-bar-stroke-width)] !p-0 ${k.val}`,...t},ae.svg({style:"padding: calc(var(--progress-bar-stroke-width) * 0.5)",class:"absolute inset-0 -rotate-90",viewBox:"0 0 36 36"},ae.circle({style:()=>`cx: 50%; cy: 50%; r: 50%; stroke-dasharray: calc(1% * pi * ${A.val}) calc(1% * pi * (100 - ${A.val}));`,class:()=>`origin-center fill-none stroke-current stroke-[length:var(--progress-bar-stroke-width)] not-group-[.variant-filled]:text-mood-500 ${M.val?"animate-spin":""}`,"stroke-linecap":"round"})),h.span({class:"relative text-xs text-center m-[calc(2_*_var(--progress-bar-stroke-width))] aspect-square flex items-center justify-center h-full"},p))}function H({language:d,class:s,...c},...t){const p=X(s),k=h.pre({class:p.val,...c},h.code({class:`language-${d}`},t));return Prism.highlightAllUnder(k),k}function vn({class:d,...s},...c){const t=X(d);return h.form({class:()=>`flex flex-col gap-4 ${t.val}`,...s},c)}const Se=(d,...s)=>h.i(d,s);function D({content:d,class:s,...c},...t){const p=X(s);return h.div({name:"Label",class:()=>`flex flex-col gap-1 ${p.val}`},h.label({class:"flex items-center text-mini text-mood-weak",...c},d),t)}function _n(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var ge={exports:{}},bn=ge.exports,Ne;function wn(){return Ne||(Ne=1,function(d){(function(){function s(e){var a={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",type:"string"},rawPrefixHeaderId:{defaultValue:!1,describe:'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',type:"boolean"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},rawHeaderId:{defaultValue:!1,describe:`Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,describe:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,describe:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,describe:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,describe:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,describe:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",describe:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,describe:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,describe:"Open all links in new windows",type:"boolean"},backslashEscapesHTMLTags:{defaultValue:!1,describe:"Support for HTML Tag escaping. ex: <div>foo</div>",type:"boolean"},emoji:{defaultValue:!1,describe:"Enable emoji support. Ex: `this is a :smile: emoji`",type:"boolean"},underline:{defaultValue:!1,describe:"Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",type:"boolean"},ellipsis:{defaultValue:!0,describe:"Replaces three dots with the ellipsis unicode character",type:"boolean"},completeHTMLDocument:{defaultValue:!1,describe:"Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",type:"boolean"},metadata:{defaultValue:!1,describe:"Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",type:"boolean"},splitAdjacentBlockquotes:{defaultValue:!1,describe:"Split adjacent blockquote blocks",type:"boolean"}};if(e===!1)return JSON.parse(JSON.stringify(a));var n={};for(var r in a)a.hasOwnProperty(r)&&(n[r]=a[r].defaultValue);return n}function c(){var e=s(!0),a={};for(var n in e)e.hasOwnProperty(n)&&(a[n]=!0);return a}var t={},p={},k={},A=s(!0),M="vanilla",T={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0,backslashEscapesHTMLTags:!0,emoji:!0,splitAdjacentBlockquotes:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:s(!0),allOn:c()};t.helper={},t.extensions={},t.setOption=function(e,a){return A[e]=a,this},t.getOption=function(e){return A[e]},t.getOptions=function(){return A},t.resetOptions=function(){A=s(!0)},t.setFlavor=function(e){if(!T.hasOwnProperty(e))throw Error(e+" flavor was not found");t.resetOptions();var a=T[e];M=e;for(var n in a)a.hasOwnProperty(n)&&(A[n]=a[n])},t.getFlavor=function(){return M},t.getFlavorOptions=function(e){if(T.hasOwnProperty(e))return T[e]},t.getDefaultOptions=function(e){return s(e)},t.subParser=function(e,a){if(t.helper.isString(e))if(typeof a<"u")p[e]=a;else{if(p.hasOwnProperty(e))return p[e];throw Error("SubParser named "+e+" not registered!")}},t.extension=function(e,a){if(!t.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=t.helper.stdExtName(e),t.helper.isUndefined(a)){if(!k.hasOwnProperty(e))throw Error("Extension named "+e+" is not registered!");return k[e]}else{typeof a=="function"&&(a=a()),t.helper.isArray(a)||(a=[a]);var n=F(a,e);if(n.valid)k[e]=a;else throw Error(n.error)}},t.getAllExtensions=function(){return k},t.removeExtension=function(e){delete k[e]},t.resetExtensions=function(){k={}};function F(e,a){var n=a?"Error in "+a+" extension->":"Error in unnamed extension",r={valid:!0,error:""};t.helper.isArray(e)||(e=[e]);for(var i=0;i<e.length;++i){var l=n+" sub-extension "+i+": ",o=e[i];if(typeof o!="object")return r.valid=!1,r.error=l+"must be an object, but "+typeof o+" given",r;if(!t.helper.isString(o.type))return r.valid=!1,r.error=l+'property "type" must be a string, but '+typeof o.type+" given",r;var f=o.type=o.type.toLowerCase();if(f==="language"&&(f=o.type="lang"),f==="html"&&(f=o.type="output"),f!=="lang"&&f!=="output"&&f!=="listener")return r.valid=!1,r.error=l+"type "+f+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',r;if(f==="listener"){if(t.helper.isUndefined(o.listeners))return r.valid=!1,r.error=l+'. Extensions of type "listener" must have a property called "listeners"',r}else if(t.helper.isUndefined(o.filter)&&t.helper.isUndefined(o.regex))return r.valid=!1,r.error=l+f+' extensions must define either a "regex" property or a "filter" method',r;if(o.listeners){if(typeof o.listeners!="object")return r.valid=!1,r.error=l+'"listeners" property must be an object but '+typeof o.listeners+" given",r;for(var S in o.listeners)if(o.listeners.hasOwnProperty(S)&&typeof o.listeners[S]!="function")return r.valid=!1,r.error=l+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+S+" must be a function but "+typeof o.listeners[S]+" given",r}if(o.filter){if(typeof o.filter!="function")return r.valid=!1,r.error=l+'"filter" must be a function, but '+typeof o.filter+" given",r}else if(o.regex){if(t.helper.isString(o.regex)&&(o.regex=new RegExp(o.regex,"g")),!(o.regex instanceof RegExp))return r.valid=!1,r.error=l+'"regex" property must either be a string or a RegExp object, but '+typeof o.regex+" given",r;if(t.helper.isUndefined(o.replace))return r.valid=!1,r.error=l+'"regex" extensions must implement a replace string or function',r}}return r}t.validateExtension=function(e){var a=F(e,null);return a.valid?!0:(console.warn(a.error),!1)},t.hasOwnProperty("helper")||(t.helper={}),t.helper.isString=function(e){return typeof e=="string"||e instanceof String},t.helper.isFunction=function(e){var a={};return e&&a.toString.call(e)==="[object Function]"},t.helper.isArray=function(e){return Array.isArray(e)},t.helper.isUndefined=function(e){return typeof e>"u"},t.helper.forEach=function(e,a){if(t.helper.isUndefined(e))throw new Error("obj param is required");if(t.helper.isUndefined(a))throw new Error("callback param is required");if(!t.helper.isFunction(a))throw new Error("callback param must be a function/closure");if(typeof e.forEach=="function")e.forEach(a);else if(t.helper.isArray(e))for(var n=0;n<e.length;n++)a(e[n],n,e);else if(typeof e=="object")for(var r in e)e.hasOwnProperty(r)&&a(e[r],r,e);else throw new Error("obj does not seem to be an array or an iterable object")},t.helper.stdExtName=function(e){return e.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()};function R(e,a){var n=a.charCodeAt(0);return"¨E"+n+"E"}t.helper.escapeCharactersCallback=R,t.helper.escapeCharacters=function(e,a,n){var r="(["+a.replace(/([\[\]\\])/g,"\\$1")+"])";n&&(r="\\\\"+r);var i=new RegExp(r,"g");return e=e.replace(i,R),e},t.helper.unescapeHTMLEntities=function(e){return e.replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")};var x=function(e,a,n,r){var i=r||"",l=i.indexOf("g")>-1,o=new RegExp(a+"|"+n,"g"+i.replace(/g/g,"")),f=new RegExp(a,i.replace(/g/g,"")),S=[],y,v,b,u,_;do for(y=0;b=o.exec(e);)if(f.test(b[0]))y++||(v=o.lastIndex,u=v-b[0].length);else if(y&&!--y){_=b.index+b[0].length;var j={left:{start:u,end:v},match:{start:v,end:b.index},right:{start:b.index,end:_},wholeMatch:{start:u,end:_}};if(S.push(j),!l)return S}while(y&&(o.lastIndex=v));return S};t.helper.matchRecursiveRegExp=function(e,a,n,r){for(var i=x(e,a,n,r),l=[],o=0;o<i.length;++o)l.push([e.slice(i[o].wholeMatch.start,i[o].wholeMatch.end),e.slice(i[o].match.start,i[o].match.end),e.slice(i[o].left.start,i[o].left.end),e.slice(i[o].right.start,i[o].right.end)]);return l},t.helper.replaceRecursiveRegExp=function(e,a,n,r,i){if(!t.helper.isFunction(a)){var l=a;a=function(){return l}}var o=x(e,n,r,i),f=e,S=o.length;if(S>0){var y=[];o[0].wholeMatch.start!==0&&y.push(e.slice(0,o[0].wholeMatch.start));for(var v=0;v<S;++v)y.push(a(e.slice(o[v].wholeMatch.start,o[v].wholeMatch.end),e.slice(o[v].match.start,o[v].match.end),e.slice(o[v].left.start,o[v].left.end),e.slice(o[v].right.start,o[v].right.end))),v<S-1&&y.push(e.slice(o[v].wholeMatch.end,o[v+1].wholeMatch.start));o[S-1].wholeMatch.end<e.length&&y.push(e.slice(o[S-1].wholeMatch.end)),f=y.join("")}return f},t.helper.regexIndexOf=function(e,a,n){if(!t.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(!(a instanceof RegExp))throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";var r=e.substring(n||0).search(a);return r>=0?r+(n||0):r},t.helper.splitAtIndex=function(e,a){if(!t.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";return[e.substring(0,a),e.substring(a)]},t.helper.encodeEmailAddress=function(e){var a=[function(n){return"&#"+n.charCodeAt(0)+";"},function(n){return"&#x"+n.charCodeAt(0).toString(16)+";"},function(n){return n}];return e=e.replace(/./g,function(n){if(n==="@")n=a[Math.floor(Math.random()*2)](n);else{var r=Math.random();n=r>.9?a[2](n):r>.45?a[1](n):a[0](n)}return n}),e},t.helper.padEnd=function(a,n,r){return n=n>>0,r=String(r||" "),a.length>n?String(a):(n=n-a.length,n>r.length&&(r+=r.repeat(n/r.length)),String(a)+r.slice(0,n))},typeof console>"u"&&(console={warn:function(e){alert(e)},log:function(e){alert(e)},error:function(e){throw e}}),t.helper.regexes={asteriskDashAndColon:/([*_:~])/g},t.helper.emojis={"+1":"👍","-1":"👎",100:"💯",1234:"🔢","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉","8ball":"🎱",a:"🅰️",ab:"🆎",abc:"🔤",abcd:"🔡",accept:"🉑",aerial_tramway:"🚡",airplane:"✈️",alarm_clock:"⏰",alembic:"⚗️",alien:"👽",ambulance:"🚑",amphora:"🏺",anchor:"⚓️",angel:"👼",anger:"💢",angry:"😠",anguished:"😧",ant:"🐜",apple:"🍎",aquarius:"♒️",aries:"♈️",arrow_backward:"◀️",arrow_double_down:"⏬",arrow_double_up:"⏫",arrow_down:"⬇️",arrow_down_small:"🔽",arrow_forward:"▶️",arrow_heading_down:"⤵️",arrow_heading_up:"⤴️",arrow_left:"⬅️",arrow_lower_left:"↙️",arrow_lower_right:"↘️",arrow_right:"➡️",arrow_right_hook:"↪️",arrow_up:"⬆️",arrow_up_down:"↕️",arrow_up_small:"🔼",arrow_upper_left:"↖️",arrow_upper_right:"↗️",arrows_clockwise:"🔃",arrows_counterclockwise:"🔄",art:"🎨",articulated_lorry:"🚛",artificial_satellite:"🛰",astonished:"😲",athletic_shoe:"👟",atm:"🏧",atom_symbol:"⚛️",avocado:"🥑",b:"🅱️",baby:"👶",baby_bottle:"🍼",baby_chick:"🐤",baby_symbol:"🚼",back:"🔙",bacon:"🥓",badminton:"🏸",baggage_claim:"🛄",baguette_bread:"🥖",balance_scale:"⚖️",balloon:"🎈",ballot_box:"🗳",ballot_box_with_check:"☑️",bamboo:"🎍",banana:"🍌",bangbang:"‼️",bank:"🏦",bar_chart:"📊",barber:"💈",baseball:"⚾️",basketball:"🏀",basketball_man:"⛹️",basketball_woman:"⛹️&zwj;♀️",bat:"🦇",bath:"🛀",bathtub:"🛁",battery:"🔋",beach_umbrella:"🏖",bear:"🐻",bed:"🛏",bee:"🐝",beer:"🍺",beers:"🍻",beetle:"🐞",beginner:"🔰",bell:"🔔",bellhop_bell:"🛎",bento:"🍱",biking_man:"🚴",bike:"🚲",biking_woman:"🚴&zwj;♀️",bikini:"👙",biohazard:"☣️",bird:"🐦",birthday:"🎂",black_circle:"⚫️",black_flag:"🏴",black_heart:"🖤",black_joker:"🃏",black_large_square:"⬛️",black_medium_small_square:"◾️",black_medium_square:"◼️",black_nib:"✒️",black_small_square:"▪️",black_square_button:"🔲",blonde_man:"👱",blonde_woman:"👱&zwj;♀️",blossom:"🌼",blowfish:"🐡",blue_book:"📘",blue_car:"🚙",blue_heart:"💙",blush:"😊",boar:"🐗",boat:"⛵️",bomb:"💣",book:"📖",bookmark:"🔖",bookmark_tabs:"📑",books:"📚",boom:"💥",boot:"👢",bouquet:"💐",bowing_man:"🙇",bow_and_arrow:"🏹",bowing_woman:"🙇&zwj;♀️",bowling:"🎳",boxing_glove:"🥊",boy:"👦",bread:"🍞",bride_with_veil:"👰",bridge_at_night:"🌉",briefcase:"💼",broken_heart:"💔",bug:"🐛",building_construction:"🏗",bulb:"💡",bullettrain_front:"🚅",bullettrain_side:"🚄",burrito:"🌯",bus:"🚌",business_suit_levitating:"🕴",busstop:"🚏",bust_in_silhouette:"👤",busts_in_silhouette:"👥",butterfly:"🦋",cactus:"🌵",cake:"🍰",calendar:"📆",call_me_hand:"🤙",calling:"📲",camel:"🐫",camera:"📷",camera_flash:"📸",camping:"🏕",cancer:"♋️",candle:"🕯",candy:"🍬",canoe:"🛶",capital_abcd:"🔠",capricorn:"♑️",car:"🚗",card_file_box:"🗃",card_index:"📇",card_index_dividers:"🗂",carousel_horse:"🎠",carrot:"🥕",cat:"🐱",cat2:"🐈",cd:"💿",chains:"⛓",champagne:"🍾",chart:"💹",chart_with_downwards_trend:"📉",chart_with_upwards_trend:"📈",checkered_flag:"🏁",cheese:"🧀",cherries:"🍒",cherry_blossom:"🌸",chestnut:"🌰",chicken:"🐔",children_crossing:"🚸",chipmunk:"🐿",chocolate_bar:"🍫",christmas_tree:"🎄",church:"⛪️",cinema:"🎦",circus_tent:"🎪",city_sunrise:"🌇",city_sunset:"🌆",cityscape:"🏙",cl:"🆑",clamp:"🗜",clap:"👏",clapper:"🎬",classical_building:"🏛",clinking_glasses:"🥂",clipboard:"📋",clock1:"🕐",clock10:"🕙",clock1030:"🕥",clock11:"🕚",clock1130:"🕦",clock12:"🕛",clock1230:"🕧",clock130:"🕜",clock2:"🕑",clock230:"🕝",clock3:"🕒",clock330:"🕞",clock4:"🕓",clock430:"🕟",clock5:"🕔",clock530:"🕠",clock6:"🕕",clock630:"🕡",clock7:"🕖",clock730:"🕢",clock8:"🕗",clock830:"🕣",clock9:"🕘",clock930:"🕤",closed_book:"📕",closed_lock_with_key:"🔐",closed_umbrella:"🌂",cloud:"☁️",cloud_with_lightning:"🌩",cloud_with_lightning_and_rain:"⛈",cloud_with_rain:"🌧",cloud_with_snow:"🌨",clown_face:"🤡",clubs:"♣️",cocktail:"🍸",coffee:"☕️",coffin:"⚰️",cold_sweat:"😰",comet:"☄️",computer:"💻",computer_mouse:"🖱",confetti_ball:"🎊",confounded:"😖",confused:"😕",congratulations:"㊗️",construction:"🚧",construction_worker_man:"👷",construction_worker_woman:"👷&zwj;♀️",control_knobs:"🎛",convenience_store:"🏪",cookie:"🍪",cool:"🆒",policeman:"👮",copyright:"©️",corn:"🌽",couch_and_lamp:"🛋",couple:"👫",couple_with_heart_woman_man:"💑",couple_with_heart_man_man:"👨&zwj;❤️&zwj;👨",couple_with_heart_woman_woman:"👩&zwj;❤️&zwj;👩",couplekiss_man_man:"👨&zwj;❤️&zwj;💋&zwj;👨",couplekiss_man_woman:"💏",couplekiss_woman_woman:"👩&zwj;❤️&zwj;💋&zwj;👩",cow:"🐮",cow2:"🐄",cowboy_hat_face:"🤠",crab:"🦀",crayon:"🖍",credit_card:"💳",crescent_moon:"🌙",cricket:"🏏",crocodile:"🐊",croissant:"🥐",crossed_fingers:"🤞",crossed_flags:"🎌",crossed_swords:"⚔️",crown:"👑",cry:"😢",crying_cat_face:"😿",crystal_ball:"🔮",cucumber:"🥒",cupid:"💘",curly_loop:"➰",currency_exchange:"💱",curry:"🍛",custard:"🍮",customs:"🛃",cyclone:"🌀",dagger:"🗡",dancer:"💃",dancing_women:"👯",dancing_men:"👯&zwj;♂️",dango:"🍡",dark_sunglasses:"🕶",dart:"🎯",dash:"💨",date:"📅",deciduous_tree:"🌳",deer:"🦌",department_store:"🏬",derelict_house:"🏚",desert:"🏜",desert_island:"🏝",desktop_computer:"🖥",male_detective:"🕵️",diamond_shape_with_a_dot_inside:"💠",diamonds:"♦️",disappointed:"😞",disappointed_relieved:"😥",dizzy:"💫",dizzy_face:"😵",do_not_litter:"🚯",dog:"🐶",dog2:"🐕",dollar:"💵",dolls:"🎎",dolphin:"🐬",door:"🚪",doughnut:"🍩",dove:"🕊",dragon:"🐉",dragon_face:"🐲",dress:"👗",dromedary_camel:"🐪",drooling_face:"🤤",droplet:"💧",drum:"🥁",duck:"🦆",dvd:"📀","e-mail":"📧",eagle:"🦅",ear:"👂",ear_of_rice:"🌾",earth_africa:"🌍",earth_americas:"🌎",earth_asia:"🌏",egg:"🥚",eggplant:"🍆",eight_pointed_black_star:"✴️",eight_spoked_asterisk:"✳️",electric_plug:"🔌",elephant:"🐘",email:"✉️",end:"🔚",envelope_with_arrow:"📩",euro:"💶",european_castle:"🏰",european_post_office:"🏤",evergreen_tree:"🌲",exclamation:"❗️",expressionless:"😑",eye:"👁",eye_speech_bubble:"👁&zwj;🗨",eyeglasses:"👓",eyes:"👀",face_with_head_bandage:"🤕",face_with_thermometer:"🤒",fist_oncoming:"👊",factory:"🏭",fallen_leaf:"🍂",family_man_woman_boy:"👪",family_man_boy:"👨&zwj;👦",family_man_boy_boy:"👨&zwj;👦&zwj;👦",family_man_girl:"👨&zwj;👧",family_man_girl_boy:"👨&zwj;👧&zwj;👦",family_man_girl_girl:"👨&zwj;👧&zwj;👧",family_man_man_boy:"👨&zwj;👨&zwj;👦",family_man_man_boy_boy:"👨&zwj;👨&zwj;👦&zwj;👦",family_man_man_girl:"👨&zwj;👨&zwj;👧",family_man_man_girl_boy:"👨&zwj;👨&zwj;👧&zwj;👦",family_man_man_girl_girl:"👨&zwj;👨&zwj;👧&zwj;👧",family_man_woman_boy_boy:"👨&zwj;👩&zwj;👦&zwj;👦",family_man_woman_girl:"👨&zwj;👩&zwj;👧",family_man_woman_girl_boy:"👨&zwj;👩&zwj;👧&zwj;👦",family_man_woman_girl_girl:"👨&zwj;👩&zwj;👧&zwj;👧",family_woman_boy:"👩&zwj;👦",family_woman_boy_boy:"👩&zwj;👦&zwj;👦",family_woman_girl:"👩&zwj;👧",family_woman_girl_boy:"👩&zwj;👧&zwj;👦",family_woman_girl_girl:"👩&zwj;👧&zwj;👧",family_woman_woman_boy:"👩&zwj;👩&zwj;👦",family_woman_woman_boy_boy:"👩&zwj;👩&zwj;👦&zwj;👦",family_woman_woman_girl:"👩&zwj;👩&zwj;👧",family_woman_woman_girl_boy:"👩&zwj;👩&zwj;👧&zwj;👦",family_woman_woman_girl_girl:"👩&zwj;👩&zwj;👧&zwj;👧",fast_forward:"⏩",fax:"📠",fearful:"😨",feet:"🐾",female_detective:"🕵️&zwj;♀️",ferris_wheel:"🎡",ferry:"⛴",field_hockey:"🏑",file_cabinet:"🗄",file_folder:"📁",film_projector:"📽",film_strip:"🎞",fire:"🔥",fire_engine:"🚒",fireworks:"🎆",first_quarter_moon:"🌓",first_quarter_moon_with_face:"🌛",fish:"🐟",fish_cake:"🍥",fishing_pole_and_fish:"🎣",fist_raised:"✊",fist_left:"🤛",fist_right:"🤜",flags:"🎏",flashlight:"🔦",fleur_de_lis:"⚜️",flight_arrival:"🛬",flight_departure:"🛫",floppy_disk:"💾",flower_playing_cards:"🎴",flushed:"😳",fog:"🌫",foggy:"🌁",football:"🏈",footprints:"👣",fork_and_knife:"🍴",fountain:"⛲️",fountain_pen:"🖋",four_leaf_clover:"🍀",fox_face:"🦊",framed_picture:"🖼",free:"🆓",fried_egg:"🍳",fried_shrimp:"🍤",fries:"🍟",frog:"🐸",frowning:"😦",frowning_face:"☹️",frowning_man:"🙍&zwj;♂️",frowning_woman:"🙍",middle_finger:"🖕",fuelpump:"⛽️",full_moon:"🌕",full_moon_with_face:"🌝",funeral_urn:"⚱️",game_die:"🎲",gear:"⚙️",gem:"💎",gemini:"♊️",ghost:"👻",gift:"🎁",gift_heart:"💝",girl:"👧",globe_with_meridians:"🌐",goal_net:"🥅",goat:"🐐",golf:"⛳️",golfing_man:"🏌️",golfing_woman:"🏌️&zwj;♀️",gorilla:"🦍",grapes:"🍇",green_apple:"🍏",green_book:"📗",green_heart:"💚",green_salad:"🥗",grey_exclamation:"❕",grey_question:"❔",grimacing:"😬",grin:"😁",grinning:"😀",guardsman:"💂",guardswoman:"💂&zwj;♀️",guitar:"🎸",gun:"🔫",haircut_woman:"💇",haircut_man:"💇&zwj;♂️",hamburger:"🍔",hammer:"🔨",hammer_and_pick:"⚒",hammer_and_wrench:"🛠",hamster:"🐹",hand:"✋",handbag:"👜",handshake:"🤝",hankey:"💩",hatched_chick:"🐥",hatching_chick:"🐣",headphones:"🎧",hear_no_evil:"🙉",heart:"❤️",heart_decoration:"💟",heart_eyes:"😍",heart_eyes_cat:"😻",heartbeat:"💓",heartpulse:"💗",hearts:"♥️",heavy_check_mark:"✔️",heavy_division_sign:"➗",heavy_dollar_sign:"💲",heavy_heart_exclamation:"❣️",heavy_minus_sign:"➖",heavy_multiplication_x:"✖️",heavy_plus_sign:"➕",helicopter:"🚁",herb:"🌿",hibiscus:"🌺",high_brightness:"🔆",high_heel:"👠",hocho:"🔪",hole:"🕳",honey_pot:"🍯",horse:"🐴",horse_racing:"🏇",hospital:"🏥",hot_pepper:"🌶",hotdog:"🌭",hotel:"🏨",hotsprings:"♨️",hourglass:"⌛️",hourglass_flowing_sand:"⏳",house:"🏠",house_with_garden:"🏡",houses:"🏘",hugs:"🤗",hushed:"😯",ice_cream:"🍨",ice_hockey:"🏒",ice_skate:"⛸",icecream:"🍦",id:"🆔",ideograph_advantage:"🉐",imp:"👿",inbox_tray:"📥",incoming_envelope:"📨",tipping_hand_woman:"💁",information_source:"ℹ️",innocent:"😇",interrobang:"⁉️",iphone:"📱",izakaya_lantern:"🏮",jack_o_lantern:"🎃",japan:"🗾",japanese_castle:"🏯",japanese_goblin:"👺",japanese_ogre:"👹",jeans:"👖",joy:"😂",joy_cat:"😹",joystick:"🕹",kaaba:"🕋",key:"🔑",keyboard:"⌨️",keycap_ten:"🔟",kick_scooter:"🛴",kimono:"👘",kiss:"💋",kissing:"😗",kissing_cat:"😽",kissing_closed_eyes:"😚",kissing_heart:"😘",kissing_smiling_eyes:"😙",kiwi_fruit:"🥝",koala:"🐨",koko:"🈁",label:"🏷",large_blue_circle:"🔵",large_blue_diamond:"🔷",large_orange_diamond:"🔶",last_quarter_moon:"🌗",last_quarter_moon_with_face:"🌜",latin_cross:"✝️",laughing:"😆",leaves:"🍃",ledger:"📒",left_luggage:"🛅",left_right_arrow:"↔️",leftwards_arrow_with_hook:"↩️",lemon:"🍋",leo:"♌️",leopard:"🐆",level_slider:"🎚",libra:"♎️",light_rail:"🚈",link:"🔗",lion:"🦁",lips:"👄",lipstick:"💄",lizard:"🦎",lock:"🔒",lock_with_ink_pen:"🔏",lollipop:"🍭",loop:"➿",loud_sound:"🔊",loudspeaker:"📢",love_hotel:"🏩",love_letter:"💌",low_brightness:"🔅",lying_face:"🤥",m:"Ⓜ️",mag:"🔍",mag_right:"🔎",mahjong:"🀄️",mailbox:"📫",mailbox_closed:"📪",mailbox_with_mail:"📬",mailbox_with_no_mail:"📭",man:"👨",man_artist:"👨&zwj;🎨",man_astronaut:"👨&zwj;🚀",man_cartwheeling:"🤸&zwj;♂️",man_cook:"👨&zwj;🍳",man_dancing:"🕺",man_facepalming:"🤦&zwj;♂️",man_factory_worker:"👨&zwj;🏭",man_farmer:"👨&zwj;🌾",man_firefighter:"👨&zwj;🚒",man_health_worker:"👨&zwj;⚕️",man_in_tuxedo:"🤵",man_judge:"👨&zwj;⚖️",man_juggling:"🤹&zwj;♂️",man_mechanic:"👨&zwj;🔧",man_office_worker:"👨&zwj;💼",man_pilot:"👨&zwj;✈️",man_playing_handball:"🤾&zwj;♂️",man_playing_water_polo:"🤽&zwj;♂️",man_scientist:"👨&zwj;🔬",man_shrugging:"🤷&zwj;♂️",man_singer:"👨&zwj;🎤",man_student:"👨&zwj;🎓",man_teacher:"👨&zwj;🏫",man_technologist:"👨&zwj;💻",man_with_gua_pi_mao:"👲",man_with_turban:"👳",tangerine:"🍊",mans_shoe:"👞",mantelpiece_clock:"🕰",maple_leaf:"🍁",martial_arts_uniform:"🥋",mask:"😷",massage_woman:"💆",massage_man:"💆&zwj;♂️",meat_on_bone:"🍖",medal_military:"🎖",medal_sports:"🏅",mega:"📣",melon:"🍈",memo:"📝",men_wrestling:"🤼&zwj;♂️",menorah:"🕎",mens:"🚹",metal:"🤘",metro:"🚇",microphone:"🎤",microscope:"🔬",milk_glass:"🥛",milky_way:"🌌",minibus:"🚐",minidisc:"💽",mobile_phone_off:"📴",money_mouth_face:"🤑",money_with_wings:"💸",moneybag:"💰",monkey:"🐒",monkey_face:"🐵",monorail:"🚝",moon:"🌔",mortar_board:"🎓",mosque:"🕌",motor_boat:"🛥",motor_scooter:"🛵",motorcycle:"🏍",motorway:"🛣",mount_fuji:"🗻",mountain:"⛰",mountain_biking_man:"🚵",mountain_biking_woman:"🚵&zwj;♀️",mountain_cableway:"🚠",mountain_railway:"🚞",mountain_snow:"🏔",mouse:"🐭",mouse2:"🐁",movie_camera:"🎥",moyai:"🗿",mrs_claus:"🤶",muscle:"💪",mushroom:"🍄",musical_keyboard:"🎹",musical_note:"🎵",musical_score:"🎼",mute:"🔇",nail_care:"💅",name_badge:"📛",national_park:"🏞",nauseated_face:"🤢",necktie:"👔",negative_squared_cross_mark:"❎",nerd_face:"🤓",neutral_face:"😐",new:"🆕",new_moon:"🌑",new_moon_with_face:"🌚",newspaper:"📰",newspaper_roll:"🗞",next_track_button:"⏭",ng:"🆖",no_good_man:"🙅&zwj;♂️",no_good_woman:"🙅",night_with_stars:"🌃",no_bell:"🔕",no_bicycles:"🚳",no_entry:"⛔️",no_entry_sign:"🚫",no_mobile_phones:"📵",no_mouth:"😶",no_pedestrians:"🚷",no_smoking:"🚭","non-potable_water":"🚱",nose:"👃",notebook:"📓",notebook_with_decorative_cover:"📔",notes:"🎶",nut_and_bolt:"🔩",o:"⭕️",o2:"🅾️",ocean:"🌊",octopus:"🐙",oden:"🍢",office:"🏢",oil_drum:"🛢",ok:"🆗",ok_hand:"👌",ok_man:"🙆&zwj;♂️",ok_woman:"🙆",old_key:"🗝",older_man:"👴",older_woman:"👵",om:"🕉",on:"🔛",oncoming_automobile:"🚘",oncoming_bus:"🚍",oncoming_police_car:"🚔",oncoming_taxi:"🚖",open_file_folder:"📂",open_hands:"👐",open_mouth:"😮",open_umbrella:"☂️",ophiuchus:"⛎",orange_book:"📙",orthodox_cross:"☦️",outbox_tray:"📤",owl:"🦉",ox:"🐂",package:"📦",page_facing_up:"📄",page_with_curl:"📃",pager:"📟",paintbrush:"🖌",palm_tree:"🌴",pancakes:"🥞",panda_face:"🐼",paperclip:"📎",paperclips:"🖇",parasol_on_ground:"⛱",parking:"🅿️",part_alternation_mark:"〽️",partly_sunny:"⛅️",passenger_ship:"🛳",passport_control:"🛂",pause_button:"⏸",peace_symbol:"☮️",peach:"🍑",peanuts:"🥜",pear:"🍐",pen:"🖊",pencil2:"✏️",penguin:"🐧",pensive:"😔",performing_arts:"🎭",persevere:"😣",person_fencing:"🤺",pouting_woman:"🙎",phone:"☎️",pick:"⛏",pig:"🐷",pig2:"🐖",pig_nose:"🐽",pill:"💊",pineapple:"🍍",ping_pong:"🏓",pisces:"♓️",pizza:"🍕",place_of_worship:"🛐",plate_with_cutlery:"🍽",play_or_pause_button:"⏯",point_down:"👇",point_left:"👈",point_right:"👉",point_up:"☝️",point_up_2:"👆",police_car:"🚓",policewoman:"👮&zwj;♀️",poodle:"🐩",popcorn:"🍿",post_office:"🏣",postal_horn:"📯",postbox:"📮",potable_water:"🚰",potato:"🥔",pouch:"👝",poultry_leg:"🍗",pound:"💷",rage:"😡",pouting_cat:"😾",pouting_man:"🙎&zwj;♂️",pray:"🙏",prayer_beads:"📿",pregnant_woman:"🤰",previous_track_button:"⏮",prince:"🤴",princess:"👸",printer:"🖨",purple_heart:"💜",purse:"👛",pushpin:"📌",put_litter_in_its_place:"🚮",question:"❓",rabbit:"🐰",rabbit2:"🐇",racehorse:"🐎",racing_car:"🏎",radio:"📻",radio_button:"🔘",radioactive:"☢️",railway_car:"🚃",railway_track:"🛤",rainbow:"🌈",rainbow_flag:"🏳️&zwj;🌈",raised_back_of_hand:"🤚",raised_hand_with_fingers_splayed:"🖐",raised_hands:"🙌",raising_hand_woman:"🙋",raising_hand_man:"🙋&zwj;♂️",ram:"🐏",ramen:"🍜",rat:"🐀",record_button:"⏺",recycle:"♻️",red_circle:"🔴",registered:"®️",relaxed:"☺️",relieved:"😌",reminder_ribbon:"🎗",repeat:"🔁",repeat_one:"🔂",rescue_worker_helmet:"⛑",restroom:"🚻",revolving_hearts:"💞",rewind:"⏪",rhinoceros:"🦏",ribbon:"🎀",rice:"🍚",rice_ball:"🍙",rice_cracker:"🍘",rice_scene:"🎑",right_anger_bubble:"🗯",ring:"💍",robot:"🤖",rocket:"🚀",rofl:"🤣",roll_eyes:"🙄",roller_coaster:"🎢",rooster:"🐓",rose:"🌹",rosette:"🏵",rotating_light:"🚨",round_pushpin:"📍",rowing_man:"🚣",rowing_woman:"🚣&zwj;♀️",rugby_football:"🏉",running_man:"🏃",running_shirt_with_sash:"🎽",running_woman:"🏃&zwj;♀️",sa:"🈂️",sagittarius:"♐️",sake:"🍶",sandal:"👡",santa:"🎅",satellite:"📡",saxophone:"🎷",school:"🏫",school_satchel:"🎒",scissors:"✂️",scorpion:"🦂",scorpius:"♏️",scream:"😱",scream_cat:"🙀",scroll:"📜",seat:"💺",secret:"㊙️",see_no_evil:"🙈",seedling:"🌱",selfie:"🤳",shallow_pan_of_food:"🥘",shamrock:"☘️",shark:"🦈",shaved_ice:"🍧",sheep:"🐑",shell:"🐚",shield:"🛡",shinto_shrine:"⛩",ship:"🚢",shirt:"👕",shopping:"🛍",shopping_cart:"🛒",shower:"🚿",shrimp:"🦐",signal_strength:"📶",six_pointed_star:"🔯",ski:"🎿",skier:"⛷",skull:"💀",skull_and_crossbones:"☠️",sleeping:"😴",sleeping_bed:"🛌",sleepy:"😪",slightly_frowning_face:"🙁",slightly_smiling_face:"🙂",slot_machine:"🎰",small_airplane:"🛩",small_blue_diamond:"🔹",small_orange_diamond:"🔸",small_red_triangle:"🔺",small_red_triangle_down:"🔻",smile:"😄",smile_cat:"😸",smiley:"😃",smiley_cat:"😺",smiling_imp:"😈",smirk:"😏",smirk_cat:"😼",smoking:"🚬",snail:"🐌",snake:"🐍",sneezing_face:"🤧",snowboarder:"🏂",snowflake:"❄️",snowman:"⛄️",snowman_with_snow:"☃️",sob:"😭",soccer:"⚽️",soon:"🔜",sos:"🆘",sound:"🔉",space_invader:"👾",spades:"♠️",spaghetti:"🍝",sparkle:"❇️",sparkler:"🎇",sparkles:"✨",sparkling_heart:"💖",speak_no_evil:"🙊",speaker:"🔈",speaking_head:"🗣",speech_balloon:"💬",speedboat:"🚤",spider:"🕷",spider_web:"🕸",spiral_calendar:"🗓",spiral_notepad:"🗒",spoon:"🥄",squid:"🦑",stadium:"🏟",star:"⭐️",star2:"🌟",star_and_crescent:"☪️",star_of_david:"✡️",stars:"🌠",station:"🚉",statue_of_liberty:"🗽",steam_locomotive:"🚂",stew:"🍲",stop_button:"⏹",stop_sign:"🛑",stopwatch:"⏱",straight_ruler:"📏",strawberry:"🍓",stuck_out_tongue:"😛",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue_winking_eye:"😜",studio_microphone:"🎙",stuffed_flatbread:"🥙",sun_behind_large_cloud:"🌥",sun_behind_rain_cloud:"🌦",sun_behind_small_cloud:"🌤",sun_with_face:"🌞",sunflower:"🌻",sunglasses:"😎",sunny:"☀️",sunrise:"🌅",sunrise_over_mountains:"🌄",surfing_man:"🏄",surfing_woman:"🏄&zwj;♀️",sushi:"🍣",suspension_railway:"🚟",sweat:"😓",sweat_drops:"💦",sweat_smile:"😅",sweet_potato:"🍠",swimming_man:"🏊",swimming_woman:"🏊&zwj;♀️",symbols:"🔣",synagogue:"🕍",syringe:"💉",taco:"🌮",tada:"🎉",tanabata_tree:"🎋",taurus:"♉️",taxi:"🚕",tea:"🍵",telephone_receiver:"📞",telescope:"🔭",tennis:"🎾",tent:"⛺️",thermometer:"🌡",thinking:"🤔",thought_balloon:"💭",ticket:"🎫",tickets:"🎟",tiger:"🐯",tiger2:"🐅",timer_clock:"⏲",tipping_hand_man:"💁&zwj;♂️",tired_face:"😫",tm:"™️",toilet:"🚽",tokyo_tower:"🗼",tomato:"🍅",tongue:"👅",top:"🔝",tophat:"🎩",tornado:"🌪",trackball:"🖲",tractor:"🚜",traffic_light:"🚥",train:"🚋",train2:"🚆",tram:"🚊",triangular_flag_on_post:"🚩",triangular_ruler:"📐",trident:"🔱",triumph:"😤",trolleybus:"🚎",trophy:"🏆",tropical_drink:"🍹",tropical_fish:"🐠",truck:"🚚",trumpet:"🎺",tulip:"🌷",tumbler_glass:"🥃",turkey:"🦃",turtle:"🐢",tv:"📺",twisted_rightwards_arrows:"🔀",two_hearts:"💕",two_men_holding_hands:"👬",two_women_holding_hands:"👭",u5272:"🈹",u5408:"🈴",u55b6:"🈺",u6307:"🈯️",u6708:"🈷️",u6709:"🈶",u6e80:"🈵",u7121:"🈚️",u7533:"🈸",u7981:"🈲",u7a7a:"🈳",umbrella:"☔️",unamused:"😒",underage:"🔞",unicorn:"🦄",unlock:"🔓",up:"🆙",upside_down_face:"🙃",v:"✌️",vertical_traffic_light:"🚦",vhs:"📼",vibration_mode:"📳",video_camera:"📹",video_game:"🎮",violin:"🎻",virgo:"♍️",volcano:"🌋",volleyball:"🏐",vs:"🆚",vulcan_salute:"🖖",walking_man:"🚶",walking_woman:"🚶&zwj;♀️",waning_crescent_moon:"🌘",waning_gibbous_moon:"🌖",warning:"⚠️",wastebasket:"🗑",watch:"⌚️",water_buffalo:"🐃",watermelon:"🍉",wave:"👋",wavy_dash:"〰️",waxing_crescent_moon:"🌒",wc:"🚾",weary:"😩",wedding:"💒",weight_lifting_man:"🏋️",weight_lifting_woman:"🏋️&zwj;♀️",whale:"🐳",whale2:"🐋",wheel_of_dharma:"☸️",wheelchair:"♿️",white_check_mark:"✅",white_circle:"⚪️",white_flag:"🏳️",white_flower:"💮",white_large_square:"⬜️",white_medium_small_square:"◽️",white_medium_square:"◻️",white_small_square:"▫️",white_square_button:"🔳",wilted_flower:"🥀",wind_chime:"🎐",wind_face:"🌬",wine_glass:"🍷",wink:"😉",wolf:"🐺",woman:"👩",woman_artist:"👩&zwj;🎨",woman_astronaut:"👩&zwj;🚀",woman_cartwheeling:"🤸&zwj;♀️",woman_cook:"👩&zwj;🍳",woman_facepalming:"🤦&zwj;♀️",woman_factory_worker:"👩&zwj;🏭",woman_farmer:"👩&zwj;🌾",woman_firefighter:"👩&zwj;🚒",woman_health_worker:"👩&zwj;⚕️",woman_judge:"👩&zwj;⚖️",woman_juggling:"🤹&zwj;♀️",woman_mechanic:"👩&zwj;🔧",woman_office_worker:"👩&zwj;💼",woman_pilot:"👩&zwj;✈️",woman_playing_handball:"🤾&zwj;♀️",woman_playing_water_polo:"🤽&zwj;♀️",woman_scientist:"👩&zwj;🔬",woman_shrugging:"🤷&zwj;♀️",woman_singer:"👩&zwj;🎤",woman_student:"👩&zwj;🎓",woman_teacher:"👩&zwj;🏫",woman_technologist:"👩&zwj;💻",woman_with_turban:"👳&zwj;♀️",womans_clothes:"👚",womans_hat:"👒",women_wrestling:"🤼&zwj;♀️",womens:"🚺",world_map:"🗺",worried:"😟",wrench:"🔧",writing_hand:"✍️",x:"❌",yellow_heart:"💛",yen:"💴",yin_yang:"☯️",yum:"😋",zap:"⚡️",zipper_mouth_face:"🤐",zzz:"💤",octocat:'<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',showdown:`<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`},t.Converter=function(e){var a={},n=[],r=[],i={},l=M,o={parsed:{},raw:"",format:""};f();function f(){e=e||{};for(var u in A)A.hasOwnProperty(u)&&(a[u]=A[u]);if(typeof e=="object")for(var _ in e)e.hasOwnProperty(_)&&(a[_]=e[_]);else throw Error("Converter expects the passed parameter to be an object, but "+typeof e+" was passed instead.");a.extensions&&t.helper.forEach(a.extensions,S)}function S(u,_){if(_=_||null,t.helper.isString(u))if(u=t.helper.stdExtName(u),_=u,t.extensions[u]){console.warn("DEPRECATION WARNING: "+u+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),y(t.extensions[u],u);return}else if(!t.helper.isUndefined(k[u]))u=k[u];else throw Error('Extension "'+u+'" could not be loaded. It was either not found or is not a valid extension.');typeof u=="function"&&(u=u()),t.helper.isArray(u)||(u=[u]);var j=F(u,_);if(!j.valid)throw Error(j.error);for(var E=0;E<u.length;++E){switch(u[E].type){case"lang":n.push(u[E]);break;case"output":r.push(u[E]);break}if(u[E].hasOwnProperty("listeners"))for(var I in u[E].listeners)u[E].listeners.hasOwnProperty(I)&&v(I,u[E].listeners[I])}}function y(u,_){typeof u=="function"&&(u=u(new t.Converter)),t.helper.isArray(u)||(u=[u]);var j=F(u,_);if(!j.valid)throw Error(j.error);for(var E=0;E<u.length;++E)switch(u[E].type){case"lang":n.push(u[E]);break;case"output":r.push(u[E]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function v(u,_){if(!t.helper.isString(u))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof u+" given");if(typeof _!="function")throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof _+" given");i.hasOwnProperty(u)||(i[u]=[]),i[u].push(_)}function b(u){var _=u.match(/^\s*/)[0].length,j=new RegExp("^\\s{0,"+_+"}","gm");return u.replace(j,"")}this._dispatch=function(_,j,E,I){if(i.hasOwnProperty(_))for(var $=0;$<i[_].length;++$){var V=i[_][$](_,j,this,E,I);V&&typeof V<"u"&&(j=V)}return j},this.listen=function(u,_){return v(u,_),this},this.makeHtml=function(u){if(!u)return u;var _={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:n,outputModifiers:r,converter:this,ghCodeBlocks:[],metadata:{parsed:{},raw:"",format:""}};return u=u.replace(/¨/g,"¨T"),u=u.replace(/\$/g,"¨D"),u=u.replace(/\r\n/g,`
`),u=u.replace(/\r/g,`
`),u=u.replace(/\u00A0/g,"&nbsp;"),a.smartIndentationFix&&(u=b(u)),u=`

`+u+`

`,u=t.subParser("detab")(u,a,_),u=u.replace(/^[ \t]+$/mg,""),t.helper.forEach(n,function(j){u=t.subParser("runExtension")(j,u,a,_)}),u=t.subParser("metadata")(u,a,_),u=t.subParser("hashPreCodeTags")(u,a,_),u=t.subParser("githubCodeBlocks")(u,a,_),u=t.subParser("hashHTMLBlocks")(u,a,_),u=t.subParser("hashCodeTags")(u,a,_),u=t.subParser("stripLinkDefinitions")(u,a,_),u=t.subParser("blockGamut")(u,a,_),u=t.subParser("unhashHTMLSpans")(u,a,_),u=t.subParser("unescapeSpecialChars")(u,a,_),u=u.replace(/¨D/g,"$$"),u=u.replace(/¨T/g,"¨"),u=t.subParser("completeHTMLDocument")(u,a,_),t.helper.forEach(r,function(j){u=t.subParser("runExtension")(j,u,a,_)}),o=_.metadata,u},this.makeMarkdown=this.makeMd=function(u,_){if(u=u.replace(/\r\n/g,`
`),u=u.replace(/\r/g,`
`),u=u.replace(/>[ \t]+</,">¨NBSP;<"),!_)if(window&&window.document)_=window.document;else throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");var j=_.createElement("div");j.innerHTML=u;var E={preList:Q(j)};G(j);for(var I=j.childNodes,$="",V=0;V<I.length;V++)$+=t.subParser("makeMarkdown.node")(I[V],E);function G(q){for(var W=0;W<q.childNodes.length;++W){var Z=q.childNodes[W];Z.nodeType===3?!/\S/.test(Z.nodeValue)&&!/^[ ]+$/.test(Z.nodeValue)?(q.removeChild(Z),--W):(Z.nodeValue=Z.nodeValue.split(`
`).join(" "),Z.nodeValue=Z.nodeValue.replace(/(\s)+/g,"$1")):Z.nodeType===1&&G(Z)}}function Q(q){for(var W=q.querySelectorAll("pre"),Z=[],Y=0;Y<W.length;++Y)if(W[Y].childElementCount===1&&W[Y].firstChild.tagName.toLowerCase()==="code"){var we=W[Y].firstChild.innerHTML.trim(),ye=W[Y].firstChild.getAttribute("data-language")||"";if(ye==="")for(var De=W[Y].firstChild.className.split(" "),ke=0;ke<De.length;++ke){var He=De[ke].match(/^language-(.+)$/);if(He!==null){ye=He[1];break}}we=t.helper.unescapeHTMLEntities(we),Z.push(we),W[Y].outerHTML='<precode language="'+ye+'" precodenum="'+Y.toString()+'"></precode>'}else Z.push(W[Y].innerHTML),W[Y].innerHTML="",W[Y].setAttribute("prenum",Y.toString());return Z}return $},this.setOption=function(u,_){a[u]=_},this.getOption=function(u){return a[u]},this.getOptions=function(){return a},this.addExtension=function(u,_){_=_||null,S(u,_)},this.useExtension=function(u){S(u)},this.setFlavor=function(u){if(!T.hasOwnProperty(u))throw Error(u+" flavor was not found");var _=T[u];l=u;for(var j in _)_.hasOwnProperty(j)&&(a[j]=_[j])},this.getFlavor=function(){return l},this.removeExtension=function(u){t.helper.isArray(u)||(u=[u]);for(var _=0;_<u.length;++_){for(var j=u[_],E=0;E<n.length;++E)n[E]===j&&n.splice(E,1);for(var I=0;I<r.length;++I)r[I]===j&&r.splice(I,1)}},this.getAllExtensions=function(){return{language:n,output:r}},this.getMetadata=function(u){return u?o.raw:o.parsed},this.getMetadataFormat=function(){return o.format},this._setMetadataPair=function(u,_){o.parsed[u]=_},this._setMetadataFormat=function(u){o.format=u},this._setMetadataRaw=function(u){o.raw=u}},t.subParser("anchors",function(e,a,n){e=n.converter._dispatch("anchors.before",e,a,n);var r=function(i,l,o,f,S,y,v){if(t.helper.isUndefined(v)&&(v=""),o=o.toLowerCase(),i.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)f="";else if(!f)if(o||(o=l.toLowerCase().replace(/ ?\n/g," ")),f="#"+o,!t.helper.isUndefined(n.gUrls[o]))f=n.gUrls[o],t.helper.isUndefined(n.gTitles[o])||(v=n.gTitles[o]);else return i;f=f.replace(t.helper.regexes.asteriskDashAndColon,t.helper.escapeCharactersCallback);var b='<a href="'+f+'"';return v!==""&&v!==null&&(v=v.replace(/"/g,"&quot;"),v=v.replace(t.helper.regexes.asteriskDashAndColon,t.helper.escapeCharactersCallback),b+=' title="'+v+'"'),a.openLinksInNewWindow&&!/^#/.test(f)&&(b+=' rel="noopener noreferrer" target="¨E95Eblank"'),b+=">"+l+"</a>",b};return e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,r),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,r),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,r),e=e.replace(/\[([^\[\]]+)]()()()()()/g,r),a.ghMentions&&(e=e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi,function(i,l,o,f,S){if(o==="\\")return l+f;if(!t.helper.isString(a.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");var y=a.ghMentionsLink.replace(/\{u}/g,S),v="";return a.openLinksInNewWindow&&(v=' rel="noopener noreferrer" target="¨E95Eblank"'),l+'<a href="'+y+'"'+v+">"+f+"</a>"})),e=n.converter._dispatch("anchors.after",e,a,n),e});var B=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,J=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,m=/()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,g=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,P=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,w=function(e){return function(a,n,r,i,l,o,f){r=r.replace(t.helper.regexes.asteriskDashAndColon,t.helper.escapeCharactersCallback);var S=r,y="",v="",b=n||"",u=f||"";return/^www\./i.test(r)&&(r=r.replace(/^www\./i,"http://www.")),e.excludeTrailingPunctuationFromURLs&&o&&(y=o),e.openLinksInNewWindow&&(v=' rel="noopener noreferrer" target="¨E95Eblank"'),b+'<a href="'+r+'"'+v+">"+S+"</a>"+y+u}},C=function(e,a){return function(n,r,i){var l="mailto:";return r=r||"",i=t.subParser("unescapeSpecialChars")(i,e,a),e.encodeEmails?(l=t.helper.encodeEmailAddress(l+i),i=t.helper.encodeEmailAddress(i)):l=l+i,r+'<a href="'+l+'">'+i+"</a>"}};t.subParser("autoLinks",function(e,a,n){return e=n.converter._dispatch("autoLinks.before",e,a,n),e=e.replace(m,w(a)),e=e.replace(P,C(a,n)),e=n.converter._dispatch("autoLinks.after",e,a,n),e}),t.subParser("simplifiedAutoLinks",function(e,a,n){return a.simplifiedAutoLink&&(e=n.converter._dispatch("simplifiedAutoLinks.before",e,a,n),a.excludeTrailingPunctuationFromURLs?e=e.replace(J,w(a)):e=e.replace(B,w(a)),e=e.replace(g,C(a,n)),e=n.converter._dispatch("simplifiedAutoLinks.after",e,a,n)),e}),t.subParser("blockGamut",function(e,a,n){return e=n.converter._dispatch("blockGamut.before",e,a,n),e=t.subParser("blockQuotes")(e,a,n),e=t.subParser("headers")(e,a,n),e=t.subParser("horizontalRule")(e,a,n),e=t.subParser("lists")(e,a,n),e=t.subParser("codeBlocks")(e,a,n),e=t.subParser("tables")(e,a,n),e=t.subParser("hashHTMLBlocks")(e,a,n),e=t.subParser("paragraphs")(e,a,n),e=n.converter._dispatch("blockGamut.after",e,a,n),e}),t.subParser("blockQuotes",function(e,a,n){e=n.converter._dispatch("blockQuotes.before",e,a,n),e=e+`

`;var r=/(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;return a.splitAdjacentBlockquotes&&(r=/^ {0,3}>[\s\S]*?(?:\n\n)/gm),e=e.replace(r,function(i){return i=i.replace(/^[ \t]*>[ \t]?/gm,""),i=i.replace(/¨0/g,""),i=i.replace(/^[ \t]+$/gm,""),i=t.subParser("githubCodeBlocks")(i,a,n),i=t.subParser("blockGamut")(i,a,n),i=i.replace(/(^|\n)/g,"$1  "),i=i.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(l,o){var f=o;return f=f.replace(/^  /mg,"¨0"),f=f.replace(/¨0/g,""),f}),t.subParser("hashBlock")(`<blockquote>
`+i+`
</blockquote>`,a,n)}),e=n.converter._dispatch("blockQuotes.after",e,a,n),e}),t.subParser("codeBlocks",function(e,a,n){e=n.converter._dispatch("codeBlocks.before",e,a,n),e+="¨0";var r=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;return e=e.replace(r,function(i,l,o){var f=l,S=o,y=`
`;return f=t.subParser("outdent")(f,a,n),f=t.subParser("encodeCode")(f,a,n),f=t.subParser("detab")(f,a,n),f=f.replace(/^\n+/g,""),f=f.replace(/\n+$/g,""),a.omitExtraWLInCodeBlocks&&(y=""),f="<pre><code>"+f+y+"</code></pre>",t.subParser("hashBlock")(f,a,n)+S}),e=e.replace(/¨0/,""),e=n.converter._dispatch("codeBlocks.after",e,a,n),e}),t.subParser("codeSpans",function(e,a,n){return e=n.converter._dispatch("codeSpans.before",e,a,n),typeof e>"u"&&(e=""),e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(r,i,l,o){var f=o;return f=f.replace(/^([ \t]*)/g,""),f=f.replace(/[ \t]*$/g,""),f=t.subParser("encodeCode")(f,a,n),f=i+"<code>"+f+"</code>",f=t.subParser("hashHTMLSpans")(f,a,n),f}),e=n.converter._dispatch("codeSpans.after",e,a,n),e}),t.subParser("completeHTMLDocument",function(e,a,n){if(!a.completeHTMLDocument)return e;e=n.converter._dispatch("completeHTMLDocument.before",e,a,n);var r="html",i=`<!DOCTYPE HTML>
`,l="",o=`<meta charset="utf-8">
`,f="",S="";typeof n.metadata.parsed.doctype<"u"&&(i="<!DOCTYPE "+n.metadata.parsed.doctype+`>
`,r=n.metadata.parsed.doctype.toString().toLowerCase(),(r==="html"||r==="html5")&&(o='<meta charset="utf-8">'));for(var y in n.metadata.parsed)if(n.metadata.parsed.hasOwnProperty(y))switch(y.toLowerCase()){case"doctype":break;case"title":l="<title>"+n.metadata.parsed.title+`</title>
`;break;case"charset":r==="html"||r==="html5"?o='<meta charset="'+n.metadata.parsed.charset+`">
`:o='<meta name="charset" content="'+n.metadata.parsed.charset+`">
`;break;case"language":case"lang":f=' lang="'+n.metadata.parsed[y]+'"',S+='<meta name="'+y+'" content="'+n.metadata.parsed[y]+`">
`;break;default:S+='<meta name="'+y+'" content="'+n.metadata.parsed[y]+`">
`}return e=i+"<html"+f+`>
<head>
`+l+o+S+`</head>
<body>
`+e.trim()+`
</body>
</html>`,e=n.converter._dispatch("completeHTMLDocument.after",e,a,n),e}),t.subParser("detab",function(e,a,n){return e=n.converter._dispatch("detab.before",e,a,n),e=e.replace(/\t(?=\t)/g,"    "),e=e.replace(/\t/g,"¨A¨B"),e=e.replace(/¨B(.+?)¨A/g,function(r,i){for(var l=i,o=4-l.length%4,f=0;f<o;f++)l+=" ";return l}),e=e.replace(/¨A/g,"    "),e=e.replace(/¨B/g,""),e=n.converter._dispatch("detab.after",e,a,n),e}),t.subParser("ellipsis",function(e,a,n){return a.ellipsis&&(e=n.converter._dispatch("ellipsis.before",e,a,n),e=e.replace(/\.\.\./g,"…"),e=n.converter._dispatch("ellipsis.after",e,a,n)),e}),t.subParser("emoji",function(e,a,n){if(!a.emoji)return e;e=n.converter._dispatch("emoji.before",e,a,n);var r=/:([\S]+?):/g;return e=e.replace(r,function(i,l){return t.helper.emojis.hasOwnProperty(l)?t.helper.emojis[l]:i}),e=n.converter._dispatch("emoji.after",e,a,n),e}),t.subParser("encodeAmpsAndAngles",function(e,a,n){return e=n.converter._dispatch("encodeAmpsAndAngles.before",e,a,n),e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?$!])/gi,"&lt;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=n.converter._dispatch("encodeAmpsAndAngles.after",e,a,n),e}),t.subParser("encodeBackslashEscapes",function(e,a,n){return e=n.converter._dispatch("encodeBackslashEscapes.before",e,a,n),e=e.replace(/\\(\\)/g,t.helper.escapeCharactersCallback),e=e.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g,t.helper.escapeCharactersCallback),e=n.converter._dispatch("encodeBackslashEscapes.after",e,a,n),e}),t.subParser("encodeCode",function(e,a,n){return e=n.converter._dispatch("encodeCode.before",e,a,n),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,t.helper.escapeCharactersCallback),e=n.converter._dispatch("encodeCode.after",e,a,n),e}),t.subParser("escapeSpecialCharsWithinTagAttributes",function(e,a,n){e=n.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",e,a,n);var r=/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,i=/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;return e=e.replace(r,function(l){return l.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,t.helper.escapeCharactersCallback)}),e=e.replace(i,function(l){return l.replace(/([\\`*_~=|])/g,t.helper.escapeCharactersCallback)}),e=n.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",e,a,n),e}),t.subParser("githubCodeBlocks",function(e,a,n){return a.ghCodeBlocks?(e=n.converter._dispatch("githubCodeBlocks.before",e,a,n),e+="¨0",e=e.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,function(r,i,l,o){var f=a.omitExtraWLInCodeBlocks?"":`
`;return o=t.subParser("encodeCode")(o,a,n),o=t.subParser("detab")(o,a,n),o=o.replace(/^\n+/g,""),o=o.replace(/\n+$/g,""),o="<pre><code"+(l?' class="'+l+" language-"+l+'"':"")+">"+o+f+"</code></pre>",o=t.subParser("hashBlock")(o,a,n),`

¨G`+(n.ghCodeBlocks.push({text:r,codeblock:o})-1)+`G

`}),e=e.replace(/¨0/,""),n.converter._dispatch("githubCodeBlocks.after",e,a,n)):e}),t.subParser("hashBlock",function(e,a,n){return e=n.converter._dispatch("hashBlock.before",e,a,n),e=e.replace(/(^\n+|\n+$)/g,""),e=`

¨K`+(n.gHtmlBlocks.push(e)-1)+`K

`,e=n.converter._dispatch("hashBlock.after",e,a,n),e}),t.subParser("hashCodeTags",function(e,a,n){e=n.converter._dispatch("hashCodeTags.before",e,a,n);var r=function(i,l,o,f){var S=o+t.subParser("encodeCode")(l,a,n)+f;return"¨C"+(n.gHtmlSpans.push(S)-1)+"C"};return e=t.helper.replaceRecursiveRegExp(e,r,"<code\\b[^>]*>","</code>","gim"),e=n.converter._dispatch("hashCodeTags.after",e,a,n),e}),t.subParser("hashElement",function(e,a,n){return function(r,i){var l=i;return l=l.replace(/\n\n/g,`
`),l=l.replace(/^\n/,""),l=l.replace(/\n+$/g,""),l=`

¨K`+(n.gHtmlBlocks.push(l)-1)+`K

`,l}}),t.subParser("hashHTMLBlocks",function(e,a,n){e=n.converter._dispatch("hashHTMLBlocks.before",e,a,n);var r=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],i=function(u,_,j,E){var I=u;return j.search(/\bmarkdown\b/)!==-1&&(I=j+n.converter.makeHtml(_)+E),`

¨K`+(n.gHtmlBlocks.push(I)-1)+`K

`};a.backslashEscapesHTMLTags&&(e=e.replace(/\\<(\/?[^>]+?)>/g,function(u,_){return"&lt;"+_+"&gt;"}));for(var l=0;l<r.length;++l)for(var o,f=new RegExp("^ {0,3}(<"+r[l]+"\\b[^>]*>)","im"),S="<"+r[l]+"\\b[^>]*>",y="</"+r[l]+">";(o=t.helper.regexIndexOf(e,f))!==-1;){var v=t.helper.splitAtIndex(e,o),b=t.helper.replaceRecursiveRegExp(v[1],i,S,y,"im");if(b===v[1])break;e=v[0].concat(b)}return e=e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,t.subParser("hashElement")(e,a,n)),e=t.helper.replaceRecursiveRegExp(e,function(u){return`

¨K`+(n.gHtmlBlocks.push(u)-1)+`K

`},"^ {0,3}<!--","-->","gm"),e=e.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,t.subParser("hashElement")(e,a,n)),e=n.converter._dispatch("hashHTMLBlocks.after",e,a,n),e}),t.subParser("hashHTMLSpans",function(e,a,n){e=n.converter._dispatch("hashHTMLSpans.before",e,a,n);function r(i){return"¨C"+(n.gHtmlSpans.push(i)-1)+"C"}return e=e.replace(/<[^>]+?\/>/gi,function(i){return r(i)}),e=e.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,function(i){return r(i)}),e=e.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,function(i){return r(i)}),e=e.replace(/<[^>]+?>/gi,function(i){return r(i)}),e=n.converter._dispatch("hashHTMLSpans.after",e,a,n),e}),t.subParser("unhashHTMLSpans",function(e,a,n){e=n.converter._dispatch("unhashHTMLSpans.before",e,a,n);for(var r=0;r<n.gHtmlSpans.length;++r){for(var i=n.gHtmlSpans[r],l=0;/¨C(\d+)C/.test(i);){var o=RegExp.$1;if(i=i.replace("¨C"+o+"C",n.gHtmlSpans[o]),l===10){console.error("maximum nesting of 10 spans reached!!!");break}++l}e=e.replace("¨C"+r+"C",i)}return e=n.converter._dispatch("unhashHTMLSpans.after",e,a,n),e}),t.subParser("hashPreCodeTags",function(e,a,n){e=n.converter._dispatch("hashPreCodeTags.before",e,a,n);var r=function(i,l,o,f){var S=o+t.subParser("encodeCode")(l,a,n)+f;return`

¨G`+(n.ghCodeBlocks.push({text:i,codeblock:S})-1)+`G

`};return e=t.helper.replaceRecursiveRegExp(e,r,"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),e=n.converter._dispatch("hashPreCodeTags.after",e,a,n),e}),t.subParser("headers",function(e,a,n){e=n.converter._dispatch("headers.before",e,a,n);var r=isNaN(parseInt(a.headerLevelStart))?1:parseInt(a.headerLevelStart),i=a.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,l=a.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;e=e.replace(i,function(S,y){var v=t.subParser("spanGamut")(y,a,n),b=a.noHeaderId?"":' id="'+f(y)+'"',u=r,_="<h"+u+b+">"+v+"</h"+u+">";return t.subParser("hashBlock")(_,a,n)}),e=e.replace(l,function(S,y){var v=t.subParser("spanGamut")(y,a,n),b=a.noHeaderId?"":' id="'+f(y)+'"',u=r+1,_="<h"+u+b+">"+v+"</h"+u+">";return t.subParser("hashBlock")(_,a,n)});var o=a.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;e=e.replace(o,function(S,y,v){var b=v;a.customizedHeaderId&&(b=v.replace(/\s?\{([^{]+?)}\s*$/,""));var u=t.subParser("spanGamut")(b,a,n),_=a.noHeaderId?"":' id="'+f(v)+'"',j=r-1+y.length,E="<h"+j+_+">"+u+"</h"+j+">";return t.subParser("hashBlock")(E,a,n)});function f(S){var y,v;if(a.customizedHeaderId){var b=S.match(/\{([^{]+?)}\s*$/);b&&b[1]&&(S=b[1])}return y=S,t.helper.isString(a.prefixHeaderId)?v=a.prefixHeaderId:a.prefixHeaderId===!0?v="section-":v="",a.rawPrefixHeaderId||(y=v+y),a.ghCompatibleHeaderId?y=y.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():a.rawHeaderId?y=y.replace(/ /g,"-").replace(/&amp;/g,"&").replace(/¨T/g,"¨").replace(/¨D/g,"$").replace(/["']/g,"-").toLowerCase():y=y.replace(/[^\w]/g,"").toLowerCase(),a.rawPrefixHeaderId&&(y=v+y),n.hashLinkCounts[y]?y=y+"-"+n.hashLinkCounts[y]++:n.hashLinkCounts[y]=1,y}return e=n.converter._dispatch("headers.after",e,a,n),e}),t.subParser("horizontalRule",function(e,a,n){e=n.converter._dispatch("horizontalRule.before",e,a,n);var r=t.subParser("hashBlock")("<hr />",a,n);return e=e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,r),e=e.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,r),e=e.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,r),e=n.converter._dispatch("horizontalRule.after",e,a,n),e}),t.subParser("images",function(e,a,n){e=n.converter._dispatch("images.before",e,a,n);var r=/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,i=/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,l=/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,o=/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,f=/!\[([^\[\]]+)]()()()()()/g;function S(v,b,u,_,j,E,I,$){return _=_.replace(/\s/g,""),y(v,b,u,_,j,E,I,$)}function y(v,b,u,_,j,E,I,$){var V=n.gUrls,G=n.gTitles,Q=n.gDimensions;if(u=u.toLowerCase(),$||($=""),v.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)_="";else if(_===""||_===null)if((u===""||u===null)&&(u=b.toLowerCase().replace(/ ?\n/g," ")),_="#"+u,!t.helper.isUndefined(V[u]))_=V[u],t.helper.isUndefined(G[u])||($=G[u]),t.helper.isUndefined(Q[u])||(j=Q[u].width,E=Q[u].height);else return v;b=b.replace(/"/g,"&quot;").replace(t.helper.regexes.asteriskDashAndColon,t.helper.escapeCharactersCallback),_=_.replace(t.helper.regexes.asteriskDashAndColon,t.helper.escapeCharactersCallback);var q='<img src="'+_+'" alt="'+b+'"';return $&&t.helper.isString($)&&($=$.replace(/"/g,"&quot;").replace(t.helper.regexes.asteriskDashAndColon,t.helper.escapeCharactersCallback),q+=' title="'+$+'"'),j&&E&&(j=j==="*"?"auto":j,E=E==="*"?"auto":E,q+=' width="'+j+'"',q+=' height="'+E+'"'),q+=" />",q}return e=e.replace(o,y),e=e.replace(l,S),e=e.replace(i,y),e=e.replace(r,y),e=e.replace(f,y),e=n.converter._dispatch("images.after",e,a,n),e}),t.subParser("italicsAndBold",function(e,a,n){e=n.converter._dispatch("italicsAndBold.before",e,a,n);function r(i,l,o){return l+i+o}return a.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(i,l){return r(l,"<strong><em>","</em></strong>")}),e=e.replace(/\b__(\S[\s\S]*?)__\b/g,function(i,l){return r(l,"<strong>","</strong>")}),e=e.replace(/\b_(\S[\s\S]*?)_\b/g,function(i,l){return r(l,"<em>","</em>")})):(e=e.replace(/___(\S[\s\S]*?)___/g,function(i,l){return/\S$/.test(l)?r(l,"<strong><em>","</em></strong>"):i}),e=e.replace(/__(\S[\s\S]*?)__/g,function(i,l){return/\S$/.test(l)?r(l,"<strong>","</strong>"):i}),e=e.replace(/_([^\s_][\s\S]*?)_/g,function(i,l){return/\S$/.test(l)?r(l,"<em>","</em>"):i})),a.literalMidWordAsterisks?(e=e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,function(i,l,o){return r(o,l+"<strong><em>","</em></strong>")}),e=e.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,function(i,l,o){return r(o,l+"<strong>","</strong>")}),e=e.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,function(i,l,o){return r(o,l+"<em>","</em>")})):(e=e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(i,l){return/\S$/.test(l)?r(l,"<strong><em>","</em></strong>"):i}),e=e.replace(/\*\*(\S[\s\S]*?)\*\*/g,function(i,l){return/\S$/.test(l)?r(l,"<strong>","</strong>"):i}),e=e.replace(/\*([^\s*][\s\S]*?)\*/g,function(i,l){return/\S$/.test(l)?r(l,"<em>","</em>"):i})),e=n.converter._dispatch("italicsAndBold.after",e,a,n),e}),t.subParser("lists",function(e,a,n){function r(o,f){n.gListLevel++,o=o.replace(/\n{2,}$/,`
`),o+="¨0";var S=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,y=/\n[ \t]*\n(?!¨0)/.test(o);return a.disableForced4SpacesIndentedSublists&&(S=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),o=o.replace(S,function(v,b,u,_,j,E,I){I=I&&I.trim()!=="";var $=t.subParser("outdent")(j,a,n),V="";return E&&a.tasklists&&(V=' class="task-list-item" style="list-style-type: none;"',$=$.replace(/^[ \t]*\[(x|X| )?]/m,function(){var G='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return I&&(G+=" checked"),G+=">",G})),$=$.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(G){return"¨A"+G}),b||$.search(/\n{2,}/)>-1?($=t.subParser("githubCodeBlocks")($,a,n),$=t.subParser("blockGamut")($,a,n)):($=t.subParser("lists")($,a,n),$=$.replace(/\n$/,""),$=t.subParser("hashHTMLBlocks")($,a,n),$=$.replace(/\n\n+/g,`

`),y?$=t.subParser("paragraphs")($,a,n):$=t.subParser("spanGamut")($,a,n)),$=$.replace("¨A",""),$="<li"+V+">"+$+`</li>
`,$}),o=o.replace(/¨0/g,""),n.gListLevel--,f&&(o=o.replace(/\s+$/,"")),o}function i(o,f){if(f==="ol"){var S=o.match(/^ *(\d+)\./);if(S&&S[1]!=="1")return' start="'+S[1]+'"'}return""}function l(o,f,S){var y=a.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,v=a.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,b=f==="ul"?y:v,u="";if(o.search(b)!==-1)(function j(E){var I=E.search(b),$=i(o,f);I!==-1?(u+=`

<`+f+$+`>
`+r(E.slice(0,I),!!S)+"</"+f+`>
`,f=f==="ul"?"ol":"ul",b=f==="ul"?y:v,j(E.slice(I))):u+=`

<`+f+$+`>
`+r(E,!!S)+"</"+f+`>
`})(o);else{var _=i(o,f);u=`

<`+f+_+`>
`+r(o,!!S)+"</"+f+`>
`}return u}return e=n.converter._dispatch("lists.before",e,a,n),e+="¨0",n.gListLevel?e=e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(o,f,S){var y=S.search(/[*+-]/g)>-1?"ul":"ol";return l(f,y,!0)}):e=e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(o,f,S,y){var v=y.search(/[*+-]/g)>-1?"ul":"ol";return l(S,v,!1)}),e=e.replace(/¨0/,""),e=n.converter._dispatch("lists.after",e,a,n),e}),t.subParser("metadata",function(e,a,n){if(!a.metadata)return e;e=n.converter._dispatch("metadata.before",e,a,n);function r(i){n.metadata.raw=i,i=i.replace(/&/g,"&amp;").replace(/"/g,"&quot;"),i=i.replace(/\n {4}/g," "),i.replace(/^([\S ]+): +([\s\S]+?)$/gm,function(l,o,f){return n.metadata.parsed[o]=f,""})}return e=e.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,function(i,l,o){return r(o),"¨M"}),e=e.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,function(i,l,o){return l&&(n.metadata.format=l),r(o),"¨M"}),e=e.replace(/¨M/g,""),e=n.converter._dispatch("metadata.after",e,a,n),e}),t.subParser("outdent",function(e,a,n){return e=n.converter._dispatch("outdent.before",e,a,n),e=e.replace(/^(\t|[ ]{1,4})/gm,"¨0"),e=e.replace(/¨0/g,""),e=n.converter._dispatch("outdent.after",e,a,n),e}),t.subParser("paragraphs",function(e,a,n){e=n.converter._dispatch("paragraphs.before",e,a,n),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"");for(var r=e.split(/\n{2,}/g),i=[],l=r.length,o=0;o<l;o++){var f=r[o];f.search(/¨(K|G)(\d+)\1/g)>=0?i.push(f):f.search(/\S/)>=0&&(f=t.subParser("spanGamut")(f,a,n),f=f.replace(/^([ \t]*)/g,"<p>"),f+="</p>",i.push(f))}for(l=i.length,o=0;o<l;o++){for(var S="",y=i[o],v=!1;/¨(K|G)(\d+)\1/.test(y);){var b=RegExp.$1,u=RegExp.$2;b==="K"?S=n.gHtmlBlocks[u]:v?S=t.subParser("encodeCode")(n.ghCodeBlocks[u].text,a,n):S=n.ghCodeBlocks[u].codeblock,S=S.replace(/\$/g,"$$$$"),y=y.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,S),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(y)&&(v=!0)}i[o]=y}return e=i.join(`
`),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,""),n.converter._dispatch("paragraphs.after",e,a,n)}),t.subParser("runExtension",function(e,a,n,r){if(e.filter)a=e.filter(a,r.converter,n);else if(e.regex){var i=e.regex;i instanceof RegExp||(i=new RegExp(i,"g")),a=a.replace(i,e.replace)}return a}),t.subParser("spanGamut",function(e,a,n){return e=n.converter._dispatch("spanGamut.before",e,a,n),e=t.subParser("codeSpans")(e,a,n),e=t.subParser("escapeSpecialCharsWithinTagAttributes")(e,a,n),e=t.subParser("encodeBackslashEscapes")(e,a,n),e=t.subParser("images")(e,a,n),e=t.subParser("anchors")(e,a,n),e=t.subParser("autoLinks")(e,a,n),e=t.subParser("simplifiedAutoLinks")(e,a,n),e=t.subParser("emoji")(e,a,n),e=t.subParser("underline")(e,a,n),e=t.subParser("italicsAndBold")(e,a,n),e=t.subParser("strikethrough")(e,a,n),e=t.subParser("ellipsis")(e,a,n),e=t.subParser("hashHTMLSpans")(e,a,n),e=t.subParser("encodeAmpsAndAngles")(e,a,n),a.simpleLineBreaks?/\n\n¨K/.test(e)||(e=e.replace(/\n+/g,`<br />
`)):e=e.replace(/  +\n/g,`<br />
`),e=n.converter._dispatch("spanGamut.after",e,a,n),e}),t.subParser("strikethrough",function(e,a,n){function r(i){return a.simplifiedAutoLink&&(i=t.subParser("simplifiedAutoLinks")(i,a,n)),"<del>"+i+"</del>"}return a.strikethrough&&(e=n.converter._dispatch("strikethrough.before",e,a,n),e=e.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(i,l){return r(l)}),e=n.converter._dispatch("strikethrough.after",e,a,n)),e}),t.subParser("stripLinkDefinitions",function(e,a,n){var r=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,i=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;e+="¨0";var l=function(o,f,S,y,v,b,u){return f=f.toLowerCase(),e.toLowerCase().split(f).length-1<2?o:(S.match(/^data:.+?\/.+?;base64,/)?n.gUrls[f]=S.replace(/\s/g,""):n.gUrls[f]=t.subParser("encodeAmpsAndAngles")(S,a,n),b?b+u:(u&&(n.gTitles[f]=u.replace(/"|'/g,"&quot;")),a.parseImgDimensions&&y&&v&&(n.gDimensions[f]={width:y,height:v}),""))};return e=e.replace(i,l),e=e.replace(r,l),e=e.replace(/¨0/,""),e}),t.subParser("tables",function(e,a,n){if(!a.tables)return e;var r=/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,i=/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;function l(v){return/^:[ \t]*--*$/.test(v)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(v)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(v)?' style="text-align:center;"':""}function o(v,b){var u="";return v=v.trim(),(a.tablesHeaderId||a.tableHeaderId)&&(u=' id="'+v.replace(/ /g,"_").toLowerCase()+'"'),v=t.subParser("spanGamut")(v,a,n),"<th"+u+b+">"+v+`</th>
`}function f(v,b){var u=t.subParser("spanGamut")(v,a,n);return"<td"+b+">"+u+`</td>
`}function S(v,b){for(var u=`<table>
<thead>
<tr>
`,_=v.length,j=0;j<_;++j)u+=v[j];for(u+=`</tr>
</thead>
<tbody>
`,j=0;j<b.length;++j){u+=`<tr>
`;for(var E=0;E<_;++E)u+=b[j][E];u+=`</tr>
`}return u+=`</tbody>
</table>
`,u}function y(v){var b,u=v.split(`
`);for(b=0;b<u.length;++b)/^ {0,3}\|/.test(u[b])&&(u[b]=u[b].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(u[b])&&(u[b]=u[b].replace(/\|[ \t]*$/,"")),u[b]=t.subParser("codeSpans")(u[b],a,n);var _=u[0].split("|").map(function(q){return q.trim()}),j=u[1].split("|").map(function(q){return q.trim()}),E=[],I=[],$=[],V=[];for(u.shift(),u.shift(),b=0;b<u.length;++b)u[b].trim()!==""&&E.push(u[b].split("|").map(function(q){return q.trim()}));if(_.length<j.length)return v;for(b=0;b<j.length;++b)$.push(l(j[b]));for(b=0;b<_.length;++b)t.helper.isUndefined($[b])&&($[b]=""),I.push(o(_[b],$[b]));for(b=0;b<E.length;++b){for(var G=[],Q=0;Q<I.length;++Q)t.helper.isUndefined(E[b][Q]),G.push(f(E[b][Q],$[Q]));V.push(G)}return S(I,V)}return e=n.converter._dispatch("tables.before",e,a,n),e=e.replace(/\\(\|)/g,t.helper.escapeCharactersCallback),e=e.replace(r,y),e=e.replace(i,y),e=n.converter._dispatch("tables.after",e,a,n),e}),t.subParser("underline",function(e,a,n){return a.underline&&(e=n.converter._dispatch("underline.before",e,a,n),a.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(r,i){return"<u>"+i+"</u>"}),e=e.replace(/\b__(\S[\s\S]*?)__\b/g,function(r,i){return"<u>"+i+"</u>"})):(e=e.replace(/___(\S[\s\S]*?)___/g,function(r,i){return/\S$/.test(i)?"<u>"+i+"</u>":r}),e=e.replace(/__(\S[\s\S]*?)__/g,function(r,i){return/\S$/.test(i)?"<u>"+i+"</u>":r})),e=e.replace(/(_)/g,t.helper.escapeCharactersCallback),e=n.converter._dispatch("underline.after",e,a,n)),e}),t.subParser("unescapeSpecialChars",function(e,a,n){return e=n.converter._dispatch("unescapeSpecialChars.before",e,a,n),e=e.replace(/¨E(\d+)E/g,function(r,i){var l=parseInt(i);return String.fromCharCode(l)}),e=n.converter._dispatch("unescapeSpecialChars.after",e,a,n),e}),t.subParser("makeMarkdown.blockquote",function(e,a){var n="";if(e.hasChildNodes())for(var r=e.childNodes,i=r.length,l=0;l<i;++l){var o=t.subParser("makeMarkdown.node")(r[l],a);o!==""&&(n+=o)}return n=n.trim(),n="> "+n.split(`
`).join(`
> `),n}),t.subParser("makeMarkdown.codeBlock",function(e,a){var n=e.getAttribute("language"),r=e.getAttribute("precodenum");return"```"+n+`
`+a.preList[r]+"\n```"}),t.subParser("makeMarkdown.codeSpan",function(e){return"`"+e.innerHTML+"`"}),t.subParser("makeMarkdown.emphasis",function(e,a){var n="";if(e.hasChildNodes()){n+="*";for(var r=e.childNodes,i=r.length,l=0;l<i;++l)n+=t.subParser("makeMarkdown.node")(r[l],a);n+="*"}return n}),t.subParser("makeMarkdown.header",function(e,a,n){var r=new Array(n+1).join("#"),i="";if(e.hasChildNodes()){i=r+" ";for(var l=e.childNodes,o=l.length,f=0;f<o;++f)i+=t.subParser("makeMarkdown.node")(l[f],a)}return i}),t.subParser("makeMarkdown.hr",function(){return"---"}),t.subParser("makeMarkdown.image",function(e){var a="";return e.hasAttribute("src")&&(a+="!["+e.getAttribute("alt")+"](",a+="<"+e.getAttribute("src")+">",e.hasAttribute("width")&&e.hasAttribute("height")&&(a+=" ="+e.getAttribute("width")+"x"+e.getAttribute("height")),e.hasAttribute("title")&&(a+=' "'+e.getAttribute("title")+'"'),a+=")"),a}),t.subParser("makeMarkdown.links",function(e,a){var n="";if(e.hasChildNodes()&&e.hasAttribute("href")){var r=e.childNodes,i=r.length;n="[";for(var l=0;l<i;++l)n+=t.subParser("makeMarkdown.node")(r[l],a);n+="](",n+="<"+e.getAttribute("href")+">",e.hasAttribute("title")&&(n+=' "'+e.getAttribute("title")+'"'),n+=")"}return n}),t.subParser("makeMarkdown.list",function(e,a,n){var r="";if(!e.hasChildNodes())return"";for(var i=e.childNodes,l=i.length,o=e.getAttribute("start")||1,f=0;f<l;++f)if(!(typeof i[f].tagName>"u"||i[f].tagName.toLowerCase()!=="li")){var S="";n==="ol"?S=o.toString()+". ":S="- ",r+=S+t.subParser("makeMarkdown.listItem")(i[f],a),++o}return r+=`
<!-- -->
`,r.trim()}),t.subParser("makeMarkdown.listItem",function(e,a){for(var n="",r=e.childNodes,i=r.length,l=0;l<i;++l)n+=t.subParser("makeMarkdown.node")(r[l],a);return/\n$/.test(n)?n=n.split(`
`).join(`
    `).replace(/^ {4}$/gm,"").replace(/\n\n+/g,`

`):n+=`
`,n}),t.subParser("makeMarkdown.node",function(e,a,n){n=n||!1;var r="";if(e.nodeType===3)return t.subParser("makeMarkdown.txt")(e,a);if(e.nodeType===8)return"<!--"+e.data+`-->

`;if(e.nodeType!==1)return"";var i=e.tagName.toLowerCase();switch(i){case"h1":n||(r=t.subParser("makeMarkdown.header")(e,a,1)+`

`);break;case"h2":n||(r=t.subParser("makeMarkdown.header")(e,a,2)+`

`);break;case"h3":n||(r=t.subParser("makeMarkdown.header")(e,a,3)+`

`);break;case"h4":n||(r=t.subParser("makeMarkdown.header")(e,a,4)+`

`);break;case"h5":n||(r=t.subParser("makeMarkdown.header")(e,a,5)+`

`);break;case"h6":n||(r=t.subParser("makeMarkdown.header")(e,a,6)+`

`);break;case"p":n||(r=t.subParser("makeMarkdown.paragraph")(e,a)+`

`);break;case"blockquote":n||(r=t.subParser("makeMarkdown.blockquote")(e,a)+`

`);break;case"hr":n||(r=t.subParser("makeMarkdown.hr")(e,a)+`

`);break;case"ol":n||(r=t.subParser("makeMarkdown.list")(e,a,"ol")+`

`);break;case"ul":n||(r=t.subParser("makeMarkdown.list")(e,a,"ul")+`

`);break;case"precode":n||(r=t.subParser("makeMarkdown.codeBlock")(e,a)+`

`);break;case"pre":n||(r=t.subParser("makeMarkdown.pre")(e,a)+`

`);break;case"table":n||(r=t.subParser("makeMarkdown.table")(e,a)+`

`);break;case"code":r=t.subParser("makeMarkdown.codeSpan")(e,a);break;case"em":case"i":r=t.subParser("makeMarkdown.emphasis")(e,a);break;case"strong":case"b":r=t.subParser("makeMarkdown.strong")(e,a);break;case"del":r=t.subParser("makeMarkdown.strikethrough")(e,a);break;case"a":r=t.subParser("makeMarkdown.links")(e,a);break;case"img":r=t.subParser("makeMarkdown.image")(e,a);break;default:r=e.outerHTML+`

`}return r}),t.subParser("makeMarkdown.paragraph",function(e,a){var n="";if(e.hasChildNodes())for(var r=e.childNodes,i=r.length,l=0;l<i;++l)n+=t.subParser("makeMarkdown.node")(r[l],a);return n=n.trim(),n}),t.subParser("makeMarkdown.pre",function(e,a){var n=e.getAttribute("prenum");return"<pre>"+a.preList[n]+"</pre>"}),t.subParser("makeMarkdown.strikethrough",function(e,a){var n="";if(e.hasChildNodes()){n+="~~";for(var r=e.childNodes,i=r.length,l=0;l<i;++l)n+=t.subParser("makeMarkdown.node")(r[l],a);n+="~~"}return n}),t.subParser("makeMarkdown.strong",function(e,a){var n="";if(e.hasChildNodes()){n+="**";for(var r=e.childNodes,i=r.length,l=0;l<i;++l)n+=t.subParser("makeMarkdown.node")(r[l],a);n+="**"}return n}),t.subParser("makeMarkdown.table",function(e,a){var n="",r=[[],[]],i=e.querySelectorAll("thead>tr>th"),l=e.querySelectorAll("tbody>tr"),o,f;for(o=0;o<i.length;++o){var S=t.subParser("makeMarkdown.tableCell")(i[o],a),y="---";if(i[o].hasAttribute("style")){var v=i[o].getAttribute("style").toLowerCase().replace(/\s/g,"");switch(v){case"text-align:left;":y=":---";break;case"text-align:right;":y="---:";break;case"text-align:center;":y=":---:";break}}r[0][o]=S.trim(),r[1][o]=y}for(o=0;o<l.length;++o){var b=r.push([])-1,u=l[o].getElementsByTagName("td");for(f=0;f<i.length;++f){var _=" ";typeof u[f]<"u"&&(_=t.subParser("makeMarkdown.tableCell")(u[f],a)),r[b].push(_)}}var j=3;for(o=0;o<r.length;++o)for(f=0;f<r[o].length;++f){var E=r[o][f].length;E>j&&(j=E)}for(o=0;o<r.length;++o){for(f=0;f<r[o].length;++f)o===1?r[o][f].slice(-1)===":"?r[o][f]=t.helper.padEnd(r[o][f].slice(-1),j-1,"-")+":":r[o][f]=t.helper.padEnd(r[o][f],j,"-"):r[o][f]=t.helper.padEnd(r[o][f],j);n+="| "+r[o].join(" | ")+` |
`}return n.trim()}),t.subParser("makeMarkdown.tableCell",function(e,a){var n="";if(!e.hasChildNodes())return"";for(var r=e.childNodes,i=r.length,l=0;l<i;++l)n+=t.subParser("makeMarkdown.node")(r[l],a,!0);return n.trim()}),t.subParser("makeMarkdown.txt",function(e){var a=e.nodeValue;return a=a.replace(/ +/g," "),a=a.replace(/¨NBSP;/g," "),a=t.helper.unescapeHTMLEntities(a),a=a.replace(/([*_~|`])/g,"\\$1"),a=a.replace(/^(\s*)>/g,"\\$1>"),a=a.replace(/^#/gm,"\\#"),a=a.replace(/^(\s*)([-=]{3,})(\s*)$/,"$1\\$2$3"),a=a.replace(/^( {0,3}\d+)\./gm,"$1\\."),a=a.replace(/^( {0,3})([+-])/gm,"$1\\$2"),a=a.replace(/]([\s]*)\(/g,"\\]$1\\("),a=a.replace(/^ {0,3}\[([\S \t]*?)]:/gm,"\\[$1]:"),a});var z=this;d.exports?d.exports=t:z.showdown=t}).call(bn)}(ge)),ge.exports}var yn=wn();const kn=_n(yn);function re({class:d,...s},c){const t=X(d),k=new kn.Converter().makeHtml(c),A=h.div({class:`style-markup ${t.val}`,innerHTML:k,...s});return Prism.highlightAllUnder(A),A}function je(d=0){return new Promise(s=>setTimeout(s,d))}function Pn(d,s){const c=d.indexOf(s);return c===-1?d:[...d.slice(0,c),...d.slice(c+1)]}function Cn(d,s){return d.indexOf(s)===-1?d.concat(s):Pn(d,s)}function Sn(d,s){const c=new AbortController;return document.addEventListener("click",t=>{t.target instanceof Node&&(d.contains(t.target)||document.contains(t.target)&&s(t))},{signal:c.signal}),c}function jn(d,s){for(const c of s)if(c[0]===d)return c[1];throw`error: non-exhaustive patterns: ${d} not covered`}function oe(d,s){const c=Array.isArray(d)?d:[d],t=Array.isArray(s)?s:[s];for(const p of t)if(c.includes(p))return!0;return!1}const ue={NONE:"none",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},U={HOVER_IN:"hover-in",HOVER_OUT:"hover-out",HOVER:"hover",CLICK:"click",FOCUS:"focus",FOCUS_IN:"focus-in",FOCUS_OUT:"focus-out"},Te=h.div({name:"Popups",class:"fixed inset-0 z-[100] pointer-events-none"});ce(document.documentElement,Te);function Re({visible:d=L(!1),direction:s=ue.BOTTOM,trigger:c=U.CLICK,name:t,class:p,...k},...A){const M=X(p);let T;const F=L({height:0,width:0,left:0,top:0,yOffset:0,xOffset:0}),R=async()=>{if(!T)return;if(!m.isConnected)return B();if(!m.parentElement)throw new Error("Popup target has been removed from DOM");const P=m.parentElement.getBoundingClientRect();F.val={top:P.top,left:P.left,width:P.width,height:P.height,xOffset:0,yOffset:0},await je();const w=Te.getBoundingClientRect(),C=T.popup.getBoundingClientRect(),z={x:Math.max(-C.left,0),y:Math.max(-C.top,0)},e={x:Math.min(w.width-C.left-C.width,0),y:Math.min(w.height-C.top-C.height,0)};F.val={...F.val,xOffset:z.x+e.x,yOffset:z.y+e.y}},x=()=>{const P=jn(s,[[ue.NONE,""],[ue.TOP,"bottom-full mb-1"],[ue.RIGHT,"left-full ml-1"],[ue.BOTTOM,"top-full mt-1"],[ue.LEFT,"right-full mr-1"]]),w=h.div({name:`${t} Popup`,class:()=>`absolute pointer-events-auto ${P} ${M.val}`,...k},A),C=h.div({name:`${t} Popup Anchor`,class:()=>"absolute transition pointer-events-none",style:()=>`left: ${F.val.left+F.val.xOffset}px; top: ${F.val.top+F.val.yOffset}px; height: ${F.val.height}px; width: ${F.val.width}px;`},w),z=Sn(w,()=>je().then(()=>d.val=!1));ce(Te,C),T={anchor:C,popup:w,abortController:z}},B=()=>{T==null||T.anchor.remove(),T==null||T.popup.remove(),T==null||T.abortController.abort(),T=void 0},J=()=>{if(!m.parentElement)throw new Error("Popup target has been removed from DOM");oe(c,[U.HOVER,U.HOVER_IN])&&m.parentElement.addEventListener("mouseenter",()=>d.val=!0),oe(c,[U.HOVER,U.HOVER_OUT])&&m.parentElement.addEventListener("mouseleave",()=>d.val=!1),oe(c,U.CLICK)&&m.parentElement.addEventListener("click",()=>d.val=!0),oe(c,[U.FOCUS,U.FOCUS_IN])&&m.parentElement.addEventListener("focusin",()=>d.val=!0),oe(c,[U.FOCUS,U.FOCUS_OUT])&&m.parentElement.addEventListener("focusout",()=>d.val=!1)};ee(async()=>{if(!d.val)return B();T||x(),R()});const m=h.div({name:`${t} Popup Target`,hidden:!0});window.addEventListener("resize",R);const g=new ResizeObserver(R);return je().then(()=>g.observe(m.parentElement)).then(()=>J()),m}function Mn({options:d,value:s=L(void 0),required:c,class:t,...p}){const k=X(t);return h.div({class:"flex flex-col gap-1 group"},d.map(A=>{const M=ee(()=>s.val===A.value);return h.div({name:"Radio",onclick:()=>s.val=M.val?void 0:A.value,"$data-selected":M,class:()=>{var T;return`group flex cursor-pointer justify-between items-center gap-2 select-none group-has-invalid:mood-critical ${(T=k.val)==null?void 0:T.split(" ").filter(F=>!F.includes("variant")).join(" ")}`},...p},A.name??String(A.value),te({disabled:A.disabled,tabIndex:0,class:()=>{var T;return`button size-5 rounded-full focus-visible:mood-accent ${(T=k.val)==null?void 0:T.split(" ").filter(F=>F.includes("variant")).join(" ")}`}},h.div({class:"bg-current rounded-full size-2.5 aspect-square not-group-data-selected:hidden"})))}),h.input({type:"checkbox",checked:()=>s.val!==void 0,required:c,hidden:!0}))}function K({options:d,value:s=L(d[0].value),useChips:c=!1,lead:t,trail:p,class:k,...A}){const M=X(k),T=ee(()=>{var m;return(m=M.val)==null?void 0:m.split(" ").find(g=>g.includes("mood-"))}),F=ee(()=>Array.isArray(s.val)),R=ee(()=>s.val===void 0||Array.isArray(s.val)&&s.val.length===0),x=L(!1),B=m=>{if(Array.isArray(s.val))return s.val=Cn(s.val,m);s.val=m};return te({name:"Select",class:()=>`flex rounded-lg button gap-2 justify-between focus-visible:mood-accent ${M.val}`,tabIndex:0,onclick:()=>x.val=!x.val,...A},t,()=>h.div({name:"Value Display",class:()=>`text-nowrap text-ellipsis overflow-hidden ${R.val?"text-foreground-weak":""} ${c?"flex flex-wrap gap-1":""} ${x.val?"invisible":""}`},R.val?"None":Array.isArray(s.val)?c?s.val.map(m=>te({class:"group mood-accent text-xs variant-soft rounded relative",onclick:g=>{g.stopPropagation(),B(m)}},h.span({class:"group-hover:opacity-25"},String(m)),h.i({class:"not-group-hover:hidden absolute right-1"},"close"))):s.val.map(m=>String(m)).join(", "):String(s.val)),p,ae.svg({viewBox:"0 0 100 100",class:"size-4 flex-none",style:"stroke-linecap:round; stroke-linejoin:round;"},ae.path({d:"M25,35L50,15L75,35",class:"stroke-current stroke-[10] fill-none",$hidden:()=>!F.val}),ae.path({d:"M25,65L50,85L75,65",class:"stroke-current stroke-[10] fill-none",$hidden:()=>!F.val}),ae.path({d:"M25,40L50,60L75,40",class:"stroke-current stroke-[10] fill-none",$hidden:F})),Re({name:"Select Content",visible:x,direction:"none",class:()=>`left-1/2 -translate-x-1/2 min-w-full max-h-40 overflow-y-auto card vessel shadow-lg p-1 rounded-lg card glass select-none ${T.val}`},()=>h.ul({name:"Select Options",class:"flex flex-col"},d.map(m=>{const g=ee(()=>oe(s.val,m.value));return Tn(m,F,g,B)}))))}function Tn(d,s,c,t){return h.div({"$data-selected":c,class:"contents group"},h.span({name:"Magic divider",class:"h-[1px] mx-1 pointer-events-none bg-surface-500/15 group-first:hidden group-hover:invisible group-data-selected:invisible [*:hover_+_*_>_&]:invisible [*[data-selected]_+_*_>_&]:invisible "}),h.button({class:"flex gap-2 not-disabled:hover:bg-surface-500/20 not-disabled:focus-visible:bg-surface-500/20 not-disabled:focus-visible:focus-ring disabled:bg-transparent px-1 rounded cursor-pointer justify-between disabled:opacity-50 disabled:cursor-not-allowed items-center group-data-selected:mood-accent group-data-selected:!bg-mood-500/25",$disabled:()=>d.disabled,tabIndex:0,onclick:()=>t==null?void 0:t(d.value)},h.span({class:"text-nowrap"},d.name??String(d.value)),ae.svg({viewBox:"0 0 100 100",class:"size-4 not-group-data-selected:invisible",style:"stroke-linecap:round; stroke-linejoin:round;",$hidden:()=>!s.val},ae.path({d:"M20,60L40,80L80,20",class:"stroke-current stroke-[10] fill-none"})),h.div({class:"bg-current rounded-full size-2 m-0.75 aspect-square not-group-data-selected:invisible",$hidden:s})))}function En({class:d},s){const c=X(d),t=[...s.querySelectorAll("h1, h2, h3, h4, h5")];let p=L(t[0]);return document.addEventListener("scroll",()=>{t.some((k,A)=>{if(k.getBoundingClientRect().bottom>s.scrollTop+112)return p.val=t[Math.max(A-1,0)],!0})}),h.ul({class:()=>`flex flex-col ${c.val}`},[...t].map(k=>{const A=parseInt(k.tagName.slice(1))-1;return h.li({onclick:()=>k.scrollIntoView({behavior:"smooth"}),"$data-indented":()=>A>0,"$data-selected":()=>p.val===k,style:`--indent: ${1+(A-1)*.5}rem;`,class:"group relative flex gap-4 cursor-pointer text-mood-weak not-data-selected:hover:text-foreground data-selected:mood-accent data-selected:text-mood"},h.span({name:"Divider",class:"absolute h-full w-px left-0 bg-current/50 group-data-selected:bg-current not-group-data-indented:hidden group-hover:w-[4px] group-data-selected:w-[4px] transition-all"}),h.span({name:"Title",class:"group-data-indented:ml-(--indent) justify-start group-data-selected:font-semibold flex-1 py-0.5 z-1 transition-all"},k.textContent))}))}function be({value:d=L(void 0),type:s=d.rawVal!==void 0?typeof d.rawVal:"text",placeholder:c=`Enter ${s}...`,required:t=!1,lead:p,trail:k,onValueChanged:A,onValidityChanged:M,class:T,...F},...R){const x=X(T),B=m=>{var P;const g=(P=m.target)==null?void 0:P.value;typeof d.val=="number"&&Number(g)?d.val=Number(g):typeof d.val=="string"&&(d.val=g),A==null||A(d.rawVal),M==null||M(J.checkValidity())},J=h.input({class:"input flex-1",type:s,value:()=>d.val??"",oninput:B,placeholder:c,required:t});return h.div({name:"Text Input",class:()=>`flex p-0 *:first:pl-2 *:last:pr-2 gap-2 *:py-1 has-focus-visible:mood-accent  has-invalid:has-invalid:mood-critical ${x.val}`,...F},()=>["boolean","string","number","bigint"].includes(typeof p)?h.span(p):p,J,R,()=>["boolean","string","number","bigint"].includes(typeof k)?h.span(k):k)}function Ee({trigger:d=[U.HOVER,U.FOCUS],direction:s=ue.BOTTOM,class:c,...t},...p){const k=X(c);return Re({trigger:d,direction:s,class:()=>`variant-soft-outline badge glass px-2 py-1 max-w-xs text-xs flex ${k.val}`,...t},p)}function N(...d){const s=h.div({class:"language-typescript w-2xl *:scroll-m-21"},...d),c=En({class:"sticky top-24 w-xs not-xl:hidden"},s);return h.div({class:"flex gap-8 items-start"},s,c)}function $n(){return N(re({class:"language-typescript w-2xl *:scroll-m-21"},nn))}const An=Object.freeze(Object.defineProperty({__proto__:null,default:$n},Symbol.toStringTag,{value:"Module"})),zn=`# Derive

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
`;function On(){return N(re({class:"language-typescript w-2xl *:scroll-m-21"},zn))}const Ln=Object.freeze(Object.defineProperty({__proto__:null,default:On},Symbol.toStringTag,{value:"Module"})),xn=`# Elements

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
`;function Fn(){return N(re({class:"language-typescript w-2xl *:scroll-m-21"},xn))}const Rn=Object.freeze(Object.defineProperty({__proto__:null,default:Fn},Symbol.toStringTag,{value:"Module"})),In=`# Components

> Create your own composable pieces.
`;function Bn(){return N(re({class:"language-typescript w-2xl *:scroll-m-21"},In))}const Dn=Object.freeze(Object.defineProperty({__proto__:null,default:Bn},Symbol.toStringTag,{value:"Module"})),Hn=`# Context

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
`;function Vn(){return N(re({class:"language-typescript w-2xl *:scroll-m-21"},Hn))}const Nn=Object.freeze(Object.defineProperty({__proto__:null,default:Vn},Symbol.toStringTag,{value:"Module"}));function qn(){const d=L(`<div>
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
</div>`),s=h.textarea({value:d,oninput:c=>d.val=c.target.value,class:"variant-soft-outline w-full h-64"});return N(h.h1("Converter"),h.blockquote(h.p("Create Savant code from HTML.")),h.h2("Overview"),s,D({content:"Tags"},()=>H({language:"typescript"})),D({content:"Components"},()=>"None"),D({content:"Code"},()=>H({language:"typescript"})))}const Un=Object.freeze(Object.defineProperty({__proto__:null,default:qn},Symbol.toStringTag,{value:"Module"})),Gn=`# Router

> Manage site navigation.
`;function Wn(){return N(re({class:"language-typescript"},Gn))}const Zn=Object.freeze(Object.defineProperty({__proto__:null,default:Wn},Symbol.toStringTag,{value:"Module"}));function Kn(){const d=L("variant-filled"),s=L("mood-accent");return N(h.h1("Badge"),h.blockquote("Delivers small but important pieces of information."),h.h2("Design"),h.p("Badges are designed to be a small, unobtrusive elements that convey important information concisely. It is typically used to highlight new or unread items, notifications, or status updates."),h.p("Badges use a smaller font size and padding to make them the same height as standard text, ensuring it fits seamlessly into layouts."),h.p("Badges color the text slightly based on mood to indicate they are not interactive, differentiating them from small buttons which instead use the standard foreground text color."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},Xe({class:()=>`${d.val} ${s.val}`},"Demo Badge")),h.div({class:"flex flex-wrap gap-4 justify-center"},D({content:"Variant",class:"items-center"},K({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:d,class:"variant-outline w-48"})),D({content:"Mood",class:"items-center"},K({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:s,class:"variant-outline w-48"})))),()=>H({language:"ts"},`import { Badge } from "savant/ui"

Badge(
    { class: "${d.val} ${s.val}" },
    "Demo Badge",
)`),h.h2("Signature"),H({language:"ts"},`function Badge(
    props: HTMLElementProps,
    ...children: ChildDom[]
): HTMLElement`))}const Xn=Object.freeze(Object.defineProperty({__proto__:null,default:Kn},Symbol.toStringTag,{value:"Module"}));function Jn(){const d=L("variant-filled"),s=L("mood-accent"),c=L([]);return N(h.h1("Button"),h.blockquote("Performs some action on user click."),h.h2("Design"),h.p("Button components are used when a specific, clear and manual action needs to be performed by the user.."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},te({class:()=>`${[d.val,s.val,...c.val].join(" ")}`},"Demo Button")),h.div({class:"flex flex-wrap gap-4 justify-center"},D({content:"Variant",class:"items-center"},K({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:d,class:"variant-outline w-48"})),D({content:"Mood",class:"items-center"},K({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:s,class:"variant-outline w-48"})),D({content:"Extras",class:"items-center"},K({options:[{value:"transition"},{value:"hover:raised"},{value:"active:lowered"}],value:c,class:"variant-outline w-48"})))),()=>H({language:"ts"},`import { Button } from "savant/ui"

Button(
    { class: "${[d.val,s.val,...c.val].join(" ")}" },
    "Demo Button",
)`),h.h2("Signature"),H({language:"ts"},`function Button(
    props: HTMLButtonProps,
    ...children: ChildDom[]
): HTMLButtonElement`))}const Yn=Object.freeze(Object.defineProperty({__proto__:null,default:Jn},Symbol.toStringTag,{value:"Module"}));function Qn(){const d=L("variant-soft-outline"),s=L("mood-none");return N(h.h1("Checkbox"),h.blockquote("Offers clear binary choices."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},Fe({class:()=>`w-48 ${d.val} ${s.val}`},"Demo Checkbox")),h.div({class:"flex flex-wrap gap-4 justify-center"},D({content:"Variant",class:"items-center"},K({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:d,class:"variant-outline w-48"})),D({content:"Mood",class:"items-center"},K({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:s,class:"variant-outline w-48"})))),()=>H({language:"ts"},`import { Checkbox } from "savant/ui"

Checkbox(
    { class: \`${d.val} ${s.val}\` },
    "Demo Checkbox",
)`),h.h2("Signature"),H({language:"ts"},`function Checkbox(
    props: {
        value: State<boolean> = state(false),
        required: boolean = false,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`))}const ea=Object.freeze(Object.defineProperty({__proto__:null,default:Qn},Symbol.toStringTag,{value:"Module"}));function na(){const d=L("variant-outline"),s=L("mood-accent"),c=L(!0),t=L(50);return N(h.h1("Circular Progress Bar"),h.blockquote("Displays the progress state of a lengthy process."),h.h2("Design"),h.p("Circular Progress Bars are used to compactly provide feedback to the user on the current progress state of a lengthy process."),h.p("Circular Progress Bars default to matching the size of enclosing text flows, ensuring they fit seamlessly into layouts."),h.p("Circular Progress Bars can be given children which will be displayed within the circle. Such children should be short, typically a percentage or number. Anything longer should be placed beneath the progress bar."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},gn({progress:t,indefinite:c,class:()=>`${d.val} ${s.val}`},"Loading...")),h.div({class:"flex flex-wrap gap-4 justify-center"},D({content:"Variant",class:"items-center"},K({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:d,class:"variant-outline w-48"})),D({content:"Mood",class:"items-center"},K({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:s,class:"variant-outline w-48"})),D({content:"Progress",class:"items-center"},be({value:t,min:0,max:100,class:"variant-outline w-48"})),D({content:"Indefinite",class:"items-center"},Fe({value:c,class:"variant-outline w-48"},"Enabled")))),()=>H({language:"ts"},`import { CircularProgressBar } from "savant/ui"

CircularProgressBar(
    {
        progress: ${t.val},
        indefinite: ${c.val},
        class: "${d.val} ${s.val}"
    },
    "Loading...",
)`),h.h2("Signature"),H({language:"ts"},`function CircularProgressBar(
    {
        progress?: number = 50,
        indefinite?: boolean = false,

        ...restProps
    }: CircularProgressBarProps,
    ...children: ChildDom[]
): HTMLElement`))}const aa=Object.freeze(Object.defineProperty({__proto__:null,default:na},Symbol.toStringTag,{value:"Module"}));function ta(){return N(h.h1("Code"),h.blockquote("Simple code syntax highlighting via ",h.a({href:"https://prismjs.com",class:"anchor"},"PrismJS"),"."),mn({class:"mood-info p",icon:"info"},re({class:"language-typescript"},"Every code snippet in these docs uses the `Code` component.")),h.h2("Demo"),()=>H({language:"ts"},`import { Code } from "savant/ui"

Code(
    { language: "ts" },

    \`\\
import { Code } from "savant/ui"

Code(
    { language: "ts" },
    ...
)\`,
)`),h.h2("Signature"),H({language:"ts"},`function Code(
    props: { language: string, ...HTMLElementProps },
    ...children: ChildDom[]
): HTMLElement`))}const ra=Object.freeze(Object.defineProperty({__proto__:null,default:ta},Symbol.toStringTag,{value:"Module"}));function da(){const d=L("text"),s=L("variant-soft-outline"),c=L("mood-none");return N(h.h1("Input"),h.blockquote("Direct entry of text or numbers."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex flex-col justify-center gap-8"},()=>be({value:L(d.val==="text"?"Example text":42),class:()=>`${s.val} ${c.val}`})),h.div({class:"flex flex-wrap gap-4 justify-center"},D({content:"Type",class:"items-center"},K({options:[{value:"text"},{value:"number"}],value:d,class:"variant-outline w-48"})),D({content:"Variant",class:"items-center"},K({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:s,class:"variant-outline w-48"})),D({content:"Mood",class:"items-center"},K({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:c,class:"variant-outline w-48"})))),()=>H({language:"ts"},`import { Input } from "savant/ui"

Input({
    value: state(${d.val==="text"?'"Example text"':42}),
    class: "${s.val} ${c.val}"
})`),h.h2("Signature"),H({language:"ts"},`function Input<T extends string | number>(
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
): HTMLElement`))}const ua=Object.freeze(Object.defineProperty({__proto__:null,default:da},Symbol.toStringTag,{value:"Module"}));function sa(){const d=L([U.CLICK]);return N(h.h1("Popup"),h.blockquote("Versatile dynamic content floating near its parent."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex justify-center flex-col gap-8 w-3xs"},te({class:"variant-filled"},"Popup Trigger",()=>Re({trigger:d.val,class:"card glass vessel flex flex-col shadow"},"Hello! Click outside me to close."))),h.div({class:"flex flex-wrap gap-4 justify-center"},D({content:"Trigger",class:"items-center"},K({options:[{value:U.CLICK},{value:U.HOVER},{value:U.HOVER_IN},{value:U.HOVER_OUT},{value:U.FOCUS},{value:U.FOCUS_IN},{value:U.FOCUS_OUT}],value:d,class:"variant-outline w-48"})))),()=>H({language:"ts"},`import { Button, Popup } from "savant/ui"

Button(
    {
        class: "variant-filled",
    },

    "Popup Trigger",

    () =>
        Popup(
            {
                trigger: ${JSON.stringify(d.val)},
                class: "card glass vessel flex flex-col shadow",
            },

            "Hello! Click outside me to close.",
        ),
),`),h.h2("Signature"),H({language:"ts"},`function Popup(
    props: {
        visible: State<boolean> = state(false),
        direction: PopupDirection = PopupDirection.BOTTOM,
        trigger: PopupTrigger = PopupTrigger.CLICK,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`))}const oa=Object.freeze(Object.defineProperty({__proto__:null,default:sa},Symbol.toStringTag,{value:"Module"}));function ia(){const d=L("variant-soft-outline"),s=L("mood-none");return N(h.h1("Radio"),h.blockquote("Offers a clear and direct set of exclusive options."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 h-48 flex items-center"},Mn({value:L("Option 1"),options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"}],class:()=>`w-48 ${d.val} ${s.val}`})),h.div({class:"flex flex-wrap gap-4 justify-center"},D({content:"Variant",class:"items-center"},K({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:d,class:"variant-outline w-48"})),D({content:"Mood",class:"items-center"},K({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:s,class:"variant-outline w-48"})))),()=>H({language:"ts"},`import { Radio } from "savant/ui"

Radio({
    value: state("Option 1"),
    options: [
        { value: "Option 1" },
        { value: "Option 2" },
        { value: "Option 3" },
    ],
    class: "${d.val} ${s.val}",
})`),h.h2("Signature"),H({language:"ts"},`function Radio<T>(
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
}`))}const ca=Object.freeze(Object.defineProperty({__proto__:null,default:ia},Symbol.toStringTag,{value:"Module"})),le={SINGLE:"single",MULTICHIPS:"multichips"};function la(){const d=L(le.SINGLE),s=L("variant-soft-outline"),c=L("mood-none");return N(h.h1("Select"),h.blockquote("Enables compact selection of one or more options."),h.h2("Demo"),h.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 flex flex-col justify-center gap-8 w-3xs h-48"},()=>K({value:d.val===le.SINGLE?L("Option 1"):L(["Option 1","Option 2"]),options:[{value:"Option 1"},{value:"Option 2",disabled:!0},{value:"Option 3"},{value:"Option 4"}],useChips:d.val===le.MULTICHIPS,class:()=>`${s.val} ${c.val}`})),h.div({class:"flex flex-wrap gap-4 justify-center"},D({content:"Type",class:"items-center"},K({options:[{value:"single"},{value:"multi"},{value:"multichips"}],value:d,class:"variant-outline w-48"})),D({content:"Variant",class:"items-center"},K({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:s,class:"variant-outline w-48"})),D({content:"Mood",class:"items-center"},K({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:c,class:"variant-outline w-48"})))),()=>H({language:"ts"},`import { Select } from "savant/ui"

Select({
    value: state(${d.val===le.SINGLE?'"Option 1"':'["Option 1", "Option 2"])'}),
    options: [
        { value: "Option 1" },
        { value: "Option 2", disabled: true },
        { value: "Option 3" },
        { value: "Option 4" },
    ],${d.val===le.MULTICHIPS?`
    useChips: true,`:""}
    class: "${s.val} ${c.val}",
})`),h.h2("Signature"),H({language:"ts"},`function Select<T>(
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
}`))}const fa=Object.freeze(Object.defineProperty({__proto__:null,default:la},Symbol.toStringTag,{value:"Module"}));function pa(){return N(h.h1("Tooltip"),h.blockquote("Provides concise contextual extra information."),h.h2("Demo"),h.div({class:"card vessel flex flex-col items-center gap-4"},h.div({class:"p-8 flex flex-col gap-8 w-3xs h-48 justify-center"},te({class:"variant-base text-accent font-bold"},"Tooltip (Hover Me)",Ee({direction:"top",class:"left-1/2 -translate-x-1/2"},"Demo Tooltip")))),()=>H({language:"ts"},`import { Button, Tooltip } from "savant/ui"

Button(
    {
        class: "variant-base text-accent font-bold",
    },

    "Tooltip (Hover Me)",

    Tooltip(
        {
            direction: "top",
            class: "left-1/2 -translate-x-1/2",
        },

        "Demo Tooltip",
    ),
)`),h.h2("Signature"),H({language:"ts"},`function Tooltip(
    props: {
        direction: PopupDirection = PopupDirection.BOTTOM,
        trigger: PopupTrigger = PopupTrigger.CLICK,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`))}const ha=Object.freeze(Object.defineProperty({__proto__:null,default:pa},Symbol.toStringTag,{value:"Module"}));function ma(){const d=L(""),s=L(""),c=L(!1),t=L(!1),p=L(!1);return vn({name:"Sign In",class:"flex flex-col gap-4"},h.span({class:"text-xl font-bold"},"Sign In"),D({content:"Username"},be({type:"username",value:d,placeholder:"Enter username...",required:!0,lead:Se("person"),class:"variant-outline"})),D({content:h.span({class:"flex flex-1 justify-between items-center"},"Password",te({type:"button",class:"mood-accent text-mood"},"Forgot?"))},be({type:()=>t.val?"text":"password",value:s,placeholder:"Enter password...",required:!0,lead:Se("key"),trail:te({onclick:()=>t.val=!t.val},Se({class:()=>`transition ${t.val?"":"text-foreground-weak"}`},()=>t.val?"visibility":"visibility_off")),onValidityChanged:k=>p.val=k,class:"variant-outline"})),Fe({value:c,class:"variant-outline"},h.span({class:"text-mini text-mood-weak"},"Remember Password")),h.div({class:"flex gap-4 justify-end"},te({type:"button",class:"variant-base hover:variant-soft"},"Cancel"),te({type:"button",class:"variant-filled mood-accent"},"Sign In")))}function ga(){return N(h.h1("Sign In"),h.blockquote("Example Sign In component."),h.h2("Demo"),h.div({class:"card vessel bg-zebra zebra-opacity-20 flex flex-col items-center gap-4"},h.div({class:"p-8 card vessel bg-background flex items-center"},ma())),h.h2("Code"),H({language:"typescript"},`function SignIn() {
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
                            class: "mood-accent text-mood",
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
                                        ? "text-foreground-weak"
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
                { class: "text-mini text-mood-weak" },
                "Remember Password",
            ),
        ),

        html.div(
            { class: "flex gap-4 justify-end" },

            Button(
                {
                    class: "variant-base hover:variant-soft",
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
}`))}const va=Object.freeze(Object.defineProperty({__proto__:null,default:ga},Symbol.toStringTag,{value:"Module"})),_a="/Savant/assets/logo-BRWjpkZq.svg";function ba(){const d="flex gap-4 items-center";return h.header({name:"Header",class:"bg-background-translucent fixed top-0 flex w-full justify-between gap-4 px-6 py-2 glass border-b border-surface-500/50 z-10"},h["left-content"]({class:d},h.img({src:_a,class:"size-12 -m-2 not-dark:brightness-0"}),h.span({class:"text-xl font-bold"},"Savant"),Xe({class:"cursor-help variant-filled mood-info rounded-full px-1 py-0.5"},h.i("construction"),Ee({class:"mood-info"},"Savant is still under construction"))),h["right-content"]({class:d},h.a({name:"GitHub",class:"variant-base !rounded-full **:fill-current hover:variant-soft text-lg !p-2",href:"https://github.com/OscarCookeAbbott/Savant",target:"_blank"},ae.svg({viewBox:"0 0 1024 1024",class:"size-[1em]"},ae.path({transform:"scale(64)",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"})),Ee({class:"right-0"},"Savant GitHub"))))}const Je=L(""),Ie=L(window.location.pathname),Be=L(window.location.hash),qe=L({}),Ue=L({}),wa="/",ya=()=>Ie.val.slice(wa.length-1)+Be.val,ka=(d,{replace:s}={replace:!1})=>{const c=`${Je.val}${d}`;s?window.history.replaceState({},"",c):window.history.pushState({},"",c),Ie.val=c.split("#")[0],Be.val=c.split("#").length>1?"#"+c.split("#")[1]:""};function Pa({replace:d=!1,disabled:s=!1,onclick:c,href:t,class:p,...k},...A){const M=X(p);return h.a({href:t,onclick(T){T.preventDefault();const F=hn(t);s||F===void 0||(ka(String(F),{replace:d}),typeof c=="function"&&c.call(this,T))},tabIndex:0,class:()=>`not-disabled:focus-visible:focus-ring ${M.val}`,...k},...A)}const Ca=/:([^\\d|^/]([^/]+)?)/;let Me;function Sa({routes:d,basename:s}){const c=h.div({name:"Savant Router",style:"display: contents;"}),t=M=>{if(!M)return"";for(M.startsWith("/")||(M="/"+M);M!=="/"&&M.endsWith("/");)M=M.slice(0,M.length-1);return M=decodeURI(M),M},p=(M,T)=>{M=t(M),T=t(T);const F=M.split("/"),R={};let x=null;for(const B of d){const J=t(T+B.path).split("/");if(J.length!==F.length)continue;let m=!0;for(let g=0;g<J.length;g++){const P=J[g],w=F[g];if(Ca.test(P))R[decodeURIComponent(P.slice(1))]=decodeURIComponent(w);else if(w!==P){m=!1;break}}if(m){x=B;break}}return x||(x=d.find(B=>B.path==="*")||null),{route:x,params:R}},k=M=>{if(M.startsWith("?")&&(M=M.slice(1).trim()),!M)return{};const T={},F=M.split("&");for(const R of F){const[x,B]=R.split("=");T[decodeURIComponent(x)]=decodeURIComponent(B)}return T},A=()=>{const{route:M,params:T}=p(window.location.pathname+window.location.hash,s||"");if(!M){Me=void 0,c.replaceChildren(),ce(c,h.div("Could not find route"));return}if(M===Me){Ue.val=k(window.location.search),qe.val=T;return}Me=M,Ue.rawVal=k(window.location.search),qe.rawVal=T,c.replaceChildren(),ce(c,M.dom)};return window.onpopstate=A,ee(()=>{const M=Ie.val,T=Be.val;(M||T)&&setTimeout(()=>{A()})}),ee(()=>{Je.val=t(s||"")}),c}function ja({options:d,class:s,...c}){const t=ee(()=>decodeURI(ya()));return h.div({name:"Navbar",class:`p-6 flex flex-col overflow-y-auto fixed top-12 h-[calc(100%-3rem)] left-0 bg-background border-r border-surface-500/50 ${s}`,...c},d.map(p=>Ye(p,0,t)))}function Ye(d,s,c){var t;return[Pa({href:d.path,disabled:d.path===void 0,onclick:()=>{window.scrollTo({top:0,left:0})},"$data-selected":()=>c.val===`${"/Savant/".slice(0,-1)}${d.path}`,"$data-group":()=>s===0&&d.children,"$data-indented":()=>s!==0,style:`--indent: ${s}rem;`,class:"relative flex gap-4 group text-mood-weak data-selected:text-mood data-group:font-semibold data-group:not-first:mt-6 data-group:mb-1 not-data-selected:hover:text-foreground data-selected:mood-accent data-selected:z-10"},h.span({name:"Divider",class:"absolute h-full w-px left-0 bg-current/50 group-data-selected:bg-current not-group-data-indented:hidden group-hover:w-1 group-data-selected:w-1 transition-all"}),h.span({name:"Title",class:"group-data-indented:ml-(--indent) justify-start group-data-selected:font-semibold flex-1 py-0.5 z-1 transition-all"},d.name)),(t=d.children)==null?void 0:t.map(p=>Ye(p,s+1,c))]}const Ma=`# Savant

> A refreshingly simple and smart framework with pep!

Savant is a tiny, zero-dependency, pure-TypeScript and pure-DOM framework for reactive web development.

Using nothing but standard JS/TS functions and any existing tooling, _anybody_ can build a reactive website in minutes.

Inspired by the incredible [VanJS](https://vanjs.org).

## Counter Example

\`\`\`typescript
// Counter.ts
import { add, html, state } from "savant"

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
\`\`\`

\`\`\`typescript
// index.ts
import { add, html, state } from "savant"
import { Router } from "savant/routing"

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
`;function Ta(){return N(re({class:"language-typescript w-2xl *:scroll-m-21"},Ma))}const Ea=`# Savant Core

> All the essentials for functional, declarative web apps.
`;function $a(){return N(re({class:"language-typescript"},Ea))}const Aa=`# Savant Routing

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
`;function za(){return N(re({class:"language-typescript"},Aa))}const Oa=`# Savant UI

> Make great design effortless.
`;function La(){return N(re({class:"language-typescript"},Oa))}const xa=Object.assign({"./src/routes/1 core/1 State/index.ts":An,"./src/routes/1 core/2 Derive/index.ts":Ln,"./src/routes/1 core/3 Elements/index.ts":Rn,"./src/routes/1 core/4 Components/index.ts":Dn,"./src/routes/1 core/5 Context/index.ts":Nn,"./src/routes/1 core/6 Converter/index.ts":Un}),Fa=Object.assign({"./src/routes/2 routing/1 Router/index.ts":Zn}),Ra=Object.assign({"./src/routes/3 ui/Badge/index.ts":Xn,"./src/routes/3 ui/Button/index.ts":Yn,"./src/routes/3 ui/Checkbox/index.ts":ea,"./src/routes/3 ui/Circular Progress Bar/index.ts":aa,"./src/routes/3 ui/Code/index.ts":ra,"./src/routes/3 ui/Input/index.ts":ua,"./src/routes/3 ui/Popup/index.ts":oa,"./src/routes/3 ui/Radio/index.ts":ca,"./src/routes/3 ui/Select/index.ts":fa,"./src/routes/3 ui/Tooltip/index.ts":ha}),Ia=Object.assign({"./src/routes/examples/Sign In/index.ts":va}),me=d=>Object.entries(d).map(([s,c])=>{const t=s.replace("./src/routes/","").replace("/index.ts",""),p=t.split("/").slice(-1)[0].replace(/^\d+\s/,""),k=t.split("/").slice(0,-1).map(A=>A.replace(/^\d+\s/,"").replace(" ","-")).join("/");return{name:p,path:`/#!/${k}/${p}`,dom:c.default}}),Qe=[{name:"Introduction",path:"/",dom:Ta},{name:"Core",path:"/#!/core",dom:$a,children:me(xa)},{name:"Routing",path:"/#!/routing",dom:za,children:me(Fa)},{name:"Savant UI",path:"/#!/ui",dom:La,children:me(Ra)},{name:"Examples",children:me(Ia)}],Ba=Qe.flatMap(d=>[...d.path?[d]:[],...d.children??[]]);function Da(){return h.div({name:"App",class:"flex flex-col relative size-full"},ba(),h.div({class:"flex flex-1"},ja({options:Qe,class:"min-w-64 not-lg:hidden"}),h.div({class:"lg:ml-64 overflow-clip flex flex-1 justify-center"},h.div({class:"flex flex-col px-8 pt-24 pb-16 gap-4"},Sa({basename:"/Savant/".slice(0,-1),routes:Ba})))))}ce(document.body,Da())});export default Ha();
