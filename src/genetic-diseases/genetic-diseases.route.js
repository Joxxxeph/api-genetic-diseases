const express = require('express')
const {findAll, create, update, getOne, deleteOne} = require('./genetic-diseases.controller') 
const { saludo1, saludo2 } = require('./genetic-diseases-middleware')

const router = express.Router()

router.use(saludo1);
router.use(saludo2)

// endpoint para buscar todas las enfermedades genéticas
router.get('/genetic-diseases', findAll)

// endpoint para crear una enfermedad genética
router.post('/genetic-diseases', create)

// endpoint para buscar una enfermedad genética
router.get(`/genetic-diseases/:id`, getOne)

//endpoint para actualizar una enfermedad genética
router.patch('/genetic-diseases/:id', update)

//endpoint para eliminar una enfermedad genética
router.delete('/genetic-diseases/:id', deleteOne)

module.exports = router