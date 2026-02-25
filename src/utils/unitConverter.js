/**
 * 單位轉換邏輯層
 * 支持常見廚房單位的相互轉換
 */

// 所有支持的單位及其轉換基準（以毫升為基準）
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
  
  // 重量單位（克為基準）- 需要特殊處理
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
export const getUnitCategory = (unit) => {
  for (const [category, units] of Object.entries(UNIT_CATEGORIES)) {
    if (units.includes(unit)) {
      return category;
    }
  }
  return null;
};

/**
 * 將一個單位的值轉換到另一個單位
 * @param {number} value - 原始值
 * @param {string} fromUnit - 原始單位
 * @param {string} toUnit - 目標單位
 * @returns {number|null} - 轉換後的值，如果單位不相容則返回 null
 */
export const convertUnit = (value, fromUnit, toUnit) => {
  if (!value || value <= 0) return 0;
  
  // 如果單位相同，直接返回
  if (fromUnit === toUnit) {
    return value;
  }
  
  // 檢查單位是否存在
  if (!UNIT_CONVERSIONS[fromUnit] || !UNIT_CONVERSIONS[toUnit]) {
    console.warn(`Unknown unit: ${fromUnit} or ${toUnit}`);
    return null;
  }
  
  // 檢查單位分類是否相同（不能混淆體積和重量）
  const fromCategory = getUnitCategory(fromUnit);
  const toCategory = getUnitCategory(toUnit);
  
  if (fromCategory !== toCategory) {
    console.warn(`Cannot convert between ${fromCategory} and ${toCategory}`);
    return null;
  }
  
  // 執行轉換
  const baseValue = value * UNIT_CONVERSIONS[fromUnit];
  const result = baseValue / UNIT_CONVERSIONS[toUnit];
  
  // 四捨五入到合理的小數位數
  return Math.round(result * 1000) / 1000;
};

/**
 * 獲取某個單位分類中的所有可用單位
 * @param {string} category - 分類名稱 ('volume' 或 'weight')
 * @returns {array} - 單位列表
 */
export const getUnitsByCategory = (category) => {
  return UNIT_CATEGORIES[category] || [];
};

/**
 * 獲取所有可用的單位分類
 * @returns {array} - 分類列表
 */
export const getAllUnitCategories = () => {
  return Object.keys(UNIT_CATEGORIES);
};

/**
 * 批量轉換食材列表中的所有單位
 * @param {array} ingredients - 食材列表
 * @param {object} conversionMap - 轉換映射 {食材名稱: 目標單位}
 * @returns {array} - 轉換後的食材列表
 */
export const convertIngredients = (ingredients, conversionMap) => {
  return ingredients.map(ingredient => {
    const targetUnit = conversionMap[ingredient.name];
    if (!targetUnit) {
      return ingredient;
    }
    
    const convertedAmount = convertUnit(
      ingredient.amount,
      ingredient.unit,
      targetUnit
    );
    
    if (convertedAmount === null) {
      return ingredient; // 轉換失敗，返回原始值
    }
    
    return {
      ...ingredient,
      amount: convertedAmount,
      unit: targetUnit,
      originalAmount: ingredient.amount,
      originalUnit: ingredient.unit,
    };
  });
};

export default {
  convertUnit,
  getUnitCategory,
  getUnitsByCategory,
  getAllUnitCategories,
  convertIngredients,
};
