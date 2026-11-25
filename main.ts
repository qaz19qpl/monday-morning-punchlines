import { mkdirSync, writeFileSync } from "node:fs";

// One original joke about Monday mornings. Deterministic: the same text
// on every run, no randomness, no network, no environment input.
const JOKE =
  "Monday morning is the week's debt collector: it shows up at 7 a.m. to collect everything I promised myself 'next week.' Plus interest.";

const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

// A one-line entry must be a real, non-blank line within the length cap.
// Fail loudly instead of writing a bad entry.
function validateJoke(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("Joke must not be blank.");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Joke must be a single line.");
  }
  if (text.length < MIN_LENGTH || text.length > MAX_LENGTH) {
    throw new Error(
      `Joke must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${text.length}.`,
    );
  }
}

validateJoke(JOKE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
