import HashMap from "./hash-map";

class TrieNode<N> {
  value: N;
  children: HashMap<string, TrieNode<N>>;
  constructor(v: N) {
    this.value = v;
    this.children = new HashMap();
  }
}

export default class Trie<T> {
  head: TrieNode<T | null>;
  constructor() {
    this.head = new TrieNode<T | null>(null);
  }
  get(k: string): T | null {
    let curr: TrieNode<T | null> | null = this.head;
    for (let i = 0; i < k.length; i++) {
      curr = curr?.children.getItem(k[i]);
      if (!curr) {
        return null;
      }
    }
    return curr?.value ?? null;
  }
  set(k: string, v: T | null): void {
    let current: TrieNode<T | null> = this.head;
    for (let i = 0; i < k.length; i++) {
      let nextNode = current.children.getItem(k[i]);
      if (!nextNode) {
        const newNode = new TrieNode<T | null>(null);
        current.children.setItem(k[i], newNode);
        nextNode = newNode;
      }
      current = nextNode;
    }
    current.value = v;
  }
  // delete(k: string): void {
  //   let current: TrieNode<T | null> | null = this.head;
  //   for (let i = 0; i < k.length; i++) {
  //     if (!current) {
  //       return;
  //     }
  //   }
  // }
}

const trie = new Trie();
trie.set("google", "1234");
trie.set("googles", "66");
console.log(trie.get("google"), "true");
console.log(trie.get("googles"), "true");
console.log(trie.get("goo"), "not");
// console.log(trie);
