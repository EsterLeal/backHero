const { connect } = require('./cadastroRepository')
const UsuarioModel = require('./cadastroSchema');

connect()

const getAll = () => {
    return UsuarioModel.find((error, Usuario) => {
        return Usuario
    })
}

const getById = (id) => {
    return UsuarioModel.findById(id)
}

const add = (pessoa) => {
    const novaPessoa = new UsuarioModel(pessoa)
    return novaPessoa.save()
}

const remove = (id) => {
    return UsuarioModel.findByIdAndDelete(id)
}

const update = (id, Usuario) => {
    return UsuarioModel.findByIdAndUpdate(
      id,
      { $set: Usuario },
      { new: true }, // RETORNAR O USER JA ATUALIZADO NO CALLBACK
    )
  
  }

module.exports = {
    add,
    getAll,
    getById,
    remove,
    update
}