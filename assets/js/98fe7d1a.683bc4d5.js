"use strict";(self.webpackChunkredis_reading=self.webpackChunkredis_reading||[]).push([[9280],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),d=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return r?i.createElement(f,s(s({ref:t},c),{},{components:r})):i.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,s[1]=o;for(var d=2;d<a;d++)s[d]=r[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5107:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=r(7462),n=(r(7294),r(3905));const a={sidebar_position:1},s="Redis FAQ",o={unversionedId:"basics/redis",id:"basics/redis",title:"Redis FAQ",description:"Redis\u4e2d\u54ea\u4e9b\u5730\u65b9\u4f7f\u7528\u4e86\u7b97\u6cd5",source:"@site/docs/basics/redis.md",sourceDirName:"basics",slug:"/basics/redis",permalink:"/redis-reading/docs/basics/redis",draft:!1,editUrl:"https://github.com/code-reading-lab/redis-reading/tree/docs/docs/basics/redis.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/redis-reading/docs/category/basics"},next:{title:"Redis\u6e90\u7801\u9605\u8bfb ae.c",permalink:"/redis-reading/docs/basics/ae"}},l={},d=[{value:"Redis\u4e2d\u54ea\u4e9b\u5730\u65b9\u4f7f\u7528\u4e86\u7b97\u6cd5",id:"redis\u4e2d\u54ea\u4e9b\u5730\u65b9\u4f7f\u7528\u4e86\u7b97\u6cd5",level:2},{value:"Redis \u91c7\u7528\u81ea\u5df1\u5b9e\u73b0\u7684\u52a8\u6001\u5b57\u7b26\u4e32\u800c\u4e0d\u662f\u4f7f\u7528 C \u5b57\u7b26\u4e32",id:"redis-\u91c7\u7528\u81ea\u5df1\u5b9e\u73b0\u7684\u52a8\u6001\u5b57\u7b26\u4e32\u800c\u4e0d\u662f\u4f7f\u7528-c-\u5b57\u7b26\u4e32",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"redis-faq"},"Redis FAQ"),(0,n.kt)("h2",{id:"redis\u4e2d\u54ea\u4e9b\u5730\u65b9\u4f7f\u7528\u4e86\u7b97\u6cd5"},"Redis\u4e2d\u54ea\u4e9b\u5730\u65b9\u4f7f\u7528\u4e86\u7b97\u6cd5"),(0,n.kt)("p",null,"Redis \u4f7f\u7528\u4e86\u5f88\u591a\u7b97\u6cd5\u6765\u89e3\u51b3\u4e0d\u540c\u7684\u95ee\u9898\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u89c1\u7684\u7b97\u6cd5\u53ca\u5176\u5e94\u7528\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5e03\u9686\u8fc7\u6ee4\u5668\uff1a\u5728 Redis \u4e2d\u7528\u4e8e\u5b9e\u73b0\u96c6\u5408\u548c HyperLogLog \u6570\u636e\u7ed3\u6784\uff0c\u53ef\u4ee5\u9ad8\u6548\u5730\u5224\u65ad\u4e00\u4e2a\u5143\u7d20\u662f\u5426\u5b58\u5728\u4e8e\u96c6\u5408\u4e2d\uff0c\u6216\u8005\u5bf9\u4e0d\u540c\u7684\u96c6\u5408\u8fdb\u884c\u5408\u5e76\u64cd\u4f5c\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u8df3\u8dc3\u8868\uff1a\u5728 Redis \u4e2d\u7528\u4e8e\u5b9e\u73b0\u6709\u5e8f\u96c6\u5408\uff0c\u53ef\u4ee5\u9ad8\u6548\u5730\u8fdb\u884c\u63d2\u5165\u3001\u5220\u9664\u548c\u67e5\u627e\u64cd\u4f5c\uff0c\u540c\u65f6\u53ef\u4ee5\u652f\u6301\u8303\u56f4\u67e5\u8be2\u3002"),(0,n.kt)("li",{parentName:"ol"},"LRU \u7f13\u5b58\u6dd8\u6c70\u7b97\u6cd5\uff1a\u5728 Redis \u4e2d\u7528\u4e8e\u5b9e\u73b0\u7f13\u5b58\u6dd8\u6c70\u7b56\u7565\uff0c\u53ef\u4ee5\u9ad8\u6548\u5730\u8bc6\u522b\u5e76\u5220\u9664\u6700\u8fd1\u6700\u5c11\u4f7f\u7528\u7684\u952e\u503c\u5bf9\uff0c\u4ee5\u91ca\u653e\u7a7a\u95f4\u3002"),(0,n.kt)("li",{parentName:"ol"},"RDB \u6301\u4e45\u5316\u7b97\u6cd5\uff1a\u5728 Redis \u4e2d\u7528\u4e8e\u5b9e\u73b0\u6570\u636e\u7684\u6301\u4e45\u5316\uff0c\u53ef\u4ee5\u5c06 Redis \u6570\u636e\u5e93\u4fdd\u5b58\u5230\u78c1\u76d8\u4e0a\uff0c\u4ee5\u4fbf\u5728 Redis \u91cd\u542f\u65f6\u6062\u590d\u6570\u636e\u3002"),(0,n.kt)("li",{parentName:"ol"},"AOF \u6301\u4e45\u5316\u7b97\u6cd5\uff1a\u5728 Redis \u4e2d\u7528\u4e8e\u5b9e\u73b0\u6570\u636e\u7684\u6301\u4e45\u5316\uff0c\u53ef\u4ee5\u5c06 Redis \u7684\u5199\u64cd\u4f5c\u4ee5\u8ffd\u52a0\u7684\u65b9\u5f0f\u4fdd\u5b58\u5230\u78c1\u76d8\u4e0a\uff0c\u4ee5\u4fbf\u5728 Redis \u91cd\u542f\u65f6\u6062\u590d\u6570\u636e\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u4e00\u81f4\u6027\u54c8\u5e0c\u7b97\u6cd5\uff1a\u5728 Redis \u96c6\u7fa4\u4e2d\u7528\u4e8e\u5b9e\u73b0\u6570\u636e\u7684\u5206\u7247\u548c\u8d1f\u8f7d\u5747\u8861\uff0c\u53ef\u4ee5\u9ad8\u6548\u5730\u5c06\u6570\u636e\u5206\u6563\u5230\u591a\u4e2a\u8282\u70b9\u4e0a\uff0c\u4ee5\u4fbf\u5b9e\u73b0\u6c34\u5e73\u6269\u5c55\u3002"),(0,n.kt)("li",{parentName:"ol"},"GEO \u7a7a\u95f4\u7d22\u5f15\u7b97\u6cd5\uff1a\u5728 Redis \u4e2d\u7528\u4e8e\u5b9e\u73b0\u5730\u7406\u4f4d\u7f6e\u7684\u7d22\u5f15\u548c\u67e5\u8be2\uff0c\u53ef\u4ee5\u9ad8\u6548\u5730\u67e5\u627e\u6307\u5b9a\u8303\u56f4\u5185\u7684\u5730\u7406\u4f4d\u7f6e\u6570\u636e\u3002"),(0,n.kt)("li",{parentName:"ol"},"Sentinel \u54e8\u5175\u7b97\u6cd5\uff1a\u5728 Redis \u9ad8\u53ef\u7528\u65b9\u6848\u4e2d\u7528\u4e8e\u5b9e\u73b0\u6545\u969c\u68c0\u6d4b\u548c\u81ea\u52a8\u6545\u969c\u8f6c\u79fb\uff0c\u53ef\u4ee5\u4fdd\u8bc1 Redis \u7684\u9ad8\u53ef\u7528\u6027\u3002")),(0,n.kt)("p",null,"\u7b49\u7b49\u3002"),(0,n.kt)("h2",{id:"redis-\u91c7\u7528\u81ea\u5df1\u5b9e\u73b0\u7684\u52a8\u6001\u5b57\u7b26\u4e32\u800c\u4e0d\u662f\u4f7f\u7528-c-\u5b57\u7b26\u4e32"},"Redis \u91c7\u7528\u81ea\u5df1\u5b9e\u73b0\u7684\u52a8\u6001\u5b57\u7b26\u4e32\u800c\u4e0d\u662f\u4f7f\u7528 C \u5b57\u7b26\u4e32"),(0,n.kt)("p",null,"\u4e3b\u8981\u6709\u4ee5\u4e0b\u51e0\u4e2a\u539f\u56e0\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u52a8\u6001\u6269\u5c55\uff1aC \u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u662f\u56fa\u5b9a\u7684\uff0c\u5982\u679c\u9700\u8981\u52a8\u6001\u6269\u5c55\u5b57\u7b26\u4e32\u957f\u5ea6\uff0c\u5219\u9700\u8981\u91cd\u65b0\u5206\u914d\u7a7a\u95f4\u5e76\u5c06\u539f\u6709\u5b57\u7b26\u4e32\u590d\u5236\u5230\u65b0\u7684\u7a7a\u95f4\u4e2d\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u6bd4\u8f83\u7e41\u7410\u3002\u800c Redis \u7684\u52a8\u6001\u5b57\u7b26\u4e32\u53ef\u4ee5\u52a8\u6001\u6269\u5c55\uff0c\u53ef\u4ee5\u8282\u7701\u7a7a\u95f4\uff0c\u63d0\u9ad8\u4e86\u6027\u80fd\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u4e8c\u8fdb\u5236\u5b89\u5168\uff1aC \u5b57\u7b26\u4e32\u662f\u4ee5 null \u7ed3\u5c3e\u7684\u5b57\u7b26\u6570\u7ec4\uff0c\u4e0d\u652f\u6301\u5b58\u50a8\u4e8c\u8fdb\u5236\u6570\u636e\u3002\u800c Redis \u7684\u52a8\u6001\u5b57\u7b26\u4e32\u662f\u4e8c\u8fdb\u5236\u5b89\u5168\u7684\uff0c\u53ef\u4ee5\u5b58\u50a8\u4efb\u610f\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u5982\u56fe\u7247\u3001\u97f3\u9891\u3001\u89c6\u9891\u7b49\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u51cf\u5c11\u5185\u5b58\u5206\u914d\u6b21\u6570\uff1aC \u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u662f\u56fa\u5b9a\u7684\uff0c\u5982\u679c\u9700\u8981\u5b58\u50a8\u7684\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u8fc7\u4e86\u9884\u7559\u7684\u7a7a\u95f4\uff0c\u5219\u9700\u8981\u91cd\u65b0\u5206\u914d\u7a7a\u95f4\uff0c\u5e76\u5c06\u539f\u6709\u5b57\u7b26\u4e32\u590d\u5236\u5230\u65b0\u7684\u7a7a\u95f4\u4e2d\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u6bd4\u8f83\u8017\u65f6\u3002\u800c Redis \u7684\u52a8\u6001\u5b57\u7b26\u4e32\u4f1a\u9884\u7559\u4e00\u4e9b\u989d\u5916\u7684\u7a7a\u95f4\uff0c\u5f53\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u8fc7\u4e86\u9884\u7559\u7a7a\u95f4\u65f6\uff0c\u4f1a\u81ea\u52a8\u6269\u5c55\u7a7a\u95f4\uff0c\u907f\u514d\u4e86\u9891\u7e41\u7684\u5185\u5b58\u5206\u914d\u64cd\u4f5c\uff0c\u63d0\u9ad8\u4e86\u6027\u80fd\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u517c\u5bb9\u6027\uff1aC \u5b57\u7b26\u4e32\u662f\u4ee5 null \u7ed3\u5c3e\u7684\u5b57\u7b26\u6570\u7ec4\uff0c\u5982\u679c\u9700\u8981\u652f\u6301\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u4e3a 0\uff0c\u5c31\u9700\u8981\u7279\u6b8a\u5904\u7406\u3002\u800c Redis \u7684\u52a8\u6001\u5b57\u7b26\u4e32\u4e0d\u9700\u8981\u7279\u6b8a\u5904\u7406\uff0c\u53ef\u4ee5\u652f\u6301\u4efb\u610f\u957f\u5ea6\u7684\u5b57\u7b26\u4e32\u3002")))}u.isMDXComponent=!0}}]);