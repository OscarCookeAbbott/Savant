var Ze=(t,o)=>()=>(o||t((o={exports:{}}).exports,o),o.exports);var Sr=Ze((jr,_e)=>{(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))n(h);new MutationObserver(h=>{for(const P of h)if(P.type==="childList")for(const T of P.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&n(T)}).observe(document,{childList:!0,subtree:!0});function l(h){const P={};return h.integrity&&(P.integrity=h.integrity),h.referrerPolicy&&(P.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?P.credentials="include":h.crossOrigin==="anonymous"?P.credentials="omit":P.credentials="same-origin",P}function n(h){if(h.ep)return;h.ep=!0;const P=l(h);fetch(h.href,P)}})();const Ke=`# State

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
`;var Je=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},O=function(t){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,l=0,n={},h={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function m(g){return g instanceof P?new P(g.type,m(g.content),g.alias):Array.isArray(g)?g.map(m):g.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++l}),m.__id},clone:function m(g,w){var k,S;switch(w=w||{},h.util.type(g)){case"Object":if(S=h.util.objId(g),w[S])return w[S];for(var $ in k={},w[S]=k,g)g.hasOwnProperty($)&&(k[$]=m(g[$],w));return k;case"Array":return S=h.util.objId(g),w[S]?w[S]:(k=[],w[S]=k,g.forEach(function(e,r){k[r]=m(e,w)}),k);default:return g}},getLanguage:function(m){for(;m;){var g=o.exec(m.className);if(g)return g[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,g){m.className=m.className.replace(RegExp(o,"gi"),""),m.classList.add("language-"+g)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(k){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(k.stack)||[])[1];if(m){var g=document.getElementsByTagName("script");for(var w in g)if(g[w].src==m)return g[w]}return null}},isActive:function(m,g,w){for(var k="no-"+g;m;){var S=m.classList;if(S.contains(g))return!0;if(S.contains(k))return!1;m=m.parentElement}return!!w}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(m,g){var w=h.util.clone(h.languages[m]);for(var k in g)w[k]=g[k];return w},insertBefore:function(m,g,w,k){var S=(k=k||h.languages)[m],$={};for(var e in S)if(S.hasOwnProperty(e)){if(e==g)for(var r in w)w.hasOwnProperty(r)&&($[r]=w[r]);w.hasOwnProperty(e)||($[e]=S[e])}var a=k[m];return k[m]=$,h.languages.DFS(h.languages,function(d,i){i===a&&d!=m&&(this[d]=$)}),$},DFS:function m(g,w,k,S){S=S||{};var $=h.util.objId;for(var e in g)if(g.hasOwnProperty(e)){w.call(g,e,g[e],k||e);var r=g[e],a=h.util.type(r);a!=="Object"||S[$(r)]?a!=="Array"||S[$(r)]||(S[$(r)]=!0,m(r,w,e,S)):(S[$(r)]=!0,m(r,w,null,S))}}},plugins:{},highlightAll:function(m,g){h.highlightAllUnder(document,m,g)},highlightAllUnder:function(m,g,w){var k={callback:w,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};h.hooks.run("before-highlightall",k),k.elements=Array.prototype.slice.apply(k.container.querySelectorAll(k.selector)),h.hooks.run("before-all-elements-highlight",k);for(var S,$=0;S=k.elements[$++];)h.highlightElement(S,g===!0,k.callback)},highlightElement:function(m,g,w){var k=h.util.getLanguage(m),S=h.languages[k];h.util.setLanguage(m,k);var $=m.parentElement;$&&$.nodeName.toLowerCase()==="pre"&&h.util.setLanguage($,k);var e={element:m,language:k,grammar:S,code:m.textContent};function r(d){e.highlightedCode=d,h.hooks.run("before-insert",e),e.element.innerHTML=e.highlightedCode,h.hooks.run("after-highlight",e),h.hooks.run("complete",e),w&&w.call(e.element)}if(h.hooks.run("before-sanity-check",e),($=e.element.parentElement)&&$.nodeName.toLowerCase()==="pre"&&!$.hasAttribute("tabindex")&&$.setAttribute("tabindex","0"),!e.code)return h.hooks.run("complete",e),void(w&&w.call(e.element));if(h.hooks.run("before-highlight",e),e.grammar)if(g&&t.Worker){var a=new Worker(h.filename);a.onmessage=function(d){r(d.data)},a.postMessage(JSON.stringify({language:e.language,code:e.code,immediateClose:!0}))}else r(h.highlight(e.code,e.grammar,e.language));else r(h.util.encode(e.code))},highlight:function(m,g,w){var k={code:m,grammar:g,language:w};if(h.hooks.run("before-tokenize",k),!k.grammar)throw new Error('The language "'+k.language+'" has no grammar.');return k.tokens=h.tokenize(k.code,k.grammar),h.hooks.run("after-tokenize",k),P.stringify(h.util.encode(k.tokens),k.language)},tokenize:function(m,g){var w=g.rest;if(w){for(var k in w)g[k]=w[k];delete g.rest}var S=new z;return F(S,S.head,m),M(m,S,g,S.head,0),function($){for(var e=[],r=$.head.next;r!==$.tail;)e.push(r.value),r=r.next;return e}(S)},hooks:{all:{},add:function(m,g){var w=h.hooks.all;w[m]=w[m]||[],w[m].push(g)},run:function(m,g){var w=h.hooks.all[m];if(w&&w.length)for(var k,S=0;k=w[S++];)k(g)}},Token:P};function P(m,g,w,k){this.type=m,this.content=g,this.alias=w,this.length=0|(k||"").length}function T(m,g,w,k){m.lastIndex=g;var S=m.exec(w);if(S&&k&&S[1]){var $=S[1].length;S.index+=$,S[0]=S[0].slice($)}return S}function M(m,g,w,k,S,$){for(var e in w)if(w.hasOwnProperty(e)&&w[e]){var r=w[e];r=Array.isArray(r)?r:[r];for(var a=0;a<r.length;++a){if($&&$.cause==e+","+a)return;var d=r[a],i=d.inside,c=!!d.lookbehind,s=!!d.greedy,f=d.alias;if(s&&!d.pattern.global){var C=d.pattern.toString().match(/[imsuy]*$/)[0];d.pattern=RegExp(d.pattern.source,C+"g")}for(var y=d.pattern||d,v=k.next,b=S;v!==g.tail&&!($&&b>=$.reach);b+=v.value.length,v=v.next){var u=v.value;if(g.length>m.length)return;if(!(u instanceof P)){var _,j=1;if(s){if(!(_=T(y,b,m,c))||_.index>=m.length)break;var E=_.index,I=_.index+_[0].length,A=b;for(A+=v.value.length;E>=A;)A+=(v=v.next).value.length;if(b=A-=v.value.length,v.value instanceof P)continue;for(var x=v;x!==g.tail&&(A<I||typeof x.value=="string");x=x.next)j++,A+=x.value.length;j--,u=m.slice(b,A),_.index-=b}else if(!(_=T(y,0,u,c)))continue;E=_.index;var G=_[0],X=u.slice(0,E),N=u.slice(E+G.length),W=b+u.length;$&&W>$.reach&&($.reach=W);var Z=v.prev;if(X&&(Z=F(g,Z,X),b+=X.length),H(g,Z,j),v=F(g,Z,new P(e,i?h.tokenize(G,i):G,f,G)),N&&F(g,v,N),j>1){var Y={cause:e+","+a,reach:W};M(m,g,w,v.prev,b,Y),$&&Y.reach>$.reach&&($.reach=Y.reach)}}}}}}function z(){var m={value:null,prev:null,next:null},g={value:null,prev:m,next:null};m.next=g,this.head=m,this.tail=g,this.length=0}function F(m,g,w){var k=g.next,S={value:w,prev:g,next:k};return g.next=S,k.prev=S,m.length++,S}function H(m,g,w){for(var k=g.next,S=0;S<w&&k!==m.tail;S++)k=k.next;g.next=k,k.prev=g,m.length-=S}if(t.Prism=h,P.stringify=function m(g,w){if(typeof g=="string")return g;if(Array.isArray(g)){var k="";return g.forEach(function(a){k+=m(a,w)}),k}var S={type:g.type,content:m(g.content,w),tag:"span",classes:["token",g.type],attributes:{},language:w},$=g.alias;$&&(Array.isArray($)?Array.prototype.push.apply(S.classes,$):S.classes.push($)),h.hooks.run("wrap",S);var e="";for(var r in S.attributes)e+=" "+r+'="'+(S.attributes[r]||"").replace(/"/g,"&quot;")+'"';return"<"+S.tag+' class="'+S.classes.join(" ")+'"'+e+">"+S.content+"</"+S.tag+">"},!t.document)return t.addEventListener&&(h.disableWorkerMessageHandler||t.addEventListener("message",function(m){var g=JSON.parse(m.data),w=g.language,k=g.code,S=g.immediateClose;t.postMessage(h.highlight(k,h.languages[w],w)),S&&t.close()},!1)),h;var B=h.util.currentScript();function D(){h.manual||h.highlightAll()}if(B&&(h.filename=B.src,B.hasAttribute("data-manual")&&(h.manual=!0)),!h.manual){var J=document.readyState;J==="loading"||J==="interactive"&&B&&B.defer?document.addEventListener("DOMContentLoaded",D):window.requestAnimationFrame?window.requestAnimationFrame(D):window.setTimeout(D,16)}return h}(Je);typeof _e<"u"&&_e.exports&&(_e.exports=O),typeof global<"u"&&(global.Prism=O);O.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},O.languages.markup.tag.inside["attr-value"].inside.entity=O.languages.markup.entity,O.languages.markup.doctype.inside["internal-subset"].inside=O.languages.markup,O.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Object.defineProperty(O.languages.markup.tag,"addInlined",{value:function(t,o){var l={};l["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:O.languages[o]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};n["language-"+o]={pattern:/[\s\S]+/,inside:O.languages[o]};var h={};h[t]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:n},O.languages.insertBefore("markup","cdata",h)}}),Object.defineProperty(O.languages.markup.tag,"addAttribute",{value:function(t,o){O.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(`(^|["'\\s])(?:`+t+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:O.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),O.languages.html=O.languages.markup,O.languages.mathml=O.languages.markup,O.languages.svg=O.languages.markup,O.languages.xml=O.languages.extend("markup",{}),O.languages.ssml=O.languages.xml,O.languages.atom=O.languages.xml,O.languages.rss=O.languages.xml;(function(t){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+o.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var l=t.languages.markup;l&&(l.tag.addInlined("style","css"),l.tag.addAttribute("style","css"))})(O);O.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};O.languages.javascript=O.languages.extend("clike",{"class-name":[O.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),O.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,O.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:O.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:O.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:O.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:O.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:O.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),O.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:O.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),O.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),O.languages.markup&&(O.languages.markup.tag.addInlined("script","javascript"),O.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),O.languages.js=O.languages.javascript;(function(t){t.languages.typescript=t.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),t.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete t.languages.typescript.parameter,delete t.languages.typescript["literal-property"];var o=t.languages.extend("typescript",{});delete o["class-name"],t.languages.typescript["class-name"].inside=o,t.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:o}}}}),t.languages.ts=t.languages.typescript})(O);function Se(t=0){return new Promise(o=>setTimeout(o,t))}function Qe(t,o){const l=t.indexOf(o);return l===-1?t:[...t.slice(0,l),...t.slice(l+1)]}function Ye(t,o){return t.indexOf(o)===-1?t.concat(o):Qe(t,o)}function Xe(t,o){const l=new AbortController;return document.addEventListener("click",n=>{n.target instanceof Node&&(t.contains(n.target)||document.contains(n.target)&&o(n))},{signal:l.signal}),l}function ea(t,o){for(const l of o)if(l[0]===t)return l[1];throw`error: non-exhaustive patterns: ${t} not covered`}function Q(t){return typeof t=="function"?ae(t):t instanceof he?ae(()=>t.val):ae(()=>t)}function oe(t,o){const l=Array.isArray(t)?t:[t],n=Array.isArray(o)?o:[o];for(const h of n)if(l.includes(h))return!0;return!1}function aa(t){return t instanceof he?t.val:typeof t=="function"?t():t}class he{constructor(o,l){this._rawVal=o,this._oldVal=o,this._bindings=[],this._listeners=[],this._onDestroy=l}get val(){var o;return(o=re==null?void 0:re._getters)==null||o.add(this),this._rawVal}get rawVal(){return this._rawVal}get oldVal(){var o;return(o=re==null?void 0:re._getters)==null||o.add(this),this._oldVal}set val(o){var l;if((l=re==null?void 0:re._setters)==null||l.add(this),o!==this.rawVal){if(this._rawVal=o,this._bindings.length+this._listeners.length===0){this._oldVal=o;return}pe==null||pe.add(this),fe=Ne(fe,this,sa)}}set rawVal(o){if(o!==this.rawVal&&(this._rawVal=o,this._bindings.length+this._listeners.length===0)){this._oldVal=o;return}}}class xe{constructor(o){this.func=o}}const ra=1e3,na={isConnected:!0};let fe,pe,re,ue,me,Ce={};function Ne(t,o,l,n){return t||setTimeout(l,n),(t??new Set).add(o)}function ze(t,o,l){let n=re;re=o;const h=t(l);return re=n,h}function be(t){return t.filter(o=>{var l;return(l=o._dom)==null?void 0:l.isConnected})}function Te(t){me=Ne(me,t,()=>{var o;for(let l of me??[])l._bindings=be(l._bindings),l._listeners=be(l._listeners),l._bindings.length===0&&l._listeners.length===0&&((o=l._onDestroy)==null||o.call(l));me=void 0},ra)}function L(t,o){return new he(t,o)}function ee(t){return new xe(t)}function ie(t,o){const l={_getters:new Set,_setters:new Set},n={func:t,state:void 0,_dom:void 0},h=ue;ue=[];const P=ze(t,l,o),T=(P??document)instanceof Node?P:new Text(String(P));for(const M of l._getters)l._setters.has(M)||(Te(M),M._bindings.push(n));for(let M of ue)M._dom=T;return ue=h,n._dom=T}function da(t,o,l){const n={_getters:new Set,_setters:new Set};o.val=ze(t,n,o.rawVal);const h={func:t,state:o,_dom:l};h._dom||(ue?ue.push(h):h._dom=na);for(let P of n._getters)n._setters.has(P)||(Te(P),P._listeners.push(h));return o}function ae(t,o){const l={_getters:new Set,_setters:new Set},n=L(ze(t,l,void 0),o),h={func:t,state:n,_dom:void 0};h._dom||(ue?ue.push(h):h._dom=document.getRootNode().firstChild);for(let P of l._getters)l._setters.has(P)||(Te(P),P._listeners.push(h));return n}function ce(t,...o){for(const l of o.flat(1/0)){let n;l instanceof he?n=ie(()=>l.val):typeof l=="function"?n=ie(l):l instanceof Node?n=l:["boolean","string","number","bigint"].includes(typeof l)&&(n=String(l)),n!=null&&t.append(n)}return t}function ta(t,o,l,...n){var F;const h=Object.getPrototypeOf(l)===Object.prototype,[{is:P,...T},...M]=h?[l,n]:[{},[l,...n]],z=t?document.createElementNS(t,o,{is:P}):document.createElement(o,{is:P});for(let[H,B]of Object.entries(T)){const D=w=>w?Object.getOwnPropertyDescriptor(w,H)??D(Object.getPrototypeOf(w)):void 0,J=`${o},${H}`,m=Ce[J]??(Ce[J]=(F=D(Object.getPrototypeOf(z)))==null?void 0:F.set),g=H.startsWith("on")?(w,k)=>{const S=H.slice(2);k&&z.removeEventListener(S,k),z.addEventListener(S,w)}:(m==null?void 0:m.bind(z))??z.setAttribute.bind(z,H);if(!H.startsWith("on")&&typeof B=="function"){B=ae(B),ie(()=>(g(B.val,B._oldVal),z));continue}if(typeof B=="object"&&B instanceof he){ie(()=>(g(B.val,B._oldVal),z));continue}if(typeof B=="object"&&B instanceof xe){const w=ae(B.func);ie(()=>(w.val?g(w.val,w._oldVal):z.removeAttribute(H),z));continue}g(B)}return ce(z,M)}function ua(t,o){if(!o)return t.remove();if(o!==t)return t.replaceWith(o)}function sa(){let t=0,o=[...fe??[]].filter(n=>n.rawVal!==n._oldVal);do{pe=new Set;const n=new Set(o.flatMap(h=>h._listeners=be(h._listeners)));for(let h of n)da(h.func,h.state,h._dom),h._dom=void 0}while(++t<100&&(o=[...pe??[]]).length>0);const l=[...fe??[]].filter(n=>n.rawVal!==n._oldVal);fe=void 0;for(let n of new Set(l.flatMap(h=>h._bindings=be(h._bindings))))ua(n._dom,ie(n.func,n._dom)),n._dom=void 0;for(let n of l)n._oldVal=n.rawVal}function $e(t){return{get:(o,l)=>ta.bind(void 0,t,l)}}const p=new Proxy({},$e()),ne=new Proxy({},$e("http://www.w3.org/2000/svg"));new Proxy({},$e("http://www.w3.org/1998/Math/MathML"));function Ue({class:t,...o},...l){const n=Q(t);return p.span({class:()=>`badge flex items-center gap-1 select-none ${n.val}`,...o},l)}function de({class:t,...o},...l){const n=Q(t);return p.button({tabIndex:0,class:()=>`button flex items-center gap-2 select-none ${n.val}`,...o},l)}function oa({icon:t,class:o,...l},...n){const h=Q(o);return p.div({class:()=>`flex items-center variant-soft-outline text-mood-weak gap-2 ${h.val}`,...l},p.i({class:"text-mood"},t),n)}function Oe({value:t=L(!1),required:o,class:l,...n},...h){const P=Q(l);return p.div({name:"Checkbox",onclick:()=>t.val=!t.val,"data-selected":ee(()=>t.val||void 0),class:()=>{var T;return`flex cursor-pointer justify-between items-center gap-2 select-none group ${(T=P.val)==null?void 0:T.split(" ").filter(M=>!M.includes("variant")).join(" ")}`},...n},h,de({role:"checkbox",type:"button",tabIndex:0,class:()=>{var T;return`button size-5 !rounded-md aspect-square focus-visible:mood-accent !p-0.5 group-has-invalid:mood-critical ${(T=P.val)==null?void 0:T.split(" ").filter(M=>M.includes("variant")).join(" ")}`}},ne.svg({viewBox:"0 0 100 100",class:"size-4 not-group-data-selected:hidden",style:"stroke-linecap:round; stroke-linejoin:round;"},ne.path({d:"M20,60L40,80L80,20",class:"stroke-current stroke-[10] fill-none"}))),p.input({type:"checkbox",checked:t,required:o,hidden:!0}))}function ia({progress:t=50,indefinite:o=!1,class:l,...n},...h){const P=Q(l),T=Q(t),M=Q(o);return p.div({name:"Circular Progress Bar",style:"--progress-bar-stroke-width: 2px",class:()=>`group inline-block relative min-w-[1em] min-h-[1em] rounded-full [.variant-outline]:ring-[length:var(--progress-bar-stroke-width)] [.variant-soft-outline]:ring-[length:var(--progress-bar-stroke-width)] !p-0 ${P.val}`,...n},ne.svg({style:"padding: calc(var(--progress-bar-stroke-width) * 0.5)",class:"absolute inset-0 -rotate-90",viewBox:"0 0 36 36"},ne.circle({style:()=>`cx: 50%; cy: 50%; r: 50%; stroke-dasharray: calc(1% * pi * ${T.val}) calc(1% * pi * (100 - ${T.val}));`,class:()=>`origin-center fill-none stroke-current stroke-[length:var(--progress-bar-stroke-width)] not-group-[.variant-filled]:text-mood-500 ${M.val?"animate-spin":""}`,"stroke-linecap":"round"})),p.span({class:"relative text-xs text-center m-[calc(2_*_var(--progress-bar-stroke-width))] aspect-square flex items-center justify-center h-full"},h))}function V({language:t,class:o,...l},...n){const h=Q(o),P=p.pre({class:h.val,...l},p.code({class:`language-${t}`},n));return Prism.highlightAllUnder(P),P}function ca({class:t,...o},...l){const n=Q(t);return p.form({class:()=>`flex flex-col gap-4 ${n.val}`,...o},l)}const je=(t,...o)=>p.i(t,o);function R({content:t,class:o,...l},...n){const h=Q(o);return p.div({name:"Label",class:()=>`flex flex-col gap-1 ${h.val}`},p.label({class:"flex items-center text-mini text-mood-weak",...l},t),n)}function la(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ve={exports:{}},fa=ve.exports,Re;function pa(){return Re||(Re=1,function(t){(function(){function o(e){var r={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",type:"string"},rawPrefixHeaderId:{defaultValue:!1,describe:'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',type:"boolean"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},rawHeaderId:{defaultValue:!1,describe:`Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,describe:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,describe:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,describe:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,describe:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,describe:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",describe:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,describe:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,describe:"Open all links in new windows",type:"boolean"},backslashEscapesHTMLTags:{defaultValue:!1,describe:"Support for HTML Tag escaping. ex: <div>foo</div>",type:"boolean"},emoji:{defaultValue:!1,describe:"Enable emoji support. Ex: `this is a :smile: emoji`",type:"boolean"},underline:{defaultValue:!1,describe:"Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",type:"boolean"},ellipsis:{defaultValue:!0,describe:"Replaces three dots with the ellipsis unicode character",type:"boolean"},completeHTMLDocument:{defaultValue:!1,describe:"Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",type:"boolean"},metadata:{defaultValue:!1,describe:"Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",type:"boolean"},splitAdjacentBlockquotes:{defaultValue:!1,describe:"Split adjacent blockquote blocks",type:"boolean"}};if(e===!1)return JSON.parse(JSON.stringify(r));var a={};for(var d in r)r.hasOwnProperty(d)&&(a[d]=r[d].defaultValue);return a}function l(){var e=o(!0),r={};for(var a in e)e.hasOwnProperty(a)&&(r[a]=!0);return r}var n={},h={},P={},T=o(!0),M="vanilla",z={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0,backslashEscapesHTMLTags:!0,emoji:!0,splitAdjacentBlockquotes:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:o(!0),allOn:l()};n.helper={},n.extensions={},n.setOption=function(e,r){return T[e]=r,this},n.getOption=function(e){return T[e]},n.getOptions=function(){return T},n.resetOptions=function(){T=o(!0)},n.setFlavor=function(e){if(!z.hasOwnProperty(e))throw Error(e+" flavor was not found");n.resetOptions();var r=z[e];M=e;for(var a in r)r.hasOwnProperty(a)&&(T[a]=r[a])},n.getFlavor=function(){return M},n.getFlavorOptions=function(e){if(z.hasOwnProperty(e))return z[e]},n.getDefaultOptions=function(e){return o(e)},n.subParser=function(e,r){if(n.helper.isString(e))if(typeof r<"u")h[e]=r;else{if(h.hasOwnProperty(e))return h[e];throw Error("SubParser named "+e+" not registered!")}},n.extension=function(e,r){if(!n.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=n.helper.stdExtName(e),n.helper.isUndefined(r)){if(!P.hasOwnProperty(e))throw Error("Extension named "+e+" is not registered!");return P[e]}else{typeof r=="function"&&(r=r()),n.helper.isArray(r)||(r=[r]);var a=F(r,e);if(a.valid)P[e]=r;else throw Error(a.error)}},n.getAllExtensions=function(){return P},n.removeExtension=function(e){delete P[e]},n.resetExtensions=function(){P={}};function F(e,r){var a=r?"Error in "+r+" extension->":"Error in unnamed extension",d={valid:!0,error:""};n.helper.isArray(e)||(e=[e]);for(var i=0;i<e.length;++i){var c=a+" sub-extension "+i+": ",s=e[i];if(typeof s!="object")return d.valid=!1,d.error=c+"must be an object, but "+typeof s+" given",d;if(!n.helper.isString(s.type))return d.valid=!1,d.error=c+'property "type" must be a string, but '+typeof s.type+" given",d;var f=s.type=s.type.toLowerCase();if(f==="language"&&(f=s.type="lang"),f==="html"&&(f=s.type="output"),f!=="lang"&&f!=="output"&&f!=="listener")return d.valid=!1,d.error=c+"type "+f+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',d;if(f==="listener"){if(n.helper.isUndefined(s.listeners))return d.valid=!1,d.error=c+'. Extensions of type "listener" must have a property called "listeners"',d}else if(n.helper.isUndefined(s.filter)&&n.helper.isUndefined(s.regex))return d.valid=!1,d.error=c+f+' extensions must define either a "regex" property or a "filter" method',d;if(s.listeners){if(typeof s.listeners!="object")return d.valid=!1,d.error=c+'"listeners" property must be an object but '+typeof s.listeners+" given",d;for(var C in s.listeners)if(s.listeners.hasOwnProperty(C)&&typeof s.listeners[C]!="function")return d.valid=!1,d.error=c+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+C+" must be a function but "+typeof s.listeners[C]+" given",d}if(s.filter){if(typeof s.filter!="function")return d.valid=!1,d.error=c+'"filter" must be a function, but '+typeof s.filter+" given",d}else if(s.regex){if(n.helper.isString(s.regex)&&(s.regex=new RegExp(s.regex,"g")),!(s.regex instanceof RegExp))return d.valid=!1,d.error=c+'"regex" property must either be a string or a RegExp object, but '+typeof s.regex+" given",d;if(n.helper.isUndefined(s.replace))return d.valid=!1,d.error=c+'"regex" extensions must implement a replace string or function',d}}return d}n.validateExtension=function(e){var r=F(e,null);return r.valid?!0:(console.warn(r.error),!1)},n.hasOwnProperty("helper")||(n.helper={}),n.helper.isString=function(e){return typeof e=="string"||e instanceof String},n.helper.isFunction=function(e){var r={};return e&&r.toString.call(e)==="[object Function]"},n.helper.isArray=function(e){return Array.isArray(e)},n.helper.isUndefined=function(e){return typeof e>"u"},n.helper.forEach=function(e,r){if(n.helper.isUndefined(e))throw new Error("obj param is required");if(n.helper.isUndefined(r))throw new Error("callback param is required");if(!n.helper.isFunction(r))throw new Error("callback param must be a function/closure");if(typeof e.forEach=="function")e.forEach(r);else if(n.helper.isArray(e))for(var a=0;a<e.length;a++)r(e[a],a,e);else if(typeof e=="object")for(var d in e)e.hasOwnProperty(d)&&r(e[d],d,e);else throw new Error("obj does not seem to be an array or an iterable object")},n.helper.stdExtName=function(e){return e.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()};function H(e,r){var a=r.charCodeAt(0);return"¨E"+a+"E"}n.helper.escapeCharactersCallback=H,n.helper.escapeCharacters=function(e,r,a){var d="(["+r.replace(/([\[\]\\])/g,"\\$1")+"])";a&&(d="\\\\"+d);var i=new RegExp(d,"g");return e=e.replace(i,H),e},n.helper.unescapeHTMLEntities=function(e){return e.replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")};var B=function(e,r,a,d){var i=d||"",c=i.indexOf("g")>-1,s=new RegExp(r+"|"+a,"g"+i.replace(/g/g,"")),f=new RegExp(r,i.replace(/g/g,"")),C=[],y,v,b,u,_;do for(y=0;b=s.exec(e);)if(f.test(b[0]))y++||(v=s.lastIndex,u=v-b[0].length);else if(y&&!--y){_=b.index+b[0].length;var j={left:{start:u,end:v},match:{start:v,end:b.index},right:{start:b.index,end:_},wholeMatch:{start:u,end:_}};if(C.push(j),!c)return C}while(y&&(s.lastIndex=v));return C};n.helper.matchRecursiveRegExp=function(e,r,a,d){for(var i=B(e,r,a,d),c=[],s=0;s<i.length;++s)c.push([e.slice(i[s].wholeMatch.start,i[s].wholeMatch.end),e.slice(i[s].match.start,i[s].match.end),e.slice(i[s].left.start,i[s].left.end),e.slice(i[s].right.start,i[s].right.end)]);return c},n.helper.replaceRecursiveRegExp=function(e,r,a,d,i){if(!n.helper.isFunction(r)){var c=r;r=function(){return c}}var s=B(e,a,d,i),f=e,C=s.length;if(C>0){var y=[];s[0].wholeMatch.start!==0&&y.push(e.slice(0,s[0].wholeMatch.start));for(var v=0;v<C;++v)y.push(r(e.slice(s[v].wholeMatch.start,s[v].wholeMatch.end),e.slice(s[v].match.start,s[v].match.end),e.slice(s[v].left.start,s[v].left.end),e.slice(s[v].right.start,s[v].right.end))),v<C-1&&y.push(e.slice(s[v].wholeMatch.end,s[v+1].wholeMatch.start));s[C-1].wholeMatch.end<e.length&&y.push(e.slice(s[C-1].wholeMatch.end)),f=y.join("")}return f},n.helper.regexIndexOf=function(e,r,a){if(!n.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(!(r instanceof RegExp))throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";var d=e.substring(a||0).search(r);return d>=0?d+(a||0):d},n.helper.splitAtIndex=function(e,r){if(!n.helper.isString(e))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";return[e.substring(0,r),e.substring(r)]},n.helper.encodeEmailAddress=function(e){var r=[function(a){return"&#"+a.charCodeAt(0)+";"},function(a){return"&#x"+a.charCodeAt(0).toString(16)+";"},function(a){return a}];return e=e.replace(/./g,function(a){if(a==="@")a=r[Math.floor(Math.random()*2)](a);else{var d=Math.random();a=d>.9?r[2](a):d>.45?r[1](a):r[0](a)}return a}),e},n.helper.padEnd=function(r,a,d){return a=a>>0,d=String(d||" "),r.length>a?String(r):(a=a-r.length,a>d.length&&(d+=d.repeat(a/d.length)),String(r)+d.slice(0,a))},typeof console>"u"&&(console={warn:function(e){alert(e)},log:function(e){alert(e)},error:function(e){throw e}}),n.helper.regexes={asteriskDashAndColon:/([*_:~])/g},n.helper.emojis={"+1":"👍","-1":"👎",100:"💯",1234:"🔢","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉","8ball":"🎱",a:"🅰️",ab:"🆎",abc:"🔤",abcd:"🔡",accept:"🉑",aerial_tramway:"🚡",airplane:"✈️",alarm_clock:"⏰",alembic:"⚗️",alien:"👽",ambulance:"🚑",amphora:"🏺",anchor:"⚓️",angel:"👼",anger:"💢",angry:"😠",anguished:"😧",ant:"🐜",apple:"🍎",aquarius:"♒️",aries:"♈️",arrow_backward:"◀️",arrow_double_down:"⏬",arrow_double_up:"⏫",arrow_down:"⬇️",arrow_down_small:"🔽",arrow_forward:"▶️",arrow_heading_down:"⤵️",arrow_heading_up:"⤴️",arrow_left:"⬅️",arrow_lower_left:"↙️",arrow_lower_right:"↘️",arrow_right:"➡️",arrow_right_hook:"↪️",arrow_up:"⬆️",arrow_up_down:"↕️",arrow_up_small:"🔼",arrow_upper_left:"↖️",arrow_upper_right:"↗️",arrows_clockwise:"🔃",arrows_counterclockwise:"🔄",art:"🎨",articulated_lorry:"🚛",artificial_satellite:"🛰",astonished:"😲",athletic_shoe:"👟",atm:"🏧",atom_symbol:"⚛️",avocado:"🥑",b:"🅱️",baby:"👶",baby_bottle:"🍼",baby_chick:"🐤",baby_symbol:"🚼",back:"🔙",bacon:"🥓",badminton:"🏸",baggage_claim:"🛄",baguette_bread:"🥖",balance_scale:"⚖️",balloon:"🎈",ballot_box:"🗳",ballot_box_with_check:"☑️",bamboo:"🎍",banana:"🍌",bangbang:"‼️",bank:"🏦",bar_chart:"📊",barber:"💈",baseball:"⚾️",basketball:"🏀",basketball_man:"⛹️",basketball_woman:"⛹️&zwj;♀️",bat:"🦇",bath:"🛀",bathtub:"🛁",battery:"🔋",beach_umbrella:"🏖",bear:"🐻",bed:"🛏",bee:"🐝",beer:"🍺",beers:"🍻",beetle:"🐞",beginner:"🔰",bell:"🔔",bellhop_bell:"🛎",bento:"🍱",biking_man:"🚴",bike:"🚲",biking_woman:"🚴&zwj;♀️",bikini:"👙",biohazard:"☣️",bird:"🐦",birthday:"🎂",black_circle:"⚫️",black_flag:"🏴",black_heart:"🖤",black_joker:"🃏",black_large_square:"⬛️",black_medium_small_square:"◾️",black_medium_square:"◼️",black_nib:"✒️",black_small_square:"▪️",black_square_button:"🔲",blonde_man:"👱",blonde_woman:"👱&zwj;♀️",blossom:"🌼",blowfish:"🐡",blue_book:"📘",blue_car:"🚙",blue_heart:"💙",blush:"😊",boar:"🐗",boat:"⛵️",bomb:"💣",book:"📖",bookmark:"🔖",bookmark_tabs:"📑",books:"📚",boom:"💥",boot:"👢",bouquet:"💐",bowing_man:"🙇",bow_and_arrow:"🏹",bowing_woman:"🙇&zwj;♀️",bowling:"🎳",boxing_glove:"🥊",boy:"👦",bread:"🍞",bride_with_veil:"👰",bridge_at_night:"🌉",briefcase:"💼",broken_heart:"💔",bug:"🐛",building_construction:"🏗",bulb:"💡",bullettrain_front:"🚅",bullettrain_side:"🚄",burrito:"🌯",bus:"🚌",business_suit_levitating:"🕴",busstop:"🚏",bust_in_silhouette:"👤",busts_in_silhouette:"👥",butterfly:"🦋",cactus:"🌵",cake:"🍰",calendar:"📆",call_me_hand:"🤙",calling:"📲",camel:"🐫",camera:"📷",camera_flash:"📸",camping:"🏕",cancer:"♋️",candle:"🕯",candy:"🍬",canoe:"🛶",capital_abcd:"🔠",capricorn:"♑️",car:"🚗",card_file_box:"🗃",card_index:"📇",card_index_dividers:"🗂",carousel_horse:"🎠",carrot:"🥕",cat:"🐱",cat2:"🐈",cd:"💿",chains:"⛓",champagne:"🍾",chart:"💹",chart_with_downwards_trend:"📉",chart_with_upwards_trend:"📈",checkered_flag:"🏁",cheese:"🧀",cherries:"🍒",cherry_blossom:"🌸",chestnut:"🌰",chicken:"🐔",children_crossing:"🚸",chipmunk:"🐿",chocolate_bar:"🍫",christmas_tree:"🎄",church:"⛪️",cinema:"🎦",circus_tent:"🎪",city_sunrise:"🌇",city_sunset:"🌆",cityscape:"🏙",cl:"🆑",clamp:"🗜",clap:"👏",clapper:"🎬",classical_building:"🏛",clinking_glasses:"🥂",clipboard:"📋",clock1:"🕐",clock10:"🕙",clock1030:"🕥",clock11:"🕚",clock1130:"🕦",clock12:"🕛",clock1230:"🕧",clock130:"🕜",clock2:"🕑",clock230:"🕝",clock3:"🕒",clock330:"🕞",clock4:"🕓",clock430:"🕟",clock5:"🕔",clock530:"🕠",clock6:"🕕",clock630:"🕡",clock7:"🕖",clock730:"🕢",clock8:"🕗",clock830:"🕣",clock9:"🕘",clock930:"🕤",closed_book:"📕",closed_lock_with_key:"🔐",closed_umbrella:"🌂",cloud:"☁️",cloud_with_lightning:"🌩",cloud_with_lightning_and_rain:"⛈",cloud_with_rain:"🌧",cloud_with_snow:"🌨",clown_face:"🤡",clubs:"♣️",cocktail:"🍸",coffee:"☕️",coffin:"⚰️",cold_sweat:"😰",comet:"☄️",computer:"💻",computer_mouse:"🖱",confetti_ball:"🎊",confounded:"😖",confused:"😕",congratulations:"㊗️",construction:"🚧",construction_worker_man:"👷",construction_worker_woman:"👷&zwj;♀️",control_knobs:"🎛",convenience_store:"🏪",cookie:"🍪",cool:"🆒",policeman:"👮",copyright:"©️",corn:"🌽",couch_and_lamp:"🛋",couple:"👫",couple_with_heart_woman_man:"💑",couple_with_heart_man_man:"👨&zwj;❤️&zwj;👨",couple_with_heart_woman_woman:"👩&zwj;❤️&zwj;👩",couplekiss_man_man:"👨&zwj;❤️&zwj;💋&zwj;👨",couplekiss_man_woman:"💏",couplekiss_woman_woman:"👩&zwj;❤️&zwj;💋&zwj;👩",cow:"🐮",cow2:"🐄",cowboy_hat_face:"🤠",crab:"🦀",crayon:"🖍",credit_card:"💳",crescent_moon:"🌙",cricket:"🏏",crocodile:"🐊",croissant:"🥐",crossed_fingers:"🤞",crossed_flags:"🎌",crossed_swords:"⚔️",crown:"👑",cry:"😢",crying_cat_face:"😿",crystal_ball:"🔮",cucumber:"🥒",cupid:"💘",curly_loop:"➰",currency_exchange:"💱",curry:"🍛",custard:"🍮",customs:"🛃",cyclone:"🌀",dagger:"🗡",dancer:"💃",dancing_women:"👯",dancing_men:"👯&zwj;♂️",dango:"🍡",dark_sunglasses:"🕶",dart:"🎯",dash:"💨",date:"📅",deciduous_tree:"🌳",deer:"🦌",department_store:"🏬",derelict_house:"🏚",desert:"🏜",desert_island:"🏝",desktop_computer:"🖥",male_detective:"🕵️",diamond_shape_with_a_dot_inside:"💠",diamonds:"♦️",disappointed:"😞",disappointed_relieved:"😥",dizzy:"💫",dizzy_face:"😵",do_not_litter:"🚯",dog:"🐶",dog2:"🐕",dollar:"💵",dolls:"🎎",dolphin:"🐬",door:"🚪",doughnut:"🍩",dove:"🕊",dragon:"🐉",dragon_face:"🐲",dress:"👗",dromedary_camel:"🐪",drooling_face:"🤤",droplet:"💧",drum:"🥁",duck:"🦆",dvd:"📀","e-mail":"📧",eagle:"🦅",ear:"👂",ear_of_rice:"🌾",earth_africa:"🌍",earth_americas:"🌎",earth_asia:"🌏",egg:"🥚",eggplant:"🍆",eight_pointed_black_star:"✴️",eight_spoked_asterisk:"✳️",electric_plug:"🔌",elephant:"🐘",email:"✉️",end:"🔚",envelope_with_arrow:"📩",euro:"💶",european_castle:"🏰",european_post_office:"🏤",evergreen_tree:"🌲",exclamation:"❗️",expressionless:"😑",eye:"👁",eye_speech_bubble:"👁&zwj;🗨",eyeglasses:"👓",eyes:"👀",face_with_head_bandage:"🤕",face_with_thermometer:"🤒",fist_oncoming:"👊",factory:"🏭",fallen_leaf:"🍂",family_man_woman_boy:"👪",family_man_boy:"👨&zwj;👦",family_man_boy_boy:"👨&zwj;👦&zwj;👦",family_man_girl:"👨&zwj;👧",family_man_girl_boy:"👨&zwj;👧&zwj;👦",family_man_girl_girl:"👨&zwj;👧&zwj;👧",family_man_man_boy:"👨&zwj;👨&zwj;👦",family_man_man_boy_boy:"👨&zwj;👨&zwj;👦&zwj;👦",family_man_man_girl:"👨&zwj;👨&zwj;👧",family_man_man_girl_boy:"👨&zwj;👨&zwj;👧&zwj;👦",family_man_man_girl_girl:"👨&zwj;👨&zwj;👧&zwj;👧",family_man_woman_boy_boy:"👨&zwj;👩&zwj;👦&zwj;👦",family_man_woman_girl:"👨&zwj;👩&zwj;👧",family_man_woman_girl_boy:"👨&zwj;👩&zwj;👧&zwj;👦",family_man_woman_girl_girl:"👨&zwj;👩&zwj;👧&zwj;👧",family_woman_boy:"👩&zwj;👦",family_woman_boy_boy:"👩&zwj;👦&zwj;👦",family_woman_girl:"👩&zwj;👧",family_woman_girl_boy:"👩&zwj;👧&zwj;👦",family_woman_girl_girl:"👩&zwj;👧&zwj;👧",family_woman_woman_boy:"👩&zwj;👩&zwj;👦",family_woman_woman_boy_boy:"👩&zwj;👩&zwj;👦&zwj;👦",family_woman_woman_girl:"👩&zwj;👩&zwj;👧",family_woman_woman_girl_boy:"👩&zwj;👩&zwj;👧&zwj;👦",family_woman_woman_girl_girl:"👩&zwj;👩&zwj;👧&zwj;👧",fast_forward:"⏩",fax:"📠",fearful:"😨",feet:"🐾",female_detective:"🕵️&zwj;♀️",ferris_wheel:"🎡",ferry:"⛴",field_hockey:"🏑",file_cabinet:"🗄",file_folder:"📁",film_projector:"📽",film_strip:"🎞",fire:"🔥",fire_engine:"🚒",fireworks:"🎆",first_quarter_moon:"🌓",first_quarter_moon_with_face:"🌛",fish:"🐟",fish_cake:"🍥",fishing_pole_and_fish:"🎣",fist_raised:"✊",fist_left:"🤛",fist_right:"🤜",flags:"🎏",flashlight:"🔦",fleur_de_lis:"⚜️",flight_arrival:"🛬",flight_departure:"🛫",floppy_disk:"💾",flower_playing_cards:"🎴",flushed:"😳",fog:"🌫",foggy:"🌁",football:"🏈",footprints:"👣",fork_and_knife:"🍴",fountain:"⛲️",fountain_pen:"🖋",four_leaf_clover:"🍀",fox_face:"🦊",framed_picture:"🖼",free:"🆓",fried_egg:"🍳",fried_shrimp:"🍤",fries:"🍟",frog:"🐸",frowning:"😦",frowning_face:"☹️",frowning_man:"🙍&zwj;♂️",frowning_woman:"🙍",middle_finger:"🖕",fuelpump:"⛽️",full_moon:"🌕",full_moon_with_face:"🌝",funeral_urn:"⚱️",game_die:"🎲",gear:"⚙️",gem:"💎",gemini:"♊️",ghost:"👻",gift:"🎁",gift_heart:"💝",girl:"👧",globe_with_meridians:"🌐",goal_net:"🥅",goat:"🐐",golf:"⛳️",golfing_man:"🏌️",golfing_woman:"🏌️&zwj;♀️",gorilla:"🦍",grapes:"🍇",green_apple:"🍏",green_book:"📗",green_heart:"💚",green_salad:"🥗",grey_exclamation:"❕",grey_question:"❔",grimacing:"😬",grin:"😁",grinning:"😀",guardsman:"💂",guardswoman:"💂&zwj;♀️",guitar:"🎸",gun:"🔫",haircut_woman:"💇",haircut_man:"💇&zwj;♂️",hamburger:"🍔",hammer:"🔨",hammer_and_pick:"⚒",hammer_and_wrench:"🛠",hamster:"🐹",hand:"✋",handbag:"👜",handshake:"🤝",hankey:"💩",hatched_chick:"🐥",hatching_chick:"🐣",headphones:"🎧",hear_no_evil:"🙉",heart:"❤️",heart_decoration:"💟",heart_eyes:"😍",heart_eyes_cat:"😻",heartbeat:"💓",heartpulse:"💗",hearts:"♥️",heavy_check_mark:"✔️",heavy_division_sign:"➗",heavy_dollar_sign:"💲",heavy_heart_exclamation:"❣️",heavy_minus_sign:"➖",heavy_multiplication_x:"✖️",heavy_plus_sign:"➕",helicopter:"🚁",herb:"🌿",hibiscus:"🌺",high_brightness:"🔆",high_heel:"👠",hocho:"🔪",hole:"🕳",honey_pot:"🍯",horse:"🐴",horse_racing:"🏇",hospital:"🏥",hot_pepper:"🌶",hotdog:"🌭",hotel:"🏨",hotsprings:"♨️",hourglass:"⌛️",hourglass_flowing_sand:"⏳",house:"🏠",house_with_garden:"🏡",houses:"🏘",hugs:"🤗",hushed:"😯",ice_cream:"🍨",ice_hockey:"🏒",ice_skate:"⛸",icecream:"🍦",id:"🆔",ideograph_advantage:"🉐",imp:"👿",inbox_tray:"📥",incoming_envelope:"📨",tipping_hand_woman:"💁",information_source:"ℹ️",innocent:"😇",interrobang:"⁉️",iphone:"📱",izakaya_lantern:"🏮",jack_o_lantern:"🎃",japan:"🗾",japanese_castle:"🏯",japanese_goblin:"👺",japanese_ogre:"👹",jeans:"👖",joy:"😂",joy_cat:"😹",joystick:"🕹",kaaba:"🕋",key:"🔑",keyboard:"⌨️",keycap_ten:"🔟",kick_scooter:"🛴",kimono:"👘",kiss:"💋",kissing:"😗",kissing_cat:"😽",kissing_closed_eyes:"😚",kissing_heart:"😘",kissing_smiling_eyes:"😙",kiwi_fruit:"🥝",koala:"🐨",koko:"🈁",label:"🏷",large_blue_circle:"🔵",large_blue_diamond:"🔷",large_orange_diamond:"🔶",last_quarter_moon:"🌗",last_quarter_moon_with_face:"🌜",latin_cross:"✝️",laughing:"😆",leaves:"🍃",ledger:"📒",left_luggage:"🛅",left_right_arrow:"↔️",leftwards_arrow_with_hook:"↩️",lemon:"🍋",leo:"♌️",leopard:"🐆",level_slider:"🎚",libra:"♎️",light_rail:"🚈",link:"🔗",lion:"🦁",lips:"👄",lipstick:"💄",lizard:"🦎",lock:"🔒",lock_with_ink_pen:"🔏",lollipop:"🍭",loop:"➿",loud_sound:"🔊",loudspeaker:"📢",love_hotel:"🏩",love_letter:"💌",low_brightness:"🔅",lying_face:"🤥",m:"Ⓜ️",mag:"🔍",mag_right:"🔎",mahjong:"🀄️",mailbox:"📫",mailbox_closed:"📪",mailbox_with_mail:"📬",mailbox_with_no_mail:"📭",man:"👨",man_artist:"👨&zwj;🎨",man_astronaut:"👨&zwj;🚀",man_cartwheeling:"🤸&zwj;♂️",man_cook:"👨&zwj;🍳",man_dancing:"🕺",man_facepalming:"🤦&zwj;♂️",man_factory_worker:"👨&zwj;🏭",man_farmer:"👨&zwj;🌾",man_firefighter:"👨&zwj;🚒",man_health_worker:"👨&zwj;⚕️",man_in_tuxedo:"🤵",man_judge:"👨&zwj;⚖️",man_juggling:"🤹&zwj;♂️",man_mechanic:"👨&zwj;🔧",man_office_worker:"👨&zwj;💼",man_pilot:"👨&zwj;✈️",man_playing_handball:"🤾&zwj;♂️",man_playing_water_polo:"🤽&zwj;♂️",man_scientist:"👨&zwj;🔬",man_shrugging:"🤷&zwj;♂️",man_singer:"👨&zwj;🎤",man_student:"👨&zwj;🎓",man_teacher:"👨&zwj;🏫",man_technologist:"👨&zwj;💻",man_with_gua_pi_mao:"👲",man_with_turban:"👳",tangerine:"🍊",mans_shoe:"👞",mantelpiece_clock:"🕰",maple_leaf:"🍁",martial_arts_uniform:"🥋",mask:"😷",massage_woman:"💆",massage_man:"💆&zwj;♂️",meat_on_bone:"🍖",medal_military:"🎖",medal_sports:"🏅",mega:"📣",melon:"🍈",memo:"📝",men_wrestling:"🤼&zwj;♂️",menorah:"🕎",mens:"🚹",metal:"🤘",metro:"🚇",microphone:"🎤",microscope:"🔬",milk_glass:"🥛",milky_way:"🌌",minibus:"🚐",minidisc:"💽",mobile_phone_off:"📴",money_mouth_face:"🤑",money_with_wings:"💸",moneybag:"💰",monkey:"🐒",monkey_face:"🐵",monorail:"🚝",moon:"🌔",mortar_board:"🎓",mosque:"🕌",motor_boat:"🛥",motor_scooter:"🛵",motorcycle:"🏍",motorway:"🛣",mount_fuji:"🗻",mountain:"⛰",mountain_biking_man:"🚵",mountain_biking_woman:"🚵&zwj;♀️",mountain_cableway:"🚠",mountain_railway:"🚞",mountain_snow:"🏔",mouse:"🐭",mouse2:"🐁",movie_camera:"🎥",moyai:"🗿",mrs_claus:"🤶",muscle:"💪",mushroom:"🍄",musical_keyboard:"🎹",musical_note:"🎵",musical_score:"🎼",mute:"🔇",nail_care:"💅",name_badge:"📛",national_park:"🏞",nauseated_face:"🤢",necktie:"👔",negative_squared_cross_mark:"❎",nerd_face:"🤓",neutral_face:"😐",new:"🆕",new_moon:"🌑",new_moon_with_face:"🌚",newspaper:"📰",newspaper_roll:"🗞",next_track_button:"⏭",ng:"🆖",no_good_man:"🙅&zwj;♂️",no_good_woman:"🙅",night_with_stars:"🌃",no_bell:"🔕",no_bicycles:"🚳",no_entry:"⛔️",no_entry_sign:"🚫",no_mobile_phones:"📵",no_mouth:"😶",no_pedestrians:"🚷",no_smoking:"🚭","non-potable_water":"🚱",nose:"👃",notebook:"📓",notebook_with_decorative_cover:"📔",notes:"🎶",nut_and_bolt:"🔩",o:"⭕️",o2:"🅾️",ocean:"🌊",octopus:"🐙",oden:"🍢",office:"🏢",oil_drum:"🛢",ok:"🆗",ok_hand:"👌",ok_man:"🙆&zwj;♂️",ok_woman:"🙆",old_key:"🗝",older_man:"👴",older_woman:"👵",om:"🕉",on:"🔛",oncoming_automobile:"🚘",oncoming_bus:"🚍",oncoming_police_car:"🚔",oncoming_taxi:"🚖",open_file_folder:"📂",open_hands:"👐",open_mouth:"😮",open_umbrella:"☂️",ophiuchus:"⛎",orange_book:"📙",orthodox_cross:"☦️",outbox_tray:"📤",owl:"🦉",ox:"🐂",package:"📦",page_facing_up:"📄",page_with_curl:"📃",pager:"📟",paintbrush:"🖌",palm_tree:"🌴",pancakes:"🥞",panda_face:"🐼",paperclip:"📎",paperclips:"🖇",parasol_on_ground:"⛱",parking:"🅿️",part_alternation_mark:"〽️",partly_sunny:"⛅️",passenger_ship:"🛳",passport_control:"🛂",pause_button:"⏸",peace_symbol:"☮️",peach:"🍑",peanuts:"🥜",pear:"🍐",pen:"🖊",pencil2:"✏️",penguin:"🐧",pensive:"😔",performing_arts:"🎭",persevere:"😣",person_fencing:"🤺",pouting_woman:"🙎",phone:"☎️",pick:"⛏",pig:"🐷",pig2:"🐖",pig_nose:"🐽",pill:"💊",pineapple:"🍍",ping_pong:"🏓",pisces:"♓️",pizza:"🍕",place_of_worship:"🛐",plate_with_cutlery:"🍽",play_or_pause_button:"⏯",point_down:"👇",point_left:"👈",point_right:"👉",point_up:"☝️",point_up_2:"👆",police_car:"🚓",policewoman:"👮&zwj;♀️",poodle:"🐩",popcorn:"🍿",post_office:"🏣",postal_horn:"📯",postbox:"📮",potable_water:"🚰",potato:"🥔",pouch:"👝",poultry_leg:"🍗",pound:"💷",rage:"😡",pouting_cat:"😾",pouting_man:"🙎&zwj;♂️",pray:"🙏",prayer_beads:"📿",pregnant_woman:"🤰",previous_track_button:"⏮",prince:"🤴",princess:"👸",printer:"🖨",purple_heart:"💜",purse:"👛",pushpin:"📌",put_litter_in_its_place:"🚮",question:"❓",rabbit:"🐰",rabbit2:"🐇",racehorse:"🐎",racing_car:"🏎",radio:"📻",radio_button:"🔘",radioactive:"☢️",railway_car:"🚃",railway_track:"🛤",rainbow:"🌈",rainbow_flag:"🏳️&zwj;🌈",raised_back_of_hand:"🤚",raised_hand_with_fingers_splayed:"🖐",raised_hands:"🙌",raising_hand_woman:"🙋",raising_hand_man:"🙋&zwj;♂️",ram:"🐏",ramen:"🍜",rat:"🐀",record_button:"⏺",recycle:"♻️",red_circle:"🔴",registered:"®️",relaxed:"☺️",relieved:"😌",reminder_ribbon:"🎗",repeat:"🔁",repeat_one:"🔂",rescue_worker_helmet:"⛑",restroom:"🚻",revolving_hearts:"💞",rewind:"⏪",rhinoceros:"🦏",ribbon:"🎀",rice:"🍚",rice_ball:"🍙",rice_cracker:"🍘",rice_scene:"🎑",right_anger_bubble:"🗯",ring:"💍",robot:"🤖",rocket:"🚀",rofl:"🤣",roll_eyes:"🙄",roller_coaster:"🎢",rooster:"🐓",rose:"🌹",rosette:"🏵",rotating_light:"🚨",round_pushpin:"📍",rowing_man:"🚣",rowing_woman:"🚣&zwj;♀️",rugby_football:"🏉",running_man:"🏃",running_shirt_with_sash:"🎽",running_woman:"🏃&zwj;♀️",sa:"🈂️",sagittarius:"♐️",sake:"🍶",sandal:"👡",santa:"🎅",satellite:"📡",saxophone:"🎷",school:"🏫",school_satchel:"🎒",scissors:"✂️",scorpion:"🦂",scorpius:"♏️",scream:"😱",scream_cat:"🙀",scroll:"📜",seat:"💺",secret:"㊙️",see_no_evil:"🙈",seedling:"🌱",selfie:"🤳",shallow_pan_of_food:"🥘",shamrock:"☘️",shark:"🦈",shaved_ice:"🍧",sheep:"🐑",shell:"🐚",shield:"🛡",shinto_shrine:"⛩",ship:"🚢",shirt:"👕",shopping:"🛍",shopping_cart:"🛒",shower:"🚿",shrimp:"🦐",signal_strength:"📶",six_pointed_star:"🔯",ski:"🎿",skier:"⛷",skull:"💀",skull_and_crossbones:"☠️",sleeping:"😴",sleeping_bed:"🛌",sleepy:"😪",slightly_frowning_face:"🙁",slightly_smiling_face:"🙂",slot_machine:"🎰",small_airplane:"🛩",small_blue_diamond:"🔹",small_orange_diamond:"🔸",small_red_triangle:"🔺",small_red_triangle_down:"🔻",smile:"😄",smile_cat:"😸",smiley:"😃",smiley_cat:"😺",smiling_imp:"😈",smirk:"😏",smirk_cat:"😼",smoking:"🚬",snail:"🐌",snake:"🐍",sneezing_face:"🤧",snowboarder:"🏂",snowflake:"❄️",snowman:"⛄️",snowman_with_snow:"☃️",sob:"😭",soccer:"⚽️",soon:"🔜",sos:"🆘",sound:"🔉",space_invader:"👾",spades:"♠️",spaghetti:"🍝",sparkle:"❇️",sparkler:"🎇",sparkles:"✨",sparkling_heart:"💖",speak_no_evil:"🙊",speaker:"🔈",speaking_head:"🗣",speech_balloon:"💬",speedboat:"🚤",spider:"🕷",spider_web:"🕸",spiral_calendar:"🗓",spiral_notepad:"🗒",spoon:"🥄",squid:"🦑",stadium:"🏟",star:"⭐️",star2:"🌟",star_and_crescent:"☪️",star_of_david:"✡️",stars:"🌠",station:"🚉",statue_of_liberty:"🗽",steam_locomotive:"🚂",stew:"🍲",stop_button:"⏹",stop_sign:"🛑",stopwatch:"⏱",straight_ruler:"📏",strawberry:"🍓",stuck_out_tongue:"😛",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue_winking_eye:"😜",studio_microphone:"🎙",stuffed_flatbread:"🥙",sun_behind_large_cloud:"🌥",sun_behind_rain_cloud:"🌦",sun_behind_small_cloud:"🌤",sun_with_face:"🌞",sunflower:"🌻",sunglasses:"😎",sunny:"☀️",sunrise:"🌅",sunrise_over_mountains:"🌄",surfing_man:"🏄",surfing_woman:"🏄&zwj;♀️",sushi:"🍣",suspension_railway:"🚟",sweat:"😓",sweat_drops:"💦",sweat_smile:"😅",sweet_potato:"🍠",swimming_man:"🏊",swimming_woman:"🏊&zwj;♀️",symbols:"🔣",synagogue:"🕍",syringe:"💉",taco:"🌮",tada:"🎉",tanabata_tree:"🎋",taurus:"♉️",taxi:"🚕",tea:"🍵",telephone_receiver:"📞",telescope:"🔭",tennis:"🎾",tent:"⛺️",thermometer:"🌡",thinking:"🤔",thought_balloon:"💭",ticket:"🎫",tickets:"🎟",tiger:"🐯",tiger2:"🐅",timer_clock:"⏲",tipping_hand_man:"💁&zwj;♂️",tired_face:"😫",tm:"™️",toilet:"🚽",tokyo_tower:"🗼",tomato:"🍅",tongue:"👅",top:"🔝",tophat:"🎩",tornado:"🌪",trackball:"🖲",tractor:"🚜",traffic_light:"🚥",train:"🚋",train2:"🚆",tram:"🚊",triangular_flag_on_post:"🚩",triangular_ruler:"📐",trident:"🔱",triumph:"😤",trolleybus:"🚎",trophy:"🏆",tropical_drink:"🍹",tropical_fish:"🐠",truck:"🚚",trumpet:"🎺",tulip:"🌷",tumbler_glass:"🥃",turkey:"🦃",turtle:"🐢",tv:"📺",twisted_rightwards_arrows:"🔀",two_hearts:"💕",two_men_holding_hands:"👬",two_women_holding_hands:"👭",u5272:"🈹",u5408:"🈴",u55b6:"🈺",u6307:"🈯️",u6708:"🈷️",u6709:"🈶",u6e80:"🈵",u7121:"🈚️",u7533:"🈸",u7981:"🈲",u7a7a:"🈳",umbrella:"☔️",unamused:"😒",underage:"🔞",unicorn:"🦄",unlock:"🔓",up:"🆙",upside_down_face:"🙃",v:"✌️",vertical_traffic_light:"🚦",vhs:"📼",vibration_mode:"📳",video_camera:"📹",video_game:"🎮",violin:"🎻",virgo:"♍️",volcano:"🌋",volleyball:"🏐",vs:"🆚",vulcan_salute:"🖖",walking_man:"🚶",walking_woman:"🚶&zwj;♀️",waning_crescent_moon:"🌘",waning_gibbous_moon:"🌖",warning:"⚠️",wastebasket:"🗑",watch:"⌚️",water_buffalo:"🐃",watermelon:"🍉",wave:"👋",wavy_dash:"〰️",waxing_crescent_moon:"🌒",wc:"🚾",weary:"😩",wedding:"💒",weight_lifting_man:"🏋️",weight_lifting_woman:"🏋️&zwj;♀️",whale:"🐳",whale2:"🐋",wheel_of_dharma:"☸️",wheelchair:"♿️",white_check_mark:"✅",white_circle:"⚪️",white_flag:"🏳️",white_flower:"💮",white_large_square:"⬜️",white_medium_small_square:"◽️",white_medium_square:"◻️",white_small_square:"▫️",white_square_button:"🔳",wilted_flower:"🥀",wind_chime:"🎐",wind_face:"🌬",wine_glass:"🍷",wink:"😉",wolf:"🐺",woman:"👩",woman_artist:"👩&zwj;🎨",woman_astronaut:"👩&zwj;🚀",woman_cartwheeling:"🤸&zwj;♀️",woman_cook:"👩&zwj;🍳",woman_facepalming:"🤦&zwj;♀️",woman_factory_worker:"👩&zwj;🏭",woman_farmer:"👩&zwj;🌾",woman_firefighter:"👩&zwj;🚒",woman_health_worker:"👩&zwj;⚕️",woman_judge:"👩&zwj;⚖️",woman_juggling:"🤹&zwj;♀️",woman_mechanic:"👩&zwj;🔧",woman_office_worker:"👩&zwj;💼",woman_pilot:"👩&zwj;✈️",woman_playing_handball:"🤾&zwj;♀️",woman_playing_water_polo:"🤽&zwj;♀️",woman_scientist:"👩&zwj;🔬",woman_shrugging:"🤷&zwj;♀️",woman_singer:"👩&zwj;🎤",woman_student:"👩&zwj;🎓",woman_teacher:"👩&zwj;🏫",woman_technologist:"👩&zwj;💻",woman_with_turban:"👳&zwj;♀️",womans_clothes:"👚",womans_hat:"👒",women_wrestling:"🤼&zwj;♀️",womens:"🚺",world_map:"🗺",worried:"😟",wrench:"🔧",writing_hand:"✍️",x:"❌",yellow_heart:"💛",yen:"💴",yin_yang:"☯️",yum:"😋",zap:"⚡️",zipper_mouth_face:"🤐",zzz:"💤",octocat:'<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',showdown:`<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`},n.Converter=function(e){var r={},a=[],d=[],i={},c=M,s={parsed:{},raw:"",format:""};f();function f(){e=e||{};for(var u in T)T.hasOwnProperty(u)&&(r[u]=T[u]);if(typeof e=="object")for(var _ in e)e.hasOwnProperty(_)&&(r[_]=e[_]);else throw Error("Converter expects the passed parameter to be an object, but "+typeof e+" was passed instead.");r.extensions&&n.helper.forEach(r.extensions,C)}function C(u,_){if(_=_||null,n.helper.isString(u))if(u=n.helper.stdExtName(u),_=u,n.extensions[u]){console.warn("DEPRECATION WARNING: "+u+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),y(n.extensions[u],u);return}else if(!n.helper.isUndefined(P[u]))u=P[u];else throw Error('Extension "'+u+'" could not be loaded. It was either not found or is not a valid extension.');typeof u=="function"&&(u=u()),n.helper.isArray(u)||(u=[u]);var j=F(u,_);if(!j.valid)throw Error(j.error);for(var E=0;E<u.length;++E){switch(u[E].type){case"lang":a.push(u[E]);break;case"output":d.push(u[E]);break}if(u[E].hasOwnProperty("listeners"))for(var I in u[E].listeners)u[E].listeners.hasOwnProperty(I)&&v(I,u[E].listeners[I])}}function y(u,_){typeof u=="function"&&(u=u(new n.Converter)),n.helper.isArray(u)||(u=[u]);var j=F(u,_);if(!j.valid)throw Error(j.error);for(var E=0;E<u.length;++E)switch(u[E].type){case"lang":a.push(u[E]);break;case"output":d.push(u[E]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function v(u,_){if(!n.helper.isString(u))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof u+" given");if(typeof _!="function")throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof _+" given");i.hasOwnProperty(u)||(i[u]=[]),i[u].push(_)}function b(u){var _=u.match(/^\s*/)[0].length,j=new RegExp("^\\s{0,"+_+"}","gm");return u.replace(j,"")}this._dispatch=function(_,j,E,I){if(i.hasOwnProperty(_))for(var A=0;A<i[_].length;++A){var x=i[_][A](_,j,this,E,I);x&&typeof x<"u"&&(j=x)}return j},this.listen=function(u,_){return v(u,_),this},this.makeHtml=function(u){if(!u)return u;var _={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:a,outputModifiers:d,converter:this,ghCodeBlocks:[],metadata:{parsed:{},raw:"",format:""}};return u=u.replace(/¨/g,"¨T"),u=u.replace(/\$/g,"¨D"),u=u.replace(/\r\n/g,`
`),u=u.replace(/\r/g,`
`),u=u.replace(/\u00A0/g,"&nbsp;"),r.smartIndentationFix&&(u=b(u)),u=`

`+u+`

`,u=n.subParser("detab")(u,r,_),u=u.replace(/^[ \t]+$/mg,""),n.helper.forEach(a,function(j){u=n.subParser("runExtension")(j,u,r,_)}),u=n.subParser("metadata")(u,r,_),u=n.subParser("hashPreCodeTags")(u,r,_),u=n.subParser("githubCodeBlocks")(u,r,_),u=n.subParser("hashHTMLBlocks")(u,r,_),u=n.subParser("hashCodeTags")(u,r,_),u=n.subParser("stripLinkDefinitions")(u,r,_),u=n.subParser("blockGamut")(u,r,_),u=n.subParser("unhashHTMLSpans")(u,r,_),u=n.subParser("unescapeSpecialChars")(u,r,_),u=u.replace(/¨D/g,"$$"),u=u.replace(/¨T/g,"¨"),u=n.subParser("completeHTMLDocument")(u,r,_),n.helper.forEach(d,function(j){u=n.subParser("runExtension")(j,u,r,_)}),s=_.metadata,u},this.makeMarkdown=this.makeMd=function(u,_){if(u=u.replace(/\r\n/g,`
`),u=u.replace(/\r/g,`
`),u=u.replace(/>[ \t]+</,">¨NBSP;<"),!_)if(window&&window.document)_=window.document;else throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");var j=_.createElement("div");j.innerHTML=u;var E={preList:X(j)};G(j);for(var I=j.childNodes,A="",x=0;x<I.length;x++)A+=n.subParser("makeMarkdown.node")(I[x],E);function G(N){for(var W=0;W<N.childNodes.length;++W){var Z=N.childNodes[W];Z.nodeType===3?!/\S/.test(Z.nodeValue)&&!/^[ ]+$/.test(Z.nodeValue)?(N.removeChild(Z),--W):(Z.nodeValue=Z.nodeValue.split(`
`).join(" "),Z.nodeValue=Z.nodeValue.replace(/(\s)+/g,"$1")):Z.nodeType===1&&G(Z)}}function X(N){for(var W=N.querySelectorAll("pre"),Z=[],Y=0;Y<W.length;++Y)if(W[Y].childElementCount===1&&W[Y].firstChild.tagName.toLowerCase()==="code"){var ye=W[Y].firstChild.innerHTML.trim(),ke=W[Y].firstChild.getAttribute("data-language")||"";if(ke==="")for(var Ie=W[Y].firstChild.className.split(" "),Pe=0;Pe<Ie.length;++Pe){var He=Ie[Pe].match(/^language-(.+)$/);if(He!==null){ke=He[1];break}}ye=n.helper.unescapeHTMLEntities(ye),Z.push(ye),W[Y].outerHTML='<precode language="'+ke+'" precodenum="'+Y.toString()+'"></precode>'}else Z.push(W[Y].innerHTML),W[Y].innerHTML="",W[Y].setAttribute("prenum",Y.toString());return Z}return A},this.setOption=function(u,_){r[u]=_},this.getOption=function(u){return r[u]},this.getOptions=function(){return r},this.addExtension=function(u,_){_=_||null,C(u,_)},this.useExtension=function(u){C(u)},this.setFlavor=function(u){if(!z.hasOwnProperty(u))throw Error(u+" flavor was not found");var _=z[u];c=u;for(var j in _)_.hasOwnProperty(j)&&(r[j]=_[j])},this.getFlavor=function(){return c},this.removeExtension=function(u){n.helper.isArray(u)||(u=[u]);for(var _=0;_<u.length;++_){for(var j=u[_],E=0;E<a.length;++E)a[E]===j&&a.splice(E,1);for(var I=0;I<d.length;++I)d[I]===j&&d.splice(I,1)}},this.getAllExtensions=function(){return{language:a,output:d}},this.getMetadata=function(u){return u?s.raw:s.parsed},this.getMetadataFormat=function(){return s.format},this._setMetadataPair=function(u,_){s.parsed[u]=_},this._setMetadataFormat=function(u){s.format=u},this._setMetadataRaw=function(u){s.raw=u}},n.subParser("anchors",function(e,r,a){e=a.converter._dispatch("anchors.before",e,r,a);var d=function(i,c,s,f,C,y,v){if(n.helper.isUndefined(v)&&(v=""),s=s.toLowerCase(),i.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)f="";else if(!f)if(s||(s=c.toLowerCase().replace(/ ?\n/g," ")),f="#"+s,!n.helper.isUndefined(a.gUrls[s]))f=a.gUrls[s],n.helper.isUndefined(a.gTitles[s])||(v=a.gTitles[s]);else return i;f=f.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback);var b='<a href="'+f+'"';return v!==""&&v!==null&&(v=v.replace(/"/g,"&quot;"),v=v.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback),b+=' title="'+v+'"'),r.openLinksInNewWindow&&!/^#/.test(f)&&(b+=' rel="noopener noreferrer" target="¨E95Eblank"'),b+=">"+c+"</a>",b};return e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,d),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,d),e=e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,d),e=e.replace(/\[([^\[\]]+)]()()()()()/g,d),r.ghMentions&&(e=e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi,function(i,c,s,f,C){if(s==="\\")return c+f;if(!n.helper.isString(r.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");var y=r.ghMentionsLink.replace(/\{u}/g,C),v="";return r.openLinksInNewWindow&&(v=' rel="noopener noreferrer" target="¨E95Eblank"'),c+'<a href="'+y+'"'+v+">"+f+"</a>"})),e=a.converter._dispatch("anchors.after",e,r,a),e});var D=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,J=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,m=/()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,g=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,w=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,k=function(e){return function(r,a,d,i,c,s,f){d=d.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback);var C=d,y="",v="",b=a||"",u=f||"";return/^www\./i.test(d)&&(d=d.replace(/^www\./i,"http://www.")),e.excludeTrailingPunctuationFromURLs&&s&&(y=s),e.openLinksInNewWindow&&(v=' rel="noopener noreferrer" target="¨E95Eblank"'),b+'<a href="'+d+'"'+v+">"+C+"</a>"+y+u}},S=function(e,r){return function(a,d,i){var c="mailto:";return d=d||"",i=n.subParser("unescapeSpecialChars")(i,e,r),e.encodeEmails?(c=n.helper.encodeEmailAddress(c+i),i=n.helper.encodeEmailAddress(i)):c=c+i,d+'<a href="'+c+'">'+i+"</a>"}};n.subParser("autoLinks",function(e,r,a){return e=a.converter._dispatch("autoLinks.before",e,r,a),e=e.replace(m,k(r)),e=e.replace(w,S(r,a)),e=a.converter._dispatch("autoLinks.after",e,r,a),e}),n.subParser("simplifiedAutoLinks",function(e,r,a){return r.simplifiedAutoLink&&(e=a.converter._dispatch("simplifiedAutoLinks.before",e,r,a),r.excludeTrailingPunctuationFromURLs?e=e.replace(J,k(r)):e=e.replace(D,k(r)),e=e.replace(g,S(r,a)),e=a.converter._dispatch("simplifiedAutoLinks.after",e,r,a)),e}),n.subParser("blockGamut",function(e,r,a){return e=a.converter._dispatch("blockGamut.before",e,r,a),e=n.subParser("blockQuotes")(e,r,a),e=n.subParser("headers")(e,r,a),e=n.subParser("horizontalRule")(e,r,a),e=n.subParser("lists")(e,r,a),e=n.subParser("codeBlocks")(e,r,a),e=n.subParser("tables")(e,r,a),e=n.subParser("hashHTMLBlocks")(e,r,a),e=n.subParser("paragraphs")(e,r,a),e=a.converter._dispatch("blockGamut.after",e,r,a),e}),n.subParser("blockQuotes",function(e,r,a){e=a.converter._dispatch("blockQuotes.before",e,r,a),e=e+`

`;var d=/(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;return r.splitAdjacentBlockquotes&&(d=/^ {0,3}>[\s\S]*?(?:\n\n)/gm),e=e.replace(d,function(i){return i=i.replace(/^[ \t]*>[ \t]?/gm,""),i=i.replace(/¨0/g,""),i=i.replace(/^[ \t]+$/gm,""),i=n.subParser("githubCodeBlocks")(i,r,a),i=n.subParser("blockGamut")(i,r,a),i=i.replace(/(^|\n)/g,"$1  "),i=i.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(c,s){var f=s;return f=f.replace(/^  /mg,"¨0"),f=f.replace(/¨0/g,""),f}),n.subParser("hashBlock")(`<blockquote>
`+i+`
</blockquote>`,r,a)}),e=a.converter._dispatch("blockQuotes.after",e,r,a),e}),n.subParser("codeBlocks",function(e,r,a){e=a.converter._dispatch("codeBlocks.before",e,r,a),e+="¨0";var d=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;return e=e.replace(d,function(i,c,s){var f=c,C=s,y=`
`;return f=n.subParser("outdent")(f,r,a),f=n.subParser("encodeCode")(f,r,a),f=n.subParser("detab")(f,r,a),f=f.replace(/^\n+/g,""),f=f.replace(/\n+$/g,""),r.omitExtraWLInCodeBlocks&&(y=""),f="<pre><code>"+f+y+"</code></pre>",n.subParser("hashBlock")(f,r,a)+C}),e=e.replace(/¨0/,""),e=a.converter._dispatch("codeBlocks.after",e,r,a),e}),n.subParser("codeSpans",function(e,r,a){return e=a.converter._dispatch("codeSpans.before",e,r,a),typeof e>"u"&&(e=""),e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(d,i,c,s){var f=s;return f=f.replace(/^([ \t]*)/g,""),f=f.replace(/[ \t]*$/g,""),f=n.subParser("encodeCode")(f,r,a),f=i+"<code>"+f+"</code>",f=n.subParser("hashHTMLSpans")(f,r,a),f}),e=a.converter._dispatch("codeSpans.after",e,r,a),e}),n.subParser("completeHTMLDocument",function(e,r,a){if(!r.completeHTMLDocument)return e;e=a.converter._dispatch("completeHTMLDocument.before",e,r,a);var d="html",i=`<!DOCTYPE HTML>
`,c="",s=`<meta charset="utf-8">
`,f="",C="";typeof a.metadata.parsed.doctype<"u"&&(i="<!DOCTYPE "+a.metadata.parsed.doctype+`>
`,d=a.metadata.parsed.doctype.toString().toLowerCase(),(d==="html"||d==="html5")&&(s='<meta charset="utf-8">'));for(var y in a.metadata.parsed)if(a.metadata.parsed.hasOwnProperty(y))switch(y.toLowerCase()){case"doctype":break;case"title":c="<title>"+a.metadata.parsed.title+`</title>
`;break;case"charset":d==="html"||d==="html5"?s='<meta charset="'+a.metadata.parsed.charset+`">
`:s='<meta name="charset" content="'+a.metadata.parsed.charset+`">
`;break;case"language":case"lang":f=' lang="'+a.metadata.parsed[y]+'"',C+='<meta name="'+y+'" content="'+a.metadata.parsed[y]+`">
`;break;default:C+='<meta name="'+y+'" content="'+a.metadata.parsed[y]+`">
`}return e=i+"<html"+f+`>
<head>
`+c+s+C+`</head>
<body>
`+e.trim()+`
</body>
</html>`,e=a.converter._dispatch("completeHTMLDocument.after",e,r,a),e}),n.subParser("detab",function(e,r,a){return e=a.converter._dispatch("detab.before",e,r,a),e=e.replace(/\t(?=\t)/g,"    "),e=e.replace(/\t/g,"¨A¨B"),e=e.replace(/¨B(.+?)¨A/g,function(d,i){for(var c=i,s=4-c.length%4,f=0;f<s;f++)c+=" ";return c}),e=e.replace(/¨A/g,"    "),e=e.replace(/¨B/g,""),e=a.converter._dispatch("detab.after",e,r,a),e}),n.subParser("ellipsis",function(e,r,a){return r.ellipsis&&(e=a.converter._dispatch("ellipsis.before",e,r,a),e=e.replace(/\.\.\./g,"…"),e=a.converter._dispatch("ellipsis.after",e,r,a)),e}),n.subParser("emoji",function(e,r,a){if(!r.emoji)return e;e=a.converter._dispatch("emoji.before",e,r,a);var d=/:([\S]+?):/g;return e=e.replace(d,function(i,c){return n.helper.emojis.hasOwnProperty(c)?n.helper.emojis[c]:i}),e=a.converter._dispatch("emoji.after",e,r,a),e}),n.subParser("encodeAmpsAndAngles",function(e,r,a){return e=a.converter._dispatch("encodeAmpsAndAngles.before",e,r,a),e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?$!])/gi,"&lt;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=a.converter._dispatch("encodeAmpsAndAngles.after",e,r,a),e}),n.subParser("encodeBackslashEscapes",function(e,r,a){return e=a.converter._dispatch("encodeBackslashEscapes.before",e,r,a),e=e.replace(/\\(\\)/g,n.helper.escapeCharactersCallback),e=e.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g,n.helper.escapeCharactersCallback),e=a.converter._dispatch("encodeBackslashEscapes.after",e,r,a),e}),n.subParser("encodeCode",function(e,r,a){return e=a.converter._dispatch("encodeCode.before",e,r,a),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,n.helper.escapeCharactersCallback),e=a.converter._dispatch("encodeCode.after",e,r,a),e}),n.subParser("escapeSpecialCharsWithinTagAttributes",function(e,r,a){e=a.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",e,r,a);var d=/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,i=/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;return e=e.replace(d,function(c){return c.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,n.helper.escapeCharactersCallback)}),e=e.replace(i,function(c){return c.replace(/([\\`*_~=|])/g,n.helper.escapeCharactersCallback)}),e=a.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",e,r,a),e}),n.subParser("githubCodeBlocks",function(e,r,a){return r.ghCodeBlocks?(e=a.converter._dispatch("githubCodeBlocks.before",e,r,a),e+="¨0",e=e.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,function(d,i,c,s){var f=r.omitExtraWLInCodeBlocks?"":`
`;return s=n.subParser("encodeCode")(s,r,a),s=n.subParser("detab")(s,r,a),s=s.replace(/^\n+/g,""),s=s.replace(/\n+$/g,""),s="<pre><code"+(c?' class="'+c+" language-"+c+'"':"")+">"+s+f+"</code></pre>",s=n.subParser("hashBlock")(s,r,a),`

