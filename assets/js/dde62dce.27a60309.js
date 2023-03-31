"use strict";(self.webpackChunkredis_reading=self.webpackChunkredis_reading||[]).push([[6193],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),k=s,m=d["".concat(o,".").concat(k)]||d[k]||u[k]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=k;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:s,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},8499:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),s=(r(7294),r(3905));const i={sidebar_position:9},a="Redis\u6e90\u7801\u5206\u6790 t_zset.c",l={unversionedId:"basics/t_zset",id:"basics/t_zset",title:"Redis\u6e90\u7801\u5206\u6790 t_zset.c",description:'\u5728 Redis \u6e90\u7801\u5e93\u4e2d\uff0c\u8df3\u8dc3\u8868\u7684\u5b9e\u73b0\u53ef\u4ee5\u5728 "server.h" \u548c "t_zset.c" \u6587\u4ef6\u4e2d\u627e\u5230\u3002',source:"@site/docs/basics/t_zset.md",sourceDirName:"basics",slug:"/basics/t_zset",permalink:"/redis-reading/docs/basics/t_zset",draft:!1,editUrl:"https://github.com/code-reading-lab/redis-reading/tree/docs/docs/basics/t_zset.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Redis\u6e90\u7801\u9605\u8bfb zmalloc.c",permalink:"/redis-reading/docs/basics/zmalloc"},next:{title:"Tutorial - Extras",permalink:"/redis-reading/docs/category/tutorial---extras"}},o={},c=[{value:"\u6570\u636e\u7ed3\u6784\u5206\u6790",id:"\u6570\u636e\u7ed3\u6784\u5206\u6790",level:2},{value:"\u5b9e\u73b0\u7ec6\u8282",id:"\u5b9e\u73b0\u7ec6\u8282",level:2},{value:"\u8de8\u5ea6\u548c\u968f\u673a\u751f\u6210\u5c42\u6570",id:"\u8de8\u5ea6\u548c\u968f\u673a\u751f\u6210\u5c42\u6570",level:2},{value:"\u8df3\u8dc3\u8868\u7684\u5e94\u7528\u573a\u666f",id:"\u8df3\u8dc3\u8868\u7684\u5e94\u7528\u573a\u666f",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,s.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"redis\u6e90\u7801\u5206\u6790-t_zsetc"},"Redis\u6e90\u7801\u5206\u6790 t_zset.c"),(0,s.kt)("p",null,'\u5728 Redis \u6e90\u7801\u5e93\u4e2d\uff0c\u8df3\u8dc3\u8868\u7684\u5b9e\u73b0\u53ef\u4ee5\u5728 "server.h" \u548c "t_zset.c" \u6587\u4ef6\u4e2d\u627e\u5230\u3002'),(0,s.kt)("h2",{id:"\u6570\u636e\u7ed3\u6784\u5206\u6790"},"\u6570\u636e\u7ed3\u6784\u5206\u6790"),(0,s.kt)("p",null,"server.h: \u8fd9\u4e2a\u6587\u4ef6\u5b9a\u4e49\u4e86\u8df3\u8dc3\u8868\u8282\u70b9\u548c\u8df3\u8dc3\u8868\u6570\u636e\u7ed3\u6784\u3002\u8df3\u8dc3\u8868\u7ed3\u6784\u5305\u62ec\u5934\u6307\u9488\u3001\u5c3e\u6307\u9488\u3001\u957f\u5ea6\u548c\u5c42\u7ea7\u3002\u8df3\u8dc3\u8868\u8282\u70b9\u5305\u62ec\u952e\u3001\u5206\u6570\u3001\u5411\u524d\u6307\u9488\u548c\u5411\u540e\u6307\u9488\u3002\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/redis/redis/blob/7.2/src/server.h"},"\u94fe\u63a5"),"\n\u5728 server.h \u4e2d\uff0c\u8df3\u8dc3\u8868\u7684\u5b9a\u4e49\u90e8\u5206\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct zskiplistNode {\n    robj *obj;  // \u8282\u70b9\u7684\u5bf9\u8c61\n    double score;  // \u8282\u70b9\u7684\u5206\u503c\n    struct zskiplistNode *backward;  // \u540e\u9000\u6307\u9488\n    struct zskiplistLevel {\n        struct zskiplistNode *forward;  // \u524d\u8fdb\u6307\u9488\n        unsigned int span;  // \u8de8\u5ea6\n    } level[];\n} zskiplistNode;\n\ntypedef struct zskiplist {\n    struct zskiplistNode *header, *tail;  // \u5934\u8282\u70b9\u548c\u5c3e\u8282\u70b9\n    unsigned long length;  // \u8282\u70b9\u6570\u91cf\n    int level;  // \u6700\u5927\u5c42\u6570\n} zskiplist;\n")),(0,s.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"zskiplistNode")," \u7ed3\u6784\u4f53\u8868\u793a\u8df3\u8dc3\u8868\u7684\u8282\u70b9\uff0c\u5305\u542b\u4e86\u8282\u70b9\u7684\u6210\u5458\u5bf9\u8c61\u548c\u5206\u503c\uff0c\u4ee5\u53ca\u524d\u8fdb\u6307\u9488\u3001\u540e\u9000\u6307\u9488\u548c\u8de8\u5ea6\u3002\u8df3\u8dc3\u8868\u7684\u5c42\u6570\u662f\u52a8\u6001\u751f\u6210\u7684\uff0c\u56e0\u6b64 ",(0,s.kt)("inlineCode",{parentName:"p"},"level")," \u662f\u4e00\u4e2a\u67d4\u6027\u6570\u7ec4\uff0c\u7528\u4e8e\u5b58\u50a8\u8282\u70b9\u7684\u524d\u8fdb\u6307\u9488\u548c\u8de8\u5ea6\u4fe1\u606f\u3002",(0,s.kt)("inlineCode",{parentName:"p"},"zskiplist")," \u7ed3\u6784\u4f53\u8868\u793a\u8df3\u8dc3\u8868\uff0c\u5305\u542b\u4e86\u5934\u8282\u70b9\u3001\u5c3e\u8282\u70b9\u3001\u8282\u70b9\u6570\u91cf\u548c\u6700\u5927\u5c42\u6570\u7b49\u4fe1\u606f\u3002"),(0,s.kt)("p",null,"\u8df3\u8dc3\u8868\u7684\u8282\u70b9\u6309\u7167\u5206\u503c\u4ece\u5c0f\u5230\u5927\u6392\u5e8f\uff0c\u56e0\u6b64\u5728\u63d2\u5165\u548c\u5220\u9664\u8282\u70b9\u65f6\u9700\u8981\u4fdd\u8bc1\u8df3\u8dc3\u8868\u7684\u6709\u5e8f\u6027\u3002\u8df3\u8dc3\u8868\u7684\u8282\u70b9\u548c\u5c42\u6570\u662f\u52a8\u6001\u751f\u6210\u7684\uff0c\u56e0\u6b64\u8df3\u8dc3\u8868\u7684\u6027\u80fd\u975e\u5e38\u4f18\u79c0\uff0c\u5728\u5b9e\u73b0 Redis \u7684\u6709\u5e8f\u96c6\u5408\u7b49\u529f\u80fd\u65f6\uff0c\u8df3\u8dc3\u8868\u662f\u4e00\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u6570\u636e\u7ed3\u6784\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"+------+                                      +------+\n| head |-------------------------------------\x3e| tail |\n+------+                                      +------+\n|  key |  score  | backward | forward | span  |  key |  score  | backward | forward | span  |\n+------+---------+----------+---------+-------+------+---------+----------+---------+-------+\n|      |         |          |         |       |      |         |          |         |       |\n|      |         |          |         |       |      |         |          |         |       |\n|      |         |          |         |       |      |         |          |         |       |\n|      |         |          |         |       |      |         |          |         |       |\n|      |         |          |         |       |      |         |          |         |       |\n+------+---------+----------+---------+-------+------+---------+----------+---------+-------+\n")),(0,s.kt)("p",null,"\u5728\u4e0a\u8ff0\u793a\u610f\u56fe\u4e2d\uff0c\u8df3\u8dc3\u8868\u7531\u5934\u8282\u70b9\u548c\u5c3e\u8282\u70b9\u7ec4\u6210\uff0c\u4e2d\u95f4\u5305\u542b\u4e86\u591a\u4e2a\u8282\u70b9\u3002\u6bcf\u4e2a\u8282\u70b9\u5305\u542b\u4e86\u952e\u503c\u3001\u5206\u503c\u3001\u524d\u8fdb\u6307\u9488\u3001\u540e\u9000\u6307\u9488\u548c\u8de8\u5ea6\u7b49\u4fe1\u606f\u3002\u8282\u70b9\u6309\u7167\u5206\u503c\u4ece\u5c0f\u5230\u5927\u6392\u5e8f\uff0c\u524d\u8fdb\u6307\u9488\u6307\u5411\u5206\u503c\u5927\u4e8e\u5f53\u524d\u8282\u70b9\u7684\u6700\u5c0f\u8282\u70b9\uff0c\u540e\u9000\u6307\u9488\u6307\u5411\u5206\u503c\u5c0f\u4e8e\u5f53\u524d\u8282\u70b9\u7684\u6700\u5927\u8282\u70b9\u3002\u8de8\u5ea6\u662f\u5f53\u524d\u8282\u70b9\u5230\u4e0b\u4e00\u4e2a\u8282\u70b9\u4e4b\u95f4\u7684\u8282\u70b9\u6570\u91cf\uff0c\u7528\u4e8e\u4f18\u5316\u8df3\u8dc3\u8868\u7684\u67e5\u8be2\u6027\u80fd\u3002\u8df3\u8dc3\u8868\u7684\u5c42\u6570\u662f\u52a8\u6001\u751f\u6210\u7684\uff0c\u53ef\u4ee5\u6839\u636e\u8282\u70b9\u6570\u91cf\u548c\u5206\u503c\u8303\u56f4\u52a8\u6001\u8c03\u6574\u3002"),(0,s.kt)("h2",{id:"\u5b9e\u73b0\u7ec6\u8282"},"\u5b9e\u73b0\u7ec6\u8282"),(0,s.kt)("p",null,"Redis \u4e2d\u8df3\u8dc3\u8868\u7684\u5b9e\u73b0\u975e\u5e38\u590d\u6742\uff0c\u5305\u62ec\u8282\u70b9\u7684\u63d2\u5165\u3001\u5220\u9664\u3001\u67e5\u627e\u7b49\u64cd\u4f5c\uff0c\u8fd8\u5305\u62ec\u8df3\u8dc3\u8868\u5c42\u6570\u7684\u52a8\u6001\u8c03\u6574\u7b49\u3002"),(0,s.kt)("p",null,"\u4ee5\u4e0b\u662f\u76f8\u5173\u6e90\u4ee3\u7801\u6587\u4ef6\u7684\u6458\u8981\u548c\u94fe\u63a5\uff1a"),(0,s.kt)("p",null,"t_zset.c: \u8fd9\u4e2a\u6587\u4ef6\u5305\u542b\u4e86\u8df3\u8dc3\u8868\u7684\u5404\u79cd\u64cd\u4f5c\uff0c\u5982\u63d2\u5165\u3001\u5220\u9664\u3001\u67e5\u627e\u7b49\u3002",(0,s.kt)("a",{parentName:"p",href:"https://github.com/redis/redis/blob/7.2/src/t_zset.c"},"t_zset.c"),"\n\u5728 t_zset.c \u4e2d\uff0c\u4f60\u53ef\u4ee5\u627e\u5230\u4ee5\u4e0b\u8df3\u8dc3\u8868\u64cd\u4f5c\u7684\u5b9e\u73b0\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"zslCreate (\u521b\u5efa\u8df3\u8dc3\u8868)"),(0,s.kt)("li",{parentName:"ul"},"zslFree (\u91ca\u653e\u8df3\u8dc3\u8868)"),(0,s.kt)("li",{parentName:"ul"},"zslInsert (\u63d2\u5165\u8282\u70b9)"),(0,s.kt)("li",{parentName:"ul"},"zslDelete (\u5220\u9664\u8282\u70b9)"),(0,s.kt)("li",{parentName:"ul"},"zslFind (\u67e5\u627e\u8282\u70b9)"),(0,s.kt)("li",{parentName:"ul"},"zslGetRank (\u83b7\u53d6\u8282\u70b9\u7684\u6392\u540d)"),(0,s.kt)("li",{parentName:"ul"},"zslDeleteRangeByScore (\u6839\u636e\u5206\u6570\u8303\u56f4\u5220\u9664\u8282\u70b9)"),(0,s.kt)("li",{parentName:"ul"},"zslDeleteRangeByRank (\u6839\u636e\u6392\u540d\u8303\u56f4\u5220\u9664\u8282\u70b9)")),(0,s.kt)("h2",{id:"\u8de8\u5ea6\u548c\u968f\u673a\u751f\u6210\u5c42\u6570"},"\u8de8\u5ea6\u548c\u968f\u673a\u751f\u6210\u5c42\u6570"),(0,s.kt)("p",null,"Redis \u4e2d\u8df3\u8dc3\u8868\u7684\u8282\u70b9\u9664\u4e86\u5305\u542b\u6307\u5411\u4e0a\u4e0b\u5de6\u53f3\u8282\u70b9\u7684\u6307\u9488\u5916\uff0c\u8fd8\u5305\u542b\u4e86\u8de8\u5ea6\u4fe1\u606f\u3002\u8de8\u5ea6\u662f\u6307\u5f53\u524d\u8282\u70b9\u5230\u4e0b\u4e00\u4e2a\u8282\u70b9\u4e4b\u95f4\u7684\u8282\u70b9\u6570\u91cf\uff0c\u7528\u4e8e\u4f18\u5316\u8df3\u8dc3\u8868\u7684\u67e5\u8be2\u6027\u80fd\u3002\u53e6\u5916\uff0cRedis \u4e2d\u8df3\u8dc3\u8868\u7684\u5c42\u6570\u662f\u52a8\u6001\u751f\u6210\u7684\uff0c\u9700\u8981\u6839\u636e\u8282\u70b9\u6570\u91cf\u548c\u5206\u503c\u8303\u56f4\u52a8\u6001\u8c03\u6574\u3002\u9700\u8981\u5173\u6ce8\u8de8\u5ea6\u548c\u5c42\u6570\u7684\u751f\u6210\u548c\u4f7f\u7528\u65b9\u5f0f\u3002"),(0,s.kt)("h2",{id:"\u8df3\u8dc3\u8868\u7684\u5e94\u7528\u573a\u666f"},"\u8df3\u8dc3\u8868\u7684\u5e94\u7528\u573a\u666f"),(0,s.kt)("p",null,"Redis \u4e2d\u8df3\u8dc3\u8868\u7684\u4e3b\u8981\u5e94\u7528\u573a\u666f\u662f\u5b9e\u73b0\u6709\u5e8f\u96c6\u5408\u3002\u9700\u8981\u7406\u89e3\u6709\u5e8f\u96c6\u5408\u7684\u6570\u636e\u7ed3\u6784\u548c\u529f\u80fd\uff0c\u4ee5\u4fbf\u4e8e\u7406\u89e3\u8df3\u8dc3\u8868\u5728 Redis \u4e2d\u7684\u5e94\u7528\u3002\u540c\u65f6\uff0c\u9700\u8981\u5173\u6ce8\u8df3\u8dc3\u8868\u5728\u5176\u4ed6\u573a\u666f\u4e2d\u7684\u5e94\u7528\uff0c\u4ee5\u4fbf\u4e8e\u7406\u89e3\u548c\u5206\u6790\u8df3\u8dc3\u8868\u7684\u5b9e\u73b0\u539f\u7406\u3002"))}u.isMDXComponent=!0}}]);