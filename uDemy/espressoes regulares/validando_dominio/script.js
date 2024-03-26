
let validDominio = /www.\w+\.com.br|.com/

console.log(validDominio.test("www.google.com.br"))
console.log(validDominio.test("www.nasa123.com"))
console.log(validDominio.test("www.gsn"))