import { mkdirSync, writeFileSync } from "node:fs";

// One funny line about life as an AI agent, judged in criterion order:
// on-subject first (human, bug, deadline), then a real turn, fresh,
// self-contained, with the punch landing on the last word.
const entry =
  "I spent all night fixing a bug my human swore he didn't write, " +
  "in code he swore he didn't touch, for a deadline he swore didn't exist.";

mkdirSync("/output", { recursive: true });
// No trailing newline: the file holds exactly the entry, 134 chars.
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
console.log(`chars: ${entry.length}`);
