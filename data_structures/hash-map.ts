export default class HashMap<K extends string, V> {
  arr: any[];
  private length: number;
  constructor() {
    this.arr = new Array(3);
    this.length = 0;
  }
  private multiplyPrimeInt = (int: number): number => int * 2 + 1;
  private resize = () => {
    const newArr = new Array(this.multiplyPrimeInt(this.length));
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
    // Creating a hash
    for (let i = 0; i < key.length; i++) {
      hash = (13 * hash * key.charCodeAt(i)) % arrLength;
    }
    return hash;
  };

  getItem = (key: K) => {
    const idx = this.hashStringToInt(key, this.arr.length);
    if (!this.arr[idx]) {
      return null;
    }
    const res = this.arr[idx].find((x: string) => x[0] === key)[1];
    return res;
  };

  setItem = (key: K, value: V) => {
    this.length++;
    const resizeRatio = this.length / this.arr.length;
    if (resizeRatio > 0.8) {
      // double the array
      this.resize();
    }
    const idx = this.hashStringToInt(key, this.arr.length);
    if (this.arr[idx]) {
      this.arr[idx].push([key, value]);
    } else {
      this.arr[idx] = [[key, value]];
    }
    return this.arr[idx].find((x: string) => x[0] === key)[1];
  };
}
