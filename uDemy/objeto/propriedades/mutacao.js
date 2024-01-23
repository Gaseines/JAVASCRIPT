let pessoa1 = {
    nome: "Gabriel"
}

let pessoa2 = pessoa1

let pessoa3 = {
    nome: "Gabriel"
}

console.log(pessoa2 == pessoa1) // Verdadeiro, elas sao iguais

console.log(pessoa3 == pessoa1) //Falso
console.log(pessoa3 == pessoa2) //Falso
//--------------------------------------------------
console.log(pessoa1.nome)
console.log(pessoa2.nome)

pessoa2.nome = "jao" //Altera nome de ambos Objetos (pessoa1 e pessoa2)

console.log(pessoa1.nome)

pessoa1.nome = "Luiza" //Da mesma forma altera nome de ambos Objetos (pessoa1 e pessoa2)

console.log(pessoa2.nome)