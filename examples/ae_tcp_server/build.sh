#!/bin/bash

# 定义变量
SERVER_DIR=server
CLIENT_DIR=client
BIN_DIR=bin

# 创建 bin 目录
if [ ! -d "${BIN_DIR}" ]; then
  mkdir "${BIN_DIR}"
fi

compile_project() {
  local project_dir=$1
  local binary_name=$2

  cd "${project_dir}" || exit
  mkdir -p build
  cd build || exit
  cmake ..
  make
  cp "${binary_name}" "../${BIN_DIR}/"
  cd ../..
  rm -rf "${project_dir}/build"
}

# 编译 tcp-server
compile_project "${SERVER_DIR}" "tcp-server"

# 编译 tcp-client
compile_project "${CLIENT_DIR}" "tcp-client"
