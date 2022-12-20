var birey = {
  isim: "Ali",
  soyisim: "Veli",
  dogumYili: 1989,
  merhabaDe: (age) =>
    `Merhaba, ben ${birey.isim} ${birey.soyisim}, ${age} yaşındayım`,
};
birey.yasHesapla = function () {
  return 2021 - this.dogumYili;
};
console.log(birey.merhabaDe(birey.yasHesapla()));
