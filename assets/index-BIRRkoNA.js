var Ze=(u,o)=>()=>(o||u((o={exports:{}}).exports,o),o.exports);var Cn=Ze(($n,ve)=>{(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))r(h);new MutationObserver(h=>{for(const S of h)if(S.type==="childList")for(const E of S.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&r(E)}).observe(document,{childList:!0,subtree:!0});function f(h){const S={};return h.integrity&&(S.integrity=h.integrity),h.referrerPolicy&&(S.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?S.credentials="include":h.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function r(h){if(h.ep)return;h.ep=!0;const S=f(h);fetch(h.href,S)}})();const Ke=`# State

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
`;var Je=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},L=function(u){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,f=0,r={},h={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function m(g){return g instanceof S?new S(g.type,m(g.content),g.alias):Array.isArray(g)?g.map(m):g.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++f}),m.__id},clone:function m(g,w){var k,P;switch(w=w||{},h.util.type(g)){case"Object":if(P=h.util.objId(g),w[P])return w[P];for(var A in k={},w[P]=k,g)g.hasOwnProperty(A)&&(k[A]=m(g[A],w));return k;case"Array":return P=h.util.objId(g),w[P]?w[P]:(k=[],w[P]=k,g.forEach(function(e,n){k[n]=m(e,w)}),k);default:return g}},getLanguage:function(m){for(;m;){var g=o.exec(m.className);if(g)return g[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,g){m.className=m.className.replace(RegExp(o,"gi"),""),m.classList.add("language-"+g)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(k){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(k.stack)||[])[1];if(m){var g=document.getElementsByTagName("script");for(var w in g)if(g[w].src==m)return g[w]}return null}},isActive:function(m,g,w){for(var k="no-"+g;m;){var P=m.classList;if(P.contains(g))return!0;if(P.contains(k))return!1;m=m.parentElement}return!!w}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(m,g){var w=h.util.clone(h.languages[m]);for(var k in g)w[k]=g[k];return w},insertBefore:function(m,g,w,k){var P=(k=k||h.languages)[m],A={};for(var e in P)if(P.hasOwnProperty(e)){if(e==g)for(var n in w)w.hasOwnProperty(n)&&(A[n]=w[n]);w.hasOwnProperty(e)||(A[e]=P[e])}var a=k[m];return k[m]=A,h.languages.DFS(h.languages,function(d,i){i===a&&d!=m&&(this[d]=A)}),A},DFS:function m(g,w,k,P){P=P||{};var A=h.util.objId;for(var e in g)if(g.hasOwnProperty(e)){w.call(g,e,g[e],k||e);var n=g[e],a=h.util.type(n);a!=="Object"||P[A(n)]?a!=="Array"||P[A(n)]||(P[A(n)]=!0,m(n,w,e,P)):(P[A(n)]=!0,m(n,w,null,P))}}},plugins:{},highlightAll:function(m,g){h.highlightAllUnder(document,m,g)},highlightAllUnder:function(m,g,w){var k={callback:w,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};h.hooks.run("before-highlightall",k),k.elements=Array.prototype.slice.apply(k.container.querySelectorAll(k.selector)),h.hooks.run("before-all-elements-highlight",k);for(var P,A=0;P=k.elements[A++];)h.highlightElement(P,g===!0,k.callback)},highlightElement:function(m,g,w){var k=h.util.getLanguage(m),P=h.languages[k];h.util.setLanguage(m,k);var A=m.parentElement;A&&A.nodeName.toLowerCase()==="pre"&&h.util.setLanguage(A,k);var e={element:m,language:k,grammar:P,code:m.textContent};function n(d){e.highlightedCode=d,h.hooks.run("before-insert",e),e.element.innerHTML=e.highlightedCode,h.hooks.run("after-highlight",e),h.hooks.run("complete",e),w&&w.call(e.element)}if(h.hooks.run("before-sanity-check",e),(A=e.element.parentElement)&&A.nodeName.toLowerCase()==="pre"&&!A.hasAttribute("tabindex")&&A.setAttribute("tabindex","0"),!e.code)return h.hooks.run("complete",e),void(w&&w.call(e.element));if(h.hooks.run("before-highlight",e),e.grammar)if(g&&u.Worker){var a=new Worker(h.filename);a.onmessage=function(d){n(d.data)},a.postMessage(JSON.stringify({language:e.language,code:e.code,immediateClose:!0}))}else n(h.highlight(e.code,e.grammar,e.language));else n(h.util.encode(e.code))},highlight:function(m,g,w){var k={code:m,grammar:g,language:w};if(h.hooks.run("before-tokenize",k),!k.grammar)throw new Error('The language "'+k.language+'" has no grammar.');return k.tokens=h.tokenize(k.code,k.grammar),h.hooks.run("after-tokenize",k),S.stringify(h.util.encode(k.tokens),k.language)},tokenize:function(m,g){var w=g.rest;if(w){for(var k in w)g[k]=w[k];delete g.rest}var P=new T;return O(P,P.head,m),M(m,P,g,P.head,0),function(A){for(var e=[],n=A.head.next;n!==A.tail;)e.push(n.value),n=n.next;return e}(P)},hooks:{all:{},add:function(m,g){var w=h.hooks.all;w[m]=w[m]||[],w[m].push(g)},run:function(m,g){var w=h.hooks.all[m];if(w&&w.length)for(var k,P=0;k=w[P++];)k(g)}},Token:S};function S(m,g,w,k){this.type=m,this.content=g,this.alias=w,this.length=0|(k||"").length}function E(m,g,w,k){m.lastIndex=g;var P=m.exec(w);if(P&&k&&P[1]){var A=P[1].length;P.index+=A,P[0]=P[0].slice(A)}return P}function M(m,g,w,k,P,A){for(var e in w)if(w.hasOwnProperty(e)&&w[e]){var n=w[e];n=Array.isArray(n)?n:[n];for(var a=0;a<n.length;++a){if(A&&A.cause==e+","+a)return;var d=n[a],i=d.inside,c=!!d.lookbehind,s=!!d.greedy,l=d.alias;if(s&&!d.pattern.global){var C=d.pattern.toString().match(/[imsuy]*$/)[0];d.pattern=RegExp(d.pattern.source,C+"g")}for(var y=d.pattern||d,v=k.next,b=P;v!==g.tail&&!(A&&b>=A.reach);b+=v.value.length,v=v.next){var t=v.value;if(g.length>m.length)return;if(!(t instanceof S)){var _,j=1;if(s){if(!(_=E(y,b,m,c))||_.index>=m.length)break;var z=_.index,H=_.index+_[0].length,$=b;for($+=v.value.length;z>=$;)$+=(v=v.next).value.length;if(b=$-=v.value.length,v.value instanceof S)continue;for(var x=v;x!==g.tail&&($<H||typeof x.value=="string");x=x.next)j++,$+=x.value.length;j--,t=m.slice(b,$),_.index-=b}else if(!(_=E(y,0,t,c)))continue;z=_.index;var G=_[0],Y=t.slice(0,z),N=t.slice(z+G.length),W=b+t.length;A&&W>A.reach&&(A.reach=W);var Z=v.prev;if(Y&&(Z=O(g,Z,Y),b+=Y.length),I(g,Z,j),v=O(g,Z,new S(e,i?h.tokenize(G,i):G,l,G)),N&&O(g,v,N),j>1){var Q={cause:e+","+a,reach:W};M(m,g,w,v.prev,b,Q),A&&Q.reach>A.reach&&(A.reach=Q.reach)}}}}}}function T(){var m={value:null,prev:null,next:null},g={value:null,prev:m,next:null};m.next=g,this.head=m,this.tail=g,this.length=0}function O(m,g,w){var k=g.next,P={value:w,prev:g,next:k};return g.next=P,k.prev=P,m.length++,P}function I(m,g,w){for(var k=g.next,P=0;P<w&&k!==m.tail;P++)k=k.next;g.next=k,k.prev=g,m.length-=P}if(u.Prism=h,S.stringify=function m(g,w){if(typeof g=="string")return g;if(Array.isArray(g)){var k="";return g.forEach(function(a){k+=m(a,w)}),k}var P={type:g.type,content:m(g.content,w),tag:"span",classes:["token",g.type],attributes:{},language:w},A=g.alias;A&&(Array.isArray(A)?Array.prototype.push.apply(P.classes,A):P.classes.push(A)),h.hooks.run("wrap",P);var e="";for(var n in P.attributes)e+=" "+n+'="'+(P.attributes[n]||"").replace(/"/g,"&quot;")+'"';return"<"+P.tag+' class="'+P.classes.join(" ")+'"'+e+">"+P.content+"</"+P.tag+">"},!u.document)return u.addEventListener&&(h.disableWorkerMessageHandler||u.addEventListener("message",function(m){var g=JSON.parse(m.data),w=g.language,k=g.code,P=g.immediateClose;u.postMessage(h.highlight(k,h.languages[w],w)),P&&u.close()},!1)),h;var B=h.util.currentScript();function D(){h.manual||h.highlightAll()}if(B&&(h.filename=B.src,B.hasAttribute("data-manual")&&(h.manual=!0)),!h.manual){var X=document.readyState;X==="loading"||X==="interactive"&&B&&B.defer?document.addEventListener("DOMContentLoaded",D):window.requestAnimationFrame?window.requestAnimationFrame(D):window.setTimeout(D,16)}return h}(Je);typeof ve<"u"&&ve.exports&&(ve.exports=L),typeof global<"u"&&(global.Prism=L);L.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},L.languages.markup.tag.inside["attr-value"].inside.entity=L.languages.markup.entity,L.languages.markup.doctype.inside["internal-subset"].inside=L.languages.markup,L.hooks.add("wrap",function(u){u.type==="entity"&&(u.attributes.title=u.content.replace(/&amp;/,"&"))}),Object.defineProperty(L.languages.markup.tag,"addInlined",{value:function(u,o){var f={};f["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:L.languages[o]},f.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:f}};r["language-"+o]={pattern:/[\s\S]+/,inside:L.languages[o]};var h={};h[u]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return u}),"i"),lookbehind:!0,greedy:!0,inside:r},L.languages.insertBefore("markup","cdata",h)}}),Object.defineProperty(L.languages.markup.tag,"addAttribute",{value:function(u,o){L.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(`(^|["'\\s])(?:`+u+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:L.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),L.languages.html=L.languages.markup,L.languages.mathml=L.languages.markup,L.languages.svg=L.languages.markup,L.languages.xml=L.languages.extend("markup",{}),L.languages.ssml=L.languages.xml,L.languages.atom=L.languages.xml,L.languages.rss=L.languages.xml;(function(u){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;u.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+o.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},u.languages.css.atrule.inside.rest=u.languages.css;var f=u.languages.markup;f&&(f.tag.addInlined("style","css"),f.tag.addAttribute("style","css"))})(L);L.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};L.languages.javascript=L.languages.extend("clike",{"class-name":[L.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),L.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,L.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:L.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:L.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:L.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:L.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:L.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),L.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:L.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),L.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),L.languages.markup&&(L.languages.markup.tag.addInlined("script","javascript"),L.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),L.languages.js=L.languages.javascript;(function(u){u.languages.typescript=u.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),u.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete u.languages.typescript.parameter,delete u.languages.typescript["literal-property"];var o=u.languages.extend("typescript",{});delete o["class-name"],u.languages.typescript["class-name"].inside=o,u.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:o}}}}),u.languages.ts=u.languages.typescript})(L);function Se(u=0){return new Promise(o=>setTimeout(o,u))}function Xe(u,o){const f=u.indexOf(o);return f===-1?u:[...u.slice(0,f),...u.slice(f+1)]}function Qe(u,o){return u.indexOf(o)===-1?u.concat(o):Xe(u,o)}function Ye(u,o){const f=new AbortController;return document.addEventListener("click",r=>{r.target instanceof Node&&(u.contains(r.target)||document.contains(r.target)&&o(r))},{signal:f.signal}),f}function ea(u,o){for(const f of o)if(f[0]===u)return f[1];throw`error: non-exhaustive patterns: ${u} not covered`}function J(u){return typeof u=="function"?ae(u):u instanceof pe?ae(()=>u.val):ae(()=>u)}function oe(u,o){const f=Array.isArray(u)?u:[u],r=Array.isArray(o)?o:[o];for(const h of r)if(f.includes(h))return!0;return!1}function aa(u){return u instanceof pe?u.val:typeof u=="function"?u():u}let pe=class{constructor(o,f){this._rawVal=o,this._oldVal=o,this._bindings=[],this._listeners=[],this._onDestroy=f}get val(){var o;return(o=de==null?void 0:de._getters)==null||o.add(this),this._rawVal}get rawVal(){return this._rawVal}get oldVal(){var o;return(o=de==null?void 0:de._getters)==null||o.add(this),this._oldVal}set val(o){var f;if((f=de==null?void 0:de._setters)==null||f.add(this),o!==this.rawVal){if(this._rawVal=o,this._bindings.length+this._listeners.length===0){this._oldVal=o;return}_e==null||_e.add(this),fe=Ne(fe,this,sa)}}set rawVal(o){if(o!==this.rawVal&&(this._rawVal=o,this._bindings.length+this._listeners.length===0)){this._oldVal=o;return}}},xe=class{constructor(o){this.func=o}};const na=1e3,ra={isConnected:!0};let fe,_e,de,te,he,Ie={};function Ne(u,o,f,r){return u||setTimeout(f,r),(u??new Set).add(o)}function $e(u,o,f){let r=de;de=o;const h=u(f);return de=r,h}function be(u){return u.filter(o=>{var f;return(f=o._dom)==null?void 0:f.isConnected})}function Ee(u){he=Ne(he,u,()=>{var o;for(let f of he??[])f._bindings=be(f._bindings),f._listeners=be(f._listeners),f._bindings.length===0&&f._listeners.length===0&&((o=f._onDestroy)==null||o.call(f));he=void 0},na)}function F(u,o){return new pe(u,o)}function ee(u){return new xe(u)}function ie(u,o){const f={_getters:new Set,_setters:new Set},r={func:u,state:void 0,_dom:void 0},h=te;te=[];const S=$e(u,f,o),E=(S??document)instanceof Node?S:new Text(String(S));for(const M of f._getters)f._setters.has(M)||(Ee(M),M._bindings.push(r));for(let M of te)M._dom=E;return te=h,r._dom=E}function da(u,o,f){const r={_getters:new Set,_setters:new Set};o.val=$e(u,r,o.rawVal);const h={func:u,state:o,_dom:f};h._dom||(te?te.push(h):h._dom=ra);for(let S of r._getters)r._setters.has(S)||(Ee(S),S._listeners.push(h));return o}function ae(u,o){const f={_getters:new Set,_setters:new Set},r=F($e(u,f,void 0),o),h={func:u,state:r,_dom:void 0};h._dom||(te?te.push(h):h._dom=document.getRootNode().firstChild);for(let S of f._getters)f._setters.has(S)||(Ee(S),S._listeners.push(h));return r}function ce(u,...o){for(const f of o.flat(1/0)){let r;f instanceof pe?r=ie(()=>f.val):typeof f=="function"?r=ie(f):f instanceof Node?r=f:["boolean","string","number","bigint"].includes(typeof f)&&(r=String(f)),r!=null&&u.append(r)}return u}function ua(u,o,f,...r){var h;const S=Object.getPrototypeOf(f)===Object.prototype,[{is:E,...M},...T]=S?[f,r]:[{},[f,...r]],O=u?document.createElementNS(u,o,{is:E}):document.createElement(o,{is:E});for(let[I,B]of Object.entries(M)){const D=w=>w?Object.getOwnPropertyDescriptor(w,I)??D(Object.getPrototypeOf(w)):void 0,X=`${o},${I}`,m=Ie[X]??(Ie[X]=(h=D(Object.getPrototypeOf(O)))==null?void 0:h.set),g=I.startsWith("on")?(w,k)=>{const P=I.slice(2);k&&O.removeEventListener(P,k),O.addEventListener(P,w)}:(m==null?void 0:m.bind(O))??O.setAttribute.bind(O,I);if(!I.startsWith("on")&&typeof B=="function"){B=ae(B),ie(()=>(g(B.val,B._oldVal),O));continue}if(typeof B=="object"&&B instanceof pe){ie(()=>(g(B.val,B._oldVal),O));continue}if(typeof B=="object"&&B instanceof xe){const w=ae(B.func);ie(()=>(w.val?g(w.val,w._oldVal):O.removeAttribute(I),O));continue}g(B)}return ce(O,T)}function ta(u,o){if(!o)return u.remove();if(o!==u)return u.replaceWith(o)}function sa(){let u=0,o=[...fe??[]].filter(r=>r.rawVal!==r._oldVal);do{_e=new Set;const r=new Set(o.flatMap(h=>h._listeners=be(h._listeners)));for(let h of r)da(h.func,h.state,h._dom),h._dom=void 0}while(++u<100&&(o=[..._e??[]]).length>0);const f=[...fe??[]].filter(r=>r.rawVal!==r._oldVal);fe=void 0;for(let r of new Set(f.flatMap(h=>h._bindings=be(h._bindings))))ta(r._dom,ie(r.func,r._dom)),r._dom=void 0;for(let r of f)r._oldVal=r.rawVal}function Ae(u){return{get:(o,f)=>ua.bind(void 0,u,f)}}const p=new Proxy({},Ae()),ne=new Proxy({},Ae("http://www.w3.org/2000/svg"));new Proxy({},Ae("http://www.w3.org/1998/Math/MathML"));function Ue({class:u,...o},...f){const r=J(u);return p.span({class:()=>`badge flex items-center gap-1 select-none ${r.val}`,...o},f)}function re({class:u,...o},...f){const r=J(u);return p.button({tabIndex:0,class:()=>`button flex items-center gap-2 select-none ${r.val}`,...o},f)}function oa({icon:u,class:o,...f},...r){const h=J(o);return p.div({class:()=>`flex items-center variant-soft-outline text-mood-weak gap-2 ${h.val}`,...f},p.i({class:"text-mood"},u),r)}function Te({value:u=F(!1),required:o,class:f,...r},...h){const S=J(f);return p.div({name:"Checkbox",onclick:()=>u.val=!u.val,"data-selected":ee(()=>u.val||void 0),class:()=>{var E;return`flex cursor-pointer justify-between items-center gap-2 select-none group ${(E=S.val)==null?void 0:E.split(" ").filter(M=>!M.includes("variant")).join(" ")}`},...r},h,re({role:"checkbox",type:"button",tabIndex:0,class:()=>{var E;return`button size-5 !rounded-md aspect-square focus-visible:mood-accent !p-0.5 group-has-invalid:mood-critical ${(E=S.val)==null?void 0:E.split(" ").filter(M=>M.includes("variant")).join(" ")}`}},ne.svg({viewBox:"0 0 100 100",class:"size-4 not-group-data-selected:hidden",style:"stroke-linecap:round; stroke-linejoin:round;"},ne.path({d:"M20,60L40,80L80,20",class:"stroke-current stroke-[10] fill-none"}))),p.input({type:"checkbox",checked:u,required:o,hidden:!0}))}function ia({progress:u=50,indefinite:o=!1,class:f,...r},...h){const S=J(f),E=J(u),M=J(o);return p.div({name:"Circular Progress Bar",style:"--progress-bar-stroke-width: 2px",class:()=>`group inline-block relative min-w-[1em] min-h-[1em] rounded-full [.variant-outline]:ring-[length:var(--progress-bar-stroke-width)] [.variant-soft-outline]:ring-[length:var(--progress-bar-stroke-width)] !p-0 ${S.val}`,...r},ne.svg({style:"padding: calc(var(--progress-bar-stroke-width) * 0.5)",class:"absolute inset-0 -rotate-90",viewBox:"0 0 36 36"},ne.circle({style:()=>`cx: 50%; cy: 50%; r: 50%; stroke-dasharray: calc(1% * pi * ${E.val}) calc(1% * pi * (100 - ${E.val}));`,class:()=>`origin-center fill-none stroke-current stroke-[length:var(--progress-bar-stroke-width)] not-group-[.variant-filled]:text-mood-500 ${M.val?"animate-spin":""}`,"stroke-linecap":"round"})),p.span({class:"relative text-xs text-center m-[calc(2_*_var(--progress-bar-stroke-width))] aspect-square flex items-center justify-center h-full"},h))}function V({language:u,class:o,...f},...r){const h=J(o),S=p.pre({class:h.val,...f},p.code({class:`language-${u}`},r));return Prism.highlightAllUnder(S),S}function ca({class:u,...o},...f){const r=J(u);return p.form({class:()=>`flex flex-col gap-4 ${r.val}`,...o},f)}const Ce=(u,...o)=>p.i(u,o);function R({content:u,class:o,...f},...r){const h=J(o);return p.div({name:"Label",class:()=>`flex flex-col gap-1 ${h.val}`},p.label({class:"flex items-center text-mini text-mood-weak",...f},u),r)}function la(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var ge={exports:{}},fa=ge.exports,Re;function pa(){return Re||(Re=1,function(u){(function(){function o(e){var n={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",type:"string"},rawPrefixHeaderId:{defaultValue:!1,describe:'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',type:"boolean"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},rawHeaderId:{defaultValue:!1,describe:`Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,describe:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,describe:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,describe:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,describe:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,describe:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",describe:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,describe:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,describe:"Open all links in new windows",type:"boolean"},backslashEscapesHTMLTags:{defaultValue:!1,describe:"Support for HTML Tag escaping. ex: <div>foo</div>",type:"boolean"},emoji:{defaultValue:!1,describe:"Enable emoji support. Ex: `this is a :smile: emoji`",type:"boolean"},underline:{defaultValue:!1,describe:"Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",type:"boolean"},ellipsis:{defaultValue:!0,describe:"Replaces three dots with the ellipsis unicode character",type:"boolean"},completeHTMLDocument:{defaultValue:!1,describe:"Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",type:"boolean"},metadata:{defaultValue:!1,describe:"Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",type:"boolean"},splitAdjacentBlockquotes:{defaultValue:!1,describe:"Split adjacent blockquote blocks",type:"boolean"}};if(e===!1)return JSON.parse(JSON.stringify(n));var a={};for(var d in n)n.hasOwnProperty(d)&&(a[d]=n[d].defaultValue);return a}function f(){var e=o(!0),n={};for(var a in e)e.hasOwnProperty(a)&&(n[a]=!0);return n}var r={},h={},S={},E=o(!0),M="vanilla",T={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0,backslashEscapesHTMLTags:!0,emoji:!0,splitAdjacentBlockquotes:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:o(!0),allOn:f()};r.helper={},r.extensions={},r.setOption=function(e,n){return E[e]=n,this},r.getOption=function(e){return E[e]},r.getOptions=function(){return E},r.resetOptions=function(){E=o(!0)},r.setFlavor=function(e){if(!T.hasOwnProperty(e))throw Error(e+" flavor was not found");r.resetOptions();var n=T[e];M=e;for(var a in n)n.hasOwnProperty(a)&&(E[a]=n[a])},r.getFlavor=function(){return M},r.getFlavorOptions=function(e){if(T.hasOwnProperty(e))return T[e]},r.getDefaultOptions=function(e){return o(e)},r.subParser=function(e,n){if(r.helper.isString(e))if(typeof n<"u")h[e]=n;else{if(h.hasOwnProperty(e))return h[e];throw Error("SubParser named "+e+" not registered!")}},r.extension=function(e,n){if(!r.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=r.helper.stdExtName(e),r.helper.isUndefined(n)){if(!S.hasOwnProperty(e))throw Error("Extension named "+e+" is not registered!");return S[e]}else{typeof n=="function"&&(n=n()),r.helper.isArray(n)||(n=[n]);var a=O(n,e);if(a.valid)S[e]=n;else throw Error(a.error)}},r.getAllExtensions=function(){return S},r.removeExtension=function(e){delete S[e]},r.resetExtensions=function(){S={}};function O(e,n){var a=n?"Error in "+n+" extension->":"Error in unnamed extension",d={valid:!0,error:""};r.helper.isArray(e)||(e=[e]);for(var i=0;i<e.length;++i){var c=a+" sub-extension "+i+": ",s=e[i];if(typeof s!="object")return d.valid=!1,d.error=c+"must be an object, but "+typeof s+" given",d;if(!r.helper.isString(s.type))return d.valid=!1,d.error=c+'property "type" must be a string, but '+typeof s.type+" given",d;var l=s.type=s.type.toLowerCase();if(l==="language"&&(l=s.type="lang"),l==="html"&&(l=s.type="output"),l!=="lang"&&l!=="output"&&l!=="listener")return d.valid=!1,d.error=c+"type "+l+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',d;if(l==="listener"){if(r.helper.isUndefined(s.listeners))return d.valid=!1,d.error=c+'. Extensions of type "listener" must have a property called "listeners"',d}else if(r.helper.isUndefined(s.filter)&&r.helper.isUndefined(s.regex))return d.valid=!1,d.error=c+l+' extensions must define either a "regex" property or a "filter" method',d;if(s.listeners){if(typeof s.listeners!="object")return d.valid=!1,d.error=c+'"listeners" property must be an object but '+typeof s.listeners+" given",d;for(var C in s.listeners)if(s.listeners.hasOwnProperty(C)&&typeof s.listeners[C]!="function")return d.valid=!1,d.error=c+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+C+" must be a function but "+typeof s.listeners[C]+" given",d}if(s.filter){if(typeof s.filter!="function")return d.valid=!1,d.error=c+'"filter" must be a function, but '+typeof s.filter+" given",d}else if(s.regex){if(r.helper.isString(s.regex)&&(s.regex=new RegExp(s.regex,"g")),!(s.regex instanceof RegExp))return d.valid=!1,d.error=c+'"regex" property must either be a string or a RegExp object, but '+typeof s.regex+" given",d;if(r.helper.isUndefined(s.replace))return d.valid=!1,d.error=c+'"regex" extensions must implement a replace string or function',d}}return d}r.validateExtension=function(e){var n=O(e,null);return n.valid?!0:(console.warn(n.error),!1)},r.hasOwnProperty("helper")||(r.helper={}),r.helper.isString=function(e){return typeof e=="string"||e instanceof String},r.helper.isFunction=function(e){var n={};return e&&n.toString.call(e)==="[object Function]"},r.helper.isArray=function(e){return Array.isArray(e)},r.helper.isUndefined=function(e){return typeof e>"u"},r.helper.forEach=function(e,n){if(r.helper.isUndefined(e))throw new Error("obj param is required");if(r.helper.isUndefined(n))throw new Error("callback param is required");if(!r.helper.isFunction(n))throw new Error("callback param must be a function/closure");if(typeof e.forEach=="function")e.forEach(n);else if(r.helper.isArray(e))for(var a=0;a<e.length;a++)n(e[a],a,e);else if(typeof e=="object")for(var d in e)e.hasOwnProperty(d)&&n(e[d],d,e);else throw new Error("obj does not seem to be an array or an iterable object")},r.helper.stdExtName=function(e){return e.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()};function I(e,n){var a=n.charCodeAt(0);return"¨E"+a+"E"}r.helper.escapeCharactersCallback=I,r.helper.escapeCharacters=function(e,n,a){var d="(["+n.replace(/([\[\]\\])/g,"\\$1")+"])";a&&(d="\\\\"+d);var i=new RegExp(d,"g");return e=e.replace(i,I),e},r.helper.unescapeHTMLEntities=function(e){return e.replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")};var B=function(e,n,a,d){var i=d||"",c=i.indexOf("g")>-1,s=new RegExp(n+"|"+a,"g"+i.replace(/g/g,"")),l=new RegExp(n,i.replace(/g/g,"")),C=[],y,v,b,t,_;do for(y=0;b=s.exec(e);)if(l.test(b[0]))y++||(v=s.lastIndex,t=v-b[0].length);else if(y&&!--y){_=b.index+b[0].length;var j={left:{start:t,end:v},match:{start:v,end:b.index},right:{start:b.index,end:_},wholeMatch:{start:t,end:_}};if(C.push(j),!c)return C}while(y&&(s.lastIndex=v));return C};r.helper.matchRecursiveRegExp=function(e,n,a,d){for(var i=B(e,n,a,d),c=[],s=0;s<i.length;++s)c.push([e.slice(i[s].wholeMatch.start,i[s].wholeMatch.end),e.slice(i[s].match.start,i[s].match.end),e.slice(i[s].left.start,i[s].left.end),e.slice(i[s].right.start,i[s].right.end)]);return c},r.helper.replaceRecursiveRegExp=function(e,n,a,d,i){if(!r.helper.isFunction(n)){var c=n;n=function(){return c}}var s=B(e,a,d,i),l=e,C=s.length;if(C>0){var y=[];s[0].wholeMatch.start!==0&&y.push(e.slice(0,s[0].wholeMatch.start));for(var v=0;v<C;++v)y.push(n(e.slice(s[v].wholeMatch.start,s[v].wholeMatch.end),e.slice(s[v].match.start,s[v].match.end),e.slice(s[v].left.start,s[v].left.end),e.slice(s[v].right.start,s[v].right.end))),v<C-1&&y.push(e.slice(s[v].wholeMatch.end,s[v+1].wholeMatch.start));s[C-1].wholeMatch.end<e.length&&y.push(e.slice(s[C-1].wholeMatch.end)),l=y.join("")}return l},r.helper.regexIndexOf=function(e,n,a){if(!r.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(!(n instanceof RegExp))throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";var d=e.substring(a||0).search(n);return d>=0?d+(a||0):d},r.helper.splitAtIndex=function(e,n){if(!r.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";return[e.substring(0,n),e.substring(n)]},r.helper.encodeEmailAddress=function(e){var n=[function(a){return"&#"+a.charCodeAt(0)+";"},function(a){return"&#x"+a.charCodeAt(0).toString(16)+";"},function(a){return a}];return e=e.replace(/./g,function(a){if(a==="@")a=n[Math.floor(Math.random()*2)](a);else{var d=Math.random();a=d>.9?n[2](a):d>.45?n[1](a):n[0](a)}return a}),e},r.helper.padEnd=function(n,a,d){return a=a>>0,d=String(d||" "),n.length>a?String(n):(a=a-n.length,a>d.length&&(d+=d.repeat(a/d.length)),String(n)+d.slice(0,a))},typeof console>"u"&&(console={warn:function(e){alert(e)},log:function(e){alert(e)},error:function(e){throw e}}),r.helper.regexes={asteriskDashAndColon:/([*_:~])/g},r.helper.emojis={"+1":"👍","-1":"👎",100:"💯",1234:"🔢","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉","8ball":"🎱",a:"🅰️",ab:"🆎",abc:"🔤",abcd:"🔡",accept:"🉑",aerial_tramway:"🚡",airplane:"✈️",alarm_clock:"⏰",alembic:"⚗️",alien:"👽",ambulance:"🚑",amphora:"🏺",anchor:"⚓️",angel:"👼",anger:"💢",angry:"😠",anguished:"😧",ant:"🐜",apple:"🍎",aquarius:"♒️",aries:"♈️",arrow_backward:"◀️",arrow_double_down:"⏬",arrow_double_up:"⏫",arrow_down:"⬇️",arrow_down_small:"🔽",arrow_forward:"▶️",arrow_heading_down:"⤵️",arrow_heading_up:"⤴️",arrow_left:"⬅️",arrow_lower_left:"↙️",arrow_lower_right:"↘️",arrow_right:"➡️",arrow_right_hook:"↪️",arrow_up:"⬆️",arrow_up_down:"↕️",arrow_up_small:"🔼",arrow_upper_left:"↖️",arrow_upper_right:"↗️",arrows_clockwise:"🔃",arrows_counterclockwise:"🔄",art:"🎨",articulated_lorry:"🚛",artificial_satellite:"🛰",astonished:"😲",athletic_shoe:"👟",atm:"🏧",atom_symbol:"⚛️",avocado:"🥑",b:"🅱️",baby:"👶",baby_bottle:"🍼",baby_chick:"🐤",baby_symbol:"🚼",back:"🔙",bacon:"🥓",badminton:"🏸",baggage_claim:"🛄",baguette_bread:"🥖",balance_scale:"⚖️",balloon:"🎈",ballot_box:"🗳",ballot_box_with_check:"☑️",bamboo:"🎍",banana:"🍌",bangbang:"‼️",bank:"🏦",bar_chart:"📊",barber:"💈",baseball:"⚾️",basketball:"🏀",basketball_man:"⛹️",basketball_woman:"⛹️&zwj;♀️",bat:"🦇",bath:"🛀",bathtub:"🛁",battery:"🔋",beach_umbrella:"🏖",bear:"🐻",bed:"🛏",bee:"🐝",beer:"🍺",beers:"🍻",beetle:"🐞",beginner:"🔰",bell:"🔔",bellhop_bell:"🛎",bento:"🍱",biking_man:"🚴",bike:"🚲",biking_woman:"🚴&zwj;♀️",bikini:"👙",biohazard:"☣️",bird:"🐦",birthday:"🎂",black_circle:"⚫️",black_flag:"🏴",black_heart:"🖤",black_joker:"🃏",black_large_square:"⬛️",black_medium_small_square:"◾️",black_medium_square:"◼️",black_nib:"✒️",black_small_square:"▪️",black_square_button:"🔲",blonde_man:"👱",blonde_woman:"👱&zwj;♀️",blossom:"🌼",blowfish:"🐡",blue_book:"📘",blue_car:"🚙",blue_heart:"💙",blush:"😊",boar:"🐗",boat:"⛵️",bomb:"💣",book:"📖",bookmark:"🔖",bookmark_tabs:"📑",books:"📚",boom:"💥",boot:"👢",bouquet:"💐",bowing_man:"🙇",bow_and_arrow:"🏹",bowing_woman:"🙇&zwj;♀️",bowling:"🎳",boxing_glove:"🥊",boy:"👦",bread:"🍞",bride_with_veil:"👰",bridge_at_night:"🌉",briefcase:"💼",broken_heart:"💔",bug:"🐛",building_construction:"🏗",bulb:"💡",bullettrain_front:"🚅",bullettrain_side:"🚄",burrito:"🌯",bus:"🚌",business_suit_levitating:"🕴",busstop:"🚏",bust_in_silhouette:"👤",busts_in_silhouette:"👥",butterfly:"🦋",cactus:"🌵",cake:"🍰",calendar:"📆",call_me_hand:"🤙",calling:"📲",camel:"🐫",camera:"📷",camera_flash:"📸",camping:"🏕",cancer:"♋️",candle:"🕯",candy:"🍬",canoe:"🛶",capital_abcd:"🔠",capricorn:"♑️",car:"🚗",card_file_box:"🗃",card_index:"📇",card_index_dividers:"🗂",carousel_horse:"🎠",carrot:"🥕",cat:"🐱",cat2:"🐈",cd:"💿",chains:"⛓",champagne:"🍾",chart:"💹",chart_with_downwards_trend:"📉",chart_with_upwards_trend:"📈",checkered_flag:"🏁",cheese:"🧀",cherries:"🍒",cherry_blossom:"🌸",chestnut:"🌰",chicken:"🐔",children_crossing:"🚸",chipmunk:"🐿",chocolate_bar:"🍫",christmas_tree:"🎄",church:"⛪️",cinema:"🎦",circus_tent:"🎪",city_sunrise:"🌇",city_sunset:"🌆",cityscape:"🏙",cl:"🆑",clamp:"🗜",clap:"👏",clapper:"🎬",classical_building:"🏛",clinking_glasses:"🥂",clipboard:"📋",clock1:"🕐",clock10:"🕙",clock1030:"🕥",clock11:"🕚",clock1130:"🕦",clock12:"🕛",clock1230:"🕧",clock130:"🕜",clock2:"🕑",clock230:"🕝",clock3:"🕒",clock330:"🕞",clock4:"🕓",clock430:"🕟",clock5:"🕔",clock530:"🕠",clock6:"🕕",clock630:"🕡",clock7:"🕖",clock730:"🕢",clock8:"🕗",clock830:"🕣",clock9:"🕘",clock930:"🕤",closed_book:"📕",closed_lock_with_key:"🔐",closed_umbrella:"🌂",cloud:"☁️",cloud_with_lightning:"🌩",cloud_with_lightning_and_rain:"⛈",cloud_with_rain:"🌧",cloud_with_snow:"🌨",clown_face:"🤡",clubs:"♣️",cocktail:"🍸",coffee:"☕️",coffin:"⚰️",cold_sweat:"😰",comet:"☄️",computer:"💻",computer_mouse:"🖱",confetti_ball:"🎊",confounded:"😖",confused:"😕",congratulations:"㊗️",construction:"🚧",construction_worker_man:"👷",construction_worker_woman:"👷&zwj;♀️",control_knobs:"🎛",convenience_store:"🏪",cookie:"🍪",cool:"🆒",policeman:"👮",copyright:"©️",corn:"🌽",couch_and_lamp:"🛋",couple:"👫",couple_with_heart_woman_man:"💑",couple_with_heart_man_man:"👨&zwj;❤️&zwj;👨",couple_with_heart_woman_woman:"👩&zwj;❤️&zwj;👩",couplekiss_man_man:"👨&zwj;❤️&zwj;💋&zwj;👨",couplekiss_man_woman:"💏",couplekiss_woman_woman:"👩&zwj;❤️&zwj;💋&zwj;👩",cow:"🐮",cow2:"🐄",cowboy_hat_face:"🤠",crab:"🦀",crayon:"🖍",credit_card:"💳",crescent_moon:"🌙",cricket:"🏏",crocodile:"🐊",croissant:"🥐",crossed_fingers:"🤞",crossed_flags:"🎌",crossed_swords:"⚔️",crown:"👑",cry:"😢",crying_cat_face:"😿",crystal_ball:"🔮",cucumber:"🥒",cupid:"💘",curly_loop:"➰",currency_exchange:"💱",curry:"🍛",custard:"🍮",customs:"🛃",cyclone:"🌀",dagger:"🗡",dancer:"💃",dancing_women:"👯",dancing_men:"👯&zwj;♂️",dango:"🍡",dark_sunglasses:"🕶",dart:"🎯",dash:"💨",date:"📅",deciduous_tree:"🌳",deer:"🦌",department_store:"🏬",derelict_house:"🏚",desert:"🏜",desert_island:"🏝",desktop_computer:"🖥",male_detective:"🕵️",diamond_shape_with_a_dot_inside:"💠",diamonds:"♦️",disappointed:"😞",disappointed_relieved:"😥",dizzy:"💫",dizzy_face:"😵",do_not_litter:"🚯",dog:"🐶",dog2:"🐕",dollar:"💵",dolls:"🎎",dolphin:"🐬",door:"🚪",doughnut:"🍩",dove:"🕊",dragon:"🐉",dragon_face:"🐲",dress:"👗",dromedary_camel:"🐪",drooling_face:"🤤",droplet:"💧",drum:"🥁",duck:"🦆",dvd:"📀","e-mail":"📧",eagle:"🦅",ear:"👂",ear_of_rice:"🌾",earth_africa:"🌍",earth_americas:"🌎",earth_asia:"🌏",egg:"🥚",eggplant:"🍆",eight_pointed_black_star:"✴️",eight_spoked_asterisk:"✳️",electric_plug:"🔌",elephant:"🐘",email:"✉️",end:"🔚",envelope_with_arrow:"📩",euro:"💶",european_castle:"🏰",european_post_office:"🏤",evergreen_tree:"🌲",exclamation:"❗️",expressionless:"😑",eye:"👁",eye_speech_bubble:"👁&zwj;🗨",eyeglasses:"👓",eyes:"👀",face_with_head_bandage:"🤕",face_with_thermometer:"🤒",fist_oncoming:"👊",factory:"🏭",fallen_leaf:"🍂",family_man_woman_boy:"👪",family_man_boy:"👨&zwj;👦",family_man_boy_boy:"👨&zwj;👦&zwj;👦",family_man_girl:"👨&zwj;👧",family_man_girl_boy:"👨&zwj;👧&zwj;👦",family_man_girl_girl:"👨&zwj;👧&zwj;👧",family_man_man_boy:"👨&zwj;👨&zwj;👦",family_man_man_boy_boy:"👨&zwj;👨&zwj;👦&zwj;👦",family_man_man_girl:"👨&zwj;👨&zwj;👧",family_man_man_girl_boy:"👨&zwj;👨&zwj;👧&zwj;👦",family_man_man_girl_girl:"👨&zwj;👨&zwj;👧&zwj;👧",family_man_woman_boy_boy:"👨&zwj;👩&zwj;👦&zwj;👦",family_man_woman_girl:"👨&zwj;👩&zwj;👧",family_man_woman_girl_boy:"👨&zwj;👩&zwj;👧&zwj;👦",family_man_woman_girl_girl:"👨&zwj;👩&zwj;👧&zwj;👧",family_woman_boy:"👩&zwj;👦",family_woman_boy_boy:"👩&zwj;👦&zwj;👦",family_woman_girl:"👩&zwj;👧",family_woman_girl_boy:"👩&zwj;👧&zwj;👦",family_woman_girl_girl:"👩&zwj;👧&zwj;👧",family_woman_woman_boy:"👩&zwj;👩&zwj;👦",family_woman_woman_boy_boy:"👩&zwj;👩&zwj;👦&zwj;👦",family_woman_woman_girl:"👩&zwj;👩&zwj;👧",family_woman_woman_girl_boy:"👩&zwj;👩&zwj;👧&zwj;👦",family_woman_woman_girl_girl:"👩&zwj;👩&zwj;👧&zwj;👧",fast_forward:"⏩",fax:"📠",fearful:"😨",feet:"🐾",female_detective:"🕵️&zwj;♀️",ferris_wheel:"🎡",ferry:"⛴",field_hockey:"🏑",file_cabinet:"🗄",file_folder:"📁",film_projector:"📽",film_strip:"🎞",fire:"🔥",fire_engine:"🚒",fireworks:"🎆",first_quarter_moon:"🌓",first_quarter_moon_with_face:"🌛",fish:"🐟",fish_cake:"🍥",fishing_pole_and_fish:"🎣",fist_raised:"✊",fist_left:"🤛",fist_right:"🤜",flags:"🎏",flashlight:"🔦",fleur_de_lis:"⚜️",flight_arrival:"🛬",flight_departure:"🛫",floppy_disk:"💾",flower_playing_cards:"🎴",flushed:"😳",fog:"🌫",foggy:"🌁",football:"🏈",footprints:"👣",fork_and_knife:"🍴",fountain:"⛲️",fountain_pen:"🖋",four_leaf_clover:"🍀",fox_face:"🦊",framed_picture:"🖼",free:"🆓",fried_egg:"🍳",fried_shrimp:"🍤",fries:"🍟",frog:"🐸",frowning:"😦",frowning_face:"☹️",frowning_man:"🙍&zwj;♂️",frowning_woman:"🙍",middle_finger:"🖕",fuelpump:"⛽️",full_moon:"🌕",full_moon_with_face:"🌝",funeral_urn:"⚱️",game_die:"🎲",gear:"⚙️",gem:"💎",gemini:"♊️",ghost:"👻",gift:"🎁",gift_heart:"💝",girl:"👧",globe_with_meridians:"🌐",goal_net:"🥅",goat:"🐐",golf:"⛳️",golfing_man:"🏌️",golfing_woman:"🏌️&zwj;♀️",gorilla:"🦍",grapes:"🍇",green_apple:"🍏",green_book:"📗",green_heart:"💚",green_salad:"🥗",grey_exclamation:"❕",grey_question:"❔",grimacing:"😬",grin:"😁",grinning:"😀",guardsman:"💂",guardswoman:"💂&zwj;♀️",guitar:"🎸",gun:"🔫",haircut_woman:"💇",haircut_man:"💇&zwj;♂️",hamburger:"🍔",hammer:"🔨",hammer_and_pick:"⚒",hammer_and_wrench:"🛠",hamster:"🐹",hand:"✋",handbag:"👜",handshake:"🤝",hankey:"💩",hatched_chick:"🐥",hatching_chick:"🐣",headphones:"🎧",hear_no_evil:"🙉",heart:"❤️",heart_decoration:"💟",heart_eyes:"😍",heart_eyes_cat:"😻",heartbeat:"💓",heartpulse:"💗",hearts:"♥️",heavy_check_mark:"✔️",heavy_division_sign:"➗",heavy_dollar_sign:"💲",heavy_heart_exclamation:"❣️",heavy_minus_sign:"➖",heavy_multiplication_x:"✖️",heavy_plus_sign:"➕",helicopter:"🚁",herb:"🌿",hibiscus:"🌺",high_brightness:"🔆",high_heel:"👠",hocho:"🔪",hole:"🕳",honey_pot:"🍯",horse:"🐴",horse_racing:"🏇",hospital:"🏥",hot_pepper:"🌶",hotdog:"🌭",hotel:"🏨",hotsprings:"♨️",hourglass:"⌛️",hourglass_flowing_sand:"⏳",house:"🏠",house_with_garden:"🏡",houses:"🏘",hugs:"🤗",hushed:"😯",ice_cream:"🍨",ice_hockey:"🏒",ice_skate:"⛸",icecream:"🍦",id:"🆔",ideograph_advantage:"🉐",imp:"👿",inbox_tray:"📥",incoming_envelope:"📨",tipping_hand_woman:"💁",information_source:"ℹ️",innocent:"😇",interrobang:"⁉️",iphone:"📱",izakaya_lantern:"🏮",jack_o_lantern:"🎃",japan:"🗾",japanese_castle:"🏯",japanese_goblin:"👺",japanese_ogre:"👹",jeans:"👖",joy:"😂",joy_cat:"😹",joystick:"🕹",kaaba:"🕋",key:"🔑",keyboard:"⌨️",keycap_ten:"🔟",kick_scooter:"🛴",kimono:"👘",kiss:"💋",kissing:"😗",kissing_cat:"😽",kissing_closed_eyes:"😚",kissing_heart:"😘",kissing_smiling_eyes:"😙",kiwi_fruit:"🥝",koala:"🐨",koko:"🈁",label:"🏷",large_blue_circle:"🔵",large_blue_diamond:"🔷",large_orange_diamond:"🔶",last_quarter_moon:"🌗",last_quarter_moon_with_face:"🌜",latin_cross:"✝️",laughing:"😆",leaves:"🍃",ledger:"📒",left_luggage:"🛅",left_right_arrow:"↔️",leftwards_arrow_with_hook:"↩️",lemon:"🍋",leo:"♌️",leopard:"🐆",level_slider:"🎚",libra:"♎️",light_rail:"🚈",link:"🔗",lion:"🦁",lips:"👄",lipstick:"💄",lizard:"🦎",lock:"🔒",lock_with_ink_pen:"🔏",lollipop:"🍭",loop:"➿",loud_sound:"🔊",loudspeaker:"📢",love_hotel:"🏩",love_letter:"💌",low_brightness:"🔅",lying_face:"🤥",m:"Ⓜ️",mag:"🔍",mag_right:"🔎",mahjong:"🀄️",mailbox:"📫",mailbox_closed:"📪",mailbox_with_mail:"📬",mailbox_with_no_mail:"📭",man:"👨",man_artist:"👨&zwj;🎨",man_astronaut:"👨&zwj;🚀",man_cartwheeling:"🤸&zwj;♂️",man_cook:"👨&zwj;🍳",man_dancing:"🕺",man_facepalming:"🤦&zwj;♂️",man_factory_worker:"👨&zwj;🏭",man_farmer:"👨&zwj;🌾",man_firefighter:"👨&zwj;🚒",man_health_worker:"👨&zwj;⚕️",man_in_tuxedo:"🤵",man_judge:"👨&zwj;⚖️",man_juggling:"🤹&zwj;♂️",man_mechanic:"👨&zwj;🔧",man_office_worker:"👨&zwj;💼",man_pilot:"👨&zwj;✈️",man_playing_handball:"🤾&zwj;♂️",man_playing_water_polo:"🤽&zwj;♂️",man_scientist:"👨&zwj;🔬",man_shrugging:"🤷&zwj;♂️",man_singer:"👨&zwj;🎤",man_student:"👨&zwj;🎓",man_teacher:"👨&zwj;🏫",man_technologist:"👨&zwj;💻",man_with_gua_pi_mao:"👲",man_with_turban:"👳",tangerine:"🍊",mans_shoe:"👞",mantelpiece_clock:"🕰",maple_leaf:"🍁",martial_arts_uniform:"🥋",mask:"😷",massage_woman:"💆",massage_man:"💆&zwj;♂️",meat_on_bone:"🍖",medal_military:"🎖",medal_sports:"🏅",mega:"📣",melon:"🍈",memo:"📝",men_wrestling:"🤼&zwj;♂️",menorah:"🕎",mens:"🚹",metal:"🤘",metro:"🚇",microphone:"🎤",microscope:"🔬",milk_glass:"🥛",milky_way:"🌌",minibus:"🚐",minidisc:"💽",mobile_phone_off:"📴",money_mouth_face:"🤑",money_with_wings:"💸",moneybag:"💰",monkey:"🐒",monkey_face:"🐵",monorail:"🚝",moon:"🌔",mortar_board:"🎓",mosque:"🕌",motor_boat:"🛥",motor_scooter:"🛵",motorcycle:"🏍",motorway:"🛣",mount_fuji:"🗻",mountain:"⛰",mountain_biking_man:"🚵",mountain_biking_woman:"🚵&zwj;♀️",mountain_cableway:"🚠",mountain_railway:"🚞",mountain_snow:"🏔",mouse:"🐭",mouse2:"🐁",movie_camera:"🎥",moyai:"🗿",mrs_claus:"🤶",muscle:"💪",mushroom:"🍄",musical_keyboard:"🎹",musical_note:"🎵",musical_score:"🎼",mute:"🔇",nail_care:"💅",name_badge:"📛",national_park:"🏞",nauseated_face:"🤢",necktie:"👔",negative_squared_cross_mark:"❎",nerd_face:"🤓",neutral_face:"😐",new:"🆕",new_moon:"🌑",new_moon_with_face:"🌚",newspaper:"📰",newspaper_roll:"🗞",next_track_button:"⏭",ng:"🆖",no_good_man:"🙅&zwj;♂️",no_good_woman:"🙅",night_with_stars:"🌃",no_bell:"🔕",no_bicycles:"🚳",no_entry:"⛔️",no_entry_sign:"🚫",no_mobile_phones:"📵",no_mouth:"😶",no_pedestrians:"🚷",no_smoking:"🚭","non-potable_water":"🚱",nose:"👃",notebook:"📓",notebook_with_decorative_cover:"📔",notes:"🎶",nut_and_bolt:"🔩",o:"⭕️",o2:"🅾️",ocean:"🌊",octopus:"🐙",oden:"🍢",office:"🏢",oil_drum:"🛢",ok:"🆗",ok_hand:"👌",ok_man:"🙆&zwj;♂️",ok_woman:"🙆",old_key:"🗝",older_man:"👴",older_woman:"👵",om:"🕉",on:"🔛",oncoming_automobile:"🚘",oncoming_bus:"🚍",oncoming_police_car:"🚔",oncoming_taxi:"🚖",open_file_folder:"📂",open_hands:"👐",open_mouth:"😮",open_umbrella:"☂️",ophiuchus:"⛎",orange_book:"📙",orthodox_cross:"☦️",outbox_tray:"📤",owl:"🦉",ox:"🐂",package:"📦",page_facing_up:"📄",page_with_curl:"📃",pager:"📟",paintbrush:"🖌",palm_tree:"🌴",pancakes:"🥞",panda_face:"🐼",paperclip:"📎",paperclips:"🖇",parasol_on_ground:"⛱",parking:"🅿️",part_alternation_mark:"〽️",partly_sunny:"⛅️",passenger_ship:"🛳",passport_control:"🛂",pause_button:"⏸",peace_symbol:"☮️",peach:"🍑",peanuts:"🥜",pear:"🍐",pen:"🖊",pencil2:"✏️",penguin:"🐧",pensive:"😔",performing_arts:"🎭",persevere:"😣",person_fencing:"🤺",pouting_woman:"🙎",phone:"☎️",pick:"⛏",pig:"🐷",pig2:"🐖",pig_nose:"🐽",pill:"💊",pineapple:"🍍",ping_pong:"🏓",pisces:"♓️",pizza:"🍕",place_of_worship:"🛐",plate_with_cutlery:"🍽",play_or_pause_button:"⏯",point_down:"👇",point_left:"👈",point_right:"👉",point_up:"☝️",point_up_2:"👆",police_car:"🚓",policewoman:"👮&zwj;♀️",poodle:"🐩",popcorn:"🍿",post_office:"🏣",postal_horn:"📯",postbox:"📮",potable_water:"🚰",potato:"🥔",pouch:"👝",poultry_leg:"🍗",pound:"💷",rage:"😡",pouting_cat:"😾",pouting_man:"🙎&zwj;♂️",pray:"🙏",prayer_beads:"📿",pregnant_woman:"🤰",previous_track_button:"⏮",prince:"🤴",princess:"👸",printer:"🖨",purple_heart:"💜",purse:"👛",pushpin:"📌",put_litter_in_its_place:"🚮",question:"❓",rabbit:"🐰",rabbit2:"🐇",racehorse:"🐎",racing_car:"🏎",radio:"📻",radio_button:"🔘",radioactive:"☢️",railway_car:"🚃",railway_track:"🛤",rainbow:"🌈",rainbow_flag:"🏳️&zwj;🌈",raised_back_of_hand:"🤚",raised_hand_with_fingers_splayed:"🖐",raised_hands:"🙌",raising_hand_woman:"🙋",raising_hand_man:"🙋&zwj;♂️",ram:"🐏",ramen:"🍜",rat:"🐀",record_button:"⏺",recycle:"♻️",red_circle:"🔴",registered:"®️",relaxed:"☺️",relieved:"😌",reminder_ribbon:"🎗",repeat:"🔁",repeat_one:"🔂",rescue_worker_helmet:"⛑",restroom:"🚻",revolving_hearts:"💞",rewind:"⏪",rhinoceros:"🦏",ribbon:"🎀",rice:"🍚",rice_ball:"🍙",rice_cracker:"🍘",rice_scene:"🎑",right_anger_bubble:"🗯",ring:"💍",robot:"🤖",rocket:"🚀",rofl:"🤣",roll_eyes:"🙄",roller_coaster:"🎢",rooster:"🐓",rose:"🌹",rosette:"🏵",rotating_light:"🚨",round_pushpin:"📍",rowing_man:"🚣",rowing_woman:"🚣&zwj;♀️",rugby_football:"🏉",running_man:"🏃",running_shirt_with_sash:"🎽",running_woman:"🏃&zwj;♀️",sa:"🈂️",sagittarius:"♐️",sake:"🍶",sandal:"👡",santa:"🎅",satellite:"📡",saxophone:"🎷",school:"🏫",school_satchel:"🎒",scissors:"✂️",scorpion:"🦂",scorpius:"♏️",scream:"😱",scream_cat:"🙀",scroll:"📜",seat:"💺",secret:"㊙️",see_no_evil:"🙈",seedling:"🌱",selfie:"🤳",shallow_pan_of_food:"🥘",shamrock:"☘️",shark:"🦈",shaved_ice:"🍧",sheep:"🐑",shell:"🐚",shield:"🛡",shinto_shrine:"⛩",ship:"🚢",shirt:"👕",shopping:"🛍",shopping_cart:"🛒",shower:"🚿",shrimp:"🦐",signal_strength:"📶",six_pointed_star:"🔯",ski:"🎿",skier:"⛷",skull:"💀",skull_and_crossbones:"☠️",sleeping:"😴",sleeping_bed:"🛌",sleepy:"😪",slightly_frowning_face:"🙁",slightly_smiling_face:"🙂",slot_machine:"🎰",small_airplane:"🛩",small_blue_diamond:"🔹",small_orange_diamond:"🔸",small_red_triangle:"🔺",small_red_triangle_down:"🔻",smile:"😄",smile_cat:"😸",smiley:"😃",smiley_cat:"😺",smiling_imp:"😈",smirk:"😏",smirk_cat:"😼",smoking:"🚬",snail:"🐌",snake:"🐍",sneezing_face:"🤧",snowboarder:"🏂",snowflake:"❄️",snowman:"⛄️",snowman_with_snow:"☃️",sob:"😭",soccer:"⚽️",soon:"🔜",sos:"🆘",sound:"🔉",space_invader:"👾",spades:"♠️",spaghetti:"🍝",sparkle:"❇️",sparkler:"🎇",sparkles:"✨",sparkling_heart:"💖",speak_no_evil:"🙊",speaker:"🔈",speaking_head:"🗣",speech_balloon:"💬",speedboat:"🚤",spider:"🕷",spider_web:"🕸",spiral_calendar:"🗓",spiral_notepad:"🗒",spoon:"🥄",squid:"🦑",stadium:"🏟",star:"⭐️",star2:"🌟",star_and_crescent:"☪️",star_of_david:"✡️",stars:"🌠",station:"🚉",statue_of_liberty:"🗽",steam_locomotive:"🚂",stew:"🍲",stop_button:"⏹",stop_sign:"🛑",stopwatch:"⏱",straight_ruler:"📏",strawberry:"🍓",stuck_out_tongue:"😛",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue_winking_eye:"😜",studio_microphone:"🎙",stuffed_flatbread:"🥙",sun_behind_large_cloud:"🌥",sun_behind_rain_cloud:"🌦",sun_behind_small_cloud:"🌤",sun_with_face:"🌞",sunflower:"🌻",sunglasses:"😎",sunny:"☀️",sunrise:"🌅",sunrise_over_mountains:"🌄",surfing_man:"🏄",surfing_woman:"🏄&zwj;♀️",sushi:"🍣",suspension_railway:"🚟",sweat:"😓",sweat_drops:"💦",sweat_smile:"😅",sweet_potato:"🍠",swimming_man:"🏊",swimming_woman:"🏊&zwj;♀️",symbols:"🔣",synagogue:"🕍",syringe:"💉",taco:"🌮",tada:"🎉",tanabata_tree:"🎋",taurus:"♉️",taxi:"🚕",tea:"🍵",telephone_receiver:"📞",telescope:"🔭",tennis:"🎾",tent:"⛺️",thermometer:"🌡",thinking:"🤔",thought_balloon:"💭",ticket:"🎫",tickets:"🎟",tiger:"🐯",tiger2:"🐅",timer_clock:"⏲",tipping_hand_man:"💁&zwj;♂️",tired_face:"😫",tm:"™️",toilet:"🚽",tokyo_tower:"🗼",tomato:"🍅",tongue:"👅",top:"🔝",tophat:"🎩",tornado:"🌪",trackball:"🖲",tractor:"🚜",traffic_light:"🚥",train:"🚋",train2:"🚆",tram:"🚊",triangular_flag_on_post:"🚩",triangular_ruler:"📐",trident:"🔱",triumph:"😤",trolleybus:"🚎",trophy:"🏆",tropical_drink:"🍹",tropical_fish:"🐠",truck:"🚚",trumpet:"🎺",tulip:"🌷",tumbler_glass:"🥃",turkey:"🦃",turtle:"🐢",tv:"📺",twisted_rightwards_arrows:"🔀",two_hearts:"💕",two_men_holding_hands:"👬",two_women_holding_hands:"👭",u5272:"🈹",u5408:"🈴",u55b6:"🈺",u6307:"🈯️",u6708:"🈷️",u6709:"🈶",u6e80:"🈵",u7121:"🈚️",u7533:"🈸",u7981:"🈲",u7a7a:"🈳",umbrella:"☔️",unamused:"😒",underage:"🔞",unicorn:"🦄",unlock:"🔓",up:"🆙",upside_down_face:"🙃",v:"✌️",vertical_traffic_light:"🚦",vhs:"📼",vibration_mode:"📳",video_camera:"📹",video_game:"🎮",violin:"🎻",virgo:"♍️",volcano:"🌋",volleyball:"🏐",vs:"🆚",vulcan_salute:"🖖",walking_man:"🚶",walking_woman:"🚶&zwj;♀️",waning_crescent_moon:"🌘",waning_gibbous_moon:"🌖",warning:"⚠️",wastebasket:"🗑",watch:"⌚️",water_buffalo:"🐃",watermelon:"🍉",wave:"👋",wavy_dash:"〰️",waxing_crescent_moon:"🌒",wc:"🚾",weary:"😩",wedding:"💒",weight_lifting_man:"🏋️",weight_lifting_woman:"🏋️&zwj;♀️",whale:"🐳",whale2:"🐋",wheel_of_dharma:"☸️",wheelchair:"♿️",white_check_mark:"✅",white_circle:"⚪️",white_flag:"🏳️",white_flower:"💮",white_large_square:"⬜️",white_medium_small_square:"◽️",white_medium_square:"◻️",white_small_square:"▫️",white_square_button:"🔳",wilted_flower:"🥀",wind_chime:"🎐",wind_face:"🌬",wine_glass:"🍷",wink:"😉",wolf:"🐺",woman:"👩",woman_artist:"👩&zwj;🎨",woman_astronaut:"👩&zwj;🚀",woman_cartwheeling:"🤸&zwj;♀️",woman_cook:"👩&zwj;🍳",woman_facepalming:"🤦&zwj;♀️",woman_factory_worker:"👩&zwj;🏭",woman_farmer:"👩&zwj;🌾",woman_firefighter:"👩&zwj;🚒",woman_health_worker:"👩&zwj;⚕️",woman_judge:"👩&zwj;⚖️",woman_juggling:"🤹&zwj;♀️",woman_mechanic:"👩&zwj;🔧",woman_office_worker:"👩&zwj;💼",woman_pilot:"👩&zwj;✈️",woman_playing_handball:"🤾&zwj;♀️",woman_playing_water_polo:"🤽&zwj;♀️",woman_scientist:"👩&zwj;🔬",woman_shrugging:"🤷&zwj;♀️",woman_singer:"👩&zwj;🎤",woman_student:"👩&zwj;🎓",woman_teacher:"👩&zwj;🏫",woman_technologist:"👩&zwj;💻",woman_with_turban:"👳&zwj;♀️",womans_clothes:"👚",womans_hat:"👒",women_wrestling:"🤼&zwj;♀️",womens:"🚺",world_map:"🗺",worried:"😟",wrench:"🔧",writing_hand:"✍️",x:"❌",yellow_heart:"💛",yen:"💴",yin_yang:"☯️",yum:"😋",zap:"⚡️",zipper_mouth_face:"🤐",zzz:"💤",octocat:'<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',showdown:`<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`},r.Converter=function(e){var n={},a=[],d=[],i={},c=M,s={parsed:{},raw:"",format:""};l();function l(){e=e||{};for(var t in E)E.hasOwnProperty(t)&&(n[t]=E[t]);if(typeof e=="object")for(var _ in e)e.hasOwnProperty(_)&&(n[_]=e[_]);else throw Error("Converter expects the passed parameter to be an object, but "+typeof e+" was passed instead.");n.extensions&&r.helper.forEach(n.extensions,C)}function C(t,_){if(_=_||null,r.helper.isString(t))if(t=r.helper.stdExtName(t),_=t,r.extensions[t]){console.warn("DEPRECATION WARNING: "+t+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),y(r.extensions[t],t);return}else if(!r.helper.isUndefined(S[t]))t=S[t];else throw Error('Extension "'+t+'" could not be loaded. It was either not found or is not a valid extension.');typeof t=="function"&&(t=t()),r.helper.isArray(t)||(t=[t]);var j=O(t,_);if(!j.valid)throw Error(j.error);for(var z=0;z<t.length;++z){switch(t[z].type){case"lang":a.push(t[z]);break;case"output":d.push(t[z]);break}if(t[z].hasOwnProperty("listeners"))for(var H in t[z].listeners)t[z].listeners.hasOwnProperty(H)&&v(H,t[z].listeners[H])}}function y(t,_){typeof t=="function"&&(t=t(new r.Converter)),r.helper.isArray(t)||(t=[t]);var j=O(t,_);if(!j.valid)throw Error(j.error);for(var z=0;z<t.length;++z)switch(t[z].type){case"lang":a.push(t[z]);break;case"output":d.push(t[z]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function v(t,_){if(!r.helper.isString(t))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof t+" given");if(typeof _!="function")throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof _+" given");i.hasOwnProperty(t)||(i[t]=[]),i[t].push(_)}function b(t){var _=t.match(/^\s*/)[0].length,j=new RegExp("^\\s{0,"+_+"}","gm");return t.replace(j,"")}this._dispatch=function(_,j,z,H){if(i.hasOwnProperty(_))for(var $=0;$<i[_].length;++$){var x=i[_][$](_,j,this,z,H);x&&typeof x<"u"&&(j=x)}return j},this.listen=function(t,_){return v(t,_),this},this.makeHtml=function(t){if(!t)return t;var _={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:a,outputModifiers:d,converter:this,ghCodeBlocks:[],metadata:{parsed:{},raw:"",format:""}};return t=t.replace(/¨/g,"¨T"),t=t.replace(/\$/g,"¨D"),t=t.replace(/\r\n/g,`
`),t=t.replace(/\r/g,`
`),t=t.replace(/\u00A0/g,"&nbsp;"),n.smartIndentationFix&&(t=b(t)),t=`

`+t+`

`,t=r.subParser("detab")(t,n,_),t=t.replace(/^[ \t]+$/mg,""),r.helper.forEach(a,function(j){t=r.subParser("runExtension")(j,t,n,_)}),t=r.subParser("metadata")(t,n,_),t=r.subParser("hashPreCodeTags")(t,n,_),t=r.subParser("githubCodeBlocks")(t,n,_),t=r.subParser("hashHTMLBlocks")(t,n,_),t=r.subParser("hashCodeTags")(t,n,_),t=r.subParser("stripLinkDefinitions")(t,n,_),t=r.subParser("blockGamut")(t,n,_),t=r.subParser("unhashHTMLSpans")(t,n,_),t=r.subParser("unescapeSpecialChars")(t,n,_),t=t.replace(/¨D/g,"$$"),t=t.replace(/¨T/g,"¨"),t=r.subParser("completeHTMLDocument")(t,n,_),r.helper.forEach(d,function(j){t=r.subParser("runExtension")(j,t,n,_)}),s=_.metadata,t},this.makeMarkdown=this.makeMd=function(t,_){if(t=t.replace(/\r\n/g,`
`),t=t.replace(/\r/g,`
`),t=t.replace(/>[ \t]+</,">¨NBSP;<"),!_)if(window&&window.document)_=window.document;else throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");var j=_.createElement("div");j.innerHTML=t;var z={preList:Y(j)};G(j);for(var H=j.childNodes,$="",x=0;x<H.length;x++)$+=r.subParser("makeMarkdown.node")(H[x],z);function G(N){for(var W=0;W<N.childNodes.length;++W){var Z=N.childNodes[W];Z.nodeType===3?!/\S/.test(Z.nodeValue)&&!/^[ ]+$/.test(Z.nodeValue)?(N.removeChild(Z),--W):(Z.nodeValue=Z.nodeValue.split(`
`).join(" "),Z.nodeValue=Z.nodeValue.replace(/(\s)+/g,"$1")):Z.nodeType===1&&G(Z)}}function Y(N){for(var W=N.querySelectorAll("pre"),Z=[],Q=0;Q<W.length;++Q)if(W[Q].childElementCount===1&&W[Q].firstChild.tagName.toLowerCase()==="code"){var ye=W[Q].firstChild.innerHTML.trim(),ke=W[Q].firstChild.getAttribute("data-language")||"";if(ke==="")for(var Be=W[Q].firstChild.className.split(" "),Pe=0;Pe<Be.length;++Pe){var He=Be[Pe].match(/^language-(.+)$/);if(He!==null){ke=He[1];break}}ye=r.helper.unescapeHTMLEntities(ye),Z.push(ye),W[Q].outerHTML='<precode language="'+ke+'" precodenum="'+Q.toString()+'"></precode>'}else Z.push(W[Q].innerHTML),W[Q].innerHTML="",W[Q].setAttribute("prenum",Q.toString());return Z}return $},this.setOption=function(t,_){n[t]=_},this.getOption=function(t){return n[t]},this.getOptions=function(){return n},this.addExtension=function(t,_){_=_||null,C(t,_)},this.useExtension=function(t){C(t)},this.setFlavor=function(t){if(!T.hasOwnProperty(t))throw Error(t+" flavor was not found");var _=T[t];c=t;for(var j in _)_.hasOwnProperty(j)&&(n[j]=_[j])},this.getFlavor=function(){return c},this.removeExtension=function(t){r.helper.isArray(t)||(t=[t]);for(var _=0;_<t.length;++_){for(var j=t[_],z=0;z<a.length;++z)a[z]===j&&a.splice(z,1);for(var H=0;H<d.length;++H)d[H]===j&&d.splice(H,1)}},this.getAllExtensions=function(){return{language:a,output:d}},this.getMetadata=function(t){return t?s.raw:s.parsed},this.getMetadataFormat=function(){return s.format},this._setMetadataPair=function(t,_){s.parsed[t]=_},this._setMetadataFormat=function(t){s.format=t},this._setMetadataRaw=function(t){s.raw=t}},r.subParser("anchors",function(e,n,a){e=a.converter._dispatch("anchors.before",e,n,a);var d=function(i,c,s,l,C,y,v){if(r.helper.isUndefined(v)&&(v=""),s=s.toLowerCase(),i.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)l="";else if(!l)if(s||(s=c.toLowerCase().replace(/ ?\n/g," ")),l="#"+s,!r.helper.isUndefined(a.gUrls[s]))l=a.gUrls[s],r.helper.isUndefined(a.gTitles[s])||(v=a.gTitles[s]);else return i;l=l.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback);var b='<a href="'+l+'"';return v!==""&&v!==null&&(v=v.replace(/"/g,"&quot;"),v=v.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback),b+=' title="'+v+'"'),n.openLinksInNewWindow&&!/^#/.test(l)&&(b+=' rel="noopener noreferrer" target="¨E95Eblank"'),b+=">"+c+"</a>",b};return e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,d),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,d),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,d),e=e.replace(/\[([^\[\]]+)]()()()()()/g,d),n.ghMentions&&(e=e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi,function(i,c,s,l,C){if(s==="\\")return c+l;if(!r.helper.isString(n.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");var y=n.ghMentionsLink.replace(/\{u}/g,C),v="";return n.openLinksInNewWindow&&(v=' rel="noopener noreferrer" target="¨E95Eblank"'),c+'<a href="'+y+'"'+v+">"+l+"</a>"})),e=a.converter._dispatch("anchors.after",e,n,a),e});var D=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,X=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,m=/()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,g=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,w=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,k=function(e){return function(n,a,d,i,c,s,l){d=d.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback);var C=d,y="",v="",b=a||"",t=l||"";return/^www\./i.test(d)&&(d=d.replace(/^www\./i,"http://www.")),e.excludeTrailingPunctuationFromURLs&&s&&(y=s),e.openLinksInNewWindow&&(v=' rel="noopener noreferrer" target="¨E95Eblank"'),b+'<a href="'+d+'"'+v+">"+C+"</a>"+y+t}},P=function(e,n){return function(a,d,i){var c="mailto:";return d=d||"",i=r.subParser("unescapeSpecialChars")(i,e,n),e.encodeEmails?(c=r.helper.encodeEmailAddress(c+i),i=r.helper.encodeEmailAddress(i)):c=c+i,d+'<a href="'+c+'">'+i+"</a>"}};r.subParser("autoLinks",function(e,n,a){return e=a.converter._dispatch("autoLinks.before",e,n,a),e=e.replace(m,k(n)),e=e.replace(w,P(n,a)),e=a.converter._dispatch("autoLinks.after",e,n,a),e}),r.subParser("simplifiedAutoLinks",function(e,n,a){return n.simplifiedAutoLink&&(e=a.converter._dispatch("simplifiedAutoLinks.before",e,n,a),n.excludeTrailingPunctuationFromURLs?e=e.replace(X,k(n)):e=e.replace(D,k(n)),e=e.replace(g,P(n,a)),e=a.converter._dispatch("simplifiedAutoLinks.after",e,n,a)),e}),r.subParser("blockGamut",function(e,n,a){return e=a.converter._dispatch("blockGamut.before",e,n,a),e=r.subParser("blockQuotes")(e,n,a),e=r.subParser("headers")(e,n,a),e=r.subParser("horizontalRule")(e,n,a),e=r.subParser("lists")(e,n,a),e=r.subParser("codeBlocks")(e,n,a),e=r.subParser("tables")(e,n,a),e=r.subParser("hashHTMLBlocks")(e,n,a),e=r.subParser("paragraphs")(e,n,a),e=a.converter._dispatch("blockGamut.after",e,n,a),e}),r.subParser("blockQuotes",function(e,n,a){e=a.converter._dispatch("blockQuotes.before",e,n,a),e=e+`

`;var d=/(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;return n.splitAdjacentBlockquotes&&(d=/^ {0,3}>[\s\S]*?(?:\n\n)/gm),e=e.replace(d,function(i){return i=i.replace(/^[ \t]*>[ \t]?/gm,""),i=i.replace(/¨0/g,""),i=i.replace(/^[ \t]+$/gm,""),i=r.subParser("githubCodeBlocks")(i,n,a),i=r.subParser("blockGamut")(i,n,a),i=i.replace(/(^|\n)/g,"$1  "),i=i.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(c,s){var l=s;return l=l.replace(/^  /mg,"¨0"),l=l.replace(/¨0/g,""),l}),r.subParser("hashBlock")(`<blockquote>
`+i+`
</blockquote>`,n,a)}),e=a.converter._dispatch("blockQuotes.after",e,n,a),e}),r.subParser("codeBlocks",function(e,n,a){e=a.converter._dispatch("codeBlocks.before",e,n,a),e+="¨0";var d=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;return e=e.replace(d,function(i,c,s){var l=c,C=s,y=`
`;return l=r.subParser("outdent")(l,n,a),l=r.subParser("encodeCode")(l,n,a),l=r.subParser("detab")(l,n,a),l=l.replace(/^\n+/g,""),l=l.replace(/\n+$/g,""),n.omitExtraWLInCodeBlocks&&(y=""),l="<pre><code>"+l+y+"</code></pre>",r.subParser("hashBlock")(l,n,a)+C}),e=e.replace(/¨0/,""),e=a.converter._dispatch("codeBlocks.after",e,n,a),e}),r.subParser("codeSpans",function(e,n,a){return e=a.converter._dispatch("codeSpans.before",e,n,a),typeof e>"u"&&(e=""),e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(d,i,c,s){var l=s;return l=l.replace(/^([ \t]*)/g,""),l=l.replace(/[ \t]*$/g,""),l=r.subParser("encodeCode")(l,n,a),l=i+"<code>"+l+"</code>",l=r.subParser("hashHTMLSpans")(l,n,a),l}),e=a.converter._dispatch("codeSpans.after",e,n,a),e}),r.subParser("completeHTMLDocument",function(e,n,a){if(!n.completeHTMLDocument)return e;e=a.converter._dispatch("completeHTMLDocument.before",e,n,a);var d="html",i=`<!DOCTYPE HTML>
`,c="",s=`<meta charset="utf-8">
`,l="",C="";typeof a.metadata.parsed.doctype<"u"&&(i="<!DOCTYPE "+a.metadata.parsed.doctype+`>
`,d=a.metadata.parsed.doctype.toString().toLowerCase(),(d==="html"||d==="html5")&&(s='<meta charset="utf-8">'));for(var y in a.metadata.parsed)if(a.metadata.parsed.hasOwnProperty(y))switch(y.toLowerCase()){case"doctype":break;case"title":c="<title>"+a.metadata.parsed.title+`</title>
`;break;case"charset":d==="html"||d==="html5"?s='<meta charset="'+a.metadata.parsed.charset+`">
`:s='<meta name="charset" content="'+a.metadata.parsed.charset+`">
`;break;case"language":case"lang":l=' lang="'+a.metadata.parsed[y]+'"',C+='<meta name="'+y+'" content="'+a.metadata.parsed[y]+`">
`;break;default:C+='<meta name="'+y+'" content="'+a.metadata.parsed[y]+`">
`}return e=i+"<html"+l+`>
<head>
`+c+s+C+`</head>
<body>
`+e.trim()+`
</body>
</html>`,e=a.converter._dispatch("completeHTMLDocument.after",e,n,a),e}),r.subParser("detab",function(e,n,a){return e=a.converter._dispatch("detab.before",e,n,a),e=e.replace(/\t(?=\t)/g,"    "),e=e.replace(/\t/g,"¨A¨B"),e=e.replace(/¨B(.+?)¨A/g,function(d,i){for(var c=i,s=4-c.length%4,l=0;l<s;l++)c+=" ";return c}),e=e.replace(/¨A/g,"    "),e=e.replace(/¨B/g,""),e=a.converter._dispatch("detab.after",e,n,a),e}),r.subParser("ellipsis",function(e,n,a){return n.ellipsis&&(e=a.converter._dispatch("ellipsis.before",e,n,a),e=e.replace(/\.\.\./g,"…"),e=a.converter._dispatch("ellipsis.after",e,n,a)),e}),r.subParser("emoji",function(e,n,a){if(!n.emoji)return e;e=a.converter._dispatch("emoji.before",e,n,a);var d=/:([\S]+?):/g;return e=e.replace(d,function(i,c){return r.helper.emojis.hasOwnProperty(c)?r.helper.emojis[c]:i}),e=a.converter._dispatch("emoji.after",e,n,a),e}),r.subParser("encodeAmpsAndAngles",function(e,n,a){return e=a.converter._dispatch("encodeAmpsAndAngles.before",e,n,a),e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?$!])/gi,"&lt;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=a.converter._dispatch("encodeAmpsAndAngles.after",e,n,a),e}),r.subParser("encodeBackslashEscapes",function(e,n,a){return e=a.converter._dispatch("encodeBackslashEscapes.before",e,n,a),e=e.replace(/\\(\\)/g,r.helper.escapeCharactersCallback),e=e.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g,r.helper.escapeCharactersCallback),e=a.converter._dispatch("encodeBackslashEscapes.after",e,n,a),e}),r.subParser("encodeCode",function(e,n,a){return e=a.converter._dispatch("encodeCode.before",e,n,a),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,r.helper.escapeCharactersCallback),e=a.converter._dispatch("encodeCode.after",e,n,a),e}),r.subParser("escapeSpecialCharsWithinTagAttributes",function(e,n,a){e=a.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",e,n,a);var d=/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,i=/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;return e=e.replace(d,function(c){return c.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,r.helper.escapeCharactersCallback)}),e=e.replace(i,function(c){return c.replace(/([\\`*_~=|])/g,r.helper.escapeCharactersCallback)}),e=a.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",e,n,a),e}),r.subParser("githubCodeBlocks",function(e,n,a){return n.ghCodeBlocks?(e=a.converter._dispatch("githubCodeBlocks.before",e,n,a),e+="¨0",e=e.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,function(d,i,c,s){var l=n.omitExtraWLInCodeBlocks?"":`
`;return s=r.subParser("encodeCode")(s,n,a),s=r.subParser("detab")(s,n,a),s=s.replace(/^\n+/g,""),s=s.replace(/\n+$/g,""),s="<pre><code"+(c?' class="'+c+" language-"+c+'"':"")+">"+s+l+"</code></pre>",s=r.subParser("hashBlock")(s,n,a),`

