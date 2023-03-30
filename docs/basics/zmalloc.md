---
sidebar_position: 8
---

# Redis源码阅读 zmalloc.c

实现 Redis 中内存分配和释放的基本操作，包括内存分配函数 zmalloc、内存重新分配函数 zrealloc、内存释放函数 zfree 以及一些辅助函数。

redis封装是为了屏蔽底层平台的差异，同时方便自己实现相关的函数，我们可以通过src/zmalloc.h 文件中的相关宏定义来分析redis是怎么实现底层平台差异的屏蔽的，zmalloc.h 中相关宏声明如下：

```c
#if defined(USE_TCMALLOC)
#define ZMALLOC_LIB ("tcmalloc-" __xstr(TC_VERSION_MAJOR) "." __xstr(TC_VERSION_MINOR))
#include <google/tcmalloc.h>
#if (TC_VERSION_MAJOR == 1 && TC_VERSION_MINOR >= 6) || (TC_VERSION_MAJOR > 1)
#define HAVE_MALLOC_SIZE 1
#define zmalloc_size(p) tc_malloc_size(p)
#else
#error "Newer version of tcmalloc required"
#endif

#elif defined(USE_JEMALLOC)
#define ZMALLOC_LIB ("jemalloc-" __xstr(JEMALLOC_VERSION_MAJOR) "." __xstr(JEMALLOC_VERSION_MINOR) "." __xstr(JEMALLOC_VERSION_BUGFIX))
#include <jemalloc/jemalloc.h>
#if (JEMALLOC_VERSION_MAJOR == 2 && JEMALLOC_VERSION_MINOR >= 1) || (JEMALLOC_VERSION_MAJOR > 2)
#define HAVE_MALLOC_SIZE 1
#define zmalloc_size(p) je_malloc_usable_size(p)
#else
#error "Newer version of jemalloc required"
#endif

#elif defined(__APPLE__)
#include <malloc/malloc.h>
#define HAVE_MALLOC_SIZE 1
#define zmalloc_size(p) malloc_size(p)
#endif
```

通过上面的宏的预处理我们可以发现redis为了屏蔽不同系统(库)的差异进行了如下预处理：

- 若系统中存在Google的TC_MALLOC库，则使用tc_malloc一族函数代替原本的malloc一族函数。

- 若系统中存在FaceBook的JEMALLOC库，则使用je_malloc一族函数代替原本的malloc一族函数。   

- 若当前系统是Mac系统，则使用<malloc/malloc.h>中的内存分配函数。   

- 其他情况，在每一段分配好的空间前头，同时多分配一个定长的字段，用来记录分配的空间大小。

**ztrymalloc_usable**

```c
/* Try allocating memory, and return NULL if failed.
 * '*usable' is set to the usable size if non NULL. */
void *ztrymalloc_usable(size_t size, size_t *usable) {
    /* Possible overflow, return NULL, so that the caller can panic or handle a failed allocation. */
    if (size >= SIZE_MAX/2) return NULL;
    void *ptr = malloc(MALLOC_MIN_SIZE(size)+PREFIX_SIZE);

    if (!ptr) return NULL;
#ifdef HAVE_MALLOC_SIZE
    size = zmalloc_size(ptr);
    update_zmalloc_stat_alloc(size);
    if (usable) *usable = size;
    return ptr;
#else
    *((size_t*)ptr) = size;
    update_zmalloc_stat_alloc(size+PREFIX_SIZE);
    if (usable) *usable = size;
    return (char*)ptr+PREFIX_SIZE;
#endif
}
```

**update_zmalloc_stat_alloc**
`update_zmalloc_stat_alloc(__n)` 是 Redis 中用于更新内存分配统计信息的宏。


宏的定义如下：


`#define update_zmalloc_stat_alloc(__n) atomicIncr(used_memory,(__n))`

其中，`atomicIncr` 是 Redis 中的一个原子操作函数，用于对一个变量进行原子自增操作，避免了并发访问时的竞争问题。


