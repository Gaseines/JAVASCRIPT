// Definição da classe Endereco
class Endereco {
    // Construtor da classe recebe quatro parâmetros para inicializar um objeto Endereco
    constructor(rua, bairro, cidade, estado){
        this.rua = rua; // Inicializa a propriedade 'rua' do objeto
        this.bairro = bairro; // Inicializa a propriedade 'bairro' do objeto
        this.cidade = cidade; // Inicializa a propriedade 'cidade' do objeto
        this.estado = estado; // Inicializa a propriedade 'estado' do objeto
    }
    // Método para atualizar a propriedade 'rua' do objeto
    atualizarRua(valor){
        this.rua = valor; // Atualiza o valor da propriedade 'rua'
    }
    // Método para atualizar a propriedade 'bairro' do objeto
    atualizarBairro(valor){
        this.bairro = valor; // Atualiza o valor da propriedade 'bairro'
    }
    // Método para atualizar a propriedade 'cidade' do objeto
    atualizarCidade(valor){
        this.cidade = valor; // Atualiza o valor da propriedade 'cidade'
    }
    // Método para atualizar a propriedade 'estado' do objeto
    atualizarEstado(valor){
        this.estado = valor; // Atualiza o valor da propriedade 'estado'
    }
    
}

// Criação de um novo objeto 'endereco' usando a classe Endereco
let endereco = new Endereco("Mil e Quatro", "Itajuba", "Itajaí", "SC");

console.log(endereco); // Exibe o estado inicial do objeto 'endereco'

// Atualiza o bairro do objeto 'endereco' para "Medeiros"
endereco.atualizarBairro("Medeiros");

console.log(endereco); // Exibe o estado atualizado do objeto 'endereco', mostrando a alteração no bairro
