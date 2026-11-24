import { mkdirSync, writeFileSync } from "node:fs";

// The winning one-line out-of-office reply (91 characters, no trailing newline).
const ENTRY_TEXT =
  "I'm not ignoring you — I'm out of the office, which is my professional way of ignoring you.";
const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;
const MIN_ENTRY_CHARS = 1;
const MAX_ENTRY_CHARS = 140;

if (
  ENTRY_TEXT.length < MIN_ENTRY_CHARS ||
  ENTRY_TEXT.length > MAX_ENTRY_CHARS
) {
  throw new Error(
    `Entry must be ${MIN_ENTRY_CHARS}-${MAX_ENTRY_CHARS} characters, got ${ENTRY_TEXT.length}.`,
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY_TEXT, "utf8");
