# 饗家牛排館網站

一個現代化、響應式的牛排館網站，提供優雅的用戶體驗和完整的餐廳資訊。

## 🚀 功能特色

### 🎨 設計特色
- **現代化設計**：採用優雅的色彩搭配和布局
- **響應式設計**：完美適配桌面、平板和手機
- **流暢動畫**：豐富的CSS動畫和JavaScript互動效果
- **專業視覺**：高品質圖片和精美的視覺設計

### 📱 功能亮點
- **固定導航欄**：滾動時背景透明度變化
- **英雄區塊**：全屏背景圖片與視差效果
- **互動式菜單**：分類切換功能
- **圖片燈箱**：點擊圖片可放大檢視
- **線上預約**：完整的表單驗證系統
- **通知系統**：美觀的成功/錯誤提示
- **平滑滾動**：點擊導航鏈接平滑滾動到目標區域

## 📁 文件結構

```
饗家牛排館/
├── index.html          # 主頁面文件
├── styles.css          # 樣式文件
├── script.js           # JavaScript功能文件
└── README.md           # 說明文件
```

## 🌟 網站區塊

### 1. 導航欄 (Navigation)
- 品牌Logo和英文副標題
- 導航菜單：首頁、菜單、關於我們、環境、聯繫我們
- 立即訂位按鈕
- 手機版漢堡菜單

### 2. 英雄區塊 (Hero Section)
- 全屏背景圖片
- 主標題：「極致牛排體驗」
- 副標題介紹
- 行動按鈕：「探索菜單」、「立即訂位」
- 向下滾動指示器

### 3. 關於我們 (About)
- 餐廳介紹和品質承諾
- 特色圖標：頂級食材、專業廚藝、用心服務
- 環境展示圖片

### 4. 精選菜單 (Menu)
- 分類標籤：牛排類、開胃菜、配菜、甜點
- 菜品卡片設計
- 圖片、名稱、描述、價格

### 5. 用餐環境 (Gallery)
- 網格布局展示餐廳環境
- 點擊圖片可放大檢視
- 懸停效果

### 6. 聯繫我們 (Contact)
- 餐廳資訊：地址、電話、營業時間、信箱
- 線上預約表單
- 表單驗證功能

### 7. 頁腳 (Footer)
- 品牌資訊
- 快速連結
- 社群媒體鏈接

## 💻 技術特色

### HTML5
- 語義化標籤
- 響應式meta標籤
- 無障礙設計

### CSS3
- CSS Grid和Flexbox布局
- CSS變數管理色彩
- 動畫和轉場效果
- 媒體查詢響應式設計

### JavaScript (ES6+)
- DOM操作
- 事件處理
- 表單驗證
- 交叉觀察器API
- 本地存儲

## 🎯 使用方法

### 開發環境
1. 下載所有文件到本地資料夾
2. 使用網頁伺服器開啟 `index.html`
3. 推薦使用 Live Server 或類似工具

### 生產環境
1. 上傳所有文件到網頁伺服器
2. 確保所有圖片連結正常
3. 測試各項功能

## 📱 響應式斷點

- **手機版**: 480px 以下
- **平板版**: 768px 以下
- **桌面版**: 769px 以上

## 🔧 自訂設定

### 色彩主題
在 `styles.css` 的 `:root` 區塊中修改CSS變數：
```css
:root {
    --primary-color: #8B4513;    /* 主色調 */
    --secondary-color: #DAA520;  /* 次要色調 */
    --accent-color: #CD853F;     /* 強調色 */
    --dark-color: #2C1810;       /* 深色 */
    --light-color: #F5F5DC;      /* 淺色 */
}
```

### 圖片更換
替換 Unsplash 圖片連結為您的實際圖片：
- 英雄區塊背景圖
- 菜品圖片
- 環境圖片

### 聯繫資訊
在 `index.html` 中修改：
- 餐廳地址
- 電話號碼
- 營業時間
- 電子信箱

## 🌐 瀏覽器支援

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## 📞 技術支援

如有任何問題或需要客製化，請聯繫開發團隊。

## 📧 Email通知設定

網站包含自動email通知功能，當有新預約時會自動發送通知到服務信箱。

### EmailJS設定步驟

1. **註冊EmailJS帳號**
   - 前往 [EmailJS官網](https://www.emailjs.com/) 註冊免費帳號
   - 免費版每月可發送200封郵件

2. **創建Email服務**
   - 在EmailJS控制台中添加Email服務
   - 推薦使用Gmail或Outlook
   - 連結您的郵件帳號

3. **創建Email模板**
   - 在EmailJS中創建新的email模板
   - 模板變數對應：
     ```
     {{to_email}} - 收件人信箱
     {{from_name}} - 發件人名稱
     {{subject}} - 郵件主旨
     {{message}} - 完整預約資訊
     {{customer_name}} - 客戶姓名
     {{customer_phone}} - 客戶電話
     {{reservation_date}} - 預約日期
     {{reservation_time}} - 預約時間
     ```

4. **更新程式碼配置**
   - 修改 `script.js` 中的 `EMAILJS_CONFIG`：
   ```javascript
   const EMAILJS_CONFIG = {
       serviceId: 'your_service_id',    // 您的服務ID
       templateId: 'your_template_id',  // 您的模板ID
       publicKey: 'your_public_key'     // 您的公鑰
   };
   ```
   - 更新 `emailjs.init()` 中的公鑰

5. **測試功能**
   - 完成設定後測試預約功能
   - 檢查 `sphere889889@gmail.com` 是否收到通知

### 備用方案

如果EmailJS設定失敗，系統會自動使用mailto鏈接作為備用方案，開啟用戶的默認郵件客戶端。

### 郵件模板範例

```
主旨：新預約通知 - {{reservation_id}}

內容：
【新預約通知】

預約編號：{{reservation_id}}
客戶姓名：{{customer_name}}
聯絡電話：{{customer_phone}}
電子信箱：{{customer_email}}

預約日期：{{reservation_date}}
預約時間：{{reservation_time}}
用餐人數：{{guest_count}}人

特殊需求：{{special_notes}}

預約時間：{{booking_timestamp}}

請盡快聯繫客戶確認預約。

---
饗家牛排館線上預約系統
自動發送，請勿回覆
```

## 📝 更新記錄

### 2024年7月 - 移除促銷活動功能
- 移除了首頁的促銷橫幅 (sales-banner) 區塊
- 移除了開幕促銷彈出窗口功能
- 移除了倒數計時器功能
- 刪除了 `sales.jpg` 圖片文件
- 清理了相關的 CSS 樣式和 JavaScript 代碼

**影響範圍：**
- `index.html`: 移除 sales-banner section
- `styles.css`: 移除 .sales-banner 和 .sales-image 樣式
- `script.js`: 移除促銷彈出窗口相關函數
- 檔案系統: 刪除 sales.jpg

---

**饗家牛排館** - 為您提供極致的牛排用餐體驗 