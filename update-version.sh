#!/bin/bash
# 更新 nas-os-website 到最新版本

cd ~/projects/nas-os-website

# 备份原文件
cp index.html index.html.bak

# 更新版本号 v2.599.0 -> v2.604.0
sed -i 's/NAS-OS v2.599.0/NAS-OS v2.604.0/g' index.html

# 更新 meta description - 添加新版本功能
# 先找到当前 description 的结束位置
# 新增功能列表 (v2.600.0 - v2.604.0):
# - v2.600.0: WebShare浏览器共享、勒索防护、竞品调研更新
# - v2.601.0: 系统状态API
# - v2.602.0: 系统健康诊断、能源管理、智能家居中枢
# - v2.603.0: MCP服务器集成、事件总线、AI工作流引擎
# - v2.604.0: 容器安全卫士、智能磁盘AI、远程访问

echo "版本号已更新为 v2.604.0"
echo "需要手动更新 meta description 中的功能列表"
