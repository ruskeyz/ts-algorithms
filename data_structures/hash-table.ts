interface MapType<K, V> {
  key: K;
  value: V;
}
export default class HashTable<K extends string, V> {
  data: MapType<K, V>[][];
  length: number;
  capacity: number;
  constructor() {
    this.capacity = 3;
    this.data = new Array(this.capacity).fill(null);
    this.length = 0;
  }
  private hash(key: K, capacity: number): number {
    let hash = 5381;
    //https://github.com/darkskyapp/string-hash
    for (let i = 0; i < key.length; i++) {
      hash = ((hash * 33) ^ (key.charCodeAt(i) >>> 0)) % (capacity - 1);
    }
    return hash;
  }

  private changeCapacity() {
    const newArr = new Array(this.capacity).fill(null);
    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i];
      if (!item || item.length === 0) {
        continue;
      }
      item.map((subItem) => {
        let key = subItem.key;
        let value = subItem.value;
        const idx = this.hash(key, newArr.length);
        if (!newArr[idx]) {
          //create
          newArr[idx] = [{ key, value }];
        }
        //push
        newArr[idx].push({ key, value });
      });
    }
    this.capacity *= 2;
    this.data = newArr;
  }

  get(key: K) {
    if (this.length === 0) {
      return null;
    }
    const idx = this.hash(key, this.capacity);
    if (!this.data[idx]) {
      return null;
    }
    const res = this.data[idx].find((x) => x && x.key === key);
    return res ? res.value : null;
  }

  set(key: K, value: V) {
    // check capacity
    if (this.length >= this.capacity / 2) {
      this.changeCapacity();
    }
    let idx = this.hash(key, this.capacity);

    if (!this.data[idx]) {
      //create
      this.data[idx] = [];
      this.data[idx].push({ key, value });
      this.length++;
    }
    //rewrite
    let rewrite = this.data[idx].find((x) => x && x.key === key);
    if (rewrite) {
      rewrite.key = key;
      rewrite.value = value;
    } else {
      //add to arr
      this.data[idx].push({ key, value });
      this.length++;
    }
  }
  delete(key: K) {
    let idx = this.hash(key, this.capacity);

    if (!this.data[idx]) {
      return null;
    }
    const del = this.data[idx].filter((x) => x?.key !== key);
    this.data[idx] = del;
    this.length--;
    return del;
  }
}

const ht = new HashTable();
ht.set("abc", 2);
ht.set("abc", 22);
ht.set("ddd", 4);
ht.set("news", 3);
ht.set("dddd", 4);
ht.delete("dddd");
console.log(ht.get("abc"), "here abc");
console.log(ht.get("ddd"), "here ddd");
console.log(ht.data);
console.log(ht.length);