¨G`+(a.ghCodeBlocks.push({text:d,codeblock:s})-1)+`G

`}),e=e.replace(/¨0/,""),a.converter._dispatch("githubCodeBlocks.after",e,r,a)):e}),n.subParser("hashBlock",function(e,r,a){return e=a.converter._dispatch("hashBlock.before",e,r,a),e=e.replace(/(^\n+|\n+$)/g,""),e=`

¨K`+(a.gHtmlBlocks.push(e)-1)+`K

`,e=a.converter._dispatch("hashBlock.after",e,r,a),e}),n.subParser("hashCodeTags",function(e,r,a){e=a.converter._dispatch("hashCodeTags.before",e,r,a);var d=function(i,c,s,f){var C=s+n.subParser("encodeCode")(c,r,a)+f;return"¨C"+(a.gHtmlSpans.push(C)-1)+"C"};return e=n.helper.replaceRecursiveRegExp(e,d,"<code\\b[^>]*>","</code>","gim"),e=a.converter._dispatch("hashCodeTags.after",e,r,a),e}),n.subParser("hashElement",function(e,r,a){return function(d,i){var c=i;return c=c.replace(/\n\n/g,`
`),c=c.replace(/^\n/,""),c=c.replace(/\n+$/g,""),c=`

¨K`+(a.gHtmlBlocks.push(c)-1)+`K

