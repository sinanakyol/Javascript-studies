let state = {
  users: [
    { name: "Brock", age: 25, favoriteColor: "red" },
    { name: "Jessie", age: 17, favoriteColor: "yellow" },
    { name: "James", age: 41, favoriteColor: "blue" },
    { name: "Winnie", age: 18, favoriteColor: "purple" },
  ],
  settings: {
    version: "1.0.5",
    DNS: "105.xx.xx.xx",
    website: "https://www.example.com/",
  },
  banList: ["Ash", "Angelica", "Tom", "Jerry"],
};

alert(state.banList[2]);
alert(state.settings.website);
alert(state.users[2].favoriteColor);
