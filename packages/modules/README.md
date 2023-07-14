# Module

## module, moduleResolution
`module`及`moduleResolution`分别代表编译模块模式及模块解析模式


模块解析一般有两种方式，一种是`Classic`，一种是`Node`


## rootDir

rootDir的默认值很有意思，如果没有设置`composite`，其值为所有`no-declaration`ts文件的最长公共路径
rootDir也不会影响哪些文件成为编译的目标文件，通常我们通过`include`, `exclude`及`files`来选定编译文件


## baseUrl, paths

`baseUrl`主要设置了一个基础目录，让相对路径相对于它定义

`paths`定义了TS依赖解析路径，这种路径如果baseUrl定义了，则可以相对于它定义相对路径，常见例子如下：

```json
"paths": {
  "@/*": ["./src/*"]
}
```

## typeRoots, types

默认情况下，所有`node_modules`中所有`@types/*`包都会被包括在编译中，不过一旦设定了`typeRoots`，比如：
```json
{
  "compilerOptions": {
    "typeRoots": ["./typings", "./vendor/types"]
  }
}
```
那么只有`./typings`，`./vendor/types`下的包会被囊括

`types`包括在内的包，可以全局引用，不需要`import`，也没有自动引入建议，比如

```json
"types": ["node", "jest"]
```

这时我们可以直接在代码中使用 `process`, `expect`


## allowUmdGlobalAccess

允许Umd模块作为全局模块，一旦`allowUmdGlobalAccess` 设为true，则Umd模块不需要通过`import`导入

## moduleSuffixes

提供一系列模块后缀，用于解析模块
```json
{
  "compilerOptions": {
    "moduleSuffixes": [".ios", ".native", ""]
  }
}
```
当使用以下语句时
```ts
import * as foo from "./foo";
```
TS会从`./foo.ios.ts`, `./foo.native.ts`, `./foo.ts` 寻找该文件引入
注意定义`""`才会让ts去`./foo.ts`寻找

这个特性在React native项目中十分有用，因为可以针对不同的平台，定制不同的tsconfig，实现不同的文件引入

## allowImportingTsExtensions

refer to [allowImportingTsExtensions](./allowImportingTsExtensions/README.md)

## resolvePackageJsonExports, resolvePackageJsonImports (node16,nodenext,bundler)

`resolvePackageJsonExports`和`resolvePackageJsonImports`分别强制ts去读取`package.json`的`exports`和`imports`字段

这两个选项在`moduleResolution`为`node16`, `nodenext`, `bundler`时默认为true

## customConditions (node16,nodenext,bundler)

`package.json`中的`exports`用于定义不同模块的输出，可能有CommonJS版本，也可能有ESM版本，有通过`require`引入的，也有通过`import`引入的

```json
{
  "exports": {
    ".": {
      "my-condition": "./foo.mjs",
      "node": "./bar.mjs",
      "import": "./baz.mjs",
      "require": "./biz.mjs"
    }
  }
}

```
总之Node的`nested conditions`为我们提供了丰富的输出，满足了我们各种场景的使用

在ts中我们可以定义`customConditions`让ts考虑新的引入情况

```json
{
  "compilerOptions": {
    "target": "es2022",
    "moduleResolution": "bundler",
    "customConditions": ["my-condition"]
  }
}
```

所以这种定制情景具体有什么使用场景呢?

一个使用场景是在Monorepo中，每个包都导出`dev`模式，且该模式指向源码，然后在`tsconfig`中配置
```json
{
  "compilerOptions": {
    "customConditions": ["dev"]
  }
}
```
如此包A若依赖包B时，包B进行构建时，包A不会因为包B`dist`的删除而需要重新启动`TS language server`

## resolveJsonModule

能否解析JSON模块，默认是不能
建议开始此选项，挺常见的需求

## allowArbitraryExtensions

是否允许任意扩展
在TS5.0中如果一个`import`路径以扩展名结束，TS会去选中`{file basename}.d.{extension}.ts`这样格式的声明文件，例如

```ts
import styles from './app.css';
```
此时TS会尝试去寻找 `app.d.css.ts`声明文件
默认情况下，由于TS不认识`.css`会报错，但是如果有相应的bundler处理这样的扩展，则可以通过开启`allowArbitraryExtensions`使得TS去寻找
`app.d.css.ts`声明文件

## noResolve

默认情况下，TS会通过`import` 和 `<reference` 来解析文件，但是如果设置了`noResolve`, `<reference` 及`import`依赖将会失效

他有何应用场景呢？
// todo

## 