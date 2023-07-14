
class A {
  #x!: string;
  constructor() {
    this.#x = 'hello'
  }
  print() {
    console.log(this.#x);
  }
}

new A();