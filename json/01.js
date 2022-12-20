let user = {userName:"sinan", isActive: true}  //Object
console.log(user)
localStorage.setItem("userX", JSON.stringify(user))

let userInfo = localStorage.getItem("userX")
userInfo = JSON.parse(userInfo)
console.log(userInfo)