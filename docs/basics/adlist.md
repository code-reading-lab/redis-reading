---
sidebar_position: 5
---

# Redis源码阅读 adlist.c

adlist.c 是 Redis 中实现双向链表的源代码文件，其代码主要由以下几个部分组成：



1. 链表节点结构体定义
	```c
	 typedef struct listNode {
	    struct listNode *prev;  // 前置节点指针
	    struct listNode *next;  // 后置节点指针
	    void *value;            // 节点值指针
	} listNode;
	```

2. 链表结构体定义
	```c
	typedef struct list {
	    listNode *head;         // 链表头节点指针
	    listNode *tail;         // 链表尾节点指针
	    unsigned long len;      // 链表长度
	    void *(*dup)(void *ptr);  // 节点值复制函数指针
	    void (*free)(void *ptr);  // 节点值释放函数指针
	    int (*match)(void *ptr, void *key);  // 节点值比较函数指针
	} list;
	```
3. 链表创建函数
   ```c
    list *listCreate(void)
    {
        struct list *list;

        if ((list = zmalloc(sizeof(*list))) == NULL)
            return NULL;
        list->head = list->tail = NULL;
        list->len = 0;
        list->dup = NULL;
        list->free = NULL;
        list->match = NULL;
        return list;
    }
    ```
4. 链表的插入
   ```c
   list *listInsertNode(list *list, listNode *old_node, void *value, int after) {
    listNode *node;

    if ((node = zmalloc(sizeof(*node))) == NULL)
        return NULL;
    node->value = value;
    if (after) {
        node->prev = old_node;
        node->next = old_node->next;
        if (list->tail == old_node) {
            list->tail = node;
        }
    } else {
        node->next = old_node;
        node->prev = old_node->prev;
        if (list->head == old_node) {
            list->head = node;
        }
    }
    if (node->prev != NULL) {
        node->prev->next = node;
    }
    if (node->next != NULL) {
        node->next->prev = node;
    }
      list->len++;
      return list;
    }
    ```

总的来说，adlist.c 实现了 Redis 中双向链表的基本操作，是 Redis 中多个模块的基础数据结构。掌握该文件的源码实现可以帮助我们更好地理解 Redis 的底层实现，并且提高我们的代码能力。