---
sidebar_position: 2
---

# Redis源码阅读 ae.c

## Event loop 讲解一下这个是如何实现的

Redis 使用事件驱动的方式实现 IO 多路复用，其核心是基于第三方库的事件循环库。Redis 支持多种事件循环库，包括：

- libevent

- libev

- ae (Redis 自带的事件循环库)


其中，Redis 自带的事件循环库 ae 较为轻量级，且支持跨平台，因此 Redis 默认使用 ae 作为事件循环库。


下面简单介绍 Redis 中事件循环的实现原理：



**初始化事件循环**


在 Redis 启动时，会创建一个事件循环对象，并注册一些必要的事件。事件循环对象中包含了一个事件池和一个定时器队列。

`aeEventLoop` 是 Redis 中的一个事件循环库，是实现 Redis 事件驱动模型的核心。aeEventLoop 的实现基于 `epoll` （Linux）和 `kqueue` （FreeBSD、macOS）等系统调用，能够高效地处理大量的并发连接。下面是一些 `aeEventLoop` 的讲解：

在 Redis 启动时，会创建一个 `aeEventLoop` 对象，并初始化 `epoll` 或 `kqueue` 句柄。



**注册事件**


当 Redis 需要监听某个文件描述符的事件时，会调用事件循环库提供的 API，将该事件添加到事件池中。事件包含了文件描述符、事件类型（读、写、异常等）、处理函数等信息。

当 Redis 需要监听某个文件描述符的事件时，会调用 `aeCreateFileEvent` 函数，将该事件添加到事件池中。该函数会将文件描述符和事件类型作为参数，以及一个回调函数，该函数会在文件描述符上产生事件时被调用。在 `aeCreateFileEvent` 函数中，会将文件描述符添加到 `epoll` 或 `kqueue` 的事件集合中。


**运行事件循环**


在事件循环库的主循环中，会不断地从事件池中获取事件，并调用相应的处理函数进行处理。如果事件处理函数中需要阻塞等待某个条件，事件循环库会将该事件从事件池中移除，并将其添加到等待队列中，直到条件满足后重新将其添加到事件池中。

在 `aeMain` 函数中，会不断地从 `epoll` 或 `kqueue` 中获取事件，并调用相应的回调函数进行处理。在处理完所有的文件描述符事件后，`aeMain` 函数会处理所有已到期的时间事件，即调用 `aeProcessEvents` 函数。

**处理定时器**


事件循环库还支持定时器功能，即在一定时间后触发某个事件。Redis 中的定时器使用的是时间事件，每个时间事件包含了一个时间戳和一个处理函数。事件循环库会维护一个定时器队列，并在每次循环时检查是否有时间事件到期，如果到期则调用相应的处理函数。

`aeEventLoop` 还支持定时器功能，即在一定时间后触发某个事件。Redis 中的定时器使用的是时间事件，每个时间事件包含了一个时间戳和一个处理函数。在 `aeCreateTimeEvent` 函数中，会将时间事件添加到时间事件链表中，时间事件链表按照时间戳从小到大排序。在 `aeProcessTimeEvents` 函数中，会循环遍历时间事件链表，处理所有已到期的时间事件。


总之，`aeEventLoop` 是 Redis 实现高性能 IO 的重要组成部分，能够高效地处理大量的并发连接，并支持定时器功能。`aeEventLoop` 实现简单、易于维护，是 Redis 实现事件驱动模型的核心。

## 分析一下ae.c中的数据结构关系
在 Redis 中，ae.c 文件是实现事件驱动模型的核心代码文件，其中定义了很多数据结构和函数。下面是 ae.c 中一些重要的数据结构及其关系：



**aeEventLoop 结构体**


`aeEventLoop` 结构体是整个事件循环的核心数据结构，定义如下：

