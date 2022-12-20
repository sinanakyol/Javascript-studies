var person = {
  name: "Rumeysa",
  surname: "Turgut",
  age: 23,
  city: "Istanbul",
  introduce: function () {
    console.log(`My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`);
  },
};
person.introduce();

//arrow functionlar this erişimine sahip değildir.

var person = {
  name: "Rumeysa",
  surname: "Turgut",
  age: 23,
  introduce: () => {
    return `My name is ${person.name} ${person.surname}, I'm ${person.age} yo.`;
  },
};

console.log(person.introduce());
