import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const contentDir = path.join(root, "content");
const generatedDir = path.join(contentDir, "generated");

await mkdir(generatedDir, { recursive: true });

await buildCollection("posts");
await buildCollection("resources");

async function buildCollection(collectionName) {
  const collectionDir = path.join(contentDir, collectionName);
  const outputFile = path.join(generatedDir, `${collectionName}.json`);
  const files = (await readdir(collectionDir))
    .filter((file) => file.endsWith(".json"))
    .sort((a, b) => a.localeCompare(b));

  const items = await Promise.all(
    files.map(async (file) => {
      const fullPath = path.join(collectionDir, file);
      const raw = await readFile(fullPath, "utf8");
      return JSON.parse(raw);
    })
  );

  await writeFile(outputFile, `${JSON.stringify({ items }, null, 2)}\n`, "utf8");
}
