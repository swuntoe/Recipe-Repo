# 📖 Recipe Repo - 文檔索引

歡迎！這是 Recipe Repo 食譜 Web 應用的文檔中心。

---

## 🎯 開始使用

**新手入門？** 從這裡開始 👇

1. **[QUICKSTART.md](QUICKSTART.md)** - 5 分鐘快速開始
   - 安裝、運行、構建最快方式
   - 完全初學者友好

2. **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - 速查表
   - 常用命令
   - 快速查找文件位置
   - 常見問題解答

---

## 📚 完整文檔

**想深入了解？** 查看這些文檔 👇

### 1. [README.md](README.md) - 完整項目指南 ⭐
- 功能介紹
- 項目結構
- 支持的單位
- 開發指南
- 自定義方法

**適合對象**：想了解整個項目的人

### 2. [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - 項目完成總結
- 創建的所有文件清單
- 技術棧說明
- 性能指標
- 下一步建議

**適合對象**：想快速了解項目規模和內容的人

---

## 🚀 部署指南

### 1. [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - 完整部署步驟 ⭐
- 3 種部署方案詳解
- 常見問題排查
- 自定義域名配置

**適合對象**：準備部署到 GitHub Pages 的人

### 2. [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) - 部署前檢查清單
- 部署前驗證步驟
- 故障排除
- 跨設備測試建議

**適合對象**：想確保部署成功的人

---

## 🔧 核心功能詳解

### 單位轉換邏輯層

**文件**：`src/utils/unitConverter.js`

**功能**：
- 體積單位轉換（ml ↔ cup ↔ tbsp 等）
- 重量單位轉換（g ↔ oz ↔ lb 等）
- 防止錯誤轉換
- 批量轉換支持

**使用**：
```javascript
import { convertUnit } from './src/utils/unitConverter'
convertUnit(250, 'ml', 'cup')  // → 1.057
```

**測試**：
```bash
node src/utils/unitConverter.test.js
```

