(window.webpackJsonpresume=window.webpackJsonpresume||[]).push([[0],{10:function(n,e,t){n.exports=t(20)},15:function(n,e,t){},19:function(n,e,t){},20:function(n,e,t){"use strict";t.r(e);var r,a=t(0),o=t.n(a),c=t(4),i=t.n(c),s=(t(15),t(1)),u=t.n(s),l=t(5),p=t(2),h=t(6),d=t.n(h),f=t(9),m=t.n(f),w=function(n){return i.a.createPortal(o.a.createElement("style",null,n.style),document.head)},y=Object(a.forwardRef)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{code:""},e=arguments.length>1?arguments[1]:void 0;return o.a.createElement("pre",{ref:e,className:"editor",dangerouslySetInnerHTML:{__html:n.code}})})),g=function(n){return o.a.createElement("div",{className:"controller"},n.pauseStatus?o.a.createElement("i",{className:"iconfont shining",onClick:n.onStart?n.onStart:void 0},"\ue614"):o.a.createElement("i",{className:"iconfont",onClick:n.onPause?n.onPause:void 0},"\ue668"),o.a.createElement("i",{className:"iconfont",onClick:n.onSkip?n.onSkip:void 0},"\ue60e"))},v=Object(a.forwardRef)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mdStr:""},e=arguments.length>1?arguments[1]:void 0;return o.a.createElement("pre",{ref:e,className:"work",dangerouslySetInnerHTML:{__html:n.mdStr+""}})})),b="/**\n *\n * Hey. My name's Sirius Chen. I'm an software engineer.\n *\n * It seems that you are interested in how i made my resume.\n *\n * Here we go!\n *\n * It's an live coding!\n */\n\n/**\n * We start by animating... well, everything.\n */\n\n* {\n  transition: all 1s;\n}\n\n/**\n * Uha, nothing happends. But you'll see next.\n *\n * Working in this big empty space is tough.\n *\n * We gonna to make an simple editor.\n *\n */\n\n.editor {\n  height: 100%;\n  width: 100%;\n  background: #303030;\n  border: 1px solid #ccc;\n  color: white;\n  font-size: 14px;\n  overflow: auto;\n  font-family: monospace;\n  padding: 10px 10px 20px;\n  white-space: pre-wrap;\n  outline: 0;\n}\n\n/**\n * Looks a little different, right?\n * \n * But we have to go further.\n */\n\n.comment {\n  color: #857f6b;\n  font-style: italic;\n}\n.selector {\n  color: #d7ba7d;\n}\n.key {\n  color: #9cdcfe;\n}\n.value {\n  color: #ce9178;\n}\n.value .unit {\n  color: #f92772;\n}\n\n/**\n * The editor fills the entire screen.\n *\n * But we need other places to show our main content.\n * \n * We have to do something like this.\n */\n\n.editor {\n  width: 50%; /*reset the width*/\n}\n\n.work {\n  width: 50%;\n  height: 100%;\n  overflow: auto;\n}\n\n/**\n * The simple editor is done.\n *\n * we turn our eyes to the right part\n *\n * I wirte my resume in markdown (with some html),\n * \n * which can be easily tranfered to html.\n */\n",k="# [\u9648\u54f2\u9f99/<span>Sirius Chen</span>](http://sirius-chen.xyz/resume/)\n\n## \u8054\u7cfb\u65b9\u5f0f\n- \u624b\u673a : 13121859855\n- Email : haselczl@gmail.com / 463355954@qq.com\n- QQ/\u5fae\u4fe1 : 463355954 / czl463355954\n- Github: https://github.com/EscapeB\n\n## \u57fa\u672c\u4fe1\u606f\n- \u7537/1994/\u7855\u58eb/\u672a\u5a5a\n- \u5de5\u4f5c\u7ecf\u5386 : 2 \u5e74\n- \u671f\u671b\u804c\u4f4d: \u524d\u7aef/\u5168\u6808\u5de5\u7a0b\u5e08\n- \u671f\u671b\u57ce\u5e02\uff1a\u5317\u4eac/\u676d\u5dde/\u6df1\u5733\n- \u671f\u671b\u85aa\u8d44\uff1a\u9762\u8bae\n\n## \u6559\u80b2\u80cc\u666f\n- <span>2016-2018</span><span>\u5317\u4eac\u4ea4\u901a\u5927\u5b66</span><span>\u8f6f\u4ef6\u5de5\u7a0b</span><span>\u7855\u58eb</span>\n- <span>2012-2016</span><span>\u5317\u4eac\u4ea4\u901a\u5927\u5b66</span><span>\u8f6f\u4ef6\u5de5\u7a0b</span><span>\u672c\u79d1</span>\n\n## \u5de5\u4f5c\u7ecf\u5386\n### \u6ef4\u6ef4 | 2018/07 ~ \u4eca | \u7814\u53d1\u5de5\u7a0b\u5e08\n2017 \u5e74 4 \u6708\u5f00\u59cb\u5728\u6ef4\u6ef4\u5b9e\u4e60\uff0c\u4e4b\u540e\u8f6c\u6b63\u5e76\u5de5\u4f5c\u81f3\u4eca\u3002\u4e3b\u8981\u8d1f\u8d23\u8fd0\u8425\u8425\u9500\u7cfb\u7edf\uff0c\u6570\u636e\u5e73\u53f0\u3001\u5206\u6790\u5e73\u53f0\u53ca\u591a\u4e2a AI \u843d\u5730\u9879\u76ee\u7684\u7814\u53d1\u5de5\u4f5c\u3002\n\n## \u9879\u76ee\u7ecf\u5386\n### \u6807\u7b7e\u7cfb\u7edf | 2017/04 ~ \u4eca\n  \u6807\u7b7e\u7cfb\u7edf\u662f\u4e00\u4e2a\u8fd0\u8425\u8425\u9500\u7cfb\u7edf\uff0c\u57fa\u4e8e\u5927\u6570\u636e\u7684\u7528\u6237\u753b\u50cf\u6570\u636e\uff0c\u5feb\u901f\u7b5b\u9009\u51fa\u76ee\u6807\u7528\u6237\u7fa4\u4f53\uff0c\u5b9e\u73b0\u7cbe\u7ec6\u5316\u8425\u9500\uff0c\u5e76\u652f\u6301\u5bf9\u7528\u6237\u7fa4\u4f53\u8fdb\u884c\u5206\u6790\u3001\u8ba1\u7b97\u3001\u6269\u5c55\u7b49\u7b49\u4e00\u7cfb\u5217\u64cd\u4f5c\u3002\n  **\u9879\u76ee\u804c\u8d23\uff1a**\n    - \u5b8c\u6210\u7cfb\u7edf\u524d\u7aef\u67b6\u6784\u7684\u8bbe\u8ba1\u548c React \u6280\u672f\u6808\u91cd\u6784\u3002\n    - \u8d1f\u8d23\u7cfb\u7edf\u4e1a\u52a1\u8fed\u4ee3\u7684\u5f00\u53d1\u3002\n  **\u9879\u76ee\u6210\u679c\uff1a**\n    - \u7cfb\u7edf\u63a5\u5165\u516c\u53f8\u5185\u90e8\u5168\u90e8\u4e1a\u52a1\u7ebf\uff0c\u652f\u6301\u96c6\u56e2\u5185\u90e8 80%\u4ee5\u4e0a\u7684\u8fd0\u8425\u8425\u9500\u6d3b\u52a8\u3002\n    - \u7cfb\u7edf\u65e5\u5747 UV800+\uff0c\u914d\u5957\u670d\u52a1\u8c03\u7528\u7ea6 50 \u4ebf\u6b21/\u5929\u3002\n### Jormungand \u7ec4\u4ef6\u5e93 | 2018/10 ~ \u4eca\n  Joumungand \u7ec4\u4ef6\u5e93\u662f\u4e00\u5957\u57fa\u4e8e React+TypeScript \u6784\u5efa\u7684\u5185\u90e8\u4e1a\u52a1\u7ec4\u4ef6\u5e93\uff0c\u4e3b\u8981\u7528\u4e8e\u5904\u7406\u5185\u90e8\u591a\u4e2a\u6570\u636e\u5e73\u53f0\u7684\u6570\u636e\u4e1a\u52a1\u3002\n  **\u9879\u76ee\u804c\u8d23\uff1a**\n    - \u8d1f\u8d23\u7ec4\u4ef6\u5e93\u7684\u67b6\u6784\u53ca\u5f00\u53d1\u5de5\u5177\u94fe\u914d\u7f6e(\u4e3b\u8981\u5305\u542b TypeScript\u3001Webpack\u3001ESLint\u3001git hook\u3001\u6570\u636emock\u3001gulp \u7b49)\u3002\n    - \u8d1f\u8d23\u7ec4\u4ef6\u5e93\u591a\u8bed\u8a00\u3001\u591a\u73af\u5883\u3001\u6d88\u606f\u6ce8\u518c\u901a\u77e5\u65b9\u6848\u7684\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u3002\n    - \u8d1f\u8d23 80%\u4ee5\u4e0a\u4e1a\u52a1\u7ec4\u4ef6\u7684\u5f00\u53d1\u548c\u8fed\u4ee3\u3002\n  **\u9879\u76ee\u6210\u679c\uff1a**\n    - \u6210\u529f\u5e94\u7528\u4e8e\u7ec4\u5185 6 \u4e2a\u6570\u636e\u5e73\u53f0/\u7cfb\u7edf\u7684\u6784\u5efa\uff0c\u540c\u65f6\u63a5\u5165\u4e86 10+\u4e2a\u5916\u90e8\u7cfb\u7edf\u3002\n    - \u51cf\u5c11\u591a\u4e2a\u9879\u76ee\u5f00\u53d1\u7ef4\u62a4\u6210\u672c\uff0c\u4fdd\u8bc1\u4e0d\u540c\u7cfb\u7edf\u4e1a\u52a1\u7684\u4e00\u81f4\u6027\u3002\n### \u667a\u80fd\u5ba2\u670d | 2019/04 ~ 2019/10\n  \u6ef4\u6ef4\uff08\u5404\u4e2a\u5ba2\u6237\u7aef\u53ca\u5c0f\u7a0b\u5e8f\u7aef\uff09\u5728\u7ebf\u667a\u80fd\u5ba2\u670d\u3002\u57fa\u4e8eNLP\u6280\u672f\uff0c\u51cf\u5c11\u4eba\u5de5\u5ba2\u670d\u7684\u538b\u529b\u548c\u6210\u672c\u3002\n  **\u9879\u76ee\u804c\u8d23\uff1a**\n    - \u6280\u672f\u6808\u8fc1\u79fb\u91cd\u6784\uff08jQuery \u81f3 React\uff09\uff0c\u4e3b\u8981\u4e1a\u52a1\u903b\u8f91\u540e\u79fb\u81f3\u670d\u52a1\u7aef\u3002\n    - \u591a\u79cd\u56de\u7b54\u5361\u7247\u7684\u5f00\u53d1\u3002\n  **\u9879\u76ee\u6210\u679c\uff1a**\n    - \u4e1a\u52a1\u903b\u8f91\u540e\u7f6e\uff0c\u524d\u7aef\u53ea\u9700\u8981\u505a\u9875\u9762\u6e32\u67d3\uff0c\u9879\u76ee\u5f00\u53d1\u8fed\u4ee3\u6548\u7387\u63d0\u5347\u3002\n    - \u4e0a\u7ebf\u540e\u4eba\u5de5\u5ba2\u670d\u8fdb\u7ebf\u7387\u4e0b\u964d 10%\uff0c\u6781\u5927\u8282\u7ea6\u4eba\u5de5\u6210\u672c\u3002\n### [IDEA \u5e73\u53f0](http://idea.didichuxing.com) | 2019/08 ~ 2019/10\n  DiDi IDEA \u662f\u4e00\u4e2a AI \u5f00\u653e\u5e73\u53f0\uff0c\u8fd0\u7528\u81ea\u7136\u8bed\u8a00\u7406\u89e3\u53ca\u6df1\u5ea6\u5b66\u4e60\u7b97\u6cd5\uff0c\u4e3a\u76ee\u6807\u4f01\u4e1a\u63d0\u4f9b\u7684\u667a\u80fd\u5ba2\u670d\u673a\u5668\u4eba\u3002\u4e3b\u8981\u91c7\u7528 Vue \u6280\u672f\u6808\u5f00\u53d1\u5b9e\u73b0\u3002\n  **\u9879\u76ee\u804c\u8d23\uff1a**\n    - \u8d1f\u8d23\u5e73\u53f0\u4fa7\u524d\u7aef\u6846\u67b6\u7684\u642d\u5efa\uff08\u57fa\u4e8e VueCLI 3\uff09\u3002\n    - \u8d1f\u8d23\u5e73\u53f0\u4fa7\u673a\u5668\u4eba\u3001\u6280\u80fd\u3001\u7528\u6237\u4e09\u4e2a\u7ba1\u7406\u6a21\u5757\u7684\u5f00\u53d1\u3002\n    - \u8d1f\u8d23[\u5e73\u53f0\u6587\u6863](http://bot-doc.didichuxing.com)\u642d\u5efa\u3002\n    - \u8d1f\u8d23\u5bf9\u5916 JS-SDK \u7684\u5f00\u53d1\uff0c\u673a\u5668\u4eba\u5ba2\u670d H5 \u9875\u9762\u7684\u5f00\u53d1\u3002\n  **\u9879\u76ee\u6210\u679c\uff1a**\n    - \u9879\u76ee\u4e00\u4e2a\u6708\u5185\u5feb\u901f\u4e0a\u7ebf\uff0c\u5e76\u6210\u529f\u63a5\u5165\u5916\u90e8\u7528\u6237\uff0c\u5bf9\u5185\u63a5\u5165 10+\u4e2a\u7cfb\u7edf/\u5e73\u53f0\u3002\n### Node \u5de5\u5177\u7cfb\u7edf | 2018/12 ~ \u4eca\n  \u4e00\u7cfb\u5217\u7ec4\u5185\u5de5\u5177\u670d\u52a1\uff0c\u5e2e\u52a9\u7cfb\u7edf\u5f00\u53d1\u548c\u5b9e\u73b0\u3002\u4e3b\u8981\u91c7\u7528 Egg+TypeScript \u5f00\u53d1\u3002\u5305\u542b\u4e00\u4e0b\u5de5\u5177\uff1a\n    - \u63a5\u53e3mock\uff1a\u6839\u636e\u7528\u6237\u914d\u7f6e\uff0c\u57fa\u4e8emockjs\u63d0\u4f9b\u63a5\u53e3mock\u529f\u80fd\u3002\n    - \u62a5\u8868\u6e32\u67d3+\u53d1\u9001\uff1acanvas \u6e32\u67d3\u62a5\u8868\u56fe\u7247\uff0c\u4e0a\u4f20 cdn\uff0c\u90ae\u4ef6\u53d1\u9001\u62a5\u8868\u3002\n    - \u6587\u4ef6\u6821\u9a8c\uff1a\u6821\u9a8c\u6587\u4ef6\u683c\u5f0f\u662f\u5426\u7b26\u5408\u7279\u5b9a\u7cfb\u7edf\u8981\u6c42\u3002\n    - \u63a5\u53e3\u6b63\u786e\u6027\u3001\u5ef6\u8fdf\u68c0\u6d4b\uff1a\u68c0\u6d4b\u7279\u5b9a\u63a5\u53e3\u7684\u5ef6\u8fdf\u53ca\u6570\u636e\u6b63\u786e\u6027\uff0c\u5e76\u8fdb\u884c\u53ef\u89c6\u5316\u5c55\u793a\u3002\n  **\u9879\u76ee\u804c\u8d23\uff1a**\n    - \u8d1f\u8d23\u5de5\u5177\u7cfb\u7edf\u7684\u5168\u90e8\u5f00\u53d1\u5de5\u4f5c\u3002\n",E="/**\n * The resume looks not good.\n *\n * We need to add some style.\n */\n.work {\n  box-shadow: -4px 4px 2px 0 rgba(0, 0, 0, 0.3);\n  padding: 10px;\n  line-height: 20px;\n  /* letter-spacing: 1px; */\n}\n.work h2 {\n  padding: 5px;\n  border-bottom: 1px solid #000;\n}\n.work h1 span {\n  font-size: 1em;\n}\n.work a {\n  text-decoration: none;\n}\n.work ul:nth-of-type(1),\n.work ul:nth-of-type(2),\n.work ul:nth-of-type(3) {\n  display: flex;\n  flex-wrap: wrap;\n}\n.work ul:nth-of-type(1) > li,\n.work ul:nth-of-type(2) > li {\n  width: 50%;\n  padding: 5px;\n}\n\n.work ul:nth-of-type(3) > li {\n  width: 100%;\n  padding: 5px;\n}\n.work ul:nth-of-type(3) span {\n  margin-right: 2.5rem;\n}\n\n/* Then, we hide our simple editor.\n *\n * And resize the resume content.\n */\n.editor {\n  display: none;\n}\n.work {\n  width: 100%;\n}\n\n/**\n  * Everything is done !\n  * \n  * This project is inspired by Samuel Reed's resume (https://www.strml.net).\n  * \n  * I rewirte it with React.\n  * \n  * If you're interested, you can get project in https://github.com/EscapeB/resume.\n  * \n  * Edit and make your own resume :)\n  */\n";t(19);!function(n){n[n.EDITOR=0]="EDITOR",n[n.WORK=1]="WORK",n[n.STYLESHEET=2]="STYLESHEET"}(r||(r={}));var x=16,S=function(){var n=Object(a.useRef)(null),e=Object(a.useRef)(null),t=Object(a.useRef)(""),c=Object(a.useRef)(""),i=Object(a.useRef)(""),s=Object(a.useRef)(!1),h=Object(a.useRef)(!0),f=Object(a.useRef)(!0),S=Object(a.useState)(""),O=Object(p.a)(S,2),R=O[0],T=O[1],j=Object(a.useState)(""),I=Object(p.a)(j,2),D=I[0],W=I[1],H=Object(a.useState)(""),$=Object(p.a)(H,2),L=$[0],N=$[1],A=Object(a.useState)(!0),z=Object(p.a)(A,2),B=z[0],K=z[1];function C(t){t===r.EDITOR&&n.current?n.current.scrollTop=n.current.scrollHeight:t===r.WORK&&e.current&&(e.current.scrollTop=e.current.scrollHeight)}function J(n,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(n===r.STYLESHEET)c.current+=e,";"===e&&a&&T(c.current);else if(n===r.EDITOR){J(r.STYLESHEET,e,a);var o=/(\d+)(px|vh|vw|em|rem|s)*/g;s.current&&"/"!==e?t.current+=e:"/"===e&&!1===s.current?(s.current=!0,t.current+=e):"/"===e&&"*"===t.current.slice(-1)&&!0===s.current?(s.current=!1,t.current=t.current.replace(/(\/\*(?:[^](?!\/\*))*\*)$/,'<span class="comment">$1/</span>')):";"===e?t.current=t.current.replace(/([a-zA-Z- ^\n]*):([^:]*)$/,(function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e[2]&&(e[2]=e[2].replace(o,'$1<span class="unit">$2</span>')),'<span class="key">'.concat(e[1],'</span>:<span class="value">').concat(e[2],"</span>;")})):"{"===e?t.current=t.current.replace(/((.|,\r|,\r\n|,\n)*)$/,'<span class="selector">$1</span>{'):t.current+=e,a&&W(t.current)}else n===r.WORK&&(i.current+=e,a&&(i.current.length>=k.length?N(d.a.parse(i.current)):N(i.current)))}function P(n,e,t,r,a){return Y.apply(this,arguments)}function Y(){return(Y=Object(l.a)(u.a.mark((function n(e,t,r,a,o){var c,i,s,l,p,d;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(r<t.length)||f.current){n.next=20;break}c=t.slice(r,r+a),r+=a,J(e,c,!0),C(e),i=/[.?!]\s$/,s=/\D[,]\s$/,l=/[^/]\n\n$/,p=o,d=t.slice(r-2,r+1),s.test(d)&&(p=30*o),l.test(d)&&(p=50*o),i.test(d)&&(p=70*o);case 13:return n.next=15,m.a.delay(p);case 15:if(!f.current){n.next=17;break}return n.abrupt("break",18);case 17:if(h.current){n.next=13;break}case 18:n.next=0;break;case 20:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function _(){c.current="",t.current="",i.current="";var n=!0,e=!1,a=void 0;try{for(var o,s=b[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value;J(r.EDITOR,u,!1)}}catch(I){e=!0,a=I}finally{try{n||null==s.return||s.return()}finally{if(e)throw a}}var l=!0,p=!1,m=void 0;try{for(var w,y=k[Symbol.iterator]();!(l=(w=y.next()).done);l=!0){var g=w.value;J(r.WORK,g,!1)}}catch(I){p=!0,m=I}finally{try{l||null==y.return||y.return()}finally{if(p)throw m}}var v=!0,x=!1,S=void 0;try{for(var O,R=E[Symbol.iterator]();!(v=(O=R.next()).done);v=!0){var j=O.value;J(r.EDITOR,j,!1)}}catch(I){x=!0,S=I}finally{try{v||null==R.return||R.return()}finally{if(x)throw S}}T(c.current),W(t.current),N(d()(k)),K(!0),h.current=!0,f.current=!0,c.current="",t.current="",i.current=""}function M(){return(M=Object(l.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(h.current=!1,K(!1),!f.current){n.next=16;break}return f.current=!1,c.current="",t.current="",i.current="",T(""),W(""),N(""),n.next=12,P(r.EDITOR,b,0,1,x);case 12:return n.next=14,P(r.WORK,k,0,1,x);case 14:return n.next=16,P(r.EDITOR,E,0,1,x/2).then((function(){c.current="",t.current="",i.current="",f.current=!0,K(!0)}));case 16:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(a.useEffect)((function(){function n(){return(n=Object(l.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:_();case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),o.a.createElement("div",{className:"App"},o.a.createElement(w,{style:R}),o.a.createElement(y,{ref:n,code:D}),o.a.createElement(v,{ref:e,mdStr:L}),o.a.createElement(g,{pauseStatus:B,onStart:function(){return M.apply(this,arguments)},onSkip:_,onPause:function(){h.current=!0,K(!0)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.08ff12e4.chunk.js.map