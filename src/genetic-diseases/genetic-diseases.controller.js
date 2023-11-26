const GeneticDiseasesServices = require("./genetic-diseases.service")

// definición de funciones
exports.findAll = async (req, res) => {

    const {requestT} = req

    const geneticDiseases = await GeneticDiseasesServices.findAll()

    return res.status(200).json({
        requestT,
        geneticDiseases
    })
}

exports.create = async (req, res) => {
    const {requestT} = req
    const { name, description, mortalityRate, treatment, symptoms } = req.body

    const geneticDiseases = await GeneticDiseasesServices.create({
      name,
      description,
      mortalityRate,
      treatment,
      symptoms,
    });

    return res.status(201).json({
        requestT,
        data: geneticDiseases,
        
    })
}

exports.getOne = async (req, res) => {
    const {id} = req.params;
    const {requestT} = req
    const geneticDisease = await GeneticDiseasesServices.findOne(id)
    if(!geneticDisease) {
        return res.status(404).json({
            status: 'error',
            message: `Genetic Disease with id: ${id} not found`
        })
    }
    return res.status(200).json({
        requestT,
        geneticDisease,
        id: req.params.id
    })
}

exports.update = async (req, res) => {
    const { id } = req.params
    const {requestT} = req
    const {name, description} = req.body

    const geneticDisease = await GeneticDiseasesServices.findOne(id) 

    if (!geneticDisease) {
        return res.status(404).json({
            status: 'error',
            message: `Genetic Disease with id: ${id} not found`
        })
    }

    const geneticDiseaseUpdate = await GeneticDiseasesServices.update(geneticDisease, {
      name,
      description,
    });

    return res.status(200).json({
        requestT,
        geneticDiseaseUpdate    
    })
}

exports.deleteOne = async (req, res) => {
    const {requestT} = req
    const { id } = req.params
    
    const geneticDisease = await GeneticDiseasesServices.findOne(id)

    if (!geneticDisease) {
        return res.status(404).json({
            status: 'error',
            message: `Genetic Disease with id: ${id} not found`
        })
    }

    await GeneticDiseasesServices.delete(geneticDisease)

    return res.status(204).json(null)
}


