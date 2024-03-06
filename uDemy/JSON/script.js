let pessoa = {
    "nome": "Gabriel",
    "idade": 21,
    "profissao": "programador"
}

let pessoaTexto = JSON.stringify(pessoa) //JSON para String

console.log(pessoaTexto)

let pessoaJSON = JSON.parse(pessoaTexto) //String para JSON

console.log(pessoaJSON)