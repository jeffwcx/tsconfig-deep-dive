
// 箭头函数在es6中才得到支持
const arrowFunc = () => {
  console.log('arrow function is supported in es6');
};


class RunTimePrivateField {
  // 运行时私有属性在es2022中才得到支持
  #internal = 'private';
  useInternal() {
    console.log(this.#internal);
  }
}