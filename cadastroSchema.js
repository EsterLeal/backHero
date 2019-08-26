const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    endereco: {
        type: String,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    descricao: {
        type: String,
    },
});

const UsuarioModel = mongoose.model('Usuario', UsuarioSchema);

module.exports = UsuarioModel;