`,c}}),n.subParser("hashHTMLBlocks",function(e,r,a){e=a.converter._dispatch("hashHTMLBlocks.before",e,r,a);var d=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],i=function(u,_,j,E){var I=u;return j.search(/\bmarkdown\b/)!==-1&&(I=j+a.converter.makeHtml(_)+E),`

¨K`+(a.gHtmlBlocks.push(I)-1)+`K

`};r.backslashEscapesHTMLTags&&(e=e.replace(/\\<(\/?[^>]+?)>/g,function(u,_){return"&lt;"+_+"&gt;"}));for(var c=0;c<d.length;++c)for(var s,f=new RegExp("^ {0,3}(<"+d[c]+"\\b[^>]*>)","im"),C="<"+d[c]+"\\b[^>]*>",y="</"+d[c]+">";(s=n.helper.regexIndexOf(e,f))!==-1;){var v=n.helper.splitAtIndex(e,s),b=n.helper.replaceRecursiveRegExp(v[1],i,C,y,"im");if(b===v[1])break;e=v[0].concat(b)}return e=e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,n.subParser("hashElement")(e,r,a)),e=n.helper.replaceRecursiveRegExp(e,function(u){return`

¨K`+(a.gHtmlBlocks.push(u)-1)+`K

`},"^ {0,3}<!--","-->","gm"),e=e.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,n.subParser("hashElement")(e,r,a)),e=a.converter._dispatch("hashHTMLBlocks.after",e,r,a),e}),n.subParser("hashHTMLSpans",function(e,r,a){e=a.converter._dispatch("hashHTMLSpans.before",e,r,a);function d(i){return"¨C"+(a.gHtmlSpans.push(i)-1)+"C"}return e=e.replace(/<[^>]+?\/>/gi,function(i){return d(i)}),e=e.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,function(i){return d(i)}),e=e.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,function(i){return d(i)}),e=e.replace(/<[^>]+?>/gi,function(i){return d(i)}),e=a.converter._dispatch("hashHTMLSpans.after",e,r,a),e}),n.subParser("unhashHTMLSpans",function(e,r,a){e=a.converter._dispatch("unhashHTMLSpans.before",e,r,a);for(var d=0;d<a.gHtmlSpans.length;++d){for(var i=a.gHtmlSpans[d],c=0;/¨C(\d+)C/.test(i);){var s=RegExp.$1;if(i=i.replace("¨C"+s+"C",a.gHtmlSpans[s]),c===10){console.error("maximum nesting of 10 spans reached!!!");break}++c}e=e.replace("¨C"+d+"C",i)}return e=a.converter._dispatch("unhashHTMLSpans.after",e,r,a),e}),n.subParser("hashPreCodeTags",function(e,r,a){e=a.converter._dispatch("hashPreCodeTags.before",e,r,a);var d=function(i,c,s,f){var C=s+n.subParser("encodeCode")(c,r,a)+f;return`

