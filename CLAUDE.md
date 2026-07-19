# CLAUDE.md — swe101-00-baslangic

<!--
  Bu dosya ÖRNEKTİR. Claude Code'da /init komutu sana otomatik bir CLAUDE.md
  üretir; onu bu dosyadaki gibi KISA ve NET olacak şekilde düzenle.
  İyi bir CLAUDE.md roman değildir: komutlar + birkaç pazarlıksız kural yeter.
-->

Küçük bir CLI not defteri uygulaması: not ekle / listele / tamamlandı işaretle.
Notlar JSON dosyasında saklanır. TypeScript + Vitest.

## Komutlar

```bash
npm run dev -- <komut>   # uygulamayı çalıştır (ör. npm run dev -- listele)
npm test                 # Vitest, tek koşu
npm run test:watch       # Vitest, izleme modu
npm run typecheck        # tsc --noEmit
```

## Kurallar

1. **Testler yeşil kalmalı.** Her değişiklikten sonra `npm test` koşulur;
   kırmızı testle iş bitmiş sayılmaz. Yeni fonksiyon = aynı adımda unit test.
2. **Önce test, sonra kod (test-first).** Yeni davranışı önce başarısız bir
   testle tanımla, sonra geçir.
3. **TypeScript strict:** `any` kullanma; dış veri (JSON dosyası, CLI argümanı)
   okunduğu yerde doğrulanır.
4. **Küçük adımlar:** her anlamlı adım ayrı commit; commit mesajı ne yapıldığını
   emir kipiyle söyler (ör. "not ekleme komutunu ekle").
5. Kod ve identifier'lar İngilizce; kullanıcıya görünen metinler Türkçe.
