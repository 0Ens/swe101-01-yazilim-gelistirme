# swe101-01 — Link Kısaltıcı

bit.ly benzeri bir link kısaltıcının çekirdeği: uzun URL alır, kısa kod üretir, JSON dosyasında saklar, kısa koddan URL'yi geri çözümler.

## Tasarım Kararları

| Karar | Seçim | Neden |
|---|---|---|
| Kod uzunluğu | 8 karakter | 62⁸ ≈ 218 trilyon kombinasyon, yeterinden fazla |
| Karakter seti | a-z, A-Z, 0-9 (62 karakter) | Okunabilir, URL-güvenli |
| Çakışma yönetimi | Retry loop | Üretilen kod zaten varsa yenisi denenir |
| Geçersiz URL | Hata mesajı, program durur | `http://` veya `https://` zorunlu |
| Aynı URL tekrar kısaltılınca | Mevcut kod döner (idempotent) | Gereksiz veri büyümesini önler |

## Kurulum

```bash
git clone https://github.com/0Ens/swe101-01-yazilim-gelistirme.git
cd swe101-01-yazilim-gelistirme
npm install
```

## Kullanım

```bash
# URL kısalt
npm run dev shorten https://www.youtube.com
# → Kısa kod: zzowyjvz

# Kodu çöz
npm run dev resolve zzowyjvz
# → URL: https://www.youtube.com

# Tüm linkleri listele
npm run dev list
# → zzowyjvz  →  https://www.youtube.com
```

## Testler

```bash
npm test
```

7 test, 5 senaryo:
- Geçerli URL için 8 karakterli kod üretilir
- Aynı URL iki kez kısaltılınca aynı kod döner
- Geçersiz URL hata fırlatır
- Çakışma durumunda store'da olmayan yeni bir kod üretilir
- Var olan kod için URL döner; olmayan kod hata fırlatır

## Dosya Yapısı

```
src/
  storage.ts     → JSON okuma/yazma (arayüzden bağımsız)
  core.ts        → iş mantığı: generateCode, shorten, resolve, list
  cli.ts         → CLI katmanı: argüman okur, core'u çağırır, yazar
  core.test.ts   → testler
data/
  links.json     → kalıcı veri
```

## Ne Öğrendim

Katman ayrımının ne anlama geldiğini elle kurarak gördüm: `core.ts` CLI'dan, web arayüzünden veya başka herhangi bir arayüzden tamamen bağımsız. Önüne yarın bir HTTP sunucusu koysam `core.ts` hiç değişmeden çalışır — Backend/Frontend ayrımının özü buymuş.

Çakışma yönetimini retry loop ile çözdüm. idempotent shorten kararı (aynı URL'ye aynı kod) ise hem veri verimliliği hem tutarlılık açısından daha temiz bir tasarım.
