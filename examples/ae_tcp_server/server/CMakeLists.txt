cmake_minimum_required(VERSION 3.10)
project(tcp-server)

# 编译选项
set(CMAKE_C_STANDARD 11)
set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -Wall -Wextra -Werror -pedantic -pthread")

# 编译 AE 库
add_library(AE SHARED IMPORTED)
set_target_properties(AE PROPERTIES IMPORTED_LOCATION /usr/local/redis-6.2.5/src/libae.so)

# 生成可执行文件
add_executable(tcp-server server.c)

# 添加依赖库
target_link_libraries(tcp-server AE)
