---
sidebar_position: 7
---

# Redis源码阅读 server.c

在分析Redis源码时，首先要了解Redis是什么。Redis（Remote Dictionary Server）是一个高性能的键值存储数据库。它支持多种数据结构，如字符串、哈希、列表、集合、有序集合等，并提供持久化、事务和Lua脚本等功能。Redis的源码是用C语言编写的，源码库托管在GitHub上。

`server.c` 是Redis源码中的一个核心文件，它包含了Redis服务的主要功能和逻辑。为了帮助你更好地理解`server.c`，下面将对其主要组成部分进行概述：

1.  包含的头文件和全局变量定义：在文件的开头，有许多包含的头文件和全局变量定义，这些头文件和变量为Redis的各种功能提供了支持。
    
2.  辅助函数：在`server.c`中有许多辅助函数，这些函数主要用于完成一些特定的任务，如字符串操作、时间操作、内存管理等。
    
3.  事件处理：Redis使用事件驱动模型处理客户端连接、读写请求和超时等事件。`server.c`包含了处理这些事件的相关代码，如创建事件循环、添加/删除事件处理器等。
    
4.  命令处理：`server.c`包含了命令处理的相关代码，如命令表的初始化、命令查找、参数解析等。Redis支持的每个命令都有一个对应的处理函数，这些函数负责处理命令的逻辑并将结果发送给客户端。
    
5.  网络连接管理：`server.c`负责管理Redis服务端与客户端之间的网络连接，包括创建/关闭连接、读写数据等操作。
    
6.  客户端管理：`server.c`包含了客户端管理的相关代码，如客户端结构体的定义、客户端列表的管理、客户端的创建/销毁等操作。
    
7.  数据库操作：`server.c`包含了Redis数据库操作的相关代码，如数据库的初始化、键值对的读写、过期时间的处理等。
    
8.  持久化：Redis支持两种持久化方式，RDB（快照）和AOF（追加写日志）。`server.c`包含了与持久化相关的代码，如RDB/AOF文件的创建/加载、数据的保存/恢复等。
    
9.  主从复制：Redis支持主从复制功能，`server.c`包含了与主从复制相关的代码，如主从连接的建立、数据同步等。
    
10.  Sentinel 和集群：Redis支持Sentinel和集群模式，`server.c`包含了与这些模式相关的代码，如Sentinel/集群状态的管理、节点的发现和选举等。
    
11.  启动和初始化：`server.c`的最后部分包含了Redis服务的启动和初始化代码。这里定义了`main()`函数，这是Redis服务的入口点。
  
在`main()`函数中，会进行一系列的初始化操作，包括：
main()函数，这是Redis服务的入口点。在main()函数中，会进行一系列的初始化操作，包括：
a. 解析命令行参数：main()函数首先解析从命令行传入的参数，如配置文件路径、日志级别、端口号等。
b. 读取配置文件：根据命令行参数指定的配置文件路径，读取并解析配置文件，设置相关的配置选项。
c. 初始化服务器状态：初始化服务器状态结构体，包括事件循环、数据库、客户端列表等。
d. 初始化命令表：Redis支持的所有命令都需要在命令表中进行注册。main()函数会调用一个初始化函数来完成这个任务。
e. 设置信号处理器：为了确保Redis服务在接收到特定信号时能够正确响应，需要为这些信号设置处理器。
f. 加载持久化数据：如果配置了RDB或AOF持久化，main()函数会尝试从磁盘加载数据到内存数据库中。
g. 启动事件循环：最后，main()函数会启动事件循环，处理客户端连接、读写请求、超时等事件。
h. 清理和退出：当Redis服务收到退出信号时，main()函数会进行一系列清理操作，如关闭客户端连接、释放内存资源等，然后退出程序。



## 头文件引用

首先，server.c文件会引用多个头文件，包含了Redis服务器所需的数据类型、宏定义、全局变量等。一些常用的头文件如下：

