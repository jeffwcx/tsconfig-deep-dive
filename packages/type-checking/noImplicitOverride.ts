/**
 * noImplicitOverride 是否禁止隐式覆盖，默认为false
 * 建议设置为true
 */

class Device {
  setup() {
    console.log('useless')
  }
}

class PC extends Device {
  // ts4.3时引入了override
  override setup() {     
    console.log('loading windows')
  }
}

class Phone extends Device {
  // 当noImplicitOverride=true时，这样的改写会报错
  setup() {
    console.log('loading iOS');
  }
}