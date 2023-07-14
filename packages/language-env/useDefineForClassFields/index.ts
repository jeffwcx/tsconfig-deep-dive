class Base {
  value: number | string;

  set data(value: string) {
    console.log('data changed to ' + value);
  }

  constructor(value: number | string) {
    this.value = value;
  }
}

class Derived extends Base {
  // 当使用 `useDefineForClassFields` 时 `value` 将在调用 `super()` 后
  // 被初始化为 `undefined`，即使你传入了正确的 `value` 值
  value: number;

  // 当使用 `useDefineForClassFields` 时
  // `console.log` 将不再被触发
  data = 10;

  constructor(value: number) {
    super(value);
  }
}

const derived = new Derived(5);