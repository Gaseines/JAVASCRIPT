let validNasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/

console.log(validNasc.test("16/03/2003"))
console.log(validNasc.test("6/3/2003"))
console.log(validNasc.test("06/03/203"))
console.log(validNasc.test("06-03-203"))