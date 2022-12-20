let height = prompt("Boyunuzu giriniz (metre cinsinden):");
let weight = prompt("Kilonuzu giriniz (kg cinsinden):");


function vkiHesapla(weight,height) {
    
    let vki = weight / (height**2);

    if(vki < 18.5) return alert(`Vücut kitle endeksiniz: ${vki}, değerleriniz düşük `);
    if(vki >= 18.5 && vki <= 25) return alert(`Vücut kitle endeksiniz: ${vki}, değerleriniz normal `);
    if(vki > 25 && vki < 30) return alert(`Vücut kitle endeksiniz: ${vki}, kilolusunuz `);
    if(vki >= 30 ) return alert(`Vücut kitle endeksiniz: ${vki}, aşırı kilolusunuz `);
    return alert("Girdiğiniz değerleri kontrol ediniz");
}

vkiHesapla(weight,height)