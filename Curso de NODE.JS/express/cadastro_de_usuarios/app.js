const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const db = require('./db/connection')
const path = require('path')
const bodyParser = require('body-parser')

//Porta
const port = 7077


//Config
//Tamplate Engine
    app.set('views', path.join(__dirname, 'views'))
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')




//Conectando banco de dados
db
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados concluida com sucesso!')
  })
  .catch(err => {
    console.log(`Ocorreu o erro ${err} ao conectar copm o banco de dados!`)
  })



  //Body Parser
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json())




//Abrindo servidor na porta "port"
app.listen(port, (req, res) => {
    console.log(`Conectado a porta ${port}`)
})


app.get('/cad', (req, res) => {
  res.render('layouts/formulario')
})

app.post('/add', (req, res) => {
  res.send('Título: '+req.body.titulo+' Conteúdo: '+req.body.conteudo)
})



