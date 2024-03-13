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
Cachorro.prototype.patas = 4

let labrador = new Cachorro('Labrador', 'Cinza')

labrador.latir()

console.log(labrador)

console.log(Cachorro.prototype.raca)
console.log(labrador.raca)
