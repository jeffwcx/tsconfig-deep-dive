/**
 * noFallthroughCasesInSwitch switch中不允许fallthrough，默认false
 * 个人认为fallthrough这个特性应该予以保留，因为switch使用较少，且fallthrough有时候挺好用的
 */

const value: number = 6;

switch (value) {
  case 0:
   console.log('0');
  case 1:
  case 2:
    console.log(value);
    break;
  default:
    break;
}
