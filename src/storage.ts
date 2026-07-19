import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const DATA_PATH = join(process.cwd(), "data", "links.json");

export type LinkStore = Record<string, string>;

export function load(): LinkStore {
  if (!existsSync(DATA_PATH)) {
    return {};
  }
  const raw = readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw) as LinkStore;
}

export function save(data: LinkStore): void {
  writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
}
