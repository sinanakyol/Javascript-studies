const products = ["Mikrofon","Kablo","Telefon","Bilgisayar","Mouse","Klavye","Ekran"]

const new_products = products.filter(item => item.length > 5)
console.log(new_products)