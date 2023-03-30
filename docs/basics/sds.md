---
sidebar_position: 6
---

# Redis源码阅读 ads.c

Redis 的 sds.c 文件是 Redis 中的一个字符串操作库，主要实现了对字符串的创建、修改、释放等操作。该文件中包含了以下常用函数：



- sdsnewlen：创建一个指定长度的 sds 字符串。

- sdscatlen：将指定长度的字符串追加到 sds 字符串的末尾。

- sdscatprintf：将格式化的字符串追加到 sds 字符串的末尾。

- sdstrim：删除 sds 字符串两端的指定字符。

- sdssplitlen：将 sds 字符串按指定字符分割成多个子字符串。

- sdsjoin：将多个 sds 字符串按指定字符连接成一个新的 sds 字符串。

- sdsfree：释放 sds 字符串的内存空间。


**sds 字符串的类型划分**
在 Redis 中，sds 字符串的类型划分主要包括以下 5 种类型：



1. SDS_TYPE_5：sds 字符串的长度小于等于 5 字节，使用固定长度的 char 数组存储。

2. SDS_TYPE_8：sds 字符串的长度小于等于 255 字节，使用 uint8_t 类型的 len 属性表示长度。

3. SDS_TYPE_16：sds 字符串的长度小于等于 65535 字节，使用 uint16_t 类型的 len 属性表示长度。

4. SDS_TYPE_32：sds 字符串的长度小于等于 4294967295 字节，使用 uint32_t 类型的 len 属性表示长度。

5. SDS_TYPE_64：sds 字符串的长度大于 4294967295 字节，使用 uint64_t 类型的 len 属性表示长度。


在创建 sds 字符串时，会根据字符串的长度选择合适的类型。如果字符串的长度小于等于 5 字节，则使用 SDS_TYPE_5 类型；如果字符串的长度小于等于 255 字节，则使用 SDS_TYPE_8 类型，以此类推。


需要注意的是，在使用 SDS_TYPE_5 类型时，sds 字符串的实际长度为固定的 5 个字节，因此需要在字符串末尾添加一个空字符。在使用其他类型时，sds 字符串的实际长度为 len 属性的值加上一个空字符的长度。


sds 字符串的类型划分旨在提高 Redis 的内存使用效率。在字符串长度较小的情况下，使用较小的类型可以节省内存空间；在字符串长度较大的情况下，使用较大的类型可以避免频繁地重新分配内存空间。

**sdshdr8**
```c
struct __attribute__ ((__packed__)) sdshdr8 {
    uint8_t len; /* used */
    uint8_t alloc; /* excluding the header and null terminator */
    unsigned char flags; /* 3 lsb of type, 5 unused bits */
    char buf[];
};
```
这段代码定义了一个名为 sdshdr8 的结构体，用于表示 sds 字符串的头部信息。该结构体使用了 GCC 的 `__attribute__ ((__packed__))` 属性，表示该结构体不需要进行字节对齐，以节省内存空间。


该结构体包含以下字段：



- len：表示 sds 字符串的长度，使用 uint8_t 类型表示。

- alloc：表示 sds 字符串分配的内存空间大小（不包括头部信息和空字符），使用 uint8_t 类型表示。

- flags：表示 sds 字符串的类型和其他标志信息，使用 unsigned char 类型表示。其中，最低 3 位表示 sds 字符串的类型，剩余 5 位未使用。

- buf：表示 sds 字符串的缓冲区，使用 char 数组表示。


需要注意的是，buf 字段的长度并没有指定，这是因为 sds 字符串的长度是动态变化的，在创建 sds 字符串时会根据字符串的长度动态分配内存空间。因此，buf 字段的长度可以是任意值。



