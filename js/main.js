const root = document.documentElement;
const header = document.querySelector('.site-header');
const toggle = document.querySelector('[data-theme-toggle]');

const dictionary = {
  zh: {
    brandAria: 'NAS-OS 首页',
    navAria: '主导航',
    themeAria: '切换深浅色',
    navFeatures: '亮点',
    navExperience: '体验',
    navInstall: '安装',
    heroEyebrow: 'Private cloud, beautifully simple',
    heroTitle: '精致私有云。',
    heroText: 'NAS-OS v3.14.0 聚焦备份健康顾问：终端保护率、备份就绪评分、恢复闭环建议，让数据韧性一目了然。',
    download: '免费下载',
    start: '5 分钟开始',
    notesAria: '产品特点',
    noteGo: 'v3.14.0',
    previewAria: 'NAS-OS 产品预览',
    healthy: 'Healthy',
    backup: '备份',
    synced: '已同步',
    snapshot: '快照',
    snapshotsCount: '24 个',
    containers: '容器',
    runningCount: '8 运行',
    alerts: '告警',
    zeroItems: '0 项',
    proofAria: '项目数据',
    proofDeploy: '快速部署',
    proofProtocols: '内部模块',
    proofEntry: '测试文件',
    proofOpen: '开放自托管',
    featuresTitle: '只保留真正常用的能力。',
    featuresText: '不是把功能写满屏幕，而是把每天会用的事情做顺手。',
    f1Title: '文件与共享',
    f1Text: 'SMB、NFS、WebDAV、FTP/SFTP 与 WebShare，多端访问，外链可撤销。',
    f2Title: '备份与快照',
    f2Text: '定时备份、版本保留、快照回滚、保护率评分与恢复演练，让数据韧性可衡量。',
    f3Title: '搜索与媒体',
    f3Text: '本地索引覆盖率、照片视频筛选、文件洞察与媒体整理建议。',
    f4Title: 'Docker 应用',
    f4Text: '常用服务一键部署，容器状态、日志、更新集中管理。',
    f5Title: '安全与权限',
    f5Text: 'RBAC、双因素认证、外链 passkey、分享审计与快照保护。',
    f6Title: '健康与监控',
    f6Text: '磁盘、温度、容量、网络与服务状态，一眼看懂。',
    detailsTitle: '精致感来自细节。',
    detailsText: '界面克制、文案简短、状态明确。用户不需要读说明书，也知道下一步该做什么。',
    d1Key: '轻',
    d1Text: '静态官网无框架依赖，加载快，维护成本低。',
    d2Key: '稳',
    d2Text: '核心入口不绕路：下载、安装、文档、GitHub。',
    d3Key: '美',
    d3Text: '柔和渐变、微交互、卡片层级、深浅色适配。',
    d4Key: '准',
    d4Text: '减少夸张口号，聚焦 NAS 用户真正关心的问题。',
    installTitle: '三步启动 NAS-OS',
    s1Title: '下载镜像',
    s1Text: '从 GitHub Releases 获取适合设备架构的版本。',
    s2Title: '启动服务',
    s2Text: '使用二进制或 Docker 部署，浏览器打开管理界面。',
    s3Title: '创建共享',
    s3Text: '添加磁盘、设置用户权限，开始同步文件与照片。',
    latest: '查看最新版本',
    faqTitle: '常见问题',
    q1: 'NAS-OS 适合谁？',
    a1: '适合想把迷你主机、旧电脑、家用服务器变成私有云的个人、家庭和小团队。',
    q2: '一定要很高配置吗？',
    a2: '不需要。轻量部署是核心目标，普通 x86 或 ARM64 设备即可起步。',
    q3: '和群晖/TrueNAS 有什么区别？',
    a3: 'NAS-OS 更强调开放、轻量、可折腾，同时把常用 NAS 能力收敛到更简单的体验里。',
    ctaTitle: '从一块硬盘开始，拥有自己的云。',
    github: '去 GitHub',
    release: '下载 Release',
    footer: 'Made for private clouds with care.'
  },
  en: {
    brandAria: 'NAS-OS home',
    navAria: 'Primary navigation',
    themeAria: 'Toggle color theme',
    navFeatures: 'Features',
    navExperience: 'Experience',
    navInstall: 'Install',
    heroEyebrow: 'Private cloud, beautifully simple',
    heroTitle: 'A refined private cloud.',
    heroText: 'NAS-OS v3.14.0 adds a backup health advisor with protection rates, readiness scores, and recovery loop guidance in one lightweight interface.',
    download: 'Free download',
    start: 'Start in 5 minutes',
    notesAria: 'Product highlights',
    noteGo: 'v3.14.0',
    previewAria: 'NAS-OS product preview',
    healthy: 'Healthy',
    backup: 'Backup',
    synced: 'Synced',
    snapshot: 'Snapshots',
    snapshotsCount: '24 items',
    containers: 'Containers',
    runningCount: '8 running',
    alerts: 'Alerts',
    zeroItems: '0 items',
    proofAria: 'Project stats',
    proofDeploy: 'Quick setup',
    proofProtocols: 'Internal modules',
    proofEntry: 'Test files',
    proofOpen: 'Open self-hosting',
    featuresTitle: 'Only the essentials, done well.',
    featuresText: 'Not a wall of features — just the everyday NAS workflows made smooth.',
    f1Title: 'Files & sharing',
    f1Text: 'SMB, NFS, WebDAV, FTP/SFTP, and WebShare with multi-device access and revocable links.',
    f2Title: 'Backup & snapshots',
    f2Text: 'Scheduled backups, version retention, snapshot rollback, protection-rate scoring, and recovery drills.',
    f3Title: 'Search & media',
    f3Text: 'Local index coverage, photo/video filters, file insights, and media organization guidance.',
    f4Title: 'Docker apps',
    f4Text: 'Deploy everyday services in one click, then manage status, logs, and updates centrally.',
    f5Title: 'Security & access',
    f5Text: 'RBAC, two-factor auth, link passkeys, sharing audit trails, and snapshot protection.',
    f6Title: 'Health & monitoring',
    f6Text: 'Disk, temperature, capacity, network, and services — readable at a glance.',
    detailsTitle: 'Refinement lives in the details.',
    detailsText: 'Calm UI, short copy, and clear states. People should know what to do without reading a manual.',
    d1Key: 'Lite',
    d1Text: 'Static, dependency-light website. Fast to load and easy to maintain.',
    d2Key: 'Steady',
    d2Text: 'Direct paths to download, install, docs, and GitHub.',
    d3Key: 'Polished',
    d3Text: 'Soft gradients, micro-interactions, layered cards, and adaptive themes.',
    d4Key: 'Focused',
    d4Text: 'Less hype, more of what NAS users actually care about.',
    installTitle: 'Start NAS-OS in three steps',
    s1Title: 'Download',
    s1Text: 'Pick the right build for your device from GitHub Releases.',
    s2Title: 'Run',
    s2Text: 'Start with a binary or Docker, then open the browser dashboard.',
    s3Title: 'Share',
    s3Text: 'Add disks, set users and permissions, then sync files and photos.',
    latest: 'View latest release',
    faqTitle: 'Common questions',
    q1: 'Who is NAS-OS for?',
    a1: 'People, families, and small teams turning a mini PC, old computer, or home server into a private cloud.',
    q2: 'Do I need powerful hardware?',
    a2: 'No. Lightweight deployment is a core goal; ordinary x86 or ARM64 devices are enough to start.',
    q3: 'How is it different from Synology or TrueNAS?',
    a3: 'NAS-OS is more open, lightweight, and hackable, while keeping common NAS workflows simpler.',
    ctaTitle: 'Start with one drive. Own your cloud.',
    github: 'Open GitHub',
    release: 'Download release',
    footer: 'Made for private clouds with care.'
  }
};

