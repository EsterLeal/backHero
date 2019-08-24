const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        // unique: true,
        require: true,
        // lowercase: true,
    },
    password: {
        type: String,
        require: true,
        // select: false,
    },
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    // },
});

const UsuarioModel = mongoose.model('Usuario', UsuarioSchema);

module.exports = UsuarioModel;