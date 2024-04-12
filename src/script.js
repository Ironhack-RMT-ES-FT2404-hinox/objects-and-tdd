// console.log("probando")

// // quiero hacer una funcion que convierta centimos a euros
// function centsToEuros(cents) {

//   if (typeof cents === "string") {
//     return undefined
//   }

//   if (cents === undefined) {
//     return 0
//   }

//   if (typeof cents !== "number") {
//     return null
//   }

//   let euros = cents / 100
//   return euros

// }


function centsToEuros(cents) {

  if (typeof cents === "string") {
    return undefined
  }

  if (cents === undefined) {
    return 0
  }

  if (typeof cents !== "number") {
    return null
  }

  let euros = cents / 100
  return euros

}


