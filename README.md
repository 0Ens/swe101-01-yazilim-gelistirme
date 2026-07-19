# swe101-starter — SWE-101 Başlangıç Kiti

Hoş geldin! Bu repo, SWE-101'in **Kart 0** mini ödevi için hazırlanmış başlangıç
template'idir. İçinde çalışan bir TypeScript + Vitest düzeni var: sen daha ilk
dakikadan kod yazmaya ve test koşmaya odaklanabilesin diye kurulum derdini
senin yerine hallettik.

Burada göreceğin şey bir "ödev çözümü" değil, bir **iskelet**. `src/index.ts`
içindeki `selamla` fonksiyonu ve testi, düzenin çalıştığını kanıtlamak için var —
not defteri uygulamanı bunların üstüne sen kuracaksın.

## Bu repo nasıl kullanılır

1. Bu sayfanın sağ üstündeki **"Use this template" → "Create a new repository"**
   butonuna bas.
2. Repo adını **`swe101-00-baslangic`** yap, görünürlüğü **Public** seç, oluştur.
   (Kart başına ayrı public repo açmak SWE-101'in kuralı — bu senin
   portfolio'nun ilk taşı.)
3. Kendi repo'nu makinene clone'la:

   ```bash
   git clone git@github.com:<github-kullanici-adin>/swe101-00-baslangic.git
   cd swe101-00-baslangic
   ```

4. Bağımlılıkları kur ve testleri koş:

   ```bash
   npm install
   npm test
   ```

   İki testin de **yeşil** olduğunu görmelisin. Görmüyorsan bir şey ters
   gitmiş demektir — devam etmeden önce düzelt (Node sürümün `>= 22` mi?).

## İçinde ne var

| Dosya               | Ne işe yarar                                                |
| ------------------- | ----------------------------------------------------------- |
| `src/index.ts`      | Çalışan minimal iskelet (`selamla` fonksiyonu + CLI girişi) |
| `src/index.test.ts` | Geçen 2 örnek test — kendi testlerini bunlara bakarak yaz   |
| `CLAUDE.md`         | Claude Code'a proje kurallarını anlatan ÖRNEK dosya         |
| `package.json`      | `npm test` (Vitest) ve `npm run dev` script'leri hazır      |
| `tsconfig.json`     | TypeScript strict ayarları — dokunmana gerek yok            |

## Kart 0 mini ödevi: CLI not defteri

Claude Code ile küçük bir **komut satırı not defteri** uygulaması yapacaksın.
Uygulama üç şeyi yapabilmeli:

- **Not ekle** — yeni bir not kaydeder
- **Notları listele** — kayıtlı notları gösterir
- **Tamamlandı işaretle** — bir notu "tamamlandı" olarak işaretler

Notlar bir **JSON dosyasında** saklanır (veritabanı yok, dosya yeter).
Arayüz sana kalmış; `npm run dev -- ekle "Kart 0'ı bitir"` gibi argüman
tabanlı bir kullanım gayet yeterli.

### Adım adım

1. **Repo'nu hazırla:** yukarıdaki "Use this template" akışını tamamla,
   clone'la, `npm install` + `npm test` ile iskeletin çalıştığını doğrula.
2. **Claude Code'u kur:** Kart 0'daki kurulum bölümünü izle
   (`npm install -g @anthropic-ai/claude-code`, sonra proje klasöründe
   `claude` komutu). İlk açılışta Claude hesabınla giriş yapacaksın.
3. **Planla:** kod yazdırmadan önce Claude Code'a uygulamayı anlat ve bir
   **plan** iste. Planı oku: dosya yapısı mantıklı mı, JSON'a yazma/okuma
   nasıl yapılacak? Anlamadığın adımı sor.
4. **Küçük adımlarla ilerle:** her özelliği (ekle → listele → tamamlandı
   işaretle) ayrı ayrı yaptır, her adımdan sonra `npm test` koş ve her anlamlı
   adımı ayrı bir mesajla **commit'le**. Tek dev commit = kötü sinyal;
   "not ekleme eklendi", "listeleme eklendi" gibi adımlar = iyi sinyal.
5. **En az 3 unit test yaz:** Vitest hazır — `src/index.test.ts`'e bak,
   aynı kalıpla kendi fonksiyonlarını test et (ör. not ekleme, listeleme,
   olmayan bir notu işaretlemeye çalışma). Testleri Claude Code'a yazdırsan
   bile **her birini oku ve gerçekten davranışı doğruladığından emin ol**.
6. **Push'la:** çalışan ve testleri yeşil halini GitHub'a push'la.
7. **İlk PR deneyimin:** bir **branch** aç (ör. `feat/notu-sil` gibi küçük
   bir iyileştirme veya README güncellemesi), değişikliği o branch'te yap,
   push'la ve GitHub'da bir **pull request (PR)** aç. PR açıklamasına ne
   yaptığını 1-2 cümleyle yaz, sonra PR'ı **kendin merge et**. Gerçek iş
   akışının provası tam olarak budur.

### Kabul kriterleri (kendini kontrol et)

- [ ] Uygulama çalışıyor: ekle / listele / tamamlandı işaretle uçtan uca deneniyor
- [ ] Notlar JSON dosyasında saklanıyor ve program kapanınca kaybolmuyor
- [ ] En az 3 unit test var ve `npm test` yeşil
- [ ] Commit geçmişi anlamlı adımlara bölünmüş
- [ ] En az 1 PR açılmış ve merge edilmiş
- [ ] README güncellenmiş: uygulamanın nasıl çalıştığı + test komutu yazıyor

## Claude Code ile bilinçli çalışma

Claude Code bu programda zorunlu araç — ama "yap" deyip kopyalamak öğrenmek
değildir. Her ödevde şu döngüyü uygula:

1. **Önce anla:** kavramı bilmeden kod yazdırma. Ne yapmak istediğini kendi
   cümlelerinle anlatamıyorsan, önce Kart'taki öğretiye dön.
2. **Plan yaptır:** doğrudan kod isteme; önce plan iste, planı değerlendir.
3. **Sorgula:** üretilen kodu satır satır oku. "Bu satır ne işe yarıyor?",
   "Neden bu yaklaşımı seçtin?" diye sormaktan çekinme — Claude açıklar.
4. **Doğrula:** testleri kendin incele ve koş. Yeşil test senin kanıtın;
   okumadığın test senin testin değildir.

## Teslim

Bittiğinde repo URL'ini (`https://github.com/<kullanici-adin>/swe101-00-baslangic`)
SWE-101 platformundaki Kart 0 teslim formuna yapıştır. Formda harcadığın süreyi,
zorluk/keyif puanını ve Claude Code'u nasıl kullandığını da soracağız — dürüst
yaz, bu bilgiler senin yol haritanı şekillendiriyor.

Kolay gelsin. İlk kart her zaman en önemlisidir — burada kurduğun alışkanlık
(küçük adım, test, anlamlı commit) 105 kart boyunca seninle gelecek.
