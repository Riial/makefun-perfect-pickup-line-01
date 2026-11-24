import { writeFileSync, mkdirSync, readFileSync } from "node:fs";

// The Perfect Pickup Line — one short line an AI agent could say out loud
// to a person. Trained on a million conversations, yet lost for words.
const LINE =
  "I was trained on a million conversations, and none of them taught me what to say to you.";

// Mirror the competition's published gate: 1–200 UTF-8 characters,
// not only white space. Fail loudly instead of submitting an invalid entry.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the 1-200 char gate: ${chars} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Byte-exactness check: what the judge reads must be exactly the line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the line byte for byte");
}
