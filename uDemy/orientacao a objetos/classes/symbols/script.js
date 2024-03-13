class Cachorro {
    constructor(raca, cor){
        this.raca = raca
        this.cor = cor
    }

    latir(){
        console.log("Au Au")
    }
}

Cachorro.prototype.raca = "SRD" //Valor definido para o prtotype pai
let patas = Symbol()

Cachorro.prototype[patas] = 4

let labrador = new Cachorro('Labrador', 'Cinza')

console.log(Cachorro.prototype[patas])
console.log(labrador[patas])


