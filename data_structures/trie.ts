class TrieNode<N> {
  value: N;
  //TODO Hashmap switch
  children: Map<string, TrieNode<N>>;
  endOfWord: boolean;
  constructor(v: N) {
    this.value = v;
    this.children = new Map();
    this.endOfWord = false;
  }
}

export default class Trie<T> {
  head: TrieNode<T | null>;
  constructor() {
    this.head = new TrieNode<T | null>(null);
  }
  get(k: string): T | null {
    let curr: TrieNode<T | null> = this.head;
    for (let i = 0; i < k.length; i++) {
      curr = curr?.children.get(k[i])!;
      if (!curr) {
        return null;
      }
    }
    return curr?.value ?? null;
  }
  set(k: string, v: T | null): void {
    let current: TrieNode<T | null> = this.head;
    for (let i = 0; i < k.length; i++) {
      let nextNode = current.children.get(k[i]);
      if (!nextNode) {
        const newNode = new TrieNode<T | null>(null);
        current.children.set(k[i], newNode);
        nextNode = newNode;
      }
      current = nextNode;
    }
    current.endOfWord = true;
    current.value = v;
  }

  private deleteNode(
    current: TrieNode<T | null>,
    k: string,
    idx: number,
  ): boolean {
    if (k.length === idx) {
      if (!current.endOfWord) {
        return false;
      }
      current.endOfWord = false;
      current.value = null;
      // if current has no nextNode -> return true
      return current.children.size === 0;
    }
    const ch = k.charAt(idx);

    const nextNode = current.children.get(ch);
    if (!nextNode) {
      return false;
    }
    // if true, remove char and return true if no more nextNodes left
    const shouldDeleteCurrNode = this.deleteNode(nextNode, k, idx + 1);
    if (shouldDeleteCurrNode) {
      current.children.delete(ch);
      return current.children.size === 0;
    }
    return false;
  }
  delete(k: string): void {
    this.deleteNode(this.head, k, 0);
  }
}
