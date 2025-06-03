// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const menuTabs = document.querySelectorAll('.menu-tab');
const menuCategories = document.querySelectorAll('.menu-category');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile nav when clicking on links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Menu Tab Switching
menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetCategory = tab.getAttribute('data-category');
        
        // Remove active class from all tabs and categories
        menuTabs.forEach(t => t.classList.remove('active'));
        menuCategories.forEach(cat => cat.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding category
        tab.classList.add('active');
        document.getElementById(targetCategory).classList.add('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(44, 24, 16, 0.98)';
    } else {
        navbar.style.background = 'rgba(44, 24, 16, 0.95)';
    }
});

// Intersection Observer for Animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.menu-item, .gallery-item, .contact-item, .feature');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Gallery Image Lightbox Effect
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(img => {
        img.addEventListener('click', () => {
            createLightbox(img.src, img.alt);
        });
        
        img.style.cursor = 'pointer';
    });
});

function createLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${src}" alt="${alt}">
            <button class="lightbox-close">&times;</button>
        </div>
    `;
    
    // Add lightbox styles
    const style = document.createElement('style');
    style.textContent = `
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        
        .lightbox img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            border-radius: 8px;
        }
        
        .lightbox-close {
            position: absolute;
            top: -10px;
            right: -10px;
            background: var(--secondary-color);
            color: var(--dark-color);
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            font-size: 1.5rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .lightbox-close:hover {
            background: var(--accent-color);
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(lightbox);
    
    // Close lightbox
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.className === 'lightbox-close') {
            lightbox.remove();
        }
    });
    
    // Close with Escape key
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            lightbox.remove();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

// Menu Item Hover Effects
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Loading Animation
document.addEventListener('DOMContentLoaded', () => {
    // Hide loading screen if exists
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 300);
        }, 1000);
    }
    
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Console welcome message
console.log(`
🥩 歡迎來到饗家牛排館 🥩
=====================================
頂級牛排美食體驗
網站功能：
- 響應式設計
- 互動式菜單
- 電話訂位服務  
- 圖片燈箱效果
- 流暢動畫效果

感謝您的光臨！
=====================================
`);

// Performance monitoring
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`⚡ 網站載入完成，耗時: ${Math.round(loadTime)}ms`);
});

// Error handling for uncaught errors
window.addEventListener('error', (e) => {
    console.error('網站發生錯誤:', e.error);
});

// Print functionality (bonus feature)
function printMenu() {
    window.print();
}

// 促銷彈出窗口功能
document.addEventListener('DOMContentLoaded', () => {
    showPromotionPopup();
});

function showPromotionPopup() {
    const currentDate = new Date();
    const endDate = new Date('2025-07-03');
    
    // 檢查是否在促銷期間內
    if (currentDate <= endDate) {
        // 檢查是否已經顯示過（使用 localStorage）
        const hasShownToday = localStorage.getItem('promotionShown_' + currentDate.toDateString());
        
        if (!hasShownToday) {
            createPromotionPopup();
            localStorage.setItem('promotionShown_' + currentDate.toDateString(), 'true');
        }
    }
}

