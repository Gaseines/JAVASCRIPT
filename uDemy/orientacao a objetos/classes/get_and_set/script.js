class Cachorro {
    constructor(raca, cor){
        this.raca = raca
        this.cor = cor
    }

    latir(){
        console.log("Au Au")
    }

    get verRaca(){
        return this.raca
    }

    set criarRaca(raca){
        this.raca = raca
    }
}

let caramelo = new Cachorro('SRD', 'Marrom')

console.log(caramelo)

caramelo.criarRaca = "Caramelo"

console.log(caramelo.verRaca)


