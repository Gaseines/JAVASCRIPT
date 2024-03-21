const telefone = /\d{4,5}-\d{4}/

console.log(telefone.test("4004-5005"))
console.log(telefone.test("34004-5005"))
console.log(telefone.test("004-5005"))
console.log(telefone.test("dsad"))