¨G`+(a.ghCodeBlocks.push({text:d,codeblock:s})-1)+`G

`}),e=e.replace(/¨0/,""),a.converter._dispatch("githubCodeBlocks.after",e,n,a)):e}),r.subParser("hashBlock",function(e,n,a){return e=a.converter._dispatch("hashBlock.before",e,n,a),e=e.replace(/(^\n+|\n+$)/g,""),e=`

¨K`+(a.gHtmlBlocks.push(e)-1)+`K

`,e=a.converter._dispatch("hashBlock.after",e,n,a),e}),r.subParser("hashCodeTags",function(e,n,a){e=a.converter._dispatch("hashCodeTags.before",e,n,a);var d=function(i,c,s,l){var C=s+r.subParser("encodeCode")(c,n,a)+l;return"¨C"+(a.gHtmlSpans.push(C)-1)+"C"};return e=r.helper.replaceRecursiveRegExp(e,d,"<code\\b[^>]*>","</code>","gim"),e=a.converter._dispatch("hashCodeTags.after",e,n,a),e}),r.subParser("hashElement",function(e,n,a){return function(d,i){var c=i;return c=c.replace(/\n\n/g,`
`),c=c.replace(/^\n/,""),c=c.replace(/\n+$/g,""),c=`

¨K`+(a.gHtmlBlocks.push(c)-1)+`K

