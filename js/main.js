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

// 统计数字动画 - 社会证明区域
const socialProofSection = document.querySelector('.social-proof');
if (socialProofSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateStats();
            statsObserver.unobserve(socialProofSection);
        }
    });
    statsObserver.observe(socialProofSection);
}

function animateStats() {
    const stats = document.querySelectorAll('.proof-number');
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

console.log('NAS-OS Website Loaded 🚀');
