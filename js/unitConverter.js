/**
 * 單位轉換邏輯
 * 支持常見廚房單位的相互轉換
 */

// 所有支持的單位及其轉換基準
const UNIT_CONVERSIONS = {
    // 體積單位（毫升為基準）
    'ml': 1,
    'mL': 1,
    'l': 1000,
    'L': 1000,
    'cup': 236.588,
    'tbsp': 14.787, // 湯匙
    'tsp': 4.929, // 茶匙
    'fl oz': 29.574, // 液體盎司
    'pint': 473.176, // 品脫
    
    // 重量單位（克為基準）
    'g': 1,
    'kg': 1000,
    'oz': 28.35, // 盎司
    'lb': 453.592, // 磅
    'mg': 0.001,
};

// 單位分類
const UNIT_CATEGORIES = {
    volume: ['ml', 'mL', 'l', 'L', 'cup', 'tbsp', 'tsp', 'fl oz', 'pint'],
    weight: ['g', 'kg', 'oz', 'lb', 'mg'],
};

/**
 * 獲取單位分類
 * @param {string} unit - 單位名稱
 * @returns {string|null} - 單位分類 ('volume', 'weight') 或 null
 */
function getUnitCategory(unit) {
    for (const [category, units] of Object.entries(UNIT_CATEGORIES)) {
        if (units.includes(unit)) {
            return category;
        }
    }
    return null;
}

/**
 * 將一個單位的值轉換到另一個單位
 * @param {number} value - 原始值
 * @param {string} fromUnit - 原始單位
 * @param {string} toUnit - 目標單位
 * @returns {number|null} - 轉換後的值
 */
function convertUnit(value, fromUnit, toUnit) {
    if (!value || value <= 0) return 0;
    
    if (fromUnit === toUnit) {
        return value;
    }
    
    if (!UNIT_CONVERSIONS[fromUnit] || !UNIT_CONVERSIONS[toUnit]) {
        console.warn(`Unknown unit: ${fromUnit} or ${toUnit}`);
        return null;
    }
    
    const fromCategory = getUnitCategory(fromUnit);
    const toCategory = getUnitCategory(toUnit);
    
    if (fromCategory !== toCategory) {
        console.warn(`Cannot convert between ${fromCategory} and ${toCategory}`);
        return null;
    }
    
    const baseValue = value * UNIT_CONVERSIONS[fromUnit];
    const result = baseValue / UNIT_CONVERSIONS[toUnit];
    
    return Math.round(result * 1000) / 1000;
}

/**
 * 獲取某個單位分類中的所有可用單位
 * @param {string} category - 分類名稱
 * @returns {array} - 單位列表
 */
function getUnitsByCategory(category) {
    return UNIT_CATEGORIES[category] || [];
}

/**
 * 獲取所有可用的單位分類
 * @returns {array} - 分類列表
 */
function getAllUnitCategories() {
    return Object.keys(UNIT_CATEGORIES);
}

/**
 * 獲取所有支持的單位
 * @returns {array} - 所有單位的列表
 */
function getAllUnits() {
    return Object.keys(UNIT_CONVERSIONS);
}
