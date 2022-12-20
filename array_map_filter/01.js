// 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)

let dizi = [2,5,8,11,15,17];

let sayilar = dizi.filter(function(sayi){
	return sayi > 10;
});
console.log(sayilar)

let sayilarin5kati = sayilar.map(function(sayi){
	return sayi*5;
});
console.log(sayilarin5kati)


//forEach Kullanımı ile yeni bir dizi oluşmaz !!!!!!!

// sayilar.forEach((item, index, arr) => arr[index] = item * 5);
// console.log(sayilar)