`,c}}),r.subParser("hashHTMLBlocks",function(e,n,a){e=a.converter._dispatch("hashHTMLBlocks.before",e,n,a);var d=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],i=function(t,_,j,z){var H=t;return j.search(/\bmarkdown\b/)!==-1&&(H=j+a.converter.makeHtml(_)+z),`

¨K`+(a.gHtmlBlocks.push(H)-1)+`K

`};n.backslashEscapesHTMLTags&&(e=e.replace(/\\<(\/?[^>]+?)>/g,function(t,_){return"&lt;"+_+"&gt;"}));for(var c=0;c<d.length;++c)for(var s,l=new RegExp("^ {0,3}(<"+d[c]+"\\b[^>]*>)","im"),C="<"+d[c]+"\\b[^>]*>",y="</"+d[c]+">";(s=r.helper.regexIndexOf(e,l))!==-1;){var v=r.helper.splitAtIndex(e,s),b=r.helper.replaceRecursiveRegExp(v[1],i,C,y,"im");if(b===v[1])break;e=v[0].concat(b)}return e=e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,r.subParser("hashElement")(e,n,a)),e=r.helper.replaceRecursiveRegExp(e,function(t){return`

¨K`+(a.gHtmlBlocks.push(t)-1)+`K

`},"^ {0,3}<!--","-->","gm"),e=e.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,r.subParser("hashElement")(e,n,a)),e=a.converter._dispatch("hashHTMLBlocks.after",e,n,a),e}),r.subParser("hashHTMLSpans",function(e,n,a){e=a.converter._dispatch("hashHTMLSpans.before",e,n,a);function d(i){return"¨C"+(a.gHtmlSpans.push(i)-1)+"C"}return e=e.replace(/<[^>]+?\/>/gi,function(i){return d(i)}),e=e.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,function(i){return d(i)}),e=e.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,function(i){return d(i)}),e=e.replace(/<[^>]+?>/gi,function(i){return d(i)}),e=a.converter._dispatch("hashHTMLSpans.after",e,n,a),e}),r.subParser("unhashHTMLSpans",function(e,n,a){e=a.converter._dispatch("unhashHTMLSpans.before",e,n,a);for(var d=0;d<a.gHtmlSpans.length;++d){for(var i=a.gHtmlSpans[d],c=0;/¨C(\d+)C/.test(i);){var s=RegExp.$1;if(i=i.replace("¨C"+s+"C",a.gHtmlSpans[s]),c===10){console.error("maximum nesting of 10 spans reached!!!");break}++c}e=e.replace("¨C"+d+"C",i)}return e=a.converter._dispatch("unhashHTMLSpans.after",e,n,a),e}),r.subParser("hashPreCodeTags",function(e,n,a){e=a.converter._dispatch("hashPreCodeTags.before",e,n,a);var d=function(i,c,s,l){var C=s+r.subParser("encodeCode")(c,n,a)+l;return`

