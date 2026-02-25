# 🍳 Recipe Repo

一個功能豐富的食譜 Web 應用，支持即時單位轉換功能。用 React 和 Vite 構建，可以輕鬆部署到 GitHub Pages。

## 功能特性

✨ **主要功能**
- 📖 瀏覽食譜，支持搜尋和標籤篩選
- 🔄 即時單位轉換（ml ↔ cup ↔ tbsp 等）
- 📱 完全響應式設計，支持手機和桌面
- 💾 食譜用 JSON 管理，方便擴展

🔧 **技術棧**
- React 19 - 現代 UI 框架
- Vite 7 - 超快的開發和構建工具
- 純 CSS - 無依賴的樣式

## 項目結構

```
recipe-repo/
├── src/
│   ├── components/
│   │   ├── RecipeCard.jsx        # 食譜卡片組件
│   │   ├── RecipeCard.css
│   │   ├── RecipeList.jsx        # 食譜列表組件
│   │   └── RecipeList.css
│   ├── data/
│   │   └── recipes.json          # 食譜數據
│   ├── utils/
│   │   └── unitConverter.js      # 單位轉換邏輯層（核心功能）
│   ├── App.jsx                   # 主應用組件
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── vite.config.js
├── package.json
└── README.md
```

## 單位轉換邏輯層

`unitConverter.js` 是本項目的核心，提供以下功能：

```javascript
// 轉換單個值
convertUnit(value, fromUnit, toUnit)
// 例如: convertUnit(250, 'ml', 'cup') → 1.057

// 獲取單位分類
getUnitCategory(unit)
// 返回: 'volume' 或 'weight'

// 獲取某分類的所有單位
getUnitsByCategory(category)
// 返回: ['ml', 'l', 'cup', 'tbsp', ...]

// 批量轉換食材
convertIngredients(ingredients, conversionMap)
```

支持的單位：
- **體積**: ml, l, cup, tbsp（湯匙）, tsp（茶匙）, fl oz, pint
- **重量**: g, kg, oz, lb, mg

## 快速開始

### 1. 安裝依賴
```bash
npm install
```

### 2. 開發模式
```bash
npm run dev
```
訪問 http://localhost:5173

### 3. 構建生產版本
```bash
npm run build
```

### 4. 預覽構建結果
```bash
npm run preview
```

## 部署到 GitHub Pages

### 方法 1：使用 gh-pages (推薦)

1. 安裝依賴（已包含在 package.json）：
```bash
npm install
```

2. 確保 `package.json` 中的 `homepage` 指向正確的 GitHub Pages URL：
```json
"homepage": "https://yourusername.github.io/Recipe-Repo"
```

3. 部署：
```bash
npm run deploy
```

### 方法 2：使用 GitHub Actions

創建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install and Build
        run: |
          npm install
          npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

然後推送到 main 分支，GitHub Actions 會自動部署。

### 方法 3：手動部署

如果要部署到子路徑，需要更新 `vite.config.js`：

```javascript
base: '/Recipe-Repo/', // 改為你的倉庫名稱
```

## 添加新食譜

編輯 `src/data/recipes.json`，按照以下格式添加：

```json
{
  "id": 4,
  "name": "食譜名稱",
  "description": "簡短描述",
  "servings": 2,
  "prepTime": 10,
  "cookTime": 20,
  "ingredients": [
    {
      "name": "食材名稱",
      "amount": 250,
      "unit": "ml"
    }
  ],
  "instructions": [
    "步驟 1",
    "步驟 2"
  ],
  "tags": ["標籤1", "標籤2"]
}
```

## 支持的食材單位

### 體積單位
- ml（毫升）- 基準單位
- l（升）
- cup（杯）
- tbsp（湯匙）
- tsp（茶匙）
- fl oz（液體盎司）
- pint（品脫）

### 重量單位
- g（克）- 基準單位
- kg（公斤）
- oz（盎司）
- lb（磅）
- mg（毫克）

**注意：不能混淆體積和重量單位進行轉換**

## 開發指南

### 修改樣式

所有組件的樣式都在對應的 `.css` 文件中。主顏色是紅色（`#d32f2f`），可以在 CSS 文件中全局修改。

### 擴展功能

1. **添加新的單位**：編輯 `src/utils/unitConverter.js` 中的 `UNIT_CONVERSIONS` 和 `UNIT_CATEGORIES`

2. **添加新的過濾功能**：修改 `src/components/RecipeList.jsx` 中的過濾邏輯

3. **優化排序**：在 `RecipeList` 中添加排序選項

## 性能優化

- 使用 React 18+ 的自動批處理
- CSS 使用原生 flexbox 和 grid
- 構建時自動進行代碼分割

## 瀏覽器支持

- Chrome（最新）
- Firefox（最新）
- Safari（最新）
- Edge（最新）

## 許可證

MIT

## 貢獻

歡迎提交 Issue 和 Pull Request！

## 相關資源

- [React 文檔](https://react.dev)
- [Vite 文檔](https://vite.dev)
- [GitHub Pages 文檔](https://pages.github.com/)
