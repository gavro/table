!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Table=e():t.Table=e()}(window,function(){return function(t){var e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=4)}([function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=function(t,e){var o=t[1]||"",i=t[3];if(!i)return o;if(e&&"function"==typeof btoa){var n=(l=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),r=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[o].concat(r).concat([n]).join("\n")}var l;return[o].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},n=0;n<this.length;n++){var r=this[n][0];"number"==typeof r&&(i[r]=!0)}for(n=0;n<t.length;n++){var l=t[n];"number"==typeof l[0]&&i[l[0]]||(o&&!l[2]?l[2]=o:o&&(l[2]="("+l[2]+") and ("+o+")"),e.push(l))}},e}},function(t,e,o){var i,n,r={},l=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===n&&(n=i.apply(this,arguments)),n}),s=function(t){var e={};return function(t,o){if("function"==typeof t)return t();if(void 0===e[t]){var i=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,o);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),a=null,c=0,h=[],d=o(7);function u(t,e){for(var o=0;o<t.length;o++){var i=t[o],n=r[i.id];if(n){n.refs++;for(var l=0;l<n.parts.length;l++)n.parts[l](i.parts[l]);for(;l<i.parts.length;l++)n.parts.push(g(i.parts[l],e))}else{var s=[];for(l=0;l<i.parts.length;l++)s.push(g(i.parts[l],e));r[i.id]={id:i.id,refs:1,parts:s}}}}function f(t,e){for(var o=[],i={},n=0;n<t.length;n++){var r=t[n],l=e.base?r[0]+e.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};i[l]?i[l].parts.push(s):o.push(i[l]={id:l,parts:[s]})}return o}function p(t,e){var o=s(t.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=h[h.length-1];if("top"===t.insertAt)i?i.nextSibling?o.insertBefore(e,i.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),h.push(e);else if("bottom"===t.insertAt)o.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=s(t.insertAt.before,o);o.insertBefore(e,n)}}function _(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=h.indexOf(t);e>=0&&h.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return o.nc}();i&&(t.attrs.nonce=i)}return v(e,t.attrs),p(t,e),e}function v(t,e){Object.keys(e).forEach(function(o){t.setAttribute(o,e[o])})}function g(t,e){var o,i,n,r;if(e.transform&&t.css){if(!(r="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=r}if(e.singleton){var l=c++;o=a||(a=b(e)),i=w.bind(null,o,l,!1),n=w.bind(null,o,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),p(t,e),e}(e),i=function(t,e,o){var i=o.css,n=o.sourceMap,r=void 0===e.convertToAbsoluteUrls&&n;(e.convertToAbsoluteUrls||r)&&(i=d(i));n&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var l=new Blob([i],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(l),s&&URL.revokeObjectURL(s)}.bind(null,o,e),n=function(){_(o),o.href&&URL.revokeObjectURL(o.href)}):(o=b(e),i=function(t,e){var o=e.css,i=e.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}.bind(null,o),n=function(){_(o)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else n()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=l()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var o=f(t,e);return u(o,e),function(t){for(var i=[],n=0;n<o.length;n++){var l=o[n];(s=r[l.id]).refs--,i.push(s)}t&&u(f(t,e),e);for(n=0;n<i.length;n++){var s;if(0===(s=i[n]).refs){for(var a=0;a<s.parts.length;a++)s.parts[a]();delete r[s.id]}}}};var m,y=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function w(t,e,o,i){var n=o?"":i.css;if(t.styleSheet)t.styleSheet.cssText=y(e,n);else{var r=document.createTextNode(n),l=t.childNodes;l[e]&&t.removeChild(l[e]),l.length?t.insertBefore(r,l[e]):t.appendChild(r)}}},function(t,e){t.exports='<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#388AE5"></circle><path fill="#fff" d="M10.9 9.1h3.7a.9.9 0 1 1 0 1.8h-3.7v3.7a.9.9 0 1 1-1.8 0v-3.7H5.4a.9.9 0 0 1 0-1.8h3.7V5.4a.9.9 0 0 1 1.8 0v3.7z"></path></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#ea6255"></circle><rect stroke="#000000" x="5.154639px" height="1.855672px" y="9.072164px" id="rect1" stroke-width="0px" width="9.690722px" fill="#ffffff" transform></rect><circle stroke="none" cx="4.948453px" id="circle1" stroke-width="3px" cy="9.896909px" fill="#ffffff" r="0.82474px" transform></circle><circle stroke="none" stroke-width="3px" cy="9.896909px" id="circle2" fill="#ffffff" r="0.82474px" cx="14.845359px" transform></circle></svg>'},function(t,e,o){const i=o(13).TableConstructor,n=o(12),r={input:"tc-table__inp"};t.exports=class{static get enableLineBreaks(){return!0}static get toolbox(){return{icon:n,title:"Table"}}constructor({data:t,config:e,api:o}){this.api=o,this._tableConstructor=new i(t,e,o)}render(){return this._tableConstructor.htmlElement}save(t){const e=[],o=t.querySelector("table").rows;for(let t=0;t<o.length;t++){const i=o[t],n=Array.from(i.cells).map(t=>t.querySelector("."+r.input));n.every(this._isEmpty)||e.push(n.map(t=>t.innerHTML))}return{content:e}}_isEmpty(t){return!t.textContent.trim()}}},function(t,e,o){var i=o(6);"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(1)(i,n);i.locals&&(t.exports=i.locals)},function(t,e,o){(t.exports=o(0)(!1)).push([t.i,".tc-editor{padding:10px;position:relative;box-sizing:content-box;width:100%;left:-10px}",""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var o=e.protocol+"//"+e.host,i=o+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var n,r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(n=0===r.indexOf("//")?r:0===r.indexOf("/")?o+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}},function(t,e,o){var i=o(9);"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(1)(i,n);i.locals&&(t.exports=i.locals)},function(t,e,o){(t.exports=o(0)(!1)).push([t.i,".tc-toolbar{background:#368be6;}.tc-toolbar--hidden{visibility:hidden}.tc-toolbar--hor{width:100%;height:21px;flex-direction:row;left:0;top:1px}.tc-toolbar--hor,.tc-toolbar--ver{display:flex;align-items:center;position:absolute;z-index:100}.tc-toolbar--ver{height:100%;width:21px;flex-direction:column;top:0;left:-1px}.tc-toolbar__plus--hor{margin-left:-10px}.tc-toolbar__plus--ver{margin-top:-10px}.tc-toolbar__minus,.tc-toolbar__plus{height:21px;width:21px;margin-top:0}.tc-toolbar__minus--hor{margin-left:-10px}.tc-toolbar__minus--ver{margin-top:-10px}.tc-toolbar__shine-line--hor{min-height:1px;width:100%}.tc-toolbar__shine-line--ver{min-width:1px;height:100%}",""])},function(t,e,o){var i=o(11);"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(1)(i,n);i.locals&&(t.exports=i.locals)},function(t,e,o){(t.exports=o(0)(!1)).push([t.i,".tc-table{width:100%;height:100%;border-collapse:collapse;table-layout:fixed;}.tc-table__wrap{border:1px solid #dbdbe2;border-radius:3px;position:relative;height:100%;width:100%;box-sizing:border-box}.tc-table__cell{border:1px solid #dbdbe2;padding:0;vertical-align:top}.tc-table__area{padding:10px;height:100%}.tc-table__inp{outline:none;flex-grow:100;min-height:1.5em;height:100%;overflow:hidden}.tc-table tbody tr:first-child td{border-top:none}.tc-table tbody tr:last-child td{border-bottom:none}.tc-table tbody tr td:last-child{border-right:none}.tc-table tbody tr td:first-child{border-left:none}",""])},function(t,e){t.exports='<svg width="18" height="14"><path d="M2.833 8v1.95a1.7 1.7 0 0 0 1.7 1.7h3.45V8h-5.15zm0-2h5.15V2.35h-3.45a1.7 1.7 0 0 0-1.7 1.7V6zm12.3 2h-5.15v3.65h3.45a1.7 1.7 0 0 0 1.7-1.7V8zm0-2V4.05a1.7 1.7 0 0 0-1.7-1.7h-3.45V6h5.15zM4.533.1h8.9a3.95 3.95 0 0 1 3.95 3.95v5.9a3.95 3.95 0 0 1-3.95 3.95h-8.9a3.95 3.95 0 0 1-3.95-3.95v-5.9A3.95 3.95 0 0 1 4.533.1z"></path></svg>'},function(t,e,o){"use strict";o.r(e);o(5);function i(t){return!(null==t)}function n(t,e=null,o=null,n=null){const r=document.createElement(t);if(i(e))for(let t=0;t<e.length;t++)i(e[t])&&r.classList.add(e[t]);if(i(o))for(let t in o)r.setAttribute(t,o[t]);if(i(n))for(let t=0;t<n.length;t++)i(n[t])&&r.appendChild(n[t]);return r}function r(t){const e=t.getBoundingClientRect();return{y1:Math.floor(e.top+window.pageYOffset),x1:Math.floor(e.left+window.pageXOffset),x2:Math.floor(e.right+window.pageXOffset),y2:Math.floor(e.bottom+window.pageYOffset)}}function l(t,e,o){let i;return e-t.x1>=-1&&e-t.x1<=11&&(i="left"),t.x2-e>=-1&&t.x2-e<=11&&(i="right"),o-t.y1>=-1&&o-t.y1<=11&&(i="top"),t.y2-o>=-1&&t.y2-o<=11&&(i="bottom"),i}o(8);var s=o(2),a=o.n(s),c=o(3),h=o.n(c);const d={highlightingLine:"tc-toolbar",hidden:"tc-toolbar--hidden",horizontalToolBar:"tc-toolbar--hor",horizontalHighlightingLine:"tc-toolbar__shine-line--hor",verticalToolBar:"tc-toolbar--ver",verticalHighlightingLine:"tc-toolbar__shine-line--ver",plusButton:"tc-toolbar__plus",minusButton:"tc-toolbar__minus",horizontalPlusButton:"tc-toolbar__plus--hor",verticalPlusButton:"tc-toolbar__plus--ver",horizontalMinusButton:"tc-toolbar__minus--hor",verticalMinusButton:"tc-toolbar__minus--ver",area:"tc-table__area"};class u{constructor(){this._plusButton=this._generatePlusButton(),this._minusButton=this._generateMinusButton(),this._highlightingLine=this._generateHighlightingLine(),this._toolbar=this._generateToolBar([this._plusButton,this._minusButton,this._highlightingLine])}hide(){this._toolbar.classList.add(d.hidden)}show(){this._toolbar.classList.remove(d.hidden),this._highlightingLine.classList.remove(d.hidden)}hideLine(){this._highlightingLine.classList.add(d.hidden)}get htmlElement(){return this._toolbar}_generatePlusButton(){const t=n("div",[d.plusButton]);return t.innerHTML=a.a,t.addEventListener("click",t=>{t.stopPropagation();const e=new CustomEvent("click",{detail:{x:t.pageX,y:t.pageY,button:"plus"},bubbles:!0});this._toolbar.dispatchEvent(e)}),t}_generateMinusButton(){const t=n("div",[d.minusButton]);return t.innerHTML=h.a,t.addEventListener("click",t=>{t.stopPropagation();const e=new CustomEvent("click",{detail:{x:t.pageX,y:t.pageY,button:"minus"},bubbles:!0});this._toolbar.dispatchEvent(e)}),t}_generateHighlightingLine(){const t=n("div",[d.highlightingLine]);return t.addEventListener("click",t=>{t.stopPropagation();const e=new CustomEvent("click",{bubbles:!0});this._toolbar.dispatchEvent(e)}),t}_generateToolBar(t){const e=n("div",[d.hidden],null,t);return e.addEventListener("mouseleave",t=>{this._recalcMousePos(t)}),e}_recalcMousePos(t){this.hide();const e=document.elementFromPoint(t.pageX,t.pageY);if(null!==e&&e.classList.contains(d.area)){const o=new MouseEvent("mouseover",{clientX:t.pageX,clientY:t.pageY});e.dispatchEvent(o)}}}class f extends u{constructor(){super(),this._toolbar.classList.add(d.horizontalToolBar),this._plusButton.classList.add(d.horizontalPlusButton),this._plusButton.classList.add(d.horizontalMinusButton),this._highlightingLine.classList.add(d.horizontalHighlightingLine)}showIn(t){const e=Math.floor(Number.parseInt(window.getComputedStyle(this._toolbar).height)/2);this._toolbar.style.top=t-e+"px",this.show()}}class p extends u{constructor(){super(),this._toolbar.classList.add(d.verticalToolBar),this._plusButton.classList.add(d.verticalPlusButton),this._plusButton.classList.add(d.verticalMinusButton),this._highlightingLine.classList.add(d.verticalHighlightingLine)}showIn(t){const e=Math.floor(Number.parseInt(window.getComputedStyle(this._toolbar).width)/2);this._toolbar.style.left=t-e+"px",this.show()}}o(10);const _={table:"tc-table",inputField:"tc-table__inp",cell:"tc-table__cell",wrapper:"tc-table__wrap",area:"tc-table__area"};class b{constructor(){this._numberOfColumns=0,this._numberOfRows=0,this._element=this._createTableWrapper(),this._table=this._element.querySelector("table"),this._hangEvents()}addColumn(t=-1){this._numberOfColumns++;const e=this._table.rows;for(let o=0;o<e.length;o++){const i=e[o].insertCell(t);this._fillCell(i)}}removeColumn(t=-1){this._numberOfColumns--;const e=this._table.rows;for(let o=0;o<e.length;o++)e[o].deleteCell(t)}addRow(t=-1){this._numberOfRows++;const e=this._table.insertRow(t);return this._fillRow(e),e}removeRow(t=-1){this._numberOfRows--,this._table.deleteRow(t)}get htmlElement(){return this._element}get body(){return this._table}get selectedCell(){return this._selectedCell}_createTableWrapper(){return n("div",[_.wrapper],null,[n("table",[_.table])])}_createContenteditableArea(){return n("div",[_.inputField],{contenteditable:"true"})}_fillCell(t){t.classList.add(_.cell);const e=this._createContenteditableArea();t.appendChild(n("div",[_.area],null,[e]))}_fillRow(t){for(let e=0;e<this._numberOfColumns;e++){const e=t.insertCell();this._fillCell(e)}}_hangEvents(){this._table.addEventListener("focus",t=>{this._focusEditField(t)},!0),this._table.addEventListener("blur",t=>{this._blurEditField(t)},!0),this._table.addEventListener("keydown",t=>{this._pressedEnterInEditField(t)}),this._table.addEventListener("click",t=>{this._clickedOnCell(t)}),this._table.addEventListener("mouseover",t=>{this._mouseEnterInDetectArea(t),t.stopPropagation()},!0)}_focusEditField(t){t.target.classList.contains(_.inputField)&&(this._selectedCell=t.target.closest("."+_.cell))}_blurEditField(t){t.target.classList.contains(_.inputField)&&(this._selectedCell=null)}_pressedEnterInEditField(t){t.target.classList.contains(_.inputField)&&(13!==t.keyCode||t.shiftKey||t.preventDefault())}_clickedOnCell(t){if(!t.target.classList.contains(_.cell))return;t.target.querySelector("."+_.inputField).focus()}_mouseEnterInDetectArea(t){if(!t.target.classList.contains(_.area))return;const e=l(r(t.target.closest("TD")),t.pageX,t.pageY);t.target.dispatchEvent(new CustomEvent("mouseInActivatingArea",{detail:{side:e},bubbles:!0}))}}o.d(e,"TableConstructor",function(){return g});const v={editor:"tc-editor",toolBarHor:"tc-toolbar--hor",toolBarVer:"tc-toolbar--ver",inputField:"tc-table__inp"};class g{constructor(t,e,o){this._table=new b;const i=this._resizeTable(t,e);this._fillTable(t,i),this._container=n("div",[v.editor,o.styles.block],null,[this._table.htmlElement]),this._verticalToolBar=new p,this._horizontalToolBar=new f,this._table.htmlElement.appendChild(this._horizontalToolBar.htmlElement),this._table.htmlElement.appendChild(this._verticalToolBar.htmlElement),this._hoveredCell=null,this._activatedToolBar=null,this._hoveredCellSide=null,this._plusButDelay=null,this._toolbarShowDelay=null,this._hangEvents()}get htmlElement(){return this._container}_fillTable(t,e){if(void 0!==t.content)for(let o=0;o<e.rows&&o<t.content.length;o++)for(let i=0;i<e.cols&&i<t.content[o].length;i++){this._table.body.rows[o].cells[i].querySelector("."+v.inputField).innerHTML=t.content[o][i]}}_resizeTable(t,e){const o=Array.isArray(t.content),i=!!o&&t.content.length,n=o?t.content.length:void 0,r=i?t.content[0].length:void 0,l=Number.parseInt(e.rows),s=Number.parseInt(e.cols),a=!isNaN(l)&&l>0?l:void 0,c=!isNaN(s)&&s>0?s:void 0,h=n||a||2,d=r||c||2;for(let t=0;t<h;t++)this._table.addRow();for(let t=0;t<d;t++)this._table.addColumn();return{rows:h,cols:d}}_showToolBar(t,e){this._hideToolBar(),this._activatedToolBar=t,t.showIn(e)}_hideToolBar(){null!==this._activatedToolBar&&this._activatedToolBar.hide()}_hangEvents(){this._container.addEventListener("mouseInActivatingArea",t=>{this._toolbarCalling(t)}),this._container.addEventListener("click",t=>{this._clickToolbar(t)}),this._container.addEventListener("input",()=>{this._hideToolBar()}),this._container.addEventListener("keydown",t=>{this._containerKeydown(t)}),this._container.addEventListener("mouseout",t=>{this._leaveDetectArea(t)}),this._container.addEventListener("mouseover",t=>{this._mouseEnterInDetectArea(t)})}_mouseInActivatingAreaListener(t){this._hoveredCellSide=t.detail.side;const e=r(t.target),o=r(this._table.htmlElement);if(this._hoveredCell=t.target.closest("TD"),null===this._hoveredCell){const t=11;this._hoveredCell=this._container,e.x1+=t,e.y1+=t,e.x2-=t,e.y2-=t}"top"===this._hoveredCellSide&&this._showToolBar(this._horizontalToolBar,e.y1-o.y1-2),"bottom"===this._hoveredCellSide&&this._showToolBar(this._horizontalToolBar,e.y2-o.y1-1),"left"===this._hoveredCellSide&&this._showToolBar(this._verticalToolBar,e.x1-o.x1-2),"right"===this._hoveredCellSide&&this._showToolBar(this._verticalToolBar,e.x2-o.x1-1)}_isToolbar(t){return!(!t.closest("."+v.toolBarHor)&&!t.closest("."+v.toolBarVer))}_leaveDetectArea(t){this._isToolbar(t.relatedTarget)||(clearTimeout(this._toolbarShowDelay),this._hideToolBar())}_toolbarCalling(t){this._isToolbar(t.target)||(clearTimeout(this._toolbarShowDelay),this._toolbarShowDelay=setTimeout(()=>{this._mouseInActivatingAreaListener(t)},125))}_clickToolbar(t){if(!this._isToolbar(t.target))return;let e;if("plus"==t.detail.button&&(this._activatedToolBar===this._horizontalToolBar?(this._addRow(),e="y"):(this._addColumn(),e="x")),"minus"==t.detail.button&&(this._activatedToolBar===this._horizontalToolBar?(this._removeRow(),e="y"):(this._removeColumn(),e="x")),isNaN(t.detail)&&null!==t.detail){const o=r(this._table.htmlElement);let i;i="x"===e?t.detail.x-o.x1:t.detail.y-o.y1,this._delayAddButtonForMultiClickingNearMouse(i)}else this._hideToolBar()}_containerKeydown(t){13===t.keyCode&&this._containerEnterPressed(t)}_delayAddButtonForMultiClickingNearMouse(t){this._showToolBar(this._activatedToolBar,t),this._activatedToolBar.hideLine(),clearTimeout(this._plusButDelay),this._plusButDelay=setTimeout(()=>{this._hideToolBar()},500)}_getHoveredSideOfContainer(){return this._hoveredCell===this._container?this._isBottomOrRight()?0:-1:1}_isBottomOrRight(){return"bottom"===this._hoveredCellSide||"right"===this._hoveredCellSide}_addRow(){const t=this._hoveredCell.closest("TR");let e=this._getHoveredSideOfContainer();1===e&&(e=t.sectionRowIndex,e+=this._isBottomOrRight()),this._table.addRow(e)}_addColumn(){let t=this._getHoveredSideOfContainer();1===t&&(t=this._hoveredCell.cellIndex,t+=this._isBottomOrRight()),this._table.addColumn(t)}_removeRow(){const t=this._hoveredCell.closest("TR");let e=this._getHoveredSideOfContainer();1===e&&(e=t.sectionRowIndex,e+=this._isBottomOrRight());const o="top"!==this._hoveredCellSide||t&&t.sectionRowIndex&&0!==t.sectionRowIndex?e-1:0;this._table.removeRow(o)}_removeColumn(){let t=this._getHoveredSideOfContainer();1===t&&(t=this._hoveredCell.cellIndex,t+=this._isBottomOrRight());const e="left"!==this._hoveredCellSide||void 0!==this._hoveredCell.cellIndex&&0!==this._hoveredCell.cellIndex?t-1:0;this._table.removeColumn(e)}_containerEnterPressed(t){if(null===this._table.selectedCell||t.shiftKey)return;const e=this._table.selectedCell.closest("TR");let o=this._getHoveredSideOfContainer();1===o&&(o=e.sectionRowIndex+1),this._table.addRow(o).cells[0].click()}_mouseEnterInDetectArea(t){let e=l(r(this._container),t.pageX,t.pageY);t.target.dispatchEvent(new CustomEvent("mouseInActivatingArea",{detail:{side:e},bubbles:!0}))}}}])});