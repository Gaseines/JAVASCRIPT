let carro = {
    marca: "Honda",
    portas: 4,
    manual: true,
    motor: 1.7,
    velocidade: "Rapido"
}

console.log(carro)

console.log(carro.velocidade)

delete carro.velocidade

console.log(carro.velocidade)

carro.tetoSolar = false

console.log(carro.tetoSolar)

console.log(carro)
