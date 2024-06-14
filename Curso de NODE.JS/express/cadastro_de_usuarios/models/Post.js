const Sequelize = require('sequelize');
const db = require('../db/connection');

const Post = db.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

module.exports = Post;
