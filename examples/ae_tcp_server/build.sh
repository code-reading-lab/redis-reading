#!/bin/bash

# 定义变量
SERVER_DIR=server
CLIENT_DIR=client
BIN_DIR=bin

# 创建 bin 目录
if [ ! -d "${BIN_DIR}" ]; then
  mkdir "${BIN_DIR}"
fi

# 编译 tcp-server
cd "${SERVER_DIR}"
mkdir build
cd build
cmake ..
make
cp "${SERVER_DIR}" "${BIN_DIR}"
cd ../..
# 删除 build 目录
rm -rf "${SERVER_DIR}/build"

# 编译 tcp-client
cd "${CLIENT_DIR}"
mkdir build
cd build
cmake ..
make
cp "${CLIENT_DIR}" "${BIN_DIR}"
cd ../..
# 删除 build 目录
rm -rf "${CLIENT_DIR}/build"
