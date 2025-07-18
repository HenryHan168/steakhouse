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

// 建立簡單的圖片內容 (使用base64編碼的簡單圖片)
const createSimpleImage = (width, height, title, price) => {
    // 這是一個簡單的1x1像素的JPG圖片，用於測試
    const simpleJPG = Buffer.from('/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxAAPwA/8A', 'base64');
    return simpleJPG;
};

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
    { id: 'salad', name: '千島沙拉', price: '+60' },
    { id: 'spiral-soup', name: '螺旋脆皮濃湯', price: '+80' },
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
console.log('開始生成真實圖片...');

// 生成Logo (使用現有的logo.png)
if (fs.existsSync('logo.png')) {
    fs.copyFileSync('logo.png', 'images/logo/logo.png');
    console.log('✓ 已複製 logo.png');
} else {
    // 如果沒有現有的logo，創建一個簡單的PNG
    const simplePNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==', 'base64');
    fs.writeFileSync('images/logo/logo.png', simplePNG);
    console.log('✓ 已生成 logo.png');
}

// 生成英雄背景
const heroImage = createSimpleImage(1920, 1080, '饗家牛排館', '極致牛排體驗');
fs.writeFileSync('images/hero/hero-bg.jpg', heroImage);
console.log('✓ 已生成 hero-bg.jpg');

// 生成餐廳環境圖
const aboutImage = createSimpleImage(600, 800, '饗家牛排館', '溫馨優雅的用餐環境');
fs.writeFileSync('images/about/about-restaurant.jpg', aboutImage);
console.log('✓ 已生成 about-restaurant.jpg');

// 生成菜品圖片
menuItems.forEach(item => {
    const image = createSimpleImage(400, 300, item.name, item.price);
    fs.writeFileSync(`images/menu/${item.id}.jpg`, image);
    console.log(`✓ 已生成 ${item.id}.jpg`);
});

// 生成環境圖片
galleryItems.forEach(item => {
    const image = createSimpleImage(600, 400, item.name, '');
    fs.writeFileSync(`images/gallery/${item.id}.jpg`, image);
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

console.log('\n🎉 所有真實圖片生成完成！');
console.log('📁 圖片已保存到 images/ 資料夾中');
console.log('📋 請查看 images-reference.md 了解詳細的圖片對應關係');
console.log('\n💡 提示：這些是簡單的佔位圖片，您可以用真實的菜品照片替換'); 