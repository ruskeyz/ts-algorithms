import { readFileSync } from "fs";

export type WordDict = Record<string, Record<string, number>>;

export function buildWordDict(data: string): WordDict {
  const cleanedData = data
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const wordsArr = cleanedData.split(" ");

  const wordDict: WordDict = {};

  if (wordsArr.length <= 1) {
    return wordDict;
  }

  for (let index = 0; index < wordsArr.length - 1; index++) {
    const currWord = wordsArr[index];
    const nextWord = wordsArr[index + 1];
    if (!(currWord in wordDict)) {
      wordDict[currWord] = {};
    }
    if (!(nextWord in wordDict[currWord])) {
      wordDict[currWord][nextWord] = 0;
    }
    wordDict[currWord][nextWord] += 1;
  }

  return wordDict;
}

if (require.main === module) {
  const data: string = readFileSync("shakespeare.txt", "utf-8");
  const wordDict = buildWordDict(data);

  let currWord = "the";
  // repeat the most likely word after the 20 times
  for (let i = 0; i < 20; i++) {
    // given word, output most likely word
    if (!wordDict[currWord]) {
      break;
    }
    let mostLikelyWord = "";
    let mostLikeWordOccurances = -Infinity;
    for (const [wordCandidate, wordCandidateOccuranceCount] of Object.entries(
      wordDict[currWord],
    )) {
      //find max occurance
      if (wordCandidateOccuranceCount >= mostLikeWordOccurances) {
        mostLikeWordOccurances = wordCandidateOccuranceCount;
        mostLikelyWord = wordCandidate;
      }
    }
    currWord = mostLikelyWord;
    process.stdout.write(" " + currWord);
  }
}