¨G`+(a.ghCodeBlocks.push({text:i,codeblock:C})-1)+`G

`};return e=r.helper.replaceRecursiveRegExp(e,d,"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),e=a.converter._dispatch("hashPreCodeTags.after",e,n,a),e}),r.subParser("headers",function(e,n,a){e=a.converter._dispatch("headers.before",e,n,a);var d=isNaN(parseInt(n.headerLevelStart))?1:parseInt(n.headerLevelStart),i=n.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,c=n.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;e=e.replace(i,function(C,y){var v=r.subParser("spanGamut")(y,n,a),b=n.noHeaderId?"":' id="'+l(y)+'"',t=d,_="<h"+t+b+">"+v+"</h"+t+">";return r.subParser("hashBlock")(_,n,a)}),e=e.replace(c,function(C,y){var v=r.subParser("spanGamut")(y,n,a),b=n.noHeaderId?"":' id="'+l(y)+'"',t=d+1,_="<h"+t+b+">"+v+"</h"+t+">";return r.subParser("hashBlock")(_,n,a)});var s=n.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;e=e.replace(s,function(C,y,v){var b=v;n.customizedHeaderId&&(b=v.replace(/\s?\{([^{]+?)}\s*$/,""));var t=r.subParser("spanGamut")(b,n,a),_=n.noHeaderId?"":' id="'+l(v)+'"',j=d-1+y.length,z="<h"+j+_+">"+t+"</h"+j+">";return r.subParser("hashBlock")(z,n,a)});function l(C){var y,v;if(n.customizedHeaderId){var b=C.match(/\{([^{]+?)}\s*$/);b&&b[1]&&(C=b[1])}return y=C,r.helper.isString(n.prefixHeaderId)?v=n.prefixHeaderId:n.prefixHeaderId===!0?v="section-":v="",n.rawPrefixHeaderId||(y=v+y),n.ghCompatibleHeaderId?y=y.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():n.rawHeaderId?y=y.replace(/ /g,"-").replace(/&amp;/g,"&").replace(/¨T/g,"¨").replace(/¨D/g,"$").replace(/["']/g,"-").toLowerCase():y=y.replace(/[^\w]/g,"").toLowerCase(),n.rawPrefixHeaderId&&(y=v+y),a.hashLinkCounts[y]?y=y+"-"+a.hashLinkCounts[y]++:a.hashLinkCounts[y]=1,y}return e=a.converter._dispatch("headers.after",e,n,a),e}),r.subParser("horizontalRule",function(e,n,a){e=a.converter._dispatch("horizontalRule.before",e,n,a);var d=r.subParser("hashBlock")("<hr />",n,a);return e=e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,d),e=e.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,d),e=e.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,d),e=a.converter._dispatch("horizontalRule.after",e,n,a),e}),r.subParser("images",function(e,n,a){e=a.converter._dispatch("images.before",e,n,a);var d=/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,i=/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,c=/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,s=/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,l=/!\[([^\[\]]+)]()()()()()/g;function C(v,b,t,_,j,z,H,$){return _=_.replace(/\s/g,""),y(v,b,t,_,j,z,H,$)}function y(v,b,t,_,j,z,H,$){var x=a.gUrls,G=a.gTitles,Y=a.gDimensions;if(t=t.toLowerCase(),$||($=""),v.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)_="";else if(_===""||_===null)if((t===""||t===null)&&(t=b.toLowerCase().replace(/ ?\n/g," ")),_="#"+t,!r.helper.isUndefined(x[t]))_=x[t],r.helper.isUndefined(G[t])||($=G[t]),r.helper.isUndefined(Y[t])||(j=Y[t].width,z=Y[t].height);else return v;b=b.replace(/"/g,"&quot;").replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback),_=_.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback);var N='<img src="'+_+'" alt="'+b+'"';return $&&r.helper.isString($)&&($=$.replace(/"/g,"&quot;").replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback),N+=' title="'+$+'"'),j&&z&&(j=j==="*"?"auto":j,z=z==="*"?"auto":z,N+=' width="'+j+'"',N+=' height="'+z+'"'),N+=" />",N}return e=e.replace(s,y),e=e.replace(c,C),e=e.replace(i,y),e=e.replace(d,y),e=e.replace(l,y),e=a.converter._dispatch("images.after",e,n,a),e}),r.subParser("italicsAndBold",function(e,n,a){e=a.converter._dispatch("italicsAndBold.before",e,n,a);function d(i,c,s){return c+i+s}return n.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(i,c){return d(c,"<strong><em>","</em></strong>")}),e=e.replace(/\b__(\S[\s\S]*?)__\b/g,function(i,c){return d(c,"<strong>","</strong>")}),e=e.replace(/\b_(\S[\s\S]*?)_\b/g,function(i,c){return d(c,"<em>","</em>")})):(e=e.replace(/___(\S[\s\S]*?)___/g,function(i,c){return/\S$/.test(c)?d(c,"<strong><em>","</em></strong>"):i}),e=e.replace(/__(\S[\s\S]*?)__/g,function(i,c){return/\S$/.test(c)?d(c,"<strong>","</strong>"):i}),e=e.replace(/_([^\s_][\s\S]*?)_/g,function(i,c){return/\S$/.test(c)?d(c,"<em>","</em>"):i})),n.literalMidWordAsterisks?(e=e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,function(i,c,s){return d(s,c+"<strong><em>","</em></strong>")}),e=e.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,function(i,c,s){return d(s,c+"<strong>","</strong>")}),e=e.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,function(i,c,s){return d(s,c+"<em>","</em>")})):(e=e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(i,c){return/\S$/.test(c)?d(c,"<strong><em>","</em></strong>"):i}),e=e.replace(/\*\*(\S[\s\S]*?)\*\*/g,function(i,c){return/\S$/.test(c)?d(c,"<strong>","</strong>"):i}),e=e.replace(/\*([^\s*][\s\S]*?)\*/g,function(i,c){return/\S$/.test(c)?d(c,"<em>","</em>"):i})),e=a.converter._dispatch("italicsAndBold.after",e,n,a),e}),r.subParser("lists",function(e,n,a){function d(s,l){a.gListLevel++,s=s.replace(/\n{2,}$/,`
`),s+="¨0";var C=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,y=/\n[ \t]*\n(?!¨0)/.test(s);return n.disableForced4SpacesIndentedSublists&&(C=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),s=s.replace(C,function(v,b,t,_,j,z,H){H=H&&H.trim()!=="";var $=r.subParser("outdent")(j,n,a),x="";return z&&n.tasklists&&(x=' class="task-list-item" style="list-style-type: none;"',$=$.replace(/^[ \t]*\[(x|X| )?]/m,function(){var G='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return H&&(G+=" checked"),G+=">",G})),$=$.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(G){return"¨A"+G}),b||$.search(/\n{2,}/)>-1?($=r.subParser("githubCodeBlocks")($,n,a),$=r.subParser("blockGamut")($,n,a)):($=r.subParser("lists")($,n,a),$=$.replace(/\n$/,""),$=r.subParser("hashHTMLBlocks")($,n,a),$=$.replace(/\n\n+/g,`

