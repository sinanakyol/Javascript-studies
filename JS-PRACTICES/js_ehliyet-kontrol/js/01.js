let userName = prompt('Adınızı girin:');
let age = prompt('Yaşınızı girin:');

let check = document.querySelector('#check');

function userCheck(){
    if (userName && age >= 18){
        check.innerHTML = `${userName}, ehliyet alabilirsiniz :)`
    }
    else if (!userName || !age){
        check.innerHTML = 'Kullanıcı bilginiz yok !!!'
    }
    else if (!(age >= 18)){
        check.innerHTML = '18 yaşından küçüksünüz. Ehliyet alamazsınız :('
    }
}

userCheck()