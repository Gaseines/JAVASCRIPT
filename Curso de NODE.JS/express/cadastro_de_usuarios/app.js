const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const db = require('./db/connection')
const path = require('path')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

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

//ROTAS

app.get('/', (req, res) => {
  Post.findAll({order: [['id', 'DESC']]})
  .then((posts) => {
    res.render('index', {posts: posts})
  })
})

app.get('/cad', (req, res) => {
  res.render('formulario')
})

app.post('/add', (req, res) => {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  }).then(() => {
    res.redirect('/')
  }).catch(err => {
    res.send(err)
  })
})

app.get('/delete/:id', (req, res) => {
  Post.destroy({where: {id: req.params.id}})
  .then(() => {
    res.send('Postagem deletada com sucesso!')
  }).catch(err => {
    res.send('Esta postagem não existe!')
  })
})
