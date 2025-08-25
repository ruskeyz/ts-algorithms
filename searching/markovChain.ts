import { readFileSync } from "fs";

let data: string = readFileSync("shakespeare.txt", "utf-8");
data = data.toLowerCase();
data = data
  .replace(/[^\w\s]/g, " ")
  .replace(/\s+/g, " ")
  .trim();

const wordsArr = data.split(" ");

let wordDict: Record<string, Record<string, number>> = {};

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

let currWord = "the";
// repeat the most likely word after the 20 times
for (let i = 0; i < 20; i++) {
  // given word, output most likely word
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
