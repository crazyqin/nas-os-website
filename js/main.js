const root = document.documentElement;
const header = document.querySelector('.site-header');
const toggle = document.querySelector('[data-theme-toggle]');
const langToggle = document.querySelector('[data-lang-toggle]');

const dictionary = {
  zh: {
    brandAria: 'NAS-OS 首页',
    navAria: '主导航',
    themeAria: '切换深浅色',
    langAria: '切换为英文',
    navFeatures: '亮点',
    navArch: '架构',
    navInstall: '安装',
    navFaq: '常见问题',
    heroEyebrow: '精致、轻量、可自托管',
    heroTitle: '精致私有云。',
    heroText: 'NAS-OS v3.24.3：平台核心五模块（身份、存储、网络、共享、系统）开箱即用；容器、相册、AI、备份等通过套件与应用中心按需开启。分层清晰、运行更诚实、安全默认更稳。',
    download: '免费下载',
    start: '5 分钟开始',
    notesAria: '产品特点',
    noteGo: 'v3.24.3',
    noteCoreFirst: '核心优先',
    notePackages: '按需开启套件',
    noteArch: '支持 AMD64 / ARM64',
    previewAria: 'NAS-OS 产品预览',
    dashStorage: '存储',
    healthy: '健康',
    coreLabel: '核心',
    coreCount: '5 模块',
    snapshot: '快照',
    snapshotsCount: '按卷管理',
    shares: '共享',
    sharesStatus: 'SMB · NFS',
    alerts: '告警',
    zeroItems: '0 项',
    proofAria: '项目数据',
    proofCore: '核心模块',
    proofExt: '官方扩展',
    proofEntry: '测试文件',
    proofOpenLabel: '开源',
    proofOpen: '可自托管',
    eyebrowFeatures: '核心亮点',
    featuresTitle: '默认只开真正核心的能力。',
    featuresText: '不是把功能写满屏幕。默认平台核心就能管盘、共享、用户与健康；其余能力在应用中心或配置里按需打开。',
    f1Title: '存储与卷',
    f1Text: 'Btrfs 卷、子卷与快照，统一存储接口，管理界面与后端契约一致。',
    f2Title: '文件共享',
    f2Text: 'SMB 与 NFS 为默认共享能力；WebDAV、FTP、SFTP 等可在套件中按需启用。',
    f3Title: '身份与安全',
    f3Text: '用户与权限管理、首次登录强制改密、生产环境跨站防护、默认仅本机监听，安全默认更稳。',
    f4Title: '健康检查',
    f4Text: '系统健康接口汇总各核心模块真实状态，任一模块异常即判定为不健康。',
    f5Title: '套件与应用中心',
    f5Text: '容器、虚拟机、相册、AI、备份等：在配置里声明推荐套件与启用列表，或直接在管理界面应用中心操作。',
    f6Title: '扩展、社区与实验区',
    f6Text: '7 个官方扩展按启用列表加载；社区套件目录可放第三方能力；实验代码仅保留在源码中，默认不进入运行热路径。',
    eyebrowArch: '架构',
    detailsTitle: '运行时诚实，分层清晰。',
    detailsText: '平台核心始终在线；套件经配置与宿主接口按需挂载。仓库里有的能力，不等于默认全开。旧版 modules 配置仍兼容读取。',
    d1Key: '平台核心',
    d1Text: '身份 · 存储 · 网络 · 共享 · 系统 — 始终启动。',
    d2Key: '可选套件',
    d2Text: '通过推荐套件与启用列表，打开产品能力与官方扩展。',
    d3Key: '应用中心',
    d3Text: '在管理界面安装、启用、停用套件；配置与运行状态保持一致。',
    d4Key: '实验专区',
    d4Text: '实验与重复实现仅保留在源码中，默认不加载。',
    eyebrowInstall: '快速开始',
    installTitle: '三步启动 NAS-OS',
    s1Title: '下载',
    s1Text: '从 GitHub 发行页获取 v3.24.3（或最新版）对应设备架构的版本。',
    s2Title: '启动服务',
    s2Text: '使用二进制或容器部署；默认监听本机，浏览器打开管理界面即可。',
    s3Title: '创建共享',
    s3Text: '添加存储、设置用户（首次请修改初始管理员密码），开启 SMB / NFS 共享。',
    latest: '查看 v3.24.3',
    eyebrowFaq: '常见问题',
    faqTitle: '你可能想了解这些',
    q1: 'NAS-OS 适合谁？',
    a1: '适合想把迷你主机、旧电脑、家用服务器变成私有云的个人、家庭和小团队。',
    q2: '默认会装很多功能吗？',
    a2: '不会。默认只启用平台核心（用户、存储、网络、SMB/NFS、系统健康）。容器、相册、AI、备份等请在配置或管理界面应用中心按需开启。',
    q3: '和群晖 / TrueNAS 有什么区别？',
    a3: 'NAS-OS 更强调开源、轻量、可自托管；分层诚实（平台核心 / 套件 / 宿主接口 / 实验区），本地 AI、一次写入等差异化能力按需启用，而非默认全开。',
    q4: '最新版本是什么？',
    a4: '当前官网同步版本为 v3.24.3 稳定版。详见 GitHub 发行页与仓库文档中的默认交付面、套件运维说明。',
    eyebrowReady: '准备好了吗？',
    ctaTitle: '从一块硬盘开始，拥有自己的云。',
    github: '访问 GitHub',
    release: '下载 v3.24.3',
    footerText: '用心做私有云。'
  },
  en: {
    brandAria: 'NAS-OS home',
    navAria: 'Primary navigation',
    themeAria: 'Toggle color theme',
    langAria: 'Switch to Chinese',
    navFeatures: 'Features',
    navArch: 'Architecture',
    navInstall: 'Install',
    navFaq: 'FAQ',
    heroEyebrow: 'Private cloud, beautifully simple',
    heroTitle: 'A refined private cloud.',
    heroText: 'NAS-OS v3.24.3 ships an honest default surface: five platform core modules (identity, storage, network, sharing, system) out of the box. Containers, photos, AI, and backups stay opt-in via packages and the App Center. Clear tiers and safer defaults.',
    download: 'Free download',
    start: 'Start in 5 minutes',
    notesAria: 'Product highlights',
    noteGo: 'v3.24.3',
    noteCoreFirst: 'Core-first',
    notePackages: 'Packages on demand',
    noteArch: 'AMD64 / ARM64',
    previewAria: 'NAS-OS product preview',
    dashStorage: 'Storage',
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
    proofExt: 'Official extensions',
    proofEntry: 'Test files',
    proofOpenLabel: 'Open',
    proofOpen: 'Self-hostable',
    eyebrowFeatures: 'Core features',
    featuresTitle: 'Core by default. More when you need it.',
    featuresText: 'Not a wall of always-on features. Platform core covers disks, shares, users, and health — packages and the App Center load the rest on demand.',
    f1Title: 'Storage & volumes',
    f1Text: 'Btrfs volumes, subvolumes, and snapshots with a unified storage API aligned to the management UI.',
    f2Title: 'File sharing',
    f2Text: 'SMB and NFS ship by default. WebDAV, FTP, and SFTP stay on the package surface when you need them.',
    f3Title: 'Identity & security',
    f3Text: 'Users and access control, forced bootstrap password change, production CSRF protection, and localhost by default.',
    f4Title: 'Health checks',
    f4Text: 'The system health endpoint aggregates real core-module status — unhealthy when any core module fails.',
    f5Title: 'Packages & App Center',
    f5Text: 'Containers, VMs, photos, AI, backup: enable via recommended packages and the enabled list, or in the management App Center.',
    f6Title: 'Extensions, community & Lab',
    f6Text: 'Seven official extensions load from the enabled list; a community packages directory hosts third-party capability; Lab stays source-only off the default hot path.',
    eyebrowArch: 'Architecture',
    detailsTitle: 'Honest runtime. Clear tiers.',
    detailsText: 'Platform core is always on; the package surface mounts on demand via config and the host API. Shipped code does not mean always-on defaults. Legacy modules config still dual-reads for compatibility.',
    d1Key: 'Platform core',
    d1Text: 'Identity · storage · network · sharing · system — always on.',
    d2Key: 'Packages',
    d2Text: 'Recommended packages and the enabled list turn on product capability and official extensions.',
    d3Key: 'App Center',
    d3Text: 'Install, enable, and disable packages in the management UI; config and runtime stay consistent.',
    d4Key: 'Lab',
    d4Text: 'Experiments and duplicates stay in source only — not loaded by default.',
    eyebrowInstall: 'Quick start',
    installTitle: 'Start NAS-OS in three steps',
    s1Title: 'Download',
    s1Text: 'Get v3.24.3 (or latest) for your architecture from GitHub Releases.',
    s2Title: 'Run',
    s2Text: 'Start with a binary or container (listens on localhost by default), then open the management UI.',
    s3Title: 'Share',
    s3Text: 'Add storage, rotate the initial admin password, and enable SMB / NFS shares.',
    latest: 'View v3.24.3',
    eyebrowFaq: 'FAQ',
    faqTitle: 'Common questions',
    q1: 'Who is NAS-OS for?',
    a1: 'People, families, and small teams turning a mini PC, old computer, or home server into a private cloud.',
    q2: 'Is everything enabled by default?',
    a2: 'No. Default platform core is users, storage, network, SMB/NFS, and system health. Containers, photos, AI, and backups enable via config or the App Center.',
    q3: 'How is it different from Synology or TrueNAS?',
    a3: 'NAS-OS is open, lightweight, and self-hosted with honest tiers (platform core / packages / host API / Lab). Differentiated features like local AI or write-once are opt-in, not always-on.',
    q4: 'What is the latest version?',
    a4: 'This site tracks v3.24.3 stable. See GitHub Releases and the docs on default surface and package operations.',
    eyebrowReady: 'Ready?',
    ctaTitle: 'Start with one drive. Own your cloud.',
    github: 'Open GitHub',
    release: 'Download v3.24.3',
    footerText: 'Made for private clouds with care.'
  }
};

