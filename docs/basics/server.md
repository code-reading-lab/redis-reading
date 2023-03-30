---
sidebar_position: 7
---

# Redis源码阅读 server.c

server.c是Redis服务器的主要源文件，包含了Redis服务器的主函数和主要逻辑。在这个文件中，我们可以了解Redis服务器的启动过程、命令处理过程、事件循环过程等。

以下是server.c文件的主要代码结构和功能：

## 头文件引用

首先，server.c文件会引用多个头文件，包含了Redis服务器所需的数据类型、宏定义、全局变量等。一些常用的头文件如下：

```c
#include "redis.h"          // Redis的主头文件，包含Redis的核心库和数据类型。

#include "adlist.h"         // Redis的链表数据类型库。

#include "bio.h"            // Redis的异步I/O库。

#include "debugmacro.h"     // Redis的调试宏定义库。

#include "cluster.h"        // Redis的集群库。

#include "crc16.h"          // Redis的CRC16校验和库。

#include "endianconv.h"     // Redis的大小端转换库。

#include "latency.h"        // Redis的延迟日志库。

#include "lzf.h"            // Redis的LZF压缩库。

#include "pqsort.h"         // Redis的快速排序库。

#include "quicklist.h"      // Redis的快速链表库。

#include "rand.h"           // Redis的随机数库。

#include "sha1.h"           // Redis的SHA1哈希库。

#include "sds.h"            // Redis的简单动态字符串库。

#include "slowlog.h"        // Redis的慢查询日志库。

#include "zmalloc.h"        // Redis的内存管理库。
```

## 全局变量定义

接下来，server.c文件会定义多个全局变量，包含了Redis服务器的状态信息、配置信息、数据库信息等。一些常用的全局变量如下：
```c
struct redisServer server;          // Redis服务器的状态信息。

struct redisCommand *commandTable;  // Redis服务器的命令表。

struct redisClient **clients;       // Redis服务器的客户端数组。

struct redisDb *redisDb;            // Redis服务器的数据库数组。

struct rax *server.commands;        // Redis服务器的命令字典。
```

## 数据结构
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

        if (eventLoop->beforesleep != NULL)

            eventLoop->beforesleep(eventLoop);

        aeProcessEvents(eventLoop, AE_ALL_EVENTS);

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


## main函数流程解析

- 初始化服务器状态

  在 main 函数中，首先会调用 initServerConfig 函数初始化服务器的配置信息，包括端口号、数据库数量、最大客户端连接数等。然后，通过调用 initServer 函数初始化服务器的状态信息，包括命令表、事件循环、共享对象等。

- 解析命令行参数
  接下来，main 函数会调用 parseOptions 函数解析命令行参数，包括配置文件路径、后台运行等选项。如果解析成功，则会更新服务器的配置信息。



- 加载持久化数据


  如果服务器配置了持久化功能，则会在 main 函数中调用 loadServerConfig 函数加载持久化数据。该函数会根据服务器配置信息选择适当的持久化方式（RDB 或 AOF），并将数据加载到内存中。



- 启动服务器


  在完成以上初始化工作后，main 函数会调用 serverCron 函数启动服务器的事件循环。serverCron 函数会循环等待客户端连接和其他事件，并处理这些事件。如果服务器接收到 SIGINT 或 SIGTERM 信号，则会调用 shutdownServer 函数停止服务器。



- 退出服务器


  当服务器停止后，main 函数会调用 serverLog 函数输出日志信息，然后调用 freeMemoryIfNeeded 函数释放服务器申请的内存。最后，main 函数会返回 0，表示程序正常退出。


  总之，server.c 中的 main 函数主要完成了服务器的初始化、命令行参数解析、持久化数据加载、事件循环启动等任务。在 main 函数的最后，服务器状态会被释放，程序退出。

struct redisServer 是 Redis 服务器的状态结构体，用于记录服务器的各种状态和参数。以下是一些 redisServer 结构体的重要成员变量及其作用：

```c

int hz：事件循环的执行频率，即每秒执行多少次事件循环。


redisDb *db：指向 Redis 数据库的指针。


dict *commands：Redis 所支持的所有命令的字典表，每个命令对应一个 redisCommand 结构体。


aeEventLoop *el：事件循环库的事件循环结构体。


pid_t pid：Redis 服务器的进程 ID。


int port：Redis 服务器的端口号。


char *bindaddr[MAXLISTENADDRS]：Redis 监听地址列表，最多支持 MAXLISTENADDRS 个地址。


char *logfile：Redis 日志文件路径。


int daemonize：是否启用后台运行模式。


char *pidfile：PID 文件路径。


int arch_bits：服务器的架构位数，即 32 位或 64 位。


int tcp_backlog：TCP 连接队列的长度。


int maxclients：允许同时连接到服务器的最大客户端数量。


int maxidletime：允许客户端空闲的最长时间，超过该时间客户端会被自动断开连接。


int timeout：客户端发送命令的超时时间。


int tcpkeepalive：是否启用 TCP 连接的 keepalive 选项。


char *requirepass：Redis 访问密码。


int maxmemory：Redis 最大内存限制。


int maxmemory_policy：Redis 最大内存限制达到后的数据淘汰策略。


int maxmemory_samples：Redis 从键空间中随机选取多少个键来进行数据淘汰。


time_t unixtime：服务器的当前时间。


int sentinel_mode：是否启用 Sentinel 模式。


int active_expire_enabled：是否启用主动过期。


int aof_state：AOF 持久化状态，包括 AOF_OFF、AOF_ON、AOF_WAIT_REWRITE 三种状态。


int aof_fsync：AOF 持久化时是否执行 fsync 操作。


int aof_rewrite_perc：AOF 重写时，如果当前 AOF 文件大小是上次重写后的大小的多少倍，就触发 AOF 重写操作。


int aof_rewrite_min_size：AOF 重写最小文件大小。


int aof_rewrite_base_size：AOF 重写基准文件大小。


int rdb_save_incremental_fsync：RDB 持久化时是否执行增量 fsync 操作。


int rdb_child_pid：RDB 持久化时子进程的进程 ID。
```
