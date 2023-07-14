# lib 选项

lib选项一般在你的平台不支持完整的ES标准发挥作用

例如该运行平台支持完整的ES2021，但不支持完整的ES2022，但是又有`ESNext.Array`支持，则可以通过`lib`选项实现

```json
"target": "es2021",
"lib": ["ES2021", "ESNext.Array"],
```

若是设置`noLib` 为true，`lib`选项将会被忽略，这也意味着一些基本的接口(例如Array,Boolean,Function,IArguments)需要你自己实现