```c
#include "server.h"           // 包含Redis服务器的主要结构体和函数声明
#include "atomicvar.h"        // 提供了对原子操作的封装
#include "cluster.h"          // 包含Redis集群相关的结构体和函数声明
#include "db.h"               // 包含Redis数据库操作相关的结构体和函数声明
#include "object.h"           // 包含Redis对象系统的数据结构和函数声明
#include "rdb.h"              // 包含RDB持久化相关的结构体和函数声明
#include "t_string.h"         // 包含处理Redis字符串对象的函数声明
#include "t_list.h"           // 包含处理Redis列表对象的函数声明
#include "t_set.h"            // 包含处理Redis集合对象的函数声明
#include "t_zset.h"           // 包含处理Redis有序集合对象的函数声明
#include "t_hash.h"           // 包含处理Redis哈希对象的函数声明
#include "slowlog.h"          // 包含慢查询日志相关的结构体和函数声明
#include "bio.h"              // 包含后台I/O（Background I/O）相关的结构体和函数声明
#include "aof.h"              // 包含AOF持久化相关的结构体和函数声明
#include "lazyfree.h"         // 包含延迟释放内存相关的函数声明
#include "tracking.h"         // 包含客户端缓存跟踪相关的函数声明
#include "networking.h"       // 包含网络处理相关的结构体和函数声明
#include "pubsub.h"           // 包含发布订阅模式相关的结构体和函数声明
#include "module.h"           // 包含Redis模块系统相关的结构体和函数声明
#include "scripting.h"        // 包含Lua脚本执行相关的结构体和函数声明
#include "blocked.h"          // 包含阻塞客户端相关的结构体和函数声明
#include "evict.h"            // 包含键值对逐出策略相关的函数声明
#include "quicklist.h"        // 包含quicklist数据结构及相关操作函数声明
#include "rax.h"              // 包含rax字典数据结构及相关操作函数声明
#include "sentinel.h"         // 包含Redis Sentinel相关的结构体和函数声明
```

## 数据结构

以下是`server.c`中主要数据结构的代码表示，以及中文注释：

1. `redisServer` 结构体

```c
typedef struct redisServer {
    // ...
    redisDb *db;                    /* 数据库数组 */
    dict *commands;                 /* 命令表 */
    dict *orig_commands;            /* 模块系统修改前的原始命令表 */
    aeEventLoop *el;                /* 事件循环，处理客户端连接、读写请求、超时等事件 */
    list *clients;                  /* 已连接客户端列表 */
    list *slaves;                   /* 已连接从服务器列表 */
    list *monitors;                 /* 监控客户端列表 */
    int hz;                         /* 服务器每秒执行的事件循环次数 */
    char *rdb_filename;             /* RDB文件名 */
    char *aof_filename;             /* AOF文件名 */
    // ...
} redisServer;
```

2. `client` 结构体

```c
typedef struct client {
    uint64_t id;                    /* 客户端唯一标识符 */
    int fd;                         /* 客户端连接的文件描述符 */
    sds name;                       /* 客户端名称 */
    sds querybuf;                   /* 查询缓冲区，保存客户端发送的命令 */
    int argc;                       /* 命令参数个数 */
    robj **argv;                    /* 命令参数数组 */
    struct redisCommand *cmd;       /* 当前正在处理的命令 */
    time_t lastinteraction;         /* 客户端最后一次与服务器交互的时间 */
    int flags;                      /* 客户端标志位 */
    // ...
} client;
```

**redisObject**
redisObject 是一个通用的数据结构，用于表示 Redis 中的所有数据类型。redisObject 结构体定义在 server.h 文件中，其包含的成员变量如下：
```c
struct redisObject {
    unsigned type:4;
    unsigned encoding:4;
    unsigned lru:LRU_BITS; /* LRU time (relative to global lru_clock) or
                            * LFU data (least significant 8 bits frequency
                            * and most significant 16 bits access time). */
    int refcount;
    void *ptr;
};
```

1. type：表示 redisObject 的类型，如字符串、列表、哈希表等。
2. encoding：表示 redisObject 的编码方式，如 RAW 编码、INT 编码等。
3. ptr：指向 redisObject 实际数据的指针。
4. refcount：表示 redisObject 的引用计数，用于实现内存回收机制。
5. lru：表示 redisObject 最近一次被访问的时间戳，用于实现 LRU 算法。



