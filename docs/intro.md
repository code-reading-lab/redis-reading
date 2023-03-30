---
sidebar_position: 1
---
# Starting

To read and understand Redis source code, follow these steps:

1. Familiarize yourself with C: Redis is written in ANSI C, so having a good understanding of the C programming language is essential.

2. Clone the repository: Clone the Redis repository from GitHub using the command `git clone https://github.com/redis/redis.git`. This will give you the latest version of the source code.

3. Understand the project structure: The Redis source code is organized into several folders, such as `src`, `deps`, and `tests`. The main source code files are located in the `src` folder.

4. Start with the main file: Open the `src/server.c` file. This is the main file of the Redis server and contains the `main()` function. It initializes the server, sets up the event loop, and starts the server.

5. Explore important components:

   a. Event loop: Examine `src/ae.c` and `src/ae.h` to understand the event loop implementation, which is crucial for Redis' non-blocking I/O and handling client connections.
   
   b. Networking: Review `src/anet.c` and `src/anet.h` to understand how Redis handles network connections, including socket creation, binding, and listening.
   
   c. Data structures: Study `src/sds.c` and `src/sds.h` for the simple dynamic string implementation, and `src/adlist.c` and `src/adlist.h` for the linked list implementation. These are fundamental to Redis' data structures.
   
   d. Commands: Check `src/server.h` for the `redisCommand` struct and `src/server.c` for the command table. These define the commands that Redis supports.
   
   e. Databases and data types: Explore `src/db.c` and `src/db.h` to understand the key-value store implementation, as well as `src/t_string.c`, `src/t_list.c`, `src/t_set.c`, `src/t_zset.c`, and `src/t_hash.c` for the different data types Redis supports.

6. Read the documentation: The Redis source code has extensive comments that explain the functionality of different components. Make sure to read these comments to gain a deeper understanding of the code.

7. Debug and experiment: Compile and run Redis locally, and use a debugger (e.g., gdb) to step through the code. Modify the code and observe the effects to better understand how the different components interact.

8. Participate in the community: Join the Redis mailing list, follow the GitHub repository, and participate in discussions to learn from other developers and stay up-to-date with the latest developments in Redis.