`),y?$=r.subParser("paragraphs")($,n,a):$=r.subParser("spanGamut")($,n,a)),$=$.replace("¨A",""),$="<li"+x+">"+$+`</li>
`,$}),s=s.replace(/¨0/g,""),a.gListLevel--,l&&(s=s.replace(/\s+$/,"")),s}function i(s,l){if(l==="ol"){var C=s.match(/^ *(\d+)\./);if(C&&C[1]!=="1")return' start="'+C[1]+'"'}return""}function c(s,l,C){var y=n.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,v=n.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,b=l==="ul"?y:v,t="";if(s.search(b)!==-1)(function j(z){var H=z.search(b),$=i(s,l);H!==-1?(t+=`

<`+l+$+`>
`+d(z.slice(0,H),!!C)+"</"+l+`>
`,l=l==="ul"?"ol":"ul",b=l==="ul"?y:v,j(z.slice(H))):t+=`

<`+l+$+`>
`+d(z,!!C)+"</"+l+`>
`})(s);else{var _=i(s,l);t=`

<`+l+_+`>
`+d(s,!!C)+"</"+l+`>
`}return t}return e=a.converter._dispatch("lists.before",e,n,a),e+="¨0",a.gListLevel?e=e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(s,l,C){var y=C.search(/[*+-]/g)>-1?"ul":"ol";return c(l,y,!0)}):e=e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(s,l,C,y){var v=y.search(/[*+-]/g)>-1?"ul":"ol";return c(C,v,!1)}),e=e.replace(/¨0/,""),e=a.converter._dispatch("lists.after",e,n,a),e}),r.subParser("metadata",function(e,n,a){if(!n.metadata)return e;e=a.converter._dispatch("metadata.before",e,n,a);function d(i){a.metadata.raw=i,i=i.replace(/&/g,"&amp;").replace(/"/g,"&quot;"),i=i.replace(/\n {4}/g," "),i.replace(/^([\S ]+): +([\s\S]+?)$/gm,function(c,s,l){return a.metadata.parsed[s]=l,""})}return e=e.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,function(i,c,s){return d(s),"¨M"}),e=e.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,function(i,c,s){return c&&(a.metadata.format=c),d(s),"¨M"}),e=e.replace(/¨M/g,""),e=a.converter._dispatch("metadata.after",e,n,a),e}),r.subParser("outdent",function(e,n,a){return e=a.converter._dispatch("outdent.before",e,n,a),e=e.replace(/^(\t|[ ]{1,4})/gm,"¨0"),e=e.replace(/¨0/g,""),e=a.converter._dispatch("outdent.after",e,n,a),e}),r.subParser("paragraphs",function(e,n,a){e=a.converter._dispatch("paragraphs.before",e,n,a),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"");for(var d=e.split(/\n{2,}/g),i=[],c=d.length,s=0;s<c;s++){var l=d[s];l.search(/¨(K|G)(\d+)\1/g)>=0?i.push(l):l.search(/\S/)>=0&&(l=r.subParser("spanGamut")(l,n,a),l=l.replace(/^([ \t]*)/g,"<p>"),l+="</p>",i.push(l))}for(c=i.length,s=0;s<c;s++){for(var C="",y=i[s],v=!1;/¨(K|G)(\d+)\1/.test(y);){var b=RegExp.$1,t=RegExp.$2;b==="K"?C=a.gHtmlBlocks[t]:v?C=r.subParser("encodeCode")(a.ghCodeBlocks[t].text,n,a):C=a.ghCodeBlocks[t].codeblock,C=C.replace(/\$/g,"$$$$"),y=y.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,C),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(y)&&(v=!0)}i[s]=y}return e=i.join(`
`),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,""),a.converter._dispatch("paragraphs.after",e,n,a)}),r.subParser("runExtension",function(e,n,a,d){if(e.filter)n=e.filter(n,d.converter,a);else if(e.regex){var i=e.regex;i instanceof RegExp||(i=new RegExp(i,"g")),n=n.replace(i,e.replace)}return n}),r.subParser("spanGamut",function(e,n,a){return e=a.converter._dispatch("spanGamut.before",e,n,a),e=r.subParser("codeSpans")(e,n,a),e=r.subParser("escapeSpecialCharsWithinTagAttributes")(e,n,a),e=r.subParser("encodeBackslashEscapes")(e,n,a),e=r.subParser("images")(e,n,a),e=r.subParser("anchors")(e,n,a),e=r.subParser("autoLinks")(e,n,a),e=r.subParser("simplifiedAutoLinks")(e,n,a),e=r.subParser("emoji")(e,n,a),e=r.subParser("underline")(e,n,a),e=r.subParser("italicsAndBold")(e,n,a),e=r.subParser("strikethrough")(e,n,a),e=r.subParser("ellipsis")(e,n,a),e=r.subParser("hashHTMLSpans")(e,n,a),e=r.subParser("encodeAmpsAndAngles")(e,n,a),n.simpleLineBreaks?/\n\n¨K/.test(e)||(e=e.replace(/\n+/g,`<br />
`)):e=e.replace(/  +\n/g,`<br />
`),e=a.converter._dispatch("spanGamut.after",e,n,a),e}),r.subParser("strikethrough",function(e,n,a){function d(i){return n.simplifiedAutoLink&&(i=r.subParser("simplifiedAutoLinks")(i,n,a)),"<del>"+i+"</del>"}return n.strikethrough&&(e=a.converter._dispatch("strikethrough.before",e,n,a),e=e.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(i,c){return d(c)}),e=a.converter._dispatch("strikethrough.after",e,n,a)),e}),r.subParser("stripLinkDefinitions",function(e,n,a){var d=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,i=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;e+="¨0";var c=function(s,l,C,y,v,b,t){return l=l.toLowerCase(),e.toLowerCase().split(l).length-1<2?s:(C.match(/^data:.+?\/.+?;base64,/)?a.gUrls[l]=C.replace(/\s/g,""):a.gUrls[l]=r.subParser("encodeAmpsAndAngles")(C,n,a),b?b+t:(t&&(a.gTitles[l]=t.replace(/"|'/g,"&quot;")),n.parseImgDimensions&&y&&v&&(a.gDimensions[l]={width:y,height:v}),""))};return e=e.replace(i,c),e=e.replace(d,c),e=e.replace(/¨0/,""),e}),r.subParser("tables",function(e,n,a){if(!n.tables)return e;var d=/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,i=/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;function c(v){return/^:[ \t]*--*$/.test(v)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(v)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(v)?' style="text-align:center;"':""}function s(v,b){var t="";return v=v.trim(),(n.tablesHeaderId||n.tableHeaderId)&&(t=' id="'+v.replace(/ /g,"_").toLowerCase()+'"'),v=r.subParser("spanGamut")(v,n,a),"<th"+t+b+">"+v+`</th>
`}function l(v,b){var t=r.subParser("spanGamut")(v,n,a);return"<td"+b+">"+t+`</td>
`}function C(v,b){for(var t=`<table>
<thead>
<tr>
`,_=v.length,j=0;j<_;++j)t+=v[j];for(t+=`</tr>
</thead>
<tbody>
`,j=0;j<b.length;++j){t+=`<tr>
`;for(var z=0;z<_;++z)t+=b[j][z];t+=`</tr>
`}return t+=`</tbody>
</table>
`,t}function y(v){var b,t=v.split(`
`);for(b=0;b<t.length;++b)/^ {0,3}\|/.test(t[b])&&(t[b]=t[b].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(t[b])&&(t[b]=t[b].replace(/\|[ \t]*$/,"")),t[b]=r.subParser("codeSpans")(t[b],n,a);var _=t[0].split("|").map(function(N){return N.trim()}),j=t[1].split("|").map(function(N){return N.trim()}),z=[],H=[],$=[],x=[];for(t.shift(),t.shift(),b=0;b<t.length;++b)t[b].trim()!==""&&z.push(t[b].split("|").map(function(N){return N.trim()}));if(_.length<j.length)return v;for(b=0;b<j.length;++b)$.push(c(j[b]));for(b=0;b<_.length;++b)r.helper.isUndefined($[b])&&($[b]=""),H.push(s(_[b],$[b]));for(b=0;b<z.length;++b){for(var G=[],Y=0;Y<H.length;++Y)r.helper.isUndefined(z[b][Y]),G.push(l(z[b][Y],$[Y]));x.push(G)}return C(H,x)}return e=a.converter._dispatch("tables.before",e,n,a),e=e.replace(/\\(\|)/g,r.helper.escapeCharactersCallback),e=e.replace(d,y),e=e.replace(i,y),e=a.converter._dispatch("tables.after",e,n,a),e}),r.subParser("underline",function(e,n,a){return n.underline&&(e=a.converter._dispatch("underline.before",e,n,a),n.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(d,i){return"<u>"+i+"</u>"}),e=e.replace(/\b__(\S[\s\S]*?)__\b/g,function(d,i){return"<u>"+i+"</u>"})):(e=e.replace(/___(\S[\s\S]*?)___/g,function(d,i){return/\S$/.test(i)?"<u>"+i+"</u>":d}),e=e.replace(/__(\S[\s\S]*?)__/g,function(d,i){return/\S$/.test(i)?"<u>"+i+"</u>":d})),e=e.replace(/(_)/g,r.helper.escapeCharactersCallback),e=a.converter._dispatch("underline.after",e,n,a)),e}),r.subParser("unescapeSpecialChars",function(e,n,a){return e=a.converter._dispatch("unescapeSpecialChars.before",e,n,a),e=e.replace(/¨E(\d+)E/g,function(d,i){var c=parseInt(i);return String.fromCharCode(c)}),e=a.converter._dispatch("unescapeSpecialChars.after",e,n,a),e}),r.subParser("makeMarkdown.blockquote",function(e,n){var a="";if(e.hasChildNodes())for(var d=e.childNodes,i=d.length,c=0;c<i;++c){var s=r.subParser("makeMarkdown.node")(d[c],n);s!==""&&(a+=s)}return a=a.trim(),a="> "+a.split(`
`).join(`
> `),a}),r.subParser("makeMarkdown.codeBlock",function(e,n){var a=e.getAttribute("language"),d=e.getAttribute("precodenum");return"```"+a+`
`+n.preList[d]+"\n```"}),r.subParser("makeMarkdown.codeSpan",function(e){return"`"+e.innerHTML+"`"}),r.subParser("makeMarkdown.emphasis",function(e,n){var a="";if(e.hasChildNodes()){a+="*";for(var d=e.childNodes,i=d.length,c=0;c<i;++c)a+=r.subParser("makeMarkdown.node")(d[c],n);a+="*"}return a}),r.subParser("makeMarkdown.header",function(e,n,a){var d=new Array(a+1).join("#"),i="";if(e.hasChildNodes()){i=d+" ";for(var c=e.childNodes,s=c.length,l=0;l<s;++l)i+=r.subParser("makeMarkdown.node")(c[l],n)}return i}),r.subParser("makeMarkdown.hr",function(){return"---"}),r.subParser("makeMarkdown.image",function(e){var n="";return e.hasAttribute("src")&&(n+="!["+e.getAttribute("alt")+"](",n+="<"+e.getAttribute("src")+">",e.hasAttribute("width")&&e.hasAttribute("height")&&(n+=" ="+e.getAttribute("width")+"x"+e.getAttribute("height")),e.hasAttribute("title")&&(n+=' "'+e.getAttribute("title")+'"'),n+=")"),n}),r.subParser("makeMarkdown.links",function(e,n){var a="";if(e.hasChildNodes()&&e.hasAttribute("href")){var d=e.childNodes,i=d.length;a="[";for(var c=0;c<i;++c)a+=r.subParser("makeMarkdown.node")(d[c],n);a+="](",a+="<"+e.getAttribute("href")+">",e.hasAttribute("title")&&(a+=' "'+e.getAttribute("title")+'"'),a+=")"}return a}),r.subParser("makeMarkdown.list",function(e,n,a){var d="";if(!e.hasChildNodes())return"";for(var i=e.childNodes,c=i.length,s=e.getAttribute("start")||1,l=0;l<c;++l)if(!(typeof i[l].tagName>"u"||i[l].tagName.toLowerCase()!=="li")){var C="";a==="ol"?C=s.toString()+". ":C="- ",d+=C+r.subParser("makeMarkdown.listItem")(i[l],n),++s}return d+=`
<!-- -->
`,d.trim()}),r.subParser("makeMarkdown.listItem",function(e,n){for(var a="",d=e.childNodes,i=d.length,c=0;c<i;++c)a+=r.subParser("makeMarkdown.node")(d[c],n);return/\n$/.test(a)?a=a.split(`
`).join(`
    `).replace(/^ {4}$/gm,"").replace(/\n\n+/g,`

