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
    navArch: '理念',
    navInstall: '安装',
    navFaq: '常见问题',
    heroEyebrow: '轻量、好用、数据在自己手里',
    heroTitle: '把闲置电脑变成家里的云。',
    heroText: 'NAS-OS 帮你把旧电脑或迷你主机变成家里的私有云。装好就能管文件、管账号、和家人共享；相册、备份、容器等，需要时再开。开源免费，不臃肿，默认更注重安全。',
    download: '免费下载',
    start: '三步开始',
    notesAria: '产品特点',
    noteGo: 'v3.24.4',
    noteCoreFirst: '装好就能用',
    notePackages: '用多少开多少',
    noteArch: '家用电脑可装',
    previewAria: 'NAS-OS 产品预览',
    dashStorage: '存储',
    healthy: '运行正常',
    coreLabel: '基础',
    coreCount: '开箱可用',
    snapshot: '快照',
    snapshotsCount: '随时回退',
    shares: '共享',
    sharesStatus: '电脑手机都能用',
    proofAria: '项目数据',
    proofCore: '基础能力',
    proofExt: '可选扩展',
    proofEntry: '自动化测试',
    proofOpenLabel: '开源',
    proofOpen: '自己部署',
    eyebrowFeatures: '你能得到什么',
    featuresTitle: '先把日常用得到的做好。',
    featuresText: '不堆一屏幕用不上的功能。装好就能管硬盘、共享文件、管理家人账号；相册、备份等需要时再打开。',
    f1Title: '硬盘与快照',
    f1Text: '看清磁盘还剩多少空间；重要文件夹可做快照，误删、改错了还能找回。',
    f2Title: '全家共享文件',
    f2Text: '电脑和手机都能打开家里的文件。装好就能用常见共享方式，更多玩法以后再加。',
    f3Title: '账号与权限',
    f3Text: '给家人分开账号，谁能看、谁能改更清楚；第一次登录会提醒你改密码。',
    f4Title: '一眼看懂状态',
    f4Text: '系统是否正常，页面上一眼能看出来，不用猜「是不是又挂了」。',
    f5Title: '应用中心',
    f5Text: '应用中心里点几下就能开关扩展功能——相册、备份、容器、本地 AI，用到再开，不用的先别装。',
    f6Title: '慢慢扩展就好',
    f6Text: '默认安全加固（MFA、CSRF 防护、不可变存储），还有本地 AI、以文搜图等差异化能力等你探索。',
    eyebrowArch: '产品理念',
    detailsTitle: '用得到的再打开，不堆一堆用不上的。',
    detailsText: '先把文件、共享、账号做好；相册、备份、容器等你需要时再开。代码仓库里有的能力，不等于一安装就全塞给你。',
    d1Key: '基础能力',
    d1Text: '账号、硬盘、网络、文件共享、系统状态——装好就能用。',
    d2Key: '可选功能',
    d2Text: '相册、备份、容器等，真有需要再打开。',
    d3Key: '应用中心',
    d3Text: '网页里点几下就能开关扩展，不必去改一堆配置文件。',
    d4Key: '差异化能力',
    d4Text: 'WriteOnce 不可变存储、本地 LLM 服务、CLIP 以文搜图——仓库里已实现，需要时显式启用。',
    eyebrowInstall: '快速开始',
    installTitle: '三步开始用 NAS-OS',
    s1Title: '下载',
    s1Text: '打开 GitHub 下载页，选择 v3.24.4（或更新版本）和你电脑匹配的安装包。',
    s2Title: '启动',
    s2Text: '按说明启动服务，用浏览器打开管理页面。默认只在本机访问，更安全；需要时再开放给局域网。',
    s3Title: '共享文件',
    s3Text: '添加硬盘、创建用户（请立刻改初始密码），打开家庭共享，手机电脑就能用了。',
    latest: '查看 v3.24.4',
    eyebrowFaq: '常见问题',
    faqTitle: '你可能想了解这些',
    q1: 'NAS-OS 适合谁？',
    a1: '想把迷你主机、旧电脑或家里服务器变成「私有云」的个人、家庭和小团队——照片、影片、工作资料放在自己家里，而不是只能放在别人的云盘。',
    q2: '默认会装很多功能吗？',
    a2: '不会。默认只有最常用的：账号、存储、网络、文件共享和系统状态。相册、备份、容器等，想用时到应用中心打开即可。',
    q3: '和群晖、TrueNAS 有什么不同？',
    a3: 'NAS-OS 开源、可自己部署，更偏轻量和可控。功能默认不堆满，需要什么再加；适合喜欢简洁、愿意自己掌控数据的人。',
    q4: '最新版本是什么？',
    a4: '当前官网对应 v3.24.4 稳定版。安装包与更新说明见 GitHub 下载页。',
    eyebrowReady: '准备好了吗？',
    ctaTitle: '从一块硬盘开始，拥有自己的云。',
    github: '访问 GitHub',
    release: '下载 v3.24.4',
    footerText: '把数据留在自己家里。'
  },
  en: {
    brandAria: 'NAS-OS home',
    navAria: 'Primary navigation',
    themeAria: 'Toggle color theme',
    langAria: 'Switch to Chinese',
    navFeatures: 'Features',
    navArch: 'Ideas',
    navInstall: 'Install',
    navFaq: 'FAQ',
    heroEyebrow: 'Simple, light, data stays yours',
    heroTitle: 'A refined private cloud.',
    heroText: 'Turn a spare PC into a home private cloud. Manage files, accounts, and shares right away; open photos, backup, or containers only when you need them. Light, approachable, safer by default.',
    download: 'Free download',
    start: 'Start in 5 minutes',
    notesAria: 'Product highlights',
    noteGo: 'v3.24.4',
    noteCoreFirst: 'Travel light',
    notePackages: 'Enable what you use',
    noteArch: 'Works on common PCs',
    previewAria: 'NAS-OS product preview',
    dashStorage: 'Storage',
    healthy: 'All good',
    coreLabel: 'Basics',
    coreCount: 'Ready to use',
    snapshot: 'Snapshots',
    snapshotsCount: 'Undo mistakes',
    shares: 'Shares',
    sharesStatus: 'PC & phone',
    proofAria: 'Project stats',
    proofCore: 'Core capabilities',
    proofExt: 'Optional add-ons',
    proofEntry: 'Automated tests',
    proofOpenLabel: 'Open',
    proofOpen: 'Self-hosted',
    eyebrowFeatures: 'What you get',
    featuresTitle: 'Get the everyday stuff right first.',
    featuresText: 'No wall of unused features. Manage disks, share files, and family accounts out of the box; open photos and backup when you need them.',
    f1Title: 'Disks & restore points',
    f1Text: 'Manage storage space and take snapshots so you can recover after deletes or bad edits.',
    f2Title: 'File sharing',
    f2Text: 'Access home files from PC and phone. Common share methods work from day one; more options later if you want them.',
    f3Title: 'Accounts & safety',
    f3Text: 'Separate accounts and permissions for family. First login asks you to change the password; safer defaults out of the box.',
    f4Title: 'Status at a glance',
    f4Text: 'See if the system is healthy without guessing whether something is down.',
    f5Title: 'App Center',
    f5Text: 'Toggle extensions from the App Center — photos, backup, containers, local AI. Turn on what you need, skip what you don't.',
    f6Title: 'Expand without noise',
    f6Text: 'Hardened security by default (MFA, CSRF, immutable storage) plus local AI and image search when you're ready.',
    eyebrowArch: 'How we think',
    detailsTitle: 'Only open what you need.',
    detailsText: 'Start with files, shares, and accounts. Photos, backup, and containers wait until you want them. Shipping a feature in the repo does not mean it is dumped on you by default.',
    d1Key: 'The basics',
    d1Text: 'Accounts, disks, network, file shares, system status — ready after install.',
    d2Key: 'Add-ons',
    d2Text: 'Photos, backup, containers, and more — turn on when you need them.',
    d3Key: 'App Center',
    d3Text: 'Install and manage extras in the browser with a few clicks — no config maze.',
    d4Key: 'Edge Features',
    d4Text: 'WriteOnce immutable storage, local LLM, CLIP image search — built and available, enable explicitly when needed.',
    eyebrowInstall: 'Quick start',
    installTitle: 'Start NAS-OS in three steps',
    s1Title: 'Download',
    s1Text: 'Get v3.24.4 (or latest) for your device from the GitHub download page.',
    s2Title: 'Start',
    s2Text: 'Follow the steps to start the service, then open the admin page in your browser (localhost by default for safety).',
    s3Title: 'Share files',
    s3Text: 'Add storage, create users (change the initial password), and turn on home file sharing.',
    latest: 'View v3.24.4',
    eyebrowFaq: 'FAQ',
    faqTitle: 'Common questions',
    q1: 'Who is NAS-OS for?',
    a1: 'People, families, and small teams who want a mini PC, old computer, or home server as a private cloud — photos, videos, and work files at home.',
    q2: 'Is everything enabled by default?',
    a2: 'No. You get the everyday basics: accounts, storage, network, file sharing, and system status. Open photos, backup, or containers in the App Center when you need them.',
    q3: 'How is it different from Synology or TrueNAS?',
    a3: 'NAS-OS is open, lightweight, and self-hosted. Features stay off until you need them — for people who prefer simple and under control, not a crowded app store on day one.',
    q4: 'What is the latest version?',
    a4: 'This site tracks v3.24.4 stable. See the GitHub download page for packages and release notes.',
    eyebrowReady: 'Ready?',
    ctaTitle: 'Start with one drive. Own your cloud.',
    github: 'Open GitHub',
    release: 'Download v3.24.4',
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
      ? 'NAS-OS v3.24.4：把闲置电脑变成家里的私有云。装好就能管文件、共享和账号；相册、备份、容器等需要时再开。开源、轻量、自己掌控。'
      : 'NAS-OS v3.24.4: turn a spare PC into a home private cloud. Files, shares, and accounts ready out of the box; photos, backup, and containers when you need them.'
  );
  document.querySelector('meta[property="og:description"]')?.setAttribute(
    'content',
    lang === 'zh'
      ? 'v3.24.4 稳定版 — 开箱能用的家用私有云，功能按需开启。把闲置硬件变成可靠的家庭与团队存储。'
      : 'v3.24.4 Stable — a home private cloud that starts simple. Enable more only when you need it.'
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

console.log('NAS-OS Website v3.24.4');
