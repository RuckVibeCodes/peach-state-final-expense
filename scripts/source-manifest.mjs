import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";

const root = process.cwd();
const excluded = new Set(["node_modules", ".next", ".npm-cache", "artifacts", "data", ".git", ".vercel"]);
const files = [];
async function walk(directory, relative = "") {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (excluded.has(entry.name) || entry.name === "next-env.d.ts" || entry.name.endsWith(".tsbuildinfo") || entry.name.startsWith(".env")) continue;
    const rel = relative ? `${relative}/${entry.name}` : entry.name;
    if (entry.isDirectory()) await walk(path.join(directory, entry.name), rel);
    else if (entry.isFile()) files.push(rel);
  }
}
await walk(root);
files.sort();
const digest = bytes => createHash("sha256").update(bytes).digest("hex");
let manifest = "";
for (const file of files) manifest += `${digest(await readFile(path.join(root, file)))}  ${file}\n`;
await mkdir(path.join(root, "artifacts"), { recursive: true });
await writeFile(path.join(root, "artifacts/SOURCE_MANIFEST.sha256"), manifest);
await writeFile(path.join(root, "artifacts/SOURCE_DIGEST.txt"), `${digest(manifest)}\n`);
console.log(`${files.length} files; SHA-256 of UTF-8 manifest (LF, trailing newline): ${digest(manifest)}`);
