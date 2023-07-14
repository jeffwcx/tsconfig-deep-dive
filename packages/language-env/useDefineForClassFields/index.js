"use strict";
class Base {
    set data(value) {
        console.log('data changed to ' + value);
    }
    constructor(value) {
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.value = value;
    }
}
class Derived extends Base {
    constructor(value) {
        super(value);
        // 当使用 `useDefineForClassFields` 时
        // `console.log` 将不再被触发
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 10
        });
    }
}
const derived = new Derived(5);
