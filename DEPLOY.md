# NAS-OS 官网部署指南

## 网站文件结构

```
nas-os-website/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
└── js/
    └── main.js         # JavaScript 交互
```

## 部署方式

### 方式一：Vercel（推荐）⭐

1. **安装 Vercel CLI**
```bash
npm install -g vercel
```

2. **登录 Vercel**
```bash
vercel login
```

3. **部署**
```bash
cd nas-os-website
vercel --prod
```

4. **配置域名**
- 在 Vercel Dashboard 添加 nas-os.dev 域名
- 配置 DNS:
  - Type: A
  - Name: @
  - Value: 76.76.21.21 (Vercel IP)
  - Type: CNAME
  - Name: www
  - Value: cname.vercel-dns.com

### 方式二：Netlify

1. **安装 Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **登录并部署**
```bash
cd nas-os-website
netlify login
netlify deploy --prod
```

3. **配置域名**
- 在 Netlify Dashboard 添加 nas-os.dev
- 配置 DNS 指向 Netlify

### 方式三：GitHub Pages

1. **创建 gh-pages 分支**
```bash
cd nas-os-website
git init
git add .
git commit -m "Deploy website"
git push origin HEAD:gh-pages --force
```

2. **配置 GitHub Pages**
- 访问 https://github.com/crazyqin/nas-os/settings/pages
- Source 选择 gh-pages 分支
- 自定义域名填写 nas-os.dev

3. **配置 DNS**
- 添加 CNAME 记录指向 crazyqin.github.io

### 方式四：Cloudflare Pages

1. **连接 GitHub 仓库**
- 访问 https://pages.cloudflare.com
- 连接 nas-os 仓库
- 设置构建目录为 nas-os-website

2. **配置域名**
- 在 Cloudflare 添加 nas-os.dev
- 自动 SSL 证书

## DNS 配置（以阿里云为例）

| 主机记录 | 记录类型 | 记录值 | TTL |
|---------|---------|--------|-----|
| @ | A | 76.76.21.21 | 10 分钟 |
| www | CNAME | cname.vercel-dns.com | 10 分钟 |

## SSL 证书

所有部署平台都提供免费的 Let's Encrypt SSL 证书，自动续期。

## 验证部署

访问以下 URL 验证：
- https://nas-os.dev
- https://www.nas-os.dev

## 后续更新

```bash
# 修改网站文件后
cd nas-os-website
git add .
git commit -m "Update website"
git push

# Vercel 自动重新部署
# 或其他平台自动触发构建
```
