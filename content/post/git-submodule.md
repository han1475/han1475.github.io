+++
title = "git子模块"
date = 2019-12-16T23:34:00+08:00
lastmod = 2020-05-06T00:23:57+08:00
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


## 克隆包含子模块的项目 {#克隆包含子模块的项目}

-   如果克隆主库的时候要初始化子模块,使用 `--recursive`,如：

<!--listend-->

```sh
git clone --recursive {MAIN_REPO}
```

-   如果克隆了主库但没初始化子模块，则用：

<!--listend-->

```sh
git submodule update --init --recursive
```

-   如果已经克隆并初始化子模块,需要从子模块的源更新这个子模块,使用 `--remote`,如：

<!--listend-->

```sh
git submodule update --recursive --remote
git add .
git commit "update submodule"
```


## 删除子模块 {#删除子模块}

```sh
git submodule deinit {MOD_NAME}
git rm --cached {MOD_NAME}
git commit -am "Remove a submodule."
```


## 修改某个模块的URL属性 {#修改某个模块的url属性}

To Be Continued.