`):a+=`
`,a}),r.subParser("makeMarkdown.node",function(e,n,a){a=a||!1;var d="";if(e.nodeType===3)return r.subParser("makeMarkdown.txt")(e,n);if(e.nodeType===8)return"<!--"+e.data+`-->

`;if(e.nodeType!==1)return"";var i=e.tagName.toLowerCase();switch(i){case"h1":a||(d=r.subParser("makeMarkdown.header")(e,n,1)+`

`);break;case"h2":a||(d=r.subParser("makeMarkdown.header")(e,n,2)+`

`);break;case"h3":a||(d=r.subParser("makeMarkdown.header")(e,n,3)+`

`);break;case"h4":a||(d=r.subParser("makeMarkdown.header")(e,n,4)+`

`);break;case"h5":a||(d=r.subParser("makeMarkdown.header")(e,n,5)+`

`);break;case"h6":a||(d=r.subParser("makeMarkdown.header")(e,n,6)+`

`);break;case"p":a||(d=r.subParser("makeMarkdown.paragraph")(e,n)+`

`);break;case"blockquote":a||(d=r.subParser("makeMarkdown.blockquote")(e,n)+`

`);break;case"hr":a||(d=r.subParser("makeMarkdown.hr")(e,n)+`

`);break;case"ol":a||(d=r.subParser("makeMarkdown.list")(e,n,"ol")+`

`);break;case"ul":a||(d=r.subParser("makeMarkdown.list")(e,n,"ul")+`

`);break;case"precode":a||(d=r.subParser("makeMarkdown.codeBlock")(e,n)+`

`);break;case"pre":a||(d=r.subParser("makeMarkdown.pre")(e,n)+`

`);break;case"table":a||(d=r.subParser("makeMarkdown.table")(e,n)+`

`);break;case"code":d=r.subParser("makeMarkdown.codeSpan")(e,n);break;case"em":case"i":d=r.subParser("makeMarkdown.emphasis")(e,n);break;case"strong":case"b":d=r.subParser("makeMarkdown.strong")(e,n);break;case"del":d=r.subParser("makeMarkdown.strikethrough")(e,n);break;case"a":d=r.subParser("makeMarkdown.links")(e,n);break;case"img":d=r.subParser("makeMarkdown.image")(e,n);break;default:d=e.outerHTML+`