function detectLanguage() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get('lang');
  if (requested && requested.toLowerCase().startsWith('en')) return 'en';
  if (requested && requested.toLowerCase().startsWith('zh')) return 'zh';

  const stored = localStorage.getItem('nas-os-lang');
  if (stored === 'en' || stored === 'zh') return stored;

  // 默认中文：官网面向中国用户；浏览器明确为英文时再切英文
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const prefersEnglishOnly = languages.some((lang) => {
    const l = String(lang).toLowerCase();
    return l.startsWith('en');
  }) && !languages.some((lang) => String(lang).toLowerCase().startsWith('zh'));

  return prefersEnglishOnly ? 'en' : 'zh';
}

function applyLanguage(lang) {
  const pack = dictionary[lang] || dictionary.zh;
  root.lang = lang === 'zh' ? 'zh-CN' : 'en';
  localStorage.setItem('nas-os-lang', lang);

  document.title = lang === 'zh' ? 'NAS-OS｜小而美的私有云系统' : 'NAS-OS | A refined private cloud';
  document.querySelector('meta[name="description"]')?.setAttribute(
    'content',
    lang === 'zh'
      ? 'NAS-OS v3.24.3：默认开启平台核心五模块（身份、存储、网络、共享、系统），容器、相册、AI 等通过套件与应用中心按需启用。开源、轻量、可自托管的家用 NAS。'
      : 'NAS-OS v3.24.3: platform core by default (identity, storage, network, sharing, system). Opt-in packages and App Center for containers, photos, AI. Lightweight open-source home NAS.'
  );
  document.querySelector('meta[property="og:description"]')?.setAttribute(
    'content',
    lang === 'zh'
      ? 'v3.24.3 稳定版 — 平台核心默认交付，套件与应用中心按需扩展。把闲置硬件变成可靠的家庭与团队私有云。'
      : 'v3.24.3 Stable — platform core by default, packages and App Center on demand. Turn spare hardware into a private cloud.'
  );
  document.querySelector('meta[property="og:title"]')?.setAttribute(
    'content',
    lang === 'zh' ? 'NAS-OS｜小而美的私有云系统' : 'NAS-OS | A refined private cloud'
  );

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const value = pack[node.dataset.i18n];
    if (value != null) node.textContent = value;
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((node) => {
    node.dataset.i18nAttr.split(',').forEach((pair) => {
      const [attr, key] = pair.split(':').map((item) => item.trim());
      const value = pack[key];
      if (attr && value != null) node.setAttribute(attr, value);
    });
  });

  if (langToggle) {
    langToggle.textContent = lang === 'zh' ? 'EN' : '中文';
  }
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

langToggle?.addEventListener('click', () => {
  const next = root.lang.startsWith('zh') ? 'en' : 'zh';
  applyLanguage(next);
  const url = new URL(window.location.href);
  url.searchParams.set('lang', next);
  history.replaceState(null, '', url);
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
