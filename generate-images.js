const fs = require('fs');
const path = require('path');

// 確保圖片資料夾存在
const imageFolders = [
    'images/logo',
    'images/hero', 
    'images/about',
    'images/menu',
    'images/gallery'
];

imageFolders.forEach(folder => {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
    }
});

// 建立簡單的HTML圖片內容
const createHTMLImage = (width, height, content) => {
    return `<!DOCTYPE html>
<html>
<head>
    <style>
        body { margin: 0; padding: 0; }
        .image-container {
            width: ${width}px;
            height: ${height}px;
            background: linear-gradient(to bottom, #F5F5DC, #DAA520);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #2C1810;
            font-family: Arial, sans-serif;
        }
        .title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .price {
            font-size: 20px;
            color: #8B4513;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="image-container">
        <div class="title">${content.title}</div>
        <div class="price">${content.price}</div>
    </div>
</body>
</html>`;
};

// 建立Logo SVG
const logoContent = `
    <rect x="10" y="10" width="180" height="60" fill="#8B4513" rx="10"/>
    <text x="100" y="35" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="#DAA520">饗家</text>
    <text x="100" y="55" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="#F5F5DC">STEAKHOUSE</text>
`;

// 建立英雄背景SVG
const heroContent = `
    <defs>
        <linearGradient id="heroBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#2C1810;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#8B4513;stop-opacity:1" />
        </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#heroBg)"/>
    <circle cx="200" cy="200" r="3" fill="rgba(218,165,32,0.3)"/>
    <circle cx="400" cy="300" r="2" fill="rgba(218,165,32,0.3)"/>
    <circle cx="600" cy="150" r="4" fill="rgba(218,165,32,0.3)"/>
    <circle cx="800" cy="400" r="3" fill="rgba(218,165,32,0.3)"/>
    <circle cx="1000" cy="250" r="2" fill="rgba(218,165,32,0.3)"/>
    <circle cx="1200" cy="350" r="3" fill="rgba(218,165,32,0.3)"/>
    <circle cx="1400" cy="200" r="4" fill="rgba(218,165,32,0.3)"/>
    <circle cx="1600" cy="300" r="2" fill="rgba(218,165,32,0.3)"/>
    <circle cx="1800" cy="450" r="3" fill="rgba(218,165,32,0.3)"/>
`;

// 建立餐廳環境SVG
const aboutContent = `
    <rect x="50" y="100" width="500" height="400" fill="#8B4513"/>
    <rect x="100" y="200" width="100" height="60" fill="#CD853F"/>
    <rect x="250" y="200" width="100" height="60" fill="#CD853F"/>
    <rect x="400" y="200" width="100" height="60" fill="#CD853F"/>
    <rect x="100" y="350" width="100" height="60" fill="#CD853F"/>
    <rect x="250" y="350" width="100" height="60" fill="#CD853F"/>
    <rect x="400" y="350" width="100" height="60" fill="#CD853F"/>
    <text x="300" y="650" font-family="Arial, sans-serif" font-size="36" font-weight="bold" text-anchor="middle" fill="#2C1810">饗家牛排館</text>
    <text x="300" y="680" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#2C1810">溫馨優雅的用餐環境</text>
`;

// 建立菜品SVG模板
const createMenuItemSVG = (name, price) => `
    <rect x="100" y="80" width="200" height="120" fill="#8B4513"/>
    <circle cx="200" cy="140" r="80" fill="#CD853F"/>
    <rect x="160" y="100" width="80" height="60" fill="#A0522D"/>
    <text x="200" y="250" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="#2C1810">${name}</text>
    <text x="200" y="280" font-family="Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle" fill="#8B4513">${price}</text>
`;

// 建立環境圖片SVG模板
const createGalleryItemSVG = (name) => `
    <rect x="50" y="50" width="500" height="300" fill="#8B4513"/>
    <circle cx="150" cy="150" r="15" fill="#DAA520"/>
    <circle cx="300" cy="120" r="10" fill="#DAA520"/>
    <circle cx="450" cy="180" r="20" fill="#DAA520"/>
    <circle cx="200" cy="250" r="12" fill="#DAA520"/>
    <circle cx="350" cy="280" r="18" fill="#DAA520"/>
    <text x="300" y="350" font-family="Arial, sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="#2C1810">${name}</text>
`;

