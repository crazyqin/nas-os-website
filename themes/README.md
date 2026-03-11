# 🎨 NAS OS 主题系统

完整的主题定制系统，包含主题引擎、预置主题包、主题市场和自定义编辑器。

## 📁 目录结构

```
themes/
├── engine/              # 主题引擎
│   ├── theme-engine.js      # 核心引擎（CSS 变量管理、主题切换）
│   └── theme-variables.css  # 变量模板
├── packages/            # 预置主题包
│   ├── default.json         # 默认蓝
│   ├── dark-mode.json       # 暗夜黑
│   ├── forest-green.json    # 森林绿
│   ├── sunset-orange.json   # 日落橙
│   ├── ocean-blue.json      # 海洋蓝
│   └── sakura-pink.json     # 樱花粉
├── market/              # 主题市场
│   └── theme-market.html    # 主题浏览和应用页面
└── editor/              # 主题编辑器
    └── theme-editor.html    # 自定义主题创建工具
```

## 🚀 功能特性

### 1. 主题引擎
- ✅ CSS 变量管理
- ✅ 主题切换与持久化（localStorage）
- ✅ 主题注册与加载
- ✅ 实时预览
- ✅ 主题导入/导出

### 2. 预置主题包（6 个）
| 主题 | 预览 | 说明 |
|------|------|------|
| 默认蓝 | 🔵 | 清爽专业的默认蓝色主题 |
| 暗夜黑 | 🌙 | 护眼舒适的深色模式 |
| 森林绿 | 🌲 | 自然清新的绿色主题 |
| 日落橙 | 🌅 | 温暖活力的橙色主题 |
| 海洋蓝 | 🌊 | 深邃宁静的海洋主题 |
| 樱花粉 | 🌸 | 浪漫柔和的粉色主题 |

### 3. 主题市场
- 浏览所有可用主题
- 实时预览主题效果
- 一键应用主题
- 显示当前使用主题

### 4. 自定义主题编辑器
- 可视化颜色选择器
- 实时预览效果
- 保存自定义主题
- 导出主题配置文件

## 💡 使用方法

### 在页面中引入主题引擎

```html
<link rel="stylesheet" href="themes/engine/theme-variables.css">
<script src="themes/engine/theme-engine.js"></script>
```

### 加载主题包

```javascript
async function loadThemes() {
    const themes = ['default.json', 'dark-mode.json'];
    for (const file of themes) {
        const response = await fetch(`themes/packages/${file}`);
        const theme = await response.json();
        window.ThemeEngine.registerTheme(theme.name, {
            variables: theme.variables,
            displayName: theme.displayName
        });
    }
}
```

### 切换主题

```javascript
// 应用主题
window.ThemeEngine.applyTheme('dark-mode');

// 切换下一个主题
window.ThemeEngine.toggleTheme();

// 获取当前主题
const current = window.ThemeEngine.getCurrentTheme();

// 重置为默认
window.ThemeEngine.resetToDefault();
```

### 创建自定义主题

1. 访问 `themes/editor/theme-editor.html`
2. 调整颜色选择器
3. 点击"保存主题"
4. 输入主题名称
5. 主题将保存到 localStorage 并自动应用

### 导出/导入主题

```javascript
// 导出主题
const themeJson = window.ThemeEngine.exportTheme('my-theme');

// 导入主题
const success = window.ThemeEngine.importTheme(themeJsonString);
```

## 📦 主题包格式

```json
{
  "name": "theme-name",
  "displayName": "显示名称",
  "description": "主题描述",
  "author": "作者",
  "version": "1.0.0",
  "preview": "🎨",
  "variables": {
    "--primary-color": "#3b82f6",
    "--bg-color": "#ffffff",
    "--text-color": "#1f2937"
  }
}
```

## 🎯 CSS 变量列表

### 主色调
- `--primary-color`: 主要颜色
- `--primary-hover`: 悬停颜色
- `--primary-light`: 浅色变体

### 次色调
- `--secondary-color`: 次要颜色
- `--secondary-hover`: 悬停颜色

### 背景色
- `--bg-color`: 主背景
- `--bg-secondary`: 次要背景
- `--bg-tertiary`: 第三背景

### 文字颜色
- `--text-color`: 主要文字
- `--text-light`: 次要文字
- `--text-muted`: 弱化文字

### 边框
- `--border-color`: 边框颜色
- `--border-light`: 浅色边框

### 状态色
- `--success-color`: 成功
- `--warning-color`: 警告
- `--error-color`: 错误

## 🔧 扩展主题系统

### 添加新主题包

1. 在 `themes/packages/` 创建新的 JSON 文件
2. 按照主题包格式定义变量
3. 在市场页面的 `themeFiles` 数组中添加文件名

### 自定义主题引擎

编辑 `themes/engine/theme-engine.js` 添加新功能：
- 主题自动切换（根据时间）
- 主题同步（跨设备）
- 主题评分和评论

## 📝 注意事项

- 主题选择保存在浏览器的 localStorage
- 自定义主题仅在当前浏览器可用
- 导出主题可分享给其他用户
- 暗色模式需要配合 `data-theme="dark"` 属性使用

## 🎨 最佳实践

1. **对比度**: 确保文字和背景有足够对比度（WCAG AA 标准）
2. **一致性**: 保持主色调在整个界面中的一致性
3. **可访问性**: 不要仅依赖颜色传达信息
4. **性能**: 避免过多的 CSS 变量更新

---

**版本**: 1.0.0  
**作者**: NAS OS Team  
**协议**: MIT
