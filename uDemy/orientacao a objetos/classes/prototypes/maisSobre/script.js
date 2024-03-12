const pessoa = {
    bracos: 2
}

console.log(Object.getPrototypeOf(pessoa))
console.log(Object.getPrototypeOf(pessoa) === Object.prototype)

console.log(pessoa.hasOwnProperty('bracos'))

const pessoaNova = Object.create(pessoa)

console.log(pessoaNova.bracos)

console.log(pessoaNova.hasOwnProperty('bracos'))

console.log(Object.getPrototypeOf(pessoaNova) === pessoa)
