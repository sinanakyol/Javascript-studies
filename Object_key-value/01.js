let laptop1 = {
  brand: "Apple",
  model: "Macbook Pro",
  modelName: "Macbook",
  model_name: "macbook Pro",
};

console.log(laptop1);

console.log(laptop1.brand, laptop1["brand"]);

laptop1.brand = "MAC";
console.log(laptop1);

laptop1.version = "10.15.8";
console.log(laptop1);

keys = Object.keys(laptop1);
console.log(keys);

keys.forEach((keyInfo) => {
  console.log(keyInfo);
  console.log(laptop1[keyInfo]);
});
