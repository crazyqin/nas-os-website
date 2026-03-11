/**
 * 主题引擎核心
 * 功能：CSS 变量管理、主题切换、主题持久化
 */

class ThemeEngine {
    constructor() {
        this.currentTheme = 'default';
        this.themes = {};
        this.storageKey = 'nas-os-theme';
        this.init();
    }

    // 初始化主题引擎
    init() {
        // 从 localStorage 加载已保存的主题
        const savedTheme = localStorage.getItem(this.storageKey);
        if (savedTheme && this.themes[savedTheme]) {
            this.applyTheme(savedTheme);
        }
        
        // 监听主题切换事件
        window.addEventListener('theme-change', (e) => {
            this.applyTheme(e.detail.themeName);
        });
    }

    // 注册主题
    registerTheme(name, themeData) {
        this.themes[name] = themeData;
    }

    // 应用主题
    applyTheme(themeName) {
        const theme = this.themes[themeName];
        if (!theme) {
            console.warn(`主题 "${themeName}" 不存在`);
            return false;
        }

        const root = document.documentElement;
        
        // 设置 CSS 变量
        Object.entries(theme.variables).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });

        // 保存主题选择
        localStorage.setItem(this.storageKey, themeName);
        this.currentTheme = themeName;

        // 触发主题应用事件
        window.dispatchEvent(new CustomEvent('theme-applied', {
            detail: { themeName, theme }
        }));

        return true;
    }

    // 获取当前主题
    getCurrentTheme() {
        return this.currentTheme;
    }

    // 获取所有可用主题
    getAvailableThemes() {
        return Object.keys(this.themes);
    }

    // 获取主题详情
    getThemeInfo(themeName) {
        return this.themes[themeName] || null;
    }

    // 切换主题
    toggleTheme() {
        const themes = this.getAvailableThemes();
        const currentIndex = themes.indexOf(this.currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        this.applyTheme(themes[nextIndex]);
    }

    // 重置为默认主题
    resetToDefault() {
        this.applyTheme('default');
    }

    // 导出主题配置
    exportTheme(themeName) {
        const theme = this.themes[themeName];
        if (!theme) return null;
        
        return JSON.stringify(theme, null, 2);
    }

    // 导入主题配置
    importTheme(themeData) {
        try {
            const theme = JSON.parse(themeData);
            if (!theme.name || !theme.variables) {
                throw new Error('无效的主题格式');
            }
            this.registerTheme(theme.name, theme);
            return true;
        } catch (e) {
            console.error('导入主题失败:', e);
            return false;
        }
    }
}

// 创建全局实例
window.ThemeEngine = new ThemeEngine();
