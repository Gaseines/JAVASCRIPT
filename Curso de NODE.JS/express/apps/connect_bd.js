const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate(

).then(() => {
    console.log('Conectado ao banco de dados com sucesso!!')

}).catch((err) => {
    console.log(err)
})
