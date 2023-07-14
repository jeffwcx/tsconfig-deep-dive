# useDefineForClassFields 默认值若target为es2022/esnext，则为true，否则为false

总的来说就是TC39委员会打算推翻社区内一直使用的class fields初始化使用的[[SET]]语义，转为[[DEFINE]]语义 (使用Object.defineProperty不触发隐式setter)

目前提案处于stage3，但是Chrome已经发布了基于[[DEFINE]]语义的实现，所以该迁移还是得迁移

对于我来说，很少在基类中使用getter, setter，所以还是支持[[DEFINE]]语义

吊诡的是Nest.js生成的项目目前的`target`是es2021，看来现在Nest.js项目不是很支持[[DEFINE]]语义，或者还在迁移中?

