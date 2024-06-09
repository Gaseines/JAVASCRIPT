const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

//Criando tabelas
//Model de Postagem

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//Sincroniza o Model com o BD

//Postagem.sync({force: true})  //Quando 'force: true' é passado para o método sync, o Sequelize vai dropar (deletar) as tabelas existentes e recriá-las com a estrutura definida nos modelos. Isso é útil durante o desenvolvimento quando você precisa garantir que a estrutura do banco de dados esteja sempre atualizada com os modelos definidos no código.    

//Em vez de usar force: true, você pode usar alter: true para alterar as tabelas existentes sem deletá-las.

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

//Sincroniza o Model com o BD
Usuario.sync({alter: true})

//adicionar dados na tabela

Usuario.create({
    nome: 'Gabriel',
    sobrenome: 'Nunes',
    idade: '21',
    email: 'blabla@mail.com'
})



