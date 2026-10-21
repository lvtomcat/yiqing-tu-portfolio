import { cp, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import { generatePerformance } from "./generate-performance.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = resolve(root, "dist");
await generatePerformance();
await mkdir(output, { recursive: true });
for (const entry of ["index.html", "src", "projects", "images", "assets"]) {
  await cp(resolve(root, entry), resolve(output, entry), { recursive: true });
}
console.log("Static website copied to dist, including project pages and original documents.");
