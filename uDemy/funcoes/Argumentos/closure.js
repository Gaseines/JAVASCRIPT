function armazenarSoma(x){
    return y => x + y
}

let soma1 = armazenarSoma(3)
console.log(soma1(5))
let soma2 = armazenarSoma(5)
console.log(soma2(10))
console.log(soma2(20))

function contador(i){
    let cont = i
    let encremento = function(){
        console.log(cont)
        cont++

    }
    return encremento
}

let meuContador = contador(1)

meuContador()
meuContador()
meuContador()
meuContador()
