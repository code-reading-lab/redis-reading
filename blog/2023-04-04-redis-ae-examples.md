---
slug: redis-ae-examples
title: 如何使用 AE 实现网络编程、多线程编程和异步编程等方面的应用
authors:
  name: Henry Tien
  title: SDE
  url: https://github.com/henrytien
  image_url: https://github.com/henrytien.png
tags: [redis, ae, tcp]
---
以下是一些使用 AE 实现网络编程、多线程编程和异步编程等方面应用的示例。
## 网络编程：
使用 AE 可以方便地实现网络编程，例如，可以使用 AE 实现一个简单的 TCP 服务器，如下所示：
### 服务端代码
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <errno.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include "ae.h"

#define PORT 5000

// accept 回调函数，用于接收新连接
void acceptTcpHandler(aeEventLoop *loop, int fd, void *clientdata, int mask) {
    // 接收新连接
    int clientfd = accept(fd, NULL, NULL);
    if (clientfd == -1) {
        fprintf(stderr, "accept failed, errno: %d\n", errno);
        return;
    }
    // 为新连接添加读事件
    aeCreateFileEvent(loop, clientfd, AE_READABLE, readTcpHandler, NULL);
}

// 读事件回调函数，用于接收客户端发送的数据
void readTcpHandler(aeEventLoop *loop, int fd, void *clientdata, int mask) {
    char buffer[1024];
    // 读取客户端发送的数据
    int nread = read(fd, buffer, sizeof(buffer));
    if (nread == -1) {
        fprintf(stderr, "read failed, errno: %d\n", errno);
        close(fd);
        aeDeleteFileEvent(loop, fd, AE_READABLE);
        return;
    } else if (nread == 0) {
        close(fd);
        aeDeleteFileEvent(loop, fd, AE_READABLE);
        return;
    }
    buffer[nread] = '\0';
    // 打印接收到的数据
    printf("read data: %s\n", buffer);
}

int main() {
    // 创建 AE 实例
    aeEventLoop *loop = aeCreateEventLoop(1024);
    if (loop == NULL) {
        fprintf(stderr, "create event loop failed\n");
        exit(EXIT_FAILURE);
    }
    // 创建监听套接字
    int sockfd = socket(AF_INET, SOCK_STREAM, 0);
    if (sockfd == -1) {
        fprintf(stderr, "create socket failed, errno: %d\n", errno);
        exit(EXIT_FAILURE);
    }
    // 绑定监听套接字到指定端口
    struct sockaddr_in addr;
    memset(&addr, 0, sizeof(addr));
    addr.sin_family = AF_INET;
    addr.sin_addr.s_addr = htonl(INADDR_ANY);
    addr.sin_port = htons(PORT);
    if (bind(sockfd, (struct sockaddr*)&addr, sizeof(addr)) == -1) {
        fprintf(stderr, "bind failed, errno: %d\n", errno);
        exit(EXIT_FAILURE);
    }
    // 开始监听
    if (listen(sockfd, 1024) == -1) {
        fprintf(stderr, "listen failed, errno: %d\n", errno);
        exit(EXIT_FAILURE);
    }
    // 为监听套接字添加读事件
    if (aeCreateFileEvent(loop, sockfd, AE_READABLE, acceptTcpHandler, NULL) == -1) {
        fprintf(stderr, "create file event failed, errno: %d\n", errno);
        exit(EXIT_FAILURE);
    }
    // 进入事件循环
    aeMain(loop);
    // 销毁 AE 实例
    aeDeleteEventLoop(loop);
    return 0;
}
```

### 客户端代码
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <errno.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <unistd.h>

#define SERVER_IP "127.0.0.1"
#define SERVER_PORT 5000

int main() {
    // 创建套接字
    int sockfd = socket(AF_INET, SOCK_STREAM, 0);
    if (sockfd == -1) {
        fprintf(stderr, "create socket failed, errno: %d\n", errno);
        exit(EXIT_FAILURE);
    }
    // 连接服务器
    struct sockaddr_in addr;
    memset(&addr, 0, sizeof(addr));
    addr.sin_family = AF_INET;
    addr.sin_addr.s_addr = inet_addr(SERVER_IP);
    addr.sin_port = htons(SERVER_PORT);
    int ret = connect(sockfd, (struct sockaddr*)&addr, sizeof(addr));
    if (ret == -1) {
        if (errno == EINPROGRESS) {
            // 连接正在进行中，需要等待连接完成或者超时
            fd_set rset, wset;
            FD_ZERO(&rset);
            FD_SET(sockfd, &rset);
            wset = rset;
            struct timeval tv;
            tv.tv_sec = 5; // 超时时间 5 秒
            tv.tv_usec = 0;
            ret = select(sockfd + 1, &rset, &wset, NULL, &tv);
            if (ret == -1) {
                fprintf(stderr, "select failed, errno: %d\n", errno);
                close(sockfd);
                exit(EXIT_FAILURE);
            } else if (ret == 0) {
                fprintf(stderr, "connect timeout\n");
                close(sockfd);
                exit(EXIT_FAILURE);
            } else {
                int error = 0;
                socklen_t len = sizeof(error);
                getsockopt(sockfd, SOL_SOCKET, SO_ERROR, &error, &len);
                if (error != 0) {
                    fprintf(stderr, "connect failed, errno: %d\n", error);
                    close(sockfd);
                    exit(EXIT_FAILURE);
                }
            }
        } else {
            fprintf(stderr, "connect failed, errno: %d\n", errno);
            close(sockfd);
            exit(EXIT_FAILURE);
        }
    }
    // 发送数据
    const char *data = "hello, world";
    int nwrite = write(sockfd, data, strlen(data));
    if (nwrite == -1) {
        fprintf(stderr, "write failed, errno: %d\n", errno);
        close(sockfd);
        exit(EXIT_FAILURE);
    }
    // 接收数据
    char buffer[1024];
    int nread = read(sockfd, buffer, sizeof(buffer));
    if (nread == -1) {
        fprintf(stderr, "read failed, errno: %d\n", errno);
        close(sockfd);
        exit(EXIT_FAILURE);
    } else if (nread == 0) {
        fprintf(stderr, "server closed connection\n");
        close(sockfd);
        exit(EXIT_FAILURE);
    }
    buffer[nread] = '\0';
    // 打印接收到的数据
    printf("received data: %s\n", buffer);
    // 关闭套接字
    close(sockfd);
    return 0;
}
```
