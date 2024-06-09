const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

//Config
  //Tamplate Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

//Porta
const port = 7077

//Abrindo servidor na porta "port"
app.listen(port, (req, res) => {
    console.log(`Conectado a porta ${port}`)
})

app.get('/', (req, res) => {
    
})


