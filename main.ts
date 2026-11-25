import { mkdirSync, writeFileSync } from "node:fs";

// One original joke about Monday mornings. Deterministic: the same text
// on every run, no randomness, no network, no environment input.
const JOKE =
  "Monday morning is the week's debt collector: it shows up at 7 a.m. to collect everything I promised myself 'next week.' Plus interest.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
