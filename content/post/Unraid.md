+++
title = "unraid折腾记（持续更新）"
date = 2019-11-13
lastmod = 2019-11-13T23:38:14+08:00
tags = ["unraid", "nas", "virtualization"]
categories = ["handware"]
draft = false
+++

> Unraid是基于KVM的半虚拟化付费软件，定价分成三个等级：basic，59刀可以挂载6个存储设备；plus，89刀12个；pro，129刀无限制。本文安装Unraid的平台配置是h61主板+G1610赛扬cpu。

<!--more-->


## 准备安装 {#准备安装}

1.  准备好一个1G或者更大的U盘，不使用
2.  按照官网指引，可以采取两种方式，第一种是直接使用官方提供的u盘启动盘创建工具创建启动盘，但由于访问amazon服务器太慢，本次没有涉及。
3.  第二种方式直接从[官网下载地址](https://unraid.net/download)下载固件，手动创建启动盘。
4.  经过实际尝试，官方教程无法启动，推荐使用[UNetbootin](http://unetbootin.github.io/)工具
    -   此方法需要u盘容量不超过32G
    -   将U盘格式化为 fat32 格式，将官网下载的zip文件修改为iso文件（windows下直接修改扩展名就可以）
    -   运行UNetbootin工具，选择上一步修改的iso文件，等待写入完成即可。
5.  出现无法获取ip的问题，设置U盘config/network.cfg文件中的IPADDR(IP地址)，NETMASK（子网掩码），GATEWAY(网关)后解决。


## 设置 {#设置}

1.  在其他电脑浏览器访问启动Unraid机器的ip，进入设置页面。

To Be Continued.