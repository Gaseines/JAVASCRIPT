var divisao = '-------------------------------------'

function parimpar(n){
    if(n%2 == 0){
        return 'Par!'
    }else{
        return 'Impar!'
    }
}
var res = parimpar(225)
console.log(res)


console.log(divisao)



function soma(n1=0, n2=0){
    return n1 + n2
}
var res = soma(7,3)
console.log(res)


console.log(divisao)


let v = function mult(x){
    return x*2
}
console.log(v(6))


console.log(divisao)


function fatorial(n){
    let f = 1
    for(let c = n; c > 1; c--){
        f *= c
    }
    return f
}
console.log(fatorial(5))

function fatorial2(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial2(n-1)
    }
}
console.log(fatorial2(5))