¨G`+(a.ghCodeBlocks.push({text:i,codeblock:C})-1)+`G

`};return e=n.helper.replaceRecursiveRegExp(e,d,"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),e=a.converter._dispatch("hashPreCodeTags.after",e,r,a),e}),n.subParser("headers",function(e,r,a){e=a.converter._dispatch("headers.before",e,r,a);var d=isNaN(parseInt(r.headerLevelStart))?1:parseInt(r.headerLevelStart),i=r.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,c=r.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;e=e.replace(i,function(C,y){var v=n.subParser("spanGamut")(y,r,a),b=r.noHeaderId?"":' id="'+f(y)+'"',u=d,_="<h"+u+b+">"+v+"</h"+u+">";return n.subParser("hashBlock")(_,r,a)}),e=e.replace(c,function(C,y){var v=n.subParser("spanGamut")(y,r,a),b=r.noHeaderId?"":' id="'+f(y)+'"',u=d+1,_="<h"+u+b+">"+v+"</h"+u+">";return n.subParser("hashBlock")(_,r,a)});var s=r.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;e=e.replace(s,function(C,y,v){var b=v;r.customizedHeaderId&&(b=v.replace(/\s?\{([^{]+?)}\s*$/,""));var u=n.subParser("spanGamut")(b,r,a),_=r.noHeaderId?"":' id="'+f(v)+'"',j=d-1+y.length,E="<h"+j+_+">"+u+"</h"+j+">";return n.subParser("hashBlock")(E,r,a)});function f(C){var y,v;if(r.customizedHeaderId){var b=C.match(/\{([^{]+?)}\s*$/);b&&b[1]&&(C=b[1])}return y=C,n.helper.isString(r.prefixHeaderId)?v=r.prefixHeaderId:r.prefixHeaderId===!0?v="section-":v="",r.rawPrefixHeaderId||(y=v+y),r.ghCompatibleHeaderId?y=y.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():r.rawHeaderId?y=y.replace(/ /g,"-").replace(/&amp;/g,"&").replace(/¨T/g,"¨").replace(/¨D/g,"$").replace(/["']/g,"-").toLowerCase():y=y.replace(/[^\w]/g,"").toLowerCase(),r.rawPrefixHeaderId&&(y=v+y),a.hashLinkCounts[y]?y=y+"-"+a.hashLinkCounts[y]++:a.hashLinkCounts[y]=1,y}return e=a.converter._dispatch("headers.after",e,r,a),e}),n.subParser("horizontalRule",function(e,r,a){e=a.converter._dispatch("horizontalRule.before",e,r,a);var d=n.subParser("hashBlock")("<hr />",r,a);return e=e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,d),e=e.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,d),e=e.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,d),e=a.converter._dispatch("horizontalRule.after",e,r,a),e}),n.subParser("images",function(e,r,a){e=a.converter._dispatch("images.before",e,r,a);var d=/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,i=/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,c=/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,s=/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,f=/!\[([^\[\]]+)]()()()()()/g;function C(v,b,u,_,j,E,I,A){return _=_.replace(/\s/g,""),y(v,b,u,_,j,E,I,A)}function y(v,b,u,_,j,E,I,A){var x=a.gUrls,G=a.gTitles,X=a.gDimensions;if(u=u.toLowerCase(),A||(A=""),v.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)_="";else if(_===""||_===null)if((u===""||u===null)&&(u=b.toLowerCase().replace(/ ?\n/g," ")),_="#"+u,!n.helper.isUndefined(x[u]))_=x[u],n.helper.isUndefined(G[u])||(A=G[u]),n.helper.isUndefined(X[u])||(j=X[u].width,E=X[u].height);else return v;b=b.replace(/"/g,"&quot;").replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback),_=_.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback);var N='<img src="'+_+'" alt="'+b+'"';return A&&n.helper.isString(A)&&(A=A.replace(/"/g,"&quot;").replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback),N+=' title="'+A+'"'),j&&E&&(j=j==="*"?"auto":j,E=E==="*"?"auto":E,N+=' width="'+j+'"',N+=' height="'+E+'"'),N+=" />",N}return e=e.replace(s,y),e=e.replace(c,C),e=e.replace(i,y),e=e.replace(d,y),e=e.replace(f,y),e=a.converter._dispatch("images.after",e,r,a),e}),n.subParser("italicsAndBold",function(e,r,a){e=a.converter._dispatch("italicsAndBold.before",e,r,a);function d(i,c,s){return c+i+s}return r.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(i,c){return d(c,"<strong><em>","</em></strong>")}),e=e.replace(/\b__(\S[\s\S]*?)__\b/g,function(i,c){return d(c,"<strong>","</strong>")}),e=e.replace(/\b_(\S[\s\S]*?)_\b/g,function(i,c){return d(c,"<em>","</em>")})):(e=e.replace(/___(\S[\s\S]*?)___/g,function(i,c){return/\S$/.test(c)?d(c,"<strong><em>","</em></strong>"):i}),e=e.replace(/__(\S[\s\S]*?)__/g,function(i,c){return/\S$/.test(c)?d(c,"<strong>","</strong>"):i}),e=e.replace(/_([^\s_][\s\S]*?)_/g,function(i,c){return/\S$/.test(c)?d(c,"<em>","</em>"):i})),r.literalMidWordAsterisks?(e=e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,function(i,c,s){return d(s,c+"<strong><em>","</em></strong>")}),e=e.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,function(i,c,s){return d(s,c+"<strong>","</strong>")}),e=e.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,function(i,c,s){return d(s,c+"<em>","</em>")})):(e=e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(i,c){return/\S$/.test(c)?d(c,"<strong><em>","</em></strong>"):i}),e=e.replace(/\*\*(\S[\s\S]*?)\*\*/g,function(i,c){return/\S$/.test(c)?d(c,"<strong>","</strong>"):i}),e=e.replace(/\*([^\s*][\s\S]*?)\*/g,function(i,c){return/\S$/.test(c)?d(c,"<em>","</em>"):i})),e=a.converter._dispatch("italicsAndBold.after",e,r,a),e}),n.subParser("lists",function(e,r,a){function d(s,f){a.gListLevel++,s=s.replace(/\n{2,}$/,`
`),s+="¨0";var C=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,y=/\n[ \t]*\n(?!¨0)/.test(s);return r.disableForced4SpacesIndentedSublists&&(C=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),s=s.replace(C,function(v,b,u,_,j,E,I){I=I&&I.trim()!=="";var A=n.subParser("outdent")(j,r,a),x="";return E&&r.tasklists&&(x=' class="task-list-item" style="list-style-type: none;"',A=A.replace(/^[ \t]*\[(x|X| )?]/m,function(){var G='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return I&&(G+=" checked"),G+=">",G})),A=A.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(G){return"¨A"+G}),b||A.search(/\n{2,}/)>-1?(A=n.subParser("githubCodeBlocks")(A,r,a),A=n.subParser("blockGamut")(A,r,a)):(A=n.subParser("lists")(A,r,a),A=A.replace(/\n$/,""),A=n.subParser("hashHTMLBlocks")(A,r,a),A=A.replace(/\n\n+/g,`

