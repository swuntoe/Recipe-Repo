/**
 * 主应用程序
 */

let allRecipes = [];
let filteredRecipes = [];
let selectedTags = new Set();

// DOM 元素
const recipesContainer = document.getElementById('recipesContainer');
const searchInput = document.getElementById('searchInput');
const filterTags = document.getElementById('filterTags');
const recipeModal = document.getElementById('recipeModal');
const converterModal = document.getElementById('converterModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const closeConverter = document.getElementById('closeConverter');

/**
 * 初始化應用
 */
async function init() {
    await loadRecipes();
    setupEventListeners();
    renderRecipes();
}

/**
 * 加載食譜數據
 */
async function loadRecipes() {
    try {
        const response = await fetch('./data/recipes.json');
        allRecipes = await response.json();
        filteredRecipes = [...allRecipes];
        initializeTags();
    } catch (error) {
        console.error('Error loading recipes:', error);
        recipesContainer.innerHTML = '<p class="loading">無法加載食譜，請稍後再試</p>';
    }
}

/**
 * 初始化標籤過濾
 */
function initializeTags() {
    const allTagsSet = new Set();
    allRecipes.forEach(recipe => {
        if (recipe.tags) {
            recipe.tags.forEach(tag => allTagsSet.add(tag));
        }
    });

    const tagsHTML = Array.from(allTagsSet)
        .sort()
        .map(tag => `<div class="filter-tag" data-tag="${tag}">${tag}</div>`)
        .join('');
    
    filterTags.innerHTML = tagsHTML;
    
    // 為標籤添加點擊事件
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.addEventListener('click', handleTagFilter);
    });
}

/**
 * 設置事件監聽器
 */
function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    closeModal.addEventListener('click', () => recipeModal.classList.remove('active'));
    closeConverter.addEventListener('click', () => converterModal.classList.remove('active'));
    
    // 點擊 modal 背景關閉
    recipeModal.addEventListener('click', (e) => {
        if (e.target === recipeModal) {
            recipeModal.classList.remove('active');
        }
    });
    
    converterModal.addEventListener('click', (e) => {
        if (e.target === converterModal) {
            converterModal.classList.remove('active');
        }
    });

    // 單位轉換輸入事件
    const converterValue = document.getElementById('converterValue');
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');

    [converterValue, fromUnit, toUnit].forEach(el => {
        el.addEventListener('change', performConversion);
        el.addEventListener('input', performConversion);
    });
}

/**
 * 搜尋食譜
 */
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    filterRecipes(searchTerm);
}

/**
 * 標籤過濾
 */
function handleTagFilter(e) {
    const tag = e.target.dataset.tag;
    e.target.classList.toggle('active');

    if (e.target.classList.contains('active')) {
        selectedTags.add(tag);
    } else {
        selectedTags.delete(tag);
    }

    filterRecipes(searchInput.value.toLowerCase());
}

/**
 * 過濾食譜
 */
function filterRecipes(searchTerm) {
    filteredRecipes = allRecipes.filter(recipe => {
        // 搜尋詞過濾
        const matchesSearch = !searchTerm || 
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm);

        // 標籤過濾
        const matchesTags = selectedTags.size === 0 || 
            (recipe.tags && recipe.tags.some(tag => selectedTags.has(tag)));

        return matchesSearch && matchesTags;
    });

    renderRecipes();
}

/**
 * 渲染食譜卡片
 */
function renderRecipes() {
    if (filteredRecipes.length === 0) {
        recipesContainer.innerHTML = '<p class="no-results">沒有找到符合條件的食譜</p>';
        return;
    }

    const html = filteredRecipes.map(recipe => createRecipeCard(recipe)).join('');
    recipesContainer.innerHTML = html;

    // 為卡片添加點擊事件
    document.querySelectorAll('.recipe-card').forEach(card => {
        card.addEventListener('click', () => showRecipeDetails(card.dataset.recipeId));
    });

    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            showRecipeDetails(btn.dataset.recipeId);
        });
    });
}

/**
 * 創建食譜卡片 HTML
 */
