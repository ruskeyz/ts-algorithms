const mapping = [
  {
    number: 1,
    roman: "I",
  },
  {
    number: 4,
    roman: "IV",
  },
  {
    number: 5,
    roman: "V",
  },
  {
    number: 9,
    roman: "IX",
  },
  {
    number: 10,
    roman: "X",
  },
];

export default function transformNumberIntoRoman(input: number): string {
  let res = "";
  while (input > 0) {
    let key = 0;
    let value = "";
    for (const val of mapping) {
      if (val.number <= input && val.number > key) {
        key = val.number;
        value = val.roman;
      }
    }
    input -= key;
    res += value;
  }
  return res;
}
