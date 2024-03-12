function criarCarro(rodas, portas, marca){
    let carro = Object.create({})
    carro.rodas = rodas
    carro.portas = portas
    carro.marca = marca
    carro.acelerar = function(){
        console.log("Vruuuummm")
    }
    return carro
}

let hondaCivic = criarCarro(4, 2, 'Honda')

hondaCivic.acelerar()

console.log(hondaCivic)



