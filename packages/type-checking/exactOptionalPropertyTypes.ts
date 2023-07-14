/**
 * exactOptionalPropertyTypes 对于属性中`?`处理将会更加严格，默认是false
 * 我建议开启这个选项
 */

interface UserDefaults {
  // The absence of a value represents 'system'
  colorThemeOverride?: "dark" | "light";
}

const getUserSettings: () => UserDefaults = () => ({});
const settings1 = getUserSettings();
settings1.colorThemeOverride = "dark";
settings1.colorThemeOverride = "light";
// 当exactOptionalPropertyTypes=true时，下面将会报错
settings1.colorThemeOverride = undefined;

// 如下，有设置undefined和没有设置undefined，是很不一样的
const obj1 = { a: undefined, b: 'a' };
const obj2 = { b: 'a' };

console.log(Object.keys(obj1)); // ['a', 'b']
console.log(Object.keys(obj2)); // ['b']
