import { describe, it, expect, vi, beforeEach } from "vitest";
import { generateCode, shorten, resolve } from "./core.js";
import * as storage from "./storage.js";

beforeEach(() => {
  vi.restoreAllMocks();
});

describe("generateCode", () => {
  it("8 karakterli kod üretir", () => {
    const code = generateCode();
    expect(code).toHaveLength(8);
  });
});

describe("shorten", () => {
  it("geçerli URL için 8 karakterli kod döner", () => {
    vi.spyOn(storage, "load").mockReturnValue({});
    vi.spyOn(storage, "save").mockImplementation(() => {});

    const code = shorten("https://example.com");
    expect(code).toHaveLength(8);
  });

  it("aynı URL iki kez kısaltılınca aynı kod döner", () => {
    vi.spyOn(storage, "load").mockReturnValue({ abc12345: "https://example.com" });
    vi.spyOn(storage, "save").mockImplementation(() => {});

    const code = shorten("https://example.com");
    expect(code).toBe("abc12345");
  });

  it("geçersiz URL hata fırlatır", () => {
    expect(() => shorten("example.com")).toThrow("Geçersiz URL");
    expect(() => shorten("ftp://example.com")).toThrow("Geçersiz URL");
  });

  it("çakışma durumunda store'da olmayan bir kod döner", () => {
    const existingCodes: Record<string, string> = {};
    for (let i = 0; i < 50; i++) {
      existingCodes[generateCode()] = `https://site${i}.com`;
    }

    vi.spyOn(storage, "load").mockReturnValue({ ...existingCodes });
    vi.spyOn(storage, "save").mockImplementation(() => {});

    const code = shorten("https://new-site.com");
    expect(existingCodes[code]).toBeUndefined();
    expect(code).toHaveLength(8);
  });
});

describe("resolve", () => {
  it("var olan kod için URL döner", () => {
    vi.spyOn(storage, "load").mockReturnValue({ abc12345: "https://example.com" });

    const url = resolve("abc12345");
    expect(url).toBe("https://example.com");
  });

  it("olmayan kod için hata fırlatır", () => {
    vi.spyOn(storage, "load").mockReturnValue({});

    expect(() => resolve("xxxxxxxx")).toThrow("Kod bulunamadı");
  });
});