`),y?A=n.subParser("paragraphs")(A,r,a):A=n.subParser("spanGamut")(A,r,a)),A=A.replace("¨A",""),A="<li"+x+">"+A+`</li>
`,A}),s=s.replace(/¨0/g,""),a.gListLevel--,f&&(s=s.replace(/\s+$/,"")),s}function i(s,f){if(f==="ol"){var C=s.match(/^ *(\d+)\./);if(C&&C[1]!=="1")return' start="'+C[1]+'"'}return""}function c(s,f,C){var y=r.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,v=r.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,b=f==="ul"?y:v,u="";if(s.search(b)!==-1)(function j(E){var I=E.search(b),A=i(s,f);I!==-1?(u+=`

<`+f+A+`>
`+d(E.slice(0,I),!!C)+"</"+f+`>
`,f=f==="ul"?"ol":"ul",b=f==="ul"?y:v,j(E.slice(I))):u+=`

<`+f+A+`>
`+d(E,!!C)+"</"+f+`>
`})(s);else{var _=i(s,f);u=`

<`+f+_+`>
`+d(s,!!C)+"</"+f+`>
`}return u}return e=a.converter._dispatch("lists.before",e,r,a),e+="¨0",a.gListLevel?e=e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(s,f,C){var y=C.search(/[*+-]/g)>-1?"ul":"ol";return c(f,y,!0)}):e=e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(s,f,C,y){var v=y.search(/[*+-]/g)>-1?"ul":"ol";return c(C,v,!1)}),e=e.replace(/¨0/,""),e=a.converter._dispatch("lists.after",e,r,a),e}),n.subParser("metadata",function(e,r,a){if(!r.metadata)return e;e=a.converter._dispatch("metadata.before",e,r,a);function d(i){a.metadata.raw=i,i=i.replace(/&/g,"&amp;").replace(/"/g,"&quot;"),i=i.replace(/\n {4}/g," "),i.replace(/^([\S ]+): +([\s\S]+?)$/gm,function(c,s,f){return a.metadata.parsed[s]=f,""})}return e=e.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,function(i,c,s){return d(s),"¨M"}),e=e.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,function(i,c,s){return c&&(a.metadata.format=c),d(s),"¨M"}),e=e.replace(/¨M/g,""),e=a.converter._dispatch("metadata.after",e,r,a),e}),n.subParser("outdent",function(e,r,a){return e=a.converter._dispatch("outdent.before",e,r,a),e=e.replace(/^(\t|[ ]{1,4})/gm,"¨0"),e=e.replace(/¨0/g,""),e=a.converter._dispatch("outdent.after",e,r,a),e}),n.subParser("paragraphs",function(e,r,a){e=a.converter._dispatch("paragraphs.before",e,r,a),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"");for(var d=e.split(/\n{2,}/g),i=[],c=d.length,s=0;s<c;s++){var f=d[s];f.search(/¨(K|G)(\d+)\1/g)>=0?i.push(f):f.search(/\S/)>=0&&(f=n.subParser("spanGamut")(f,r,a),f=f.replace(/^([ \t]*)/g,"<p>"),f+="</p>",i.push(f))}for(c=i.length,s=0;s<c;s++){for(var C="",y=i[s],v=!1;/¨(K|G)(\d+)\1/.test(y);){var b=RegExp.$1,u=RegExp.$2;b==="K"?C=a.gHtmlBlocks[u]:v?C=n.subParser("encodeCode")(a.ghCodeBlocks[u].text,r,a):C=a.ghCodeBlocks[u].codeblock,C=C.replace(/\$/g,"$$$$"),y=y.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,C),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(y)&&(v=!0)}i[s]=y}return e=i.join(`
`),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,""),a.converter._dispatch("paragraphs.after",e,r,a)}),n.subParser("runExtension",function(e,r,a,d){if(e.filter)r=e.filter(r,d.converter,a);else if(e.regex){var i=e.regex;i instanceof RegExp||(i=new RegExp(i,"g")),r=r.replace(i,e.replace)}return r}),n.subParser("spanGamut",function(e,r,a){return e=a.converter._dispatch("spanGamut.before",e,r,a),e=n.subParser("codeSpans")(e,r,a),e=n.subParser("escapeSpecialCharsWithinTagAttributes")(e,r,a),e=n.subParser("encodeBackslashEscapes")(e,r,a),e=n.subParser("images")(e,r,a),e=n.subParser("anchors")(e,r,a),e=n.subParser("autoLinks")(e,r,a),e=n.subParser("simplifiedAutoLinks")(e,r,a),e=n.subParser("emoji")(e,r,a),e=n.subParser("underline")(e,r,a),e=n.subParser("italicsAndBold")(e,r,a),e=n.subParser("strikethrough")(e,r,a),e=n.subParser("ellipsis")(e,r,a),e=n.subParser("hashHTMLSpans")(e,r,a),e=n.subParser("encodeAmpsAndAngles")(e,r,a),r.simpleLineBreaks?/\n\n¨K/.test(e)||(e=e.replace(/\n+/g,`<br />
`)):e=e.replace(/  +\n/g,`<br />
`),e=a.converter._dispatch("spanGamut.after",e,r,a),e}),n.subParser("strikethrough",function(e,r,a){function d(i){return r.simplifiedAutoLink&&(i=n.subParser("simplifiedAutoLinks")(i,r,a)),"<del>"+i+"</del>"}return r.strikethrough&&(e=a.converter._dispatch("strikethrough.before",e,r,a),e=e.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(i,c){return d(c)}),e=a.converter._dispatch("strikethrough.after",e,r,a)),e}),n.subParser("stripLinkDefinitions",function(e,r,a){var d=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,i=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;e+="¨0";var c=function(s,f,C,y,v,b,u){return f=f.toLowerCase(),e.toLowerCase().split(f).length-1<2?s:(C.match(/^data:.+?\/.+?;base64,/)?a.gUrls[f]=C.replace(/\s/g,""):a.gUrls[f]=n.subParser("encodeAmpsAndAngles")(C,r,a),b?b+u:(u&&(a.gTitles[f]=u.replace(/"|'/g,"&quot;")),r.parseImgDimensions&&y&&v&&(a.gDimensions[f]={width:y,height:v}),""))};return e=e.replace(i,c),e=e.replace(d,c),e=e.replace(/¨0/,""),e}),n.subParser("tables",function(e,r,a){if(!r.tables)return e;var d=/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,i=/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;function c(v){return/^:[ \t]*--*$/.test(v)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(v)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(v)?' style="text-align:center;"':""}function s(v,b){var u="";return v=v.trim(),(r.tablesHeaderId||r.tableHeaderId)&&(u=' id="'+v.replace(/ /g,"_").toLowerCase()+'"'),v=n.subParser("spanGamut")(v,r,a),"<th"+u+b+">"+v+`</th>
`}function f(v,b){var u=n.subParser("spanGamut")(v,r,a);return"<td"+b+">"+u+`</td>
`}function C(v,b){for(var u=`<table>
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
`);for(b=0;b<u.length;++b)/^ {0,3}\|/.test(u[b])&&(u[b]=u[b].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(u[b])&&(u[b]=u[b].replace(/\|[ \t]*$/,"")),u[b]=n.subParser("codeSpans")(u[b],r,a);var _=u[0].split("|").map(function(N){return N.trim()}),j=u[1].split("|").map(function(N){return N.trim()}),E=[],I=[],A=[],x=[];for(u.shift(),u.shift(),b=0;b<u.length;++b)u[b].trim()!==""&&E.push(u[b].split("|").map(function(N){return N.trim()}));if(_.length<j.length)return v;for(b=0;b<j.length;++b)A.push(c(j[b]));for(b=0;b<_.length;++b)n.helper.isUndefined(A[b])&&(A[b]=""),I.push(s(_[b],A[b]));for(b=0;b<E.length;++b){for(var G=[],X=0;X<I.length;++X)n.helper.isUndefined(E[b][X]),G.push(f(E[b][X],A[X]));x.push(G)}return C(I,x)}return e=a.converter._dispatch("tables.before",e,r,a),e=e.replace(/\\(\|)/g,n.helper.escapeCharactersCallback),e=e.replace(d,y),e=e.replace(i,y),e=a.converter._dispatch("tables.after",e,r,a),e}),n.subParser("underline",function(e,r,a){return r.underline&&(e=a.converter._dispatch("underline.before",e,r,a),r.literalMidWordUnderscores?(e=e.replace(/\b___(\S[\s\S]*?)___\b/g,function(d,i){return"<u>"+i+"</u>"}),e=e.replace(/\b__(\S[\s\S]*?)__\b/g,function(d,i){return"<u>"+i+"</u>"})):(e=e.replace(/___(\S[\s\S]*?)___/g,function(d,i){return/\S$/.test(i)?"<u>"+i+"</u>":d}),e=e.replace(/__(\S[\s\S]*?)__/g,function(d,i){return/\S$/.test(i)?"<u>"+i+"</u>":d})),e=e.replace(/(_)/g,n.helper.escapeCharactersCallback),e=a.converter._dispatch("underline.after",e,r,a)),e}),n.subParser("unescapeSpecialChars",function(e,r,a){return e=a.converter._dispatch("unescapeSpecialChars.before",e,r,a),e=e.replace(/¨E(\d+)E/g,function(d,i){var c=parseInt(i);return String.fromCharCode(c)}),e=a.converter._dispatch("unescapeSpecialChars.after",e,r,a),e}),n.subParser("makeMarkdown.blockquote",function(e,r){var a="";if(e.hasChildNodes())for(var d=e.childNodes,i=d.length,c=0;c<i;++c){var s=n.subParser("makeMarkdown.node")(d[c],r);s!==""&&(a+=s)}return a=a.trim(),a="> "+a.split(`
`).join(`
> `),a}),n.subParser("makeMarkdown.codeBlock",function(e,r){var a=e.getAttribute("language"),d=e.getAttribute("precodenum");return"```"+a+`
`+r.preList[d]+"\n```"}),n.subParser("makeMarkdown.codeSpan",function(e){return"`"+e.innerHTML+"`"}),n.subParser("makeMarkdown.emphasis",function(e,r){var a="";if(e.hasChildNodes()){a+="*";for(var d=e.childNodes,i=d.length,c=0;c<i;++c)a+=n.subParser("makeMarkdown.node")(d[c],r);a+="*"}return a}),n.subParser("makeMarkdown.header",function(e,r,a){var d=new Array(a+1).join("#"),i="";if(e.hasChildNodes()){i=d+" ";for(var c=e.childNodes,s=c.length,f=0;f<s;++f)i+=n.subParser("makeMarkdown.node")(c[f],r)}return i}),n.subParser("makeMarkdown.hr",function(){return"---"}),n.subParser("makeMarkdown.image",function(e){var r="";return e.hasAttribute("src")&&(r+="!["+e.getAttribute("alt")+"](",r+="<"+e.getAttribute("src")+">",e.hasAttribute("width")&&e.hasAttribute("height")&&(r+=" ="+e.getAttribute("width")+"x"+e.getAttribute("height")),e.hasAttribute("title")&&(r+=' "'+e.getAttribute("title")+'"'),r+=")"),r}),n.subParser("makeMarkdown.links",function(e,r){var a="";if(e.hasChildNodes()&&e.hasAttribute("href")){var d=e.childNodes,i=d.length;a="[";for(var c=0;c<i;++c)a+=n.subParser("makeMarkdown.node")(d[c],r);a+="](",a+="<"+e.getAttribute("href")+">",e.hasAttribute("title")&&(a+=' "'+e.getAttribute("title")+'"'),a+=")"}return a}),n.subParser("makeMarkdown.list",function(e,r,a){var d="";if(!e.hasChildNodes())return"";for(var i=e.childNodes,c=i.length,s=e.getAttribute("start")||1,f=0;f<c;++f)if(!(typeof i[f].tagName>"u"||i[f].tagName.toLowerCase()!=="li")){var C="";a==="ol"?C=s.toString()+". ":C="- ",d+=C+n.subParser("makeMarkdown.listItem")(i[f],r),++s}return d+=`
<!-- -->
`,d.trim()}),n.subParser("makeMarkdown.listItem",function(e,r){for(var a="",d=e.childNodes,i=d.length,c=0;c<i;++c)a+=n.subParser("makeMarkdown.node")(d[c],r);return/\n$/.test(a)?a=a.split(`
`).join(`
    `).replace(/^ {4}$/gm,"").replace(/\n\n+/g,`

