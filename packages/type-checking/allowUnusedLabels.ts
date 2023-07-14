/**
 * allowUnusedLabels 默认为undefined，无用的标签，编辑器提示警告
 * 当设为true时，无用的标签会被忽略；当设为false时，会出现编译错误
 * 由于在我有限的编程生涯中，没有在js中使用标签，所以让我们忽略这个选项
 */

function verifyAge(age: number) {
  // Forgot 'return' statement
  if (age > 18) {
    verified: true;
  }
}