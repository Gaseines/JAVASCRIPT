class Mamifero {
    constructor(patas){
        this.patas = patas
    }
}

class Cachorro extends Mamifero {
    constructor(raca, patas){
        super(patas)
        this.raca = raca
    }
}

let labrador = new Cachorro('Labrador', 4)

console.log(labrador)
