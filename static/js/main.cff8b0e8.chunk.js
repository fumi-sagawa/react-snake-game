(this["webpackJsonphooks-snake-game"]=this["webpackJsonphooks-snake-game"]||[]).push([[0],{17:function(t,n,e){},24:function(t,n,e){"use strict";e.r(n);var c=e(2),i=e.n(c),a=e(12),s=e.n(a),r=(e(17),e(11)),o=e(3),l=e(0),u=function(t){var n=t.length,e=t.difficulty,c=void 0===e?3:e,i=t.onChangeDifficulty,a=c<5?"":"is-hidden",s=c>1?"":"is-hidden";return Object(l.jsxs)("div",{className:"navigation",children:[Object(l.jsxs)("div",{className:"navigation-item",children:[Object(l.jsx)("span",{className:"navigation-label",children:"Length: "}),Object(l.jsx)("div",{className:"navigation-item-number-container",children:Object(l.jsx)("div",{className:"num-board",children:n})})]}),Object(l.jsxs)("div",{className:"navigation-item",children:[Object(l.jsx)("span",{className:"navigation-label",children:"Difficulty: "}),Object(l.jsxs)("div",{className:"navigation-item-number-container",children:[Object(l.jsx)("span",{className:"num-board",children:c}),Object(l.jsxs)("div",{className:"difficulty-button-container",children:[Object(l.jsx)("div",{className:"difficulty-button difficulty-up ".concat(a),onClick:function(){return i(c+1)}}),Object(l.jsx)("div",{className:"difficulty-button difficulty-down ".concat(s),onClick:function(){return i(c-1)}})]})]})]})]})},b=function(t){var n=t.fields;return Object(l.jsx)("div",{className:"field",children:n.map((function(t){return t.map((function(t){return Object(l.jsx)("div",{className:"dots ".concat(t)})}))}))})},j=function(t){var n=t.status,e=t.onStart,c=t.onStop,i=t.onRestart;return Object(l.jsxs)("div",{className:"button",children:["gameOver"===n&&Object(l.jsx)("button",{onClick:i,className:"btn btn-gameover",children:"gameover"}),"init"===n&&Object(l.jsx)("button",{onClick:e,className:"btn btn-init",children:"start"}),"suspended"===n&&Object(l.jsx)("button",{onClick:e,className:"btn btn-suspended",children:"start"}),"playing"===n&&Object(l.jsx)("button",{onClick:c,className:"btn btn-playing",children:"stop"}),console.log(n)]})},d=e(5),f=e(7),O=function(t){var n=t.onChange;return Object(l.jsxs)("div",{className:"manipulation-panel",children:[Object(l.jsx)("button",{onClick:function(){return n("left")},className:"manipulation-btn btn btn-left",children:Object(l.jsx)(d.a,{icon:f.b})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){return n("up")},className:"manipulation-btn btn btn-up",children:Object(l.jsx)(d.a,{icon:f.d})}),Object(l.jsx)("button",{onClick:function(){return n("down")},className:"manipulation-btn btn btn-down",children:Object(l.jsx)(d.a,{icon:f.a})})]}),Object(l.jsx)("button",{onClick:function(){return n("right")},className:"manipulation-btn btn btn-right",children:Object(l.jsx)(d.a,{icon:f.c})})]})},h=function(t,n){for(var e=function(){var e=Math.floor(Math.random()*(t-1-1))+1,c=Math.floor(Math.random()*(t-1-1))+1;if(!n.some((function(t){return t.x===e&&t.y===c})))return{v:{x:e,y:c}}};;){var c=e();if("object"===typeof c)return c.v}},m=function(t,n){for(var e=[],c=0;c<t;c++){var i=new Array(t).fill("");e.push(i)}e[17][17]="snake",e[n.y][n.x]="snake";var a=h(t,[n]);return e[a.y][a.x]="food",e},v={x:17,y:17},x=m(35,v),g=[1e3,500,100,50,10],p=Object.freeze({init:"init",playing:"playing",suspended:"suspended",gameOver:"gameOver"}),y=Object.freeze({up:"up",right:"right",left:"left",down:"down"}),N=Object.freeze({37:y.left,38:y.up,39:y.right,40:y.down}),k=Object.freeze({up:"down",right:"left",left:"right",down:"up"}),C=Object.freeze({up:{x:0,y:-1},right:{x:1,y:0},left:{x:-1,y:0},down:{x:0,y:1}}),w=void 0,S=function(){w&&clearInterval(w)};var E=function(){var t=Object(c.useState)(x),n=Object(o.a)(t,2),e=n[0],i=n[1],a=Object(c.useState)([]),s=Object(o.a)(a,2),d=s[0],f=s[1],E=Object(c.useState)(p.init),z=Object(o.a)(E,2),I=z[0],L=z[1],M=Object(c.useState)(y.up),D=Object(o.a)(M,2),F=D[0],A=D[1],B=Object(c.useState)(3),J=Object(o.a)(B,2),P=J[0],R=J[1],T=Object(c.useState)(0),G=Object(o.a)(T,2),q=G[0],H=G[1];Object(c.useEffect)((function(){return f([v]),w=setInterval((function(){H((function(t){return t+1}))}),g[P-1]),S}),[P]),Object(c.useEffect)((function(){0!==d.length&&I===p.playing&&(U()||(S(),L(p.gameOver)))}),[q]);var K=Object(c.useCallback)((function(t){if(I!==p.playing)return F;k[F]!==t&&A(t)}),[F,I]),Q=Object(c.useCallback)((function(t){I===p.init&&(t<1||t>g.length||R(t))}),[I,P]);Object(c.useEffect)((function(){var t=function(t){var n=N[t.keyCode];n&&K(n)};return document.addEventListener("keydown",t),function(){return document.removeEventListener("keydown",t)}}),[K]);var U=function(){var t,n,c=d[0],a=c.x,s=c.y,o=C[F],l={x:a+o.x,y:s+o.y};if(t=e.length,(n=l).y<0||n.x<0||n.y>t-1||n.x>t-1||function(t,n){return"snake"===t[n.y][n.x]}(e,l))return!1;var u=Object(r.a)(d);if("food"!==e[l.y][l.x]){var b=u.pop();e[b.y][b.x]=""}else{var j=h(e.length,[].concat(Object(r.a)(u),[l]));e[j.y][j.x]="food"}return e[l.y][l.x]="snake",u.unshift(l),f(u),i(e),!0};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("div",{className:"title-container",children:Object(l.jsx)("h1",{className:"title",children:"Snake Game"})}),Object(l.jsx)(u,{length:d.length,difficulty:P,onChangeDifficulty:Q})]}),Object(l.jsx)("main",{className:"main",children:Object(l.jsx)(b,{fields:e})}),Object(l.jsxs)("footer",{className:"footer",children:[Object(l.jsx)(j,{status:I,onStart:function(){L(p.playing)},onStop:function(){return L(p.suspended)},onRestart:function(){w=setInterval((function(){H((function(t){return t+1}))}),100),L(p.init),f([v]),A(y.up),i(m(e.length,v))}}),Object(l.jsx)(O,{onChange:K})]})]})},z=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,25)).then((function(n){var e=n.getCLS,c=n.getFID,i=n.getFCP,a=n.getLCP,s=n.getTTFB;e(t),c(t),i(t),a(t),s(t)}))};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(E,{})}),document.getElementById("root")),z()}},[[24,1,2]]]);
//# sourceMappingURL=main.cff8b0e8.chunk.js.map