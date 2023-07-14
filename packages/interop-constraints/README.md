## isolatedModules

由于ts的转移可能是通过babel等其他工具，但是这些工具的转义往往一次只解析一个文件，这就意味着它们不能依靠整个类型系统来转移代码，这就导致了TS的某些特性无法使用

开启`isolatedModules`选项后，TS中的某些特性就不能使用了，以下是一些会出问题的场景：

+ 非值标识符的导出
```ts
import { someType, someFunction } from "someModule";
someFunction();
export { someType, someFunction };
```
不能导出`someType`，因为它是一个类型

+ 非模块文件

没有`import`/`export`的文件（非模块文件）会出错

+ `const enum`的引用
```ts
declare const enum Numbers {
  Zero = 0,
  One = 1,
}
console.log(Numbers.Zero + Numbers.One);
```
这种场景将无法使用


在Node项目中，我们不应该开启此选项，因为我们可以使用tsc完整编译代码，但是在前端场景中，我们往往使用babel，swc这些工具来转义TS，所以在前端场景我们应该开启此选项

## esModuleInterop


## allowSyntheticDefaultImports
Allow 'import x from y' when a module doesn't have a default 


## forceConsistentCasingInFileNames

强制文件名大小写的一致性，默认此选项开启

## preserveSymlinks

此选项与Node中的选项功能一致，将包和模块的应用相对于软链地址而不是软链指向的真实地址

此选项不建议开启，因为大多数情况下，我们不在源码中使用软链，其主要应用场景是~~安装本地npm模块~~时，具体可查看[--preserve-symlinks](https://nodejs.org/api/cli.html#--preserve-symlinks)


