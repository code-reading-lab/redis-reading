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
