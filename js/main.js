const root = document.documentElement;
const header = document.querySelector('.site-header');
const toggle = document.querySelector('[data-theme-toggle]');

const dictionary = {
  zh: {
    brandAria: 'NAS-OS 首页',
    navAria: '主导航',
    themeAria: '切换深浅色',
    navFeatures: '亮点',
    navArch: '架构',
    navInstall: '安装',
    heroEyebrow: 'Private cloud, beautifully simple',
    heroTitle: '精致私有云。',
    heroText: 'NAS-OS v3.24.3：Platform Core 五模块（身份 / 存储 / 网络 / 共享 / 系统）开箱即用；Docker、相册、AI、备份等经 packages 与应用中心按需开启。分层清晰、运行时诚实、安全默认更稳。',
    download: '免费下载',
    start: '5 分钟开始',
    notesAria: '产品特点',
    noteGo: 'v3.24.3',
    previewAria: 'NAS-OS 产品预览',
    healthy: 'Healthy',
    coreLabel: 'Core',
    coreCount: '5 模块',
    snapshot: '快照',
    snapshotsCount: '按卷管理',
    shares: '共享',
    sharesStatus: 'SMB · NFS',
    alerts: '告警',
    zeroItems: '0 项',
    proofAria: '项目数据',
    proofCore: 'Core 模块',
    proofExt: 'HTTP 扩展',
    proofEntry: '测试文件',
    proofOpen: '开放自托管',
    featuresTitle: '默认只开真正核心的能力。',
    featuresText: '不是把功能写满屏幕。默认 Platform Core 开箱能管盘、共享、用户与健康；其余套件经 packages 与应用中心按需打开。',
    f1Title: '存储与卷',
    f1Text: 'btrfs 卷 / 子卷 / 快照，统一 API /api/v1/storage/*，WebUI 与后端契约一致。',
    f2Title: '文件共享',
    f2Text: 'SMB 与 NFS 为 Core 默认能力；WebDAV / FTP / SFTP 等可在套件面按需启用。',
    f3Title: '身份与安全',
    f3Text: '用户与权限、首次登录强制改密、生产 CSRF、默认监听本机，安全默认更稳。',
    f4Title: 'Core 健康探针',
    f4Text: '/api/v1/system/health 聚合 Core 模块真实 Health()，失败即 unhealthy。',
    f5Title: '套件与应用中心',
    f5Text: 'Docker、VM、相册、AI、备份等：用 packages.recommended_system / packages.enabled，或在 WebUI 应用中心启用。',
    f6Title: '扩展 · 社区 · Lab',
    f6Text: '7 个官方 HTTP 扩展按 packages.enabled 加载；community_dir 承载第三方套件；Lab 仅源码保留，不进默认 nasd 热路径。',
    detailsTitle: '运行时诚实，分层清晰。',
    detailsText: 'Platform Core 始终在线；套件面经 packages 与 Host SDK 按需挂载。',
    d1Key: 'Platform Core',
    d1Text: 'identity · storage · network · sharing · system — 始终启动。',
    d2Key: 'Packages',
    d2Text: 'packages.recommended_system / packages.enabled 启用推荐产品与 HTTP 扩展。',
    d3Key: 'App Center',
    d3Text: 'WebUI 应用中心装/启/停套件；SSOT 与配置、运行时一致。',
    d4Key: 'Lab',
    d4Text: '实验与重复实现仅源码保留，默认不 import、不加载。',
    installTitle: '三步启动 NAS-OS',
    s1Title: '下载镜像',
    s1Text: '从 GitHub Releases 获取 v3.24.3（或最新）适合设备架构的版本。',
    s2Title: '启动服务',
    s2Text: '二进制或 Docker 部署；默认监听 127.0.0.1，浏览器打开 /webui 管理界面。',
    s3Title: '创建共享',
    s3Text: '添加存储、设置用户（首次请修改 bootstrap 密码），开启 SMB/NFS 共享。',
    latest: '查看 v3.24.3',
    faqTitle: '常见问题',
    q1: 'NAS-OS 适合谁？',
    a1: '适合想把迷你主机、旧电脑、家用服务器变成私有云的个人、家庭和小团队。',
    q2: '默认会装很多功能吗？',
    a2: '不会。默认只启用 Platform Core（用户、存储、网络、SMB/NFS、系统健康）。Docker / 相册 / AI / 备份等经 packages 配置或 WebUI 应用中心按需开启。',
    q3: '和群晖/TrueNAS 有什么区别？',
    a3: 'NAS-OS 更强调开源、轻量、可自托管；分层诚实（Platform Core / Packages / Host SDK / Lab），差异化能力如本地 AI、WriteOnce 等按需启用，而非默认全开。',
    q4: '最新版本是什么？',
    a4: '当前官网同步版本为 v3.24.3 Stable。详见 GitHub Releases 与仓库 docs 中的默认交付面与 packages 运维说明。',
    ctaTitle: '从一块硬盘开始，拥有自己的云。',
    github: '去 GitHub',
    release: '下载 v3.24.3',
    footer: 'Made for private clouds with care.'
  },
  en: {
    brandAria: 'NAS-OS home',
    navAria: 'Primary navigation',
    themeAria: 'Toggle color theme',
    navFeatures: 'Features',
    navArch: 'Architecture',
    navInstall: 'Install',
    heroEyebrow: 'Private cloud, beautifully simple',
    heroTitle: 'A refined private cloud.',
    heroText: 'NAS-OS v3.24.3 ships an honest default surface: five Platform Core modules (identity, storage, network, sharing, system) out of the box. Docker, photos, AI, and backups stay opt-in via packages and the App Center. Clear tiers and safer defaults.',
    download: 'Free download',
    start: 'Start in 5 minutes',
    notesAria: 'Product highlights',
    noteGo: 'v3.24.3',
    previewAria: 'NAS-OS product preview',
    healthy: 'Healthy',
    coreLabel: 'Core',
    coreCount: '5 modules',
    snapshot: 'Snapshots',
    snapshotsCount: 'Per volume',
    shares: 'Shares',
    sharesStatus: 'SMB · NFS',
    alerts: 'Alerts',
    zeroItems: '0 items',
    proofAria: 'Project stats',
    proofCore: 'Core modules',
    proofExt: 'HTTP extensions',
    proofEntry: 'Test files',
    proofOpen: 'Open self-hosting',
    featuresTitle: 'Core by default. More when you need it.',
    featuresText: 'Not a wall of always-on features. Platform Core covers disks, shares, users, and health — packages and the App Center load the rest on demand.',
    f1Title: 'Storage & volumes',
    f1Text: 'btrfs volumes, subvolumes, and snapshots with a single /api/v1/storage/* contract aligned to the WebUI.',
    f2Title: 'File sharing',
    f2Text: 'SMB and NFS ship in Core. WebDAV, FTP, and SFTP stay on the package surface when you need them.',
    f3Title: 'Identity & security',
    f3Text: 'Users and access control, forced bootstrap password change, production CSRF, and 127.0.0.1 by default.',
    f4Title: 'Core health probes',
    f4Text: '/api/v1/system/health aggregates real Core Health() checks — unhealthy when any Core module fails.',
    f5Title: 'Packages & App Center',
    f5Text: 'Docker, VMs, photos, AI, backup: enable via packages.recommended_system / packages.enabled, or the WebUI App Center.',
    f6Title: 'Extensions · Community · Lab',
    f6Text: 'Seven official HTTP extensions load from packages.enabled; community_dir hosts third-party packages; Lab stays source-only off the default nasd hot path.',
    detailsTitle: 'Honest runtime. Clear tiers.',
    detailsText: 'Platform Core is always on; the package surface mounts on demand via packages and the Host SDK.',
    d1Key: 'Platform Core',
    d1Text: 'identity · storage · network · sharing · system — always on.',
    d2Key: 'Packages',
    d2Text: 'packages.recommended_system / packages.enabled turn on recommended products and HTTP extensions.',
    d3Key: 'App Center',
    d3Text: 'Install, enable, and disable packages in the WebUI; SSOT stays consistent with config and runtime.',
    d4Key: 'Lab',
    d4Text: 'Experiments and duplicates stay in source only — not imported by default.',
    installTitle: 'Start NAS-OS in three steps',
    s1Title: 'Download',
    s1Text: 'Get v3.24.3 (or latest) for your architecture from GitHub Releases.',
    s2Title: 'Run',
    s2Text: 'Start with a binary or Docker (listens on 127.0.0.1 by default), then open /webui.',
    s3Title: 'Share',
    s3Text: 'Add storage, rotate the bootstrap admin password, and enable SMB/NFS shares.',
    latest: 'View v3.24.3',
    faqTitle: 'Common questions',
    q1: 'Who is NAS-OS for?',
    a1: 'People, families, and small teams turning a mini PC, old computer, or home server into a private cloud.',
    q2: 'Is everything enabled by default?',
    a2: 'No. Default Platform Core is users, storage, network, SMB/NFS, and system health. Docker, photos, AI, and backups enable via packages config or the WebUI App Center.',
    q3: 'How is it different from Synology or TrueNAS?',
    a3: 'NAS-OS is open, lightweight, and self-hosted with honest tiers (Platform Core / Packages / Host SDK / Lab). Differentiated features like local AI or WriteOnce are opt-in, not always-on.',
    q4: 'What is the latest version?',
    a4: 'This site tracks v3.24.3 Stable. See GitHub Releases and the docs default-surface and packages ops guides.',
    ctaTitle: 'Start with one drive. Own your cloud.',
    github: 'Open GitHub',
    release: 'Download v3.24.3',
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
      ? 'NAS-OS v3.24.3：默认 Platform Core 五模块（身份/存储/网络/共享/系统），Docker、相册、AI 等经 packages.* 与应用中心按需开启。开源、轻量、可自托管的家用 NAS。'
      : 'NAS-OS v3.24.3: Platform Core default (identity, storage, network, sharing, system). Opt-in packages and App Center for Docker, photos, AI. Lightweight open-source home NAS.'
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

console.log('NAS-OS Website v3.24.3');
