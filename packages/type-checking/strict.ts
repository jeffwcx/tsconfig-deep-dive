/**
 * strict 标志，当你开启strict: true时意味着你引入了一系列的严格标志
 * 默认值为false，这里建议务必开启这个选项
 */

/**
 * strictBindCallApply
 */

function fn1(value: string) {
  return parseInt(value);
}

// strictBindCallApply=true时严格检查apply及call调用参数
fn1.apply(undefined, ["10"]);
fn1.apply(undefined, [false]);
fn1.call(undefined, [null]);

/**
 * strictFunctionTypes
 */

function fn2(value: string) {
  console.log(value);
}

type StringOrNumberFunc = (ns: string | number) => void;

// 严格检查 `function语法`
let func: StringOrNumberFunc = fn2;
 

type Methodish = {
  func(x: string | number): void;
};
// 对`方法语法`不进行严格检测（DOM API中大量存在这种不安全的方法，所以TS团队做了妥协）
const m: Methodish = {
  func: fn2,
};
m.func(10);

type People = {
  name: string;
  age: number;
  language: string;
}
type Chinese = People & {
  language: 'CN';
}

let someone: People = {
  name: 'A',
  age: 29,
  language: 'English'
};

let wang: Chinese = {
  name: 'B',
  age: 27,
  language: 'CN',
};

// 子类型赋给父类型 协变
someone = wang;

let printLang: (p: People) => void;
printLang = (p) => {
  console.log(p.language);
};

let printLangOfChinese: (p: Chinese) => void;
printLangOfChinese = (p) => {
  if (p.language === 'CN') {
    console.log(p.language);
  }
};

// 父类型赋给子类型 逆变
printLangOfChinese = printLang;
// 当关闭strictFunctionTypes时，子类可以赋给父类，可以进行逆变也可以进行协变
printLang = printLangOfChinese;


/**
 * strictNullChecks
 */
declare const loggedInUsername: string;
 
const users = [
  { name: "Oby", age: 12 },
  { name: "Heera", age: 32 },
];
 
const loggedInUser = users.find((u) => u.name === loggedInUsername);
// 严格检测是否存在
console.log(loggedInUser.age);

/**
 * strictPropertyInitialization
 */

class User {
  name: string;
  email: string; // 若email未在构造器中赋值则报错
  address?: string;
  constructor(name: string) {
    this.name = name;
  }
}

/**
 * useUnknownInCatchVariables
 */

try {
  new URL('https://darkernel.com');
} catch (error) {
  console.log(error.message); // useUnknownInCatchVariables=false error为any类型，这其实是不太安全的
  if (error instanceof Error) { // 还是需要做type guards
    console.log(error.message);
  }
}


/**
 * noImplicitAny（strict=true时，noImplicitAny=true）
 * 某些情况下，代码可能没有类型注解，这里TS会将类型设为any，当noImplicitAny开启时，这种隐式any就会报错
 */

function fn3(s) { // noImplicitAny: false时就不会报错
  console.log(s.subtr(3));
}
fn3(42);

/**
 * noImplicitThis (strict=true时，noImplicitThis=true）
 */
class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getAreaFunction() {
    return function () {
      return this.width * this.height; // noImplicitThis = true时，报错，外部得到这个函数时，this没有明确指向
    };
  }
  getUnknownFunction() {
    return () => {
      return this.width + this.height; // this有了明确的指向，不会报错
    };
  }
}

/**
 * alwaysStrict (strict=true时，alwaysStrict=true）
 * 使得输出文件中总有“use strict”（ES5就已引入的严格模式）
 * 建议一直设为true
 */

