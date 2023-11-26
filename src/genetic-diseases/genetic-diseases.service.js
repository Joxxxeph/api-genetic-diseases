const GeneticDiseases = require('./genetic-diseases.model')

class GeneticDiseasesServices {

    static async findAll(){
        return await GeneticDiseases.findAll({
            where: {
                status: 'active'
            }
        })
    }

    static async create(data){
        return await GeneticDiseases.create(data)
    }

    static async findOne(id){
        return await GeneticDiseases.findOne({
            where: {
                id,
                status: 'active'
            }
        })
    }

    static async update(geneticDisease, data){
        return await geneticDisease.update(data)
    }

    static async delete(geneticDisease){
        return await geneticDisease.update({
            status: 'inactive'
        })
    }
}

module.exports = GeneticDiseasesServices