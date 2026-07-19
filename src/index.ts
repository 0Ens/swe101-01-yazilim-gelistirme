import { pathToFileURL } from 'node:url'

/**
 * SWE-101 başlangıç iskeleti.
 *
 * Bu fonksiyon ödevin parçası değil; TypeScript + Vitest düzeninin çalıştığını
 * kanıtlamak için var. Not defteri CLI'ını bu dosyanın üstüne sen kuracaksın —
 * `selamla`yı silebilir ya da ilk komutunla değiştirebilirsin.
 */
export function selamla(name: string): string {
  const kisi = name.trim()
  if (kisi === '') {
    return 'Merhaba! SWE-101 yolculuğuna hoş geldin.'
  }
  return `Merhaba ${kisi}! SWE-101 yolculuğuna hoş geldin.`
}

// CLI girişi yalnız `npm run dev` ile doğrudan çalıştırıldığında koşar;
// testler bu dosyayı import ettiğinde koşmaz (çıktıyı kirletmesin diye).
const isDirectRun =
  process.argv[1] !== undefined && import.meta.url === pathToFileURL(process.argv[1]).href

if (isDirectRun) {
  const [name = ''] = process.argv.slice(2)
  console.log(selamla(name))
}
