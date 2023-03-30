---
sidebar_position: 3
---

# Redis源码阅读 dict.c

dict.c是Redis源码中实现字典（哈希表）的C文件。阅读该文件需要了解哈希表的概念和实现方式，以及Redis中字典的作用和使用场景。该文件中包含了字典的结构体定义、创建和销毁字典的函数、添加、查找和删除元素的函数等。阅读dict.c时需要注意代码的结构和函数之间的调用关系，同时需要熟悉C语言的基本语法和指针操作。
## 数据结构分析
dict.c是Redis中实现哈希表的C文件，其数据结构主要包括以下几个部分：



dictEntry：哈希表中的一个键值对，包括key和value两个成员。key和value可以是任意类型的指针，通过void*表示。其中，key表示当前键值对的键，value表示当前键值对的值。


dictType：哈希表类型，包括哈希函数、键比较函数和值释放函数等。


dict：哈希表，包括哈希表的大小、已使用空间、哈希表节点数组等。哈希表节点数组使用指针数组的形式进行存储，每个指针指向一个dictEntry。


dictht：哈希表中的一个哈希表节点数组，包括哈希表节点、哈希表大小、哈希表已使用空间等。一个哈希表中包括两个dictht，分别为ht[0]和ht[1]，用于实现哈希表的扩容和收缩。


hash函数：dict.c实现了多种不同类型的hash函数，通过dictType中的hash函数指定使用哪一种hash函数。


哈希表的迭代器：dictIterator和dictEntry，dictIterator用于遍历哈希表，dictEntry用于表示当前迭代器指向的键值对。

## 主要的函数实现
1. 定义了一个dictEntry结构体，用于表示哈希表中的一个键值对。
   ```c
   struct dictEntry {
    void *key;
    union {
        void *val;
        uint64_t u64;
        int64_t s64;
        double d;
    } v;
    struct dictEntry *next;     /* Next entry in the same hash bucket. */
    void *metadata[];           /* An arbitrary number of bytes (starting at a
                                 * pointer-aligned address) of size as returned
                                 * by dictType's dictEntryMetadataBytes(). */
    };
   ```


2. 定义了一个dictType结构体，用于表示哈希表的类型，包括哈希函数、键比较函数和值释放函数等。
    ```c
    typedef struct dictType {
      uint64_t (*hashFunction)(const void *key);
      void *(*keyDup)(dict *d, const void *key);
      void *(*valDup)(dict *d, const void *obj);
      int (*keyCompare)(dict *d, const void *key1, const void *key2);
      void (*keyDestructor)(dict *d, void *key);
      void (*valDestructor)(dict *d, void *obj);
      int (*expandAllowed)(size_t moreMem, double usedRatio);
      /* Flags */
      /* The 'no_value' flag, if set, indicates that values are not used, i.e. the
      * dict is a set. When this flag is set, it's not possible to access the
      * value of a dictEntry and it's also impossible to use dictSetKey(). Entry
      * metadata can also not be used. */
      unsigned int no_value:1;
      /* If no_value = 1 and all keys are odd (LSB=1), setting keys_are_odd = 1
      * enables one more optimization: to store a key without an allocated
      * dictEntry. */
      unsigned int keys_are_odd:1;
      /* TODO: Add a 'keys_are_even' flag and use a similar optimization if that
      * flag is set. */

      /* Allow each dict and dictEntry to carry extra caller-defined metadata. The
      * extra memory is initialized to 0 when allocated. */
      size_t (*dictEntryMetadataBytes)(dict *d);
      size_t (*dictMetadataBytes)(void);
      /* Optional callback called after an entry has been reallocated (due to
      * active defrag). Only called if the entry has metadata. */
      void (*afterReplaceEntry)(dict *d, dictEntry *entry);
    } dictType;
    ```

3. 定义了一个dict结构体，用于表示哈希表，包括哈希表的大小、已使用空间、哈希表节点数组等。
    ```c
      struct dict {
      dictType *type;

      dictEntry **ht_table[2];
      unsigned long ht_used[2];

      long rehashidx; /* rehashing not in progress if rehashidx == -1 */

      /* Keep small vars at end for optimal (minimal) struct padding */
      int16_t pauserehash; /* If >0 rehashing is paused (<0 indicates coding error) */
      signed char ht_size_exp[2]; /* exponent of size. (size = 1<<exp) */

      void metadata[];           / An arbitrary number of bytes (starting at a
                                  * pointer-aligned address) of size as defined
                                  * by dictType's dictEntryBytes. */
    };
    ```

4. 实现了创建、扩容和销毁哈希表的函数，如dictCreate、_dictExpandIfNeeded和dictRelease等。
    ```c
    /* Create a new hash table */
    dict *dictCreate(dictType *type)
    {
        size_t metasize = type->dictMetadataBytes ? type->dictMetadataBytes() : 0;
        dict *d = zmalloc(sizeof(*d) + metasize);
        if (metasize) {
            memset(dictMetadata(d), 0, metasize);
        }

        _dictInit(d,type);
        return d;
    }
    ```

5. 实现了插入、查找和删除元素的函数，如dictAdd、dictFind和dictDelete等。
    ```c
    /* Add an element to the target hash table */
    int dictAdd(dict *d, void *key, void *val)
    {
        dictEntry *entry = dictAddRaw(d,key,NULL);

        if (!entry) return DICT_ERR;
        if (!d->type->no_value) dictSetVal(d, entry, val);
        return DICT_OK;
    }
    ```

