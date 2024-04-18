let p = new Promise((resolve, reject) => {
    const val = 5

    if(val.typeOf = Number){
        resolve(val)
    }else{
        reject('O dado inserido não é um número')
    }
})

console.log('outros códigos')

p.then((value) => {return value + 5})
.then((value) => [console.log(value)])