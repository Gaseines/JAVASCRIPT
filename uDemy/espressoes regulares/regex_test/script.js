const testBola = new RegExp('bola')

console.log(testBola.test("dsajdbjnsadsajbolajkdsajkdla"))

console.log(testBola.test("fdsjfhdkjsfhs"))

const testBola2 = /carro/

let text = "fsafsdfdsf"

console.log(testBola2.test("dsajdbjnsadsajcarrojkdsajkdla"))

console.log(testBola2.test(text))

console.log(/cesta/.test("Fez a bola na cesta"))