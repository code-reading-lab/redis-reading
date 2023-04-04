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
