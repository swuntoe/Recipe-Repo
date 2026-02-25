# 部署指南

本指南詳細說明如何將 Recipe Repo 部署到 GitHub Pages。

## 前置要求

- Git 已安裝
- Node.js 14+ 已安裝
- GitHub 帳戶
- Recipe-Repo 的 GitHub 倉庫

## 部署步驟

### 步驟 1：更新 package.json

在 `package.json` 中更新 `homepage` 字段為你的 GitHub Pages URL：

```json
"homepage": "https://<你的GitHub用戶名>.github.io/Recipe-Repo"
```

例如，如果你的 GitHub 用戶名是 `john-doe`：

```json
"homepage": "https://john-doe.github.io/Recipe-Repo"
```

### 步驟 2：更新 vite.config.js（如果需要）

如果你的倉庫不在根域名下，需要更新 base 路徑：

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/Recipe-Repo/', // 改為你的倉庫名稱
  // ... 其他配置
})
```

如果你使用的是自定義域名（如 `recipes.example.com`），則不需要修改 base：

```javascript
base: '/',
```

### 步驟 3：方案選擇

有三種方式可以部署到 GitHub Pages：

#### 方案 A：使用 GitHub Actions（推薦）

GitHub Actions 會在你推送代碼時自動構建和部署。

1. 確保倉庫設置已啟用 GitHub Pages（Settings > Pages > Source: Deploy from a branch, 選擇 gh-pages 分支）

2. 提交並推送所有更改：
```bash
git add .
git commit -m "Setup Recipe Repo with GitHub Pages"
git push origin main
```

3. GitHub Actions 會自動運行，並在完成後部署到 GitHub Pages。

4. 訪問 `https://<你的GitHub用戶名>.github.io/Recipe-Repo` 查看你的應用。

#### 方案 B：本地使用 gh-pages 部署

如果想在本地手動控制部署：

1. 安裝依賴：
```bash
npm install
```

2. 使用部署命令：
```bash
npm run deploy
```

3. 該命令會自動構建項目並推送到 `gh-pages` 分支。

4. 在 GitHub 倉庫設置中，確保 GitHub Pages 源指向 `gh-pages` 分支。

#### 方案 C：手動部署

1. 構建項目：
```bash
npm run build
```

2. 將 `dist` 文件夾的內容上傳到 GitHub Pages（或使用其他 CDN）。

### 步驟 4：驗證部署

1. 訪問 `https://<你的GitHub用戶名>.github.io/Recipe-Repo`

2. 如果看到 Recipe Repo 應用，說明部署成功！

## 常見問題

### Q1：部署後看到 404 錯誤

**原因**：base 路徑配置不正確。

**解決方案**：
- 檢查 `vite.config.js` 中的 base 是否為 `/Recipe-Repo/`（注意末尾的斜線）
- 確保 `package.json` 中的 `homepage` 正確
- 重新構建：`npm run build`
- 清除瀏覽器緩存或使用無痕模式測試

### Q2：部署後樣式不顯示

**原因**：CSS 路徑問題，通常是 base 路徑導致。

**解決方案**：
- 同 Q1，檢查 base 路徑配置
- 確保所有 CSS 文件都已正確構建（檢查 `dist/assets` 文件夾）

### Q3：GitHub Actions 部署失敗

**檢查清單**：
1. 倉庫設置中是否啟用了 GitHub Pages
2. GitHub Pages 源是否指向 `gh-pages` 分支
3. 檢查 Actions 選項卡中的失敗日誌
4. 確保 `gh-pages` 分支存在
5. 確保有足夠的權限推送到倉庫

### Q4：如何使用自定義域名

1. 購買域名

2. 在域名提供商那裡配置 DNS：
   - 添加 CNAME 記錄指向 `<用戶名>.github.io`
   - 或添加 A 記錄指向 GitHub Pages 的 IP 地址

3. 在 GitHub 倉庫設置中：
   - Settings > Pages > Custom domain
   - 輸入你的域名
   - 勾選 "Enforce HTTPS"

4. 更新 `vite.config.js` 中的 base 為 `/`：
```javascript
base: '/',
```

5. 更新 `package.json` 中的 `homepage`：
```json
"homepage": "https://your-custom-domain.com"
```

## 更新部署

每次推送到 main 分支時，GitHub Actions 都會自動重新構建和部署。

手動部署使用：
```bash
npm run deploy
```

## 本地開發

在部署前進行本地測試：

```bash
# 開發模式
npm run dev

# 預覽構建結果（模擬部署後的樣子）
npm run build
npm run preview
```

## 撤銷部署

如果需要撤銷部署，刪除 `gh-pages` 分支：

```bash
git push origin --delete gh-pages
```

然後在 GitHub Pages 設置中改回其他源（如 None）。

## 參考資源

- [GitHub Pages 官方文檔](https://pages.github.com/)
- [GitHub Actions 文檔](https://docs.github.com/en/actions)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [React 部署指南](https://create-react-app.dev/docs/deployment/)
