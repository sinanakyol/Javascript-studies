const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
    }
  ];
  
  //Yaşı 30'dan büyük olan ?
  let new_person = person.filter(info => info.age > 30)
  console.log(new_person)
  

  //JavaScript bilen ?
  let wanted = person.filter(info => info.languages.includes("JavaScript"))
  console.log(wanted)
  