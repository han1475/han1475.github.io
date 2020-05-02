+++
title = "git子模块"
date = 2019-12-16T23:34:00+08:00
tags = ["git", "submodule"]
categories = ["计算机"]
draft = false
+++

Git中子模块（submodule）允许你将一个 Git 仓库作为另一个 Git 仓库的子目录。
它能让你将另一个仓库克隆到自己的项目中，同时还保持提交的独立。

<!--more-->


## 添加子模块 {#添加子模块}

```sh
git submodule add {MOD_REPO} {YOUR_PATH}
```

上述命令会在项目下生成.gitmodules文件，其中保存了子模块的信息。


## 使用包含子模块的项目,可以采取下列两种方式。 {#使用包含子模块的项目-可以采取下列两种方式}

1.  克隆后再初始化并更新子模块

    ```sh
    git clone {MAIN_REPO}
    git submodule init
    git submodule update
    ```
2.  在克隆时增加额外参数

    ```sh
    git clone --recursive {MAIN_REPO}
    ```


## 删除子模块 {#删除子模块}

```sh
git submodule deinit {MOD_NAME}
git rm --cached {MOD_NAME}
git commit -am "Remove a submodule."
```


## 修改某个模块的URL属性 {#修改某个模块的url属性}

To Be Continued.