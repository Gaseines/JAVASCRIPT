//Valid letras Maiusculas

let letraM = /[A-Z]/

console.log(letraM.test("dale dale"))

console.log(letraM.test("DALE DALE"))

console.log(letraM.test("dale DALE"))
 //-------------------------------------------------
 console.log("--------------------------------------------------")

 //Valid ID

 let testId = /\d+ - ID\b/

 console.log(testId.test("123465448912319123 - ID"))

 console.log(testId.test("12346"))

 console.log(testId.test("gfdgfd - ID"))

 //-------------------------------------------------
 console.log("--------------------------------------------------")

 //Valid Marca

 const validMarca = /Marca: (Nike|Adidas|Puma|Asics)/

 console.log(validMarca.test("Marca: Nike"))
 console.log(validMarca.test("Marca: Adidas"))
 console.log(validMarca.test("Puma"))
 console.log(validMarca.test("Marca: "))
 console.log(validMarca.test("Marca: dbvbcv"))

 //-------------------------------------------------
 console.log("--------------------------------------------------")

 //Valid IP

 const testIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/

 console.log(testIP.test("124.0.0.1"))
 console.log(testIP.test("8.8.8.8"))
 console.log(testIP.test("162.168.0.162"))
 console.log(testIP.test("fdsdfsd"))
 console.log(testIP.test("124001"))
 console.log(testIP.test("dasasgfdgd"))

 //-------------------------------------------------
 console.log("--------------------------------------------------")

 //Valid nick


 let validNick = /^(?=.{3,16}$)[a-z0-9-_]/

 console.log(validNick.test("gaseines_123"))
 console.log(validNick.test("gs"))
 console.log(validNick.test("02"))
 console.log(validNick.test("assad"))
 console.log(validNick.test("12345678123456789"))
 