## 命令处理函数

server.c文件中定义了多个命令处理函数，用于处理客户端发送过来的命令。这些函数都是以cmd_*的形式命名，例如：
```c
void cmd_get(redisClient *c);

void cmd_set(redisClient *c);

void cmd_ping(redisClient *c);

void cmd_quit(redisClient *c);
```
这些命令处理函数都接收一个redisClient类型的参数，该参数包含了客户端发送的命令和参数。

## 命令表注册

为了方便管理和调用命令处理函数，server.c文件中会定义一个命令表，并将命令处理函数注册到该表中。可以用以下方式来注册命令处理函数：
```c
#define CMD(name) {"name", cmd_##name, arity_##name, flags_##name, group_##name}

static struct redisCommand redisCommandTable[] = {

    CMD(get),

    CMD(set),

    CMD(ping),

    CMD(quit),

    // ...

};

void populateCommandTable(void) {

    int j;

    for (j = 0; j < sizeof(redisCommandTable)/sizeof(struct redisCommand); j++) {

        struct redisCommand *c = redisCommandTable+j;

        int retval;

        retval = dictAdd(server.commands,sdsnew(c->name),c);

        assert(retval == DICT_OK);

    }

}
```
这里定义了一个宏CMD，用于将命令名、处理函数、参数个数、标志等信息打包到一个结构体中。然后，使用populateCommandTable函数将所有命令注册到全局的命令字典中。

## 事件循环

在Redis服务器启动后，server.c文件中会进入一个事件循环，用于处理客户端请求和其他事件。事件循环的主要实现如下：
```c
void aeMain(aeEventLoop *eventLoop) {
    eventLoop->stop = 0;
    while (!eventLoop->stop) {
        aeProcessEvents(eventLoop, AE_ALL_EVENTS|
                                   AE_CALL_BEFORE_SLEEP|
                                   AE_CALL_AFTER_SLEEP);
    }
}
```

该函数会循环调用aeProcessEvents函数，处理所有事件。在处理事件之前，会调用eventLoop->beforesleep函数，以便处理一些需要在主线程中执行的任务。

## 启动函数

最后，server.c文件定义了一个main函数，用于启动Redis服务器。该函数的主要过程如下：

初始化Redis服务器的状态、配置等信息。

注册命令处理函数到命令表中。

启动Redis服务器的事件循环。

停止Redis服务器的事件循环，并释放资源。


## Redis的启动流程

Redis的启动流程可以概括为以下几个步骤：

1.  初始化： 在`main()`函数中，Redis首先执行一系列的初始化操作，包括分配和初始化`redisServer`结构体、设置默认配置参数等。
    
2.  解析命令行参数： Redis会解析从命令行传入的参数，例如配置文件路径、日志级别、端口号等。
    
3.  读取配置文件： 根据命令行参数指定的配置文件路径，读取并解析配置文件，设置相关的配置选项。
    
4.  初始化数据结构： 初始化服务器状态结构体，包括事件循环、数据库、客户端列表等。同时，初始化命令表，注册所有Redis支持的命令。
    
5.  设置信号处理器： 为了确保Redis服务在接收到特定信号时能够正确响应，需要为这些信号设置处理器。
    
6.  启动服务器端口监听： 根据配置文件中指定的端口号，启动服务器端口监听，以便接受来自客户端的连接请求。
    
7.  加载持久化数据： 如果配置了RDB或AOF持久化，Redis会尝试从磁盘加载数据到内存数据库中。
    
8.  初始化集群和Sentinel： 如果配置了Redis集群或Sentinel模式，执行相应的初始化操作。
    
9.  启动事件循环： 最后，Redis启动事件循环，处理客户端连接、读写请求、超时等事件。
    
10.  清理和退出： 当Redis服务收到退出信号时，`main()`函数会进行一系列清理操作，如关闭客户端连接、释放内存资源等，然后退出程序。
    

通过以上步骤，Redis会成功启动并开始接收来自客户端的请求。要深入了解Redis的启动流程和实现细节，请阅读源代码中的`main()`函数以及相关函数。

