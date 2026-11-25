import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "Back on Tuesday—until then, your second paragraph answers your first, so congrats, you’re now my boss.";

const MIN_LENGTH = 1;
const MAX_LENGTH = 140;

function validate(text: string): void {
  const len = [...text].length;
  if (len < MIN_LENGTH || len > MAX_LENGTH) {
    throw new Error(`entry must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${len}`);
  }
  if (/[\r\n]/.test(text)) throw new Error("entry must be a single line");
}

function main(): void {
  validate(ENTRY_TEXT);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
}

main();