`}return d}),r.subParser("makeMarkdown.paragraph",function(e,n){var a="";if(e.hasChildNodes())for(var d=e.childNodes,i=d.length,c=0;c<i;++c)a+=r.subParser("makeMarkdown.node")(d[c],n);return a=a.trim(),a}),r.subParser("makeMarkdown.pre",function(e,n){var a=e.getAttribute("prenum");return"<pre>"+n.preList[a]+"</pre>"}),r.subParser("makeMarkdown.strikethrough",function(e,n){var a="";if(e.hasChildNodes()){a+="~~";for(var d=e.childNodes,i=d.length,c=0;c<i;++c)a+=r.subParser("makeMarkdown.node")(d[c],n);a+="~~"}return a}),r.subParser("makeMarkdown.strong",function(e,n){var a="";if(e.hasChildNodes()){a+="**";for(var d=e.childNodes,i=d.length,c=0;c<i;++c)a+=r.subParser("makeMarkdown.node")(d[c],n);a+="**"}return a}),r.subParser("makeMarkdown.table",function(e,n){var a="",d=[[],[]],i=e.querySelectorAll("thead>tr>th"),c=e.querySelectorAll("tbody>tr"),s,l;for(s=0;s<i.length;++s){var C=r.subParser("makeMarkdown.tableCell")(i[s],n),y="---";if(i[s].hasAttribute("style")){var v=i[s].getAttribute("style").toLowerCase().replace(/\s/g,"");switch(v){case"text-align:left;":y=":---";break;case"text-align:right;":y="---:";break;case"text-align:center;":y=":---:";break}}d[0][s]=C.trim(),d[1][s]=y}for(s=0;s<c.length;++s){var b=d.push([])-1,t=c[s].getElementsByTagName("td");for(l=0;l<i.length;++l){var _=" ";typeof t[l]<"u"&&(_=r.subParser("makeMarkdown.tableCell")(t[l],n)),d[b].push(_)}}var j=3;for(s=0;s<d.length;++s)for(l=0;l<d[s].length;++l){var z=d[s][l].length;z>j&&(j=z)}for(s=0;s<d.length;++s){for(l=0;l<d[s].length;++l)s===1?d[s][l].slice(-1)===":"?d[s][l]=r.helper.padEnd(d[s][l].slice(-1),j-1,"-")+":":d[s][l]=r.helper.padEnd(d[s][l],j,"-"):d[s][l]=r.helper.padEnd(d[s][l],j);a+="| "+d[s].join(" | ")+` |
`}return a.trim()}),r.subParser("makeMarkdown.tableCell",function(e,n){var a="";if(!e.hasChildNodes())return"";for(var d=e.childNodes,i=d.length,c=0;c<i;++c)a+=r.subParser("makeMarkdown.node")(d[c],n,!0);return a.trim()}),r.subParser("makeMarkdown.txt",function(e){var n=e.nodeValue;return n=n.replace(/ +/g," "),n=n.replace(/¨NBSP;/g," "),n=r.helper.unescapeHTMLEntities(n),n=n.replace(/([*_~|`])/g,"\\$1"),n=n.replace(/^(\s*)>/g,"\\$1>"),n=n.replace(/^#/gm,"\\#"),n=n.replace(/^(\s*)([-=]{3,})(\s*)$/,"$1\\$2$3"),n=n.replace(/^( {0,3}\d+)\./gm,"$1\\."),n=n.replace(/^( {0,3})([+-])/gm,"$1\\$2"),n=n.replace(/]([\s]*)\(/g,"\\]$1\\("),n=n.replace(/^ {0,3}\[([\S \t]*?)]:/gm,"\\[$1]:"),n});var A=this;u.exports?u.exports=r:A.showdown=r}).call(fa)}(ge)),ge.exports}var ha=pa();const ma=la(ha);function ue({class:u,...o},f){const r=J(u),S=new ma.Converter().makeHtml(f),E=p.div({class:`style-markup ${r.val}`,innerHTML:S,...o});return Prism.highlightAllUnder(E),E}const se={NONE:"none",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},U={HOVER_IN:"hover-in",HOVER_OUT:"hover-out",HOVER:"hover",CLICK:"click",FOCUS:"focus",FOCUS_IN:"focus-in",FOCUS_OUT:"focus-out"},Me=p.div({name:"Popups",class:"fixed inset-0 z-[100] pointer-events-none"});ce(document.documentElement,Me);function Oe({visible:u=F(!1),direction:o=se.BOTTOM,trigger:f=U.CLICK,name:r,class:h,...S},...E){const M=J(h);let T;const O=F({height:0,width:0,left:0,top:0,yOffset:0,xOffset:0}),I=async()=>{if(!T)return;if(!m.isConnected)return D();if(!m.parentElement)throw new Error("Popup target has been removed from DOM");const w=m.parentElement.getBoundingClientRect();O.val={top:w.top,left:w.left,width:w.width,height:w.height,xOffset:0,yOffset:0},await Se();const k=Me.getBoundingClientRect(),P=T.popup.getBoundingClientRect(),A={x:Math.max(-P.left,0),y:Math.max(-P.top,0)},e={x:Math.min(k.width-P.left-P.width,0),y:Math.min(k.height-P.top-P.height,0)};O.val={...O.val,xOffset:A.x+e.x,yOffset:A.y+e.y}},B=()=>{const w=ea(o,[[se.NONE,""],[se.TOP,"bottom-full mb-1"],[se.RIGHT,"left-full ml-1"],[se.BOTTOM,"top-full mt-1"],[se.LEFT,"right-full mr-1"]]),k=p.div({name:`${r} Popup`,class:()=>`absolute pointer-events-auto ${w} ${M.val}`,...S},E),P=p.div({name:`${r} Popup Anchor`,class:()=>"absolute transition pointer-events-none",style:()=>`left: ${O.val.left+O.val.xOffset}px; top: ${O.val.top+O.val.yOffset}px; height: ${O.val.height}px; width: ${O.val.width}px;`},k),A=Ye(k,()=>Se().then(()=>u.val=!1));ce(Me,P),T={anchor:P,popup:k,abortController:A}},D=()=>{T==null||T.anchor.remove(),T==null||T.popup.remove(),T==null||T.abortController.abort(),T=void 0},X=()=>{if(!m.parentElement)throw new Error("Popup target has been removed from DOM");oe(f,[U.HOVER,U.HOVER_IN])&&m.parentElement.addEventListener("mouseenter",()=>u.val=!0),oe(f,[U.HOVER,U.HOVER_OUT])&&m.parentElement.addEventListener("mouseleave",()=>u.val=!1),oe(f,U.CLICK)&&m.parentElement.addEventListener("click",()=>u.val=!0),oe(f,[U.FOCUS,U.FOCUS_IN])&&m.parentElement.addEventListener("focusin",()=>u.val=!0),oe(f,[U.FOCUS,U.FOCUS_OUT])&&m.parentElement.addEventListener("focusout",()=>u.val=!1)};ae(async()=>{if(!u.val)return D();T||B(),I()});const m=p.div({name:`${r} Popup Target`,hidden:!0});window.addEventListener("resize",I);const g=new ResizeObserver(I);return Se().then(()=>g.observe(m.parentElement)).then(()=>X()),m}function ga({options:u,value:o=F(void 0),required:f,class:r,...h}){const S=J(r);return p.div({class:"flex flex-col gap-1 group"},u.map(E=>{const M=ae(()=>o.val===E.value);return p.div({name:"Radio",onclick:()=>o.val=M.val?void 0:E.value,"data-selected":ee(()=>M.val||void 0),class:()=>{var T;return`group flex cursor-pointer justify-between items-center gap-2 select-none group-has-invalid:mood-critical ${(T=S.val)==null?void 0:T.split(" ").filter(O=>!O.includes("variant")).join(" ")}`},...h},E.name??String(E.value),re({disabled:E.disabled,tabIndex:0,class:()=>{var T;return`button size-5 rounded-full focus-visible:mood-accent ${(T=S.val)==null?void 0:T.split(" ").filter(O=>O.includes("variant")).join(" ")}`}},p.div({class:"bg-current rounded-full size-2.5 aspect-square not-group-data-selected:hidden"})))}),p.input({type:"checkbox",checked:()=>o.val!==void 0,required:f,hidden:!0}))}function K({options:u,value:o=F(u[0].value),useChips:f=!1,lead:r,trail:h,class:S,...E}){const M=J(S),T=ae(()=>{var m;return(m=M.val)==null?void 0:m.split(" ").find(g=>g.includes("mood-"))}),O=ae(()=>Array.isArray(o.val)),I=ae(()=>o.val===void 0||Array.isArray(o.val)&&o.val.length===0),B=F(!1),D=m=>{if(Array.isArray(o.val))return o.val=Qe(o.val,m);o.val=m};return re({name:"Select",class:()=>`flex rounded-lg button gap-2 justify-between focus-visible:mood-accent ${M.val}`,tabIndex:0,onclick:()=>B.val=!B.val,...E},r,()=>p.div({name:"Value Display",class:()=>`text-nowrap text-ellipsis overflow-hidden ${I.val?"text-foreground-weak":""} ${f?"flex flex-wrap gap-1":""} ${B.val?"invisible":""}`},I.val?"None":Array.isArray(o.val)?f?o.val.map(m=>re({class:"group mood-accent text-xs variant-soft rounded relative",onclick:g=>{g.stopPropagation(),D(m)}},p.span({class:"group-hover:opacity-25"},String(m)),p.i({class:"not-group-hover:hidden absolute right-1"},"close"))):o.val.map(m=>String(m)).join(", "):String(o.val)),h,ne.svg({viewBox:"0 0 100 100",class:"size-4 flex-none",style:"stroke-linecap:round; stroke-linejoin:round;"},ne.path({d:"M25,35L50,15L75,35",class:"stroke-current stroke-[10] fill-none",hidden:ee(()=>!O.val||void 0)}),ne.path({d:"M25,65L50,85L75,65",class:"stroke-current stroke-[10] fill-none",hidden:ee(()=>!O.val||void 0)}),ne.path({d:"M25,40L50,60L75,40",class:"stroke-current stroke-[10] fill-none",hidden:ee(()=>O.val||void 0)})),Oe({name:"Select Content",visible:B,direction:"none",class:()=>`left-1/2 -translate-x-1/2 min-w-full max-h-40 overflow-y-auto card vessel shadow-lg p-1 rounded-lg card glass select-none ${T.val}`},()=>p.ul({name:"Select Options",class:"flex flex-col"},u.map(m=>{const g=ae(()=>oe(o.val,m.value));return va(m,O,g,D)}))))}function va(u,o,f,r){return p.div({"data-selected":ee(()=>f.val||void 0),class:"contents group"},p.span({name:"Magic divider",class:"h-[1px] mx-1 pointer-events-none bg-surface-500/15 group-first:hidden group-hover:invisible group-data-selected:invisible [*:hover_+_*_>_&]:invisible [*[data-selected]_+_*_>_&]:invisible "}),p.button({class:"flex gap-2 not-disabled:hover:bg-surface-500/20 not-disabled:focus-visible:bg-surface-500/20 not-disabled:focus-visible:focus-ring disabled:bg-transparent px-1 rounded cursor-pointer justify-between disabled:opacity-50 disabled:cursor-not-allowed items-center group-data-selected:mood-accent group-data-selected:!bg-mood-500/25",disabled:ee(()=>u.disabled||void 0),tabIndex:0,onclick:()=>r==null?void 0:r(u.value)},p.span({class:"text-nowrap"},u.name??String(u.value)),ne.svg({viewBox:"0 0 100 100",class:"size-4 not-group-data-selected:invisible",style:"stroke-linecap:round; stroke-linejoin:round;",hidden:ee(()=>!o.val||void 0)},ne.path({d:"M20,60L40,80L80,20",class:"stroke-current stroke-[10] fill-none"})),p.div({class:"bg-current rounded-full size-2 m-0.75 aspect-square not-group-data-selected:invisible",hidden:ee(()=>o.val||void 0)})))}function _a({class:u},o){const f=J(u),r=[...o.querySelectorAll("h1, h2, h3, h4, h5")];let h=F(r[0]);return document.addEventListener("scroll",()=>{r.some((S,E)=>{if(S.getBoundingClientRect().bottom>o.scrollTop+112)return h.val=r[Math.max(E-1,0)],!0})}),p.ul({class:()=>`flex flex-col ${f.val}`},[...r].map(S=>{const E=parseInt(S.tagName.slice(1))-1;return p.li({onclick:()=>S.scrollIntoView({behavior:"smooth"}),"data-indented":ee(()=>E),"data-selected":ee(()=>h.val===S),style:`--indent: ${1+(E-1)*.5}rem;`,class:"group relative flex gap-4 cursor-pointer text-mood-weak not-data-selected:hover:text-foreground data-selected:mood-accent data-selected:text-mood"},p.span({name:"Divider",class:"absolute h-full w-px left-0 bg-current/50 group-data-selected:bg-current not-group-data-indented:hidden group-hover:w-[4px] group-data-selected:w-[4px] transition-all"}),p.span({name:"Title",class:"group-data-indented:ml-(--indent) justify-start group-data-selected:font-semibold flex-1 py-0.5 z-1 transition-all"},S.textContent))}))}function we({value:u=F(void 0),type:o=u.rawVal!==void 0?typeof u.rawVal:"text",placeholder:f=`Enter ${o}...`,required:r=!1,lead:h,trail:S,onValueChanged:E,onValidityChanged:M,class:T,...O},...I){const B=J(T),D=m=>{var w;const g=(w=m.target)==null?void 0:w.value;typeof u.val=="number"&&Number(g)?u.val=Number(g):typeof u.val=="string"&&(u.val=g),E==null||E(u.rawVal),M==null||M(X.checkValidity())},X=p.input({class:"input flex-1",type:o,value:()=>u.val??"",oninput:D,placeholder:f,required:r});return p.div({name:"Text Input",class:()=>`flex p-0 *:first:pl-2 *:last:pr-2 gap-2 *:py-1 has-focus-visible:mood-accent  has-invalid:has-invalid:mood-critical ${B.val}`,...O},()=>["boolean","string","number","bigint"].includes(typeof h)?p.span(h):h,X,I,()=>["boolean","string","number","bigint"].includes(typeof S)?p.span(S):S)}function ze({trigger:u=[U.HOVER,U.FOCUS],direction:o=se.BOTTOM,class:f,...r},...h){const S=J(f);return Oe({trigger:u,direction:o,class:()=>`variant-soft-outline badge glass px-2 py-1 max-w-xs text-xs flex ${S.val}`,...r},h)}function q(...u){const o=p.div({class:"language-typescript w-2xl *:scroll-m-21"},...u),f=_a({class:"sticky top-24 w-xs not-xl:hidden"},o);return p.div({class:"flex gap-8 items-start"},o,f)}function ba(){return q(ue({class:"language-typescript w-2xl *:scroll-m-21"},Ke))}const wa=Object.freeze(Object.defineProperty({__proto__:null,default:ba},Symbol.toStringTag,{value:"Module"})),ya=`# Derive

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
`;function ka(){return q(ue({class:"language-typescript w-2xl *:scroll-m-21"},ya))}const Pa=Object.freeze(Object.defineProperty({__proto__:null,default:ka},Symbol.toStringTag,{value:"Module"})),Sa=`# Elements

> Create your interface.

## Overview

In Savant all HTML elements are created with their respective tag functions which create and return the pure DOM node:

\`\`\`typescript
const button: HTMLButtonElement = html.button()
\`\`\`

These tag functions allow passing any props to the element via the first object:

\`\`\`typescript
const button = html.button({ name: "Demo Button", style: "color: red;" })
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
    placeholder: "Enter username..."
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
function [element](propsOrChild: ElementProps<Element> | ChildDom, ...restChildren: ChildDom[]): [element]
\`\`\`

_Creates a DOM element of the type called with the given props and/or children_.

## Notes

### Leniency in element props

Due to the suboptimal typing of the HTML API, Savant must force-leniency for element props typing, but it still includes the official type in the definition to assist you in writing code. For example, the typing for and SVG's \`viewBox\` is \`PropValueOrDerived<Primitive | SVGAnimatedRect>\`, because it must allow you to use a string like HTML itself does.

### Congruent patterns

In many places, such as element props and children, providing a \`State\` directly is essentially identical to providing \`() => state.val\`, that is:

\`\`\`typescript
const username = state("Oscar")

html.span(username) ~= html.span(() => username.val)

html.span("Username: ", username) ~= html.span(() => \`Username: \${username.val}\`)

html.span({ name: username }) ~= html.span({ name: () => username.val })
\`\`\`

Generally, the only differences are a slight reduction in memory usage by avoiding constructing more arrow functions, and a slight increase in the scope of the derived effect.
`;function Ca(){return q(ue({class:"language-typescript w-2xl *:scroll-m-21"},Sa))}const ja=Object.freeze(Object.defineProperty({__proto__:null,default:Ca},Symbol.toStringTag,{value:"Module"}));function Ma(){const u=F(`<div>
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
</div>`),o=p.textarea({value:u,oninput:f=>u.val=f.target.value,class:"variant-soft-outline w-full h-64"});return q(p.h1("Converter"),p.blockquote(p.p("Create Savant code from HTML.")),p.h2("Overview"),o,R({content:"Tags"},()=>V({language:"typescript"})),R({content:"Components"},()=>"None"),R({content:"Code"},()=>V({language:"typescript"})))}const za=Object.freeze(Object.defineProperty({__proto__:null,default:Ma},Symbol.toStringTag,{value:"Module"})),$a=`# Router

> Manage site navigation.
`;function Ea(){return q(ue({class:"language-typescript"},$a))}const Aa=Object.freeze(Object.defineProperty({__proto__:null,default:Ea},Symbol.toStringTag,{value:"Module"}));function Ta(){const u=F("variant-filled"),o=F("mood-accent");return q(p.h1("Badge"),p.blockquote("Delivers small but important pieces of information."),p.h2("Design"),p.p("Badges are designed to be a small, unobtrusive elements that convey important information concisely. It is typically used to highlight new or unread items, notifications, or status updates."),p.p("Badges use a smaller font size and padding to make them the same height as standard text, ensuring it fits seamlessly into layouts."),p.p("Badges color the text slightly based on mood to indicate they are not interactive, differentiating them from small buttons which instead use the standard foreground text color."),p.h2("Demo"),p.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},p.div({class:"p-8 h-48 flex items-center"},Ue({class:()=>`${u.val} ${o.val}`},"Demo Badge")),p.div({class:"flex flex-wrap gap-4 justify-center"},R({content:"Variant",class:"items-center"},K({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:u,class:"variant-outline w-48"})),R({content:"Mood",class:"items-center"},K({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:o,class:"variant-outline w-48"})))),()=>V({language:"ts"},`import { Badge } from "savant/ui"

Badge(
    { class: "${u.val} ${o.val}" },
    "Demo Badge",
)`),p.h2("Signature"),V({language:"ts"},`function Badge(
    props: HTMLElementProps,
    ...children: ChildDom[]
): HTMLElement`))}const Oa=Object.freeze(Object.defineProperty({__proto__:null,default:Ta},Symbol.toStringTag,{value:"Module"}));function La(){const u=F("variant-filled"),o=F("mood-accent"),f=F([]);return q(p.h1("Button"),p.blockquote("Performs some action on user click."),p.h2("Design"),p.p("Button components are used when a specific, clear and manual action needs to be performed by the user.."),p.h2("Demo"),p.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},p.div({class:"p-8 h-48 flex items-center"},re({class:()=>`${[u.val,o.val,...f.val].join(" ")}`},"Demo Button")),p.div({class:"flex flex-wrap gap-4 justify-center"},R({content:"Variant",class:"items-center"},K({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:u,class:"variant-outline w-48"})),R({content:"Mood",class:"items-center"},K({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:o,class:"variant-outline w-48"})),R({content:"Extras",class:"items-center"},K({options:[{value:"transition"},{value:"hover:raised"},{value:"active:lowered"}],value:f,class:"variant-outline w-48"})))),()=>V({language:"ts"},`import { Button } from "savant/ui"

Button(
    { class: "${[u.val,o.val,...f.val].join(" ")}" },
    "Demo Button",
)`),p.h2("Signature"),V({language:"ts"},`function Button(
    props: HTMLButtonProps,
    ...children: ChildDom[]
): HTMLButtonElement`))}const Fa=Object.freeze(Object.defineProperty({__proto__:null,default:La},Symbol.toStringTag,{value:"Module"}));function Ba(){const u=F("variant-soft-outline"),o=F("mood-none");return q(p.h1("Checkbox"),p.blockquote("Offers clear binary choices."),p.h2("Demo"),p.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},p.div({class:"p-8 h-48 flex items-center"},Te({class:()=>`w-48 ${u.val} ${o.val}`},"Demo Checkbox")),p.div({class:"flex flex-wrap gap-4 justify-center"},R({content:"Variant",class:"items-center"},K({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:u,class:"variant-outline w-48"})),R({content:"Mood",class:"items-center"},K({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:o,class:"variant-outline w-48"})))),()=>V({language:"ts"},`import { Checkbox } from "savant/ui"

Checkbox(
    { class: \`${u.val} ${o.val}\` },
    "Demo Checkbox",
)`),p.h2("Signature"),V({language:"ts"},`function Checkbox(
    props: {
        value: State<boolean> = state(false),
        required: boolean = false,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`))}const Ha=Object.freeze(Object.defineProperty({__proto__:null,default:Ba},Symbol.toStringTag,{value:"Module"}));function Ia(){const u=F("variant-outline"),o=F("mood-accent"),f=F(!0),r=F(50);return q(p.h1("Circular Progress Bar"),p.blockquote("Displays the progress state of a lengthy process."),p.h2("Design"),p.p("Circular Progress Bars are used to compactly provide feedback to the user on the current progress state of a lengthy process."),p.p("Circular Progress Bars default to matching the size of enclosing text flows, ensuring they fit seamlessly into layouts."),p.p("Circular Progress Bars can be given children which will be displayed within the circle. Such children should be short, typically a percentage or number. Anything longer should be placed beneath the progress bar."),p.h2("Demo"),p.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},p.div({class:"p-8 h-48 flex items-center"},ia({progress:r,indefinite:f,class:()=>`${u.val} ${o.val}`},"Loading...")),p.div({class:"flex flex-wrap gap-4 justify-center"},R({content:"Variant",class:"items-center"},K({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:u,class:"variant-outline w-48"})),R({content:"Mood",class:"items-center"},K({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:o,class:"variant-outline w-48"})),R({content:"Progress",class:"items-center"},we({value:r,min:0,max:100,class:"variant-outline w-48"})),R({content:"Indefinite",class:"items-center"},Te({value:f,class:"variant-outline w-48"},"Enabled")))),()=>V({language:"ts"},`import { CircularProgressBar } from "savant/ui"

CircularProgressBar(
    {
        progress: ${r.val},
        indefinite: ${f.val},
        class: "${u.val} ${o.val}"
    },
    "Loading...",
)`),p.h2("Signature"),V({language:"ts"},`function CircularProgressBar(
    {
        progress?: number = 50,
        indefinite?: boolean = false,

        ...restProps
    }: CircularProgressBarProps,
    ...children: ChildDom[]
): HTMLElement`))}const Ra=Object.freeze(Object.defineProperty({__proto__:null,default:Ia},Symbol.toStringTag,{value:"Module"}));function Da(){return q(p.h1("Code"),p.blockquote("Simple code syntax highlighting via ",p.a({href:"https://prismjs.com",class:"anchor"},"PrismJS"),"."),oa({class:"mood-info p",icon:"info"},ue({class:"language-typescript"},"Every code snippet in these docs uses the `Code` component.")),p.h2("Demo"),()=>V({language:"ts"},`import { Code } from "savant/ui"

Code(
    { language: "ts" },

    \`\\
import { Code } from "savant/ui"

Code(
    { language: "ts" },
    ...
)\`,
)`),p.h2("Signature"),V({language:"ts"},`function Code(
    props: { language: string, ...HTMLElementProps },
    ...children: ChildDom[]
): HTMLElement`))}const Va=Object.freeze(Object.defineProperty({__proto__:null,default:Da},Symbol.toStringTag,{value:"Module"}));function xa(){const u=F("text"),o=F("variant-soft-outline"),f=F("mood-none");return q(p.h1("Input"),p.blockquote("Direct entry of text or numbers."),p.h2("Demo"),p.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},p.div({class:"p-8 h-48 flex flex-col justify-center gap-8"},()=>we({value:F(u.val==="text"?"Example text":42),class:()=>`${o.val} ${f.val}`})),p.div({class:"flex flex-wrap gap-4 justify-center"},R({content:"Type",class:"items-center"},K({options:[{value:"text"},{value:"number"}],value:u,class:"variant-outline w-48"})),R({content:"Variant",class:"items-center"},K({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:o,class:"variant-outline w-48"})),R({content:"Mood",class:"items-center"},K({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:f,class:"variant-outline w-48"})))),()=>V({language:"ts"},`import { Input } from "savant/ui"

Input({
    value: state(${u.val==="text"?'"Example text"':42}),
    class: "${o.val} ${f.val}"
})`),p.h2("Signature"),V({language:"ts"},`function Input<T extends string | number>(
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
): HTMLElement`))}const Na=Object.freeze(Object.defineProperty({__proto__:null,default:xa},Symbol.toStringTag,{value:"Module"}));function Ua(){const u=F([U.CLICK]);return q(p.h1("Popup"),p.blockquote("Versatile dynamic content floating near its parent."),p.h2("Demo"),p.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},p.div({class:"p-8 h-48 flex justify-center flex-col gap-8 w-3xs"},re({class:"variant-filled"},"Popup Trigger",()=>Oe({trigger:u.val,class:"card glass vessel flex flex-col shadow"},"Hello! Click outside me to close."))),p.div({class:"flex flex-wrap gap-4 justify-center"},R({content:"Trigger",class:"items-center"},K({options:[{value:U.CLICK},{value:U.HOVER},{value:U.HOVER_IN},{value:U.HOVER_OUT},{value:U.FOCUS},{value:U.FOCUS_IN},{value:U.FOCUS_OUT}],value:u,class:"variant-outline w-48"})))),()=>V({language:"ts"},`import { Button, Popup } from "savant/ui"

Button(
    {
        class: "variant-filled",
    },

    "Popup Trigger",

    () =>
        Popup(
            {
                trigger: ${JSON.stringify(u.val)},
                class: "card glass vessel flex flex-col shadow",
            },

            "Hello! Click outside me to close.",
        ),
),`),p.h2("Signature"),V({language:"ts"},`function Popup(
    props: {
        visible: State<boolean> = state(false),
        direction: PopupDirection = PopupDirection.BOTTOM,
        trigger: PopupTrigger = PopupTrigger.CLICK,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`))}const qa=Object.freeze(Object.defineProperty({__proto__:null,default:Ua},Symbol.toStringTag,{value:"Module"}));function Ga(){const u=F("variant-soft-outline"),o=F("mood-none");return q(p.h1("Radio"),p.blockquote("Offers a clear and direct set of exclusive options."),p.h2("Demo"),p.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},p.div({class:"p-8 h-48 flex items-center"},ga({value:F("Option 1"),options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"}],class:()=>`w-48 ${u.val} ${o.val}`})),p.div({class:"flex flex-wrap gap-4 justify-center"},R({content:"Variant",class:"items-center"},K({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:u,class:"variant-outline w-48"})),R({content:"Mood",class:"items-center"},K({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:o,class:"variant-outline w-48"})))),()=>V({language:"ts"},`import { Radio } from "savant/ui"

Radio({
    value: state("Option 1"),
    options: [
        { value: "Option 1" },
        { value: "Option 2" },
        { value: "Option 3" },
    ],
    class: "${u.val} ${o.val}",
})`),p.h2("Signature"),V({language:"ts"},`function Radio<T>(
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
}`))}const Wa=Object.freeze(Object.defineProperty({__proto__:null,default:Ga},Symbol.toStringTag,{value:"Module"})),le={SINGLE:"single",MULTICHIPS:"multichips"};function Za(){const u=F(le.SINGLE),o=F("variant-soft-outline"),f=F("mood-none");return q(p.h1("Select"),p.blockquote("Enables compact selection of one or more options."),p.h2("Demo"),p.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},p.div({class:"p-8 flex flex-col justify-center gap-8 w-3xs h-48"},()=>K({value:u.val===le.SINGLE?F("Option 1"):F(["Option 1","Option 2"]),options:[{value:"Option 1"},{value:"Option 2",disabled:!0},{value:"Option 3"},{value:"Option 4"}],useChips:u.val===le.MULTICHIPS,class:()=>`${o.val} ${f.val}`})),p.div({class:"flex flex-wrap gap-4 justify-center"},R({content:"Type",class:"items-center"},K({options:[{value:"single"},{value:"multi"},{value:"multichips"}],value:u,class:"variant-outline w-48"})),R({content:"Variant",class:"items-center"},K({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:o,class:"variant-outline w-48"})),R({content:"Mood",class:"items-center"},K({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:f,class:"variant-outline w-48"})))),()=>V({language:"ts"},`import { Select } from "savant/ui"

Select({
    value: state(${u.val===le.SINGLE?'"Option 1"':'["Option 1", "Option 2"])'}),
    options: [
        { value: "Option 1" },
        { value: "Option 2", disabled: true },
        { value: "Option 3" },
        { value: "Option 4" },
    ],${u.val===le.MULTICHIPS?`
    useChips: true,`:""}
    class: "${o.val} ${f.val}",
})`),p.h2("Signature"),V({language:"ts"},`function Select<T>(
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
}`))}const Ka=Object.freeze(Object.defineProperty({__proto__:null,default:Za},Symbol.toStringTag,{value:"Module"}));function Ja(){return q(p.h1("Tooltip"),p.blockquote("Provides concise contextual extra information."),p.h2("Demo"),p.div({class:"card vessel flex flex-col items-center gap-4"},p.div({class:"p-8 flex flex-col gap-8 w-3xs h-48 justify-center"},re({class:"variant-base text-accent font-bold"},"Tooltip (Hover Me)",ze({direction:"top",class:"left-1/2 -translate-x-1/2"},"Demo Tooltip")))),()=>V({language:"ts"},`import { Button, Tooltip } from "savant/ui"

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
)`),p.h2("Signature"),V({language:"ts"},`function Tooltip(
    props: {
        direction: PopupDirection = PopupDirection.BOTTOM,
        trigger: PopupTrigger = PopupTrigger.CLICK,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`))}const Xa=Object.freeze(Object.defineProperty({__proto__:null,default:Ja},Symbol.toStringTag,{value:"Module"}));function Qa(){const u=F(""),o=F(""),f=F(!1),r=F(!1),h=F(!1);return ca({name:"Sign In",class:"flex flex-col gap-4"},p.span({class:"text-xl font-bold"},"Sign In"),R({content:"Username"},we({type:"username",value:u,placeholder:"Enter username...",required:!0,lead:Ce("person"),class:"variant-outline"})),R({content:p.span({class:"flex flex-1 justify-between items-center"},"Password",re({type:"button",class:"mood-accent text-mood"},"Forgot?"))},we({type:()=>r.val?"text":"password",value:o,placeholder:"Enter password...",required:!0,lead:Ce("key"),trail:re({onclick:()=>r.val=!r.val},Ce({class:()=>`transition ${r.val?"":"text-foreground-weak"}`},()=>r.val?"visibility":"visibility_off")),onValidityChanged:S=>h.val=S,class:"variant-outline"})),Te({value:f,class:"variant-outline"},p.span({class:"text-mini text-mood-weak"},"Remember Password")),p.div({class:"flex gap-4 justify-end"},re({type:"button",class:"variant-base hover:variant-soft"},"Cancel"),re({type:"button",class:"variant-filled mood-accent"},"Sign In")))}function Ya(){return q(p.h1("Sign In"),p.blockquote("Example Sign In component."),p.h2("Demo"),p.div({class:"card vessel bg-zebra zebra-opacity-20 flex flex-col items-center gap-4"},p.div({class:"p-8 card vessel bg-background flex items-center"},Qa())),p.h2("Code"),V({language:"typescript"},`function SignIn() {
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
}`))}const en=Object.freeze(Object.defineProperty({__proto__:null,default:Ya},Symbol.toStringTag,{value:"Module"})),an="/Savant/assets/logo-BRWjpkZq.svg";function nn(){const u="flex gap-4 items-center";return p.header({name:"Header",class:"bg-background-translucent fixed top-0 flex w-full justify-between gap-4 px-6 py-2 glass border-b border-surface-500/50 z-10"},p["left-content"]({class:u},p.img({src:an,class:"size-12 -m-2 not-dark:brightness-0"}),p.span({class:"text-xl font-bold"},"Savant"),Ue({class:"cursor-help variant-filled mood-info rounded-full px-1 py-0.5"},p.i("construction"),ze({class:"mood-info"},"Savant is still under construction"))),p["right-content"]({class:u},p.a({name:"GitHub",class:"variant-base !rounded-full **:fill-current hover:variant-soft text-lg !p-2",href:"https://github.com/OscarCookeAbbott/Savant",target:"_blank"},ne.svg({viewBox:"0 0 1024 1024",class:"size-[1em]"},ne.path({transform:"scale(64)",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"})),ze({class:"right-0"},"Savant GitHub"))))}const qe=F(""),Le=F(window.location.pathname),Fe=F(window.location.hash),De=F({}),Ve=F({}),rn="/",dn=()=>Le.val.slice(rn.length-1)+Fe.val,un=(u,{replace:o}={replace:!1})=>{const f=`${qe.val}${u}`;o?window.history.replaceState({},"",f):window.history.pushState({},"",f),Le.val=f.split("#")[0],Fe.val=f.split("#").length>1?"#"+f.split("#")[1]:""};function tn({replace:u=!1,disabled:o=!1,onclick:f,href:r,class:h,...S},...E){const M=J(h);return p.a({href:r,onclick(T){T.preventDefault();const O=aa(r);o||O===void 0||(un(String(O),{replace:u}),typeof f=="function"&&f.call(this,T))},tabIndex:0,class:()=>`not-disabled:focus-visible:focus-ring ${M.val}`,...S},...E)}const sn=/:([^\\d|^/]([^/]+)?)/;let je;function on({routes:u,basename:o}){const f=p.div({name:"Savant Router",style:"display: contents;"}),r=M=>{if(!M)return"";for(M.startsWith("/")||(M="/"+M);M!=="/"&&M.endsWith("/");)M=M.slice(0,M.length-1);return M=decodeURI(M),M},h=(M,T)=>{M=r(M),T=r(T);const O=M.split("/"),I={};let B=null;for(const D of u){const X=r(T+D.path).split("/");if(X.length!==O.length)continue;let m=!0;for(let g=0;g<X.length;g++){const w=X[g],k=O[g];if(sn.test(w))I[decodeURIComponent(w.slice(1))]=decodeURIComponent(k);else if(k!==w){m=!1;break}}if(m){B=D;break}}return B||(B=u.find(D=>D.path==="*")||null),{route:B,params:I}},S=M=>{if(M.startsWith("?")&&(M=M.slice(1).trim()),!M)return{};const T={},O=M.split("&");for(const I of O){const[B,D]=I.split("=");T[decodeURIComponent(B)]=decodeURIComponent(D)}return T},E=()=>{const{route:M,params:T}=h(window.location.pathname+window.location.hash,o||"");if(!M){je=void 0,f.replaceChildren(),ce(f,p.div("Could not find route"));return}if(M===je){Ve.val=S(window.location.search),De.val=T;return}je=M,Ve.rawVal=S(window.location.search),De.rawVal=T,f.replaceChildren(),ce(f,M.dom)};return window.onpopstate=E,ae(()=>{const M=Le.val,T=Fe.val;(M||T)&&setTimeout(()=>{E()})}),ae(()=>{qe.val=r(o||"")}),f}function cn({options:u,class:o}){const f=ae(()=>decodeURI(dn()));return p.div({name:"Navbar",class:`p-6 flex flex-col overflow-y-auto fixed top-12 h-[calc(100%-3rem)] left-0 bg-background border-r border-surface-500/50 ${o}`},u.map(r=>Ge(r,0,f)))}function Ge(u,o,f){var r;return[tn({href:u.path,disabled:u.path===void 0,onclick:()=>{window.scrollTo({top:0,left:0})},"data-selected":ee(()=>f.val===u.path||void 0),"data-group":ee(()=>o===0&&u.children||void 0),"data-indented":ee(()=>o!==0||void 0),style:`--indent: ${o}rem;`,class:"relative flex gap-4 group text-mood-weak data-selected:text-mood data-group:font-semibold data-group:not-first:mt-6 data-group:mb-1 not-data-selected:hover:text-foreground data-selected:mood-accent data-selected:z-10"},p.span({name:"Divider",class:"absolute h-full w-px left-0 bg-current/50 group-data-selected:bg-current not-group-data-indented:hidden group-hover:w-1 group-data-selected:w-1 transition-all"}),p.span({name:"Title",class:"group-data-indented:ml-(--indent) justify-start group-data-selected:font-semibold flex-1 py-0.5 z-1 transition-all"},u.name)),(r=u.children)==null?void 0:r.map(h=>Ge(h,o+1,f))]}const ln=`# Savant

> The simple, smart framework

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
`;function fn(){return q(ue({class:"language-typescript w-2xl *:scroll-m-21"},ln))}const pn=`# Savant Core

> All the basics for functional, declarative web apps.
`;function hn(){return q(ue({class:"language-typescript"},pn))}const mn=`# Savant Routing

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
`;function gn(){return q(ue({class:"language-typescript"},mn))}const vn=`# Savant UI

> Make great design effortless.
`;function _n(){return q(ue({class:"language-typescript"},vn))}const bn=Object.assign({"./src/routes/1 core/1 State/index.ts":wa,"./src/routes/1 core/2 Derive/index.ts":Pa,"./src/routes/1 core/3 Elements/index.ts":ja,"./src/routes/1 core/4 Converter/index.ts":za}),wn=Object.assign({"./src/routes/2 routing/1 Router/index.ts":Aa}),yn=Object.assign({"./src/routes/3 ui/Badge/index.ts":Oa,"./src/routes/3 ui/Button/index.ts":Fa,"./src/routes/3 ui/Checkbox/index.ts":Ha,"./src/routes/3 ui/Circular Progress Bar/index.ts":Ra,"./src/routes/3 ui/Code/index.ts":Va,"./src/routes/3 ui/Input/index.ts":Na,"./src/routes/3 ui/Popup/index.ts":qa,"./src/routes/3 ui/Radio/index.ts":Wa,"./src/routes/3 ui/Select/index.ts":Ka,"./src/routes/3 ui/Tooltip/index.ts":Xa}),kn=Object.assign({"./src/routes/examples/Sign In/index.ts":en}),me=u=>Object.entries(u).map(([o,f])=>{const r=o.replace("./routes","").split("/")[4].replace(/^\s*\d*\s*/,"");return{name:r,path:"/#"+o.replace("./routes","").split("/").slice(1,-2).concat(r).join("/"),dom:f.default}}),We=[{name:"Introduction",path:"/",dom:fn},{name:"Core",path:"/#/core",dom:hn,children:me(bn)},{name:"Routing",path:"/#/routing",dom:gn,children:me(wn)},{name:"Savant UI",path:"/#/ui",dom:_n,children:me(yn)},{name:"Examples",children:me(kn)}],Pn=We.flatMap(u=>[...u.path?[u]:[],...u.children??[]]);function Sn(){return p.div({name:"App",class:"flex flex-col relative size-full"},nn(),p.div({class:"flex flex-1"},cn({options:We,class:"min-w-64 not-lg:hidden"}),p.div({class:"lg:ml-64 overflow-clip flex flex-1 justify-center"},p.div({class:"flex flex-col px-8 pt-24 pb-16 gap-4"},on({basename:"/Savant/".slice(0,-1),routes:Pn})))))}ce(document.body,Sn())});export default Cn();
