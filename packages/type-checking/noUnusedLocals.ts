/**
 * noUnusedLocals 对于未使用的局部变量是否报错，默认为false
 * 建议设为true
 */

function noUnusedLocals() {
  const a = 1;
  const b = 'hello';
  return { b };
}