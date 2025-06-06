// 🛡️ 代碼保護措施 (基本級別)
// 注意：這些措施只能防止一般使用者，無法阻止有經驗的開發者

// 禁用右鍵選單
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    showProtectionMessage('請勿嘗試查看原始碼！');
    return false;
});

// 禁用常用快捷鍵
document.addEventListener('keydown', function(e) {
    // 禁用 F12 (開發者工具)
    if (e.key === 'F12') {
        e.preventDefault();
        showProtectionMessage('開發者工具已被禁用');
        return false;
    }
    
    /* 
    // 禁用 Ctrl+Shift+I (開發者工具)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        showProtectionMessage('開發者工具已被禁用');
        return false;
    }
    
    // 禁用 Ctrl+Shift+J (控制台)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        showProtectionMessage('控制台已被禁用');
        return false;
    }
    
    // 禁用 Ctrl+U (查看原始碼)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        showProtectionMessage('查看原始碼已被禁用');
        return false;
    }
    
    // 禁用 Ctrl+S (儲存頁面)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        showProtectionMessage('儲存頁面已被禁用');
        return false;
    }
    
    // 禁用 Ctrl+A (全選)
    if (e.ctrlKey && e.key === 'a') {
        e.preventDefault();
        showProtectionMessage('全選功能已被禁用');
        return false;
    }
    */
});

/* 
// 禁用文字選取
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    return false;
});

// 禁用拖曳
document.addEventListener('dragstart', function(e) {
    e.preventDefault();
    return false;
});

// 檢測開發者工具是否開啟
function detectDevTools() {
    let devtools = {
        open: false,
        orientation: null
    };
    
    const threshold = 160;
    
    setInterval(() => {
        if (window.outerHeight - window.innerHeight > threshold ||
            window.outerWidth - window.innerWidth > threshold) {
            if (!devtools.open) {
                devtools.open = true;
                showProtectionMessage('檢測到開發者工具，頁面將被重新導向');
                setTimeout(() => {
                    window.location.href = 'about:blank';
                }, 2000);
            }
        } else {
            devtools.open = false;
        }
    }, 500);
}
*/