function createRecipeCard(recipe) {
    const tagsHTML = recipe.tags 
        ? recipe.tags.map(tag => `<span class="recipe-tag">${tag}</span>`).join('')
        : '';

    return `
        <div class="recipe-card" data-recipe-id="${recipe.id}">
            <div class="recipe-card-header">
                <h2 class="recipe-card-title">${recipe.name}</h2>
                <p class="recipe-card-description">${recipe.description}</p>
            </div>
            <div class="recipe-card-body">
                <div class="recipe-meta">
                    <div class="recipe-meta-item">⏱️ ${recipe.prepTime}分鐘預備</div>
                    <div class="recipe-meta-item">🍳 ${recipe.cookTime}分鐘烹飪</div>
                    <div class="recipe-meta-item">👥 ${recipe.servings}份</div>
                </div>
                <div class="recipe-tags">${tagsHTML}</div>
            </div>
            <div class="recipe-card-footer">
                <button class="view-btn" data-recipe-id="${recipe.id}">查看詳情</button>
            </div>
        </div>
    `;
}

/**
 * 顯示食譜詳情
 */
function showRecipeDetails(recipeId) {
    const recipe = allRecipes.find(r => r.id == recipeId);
    if (!recipe) return;

    const ingredientsHTML = recipe.ingredients.map(ing => `
        <div class="ingredient-item">
            <span class="ingredient-name">${ing.name}</span>
            <span class="ingredient-amount">${ing.amount} ${ing.unit}</span>
            <button class="converter-btn" data-value="${ing.amount}" data-unit="${ing.unit}">轉換</button>
        </div>
    `).join('');

    const instructionsHTML = recipe.instructions.map(instr => `<li>${instr}</li>`).join('');

    const tagsHTML = recipe.tags 
        ? recipe.tags.map(tag => `<span class="recipe-tag">${tag}</span>`).join('')
        : '';

    modalBody.innerHTML = `
        <h2>${recipe.name}</h2>
        <p>${recipe.description}</p>
        
        <div class="recipe-info">
            <div class="info-item">
                <div class="info-label">份量</div>
                <div class="info-value">${recipe.servings}</div>
            </div>
            <div class="info-item">
                <div class="info-label">預備時間</div>
                <div class="info-value">${recipe.prepTime}分</div>
            </div>
            <div class="info-item">
                <div class="info-label">烹飪時間</div>
                <div class="info-value">${recipe.cookTime}分</div>
            </div>
        </div>

        <div class="recipe-tags">${tagsHTML}</div>

        <div class="ingredients-section">
            <h3>材料</h3>
            <div>${ingredientsHTML}</div>
        </div>

        <div class="instructions-section">
            <h3>步驟</h3>
            <ol class="instructions-list">
                ${instructionsHTML}
            </ol>
        </div>
    `;

    // 為轉換按鈕添加事件
    modalBody.querySelectorAll('.converter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openConverter(parseFloat(btn.dataset.value), btn.dataset.unit);
        });
    });

    recipeModal.classList.add('active');
}

/**
 * 打開單位轉換器
 */
function openConverter(value, unit) {
    const converterValue = document.getElementById('converterValue');
    const fromUnit = document.getElementById('fromUnit');
    
    converterValue.value = value;
    fromUnit.value = unit;

    populateUnitSelects(unit);
    performConversion();
    converterModal.classList.add('active');
}

/**
 * 填充單位選項
 */
function populateUnitSelects(selectedUnit) {
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');
    
    const selectedCategory = getUnitCategory(selectedUnit);
    if (!selectedCategory) return;

    const units = getUnitsByCategory(selectedCategory);
    
    const createOptions = (select, selected) => {
        select.innerHTML = '<option value="">選擇單位</option>' +
            units.map(u => `<option value="${u}" ${u === selected ? 'selected' : ''}>${u}</option>`).join('');
    };

    createOptions(fromUnit, selectedUnit);
    createOptions(toUnit, selectedUnit);
}

/**
 * 執行轉換
 */
function performConversion() {
    const converterValue = document.getElementById('converterValue');
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');
    const converterResult = document.getElementById('converterResult');

    const value = parseFloat(converterValue.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    if (!value || !from || !to) {
        converterResult.innerHTML = '';
        return;
    }

    const result = convertUnit(value, from, to);

    if (result === null) {
        converterResult.innerHTML = '<div class="result-error">無法轉換此單位組合</div>';
    } else {
        converterResult.innerHTML = `
            <div class="result-display">
                ${value} ${from} = ${result} ${to}
            </div>
        `;
    }
}

// 初始化應用
document.addEventListener('DOMContentLoaded', init);
