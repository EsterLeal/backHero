const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./cadastroController');
const config = require('./config')

const app = express();
app.use(cors())

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    const test = `
    <pre>
      Por aqui está tudo OK! XD
    </pre>
    `
    res.send(test)
})

app.get('/cadastrar', async (req, res) => {
    controller.getAll()
        .then(usuarios => res.send(usuarios))
    // response.send(controller.getAll())
})

app.get('/cadastrar/:id', (req, res) => {
    const id = req.params.id
    controller.getById(id)
        .then(usuario => {
            if (!usuario) { // usuario === null || usuario === undefined
                res.sendStatus(404) // usuario nao encontrado
            } else {
                res.send(usuario)
            }
        })
        .catch(error => {
            if (error.name === "CastError") {
                response.sendStatus(400)
            } else {
                response.sendStatus(500)
            }
        })
})

app.post('/cadastrar', (req, res) => {
    controller.add(req.body)
        .then(usuario => {
            const _id = usuario._id
            res.send(_id)
        })
        .catch(error => {
            if (error.name === "ValidationError") {
                response.sendStatus(400)
            } else {
                response.sendStatus(500)
            }
        })
})

app.patch('/cadastrar/:id', (req, res) => {
    const id = req.params.id
    controller.update(id, req.body)
        .then(usuario => {
            if (!usuario) { res.sendStatus(404) }
            else { res.send(usuario) }
        })
        .catch(error => {
            if (error.name === "MongoError" || error.name === "CastError") {
                response.sendStatus(400)
            } else {
                response.sendStatus(500)
            }
        })
})

app.delete('/cadastrar/:id', (req, res) => {
    controller.remove(req.params.id)
        .then(usuario => {
            if (usuario === null || usuario === undefined) {
                response.sendStatus(400)
            } else {
                res.sendStatus(204)
            }
        })
        .catch(error => {
            if (error.name === "CastError") {
                response.sendStatus(400)
            } else {
                res.sendStatus(500)
            }
        })
})

app.listen(config.port, () => {
    console.log('Server listening on port %s, Ctrl+C to stop', config.port)
})