function createPromotionPopup() {
    // 創建彈出窗口元素
    const popup = document.createElement('div');
    popup.className = 'promotion-popup';
    popup.innerHTML = `
        <div class="promotion-overlay"></div>
        <div class="promotion-content">
            <button class="promotion-close">&times;</button>
            <div class="promotion-image-container">
                <img src="sales.jpg" alt="開幕促銷方案" class="promotion-image">
                <div class="promotion-badge">
                    <span>限時優惠</span>
                </div>
            </div>
            <div class="promotion-text">
                <h2>🎉 盛大開幕慶 🎉</h2>
                <p>慶祝饗家牛排館盛大開幕，特別推出限時優惠！</p>
                <div class="promotion-countdown">
                    <div class="countdown-item">
                        <span class="countdown-number" id="days">00</span>
                        <span class="countdown-label">天</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number" id="hours">00</span>
                        <span class="countdown-label">時</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number" id="minutes">00</span>
                        <span class="countdown-label">分</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number" id="seconds">00</span>
                        <span class="countdown-label">秒</span>
                    </div>
                </div>
                <div class="promotion-buttons">
                    <button class="btn btn-promotion" onclick="closePromotionPopup(); document.querySelector('#menu').scrollIntoView({behavior: 'smooth'});">
                        立即查看菜單 🍽️
                    </button>
                    <button class="btn btn-promotion-secondary" onclick="closePromotionPopup(); document.querySelector('#contact').scrollIntoView({behavior: 'smooth'});">
                        預約享優惠 📞
                    </button>
                </div>
            </div>
        </div>
    `;

    // 添加樣式
    const style = document.createElement('style');
    style.textContent = `
        .promotion-popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: popupFadeIn 0.5s ease-out;
        }

        .promotion-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(5px);
        }

        .promotion-content {
            position: relative;
            background: linear-gradient(135deg, #2c1810 0%, #3d2317 100%);
            border-radius: 20px;
            max-width: 500px;
            width: 90%;
            overflow: hidden;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
            transform: scale(0.8);
            animation: popupScale 0.5s ease-out 0.2s forwards;
        }

        .promotion-close {
            position: absolute;
            top: 15px;
            right: 15px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: none;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            font-size: 1.5rem;
            cursor: pointer;
            z-index: 10;
            transition: all 0.3s ease;
        }

        .promotion-close:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: rotate(90deg);
        }

        .promotion-image-container {
            position: relative;
            overflow: hidden;
        }

        .promotion-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .promotion-content:hover .promotion-image {
            transform: scale(1.05);
        }

        .promotion-badge {
            position: absolute;
            top: 15px;
            left: 15px;
            background: linear-gradient(45deg, #ff6b35, #f7931e);
            color: white;
            padding: 8px 15px;
            border-radius: 25px;
            font-weight: bold;
            font-size: 0.9rem;
            animation: badgePulse 2s infinite;
        }

        .promotion-text {
            padding: 25px;
            text-align: center;
            color: white;
        }

        .promotion-text h2 {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            margin-bottom: 15px;
            background: linear-gradient(45deg, #f7931e, #ff6b35);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .promotion-text p {
            font-size: 1.1rem;
            margin-bottom: 20px;
            opacity: 0.9;
        }

        .promotion-countdown {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin: 20px 0;
        }

        .countdown-item {
            text-align: center;
            background: rgba(255, 255, 255, 0.1);
            padding: 10px;
            border-radius: 10px;
            min-width: 60px;
        }

        .countdown-number {
            display: block;
            font-size: 1.5rem;
            font-weight: bold;
            color: #f7931e;
        }

        .countdown-label {
            font-size: 0.8rem;
            opacity: 0.8;
        }

        .promotion-buttons {
            display: flex;
            gap: 10px;
            margin-top: 25px;
            flex-wrap: wrap;
        }

        .btn-promotion {
            flex: 1;
            background: linear-gradient(45deg, #f7931e, #ff6b35);
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 25px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.95rem;
        }

        .btn-promotion:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(247, 147, 30, 0.4);
        }

        .btn-promotion-secondary {
            flex: 1;
            background: transparent;
            color: #f7931e;
            border: 2px solid #f7931e;
            padding: 12px 20px;
            border-radius: 25px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.95rem;
        }

        .btn-promotion-secondary:hover {
            background: #f7931e;
            color: white;
            transform: translateY(-2px);
        }

        @keyframes popupFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes popupScale {
            from { transform: scale(0.8); }
            to { transform: scale(1); }
        }

        @keyframes badgePulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }

        @media (max-width: 600px) {
            .promotion-content {
                margin: 20px;
            }
            
            .promotion-buttons {
                flex-direction: column;
            }
            
            .promotion-countdown {
                gap: 10px;
            }
            
            .countdown-item {
                min-width: 50px;
                padding: 8px;
            }
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(popup);

    // 啟動倒數計時器
    startCountdown();

    // 綁定關閉事件
    popup.querySelector('.promotion-close').addEventListener('click', closePromotionPopup);
    popup.querySelector('.promotion-overlay').addEventListener('click', closePromotionPopup);

    // 防止背景滾動
    document.body.style.overflow = 'hidden';
}

function closePromotionPopup() {
    const popup = document.querySelector('.promotion-popup');
    if (popup) {
        popup.style.animation = 'popupFadeIn 0.3s ease-out reverse';
        setTimeout(() => {
            popup.remove();
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

function startCountdown() {
    const endDate = new Date('2025-07-03 23:59:59');
    
    function updateCountdown() {
        const now = new Date();
        const timeLeft = endDate - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');

            if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
            if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
            if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
            if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
        }
    }

    updateCountdown();
    const countdownInterval = setInterval(() => {
        updateCountdown();
        const popup = document.querySelector('.promotion-popup');
        if (!popup) {
            clearInterval(countdownInterval);
        }
    }, 1000);
} 