"use strict";(self.webpackChunkredis_reading=self.webpackChunkredis_reading||[]).push([[4632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),k=a,u=d["".concat(c,".").concat(k)]||d[k]||m[k]||i;return n?r.createElement(u,o(o({ref:t},s),{},{components:n})):r.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=k;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:6},o="Redis\u6e90\u7801\u9605\u8bfb anet.c",p={unversionedId:"basics/anet",id:"basics/anet",title:"Redis\u6e90\u7801\u9605\u8bfb anet.c",description:"src/anet.c \u662f Redis \u4e2d\u7528\u4e8e\u7f51\u7edc\u7f16\u7a0b\u7684\u5e95\u5c42\u5e93\u6587\u4ef6\uff0c\u4e3b\u8981\u63d0\u4f9b\u4e86\u4e00\u4e9b\u7f51\u7edc\u7f16\u7a0b\u76f8\u5173\u7684\u51fd\u6570\u548c\u6570\u636e\u7ed3\u6784\u3002",source:"@site/docs/basics/anet.md",sourceDirName:"basics",slug:"/basics/anet",permalink:"/redis-reading/docs/basics/anet",draft:!1,editUrl:"https://github.com/code-reading-lab/redis-reading/tree/docs/docs/basics/anet.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Redis\u6e90\u7801\u9605\u8bfb adlist.c",permalink:"/redis-reading/docs/basics/adlist"},next:{title:"Redis\u6e90\u7801\u9605\u8bfb ads.c",permalink:"/redis-reading/docs/basics/sds"}},c={},l=[],s={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"redis\u6e90\u7801\u9605\u8bfb-anetc"},"Redis\u6e90\u7801\u9605\u8bfb anet.c"),(0,a.kt)("p",null,"src/anet.c \u662f Redis \u4e2d\u7528\u4e8e\u7f51\u7edc\u7f16\u7a0b\u7684\u5e95\u5c42\u5e93\u6587\u4ef6\uff0c\u4e3b\u8981\u63d0\u4f9b\u4e86\u4e00\u4e9b\u7f51\u7edc\u7f16\u7a0b\u76f8\u5173\u7684\u51fd\u6570\u548c\u6570\u636e\u7ed3\u6784\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u51fd\u6570")),(0,a.kt)("p",null,"src/anet.c \u4e2d\u5b9a\u4e49\u4e86\u5f88\u591a\u7f51\u7edc\u7f16\u7a0b\u76f8\u5173\u7684\u51fd\u6570\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"anetTcpNonBlockConnect"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"anetTcpServer"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"anetAccept"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"anetNonBlock"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"anetKeepAlive")," \u7b49\u3002\u8fd9\u4e9b\u51fd\u6570\u662f Redis \u8fdb\u884c\u7f51\u7edc\u901a\u4fe1\u7684\u5e95\u5c42\u51fd\u6570\uff0c\u901a\u8fc7\u8fd9\u4e9b\u51fd\u6570\u53ef\u4ee5\u5b9e\u73b0 TCP \u8fde\u63a5\u3001\u6570\u636e\u4f20\u8f93\u3001\u8fde\u63a5\u4fdd\u6d3b\u7b49\u529f\u80fd\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"src/anet.c")," \u662f Redis \u4e2d\u8d1f\u8d23\u7f51\u7edc\u7f16\u7a0b\u7684\u6e90\u4ee3\u7801\u6587\u4ef6\u3002\u5b83\u5305\u542b\u4e86\u4e00\u7cfb\u5217\u7528\u4e8e\u521b\u5efa\u3001\u914d\u7f6e\u548c\u7ba1\u7406\u7f51\u7edc\u8fde\u63a5\u7684\u51fd\u6570\u3002\u4ee5\u4e0b\u662f\u8fd9\u4e2a\u6587\u4ef6\u4e2d\u7684\u4e3b\u8981\u529f\u80fd\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa\u5957\u63a5\u5b57 (socket)\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"anetCreateSocket")," \u51fd\u6570\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u975e\u963b\u585e\u7684\u5957\u63a5\u5b57\uff0c\u652f\u6301 IPv4 \u548c IPv6\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u5957\u63a5\u5b57\u9009\u9879\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"anetSetReuseAddr")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"anetSetTcpNoDelay")," \u51fd\u6570\u7528\u4e8e\u8bbe\u7f6e\u5957\u63a5\u5b57\u7684\u9009\u9879\uff0c\u5982\u5730\u5740\u590d\u7528\u548c\u7981\u7528 Nagle \u7b97\u6cd5\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7ed1\u5b9a\u548c\u76d1\u542c\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"anetTcpServer")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"anetTcp6Server")," \u51fd\u6570\u7528\u4e8e\u5c06\u5957\u63a5\u5b57\u7ed1\u5b9a\u5230\u6307\u5b9a\u7684 IP \u5730\u5740\u548c\u7aef\u53e3\u4e0a\uff0c\u5e76\u5f00\u59cb\u76d1\u542c\u8fde\u63a5\u8bf7\u6c42\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"int anetListen(char *err, int s, struct sockaddr *sa, socklen_t len, int backlog);"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"backlog")," \u53c2\u6570\u8868\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},"socket")," \u7684\u76d1\u542c\u961f\u5217\u7684\u6700\u5927\u957f\u5ea6\uff0c\u5373\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"socket")," \u8fd8\u6ca1\u6709\u88ab ",(0,a.kt)("inlineCode",{parentName:"p"},"accept")," \u63a5\u53d7\u4e4b\u524d\uff0c\u7b49\u5f85\u8fde\u63a5\u7684\u961f\u5217\u957f\u5ea6\u3002\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"backlog")," \u53c2\u6570\u8bbe\u7f6e\u8fc7\u5c0f\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u8fde\u63a5\u65e0\u6cd5\u53ca\u65f6\u88ab\u63a5\u53d7\uff0c\u4ece\u800c\u9020\u6210\u8fde\u63a5\u4e22\u5931\u6216\u8005\u8fde\u63a5\u8d85\u65f6\u7684\u95ee\u9898\u3002\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"backlog")," \u53c2\u6570\u8bbe\u7f6e\u8fc7\u5927\uff0c\u53ef\u80fd\u4f1a\u5360\u7528\u8fc7\u591a\u7684\u7cfb\u7edf\u8d44\u6e90\uff0c\u9020\u6210\u7cfb\u7edf\u8d1f\u62c5\u8fc7\u91cd\u7684\u95ee\u9898\u3002"),(0,a.kt)("p",{parentName:"li"},"  \u56e0\u6b64\uff0c\u5408\u7406\u5730\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"backlog")," \u53c2\u6570\u5f88\u91cd\u8981\uff0c\u9700\u8981\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8fdb\u884c\u8c03\u6574\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u6839\u636e\u7cfb\u7edf\u7684\u8d1f\u8f7d\u60c5\u51b5\u548c\u8fde\u63a5\u7684\u9884\u671f\u6570\u91cf\u6765\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"backlog")," \u53c2\u6570\u3002\u5982\u679c\u7cfb\u7edf\u7684\u8d1f\u8f7d\u6bd4\u8f83\u91cd\uff0c\u53ef\u4ee5\u9002\u5f53\u8c03\u5c0f ",(0,a.kt)("inlineCode",{parentName:"p"},"backlog")," \u53c2\u6570\uff1b\u5982\u679c\u8fde\u63a5\u7684\u9884\u671f\u6570\u91cf\u6bd4\u8f83\u5927\uff0c\u53ef\u4ee5\u9002\u5f53\u8c03\u5927 ",(0,a.kt)("inlineCode",{parentName:"p"},"backlog")," \u53c2\u6570\u3002\n\u5728 Redis \u4e2d\uff0cbacklog \u53c2\u6570\u7684\u9ed8\u8ba4\u503c\u4e3a 511\uff0c\u8fd9\u4e2a\u503c\u5df2\u7ecf\u88ab\u8bc1\u660e\u53ef\u4ee5\u6ee1\u8db3\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u7684\u9700\u6c42\u3002\u5982\u679c\u9700\u8981\u8c03\u6574 backlog \u53c2\u6570\uff0c\u53ef\u4ee5\u5728 anetListen \u51fd\u6570\u4e2d\u4f20\u5165\u76f8\u5e94\u7684\u503c\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u63a5\u53d7\u5ba2\u6237\u7aef\u8fde\u63a5\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"anetTcpAccept")," \u51fd\u6570\u7528\u4e8e\u63a5\u53d7\u5ba2\u6237\u7aef\u7684\u8fde\u63a5\u8bf7\u6c42\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u5957\u63a5\u5b57\u63cf\u8ff0\u7b26\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8fde\u63a5\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"anetUnixGenericConnect")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"anetTcpNonBlockConnect")," \u51fd\u6570\u7528\u4e8e\u8fde\u63a5\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\uff0c\u652f\u6301\u963b\u585e\u548c\u975e\u963b\u585e\u6a21\u5f0f\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u83b7\u53d6\u548c\u8bbe\u7f6e\u9519\u8bef\u4fe1\u606f\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"anetSetError")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"anetGetError")," \u51fd\u6570\u7528\u4e8e\u8bbe\u7f6e\u548c\u83b7\u53d6\u4e0e\u5957\u63a5\u5b57\u76f8\u5173\u7684\u9519\u8bef\u4fe1\u606f\u3002"))))}m.isMDXComponent=!0}}]);