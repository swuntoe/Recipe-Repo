# 🚀 快速開始

只需 3 步即可在本地運行 Recipe Repo！

## 安裝

```bash
npm install
```

## 開發

```bash
npm run dev
```

然後在瀏覽器中打開 **http://localhost:5173**

## 構建

```bash
npm run build
```

構建結果會在 `dist/` 文件夾中。

## 可用命令

| 命令 | 功能 |
|------|------|
| `npm run dev` | 啟動開發服務器 |
| `npm run build` | 構建生產版本 |
| `npm run preview` | 預覽構建結果 |
| `npm run deploy` | 部署到 GitHub Pages（需要先配置） |

## 項目特點

✨ **核心功能**
- 🍳 食譜瀏覽和搜尋
- 🔄 **即時單位轉換**（ml ↔ cup ↔ tbsp 等）
- 🏷️ 標籤篩選
- 📱 完全響應式設計

## 項目文件說明

```
src/
├── components/           # React 組件
│   ├── RecipeCard.jsx    # 單個食譜卡片
│   ├── RecipeList.jsx    # 食譜列表（含搜尋和篩選）
│   └── *.css             # 組件樣式
├── data/
│   └── recipes.json      # 食譜數據
├── utils/
│   ├── unitConverter.js  # 核心：單位轉換邏輯
│   └── unitConverter.test.js  # 單位轉換測試
├── App.jsx               # 主應用
└── index.css             # 全局樣式
```

## 核心功能：單位轉換

[unitConverter.js](src/utils/unitConverter.js) 是本項目的心臟，提供：

```javascript
import { convertUnit, getUnitsByCategory } from './utils/unitConverter'

// 轉換單位
convertUnit(250, 'ml', 'cup')  // → 1.057

// 獲取某分類的所有單位
getUnitsByCategory('volume')   // → ['ml', 'l', 'cup', ...]
```

## 添加新食譜

編輯 [src/data/recipes.json](src/data/recipes.json)：

```json
{
  "id": 4,
  "name": "新食譜",
  "description": "簡短描述",
  "servings": 4,
  "prepTime": 15,
  "cookTime": 30,
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

## 支持的單位

- **體積**: ml, l, cup, tbsp, tsp, fl oz, pint
- **重量**: g, kg, oz, lb, mg

## 部署到 GitHub Pages

詳細見 [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

快速部署：
```bash
npm run deploy
```

## 自定義

### 修改顏色

主色是紅色 (`#d32f2f`)，可在以下文件中修改：
- `src/App.css`
- `src/components/*.css`
- `src/index.css`

### 添加新單位

編輯 `src/utils/unitConverter.js` 的 `UNIT_CONVERSIONS` 和 `UNIT_CATEGORIES`

### 修改樣式

每個組件都有對應的 `.css` 文件，直接編輯即可。

## 常見問題

**Q: 如何離線使用？**
A: 構建後可以直接打開 `dist/index.html`，但由於使用了 React Router（未來版本），可能需要配置。

**Q: 可以添加更多功能嗎？**
A: 當然可以！項目結構清晰，易於擴展。

**Q: 如何在自己的網站上使用？**
A: 構建後，將 `dist/` 文件夾上傳到任何靜態主機即可。

## 更多信息

- 完整文檔：[README.md](README.md)
- 部署指南：[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- 單位轉換測試：運行 `node src/utils/unitConverter.test.js`
