function Pessoa(nome, idade, sexo){
    this.nome = nome
    this.idade = idade
    this.sexo = sexo
    
}

Pessoa.prototype.saudacao = function(){
    console.log(`Olá meu nome é ${this.nome}`)
}


let gabriel = new Pessoa("Gabriel", 21, 'M')

gabriel.saudacao()

console.log(gabriel)

