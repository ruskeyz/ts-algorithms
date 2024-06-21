import HashMap from "../hash-map";
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
interface Map<T> {
  set: (k: string, v: T) => void;
  get: (k: string) => T | null;
}
describe("Trie", () => {
  test("It inserts correctly", () => {
    const storages: Array<Map<string>> = [
      new Trie<string>(),
      // new HashMap<string, string>(),
    ];
    for (const keyValueStorage of storages) {
      for (let stringLength = 0; stringLength < 20; stringLength++) {
        for (let i = 0; i < 1000; i++) {
          const k = makeid(stringLength);
          const v = makeid(stringLength);
          keyValueStorage.set(k, v);
          expect(keyValueStorage.get(k)).toStrictEqual(v);
        }
      }
    }
  });
});
