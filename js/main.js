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
    heroEyebrow: '精致、轻量、数据在自己手里',
    heroTitle: '精致私有云。',
    heroText: 'NAS-OS 帮你把闲置电脑变成家里的私有云。装好就能管理文件、账号和共享；相册、备份、容器等需要时再开。不臃肿、好上手、安全默认更稳妥。',
    download: '免费下载',
    start: '5 分钟开始',
    notesAria: '产品特点',
    noteGo: 'v3.24.3',
    noteCoreFirst: '轻装上阵',
    notePackages: '用多少开多少',
    noteArch: '常见电脑都可装',
    previewAria: 'NAS-OS 产品预览',
    dashStorage: '存储',
    healthy: '运行正常',
    coreLabel: '基础',
    coreCount: '开箱可用',
    snapshot: '快照',
    snapshotsCount: '随时回退',
    shares: '共享',
    sharesStatus: '电脑手机都能用',
    alerts: '告警',
    zeroItems: '0 项',
    proofAria: '项目数据',
    proofCore: '基础能力',
    proofExt: '可选扩展',
    proofEntry: '自动化测试',
    proofOpenLabel: '开源',
    proofOpen: '自己部署',
    eyebrowFeatures: '你能得到什么',
    featuresTitle: '先把日常用得到的做好。',
    featuresText: '不堆一屏幕用不上的功能。装好就能管硬盘、共享文件、管理家人账号；相册、备份等需要时再打开。',
    f1Title: '硬盘与备份点',
    f1Text: '管理硬盘空间，重要文件可做快照，误删或改坏了还能找回来。',
    f2Title: '文件共享',
    f2Text: '电脑、手机都能访问家里的文件；装好即可用常见共享方式，更多方式可后开。',
    f3Title: '账号与安全',
    f3Text: '家人分账号、分权限；首次登录会要求改密码，默认更注重安全。',
    f4Title: '状态一目了然',
    f4Text: '一眼看到系统是否正常，出问题能及时发现，不用猜「是不是挂了」。',
    f5Title: '应用中心',
    f5Text: '相册、备份、容器、AI 等按需开启。用得到的再装，不用的不占地方。',
    f6Title: '可扩展、不打扰',
    f6Text: '官方扩展和社区能力可以慢慢加；还在试验的功能默认不会跳出来烦你。',
    eyebrowArch: '产品理念',
    detailsTitle: '需要的才打开，不堆一堆用不上的。',
    detailsText: '装好先能管文件、共享和账号；相册、备份、容器等想用再开。仓库里有的功能，不等于一上来全部塞给你。',
    d1Key: '基础能力',
    d1Text: '账号、硬盘、网络、文件共享、系统状态 — 装好就能用。',
    d2Key: '可选功能',
    d2Text: '相册、备份、容器等，用得到的时候再打开。',
    d3Key: '应用中心',
    d3Text: '在网页里点几下，就能安装和管理扩展，不必改一堆配置。',
    d4Key: '试验功能',
    d4Text: '还在打磨的能力默认不出现，不影响你的日常使用。',
    eyebrowInstall: '快速开始',
    installTitle: '三步开始用 NAS-OS',
    s1Title: '下载',
    s1Text: '到 GitHub 下载页，选 v3.24.3（或最新版）和你设备匹配的版本。',
    s2Title: '启动',
    s2Text: '按说明启动服务，用浏览器打开管理页面即可（默认只在本机访问，更安全）。',
    s3Title: '共享文件',
    s3Text: '添加硬盘空间、建好用户（记得改初始密码），打开家庭文件共享。',
    latest: '查看 v3.24.3',
    eyebrowFaq: '常见问题',
    faqTitle: '你可能想了解这些',
    q1: 'NAS-OS 适合谁？',
    a1: '适合想把迷你主机、旧电脑、家用服务器变成私有云的个人、家庭和小团队——照片、影片、工作文件放在自己家里。',
    q2: '默认会装很多功能吗？',
    a2: '不会。默认只带日常最需要的：账号、存储、网络、文件共享和系统状态。相册、备份、容器等想用时在应用中心打开即可。',
    q3: '和群晖 / TrueNAS 有什么区别？',
    a3: 'NAS-OS 更强调开源、轻量、自己部署。功能不默认全开，需要什么再加；适合喜欢简洁、可控的人，而不是一上来塞满应用市场。',
    q4: '最新版本是什么？',
    a4: '官网当前对应 v3.24.3 稳定版。下载与更新说明见 GitHub 下载页。',
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
    navArch: 'Ideas',
    navInstall: 'Install',
    navFaq: 'FAQ',
    heroEyebrow: 'Simple, light, data stays yours',
    heroTitle: 'A refined private cloud.',
    heroText: 'Turn a spare PC into a home private cloud. Manage files, accounts, and shares right away; open photos, backup, or containers only when you need them. Light, approachable, safer by default.',
    download: 'Free download',
    start: 'Start in 5 minutes',
    notesAria: 'Product highlights',
    noteGo: 'v3.24.3',
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
    alerts: 'Alerts',
    zeroItems: '0 items',
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
    f5Text: 'Photos, backup, containers, AI — turn on only what you use so unused apps stay out of the way.',
    f6Title: 'Expand without noise',
    f6Text: 'Add official and community extras over time. Experimental bits stay off by default so daily use stays calm.',
    eyebrowArch: 'How we think',
    detailsTitle: 'Only open what you need.',
    detailsText: 'Start with files, shares, and accounts. Photos, backup, and containers wait until you want them. Shipping a feature in the repo does not mean it is dumped on you by default.',
    d1Key: 'The basics',
    d1Text: 'Accounts, disks, network, file shares, system status — ready after install.',
    d2Key: 'Add-ons',
    d2Text: 'Photos, backup, containers, and more — turn on when you need them.',
    d3Key: 'App Center',
    d3Text: 'Install and manage extras in the browser with a few clicks — no config maze.',
    d4Key: 'Experiments',
    d4Text: 'Work-in-progress features stay hidden so everyday use stays clean.',
    eyebrowInstall: 'Quick start',
    installTitle: 'Start NAS-OS in three steps',
    s1Title: 'Download',
    s1Text: 'Get v3.24.3 (or latest) for your device from the GitHub download page.',
    s2Title: 'Start',
    s2Text: 'Follow the steps to start the service, then open the admin page in your browser (localhost by default for safety).',
    s3Title: 'Share files',
    s3Text: 'Add storage, create users (change the initial password), and turn on home file sharing.',
    latest: 'View v3.24.3',
    eyebrowFaq: 'FAQ',
    faqTitle: 'Common questions',
    q1: 'Who is NAS-OS for?',
    a1: 'People, families, and small teams who want a mini PC, old computer, or home server as a private cloud — photos, videos, and work files at home.',
    q2: 'Is everything enabled by default?',
    a2: 'No. You get the everyday basics: accounts, storage, network, file sharing, and system status. Open photos, backup, or containers in the App Center when you need them.',
    q3: 'How is it different from Synology or TrueNAS?',
    a3: 'NAS-OS is open, lightweight, and self-hosted. Features stay off until you need them — for people who prefer simple and under control, not a crowded app store on day one.',
    q4: 'What is the latest version?',
    a4: 'This site tracks v3.24.3 stable. See the GitHub download page for packages and release notes.',
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
      ? 'NAS-OS v3.24.3：把闲置电脑变成家里的私有云。装好就能管文件、共享和账号；相册、备份、容器等需要时再开。开源、轻量、自己掌控。'
      : 'NAS-OS v3.24.3: turn a spare PC into a home private cloud. Files, shares, and accounts ready out of the box; photos, backup, and containers when you need them.'
  );
  document.querySelector('meta[property="og:description"]')?.setAttribute(
    'content',
    lang === 'zh'
      ? 'v3.24.3 稳定版 — 开箱能用的家用私有云，功能按需开启。把闲置硬件变成可靠的家庭与团队存储。'
      : 'v3.24.3 Stable — a home private cloud that starts simple. Enable more only when you need it.'
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
