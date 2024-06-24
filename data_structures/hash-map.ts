export default class HashMap<K extends string, V> {
  arr: Array<Array<[K, V]> | null>;
  private length: number;
  constructor() {
    this.arr = new Array(3).fill(null);
    this.length = 0;
  }
  private multiplyPrimeInt = (int: number): number => int * 2 + 1;
  private resize = () => {
    const newArr = new Array(this.multiplyPrimeInt(this.length)).fill(null);
    this.arr.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = this.hashStringToInt(key, newArr.length);
          if (newArr[idx]) {
            newArr[idx].push([key, value]);
          } else {
            newArr[idx] = [[key, value]];
          }
        });
      }
    });
    this.arr = newArr;
  };
  private hashStringToInt = (key: K, arrLength: number): number => {
    let hash = 17;
    for (let i = 0; i < key.length; i++) {
      hash = (13 * hash + key.charCodeAt(i)) % arrLength;
    }
    return hash;
  };

  get = (key: K): V | null => {
    const idx = this.hashStringToInt(key, this.arr.length);
    if (!this.arr[idx]) {
      return null;
    }
    const res = this.arr[idx]?.find((x) => x[0] === key);
    return res ? res[1] : null;
  };

  set = (key: K, value: V) => {
    this.length++;
    const resizeRatio = this.length / this.arr.length;
    if (resizeRatio > 0.8) {
      this.resize();
    }
    const idx = this.hashStringToInt(key, this.arr.length);
    if (this.arr[idx]) {
      this.arr[idx]?.push([key, value]);
    } else {
      this.arr[idx] = [[key, value]];
    }
    return value;
  };
  //TODO
  size = () => {};
  delete = () => {};
}
