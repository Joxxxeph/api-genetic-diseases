// definición de funciones
exports.findAll = (req, res) => {

    const {requestT, saludo1} = req

    return res.status(200).json({
        message: 'method get - findAll',
        requestT,
        saludo1
    })
}

exports.create = (req, res) => {
    const disease = req.body
    const { enfermedad, especie, raza } = req.body

    console.log(enfermedad);

    return res.status(201).json({
        message: 'method post - create',
        data: req.body
    })
}

exports.getOne = (req, res) => {
    console.log(req.params);
    return res.status(200).json({
        message: "method get - findOne",
        id: req.params.id
    })
}

exports.update = (req, res) => {
    const { id } = req.params
    const {saludo1} = req
    return res.status(200).json({
        message: "method patch - update",
        id,
        saludo1
    })
}

exports.deleteOne = (req, res) => {
    const { id } = req.params
    const { saludo2 } = req
    return res.status(200).json({
        message: "method delete - delete",
        id,
        saludo2
    })
}


