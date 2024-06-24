import { text } from "stream/consumers";
import Trie from "../trie";

function makeid(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
describe("Trie", () => {
  test("It inserts chars correctly", () => {
    const t = new Trie<string>();
    for (let stringLength = 0; stringLength < 20; stringLength++) {
      for (let i = 0; i < 1000; i++) {
        const k = makeid(stringLength);
        const v = makeid(stringLength);
        t.set(k, v);
        expect(t.get(k)).toStrictEqual(v);
      }
    }
  });
  test("it deletes non-linked chars correctly", () => {
    const trie = new Trie();
    trie.set("google", "1234");
    trie.delete("404");
    expect(trie.get("google")).toBe("1234");
    trie.delete("goo");
    expect(trie.get("google")).toBe("1234");
    trie.delete("google");
    expect(trie.get("google")).toBeNull();
  });
  test("it deletes linked chars correctly", () => {
    const trie = new Trie();
    trie.set("google", "1234");
    trie.set("googles", "456");
    trie.delete("google");
    expect(trie.get("google")).toBeNull();
    expect(trie.get("googles")).toStrictEqual("456");
  });
});
