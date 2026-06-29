#!/bin/bash
# 更新 nas-os-website 到最新版本
# 用法: ./update-version.sh <旧版本> <新版本>
# 例如: ./update-version.sh v3.1.0 v3.2.0

cd ~/projects/nas-os-website

OLD_VERSION="${1:-v2.620.0}"
NEW_VERSION="${2:-v3.1.0}"

# 备份原文件
cp index.html index.html.bak

# 更新所有版本号引用
sed -i "s|${OLD_VERSION}|${NEW_VERSION}|g" index.html

# 更新 meta description 中的版本号
sed -i "s|NAS-OS ${OLD_VERSION}|NAS-OS ${NEW_VERSION}|g" index.html

# 更新下载链接
sed -i "s|releases/download/${OLD_VERSION}/|releases/download/${NEW_VERSION}/|g" index.html

# 更新 Docker pull 命令
sed -i "s|ghcr.io/crazyqin/nas-os:${OLD_VERSION}|ghcr.io/crazyqin/nas-os:${NEW_VERSION}|g" index.html

echo "版本号已从 ${OLD_VERSION} 更新为 ${NEW_VERSION}"
echo "需要手动更新 meta description 中的新功能列表"