```c
typedef struct aeEventLoop {
    int maxfd;                  // 监听的文件描述符的最大值
    int setsize;                // 监听的文件描述符的数量
    long long timeEventNextId;  // 时间事件的编号
    time_t lastTime;            // 上一次处理时间事件的时间
    aeFileEvent *events;        // 文件事件数组
    aeFiredEvent *fired;        // 已触发事件数组
    aeTimeEvent *timeEventHead; // 时间事件链表头指针
    int stop;                   // 事件循环是否停止标志
    void *apidata;              // 多路复用库的私有数据
    aeBeforeSleepProc *beforesleep; // 事件循环的前置处理函数
    aeBeforeSleepProc *aftersleep; // 事件循环的后置处理函数
    int flags;
} aeEventLoop;
```
其中，`maxfd` 表示监听的文件描述符的最大值，`setsize` 表示监听的文件描述符的数量，`events` 是一个指向 `aeFileEvent` 数组的指针，`fired` 是一个指向 `aeFiredEvent` 数组的指针，`timeEventHead` 是一个指向 `aeTimeEvent` 链表头的指针，`stop` 表示事件循环是否停止，`apidata` 是多路复用库的私有数据，`beforesleep` 是事件循环的前置处理函数。



**aeFileEvent 结构体**


`aeFileEvent` 结构体表示要监听的文件描述符的事件，定义如下：

```c
typedef struct aeFileEvent {
    int mask;                 // 监听的事件掩码
    aeFileProc *rfileProc;    // 读事件的处理函数
    aeFileProc *wfileProc;    // 写事件的处理函数
    void *clientData;         // 客户端数据
} aeFileEvent;
```
其中，`mask` 表示要监听的事件掩码，可以是 `AE_READABLE` 或 `AE_WRITABLE` 或它们的组合，`rfileProc` 和 `wfileProc` 分别表示读事件和写事件的处理函数，`clientData` 表示客户端数据。



**aeFiredEvent 结构体**


`aeFiredEvent` 结构体表示已触发的事件，定义如下：

```c
typedef struct aeFiredEvent {
    int fd;            // 触发事件的文件描述符
    int mask;          // 触发的事件类型
} aeFiredEvent;
```
其中，`fd` 表示触发事件的文件描述符，`mask` 表示触发的事件类型，可以是 `AE_READABLE` 或 `AE_WRITABLE` 或它们的组合。



**aeTimeEvent 结构体**


`aeTimeEvent` 结构体表示时间事件，定义如下：

```c
typedef struct aeTimeEvent {
    long long id;             // 时间事件的编号
    long when_sec;            // 时间事件的触发时间（秒）
    long when_ms;             // 时间事件的触发时间（毫秒）
    aeTimeProc *timeProc;     // 时间事件的处理函数
    aeEventFinalizerProc *finalizerProc; // 时间事件的处理函数的释放函数
    void *clientData;         // 客户端数据
    struct aeTimeEvent *prev; // 前一个时间事件指针
    struct aeTimeEvent *next; // 后一个时间事件指针
} aeTimeEvent;
```
其中，`id` 表示时间事件的编号，`when_sec` 和 `when_ms` 分别表示时间事件的触发时间（秒和毫秒），`timeProc` 表示时间事件的处理函数，`finalizerProc` 表示时间事件的处理函数的释放函数，`clientData` 表示客户端数据。时间事件按照触发时间从小到大排序，以双向链表的形式组织起来。



**aeApiState 结构体**


`aeApiState` 结构体表示多路复用库的私有数据，定义如下：

```c
typedef struct aeApiState {
    int epfd;       // epoll 句柄
    struct epoll_event *events; // epoll 事件数组
} aeApiState;
```
其中，`epfd` 表示 `epoll` 句柄，`events` 是一个指向 `epoll` 事件数组的指针。多路复用库的私有数据由 `aeEventLoop` 结构体中的 `apidata` 字段指向。


