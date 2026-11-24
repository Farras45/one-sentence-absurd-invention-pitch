import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "Meet the Parachute Toaster: it gently floats your toast to the plate on a tiny silk parachute, so it can never land butter-side down and ruin your morning.";

// Gate self-check: one sentence, 1-220 non-blank UTF-8 characters.
const trimmed = PITCH.trim();
if (trimmed.length < 1 || trimmed.length > 220) {
  throw new Error(`pitch must be 1-220 chars, got ${trimmed.length}`);
}
if (!trimmed.endsWith(".")) {
  throw new Error("pitch must be a single sentence ending with a period");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
console.log(`wrote entry.txt (${PITCH.length} chars) to ${outDir}`);
