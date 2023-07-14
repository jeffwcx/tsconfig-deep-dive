## Target

Target表示TS生成的目标js版本代码

可选值有es3(5.0中已废弃), es5(默认值), es6, es2015-2022, esnext

这里需要注意的是esnext，esnext指的是*当前所用ts版本能支持的最高的es版本*，所以一旦你的ts版本升级了，那么生成es版本将会发生变化

Target通常和Lib搭配使用


