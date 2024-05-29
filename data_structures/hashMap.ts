export default class hashMap {
  arr: any[];
  private numberOfItems: number;
  constructor() {
    this.arr = new Array(3);
    this.numberOfItems = 0;
  }
  protected multiplyPrimeInt = (int: number): number => int * 2 + 1;
  protected resize = () => {
    const newArr = new Array(this.multiplyPrimeInt(this.numberOfItems));
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
  protected hashStringToInt = (key: string, arrLength: number): number => {
    let hash = 17;
    // Creating a hash
    // for each character in the key
    for (let i = 0; i < key.length; i++) {
      hash = (13 * hash * key.charCodeAt(i)) % arrLength;
    }
    return hash;
  };

  getItem = (key: string) => {
    const idx = this.hashStringToInt(key, this.arr.length);
    if (!this.arr[idx]) {
      return null;
    }
    const res = this.arr[idx].find((x: string) => x[0] === key)[1];
    return res;
  };

  setItem = (key: string, value: any) => {
    this.numberOfItems++;
    const loadFactor = this.numberOfItems / this.arr.length;
    if (loadFactor > 0.8) {
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
