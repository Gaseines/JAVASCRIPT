


let amigo = {
nome: 'Jose',
sexo: 'M',
peso: 75.5,
engordar(p = 0){
    console.log(`Engordou`)
    this.peso += p
}}

amigo.engordar(5)

console.log(`Seu nome é ${amigo.nome} e pesa ${amigo.peso}`)