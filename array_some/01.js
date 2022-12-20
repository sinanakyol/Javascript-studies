// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

let dizi = [3,6,9,14,16];

sonuc = dizi.some(function(sayi){
	return sayi > 5;
  })
  
	sonuc === true ? 
  console.log("5'ten büyük sayı mevcut") : 
  console.log("5'ten büyük sayı mevcut değil")