// 顯示保護提示訊息
function showProtectionMessage(message) {
    // 創建提示框
    const alertBox = document.createElement('div');
    alertBox.className = 'protection-alert';
    alertBox.textContent = message;
    
    // 樣式
    const style = document.createElement('style');
    style.textContent = `
        .protection-alert {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #e74c3c, #c0392b);
            color: white;
            padding: 20px 30px;
            border-radius: 10px;
            font-size: 1.1rem;
            font-weight: bold;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            z-index: 99999;
            animation: protectionShake 0.5s ease-in-out;
        }
        
        @keyframes protectionShake {
            0%, 100% { transform: translate(-50%, -50%); }
            25% { transform: translate(-48%, -50%); }
            75% { transform: translate(-52%, -50%); }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(alertBox);
    
    // 3秒後自動移除
    setTimeout(() => {
        alertBox.remove();
    }, 3000);
}

/* 
// 防止透過控制台執行代碼
(function() {
    try {
        const devtools = /./;
        devtools.toString = function() {
            showProtectionMessage('檢測到控制台活動！');
            return '';
        };
        console.log('%c', devtools);
    } catch (e) {}
})();

// 混淆關鍵變數名稱
const _0x1a2b = 'steakhouse-protection';
const _0x3c4d = 'code-security-enabled';
*/

// 啟動保護機制
document.addEventListener('DOMContentLoaded', function() {
    // detectDevTools(); // 已註解
    
    /* 
    // 在控制台顯示警告
    console.clear();
    console.log('%c⚠️ 警告 ⚠️', 'color: red; font-size: 20px; font-weight: bold;');
    console.log('%c此網站的代碼受到保護，請勿嘗試查看或修改！', 'color: orange; font-size: 14px;');
    console.log('%c如有任何問題，請聯繫網站管理員。', 'color: blue; font-size: 12px;');
    */
});

/* 
// CSS 保護樣式
const protectionCSS = document.createElement('style');
protectionCSS.textContent = `
    // 禁用選取
    * {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: transparent;
    }
    
    // 允許輸入欄位選取
    input, textarea {
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
    }
    
    // 隱藏圖片拖曳
    img {
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
        pointer-events: none;
    }
    
    // 點擊圖片時恢復功能
    .gallery-item img {
        pointer-events: auto;
    }
`;

document.head.appendChild(protectionCSS);
*/

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

// 線上訂位功能增強
document.addEventListener('DOMContentLoaded', () => {
    // 檢測 Google Form 載入狀態
    const iframe = document.querySelector('.reservation-iframe');
    const tempMessage = document.querySelector('.temp-form-message');
    
    if (iframe && tempMessage) {
        // 檢查是否已設置正確的 Google Form URL
        const currentSrc = iframe.getAttribute('src');
        const isValidForm = !currentSrc.includes('1FAIpQLSd8Q9X7YzQ3xKlPvJ2hN8mB4cF5gH6iE1wR9tY7uI3oP0aS2dF') && currentSrc.includes('docs.google.com/forms');
        
        if (isValidForm) {
            // 如果已設置正確的表單，隱藏提示訊息，顯示表單
            tempMessage.style.display = 'none';
            iframe.style.display = 'block';
            
            iframe.addEventListener('load', () => {
                console.log('Google Form 載入完成');
                
                // 添加載入完成的視覺反饋
                const wrapper = document.querySelector('.google-form-wrapper');
                if (wrapper) {
                    wrapper.style.opacity = '1';
                    wrapper.style.transform = 'translateY(0)';
                }
            });
            
            // 初始樣式
            const wrapper = document.querySelector('.google-form-wrapper');
            if (wrapper) {
                wrapper.style.opacity = '0.8';
                wrapper.style.transform = 'translateY(10px)';
                wrapper.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            }
        } else {
            // 顯示設置提示
            tempMessage.style.display = 'block';
            iframe.style.display = 'none';
            
            // 添加設置完成提示
            const setupBtn = tempMessage.querySelector('.btn');
            if (setupBtn) {
                setupBtn.addEventListener('click', () => {
                    // 5秒後提示使用者重新整理頁面
                    setTimeout(() => {
                        if (confirm('完成表單建立後，請重新整理此頁面來顯示表單。\n\n是否要重新整理頁面？')) {
                            window.location.reload();
                        }
                    }, 5000);
                });
            }
        }
    }
    
    // 訂位卡片動畫
    const introCards = document.querySelectorAll('.intro-card');
    introCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // 備用訂位按鈕點擊追蹤
    const backupBtns = document.querySelectorAll('.backup-btn');
    backupBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const btnType = btn.classList.contains('phone-backup') ? '電話' : 'LINE';
            console.log(`用戶點擊了${btnType}訂位`);
            
            // 添加點擊效果
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
        });
    });
});

// 表單提交成功檢測 (Google Form)
function detectFormSubmission() {
    const iframe = document.querySelector('.reservation-iframe');
    if (!iframe) return;
    
    try {
        // 監聽 iframe 內容變化 (有限制，僅作參考)
        iframe.addEventListener('load', () => {
            // 檢查是否為提交成功頁面
            try {
                const iframeUrl = iframe.contentWindow.location.href;
                if (iframeUrl.includes('formResponse')) {
                    showReservationThankYou();
                }
            } catch (e) {
                // 跨域限制，無法直接檢測
                console.log('表單互動檢測受限於跨域政策');
            }
        });
    } catch (e) {
        console.log('表單提交檢測設置失敗');
    }
}

// 顯示訂位感謝訊息
function showReservationThankYou() {
    const thankYouMessage = document.createElement('div');
    thankYouMessage.className = 'reservation-thank-you';
    thankYouMessage.innerHTML = `
        <div class="thank-you-content">
            <i class="fas fa-check-circle"></i>
            <h3>訂位申請已送出！</h3>
            <p>感謝您選擇饗家牛排館，我們將在2小時內回覆確認訊息</p>
            <button onclick="closeThankYou()" class="btn btn-primary">知道了</button>
        </div>
    `;
    
    // 添加樣式
    const style = document.createElement('style');
    style.textContent = `
        .reservation-thank-you {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .thank-you-content {
            background: white;
            padding: 3rem;
            border-radius: 20px;
            text-align: center;
            max-width: 500px;
            width: 90%;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .thank-you-content i {
            font-size: 4rem;
            color: #28a745;
            margin-bottom: 1rem;
        }
        
        .thank-you-content h3 {
            color: var(--dark-color);
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }
        
        .thank-you-content p {
            color: var(--gray);
            margin-bottom: 2rem;
            line-height: 1.6;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(thankYouMessage);
}

// 關閉感謝訊息
function closeThankYou() {
    const thankYou = document.querySelector('.reservation-thank-you');
    if (thankYou) {
        thankYou.style.opacity = '0';
        setTimeout(() => {
            thankYou.remove();
        }, 300);
    }
}

// 初始化表單檢測
document.addEventListener('DOMContentLoaded', () => {
    detectFormSubmission();
});

// 訂位區塊滾動視覺效果
window.addEventListener('scroll', () => {
    const reservationSection = document.querySelector('.reservation');
    if (reservationSection) {
        const rect = reservationSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            const scrollProgress = Math.min(1, Math.max(0, 
                (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
            ));
            
            // 為訂位表單添加漸進式顯示效果
            const formContainer = document.querySelector('.reservation-form-container');
            if (formContainer) {
                formContainer.style.transform = `translateY(${(1 - scrollProgress) * 20}px)`;
                formContainer.style.opacity = scrollProgress;
            }
        }
    }
}); 