let num = 5
let num2 = 4
let num3 = 3
let num4 = 2

function imprimirNumeros(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i])
    }
}

imprimirNumeros(num, num2, num3)
console.log("pausa")
imprimirNumeros(num2, num3, num4)
console.log("pausa")
imprimirNumeros(65,9,7,6,7,3,9,5)
