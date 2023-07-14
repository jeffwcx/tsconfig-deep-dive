function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype); 
}


// function log(
//   target: any,
//   context: ClassMethodDecoratorContext
// ) {
//   const methodName = String(context.name);
//   return function (this: any, ...args: any[]) {
//     console.log('logged', methodName);
//     return target.apply(this, args);
//   };
// }

function log<This, Args extends any[], Return>(
  target: any,
  propertyName:string,
  description: TypedPropertyDescriptor<(this: This, ...args: Args) => Return>,
) {
  let method = description.value;
  if (!method) return;
  description.value = function (this: This, ...args: Args) {
    console.log('logged', target, propertyName);
    return (method as (this: This, ...args: Args) => Return).apply(this, args);
  }
}

function param(_: Object, propertyKey: string | symbol, parameterIndex: number) {
  console.log('it is', propertyKey);
  console.log(arguments);
}

@sealed
class A {
  beGreat() {}
  @log hello(@param who: string): string {
    return who
  }
}