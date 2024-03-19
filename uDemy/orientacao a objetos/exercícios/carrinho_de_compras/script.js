// Define a classe Carrinho
class Carrinho {
    // Construtor da classe Carrinho
    constructor(itens, quantidadeTotal, valorTotal){
        // Inicializa o carrinho com os itens, a quantidade total de itens e o valor total
        this.itens = itens;
        this.quantidadeTotal = quantidadeTotal;
        this.valorTotal = valorTotal;
    }

    // Método para adicionar itens ao carrinho
    addItem(item){

        let contador = 0;

        // Percorre os itens do carrinho para verificar se o item já existe
        for(let buscItem in this.itens){
            // Se o item já existe, aumenta sua quantidade
            if(this.itens[buscItem].id == item.id){
                this.itens[buscItem].qtd += item.qtd;
                contador = 1; // Marca que o item foi encontrado e atualizado
            }
        }

        // Se o item não foi encontrado, adiciona-o ao carrinho
        if(contador == 0){
            this.itens.push(item);
        }
        
        // Atualiza a quantidade total e o valor total do carrinho
        this.quantidadeTotal += item.qtd;
        this.valorTotal += item.preco * item.qtd;
    }

    // Método para remover itens do carrinho
    removeItem(item){
        // Percorre os itens do carrinho para encontrar o item a ser removido
        for(let buscItem in this.itens){
            // Verifica se o item existe no carrinho
            if(this.itens[buscItem].id == item.id){
                // Se a quantidade no carrinho for maior do que a quantidade a ser removida
                if(this.itens[buscItem].qtd > item.qtd){
                    // Reduz a quantidade do item no carrinho
                    this.itens[buscItem].qtd -= item.qtd;
                    this.quantidadeTotal -= item.qtd;
                    this.valorTotal -= item.preco * item.qtd;
                }else{
                    // Se a quantidade a ser removida é igual ou maior, remove o item completamente
                    let obj = this.itens[buscItem];
                    let retirar = this.itens.indexOf(obj);
                    
                    // Ajusta a quantidade total e o valor total antes de remover o item
                    this.quantidadeTotal -= this.itens[buscItem].qtd;
                    this.valorTotal -= this.itens[buscItem].preco * this.itens[buscItem].qtd;

                    // Remove o item do carrinho
                    this.itens.splice(retirar, 1);
                }               
            }
        }       
    }
}

// Exemplo de uso da classe Carrinho
let carrinho = new Carrinho([
    {
        id: 0,
        nome: "",
        qtd: 0,
        preco: 0
    }
], 0, 0);

console.log(carrinho);

// Adiciona itens ao carrinho
carrinho.addItem({id: 1, nome: "Camiseta", qtd: 1, preco: 10});
console.log(carrinho);

carrinho.addItem({id: 2, nome: "Calça", qtd: 2, preco: 50});
console.log(carrinho);

carrinho.addItem({id: 3, nome: "Relógio", qtd: 1, preco: 100});
console.log(carrinho);

// Remove itens do carrinho
carrinho.removeItem({id: 1, nome: "Camiseta", qtd: 1, preco: 10});
console.log(carrinho);

carrinho.removeItem({id: 2, nome: "Calça", qtd: 1, preco: 50});
console.log(carrinho);
