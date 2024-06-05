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
    //Envia arquivo html
    res.sendFile(__dirname + "/pages/index.html")
})
//---------------------------------------------------------------------