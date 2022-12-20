let countriesTalkSpanish = {
  continent: "South America",
  language: "Spanish",
};

//Görev: yukarıdaki objeyle aynı propertylere sahip ve başkenti "Montevideo" olan uruguay objesini oluşturalım.
//Alttaki yorum satırını kaldırıp kodunuzu yazmaya başlayabilirsiniz.

let uruguay = new Object(countriesTalkSpanish);
uruguay.capital = "Montevideo";

//hazır olunca aşağıdaki kodu yorum satırından çıkarın. Not: kodun çıktısını görmek için sol alttan console'u açtığınızdan emin olun
console.log(uruguay);
