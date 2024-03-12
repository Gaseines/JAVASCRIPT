let cachorro = {
    patas: 4,
    raca: 'SRD',
    latir: function(){
        console.log("Au Au")
    }
}

let boby = Object.create(cachorro)

boby.latir()

boby.raca = "Pastor Alemão"

console.log(`A raça de Boby é ${boby.raca}`)

let pipoca = Object.create(cachorro)

pipoca.raca = "Lulu da Pomerania"

pipoca.latir()

console.log(`A raça da Pipoca é ${pipoca.raca}`)



