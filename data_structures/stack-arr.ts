export default class Stack<T> {
  array: T[];
  constructor() {
    this.array = [];
  }

  peek() {
    if (this.array.length > 0) {
      return this.array;
    } else return "empty array";
  }

  length() {
    if (this.array.length > 0) {
      return this.array.length;
    } else return "empty array";
  }
  push(value: T) {
    this.array.unshift(value);
  }

  pop() {
    this.array.shift();
  }
}
