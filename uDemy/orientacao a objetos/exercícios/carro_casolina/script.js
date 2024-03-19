class Carro {
    constructor(marca, cor, gasolina){
        this.marca = marca
        this.cor = cor
        this.gasolina = gasolina
    }

    andar(){
        for(let i = this.gasolina; i >= 0; i--){
            this.gasolina = i
            console.log('Andando.......... Gasolina: ' + this.gasolina)

            if(this.gasolina == 0){
                console.log("Carro sem gasolina, precisa abastecer!")
            }
        }
    }

    abastecer(num){
        if(num <= 10){
            console.log('Abastecendo Carro!')
            for(let i = this.gasolina; i <= num; i++){
            this.gasolina = i
            console.log(this.gasolina)
            
        }
        console.log('Carro abastecido, pode andar novamente!')

        }else{
            console.log("O tanque do carro suporta apenas 10L!")
            console.log('Abastecendo Carro!')
            for(let i = this.gasolina; i <= 10; i++){
                this.gasolina = i
                console.log(this.gasolina)
                

        } console.log('Carro abastecido, pode andar novamente!')
    }
    if(num == undefined){
            console.log("Defina quantos litros de gasolina deseja adicionar")
        }
        
        
        
}
}

let civic = new Carro("Honda", "Preto", 10)

console.log(civic)



