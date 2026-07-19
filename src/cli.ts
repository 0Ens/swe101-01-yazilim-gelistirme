import { shorten, resolve, list } from "./core.js";

const [command, argument] = process.argv.slice(2);

function printUsage(): void {
  console.log("Kullanım:");
  console.log("  npm run dev shorten <url>   — URL kısalt");
  console.log("  npm run dev resolve <kod>   — Kodu çöz");
  console.log("  npm run dev list            — Tüm linkleri listele");
}

try {
  if (command === "shorten") {
    if (!argument) throw new Error("URL gerekli: npm run dev shorten <url>");
    const code = shorten(argument);
    console.log(`Kısa kod: ${code}`);
  } else if (command === "resolve") {
    if (!argument) throw new Error("Kod gerekli: npm run dev resolve <kod>");
    const url = resolve(argument);
    console.log(`URL: ${url}`);
  } else if (command === "list") {
    const links = list();
    if (links.length === 0) {
      console.log("Henüz kayıtlı link yok.");
    } else {
      links.forEach(({ code, url }) => console.log(`${code}  →  ${url}`));
      console.log(`\nToplam: ${links.length} link`);
    }
  } else {
    printUsage();
  }
} catch (err) {
  console.error(`Hata: ${(err as Error).message}`);
  process.exit(1);
}
