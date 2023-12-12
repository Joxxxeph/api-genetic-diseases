const GeneticDiseasesServices = require("./genetic-diseases.service")

// definición de funciones
exports.findAll = async (req, res) => {

    try {
        const {requestT} = req
        const {specie} = req.query

        const geneticDiseases = await GeneticDiseasesServices.findAll(specie)

        return res.status(200).json({
        requestT,
        geneticDiseases,
        });
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}

exports.create = async (req, res) => {

    try {
        const {requestT} = req
        const { name, description, mortalityRate, treatment, symptoms, specie } = req.body

        const geneticDiseases = await GeneticDiseasesServices.create({
        name,
        description,
        mortalityRate,
        treatment,
        symptoms,
        specie
        });

    return res.status(201).json({
        requestT,
        data: geneticDiseases,
        
    })
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}

exports.getOne = async (req, res) => {

    try {
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
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}

exports.update = async (req, res) => {

    try {
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
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}

exports.deleteOne = async (req, res) => {
    try {
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
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!',
            error
        })
    }
}


