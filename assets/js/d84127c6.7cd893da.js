"use strict";(self.webpackChunkredis_reading=self.webpackChunkredis_reading||[]).push([[2249],{3905:(e,l,a)=>{a.d(l,{Zo:()=>m,kt:()=>_});var t=a(7294);function o(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function n(e,l){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{};l%2?n(Object(a),!0).forEach((function(l){o(e,l,a[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(a,l))}))}return e}function c(e,l){if(null==e)return{};var a,t,o=function(e,l){if(null==e)return{};var a,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(o[a]=e[a]);return o}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=t.createContext({}),s=function(e){var l=t.useContext(i),a=l;return e&&(a="function"==typeof e?e(l):r(r({},l),e)),a},m=function(e){var l=s(e.components);return t.createElement(i.Provider,{value:l},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var l=e.children;return t.createElement(t.Fragment,{},l)}},u=t.forwardRef((function(e,l){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(a),u=o,_=p["".concat(i,".").concat(u)]||p[u]||d[u]||n;return a?t.createElement(_,r(r({ref:l},m),{},{components:a})):t.createElement(_,r({ref:l},m))}));function _(e,l){var a=arguments,o=l&&l.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=u;var c={};for(var i in l)hasOwnProperty.call(l,i)&&(c[i]=l[i]);c.originalType=e,c[p]="string"==typeof e?e:o,r[1]=c;for(var s=2;s<n;s++)r[s]=a[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3156:(e,l,a)=>{a.r(l),a.d(l,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var t=a(7462),o=(a(7294),a(3905));const n={sidebar_position:8},r="Redis\u6e90\u7801\u9605\u8bfb zmalloc.c",c={unversionedId:"basics/zmalloc",id:"basics/zmalloc",title:"Redis\u6e90\u7801\u9605\u8bfb zmalloc.c",description:"\u5b9e\u73b0 Redis \u4e2d\u5185\u5b58\u5206\u914d\u548c\u91ca\u653e\u7684\u57fa\u672c\u64cd\u4f5c\uff0c\u5305\u62ec\u5185\u5b58\u5206\u914d\u51fd\u6570 zmalloc\u3001\u5185\u5b58\u91cd\u65b0\u5206\u914d\u51fd\u6570 zrealloc\u3001\u5185\u5b58\u91ca\u653e\u51fd\u6570 zfree \u4ee5\u53ca\u4e00\u4e9b\u8f85\u52a9\u51fd\u6570\u3002",source:"@site/docs/basics/zmalloc.md",sourceDirName:"basics",slug:"/basics/zmalloc",permalink:"/redis-reading/docs/basics/zmalloc",draft:!1,editUrl:"https://github.com/code-reading-lab/redis-reading/tree/docs/docs/basics/zmalloc.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Redis\u6e90\u7801\u9605\u8bfb server.c",permalink:"/redis-reading/docs/basics/server"},next:{title:"Redis\u6e90\u7801\u5206\u6790 t_zset.c",permalink:"/redis-reading/docs/basics/t_zset"}},i={},s=[{value:"Redis\u4e2d\u4e3a\u4ec0\u4e48\u8981\u66ff\u6362malloc\u5206\u914d",id:"redis\u4e2d\u4e3a\u4ec0\u4e48\u8981\u66ff\u6362malloc\u5206\u914d",level:2},{value:"\u90a3jemalloc\u548ctcmalloc\u6709\u4ec0\u4e48\u533a\u522b\u5462?",id:"\u90a3jemalloc\u548ctcmalloc\u6709\u4ec0\u4e48\u533a\u522b\u5462",level:2},{value:"What are the differences between (and reasons to choose) tcmalloc/jemalloc and memory pools?",id:"what-are-the-differences-between-and-reasons-to-choose-tcmallocjemalloc-and-memory-pools",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],m={toc:s},p="wrapper";function d(e){let{components:l,...a}=e;return(0,o.kt)(p,(0,t.Z)({},m,a,{components:l,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"redis\u6e90\u7801\u9605\u8bfb-zmallocc"},"Redis\u6e90\u7801\u9605\u8bfb zmalloc.c"),(0,o.kt)("p",null,"\u5b9e\u73b0 Redis \u4e2d\u5185\u5b58\u5206\u914d\u548c\u91ca\u653e\u7684\u57fa\u672c\u64cd\u4f5c\uff0c\u5305\u62ec\u5185\u5b58\u5206\u914d\u51fd\u6570 zmalloc\u3001\u5185\u5b58\u91cd\u65b0\u5206\u914d\u51fd\u6570 zrealloc\u3001\u5185\u5b58\u91ca\u653e\u51fd\u6570 zfree \u4ee5\u53ca\u4e00\u4e9b\u8f85\u52a9\u51fd\u6570\u3002"),(0,o.kt)("p",null,"redis\u5c01\u88c5\u662f\u4e3a\u4e86\u5c4f\u853d\u5e95\u5c42\u5e73\u53f0\u7684\u5dee\u5f02\uff0c\u540c\u65f6\u65b9\u4fbf\u81ea\u5df1\u5b9e\u73b0\u76f8\u5173\u7684\u51fd\u6570\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7src/zmalloc.h \u6587\u4ef6\u4e2d\u7684\u76f8\u5173\u5b8f\u5b9a\u4e49\u6765\u5206\u6790redis\u662f\u600e\u4e48\u5b9e\u73b0\u5e95\u5c42\u5e73\u53f0\u5dee\u5f02\u7684\u5c4f\u853d\u7684\uff0czmalloc.h \u4e2d\u76f8\u5173\u5b8f\u58f0\u660e\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'#if defined(USE_TCMALLOC)\n#define ZMALLOC_LIB ("tcmalloc-" __xstr(TC_VERSION_MAJOR) "." __xstr(TC_VERSION_MINOR))\n#include <google/tcmalloc.h>\n#if (TC_VERSION_MAJOR == 1 && TC_VERSION_MINOR >= 6) || (TC_VERSION_MAJOR > 1)\n#define HAVE_MALLOC_SIZE 1\n#define zmalloc_size(p) tc_malloc_size(p)\n#else\n#error "Newer version of tcmalloc required"\n#endif\n\n#elif defined(USE_JEMALLOC)\n#define ZMALLOC_LIB ("jemalloc-" __xstr(JEMALLOC_VERSION_MAJOR) "." __xstr(JEMALLOC_VERSION_MINOR) "." __xstr(JEMALLOC_VERSION_BUGFIX))\n#include <jemalloc/jemalloc.h>\n#if (JEMALLOC_VERSION_MAJOR == 2 && JEMALLOC_VERSION_MINOR >= 1) || (JEMALLOC_VERSION_MAJOR > 2)\n#define HAVE_MALLOC_SIZE 1\n#define zmalloc_size(p) je_malloc_usable_size(p)\n#else\n#error "Newer version of jemalloc required"\n#endif\n\n#elif defined(__APPLE__)\n#include <malloc/malloc.h>\n#define HAVE_MALLOC_SIZE 1\n#define zmalloc_size(p) malloc_size(p)\n#endif\n')),(0,o.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u5b8f\u7684\u9884\u5904\u7406\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0redis\u4e3a\u4e86\u5c4f\u853d\u4e0d\u540c\u7cfb\u7edf(\u5e93)\u7684\u5dee\u5f02\u8fdb\u884c\u4e86\u5982\u4e0b\u9884\u5904\u7406\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u82e5\u7cfb\u7edf\u4e2d\u5b58\u5728Google\u7684TC_MALLOC\u5e93\uff0c\u5219\u4f7f\u7528tc_malloc\u4e00\u65cf\u51fd\u6570\u4ee3\u66ff\u539f\u672c\u7684malloc\u4e00\u65cf\u51fd\u6570\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u82e5\u7cfb\u7edf\u4e2d\u5b58\u5728FaceBook\u7684JEMALLOC\u5e93\uff0c\u5219\u4f7f\u7528je_malloc\u4e00\u65cf\u51fd\u6570\u4ee3\u66ff\u539f\u672c\u7684malloc\u4e00\u65cf\u51fd\u6570\u3002   ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u82e5\u5f53\u524d\u7cfb\u7edf\u662fMac\u7cfb\u7edf\uff0c\u5219\u4f7f\u7528<malloc/malloc.h>\u4e2d\u7684\u5185\u5b58\u5206\u914d\u51fd\u6570\u3002   ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5176\u4ed6\u60c5\u51b5\uff0c\u5728\u6bcf\u4e00\u6bb5\u5206\u914d\u597d\u7684\u7a7a\u95f4\u524d\u5934\uff0c\u540c\u65f6\u591a\u5206\u914d\u4e00\u4e2a\u5b9a\u957f\u7684\u5b57\u6bb5\uff0c\u7528\u6765\u8bb0\u5f55\u5206\u914d\u7684\u7a7a\u95f4\u5927\u5c0f\u3002"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ztrymalloc_usable")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"/* Try allocating memory, and return NULL if failed.\n * '*usable' is set to the usable size if non NULL. */\nvoid *ztrymalloc_usable(size_t size, size_t *usable) {\n    /* Possible overflow, return NULL, so that the caller can panic or handle a failed allocation. */\n    if (size >= SIZE_MAX/2) return NULL;\n    void *ptr = malloc(MALLOC_MIN_SIZE(size)+PREFIX_SIZE);\n\n    if (!ptr) return NULL;\n#ifdef HAVE_MALLOC_SIZE\n    size = zmalloc_size(ptr);\n    update_zmalloc_stat_alloc(size);\n    if (usable) *usable = size;\n    return ptr;\n#else\n    *((size_t*)ptr) = size;\n    update_zmalloc_stat_alloc(size+PREFIX_SIZE);\n    if (usable) *usable = size;\n    return (char*)ptr+PREFIX_SIZE;\n#endif\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"update_zmalloc_stat_alloc"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"update_zmalloc_stat_alloc(__n)")," \u662f Redis \u4e2d\u7528\u4e8e\u66f4\u65b0\u5185\u5b58\u5206\u914d\u7edf\u8ba1\u4fe1\u606f\u7684\u5b8f\u3002"),(0,o.kt)("p",null,"\u5b8f\u7684\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"#define update_zmalloc_stat_alloc(__n) atomicIncr(used_memory,(__n))")),(0,o.kt)("p",null,"\u5176\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"atomicIncr")," \u662f Redis \u4e2d\u7684\u4e00\u4e2a\u539f\u5b50\u64cd\u4f5c\u51fd\u6570\uff0c\u7528\u4e8e\u5bf9\u4e00\u4e2a\u53d8\u91cf\u8fdb\u884c\u539f\u5b50\u81ea\u589e\u64cd\u4f5c\uff0c\u907f\u514d\u4e86\u5e76\u53d1\u8bbf\u95ee\u65f6\u7684\u7ade\u4e89\u95ee\u9898\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"update_zmalloc_stat_alloc(__n)")," \u7684\u4f5c\u7528\u662f\u5c06\u53c2\u6570 __n \u52a0\u5230 used_memory \u53d8\u91cf\u4e0a\uff0c\u7528\u4e8e\u7edf\u8ba1\u5df2\u5206\u914d\u7684\u5185\u5b58\u5927\u5c0f\u3002\u8fd9\u4e2a\u5b8f\u901a\u5e38\u4f1a\u5728\u5185\u5b58\u5206\u914d\u51fd\u6570\u4e2d\u8c03\u7528\uff0c\u4f8b\u5982 zmalloc \u51fd\u6570\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"void *zmalloc(size_t size) {\n    void *ptr = malloc(size+PREFIX_SIZE);\n    if (!ptr) zmalloc_oom(size);\n    *((size_t*)ptr) = size;\n    update_zmalloc_stat_alloc(size);\n    return (char*)ptr+PREFIX_SIZE;\n}\n")),(0,o.kt)("p",null,"\u5728 zmalloc \u51fd\u6570\u4e2d\uff0c\u9996\u5148\u4f7f\u7528 malloc \u51fd\u6570\u5206\u914d size+PREFIX_SIZE \u5927\u5c0f\u7684\u5185\u5b58\u5757\uff0c\u7136\u540e\u5c06 size \u5199\u5165\u5185\u5b58\u5757\u5934\u90e8\uff0c\u5e76\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"update_zmalloc_stat_alloc(size)")," \u66f4\u65b0\u5df2\u5206\u914d\u5185\u5b58\u5927\u5c0f\u3002\u8fd9\u6837\u5c31\u80fd\u591f\u5b9e\u65f6\u8bb0\u5f55 Redis \u4e2d\u5df2\u5206\u914d\u5185\u5b58\u7684\u5927\u5c0f\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728\u9700\u8981\u65f6\u8fdb\u884c\u76d1\u63a7\u548c\u8c03\u4f18\u3002"),(0,o.kt)("h2",{id:"redis\u4e2d\u4e3a\u4ec0\u4e48\u8981\u66ff\u6362malloc\u5206\u914d"},"Redis\u4e2d\u4e3a\u4ec0\u4e48\u8981\u66ff\u6362malloc\u5206\u914d"),(0,o.kt)("p",null,"Redis \u4e2d\u66ff\u6362 malloc \u5206\u914d\u7684\u4e3b\u8981\u76ee\u7684\u662f\u4e3a\u4e86\u63d0\u9ad8\u5185\u5b58\u5206\u914d\u7684\u6548\u7387\u548c\u53ef\u9760\u6027\uff0c\u4ee5\u53ca\u51cf\u5c11\u5185\u5b58\u788e\u7247\u7684\u4ea7\u751f\u3002"),(0,o.kt)("p",null,"\u5177\u4f53\u6765\u8bf4\uff0cRedis \u4e2d\u4f7f\u7528 zmalloc \u6765\u4ee3\u66ff\u6807\u51c6 C \u5e93\u63d0\u4f9b\u7684 malloc \u51fd\u6570\uff0c\u4e3b\u8981\u6709\u4ee5\u4e0b\u51e0\u4e2a\u539f\u56e0\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5185\u5b58\u5206\u914d\u6548\u7387\u66f4\u9ad8\uff1azmalloc \u5b9e\u73b0\u4e86\u5185\u5b58\u6c60\u6280\u672f\uff0c\u5c06\u591a\u6b21\u5c0f\u989d\u5185\u5b58\u5206\u914d\u5408\u5e76\u6210\u4e00\u6b21\u5927\u989d\u5185\u5b58\u5206\u914d\uff0c\u907f\u514d\u4e86\u9891\u7e41\u8c03\u7528\u7cfb\u7edf\u51fd\u6570\u7684\u5f00\u9500\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u9760\u6027\u66f4\u9ad8\uff1azmalloc \u5bf9\u5185\u5b58\u5206\u914d\u5931\u8d25\u7684\u5904\u7406\u66f4\u52a0\u4e25\u8c28\uff0c\u5f53\u5185\u5b58\u5206\u914d\u5931\u8d25\u65f6\u4f1a\u5c1d\u8bd5\u591a\u6b21\u5206\u914d\uff0c\u76f4\u5230\u6210\u529f\u4e3a\u6b62\u3002\u540c\u65f6\uff0czmalloc \u8fd8\u5b9e\u73b0\u4e86\u5185\u5b58\u6821\u9a8c\u673a\u5236\uff0c\u53ef\u4ee5\u68c0\u6d4b\u51fa\u5185\u5b58\u8bbf\u95ee\u8d8a\u754c\u7b49\u95ee\u9898\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u51cf\u5c11\u5185\u5b58\u788e\u7247\uff1azmalloc \u91c7\u7528\u4e86\u591a\u7ea7\u5185\u5b58\u6c60\u7684\u8bbe\u8ba1\uff0c\u5c06\u5185\u5b58\u5757\u6309\u7167\u5927\u5c0f\u5206\u7c7b\u5b58\u50a8\uff0c\u907f\u514d\u4e86\u5185\u5b58\u788e\u7247\u7684\u4ea7\u751f\u3002")),(0,o.kt)("h2",{id:"\u90a3jemalloc\u548ctcmalloc\u6709\u4ec0\u4e48\u533a\u522b\u5462"},"\u90a3jemalloc\u548ctcmalloc\u6709\u4ec0\u4e48\u533a\u522b\u5462?"),(0,o.kt)("p",null,"\u5b83\u4eec\u4e4b\u95f4\u7684\u4e3b\u8981\u533a\u522b\u5728\u4e8e\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5185\u5b58\u5206\u914d\u7b97\u6cd5\uff1ajemalloc \u4f7f\u7528\u4e86\u72ec\u7279\u7684\u5206\u914d\u7b97\u6cd5\uff0c\u652f\u6301\u7ebf\u7a0b\u672c\u5730\u7f13\u5b58\u548c\u5185\u5b58\u533a\u57df\u7684\u81ea\u52a8\u91ca\u653e\uff0c\u80fd\u591f\u66f4\u597d\u5730\u5229\u7528\u7cfb\u7edf\u8d44\u6e90\u548c\u907f\u514d\u5185\u5b58\u788e\u7247\u7684\u4ea7\u751f\uff1b\u800c tcmalloc \u5219\u91c7\u7528\u4e86\u57fa\u4e8e\u7ebf\u7a0b\u7f13\u5b58\u7684\u5206\u914d\u7b97\u6cd5\uff0c\u80fd\u591f\u66f4\u597d\u5730\u652f\u6301\u591a\u7ebf\u7a0b\u5e76\u53d1\u8bbf\u95ee\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u7cfb\u7edf\u517c\u5bb9\u6027\uff1ajemalloc \u53ef\u4ee5\u5728\u591a\u79cd\u64cd\u4f5c\u7cfb\u7edf\u548c\u5e73\u53f0\u4e0a\u8fd0\u884c\uff0c\u5e76\u4e14\u80fd\u591f\u4e0e\u5176\u4ed6\u5185\u5b58\u5206\u914d\u5668\u5171\u5b58\uff1b\u800c tcmalloc \u4e3b\u8981\u662f\u4e3a Google \u7684 Linux \u73af\u5883\u800c\u8bbe\u8ba1\uff0c\u5bf9\u4e8e\u5176\u4ed6\u64cd\u4f5c\u7cfb\u7edf\u548c\u5e73\u53f0\u7684\u652f\u6301\u4e0d\u5982 jemalloc\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u529f\u80fd\u7279\u6027\uff1ajemalloc \u652f\u6301\u5185\u5b58\u5206\u914d\u7684\u8f6e\u8be2\u3001\u7edf\u8ba1\u3001\u8bb0\u5f55\u548c\u8c03\u8bd5\u7b49\u529f\u80fd\uff0c\u53ef\u4ee5\u66f4\u597d\u5730\u652f\u6301\u9ad8\u53ef\u9760\u6027\u7684\u5e94\u7528\u573a\u666f\uff1b\u800c tcmalloc \u5219\u652f\u6301\u66f4\u591a\u7684\u5185\u5b58\u5206\u914d\u7b56\u7565\u548c\u9ad8\u7ea7\u529f\u80fd\uff0c\u4f8b\u5982\u5206\u914d\u5668\u7ea7\u522b\u7684 CPU \u4eb2\u548c\u6027\u548c\u5185\u5b58\u5927\u5c0f\u9650\u5236\u7b49\u3002")),(0,o.kt)("p",null,"\u603b\u7684\u6765\u8bf4\uff0cjemalloc \u548c tcmalloc \u90fd\u662f\u9ad8\u6548\u7684\u5185\u5b58\u5206\u914d\u5e93\uff0c\u4f46\u5b83\u4eec\u7684\u8bbe\u8ba1\u7406\u5ff5\u548c\u5b9e\u73b0\u7ec6\u8282\u6709\u6240\u4e0d\u540c\uff0c\u53ef\u4ee5\u6839\u636e\u5e94\u7528\u573a\u666f\u548c\u9700\u6c42\u8fdb\u884c\u9009\u62e9\u3002\u5728 Redis \u4e2d\uff0cjemalloc \u662f\u9ed8\u8ba4\u7684\u5185\u5b58\u5206\u914d\u5e93\uff0c\u56e0\u4e3a\u5b83\u80fd\u591f\u66f4\u597d\u5730\u652f\u6301 Redis \u7684\u9ad8\u6027\u80fd\u3001\u9ad8\u53ef\u7528\u548c\u9ad8\u53ef\u9760\u6027\u7684\u7279\u6027\u3002"),(0,o.kt)("h2",{id:"what-are-the-differences-between-and-reasons-to-choose-tcmallocjemalloc-and-memory-pools"},"What are the differences between (and reasons to choose) tcmalloc/jemalloc and memory pools?"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"The biggest advantage of jemalloc is its powerful multi-core/multi-thread allocation capability. The more cores the CPU has, the more program threads, and the faster jemalloc allocates"),(0,o.kt)("li",{parentName:"ul"},"When allocating a lot of small memory, the space for recording meta data of jemalloc will be slightly more than tcmalloc."),(0,o.kt)("li",{parentName:"ul"},"When allocating large memory allocations, there will also be less memory fragmentation than tcmalloc."),(0,o.kt)("li",{parentName:"ul"},"Jemalloc classifies memory allocation granularity more finely, it leads to less lock contention than ptmalloc."))),(0,o.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/1119134/how-do-malloc-and-free-work"},"How do malloc() and free() work?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/jemalloc/jemalloc"},"jemalloc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/9866145/what-are-the-differences-between-and-reasons-to-choose-tcmalloc-jemalloc-and-m#:~:text=tcmalloc%20scores%20over%20all%20other,by%20ptmalloc%2C%20followed%20by%20tcmalloc."},"What are the differences between (and reasons to choose) tcmalloc/jemalloc and memory pools?"))))}d.isMDXComponent=!0}}]);