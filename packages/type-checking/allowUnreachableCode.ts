/**
 * allowUnreachableCode 默认为undefined，触发警告
 * 设为true时，不会执行到的代码会被忽略
 * 设为false时，会产生编译错误
 * 由于各种bundler一般会进行treeshaking，所以在ts编译阶段报错是不必要的
 * 所以让我们忽略这个选项
 */

function allowUnreachableCode(n: number) {
  if (n > 5) {
    return true;
  } else {
    return false;
  }
  return true;
}