"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _RunTimePrivateField_internal;
// 箭头函数在es6中才得到支持
const arrowFunc = () => {
    console.log('arrow function is supported in es6');
};
class RunTimePrivateField {
    constructor() {
        // 运行时私有属性在es2022中才得到支持
        _RunTimePrivateField_internal.set(this, 'private');
    }
    useInternal() {
        console.log(__classPrivateFieldGet(this, _RunTimePrivateField_internal, "f"));
    }
}
_RunTimePrivateField_internal = new WeakMap();
