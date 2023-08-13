---
title: 'C++ Primer Chatper1'
date: '2023-05-03'
---
# 开始

因为第一章的内容是后面章节内容的概述，所以笔记只记录一些问题，而不按照书本内容记录。

## 问题

访问main函数返回值的方法依赖于系统：

*   UNIX系统下：`echo $?`
*   Windows系统下：`echo %ERRORLEVEL%`

换行问题：

1.  有符号连接，可以直接换行
1.  字符串连接，推荐符号连接，不能使用反斜杠
1.  define宏定义，推荐反斜杠

```c
#include <iostream>

#define PRINT_NAME(x) \
    std::cout << "Name: " << x << std::endl;

int main(int argc, char* argv[]) {
  char kUsername1[] = "abcdefghijklmn"
                      "opqrstuvwxyz";

  char kUsername2[] = "abcdefghijklmn\
                      opqrstuvwxyz";

  std::cout << "Hello, Xish. I'm name is "
      << kUsername1 << std::endl;

  PRINT_NAME(kUsername1);
  PRINT_NAME(kUsername2);

  return 0;
}
```

文件重定向：

```bash
add_items <infile >outfile
```

编译：

```bash
# 指定g++编译器版本为C++11
g++ -std=c++11 -o test test.cc (g++ version is greater than or equal to 4.8)
```
