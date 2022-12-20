let dizi = [2,3,4];

let sonuc = dizi.reduce(function(total, num){
    return total * num;
})

console.log(sonuc)