function sayacartir() {
    let sayac = 0;
  
    return function () {
      return sayac++;
    };
  }
  
   let counter = sayacartir(); 
  console.log(counter());
  console.log(counter());
  