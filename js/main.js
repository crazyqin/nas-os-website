// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// 动画效果
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察所有卡片元素
document.querySelectorAll('.feature-card, .app-card, .download-card, .sponsor-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// 统计数字动画
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const text = stat.textContent;
        if (text.includes('v')) return; // 版本号不动画
        
        const num = parseInt(text.replace(/[^0-9]/g, ''));
        if (!num) return;
        
        let current = 0;
        const increment = num / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= num) {
                stat.textContent = text;
                clearInterval(timer);
            } else {
                if (text.includes('k')) {
                    stat.textContent = (current / 1000).toFixed(1) + 'k+';
                } else {
                    stat.textContent = Math.floor(current) + '+';
                }
            }
        }, 30);
    });
}

// 当统计区域可见时触发动画
const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateStats();
            statsObserver.unobserve(statsSection);
        }
    });
    statsObserver.observe(statsSection);
}

console.log('NAS-OS Website Loaded 🚀');
