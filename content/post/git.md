+++
title = "git常用命令"
date = 2019-11-06
lastmod = 2019-11-07T00:04:49+08:00
tags = ["git"]
categories = ["git"]
draft = false
+++

本人经常使用git进行版本控制，因此总结常用命令就有了本文。

<!--more-->


## 子模块 {#子模块}

> Git中子模块（submodule）允许你将一个 Git 仓库作为另一个 Git 仓库的子目录。它能让你将另一个仓库克隆到自己的项目中，同时还保持提交的独立。


### 添加子模块 {#添加子模块}

```nil
git submodule add MOD_REPO YOUR_PATH
```

上述命令会在项目下生成.gitmodules文件，其中保存了子模块的信息。


### 使用包含子模块的项目,可以采取下列两种方式。 {#使用包含子模块的项目-可以采取下列两种方式}

1.  克隆后再初始化并更新子模块

<!--listend-->

```shell
git clone MAIN_REPO
git submodule init
git submodule update
```

1.  在克隆时增加额外参数

<!--listend-->

```shell
git clone MAIN_REPO --recursive
```


### 删除子模块 {#删除子模块}

```shell
git submodule deinit {MOD_NAME}
git rm --cached {MOD_NAME}
git commit -am "Remove a submodule."
```


### 修改某个模块的URL属性 {#修改某个模块的url属性}

1.  修改.gitmodule文件中对应模块的url属性
2.  运行git submodule sync 命令，将新的url更新到文件.git/config
3.  提交修改

<!--listend-->

```shell
git commit -am "Update submodule url."
```


## 合并仓库并保留提交记录 {#合并仓库并保留提交记录}

> 将repo1合并到repo2中，并保留repo1的commit记录。


### 在repo2中依次运行下列命令 {#在repo2中依次运行下列命令}

```shell
git remote add other /your/path/to/repo1
git fetch other
git checkout -b repo1 other/master
git checkout master
git merge repo1 --allow-unrelated-histories
```


### 为解决合并仓库时出现的fatal: refusing to merge unrelated histories错误，我们这里使用了--allow-unrelated-histories选项。 {#为解决合并仓库时出现的fatal-refusing-to-merge-unrelated-histories错误-我们这里使用了-allow-unrelated-histories选项}