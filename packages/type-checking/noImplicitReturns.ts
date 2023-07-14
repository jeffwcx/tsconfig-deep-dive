/**
 * noImplicitReturns 是否有隐式返回，默认为 false
 * 似乎不管是true还是false都不允许隐式返回
 */

function noImplicitReturns(a: number): boolean {
  if (a > 0) {
      return false;
  }
}
