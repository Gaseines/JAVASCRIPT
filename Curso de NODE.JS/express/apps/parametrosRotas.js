//Criando servidor com Express
const express = require('express')
const app = express()

const porta = 7077

//Inicia servidor
app.listen(porta, (req, res) => {
    console.log(`Servidor aberto na porta ${porta}`)
})
//------------------------------------------------------------------------
//Rotas do servidor

app.get('/', (req, res) => {
    //Exibe uma mensagem
    res.send('Bem vindo a Pagina principal')
})

//Rota com parametro

//os parametros estao na rota como : localhost:7077/ola/gabriel/programador
app.get('/ola/:nome/:cargo', (req, res) => {
    res.send('<h1> Ola ' + req.params.nome + '</h1> <h2> Seu cargo é: ' + req.params.cargo + '</h2>');
    
})
//---------------------------------------------------------------------