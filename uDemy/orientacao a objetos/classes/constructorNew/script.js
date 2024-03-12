function Pessoa(nome, idade, sexo){
    this.nome = nome
    this.idade = idade
    this.sexo = sexo
    this.saudacao = function(){
        console.log(`Olá meu nome é ${nome}`)
    }
}


let gabriel = new Pessoa("Gabriel", 21, 'M')

gabriel.saudacao()

console.log(gabriel)

