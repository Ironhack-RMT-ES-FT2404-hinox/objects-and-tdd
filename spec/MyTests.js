// console.log("1. Deberia convertir los centimos a euros")
// console.log( centsToEuros(100) === 1 )
// console.log( centsToEuros(20) === 0.2 )
// console.log( centsToEuros(745) === 7.45 )

// console.log("2. Si recibo un string, deberia retornar undefined")
// console.log( centsToEuros("hola") === undefined )

// console.log("3. Si no recibo los centimos, deberia retornar 0")
// console.log( centsToEuros() === 0  )

// console.log("4. si recibe algo que no sea numero, deberia retornar null")
// console.log( centsToEuros([]) === null )
// console.log( centsToEuros(true) === null )


describe("function centsToEuros", function () {
  it("1. Deberia convertir los centimos a euros", function() {
    expect(centsToEuros(100)).toBe(1)
    expect(centsToEuros(20)).toBe(0.2)
    expect(centsToEuros(745)).toBe(7.45)
  })
})

describe("function cents to Euros", function () {
  it("2. Si recibo un string, deberia retornar undefined", function() {
    expect(centsToEuros("patata")).toBe(undefined)
  })
})

describe("function cents to Euros", function () {
  it("3. Si no recibo los centimos, deberia retornar 0", function() {
    expect(centsToEuros()).toBe(0)
  })
})

describe("function cents to Euros", function () {
  it("4. si recibe algo que no sea numero, deberia retornar null", function() {
    expect(centsToEuros([])).toBe(null)
    expect(centsToEuros(true)).toBe(null)
  })
})