// 菜品列表
const menuItems = [
    { id: 'pork-chop', name: '鮮嫩豬排', price: '$270' },
    { id: 'chicken-leg', name: '脆皮雞腿排', price: '$290' },
    { id: 'sirloin-steak', name: '炙烤沙朗', price: '$310' },
    { id: 'fillet-steak', name: '炙烤PS菲力', price: '$410' },
    { id: 'wing-steak', name: 'Prime翼板雪花牛排', price: '$450' },
    { id: 'lamb-chops', name: '小羔羊排', price: '$550' },
    { id: 'bone-in-ribeye', name: '炙烤Prime帶骨牛小排', price: '$560' },
    { id: 'ribeye-steak', name: '炙烤Prime肋眼牛排', price: '$700' },
    { id: 'flounder-fish', name: '香煎比目魚', price: '$290' },
    { id: 'seafood-combo', name: '海鮮雙饗', price: '$480' },
    { id: 'pasta', name: '義大利麵', price: '$210' },
    { id: 'salad', name: '生菜沙拉', price: '$150' },
    { id: 'spiral-soup', name: '螺旋脆皮濃湯', price: '$180' },
    { id: 'kids-chicken', name: '兒童雞', price: '$190' },
    { id: 'kids-pork', name: '兒童豬', price: '$180' },
    { id: 'kids-sirloin', name: '兒童沙朗', price: '$200' }
];

// 環境圖片列表
const galleryItems = [
    { id: 'restaurant-interior', name: '餐廳內部' },
    { id: 'dining-area', name: '用餐區域' },
    { id: 'private-room', name: '包廂環境' },
    { id: 'bar-area', name: '吧台區' }
];

// 生成並保存圖片
console.log('開始生成圖片...');

// 生成Logo
fs.writeFileSync('images/logo/logo.png', Buffer.from(createSVGImage(200, 80, logoContent)));
console.log('✓ 已生成 logo.png');

// 生成英雄背景
fs.writeFileSync('images/hero/hero-bg.jpg', Buffer.from(createSVGImage(1920, 1080, heroContent)));
console.log('✓ 已生成 hero-bg.jpg');

// 生成餐廳環境圖
fs.writeFileSync('images/about/about-restaurant.jpg', Buffer.from(createSVGImage(600, 800, aboutContent)));
console.log('✓ 已生成 about-restaurant.jpg');

// 生成菜品圖片
menuItems.forEach(item => {
    const svgContent = createSVGImage(400, 300, createMenuItemSVG(item.name, item.price));
    fs.writeFileSync(`images/menu/${item.id}.jpg`, Buffer.from(svgContent));
    console.log(`✓ 已生成 ${item.id}.jpg`);
});

// 生成環境圖片
galleryItems.forEach(item => {
    const svgContent = createSVGImage(600, 400, createGalleryItemSVG(item.name));
    fs.writeFileSync(`images/gallery/${item.id}.jpg`, Buffer.from(svgContent));
    console.log(`✓ 已生成 ${item.id}.jpg`);
});

// 複製現有的菜單圖片
if (fs.existsSync('menu1.jpg')) {
    fs.copyFileSync('menu1.jpg', 'images/menu/menu1.jpg');
    console.log('✓ 已複製 menu1.jpg');
}

if (fs.existsSync('menu2.jpg')) {
    fs.copyFileSync('menu2.jpg', 'images/menu/menu2.jpg');
    console.log('✓ 已複製 menu2.jpg');
}

if (fs.existsSync('logo.png')) {
    fs.copyFileSync('logo.png', 'images/logo/logo.png');
    console.log('✓ 已複製 logo.png');
}

console.log('\n🎉 所有圖片生成完成！');
console.log('📁 圖片已保存到 images/ 資料夾中');
console.log('📋 請查看 images-reference.md 了解詳細的圖片對應關係'); 