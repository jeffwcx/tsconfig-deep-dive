# allowImportingTsExtensions

一般情况下，我们这样引入ts文件
```ts
// moduleA.ts
export const vars = 1;

// index.ts
import { vars } from './moduleA';
```

但若是allowImportingTsExtensions设为true（当且仅当emitDeclarationOnly=true或是noEmit=true时才能设为true），则我们可以这样引入

```ts
import { vars } from './moduleB.ts';
```

不过，这个开关都只在不输出js文件的情况下使用，具体有什么使用场景呢？