`):a+=`
`,a}),n.subParser("makeMarkdown.node",function(e,r,a){a=a||!1;var d="";if(e.nodeType===3)return n.subParser("makeMarkdown.txt")(e,r);if(e.nodeType===8)return"<!--"+e.data+`-->

`;if(e.nodeType!==1)return"";var i=e.tagName.toLowerCase();switch(i){case"h1":a||(d=n.subParser("makeMarkdown.header")(e,r,1)+`

`);break;case"h2":a||(d=n.subParser("makeMarkdown.header")(e,r,2)+`

`);break;case"h3":a||(d=n.subParser("makeMarkdown.header")(e,r,3)+`

`);break;case"h4":a||(d=n.subParser("makeMarkdown.header")(e,r,4)+`

`);break;case"h5":a||(d=n.subParser("makeMarkdown.header")(e,r,5)+`

`);break;case"h6":a||(d=n.subParser("makeMarkdown.header")(e,r,6)+`

`);break;case"p":a||(d=n.subParser("makeMarkdown.paragraph")(e,r)+`

`);break;case"blockquote":a||(d=n.subParser("makeMarkdown.blockquote")(e,r)+`

`);break;case"hr":a||(d=n.subParser("makeMarkdown.hr")(e,r)+`

`);break;case"ol":a||(d=n.subParser("makeMarkdown.list")(e,r,"ol")+`

`);break;case"ul":a||(d=n.subParser("makeMarkdown.list")(e,r,"ul")+`

`);break;case"precode":a||(d=n.subParser("makeMarkdown.codeBlock")(e,r)+`

`);break;case"pre":a||(d=n.subParser("makeMarkdown.pre")(e,r)+`

`);break;case"table":a||(d=n.subParser("makeMarkdown.table")(e,r)+`

`);break;case"code":d=n.subParser("makeMarkdown.codeSpan")(e,r);break;case"em":case"i":d=n.subParser("makeMarkdown.emphasis")(e,r);break;case"strong":case"b":d=n.subParser("makeMarkdown.strong")(e,r);break;case"del":d=n.subParser("makeMarkdown.strikethrough")(e,r);break;case"a":d=n.subParser("makeMarkdown.links")(e,r);break;case"img":d=n.subParser("makeMarkdown.image")(e,r);break;default:d=e.outerHTML+`

