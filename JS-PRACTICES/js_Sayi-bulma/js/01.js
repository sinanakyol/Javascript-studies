// Bilgisayar tarafından 10 'a kadar tutulmuş olan rastgele sayıyı bulmayı deneyelim.

let randomSayi = Math.ceil(Math.random()*10);

let tahmin = prompt("1'den 10'a kadar bir sayı gir ve sayıyı bulmaya çalış!!");

if (tahmin ===randomSayi && tahmin != null) 
alert ("BİLDİN !!");
else if (tahmin == "") alert ("Boş giriş yaptınız");
else if (tahmin == null) alert ("Giriş yapmadınız");
else {
    alert("Bir Daha Dene :( , Sayı: " +randomSayi);
}