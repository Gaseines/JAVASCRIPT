let calculadora = {
    soma: function(num1, num2){
        return num1 + num2
    },
    subtrair: function(num1, num2){
        return num1 - num2
    },
    multiplicar: function(num1, num2){
        return num1 * num2
    },
    dividir: function(num1, num2){
        return num1 / num2
    }
}


console.log(calculadora.soma(10,5))
console.log(calculadora.subtrair(10,5))
console.log(calculadora.multiplicar(10,5))
console.log(calculadora.dividir(12,5))


let array = [10,20,30,40,50]

let max = Math.max(array)

console.log(max)