`}return d}),n.subParser("makeMarkdown.paragraph",function(e,r){var a="";if(e.hasChildNodes())for(var d=e.childNodes,i=d.length,c=0;c<i;++c)a+=n.subParser("makeMarkdown.node")(d[c],r);return a=a.trim(),a}),n.subParser("makeMarkdown.pre",function(e,r){var a=e.getAttribute("prenum");return"<pre>"+r.preList[a]+"</pre>"}),n.subParser("makeMarkdown.strikethrough",function(e,r){var a="";if(e.hasChildNodes()){a+="~~";for(var d=e.childNodes,i=d.length,c=0;c<i;++c)a+=n.subParser("makeMarkdown.node")(d[c],r);a+="~~"}return a}),n.subParser("makeMarkdown.strong",function(e,r){var a="";if(e.hasChildNodes()){a+="**";for(var d=e.childNodes,i=d.length,c=0;c<i;++c)a+=n.subParser("makeMarkdown.node")(d[c],r);a+="**"}return a}),n.subParser("makeMarkdown.table",function(e,r){var a="",d=[[],[]],i=e.querySelectorAll("thead>tr>th"),c=e.querySelectorAll("tbody>tr"),s,f;for(s=0;s<i.length;++s){var C=n.subParser("makeMarkdown.tableCell")(i[s],r),y="---";if(i[s].hasAttribute("style")){var v=i[s].getAttribute("style").toLowerCase().replace(/\s/g,"");switch(v){case"text-align:left;":y=":---";break;case"text-align:right;":y="---:";break;case"text-align:center;":y=":---:";break}}d[0][s]=C.trim(),d[1][s]=y}for(s=0;s<c.length;++s){var b=d.push([])-1,u=c[s].getElementsByTagName("td");for(f=0;f<i.length;++f){var _=" ";typeof u[f]<"u"&&(_=n.subParser("makeMarkdown.tableCell")(u[f],r)),d[b].push(_)}}var j=3;for(s=0;s<d.length;++s)for(f=0;f<d[s].length;++f){var E=d[s][f].length;E>j&&(j=E)}for(s=0;s<d.length;++s){for(f=0;f<d[s].length;++f)s===1?d[s][f].slice(-1)===":"?d[s][f]=n.helper.padEnd(d[s][f].slice(-1),j-1,"-")+":":d[s][f]=n.helper.padEnd(d[s][f],j,"-"):d[s][f]=n.helper.padEnd(d[s][f],j);a+="| "+d[s].join(" | ")+` |
`}return a.trim()}),n.subParser("makeMarkdown.tableCell",function(e,r){var a="";if(!e.hasChildNodes())return"";for(var d=e.childNodes,i=d.length,c=0;c<i;++c)a+=n.subParser("makeMarkdown.node")(d[c],r,!0);return a.trim()}),n.subParser("makeMarkdown.txt",function(e){var r=e.nodeValue;return r=r.replace(/ +/g," "),r=r.replace(/¨NBSP;/g," "),r=n.helper.unescapeHTMLEntities(r),r=r.replace(/([*_~|`])/g,"\\$1"),r=r.replace(/^(\s*)>/g,"\\$1>"),r=r.replace(/^#/gm,"\\#"),r=r.replace(/^(\s*)([-=]{3,})(\s*)$/,"$1\\$2$3"),r=r.replace(/^( {0,3}\d+)\./gm,"$1\\."),r=r.replace(/^( {0,3})([+-])/gm,"$1\\$2"),r=r.replace(/]([\s]*)\(/g,"\\]$1\\("),r=r.replace(/^ {0,3}\[([\S \t]*?)]:/gm,"\\[$1]:"),r});var $=this;t.exports?t.exports=n:$.showdown=n}).call(fa)}(ve)),ve.exports}var ha=pa();const ma=la(ha);function te({class:t,...o},l){const n=Q(t),P=new ma.Converter().makeHtml(l),T=p.div({class:`style-markup ${n.val}`,innerHTML:P,...o});return Prism.highlightAllUnder(T),T}const se={NONE:"none",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},U={HOVER_IN:"hover-in",HOVER_OUT:"hover-out",HOVER:"hover",CLICK:"click",FOCUS:"focus",FOCUS_IN:"focus-in",FOCUS_OUT:"focus-out"},Ee=p.div({name:"Popups",class:"fixed inset-0 z-[100] pointer-events-none"});ce(document.documentElement,Ee);function Le({visible:t=L(!1),direction:o=se.BOTTOM,trigger:l=U.CLICK,name:n,class:h,...P},...T){const M=Q(h);let z;const F=L({height:0,width:0,left:0,top:0,yOffset:0,xOffset:0}),H=async()=>{if(!z)return;if(!m.isConnected)return D();if(!m.parentElement)throw new Error("Popup target has been removed from DOM");const w=m.parentElement.getBoundingClientRect();F.val={top:w.top,left:w.left,width:w.width,height:w.height,xOffset:0,yOffset:0},await Se();const k=Ee.getBoundingClientRect(),S=z.popup.getBoundingClientRect(),$={x:Math.max(-S.left,0),y:Math.max(-S.top,0)},e={x:Math.min(k.width-S.left-S.width,0),y:Math.min(k.height-S.top-S.height,0)};F.val={...F.val,xOffset:$.x+e.x,yOffset:$.y+e.y}},B=()=>{const w=ea(o,[[se.NONE,""],[se.TOP,"bottom-full mb-1"],[se.RIGHT,"left-full ml-1"],[se.BOTTOM,"top-full mt-1"],[se.LEFT,"right-full mr-1"]]),k=p.div({name:`${n} Popup`,class:()=>`absolute pointer-events-auto ${w} ${M.val}`,...P},T),S=p.div({name:`${n} Popup Anchor`,class:()=>"absolute transition pointer-events-none",style:()=>`left: ${F.val.left+F.val.xOffset}px; top: ${F.val.top+F.val.yOffset}px; height: ${F.val.height}px; width: ${F.val.width}px;`},k),$=Xe(k,()=>Se().then(()=>t.val=!1));ce(Ee,S),z={anchor:S,popup:k,abortController:$}},D=()=>{z==null||z.anchor.remove(),z==null||z.popup.remove(),z==null||z.abortController.abort(),z=void 0},J=()=>{if(!m.parentElement)throw new Error("Popup target has been removed from DOM");oe(l,[U.HOVER,U.HOVER_IN])&&m.parentElement.addEventListener("mouseenter",()=>t.val=!0),oe(l,[U.HOVER,U.HOVER_OUT])&&m.parentElement.addEventListener("mouseleave",()=>t.val=!1),oe(l,U.CLICK)&&m.parentElement.addEventListener("click",()=>t.val=!0),oe(l,[U.FOCUS,U.FOCUS_IN])&&m.parentElement.addEventListener("focusin",()=>t.val=!0),oe(l,[U.FOCUS,U.FOCUS_OUT])&&m.parentElement.addEventListener("focusout",()=>t.val=!1)};ae(async()=>{if(!t.val)return D();z||B(),H()});const m=p.div({name:`${n} Popup Target`,hidden:!0});window.addEventListener("resize",H);const g=new ResizeObserver(H);return Se().then(()=>g.observe(m.parentElement)).then(()=>J()),m}function ga({options:t,value:o=L(void 0),required:l,class:n,...h}){const P=Q(n);return p.div({class:"flex flex-col gap-1 group"},t.map(T=>{const M=ae(()=>o.val===T.value);return p.div({name:"Radio",onclick:()=>o.val=M.val?void 0:T.value,"data-selected":ee(()=>M.val||void 0),class:()=>{var z;return`group flex cursor-pointer justify-between items-center gap-2 select-none group-has-invalid:mood-critical ${(z=P.val)==null?void 0:z.split(" ").filter(F=>!F.includes("variant")).join(" ")}`},...h},T.name??String(T.value),de({disabled:T.disabled,tabIndex:0,class:()=>{var z;return`button size-5 rounded-full focus-visible:mood-accent ${(z=P.val)==null?void 0:z.split(" ").filter(F=>F.includes("variant")).join(" ")}`}},p.div({class:"bg-current rounded-full size-2.5 aspect-square not-group-data-selected:hidden"})))}),p.input({type:"checkbox",checked:()=>o.val!==void 0,required:l,hidden:!0}))}function K({options:t,value:o=L(t[0].value),useChips:l=!1,lead:n,trail:h,class:P,...T}){const M=Q(P),z=ae(()=>{var m;return(m=M.val)==null?void 0:m.split(" ").find(g=>g.includes("mood-"))}),F=ae(()=>Array.isArray(o.val)),H=ae(()=>o.val===void 0||Array.isArray(o.val)&&o.val.length===0),B=L(!1),D=m=>{if(Array.isArray(o.val))return o.val=Ye(o.val,m);o.val=m};return de({name:"Select",class:()=>`flex rounded-lg button gap-2 justify-between focus-visible:mood-accent ${M.val}`,tabIndex:0,onclick:()=>B.val=!B.val,...T},n,()=>p.div({name:"Value Display",class:()=>`text-nowrap text-ellipsis overflow-hidden ${H.val?"text-foreground-weak":""} ${l?"flex flex-wrap gap-1":""} ${B.val?"invisible":""}`},H.val?"None":Array.isArray(o.val)?l?o.val.map(m=>de({class:"group mood-accent text-xs variant-soft rounded relative",onclick:g=>{g.stopPropagation(),D(m)}},p.span({class:"group-hover:opacity-25"},String(m)),p.i({class:"not-group-hover:hidden absolute right-1"},"close"))):o.val.map(m=>String(m)).join(", "):String(o.val)),h,ne.svg({viewBox:"0 0 100 100",class:"size-4 flex-none",style:"stroke-linecap:round; stroke-linejoin:round;"},ne.path({d:"M25,35L50,15L75,35",class:"stroke-current stroke-[10] fill-none",hidden:ee(()=>!F.val||void 0)}),ne.path({d:"M25,65L50,85L75,65",class:"stroke-current stroke-[10] fill-none",hidden:ee(()=>!F.val||void 0)}),ne.path({d:"M25,40L50,60L75,40",class:"stroke-current stroke-[10] fill-none",hidden:ee(()=>F.val||void 0)})),Le({name:"Select Content",visible:B,direction:"none",class:()=>`left-1/2 -translate-x-1/2 min-w-full max-h-40 overflow-y-auto card vessel shadow-lg p-1 rounded-lg card glass select-none ${z.val}`},()=>p.ul({name:"Select Options",class:"flex flex-col"},t.map(m=>{const g=ae(()=>oe(o.val,m.value));return va(m,F,g,D)}))))}function va(t,o,l,n){return p.div({"data-selected":ee(()=>l.val||void 0),class:"contents group"},p.span({name:"Magic divider",class:"h-[1px] mx-1 pointer-events-none bg-surface-500/15 group-first:hidden group-hover:invisible group-data-selected:invisible [*:hover_+_*_>_&]:invisible [*[data-selected]_+_*_>_&]:invisible "}),p.button({class:"flex gap-2 not-disabled:hover:bg-surface-500/20 not-disabled:focus-visible:bg-surface-500/20 not-disabled:focus-visible:focus-ring disabled:bg-transparent px-1 rounded cursor-pointer justify-between disabled:opacity-50 disabled:cursor-not-allowed items-center group-data-selected:mood-accent group-data-selected:!bg-mood-500/25",disabled:ee(()=>t.disabled||void 0),tabIndex:0,onclick:()=>n==null?void 0:n(t.value)},p.span({class:"text-nowrap"},t.name??String(t.value)),ne.svg({viewBox:"0 0 100 100",class:"size-4 not-group-data-selected:invisible",style:"stroke-linecap:round; stroke-linejoin:round;",hidden:ee(()=>!o.val||void 0)},ne.path({d:"M20,60L40,80L80,20",class:"stroke-current stroke-[10] fill-none"})),p.div({class:"bg-current rounded-full size-2 m-0.75 aspect-square not-group-data-selected:invisible",hidden:ee(()=>o.val||void 0)})))}function _a({class:t},o){const l=Q(t),n=[...o.querySelectorAll("h1, h2, h3, h4, h5")];let h=L(n[0]);return document.addEventListener("scroll",()=>{n.some((P,T)=>{if(P.getBoundingClientRect().bottom>o.scrollTop+112)return h.val=n[Math.max(T-1,0)],!0})}),p.ul({class:()=>`flex flex-col ${l.val}`},[...n].map(P=>{const T=parseInt(P.tagName.slice(1))-1;return p.li({onclick:()=>P.scrollIntoView({behavior:"smooth"}),"data-indented":ee(()=>T),"data-selected":ee(()=>h.val===P),style:`--indent: ${1+(T-1)*.5}rem;`,class:"group relative flex gap-4 cursor-pointer text-mood-weak not-data-selected:hover:text-foreground data-selected:mood-accent data-selected:text-mood"},p.span({name:"Divider",class:"absolute h-full w-px left-0 bg-current/50 group-data-selected:bg-current not-group-data-indented:hidden group-hover:w-[4px] group-data-selected:w-[4px] transition-all"}),p.span({name:"Title",class:"group-data-indented:ml-(--indent) justify-start group-data-selected:font-semibold flex-1 py-0.5 z-1 transition-all"},P.textContent))}))}function we({value:t=L(void 0),type:o=t.rawVal!==void 0?typeof t.rawVal:"text",placeholder:l=`Enter ${o}...`,required:n=!1,lead:h,trail:P,onValueChanged:T,onValidityChanged:M,class:z,...F},...H){const B=Q(z),D=m=>{var w;const g=(w=m.target)==null?void 0:w.value;typeof t.val=="number"&&Number(g)?t.val=Number(g):typeof t.val=="string"&&(t.val=g),T==null||T(t.rawVal),M==null||M(J.checkValidity())},J=p.input({class:"input flex-1",type:o,value:()=>t.val??"",oninput:D,placeholder:l,required:n});return p.div({name:"Text Input",class:()=>`flex p-0 *:first:pl-2 *:last:pr-2 gap-2 *:py-1 has-focus-visible:mood-accent  has-invalid:has-invalid:mood-critical ${B.val}`,...F},()=>["boolean","string","number","bigint"].includes(typeof h)?p.span(h):h,J,H,()=>["boolean","string","number","bigint"].includes(typeof P)?p.span(P):P)}function Ae({trigger:t=[U.HOVER,U.FOCUS],direction:o=se.BOTTOM,class:l,...n},...h){const P=Q(l);return Le({trigger:t,direction:o,class:()=>`variant-soft-outline badge glass px-2 py-1 max-w-xs text-xs flex ${P.val}`,...n},h)}function q(...t){const o=p.div({class:"language-typescript w-2xl *:scroll-m-21"},...t),l=_a({class:"sticky top-24 w-xs not-xl:hidden"},o);return p.div({class:"flex gap-8 items-start"},o,l)}function ba(){return q(te({class:"language-typescript w-2xl *:scroll-m-21"},Ke))}const wa=Object.freeze(Object.defineProperty({__proto__:null,default:ba},Symbol.toStringTag,{value:"Module"})),ya=`# Derive

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
`;function ka(){return q(te({class:"language-typescript w-2xl *:scroll-m-21"},ya))}const Pa=Object.freeze(Object.defineProperty({__proto__:null,default:ka},Symbol.toStringTag,{value:"Module"})),Sa=`# Elements

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
`;function Ca(){return q(te({class:"language-typescript w-2xl *:scroll-m-21"},Sa))}const ja=Object.freeze(Object.defineProperty({__proto__:null,default:Ca},Symbol.toStringTag,{value:"Module"}));function Ma(){const t=L(`<div>
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
</div>`),o=p.textarea({value:t,oninput:l=>t.val=l.target.value,class:"variant-soft-outline w-full h-64"});return q(p.h1("Converter"),p.blockquote(p.p("Create Savant code from HTML.")),p.h2("Overview"),o,R({content:"Tags"},()=>V({language:"typescript"})),R({content:"Components"},()=>"None"),R({content:"Code"},()=>V({language:"typescript"})))}const Ea=Object.freeze(Object.defineProperty({__proto__:null,default:Ma},Symbol.toStringTag,{value:"Module"})),Aa=`# Router

> Manage site navigation.
`;function za(){return q(te({class:"language-typescript"},Aa))}const Ta=Object.freeze(Object.defineProperty({__proto__:null,default:za},Symbol.toStringTag,{value:"Module"}));function $a(){const t=L("variant-filled"),o=L("mood-accent");return q(p.h1("Badge"),p.blockquote("Delivers small but important pieces of information."),p.h2("Design"),p.p("Badges are designed to be a small, unobtrusive elements that convey important information concisely. It is typically used to highlight new or unread items, notifications, or status updates."),p.p("Badges use a smaller font size and padding to make them the same height as standard text, ensuring it fits seamlessly into layouts."),p.p("Badges color the text slightly based on mood to indicate they are not interactive, differentiating them from small buttons which instead use the standard foreground text color."),p.h2("Demo"),p.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},p.div({class:"p-8 h-48 flex items-center"},Ue({class:()=>`${t.val} ${o.val}`},"Demo Badge")),p.div({class:"flex flex-wrap gap-4 justify-center"},R({content:"Variant",class:"items-center"},K({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:t,class:"variant-outline w-48"})),R({content:"Mood",class:"items-center"},K({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:o,class:"variant-outline w-48"})))),()=>V({language:"ts"},`import { Badge } from "savant/ui"

Badge(
    { class: "${t.val} ${o.val}" },
    "Demo Badge",
)`),p.h2("Signature"),V({language:"ts"},`function Badge(
    props: HTMLElementProps,
    ...children: ChildDom[]
): HTMLElement`))}const Oa=Object.freeze(Object.defineProperty({__proto__:null,default:$a},Symbol.toStringTag,{value:"Module"}));function La(){const t=L("variant-filled"),o=L("mood-accent"),l=L([]);return q(p.h1("Button"),p.blockquote("Performs some action on user click."),p.h2("Design"),p.p("Button components are used when a specific, clear and manual action needs to be performed by the user.."),p.h2("Demo"),p.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},p.div({class:"p-8 h-48 flex items-center"},de({class:()=>`${[t.val,o.val,...l.val].join(" ")}`},"Demo Button")),p.div({class:"flex flex-wrap gap-4 justify-center"},R({content:"Variant",class:"items-center"},K({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:t,class:"variant-outline w-48"})),R({content:"Mood",class:"items-center"},K({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:o,class:"variant-outline w-48"})),R({content:"Extras",class:"items-center"},K({options:[{value:"transition"},{value:"hover:raised"},{value:"active:lowered"}],value:l,class:"variant-outline w-48"})))),()=>V({language:"ts"},`import { Button } from "savant/ui"

Button(
    { class: "${[t.val,o.val,...l.val].join(" ")}" },
    "Demo Button",
)`),p.h2("Signature"),V({language:"ts"},`function Button(
    props: HTMLButtonProps,
    ...children: ChildDom[]
): HTMLButtonElement`))}const Fa=Object.freeze(Object.defineProperty({__proto__:null,default:La},Symbol.toStringTag,{value:"Module"}));function Ba(){const t=L("variant-soft-outline"),o=L("mood-none");return q(p.h1("Checkbox"),p.blockquote("Offers clear binary choices."),p.h2("Demo"),p.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},p.div({class:"p-8 h-48 flex items-center"},Oe({class:()=>`w-48 ${t.val} ${o.val}`},"Demo Checkbox")),p.div({class:"flex flex-wrap gap-4 justify-center"},R({content:"Variant",class:"items-center"},K({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:t,class:"variant-outline w-48"})),R({content:"Mood",class:"items-center"},K({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:o,class:"variant-outline w-48"})))),()=>V({language:"ts"},`import { Checkbox } from "savant/ui"

Checkbox(
    { class: \`${t.val} ${o.val}\` },
    "Demo Checkbox",
)`),p.h2("Signature"),V({language:"ts"},`function Checkbox(
    props: {
        value: State<boolean> = state(false),
        required: boolean = false,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`))}const Ia=Object.freeze(Object.defineProperty({__proto__:null,default:Ba},Symbol.toStringTag,{value:"Module"}));function Ha(){const t=L("variant-outline"),o=L("mood-accent"),l=L(!0),n=L(50);return q(p.h1("Circular Progress Bar"),p.blockquote("Displays the progress state of a lengthy process."),p.h2("Design"),p.p("Circular Progress Bars are used to compactly provide feedback to the user on the current progress state of a lengthy process."),p.p("Circular Progress Bars default to matching the size of enclosing text flows, ensuring they fit seamlessly into layouts."),p.p("Circular Progress Bars can be given children which will be displayed within the circle. Such children should be short, typically a percentage or number. Anything longer should be placed beneath the progress bar."),p.h2("Demo"),p.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},p.div({class:"p-8 h-48 flex items-center"},ia({progress:n,indefinite:l,class:()=>`${t.val} ${o.val}`},"Loading...")),p.div({class:"flex flex-wrap gap-4 justify-center"},R({content:"Variant",class:"items-center"},K({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:t,class:"variant-outline w-48"})),R({content:"Mood",class:"items-center"},K({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:o,class:"variant-outline w-48"})),R({content:"Progress",class:"items-center"},we({value:n,min:0,max:100,class:"variant-outline w-48"})),R({content:"Indefinite",class:"items-center"},Oe({value:l,class:"variant-outline w-48"},"Enabled")))),()=>V({language:"ts"},`import { CircularProgressBar } from "savant/ui"

CircularProgressBar(
    {
        progress: ${n.val},
        indefinite: ${l.val},
        class: "${t.val} ${o.val}"
    },
    "Loading...",
)`),p.h2("Signature"),V({language:"ts"},`function CircularProgressBar(
    {
        progress?: number = 50,
        indefinite?: boolean = false,

        ...restProps
    }: CircularProgressBarProps,
    ...children: ChildDom[]
): HTMLElement`))}const Ra=Object.freeze(Object.defineProperty({__proto__:null,default:Ha},Symbol.toStringTag,{value:"Module"}));function Da(){return q(p.h1("Code"),p.blockquote("Simple code syntax highlighting via ",p.a({href:"https://prismjs.com",class:"anchor"},"PrismJS"),"."),oa({class:"mood-info p",icon:"info"},te({class:"language-typescript"},"Every code snippet in these docs uses the `Code` component.")),p.h2("Demo"),()=>V({language:"ts"},`import { Code } from "savant/ui"

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
): HTMLElement`))}const Va=Object.freeze(Object.defineProperty({__proto__:null,default:Da},Symbol.toStringTag,{value:"Module"}));function xa(){const t=L("text"),o=L("variant-soft-outline"),l=L("mood-none");return q(p.h1("Input"),p.blockquote("Direct entry of text or numbers."),p.h2("Demo"),p.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},p.div({class:"p-8 h-48 flex flex-col justify-center gap-8"},()=>we({value:L(t.val==="text"?"Example text":42),class:()=>`${o.val} ${l.val}`})),p.div({class:"flex flex-wrap gap-4 justify-center"},R({content:"Type",class:"items-center"},K({options:[{value:"text"},{value:"number"}],value:t,class:"variant-outline w-48"})),R({content:"Variant",class:"items-center"},K({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:o,class:"variant-outline w-48"})),R({content:"Mood",class:"items-center"},K({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:l,class:"variant-outline w-48"})))),()=>V({language:"ts"},`import { Input } from "savant/ui"

Input({
    value: state(${t.val==="text"?'"Example text"':42}),
    class: "${o.val} ${l.val}"
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
): HTMLElement`))}const Na=Object.freeze(Object.defineProperty({__proto__:null,default:xa},Symbol.toStringTag,{value:"Module"}));function Ua(){const t=L([U.CLICK]);return q(p.h1("Popup"),p.blockquote("Versatile dynamic content floating near its parent."),p.h2("Demo"),p.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},p.div({class:"p-8 h-48 flex justify-center flex-col gap-8 w-3xs"},de({class:"variant-filled"},"Popup Trigger",()=>Le({trigger:t.val,class:"card glass vessel flex flex-col shadow"},"Hello! Click outside me to close."))),p.div({class:"flex flex-wrap gap-4 justify-center"},R({content:"Trigger",class:"items-center"},K({options:[{value:U.CLICK},{value:U.HOVER},{value:U.HOVER_IN},{value:U.HOVER_OUT},{value:U.FOCUS},{value:U.FOCUS_IN},{value:U.FOCUS_OUT}],value:t,class:"variant-outline w-48"})))),()=>V({language:"ts"},`import { Button, Popup } from "savant/ui"

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
),`),p.h2("Signature"),V({language:"ts"},`function Popup(
    props: {
        visible: State<boolean> = state(false),
        direction: PopupDirection = PopupDirection.BOTTOM,
        trigger: PopupTrigger = PopupTrigger.CLICK,
        ...HTMLElementProps
    },
    ...children: ChildDom[]
): HTMLElement`))}const qa=Object.freeze(Object.defineProperty({__proto__:null,default:Ua},Symbol.toStringTag,{value:"Module"}));function Ga(){const t=L("variant-soft-outline"),o=L("mood-none");return q(p.h1("Radio"),p.blockquote("Offers a clear and direct set of exclusive options."),p.h2("Demo"),p.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},p.div({class:"p-8 h-48 flex items-center"},ga({value:L("Option 1"),options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"}],class:()=>`w-48 ${t.val} ${o.val}`})),p.div({class:"flex flex-wrap gap-4 justify-center"},R({content:"Variant",class:"items-center"},K({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:t,class:"variant-outline w-48"})),R({content:"Mood",class:"items-center"},K({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:o,class:"variant-outline w-48"})))),()=>V({language:"ts"},`import { Radio } from "savant/ui"

Radio({
    value: state("Option 1"),
    options: [
        { value: "Option 1" },
        { value: "Option 2" },
        { value: "Option 3" },
    ],
    class: "${t.val} ${o.val}",
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
}`))}const Wa=Object.freeze(Object.defineProperty({__proto__:null,default:Ga},Symbol.toStringTag,{value:"Module"})),le={SINGLE:"single",MULTICHIPS:"multichips"};function Za(){const t=L(le.SINGLE),o=L("variant-soft-outline"),l=L("mood-none");return q(p.h1("Select"),p.blockquote("Enables compact selection of one or more options."),p.h2("Demo"),p.div({name:"Demo",class:"card vessel flex flex-col items-center gap-4"},p.div({class:"p-8 flex flex-col justify-center gap-8 w-3xs h-48"},()=>K({value:t.val===le.SINGLE?L("Option 1"):L(["Option 1","Option 2"]),options:[{value:"Option 1"},{value:"Option 2",disabled:!0},{value:"Option 3"},{value:"Option 4"}],useChips:t.val===le.MULTICHIPS,class:()=>`${o.val} ${l.val}`})),p.div({class:"flex flex-wrap gap-4 justify-center"},R({content:"Type",class:"items-center"},K({options:[{value:"single"},{value:"multi"},{value:"multichips"}],value:t,class:"variant-outline w-48"})),R({content:"Variant",class:"items-center"},K({options:[{value:"variant-outline"},{value:"variant-soft"},{value:"variant-soft-outline"},{value:"variant-filled"}],value:o,class:"variant-outline w-48"})),R({content:"Mood",class:"items-center"},K({options:[{value:"mood-none"},{value:"mood-accent"},{value:"mood-info"},{value:"mood-success"},{value:"mood-warning"},{value:"mood-critical"}],value:l,class:"variant-outline w-48"})))),()=>V({language:"ts"},`import { Select } from "savant/ui"

Select({
    value: state(${t.val===le.SINGLE?'"Option 1"':'["Option 1", "Option 2"])'}),
    options: [
        { value: "Option 1" },
        { value: "Option 2", disabled: true },
        { value: "Option 3" },
        { value: "Option 4" },
    ],${t.val===le.MULTICHIPS?`
    useChips: true,`:""}
    class: "${o.val} ${l.val}",
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
}`))}const Ka=Object.freeze(Object.defineProperty({__proto__:null,default:Za},Symbol.toStringTag,{value:"Module"}));function Ja(){return q(p.h1("Tooltip"),p.blockquote("Provides concise contextual extra information."),p.h2("Demo"),p.div({class:"card vessel flex flex-col items-center gap-4"},p.div({class:"p-8 flex flex-col gap-8 w-3xs h-48 justify-center"},de({class:"variant-base text-accent font-bold"},"Tooltip (Hover Me)",Ae({direction:"top",class:"left-1/2 -translate-x-1/2"},"Demo Tooltip")))),()=>V({language:"ts"},`import { Button, Tooltip } from "savant/ui"

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
): HTMLElement`))}const Qa=Object.freeze(Object.defineProperty({__proto__:null,default:Ja},Symbol.toStringTag,{value:"Module"}));function Ya(){const t=L(""),o=L(""),l=L(!1),n=L(!1),h=L(!1);return ca({name:"Sign In",class:"flex flex-col gap-4"},p.span({class:"text-xl font-bold"},"Sign In"),R({content:"Username"},we({type:"username",value:t,placeholder:"Enter username...",required:!0,lead:je("person"),class:"variant-outline"})),R({content:p.span({class:"flex flex-1 justify-between items-center"},"Password",de({type:"button",class:"mood-accent text-mood"},"Forgot?"))},we({type:()=>n.val?"text":"password",value:o,placeholder:"Enter password...",required:!0,lead:je("key"),trail:de({onclick:()=>n.val=!n.val},je({class:()=>`transition ${n.val?"":"text-foreground-weak"}`},()=>n.val?"visibility":"visibility_off")),onValidityChanged:P=>h.val=P,class:"variant-outline"})),Oe({value:l,class:"variant-outline"},p.span({class:"text-mini text-mood-weak"},"Remember Password")),p.div({class:"flex gap-4 justify-end"},de({type:"button",class:"variant-base hover:variant-soft"},"Cancel"),de({type:"button",class:"variant-filled mood-accent"},"Sign In")))}function Xa(){return q(p.h1("Sign In"),p.blockquote("Example Sign In component."),p.h2("Demo"),p.div({class:"card vessel bg-zebra zebra-opacity-20 flex flex-col items-center gap-4"},p.div({class:"p-8 card vessel bg-background flex items-center"},Ya())),p.h2("Code"),V({language:"typescript"},`function SignIn() {
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
}`))}const er=Object.freeze(Object.defineProperty({__proto__:null,default:Xa},Symbol.toStringTag,{value:"Module"})),ar="/Savant/assets/logo-BRWjpkZq.svg";function rr(){const t="flex gap-4 items-center";return p.header({name:"Header",class:"bg-background-translucent fixed top-0 flex w-full justify-between gap-4 px-6 py-2 glass border-b border-surface-500/50 z-10"},p["left-content"]({class:t},p.img({src:ar,class:"size-12 -m-2 not-dark:brightness-0"}),p.span({class:"text-xl font-bold"},"Savant"),Ue({class:"cursor-help variant-filled mood-info rounded-full px-1 py-0.5"},p.i("construction"),Ae({class:"mood-info"},"Savant is still under construction"))),p["right-content"]({class:t},p.a({name:"GitHub",class:"variant-base !rounded-full **:fill-current hover:variant-soft text-lg !p-2",href:"https://github.com/OscarCookeAbbott/Savant",target:"_blank"},ne.svg({viewBox:"0 0 1024 1024",class:"size-[1em]"},ne.path({transform:"scale(64)",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"})),Ae({class:"right-0"},"Savant GitHub"))))}const qe=L(""),Fe=L(window.location.pathname),Be=L(window.location.hash),De=L({}),Ve=L({}),nr="/",dr=()=>Fe.val.slice(nr.length-1)+Be.val,tr=(t,{replace:o}={replace:!1})=>{const l=`${qe.val}${t}`;o?window.history.replaceState({},"",l):window.history.pushState({},"",l),Fe.val=l.split("#")[0],Be.val=l.split("#").length>1?"#"+l.split("#")[1]:""};function ur({replace:t=!1,disabled:o=!1,onclick:l,href:n,class:h,...P},...T){const M=Q(h);return p.a({href:n,onclick(z){z.preventDefault();const F=aa(n);o||F===void 0||(tr(String(F),{replace:t}),typeof l=="function"&&l.call(this,z))},tabIndex:0,class:()=>`not-disabled:focus-visible:focus-ring ${M.val}`,...P},...T)}const sr=/:([^\\d|^/]([^/]+)?)/;let Me;function or({routes:t,basename:o}){const l=p.div({name:"Savant Router",style:"display: contents;"}),n=M=>{if(!M)return"";for(M.startsWith("/")||(M="/"+M);M!=="/"&&M.endsWith("/");)M=M.slice(0,M.length-1);return M=decodeURI(M),M},h=(M,z)=>{M=n(M),z=n(z);const F=M.split("/"),H={};let B=null;for(const D of t){const J=n(z+D.path).split("/");if(J.length!==F.length)continue;let m=!0;for(let g=0;g<J.length;g++){const w=J[g],k=F[g];if(sr.test(w))H[decodeURIComponent(w.slice(1))]=decodeURIComponent(k);else if(k!==w){m=!1;break}}if(m){B=D;break}}return B||(B=t.find(D=>D.path==="*")||null),{route:B,params:H}},P=M=>{if(M.startsWith("?")&&(M=M.slice(1).trim()),!M)return{};const z={},F=M.split("&");for(const H of F){const[B,D]=H.split("=");z[decodeURIComponent(B)]=decodeURIComponent(D)}return z},T=()=>{const{route:M,params:z}=h(window.location.pathname+window.location.hash,o||"");if(!M){Me=void 0,l.replaceChildren(),ce(l,p.div("Could not find route"));return}if(M===Me){Ve.val=P(window.location.search),De.val=z;return}Me=M,Ve.rawVal=P(window.location.search),De.rawVal=z,l.replaceChildren(),ce(l,M.dom)};return window.onpopstate=T,ae(()=>{const M=Fe.val,z=Be.val;(M||z)&&setTimeout(()=>{T()})}),ae(()=>{qe.val=n(o||"")}),l}function ir({options:t,class:o}){const l=ae(()=>decodeURI(dr()));return p.div({name:"Navbar",class:`p-6 flex flex-col overflow-y-auto fixed top-12 h-[calc(100%-3rem)] left-0 bg-background border-r border-surface-500/50 ${o}`},t.map(n=>Ge(n,0,l)))}function Ge(t,o,l){var n;return[ur({href:t.path,disabled:t.path===void 0,onclick:()=>{window.scrollTo({top:0,left:0})},"data-selected":ee(()=>l.val===`${"/Savant/".slice(0,-1)}${t.path}`||void 0),"data-group":ee(()=>o===0&&t.children||void 0),"data-indented":ee(()=>o!==0||void 0),style:`--indent: ${o}rem;`,class:"relative flex gap-4 group text-mood-weak data-selected:text-mood data-group:font-semibold data-group:not-first:mt-6 data-group:mb-1 not-data-selected:hover:text-foreground data-selected:mood-accent data-selected:z-10"},p.span({name:"Divider",class:"absolute h-full w-px left-0 bg-current/50 group-data-selected:bg-current not-group-data-indented:hidden group-hover:w-1 group-data-selected:w-1 transition-all"}),p.span({name:"Title",class:"group-data-indented:ml-(--indent) justify-start group-data-selected:font-semibold flex-1 py-0.5 z-1 transition-all"},t.name)),(n=t.children)==null?void 0:n.map(h=>Ge(h,o+1,l))]}const cr=`# Savant

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
`;function lr(){return q(te({class:"language-typescript w-2xl *:scroll-m-21"},cr))}const fr=`# Savant Core

> All the basics for functional, declarative web apps.
`;function pr(){return q(te({class:"language-typescript"},fr))}const hr=`# Savant Routing

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
`;function mr(){return q(te({class:"language-typescript"},hr))}const gr=`# Savant UI

> Make great design effortless.
`;function vr(){return q(te({class:"language-typescript"},gr))}const _r=Object.assign({"./src/routes/1 core/1 State/index.ts":wa,"./src/routes/1 core/2 Derive/index.ts":Pa,"./src/routes/1 core/3 Elements/index.ts":ja,"./src/routes/1 core/4 Converter/index.ts":Ea}),br=Object.assign({"./src/routes/2 routing/1 Router/index.ts":Ta}),wr=Object.assign({"./src/routes/3 ui/Badge/index.ts":Oa,"./src/routes/3 ui/Button/index.ts":Fa,"./src/routes/3 ui/Checkbox/index.ts":Ia,"./src/routes/3 ui/Circular Progress Bar/index.ts":Ra,"./src/routes/3 ui/Code/index.ts":Va,"./src/routes/3 ui/Input/index.ts":Na,"./src/routes/3 ui/Popup/index.ts":qa,"./src/routes/3 ui/Radio/index.ts":Wa,"./src/routes/3 ui/Select/index.ts":Ka,"./src/routes/3 ui/Tooltip/index.ts":Qa}),yr=Object.assign({"./src/routes/examples/Sign In/index.ts":er}),ge=t=>Object.entries(t).map(([o,l])=>{const n=o.replace("./src/routes/","").replace("/index.ts",""),h=n.split("/").slice(-1)[0].replace(/^\d+\s/,""),P=n.split("/").slice(0,-1).map(T=>T.replace(/^\d+\s/,"").replace(" ","-")).join("/");return{name:h,path:`/#!/${P}/${h}`,dom:l.default}}),We=[{name:"Introduction",path:"/",dom:lr},{name:"Core",path:"/#!/core",dom:pr,children:ge(_r)},{name:"Routing",path:"/#!/routing",dom:mr,children:ge(br)},{name:"Savant UI",path:"/#!/ui",dom:vr,children:ge(wr)},{name:"Examples",children:ge(yr)}],kr=We.flatMap(t=>[...t.path?[t]:[],...t.children??[]]);function Pr(){return p.div({name:"App",class:"flex flex-col relative size-full"},rr(),p.div({class:"flex flex-1"},ir({options:We,class:"min-w-64 not-lg:hidden"}),p.div({class:"lg:ml-64 overflow-clip flex flex-1 justify-center"},p.div({class:"flex flex-col px-8 pt-24 pb-16 gap-4"},or({basename:"/Savant/".slice(0,-1),routes:kr})))))}ce(document.body,Pr())});export default Sr();
