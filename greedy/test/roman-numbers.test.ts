import transformNumberIntoRoman from "../roman-numbers";
const testData = [
  {
    number: 1,
    roman: "I",
  },
  {
    number: 2,
    roman: "II",
  },
  {
    number: 3,
    roman: "III",
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
    number: 6,
    roman: "VI",
  },
  {
    number: 7,
    roman: "VII",
  },
  {
    number: 8,
    roman: "VIII",
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

describe("Transform numbers into Roman numerals", () => {
  test("It transforms into Roman", () => {
    for (const val of testData) {
      expect(transformNumberIntoRoman(val.number)).toEqual(val.roman);
    }
  });
});
