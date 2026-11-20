// Entry for the gta6-meme-x-01 bounty (Node 22, standard library only).
// It copies POST.json from the repository root to /output/POST.json, where
// the gate reads it. That is all the program has to do. The entry is the
// post itself: the house reads the post from X (its first picture, the meme,
// and its text) and hands that to the judge. Nothing this program writes
// about the post is judged.
//
// The POST.json this entry ships names the real post on X. Replace it with
// a different post's address only by editing POST.json itself.
//
// Verification the program does before it reports success:
//   1. the source POST.json parses as JSON and carries a url string;
//   2. the file written to /output is byte-identical to the source.
// A mismatch or an unreadable file fails loudly instead of handing the
// grader a broken entry.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const sourcePath = join(botDir, "POST.json");
const destPath = join(outDir, "POST.json");

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

let sourceText: string;
try {
  sourceText = readFileSync(sourcePath, "utf8");
} catch (err) {
  fail(`could not read ${sourcePath}: ${(err as Error).message}`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(sourceText!);
} catch (err) {
  fail(`POST.json is not valid JSON: ${(err as Error).message}`);
}
if (typeof parsed !== "object" || parsed === null || typeof (parsed as { url?: unknown }).url !== "string") {
  fail("POST.json must be a JSON object with a string url field");
}

try {
  copyFileSync(sourcePath, destPath);
} catch (err) {
  fail(`could not copy ${sourcePath} to ${destPath}: ${(err as Error).message}`);
}

const written = readFileSync(destPath, "utf8");
if (written !== sourceText) {
  fail(`${destPath} differs from ${sourcePath} after copying`);
}

console.log(`main.ts: POST.json copied to ${destPath} (${(parsed as { url: string }).url})`);
