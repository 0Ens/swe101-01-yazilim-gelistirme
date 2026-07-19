import { load, save } from "./storage.js";

const CHARSET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const CODE_LENGTH = 8;

export function generateCode(): string {
  let code = "";
  for (let i = 0; i < CODE_LENGTH; i++) {
    code += CHARSET[Math.floor(Math.random() * CHARSET.length)];
  }
  return code;
}

export function shorten(url: string): string {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    throw new Error(`Geçersiz URL: "${url}" — http:// veya https:// ile başlamalı`);
  }

  const store = load();

  const existing = Object.entries(store).find(([, v]) => v === url);
  if (existing) {
    return existing[0];
  }

  let code = generateCode();
  while (store[code] !== undefined) {
    code = generateCode();
  }

  store[code] = url;
  save(store);
  return code;
}

export function resolve(code: string): string {
  const store = load();
  const url = store[code];
  if (url === undefined) {
    throw new Error(`Kod bulunamadı: "${code}"`);
  }
  return url;
}

export function list(): { code: string; url: string }[] {
  const store = load();
  return Object.entries(store).map(([code, url]) => ({ code, url }));
}
