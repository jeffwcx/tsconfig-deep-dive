# Emit

## declarationMap

将会生成 `.ts`和`.d.ts`之间的映射文件，主要是有利于编辑器使用`Go to Definition`时能直接跳转到源码
具体参见[index.js](./index.ts)，在vscode中可以点击可以直接转到[declarationMap/index.js](./declarationMap/index.ts)

子项目如果被其他项目引用时，建议开启此选项

## emitDeclarationOnly

只生成`declaration`文件，不生成JS，主要应用场景有两个：
+ 你使用其他转义器生成js
+ 你只是使用tsc生成`d.ts`

## sourceMap, inlineSourceMap

都是用于生成`.ts`和`.js`之间的映射，其中`sourceMap`会生成单独的`js.map`文件，而`inlineSourceMap`则在js文件中生成映射，这会导致js文件膨胀

## outFile, outDir

outFile会将所有文件合并为一个文件输出，类似bundler的功能，但它不能用于`module`为esm及CommonJS，只能用于module为`none`,`system`,`amd`

outDir就十分常见了，其规定了TS的输出地址

## removeComments

即在转义时将注释删除，默认为false
这个选项在开发库的时候十分有用，可以用以提示用户

## noEmit

开启后，不输出任何编译文件，TS仅作为`type-checker`

这个选项在开发前端项目时，十分常见。因为前端项目基本都是使用babel，swc这些转义器

## importHelpers

这个选项几乎是必选项了，如果不选会导致所谓的`“帮助代码”`过多

其模式也很简单，即安装`tslib`然后再每个需要`帮助函数`的文件中,`require('tslib')`即可

## downlevelIteration

开启之后，TS会使用`Symbol.iterator`(如果其存在，不管是native还是polyfill)来更准确地模拟ES6的行为

在target为ES5时可以考虑开启

## sourceRoot, mapRoot

## inlineSources

使sourceMap中包含源码内容

如果是`sourceMap`为true，那么其生成的映射文件中会有sourceContent属性，其包含源码

如果是`inlineSourceMap`为true，则js末尾的comment包含的映射数据(base64)同样包含源码

## emitBOM

为输出文件头部生成[BOM](https://en.wikipedia.org/wiki/Byte_order_mark)，只有少数runtime需要，一般情况下不需考虑，默认也为false

## newLine

指定输出行结束符

## stripInternal

跳过`@internal`注释的语句

```ts
/**
 * Days available in a week
 * @internal
 */
export const daysInAWeek = 7;
 
/** Calculate how much someone earns in a week */
export function weeklySalary(dayRate: number) {
  return daysInAWeek * dayRate;
}
```

若不开启`stripInternal`，输出结果如下
```ts
/**
 * Days available in a week
 * @internal
 */
export declare const daysInAWeek = 7;
/** Calculate how much someone earns in a week */
export declare function weeklySalary(dayRate: number): number;
```

若开启`stripInternal`，则输出结果如下
```ts
/** Calculate how much someone earns in a week */
export declare function weeklySalary(dayRate: number): number;
```


## noEmitHelpers

这个选项可以让开发者实现自己的`helper`函数，而不是用官方的`importHelper`，即在该选项开启时，所有`helper`函数不再生成


## noEmitOnError

如果有错误，那就不输出js等文件，默认是false

## preserveConstEnums

是否保留`const enums`的完整实现到js中，在`isolatedModules`模块中，自动开启该特性

`const enums`这个特性如果保留可以帮助节省内存，比如下面这个实现
```ts
const enum Album {
  JimmyEatWorldFutures = 1,
  TubRingZooHypothesis = 2,
  DogFashionDiscoAdultery = 3,
}
 
const selectedAlbum = Album.JimmyEatWorldFutures;
if (selectedAlbum === Album.JimmyEatWorldFutures) {
  console.log("That is a great choice.");
}
```
将会转换为
```js
var Album;
(function (Album) {
    Album[Album["JimmyEatWorldFutures"] = 1] = "JimmyEatWorldFutures";
    Album[Album["TubRingZooHypothesis"] = 2] = "TubRingZooHypothesis";
    Album[Album["DogFashionDiscoAdultery"] = 3] = "DogFashionDiscoAdultery";
})(Album || (Album = {}));
const selectedAlbum = Album.JimmyEatWorldFutures;
if (selectedAlbum === Album.JimmyEatWorldFutures) {
    console.log("That is a great choice.");
}
```
但是如果没有此选项，则只会输出

```js
const selectedAlbum = 1;
if (selectedAlbum === 1) {
    console.log("That is a great choice.");
}
```
但是`const enums`也不是没有缺陷

假设您导出了`Album`，那么`d.ts`文件将会输出`declare const enums`
```ts
export declare const enum Album {
    JimmyEatWorldFutures = 1,
    TubRingZooHypothesis = 2,
    DogFashionDiscoAdultery = 3
}
```

此时如果其他模块是`isolatedModules`，那么此枚举导出将无法使用

解决方案有什么呢？

+ 使用eslint禁止使用`const enums`
+ 不导出您的`decalre const enums`，开启`preserveConstEnums`后，通过一定的tricky转义手段，将输出的类型定义从
```ts
export declare const enum Album {
    JimmyEatWorldFutures = 1,
    TubRingZooHypothesis = 2,
    DogFashionDiscoAdultery = 3
}
```
转为
```ts
export const enum Album {
    JimmyEatWorldFutures = 1,
    TubRingZooHypothesis = 2,
    DogFashionDiscoAdultery = 3
}
```

## declarationDir

定义类型文件输出地址


## 

