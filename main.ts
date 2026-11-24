import { writeFileSync, mkdirSync } from "node:fs";

const word: string = "Practice";

const chars: number = [...word].length;
if (chars < 1 || chars > 24) {
  throw new Error(`word must be 1-24 characters, got ${chars}`);
}
if (/\s/.test(word)) {
  throw new Error("word must be a single word with no whitespace");
}
if (!/^[A-Za-z]+$/.test(word)) {
  throw new Error("word must contain letters only");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
