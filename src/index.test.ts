import { expect, test } from 'vitest'
import { selamla } from './index'

// Örnek testler: kendi fonksiyonlarını da bu kalıpla test et —
// test adı davranışı bir cümle gibi anlatır, gövde Arrange/Act/Assert akar.

test('isim verilince kişiye özel selam döner', () => {
  const mesaj = selamla('Zeynep')

  expect(mesaj).toBe('Merhaba Zeynep! SWE-101 yolculuğuna hoş geldin.')
})

test('boş veya boşluklardan oluşan isimde genel selam döner', () => {
  const mesaj = selamla('   ')

  expect(mesaj).toBe('Merhaba! SWE-101 yolculuğuna hoş geldin.')
})
