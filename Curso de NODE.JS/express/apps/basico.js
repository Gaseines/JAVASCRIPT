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
    //escrever uma mensagem
    res.send("Seja bem-vindo ao meu Website!")
})

app.get('/sobre', (req, res) => {
    res.send("Aqui ficam as informações sobre o meu Site!")
})
//---------------------------------------------------------------------