## 为啥使用aeApiPoll 的select呢而不用epoll呢?
在 Redis 中，`aeApiPoll` 函数是用来进行文件事件的多路复用的函数，它可以使用 `select`、`poll`、`epoll` 等多种多路复用机制。而在选择使用 `select` 还是 `epoll` 时，有以下几个因素需要考虑：



- 可移植性：`select` 是 POSIX 标准的一部分，几乎所有的操作系统都支持，因此具有很好的可移植性；而 `epoll` 是 Linux 特有的机制，其他操作系统可能不支持。


- 文件描述符数量：`select` 在处理大量文件描述符时，性能会随着文件描述符数量的增加而下降，而 `epoll` 则可以高效地处理大量文件描述符。


- 内存占用：`select` 和 `poll` 在每次调用时，需要将所有待处理的文件描述符集合复制到内核中，因此内存占用会随着文件描述符数量的增加而增加，而 epoll 则只需要在初始化时将所有待处理的文件描述符添加到内核事件表中，因此内存占用相对较小。


使用 `select` 还是 `epoll` 主要取决于具体的应用场景。如果要在多个操作系统上运行，或者处理的文件描述符数量较少，那么可以选择使用 `select`；如果只在 Linux 上运行，或者需要高效地处理大量文件描述符，那么可以选择使用 `epoll`。在 Redis 中，由于需要在多个操作系统上运行，同时处理的文件描述符数量也不是很多，因此选择使用 `select` 是比较合适的。

当然也有对应的epoll实现，在ae_epoll.c中。

```c 
retval = epoll_wait(state->epfd,state->events,eventLoop->setsize,
            tvp ? (tvp->tv_sec*1000 + (tvp->tv_usec + 999)/1000) : -1);
```

- `epoll_wait` 函数是 epoll 模型中的一个函数，用于等待事件的发生。

- `state->epfd` 是 epoll 的文件描述符，表示要监听的事件集合。

- `state->events` 是一个数组，表示 epoll 监听到的事件集合，其中每个元素都是一个 epoll_event 类型的结构体，用于描述一个事件。

- `eventLoop->setsize` 是事件集合的大小，即要监听的事件的数量。

- `tvp` 是一个指向 timeval 结构体的指针，表示 epoll 等待事件的超时时间。

- `retval` 是 epoll_wait 函数的返回值，表示发生事件的数量。

## 如何来提高 AE 的性能

以下是一些可以通过调整 AE 的参数和使用多线程等方式来提高 AE 的性能和可靠性的建议：
1. 调整 AE 的事件循环模型：AE 的事件循环模型包括多路复用、轮询和阻塞等方式，可以根据具体的应用场景和需求进行调整。例如，在高并发的场景中，可以使用多路复用模型，以提高 AE 的性能和可靠性。
2. 调整 AE 的事件处理参数：AE 的事件处理参数包括最大连接数、超时时间、缓冲区大小等，可以根据具体的应用场景和需求进行调整。例如，在处理大量请求的场景中，可以适当增加缓冲区大小，以减少数据丢失和网络拥堵等问题。
3. 使用多线程提高 AE 的并发性：可以通过使用多线程的方式，将网络事件处理任务分配到多个线程中，以提高 AE 的并发性和可靠性。例如，在处理大量请求的场景中，可以使用多线程的方式，将请求处理任务分配到多个线程中，以减轻单个线程的负担，提高 AE 的处理能力。
4. 使用事件驱动的方式提高 AE 的性能：可以通过使用事件驱动的方式，将网络事件处理和应用程序的逻辑解耦，以提高 AE 的性能和可靠性。例如，在处理大量请求的场景中，可以使用事件驱动的方式，将请求处理任务和数据库查询等应用程序的逻辑解耦，以提高 AE 的性能和可靠性。
需要注意的是，在调整 AE 的参数和使用多线程等方式来提高 AE 的性能和可靠性时，需要根据具体的应用场景和需求进行选择和应用。同时，也需要进行实践和测试，保证系统的稳定性和性能。