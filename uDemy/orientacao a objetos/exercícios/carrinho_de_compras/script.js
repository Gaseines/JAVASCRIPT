class Carrinho {
    constructor(itens, quantidadeTotal, valorTotal){
        this.itens = itens
        this.quantidadeTotal = quantidadeTotal
        this.valorTotal = valorTotal
    }

    addItem(item){

        let contador = 0

        for(let buscItem in this.itens){
            if(this.itens[buscItem].id == item.id){
                this.itens[buscItem].qtd += item.qtd
                contador = 1
            }
        }

        if(contador == 0){
            this.itens.push(item)
        }
        
        this.quantidadeTotal += item.qtd
        this.valorTotal += item.preco * item.qtd
    }

    removeItem(item){
        for(let buscItem in this.itens){
            if(this.itens[buscItem].id == item.id){
                this.itens.pop(item)
            }
        }
        this.quantidadeTotal -= item.qtd
        this.valorTotal -= item.preco * item.qtd
    }

}

let carrinho = new Carrinho([
    {
        id: 1,
        nome: "Camiseta",
        qtd: 1,
        preco: 10

    }
], 1, 0)

console.log(carrinho)

carrinho.addItem({id: 1, nome: "Camiseta", qtd: 2, preco: 20})

console.log(carrinho)

carrinho.addItem({id: 2, nome: "Calça", qtd: 1, preco: 50})

console.log(carrinho)

carrinho.addItem({id:3, nome: "Relógio", qtd:1, preco:100})

console.log(carrinho)









