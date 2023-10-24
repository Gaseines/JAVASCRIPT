function nomeComIdade(nome, idade){
    if(idade === undefined){
        console.log(`Ola ` + nome)
    }else{
        console.log(`Olá ${nome}, você tem ${idade} anos!`)
    }
}

console.log(nomeComIdade("Bruno"))
console.log(nomeComIdade("Gabriel", 20))


function soma(a,b){
    if(b === undefined){
        console.log('Essa função necessita dos dois parametros')
    }else{
        return a + b
    }
}

console.log(soma(4))
console.log(soma(10, 2))