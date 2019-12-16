+++
title = "Github Actions使用"
date = 2019-12-16T23:34:00+08:00
tags = ["github", "actions"]
categories = ["计算机"]
draft = false
+++

Github Actions是Github的持续集成服务，于2018年10月开始测试，2019年11月13日正式上线。

<!--more-->


## 一、GitHub Actions是什么 {#一-github-actions是什么}

持续集成包括很多操作，比如运行测试，构建版本等，GitHub把这些操作称之为Actions。


## 二、为什么选择GitHub Actions {#二-为什么选择github-actions}

1.  Github Actions采取了类似npm包的处理方式，允许直接引用其他人写好的Action脚本文件。
2.  Github在市场中提供了Action的搜索功能，方便自行搜索，搜索时只需要在类型（Type）中选择Actions即可。
3.  Github Actions 配置直接存储于代码仓库的 `.github/workflows` 目录下，避免配置分离难以维护。


## 三、关于GitHub Actions引用他人脚本 {#三-关于github-actions引用他人脚本}

1.  采用 `username/reponame` 的方式引用。
    -   如 `actions/setup-node` 就是指引用 `github.com/actions/setup-node` 这个代码仓库.
    -   事实上Github官方的Actions都存储在 `github.com/actions` 这个用户名的代码仓库中。
2.  Github Actions采用代码仓库的方式存储，因此你可以引用特定版本，下列都是正确的引用。

    ```nil
    actions/setup-node@9a99bb3 # 指向一个 commit
    actions/setup-node@v1.2.0  # 指向一个标签
    actions/setup-node@master  # 指向一个分支
    ```


## 四、基本概念 {#四-基本概念}

To Be Continued.