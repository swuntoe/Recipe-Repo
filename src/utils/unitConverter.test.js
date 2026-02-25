import { convertUnit, getUnitCategory, getUnitsByCategory, convertIngredients } from './unitConverter.js';

// 測試單位轉換
console.log('=== 單位轉換測試 ===\n');

// 體積測試
console.log('體積轉換:');
console.log(`250 ml → cup: ${convertUnit(250, 'ml', 'cup')} cup`);
console.log(`1 cup → ml: ${convertUnit(1, 'cup', 'ml')} ml`);
console.log(`1 tbsp → tsp: ${convertUnit(1, 'tbsp', 'tsp')} tsp`);

// 重量測試
console.log('\n重量轉換:');
console.log(`500 g → kg: ${convertUnit(500, 'g', 'kg')} kg`);
console.log(`1 lb → g: ${convertUnit(1, 'lb', 'g')} g`);
console.log(`100 g → oz: ${convertUnit(100, 'g', 'oz')} oz`);

// 單位分類測試
console.log('\n單位分類:');
console.log(`ml 分類: ${getUnitCategory('ml')}`);
console.log(`cup 分類: ${getUnitCategory('cup')}`);
console.log(`g 分類: ${getUnitCategory('g')}`);

// 獲取分類中的所有單位
console.log('\n體積單位: ', getUnitsByCategory('volume'));
console.log('重量單位: ', getUnitsByCategory('weight'));

// 食材批量轉換測試
console.log('\n=== 食材批量轉換測試 ===\n');

const ingredients = [
  { name: '牛奶', amount: 250, unit: 'ml' },
  { name: '麵粉', amount: 200, unit: 'g' },
  { name: '油', amount: 2, unit: 'tbsp' }
];

const conversionMap = {
  '牛奶': 'cup',
  '麵粉': 'oz',
  '油': 'ml'
};

const converted = convertIngredients(ingredients, conversionMap);
console.log('原始食材:', ingredients);
console.log('轉換後:', converted);

console.log('\n✅ 所有測試完成！');
