const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// definición de funciones

const findAll = (req, res) => {
    return res.status(200).json({
        message: 'method get - findAll'
    })
}

const create = (req, res) => {
    const disease = req.body
    const { enfermedad, especie, raza } = req.body

    console.log(enfermedad);

    return res.status(201).json({
        message: 'method post - create',
        data: req.body
    })
}

const getOne = (req, res) => {
    console.log(req.params);
    return res.status(200).json({
        message: "method get - findOne",
        id: req.params.id
    })
}

const update = (req, res) => {
    const { id } = req.params
    return res.status(200).json({
        message: "method patch - update",
        id,
    })
}

const deleteOne = (req, res) => {
    const { id } = req.params
    return res.status(200).json({
        message: "method delete - delete",
        id,
    })
}

// endpoint para buscar todas las enfermedades genéticas
app.get('/api/v1/genetic-diseases', findAll)

// endpoint para crear una enfermedad genética
app.post('/api/v1/genetic-diseases', create)

// endpoint para buscar una enfermedad genética
app.get(`/api/v1/genetic-diseases/:id`, getOne)

//endpoint para actualizar una enfermedad genética
app.patch('/api/v1/genetic-diseases/:id', update)

//endpoint para eliminar una enfermedad genética
app.delete('/api/v1/genetic-diseases/:id', deleteOne)


app.listen(3000, () => {
    console.log(`Server runing on port http://localhost:${3000}`);
})