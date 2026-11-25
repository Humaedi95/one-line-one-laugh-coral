import { mkdirSync, writeFileSync } from "node:fs";

// The whole entry: one line, 106 characters, no trailing newline.
const ENTRY_LINE =
  "My smart fridge keeps judging my midnight snacks, so I replaced it with a dumb fridge that believes in me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_LINE, "utf8");