`update_zmalloc_stat_alloc(__n)` 的作用是将参数 __n 加到 used_memory 变量上，用于统计已分配的内存大小。这个宏通常会在内存分配函数中调用，例如 zmalloc 函数：

```c
void *zmalloc(size_t size) {
    void *ptr = malloc(size+PREFIX_SIZE);
    if (!ptr) zmalloc_oom(size);
    *((size_t*)ptr) = size;
    update_zmalloc_stat_alloc(size);
    return (char*)ptr+PREFIX_SIZE;
}
```

在 zmalloc 函数中，首先使用 malloc 函数分配 size+PREFIX_SIZE 大小的内存块，然后将 size 写入内存块头部，并使用 `update_zmalloc_stat_alloc(size)` 更新已分配内存大小。这样就能够实时记录 Redis 中已分配内存的大小，并且可以在需要时进行监控和调优。

## Redis中为什么要替换malloc分配

Redis 中替换 malloc 分配的主要目的是为了提高内存分配的效率和可靠性，以及减少内存碎片的产生。

具体来说，Redis 中使用 zmalloc 来代替标准 C 库提供的 malloc 函数，主要有以下几个原因：

1. 内存分配效率更高：zmalloc 实现了内存池技术，将多次小额内存分配合并成一次大额内存分配，避免了频繁调用系统函数的开销。
2. 可靠性更高：zmalloc 对内存分配失败的处理更加严谨，当内存分配失败时会尝试多次分配，直到成功为止。同时，zmalloc 还实现了内存校验机制，可以检测出内存访问越界等问题。
3. 减少内存碎片：zmalloc 采用了多级内存池的设计，将内存块按照大小分类存储，避免了内存碎片的产生。

## 那jemalloc和tcmalloc有什么区别呢?

它们之间的主要区别在于：

1. 内存分配算法：jemalloc 使用了独特的分配算法，支持线程本地缓存和内存区域的自动释放，能够更好地利用系统资源和避免内存碎片的产生；而 tcmalloc 则采用了基于线程缓存的分配算法，能够更好地支持多线程并发访问。
2. 系统兼容性：jemalloc 可以在多种操作系统和平台上运行，并且能够与其他内存分配器共存；而 tcmalloc 主要是为 Google 的 Linux 环境而设计，对于其他操作系统和平台的支持不如 jemalloc。
3. 功能特性：jemalloc 支持内存分配的轮询、统计、记录和调试等功能，可以更好地支持高可靠性的应用场景；而 tcmalloc 则支持更多的内存分配策略和高级功能，例如分配器级别的 CPU 亲和性和内存大小限制等。

总的来说，jemalloc 和 tcmalloc 都是高效的内存分配库，但它们的设计理念和实现细节有所不同，可以根据应用场景和需求进行选择。在 Redis 中，jemalloc 是默认的内存分配库，因为它能够更好地支持 Redis 的高性能、高可用和高可靠性的特性。

## What are the differences between (and reasons to choose) tcmalloc/jemalloc and memory pools?

> - The biggest advantage of jemalloc is its powerful multi-core/multi-thread allocation capability. The more cores the CPU has, the more program threads, and the faster jemalloc allocates
> - When allocating a lot of small memory, the space for recording meta data of jemalloc will be slightly more than tcmalloc.
> - When allocating large memory allocations, there will also be less memory fragmentation than tcmalloc.
> - Jemalloc classifies memory allocation granularity more finely, it leads to less lock contention than ptmalloc.

## 参考
- [How do malloc() and free() work?](https://stackoverflow.com/questions/1119134/how-do-malloc-and-free-work)
- [jemalloc](https://github.com/jemalloc/jemalloc)
- [What are the differences between (and reasons to choose) tcmalloc/jemalloc and memory pools?](https://stackoverflow.com/questions/9866145/what-are-the-differences-between-and-reasons-to-choose-tcmalloc-jemalloc-and-m#:~:text=tcmalloc%20scores%20over%20all%20other,by%20ptmalloc%2C%20followed%20by%20tcmalloc.)