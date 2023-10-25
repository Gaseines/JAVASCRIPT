function negativoPositivo(x){
    if(x < 0){
        return Math.abs(x)
    }else{
        return "Erro, valor precisa ser negativo"
    }
}

console.log(negativoPositivo(-10))
console.log(negativoPositivo(-350.66))
console.log(negativoPositivo(10))