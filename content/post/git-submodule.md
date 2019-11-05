+++
title = "git submodule常用命令"
date = 2019-11-05T14:56:00+08:00
lastmod = 2019-11-05T15:34:58+08:00
tags = ["git"]
categories = ["git"]
draft = false
+++

> Git中子模块（submodule）允许你将一个 Git 仓库作为另一个 Git 仓库的子目录。它能让你将另一个仓库克隆到自己的项目中，同时还保持提交的独立。

-   添加子模块

    ```nil
    git submodule add MOD_REPO YOUR_PATH
    ```

    上述命令会在项目下生成.gitmodules文件，其中保存了子模块的信息。
-   使用包含子模块的项目,可以采取下列两种方式。

    1.

    <!--listend-->

    ```shell
    git clone MAIN_REPO
    git submodule init
    git submodule update
    ```

    1.

    <!--listend-->

    ```shell
    git clone MAIN_REPO --recursive
    ```
-   删除子模块

    ```shell
    git submodule deinit {MOD_NAME}
    git rm --cached {MOD_NAME}
    git commit -am "Remove a submodule."
    ```
-   修改某个模块的URL属性

    1.  修改.gitmodule文件中对应模块的url属性
    2.  运行git submodule sync 命令，将新的url更新到文件.git/config
    3.

    <!--listend-->

    ```shell
    git commit -am "Update submodule url."}
    ```