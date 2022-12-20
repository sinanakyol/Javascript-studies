let a = prompt("Birinci sayıyı giriniz");
let b = prompt("İkinci sayıyı giriniz");
let operator = prompt("operator : ");

// Çalışmadı!!

let islem = function (a, b, operator) {
  switch (operator) {
    case "topla":
      return a + b;
      break;
    case "çıkar":
      return a - b;
      break;
    case "çarp":
      return a * b;
      break;
    case "böl":
      return a / b;
      break;
    case "mod al":
      return a % b;
      break;
    case "üs al":
      return a ** b;
      break;
    default:
      return "Tanımlanmamıs islem";
      break;
  }
};

// console.log(islem(7, 5, "topla"));
alert(islem(Number(a), Number(b), operator));
