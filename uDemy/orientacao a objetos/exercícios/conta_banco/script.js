class ContaBanco {
    constructor(saldo){
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    sacar(valor){
        return this.saldo -= valor
    }
}

let contaGabriel = new ContaBanco(1000)

console.log(contaGabriel.saldo)

contaGabriel.depositar(2000)

console.log(contaGabriel.saldo)

contaGabriel.sacar(500)

console.log(contaGabriel.saldo)