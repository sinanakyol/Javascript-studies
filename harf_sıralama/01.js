let s = "javascriptloops";
let letters = s.split("");
let vowels = ["a", "e", "i", "o", "u"];

let newVow = [];
let newCons = [];
for (let i = 0; i < letters.length; i++) {
  if (vowels.includes(letters[i]) == true) {
    newVow.push(letters[i]);
  } else {
    newCons.push(letters[i]);
  }
}
console.log(newVow)
console.log(newCons)
let Lastitem = newVow.concat(newCons);
console.log(Lastitem)

console.log(Lastitem.toString())
let text = "";
for(let x of Lastitem){
    text += x + "<br>";
}
console.log(text)
document.getElementById('list').innerHTML= text