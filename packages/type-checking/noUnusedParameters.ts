/**
 * noUnusedParameters 是否对函数中没有被使用的参数报错，默认为false
 * 个人建议不用开启
 */


function fn(unusedVars: string) {
  const a = arguments[0]; // 实际我使用了
  return {a};
}