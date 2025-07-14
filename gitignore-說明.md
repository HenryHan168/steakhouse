# Git忽略文件說明 - 饗家牛排館網站

## 📋 什麼是 .gitignore？

`.gitignore` 是一個特殊的文件，用來告訴 Git 哪些文件或資料夾不需要進行版本控制。這可以幫助保持專案整潔，避免將不必要的文件提交到版本控制系統中。

## 🎯 為什麼需要 .gitignore？

### 主要目的
1. **保持專案整潔** - 避免提交不必要的文件
2. **提高效能** - 減少版本控制系統的負擔
3. **保護敏感資訊** - 避免意外提交密碼或API金鑰
4. **避免衝突** - 排除個人開發環境的特定文件

### 對饗家牛排館網站的好處
- 排除作業系統生成的臨時文件
- 避免提交編輯器的設定文件
- 保護敏感的環境變數
- 排除建置產生的臨時文件

## 📁 當前 .gitignore 包含的項目

### 🖥️ 作業系統文件
```
.DS_Store          # macOS系統文件
.DS_Store?         # macOS系統文件
._*                # macOS隱藏文件
.Spotlight-V100    # macOS搜尋索引
.Trashes           # macOS垃圾桶
ehthumbs.db        # Windows縮圖快取
Thumbs.db          # Windows縮圖快取
```

**說明**: 這些是作業系統自動生成的文件，不需要版本控制。

### 💻 編輯器和IDE文件
```
.vscode/           # Visual Studio Code設定
.idea/             # IntelliJ IDEA設定
*.swp              # Vim臨時文件
*.swo              # Vim備份文件
*~                 # 編輯器備份文件
.project            # Eclipse專案文件
.classpath         # Eclipse類別路徑
.settings/         # Eclipse設定
```

**說明**: 這些是編輯器的個人設定，不應該與團隊共享。

### 📝 日誌文件
```
*.log              # 所有日誌文件
logs/              # 日誌資料夾
npm-debug.log*     # npm除錯日誌
yarn-debug.log*    # yarn除錯日誌
yarn-error.log*    # yarn錯誤日誌
```

**說明**: 日誌文件通常很大且經常變化，不適合版本控制。

### 📦 依賴包
```
node_modules/      # Node.js依賴包
package-lock.json  # npm鎖定文件
yarn.lock          # yarn鎖定文件
```

**說明**: 依賴包可以通過 `npm install` 重新安裝，不需要版本控制。

### 🏗️ 建置輸出
```
dist/              # 建置輸出目錄
build/             # 建置輸出目錄
out/               # 建置輸出目錄
```

**說明**: 建置產生的文件可以重新生成，不需要版本控制。

### 🔐 環境變數文件
```
.env               # 環境變數
.env.local         # 本地環境變數
.env.development.local
.env.test.local
.env.production.local
```

**說明**: 這些文件可能包含敏感資訊如API金鑰，不應該提交。

### 🗂️ 快取和臨時文件
```
.cache/            # 快取目錄
.parcel-cache/     # Parcel快取
*.tmp              # 臨時文件
*.temp             # 臨時文件
.tmp/              # 臨時目錄
temp/              # 臨時目錄
```

**說明**: 這些是程式執行時產生的臨時文件。

### 💾 備份文件
```
*.bak              # 備份文件
*.backup           # 備份文件
*.old              # 舊版本文件
```

**說明**: 備份文件不需要版本控制。

### 🖼️ 圖片處理文件
```
*.webp             # WebP圖片格式
*.avif             # AVIF圖片格式
image-optimization/ # 圖片優化目錄
```

**說明**: 這些是圖片處理的臨時文件，可以重新生成。

### 📊 測試和覆蓋率
```
coverage/          # 測試覆蓋率報告
.nyc_output/       # NYC測試覆蓋率
```

**說明**: 測試覆蓋率報告可以重新生成。

### 📝 個人開發文件
```
.local/            # 本地開發文件
dev/               # 開發目錄
notes/             # 個人筆記
drafts/            # 草稿文件
todo.md            # 待辦事項
```

**說明**: 這些是個人開發時的文件，不需要團隊共享。

## 🛠️ 如何使用 .gitignore

### 1. 檢查當前忽略的文件
```bash
git status --ignored
```

### 2. 查看 .gitignore 是否生效
```bash
git check-ignore filename
```

### 3. 如果文件已經被追蹤，需要移除
```bash
git rm --cached filename
```

### 4. 更新 .gitignore 後重新檢查
```bash
git add .gitignore
git commit -m "更新 .gitignore"
```

## ⚠️ 注意事項

### 重要提醒
1. **敏感資訊保護**: 確保 `.env` 文件不會被提交
2. **圖片文件**: 確保重要的圖片文件不會被忽略
3. **設定文件**: 確保重要的設定文件不會被忽略

### 常見問題
1. **文件仍然被追蹤**: 如果文件已經被Git追蹤，需要先移除
2. **忽略規則不生效**: 檢查語法是否正確
3. **子目錄規則**: 使用 `/` 開頭表示從根目錄開始

### 自訂規則
如果需要添加專案特定的忽略規則，可以在 `.gitignore` 文件末尾添加：

```gitignore
# 專案特定規則
my-custom-file.txt
custom-folder/
```

## 📚 相關文件

- `README.md` - 專案主要說明文件
- `images-reference.md` - 圖片對應參照文件
- `replace-images.md` - 圖片替換指南

## 🔄 更新記錄

- **2025年1月**: 建立初始版本
- 包含所有常見的忽略規則
- 針對饗家牛排館網站優化

---

**維護人員**: 饗家牛排館開發團隊  
**最後更新**: 2025年1月 