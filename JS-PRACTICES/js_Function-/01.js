// let firstName = "sinan"


function greetings(firstName="", lastName="") {  //default parametre alıyor.
    
    // console.log(`Merhaba ${firstName ? firstName : ""}`)
    console.log(`Merhaba ${firstName} ${lastName}`)

}
greetings()



function greetings2(firstName, lastName) {
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}

let greetingsInfo = greetings2("sinan","akyol")
console.log(greetingsInfo)


function domIdWriteInfo(id,info){
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

domIdWriteInfo('title', greetings2("sinan", "akyol"))