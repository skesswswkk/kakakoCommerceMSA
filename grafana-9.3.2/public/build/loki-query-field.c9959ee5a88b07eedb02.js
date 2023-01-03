"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7142],{82282:(e,t)=>{t.hl=t.x=void 0,t.x={wordPattern:/(-?\d*\.\d\w*)|([^`~!#%^&*()\-=+\[{\]}\\|;:'",.<>\/?\s]+)/g,comments:{lineComment:"#"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"},{open:"<",close:">"}],folding:{}};var n=["by","without"],r="(".concat(n.reduce((function(e,t){return"".concat(e,"|").concat(t)})),")"),i=["sum","avg","min","max","stddev","stdvar","count","topk","bottomk"].concat(["json","logfmt","regexp","unpack","pattern"]).concat(["line_format","label_format"]).concat(["count_over_time","rate","bytes_over_time","bytes_rate","avg_over_time","sum_over_time","min_over_time","max_over_time","stdvar_over_time","stddev_over_time","quantile_over_time","first_over_time","last_over_time","absent_over_time"]).concat(n);t.hl={ignoreCase:!1,defaultToken:"",tokenPostfix:".logql",keywords:i,operators:["+","-","*","/","%","^","==","!=",">","<",">=","<=","|=","!=","|~","!~","and","or","unless","|"],vectorMatching:r,symbols:/[=><!~?:&|+\-*\/^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,digits:/\d+(_+\d+)*/,octaldigits:/[0-7]+(_+[0-7]+)*/,binarydigits:/[0-1]+(_+[0-1]+)*/,hexdigits:/[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,integersuffix:/(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,floatsuffix:/[fFlL]?/,tokenizer:{root:[[/@vectorMatching\s*(?=\()/,"type","@clauses"],[/[a-z_]\w*(?=\s*(=|!=|=~|!~))/,"tag"],[/(^#.*$)/,"comment"],[/[a-zA-Z_]\w*/,{cases:{"@keywords":"type","@default":"identifier"}}],[/"/,"string","@string_double"],[/'/,"string","@string_single"],[/`/,"string","@string_backtick"],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/\d+[smhdwy]/,"number"],[/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/,"number.float"],[/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/,"number.float"],[/0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/,"number.hex"],[/0[0-7']*[0-7](@integersuffix)/,"number.octal"],[/0[bB][0-1']*[0-1](@integersuffix)/,"number.binary"],[/\d[\d']*\d(@integersuffix)/,"number"],[/\d(@integersuffix)/,"number"]],string_double:[[/\{\{(.*?)\}\}/,{token:"number"}],[/[^\\"]/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],string_single:[[/[^\\']+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/'/,"string","@pop"]],string_backtick:[[/\{\{(.*?)\}\}/,{token:"number"}],[/[^\\`]/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/`/,"string","@pop"]],clauses:[[/[^(,)]/,"tag"],[/\)/,"identifier","@pop"]],whitespace:[[/[ \t\r\n]+/,"white"]]}}},21815:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var r=n(52423),i=n(68404),o=n(3088),l=n(44288),s=n(25004),a=n(82282),u=n(16755),c=n(82173);let d={storageService:function(){const e=new Map;return e.set("expandSuggestionDocs",(!0).toString()),{onDidChangeValue:e=>{},onDidChangeTarget:e=>{},onWillSaveState:e=>{},get:(t,n,r)=>{var i;return null!==(i=e.get(t))&&void 0!==i?i:r},getBoolean:(t,n,r)=>{const i=e.get(t);return void 0!==i?"true"===i:r},getNumber:(t,n,r)=>{const i=e.get(t);return void 0!==i?parseInt(i,10):r},store:(t,n,r,i)=>{null==n?e.delete(t):e.set(t,n.toString())},remove:(t,n)=>{e.delete(t)},keys:(t,n)=>Array.from(e.keys()),logStorage:()=>{console.log("logStorage: not implemented")},migrate:()=>Promise.resolve(void 0),isNew:e=>!0,flush:e=>Promise.resolve(void 0)}}()};class g extends Error{constructor(e){super(`Unexpected case in switch statement: ${JSON.stringify(e)}`)}}var f=n(87953),p=n(27661),m=n(84899),h=n(70039);const b=[{type:"PATTERN",label:"{}",insertText:"{$0}",isSnippet:!0,triggerOnInsert:!0}],v=h.$5.map((e=>{var t;return{type:"FUNCTION",label:e.label,insertText:`${null!==(t=e.insertText)&&void 0!==t?t:""}($0)`,isSnippet:!0,triggerOnInsert:!0,detail:e.detail,documentation:e.documentation}})),_=h.EH.map((e=>{var t;return{type:"FUNCTION",label:e.label,insertText:`${null!==(t=e.insertText)&&void 0!==t?t:""}({$0}[\\$__interval])`,isSnippet:!0,triggerOnInsert:!0,detail:e.detail,documentation:e.documentation}})),y=["$__interval","$__range","1m","5m","10m","30m","1h","1d"].map((e=>({type:"DURATION",label:e,insertText:e}))),L=[{operator:"|=",documentation:(0,p.k)(m.B5.LineContains),afterPipe:!0},{operator:"!=",documentation:(0,p.k)(m.B5.LineContainsNot)},{operator:"|~",documentation:(0,p.k)(m.B5.LineMatchesRegex),afterPipe:!0},{operator:"!~",documentation:(0,p.k)(m.B5.LineMatchesRegexNot)}];function E(e){return L.filter((t=>!e||t.afterPipe)).map((t=>{let{operator:n,documentation:r}=t;return{type:"LINE_FILTER",label:`${n} ""`,insertText:`${e?n.replace("|",""):n} "$0"`,isSnippet:!0,documentation:r}}))}const x=["json","logfmt","pattern","regexp","unpack"];async function N(e,t){switch(e.type){case"EMPTY":case"AT_ROOT":const n=await async function(e){return(await e.getHistory()).map((e=>({type:"HISTORY",label:e,insertText:e})))}(t);return[...n,...b,...v,..._];case"IN_DURATION":return y;case"IN_GROUPING":return async function(e,t){const{extractedLabelKeys:n}=await t.getParserAndLabelKeys(e);return n.map((e=>({type:"LABEL_NAME",label:e,insertText:e,triggerOnInsert:!1})))}(e.otherLabels,t);case"IN_LABEL_SELECTOR_NO_LABEL_NAME":return async function(e,t){return(await t.getLabelNames(e)).map((e=>({type:"LABEL_NAME",label:e,insertText:`${e}=`,triggerOnInsert:!0})))}(e.otherLabels,t);case"IN_LABEL_SELECTOR_WITH_LABEL_NAME":return async function(e,t,n,r){return(await r.getLabelValues(e,n)).map((e=>({type:"LABEL_VALUE",label:e,insertText:t?(0,f.U9)(e):`"${(0,f.U9)(e)}"`})))}(e.labelName,e.betweenQuotes,e.otherLabels,t);case"AFTER_SELECTOR":return async function(e,t,n){const{extractedLabelKeys:r,hasJSON:i,hasLogfmt:o}=await n.getParserAndLabelKeys(e),l=new Set(x),s=[],a=t?" ":"| ",u=r.some((e=>"level"===e));if(i){l.delete("json");const e=u?"":" (detected)";s.push({type:"PARSER",label:`json${e}`,insertText:`${a}json`,documentation:u?"Use it to get log-levels in the histogram":(0,p.k)(m.B5.Json)})}if(o){l.delete("logfmt");const e=u?"":" (detected)";s.push({type:"DURATION",label:`logfmt${e}`,insertText:`${a}logfmt`,documentation:u?"Get detected levels in the histogram":(0,p.k)(m.B5.Logfmt)})}return Array.from(l).sort().forEach((e=>{s.push({type:"PARSER",label:e,insertText:`${a}${e}`,documentation:(0,p.k)(e)})})),r.forEach((e=>{s.push({type:"LINE_FILTER",label:`unwrap ${e}`,insertText:`${a}unwrap ${e}`})})),s.push({type:"PIPE_OPERATION",label:"unwrap",insertText:`${a}unwrap`,documentation:(0,p.k)(m.B5.Unwrap)}),s.push({type:"PIPE_OPERATION",label:"line_format",insertText:`${a}line_format "{{.$0}}"`,isSnippet:!0,documentation:(0,p.k)(m.B5.LineFormat)}),s.push({type:"PIPE_OPERATION",label:"label_format",insertText:`${a}label_format`,isSnippet:!0,documentation:(0,p.k)(m.B5.LabelFormat)}),[...E(t),...s]}(e.labels,e.afterPipe,t);case"IN_AGGREGATION":return[..._,...v];default:throw new g(e)}}var T=n(78252);function A(e,t){return e[t]}function C(e,t){let n=e;for(const[e,r]of t){if(n=A(n,e),null===n)return null;if(n.type.id!==r)return null}return n}function I(e,t){return t.slice(e.from,e.to)}function w(e,t){return e.every(((e,n)=>e===t[n]))}const P=[{path:[T.Qf],fun:function(e,t,n){const r=C(e,[["firstChild",T.gP]]);if(null!==r){if(!t.slice(r.to,n).includes(","))return null}return{type:"IN_LABEL_SELECTOR_NO_LABEL_NAME",otherLabels:R(e,t)}}},{path:[T.WZ],fun:function(e,t,n){const r=C(e,[["lastChild",T.wi],["lastChild",T.bL]]);if(null!=r)return $(r,t,n,!1);if(null!=C(e,[["firstChild",0],["firstChild",T.xb]]))return{type:"AT_ROOT"};return null}},{path:[T.Ld,T.xO],fun:k},{path:[T.Kz],fun:function(e,t,n){const r=C(e,[["parent",T.M0]]);if(null===r)return null;const i=r.getChild("MetricExpr");if(null===i)return null;const o=C(i,[["firstChild",T.Tr],["lastChild",T.UN],["firstChild",T.Qf]]);if(null===o)return null;return{type:"IN_GROUPING",otherLabels:R(o,t)}}},{path:[T.UN],fun:function(e,t,n){return $(e,t,n,!1)}},{path:[0,T.xO],fun:k},{path:[0,T.e6],fun:function(e,t,n){return{type:"IN_DURATION"}}},{path:[0,T.UN],fun:function(e,t,n){const r=C(e,[["parent",T.UN]]);if(null===r)return null;return $(r,t,n,!1)}},{path:[0,T.dh,T.cq,T.M0,T.cq,T.wi,T.WZ],fun:()=>({type:"IN_AGGREGATION"})},{path:[0,T.We,T.iP],fun:function(e,t,n){const r=C(e,[["parent",T.We],["parent",T.iP]]);if(null===r)return null;const{parent:i}=r;if(null===i)return null;if(i.type.id===T.bL||i.type.id===T.UN)return $(i,t,n,!0);return null}}],S=new Map([["Eq","="],["Re","=~"],["Neq","!="],["Nre","!~"]]);function O(e,t){if(e.type.id!==T.xO)return null;const n=C(e,[["firstChild",T.xb]]);if(null===n)return null;const r=n.nextSibling;if(null===r)return null;const i=function(e){var t;return null!==(t=S.get(e.name))&&void 0!==t?t:null}(r);if(null===i)return null;const o=C(e,[["lastChild",T.Ld]]);if(null===o)return null;const l=I(n,t),s=function(e){const t=e.slice(1,e.length-1);if(e.startsWith('"')&&e.endsWith('"'))return t.replace(/\\"/,'"');if(e.startsWith("'")&&e.endsWith("'"))return t.replace(/\\'/,"'");if(e.startsWith("`")&&e.endsWith("`"))return t;throw new Error(`Invalid string literal: ${e}`)}(I(o,t));return{name:l,value:s,op:i}}function R(e,t){if(e.type.id!==T.Qf)return[];let n=C(e,[["firstChild",T.gP]]);const r=[];for(;null!==n;){const e=C(n,[["lastChild",T.xO]]);if(null===e)return[];const i=O(e,t);null!==i&&r.push(i),n=C(n,[["firstChild",T.gP]])}return r.reverse(),r}function k(e,t,n){const r=!e.type.isError,i=C(e,[["parent",T.xO]]);if(null===i)return null;const o=C(i,[["firstChild",T.xb]]);if(null===o)return null;const l=I(o,t),s=C(i,[["parent",T.gP]]);if(null===s)return null;let a=s,u=null;for(;null===u;){const e=a.parent;if(null===e)return null;switch(e.type.id){case T.gP:a=e;continue;case T.Qf:u=e;continue;default:return null}}const c=R(u,t).filter((e=>e.name!==l));return{type:"IN_LABEL_SELECTOR_WITH_LABEL_NAME",labelName:l,betweenQuotes:r,otherLabels:c}}function $(e,t,n,r){const i=C(e,[["firstChild",T.Qf]]);if(null!=i&&i.to<=n){return{type:"AFTER_SELECTOR",afterPipe:r,labels:R(i,t)}}return null}function B(e,t){switch(e){case"DURATION":return t.languages.CompletionItemKind.Unit;case"FUNCTION":return t.languages.CompletionItemKind.Variable;case"HISTORY":return t.languages.CompletionItemKind.Snippet;case"LABEL_NAME":return t.languages.CompletionItemKind.Enum;case"LABEL_VALUE":return t.languages.CompletionItemKind.EnumMember;case"PATTERN":return t.languages.CompletionItemKind.Constructor;case"PARSER":return t.languages.CompletionItemKind.Class;case"LINE_FILTER":return t.languages.CompletionItemKind.TypeParameter;case"PIPE_OPERATION":return t.languages.CompletionItemKind.Interface;default:throw new g(e)}}function U(e,t){return{triggerCharacters:["{",",","[","(","=","~"," ",'"',"|"],provideCompletionItems:(n,r)=>{const i=n.getWordAtPosition(r),o=null!=i?e.Range.lift({startLineNumber:r.lineNumber,endLineNumber:r.lineNumber,startColumn:i.startColumn,endColumn:i.endColumn}):e.Range.fromPositions(r),l={column:r.column,lineNumber:r.lineNumber},s=n.getOffsetAt(l),a=function(e,t){if(""===e)return{type:"EMPTY"};const n=T.E2.parse(e),r=function(e,t,n){const r=t.trimEnd().length,i=r<n?r:n,o=e.cursorAt(i);do{if(o.from===i&&o.to===i){const{node:e}=o;if(e.type.isError)return e}}while(o.next());return null}(n,e,t),i=null!=r?r.cursor():n.cursorAt(t),o=i.node,l=[i.type.id];for(;i.parent();)l.push(i.type.id);for(let n of P)if(w(n.path,l))return n.fun(o,e,t);return null}(n.getValue(),s);return(null!=a?N(a,t):Promise.resolve([])).then((t=>{const n=t.length.toString().length;return{suggestions:t.map(((t,r)=>({kind:B(t.type,e),label:t.label,insertText:t.insertText,insertTextRules:t.isSnippet?4:void 0,detail:t.detail,documentation:t.documentation,sortText:r.toString().padStart(n,"0"),range:o,command:t.triggerOnInsert?{id:"editor.action.triggerSuggest",title:""}:void 0})))}}))}}}var M=n(6116);class F{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.languageProvider=e,this.history=t}buildSelector(e){return`{${e.map((e=>`${e.name}${e.op}"${(0,M.U9)(e.value)}"`)).join(",")}}`}getHistory(){return this.history.map((e=>e.query.expr)).filter((e=>void 0!==e))}async getLabelNames(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(0===e.length)return this.languageProvider.getLabelKeys();const t=await this.getSeriesLabels(e),n=Object.keys(t),r=new Set(e.map((e=>e.name)));return n.filter((e=>!r.has(e)))}async getLabelValues(e,t){var n;if(0===t.length)return await this.languageProvider.getLabelValues(e);return null!==(n=(await this.getSeriesLabels(t))[e])&&void 0!==n?n:[]}async getParserAndLabelKeys(e){return await this.languageProvider.getParserAndLabelKeys(this.buildSelector(e))}async getSeriesLabels(e){return await this.languageProvider.getSeriesLabels(this.buildSelector(e)).then((e=>null!=e?e:{}))}}var K=n(45916);const W={codeLens:!1,contextmenu:!1,fixedOverflowWidgets:!0,folding:!1,fontSize:14,lineDecorationsWidth:8,lineNumbers:"off",minimap:{enabled:!1},overviewRulerBorder:!1,overviewRulerLanes:0,padding:{top:4,bottom:5},renderLineHighlight:"none",scrollbar:{vertical:"hidden",verticalScrollbarSize:8,horizontal:"hidden",horizontalScrollbarSize:0},scrollBeyondLastLine:!1,suggest:{showWords:!1},suggestFontSize:12,wordWrap:"on"},D="logql";let V=!1;const z=e=>{let{languageProvider:t,history:n,onBlur:g,onRunQuery:f,initialValue:p}=e;const m=(0,l.Z)(),h=(0,i.useRef)(d),b=(0,i.useRef)(null),v=(0,o.Z)(t),_=(0,o.Z)(n),y=(0,o.Z)(f),L=(0,o.Z)(g),E=(0,i.useRef)(null),x=(e=>({container:r.css`
      border-radius: ${e.shape.borderRadius()};
      border: 1px solid ${e.components.input.borderColor};
    `}))((0,u.l4)());return(0,i.useEffect)((()=>()=>{var e;null===(e=E.current)||void 0===e||e.call(E)}),[]),(0,K.jsx)("div",{"aria-label":s.wl.components.QueryField.container,className:x.container,ref:b,children:(0,K.jsx)(c.o,{overrideServices:h.current,options:W,language:D,value:p,beforeMount:e=>{!function(e){!1===V&&(V=!0,e.languages.register({id:D}),e.languages.setMonarchTokensProvider(D,a.hl),e.languages.setLanguageConfiguration(D,a.x))}(e)},onMount:(e,t)=>{const n=e.createContextKey("isEditorFocused"+m,!1);e.onDidBlurEditorWidget((()=>{n.set(!1),L.current(e.getValue())}));const r=U(t,new F(v.current,_.current)),i=Object.assign({},r,{provideCompletionItems:(t,n,i,o)=>{var l;return(null===(l=e.getModel())||void 0===l?void 0:l.id)!==t.id?{suggestions:[]}:r.provideCompletionItems(t,n,i,o)}}),{dispose:o}=t.languages.registerCompletionItemProvider(D,i);E.current=o;const l=()=>{const t=b.current;if(null!==t){const n=e.getContentHeight();t.style.height=`${n+2}px`,t.style.width="100%";const r=t.clientWidth;e.layout({width:r,height:n})}};e.onDidContentSizeChange(l),l(),e.addCommand(t.KeyMod.Shift|t.KeyCode.Enter,(()=>{y.current(e.getValue())}),"isEditorFocused"+m),e.onDidFocusEditorText((()=>{n.set(!0),""===e.getValue().trim()&&e.trigger("","editor.action.triggerSuggest",{})}))}})})}},3088:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(68404);const i=function(e){var t=(0,r.useRef)(e);return t.current=e,t}}}]);
//# sourceMappingURL=loki-query-field.c9959ee5a88b07eedb02.js.map