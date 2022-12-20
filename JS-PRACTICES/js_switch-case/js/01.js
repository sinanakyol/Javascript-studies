

let islem = function (n) {
    switch (n) {
        case n % 2 != 0:
        return console.log('Weird');
        break;
        case n % 2 == 0 && n >= 2 && n <=5:
            return console.log('Not Weird');
        break;
        case n % 2 == 0 && n >= 6 && n <= 20:
            return console.log('Weird');
        break;
        case n % 2 == 0 && n > 20:
            return console.log('Not Weird');
        break;
        
    }
}

console.log(islem(5));