6. 实现了哈希表的迭代器，如dictGetIterator和dictNext等。
   ```c
    dictEntry *dictNext(dictIterator *iter)
    {
        while (1) {
            if (iter->entry == NULL) {
                if (iter->index == -1 && iter->table == 0) {
                    if (iter->safe)
                        dictPauseRehashing(iter->d);
                    else
                        iter->fingerprint = dictFingerprint(iter->d);
                }
                iter->index++;
                if (iter->index >= (long) DICTHT_SIZE(iter->d->ht_size_exp[iter->table])) {
                    if (dictIsRehashing(iter->d) && iter->table == 0) {
                        iter->table++;
                        iter->index = 0;
                    } else {
                        break;
                    }
                }
                iter->entry = iter->d->ht_table[iter->table][iter->index];
            } else {
                iter->entry = iter->nextEntry;
            }
            if (iter->entry) {
                /* We need to save the 'next' here, the iterator user
                * may delete the entry we are returning. */
                iter->nextEntry = dictGetNext(iter->entry);
                return iter->entry;
            }
        }
        return NULL;
    }
   ```
  

7. 实现了哈希表的扩展和收缩操作，如dictExpand and dictResize等。
      ```c
      /* Expand or create the hash table,
    * when malloc_failed is non-NULL, it'll avoid panic if malloc fails (in which case it'll be set to 1).
    * Returns DICT_OK if expand was performed, and DICT_ERR if skipped. */
    int _dictExpand(dict *d, unsigned long size, int* malloc_failed)
    {
        if (malloc_failed) *malloc_failed = 0;

        /* the size is invalid if it is smaller than the number of
        * elements already inside the hash table */
        if (dictIsRehashing(d) || d->ht_used[0] > size)
            return DICT_ERR;

        /* the new hash table */
        dictEntry **new_ht_table;
        unsigned long new_ht_used;
        signed char new_ht_size_exp = _dictNextExp(size);

        /* Detect overflows */
        size_t newsize = 1ul<<new_ht_size_exp;
        if (newsize < size || newsize * sizeof(dictEntry*) < newsize)
            return DICT_ERR;

        /* Rehashing to the same table size is not useful. */
        if (new_ht_size_exp == d->ht_size_exp[0]) return DICT_ERR;

        /* Allocate the new hash table and initialize all pointers to NULL */
        if (malloc_failed) {
            new_ht_table = ztrycalloc(newsize*sizeof(dictEntry*));
            *malloc_failed = new_ht_table == NULL;
            if (*malloc_failed)
                return DICT_ERR;
        } else
            new_ht_table = zcalloc(newsize*sizeof(dictEntry*));

        new_ht_used = 0;

        /* Is this the first initialization? If so it's not really a rehashing
        * we just set the first hash table so that it can accept keys. */
        if (d->ht_table[0] == NULL) {
            d->ht_size_exp[0] = new_ht_size_exp;
            d->ht_used[0] = new_ht_used;
            d->ht_table[0] = new_ht_table;
            return DICT_OK;
        }

        /* Prepare a second hash table for incremental rehashing */
        d->ht_size_exp[1] = new_ht_size_exp;
        d->ht_used[1] = new_ht_used;
        d->ht_table[1] = new_ht_table;
        d->rehashidx = 0;
        return DICT_OK;
    }
    ```

8. 实现了哈希表的统计和调试函数，如dictSize和dictGetStats等。
    ```c
    #define dictSize(d) ((d)->ht_used[0]+(d)->ht_used[1])
    ```
## Redis 如何解决hash冲突的呢
Redis使用哈希表（hash table）来实现字典（dictionary）数据结构。当多个键被映射到哈希表的同一个索引位置时，就会发生哈希冲突（hash collision）。


Redis通过链表解决哈希冲突。具体来说，每个哈希表节点都包含指向下一个节点的指针。当多个键被映射到哈希表的同一个索引位置时，Redis会将它们存储在同一个链表中。


在查找哈希表中的键时，首先根据键计算出哈希值，然后找到对应的索引位置。如果该位置上的节点是一个链表，则需要遍历链表中的每个节点，直到找到与目标键匹配的节点为止。这个过程被称为“链式查找”（chaining）。


对于比较小的哈希表，链式查找是一个非常高效的解决哈希冲突的方法。如果哈希表变得过于拥挤，Redis会自动将其扩展，以保证哈希表的负载因子（load factor）不超过1。


需要注意的是，链式查找虽然能够解决哈希冲突，但是当链表中的节点数量变得非常大时，性能会受到影响。因此，当哈希表中的键值对数量比较大时，应该考虑使用其他解决哈希冲突的方法，例如开放地址法（open addressing）或二次探测法（quadratic probing）。

具体片段为：
```c
 for (table = 0; table <= 1; table++) {
        idx = hash & DICTHT_SIZE_MASK(d->ht_size_exp[table]);
        /* Search if this slot does not already contain the given key */
        he = d->ht_table[table][idx];
        while(he) {
            void *he_key = dictGetKey(he);
            if (key == he_key || dictCompareKeys(d, key, he_key)) {
                if (existing) *existing = he;
                return NULL;
            }
            he = dictGetNext(he);
        }
        if (!dictIsRehashing(d)) break;
    }
```
当一个新元素（键值对）需要添加到哈希表中时，会先计算键的哈希值，然后确定键在哈希表中的索引位置。如果该位置上已经有节点，则需要进行链式查找，直到找到与目标键相同的节点或遍历完整个链表为止。如果没有找到与目标键相同的节点，则需要添加新节点。

