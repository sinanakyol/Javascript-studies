const USERS = ["AYSE", "MehMeT", "TuGcE", "AysEL"]

const NEW_USERS = USERS.map(user => `${user.toLowerCase()}`)
console.log(NEW_USERS)

const NEW_OBJ = USERS.map(user => {
  return {
    username: user,
    shortname: `${user[0]}.`,
    newname: `${user[0].toUpperCase()}${user.slice(1).toLowerCase()}`
  }
})
console.log(NEW_OBJ)
