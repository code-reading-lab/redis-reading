cmake_minimum_required(VERSION 3.10)
project(tcp-client)

# 编译选项
set(CMAKE_C_STANDARD 11)
set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -Wall -Wextra -Werror -pedantic -pthread")

# 生成可执行文件
add_executable(tcp-client client.c)
