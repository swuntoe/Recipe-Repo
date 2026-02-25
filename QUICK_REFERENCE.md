# 🍳 Recipe Repo - 快速參考卡

## ⚡ 最常用命令

```bash
# 開發
npm run dev          # 啟動開發服務器 → http://localhost:5173

# 生產
npm run build        # 構建生產版本
npm run preview      # 預覽構建結果
npm run deploy       # 部署到 GitHub Pages

# 測試
node src/utils/unitConverter.test.js    # 測試單位轉換
```

---

## 🗂️ 關鍵文件位置

| 用途 | 文件 |
|------|------|
| **核心邏輯** | `src/utils/unitConverter.js` |
| **食譜數據** | `src/data/recipes.json` |
| **UI 組件** | `src/components/` |
| **部署配置** | `vite.config.js`, `.github/workflows/deploy.yml` |
| **文檔** | `README.md`, `DEPLOYMENT_GUIDE.md` |

---

## 🔄 單位轉換快速用法

```javascript
import { convertUnit } from './src/utils/unitConverter'

// 轉換
convertUnit(250, 'ml', 'cup')        // → 1.057
convertUnit(1, 'cup', 'ml')          // → 236.588
convertUnit(500, 'g', 'oz')          // → 17.637
convertUnit(2, 'tbsp', 'tsp')        // → 6

// 支持的單位
// 體積: ml, l, cup, tbsp, tsp, fl oz, pint
// 重量: g, kg, oz, lb, mg
```

---

## 📝 添加新食譜

編輯 `src/data/recipes.json`，添加對象：

```json
{
  "id": 4,
  "name": "食譜名",
  "description": "簡短描述",
  "servings": 2,
  "prepTime": 15,
  "cookTime": 30,
  "ingredients": [
    { "name": "食材", "amount": 250, "unit": "ml" }
  ],
  "instructions": ["步驟1", "步驟2"],
  "tags": ["標籤1"]
}
```

---

## 🎨 修改樣式

主色：`#d32f2f`（紅色）

修改位置：
- `src/App.css`
- `src/components/RecipeCard.css`
- `src/components/RecipeList.css`

---

## 🚀 部署步驟

### 1. 配置
```bash
# 編輯 package.json
"homepage": "https://你的用戶名.github.io/Recipe-Repo"

# 編輯 vite.config.js
base: '/Recipe-Repo/'
```

### 2. 提交
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 3. 等待
GitHub Actions 自動部署（1-2 分鐘）

### 4. 訪問
`https://你的用戶名.github.io/Recipe-Repo`

---

## 📁 項目結構速查

```
Recipe-Repo/
├── src/
│   ├── components/          React 組件
│   │   ├── RecipeCard.jsx   食譜卡片
│   │   └── RecipeList.jsx   食譜列表
│   ├── utils/
│   │   └── unitConverter.js ⭐ 單位轉換
│   ├── data/
│   │   └── recipes.json     食譜數據
│   ├── App.jsx              主應用
│   └── main.jsx             入口
├── .github/workflows/
│   └── deploy.yml           自動部署配置
└── vite.config.js           Vite 配置
```

---

## 🧪 測試和驗證

```bash
# 單位轉換邏輯
node src/utils/unitConverter.test.js

# 構建驗證
npm run build

# 本地預覽
npm run preview
```

---

## 🐛 常見問題速查

| 問題 | 解決方案 |
|------|---------|
| 頁面 404 | 檢查 `base` 路徑配置 |
| 樣式丟失 | 清除瀏覽器緩存 |
| 單位轉換不工作 | 運行測試：`node src/utils/unitConverter.test.js` |
| 部署失敗 | 檢查 GitHub Actions 日誌 |

---

## 📚 文檔導航

- **快速開始** → [QUICKSTART.md](QUICKSTART.md)
- **完整文檔** → [README.md](README.md)
- **部署指南** → [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- **部署清單** → [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)
- **項目總結** → [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

---

## 💡 開發技巧

```bash
# 熱重載開發
npm run dev

# 查看構建大小
npm run build    # 查看輸出中的大小

# 檢查 Git 狀態
git status

# 強制刷新部署
npm run deploy && git push
```

---

## 🎯 接下來可以做什麼

- [ ] 添加更多食譜
- [ ] 自定義主題色
- [ ] 添加食譜圖片
- [ ] 實現食譜收藏功能
- [ ] 添加購物清單生成
- [ ] 支持多語言

---

**🚀 已準備好部署了嗎？參考 [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)**
