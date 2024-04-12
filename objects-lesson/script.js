console.log("probando")




/* 

{
  key: value,
  key: value,
  nombreDePropiedad: valorDePropiedad,
}


*/



const headPhones = {
  price: 100,
  isNew: true,
  brand: "SteelSeries",
  "max-volume": 200,
  colors: ["black", "blue", "red"],
  settings: {
    code: "12345",
    volumen: 100
  },
  activate: function () {
    console.log("encendiendo los cascos")
  }, // metodos
  // activate: () => {
  //   console.log("encendiendo los cascos")
  // } // metodos
}

console.log(headPhones)

// notación de puntos
console.log(headPhones.price)

// notación de corchetes
console.log( headPhones["max-volume"] )

console.log( headPhones["brand"] )
console.log( headPhones.brand )

let key = "isNew"
console.log( headPhones[key] )
// ... es lo mismo que:
// console.log( headPhones["isNew"] )

// propiedades complejas en objetos

console.log(headPhones.colors[1])

console.log(headPhones.settings.code)
console.log(headPhones["settings"]["code"])

headPhones.activate()

// quiero modificar el objetos

headPhones.isNew = false
console.log(headPhones)

// agregar nuevas propiedades

headPhones.isDamaged = false;
headPhones.cualquierPropiedad = "patata";
console.log(headPhones)

// borrar propiedades (palabra reservada delete)

delete headPhones.colors
console.log(headPhones)

// analizar multiples propiedades de un objeto

// Object.keys() // metodo global que nos permite crear un array con todos los nombres de propiedades

let propertiesArr = Object.keys( headPhones )
console.log(propertiesArr)



// iterar por cada una de las propiedades (bucle for in)

for ( let nombreDeCadaPropiedad in headPhones ) {

  console.log("patata", nombreDeCadaPropiedad)
  // como puedo yo acceder a los valores de las propiedades

  console.log( headPhones[nombreDeCadaPropiedad] )

}




// Estructura de data

const usersArr = [
  {
    username: "Xavi",
    bitcoins: 2,
    hasNFTs: true
  },
  {
    username: "Asier",
    bitcoins: 0.5,
    hasNFTs: false
  },
  {
    username: "Alfonso",
    bitcoins: 0,
    hasNFTs: true
  },
  {
    username: "Ronnie",
    bitcoins: 0,
    hasNFTs: false
  }
]

// EL ORDEN DE LAS PROPIEDADES DE UN OBJETO ES

// quien es el usuario en la segunda posición del array
console.log(usersArr[1].username)
console.log(usersArr[1]["username"])

// ejemplo de buscar usuario por su nombre
for (let i = 0; i < usersArr.length; i++) {
  console.log(usersArr[i])
  if (usersArr[i].username === "Alfonso" ) {
    console.log("encontramos a alfonso")
    console.log(usersArr[i].hasNFTs) 
    console.log(usersArr[i].bitcoins) 
  }
}

// modificar la propiedad hasNFTs de Ronnie. a true.

console.log(usersArr[3].hasNFTs)

usersArr[3].hasNFTs = true
console.log(usersArr)


// yo quiero incrementar el valor de bitcoins de el primer usuario en +2

// usersArr[0].bitcoins = usersArr[0].bitcoins + 2
usersArr[0].bitcoins += 2

console.log(usersArr)

// quiero agregar un nuevo usuario Águeda, 3, false

usersArr.push( { 
  username: "Águeda", 
  bitcoins: 3, 
  hasNFTs: false 
} )

// ... o creando una variable

// let newUser = { 
//   username: "Águeda", 
//   bitcoins: 3, 
//   hasNFTs: false 
// }
// usersArr.push( newUser )

console.log(usersArr)