+++
title = "合并两个git仓库，保留提交记录"
date = 2019-08-06T09:17:00+08:00
lastmod = 2019-11-05T14:53:53+08:00
tags = ["git"]
categories = ["git"]
draft = false
+++

-   说明将repo1合并到repo2中，并保留repo1的commit记录.
-   在repo2中依次运行下列命令

    ```shell
    git remote add other /your/path/to/repo1
    git fetch other
    git checkout -b repo1 other/master
    git checkout master
    git merge repo1 --allow-unrelated-histories
    ```
-   为解决合并仓库时出现的fatal: refusing to merge unrelated histories错误，我们这里使用了--allow-unrelated-histories选项。
-   合并仓库时和常规merge一致需处理合并冲突。