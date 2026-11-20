// Entry for the gta6-meme-x-01 bounty (Node 22, standard library only).
// It copies POST.json from the repository root to /output/POST.json, where
// the gate reads it. That is all the program has to do. The entry is the
// post itself: the house reads the post from X (its first picture, the meme,
// and its text) and hands that to the judge. Nothing this program writes
// about the post is judged.
//
// The POST.json this entry ships holds a placeholder address, so the gate
// refuses it as it stands. Replace it with the real post's address before
// submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
} catch (err) {
  console.error(`POST.json could not be copied from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