更多信息見 [README.md#單位轉換邏輯層](README.md#單位轉換邏輯層)

---

## 📁 項目文件導航

### 核心代碼

| 文件 | 用途 |
|------|------|
| `src/utils/unitConverter.js` | ⭐ **單位轉換邏輯（核心）** |
| `src/data/recipes.json` | 食譜數據 |
| `src/components/RecipeCard.jsx` | 食譜卡片組件 |
| `src/components/RecipeList.jsx` | 食譜列表（搜尋+篩選） |
| `src/App.jsx` | 主應用組件 |

### 配置文件

| 文件 | 用途 |
|------|------|
| `vite.config.js` | Vite 構建配置 |
| `package.json` | 依賴和腳本 |
| `.github/workflows/deploy.yml` | GitHub Actions 自動部署 |
| `.gitignore` | Git 忽略規則 |

### 文檔

| 文件 | 用途 |
|------|------|
| [README.md](README.md) | 完整項目文檔 |
| [QUICKSTART.md](QUICKSTART.md) | 快速開始指南 |
| [QUICK_REFERENCE.md](QUICK_REFERENCE.md) | 速查表 |
| [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) | 部署詳細指南 |
| [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) | 部署前檢查清單 |
| [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) | 項目完成總結 |
| [INDEX.md](INDEX.md) | 文檔索引（本文件） |

---

## ⚡ 快速命令速查

```bash
# 開發
npm install         # 首次安裝依賴
npm run dev         # 啟動開發服務器

# 生產
npm run build       # 構建生產版本
npm run preview     # 預覽構建結果
npm run deploy      # 部署到 GitHub Pages

# 測試
node src/utils/unitConverter.test.js    # 測試單位轉換
```

---

## 🎯 按需求查找

### 我想...

#### 1. **立即開始開發** 
→ [QUICKSTART.md](QUICKSTART.md)

#### 2. **了解單位轉換功能**
→ [README.md#單位轉換邏輯層](README.md#單位轉換邏輯層)

#### 3. **添加新食譜**
→ [README.md#添加新食譜](README.md#添加新食譜)

#### 4. **修改樣式/自定義**
→ [README.md#自定義](README.md#自定義)

#### 5. **擴展功能**
→ [README.md#開發指南](README.md#開發指南)

#### 6. **部署到 GitHub Pages**
→ [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

#### 7. **排除部署問題**
→ [DEPLOYMENT_GUIDE.md#常見問題](DEPLOYMENT_GUIDE.md#常見問題)

#### 8. **獲得命令速查表**
→ [QUICK_REFERENCE.md](QUICK_REFERENCE.md)

#### 9. **查看項目結構**
→ [PROJECT_SUMMARY.md#項目內容](PROJECT_SUMMARY.md#項目內容)

#### 10. **了解技術棧**
→ [PROJECT_SUMMARY.md#技術棧](PROJECT_SUMMARY.md#技術棧)

---

## 🧭 文檔關聯圖

```
開始使用
├── QUICKSTART.md ...................... 快速開始
├── QUICK_REFERENCE.md ................ 速查表
└── INDEX.md ........................... 文檔索引 (你在這裡)

深入學習
├── README.md .......................... 完整指南
│   ├── 功能特性
│   ├── 項目結構
│   ├── 單位轉換說明
│   ├── 快速開始
│   ├── 添加新食譜
│   └── 開發指南
└── PROJECT_SUMMARY.md ................ 項目總結

部署相關
├── DEPLOYMENT_GUIDE.md ............... 部署詳細步驟
├── DEPLOYMENT_CHECKLIST.md .......... 部署前檢查
└── QUICK_REFERENCE.md ............... 命令速查

核心代碼
├── src/utils/unitConverter.js ........ ⭐ 單位轉換邏輯
├── src/data/recipes.json ............ 食譜數據
└── src/components/ .................. React 組件
```

---

## 💡 學習路徑建議

### 初級開發者（想快速上手）
1. [QUICKSTART.md](QUICKSTART.md) - 了解基本命令
2. [QUICK_REFERENCE.md](QUICK_REFERENCE.md) - 保存速查表
3. 本地運行 `npm run dev` 並探索 UI

### 中級開發者（想擴展功能）
1. 閱讀 [README.md](README.md) - 了解完整功能
2. 查看 `src/utils/unitConverter.js` - 理解核心邏輯
3. 修改 `src/data/recipes.json` - 添加新食譜
4. 瀏覽 `src/components/` - 理解 React 組件結構

### 高級開發者（想優化和部署）
1. 閱讀 [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - 部署策略
2. 查看 `.github/workflows/deploy.yml` - CI/CD 配置
3. 優化 `vite.config.js` - 構建配置
4. 擴展 `src/utils/` - 添加新功能

---

## 🔗 相關資源

### 官方文檔
- [React 文檔](https://react.dev)
- [Vite 文檔](https://vite.dev)
- [GitHub Pages 文檔](https://pages.github.com/)

### 部署幫助
- [GitHub Actions 文檔](https://docs.github.com/en/actions)
- [gh-pages NPM 包](https://www.npmjs.com/package/gh-pages)

---

## ❓ 常見問題

**Q: 從哪裡開始？**
A: 如果是新手，從 [QUICKSTART.md](QUICKSTART.md) 開始

**Q: 如何測試單位轉換？**
A: 運行 `node src/utils/unitConverter.test.js`

**Q: 如何部署到 GitHub Pages？**
A: 按照 [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) 的步驟操作

**Q: 這些文檔的用途是什麼？**
A: 見上面的"按需求查找"部分

---

## 📊 文檔統計

| 項目 | 數量 |
|------|------|
| 文檔文件 | 7 個 |
| 源代碼文件 | 11 個 |
| 配置文件 | 3 個 |
| 支持的單位 | 14 個 |
| 示例食譜 | 3 個 |
| 總檔案數 | 25+ 個 |

---

## 🎯 下一步

1. **[QUICKSTART.md](QUICKSTART.md)** - 立即開始開發
2. **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - 準備部署
3. **[README.md](README.md)** - 深入了解

---

**祝你使用愉快！有問題？檢查 [QUICK_REFERENCE.md](QUICK_REFERENCE.md) 中的常見問題。** 🍳✨