function detectLanguage() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get('lang');
  if (requested && requested.toLowerCase().startsWith('en')) return 'en';
  if (requested && requested.toLowerCase().startsWith('zh')) return 'zh';

  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  return languages.some((lang) => String(lang).toLowerCase().startsWith('zh')) ? 'zh' : 'en';
}

function applyLanguage(lang) {
  const pack = dictionary[lang] || dictionary.en;
  root.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.title = lang === 'zh' ? 'NAS-OS｜小而美的私有云系统' : 'NAS-OS | A refined private cloud';
  document.querySelector('meta[name="description"]')?.setAttribute(
    'content',
    lang === 'zh'
      ? 'NAS-OS 是一个轻量、精致、可自托管的私有云与 NAS 系统。5 分钟部署，覆盖文件共享、备份、相册、Docker 应用、权限、安全与监控。'
      : 'NAS-OS is a lightweight, refined, self-hosted private cloud and NAS system for files, backups, photos, Docker apps, access control, security, and monitoring.'
  );

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const value = pack[node.dataset.i18n];
    if (value) node.textContent = value;
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((node) => {
    node.dataset.i18nAttr.split(',').forEach((pair) => {
      const [attr, key] = pair.split(':').map((item) => item.trim());
      const value = pack[key];
      if (attr && value) node.setAttribute(attr, value);
    });
  });
}

const storedTheme = localStorage.getItem('nas-os-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
setTheme(initialTheme);
applyLanguage(detectLanguage());

function setTheme(theme) {
  root.dataset.theme = theme;
  if (toggle) toggle.textContent = theme === 'dark' ? '☀' : '☾';
  localStorage.setItem('nas-os-theme', theme);
}

toggle?.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

const elevateHeader = () => {
  header?.setAttribute('data-elevated', window.scrollY > 12 ? 'true' : 'false');
};
elevateHeader();
window.addEventListener('scroll', elevateHeader, { passive: true });

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const offset = headerHeight + 30;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    history.pushState(null, '', id);
  });
});

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 35, 180)}ms`;
  observer.observe(item);
});

console.log('NAS-OS Website refined ✨');
